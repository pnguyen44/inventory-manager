import Ember from 'ember';

export default Ember.Component.extend({
  // model () {
  //   return this.get('store').findAll('category');
  // },
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
