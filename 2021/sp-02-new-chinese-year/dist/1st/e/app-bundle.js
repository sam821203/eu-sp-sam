!function(e){function t(t){for(var r,a,l=t[0],d=t[1],c=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==i[d]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=d;o.push([5,1]),n()}([,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},function(e,t,n){"use strict";n.r(t);n(2);var r=n(1),i=n.n(r);n(3),n(4);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});function o(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function a(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function l(e){return document.body.clientWidth>=e}function d(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function c(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function s(e,t,n,r){var i=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:l(e)?n:r;return r||(r=n),i}function u(e){return(new Date).getMonth()===Number(e)-1}function p(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function m(e,t,n,r){var i=[],o=typeof e;return"undefined"===o?t&&i.push(t):"string"===o?(r&&i.push(t),i.push(e)):Array.isArray(e)?(r&&i.push(t),e.forEach((function(e){i.push(e)}))):n&&console.error(n),i}!function(){if(!d())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!a&&("string"==typeof a()?parseInt(a(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function i(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",i),window.addEventListener("resize",i),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var o,a,l,d=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?r.style.opacity=1:d=!0}o=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),o.insertBefore(a,o.firstChild),c()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))}();function y(e,t,n){var r=new Date(e),i=new Date(e).getTime(),o=[],a=0;for(n=n||1;a<t;){var l=r.setTime(i+parseInt(a*n*24*60*60*1e3));o.push(new Date(l)),a++}return o}function f(e,t,n,r,i){if(!e)return!1;var o=!1,a=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var l=r[1];var d=r[2]||!1;o=!0}var c,s,u,p,m,y=(p=1,s=(s=n)||1e3,c=(c=function(){o&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),i=(t=t||!1,r-n),o=Math.floor(i/10),a=Math.floor(i/1e3),l=Math.floor(a/60),d=Math.floor(l/60),c=Math.floor(d/24);return d%=24,l%=60,a%=60,o%=60,t||(d+=24*c),i<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(i)?console.error("countDownTime is NaN，找不到目標時間"):{day:c<10?"0"+c:c.toString(),dayTens:parseInt(c%100/10).toString(),dayUnits:parseInt(c%10).toString(),hour:d<10?"0"+d:d.toString(),hourTens:parseInt(d%100/10).toString(),hourUnits:parseInt(d%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:a<10?"0"+a:a.toString(),secTens:parseInt(a%100/10).toString(),secUnits:parseInt(a%10).toString(),micro:o<10?"0"+o:o.toString(),microTens:parseInt(o%100/10).toString(),microUnits:parseInt(o%10).toString()}}(e[a],d),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[a]).getTime()-n<=0){if("function"==typeof t)t(a);else if(Array.isArray(t))for(var r=t.length,i=0;r>0;)t[i](a),i++,r--;a++}}(),a>e.length-1&&(i&&i(),clearInterval(y))})||void 0,m=(new Date).getTime(),function e(t){var n=setTimeout((function(){var t=(new Date).getTime()-(m+p*s);"function"==typeof c?c():void 0!==c&&console.error("callback不是函數"),p++,e(s-t)}),t);return u=n}(s),u)}!function(){if(!dailyData)return!1;f(y("2021/01/19 10:00:00",16),[v,h],100,["countDownNumberObject",w,!0])}();function v(e){if(!dailyData||e>=16)return!1;var t=document.querySelector("#dailyChange a");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",i=n[1]?n[1]:"webLink",o=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",i="webLink",o="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var d="https://www.etmall.com.tw/i/"+e[r],c="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else d=e[i]?e[i]:"javascript:void(0)",c=e[o]?e[o]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=s(960,u,d,c),e.hasOwnProperty(l)&&(t.title=e[l])}(dailyData[e],t)}function h(e){if(!dailyData||e>=16)return!1;var t=document.querySelector("#dailyChange a img");t.src="daily-item-"+(e+1)+".png",t.alt="最牛品牌"}function w(){var e=document.getElementById("dailyHourTens"),t=document.getElementById("dailyHourUnits"),n=document.getElementById("dailyMinTens"),r=document.getElementById("dailyMinUnits"),i=document.getElementById("dailySecTens"),o=document.getElementById("dailySecUnits");e.innerHTML=window.countDownNumberObject.hourTens,t.innerHTML=window.countDownNumberObject.hourUnits,n.innerHTML=window.countDownNumberObject.minTens,r.innerHTML=window.countDownNumberObject.minUnits,i.innerHTML=window.countDownNumberObject.secTens,o.innerHTML=window.countDownNumberObject.secUnits}var g=n(0),b=n.n(g);function L(e,t,n){n=n||"active";e.forEach((function(e){e.classList.remove(n)})),e[t].classList.add(n)}function S(e){if(void 0===e)return console.error("沒有資料來源")}function E(e){return e?(p(e,"客製化設定請用物件表示"),e):{}}function T(e,t,n,r){r=void 0===r||r;var i,o,a=E(t);if(r&&S(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):i={productNumber:l}}else{p(e,"資料格式不正確");var d=a.productNumberKey||"productNumber";if("string"==typeof e[d]||"number"==typeof e[d]){l=Number(e[d]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):i=e}else if(e[d])console.log(e),console.error("銷編格式錯誤");else{var c=a.nameKey||"name",s=a.textKey||"text",u=a.priceKey||"price";e[c]&&(e[s]||e[u])?i=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(o=n,Array.isArray(o)||p(o)){var m=[];return n.forEach((function(e){"function"==typeof e?m.push(n(i,a)):console.error("callback並非函式")})),m}if("function"==typeof n)return n(i,a);console.error("callback並非函式")}function A(e,t){return T(e,t,C,!1)}function C(e,t){var n,r,i,o,a=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",d=t.mobileLinkKey||"mobileLink",c=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[d]?e[d]:n,i=e[c]?e[c]:r;else if(e[a]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,i="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return o=e[u]||"",[s(960,i,n,r),o]}function N(e,t){return T(e,t,k,!1)}function k(e,t){var n,r=t.productNumberKey||"productNumber",i=t.imgSrcKey||"imgSrc",o=t.altKey||"name";if(e[i])n=e[i];else if(e[r]){var a=t.imgSizeBreakpoint||768,d=t.imgSizeWebSize||"XL",c=t.imgSizeMobileSize||"L",s="-1_"+(l(a)?d:c)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+s}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[o]?e[o]:""]}function P(e,t){return T(e,t,M,!1)}function M(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),i=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),i.setAttribute("tag","GOOD_SALEPRC"),i.setAttribute("goodid",e[n]),[r,i]}function _(e,t){var n,r=E(t),i=r.namekey||"name",o=r.pricekey||"price",a=r.textkey||"text";if(n=e[i]||"",e[a])var l=!0;return[n,l?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[o]))?e[o]||"":Number(e[o]).toLocaleString()||"":e[o]||""]}function x(e,t){var n,r,i=(t=t||{}).namekey||"name",o=t.pricekey||"price",a=t.textkey||"text",l=document.createElement("span"),d=document.createElement("span"),c=!1,s=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===s||"false"===s||"none"===s)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,p=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===s?(e[i]?(l.innerHTML=_(e,t)[0],n=l):n=P(e,t)[0],e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=_(e,t)[1],r=d):(d.appendChild(P(e,t)[1]),r=d)):"all"===s?(n=P(e,t)[0],d.appendChild(P(e,t)[1]),r=d):!1===s||"false"===s||"none"===s?(u?n=P(e,t)[0]:e[i]?(l.innerHTML=_(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),p?(d.appendChild(P(e,t)[1]),r=d):(e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=_(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源")),u||p||(e[i]?(l.innerHTML=_(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=_(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,c]}function I(e,t){S(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad;if(void 0===t.isSlider||t.isSlider){var i=t.sliderClass,o=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,a=m(i,"swiper-slide","sliderClass格式不正確",!0);if(o){var l=t.sliderImgLazyLoadClass,d=t.sliderLazyLoadIndicatorClass,c=m(l,null,"sliderImgLazyLoadClass格式不正確",!0),s=m(d,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){c.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){s.push(e)}))}else if(r){var u=t.imgLazyLoadClass,p=t.lazyLoadIndicatorSrc||"1x1_low.png",y=m(u,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var f=document.createElement(n),v=document.createElement("img");if(o||r){var h=document.createElement("div");v.dataset.src=N(e,t)[0],v.alt=""}else v.src=N(e,t)[0],v.alt=N(e,t)[1];o?(c.forEach((function(e){v.classList.add(e)})),s.forEach((function(e){h.classList.add(e)}))):r&&(y.forEach((function(e){v.classList.add(e)})),v.src=p),a.forEach((function(e){f.classList.add(e)}));var w,g,b=document.createElement("a");b.href=A(e,t)[0],b.title=A(e,t)[1],w=x(e,t)[0],g=x(e,t)[1];var L=x(e,t)[2],E=document.createElement("div"),T=document.createElement("div"),C=document.createElement("div"),k=document.createElement("div"),P=document.createElement("div"),M=document.createElement("div");if(E.classList.add("product"),E.classList.add("product--dynamic"),T.classList.add("product__block"),C.classList.add("product__img"),k.classList.add("product__text"),P.classList.add("product__name"),M.classList.add("product__price"),C.appendChild(v),o&&C.appendChild(h),P.appendChild(w),L)M.appendChild(g);else{var _=document.createElement("span");_.innerHTML="$",M.appendChild(_),M.appendChild(g)}if(k.appendChild(P),k.appendChild(M),T.appendChild(C),T.appendChild(k),b.appendChild(T),E.appendChild(b),f.appendChild(E),r)return f;return v.addEventListener("error",(function(){f.style.display="none"})),f}f(y("2021/1/19 10:00",16),[D],100),function(e){var t=Array.apply(null,document.querySelectorAll("#dailyTabHead .swiper-slide")),n=Array.apply(null,document.querySelectorAll("#dailyTabContent .content__box"));if(t.length!==n.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!dataDailyTab)return!1;Array.apply(null,document.querySelectorAll("#dailyTabContent .swiper-wrapper")).forEach((function(e,t){dataDailyTab[t].forEach((function(t){var n=I(t),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");i.innerHTML="現正熱賣",i.classList.add("promo__banner"),i.classList.add("promo__banner--now"),o.innerHTML="敬請期待",o.classList.add("promo__banner"),o.classList.add("promo__banner--wait"),r.appendChild(i),r.appendChild(o),r.classList.add("banner__wrap"),n.appendChild(r),e.appendChild(n)}))}))})(),t.forEach((function(e,r){e.addEventListener("click",(function(){L(t,r),L(n,r),B(r)}))})),B(),Array.apply(null,document.querySelectorAll("#dailyTabContent .content__box .product--dynamic")).forEach((function(e){e.style.filter="grayscale(100%)",e.style.pointerEvents="none"}))}();function D(e){var t=Array.apply(null,document.querySelectorAll("#dailyTabHead .swiper-slide"));if(e>=15)return!1;var n=Array.apply(null,document.querySelectorAll("#dailyTabContent .content__box"));if(t.forEach((function(e,t){e.classList.remove("daily-active"),e.classList.remove("active")})),n.forEach((function(e){e.classList.remove("active")})),e<1)t[0].classList.add("daily-active"),n[0].classList.add("active");else if(5==t.length){var r=e-1;t[e-(n.length-5)].classList.add("daily-active"),n[r].classList.add("activity__time__out"),n[e].classList.add("active"),console.log(e)}else t[1].classList.add("daily-active"),n[e].classList.add("active");!function(e){var t=e||0,n=new b.a("#dailyTabHead",{slidesPerView:5,speed:600,observer:!0});t>0&&t<=10&&n.removeSlide(0)}(e),B(e),Array.apply(null,n[e].querySelectorAll(".banner__wrap")).forEach((function(e){e.classList.add("active")})),Array.apply(null,n[e].querySelectorAll(".product--dynamic")).forEach((function(e){e.style.filter="grayscale(0)",e.style.pointerEvents="auto"}))}function B(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider--daily"));new b.a(t[e],{breakpoints:{960:{slidesPerView:2.1}},lazy:{loadPrevNext:!0},slidesPerView:1.2,spaceBetween:"1%",speed:600})}var O;O=document.querySelector("#sliderDynamic .swiper-wrapper"),dataDynamic.forEach((function(e){var t=I(e);O.appendChild(t)})),o(window.addEventListener("load",q),q);function q(){new b.a("#sliderDynamic",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:c("#sliderDynamic",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic .swiper-slide").length),lazy:{loadPrevNext:!0},navigation:{nextEl:"#sliderDynamicNext_1",prevEl:"#sliderDynamicPrev_1"},pagination:{el:"#sliderDynamicPager",type:"bullets",clickable:!0},slidesPerView:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}o(window.addEventListener("load",z),z);function z(){new b.a("#sliderSpecial",{autoplay:d()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:c("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},speed:600})}!function(){var e=document.querySelector("#sliderDynamic2 .swiper-wrapper");dataDynamic2.forEach((function(t){var n=I(t);e.appendChild(n)})),o(window.addEventListener("load",H),H)}();function H(){new b.a("#sliderDynamic2",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:c("#sliderDynamic2",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic2 .swiper-slide").length),lazy:{loadPrevNext:!0},navigation:{nextEl:"#sliderDynamic2Next",prevEl:"#sliderDynamic2Prev"},slidesPerView:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){var e=document.querySelector("#sliderDynamic3 .swiper-wrapper");dataDynamic3.forEach((function(t){var n=I(t);e.appendChild(n)})),o(window.addEventListener("load",j),j)}();function j(){new b.a("#sliderDynamic3",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:c("#sliderDynamic3",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic3 .swiper-slide").length),lazy:{loadPrevNext:!0},navigation:{nextEl:"#sliderDynamic3Next",prevEl:"#sliderDynamic3Prev"},slidesPerView:3,slidesPerGroup:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}o(window.addEventListener("load",V),V);function V(){new b.a("#sliderCollectPoint-block1",{autoplay:d()?2e3:{delay:2e3,disableOnInteraction:!1},lazy:{loadPrevNext:!0},calculateHeight:!0,grabCursor:!0,init:c("#sliderCollectPoint-block1"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderCollectPoint-block1 .swiper-slide").length),loop:!0,slidesPerView:2,pagination:d()?"#sliderCollectPointPager-block1":{el:"#sliderCollectPointPager-block1",type:"bullets",clickable:!0},speed:600}),new b.a("#sliderCollectPoint-block2",{autoplay:d()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:c("#sliderCollectPoint-block2"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderCollectPoint-block2 .swiper-slide").length),loop:!0,slidesPerView:3,pagination:d()?"#sliderCollectPointPager-block2":{el:"#sliderCollectPointPager-block2",type:"bullets",clickable:!0},speed:600})}o(window.addEventListener("load",U),U);function U(){var e=new b.a("#sliderSpecialTop",{grabCursor:!0,init:c("#doubleSlider"),preventClicks:!1,allowTouchMove:!1,on:{click:function(){t.slideToLoop(3*this.clickedIndex),document.querySelectorAll("#sliderSpecialTop .swiper-slide").forEach((function(e){e.classList.remove("focus__active")})),e.clickedSlide.classList.add("focus__active")}},slidesPerView:3,watchSlidesVisibility:!0}),t=new b.a("#doubleSlider",{grabCursor:!0,init:c("#doubleSlider"),autoplay:{delay:2e3,disableOnInteraction:!1},on:{slideChange:function(){if(e.slideToLoop(n(this.realIndex,3)[1],600),0===n(this.realIndex,3)[0]){var t=document.querySelectorAll("#sliderSpecialTop .swiper-slide")[n(this.realIndex,3)[1]];document.querySelectorAll("#sliderSpecialTop .swiper-slide").forEach((function(e){e.classList.remove("focus__active")}));var r=document.querySelectorAll("#sliderSpecialTop .swiper-slide").length;(document.querySelectorAll("#doubleSlider .swiper-slide").length-6)/3==r?t.classList.add("focus__active"):console.error("上下層數量不符合")}}},slidesPerView:3,spaceBetween:"3%",loop:!0,lazy:{loadPrevNext:!0},speed:600});function n(e,t){return[e%t,Math.floor(e/t)]}}!function(){var e=document.getElementById("bnBankPromoWrap"),t=Array.apply(null,document.querySelectorAll("#bnBank .month--prev")),n=Array.apply(null,document.querySelectorAll("#bnBank .month--next"));u(2)?(e.style.backgroundImage='url("bg-bank-n.png")',t.forEach((function(e){e.parentNode.removeChild(e)}))):u(1)?(e.style.backgroundImage='url("bg-bank-p.png")',n.forEach((function(e){e.parentNode.removeChild(e)}))):console.error("銀行月份不再兩者範圍內");o(window.addEventListener("load",K),K)}();function K(){new b.a("#sliderBank",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:c("#sliderBank",2),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBank .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderBnBankNext",prevEl:"#sliderBnBankPrev"},slidesPerView:3,centeredSlides:!0,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}(new i.a).init()}]);