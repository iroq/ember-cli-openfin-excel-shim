import Ember from 'ember';
import Excel, { openfinEnabled } from 'ember-cli-openfin-excel-shim';

export default Ember.Route.extend({
  afterModel() {
    window.Excel = Excel;
    window.openfinEnabled = openfinEnabled;
  }
});
