!function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;o.push([5,1]),r()}([,,function(e,t,r){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var r=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,r-t.length)})},function(e,t,r){"use strict";r.r(t);r(2);var n=r(1),a=r.n(n);r(3),r(4);function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function i(e){return document.body.clientWidth>=e}function l(e,t,r,n){var a=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:i(e)?r:n;return n||(n=r),a}function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function d(e,t,r,n){var a=[],o=typeof e;return"undefined"===o?t&&a.push(t):"string"===o?(n&&a.push(t),a.push(e)):Array.isArray(e)?(n&&a.push(t),e.forEach((function(e){a.push(e)}))):r&&console.error(r),a}function u(e){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):e()}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);function m(e,t,r){t=t||0,r=r||.5;if(function(e,t,r){t=t||0,r=r||t||0;var n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=n+t,o=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return a&&o+r>=0}(e=e)){var n=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/r;return n<0?n=0:n>1&&(n=1),n}}function p(e,t){var r={top:e||0,left:t||0,behavior:"smooth"},n="scrollBehavior"in document.documentElement.style;if(window.jQuery)$("html,body").stop().animate({scrollTop:r.top,scrollLeft:r.left},500);else if(n)window.scrollTo(r);else{var a=function(){window.scrollX==r.left&&window.scrollY==r.top||setTimeout((function(){window.scrollTo(window.scrollX-100,window.scrollY-100),a()}),0)};a()}}(g=document.createElement("button")).id="fixedGoTop",g.classList.add("go-top"),g.classList.add("js--go-top"),g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>',document.body.appendChild(g),window.addEventListener("load",w),window.addEventListener("load",b),window.addEventListener("resize",b),Array.apply(null,document.querySelectorAll('a[href^="#"]')).forEach((function(e){e.addEventListener("click",(function(e){var t,r=document.querySelector(this.getAttribute("href"));if(t=r||document.querySelector("[data-title="+this.getAttribute("href").split("#")[1]+"]")){e.preventDefault();var n=document.getElementById("progressBar")?document.getElementById("progressBar").clientHeight+4:0,a=document.getElementById("navSub")?document.getElementById("navSub").clientHeight:0,o=a>0?a:n;p(t.offsetTop-o)}}))})),f=document.body,y=document.createElement("div"),v=document.createElement("div"),y.id="progressBarWrap",y.style.opacity=0,y.style.position="fixed",y.style.zIndex=200,y.style.top=0,y.style.backgroundColor="rgba(0, 0, 0, 0.3)",y.style.width="100%",y.style.height="0.5vh",v.style.backgroundColor="#cc1e05",v.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",v.style.height="100%",v.id="progressBar",y.appendChild(v),f.insertBefore(y,f.firstChild),c(),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))})),window.addEventListener("load",(function(){u(S)})),window.addEventListener("scroll",(function(){u(S)}));var f,y,v,g,h=!1;function w(){Array.apply(null,document.querySelectorAll(".js--go-top")).forEach((function(e){e.addEventListener("click",L)}))}function L(e){e.preventDefault(),p(0)}function b(){var e=document.body.clientWidth,t=document.getElementById("navGoTop"),r=document.getElementById("fixedGoTop");t&&e>=1260?r.style.display="none":window.addEventListener("scroll",E)}function E(){var e=document.getElementById("fixedGoTop");window.scrollY>=300?e.classList.add("is-visible"):e.classList.remove("is-visible")}function S(){var e,t,r,n=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,r=document.body.clientWidth,parseInt(e/t*r)+"px"),h?n.style.opacity=1:h=!0}var A=r(0),B=r.n(A);function I(e){return Math.floor(Math.random()*e)}function T(e,t){t=t||"siblingRandomCheckNowIndex";for(var r=I(e);r===window[t];)r=I(e);return window[t]=r,r}var C,N;setInterval((function(){var e,t;e=Array.apply(null,document.querySelectorAll(".promo__block .promo__item")),t=T(e.length),e.forEach((function(e){e.classList.remove("animate")})),e[t].classList.add("animate")}),1800),document.querySelectorAll(".container--promo-event").forEach((function(e){var t=e.querySelectorAll(".swiper-slide").length;return new B.a(e,{autoplay:{delay:1800+Math.floor(500*Math.random()),disableOnInteraction:!1},effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,init:t>1,loop:!0,slidesPerView:1,speed:500+Math.floor(200*Math.random())})})),Array.apply(null,document.querySelectorAll(".changeLink")).forEach((function(e){var t=l(960,"etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86","https://www.etmall.com.tw/member/taskActivity","https://m.etmall.com.tw/member/taskActivity");e.href=t})),C=document.getElementById("promoEventLeft"),N=document.getElementById("promoEventRight"),window.addEventListener("scroll",(function(){var e=m(C,0,.4),t=100+-100*e;C.style.transform="translateX("+t+"%)",N.style.transform="translateX(-"+t+"%)",1===e?(C.classList.add("active"),N.classList.add("active")):(C.classList.remove("active"),N.classList.remove("active"))}));function M(e){if(void 0===e)return console.error("沒有資料來源")}function k(e){return e?(s(e,"客製化設定請用物件表示"),e):{}}function P(e,t,r,n){n=void 0===n||n;var a,o,i=k(t);if(n&&M(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):a={productNumber:l}}else{s(e,"資料格式不正確");var c=i.productNumberKey||"productNumber";if("string"==typeof e[c]||"number"==typeof e[c]){l=Number(e[c]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):a=e}else if(e[c])console.log(e),console.error("銷編格式錯誤");else{var d=i.nameKey||"name",u=i.textKey||"text",m=i.priceKey||"price";e[d]&&(e[u]||e[m])?a=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(o=r,Array.isArray(o)||s(o)){var p=[];return r.forEach((function(e){"function"==typeof e?p.push(r(a,i)):console.error("callback並非函式")})),p}if("function"==typeof r)return r(a,i);console.error("callback並非函式")}function _(e,t){return P(e,t,x,!1)}function x(e,t){var r,n,a,o,i=t.productNumberKey||"productNumber",c=t.webLinkKey||"webLink",s=t.mobileLinkKey||"mobileLink",d=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[c])r=e[c],n=e[s]?e[s]:r,a=e[d]?e[d]:n;else if(e[i]){r="https://www.etmall.com.tw/i/"+e.productNumber,n="https://m.etmall.com.tw/Product/"+e.productNumber,a="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return o=e[u]||"",[l(960,a,r,n),o]}function O(e,t){return P(e,t,z,!1)}function z(e,t){var r,n=t.productNumberKey||"productNumber",a=t.imgSrcKey||"imgSrc",o=t.altKey||"name";if(e[a])r=e[a];else if(e[n]){var l=t.imgSizeBreakpoint||768,c=t.imgSizeWebSize||"XL",s=t.imgSizeMobileSize||"L",d="-1_"+(i(l)?c:s)+".jpg",u=e[n];r="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+d}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[r,e[o]?e[o]:""]}function q(e,t){return P(e,t,D,!1)}function D(e,t){var r=t.productNumberKey||"productNumber",n=document.createElement("custom"),a=document.createElement("custom");return n.setAttribute("tag","GOOD_NAME"),n.setAttribute("goodid",e[r]),a.setAttribute("tag","GOOD_SALEPRC"),a.setAttribute("goodid",e[r]),[n,a]}function H(e,t){var r,n=k(t),a=n.namekey||"name",o=n.pricekey||"price",i=n.textkey||"text";if(r=e[a]||"",e[i])var l=!0;return[r,l?e[i]:Number.prototype.toLocaleString?isNaN(Number(e[o]))?e[o]||"":Number(e[o]).toLocaleString()||"":e[o]||""]}function R(e,t){var r,n,a=(t=t||{}).namekey||"name",o=t.pricekey||"price",i=t.textkey||"text",l=document.createElement("span"),c=document.createElement("span"),s=!1,d=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===d||"false"===d||"none"===d)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,m=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===d?(e[a]?(l.innerHTML=H(e,t)[0],r=l):r=q(e,t)[0],e[i]&&(s=!0),e[i]||e[o]?(c.innerHTML=H(e,t)[1],n=c):(c.appendChild(q(e,t)[1]),n=c)):"all"===d?(r=q(e,t)[0],c.appendChild(q(e,t)[1]),n=c):!1===d||"false"===d||"none"===d?(u?r=q(e,t)[0]:e[a]?(l.innerHTML=H(e,t)[0],r=l):console.error("設定手動填name卻沒有找到來源"),m?(c.appendChild(q(e,t)[1]),n=c):(e[i]&&(s=!0),e[i]||e[o]?(c.innerHTML=H(e,t)[1],n=c):console.error("設定手動填text/price卻沒有找到來源")),u||m||(e[a]?(l.innerHTML=H(e,t)[0],r=l):console.error("設定手動填name卻沒有找到來源"),e[i]&&(s=!0),e[i]||e[o]?(c.innerHTML=H(e,t)[1],n=c):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[r,n,s]}function W(e,t){M(e);var r=(t=t||{}).outerTag||"li",n=void 0!==t.isLazyLoad&&t.isLazyLoad,a=void 0===t.isSlider||t.isSlider;if(a){var o=t.sliderClass,i=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=d(o,"swiper-slide","sliderClass格式不正確",!0);if(i){var c=t.sliderImgLazyLoadClass,s=t.sliderLazyLoadIndicatorClass,u=d(c,null,"sliderImgLazyLoadClass格式不正確",!0),m=d(s,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){u.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){m.push(e)}))}else if(n){var p=t.imgLazyLoadClass,f=t.lazyLoadIndicatorSrc||"1x1_low.png",y=d(p,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var v=document.createElement("img");if(i||n){var g=document.createElement("div");v.dataset.src=O(e,t)[0],v.alt=""}else v.src=O(e,t)[0],v.alt=O(e,t)[1];i?(u.forEach((function(e){v.classList.add(e)})),m.forEach((function(e){g.classList.add(e)}))):n&&(y.forEach((function(e){v.classList.add(e)})),v.src=f);var h=document.createElement(r),w=d(t.outerClass),L=a?l:w;Array.isArray(L)&&L.forEach((function(e){h.classList.add(e)}));var b,E,S=document.createElement("a");S.href=_(e,t)[0],S.title=_(e,t)[1],b=R(e,t)[0],E=R(e,t)[1];var A=R(e,t)[2],B=document.createElement("div"),I=document.createElement("div"),T=document.createElement("div"),C=document.createElement("div"),N=document.createElement("div"),k=document.createElement("div");if(B.classList.add("product"),B.classList.add("product--dynamic"),I.classList.add("product__block"),T.classList.add("product__img"),C.classList.add("product__text"),N.classList.add("product__name"),k.classList.add("product__price"),T.appendChild(v),i&&T.appendChild(g),N.appendChild(b),A)k.appendChild(E);else{var P=document.createElement("span");P.innerHTML="$",k.appendChild(P),k.appendChild(E)}if(C.appendChild(N),C.appendChild(k),I.appendChild(T),I.appendChild(C),S.appendChild(I),B.appendChild(S),h.appendChild(B),n)return h;return v.addEventListener("error",(function(){h.style.display="none"})),h}new B.a("#PromoSpReady",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderW2M2Item .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerGroup:2,speed:800,watchSlidesProgress:!0,watchSlidesVisibility:!0});var j;j=document.querySelector("#DynamicSliderBlock .swiper-wrapper"),dataDynamicSlider.forEach((function(e,t){var r=document.createElement("li");r.classList.add("swiper-slide"),e.forEach((function(e){var t=W(e,{isSliderLazyLoad:!1,isSlider:!1,outerTag:"div",outerClass:"dynamic__item"});r.appendChild(t)})),j.appendChild(r)})),new B.a("#DynamicSliderBlock",{autoplay:{delay:1800,reverseDirection:!0,disableOnInteraction:!1},direction:"vertical",grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#DynamicSliderBlock .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:1,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0}),function(){var e=document.getElementById("decorDynamicLeft1"),t=document.getElementById("decorDynamicLeft2");document.getElementById("decorDynamicBottom");window.addEventListener("scroll",(function(){var r=m(e,0,.4),n=100+-100*r,a=1*r;e.style.transform="translateY("+n+"%) scale("+a+")",t.style.transform="translateY(-"+n+"%) scale("+a+")",1===r?e.classList.add("active"):e.classList.remove("active")}))}();function V(e,t,r){var n=new Date(e),a=new Date(e).getTime(),o=[],i=0;for(r=r||1;i<t;){var l=n.setTime(a+parseInt(i*r*24*60*60*1e3));o.push(new Date(l)),i++}return o}function Y(e,t,r,n,a){if(!e)return!1;var o=!1,i=0;r=r||1e3;if(Array.isArray(n)){if("string"===(n[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof n[1])var l=n[1];var c=n[2]||!1;o=!0}var s=G((function(){o&&(window[n[0]]=function(e,t){var r=(new Date).getTime(),n=new Date(e).getTime(),a=(t=t||!1,n-r),o=Math.floor(a/10),i=Math.floor(a/1e3),l=Math.floor(i/60),c=Math.floor(l/60),s=Math.floor(c/24);c%=24,l%=60,i%=60,o%=100,t||(c+=24*s);return a<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(a)?console.error("countDownTime is NaN，找不到目標時間"):{day:s<10?"0"+s:s.toString(),dayTens:parseInt(s%100/10).toString(),dayUnits:parseInt(s%10).toString(),hour:c<10?"0"+c:c.toString(),hourTens:parseInt(c%100/10).toString(),hourUnits:parseInt(c%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:i<10?"0"+i:i.toString(),secTens:parseInt(i%100/10).toString(),secUnits:parseInt(i%10).toString(),micro:o<10?"0"+o:o.toString(),microTens:parseInt(o%100/10).toString(),microUnits:parseInt(o%10).toString()}}(e[i],c),"function"==typeof l&&l()),function(){var r=(new Date).getTime();if(new Date(e[i]).getTime()-r<=0){if("function"==typeof t)t(i);else if(Array.isArray(t))for(var n=t.length,a=0;n>0;)t[a](i),a++,n--;i++}}(),i>e.length-1&&(a&&a(),clearInterval(s))}),r)}function G(e,t){var r,n=1,a=(t=t||1e3,e=e||void 0,(new Date).getTime());return function o(i){var l=setTimeout((function(){var r=(new Date).getTime()-(a+n*t);"function"==typeof e?e():void 0!==e&&console.error("callback不是函數"),n++,o(t-r)}),i);return r=l}(t),r}var K={oneDay:V("2022/10/21 10:00",20),oneDayNine:V("2022/10/21 09:00",20)};function U(e,t,r){r=r||"active";e.forEach((function(e){e.classList.remove(r)})),e[t].classList.add(r)}(function(){if(!dataDailyTime)return!1;Y(K.oneDayNine,[F],100)})(),G((function(){var e=(new Date).getHours(),t=Array.apply(null,document.querySelectorAll(".product__time"));U(t,e>=9&&e<15?0:e>=15&&e<20?1:2)}),1e3),function(){var e=document.getElementById("decorDailyTimeLeft"),t=document.getElementById("decorDailyTimeRight");window.addEventListener("scroll",(function(){var r=m(e,0,.6),n=(m(t,0,.6),360*r-360),a=360+-360*r,o=1*r;e.style.transform="rotate("+n+"deg) scale("+o+")",t.style.transform="rotate("+a+"deg) scale("+o+")",t.style.opacity=o,1===r?e.classList.add("active"):e.classList.remove("active")}))}();function F(e){for(var t=document.querySelector("#dailyTime .product__wrap");t.firstChild;)t.removeChild(t.firstChild);dataDailyTime[e].forEach((function(e,r){var n=W(e,{outerTag:"div",isSlider:!1});!function(e){var t=document.createElement("div");t.classList.add("product__time"),e.insertBefore(t,e.firstChild)}(n),t.appendChild(n)}))}new B.a("#sliderW1m1Item",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderW1m1Item .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,slidesPerView:1,spaceBetween:"1%",speed:800,watchSlidesProgress:!0,watchSlidesVisibility:!0}),function(){var e=document.getElementById("decorW1m1Left"),t=document.getElementById("decorW1m1Right");window.addEventListener("scroll",(function(){var r=m(e,0,.6),n=1*r;t.style.transform=" scale("+n+")",1===r?e.classList.add("active"):e.classList.remove("active")}))}();function X(e,t,r,n){e=e||{},t=t||!1;if(Array.isArray(r)){var a=r[2]?r[2]:"name",o=r[3]?r[3]:"price",c=r[4]?r[4]:"text",s=r[5]?r[5]:"swiper-slide";if(t)var d=r[6]?r[6]:"swiper-lazy",u=r[7]?r[7][0]:"swiper-lazy-preloader",m=r[7]?r[7][1]:"swiper-lazy-preloader-black"}else{a="name",o="price",c="text",s="swiper-slide";if(t)d="swiper-lazy",u="swiper-lazy-preloader",m="swiper-lazy-preloader-black"}n=n||[,,,,"name"];if(e.hasOwnProperty(c)&&!e.hasOwnProperty(o))var p=!0;var f=document.createElement("li"),y=document.createElement("a"),v=document.createElement("img"),g=document.createElement("span"),h=document.createElement("span");!function(e,t,r){if(e=e||{},t=t||{},Array.isArray(r))var n=r[0]?r[0]:"productNumber",a=r[1]?r[1]:"webLink",o=r[2]?r[2]:"mobileLink",i=r[3]?r[3]:"appLink",c=r[4]?r[4]:"linkTitle";else n="productNumber",a="webLink",o="mobileLink",i="appLink",c="linkTitle";if(e.hasOwnProperty(n)&&"number"==typeof e[n])var s="https://www.etmall.com.tw/i/"+e[n],d="https://m.etmall.com.tw/Product/"+e[n],u="etmall://open?pgid=1&gd="+e[n];else s=e[a]?e[a]:"javascript:void(0)",d=e[o]?e[o]:"javascript:void(0)",u=e[i]?e[i]:"javascript:void(0)";t.href=l(960,u,s,d),e.hasOwnProperty(c)&&(t.title=e[c])}(e,y,n),function(e,t,r,n,a){if(e=e||{},t=t||{},r=r||!1,Array.isArray(a)){var o=a[0]?a[0]:"productNumber",l=a[1]?a[1]:"imgSrc";if(!r)var c=a[2]?a[2]:"imgAlt"}else{o="productNumber",l="imgSrc";if(!r)c="name"}if(Array.isArray(n))var s=n[0]?n[0]:768,d=n[1]?n[1]:"XL",u=n[2]?n[2]:"L";else s=768,d="XL",u="L";if(e.hasOwnProperty(o)&&"number"==typeof e[o]&&!e.hasOwnProperty(l))var m="-1_"+(i(s)?d:u)+".jpg",p=e[o],f="https://media.etmall.com.tw/NXimg/00"+p.toString().slice(0,4)+"/"+p+"/"+p+m;else if(e.hasOwnProperty(l))f=e[l];else console.error("未指定銷售編號或是圖片來源");r?t.dataset.src=f:(t.src=f,e.hasOwnProperty(c)&&(t.alt=e[c]))}(e,v,t),t&&v.classList.add(d),g.innerHTML=e[a],h.innerHTML=p?e[c]:Number.prototype.toLocaleString?isNaN(Number(e[o]))?e[o]:Number(e[o]).toLocaleString():e[o],f.classList.add(s);var w=document.createElement("div"),L=document.createElement("div"),b=document.createElement("div"),E=document.createElement("div");if(w.classList.add("product"),w.classList.add("product--dynamic"),L.classList.add("product__img"),b.classList.add("product__name"),E.classList.add("product__price"),L.appendChild(v),b.appendChild(g),E.innerHTML=p?"<span></span>":"<span>$</span>",E.appendChild(h),t){var S=document.createElement("div");S.classList.add(u),S.classList.add(m),L.appendChild(S)}if(y.appendChild(L),y.appendChild(b),y.appendChild(E),w.appendChild(y),f.appendChild(w),t)return f;return v.addEventListener("error",(function(){f.style.display="none"})),f}(function(){var e=document.getElementById("tabBox"),t=Array.apply(null,e.querySelectorAll(".tab__item")),r=document.getElementById("tabContentBlock"),n=Array.apply(null,r.querySelectorAll(".content__box"));if(t.length!==n.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTab1&&dataTab2&&dataTab3&&dataTab4))return!1;var e=[dataTab1,dataTab2,dataTab3,dataTab4];Array.apply(null,document.querySelectorAll("#tabContentBlock .swiper-wrapper")).forEach((function(t,r){e[r].forEach((function(e){var r=X(e);t.appendChild(r)}))}))})(),t.forEach((function(e,r){e.addEventListener("click",(function(){J(t,r),J(n,r),Q(r)}))})),Q()})(),function(){var e=document.getElementById("decorTabLeft1"),t=document.getElementById("decorTabLeft2"),r=document.getElementById("decorTabRight");window.addEventListener("scroll",(function(){var n=m(e,0,.5),a=1*n;t.style.transform="scale("+a+")",t.style.opacity=a,1===n?(e.classList.add("active"),r.classList.add("active")):(e.classList.remove("active"),r.classList.remove("active"))}))}();function J(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function Q(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider"));return new B.a(t[e],{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,slidesPerView:3,slidesPerGroup:2,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}(function(){var e=document.getElementById("tabBox2"),t=Array.apply(null,e.querySelectorAll(".tab__item")),r=document.getElementById("tabContentBlock2"),n=Array.apply(null,r.querySelectorAll(".content__box"));if(t.length!==n.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTabSec1&&dataTabSec2&&dataTabSec3&&dataTabSec4&&dataTabSec5&&dataTabSec6))return!1;var e=[dataTabSec1,dataTabSec2,dataTabSec3,dataTabSec4,dataTabSec5,dataTabSec6];Array.apply(null,document.querySelectorAll("#tabContentBlock2 .swiper-wrapper")).forEach((function(t,r){e[r].forEach((function(e){var r=X(e);t.appendChild(r)}))}))})(),t.forEach((function(e,r){e.addEventListener("click",(function(){Z(t,r),Z(n,r),ee(r)}))})),ee()})(),function(){var e=document.getElementById("decorTab2Left"),t=(document.getElementById("decorTab2Right1"),document.getElementById("decorTab2Right2"));window.addEventListener("scroll",(function(){var r=m(e,0,.5),n=100+-100*r;e.style.transform="translateY("+n+"%)",t.style.transform="translateY("+n+"%)";var a=1*r;e.style.opacity=a,t.style.opacity=a}))}();function Z(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function ee(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider2"));new B.a(t[e],{grabCursor:!0,slidesPerView:3,slidesPerColumnFill:"row",speed:600})}setInterval((function(){var e,t,r,n;e=Array.apply(null,document.querySelectorAll("#w3m3Wrap a")),r=T((t=["active","active"]).length,"siblingRandomCheckW3M3AnimationIndex"),n=T(e.length),e.forEach((function(e){t.forEach((function(t){e.classList.remove(t)}))})),e[n].classList.add(t[r])}),2e3),function(){var e=document.getElementById("decorEventW3m3Left"),t=document.getElementById("decorEventW3m3Right");window.addEventListener("scroll",(function(){var r=m(e,0,.4),n=100+-100*r,a=1*r;e.style.transform="translateY("+n+"%)",t.style.transform="scale("+a+")",1===r?e.classList.add("active"):e.classList.remove("active")}))}();var te,re;te=document.querySelector("#sliderDynamicHalf .swiper-wrapper"),re=document.querySelector("#sliderDynamicHalf2 .swiper-wrapper"),dataDynamicHalf.forEach((function(e){var t=W(e);te.appendChild(t)})),dataDynamicHalf2.forEach((function(e){var t=W(e);re.appendChild(t)})),document.querySelectorAll(".container--dynamic-half").forEach((function(e){return e.querySelectorAll(".swiper-slide").length,new B.a(e,{autoplay:{delay:1800+Math.floor(500*Math.random()),disableOnInteraction:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll(".container--dynamic-half .swiper-slide").length),lazy:{loadPrevNext:!0,loadOnTransitionStart:!0,loadPrevNextAmount:2},loop:!0,slidesPerView:2,speed:600})})),function(){var e=document.getElementById("decorHalfLeft1"),t=document.getElementById("decorHalfLeft2"),r=document.getElementById("decorHalfRight1"),n=document.getElementById("decorHalfRight2");window.addEventListener("scroll",(function(){var a=m(e,0,.6),o=100+-100*a,i=1*a;e.style.transform="translateY("+o+"%)",n.style.transform="translateY("+o+"%)",e.style.opacity=i,1===a?(t.classList.add("active"),r.classList.add("active")):(t.classList.remove("active"),r.classList.remove("active"))}))}();new B.a("#sliderW2M2Item",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,effect:"fade",fadeEffect:{crossFade:!0},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderW2M2Item .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,perspective:!0,spaceBetween:"1%",slidesPerGroup:2,speed:800,watchSlidesProgress:!1,watchSlidesVisibility:!0}),function(){var e=document.getElementById("decorSliderW2M2Left"),t=document.getElementById("decorSliderW2M2Right");window.addEventListener("scroll",(function(){var r=m(e,0,.4),n=1*r;t.style.transform=" scale("+n+")",1===r?e.classList.add("active"):e.classList.remove("active")}))}();!function(){var e=document.getElementById("decorBnSectionLeft"),t=document.getElementById("decorBnSectionRight"),r=document.getElementById("decorBnSectionBottom");window.addEventListener("scroll",(function(){var n=m(e,0,.5),a=100+-100*n,o=1*n;e.style.transform="translateY("+a+"%) scale("+o+")",1==n?(t.classList.add("active"),r.classList.add("active")):(t.classList.remove("active"),r.classList.remove("active"))}))}();window.addEventListener("load",ne),/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent),function(){var e=document.getElementById("decorBnSliderLeft"),t=document.getElementById("decorBnSliderRight");window.addEventListener("scroll",(function(){var r=m(e,0,.6),n=120+-120*r;e.style.transform="translateY("+n+"%)",t.style.transform="translateY("+n+"%)",1===r?(e.classList.add("active"),t.classList.add("active")):(e.classList.remove("active"),t.classList.remove("active"))}))}();function ne(){return new B.a("#sliderBn",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,slidesPerView:3,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){var e=document.getElementById("decorBnSection2Left"),t=document.getElementById("decorBnSection2Right");window.addEventListener("scroll",(function(){var r=m(e,0,.5),n=1*r;t.style.transform="scale("+n+")",e.style.transform=" scale("+n+")",1==r?(e.classList.add("active"),t.classList.add("active")):(e.classList.remove("active"),t.classList.remove("active"))}))}();document.body.classList.add("js-loading"),(new a.a).init()}]);