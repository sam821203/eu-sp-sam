;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106234/sp-20181019.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);
        initBuild($head);
    }
    buildVersion();
} (jQuery));

function initBuild(el) {
    // 判斷 app-view | web-view
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

    // app ? not app
    if (isUiWebview) {
        el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106290/sp-script20181019.js"));
    }
    else {
        el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106234/sp-script20181019.js"));
    }
}