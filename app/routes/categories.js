import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    createCategory(category) {
      console.log('got here');
      console.log('category', category);
      console.log('category name.length=', category.name);
      // let isBlank
      // if (category.name !== null) {
      //   console.log('category name.length=', category.name.trim().length)
      //   isBlank = true
      // } else {
      //   isBlank = false
      // }
      if (category.name !== null) {
        if (category.name.trim().length) {
          let newCategory = this.get('store').createRecord('category', category);
          newCategory.save();
          $('#category-form').modal('hide');
        }
      }
    },
    editCategory(category, updatedName) {
      console.log('updatedName.length=', updatedName.length)
      this.get('store').find('category', category.id).then(function(category) {
        if (updatedName.trim().length) {
          category.set('name', updatedName)
          category.save()
          $(`#edit-category-form-${category.id}`).modal('hide');
        }
      })
    },
    deleteCategory(category) {
      console.log('deleting');
      category.destroyRecord();
      $(`#deleteCategoryConfirm${category.id}`).modal('hide');
    },
    createItem(item) {
      console.log('categories route createItem')
      console.log('item is', item)
      if (item.name !==null) {
        if (item.name.trim().length) {
          console.log('item in categories route =', item);
          let newItem = this.get('store').createRecord('item', item);
          newItem.save();
            $(`#item-form-${item.category.id}`).modal('hide');
        }
      }
    },
  }
});
