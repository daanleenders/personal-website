module.exports = {
  siteMetadata: {
      person: {
          name: 'Daan Leenders',
          currentJob: {
              title: 'Developer',
              challenge: 'Creating Customer Happiness',
              company: {
                  name: 'Tracebuzz',
                  image: 'x',
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
              name: `src`,
              path: `${__dirname}/src/`,
          },
      },
      `gatsby-transformer-remark`,
  ]
};
