'use strict'

import React from 'react'
import PageComponent from './page-component.js'
import Link from './link.js'
import items from './items.json'

export default React.createClass({
  displayName: 'HomePage',

  render() {
    const links = items.map( item => {
      return (
        <div key={item.id}>
          <Link href={`items/${item.id}`}>{item.name}</Link>
        </div>
      )}
    )
    return (
      <PageComponent>
        {links}
      </PageComponent>
    )
  }
})
