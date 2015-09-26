'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'
import items from './items.json'

export default React.createClass({
  displayName: 'ItemPage',

  propTypes: {
    id: React.PropTypes.number.isRequired
  },

  render() {
    const item = items.filter(item => item.id === this.props.id)[0]
    const date = new Date(item.date)
    return (
      <PageComponent>
        <dl>
          <dt>Name:</dt>
          <dd>{item.name}</dd>
          <dt>Description:</dt>
          <dd>{item.description}</dd>
          <dt>Date Captured:</dt>
          <dd>{date.toString()}</dd>
          <dt>Zone:</dt>
          <dd>{item.zone}</dd>
          <dt>Location:</dt>
          <dd><pre>{item.map}</pre></dd>
        </dl>
      </PageComponent>
    )
  }
})
