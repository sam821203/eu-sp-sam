// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initSliderDynamic_3 = buildSliderContent();

function buildSliderContent() {
    var sliderContainer = document.querySelector('#sliderDynamic_3 .swiper-wrapper');
    dataDynamic_3.forEach(function (el) {
        var sliderChild = buildDynamicSliderLiElement(el, true);

        sliderContainer.appendChild(sliderChild);
    });
    detectApp(window.addEventListener('load', sliderDynamicReady), sliderDynamicReady);
}


function sliderDynamicReady() {
    var sliderDynamic_3 = new Swiper('#sliderDynamic_3', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        init: isNeedSlider('#sliderDynamic_3', 3),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDynamic_3 .swiper-slide').length),
        lazy: {
            loadPrevNext: true,
        },
        loop: true,
        navigation: {
            nextEl: '#sliderDynamicNext_3',
            prevEl: '#sliderDynamicPrev_3',
        },
        pagination: {
            el: '#sliderDynamicPager_3',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 3,
        slidesPerGroup: 3,
        // spaceBetween: '1.5%',
        speed: 600,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    })
}
