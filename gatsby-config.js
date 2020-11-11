module.exports = {
  siteMetadata: {
    title: `Visceral Visuals by Brian Coutts`,
    description: `Visceral Visuals by Brian Coutts. A playground for my code and a gallery for my images.`,
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
    `gatsby-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
