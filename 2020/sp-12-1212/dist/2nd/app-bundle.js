!function(e){function t(t){for(var i,o,l=t[0],d=t[1],s=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var d=n[l];0!==r[d]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={0:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=d;a.push([4,1]),n()}([,,function(e,t,n){},function(e,t){Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&isNaN(e)}},function(e,t,n){"use strict";n.r(t);n(2);var i=n(1),r=n.n(i);n(3);function a(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function l(e){return document.body.clientWidth>=e}function d(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function s(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function c(e,t,n,i){var r=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:l(e)?n:i;return i||(i=n),r}function u(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function p(e){return(new Date).getMonth()===Number(e)-1}!function(){if(!d())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,i=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}i.id="goTop",i.classList.add("go-top"),i.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(i),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var a,o,l,d=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,i=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?i.style.opacity=1:d=!0}a=document.body,o=document.createElement("div"),l=document.createElement("div"),o.id="progressBarWrap",o.style.opacity=0,o.style.position="fixed",o.style.zIndex=200,o.style.top=0,o.style.backgroundColor="rgba(0, 0, 0, 0.3)",o.style.width="100%",o.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",o.appendChild(l),a.insertBefore(o,a.firstChild),s()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var i=e.parentNode;"progressBarWrap"===i.id?++t>1&&i.parentNode.removeChild(i):i.parentNode.removeChild(i)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))}();var m=n(0),y=n.n(m);function w(e,t,n){var i=new Date(e),r=new Date(e).getTime(),a=[],o=0;for(n=n||1;o<t;){var l=i.setTime(r+parseInt(o*n*24*60*60*1e3));a.push(new Date(l)),o++}return a}function f(e,t,n,i,r){if(!e)return!1;var a=!1,o=0;n=n||1e3;if(Array.isArray(i)){if("string"===(i[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof i[1])var l=i[1];var d=i[2]||!1;a=!0}var s,c,u,p,m,y=(p=1,c=(c=n)||1e3,s=(s=function(){a&&(window[i[0]]=function(e,t){var n=(new Date).getTime(),i=new Date(e).getTime(),r=(t=t||!1,i-n),a=Math.floor(r/10),o=Math.floor(r/1e3),l=Math.floor(o/60),d=Math.floor(l/60),s=Math.floor(d/24);return d%=24,l%=60,o%=60,a%=60,t||(d+=24*s),r<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(r)?console.error("countDownTime is NaN，找不到目標時間"):{day:s<10?"0"+s:s.toString(),dayTens:parseInt(s%100/10).toString(),dayUnits:parseInt(s%10).toString(),hour:d<10?"0"+d:d.toString(),hourTens:parseInt(d%100/10).toString(),hourUnits:parseInt(d%10).toString(),min:l<10?"0"+l:l.toString(),minTens:parseInt(l%100/10).toString(),minUnits:parseInt(l%10).toString(),sec:o<10?"0"+o:o.toString(),secTens:parseInt(o%100/10).toString(),secUnits:parseInt(o%10).toString(),micro:a<10?"0"+a:a.toString(),microTens:parseInt(a%100/10).toString(),microUnits:parseInt(a%10).toString()}}(e[o],d),"function"==typeof l&&l()),function(){var n=(new Date).getTime();if(new Date(e[o]).getTime()-n<=0){if("function"==typeof t)t(o);else if(Array.isArray(t))for(var i=t.length,r=0;i>0;)t[r](o),r++,i--;o++}}(),o>e.length-1&&(r&&r(),clearInterval(y))})||void 0,m=(new Date).getTime(),function e(t){var n=setTimeout((function(){var t=(new Date).getTime()-(m+p*c);"function"==typeof s?s():void 0!==s&&console.error("callback不是函數"),p++,e(c-t)}),t);return u=n}(c),u)}f(w("2020/12/4 10:00",12),[g,v],100);function g(e){var t=Array.apply(null,document.querySelectorAll("#dailyItem .item__box")),n=t.length;t.forEach((function(e){e.classList.remove("active")})),t[e]?t[e].classList.add("active"):e>=n&&t[n-1].classList.add("active")}function v(e){var t=Array.apply(null,document.querySelectorAll("#dailySlider .swiper-slide")),n=t.length,i=document.getElementById("dailySlider"),r=document.getElementById("dailySliderPrev"),a=document.getElementById("dailySliderNext");t.forEach((function(t,n){n<e&&(t.style.display="none")})),e>=n-2&&(r.style.display="none",a.style.display="none"),e>=n-1&&(t[n-1].style.display="block",t[n-1].style.pointerEvents="none",i.style.pointerEvents="none");new y.a("#dailySlider",{allowSlideNext:s("#dailySlider"),allowSlidePrev:s("#dailySlider"),lazy:{loadPrevNext:!0,loadPrevNextAmount:2},navigation:{nextEl:"#dailySliderNext",prevEl:"#dailySliderPrev"},spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}function h(e,t,n){e=e||{},t=t||{};if(Array.isArray(n))var i=n[0]?n[0]:"productNumber",r=n[1]?n[1]:"webLink",a=n[2]?n[2]:"mobileLink",o=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else i="productNumber",r="webLink",a="mobileLink",o="appLink",l="linkTitle";if(e.hasOwnProperty(i)&&"number"==typeof e[i])var d="https://www.etmall.com.tw/i/"+e[i],s="https://m.etmall.com.tw/Product/"+e[i],u="etmall://open?pgid=1&gd="+e[i];else d=e[r]?e[r]:"javascript:void(0)",s=e[a]?e[a]:"javascript:void(0)",u=e[o]?e[o]:"javascript:void(0)";t.href=c(960,u,d,s),e.hasOwnProperty(l)&&(t.title=e[l])}!function(){if(!dailyData)return!1;f(w("2020/12/4 10:00:00",24),[b,S],100,["countDownNumberObject",E,!0])}();function b(e){var t=document.querySelector("#dailyChange a");h(dailyData[e],t)}function S(e){var t=document.querySelector("#dailyChange a img");t.src="daily-item-"+(e+1)+".png",t.alt="大牌價到"}function E(){var e=document.getElementById("dailyHourTens"),t=document.getElementById("dailyHourUnits"),n=document.getElementById("dailyMinTens"),i=document.getElementById("dailyMinUnits"),r=document.getElementById("dailySecTens"),a=document.getElementById("dailySecUnits");e.innerHTML=window.countDownNumberObject.hourTens,t.innerHTML=window.countDownNumberObject.hourUnits,n.innerHTML=window.countDownNumberObject.minTens,i.innerHTML=window.countDownNumberObject.minUnits,r.innerHTML=window.countDownNumberObject.secTens,a.innerHTML=window.countDownNumberObject.secUnits}function P(e,t){document.addEventListener("scroll",(function(){e.style.transform="translate3d(0,"+u()*parseFloat(t)+"px,0)"}))}var L=document.getElementById("decorationBg");P(L,-.2);a(window.addEventListener("load",T),T);function T(){new y.a("#sliderSpecial",{autoplay:d()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:s("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},speed:600})}function x(e,t,n,i){e=e||{},t=t||!1;if(Array.isArray(n)){var r=n[2]?n[2]:"name",a=n[3]?n[3]:"price",o=n[4]?n[4]:"text",d=n[5]?n[5]:"swiper-slide";if(t)var s=n[6]?n[6]:"swiper-lazy",c=n[7]?n[7][0]:"swiper-lazy-preloader",u=n[7]?n[7][1]:"swiper-lazy-preloader-black"}else{r="name",a="price",o="text",d="swiper-slide";if(t)s="swiper-lazy",c="swiper-lazy-preloader",u="swiper-lazy-preloader-black"}i=i||[,,,,"name"];if(e.hasOwnProperty(o)&&!e.hasOwnProperty(a))var p=!0;var m=document.createElement("li"),y=document.createElement("a"),w=document.createElement("img"),f=document.createElement("span"),g=document.createElement("span");h(e,y,i),function(e,t,n,i,r){if(e=e||{},t=t||{},n=n||!1,Array.isArray(r)){var a=r[0]?r[0]:"productNumber",o=r[1]?r[1]:"imgSrc";if(!n)var d=r[2]?r[2]:"imgAlt"}else{a="productNumber",o="imgSrc";if(!n)d="name"}if(Array.isArray(i))var s=i[0]?i[0]:768,c=i[1]?i[1]:"XL",u=i[2]?i[2]:"L";else s=768,c="XL",u="L";if(e.hasOwnProperty(a)&&"number"==typeof e[a]&&!e.hasOwnProperty(o))var p="-1_"+(l(s)?c:u)+".jpg",m=e[a],y="https://media.etmall.com.tw/NXimg/00"+m.toString().slice(0,4)+"/"+m+"/"+m+p;else if(e.hasOwnProperty(o))y=e[o];else console.error("未指定銷售編號或是圖片來源");n?t.dataset.src=y:(t.src=y,e.hasOwnProperty(d)&&(t.alt=e[d]))}(e,w,t),t&&w.classList.add(s),f.innerHTML=e[r],g.innerHTML=p?e[o]:Number.prototype.toLocaleString?isNaN(Number(e[a]))?e[a]:Number(e[a]).toLocaleString():e[a],m.classList.add(d);var v=document.createElement("div"),b=document.createElement("div"),S=document.createElement("div"),E=document.createElement("div");if(v.classList.add("product"),v.classList.add("product--dynamic"),b.classList.add("product__img"),S.classList.add("product__name"),E.classList.add("product__price"),b.appendChild(w),S.appendChild(f),E.innerHTML=p?"<span></span>":"<span>$</span>",E.appendChild(g),t){var P=document.createElement("div");P.classList.add(c),P.classList.add(u),b.appendChild(P)}if(y.appendChild(b),y.appendChild(S),y.appendChild(E),v.appendChild(y),m.appendChild(v),t)return m;return w.addEventListener("error",(function(){m.style.display="none"})),m}!function(){var e=document.getElementById("tabBox"),t=Array.apply(null,e.querySelectorAll(".tab__item")),n=document.getElementById("tabContentBlock"),i=Array.apply(null,n.querySelectorAll(".content__box"));if(t.length!==i.length)return console.error("Tab Item數量與Content Box數量不符"),!1;(function(){if(!(dataTab1&&dataTab2&&dataTab3&&dataTab4))return!1;var e=[dataTab1,dataTab2,dataTab3,dataTab4];Array.apply(null,document.querySelectorAll("#tabContentBlock .swiper-wrapper")).forEach((function(t,n){e[n].forEach((function(e){var n=x(e);t.appendChild(n)}))}))})(),t.forEach((function(e,n){e.addEventListener("click",(function(){_(t,n),_(i,n),k(n)}))})),k()}();function _(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function k(e){e=e||0;var t=Array.apply(null,document.querySelectorAll(".tab__slider"));new y.a(t[e],{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:!l(960),slidesPerView:2,slidesPerGroup:2,slidesPerColumn:2,slidesPerColumnFill:"row",speed:600})}a(window.addEventListener("load",A),A);function A(){new y.a("#sliderPromo_1",{autoplay:d()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:s("#sliderPromo_1"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},centeredSlides:!0,slidesPerView:3,spaceBetween:"4%",speed:600,watchSlidesProgress:!0})}var M;M=document.querySelector("#sliderDynamic .swiper-wrapper"),dataDynamic.forEach((function(e){var t=x(e,!0);M.appendChild(t)})),a(window.addEventListener("load",I),I);function I(){new y.a("#sliderDynamic",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:s("#sliderDynamic",2),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderDynamicNext_1",prevEl:"#sliderDynamicPrev_1"},pagination:{el:"#sliderDynamicPager",type:"bullets",clickable:!0},slidesPerView:2,slidesPerGroup:2,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){var e=document.getElementById("bnSpecialPromoWrap"),t=Array.apply(null,document.querySelectorAll("#bnSpecial .month--prev")),n=Array.apply(null,document.querySelectorAll("#bnSpecial .month--next"));p(12)?(e.style.backgroundImage='url("https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/bg-bank-n.png")',t.forEach((function(e){e.parentNode.removeChild(e)}))):p(11)?(e.style.backgroundImage='url("bg-bank-p.png")',n.forEach((function(e){e.parentNode.removeChild(e)}))):console.error("銀行月份不再兩者範圍內");a(window.addEventListener("load",B),B)}();function B(){new y.a("#sliderBank",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:s("#sliderBank",2),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderBank .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},slidesPerView:2,centeredSlides:!0,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}a(window.addEventListener("load",N),N);function N(){new y.a("#sliderMidBig",{autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!0,grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderMidBig .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderMidBigNext",prevEl:"#sliderMidBigPrev"},slidesPerView:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0})}!function(){function e(e,t,n,i,r){$("#js-ball__wrap").snowfall("clear"),$("#js-ball__wrap").snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-1.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r}).snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-2.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r}).snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/ball-3.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r})}function t(e,t,n,i,r){$("#js-red__envelope__wrap").snowfall("clear"),$("#js-red__envelope__wrap").snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-red-1.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r}).snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-money.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r}).snowfall({image:"https://www.etmall.com.tw/XML/content/DMSetting/Final/202012/SP_1116824/game-1-red-2.png",flakeCount:e,minSpeed:t,maxSpeed:n,minSize:i,maxSize:r})}var n=document.body.clientWidth;n>=960?(window.addEventListener("load",e(7,1,2,10,40)),window.addEventListener("load",t(7,1,2,10,40))):n>=768&&n<960?(window.addEventListener("load",e(5,1,2,6,20)),window.addEventListener("load",t(5,1,2,6,20))):(window.addEventListener("load",e(3,1,2,3,10)),window.addEventListener("load",t(3,1,2,3,10)));window.addEventListener("resize",(function(){(n=document.body.clientWidth)>=960?(e(7,1,2,10,40),t(7,1,2,10,40)):n>=768&&n<960?(e(5,1,2,6,20),t(5,1,2,6,20)):(e(3,1,2,3,10),t(3,1,2,3,10))}))}();Array.apply(null,document.querySelectorAll("#randomSelectWrap > li")).forEach((function(e){e.addEventListener("click",(function(){this.classList.add("active")}))}));!function(){var e=document.getElementById("tabSliderBox"),t=Array.apply(null,e.querySelectorAll(".tab__item")),n=document.getElementById("tabSliderContentBlock"),i=Array.apply(null,n.querySelectorAll(".content__box"));if(t.length!==i.length)return console.error("Tab Item數量與Content Box數量不符"),!1;t.forEach((function(e,n){function r(){C(t,n),C(i,n),"1"==n?new y.a("#sliderTab_2",{autoplay:{delay:0x650e124ef540,disableOnInteraction:!1},init:!l(768),loop:!0,calculateHeight:!0,grabCursor:!0,slidesPerView:3,breakpoints:{768:{slidesPerView:3}},spaceBetween:0,pagination:{el:"#sliderTabPager_2",clickable:!0},navigation:{nextEl:"#sliderTabPagerNext_2",prevEl:"#sliderTabPagerPrev_2"}}):"2"==n?new y.a("#sliderTab_3",{autoplay:{delay:0x650e124ef540,disableOnInteraction:!1},init:!l(768),loop:!0,calculateHeight:!0,grabCursor:!0,slidesPerView:3,breakpoints:{768:{slidesPerView:3}},spaceBetween:0,pagination:{el:"#sliderTabPager_3",clickable:!0},navigation:{nextEl:"#sliderTabPagerNext_3",prevEl:"#sliderTabPagerPrev_3"}}):"0"==n&&D()}0===n&&C(i,n),e.addEventListener?e.addEventListener("click",r,!1):e.attachEvent&&e.addEventListener("onclick",r)}))}();function C(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}a(window.addEventListener("load",D),D);function D(){new y.a("#sliderTab",{autoplay:{delay:0x650e124ef540,disableOnInteraction:!1},init:!l(768),loop:!0,calculateHeight:!0,grabCursor:!0,slidesPerView:3,breakpoints:{768:{slidesPerView:3}},spaceBetween:0,pagination:{el:"#sliderTabPager",clickable:!0},navigation:{nextEl:"#sliderTabPagerNext",prevEl:"#sliderTabPagerPrev"}})}a(window.addEventListener("load",O),O);function O(){new y.a("#textSlider",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:s("#textSlider",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#textSlider .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderDynamicNext_2",prevEl:"#sliderDynamicPrev_2"},pagination:{el:"#sliderDynamicPager_2",type:"bullets",clickable:!0},slidesPerView:2.5,breakpoints:{960:{slidesPerView:3.2}},speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){var e=document.querySelector("#sliderDynamic_3 .swiper-wrapper");dataDynamic_3.forEach((function(t){var n=x(t,!0);e.appendChild(n)})),a(window.addEventListener("load",z),z)}();function z(){new y.a("#sliderDynamic_3",{autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,init:s("#sliderDynamic_3",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic_3 .swiper-slide").length),lazy:{loadPrevNext:!0},loop:!0,navigation:{nextEl:"#sliderDynamicNext_3",prevEl:"#sliderDynamicPrev_3"},pagination:{el:"#sliderDynamicPager_3",type:"bullets",clickable:!0},slidesPerView:3,slidesPerGroup:3,spaceBetween:"1.5%",speed:600,watchSlidesProgress:!0,watchSlidesVisibility:!0})}!function(){if(!linkTime&&!linkData)return!1;if((new Date).getTime()>=new Date(linkTime[0]).getTime()){var e=document.getElementById("leftRightChange"),t=document.getElementById("leftRightChangeAnchor");e.classList.remove("not-yet"),t.style["pointer-events"]=": auto"}f(linkTime,[q],100)}();function q(e){var t=document.getElementById("leftRightChangeAnchor"),n=linkData[e].webLink,i=linkData[e].mobileLink,r=linkData[e].appLink;t.href=c(960,r,n,i)}(new r.a).init()}]);