import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Key Value</h1>
    <p>Software engineering from the South East of England.</p>
    <p>
      <Link to="/contact">Contact us</Link>
    </p>
    <p
      style={{
        fontSize: '0.6em',
        fontStyle: 'italic'
      }}
    >
      This website is currently being built, so check us out again soon when
      we're at our best.
    </p>
  </div>
)

export default IndexPage
