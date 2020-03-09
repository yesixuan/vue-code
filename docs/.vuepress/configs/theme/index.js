const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
const nav = require('../nav')

module.exports = Object.assign({}, themeReco, {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  sidebar,
  nav,
  // locales
});