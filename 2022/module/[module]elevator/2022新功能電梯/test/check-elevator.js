/**
 * TODO: 此為放線上給商品大禮包的自動切換電梯檔，大禮包內持續開啟，每次活動時更新活動開始、結束日期、共用電梯網址
 *
 * 預先知識：
 * 左右電梯的CSS必須分離，因為左電梯要做到覆蓋，online CSS若有沒設到的屬性就不會有覆蓋能力，因此必須在online CSS上線時移除local CSS
 * 右電梯隱藏錨點機制一樣是使用data-title做跳轉，因此必須做到判定沒有離線右電梯時，同時告知線上JS不能開線上右電梯(不然隱藏錨點會被當電梯顯示出來)
 * 因此共用電梯左邊要取代右邊不用，線上CSS分左右，JS共用
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

/**
 * Update: 灰姑娘電梯版本：
 * 霸道電梯為了縮減霸道權限，分成四種模式，由dataCheckElevator.mode內容決定
 * - 'white'：白名單，只有列出的網址其頁面會產出電梯，其他頁面不會
 * - 'black'：黑名單，只有列出的網址其頁面不會產出電梯，其他頁面會
 * - 'auto' ：自己抓主視覺左電梯內的連結們，這些頁面會開啟左電梯，其他不會
 * - 'all'- 沒任何限制，直接全部打開，有掛的就都會有
 *
 * @param {string} mode 限為'white'、'black'、'auto'、'all'四種其中之一
 * @param {Array} dataUrlList 黑白名單網址陣列，內部item可以是string也可以是物件
 */
// 先命好dataCheckElevator方便檢查變數type改變，否則console會一直報錯找不到變數
var dataCheckElevator;
// 先命好檢查右電梯，因為要傳遞給共用電梯看是否要關閉右電梯
var notRightElevator;
// 先準備好全域data資料，若已經有了便不再fetch
let dataMainElevator;

