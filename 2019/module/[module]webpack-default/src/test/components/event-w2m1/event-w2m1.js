// depend plugin
// ==========================================================================
import 'slick-carousel'
import { detectWindowWidth } from '../../js/util/utilities.js'

var eventW2m1 = $('#eventW2m1');
var btnPrevEventW2m1 = $('#btnPrevEventW2m1');
var btnNextEventW2m1 = $('#btnNextEventW2m1');
var isSliderInit = false;

function sliderOn(){
  isSliderInit = true;
  eventW2m1.slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow: btnPrevEventW2m1,
    nextArrow: btnNextEventW2m1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      }
    }]
  });
}
function sliderRefresh() {
  eventW2m1.slick('refresh');
}
window.addEventListener('resize', function(){ 
  detectWindowWidth(768, sliderRefresh, isSliderInit ? null : sliderOn);
});

detectWindowWidth(768, null, sliderOn);