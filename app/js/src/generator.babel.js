// ES6 Generator function

var UpdateUserDate = function*(mail){
  // メールからUserIdの検索・取得
  var id = yield getUserId(mail);
  var user = yield getUser(id);
  user.name = 'test';
  // ユーザデータの更新
  yield updateUser(user);
  yield notifyPage('user updated');
};

var generator = UpdateUserDate('foo@bar.com');

// getUserId
generator.next().value.then(function(id) {
  // getUser
  return generator.next(id).value.then(function(user) {
    // updateUser
    user.name = 'test';
    return generator.next(user).value.then(function() {
      // notifyPage
      generator.next();
    });
  });
});

// ----------------------------------------------------------------------------
function getUserId(mail){
  return new Promise((resolve, reject) => {
    console.log('get User Id ->');
    setTimeout(() => {
      var id = '001';
      resolve(id);
    }, 2000);
  });
}

function getUser(id){
  return new Promise((resolve, reject) => {
    console.log('get User(id=' + id + ') ->');
    const user = { name : 'hoge' };
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}


function updateUser(user){
  return new Promise((resolve, reject) => {
    console.log('update User ->');
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function notifyPage(msg){
  console.log(msg);
  console.log(' -> done');
}
