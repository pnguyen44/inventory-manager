import Ember from 'ember';

export default Ember.Component.extend({
quantityPurchased: null,
actions: {
  clearForm() {
    return this.set('quantityPurchased','')
  },
  addToOrderList (item) {
    console.log('adding start')
    console.log('item.id', item.id)
    console.log('compute prop isInOrderList', this.get('item.inOrderList'))
    let quantityPurchased = this.get('quantityPurchased')
    console.log('quantityPurchased--', quantityPurchased)
    if(quantityPurchased===undefined || quantityPurchased===null){
      Ember.$('.message').show()
      this.set('message', 'Purchased Quanity Required')
      Ember.$('.message').delay(1000).fadeOut('slow')
    }
    return this.sendAction('addToOrderList', item, this.get('quantityPurchased'))
  },
}
});
