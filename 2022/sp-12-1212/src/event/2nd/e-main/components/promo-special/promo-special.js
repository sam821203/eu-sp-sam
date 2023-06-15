import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// import { isApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'

export var initPromoSpecial = [
  promoSpReady(),
  scrollPromoSpecial(),
  // changeLink(),
];

function changeLink() {
  var promoChangeLink = Array.apply(null,
    document.querySelectorAll('.js--changeLink'));

  promoChangeLink.forEach(function(el) {
    var webLink = 'https://www.etmall.com.tw/member/taskActivity';
    var mobileLink = 'https://m.etmall.com.tw/member/taskActivity';
    var appLink = 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86';
    var targetLink = makeLink(960, appLink, webLink, mobileLink);
    el.href = targetLink;
  });
}


function promoSpReady() {
  var promoSPItem = new Swiper('#promoSpReady', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // centeredSlides: true,
    // direction: "vertical",
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW2M2Item .swiper-slide').length),
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
    // slidesPerGroup: 2,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return promoSPItem;
}

// 滾動
function scrollPromoSpecial() {
  var scrollItem = document.getElementById("decorPromoSpecialGift2");

  window.addEventListener("scroll", function () {
    var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.1);
    // var pos = 100 + scrollPercentage * -100;
    // var pos2 = 100 + scrollPercentage * -100;
    // var value = scrollPercentage * 1;

    // scrollItem.style.transform =" translateX(" + pos + "%) scale(" + value + ")";
    // scrollItem.style.opacity = value;

    if (scrollPercentage === 1) {
      scrollItem.classList.add("active");
      // scrollItem2.classList.add("active");
    } else {
      scrollItem.classList.remove("active");
      // scrollItem2.classList.remove("active");
    }
  });
}