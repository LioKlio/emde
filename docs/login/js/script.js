/* ===== Scroll TO id  ===== */
$('a[data-href^="#"]').on('click',function(e) {
  e.preventDefault();
  var id = $(this).data("href")

  $('html,body').animate({
      scrollTop: $(id).offset().top
  }, 1000);
  return false;
});

/*----------------------------------------------------*/
$(window).scroll(function(){
  var win_scroll = $(window).scrollTop();
  var win_H = $(window).outerHeight();


    if(win_scroll >= $('#header').position().top) $('#header').addClass('_fixed');
    if(win_scroll < win_H) $('#header').removeClass('_fixed');
    // if((win_scroll - win_H) > 0) $('#header').addClass('show-nav')
    //   else $('#header').removeClass('show-nav');

});

/*----------------------------------------------------*/
$(document).ready(function(){
"use strict";

  $('.mobile-menu-trigger').click(function(){
    $('body').toggleClass('show_nav')
    $(this).toggleClass('active')
  })
  $('.form-box_item').click(function(){
    $('.opened').removeClass('opened').find('.material-icons')
    $(this).addClass('opened').find('.material-icons')
  })

});

1;
