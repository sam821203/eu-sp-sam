/**
 * Created by jing on 2020/4/23.
 */

// click nav and scroll to hash tag
// 點擊誘因可下連宮格
// ================================
if (window.jQuery) {
    $('a[href^="#"]').on('click', function (e) {
        var target;
        // 判斷有沒有id
        if ($(this.getAttribute('href')).length) {
            target = $(this.getAttribute('href'));
        } else {
            target = $('[data-title=' + this.getAttribute('href').split('#')[1] + ']');
        }
        // 判斷有沒有data-title
        if (target.length) {
            e.preventDefault();

            $('html,body').stop().animate({
                scrollTop: target.offset().top - 10
            }, 500);
        }
    });
}

// 不支援 IE9 公告
// ================================
function isIE9() {
    if (navigator.appName.indexOf("Internet Explorer") != -1) {
        // not IE10, IE11
        var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
        if (badBrowser) return true;
        else return false;
    } else return false;
}
function makeIE9Alert() {
    // 檢測是否為ie9，不是就不執行
    if (!isIE9()) return false;
    // 判斷網址決定塞哪個qrcode(不是umall就都秀etmall)
    var detectLink = location.href.indexOf("u-mall") == -1;
    var etmallText = "東森會員";
    var umallText = "森森會員"
    var memberText = detectLink ? etmallText : umallText;

    var alertText = "您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。";


    alert(memberText + alertText);
}
var notSupportIE9Alert = makeIE9Alert();

// go top
// ================================
// function
var basicScrollTop = function () {
    // The button
    var btnTop = document.getElementById('goTop');
    // Reveal the button
    var btnReveal = function () {
        if (window.scrollY >= 300) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }
    }
    // Smooth scroll top
    var TopscrollTo = function () {
        if (window.scrollY != 0) {
            if(window.jQuery) {
                $('html,body').stop().animate({scrollTop:0},500);
            } else {
                setTimeout(function () {
                    window.scrollTo(0, window.scrollY - 100);
                    TopscrollTo();
                }, 0);
            }
        }
    }
    // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);
};
// append
var scriptLink = document.getElementById('generateScript').src;
var scriptSrc = scriptLink.split('generate_v1.js')[0];
var fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.type = "text/css";
fontAwesomeLink.href = "https://use.fontawesome.com/releases/v5.0.13/css/all.css";

var goTopLink = document.createElement('link');
goTopLink.rel = "stylesheet";
goTopLink.type = "text/css";
goTopLink.href = scriptSrc + "generate.css";

var goTopHtml = '';
var goTopNode = document.createElement('button');
goTopHtml = '<i class="fas fa-arrow-up" style="font-size: 20px;"></i>';
goTopNode.id = 'goTop';
goTopNode.classList.add('go-top');
goTopNode.innerHTML = goTopHtml;

document.head.appendChild(fontAwesomeLink);
document.head.appendChild(goTopLink);
document.body.appendChild(goTopNode);

basicScrollTop();

function isWinWt() {
    var winWt = document.body.clientWidth;
    var navTop = document.getElementById('navTop');
    var goTop = document.getElementById('goTop');

    if (winWt >= 1260) {
        if (navTop) {
            goTop.style.display = 'none';
        } else {
            goTop.style.display = 'block';
        }
    } else {
        goTop.style.display = 'block';
    }
}
window.addEventListener('load', isWinWt);
window.addEventListener('resize', isWinWt);

// click nav and scroll to hash tag
// ================================
if(window.jQuery) {
    $('a[href^="#"]').on('click', function(e){var target=$('a[name='+this.getAttribute('href').split('#')[1]+']');if(target.length){e.preventDefault();$('html,body').stop().animate({scrollTop:target.offset().top},500);}});
}

// scroll progress bar
// ================================
var initProgressBar = false;

function getScrollTop() {
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
        bodyTop = window.pageYOffset;

    } else if (typeof document.compatMode != "undefined"
        && document.compatMode != "BackCompat") {
        bodyTop = document.documentElement.scrollTop;

    } else if (typeof document.body != "undefined") {
        bodyTop = document.body.scrollTop;
    }
    return bodyTop;
}
function progressBarWidth() {
    var finalWidth;
    var nowScroll = getScrollTop();
    var bodyHeight = document.body.scrollHeight - window.innerHeight;
    var bodyWidth = document.body.clientWidth;

    finalWidth = parseInt(nowScroll / bodyHeight * bodyWidth);
    return finalWidth;
}
function makeProgressBar() {
    var body = document.body;
    var wrap = document.createElement('div');
    var bar = document.createElement('div');
    wrap.id = 'progressBarWrap';
    wrap.style.opacity = 0; // 開始先隱藏
    wrap.style.position = 'fixed';
    wrap.style.zIndex = 200;
    wrap.style.top = 0;
    wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    wrap.style.width = '100%';
    wrap.style.height = '0.5vh';
    bar.style.backgroundColor = '#cc1e05';
    bar.style.backgroundImage = 'linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)';
    bar.style.height = '100%';
    bar.id = 'progressBar';

    wrap.appendChild(bar);
    body.insertBefore(wrap, body.firstChild);
    if (getScrollTop()) initProgressBar = true; // 如果在最上面(getScrollTop() = 0)則不改變數

}
function detectScroll() {
    var wrap = document.getElementById('progressBarWrap');
    var bar = document.getElementById('progressBar');
    bar.style.width = progressBarWidth() + 'px';

    // 如果不在最上面則打開隱藏，如果在最上面則打開init，之後就會打開隱藏且再滾回來都不會消失
    if (initProgressBar) wrap.style.opacity = 1; else initProgressBar = true;

}
makeProgressBar();

// 檢查有幾個progress bar，超過2條沒有id的(舊bar)移除
function checkBar() {
    var alllBars = Array.apply(null, document.querySelectorAll('#progressBar'));
    var newBarHasId = 0;

    if (alllBars.length > 1) {
        alllBars.forEach(function (el, index) {
            var barWrap = el.parentNode;

            if (barWrap.id === 'progressBarWrap') {
                newBarHasId++;

                // 超過一個newBar就砍
                if (newBarHasId > 1) barWrap.parentNode.removeChild(barWrap);

            } else {
                // 舊bar都砍
                barWrap.parentNode.removeChild(barWrap);
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    checkBar();
});


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

window.addEventListener('load', function () {
    requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
});
window.addEventListener('scroll', function () {
    requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
});


// auto image resize
// ================================
function detectWindowWidth(width, functionWeb, functionMobile) {
    var windowWidth = document.body.clientWidth;
    if (windowWidth >= width) {
        if (typeof (functionWeb) === "function") return functionWeb();
    } else {
        if (typeof (functionMobile) === "function") return functionMobile();
    }
}
function autoWidth(wrapperWidth) {
    var autoWidthWrap = Array.apply(null, document.getElementsByClassName('width--auto'));
    var autoWidthImgs = Array.apply(null, document.querySelectorAll('.width--auto img'));

    autoWidthImgs.forEach(function (el, index) {
        var elWidth = el.naturalWidth;
        var widowWidth = document.body.clientWidth;
        autoWidthWrap[index].style = "width:" + (elWidth / wrapperWidth) * 100 + '%';
    });
}
function initAutoWidth() {
    detectWindowWidth(960, null, function () {
        autoWidth(960);
    });
}
window.addEventListener('load', initAutoWidth);
window.addEventListener('resize', initAutoWidth);

// lazyload init
// lazyload();
