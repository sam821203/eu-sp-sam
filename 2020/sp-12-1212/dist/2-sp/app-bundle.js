!function(e){function t(t){for(var o,d,a=t[0],l=t[1],s=t[2],u=0,p=[];u<a.length;u++)d=a[u],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&p.push(r[d][0]),r[d]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},r={0:0},i=[];function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=l;i.push([2,1]),n()}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,d,a,l=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),l?o.style.opacity=1:l=!0}i=document.body,d=document.createElement("div"),a=document.createElement("div"),d.id="progressBarWrap",d.style.opacity=0,d.style.position="fixed",d.style.zIndex=200,d.style.top=0,d.style.backgroundColor="rgba(0, 0, 0, 0.3)",d.style.width="100%",d.style.height="0.5vh",a.style.backgroundColor="#cc1e05",a.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",a.style.height="100%",a.id="progressBar",d.appendChild(a),i.insertBefore(d,i.firstChild),s()&&(l=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))}();var r,i,d=n(0),a=n.n(d);r=window.addEventListener("load",l),i=l,/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);function l(){new a.a("#sliderGoodsFlip",{autoplay:{delay:2e3,disableOnInteraction:!1},effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderGoodsFlip .swiper-slide").length),loop:!0,speed:600})}}]);