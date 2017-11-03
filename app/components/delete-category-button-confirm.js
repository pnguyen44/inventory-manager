import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  // launchConfirmDialog() {
  //   this.set('confirmShown', true);
  // },
  //
  // submitConfirm() {
  //   // trigger action on parent component
  //   this.set('confirmShown', false);
  // },
  //
  // cancelConfirm() {
  //   this.set('confirmShown', false);
  // },
  deleteCategory (){
    $('#deleteCategoryConfirm').modal('hide')
    console.log('category to delete', this.get('category'))
    return this.sendAction('deleteCategory', this.get('category'))
  }
}
});
