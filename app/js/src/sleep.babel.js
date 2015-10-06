const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
const delay = (ms = 0, func) => new Promise(resolve => setTimeout(()=>{
  func();
  resolve();
}, ms));

(async () => {
  console.log('sleep...');
  await sleep(2000);
  await delay(2000, () => {
    console.log('delayed');
  });
  console.log('waked!...');
})();

