!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function a(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",a),window.addEventListener("resize",a),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t=$("a[name="+this.getAttribute("href").split("#")[1]+"]");t.length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top},500))}));var i,r,d,l=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),l?o.style.opacity=1:l=!0}i=document.body,r=document.createElement("div"),d=document.createElement("div"),r.id="progressBarWrap",r.style.opacity=0,r.style.position="fixed",r.style.zIndex=200,r.style.top=0,r.style.backgroundColor="rgba(0, 0, 0, 0.3)",r.style.width="100%",r.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",r.appendChild(d),i.insertBefore(r,i.firstChild),c()&&(l=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))}();function o(e,t,n){if(document.body.clientWidth>=e){if("function"==typeof t)return t()}else if("function"==typeof n)return n()}function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function i(){if(-1!=navigator.appName.indexOf("Internet Explorer")&&-1==navigator.appVersion.indexOf("MSIE 1"))return!0}function r(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function d(e,t){c(e,t)}function l(e,t){!function(e,t){e.style.marginTop=-100*t+"px",document.addEventListener("scroll",(function(){e.style.top=s()*parseFloat(t)+"px"}))}(e,t)}function c(e,t){document.addEventListener("scroll",(function(){e.style.top=s()*parseFloat(t)+"px"}))}function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function u(){var e=document.getElementById("bgDecoration");new Parallax(e)}requestAnimationFrame((function(){o(960,u,null),window.addEventListener("resize",(function(){o(960,u,null)}))})),a(window.addEventListener("load",p),p);function p(){new Swiper("#sliderSmall",{autoplay:i()?2500:{delay:2500,disableOnInteraction:!1},calculateHeight:!0,centeredSlides:!0,effect:"fade",fadeEffect:{crossFade:!0},grabCursor:!0,init:r("#sliderSmall"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSmall .swiper-slide").length),loop:!0,slidesPerView:1,speed:1e3})}a(window.addEventListener("load",m),m);function m(){new Swiper("#sliderGoodsFlip",{autoplay:i()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderGoodsFlip .swiper-slide").length),loop:!0,speed:600})}var f;(function(e,t,n){function o(e,n){n=n||"animation";for(var o,a=document.getElementsByClassName(e),i=(o=a.length,Math.floor(Math.random()*o)),r=0;r<a.length;r++)a[r].classList.remove(n);console.log(t),a[i].classList.add(n)}t=t||160,n=n||"animation",setInterval((function(){o(e,n)}),t)})("promo__box",2e3,"bounce"),f=1213,document.body.clientWidth>=f&&a(window.addEventListener("load",v),v);function v(){new Swiper("#sliderScrollX",{autoplay:i()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,loop:!0,slidesPerGroup:5,slidesPerView:5,speed:600})}!function(){var e=document.getElementById("tabBox").querySelectorAll(".tab__item"),t=document.getElementById("contentBlock").querySelectorAll(".content__box"),n=(new Date).getDate()-1;if(e.length!==t.length)return console.error("Tab Item數量與Content Box數量不符"),!1;e.forEach((function(o,a){a===n&&(g(e,n),g(t,a)),o.addEventListener("click",(function(){g(e,a),g(t,a)}))}))}();function g(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}var w,y,h,b;w=document.getElementById("productWrapCountdown"),y=new Swiper("#sliderCountdown",{autoplay:i()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,navigation:{nextEl:"#sliderCountdownNext",prevEl:"#sliderCountdownPrev"},observer:!0,observeParents:!0,observeSlideChildren:!0,slidesPerView:3,spaceBetween:"2%",speed:600}),function(){o(0,"now");var e=0;w.style.opacity=0;for(var t=0;t<breakTime.length-1;t++)i();var n=setInterval((function(){i()}),1e3);function o(e,t){for(var n=0;n<productData[e].length;n++){if("notyet"===t)var o='<li class="swiper-slide"><div class="product product--just-standby"><a href="javascript:void(0)" title="'+productData[e].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else if("over"===t)o='<li class="swiper-slide"><div class="product product--over"><a href="javascript:void(0)" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else{var i=a("Webview","Web Browser");"Web Browser"===i?o='<li class="swiper-slide"><div class="product product--over"><a href="'+productData[e][n].link+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>":"Webview"===i&&(o='<li class="swiper-slide"><div class="product product--now"><a href="'+productData[e][n].appLink+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>")}w.innerHTML+=o}}function i(){if(!breakTime&&!productData)return!1;var t=(new Date).getTime(),a=new Date(breakTime[e]).getTime()-t,i=Math.floor(a/1e3),r=Math.floor(i/60),d=Math.floor(r/60),l=Math.floor(d/24);d%=24,r%=60,i%=60,d+=24*l,a<=0&&(l=0,d=0,r=0,i=0,function(e,t){for(;w.firstChild;)w.removeChild(w.firstChild);if(o(e-1),e>=t.length){for(clearInterval(n);w.firstChild;)w.removeChild(w.firstChild);o(t.length-1)}y.updateSlides(),y.updateProgress(),y.autoplay.start()}(++e,breakTime)),function(e,t,n,o){var a=document.getElementById("timerCountdown"),i=(t>99?'<span class="date date--hour date--out-range">99':'<span class="date date--hour">'+("0"+t).slice(-2))+'</span><span>:</span><span class="date date--min">'+("0"+n).slice(-2)+'</span><span>:</span><span class="date date--seconds">'+("0"+o).slice(-2)+"</span>";a.innerHTML=i}(0,d,r,i),w.style.opacity=1}w.style.opacity=0}(),b=document.getElementById("dataCountdown"),h=b,document.addEventListener("DOMContentLoaded",(function(){h.parentElement.removeChild(h)}));a(window.addEventListener("load",E),E);function E(){new Swiper("#sliderSpecial",{autoplay:i()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:r("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,pagination:i()?"#sliderSpecialPager":{el:"#sliderSpecialPager",type:"bullets",clickable:!0},speed:600})}var _=document.getElementById("parallaxBg"),L=document.getElementById("heroBlock"),S=document.getElementById("ufoMiddle"),B=document.getElementById("ufoRight");window.addEventListener("load",(function(){l(_,.2),d(L,.25),d(S,.6),d(B,.45)}))}]);