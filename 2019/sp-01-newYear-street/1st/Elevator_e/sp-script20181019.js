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
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106710/w/index.html?linkNameEv1linkName",
                "words": "年貨大街",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106889/index.html?linkNameEv2linkName",
                "words": "3C新年",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106834/index.html?linkNameEv3linkName",
                "words": "玩美過年",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106806/index.html?linkNameEv4linkName",
                "words": "保健嚴選",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106800/w/index.html?linkNameEv5linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106853/index.html?linkNameEv6linkName",
                "words": "居傢改造",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106870/index.html?linkNameEv71linkName",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106876/w/index.html?linkNameEv8linkName",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106832/index.html?linkNameEv9linkName",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106844/w/index.html?linkNameEv10linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106826/w/index.html?linkNameEv11linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // 小網 URL
        var navContent = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106710/w/index.html?linkNameEv1linkName",
                "words": "年貨大街",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106889/index.html?linkNameEv2linkName",
                "words": "3C新年",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106834/index.html?linkNameEv3linkName",
                "words": "玩美過年",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106806/index.html?linkNameEv4linkName",
                "words": "保健嚴選",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106800/w/index.html?linkNameEv5linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106853/index.html?linkNameEv6linkName",
                "words": "居傢改造",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106870/index.html?linkNameEv71linkName",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106876/w/index.html?linkNameEv8linkName",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106832/index.html?linkNameEv9linkName",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1106844/w/index.html?linkNameEv10linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106826/w/index.html?linkNameEv11linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // App URL
        var navContentApp = [
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106710%2fm%2fapp.html%3FlinkNameEv1linkName&t=0111-0117_%E5%B9%B4%E8%B2%A8%E5%A4%A7%E8%A1%97%E6%8E%83%E4%B8%80%E6%B3%A2%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "年貨大街",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106889%2fapp.html%3FlinkNameEv2linkName&t=%e7%b1%8c%e5%82%99%e4%b8%adE%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "3C新年",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106834%2fapp.html%3FlinkNameEv3linkName&t=%e7%8e%a9%e7%be%8e%e9%81%8e%e5%a5%bd%e5%b9%b4%e7%be%8e%e5%a6%9d%e5%a4%a7%e8%a1%975%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "玩美過年",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106806%2fapp.html%3FlinkNameEv4linkName&t=%e5%81%a5%e5%ba%b7%e5%a5%bd%e9%81%8e%e5%b9%b4%e5%85%a8%e9%a4%a85%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "保健嚴選",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106800%2fm%2fapp.html%3FlinkNameEv5linkName&t=%e6%b5%81%e8%a1%8c%e9%a4%a8+%e5%b9%b4%e8%b2%a8%e5%a4%a7%e8%a1%97-E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106853%2fapp.html%3FlinkNameEv6linkName&t=%e5%ae%b6%e5%af%a2-%e5%b9%b4%e8%b2%a8%e5%a4%a7%e8%a1%97%e6%8e%83%e4%b8%80%e6%b3%a2E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "居傢改造",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106870%2fapp.html%3FlinkNameEv7linkName&t=%e6%88%b6%e5%a4%96%e4%bc%91%e9%96%92%e5%b9%b4%e7%b5%82%e5%9b%9e%e9%a5%8b5%e6%8a%98up_e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106876%2fm%2fapp.html%3FlinkNameEv8linkName&t=%e9%99%a4%e8%88%8a%e4%bd%88%e6%96%b0+%e5%ae%b6%e9%9b%bb8%e6%8a%98up%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106832%2fapp.html%3FlinkNameEv9linkName&t=%e5%86%ac%e9%80%b2%e8%a3%9c5%e6%8a%98up%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1106844%2fm%2fapp.html%3FlinkNameEv10linkName&t=%e5%b9%b4%e7%b5%82%e8%b3%bc%e7%89%a9%e7%af%80%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106826%2fm%2fapp.html%3FlinkNameEv11linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

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

                if (getSearch === getSearch1) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all active"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';

                }
            }

            navHtml += '<li class="sp-nav__app"><a href="https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106492/index.html"></a></li>';
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
    var offsetLeft = $('.active').offset().left - ($winWt / 2);
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END

}(jQuery));

