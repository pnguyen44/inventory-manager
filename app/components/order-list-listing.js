import Ember from 'ember';

export default Ember.Component.extend({
  buttonName: 'View Item',
  actions: {
    toggleItemTable(category) {
        let target = Ember.$(this)
      // console.log('target',target)
      Ember.$(this).css('color','yellow')
      // if(parseInt(category.id)===31) {
        if (this.get('buttonName')==='View Item') {
          this.set('buttonName', 'Hide Item')
          // console.log('ishowtable lll',this.get('isShowingTable'))
          this.set('isShowingTable', true)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item')
          // this.toggleProperty('itemTableHidden')
        };
    },
    editRequestedQty (item, quantityPurchased) {
      return this.sendAction('editRequestedQty', item, quantityPurchased )
    },
    removeFromOrderList (item) {
      return this.sendAction('removeFromOrderList', item)
    },
    // sendToInventory (item) {
    //
    // },
  }
});
