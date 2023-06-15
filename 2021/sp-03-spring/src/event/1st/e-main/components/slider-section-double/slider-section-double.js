// swiper 6.1.2 no IE
import Swiper from 'swiper/swiper-bundle.min.js';

// swiper 5.4.5 support IE 11
// import Swiper from 'swiper';

import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initDoubleSlider = detectApp(window.addEventListener('load', doubleSliderReady), doubleSliderReady);

//- [雙輪播] 館別標對三品
function doubleSliderReady() {
    //- 館別標輪播
    var galleryThumbs = new Swiper('#sliderSpecialTop', {
        grabCursor: true,
        init: isNeedSlider('#doubleSlider'),
        preventClicks: false,
        //- 禁止滑動
        allowTouchMove: false,
        on: {
            click: function () {
                // console.log('click', this.clickedIndex);
                //- 當館別標點擊後，觸發商品跑到那個位子(*3 因為一次館別對三品)
                doubleSlider.slideToLoop(this.clickedIndex * 3);
                //- 選擇所有的館別標，變成不亮燈
                document.querySelectorAll('#sliderSpecialTop .swiper-slide').forEach(function (el) {
                    // el.style.opacity = '0.4';
                    el.classList.remove("focus__active");
                })
                //- 點擊到的亮燈
                galleryThumbs.clickedSlide.classList.add("focus__active");
            },
        },
        // spaceBetween: 10,
        // slideToClickedSlide: true,
        //- 循環要關閉
        // loop: true,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        // slideActiveClass: "swiper-slide-thumb-active",
        // speed: 600,
        // breakpoints: {
        //     960: {
        //         slidesPerView: 3,
        //     }
        // }
    });

    //- 商品輪播
    var doubleSlider = new Swiper('#doubleSlider', {
        //- 商品在正中間
        // centeredSlides: true,
        grabCursor: true,
        init: isNeedSlider('#doubleSlider'),
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        on: {
            //- 當slide切換時執行
            slideChange: function () {
                //- realIndex --> 真實在第幾個索引 / 3 = 除數 (代表館別標要在第幾個)
                galleryThumbs.slideToLoop(calculateSlideIndex(this.realIndex, 3)[1], 600);
                //- 當現在索引餘數可能為0,1,2 當為0時執行
                if (calculateSlideIndex(this.realIndex, 3)[0] === 0) {
                    //- 宣告目前索引
                    var slideAcitve = document.querySelectorAll('#sliderSpecialTop .swiper-slide')[calculateSlideIndex(this.realIndex, 3)[1]];
                    // console.log(slideAcitve)
                    document.querySelectorAll('#sliderSpecialTop .swiper-slide').forEach(function (el) {
                        el.classList.remove("focus__active");
                    })
                    //- [check]一個title對三品
                    var sliderSpecTop__length = document.querySelectorAll('#sliderSpecialTop .swiper-slide').length;
                    var doubleSlider__length = document.querySelectorAll('#doubleSlider .swiper-slide').length;
                    //- loop前後個複製三品共六品 / 一title對多少品(此處=3)
                    var calculateEqual = (doubleSlider__length - 6) / 3;
                    // console.log(doubleSlider__length);
                    // console.log(sliderSpecTop__length);
                    if (calculateEqual == sliderSpecTop__length) {
                        slideAcitve.classList.add("focus__active");
                        // slideAcitve.style.opacity = '1';
                    }
                    else {
                        console.error("上下層數量不符合");
                    }
                }
            },
        },
        slidesPerView: 3,
        spaceBetween: '1%',
        loop: true,
        // lazy: {
        //     loadPrevNext: true,
        // },
        // navigation: {
        //     nextEl: '#doubleSliderNext',
        //     prevEl: '#doubleSliderPrev',
        // },
        // pagination: isIE9() ? '#sliderSpecialPager' : {
        //     el: '#sliderSpecialPager',
        //     type: 'bullets',
        //     clickable: true,
        // },
        // slidesOffsetBefore: 0,
        // slidesPerView: 1,
        // slideToClickedSlide: true,
        // slidesPerGroup: 3,
        speed: 600,
    })

    function calculateSlideIndex(slideIndex, slidePerGroup) {
        // [餘數, 除數]
        return [(slideIndex % slidePerGroup), Math.floor(slideIndex / slidePerGroup)];
    }


}