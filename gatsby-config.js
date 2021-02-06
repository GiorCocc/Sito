/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title: `Giorgio Coccapani`,
    description: `Sito personale di Giorgio Coccapani`,
    author: `Giorgio Coccapani`,
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giorgio Coccapani`,
        short_name: `GC`,
        description: `The application does cool things and makes your life better.`,
        lang: `it`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffc85b`,
        display: `minimal-ui`,
        icon :`src/img/icon.png`,
        cache_busting_mode: `query`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    'gatsby-plugin-postcss'
  ],
}
