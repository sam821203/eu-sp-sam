!function(e){function t(t){for(var r,a,l=t[0],d=t[1],s=t[2],p=0,u=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(c&&c(t);u.length;)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var d=n[l];0!==o[d]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=d;i.push([3,1]),n()}([function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function o(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function i(e){return document.body.clientWidth>=e}function a(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function l(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}function d(e,t,n,r){var o=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:i(e)?n:r;return r||(r=n),o}!function(){if(!a())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!o&&("string"==typeof o()?parseInt(o(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),n(1),lazyload();!function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,l,d=!1;function s(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=s(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),d?r.style.opacity=1:d=!0}i=document.body,a=document.createElement("div"),l=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",l.style.backgroundColor="#cc1e05",l.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",l.style.height="100%",l.id="progressBar",a.appendChild(l),i.insertBefore(a,i.firstChild),s()&&(d=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var p=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){p?p(c):c()})),window.addEventListener("scroll",(function(){p?p(c):c()}))}();!function(){if("undefined"==typeof dailyData)return!1;document.querySelector("#goodsPromo a"),document.querySelector("#goodsHero img");var e,t=document.querySelectorAll("#goodsPromo a"),n=document.querySelectorAll("#goodsPromo img"),r=(document.querySelectorAll("#goodsPromo a"),document.querySelectorAll("#goodsPromo .price--pre"),document.querySelectorAll("#goodsPromo .date--pre")),o=document.querySelectorAll("#goodsPromo .date--pre-2"),i=document.querySelectorAll(".daily__cover .date--pre-top"),a=(document.querySelectorAll("#goodsPromo .date--post"),(new Date).getDate()),l=(new Date).getHours();if(a<11||a>25)return;e=l>=10?a-11:a-11-1;dailyData[e];for(var d=0;d<2;d++){var c=dailyData[e+1+d],p=dailyData[e+3+d];s(c,t[d]),n[d].src="everyday_pt"+(e+d+2)+".png",n[d].alt=c.name,t[d].title=c.name,i[d].innerHTML=c.date,r[d].innerHTML=c.date,o[d].innerHTML=p.date}}();function s(e,t){t=t||{};if((e=e||{}).hasOwnProperty("productNumber")&&"number"==typeof e.productNumber){var n="https://www.etmall.com.tw/i/"+e.productNumber,r="https://m.etmall.com.tw/Product/"+e.productNumber,o="etmall://open?pgid=1&gd="+e.productNumber;t.href=d(960,o,n,r)}else t.href=d(960,e.appLink,e.webLink,e.mobileLink);t.title=e.name}r(window.addEventListener("load",c),c);function c(){new Swiper("#sliderSpecial",{autoplay:a()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:l("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,navigation:{nextEl:"#sliderSpecialNext",prevEl:"#sliderSpecialPrev"},speed:600})}r(window.addEventListener("load",p),p);function p(){new Swiper("#eventw2m2",{autoplay:a()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,loop:!0,navigation:{nextEl:"#eventw2m2Next",prevEl:"#eventw2m2Prev"},slidesOffsetBefore:0,spaceBetween:0,slidesPerView:4,speed:600})}r(window.addEventListener("load",u),u);function u(){var e=new Swiper("#sliderSpecialTop",{grabCursor:!0,init:l("#sweetPointSlider"),preventClicks:!1,on:{click:function(){console.log("click",this.clickedIndex),t.slideToLoop(3*this.clickedIndex),document.querySelectorAll("#sliderSpecialTop .swiper-slide").forEach((function(e){e.style.opacity="0.4"})),e.clickedSlide.style.opacity="1"}},slidesPerView:6.5,watchSlidesVisibility:!0,speed:600,breakpoints:{960:{slidesPerView:8}}}),t=new Swiper("#sweetPointSlider",{centeredSlides:!0,grabCursor:!0,init:l("#sweetPointSlider"),autoplay:{delay:2e3,disableOnInteraction:!1},on:{slideChange:function(){if(e.slideToLoop(n(this.realIndex,3)[1],600),0===n(this.realIndex,3)[0]){var t=document.querySelectorAll("#sliderSpecialTop .swiper-slide")[n(this.realIndex,3)[1]];document.querySelectorAll("#sliderSpecialTop .swiper-slide").forEach((function(e){e.style.opacity="0.4"}));var r=document.querySelectorAll("#sliderSpecialTop .swiper-slide").length;(document.querySelectorAll("#sweetPointSlider .swiper-slide").length-4)/3==r?t.style.opacity="1":console.error("上下層數量為符合")}}},slidesPerView:2,loop:!0,speed:600});function n(e,t){return[e%t,Math.floor(e/t)]}}function m(e,t,n){e=e||{};if(Array.isArray(t))var r=t[2]?t[2]:"name",o=t[3]?t[3]:"price",a=t[4]?t[4]:"text",l=t[5]?t[5]:"swiper-slide";else r="name",o="price",a="text",l="swiper-slide";n=n||[,,,,"name"];if(e.hasOwnProperty(a)&&!e.hasOwnProperty(o))var s=!0;var c=document.createElement("li"),p=document.createElement("a"),u=document.createElement("img"),m=document.createElement("span"),f=document.createElement("span");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",i=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",l=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",i="mobileLink",a="appLink",l="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var s="https://www.etmall.com.tw/i/"+e[r],c="https://m.etmall.com.tw/Product/"+e[r],p="etmall://open?pgid=1&gd="+e[r];else s=e[o]?e[o]:"javascript:void(0)",c=e[i]?e[i]:"javascript:void(0)",p=e[a]?e[a]:"javascript:void(0)";t.href=d(960,p,s,c),e.hasOwnProperty(l)&&(t.title=e[l])}(e,p,n),function(e,t,n,r){if(e=e||{},t=t||{},Array.isArray(r))var o=r[0]?r[0]:"productNumber",a=r[1]?r[1]:"imgSrc",l=r[2]?r[2]:"imgAlt";else o="productNumber",a="imgSrc",l="name";if(Array.isArray(n))var d=n[0]?n[0]:768,s=n[1]?n[1]:"XL",c=n[2]?n[2]:"L";else d=768,s="XL",c="L";if(e.hasOwnProperty(o)&&"number"==typeof e[o]&&!e.hasOwnProperty(a))var p="-1_"+(i(d)?s:c)+".jpg",u=e[o],m="https://media.etmall.com.tw/NXimg/00"+u.toString().slice(0,4)+"/"+u+"/"+u+p;else if(e.hasOwnProperty(a)){m=e[a];console.log(m)}else console.error("未指定銷售編號或是圖片來源");t.src=m,e.hasOwnProperty(l)&&(t.alt=e[l])}(e,u),m.innerHTML=e[r],f.innerHTML=s?e[a]:e[o],c.classList.add(l);var y=document.createElement("div"),w=document.createElement("div"),h=document.createElement("div"),v=document.createElement("div");return y.classList.add("product"),y.classList.add("product--dynamic"),w.classList.add("product__img"),h.classList.add("product__name"),v.classList.add("product__price"),w.appendChild(u),h.appendChild(m),v.innerHTML=s?"<span></span>":"<span>$</span>",v.appendChild(f),p.appendChild(w),p.appendChild(h),p.appendChild(v),y.appendChild(p),c.appendChild(y),u.addEventListener("error",(function(){c.style.display="none"})),c}var f;f=document.querySelector("#sliderDynamic .swiper-wrapper"),dataDynamic.forEach((function(e){var t=m(e);f.appendChild(t)})),r(window.addEventListener("load",y),y);function y(){new Swiper("#sliderDynamic",{autoplay:{delay:2e3,disableOnInteraction:!1},grabCursor:!0,init:l("#sliderDynamic",3),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderDynamic .swiper-slide").length),loop:!0,pagination:{el:"#sliderDynamicPager",type:"bullets",clickable:!0},slidesPerView:2.6,spaceBetween:"1.5%",speed:600,breakpoints:{960:{slidesPerView:3.6}}})}r(window.addEventListener("load",w),w);function w(){new Swiper("#sliderBnEventHot",{autoplay:a()?2e3:{delay:11112e3,disableOnInteraction:!1},calculateHeight:!0,loop:!0,pagination:a()?"#sliderBnEventHotPager":{el:"#sliderBnEventHotPager",type:"bullets",clickable:!0},slidesPerView:2,speed:600})}}]);