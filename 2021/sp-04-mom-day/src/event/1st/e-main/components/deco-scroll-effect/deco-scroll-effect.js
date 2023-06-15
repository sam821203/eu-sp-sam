import {getScrollPercentage} from 'utils/js/scroll.js'
import {isWindowWidth} from 'utils/js/detect.js'

export var initScrollDoubleSlider = scrollDoubleSlider();

function scrollDoubleSlider() {
    //- 誘因背景花(側邊)
    var scrollItemPromoSlider = document.getElementById('promoSlider__deso-1');
    window.addEventListener("scroll", function () {
        var scrollPercentage = getScrollPercentage(scrollItemPromoSlider, 0, 0.4);
        var itemConst = isWindowWidth(960) ? ( scrollPercentage * 1 ) : ( scrollPercentage * 1.28 );

        scrollItemPromoSlider.style.opacity = scrollPercentage;
        scrollItemPromoSlider.style.transform = 'scale(' + itemConst + ')';
    });

    //- 天天開搶背景花(側邊)
    var dailyChangeScroll = document.getElementById('dailyChange__deso-1');
    window.addEventListener("scroll", function () {
        var dailyChangeScrollPercentage = getScrollPercentage(dailyChangeScroll, 0, 0.5);
        var itemConst = isWindowWidth(960) ? ( dailyChangeScrollPercentage * 1 ) : ( dailyChangeScrollPercentage * 1.28 );

        dailyChangeScroll.style.opacity = dailyChangeScrollPercentage;
        dailyChangeScroll.style.transform = 'scale(' + itemConst + ')';
    });

    //- 媽媽好禮(側邊)
    var oneItemSliderScroll = document.getElementById('oneItemSlider__deso-1');
    window.addEventListener("scroll", function () {
        var oneItemSliderScrollPercentage = getScrollPercentage(oneItemSliderScroll, 0, 0.6);
        var oneItemSliderItemConst = isWindowWidth(960) ? ( oneItemSliderScrollPercentage * 1 ) : ( oneItemSliderScrollPercentage * 1.28 );

        oneItemSliderScroll.style.opacity = oneItemSliderScrollPercentage;
        oneItemSliderScroll.style.transform = 'scale(' + oneItemSliderItemConst + ')';
    });

    //- 遊戲Game輪盤(上邊)
    var gameSectionRouletteScroll = document.getElementById('gameSectionRoulette__scroll');
    window.addEventListener("scroll", function () {

        var gameSectionRouletteScrollPercentage = getScrollPercentage(gameSectionRouletteScroll, 0, 0.4);
        var gameSectionRouletteScroll_pos = gameSectionRouletteScrollPercentage * -40;

        if (gameSectionRouletteScroll_pos > -17.5) gameSectionRouletteScroll_pos = 0;

        gameSectionRouletteScroll.style.opacity = gameSectionRouletteScrollPercentage;
        gameSectionRouletteScroll.style.marginTop = gameSectionRouletteScroll_pos + 'px';
        gameSectionRouletteScroll.classList.add("animate--roulette");
    });

    var gameSectionScroll = document.getElementById('gameSection__scroll');
    window.addEventListener("scroll", function () {

        var gameSectionScrollPercentage = getScrollPercentage(gameSectionScroll, 0, 0.7);
        var gameSectionScroll_pos = gameSectionScrollPercentage * -40;

        if (gameSectionScroll_pos > -17.5) gameSectionScroll_pos = 0;

        gameSectionScroll.style.opacity = gameSectionScrollPercentage;
        gameSectionScroll.style.marginTop = gameSectionScroll_pos + 'px';
    });

    //- 24小時快配(上邊)
    var dynamicSliderScroll = document.getElementById('dynamicSlider__scroll');
    window.addEventListener("scroll", function () {

        var dynamicSliderScrollPercentage = getScrollPercentage(dynamicSliderScroll, 0, 0.6);
        var dynamicSliderScroll_pos = dynamicSliderScrollPercentage * -60;

        if (dynamicSliderScroll_pos > -17.5) dynamicSliderScroll_pos = 0;

        dynamicSliderScroll.style.opacity = dynamicSliderScrollPercentage;
        dynamicSliderScroll.style.marginTop = dynamicSliderScroll_pos + 'px';
    });

    //- 新品(上邊)
    var dynamicSlider2Scroll = document.getElementById('dynamicSlider2__scroll');
    window.addEventListener("scroll", function () {

        var dynamicSlider2ScrollPercentage = getScrollPercentage(dynamicSlider2Scroll, 0, 0.6);
        var dynamicSlider2Scroll_pos = dynamicSlider2ScrollPercentage * -40;

        if (dynamicSlider2Scroll_pos > -17.5) dynamicSlider2Scroll_pos = 0;

        dynamicSlider2Scroll.style.opacity = dynamicSlider2ScrollPercentage;
        dynamicSlider2Scroll.style.marginTop = dynamicSlider2Scroll_pos + 'px';
    });

    //- 集氣(上邊)
    var twoDailyChangeScroll = document.getElementById('twoDailyChange_scroll');
    window.addEventListener("scroll", function () {

        var twoDailyChangeScrollPercentage = getScrollPercentage(twoDailyChangeScroll, 0, 0.6);
        var twoDailyChangeScroll_pos = twoDailyChangeScrollPercentage * -60;

        if (twoDailyChangeScroll_pos > -17.5) twoDailyChangeScroll_pos = 0;

        twoDailyChangeScroll.style.opacity = twoDailyChangeScrollPercentage;
        twoDailyChangeScroll.style.marginTop = twoDailyChangeScroll_pos + 'px';
    });

    //- 精選館別(上邊)
    var chosenScroll_1 = document.getElementById('chosen_scroll_1');
    window.addEventListener("scroll", function () {

        var chosenScroll_1Percentage = getScrollPercentage(chosenScroll_1, 0, 0.5);
        var chosenScroll_1_pos = chosenScroll_1Percentage * -10;

        if (chosenScroll_1_pos > -17.5) chosenScroll_1_pos = 0;

        chosenScroll_1.style.opacity = chosenScroll_1Percentage;
        chosenScroll_1.style.marginTop = chosenScroll_1_pos + 'px';
        chosenScroll_1.classList.add("animate--box--jump");
    });
    //- 精選館別(上邊)
    var chosenScroll_2 = document.getElementById('chosen_scroll_2');
    window.addEventListener("scroll", function () {

        var chosenScroll_2Percentage = getScrollPercentage(chosenScroll_2, 0, 0.7);
        var chosenScroll_2_pos = chosenScroll_2Percentage * -40;

        if (chosenScroll_2_pos > -17.5) chosenScroll_2_pos = 0;

        chosenScroll_2.style.opacity = chosenScroll_2Percentage;
        chosenScroll_2.style.marginTop = chosenScroll_2_pos + 'px';
    });
    //- 限時瘋搶 左愛心(上邊)
    var decorationHeartLeftScroll = document.getElementById('decorationHeartLeft__scroll');
    window.addEventListener("scroll", function () {

        var decorationHeartLeftScrollPercentage = getScrollPercentage(decorationHeartLeftScroll, 0, 0.5);
        var decorationHeartLeftScroll_pos = decorationHeartLeftScrollPercentage * -40;

        //- 控制愛心層級
        if (decorationHeartLeftScroll_pos == -40)  {decorationHeartLeftScroll.parentElement.classList.add("z--Index-2");}
        else {decorationHeartLeftScroll.parentElement.classList.remove("z--Index-2");}

        if (decorationHeartLeftScroll_pos > -17.5) decorationHeartLeftScroll_pos = 0;

        decorationHeartLeftScroll.style.opacity = decorationHeartLeftScrollPercentage;
        decorationHeartLeftScroll.style.marginTop = decorationHeartLeftScroll_pos + 'px';
        decorationHeartLeftScroll.classList.add("animate--heart--jump-left");
    });
    //- 限時瘋搶 右愛心(上邊)
    var decorationHeartRightScroll = document.getElementById('decorationHeartRight__scroll');
    window.addEventListener("scroll", function () {

        var decorationHeartRightScrollPercentage = getScrollPercentage(decorationHeartRightScroll, 0, 0.5);
        var decorationHeartRightScroll_pos = decorationHeartRightScrollPercentage * -40;

        if (decorationHeartRightScroll_pos > -17.5) decorationHeartRightScroll_pos = 0;

        decorationHeartRightScroll.style.opacity = decorationHeartRightScrollPercentage;
        decorationHeartRightScroll.style.marginTop = decorationHeartRightScroll_pos + 'px';
        decorationHeartRightScroll.classList.add("animate--heart--jump-right");
    });
}