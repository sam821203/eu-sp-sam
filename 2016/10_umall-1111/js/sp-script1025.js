
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

function spScrollNav() {


    var $spWrap = $('#spWrap');

    var navContent = [
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025068/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025171/index.html",
                                "words": "電視購物"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025197/index.html",
                                "words": "美妝"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201610/SP_1025181/index.html",
                                "words": "保健"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025183/index.html",
                                "words": "服飾"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201610/SP_1025191/index.html",
                                "words": "舒適內著"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025208/index.html",
                                "words": "鞋包"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025159/index.html",
                                "words": "家電"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025207/index.html",
                                "words": "3C/手相"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201610/SP_1025175/index.html",
                                "words": "珠寶精品"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025161/index.html",
                                "words": "運動"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025189/index.html",
                                "words": "傢寢"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025128/index.html",
                                "words": "居家用品"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025128/index.html",
                                "words": "婦幼"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025173/index.html",
                                "words": "美食"
                            },
                            {
                                "linkUrl": "http://www.u-mall.com.tw/XML/content/DMSetting/Final/201611/SP_1025205/index.html",
                                "words": "旅遊"
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

        if ( _document.scrollTop() >= 300 ){

            $spWrap.find('#spFixedNav').removeClass( 'sp-is--hide' );

        } else {

            $spWrap.find('#spFixedNav').addClass( 'sp-is--hide' );

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
    jQuery('[class ~= GAEventTracking]').live('click', function(e) {


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

        //alert('eventCategory = ' + eventCategory);
        //alert('eventAction = ' + eventAction);
        //alert('eventLabel = ' + eventLabel);
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