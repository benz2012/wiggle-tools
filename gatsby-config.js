/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wiggle Tools`,
    siteUrl: `https://www.wiggle.tools`
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

    `gatsby-plugin-sitemap`,
  ]
};
