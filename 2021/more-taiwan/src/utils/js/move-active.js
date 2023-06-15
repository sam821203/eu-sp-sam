// 更改active時要跑迴圈清除active指定目標，因此寫成共用函式
// 代入指定陣列、需要移動到該item的index、以及要補上的className(預設'active')即可
// 範例： 直接把index代入即可運作
// tabNavItems.forEach(function(el, index){
//   el.addEventListener('click', function(){
//     moveActiveTabItem(tabNavItems, index);
//     moveActiveTabItem(tabContainer, index);
//   });
// });
export function moveActiveToItem ( arrayItems, itemIndex, activeClass ) {
  var activeClass = activeClass || 'active';

  arrayItems.forEach(function (el) {
    el.classList.remove(activeClass);
  } );

  arrayItems[itemIndex].classList.add(activeClass);
}

export function twoArrayCleanMoveActive ( arrayItems, itemIndex, otherArray, activeClass ) {
  var activeClass = activeClass || 'active';

  arrayItems.forEach(function (el) {
    el.classList.remove(activeClass);
  } );

  otherArray.forEach(function (el) {
    el.classList.remove(activeClass);
  } );

  arrayItems[itemIndex].classList.add(activeClass);
}

export function cleanArrayActive ( arrayItems, activeClass ) {
  var activeClass = activeClass || 'active';

  arrayItems.forEach(function (el) {
    el.classList.remove(activeClass);
  } );
}