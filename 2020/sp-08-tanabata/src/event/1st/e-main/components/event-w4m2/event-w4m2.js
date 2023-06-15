import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import {buildDynamicSliderLiElement} from 'utils/js/build-dynamic.js'

export var initEventw4m2 = buildSliderContent();

function buildSliderContent() {
    var sliderContainer = document.querySelector('#eventw4m2 .event__items');
    dataEventW4m2.forEach(function (el) {
        var sliderChild = buildDynamicSliderLiElement(el);

        sliderContainer.appendChild(sliderChild);
    });
}

