'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'
import items from './items.json'

export default React.createClass({
  displayName: 'HomePage',

  render() {
    const links = items.map( item => {
      return (
        <tr key={item.id}>
          <td>
            <Link href={`items/${item.id}`}>{item.name}</Link>
          </td>
          <td>
            {item.type === 'weapon' ? `${item.type}: ${item.weaponType}` : item.type}
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
