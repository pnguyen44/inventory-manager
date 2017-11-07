import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    editRequestedQty(item, quantityPurchased) {
      if (quantityPurchased > 0) {
        this.get('store').find('item', item.id)
          .then(function(item) {
            item.set('quantityPurchased', Number(quantityPurchased))
            item.save()
              .then(() => {
                Ember.$(".modal-backdrop").remove()
                Ember.$(`#edit-requested-quantity-form-${item.id}`).modal('hide');
              })
              .catch(() => {
                Ember.$('.message').show()
                Ember.$('.message').html('Error on edit requested quantity')
                Ember.$('.message').delay(1500).fadeOut('slow')
              })
          });
      }
    },
    removeFromOrderList(item) {
      this.get('store').find('item', item.id)
        .then(function(item) {
          item.set('quantityPurchased', 0)
          item.set('inOrderList', false)
          item.save()
            .then(() => {
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#remove-from-order-list-form${item.id}`).hide();
            })
            .catch(() => {
              Ember.$('.message').show()
              Ember.$('.message').html('Error on remove item from order list')
              Ember.$('.message').delay(1500).fadeOut('slow')
            })
        });
    },
    sendToInventory(item,updatedItem) {
      this.get('store').find('item', item.id)
        .then(function(item) {
          // item.set('inOrderList', true)
          item.set('quantityPurchased', Number(updatedItem.quantityPurchased))
          item.set('inOrderList', Number(updatedItem.inOrderList))
          item.set('currentQuantity', Number(updatedItem.currentQuantity))
          item.save()
            .then(() => {
              Ember.$(".modal-backdrop").remove()
              Ember.$(`#sendToInventory${item.id}`).hide();
            })
            .catch(() => {
              Ember.$('.message').show()
              Ember.$('.message').html('Error on send to inventory')
              Ember.$('.message').delay(1500).fadeOut('slow')
            })
        });
    },
  }
});
