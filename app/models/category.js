import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item'),
  isEmpty: Ember.computed('items', function() {
    let items = this.hasMany('items');
    return items.ids().length === 0;
  }),
  hasRunningLowItems: Ember.computed('items.@each.{currentQuantity,alertQuantity}', function() {
    return this.get('items').any(function(item) {
      return Number(item.get('currentQuantity')) <= Number(item.get('alertQuantity'));
    })
  }),
  hasOrderedItems: Ember.computed('items.@each.{inOrderList}', function() {
    return this.get('items').any(function(item) {
      return item.get('inOrderList');
    })
  }),
  orderedItemsCount: Ember.computed('items.@each.{inOrderList}', function() {
    const itemsInOrderListArray = this.get('items').filter(function(item) {
      return item.get('inOrderList');
    })
    return itemsInOrderListArray.length
  }),
  runningLowItemsCount: Ember.computed('items.@each.{currentQuantity,alertQuantity}', function() {
    const itemsInRunningLowListArray = this.get('items').filter(function(item) {
      return Number(item.get('currentQuantity')) <= Number(item.get('alertQuantity'))
    })
    return itemsInRunningLowListArray.length
  }),
});
