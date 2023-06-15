

// fixed nav effect

;(function ($) {

var _window = $(window),
    _document = $(document),
    $htmlBody = $('html, body');
        

var goTopEffect = function( selectors ) {

    selectors.on('click', function(e) {
        e.preventDefault();

        $htmlBody.animate({

            scrollTop: 0

        }, 300);

    });
}


function addLogo(){

    var $spWrap = $('#spWrap');
    var $sp1260 =  $spWrap.find('.sp--1260');

    var logo = '<a class="logo__sp" href="//www.etmall.com.tw/" target="_blank"></a>'

    $sp1260.append( logo );


}

function addSnow() {
    var $spWrap = $('#spWrap');
    var $sp1260 =  $spWrap.find('.sp--1260');

    var snowEl = '<div id="spSnowFall" class="sp-snow__wrap"></div>'

    $sp1260.append( snowEl );
}

function spScrollNav() {


    var $spWrap = $('#spWrap');

    var navContent = [
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102151/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102089/index.html",
                                "words": "10月購物誌"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201710/SP_1102075/index.html",
                                "words": "滿額最高<br>送3600"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201710/SP_1102076/index.html",
                                "words": "銀行樂加碼"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201709/SP_1102009/index.html",
                                "words": "美妝週慶"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102020/index.html",
                                "words": "保健大賞"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102007/index.html",
                                "words": "服飾名品"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102012/index.html",
                                "words": "內著配件"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102093/index.html",
                                "words": "日用傢寢"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102209/index.html",
                                "words": "寵物百貨"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102140/index.html",
                                "words": "家電狂殺"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102096/index.html",
                                "words": "熱銷3C"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102081/index.html",
                                "words": "美食名店"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102092/index.html",
                                "words": "健身美體"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102030/index.html",
                                "words": "旅遊玩樂"
                            },
                        ];

    function buildNav() {

        var navHtml = '';

        navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
        navHtml += '<ul>';
        navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" title="' + navContent[0].words + '">' + navContent[0].words + '</a></li>';

        for (var i = 1; i < navContent.length; i++) {

            navHtml += '<li class="sp-nav__' + i + '"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';

        }

        navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
        navHtml += '</ul>';
        navHtml += '</nav>';

        $spWrap.append(navHtml);

        //console.log( navContent );
        


    }

    buildNav();


    _document.on( 'scroll',   function(){

        var $spFixedNav = $('#spFixedNav');

        if ( _document.scrollTop() >= 300 ){

            $spFixedNav.css({

                display: 'block'

            });
            $spWrap.find( $spFixedNav ).removeClass( 'sp-is--hide' );

        } else {

            $spWrap.find( $spFixedNav ).addClass( 'sp-is--hide' );

        }

    });

    var $spNavLastLi =  $spWrap.find('#spFixedNav li:last ');

    goTopEffect( $spNavLastLi );

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

} (jQuery));

