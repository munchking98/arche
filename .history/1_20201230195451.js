const time = 216000;
let timer = 216000;
console.log(Math.floor(time / 60 / 60 / 60) + '시');
console.log(Math.floor(time / 60 / 60));
console.log(time - timer);

setInterval(() => {
  time--;
  const hour = Math.floor(time / 60 / 60 / 60);
  const min = Math.floor(time / 60 / 60);
  const sec = time - timer;
  console.log(`${hour}:${min}:${sec}`);
}, 1000);
