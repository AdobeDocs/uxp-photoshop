#!/usr/bin/env node
// Regenerates root-level reference-{js,css,html,spectrum}.js Gatsby nav data files
// based on the actual file structure under src/pages/uxp-api/reference-*/.
//
// For each reference type, we walk the directory and emit a nested array
// matching the original Gatsby schema:
//   [{ title, header?, pages: [{ title, path, pages?: [...] }, ...] }]
//
// Titles are derived from each page's YAML frontmatter `title:` (or fallbacks).
// Paths are constructed from the file path with proper trailing slashes.

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const PAGES_ROOT = path.join(REPO_ROOT, 'src/pages');

// Order of reference types to process and the output filename.
const REFERENCES = [
  { dir: 'uxp-api/reference-js', out: 'reference-js.js' },
  { dir: 'uxp-api/reference-css', out: 'reference-css.js' },
  { dir: 'uxp-api/reference-html', out: 'reference-html.js' },
  { dir: 'uxp-api/reference-spectrum', out: 'reference-spectrum.js' },
];

// Read frontmatter `title:` from a markdown file. Returns null if not found.
function readFrontmatterTitle(mdPath) {
  try {
    const content = fs.readFileSync(mdPath, 'utf8');
    const fm = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!fm) return null;
    const titleLine = fm[1].split('\n').find((l) => /^title\s*:/.test(l));
    if (!titleLine) return null;
    return titleLine.replace(/^title\s*:\s*/, '').trim().replace(/^["']|["']$/g, '');
  } catch {
    return null;
  }
}

// Convert a slug like "global-members" or "html-dom" to a Title Case display name.
// Falls back to plain capitalization if no special handling matches.
function slugToTitle(slug) {
  // Common acronym mapping
  const acronyms = {
    js: 'JS', css: 'CSS', html: 'HTML', dom: 'DOM', api: 'API', io: 'I/O',
    ui: 'UI', xmp: 'XMP', xml: 'XML', http: 'HTTP', url: 'URL', uxp: 'UXP',
    fs: 'fs', os: 'os', cep: 'CEP', xd: 'XD', sdk: 'SDK',
  };
  return slug
    .split('-')
    .map((w) => acronyms[w.toLowerCase()] || (w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

// Build pages array recursively for a directory. The directory's own index.md
// is treated as the "self" page; subdirectories become nested pages.
//
// Returns an array of page objects: { title, path, pages? }
function buildPages(dir, relPath) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];

  // 1) Sub-pages: direct .md files (excluding index.md)
  const mdFiles = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .map((e) => e.name)
    .sort();
  for (const f of mdFiles) {
    const slug = f.replace(/\.md$/, '');
    const fullPath = path.join(dir, f);
    const title = readFrontmatterTitle(fullPath) || slugToTitle(slug);
    result.push({
      title,
      path: `/${relPath}/${slug}/`,
    });
  }

  // 2) Sub-pages: subdirectories (with their own index.md)
  const subdirs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
  for (const sd of subdirs) {
    const subRelPath = `${relPath}/${sd}`;
    const subDir = path.join(dir, sd);
    const subIndex = path.join(subDir, 'index.md');
    const title =
      (fs.existsSync(subIndex) && readFrontmatterTitle(subIndex)) || slugToTitle(sd);
    const childPages = buildPages(subDir, subRelPath);

    if (childPages.length > 0) {
      result.push({
        title,
        header: true,
        pages: [
          // The section's own landing page first, if it has an index.md
          ...(fs.existsSync(subIndex)
            ? [{ title: 'Overview', path: `/${subRelPath}/` }]
            : []),
          ...childPages,
        ],
      });
    } else {
      result.push({
        title,
        path: `/${subRelPath}/`,
      });
    }
  }

  return result;
}

// Top-level: generate for each reference type. The top-level structure groups
// direct subdirectories of e.g. reference-js/ as headed sections.
function generateReferenceFile({ dir, out }) {
  const fullDir = path.join(PAGES_ROOT, dir);
  if (!fs.existsSync(fullDir)) {
    console.warn(`Skipping ${dir} (does not exist)`);
    return;
  }

  const result = [];
  const entries = fs.readdirSync(fullDir, { withFileTypes: true });

  // Top-level sections: each subdirectory becomes a header section.
  const subdirs = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  for (const sd of subdirs) {
    const subRelPath = `${dir}/${sd}`;
    const subDir = path.join(fullDir, sd);
    const subIndex = path.join(subDir, 'index.md');
    const title =
      (fs.existsSync(subIndex) && readFrontmatterTitle(subIndex)) || slugToTitle(sd);
    const childPages = buildPages(subDir, subRelPath);

    result.push({
      title,
      header: true,
      pages: [
        ...(fs.existsSync(subIndex)
          ? [{ title: 'Overview', path: `/${subRelPath}/` }]
          : []),
        ...childPages,
      ],
    });
  }

  // Top-level loose .md files (e.g., changelog3-p.md) - if needed, append.
  const looseMd = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .map((e) => e.name)
    .sort();
  for (const f of looseMd) {
    const slug = f.replace(/\.md$/, '');
    const fullPath = path.join(fullDir, f);
    const title = readFrontmatterTitle(fullPath) || slugToTitle(slug);
    result.push({ title, path: `/${dir}/${slug}/` });
  }

  const outPath = path.join(REPO_ROOT, out);
  const body = `module.exports=${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(outPath, body);
  console.log(`Wrote ${out}: ${result.length} top-level sections`);
}

for (const ref of REFERENCES) {
  generateReferenceFile(ref);
}
