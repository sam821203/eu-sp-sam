// go top
// ================================
// function
var basicScrollTop = function () {
  // The button
  var btnTop = document.getElementById('goTop');
  // Reveal the button
  var btnReveal = function () {
      if (window.scrollY >= 300) {
          btnTop.classList.add('is-visible');
      } else {
          btnTop.classList.remove('is-visible');
      }
  }
  // Smooth scroll top
  var TopscrollTo = function () {
      if (window.scrollY != 0) {
        if(window.jQuery) {
          $('html,body').stop().animate({scrollTop:0},500);
        } else {
          setTimeout(function () {
              window.scrollTo(0, window.scrollY - 100);
              TopscrollTo();
          }, 0);          
        }
      }
  }
  // Listeners
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);
};
// append
var scriptLink = document.getElementById('generateScript').src;
var scriptSrc = scriptLink.split('generate.js')[0];
var fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.type = "text/css";
fontAwesomeLink.href = "https://use.fontawesome.com/releases/v5.0.13/css/all.css";

var goTopLink = document.createElement('link');
goTopLink.rel = "stylesheet";
goTopLink.type = "text/css";
goTopLink.href = scriptSrc + "generate.css";

var goTopHtml = '';
var goTopNode = document.createElement('button');
goTopHtml = '<i class="fas fa-arrow-up" style="font-size: 20px;"></i>';
goTopNode.id = 'goTop';
goTopNode.classList.add('go-top');
goTopNode.innerHTML = goTopHtml;

document.head.appendChild(fontAwesomeLink);
document.head.appendChild(goTopLink);
document.body.appendChild(goTopNode);

basicScrollTop();

function isWinWt() {
  var winWt = document.body.clientWidth;
  var navTop = document.getElementById('navTop');
  var goTop = document.getElementById('goTop');

  if (winWt >= 1260) {
    if (navTop) {
      goTop.style.display = 'none';
    } else {
      goTop.style.display = 'block';
    }
  } else {
    goTop.style.display = 'block';
  }
}
window.addEventListener('load', isWinWt);
window.addEventListener('resize', isWinWt);

// click nav and scroll to hash tag
// ================================
if(window.jQuery) {
  $('a[href^="#"]').on('click', function(e){var target=$('a[name='+this.getAttribute('href').split('#')[1]+']');if(target.length){e.preventDefault();$('html,body').stop().animate({scrollTop:target.offset().top},500);}});
}

// scroll progress bar
// ================================
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
  wrap.style.zIndex = 1;
  bar.style.height = height || '3px';
  bar.style.backgroundColor = color || '#cc1e05';
  bar.id = 'progressBar';
  
  wrap.appendChild(bar);
  body.insertBefore(wrap, body.firstChild);
}
function detectScroll(){
  var bar = document.getElementById('progressBar');
  bar.style.width = progressBarWidth() + 'px';
}
makeProgressBar('#cc1e05');
window.addEventListener('load', function(){
  requestAnimationFrame(detectScroll);
});
window.addEventListener('scroll', function(){
  requestAnimationFrame(detectScroll);
});
// window.addEventListener('touchmove', function(){
//   requestAnimationFrame(detectScroll);
// });