!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function r(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function i(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,l,c=!1;function d(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=d(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),c?o.style.opacity=1:c=!0}i=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),i.insertBefore(a,i.firstChild),d()&&(c=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))}();function a(e,t){document.addEventListener("scroll",(function(){e.style.transform="translate3d(0,"+i()*parseFloat(t)+"px,0)"}))}var l=document.getElementById("decorationBottom");a(l,.09);var c;(function e(){var t=(d=new Date,s=d.getMonth(),u=d.getDate(),f=d.getDay(),m=d.getHours(),p=d.getMinutes(),y=d.getSeconds(),v="AM","12"==typeof l?(0==m&&(m=12),m>12&&(m-=12,v="PM")):m>12&&(v="PM"),m=m<10?"0"+m:m,p=p<10?"0"+p:p,y=y<10?"0"+y:y,{month:s+1,day:u,week:(c||["Sun","Mon","Tue","Wed","Thu","Fri","Sat"])[f],hour:m,min:p,sec:y,session:v}),n=document.getElementById("clockHour"),o=document.getElementById("clockMin"),r=document.getElementById("clockMonth"),i=document.getElementById("clockDay"),a=document.getElementById("clockWeek");var l,c,d,s,u,f,m,p,y,v;n.innerHTML=t.hour,o.innerHTML=t.min,r.innerHTML=t.month,i.innerHTML=t.day,a.innerHTML=t.week,setTimeout(e,1e3)})(),c=document.getElementById("dynamicClock"),function(e,t){var n=0,o=0,r=(t=t||500,null);if(n==o)switch(typeof e){case"function":var i=e;break;case"object":var a=e;"function"==typeof e.callBack&&e.callBack()}function l(){if(o=document.documentElement.scrollTop||document.body.scrollTop,n==o){if(i)return i();if(a&&"function"==typeof a.callBack)return e.callBack()}}a&&"function"==typeof a.callInit&&a.callInit(),document.onscroll=function(){a&&"function"==typeof a.callStartScroll&&a.callStartScroll(),o-n<0?a&&"function"==typeof a.callScrollDown&&a.callScrollDown():o-n>0&&a&&"function"==typeof a.callScrollUp&&a.callScrollUp(),clearTimeout(r),r=setTimeout(l,t),n=document.documentElement.scrollTop||document.body.scrollTop}}({callStartScroll:function(){c.classList.remove("active")},callBack:function(){c.classList.add("active")}});var d,s;d=window.addEventListener("load",u),s=u,/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent);function u(){new Swiper("#sliderSpecial",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:r("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},speed:600})}var f=Array.apply(null,document.querySelectorAll(".decoration--depart"));f.shift();var m=[{xRadio:-.58,yMax:400},{xRadio:-.65,yMax:240},{xRadio:.8,yMax:280},{xRadio:-.88,yMax:235},{xRadio:-.95,yMax:350},{xRadio:-.88,yMax:170},{xRadio:.88,yMax:135}],p=window.innerWidth/960,y=p>1?1:p;document.addEventListener("scroll",(function(){var e=i()+135;f.forEach((function(t,n){var o=function(e){for(var t=e.offsetTop,n=e.offsetParent;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t}(t);if(t.classList.remove("active"),e>o&&e<o+m[n].yMax){t.classList.add("active");var r=(e-o)*y,i=r*m[n].xRadio;t.style.transform="translate("+i+"px,"+r+"px)"}}))}))}]);