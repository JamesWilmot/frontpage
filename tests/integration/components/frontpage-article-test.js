import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frontpage-article', 'Integration | Component | frontpage article', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frontpage-article}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frontpage-article}}
      template block text
    {{/frontpage-article}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
