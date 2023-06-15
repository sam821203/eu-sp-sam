// fixed nav effect
;(function ($) {
    // 大小網 URL TODO
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108138/w/index.html",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108207/w/index.html",
            "words": "資訊回饋",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108244/index.html",
            "words": "搶1元up",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/64075",
            "words": "國際美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/72755",
            "words": "保健熱銷",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108240/w/index.html",
            "words": "流行精品",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108183/w/index.html",
            "words": "買1送1",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108187/w/index.html",
            "words": "家具寢具",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108189/w/index.html",
            "words": "婦幼展",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108174/w/index.html",
            "words": "食來運轉",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108211/w/index.html",
            "words": "抽dyson",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/127956",
            "words": "激推夯食",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108088/w/index.html",
            "words": "涼夏出遊",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201905/SP_1108195/w/index.html",
            "words": "旅遊下殺",
            "target": ""
        },
    ];

    // App URL TODO
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108207%2fm%2fapp.html",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1107741%2fm%2fapp.html",
            "words": "資訊回饋",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108244%2fapp.html&t=1%e5%85%83%e7%ad%89%e4%bd%a0%e6%90%b6",
            "words": "搶1元up",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=64075",
            "words": "國際美妝",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=72755",
            "words": "保健熱銷",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1108240%2fm%2fapp.html&t=E-EASY+SHOP%e6%96%b0%e5%93%81%e7%8d%a8%e8%b3%a3edm%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "流行精品",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108183%2fm%2fapp.html&t=%e6%98%a5%e5%ad%a3datingwithspring%e7%b5%95%e6%ae%ba%e7%b4%84%e6%83%a0_E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "買1送1",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1108187%2fm%2fapp.html&t=%e5%a4%8f%e5%af%90%e5%ae%b6%e8%a3%9d%e7%af%80-E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "家具寢具",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1108189%2fm%2fapp.html&t=%e6%ad%a1%e6%85%b6%e5%85%92%e7%ab%a5%e7%af%80+%e5%a9%a6%e5%b9%bc%e5%af%b5%e7%89%a95%e6%8a%98%e8%b5%b7+E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "婦幼展",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108174%2fm%2fapp.html&t=%e6%af%9b%e5%ad%a9%e9%a3%9f%e4%be%86%e9%81%8b%e8%bd%89_E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "食來運轉",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108211%2fm%2fapp.html&t=0603-0701_%E5%86%B7%E6%B0%A3%E5%B0%88%E6%A1%88%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
            "words": "抽dyson",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=8&cd=127956",
            "words": "激推夯食",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1108088%2fm%2fapp.html&t=%e6%b1%bd%e8%bb%8a%e5%a4%a7%e7%99%be%e8%b2%a8_E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "涼夏出遊",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201905%2fSP_1108195%2fm%2fapp.html&t=%e2%98%85%e5%a4%8f%e5%ad%a3%e6%97%85%e5%b1%95+%e6%bb%bf%e8%90%ac%e9%80%81%e9%a4%90%e5%88%b8%7e%e5%9c%8b%e5%a4%96%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "旅遊下殺",
            "target": ""
        },
    ];

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

        function buildNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="主會場" target="' + isAppNav[0].target + '">主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all active"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }
            // TODO
            navHtml += '<li class="sp-nav__app"><a href="https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1107517/w/index.html"></a></li>';
            navHtml += '<li class="sp-nav__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
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
                buildNav(navContentApp);
                $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
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
            if ($winWt < 961) {
                buildNav(navContent);
                $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // desktop
            else {
                // buildNav(navContentDeskTop);
                buildNav(navContent);
                $spWrap.find($spFixedNav).addClass('sp-is--hide');
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
                        $spWrap.find($spFixedNav).removeClass('sp-is--hide');
                    }
                    else {
                        $spWrap.find($spFixedNav).addClass('sp-is--hide');
                    }
                }

                var $winWt = $(document).width();
                if ($winWt >= 961) {
                    judgeScrollTop();
                }
            });
        }

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
        goTopEffect($spNavLastLi);
    }

    spScrollNav();

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

    // judge now which isClick
    $('.sp-nav_all > a').click(function () {
        $('.sp-nav_all').removeClass('active');
        $(this).parent().addClass('active');
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
}(jQuery));

