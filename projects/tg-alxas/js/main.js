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
$('[data-view]').on('click', function (e) {
    var view = jQuery(e.currentTarget).data('view');
    jQuery('body').load("".concat(view, ".html"));
});
// if (typeof window.isWebApp === "boolean" && window.isWebApp) {
//     const view: string =  window.Telegram.WebApp.initDataUnsafe.start_param
//     const currentView = window.appView
//     if (typeof view === "string" && view !== '' && view !== currentView) {
//         $('body').load(`${view}-app.html`)
//     }
//     // if (typeof view === "string" && view !== '') {
//     //     jQuery.loa
//     // }
//     // const view: string =  window.Telegram.WebApp.initDataUnsafe.start_param
//     // if (typeof view === "string" && view !== '') {
//     //     jQuery.loa
//     // }
// }
