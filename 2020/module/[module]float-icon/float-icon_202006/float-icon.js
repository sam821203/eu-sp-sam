// 設定連結網址(不需要的網址需要移除內容)
var promoLink = 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202006/SP_1115727/w/index.html';
var mobileLink = 'https://www.etmall.com.tw/XML/content/DMSetting/Final/202006/SP_1115727/w/index.html';
var appLink = 'etmall://open?pgid=44&url=https%3a%2f%2fwww.etmall.com.tw%2fXML%2fcontent%2fDMSetting%2fFinal%2f202006%2fSP_1115727%2fm%2fapp.html&t=%e4%bd%a0%e6%b6%88%e8%b2%bb%e6%88%91%e8%b2%b7%e5%96%ae%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9%e7%b6%b2';

// 加入hammer 套件
var headElement = document.getElementsByTagName("head")[0];

mobileLink ? mobileLink : promoLink;
appLink ? appLink : promoLink;

// ==========================================================================
// 要時間控制打開下面這行(拿掉最前面兩個//)，並關掉下面兩行(最前面加上//)
// spTimeLimit();

// 不需要時間控制、要全露出，則打開下面兩行(拿掉最前面兩個//)，並關掉上面那行(最前面加上//)
addMedia();
initIcon();
// ==========================================================================

// ==========================================================================
// 有需要時間控制的話在此處控制
// time limit
function spTimeLimit() {
    var promoMonth = 11;

    var dateNowMonth = new Date().getMonth();
    var dateNowDate = new Date().getDate();
    var dateNowHours = new Date().getHours();
    var script = document.getElementById('scriptIconFloat');

    if (script) {
        if (dateNowMonth === (promoMonth - 1)) {
            switch (dateNowDate) {
                case 4:
                case 7:
                    switch (dateNowHours) {
                        case 18:
                        case 19:
                        case 20:
                        case 21:
                        case 22:
                            addMedia();
                            initIcon();
                            break;
                        default:
                            script.parentElement.removeChild(script);
                            break;
                    }
                    break;
                case 11:
                    addMedia();
                    initIcon();
                    break;
                default:
                    script.parentElement.removeChild(script);
                    break;
            }
        }
    } else {
        script.parentElement.removeChild(script);
    }
}
// ==========================================================================

function initIcon() {
    // 判斷 app-view | web-view
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

    // app ? not app
    if (isUiWebview) {
        iconFloat(appLink);
    }
    else {
        window.addEventListener('load', isWinWt);
        window.addEventListener('resize', isWinWt);
    }
}

// core
function iconFloat(href, posX, posY) {
    function oldIconCheck() {
        var oldIcon = document.getElementById('iconFloat');

        if (oldIcon) {
            oldIcon.parentNode.removeChild(oldIcon);
        }
    }

    oldIconCheck();

    function addStyle(elParent) {
        elParent.style.position = 'relative';

        if (elParent === parent) {
            var style = {
                'top': posY ? (posY + 'px') : 0,
                'left': posX ? (posX + 'px') : 'auto',
            };
        } else if (elParent === spWrap) {
            var style = {
                'display': 'inline',
                'top': posY ? (posY + 'px') : 'auto',
                'left': posX ? (posX + 'px') : 'calc(50% + 480px - 15px)',
                'right': posX ? (posX + 'px') : 'auto',
                'transform': 'translateX(-100%)',
            }
        } else {
            var style = {
                'display': 'inline',
                'top': posY ? (posY + 'px') : 0,
                'left': posX ? (posX + 'px') : 'calc(50% + 480px - 15px)',
                'right': posX ? (posX + 'px') : 'auto',
                'transform': 'translateX(-100%)',
            }
        }

        var styleContent = '';

        for (var attr in style) {
            styleContent += attr + ':' + style[attr] + ';';
        }
        tag.setAttribute('style', styleContent);
    }

    var parent = document.getElementById('iconHome');
    var spWrap = document.getElementById('spWrap');
    var tableParent = document.getElementsByTagName('table')[0];
    var body = document.body;
    var tag = document.createElement('a');
    tag.href = href ? href : promoLink;

    var script = document.getElementById('scriptIconFloat');
    var timeStamp = '?' + new Date().getDate() + new Date().getMinutes();
    var scriptLink = script.src;
    var imgSrc = scriptLink.split('float-icon.js')[0] + 'floaticon_web.gif' + timeStamp;
    var imgSrcMobile = scriptLink.split('float-icon.js')[0] + 'floaticon_mobile.png' + timeStamp;
    var imgInTag = document.createElement('img');
    var imgMobileInTag = document.createElement('img');
    var createMobileDiv = document.createElement('div');
    var createMobileDiv_2 = document.createElement('div');
    // var hammer__icon__sy = ''
    createMobileDiv.className = 'hammer__icon';
    createMobileDiv.setAttribute("id", "hammerIcon");
    createMobileDiv_2.className = 'icon__wrap';
    tag.appendChild(createMobileDiv);
    createMobileDiv.appendChild(createMobileDiv_2);
    createMobileDiv_2.appendChild(imgMobileInTag)
    imgInTag.src = imgSrc;
    imgInTag.className = 'float-icon';
    imgInTag.style = 'width: auto; max-width: none;';
    imgMobileInTag.src = imgSrcMobile;
    imgMobileInTag.className = 'float-icon--mobile';
    tag.appendChild(imgInTag);
    tag.id = 'iconFloat';
    tag.className = 'icon-float';

    // 判斷進入時有什麼值加上的這個浮水標
    if (parent) {
        parent.insertBefore(tag, parent.firstChild);
        addStyle(parent);
    } else if (spWrap) {
        spWrap.insertBefore(tag, spWrap.firstChild);
        addStyle(spWrap);
    } else {
        body.insertBefore(tag, body.firstChild);
        addStyle(body);
    }
}

