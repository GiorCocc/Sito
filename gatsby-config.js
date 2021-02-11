/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title: `Giorgio Coccapani`,
    description: `Sito personale di Giorgio Coccapani, sviluppatore, studente di ingegneria e appassionato di tecnologia. Un portfolio dove puoi trovare tutto ciò che posso offrire come sviluppatore e qualche pensiero raccolto in modo ordinato`,
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
        description: `Sito personale di Giorgio Coccapani, sviluppatore, studente di ingegneria e appassionato di tecnologia. Un portfolio dove puoi trovare tutto ciò che posso offrire come sviluppatore e qualche pensiero raccolto in modo ordinato`,
        lang: `it`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffc85b`,
        display: `minimal-ui`,
        icon :`src/img/icon.png`,
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss'
  ],
}
