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
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051923/index.html",
                                "words": "回首頁",
                                'gaEnevtName': 'SP_1049893_side_home',
                                'gaEnevtType': 'SP_1049893_sidehome'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051799/index.html",
                                "words": "電視熱銷",
                                'gaEnevtName': 'SP_1049968_side',
                                'gaEnevtType': 'SP_1049968_side01'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051748/index.html",
                                "words": "流行服飾",
                                'gaEnevtName': 'SP_1049983_side',
                                'gaEnevtType': 'SP_1049983_side02'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1048540/index.html",
                                "words": "開運內衣",
                                'gaEnevtName': 'SP_1050027_side',
                                'gaEnevtType': 'SP_1050027_side03'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051113/index.html",
                                "words": "強牌精品",
                                'gaEnevtName': 'SP_1050082_side',
                                'gaEnevtType': 'SP_1050082_side04'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051756/index.html",
                                "words": "珠寶福袋",
                                'gaEnevtName': 'SP_1052085_side',
                                'gaEnevtType': 'SP_1052085_side05'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1049228/index.html",
                                "words": "鞋包超低",
                                'gaEnevtName': 'SP_1048894_side',
                                'gaEnevtType': 'SP_1048894_side06'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051095/index.html",
                                "words": "世界名錶",
                                'gaEnevtName': 'SP_1049998_side',
                                'gaEnevtType': 'SP_1049998_side07'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051687/index.html",
                                "words": "開運美妝",
                                'gaEnevtName': 'SP_1051212_side',
                                'gaEnevtType': 'SP_1051212_side08'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051745/index.html",
                                "words": "保健最殺",
                                'gaEnevtName': 'SP_1050099_side',
                                'gaEnevtType': 'SP_1050099_side09'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051814/index.html",
                                "words": "3C送2萬",
                                'gaEnevtName': 'SP_1050088_side',
                                'gaEnevtType': 'SP_1050088_side10'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051746/index.html",
                                "words": "爆殺家電",
                                'gaEnevtName': 'SP_1050103_side',
                                'gaEnevtType': 'SP_1050103_side11'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1060105/index.html",
                                "words": "民生日用",
                                'gaEnevtName': 'SP_1049871_side',
                                'gaEnevtType': 'SP_1049871_side12'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051749/index.html",
                                "words": "美食賀歲",
                                'gaEnevtName': 'SP_1050087_side',
                                'gaEnevtType': 'SP_1050087_side13'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1049229/index.html",
                                "words": "運動福袋",
                                'gaEnevtName': 'SP_1050080_side',
                                'gaEnevtType': 'SP_1050080_side14'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051768/index.html",
                                "words": "傢俱寢飾",
                                'gaEnevtName': 'SP_1049852_side',
                                'gaEnevtType': 'SP_1049852_side15'
                            },
                            {
                                "linkUrl": "http://www.etmall.com.tw/XML/content/DMSetting/Final/201701/SP_1051922/index.html",
                                "words": "旅遊玩樂",
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



