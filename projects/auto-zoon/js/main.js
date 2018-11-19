/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  //#=include ./lib/MyClass.coffee
  $.fn.getAttr = function(attr, defaultValue = false, Type = String) {
    var val;
    val = this.attr(attr);
    if (val != null) {
      return Type(val);
    }
    return defaultValue;
  };

  // $('.js-collapse-btn').on 'click', (e) ->
//    e.preventDefault()
//    $this = $ this
//    $iconDown = $this.children '.fa-angle-down'
//    $collapse = $ '.collapse'
//    $selected = $ $this.attr 'href'
//    group = $this.getAttr 'group'
//    $collapse.stop()
//    if group
//       $collapse.each (i, collapse) ->
//          $th = $ this
//          $th.slideUp() if group is $th.getAttr('group') and not $th.is($selected)
//    $selected.slideToggle()
//    # $selected.slideToggle () ->
//    #    if String($selected.css('display')) is 'block'
//    #       $iconDown.addClass 'fa-flip-vertical'
//    #    else
//    #       $iconDown.removeClass 'fa-flip-vertical'
//    off

// $('.js-city').on 'click', (e) ->
//    e.preventDefault()
//    cityName = String $(this).text()
//    $('.js-city-current').text cityName
//    off

}).call(this);
