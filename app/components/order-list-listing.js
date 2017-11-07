import Ember from 'ember';

export default Ember.Component.extend({
  buttonName: 'View Item(s)',
  actions: {
    toggleItemTable(category) {
        let target = Ember.$(this)
      Ember.$(this).css('color','yellow')
        if (this.get('buttonName')==='View Item(s)') {
          this.set('buttonName', 'Hide Item(s)')
          this.set('isShowingTable', true)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item(s)')
        };
    },
    editRequestedQty (item, quantityPurchased) {
      return this.sendAction('editRequestedQty', item, quantityPurchased )
    },
    removeFromOrderList (item) {
      return this.sendAction('removeFromOrderList', item)
    },
    sendToInventory (item,updatedItem) {
      return this.sendAction('sendToInventory', item, updatedItem)
    },
  }
});
