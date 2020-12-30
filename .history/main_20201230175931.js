const content = document.querySelectorAll('.click');
content.forEach((t) => {
  t.addEventListener('click', () => {
    const time = new Date();

    t.toggleClass('red');
  });
});
