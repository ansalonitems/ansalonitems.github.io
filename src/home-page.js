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
        <div className="item-group-container">
          <Link href={`items/?weapon type=axe`}
                className="button button-outlined big-button">
            Axes
          </Link>
          <Link href={`items/?weapon type=dagger`}
                className="button button-outlined big-button">
            Daggers
          </Link>
          <Link href={`items/?weapon type=exotic`}
                className="button button-outlined big-button">
            Exotics
          </Link>
          <Link href={`items/?weapon type=flail`}
                className="button button-outlined big-button">
            Flails
          </Link>
          <Link href={`items/?weapon type=hoopak`}
                className="button button-outlined big-button">
            Hoopacks
          </Link>
          <Link href={`items/?weapon type=mace`}
                className="button button-outlined big-button">
            Maces
          </Link>
          <Link href={`items/?weapon type=polearm`}
                className="button button-outlined big-button">
            Polearms
          </Link>
          <Link href={`items/?weapon type=quarterstaff`}
                className="button button-outlined big-button">
            Quarterstaves
          </Link>
          <Link href={`items/?weapon type=spear`}
                className="button button-outlined big-button">
            Spears
          </Link>
          <Link href={`items/?weapon type=staff`}
                className="button button-outlined big-button">
            Staves
          </Link>
          <Link href={`items/?weapon type=sword`}
                className="button button-outlined big-button">
            Swords
          </Link>
          <Link href={`items/?weapon type=whip`}
                className="button button-outlined big-button">
            Whips
          </Link>
        </div>

        <Link href={`items/?slot=armor`}
              className="button button-outlined big-button">
          Armor
        </Link>
        <div className="item-group-container">
          <Link href={`items/?slot=arms`}
                className="button button-outlined big-button">
            Arms
          </Link>
          <Link href={`items/?slot=back`}
                className="button button-outlined big-button">
            Backs
          </Link>
          <Link href={`items/?slot=body`}
                className="button button-outlined big-button">
            Bodies
          </Link>
          <Link href={`items/?slot=chest`}
                className="button button-outlined big-button">
            Chests
          </Link>
          <Link href={`items/?slot=floating`}
                className="button button-outlined big-button">
            Floaters
          </Link>
          <Link href={`items/?slot=ear`}
                className="button button-outlined big-button">
            Ears
          </Link>
          <Link href={`items/?slot=face`}
                className="button button-outlined big-button">
            Faces
          </Link>
          <Link href={`items/?slot=feet`}
                className="button button-outlined big-button">
            Feet
          </Link>
          <Link href={`items/?slot=hands`}
                className="button button-outlined big-button">
            Hands
          </Link>
          <Link href={`items/?slot=head`}
                className="button button-outlined big-button">
            Heads
          </Link>
          <Link href={`items/?slot=held`}
                className="button button-outlined big-button">
            Held
          </Link>
          <Link href={`items/?slot=legs`}
                className="button button-outlined big-button">
            Legs
          </Link>
          <Link href={`items/?slot=light`}
                className="button button-outlined big-button">
            Lights
          </Link>
          <Link href={`items/?slot=neck`}
                className="button button-outlined big-button">
            Necks
          </Link>
          <Link href={`items/?slot=shield`}
                className="button button-outlined big-button">
            Shields
          </Link>
          <Link href={`items/?slot=shoulder`}
                className="button button-outlined big-button">
            Shoulders
          </Link>
          <Link href={`items/?slot=waist`}
                className="button button-outlined big-button">
            Waist
          </Link>
          <Link href={`items/?slot=wrist`}
                className="button button-outlined big-button">
            Wrists
          </Link>
        </div>

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
