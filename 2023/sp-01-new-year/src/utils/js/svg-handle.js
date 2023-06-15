import { isInViewPort } from 'utils/js/detect.js'
import { getScrollTop } from 'utils/js/detect.js'

// 將img的svg轉成html內的svg才能以CSS操作，要使用fetch
export function convertSvgImages ( query, callback ) {
  var images = Array.apply(null, document.querySelectorAll( query ));

  images.forEach( function (image) {
    var parser = new DOMParser();
    var svg = parser.parseFromString( image.src, 'image/svg+xml' ).querySelector( 'svg' );

    if (image.id) svg.id = image.id;
    if ( image.className ) svg.classList = image.classList;

    image.parentNode.replaceChild(svg, image);
  } );

  if ( typeof callback === 'function' ) callback();
}

// 將目標SVG內7種可使用pathLength屬性填上pathLength=1
// 再從CSS內添加stroke 虛線動畫
export function setSvgPath ( query, length, callback ) {
  var svgElement = Array.apply(null, document.querySelectorAll( query ));
  var tagsHasPathLength = ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect'];
  var length = length || 1;

  // 每個SVG元素跑迴圈
  svgElement.forEach( function ( el ) {
    // 針對元素內的七種tag含有pathLength的每一種跑迴圈
    tagsHasPathLength.forEach( function ( item ) {
      var tags = el.querySelectorAll( item );

      // 把單一SVG元素中的所以該種tag 跑迴圈
      tags.forEach( function ( tag ) {
        // 添加上我們要的屬性與值
        console.log(tag.getTotalLength());
        tag.setAttribute( 'pathLength', length );
      });
    });
  });

  if ( typeof callback === 'function' ) callback();
}

export function setScrollSvgPath ( query, preReactLength, activeClass, callback ) {
  var query = query || '.svg--scroll';
  var activeClass = activeClass || 'active';
  var preReactLength = preReactLength || 0;
  var svgElement = Array.apply( null, document.querySelectorAll( query ) );

  svgElement.forEach( function ( el ) {
    var pathTags = Array.apply( null, el.querySelectorAll( 'path' ) );

    window.addEventListener( "scroll", function ( e ) {
      if ( isInViewPort( el ) ) {
        // 往下捲了幾%，因為元素頂部距離視窗頂部越往下捲越小，因此用視窗高度-前述距離(會越捲越大)當作分子
        // 用視窗高度當分母，就可以取出在視窗高度內，往下捲多少的比例，再給個參數微調
        var scrollPercentage = ( window.innerHeight - el.getBoundingClientRect().top - preReactLength ) / ( window.innerHeight );

        // console.log( window.innerHeight - el.getBoundingClientRect().top, window.innerHeight,  scrollPercentage);

        // 因為虛線偏移<0線段會縮回去，所以下判斷防止小於過0%倒縮，且節省效能
        if ( scrollPercentage > 0 ) {
          el.classList.add(activeClass);
          pathTags.forEach( function ( tag ) {
            var pathLength = tag.getTotalLength();

            tag.style.strokeDasharray = pathLength;
            tag.style.strokeDashoffset = pathLength;

            // 把視窗捲多少%換算SVG線段成長度
            var drawLength = pathLength * scrollPercentage;

            // 畫出來
            tag.style.strokeDashoffset = pathLength - drawLength;

            // 因為虛線偏移>100%後會進入空白，線段會縮回去，所以下判斷防止超過100%倒縮
            if ( scrollPercentage >= 0.99 ) {
              tag.style.strokeDasharray = "none";
            } else {
              tag.style.strokeDasharray = pathLength;
            }
          });
        }
      }
    });
  });

  if ( typeof callback === 'function' ) callback();
}