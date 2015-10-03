'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'

export default React.createClass({
  displayName: 'ArmorsPage',

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  effectByKey(item, key, missing) {
    const effects = item.effects || []
    for(const it of effects) {
      if(Object.keys(it)[0] === key) {
        return it[key]
      }
    }
    return missing
  },

  render() {
    const items = this.props.items.sort((a, b) => a.level - b.level)

    const links = items.map( item => {
      return (
        <tr key={item.id}>
          <td>
            <Link href={`items/?id=${item.id}`}>{item.name}</Link>
          </td>
          <td>
            <Link href={`items/?slot=${item.slot}`}>{item.slot}</Link>
          </td>
          <td className="right-aligned">
            {this.effectByKey(item, 'hit roll', 0)}
          </td>
          <td className="right-aligned">
            {this.effectByKey(item, 'damage roll', 0)}
          </td>
          <td className="right-aligned">
            {item.level}
          </td>
        </tr>
      )}
    )
    return (
      <PageComponent>
        <table className="item-table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Slot</th>
            <th className="right-aligned">Hit</th>
            <th className="right-aligned">Dam</th>
            <th className="right-aligned">Level</th>
          </tr>
          </thead>
          <tbody>
          {links}
          </tbody>
        </table>
      </PageComponent>
    )
  }
})
