
/*
 ** TODO 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 確認generateVersion.js中generate的link和script是正確的
 */

$(function () {
    /*
     ** TODO 電梯DATA ******************
     */
    // 左側電梯-活動-大小網
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1109123/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/69",
            "words": "滿萬抽千元券",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
            "words": "新會員送三好禮",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/69",
            "words": "萊爾富超取喝咖啡",
            "target": ""
        },
    ];

    // 左側電梯-活動-App
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1109121%2fm%2fapp.html&t=%e6%9d%b1%e6%a3%ae20%e9%80%b1%e5%b9%b4%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F69&t=%E6%9D%B1%E6%A3%AE10%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "滿萬抽千元券",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1107517%2fm%2fapp.html&t=APP%E6%96%B0%E6%9C%83%E5%93%A1%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
            "words": "新會員送三好禮",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1109124%2fm%2fapp.html&t=%e8%90%8a%e7%88%be%e5%af%8c%e8%b6%85%e5%8f%96%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "萊爾富超取喝咖啡",
            "target": ""
        },
    ];

    // 左側電梯-品牌-大小網
    var navContent_brand = [
        {
            "linkUrl": "https://www.etmall.com.tw/c1/107570",
            "words": "耳機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1109110/w/index.html",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/64075",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1113745/w/index.html",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/81150",
            "words": "服飾",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1113848/w/index.html",
            "words": "鞋包",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1113793/w/index.html",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113796/w/index.html",
            "words": "廚電",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/p/82712",
            "words": "日用",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/122223",
            "words": "運動",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/28821",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113748/w/index.html",
            "words": "旅遊",
            "target": ""
        },
    ];

    // 左側電梯-品牌-App
    var navContentApp_brand = [
        {
            "linkUrl": "etmall://open?pgid=8&sd=1&cd=107570",
            "words": "耳機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1109110%2fm%2fapp.html&t=3C%e9%80%9a%e8%a8%8a%e9%a4%a8",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=64075",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1113745%2fm%2fapp.html&t=%e4%bf%9d%e5%81%a5%e9%80%b1%e5%b9%b4%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=81150",
            "words": "服飾",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1113848%2fm%2fapp.html&t=1002%e6%b5%81%e8%a1%8c-%e9%9e%8b%e5%8c%85E%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "鞋包",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1113793%2fm%2fapp.html",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113796%2fm%2fapp.html&t=%e6%b0%a3%e7%82%b8%e9%8d%8b%e9%80%81%e5%a5%bd%e7%a6%ae%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "廚電",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=53&eid=82712",
            "words": "日用",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=9&sd=7&cd=122223",
            "words": "運動",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=8&cd=28821",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113748%2fm%2fapp.html",
            "words": "旅遊",
            "target": ""
        },
    ];
    // 電梯DATA  /.END

    /*
     ** 判斷左右兩邊電梯是否出現
     */
    var leftNav = true;
    var rightNav = true;
    if (!leftNav && !rightNav) return false;

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
    var $winWt = $(document).width();

    var $spWrap = $('#elevatorHome');

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
            else {
                // el.linkUrl += detectString;
                // newLink = el.linkUrl.replace('%3F', '?');
                // el.linkUrl;
                // console.log(navContentApp);
            }
        });

        navContent_brand.forEach(function (el, index) {
            el.linkUrl += '?linkNameEv' + (index + 20) + 'linkName';
        })
        navContentApp_brand.forEach(function (el, index) {
            var detectString = '%3FlinkNameEv' + (index + 20) + 'linkName';
            var newLink = '';
            // judge 是否為縮網址 TODO 共用主視覺未測
            var isNotAbbreviation = el.linkUrl.match("app.html");
            if (isNotAbbreviation) {
                newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
                el.linkUrl = newLink;
            }
        })
    }

    addLinkName();

    var url = window.location;
    var urlHref = url.href;
    var getSearch = urlHref.split("linkName")[1];
    /*
     ** 左邊電梯
     */
    function spScrollNav() {
        if (!leftNav) return false;

        var $spWrap = $('#elevatorHome');

        function buildNav(isAppNav, isAppNav_brand) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul js-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="回主會場" target="' + isAppNav[0].target + '">回主會場</a></li>';

            /*
             ** judge which url is active !!
             * 記得要在url後面加上?linkName="value"
             */
            // var url = window.location;
            // var urlHref = url.href;
            // var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' js-sp__nav__all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '" class="active">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' js-sp__nav__all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }

            /*
             ** 分館
             */
            navHtml += '<li class="sp-nav__home_2"><a href="">精選品類</a></li>';
            for (var i = 0; i < isAppNav_brand.length; i++) {
                // i=0，進迴圈一次跑兩個; i=1，時不執行
                if (i % 2 === 0) {
                    var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];
                    var getSearch3 = isAppNav_brand[i + 1].linkUrl.split("linkName")[1];
                    navHtml += '<li class="sp-nav__2' + i + ' js-sp__nav__all sp-nav_g2">';
                    isThisPage();
                    navHtml += '</li>';
                }
                // 抓取網址相同 && 自己的網址切割後不是空值

            }
            navHtml += '<li class="sp-nav__bottom"></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            elevatorHomeAddWhere();

            /*
             ** 跳到那一頁的時候看是哪一個URL，且亮燈
             */
            function isThisPage() {
                var first = isAppNav_brand[i];
                var second = isAppNav_brand[i + 1];
                if (getSearch === getSearch2 && getSearch2 != undefined) {
                    navHtml += clickActive(first, true);
                    navHtml += clickActive(second, false);
                }
                else if (getSearch === getSearch3 && getSearch3 != undefined) {
                    navHtml += clickActive(first, false);
                    navHtml += clickActive(second, true);
                }
                else {
                    navHtml += clickActive(first, false);
                    navHtml += clickActive(second, false);
                }
            }

            function clickActive(obj, active) {
                if (active) {
                    return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2 active">' + obj.words + '</a>';
                } else {
                    return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2">' + obj.words + '</a>';
                }
            }

            /*
             ** 電梯加在後面
             */
            function elevatorHomeAddWhere() {
                var parent = $('#elevatorHome');
                var body = $('body');
                // var tag = document.createElement('a');
                if (parent) {
                    parent.html(navHtml);
                } else {
                    body.html(navHtml);
                }
            }
        }

        function buildMobileNav(isAppNav, isAppNav_brand) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-1">';

            /*
             ** judge which url is active !!
             * 記得要在url後面加上?linkName="value"
             */
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' js-sp__nav__all sp-nav_g1 active"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' js-sp__nav__all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }

            navHtml += '</ul>';

            /*
             ** 分館
             */
            navHtml += '<p class="sp-nav__home_2">精選品類</p>';
            navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-2">';
            for (var i = 0; i < isAppNav_brand.length; i++) {
                // i=0，進迴圈一次跑兩個; i=1，時不執行

                var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch2 && getSearch2 != undefined) {
                    navHtml += '<li class="sp-nav__2' + i + ' js-sp__nav__all sp-nav_g2 active">\
                                <a href="' + isAppNav_brand[i].linkUrl + '" title="' + isAppNav_brand[i].words + '" target="' + isAppNav_brand[i].target + '" class="nav_bg2">' + isAppNav_brand[i].words + '</a>\
                                </li>';
                }
                else {
                    navHtml += '<li class="sp-nav__2' + i + ' js-sp__nav__all sp-nav_g2">\
                                <a href="' + isAppNav_brand[i].linkUrl + '" title="' + isAppNav_brand[i].words + '" target="' + isAppNav_brand[i].target + '" class="nav_bg2">' + isAppNav_brand[i].words + '</a>\
                                </li>';
                }

            }
            navHtml += '</ul>';
            navHtml += '</nav>';

            elevatorHomeAddWhere();

            /*
             ** 跳到那一頁的時候看是哪一個URL，且亮燈
             */
            function isThisPage() {
                var first = isAppNav_brand[i];
                var second = isAppNav_brand[i + 1];
                if (getSearch === getSearch2 && getSearch2 != undefined) {
                    navHtml += clickActive(first, true);
                    navHtml += clickActive(second, false);
                }
                else if (getSearch === getSearch3 && getSearch3 != undefined) {
                    navHtml += clickActive(first, false);
                    navHtml += clickActive(second, true);
                }
                else {
                    navHtml += clickActive(first, false);
                    navHtml += clickActive(second, false);
                }
            }

            function clickActive(obj, active) {
                if (active) {
                    return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2 active">' + obj.words + '</a>';
                } else {
                    return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2">' + obj.words + '</a>';
                }
            }

            /*
             ** 電梯加在後面
             */
            function elevatorHomeAddWhere() {
                var parent = $('#elevatorHome');
                var body = $('body');
                // var tag = document.createElement('a');
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
                buildMobileNav(navContentApp, navContentApp_brand);
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
            var $spWrap = $('#elevatorHome');
            var $spFixedNav = $('#spFixedNav');
            // desktop
            if ($winWt > $screenChangeWt) {
                buildNav(navContent, navContent_brand);
                resizeScrollTop();
            }
            // mobile
            else {
                buildMobileNav(navContent, navContent_brand);
            }
        }

        // 滾動效果(For desktop)
        function resizeScrollTop() {
            _document.on('scroll', function () {
                var $spFixedNav = $('#spFixedNav');
                // judge desktop移動距離
                function judgeScrollTop() {
                    if (_document.scrollTop() >= 300) {
                        $spFixedNav.css({
                            "pointer-events": ''
                        });
                        // $spWrap.find($spFixedNav).removeClass('sp-is--hide');
                    }
                    else {
                        // $spWrap.find($spFixedNav).addClass('sp-is--hide');
                    }
                }

                var $winWt = $(document).width();
                if ($winWt > $screenChangeWt) {
                    judgeScrollTop();
                }
            });
        }

        // output value
        initBuild();
        // 情境: 使用者手動伸縮大小網時
        var isScreenResize = true;
        $(window).resize(function () {
            $winWt = $(document).width();
            console.log($winWt);
            console.log(isScreenResize);
            if($winWt > $screenChangeWt && isScreenResize) {
                initBuild();
                $('#elevatorHome').css("display","block");
                isScreenResize = false;
            }
            else if($winWt <= $screenChangeWt) {
                isScreenResize = true;
            }
        });

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
        goTopEffect($spNavLastLi);

    }

    spScrollNav();
    // 左邊電梯  /.END

    /*
     ** 右邊電梯
     */
    function spScrollRightNav() {
        var arrSection = Array.apply(null, document.querySelectorAll("[data-title]"));
        var navHtml = '';

        navHtml += '<nav id="spRightNav" class="sp-right__nav">';
        navHtml += '<ul class="sp-nav-right_ul" id="spNavRightUl">';
        navHtml += '<li class="sp-bav_top_img"></li>';

        arrSection.forEach(function (el) {
            var valueEl = el.getAttribute("data-title");
            if (valueEl && valueEl !== "stop") {
                navHtml += ' <li class="sp-nav_right"><a href="#' + valueEl + '">' + valueEl + '</a></li>';
            }
        });

        navHtml += '<li class="sp-nav-right__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
        navHtml += '</ul>';
        navHtml += '</nav>';

        var parent = $('#navRightBar');
        var body = $('body');
        if (parent) {
            parent.html(navHtml);
        } else {
            body.html(navHtml);
        }
    }
    /*
     ** judge 是不是主會場，主會場出現右邊電梯(判定undefined是如果沒帶值時)
     */
    if(getSearch === "Ev1" || getSearch == undefined ) {
        spScrollRightNav();
    }
    // 右邊電梯  /.END

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
    function bindNav($winWt) {
        if (!rightNav) return false;

        var arrSection = Array.apply(null, document.querySelectorAll("[data-title]"));
        var arrTitle = [];
        var navClickItems = Array.apply(null, document.querySelectorAll('#spNavRightUl a'));
        var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var navBarHeight = document.querySelector(".sp-right__nav").offsetHeight + 2 || 41;
        var $winWt = $(document).width();
        var targetIndex = 0;


        // data-title each
        arrSection.forEach(function (el) {
            var valueEl = el.getAttribute("data-title");
            /*
             ** 如果data-title的值 1.有值 2.不等於stop 加入陣列
             */
            if (valueEl && valueEl !== "stop") {
                arrTitle.push(el);
            }
        });

        /*
         ** judge mobile 需加上navBar的高度
         */
        arrTitle.forEach(function (el, index) {
            if ($winWt > $screenChangeWt && docScrollTop - el.offsetTop >= 0) {
                targetIndex = index;
            }
            else if ($winWt <= $screenChangeWt && docScrollTop - el.offsetTop + navBarHeight >= 0) {
                targetIndex = index;
            }
        });

        /*
         ** 1.防呆 2.移除所有active 3.當下的加上active
         */
        if (targetIndex === -1) return;
        navClickItems.forEach(function (el) {
            el.classList.remove("active");
        });
        navClickItems[targetIndex].classList.add("active");
        /*
         ** active move in the screen middle, 一定要重新抓取document.width，不然會有拖曳螢幕大小時出現的錯誤
         */
        var moveLeft = $("#spRightNav li").width() || 90;
        if ($(".active").length) {
            //
            var offsetLeft = moveLeft * (targetIndex) - $winWt / 3;
            $("#spNavRightUl").stop().animate({
                scrollLeft: offsetLeft,
            });
        }
        // active move in the screen middle /.END

    }

    /*
     ** scroll 給點間隔時間去跑
     */
    $.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    $.throttle = function (func, wait) {
        var context, args, timeout, throttling, more, result;
        var whenDone = $.debounce(function () {
            more = throttling = false;
        }, wait);
        return function () {
            context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (more) func.apply(context, args);
                whenDone();
            };
            if (!timeout) timeout = setTimeout(later, wait);

            if (throttling) {
                more = true;
            } else {
                result = func.apply(context, args);
            }
            ;
            whenDone();
            throttling = true;
            return result;
        };
    };
    var bind__handler = $.throttle(function (e) {
        // window.addEventListener('load',bindNav);
        bindNav($winWt);
    }, 200);

    window.addEventListener('scroll', bind__handler);

    /*
     ** 點擊後移動對應的欄位
     */
    $(document).on("click", "#spNavRightUl .sp-nav_right a", function (e) {
        var $winWt = $(document).width();
        var _href = $(this).attr("href").substr(1);
        var toElem = $('[data-title="' + _href + '"]');
        var toActiveBtn = toElem.offset().top + 10;
        // 1212 watch css
        if ($winWt > $screenChangeWt) {
            $("html, body").animate({scrollTop: toActiveBtn});
        }
        else {
            $("html, body").animate({scrollTop: toActiveBtn - $("#spRightNav").height()});
        }
        return false;
    });
    // 滾動 END

    /*
     ** 左邊電梯 mobile 彈窗打開
     */
    var elevatoBtn_content = {
        "open": "精選會場",
        "close": "關閉",
    };
    $("body").append('<button class="elevator__mobile__btn" id="js-ElevatorBtn-m" data-dialog="elevatorHome">' + elevatoBtn_content.open + '</button>');

    var isClick = true;

    function doClick(e) {
        e.preventDefault();
        // 彈出視窗
        var $overlayEvents = $(this);
        var $body = $("body");
        var touchId = $(this).attr('data-dialog');
        var targetId = $(".js--main--dialog");
        var openButton = $("#js-ElevatorBtn-m");

        if (isClick) {
            initDialog();
            openButton.html(elevatoBtn_content.close);
            isClick = false;
        }
        else {
            $(".overlay-mask").hide();
            targetId.fadeOut(200).removeClass("overlay-open");
            openButton.html(elevatoBtn_content.open);
            SettingzIndex("", "");
            isClick = true;
        }

        function comparisonDialog() {
            targetId.each(function () {
                if (touchId == $(this).attr('id')) {
                    $(this).fadeIn(200).addClass("overlay-open");
                }
            });
        }

        function SettingzIndex(size, hidden) {
            $(".sp__visual").css("z-index", size);
            $("body").css("overflow", hidden);
        }

        function initDialog() {
            $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');
            comparisonDialog();
            SettingzIndex("1000", "hidden");
        }

        // .END 彈出視窗
    }

    $(document).on("click", "#js-ElevatorBtn-m", doClick);
    $(document).on("click", "#overlay-mask", doClick);


    /*
     ** 圖片時間戳更新
     */
    function generateImgVs() {
        var allImg = document.getElementsByTagName('img');
        var imgRegx = /\S+\.(jpg|png|gif)\b/i;
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        for (var i = 0; i < allImg.length; i++) {
            if (allImg[i].src.match(imgRegx)) {
                allImg[i].src = allImg[i].src + '?' + '0' + days + min
            }
        }
    }

    generateImgVs();
});
