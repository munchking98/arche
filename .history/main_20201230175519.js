const content = document.querySelectorAll('.click');
console.log(content);
content.map((t) => {
  t.addEventListener('click', () => {
    console.log('a');
  });
});
// content.addEventListener('click', () => {
//   console.log('a');
// });
