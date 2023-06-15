/*
 ** TODO 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 確認generateVersion.js中generate的link和script是正確的
 */

$(function () {
    /*
     ** TODO 電梯DATA ******************
     */
    // 左側電梯-活動-大網
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115832/w/index.html",
            "words": "台中購物節",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115833/w/index.html",
            "words": "買一送一",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115834/w/index.html",
            "words": "台中之最<br>限時必選",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115838/w/index.html",
            "words": "玩樂購物<br>一應俱全",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115839/w/index.html",
            "words": "健康台中<br>活力十足",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115840/w/index.html",
            "words": "尋味台中<br>農產最讚",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115841/w/index.html",
            "words": "旅居台中<br>一遊未盡",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202007/SP_1115842/w/index.html",
            "words": "食在好味<br>美食首都",
            "target": ""
        },
    ];

    // 左側電梯-活動-App
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115832%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "台中購物節",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115833%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e8%a1%97_%e8%b2%b7%e4%b8%80%e9%80%81%e4%b8%80%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "買一送一",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115834%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e5%8f%b0%e4%b8%ad%e4%b9%8b%e6%9c%80%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "台中之最<br>限時必選",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115838%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e7%8e%a9%e6%a8%82%e8%b3%bc%e7%89%a9%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "玩樂購物<br>一應俱全",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115839%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e5%81%a5%e5%ba%b7%e5%8f%b0%e4%b8%ad%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "健康台中<br>活力十足",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115840%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e5%b0%8b%e5%91%b3%e5%8f%b0%e4%b8%ad%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "尋味台中<br>農產最讚",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115841%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e6%97%85%e5%b1%85%e5%8f%b0%e4%b8%ad%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "旅居台中<br>一遊未盡",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202007%2fSP_1115842%2fm%2fapp.html&t=%e5%8f%b0%e4%b8%ad%e8%b3%bc%e7%89%a9%e7%af%80_%e5%8f%b0%e4%b8%ad%e9%a3%9f%e5%9c%a8%e5%a5%bd%e5%91%b3%e9%81%93%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "食在好味<br>美食首都",
            "target": ""
        },
    ];

    /*
     ** 判斷左右兩邊電梯是否出現
     */
    var leftNav = false;
    var rightNav = true;
    if (!leftNav && !rightNav) return false;

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
    var $winWt = $(document).width();

    var $spWrap = $('#navRightBar');

    var $spFixedNav = $('#spFixedNav');
    // 配合css 決定大小網寬度
    var $screenChangeWt = 1212;

    var goTopEffect = function (selectors) {
        selectors.on('click', function (e) {
            e.preventDefault();
            $htmlBody.animate({
                scrollTop: 0
            }, 300);
        });
    }

    function addLogo() {
        var $spWrap = $('#spWrap');
        var $spFrame = $spWrap.find('.sp--frame');
        var logo = '<a class="logo__sp" href="//www.etmall.com.tw/" target="_blank"></a>'
        $spFrame.append(logo);
    }

    function addSnow() {
        var $spWrap = $('#spWrap');
        var $spFrame = $spWrap.find('.sp--frame');
        var snowEl = '<div id="spSnowFall" class="sp-snow__wrap"></div>'
        $spFrame.append(snowEl);
    }

    /*
     ** 增加參數
     */
    function addLinkName() {
        // 從linkData.js取得電梯連結的網址並加上偵測碼 目的:判斷是哪一頁
        navContent.forEach(function (el, index) {
            el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
        });
        navContentApp.forEach(function (el, index) {
            var detectString = '%3FlinkNameEv' + (index + 1) + 'linkName';
            var newLink = '';
            // judge 是否為縮網址 TODO 共用主視覺未測
            var isNotAbbreviation = el.linkUrl.match("app.html");
            if (isNotAbbreviation) {
                newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
                el.linkUrl = newLink;
            }
        });

    }

    addLinkName();

    var url = window.location;
    var urlHref = url.href;
    var getSearch = urlHref.split("linkName")[1];

    /*
     ** 右邊電梯
     */
    function spScrollRightNav() {

        var $spWrap = $('#navRightBar');

        function buildNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spRightNav" class="sp-right__nav">';
            navHtml += '<ul class="sp-nav-right_ul js-nav_ul" id="spNavRightUl">';
            navHtml += '<li class="sp-bav_top_img"></li>';

            /*
             ** judge which url is active !!
             * 記得要在url後面加上?linkName="value"
             */
            // var url = window.location;
            // var urlHref = url.href;
            // var getSearch = urlHref.split("linkName")[1];
            for (var i = 0; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' sp__nav__all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '" class="active">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp__nav__all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }


            navHtml += '<li class="sp-nav-right__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            elevatorHomeAddWhere();

            /*
             ** 電梯加在後面
             */
            function elevatorHomeAddWhere() {
                var parent = $('#navRightBar');
                var body = $('body');
                if (parent) {
                    parent.html(navHtml);
                } else {
                    body.html(navHtml);
                }
            }
        }


        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildNav(navContentApp);
            }
            // not app
            else {
                // is desktop | mobile
                resizeInitPage();
                $(window).on('resize', resizeInitPage);
            }

        }

        function resizeInitPage() {
            var $winWt = $(document).width();
            var $spWrap = $('#navRightBar');
            var $spRightNav = $('#spRightNav');
            // desktop
            if ($winWt > $screenChangeWt) {
                buildNav(navContent);
            }
            // mobile
            else {
                buildNav(navContent);
            }
        }


        // output value
        initBuild();

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#navTop');
        goTopEffect($spNavLastLi);

    }

    spScrollRightNav();
    // judge now which isClick
    $('.js-sp__nav__all > a').click(function () {
        $('.js-sp__nav__all a').removeClass('active');
        $(this).addClass('active');
    });

    // active move in the screen middle
    var $winWt = $(document).width();
    if ($('.active').length) {
        var offsetLeft = $('.active').offset().left - ($winWt / 2);
    }
    $('.js-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle

    /*
     ** 滾動function
     */
});
