import Ember from 'ember';

export default Ember.Component.extend({
  updatedItem: {},
  updatedName: Ember.computed.oneWay('item.name'),
  updatedDescription: Ember.computed.oneWay('item.description'),
  updatedCurrentQuantity: Ember.computed.oneWay('item.currentQuantity'),
  updatedAlertQuantity: Ember.computed.oneWay('item.alertQuantity'),

  actions: {
    editItem () {
      console.log('item name', this.get('item.name'));
      let newName = this.get('updatedName')
      console.log('newName', newName);
      let updatedAlertQuantity= this.get('updatedAlertQuantity')
      let updatedCurrentQuantity = this.get('updatedCurrentQuantity')
      console.log('updatedAlertQuantity--', updatedAlertQuantity)
      // if (updatedAlertQuantity===null || updatedAlertQuantity===undefined || updatedAlertQuantity==='') {
      //   this.set('updatedAlertQuantity',0)
      // }
      console.log('currentQuantity--', this.get('currentQuantity'))
      // if (currentQuantity===null || currentQuantity===undefined || currentQuantity==='') {
      //   this.set('updatedAlertQuantity',0)
      // }
      console.log(newName.trim().length)

      if (newName !== undefined || newName === null || newName === '') {
        if(newName.trim().length ===0) {
          console.log('get here...')
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
      console.log('updatedItem=..', this.get('updatedItem'));
      // this.get("item").save()
      this.sendAction('editItem',this.get('item'), this.get('updatedItem'));
      this.set('updatedItem', {})
    },
    setCurrentItem () {
      console.log('get here')
      this.set('updatedName', this.get('item.name'))
      this.set('updatedDescription', this.get('item.description'))
      this.set('updatedCurrentQuantity', this.get('item.currentQuantity'))
      this.set('updatedAlertQuantity', this.get('item.alertQuantity'))
      // updatedName: Ember.computed.oneWay('item.name'),
      // updatedDescription: Ember.computed.oneWay('item.description'),
      // updatedCurrentQuantity: Ember.computed.oneWay('item.currentQuantity'),
      // updatedAlertQuantity: Ember.computed.oneWay('item.alertQuantity')
    },
  }
});
