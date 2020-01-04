define("ember-cli-mirage/test-support/index", ["exports", "ember-cli-mirage/test-support/setup-mirage"], function (_exports, _setupMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "setupMirage", {
    enumerable: true,
    get: function () {
      return _setupMirage.default;
    }
  });
});