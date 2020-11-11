const path = require("path")

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const productTemplate = path.resolve("./src/templates/blog-post.tsx")
//   const res = await graphql(`
//     query {
//       allContentfulProduct {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   res.data.allContentfulProduct.edges.forEach(edge => {
//     createPage({
//       component: productTemplate,
//       path: `/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }
