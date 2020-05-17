var navMain = document.querySelector('.main-nav');
var hamburger = document.querySelector('.hamburger');
var closeLink = document.querySelector('.main-nav__link');

navMain.classList.remove('main-nav--nojs');

hamburger.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

closeLink.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});


