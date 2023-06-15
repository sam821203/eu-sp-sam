// fixed nav effect

;(function ($) {

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');


    var goTopEffect = function(selectors) {

        selectors.on('click', function(e) {
            e.preventDefault();

            $htmlBody.animate({

                scrollTop: 0

            }, 300);

        });
    }

    function spScrollNav() {


        var $spWrap = $('#spWrap');
        //var _navBody = ' ';

        var navContent = [
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048121/index.html",
                                "words": "回首頁"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1051101/index.html",
                                "words": "電視購物"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048551/index.html",
                                "words": "流行美妝"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048518/index.html",
                                "words": "秋冬保健"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1024004/index.html",
                                "words": "新品服飾"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048540/index.html",
                                "words": "魅惑內衣"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048535/index.html",
                                "words": "經典鞋包"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048499/index.html",
                                "words": "品味家電"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1051111/index.html",
                                "words": "3C下殺"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048549/index.html",
                                "words": "典藏珠寶"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048513/index.html",
                                "words": "歐系精品"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048514/index.html",
                                "words": "名品手錶"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1044979/index.html",
                                "words": "運動休閒"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048539/index.html",
                                "words": "傢俱寢飾"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048509/index.html",
                                "words": "日用居家"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048525/index.html",
                                "words": "人氣美食"
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1048424/index.html",
                                "words": "旅遊熱點"
                            }
                        ];


        
        //console.log( navContent[0].linkUrl );
                        
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

        }

        buildNav();

        _document.on('scroll', function() {


            if (_document.scrollTop() >= 300) {

                $spWrap.find('#spFixedNav').removeClass('sp-is--hide');

            } else {

                $spWrap.find('#spFixedNav').addClass('sp-is--hide');

            }

        });

        var $spNavLastLi = $spWrap.find('#spFixedNav li:last ');

        goTopEffect($spNavLastLi);

    }

    spScrollNav();


    
} (jQuery));



// ga click

