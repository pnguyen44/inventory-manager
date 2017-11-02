import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    createCategory(category) {
      console.log('got here');
      console.log('category', category);
      let newCategory = this.get('store').createRecord('category', category);
      newCategory.save();
    },
  }
});
