import Ember from 'ember';

export default Ember.Component.extend({
  // test: Ember.computed.('item',function () {
  //   return this.get('item.name')
  // }),
  buttonName: 'View Item',
  test: Ember.computed('item',function () {
    // let items = this.get('item')
    return this.get('item.name')
    // let lowItem = items.filter(function (item) {
    //   console.log('item.name===', item.name)
    //   return item.get('item.currentQuantity') <= item.get('item.alertQuantity')
    // })

    console.log('lowitem==',typeof items)
    // return items
    // return item.get('currentQuantity') <= item.get('alertQuantity')
    // console.log('item name',this.get('item.name'))
    // let items = this.get('category.items')
  }),
  // isRunningLow: Ember.computed('item', function () {
  //   let currentQuant = this.get('item.currentQuantity');
  //   let alertQuant = this.get('item.alertQuantity');
  //   if(currentQuant <= alertQuant) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }),
  actions: {
    toggleItemTable(category) {
      console.log('togling table in running-low-item')
      // console.log('category.id', category.id)
      console.log('isShowingTable',this.get('isShowingTable'))
      let target = Ember.$(this)
      console.log('target',target)
      Ember.$(this).css('color','yellow')
      // if(parseInt(category.id)===31) {
        if (this.get('buttonName')==='View Item') {
          this.set('buttonName', 'Hide Item')
          console.log('ishowtable lll',this.get('isShowingTable'))
          this.set('isShowingTable', true)
        } else {
          this.set('isShowingTable', false)
          this.set('buttonName', 'View Item')
          // this.toggleProperty('itemTableHidden')
        };
    },
  }


});
