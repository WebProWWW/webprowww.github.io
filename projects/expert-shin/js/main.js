/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

//#=include ./lib/MyClass.coffee
var $body, $calcForm, $htmlBody, $onscrl, $win, GalSlider, MediaQuery, calcFormAnimating, calculate, delay, mq, scrollTo, toggleCollapse;

MediaQuery = (function() {
  class MediaQuery {
    constructor($win) {
      if (typeof Modernizr !== "undefined" && Modernizr !== null) {
        if (Modernizr.mq('only all')) {
          if (typeof $ !== "undefined" && $ !== null) {
            if ($win == null) {
              $win = $(window);
            }
            this.init($win);
          } else {
            console.log('Подключите библиотеку jQuery. Библиотеку можно скачать по ссылке http://jquery.com');
          }
        } else {
          console.log('Браузер не поддерживает @media запросы');
        }
      } else {
        console.log('Не найден плагин "modernizr.js". Плагин можно скачать по ссылке https://modernizr.com/download/?-mq');
      }
    }

    init($win) {
      this.detectMedia();
      $win.on('resize', (e) => {
        return this.detectMedia();
      });
      return true;
    }

    detectMedia() {
      this.isSM = Modernizr.mq(MediaQuery.SM);
      this.isMD = Modernizr.mq(MediaQuery.MD);
      this.isLG = Modernizr.mq(MediaQuery.LG);
      this.isXL = Modernizr.mq(MediaQuery.XL);
      return true;
    }

  };

  MediaQuery.SM = '(min-width: 576px)';

  MediaQuery.MD = '(min-width: 768px)';

  MediaQuery.LG = '(min-width: 992px)';

  MediaQuery.XL = '(min-width: 1200px)';

  MediaQuery.prototype.isSM = false;

  MediaQuery.prototype.isMD = false;

  MediaQuery.prototype.isLG = false;

  MediaQuery.prototype.isXL = false;

  return MediaQuery;

}).call(this);

$body = $('body');

$htmlBody = $('html, body');

$win = $(window);

$onscrl = $('.js-onscrl');

$calcForm = $('.js-calc-form');

mq = new MediaQuery($win);

GalSlider = (function() {
  // mq.isSM, mq.isMD, mq.isLG, mq.isXL
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

delay = function(ms, callBack) {
  return setTimeout(callBack, ms);
};

toggleCollapse = function(blockId, atime = 400, callBack = function() {}) {
  $(blockId).slideToggle(atime);
  delay(atime, function() {
    return callBack();
  });
  return true;
};

scrollTo = function(blockId, atime = 400, callBack = function() {}) {
  var $block, offsetTop;
  if (blockId == null) {
    return true;
  }
  if (blockId === '#') {
    offsetTop = 0;
  } else {
    $block = $(blockId);
    if ($block.length) {
      offsetTop = $block.offset().top - 53;
    }
  }
  $htmlBody.animate({
    scrollTop: offsetTop
  }, atime);
  delay(atime, function() {
    return callBack();
  });
  // window.location = blockId
  return true;
};

calculate = function() {};

$body.on('click', '.js-collapse', function(e) {
  var id;
  e.preventDefault();
  id = $(this).attr('href');
  toggleCollapse(id);
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

calcFormAnimating = false;

$body.on('click', '.js-calc-btn', function(e) {
  var $notSelected, $selected, $this, id;
  e.preventDefault();
  $this = $(this);
  id = $this.attr('href');
  $selected = $(id);
  if ($selected.is(':hidden') && !calcFormAnimating) {
    calcFormAnimating = true;
    $notSelected = $calcForm.find('.collapse').not(id);
    if (!mq.isLG) {
      $notSelected.slideUp(0);
      scrollTo('#js-cforms-mark', 600);
      delay(600, function() {
        $selected.slideDown(300);
        return delay(300, function() {
          return calcFormAnimating = false;
        });
      });
    } else {
      $notSelected.slideUp(300);
      delay(300, function() {
        $selected.slideDown(300);
        return delay(300, function() {
          return calcFormAnimating = false;
        });
      });
    }
    $('.js-calc-btn').removeClass('active');
    $this.addClass('active');
  }
  return false;
});

$body.on('change', '.js-calc-input', function(e) {});

// $this = $ this
// # console.log $this.attr 'type'
// # $(this).is(':checked')
// console.log $this.val()
// calculate()
$body.on('click', '.js-scrollto', function(e) {
  var thisHash, thisHref, thisHrefArr, thisPath;
  e.preventDefault();
  thisHref = $(this).attr('href');
  if (thisHref === '#') {
    scrollTo('#');
    return false;
  }
  thisHrefArr = thisHref.split('#');
  if (thisHrefArr.length < 2) {
    return false;
  }
  thisPath = thisHrefArr[0];
  thisHash = thisHrefArr[1];
  if (thisPath && thisHash && !location.href.includes(`${thisPath}`)) {
    localStorage.setItem('scrollTo', `#${thisHash}`);
    location.href = `${thisPath}`;
    return true;
  }
  if (thisHash) {
    scrollTo(`#${thisHash}`);
    return false;
  }
  return false;
});

scrollTo(localStorage.getItem('scrollTo'), 600, function() {
  return localStorage.removeItem('scrollTo');
});
