
if (typeof document !== 'undefined') {
  __webpack_public_path__ = (function(){
    var scripts = document.querySelectorAll('script');
    return scripts[scripts.length - 1].src.replace(/\/[^/]*$/, '/');
  })();
}

module.exports = (function(){
  var d = _eai_d;
  var r = _eai_r;
  window.emberAutoImportDynamic = function(specifier) {
    return r('_eai_dyn_' + specifier);
  };
    d('@miragejs/server', [], function() { return require('C:\\Users\\gra\\Documents\\Ember\\super-rentals\\node_modules\\@miragejs\\server\\dist\\mirage-esm.js'); });
    d('lodash-es', [], function() { return require('C:\\Users\\gra\\Documents\\Ember\\super-rentals\\node_modules\\lodash-es\\lodash.js'); });
})();
