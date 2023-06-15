// fetch路徑取得json檔
fetch('data-logo.csv')
  .then(response => {
    if (!response.ok) {
      throw new Error('fetch時http錯誤：' + response.status);
    }
    return response.text();
  })
  .then(csv => csvToJson(csv))
  .then(array => initBuildLogo(array))
  .catch(error => {
    throw new Error('本機端fetch失敗：' + error);
  });

function initBuildLogo(array) {
  // head不預先排序，讓user可以在原始資料中控制tab的順序
  buildTabHead(array);
  // body中會將資料排序
  buildTabBody(array);
  addTabClick();

  // click時會過濾重複因此初始化時先啟動一次
  document.querySelectorAll('.jsTabItem')[0].click();

}

function buildTabBody(tabsArray) {
  // 資料以名稱先依英數排序後依照中文排序
  tabsArray.sort((a, b) => {
    let reg = /[a-zA-Z0-9]/
    if (reg.test(a['品牌名稱']) || reg.test(b['品牌名稱'])) {
      if (a['品牌名稱'] > b['品牌名稱']) return 1
      else if (a['品牌名稱'] < ['品牌名稱']) return -1
      else return 0
    } else return a['品牌名稱'].localeCompare(b['品牌名稱'])
  });
  // 第一次排序後依注音第二次排序(在注音中才會有英數中文排序)
  tabsArray.sort((a, b) => a['注音'].localeCompare(b['注音']));

  const titleArray = sortTitle(tabsArray);

  buildTabItem(tabsArray, titleArray);
  buildSortItem(titleArray);
}

function buildTabHead(tabsArray) {
  const repeatArray = [];
  let groupArray = [];
  const tabHead = document.getElementById('tabHead');

  // 取出所有品項的分類(會有重複)
  tabsArray.forEach((item) => {
    repeatArray.push(item['分類']);
  });

  // 重組成新的陣列並且沒重複
  groupArray = repeatArray.filter((item, index, thisArray) => {
    return thisArray.indexOf(item) === index;
  });
  // console.log(groupArray);

  // 利用沒重複的分類陣列製作tab按鈕
  groupArray.forEach((item, index,) => {
    const htmlNode =
      `<div class="jsTabItem tab__item tab--${index + 1}">
        <div class="tab__pic">
          <img src="tabs/tab-${index + 1}.png" alt="${item}">
          <img src="tabs/tab-${index + 1}-active.png" alt="${item}">
        </div>
        <div class="tab__text">${item}</div>
      </div>`;

    tabHead.insertAdjacentHTML('beforeend', htmlNode);
  });
}

function sortTitle(tabsArray) {
  const repeatArray = [];
  let titleArray = [];

  // 取出所有品項的分類(會有重複)
  tabsArray.forEach((item) => {
    repeatArray.push(item['注音']);
  });

  // 重組成新的陣列並且沒重複
  titleArray = repeatArray.filter((item, index, thisArray) => {
    // 如果非注音則不進入陣列
    // if (item === "") return false;
    return thisArray.indexOf(item) === index;
  });
  // console.log(titleArray);
  return titleArray;
}

function buildTabItem(tabsArray, titleArray) {
  const tabBody = document.getElementById('tabBody');
  // 製作h2用的flag
  let titleNodeIndex;
  // 製作每個item的title ClassName
  let itemGroupIndex = 0;

  tabsArray.forEach((item, index) => {
    // 製作相同的data-cht者上方要有h2 title
    titleArray.forEach((title, titleIndex) => {
      if (item['注音'] === title && titleNodeIndex !== titleIndex) {
        // 如果來的data-cht內容是空值，則給個預設值(因為會將空值的歸類在一起)
        const titleText = titleArray[titleIndex] === '' ? (defaultTitleName ? defaultTitleName : '#') : titleArray[titleIndex];
        const titleNode = `<h2 id="${titleText}">${titleText}</h2>`;
        tabBody.insertAdjacentHTML('beforeend', titleNode);
        titleNodeIndex = titleIndex;
        itemGroupIndex = titleIndex;
      }

    });
    const checkedlink = isApp() ? item['品牌旗艦館APP連結'] : item['品牌旗艦館連結'];

    const htmlNode =
      `<div class="jsTabContent tab__content content--${index + 1} title--${itemGroupIndex + 1}" data-cht="${item['注音']}" data-group="${item['分類']}">
        <a href="${checkedlink}" title="${item['品牌名稱']}">
        <div class="tab__pic">
          <img class="pic--web" src="${item['大網LOGO']}" alt="${item['品牌名稱']}">
        </div>
        <div class="tab__text">${item['品牌名稱']}</div>
      </div>`
    tabBody.insertAdjacentHTML('beforeend', htmlNode);
  });
}

