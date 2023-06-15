// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { globalPolyfill } from 'utils/js/polyfill'
import { initLazyload } from 'vendors/js/lazyload'
import { initGobalUXItems } from 'utils/js/generate'
import { makeParallaxRAF } from 'utils/js/parallax-scroll'
import { makeParallaxDefault } from 'utils/js/parallax-scroll'
import { makeParallaxThrottle } from 'utils/js/parallax-scroll'

// ==========================================================================
// import components js modules
// ==========================================================================
// import { initSliderSmall } from 'event/1st/e-main/components/hero-small-slider/hero-small-slider.js'
import { initdailyGoods } from 'event/1st/e-main/components/daily-goods/daily-goods.js'
import { initSliderSpecial } from 'event/1st/e-main/components/bn-special/bn-special.js'
import { initEventw2m2 } from 'event/1st/e-main/components/event-w2m2/event-w2m2.js'
import { initSweetPointSlider } from 'event/1st/e-main/components/slider-section-sweetPoint/slider-section-sweetPoint.js'
import { initSliderDynamic } from 'event/1st/e-main/components/dynamic-slider/dynamic-slider.js'
import { initSliderBnHot } from 'event/1st/e-main/components/bn-event-hot/bn-event-hot.js'
// import { initEventw4m2 } from 'event/1st/e-main/components/event-w4m2/event-w4m2.js'
// ==========================================================================
// page js
// ==========================================================================
// var parallaxBg = document.getElementById('parallaxBg');
// var parallaxBgWeb = document.getElementById('parallaxBgWeb');
// var heroTitle = document.getElementById('heroTitle');
// var goodsHero = document.getElementById('goodsHero');
// var decorationHand = document.getElementById('decorationHand');
// var decorationPaper = document.getElementById('decorationPaper');
// function loadParallax() {
//     window.addEventListener('load', function () {
//         // makeParallaxDefault(parallaxBg, 0.1);
//         // makeParallaxDefault(parallaxBgWeb, 0.2);
//         // makeParallaxDefault(heroTitle, .6);
//         // makeParallaxDefault(goodsHero, 0.5);
//         // makeParallaxDefault(decorationHand, 1);
//         makeParallaxDefault(decorationPaper, .5);
//     });
// }
// loadParallax();


function stickyButton() {
    var winHt = document.body.offsetHeight;
    var navTop = document.getElementById('animateWrapHt');
    var imgaa = navTop.querySelector('.parallax__background');
    // if (window.scrollY >= document.documentElement.clientHeight) {
    if (window.scrollY >= 828 && window.scrollY <= 5274) {
        navTop.style.height = winHt + 'px';
        navTop.style.position =  'fixed';
        // imgaa.classList.add("top--0");
        setInterval(imgaa.classList.add("top--0"))
        console.log(imgaa.style.top);
    } else {
        navTop.style.height = 'auto';
        navTop.style.position =  'absolute';
        setInterval(imgaa.classList.remove("top--0"))
    }
}
// window.addEventListener('load', stickyButton);
// window.addEventListener('resize', stickyButton);
// window.addEventListener('scroll', stickyButton);