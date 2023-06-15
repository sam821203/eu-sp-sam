;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1104292/sp-20180425.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        $head.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1104292/sp-script20180425.js"));
    }
    buildVersion();
} (jQuery));