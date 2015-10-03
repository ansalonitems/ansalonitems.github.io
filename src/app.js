require('./styles.styl')

import React from 'react'
import AmpRouter from 'ampersand-router'
import qs from 'qs'
import HomePage from './home-page.js'
import ItemsPage from './items-page.js'
import ItemPage from './item-page.js'

const Router = AmpRouter.extend({
  routes: {
    '': 'home',
    'items/': 'items'
  },

  home() {
    React.render(<HomePage/>, document.body)
  },

  items() {
    const params = this.getQueryParams()
    if(params.id) {
      const id = parseInt(params.id, 10)
      React.render(<ItemPage id={id} />, document.body)
    } else {
      React.render(<ItemsPage filter={params} />, document.body)
    }
  },

  getQueryParams() {
    let querystring = document.location.search
    if(querystring && querystring.indexOf('?') !== -1) {
      querystring = querystring.substring(querystring.indexOf('?') + 1)
    }
    return qs.parse(querystring)
  }

})

const router = new Router()
window.router = router
router.history.start()
