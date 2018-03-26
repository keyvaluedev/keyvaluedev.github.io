import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      padding: '8px'
    }}
  >
    <Helmet
      title="Key Value Development Limited"
      meta={[
        {
          name: 'description',
          content: 'Software engineering from the South East of England.'
        },
        { name: 'keywords', content: 'sample, something' },
        {
          name: 'google-site-verification',
          content: 'pLu7of3REiYFhgYmjUgfBviQ8p_lXOFnf8AtVurS8N4'
        }
      ]}
    />
    {/* <Header /> */}
    <div
      style={{
        margin: '0 auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>{children()}</div>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
