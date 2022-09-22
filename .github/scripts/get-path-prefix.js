// This script retrieves the pathPrefix from the gatsby-config.js file.
// It serves as an example for how to set up external javascript functions
// outside workflow .yml files when they get too big or complex to keep them inline.

// Documentation for the actions/github-script:
// https://github.com/actions/github-script#run-a-separate-file

module.exports = async ({ core }) => {
  const { pathPrefix } = await require('../../gatsby-config.js');

  if (!pathPrefix) {
    core.setFailed(
      `The pathPrefix in the site's gatsby-config.js file is missing.

      To fix this, open your gatsby-config.js file, and add it to the config object:

      module.exports = {
        pathPrefix: "/commerce/frontend-core/",
        ...
      }`
    );
  } else if (pathPrefix === '/') {
    core.setFailed(
      `The pathPrefix in the site's gatsby-config.js file is set to "/". This is not allowed.

      To fix this, change the pathPrefix to include a name that starts and ends with "/":

      pathPrefix: "/commerce/frontend - core/"

      This name identifies the site within the developer.adobe.com domain:
      https://developer.adobe.com/document-services/<PATH_TO_FILES>.
      `
    );
  } else {
    if (!pathPrefix.startsWith('/') || !pathPrefix.endsWith('/')) {
      core.setFailed(
        `The pathPrefix in the site's gatsby-config.js file does not start or end with "/".

        To fix this, change the pathPrefix to include a name that starts and ends with "/".
        For example: "/document-services/" or "/commerce/cloud-tools/".

        This is required by convention because of the way we construct site URLs.
        For example: https://developer.adobe.com + /document-services/ + path/to/files/.
        `
      );
    }
  }
  core.setOutput('path_prefix', pathPrefix);
};
