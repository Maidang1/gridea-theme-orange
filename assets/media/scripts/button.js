const button = document.getElementById('button');
let currentState = 'hide';
const leftContent = document.querySelector('.left-content');
const rigtContent = document.querySelector('.main-content');
const main = document.querySelector('.main');
button.addEventListener('click', () => {
  if (currentState === 'hide') {
    leftContent.style.left = '0px';
    main.style.overflow="hidden";
    rigtContent.style.marginLeft="300px";
    // console.log(rigtContent);
    // rigtContent.style.position = 'absoulte';
    // rigtContent.style.left = '300px';
    currentState = 'show';
  } else {
    leftContent.style.left = '-300px';
    main.style.overflow="hidden";
    rigtContent.style.marginLeft="0px";
    currentState = 'hide';
  }
});