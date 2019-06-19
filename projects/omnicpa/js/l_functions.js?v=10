(function($) {

    var detectedGEOCity = '';

    var popupConfig = {
        wrapCSS: 'fancybox-popup',
        padding: ['0','0','0','0'],
        scrolling: 'visible',
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            overlay: {
                css: {'background': 'url(/img/overlay.png) repeat' }
            }
        }
    };

    var ajaxRetryConfig = {
        tryCount : 0,
        retryLimit : 3,
        retryDelay: 3000,
        success : function(json) {},
        error : function(xhr, textStatus, errorThrown ) {
            this.tryCount++;
            if (this.tryCount < this.retryLimit) {
                setTimeout(function(_this){
                    $.ajax(_this)
                }, this.retryDelay, this)
                return;
            }
        }
    }

    var methods = {
        init:function() {
            $(".ps-dial-lg").knob();
            $(".ps-dial-sm").knob();
            if ($('.popup-open').length)
            {
                $('.popup-open').fancybox(popupConfig);
            }
            if($('.popup-close').length)
            {
                $('.popup-close').on('click', function(e){
                    $.fancybox.close(true);
                    e.preventDefault();
                });
            }
        },

        fancyboxPopupRun:function(obj) {
            if (obj.length)
            {
                $.fancybox(obj, popupConfig);
            }
        },
        detectGEOCity:function(callback, ip){
            if(detectedGEOCity == 'busy')
            {
                var count = 0;
                var interval = setInterval(function(){
                    if(detectedGEOCity && detectedGEOCity != 'busy'){
                        callback(detectedGEOCity);
                        clearInterval(interval);
                    } else if(count > 30) {
                        clearInterval(interval);
                    }
                    count++;
                }, 100);
            }
            else if(detectedGEOCity)
            {
                callback(detectedGEOCity);
            }
            else
            {
                detectedGEOCity = 'busy';
                jQuery.ajax ({
                    type: "GET",
                    url: "http://ipgeobase.ru:7020/geo/?ip=" + ip,
                    dataType: "xml",
                    success: function(xml) {
                        var region = jQuery(xml).find('city').text();
                        var country = jQuery(xml).find('country').text();
                        if(region)
                        {
                            detectedGEOCity = region;
                            callback(region);
                        }
                        else
                        {
                            switch (country) {
                                case 'KZ': detectedGEOCity = "Астана"; break;
                                default: detectedGEOCity = "Москва";
                            }
                        }
                        callback(detectedGEOCity);
                    },
                    error: function() {
                        detectedGEOCity = "Москва";
                        callback(detectedGEOCity);
                    }
                });
            }
        },
        sendWStat:function(){
            if(window.screen)
            {
                var conf = jQuery.extend({
                    url: "/wStat",
                    type: "POST",
                    data: {width: window.screen.width}
                }, ajaxRetryConfig);
                $.ajax(conf);
            }
        },
        sendAddInfo:function(data){
            var conf = jQuery.extend({
                url: "/addInfo",
                type: "GET",
                data: data
            }, ajaxRetryConfig);
            $.ajax(conf);
        },
        sendAddStat:function(success){
            var conf = jQuery.extend({
                url: "/addStat",
                type: "GET"
            }, ajaxRetryConfig);
            conf.success = success;
            $.ajax(conf);
        },
        sendGetP:function(success){
            var conf = jQuery.extend({
                url: "/getP",
                type: "POST"
            }, ajaxRetryConfig);
            conf.success = success;
            $.ajax(conf);
        },
        detectTimezone:function(){
            if(
                typeof Intl != 'undefined' &&
                typeof Intl.DateTimeFormat != 'undefined'
            ){
                var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if(timezone)
                {
                   return timezone;
                }
            }
            return false;
        }
    };
    $.fn.lpFunctions = function(method){
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            console.log( 'Метод "' +  method + '" не найден в плагине lpFunctions' );
        }
    };
})(jQuery);

$(function(){
    $('body').lpFunctions();
});









