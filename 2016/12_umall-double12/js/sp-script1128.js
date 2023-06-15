
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

addLogo();

function spScrollNav() {


    var $spWrap = $('#spWrap');

    var navContent = [
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025478/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025580/index.html",
                                "words": "電視購物"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201611/SP_1025518/index.html",
                                "words": "時尚美妝"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025525/index.html",
                                "words": "養生保健"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025536/index.html",
                                "words": "新品服飾"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025538/index.html",
                                "words": "舒適內著"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025561/index.html",
                                "words": "潮流鞋包"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025567/index.html",
                                "words": "暖冬家電"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025583/index.html",
                                "words": "人氣3C"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025586/index.html",
                                "words": "品牌手相"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025553/index.html",
                                "words": "珠寶精品"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025559/index.html",
                                "words": "運動休閒"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025550/index.html",
                                "words": "幸福傢寢"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201612/SP_1025542/index.html",
                                "words": "居家婦幼"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201612/SP_1025447/index.html",
                                "words": "網購美食"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/SimpleTemplate.aspx?SubPage=DMSetting/Final/201612/SP_1025596/index.html",
                                "words": "冬季旅遊"
                            }
                        ];

    function buildNav(){

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul>';
            navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" title="' + navContent[0].words + '">' + navContent[0].words + '</a></li>';

            for ( var i = 1; i < navContent.length; i++ ){
                
                navHtml += '<li class="sp-nav__' + i + '"><a href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';
                
            }

            navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            $spWrap.append( navHtml );

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


} (jQuery));



// ga click

(function() {

    var PHRef = '';

    /* Google _trackEvent()*/

    //jQuery('[class ~= GAEventTracking]').live('click', function(e) {

    jQuery(document).live('click', '[class ~= GAEventTracking]', function (e) {


        var targetTagName = e.target.tagName.toLowerCase();

        var itemNO = parseInt(jQuery(this).attr('GA_EventNum'));
        var eachI;

        jQuery('[class ~= GAEventTracking]').removeClass('GAETClick');
        jQuery(this).addClass('GAETClick');

        if (jQuery(this).attr('GA_SplitNum')) {
            jQuery('[GA_EventName="' + jQuery(this).attr('GA_EventName') + '"][GA_EventNum="' + itemNO + '"]').each(function(i) {
                if (jQuery(this).hasClass('GAETClick')) {
                    itemNO = itemNO + (i + 1);
                }
            });
        } else {
            jQuery('[GA_EventName="' + jQuery(this).attr('GA_EventName') + '"]').each(function(i) {
                if (jQuery(this).hasClass('GAETClick')) {
                    itemNO = itemNO + (i + 1);
                }
            });
        }

        var PicOrText;
        if (jQuery(this).attr('GA_EventPicTxt') == 'pro') {
            PicOrText = (targetTagName == 'img') ? 'pic' : 'text';
        } else {
            PicOrText = jQuery(this).attr('GA_EventPicTxt');
        }

        var eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + itemNO + '_' + PicOrText;
        var eventAction = jQuery(this).attr('Href');
        var eventLabel;

        switch (jQuery(this).attr('GA_EventPicTxt')) {
            case ('pic'):
                {
                    eventLabel = getADImgSrc(jQuery(this).find('img').attr('src'));
                    break;
                };
            case ('text'):
                {
                    eventLabel = jQuery(this).text();
                    break;
                };
            case ('pro'):
                {

                    if (targetTagName == 'img') {
                        eventLabel = getADImgSrc(jQuery(this).find('.Gd-pic').attr('src'));
                    } else {
                        eventLabel = jQuery(this).find('.Gd-name').text();
                    }
                    break;
                };
        };

        // alert('eventCategory = ' + eventCategory);
        // alert('eventAction = ' + eventAction);
        // alert('eventLabel = ' + eventLabel);
        eventLabel = '';

        //PHRef
        if (jQuery(this).hasClass('PHType-AD') || jQuery(this).hasClass('PHType_Scupio')) {
            if (jQuery(this).attr('Href').toLowerCase().indexOf('aspx') != -1) {
                if (jQuery(this).attr('Href').toLowerCase().indexOf('scupio') != -1) {
                    (jQuery(this).attr('Href').indexOf('%3f') == -1) ? jQuery(this).attr('Href', eventAction + '%3fPHRef=' + eventCategory): jQuery(this).attr('Href', eventAction + '%26PHRef=' + eventCategory)
                } else {
                    (jQuery(this).attr('Href').indexOf('?') == -1) ? jQuery(this).attr('Href', eventAction + '?PHRef=' + eventCategory): jQuery(this).attr('Href', eventAction + '&PHRef=' + eventCategory)
                }

            }
        } else {
            if (PHRef != '' && jQuery(this).attr('Href').toLowerCase().indexOf('aspx') != -1) {
                if (jQuery(this).attr('Href').toLowerCase().indexOf('scupio') != -1) {
                    (jQuery(this).attr('Href').indexOf('%3f') == -1) ? jQuery(this).attr('Href', eventAction + '%3fPHRef=' + PHRef): jQuery(this).attr('Href', eventAction + '%26PHRef=' + PHRef)
                } else {
                    (jQuery(this).attr('Href').indexOf('?') == -1) ? jQuery(this).attr('Href', eventAction + '?PHRef=' + PHRef): jQuery(this).attr('Href', eventAction + '&PHRef=' + PHRef)
                }
            }
        }

        ga('send', 'event', eventCategory, eventAction, eventLabel);
    });


})();