(function () {
  var dateNow = new Date();
  var timeStamp = '?' + dateNow.getTime();
  var isOlineDate;

  // 將日期與行銷電梯連等資料移出去成data-check-elevator好加入時間戳
  // 又由於需要離線檢查，使用xhr會被CORS拒絕，因此採用老方法append data.js再setInterval等載入
  makeLocalScript('data-check-elevator.js', timeStamp);

  var getDataCheckElevator = setInterval(function () {
    // 等load後dataCheckElevator將從undefined變成data中的資料後結束setInterval
    if (typeof dataCheckElevator !== 'undefined') {
      clearInterval(getDataCheckElevator);

      // console.log(dataCheckElevator);
      const startDate = dataCheckElevator.startDate;
      const endDate = dataCheckElevator.endDate;
      const onlineElevatorUrl =  dataCheckElevator.onlineElevatorUrl.split('index.html')[0];
      const elevatorMode = dataCheckElevator.mode;
      
      isOlineDate = isDateOnline(startDate, dateNow, endDate);

      const dataUrl = onlineElevatorUrl + 'data-main-elevator.json' + '?' + timeStamp;

      fetch(dataUrl)
        .then(response => {
          if (!response.ok) {
            console.error('fetch時http錯誤：' + response.status);
          }
          return response.json();
        })
        .then(json => {
          dataMainElevator = json;
          console.log(dataMainElevator);
          return initCheckElevator(json, elevatorMode, onlineElevatorUrl, timeStamp);
        })
        .catch(error => console.error(error));
    }
  }, 100);

  function initCheckElevator(json, elevatorMode, onlineElevatorUrl, timeStamp) {
    const localLeftCssId = 'localElevatorLeft';
    const localRightCssId = 'localElevatorRight';
    const isLocalLeft = isLocalCss(localLeftCssId);
    const isLocalRight = isLocalCss(localRightCssId);
    let bulidOnlineElevator = false;

    checkElevatorWrap();

    // 先檢查是否在設定的時間內，並且要在etmall內，是的話再檢查是否是自動名單內或是mode核可名單，皆是的話就製作線上電梯，否則製作離線電梯
    console.log( "isOlineDate", isOlineDate );
    console.log( "isEtMall", isEtMall() );
    console.log( "isModePass", isModePass( elevatorMode ) );
    console.log( "isPageInList", isPageInList(json) );
    if ((isOlineDate && isEtMall()) ) {
      // 測試mode的設定
      if(isPageInList(json) || isModePass(elevatorMode) ) {
        bulidOnlineElevator = true;
        console.log('openOnlineElevator!');
      }
    }

    // console.log( bulidOnlineElevator );
    if( bulidOnlineElevator) {
      // 如果有在線上日期內，加入線上左邊CSS，移除離線左邊CSS，最後加線上JS
      var onlineLeftCssFileName = 'main-elevator-left.css';
      var onlineScriptFileName = 'main-elevator.js';

      // 若沒有右電梯用全域變數要告知共用電梯
      notRightElevator = !isLocalRight;

      // 先插入線上電梯CSS
      makeOnlineFile(
        onlineElevatorUrl,
        onlineLeftCssFileName,
        makeCssLink,
        timeStamp
      );

      // 如果有舊電梯CSS，則要執行移除舊電梯CSS
      if (isLocalLeft) removeElement(localLeftCssId);

      // CSS插入完成後啟動線上電梯JS
      makeOnlineFile(
        onlineElevatorUrl,
        onlineScriptFileName,
        makeAsyncScript,
        timeStamp
      );
    } else {
      // 如果不在線上日期內，如果有左邊或右邊local CSS，則補上local JS
      // 沒有右電梯CSS但還是可能有隱藏的data-title作為錨點用，因此不能判斷沒電梯就不執行電梯JS，所以要兩邊CSS都沒有才不執行電梯
      if (isLocalLeft || isLocalRight) makeLocalScript('sp-elevator.js', timeStamp);
    }
  }

  // 檢查是否有設定共用電梯的時間
  function isDateOnline(startDate, nowDate, endDate) {
    // start、end是手動維護所以讓人用字串填寫，函式內自己轉換，nowDate外在本身就已經是時間物件，則不必轉換
    var startDate = new Date(startDate);
    var endDate = new Date(endDate);

    // 沒有開始時間直接false，有開始時間在再比較，當現在時間>=開始時間時，再比較是否>=結束時間
    // ( 因為有時整個檔期共用到底，沒有結束時間，所以比較結束時間要另外寫 )
    if (!startDate || nowDate < startDate) return false;
    if (nowDate >= startDate) {
      if (nowDate >= endDate) return false;
      else return true;
    } else return false;
  }

  // 檢查是否有設定離線電梯CSS
  function isLocalCss(id) {
    var localCss = document.getElementById(id);

    if (localCss) return true;
    else return false;
  }

  // 檢查有無設定電梯的家(wrap)，有的話呼叫填上電梯定位tag的函式
  function checkElevatorWrap() {
    // 檢查HTML有沒有設定電梯的家(置放電梯的目標位置)
    var homeLeft = document.getElementById('elevatorHome');
    var homeRight = document.getElementById('navRightBar');

    if (!homeLeft && !homeRight) {
      console.error('HTML沒有電梯的家！');
      return false;
    }
  }

  // 製作head內的 <link> tag
  function makeCssLink(linkUrl, timeStamp, targetId) {
    var link = document.createElement('link');
    var linkUrl = timeStamp ? linkUrl + timeStamp : linkUrl;
    var target = document.getElementById(targetId);

    link.rel = 'stylesheet';
    link.href = linkUrl;

    if (target) target.parentNode.insertBefore(link, target.nextSibling);
    else document.head.appendChild(link);
  }

  // 製作body內的 <script> tag
  function makeAsyncScript(scriptSrc, timeStamp, targetId) {
    var script = document.createElement('script');
    var scriptSrc = timeStamp ? scriptSrc + timeStamp : scriptSrc;
    var target = document.getElementById(targetId);

    script.src = scriptSrc;
    script.async = true;

    if (target) document.body.insertBefore(script, target.nextSibling);
    else document.body.appendChild(script);
  }

  // 製作離線電梯script(scriptFileName為'sp-elevator.js'或其他檔名)，因為CSS已經內建，因此只要建立script
  function makeLocalScript(scriptFileName, timeStamp, targetId) {
    // 離線CSS已經掛上，直接產出script即可
    var scriptAddress = document
      .getElementById('checkElevator')
      .src.split('check-elevator.js')[0];
    var localScriptUrl = scriptAddress + scriptFileName;
    var targetId = targetId;

    makeAsyncScript(localScriptUrl, timeStamp, targetId);
  }

  // 製作線上file的tag，給予線上網址、file name、製作函式(CSS或是script)、選填timeStamp，就能利用提供的網址製作
  function makeOnlineFile(
    onlineElevatorUrl,
    fileName,
    callback,
    timeStamp,
    targetId
  ) {
    if (!onlineElevatorUrl) {
      console.error('沒有共用電梯網址');
      return false;
    }

    // 外層也有split index,html，一個是fetch用，一個是函式用
    var onlineAddress = onlineElevatorUrl.split('index.html')[0];
    var onlineUrl = onlineAddress + fileName;

    if (typeof callback === 'function') {
      var targetId = targetId;
      callback(onlineUrl, timeStamp, targetId);
    }
  }

  function removeElement(id) {
    var el = document.getElementById(id);

    el.parentNode.removeChild(el);
  }

  /**
   * 檢查在黑白名單模式下，該頁網址是否通過檢查，
   * - 在白名單中存在名單之上可通過，回傳true
   * - 在黑名單中不存在名單上可通過，回傳true
   *
   * @param {string} mode 黑白名單模式 'white'、'black'兩種
   * @param {string} objectProperty 選填，為了符合電梯資料可直接貼上，因此物件可直接貼到data陣列，此處可指定物件中的哪個屬性為網址，預設為'webLink'
   * @returns {boolean} 模式中通過檢查回傳true，沒通過則回傳false
   */
  function isModePass(mode='white', objectProperty='webLink') {
    var property = objectProperty;
    var linkArray = dataCheckElevator.dataUrlList || [];
    var isListPass;

    // 如果在白名單模式下，預設不通過
    if (mode === 'white') {
      isListPass = false;
      // 如果在黑名單模式下，預設都通過
    } else if (mode === 'black') {
      isListPass = true;
    }

    linkArray.forEach(function (linkItem) {
      var listUrl;
      if (typeof linkItem == 'string') {
        listUrl = linkItem;
      } else if (typeof linkItem == 'object' && linkItem !== null) {
        listUrl = linkItem[property];
      }
      // console.log(listUrl);

      // 如果在白名單模式下，只要isUrlInList有過true
      if (mode === 'white') {
        if (isUrlInList(listUrl)) isListPass = true;
        // 如果在黑名單模式下，只要isUrlInList有過true，則阻擋
      } else if (mode === 'black') {
        if (isUrlInList(listUrl)) isListPass = false;
      }
    });

    return isListPass;
  }

  // 預設排除非EtMall的網址
  function isEtMall() {
    var nowUrl = decodeURIComponent(location.href);

    // TODO: isTest是用來離開開發用打開，即可離線測試，注意上線要關閉
    // if(isTest)return true;
    if (nowUrl.indexOf('etmall') !== -1) return true;
    else return false;

  }
})();

