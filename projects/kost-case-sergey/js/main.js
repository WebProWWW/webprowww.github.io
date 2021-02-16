/*!
 * @author Timur Valiyev
 * @link https://webprowww.github.io
 */
"use strict";

(function () {
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  var TestForm, TestFormEmail, TestFormEmailSucess, TestFormPhone, TestFormQuestions, TestFormSuccess;
  TestFormQuestions = {
    template: "<div>\n    <div class=\"popup-header\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <p class=\"popup-header-title\">\u0423\u0437\u043D\u0430\u0439\u0442\u0435 3 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0412\u0430\u0448\u0438\u0445 \u0434\u043E\u043B\u0433\u043E\u0432.</p>\n            </div>\n            <div class=\"col-auto\">\n                <p class=\"test-steep\">{{ steep }} / {{ steepTotal }}</p>\n            </div>\n        </div>\n        <span class=\"progress\" :style=\"{ right: progress }\"></span>\n    </div>\n\n    <h3 class=\"popup-title\">{{ item.title }}</h3>\n    <p class=\"popup-desc\">{{ item.desc }}</p>\n\n    <label class=\"label\" v-for=\"option in item.options\">\n        <input\n            v-model=\"item.value\"\n            :value=\"option\"\n            class=\"radio\"\n            type=\"radio\"\n        >\n        <span class=\"label-txt\">{{ option }}</span>\n    </label>\n\n    <div class=\"row no-gutters mt-4\">\n        <div class=\"col-12 col-sm-auto order-2 order-sm-1\">\n            <span class=\"btn-test-back\" @click.prevent=\"back\">\n                <span v-if=\"(steep === 1)\">\u0417\u0410\u041A\u0420\u042B\u0422\u042C</span>\n                <span v-else> <i class=\"icon-arrl\"></i> \u041D\u0410\u0417\u0410\u0414</span>\n            </span>\n        </div><!-- /.col -->\n        <div class=\"col-12 col-sm-auto ml-auto order-1 order-sm-2\">\n            <span class=\"btn-test\" @click.prevent=\"next\">\n                \u0414\u0410\u041B\u0415\u0415 <i class=\"icon-arrr\"></i>\n            </span>\n        </div><!-- /.col -->\n    </div>\n</div>",
    data: function data() {
      return {
        steep: 1,
        steepTotal: 5,
        items: [{
          title: 'Какая общая сумма Вашего долга?',
          desc: 'Выберите вариант нише и жмите на кнопку «Далее»',
          value: '0 - 200 000 ₽',
          options: ['0 - 200 000 ₽', '200 000 - 400 000 ₽', '400 000 - 1 000 000 ₽', '1 000 000 - 3 000 000 ₽', 'Более 3 000 000 ₽']
        }, {
          title: 'Какой у Вас срок просрочки по кредитам и займам?',
          value: '1 месяц',
          options: ['1 месяц', '2 месяца', '3 месяца', '4 месяца и более']
        }, {
          title: 'Есть ли у Вас в собственности автомобиль или квартира?',
          value: 'Да, есть',
          options: ['Да, есть', 'Нет']
        }, {
          title: 'Вы заключали сделки с недвижимостью или автомобилем за последние 3 года?',
          value: 'Да',
          options: ['Да', 'Нет']
        }, {
          title: 'Вы вносили хотя бы один ежемесячный платеж по кредитам или займам?',
          value: 'Да',
          options: ['Да', 'Нет']
        }]
      };
    },
    methods: {
      back: function back(e) {
        if (this.steep === 1) {
          $.fancybox.close(true);
        }

        if (this.steep > 1) {
          this.steep--;
        }

        return false;
      },
      next: function next(e) {
        if (this.steep === this.steepTotal) {
          this.$emit('complete', this.items);
        }

        if (this.steep < this.steepTotal) {
          this.steep++;
        }

        return false;
      }
    },
    computed: {
      progress: function progress() {
        return "".concat(100 - this.steep * 100 / this.steepTotal, "%");
      },
      item: function item() {
        return this.items["".concat(this.steep - 1)];
      },
      inputName: function inputName() {
        return "questions[".concat(this.steep - 1, "]");
      }
    }
  }; // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  TestFormPhone = {
    template: "<div>\n    <h3 class=\"title mt-0\">\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0437\u0430 \u0434\u043E\u0432\u0435\u0440\u0438\u0435! \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0433\u043E\u0442\u043E\u0432.</h3>\n    <p class=\"popup-title\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u0443\u0437\u043D\u0430\u0439\u0442\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:</p>\n    <p class=\"popup-desc\">\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0438 \u043A \u0447\u0435\u043C\u0443 \u0412\u0430\u0441 \u043D\u0435 \u043E\u0431\u044F\u0437\u044B\u0432\u0430\u0435\u0442</p>\n    <input\n        ref=\"input\"\n        :class=\"{error}\"\n        @focus=\"error = false\"\n        class=\"input\"\n        type=\"text\"\n        placeholder=\"\u0412\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\"\n    >\n    <p class=\"popup-desc\">\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \xAB\u0411\u0430\u043D\u043A\u0440\u043E\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\xBB</p>\n    <div class=\"row mt-4\">\n        <div class=\"col-12 col-sm-auto ml-auto\">\n            <span class=\"btn-test\" @click.prevent=\"submit\">\u0423\u0417\u041D\u0410\u0422\u042C \u0421\u0422\u041E\u0418\u041C\u041E\u0421\u0422\u042C</span>\n        </div><!-- /.col -->\n    </div>\n</div>",
    mounted: function mounted() {
      var _this = this;

      $(this.$refs.input).inputmask('+7-999-999-99-99', {
        greedy: false,
        oncomplete: function oncomplete(e) {
          _this.phone = $(e.target).val();
          return true;
        }
      }); // onincomplete: (e) =>
      //     @phone = $(e.target).val()
      //     on

      return true;
    },
    data: function data() {
      return {
        phone: '',
        error: false
      };
    },
    methods: {
      submit: function submit() {
        if ($(this.$refs.input).inputmask('isComplete')) {
          this.$emit('submit', this.phone);
        } else {
          this.error = true;
        }

        return false;
      }
    }
  }; // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  TestFormSuccess = {
    template: "<div>\n    <div class=\"text-center\">\n        <h3 class=\"title mt-0\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0432\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0448\u043B\u0438 \u0442\u0435\u0441\u0442!</h3>\n        <p class=\"popup-title\">\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0441\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u0434\u043E\u043B\u0433\u0438</p>\n    </div>\n    <!--\n    <div class=\"row justify-content-center mt-4\">\n        <div class=\"col-12 col-sm-auto\">\n            <p class=\"text text-center\">\n                \u0410 \u043F\u043E\u043A\u0430 \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043D\u0430\u0448 \u0447\u0435\u043A \u043B\u0438\u0441\u0442: <br>\xAB\u041A\u0430\u043A \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441 \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438!\xBB\n            </p>\n        </div>\n        <div class=\"col-12 col-sm-auto\">\n            <span class=\"btn-test\" @click=\"$emit('checklist')\">\u0421\u041A\u0410\u0427\u0410\u0422\u042C \u0427\u0415\u041A-\u041B\u0418\u0421\u0422</span>\n        </div>\n    </div>\n    -->\n    <img @click.prevent=\"$emit('close')\" class=\"popup-close\" src=\"img/close.svg\">\n</div>"
  }; // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  TestFormEmail = {
    template: "<div>\n    <h3 class=\"popup-title\">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 Email \u0438 \u043C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0447\u0435\u043A \u043B\u0438\u0441\u0442 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443</h3>\n    <input\n        ref=\"input\"\n        v-model=\"email\"\n        :class=\"{error}\"\n        @focus=\"error = false\"\n        class=\"input\"\n        type=\"text\"\n        placeholder=\"Email\"\n    >\n    <p class=\"popup-desc\">\u0414\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \xAB\u0411\u0430\u043D\u043A\u0440\u043E\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\xBB</p>\n    <div class=\"row mt-4\">\n        <div class=\"col-12 col-sm-auto ml-auto\">\n            <span class=\"btn-test\" @click.prevent=\"submit\">\u041E\u0422\u041F\u0420\u0410\u0412\u0418\u0422\u042C</span>\n        </div><!-- /.col -->\n    </div>\n    <img @click.prevent=\"$emit('close')\" class=\"popup-close\" src=\"img/close.svg\">\n</div>",
    data: function data() {
      return {
        email: '',
        error: false
      };
    },
    methods: {
      submit: function submit() {
        if (this.validate) {
          this.$emit('submit', this.email);
        } else {
          this.error = true;
        }

        return false;
      }
    },
    computed: {
      validate: function validate() {
        var emailRe;
        emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRe.test(this.email);
      }
    }
  }; // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  TestFormEmailSucess = {
    template: "<div>\n    <div class=\"text-center\">\n        <h3 class=\"title mt-0\">\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u044B!</h3>\n        <p class=\"popup-title\">\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u044B \u0432\u044B\u0448\u043B\u0435\u043C \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B.</p>\n    </div>\n</div>",
    mounted: function mounted() {
      var _this2 = this;

      return this.delay(4000, function () {
        return _this2.$emit('close');
      });
    },
    methods: {
      delay: function delay(ms, cb) {
        return setTimeout(cb, ms);
      }
    }
  }; // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  TestForm = {
    template: "<div>\n    <questions\n        v-if=\"state === 1\"\n        @complete=\"questionsComplete\"\n    />\n    <phone\n        v-if=\"state === 2\"\n        @submit=\"phoneSubmit\"\n    />\n    <success\n        v-if=\"state === 3\"\n        @close=\"close\"\n        @checklist=\"state = 4\"\n    />\n    <email\n        v-if=\"state === 4\"\n        @close=\"close\"\n        @submit=\"emailSubmit\"\n    />\n    <esuccess\n        v-if=\"state === 5\"\n        @close=\"close(true)\"\n    />\n</div>",
    components: {
      'questions': TestFormQuestions,
      'phone': TestFormPhone,
      'success': TestFormSuccess,
      'email': TestFormEmail,
      'esuccess': TestFormEmailSucess
    },
    data: function data() {
      return {
        state: 1,
        comment: '',
        process: false,
        leadId: '',
        name: '',
        phone: '',
        email: '',
        createComplete: function createComplete() {}
      };
    },
    methods: {
      delay: function delay(ms, cb) {
        return setTimeout(cb, ms);
      },
      questionsComplete: function questionsComplete(items) {
        var item, j, len, ref, ref1;
        this.name = (ref = (ref1 = items[0]) != null ? ref1.value : void 0) != null ? ref : 'Не указан';

        for (j = 0, len = items.length; j < len; j++) {
          item = items[j];
          this.comment += "\n".concat(item.title, "\n").concat(item.value, "\n");
        }

        this.state = 2;
        return true;
      },
      sendLead: function sendLead() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var envyWBK, ref, result, urlParams;
        this.process = true;
        envyWBK = window.WBK;
        result = false;

        if ((envyWBK != null ? envyWBK.sendCrmLead : void 0) != null && 'function' === typeof envyWBK.sendCrmLead) {
          urlParams = new URLSearchParams(window.location.search);
          data['inbox_type_id'] = (ref = window.crmInboxTypeId) != null ? ref : '';
          data['utm_source'] = urlParams.get('utm_source');
          data['utm_medium'] = urlParams.get('utm_medium');
          data['utm_campaign'] = urlParams.get('utm_campaign');
          data['utm_content'] = urlParams.get('utm_content');
          data['utm_term'] = urlParams.get('utm_term');
          envyWBK.sendCrmLead(29349, data);

          if (typeof window.sendLeadSuccess === "function") {
            window.sendLeadSuccess();
          }

          result = true;
        }

        this.process = false;
        return result;
      },
      phoneSubmit: function phoneSubmit(phone) {
        var _this3 = this;

        this.phone = phone;
        this.state = 3;
        this.sendLead({
          name: "\u0414\u043E\u043B\u0433 ".concat(this.name),
          phone: this.phone,
          comment: this.comment
        });
        this.delay(3000, function () {
          return _this3.close(true);
        }); // @createComplete()

        return true;
      },
      updateAndEmail: function updateAndEmail() {
        var envyWBK, inbox_type_id, ref;
        envyWBK = window.WBK;

        if ((envyWBK != null ? envyWBK.sendCrmLead : void 0) != null && 'function' === typeof envyWBK.sendCrmLead) {
          inbox_type_id = (ref = window.crmInboxTypeId) != null ? ref : '';
          envyWBK.sendCrmLead(63239, {
            inbox_type_id: inbox_type_id,
            comment: 'На email клиента отправлен чек-лист «Как общаться с коллекторами!»',
            phone: this.phone,
            email: this.email
          });

          if (typeof window.ajaxTestSendSuccess === "function") {
            window.ajaxTestSendSuccess();
          }
        }

        this.process = false;
        return true;
      },
      emailSubmit: function emailSubmit(email) {
        var _this4 = this;

        this.email = email;
        this.state = 5;

        if (this.process) {
          this.createComplete = function () {
            return _this4.updateAndEmail();
          };
        } else {
          this.updateAndEmail();
        }

        return true;
      },
      close: function close() {
        var _this5 = this;

        var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        $(document).one('afterClose.fb', function (e) {
          if (reset) {
            _this5.state = 1;
            _this5.comment = '';
            _this5.process = false;
            _this5.leadId = '';
            _this5.email = '';

            _this5.createComplete = function () {};
          }

          return true;
        });
        $.fancybox.close(true);
        return true;
      }
    }
  }; // computed:
  //     isEnvy: ->
  //         envyWBK = window.WBK
  //         envyWBK?.sendCrmLead? and 'function' is typeof envyWBK.sendCrmLead
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  Vue.config.productionTip = false;
  $('.vue-test-form').each(function (i, el) {
    return new Vue({
      render: function render(h) {
        return h(TestForm);
      }
    }).$mount(el);
  });
  $('.js-fancybox-test').fancybox({
    closeExisting: false,
    keyboard: false,
    arrows: false,
    infobar: false,
    toolbar: false,
    buttons: [],
    modal: true
  }); // $.fancybox.open $('#test-form')
  // $.ajax
  //     type: 'GET'
  //     url: 'https://yandex.ru/uslugi/profile/OooBankrotKonsalt-102477'
  //     dataType: 'jsonp'
  // .done (data) ->
  //     console.log data

  true;
}).call(void 0);