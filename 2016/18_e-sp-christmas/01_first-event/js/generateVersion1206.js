;(function ($) {

    function buildVersion() {

        var $head = $('head');
        var now = new Date()
        var days = now.getDate();
        var min = now.getMinutes();

        var cssLink = $('<link type="text/css" href="http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048784/css/sp-common1206.css?' + days + min + '" rel="stylesheet">');

        //var cssLink = $('<link type="text/css" href="css/sp-common1129.css?' + days + min + '" rel="stylesheet">');

        $head.append(cssLink);

        $head.append($.getScript("http://www.etmall.com.tw/XML/content/DMSetting/Final/201610/SP_1048784/js/sp-script1206.js"));
        //$head.append($.getScript("js/sp-script1206.js"));

    }

    buildVersion();


} (jQuery));


//getUrlQueryByName
;(function($) {
    $.getUrlQueryByName = function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name.toLowerCase() + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search.toLowerCase());
        if (results == null) return "";
        else return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
}(jQuery));



// ga click
var PHRef = '';

var utm_source = $.getUrlQueryByName('utm_source');
var utm_medium = $.getUrlQueryByName('utm_medium');
var utm_campaign = $.getUrlQueryByName('utm_campaign');

/* Google _trackEvent()*/
jQuery(document).ready(function() {


/*
    jQuery('a[class ~= "gaTrackEventshoppintcart"]').live("click", function(e) {

    //jQuery(document).live('click', 'a[class ~= "gaTrackEventshoppintcart"]', function(e) {
        //e.preventDefault();
    //alert(e.target.tagName);
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
*/


    // 新版吃的GA
    /* Google _trackEvent() 2013.12.24 更新*/
    jQuery('[class ~= GAEventTracking]').live('click', function(e) {
    //jQuery(document).live('click', '[class ~= GAEventTracking]', function (e) {

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
                //eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + PicOrText;
                eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName');
            }
        } else {
            if (jQuery(this).attr('GA_EventCount') && jQuery(this).attr('GA_EventCount') == 'NoNum') {
                eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName');
            } else {
                //eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + itemNO + '_' + PicOrText;
                eventCategory = jQuery(this).attr('GA_EventType') + '_' + jQuery(this).attr('GA_EventName') + '_' + itemNO;
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


        //add URL query string
        var oriHref;
    
if(jQuery(this).attr('Href').indexOf('#') == -1)
{
        if (jQuery(this).attr('Href').indexOf('?') != -1) {
            oriHref = jQuery(this).attr('Href') + '&utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + utm_campaign;
        } else {
            oriHref = jQuery(this).attr('Href') + '?utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + utm_campaign;
        }
        jQuery(this).attr('Href', oriHref);

        //alert(  jQuery(this).attr('Href')  )
}



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