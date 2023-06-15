// fixed nav effect

;(function ($) {

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
        
        //var getSPID = location.href.toLowerCase().indexOf('sp_')[1].split('/')[0];


    var goTopEffect = function(selectors) {

        selectors.on('click', function(e) {
            e.preventDefault();

            $htmlBody.animate({

                scrollTop: 0

            }, 300);

        });
    }

    function spCountdown() {
        var countHtml = '';
        countHtml +='<div id="spCountDown" class="sp__countdown">';
        countHtml +='<div class="sp--1260"><p></p></div>';
        countHtml +='</div>';

        var countHtml2 = '';
        countHtml2 +='<div id="spCountDown2" class="sp__countdown2">';
        countHtml2 +='<div class="sp--1260"><p></p></div>';
        countHtml2 +='</div>';

        $('#spContainer').before( countHtml );
        $('#spContainer').before( countHtml2 );
        
        setInterval(function time() {
            var now = new Date();
            var days = now.getDate();
            var hours = 23 - now.getHours();
            var min = 60 - now.getMinutes();
            var sec = 60 - now.getSeconds();

            if (min.toString().length === 1) {
                min = '0' + min;
            }
            if (sec.toString().length === 1) {
                sec = '0' + sec;
            }
            if (hours.toString().length === 1) {
                hours = '0' + hours;
            }


            $('#spCountDown p').html('<span>' + hours + '</span>' + '<span>' + min + '</span>' + '<span>' + sec + '</span>');
            $('#spCountDown2 p').html('<span>' + hours + '</span>' + '<span>' + min + '</span>' + '<span>' + sec + '</span>');

            if ( days === 12 ) {
                $('.sp__countdown2').hide();
                $('.sp__countdown').show();
            }

            if ( days === 13 ) {
                $('.sp__countdown').hide();
                $('.sp__countdown2').show();
            }

        }, 1000);

        
        

    }
    spCountdown();
    
    

    function spScrollNav() {

        var $spWrap = $('#spWrap');

        var navContent = [
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049893/index.html",
                                "words": "回首頁",
                                'gaEnevtName': 'SP_1049893_side_home',
                                'gaEnevtType': 'SP_1049893_sidehome'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049968/index.html",
                                "words": "電視購物",
                                'gaEnevtName': 'SP_1049968_side',
                                'gaEnevtType': 'SP_1049968_side01'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1049983/index.html",
                                "words": "流行美妝",
                                'gaEnevtName': 'SP_1049983_side',
                                'gaEnevtType': 'SP_1049983_side02'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1050027/index.html",
                                "words": "保健養身",
                                'gaEnevtName': 'SP_1050027_side',
                                'gaEnevtType': 'SP_1050027_side03'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201611/SP_1050082/index.html",
                                "words": "新品服飾",
                                'gaEnevtName': 'SP_1050082_side',
                                'gaEnevtType': 'SP_1050082_side04'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1052085/index.html",
                                "words": "魅惑內衣",
                                'gaEnevtName': 'SP_1052085_side',
                                'gaEnevtType': 'SP_1052085_side05'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1048894/index.html",
                                "words": "經典鞋包",
                                'gaEnevtName': 'SP_1048894_side',
                                'gaEnevtType': 'SP_1048894_side06'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049998/index.html",
                                "words": "時尚家電",
                                'gaEnevtName': 'SP_1049998_side',
                                'gaEnevtType': 'SP_1049998_side07'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/Pages/SimpleTemplate.aspx?SubPage=DMSetting/Final/201611/SP_1051128/index.html&PHRef=Home_501Tab3BN_pic",
                                "words": "3C強打",
                                'gaEnevtName': 'SP_1051212_side',
                                'gaEnevtType': 'SP_1051212_side08'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050099/index.html",
                                "words": "珍藏珠寶",
                                'gaEnevtName': 'SP_1050099_side',
                                'gaEnevtType': 'SP_1050099_side09'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050088/index.html",
                                "words": "歐系精品",
                                'gaEnevtName': 'SP_1050088_side',
                                'gaEnevtType': 'SP_1050088_side10'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050103/index.html",
                                "words": "名品手錶",
                                'gaEnevtName': 'SP_1050103_side',
                                'gaEnevtType': 'SP_1050103_side11'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049871/index.html",
                                "words": "運動休閒",
                                'gaEnevtName': 'SP_1049871_side',
                                'gaEnevtType': 'SP_1049871_side12'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050087/index.html",
                                "words": "傢俱寢飾",
                                'gaEnevtName': 'SP_1050087_side',
                                'gaEnevtType': 'SP_1050087_side13'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050080/index.html",
                                "words": "民生日用",
                                'gaEnevtName': 'SP_1050080_side',
                                'gaEnevtType': 'SP_1050080_side14'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049852/index.html",
                                "words": "網購美食",
                                'gaEnevtName': 'SP_1049852_side',
                                'gaEnevtType': 'SP_1049852_side15'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050022/index.html",
                                "words": "旅遊玩樂",
                                'gaEnevtName': 'SP_1050022_side',
                                'gaEnevtType': 'SP_1050022_side16'
                            }
                        ];



        function buildNav(){

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul>';
            navHtml += '<li class="sp-nav__home"><a class="GAEventTracking" ga_eventname="'+ navContent[0].gaEnevtName +'" ga_eventtype="'+ navContent[0].gaEnevtType +'" href="' + navContent[0].linkUrl + '" title="' + navContent[0].words + '">' + navContent[0].words + '</a></li>';
 
            for ( var i = 1; i < navContent.length; i++ ){
                
                navHtml += '<li class="sp-nav__' + i + '"><a class="GAEventTracking" ga_eventname="'+ navContent[i].gaEnevtName +'" ga_eventtype="'+ navContent[i].gaEnevtType +'" href="' + navContent[i].linkUrl + '" title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';
                
            }

            navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            $spWrap.append( navHtml );

            //console.log( navContent );

        }

        buildNav();

        function changeNavLi() {
            var liHome = 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049912/index.html';

            setInterval(function time2() {
                var now2 = new Date();
                var days2 = now2.getDate();
                var hours2 = now2.getHours();
                var min2 = now2.getMinutes();

                //console.log(min2);
                //console.log($('#spFixedNav').find('li').eq(0).find('a').attr('href'));
                if ( days2 == 13 ) {
                    $('#spFixedNav').find('li').eq(0).find('a').attr('href', 'http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1049912/index.html')
                }

            }, 1000);


        }
        changeNavLi();
        

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

