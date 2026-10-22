const path = require("path");
const fs = require("node:fs");
const { execSync } = require("node:child_process");

// Define root directory relative to this script (scripts/generate-feed.js -> ../)
const ROOT_DIR = path.resolve(__dirname, "..");

const SITE_BASE = "https://developer.adobe.com/photoshop/uxp/2022";
const CHANGELOG_PATH = "ps-reference/changelog";
const CHANGELOG_DIR = path.posix.dirname(CHANGELOG_PATH);
const CHANGELOG_URL = `${SITE_BASE}/${CHANGELOG_PATH}/`;
const FEED_URL = `${SITE_BASE}/feed.xml`;
const CHANGELOG_FILE = path.join(
  ROOT_DIR,
  "src",
  "pages",
  "ps-reference",
  "changelog",
  "index.md"
);
const FEED_FILE = path.join(ROOT_DIR, "src", "pages", "feed.xml");

function normalizeLineEndings(markdown) {
  return markdown.replace(/\r\n/g, "\n");
}

function extractFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { meta: {}, content: markdown };

  const meta = {};
  const metaLines = match[1].split("\n");
  for (const line of metaLines) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (m) {
      meta[m[1]] = m[2].trim().replace(/^['"]|['"]$/g, "");
    }
  }

  return { meta, content: markdown.slice(match[0].length) };
}

function getLineDatesFromGit(filePath) {
  const lineDates = {};
  try {
    const stdout = execSync(`git blame --porcelain "${filePath}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });

    const commitDates = {};
    const lines = stdout.split("\n");
    let currentCommit = null;
    let lineNumber = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const matchHeader = line.match(/^([0-9a-f]{40})\s+\d+\s+(\d+)/);
      if (matchHeader) {
        currentCommit = matchHeader[1];
        lineNumber = parseInt(matchHeader[2], 10);
      } else if (line.startsWith("author-time ")) {
        const time = parseInt(line.split(" ")[1], 10);
        commitDates[currentCommit] = new Date(time * 1000).toISOString().split("T")[0];
      } else if (line.startsWith("\t")) {
        if (lineNumber && commitDates[currentCommit]) {
          lineDates[lineNumber] = commitDates[currentCommit];
        }
      }
    }
  } catch {
    // Git not available or repo shallow
  }
  return lineDates;
}

function parseReleases(rawMarkdown, filePath) {
  const normalized = normalizeLineEndings(rawMarkdown);
  const rawLines = normalized.split("\n");
  const lineDates = filePath ? getLineDatesFromGit(filePath) : {};

  let fallbackDate = null;
  try {
    if (filePath && fs.existsSync(filePath)) {
      fallbackDate = fs.statSync(filePath).mtime.toISOString().split("T")[0];
    }
  } catch {
    fallbackDate = new Date().toISOString().split("T")[0];
  }

  const releases = [];
  let current = null;
  let inFrontmatter = false;

  for (let i = 0; i < rawLines.length; i++) {
    const lineNum = i + 1;
    const line = rawLines[i];

    if (i === 0 && line.trim() === "---") {
      inFrontmatter = true;
      continue;
    }
    if (inFrontmatter) {
      if (line.trim() === "---") {
        inFrontmatter = false;
      }
      continue;
    }

    // Matches any level-2 release heading, e.g.:
    // "## UXP v9.4", "## UDT v2.1.0", "## [v4.57.22] 2026-10-08", "## 2025-11-14"
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (current) releases.push(current);
      const rawHeading = headingMatch[1].trim();

      // Check for explicit date (YYYY-MM-DD) in heading
      const dateMatch = rawHeading.match(/\b(\d{4}-\d{2}-\d{2})\b/);
      const date = dateMatch ? dateMatch[1] : (lineDates[lineNum] || fallbackDate);

      // Extract version if present (e.g. 9.4, 2.1.0)
      const versionMatch = rawHeading.match(/\[?\s*v?([\d.]+)\s*\]?/i);
      const version = versionMatch ? versionMatch[1] : null;

      // Clean display title
      const title = rawHeading.replace(/^\[\s*|\s*\]$/g, "").trim();

      current = {
        title,
        rawHeading,
        version,
        date,
        bodyLines: [],
      };
    } else if (current) {
      current.bodyLines.push(line);
    }
  }
  if (current) releases.push(current);

  return releases;
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveRelativeLink(href) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#")) return href;
  if (href.startsWith("/")) return `${SITE_BASE}${href}`;

  // Relative markdown links are relative to CHANGELOG_DIR (e.g. "uxp-api")
  const [filePath, hash] = href.split("#");
  const resolved = path.posix
    .normalize(path.posix.join(CHANGELOG_DIR, filePath))
    .replace(/(^|\/)index\.md$/i, "$1")
    .replace(/\.md$/i, "/");

  return `${SITE_BASE}/${resolved}${hash ? `#${hash}` : ""}`;
}

function escapeXml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInline(text) {
  // 1. Preserve code spans first so inner text is not treated as markdown
  const codeSpans = [];
  let formatted = text.replace(/`([^`]+)`/g, (_, code) => {
    codeSpans.push(`<code>${escapeXml(code)}</code>`);
    return `\u0000${codeSpans.length - 1}\u0000`;
  });

  // 2. Escape XML chars in remaining text
  formatted = escapeXml(formatted);

  // 3. Links: [text](href) -> <a href="...">text</a>
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, linkText, href) => `<a href="${escapeXml(resolveRelativeLink(href))}">${linkText}</a>`
  );

  // 4. Bold: **text** or __text__ -> <strong>text</strong>
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/__([^_]+)__/g, "<strong>$1</strong>");

  // 5. Restore code spans
  return formatted.replace(/\u0000(\d+)\u0000/g, (_, index) => codeSpans[index]);
}

