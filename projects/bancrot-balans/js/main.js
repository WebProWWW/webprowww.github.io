/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MyClass;

  MyClass = function MyClass() {
    _classCallCheck(this, MyClass);
  };

  $('.slider-cases').slick({
    prevArrow: '<img class="slider-arr-l" src="img/arr-l.svg">',
    nextArrow: '<img class="slider-arr-r" src="img/arr-r.svg">',
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    dots: true,
    centerMode: false,
    slidesToShow: 1,
    responsive: [{
      //     {
      //         breakpoint: 576
      //         settings:
      //             centerMode: yes
      //             slidesToShow: 1
      //     }
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2
      }
    }]
  }); //     {
  //         breakpoint: 1400
  //         settings:
  //             slidesToShow: 3
  //     }

  $('.slider-reviews').slick({
    prevArrow: '<img class="slider-arr-l" src="img/arr-l.svg">',
    nextArrow: '<img class="slider-arr-r" src="img/arr-r.svg">',
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    dots: true,
    centerMode: false,
    slidesToShow: 1,
    responsive: [{
      //     {
      //         breakpoint: 576
      //         settings:
      //             centerMode: yes
      //             slidesToShow: 1
      //     }
      breakpoint: 768,
      settings: {
        arrows: true,
        dots: false
      }
    }, {
      breakpoint: 992,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 1400,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3
      }
    }]
  });
}).call(void 0);