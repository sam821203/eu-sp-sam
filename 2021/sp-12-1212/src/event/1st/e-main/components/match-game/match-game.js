
import { makeRandomIndexArray } from 'utils/js/build-random.js'
import { shuffleArray } from 'utils/js/build-random.js'
import { siblingRandom } from 'utils/js/build-random.js'
import { buildProductNumberLink } from 'utils/js/build-link-by-number.js'
import { getScrollPercentage } from 'utils/js/scroll.js'


export var initMatch = [
  loadRandomCardFront(initMatchGame),
  ScrollMatchGame(),
];

// 填入隨機卡面、連結
// =============================
function loadRandomCardFront ( callback ) {
  var cardFronts = Array.apply( null, document.querySelectorAll( '#cardWrap .card__front' ) );

  // 從dataMatchGame抓資料
  var cardDataLength = dataMatchGame.length;
  var cardFrontsLength = cardFronts.length;
  var needItemsLength = cardFrontsLength / 2;

  if ( cardDataLength < needItemsLength ) {
    console.error( "卡片資料數量不足以建立配對遊戲！" );
    return false;
  }

  // 先隨機打亂data的index
  var shuffleCardArray = makeRandomIndexArray( cardDataLength );
  // 取出需要的數量(總match card DOM數量/2，e.g.總共有12個卡位，則需要6組商品)
  var cardArray = shuffleCardArray.slice( 0, needItemsLength );
  var cardArray2 = shuffleCardArray.slice( 0, needItemsLength );
  // 合併回來成兩對商品的陣列，並且對陣列洗牌
  var finalCardArray = shuffleArray( cardArray.concat( cardArray2 ) );
  // TODO: 測試用，直接看到排序
  // console.log(finalCardArray);
  var timeStamp = new Date().getTime();
  // console.log(timeStamp);

  cardFronts.forEach(function (cardFront, index) {
    var cardLink = cardFront.querySelector('a');
    var cardImg = cardFront.querySelector( 'img' );
    // 從洗過牌Index的finalCardArray中取出最終的data index
    var shuffledIndex = finalCardArray[index];

    // 對每個cardFront加上標記，方便配對)
    cardFront.setAttribute( 'type', shuffledIndex );
    cardLink.href = buildProductNumberLink( dataMatchGame[shuffledIndex] )[0];
    // 要另開窗不然翻完的就沒了
    cardLink.target = '_blank';
    cardImg.src = dataMatchGame[shuffledIndex].imgSrc + '?' + timeStamp ;
    if ( dataMatchGame[shuffledIndex].alt ) {
      cardLink.title = dataMatchGame[shuffledIndex].alt;
      cardImg.alt = dataMatchGame[shuffledIndex].alt;
    } else {
      cardLink.title = '配對好物';
      cardImg.alt = '配對好物';
    }
  })
  // 給callback，load完再執行
  if (typeof callback === 'function') return callback();
}

// 遊戲初始化
// =============================
function initMatchGame () {
  // 記錄被打開的item，強制清空
  var randomAnimation = setInterval( function () { randomCardAnimation() }, 2000 );

  window.openedCardsArray = [];
  var cards = Array.apply( null, document.querySelectorAll( '#cardBox > li' ) );

  cards.forEach( function ( card ) {
    // 清空所有標記
    card.classList.remove( "show", "open", "match", "disabled" );
    card.addEventListener("click", displayCard);
    card.addEventListener( "click", function () {
      clearInterval(randomAnimation);
      var cardItems = Array.apply( null, document.querySelectorAll( '#cardBox > li' ) );
      cardItems.forEach( function (item) {
          item.classList.remove( "animation" );
      });
      // 如果已經match後點擊就不走加入openedCardsArray與翻牌檢查len的環節，防止有人玩到一半先點出去再回來但點出去那張已match的牌被計入openedCardsArray，再點別張就觸發len==2(已match那張與別張單張觸發比對)的bug
      if ( this.classList.contains( 'match' ) ) return false;
      
      openedCardsArray.push(this);
      cardOpen();
    });
    // card.addEventListener("click", congratulations);
  } );
}

// 卡片點擊改變狀態
// =============================
function displayCard () {
  this.classList.toggle( "open" );
  this.classList.toggle( "show" );
  this.classList.toggle( "disabled" );
}

// =============================
//add opened cards to openedCardsArray list and check if cards are match or not
function cardOpen () {
  // console.log('open');
  var len = openedCardsArray.length;

  if ( len === 2 ) {
    // console.log('pair');
    var item1 = openedCardsArray[0].querySelector( '.card__front' );
    var item2 = openedCardsArray[1].querySelector( '.card__front' );

    if (  item1.getAttribute( 'type' ) === item2.getAttribute( 'type' ) ) {
      // console.log('match');
      matched();
    } else {
      // console.log('not yet');
      unmatched();
    }
  }
}

//for when cards match
function matched() {
  openedCardsArray[0].classList.add('match');
  openedCardsArray[1].classList.add('match');
  openedCardsArray[0].classList.remove('show', 'open');
  openedCardsArray[1].classList.remove('show', 'open');
  openedCardsArray = [];
}

//for when cards don't match
function unmatched() {
  openedCardsArray[0].classList.add('unmatched');
  openedCardsArray[1].classList.add('unmatched');
  disable();
  function restart () {
    openedCardsArray[0].classList.remove('show', 'open', 'unmatched');
    openedCardsArray[1].classList.remove('show', 'open', 'unmatched');
    enable();
    openedCardsArray = [];
  }
  setTimeout( function () {
    // console.log('unmatch end');
    restart()
  }, 1100);
}

//disable cards temporarily
function disable () {
  var cards = Array.apply( null, document.querySelectorAll( '#cardBox > li' ) );
  cards.forEach(function (card) {
    card.classList.add('disabled');
  });
}

//enable cards and disable matched cards
function enable () {
  var cards = Array.apply( null, document.querySelectorAll( '#cardBox > li' ) );
  cards.forEach(function (card) {
    card.classList.remove('disabled');
  });
}


// random animation
function randomCardAnimation(){
  var cardItems = Array.apply( null, document.querySelectorAll( '#cardBox > li' ) );
  // console.log(promoItems);

  var chooseItemIndex = siblingRandom( cardItems.length );
  // console.log(chooseItemIndex);

  cardItems.forEach( function (item) {
    // arrayAnimationClass.forEach( function (className) {
      item.classList.remove( "animation" );
    // } );
  });
  cardItems[chooseItemIndex].classList.add("animation");
}

function ScrollMatchGame() {
  var scrollItem = document.getElementById( 'decorMatchGame' );
  // var scrollTitle = document.getElementById( 'DynamicSliderTitle');

  window.addEventListener( "scroll", function () {
    var scrollPercentage = getScrollPercentage( scrollItem, 0, .6 );

    var pos = 100 + scrollPercentage * -100;

    scrollItem.style.transform = 'translateY(' + pos + '%)';
    // scrollTitle.style.transform = 'translateY(' + pos + '%)';

    var value = scrollPercentage * 1;

    scrollItem.style.transformOrigin = 'bottom';
    scrollItem.style.transform = ' scale(' + value + ')';
    scrollItem.style.opacity = value;
    // scrollTitle.style.transformOrigin = 'bottom';

    // if ( scrollPercentage === 1 ) {
    //   scrollItem.classList.add( 'active' );
    // } else {
    //   scrollItem.classList.remove( 'active' );
    // }
  });
}