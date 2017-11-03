import Ember from 'ember';

export default Ember.Component.extend({
  updatedItem: {},
  updatedName: Ember.computed.oneWay('item.name'),
  updatedDescription: Ember.computed.oneWay('item.description'),
  updatedCurrentQuantity: Ember.computed.oneWay('item.currentQuantity'),
  updatedAlertQuantity: Ember.computed.oneWay('item.alertQuantity'),

  actions: {
    editItem () {
      console.log('item before', this.get('item'));
      console.log('item after', this.get('item'));
      console.log('item', this.get('item'));
      console.log('updatedName', this.get('updatedName'));
      this.get('updatedItem').name = this.get('updatedName');
      this.get('updatedItem').description = this.get('updatedDescription');
      this.get('updatedItem').currentQuantity = this.get('updatedCurrentQuantity');
      this.get('updatedItem').alertQuantity = this.get('updatedAlertQuantity');
      console.log('updatedItem=..', this.get('updatedItem'));
      // this.get("item").save()
      this.sendAction('editItem',this.get('item'), this.get('updatedItem'));
      // this.set('updatedItem', null)
    },
    clearEditForm () {
      console.log('get here')
      this.set('updatedItem', null)
      this.set('updatedName', null)
      // updatedName: Ember.computed.oneWay('item.name'),
      // updatedDescription: Ember.computed.oneWay('item.description'),
      // updatedCurrentQuantity: Ember.computed.oneWay('item.currentQuantity'),
      // updatedAlertQuantity: Ember.computed.oneWay('item.alertQuantity')
    },
  }
});
