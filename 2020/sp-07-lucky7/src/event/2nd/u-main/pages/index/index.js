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
// import { initSliderSmall } from 'event/2nd/u-main/components/hero-small-slider/hero-small-slider.js'
// import { initChangePromoAnchor } from 'event/2nd/u-main/components/promo-event/promo-event.js'
import { initSliderSpecial } from 'event/2nd/u-main/components/bn-special/bn-special.js'
//- 載入資料
//- import { discountCouponGoods } from 'event/2nd/u-main/components/slider-section-2-coupon/slider-section-2-coupon.js'
// import { initdailyGoods } from 'event/2nd/u-main/components/slider-section-1-collect/slider-section-1-collect.js'
// ig
// import { initSliderEvent } from 'event/2nd/u-main/components/slider-section-1-collect/slider-section-1-collect.js'
//- import { initSlider20offGoods } from 'event/2nd/u-main/components/slider-section-2-coupon/slider-section-2-coupon.js'
// import { getTabGoodsData } from 'event/2nd/u-main/components/tab-section/tab-section.js'
//- import { initBuildTab } from 'event/2nd/u-main/components/tab-section/tab-section.js'
//- import { initSliderTabLoad } from 'event/2nd/u-main/components/tab-section/tab-section.js'
// import { initBuildTab } from 'event/2nd/u-main/components/tab-section/tab-section.js'
// import { initSliderBnPrevent } from 'event/2nd/u-main/components/bn-event-prevent/bn-event-prevent.js'
//- import { initSliderBnHot } from 'event/2nd/u-main/components/bn-event-hot/bn-event-hot.js'
// ==========================================================================
// page js
// ==========================================================================
// var parallaxBg = document.getElementById('parallaxBg');
// var parallaxBgWeb = document.getElementById('parallaxBgWeb');
// var heroTitle = document.getElementById('heroTitle');
// var goodsHero = document.getElementById('goodsHero');
// var decorationHand = document.getElementById('decorationHand');
var decorationPaper = document.getElementById('decorationPaper');
function loadParallax() {
    window.addEventListener('load', function () {
        // makeParallaxDefault(parallaxBg, 0.1);
        // makeParallaxDefault(parallaxBgWeb, 0.2);
        // makeParallaxDefault(heroTitle, .6);
        // makeParallaxDefault(goodsHero, 0.5);
        // makeParallaxDefault(decorationHand, 1);
        makeParallaxDefault(decorationPaper, .5);
    });
}
loadParallax();
