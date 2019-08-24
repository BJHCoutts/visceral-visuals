module.exports = {
  siteMetadata: {
    title: `Visceral Visuals Meta Data`,
    description: `Basic Gatsby template including Typescript, MobX, Styled Components and Gatsby image utilities`,
    author: `Who Media`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
