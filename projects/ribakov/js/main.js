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
