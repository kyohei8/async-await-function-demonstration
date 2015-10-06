// Promise A+

'use strict';

var UpdateUserDate = function UpdateUserDate(mail) {
  // メールからUserIdの検索・取得
  getUserId(mail).then(function (id) {
    // Userのデータを取得
    return getUser(id);
  }).then(function (user) {
    // ユーザデータの更新
    user.name = 'test';
    return updateUser(user);
  }).then(function () {
    // 完了したこと画面に通知
    notifyPage('user updated');
  });
};

UpdateUserDate('foo@bar.com');

// ----------------------------------------------------------------------------

function getUserId(mail) {
  return new Promise(function (resolve, reject) {
    console.log('get User Id ->');
    setTimeout(function () {
      var id = '001';
      resolve(id);
    }, 2000);
  });
}

function getUser(id) {
  return new Promise(function (resolve, reject) {
    console.log('get User(id=' + id + ') ->');
    var user = { name: 'hoge' };
    setTimeout(function () {
      resolve(user);
    }, 2000);
  });
}

function updateUser(user) {
  return new Promise(function (resolve, reject) {
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
