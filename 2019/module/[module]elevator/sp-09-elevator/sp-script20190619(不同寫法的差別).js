// fixed nav effect
;(function ($) {
    // 大小網 URL TODO
    var navContent = [
        {
            "linkUrl": "#",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "主婦最愛買現殺199",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "寵爸科技飛到天涯海角",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "秋禮滿額抽巨獻",
            "target": ""
        },
    ];

    // App URL TODO
    var navContentApp = [
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108614%2fm%2fapp.html&t=0802-0808_%e6%84%9b%e4%bd%a0%e4%b8%80%e8%90%ac%e5%b9%b4%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2",
            "words": "回主會場",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108661%2fm%2fapp.html",
            "words": "寵爸科技",
            "target": ""
        },
        {
            "linkUrl": "etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f201908%2fSP_1108664%2fm%2fapp.html&t=3C%e9%80%9a%e8%a8%8a%e9%80%81%e5%a5%bd%e7%a6%ae",
            "words": "3C通訊",
            "target": ""
        },
    ];

    // 大小網 URL TODO
    var navContent_brand = [
        {
            "linkUrl": "#",
            "words": "資訊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "通訊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "生活",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "旅遊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "精品",
            "target": ""
        },
    ];

    // App URL TODO
    var navContentApp_brand = [
        {
            "linkUrl": "#",
            "words": "資訊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "通訊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "居家",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "生活",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "美妝",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "保健",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "旅遊",
            "target": ""
        },
        {
            "linkUrl": "#",
            "words": "精品",
            "target": ""
        },
    ];

    // TODO: final check -- 確認generateVersion.js中generate的link和script是正確的

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
    var $winWt = $(document).width();

    var $spWrap = $('#elevatorHome');

    var $spFixedNav = $('#spFixedNav');

    var goTopEffect = function (selectors) {
        selectors.on('click', function (e) {
            e.preventDefault();
            $htmlBody.animate({
                scrollTop: 0
            }, 300);

        });
    }

    function addLogo() {

        var $spWrap = $('#spWrap');
        var $spFrame = $spWrap.find('.sp--frame');

        var logo = '<a class="logo__sp" href="//www.etmall.com.tw/" target="_blank"></a>'

        $spFrame.append(logo);
    }

    function addSnow() {
        var $spWrap = $('#spWrap');
        var $spFrame = $spWrap.find('.sp--frame');

        var snowEl = '<div id="spSnowFall" class="sp-snow__wrap"></div>'

        $spFrame.append(snowEl);
    }

    function spScrollNav() {
        var $spWrap = $('#elevatorHome');

        // 從linkData.js取得電梯連結的網址並加上偵測碼
        navContent.forEach(function (el, index) {
            el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
        })
        navContentApp.forEach(function (el, index) {
            var detectString = '%3FlinkNameEv' + (index + 1) + 'linkName';
            var newLink = '';
            // judge 是否為縮網址 TODO 共用主視覺未測
            var isNotAbbreviation = el.linkUrl.match("app.html");
            if (isNotAbbreviation) {
                newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
                el.linkUrl = newLink;
            }
            else {
                // el.linkUrl += detectString;
                // newLink = el.linkUrl.replace('%3F', '?');
                // el.linkUrl;
                // console.log(navContentApp);
            }
        })

        navContent_brand.forEach(function (el, index) {
            el.linkUrl += '?linkNameEv' + (index + 20) + 'linkName';
        })
        navContentApp_brand.forEach(function (el, index) {
            var detectString = '%3FlinkNameEv' + (index + 20) + 'linkName';
            var newLink = '';
            // judge 是否為縮網址 TODO 共用主視覺未測
            var isNotAbbreviation = el.linkUrl.match("app.html");
            if (isNotAbbreviation) {
                newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
                el.linkUrl = newLink;
            }
        })

        function buildNav(isAppNav, isAppNav_brand) {
            var navHtml = '';

            navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
            navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home"><a href="' + isAppNav[0].linkUrl + '" title="回主會場" target="' + isAppNav[0].target + '">回主會場</a></li>';

            // judge which url is active !! 記得要在url後面加上?linkName="value"
            var url = window.location;
            var urlHref = url.href;
            var getSearch = urlHref.split("linkName")[1];
            for (var i = 1; i < isAppNav.length; i++) {
                var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                if (getSearch === getSearch1 && getSearch1 != undefined) {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_g1 "><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '" class="active">' + isAppNav[i].words + '</a></li>';
                }
                else {
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_g1"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                }
            }
            // TODO
            // navHtml += '</ul>';
            //
            // navHtml += '<ul class="sp-nav_ul">';
            navHtml += '<li class="sp-nav__home_2"><a href="">精選品類</a></li>';
            for (var i = 0; i < isAppNav_brand.length; i++) {

                // i=0，進迴圈一次跑兩個; i=1，時不執行
                if (i % 2 === 0) {
                    var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];
                    var getSearch3 = isAppNav_brand[i + 1].linkUrl.split("linkName")[1];
                    navHtml += '<li class="sp-nav__' + i + ' sp-nav_all sp-nav_g2">';
                    isThisPage();
                    navHtml += '</li>';
                }
                // 抓取網址相同 && 自己的網址切割後不是空值
                function clickActive(active1, active2) {
                    navHtml += '<a href="' + isAppNav_brand[i].linkUrl + '" title="' + isAppNav_brand[i].words + '" target="' + isAppNav_brand[i].target + '" class="nav_bg2 ' + active1 + '">' + isAppNav_brand[i].words + '</a>';
                    navHtml += '<a href="' + isAppNav_brand[i + 1].linkUrl + '" title="' + isAppNav_brand[i + 1].words + '" target="' + isAppNav_brand[i + 1].target + '" class="nav_bg2 ' + active2 + '">' + isAppNav_brand[i + 1].words + '</a>';
                }

                function isThisPage() {
                    if (getSearch === getSearch2 && getSearch2 != undefined) {
                        clickActive("active", "");
                    }
                    else if (getSearch === getSearch3 && getSearch3 != undefined) {
                        clickActive("", "active");
                    }
                    else {
                        clickActive("", "");
                    }
                }

                function isThisPage() {
                    var first = isAppNav_brand[i];
                    var second = isAppNav_brand[i + 1];
                    if (getSearch === getSearch2 && getSearch2 != undefined) {
                        navHtml += clickActive(first,true);
                        navHtml += clickActive(second,false);
                    }
                    else if (getSearch === getSearch3 && getSearch3 != undefined) {
                        navHtml += clickActive(first,false);
                        navHtml += clickActive(second,true);
                    }
                    else {
                        navHtml += clickActive(first,false);
                        navHtml += clickActive(second,false);
                    }
                }
                function clickActive(obj, active) {
                    if (active) {
                        return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2 active">' + obj.words + '</a>';
                    } else {
                        return '<a href="' + obj.linkUrl + '" title="' + obj.words + '" target="' + obj.target + '" class="nav_bg2">' + obj.words + '</a>';
                    }
                }

            }
            navHtml += '<li class="sp-nav__bottom"></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            var parent = $('#elevatorHome');
            var body = $('body');
            // var tag = document.createElement('a');
            if (parent) {
                parent.html(navHtml);
            } else {
                body.html(navHtml);
            }
        }

        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildNav(navContentApp, navContentApp_brand);
                $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // not app
            else {
                resizeInitPage();
                $(window).on('resize', resizeInitPage);
            }

        }

        // output value
        initBuild();

        function resizeInitPage() {
            var $winWt = $(document).width();
            var $spWrap = $('#elevatorHome');
            var $spFixedNav = $('#spFixedNav');
            // mobile
            if ($winWt < 1213) {
                buildNav(navContent, navContent_brand);
                $spWrap.find($('#spFixedNav')).removeClass('sp-is--hide');
            }
            // desktop
            else {
                // buildNav(navContentDeskTop);
                buildNav(navContent, navContent_brand);
                $spWrap.find($spFixedNav).addClass('sp-is--hide');
                resizeScrollTop();
            }
        }

        // 滾動效果(For 大網)
        function resizeScrollTop() {
            _document.on('scroll', function () {
                var $spFixedNav = $('#spFixedNav');
                // judge 大網移動距離
                function judgeScrollTop() {
                    if (_document.scrollTop() >= 300) {
                        $spFixedNav.css({
                            "pointer-events": ''
                        });
                        $spWrap.find($spFixedNav).removeClass('sp-is--hide');
                    }
                    else {
                        $spWrap.find($spFixedNav).addClass('sp-is--hide');
                    }
                }

                var $winWt = $(document).width();
                if ($winWt >= 1213) {
                    judgeScrollTop();
                }
            });
        }

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#spFixedNav li:last');
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

    // judge now which isClick
    $('.sp-nav_all > a').click(function () {
        $('.sp-nav_all').removeClass('active');
        $(this).parent().addClass('active');
    });

    // active move in the screen middle
    var $winWt = $(document).width();
    if ($('.active').length) {
        var offsetLeft = $('.active').offset().left - ($winWt / 2);
    }
    $('.sp-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle /.END


    //滑動處理

    var h = document.documentElement.clientHeight,

        mybody = document.getElementsByTagName('body')[0];

    mybody.style.height = h + 'px';

    mybody.addEventListener('touchmove', function (e) {

        e.preventDefault();

        moveEndX = e.changedTouches[0].pageX;

        moveEndY = e.changedTouches[0].pageY;

        X = moveEndX - startX;

        Y = moveEndY - startY;


        if (Math.abs(X) > Math.abs(Y) && X > 0) {

            // alert("向右");

        }

        else if (Math.abs(X) > Math.abs(Y) && X < 0) {

            // alert("向左");

        }

        else if (Math.abs(Y) > Math.abs(X) && Y > 0) {

            // alert("向下");
            $("#elevatorHome").removeClass("elevatorHome--goUp");

        }

        else if (Math.abs(Y) > Math.abs(X) && Y < 0) {

            // alert("向上");
            $("#elevatorHome").addClass("elevatorHome--goUp");
            $("#elevatorHome").parent().append("<p>hello nico</p>");
        }

        else {

            alert("沒滑動");

        }

    });

    //返回角度

    function GetSlideAngle(dx, dy) {

        return Math.atan2(dy, dx) * 180 / Math.PI;

    }


    //根據起點和終點返回方向1：向上，2：向下，3：向左，4：向右,0：未滑動

    function GetSlideDirection(startX, startY, endX, endY) {

        console.log("startX", startX);
        console.log("startY", startY);
        console.log("endX", endX);
        console.log("endY", endY);
        var dy = startY - endY;

        var dx = endX - startX;

        var result = 0;


        //如果滑動距離太短

        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {

            return result;

        }

        var angle = GetSlideAngle(dx, dy);

        if (angle >= -45 && angle < 45) {

            result = 4;

        } else if (angle >= 45 && angle < 135) {

            result = 1;

        } else if (angle >= -135 && angle < -45) {

            result = 2;

        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {

            result = 3;

        }

        return result;

    }


    //滑動處理

    var startX, startY;

    mybody.addEventListener('touchstart', function (ev) {

        ev.preventDefault();

        startX = ev.touches[0].pageX;

        startY = ev.touches[0].pageY;

    }, false);


    mybody.addEventListener('touchmove', function (ev) {

        var endX, endY;

        ev.preventDefault();

        endX = ev.changedTouches[0].pageX;

        endY = ev.changedTouches[0].pageY;


        var direction = GetSlideDirection(startX, startY, endX, endY);

        switch (direction) {

            case 0:

                alert("沒滑動");

                break;

            case 1:

                // alert("向上");

                $("#elevatorHome").addClass("elevatorHome--goUp");
                break;

            case 2:

                // alert("向下");
                console.log("向下");
                $("#elevatorHome").removeClass("elevatorHome--goUp");

                break;

            case 3:

                // alert("向左");

                break;

            case 4:

                // alert("向右");

                break;

            default:

        }

    }, false);
}(jQuery));

