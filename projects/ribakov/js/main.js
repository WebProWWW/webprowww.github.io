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
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1450: {
        items: 4
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
