define("ember-cli-mirage/start-mirage", ["exports", "ember-cli-mirage/utils/read-modules", "ember-cli-mirage/server", "ember-inflector"], function (_exports, _readModules, _server, _emberInflector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startMirage;

  /**
    Helper to start mirage. This should not be called directly. In rfc232/rfc268
    tests, use `setupMirage()` or the `autoboot` option in the addon config
    in the environment. In legacy tests that call `startMirage` directly, this
    should be called via the `startMirage` method exported from
    `<app>/initializers/ember-cli-mirage`.
  
    This is intended to be called with only the `owner` argument (which would be
    `this.owner` in an rfc232/rfc268 test, or the application instance if called
    from an instance initializer). However, to support the legacy initializer, it
    can instead accept a hash of the environment and config objects.
  
    @hide
  */
  function startMirage(owner, {
    env,
    baseConfig,
    testConfig
  } = {}) {
    if (!env || !baseConfig) {
      if (!owner) {
        throw new Error('You must pass `owner` to startMirage()');
      }

      env = env || resolveRegistration(owner, 'config:environment'); // These are set from `<app>/initializers/ember-cli-mirage`

      baseConfig = baseConfig || resolveRegistration(owner, 'mirage:base-config');
      testConfig = testConfig || resolveRegistration(owner, 'mirage:test-config');
    }

    let environment = env.environment;
    let discoverEmberDataModels = Ember.getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    let modules = (0, _readModules.default)(env.modulePrefix);
    let options = Object.assign(modules, {
      environment,
      baseConfig,
      testConfig,
      discoverEmberDataModels
    });
    options.trackRequests = env['ember-cli-mirage'].trackRequests;
    options.inflector = {
      singularize: _emberInflector.singularize,
      pluralize: _emberInflector.pluralize
    };
    return new _server.default(options);
  } // Support Ember 1.13


  function resolveRegistration(owner, ...args) {
    if (owner.resolveRegistration) {
      return owner.resolveRegistration(...args);
    } else if (owner.__container__) {
      return owner.__container__.lookupFactory(...args);
    } else {
      return owner.container.lookupFactory(...args);
    }
  }
});