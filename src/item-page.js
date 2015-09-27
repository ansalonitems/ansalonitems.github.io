'use strict'

import React from 'react'
import moment from 'moment'
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
        <div className="to-table">
          <article className="item-block">
            <div className="item-block-name">
              <h2>{item.name}</h2>
              <h5>{item.description}</h5>
              <div>Added {moment(date).format('ll')}.</div>
            </div>

            <div className="item-block-stats">
              <table class="item-block-table">
              </table>
            </div>
          </article>
          <aside className="item-map">
            <span>It is from {item.zone}</span>
            <pre>{item.map}</pre>
          </aside>
        </div>
      </PageComponent>
    )
  }
})
