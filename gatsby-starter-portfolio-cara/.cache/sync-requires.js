
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspaces/portifoli/gatsby-starter-portfolio-cara/.cache/dev-404-page.js")),
  "component---node-modules-lekoarts-gatsby-theme-cara-src-templates-cara-tsx": preferDefault(require("/workspaces/portifoli/gatsby-starter-portfolio-cara/node_modules/@lekoarts/gatsby-theme-cara/src/templates/cara.tsx")),
  "component---src-pages-404-tsx": preferDefault(require("/workspaces/portifoli/gatsby-starter-portfolio-cara/src/pages/404.tsx"))
}

