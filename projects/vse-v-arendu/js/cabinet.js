"use strict";

(function () {
  $('*[data-lside]').on('click', function (e) {
    var $this, slideId;
    $this = $(e.currentTarget);
    $this.toggleClass('active');
    slideId = $this.data('lside');
    return $(slideId).stop().slideToggle();
  });
}).call(void 0);