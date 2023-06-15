function detectWindowWidth(width, functionWeb, functionMobile) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    if (typeof (functionWeb) === "function") return functionWeb();
  } else {
    if (typeof (functionMobile) === "function") return functionMobile();
  }
}
function autoWidth(wrapperWidth) {
  var autoWidthWrap = Array.apply(null, document.getElementsByClassName('width--auto'));
  var autoWidthImgs = Array.apply(null, document.querySelectorAll('.width--auto img'));

  autoWidthImgs.forEach(function (el, index) {
    var elWidth = el.naturalWidth;
    var widowWidth = document.body.clientWidth;
    autoWidthWrap[index].style = "width:" + (elWidth / wrapperWidth) * 100 + '%';
  });
}
function initAutoWidth() {
  detectWindowWidth(960, null, function () {
    autoWidth(960);
  });
}
window.addEventListener('load', initAutoWidth);
window.addEventListener('resize', initAutoWidth);

// lazyload init
// lazyload();
