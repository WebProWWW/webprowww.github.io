/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

//#=include ./lib/MyClass.coffee
var $body, $onscrl, $win, GalSlider, toggleCollapse;

$body = $('body');

$win = $(window);

$onscrl = $('.js-onscrl');

GalSlider = (function() {
  class GalSlider {
    constructor($gslider) {
      var $slides, $thumbs;
      $slides = $gslider.find('.js-gslider-slides');
      $thumbs = $gslider.find('.js-gslider-thumb');
      this.bxSlider = $slides.bxSlider(GalSlider.bxOptions);
      $thumbs.on('click', (e) => {
        var $thumb, index;
        $thumb = $(e.currentTarget);
        index = $thumb.attr('data-index');
        this.goToSlide(index);
        return false;
      });
    }

    goToSlide(index) {
      var base;
      index = Number(index);
      if (this.bxSlider != null) {
        if (typeof (base = this.bxSlider).goToSlide === "function") {
          base.goToSlide(index);
        }
      }
      return true;
    }

  };

  GalSlider.prototype.bxSlider = null;

  GalSlider.bxOptions = {
    wrapperClass: 'bx-wrapper gslide-wrapper',
    controls: false,
    pager: false,
    slideMargin: 15,
    infiniteLoop: false
  };

  return GalSlider;

}).call(this);

toggleCollapse = function($block) {
  return $block.slideToggle();
};

$body.on('click', '.js-collapse', function(e) {
  e.preventDefault();
  toggleCollapse($($(this).attr('href')));
  return false;
});

$('.js-slider').each(function(i, slider) {
  var $items, $slider;
  $slider = $(slider);
  $items = $slider.find('.slide');
  $items.each(function(ii, item) {
    var $img, $item, $slideDesc;
    $item = $(item);
    $img = $item.find('.slide-img');
    $slideDesc = $item.find('.slide-desc');
    return $slideDesc.css('background-image', `url('${$img.attr('src')}')`);
  });
  return $slider.bxSlider({
    adaptiveHeight: true,
    controls: false,
    wrapperClass: 'bx-wrapper slide-wrapper',
    auto: true,
    autoHover: true
  });
});

$('.js-gslider').each(function(i, gslider) {
  return new GalSlider($(gslider));
});

$('.js-mask').each(function(i, input) {
  var $input;
  $input = $(input);
  return $input.inputmask($input.attr('mask'), {
    clearIncomplete: true,
    showMaskOnHover: false
  });
});

$win.on('scroll', function(e) {
  var offset, scrollTopNum;
  offset = 300;
  scrollTopNum = $(this).scrollTop();
  if (scrollTopNum > offset) {
    $onscrl.addClass('hide');
  }
  if (scrollTopNum < offset) {
    return $onscrl.removeClass('hide');
  }
});

$('.js-fancybox').fancybox();

$body.on('click', '.js-scrollto', function(e) {
  var id, offsetTop;
  e.preventDefault();
  id = $(this).attr('href');
  if (id === '#') {
    offsetTop = 0;
  } else {
    offsetTop = $(id).offset().top - 50;
  }
  $('html:not(:animated),body:not(:animated)').animate({
    scrollTop: offsetTop
  });
  return false;
});
