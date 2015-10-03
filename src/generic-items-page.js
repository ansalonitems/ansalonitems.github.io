'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'

export default React.createClass({
  displayName: 'GenericItems',

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
    const items = this.props.items.sort((a, b) => {
      if(a.type < b.type) {
        return -1
      } else if(b.type < a.type) {
        return 1
      }
      return a.level - b.level
    })

    const links = items.map( item => {
      return (
        <tr key={item.id}>
          <td>
            <Link href={`items/?id=${item.id}`}>{item.name}</Link>
          </td>
          <td>
            <Link href={`items/?type=${item.type}`}>{item.type}</Link>
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
