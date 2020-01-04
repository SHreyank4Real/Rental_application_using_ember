define("ember-cli-mirage/index", ["exports", "@miragejs/server"], function (_exports, _server) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _server.default;
    }
  });
  Object.keys(_server).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _server[key];
      }
    });
  });
});