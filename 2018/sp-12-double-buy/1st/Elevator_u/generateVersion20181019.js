;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1102593/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        // var cssLink = $('<link type="text/css" href="https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103334/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {
    el.append($.getScript("https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1102593/sp-script20181019.js"));

    // el.append($.getScript("https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1103334/sp-script20181019.js"));
}