/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

//=include ./lib/MyClass.coffee
var $headerBlock, $scrollToTop, headerOnScroll, scrollToTopBtnOnScroll;

$('.js-collapse').on('click', function(e) {
  var $collapse;
  e.preventDefault();
  $collapse = $($(this).attr('href'));
  $collapse.toggle(260);
  return false;
});

$headerBlock = $('.js-header');

headerOnScroll = function(scrollTopNum) {
  var offset;
  offset = 10;
  if (scrollTopNum > offset) {
    $headerBlock.addClass('onscroll');
  }
  if (scrollTopNum < offset) {
    return $headerBlock.removeClass('onscroll');
  }
};

$scrollToTop = $('.totop');

scrollToTopBtnOnScroll = function(scrollTopNum) {
  var offset;
  offset = 500;
  if (scrollTopNum > offset) {
    $scrollToTop.addClass('show');
  }
  if (scrollTopNum < offset) {
    return $scrollToTop.removeClass('show');
  }
};

$(window).on('scroll', function(e) {
  var scrollTopNum;
  scrollTopNum = $(this).scrollTop();
  headerOnScroll(scrollTopNum);
  return scrollToTopBtnOnScroll(scrollTopNum);
});

$('.js-mask').each(function(i, input) {
  return $(input).mask('+7-999-999-99-99');
});

$('.js-scrollto').on('click', function(e) {
  var id, offsetTop;
  e.preventDefault();
  id = $(this).attr('href');
  if (id === '#') {
    offsetTop = 0;
  } else {
    offsetTop = $(id).offset().top;
  }
  $('html:not(:animated),body:not(:animated)').animate({
    scrollTop: offsetTop
  });
  return false;
});

// $.fancybox.open
//   src  : '#callback'
//   type : 'inline'
