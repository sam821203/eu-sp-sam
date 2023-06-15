import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSliderRWD} from 'utils/js/detect.js'

export var initEventw2m2 = detectApp(window.addEventListener('load', eventw2m2Ready), eventw2m2Ready);

function eventw2m2Ready() {
    var eventw2m2 = new Swiper('#eventw2m2', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        // init: isNeedSlider('#eventw2m2'),
        // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#eventw2m2 .swiper-slide').length),
        loop: true,
        navigation: {
            nextEl: '#eventw2m2Next',
            prevEl: '#eventw2m2Prev',
        },
        // pagination: isIE9() ? '#sliderSpecialPager' : {
        //     el: '#sliderSpecialPager',
        //     type: 'bullets',
        //     clickable: true,
        // },
        slidesOffsetBefore: 0,
        spaceBetween: 0,
        slidesPerView: 4,
        speed: 600,

    })
}