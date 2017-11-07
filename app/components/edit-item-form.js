import Ember from 'ember';

export default Ember.Component.extend({
  updatedItem: {},
  updatedName: Ember.computed.oneWay('item.name'),
  updatedDescription: Ember.computed.oneWay('item.description'),
  updatedCurrentQuantity: Ember.computed.oneWay('item.currentQuantity'),
  updatedAlertQuantity: Ember.computed.oneWay('item.alertQuantity'),

  actions: {
    editItem () {
      let newName = this.get('updatedName')
      let updatedAlertQuantity= this.get('updatedAlertQuantity')
      let updatedCurrentQuantity = this.get('updatedCurrentQuantity')
      if (newName !== undefined || newName === null || newName === '') {
        if(newName.trim().length ===0) {
          Ember.$('.message').show()
          this.set('message', 'Name required')
          Ember.$('.message').delay(1000).fadeOut('slow')
        }
      } else if(updatedCurrentQuantity===undefined || updatedCurrentQuantity === null || updatedCurrentQuantity ==='') {
        Ember.$('.message').show()
        this.set('message', 'Current quantity required')
        Ember.$('.message').delay(1000).fadeOut('slow')
      }
      this.get('updatedItem').name = this.get('updatedName');
      this.get('updatedItem').description = this.get('updatedDescription');
      this.get('updatedItem').currentQuantity = this.get('updatedCurrentQuantity');
      this.get('updatedItem').alertQuantity = this.get('updatedAlertQuantity');
      this.sendAction('editItem',this.get('item'), this.get('updatedItem'));
      this.set('updatedItem', {})
    },
    setCurrentItem () {
      this.set('updatedName', this.get('item.name'))
      this.set('updatedDescription', this.get('item.description'))
      this.set('updatedCurrentQuantity', this.get('item.currentQuantity'))
      this.set('updatedAlertQuantity', this.get('item.alertQuantity'))
    },
  }
});
