;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108562/middleBeltV1.css?' + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {
    // 正式
    el.append('<script type="text/javascript" src="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108562/indexDataV1.js"></script>');
    el.append('<script type="text/javascript" src="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1108562/middleBeltV1.js"></script>');
    // el.append($.getScript("middleBeltV1.js"));
}