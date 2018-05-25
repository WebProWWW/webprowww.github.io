/*
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */

//=include ./lib/MyClass.coffee
var Slider;

$('.js-collapse').on('click', function(e) {
  var $collapse;
  e.preventDefault();
  $collapse = $($(this).attr('href'));
  $collapse.toggleClass('show');
  return false;
});

$('.js-date').datepicker({
  toggleSelected: false,
  autoClose: true
});

Slider = (function() {
  class Slider {
    constructor($slider) {
      this.setActivePager = this.setActivePager.bind(this);
      this.slideTo = this.slideTo.bind(this);
      this.initPager = this.initPager.bind(this);
      this.$slider = $slider;
      this.instance = this.initSlider();
      this.$pager = this.$slider.find('.js-slider-pager');
      this.btnsArr = this.initPager();
    }

    initSlider() {
      return this.$slider.find('.js-slider-wrap').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        onSlideBefore: this.setActivePager
      });
    }

    setActivePager($slideElement, oldIndex, newIndex) {
      var $btn, i, j, len, ref, results;
      ref = this.btnsArr;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $btn = ref[i];
        $btn.removeClass('active');
        if (newIndex === i) {
          results.push($btn.addClass('active'));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }

    slideTo(e) {
      return this.instance.goToSlide($(e.currentTarget).index());
    }

    initPager() {
      var $btn, count, current, i, j, ref, results;
      count = Number(this.instance.getSlideCount());
      current = Number(this.instance.getCurrentSlide());
      results = [];
      for (i = j = 0, ref = count; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        $btn = $('<span class="slider-btn"></span>');
        if (i === current) {
          $btn.addClass('active');
        }
        $btn.width(`${100 / count}%`);
        $btn.on('click', this.slideTo);
        this.$pager.append($btn);
        results.push($btn);
      }
      return results;
    }

  };

  Slider.prototype.btnsArr = [];

  return Slider;

}).call(this);

$('.js-slider').each(function(index, slider) {
  return new Slider($(slider));
});

// $('.js-slider').each (index, slider) ->
//   $items = $(slider).find '.slider-item'
//   $btns = $('.js-slider-pager').
//   console.log $items.length

// .
