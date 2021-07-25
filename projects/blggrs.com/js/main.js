/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MyClass, ProfileChart, config, gradient, gradientBackground, gradientH, gradientW, labelsDaily, labelsWeekly, randomData;

  MyClass = function MyClass() {
    _classCallCheck(this, MyClass);
  };

  dayjs.extend(window.dayjs_plugin_localeData);
  dayjs.locale('ru'); // console.log dayjs.duration().days()
  // console.log dayjs().add(10, 'day')
  // console.log dayjs() + 30

  gradient = null;
  gradientW = 0;
  gradientH = 0;

  gradientBackground = function gradientBackground(context) {
    var chartArea, ctx, height, ref, width;
    ctx = context.chart.ctx;
    chartArea = context != null ? (ref = context.chart) != null ? ref.chartArea : void 0 : void 0;

    if (!chartArea) {
      return null;
    }

    width = chartArea.right - chartArea.left;
    height = chartArea.bottom - chartArea.top;

    if (gradient === null || width !== gradientW || height !== gradientH) {
      gradientW = width;
      gradientH = height;
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(0, '#FAB817');
      gradient.addColorStop(1, '#F50623');
    }

    return gradient;
  };

  labelsDaily = function labelsDaily() {
    var date, day, i, j, month, results;
    results = [];

    for (i = j = -30; j <= -1; i = ++j) {
      date = dayjs().add(i, 'day');
      month = date.localeData().monthsShort(date);
      day = date.date();
      results.push("".concat(day, " ").concat(month));
    }

    return results;
  };

  labelsWeekly = function labelsWeekly() {
    var date, dateTo, day, dayTo, i, j, month, monthTo, results;
    results = [];

    for (i = j = -70; j <= -7; i = j += 7) {
      date = dayjs().add(i, 'day');
      month = date.localeData().monthsShort(date);
      day = date.date();
      dateTo = date.add(7, 'day');
      monthTo = dateTo.localeData().monthsShort(dateTo);
      dayTo = dateTo.date();
      results.push("".concat(day, " ").concat(month, " - ").concat(dayTo, " ").concat(monthTo));
    }

    return results;
  };

  randomData = function randomData(count) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var i, j, max, ref, results;
    max = count + min;
    results = [];

    for (i = j = 1, ref = count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      results.push(Math.floor(Math.random() * (max - min) + min));
    }

    return results;
  };

  config = {
    data: {
      labels: labelsDaily(),
      datasets: [{
        label: 'Лайки',
        data: randomData(30),
        pointBackgroundColor: '#37B4CD',
        pointBorderColor: 'white',
        pointBorderWidth: 1,
        pointRadius: 4,
        backgroundColor: '#37B4CD',
        borderColor: '#37B4CD',
        borderWidth: 3,
        tension: .3,
        type: 'line'
      }, {
        label: 'Фанаты',
        data: randomData(30, 30),
        backgroundColor: gradientBackground,
        type: 'bar'
      }]
    },
    options: {
      interaction: {
        mode: 'x'
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    }
  };

  ProfileChart = function () {
    var ProfileChart = /*#__PURE__*/function () {
      function ProfileChart($el) {
        _classCallCheck(this, ProfileChart);

        this.updateData = this.updateData.bind(this);
        this.$el = $el;
        this.chart = new Chart($(this.$el), config);
        $(this.$el.data('filter')).on('change', this.updateData);
      }

      _createClass(ProfileChart, [{
        key: "updateData",
        value: function updateData(e) {
          var count, data, dataset, j, len, ref, val;
          val = $(e.target).val();
          count = 0;

          if (val === 'Еженедельный') {
            count = 10;
            this.chart.data.labels = labelsWeekly();
          }

          if (val === 'Повседневный') {
            count = 30;
            this.chart.data.labels = labelsDaily();
          }

          ref = this.chart.data.datasets;

          for (j = 0, len = ref.length; j < len; j++) {
            dataset = ref[j];

            if (dataset.type === 'line') {
              data = randomData(count);
            }

            if (dataset.type === 'bar') {
              data = randomData(count, count);
            }

            dataset.data = data;
          }

          this.chart.update();
          return true;
        }
      }]);

      return ProfileChart;
    }();

    ;
    ProfileChart.prototype.chart = null;
    return ProfileChart;
  }.call(this);

  $('.js-chart').each(function (i, el) {
    return new ProfileChart($(el));
  });
}).call(void 0);