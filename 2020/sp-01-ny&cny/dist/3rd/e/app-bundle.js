!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function r(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function o(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}!function(){if(!r())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,a=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}a.id="goTop",a.classList.add("go-top"),a.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(a),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var o,i,d,s=!1;function l(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,a=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=l(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),s?a.style.opacity=1:s=!0}o=document.body,i=document.createElement("div"),d=document.createElement("div"),i.id="progressBarWrap",i.style.opacity=0,i.style.position="fixed",i.style.zIndex=200,i.style.top=0,i.style.backgroundColor="rgba(0, 0, 0, 0.3)",i.style.width="100%",i.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",i.appendChild(d),o.insertBefore(i,o.firstChild),l()&&(s=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var a=e.parentNode;"progressBarWrap"===a.id?++t>1&&a.parentNode.removeChild(a):a.parentNode.removeChild(a)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))})(),a(window.addEventListener("load",i),i);function i(){new Swiper("#sliderSmall",{autoplay:r()?2500:{delay:2500,disableOnInteraction:!1},calculateHeight:!0,centeredSlides:!0,effect:"fade",fadeEffect:{crossFade:!0},grabCursor:!0,init:o("#sliderSmall"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSmall .swiper-slide").length),loop:!0,slidesPerView:1,speed:1e3})}a(window.addEventListener("load",d),d);function d(){new Swiper("#sliderGoods",{autoplay:r()?3e3:{delay:3e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,loop:!0,speed:1e3})}a(window.addEventListener("load",s),s);function s(){new Swiper("#sliderSpecial",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:o("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,speed:600})}var l,c,u,p;l=document.getElementById("productWrapCountdown"),c=new Swiper("#sliderCountdown",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,navigation:{nextEl:"#sliderCountdownNext",prevEl:"#sliderCountdownPrev"},observer:!0,observeParents:!0,observeSlideChildren:!0,slidesPerView:3,spaceBetween:"1%",speed:600}),function(){r(0,"now");var e=0;l.style.opacity=0;for(var t=0;t<breakTime.length-1;t++)o();var n=setInterval((function(){o()}),1e3);function r(e,t){for(var n=0;n<productData[e].length;n++){if("notyet"===t)var r='<li class="swiper-slide"><div class="product product--just-standby"><a href="javascript:void(0)" title="'+productData[e].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else if("over"===t)r='<li class="swiper-slide"><div class="product product--over"><a href="javascript:void(0)" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else{var o=a("Webview","Web Browser");"Web Browser"===o?r='<li class="swiper-slide"><div class="product product--over"><a href="'+productData[e][n].link+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>":"Webview"===o&&(r='<li class="swiper-slide"><div class="product product--now"><a href="'+productData[e][n].appLink+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>")}l.innerHTML+=r}}function o(){if(!breakTime&&!productData)return!1;var t=(new Date).getTime(),a=new Date(breakTime[e]).getTime()-t,o=Math.floor(a/1e3),i=Math.floor(o/60),d=Math.floor(i/60),s=Math.floor(d/24);d%=24,i%=60,o%=60,d+=24*s,a<=0&&(s=0,d=0,i=0,o=0,function(e,t){for(;l.firstChild;)l.removeChild(l.firstChild);if(r(e-1),e>=t.length){for(clearInterval(n);l.firstChild;)l.removeChild(l.firstChild);r(t.length-1)}c.updateSlides(),c.updateProgress(),c.autoplay.start()}(++e,breakTime)),function(e,t,n,a){var r=document.getElementById("timerCountdown"),o=(t>99?'<span class="date date--hour date--out-range">99':'<span class="date date--hour">'+("0"+t).slice(-2))+'</span><span>:</span><span class="date date--min">'+("0"+n).slice(-2)+'</span><span>:</span><span class="date date--seconds">'+("0"+a).slice(-2)+"</span>";r.innerHTML=o}(0,d,i,o),l.style.opacity=1}l.style.opacity=0}(),p=document.getElementById("dataCountdown"),u=p,document.addEventListener("DOMContentLoaded",(function(){u.parentElement.removeChild(u)}));(new WOW).init()}]);