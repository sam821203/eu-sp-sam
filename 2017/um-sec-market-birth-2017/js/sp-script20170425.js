
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

    var logo = '<a class="logo__sp" href="http://www.u-mall.com.tw/Pages/HomePage.aspx" target="_blank"></a>'

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
                                "linkUrl": "http://www.u-mall.com.tw/pages/Mothersday.aspx",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201704/SP_1026646/index.html",
                                "words": "美妝保健"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201703/SP_1026529/index.html",
                                "words": "破盤3C"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201704/SP_1026638/index.html",
                                "words": "時尚家電"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026622/index.html",
                                "words": "鍋具日用"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026620/index.html",
                                "words": "美食餐券"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1063333/index.html",
                                "words": "珠寶精品"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026665/index.html",
                                "words": "百搭鞋包"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026623/index.html",
                                "words": "內塑服飾"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026625/index.html",
                                "words": "運動紓壓"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201705/SP_1026642/index.html",
                                "words": "旅遊玩樂"
                            }
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

