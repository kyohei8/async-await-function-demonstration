// ES6 async/await

var UpdateUserDate = async function(mail){
  // メールからUserIdの検索・取得
  var id = await getUserId(mail);
  var user = await getUser(id);
  user.name = 'test';
  // ユーザデータの更新
  await updateUser(user);
  notifyPage('user updated');
};

// async function 自体はpromise-likeを返す
UpdateUserDate('foo@bar.com').then(function(){
  console.log('done');
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
