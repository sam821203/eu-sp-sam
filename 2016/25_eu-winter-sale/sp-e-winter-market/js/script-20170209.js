// fixed nav effect

;(function ($) {

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');


    var goTopEffect = function(selectors) {

        if(selectors.on)
        {
            selectors.on('click', function(e) {
                e.preventDefault();
                $htmlBody.animate({
                    scrollTop: 0
                }, 300);
            });
        }
        else
        {
            selectors.live('click', function(e) {
                e.preventDefault();
                $htmlBody.animate({
                    scrollTop: 0
                }, 300);
            });
        }
    }

    function addLogo(){

        var $spContainer = $('#spContainer');
        var spLogo = '<a href="http://www.etmall.com.tw/Pages/Home.aspx" class="e-sp__logo" target="_blank" ga_eventname="SP1052271" ga_eventtype="SP_1052271_logo"></a>';

        //console.log($spContainer);
        $spContainer.append( spLogo );

    }
    addLogo();

    function spScrollNav() {


        var $spWrap = $('#spWrap');

        var navContent = [
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052271/index.html",
                                "words": "回首頁",
                                'gaEnevtName': 'SP_1052271_side_home',
                                'gaEnevtType': 'SP_1052271_sidehome'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052960/index.html",
                                "words": "雪白美妝",
                                'gaEnevtName': 'SP_1052960_side',
                                'gaEnevtType': 'SP_1052960_side01'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052980/index.html",
                                "words": "保健殿堂",
                                'gaEnevtName': 'SP_1052980_side',
                                'gaEnevtType': 'SP_1052980_side02'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052936/index.html",
                                "words": "時尚穿搭",
                                'gaEnevtName': 'SP_1052936_side',
                                'gaEnevtType': 'SP_1052936_side03'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052982/index.html",
                                "words": "3C強打",
                                'gaEnevtName': 'SP_1052982_side',
                                'gaEnevtType': 'SP_1052982_side04'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052988/index.html",
                                "words": "出清家電",
                                'gaEnevtName': 'SP_1052988_side',
                                'gaEnevtType': 'SP_1052988_side05'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052989/index.html",
                                "words": "民生傢寢",
                                'gaEnevtName': 'SP_1052989_side',
                                'gaEnevtType': 'SP_1052989_side06'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052772/index.html",
                                "words": "運休美食",
                                'gaEnevtName': 'SP_1052772_side',
                                'gaEnevtType': 'SP_1052772_side07'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1022562/index.html",
                                "words": "珠寶精品",
                                'gaEnevtName': 'SP_1022562_side',
                                'gaEnevtType': 'SP_1022562_side08'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052986/index.html",
                                "words": "TV夯品",
                                'gaEnevtName': 'SP_1052986_side',
                                'gaEnevtType': 'SP_1052986_side09'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201702/SP_1052984/index.html",
                                "words": "旅遊清艙",
                                'gaEnevtName': 'SP_1052984_side',
                                'gaEnevtType': 'SP_1052984_side10'
                            }
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051746/index.html",
                            //     "words": "爆殺家電",
                            //     'gaEnevtName': 'SP_1050103_side',
                            //     'gaEnevtType': 'SP_1050103_side11'
                            // },
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1060105/index.html",
                            //     "words": "民生日用",
                            //     'gaEnevtName': 'SP_1049871_side',
                            //     'gaEnevtType': 'SP_1049871_side12'
                            // },
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051749/index.html",
                            //     "words": "美食賀歲",
                            //     'gaEnevtName': 'SP_1050087_side',
                            //     'gaEnevtType': 'SP_1050087_side13'
                            // },
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1049229/index.html",
                            //     "words": "運動福袋",
                            //     'gaEnevtName': 'SP_1050080_side',
                            //     'gaEnevtType': 'SP_1050080_side14'
                            // },
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051768/index.html",
                            //     "words": "傢俱寢飾",
                            //     'gaEnevtName': 'SP_1049852_side',
                            //     'gaEnevtType': 'SP_1049852_side15'
                            // },
                            // {
                            //     "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051922/index.html",
                            //     "words": "旅遊玩樂",
                            //     'gaEnevtName': 'SP_1050022_side',
                            //     'gaEnevtType': 'SP_1050022_side16'
                            // }
                        ];



        function buildNav(){

            var gaName = 'ga_eventname=';
            var gaType = 'ga_eventtype=';

            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav sp-is--hide">';
            navHtml += '<ul>';
            navHtml += '<li class="sp-nav__home"><a href="' + navContent[0].linkUrl + '" ' + gaName + navContent[0].gaEnevtName + ' ' + gaType + navContent[0].gaEnevtType + ' title="' + navContent[0].words + '">' + navContent[0].words + navContent[0].gaEnevtName + navContent[0].gaEnevtName + '</a></li>';

            for ( var i = 1; i < navContent.length; i++ ){
                
                navHtml += '<li class="sp-nav__' + i + '"><a href="' + navContent[i].linkUrl + '" ' + gaName + navContent[i].gaEnevtName + ' ' + gaType + navContent[i].gaEnevtType + ' title="' + navContent[i].words + '">' + navContent[i].words + '</a></li>';
                
            }

            navHtml += '<li class="sp-nav__top"><a href="" title="TOP">TOP</a></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            $spWrap.append( navHtml );

            //console.log( navContent );

        }

        buildNav();
        
        if(_document.on)
        {
            _document.on('scroll', function() {
                if (_document.scrollTop() >= 300)
                {
                    $spWrap.find('#spFixedNav').removeClass('sp-is--hide');
                }
                else
                {
                    $spWrap.find('#spFixedNav').addClass('sp-is--hide');
                }
            });
        }
        else
        {
            
            jQuery(window).scroll(function(){
                if (_document.scrollTop() >= 300)
                {
                    $spWrap.find('#spFixedNav').removeClass('sp-is--hide');
                }
                else
                {
                    $spWrap.find('#spFixedNav').addClass('sp-is--hide');
                }
            });
            
        }

        var $spNavLastLi = $spWrap.find('#spFixedNav li:last ');

        goTopEffect($spNavLastLi);

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



