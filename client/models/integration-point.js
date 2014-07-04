'use strict';

// IntegrationPoint Model - integration-point.js
var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    id: ['string', true],
    installed: ['boolean', true, false],
    anything: 'text',
    config: 'object'
  },
  session: {
    adapter: 'string'
  }
});
