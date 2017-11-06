import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  removeFromOrderList(item) {
    return this.sendAction('removeFromOrderList', item)
  },
}

});
