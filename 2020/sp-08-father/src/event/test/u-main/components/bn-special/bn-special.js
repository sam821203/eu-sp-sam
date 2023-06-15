import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'

export var initSliderSpecial = detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);

// 雙輪播客製化範例
// Top輪播4個一輪，主輪播置中，中間一個，兩半個
// 主輪播每換三品，Top輪播跳動一品，點擊top輪播時主輪播會跳到對應三品
// 注意由於要計算點擊了Top輪播的哪一個slide，因此Top不能開loop，不然會點到複製的slide造成主輪播跳轉順序錯誤
function sliderSpecialReady() {
  var sliderSpecialTop = new Swiper('#sliderSpecialTop', {

    grabCursor: true,
    init: isNeedSlider('#sliderSpecial'),
    // 因主輪播3個會使Top跳一個，因此當點擊時Top時計算被點擊的index * 3即可使主輪播跳轉到正確位置
    // e.g. 當主輪播是第0.1.2個時Top要第0個，當點擊Top第1個時，主輪播要跳到第3個
    on: {
      click: function(){
        // console.log(this.clickedIndex); // 檢查點擊到的Top slide index
        sliderSpecial.slideToLoop(this.clickedIndex * 3);
      }
    },
    slidesPerView: 4,
    speed: 600,
    watchSlidesVisibility: true, // 注意此處要開才能監聽slide index
  })

  // 主輪播，centeredSlides、slidePerView可以開純顯示而已，slidePerGroup不能開，移動行為會錯
  // 由主輪播帶動Top輪播跳轉，因此主輪播autoplay要開並監聽slideChange檢查是不是要讓Top輪播移動
  // 主輪播loop不影響行為表現，可開可不開
  var sliderSpecial = new Swiper('#sliderSpecial', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true,
    init: isNeedSlider('#sliderSpecial'),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderSpecial .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#sliderSpecialNext',
      prevEl: '#sliderSpecialPrev',
    },
    // 每一次slideChange時檢查主輪播index%3的餘數，餘數為0時Top要跳下一格
    // e.g. 0.1.2張時，Top index要是0，當到第3.4.5張時，Top index要是1，因此在第3張時要跳轉
    on: {
      slideChange: function(){
        // if(calculateSlideIndex(this.realIndex, 3)[0] === 0) {
          sliderSpecialTop.slideToLoop(calculateSlideIndex(this.realIndex, 3)[1], 600);
        // }
      }
    },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    speed: 600,
  })

}

function calculateSlideIndex(slideIndex, slidePerGroup){
  // [餘數, 除數]
  return [(slideIndex % slidePerGroup), Math.floor(slideIndex / slidePerGroup)];
}