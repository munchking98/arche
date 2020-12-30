const content = document.querySelectorAll('.click');
const stat = document.querySelector('.stat');

content.forEach((t) => {
  t.addEventListener('click', () => {
    const div = document.createElement('div');
    t.classList.toggle('red');
    const time = new Date();
    div.textContent = time;
    stat.appendChild(div);
  });
});
