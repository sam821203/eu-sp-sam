!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(0);function n(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function r(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function i(e,t){t=t||1;var o=e+" .swiper-slide";return document.querySelectorAll(o).length>t}function d(e,t,o,n){var r=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:function(e){return document.body.clientWidth>=e}(e)?o:n;return n||(n=o),r}!function(){if(!r())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!n&&("string"==typeof n()?parseInt(n(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,o,n=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),o=document.getElementById("goTop");o.style.display=e>=1213&&t?"none":"block"}n.id="goTop",n.classList.add("go-top"),n.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(n),t=document.getElementById("goTop"),o=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),o()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",o),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,d,a,l=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function u(){var e,t,o,n=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,o=document.body.clientWidth,parseInt(e/t*o)+"px"),l?n.style.opacity=1:l=!0}i=document.body,d=document.createElement("div"),a=document.createElement("div"),d.id="progressBarWrap",d.style.opacity=0,d.style.position="fixed",d.style.zIndex=200,d.style.top=0,d.style.backgroundColor="rgba(0, 0, 0, 0.3)",d.style.width="100%",d.style.height="0.5vh",a.style.backgroundColor="#cc1e05",a.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",a.style.height="100%",a.id="progressBar",d.appendChild(a),i.insertBefore(d,i.firstChild),c()&&(l=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,o){var n=e.parentNode;"progressBarWrap"===n.id?++t>1&&n.parentNode.removeChild(n):n.parentNode.removeChild(n)}))}));var s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){s?s(u):u()})),window.addEventListener("scroll",(function(){s?s(u):u()}))}();function a(e,t){l(e,t)}function l(e,t){document.addEventListener("scroll",(function(){e.style.transform="translate3d(0,"+c()*parseFloat(t)+"px,0)"}))}function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}!function(){if("undefined"==typeof dailyData)return!1;var e,t=document.querySelector("#goodsHero a"),o=document.querySelector("#goodsHero img"),n=document.querySelectorAll("#goodsPromo a"),r=document.querySelectorAll("#goodsPromo img"),i=document.querySelectorAll("#goodsPromo .item__name"),d=document.querySelectorAll("#goodsPromo .price--pre"),a=document.querySelectorAll("#goodsPromo .date--pre"),l=document.querySelectorAll("#goodsPromo .date--post"),c=(new Date).getDate(),s=(new Date).getHours();if(c<11||c>25)return;e=s>10?c-11:c-11-1;u(dailyData[e],t),o.src="daily-hero-"+(e+1)+".png";for(var m=0;m<2;m++){var p=dailyData[e+1+m];u(p,n[m]),r[m].src="product-"+(e+m+2)+".png",r[m].alt=p.name,i[m].innerHTML=p.name,d[m].innerHTML=p.prePrice,a[m].innerHTML=p.date,l[m].innerHTML=p.postText}}();function u(e,t){t=t||{};if((e=e||{}).hasOwnProperty("productNumber")&&"number"==typeof e.productNumber){var o="https://www.etmall.com.tw/i/"+e.productNumber,n="https://m.etmall.com.tw/Product/"+e.productNumber,r="etmall://open?pgid=1&gd="+e.productNumber;t.href=d(960,r,o,n)}else t.href=d(960,e.appLink,e.webLink,e.mobileLink);t.title=e.name}var s,m;s=window.addEventListener("load",p),m=p,/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);function p(){new Swiper("#sliderSpecial",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:i("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,speed:600})}var f=document.getElementById("parallaxBg"),g=document.getElementById("parallaxBgWeb"),y=document.getElementById("heroTitle"),w=document.getElementById("goodsHero"),v=document.getElementById("decorationHand"),h=document.getElementById("decorationPaper");window.addEventListener("load",(function(){a(f,.1),a(g,.2),a(y,.5),a(w,.5),a(v,.3),a(h,.4)}))}]);