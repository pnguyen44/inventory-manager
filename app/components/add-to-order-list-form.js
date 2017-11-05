import Ember from 'ember';

export default Ember.Component.extend({
purchasedQuantity: null,
actions: {
  clearForm() {
    return this.set('purchasedQuantity','')
  },
  addToOrderList (item) {
    console.log('adding start')
    console.log('item.id', item.id)
    console.log('compute prop isInOrderList', this.get('item.inOrderList'))
    let purchasedQuantity = this.get('purchasedQuantity')
    console.log('purchasedQuantity--', purchasedQuantity)
    if(purchasedQuantity===undefined || purchasedQuantity===null){
      Ember.$('.message').show()
      this.set('message', 'Purchased Quanity Required')
      Ember.$('.message').delay(1000).fadeOut('slow')
    }
    return this.sendAction('addToOrderList', item, this.get('purchasedQuantity'))
  },
}
});
