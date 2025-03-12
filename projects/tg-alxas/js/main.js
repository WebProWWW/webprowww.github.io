var Tab = /** @class */ (function () {
    function Tab($tab) {
        var $btns = $tab.find('[data-tab-btn]');
        var $contents = $tab.find('[data-tab-content]');
        $btns.on('click', function (e) {
            var target = jQuery(e.currentTarget);
            var id = target.data('tab-btn');
            $btns.removeClass('active');
            target.addClass('active');
            $contents.removeClass('active');
            jQuery(id).addClass('active');
        });
    }
    return Tab;
}());
var Faq = /** @class */ (function () {
    function Faq($faq) {
        var $q = $faq.find('[data-faq-q]');
        var $a = $faq.find('[data-faq-a]');
        var $active = $faq.find('[data-faq-active]');
        $q.on('click', function () {
            $active.toggleClass('active');
            $a.stop();
            $a.slideToggle(300);
        });
    }
    return Faq;
}());
jQuery('[data-tab]').each(function (i, el) { new Tab(jQuery(el)); });
jQuery('[data-faq]').each(function (i, el) { new Faq(jQuery(el)); });
jQuery('[data-payment-status]').on('click', function () {
    jQuery('#payment-status-popup').removeClass('d-none').one('click', function (e) {
        jQuery(e.currentTarget).addClass('d-none');
    });
});
