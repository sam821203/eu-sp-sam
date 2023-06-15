initTab();
bindDate();

function bindDate(){
  var startDate = createDateArray('2020/09/24 00:00', 14);
  var tabList = document.getElementById('tabList');
  var tabNavItems = Array.apply(null, document.querySelectorAll('#tabList li'));
  var tabContainer = Array.apply(null, document.querySelectorAll('#tabContainer li'));

  if (tabContainer.length !== startDate.length) return console.error('分頁數量與JS日期數量不符');

  var dateNow = new Date().getTime();

  startDate.forEach(function(el, index, thisArray) {
    var startTime = new Date(el);

    // 如果已經最後一個，直接讓nextTime比dateNow大即可(+1)
    if (index + 1 === thisArray.length) {
      var nextTime = dateNow + 1;
    } else {
      var nextTime = new Date(startDate[index + 1]);
    }

    // 如果現在時間比陣列此item時間大、比下一個item時間大，那就是過去式
    if(dateNow - startTime >= 0 && dateNow - nextTime >= 0) {
      var anchors = Array.apply(null, tabContainer[index].querySelectorAll('a'));

      // 將過去的item裡面的a遮蓋(加上class passed)並移除href使之不能連
      anchors.forEach(function(el){
        el.href = '';
        el.addEventListener('click', function(e){
          e.preventDefault();
        })
      });
      tabContainer[index].classList.add('passed');
      
    // 如果現在時間比陣列此item大，但比下一個時間小，那就是現在式(在最後一個item時沒有nextTime會出錯，所以上面要判斷最後一個item時nextTime比dateNow大1以符合條件)
    } else if (dateNow - startTime >= 0 && dateNow - nextTime < 0) {
      moveActiveOffsetLeft(tabList, tabNavItems, index);
      moveActiveTabItem(tabNavItems, index);
      moveActiveTabItem(tabContainer, index);
    }
  });

}
function initTab(){
  var tabNavItems = Array.apply(null, document.querySelectorAll('#tabList li'));
  var tabContainer = Array.apply(null, document.querySelectorAll('#tabContainer li'));

  if (tabNavItems.length !== tabContainer.length) return console.error('頁籤數量與分頁數量不符');

  tabNavItems.forEach(function(el, index){
    el.addEventListener('click', function(){
      // var tabList = document.getElementById('tabList');

      // moveActiveOffsetLeft(tabList, tabNavItems, index);
      moveActiveTabItem(tabNavItems, index);
      moveActiveTabItem(tabContainer, index);
    });
  });
}
function createDateArray(originDate, length, intervalsDay) {
  var startDay = new Date(originDate);
  var startTime = new Date(originDate).getTime();
  var dateArray = [];
  var index = 0;
  var intervalsDay = intervalsDay || 1;

  while(index < length) {
    var dateItem = startDay.setTime(startTime + parseInt(index * intervalsDay * 24 * 60 * 60 * 1000));

    dateArray.push(new Date(dateItem));
    index++;
  }

  return dateArray;
}
function moveActiveTabItem(tabArray, index){
  tabArray.forEach(function(el){
    el.classList.remove('active');
  });
  tabArray[index].classList.add('active');
}
function moveActiveOffsetLeft(wrapScrollElement, itemElementArray, index){
  // 因為item相鄰沒有offsetLeft值，因此用scrollWidth做判斷，第0個不用移動*0，第二個就是*1移動第0項的width距離，然後將父層的捲軸scrollLeft移動該值
  var itemActiveOffsetLeft = (itemElementArray[index].scrollWidth) * index;

  wrapScrollElement.scrollLeft = itemActiveOffsetLeft;
}