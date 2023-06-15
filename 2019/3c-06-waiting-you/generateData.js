function generateCountData(){
  // 多單輪流替補模式init
  // appendProduct(0, "notyet");
  // appendProduct(1, "notyet");
  // appendProduct(2, "notyet");
  // appendProduct(3, "notyet");

  // 固定單判斷日期模式init
  function timeLimitInit(timePast) {
    var timePast = timePast || 0;
    for (var m = timePast; m < breakTime.length; m++) {
      var timeLimitMonth = (new Date(breakTime[m]).getMonth()) + 1;
      var timeLimitDate = new Date(breakTime[m]).getDate();
      appendProduct(m, "notyet", timeLimitMonth, timeLimitDate);
    }
  }
  timeLimitInit(0);

  var targetIndex = 0;

  productWrap.style.opacity = 0;

  for(var i=0; i< breakTime.length - 1 ; i++) {
    countDownTimer();
  }
  
  var timer = setInterval(function(){
                countDownTimer();
              }, 1000);

  productWrap.style.opacity = 0;


  function appendProduct(i, state, month, date) {
    var productWrap = document.getElementById('productWrap');

    if(state === "notyet") {
      var productContent = '<div class="product product--just-standby"><a href="javascript:void(0)' + 
      '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
      '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
        '</div><div class="product__price"><span>只要</span><span>$</span><span>' + productData[i].price + '</span></div><div class="product__date">'+ month + '/'+ date + '開搶</div></a><div class="product__decoration"></div></div>';
    } else if (state === "over") {
      var productContent = '<div class="product product--over"><a href="javascript:void(0)' +
        '" title="' + productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg +
        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
        '</div><div class="product__price"><span>只要</span><span>$</span><span>' + productData[i].price + '</span></div></a><div class="product__decoration"></div></div>';
    } else {
      var isApp = initDetect();

      if(isApp === 'Web Browser') {
        var productContent = '<div class="product"><a href="' + productData[i].link + 
        '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
          '</div><div class="product__price"><span>只要</span><span>$</span><span>' + productData[i].price + '</span></div></a><div class="product__decoration"></div></div>';        
      } else if(isApp === 'Webview'){
        var productContent = '<div class="product"><a href="' + productData[i].appLink + 
        '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
          '</div><div class="product__price"><span>只要</span><span>$</span><span>' + productData[i].price + '</span></div></a><div class="product__decoration"></div></div>';         
      }

    }

    productWrap.innerHTML += productContent;
  }

  function countDownTimer() {
    if(!breakTime && !productData) return false;

    var timeNow = new Date().getTime();
    var targetTime = new Date(breakTime[targetIndex]).getTime();
    var countDownTime = targetTime - timeNow;
    var seconds = Math.floor(countDownTime / 1000);
    var min = Math.floor(seconds / 60);
    var hour = Math.floor(min / 60);
    var day = Math.floor(hour / 24);

    hour %= 24;
    min %= 60;
    seconds %= 60;

    // all day plus back to hour
    hour += day * 24;

    if(countDownTime <= 0) {
      day = 0
      hour = 0;
      min = 0;
      seconds = 0;

      targetIndex++;

      // 多單輪流替補模式
      // countProduct(targetIndex, breakTime);

      // 固定單判斷日期模式
      countTimeLimit(targetIndex);
    }
    appendTime(day, hour, min, seconds);
    productWrap.style.opacity = 1;
  }

  function appendTime(day, hour, min, seconds) {
    var timer = document.getElementById('timer');
    
    var timeData =
    (hour>99?'<span class="date date--hour date--out-range">99':'<span class="date date--hour">' + ('0' + hour).slice(-2)) + 
    '</span><span>:</span><span class="date date--min">' + ('0' + min).slice(-2) + 
    '</span><span>:</span><span class="date date--seconds">' + ('0' + seconds).slice(-2) + '</span>';

    timer.innerHTML = timeData;
  }
  // 多單輪流替補模式
  function countProduct(targetIndex, breakTime) {
    while (productWrap.firstChild) {
      productWrap.removeChild(productWrap.firstChild);
    }

    appendProduct((targetIndex - 1) * 2);
    appendProduct((targetIndex - 1) * 2 + 1, "notyet");
    appendProduct((targetIndex - 1) * 2 + 2, "notyet");
    appendProduct((targetIndex - 1) * 2 + 3, "notyet");

    if(targetIndex >= breakTime.length) {
      clearInterval(timer);

      while (productWrap.firstChild) {
        productWrap.removeChild(productWrap.firstChild);
      }
      
      appendProduct((breakTime.length - 1) * 2);
      appendProduct((breakTime.length - 1) * 2 + 1);
      appendProduct((breakTime.length - 1) * 2 + 2);
      appendProduct((breakTime.length - 1) * 2 + 3);
    }
  }

  // 固定單判斷日期模式
  function countTimeLimit(targetIndex){
    while (productWrap.firstChild) {
      productWrap.removeChild(productWrap.firstChild);
    } 
    var timePast = 0;
    for (var i = 0; i < breakTime.length; i++) {
      if (i < targetIndex) {
        timePast++;
      }
    }
    for (var j = 0; j < timePast -1 ; j++) {
      appendProduct(j, "over");
    }

    // 過一天就下掉，不需要就註解掉即可
    // ===========================================
    var dateNow = new Date();
    var tomorrow = new Date(breakTime[timePast - 1])
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log(dateNow >= tomorrow);

    if (dateNow >= tomorrow) {
      appendProduct(timePast - 1, "over");
    } else {
      appendProduct(timePast - 1);
    }
    // ===========================================

    // 剩下的補上時間
    timeLimitInit(timePast);

    // 多單輪流結束時全部over
    // if (targetIndex >= breakTime.length) {
    //   clearInterval(timer);

    //   while (productWrap.firstChild) {
    //     productWrap.removeChild(productWrap.firstChild);
    //   }

    //   for (var k = 0; k < breakTime.length; k++) {
    //     appendProduct(k, "over");
    //   }
    // }
  
    // 固定單結束時不強制遮蓋清除由原本時間判斷
    if (targetIndex >= breakTime.length) {
      clearInterval(timer);
    }
  }
}
generateCountData();

function initDetect() {
    // 判斷 app-view | web-view
    var isUiWebview = /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)|Android.*(wv|.0.0.0))/gi.test(navigator.userAgent);

    // app ? not app
    if (isUiWebview) {
        return 'Webview';
    }
    else {
        return 'Web Browser';
    }
}

function delScript(){
  var data = document.getElementById('data');
  var generateData = document.getElementById('generateData');

  function destroyEl(el) {
    document.addEventListener('DOMContentLoaded', function(){
      el.parentElement.removeChild(el);
    })  
  }
  destroyEl(data);
  destroyEl(generateData);  
}
delScript();