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
      console.log('in item-form');
      console.log('newItem..', this.get('newItem'));
      console.log('category..', this.get('category'));
      let newItemName = this.get('newItem.name')
      let newCurrentQty = this.get('newItem.currentQuantity')
      console.log('new it em is', newItemName)
      let currentQuantity = Number(this.get('newItem.currentQuantity'))
      console.log('currentQuantity is -', currentQuantity)
      if (newItemName!==undefined && newItemName !== null) {
        if (newItemName.trim().length && newCurrentQty!==0 || newCurrentQty!==undefined ) {
          this.get('newItem').category = this.get('category');
          console.log('category in if', this.get('category'));
        } else {
          Ember.$('.message').show()
          this.set('message', 'Name and current quantity required')
          Ember.$('.message').delay(1300).fadeOut('slow')
        }
      } else if (newItemName === undefined) {
        Ember.$('.message').show()
        this.set('message', 'Name required')
        Ember.$('.message').delay(1300).fadeOut('slow')
      }
      this.sendAction('createItem', this.get('newItem'));
      this.set('newItem', {});
      console.log('newItem after reset', this.get('newItem'))
    },
    clearItemForm() {
      this.set('newItem', {});
    }
  }
});
