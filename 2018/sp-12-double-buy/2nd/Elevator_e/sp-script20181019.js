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
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106497/w/index.html?linkNameEv1linkName",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106497/w/index.html?linkNameEv1_2linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106497/w/index.html?linkNameEv1_3linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106497/w/index.html?linkNameEv1_4linkName",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv2linkName",
                "words": "3C艇你",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106343/w/index.html?linkNameEv3linkName",
                "words": "瘋搶撇步",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106451/w/index.html?linkNameEv4linkName",
                "words": "街口8%",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106450/w/index.html?linkNameEv5linkName",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106486/index.html?linkNameEv6linkName",
                "words": "美妝保養",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106499/index.html?linkNameEv7linkName",
                "words": "保健精選",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106788/w/index.html?linkNameEv8linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106519/index.html?linkNameEv9linkName",
                "words": "日用家寢",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106520/index.html?linkNameEv10linkName",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106527/w/index.html?linkNameEv11linkName",
                "words": "嚴選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106522/index.html?linkNameEv12linkName",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106465/index.html?linkNameEv13linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106565/w/index.html?linkNameEv14linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // 小網 URL
        var navContent = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106497/w/index.html?linkNameEv1linkName",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106479/index.html?linkNameEv2linkName",
                "words": "3C艇你",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/209901/SP_1106343/w/index.html?linkNameEv3linkName",
                "words": "瘋搶撇步",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106451/w/index.html?linkNameEv4linkName",
                "words": "街口8%",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106450/w/index.html?linkNameEv5linkName",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106486/index.html?linkNameEv6linkName",
                "words": "美妝保養",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106499/index.html?linkNameEv7linkName",
                "words": "保健精選",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106788/w/index.html?linkNameEv8linkName",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106519/index.html?linkNameEv9linkName",
                "words": "日用家寢",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106520/index.html?linkNameEv10linkName",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106527/w/index.html?linkNameEv11linkName",
                "words": "嚴選家電",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106522/index.html?linkNameEv12linkName",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106465/index.html?linkNameEv13linkName",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201812/SP_1106565/w/index.html?linkNameEv14linkName",
                "words": "旅遊玩樂",
                "target": ""
            },
        ];

        // App URL
        var navContentApp = [
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106497%2fm%2fapp.html%3FlinkNameEv1linkName&t=1203-1210_%E9%9B%9912%E7%9B%9B%E5%85%B8+%E6%90%B6%E5%85%88%E9%96%8B%E8%B7%91%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106479%2fapp.html%3FlinkNameEv2linkName&t=3C%e9%9b%9911%e7%8b%82%e6%ad%a1%e6%85%b6%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "3C艇你",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f209901%2fSP_1106343%2fm%2fapp.html%3FlinkNameEv3linkName&t=%E7%9C%81%E9%8C%A2%E6%92%87%E6%AD%A5e%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "瘋搶撇步",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106451%2fm%2fapp.html%3FlinkNameEv4linkName&t=1129-1209_%E8%A1%97%E5%8F%A3%E6%94%AF%E4%BB%98+%E9%80%B1%E9%80%B1%E7%98%8B%E7%8B%82%E8%B3%BC%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "街口8%",
                "target": ""
            },
            {
                "linkUrl": "tmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106450%2fm%2fapp.html%3FlinkNameEv5linkName&t=1201-0102_%E5%85%A8%E5%AE%B6%E8%B6%85%E5%95%86%E5%BA%97%E5%8F%96%E2%94%82ETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9%E7%B6%B2",
                "words": "超取好禮",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106486%2fapp.html%3FlinkNameEv6linkName&t=%e9%9b%9912%e7%9b%9b%e5%85%b8%e8%b6%85%e8%b6%8a5%e6%8a%98%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "美妝保養",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106499%2fapp.html%3FlinkNameEv7linkName&t=%e4%bf%9d%e5%81%a5%e6%ad%b2%e6%9c%ab%e5%b9%b4%e7%b5%82%e6%85%b6+%e5%9b%9e%e9%a5%8b3%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "保健精選",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106788%2fm%2fapp.html%3FlinkNameEv8linkName&t=1210_1213%e9%9b%9912%e7%9b%9b%e5%85%b8+%e8%b6%85%e8%b6%8a5%e6%8a%98-(E)%e8%a1%8c%e9%8a%b7%e7%89%88%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "流行精品",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106519%2fapp.html%3FlinkNameEv9linkName&t=E_%e5%be%8c%e6%82%94%e9%82%84%e4%be%86%e5%be%97%e5%8f%8a+1116-1121%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "日用家寢",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106520%2fapp.html%3FlinkNameEv10linkName&t=E_%e5%be%8c%e6%82%94%e9%82%84%e4%be%86%e5%be%97%e5%8f%8a+1116-1121%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "婦幼寵物",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106527%2fm%2fapp.html%3FlinkNameEv11linkName&t=%e9%9b%9912%e6%ad%b2%e6%9c%ab%e7%8b%82%e6%ad%a1+%e5%85%a8%e9%a4%a88%e6%8a%98%e8%b5%b7%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "嚴選家電",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106522%2fapp.html%3FlinkNameEv12linkName&t=%e5%86%ac%e9%80%b2%e8%a3%9c5%e6%8a%98up%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "超值美食",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106465%2fapp.html%3FlinkNameEv13linkName&t=1212%e6%9a%96%e8%ba%ab%e5%8a%a0%e7%a2%bc%e8%b2%b7%e4%b8%8d%e5%81%9c+%e9%81%8b%e5%8b%95%e4%bc%91%e9%96%92%e5%85%a8%e9%a4%a85%e6%8a%98up_e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "運動休閒",
                "target": ""
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201812%2fSP_1106565%2fm%2fapp.html%3FlinkNameEv14linkName&t=%e2%98%85%e9%9b%9912%e7%9b%9b%e5%85%b8+%e8%b6%85%e8%b6%8a5%e6%8a%98(%e8%a1%8c%e9%8a%b7%e5%b0%88%e9%a0%81)%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
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
    var offsetLeft = $('.active').offset().left - ($winWt / 2);
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END

}(jQuery));

