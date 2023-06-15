;(function ($) {

    function buildVersion() {

        var $head = $('head');

        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="//www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1101148/sp-20170928.css?' + days + min + '" rel="stylesheet">');


        //var cssLink = $('<link type="text/css" href="css/sp-nav-fixed1206.css?' + days + min + '" rel="stylesheet">');
        //var cssSnowLink = $('<link type="text/css" href="css/snowfall.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);

        $head.append($.getScript("//www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1101148/sp-script20170928.js"));

        //$head.append($.getScript("js/sp-script1206.js"));

    }

    buildVersion();


} (jQuery));