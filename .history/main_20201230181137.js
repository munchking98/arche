const content = document.querySelectorAll('.click');
const body = document.querySelector('body');
content.forEach((t) => {
  t.addEventListener('click', () => {
    const time = new Date();
    const div = document.createElement('div');
    t.classList.toggle('red');
    t.addEventListener('mouseover', () => {
      div.textContent = time;
      console.log(time);
      body.appendChild(div);
    });
  });
});
