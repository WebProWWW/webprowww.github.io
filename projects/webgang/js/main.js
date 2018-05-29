/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

var $, $headerBlock, $scrollToTop, headerOnScroll, jQueryMailer, popupHide, popupShow, scrollToTopBtnOnScroll;

$ = jQuery;

jQueryMailer = (function() {
  class jQueryMailer {
    constructor(selector, options) {
      this.onSubmit = this.onSubmit.bind(this);
      this.delay = this.delay.bind(this);
      $.extend(this.settings, options);
      $(selector).bind('submit', this.onSubmit);
    }

    onSubmit(e) {
      var $form;
      e.preventDefault();
      $form = $(e.target);
      if ((this.validate($form.find('[validate]'))) && !this.process) {
        this.send($form);
      }
      return false;
    }

    delay(sec, fun) {
      setTimeout(fun, sec * 1000);
      return true;
    }

    send($form) {
      this.progress($form);
      this.delay(3, () => {
        this.process = true;
        return $.ajax({
          method: this.settings.method,
          url: this.settings.action,
          data: $form.serialize(),
          dataType: this.settings.dataType
        }).done((data) => {
          return this.success($form, data);
        }).fail(() => {
          return this.error($form);
        }).always(() => {
          this.process = false;
          return this.always($form);
        });
      });
      return true;
    }

    success($form, data) {
      $form.trigger('reset');
      return this.settings.success($form, data);
    }

    error($form) {
      return this.settings.error($form);
    }

    always($form) {
      var $sending;
      $sending = $form.find('.js-form-progress');
      $sending.html(this.sendingCurrentHtml);
      return true;
    }

    progress($form) {
      var $sending;
      $sending = $form.find('.js-form-progress');
      this.sendingCurrentHtml = $sending.html();
      $sending.html(this.settings.sendingStr);
      return true;
    }

    inputError($input) {
      var $parent;
      $parent = $input.parent();
      $parent.addClass('has-error');
      $input.one('focusin', function(e) {
        return $(this).parent().removeClass('has-error');
      });
      return true;
    }

    validate($inputs) {
      var result;
      result = true;
      $inputs.each((i, input) => {
        var $input, inputRes, inputVal, validate;
        $input = $(input);
        validate = $input.attr('validate');
        inputVal = $input.val();
        inputRes = (function() {
          switch (validate) {
            case 'text':
              return inputVal.length > 2;
            case 'email':
              return this.emailRegex.test(inputVal);
            default:
              return true;
          }
        }).call(this);
        if (!inputRes) {
          result = inputRes;
          this.inputError($input);
        }
        return true;
      });
      return result;
    }

  };

  jQueryMailer.prototype.settings = {
    action: '/',
    method: 'POST',
    dataType: 'json',
    sendingStr: 'Sending...',
    success: function($form, data) {},
    error: function($form) {}
  };

  jQueryMailer.prototype.emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  jQueryMailer.prototype.process = false;

  jQueryMailer.prototype.sendingCurrentHtml = '';

  return jQueryMailer;

}).call(this);

$('.js-collapse').on('click', function(e) {
  var $collapse;
  e.preventDefault();
  $collapse = $($(this).attr('href'));
  $collapse.toggle(260);
  return false;
});

$headerBlock = $('.js-header');

headerOnScroll = function(scrollTopNum) {
  var offset;
  offset = 10;
  if (scrollTopNum > offset) {
    $headerBlock.addClass('onscroll');
  }
  if (scrollTopNum < offset) {
    return $headerBlock.removeClass('onscroll');
  }
};

$scrollToTop = $('.totop');

scrollToTopBtnOnScroll = function(scrollTopNum) {
  var offset;
  offset = 500;
  if (scrollTopNum > offset) {
    $scrollToTop.addClass('show');
  }
  if (scrollTopNum < offset) {
    return $scrollToTop.removeClass('show');
  }
};

$(window).on('scroll', function(e) {
  var scrollTopNum;
  scrollTopNum = $(this).scrollTop();
  headerOnScroll(scrollTopNum);
  return scrollToTopBtnOnScroll(scrollTopNum);
});

$('.js-mask').each(function(i, input) {
  return $(input).mask('+7-999-999-99-99');
});

$('.js-scrollto').on('click', function(e) {
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

popupShow = function(e) {
  var $popup, $this, css, position;
  $this = $(this);
  $popup = $this.next('.popup-content');
  position = $this.position();
  css = $.extend(false, position, {
    'margin-top': $popup.height() * -1 - 50
  });
  console.log(css);
  $popup.css(css);
  return $popup.addClass('show');
};

popupHide = function(e) {
  return $(this).next('.popup-content').removeClass('show');
};

$('.js-popbtn').hover(popupShow, popupHide);

new jQueryMailer('.js-form', {
  action: '../send.json',
  sendingStr: $('#js-ajax-img').html(),
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

// $.fancybox.open
//   src  : '#callback'
//   type : 'inline'
