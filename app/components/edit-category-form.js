import Ember from 'ember';

export default Ember.Component.extend({
  updatedCategoryName: Ember.computed('category', function() {
    return this.get('category.name');
  }),
  actions: {
    editCategory() {
      console.log('editing');
      console.log('category', this.get('category'));
      if (this.get('updatedCategoryName').trim().length === 0) {
        this.set('message', 'Name Required')
        Ember.$('.message').show()
        Ember.$('.message').delay(1000).fadeOut('slow')
      }
      this.sendAction('editCategory', this.get('category'), this.get('updatedCategoryName'));
      this.set('updatedCategoryName', '');
    },
    getCurrentCategory () {
      console.log('cat s ==', this.get('category.name'))
      let categoryName = this.get('category.name')
      this.set('updatedCategoryName',categoryName)
    },
  }
});
