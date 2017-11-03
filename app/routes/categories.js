import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    createCategory(category) {
      console.log('got here');
      console.log('category', category);
      let newCategory = this.get('store').createRecord('category', category);
      newCategory.save();
      $('#category-form').modal('hide');
    },
      editCategory (category, updatedName) {
        // console.log('editCategory last stop');
        // console.log('category', category)
        // console.log('..', this.get('category'))
        // console.log('categoryName', updatedName)
        this.get('store').find('category',category.id).then(function (category) {
          if(updatedName.trim().length){
            category.set('name', updatedName)
            category.save()
            $(`#edit-category-form-${category.id}`).modal('hide');
          }
        })
      },
      deleteCategory (category) {
        console.log('deleting')
        category.destroyRecord();
        $(`#deleteCategoryConfirm${category.id}`).modal('hide')
      },
    }
});
