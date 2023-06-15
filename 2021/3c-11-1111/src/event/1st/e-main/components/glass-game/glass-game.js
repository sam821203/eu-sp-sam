import { detectApp } from 'utils/js/detect.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { initRandomCard } from 'event/1st/e-main/components/glass-game/js/random-card.js'
import { initCopy } from 'event/1st/e-main/components/glass-game/js/copy-clone.js'


export var initGlassGame = [ 
  // pokeGameClick(),
  glassGame(),
  // showItem(),
];
// click事件 -> 1. 選定物件不加動畫，其餘要加破圖 (雙迴圈，外層的幫物件加上listener, 內層指定物件和加上class)
            // 2. 動畫跑完要隨機popup物件

function glassGame() {
  var randomAnimation = setInterval( function () { chooseRandomPokeItem() }, 1000 );
  var promoItems = Array.apply( null, document.querySelectorAll( '#pokeItem a' ) );
  var pokeItemWrap = Array.apply( null, document.querySelectorAll( '.promo__box--top' ));
  var footPrint = Array.apply( null, document.querySelectorAll( '.foot--print' ));
  // var productItem = Array.apply( null, document.querySelectorAll( '.promo__box--product' ));


  var wrapItemIndex = siblingRandom( pokeItemWrap.length );
  var clickButton = document.querySelector('.item--click');
  var randomItemIndex = Math.floor(Math.random() * 9)
  // console.log(randomItemIndex);
  // console.log(clickButton);
  
  //選定的index才有添加動作
  // promoItems.forEach(  ( el, index, thisArray ) => { 
    // 把promoItems的類陣列轉為可取用的物件
    // var itemBottom = el.querySelector( '.promo__box' );
    // var itemTop = el.querySelector( '.promo__box--top' );
    // var clickButton = el.querySelector( '#clickButton');
    // console.log(el);

    clickButton.addEventListener( 'click', function () {
      // console.log(567);
      // promoItems.classList.add("active");
      // pokeItemWrap.classList.add("active");
      // 選定該項目 + 開始動畫
      // 所有item加閃光
        promoItems.forEach ( function (item){
          item.classList.add("active");
        });
        //選定的index加腳印
        footPrint[randomItemIndex].classList.add("active");
        //所有item加破洞
        pokeItemWrap.forEach ( function (item, index){
          var randomTime = index * Math.random();

          setTimeout( function () {
            item.classList.add("active");
            // 選定的index取消破洞圖
            pokeItemWrap[randomItemIndex].classList.remove("active");
          }, randomTime * 450);
        });
        // promoItems[index].classList.remove("active");
        // productItem[randomItemIndex].classList.add("active");

      // 外層破洞圖
      // console.log(index);
      // promoItems[chooseItemIndex].classList.remove("brightness");
      clearInterval(randomAnimation);

      // 洗牌與添加獎項底圖
      initRandomCard();
      setTimeout( function () {
        // itemBottom.classList.remove( 'active' );
        // itemTop.classList.add( 'active' );
        showItem();
      },5000);


    // });

  });

}

// click事件 -> 動畫 + 破洞圖 (css class show/none)

function pokeGameClick () {

  var randomAnimation = setInterval( function () { chooseRandomPokeItem() }, 1000 );
  var promoItems = Array.apply( null, document.querySelectorAll( '#pokeItem a' ) );
  var pokeItemWrap = Array.apply( null, document.querySelectorAll( '.promo__box--top' ));
  var wrapItemIndex = siblingRandom( pokeItemWrap.length );
  // console.log(pokeItemWrap);

  //選定的index才有添加動作
  promoItems.forEach(  ( el, index, thisArray ) => { 
    // 把promoItems的類陣列轉為可取用的物件
    var itemBottom = el.querySelector( '.promo__box' );
    var itemTop = el.querySelector( '.promo__box--top' );
    el.addEventListener( 'click', function () {
      // alert(index);
      promoItems[index].classList.add("active");
      pokeItemWrap[index].classList.add("active");
      // promoItems[chooseItemIndex].classList.remove("brightness");
      clearInterval(randomAnimation);

      // 洗牌與添加獎項底圖
      initRandomCard();
      setTimeout( function () {
        // console.log(442);
        // itemBottom.classList.remove( 'active' );
        // itemTop.classList.add( 'active' );
        showItem();
      }, 3000);


    });
  });
}

// 隨機跳動
function chooseRandomPokeItem() {
  var promoItems = Array.apply( null, document.querySelectorAll( '#pokeItem a' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( promoItems.length );
  // console.log(chooseItemIndex);

  promoItems.forEach( (item) => {
    // arrayAnimationClass.forEach( function (className) {
      item.classList.remove( "brightness" );
    // } );
  });
  promoItems[chooseItemIndex].classList.add("brightness");
}


// 豆版 - 抽出獎項 + 背景暗色 不給按

function showItem () {
  var itemWrap = document.querySelector( '#pokeItemWrap' );
  var itemAnchor = document.querySelector( '#pokeItemWrap a' );
  // console.log(itemAnchor);
  itemWrap.classList.add( 'active' );

  // 防止checkAnchor持續被執行造成綁定多次listener而效能低下
  if ( !itemAnchor.classList.contains( 'disabled' ) ) checkAnchor(itemAnchor, addCopy );

  itemAnchor.classList.add( 'disabled' );
}

function checkAnchor (anchorEl, callback) {
  var dataCopy = anchorEl.dataset.copy;

  if ( dataCopy ) {
    if ( typeof callback === 'function' ) callback(anchorEl, dataCopy);
  }
}
function addCopy (anchorEl, value) {
  anchorEl.addEventListener( 'click', function () {
    initCopy( value );
    showPop(anchorEl);
  }, false);
}



function showPop ( anchorEl ) {
  var itemAnchor = anchorEl;
  var itemPopup = anchorEl.querySelector( '.popup__block' );

  itemAnchor.classList.add( 'disabled' );
  itemPopup.classList.add( 'active' );

  setTimeout( function () {
    itemPopup.classList.remove( 'active' );
    itemAnchor.classList.remove( 'disabled' );
  }, 1000)
}






// 確認時間

function timeCheck () {
  var dateNow = new Date();
  var checkPoint = new Date('2021/9/14 00:00');
  var arrayPokeItem = Array.apply( null, document.querySelectorAll( '#pokeItem .js-time-check' ) );
  arrayPokeItem.forEach( function ( el, index, thisArray ) {
    if ( dateNow >= checkPoint ) {
      thisArray[2].style.display = 'none';
      thisArray[3].style.display = 'none';
      thisArray[6].style.display = 'none';
      thisArray[7].style.display = 'none';
      thisArray[8].style.display = 'none';
    } else {
      thisArray[0].style.display = 'none';
      thisArray[1].style.display = 'none';
      thisArray[4].style.display = 'none';
      thisArray[5].style.display = 'none';
      thisArray[7].style.display = 'none';
    }
  });
}

