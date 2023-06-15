import Swiper from 'swiper/swiper-bundle.min.js';
// import {detectApp} from 'utils/js/detect.js'
// import { earlyDateHide } from 'utils/js/detect.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initSliderW2M2 = [
  sliderW2M2Ready(),
  scrollSliderW2M2(),
];

function sliderW2M2Ready() {
  var sliderW2M2Item = document.querySelector( '#sliderW2M2Item' );

  var thisSlideItemsLength = sliderW2M2Item.querySelectorAll( '.swiper-slide' ).length;
  var sliderW2M2Item = new Swiper('#sliderW2M2Item', {
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    grabCursor: true,
    // centeredSlides: true,
    // effect: "flip",
    // flipEffect: {
    //   slideShadows: false,
    // },
    // slidesPerView: "auto",
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderW2M2Item .swiper-slide').length),
    init: thisSlideItemsLength > 1 ? true : false,
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
    spaceBetween: '1%',
    // slidesPerGroup: 1,
    speed: 800,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderW2M2Item;
}

// 滾動
function scrollSliderW2M2() {
  var scrollItem = document.getElementById( 'decorW2M2Title');
  var scrollItem2 = document.getElementById( 'decorW2M2Left' );
  var scrollItem3 = document.getElementById( 'decorW2M2Right' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );
    var pos = 100 + scrollPercentage * -100;
    var value = scrollPercentage * 1;

    scrollItem.style.transform = 'translateY(' + pos + '%) scale(' + value + ')';
    scrollItem2.style.transform = 'translate(-' + (pos * 2.5) + '%, -' + (pos - 10) * 2.5 + '%) rotateX(' + pos + 'deg) rotateY(' + pos + 'deg) scale(' + value + ')';
    scrollItem3.style.transform = 'translate(' + (pos * 2) + '%, -' + (pos - 10) + '%) rotateX(' + pos + 'deg) rotateY(' + pos + 'deg) scale(' + value + ')';

    scrollItem.style.transformOrigin = 'top';
    // scrollItem2.style.transformOrigin = 'center';
    // scrollItem.style.transform = ' scale(' + value + ')';
    // scrollItem.style.filter = 'blur(' + (pos / 20) + 'px)';
    scrollItem2.style.filter = 'blur(' + (pos / 5) + 'px)';
    scrollItem3.style.filter = 'blur(' + (pos / 5) + 'px)';

    if ( scrollPercentage === 1 ) {
      scrollItem.classList.add( 'active' );
      scrollItem2.classList.add( 'active' );
      scrollItem3.classList.add( 'active' );
    } else {
      scrollItem.classList.remove( 'active' );
      scrollItem2.classList.remove( 'active' );
      scrollItem3.classList.remove( 'active' );
    }
  });
}