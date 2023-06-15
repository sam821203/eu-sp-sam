import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// import { isApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initPromoSpecial = [
  PromoSpReady(),
  // PromoSpReady2(),
  // changeLink(),
  scrollPromoSpecial(),
];

function PromoSpReady() {
  var promoSpecialSliders = document.querySelectorAll(".container--promo-special");

  promoSpecialSliders.forEach(function(el) {
    var thisSlideItemsLength = el.querySelectorAll( '.swiper-slide' ).length;

    var promoSPItem = new Swiper( el, {
      autoplay: {
        delay: 2000 + Math.floor(Math.random() * 500),
        disableOnInteraction: false,
      },
      // centeredSlides: true,
      // direction: "vertical",
      grabCursor: true,
      // initialSlide: Math.floor(Math.random() * document.querySelectorAll('.container--promo-special .swiper-slide').length),
      init: thisSlideItemsLength > 1 ? true : false,
      lazy: {
        loadPrevNext: true,
      },
      loop: true,
      perspective: true,
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },
      // navigation: {
      //   nextEl: '#sliderSpecialNext',
      //   prevEl: '#sliderSpecialPrev',
      // },
      // pagination: {
      //   el: '#sliderSpecialPager',
      //   type: 'bullets',
      //   clickable: true,
      // },
      // slidesPerView: 1,
      // spaceBetween: '1%',
      // slidesPerGroup: 1,
      speed: 1000 + Math.floor(Math.random() * 200),
      watchSlidesProgress : true,
      watchSlidesVisibility : true,
    } )
    return promoSPItem;
  })

}


function scrollPromoSpecial() {
  var scrollItem = document.getElementById("decorPromoSpLeft");
  var scrollItem2 = document.getElementById("decorPromoSpRight");

  var scrollSpecialItem1 = document.getElementById("specialItem1");
  var scrollSpecialItem2 = document.getElementById("specialItem2");
  var scrollSpecialItem3 = document.getElementById("specialItem3");
  var scrollSpecialItem4 = document.getElementById("specialItem4");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);
    var scrollPercentage2 = getScrollPercentage(scrollItem, 0, .3);

    var pos = 100 + scrollPercentage * -100;
    var angle = -360 + scrollPercentage * 360;
    var angle2 = 360 + scrollPercentage * -360;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + (pos) + '%)';
    scrollItem2.style.transform = 'translateY(' + (pos) + '%)';
    // scrollItem.style.transform = 'rotate(' + angle + 'deg) scale(' + value +')';
    // scrollItem2.style.transform = 'rotate(' + angle2 + 'deg) scale(' + value +')';
    // scrollItem2.style.transform = 'scale(' + value +')';

    // scrollItem.style.opacity = value;
    if (scrollPercentage2 === 1) {
      scrollSpecialItem1.classList.add("active");
      scrollSpecialItem2.classList.add("active");
      scrollSpecialItem3.classList.add("active");
      scrollSpecialItem4.classList.add("active");
    } 
    // else {
    //   scrollSpecialItem1.classList.remove("active");
    //   scrollSpecialItem2.classList.remove("active");
    //   scrollSpecialItem3.classList.remove("active");
    //   scrollSpecialItem4.classList.remove("active");
    // }
  });
}
