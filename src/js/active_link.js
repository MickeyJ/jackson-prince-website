import $ from 'jquery'

$(function() {

  $('#nav')
    .find('a[href="'+window.location.pathname+'"]')
    .addClass('active-link');

});