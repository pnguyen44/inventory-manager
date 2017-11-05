import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {
    name: null,
    description: null,
    currentQuantity: null,
    alertQuantity: null,
  },
  actions: {
    createItem() {
      if (this.get('newItem.name') !== undefined) {
        console.log('newItem lenght is', this.get('newItem.name').length)
        this.set('message', 'Name Required')
        Ember.$('.message').show()
        Ember.$('.message').delay(1000).fadeOut('slow')
      }
      if (this.get('newItem.name') === undefined) {
        console.log('newItem name is in erro', this.get('newItem.name'))
        this.set('message', 'Name Required')

        Ember.$('.message').show()
        Ember.$('.message').delay(1000).fadeOut('slow')
        this.get('newItem').category = this.get('category');
        console.log('category in if', this.get('category'));

      }
      // let itemObj = this.get('newItem')
      // itemObj.category= this.get('category')
      // console.log('----', newItem)
      this.sendAction('createItem', this.get('newItem'));
      this.set('newItem', {});
      console.log('newItem after reset', this.get('newItem'))
    },
    clearItemForm() {
      this.set('newItem', {});
    }
  }
});
