import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item'),
  isEmpty: Ember.computed('items', function() {
    let items = this.hasMany('items');
    return items.ids().length === 0;
  }),
  hasRunningLowItem: Ember.computed('items', function () {
    // let items = this.wehasMany('items');
    let itemsArr = []
    let counter =0
    this.get('items').forEach(function (item, index, enumerable) {
      itemsArr.push(item);
    }, this);

    return itemsArr
  })
});
