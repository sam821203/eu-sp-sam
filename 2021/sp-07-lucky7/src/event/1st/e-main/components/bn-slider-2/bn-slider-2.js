import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
// import {isNeedSlider} from 'utils/js/detect.js'

// export var initBnSlider2 = buildBnSlider2();

// function buildBnSlider2() {
//     detectApp(window.addEventListener('load', sliderBn2Ready), sliderBn2Ready);
// }

export var initBnSlider2 = detectApp(window.addEventListener('load', sliderBn2Ready), sliderBn2Ready);

function sliderBn2Ready() {
    var sliderGroup = new Swiper('#sliderBn2', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // breakpoints: {
        //     768: {
        //         slidesPerView: 3,
        //         slidesPerColumn: 2,
        //         slidesPerColumnFill: 'row',
        //         slidesPerGroup: 6,
        //     },
        // },
        grabCursor: true,
        initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderGroup .swiper-slide').length),
        // lazy: {
        //   loadPrevNext: true,
        // },
        //- 最後一幀會有問題
        // loop: true,
        // pagination: {
        //     el: '#sliderGroupPager',
        //     type: 'bullets',
        //     clickable: true,
        // },
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        // slidesPerGroup: 6,
        // spaceBetween: '1%',
        speed: 600,
    })
}
