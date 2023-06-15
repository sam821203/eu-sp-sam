;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式 TODO 修改為絕對路徑
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108564/middleBeltV2.css?' + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {
    // 正式 TODO 修改為絕對路徑
    el.append('<script type="text/javascript" src="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108564/indexDataV2.js"></script>');
    // el.append('<script type="text/javascript" src="middleBeltV2.js"></script>');
    el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108564/middleBeltV2.js"));
}