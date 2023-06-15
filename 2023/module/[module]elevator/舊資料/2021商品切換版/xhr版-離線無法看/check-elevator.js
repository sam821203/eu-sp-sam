/**
 * TODO: 此為放線上給商品大禮包的自動切換電梯檔，大禮包內持續開啟，每次活動時更新活動開始、結束日期、共用電梯網址
 *
 * 預先知識：
 * 左右電梯的判定在電梯本體中，此處只要判斷離線右電梯是否啟閉並pass給共用電梯
 * 離線電梯CSS、JS左右共用，因主視覺錨點跳宮格功能一樣依賴data-title，因此不能以data-title數量判斷右電梯啟閉
 * 共用電梯左邊要取代右邊不用，因此線上CSS分左右，JS共用，若要取代則append線上左電梯CSS讓權重蓋過離線左電梯CSS
 * 注意由於組版系統會挪動CSS位置，因此純粹append online CSS到head中可能會發生local CSS在下方反而的權重較高的問題
 * 因此要改成有local CSS的話，將online CSS插在其下方，才能保證權重
 *
 * 共用檢查：
 * 檢查有無填入開始結束日期與行銷共用電梯來源，若都有再判斷是否在日期內，有的話表示要開啟共用左電梯
 * 呈上，依照是否有離線CSS開啟檢查是否有右離線電梯，若無則變更全域變數通知共用左電梯關閉右共用電梯
 * 呈上，時間內載入線上電梯JS，時間外則進行下面的離線檢查
 *
 * 離線檢查：
 * 判斷右是有sp-elevator.css就至少要開右，再有data-elevator.js則是要開左，但這部份在電梯本體檢查非此處檢查
 * 呈上，因此此處只檢查是否有右電梯CSS，沒有則不載入電梯本體JS，讓網頁速度增加
 *
 * 啟動電梯：
 * 離線電梯：直接append這隻檔案位置的script(css檔案用離線已經存在的)
 * 共用電梯：要append共用電梯網址的CSS檔案、script，CSS會使用目標位置的圖片
 */

// 先命好檢查右電梯，因為要傳遞給共用電梯看是否要關閉右電梯
var notRightElevator;

