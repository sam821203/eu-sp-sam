// fixed nav effect
;(function ($) {

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');


    var goTopEffect = function (selectors) {
        selectors.on('click', function (e) {
            e.preventDefault();
            $htmlBody.animate({
                scrollTop: 0
            }, 300);

        });
    }

    function spScrollNav() {


        var $spWrap = $('#spWrap');

        // 小網
        var navContent = [
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106072/m/m.html?linkNameEv1linkName",
                "words": "主會場"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106105/m.html?linkNameEv2linkName",
                "words": "美妝保養"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106153/m.html?linkNameEv3linkName",
                "words": "保健精選"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106889/m.html?linkNameEv4linkName",
                "words": "流行精品"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106129/m.html?linkNameEv5linkName",
                "words": "日用傢寢"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106107/m.html?linkNameEv6linkName",
                "words": "婦幼寵物"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106163/m/m.html?linkNameEv7linkName",
                "words": "嚴選家電"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201810/SP_1106172/m.html?linkNameEv8linkName",
                "words": "3C資訊"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106117/m.html?linkNameEv9linkName",
                "words": "美食餐券"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106069/m.html?linkNameEv10linkName",
                "words": "運動休閒"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106197/m.html?linkNameEv11linkName",
                "words": "冬季旅展"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106236/index_3.html?linkNameEv12linkName",
                "words": "抽萬元禮"
            },
        ];

        // app
        var navContentApp = [
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3A%2F%2Fwww.etmall.com.tw%2FXML%2Fcontent%2FDMSetting%2FFinal%2F201811%2FSP_1106072%2Fm%2Fapp.html%3FlinkNameEv1linkName&t=1111%E7%8B%82%E6%AD%A1%E6%85%B6%EF%BC%81%E8%B1%88%E6%AD%A25%E6%8A%98%EF%BC%81",
                "words": "主會場"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106102%2fapp.html%3FlinkNameEv2linkName&t=%e7%be%8e%e5%a6%9d-%e9%9b%9911%e5%85%b1%e7%94%a8%e4%b8%bb%e8%a6%96%e8%a6%ba-E%e5%b0%8f%e7%b6%b2%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "美妝保養"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201810%2fSP_1106150%2fapp.html%3FlinkNameEv3linkName&t=%e4%bf%9d %e5%81%a5%e6%ad%a1%e6%85%b6%e9%9b%9911%e7%98%8b%e6%ae%ba3%e6%8a%98up_e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "保健精選"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106891%2fapp.html%3FlinkNameEv4linkName&t=1111%e7%8b%82%e6%ad%a1%e6%85%b6_%e6%99%82%e5%b0%9a%e7%8b%82%e6%ad%a1+%e5%b9%b4%e5%ba%a6%e7%98%8b%e6%ae%ba3%e6%8a%98up(E%e6%89%8b%e6%a9%9f)-%e8%a1%8c%e9%8a%b7%e7%89%88%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "流行精品"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106131%2fapp.html%3FlinkNameEv5linkName&t=%e7%be%8e%e9%a3%9f%e5%b9%b4%e7%b5%82%e6%85%b6+%e9%99%8d%e5%83%b95%e6%8a%98up+.%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "日用傢寢"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106110%2fapp.html%3FlinkNameEv6linkName&t=1111%e8%b3%bc%e7%89%a9%e7%8b%82%e6%ad%a1%e7%af%80M2%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "婦幼寵物"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106139%2fm%2fapp.html%3FlinkNameEv7linkName&t=%e6%b1%ba%e6%88%b0%e9%9b%9911%e5%ae%b6%e9%9b%bb%e7%98%8b%e6%ae%bae%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "嚴選家電"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201810%2fSP_1106160%2fapp.html%3FlinkNameEv8linkName&t=%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "3C資訊"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106119%2fapp.html%3FlinkNameEv9linkName&t=1111%e8%b3%bc%e7%89%a9%e7%8b%82%e6%ad%a1%e7%af%80-%e7%be%8e%e9%a3%9fM2%e2%94%82ETMall%e6%9d",
                "words": "美食餐券"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106070%2fapp.html%3FlinkNameEv10linkName&t=%e4%b8%80%e8%b5%b7%e5%8b%95%e3%84%98%e5%8b%95m%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "運動休閒"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106197%2fapp.html%3FlinkNameEv11linkName",
                "words": "冬季旅展"
            },
            {
                "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201811%2fSP_1106236%2fapp.html%3FlinkNameEv12linkName&t=Hello%e4%b8%8d%e8%b2%b7%e5%97%8e%e2%94%82ETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
                "words": "抽萬元禮"
            },
        ];

        function buildNav(isAppNav) {

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="主會場">主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                if (getSearch === getSearch1) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all active"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '">' + isAppNav[i].words + '</a></li>';

                }
            }

            navHtml += '</ul>';
            navHtml += '</nav>';

            var parent = $('#elevatorHome');
            var body = document.body;
            // var tag = document.createElement('a');
            if (parent) {
                parent.append(navHtml);
            }
            else {
                parent.append(navHtml);
            }

        }

        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildNav(navContentApp);
            }
            // not app
            else {
                buildNav(navContent);
            }
        }

        // output value
        initBuild();

        var $windowWidth = $(window).width();
        _document.on('scroll', function () {

            var $spFixedNav = $('#spFixedNav');

            // var winPageY = window.pageYOffset;
            var winPageY = $('#iconHome').height();
            var headerWrap = $('#headerWrap').height();
            var totalHt = winPageY + headerWrap;

            // judge 如果為空值則等於0
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

            // judge 版頭 & 斜角標
            if (winPageY == 0 && headerWrap == 0) {
                $('.sp_page').addClass('pt--body');
            }
            else {
                $('.sp_page').removeClass('pt--body');
            }
            if (_document.scrollTop() >= totalHt) {
                $spFixedNav.css({
                    "position": 'fixed'
                });

            }
            else {
                $spFixedNav.css({
                    "position": 'relative'
                });
            }
        });

        // last li contact 'top'
        // var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
        // goTopEffect($spNavLastLi);

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

    $('.sp-nav_all > a').click(function () {
        $('.sp-nav_all').removeClass('active');
        $(this).parent().addClass('active');
    });

    // active move in the screen middle
    var windowWt =$(document).width();
    // var offsetLeft =  $('.active').offset().left -80;
    var offsetLeft =  $('.active').offset().left - (windowWt / 2);
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END

}(jQuery));