// add genaral style in style tag
function addMedia() {
    var media = '.icon-float{position: absolute;z-index: 50;right: 15px;}.float-icon--mobile{display: none;}@media screen and (max-width: 960px){.icon-float{position: static;}.float-icon{display: none;}.float-icon--mobile{display: block;  width: 17vw;}.hammer__icon{z-index: 300;display: none;position: fixed;bottom: 150px;right: 0;margin-right: 10px;width: 22%;}.hammer__icon .icon__wrap{position: relative;opacity: 1;}.hammer__icon img{width: 100%;height: auto;max-width: 132px;}@media screen and (max-width: 960px){.hammer__icon{display: block;display: flex;justify-content:flex-end;}';
    var mediaNode = document.createTextNode(media);
    var meidaStyle = document.createElement('style');
    meidaStyle.appendChild(mediaNode);
    document.head.appendChild(meidaStyle);
}

// decide screen size
function isWinWt() {
    var winWt = document.body.clientWidth;

    if (winWt >= 960) {
        // web
        iconFloat();
    }
    else {
        // mobile
        iconFloat(mobileLink);
    }
}

// 等html內容跑出來，settimeOut = 0 主序列執行完就盡快執行
// 方法1
var targetIndex;
var timer = setInterval(function () {

    countDownTimer();

    // 結束時處理
    if (targetIndex) clearInterval(timer);
}, 1000);
// 方法2
// setTimeout(function () {
//     countDownTimer();
// }, 0);

