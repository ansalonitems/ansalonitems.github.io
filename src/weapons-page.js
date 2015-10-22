'use strict'

import React from 'react'
import PageComponent from './page-component.js'

export default React.createClass({
  displayName: 'WeaponsPage',

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
            <a href={`/items/${item.id}`}>{item.name}</a>
          </td>
          <td>
            <a href={`/items/${item['weapon type']}`}>{item['weapon type']}</a>
          </td>
          <td className="right-aligned">
            {this.effectByKey(item, 'hit roll', 0)}
          </td>
          <td className="right-aligned">
            {this.effectByKey(item, 'damage roll', 0)}
          </td>
          <td className="right-aligned">
            {item.damage}
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
            <th>Type</th>
            <th className="right-aligned">Hit</th>
            <th className="right-aligned">Dam</th>
            <th className="right-aligned">Avg Damage</th>
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
