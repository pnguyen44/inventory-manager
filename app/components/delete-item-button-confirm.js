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
  deleteItem (){
    $('#deleteItemConfirm').modal('hide')
    console.log('item to delete', this.get('item'))
    return this.sendAction('deleteItem', this.get('item'))
  }
}
});
