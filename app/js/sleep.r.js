'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _this = this;

var sleep = function sleep() {
  var ms = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  return new _Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var delay = function delay(ms, func) {
  if (ms === undefined) ms = 0;
  return new _Promise(function (resolve) {
    return setTimeout(function () {
      func();
      resolve();
    }, ms);
  });
};

(function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log('sleep...');
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap(sleep(2000));

      case 3:
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(delay(2000, function () {
          console.log('delayed');
        }));

      case 5:
        console.log('waked!...');

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
})();
