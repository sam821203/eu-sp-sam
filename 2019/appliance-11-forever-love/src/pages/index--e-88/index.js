import {detectWindowWidth} from 'utils/js/detect.js'
import {isIE9} from 'utils/js/detect.js'
import { initSliderScrollX } from 'components/scroll-x-section/scroll-x-section.js'

// export var bnSliderLoad = detectApp(window.addEventListener('load', sliderReady), sliderReady);
window.addEventListener('load', sliderReady);
function sliderReady() {

        var sliderBank = new Swiper('#sliderBank', {
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            calculateHeight: true, // ie9 prevent float wrong height
            effect: 'flow',
            grabCursor: true,
            loop: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            slideVisibleClass: 'swiper-slide-visible',
            // spaceBetween: -9,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            speed: 600,
            navigation: {
                nextEl: '#sliderBankNext',
                prevEl: '#sliderBankPrev',
            },
            pagination: isIE9() ? '#promoSliderPager' : {
                el: '#promoSliderPager',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                959: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            },
        })

        var sliderRank = new Swiper('#sliderRank', {
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            calculateHeight: true, // ie9 prevent float wrong height
            centeredSlides: true,
            grabCursor: true,
            initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderRank .swiper-slide').length),
            loop: true,
            navigation: {
                nextEl: '#sliderRankNext',
                prevEl: '#sliderRankPrev',
            },
            slidesPerView: 3,
            speed: 600,
            breakpoints: {
                767: {
                    slidesPerView: 1,
                },
            },
        })

        var sliderLimit = new Swiper('#sliderLimit', {
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            calculateHeight: true, // ie9 prevent float wrong height
            effect: 'flip',
            flipEffect: {
                rotate: 30,
                slideShadows: false,
            },
            grabCursor: true,
            initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderLimit .swiper-slide').length),
            loop: true,
            navigation: {
                nextEl: '#sliderLimitNext',
                prevEl: '#sliderLimitPrev',
            },
            slidesPerView: 1,
            speed: 600,
        })

        var sliderPromo = new Swiper('#sliderPromo', {
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            calculateHeight: true, // ie9 prevent float wrong height
            centeredSlides: true,
            grabCursor: true,
            initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderPromo .swiper-slide').length),
            loop: true,
            navigation: {
                nextEl: '#sliderPromoNext',
                prevEl: '#sliderPromoPrev',
            },
            slidesPerView: 4,
            slidesOffsetBefore: -150,
            offsetPxBefore: -150, // ie9 "slidesOffsetBefore"
            speed: 600,
            breakpoints: {
                959: {
                    slidesPerView: 3,
                    slidesOffsetBefore: 0,
                },
                1239: {
                    slidesPerView: 3,
                    slidesOffsetBefore: -50,
                },
            },
        })

        var sliderEvent = new Swiper('#sliderEvent', {
            init: false,
            allowTouchMove: false,
            calculateHeight: true, // ie9 prevent float wrong height
            slidesPerView: 2,
            breakpoints: {
                959: {
                    allowTouchMove: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    navigation: {
                        nextEl: '#sliderEventNext',
                        prevEl: '#sliderEventPrev',
                    },
                    slidesPerView: 1,
                    spaceBetween: -35,
                    speed: 600,
                },
            },
        })

        var sliderBn = new Swiper('#sliderBn', {
            // init: false,
            autoplay: isIE9() ? 2000 : {
                delay: 2000,
                disableOnInteraction: false,
            },
            grabCursor: true,
            // allowTouchMove: false,
            slidesPerView: 2,
            loop: true,
            speed: 800,
            navigation: {
                nextEl: '#sliderBnNext',
                prevEl: '#sliderBnPrev',
            },
            pagination: isIE9() ? '#promoSliderPager_sliderBn' : {
                el: '#promoSliderPager_sliderBn',
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                959: {
                    // allowTouchMove: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        })

    var sliderBn2 = new Swiper('#sliderBn2', {
        // init: false,
        autoplay: isIE9() ? 2000 : {
            delay: 2000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        // allowTouchMove: false,
        slidesPerView: 2,
        loop: true,
        speed: 800,
        navigation: {
            nextEl: '#sliderBn2Next',
            prevEl: '#sliderBn2Prev',
        },
        pagination: isIE9() ? '#promoSliderPager_sliderBn2' : {
            el: '#promoSliderPager_sliderBn2',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            959: {
                // allowTouchMove: true,
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    })

        function swiperClickBugFix() {
            var sliderItems = document.querySelectorAll('.swiper-slide');
            sliderItems.forEach(function (el) {
                var sliderLink = el.querySelector('a');
                if (sliderLink.href) {
                    el.addEventListener('click', function () {
                        location.href = sliderLink.href;
                    });
                }
            });
        }

        function bnSliderStart() {
            // sliderEvent.init();
            // sliderEvent.autoplay.start();
            sliderBn.init();
            sliderBn.autoplay.start();
            swiperClickBugFix();
        }

        detectWindowWidth(960, bnSliderStart(), null);
}
