var plax_img_1 = document.getElementById('landing-banner-1');
var plax_img_2 = document.getElementById('landing-banner-2');

function parallax(){
  plax_img_1.style.top = (window.pageYOffset / 1.5) + 100 +'px';
  plax_img_2.style.top = (window.pageYOffset / 1.5) - 1000 +'px';
}

window.addEventListener("scroll", parallax, false);