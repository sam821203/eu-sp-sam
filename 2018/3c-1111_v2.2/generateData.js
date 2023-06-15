function generateCountData(){
  appendProduct(0, true);
  appendProduct(1, true);
  appendProduct(2, true);
  appendProduct(3, true);

  var targetIndex = 0;

  productWrap.style.opacity = 0;

  for(var i=0; i< breakTime.length - 1 ; i++) {
    countDownTimer();
  }
  
  var timer = setInterval(function(){
                countDownTimer();
              }, 1000);

  productWrap.style.opacity = 0;


  function appendProduct(i, justStandby ) {
    var productWrap = document.getElementById('productWrap');

    if(justStandby) {
      var productContent = '<div class="product product--just-standby"><a href="javascript:void(0)' + 
      '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
      '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
      '</div></a></div>';
    } else {
      var isApp = initDetect();

      if(isApp === 'Web Browser') {
        var productContent = '<div class="product"><a href="' + productData[i].link + 
        '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
        '</div><div class="product__price"><span>優惠價</span><span>$</span><span>' + productData[i].price + '</span></div></a></div>';        
      } else if(isApp === 'Webview'){
        var productContent = '<div class="product"><a href="' + productData[i].appLink + 
        '" title="'+ productData[i].name + '"><div class="product__img"><img src="' + productData[i].productImg + 
        '" alt="' + productData[i].name + '"></div><div class="product__name">' + productData[i].name +
        '</div><div class="product__price"><span>優惠價</span><span>$</span><span>' + productData[i].price + '</span></div></a></div>';         
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
      countProduct(targetIndex, breakTime);
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

  function countProduct(targetIndex, breakTime) {
    while (productWrap.firstChild) {
      productWrap.removeChild(productWrap.firstChild);
    }

    appendProduct((targetIndex - 1) * 2);
    appendProduct((targetIndex - 1) * 2 + 1);
    appendProduct((targetIndex - 1) * 2 + 2, true);
    appendProduct((targetIndex - 1) * 2 + 3, true);

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