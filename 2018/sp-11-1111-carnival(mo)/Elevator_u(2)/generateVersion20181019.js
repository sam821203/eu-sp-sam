;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103042/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        $head.append($.getScript("https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103042/sp-script20181019.js"));
    }
    buildVersion();
} (jQuery));