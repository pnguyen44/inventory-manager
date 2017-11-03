import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delete-item-button-confirm', 'Integration | Component | delete item button confirm', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{delete-item-button-confirm}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#delete-item-button-confirm}}
      template block text
    {{/delete-item-button-confirm}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});