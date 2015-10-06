// コールバック
var UpdateUserData = function(mail){
  // メールからUserIdの検索・取得
  getUserId(mail, function(id){
    // Userのデータを取得
    getUser(id, function(user){
      user.name = 'test';
      // ユーザデータの更新
      updateUser(user, function(){
        // 完了したこと画面に通知
        notifyPage('user updated!');
      });
    });
  });
};

console.log('start ->');
UpdateUserData('foo@bar.com');

//----------------------------------------------------------------------------
function getUserId(mail, cb){
  console.log('get User Id ->');
  setTimeout(function(){
    var id = '001';
    cb(id);
  }, 2000);
}

function getUser(id, cb){
  console.log('get User ->');
  var user = {
    name : 'hoge'
  };
  setTimeout(function(){
    cb(user);
  }, 2000);
}

function updateUser(user, cb) {
  // update
  console.log('update User ->');
  setTimeout(function(){
    cb();
  }, 2000);
}

function notifyPage(msg){
  console.log(msg);
  console.log(' -> done');
}
