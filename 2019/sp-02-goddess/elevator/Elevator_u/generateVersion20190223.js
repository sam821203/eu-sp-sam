;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/sp-20190223.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {
    // 正式
    // el.append($.getScript("https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/linkData.js"));
    el.append($.getScript("https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/sp-script20190223.js"));
}