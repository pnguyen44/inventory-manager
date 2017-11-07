import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  confirmShown: true,
  actions: {
    createCategory(category) {
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
      category.destroyRecord()
      .then(() => {
        Ember.$(".modal-backdrop").remove()
        Ember.$(`#deleteCategoryConfirm${category.id}`).modal('hide');
      })
    },
    createItem(item) {
      if (item.name.trim().length && item.currentQuantity !== undefined && item.currentQuantity !== null && item.currentQuantity !== '') {
          item.currentQuantity=Number(item.currentQuantity)
          item.alertQuantity=Number(item.alertQuantity)
          item.quantityPurchased=0
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
              Ember.$('.message').delay(1500).fadeOut('slow')
            })
        } else {
          Ember.$('.message').show()
          Ember.$('.message').html('Name and current quantity required')
          Ember.$('.message').delay(1500).fadeOut('slow')
        }
    },
    editItem(item, updatedItem) {
      let itemName = updatedItem.name;
      if(updatedItem.alertQuantity==='' || updatedItem.alertQuantity===null || updatedItem.alertQuantity === undefined) {
        updatedItem.alertQuantity=0
      }
      this.get('store').findRecord('item', item.id).then(function(item) {
        if (updatedItem.name.trim().length && updatedItem.currentQuantity !== undefined && updatedItem.currentQuantity !== null && updatedItem.currentQuantity !== '') {
          item.set('name', updatedItem.name);
          item.set('description', updatedItem.description);
          item.set('currentQuantity', Number(updatedItem.currentQuantity));
          item.set('alertQuantity', Number(updatedItem.alertQuantity));
          item.save()
            .then(() => {
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#edit-item-form-${item.id}`).modal('hide');
            })
            .catch(() => {
              item.rollbackAttributes()
              Ember.$('.message').show()
              Ember.$('.message').html('Error on edit item')
              Ember.$('.message').delay(1500).fadeOut('slow')
            })
        } else {
          Ember.$('.message').show()
          Ember.$('.message').html('Name and current quantity required')
          Ember.$('.message').delay(1500).fadeOut('slow')
        }
      });
    },
    deleteItem(item) {
      item.destroyRecord()
        .then(() => {
          Ember.$(".modal-backdrop").remove()
          Ember.$(`#deleteItemConfirm${item.id}`).modal('hide');
        })
    },
  }
});
