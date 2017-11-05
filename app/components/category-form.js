import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryToAdd: {
    name: null,
  },
  actions: {
    createCategory() {
      console.log('got here...');
      console.log('tite=', this.get('title'));
      console.log('new category =', this.get('newCategoryToAdd.name'));
      if (this.get('newCategoryToAdd.name') === null){
          console.log('error ..')
          this.set('message', 'Error')
          Ember.$('.message').delay(1000).fadeOut('slow')
      } else if (this.get('newCategoryToAdd.name').trim().length = 0) {
        this.set('message', 'Name Required')
        Ember.$('.message').delay(1000).fadeOut('slow')
      }
      this.sendAction('createCategory', this.get('newCategoryToAdd'));
      this.set('newCategoryToAdd.name', null);
    }
  }
});
