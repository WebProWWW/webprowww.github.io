"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
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
  var $dataOnScroll, $dataSlideToggle, TarifCarousel, dataOnScroll, dataSlideToggle, showModal;
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
  TarifCarousel = /*#__PURE__*/_createClass(function TarifCarousel(el, options) {
    var _this = this;
    _classCallCheck(this, TarifCarousel);
    var $btnNext, $btnPrev, $el;
    $el = $(el);
    $btnPrev = $el.find('*[data-carousel-prev]');
    $btnNext = $el.find('*[data-carousel-next]');
    this.slider = new Carousel(el, options, {
      Autoplay: Autoplay
    });
    $btnPrev.on('click', function (e) {
      return _this.slider.slidePrev();
    });
    $btnNext.on('click', function (e) {
      return _this.slider.slideNext();
    });
  });
  $('*[data-carousel]').each(function (i, el) {
    var breakpoints, offWidth, options;
    breakpoints = {};
    offWidth = $(el).data('carousel');
    if (offWidth === 'md-off') {
      breakpoints["(min-width: 768px)"] = {
        enabled: false
      };
    }
    options = {
      enabled: true,
      center: false,
      slidesPerPage: 1,
      transition: 'slide',
      Autoplay: false,
      Navigation: false,
      Dots: {
        dynamicFrom: 2,
        classes: {
          list: 'f-carousel__dots tarif-carousel-dots'
        }
      },
      breakpoints: breakpoints
    };
    // Autoplay: no
    //     timeout: 5000
    //     showProgress: no
    // Dots:
    //     classes:
    //         list: 'f-carousel__dots tarif-carousel-dots'
    //     dotTpl: '<div data-carousel-page="%i"><span class="tarif-carousel-dot"></span></div>'
    // breakpoints: breakpoints
    //     "(min-width: 768px)":
    //         enabled: no
    new TarifCarousel(el, options);
    // new Carousel el, options, {Autoplay}
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
    if (id !== '#') {
      $markerEl = $(id);
    }
    if ($markerEl && $markerEl.length) {
      offsetTop = Number($markerEl.offset().top);
    }
    if (offsetTop > 0) {
      offsetTop = offsetTop - 75;
      dataOnScroll();
    } else {
      dataOnScroll(false);
    }
    $('html:not(:animated),body:not(:animated)').animate({
      scrollTop: offsetTop
    }, 360, 'linear');
    return false;
  });
  $dataOnScroll = $('*[data-on-scroll]');
  dataOnScroll = function dataOnScroll() {
    var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    $dataOnScroll.each(function (i, el) {
      var $el, cssClass;
      $el = $(el);
      cssClass = $el.data('on-scroll');
      if (add) {
        $el.addClass(cssClass);
      } else {
        $el.removeClass(cssClass);
      }
      return true;
    });
    return true;
  };
  $(window).on('scroll', function (e) {
    var offset, scrollTopNum;
    offset = 10;
    scrollTopNum = $(this).scrollTop();
    dataOnScroll(scrollTopNum > offset);
    return true;
  });
}).call(void 0);