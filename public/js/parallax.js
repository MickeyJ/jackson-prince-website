var plax_img_1 = document.getElementById('landing-banner-1');
var plax_img_2 = document.getElementById('landing-banner-2');

const viewHeight = document.body.clientHeight;

plax_img_2.style.opacity = 0;

function parallax(){

  plax_img_1.style.top = (window.pageYOffset / 1.8) - 200  +'px';
  plax_img_2.style.top = (window.pageYOffset / 1.8) - 1200 +'px';

  plax_img_2.style.opacity = (window.pageYOffset / 1.4) / 1000;

}

window.addEventListener("scroll", parallax, false);

