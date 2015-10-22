'use strict'

import React from 'react'
import PageComponent from './page-component.js'

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
        <a href={`/items/wielded/`}
              className="button button-outlined big-button">
          Weapons
        </a>
        <div className="item-group-container">
          <a href={`/items/axe/`}
                className="button button-outlined big-button">
            Axes
          </a>
          <a href={`/items/dagger/`}
                className="button button-outlined big-button">
            Daggers
          </a>
          <a href={`/items/exotic/`}
                className="button button-outlined big-button">
            Exotics
          </a>
          <a href={`/items/flail/`}
                className="button button-outlined big-button">
            Flails
          </a>
          <a href={`/items/hoopak/`}
                className="button button-outlined big-button">
            Hoopacks
          </a>
          <a href={`/items/mace/`}
                className="button button-outlined big-button">
            Maces
          </a>
          <a href={`/items/polearm/`}
                className="button button-outlined big-button">
            Polearms
          </a>
          <a href={`/items/quarterstaff/`}
                className="button button-outlined big-button">
            Quarterstaves
          </a>
          <a href={`/items/spear/`}
                className="button button-outlined big-button">
            Spears
          </a>
          <a href={`/items/staff/`}
                className="button button-outlined big-button">
            Staves
          </a>
          <a href={`/items/sword/`}
                className="button button-outlined big-button">
            Swords
          </a>
          <a href={`/items/whip/`}
                className="button button-outlined big-button">
            Whips
          </a>
        </div>

        <a href={`/items/armor/`}
              className="button button-outlined big-button">
          Armor
        </a>
        <div className="item-group-container">
          <a href={`/items/arms/`}
                className="button button-outlined big-button">
            Arms
          </a>
          <a href={`/items/back/`}
                className="button button-outlined big-button">
            Backs
          </a>
          <a href={`/items/body/`}
                className="button button-outlined big-button">
            Bodies
          </a>
          <a href={`/items/chest/`}
                className="button button-outlined big-button">
            Chests
          </a>
          <a href={`/items/floating/`}
                className="button button-outlined big-button">
            Floaters
          </a>
          <a href={`/items/ear/`}
                className="button button-outlined big-button">
            Ears
          </a>
          <a href={`/items/face/`}
                className="button button-outlined big-button">
            Faces
          </a>
          <a href={`/items/feet/`}
                className="button button-outlined big-button">
            Feet
          </a>
          <a href={`/items/finger/`}
                className="button button-outlined big-button">
            Fingers
          </a>
          <a href={`/items/hands/`}
                className="button button-outlined big-button">
            Hands
          </a>
          <a href={`/items/head/`}
                className="button button-outlined big-button">
            Heads
          </a>
          <a href={`/items/held/`}
                className="button button-outlined big-button">
            Held
          </a>
          <a href={`/items/legs/`}
                className="button button-outlined big-button">
            Legs
          </a>
          <a href={`/items/light/`}
                className="button button-outlined big-button">
            Lights
          </a>
          <a href={`/items/neck/`}
                className="button button-outlined big-button">
            Necks
          </a>
          <a href={`/items/shield/`}
                className="button button-outlined big-button">
            Shields
          </a>
          <a href={`/items/shoulder/`}
                className="button button-outlined big-button">
            Shoulders
          </a>
          <a href={`/items/waist/`}
                className="button button-outlined big-button">
            Waist
          </a>
          <a href={`/items/wrist/`}
                className="button button-outlined big-button">
            Wrists
          </a>
        </div>

        <a href={`/items/furniture/`}
              className="button button-outlined big-button">
          Furniture
        </a>
        <a href={`/items/container/`}
              className="button button-outlined big-button">
          Containers
        </a>
        <a href={`/items/drink/`}
              className="button button-outlined big-button">
          Drinks
        </a>
        <a href={`/items/treasure/`}
              className="button button-outlined big-button">
          Treasure
        </a>
        <a href={`/items/jewelry/`}
              className="button button-outlined big-button">
          Jewelry
        </a>
        <a href={`/items/potion/`}
              className="button button-outlined big-button">
          Potions
        </a>
        <a href={`/items/pill/`}
              className="button button-outlined big-button">
          Pills
        </a>
      </PageComponent>
    )
  }
})
