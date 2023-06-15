// 此為範例不外連
// 共用class
export function MakeAnimateObject(animateFunction) {
  return {
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var el = swiper.slides[i];
        var slideProgress = el.progress;
        animateFunction(el, slideProgress, swiper);
      }
    },
    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].style.transition =
          speed + "ms";
      }
    }
  };
}
// rotate custom
export function rotateCustom(el, deg, slideProgress) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  el.style.transform =
    "rotate(" + deg * slideProgress + "deg)";
}
// rotate360
export function rotate360(el, slideProgress) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  el.style.transform =
    "rotate(" + 360 * slideProgress + "deg)";
}

// rotateY360
export function rotateY360(el, slideProgress) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  el.style.transform =
    "rotateY(" + 360 * slideProgress + "deg)";
}

export function circle(el, slideProgress, swiper) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  var width = swiper.width;
  //倍率
  var size = 1;

  // 後一個item狀態
  var x = size * (width + width * Math.abs(slideProgress) * 5.5) * slideProgress * 0.1;
  var y = size * (width * 0.28) * Math.abs(slideProgress);
  var scale = size * (1 - Math.abs(slideProgress) * 0.5);
  // 透明度 2表100%，1表0%
  var opacity = 1.6 - Math.abs(slideProgress)

  // 前一個item狀態(不設定就和後一個一樣)
  // if (slideProgress < 0) {
  //   //右滑
  //   x = size * (width * 0.66) * slideProgress;
  //   y = size * 115;
  //   scale = 0.5;
  //   opacity = 1.6 - Math.abs(slideProgress);
  // }
  var es = el.style;
  es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(' + x + 'px,' + y + 'px,0px) scale(' + scale + ')'
  es.opacity = opacity;
}