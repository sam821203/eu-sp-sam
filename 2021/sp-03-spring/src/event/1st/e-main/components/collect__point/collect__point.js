import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';
export var initCollectPoint = detectApp(window.addEventListener('load', collectPointReady), collectPointReady);

function collectPointReady() {
    var sliderCollectPointBlock1 = new Swiper('#sliderCollectPoint-block1', {
        autoplay: isIE9() ? 2000 : {
            delay: 111112000,
            disableOnInteraction: false,
        },
        // lazy: {
        //     loadPrevNext: true,
        // },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        init: isNeedSlider('#sliderCollectPoint-block1'),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderCollectPoint-block1 .swiper-slide').length),
        loop: true,
        slidesPerView: 1,
        // navigation: {
        //     nextEl: '#sliderCollectPointPrev-block1',
        //     prevEl: '#sliderCollectPointNext-block1',
        // },
        // pagination: isIE9() ? '#sliderCollectPointPager-block1' : {
        //     el: '#sliderCollectPointPager-block1',
        //     type: 'bullets',
        //     clickable: true,
        // },
        speed: 600,

    })
    var sliderCollectPointBlock2 = new Swiper('#sliderCollectPoint-block2', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        init: isNeedSlider('#sliderCollectPoint-block2'),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderCollectPoint-block2 .swiper-slide').length),
        loop: true,
        slidesPerView: 3,
        // navigation: {
        //     nextEl: '#sliderCollectPointPrev-block1',
        //     prevEl: '#sliderCollectPointNext-block1',
        // },
        pagination: isIE9() ? '#sliderCollectPointPager-block2' : {
            el: '#sliderCollectPointPager-block2',
            type: 'bullets',
            clickable: true,
        },
        speed: 600,

    })
}