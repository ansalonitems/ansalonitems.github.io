'use strict'

import React from 'react'
import moment from 'moment'

export default React.createClass({
  displayName: 'ArmorComponent',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  joinWithNewlines(them) {
    return them.map((it, idx) => {return <div key={idx}>{it}</div>})
  },

  render() {
    let {...item} = this.props.item

    console.log('testy', item)

    if(item.type === 'drink' && item.slot === 'light') {
      delete item.slot
    }
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
    delete item.date

    const toEntry = function(it) {
      let value = item[it] || ''

      return (
        <span key={it}>
          <dt>{it}</dt>
          <dd>{value.push ? this.joinWithNewlines(value) : value}</dd>
        </span>
      )
    }

    return (
      <dl className="item-block-table">
        {Object.keys(item).map(toEntry, this)}
      </dl>
    )
  }
})
