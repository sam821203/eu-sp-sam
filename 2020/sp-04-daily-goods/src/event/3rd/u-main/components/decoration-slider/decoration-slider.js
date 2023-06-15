import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'

export var initSliderGoodsFlip = detectApp(window.addEventListener('load', sliderGoodsFlipReady), sliderGoodsFlipReady);

function sliderGoodsFlipReady() {
    var sliderGoodsFlip = new Swiper('#sliderDecoration', {
        autoplay: isIE9() ? 3000 : {
            delay: 3000,
            disableOnInteraction: false,
        },
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderDecoration .swiper-slide').length),
        calculateHeight: true, // ie9 prevent float wrong height
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        // navigation: {
        //     nextEl: '#sliderCountdownNext',
        //     prevEl: '#sliderCountdownPrev',
        // },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: '2%',
        speed: 1600,
    })
}

