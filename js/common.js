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
    if ($(window).scrollTop() > 200) {
      $header.addClass('fixed');
      $header.removeClass('bg-dark');
    } else {
      $header.removeClass('fixed');
      $header.addClass('bg-dark');
    }
  });
});
//Slick
$(function () {
  $('.slider').slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 6000,
    pauseOnHover: false,
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
  });
});
//フェードイン
window.onload = function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass('effect-scroll');
      }
    });
  }
};

window.onload = function () {
  //フェードイン トップのロゴ
  hero_fadein();

  function hero_fadein() {
    $('.hero_img p').addClass('hero_fadein');
  };
};
