import Ember from 'ember';

export default Ember.Component.extend({
  buttonName: 'View Item',
  isInOrderList: Ember.computed.alias('item.inOrderList'),
  isInOrderList: Ember.computed('item', function () {
    return this.get('item.inOrderList')
  }),
  actions: {
    toggleItemTable(category) {
      // console.log('togling table in running-low-item')
      // console.log('category.id', category.id)
      // console.log('isShowingTable',this.get('isShowingTable'))
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
    addToOrderList (item,quantityPurchased) {
      console.log('adding start')
      console.log('item.id', item.id)
      console.log('compute prop isInOrderList', this.get('item.inOrderList'))
      // this.set('isInOrderList',true);
      return this.sendAction('addToOrderList', item, quantityPurchased)
    },
  }


});
