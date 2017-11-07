import Ember from 'ember';

export default Ember.Component.extend({
  newCategoryToAdd: {
    name: null,
  },
  actions: {
    createCategory() {
      console.log('got here...');
      console.log('tite=', this.get('title'));
      let newName = this.get('newCategoryToAdd.name')
      console.log('new name ==', newName)
      if (newName !== undefined && newName !== null ) {
        if (newName.trim().length === 0) {
          this.set('message', 'Name Required')
          Ember.$('.message').show()
          Ember.$('.message').delay(1000).fadeOut('slow')
        }
      } else if (newName===null){
        this.set('message', 'Name Required')
        Ember.$('.message').show()
        Ember.$('.message').delay(1000).fadeOut('slow')
      }
      this.sendAction('createCategory', this.get('newCategoryToAdd'));
      this.set('newCategoryToAdd.name', null);
    }
  }
});
