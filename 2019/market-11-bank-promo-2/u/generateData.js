generate1stTable();

if (showDepartment) {
  var matchCount;
  var departmentWrap = document.getElementById('departmentWrap');
  var notMatchDepartment = document.getElementById("notMatchDepartment");
  var selectDepartmentEl = departmentWrap.getElementsByTagName('select');

  departmentWrap.style.display = 'block';
  notMatchDepartment.style.display = "none";

  for (var i = 0; i < selectDepartmentEl.length; i++) {
    selectDepartmentEl[i].addEventListener('change', connectDepartmentSeclect);
  }

  isUiWebview(departmentData);
  initGenerateDepartmentPool();
}

isUiWebview(bankData);
initGenerateBankPool();

var bankSelectWrap = document.getElementById('filterBank');
var selectEl = bankSelectWrap.getElementsByTagName('select');

for(var i = 0; i < selectEl.length; i++) {
  selectEl[i].addEventListener('change', makePool);
}

btnCleanAddEvent();


// ================= function zone ===================
function initGenerateDepartmentPool() {
  generateOption('departmentSelect', optionDepartment);
  generateDepartment(departmentData);
}

function initGenerateBankPool() {
  generateOption('dateSelect', optionDate);
  generateOption('costSelect', optionCost);
  generateOption('bankSelect', optionBank);
  generateBank(bankData);
}

function generate1stTable() {
  var sp1stTableWrap = document.getElementById('sp1stTableWrap');
  var sp1stTableContent = '';

  if (!sp1stTableWrap && !data1stTable) return false;

  for (var i = 0;i < data1stTable.length; i++) {
    sp1stTableContent += '<li><div>' + data1stTable[i].itemTitle + '</div><div>' + data1stTable[i].itemContent + '</div></li>';
  }
  sp1stTableWrap.innerHTML = '<p>' + data1stTableTitle + '</p><ul>' + sp1stTableContent + '</ul>';    
}

function generateOption(el, data) {
  var dataSelect = document.getElementById(el);

  if (!dataSelect && !data) return false;

  var dataSelectContent = '';

  for (var i = 0;i < data.length; i++) {
    data[i].optionTitle = data[i].optionTitle ? data[i].optionTitle : data[i].optionValue;

    if (i === 0) {
      dataSelectContent += '<option selected disabled hidden value="notSelect">' + data[i].optionTitle + '</option>';
    } else {
      dataSelectContent += '<option value="' + data[i].optionValue + '">' + data[i].optionTitle + '</option>';
    }
  }

  dataSelect.innerHTML = dataSelectContent + '<option value="all">不指定</option>';      
}

function generateDepartment(dataSource) {
  var departmentDataZone = document.getElementById('departmentDataZone');

  if (!departmentDataZone && !dataSource) return false;

  var dataPromoContent = '';

  for (var i = 0; i < dataSource.length; i++) {
    if (i === 0) {
      dataPromoContent += '<li><div>' + dataSource[i].department + '</div><div>' + dataSource[i].date + '</div><div>' + dataSource[i].info + '</div></li>';
    } else {
      dataPromoContent += '<li data-department="' + dataSource[i].dataDepartment + '"><a href="' + dataSource[i].link + '"><div>' + dataSource[i].department + '</div><div data-title="' + dataSource[0].date + '">' + dataSource[i].date + '</div><div data-title="' + dataSource[0].info + '">' + dataSource[i].info + '</div></a></li>';
    }
  }
  departmentDataZone.innerHTML = '<ul class="hide-show">' + dataPromoContent + '</ul>'; 
}
function generateBank(dataSource) {
  var bankDataZone = document.getElementById('bankDataZone');

  if (!bankDataZone && !dataSource) return false;

  var notMatchBox = document.getElementById('notMatchBox');
  var dataPromoContent = '';

  bankDataZone.style.display = 'block';
  notMatchBox.style.display = 'none';

  // if no data, dataSource only have Title, so length = 1;
  if (dataSource.length === 1) {
    bankDataZone.style.display = 'none';
    notMatchBox.style.display = 'block';
  } else {

    for (var i = 0;i < dataSource.length; i++) {
      dataSource[i].link = dataSource[i].link ? dataSource[i].link : '';

      var dateNow = new Date();
      var eventStart = dataSource[i].eventStart;
      var timeLimit = new Date(eventStart);

      if (i === 0) {
        dataPromoContent += '<li><div>' + dataSource[i].date + '</div><div>' + dataSource[i].bank + '</div><div>' + dataSource[i].limit + '</div><div>' + 
                            dataSource[i].benefit + '</div><div>' + dataSource[i].info + '</div></div></li>';
      } else {
        dataPromoContent += '<li data-dateSelect="' + dataSource[i].dataDate + '" data-costSelect="' + dataSource[i].dataCost + 
                            '" data-bankSelect="' + dataSource[i].bank + '"><div>' + dataSource[i].date + '</div><div>' + dataSource[i].bank + '</div><div>' + 
                            dataSource[i].limit + '</div><div>' + dataSource[i].benefit + '</div><div>' + dataSource[i].info;
        if (dateNow >= timeLimit) {
          dataPromoContent += '<a href="' + dataSource[i].eventLink + '">登錄</a></div></div></li>';
        } else {
          dataPromoContent += '<a href="' + dataSource[i].link + '">詳情</a></div></div></li>';
        }
      }
    }
    bankDataZone.innerHTML = '<ul class="hide-show">' + dataPromoContent + '</ul>'; 
  }
}

