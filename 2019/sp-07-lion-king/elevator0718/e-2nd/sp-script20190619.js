// fixed nav effect
;(function ($) {
    // 大小網 URL TODO
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108138/w/index.html",
            "words": "重返榮耀",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108385/w/index.html",
            "words": "3C特賣",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c2/121794",
            "words": "Beats新色",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/125140",
            "words": "國際美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c2/121379",
            "words": "防曬保養",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/73542",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108652/w/index.html",
            "words": "精品送禮",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/77135",
            "words": "約惠穿搭",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/np/77922",
            "words": "阿瘦3折",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/p/67031",
            "words": "小褲$88",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/124164",
            "words": "五星餐券",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/122940",
            "words": "爸氣回饋",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/p/66085",
            "words": "夏飲滿折",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/133402",
            "words": "買鍋送牛排",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108526/w/index.html",
            "words": "冰箱送10%",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108511/w/index.html",
            "words": "LG送西堤",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108403/w/index.html",
            "words": "旅遊年中慶",
            "target": ""
        },
    ];

    // App URL TODO
    var navContentApp = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108138/w/index.html",
            "words": "重返榮耀",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201906%2fSP_1108385%2fm%2fapp.html",
            "words": "3C特賣",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=8&cd=121794",
            "words": "Beats新色",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/125140",
            "words": "國際美妝",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c2/121379",
            "words": "防曬保養",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=73542",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108652%2fm%2fapp.html&t=0710-0731%e6%88%91%e7%9a%84%e8%ac%ac%e6%80%9d%e5%a5%b3%e7%a5%9e%e7%a9%bf%e6%88%b4%e6%95%99%e6%88%b0%e4%b8%8b%e6%ae%ba3%e6%8a%98%e8%b5%b7-E%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "精品送禮",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=77135",
            "words": "約惠穿搭",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=77922",
            "words": "阿瘦3折",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=65&eid=77922",
            "words": "小褲$88",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/124164",
            "words": "五星餐券",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/122940",
            "words": "爸氣回饋",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/p/66085",
            "words": "夏飲滿折",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/c3/133402",
            "words": "買鍋送牛排",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108526/w/index.html",
            "words": "冰箱送10%",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108511/w/index.html",
            "words": "LG送西堤",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201906/SP_1108403/w/index.html",
            "words": "旅遊年中慶",
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

        function buildNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="重返榮耀" target="' + isAppNav[0].target + '">重返榮耀</a></li>';

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
            if ($winWt < 1213) {
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

