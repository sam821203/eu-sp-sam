// depend plugin
// ==========================================================================
import 'slick-carousel';

var eventW4m2 = $('#eventW4m2');
var btnPrevEventW4m2 = $('#btnPrevEventW4m2');
var btnNextEventW4m2 = $('#btnNextEventW4m2');

eventW4m2.slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  prevArrow: btnPrevEventW4m2,
  nextArrow: btnNextEventW4m2,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  }]
});