// window.addEventListener("load",function () {
function countDownTimer() {

    var hammerIcon = '#hammerIcon';

    $(function Hammerfu() {
        var reqAnimationFrame = (function () {
            return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
        var el = document.querySelector(hammerIcon);
        var es = el.style;
        var START_X = 0; //初始x軸
        var START_Y = 0; //初始y軸
        var px = START_X; //移動x軸
        var py = START_Y; //移動y軸
        var ticking = false;
        var transform;
        var elw = el.offsetWidth; //物件寬
        var elh = el.offsetHeight; //物件高
        var ww = window.innerWidth; //視窗寬
        var wh = window.innerHeight; //視窗高
        var mc = new Hammer(el);
        mc.add(new Hammer.Pan({threshold: 0, pointers: 0})); //水平平移
        mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan')); //快速滑動
        mc.on("panstart panmove", onPan);
        mc.on("hammer.input", function (ev) {
            if (ev.isFinal) {
                //更新Y軸
                // py = py + ev.deltaY;
                // START_Y = py;
                // if (START_Y > -elh * 0.5) {
                //     py = START_Y = -elh * 0.5;
                // } else if (START_Y < -( wh - elh )) {
                //     py = START_Y = -( wh - elh );
                // }
                //貼齊X軸左右
                // if (ev.deltaX - elw * 0.5 > -ww * 0.5) {
                //     START_X = 0;
                //     el.classList.remove('js-stickleft');
                //     el.classList.add('js-stickright');
                // } else {
                //     START_X = -ww + elw;
                //     el.classList.remove('js-stickright');
                //     el.classList.add('js-stickleft');
                // }
                resetElement();
            }
        });
        function resetElement() {
            transform = {
                translate: {
                    x: START_X,
                    y: START_Y
                },
                speed: 300,
                scale: 1,
                angle: 0,
                rx: 0,
                ry: 0,
                rz: 0
            };
            requestElementUpdate();
        };
        function updateElementTransform() {
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(' + transform.translate.x + 'px,' + transform.translate.y + 'px,0px)';
            es.webkitTransitionDuration = es.MsTransition = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = ' ' + transform.speed + 'ms';
            ticking = false;
        };
        function requestElementUpdate() {
            if (!ticking) {
                reqAnimationFrame(updateElementTransform);
                ticking = true;
            }
            ;
        };
        function onPan(ev) {
            transform = {
                translate: {
                    x: START_X + ev.deltaX,
                    y: START_Y + ev.deltaY
                },
                speed: 0,
            };
            requestElementUpdate();
        };
        resetElement();
    });


//jQuery scroll事件，支源scroll srart與scroll stop
    (function () {
        var special = jQuery.event.special,
            uid1 = 'D' + (+new Date()),
            uid2 = 'D' + (+new Date() + 1);
        special.scrollstart = {
            setup: function () {
                var timer,
                    handler = function (evt) {
                        var _self = this,
                            _args = arguments;
                        if (timer) {
                            clearTimeout(timer);
                        } else {
                            evt.type = 'scrollstart';
                            jQuery.event.dispatch.apply(_self, _args);
                        }
                        timer = setTimeout(function () {
                            timer = null;
                        }, special.scrollstop.latency);
                    };
                jQuery(this).bind('scroll', handler).data(uid1, handler);
            },
            teardown: function () {
                jQuery(this).unbind('scroll', jQuery(this).data(uid1));
            }
        };
        special.scrollstop = {
            latency: 300,
            setup: function () {
                var timer,
                    handler = function (evt) {
                        var _self = this,
                            _args = arguments;
                        if (timer) {
                            clearTimeout(timer);
                        }
                        timer = setTimeout(function () {
                            timer = null;
                            evt.type = 'scrollstop';
                            jQuery.event.dispatch.apply(_self, _args);
                        }, special.scrollstop.latency);
                    };
                jQuery(this).bind('scroll', handler).data(uid2, handler);
            },
            teardown: function () {
                jQuery(this).unbind('scroll', jQuery(this).data(uid2));
            }
        };
    })();


    /*滑動過程狀態改變*/
    $(function () {
        var _self = $(hammerIcon);
        var dow = $(window);

        //收合
        function selfhide(val) {
            if (_self.hasClass('js-stickleft')) {
                _self.css('right', _self.width() * val);
            } else {
                _self.css('right', _self.width() * -val);
            }
            ;
        };

        //顯示
        function selfshow(val) {
            if (_self.hasClass('js-stickleft')) {
                _self.css('right', val);
            } else {
                _self.css('right', val);
            }
            ;
        };

        //初始 可控制出來要在哪
        selfhide(0);
        //大於300px才顯示
        // dow.bind('scroll', function () {
        //     if ($(this).scrollTop() < 300) {
        //         selfhide(1);
        //     };
        // });
        //滑動時收合
        dow.bind('scrollstart', function () {
            if ($(this).scrollTop() > 300) {
                selfhide(0.72);
            }
            ;
        });
        //滑動後出現
        dow.bind('scrollstop', function () {
            if ($(this).scrollTop() > 300) {
                selfshow(0);
            }
            ;
        });
        //關掉廣告
        // _self.find('.closeButton').click(function () {
        //     _self.hide();
        // });
    });
// });
    targetIndex = true;
}