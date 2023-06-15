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
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201911/SP_1113913/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/94",
            "words": "滿額抽2",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
            "words": "新會員",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/GroupSale",
            "words": "幸福集氣購",
            "target": ""
        },
        {
            "linkUrl": "",
            "words": "幸福集氣購1",
            "target": ""
        },
        {
            "linkUrl": "",
            "words": "幸福集氣購2",
            "target": ""
        },
        {
            "linkUrl": "",
            "words": "幸福集氣購3",
            "target": ""
        },
        {
            "linkUrl": "",
            "words": "幸福集氣購4",
            "target": ""
        },
    ];

    // 左側電梯-活動-App
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201911%2fSP_1113913%2fm%2fapp.html&t=%e9%9b%9911%e6%85%b6%e5%85%b8%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F94&t=11%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "滿額抽$1,212",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1107517%2fm%2fapp.html&t=APP%E6%96%B0%E6%9C%83%E5%93%A1%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
            "words": "新會員滿額送好禮",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC",
            "words": "幸福集氣購",
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
