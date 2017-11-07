import Ember from 'ember';

export default Ember.Component.extend({
  purchasedAmount:null,
  updatedItem: {},
  actions: {
    getCurrentValue (item) {
      return this.set('purchasedAmount', this.get('item.quantityPurchased'))
    },
    sendToInventory (item) {
      let reqeuestedQuantity = Number(item.get('quantityPurchased'))
      let purchasedAmount = this.get('purchasedAmount')
      if (purchasedAmount ==='') {
        Ember.$('.message').show()
        this.set('message', 'Purchased amount is required and must be more than 0')
        Ember.$('.message').delay(1500).fadeOut('slow')
      }

    let currentQty= Number(item.get('currentQuantity'));
      if(purchasedAmount === undefined || purchasedAmount === null) {
        Ember.$('.message').show()
        this.set('message', 'Purchased amount is required and must be more than 0')
        Ember.$('.message').delay(1500).fadeOut('slow')
      } else {
        purchasedAmount = Number(this.get('purchasedAmount'))
        if(purchasedAmount !== 0) {
          let reqeuestedQuantityUpdateAmt = reqeuestedQuantity - purchasedAmount
          if(reqeuestedQuantityUpdateAmt<=0 ) {
            this.get('updatedItem').quantityPurchased = 0
            this.get("updatedItem").inOrderList=false
          } else {
            this.get("updatedItem").quantityPurchased = reqeuestedQuantityUpdateAmt
            this.get("updatedItem").inOrderList=true
          }
          this.get('updatedItem').currentQuantity= currentQty + purchasedAmount
          return this.sendAction('sendToInventory', item, this.get('updatedItem'))
        }
      }
    },
  }
});
