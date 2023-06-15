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

        // 大網 URL TODO
        var navContentDeskTop = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1106972/w/index.html?linkNameEv1linkName",
                "words": "回主會場",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107150/index.html?linkNameEv2linkName",
                "words": "3C商品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107124/index.html?linkNameEv3linkName",
                "words": "開運美妝",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107149/index.html?linkNameEv4linkName",
                "words": "健康保健",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107500/w/index.html?linkNameEv5linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1107129/w/index.html?linkNameEv6linkName",
                "words": "日用傢寢",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107169/w/index.html?linkNameEv7linkName",
                "words": "寵物用品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1107134/w/index.html?linkNameEv8linkName",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107130/index.html?linkNameEv9linkName",
                "words": "珍饌美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107148/w/index.html?linkNameEv10linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107144/w/index.html?linkNameEv11linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // 小網 URL TODO
        var navContent = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1106972/w/index.html?linkNameEv1linkName",
                "words": "回主會場",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107150/index.html?linkNameEv2linkName",
                "words": "3C商品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107124/index.html?linkNameEv3linkName",
                "words": "開運美妝",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107149/index.html?linkNameEv4linkName",
                "words": "健康保健",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107500/w/index.html?linkNameEv5linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1107129/w/index.html?linkNameEv6linkName",
                "words": "日用傢寢",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107169/w/index.html?linkNameEv7linkName",
                "words": "寵物用品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201901/SP_1107134/w/index.html?linkNameEv8linkName",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107130/index.html?linkNameEv9linkName",
                "words": "珍饌美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107148/w/index.html?linkNameEv10linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1107144/w/index.html?linkNameEv11linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // App URL TODO
        var navContentApp = [
            {
                "linkUrl": "%3FlinkNameEv1linkName",
                "words": "回主會場",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107150%2fapp.html%3FlinkNameEv2linkName&t=%e8%aa%aa%e5%a5%bd%e7%9a%84%e6%96%b0%e5%b9%b4%e6%8f%9b%e6%96%b0%e6%a9%9f_E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "3C商品",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107124%2fapp.html%3FlinkNameEv3linkName&t=%e8%b1%ac%e4%ba%8b%e5%9c%93%e6%bb%bf%e4%ba%ab%e5%a5%bd%e9%81%8b+%e9%96%8b%e9%81%8b%e7%be%8e%e5%a6%9d5%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "開運美妝",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107149%2fapp.html%3FlinkNameEv4linkName&t=%e8%b1%ac%e4%ba%8b%e5%a4%a7%e5%90%89%e5%85%a8%e9%a4%a85%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "健康保健",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107500%2fm%2fapp.html%3FlinkNameEv5linkName&t=%e6%96%b0%e6%98%a5%e8%a1%8c%e5%a5%bd%e9%81%8b++%e7%b2%be%e5%93%81%e6%89%8b%e9%8c%b62%e6%8a%98%e8%b5%b7_%e6%9d%b1%e6%a3%ae(%e6%b5%81%e8%a1%8c%e6%96%b0%e5%b9%b4sp)%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1107129%2fm%2fapp.html%3FlinkNameEv6linkName&t=%e6%b1%b0%e8%88%8a%e6%8f%9b%e6%96%b0%e6%97%a5%e7%94%a80102-0115E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "日用傢寢",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107169%2fm%2fapp.html%3FlinkNameEv7linkName&t=%e5%b8%8c%e7%88%be%e6%80%9d%e6%96%b0%e5%b9%b4%e5%84%b2%e7%b3%a7%e5%a4%a7%e4%bd%9c%e6%88%b0%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "寵物用品",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201901%2fSP_1107134%2fm%2fapp.html%3FlinkNameEv8linkName&t=%e5%ae%b6%e9%9b%bb24H%e5%87%ba%e8%b2%a8%e6%ae%ba%e7%8b%a0%e5%a4%a7+%e5%84%aa%e6%83%a0%e7%88%bd%e7%88%bd%e6%8b%bf-E%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "精選家電",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107130%2fm%2fapp.html%3FlinkNameEv9linkName&t=%e6%9d%b1%e6%a3%ae11month+%e6%a5%b5%e9%80%9f%e4%b8%8b%e9%99%8d%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "珍饌美食",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107148%2fm%2fapp.html%3FlinkNameEv10linkName&t=E_%e5%a5%a7%e8%8e%89%e8%96%87%e9%96%a3%e8%bf%8e%e6%96%b0%e5%b9%b4%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201902%2fSP_1107144%2fm%2fapp.html%3FlinkNameEv11linkName",
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
            // TODO
            navHtml += '<li class="sp-nav__app"><a href="https://www.etmall.com.tw/XML/content/DMSetting/Final/201902/SP_1106972/w/index.html"></a></li>';
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

