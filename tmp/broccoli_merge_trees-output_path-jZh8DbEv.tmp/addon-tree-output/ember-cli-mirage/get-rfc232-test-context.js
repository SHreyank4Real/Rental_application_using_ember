define("ember-cli-mirage/get-rfc232-test-context", ["exports", "require"], function (_exports, _require) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = getRfc232TestContext;

  /**
    Helper to get our rfc232/rfc268 test context object, or null if we're not in
    such a test.
  
    @hide
  */
  function getRfc232TestContext() {
    // Support older versions of `ember-qunit` that don't have
    // `@ember/test-helpers` (and therefore cannot possibly be running an
    // rfc232/rfc268 test).
    if (_require.default.has('@ember/test-helpers')) {
      let {
        getContext
      } = (0, _require.default)("@ember/test-helpers");
      return getContext();
    }
  }
});