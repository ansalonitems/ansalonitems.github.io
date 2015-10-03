'use strict'

import React from 'react'
import moment from 'moment'
import PageComponent from './page-component.js'
import ArmorComponent from './armor-component.js'
import WeaponComponent from './weapon-component.js'
import ItemComponent from './item-component.js'
import Link from './link.js'
import items from './items.json'

export default React.createClass({
  displayName: 'ItemPage',

  propTypes: {
    id: React.PropTypes.number.isRequired
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

  render() {
    const item = items.filter(item => item.id === this.props.id)[0]

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

    return (
      <PageComponent>
        <div className="to-table">
          <article className="item-block">
            <div className="item-block-name">
              <h2>{item.name}</h2>
              <h5>{item.description}</h5>
              <div>Added {moment(new Date(item.date)).format('ll')}.</div>
            </div>

            <div className="item-block-stats">
              {details}
            </div>
          </article>
          <aside className="item-map">
            <span>It is from {
              item.zone
                ? <Link href={`items/?zone=${item.zone}`}>{item.zone}</Link>
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
