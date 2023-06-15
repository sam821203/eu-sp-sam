import Swiper from 'swiper/swiper-bundle.min.js';
import { siblingRandom } from 'utils/js/build-random.js'
import { getScrollPercentage } from 'utils/js/scroll.js'
// import { isApp } from 'utils/js/detect.js'
import { makeLink } from 'utils/js/detect.js'
import { buildDynamicAutoSync } from 'utils/js/build-dynamic-by-number.js'


export var initPromoSection = [
  // promoSectionReady(),
  // setInterval(function() {randomPromoSection()}, 1500),
  // ScrollPromoSection(),
  // changeLink(),
];

function changeLink() {
  var promoChangeLink = document.getElementById('changeLink');
  var webLink = 'https://www.etmall.com.tw/member/taskActivity';
  var mobileLink = 'https://m.etmall.com.tw/member/taskActivity';
  var appLink = 'etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86';

  var targetLink = makeLink(960, appLink, webLink, mobileLink);
  promoChangeLink.href = targetLink;
}


function buildDynamicSliderContent () {
  var swiperWrapper = document.querySelector( '#promoSection .swiper-wrapper' );

  dataPromoSection.forEach( function ( el ) {
    var sliderChild = buildDynamicAutoSync( el, {
      isSliderLazyLoad: false,
    } );
    
    swiperWrapper.appendChild(sliderChild);    
  });

  // 抓每個值的value
  var promoLinks = Array.apply(null, swiperWrapper.querySelectorAll( 'a' ));
  dataPromoSection.forEach( function ( el, index ) {
    var promoCopy = el.c;
    if ( promoCopy ) {
      promoLinks[index].dataset.copy = promoCopy;
    }
    // console.log(promoCopy);
    addCopy( promoLinks[index], promoCopy );
  })
  // console.log(promoLinks[0].dataset.copy);
  promoSectionReady();
}

function addCopy (el, value) {
  // console.log(value);
  el.addEventListener( 'click', function () {
    initCopy( value );
    // console.log裡的function沒有吐值回去，所以會報錯！
    // console.log(initCopy( value ));
  }, false);
}

function promoSectionReady() {
  var promoSection = new Swiper('#promoSection', {
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    // init: isNeedSlider('#dailySliderBlock', 3),
    // initialSlide: Math.floor(Math.random() * document.querySelectorAll('#dailySliderBlock .swiper-slide').length),
    // lazy: {
    //   loadPrevNext: true,
    // },
    // loop: true,
    slidesPerView: 2.7,
    // spaceBetween: "1%",
    // slidesPerGroup: 3,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    speed: 500,
    breakpoints: {
      960: {
        slidesPerView: 4,
      }
    },
  })
  return promoSection
}



function randomPromoSection() {
  var w3m3Items = Array.apply( null, document.querySelectorAll( '#w3m3Wrap a' ) );
  var arrayAnimationClass = ['active', 'active'];
  var chooseClassIndex = siblingRandom( arrayAnimationClass.length, 'siblingRandomCheckW3M3AnimationIndex' );
  var chooseItemIndex = siblingRandom( w3m3Items.length );
  // console.log(chooseItemIndex);

  w3m3Items.forEach( function ( item ) {
    arrayAnimationClass.forEach( function (className) {
      item.classList.remove( className );
    } );
  } );
  w3m3Items[chooseItemIndex].classList.add( arrayAnimationClass[chooseClassIndex] );
  // console.log(chooseItemIndex, chooseClassIndex);

}

// 滾動
function ScrollPromoSection() {
  var scrollTitle = document.getElementById( 'titlePromoSection');
  var scrollItem = document.getElementById( 'decorPromoSection' );
  var scrollItem2 = document.getElementById( 'decorPromoSectionSec' );

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .5 );

    var pos = 150 + scrollPercentage * -150;
    var value = scrollPercentage * 1;

    // scrollTitle.style.transform = 'translateY(' + pos + '%)';
    scrollItem.style.transform = 'translateX(' + pos + '%)';
    scrollItem2.style.transform = 'translateX(-' + pos + '%)';


    // scrollItem.style.transformOrigin = 'bottom';
    // scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    scrollItem2.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}