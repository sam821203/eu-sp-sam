import { isInViewPort } from 'utils/js/detect.js'

// 在addEventListener的scroll中使用這個函式可以回傳el頂部距離螢幕中線(預設)的佔比
export function getScrollPercentage ( el, elPreMove, triggerPercentage ) {
  // el.getBoundingClientRect().top = 0 是el上緣接觸視窗上緣，
  // el.getBoundingClientRect().top = window.innerHeight 是是el上緣接觸視窗下緣
  // window.innerHeight - el.getBoundingClientRect().top就是實際scroll的距離，除以window.innerHeight就是scroll的%
  // TODO:
  // 以視窗中線為基準(到中線時動畫完成)，就是走一半距離，就是上面*0.5
  // 多給兩個微調值可以微調，一個是中線基準(預設0.5)，一個是微調px(預設0)


  var el = el;
  var elPreMove = elPreMove || 0; // 微調上下緣觸發值
  var triggerPercentage = triggerPercentage || 0.5 // 預設在螢幕中線要跑完全部動畫
  if ( isInViewPort( el ) ) {
    var scrollPercentage = ( window.innerHeight - el.getBoundingClientRect().top - elPreMove ) / window.innerHeight;

    // console.log( el.getBoundingClientRect().top);
    // console.log( window.innerHeight );

    var fixedPercentage = scrollPercentage / triggerPercentage;

    if ( fixedPercentage < 0 ) fixedPercentage = 0;
    else if(fixedPercentage > 1) fixedPercentage = 1;

    // console.log(fixedPercentage);

    return fixedPercentage;
  }
}

// scroll to top function in pure js ES6
// etmall有內建jQ所以不需要，純備份，etmall要用要加上babel或改寫成ES5

// 參數：目標高度(或者是目標element，會自己帶出目標距離頂部高度)、[捲動時間、timing function、callback function]
// FIXME: IE不吃const語法，因此開host測試時會當機，把整個function註解掉即可在IE測試
export function scrollGo(targetValue, duration = 200, easing = 'linear', callback) {
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return (--t) * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - (--t) * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + (--t) * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
    }
  };

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const targetValueOffset = typeof targetValue === 'number' ? targetValue : targetValue.offsetTop;
  const targetValueOffsetToScroll = Math.round(documentHeight - targetValueOffset < windowHeight ? documentHeight - windowHeight : targetValueOffset);

  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, targetValueOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil((timeFunction * (targetValueOffsetToScroll - start)) + start));

    if (window.pageYOffset === targetValueOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}

// 使用方法範例
// 完整版、到目標區塊
// ===================
// document.querySelector('.js-btn1').addEventListener('click', () => {
//   // 參數：目標區塊(會帶入目標高度)、捲動時間300秒、timing function、結束時console高度
//   scrollGo(
//     document.querySelector('.js-section1'),
//     300,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });
//
// 簡易版、到目標高度(0就是scroll to top)
// ===================
// document.querySelector('.js-btnTop').addEventListener('click', () => scrollGo(0));

// item.parentNode的CSS可以加上scroll-behavior: smooth;讓部分瀏覽器支援平滑捲動
export function activeScrollLeftToMiddle (item) {
  var windowWidth = window.innerWidth;
  var itemWidth = item.clientWidth
  var offsetLeft = item.offsetLeft;
  var scrollLeft = offsetLeft - windowWidth / 2 + itemWidth / 2;

  item.parentNode.scroll( { 'behavior': 'smooth', 'left': scrollLeft } );
}