'use strict'

import React from 'react'
import PageComponent from './page-component.js'

export default React.createClass({
  displayName: 'HomePage',

  propTypes: {
    zones: React.PropTypes.array.isRequired,
    types: React.PropTypes.array.isRequired,
    slots: React.PropTypes.array.isRequired,
    weaponTypes: React.PropTypes.array.isRequired,
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
    const weaponTypes = this.props.weaponTypes.sort()
    const armor = this.props.slots.filter(it => {return it !== 'wielded'}).sort()
    const zones = this.props.zones.sort()
    const types = this.props.types.sort()

    return (
      <PageComponent>
        <h5 style={{marginTop: 15}}>Now up to {this.props.items.length} items from {this.props.zones.length} different areas.</h5>
        <a href={`/items/wielded/`}
              className="button button-outlined big-button">
          Weapons
        </a>
        <div className="item-group-container">
          {
            weaponTypes.map(it => {
              return (
                <a key={it} href={`/items/${it}`} className="button button-outlined big-button">
                  {`${it.substring(0, 1).toUpperCase()}${it.substring(1)}s`}
                </a>
              )
            })
          }
        </div>

        <a href={`/items/armor/`}
           className="button button-outlined big-button">
          Armor
        </a>
        <div className="item-group-container">
          {
            armor.map(it => {
              return (
                <a key={it} href={`/items/${it}`} className="button button-outlined big-button">
                  {`${it.substring(0, 1).toUpperCase()}${it.substring(1)}`}
                </a>
              )
            })
          }
        </div>

        <a href={`/`}
           className="button button-outlined big-button">
          All Types
        </a>
        <div className="item-group-container">
          {
            types.map(it => {
              return (
                <a key={it} href={`/items/${it}`} className="button button-outlined big-button">
                  {`${it.substring(0, 1).toUpperCase()}${it.substring(1)}`}
                </a>
              )
            })
          }
        </div>

        <a href={`/`}
           className="button button-outlined big-button">
          By Zone
        </a>
        <div className="item-group-container">
          {
            zones.map(it => {
              return (
                <a key={it} href={`/items/${it.replace(/[^A-Za-z0-9_-]/g, '_')}`} className="button button-outlined big-button">
                  {`${it.substring(0, 1).toUpperCase()}${it.substring(1)}`}
                </a>
              )
            })
          }
        </div>
      </PageComponent>
    )
  }
})
