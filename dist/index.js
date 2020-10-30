
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./smart-bool.cjs.production.min.js')
} else {
  module.exports = require('./smart-bool.cjs.development.js')
}
