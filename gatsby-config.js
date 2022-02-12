/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
// require('dotenv').config();

module.exports = {
  siteMetadata:{
    title: `Portfolio`,
    description: `Sito personale di Giorgio Coccapani, sviluppatore, studente di ingegneria e appassionato di tecnologia. Un portfolio dove puoi trovare tutto ciò che posso offrire come sviluppatore e qualche pensiero raccolto in modo ordinato`,
    author: `Giorgio Coccapani`,
    siteUrl: `https://giorgio-coccapani.it`,
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-svg',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        name:`images`,
        path: `${__dirname}/src/images`,
      } 
    },
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
        cache_busting_mode: `query`,
      },
    },
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `gc_sito/`
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "text-3xl text-giallo",
                "heading[depth=2]": "text-xl text-gray-700",
                "paragraph": "text-justify text-lg text-gray-600 mb-3",
                "list[ordered=false]": "list-disc text-justify text-lg text-gray-600 mb-3",
                "listItem": "ml-5 text-justify text-lg text-gray-600 mb-1",
                "link": "text-justify text-lg text-giallo mb-3"
              }
            }
          }
        ]
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sitemap`
  ],
}
