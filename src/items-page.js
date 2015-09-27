'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'
import items from './items.json'

export default React.createClass({
  displayName: 'ItemsPage',

  itemTypeEntry(item) {
    if(item.type === 'weapon') {
      return `${item.type}: ${item['weapon type']}`
    } else if(item.type === 'light') {
      return item.type
    } else if(item.type === 'drink') {
      return item.slot === 'light' ? item.type : `${item.type}: ${item.slot}`
    } else if(item.slot) {
      return `${item.type}: ${item.slot}`
    } else {
      return item.type
    }
  },

  render() {
    const links = items.map( item => {
        return (
          <tr key={item.id}>
            <td>
              <Link href={`items?id=${item.id}`}>{item.name}</Link>
            </td>
            <td>
              {this.itemTypeEntry(item)}
            </td>
            <td className="right-aligned">
              {item.level}
            </td>
            <td>
              {item.zone}
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
            <th>Zone</th>
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
