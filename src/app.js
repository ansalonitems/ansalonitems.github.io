require('./styles.styl')

import React from 'react'
import AmpRouter from 'ampersand-router'
import HomePage from './home-page.js'
import ItemPage from './item-page.js'

const Router = AmpRouter.extend({
  routes: {
    '': 'home',
    'items/:id': 'item',
    ':fallback': 'home'
  },

  home() {
    React.render(<HomePage/>, document.body)
  },

  item(id) {
    React.render(<ItemPage id={parseInt(id, 10)}/>, document.body)
  },

})

const router = new Router()
window.router = router
router.history.start()
