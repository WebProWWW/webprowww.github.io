/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MyClass;
  MyClass = /*#__PURE__*/_createClass(function MyClass() {
    _classCallCheck(this, MyClass);
  });
  $('*[data-toggle-nav]').on('click', function (event) {
    var $this;
    event.preventDefault();
    $this = $(this);
    $('.active[data-toggle-nav]').each(function (i, el) {
      var $el;
      $el = $(el);

      if ($el.is($this)) {
        return true;
      }

      $el.removeClass('active');
      $($el.data('toggle-nav')).removeClass('active');
      return true;
    }).promise().done(function () {
      $this.toggleClass('active');
      return $($this.data('toggle-nav')).toggleClass('active');
    });
    return false;
  });
}).call(void 0);