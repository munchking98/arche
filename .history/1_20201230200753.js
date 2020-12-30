const time = 216000;
let timer = 215942;
let s = 60;
console.log(Math.floor(time / 60 / 60 / 60) + '시');
console.log(Math.floor(time / 60 / 60));
console.log(time - timer);

setInterval(() => {
  timer--;
  const tt = time - timer;
  const hour = Math.floor(timer / 60 / 60 / 60);
  const min = Math.floor((timer / 60) % 60);
  if (s - tt === -1) {
    s = 59;
  }
  console.log(`${hour}:${min}:${s - tt}`);
}, 1000);
