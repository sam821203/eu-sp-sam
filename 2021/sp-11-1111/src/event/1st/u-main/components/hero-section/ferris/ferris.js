export function ferrisReady () {
  // 進度變數(0~100)
  var progress = 0;

  // 滑鼠或手指按下去時的位置當計算移動距離的起始基準點
  var reset = 0;

  // 把滑鼠或手指按下時auto到一半的progress記錄起來
  var pressDownProgress = 0;

  // scrollRatio: 由「軌道寬 / 螢幕寬」計算出「按鈕移動距離 / 滑鼠移動距離」的比例
  // var scrollWrap = document.getElementById('scrollWrap');
  var windowWidth = window.innerWidth;
  // TODO: 如果沒有要拉的橫軸，scrollRatior就是1
  // var scrollRatio = windowWidth / scrollWrap.clientWidth;
  var scrollRatio = 1;

  // TODO: 要連動的畫面元素
  // 摩天輪本體(要旋轉)
  var ferrisDom = document.getElementById('ferrisDom');
  // 摩天輪子項(要逆轉，才會字永遠朝下)
  var ferrisItems = Array.apply(null, ferrisDom.querySelectorAll('.ferris__item'));
  // UI滑動btn
  // var btnFerris = document.getElementById('btnFerris');
  // 摩天輪本身提供跟btn一樣的滑動功能
  var heroBlock = document.getElementById('heroBlock');

  // 依照進度變數progress將畫面元件旋轉、軸移動(也就是元件連動都靠進度變數單向綁定、靠此函式處理)
  function moveElement(progress) {
    // btnFerris.style.left = progress + '%';
    ferrisDom.style.transform = 'rotate(' + (progress / 100) * 360 + 'deg)';

    ferrisItems.forEach( function ( el ) {
      el.style.transform = 'rotate(' + (progress / 100) * -360 + 'deg)';
    });
  };

  // 自動旋轉，為了更smooth，在CSS中加入transition，但在360deg > 0deg時會不正常(快速逆轉一圈)，因此加入active的class，在自轉中有transition，在歸零時移除
  // 計算好progress後帶入moveElement函式驅動畫面變更
  function autoProgress () {
    // 每單位時間進度遞增(時間由呼叫此函式的setInterval控制)
    // 控制此處與單位時間即可推知進度，此處為1、設100毫秒就是每秒10%，等同CSS動畫設定10s
    progress += 1;

    if ( progress > 100 ) {
      // 進度超過100時移除CSS transition避免不正常旋轉
      ferrisDom.classList.remove( 'active' );
      ferrisItems.forEach( function ( el ) {
        el.classList.remove( 'active' );
      } );

      // 超過100進度歸零
      progress = 0;

    } else {
      // 進度不超過100時加入CSS transition使轉動更smooth
      ferrisDom.classList.add( 'active' );
      ferrisItems.forEach( function ( el ) {
        el.classList.add( 'active' );
      });
    }

    //每單位時間更新完progress後傳給改變畫面元件的函式使畫面改變
    moveElement(progress);
  }

  // TODO: 此處設定哪些元素要綁定點擊事件
  function bindPressDownElement () {
    // btnFerris.addEventListener('touchstart', pressDownHandler);
    heroBlock.addEventListener('touchstart', pressDownHandler);
    // btnFerris.addEventListener('mousedown', pressDownHandler);
    heroBlock.addEventListener('mousedown', pressDownHandler);
  }

  // document綁定移動事件(移動事件只綁在元素會造成滑鼠或手指移開元素時無法繼續執行函式，因此要綁在document或window)
  function bindPressMoveElement () {
    document.addEventListener('touchmove', pressMoveHandler);
    document.addEventListener('touchend', pressUpHandler);
    document.addEventListener('mousemove', pressMoveHandler);
    document.addEventListener('mouseup', pressUpHandler);
  }

  // document解除綁定移動事件(解綁事件只綁在元素會造成滑鼠或手指移開元素時造成無限迴圈，因此要綁在document或window)
  function unbindPressMoveElement () {
    document.removeEventListener('touchmove', pressMoveHandler);
    document.removeEventListener('touchend', pressUpHandler);
    document.removeEventListener('mousemove', pressMoveHandler);
    document.removeEventListener('mouseup', pressUpHandler);
  }

  // 開始時就自動轉動
  var autoplay = setInterval(autoProgress, 100);

  // 滑鼠或手指點下去的事件處理
  var pressDownHandler = function ( e ) {
    // 按下去時清除autoplay
    clearInterval( autoplay );

    // 檢查是否為touch行為(如果是touch則因為支援多點觸控，所以觸控點XY資訊會放在陣列內，取第一點[0])
    var touch = e.targetTouches;
    var posX = touch ? touch[0].clientX : e.clientX

    // 按下去時要記錄autoplay中滑鼠座標距離左側的距離/螢幕寬當基準點，並且把滑鼠按下時auto到一半的progress記錄起來
    reset = Math.ceil( ( posX / windowWidth ) * 100 );
    pressDownProgress = progress;

    // 註冊移動事件
    bindPressMoveElement();

    // 更改滑鼠圖示
    heroBlock.style.cursor = 'grabbing';

  };

  // 滑鼠或手指的移動事件
  var pressMoveHandler = function ( e ) {
    // 檢查是否為touch行為(如果是touch則因為支援多點觸控，所以觸控點XY資訊會放在陣列內，取第一點[0])
    var touch = e.targetTouches;
    var posX = touch ? touch[0].clientX : e.clientX

    // dx為滑鼠移動時，X距離左邊的距離 扣掉 reset (reset是一開始滑鼠距離螢幕左邊的距離)
    var dx = Math.ceil((posX / windowWidth) * 100) - reset;

    // 一邊滑鼠移動時，將移動的距離按縮放比(螢幕寬 / 軌道寬)換算回按鈕的left(0% ~ 100%)
    // 換算完還要加上滑鼠或手指按下時progress已經auto到一半的值(就是btn已經移動的距離要加回去)
    progress = pressDownProgress + dx * scrollRatio;

    // 滑鼠或手指移動不能小於0或大於100
    if (progress < 0) progress = 0;
    else if (progress > 100) progress = 100;

    // 把移動換算完的progress轉換給更新畫面的函式使畫面隨著手指移動改變
    moveElement( progress );

    // 更改滑鼠圖示
    document.body.style.cursor = 'grabbing';

  };

  // 滑鼠或手指放開時，需要解除相關移動綁定(不然點越多次setInterval與事件就綁越多次，會造成無窮迴圈、效能問題)
  var pressUpHandler = function () {
    unbindPressMoveElement();

    // 解除綁定後把autoplay開起來，並且因為progress沒有歸零，autoplay會接續著progress繼續往前跑
    autoplay = setInterval( autoProgress, 100 );

    // 更改滑鼠圖示
    heroBlock.style.cursor = 'grab';
    document.body.style.cursor = 'auto';
  };

  // 上面全部都是變數與函式準備，當一切準備好後，執行元素綁定函式
  bindPressDownElement();
}
