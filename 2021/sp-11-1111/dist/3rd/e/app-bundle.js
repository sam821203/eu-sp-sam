!function(e){function t(t){for(var r,a,l=t[0],d=t[1],s=t[2],u=0,m=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(t);m.length;)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==o[d]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=d;i.push([7,1]),n()}([,,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},,function(e,t,n){"use strict";n.r(t);n(3);var r=n(1),o=n.n(r);n(4),n(5);function i(e,t,n){if(document.body.clientWidth>=e){if("function"==typeof t)return t()}else if("function"==typeof n)return n()}function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function l(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function d(e){return document.body.clientWidth>=e}function s(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function c(e,t,n,r){var o=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:d(e)?n:r;return r||(r=n),o}function u(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function m(e){return new Date>e}function p(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function f(e,t,n,r){var o=[],i=typeof e;return"undefined"===i?t&&o.push(t):"string"===i?(r&&o.push(t),o.push(e)):Array.isArray(e)?(r&&o.push(t),e.forEach((function(e){o.push(e)}))):n&&console.error(n),o}function y(e,t){if("string"==typeof e)var n=new Date(e);else if("object"==typeof e)n=e;if(!m(n))return(t=document.querySelector(t)).style.display="none",!0}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!l&&("string"==typeof l()?parseInt(l(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,l,d=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?r.style.opacity=1:d=!0}i=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),i.insertBefore(a,i.firstChild),s()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))}();function v(){var e=0,t=0,n=0,r=window.innerWidth,o=document.getElementById("ferrisDom"),i=Array.apply(null,o.querySelectorAll(".ferris__item")),a=document.getElementById("heroBlock");function l(e){o.style.transform="rotate("+e/100*360+"deg)",i.forEach((function(t){t.style.transform="rotate("+e/100*-360+"deg)"}))}function d(){(e+=1)>100?(o.classList.remove("active"),i.forEach((function(e){e.classList.remove("active")})),e=0):(o.classList.add("active"),i.forEach((function(e){e.classList.add("active")}))),l(e)}var s=setInterval(d,100),c=function(o){clearInterval(s);var i=o.targetTouches,l=i?i[0].clientX:o.clientX;t=Math.ceil(l/r*100),n=e,document.addEventListener("touchmove",u),document.addEventListener("touchend",m),document.addEventListener("mousemove",u),document.addEventListener("mouseup",m),a.style.cursor="grabbing"},u=function(o){var i=o.targetTouches,a=i?i[0].clientX:o.clientX,d=Math.ceil(a/r*100)-t;(e=n+1*d)<0?e=0:e>100&&(e=100),l(e),document.body.style.cursor="grabbing"},m=function(){document.removeEventListener("touchmove",u),document.removeEventListener("touchend",m),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",m),s=setInterval(d,100),a.style.cursor="grab",document.body.style.cursor="auto"};a.addEventListener("touchstart",c),a.addEventListener("mousedown",c)}function w(e,t){document.addEventListener("scroll",(function(){e.style.transform="translate3d(0,"+u()*parseFloat(t)+"px,0)"}))}requestAnimationFrame((function(){v(),g("bgSky",-.3),g("ballon",.4),g("bgCarLeft",.5),g("bgCarRight",.5),g("bgCastle",-.4),g("bgRoadLight",.2)}));function g(e,t){!function(e,t){w(e,t)}(document.getElementById(e),t)}var h=n(2),b=n.n(h);function L(){var e=document.getElementById("bgDecoration");Array.apply(null,e.querySelectorAll(".decoration__item img")).forEach((function(e){var t=(window.innerWidth-e.clientWidth)/2;e.style.left=t+"px"}));new b.a(e)}requestAnimationFrame((function(){window.addEventListener("load",(function(){i(1260,L,null)})),window.addEventListener("resize",(function(){i(1260,L,null)}))}));var E=n(0),S=n.n(E);function C(e){return Math.floor(Math.random()*e)}function A(e,t){t=t||"siblingRandomCheckNowIndex";for(var n=C(e);n===window[t];)n=C(e);return window[t]=n,n}a(window.addEventListener("load",B),B);function B(){Array.apply(null,document.querySelectorAll("#promoEvent .swiper-container")).forEach((function(e){var t=e.querySelectorAll(".swiper-slide").length;new S.a(e,{autoplay:{delay:1800+Math.floor(500*Math.random()),disableOnInteraction:!1,reverseDirection:!0},init:t>1,initialSlide:Math.floor(Math.random()*t),loop:!0,speed:500+Math.floor(200*Math.random())})}))}function M(e,t,n){t=t||0,n=n||.5;if(function(e,t,n){t=t||0,n=n||t||0;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=r+t,i=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return o&&i+n>=0}(e=e)){var r=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/n;return r<0?r=0:r>1&&(r=1),r}}function N(e){if(void 0===e)return console.error("沒有資料來源")}function k(e){return e?(p(e,"客製化設定請用物件表示"),e):{}}function P(e,t,n,r){r=void 0===r||r;var o,i,a=k(t);if(r&&N(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o={productNumber:l}}else{p(e,"資料格式不正確");var d=a.productNumberKey||"productNumber";if("string"==typeof e[d]||"number"==typeof e[d]){l=Number(e[d]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o=e}else if(e[d])console.log(e),console.error("銷編格式錯誤");else{var s=a.nameKey||"name",c=a.textKey||"text",u=a.priceKey||"price";e[s]&&(e[c]||e[u])?o=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(i=n,Array.isArray(i)||p(i)){var m=[];return n.forEach((function(e){"function"==typeof e?m.push(n(o,a)):console.error("callback並非函式")})),m}if("function"==typeof n)return n(o,a);console.error("callback並非函式")}function I(e,t){return P(e,t,O,!1)}function O(e,t){var n,r,o,i,a=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",d=t.mobileLinkKey||"mobileLink",s=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[d]?e[d]:n,o=e[s]?e[s]:r;else if(e[a]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,o="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return i=e[u]||"",[c(960,o,n,r),i]}function T(e,t){return P(e,t,x,!1)}function x(e,t){var n,r=t.productNumberKey||"productNumber",o=t.imgSrcKey||"imgSrc",i=t.altKey||"name";if(e[o])n=e[o];else if(e[r]){var a=t.imgSizeBreakpoint||768,l=t.imgSizeWebSize||"XL",s=t.imgSizeMobileSize||"L",c="-1_"+(d(a)?l:s)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+c}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[i]?e[i]:""]}function z(e,t){return P(e,t,_,!1)}function _(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),o=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),o.setAttribute("tag","GOOD_SALEPRC"),o.setAttribute("goodid",e[n]),[r,o]}function q(e,t){var n,r=k(t),o=r.namekey||"name",i=r.pricekey||"price",a=r.textkey||"text";if(n=e[o]||"",e[a])var l=!0;return[n,l?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[i]))?e[i]||"":Number(e[i]).toLocaleString()||"":e[i]||""]}function D(e,t){var n,r,o=(t=t||{}).namekey||"name",i=t.pricekey||"price",a=t.textkey||"text",l=document.createElement("span"),d=document.createElement("span"),s=!1,c=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===c||"false"===c||"none"===c)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,m=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===c?(e[o]?(l.innerHTML=q(e,t)[0],n=l):n=z(e,t)[0],e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=q(e,t)[1],r=d):(d.appendChild(z(e,t)[1]),r=d)):"all"===c?(n=z(e,t)[0],d.appendChild(z(e,t)[1]),r=d):!1===c||"false"===c||"none"===c?(u?n=z(e,t)[0]:e[o]?(l.innerHTML=q(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),m?(d.appendChild(z(e,t)[1]),r=d):(e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=q(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源")),u||m||(e[o]?(l.innerHTML=q(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=q(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,s]}function Y(e,t){N(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad,o=void 0===t.isSlider||t.isSlider;if(o){var i=t.sliderClass,a=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=f(i,"swiper-slide","sliderClass格式不正確",!0);if(a){var d=t.sliderImgLazyLoadClass,s=t.sliderLazyLoadIndicatorClass,c=f(d,null,"sliderImgLazyLoadClass格式不正確",!0),u=f(s,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){c.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){u.push(e)}))}else if(r){var m=t.imgLazyLoadClass,p=t.lazyLoadIndicatorSrc||"1x1_low.png",y=f(m,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var v=document.createElement("img");if(a||r){var w=document.createElement("div");v.dataset.src=T(e,t)[0],v.alt=""}else v.src=T(e,t)[0],v.alt=T(e,t)[1];a?(c.forEach((function(e){v.classList.add(e)})),u.forEach((function(e){w.classList.add(e)}))):r&&(y.forEach((function(e){v.classList.add(e)})),v.src=p);var g=document.createElement(n),h=f(t.outerClass),b=o?l:h;Array.isArray(b)&&b.forEach((function(e){g.classList.add(e)}));var L,E,S=document.createElement("a");S.href=I(e,t)[0],S.title=I(e,t)[1],L=D(e,t)[0],E=D(e,t)[1];var C=D(e,t)[2],A=document.createElement("div"),B=document.createElement("div"),M=document.createElement("div"),k=document.createElement("div"),P=document.createElement("div"),O=document.createElement("div");if(A.classList.add("product"),A.classList.add("product--dynamic"),B.classList.add("product__block"),M.classList.add("product__img"),k.classList.add("product__text"),P.classList.add("product__name"),O.classList.add("product__price"),M.appendChild(v),a&&M.appendChild(w),P.appendChild(L),C)O.appendChild(E);else{var x=document.createElement("span");x.innerHTML="$",O.appendChild(x),O.appendChild(E)}if(k.appendChild(P),k.appendChild(O),B.appendChild(M),B.appendChild(k),S.appendChild(B),A.appendChild(S),g.appendChild(A),r)return g;return v.addEventListener("error",(function(){g.style.display="none"})),g}var j,W,H;H=document.querySelector("#dynamicSliderSection .swiper-wrapper"),dataDynamicSlider.forEach((function(e){var t=Y(e);H.appendChild(t)})),a(window.addEventListener("load",R),R),j=document.getElementById("decorDynamicSlider"),W=document.getElementById("DynamicSliderTitle"),window.addEventListener("scroll",(function(){var e=M(j,0,.6),t=100+-100*e;j.style.transform="translateY("+t+"%)",W.style.transform="translateY("+t+"%)";var n=1*e;j.style.transformOrigin="bottom",j.style.transform=" scale("+n+")",j.style.opacity=n,W.style.transformOrigin="bottom"}));function R(){new S.a("#dynamicSliderSection",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:s("#dynamicSliderSection",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#dynamicSliderSection .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,slidesPerView:3,slidesPerGroup:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}function V(e,t,n){var r=new Date(e),o=new Date(e).getTime(),i=[],a=0;for(n=n||1;a<t;){var l=r.setTime(o+parseInt(a*n*24*60*60*1e3));i.push(new Date(l)),a++}return i}V("2021/10/18 10:00",20),V("2021/10/18 09:00",20),V("2021/10/18 10:00",20,2),function(){var e=document.querySelector("#dailySliderBlock .swiper-wrapper");dataDailySlider.forEach((function(t){var n=Y(t,{isSliderLazyLoad:!1});e.appendChild(n)})),a(window.addEventListener("load",K),K)}(),function(){var e=document.getElementById("decorDailySlider"),t=document.getElementById("DailySliderTitle");window.addEventListener("scroll",(function(){var n=M(e,0,.6),r=100+-100*n;e.style.transform="translateY("+r+"%)",t.style.transform="translateY("+r+"%)";var o=1*n;e.style.transformOrigin="bottom",e.style.transform=" scale("+o+")",e.style.opacity=o,t.style.transformOrigin="bottom"}))}();function K(){return new S.a("#dailySliderBlock",{autoplay:{delay:2e3,disableOnInteraction:!1},slidesPerView:2,slidesPerGroup:2,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}function F(e,t,n,r){e=e||{},t=t||!1;if(Array.isArray(n)){var o=n[2]?n[2]:"name",i=n[3]?n[3]:"price",a=n[4]?n[4]:"text",l=n[5]?n[5]:"swiper-slide";if(t)var s=n[6]?n[6]:"swiper-lazy",u=n[7]?n[7][0]:"swiper-lazy-preloader",m=n[7]?n[7][1]:"swiper-lazy-preloader-black"}else{o="name",i="price",a="text",l="swiper-slide";if(t)s="swiper-lazy",u="swiper-lazy-preloader",m="swiper-lazy-preloader-black"}r=r||[,,,,"name"];if(e.hasOwnProperty(a)&&!e.hasOwnProperty(i))var p=!0;var f=document.createElement("li"),y=document.createElement("a"),v=document.createElement("img"),w=document.createElement("span"),g=document.createElement("span");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",i=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",i="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var d="https://www.etmall.com.tw/i/"+e[r],s="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else d=e[o]?e[o]:"javascript:void(0)",s=e[i]?e[i]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=c(960,u,d,s),e.hasOwnProperty(l)&&(t.title=e[l])}(e,y,r),function(e,t,n,r,o){if(e=e||{},t=t||{},n=n||!1,Array.isArray(o)){var i=o[0]?o[0]:"productNumber",a=o[1]?o[1]:"imgSrc";if(!n)var l=o[2]?o[2]:"imgAlt"}else{i="productNumber",a="imgSrc";if(!n)l="name"}if(Array.isArray(r))var s=r[0]?r[0]:768,c=r[1]?r[1]:"XL",u=r[2]?r[2]:"L";else s=768,c="XL",u="L";if(e.hasOwnProperty(i)&&"number"==typeof e[i]&&!e.hasOwnProperty(a))var m="-1_"+(d(s)?c:u)+".jpg",p=e[i],f="https://media.etmall.com.tw/NXimg/00"+p.toString().slice(0,4)+"/"+p+"/"+p+m;else if(e.hasOwnProperty(a))f=e[a];else console.error("未指定銷售編號或是圖片來源");n?t.dataset.src=f:(t.src=f,e.hasOwnProperty(l)&&(t.alt=e[l]))}(e,v,t),t&&v.classList.add(s),w.innerHTML=e[o],g.innerHTML=p?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[i]))?e[i]:Number(e[i]).toLocaleString():e[i],f.classList.add(l);var h=document.createElement("div"),b=document.createElement("div"),L=document.createElement("div"),E=document.createElement("div");if(h.classList.add("product"),h.classList.add("product--dynamic"),b.classList.add("product__img"),L.classList.add("product__name"),E.classList.add("product__price"),b.appendChild(v),L.appendChild(w),E.innerHTML=p?"<span></span>":"<span>$</span>",E.appendChild(g),t){var S=document.createElement("div");S.classList.add(u),S.classList.add(m),b.appendChild(S)}if(y.appendChild(b),y.appendChild(L),y.appendChild(E),h.appendChild(y),f.appendChild(h),t)return f;return v.addEventListener("error",(function(){f.style.display="none"})),f}(function(){var e=document.getElementById("tabBox"),t=Array.apply(null,e.querySelectorAll(".tab__item--top")),n=document.getElementById("tabContentBlock"),r=Array.apply(null,n.querySelectorAll(".content__box"));if(t.length!==r.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTab1&&dataTab2&&dataTab3))return!1;var e=[dataTab1,dataTab2,dataTab3];Array.apply(null,document.querySelectorAll("#tabContentBlock .swiper-wrapper")).forEach((function(t,n){e[n].forEach((function(e){var n=F(e);t.appendChild(n)}))}))})(),t.forEach((function(e,n){e.addEventListener("click",(function(){X(t,n),X(r,n),G(n)}))})),G()})(),function(){var e=document.getElementById("DynamicSectionTitle");window.addEventListener("scroll",(function(){var t=M(e,0,.5),n=50+-50*t;e.style.transform="translateY("+n+"%)";e.style.transformOrigin="bottom"}))}();function X(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function G(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider"));new S.a(t[e],{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:!d(960),breakpoints:{320:{slidesPerView:2,slidesPerColumn:2},960:{slidesPerView:4,slidesPerColumn:2}},slidesPerGroup:2,slidesPerColumnFill:"row",speed:600})}!function(){var e=document.getElementById("decorGameW2M2"),t=document.getElementById("gameW2M2Title");window.addEventListener("scroll",(function(){var n=M(e,0,.6),r=100+-100*n;e.style.transform="translateY("+r+"%)",t.style.transform="translateY("+r+"%)";var o=1*n;e.style.transformOrigin="bottom",e.style.transform=" scale("+o+")",e.style.opacity=o,t.style.transformOrigin="bottom"}))}();(function(){var e=document.querySelector("#cashBackSlider .swiper-wrapper");dataCashBackSlider.forEach((function(t){var n=Y(t);e.appendChild(n)})),a(window.addEventListener("load",J),J)})(),function(){var e=document.getElementById("decorCashBackSlider"),t=document.getElementById("CashBackSliderTitle");window.addEventListener("scroll",(function(){var n=M(e,0,.6),r=100+-100*n;e.style.transform="translateY("+r+"%)",t.style.transform="translateY("+r+"%)";var o=1*n;e.style.transformOrigin="bottom",e.style.transform=" scale("+o+")",e.style.opacity=o,t.style.transformOrigin="bottom"}))}();function J(){new S.a("#cashBackSlider",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:s("#cashBackSlider",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic2 .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderDynamic2Next",prevEl:"#sliderDynamic2Prev"},slidesPerView:3,slidesPerGroup:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}y("2021/9/1 10:00:00","#bnSlider")||a(window.addEventListener("load",Q),Q),function(){var e=document.getElementById("decorBnSlider");window.addEventListener("scroll",(function(){var t=M(e,0,.5),n=100+-100*t;e.style.transform="translateY("+n+"%)";var r=1*t;e.style.transformOrigin="bottom",e.style.transform=" scale("+r+")",e.style.opacity=r}))}();function Q(){return new S.a("#sliderBn",{initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:3,spaceBetween:"5%",speed:600})}a(window.addEventListener("load",U),U),function(){var e=document.getElementById("MidMoreSliderTitle");window.addEventListener("scroll",(function(){var t=M(e,0,.6),n=100+-100*t;e.style.transform="translateY("+n+"%)";e.style.transformOrigin="bottom"}))}();function U(){new S.a("#sliderMidMore",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderMidMore .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderMidMoreNext",prevEl:"#sliderMidMorePrev"},slidesPerView:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0})}setInterval((function(){var e,t,n,r;e=Array.apply(null,document.querySelectorAll("#w3m3Wrap a")),n=A((t=["active","active"]).length,"siblingRandomCheckW3M3AnimationIndex"),r=A(e.length),e.forEach((function(e){t.forEach((function(t){e.classList.remove(t)}))})),e[r].classList.add(t[n])}),1e3),function(){var e=document.getElementById("decorEventW3M3");window.addEventListener("scroll",(function(){var t=M(e,0,.6),n=100+-100*t;e.style.transform="translateY("+n+"%)";var r=1*t;e.style.transformOrigin="bottom",e.style.transform=" scale("+r+")",e.style.opacity=r}))}();y("2021/9/1 00:00:00","#bnSpecial")||a(window.addEventListener("load",Z),Z),function(){var e=document.getElementById("decorBnSpecial"),t=document.getElementById("BnSpecialTitle");window.addEventListener("scroll",(function(){var n=M(e,0,.6),r=100+-100*n;e.style.transform="translateY("+r+"%)",t.style.transform="translateY("+r+"%)";var o=1*n;e.style.transformOrigin="bottom",e.style.transform=" scale("+o+")",e.style.opacity=o,t.style.transformOrigin="bottom"}))}();function Z(){return new S.a("#sliderSpecial",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,lazy:{loadPrevNext:!0},loop:!0,slidesPerView:3,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}document.body.classList.add("js-loading"),(new o.a).init()}]);