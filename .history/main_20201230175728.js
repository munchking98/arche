const content = document.querySelectorAll('.click');
content.forEach((t) => {
  t.addEventListener('click', () => {
    const time = new Date();
    console.log(time);
  });
});
