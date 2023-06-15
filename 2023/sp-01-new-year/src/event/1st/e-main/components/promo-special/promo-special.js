import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// import { isApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'
import { laterDateHide } from 'utils/js/detect.js'
import { laterDateShow } from 'utils/js/detect.js'


export var initPromoSpecial = [
  buildPromoSpecial(),
  PromoSpReady(),
  // PromoSpReady2(),
  // changeLink(),
  scrollPromoSpecial(),
];

function PromoSpReady() {
  var promoSpecialSliders = document.querySelectorAll(".container--promo-special");

  promoSpecialSliders.forEach(function(el) {
    var promoSPItem = new Swiper( el, {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      // centeredSlides: true,
      // direction: "vertical",
      grabCursor: true,
      initialSlide: Math.floor(Math.random() * document.querySelectorAll('.container--promo-special .swiper-slide').length),
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
      // slidesPerView: 1,
      // spaceBetween: '1%',
      // slidesPerGroup: 1,
      speed: 800,
      watchSlidesProgress : true,
      watchSlidesVisibility : true,
    } )
    return promoSPItem;
  })

}

function buildPromoSpecial () {
  laterDateHide( '2023/1/1 00:00:00', '#promoSpFirst' );
  laterDateShow( '2023/1/1 00:00:00', '#promoSpSec' );
}

function scrollPromoSpecial() {
  var scrollItem = document.getElementById("decorPromoSpRight");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);

    var angle = -360 + scrollPercentage * 360;

    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'rotate(' + angle + 'deg) scale(' + value +')';

    // scrollItem.style.opacity = value;

    // if (scrollPercentage === 1) {
    //   scrollItem.classList.add("active");
    // } else {
    //   scrollItem.classList.remove("active");
    // }
  });
}
