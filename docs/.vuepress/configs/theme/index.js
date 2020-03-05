const themeReco = require('./themeReco.js')

const sidebar = require('../sidebar/')
const locales = require('../locales/')

module.exports = Object.assign({}, themeReco, {
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  sidebar,
  locales
})