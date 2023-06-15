// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {isMonth} from 'utils/js/detect.js'

export var initSliderBank = checkDateSpecial();

function checkDateSpecial() {
    var bnBankPromoWrap = document.getElementById('bnBankPromoWrap');
    var itemPrevArray = Array.apply(null, document.querySelectorAll('#bnBank .month--prev'));
    var itemNextArray = Array.apply(null, document.querySelectorAll('#bnBank .month--next'));

    if (isMonth(5)) {
        bnBankPromoWrap.style.backgroundImage = 'url("bg-bank-n.png")';

        itemPrevArray.forEach(function (el) {
            el.parentNode.removeChild(el);
        });
    } else if (isMonth(4)) {
        bnBankPromoWrap.style.backgroundImage = 'url("bg-bank-p.png")';

        itemNextArray.forEach(function (el) {
            el.parentNode.removeChild(el);
        });
    } else {
        console.error("銀行月份不再兩者範圍內");
    }

    detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);
}

function sliderSpecialReady() {
    var sliderBank = new Swiper('#sliderBank', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        init: isNeedSlider('#sliderBank', 3),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderBank .swiper-slide').length),
        lazy: {
            loadPrevNext: true,
        },
        loop: true,
        // navigation: {
        //     nextEl: '#sliderBnBankNext',
        //     prevEl: '#sliderBnBankPrev',
        // },
        // pagination: {
        //   el: '#sliderSpecialPager',
        //   type: 'bullets',
        //   clickable: true,
        // },
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: '1%',
        speed: 600,
        // slidesOffsetBefore: -120,
        // offsetPxBefore: -150, // ie9 "slidesOffsetBefore"
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    })
}