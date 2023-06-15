;(function ($) {

    function buildVersion() {

        var $head = $('head');

        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="http://www.u-mall.com.tw/XML/content/DMSetting/Final/201509/SP_1021444/css/sp-nav-fixed0109.css?' + days + min + '" rel="stylesheet">');
        //var cssSnowLink = $('<link type="text/css" href="http://www.u-mall.com.tw/XML/content/DMSetting/Final/201509/SP_1021444/css/snowfall.css?' + days + min + '" rel="stylesheet">');

        //var cssLink = $('<link type="text/css" href="css/sp-nav-fixed1206.css?' + days + min + '" rel="stylesheet">');
        //var cssSnowLink = $('<link type="text/css" href="css/snowfall.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);

        $head.append($.getScript("http://www.u-mall.com.tw/XML/content/DMSetting/Final/201509/SP_1021444/js/sp-script0109.js"));

        //$head.append($.getScript("js/sp-script1206.js"));

    }

    buildVersion();


} (jQuery));