/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  //=include ./lib/MyClass.coffee
  var collapse;

  collapse = function(e) {
    var $this, href;
    e.preventDefault();
    $this = $(this);
    href = $this.attr('href');
    if (href != null) {
      $(href).slideToggle();
    }
    return false;
  };

  $('.js-collapse').on('click', collapse);

  $('.js-owl').owlCarousel({
    // slideBy: 'page'
    // loop: on
    dots: false,
    nav: false,
    navElement: 'div',
    rewind: false,
    navText: ['<i class="i-arr-l"></i>', '<i class="i-arr-r"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: true
      },
      992: {
        items: 3,
        nav: true
      },
      1450: {
        items: 4,
        nav: true
      }
    }
  });

  // 1500:
  $('.js-bxslider').bxSlider({
    pager: false,
    touchEnabled: false,
    slideMargin: 100,
    nextText: '',
    prevText: '',
    nextSelector: '.js-bxslider-btn',
    prevSelector: '.js-bxslider-btn'
  });

  // TO DO
  $('.js-popup').on('click', function(e) {
    e.preventDefault();
    return false;
  });

}).call(this);
