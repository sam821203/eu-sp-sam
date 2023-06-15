import {getScrollPercentage} from 'utils/js/scroll.js'
import {isWindowWidth} from 'utils/js/detect.js'

export var initScrollDoubleSlider = scrollDoubleSlider();

function scrollDoubleSlider() {
    var scrollItem = document.getElementById('scrollDoubleSlider');

    window.addEventListener("scroll", function () {
        var scrollPercentage = getScrollPercentage(scrollItem, 0, 0.6);
        var itemConst = isWindowWidth(960) ? ( scrollPercentage * 1.01 ) : ( scrollPercentage * 1.28 );

        scrollItem.style.opacity = scrollPercentage;
        scrollItem.style.transform = 'scale(' + itemConst + ')';
    });

    var scrollItem_2 = document.getElementById('scrollDoubleSlider_2');
    window.addEventListener("scroll", function () {
        var scrollPercentage_2 = getScrollPercentage(scrollItem_2, 0, 0.6);
        var itemConst_2 = isWindowWidth(960) ? ( scrollPercentage_2 * 0.95 ) : ( scrollPercentage_2 * 1.28 );

        scrollItem_2.style.opacity = scrollPercentage_2;
        scrollItem_2.style.transform = 'scale(' + itemConst_2 + ')';
    });

    // 集氣
    var scrollItem_3 = document.getElementById('scrollDoubleSlider_3');
    window.addEventListener("scroll", function () {
        var scrollPercentage_3 = getScrollPercentage(scrollItem_3, 0, 0.6);
        var itemConst_3 = isWindowWidth(960) ? ( scrollPercentage_3 * 1.01 ) : ( scrollPercentage_3 * 1.28 );

        scrollItem_3.style.opacity = scrollPercentage_3;
        scrollItem_3.style.transform = 'scale(' + itemConst_3 + ')';
    });
    // 限時瘋搶
    var scrollRiddon = document.getElementById('scrollRiddon');
    window.addEventListener("scroll", function () {
        var scrollPercentageRiddon = getScrollPercentage(scrollRiddon, 0, 0.4);
        var scrollRiddon_pos = scrollPercentageRiddon * -60;

        if ( scrollRiddon_pos > -17.5 ) scrollRiddon_pos = 0;

        scrollRiddon.style.opacity = scrollPercentageRiddon;
        scrollRiddon.style.transform = 'translateY(' + scrollRiddon_pos + 'px)';
    });

    // 集氣
    var scrollDecoBird = document.getElementById('scrollDecoBird');
    window.addEventListener("scroll", function () {
        var scrollPercentageDecoBird = getScrollPercentage(scrollDecoBird, 0, 0.6);
        var scrollDecoBird_pos = scrollPercentageDecoBird * -40;

        if ( scrollDecoBird_pos > -17.5 ) scrollDecoBird_pos = 0;

        scrollDecoBird.style.opacity = scrollPercentageDecoBird;
        scrollDecoBird.style.marginTop = scrollDecoBird_pos + 'px';
    });
}