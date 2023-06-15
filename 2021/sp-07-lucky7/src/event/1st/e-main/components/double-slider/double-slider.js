import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js';
import { isNeedSlider } from 'utils/js/detect.js';

export var initDoubleSlider = detectApp(
  window.addEventListener('load', doubleSliderReady),
  doubleSliderReady
);

//- [雙輪播] 館別標對三品
function doubleSliderReady() {
  //- 館別標輪播
  var doubleSliderTab = new Swiper('#doubleSliderTab', {
    grabCursor: true,
    init: isNeedSlider('#doubleSliderContent'),
    preventClicks: false,
    //- 禁止滑動
    allowTouchMove: false,
    on: {
      click: function () {
        // console.log('click', this.clickedIndex);
        //- 當館別標點擊後，觸發商品跑到那個位子(*3 因為一次館別對三品)
        doubleSliderContent.slideToLoop(this.clickedIndex * 3);
        //- 選擇所有的館別標，變成不亮燈
        var sliderTabs = Array.apply( null, document.querySelectorAll( '#doubleSliderTab .swiper-slide' ) );

        sliderTabs.forEach(function (el) {
          el.classList.remove('active');
        });
        //- 點擊到的亮燈
        doubleSliderTab.clickedSlide.classList.add('active');
      },
    },
    // spaceBetween: 10,
    //- 循環要關閉
    // loop: true,
    slidesPerView: 3,
    spaceBetween: '0.5%',
    watchSlidesVisibility: true,
  });

  //- 商品輪播
  var doubleSliderContent = new Swiper('#doubleSliderContent', {
    //- 商品在正中間
    // centeredSlides: true,
    grabCursor: true,
    init: isNeedSlider('#doubleSliderContent'),
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      //- 當slide切換時執行
      slideChange: function () {
        //- realIndex --> 真實在第幾個索引 / 3 = 除數 (代表館別標要在第幾個)
        doubleSliderTab.slideToLoop(
          calculateSlideIndex(this.realIndex, 3)[1], 600
        );
        //- 當現在索引餘數可能為0,1,2 當為0時執行
        if (calculateSlideIndex(this.realIndex, 3)[0] === 0) {
          //- 宣告目前索引
          var slideActive = Array.apply(null, document.querySelectorAll('#doubleSliderTab .swiper-slide'))[calculateSlideIndex(this.realIndex, 3)[1]];
          // console.log(slideActive)

          Array.apply( null, document.querySelectorAll('#doubleSliderTab .swiper-slide' )).forEach(function (el) {
              el.classList.remove('active');
          });
          //- [check]一個title對三品
          var sliderSpecTop__length = Array.apply( null, document.querySelectorAll('#doubleSliderTab .swiper-slide')).length;
          var doubleSlider__length = Array.apply( null, document.querySelectorAll('#doubleSliderContent .swiper-slide')).length;
          //- loop前後個複製三品共六品 / 一title對多少品(此處=3)
          var calculateEqual = (doubleSlider__length - 6) / 3;
          // console.log(doubleSlider__length);
          // console.log(sliderSpecTop__length);
          if (calculateEqual == sliderSpecTop__length) {
            slideActive.classList.add('active');
            // slideAcitve.style.opacity = '1';
          } else {
            console.error('上下層數量不符合');
          }
        }
      },
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: '3%',
    loop: true,
    lazy: {
      loadPrevNext: true,
    },
    // navigation: {
    //     nextEl: '#doubleSliderNext',
    //     prevEl: '#doubleSliderPrev',
    // },
    // pagination: isIE9() ? '#sliderSpecialPager' : {
    //     el: '#sliderSpecialPager',
    //     type: 'bullets',
    //     clickable: true,
    // },
    speed: 600,
  });

  function calculateSlideIndex(slideIndex, slidePerGroup) {
    // [餘數, 除數]
    return [slideIndex % slidePerGroup, Math.floor(slideIndex / slidePerGroup)];
  }
}
