//- TODO: 確認單雙月來源網址
//- 單月
//- E: https://media.etmall.com.tw/sp/7658/
//- U: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1101787/
//- 第二組
//- E Second: https://media.etmall.com.tw/sp/7660/

// 雙月
//- E: https://media.etmall.com.tw/sp/7659/
//- U: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1102593/
//- 第二組
//- E Second: https://media.etmall.com.tw/sp/7661/

//- SP
//- E: https://www.u-mall.com.tw/XML/content/DMSetting/Final/209901/SP_1114026/

;(function ($) {
    function buildVersion() {
        var $head = $('head');
        var now = new Date()
        var month = now.getMonth() + 1;
        var days = now.getDate();
        var min = now.getMinutes();

        // 正式
        var cssLink = $('<link type="text/css" href="https://media.etmall.com.tw/sp/7661/sp-20190619.css?' + month + days + min + '" rel="stylesheet">');


        $head.append(cssLink);
        initBuild($head);
    }

    buildVersion();
}(jQuery));

function initBuild(el) {

    // 正式
    el.append($.getScript("https://media.etmall.com.tw/sp/7661/sp-script20190619.js"));

}