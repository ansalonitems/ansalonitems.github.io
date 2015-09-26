'use strict'

import React from 'react'

export default React.createClass({
  displayName: 'Link',

  onClick(e) {
    e.preventDefault()
    window.router.history.navigate(e.currentTarget.getAttribute('href'))
  },

  render() {
    let {...props} = this.props
    props.onClick = this.onClick
    return React.createElement('a', props)
  }
})
