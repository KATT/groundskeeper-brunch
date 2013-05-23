// Generated by CoffeeScript 1.6.1
var CleanJs, groundskeeper,
  _this = this;

groundskeeper = require('groundskeeper');

module.exports = CleanJs = (function() {

  CleanJs.prototype.brunchPlugin = true;

  CleanJs.prototype.type = 'javascript';

  CleanJs.prototype.extension = 'js';

  function CleanJs(config) {
    var _ref, _ref1, _ref2,
      _this = this;
    this.config = config;
    this.optimize = function(data, path, callback) {
      return CleanJs.prototype.optimize.apply(_this, arguments);
    };
    this.options = (_ref = (_ref1 = this.config) != null ? (_ref2 = _ref1.plugins) != null ? _ref2.groundskeeper : void 0 : void 0) != null ? _ref : {
      "debugger": true,
      pragmas: ['validation', 'development']
    };
    return;
  }

  CleanJs.prototype.optimize = function(data, path, callback) {
    var cleaner;
    console.log(this.options);
    cleaner = groundskeeper(this.options);
    cleaner.write(data);
    return callback(null, cleaner.toString());
  };

  return CleanJs;

})();