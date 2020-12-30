let timer = 648000;
setInterval(() => {
  timer--;
  const hour = Math.floor(timer / 60 / 60 / 60);
  const min = Math.floor((timer / 60) % 60);
  console.log(`${hour}:${min}:${timer % 60}`);
}, 1000);