// 下一版的共用fetch Function
function getFetchData(dataUrl, callback) {
  fetch(dataUrl)
    .then(response => {
      if (!response.ok) {
        console.error('fetch時http錯誤：' + response.status);
      }
      return response.json();
    })
    .then(json => {
      if(typeof callback === 'function') callback(json);
      else console.error('fetch後的callback非函數 或 沒指定callback函數');
    })
    .catch(error => {
      console.error('本機端fetch失敗：' + error);
    });
}

// 檢查是否此頁網址在取得的json中
function isPageInList(json){
  // console.log(json);

  if((!typeof linkItem == 'object' && linkItem !== null)) throw new Error('fetch的JSON格式有誤');
  
  const webLinkArray = [];

  // 取得除了main以外的link連結
  objectItemsPushArray(json.sub, 'webLink',  webLinkArray);
  objectItemsPushArray(json.depart, 'webLink',  webLinkArray);

  // 比對，只要有任一webLink符合此頁就會回傳true
  // console.log(webLinkArray);
  return webLinkArray.some(link => { return isUrlInList(link) });
}

// 備用，深拷貝後取得所有的keys
function getDeepKeys(obj) {
  return Object.keys(obj).filter(key => obj[key] instanceof Object).map(key => getDeepKeys(obj[key]).map(k => `${key}.${k}`)).reduce((x, y) => x.concat(y), Object.keys(obj))
}

// 用來在取得的json物件中循環將指定的key值傳出到新的陣列
function objectItemsPushArray(array1, key, array2) {
  array1.forEach(item => {
    if(item[key] !== undefined) array2.push(item[key]);
  });
}

/**
 * 檢查檢查連結，因為會有app連結，因此要找出web連結與app連結相同處：
 * 1. 將名單中html連結剪去index.html能得到host與domain網址開頭，做成checkWord
 * 2. 將現在的網址進行轉址(webLink不變，appLink會轉成web格式)
 * 3. 將轉換過的網址與checkWord比較，轉換網址內有checkWord代表現有網址等同於名單網址
 *
 * @return {boolean} 被視為相同網址回傳true，否則回傳false
 */
  function isUrlInList(listWebLink) {
  var checkWord = listWebLink.split('index.html')[0];
  var nowUrl = decodeURIComponent(location.href);
  // console.log('checkWord:', checkWord);
  // console.log( 'nowUrl:', nowUrl );
  // console.log(nowUrl.indexOf(checkWord) !== -1);

  if (nowUrl.indexOf(checkWord) !== -1) return true;
  else return false;
}
