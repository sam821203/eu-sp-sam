// fixed nav effect
;(function ($) {
    // 左側電梯-活動-大小網 TODO
    var navContent = [
        {
            "linkUrl": "#",
            "words": "秋禮巨獻",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/Activity/Reg/54",
            "words": "滿額抽$999",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html",
            "words": "新會員豪禮送",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1109019/w/index.html",
            "words": "萊爾富店取吃冰棒",
            "target": ""
        },
    ];

    // 左側電梯-活動-App TODO
    var navContentApp = [
        {
            "linkUrl": "#",
            "words": "秋禮巨獻",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F54&t=9%E6%9C%88%E4%BB%BD%E7%99%BB%E9%8C%84%E8%A1%A8%E5%96%AE",
            "words": "滿額抽$999",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1107517%2fm%2fapp.html&t=APP%E6%96%B0%E6%9C%83%E5%93%A1%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
            "words": "新會員豪禮送",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1109019%2fm%2fapp.html&t=%e8%90%8a%e7%88%be%e5%af%8c%e8%b6%85%e5%8f%96%e6%b4%bb%e5%8b%95%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "萊爾富店取吃冰棒",
            "target": ""
        },
    ];

    // 左側電梯-品牌-大小網 TODO
    var navContent_brand = [
        {
            "linkUrl": "https://www.etmall.com.tw/c1/107570",
            "words": "耳機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108626/w/index.html",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/64075",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/29080",
            "words": "美肌",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/80626",
            "words": "服飾",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/80116",
            "words": "精品",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1108958/w/index.html",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1108963/w/index.html",
            "words": "冰箱",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201909/SP_1108951/w/index.html",
            "words": "日用",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108898/w/index.html",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108887/w/index.html",
            "words": "運休",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108869/w/index.html",
            "words": "旅展",
            "target": ""
        },
    ];

    // 左側電梯-品牌-App TODO
    var navContentApp_brand = [
        {
            "linkUrl": "etmall://open?pgid=8&sd=1&cd=107570",
            "words": "耳機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108626%2fm%2fapp.html&t=%e9%80%9a%e8%a8%8a%e9%a4%a8%e5%b0%88%e5%b1%ac%e6%b4%bb%e5%8b%95%e9%a0%81%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "手機",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=64075",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=9&sd=館ID&cd=29080",
            "words": "美肌",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=80626",
            "words": "服飾",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=80116",
            "words": "精品",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F201909%2FSP_1108958%2Fm%2Fapp.html",
            "words": "家電",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1108963%2fm%2fapp.html&t=%e5%9c%8b%e9%9a%9b%e6%bb%bf%e9%a1%8d%e6%8a%bd%e9%a4%90%e5%88%b8%e6%b0%a3%e7%82%b8%e9%8d%8b%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "冰箱",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201909%2fSP_1108951%2fm%2fapp.html&t=%e5%8c%97%e6%ad%90%e6%94%b6%e7%b4%8dE%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "日用",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108898%2fm%2fapp.html&t=%e6%be%8e%e6%b9%83%e4%b8%ad%e5%85%83%e5%85%84%e5%bc%9f%e9%96%8b%e5%90%83%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "美食",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108887%2fm%2fapp.html&t=%e4%ba%ab%e8%b3%bc%e6%9c%88%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "運休",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108869%2fm%2fapp.html",
            "words": "旅展",
            "target": ""
        },
    ];

    // 右側電梯 TODO
    var navRightContent = [
        {
            "linkUrl": "#a1",
            "words": "獨家合作",
            "target": ""
        },
        {
            "linkUrl": "#a2",
            "words": "中秋月圓團圓",
            "target": ""
        },
        {
            "linkUrl": "#a3",
            "words": "銀行強檔回饋",
            "target": ""
        },
        {
            "linkUrl": "#a4",
            "words": "秋賞獻禮",
            "target": ""
        },
        {
            "linkUrl": "#a5",
            "words": "優選活動",
            "target": ""
        },
        {
            "linkUrl": "#a6",
            "words": "ACER好禮",
            "target": ""
        },
        {
            "linkUrl": "#a7",
            "words": "手機送禮",
            "target": ""
        },
        {
            "linkUrl": "#a8",
            "words": "初秋保養",
            "target": ""
        },
        {
            "linkUrl": "#a9",
            "words": "紅薑黃",
            "target": ""
        },
        {
            "linkUrl": "#a10",
            "words": "內著激降",
            "target": ""
        },
        {
            "linkUrl": "#a11",
            "words": "大金送禮",
            "target": ""
        },
        {
            "linkUrl": "#a12",
            "words": "中秋烤肉",
            "target": ""
        },
        {
            "linkUrl": "#a13",
            "words": "秋季旅展",
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

    // 滾動effect
    var myElement = document.body;
    var mc = new Hammer(myElement);

    mc.get('pan').set({direction: Hammer.DIRECTION_ALL});

    mc.on("panleft panright panup pandown tap press", function (ev) {
        if (ev.type == "panup") {
            $("#elevatorHome").removeClass("elevatorHome--goUp");
        }
        else if (ev.type == "pandown") {
            $("#elevatorHome").addClass("elevatorHome--goUp");
        }
    });


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
        ;
        ;
        // active move in the screen middle /.END
    }

    // 處理執行頻繁的callBack
    // https://blog.camel2243.com/2017/06/05/javascript-throttle-%E8%88%87-debounce%EF%BC%8C%E8%99%95%E7%90%86%E9%A0%BB%E7%B9%81%E7%9A%84-callback-%E5%9F%B7%E8%A1%8C%E9%A0%BB%E7%8E%87/
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
            $("html, body").animate({scrollTop: toTop});
        }
        else {
            $("html, body").animate({scrollTop: toTop - $("#spRightNav").height()});
        }
        return false;
    });
    // 滾動 END
}(jQuery));
