require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `PMI Total Fitness`,
    description: `Gym / Fitness center located in Waterville, MN`,
    author: `Dan Choiniere`,
    address: `124 S. 2nd St. Waterville MN  56096`,
    phone: `507.362.4227`,
  },
  plugins: [
    `gatsby-plugin-stripe`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "ApplicationFee",
          "Sku",
          "Subscription",
        ],
        secretKey: `sk_test_xW1ZLgW59XbAZaO5kR5D62Vi002TI1Lq44`,
        downloadFiles: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Red Hat Display", "Open Sans"],
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
