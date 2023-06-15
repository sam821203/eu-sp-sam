import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderSpecial = detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);

function sliderSpecialReady() {
    var sliderSpecial = new Swiper('#sliderSpecial', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        init: isNeedSlider('#sliderSpecial'),
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
        loop: true,
        // navigation: {
        //   nextEl: '#sliderSpecialNext',
        //   prevEl: '#sliderSpecialPrev',
        // },
        pagination: isIE9() ? '#sliderSpecialPager' : {
            el: '#sliderSpecialPager',
            type: 'bullets',
            clickable: true,
        },
        speed: 600,

    })
}