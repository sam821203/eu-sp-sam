// 更改active時要跑迴圈清除active指定目標，因此寫成共用函式
// 代入指定陣列、需要移動到該item的index、以及要補上的className(預設'active')即可
// 範例： 直接把index代入即可運作
// tabNavItems.forEach(function(el, index){
//   el.addEventListener('click', function(){
//     moveActiveTabItem(tabNavItems, index);
//     moveActiveTabItem(tabContainer, index);
//   });
// });
export function moveActiveToItem(tabArray, index, className){
  var className = className || 'active';

  tabArray.forEach(function(el){
    el.classList.remove(className);
  });
  tabArray[index].classList.add(className);
}