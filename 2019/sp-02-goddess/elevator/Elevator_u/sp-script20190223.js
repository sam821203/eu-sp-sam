// fixed nav effect
;(function ($) {
// 大小網 URL
    var navContent = [
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103882/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103943/index.html",
            "words": "3C商品",
            "target": ""
        },
        {
            "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103906/index.html",
            "words": "美妝保養",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103926/index.html",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1106899/w/index.html",
            "words": "精品服飾",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103949/w/index.html",
            "words": "日用傢寢",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201902/SP_1103964/w/index.html",
            "words": "婦幼寵物",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201902/SP_1103936/w/index.html",
            "words": "家電下殺",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103942/index.html",
            "words": "美味食堂",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103962/w/index.html",
            "words": "運動休閒",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103907/w/index.html",
            "words": "春季旅展",
            "target": ""
        },
    ];

    // App URL
    var navContentApp = [
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103882/w/index.html",
            "words": "主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103943/index.html",
            "words": "3C商品",
            "target": ""
        },
        {
            "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103906/index.html",
            "words": "美妝保養",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103926/index.html",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1106899/w/index.html",
            "words": "精品服飾",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103949/w/index.html",
            "words": "日用傢寢",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201902/SP_1103964/w/index.html",
            "words": "婦幼寵物",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201902/SP_1103936/w/index.html",
            "words": "家電下殺",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103942/index.html",
            "words": "美味食堂",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103962/w/index.html",
            "words": "運動休閒",
            "target": ""
        },
        {
            "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201903/SP_1103907/w/index.html",
            "words": "春季旅展",
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
        var $sp1260 = $spWrap.find('.sp--1260');

        var logo = '<a class="logo__sp" href="https://www.u-mall.com.tw/" target="_blank"></a>'

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

        // 從linkData.js取得電梯連結的網址並加上偵測碼
        navContent.forEach(function(el, index){
            el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
        })
        navContentApp.forEach(function(el, index){
            var detectString = '%3FlinkNameEv' + (index + 1) + 'linkName';
            var newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
            el.linkUrl = newLink;
        })

        function buildNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="主會場" target="' + isAppNav[0].target + '">主會場</a></li>';

            // judge which url is active !!
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
                buildNav(navContent);
                $spWrap.find($spFixedNav).addClass('sp-is--hide');
                $(document).find('.sp__page').removeClass('pt--body');
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
                $('.sp__page').addClass('pt--body');
            }
            else if (winPageY == 0 && headerWrap == 0 && $winWt >= 1366) {
                $('.sp__page').removeClass('pt--body');
            }
            else {
                $('.sp__page').removeClass('pt--body');
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
    if($('.active').length) {
        var offsetLeft = $('.active').offset().left - ($winWt / 2);
    }
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END
}(jQuery));

