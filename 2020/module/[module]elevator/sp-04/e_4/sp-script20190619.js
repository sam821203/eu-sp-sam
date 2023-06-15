/*
 ** TODO: 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 確認generateVersion.js中generate的link和script是正確的
 */

$(function () {
    /*
     ** TODO: 電梯DATA ******************
     */
    // 左側電梯-活動-大網
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115132/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/CollectPointExchange",
            "words": "集點加價購",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
            "words": "新會員抽",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/GroupSale",
            "words": "幸福集氣購",
            "target": ""
        },
    ];
    // 左側電梯-活動-小網
    var navContent_m = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115132/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/CollectPointExchange",
            "words": "集點加價購",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
            "words": "新會員抽改送",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/GroupSale",
            "words": "幸福集氣購",
            "target": ""
        },
    ];

    // 左側電梯-活動-App
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115132%2fm%2fapp.html&t=%e6%84%9b%e5%91%a6%ef%bc%81%e6%88%91%e7%9a%84%e5%aa%bd%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FCollectPointExchange&t=%E9%9B%86%E9%BB%9E%E5%8A%A0%E5%83%B9%E8%B3%BC",
            "words": "集點加價購",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1107517%2fm%2fapp.html&t=APP%E6%96%B0%E6%9C%83%E5%93%A1%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
            "words": "新會員抽改送",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FGroupSale&t=%E5%B9%B8%E7%A6%8F%E9%9B%86%E6%B0%A3%E8%B3%BC",
            "words": "幸福集氣購",
            "target": ""
        },
    ];

    // 左側電梯-品牌-大小網
    var navContent_brand = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115286/w/index.html",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115252/w/index.html",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115303/w/index.html",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115313/w/index.html",
            "words": "冷氣",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1120016/w/index.html",
            "words": "流行",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115273/w/index.html",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115301/w/index.html",
            "words": "3C",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/202004/SP_1115257/w/index.html",
            "words": "旅遊",
            "target": ""
        },
    ];

    // 左側電梯-品牌-App
    var navContentApp_brand = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115286%2fm%2fapp.html&t=0427-0511_%e7%be%8e%e5%a6%9d%e6%84%9b%e5%91%a6%e6%88%91%e7%9a%84%e5%aa%bd%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115252%2fm%2fapp.html",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115303%2fm%2fapp.html&t=%e4%bf%9d%e5%81%a5%ef%bd%9c%e6%84%9b%e5%aa%bd%e5%92%aa5%e6%8a%98%e8%b5%b7%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115313%2fm%2fapp.html&t=%e5%86%b7%e6%b0%a3%e5%86%b0%e7%ae%b1%e6%b4%97%e8%a1%a3%e6%a9%9f%e4%b8%8b%e6%ae%ba%e6%90%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "冷氣",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1120016%2fm%2fapp.html&t=%e6%84%9b%e5%91%a6%e6%88%91%e7%9a%84%e5%aa%bd-%e6%b5%81%e8%a1%8c%e5%88%86%e6%9c%83%e5%a0%b4%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "流行",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115273%2fm%2fapp.html&t=%e9%80%9a%e8%a8%8a",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115301%2fm%2fapp.html",
            "words": "3C",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202004%2fSP_1115257%2fm%2fapp.html",
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

            // navHtml += '<div class="sp-fixed__nav_outframe">';
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
            navHtml += '<p class="sp-nav__home__mobile"><a href="' + isAppNav[0].linkUrl + '" title="回主會場" target="' + isAppNav[0].target + '">主會場</a></p>';
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
            // navHtml += '<p class="sp-nav__home_2">精選品類</p>';
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
                buildMobileNav(navContent_m, navContent_brand);
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
            if ($winWt > $screenChangeWt && isScreenResize) {
                initBuild();
                $('#elevatorHome').css("display", "block");
                isScreenResize = false;
            }
            else if ($winWt <= $screenChangeWt) {
                $('#elevatorHome').css("display", "none");
                isScreenResize = true;
            }
        });


    }

    spScrollNav();
    // 左邊電梯  /.END

    /*
     ** 右邊電梯
     */
    function spScrollRightNav() {
        var arrSection = Array.apply(null, document.querySelectorAll("[data-title]"));
        var navHtml = '';
        var arrDataGroup = [];
        var $spWrapRight = $('#navRightBar');

        navHtml += '<nav id="spRightNav" class="sp-right__nav">';
        navHtml += '<ul class="sp-nav-right_ul" id="spNavRightUl">';
        navHtml += '<li class="sp-bav_top_img"></li>';

        arrSection.forEach(function (el) {
            var valueEl = el.getAttribute("data-title");
            if (valueEl && valueEl !== "stop") {
                navHtml += ' <li class="sp-nav_right"><a href="#' + valueEl + '">' + valueEl + '</a></li>';
                arrDataGroup.push(valueEl);
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

        /*
         ** judge 如果沒有值 右邊電梯隱藏
         */
        var result = arrDataGroup.filter(function (word) {
            return word && word.trim();
        })
        if (result.length == 0) {
            document.getElementById('navRightBar').style.display = 'none';
        }


        // last li contact 'top'
        var $spNavLastLi = $spWrapRight.find('#navTop');
        goTopEffect($spNavLastLi);
    }

    /*
     ** judge 是不是主會場，主會場出現右邊電梯(判定undefined是如果沒帶值時)
     */
    if (getSearch === "Ev1" || getSearch == undefined) {
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
            $(".overlay-mask").remove();
            targetId.fadeOut(200).removeClass("overlay-open");
            openButton.html(elevatoBtn_content.open);
            // 拿掉可以做到直接點開，但body會是fixed
            // SettingzIndex("", "relative", "", "");
            isClick = true;
        }

        function comparisonDialog() {
            targetId.each(function () {
                if (touchId == $(this).attr('id')) {
                    $(this).fadeIn(200).addClass("overlay-open");
                }
            });
        }

        function SettingzIndex(size, hidden, position, overflow) {
            $(".sp__visual").css("z-index", size);
            $('html, body').css({
                "overflow-y": overflow,
                "top": position,
                "right": position,
                "left": position,
                "bottom": position,
                "position": hidden
            });
        }

        function initDialog() {
            $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');
            comparisonDialog();
            SettingzIndex("1000", "fixed", "0", "scroll");
        }

        // .END 彈出視窗
    }

    $(document).on("click", "#js-ElevatorBtn-m", doClick);
    $(document).on("click", "#overlay-mask", doClick);


    if (!leftNav) {
        $('.elevator__mobile__btn').remove();
    }

    /*
     ** 圖片時間戳更新
     */
    // function generateImgVs() {
    //     var allImg = document.getElementsByTagName('img');
    //     var imgRegx = /\S+\.(jpg|png|gif)\b/i;
    //     var now = new Date()
    //     var days = now.getDate();
    //     var min = now.getMinutes();
    //
    //     for (var i = 0; i < allImg.length; i++) {
    //         if (allImg[i].src.match(imgRegx)) {
    //             allImg[i].src = allImg[i].src + '?' + '0' + days + min
    //         }
    //     }
    // }
    //
    // generateImgVs();
});
