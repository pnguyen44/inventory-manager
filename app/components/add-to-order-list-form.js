import Ember from 'ember';

export default Ember.Component.extend({
quantityPurchased: null,
actions: {
  clearForm() {
    return this.set('quantityPurchased','')
  },
  addToOrderList (item) {
    let quantityPurchased = this.get('quantityPurchased')
    if(quantityPurchased===undefined || quantityPurchased===null ||quantityPurchased <= 0){
      Ember.$('.message').show()
      this.set('message', 'Requested quantity required and must be greater than 0')
      Ember.$('.message').delay(1200).fadeOut('slow')
    }
    return this.sendAction('addToOrderList', item, this.get('quantityPurchased'))
  },
}
});
