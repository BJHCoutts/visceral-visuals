module.exports = {
  siteMetadata: {
    title: `Visceral Visuals by Brian Coutts`,
    description: `Visceral Visuals by Brian Coutts, art, design and illustration`,
    author: `Brian Coutts`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
