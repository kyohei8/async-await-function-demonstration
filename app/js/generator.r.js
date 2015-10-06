// ES6 Generator function

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var UpdateUserDate = _regeneratorRuntime.mark(function UpdateUserDate(mail) {
  var id, user;
  return _regeneratorRuntime.wrap(function UpdateUserDate$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return getUserId(mail);

      case 2:
        id = context$1$0.sent;
        context$1$0.next = 5;
        return getUser(id);

      case 5:
        user = context$1$0.sent;

        user.name = 'test';
        // ユーザデータの更新
        context$1$0.next = 9;
        return updateUser(user);

      case 9:
        context$1$0.next = 11;
        return notifyPage('user updated');

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, UpdateUserDate, this);
});

var generator = UpdateUserDate('foo@bar.com');

// getUserId
generator.next().value.then(function (id) {
  // getUser
  return generator.next(id).value.then(function (user) {
    // updateUser
    user.name = 'test';
    return generator.next(user).value.then(function () {
      // notifyPage
      generator.next();
    });
  });
});

// ----------------------------------------------------------------------------
function getUserId(mail) {
  return new _Promise(function (resolve, reject) {
    console.log('get User Id ->');
    setTimeout(function () {
      var id = '001';
      resolve(id);
    }, 2000);
  });
}

function getUser(id) {
  return new _Promise(function (resolve, reject) {
    console.log('get User(id=' + id + ') ->');
    var user = { name: 'hoge' };
    setTimeout(function () {
      resolve(user);
    }, 2000);
  });
}

function updateUser(user) {
  return new _Promise(function (resolve, reject) {
    console.log('update User ->');
    setTimeout(function () {
      resolve();
    }, 2000);
  });
}

function notifyPage(msg) {
  console.log(msg);
  console.log(' -> done');
}

// メールからUserIdの検索・取得
