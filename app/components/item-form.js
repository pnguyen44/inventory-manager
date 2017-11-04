import Ember from 'ember';

export default Ember.Component.extend({
newItem: {
  name:null,
  description: null,
  currentQuantity: null,
  alertQuantity: null,
},
actions: {
  createItem (){
    console.log('in item-form');
    console.log('newItem..', this.get('newItem'));
    console.log('category..', this.get('category'));
    let newItemName = this.get('newItem.name')
    if (newItemName !== null) {
      if (newItemName.trim().length){
        this.get('newItem').category = this.get('category');
        console.log('category in if', this.get('category'));
      }
    }
    // let itemObj = this.get('newItem')
    // itemObj.category= this.get('category')
    // console.log('----', newItem)
    this.sendAction('createItem', this.get('newItem'));
    this.set('newItem',{});
    console.log('newItem after reset', this.get('newItem'))
  },
  clearItemForm () {
    this.set('newItem',{});
  }
}
});
