!function(e){function t(t){for(var r,a,d=t[0],s=t[1],l=t[2],u=0,p=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,d=1;d<n.length;d++){var s=n[d];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var c=s;i.push([3,1]),n()}([function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0);function r(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function o(e){return document.body.clientWidth>=e}function i(e,t,n,r){var i=/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?t:o(e)?n:r;return r||(r=n),i}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!r&&("string"==typeof r()?parseInt(r(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,d,s=!1;function l(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function c(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=l(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),s?r.style.opacity=1:s=!0}i=document.body,a=document.createElement("div"),d=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",a.appendChild(d),i.insertBefore(a,i.firstChild),l()&&(s=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(c):c()})),window.addEventListener("scroll",(function(){u?u(c):c()}))})(),n(1),lazyload();function a(e,t,n,r){e=e||{},t=t||!1;if(Array.isArray(n)){var a=n[2]?n[2]:"name",d=n[3]?n[3]:"price",s=n[4]?n[4]:"text",l=n[5]?n[5]:"swiper-slide";if(t){var c=n[6]?n[6]:"swiper-lazy";n[7]&&n[7][0],n[7]&&n[7][1]}}else{a="name",d="price",s="text",l="build__item__5a1b4s";if(t)c="lazyload"}r=r||[,,,,"name"];if(e.hasOwnProperty(s)&&!e.hasOwnProperty(d))var u=!0;var p=document.createElement("div"),m=document.createElement("a"),f=document.createElement("img"),y=document.createElement("span"),h=document.createElement("span");!function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",a=n[2]?n[2]:"mobileLink",d=n[3]?n[3]:"appLink",s=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",a="mobileLink",d="appLink",s="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var l="https://www.etmall.com.tw/i/"+e[r],c="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else l=e[o]?e[o]:"javascript:void(0)",c=e[a]?e[a]:"javascript:void(0)",u=e[d]?e[d]:"javascript:void(0)";t.href=i(960,u,l,c),e.hasOwnProperty(s)&&(t.title=e[s])}(e,m,r),function(e,t,n,r,i){if(e=e||{},t=t||{},n=n||!1,Array.isArray(i)){var a=i[0]?i[0]:"productNumber",d=i[1]?i[1]:"imgSrc";if(!n)var s=i[2]?i[2]:"imgAlt"}else{a="productNumber",d="imgSrc";if(!n)s="name"}if(Array.isArray(r))var l=r[0]?r[0]:768,c=r[1]?r[1]:"XL",u=r[2]?r[2]:"L";else l=768,c="XL",u="L";if(e.hasOwnProperty(a)&&"number"==typeof e[a]&&!e.hasOwnProperty(d))var p="-1_"+(o(l)?c:u)+".jpg",m=e[a],f="https://media.etmall.com.tw/NXimg/00"+m.toString().slice(0,4)+"/"+m+"/"+m+p;else if(e.hasOwnProperty(d))f=e[d];else console.error("未指定銷售編號或是圖片來源");n?t.dataset.src=f:(t.src=f,e.hasOwnProperty(s)&&(t.alt=e[s]))}(e,f,t),t&&f.classList.add(c),y.innerHTML=e[a],h.innerHTML=u?e[s]:Number.prototype.toLocaleString?isNaN(Number(e[d]))?e[d]:Number(e[d]).toLocaleString():e[d],p.classList.add(l);var v=document.createElement("div"),g=document.createElement("div"),w=document.createElement("div"),b=document.createElement("div");if(v.classList.add("dayGroup"),g.classList.add("item__img"),w.classList.add("item__name"),b.classList.add("item__price"),g.appendChild(f),w.appendChild(y),b.innerHTML=u?"<span></span>":"<span>$</span>",b.appendChild(h),m.appendChild(g),m.appendChild(w),m.appendChild(b),v.appendChild(m),p.appendChild(v),t)return p;return f.addEventListener("error",(function(){p.style.display="none"})),p}function d(e,t,n,r,o){if(!e)return!1;var i=!1,a=0;n=n||1e3;if(Array.isArray(r)){if("string"===(r[0],!1)&&console.error("請輸入window的物件名稱(string)"),"function"==typeof r[1])var d=r[1];var s=r[2]||!1;i=!0}var l,c,u,p,m,f=(p=1,c=(c=n)||1e3,l=(l=function(){i&&(window[r[0]]=function(e,t){var n=(new Date).getTime(),r=new Date(e).getTime(),o=(t=t||!1,r-n),i=Math.floor(o/10),a=Math.floor(o/1e3),d=Math.floor(a/60),s=Math.floor(d/60),l=Math.floor(s/24);return s%=24,d%=60,a%=60,i%=60,t||(s+=24*l),o<=0?{day:"00",dayTens:"0",dayUnits:"0",hour:"00",hourTens:"0",hourUnits:"0",min:"00",minTens:"0",minUnits:"0",sec:"00",secTens:"0",secUnits:"0",micro:"00",microTens:"0",microUnits:"0"}:isNaN(o)?console.error("countDownTime is NaN，找不到目標時間"):{day:l<10?"0"+l:l.toString(),dayTens:parseInt(l%100/10).toString(),dayUnits:parseInt(l%10).toString(),hour:s<10?"0"+s:s.toString(),hourTens:parseInt(s%100/10).toString(),hourUnits:parseInt(s%10).toString(),min:d<10?"0"+d:d.toString(),minTens:parseInt(d%100/10).toString(),minUnits:parseInt(d%10).toString(),sec:a<10?"0"+a:a.toString(),secTens:parseInt(a%100/10).toString(),secUnits:parseInt(a%10).toString(),micro:i<10?"0"+i:i.toString(),microTens:parseInt(i%100/10).toString(),microUnits:parseInt(i%10).toString()}}(e[a],s),"function"==typeof d&&d()),function(){var n=(new Date).getTime();if(new Date(e[a]).getTime()-n<=0){if("function"==typeof t)t(a);else if(Array.isArray(t))for(var r=t.length,o=0;r>0;)t[o](a),o++,r--;a++}}(),a>e.length-1&&(o(),clearInterval(f))})||void 0,m=(new Date).getTime(),function e(t){var n=setTimeout((function(){var t=(new Date).getTime()-(m+p*c);"function"==typeof l?l():void 0!==l&&console.error("callback不是函數"),p++,e(c-t)}),t);return u=n}(c),u)}(function(){document.querySelector("#itemGoods");var e=document.querySelector("#buildDay1"),t=document.querySelector("#buildDay2"),n=document.querySelector("#buildDay3"),r=document.querySelector("#buildDay4"),o=document.querySelector("#buildDay5"),i=document.querySelector("#buildDay6"),d=document.querySelector("#buildDay7"),s=document.querySelector("#buildDay8"),l=document.querySelector("#buildDay9"),c=document.querySelector("#buildDay10"),u=document.querySelector("#buildDay11");dataBuildItems.forEach((function(p,m){var f=a(p,!1);m<5?e.appendChild(f):m>=5&&m<=9?t.appendChild(f):m>=10&&m<=14?n.appendChild(f):m>=15&&m<=19?r.appendChild(f):m>=20&&m<=24?o.appendChild(f):m>=25&&m<=29?i.appendChild(f):m>=30&&m<=34?d.appendChild(f):m>=35&&m<=39?s.appendChild(f):m>=40&&m<=44?l.appendChild(f):m>=45&&m<=49?c.appendChild(f):m>=50&&m<=54&&u.appendChild(f),1===p.open&&(console.log("ssss"),document.querySelectorAll(".build__items > .build__item__5a1b4s")[m].classList.add("close__single"))}))})(),d(function(e,t,n){var r=new Date(e),o=new Date(e).getTime(),i=[],a=0;for(n=n||1;a<t;){var d=r.setTime(o+parseInt(a*n*24*60*60*1e3));i.push(new Date(d)),a++}return i}("2020/11/2 10:00:00",12),[s],1e3);function s(e,t){var n=document.querySelectorAll(".build__items");e>=1&&(n[e-1].style.order=99,n[e-1].classList.add("close"),n[e-1].querySelectorAll(".build__item__5a1b4s").forEach((function(e,t){e.classList.remove("close__single")})))}}]);