import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  ishow: true,

  // categoryNameLength: Ember.computed.filter('category', function(c) {
  //  let items = this.get('c.items');
  //  return items.length >4
  // })

 //  currentQuantity: Ember.computed
 // isRunningLow: Ember.computed.lte('currentQuantity',2)
  // isRunningLow: Ember.computed.filter('category.items' ,function(item) {
  //   let currentQuantity = this.get('item.currentQuantititemy');
  //   let alertQuantity = this.get('item.alertQuantity');
  //   if (currentQuantity <= alertQuantity) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }),
});
