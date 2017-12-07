/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-openfin-excel-shim',

  included: function(...args) {
    const [app] = args;
    this._super.included.apply(this, args);
    const vendor = this.treePaths.vendor;
    app.import(vendor + '/excel-api-openfin/fin.desktop.Excel.js', { prepend: true });
  },

  treeForVendor: function(vendorTree) {
    const trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    const excelExamplePath = 'node_modules/excel-api-example/plugin';
    trees.push(new Funnel(excelExamplePath, {
      destDir: 'excel-api-openfin',
      include: ['fin.desktop.Excel.js'],
    }));
    return mergeTrees(trees);
  }
};
