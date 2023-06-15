
export function getRandom(length) {
  return Math.floor(Math.random() * length);
}

export function getRandomRange(min, max) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

/**
 * 回傳相鄰不重複值：傳入最大值，重複call此function會回傳不和上次call相同的值，但同一號碼會持續被抽到
 * e.g. 重複call這個function五次，會回傳20242，但不會有22042(會重複抽到2，但不會有「連續」兩個2)
 * FIXME: 目前只能在window底下建立全域變數做check，還沒想到好的方法
 * FIXME: 當while跑迴圈時間超過外部setInterval時間時，有可能這次結果與下一次抽到的結果重疊造成重複
 * @param {number} arrayLength 要隨機值骰的陣列數量
 * @param {number} variableNowIndex 裝現在active index的變數(各呼叫者要自己準備變數)
 * @returns selectedIndex
 */
export function siblingRandom ( arrayLength, globalVariableName ) {
  var globalVariableName = globalVariableName || 'siblingRandomCheckNowIndex';
  var selectedIndex = getRandom(arrayLength);

  while(selectedIndex === window[globalVariableName]) {
    selectedIndex = getRandom(arrayLength);
  }
  window[globalVariableName] = selectedIndex;
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

// 對陣列洗牌
export function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}