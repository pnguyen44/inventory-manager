import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecore('category', params.category_id);
  },
  flashMessages: Ember.inject.service(),
  actions: {
    deleteCategory(category) {
      console.log('deleting')
      category.destroyRecord()
      .then(() => {
        $(`#deleteCategoryConfirm${category.id}`).modal('hide');
        this.transitionTo('categories');
      })
    },
    createItem(item) {
      console.log('categories route createItem')
      console.log('item is', item)
      if (item.name !== null && item.name !==undefined) {
        if (item.name.trim().length) {
          console.log('item in categories route =', item);
          let newItem = this.get('store').createRecord('item', item);
          newItem.save();
          $(`#item-form-${item.category.id}`).modal('hide');
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
          $(`#edit-item-form-${item.id}`).modal('hide');
        }
      });
    },
    deleteItem (item) {
      item.destroyRecord();
      $(`#deleteItemConfirm${item.id}`).modal('hide');
    }
  }
});
