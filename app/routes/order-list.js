import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    editRequestedQty (item, quantityPurchased) {
      console.log('get there finally edit..')
      if (quantityPurchased >0) {
      this.get('store').find('item', item.id)
      .then(function(item){
          // item.set('inOrderList', true)
          item.set('quantityPurchased', quantityPurchased)
          item.save()
            .then(() => {
              console.log('reqeuest quan edied sucess')
              Ember.$(`#edit-requested-quantity-form-${item.id}`).modal('hide');
            })
            .catch(() => {
              Ember.$('.message').show()
              Ember.$('.message').html('Error on edit reqeuest quantity')
              Ember.$('.message').delay(1000).fadeOut('slow')
            })
        });
      }
    },
  }
});
