// TODO: 確認單雙月來源網址
;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209906/SP_1115830/sp-20190619.css?' + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }

    buildVersion();
}(jQuery));

function initBuild(el) {

    // 正式
    el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209906/SP_1115830/sp-script20190619.js"));

}