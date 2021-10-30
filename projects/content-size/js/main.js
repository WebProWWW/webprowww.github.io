/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";

(function () {
  var $contentSize, $win, writeSize;
  $contentSize = $('#content-size');
  $win = $(window);

  writeSize = function writeSize(w, h) {
    return $contentSize.text("".concat($win.width(), " x ").concat($win.height()));
  };

  writeSize();
  $win.on('resize', function () {
    return writeSize();
  });
}).call(void 0);