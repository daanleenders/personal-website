module.exports = {
  siteMetadata: {
    title: 'Daan Leenders',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      }
  ]
};
