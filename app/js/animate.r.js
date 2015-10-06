'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _this = this;

require('gsap');

(function callee$0$0() {
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(rotate());

      case 2:
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(translate());

      case 4:
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap(fadeOut());

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this);
})();

function rotate() {
  console.log('rotate');
  return new _Promise(function (resolve, reject) {
    TweenLite.to('#rect', 0.6, {
      rotation: 90,
      onComplete: resolve
    });
  });
}
function translate() {
  console.log('translate');
  return new _Promise(function (resolve, reject) {
    TweenLite.to('#rect', 0.6, {
      x: 200,
      onComplete: resolve
    });
  });
}
function fadeOut() {
  console.log('fade out');
  return new _Promise(function (resolve, reject) {
    TweenLite.to('#rect', 0.3, {
      opacity: 0,
      y: -100,
      onComplete: resolve
    });
  });
}
