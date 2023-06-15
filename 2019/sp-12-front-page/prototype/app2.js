function isIE9() {
  return false
}

var sliderCalendar = new Swiper('#sliderCalendar', {
  autoplay: isIE9() ? 2000 : {
    delay: 2000,
    disableOnInteraction: false,
  },
  calculateHeight: true, // ie9 prevent float wrong height
  centeredSlides: true,
  effect: 'coverflow',
  grabCursor: true,
  initialSlide: Math.floor(Math.random() * document.querySelectorAll('#sliderCalendar .swiper-slide').length),
  // loop: true,
  navigation: {
    nextEl: '#sliderCalendarNext',
    prevEl: '#sliderCalendarPrev',
  },
  pagination: isIE9() ? '#sliderCalendarPager' : {
    el: '#sliderCalendarPager',
    type: 'bullets',
    clickable: true,
  },
  paginationClickable: true, // ie9 only
  slidesPerView: 3,
  speed: 600,
  breakpoints: {
    959: {
      slidesPerView: 1,
    },
  },
});

var calendarCellHaveEvent = document.querySelectorAll('[data-event]');

calendarCellHaveEvent.forEach(function (el) {
  var sliderIndex = el.dataset.event - 1;
  

  el.addEventListener('click', function () {
    calendarCellHaveEvent.forEach(function(el){
      el.classList.remove('active');
    });
    sliderCalendar.slideTo(sliderIndex, 600, false);
    el.classList.add('active');
  });
});
