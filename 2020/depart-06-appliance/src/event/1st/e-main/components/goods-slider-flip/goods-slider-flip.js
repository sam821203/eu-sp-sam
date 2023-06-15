import {detectApp} from 'utils/js/detect.js'

export var initSliderGoodsFlip = detectApp(window.addEventListener('load', sliderGoodsFlipReady), sliderGoodsFlipReady);

function sliderGoodsFlipReady() {
    var sliderGoodsFlip = new Swiper('#sliderGoodsFlip', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        calculateHeight: true, // ie9 prevent float wrong height
        effect: 'flip',
        flipEffect: {
            slideShadows: false,
        },
        grabCursor: true,
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderGoodsFlip .swiper-slide').length),
        loop: true,
        // navigation: {
        //     nextEl: '#sliderGoodsFlipNext',
        //     prevEl: '#sliderGoodsFlipPrev',
        // },
        // pagination: {
        //   el: '#sliderGoodsFlipPager',
        //   type: 'bullets',
        //   clickable: true,
        // },
        speed: 600,
    })
}