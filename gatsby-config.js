module.exports = {
  siteMetadata: {
    title: `Kyle Melton`,
    description: `My resume, my blog, my website`,
    author: `@kalm42`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // images in src not for user control
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // images for user control
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      // load user controlled content
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content` },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: { name: `uploads` },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 2048 },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: { destinationDir: `static` },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
