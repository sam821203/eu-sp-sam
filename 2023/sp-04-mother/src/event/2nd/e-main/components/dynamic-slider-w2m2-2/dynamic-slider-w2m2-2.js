import Swiper from 'swiper/swiper-bundle.min.js';
import { detectApp } from 'utils/js/detect.js'
import { earlyDateHide } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initDynamicSliderW2M22 = [
  buildDynamicSliderContent2(),
  scrollDynamicSliderW2M22(),
];

function buildDynamicSliderContent2() {
  var sliderContainer = document.querySelector('#dynamicSliderW2M22Block .swiper-wrapper');

  // 第一層迴圈要抓出第一組陣列[]裡面的值
  dataDynamicSliderW2M22.forEach(function (el) {
    var sliderChild = buildDynamicAutoSync(el);

    sliderContainer.appendChild(sliderChild);
  });
  // detectApp(window.addEventListener('load', dailySliderReady), dailySliderReady);
  dynamicSliderReady2();
}

function dynamicSliderReady2() {
  var dynamicSliderItem = new Swiper('#dynamicSliderW2M22Block', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    // effect: "fade",
    // flipEffect: {
    //   slideShadows: false,
    // },
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dynamicSliderBlock2 .swiper-slide').length),
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    perspective: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
    slidesPerView: 2,
    spaceBetween: '2%',
    slidesPerGroup: 2,
    speed: 800,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  })
  return dynamicSliderItem;
}

// 滾動
function scrollDynamicSliderW2M22() {
  var scrollTitle = document.getElementById('decorSliderW2M22Title');
  var scrollItem = document.getElementById('decorSliderW2M22Item');
  var scrollItem2 = document.getElementById('decorSliderW2M22Stars');

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, .5);
    var scrollPercentage2 = getScrollPercentage(scrollItem, 0, .5);

    var pos = 100 + scrollPercentage * -100;
    // var pos2 = 200 + scrollPercentage * -200;
    var value = scrollPercentage * 1;
    var value2 = scrollPercentage2 * 6;

    scrollTitle.style.transform = 'translateY(' + (pos * 1.2) + '%)';
    scrollItem.style.transform = 'translate(' + (pos * 0.8) + '%, ' + (pos * 0.5) + '%)';
    scrollItem2.style.transform = 'scale(' + (7 - value2) + ')';
    scrollItem2.style.transformOrigin = 'center top';

    // scrollItem.style.opacity = value;
    scrollItem2.style.opacity = (value - 0.1);
    // scrollItem2.style.transform = 'translateY(' + pos + '%)';

    if (scrollPercentage2 === 1) {
      scrollItem.classList.add('active');
      scrollItem2.classList.add('active');
    } else {
      scrollItem.classList.remove('active');
      scrollItem2.classList.remove('active');
    }
  });
}