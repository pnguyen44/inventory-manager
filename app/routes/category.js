import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecore('category',params.category_id);
  }
});
