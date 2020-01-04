define("ember-cli-mirage/utils/inflector", ["exports", "@miragejs/server", "ember-inflector"], function (_exports, _server, _emberInflector) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _server._utilsInflectorCamelize;
    }
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _server._utilsInflectorDasherize;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _server._utilsInflectorUnderscore;
    }
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _server._utilsInflectorCapitalize;
    }
  });
  Object.defineProperty(_exports, "singularize", {
    enumerable: true,
    get: function () {
      return _emberInflector.singularize;
    }
  });
  Object.defineProperty(_exports, "pluralize", {
    enumerable: true,
    get: function () {
      return _emberInflector.pluralize;
    }
  });
});