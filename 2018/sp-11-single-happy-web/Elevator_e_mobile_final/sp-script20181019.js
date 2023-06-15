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
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106072/m/m.html",
                "words": "主會場"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106105/m.html",
                "words": "美妝保養"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106153/m.html",
                "words": "保健精選"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106889/m.html",
                "words": "流行精品"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106129/m.html",
                "words": "日用傢寢"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106107/m.html",
                "words": "婦幼寵物"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106163/m/m.html",
                "words": "嚴選家電"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201810/SP_1106172/m.html",
                "words": "3C資訊"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106117/m.html",
                "words": "美食餐券"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106069/m.html",
                "words": "運動休閒"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106197/m.html",
                "words": "冬季旅展"
            },
            {
                "linkUrl": "https://www.etmall.com.tw/XML/content/DMSetting/Final/201811/SP_1106236/index.html",
                "words": "抽萬元禮"
            },
        ];

        function buildNav() {

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" title="主會場">主會場</a></li>';

            for (var i = 1; i < navContent.length; i++) {

                navHtml += '<li class="sp-nav__' + i + ' sp-nav_all"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';

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

            // $spWrap.append(navHtml);
            //console.log( navContent );
        }

        buildNav();


        var $windowWidth = $(window).width();
        _document.on('scroll', function () {

            var $spFixedNav = $('#spFixedNav');

            // var winPageY = window.pageYOffset;
            var winPageY = $('#iconHome').height();
            var headerWrap = $('#headerWrap').height();
            var totalHt = winPageY + headerWrap;
            if (winPageY == 0 && headerWrap == 0) {
                $('.sp_page').addClass('pt--body');
            }
            if (_document.scrollTop() >= totalHt) {
                $spFixedNav.css({
                    "position": 'fixed'
                });
                $('#iconHome').addClass('iconHome-zIndex');

            }
            else {
                $spFixedNav.css({
                    "position": 'relative'
                });
                $('#iconHome').removeClass('iconHome-zIndex');
            }
        });
        // $spWrap.find( $spFixedNav ).removeClass( 'sp-is--hide' );


        // last li contact 'top'
        // var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
        //
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