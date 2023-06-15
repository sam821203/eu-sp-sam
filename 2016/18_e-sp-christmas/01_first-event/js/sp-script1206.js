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
        var spLogo = '<a href="http://www.etmall.com.tw/Pages/Home.aspx" class="e-sp__logo" target="_blank"></a>';

        //console.log($spContainer);
        $spContainer.append( spLogo );

    }
    addLogo();

    function spScrollNav() {


        var $spWrap = $('#spWrap');

        var navContent = [
                            {
                                "linkUrl": "http://www.etmall.com.tw/Pages/MKT_16113000041012.ASPX",
                                "words": "回首頁",
                                'gaEnevtName': 'SP_1049893_side_home',
                                'gaEnevtType': 'SP_1049893_sidehome'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050535/index.html",
                                "words": "電視購物",
                                'gaEnevtName': 'SP_1049968_side',
                                'gaEnevtType': 'SP_1049968_side01'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050531/index.html",
                                "words": "流行美妝",
                                'gaEnevtName': 'SP_1049983_side',
                                'gaEnevtType': 'SP_1049983_side02'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050517/index.html",
                                "words": "窈窕保健",
                                'gaEnevtName': 'SP_1050027_side',
                                'gaEnevtType': 'SP_1050027_side03'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050512/index.html",
                                "words": "熱銷服飾",
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
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050509/index.html",
                                "words": "經典鞋包",
                                'gaEnevtName': 'SP_1048894_side',
                                'gaEnevtType': 'SP_1048894_side06'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050482/index.html",
                                "words": "時尚家電",
                                'gaEnevtName': 'SP_1049998_side',
                                'gaEnevtType': 'SP_1049998_side07'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1051216/index.html",
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
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050428/index.html",
                                "words": "歐系精品",
                                'gaEnevtName': 'SP_1050088_side',
                                'gaEnevtType': 'SP_1050088_side10'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050165/index.html",
                                "words": "名品手錶",
                                'gaEnevtName': 'SP_1050103_side',
                                'gaEnevtType': 'SP_1050103_side11'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050378/index.html",
                                "words": "運動休閒",
                                'gaEnevtName': 'SP_1049871_side',
                                'gaEnevtType': 'SP_1049871_side12'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050527/index.html",
                                "words": "傢俱寢飾",
                                'gaEnevtName': 'SP_1050087_side',
                                'gaEnevtType': 'SP_1050087_side13'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050534/index.html",
                                "words": "民生日用",
                                'gaEnevtName': 'SP_1050080_side',
                                'gaEnevtType': 'SP_1050080_side14'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050510/index.html",
                                "words": "美食派對",
                                'gaEnevtName': 'SP_1049852_side',
                                'gaEnevtType': 'SP_1049852_side15'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201612/SP_1050511/index.html",
                                "words": "旅遊熱點",
                                'gaEnevtName': 'SP_1050022_side',
                                'gaEnevtType': 'SP_1050022_side16'
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



