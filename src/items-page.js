'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import WeaponsPage from './weapons-page.js'
import ArmorsPage from './armors-page.js'
import GenericItemsPage from './generic-items-page.js'

export default React.createClass({
  displayName: 'ItemsPage',

  propTypes: {
    filter: React.PropTypes.object.isRequired,
    items: React.PropTypes.array.isRequired
  },

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
    const filter = this.props.filter || {}
    const filteredItems = this.props.items || []

    if(filteredItems.length === 0) {
      console.log('no items', filter)
    }

    if(filter.slot && filter.slot === 'wielded' || filter.type && filter.type === 'weapon') {
      return <WeaponsPage items={filteredItems} />
    } else if(filter.slot || filter.type && filter.type === 'armor') {
      return <ArmorsPage items={filteredItems} />
    } else if(filter.type) {
      return <GenericItemsPage items={filteredItems} />
    } else if(filter['weapon type']) {
      return <WeaponsPage items={filteredItems} />
    } else if(filter.zone) {
      return <GenericItemsPage items={filteredItems} />
    }

    const links = filteredItems.map( item => {
      return (
        <tr key={item.id}>
          <td>
            <a href={`/items/${item.id}`}>{item.name}</a>
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
