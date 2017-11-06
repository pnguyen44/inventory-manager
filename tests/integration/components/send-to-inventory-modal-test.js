import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sent-to-inventory-modal', 'Integration | Component | sent to inventory modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sent-to-inventory-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sent-to-inventory-modal}}
      template block text
    {{/sent-to-inventory-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
