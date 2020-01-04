'use strict';

define('super-rentals/tests/acceptance/list-rentals-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'ember-cli-mirage/test-support/setup-mirage'], function (_qunit, _testHelpers, _emberQunit, _setupMirage) {
  'use strict';

  (0, _qunit.module)('Acceptance | list rentals', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);

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
define('super-rentals/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/rental-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/rental-property-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type.js should pass ESLint\n\n');
  });

  QUnit.test('models/rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contacts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass ESLint\n\n');
  });
});
define('super-rentals/tests/integration/components/list-filter-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | list-filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PT5Ar3tM",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"list-filter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "wCktFOTV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"list-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
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
define('super-rentals/tests/test-helper', ['super-rentals/app', 'super-rentals/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('super-rentals/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/rental-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/rental-property-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/rental-property-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contacts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint\n\n');
  });
});
define('super-rentals/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('super-rentals/tests/unit/models/rental-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | rental', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('rental', {}));
      assert.ok(model);
    });
  });
});
define('super-rentals/tests/unit/routes/about-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define('super-rentals/tests/unit/routes/contacts-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | contacts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts');
      assert.ok(route);
    });
  });
});
define('super-rentals/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('super-rentals/tests/unit/routes/rentals-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | rentals', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:rentals');
      assert.ok(route);
    });
  });
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
