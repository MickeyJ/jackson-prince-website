
var plax_img_1 = document.getElementById('landing-banner-1');
var plax_img_2 = document.getElementById('landing-banner-2');

plax_img_1.style.opacity = 1;
plax_img_2.style.opacity = 0;

var lastScroll = 0;

function parallax(){

  var sTop = window.pageYOffset || document.documentElement.scrollTop;
  if (sTop > lastScroll){
    // Scroll Down Code
  } else {
    // Scroll Up Code
  }
  lastScroll = sTop;


  plax_img_1.style.top = (window.pageYOffset / 3.5) - 200  +'px';
  plax_img_2.style.top = (window.pageYOffset / 2.5) - 1100 +'px';

  plax_img_2.style.opacity = (window.pageYOffset / 2) / 1000;

}

window.addEventListener("scroll", parallax, false);

