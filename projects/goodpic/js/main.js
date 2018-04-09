/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  var $collapseNav, $headerBlock, initBackgroundSlider, vegasOnWalk, windowScrollTo;

  $('.js-prevent').on('click', function(e) {
    return e.preventDefault();
  });

  vegasOnWalk = function(index, $block) {
    var $content;
    $content = $block.find('.js-slide-content');
    $content.addClass('d-none');
    return $content.eq(index).removeClass('d-none');
  };

  initBackgroundSlider = function($block, slides) {
    return $block.vegas({
      // overlay: 'img/slide-overlay.png'
      timer: false,
      color: '#000000',
      transition: 'zoomOut',
      delay: 5000,
      slides: slides,
      walk: function(index, slideSettings) {
        return vegasOnWalk(index, $block);
      }
    });
  };

  // console.log "Slide index #{index} image #{slideSettings.src}"
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
    offset = 20;
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
    $('body').addClass('modal-open');
    return $(this).parents('.js-header').addClass('onnavshow');
  });

  $collapseNav.on('hidden.bs.collapse', function(e) {
    $('body').removeClass('modal-open');
    return $(this).parents('.js-header').removeClass('onnavshow');
  });

  windowScrollTo = function(offsetTop) {
    return $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: offsetTop
    });
  };

  $('.js-scroll').on('click', function(e) {
    var dataStr;
    e.preventDefault();
    dataStr = String($(this).attr('data'));
    if ((dataStr != null) && dataStr === 'top') {
      windowScrollTo(0);
    }
    if ((dataStr != null) && dataStr === 'bot') {
      windowScrollTo($('#js-scroll-bot-point').offset().top);
    }
    return false;
  });

  $('[data-fancybox]').fancybox({
    infobar: false,
    toolbar: true,
    buttons: ['share', 'close'],
    // 'zoom',
    // 'slideShow',
    // 'fullScreen',
    // 'download',
    // 'thumbs',
    idleTime: false,
    btnTpl: {
      arrowLeft: "<button data-fancybox-prev class=\"fancybox-button fancybox-button--arrow_left\">\n  <img class=\"fancybox-carr-icon\" width=\"26\" height=\"44\" src=\"img/arr-tl.svg\">\n</button>",
      arrowRight: "<button data-fancybox-next class=\"fancybox-button fancybox-button--arrow_right\">\n  <img class=\"fancybox-carr-icon\" width=\"26\" height=\"44\" src=\"img/arr-tr.svg\">\n</button>"
    }
  });

  // $('.js-scroll').bind 'click', (e) ->
//   e.preventDefault()
//   id = $(this).attr 'href'
//   if id is '#'
//     offsetTop = 0
//   else
//     offsetTop = $(id).offset().top
//   $('html:not(:animated),body:not(:animated)').animate scrollTop: offsetTop
//   off

}).call(this);
