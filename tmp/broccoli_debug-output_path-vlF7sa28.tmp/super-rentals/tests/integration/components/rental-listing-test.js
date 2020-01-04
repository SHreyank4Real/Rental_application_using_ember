define('super-rentals/tests/integration/components/rental-listing-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | rental-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.rental = Ember.Object.create({
        image: 'sample.png',
        title: 'test-title',
        owner: 'test-owner',
        type: 'test-type',
        city: 'test-city',
        bedrooms: 3
      });
    });
    (0, _qunit.test)('should display rental details', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jFex8zlp",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-listing\",null,[[\"rental\"],[[19,0,[\"rental\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
      assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Owner: test-owner', 'Owner: test-owner');
    });

    (0, _qunit.test)('should toggle wide class on click', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jFex8zlp",
        "block": "{\"symbols\":[],\"statements\":[[1,[25,\"rental-listing\",null,[[\"rental\"],[[19,0,[\"rental\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
      await (0, _testHelpers.click)('.image');
      assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
      await (0, _testHelpers.click)('.image');
      assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
    });
  });
});