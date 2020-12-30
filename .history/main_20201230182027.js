const content = document.querySelectorAll('.click');
const stat = document.querySelector('.stat');

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
    div.textContent = `${mon}월 ${day}일 ${hour}시 ${min}분 ${second}초`;
    stat.appendChild(div);
  });
});
