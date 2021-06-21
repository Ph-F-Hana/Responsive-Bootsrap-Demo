$(function () {
  'use strict';
  let winH = $(window).height(),
      navH = $('nav').innerHeight();
  $('.slider, .carousel-inner, .carousel-item').height(winH - navH);
});