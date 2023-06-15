import { detectApp } from 'utils/js/detect.js'
import { isApp } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { initRandomCard } from 'event/1st/e-main/components/random-show/js/random-card.js'
// import { initCopy } from 'event/2nd/e-main/components/beat-game/js/copy-clone.js'

export var initRandomShow = [ 
  // pokeGameClick(),
  randomShow(),
  // showItem(),
];

function randomShow() {

  // TODO: 改成!isAPP()即可在網頁中操作，注意production版要改成isAPP()才行(關掉!驚嘆號)
  if ( !isApp() ) {} else return false;

  var randomWrap = document.getElementById('randomWrap');
  var randomItem1 = document.getElementById('randomItem1');
  var randomItem2 = document.getElementById('randomItem2');
  var randomItem2Img = randomItem2.querySelector('img');
  
  // console.log(snowMan);
  randomItem1.addEventListener( 'click', function(){
    var timeStamp = new Date().getTime();
    
    randomItem1.classList.add('hide');
    randomItem2Img.src += ('?' + timeStamp);
    

    randomItem2Img.addEventListener('load', function(){
      // var div = document.createElement('div');
      randomItem1.insertAdjacentHTML('afterend', '<div class="promo__item load-img"><img src="spin.gif", alt=""></div>');
      
      var loadImg = document.querySelector('.load-img');
      
      
      
      // 洗牌與添加獎項底圖
      initRandomCard();
      
      // console.log(finalCard);
      setTimeout( function () {
        loadImg.classList.add('hide');
        
        randomItem2.classList.remove('hide');
        showItem();

      },1000);
    })


    

  })
}





function showItem () {
  var itemWrap = document.querySelector( '#popUpWrap' );
  var itemAnchor = document.querySelector( '#popUpWrap a' );
  // console.log(itemAnchor);
  itemWrap.classList.add( 'active' );

  // 防止checkAnchor持續被執行造成綁定多次listener而效能低下
  // if ( !itemAnchor.classList.contains( 'disabled' ) ) checkAnchor(itemAnchor, addCopy );

  itemAnchor.classList.add( 'disabled' );
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

