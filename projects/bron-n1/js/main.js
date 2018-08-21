/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

var $body, $scrollToTop, $window, jQueryTab, tabs;

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

// $.fancybox.open {src: '#signup-login'}, {smallBtn: off}
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
  var $input, $this, currentNum, dataNum, maxNum, minNum, newVal;
  e.preventDefault();
  $this = $(this);
  $input = $this.closest('.js-counter').find('.js-counter-input');
  maxNum = Number($input.attr('max'));
  minNum = Number($input.attr('min'));
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
  val = Number($slider.attr('value'));
  min = Number($slider.attr('min'));
  max = Number($slider.attr('max'));
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
    value: val,
    min: min,
    max: max,
    step: 1,
    slide: function(e, ui) {}
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
