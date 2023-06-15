import {isIE9} from 'utils/js/detect.js'
import {detectApp} from 'utils/js/detect.js'

export var initSliderGoodsFlip = detectApp(window.addEventListener('load', sliderGoodsFlipReady), sliderGoodsFlipReady);

function sliderGoodsFlipReady() {
    // var sliderGoodsFlip = new Swiper('#sliderGoodsFlip', {
    //     autoplay: isIE9() ? 2000 : {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
    //     calculateHeight: true, // ie9 prevent float wrong height
    //     effect: 'flip',
    //     flipEffect: {
    //         slideShadows: false,
    //     },
    //     grabCursor: true,
    //     // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderGoodsFlip .swiper-slide').length),
    //     loop: true,
    //     // navigation: {
    //     //     nextEl: '#sliderGoodsFlipNext',
    //     //     prevEl: '#sliderGoodsFlipPrev',
    //     // },
    //     // pagination: isIE9() ? '#sliderGoodsFlipPager' : {
    //     //   el: '#sliderGoodsFlipPager',
    //     //   type: 'bullets',
    //     //   clickable: true,
    //     // },
    //     speed: 600,
    // })

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
        // effect: "fade",
        // slidesPerGroup: 3,
        // fadeEffect: {
        //     crossFade: true
        // },
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

