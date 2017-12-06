/* jshint node: true */
'use strict';


var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-cli-openfin-excel-shim',

  included: function(app) {
    this._super.included.apply(this, arguments);
    var vendor = this.treePaths.vendor;
    app.import(vendor + '/excel-api-openfin/fin.desktop.Excel.js', { prepend: true });
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    var excelExamplePath = 'node_modules/excel-api-example/plugin';
    trees.push(new Funnel(excelExamplePath, {
      destDir: 'excel-api-openfin',
      include: ['fin.desktop.Excel.js'],
    }));
    return mergeTrees(trees);
  }
};
