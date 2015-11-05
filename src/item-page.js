'use strict'

import React from 'react'
import moment from 'moment'
import PageComponent from './page-component.js'
import ArmorComponent from './armor-component.js'
import WeaponComponent from './weapon-component.js'
import ItemComponent from './item-component.js'

export default React.createClass({
  displayName: 'ItemPage',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  getDetails(item) {
    switch(item.type) {
      case 'armor': return <ArmorComponent item={item}></ArmorComponent>
      case 'weapon': return <WeaponComponent item={item}></WeaponComponent>
    }

    if(item.slot) {
      return <ArmorComponent item={item}></ArmorComponent>
    }

    return <ItemComponent item={item}></ItemComponent>
  },

  getSource(item) {
    if(item.type === 'loot') {
      return `It is looted from ${item.source}.`
    } else if(item.type === 'gift') {
      return `It is given by ${item.source}.`
    } else if(item.type === 'drops') {
      return `It is dropped by ${item.source}.`
    } else if(item.type === 'take' && item.source === 'ground') {
      return 'It is found on the ground.'
    } else if(item.type === 'take') {
      return `It is found inside ${item.source}.`
    } else if(item.type === 'bought') {
      return 'It is bought from a shop.'
    } else {
      return 'Its source is unknown.'
    }
  },

  render() {
    const item = this.props.item
    const details = this.getDetails(item)
    let location = item.map || ''
    location = location.replace(/\-/g, '<span class="map-pipe">-</span>')
    location = location.replace(/#/g, '<span class="map-hash">#</span>')
    location = location.replace(/\+/g, '<span class="map-plus">+</span>')
    location = location.replace(/\|/g, '<span class="map-pipe">|</span>')
    location = location.replace(/\./g, '<span class="map-dot">.</span>')
    location = location.replace(/\*/g, '<span class="map-star">*</span>')
    location = location.replace(/\^/g, '<span class="map-caret">^</span>')
    location = location.replace(/v/g, '<span class="map-caret">v</span>')

    const source = this.getSource(item.source)

    return (
      <PageComponent>
        <div className="to-table">
          <article className="item-block">
            <div className="item-block-name">
              <h2>{item.name}</h2>
              <h5>{item.description}</h5>
              <h5>{source}</h5>
              <div>Added {moment(new Date(item.date)).format('ll')}.</div>
            </div>

            <div className="item-block-stats">
              {details}
            </div>
          </article>
          <aside className="item-map">
            <span>It is from {
              item.zone
                ? <a href={`/items/${item.zone.replace(/[^a-zA-Z0-9_-]/g, '_')}`}>{item.zone}</a>
                : 'an unknown location'
            }.</span>
            <pre className="map"
                 dangerouslySetInnerHTML={{__html: location}}>
            </pre>
          </aside>
        </div>
      </PageComponent>
    )
  }
})
