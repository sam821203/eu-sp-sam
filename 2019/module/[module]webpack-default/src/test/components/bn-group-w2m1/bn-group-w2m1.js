// depend plugin
// ==========================================================================
import 'slick-carousel';

var bnGroupW2m1 = $('#bnGroupW2m1');
var btnPrevBnGroupW2m1 = $('#btnPrevBnGroupW2m1');
var btnNextBnGroupW2m1 = $('#btnNextBnGroupW2m1');

bnGroupW2m1.slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3500,
  prevArrow: btnPrevBnGroupW2m1,
  nextArrow: btnNextBnGroupW2m1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }],
});