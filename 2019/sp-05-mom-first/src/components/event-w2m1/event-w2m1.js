// depend plugin
// ==========================================================================
import 'slick-carousel';

var eventW2m1 = $('#eventW2m1');
var btnPrevEventW2m1 = $('#btnPrevEventW2m1');
var btnNextEventW2m1 = $('#btnNextEventW2m1');
setTimeout(function () {
    eventW2m1.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        prevArrow: btnPrevEventW2m1,
        nextArrow: btnNextEventW2m1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
}, 500);