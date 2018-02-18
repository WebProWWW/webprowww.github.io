/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  var $headerBlock, initBackgroundSlider;

  initBackgroundSlider = function($block, imagesStr) {
    var image, imagesArr, slidesArr;
    imagesArr = imagesStr.replace(/\s/g, "").split(',');
    slidesArr = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = imagesArr.length; j < len; j++) {
        image = imagesArr[j];
        results.push({
          src: image
        });
      }
      return results;
    })();
    return $block.vegas({
      overlay: 'img/slide-overlay.png',
      timer: false,
      color: '#000000',
      transition: 'zoomOut',
      delay: 5000,
      slides: slidesArr
    });
  };

  $('.js-bgslider').each(function(i, block) {
    var $block, slidesAttr;
    $block = $(block);
    slidesAttr = $block.attr('slides');
    if (slidesAttr != null) {
      return initBackgroundSlider($block, String(slidesAttr));
    }
  });

  $('.js-navtoggle').on('click', function(e) {
    var menuId;
    e.preventDefault();
    menuId = $(this).attr('href');
    $(menuId).toggleClass('open');
    return false;
  });

  $headerBlock = $('.js-header');

  $(window).on('scroll', function(e) {
    var offset, scrollTopNum;
    offset = 15;
    scrollTopNum = $(this).scrollTop();
    if (scrollTopNum > offset) {
      $headerBlock.addClass('onscroll');
    }
    if (scrollTopNum < offset) {
      return $headerBlock.removeClass('onscroll');
    }
  });

  $('[href="#"]').on('click', function(e) {
    e.preventDefault();
    return false;
  });

}).call(this);
