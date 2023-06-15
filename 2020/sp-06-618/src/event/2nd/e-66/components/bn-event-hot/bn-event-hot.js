import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'
import { isNeedSliderRWD } from 'utils/js/detect.js'

export var initSliderBnHot = detectApp(window.addEventListener('load', sliderEventReady), sliderEventReady);

function sliderEventReady() {
    var sliderBnEventHot = new Swiper('#sliderBnEventHot', {
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        loop: true,
        pagination: isIE9() ? '#sliderBnEventHotPager' : {
            el: '#sliderBnEventHotPager',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 2,
        speed: 600,
    })
}