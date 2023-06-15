
export function scratchReady ( callback ) {
  // 獎項底圖，會先opacity = 0，load完銀漆要打開
  var scratchCardFront = document.querySelector( '#scratchBottom img' );
  var canvasBox = document.getElementById( 'canvasBox' );
  var canvas = document.getElementById( 'scratchTop' );
  var ctx = canvas.getContext( '2d' );

  // 解決retina螢幕問題
  // ===================================
  var ratio = window.devicePixelRatio || 1;
  var fixWidth = canvasBox.clientWidth >= 960 ? 960 : canvasBox.clientWidth;
  var fixHeight = canvasBox.clientHeight >= 960 ? 960 : canvasBox.clientHeight;

  ctx.scale( ratio, ratio );
  canvas.width = fixWidth * ratio;
  canvas.height = fixHeight * ratio;
  // ===================================

  var brushRadius = ( canvas.width / 100 ) * 5;

  if (brushRadius < 10) { brushRadius = 10}

  // TODO:設置圖片與設置銀漆只能選一種
  // 設置覆蓋層圖片 or 銀漆
  // ===================================
  // 圖片
  var img = new Image();
  img.src = 'scratch-0.png';

  // 針對不同解析度設置大張圖片
  // if (window.devicePixelRatio >= 2) {
  //   var nameParts = img.filename.split('.');
  //   img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
  // } else {
  //   img.src = img.loc + img.filename;
  // }

  img.onload = function(){
    ctx.drawImage( img, 0, 0, canvas.width, canvas.height );
    // 打開獎項底圖
    scratchCardFront.style.opacity = 1;
  }
  // ===================================

  // 設置漸層銀漆
  // ===================================
  // 橫
  // var gradient = ctx.createLinearGradient( 0, 0, canvas.width, canvas.height );
  // 直
  // var gradient = ctx.createLinearGradient( 0, 0, 0, canvas.height );
  // 斜，左上右下
  // var gradient = ctx.createLinearGradient( 0, 0, canvas.width, canvas.height );
  // gradient.addColorStop( 0, "gray" );
  // gradient.addColorStop( 0.4, "silver" );
  // gradient.addColorStop( 0.6, "silver" );
  // gradient.addColorStop( 1, "gray" );
  // ctx.fillStyle = gradient;

  // 設置單色銀漆
  // ctx.fillStyle = 'silver';

  // 把漸層or單色上到方塊上
  // ctx.fillRect( 0, 0, canvas.width, canvas.height );
  // 打開獎項底圖
  // scratchCardFront.style.opacity = 1;
  // ===================================

  function detectLeftButton(event) {
      if ('buttons' in event) {
          return event.buttons === 1;
      } else if ('which' in event) {
          return event.which === 1;
      } else {
          return event.button === 1;
      }
  }

  function getBrushPos(xRef, yRef) {
    var canvasRect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((xRef-canvasRect.left)/(canvasRect.right-canvasRect.left)*canvas.width),
      y: Math.floor((yRef-canvasRect.top)/(canvasRect.bottom-canvasRect.top)*canvas.height)
    };
  }

  function drawDot(mouseX,mouseY){
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    ctx.fillStyle = '#000';
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
    checkComplete();
  }

  canvas.addEventListener( "mousemove", function ( e ) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    var leftBut = detectLeftButton(e);
    if (leftBut == 1) {
      drawDot(brushPos.x, brushPos.y);
    }
  }, false);

  canvas.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if ( touch ) {
      var brushPos = getBrushPos( touch.clientX, touch.clientY );

      drawDot(brushPos.x, brushPos.y);
    }
  }, false );

  // 到多久直接打開，可帶入percent自定義數字(0~1，預設0.8)
  function checkComplete ( percent ) {
    var percent = percent || 0.8;
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    var eraseTotal = 0;

    // imageData會返回每個座標的rgba四個值，檢查是否消失可以只檢查a(透明度)加快速度
    // 因此用step用4表每4個檢查一次，for loop從i=3檢查起少檢查前面三個
    // 正常也可以直接i=0，i++一個一個檢查，結果不變
    var step = 1 * 4;
    for (var i = 3, len = imageData.length; i < len; i += step) {
      if (imageData[i] === 0) {
          eraseTotal++;
      }
    }
    if (eraseTotal >= ( len / step  * percent)) {
      ctx.globalCompositeOperation = 'destination-over';
      ctx.canvas.style.opacity = 0;

      if ( typeof callback === 'function' ) callback();
    }
  }
}