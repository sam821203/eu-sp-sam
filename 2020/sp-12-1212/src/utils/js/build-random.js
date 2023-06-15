
export function getRandom(length) {
  return Math.floor(Math.random() * length);
}

// 回傳相鄰不重複值：傳入最大值，重複call此function會回傳不和上次call相同的值，但同一號碼會持續被抽到
// e.g. 重複call這個function五次，會回傳20242，但不會有22042(會重複抽到2，但不會有「連續」兩個2)
// FIXME: 目前只能在window底下建立全域變數做check，還沒想到好的方法
export function siblingRandom(arrayLength){
  var selectedIndex = getRandom(arrayLength);

  while(selectedIndex === window.siblingRandomCheckNowIndex) {
    selectedIndex = getRandom(arrayLength);
  }

  window.siblingRandomCheckNowIndex = selectedIndex;
  // console.log(selectedIndex);

  return selectedIndex;
}

// 建立不重複陣列index：給予一個陣列長度，最後return一個含隨機index的陣列
// e.g. 給長度5，會回傳[1, 4, 2, 3, 0]
export function makeRandomIndexArray(arrayLength){
  var originArray = [];
  var originIndex = 0;
  var randomArray = [];
  var randomIndex = 0;

  while(originIndex < arrayLength) {
    originArray.push(originIndex);
    originIndex++;
  }

    // console.log(originArray);

  while(randomIndex < arrayLength) {
    var randomElementIndex = getRandom(originArray.length);

    randomArray.push(
      originArray.splice(randomElementIndex, 1)[0]
    );
    randomIndex++;
  }
  
  // console.log(randomArray);

  return randomArray;
}