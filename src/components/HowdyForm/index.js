import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HowdyForm extends Component {
  componentDidMount() {
    if (!window.howdyEvents) this._injectScript()
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.email !== this.props.email ||
      nextProps.token !== this.props.token ||
      nextProps.onSubmit !== this.props.onSubmit
    )
      this._updateScript()
  }

  _injectScript = () => {
    const script = document.createElement('script')
    script.src = `https://static.howdyform.com/howdyClient.js?token=${
      this.props.token
    }`
    script.async = true
    script.id = `howdyScript${this.props.token}`
    script.dataset.howdyRecipient = this.props.email
    if (this.props.onSubmit) {
      script.onload = () => {
        window.howdyEvents.afterSend = this.props.onSubmit
      }
    }
    document.body.appendChild(script)
  }

  _updateScript = () => {
    document.getElementById(`howdyScript${this.props.token}`).remove()
    this._injectScript()
  }

  render() {
    const { children, email, onSubmit, token, ...rest } = this.props
    return <form {...rest}>{children}</form>
  }
}

HowdyForm.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
}
