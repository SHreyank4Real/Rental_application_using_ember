define("ember-cli-mirage/serializers/rest-serializer", ["exports", "@miragejs/server"], function (_exports, _server) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _server.ActiveModelSerializer;
    }
  });
});