function generateStatus(optionDefaultTitle, optionTitle) {
  var statusZone = document.getElementById('statusZone');

  if (!resultBank) return false;

  if (optionDefaultTitle === '' && optionTitle === '') {
    statusZone.innerHTML = '';
  } else {
    statusZone.innerHTML += '<li>' + optionDefaultTitle + '：<span>' + optionTitle + '</span></li>';
  }
}

function btnCleanAddEvent() {
  var resultBank = document.getElementById('resultBank');
  var statusZone = document.getElementById('statusZone');
  var btnClean = document.getElementById('btnClean');
  
  if (!resultBank) return false;

  btnClean.addEventListener('click', function(e){
    e.preventDefault();
    statusZone.innerHTML = '<li>日期</li><li>金額</li><li>銀行</li>';
    resultBank.style.display = 'none';

    initGenerateBankPool();
  });
}

function makePool() {
  // make three temp arrays contain the result of single filter
  var filterIndexDate = [];
  var filterIndexCost = [];
  var filterIndexBank = [];
  var resultBank = document.getElementById('resultBank');

  resultBank.style.display = 'block';
  generateStatus('', '');

  for (var j = 0; j < selectEl.length; j++) {
    var optionSelected = selectEl[j].options.selectedIndex;
    var optionData = selectEl[j].options[optionSelected].value;
    var optionDefaultTitle = selectEl[j].options[0].innerHTML;
    var optionTitle = selectEl[j].options[optionSelected].innerHTML;

    if (optionData === "notSelect") {
      optionTitle = "未指定";
    } else if (optionData === "All") {
      optionTitle = "不指定";
    }

    generateStatus(optionDefaultTitle, optionTitle);
    
    switch (j) {
      case 0:
        filterData(selectEl[j].name, optionData, filterIndexDate)
        break;
      case 1:
        filterData(selectEl[j].name, optionData, filterIndexCost)
        break;
      case 2:
        filterData(selectEl[j].name, optionData, filterIndexBank)
        break;
      default:
        break;
    }
  }

  // use pair filter twice to get finalPool
  var middlePool = pairFilter(filterIndexBank, filterIndexCost);
  var finalPool = pairFilter(middlePool, filterIndexDate);
  var result = [];

  // translate item's index to item self
  // push the title
  result.push(bankData[0]);

  for (var i = 0 ; i < finalPool.length; i++ ) {
    result.push(bankData[finalPool[i]]);
  }
  generateBank(result);
}

// core start
// single filter with check array
function filterData(bankProp, targetAttr, targetArray) {

  // if target is all push all index in bankData
  if (targetAttr === "all" || targetAttr === "notSelect") {

    // the index: "0" is title, not data, so start by 1;
    for (var i = 1; i < bankData.length; i++) {
      targetArray.push(i);
    }

  } else {

    // clean targetArray every time.
    while(targetArray.length > 0) {
      targetArray.pop();
    }    
    // if bankData have multi options all meets option push in targetArray
    bankData.filter(function(item, index){
      if (typeof(item[bankProp]) === 'object') {
        for (var i = 0; i < item[bankProp].length; i++) {
          if (item[bankProp][i] === targetAttr) {
            targetArray.push(index);
          }
        }
      } else {
        // only single option meets: normal pass
        if (item[bankProp] === targetAttr) {
          targetArray.push(index);
        }
      }
    });
  }
}

// second pair filter
function pairFilter(arr1, arr2) {
    var pairArray = arr1.filter(function(item){
      return arr2.indexOf(item) > -1;
    })
    return pairArray;
}
// core end

function isUiWebview(dataSource) {
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

    if (isUiWebview) {
      for (var i = 0; i < dataSource.length; i++) {
        dataSource[i].link = dataSource[i].appLink ? dataSource[i].appLink : dataSource[i].link;
        dataSource[i].eventLink = dataSource[i].eventAppLink ? dataSource[i].eventAppLink : dataSource[i].eventLink;
      }
    }
}

function connectDepartmentSeclect() {
  var departmentDataZone = document.getElementById('departmentDataZone');
  var notMatchDepartment = document.getElementById("notMatchDepartment");
  var depatmentItem = departmentWrap.getElementsByTagName("li");
  var optionValue = null;

  notMatchDepartment.style.display = "none";

  for (var i = 0; i < selectDepartmentEl.length; i++) {
    var optionSelected = selectDepartmentEl[i].options.selectedIndex;
    var optionData = selectDepartmentEl[i].options[optionSelected].value;

    matchCount = 0;
    optionValue = optionData;
  }
  
  for (var i = 1; i < depatmentItem.length; i++) {
    
    departmentDataZone.style.display = "block";
    depatmentItem[i].style.display = "none";

    if (optionValue === "all") {
      depatmentItem[i].style.display = "block";
      matchCount++;
    };

    if (depatmentItem[i].dataset.department === optionValue) {
      depatmentItem[i].style.display = "block";
      matchCount++;
    }
  }

  if (matchCount === 0) {
    departmentDataZone.style.display = "none";
    notMatchDepartment.style.display = "block";    
  }
}