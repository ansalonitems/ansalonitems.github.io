'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'

export default React.createClass({
  displayName: 'HomePage',

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
    return (
      <PageComponent>
        <Link href={`items/?slot=wielded`}
              className="button button-outlined big-button">
          Weapons
        </Link>
        <Link href={`items/?slot=armor`}
              className="button button-outlined big-button">
          Armor
        </Link>
        <Link href={`items/?type=furniture`}
              className="button button-outlined big-button">
          Furniture
        </Link>
        <Link href={`items/?type=container`}
              className="button button-outlined big-button">
          Containers
        </Link>
        <Link href={`items/?type=drink`}
              className="button button-outlined big-button">
          Drinks
        </Link>
        <Link href={`items/?type=treasure`}
              className="button button-outlined big-button">
          Treasure
        </Link>
        <Link href={`items/?type=jewelry`}
              className="button button-outlined big-button">
          Jewelry
        </Link>
        <Link href={`items/?type=potion`}
              className="button button-outlined big-button">
          Potions
        </Link>
        <Link href={`items/?type=pill`}
              className="button button-outlined big-button">
          Pills
        </Link>
      </PageComponent>
    )
  }
})
