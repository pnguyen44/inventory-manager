import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden'],
  itemTableHidden: false,
  buttonName: 'View Items',
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
      // console.log('this.get text', this.get('text'))
      return this.toggleProperty('itemTableHidden2');
      // if (this.get('isShowingTable')) {
      //   this.set('isShowingTable', false)
      // } else {
      //   this.set('isShowingTable', true)
      // }
    },
    // toggleItemTable () {
    //   console.log('togling table')
    //   this.toggleProperty('itemTableHidden');
    //   // this.toggleProperty('itemTableHidden');
    // },
    createItem (item){
      console.log('item-list createITem');
      // console.log('newItem..', this.get('newItem'))
      // console.log('category..', this.get('category'))
      // let itemObj = this.get('newItem')
      // itemObj.category= this.get('category')
      // console.log('----', itemObj)
      return this.sendAction('createItem', item);
      // this.set('newItem.content',null)
    },
    editItem(item,updatedItem){
      console.log('in item-list editItem action');
      return this.sendAction('editItem',item, updatedItem);
    },
    deleteItem(item) {
      console.log('got ther')
      return this.sendAction('deleteItem',item);
    },
  }
});
