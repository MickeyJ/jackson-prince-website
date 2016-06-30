
var contactLink = document.getElementById('contact-link');
var backToTopLink = document.getElementById('back-to-top');

var scrolling;
var scrollRate = 10;
var scrollByPx = 30;

function scroller(el, direction, conditional){
  return scrolling = setInterval(function(){
    if(direction === 'bottom') el.scrollTop += scrollByPx;
    if(direction === 'top') el.scrollTop -= scrollByPx;
    if(el.scrollTop === conditional) clearInterval(scrolling)
  }, scrollRate);
}

function scroll_to(direction, el){
  var top = 0;
  var bottom = el.scrollHeight - el.clientHeight;
  if(direction === 'bottom') scroller(el, direction, bottom);
  if(direction === 'top') scroller(el, direction, top);
}

contactLink.addEventListener('mousedown', function(){
  scroll_to('bottom', document.body)
});

backToTopLink.addEventListener('mousedown', function(){
  scroll_to('top', document.body)
});