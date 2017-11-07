import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  deleteCategory (){
    Ember.$('#deleteCategoryConfirm').modal('hide');
    return this.sendAction('deleteCategory', this.get('category'));
  }
}
});
