const content = document.querySelectorAll('.click');
const stat = document.querySelector('.stat');
const cut = document.querySelector('.cut');

content.forEach((t) => {
  t.addEventListener('click', () => {
    const div = document.createElement('div');
    t.classList.toggle('red');
    const time = new Date();
    const mon = time.getMonth();
    const day = time.getDay();
    const hour = time.getHours();
    const min = time.getMinutes();
    const second = time.getSeconds();

    div.textContent = `${t.textContent}번 ${hour} : ${min} : ${second} ->  `;
    cut.appendChild(div);
  });
});
