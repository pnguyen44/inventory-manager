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
          Ember.$(".modal-backdrop").remove()
          Ember.$(`#deleteCategoryConfirm${category.id}`).modal('hide');
          this.transitionTo('categories');
        })
    },
    createItem(item) {
      console.log('categories route createItem')
      console.log('item is', item)
      console.log('item currentQuantity--' ,item.currentQuantity)
      if (item.name !== null && item.name !== undefined) {
        if (item.name.trim().length && item.currentQuantity>0) {
          console.log('item in categories route =', item);
          let newItem = this.get('store').createRecord('item', item);
          newItem.save()
            .then(() => {
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#item-form-${item.category.id}`).modal('hide');
            })
            .catch(() => {
              newItem.rollbackAttributes()
              Ember.$('.message').show()
              Ember.$('.message').html('Error on create item')
              Ember.$('.message').delay(1300).fadeOut('slow')
            })
          } else if (item.currentQuantity===0 ||item.currentQuantity===undefined) {
            Ember.$('.message').show()
            Ember.$('.message').html('Name and current quantity required')
            Ember.$('.message').delay(1300).fadeOut('slow')
        }
      }
    },
    editItem(item, updatedItem) {
      console.log('get to category edit item');
      console.log('item.id', item.id);
      console.log('updateditem=', updatedItem);
      let itemName = updatedItem.name;
      console.log('itemName', itemName);

      this.get('store').findRecord('item', item.id).then(function(item) {
        if (updatedItem.name.trim().length) {
          item.set('name', updatedItem.name);
          item.set('description', updatedItem.description);
          item.set('currentQuantity', updatedItem.currentQuantity);
          item.set('alertQuantity', updatedItem.alertQuantity);
          item.save()
            .then(() => {
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#edit-item-form-${item.id}`).modal('hide');
            })
            .catch(() => {
              item.rollbackAttributes()
              Ember.$('.message').show()
              Ember.$('.message').html('Error on edit item')
              Ember.$('.message').delay(1300).fadeOut('slow')
            })
        }
      });
    },
    deleteItem(item) {
      item.destroyRecord()
        .then(() => {
          Ember.$(".modal-backdrop").remove()
          Ember.$(`#deleteItemConfirm${item.id}`).modal('hide');
        })
    }
  }
});
