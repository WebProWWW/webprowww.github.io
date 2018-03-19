/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  var $collapseNav, $headerBlock, initBackgroundSlider;

  initBackgroundSlider = function($block, slides) {
    return $block.vegas({
      // overlay: 'img/slide-overlay.png'
      timer: false,
      color: '#000000',
      transition: 'zoomOut',
      delay: 5000,
      slides: slides
    });
  };

  $('.js-bgslider').each(function(i, block) {
    var $block, image, slides, slidesArr, slidesStr;
    $block = $(block);
    slidesStr = $block.attr('slides');
    if (slidesStr != null) {
      slidesArr = slidesStr.replace(/\s/g, "").split(',');
      slides = (function() {
        var j, len, results;
        results = [];
        for (j = 0, len = slidesArr.length; j < len; j++) {
          image = slidesArr[j];
          results.push({
            src: image
          });
        }
        return results;
      })();
      return initBackgroundSlider($block, slides);
    }
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

  window.vegasInit = function(selecrot, imagesArr) {
    var image, slides;
    slides = (function() {
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
    return initBackgroundSlider($(selecrot), slides);
  };

  $collapseNav = $('#nav-menu');

  $collapseNav.on('show.bs.collapse', function(e) {
    return $(this).parents('.js-header').addClass('onnavshow');
  });

  $collapseNav.on('hidden.bs.collapse', function(e) {
    return $(this).parents('.js-header').removeClass('onnavshow');
  });

}).call(this);
