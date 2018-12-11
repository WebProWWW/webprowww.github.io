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

}).call(this);
