// this lets us require files with JSX/ES6 in them
require('babel/register')

// require React and our two React components
var React = require('react')
var HomePage = require('./src/home-page')
var ItemsPage = require('./src/items-page')
var ItemPage = require('./src/item-page')
var items = require('./src/items.json')

// our hjs-webpack, of course
var getConfig = require('hjs-webpack')


var createItemsMapping = function(mappings, data, list, filterKey, fn) {
  list.forEach(function(it) {
    var matches = items.filter(fn.bind({}, it))
    var munged = it.replace(/[^A-Za-z0-9_-]/g, '_')
    console.log('generating page', munged)
    var filter = {}
    if(filterKey) {
      filter[filterKey] = it
    }
    mappings['items/' + munged + '/index.html'] = data.defaultTemplate({
      html: React.renderToString(React.createElement(ItemsPage, {filter: filter, items: matches}))
    })
  })
}

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    var mappings = {}

    var slots = []
    var types = []
    var weaponTypes = []
    var zones = []

    items.forEach(function(item) {
      mappings['items/' + item.id  + '/index.html'] = data.defaultTemplate({
        html: React.renderToString(React.createElement(ItemPage, {item: item}))
      })

      if(item.slot && slots.indexOf(item.slot) === -1) {
        slots.push(item.slot)
      }

      if(item.type && types.indexOf(item.type) === -1) {
        types.push(item.type)
      }

      if(item['weapon type'] && weaponTypes.indexOf(item['weapon type']) === -1) {
        weaponTypes.push(item['weapon type'])
      }

      if(item.zone && zones.indexOf(item.zone) === -1) {
        zones.push(item.zone)
      }

    })

    mappings['items/index.html'] = data.defaultTemplate({
      html: React.renderToString(React.createElement(ItemsPage, {filter: {}, items: items}))
    })

    var armor = items.filter(function(item) { return item.slot && item.slot !== 'wielded' })
    mappings['items/armor/index.html'] = data.defaultTemplate({
      html: React.renderToString(React.createElement(ItemsPage, {filter: {type: 'armor'}, items: armor}))
    })

    createItemsMapping(mappings, data, zones, 'zone', (function(it, item) { return item.zone === it }))
    createItemsMapping(mappings, data, types, 'types', (function(it, item) { return item.type === it }))
    createItemsMapping(mappings, data, slots, 'slot', (function(it, item) { return item.slot === it }))
    createItemsMapping(mappings, data, weaponTypes, 'weapon type', (function(it, item) { return item['weapon type'] === it }))

    var homePageHtmlString = React.renderToString(React.createElement(HomePage, {
      zones: zones,
      types: types,
      slots: slots,
      weaponTypes: weaponTypes,
      items: items
    }))

    mappings['index.html'] = data.defaultTemplate({html: homePageHtmlString})

    return mappings
  }
})
