import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  deleteItem (){
    Ember.$('#deleteItemConfirm').modal('hide')
    return this.sendAction('deleteItem', this.get('item'))
  }
}
});
