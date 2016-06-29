const contactLink = document.getElementById('contact-link');
const backToTopLink = document.getElementById('back-to-top');

let scrolling;
const scrollRate = 10;
const scrollByPx = 30;

function scroller(el, direction, conditional){
  return scrolling = setInterval(function(){
    if(direction === 'bottom') el.scrollTop += scrollByPx;
    if(direction === 'top') el.scrollTop -= scrollByPx;
    if(el.scrollTop === conditional) clearInterval(scrolling)
  }, scrollRate);
}

function scroll_to(direction, el){
  const bottomPx = el.scrollHeight - el.clientHeight;
  const topPx = 0;
  if(direction === 'bottom') scroller(el, direction, bottomPx);
  if(direction === 'top') scroller(el, direction, topPx);
}


contactLink.addEventListener('mousedown', function(){
  scroll_to('bottom', document.body)
});

backToTopLink.addEventListener('mousedown', function(){
  scroll_to('top', document.body)
});