/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(function(){$("*[data-toggle]").on("click",function(t){var n;return t.preventDefault(),n=$(this),$("".concat(n.attr("data-toggle"))).slideToggle(),!1}),$(".input").on("focusin",function(t){return $(this).parent().addClass("focus"),!0}).on("focusout",function(t){return $(this).parent().removeClass("focus"),!0}),$("[data-scroll]").on("click",function(t){var n,a;return t.preventDefault(),a="#"===(n=$(this).attr("data-scroll"))?0:$(n).offset().top,$("html:not(:animated),body:not(:animated)").animate({scrollTop:a}),!1})}).call(void 0);