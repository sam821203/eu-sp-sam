;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="http://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/sp-20180425.css?' + days + min + '" rel="stylesheet">');
        
        $head.append(cssLink);
        $head.append($.getScript("http://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/sp-script20180425.js"));
    }
    buildVersion();
} (jQuery));