import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden2'],
  itemTableHidden2: true,
  // isShowingTable: true,
  actions: {
    editCategory (category, updatedName) {
      console.log('category-name edit ..', updatedName)
      return this.sendAction('editCategory',category, updatedName);
    },
    deleteCategory (category) {
      return this.sendAction('deleteCategory',category);
      $(`#deleteCategoryConfirm${category.id}`);
    },
    createItem (item) {
      console.log('category-name createItem')
      return this.sendAction('createItem',item)
    },
    toggleItemTable () {
      console.log('tog table')
      console.log('tooge item hiden', this.get('itemTableHidden2'))
      // this.toggleProperty('isShowingTable');
      return this.toggleProperty('itemTableHidden2');
      // if (this.get('isShowingTable')) {
      //   this.set('isShowingTable', false)
      // } else {
      //   this.set('isShowingTable', true)
      // }
    },
  }
});