(function() {

     var PHRef = '';


    /* Google _trackEvent()*/
    jQuery(document).ready(function() {

        jQuery('a[class ~= "gaTrackEventshoppintcart"]').live("click", function(e) {
            //e.preventDefault();

            //console.log(  typeof(jQuery(this).attr('PHD') )   ); 
            //console.log("_trackEvent{ PHD = " + jQuery(this).attr('PHD') + " , Href =  " + jQuery(this).attr('Href') + " }"); 

            if (jQuery(this).attr('PHD') == 'black_account') gahref = 'account.aspx';
            else if (jQuery(this).attr('PHD') == 'black_shoppinglist') gahref = 'shoppinglist.aspx';
            else if (jQuery(this).attr('PHD') == 'black_list') gahref = 'comparelist.aspx';
            else if (jQuery(this).attr('PHD') == 'black_view') gahref = 'viewshistory.aspx';
            else if (jQuery(this).attr('PHD') == 'black_pay') gahref = 'pay.aspx';
            else gahref = jQuery(this).attr('Href');


            ga('send', 'event', 'click_shopping', jQuery(this).attr('PHD'), gahref);


            if (typeof(dataLayer) != "undefined") {
                dataLayer.push({
                    'event': 'trackEvent',
                    'event_category': 'click_shopping',
                    'event_action': jQuery(this).attr('PHD'),
                    'event_label': gahref
                });
            }

        });


        // 新版吃的GA
        /* Google _trackEvent() 2013.12.24 更新*/
        jQuery('[class ~= GAEventTracking]').live('click', function(e) {

            //alert(e.target.tagName);
            var targetTagName = e.target.tagName.toLowerCase();
            //e.preventDefault();
            //alert('new PHD = ' + jQuery(this).attr('PHD'))
            //alert('new Href = ' + jQuery(this).attr('Href'))

            var itemNO = 1;
            jQuery('[class ~= GAEventTracking]').removeClass('GAETClick');
            jQuery(this).addClass('GAETClick');

            jQuery('[GA_EventName="' + jQuery(this).attr('GA_EventName') + '"]').each(function(i) {
                if (jQuery(this).hasClass('GAETClick')) {
                    itemNO = (i + 1);
                }
            });

            /*
            if(  (jQuery(this).hasAttr('rel'))  )
            {
                alert('hasAttr');
            }
            else
            {
                alert('noAttr');
            }
            */

            var PicOrText;
            if (jQuery(this).attr('GA_EventPicTxt') == 'pro') {
                PicOrText = (targetTagName == 'img') ? 'pic' : 'text';
            } else if (jQuery(this).attr('GA_EventPicTxt') == 'fakepic') {
                PicOrText = 'pic';
            } else {
                PicOrText = jQuery(this).attr('GA_EventPicTxt');
            }


            var eventCategory;
            if (jQuery('[GA_EventName="' + jQuery(this).attr('GA_EventName') + '"]').size() == 1) {
                if (jQuery(this).attr('GA_EventCount') && jQuery(this).attr('GA_EventCount') == 'NoNum') {
                    eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName');
                } else {
                    eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + PicOrText;
                }
            } else {
                if (jQuery(this).attr('GA_EventCount') && jQuery(this).attr('GA_EventCount') == 'NoNum') {
                    eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName');
                } else {
                    eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + itemNO + '_' + PicOrText;
                }

            }
            var eventAction = jQuery(this).attr('Href');
            var eventActionOri = jQuery(this).attr('Href');


            if (jQuery(this).attr('GA_EventRule') && jQuery(this).attr('GA_EventRule') == 'Y') {
                eventAction = jQuery(this).attr('GA_EventAction');
            }

            var eventLabel;

            switch (jQuery(this).attr('GA_EventPicTxt')) {
                case ('fakepic'):
                    {
                        eventLabel = getMediaImgStr(jQuery(this).attr('VirtualImg'));
                        break;
                    };
                case ('pic'):
                    {
                        eventLabel = getMediaImgStr(jQuery(this).find('img').attr('src'));
                        break;
                    };
                case ('text'):
                    {
                        eventLabel = jQuery(this).text().replace(/^\s+|\s+$/gm, '').replace('\t', '');
                        break;
                    };
                case ('pro'):
                    {

                        if (targetTagName == 'img') {
                            eventLabel = getMediaImgStr(jQuery(this).find('.Gd-pic').attr('src'));
                        } else {
                            eventLabel = jQuery(this).find('.Gd-name').text().replace(/^\s+|\s+$/gm, '').replace('\t', '');
                        }

                        break;
                    };
            };


            eventLabel = '';

            //alert('eventCategory = ' + eventCategory);
            //alert('eventAction = ' + eventAction);
            //alert('eventLabel = ' + eventLabel);
            //return;


            //PHRef
            if (jQuery(this).hasClass('PHType-AD')) {
                if (!jQuery(this).hasClass('PHType-Click')) {
                    if (jQuery(this).attr('Href').toLowerCase().indexOf('aspx') != -1) {
                        if (jQuery(this).attr('Href').toLowerCase().indexOf('scupio') != -1) {
                            (jQuery(this).attr('Href').indexOf('%3f') == -1) ? jQuery(this).attr('Href', eventActionOri + '%3fPHRef=' + eventCategory): jQuery(this).attr('Href', eventActionOri + '%26PHRef=' + eventCategory)
                        } else {
                            (jQuery(this).attr('Href').indexOf('?') == -1) ? jQuery(this).attr('Href', eventActionOri + '?PHRef=' + eventCategory): jQuery(this).attr('Href', eventActionOri + '&PHRef=' + eventCategory)
                        }

                    }
                    jQuery(this).addClass('PHType-Click');
                }
            } else {
                if (!jQuery(this).hasClass('PHType-Click')) {
                    if (PHRef != '' && jQuery(this).attr('Href').toLowerCase().indexOf('aspx') != -1) {
                        if (jQuery(this).attr('Href').toLowerCase().indexOf('scupio') != -1) {
                            (jQuery(this).attr('Href').indexOf('%3f') == -1) ? jQuery(this).attr('Href', eventActionOri + '%3fPHRef=' + PHRef): jQuery(this).attr('Href', eventActionOri + '%26PHRef=' + PHRef)
                        } else {
                            (jQuery(this).attr('Href').indexOf('?') == -1) ? jQuery(this).attr('Href', eventActionOri + '?PHRef=' + PHRef): jQuery(this).attr('Href', eventActionOri + '&PHRef=' + PHRef)
                        }
                    }

                    jQuery(this).addClass('PHType-Click');
                }
            }


            ga('send', 'event', eventCategory, eventAction, eventLabel);

            if (typeof(dataLayer) != "undefined") {
                dataLayer.push({
                    'event': 'trackEvent',
                    'event_category': eventCategory,
                    'event_action': eventAction,
                    'event_label': eventLabel
                });
            }

            fbq('track', 'ViewContent');
        });
    });



})();