function buildSortItem(titleArray) {
  const sortWrap = document.getElementById('sortWrap');

  titleArray.forEach((item, index) => {
    // 設定要輸出到nav的item門檻數量(要其內的logo品夠多，該注音group才會被添加到sortWrap中)
    const amountShow = sortNavShowLimit ? sortNavShowLimit : 3;
    if (item === '') item = defaultTitleName ? defaultTitleName : '#';
    const thisTitleClassName = '.title--' + (index + 1);
    // 計算每一個含有title的
    const itemTitleAmount = document.querySelectorAll(thisTitleClassName).length;
    // console.log(item, itemTitleAmount);

    if (itemTitleAmount >= amountShow) {
      const sortItemNode =
        `<a href="#${item}" class="jsSortItem sort__item" title="${item}">${item}</div>`;

      sortWrap.insertAdjacentHTML('beforeend', sortItemNode);
    }
  });

}

function moveActiveToItem(arrayItems, itemIndex, activeClass = 'active') {
  arrayItems.forEach(el => el.classList.remove(activeClass));
  arrayItems[itemIndex].classList.add(activeClass);
}

function addTabClick() {
  const tabItems = Array.apply(null, document.querySelectorAll('.jsTabItem'));
  // const tabContents = Array.apply(null, document.querySelectorAll('.jsTabContent'));


  tabItems.forEach((item, index, thisArray) => {
    item.addEventListener('click', () => {
      // 點tab自身亮燈
      moveActiveToItem(thisArray, index);
      // 點tab後篩選同樣分類的content
      tabContentsFilter(item);
      // 將全部子項都hide的Title一併隱藏
      removeAllHideTitle();
    });
  });
}

// 點tab後篩選同樣分類的content
function tabContentsFilter(item) {
  const tabContents = Array.apply(null, document.querySelectorAll('.jsTabContent'));
  let checkRepeat;

  tabContents.forEach((content) => {
    content.classList.add('hide');

    // content篩選
    const clickedTabGroup = item.querySelector('.tab__text').innerText;
    // console.log(clickedTabGroup);

    if (clickedTabGroup === '全部品牌') {
      content.classList.remove('hide');

      // 因為不同tab中會有同一品牌，在全部出現時會全部show出來，因此要檢查，重複的就hide
      const itemName = content.querySelector('.tab__text').innerText;

      if (itemName !== checkRepeat) {
        checkRepeat = itemName;
      } else {
        content.classList.add('hide');
      }
    } else if (content.dataset.group === clickedTabGroup) {
      content.classList.remove('hide');
    }
  });
}

function removeAllHideTitle() {
  const titleHeaders = Array.apply(null, document.querySelectorAll('#tabBody h2'));

  titleHeaders.forEach((title, titleIndex, titleArray) => {
    title.classList.remove('hide');

    const titleIndexClassName = '.title--' + (titleIndex + 1);
    const titleItems = document.querySelectorAll(titleIndexClassName);
    // console.log(titleItems);
    const titleHideClassName = '.title--' + (titleIndex + 1) + '.hide';
    const titleHideItems = document.querySelectorAll(titleHideClassName);
    // console.log(titleHideItems);

    if (titleHideItems.length - titleItems.length === 0) {
      titleArray[titleIndex].classList.add('hide');
    }
  });

  // 當title都hide好後以title為檢查對象把sortItems不必要的關掉
  removeAllHideSortItem();
}

function removeAllHideSortItem() {
  const sortItems = Array.apply(null, document.querySelectorAll('.jsSortItem'));
  const titleHeaders = Array.apply(null, document.querySelectorAll('#tabBody h2'));

  sortItems.forEach((sortItem) => {
    sortItem.classList.remove('hide');
  });

  titleHeaders.forEach((title) => {
    if (title.classList.contains('hide')) {
      sortItems.forEach((sortItem) => {
        if (sortItem.innerText === title.innerText) {
          sortItem.classList.add('hide');
        }
      });
    }
  });
}

function csvToJson(csv) {
  // 先將原始資料切割斷行建立成資料陣列(CSV利用斷行區分每筆資料)
  const rowsArray = csv.split(/\n/g);
  // rowsArray.shift()就先將原始資料踢掉第一個純分類，剩下data，
  // 另外將純分類做成keysArray以便在建構時拿來當flag標記
  const keysArray = rowsArray.shift().split(",");
  const itemsArray = [];
  // console.log(rowsArray);

  // 對原始資料跑迴圈建構最終陣列與每筆資料物件
  rowsArray.forEach(item => {
    // 把每筆原始資料分成不同陣列
    const valuesArray = item.split(",");
    const valuesObject = {};

    // 利用分類做出的key跑迴圈檢查每筆資料陣列，做成「key : value」格式塞入物件
    keysArray.forEach((key, index) => {
      valuesObject[key] = valuesArray[index];
    });
    // 將生成的每筆物件插入最終陣列
    itemsArray.push(valuesObject);
  });

  // console.log(itemsArray);
  return itemsArray;
}

function isApp() {
  const isUiWebview =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );
  if (isUiWebview) return true;
  else return false;
}