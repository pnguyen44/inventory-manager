import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden'],
  itemTableHidden: true,
  buttonName: 'View Item',
  actions: {
    toggleItemTable() {
      console.log('togling table')
      console.log('item.id', this.get('category.id'))
      this.toggleProperty('itemTableHidden');

      if (!this.itemTableHidden) {
        this.set('buttonName', 'Hide Item')
      } else {
        this.set('buttonName', 'View Item')
      }
    },
    // this.toggleProperty('itemTableHidden');
  createItem(item) {
    console.log('item-list createITem');
    // console.log('newItem..', this.get('newItem'))
    // console.log('category..', this.get('category'))
    // let itemObj = this.get('newItem')
    // itemObj.category= this.get('category')
    // console.log('----', itemObj)
    return this.sendAction('createItem', item);
    // this.set('newItem.content',null)
  },
  editItem(item, updatedItem) {
    console.log('in item-list editItem action');
    return this.sendAction('editItem', item, updatedItem);
  },
  deleteItem(item) {
    return this.sendAction('deleteItem', item);
  }
}
});
