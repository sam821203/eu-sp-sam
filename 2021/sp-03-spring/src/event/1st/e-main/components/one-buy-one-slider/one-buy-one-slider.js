import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
export var initCollectPoint = detectApp(window.addEventListener('load', collectPointReady), collectPointReady);

function collectPointReady() {
    var sliderOneBuyOneBlock1 = new Swiper('#sliderOneBuyOne-block1', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        init: isNeedSlider('#sliderOneBuyOne-block1'),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderOneBuyOne-block1 .swiper-slide').length),
        loop: true,
        slidesPerView: 2,
        breakpoints: {
          960: {
            slidesPerView: 3,
          },
        },
        // navigation: {
        //     nextEl: '#sliderOneBuyOnePrev-block1',
        //     prevEl: '#sliderOneBuyOneNext-block1',
        // },
        pagination: isIE9() ? '#sliderOneBuyOnePager-block1' : {
            el: '#sliderOneBuyOnePager-block1',
            type: 'bullets',
            clickable: true,
        },
        speed: 600,
    })
}