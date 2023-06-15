/**
 * TODO: 此為放線上給商品大禮包的自動切換電梯檔，大禮包內持續開啟，每次活動時更新活動開始、結束日期、共用電梯網址
 *
 * 預先知識：
 * 左右電梯的CSS必須分離，因為左電梯要做到覆蓋，online CSS若有沒設到的屬性就不會有覆蓋能力，因此必須在online CSS上線時移除local CSS
 * 右電梯隱藏錨點機制一樣是使用data-title做跳轉，因此必須做到判定沒有離線右電梯時，同時告知線上JS不能開線上右電梯(不然隱藏錨點會被當電梯顯示出來)
 * 因次共用電梯左邊要取代右邊不用，線上CSS分左右，JS共用
 *
 * 共用檢查：
 * 檢查有無填入開始結束日期與行銷共用電梯來源，若都有再判斷是否在日期內，有的話表示要開啟共用左電梯
 * 呈上，依照是否有離線右CSS開啟檢查是否有右離線電梯，若無則變更全域變數通知共用左電梯關閉右共用電梯
 * 呈上，時間內載入線上電梯JS，時間外則進行下面的離線檢查
 *
 * 離線檢查：
 * 檢查是否有左或右電梯CSS，沒有則不載入電梯本體JS，讓網頁速度增加
 *
 * 啟動電梯：
 * 離線電梯：直接append這隻檔案位置的script(css檔案用離線已經存在的)
 * 共用電梯：若有離線左CSS要insert共用左電梯網址的CSS檔案到離線左CSS下方，然後移除左CSS，
 * 若無直接再head中append(其實要移除舊CSS了也能直接append)，
 * script，CSS會使用目標位置的圖片
 */

// 先命好dataCheckElevator方便檢查變數type改變，否則console會一直報錯找不到變數
var dataCheckElevator;
// 先命好檢查右電梯，因為要傳遞給共用電梯看是否要關閉右電梯
var notRightElevator;

( function () {
  var dateNow = new Date();
  var timeStamp = '?' + dateNow.getTime();
  var isOlineDate;

  // 將日期與行銷電梯連等資料移出去成data-check-elevator好加入時間戳
  // 又由於需要離線檢查，使用xhr會被CORS拒絕，因此採用老方法append data.js再setInterval等載入
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

      initCheckElevator( onlineElevatorUrl, timeStamp );
    }
  }, 100 );

  function initCheckElevator ( onlineElevatorUrl, timeStamp ) {
    checkElevatorWrap();

    var localLeftCssId = 'localElevatorLeft';
    var localRightCssId = 'localElevatorRight';
    var isLocalLeft = isLocalCss(localLeftCssId);
    var isLocalRight = isLocalCss(localRightCssId);

    // 如果有在線上日期內，加入線上左邊CSS，移除離線左邊CSS，最後加線上JS
    // 如果不在線上日期內，如果有左邊或右邊local CSS，則補上local JS
    if ( isOlineDate ) {
      var onlineLeftCssFileName = 'main-elevator-left.css';
      var onlineScriptFileName = 'main-elevator.js';

      // 若沒有右電梯用全域變數要告知共用電梯
      notRightElevator = !isLocalRight;

      // 先插入線上電梯CSS
      makeOnlineFile( onlineElevatorUrl, onlineLeftCssFileName, makeCssLink, timeStamp );

      // 如果有舊電梯CSS，則要執行移除舊電梯CSS
      if ( isLocalLeft ) removeElement( localLeftCssId );

      // CSS插入完成後啟動線上電梯JS
      makeOnlineFile( onlineElevatorUrl, onlineScriptFileName, makeAsyncScript, timeStamp );

    } else {
      // 沒有右電梯CSS但還是可能有隱藏的data-title作為錨點用，因此不能判斷沒電梯就不執行電梯JS，所以要兩邊CSS都沒有才不執行電梯
      if ( isLocalLeft || isLocalRight ) makeLocalScript( 'sp-elevator.js', timeStamp );

    }
  }

  // 檢查是否有設定共用電梯的時間
  function isDateOnline ( startDate, nowDate, endDate ) {
    // start、end是手動維護所以讓人用字串填寫，函式內自己轉換，nowDate外在本身就已經是時間物件，則不必轉換
    var startDate = new Date( startDate );
    var endDate = new Date( endDate );

    // 沒有開始時間直接false，有開始時間在再比較，當現在時間>=開始時間時，再比較是否>=結束時間
    // ( 因為有時整個檔期共用到底，沒有結束時間，所以比較結束時間要另外寫 )
    if ( !startDate || nowDate < startDate ) return false;
    if ( nowDate >= startDate ) {
      if ( nowDate >= endDate ) return false;
      else return true;
    } else return false;
  }

  // 檢查是否有設定離線電梯CSS
  function isLocalCss (id) {
    var localCss = document.getElementById( id );

    if ( localCss ) return true
    else return false;
  }

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

    if ( target ) document.body.insertBefore( script, target.nextSibling);
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

  function removeElement (id) {
    var el = document.getElementById( id );

    el.parentNode.removeChild( el );
  }
} )();