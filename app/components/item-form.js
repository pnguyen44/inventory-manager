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
      let newItemName = this.get('newItem.name')
      let newCurrentQty = this.get('newItem.currentQuantity')
      let currentQuantity = Number(this.get('newItem.currentQuantity'))
      let alertQuantity = this.get('newItem.alertQuantity')
      if(alertQuantity===undefined || alertQuantity===null) {
        this.get('newItem').alertQuantity = 0
      }
      if (newItemName !== undefined || newItemName === null || newItemName === '') {
        if(newItemName.trim().length ===0) {

      Ember.$('.message').show()
      this.set('message', 'Name and current quantity required')
      Ember.$('.message').delay(1300).fadeOut('slow')
        } else {
          this.get('newItem').category = this.get('category');
          this.sendAction('createItem', this.get('newItem'));
        }
      } else {
        Ember.$('.message').show()
        this.set('message', 'Name required')
        Ember.$('.message').delay(1300).fadeOut('slow')
      }
      // this.set('newItem', {});
    },
    clearItemForm() {
      this.set('newItem', {});
    }
  }
});
