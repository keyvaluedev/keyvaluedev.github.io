import React from 'react'

import './index.css'

export default ({ id, label, multiline, hideLabel = false, ...rest }) => {
  const Element = multiline ? 'textarea' : 'input'
  return (
    <div className="labelled-input">
      <label htmlFor={id} className={hideLabel ? 'sr-only' : ''}>
        {label}
      </label>
      <Element
        className="input"
        id={id}
        rows={multiline ? 2 : undefined}
        {...rest}
      />
    </div>
  )
}
