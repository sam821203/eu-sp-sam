// fixed nav effect
; (function ($) {
    var leftNav = true;
    var rightNav = true;
    if (!leftNav && !rightNav) return false;

    // 左側電梯-活動-大小網 TODO
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1109121/w/index.html",
            "words": "",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/69",
            "words": "滿萬抽千折價券",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/69",
            "words": "滿額抽200東森幣",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/69",
            "words": "萊爾富超取喝咖啡",
            "target": ""
        },
    ];

    // 左側電梯-活動-App TODO
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1109121%2fm%2fapp.html&t=%e6%9d%b1%e6%a3%ae20%e9%80%b1%e5%b9%b4%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F69&t=%E6%9D%B1%E6%A3%AE10%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "滿萬抽千折價券",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F69&t=%E6%9D%B1%E6%A3%AE10%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "滿額抽200東森幣",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F69&t=%E6%9D%B1%E6%A3%AE10%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "萊爾富超取喝咖啡",
            "target": ""
        },
    ];

    // 左側電梯-品牌-大小網 TODO
    var navContent_brand = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1109121/w/index.html",
            "words": "主場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113741/w/index.html",
            "words": "3C",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113747/w/index.html",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1109142/w/index.html",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1109144/w/index.html",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201910/SP_1113700/w/index.html",
            "words": "流行",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113744/w/index.html",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113743/w/index.html",
            "words": "婦幼",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113742/w/index.html",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113729/w/index.html",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1110567/w/index.html",
            "words": "運動",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1113746/w/index.html",
            "words": "旅遊",
            "target": ""
        },
    ];

    // 左側電梯-品牌-App TODO
    var navContentApp_brand = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1109121%2fm%2fapp.html&t=%e6%9d%b1%e6%a3%ae20%e9%80%b1%e5%b9%b4%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "主場",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113741%2fm%2fapp.html",
            "words": "3C",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113747%2fm%2fapp.html&t=%e6%96%b0%e6%a9%9f%e9%a7%95%e5%88%b0+%e6%8c%87%e5%ae%9a%e9%85%8d%e4%bb%b65%e6%8a%98up",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1109142%2fm%2fapp.html&t=%e7%be%8e%e5%a6%9d%e4%bf%9d%e9%a4%8a%e9%80%b1%e6%85%b65%e6%8a%98up%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1109144%2fm%2fapp.html&t=%e4%bf%9d%e5%81%a5%e9%80%b1%e5%b9%b4%e6%85%b6%e4%b8%8b%e6%ae%ba5%e6%8a%98UP+%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201910%2fSP_1113700%2fm%2fapp.html&t=%e6%ad%a1%e6%85%b620%e9%80%b1%e5%b9%b4%e6%85%b6+%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "流行",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113744%2fm%2fapp.html&t=%e5%82%a2%e9%bb%9e%e5%89%b5%e6%84%8f%e6%8f%9b%e5%ad%a3%e8%b6%a3%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113743%2fm%2fapp.html&t=%e6%9d%b1%e6%a3%ae20%e9%80%b1%e5%b9%b4%e6%85%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "婦幼",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113742%2fm%2fapp.html&t=%e9%a3%9b%e5%88%a9%e6%b5%a6+%e7%be%8e%e5%91%b3%e9%a3%9f%e5%85%89%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113729%2fm%2fapp.html&t=%e5%85%a8%e5%8f%b0%e5%8b%95%e5%93%a1+%e5%a4%a7%e5%8f%a3%e5%90%83%e8%82%89%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1110567%2fm%2fapp.html&t=%e9%9b%99%e5%8d%81%e6%9a%96%e8%ba%ab%e6%85%b6+%e5%85%a8%e9%a4%a85%e6%8a%98%e8%b5%b7%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "運動",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1113746%2fm%2fapp.html",
            "words": "旅遊",
            "target": ""
        },
    ];

    // 右側電梯 TODO
    var navRightContent = [
        {
            "linkUrl": "#a1",
            "words": "銀行回饋",
            "target": ""
        },
        {
            "linkUrl": "#a2",
            "words": "精選推薦",
            "target": ""
        },
        {
            "linkUrl": "#a3",
            "words": "超值活動",
            "target": ""
        },
        {
            "linkUrl": "#a4",
            "words": "手機新機",
            "target": ""
        },
        {
            "linkUrl": "#a5",
            "words": "直播神器",
            "target": ""
        },
        {
            "linkUrl": "#a6",
            "words": "美妝週慶",
            "target": ""
        },
        {
            "linkUrl": "#a7",
            "words": "敏鎬推薦",
            "target": ""
        },
        {
            "linkUrl": "#a8",
            "words": "嚴選美食",
            "target": ""
        },
        {
            "linkUrl": "#a9",
            "words": "清淨除溼",
            "target": ""
        },
        {
            "linkUrl": "#a10",
            "words": "愛迪達$790",
            "target": ""
        },
        {
            "linkUrl": "#a11",
            "words": "旅遊下殺",
            "target": ""
        },
    ];

    // TODO: final check -- 確認generateVersion.js中generate的link和script是正確的

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
    var $winWt = $(document).width();

    var $spWrap = $('#elevatorHome');

    var $spFixedNav = $('#spFixedNav');

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

    function spScrollNav() {
        var $spWrap = $('#elevatorHome');

        // 從linkData.js取得電梯連結的網址並加上偵測碼
        navContent.forEach(function (el, index) {
            el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
        })
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
        })

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

        function buildNav(isAppNav, isAppNav_brand) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="回主會場" target="' + isAppNav[0].target + '">回主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '" class="active">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }
            // TODO
            // navHtml += '</ul>';
            //
            // navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home_2"><a href="">精選品類</a></li>';
            for (var i = 0; i < isAppNav_brand.length; i++) {

                // i=0，進迴圈一次跑兩個; i=1，時不執行
                if (i % 2 === 0) {
                    var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];
                    var getSearch3 = isAppNav_brand[i + 1].linkUrl.split("linkName")[1];
                    navHtml += '<li class="sp-nav__2' + i + ' sp-nav_all sp-nav_g2">';
                    isThisPage();
                    navHtml += '</li>';
                }
                // 抓取網址相同 && 自己的網址切割後不是空值

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

            }
            navHtml += '<li class="sp-nav__bottom"></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            var parent = $('#elevatorHome');
            var body = $('body');
            // var tag = document.createElement('a');
            if (parent) {
                parent.html(navHtml);
            } else {
                body.html(navHtml);
            }
        }

        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildNav(navContentApp, navContentApp_brand);
                // $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // not app
            else {
                resizeInitPage();
                $(window).on('resize', resizeInitPage);
            }

        }

        // output value
        initBuild();

        function resizeInitPage() {
            var $winWt = $(document).width();
            var $spWrap = $('#elevatorHome');
            var $spFixedNav = $('#spFixedNav');
            // mobile
            if ($winWt < 1213) {
                buildNav(navContent, navContent_brand);
                // $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // desktop
            else {
                // buildNav(navContentDeskTop);
                buildNav(navContent, navContent_brand);
                // $spWrap.find($spFixedNav).addClass('sp-is--hide');
                resizeScrollTop();
            }
        }

        // 滾動效果(For 大網)
        function resizeScrollTop() {
            _document.on('scroll', function () {
                var $spFixedNav = $('#spFixedNav');
                // judge 大網移動距離
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
                if ($winWt >= 1213) {
                    judgeScrollTop();
                }
            });
        }

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
        goTopEffect($spNavLastLi);
    }

    spScrollNav();

    // 右邊錨點js
    function spScrollRightNav() {
        var $spWrap = $('#navRightBar');


        function buildRightNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spRightNav" class="sp-right__nav">';
            navHtml += '<ul class="sp-nav-right_ul" id="spNavRightUl">';
            navHtml += '<li class="sp-bav_top_img"></li>';

            for (var i = 0; i < isAppNav.length; i++) {
                navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
            }

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

        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildRightNav(navRightContent);
                // $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // not app
            else {
                resizeInitPage();
                $(window).on('resize', resizeInitPage);
            }

        }

        // output value
        initBuild();

        function resizeInitPage() {
            var $winWt = $(document).width();
            var $spWrap = $('#navRightBar');
            var $spRightNav = $('#spRightNav');
            // mobile
            if ($winWt < 1213) {
                buildRightNav(navRightContent);
                // $spWrap.find($('#spRightNav')).removeClass('sp-is--hide');
            }
            // desktop
            else {
                buildRightNav(navRightContent);
                // $spWrap.find($spRightNav).addClass('sp-is--hide');
            }
        }


        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#spRightNav li:last');
        goTopEffect($spNavLastLi);
    }

    spScrollRightNav();

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

    // 右邊錨點js END
    generateImgVs();

    // judge now which isClick
    $('.sp-nav_all > a').click(function () {
        $('.sp-nav_all a').removeClass('active');
        $(this).addClass('active');
    });

    // active move in the screen middle
    var $winWt = $(document).width();
    if ($('.active').length) {
        var offsetLeft = $('.active').offset().left - ($winWt / 2);
    }
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END


    // 滾動function
    function bindNav($winWt) {
        var arrSection = Array.apply(null, document.querySelectorAll("[data-title]"));
        var arrTitle = [];
        var navClickItems = Array.apply(null, document.querySelectorAll('#spNavRightUl a'));
        var docScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var navBarHeight = document.querySelector(".sp-right__nav").offsetHeight + 2 || 41;
        var targetIndex = 0;

        //
        arrSection.forEach(function (el) {
            var valueEl = el.getAttribute("data-title");

            if (valueEl && valueEl !== "stop") arrTitle.push(el);
        });

        //
        arrTitle.forEach(function (el, index) {

            if ($winWt > 1212 && docScrollTop - el.offsetTop >= 0) {
                targetIndex = index;
            }
            else if ($winWt <= 1212 && docScrollTop - el.offsetTop + navBarHeight >= 0) {
                targetIndex = index;
            }
        });


        if (targetIndex === -1) return;
        navClickItems.forEach(function (el) {
            el.classList.remove("active");
        });
        navClickItems[targetIndex].classList.add("active");

        // active move in the screen middle
        // var $winWt = $(document).width();
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

    //
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
        bindNav($winWt);
    }, 200);

    //

    window.addEventListener('scroll', bind__handler);

    //
    $(document).on("click", "#spNavRightUl .sp-nav_right a", function (e) {
        var _href = $(this).attr("href").substr(1);
        var toElem = $('[data-title="' + _href + '"]');
        var toTop = toElem.offset().top + 10;
        // 1212 watch css
        if ($winWt > 1212) {
            $("html, body").animate({ scrollTop: toTop });
        }
        else {
            $("html, body").animate({ scrollTop: toTop - $("#spRightNav").height() });
        }
        return false;
    });
    // 滾動 END
}(jQuery));
