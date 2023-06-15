;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1105567/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        // 測試
        // var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106595/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {

    // 正式
    el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1105567/sp-script20181019.js"));

    // 測試
    // el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106595/sp-script20181019.js"));
}