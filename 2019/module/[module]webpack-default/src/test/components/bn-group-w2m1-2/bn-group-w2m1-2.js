// depend plugin
// ==========================================================================
import 'slick-carousel';

var bnGroupW2m1Two = $('#bnGroupW2m1Two');
var btnPrevBnGroupW2m1Two = $('#btnPrevBnGroupW2m1Two');
var btnNextBnGroupW2m1Two = $('#btnNextBnGroupW2m1Two');

bnGroupW2m1Two.slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 3500,
  prevArrow: btnPrevBnGroupW2m1Two,
  nextArrow: btnNextBnGroupW2m1Two,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }],
});