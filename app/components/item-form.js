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
    console.log('in create item');
    console.log('newItem..', this.get('newItem'))
    console.log('category..', this.get('category'))
    this.get('newItem').category = this.get('category');

    // let itemObj = this.get('newItem')
    // itemObj.category= this.get('category')
    // console.log('----', newItem)
    this.sendAction('createItem', this.get('newItem'))
    this.set('newItem.content',null)
  }
}
});
