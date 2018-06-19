/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

var $, jQueryMailer;

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
      this.process = true;
      $.ajax({
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
      return true;
    }

    success($form, data) {
      // $form.trigger 'reset'
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

// $window = $ window
$('.js-date').datepicker({
  toggleSelected: false,
  autoClose: true
});

$('.js-range').each(function(i, rangeContainer) {
  var $rangeContainer, $slider, maxNum, minNum;
  $rangeContainer = $(rangeContainer);
  $slider = $rangeContainer.find('.range-slider');
  minNum = Number($slider.attr('min'));
  maxNum = Number($slider.attr('max'));
  return $slider.slider({
    range: true,
    min: minNum,
    max: maxNum,
    values: [minNum, maxNum],
    slide: function(e, ui) {
      var $maxInput, $maxView, $minInput, $minView, $parent, maxVal, minVal;
      $parent = $(this).parent('.js-range');
      minVal = ui.values[0];
      maxVal = ui.values[1];
      $minInput = $parent.find('.js-range-min-val');
      $maxInput = $parent.find('.js-range-max-val');
      $minView = $parent.find('.js-range-min');
      $maxView = $parent.find('.js-range-max');
      $minView.text(minVal);
      $maxView.text(maxVal);
      $minInput.val(minVal);
      return $maxInput.val(maxVal);
    }
  });
});
