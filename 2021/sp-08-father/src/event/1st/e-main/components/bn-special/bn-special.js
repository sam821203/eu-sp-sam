import Swiper from 'swiper/swiper-bundle.min.js';
import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isLaterThan } from 'utils/js/detect.js'

export var initSpecialSlider = checkDateSpecial();

function checkDateSpecial () {
  // TODO: 不用判斷月份就整區關掉
  var bnSpecialPromoWrap = document.getElementById('bnSpecialPromoWrap');
  var itemPrevArray = Array.apply(null, document.querySelectorAll('#bnSpecial .month--prev'));
  var itemNextArray = Array.apply( null, document.querySelectorAll( '#bnSpecial .month--next' ) );
  var checkPoint = new Date( '2021/7/31 23:59:59' );
  // console.log(isLaterThan( checkPoint ));

  if ( isLaterThan( checkPoint ) ) {
    bnSpecialPromoWrap.style.backgroundImage = 'url(bg-special-n.png)';

    itemPrevArray.forEach( function ( el ) {
      el.parentNode.removeChild( el );
    } );
  } else {
    // bnSpecialPromoWrap.style.backgroundImage = 'url(bg-special-p.png)';

    itemNextArray.forEach( function ( el ) {
      el.parentNode.removeChild( el );
    } );
  }
  // } else {
  //   console.error("銀行月份不在兩者範圍內");
  // }

  detectApp(window.addEventListener('load', sliderSpecialReady), sliderSpecialReady);
}

function sliderSpecialReady() {
  var sliderSpecial = new Swiper('#sliderSpecial', {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    // grabCursor: true,
    lazy: {
      loadPrevNext: true,
    },
    loop: true,
    // navigation: {
    //   nextEl: '#sliderSpecialNext',
    //   prevEl: '#sliderSpecialPrev',
    // },
    // pagination: {
    //   el: '#sliderSpecialPager',
    //   type: 'bullets',
    //   clickable: true,
    // },
		slidesPerView: 3,
    // slidesPerGroup: 3,
    speed: 600,
    watchSlidesProgress : true,
    watchSlidesVisibility : true,
  } )
  return sliderSpecial;
}