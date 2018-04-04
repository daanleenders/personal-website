import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | daanleenders.nl" defaultTitle="Daan Leenders">
      <base target="_blank" href="http://www.daanleenders.nl/" />

      <meta name="description" content="The personal site of Daan Leenders" />
      <meta name="keywords" content="Daan leenders" />
    </Helmet>

    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
