!function(e){function t(t){for(var r,a,l=t[0],d=t[1],s=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==o[d]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=d;i.push([7,1]),n()}([,,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},,function(e,t,n){"use strict";n.r(t);n(3);var r=n(1),o=n.n(r);n(4),n(5);function i(e,t,n){if(document.body.clientWidth>=e){if("function"==typeof t)return t()}else if("function"==typeof n)return n()}function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function l(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function d(e){return document.body.clientWidth>=e}function s(e,t,n,r){var o=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:d(e)?n:r;return r||(r=n),o}function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function u(e){return new Date>e}function p(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function m(e,t,n,r){var o=[],i=typeof e;return"undefined"===i?t&&o.push(t):"string"===i?(r&&o.push(t),o.push(e)):Array.isArray(e)?(r&&o.push(t),e.forEach((function(e){o.push(e)}))):n&&console.error(n),o}function f(e){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):e()}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!l&&("string"==typeof l()?parseInt(l(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);function y(e,t,n){t=t||0,n=n||.5;if(function(e,t,n){t=t||0,n=n||t||0;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=r+t,i=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return o&&i+n>=0}(e=e)){var r=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/n;return r<0?r=0:r>1&&(r=1),r}}function w(e,t){var n={top:e||0,left:t||0,behavior:"smooth"},r="scrollBehavior"in document.documentElement.style;if(window.jQuery)$("html,body").stop().animate({scrollTop:n.top,scrollLeft:n.left},500);else if(r)window.scrollTo(n);else{var o=function(){window.scrollX==n.left&&window.scrollY==n.top||setTimeout((function(){window.scrollTo(window.scrollX-100,window.scrollY-100),o()}),0)};o()}}(b=document.createElement("button")).id="fixedGoTop",b.classList.add("go-top"),b.classList.add("js--go-top"),b.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>',document.body.appendChild(b),window.addEventListener("load",S),window.addEventListener("load",T),window.addEventListener("resize",T),Array.apply(null,document.querySelectorAll('a[href^="#"]')).forEach((function(e){e.addEventListener("click",(function(e){var t,n=document.querySelector(this.getAttribute("href"));if(t=n||document.querySelector("[data-title="+this.getAttribute("href").split("#")[1]+"]")){e.preventDefault();var r=document.getElementById("progressBar")?document.getElementById("progressBar").clientHeight+4:0,o=document.getElementById("navSub")?document.getElementById("navSub").clientHeight:0,i=o>0?o:r;w(t.offsetTop-i)}}))})),v=document.body,g=document.createElement("div"),h=document.createElement("div"),g.id="progressBarWrap",g.style.opacity=0,g.style.position="fixed",g.style.zIndex=200,g.style.top=0,g.style.backgroundColor="rgba(0, 0, 0, 0.3)",g.style.width="100%",g.style.height="0.5vh",h.style.backgroundColor="#cc1e05",h.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",h.style.height="100%",h.id="progressBar",g.appendChild(h),v.insertBefore(g,v.firstChild),c(),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e){var n=e.parentNode;"progressBarWrap"===n.id?++t>1&&n.parentNode.removeChild(n):n.parentNode.removeChild(n)}))})),window.addEventListener("load",(function(){f(A)})),window.addEventListener("scroll",(function(){f(A)}));var v,g,h,b,L=!1;function S(){Array.apply(null,document.querySelectorAll(".js--go-top")).forEach((function(e){e.addEventListener("click",E)}))}function E(e){e.preventDefault(),w(0)}function T(){var e=document.body.clientWidth,t=document.getElementById("navGoTop"),n=document.getElementById("fixedGoTop");t&&e>=1260?n.style.display="none":window.addEventListener("scroll",C)}function C(){var e=document.getElementById("fixedGoTop");window.scrollY>=300?e.classList.add("is-visible"):e.classList.remove("is-visible")}function A(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),L?r.style.opacity=1:L=!0}var I=n(0),N=n.n(I);new N.a("#heroTitle",{autoplay:{delay:2e3,disableOnInteraction:!1},direction:"vertical",effect:"flip",flipEffect:{slideShadows:!1,limitRotation:!0},loop:!0,slidesPerView:1,speed:600});var B=n(2),P=n.n(B);function M(){var e=document.getElementById("bgDecoration"),t=Array.apply(null,e.querySelectorAll(".decoration__item img")),n=t[0],r=t[1];t.forEach((function(e,t){var o=(window.innerWidth-e.clientWidth)/2;e.style.left=120+o+"px",n.style.top="-10px",r.style.top="230px"}));new P.a(e)}requestAnimationFrame((function(){window.addEventListener("load",(function(){i(1260,M,null)})),window.addEventListener("resize",(function(){i(1260,M,null)}))}));function O(e){return Math.floor(Math.random()*e)}function k(e,t){t=t||"siblingRandomCheckNowIndex";for(var n=O(e);n===window[t];)n=O(e);return window[t]=n,n}setInterval((function(){var e,t;e=Array.apply(null,document.querySelectorAll(".promo__block .promo__item")),t=k(e.length),e.forEach((function(e){e.classList.remove("animate")})),e[t].classList.add("animate")}),2500),a(window.addEventListener("load",x),x);function x(){document.querySelectorAll(".container--promo-event").forEach((function(e){var t=e.querySelectorAll(".swiper-slide").length;return new N.a(e,{autoplay:{delay:1800+Math.floor(500*Math.random()),disableOnInteraction:!1},grabCursor:!0,init:t>1,loop:!0,slidesPerView:1,speed:500+Math.floor(200*Math.random())})}))}var D,_;new N.a("#promoSliderItem",{autoplay:{delay:2200,disableOnInteraction:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#promoSliderItem .swiper-slide").length),centeredSlides:!0,lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:3,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0}),D=document.getElementById("decorPromoSlider"),_=document.getElementById("titlePromoSlider"),window.addEventListener("scroll",(function(){var e=y(D,0,.4),t=100+-100*e;D.style.transform="translateY("+t+"%)",_.style.transform="translateY("+t+"%)";var n=1*e;D.style.transformOrigin="bottom",D.style.transform=" scale("+n+")",D.style.opacity=n}));function z(e,t,n){var r=new Date(e),o=new Date(e).getTime(),i=[],a=0;for(n=n||1;a<t;){var l=r.setTime(o+parseInt(a*n*24*60*60*1e3));i.push(new Date(l)),a++}return i}function H(e,t,n,r,o){if(!e)return!1;var i=!1,a=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var l=r[1];var d=r[2]||!1;i=!0}var s,c,u,p,m,f=(p=1,c=(c=n)||1e3,s=(s=function(){i&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),o=(t=t||!1,r-n),i=Math.floor(o/10),a=Math.floor(o/1e3),l=Math.floor(a/60),d=Math.floor(l/60),s=Math.floor(d/24);return d%=24,l%=60,a%=60,i%=100,t||(d+=24*s),o<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(o)?console.error("countDownTime is NaN，找不到目標時間"):{day:s<10?"0"+s:s.toString(),dayTens:parseInt(s%100/10).toString(),dayUnits:parseInt(s%10).toString(),hour:d<10?"0"+d:d.toString(),hourTens:parseInt(d%100/10).toString(),hourUnits:parseInt(d%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:a<10?"0"+a:a.toString(),secTens:parseInt(a%100/10).toString(),secUnits:parseInt(a%10).toString(),micro:i<10?"0"+i:i.toString(),microTens:parseInt(i%100/10).toString(),microUnits:parseInt(i%10).toString()}}(e[a],d),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[a]).getTime()-n<=0){if("function"==typeof t)t(a);else if(Array.isArray(t))for(var r=t.length,o=0;r>0;)t[o](a),o++,r--;a++}}(),a>e.length-1&&(o&&o(),clearInterval(f))})||void 0,m=(new Date).getTime(),function e(t){var n=setTimeout((function(){var t=(new Date).getTime()-(m+p*c);"function"==typeof s?s():void 0!==s&&console.error("callback不是函數"),p++,e(c-t)}),t);return u=n}(c),u)}var j={oneDay:z("2022/02/23 10:00",20),oneDayNine:z("2022/02/23 09:00",20),twoDays:z("2022/02/23 10:00",20,2)};function q(e){if(void 0===e)return console.error("沒有資料來源")}function U(e){return e?(p(e,"客製化設定請用物件表示"),e):{}}function V(e,t,n,r){r=void 0===r||r;var o,i,a=U(t);if(r&&q(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o={productNumber:l}}else{p(e,"資料格式不正確");var d=a.productNumberKey||"productNumber";if("string"==typeof e[d]||"number"==typeof e[d]){l=Number(e[d]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o=e}else if(e[d])console.log(e),console.error("銷編格式錯誤");else{var s=a.nameKey||"name",c=a.textKey||"text",u=a.priceKey||"price";e[s]&&(e[c]||e[u])?o=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(i=n,Array.isArray(i)||p(i)){var m=[];return n.forEach((function(e){"function"==typeof e?m.push(n(o,a)):console.error("callback並非函式")})),m}if("function"==typeof n)return n(o,a);console.error("callback並非函式")}function R(e,t){return V(e,t,G,!1)}function G(e,t){var n,r,o,i,a=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",d=t.mobileLinkKey||"mobileLink",c=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[d]?e[d]:n,o=e[c]?e[c]:r;else if(e[a]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,o="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return i=e[u]||"",[s(960,o,n,r),i]}function K(e,t){return V(e,t,W,!1)}function W(e,t){var n,r=t.productNumberKey||"productNumber",o=t.imgSrcKey||"imgSrc",i=t.altKey||"name";if(e[o])n=e[o];else if(e[r]){var a=t.imgSizeBreakpoint||768,l=t.imgSizeWebSize||"XL",s=t.imgSizeMobileSize||"L",c="-1_"+(d(a)?l:s)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+c}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[i]?e[i]:""]}function Y(e,t){return V(e,t,F,!1)}function F(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),o=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),o.setAttribute("tag","GOOD_SALEPRC"),o.setAttribute("goodid",e[n]),[r,o]}function X(e,t){var n,r=U(t),o=r.namekey||"name",i=r.pricekey||"price",a=r.textkey||"text";if(n=e[o]||"",e[a])var l=!0;return[n,l?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[i]))?e[i]||"":Number(e[i]).toLocaleString()||"":e[i]||""]}function J(e,t){var n,r,o=(t=t||{}).namekey||"name",i=t.pricekey||"price",a=t.textkey||"text",l=document.createElement("span"),d=document.createElement("span"),s=!1,c=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===c||"false"===c||"none"===c)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,p=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===c?(e[o]?(l.innerHTML=X(e,t)[0],n=l):n=Y(e,t)[0],e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=X(e,t)[1],r=d):(d.appendChild(Y(e,t)[1]),r=d)):"all"===c?(n=Y(e,t)[0],d.appendChild(Y(e,t)[1]),r=d):!1===c||"false"===c||"none"===c?(u?n=Y(e,t)[0]:e[o]?(l.innerHTML=X(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),p?(d.appendChild(Y(e,t)[1]),r=d):(e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=X(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源")),u||p||(e[o]?(l.innerHTML=X(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[a]&&(s=!0),e[a]||e[i]?(d.innerHTML=X(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,s]}function Q(e,t){q(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad,o=void 0===t.isSlider||t.isSlider;if(o){var i=t.sliderClass,a=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=m(i,"swiper-slide","sliderClass格式不正確",!0);if(a){var d=t.sliderImgLazyLoadClass,s=t.sliderLazyLoadIndicatorClass,c=m(d,null,"sliderImgLazyLoadClass格式不正確",!0),u=m(s,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){c.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){u.push(e)}))}else if(r){var p=t.imgLazyLoadClass,f=t.lazyLoadIndicatorSrc||"1x1_low.png",y=m(p,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var w=document.createElement("img");if(a||r){var v=document.createElement("div");w.dataset.src=K(e,t)[0],w.alt=""}else w.src=K(e,t)[0],w.alt=K(e,t)[1];a?(c.forEach((function(e){w.classList.add(e)})),u.forEach((function(e){v.classList.add(e)}))):r&&(y.forEach((function(e){w.classList.add(e)})),w.src=f);var g=document.createElement(n),h=m(t.outerClass),b=o?l:h;Array.isArray(b)&&b.forEach((function(e){g.classList.add(e)}));var L,S,E=document.createElement("a");E.href=R(e,t)[0],E.title=R(e,t)[1],L=J(e,t)[0],S=J(e,t)[1];var T=J(e,t)[2],C=document.createElement("div"),A=document.createElement("div"),I=document.createElement("div"),N=document.createElement("div"),B=document.createElement("div"),P=document.createElement("div");if(C.classList.add("product"),C.classList.add("product--dynamic"),A.classList.add("product__block"),I.classList.add("product__img"),N.classList.add("product__text"),B.classList.add("product__name"),P.classList.add("product__price"),I.appendChild(w),a&&I.appendChild(v),B.appendChild(L),T)P.appendChild(S);else{var M=document.createElement("span");M.innerHTML="$",P.appendChild(M),P.appendChild(S)}if(N.appendChild(B),N.appendChild(P),A.appendChild(I),A.appendChild(N),E.appendChild(A),C.appendChild(E),g.appendChild(C),r)return g;return w.addEventListener("error",(function(){g.style.display="none"})),g}(function(){var e=document.querySelector("#dailySliderBlock .swiper-wrapper");dataDailySlider.forEach((function(t,n){var r=document.createElement("li");r.classList.add("swiper-slide"),t.forEach((function(e){var t=Q(e,{isSliderLazyLoad:!1,isSlider:!1,outerTag:"div",outerClass:"dynamic__item"});r.appendChild(t)})),e.appendChild(r)}));dataDailySlider.length;t=new Date("2022/02/23 10:00"),n=new Date,r=parseInt(Math.abs(t-n)/1e3/60/60/24),new N.a("#dailySliderBlock",{initialSlide:r,allowTouchMove:!1,speed:600});var t,n,r})(),function(){if(!dataDailySlider)return!1;H(j.oneDay,[],100,["countDownNumberObject",Z,!0])}();new Date("2021/12/23");function Z(){var e=document.getElementById("dailyHourTens"),t=document.getElementById("dailyHourUnits"),n=document.getElementById("dailyMinTens"),r=document.getElementById("dailyMinUnits"),o=document.getElementById("dailySecTens"),i=document.getElementById("dailySecUnits");e.innerHTML=window.countDownNumberObject.hourTens,t.innerHTML=window.countDownNumberObject.hourUnits,n.innerHTML=window.countDownNumberObject.minTens,r.innerHTML=window.countDownNumberObject.minUnits,o.innerHTML=window.countDownNumberObject.secTens,i.innerHTML=window.countDownNumberObject.secUnits}var ee;ee=document.querySelector("#dynamicSliderBlock .swiper-wrapper"),dataDynamicSlider.forEach((function(e){var t=Q(e,{isSliderLazyLoad:!1});ee.appendChild(t)})),new N.a("#dynamicSliderBlock",{autoplay:{delay:2e3,disableOnInteraction:!1},slidesPerView:3,slidesPerGroup:3,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600}),function(){var e=document.getElementById("titleDynamicSlider");window.addEventListener("scroll",(function(){var t=y(e,0,.2),n=50+-50*t;e.style.transform="translateY("+n+"%)";var r=1*t;r<.2&&(r=.2),e.style.transformOrigin="bottom"}))}();new N.a("#promoSlider2Item",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,effect:"flip",flipEffect:{slideShadows:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#promoSlider2Item .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:1,spaceBetween:"1%",speed:800,watchSlidesProgress:!0,watchSlidesVisibility:!0}),function(){var e=document.getElementById("decorPromoSlider2");window.addEventListener("scroll",(function(){var t=y(e,0,.6),n=100+-100*t;e.style.transform="translateY("+n+"%)";var r=1*t;e.style.transformOrigin="bottom",e.style.transform=" scale("+r+")",e.style.opacity=r}))}();function te(e,t,n,r){e=e||{},t=t||!1;if(Array.isArray(n)){var o=n[2]?n[2]:"name",i=n[3]?n[3]:"price",a=n[4]?n[4]:"text",l=n[5]?n[5]:"swiper-slide";if(t)var c=n[6]?n[6]:"swiper-lazy",u=n[7]?n[7][0]:"swiper-lazy-preloader",p=n[7]?n[7][1]:"swiper-lazy-preloader-black"}else{o="name",i="price",a="text",l="swiper-slide";if(t)c="swiper-lazy",u="swiper-lazy-preloader",p="swiper-lazy-preloader-black"}r=r||[,,,,"name"];if(e.hasOwnProperty(a)&&!e.hasOwnProperty(i))var m=!0;var f=document.createElement("li"),y=document.createElement("a"),w=document.createElement("img"),v=document.createElement("span"),g=document.createElement("span");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",i=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",i="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var d="https://www.etmall.com.tw/i/"+e[r],c="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else d=e[o]?e[o]:"javascript:void(0)",c=e[i]?e[i]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=s(960,u,d,c),e.hasOwnProperty(l)&&(t.title=e[l])}(e,y,r),function(e,t,n,r,o){if(e=e||{},t=t||{},n=n||!1,Array.isArray(o)){var i=o[0]?o[0]:"productNumber",a=o[1]?o[1]:"imgSrc";if(!n)var l=o[2]?o[2]:"imgAlt"}else{i="productNumber",a="imgSrc";if(!n)l="name"}if(Array.isArray(r))var s=r[0]?r[0]:768,c=r[1]?r[1]:"XL",u=r[2]?r[2]:"L";else s=768,c="XL",u="L";if(e.hasOwnProperty(i)&&"number"==typeof e[i]&&!e.hasOwnProperty(a))var p="-1_"+(d(s)?c:u)+".jpg",m=e[i],f="https://media.etmall.com.tw/NXimg/00"+m.toString().slice(0,4)+"/"+m+"/"+m+p;else if(e.hasOwnProperty(a))f=e[a];else console.error("未指定銷售編號或是圖片來源");n?t.dataset.src=f:(t.src=f,e.hasOwnProperty(l)&&(t.alt=e[l]))}(e,w,t),t&&w.classList.add(c),v.innerHTML=e[o],g.innerHTML=m?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[i]))?e[i]:Number(e[i]).toLocaleString():e[i],f.classList.add(l);var h=document.createElement("div"),b=document.createElement("div"),L=document.createElement("div"),S=document.createElement("div");if(h.classList.add("product"),h.classList.add("product--dynamic"),b.classList.add("product__img"),L.classList.add("product__name"),S.classList.add("product__price"),b.appendChild(w),L.appendChild(v),S.innerHTML=m?"<span></span>":"<span>$</span>",S.appendChild(g),t){var E=document.createElement("div");E.classList.add(u),E.classList.add(p),b.appendChild(E)}if(y.appendChild(b),y.appendChild(L),y.appendChild(S),h.appendChild(y),f.appendChild(h),t)return f;return w.addEventListener("error",(function(){f.style.display="none"})),f}(function(){var e=document.getElementById("tabBox"),t=Array.apply(null,e.querySelectorAll(".tab__item--top")),n=document.getElementById("tabContentBlock"),r=Array.apply(null,n.querySelectorAll(".content__box"));if(t.length!==r.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTab1&&dataTab2&&dataTab3&&dataTab4&&dataTab5&&dataTab6))return!1;var e=[dataTab1,dataTab2,dataTab3,dataTab4,dataTab5,dataTab6];Array.apply(null,document.querySelectorAll("#tabContentBlock .swiper-wrapper")).forEach((function(t,n){e[n].forEach((function(e){var n=te(e);t.appendChild(n)}))}))})(),t.forEach((function(e,n){e.addEventListener("click",(function(){ne(t,n),ne(r,n),re(n)}))})),re()})(),function(){var e=document.getElementById("decorTabSection");window.addEventListener("scroll",(function(){var t=y(e,0,.5),n=1*t;e.style.opacity=n}))}();function ne(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function re(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider"));new N.a(t[e],{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,slidesPerView:3,slidesPerGroup:2,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}var oe;oe=document.querySelector("#dynamicSlider2Section .swiper-wrapper"),dataDynamicSliderSecond.forEach((function(e){var t=Q(e,{isSliderLazyLoad:!1});oe.appendChild(t)})),a(window.addEventListener("load",ie),ie),function(){var e=document.getElementById("decorDynamicSliderSecond");window.addEventListener("scroll",(function(){var t=y(e,0,.6),n=100+-100*t;e.style.transform="translateY("+n+"%)";var r=1*t;e.style.transformOrigin="bottom",e.style.opacity=r}))}();function ie(){return new N.a("#dynamicSlider2Section",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,slidesPerView:3,slidesPerGroup:3,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}(function(e,t){if("string"==typeof e)var n=new Date(e);else"object"==typeof e&&(n=e);if(!u(n))return(t=document.querySelector(t)).style.display="none",!0})("2021/9/1 10:00:00","#bnSlider")||a(window.addEventListener("load",ae),ae),function(){var e=document.getElementById("decorBnSlider");window.addEventListener("scroll",(function(){var t=y(e,0,.1),n=100+-100*t;e.style.transform="translateY("+n+"%)"}))}();function ae(){return new N.a("#sliderBn",{autoplay:{delay:3e3,disableOnInteraction:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:3,spaceBetween:"1%",speed:600})}(function(){var e=document.querySelector("#dynamicSlider3Section .swiper-wrapper");dataDynamicSliderThird.forEach((function(t){var n=Q(t,{isSliderLazyLoad:!1});e.appendChild(n)})),a(window.addEventListener("load",le),le)})(),function(){var e=document.getElementById("decorDynamicSliderLeft"),t=document.getElementById("decorDynamicSliderRight");window.addEventListener("scroll",(function(){var n=y(e,0,.6),r=1*n;e.style.transformOrigin="bottom",t.style.transformOrigin="bottom",e.style.transform=" scale("+r+")",t.style.transform=" scale("+r+")",e.style.opacity=r,t.style.opacity=r}))}();function le(){return new N.a("#dynamicSlider3Section",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,slidesPerView:3,slidesPerGroup:3,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}!function(){var e=document.getElementById("decorBnSectionSecond");window.addEventListener("scroll",(function(){var t=y(e,0,.6),n=1*t;e.style.transformOrigin="bottom",e.style.transform=" scale("+n+")",e.style.opacity=n}))}();document.body.classList.add("js-loading"),(new o.a).init(),document.addEventListener("scroll",(function(){window.scrollY>=900?document.body.classList.add("bg-fixed"):document.body.classList.remove("bg-fixed")}))}]);