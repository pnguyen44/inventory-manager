import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  confirmShown: true,
  actions: {
    createCategory(category) {
      console.log('got here');
      console.log('category', category);
      console.log('category name.length=', category.name);
      if (category.name !== null) {
        if (category.name.trim().length) {
          let newCategory = this.get('store').createRecord('category', category);
          newCategory.save()
          .then(() => {
            Ember.$(".modal-backdrop").remove()
            Ember.$('#category-form').modal('hide');
          })
          .catch(() => {
            newCategory.rollbackAttributes()
            Ember.$('.message').show()
            Ember.$('.message').html('Error on create category')
            Ember.$('.message').delay(1300).fadeOut('slow')
          })
        }
      }
    },
    editCategory(category, updatedName) {
      console.log('updatedName.length=', updatedName.length)
      this.get('store').find('category', category.id).then(function(category) {
        if (updatedName.trim().length) {
          category.set('name', updatedName)
          category.save()
          .then(() => {
            Ember.$(".modal-backdrop").remove()
            Ember.$(`#edit-category-form-${category.id}`).modal('hide');
          })
          .catch(() => {
            category.rollbackAttributes()
            Ember.$('.message').show()
            Ember.$('.message').html('Error on edit category')
            Ember.$('.message').delay(1300).fadeOut('slow')
          })
        }
      })
    },
    deleteCategory(category) {
      console.log('deleting');
      category.destroyRecord()
      .then(() => {
        Ember.$(".modal-backdrop").remove()
        Ember.$(`#deleteCategoryConfirm${category.id}`).modal('hide');
      })
    },
    createItem(item) {
      console.log('categories route createItem')
      console.log('item is', item)
      if (item.name !== null && item.name !== undefined) {
        if (item.name.trim().length) {
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
      console.log('got there')
      item.destroyRecord()
        .then(() => {
          Ember.$(".modal-backdrop").remove()
          Ember.$(`#deleteItemConfirm${item.id}`).modal('hide');
        })
    },
  }
});
