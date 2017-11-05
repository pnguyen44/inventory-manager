import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  // ishow: true,
  actions: {
    addToOrderList(item,quantityPurchased) {
      console.log('get there finally')
      this.get('store').find('item', item.id)
      .then(function(item){
          item.set('inOrderList', true)
          item.set('quantityPurchased', quantityPurchased)
          item.save()
          console.log('item has been saved in cart')
          Ember.$(`#add-to-order-list-form-${item.id}`).modal('hide');
          // console.log('item.inOrderList ===', this.get('item'))
        });
      },
  }
});
