import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  text: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      return 'View Inventory'
    } else {
      return 'Get Started'
    }
  }),
  // linkToText: Ember.computed('isAuthenticated', function() {
  //   if (this.get('isAuthenticated')) {
  //     return 'category'
  //   } else {
  //     return 'signed-up'
  //   }
  // })
});
