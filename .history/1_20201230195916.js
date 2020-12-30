const time = 216000;
let timer = 216000;
let s = 60;
console.log(Math.floor(time / 60 / 60 / 60) + '시');
console.log(Math.floor(time / 60 / 60));
console.log(time - timer);

setInterval(() => {
  timer--;
  const tt = time - timer;
  const hour = Math.floor(timer / 60 / 60 / 60);
  const min = Math.floor(timer / 60 / 60);
  const sec = time - timer;
  console.log(`${hour}:${min}:${s === 0 ? (s = 60) : (s = s - tt)}`);
}, 1000);
