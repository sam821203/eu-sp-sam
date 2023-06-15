// fixed nav effect
;(function ($) {
    // 大小網 URL TODO
    var navContent = [
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108614/w/index.html",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108661/w/index.html",
            "words": "寵爸科技",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108664/w/index.html",
            "words": "3C通訊",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108653/w/index.html",
            "words": "美妝保養",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108657/w/index.html",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1110002/w/index.html",
            "words": "流行精品",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108655/w/index.html",
            "words": "日用傢寢",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108649/w/index.html",
            "words": "婦幼寵物",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201907/SP_1108658/w/index.html",
            "words": "家電激殺",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108654/w/index.html",
            "words": "美食餐券",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108720/w/index.html",
            "words": "運動休閒",
            "target": ""
        },
        {
            "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201908/SP_1108645/w/index.html",
            "words": "我愛旅遊",
            "target": ""
        },
    ];

    // App URL TODO
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108614%2fm%2fapp.html&t=0802-0808_%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108661%2fm%2fapp.html",
            "words": "寵爸科技",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108664%2fm%2fapp.html&t=3C%e9%80%9a%e8%a8%8a%e9%80%81%e5%a5%bd%e7%a6%ae",
            "words": "3C通訊",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108653%2fm%2fapp.html&t=%e7%88%b6%e8%a6%aa%e7%af%80X%e6%83%85%e4%ba%ba%e7%af%80+%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "美妝保養",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108657%2fm%2fapp.html&t=%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4_%e5%81%a5%e5%ba%b7%e4%bf%9d%e5%81%a5+%e4%bf%9d%e5%81%a5%24888UP!%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "健康保健",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1110002%2fm%2fapp.html&t=%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4+%e6%83%85%e5%ae%9a%e4%b8%83%e5%a4%953%e6%8a%98%e8%b5%b7+%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "流行精品",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108655%2fm%2fapp.html&t=%e5%b1%85%e5%ae%b6%e5%a4%a7FUM%e9%80%81++%e5%88%9d%e5%a4%8f5%e6%8a%98%e8%b5%b7%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "日用傢寢",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108649%2fm%2fapp.html&t=%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "婦幼寵物",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201907%2fSP_1108658%2fm%2fapp.html",
            "words": "家電激殺",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108654%2fm%2fapp.html",
            "words": "美食餐券",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108720%2fm%2fapp.html&t=%e5%a4%8f%e6%97%a5+%e6%94%be%e6%9a%91%e5%83%b9%e5%95%a6%ef%bc%81%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "運動休閒",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108645%2fm%2fapp.html",
            "words": "我愛旅遊",
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
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="回主會場" target="' + isAppNav[0].target + '">回主會場</a></li>';

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

