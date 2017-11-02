import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item'),
  isEmpty: Ember.computed('items', function() {
    let items = this.hasMany('items');
    return items.ids().length === 0;
  }),
});
