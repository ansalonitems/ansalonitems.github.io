'use strict'

import React from 'react'
import moment from 'moment'

export default React.createClass({
  displayName: 'GenericItemMetadata',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  joinWithNewlines(them) {
    if(them.length === 0) {
      return 'none'
    } else {
      return them.map((it, idx) => {return <div key={idx}>{it}</div>})
    }
  },

  toEntry(kvPair) {
    let [key, value] = kvPair
    value = value === null ? '' : value

    return (
      <span key={key}>
        <dt>{key}</dt>
        <dd>{value.push ? this.joinWithNewlines(value) : value}</dd>
      </span>
    )
  },

  render() {
    let {...item} = this.props.item

    item.affects = !item.effects ? ['none'] : item.effects.map(it => {
      const key = Object.keys(it)[0]
      return `${key} by ${it[key]}`
    })

    delete item.effects
    delete item.id
    delete item.map
    delete item.name
    delete item.zone
    delete item.description
    delete item.type
    delete item.level
    delete item.date
    delete item.slot

    let itemProps = []
    for(const key of ['affects', 'keywords']) {
      itemProps.push([key, item[key]])
      delete item[key]
    }

    for(const key in item) {
      itemProps.push([key, item[key]])
    }

    return (
      <div>
        {this.props.children}
        <dl className="item-block-table">
          {itemProps.map(this.toEntry)}
        </dl>
      </div>
    )
  }
})
