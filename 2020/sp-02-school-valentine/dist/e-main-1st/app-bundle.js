!function(e){function t(t){for(var o,i,d=t[0],l=t[1],c=t[2],p=0,u=[];p<d.length;p++)i=d[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(s&&s(t);u.length;)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,d=1;d<n.length;d++){var l=n[d];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var c=0;c<d.length;c++)t(d[c]);var s=l;a.push([5,1]),n()}([function(e,t,n){},,,function(e,t){!function(){var e,t,n=document.getElementById("share__fb");e="<a href='"+(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"javascript: void(window.open(&apos;http://www.facebook.com/sharer/sharer.php?u=&apos; .concat(encodeURIComponent(location.href)) ))":'javascript: void(window.open("http://www.facebook.com/sharer/sharer.php?u=" .concat(encodeURIComponent(location.href)) ));')+"' title='分享到fackebook' class='share__btn btn--fb'><img src='fb--circle.png' alt='分享到fackebook'/></a>",n.innerHTML=e;var o=document.getElementById("share__line");t="<a href='"+(t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"javascript: void(window.open(&apos;https://lineit.line.me/share/ui?url=&apos; .concat(encodeURIComponent(location.href)) ))":'javascript: void(window.open("https://lineit.line.me/share/ui?url=" .concat(encodeURIComponent(location.href)) ));')+"' title='分享到LINE' class='share__btn btn--line'><img src='line--circle.png' alt='分享到LINE'/></a>",o.innerHTML=t}()},function(e,t){},function(e,t,n){"use strict";n.r(t);n(0);window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)});function o(e,t){return/(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(navigator.userAgent)?e:t}function r(){return-1!=navigator.appName.indexOf("Internet Explorer")&&!!(-1==navigator.appVersion.indexOf("MSIE 1"))}function a(e,t){t=t||1;var n=e+" .swiper-slide";return document.querySelectorAll(n).length>t}(function(){if(!r())return!1;var e=-1==location.href.indexOf("u-mall");alert((e?"東森會員":"森森會員")+"您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")})(),n(1),lazyload();(function(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://use.fontawesome.com/releases/v5.0.13/css/all.css";var t,n,o=document.createElement("button");function r(){var e=document.body.clientWidth,t=document.getElementById("navTop"),n=document.getElementById("goTop");n.style.display=e>=1213&&t?"none":"block"}o.id="goTop",o.classList.add("go-top"),o.innerHTML='<i class="fas fa-arrow-up" style="font-size: 20px;"></i>',document.head.appendChild(e),document.body.appendChild(o),t=document.getElementById("goTop"),n=function(){0!=window.scrollY&&(window.jQuery?$("html,body").stop().animate({scrollTop:0},500):setTimeout((function(){window.scrollTo(0,window.scrollY-100),n()}),0))},window.addEventListener("scroll",(function(){window.scrollY>=300?t.classList.add("is-visible"):t.classList.remove("is-visible")})),t.addEventListener("click",n),window.addEventListener("load",r),window.addEventListener("resize",r),window.jQuery&&$('a[href^="#"]').on("click",(function(e){var t;(t=$(this.getAttribute("href")).length?$(this.getAttribute("href")):$("[data-title="+this.getAttribute("href").split("#")[1]+"]")).length&&(e.preventDefault(),$("html,body").stop().animate({scrollTop:t.offset().top-10},500))}));var a,i,d,l=!1;function c(){var e=0;return void 0!==window.pageYOffset?e=window.pageYOffset:void 0!==document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:void 0!==document.body&&(e=document.body.scrollTop),e}function s(){var e,t,n,o=document.getElementById("progressBarWrap");document.getElementById("progressBar").style.width=(e=c(),t=document.body.scrollHeight-window.innerHeight,n=document.body.clientWidth,parseInt(e/t*n)+"px"),l?o.style.opacity=1:l=!0}a=document.body,i=document.createElement("div"),d=document.createElement("div"),i.id="progressBarWrap",i.style.opacity=0,i.style.position="fixed",i.style.zIndex=200,i.style.top=0,i.style.backgroundColor="rgba(0, 0, 0, 0.3)",i.style.width="100%",i.style.height="0.5vh",d.style.backgroundColor="#cc1e05",d.style.backgroundImage="linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)",d.style.height="100%",d.id="progressBar",i.appendChild(d),a.insertBefore(i,a.firstChild),c()&&(l=!0),document.addEventListener("DOMContentLoaded",(function(){var e,t;e=Array.apply(null,document.querySelectorAll("#progressBar")),t=0,e.length>1&&e.forEach((function(e,n){var o=e.parentNode;"progressBarWrap"===o.id?++t>1&&o.parentNode.removeChild(o):o.parentNode.removeChild(o)}))}));var p=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.addEventListener("load",(function(){p?p(s):s()})),window.addEventListener("scroll",(function(){p?p(s):s()}))})(),n(3),n(4),o(window.addEventListener("load",i),i);function i(){new Swiper("#sliderGoodsFlip",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,effect:"flip",flipEffect:{slideShadows:!1},grabCursor:!0,initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderGoodsFlip .swiper-slide").length),loop:!0,speed:600,preloadImages:!1,lazy:{loadPrevNext:!0}}).lazy.load()}!function(){var e=document.getElementById("tabBox").querySelectorAll(".tab__item"),t=document.getElementById("contentBlock").querySelectorAll(".content__box"),n=l()-1;if(e.length!==t.length)return console.error("Tab Item數量與Content Box數量不符"),!1;e.forEach((function(o,r){function a(){d(e,r),d(t,r)}r===n&&(d(e,n),d(t,r)),o.addEventListener?o.addEventListener("click",a,!1):o.attachEvent&&o.addEventListener("onclick",a)}));var o=document.getElementById("tabBox_group2").querySelectorAll(".tab__item_group2"),r=document.getElementById("contentBlock_group2").querySelectorAll(".content__box_group2"),a=l()-1;if(o.length!==r.length)return console.error("Tab Item數量與Content Box數量不符"),!1;o.forEach((function(e,t){function i(){d(o,t),d(r,t)}t===a&&(d(o,n),d(r,t)),e.addEventListener?e.addEventListener("click",i,!1):e.attachEvent&&e.addEventListener("onclick",i)}))}();function d(e,t){e.forEach((function(e){e.classList.remove("active")})),e[t].classList.add("active")}function l(){return(new Date).getDate()}var c,s,p,u;c=document.getElementById("productWrapCountdown"),s=new Swiper("#sliderCountdown",{calculateHeight:!0,grabCursor:!0,navigation:{nextEl:"#sliderCountdownNext",prevEl:"#sliderCountdownPrev"},observer:!0,observeParents:!0,observeSlideChildren:!0,slidesPerView:3,spaceBetween:"1%",speed:600}),function(){r(0,"now");var e=0;c.style.opacity=0;for(var t=0;t<breakTime.length-1;t++)a();var n=setInterval((function(){a()}),1e3);function r(e,t){for(var n=0;n<productData[e].length;n++){if("notyet"===t)var r='<li class="swiper-slide"><div class="product product--just-standby"><a href="javascript:void(0)" title="'+productData[e].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else if("over"===t)r='<li class="swiper-slide"><div class="product product--over"><a href="javascript:void(0)" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>";else{var a=o("Webview","Web Browser");"Web Browser"===a?r='<li class="swiper-slide"><div class="product product--over"><a href="'+productData[e][n].link+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>":"Webview"===a&&(r='<li class="swiper-slide"><div class="product product--now"><a href="'+productData[e][n].appLink+'" title="'+productData[e][n].name+'"><div class="product__img"><img src="'+productData[e][n].productImg+'" alt="'+productData[e][n].name+'"></div><div class="product__name">'+productData[e][n].name+'</div><div class="product__price"><span>$</span><span>'+productData[e][n].price+"</span></div></a></div></li>")}c.innerHTML+=r}}function a(){if(!breakTime&&!productData)return!1;var t=(new Date).getTime(),o=new Date(breakTime[e]).getTime()-t,a=Math.floor(o/1e3),i=Math.floor(a/60),d=Math.floor(i/60),l=Math.floor(d/24);d%=24,i%=60,a%=60,d+=24*l,o<=0&&(l=0,d=0,i=0,a=0,function(e,t){for(;c.firstChild;)c.removeChild(c.firstChild);if(r(e-1),e>=t.length){for(clearInterval(n);c.firstChild;)c.removeChild(c.firstChild);r(t.length-1)}s.updateSlides(),s.updateProgress(),s.autoplay.start()}(++e,breakTime)),function(e,t,n,o){var r=document.getElementById("timerCountdown"),a=(t>99?'<span class="date date--hour date--out-range">99':'<span class="date date--hour">'+("0"+t).slice(-2))+'</span><span>:</span><span class="date date--min">'+("0"+n).slice(-2)+'</span><span>:</span><span class="date date--seconds">'+("0"+o).slice(-2)+"</span>";r.innerHTML=a}(0,d,i,a),c.style.opacity=1}c.style.opacity=0}(),u=document.getElementById("dataCountdown"),p=u,document.addEventListener("DOMContentLoaded",(function(){p.parentElement.removeChild(p)}));o(window.addEventListener("load",f),f);function f(){new Swiper("#sliderSpecial",{autoplay:r()?2e3:{delay:2e3,disableOnInteraction:!1},calculateHeight:!0,grabCursor:!0,init:a("#sliderSpecial"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSpecial .swiper-slide").length),loop:!0,pagination:r()?"#sliderSpecialPager":{el:"#sliderSpecialPager",type:"bullets",clickable:!0},speed:600,effect:"fade",fadeEffect:{crossFade:!0}})}o(window.addEventListener("load",m),m);function m(){new Swiper("#sliderSmall",{autoplay:r()?2500:{delay:2500,disableOnInteraction:!1},calculateHeight:!0,centeredSlides:!0,effect:"fade",fadeEffect:{crossFade:!0},grabCursor:!0,init:a("#sliderSmall"),initialSlide:Math.floor(Math.random()*document.querySelectorAll("#sliderSmall .swiper-slide").length),loop:!0,slidesPerView:1,speed:1e3})}document.getElementById("heroBlock");(new WOW).init()}]);