import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frontpage-news', 'Integration | Component | frontpage news', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frontpage-news}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frontpage-news}}
      template block text
    {{/frontpage-news}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
