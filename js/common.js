//ハンバーガーメニュー
$(document).ready(function () {
  $('.global-nav-trigger').click(function () {
    $('.global-nav').toggleClass("global-nav-open");
    $('.menu-overlay').toggleClass("open");
    $('header').toggleClass("shownav");
  });
});
//PC　ナビゲーション
$(function () {
  var $header = $('header');
  // Nav Fixed
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });
});
