import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecore('category', params.category_id);
  },
  actions: {
    createItem(item) {
      console.log('item in list.js =', item);
      let newItem = this.get('store').createRecord('item', item);
      // console.log('newItem in list.js', newItem)
      newItem.save();

    },
  }
});
