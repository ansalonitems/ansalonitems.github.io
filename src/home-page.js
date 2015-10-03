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
      </PageComponent>
    )
  }
})
