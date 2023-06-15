import {getScrollPercentage} from 'utils/js/scroll.js'

export var initScrollHeroSection = scrollHeroSection();

function scrollHeroSection() {
  //- 左邊金幣
  var scrollItemCoinLeft = document.getElementById('decorationCoinLeftDesktop');
  window.addEventListener("scroll", function () {

    var scrollItemCoinLeftPercentage = getScrollPercentage(scrollItemCoinLeft, 0, 3);
    var scrollItemCoinLeft_pos = scrollItemCoinLeftPercentage * -450;
    scrollItemCoinLeft.style.marginLeft = scrollItemCoinLeft_pos + 'px';

    if (scrollItemCoinLeftPercentage < 0.3) {
      scrollItemCoinLeft.style.marginLeft = '0';
       }
  });
  //- 右邊金幣
  var scrollItemCoinRight = document.getElementById('decorationCoinRightDesktop');
  window.addEventListener("scroll", function () {
    var scrollItemCoinRightPercentage = getScrollPercentage(scrollItemCoinRight, 0, 3);
    var scrollItemCoinRight_pos = scrollItemCoinRightPercentage * -600;
    scrollItemCoinRight.style.marginRight = scrollItemCoinRight_pos + 'px';

    // console.log(scrollItemCoinRightPercentage)
    if (scrollItemCoinRightPercentage < 0.35) {
      scrollItemCoinRight.style.marginRight = '0';
       }
  });
}