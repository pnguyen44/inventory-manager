import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['itemTableHidden'],
  buttonName: 'View Item',
  // itemTableHidden: true,
  isShowingTable: false,
  // isShowingTable: Ember.computed('category',function () {
  //   return this.get('category.id')
  // }),
  actions: {
    editCategory(category, updatedName) {
      console.log('category-name edit ..', updatedName)
      return this.sendAction('editCategory', category, updatedName);
    },
    deleteCategory(category) {
      return this.sendAction('deleteCategory', category);
      $(`#deleteCategoryConfirm${category.id}`);
    },
    createItem(item) {
      console.log('category-name createItem')
      return this.sendAction('createItem', item)
    },
    editItem(item, updatedItem) {
      console.log('in cate editItem action');
      return this.sendAction('editItem', item, updatedItem);
    },
    deleteItem (item) {
      return this.sendAction('deleteItem', item)
    },
    toggleItemTable(category) {
      console.log('togling table in category-name')
      // console.log('category.id', category.id)
      console.log('isShowingTable',this.get('isShowingTable'))
      let target = Ember.$(this)
      console.log('target',target)
      Ember.$(this).css('color','yellow')
      // if(parseInt(category.id)===31) {
        if (this.get('buttonName')==='View Item') {
          this.set('buttonName', 'Hide Item')
          console.log('ishowtable lll',this.get('isShowingTable'))
          this.set('isShowingTable', true)
          // this.toggleProperty('itemTableHidden')
          // console.log('cat. id', category.id)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item')
          // this.toggleProperty('itemTableHidden')
        };
      // }
      // if (category.id ===31) {
      //   this.set('isShowingTable', true)
      // }
    },
  }
});
