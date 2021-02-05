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
    {
      resolve: "gatsby-plugin-react-svg",
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giorgio Coccapani`,
        short_name: `GC`,
        description: `Sito personale di Giorgio Coccapani`,
        lang: `it`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/icon.png`, // This path is relative to the root of the site.
      }, 
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss'
  ],
}
