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
    },
    'gatsby-plugin-postcss'
  ],
}
