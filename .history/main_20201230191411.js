const content = document.querySelectorAll('.click');
const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');
const gen = document.querySelector('.gen');
const del = document.querySelector('.delete');
const timer = document.querySelector('.time');

setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const second = time.getSeconds();
  timer.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${second < 10 ? `0${second}` : second}`;
}, 1000);
content.forEach((t) => {
  t.addEventListener('click', () => {
    if (t.classList.contains('red')) {
      t.classList.toggle('red');
    } else {
      console.log(t.className);
      const cutDiv = document.createElement('div');
      const genDiv = document.createElement('div');
      t.classList.toggle('red');
      const time = new Date();
      const mon = time.getMonth();
      const day = time.getDay();
      const hour = time.getHours();
      const min = time.getMinutes();
      const second = time.getSeconds();

      cutDiv.textContent = `${t.textContent}번 ${hour} : ${min} : ${second}  `;
      genDiv.textContent = `${t.textContent}번 ${
        hour + 3
      } : ${min} : ${second}  `;
      cut.appendChild(cutDiv);
      gen.appendChild(genDiv);
    }
  });
});
del.addEventListener('click', () => {
  while (gen.hasChildNodes()) {
    gen.removeChild(gen.firstChild);
  }
});
