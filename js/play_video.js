"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var paly = document.querySelector('.play__btn');
  paly.addEventListener('click', function () {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.classList.add('video_overlay');
    overlay.style.display = 'block';
    overlay.addEventListener('click', closeVideo);
    document.body.style.overflowY = 'hidden';
    overlay.innerHTML = "\n\t\t\t\t<div style=\"margin: 30px 5% 40px auto; width: 50px; height: 50px\" class=\"popup_close\" onclick=\"closeVideo()\"><img style=\"transform:rotate(45deg); height:100%; width:100%\" src=\"images/icons/grey_plus.svg\" alt=\"\" /></div>\n                <iframe src=\"https://www.youtube.com/embed/".concat(this.dataset.src, "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>   \n        ");
    document.body.appendChild(overlay);
  });

  window.closeVideo = function () {
    document.querySelector('.video_overlay').remove();
    document.body.style.overflowY = 'scroll';
  };
});