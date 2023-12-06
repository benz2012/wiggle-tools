/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wiggle Tools`,
    siteUrl: `https://wiggle.tools`
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-preload-fonts`,

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          // Add Tool URLs here
          allPages.push({ path: '/animate' })
          return allPages
        },
      },
    },
  ]
};
