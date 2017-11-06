import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  // ishow: true,
  actions: {
    addToOrderList(item, quantityPurchased) {
      console.log('get there finally')
      if (quantityPurchased > 0) {
        this.get('store').find('item', item.id)
          .then(function(item) {
            item.set('inOrderList', true)
            item.set('quantityPurchased', quantityPurchased)
            item.save()
              .then(() => {
                console.log('item has been saved in cart')
                Ember.$(`#add-to-order-list-form-${item.id}`).modal('hide');
                // Ember.$('.message').html('Sucess!!')
                // Ember.$('.message').delay(1000).fadeOut('slow')
              })
              .catch(() => {
                Ember.$('.message').show()
                Ember.$('.message').html('Error on add to order list')
                Ember.$('.message').delay(1000).fadeOut('slow')
              })
            // console.log('item.inOrderList ===', this.get('item'))
          });
      }
    },
  }
});
