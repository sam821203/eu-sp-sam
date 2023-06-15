import { getRandomRange } from 'utils/js/build-random.js'

export var initGameW1M1 = [
  gameW1M1Ready(),
];

function gameW1M1Ready () {
  // 遊戲參數，集氣條單位是%/100毫秒，3的話代表3%/100毫秒 = 30%/秒，大概3秒會跑完
  window.gameStats = {
    // 集氣條增加最小值
    growMin: 3,
    // 集氣條增加最大值
    growMax: 5,
    // 隨機區間最小值
    checkMin: 5,
    // 隨機區間最大值
    checkMax: 20,
  }

  var gameW1M1 = document.getElementById( 'gameW1M1Wrap' );
  var checkNumber;

  window.clickAutoCount = 0;

  gameW1M1.addEventListener( 'click', function () {
    // 歸零
    var itemLose = gameW1M1.querySelector( '.lose__wrap' );
    var itemWait = gameW1M1.querySelector( '.wait__wrap' );

    itemLose.classList.remove( 'active' );
    itemWait.classList.remove( 'active' );


    // 如果window.clickAutoCount表示為初次點擊(開始玩)
    if ( window.clickAutoCount === 0 ) {
      // 擲骰檢定區間
      checkNumber = makeCheck( gameStats.checkMin, gameStats.checkMax );
      // 填入檢定區間
      showCheck( checkNumber[0], checkNumber[1] );

      window.countStart = setInterval( function () {
        var widthPlus = getRandomRange(gameStats.growMin, gameStats.growMax)
        window.clickAutoCount+= widthPlus;
        // console.log( window.clickAutoCount );
        countWidth();

        // 大於100就輸了
        if ( window.clickAutoCount > 100 ) {
          clearInterval( countStart );
          showAnimationLose();
          // 判定完歸零數值
          window.clickAutoCount = 0;
          return false;
        }

      }, 100 );
    } else {
      // window.clickAutoCount不為0表示遊戲開始，再點擊則停止計量條、歸零數值以便再開始

      // 停止計量條
      clearInterval( countStart );

      // 判定輸贏以及後續處理
      if ( countCheck( window.clickAutoCount, checkNumber[0], checkNumber[1] ) ) {
        showAnimationWin();
      }
      else showAnimationLose();

      // 判定完歸零數值
      window.clickAutoCount = 0;
    }
  });
}

// 製作檢定區間
function makeCheck ( min, max ) {
  var min = min || 0;
  var max = max || 100;
  // 起始點最大值必須小於等於100 - min(設定區間最小為5，那骰出的值最大得是95)
  var checkStart = getRandomRange( 0, ( 100 - min ) );
  // 結束點必須是啟始點與(啟始點+max)之間的值(啟始點是20、最大區間為30，則終點會是20到(20+30)之間的值)
  var checkEnd = getRandomRange( checkStart, ( checkStart + max ) );

  // 如果區間小於min則區間為min
  if ( ( checkEnd - checkStart ) < min ) checkEnd = ( checkStart + min );
  // 如果區間大於100(啟始點95、結束點為95 + 20時)
  if ( checkEnd > 100 ) checkEnd = 100;

  // console.log(checkStart, checkEnd);
  return [checkStart, checkEnd];
}

function showCheck (checkStart, checkEnd) {
  var pressCheckBox = document.getElementById( 'pressCheckBox' );
  pressCheckBox.style.willChange = 'left, width';
  pressCheckBox.style.left = checkStart + '%';
  pressCheckBox.style.width = ( checkEnd - checkStart ) + '%';
  pressCheckBox.classList.add('active');
}

// 繪出計量表
function countWidth () {
  var pressCountBox = document.getElementById( 'pressCountBox' );
  var elWidth = clickAutoCount >= 100 ? 100 : clickAutoCount;
  pressCheckBox.style.willChange = 'width';
  pressCountBox.style.width = elWidth + '%';
}

// 檢查是否達到目標
function countCheck ( target, checkStart, checkEnd ) {
  var minCheck = checkStart;
  var maxCheck = checkEnd;
  // console.log(target, minCheck, maxCheck);
  if ( target > minCheck && target <= maxCheck ) return true;
  else return false;
}

  // 下為動畫處理
function showAnimationWin () {
  var gameW1M1 = document.getElementById( 'gameW1M1Wrap' );
  gameW1M1.style.pointerEvents = 'none';
  setTimeout( function () {
    var itemWin = gameW1M1.querySelector( '.win__wrap' );
    var itemWait = gameW1M1.querySelector( '.wait__wrap' );

    itemWin.classList.add( 'active' );
    itemWait.classList.add( 'active' );

    setTimeout( function () {
      showItem();
    }, 1100 );
  }, 150 );
}

function showAnimationLose () {
  var gameW1M1 = document.getElementById( 'gameW1M1Wrap' );
  gameW1M1.style.pointerEvents = 'none';
  setTimeout( function () {
    var itemLose = gameW1M1.querySelector( '.lose__wrap' );
    var itemLoseImg = gameW1M1.querySelector( '.lose__wrap img' );
    var itemWait = gameW1M1.querySelector( '.wait__wrap' );

    itemLose.classList.add( 'active' );
    // 因為apng動畫只有跑一次非無限重複，所以先清空再重load圖(否則第二次後只load最後一禎)
    itemLoseImg.src = '';
    itemLoseImg.src = 'game-animation-3.png';
    itemWait.classList.add( 'active' );


  }, 150 );

  setTimeout( function () {
    gameW1M1.style.pointerEvents = 'auto';
  }, 2000 );
}

// 秀出圖片及後面操作
function showItem () {
  var itemWrap = document.querySelector( '#gamePopupWrap' );
  itemWrap.classList.add( 'active' );
  setTimeout( function () {
    getRandomItems();
  }, 900 );
}

function getRandomItems () {
  var items = Array.apply(null, document.querySelectorAll( '#gamePopupWrap .popup__block a' ));
  var chooseItem = Math.floor( Math.random() * items.length );
  items[chooseItem].style.display = 'block';
}

