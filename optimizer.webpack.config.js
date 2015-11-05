// this lets us require files with JSX/ES6 in them
require('babel/register')

// require React and our two React components
var React = require('react')
var items = require('./src/items.json')

// our hjs-webpack, of course
var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/optimizer-app.js',
  out: 'public/optimizer/',
  output: {
    filename: 'optimizer.js',
    cssFilename: 'optimizer.css'
  },
  clearBeforeBuild: false
})
