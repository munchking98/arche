const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');
const gen = document.querySelector('.gen');
const del = document.querySelector('.delete');
const timer = document.querySelector('.time');
const nam = document.querySelector('.nam');
const all = document.querySelector('.map');
const number = document.querySelector('.number');
const tbody = document.querySelector('tbody');

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
content.forEach((t) => {
  t.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const cutTd = document.createElement('td');
    const genTd = document.createElement('td');
    const namTd = document.createElement('td');
    const numTd = document.createElement('td');
    const delTd = document.createElement('td');

    const check = () => {
      const time = new Date();
      const hour =
        time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
      const min =
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

      numTd.textContent = t.textContent;
      delTd.textContent = 'X';
      delTd.addEventListener('click', () => {
        tbody.removeChild(tr);
        t.classList.toggle('red');
      });
      cutTd.textContent = `${hour} : ${min} `;
      genTd.textContent = `${
        new Date().getHours() + 3 <= 24
          ? `0${new Date().getHours() + 3}`
          : `0${new Date().getHours() + 3 - 24}`
      } : ${min}`;
      let timer = 22000;
      setInterval(() => {
        timer--;
        const hour = Math.floor(timer / 60 / 60 / 60);
        const min = Math.floor((timer / 60) % 60);
        namTd.textContent = `${hour < 10 ? `0${hour}` : hour}:${
          min < 10 ? `0${min}` : min
        }:${timer % 60 < 10 ? `0${timer % 60}` : `${timer % 60}`}`;
        if (timer === 0) {
          tbody.removeChild(tr);
          t.classList.toggle('green');
          t.classList.remove('red');
        }
      }, 1000);
      tr.appendChild(numTd);
      tr.appendChild(cutTd);
      tr.appendChild(genTd);
      tr.appendChild(namTd);
      tr.appendChild(delTd);
      tbody.appendChild(tr);
    };
    if (t.classList.contains('red')) {
      t.classList.toggle('red');
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
