import { isIE9 } from 'utils/js/detect.js'
import { detectApp } from 'utils/js/detect.js'

export var sliderLoad = detectApp(window.addEventListener('load', sliderReady), sliderReady);

function makeSliderDOM(dataArray) {
  var sliderWrap = document.querySelector('#heroSliderMain .swiper-wrapper');

  dataArray.forEach(function (el) {
    var sliderItem = document.createElement('li');
    sliderItem.classList.add('swiper-slide');

    var sliderAnchor = document.createElement('a');
    sliderAnchor.target = "_blank";
    sliderAnchor.title = el.subtitle;
    sliderAnchor.href = detectApp(el.appLink, el.link);

    var sliderContent = '<div class="slide-item__wrap"><div class="slide-item__box"><img src="' + 
      el.imgSrc + '" alt="' + el.subtitle +
      '"></div><div class="slide-item__info"><h2 class="info__title"><div>' + el.title1 + '</div><div>' +
      el.title2 + '</h2><div class="info__sub-title">' + el.subtitle + '</div><div class="info__price"><span>$</span><span>' + el.price + '</span></div><div class="btn btn--info">了解更多＞</div></div></div>'

    sliderAnchor.innerHTML = sliderContent;
    sliderItem.appendChild(sliderAnchor);
    sliderWrap.appendChild(sliderItem);
  });
}

function sliderReady() {
  makeSliderDOM(sliderData);

  var heroSliderMain = new Swiper('#heroSliderMain', {
    autoplay: isIE9() ? 2000 : {
      delay: 2000,
      disableOnInteraction: false,
    },
    calculateHeight: true, // ie9 prevent float wrong height
    centeredSlides: true,
    grabCursor: true,
    initialSlide: Math.floor(Math.random() * document.querySelectorAll('#heroSliderMain .swiper-slide').length),
    loop: true,
    navigation: {
      nextEl: '#heroSliderMainNext',
      prevEl: '#heroSliderMainPrev',
    },
    slidesPerView: 1,
    speed: 600,
    pagination: isIE9() ? '#heroSliderMainPager' : {
      el: '#heroSliderMainPager',
      type: 'bullets',
      clickable: true,
    },
    paginationClickable: true, // ie9 only
  });
}
