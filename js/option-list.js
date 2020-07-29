'use strict';

(function () {
  let optionList = document.querySelector('.site-nav__option-list');
  let listItem = document.querySelector('.site-nav__item');
  let options = document.querySelectorAll('.site-nav__option-link');

  optionList.classList.add('visually-hidden');

  options.forEach(function (el) {
    el.onfocus = function () {
      optionList.classList.remove('visually-hidden');
    };
    el.onblur = function () {
      optionList.classList.add('visually-hidden');
    };
  });

  listItem.onmouseenter = function () {
    optionList.classList.remove('visually-hidden');
  };
  listItem.onmouseleave = function () {
    optionList.classList.add('visually-hidden');
  };
})();
