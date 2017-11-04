import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden'],
  itemTableHidden: true,
  actions: {
    toggleItemTable () {
      console.log('togling table')
      this.toggleProperty('itemTableHidden');
      // this.toggleProperty('itemTableHidden');
    },
    createItem (item){
      console.log('inventory-list createITem');
      // console.log('newItem..', this.get('newItem'))
      // console.log('category..', this.get('category'))
      // let itemObj = this.get('newItem')
      // itemObj.category= this.get('category')
      // console.log('----', itemObj)
      return this.sendAction('createItem', item);
      // this.set('newItem.content',null)
    },
    editItem(item,updatedItem){
      console.log('in inventory-list editItem action');
      return this.sendAction('editItem',item, updatedItem);
    },
    deleteItem(item) {
      return this.sendAction('deleteItem',item);
    }
  }
});
