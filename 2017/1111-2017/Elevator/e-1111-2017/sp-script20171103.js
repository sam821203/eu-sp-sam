

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
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201710/SP_1102304/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/Activity/DailyDiscount",
                                "words": "整點最便宜"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/Activity/WebSP?SubPage=DMSetting/Final/201711/SP_1102305/index.html",
                                "words": "滿額最高送<br>3000折扣金"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/Activity/WebSP?SubPage=DMSetting/Final/201710/SP_1102307/index.html",
                                "words": "銀行樂加碼"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102558/index.html",
                                "words": "美妝保養"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102559/index.html",
                                "words": "窈窕保健"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102568/index.html",
                                "words": "服飾名品"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102571/index.html",
                                "words": "內著配件"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102574/index.html",
                                "words": "日用傢寢"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102577/index.html",
                                "words": "親子寵物"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102570/index.html",
                                "words": "家電狂殺"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102567/index.html",
                                "words": "熱銷3C"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102561/index.html",
                                "words": "美食名店"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102572/index.html",
                                "words": "健身休閒"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102569/index.html",
                                "words": "旅遊玩樂"
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/Activity/WebSP?SubPage=DMSetting/Final/201711/SP_1102395/index.html",
                                "words": ""
                            },
                            {
                                "linkUrl": "//www.etmall.com.tw/XML/content/DMSetting/Final/201711/SP_1102327/index.html",
                                "words": ""
                            },
                        ];

    function buildNavSmallScreen() {

        var navHtml = '';

        navHtml += '<nav id="spFixedNav2" class="sp-fixed__nav sp-fixed__nav2 sp-is--hide">';
        navHtml += '<ul>';
        navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" title="' + navContent[0].words + '">' + navContent[0].words + '</a></li>';

        for (var i = 1; i < navContent.length; i++) {

            navHtml += '<li class="sp-nav__' + i + '"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';

        }

        navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
        navHtml += '</ul>';
        navHtml += '</nav>';

        $spWrap.append(navHtml);  
    }
    buildNavSmallScreen();
 
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


    var $windowWidth = $(window).width();

    if ($windowWidth > 1440) {
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

    } else if ($windowWidth <= 1440){
        _document.on( 'scroll',   function(){

                var $spFixedNav2 = $('#spFixedNav2');

                $spFixedNav2.removeClass( 'sp-is--hide' );

                if ( _document.scrollTop() >= 300 ){

                    $spFixedNav2.css({
                        display: 'block'
                    });

                } else {

                    $spFixedNav2.css({
                        display: 'none'
                    });
                }
        });
    }

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

