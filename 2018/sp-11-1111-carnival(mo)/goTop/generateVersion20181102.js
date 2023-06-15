;(function ($) {
    function buildVersion() {
        var $head = $('head');
        // var now = new Date()
        // var days = now.getDate();
        // var min = now.getMinutes();

        var fontAwesomeLink = $('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">');
        var cssLink = $('<link type="text/css" href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106349/goTop-20181102.css?' + '" rel="stylesheet">');

        $head.append(fontAwesomeLink);
        $head.append(cssLink);
        $head.append($.getScript("https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106349/goTop-script20181102.js"));
    }
    buildVersion();
} (jQuery));

