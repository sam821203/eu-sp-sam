!function(e){function t(t){for(var r,a,l=t[0],d=t[1],c=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==i[d]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=d;o.push([5,1]),n()}([,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},function(e,t,n){"use strict";n.r(t);n(2);var r=n(1),i=n.n(r);n(3),n(4);function o(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function a(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function l(e){return document.body.clientWidth>=e}function d(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function c(e,t,n,r){var i=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:l(e)?n:r;return r||(r=n),i}function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function u(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function p(e,t,n,r){var i=[],o=typeof e;return"undefined"===o?t&&i.push(t):"string"===o?(r&&i.push(t),i.push(e)):Array.isArray(e)?(r&&i.push(t),e.forEach((function(e){i.push(e)}))):n&&console.error(n),i}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!a&&("string"==typeof a()?parseInt(a(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function i(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",i),window.addEventListener("resize",i),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var o,a,l,d=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?r.style.opacity=1:d=!0}o=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),o.insertBefore(a,o.firstChild),c()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))}();function m(e,t){document.addEventListener("scroll",(function(){e.style.transform="translate3d(0,"+s()*parseFloat(t)+"px,0)"}))}requestAnimationFrame((function(){y("decoHero",.44),y("decoPoli",.25),y("decoPoli2",.35)}));function y(e,t){var n=document.getElementById(e),r=n.querySelector("img");n.addEventListener("animationend",(function(){!function(e,t){m(e,t)}(r,t)}))}function f(e,t,n){t=t||0,n=n||.5;if(function(e,t,n){t=t||0,n=n||t||0;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=r+t,o=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return i&&o+n>=0}(e=e)){var r=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/n;return r<0?r=0:r>1&&(r=1),r}}var v;v=document.getElementById("scrollPromo"),window.addEventListener("scroll",(function(){var e=100+-100*f(v,0,.6);v.style.transform="translateX("+e+"px)"}));var h=n(0),w=n.n(h);function g(e){return Math.floor(Math.random()*e)}function b(e,t){t=t||"siblingRandomCheckNowIndex";for(var n=g(e);n===window[t];)n=g(e);return window[t]=n,n}var S,L;setInterval((function(){var e,t,n,r;e=Array.apply(null,document.querySelectorAll("#promoEvent a")),n=b((t=["animation","animation2"]).length,"siblingRandomCheckPromoAnimationIndex"),r=b(e.length),e.forEach((function(e){t.forEach((function(t){e.classList.remove(t)}))})),e[r].classList.add(t[n])}),1e3),S=new Date,L=new Date("2021/6/19 00:00"),Array.apply(null,document.querySelectorAll("#promoEvent .js-time-check")).forEach((function(e,t,n){S>=L?(n[2].style.display="none",n[3].style.display="none",n[6].style.display="none",n[7].style.display="none"):(n[0].style.display="none",n[1].style.display="none",n[4].style.display="none",n[5].style.display="none")})),o(window.addEventListener("load",E),E);function E(){new w.a("#sliderPromo",{autoplay:{delay:2e3,disableOnInteraction:!1,reverseDirection:!0},direction:"vertical",effect:"flip",flipEffect:{slideShadows:!1,limitRotation:!0},init:d("#sliderPromo",1),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderPromo .swiper-slide").length),loop:!0,speed:600})}function C(e,t,n){var r=new Date(e),i=new Date(e).getTime(),o=[],a=0;for(n=n||1;a<t;){var l=r.setTime(i+parseInt(a*n*24*60*60*1e3));o.push(new Date(l)),a++}return o}function D(e,t,n,r,i){if(!e)return!1;var o=!1,a=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var l=r[1];var d=r[2]||!1;o=!0}var c=A((function(){o&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),i=(t=t||!1,r-n),o=Math.floor(i/10),a=Math.floor(i/1e3),l=Math.floor(a/60),d=Math.floor(l/60),c=Math.floor(d/24);d%=24,l%=60,a%=60,o%=60,t||(d+=24*c);return i<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(i)?console.error("countDownTime is NaN，找不到目標時間"):{day:c<10?"0"+c:c.toString(),dayTens:parseInt(c%100/10).toString(),dayUnits:parseInt(c%10).toString(),hour:d<10?"0"+d:d.toString(),hourTens:parseInt(d%100/10).toString(),hourUnits:parseInt(d%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:a<10?"0"+a:a.toString(),secTens:parseInt(a%100/10).toString(),secUnits:parseInt(a%10).toString(),micro:o<10?"0"+o:o.toString(),microTens:parseInt(o%100/10).toString(),microUnits:parseInt(o%10).toString()}}(e[a],d),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[a]).getTime()-n<=0){if("function"==typeof t)t(a);else if(Array.isArray(t))for(var r=t.length,i=0;r>0;)t[i](a),i++,r--;a++}}(),a>e.length-1&&(i&&i(),clearInterval(c))}),n)}function A(e,t){var n,r=1,i=(t=t||1e3,e=e||void 0,(new Date).getTime());return function o(a){var l=setTimeout((function(){var n=(new Date).getTime()-(i+r*t);"function"==typeof e?e():void 0!==e&&console.error("callback不是函數"),r++,o(t-n)}),a);return n=l}(t),n}var T={oneDay:C("2021/6/16 10:00",10),oneDayNine:C("2021/6/16 09:00",10),twoDays:C("2021/6/16 10:00",10,2)};!function(){if(!dailyData)return!1;D(T.oneDay,[I,B,x],100,["countDownNumberObject",x,!0])}();function I(e){var t=document.querySelector("#dailyChange a");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",i=n[1]?n[1]:"webLink",o=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",i="webLink",o="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var d="https://www.etmall.com.tw/i/"+e[r],s="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else d=e[i]?e[i]:"javascript:void(0)",s=e[o]?e[o]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=c(960,u,d,s),e.hasOwnProperty(l)&&(t.title=e[l])}(dailyData[e],t)}function B(e){document.querySelector("#dailyChange a img").src="daily-item-"+(e+1)+".png"}function x(){var e=document.getElementById("dailyHourTens"),t=document.getElementById("dailyHourUnits"),n=document.getElementById("dailyMinTens"),r=document.getElementById("dailyMinUnits"),i=document.getElementById("dailySecTens"),o=document.getElementById("dailySecUnits");e.innerHTML=window.countDownNumberObject.hourTens,t.innerHTML=window.countDownNumberObject.hourUnits,n.innerHTML=window.countDownNumberObject.minTens,r.innerHTML=window.countDownNumberObject.minUnits,i.innerHTML=window.countDownNumberObject.secTens,o.innerHTML=window.countDownNumberObject.secUnits}setInterval((function(){var e,t,n,r;e=Array.apply(null,document.querySelectorAll("#w3m3Wrap a")),n=b((t=["active","active"]).length,"siblingRandomCheckW3M3AnimationIndex"),r=b(e.length),e.forEach((function(e){t.forEach((function(t){e.classList.remove(t)}))})),e[r].classList.add(t[n])}),1e3);function N(e){if(void 0===e)return console.error("沒有資料來源")}function k(e){return e?(u(e,"客製化設定請用物件表示"),e):{}}function M(e,t,n,r){r=void 0===r||r;var i,o,a=k(t);if(r&&N(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):i={productNumber:l}}else{u(e,"資料格式不正確");var d=a.productNumberKey||"productNumber";if("string"==typeof e[d]||"number"==typeof e[d]){l=Number(e[d]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):i=e}else if(e[d])console.log(e),console.error("銷編格式錯誤");else{var c=a.nameKey||"name",s=a.textKey||"text",p=a.priceKey||"price";e[c]&&(e[s]||e[p])?i=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(o=n,Array.isArray(o)||u(o)){var m=[];return n.forEach((function(e){"function"==typeof e?m.push(n(i,a)):console.error("callback並非函式")})),m}if("function"==typeof n)return n(i,a);console.error("callback並非函式")}function P(e,t){return M(e,t,q,!1)}function q(e,t){var n,r,i,o,a=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",d=t.mobileLinkKey||"mobileLink",s=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[d]?e[d]:n,i=e[s]?e[s]:r;else if(e[a]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,i="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return o=e[u]||"",[c(960,i,n,r),o]}function _(e,t){return M(e,t,O,!1)}function O(e,t){var n,r=t.productNumberKey||"productNumber",i=t.imgSrcKey||"imgSrc",o=t.altKey||"name";if(e[i])n=e[i];else if(e[r]){var a=t.imgSizeBreakpoint||768,d=t.imgSizeWebSize||"XL",c=t.imgSizeMobileSize||"L",s="-1_"+(l(a)?d:c)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+s}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[o]?e[o]:""]}function z(e,t){return M(e,t,H,!1)}function H(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),i=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),i.setAttribute("tag","GOOD_SALEPRC"),i.setAttribute("goodid",e[n]),[r,i]}function j(e,t){var n,r=k(t),i=r.namekey||"name",o=r.pricekey||"price",a=r.textkey||"text";if(n=e[i]||"",e[a])var l=!0;return[n,l?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[o]))?e[o]||"":Number(e[o]).toLocaleString()||"":e[o]||""]}function R(e,t){var n,r,i=(t=t||{}).namekey||"name",o=t.pricekey||"price",a=t.textkey||"text",l=document.createElement("span"),d=document.createElement("span"),c=!1,s=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===s||"false"===s||"none"===s)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,p=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===s?(e[i]?(l.innerHTML=j(e,t)[0],n=l):n=z(e,t)[0],e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=j(e,t)[1],r=d):(d.appendChild(z(e,t)[1]),r=d)):"all"===s?(n=z(e,t)[0],d.appendChild(z(e,t)[1]),r=d):!1===s||"false"===s||"none"===s?(u?n=z(e,t)[0]:e[i]?(l.innerHTML=j(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),p?(d.appendChild(z(e,t)[1]),r=d):(e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=j(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源")),u||p||(e[i]?(l.innerHTML=j(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[a]&&(c=!0),e[a]||e[o]?(d.innerHTML=j(e,t)[1],r=d):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,c]}function V(e,t){N(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad,i=void 0===t.isSlider||t.isSlider;if(i){var o=t.sliderClass,a=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=p(o,"swiper-slide","sliderClass格式不正確",!0);if(a){var d=t.sliderImgLazyLoadClass,c=t.sliderLazyLoadIndicatorClass,s=p(d,null,"sliderImgLazyLoadClass格式不正確",!0),u=p(c,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){s.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){u.push(e)}))}else if(r){var m=t.imgLazyLoadClass,y=t.lazyLoadIndicatorSrc||"1x1_low.png",f=p(m,null,"imgLazyLoadClass格式不正確",!0);f.push("lazyload")}}var v=document.createElement("img");if(a||r){var h=document.createElement("div");v.dataset.src=_(e,t)[0],v.alt=""}else v.src=_(e,t)[0],v.alt=_(e,t)[1];a?(s.forEach((function(e){v.classList.add(e)})),u.forEach((function(e){h.classList.add(e)}))):r&&(f.forEach((function(e){v.classList.add(e)})),v.src=y);var w=document.createElement(n),g=p(t.outerClass),b=i?l:g;Array.isArray(b)&&b.forEach((function(e){w.classList.add(e)}));var S,L,E=document.createElement("a");E.href=P(e,t)[0],E.title=P(e,t)[1],S=R(e,t)[0],L=R(e,t)[1];var C=R(e,t)[2],D=document.createElement("div"),A=document.createElement("div"),T=document.createElement("div"),I=document.createElement("div"),B=document.createElement("div"),x=document.createElement("div");if(D.classList.add("product"),D.classList.add("product--dynamic"),A.classList.add("product__block"),T.classList.add("product__img"),I.classList.add("product__text"),B.classList.add("product__name"),x.classList.add("product__price"),T.appendChild(v),a&&T.appendChild(h),B.appendChild(S),C)x.appendChild(L);else{var k=document.createElement("span");k.innerHTML="$",x.appendChild(k),x.appendChild(L)}if(I.appendChild(B),I.appendChild(x),A.appendChild(T),A.appendChild(I),E.appendChild(A),D.appendChild(E),w.appendChild(D),r)return w;return v.addEventListener("error",(function(){w.style.display="none"})),w}!function(){if(!dataDailySlider)return!1;D(T.oneDay,[U,K],100)}();var Y=new w.a("#sliderDaily",{autoplay:{delay:2e3,disableOnInteraction:!1},lazy:{loadPrevNext:!0},navigation:{nextEl:"#sliderDailyNext",prevEl:"#sliderDailyPrev"},speed:600});function U(e){var t=dataDailySlider.length-e==1,n=document.getElementById("sliderDaily"),r=n.querySelector(".swiper-wrapper"),i=n.querySelector(".swiper-notification");for(i&&n.removeChild(i);r.firstChild;)r.removeChild(r.firstChild);if(t){var o=V(dataDailySlider[e][0],{isSlider:!1});W(o,e,0),r.appendChild(o),Y.update(),Y.autoplay.stop();var a=document.getElementById("sliderDailyPrev"),l=document.getElementById("sliderDailyNext");a.style.display="none",l.style.display="none"}else dataDailySlider[e].forEach((function(t,n){var i=V(t);W(i,e,n),r.appendChild(i)})),Y.update()}function K(e){if(!dataDailySlider)return!1;var t=dataDailySlider.length,n=t-e==1,r=t-e==2,i=Array.apply(null,document.querySelectorAll(".daily--next"));if(i.forEach((function(e){e.firstChild&&e.removeChild(e.firstChild)})),n||r)if(r){i.forEach((function(t,n){var r=V(dataDailySlider[e+1][n],{outerTag:"div",isSlider:!1});W(r,e,0,!0),t.appendChild(r)})),Array.apply(null,document.querySelectorAll(".daily--next a")).forEach((function(e){e.href="javascript:void(0)"}))}else n&&i.forEach((function(t,n){var r=V(dataDailySlider[e][n+1],{outerTag:"div",isSlider:!1});W(r,e),t.appendChild(r),t.classList.add("active")}));else i.forEach((function(t,n){var r=V(dataDailySlider[e+n+1][0],{outerTag:"div",isSlider:!1});W(r,e,n,!0),t.appendChild(r)})),Array.apply(null,document.querySelectorAll(".daily--next a")).forEach((function(e){e.href="javascript:void(0)"}))}function W(e,t,n,r){n=n||0,r=r||!1;var i=e.querySelector(".product__block").querySelector(".product__text"),o=document.createElement("div"),a=document.createElement("span"),l=document.createElement("span"),d=document.createElement("span");o.classList.add("product__intro"),a.classList.add("intro--month"),l.innerHTML="/",d.classList.add("intro--date"),o.appendChild(a),o.appendChild(l),o.appendChild(d),r?F(a,d,n+1):F(a,d),i.insertBefore(o,i.firstChild)}function F(e,t,n){var r,i,o,a=new Date,l=(r=a,i=n=n||0,(o=new Date(r)).setDate(r.getDate()+i),o),d=l.getMonth()+1,c=l.getDate();e.innerHTML=d,t.innerHTML=c<10?"0"+c:c}!function(){var e=document.getElementById("decoBnSlider");window.addEventListener("scroll",(function(){var t=f(e,0,.6),n=150+-150*t,r=t;e.style.transform="scale("+r+") translateY("+n+"%)"}))}();o(window.addEventListener("load",G),G);function G(){return new w.a("#sliderBn",{autoplay:{delay:2e3,disableOnInteraction:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:3,slidesPerGroup:3,spaceBetween:"1.5%",speed:600})}!function(){if(!linkTime&&!linkData)return!1;D(linkTime,[X,J],100)}();function X(e){var t=document.getElementById("rightChangeAnchor"),n=linkData[e].webLink,r=linkData[e].mobileLink,i=linkData[e].appLink;t.href=c(960,i,n,r)}function J(e){linkData[e].toggleClass&&document.getElementById("rightChange").classList.toggle("close");var t=document.querySelector("#rightChange img"),n=linkData[e].changeImg;t.src=n?"game-right-"+n+".png":"game-right-0.png"}o(window.addEventListener("load",Q),Q);function Q(){return new w.a("#sliderBn2",{autoplay:{delay:2e3,disableOnInteraction:!1},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn2 .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBn2Pager",type:"bullets",clickable:!0},slidesPerView:3,slidesPerGroup:3,spaceBetween:"3%",speed:600})}!function(){var e=Array.apply(null,document.querySelectorAll("#cardBox li")),t=b(e.length,"siblingRandomChooseCardsIndex"),n=b(e.length,"siblingRandomChooseCardsIndex"),r=b(e.length,"siblingRandomChooseCardsIndex");for(;r===t||r===n;)r=b(e.length,"siblingRandomChooseCardsIndex");[t,n,r].forEach((function(t){e[t].classList.add("active")})),function(){var e=Array.apply(null,document.querySelectorAll("#btnChooseBox a")),t=Array.apply(null,document.querySelectorAll("#chooseLineBox .line__box")),n=Array.apply(null,document.querySelectorAll("#cardBox .active")),r=document.querySelector("#chooseLineBox .line__btn");e.forEach((function(e,i){e.addEventListener("click",(function(e){e.preventDefault(),r.style.display="none";var o=t[i],a=n[function(e){if(0==e)return 1;if(1==e)return 2;if(2==e)return 0}(i)].querySelector(".card__item");o.classList.add("active"),setTimeout((function(){a.classList.add("active")}),1800),Array.apply(null,document.querySelectorAll("#btnChooseBox a")).forEach((function(e){e.parentNode.removeChild(e)}))}))}))}()}();!function(){var e=document.getElementById("decoDynamicSlider");window.addEventListener("scroll",(function(){var t=100+-100*f(e,0,.6);e.style.transform="translateY("+t+"%)"}))}();var Z;Z=document.querySelector("#sliderDynamic .swiper-wrapper"),dataDynamic.forEach((function(e){var t=V(e);Z.appendChild(t)})),new w.a("#sliderDynamic",{autoplay:{delay:2e3,disableOnInteraction:!1},init:d("#sliderDynamic",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,slidesPerView:3,slidesPerGroup:3,spaceBetween:"1%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0});o(window.addEventListener("load",ee),ee);function ee(){var e=new w.a("#doubleSliderTab",{init:d("#doubleSliderContent"),preventClicks:!1,allowTouchMove:!1,on:{click:function(){t.slideToLoop(3*this.clickedIndex),Array.apply(null,document.querySelectorAll("#doubleSliderTab .swiper-slide")).forEach((function(e){e.classList.remove("active")})),e.clickedSlide.classList.add("active")}},slidesPerView:3,spaceBetween:"0.5%",watchSlidesVisibility:!0}),t=new w.a("#doubleSliderContent",{init:d("#doubleSliderContent"),autoplay:{delay:2e3,disableOnInteraction:!1},on:{slideChange:function(){if(e.slideToLoop(n(this.realIndex,3)[1],600),0===n(this.realIndex,3)[0]){var t=Array.apply(null,document.querySelectorAll("#doubleSliderTab .swiper-slide"))[n(this.realIndex,3)[1]];Array.apply(null,document.querySelectorAll("#doubleSliderTab .swiper-slide")).forEach((function(e){e.classList.remove("active")}));var r=Array.apply(null,document.querySelectorAll("#doubleSliderTab .swiper-slide")).length;(Array.apply(null,document.querySelectorAll("#doubleSliderContent .swiper-slide")).length-6)/3==r?t.classList.add("active"):console.error("上下層數量不符合")}}},slidesPerView:3,slidesPerGroup:3,spaceBetween:"3%",loop:!0,lazy:{loadPrevNext:!0},speed:600});function n(e,t){return[e%t,Math.floor(e/t)]}}!function(){var e=document.getElementById("decoBnSpecial");window.addEventListener("scroll",(function(){var t=100+-100*f(e,0,.6);e.style.transform=" translateY("+t+"%)"}))}();!function(){document.getElementById("bnSpecialPromoWrap");var e=Array.apply(null,document.querySelectorAll("#bnSpecial .month--prev")),t=Array.apply(null,document.querySelectorAll("#bnSpecial .month--next"));n=new Date("2021/6/18 23:59:59"),new Date>n?e.forEach((function(e){e.parentNode.removeChild(e)})):t.forEach((function(e){e.parentNode.removeChild(e)}));var n;o(window.addEventListener("load",te),te)}();function te(){return new w.a("#sliderSpecial",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,init:d("#sliderSpecial",3),lazy:{loadPrevNext:!0},loop:!0,slidesPerView:2.1,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){var e=document.getElementById("decoDynamicSection"),t=e.querySelector(".title__decoration");window.addEventListener("scroll",(function(){var n=f(e,0,.6),r=f(t,0,.6),i=100+-100*n,o=150+-150*r;e.style.transform="translateY("+i+"px)",t.style.transform="translateY("+o+"px)",1===r?t.classList.add("active"):t.classList.remove("active")}))}();var ne;ne=document.querySelector("#dynamicSection .product__wrap"),dataDynamicSection.forEach((function(e){var t=V(e,{outerTag:"div",isSlider:!1});ne.appendChild(t)}));!function(){var e=document.getElementById("decoDynamicSection2"),t=e.querySelector(".title__decoration");window.addEventListener("scroll",(function(){var n=f(e,0,.6),r=f(t,0,.6),i=50+-50*n,o=0+0*r;e.style.transform="translateY("+i+"px)",t.style.transform="translateY("+o+"px)",1===r?t.classList.add("active"):t.classList.remove("active")}))}();var re;re=document.querySelector("#dynamicSection2 .product__wrap"),dataDynamicSection2.forEach((function(e){var t=V(e,{outerTag:"div",isSlider:!1});re.appendChild(t)}));!function(){var e=document.getElementById("decoDynamicSection3"),t=e.querySelector(".title__decoration");window.addEventListener("scroll",(function(){var n=f(e,0,.6),r=f(t,0,.6),i=0+0*n,o=100+-100*r;e.style.transform="translateY("+i+"px)",t.style.transform="translateY("+o+"px)",1===r?t.classList.add("active"):t.classList.remove("active")}))}();var ie;ie=document.querySelector("#dynamicSection3 .product__wrap"),dataDynamicSection3.forEach((function(e){var t=V(e,{outerTag:"div",isSlider:!1});ie.appendChild(t)}));!function(){var e=document.getElementById("decoDynamicSection4"),t=e.querySelector(".title__decoration");window.addEventListener("scroll",(function(){var n=f(e,0,.6),r=f(t,0,.6),i=150+-150*n,o=50*r-50;e.style.transform="translateY("+i+"px)",t.style.transform="translateY("+o+"px)",1==r?t.classList.add("active"):t.classList.remove("active")}))}();var oe;oe=document.querySelector("#dynamicSection4 .product__wrap"),dataDynamicSection4.forEach((function(e){var t=V(e,{outerTag:"div",isSlider:!1});oe.appendChild(t)}));var ae;ae=document.querySelector("#sliderDynamicHalf2 .swiper-wrapper"),dataDynamicHalf2.forEach((function(e){var t=V(e);ae.appendChild(t)})),new w.a("#sliderDynamicHalf2",{autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{960:{slidesPerView:3,spaceBetween:10}},lazy:{loadPrevNext:!0},slidesPerView:2,spaceBetween:"3%",speed:600});o(window.addEventListener("load",le),le);function le(){new w.a("#sliderMidBig",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderMidBig .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./)),slidesPerView:1.8,spaceBetween:"0.5%",speed:600})}!function(){var e=document.querySelector("#sliderDynamicHalf .swiper-wrapper");dataDynamicHalf.forEach((function(t){var n=V(t);e.appendChild(n)})),new w.a("#sliderDynamicHalf",{autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{960:{slidesPerView:3,spaceBetween:10}},lazy:{loadPrevNext:!0},slidesPerView:2,spaceBetween:"3%",speed:600})}();!function(){if(!dataTwoDay)return!1;var e=T.twoDays;D(e,[de,function(t){t=t||0;var n=document.getElementById("twoDayDate"),r=e[t].getTime(),i=e[t],o=new Date(r+864e5),a=i.getMonth()+1,l=o.getMonth()+1,d=a+"/"+(i.getDate()<10?"0"+i.getDate():i.getDate())+"-"+l+"/"+(o.getDate()<10?"0"+o.getDate():o.getDate());n.innerHTML=d}],100)}();function de(e){var t=document.getElementById("sliderTwoDay"),n=t.querySelector(".swiper-wrapper"),r=t.querySelector(".swiper-notification");for(r&&t.removeChild(r);n.firstChild;)n.removeChild(n.firstChild);dataTwoDay[e].forEach((function(e,t){var r=V(e);n.appendChild(r)})),new w.a("#sliderTwoDay",{breakpoints:{960:{slidesPerView:3,spaceBetween:10}},lazy:{loadPrevNext:!0},slidesPerView:2,spaceBetween:"3%",speed:600})}!function(){var e=document.getElementById("titleDailyTime");window.addEventListener("scroll",(function(){var t=100+-100*f(e,0,.6);e.style.transform="translateY("+t+"%)"}))}();function ce(e,t,n){n=n||"active";e.forEach((function(e){e.classList.remove(n)})),e[t].classList.add(n)}(function(){if(!dataDailyTime)return!1;D(T.oneDayNine,[se],100)})(),A((function(){var e=(new Date).getHours(),t=Array.apply(null,document.querySelectorAll(".product__time"));ce(t,e>=9&&e<15?0:e>=15&&e<22?1:2)}),1e3);function se(e){for(var t=document.querySelector("#dailyTime .product__wrap");t.firstChild;)t.removeChild(t.firstChild);dataDailyTime[e].forEach((function(e,n){var r=V(e,{outerTag:"div",isSlider:!1});!function(e){var t=document.createElement("div");t.classList.add("product__time"),e.insertBefore(t,e.firstChild)}(r),t.appendChild(r)}))}document.body.classList.add("js-loading"),(new i.a).init()}]);