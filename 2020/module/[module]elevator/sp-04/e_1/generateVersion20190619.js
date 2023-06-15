//- TODO: 確認單雙月來源網址
//- 單月
//- E: https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1104292/index.html
//- U: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/index.html

// 雙月
//- E: https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1105567/index.html
//- U: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1102593/index.html

//- 第二組
//- E Second: https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1114696/index.html
//- U Second: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1114697/index.html

//- SP
//- E: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1114026/index.html

;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1105567/sp-20190619.css?' + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }

    buildVersion();
}(jQuery));

function initBuild(el) {

    // 正式
    el.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1105567/sp-script20190619.js"));

}