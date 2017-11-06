import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    editRequestedQty(item, quantityPurchased) {
      console.log('get there finally edit..')
      if (quantityPurchased > 0) {
        this.get('store').find('item', item.id)
          .then(function(item) {
            // item.set('inOrderList', true)
            item.set('quantityPurchased', quantityPurchased)
            item.save()
              .then(() => {
                console.log('reqeuest quan edied sucess')
                Ember.$(".modal-backdrop").remove()
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
    removeFromOrderList(item) {
      this.get('store').find('item', item.id)
        .then(function(item) {
          // item.set('inOrderList', true)
          item.set('quantityPurchased', 0)
          item.set('inOrderList', false)
          item.save()
            .then(() => {
              console.log('remove form order list sucess')
              console.log('item.id is==', item.id)
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#remove-from-order-list-form${item.id}`).hide();
            })
            .catch(() => {
              Ember.$('.message').show()
              Ember.$('.message').html('Error on remove item from order list')
              Ember.$('.message').delay(1050).fadeOut('slow')
            })
        });
    },
    sendToInventory(item,updatedItem) {
      this.get('store').find('item', item.id)
        .then(function(item) {
          // item.set('inOrderList', true)
          item.set('quantityPurchased', updatedItem.quantityPurchased)
          item.set('inOrderList',updatedItem.inOrderList)
          item.set('currentQuantity',updatedItem.currentQuantity)
          item.save()
            .then(() => {
              console.log('success')
              console.log('item.id is==', item.id)
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#sendToInventory${item.id}`).hide();
            })
            .catch(() => {
              Ember.$('.message').show()
              Ember.$('.message').html('Error on send to inventory')
              Ember.$('.message').delay(1050).fadeOut('slow')
            })
        });
    },
  }
});
