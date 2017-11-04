import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecore('category', params.category_id);
  },
  flashMessages: Ember.inject.service(),
  actions: {
    createItem(item) {
      if (item.name !==null) {
        if (item.name.trim().length) {
          console.log('item in list.js =', item);
          let newItem = this.get('store').createRecord('item', item);
          newItem.save();
          console.log('category is', this.get('category'))
          $(`#item-form-${item. category.id}`).modal('hide');
        }
      }
    },
    editItem (item, updatedItem) {
      console.log('get to category edit item');
      console.log('item.id', item.id);
      console.log('updateditem=',updatedItem);
      let itemName= updatedItem.name;
      console.log('itemName', itemName);

      this.get('store').findRecord('item', item.id).then(function (item) {
        if(updatedItem.name.trim().length){
          item.set('name',updatedItem.name);
          item.set('description',updatedItem.description);
          item.set('currentQuantity',updatedItem.currentQuantity);
          item.set('alertQuantity',updatedItem.alertQuantity);
          item.save();
          // .catch(() => {
          //   this.get('flashMessages')
          //   .danger('There was a problem. Please try again.');
          // });
          $(`#edit-item-form-${item.id}`).modal('hide');
        // } else {
        //   this.get('flashMessages')
        //   .danger('Name field is required.');
        }
      });
    },
    deleteItem (item) {
      item.destroyRecord();
      $(`#deleteItemConfirm${item.id}`).modal('hide');
    }
  }
});
