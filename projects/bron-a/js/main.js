/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

var $body, $scrollToTop, $window, delay, getDiagramLineCss, jQueryTab, removeCartLoading, tabs;

jQueryTab = class jQueryTab {
  constructor(selector) {
    this.onBtnClick = this.onBtnClick.bind(this);
    this.selector = selector;
    $('body').on('click', `${this.selector} .tab-btn`, this.onBtnClick);
  }

  onBtnClick(e) {
    var $target, id;
    e.preventDefault();
    $target = $(e.currentTarget);
    id = $target.attr('href');
    if (id != null) {
      this.showContent(id);
    }
    return false;
  }

  showContent(id) {
    var $btn, $content, $parent, $sibBtns, $sibContents;
    $content = $(id);
    $parent = $content.closest(this.selector);
    $sibContents = $parent.find('.tab-content');
    $sibBtns = $parent.find('.tab-btn');
    $btn = $parent.find(`.tab-btn[href=\'${id}\']`);
    $sibContents.removeClass('active');
    $content.addClass('active');
    $sibBtns.removeClass('active');
    $btn.addClass('active');
    return true;
  }

};

$body = $('body');

$window = $(window);

$scrollToTop = $('.scrolltotop');

$.fn.datepicker.languages['ru-RU'] = {
  format: 'dd.mm.YYYY',
  days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  weekStart: 1,
  startView: 0,
  yearFirst: false,
  yearSuffix: ''
};

$('.js-datepicker').datepicker({
  language: 'ru-RU'
});

tabs = new jQueryTab('.js-tab');

$('.js-fancybox').fancybox({
  smallBtn: false,
  beforeShow: function(instance, slide) {
    var tabId;
    tabId = instance.$lastFocus.attr('data-tab');
    if (tabId != null) {
      tabs.showContent(tabId);
    }
    return true;
  }
});

// $.fancybox.open {src: '#reviews'}, {smallBtn: on}
// $('.js-fancygal').fancybox()
$('.js-bxslider').bxSlider({
  wrapperClass: 'bx-wrapper bxslider',
  pager: false,
  nextText: 'Туда',
  prevText: 'Сюда'
});

$window.on('scroll', function(e) {
  var offset, scrollTopNum;
  offset = 300;
  scrollTopNum = $(this).scrollTop();
  if (scrollTopNum > offset) {
    $scrollToTop.addClass('active');
  }
  if (scrollTopNum < offset) {
    $scrollToTop.removeClass('active');
  }
  return true;
});

$body.on('click', '.js-counter .form-counter-btn', function(e) {
  var $input, $this, currentNum, dataNum, max, maxNum, min, minNum, newVal;
  e.preventDefault();
  $this = $(this);
  $input = $this.closest('.js-counter').find('.js-counter-input');
  max = $input.attr('max');
  min = $input.attr('min');
  maxNum = max != null ? Number(max) : null;
  minNum = min != null ? Number(min) : null;
  dataNum = Number($this.attr('data'));
  currentNum = Number($input.val());
  newVal = currentNum + dataNum;
  if (isNaN(newVal)) {
    newVal = 0;
  }
  if ((maxNum != null) && maxNum < newVal) {
    newVal = maxNum;
  }
  if ((minNum != null) && minNum > newVal) {
    newVal = minNum;
  }
  $input.val(newVal);
  return false;
});

$('.js-slider-ui').each(function(i, slider) {
  var $slider, max, min, val;
  $slider = $(slider);
  val = $slider.attr('value');
  min = $slider.attr('min');
  max = $slider.attr('max');
  if (val == null) {
    val = 0;
  }
  if (min == null) {
    min = 0;
  }
  if (max == null) {
    max = 9;
  }
  return $slider.slider({
    value: Number(val),
    min: Number(min),
    max: Number(max),
    step: 1,
    slide: function(e, ui) {
      var $input, $parent;
      $parent = $(this).closest('.js-slider');
      $input = $parent.find('.js-slider-value');
      return $input.val(ui.value);
    }
  });
});

// $( "#slider" ).slider({
//       value:100,
//       min: 0,
//       max: 500,
//       step: 50,
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.value );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
$body.on('click', '.js-collapse', function(e) {
  var $block, $iconArr, $this, addClass, removClass;
  e.preventDefault();
  $this = $(this);
  $block = $($this.attr('href'));
  $iconArr = $this.find('.js-collapse-arr');
  $block.stop();
  removClass = 'fa-angle-up';
  addClass = 'fa-angle-down';
  $block.slideToggle(function() {
    switch (String($(this).css('display'))) {
      case 'none':
        removClass = 'fa-angle-up';
        addClass = 'fa-angle-down';
        break;
      case 'block':
        removClass = 'fa-angle-down';
        addClass = 'fa-angle-up';
    }
    $iconArr.removeClass(removClass);
    $iconArr.addClass(addClass);
    return true;
  });
  return false;
});

// removClass = 'fas fa-angle-down fa-fw js-collapse-arr'
//       when 'block' then 'fas fa-angle-up fa-fw js-collapse-arr'
$body.on('click', '.js-scrollto', function(e) {
  var id, offsetTop;
  e.preventDefault();
  id = $(this).attr('href');
  if (id === '#') {
    offsetTop = 0;
  } else {
    offsetTop = $(id).offset().top;
  }
  $('html:not(:animated),body:not(:animated)').animate({
    scrollTop: offsetTop
  });
  return false;
});

getDiagramLineCss = function(val, max) {
  var green, precent, red;
  precent = Math.round(val * 100 / max);
  green = Math.round(precent * 255 / 100);
  red = 255 - green;
  if (green > 230) {
    green = 230;
  }
  if (red < 0) {
    red = 0;
  }
  return {
    width: `${precent}%`,
    background: `rgb(${red}, ${green}, 200)`
  };
};

$('.js-diagram').each(function(i, diagram) {
  var $diagram, $line, lineCss, maxNum, valNum;
  $diagram = $(diagram);
  $line = $diagram.find('.diagram-line');
  valNum = Number($diagram.attr('data'));
  maxNum = Number($diagram.attr('max'));
  lineCss = getDiagramLineCss(valNum, maxNum);
  $line.css(lineCss);
  return true;
});

delay = function(ms, callBacl) {
  return setTimeout(callBacl, ms);
};

removeCartLoading = function() {
  return $('.js-loading').each(function(i, cart) {
    var $cart;
    $cart = $(cart);
    return delay(600 * i, function() {
      return $cart.removeClass('loading');
    });
  });
};

$(window).on('load', function(e) {
  return removeCartLoading();
});
