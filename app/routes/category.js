import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecore('category', params.category_id);
  },
  actions: {
    createItem(item) {
      console.log('item in list.js =', item);
      let newItem = this.get('store').createRecord('item', item);
      // console.log('newItem in list.js', newItem)
      newItem.save();
    },
    editItem (item, updatedItem) {
      console.log('get to category edit item')
      console.log('item.id', item.id)
      console.log('updateditem=',updatedItem)
      let itemName= updatedItem.name
      console.log('itemName', itemName)

      this.get('store').findRecord('item', item.id).then(function (item) {
        if(updatedItem.name.trim().length){
          item.set('name',updatedItem.name)
          item.set('description',updatedItem.description)
          item.set('currentQuantity',updatedItem.currentQuantity)
          item.set('alertQuantity',updatedItem.alertQuantity)
          item.save()
          $(`#edit-item-form-${item.id}`).modal('hide')
        }
      })
    }
  }
});
