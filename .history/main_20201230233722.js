const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');
const gen = document.querySelector('.gen');
const del = document.querySelector('.delete');
const timer = document.querySelector('.time');
const nam = document.querySelector('.nam');
const all = document.querySelector('.map');
const number = document.querySelector('.number');

// 숫자볼 선언 ************************************
for (let i = 0; i <= 25; i++) {
  const num = document.createElement('div');
  num.classList.add('click');
  num.textContent = i + 1;
  all.appendChild(num);
}
const content = document.querySelectorAll('.click');
// ************************************************

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

// 숫자볼 클릭 이벤트 **********************************
stat.addEventListener('click', () => {});
content.forEach((t) => {
  t.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const cutDiv = document.createElement('td');
    const genDiv = document.createElement('td');
    const namDiv = document.createElement('td');
    const numDiv = document.createElement('td');
    const check = () => {
      const time = new Date();
      const mon = time.getMonth();
      const day = time.getDay();
      const hour = time.getHours();
      const min = time.getMinutes();
      const second = time.getSeconds();

      numDiv.textContent = t.textContent;
      cutDiv.textContent = `${hour} : ${min} `;
      genDiv.textContent = `${
        hour + 3 <= 24 ? hour + 3 : hour + 3 - 24
      } : ${min}  `;
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
      number.appendChild(numDiv);
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

// 초기화 버튼 **************************
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
// *************************************
