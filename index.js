/* jshint node: true */
'use strict';


var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-cli-openfin-excel-shim',

  included: function(app) {
    this._super.included.apply(this, arguments);

  },

  treeForVendor: function(treeForVendor) {
    var trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    var nmp = path.join(__dirname, 'node_modules');
    var excelExamplePath = path.dirname(require.resolve('excel-api-example'));
    trees.push(new Funnel(excelExamplePath, {
      destDir: 'excel-api-openfin',
      include: ['ExcelAPI.js'],
    }));
    return mergeTrees(trees);
  }
};