function bodyToHtml(bodyLines) {
  const lines = bodyLines;
  const blocks = [];
  let inCode = false;
  let codeBuffer = [];
  let inList = false;
  let inTable = false;
  let tableBuffer = [];

  function flushList() {
    if (inList) {
      blocks.push("</ul>");
      inList = false;
    }
  }

  function flushTable() {
    if (inTable && tableBuffer.length > 0) {
      const rows = [];
      let isFirst = true;
      for (const rowLine of tableBuffer) {
        if (/^\s*\|?\s*[-:]+[-| :]*\|?\s*$/.test(rowLine)) {
          continue; // Header separator line like | --- | --- |
        }
        const cells = rowLine
          .trim()
          .replace(/^\||\|$/g, "")
          .split("|")
          .map((c) => c.trim());
        const tag = isFirst ? "th" : "td";
        rows.push(
          `<tr>${cells
            .map((c) => `<${tag}>${formatInline(c)}</${tag}>`)
            .join("")}</tr>`
        );
        isFirst = false;
      }
      blocks.push(`<table>\n${rows.join("\n")}\n</table>`);
      tableBuffer = [];
      inTable = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i].replace(/\r$/, "");
    const trimmed = rawLine.trim();

    // Fenced code block toggle
    const codeMatch = rawLine.match(/^(\s*)```(.*)$/);
    if (codeMatch) {
      if (inCode) {
        blocks.push(
          `<pre><code>${escapeXml(codeBuffer.join("\n"))}</code></pre>`
        );
        codeBuffer = [];
        inCode = false;
      } else {
        flushList();
        flushTable();
        inCode = true;
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    // Table rows
    if (/^\s*\|.*\|\s*$/.test(rawLine)) {
      flushList();
      inTable = true;
      tableBuffer.push(rawLine);
      continue;
    } else {
      flushTable();
    }

    // Subheadings (e.g. ### New, ### Fixed)
    const headingMatch = rawLine.match(/^###+\s+(.*)$/);
    if (headingMatch) {
      flushList();
      blocks.push(`<h3>${formatInline(headingMatch[1].trim())}</h3>`);
      continue;
    }

    // Unordered list items
    const bulletMatch = rawLine.match(/^\s*[-*]\s+(.*)$/);
    if (bulletMatch) {
      if (!inList) {
        blocks.push("<ul>");
        inList = true;
      }
      blocks.push(`<li>${formatInline(bulletMatch[1].trim())}</li>`);
      continue;
    }

    // Blank line
    if (!trimmed) {
      flushList();
      continue;
    }

    // Regular paragraph
    flushList();
    blocks.push(`<p>${formatInline(trimmed)}</p>`);
  }

  flushList();
  flushTable();
  if (inCode && codeBuffer.length > 0) {
    blocks.push(`<pre><code>${escapeXml(codeBuffer.join("\n"))}</code></pre>`);
  }

  return blocks.join("\n");
}

function toRfc822(dateStr) {
  if (!dateStr) return "";
  const date = new Date(`${dateStr}T00:00:00Z`);
  if (isNaN(date.getTime())) return "";
  return date.toUTCString();
}

function buildItem(release) {
  const title = release.title;
  const anchor = slugify(release.rawHeading);
  const guid = anchor;
  const link = `${CHANGELOG_URL}#${anchor}`;
  const description = bodyToHtml(release.bodyLines);
  const safeDescription = description.replace(/]]>/g, "]]]]><![CDATA[>");
  const pubDateRfc = toRfc822(release.date);
  const pubDateXml = pubDateRfc
    ? `\n      <pubDate>${pubDateRfc}</pubDate>`
    : "";

  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>${pubDateXml}
      <description><![CDATA[${safeDescription}]]></description>
    </item>`;
}

function buildFeed(releases, metadata = {}) {
  // Sort newest first by date if dates differ; keep document order for matching dates
  const sorted = [...releases].sort((a, b) => {
    if (a.date && b.date) {
      const diff = new Date(b.date) - new Date(a.date);
      if (diff !== 0) return diff;
    }
    return 0;
  });

  const items = sorted.map(buildItem).join("\n");
  const newestDate = sorted.find((r) => r.date)?.date;
  const lastBuildDate = newestDate
    ? new Date(`${newestDate}T00:00:00Z`).toUTCString()
    : new Date().toUTCString();

  const title = metadata.title || "Photoshop API Changelog";
  const description =
    metadata.description || "Release notes for the Photoshop API Changelog";

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${CHANGELOG_URL}</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

function main() {
  const rawMarkdown = fs.readFileSync(CHANGELOG_FILE, "utf8");
  const { meta } = extractFrontmatter(normalizeLineEndings(rawMarkdown));
  const releases = parseReleases(rawMarkdown, CHANGELOG_FILE);
  const feed = buildFeed(releases, meta);

  fs.writeFileSync(FEED_FILE, feed, "utf-8");
  console.log(`Wrote ${releases.length} releases to ${path.relative(ROOT_DIR, FEED_FILE)}`);
}

main();
