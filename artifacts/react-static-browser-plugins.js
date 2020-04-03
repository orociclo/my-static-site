// Imports
import plugin0 from 'E:/Repository/my-static-site/node_modules/react-static-plugin-reach-router/browser.api.js'

// Plugins
const plugins = [{
        location: "E:/Repository/my-static-site/node_modules/react-static-plugin-source-filesystem",
        plugins: [],
        hooks: {}
      },
{
        location: "E:/Repository/my-static-site/node_modules/react-static-plugin-reach-router",
        plugins: [],
        hooks: plugin0({})
      },
{
        location: "E:/Repository/my-static-site/node_modules/react-static-plugin-sitemap/dist",
        plugins: [],
        hooks: {}
      },
{
        location: "E:/Repository/my-static-site",
        plugins: [],
        hooks: {}
      }]

// Export em!
export default plugins