import { getScrollTop } from 'utils/js/detect'
import { detectRaf } from 'utils/js/detect.js'
import { smoothScroll } from 'utils/js/scroll.js'

export var initGlobalUXItems = generateGlobalUXItems();

var initProgressBar = false;
function generateGlobalUXItems () {
  // 製作Go top元素
  makeFixedGoTop();
  // 建立所有goTop(.js--go-top)的click功能(要等電梯build好所以要用load)
  window.addEventListener('load', setGoTops);

  // 偵測是否要隱藏小網nav(大網、有電梯時、scroll一定距離內隱藏)
  window.addEventListener('load', hideGoTopInWebWhenNav);
  window.addEventListener('resize', hideGoTopInWebWhenNav);

  // 電梯與錨點功能：讓hash tag與data-title都能smooth捲動
  anchorSmoothScroll();

  // 製作scroll progress bar
  makeProgressBar();
  // 如果有重複的bar要清掉只留一個
  document.addEventListener('DOMContentLoaded', function(){
    checkBar();
  } );
  // 偵測捲軸是否已捲動，是的話計算並顯示正確bar位置
  window.addEventListener('load', function () {
    detectRaf(detectScroll);
  });
  window.addEventListener('scroll', function () {
    detectRaf(detectScroll) ;
  });
}

// go top
// ================================================================
// 製作go top元素並append到body最底端
function makeFixedGoTop () {
  // append go top element
  var goTopNode = document.createElement('button');
  var goTopHtml = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>';
  goTopNode.id = 'fixedGoTop';
  goTopNode.classList.add( 'go-top' );
  goTopNode.classList.add( 'js--go-top' );
  goTopNode.innerHTML = goTopHtml;

  document.body.appendChild( goTopNode );
}

function setGoTops () {
  // 可能會有其他的go top(如電梯的goTop)，設定啟動所有含特定class的元素給予go top功能
  var btnTops = Array.apply( null, document.querySelectorAll( '.js--go-top' ) );
  // console.log(btnTops);

  btnTops.forEach( function ( el ) {
    el.addEventListener( 'click', makeGoTopScrolling );
  });
}

// 設定如果點擊go top要smooth捲回上方，要綁click用
function makeGoTopScrolling ( e ) {
  e.preventDefault();
  smoothScroll( 0 );
}

// 當有電梯、大網時隱藏小網的SVG go top(go top功能由大網電梯取代)
// 要綁load或在生成go top後執行，也可以多綁resize
function hideGoTopInWebWhenNav() {
  var windowWidth = document.body.clientWidth;
  var navGoTop = document.getElementById('navGoTop');
  var btnGoTop = document.getElementById( 'fixedGoTop' );

  if ( navGoTop && windowWidth >= 1260 ) {
    btnGoTop.style.display = 'none';
  } else {
    // 超過一定高度才要露出
    window.addEventListener('scroll', detectShowFixedGoTop);
  }
}

// 偵測如果超過scroll超過則go top出現，要綁scroll用
function detectShowFixedGoTop () {
  var btnFixedGoTop = document.getElementById( 'fixedGoTop' );

  if (window.scrollY >= 300) {
    btnFixedGoTop.classList.add('is-visible');
  } else {
    btnFixedGoTop.classList.remove('is-visible');
  }
}

// 電梯與錨點功能：讓hash tag與data-title都能smooth捲動
// ================================================================
function anchorSmoothScroll () {
  var anchorsScroll = Array.apply( null, document.querySelectorAll( 'a[href^="#"]' ) );

  anchorsScroll.forEach( function ( anchor ) {
    anchor.addEventListener( 'click', function ( e ) {
      var target;
      // 判斷有沒有id
      var targetIdTest = document.querySelector( this.getAttribute( 'href' ) );

      if ( targetIdTest ) {
        target = targetIdTest;
      } else {
        target = document.querySelector( '[data-title=' + this.getAttribute( 'href' ).split( '#' )[1] + ']' );
      }
      // 判斷有沒有data-title
      if ( target ) {
        e.preventDefault();

        // 如果有nav則scroll到頂時要避開nav，沒有nav的話也要避開progress bar
        var progressBarHeight = document.getElementById( 'progressBar' ) ? document.getElementById( 'progressBar' ).clientHeight + 4 : 0;
        var navHeight = document.getElementById( 'navSub' ) ? document.getElementById( 'navSub' ).clientHeight : 0;
        var fixOffsetTop = navHeight > 0 ? navHeight : progressBarHeight;
        var finalOffsetTop = target.offsetTop - fixOffsetTop;

        smoothScroll( finalOffsetTop );
      }
    });
  });
}

// scroll progress bar
// ================================
function makeProgressBar(initProgressBar) {
  var body = document.body;
  var wrap = document.createElement('div');
  var bar = document.createElement( 'div' );
  wrap.id = 'progressBarWrap';
  wrap.style.opacity = 0; // 開始先隱藏
  wrap.style.position = 'fixed';
  wrap.style.zIndex = 15;
  wrap.style.top = 0;
  wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  wrap.style.width = '100%';
  wrap.style.height = '0.5vh';
  bar.style.backgroundColor = '#cc1e05';
  bar.style.backgroundImage = 'linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)';
  bar.style.height = '100%';
  bar.id = 'progressBar';

  wrap.appendChild(bar);
  body.insertBefore(wrap, body.firstChild);
  if (getScrollTop()) initProgressBar = true; // 如果在最上面(getScrollTop() = 0)則不改變數

}

// 偵測畫面是否已經捲動
function detectScroll() {
  var wrap = document.getElementById('progressBarWrap');
  var bar = document.getElementById('progressBar');
  bar.style.width = detectProgressBarWidth() + 'px';

  // 如果不在最上面則打開隱藏，如果在最上面則打開init，之後就會打開隱藏且再滾回來都不會消失
  if (initProgressBar) wrap.style.opacity = 1; else initProgressBar = true;

}

function detectProgressBarWidth() {
  var finalWidth;
  var nowScroll = getScrollTop();
  var bodyHeight = document.body.scrollHeight - window.innerHeight;
  var bodyWidth = document.body.clientWidth;

  finalWidth = parseInt(nowScroll / bodyHeight * bodyWidth);
  return finalWidth;
}

// 檢查有幾個progress bar，超過2條沒有id的(舊bar)移除
function checkBar() {
  var allBars = Array.apply(null, document.querySelectorAll('#progressBar'));
  var newBarHasId = 0;

  if (allBars.length > 1) {
    allBars.forEach(function (el) {
      var barWrap = el.parentNode;

      if (barWrap.id === 'progressBarWrap') {
        newBarHasId++;

        // 超過一個newBar就砍
        if (newBarHasId > 1) barWrap.parentNode.removeChild(barWrap);

      } else {
        // 舊bar都砍
        barWrap.parentNode.removeChild(barWrap);
      }
    });
  }
}