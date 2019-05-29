
////=require ../vendor/jquery/jquery/dist/jquery.min.js
/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

"use strict";(function(){$(".js-scrollto").click(function(t){var o,l;return t.preventDefault(),0===(o=$("".concat($(this).attr("href")))).length||(l={scrollTop:o.offset().top},$("body,html").stop(),$("body,html").animate(l,800)),!1})}).call(void 0);