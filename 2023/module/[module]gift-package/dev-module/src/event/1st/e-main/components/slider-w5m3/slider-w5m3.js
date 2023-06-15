import Swiper from 'swiper/swiper-bundle.min.js';


export var initPromoSlider = [
  promoSliderReady(),
];

function promoSliderReady() {
  var promoSliderItem = new Swiper('#swiperstyBanner', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: "auto",
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#promoSliderItem .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 25,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints:{
      960:{
        slidesPerView: 5,
      },
    },
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    // slidesPerGroup: 3,
    slidesPerView: 3,
    // spaceBetween: '1%',
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSliderItem;
}