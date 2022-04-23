"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var help = document.querySelector('.help');
  help.addEventListener('click', function (e) {
    var target = e.target.closest('div');

    if (target.classList.contains('help__item-title') && !target.classList.contains('rotate')) {
      target.parentElement.children[1].style.maxHeight = 200 + 'px';
      target.parentElement.children[1].style.padding = '20px 0 40px 0';
      target.classList.add('rotate');
    } else if (target.classList.contains('help__item-title') && target.classList.contains('rotate')) {
      target.parentElement.children[1].style.maxHeight = 0;
      target.parentElement.children[1].style.padding = '0';
      target.classList.remove('rotate');
    }
  });
});