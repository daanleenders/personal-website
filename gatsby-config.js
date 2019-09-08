module.exports = {
  siteMetadata: {
      person: {
          name: 'Daan Leenders',
          currentJob: {
              title: 'Lead developer',
              challenge: 'Growing a dev team and improving a legacy application',
              company: {
                  name: 'Tracebuzz',
                  site: 'https://www.tracebuzz.com'
              },
          }
      }
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography.js`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/`,
          },
      },
      `gatsby-transformer-remark`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
  ]
};
