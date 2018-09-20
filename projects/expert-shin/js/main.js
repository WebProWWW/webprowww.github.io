/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

(function() {
  //#=include ./lib/MyClass.coffee
  var $body, $calcParent, $htmlBody, $input1, $input10, $input11, $input12, $input13, $input14, $input15, $input16, $input17, $input18, $input19, $input2, $input20, $input21, $input22, $input23, $input24, $input25, $input26, $input27, $input28, $input29, $input3, $input30, $input31, $input32, $input33, $input34, $input35, $input36, $input37, $input38, $input39, $input4, $input40, $input41, $input5, $input6, $input7, $input8, $input9, $onscrl, $orderFix, $ordermIlist, $totalAll, $viewItem1, $viewItem10, $viewItem2, $viewItem3, $viewItem4, $viewItem5, $viewItem6, $viewItem7, $viewItem8, $viewItem9, $win, GalSlider, MediaQuery, addOneScrollToEvent, animatePriceTo, calcFormAnimating, calculate, calculateItem1, calculateItem10, calculateItem2, calculateItem3, calculateItem4, calculateItem5, calculateItem6, calculateItem7, calculateItem8, calculateItem9, delay, doStrFun, getOverStr, mq, numToPrice, renderItemGetTotal, scrollCallback, scrollTo, scrollToClick, scrollToId, showCalcItem, strToNum, toggleCollapse;

  MediaQuery = (function() {
    class MediaQuery {
      constructor($win) {
        if (typeof Modernizr !== "undefined" && Modernizr !== null) {
          if (Modernizr.mq('only all')) {
            if (typeof $ !== "undefined" && $ !== null) {
              if ($win == null) {
                $win = $(window);
              }
              this.init($win);
            } else {
              console.log('Подключите библиотеку jQuery. Библиотеку можно скачать по ссылке http://jquery.com');
            }
          } else {
            console.log('Браузер не поддерживает @media запросы');
          }
        } else {
          console.log('Не найден плагин "modernizr.js". Плагин можно скачать по ссылке https://modernizr.com/download/?-mq');
        }
      }

      init($win) {
        this.detectMedia();
        $win.on('resize', (e) => {
          return this.detectMedia();
        });
        return true;
      }

      detectMedia() {
        this.isSM = Modernizr.mq(MediaQuery.SM);
        this.isMD = Modernizr.mq(MediaQuery.MD);
        this.isLG = Modernizr.mq(MediaQuery.LG);
        this.isXL = Modernizr.mq(MediaQuery.XL);
        return true;
      }

    };

    MediaQuery.SM = '(min-width: 576px)';

    MediaQuery.MD = '(min-width: 768px)';

    MediaQuery.LG = '(min-width: 992px)';

    MediaQuery.XL = '(min-width: 1200px)';

    MediaQuery.prototype.isSM = false;

    MediaQuery.prototype.isMD = false;

    MediaQuery.prototype.isLG = false;

    MediaQuery.prototype.isXL = false;

    return MediaQuery;

  }).call(this);

  $body = $('body');

  $htmlBody = $('html, body');

  $win = $(window);

  $onscrl = $('.js-onscrl');

  $calcParent = $('.js-calc-parent');

  mq = new MediaQuery($win);

  GalSlider = (function() {
    // mq.isSM, mq.isMD, mq.isLG, mq.isXL
    class GalSlider {
      constructor($gslider) {
        var $slides, $thumbs;
        $slides = $gslider.find('.js-gslider-slides');
        $thumbs = $gslider.find('.js-gslider-thumb');
        this.bxSlider = $slides.bxSlider(GalSlider.bxOptions);
        $thumbs.on('click', (e) => {
          var $thumb, index;
          $thumb = $(e.currentTarget);
          index = $thumb.attr('data-index');
          this.goToSlide(index);
          return false;
        });
      }

      goToSlide(index) {
        var base;
        index = Number(index);
        if (this.bxSlider != null) {
          if (typeof (base = this.bxSlider).goToSlide === "function") {
            base.goToSlide(index);
          }
        }
        return true;
      }

    };

    GalSlider.prototype.bxSlider = null;

    GalSlider.bxOptions = {
      wrapperClass: 'bx-wrapper gslide-wrapper',
      controls: false,
      pager: false,
      slideMargin: 15,
      infiniteLoop: false
    };

    return GalSlider;

  }).call(this);

  $.fn.extend({
    getValJSON: function(index, defaultVal, attrVal) {
      var parsed, val;
      val = attrVal != null ? this.attr(attrVal) : this.val();
      if ((val != null) && String(val) !== 'null') {
        parsed = JSON.parse(String(val).replace(/'/g, '"'));
        if (index != null) {
          return parsed[index];
        } else {
          return parsed;
        }
      } else if (defaultVal != null) {
        return defaultVal;
      } else {
        return false;
      }
    },
    getValStr: function(defaultVal) {
      var val, valStr;
      val = this.val();
      valStr = String(val);
      if ((val != null) && valStr !== 'null') {
        return String(val);
      } else if (defaultVal != null) {
        return defaultVal;
      } else {
        return false;
      }
    },
    getValNum: function(defaultVal) {
      var val, valStr;
      val = this.val();
      valStr = String(val);
      if ((val != null) && valStr !== 'null') {
        return Number(val);
      } else if (defaultVal != null) {
        return defaultVal;
      } else {
        return false;
      }
    },
    isChecked: function() {
      return this.is(':checked');
    },
    collapse: function(hide = true, atime = 400, callBack = function() {}) {
      if (hide) {
        this.slideUp(atime, callBack);
      }
      if (!hide) {
        this.slideDown(atime, callBack);
      }
      return this;
    },
    tagNameLower: function() {
      return this.prop('tagName').toLowerCase();
    }
  });

  delay = function(ms, callBack) {
    return setTimeout(callBack, ms);
  };

  toggleCollapse = function(blockId, atime = 400, callBack = function() {}) {
    $(blockId).slideToggle(atime);
    delay(atime, function() {
      return callBack();
    });
    return true;
  };

  scrollTo = function(blockId, atime = 400, callBack) {
    var $block, offsetTop;
    if (blockId == null) {
      return true;
    }
    if (blockId === '#') {
      offsetTop = 0;
    } else {
      $block = $(blockId);
      if ($block.length) {
        offsetTop = $block.offset().top - 53;
      }
    }
    $htmlBody.animate({
      scrollTop: offsetTop
    }, atime);
    delay(atime, function() {
      if (callBack != null) {
        return callBack();
      }
    });
    return true;
  };

  calcFormAnimating = false;

  showCalcItem = function(id) {
    var $notSelected, $selected, activeSelector;
    $('.js-calc-btn').removeClass('active');
    activeSelector = `.js-calc-btn[href="${id}"]`;
    $(activeSelector).addClass('active');
    $selected = $(String(id));
    if (!calcFormAnimating) {
      calcFormAnimating = true;
      $notSelected = $calcParent.find('.collapse').not(id);
      // console.log $notSelected
      // console.log $selected.is(':hidden')
      if (!mq.isLG) {
        $notSelected.collapse(true, 0);
        scrollTo('#js-cforms-mark', 600, function() {
          if ($selected.is(':hidden')) {
            return $selected.collapse(false, 300, function() {
              return calcFormAnimating = false;
            });
          } else {
            return calcFormAnimating = false;
          }
        });
      } else {
        $notSelected.collapse(true, 300);
        delay(300, function() {
          if ($selected.is(':hidden')) {
            return $selected.collapse(false, 300, function() {
              return calcFormAnimating = false;
            });
          } else {
            return calcFormAnimating = false;
          }
        });
      }
    }
    return true;
  };

  numToPrice = function(num) {
    return String(Math.round(num)).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");
  };

  strToNum = function(str) {
    return Number(String(str).replace(/\s+/g, ''));
  };

  animatePriceTo = function($price, strNum) {
    var $div, fromNum, toNum;
    fromNum = strToNum($($price[0]).text());
    toNum = strToNum(strNum);
    $div = $(document.createElement('div'));
    $div.stop();
    $div.width(fromNum);
    return $div.animate({
      width: toNum
    }, {
      duration: 300,
      step: function(now) {
        return $price.text(numToPrice(now));
      }
    });
  };

  $body.on('click', '.js-collapse', function(e) {
    var id;
    e.preventDefault();
    id = $(this).attr('href');
    toggleCollapse(id);
    return false;
  });

  $('.js-slider').each(function(i, slider) {
    var $items, $slider;
    $slider = $(slider);
    $items = $slider.find('.slide');
    $items.each(function(ii, item) {
      var $img, $item, $slideDesc;
      $item = $(item);
      $img = $item.find('.slide-img');
      $slideDesc = $item.find('.slide-desc');
      return $slideDesc.css('background-image', `url('${$img.attr('src')}')`);
    });
    return $slider.bxSlider({
      adaptiveHeight: true,
      controls: false,
      wrapperClass: 'bx-wrapper slide-wrapper',
      auto: true,
      autoHover: true,
      pause: 8000
    });
  });

  $('.js-gslider').each(function(i, gslider) {
    return new GalSlider($(gslider));
  });

  $('.js-mask').each(function(i, input) {
    var $input;
    $input = $(input);
    return $input.inputmask($input.attr('mask'), {
      clearIncomplete: true,
      showMaskOnHover: false
    });
  });

  $win.on('scroll', function(e) {
    var offset, scrollTopNum;
    offset = 300;
    scrollTopNum = $(this).scrollTop();
    if (scrollTopNum > offset) {
      $onscrl.addClass('hide');
    }
    if (scrollTopNum < offset) {
      return $onscrl.removeClass('hide');
    }
  });

  $('.js-fancybox').fancybox();

  doStrFun = function(funName, arg) {
    var fun;
    fun = (function() {
      switch (funName) {
        case 'showCalcItem':
          return showCalcItem;
        default:
          return function() {};
      }
    })();
    return typeof fun === "function" ? fun(arg) : void 0;
  };

  addOneScrollToEvent = function() {
    return $body.one('click', '.js-scrollto', scrollToClick);
  };

  scrollToClick = function(e) {
    var $this, callback, thisHash, thisHref, thisHrefArr, thisPath;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    $this = $(this);
    thisHref = $this.attr('href');
    callback = $this.getValJSON(null, null, 'callback');
    if (thisHref === '#') {
      scrollTo('#', function() {
        if (callback != null) {
          return doStrFun(callback.name, callback.arg);
        }
      });
      addOneScrollToEvent();
      return false;
    }
    thisHrefArr = thisHref.split('#');
    if (thisHrefArr.length < 2) {
      addOneScrollToEvent();
      return false;
    }
    thisPath = thisHrefArr[0];
    thisHash = thisHrefArr[1];
    if (thisPath && thisHash && !location.href.includes(`${thisPath}`)) {
      localStorage.setItem('scrollTo', `#${thisHash}`);
      if (callback != null) {
        localStorage.setItem('scrollCallback', JSON.stringify(callback));
      }
      location.href = `${thisPath}`;
      return true;
    }
    if (thisHash) {
      scrollTo(`#${thisHash}`, function() {
        if (callback != null) {
          return doStrFun(callback.name, callback.arg);
        }
      });
      addOneScrollToEvent();
      return false;
    }
    return false;
  };

  addOneScrollToEvent();

  scrollToId = localStorage.getItem('scrollTo');

  scrollCallback = localStorage.getItem('scrollCallback');

  if (scrollToId != null) {
    scrollTo(String(scrollToId), 600, function() {
      var callback;
      localStorage.removeItem('scrollTo');
      if (scrollCallback != null) {
        callback = JSON.parse(String(scrollCallback));
        doStrFun(callback.name, callback.arg);
        return localStorage.removeItem('scrollCallback');
      }
    });
  }

  // START КАЛЬКУЛЯТОР
  // - - - - - - - - - - - - - - - - - - - - - - - - - -

  // js-calc-item-1
  $input1 = $('#js-calc-input-1');

  $input2 = $('#js-calc-input-2');

  $input3 = $('#js-calc-input-3');

  $input4 = $('#js-calc-input-4');

  $input5 = $('#js-calc-input-5');

  $input6 = $('#js-calc-input-6');

  $input7 = $('#js-calc-input-7');

  $input8 = $('#js-calc-input-8');

  $viewItem1 = $('#js-calc-item-1 .js-calc-item-total');

  // js-calc-item-2
  $input9 = $('#js-calc-input-9');

  $input10 = $('#js-calc-input-10');

  $viewItem2 = $('#js-calc-item-2 .js-calc-item-total');

  // js-calc-item-3
  $input11 = $('#js-calc-input-11');

  $input12 = $('#js-calc-input-12');

  $input13 = $('#js-calc-input-13');

  $input14 = $('#js-calc-input-14');

  $input15 = $('#js-calc-input-15');

  $viewItem3 = $('#js-calc-item-3 .js-calc-item-total');

  // js-calc-item-4
  $input16 = $('#js-calc-input-16');

  $input17 = $('#js-calc-input-17');

  $viewItem4 = $('#js-calc-item-4 .js-calc-item-total');

  // js-calc-item-5
  $input18 = $('#js-calc-input-18');

  $input19 = $('#js-calc-input-19');

  $input20 = $('#js-calc-input-20');

  $input21 = $('#js-calc-input-21');

  $viewItem5 = $('#js-calc-item-5 .js-calc-item-total');

  // js-calc-item-6
  $input22 = $('#js-calc-input-22');

  $input23 = $('#js-calc-input-23');

  $input24 = $('#js-calc-input-24');

  $input25 = $('#js-calc-input-25');

  $input26 = $('#js-calc-input-26');

  $viewItem6 = $('#js-calc-item-6 .js-calc-item-total');

  // js-calc-item-7
  $input27 = $('#js-calc-input-27');

  $input28 = $('#js-calc-input-28');

  $input29 = $('#js-calc-input-29');

  $input30 = $('#js-calc-input-30');

  $input31 = $('#js-calc-input-31');

  $viewItem7 = $('#js-calc-item-7 .js-calc-item-total');

  // js-calc-item-8
  $input32 = $('#js-calc-input-32');

  $viewItem8 = $('#js-calc-item-8 .js-calc-item-total');

  // js-calc-item-9
  $input33 = $('#js-calc-input-33');

  $input34 = $('#js-calc-input-34');

  $viewItem9 = $('#js-calc-item-9 .js-calc-item-total');

  // js-calc-item-10
  $input35 = $('#js-calc-input-35');

  $input36 = $('#js-calc-input-36');

  $input37 = $('#js-calc-input-37');

  $input38 = $('#js-calc-input-38');

  $input39 = $('#js-calc-input-39');

  $input40 = $('#js-calc-input-40');

  $input41 = $('#js-calc-input-41');

  // $input42 = $ '#js-calc-input-42'
  $viewItem10 = $('#js-calc-item-10 .js-calc-item-total');

  $orderFix = $('#order-fix');

  $totalAll = $('.js-total-all');

  $ordermIlist = $('#js-orderm-ilist');

  getOverStr = function(count, strArr) {
    var lastNum;
    lastNum = Number(String(count).slice(-1));
    switch (false) {
      case lastNum !== 1:
        return strArr[0];
      case !((1 < lastNum && lastNum < 5)):
        return strArr[1];
      default:
        return strArr[2];
    }
  };

  renderItemGetTotal = function(calcFun, $itemView) {
    var data, html, item, itemsHtml, j, len, modalHtml, ref;
    data = calcFun();
    if (!data) {
      $itemView.html('');
      return 0;
    }
    itemsHtml = '<p class="text">';
    ref = data.items;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      itemsHtml += `<span class="d-block mb-5 bi bi-check">${item}</span>`;
    }
    itemsHtml += '</p>';
    html = `<div class="calc-itotal">\n  <p class="text fwgt-700 d-flex justify-content-between">\n    <span class="d-block">${data.label}</span>\n    <span class="d-block">${data.total}<i class="i-20 em-8"></i></span>\n  </p>\n  ${itemsHtml}\n</div>`;
    $itemView.html(html);
    modalHtml = `<div class="divider"></div>\n<p class="text text-right mb-10"><a class="js-rm-item" href="${data.itemId}"><i class="i-29"></i></a></p>\n<p class="text d-flex justify-content-between align-items-end">\n  <span class="d-block fwgt-600">${data.label}</span>\n  <span class="d-block fwgt-700 spnwr">${data.total}<i class="i-20 em-8"></i></span>\n</p>\n${itemsHtml}`;
    $ordermIlist.append(modalHtml);
    return Number(data.total);
  };

  calculateItem1 = function() {
    var atype, balance, count, disk, itemsArr, monDe, priceIndex, total, unIn, valIndex;
    atype = $input1.getValJSON();
    if (!atype) {
      return false;
    }
    total = 0;
    itemsArr = [];
    priceIndex = Number(atype.pi);
    if (priceIndex === 0) {
      $input2.find('option:not(:eq(0))').attr('disabled', false);
    } else if (priceIndex === 1) {
      $input2.find('option:eq(1)').attr('disabled', 'disabled');
    } else {
      return false;
    }
    disk = $input2.getValJSON();
    count = $input3.getValNum();
    if (!disk || !count) {
      return false;
    }
    valIndex = Number(disk.i);
    unIn = $input4.getValJSON(valIndex);
    monDe = $input5.getValJSON(valIndex);
    balance = $input6.getValJSON(valIndex);
    if (unIn) {
      total += Number(unIn.p[priceIndex]);
      itemsArr.push(String(unIn.l));
    }
    if (monDe) {
      total += Number(monDe.p[priceIndex]);
      itemsArr.push(String(monDe.l));
    }
    if (balance) {
      total += Number(balance.p[priceIndex]);
      itemsArr.push(String(balance.l));
    }
    if (!total) {
      return false;
    }
    if (unIn && !monDe && !balance) {
      total += total * 0.5;
    }
    if ($input7.isChecked()) {
      total += total * 0.5;
    }
    if ($input8.isChecked()) {
      total += total * 0.5;
    }
    total = total * count;
    return {
      label: `${count} колес${getOverStr(count, ['о', 'а', ''])}, R${disk.r}`,
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-1'
    };
  };

  calculateItem2 = function() {
    var disk, diskType, pindex, price;
    diskType = $input9.getValJSON();
    disk = $input10.getValJSON();
    if (!diskType) {
      return false;
    }
    pindex = Number(diskType.pi);
    if (pindex === 0) {
      $input10.find('option:eq(5)').css('display', 'none').attr('disabled', 'disabled');
      $input10.find('option:eq(6)').css('display', 'none').attr('disabled', 'disabled');
      $input10.find('option:eq(7)').css('display', 'none').attr('disabled', 'disabled');
      $input10.find('option:eq(8)').css('display', 'none').attr('disabled', 'disabled');
      $input10.find('option:eq(9)').css('display', 'none').attr('disabled', 'disabled');
      $input10.find('option:eq(10)').css('display', 'none').attr('disabled', 'disabled');
    } else {
      $input10.find('option:not(:eq(0))').css('display', 'block').attr('disabled', false);
    }
    price = 0;
    if (disk) {
      price = Number(disk.p[pindex]);
    }
    if (!price) {
      return false;
    }
    return {
      label: `${diskType.label}, R${disk.r}`,
      total: Math.round(price),
      items: [],
      itemId: '#js-calc-item-2'
    };
  };

  calculateItem3 = function() {
    var itemsArr, price, val;
    price = 0;
    itemsArr = [];
    if ($input11.isChecked()) {
      val = $input11.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if ($input12.isChecked()) {
      val = $input12.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if ($input13.isChecked()) {
      val = $input13.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if ($input14.isChecked()) {
      val = $input14.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if ($input15.isChecked()) {
      val = $input15.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if (price === 0) {
      return false;
    }
    return {
      label: "Ремонт проколов",
      total: Math.round(price),
      items: itemsArr,
      itemId: '#js-calc-item-3'
    };
  };

  calculateItem4 = function() {
    var itemsArr, price, val;
    price = 0;
    itemsArr = [];
    if ($input16.isChecked()) {
      val = $input16.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if ($input17.isChecked()) {
      val = $input17.getValJSON();
      itemsArr.push(String(val.label));
      price = price + Number(val.p);
    }
    if (price === 0) {
      return false;
    }
    return {
      label: "Аргонная сварка (см)",
      total: Math.round(price),
      items: itemsArr,
      itemId: '#js-calc-item-4'
    };
  };

  calculateItem5 = function() {
    var count, disk, diskPrice, itemsArr, total;
    disk = $input18.getValJSON();
    count = $input19.getValNum();
    if (!disk || !count) {
      return false;
    }
    diskPrice = Number(disk.p);
    total = diskPrice * count;
    itemsArr = [];
    if ($input20.isChecked()) {
      itemsArr.push($input20.getValStr());
      total = total + (total * 0.2);
    }
    if ($input21.isChecked()) {
      itemsArr.push($input21.getValStr());
      total = total * 2;
    }
    return {
      label: `${count} диск${getOverStr(count, ['', 'а', 'ов'])}, R${disk.label}`,
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-5'
    };
  };

  calculateItem6 = function() {
    var disk, itemsArr, total, val;
    disk = $input22.getValJSON();
    if (!disk) {
      return false;
    }
    total = 0;
    itemsArr = [];
    if ($input23.isChecked()) {
      val = $input23.getValJSON();
      itemsArr.push(String(val.label));
      total = total + Number(val.p);
    }
    if ($input24.isChecked()) {
      val = $input24.getValJSON();
      itemsArr.push(String(val.label));
      total = total + Number(val.p);
    }
    if ($input25.isChecked()) {
      val = $input25.getValJSON();
      itemsArr.push(String(val.label));
      total = total + Number(val.p);
    }
    if ($input26.isChecked()) {
      val = $input26.getValJSON();
      itemsArr.push(String(val.label));
      total = total + Number(val.p);
    }
    if (total === 0) {
      return false;
    }
    return {
      label: `Колесо, R${disk.r}`,
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-6'
    };
  };

  calculateItem7 = function() {
    var itemsArr, total, val;
    total = 0;
    itemsArr = [];
    if ($input27.isChecked()) {
      val = $input27.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input28.isChecked()) {
      val = $input28.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input29.isChecked()) {
      val = $input29.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input30.isChecked()) {
      val = $input30.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input31.isChecked()) {
      val = $input31.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if (total === 0) {
      return false;
    }
    return {
      label: "Ремонт автостекла",
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-7'
    };
  };

  calculateItem8 = function() {
    var itemsArr, total, val;
    total = 0;
    itemsArr = [];
    if ($input32.isChecked()) {
      val = $input32.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if (total === 0) {
      return false;
    }
    return {
      label: "Для всех авто",
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-8'
    };
  };

  calculateItem9 = function() {
    var itemsArr, total, val;
    total = 0;
    itemsArr = [];
    if ($input33.isChecked()) {
      val = $input33.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input34.isChecked()) {
      val = $input34.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if (total === 0) {
      return false;
    }
    return {
      label: "Хранение шин и дисков",
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-9'
    };
  };

  calculateItem10 = function() {
    var itemsArr, total, val;
    total = 0;
    itemsArr = [];
    if ($input35.isChecked()) {
      val = $input35.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input36.isChecked()) {
      val = $input36.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input37.isChecked()) {
      val = $input37.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input38.isChecked()) {
      val = $input38.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input39.isChecked()) {
      val = $input39.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input40.isChecked()) {
      val = $input40.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if ($input41.isChecked()) {
      val = $input41.getValJSON();
      itemsArr.push(String(val.l));
      total = total + Number(val.p);
    }
    if (total === 0) {
      // if do $input42.isChecked
      //   val = do $input42.getValJSON
      //   itemsArr.push String val.l
      //   total = total + Number val.p
      return false;
    }
    return {
      label: "Доп услуги",
      total: Math.round(total),
      items: itemsArr,
      itemId: '#js-calc-item-10'
    };
  };

  calculate = function() {
    var totalAll;
    $ordermIlist.html('');
    totalAll = 0;
    totalAll += renderItemGetTotal(calculateItem1, $viewItem1);
    totalAll += renderItemGetTotal(calculateItem2, $viewItem2);
    totalAll += renderItemGetTotal(calculateItem3, $viewItem3);
    totalAll += renderItemGetTotal(calculateItem4, $viewItem4);
    totalAll += renderItemGetTotal(calculateItem5, $viewItem5);
    totalAll += renderItemGetTotal(calculateItem6, $viewItem6);
    totalAll += renderItemGetTotal(calculateItem7, $viewItem7);
    totalAll += renderItemGetTotal(calculateItem8, $viewItem8);
    totalAll += renderItemGetTotal(calculateItem9, $viewItem9);
    totalAll += renderItemGetTotal(calculateItem10, $viewItem10);
    if (totalAll) {
      $orderFix.collapse(false);
      animatePriceTo($totalAll, totalAll);
    } else {
      $orderFix.collapse(true);
      $totalAll.text('');
      $.fancybox.close(true);
    }
    return true;
  };

  // $.fancybox.open $ '#order-modal'
  $body.on('change', '.js-calc-input', function(e) {
    return calculate();
  });

  $body.on('click', '.js-rm-item', function(e) {
    var $item;
    e.preventDefault();
    $item = $($(this).attr('href'));
    $item.find('.js-calc-input').each(function(i, input) {
      var $input, tagName, type;
      $input = $(input);
      tagName = $input.tagNameLower();
      type = $input.attr('type');
      if (tagName === 'select') {
        $input.val($input.find('option:first').val());
      }
      if (tagName === 'input' && type === 'checkbox' || type === 'radio') {
        $input.prop('checked', false);
      }
      return true;
    });
    calculate();
    // if tagName is 'input' and type is 'radio'
    //   $input.attr 'checked', off
    // if tagName is 'input' and type is 'text'
    return false;
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  // END КАЛЬКУЛЯТОР
  $body.on('click', '.js-calc-btn', function(e) {
    var $this;
    e.preventDefault();
    $this = $(this);
    showCalcItem($this.attr('href'));
    return false;
  });

}).call(this);
