require('gsap');

(async () => {
  await rotate();
  await translate();
  await fadeOut();
})();

function rotate(){
  console.log('rotate');
  return new Promise((resolve, reject) => {
    TweenLite.to('#rect', 0.6, {
      rotation: 90,
      onComplete: resolve
    });
  });
}
function translate(){
  console.log('translate');
  return new Promise((resolve, reject) => {
    TweenLite.to('#rect', 0.6, {
      x: 200,
      onComplete: resolve
    });
  });
}
function fadeOut(){
  console.log('fade out');
  return new Promise((resolve, reject) => {
    TweenLite.to('#rect', 0.3, {
      opacity   : 0,
      y         : -100,
      onComplete: resolve
    });
  });
}
