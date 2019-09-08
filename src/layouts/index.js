import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      titleTemplate="%s | daanleenders.nl"
      defaultTitle={data.site.siteMetadata.person.name}
    >
      <base target="_blank" href="http://www.daanleenders.nl/" />

      <meta
        name="description"
        content={'The personal site of ' + data.site.siteMetadata.person.name}
      />
      <meta name="keywords" content={data.site.siteMetadata.person.name} />
    </Helmet>

    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        person {
          name
        }
      }
    }
  }
`
