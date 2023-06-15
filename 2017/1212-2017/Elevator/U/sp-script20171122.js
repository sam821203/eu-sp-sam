

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

    var logo = '<a class="logo__sp" href="//www.u-mall.com.tw/Pages/HomePage.aspx" target="_blank"></a>'

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
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1101002/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201712/SP_1101003/index.html",
                                "words": "滿額最高送<br>1200折扣金"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201712/SP_1101004/index.html",
                                "words": "銀行樂加碼"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201711/SP_1100962/index.html",
                                "words": "美妝保養"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100942/index.html",
                                "words": "窈窕保健"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100975/index.html",
                                "words": "服飾名品"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100970/index.html",
                                "words": "內著配件"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100967/index.html",
                                "words": "日用傢寢"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201710/SP_1100718/index.html",
                                "words": "婦幼寵物"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100991/index.html",
                                "words": "家電爆殺"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100968/index.html",
                                "words": "熱銷3C"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100979/index.html",
                                "words": "美食名店"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100957/index.html",
                                "words": "健身休閒"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201712/SP_1100965/index.html",
                                "words": "旅遊玩樂"
                            },
                            {
                                "linkUrl": "",
                                "words": ""
                            },
                            {
                                "linkUrl": "",
                                "words": ""
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


    var $windowWidth = $(window).width();

    _document.on( 'scroll',   function(){
        
            var $spFixedNav = $('#spFixedNav');

            if ( _document.scrollTop() >= 300 ){

                $spFixedNav.css({
                    display: 'block',
                    "pointer-events": ''
                });
                $spWrap.find( $spFixedNav ).removeClass( 'sp-is--hide' );

            } else {
                $spFixedNav.css({
                    "pointer-events": 'none'
                });
                $spWrap.find( $spFixedNav ).addClass( 'sp-is--hide' );

            }
        });


    var $spNavLastLi =  $spWrap.find('#spFixedNav li:last');

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

