import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryToAdd: {
    name: null,
  },
  title: 'cat',
  actions: {
    createCategory () {
      console.log('got here...');
      console.log('tite=', this.get('title'));
      console.log('new category =', this.get('newCategoryToAdd'));
      // console.log('form submitted')
      this.sendAction('createCategory',this.get('newCategoryToAdd'));
      this.set('newCategoryToAdd.name',null);
    }
  }
});
