'use strict'

import React from 'react'
import moment from 'moment'
import GenericMetadataComponent from './generic-item-metadata-component.js'
import Link from './link.js'

export default React.createClass({
  displayName: 'WeaponComponent',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    let {...item} = this.props.item
    let effects = item.effects
    let hit = 0
    let dam = 0
    let newEffects = []
    item.effects = newEffects

    for(const effect of effects) {
      for(const key in effect) {
        if(key === 'hit roll') {
          hit = effect[key]
        } else if(key === 'damage roll') {
          dam = effect[key]
        } else {
          let obj = {}
          obj[key] = effect[key]
          newEffects.push(obj)
        }
      }
    }

    delete item['weapon type']
    delete item.damage

    return (
      <GenericMetadataComponent item={item}>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Level</th>
            <th>Hit</th>
            <th>Dam</th>
            <th>Damage</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.props.item.name}</td>
            <td>
              <Link href={`/items/?weapon type=${this.props.item['weapon type']}`}>{this.props.item['weapon type']}</Link>
            </td>
            <td>{this.props.item.level}</td>
            <td>{hit}</td>
            <td>{dam}</td>
            <td>{this.props.item.damage}</td>
          </tr>
          </tbody>
        </table>
      </GenericMetadataComponent>
    )
  }
})
