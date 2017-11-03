import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCategory (category, updatedName) {
      console.log('category-name edit ..', updatedName)
      return this.sendAction('editCategory',category, updatedName);
    },
  }
});
