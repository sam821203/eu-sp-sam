!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function r(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function i(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}!function(){if(!r())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,d,l=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),l?o.style.opacity=1:l=!0}i=document.body,a=document.createElement("div"),d=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",a.appendChild(d),i.insertBefore(a,i.firstChild),c()&&(l=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))})(),a(linkTime,(function(e){if(!linkData)return!1;var t=document.getElementById("promoAnchor2"),n=linkData[e].webLink,o=linkData[e].mobileLink,r=linkData[e].appLink;t.href=function(e,t,n,o){var r=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:function(e){return document.body.clientWidth>=e}(e)?n:o;o||(o=n);return r}(960,r,n,o)})),a(imgTime,(function(e){if(!imgData)return!1;document.getElementById("promoImgSpecial6").src=imgData[e]}));function a(e,t){for(var n=0,o=0;o<e.length-1;o++)i();var r=setInterval((function(){i(),n>e.length-1&&clearInterval(r)}),1e3);function i(){if(!e)return!1;var o=(new Date).getTime();new Date(e[n]).getTime()-o<=0&&(t(n),n++)}}var d,l;d=window.addEventListener("load",c),l=c,/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);function c(){new Swiper("#sliderSpecial",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:i("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,speed:600})}}]);