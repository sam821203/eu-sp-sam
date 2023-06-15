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
                "linkUrl": "#section1",
                "words": "主會場",
                "target": ""
            },
            // 空白格 3個
            {
                "linkUrl": "",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "",
                "words": "",
                "target": ""
            },
            {
                "linkUrl": "#section2",
                "words": "錨B",
                "target": ""
            },
            {
                "linkUrl": "#section3",
                "words": "錨C",
                "target": ""
            },
            {
                "linkUrl": "#section4",
                "words": "錨D",
                "target": ""
            },
            {
                "linkUrl": "#section5",
                "words": "錨E",
                "target": ""
            },
        ];

        // 小網 URL
        var navContent = [
            {
                "linkUrl": "#section1",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "#section2",
                "words": "錨B",
                "target": ""
            },
            {
                "linkUrl": "#section3",
                "words": "錨C",
                "target": ""
            },
            {
                "linkUrl": "#section4",
                "words": "錨D",
                "target": ""
            },
            {
                "linkUrl": "#section5",
                "words": "錨E",
                "target": ""
            },
        ];

        // App URL
        var navContentApp = [
            {
                "linkUrl": "#section1",
                "words": "主會場",
                "target": ""
            },
            {
                "linkUrl": "#section2",
                "words": "錨B",
                "target": ""
            },
            {
                "linkUrl": "#section3",
                "words": "錨C",
                "target": ""
            },
            {
                "linkUrl": "#section4",
                "words": "錨D",
                "target": ""
            },
            {
                "linkUrl": "#section5",
                "words": "錨E",
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


    // 錨點
    function goAnchorPoint() {
        var $htmlBody = $("html, body");
        $('a[href*="#"]:not([href="#"])').on('click', function (e) {
            e.preventDefault();
            var target = $(this.hash);
            console.log(target.offset().top);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 300);
            return false;
        });
    }
    goAnchorPoint();
}(jQuery));

