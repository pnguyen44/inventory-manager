import Ember from 'ember';

export default Ember.Component.extend({
  purchasedAmount:null,
  actions: {
    sendToInventory (item) {
      console.log('item.id', item.id)
      let reqeuestQuantity = item.quantityPurchased
      // let
      return this.sendAction('sendToInventory', item)
    },
    clearForm () {
      return this.set('purchasedAmount','')
    },
  }
});
