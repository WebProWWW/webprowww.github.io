
////=require ../vendor/jquery/jquery/dist/jquery.min.js
/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

"use strict";(function(){$(".js-scrollto").click(function(t){var i,l;return t.preventDefault(),0===(i=$("".concat($(this).attr("href")))).length||(l={scrollTop:i.offset().top},$("body,html").stop(),$("body,html").animate(l,800)),!1}),$(".js-inline-popup-link").magnificPopup({type:"inline",midClick:!0})}).call(void 0);