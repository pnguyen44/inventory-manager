import Ember from 'ember';

export default Ember.Component.extend({
  // test: Ember.computed.('item',function () {
  //   return this.get('item.name')
  // }),
  buttonName: 'View Item',
  // test: 'blue',


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
  name: 'blue'
});
