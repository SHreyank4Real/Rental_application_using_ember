define('super-rentals/tests/acceptance/list-rentals-test', ['qunit', '@ember/test-helpers', 'ember-qunit'], function (_qunit, _testHelpers, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('should show rentals as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/rentals', 'should redirect automatically');
    });
    (0, _qunit.test)('should link to information about the company', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-about");
      assert.equal((0, _testHelpers.currentURL)(), '/about', 'should navigate to about');
    });

    (0, _qunit.test)('should link to contact information', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.click)(".menu-contact");
      assert.equal((0, _testHelpers.currentURL)(), '/contacts', 'should navigate to contact');
    });
    (0, _qunit.test)('should list available rentals.', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
    });
  });
});