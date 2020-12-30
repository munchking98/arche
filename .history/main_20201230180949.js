const content = document.querySelectorAll('.click');
content.forEach((t) => {
  t.addEventListener('click', () => {
    const time = new Date();
    const div = document.createElement('div');
    t.classList.toggle('red');
    t.addEventListener('mouseover', () => {
      console.log(time);
    });
  });
});
