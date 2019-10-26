module.exports = {
  siteMetadata: {
    title: `Visceral Visuals Meta Data`,
    description: `Basic Gatsby template including Typescript, MobX, Styled Components and Gatsby image utilities`,
    author: `Who Media`,
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
