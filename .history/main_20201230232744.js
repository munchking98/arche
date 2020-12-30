const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');
const gen = document.querySelector('.gen');
const del = document.querySelector('.delete');
const timer = document.querySelector('.time');
const nam = document.querySelector('.nam');
const all = document.querySelector('.map');

for (let i = 0; i <= 25; i++) {
  const num = document.createElement('div');
  num.classList.add('click');
  num.textContent = i + 1;
  all.appendChild(num);
}
const content = document.querySelectorAll('.click');

// 중앙 시계 ****************************************
setInterval(() => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const second = time.getSeconds();
  timer.textContent = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${second < 10 ? `0${second}` : second}`;
}, 1000);
// ****************************************************

stat.addEventListener('click', () => {});
content.forEach((t) => {
  t.addEventListener('click', () => {
    const cutDiv = document.createElement('div');
    const genDiv = document.createElement('div');
    const namDiv = document.createElement('div');
    const check = () => {
      const time = new Date();
      const mon = time.getMonth();
      const day = time.getDay();
      const hour = time.getHours();
      const min = time.getMinutes();
      const second = time.getSeconds();

      cutDiv.textContent = `${t.textContent}번 ${hour} : ${min} : ${second}  `;
      genDiv.textContent = `${t.textContent}번 ${
        hour + 3 <= 24 ? hour + 3 : hour + 3 - 24
      } : ${min} : ${second}  `;
      let timer = 648000;
      setInterval(() => {
        timer--;
        const hour = Math.floor(timer / 60 / 60 / 60);
        const min = Math.floor((timer / 60) % 60);
        namDiv.textContent = `${hour}:${min}:${timer % 60}`;
        if (timer === 0) {
          nam.removeChild(namDiv);
          cut.removeChild(cutDiv);
          gen.removeChild(genDiv);
          t.classList.toggle('green');
          t.classList.remove('red');
        }
      }, 1000);

      nam.appendChild(namDiv);
      cut.appendChild(cutDiv);
      gen.appendChild(genDiv);
    };
    if (t.classList.contains('red')) {
      t.classList.toggle('red');
      nam.removeChild(namDiv);
      cut.removeChild(cutDiv);
      gen.removeChild(genDiv);
    } else if (t.classList.contains('green')) {
      t.classList.remove('green');
      t.classList.toggle('red');
      check();
    } else {
      t.classList.toggle('red');
      t.classList.remove('green');
      check();
    }
  });
});

del.addEventListener('click', () => {
  const de = (dd) => {
    while (dd.hasChildNodes()) {
      dd.removeChild(dd.firstChild);
    }
  };
  content.forEach((t) => {
    if (t.classList.contains('red')) {
      t.classList.remove('red');
    }
  });
  de(gen);
  de(cut);
  de(nam);
});
