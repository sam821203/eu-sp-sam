/*
 ** TODO 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 確認generateVersion.js中generate的link和script是正確的
 */

$(function () {
    /*
     ** TODO 電梯DATA ******************
     */
    // 左側電梯-活動-大網
    var navContent = [
        {
            "linkUrl": "#bar1",
            "words": "Apple ",
            "target": ""
        },
        {
            "linkUrl": "#bar2",
            "words": "Samsung",
            "target": ""
        },
        {
            "linkUrl": "#bar3",
            "words": "realme ",
            "target": ""
        },
        {
            "linkUrl": "#bar4",
            "words": "手機開掛",
            "target": ""
        },
        {
            "linkUrl": "#bar5",
            "words": "平板尋寶",
            "target": ""
        },
        {
            "linkUrl": "#bar6",
            "words": "穿戴加成",
            "target": ""
        },
        {
            "linkUrl": "#bar7",
            "words": "周邊任搭",
            "target": ""
        },
         
    ];

    // 左側電梯-活動-App
    var navContentApp = [
        {
            "linkUrl": "#bar1",
            "words": "Apple",
            "target": ""
        },
        {
            "linkUrl": "#bar2",
            "words": "Samsung",
            "target": ""
        },
        {
            "linkUrl": "#bar3",
            "words": "realme ",
            "target": ""
        },
        {
            "linkUrl": "#bar4",
            "words": "手機開掛",
            "target": ""
        },
        {
            "linkUrl": "#bar5",
            "words": "平板尋寶",
            "target": ""
        },
        {
            "linkUrl": "#bar6",
            "words": "穿戴加成",
            "target": ""
        },
        {
            "linkUrl": "#bar7",
            "words": "周邊任搭",
            "target": ""
        },
         
    ];

    /*
     ** 判斷左右兩邊電梯是否出現
     */
    var leftNav = false;
    var rightNav = true;
    if (!leftNav && !rightNav) return false;

    var _window = $(window),
        _document = $(document),
        $htmlBody = $('html, body');
    var $winWt = $(document).width();

    var $spWrap = $('#navRightBar');

    var $spFixedNav = $('#spFixedNav');
    // 配合css 決定大小網寬度
    var $screenChangeWt = 1212;

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

    /*
     ** 增加參數
     */
    // function addLinkName() {
    //     // 從linkData.js取得電梯連結的網址並加上偵測碼 目的:判斷是哪一頁
    //     navContent.forEach(function (el, index) {
    //         el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
    //     });
    //     navContentApp.forEach(function (el, index) {
    //         var detectString = '%3FlinkNameEv' + (index + 1) + 'linkName';
    //         var newLink = '';
    //         // judge 是否為縮網址 TODO 共用主視覺未測
    //         var isNotAbbreviation = el.linkUrl.match("app.html");
    //         if (isNotAbbreviation) {
    //             newLink = el.linkUrl.replace('app.html', 'app.html' + detectString);
    //             el.linkUrl = newLink;
    //         }
    //     });
    //
    // }

    // addLinkName();

    var url = window.location;
    var urlHref = url.href;
    // var getSearch = urlHref.split("linkName")[1];

    /*
     ** 右邊電梯
     */
    function spScrollRightNav() {

        var $spWrap = $('#navRightBar');

        function buildNav(isAppNav) {
            var navHtml = '';

            navHtml += '<nav id="spRightNav" class="sp-right__nav">';
            navHtml += '<ul class="sp-nav-right_ul js-nav_ul" id="spNavRightUl">';
            navHtml += '<li class="sp-bav_top_img"></li>';

            /*
             ** judge which url is active !!
             * 記得要在url後面加上?linkName="value"
             */
            // var url = window.location;
            // var urlHref = url.href;
            // var getSearch = urlHref.split("linkName")[1];
            for (var i = 0; i < isAppNav.length; i++) {
                // var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

                // 抓取網址相同 && 自己的網址切割後不是空值
                // if (getSearch === getSearch1 && getSearch1 != undefined) {
                //     navHtml += '<li class="sp-nav__' + i + ' sp__nav__all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '"  target="' + isAppNav[i].target + '" class="active">' + isAppNav[i].words + '</a></li>';
                // }
                // else {
                //     navHtml += '<li class="sp-nav__' + i + ' sp__nav__all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
                // }


                navHtml += '<li class="sp-nav__' + i + ' sp__nav__all sp-nav_right"><a href="' + isAppNav[i].linkUrl + '" title="' + isAppNav[i].words + '" target="' + isAppNav[i].target + '">' + isAppNav[i].words + '</a></li>';
            }


            navHtml += '<li class="sp-nav-right__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
            navHtml += '</ul>';
            navHtml += '</nav>';

            elevatorHomeAddWhere();

            /*
             ** 電梯加在後面
             */
            function elevatorHomeAddWhere() {
                var parent = $('#navRightBar');
                var body = $('body');
                if (parent) {
                    parent.html(navHtml);
                } else {
                    body.html(navHtml);
                }
            }
        }


        // judge app | not app
        function initBuild() {
            // app-view | web-view
            var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);

            // is app
            if (isUiWebview) {
                buildNav(navContentApp);
            }
            // not app
            else {
                // is desktop | mobile
                resizeInitPage();
                $(window).on('resize', resizeInitPage);
            }

        }

        function resizeInitPage() {
            var $winWt = $(document).width();
            var $spWrap = $('#navRightBar');
            var $spRightNav = $('#spRightNav');
            // desktop
            if ($winWt > $screenChangeWt) {
                buildNav(navContent);
            }
            // mobile
            else {
                buildNav(navContent);
            }
        }


        // output value
        initBuild();

        // last li contact 'top'
        var $spNavLastLi = $spWrap.find('#navTop');
        goTopEffect($spNavLastLi);

    }

    spScrollRightNav();
    // judge now which isClick
    $('.js-sp__nav__all > a').click(function () {
        $('.js-sp__nav__all a').removeClass('active');
        $(this).addClass('active');
    });

    // active move in the screen middle
    var $winWt = $(document).width();
    if ($('.active').length) {
        var offsetLeft = $('.active').offset().left - ($winWt / 2);
    }
    $('.js-nav_ul').stop().animate({
        scrollLeft: offsetLeft,
    });
    // active move in the screen middle

    /*
     ** 滾動function
     */
    $('a[href^="#"]').on('click', function (e) {
        var target;
        // 判斷有沒有id
        if ($(this.getAttribute('href')).length) {
            target = $(this.getAttribute('href'));
            console.log('aaa')
        } else {
            target = $('[data-title=' + this.getAttribute('href').split('#')[1] + ']');
        }
        console.log(target)
        // 判斷有沒有data-title
        if (target.length) {
            e.preventDefault();

            $('html,body').stop().animate({
                scrollTop: target.offset().top - 10
            }, 500);
        }
    });
});
