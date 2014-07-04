'use strict';

var Main  = require('./views/integration-point-view'),
    Point = require('./models/integration-point');

module.exports = {
  run: function () {
    window.app = this;

    this.model = new Point({
      id: '1234',
      installed: true,
      anything: 'this is prepopulated',
      config: {
        campaignName: 'blah'
      }
    });

    this.view = new Main({
      model: this.model
    }).render();

    document.body.appendChild(this.view.el);
  }
};

module.exports.run();
