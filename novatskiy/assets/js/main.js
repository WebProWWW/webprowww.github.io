
/*
 * author: Timur Valiyev
 * email: v.timur8484@gmail.com
 */

(function() {
  var instanceMailer;

  $('.js-scroll').bind('click', function(e) {
    var id, offsetTop;
    e.preventDefault();
    id = $(this).attr('href');
    if (id === '#') {
      offsetTop = 0;
    } else {
      offsetTop = $(id).offset().top;
    }
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: offsetTop
    });
    return false;
  });

  $('[mask]').each(function(i, input) {
    var $input;
    $input = $(input);
    return $input.mask($input.attr('mask'));
  });

  instanceMailer = $('.js-mailer').mailer({
    action: '/php/send.php',
    sendingStr: $('#js-sending').html(),
    success: function($form, data) {
      $.fancybox.open({
        src: '#js-form-success'
      });
      $form.trigger('reset');
      return console.log(data);
    },
    error: function($form) {
      return $.fancybox.open({
        src: '#js-form-error'
      });
    }
  });

  instanceMailer.inputError = function($input) {
    $input.addClass('error');
    $input.one('focusin', function(e) {
      return $(this).removeClass('error');
    });
    return true;
  };

  $('.js-prevent').on('click', function(e) {
    e.preventDefault();
    return false;
  });

}).call(this);
