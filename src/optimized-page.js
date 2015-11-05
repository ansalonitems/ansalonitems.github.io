'use strict'

import React from 'react'
import PageComponent from './page-component.js'

export default React.createClass({
  displayName: 'OptimizedPage',

  propTypes: {
    gearBySlot: React.PropTypes.object.isRequired,
    level: React.PropTypes.number.isRequired
  },

  findBestInSlot(slot, level, gear) {
    const allowableGear = gear.filter(function(item) {
      return item.level - 20 <= level && (item['weapon flags'] ? item['weapon flags'].indexOf('two-handed') === -1 : true)
    })

    if(allowableGear.length === 0) {
      return (
        <tr key={slot}>
          <td>
            {slot}
          </td>
          <td>
            none
          </td>
        </tr>
      )
    }

    let best = allowableGear[0]

    const compareBy = function(criteria, item1, item2) {
      const getValue = function(key, item) {
        if(key === 'damage') {
          return item.damage
        }
        let output = 0
        item.effects.forEach(function(effect) {
          if(output !== 0) {
            return
          }

          if(Object.keys(effect)[0] === key) {
            output = effect[key]
          }
        })
        return output
      }

      let winner = null

      criteria.forEach(function(criterion) {
        if(winner) {
          return
        }

        const value1 = getValue(criterion, item1)
        const value2 = getValue(criterion, item2)
        if(value1 > value2) {
          winner = item1
        } else if(value1 < value2) {
          winner = item2
        }
      })
      return winner || item1
    }

    allowableGear.forEach(function(item) {
      let criteria = ['damage roll', 'hit roll', 'hp']
      if(item.damage) {
        criteria.unshift('damage')
      }
      best = compareBy(criteria, best, item)
    })

    return (
      <tr key={slot}>
        <td>
          {slot}
        </td>
        <td>
          <a href={`/items/${best.id}/`}>{best.name}</a>
        </td>
      </tr>
    )

  },

  render() {
    const self = this
    const sortedSlots = ['floating', 'head', 'face', 'ear', 'neck', 'body', 'back', 'shoulder', 'arms', 'wrist', 'hands', 'finger', 'waist', 'legs', 'feet', 'light', 'shield', 'held', 'wielded']
    const slots = sortedSlots.map(function(key) {
      return self.findBestInSlot(key, self.props.level, self.props.gearBySlot[key])
    })

    return (
      <PageComponent>
        <h4>Optimized gear for level {this.props.level}:</h4>
        <table>
          <thead>
            <tr>
              <th>Slot</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {slots}
          </tbody>
        </table>
      </PageComponent>
    )
  }
})
