/**
 * Created by jing on 2019/7/5.
 */


var sliderEvent = new Swiper('#sliderEvent', {
    autoplay: isIE9() ? 2000 : {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '#sliderEventNext',
        prevEl: '#sliderEventPrev',
    },
    spaceBetween: -35,
    speed: 600,
    calculateHeight: true, // ie9 prevent float wrong height
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
        959: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
})

//    FIXME 輪播做到一半

function isIE9() {
    if (navigator.appName.indexOf("Internet Explorer") != -1) {
        // not IE10, IE11
        var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
        if (badBrowser) return true;
    }
}
function detectWindowWidth(width, functionWeb, functionMobile) {
    var windowWidth = document.body.clientWidth;
    if (windowWidth >= width) {
        if (typeof(functionWeb) === "function") return functionWeb();
    } else {
        if (typeof(functionMobile) === "function") return functionMobile();
    }
}

function swiperClickBugFix(){
    var sliderItems = document.querySelectorAll('.swiper-slide');
    sliderItems.forEach(function(el){
        var sliderLink = el.querySelector('a');
        if (sliderLink.href) {
            el.addEventListener('click', function(){
                location.href = sliderLink.href;
            });
        }
    });
}

function bnSliderStart() {
    swiperClickBugFix();
}

detectWindowWidth(960, bnSliderStart(), null);