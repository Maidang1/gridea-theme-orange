const button = document.getElementById('button');
let currentState = 'hide';
const leftContent = document.querySelector('.left-content');
const rigtContent = document.querySelector('.main-content');
button.addEventListener('click', () => {
  if (currentState === 'hide') {
    leftContent.style.left = '0px';
    console.log(rigtContent);
    // rigtContent.style.position = 'absoulte';
    // rigtContent.style.left = '300px';
    currentState = 'show';
  } else {
    leftContent.style.left = '-300px';
    // rigtContent.style.paddingLeft = '10px';
    currentState = 'hide';
  }
});