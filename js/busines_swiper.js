"use strict";

var swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 3.29,
  spaceBetween: 40,
  pagination: {
    el: '.after_open_pag',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-next_btn',
    prevEl: '.swiper-prev_btn'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 1.2
    },
    500: {
      slidesPerView: 1.5
    },
    700: {
      slidesPerView: 1.8
    },
    1023: {
      slidesPerView: 3
    },
    1440: {
      slidesPerView: 3.29,
      spaceBetween: 40
    }
  }
});