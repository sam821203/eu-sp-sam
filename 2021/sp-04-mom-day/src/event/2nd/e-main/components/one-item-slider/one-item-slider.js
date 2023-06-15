import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
export var initOneItemSlider = detectApp(window.addEventListener('load', oneItemSliderReady), oneItemSliderReady);

function oneItemSliderReady() {
    var sliderOneBuyOneBlock1 = new Swiper('#sliderOneItem', {
        autoplay: isIE9() ? 3000 : {
            delay: 3000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        init: isNeedSlider('#sliderOneItem'),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderOneItem .swiper-slide').length),
        loop: true,
        slidesPerView: 1,
        effect:"flip",
        flipEffect:{slideShadows:false},
        navigation: {
            nextEl: '#sliderOneItemPrev',
            prevEl: '#sliderOneItemNext',
        },
        // pagination: isIE9() ? '#sliderOneItemPager' : {
        //     el: '#sliderOneItemPager',
        //     type: 'bullets',
        //     clickable: true,
        // },
        speed: 800,
    })
}