const content = document.querySelectorAll('.click');
const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');
const gen = document.querySelector('.gen');

content.forEach((t) => {
  t.addEventListener('click', () => {
    if (t.className !== `${t.className} red`) {
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
    } else {
      console.log('a');
    }
  });
});
