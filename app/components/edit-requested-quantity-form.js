import Ember from 'ember';

export default Ember.Component.extend({
  quantityPurchased:'',
  actions: {
    getCurrentValue () {
      return this.set('quantityPurchased', this.get('item.quantityPurchased'))
    },
    editRequestedQty(item) {
      let quantityPurchased = this.get('quantityPurchased')
      if(quantityPurchased===undefined || quantityPurchased===null || quantityPurchased<=0){
        Ember.$('.message').show()
        this.set('message', 'Requested quantity is required and must be greater than 0')
        Ember.$('.message').delay(1200).fadeOut('slow')
      }
      return this.sendAction('editRequestedQty', item, this.get('quantityPurchased'))
    },
  }
});
