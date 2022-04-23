"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  var mobile = document.querySelector('#mobile-swipe');
  var desktop = document.querySelector('#desktop-swipe');
  fetch('scripts/reviews-parser.php').then(function (res) {
    return res.text();
  }).then(function (data) {
    var reviews_html = new DOMParser().parseFromString(data, 'text/html');
    var reviews_container = reviews_html.getElementById('wprev-slider-1');
    console.log(reviews_container);
    var all_reviews = reviews_container.getElementsByTagName('li');
    var slides_count = Math.round(all_reviews.length / 4);
    var desktop_slides_array = [];
    desktop.innerHTML = '';

    for (var _i = 0; _i < slides_count; _i++) {
      var slide = document.createElement('div');
      slide.classList = 'feedback__slider grid_row swiper-slide';
      desktop.appendChild(slide);
      desktop_slides_array.push(slide);
    }

    console.log(desktop_slides_array);
    mobile.innerHTML = '';

    for (var _i2 = 0; _i2 < all_reviews.length; _i2++) {
      var text = all_reviews[_i2].querySelector('.wppro-reviewtext_T3').innerText.split('... >').join(' ');

      var avatar = all_reviews[_i2].querySelector('.wpproslider_t3_avatar_div img').src;

      var author = all_reviews[_i2].querySelector('#wprev_showname').innerText;

      var date = all_reviews[_i2].querySelector('.wprev_showdate_T3').innerText.split('- ')[1];

      var link = all_reviews[_i2].querySelector('.wprevpro_t3_site_logo_a').href;

      var platform_logo = void 0;

      var logo_string = all_reviews[_i2].querySelector('img.wprevpro_t3_site_logo').alt;

      if (logo_string.toLowerCase() === 'google logo') {
        platform_logo = 'images/icons/google-G.svg"';
      } else if (logo_string.toLowerCase() === 'facebook logo') {
        platform_logo = 'images/icons/Facebook.svg';
      }

      var cut_text = text.slice(0, 300);

      if (cut_text.length < text.length) {
        cut_text += '...';
      }

      mobile.innerHTML += "\n\t\t\t\t<div class=\"feedback__slider-item box swiper-slide\">\n\t\t\t\t\t<div class=\"feedback__slider-item__info\">\n\t\t\t\t\t\t<div class=\"feedback__info-user\">\n\t\t\t\t\t\t\t<div class=\"feedback__info-user__avatar\">\n\t\t\t\t\t\t\t\t<img src=\"".concat(avatar, "\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"feedback__info-user__inner\">\n\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__name\">").concat(author, "</div>\n\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__date\">").concat(date, "</div>\n\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__rating\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"feedback__info-social\">\n\t\t\t\t\t\t\t<img src=\"").concat(platform_logo, "\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t<div class=\"feedback__slider-item__text\">\n\t\t\t\t\t\t").concat(cut_text, "\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"feedback__slider-item__btn\" onclick=\"window.open('").concat(link, "');\">\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E</button>\n\t\t\t\t</div>\n\t\t\t\t");
    }

    var i = 0;

    _toConsumableArray(all_reviews).forEach(function (review, index) {
      var text = review.querySelector('.wppro-reviewtext_T3').innerText.split('... >').join(' ');
      var avatar = review.querySelector('.wpproslider_t3_avatar_div img').src;
      var author = review.querySelector('#wprev_showname').innerText;
      var date = review.querySelector('.wprev_showdate_T3').innerText.split('- ')[1];
      var link = review.querySelector('.wprevpro_t3_site_logo_a').href;
      var platform_logo;
      var logo_string = review.querySelector('img.wprevpro_t3_site_logo').alt;

      if (logo_string.toLowerCase() === 'google logo') {
        platform_logo = 'images/icons/google-G.svg"';
      } else if (logo_string.toLowerCase() === 'facebook logo') {
        platform_logo = 'images/icons/Facebook.svg';
      }

      var cut_text = text.slice(0, 300);

      if (cut_text.length < text.length) {
        cut_text += '...';
      }

      desktop_slides_array[i].innerHTML += "\n\t\t\t\t\t<div class=\"feedback__slider-item box\">\n\t\t\t\t\t\t<div class=\"feedback__slider-item__info\">\n\t\t\t\t\t\t\t<div class=\"feedback__info-user\">\n\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__avatar\">\n\t\t\t\t\t\t\t\t\t<img src=\"".concat(avatar, "\" alt=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__inner\">\n\t\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__name\">").concat(author, "</div>\n\t\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__date\">").concat(date, "</div>\n\t\t\t\t\t\t\t\t\t<div class=\"feedback__info-user__rating\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/icons/star.svg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/icons/star.svg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/icons/star.svg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/icons/star.svg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/icons/star.svg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"feedback__info-social\">\n\t\t\t\t\t\t\t\t<img src=\"").concat(platform_logo, "\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"feedback__slider-item__text\">\n\t\t\t\t\t\t\t").concat(cut_text, "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class=\"feedback__slider-item__btn\" onclick=\"window.open('").concat(link, "');\">\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E</button>\n\t\t\t\t\t</div>\n\t\t\t\t");

      if ((index + 1) % 4 === 0) {
        i++;
      }
    });
  });
  var swiper_desktop = new Swiper('.desk_reviews', {
    loop: true,
    spaceBetween: 7,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.desk_rev_pag',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      }
    } // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });
  var swiper_mobile = new Swiper('.mob_reviews', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 7,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  });
});