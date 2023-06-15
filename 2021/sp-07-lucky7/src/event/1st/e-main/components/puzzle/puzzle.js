import { isApp } from 'utils/js/detect.js'
import { randomCardReady }  from "event/1st/e-main/components/random-card/random-card.js" //這次邏輯由puzzle成功後load這段

export var initGame = gameReady()

// 是app則開始玩，否則不load
// =============================
function gameReady () {
  // TODO: 改成!isAPP()即可在網頁中操作，注意production版要改成isAPP()才行(關掉!驚嘆號)
  // if ( isApp() ) {} else return false // 為了統一能在所有地方都用!app代表網頁，故逆轉if

  var gameBox = document.getElementById( 'gameBox' )
  var background = document.getElementById('gamePuzzle')
  var context = background.getContext('2d')
  var ratio = window.devicePixelRatio || 1; //解決retina螢幕問題
  context.scale( ratio, ratio )

  var boxWidth = gameBox.clientWidth >= 960 ? 960 : gameBox.clientWidth
  background.width = boxWidth * ratio
  background.height = boxWidth * ratio

  var backgroundWidth = boxWidth * ratio // 背景寬度
  var padding = backgroundWidth * 0.005 // 圖片間距
  var column = 3 // 欄數
  var imageWidth = (backgroundWidth - padding * (column + 1)) / column // 圖片寬度
  var imageIndexForPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8] // 圖片位置array
  var isFinish = false

  // init
  window.addEventListener( 'load', function () {
    // TODO: 測試時關掉後按一下即可過關，注意product要打開
    setupRandomPosition()

    //TODO: 測試用，可直接生出抽卡區，不看動畫，注意production要關掉
    // var carWrap = document.getElementById('cardWrap');
    // carWrap.classList.add('active');
    // randomCardReady()

    drawAllImage()
  })

  // canvas被點擊時
  background.addEventListener( 'click', function (e) {
    // 完成了就不給點了
    if (isFinish) {
      return
    }

    var x = parseInt(e.offsetX * ratio / (padding + imageWidth))
    var y = parseInt(e.offsetY * ratio / (padding + imageWidth))

    var position = y * column + x
    var target = moveImageIfCanAtPosition(position)
    if (target >= 0) {
      refreshImagePositions(position, target)
    }
    if (checkIfFinish()) {
      drawImageItem(imageIndexForPosition[lastIndex()], lastIndex())
      isFinish = true
      afterFinish()
    }
  })

  // 鍵盤操作事件(這次不用)
  document.addEventListener('keyup', function (e) {
    if (isFinish) {
      return
    }

    var position = -1
    if (e.keyCode === '37' || e.key === 'ArrowLeft' || e.code === 'ArrowLeft') {
      // 按左的時候往右
      position = rightOfPosition(background.emptyPosition)
    } else if (e.keyCode === '38' || e.key === 'ArrowUp' || e.code === 'ArrowUp') {
      // 按上的時候往下
      position = bottomOfPosition(background.emptyPosition)
    } else if (e.keyCode === '39' || e.key === 'ArrowRight' || e.code === 'ArrowRight') {
      // 按右的時候往左
      position = leftOfPosition(background.emptyPosition)
    } else if (e.keyCode === '40'|| e.key === 'ArrowDown' || e.code === 'ArrowDown') {
      // 按下的時候往上
      position = topOfPosition(background.emptyPosition)
    } else if (e.keyCode === '65'|| e.key === 'a' || e.code === 'KeyA') {
      // 按A的時候往右
      position = rightOfPosition(background.emptyPosition)
    } else if (e.keyCode === '87'|| e.key === 'w' || e.code === 'KeyW') {
      // 按W的時候往下
      position = bottomOfPosition(background.emptyPosition)
    } else if (e.keyCode === '68'|| e.key === 'd' || e.code === 'KeyD') {
      // 按D的時候往左
      position = leftOfPosition(background.emptyPosition)
    } else if (e.keyCode === '83'|| e.key === 's' || e.code === 'KeyS') {
      // 按S的時候往上
      position = topOfPosition(background.emptyPosition)
    }
    if (position < 0 || position > lastIndex()) {
      return
    }
    var target = moveImageIfCanAtPosition(position)
    if (target >= 0) {
      refreshImagePositions(position, target)
    }
    if (checkIfFinish()) {
      drawImageItem(imageIndexForPosition[lastIndex()], lastIndex())
      isFinish = true
      afterFinish()
    }
  })

  // 繪製單張圖片，position為(0 ～ column^2-1)
  var drawImageItem = function (index, position) {
    var img = new Image()
    img.src = 'puzzle-' + String(index + 1) + '.png'
    img.onload = () => {
      var rect = rectForPosition(position)
      context.drawImage(img, rect[0], rect[1], rect[2], rect[3])
    }
  }

  // 更新圖片位置，origin是圖片原本位置、target是目標位置
  var refreshImagePositions = function (origin, target) {
    var originRect = rectForPosition(origin)

    context.clearRect(
      originRect[0],
      originRect[1],
      originRect[2],
      originRect[3]
    )
    drawImageItem(imageIndexForPosition[target], target)
  }

  // 跑迴圈繪製所有位置
  var drawAllImage = function () {
    for ( var position = 0; position < column * column; position++) {
      var index = imageIndexForPosition[position]
      if (index === lastIndex()) {
        // 最後一張圖片不繪製
        continue
      }
      drawImageItem(index, position)
    }
  }

  // 移動圖片位置，可移動的話就會移動並return目標位置，否則return -1
  var moveImageIfCanAtPosition = function (position) {
    var top = topOfPosition(position)
    var left = leftOfPosition(position)
    var bottom = bottomOfPosition(position)
    var right = rightOfPosition(position)

    var targetPosition = -1 // 預設目標位置為-1

    if (isPositionEmpty(top)) {
      targetPosition = top
    } else if (isPositionEmpty(left)) {
      targetPosition = left
    } else if (isPositionEmpty(bottom)) {
      targetPosition = bottom
    } else if (isPositionEmpty(right)) {
      targetPosition = right
    }

    // 如果有空位置就交換
    if (targetPosition >= 0) {
      imageIndexForPosition[targetPosition] = imageIndexForPosition[position]
      imageIndexForPosition[position] = lastIndex()
      background.emptyPosition = position // 更新空位位置
      return targetPosition
    }
    return -1
  }

  // 檢查某個位置是否為空的
  var isPositionEmpty = function (position) {
    if (position < 0 || position > lastIndex()) {
      return false
    }
    if (imageIndexForPosition[position] === lastIndex()) {
      return true
    } else {
      return false
    }
  }

  // return 最後一個位置
  var lastIndex = function () {
    return column * column - 1
  }

  // return某個位置的座標以便繪製
  var rectForPosition = function (position) {
    if (position < 0 || position > lastIndex()) {
      return [0, 0, 0, 0]
    }
    var x = (position % column) * (padding + imageWidth) + padding
    var y = parseInt(position / column) * (padding + imageWidth) + padding
    return [x, y, imageWidth, imageWidth]
  }

  // 检查是否完成
  var checkIfFinish = function () {
    for ( var index = 0; index < imageIndexForPosition.length; index++) {
      if (index != imageIndexForPosition[index]) {
        return false
      }
    }
    return true
  }

  // get左方位置，沒有則return -1
  var leftOfPosition = function (position) {
    return position % column === 0 ? -1 : position - 1
  }

  // get右方位置，沒有則return -1
  var rightOfPosition = function (position) {
    return position % column === column - 1 ? -1 : position + 1
  }

  // get上方位置
  var topOfPosition = function (position) {
    return position - column
  }

  // get下方位置
  var bottomOfPosition = function (position) {
    return position + column
  }

  // 製作可破關的隨機排序
  var setupRandomPosition = function () {
    var list1 = [4, 3, 2, 8, 0, 7, 5, 6, 1]
    var list2 = [2, 0, 5, 6, 8, 7, 3, 1, 4]
    var list3 = [3, 7, 2, 4, 1, 6, 8, 0, 5]
    var list4 = [3, 2, 4, 1, 7, 6, 5, 0, 8]
    var lists = [list1, list2, list3, list4]

    imageIndexForPosition = lists[parseInt(Math.random() * 4)]

    // get空位位置
    var emptyPosition = 0
    for ( var i = imageIndexForPosition.length - 1; i >= 0; i--) {
      if (imageIndexForPosition[i] === lastIndex()) {
        emptyPosition = i
        break
      }
    }
    background.emptyPosition = emptyPosition

    // 移動次數
    var times = 10
    while (times--) {
      // get隨機方向，決定空格的開始位置
      var direction = parseInt(Math.random() * 4)

      var target = -1
      if (direction === 0) {
        target = topOfPosition(emptyPosition) // 上
      } else if (direction === 1) {
        target = leftOfPosition(emptyPosition) // 左
      } else if (direction === 2) {
        target = rightOfPosition(emptyPosition) // 右
      } else if (direction === 3) {
        target = bottomOfPosition(emptyPosition) // 下
      }
      if (target < 0 || target > lastIndex()) {
        //如果位置不對就繼續下個循環
        continue
      }
      var result = moveImageIfCanAtPosition(target)
      if (result >= 0) {
        // 如果移動成功，更新空位的位置
        emptyPosition = target
      }
    }
  }
}

// finish時先load抽卡內容，再跑動畫、叫出random card的DOM(要先有圖片撐height捲軸才不會亂動)
function afterFinish () {
  randomCardReady()

  var gameWrap = document.getElementById( 'gameWrap' )

  gameWrap.classList.add( 'finished' )
  setTimeout( function () {
    var carWrap = document.getElementById('cardWrap');

    gameWrap.classList.remove( 'active' )
    carWrap.classList.add('active');

  }, 4000 )
}