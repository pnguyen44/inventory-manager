import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('category');
  },
  // ishow: true,
  actions: {
    addToOrderList(item) {
      console.log('get there')
      this.get('store').find('item', item.id)
      .then(function(item){
          item.set('inOrderList', true)
          item.save()
          console.log('item has been saved in cart')
          console.log('item.inOrderList ===', this.get('item'))
        });
      },
  }
});
