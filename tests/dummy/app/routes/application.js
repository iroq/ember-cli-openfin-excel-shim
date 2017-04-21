import Ember from 'ember';
import Excel from 'ember-cli-openfin-excel-shim';

export default Ember.Route.extend({
  afterModel() {
    window.Excel = Excel;
  }
});
