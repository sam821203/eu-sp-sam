// fixed nav effect
;(function ($) {

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
        var $sp1260 = $spWrap.find('.sp--1260');

        var logo = '<a class="logo__sp" href="//www.etmall.com.tw/" target="_blank"></a>'

        $sp1260.append(logo);


    }

    function addSnow() {
        var $spWrap = $('#spWrap');
        var $sp1260 = $spWrap.find('.sp--1260');

        var snowEl = '<div id="spSnowFall" class="sp-snow__wrap"></div>'

        $sp1260.append(snowEl);
    }

    function spScrollNav() {
        var $spWrap = $('#elevatorHome');

        // 大網 URL
        var navContentDeskTop = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv1linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv1_2linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv1_3linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv1_4linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/Activity/WebSP?SubPage=DMSetting/Final/201812/SP_1106552/w/index.html?linkNameEv2linkName",
                "words": "抽萬元禮",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106543/w/index.html?linkNameEv3linkName",
                "words": "銀行回饋",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106451/w/index.html?linkNameEv4linkName",
                "words": "街口10%",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106450/w/index.html?linkNameEv5linkName",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106343/w/index.html?linkNameEv6linkName",
                "words": "瘋搶撇步",
                "target": ""
            },
        ];

        // 小網 URL
        var navContent = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv1linkName",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/Activity/WebSP?SubPage=DMSetting/Final/201812/SP_1106552/w/index.html?linkNameEv2linkName",
                "words": "抽萬元禮",
                "target": ""
            },
            {
                "linkUrl": " https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106543/w/index.html?linkNameEv3linkName",
                "words": "銀行回饋",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106451/w/index.html?linkNameEv4linkName",
                "words": "街口10%",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106450/w/index.html?linkNameEv5linkName",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": " https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106343/w/index.html?linkNameEv6linkName",
                "words": "瘋搶撇步",
                "target": ""
            },
        ];

        // App URL
        var navContentApp = [
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106479%2fapp.html%3FlinkNameEv1linkName&t=3C%e9%9b%9911%e7%8b%82%e6%ad%a1%e6%85%b6%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106552%2fm%2fapp.html%3FlinkNameEv2linkName&t=12%2f1-12%2f31_%e9%9b%9912%e7%9b%9b%e5%85%b8e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "抽萬元禮",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1106543%2fm%2fapp.html%3FlinkNameEv3linkName&t=2018%e5%b9%b412%e6%9c%88%e9%8a%80%e8%a1%8c%e7%b8%bd%e8%a6%bd%e9%a0%81%e9%9d%a2e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "銀行回饋",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106451%2fm%2fapp.html%3FlinkNameEv4linkName&t=1129-1209_%E8%A1%97%E5%8F%A3%E6%94%AF%E4%BB%98+%E9%80%B1%E9%80%B1%E7%98%8B%E7%8B%82%E8%B3%BC%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "街口10%",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106450%2fm%2fapp.html%3FlinkNameEv5linkName&t=1201-0102_%E5%85%A8%E5%AE%B6%E8%B6%85%E5%95%86%E5%BA%97%E5%8F%96%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1106343%2fm%2fapp.html%3FlinkNameEv6linkName&t=%E7%9C%81%E9%8C%A2%E6%92%87%E6%AD%A5e%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "瘋搶撇步",
                "target": ""
            },
        ];

        function buildNav(isAppNav) {

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="主會場" target="'+ isAppNav[0].target +'">主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                if (getSearch === getSearch1) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all active"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="'+ isAppNav[i].target +'">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="'+ isAppNav[i].target +'">' + isAppNav[i].words + '</a></li>';

                }
            }

            navHtml += '<li class="sp-nav__app"><a href="https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106492/index.html"></a></li>';
            navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
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
                isHaveFloatIcon();
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
            if ($winWt < 1366) {
                buildNav(navContent);
                $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
                isHaveFloatIcon();
            }
            // desktop
            else {
                buildNav(navContentDeskTop);
                $spWrap.find($spFixedNav).addClass('sp-is--hide');
                $(document).find('.sp_page').removeClass('pt--body');
                resizeScrollTop();
            }
        }

        // judge 版頭 & 斜角標 (For 小網 or APP)
        function isHaveFloatIcon() {
            var $spFixedNav = $('#spFixedNav');
            // var winPageY = window.pageYOffset;
            var winPageY = $('#iconHome').height();
            var headerWrap = $('#headerWrap').height();
            var totalHt = winPageY + headerWrap;
            var $winWt = $(document).width();

            // judge (winPageY / headerWrap) is null => 0 如果為空值則等於0
            if (winPageY == null) {
                winPageY = 0;
            }
            else {
                winPageY = winPageY;
            }
            if (headerWrap == null) {
                headerWrap = 0;
            }
            else {
                headerWrap = headerWrap;
            }

            // judge 是否加入 "pt--body"
            if (winPageY == 0 && headerWrap == 0 && $winWt < 1366) {
                $('.sp_page').addClass('pt--body');
            }
            else if (winPageY == 0 && headerWrap == 0 && $winWt >= 1366) {
                $('.sp_page').removeClass('pt--body');
            }
            else {
                $('.sp_page').removeClass('pt--body');
            }

            // judge 滾動 > 大於 (浮水印 + 斜角標)
            if (_document.scrollTop() >= totalHt) {
                $('#spFixedNav').css({
                    "position": 'fixed'
                });
            }
            else {
                $('#spFixedNav').css({
                    "position": 'relative'
                });
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
                if ($winWt >= 1366) {
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
    // var offsetLeft =  $('.active').offset().left - 80;
    var offsetLeft =  $('.active').offset.left - ($winWt / 2);
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END

}(jQuery));

