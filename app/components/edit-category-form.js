import Ember from 'ember';

export default Ember.Component.extend({
  updatedCategoryName: Ember.computed('category',function () {
    return this.get('category.name');
  }),
  actions: {
    editCategory () {
      console.log('editing');
      console.log('category', this.get('category'));
      console.log('update category', this.get('updatedCategoryName'))
      this.sendAction('editCategory', this.get('category'),this.get('updatedCategoryName'))
    },
  }
});
