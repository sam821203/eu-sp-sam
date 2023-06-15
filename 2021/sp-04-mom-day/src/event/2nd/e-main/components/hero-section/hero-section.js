import Parallax from 'parallax-js'
import {detectWindowWidth} from 'utils/js/detect.js'
import spTimeLimit from 'utils/js/auto-change.js'
//
// function makeParallax() {
//   var decorationBack = document.getElementById('decorationBack');
//   var decorationTitle = document.getElementById('decorationTitle');
//   var parallaxInstance = new Parallax(decorationBack);
//   var parallaxInstance2 = new Parallax(decorationTitle);
// }
//
// function readyParallax() {
//   detectWindowWidth(960, makeParallax, null);
//   window.addEventListener('resize', function(){
//     detectWindowWidth(960, makeParallax, null);
//   });
// }
// export var initParallax = requestAnimationFrame(readyParallax);

//- 換主標圖
export var initChangeMainTitleImage = changeMainTitleImage();
function changeMainTitleImage() {
    spTimeLimit("changeAnchor", "changeImg", "2021/05/01 00:00", "title__next.png", "");
}

