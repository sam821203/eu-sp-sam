!function(e){function t(t){for(var r,a,l=t[0],c=t[1],s=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=c;i.push([5,1]),n()}([,,function(e,t,n){},,function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)},String.prototype.repeat||(String.prototype.repeat=function(e){"use strict";if(null==this)throw new TypeError("can't convert "+this+" to object");var t=""+this;if((e=+e)!=e&&(e=0),e<0)throw new RangeError("repeat count must be non-negative");if(e==1/0)throw new RangeError("repeat count must be less than infinity");if(e=Math.floor(e),0==t.length||0==e)return"";if(t.length*e>=1<<28)throw new RangeError("repeat count must not overflow maximum string size");var n=t.length*e;for(e=Math.floor(Math.log(e)/Math.log(2));e;)t+=t,e--;return t+=t.substring(0,n-t.length)})},function(e,t,n){"use strict";n.r(t);n(2);var r=n(1),o=n.n(r);n(3),n(4);function i(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function a(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function l(e){return document.body.clientWidth>=e}function c(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function s(e,t,n,r){var o=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:l(e)?n:r;return r||(r=n),o}function d(e){return new Date>e}function u(e,t){return"object"!=typeof e?(t&&console.error(t),!1):!Array.isArray(e)&&null!==e||(t&&console.error(t),!1)}function p(e,t,n,r){var o=[],i=typeof e;return"undefined"===i?t&&o.push(t):"string"===i?(r&&o.push(t),o.push(e)):Array.isArray(e)?(r&&o.push(t),e.forEach((function(e){o.push(e)}))):n&&console.error(n),o}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!a&&("string"==typeof a()?parseInt(a(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,l,c=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function d(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),c?r.style.opacity=1:c=!0}i=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),i.insertBefore(a,i.firstChild),s()&&(c=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(d):d()})),window.addEventListener("scroll",(function(){u?u(d):d()}))}();var m=n(0),f=n.n(m);function y(e){return Math.floor(Math.random()*e)}function g(e,t){return Math.floor(Math.random()*(t-e+1))+e}function v(e,t){t=t||"siblingRandomCheckNowIndex";for(var n=y(e);n===window[t];)n=y(e);return window[t]=n,n}var w,h,b;setInterval((function(){var e,t;e=Array.apply(null,document.querySelectorAll("#promoEvent .promo__box")),t=v(e.length),e.forEach(e=>{e.classList.remove("shakeX")}),e[t].classList.add("shakeX")}),3500),new f.a("#sliderPromo",{autoplay:{delay:4e3,disableOnInteraction:!1,reverseDirection:!0},effect:"flip",flipEffect:{slideShadows:!1,limitRotation:!0},init:c("#sliderPromo",1),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderPromo .swiper-slide").length),loop:!0,speed:600}),w=document.getElementById("itemBoxClick"),h=document.getElementById("eventBox"),b=document.querySelector(".close"),w.addEventListener("click",(function(e){e.preventDefault(),h.classList.add("active")})),b.addEventListener("click",(function(e){e.preventDefault(),h.classList.remove("active")}));function L(e,t,n){t=t||0,n=n||.5;if(function(e,t,n){t=t||0,n=n||t||0;var r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,o=(e.getBoundingClientRect()&&e.getBoundingClientRect().top)<=r+t,i=e.getBoundingClientRect()&&e.getBoundingClientRect().bottom;return o&&i+n>=0}(e=e)){var r=(window.innerHeight-e.getBoundingClientRect().top-t)/window.innerHeight/n;return r<0?r=0:r>1&&(r=1),r}}var S;S=document.getElementById("decoDaily"),window.addEventListener("scroll",(function(){var e=100+-100*L(S,0,.5);S.style.transform="translateY("+e+"%)"}));function E(e,t,n){var r=new Date(e),o=new Date(e).getTime(),i=[],a=0;for(n=n||1;a<t;){var l=r.setTime(o+parseInt(a*n*24*60*60*1e3));i.push(new Date(l)),a++}return i}function C(e,t,n,r,o){if(!e)return!1;var i=!1,a=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var l=r[1];var c=r[2]||!1;i=!0}var s=function(e,t){var n,r=1,o=(t=t||1e3,e=e||void 0,(new Date).getTime());function i(a){var l=setTimeout((function(){var n=(new Date).getTime()-(o+r*t);"function"==typeof e?e():void 0!==e&&console.error("callback不是函數"),r++,i(t-n)}),a);return n=l}return i(t),n}((function(){i&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),o=(t=t||!1,r-n),i=Math.floor(o/10),a=Math.floor(o/1e3),l=Math.floor(a/60),c=Math.floor(l/60),s=Math.floor(c/24);c%=24,l%=60,a%=60,i%=100,t||(c+=24*s);return o<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(o)?console.error("countDownTime is NaN，找不到目標時間"):{day:s<10?"0"+s:s.toString(),dayTens:parseInt(s%100/10).toString(),dayUnits:parseInt(s%10).toString(),hour:c<10?"0"+c:c.toString(),hourTens:parseInt(c%100/10).toString(),hourUnits:parseInt(c%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:a<10?"0"+a:a.toString(),secTens:parseInt(a%100/10).toString(),secUnits:parseInt(a%10).toString(),micro:i<10?"0"+i:i.toString(),microTens:parseInt(i%100/10).toString(),microUnits:parseInt(i%10).toString()}}(e[a],c),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[a]).getTime()-n<=0){if("function"==typeof t)t(a);else if(Array.isArray(t))for(var r=t.length,o=0;r>0;)t[o](a),o++,r--;a++}}(),a>e.length-1&&(o&&o(),clearInterval(s))}),n)}var k={oneDay:E("2021/10/4 10:00",20),oneDayNine:E("2021/10/4 09:00",20),twoDays:E("2021/10/4 10:00",20,2)};!function(){if(!dailyChangeData)return!1;C(k.oneDay,[T,A,M],100,["countDownNumberObject",M,!0])}();function T(e){var t=document.querySelector("#dailyChange a");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",i=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",i="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var c="https://www.etmall.com.tw/i/"+e[r],d="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else c=e[o]?e[o]:"javascript:void(0)",d=e[i]?e[i]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=s(960,u,c,d),e.hasOwnProperty(l)&&(t.title=e[l])}(dailyChangeData[e],t)}function A(e){document.querySelector("#dailyChange a img").src="daily-item-"+(e+1)+".png"+"?10043"}function M(){var e=document.getElementById("dailyHourTens"),t=document.getElementById("dailyHourUnits"),n=document.getElementById("dailyMinTens"),r=document.getElementById("dailyMinUnits"),o=document.getElementById("dailySecTens"),i=document.getElementById("dailySecUnits");e.innerHTML=window.countDownNumberObject.hourTens,t.innerHTML=window.countDownNumberObject.hourUnits,n.innerHTML=window.countDownNumberObject.minTens,r.innerHTML=window.countDownNumberObject.minUnits,o.innerHTML=window.countDownNumberObject.secTens,i.innerHTML=window.countDownNumberObject.secUnits}setInterval((function(){var e,t;e=Array.apply(null,document.querySelectorAll("#w3m3Wrap a")),t=v(e.length,"siblingCheckW3M3AnimationIndex"),e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}),1e3);!function(){var e=document.getElementById("decorEventW3M3");window.addEventListener("scroll",(function(){var t=L(e,0,.5),n=100+-100*t;e.style.transform="translateX("+n+"%)";var r=1*t;e.style.transformOrigin="bottom",e.style.transform=" scale("+r+")",e.style.opacity=r}))}();function I(e){if(void 0===e)return console.error("沒有資料來源")}function D(e){return e?(u(e,"客製化設定請用物件表示"),e):{}}function N(e,t,n,r){r=void 0===r||r;var o,i,a=D(t);if(r&&I(e),"string"==typeof e||"number"==typeof e){var l=Number(e);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o={productNumber:l}}else{u(e,"資料格式不正確");var c=a.productNumberKey||"productNumber";if("string"==typeof e[c]||"number"==typeof e[c]){l=Number(e[c]);isNaN(l)||0===l?(console.log(e),console.error("銷編數值有誤")):o=e}else if(e[c])console.log(e),console.error("銷編格式錯誤");else{var s=a.nameKey||"name",d=a.textKey||"text",p=a.priceKey||"price";e[s]&&(e[d]||e[p])?o=e:(console.log(e),console.error("無銷編的話品名與價格/促銷字兩者都要填"))}}if(i=n,Array.isArray(i)||u(i)){var m=[];return n.forEach((function(e){"function"==typeof e?m.push(n(o,a)):console.error("callback並非函式")})),m}if("function"==typeof n)return n(o,a);console.error("callback並非函式")}function B(e,t){return N(e,t,_,!1)}function _(e,t){var n,r,o,i,a=t.productNumberKey||"productNumber",l=t.webLinkKey||"webLink",c=t.mobileLinkKey||"mobileLink",d=t.appLinkKey||"appLink",u=t.titleKey||"name";if(e[l])n=e[l],r=e[c]?e[c]:n,o=e[d]?e[d]:r;else if(e[a]){n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,o="etmall://open?pgid=1&gd="+e.productNumber}else console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");return i=e[u]||"",[s(960,o,n,r),i]}function x(e,t){return N(e,t,O,!1)}function O(e,t){var n,r=t.productNumberKey||"productNumber",o=t.imgSrcKey||"imgSrc",i=t.altKey||"name";if(e[o])n=e[o];else if(e[r]){var a=t.imgSizeBreakpoint||768,c=t.imgSizeWebSize||"XL",s=t.imgSizeMobileSize||"L",d="-1_"+(l(a)?c:s)+".jpg",u=e[r];n="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+d}else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");return[n,e[i]?e[i]:""]}function q(e,t){return N(e,t,P,!1)}function P(e,t){var n=t.productNumberKey||"productNumber",r=document.createElement("custom"),o=document.createElement("custom");return r.setAttribute("tag","GOOD_NAME"),r.setAttribute("goodid",e[n]),o.setAttribute("tag","GOOD_SALEPRC"),o.setAttribute("goodid",e[n]),[r,o]}function H(e,t){var n,r=D(t),o=r.namekey||"name",i=r.pricekey||"price",a=r.textkey||"text";if(n=e[o]||"",e[a])var l=!0;return[n,l?e[a]:Number.prototype.toLocaleString?isNaN(Number(e[i]))?e[i]||"":Number(e[i]).toLocaleString()||"":e[i]||""]}function z(e,t){var n,r,o=(t=t||{}).namekey||"name",i=t.pricekey||"price",a=t.textkey||"text",l=document.createElement("span"),c=document.createElement("span"),s=!1,d=void 0===t.isAutoSync?"auto":t.isAutoSync;if(!1===d||"false"===d||"none"===d)var u=void 0!==t.isNameAutoSync&&t.isNameAutoSync,p=void 0!==t.isPriceAutoSync&&t.isPriceAutoSync;return"auto"===d?(e[o]?(l.innerHTML=H(e,t)[0],n=l):n=q(e,t)[0],e[a]&&(s=!0),e[a]||e[i]?(c.innerHTML=H(e,t)[1],r=c):(c.appendChild(q(e,t)[1]),r=c)):"all"===d?(n=q(e,t)[0],c.appendChild(q(e,t)[1]),r=c):!1===d||"false"===d||"none"===d?(u?n=q(e,t)[0]:e[o]?(l.innerHTML=H(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),p?(c.appendChild(q(e,t)[1]),r=c):(e[a]&&(s=!0),e[a]||e[i]?(c.innerHTML=H(e,t)[1],r=c):console.error("設定手動填text/price卻沒有找到來源")),u||p||(e[o]?(l.innerHTML=H(e,t)[0],n=l):console.error("設定手動填name卻沒有找到來源"),e[a]&&(s=!0),e[a]||e[i]?(c.innerHTML=H(e,t)[1],r=c):console.error("設定手動填text/price卻沒有找到來源"))):console.error("isAutoSync設定錯誤"),[n,r,s]}function j(e,t){I(e);var n=(t=t||{}).outerTag||"li",r=void 0!==t.isLazyLoad&&t.isLazyLoad,o=void 0===t.isSlider||t.isSlider;if(o){var i=t.sliderClass,a=void 0===t.isSliderLazyLoad||t.isSliderLazyLoad,l=p(i,"swiper-slide","sliderClass格式不正確",!0);if(a){var c=t.sliderImgLazyLoadClass,s=t.sliderLazyLoadIndicatorClass,d=p(c,null,"sliderImgLazyLoadClass格式不正確",!0),u=p(s,null,"sliderLazyLoadIndicatorClass格式不正確",!0);["swiper-lazy"].forEach((function(e){d.push(e)})),["swiper-lazy-preloader","swiper-lazy-preloader-black"].forEach((function(e){u.push(e)}))}else if(r){var m=t.imgLazyLoadClass,f=t.lazyLoadIndicatorSrc||"1x1_low.png",y=p(m,null,"imgLazyLoadClass格式不正確",!0);y.push("lazyload")}}var g=document.createElement("img");if(a||r){var v=document.createElement("div");g.dataset.src=x(e,t)[0],g.alt=""}else g.src=x(e,t)[0],g.alt=x(e,t)[1];a?(d.forEach((function(e){g.classList.add(e)})),u.forEach((function(e){v.classList.add(e)}))):r&&(y.forEach((function(e){g.classList.add(e)})),g.src=f);var w=document.createElement(n),h=p(t.outerClass),b=o?l:h;Array.isArray(b)&&b.forEach((function(e){w.classList.add(e)}));var L,S,E=document.createElement("a");E.href=B(e,t)[0],E.title=B(e,t)[1],L=z(e,t)[0],S=z(e,t)[1];var C=z(e,t)[2],k=document.createElement("div"),T=document.createElement("div"),A=document.createElement("div"),M=document.createElement("div"),D=document.createElement("div"),N=document.createElement("div");if(k.classList.add("product"),k.classList.add("product--dynamic"),T.classList.add("product__block"),A.classList.add("product__img"),M.classList.add("product__text"),D.classList.add("product__name"),N.classList.add("product__price"),A.appendChild(g),a&&A.appendChild(v),D.appendChild(L),C)N.appendChild(S);else{var _=document.createElement("span");_.innerHTML="$",N.appendChild(_),N.appendChild(S)}if(M.appendChild(D),M.appendChild(N),T.appendChild(A),T.appendChild(M),E.appendChild(T),k.appendChild(E),w.appendChild(k),r)return w;return g.addEventListener("error",(function(){w.style.display="none"})),w}!function(){if(!dataDailySlider)return!1;C(k.oneDay,[U,R],100)}();var W=new f.a("#sliderDaily",{autoplay:{delay:2e3,disableOnInteraction:!1},speed:600});function U(e){dataDailySlider.length;var t=document.getElementById("sliderDaily"),n=t.querySelector(".swiper-wrapper"),r=t.querySelector(".swiper-notification");for(r&&t.removeChild(r);n.firstChild;)n.removeChild(n.firstChild);dataDailySlider[e].forEach((function(t,r){var o=j(t,{isSliderLazyLoad:!1});K(o,e,r),n.appendChild(o)})),W.update()}function R(e){if(!dataDailySlider)return!1;var t=dataDailySlider.length-e==1,n=Array.apply(null,document.querySelectorAll(".daily--next"));if(n.forEach((function(e){e.firstChild&&e.removeChild(e.firstChild)})),t){if(t)return}else n.forEach((function(t,n){var r=j(dataDailySlider[e+n+1][0],{outerTag:"div",isSlider:!1});K(r,e,n,!0),t.appendChild(r)})),Array.apply(null,document.querySelectorAll(".daily--next a")).forEach((function(e){e.href="javascript:void(0)"}))}function K(e,t,n,r){n=n||0,r=r||!1;var o=e.querySelector(".product__block"),i=(o.querySelector(".product__text"),document.createElement("div")),a=document.createElement("span"),l=document.createElement("span"),c=document.createElement("span");i.classList.add("product__intro"),a.classList.add("intro--month"),l.innerHTML="/",c.classList.add("intro--date"),i.appendChild(a),i.appendChild(l),i.appendChild(c),r?(V(a,c,n+1),o.insertBefore(i,o.firstChild)):(V(a,c),o.insertBefore(i,o.firstChild))}function V(e,t,n){var r,o,i,a=new Date,l=(r=a,o=n=n||0,(i=new Date(r)).setDate(r.getDate()+o),i),c=l.getMonth()+1,s=l.getDate();e.innerHTML=c,t.innerHTML=s<10?"0"+s:s}(function(e,t){if("string"==typeof e)var n=new Date(e);else"object"==typeof e&&(n=e);if(!d(n))return(t=document.querySelector(t)).style.display="none",!0})("2021/9/1 10:00:00","#bnSlider")||i(window.addEventListener("load",Y),Y);function Y(){return new f.a("#sliderBn",{autoplay:{delay:3e3,disableOnInteraction:!1,reverseDirection:!0},initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBn .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,pagination:{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:3,spaceBetween:"5%",speed:600})}!function(){window.gameStats={growMin:3,growMax:5,checkMin:5,checkMax:20};var e,t=document.getElementById("gameW1M1Wrap");window.clickAutoCount=0,t.addEventListener("click",(function(){var n,r,o,i,a=t.querySelector(".lose__wrap"),l=t.querySelector(".wait__wrap");a.classList.remove("active"),l.classList.remove("active"),0===window.clickAutoCount?(function(e,t){var n=document.getElementById("pressCheckBox");n.style.willChange="left, width",n.style.left=e+"%",n.style.width=t-e+"%",n.classList.add("active")}((e=function(e,t){t=t||100;var n=g(0,100-(e=e||0)),r=g(n,n+t);r-n<e&&(r=n+e);r>100&&(r=100);return[n,r]}(gameStats.checkMin,gameStats.checkMax))[0],e[1]),window.countStart=setInterval((function(){var e,t,n=g(gameStats.growMin,gameStats.growMax);if(window.clickAutoCount+=n,e=document.getElementById("pressCountBox"),t=clickAutoCount>=100?100:clickAutoCount,pressCheckBox.style.willChange="width",e.style.width=t+"%",window.clickAutoCount>100)return clearInterval(countStart),X(),window.clickAutoCount=0,!1}),100)):(clearInterval(countStart),n=window.clickAutoCount,r=e[0],o=e[1],i=o,n>r&&n<=i?function(){var e=document.getElementById("gameW1M1Wrap");e.style.pointerEvents="none",setTimeout((function(){var t=e.querySelector(".win__wrap"),n=e.querySelector(".wait__wrap");t.classList.add("active"),n.classList.add("active"),setTimeout((function(){document.querySelector("#gamePopupWrap").classList.add("active"),setTimeout((function(){var e,t;e=Array.apply(null,document.querySelectorAll("#gamePopupWrap .popup__block a")),t=Math.floor(Math.random()*e.length),e[t].style.display="block"}),900)}),1100)}),150)}():X(),window.clickAutoCount=0)}))}();function X(){var e=document.getElementById("gameW1M1Wrap");e.style.pointerEvents="none",setTimeout((function(){var t=e.querySelector(".lose__wrap"),n=e.querySelector(".lose__wrap img"),r=e.querySelector(".wait__wrap");t.classList.add("active"),n.src="",n.src="game-animation-3.png",r.classList.add("active")}),150),setTimeout((function(){e.style.pointerEvents="auto"}),2e3)}!function(){if(!linkTime&&!linkData)return!1;var e=(new Date).getDay();if(e>0&&e<6){document.getElementById("gameW1M2").style.display="none",C(linkTime,[F,G],100)}}();function F(e){var t=document.getElementById("gameChangeAnchor"),n=linkData[e].webLink,r=linkData[e].mobileLink,o=linkData[e].appLink;t.href=s(960,o,n,r)}function G(e){linkData[e].toggleClass&&document.getElementById("gameChange").classList.toggle("close");var t=document.querySelector("#gameChange img"),n=linkData[e].changeImg;t.src=n?"game-"+n+".png":"game-0.png"}var J;J=document.querySelector("#sliderDynamicHalf .swiper-wrapper"),dataDynamicHalf.forEach((function(e){var t=j(e);J.appendChild(t)})),new f.a("#sliderDynamicHalf",{autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{960:{slidesPerView:3,spaceBetween:10}},lazy:{loadPrevNext:!0},slidesPerView:2,spaceBetween:"1%",speed:600});!function(){var e=document.getElementById("decoDynamicSliderHalf"),t=e.querySelector(".decoration__dynamic-slider"),n=e.querySelector(".decoration__dynamic-slider2");window.addEventListener("scroll",(function(){var e=L(t,0,.5),r=100-100*e,o=e;t.style.transform="translateY("+r+"%) scale("+o+")";var i=L(n,0,.5),a=100-100*i,l=i;n.style.transform="translateY("+a+"%) scale("+l+")"}))}();(function(e,t){if("string"==typeof e)var n=new Date(e);else"object"==typeof e&&(n=e);if(d(n))return(t=document.querySelector(t)).style.display="none",!0})("2021/11/1 00:00:00","#bnSpecial")||i(window.addEventListener("load",Q),Q);function Q(){return new f.a("#sliderSpecial",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,lazy:{loadPrevNext:!0},loop:!0,slidesPerView:3,speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}document.body.classList.add("js-loading"),(new o.a).init()}]);