define('super-rentals/tests/integration/helpers/rental-property-type-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | rental-property-type', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders correctly for a Standalone rental', async function (assert) {
      this.set('inputValue', 'Estate');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gQNRj/sG",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-property-type\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'Standalone');
    });

    (0, _qunit.test)('it renders correctly for a Community rental', async function (assert) {
      this.set('inputValue', 'Apartment');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gQNRj/sG",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-property-type\",[[20,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Community');
    });
  });
});