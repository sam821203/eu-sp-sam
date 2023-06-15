// ==========================================================================
// import vendor js modules
// ==========================================================================
// import 'swiper/swiper-bundle.css';
// import Swiper from 'swiper/bundle';
// ==========================================================================
// import normal layout js modules
// ==========================================================================
import { notSupportIE9Alert } from 'utils/js/ie9-alert'
import { notSupportAndroid5 } from 'utils/js/android5-alert'
import { initGlobalUXItems } from 'utils/js/generate'
import { isMonth } from 'utils/js/detect.js'

// ==========================================================================
// import components js modules
// ==========================================================================

// ==========================================================================
// page js
// ==========================================================================
function checkUBank(){
  var bankPrev = "https://www.u-mall.com.tw/XML/content/DMSetting/Final/202008/SP_1106087/w/index.html";
  var bankNext = "https://www.u-mall.com.tw/XML/content/DMSetting/Final/202007/SP_1106088/w/index.html";
  var uBank = document.getElementById('uBank');
  if(isMonth(8)){
    uBank.href = bankPrev;
  } else if(isMonth(9)){
    uBank.href = bankNext;
  }
}
checkUBank();