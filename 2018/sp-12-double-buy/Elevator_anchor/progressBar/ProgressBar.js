function getScrollTop(){
  var bodyTop = 0;
  if (typeof window.pageYOffset != "undefined") {
    bodyTop = window.pageYOffset;

  } else if (typeof document.compatMode != "undefined"
             && document.compatMode != "BackCompat") {
    bodyTop = document.documentElement.scrollTop;

  } else if (typeof document.body != "undefined") {
    bodyTop = document.body.scrollTop;
  }
  return bodyTop;
}
function progressBarWidth() {
  var finalWidth;
  var nowScroll = getScrollTop();
  var bodyHeight = document.body.scrollHeight - window.innerHeight;
  var bodyWidth = document.body.clientWidth;

  finalWidth = parseInt(nowScroll / bodyHeight * bodyWidth);
  return finalWidth;
}
function makeProgressBar(color, height) {
  var body = document.body;
  var wrap = document.createElement('div');
  var bar = document.createElement('div');
  wrap.style.position = 'fixed';
  bar.style.height = height || '5px';
  bar.style.backgroundColor = color || '#cc1e05';
  bar.id = 'progressBar';
  
  wrap.appendChild(bar);
  body.insertBefore(wrap, body.firstChild);
}

window.addEventListener('load', function(){
  makeProgressBar('#cc1e05');
});
window.addEventListener('scroll', function(){
  var bar = document.getElementById('progressBar');
  bar.style.width = progressBarWidth();
});