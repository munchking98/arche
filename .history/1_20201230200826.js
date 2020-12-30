const time = 216000;
let timer = 215942;

console.log(Math.floor(time / 60 / 60 / 60) + '시');
console.log(Math.floor(time / 60 / 60));
console.log(time - timer);

setInterval(() => {
  timer--;
  const tt = time - timer;
  let s = 60;
  const hour = Math.floor(timer / 60 / 60 / 60);
  const min = Math.floor((timer / 60) % 60);
  if (s - tt === 0) {
    s = 60;
  }
  console.log(`${hour}:${min}:${s - tt}`);
}, 1000);
