import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  actions: {
    addToOrderList(item, quantityPurchased) {
      if (quantityPurchased > 0) {
        this.get('store').find('item', item.id)
          .then(function(item) {
            item.set('inOrderList', true)
            item.set('quantityPurchased', Number(quantityPurchased))
            item.save()
              .then(() => {
                Ember.$(".modal-backdrop").remove()
                Ember.$(`#add-to-order-list-form-${item.id}`).modal('hide');
              })
              .catch(() => {
                Ember.$('.message').show()
                Ember.$('.message').html('Error on add to order list')
                Ember.$('.message').delay(1500).fadeOut('slow')
              })
          });
      }
    },
  }
});
