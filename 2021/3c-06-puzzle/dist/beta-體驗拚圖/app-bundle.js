!function(e){function t(t){for(var r,a,d=t[0],c=t[1],l=t[2],u=0,f=[];u<d.length;u++)a=d[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,d=1;d<n.length;d++){var c=n[d];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var s=c;i.push([2,1]),n()}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=n(0),o=n.n(r);function i(){var e=(e||navigator.userAgent).toLowerCase(),t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0}function a(){return!!/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)}function d(e,t,n,r){var o=a()?t:function(e){return document.body.clientWidth>=e}(e)?n:r;return r||(r=n),o}!function(){if(-1==navigator.appName.indexOf("Internet Explorer")||-1!=navigator.appVersion.indexOf("MSIE 1"))return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")}();!function(e){if(!function(e){return!!i&&("string"==typeof i()?parseInt(i(),10)<e:void 0)}(e))return!1;alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")}(5);var c,l;(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,r=document.createElement("button");function o(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}r.id="goTop",r.classList.add("go-top"),r.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(r),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",o),window.addEventListener("resize",o),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var i,a,d,c=!1;function l(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,r=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=l(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),c?r.style.opacity=1:c=!0}i=document.body,a=document.createElement("div"),d=document.createElement("div"),a.id="progressBarWrap",a.style.opacity=0,a.style.position="fixed",a.style.zIndex=200,a.style.top=0,a.style.backgroundColor="rgba(0, 0, 0, 0.3)",a.style.width="100%",a.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",a.appendChild(d),i.insertBefore(a,i.firstChild),l()&&(c=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var r=e.parentNode;"progressBarWrap"===r.id?++t>1&&r.parentNode.removeChild(r):r.parentNode.removeChild(r)}))}));var u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){u?u(s):s()})),window.addEventListener("scroll",(function(){u?u(s):s()}))})(),c=document.getElementById("infoCover"),l=document.getElementById("gameWrap"),a()?c.classList.add("active"):l.classList.add("active");a()||(s=setInterval((function(){"undefined"!=typeof arrayCardFronts&&clearInterval(s)}),100));var s,u=function(e){var t=arrayCardFronts;if(Array.apply(null,document.querySelectorAll("#cardWrap .card__front")).forEach((function(e,n){var r=e.querySelector("a"),o=e.querySelector("img");t[n].s?o.src=t[n].s+".png":o.src=t[n].i+".png",function(e,t,n){if(e=e||{},t=t||{},Array.isArray(n))var r=n[0]?n[0]:"productNumber",o=n[1]?n[1]:"webLink",i=n[2]?n[2]:"mobileLink",a=n[3]?n[3]:"appLink",c=n[4]?n[4]:"linkTitle";else r="productNumber",o="webLink",i="mobileLink",a="appLink",c="linkTitle";if(e.hasOwnProperty(r)&&"number"==typeof e[r])var l="https://www.etmall.com.tw/i/"+e[r],s="https://m.etmall.com.tw/Product/"+e[r],u="etmall://open?pgid=1&gd="+e[r];else l=e[o]?e[o]:"javascript:void(0)",s=e[i]?e[i]:"javascript:void(0)",u=e[a]?e[a]:"javascript:void(0)";t.href=d(960,u,l,s),e.hasOwnProperty(c)&&(t.title=e[c])}(t[n],r,["n","w","m","a"])})),"function"==typeof e)return e()};!function(){if(a())return!1;var e=document.getElementById("gameBox"),t=document.getElementById("gamePuzzle"),n=t.getContext("2d"),r=e.clientWidth>=960?960:e.clientWidth;t.width=r,t.height=r;var o=.005*r,i=(r-4*o)/3,d=[0,1,2,3,4,5,6,7,8],c=!1;window.addEventListener("load",(function(){I(),f()})),t.addEventListener("click",(function(e){if(!c){var t=parseInt(e.offsetX/(o+i)),n=3*parseInt(e.offsetY/(o+i))+t,r=p(n);r>=0&&s(n,r),g()&&(l(d[v()],v()),c=!0,function(){u();var e=document.getElementById("gameWrap");e.classList.add("finished"),setTimeout((function(){var t=document.getElementById("cardWrap");e.classList.remove("active"),t.classList.add("active")}),4e3)}())}}));var l=function(e,t){var r=new Image;r.src="puzzle-"+String(e+1)+".png",r.onload=()=>{var e=y(t);n.drawImage(r,e[0],e[1],e[2],e[3])}},s=function(e,t){var r=y(e);n.clearRect(r[0],r[1],r[2],r[3]),l(d[t],t)},f=function(){for(var e=0;e<9;e++){var t=d[e];t!==v()&&l(t,e)}},p=function(e){var n=b(e),r=w(e),o=E(e),i=h(e),a=-1;return m(n)?a=n:m(r)?a=r:m(o)?a=o:m(i)&&(a=i),a>=0?(d[a]=d[e],d[e]=v(),t.emptyPosition=e,a):-1},m=function(e){return!(e<0||e>v())&&d[e]===v()},v=function(){return 8},y=function(e){return e<0||e>v()?[0,0,0,0]:[e%3*(o+i)+o,parseInt(e/3)*(o+i)+o,i,i]},g=function(){for(var e=0;e<d.length;e++)if(e!=d[e])return!1;return!0},w=function(e){return e%3==0?-1:e-1},h=function(e){return e%3==2?-1:e+1},b=function(e){return e-3},E=function(e){return e+3},I=function(){for(var e=0,n=(d=[[4,3,2,8,0,7,5,6,1],[2,0,5,6,8,7,3,1,4],[3,7,2,4,1,6,8,0,5],[3,2,4,1,7,6,5,0,8]][parseInt(4*Math.random())]).length-1;n>=0;n--)if(d[n]===v()){e=n;break}t.emptyPosition=e;for(var r=10;r--;){var o=parseInt(4*Math.random()),i=-1;if(0===o?i=b(e):1===o?i=w(e):2===o?i=h(e):3===o&&(i=E(e)),!(i<0||i>v()))p(i)>=0&&(e=i)}}}();(new o.a).init()}]);