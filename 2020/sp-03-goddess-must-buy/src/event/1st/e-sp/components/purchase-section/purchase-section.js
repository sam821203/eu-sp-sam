import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import { isNeedSliderRWD } from 'utils/js/detect.js'

export var initSliderPurchase = detectApp(window.addEventListener('load', sliderPurchaseReady), sliderPurchaseReady);

function sliderPurchaseReady() {
    if (isNeedSliderRWD(768, '#sliderPurchase', 4, 2)) {
        var sliderPurchase = new Swiper('#sliderPurchase', {
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            calculateHeight: true, // ie9 prevent float wrong height
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 15,
                depth: 100,
                modifier: 2.63,
                slideShadows: false,
            },
            loop: true,
            // navigation: {
            //     nextEl: '#sliderBankNext',
            //     prevEl: '#sliderBankPrev',
            // },
            // pagination: isIE9() ? '#promoSliderPager' : {
            //     el: '#promoSliderPager',
            //     type: 'bullets',
            //     clickable: true,
            // },
            slidesPerView: 2,
            speed: 600,
        })
    } else {
        var navArrowNext = document.getElementById('sliderBankNext');
        var navArrowPrev = document.getElementById('sliderBankPrev');
        var pagerWrapper = document.getElementById('sliderBankPager');
        navArrowNext.style.display = 'none';
        navArrowPrev.style.display = 'none';
        pagerWrapper.style.display = 'none';
    }
}