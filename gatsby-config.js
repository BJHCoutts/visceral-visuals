module.exports = {
  siteMetadata: {
    title: `Visceral Visuals by Brian Coutts`,
    description: `Visceral Visuals by Brian Coutts, art, design and illustration`,
    author: `Brian Coutts`,
    phoneDisplay: `CHANGME`,
    phoneLink: `CHANGME`,
    email: `hello@CHANGME.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `design`,
        path: `${__dirname}/src/images/design`
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
