!function(e){function t(t){for(var o,a,l=t[0],d=t[1],s=t[2],u=0,p=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var d=n[l];0!==i[d]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={0:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=d;r.push([3,1]),n()}([function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function i(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function r(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function a(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function l(e,t,n,o){var i=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:function(e){return document.body.clientWidth>=e}(e)?n:o;return o||(o=n),i}!function(){if(!r())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!i&&("string"==typeof i()?parseInt(i(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),n(1),lazyload();!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function i(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",i),window.addEventListener("resize",i),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var r,a,l,d=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?o.style.opacity=1:d=!0}r=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),r.insertBefore(a,r.firstChild),s()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))}();function d(e,t){document.addEventListener("scroll",(function(){e.style.top=s()*parseFloat(t)+"px"}))}function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}o(window.addEventListener("load",c),c);function c(){new Swiper("#sliderSpecial",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:a("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},speed:600})}o(window.addEventListener("load",u),u);function u(){new Swiper("#slider20offGoods",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},loop:!0,pagination:r()?"#slider20offGoodsPager":{el:"#slider20offGoodsPager",type:"bullets",clickable:!0},slidesPerView:2.4,centeredSlides:!0,slidesOffsetBefore:40,spaceBetween:5,speed:600,preloadImages:!1,lazy:{loadPrevNext:!0}})}!function(){if("undefined"==typeof discount20offData)return!1;for(var e=document.getElementById("getdiscount20offData"),t="",n=0;n<discount20offData.length;n++){var o;o='<li class="swiper-slide slider__20off__item">',o+='<a class="discount20off__href" href="" title="'+discount20offData[n].name+'">',o+='<img class="swiper-lazy" data-src="'+discount20offData[n].productImg+'" alt="'+discount20offData[n].name+'">',o+='<div class="swiper-lazy-paloader"></div>',o+='<p class="good__title__20off">'+discount20offData[n].name+"</p>",o+='<span class="price__init">$</span><span class="coupon_price">'+discount20offData[n].discount+"</span>",t+=o+="</a></li>"}e.innerHTML=t;var i=document.querySelectorAll(".discount20off__href");for(n=0;n<discount20offData.length;n++)p(discount20offData[n],i[n])}();function p(e,t){t=t||{};if((e=e||{}).hasOwnProperty("productNumber")&&"number"==typeof e.productNumber){var n="https://www.etmall.com.tw/i/"+e.productNumber,o="https://m.etmall.com.tw/Product/"+e.productNumber,i="etmall://open?pgid=1&gd="+e.productNumber;t.href=l(960,i,n,o)}else t.href=l(960,e.appLink,e.webLink,e.mobileLink);t.title=e.name}!function(){var e=document.getElementById("tabBox").querySelectorAll(".tab__item"),t=document.getElementById("contentBlock").querySelectorAll(".content__box"),n=(new Date).getDate()-1;if(e.length!==t.length)return console.error("Tab Item數量與Content Box數量不符"),!1;e.forEach((function(o,i){function r(){f(e,i),f(t,i),"1"==i?new Swiper("#sliderTab_2",{calculateHeight:!0,grabCursor:!0,slidesPerView:3.2,slidesPerColumn:2,spaceBetween:5,pagination:{el:"#sliderTabPager_2",clickable:!0}}):"2"==i&&new Swiper("#sliderTab_3",{calculateHeight:!0,grabCursor:!0,slidesPerView:3.2,slidesPerColumn:2,spaceBetween:5,pagination:{el:"#sliderTabPager_3",clickable:!0}})}i===n&&(f(e,n),f(t,i)),o.addEventListener?o.addEventListener("click",r,!1):o.attachEvent&&o.addEventListener("onclick",r)}))}();function f(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}o(window.addEventListener("load",m),m);function m(){new Swiper("#sliderTab",{calculateHeight:!0,grabCursor:!0,slidesPerView:3.2,slidesPerColumn:2,spaceBetween:5,pagination:{el:"#sliderTabPager",clickable:!0}})}o(window.addEventListener("load",w),w);function w(){new Swiper("#sliderBnEventHot",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,loop:!0,pagination:r()?"#sliderBnEventHotPager":{el:"#sliderBnEventHotPager",type:"bullets",clickable:!0},slidesPerView:2,speed:600})}var g=document.getElementById("decorationPaper");function v(){var e=document.body.offsetHeight,t=document.getElementById("animateWrapHt"),n=t.querySelector(".parallax__background");window.scrollY>=828&&window.scrollY<=5274?(t.style.height=e+"px",t.style.position="fixed",setInterval(n.classList.add("top--0")),console.log(n.style.top)):(t.style.height="auto",t.style.position="absolute",setInterval(n.classList.remove("top--0")))}window.addEventListener("load",(function(){d(g,.5)})),window.addEventListener("load",v),window.addEventListener("resize",v),window.addEventListener("scroll",v)}]);