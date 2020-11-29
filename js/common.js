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

// window.onload = function () {
//   //フェードイン トップのロゴ
//   hero_fadein();

//   function hero_fadein() {
//     $('.hero_img p').addClass('hero_fadein');
//   };
// };



$(function () {

  var delaySpeed = 2000; // 1秒ずつ遅らせる
  var fadeSpeed = 1000; // 1秒かける

  $(window).on('load', function () {

    $('.hero_img p').each(function (i) {
      $(this).delay(i * (delaySpeed)).animate({
        'opacity': '1'
      }, fadeSpeed).addClass('hero_fadein');
    });

  });

});



//ページトップボタン
$(function () {
  var topBtn = $('#page_top');
  topBtn.hide();
  // スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

/**********  施工事例 詳細情報ページ **********/
// $(function () {
//   var slide_main = $(".slide").slick({
//     asNavFor: ".slide-navigation",
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//   });
//   var slide_sub = $(".slide-navigation").slick({
//     asNavFor: ".slide",
//     centerMode: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     speed: 400,
//     focusOnSelect: true,
//   });
// var open_window_Width = $(window).width();
// $(window).resize(function () {
//   var width = $(window).width();
//   if (open_window_Width != width) {
//     slide_main.slick("setPosition");
//     slide_sub.slick("setPosition");
//   }
// });
// });


$(document).ready(function () {
  $('.thumbnail').slick({
    infinite: true, //スライドのループ有効化
    arrows: false, //矢印非表示
    fade: true, //フェードの有効化
    draggable: false //ドラッグ操作の無効化
  });
  $('.thumbnail-thumb').slick({
    infinite: true, //スライドのループ有効化
    slidesToShow: 5, //表示するスライドの数
    focusOnSelect: true, //フォーカスの有効化
    asNavFor: '.thumbnail', //thumbnailクラスのナビゲーション
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 400,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    // mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
});
