import {detectApp} from 'utils/js/detect.js'
import {isNeedSlider} from 'utils/js/detect.js'
import { isMonth } from 'utils/js/detect.js'

export var initSliderSpecial = checkDatePromo();

function checkDatePromo() {
  var promoLink = document.getElementById('promoLink');
  var promoImg = document.getElementById('promoImg');

  if(isMonth(1)){
    promoLink.href = 'https://media.u-mall.com.tw/sp/7434/m/index.html';
    promoImg.src = 'promo-2-1.png';
  
  }
}