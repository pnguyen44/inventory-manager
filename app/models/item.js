import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  currentQuantity: DS.attr('number'),
  alertQuantity: DS.attr('number'),
  quantityPurchased: DS.attr('number'),
  inOrderList: DS.attr('boolean'),
  category_id: DS.attr('number'),
  category: DS.belongsTo('category')
});
