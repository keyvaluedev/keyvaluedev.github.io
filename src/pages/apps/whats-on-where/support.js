import React from 'react'
import Link from 'gatsby-link'
import screenshot from './screenshot.png'

const Support = () => (
  <div>
    <h1>"Whats on where" support.</h1>
    <div style={{ display: 'flex' }}>
      <div>
        <p>
          If you need any help with this app please{' '}
          <Link to="/contact">contact us</Link>.
        </p>
      </div>
      <div>
        <img
          style={{ width: '50%' }}
          src={screenshot}
          alt="Screenshot of whats on where app"
        />
      </div>
    </div>
  </div>
)

export default Support
