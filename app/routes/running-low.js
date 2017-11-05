import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  // ishow: true,
  actions: {
    addToOrderList(item,purchasedQuantity) {
      console.log('get there finally')
      this.get('store').find('item', item.id)
      .then(function(item){
          item.set('inOrderList', true)
          item.set('purchasedQuantity', purchasedQuantity)
          item.save()
          console.log('item has been saved in cart')
          // console.log('item.inOrderList ===', this.get('item'))
        });
      },
  }
});
