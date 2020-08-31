/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(function(){$("*[data-toggle]").on("click",function(t){var n;return t.preventDefault(),n=$(this),$("".concat(n.attr("data-toggle"))).slideToggle(),!1}),$(".input").on("focusin",function(t){return $(this).parent().addClass("focus"),!0}).on("focusout",function(t){return $(this).parent().removeClass("focus"),!0})}).call(void 0);