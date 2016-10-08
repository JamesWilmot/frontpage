import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frontpage-podcast', 'Integration | Component | frontpage podcast', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frontpage-podcast}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frontpage-podcast}}
      template block text
    {{/frontpage-podcast}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
