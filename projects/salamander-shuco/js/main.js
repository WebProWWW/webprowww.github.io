/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  //#=include lib/SendMail.coffee
  var $headerBlock, addClass, initBackgroundSlider, removeClass;

  $headerBlock = $('.js-header');

  addClass = function($obj, classStr) {
    return $obj.addClass(classStr);
  };

  removeClass = function($obj, classStr) {
    return $obj.removeClass(classStr);
  };

  $(window).on('scroll', function(e) {
    var offset, scrollTopNum;
    offset = 15;
    scrollTopNum = $(this).scrollTop();
    if (scrollTopNum > offset) {
      addClass($headerBlock, 'onscroll');
    }
    if (scrollTopNum < offset) {
      return removeClass($headerBlock, 'onscroll');
    }
  });

  $('.js-mailer').on('submit', function(e) {
    return e.preventDefault();
  });

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
      overlay: 'assets/vegas/overlays/05.png',
      timer: false,
      color: '#000000',
      transition: 'zoomOut',
      delay: 5000,
      slides: slidesArr
    });
  };

  $('.js-vegas').each(function(i, block) {
    var $block, slidesAttr;
    $block = $(block);
    slidesAttr = $block.attr('data-slides');
    if (slidesAttr != null) {
      return initBackgroundSlider($block, String(slidesAttr));
    }
  });

  $('.js-mask-phone').each(function(i, input) {
    var $input;
    $input = $(input);
    return $input.mask('+7-999-999-99-99');
  });

}).call(this);