; ( function () {
  var dateNow = new Date();
  var timeStamp = '?' + dateNow.getTime();
  var isOlineDate;
  var localRight = isLocalRight();

  // 若沒有右電梯要告知共用電梯
  notRightElevator = !localRight;

  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://media.etmall.com.tw/sp/11878/data-check-elevator.json',
    true
  );
  xhr.send();
  xhr.onload = function () {
    var json = JSON.parse(this.responseText);
    startDate = json.startDate;
    endDate = json.endDate;
    onlineElevatorUrl = json.onlineElevatorUrl;

    initCheckElevator(onlineElevatorUrl, localLeft, localRight, timeStamp);
  };

  makeLocalScript( 'data-check-elevator.js', timeStamp );

  var getDataCheckElevator = setInterval( function () {
    // 等load後dataCheckElevator將從undefined變成data中的資料後結束setInterval
    if ( typeof dataCheckElevator !== 'undefined' ) {
      clearInterval( getDataCheckElevator );

      // console.log(dataCheckElevator);
      var startDate = dataCheckElevator.startDate;
      var endDate = dataCheckElevator.endDate;
      var onlineElevatorUrl = dataCheckElevator.onlineElevatorUrl;

      isOlineDate = isDateOnline( startDate, dateNow, endDate );

      initCheckElevator( onlineElevatorUrl, localRight, timeStamp );
    }
  }, 100 );

  function initCheckElevator ( onlineElevatorUrl, localRight, timeStamp ) {
    // 沒有右電梯CSS但還是可能有隱藏的data-title作為錨點用，因此不能判斷沒右電梯就不執行電梯JS
    checkElevatorWrap();

    // 如果有在線上日期內，加入線上左邊CSS，最後加線上JS
    // 如果不在線上日期內，則補上local JS
    if ( isOlineDate ) {
      var onlineLeftCss = 'main-elevator-left.css';
      var onlineScriptFileName = 'main-elevator.js';

      // 如果有離線CSS則需要insert到其下方
      var localCssId = 'localElevatorCSS';

      makeOnlineFile( onlineElevatorUrl, onlineLeftCss, makeCssLink, timeStamp, localCssId );

      // 沒有右電梯CSS但還是可能有隱藏的data-title作為錨點用，因此local右電梯交由user自行控制，不自動改
      // if ( !localRight ) {
      //   var onlineRightCSS = 'main-elevator-right.css';

      //   makeOnlineFile( onlineElevatorUrl, onlineRightCSS, makeCssLink, timeStamp );
      // }

      makeOnlineFile( onlineElevatorUrl, onlineScriptFileName, makeAsyncScript, timeStamp );
    } else {
      if ( localRight ) makeLocalScript( 'sp-elevator.js', timeStamp );
    }
  }

  // 檢查是否有設定共用電梯的時間
  function isDateOnline ( startDate, nowDate, endDate ) {
    // start、end是手動維護所以讓人用字串填寫，函式內自己轉換，nowDate外在本身就已經是時間物件，則不必轉換
    var startDate = new Date( startDate );
    var endDate = new Date( endDate );

    // 沒有開始時間直接false，有開始時間在再比較，當現在時間>=開始時間時，再比較是否>=結束時間(因為有時整個檔期共用到底，沒有結束時間，所以比較結束時間要另外寫)
    if ( !startDate || nowDate < startDate ) return false;
    if ( nowDate >= startDate ) {
      if ( nowDate >= endDate ) return false;
      else return true;
    } else return false;
  }

  // 檢查是否有設定離線右電梯
  function isLocalRight () {
    // 離線CSS中包含左右電梯架構，如果開啟則代表至少要開離線右電梯
    var localCss = document.getElementById( 'localElevatorCSS' );

    if ( localCss ) return true
    else return false;
  }

  // 檢查是否有設定離線左電梯(左電梯的判定在電梯本體中，此處暫時用不到)
  // function isLocalLeft () {
  //   // 開啟離線左電梯除了要開啟離線CSS，還要開啟左電梯的data檔
  //   var localCss = document.getElementById( 'localElevatorCSS' );
  //   var localLeftData = document.getElementById( 'dataElevatorLeft' );

  //   if ( localCss && localLeftData ) return true
  //   else return false;
  // }

  // 檢查有無設定電梯的家(wrap)，有的話呼叫填上電梯定位tag的函式
  function checkElevatorWrap () {
    // 檢查HTML有沒有設定電梯的家(置放電梯的目標位置)
    var homeLeft = document.getElementById( 'elevatorHome' );
    var homeRight = document.getElementById( 'navRightBar' );

    if ( !homeLeft && !homeRight ) {
      console.error( 'HTML沒有電梯的家！' );
      return false;
    }
  }

  // 製作head內的 <link> tag
  function makeCssLink ( linkUrl, timeStamp, targetId ) {
    var link = document.createElement( 'link' );
    var linkUrl = timeStamp ? linkUrl + timeStamp : linkUrl;
    var target = document.getElementById( targetId );

    link.rel = 'stylesheet';
    link.href = linkUrl;

    // 如果有離線CSS則insert到其下方，否則放在head最後面
    if ( target ) target.parentNode.insertBefore( link, target.nextSibling);
    else document.head.appendChild( link );
  }

  // 製作body內的 <script> tag
  function makeAsyncScript ( scriptSrc, timeStamp, targetId) {
    var script = document.createElement( 'script' );
    var scriptSrc = timeStamp ? scriptSrc + timeStamp : scriptSrc;
    var target = document.getElementById( targetId );

    script.src = scriptSrc;
    script.async = true;

    if ( target ) document.bod.insertBefore( script, target.nextSibling);
    else document.body.appendChild( script );
  }

  // 製作離線電梯script(scriptFileName為'sp-elevator.js'或其他檔名)，因為CSS已經內建，因此只要建立script
  function makeLocalScript ( scriptFileName, timeStamp, targetId ) {
    // 離線CSS已經掛上，直接產出script即可
    var scriptAddress = document.getElementById( 'checkElevator' ).src.split( 'check-elevator.js' )[0];
    var localScriptUrl = scriptAddress + scriptFileName;
    var targetId = targetId;

    makeAsyncScript( localScriptUrl, timeStamp, targetId)
  }

  // 製作線上file的tag，給予線上網址、file name、製作函式(CSS或是script)、選填timeStamp，就能利用提供的網址製作
  function makeOnlineFile ( onlineElevatorUrl, fileName, callback, timeStamp, targetId ) {
    if ( !onlineElevatorUrl ) {
      console.error( '沒有共用電梯網址' );
      return false;
    }

    var onlineAddress = onlineElevatorUrl.split( 'index.html' )[0];
    var onlineUrl = onlineAddress + fileName;

    if ( typeof callback === 'function' ) {
      var targetId = targetId;
      callback( onlineUrl, timeStamp, targetId);
    }
  }
} )();