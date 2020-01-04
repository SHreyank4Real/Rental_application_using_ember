define("ember-cli-mirage/utils/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isDsModel = isDsModel;
  _exports.hasEmberData = void 0;

  /* global requirejs */
  function _hasEmberData() {
    let matchRegex = /^ember-data/i;
    return !!Object.keys(requirejs.entries).find(e => !!e.match(matchRegex));
  }
  /**
    @hide
  */


  const hasEmberData = _hasEmberData();
  /**
    @hide
  */


  _exports.hasEmberData = hasEmberData;

  function isDsModel(m) {
    return m && typeof m.eachRelationship === 'function';
  }
});