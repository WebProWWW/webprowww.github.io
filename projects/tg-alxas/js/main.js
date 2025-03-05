var Tab = /** @class */ (function () {
    function Tab($tab) {
        var _this = this;
        this.$_tab = $tab;
        this.$_btns = $tab.find('[data-tab-btn]');
        this.$_contents = $tab.find('[data-tab-content]');
        this.$_btns.on('click', function (e) {
            var target = jQuery(e.currentTarget);
            var id = target.data('tab-btn');
            _this.$_btns.removeClass('active');
            target.addClass('active');
            _this.$_contents.removeClass('active');
            jQuery(id).addClass('active');
        });
    }
    return Tab;
}());
jQuery('[data-tab]').each(function (i, el) {
    new Tab(jQuery(el));
});
if (typeof window.isWebApp === "boolean" && window.isWebApp) {
    var view = window.Telegram.WebApp.initDataUnsafe.start_param;
    var currentView = window.appView;
    if (typeof view === "string" && view !== '' && view !== currentView) {
        $('body').load("".concat(view, "-app.html"));
    }
    // if (typeof view === "string" && view !== '') {
    //     jQuery.loa
    // }
    // const view: string =  window.Telegram.WebApp.initDataUnsafe.start_param
    // if (typeof view === "string" && view !== '') {
    //     jQuery.loa
    // }
}
