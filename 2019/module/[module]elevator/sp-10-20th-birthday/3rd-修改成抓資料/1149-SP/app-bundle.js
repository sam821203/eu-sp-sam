!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),lazyload();!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,i=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1260&&t?"none":"block"}i.id="goTop",i.classList.add("go-top"),i.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(i),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout(function(){window.scrollTo(0,window.scrollY-100),n()},0))},window.addEventListener("scroll",function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")}),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",function(e){var t=$("a[name="+this.getAttribute("href").split("#")[1]+"]");t.length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top},500))});var r,l,d,a=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,i=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),a?i.style.opacity=1:a=!0}r=document.body,l=document.createElement("div"),d=document.createElement("div"),l.id="progressBarWrap",l.style.opacity=0,l.style.position="fixed",l.style.zIndex=200,l.style.top=0,l.style.backgroundColor="rgba(0, 0, 0, 0.3)",l.style.width="100%",l.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",l.appendChild(d),r.insertBefore(l,r.firstChild),s()&&(a=!0),document.addEventListener("DOMContentLoaded",function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach(function(e,n){var i=e.parentNode;"progressBarWrap"===i.id?++t>1&&i.parentNode.removeChild(i):i.parentNode.removeChild(i)})});var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",function(){u?u(c):c()}),window.addEventListener("scroll",function(){u?u(c):c()})}();function i(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function o(){if(-1!=navigator.appName.indexOf("Internet Explorer")&&-1==navigator.appVersion.indexOf("MSIE 1"))return!0}function r(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function l(e,t,n,i){return function(e,t,n){if(document.body.clientWidth>=e){if("function"==typeof t)return t()}else if("function"==typeof n)return n()}(e,function(){return r(t,n)},function(){return r(t,i)})}i(window.addEventListener("load",d),d);function d(){new Swiper("#sliderSmall",{autoplay:o()?2500:{delay:2500,disableOnInteraction:!1},calculateHeight:!0,centeredSlides:!0,effect:"fade",fadeEffect:{crossFade:!0},grabCursor:!0,init:r("#sliderSmall"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSmall .swiper-slide").length),loop:!0,slidesPerView:1,speed:1e3})}i(window.addEventListener("load",a),a);function a(){new Swiper("#sliderGoods",{autoplay:o()?3e3:{delay:3e3,disableOnInteraction:!1},calculateHeight:!0,effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,loop:!0,speed:1e3})}i(window.addEventListener("load",s),s);function s(){new Swiper("#sliderGoodsFlip",{autoplay:o()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,loop:!0,navigation:{nextEl:"#sliderGoodsFlipNext",prevEl:"#sliderGoodsFlipPrev"},speed:600})}i(window.addEventListener("load",c),c);function c(){new Swiper("#sliderSpecial",{autoplay:o()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:r("#sliderSpecial"),loop:!0,pagination:o()?"#sliderSpecialPager":{el:"#sliderSpecialPager",type:"bullets",clickable:!0},speed:600})}i(window.addEventListener("load",u),u);function u(){new Swiper("#sliderHot",{autoplay:o()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,centeredSlides:!0,grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderHot .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderHotNext",prevEl:"#sliderHotPrev"},pagination:o()?"#sliderHotPager":{el:"#sliderHotPager",type:"bullets",clickable:!0},paginationClickable:!0,slidesPerView:3,slidesOffsetBefore:-150,offsetPxBefore:-150,speed:600,breakpoints:{959:{slidesPerView:2,slidesOffsetBefore:0}}})}i(window.addEventListener("load",p),p);function p(){if(l(768,"#sliderBank",4,2))new Swiper("#sliderBank",{autoplay:o()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,navigation:{nextEl:"#sliderBankNext",prevEl:"#sliderBankPrev"},pagination:o()?"#sliderBankPager":{el:"#sliderBankPager",type:"bullets",clickable:!0},slidesPerView:4,speed:600,breakpoints:{767:{slidesPerView:2}}});else{var e=document.getElementById("sliderBankNext"),t=document.getElementById("sliderBankPrev"),n=document.getElementById("sliderBankPager");e.style.display="none",t.style.display="none",n.style.display="none"}}var f;i(window.addEventListener("load",w),w);function w(){if(l(768,"#sliderEvent",2,1))new Swiper("#sliderEvent",{autoplay:o()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,loop:!0,navigation:{nextEl:"#sliderBnNext",prevEl:"#sliderBnPrev"},pagination:o()?"#sliderBnPager":{el:"#sliderBnPager",type:"bullets",clickable:!0},slidesPerView:2,speed:500,breakpoints:{767:{slidesPerView:1}}})}$(function(){(new WOW).init()}),window._mfq=window._mfq||[],(f=document.createElement("script")).type="text/javascript",f.async=!0,f.src="//cdn.mouseflow.com/projects/be27966d-4e5c-41ef-a80c-0c0682057c0a.js",document.getElementsByTagName("head")[0].appendChild(f)}]);