const content = document.querySelectorAll('.click');
content.forEach((t) => {
  t.addEventListener('click', () => {
    console.log('a');
  });
});
