import React from 'react'
import './css/style.css'

function stylesheet() {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={className}>stylesheets</h1>
    </div>
  )
}

export default stylesheet
