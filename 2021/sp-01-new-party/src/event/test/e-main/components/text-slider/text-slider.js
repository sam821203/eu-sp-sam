// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import { isNeedSlider } from 'utils/js/detect.js'
import { isIE } from 'utils/js/detect.js'
// import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

// export var inittextSlider = buildSliderContent();

// function buildSliderContent() {
    // var sliderContainer = document.querySelector('#textSlider .swiper-wrapper');
    // dataDynamic_2.forEach(function (el) {
    //     var sliderChild = buildDynamicSliderLiElement(el, true);
    //
    //     sliderContainer.appendChild(sliderChild);
    // });
//     detectApp(window.addEventListener('load', sliderTextReady), sliderTextReady);
// }
export var initTextSlider = detectApp(window.addEventListener('load', sliderTextReady), sliderTextReady);

function sliderTextReady() {
    var textSlider = new Swiper('#textSlider', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        init: isNeedSlider('#textSlider', 4),
        // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#textSlider .swiper-slide').length),
        loop: isIE() ? false : true,
        slidesPerView: isIE() ? 3 : 'auto',
        // breakpoints: {
        //     960: {
        //         slidesPerView: 3.2,
        //     }
        // },
        // slidesPerGroup: 3,
        spaceBetween: 15,
        speed: 600,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    })
}
