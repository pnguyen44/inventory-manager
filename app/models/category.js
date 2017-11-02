import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  items: DS.hasMany('item',{async: true}),
  isEmpty: Ember.computed('items', function() {
    let items = this.hasMany('items');
    return items.ids().length === 0;
  }),
});
