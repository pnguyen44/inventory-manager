import Ember from 'ember';

export default Ember.Component.extend({
  purchasedAmount:null,
  updatedItem: {},
  actions: {
    getCurrentValue (item) {
      return this.set('purchasedAmount', this.get('item.quantityPurchased'))
    },
    sendToInventory (item) {
      console.log('item is ..', item)
      console.log('this.get.itme-', this.get('item'))
      console.log('item.id', item.id)
      let reqeuestedQuantity = Number(item.get('quantityPurchased'))

      let purchasedAmount = this.get('purchasedAmount')
      if (purchasedAmount ==='') {
        Ember.$('.message').show()
        this.set('message', 'Purchased amount is required and must be more than 0')
        Ember.$('.message').delay(1500).fadeOut('slow')
      }

    let currentQty= Number(item.get('currentQuantity'));
      console.log('reqeuestQuantity is -', reqeuestedQuantity)
      console.log('purchasedAmount is -', purchasedAmount)
      console.log('currentQuantity  is -', currentQty)


      if(purchasedAmount === undefined || purchasedAmount === null) {
        console.log('rrr else')
        Ember.$('.message').show()
        this.set('message', 'Purchased amount is required and must be more than 0')
        Ember.$('.message').delay(1500).fadeOut('slow')
      } else {
        purchasedAmount = Number(this.get('purchasedAmount'))
        if(purchasedAmount !== 0) {
          let reqeuestedQuantityUpdateAmt = reqeuestedQuantity - purchasedAmount
          console.log('reqeuestQuantityUpdateAmt =', reqeuestedQuantityUpdateAmt)
          if(reqeuestedQuantityUpdateAmt<=0 ) {
            this.get('updatedItem').quantityPurchased = 0
            this.get("updatedItem").inOrderList=false
          } else {
            this.get("updatedItem").quantityPurchased = reqeuestedQuantityUpdateAmt
            this.get("updatedItem").inOrderList=true
          }
          this.get('updatedItem').currentQuantity= currentQty + purchasedAmount

          // console.log('inOrderList is -', this.get('updatedItem').inOrderList)
          console.log('updatedItem--', this.get('updatedItem'))
          return this.sendAction('sendToInventory', item, this.get('updatedItem'))
        }
      }

    },
  }
});
