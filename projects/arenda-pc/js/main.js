"use strict";

(function () {
  // class AjaxForm

  //     _action: '/'
  //     _isLoading: no
  //     $form: $({})

  //     constructor: (@form) ->
  //         @$form = $ @form
  //         @_action = @$form.data('form') or '/'
  //         @$submit = @$form.find '*[data-form-submit]'
  //         @$submit.on 'click', (event) =>
  //             @onSubmit()
  //             off

  //     onSubmit: () ->
  //         return off if @_isLoading
  //         @_isLoading = yes
  //         @$submit.addClass 'loading'
  //         data = new FormData @form
  //         $.ajax
  //             url: @_action
  //             method: 'POST'
  //             processData: off
  //             contentType: off
  //             data: data
  //         .done (data) =>
  //             console.log data
  //             if data.hasErrors is 1
  //                 @addErrors data.errors
  //                 return yes
  //             @showModal()
  //             @$form.trigger 'reset'
  //             yes
  //         .fail () =>
  //             console.error "form submit error #{@_action}"
  //             yes
  //         .always () =>
  //             @_isLoading = no
  //             @$submit.removeClass 'loading'
  //             yes
  //         off

  //     showModal: () ->
  //         options =
  //             autoFocus: false
  //             # dragToClose: false
  //         new Fancybox([{type: 'inline', src: '#modal-form-success'}], options)
  //         yes

  //     addErrors: (errors) ->
  //         for name, error of errors
  //             @$form.find("*[data-form-error=#{name}]").text error
  //             @$form.find("*[data-form-input=#{name}]").addClass('error').one 'focus', (e) => @onInputFocus e

  //     onInputFocus: (e) ->
  //         $input = $ e.currentTarget
  //         $input.removeClass 'error'
  //         $input.next('[data-form-error]').text ''
  //         yes

  // $('form[data-form]').each (i, elForm) ->
  //     new AjaxForm elForm
  //     yes
  var $dataSlideToggle, dataSlideToggle, showModal;
  showModal = function showModal(src) {
    // opt: dragToClose: false
    new Fancybox([{
      type: 'inline',
      src: src
    }], {
      autoFocus: false,
      closeButton: false
    });
    return true;
  };

  // showModal('#modal-callback')
  $('*[data-modal]').on('click', function (e) {
    e.preventDefault();
    showModal($(this).data('modal'));
    return false;
  });
  $('*[data-tarif-carousel]').each(function (i, elSlider) {
    var options;
    options = {
      enabled: true,
      center: true,
      slidesPerPage: 1,
      transition: 'slide',
      Autoplay: false,
      //     timeout: 5000
      //     showProgress: no
      Navigation: false,
      Dots: {
        classes: {
          list: 'tarif-carousel-dots'
        },
        dotTpl: '<div data-carousel-page="%i"><span class="tarif-carousel-dot"></span></div>'
      },
      breakpoints: {
        "(min-width: 992px)": {
          enabled: false
        }
      }
    };
    new Carousel(elSlider, options, {
      Autoplay: Autoplay
    });
    return true;
  });
  $dataSlideToggle = $('*[data-slide-toggle]');
  dataSlideToggle = function dataSlideToggle() {
    $dataSlideToggle.each(function (i, el) {
      var $el;
      $el = $(el);
      $el.toggleClass($el.data('slide-toggle'));
      return true;
    });
    return true;
  };
  $('*[data-slide-close]').on('click', function (e) {
    $('*[data-slide].active').trigger('click');
    return true;
  });
  $('*[data-slide]').on('click', function (event) {
    var $slide, $target;
    $target = $(event.currentTarget);
    $target.toggleClass('active');
    dataSlideToggle();
    $slide = $($target.data('slide'));
    $slide.stop();
    $slide.slideToggle(300);
    return true;
  });
  $('*[data-scroll]').bind('click', function (e) {
    var $markerEl, id, offsetTop;
    e.preventDefault();
    id = $(this).attr('href');
    offsetTop = 0;
    $markerEl = $(id);
    if ($markerEl.length) {
      offsetTop = Number($markerEl.offset().top);
    }
    if (offsetTop > 0) {
      offsetTop = offsetTop - 75;
    }
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: offsetTop
    }, 360, 'linear');
    return false;
  });
}).call(void 0);