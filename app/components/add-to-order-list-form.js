import Ember from 'ember';

export default Ember.Component.extend({
actions: {
  clearForm() {
    return this.set('quantityPurchased','')
  },
}
});
