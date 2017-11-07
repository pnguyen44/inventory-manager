import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editCategory(category, updatedName) {
      return this.sendAction('editCategory', category, updatedName);
    },
    deleteCategory(category) {
      return this.sendAction('deleteCategory', category);
      $(`#deleteCategoryConfirm${category.id}`);
    },
    createItem(item) {
      return this.sendAction('createItem', item)
    },
    editItem(item, updatedItem) {
      return this.sendAction('editItem', item, updatedItem);
    },
    deleteItem (item) {
      return this.sendAction('deleteItem', item)
    },
    toggleItemTable(category) {
      let target = Ember.$(this)
      Ember.$(this).css('color','yellow')
        if (this.get('buttonName')==='View Item') {
          this.set('buttonName', 'Hide Item')
          this.set('isShowingTable', true)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item')
        };
    },
  }
});
