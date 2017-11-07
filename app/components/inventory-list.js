import Ember from 'ember';

export default Ember.Component.extend({
  // classNameBindings: ['itemTableHidden'],
  // itemTableHidden: false,
  buttonName: 'View Item(s)',
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
    editItem(item,updatedItem){
      console.log('in item-list editItem action');
      return this.sendAction('editItem',item, updatedItem);
    },
    deleteItem(item) {
      return this.sendAction('deleteItem',item);
    },
    toggleItemTable(category) {
      console.log('isShowingTable',this.get('isShowingTable'))
      let target = Ember.$(this)
      console.log('target',target)
      Ember.$(this).css('color','yellow')
        if (this.get('buttonName')==='View Item(s)') {
          this.set('buttonName', 'Hide Item(s)')
          console.log('ishowtable lll',this.get('isShowingTable'))
          this.set('isShowingTable', true)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item(s)')
        };
    },
  }
});
