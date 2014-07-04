'use strict';

var View = require('ampersand-view');

module.exports = View.extend({
  template: [
    '<div id="root">',
      '<h1>Testing View Bindings</h1>',
      '<p>Model Id <span role="id"></span>',
      '<form>',
        '<label>',
          '<input role="installed" type="checkbox" />',
          'Is this point installed?',
        '</label>',
        '<label>',
          'Sample Input',
          '<input role="anything" type="text" placeholder="put something in here"/>',
        '</label>',
      '</form>',
    '</div>'
  ].join(''),

  bindings: {
    'model.id': '[role=id]',
    'model.anything': {
      role: 'anything',
      type: 'attribute',
      name: 'value'
    },
    'model.installed': {
      role: 'installed',
      type: 'attribute',
      name: 'checked'
    }
  },

  initialize: function () {
    this.model.on('change', function () {
      console.log('model changed: ', this.toJSON());
    });
  }
});
