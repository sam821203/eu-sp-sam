;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1104292/sp-20190619.css?' + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }

    buildVersion();
}(jQuery));

function initBuild(el) {

    // 正式
    el.append($.getScript("https://hammerjs.github.io/dist/hammer.js", function () {
        el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1104292/sp-script20190619.js"));
    }));

}