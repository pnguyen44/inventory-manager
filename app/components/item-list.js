import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden'],
  itemTableHidden: true,
  buttonName: 'View Item',
  actions: {
    toggleItemTable() {
      this.toggleProperty('itemTableHidden');
      if (!this.itemTableHidden) {
        this.set('buttonName', 'Hide Item')
      } else {
        this.set('buttonName', 'View Item')
      }
    },
  createItem(item) {
    return this.sendAction('createItem', item);
  },
  editItem(item, updatedItem) {
    return this.sendAction('editItem', item, updatedItem);
  },
  deleteItem(item) {
    return this.sendAction('deleteItem', item);
  }
}
});
