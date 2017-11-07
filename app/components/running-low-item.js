import Ember from 'ember';

export default Ember.Component.extend({
  buttonName: 'View Item(s)',
  // isInOrderList: Ember.computed.alias('item.inOrderList'),
  // isInOrderList: Ember.computed('item', function () {
  //   return this.get('item.inOrderList')
  // }),
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
    addToOrderList (item,quantityPurchased) {
      console.log('adding start')
      console.log('item.id', item.id)
      console.log('compute prop isInOrderList', this.get('item.inOrderList'))
      return this.sendAction('addToOrderList', item, quantityPurchased)
    },
  }
});
