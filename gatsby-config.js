require(`dotenv`).config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Fall and Winter Art`,
    // Default title of the page
    siteTitleAlt: `Fall and Winter Art`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Fall and Winter Art`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.fallandwinterart.com/`,
    // Used for SEO
    siteDescription: `Fall and Winter Art`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `fallandwinterart`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fall and Winter Art`,
        short_name: `FaWa`,
        description: `Fall and Winter Art`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.jpg`,
            sizes: `192x192`,
            type: `image/jpg`
          },
          {
            src: `/android-chrome-512x512.jpg`,
            sizes: `512x512`,
            type: `image/jpg`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
