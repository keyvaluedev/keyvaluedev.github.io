import React from 'react'
import Link, { navigateTo } from 'gatsby-link'
import HowdyForm from '../components/HowdyForm'
import LabelledInput from '../components/LabelledInput'

const CONTACT_EMAIL = 'joe@keyvaluedevelopment.co.uk'
const HOWDY_TOKEN = 'am9lQGtleXZhbHVlZGV2ZWxvcG1lbnQuY28udWs'

const ContactPage = () => (
  <div className="contact-page">
    <Link to="/">back</Link>
    <h1>Contact us</h1>
    <HowdyForm
      token={HOWDY_TOKEN}
      email={CONTACT_EMAIL}
      onSubmit={() => navigateTo('/cheers')}
    >
      <LabelledInput name="name" label="Name" id="name" />
      <LabelledInput name="email" type="email" label="Email" id="email" />
      <LabelledInput name="message" multiline label="Message" id="message" />
      <button type="submit" style={{ float: 'right' }}>
        Send
      </button>
    </HowdyForm>
  </div>
)

export default ContactPage
