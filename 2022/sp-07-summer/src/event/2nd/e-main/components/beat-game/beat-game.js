import { detectApp } from "utils/js/detect.js";
import { siblingRandom } from "utils/js/build-random.js";
import { initRandomCard } from "event/2nd/e-main/components/beat-game/js/random-card.js";

export var initBeatGame = [
  // pokeGameClick(),
  beatGame(),
  // showItem(),
];

function beatGame() {
  var clickTime = 0;
  var number1 = Math.floor(getRandomMinMax(2, 5));
  var number2 = Math.floor(getRandomMinMax(2, 5));
  var number3 = Math.floor(getRandomMinMax(5, 10));

  var clickArray = [number1, number2, number3];
  var snowManIndex = 0;

  // console.log(number1);
  // console.log(number2);
  // console.log(number3);

  var stageTwo = number1 + number2;
  var stageThree = stageTwo + number3;
  // console.log(stageTwo);
  // console.log(stageThree);
  // console.log(stageOne + stageTwo);

  var snowManWrap = document.getElementById("snowManWrap");

  // console.log(snowMan);
  snowManWrap.addEventListener("click", function () {
    clickTime++;
    // console.log(snowManIndex);

    var snowMan = Array.apply(null, document.querySelectorAll(".snow-man"));
    // console.log(snowManIndex);
    // if (clickTime == clickArray[snowManIndex]){
    //   snowMan[snowManIndex].classList.add('hide');
    //   // if(snowManIndex < snowMan.length){
    //     snowMan[snowManIndex+1].classList.remove('hide');
    //   // }
    //   snowManIndex++;
    //   if (snowManIndex == 3){
    //   snowMan[snowManIndex].classList.remove('hide');
    //     initRandomCard();

    //     // console.log(finalCard);
    //     setTimeout( function () {
    //       // itemBottom.classList.remove( 'active' );
    //       // itemTop.classList.add( 'active' );
    //       showItem();
    //     },800);
    //   }
    // }else{
    //   snowManWrap.classList.add('shakeX');
    //   setTimeout( function () {
    //     // itemBottom.classList.remove( 'active' );
    //     // itemTop.classList.add( 'active' );
    //     snowManWrap.classList.remove('shakeX');
    //   },100);
    // }

    if (clickTime == number1) {
      snowMan[0].classList.add("hide");
      snowMan[1].classList.remove("hide");
      // console.log(snowManStageOne);
      // console.log("第一階段");
    } else if (clickTime == stageTwo) {
      snowMan[1].classList.add("hide");
      snowMan[2].classList.remove("hide");
    } else if (clickTime == stageThree) {
      snowMan[2].classList.add("hide");
      snowMan[3].classList.remove("hide");

      // 洗牌與添加獎項底圖
      initRandomCard();

      // console.log(finalCard);
      setTimeout(function () {
        // itemBottom.classList.remove( 'active' );
        // itemTop.classList.add( 'active' );
        showItem();
      }, 500);
    } else {
      // snowManWrap.classList.remove('shakeX');
      snowManWrap.classList.add("shakeX");
      setTimeout(function () {
        // itemBottom.classList.remove( 'active' );
        // itemTop.classList.add( 'active' );
        snowManWrap.classList.remove("shakeX");
      }, 100);
      // snowMan.forEach(function (item){
      //   item.classList.remove('shakeX');
      //   item.classList.add('shakeX');
      // })
    }
  });
}

function showItem() {
  var itemWrap = document.querySelector("#popUpWrap");
  var itemAnchor = document.querySelector("#popUpWrap a");
  // console.log(itemAnchor);
  itemWrap.classList.add("active");

  // 防止checkAnchor持續被執行造成綁定多次listener而效能低下
  // if ( !itemAnchor.classList.contains( 'disabled' ) ) checkAnchor(itemAnchor, addCopy );

  itemAnchor.classList.add("disabled");
}

function getRandomMinMax(min, max) {
  return Math.random() * (max - min) + min;
}

// function checkAnchor (anchorEl, callback) {
//   var dataCopy = anchorEl.dataset.copy;

//   if ( dataCopy ) {
//     if ( typeof callback === 'function' ) callback(anchorEl, dataCopy);
//   }
// }
// function addCopy (anchorEl, value) {
//   anchorEl.addEventListener( 'click', function () {
//     initCopy( value );
//     showPop(anchorEl);
//   }, false);
// }

// function showPop ( anchorEl ) {
//   var itemAnchor = anchorEl;
//   var itemPopup = anchorEl.querySelector( '.popup__block' );

//   itemAnchor.classList.add( 'disabled' );
//   itemPopup.classList.add( 'active' );

//   setTimeout( function () {
//     itemPopup.classList.remove( 'active' );
//     itemAnchor.classList.remove( 'disabled' );
//   }, 1000)
// }
