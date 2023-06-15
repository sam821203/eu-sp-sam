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

        var navContent = [
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102823/m/m.html?linkName=1",
                "words": "主會場"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102845/m.html?linkName=2",
                "words": "美妝保養"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201810/SP_1102895/m.html?linkName=3",
                "words": "保健精選"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1106891/m.html?linkName=4",
                "words": "流行精品"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102874/m.html?linkName=5",
                "words": "日用傢寢"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102857/m.html?linkName=6",
                "words": "婦幼寵物"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102924/m/m.html?linkName=7",
                "words": "嚴選家電"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201810/SP_1102912/m.html?linkName=8",
                "words": "3C資訊"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102866/m.html?linkName=9",
                "words": "美食餐券"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102821/m.html?linkName=10",
                "words": "運動休閒"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102876/m.html?linkName=11",
                "words": "冬季旅展"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102942/index_3.html?linkName=12",
                "words": "抽萬元禮"
            },
            {
                "linkUrl": "https://www.u-mall.com.tw/XML/content/DMSetting/Final/201811/SP_1102823/m/m.html?linkName=13",
                "words": "省錢撇步"
            },
        ];

        function buildNav() {

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" title="主會場">主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName=")[1];
            for (var i = 1; i < navContent.length; i++) {
                var getSearch1 = navContent[i].linkUrl.split("linkName=")[1];

                if (getSearch === getSearch1) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all active"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';

                }
            }

            navHtml += '</ul>';
            navHtml += '</nav>';

            var parent = $('#elevatorHome');
            var body = document.body;
            // var tag = document.createElement('a');
            if (parent) {
                parent.append(navHtml);
            } else {
                parent.append(navHtml);
            }
        }

        buildNav();


        var $windowWidth = $(window).width();
        _document.on('scroll', function () {

            var $spFixedNav = $('#spFixedNav');

            // var winPageY = window.pageYOffset;
            var winPageY = $('#iconHome').height();
            var headerWrap = $('#headerWrap').height();
            var totalHt = winPageY + headerWrap;

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
}(jQuery));

