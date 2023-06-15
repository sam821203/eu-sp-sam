import {moveActiveToItem} from 'utils/js/move-active.js'


export var initTab = [
  buildTab(),
];

// Tab 頁籤
function buildTab(){
  var tabBox = document.getElementById('tabBox');
  var tabItems = Array.apply(null, tabBox.querySelectorAll('.tab__item'));
  var tabContentBlock = document.getElementById('tabContentBlock');
  var contentBox = Array.apply(null, tabContentBlock.querySelectorAll('.content__box'));

  if (tabItems.length !== contentBox.length) {
    console.error('Tab Item數量與Content Box數量不符');
    return false;
  }

  tabItems.forEach(function (el, index) {
    el.addEventListener('click', function() {
      // console.log('有接!');
      moveActiveToItem(tabItems, index);
      moveActiveToItem(contentBox, index)
    });
  });

}
