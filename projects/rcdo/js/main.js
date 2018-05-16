/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

//=include ./lib/MyClass.coffee
var $body, $fixedNav, $window, CEvent, SvgMap, hideAllDropDown;

$body = $('body');

$window = $(window);

$fixedNav = $('#fixed-nav');

CEvent = (function() {
  class CEvent {};

  CEvent.MAP_ITEM_CLICK = 'MapItemClick';

  return CEvent;

}).call(this);

SvgMap = class SvgMap {
  constructor($mapBlock) {
    var svgTagId;
    this.onAddrSelect = this.onAddrSelect.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onFileLoad = this.onFileLoad.bind(this);
    this.$mapBlock = $mapBlock;
    svgTagId = this.$mapBlock.attr('data-svg-id');
    if (svgTagId != null) {
      this.init(svgTagId);
    }
  }

  init(svgTagId) {
    this.map = new Snap(svgTagId);
    this.map.attr({
      viewBox: "0 0 543.5 686"
    });
    Snap.load('img/bash.svg', this.onFileLoad);
    $(this).on(CEvent.MAP_ITEM_CLICK, this.onItemSelect);
    return this.$mapBlock.on('show.bs.collapse', this.onAddrSelect);
  }

  activeItem(itemId) {
    var item, j, len, mapItems;
    mapItems = this.map.selectAll('.smap-group');
    for (j = 0, len = mapItems.length; j < len; j++) {
      item = mapItems[j];
      item.removeClass('active');
    }
    return this.map.select(itemId).addClass('active');
  }

  onAddrSelect(e) {
    var $target, itemId;
    $target = $(e.target);
    itemId = $target.attr('data-map-id');
    this.$mapBlock.find('.accord-item').removeClass('active');
    $target.parent('.accord-item').addClass('active');
    return this.activeItem(itemId);
  }

  onItemSelect(e, itemId) {
    return this.$mapBlock.find(`*[data-map-id='${itemId}']`).collapse('show');
  }

  onFileLoad(svgFile) {
    var $this, activeItemId, item, j, len, mapItems, results;
    mapItems = svgFile.selectAll('.smap-group');
    activeItemId = this.$mapBlock.find('.collapse.show').attr('data-map-id');
    this.map.append(mapItems);
    if (activeItemId != null) {
      this.map.select(activeItemId).addClass('active');
    }
    $this = $(this);
    results = [];
    for (j = 0, len = mapItems.length; j < len; j++) {
      item = mapItems[j];
      results.push(item.click(function(e) {
        return $this.trigger(CEvent.MAP_ITEM_CLICK, [`#${this.attr('id')}`]);
      }));
    }
    return results;
  }

};

$('.js-svg-map').each(function(i, mapBlock) {
  var $svgmap;
  return $svgmap = $(new SvgMap($(mapBlock)));
});

$('.js-fmodal').on('click', function(e) {
  var modalId;
  e.preventDefault();
  modalId = $(this).attr('href');
  $.fancybox.open($(modalId), {
    modal: true,
    baseClass: 'fancybox-full'
  });
  // animationEffect: 'slide'
  return false;
});

$('#jingle').on('show.bs.collapse hide.bs.collapse', function(e) {
  if (e.type === 'show') {
    $body.addClass('jingle-pt');
  }
  if (e.type === 'hide') {
    $body.removeClass('jingle-pt');
  }
  return true;
});

hideAllDropDown = function() {
  return $('.js-dropdown-menu').removeClass('show');
};

$('.js-dropdown-btn').on('click', function(e) {
  var $menu, $parent, $this;
  e.preventDefault();
  e.stopImmediatePropagation();
  $this = $(this);
  $parent = $this.parent('.js-dropdown');
  $menu = $parent.find('.js-dropdown-menu');
  if (!$menu.hasClass('show')) {
    hideAllDropDown();
    $menu.addClass('show');
  } else {
    hideAllDropDown();
  }
  return false;
});

$body.on('click', function(e) {
  return hideAllDropDown();
});

$window.on('scroll', function(e) {
  var offset, scrollTopNum;
  offset = 15;
  scrollTopNum = $(this).scrollTop();
  if (scrollTopNum > offset) {
    $fixedNav.collapse('show');
  }
  if (scrollTopNum < offset) {
    return $fixedNav.collapse('hide');
  }
});

$('.js-slick').slick({
  arrows: true,
  // autoplay: on
  // autoplaySpeed: 5000
  infinite: true,
  dots: true,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false
      }
    }
  ]
});

$('.js-slick-m').slick({
  infinite: true,
  dots: true,
  centerMode: false,
  mobileFirst: true,
  slidesToShow: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 1300,
      settings: {
        arrows: true,
        slidesToShow: 6
      }
    }
  ]
});
