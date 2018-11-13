/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  //#=include ./lib/MyClass.coffee
  var YandexMap, base, yandexMapInit;

  $('.js-toggle').on('click', function(e) {
    var $block, $this;
    e.preventDefault();
    $this = $(this);
    $block = $($this.attr('href'));
    $block.stop();
    $block.slideToggle(300);
    return false;
  });

  $('.js-bxslider').bxSlider({
    wrapperClass: 'bx-wrapper slider',
    auto: true,
    pause: 5000,
    autoHover: true,
    controls: true
  });

  YandexMap = class YandexMap {
    constructor(view1, config1) {
      var address, j, len, ref;
      this.view = view1;
      this.config = config1;
      this.map = new window.ymaps.Map(this.view, {
        center: this.config.center.coor,
        zoom: this.config.center.zoom
      });
      // controls: []
      this.map.behaviors.disable(['drag', 'scrollZoom']);
      ref = this.config.address;
      for (j = 0, len = ref.length; j < len; j++) {
        address = ref[j];
        this.addAdres(address, this.config.placemark);
      }
    }

    addAdres({iconCoor, hintContent, balloonContent}, {iconUrl, iconSize, iconOffset}) {
      var placemark;
      placemark = new window.ymaps.Placemark(iconCoor, {
        hintContent: hintContent,
        balloonContent: balloonContent
      }, {
        iconLayout: 'default#image',
        iconImageHref: iconUrl,
        iconImageSize: iconSize,
        iconImageOffset: iconOffset
      });
      this.map.geoObjects.add(placemark);
      placemark.balloon.open();
      return true;
    }

  };

  yandexMapInit = function(e) {
    var $view, config;
    config = window.mapConfig;
    if (config == null) {
      return false;
    }
    $view = $(config.view);
    if (!$view.length) {
      return false;
    }
    return $view.each(function(i, view) {
      return new YandexMap(view, config);
    });
  };

  if (window.ymaps != null) {
    if (typeof (base = window.ymaps).ready === "function") {
      base.ready(yandexMapInit);
    }
  }

}).call(this);
