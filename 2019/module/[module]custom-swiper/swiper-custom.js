// 共用class
function MakeAnimateObject(animateFunction) {
  return {
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var el = swiper.slides[i];
        var slideProgress = el.progress;
        animateFunction(el, slideProgress);
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

// rotate360
function rotate360(el, slideProgress) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  el.style.transform =
    "rotate(" + 360 * slideProgress + "deg)";
}

// rotateY360
function rotateY360(el, slideProgress) {
  // 動畫的參數必須乘上swiper內部參數才會每個slider個別啟動
  el.style.transform =
    "rotateY(" + 360 * slideProgress + "deg)";
}