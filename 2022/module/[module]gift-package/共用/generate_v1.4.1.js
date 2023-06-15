// click nav and scroll to hash tag
// 點擊誘因可下連宮格
// ================================
$(function () {
  if (window.jQuery) {
    $('a[href^="#"]').on("click", function (e) {
      var target;
      // 判斷有沒有id
      if ($(this.getAttribute("href")).length) {
        target = $(this.getAttribute("href"));
      } else {
        target = $(
          "[data-title=" + this.getAttribute("href").split("#")[1] + "]"
        );
      }
      // 判斷有沒有data-title
      if (target.length) {
        e.preventDefault();

        var progressBarHeight = $("#progressBar").height() + 4;
        var navHeight =
          $("#navRightBar").height() > 0
            ? $("#navRightBar").height()
            : progressBarHeight;
        var uiObjectHeight =
          window.innerWidth >= 1213 ? progressBarHeight : navHeight;

        $("html,body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - uiObjectHeight,
            },
            500
          );
      }
    });
  }
});

// 不支援 IE9 公告
// ================================
function isIE9() {
  if (navigator.appName.indexOf("Internet Explorer") != -1) {
    // not IE10, IE11
    var badBrowser = navigator.appVersion.indexOf("MSIE 1") == -1;
    if (badBrowser) return true;
    else return false;
  } else return false;
}
function makeIE9Alert() {
  // 檢測是否為ie9，不是就不執行
  if (!isIE9()) return false;
  // 判斷網址決定塞哪個qrcode(不是umall就都秀etmall)
  var detectLink = location.href.indexOf("u-mall") == -1;
  var etmallText = "東森會員";
  var umallText = "森森會員";
  var memberText = detectLink ? etmallText : umallText;

  var alertText =
    "您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。";

  alert(memberText + alertText);
}
var notSupportIE9Alert = makeIE9Alert();

// go top
// ================================
// function
var basicScrollTop = function () {
  // The button
  var btnTop = document.getElementById("goTop");
  // Reveal the button
  var btnReveal = function () {
    if (window.scrollY >= 300) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };
  // Smooth scroll top
  var TopscrollTo = function () {
    if (window.scrollY != 0) {
      if (window.jQuery) {
        $("html,body").stop().animate({ scrollTop: 0 }, 500);
      } else {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 100);
          TopscrollTo();
        }, 0);
      }
    }
  };
  // Listeners
  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};

// go top SVG
var goTopNode = document.createElement("button");
var goTopHtml =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M12 4h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V19.25a.75.75 0 0 1-1.493.102l-.007-.102V6.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>';
goTopNode.id = "goTop";
goTopNode.classList.add("go-top");
goTopNode.innerHTML = goTopHtml;

document.body.appendChild(goTopNode);

basicScrollTop();

function isWinWt() {
  var winWt = document.body.clientWidth;
  var navTop = document.getElementById("navTop");
  var goTop = document.getElementById("goTop");

  if (winWt >= 1260) {
    if (navTop) {
      goTop.style.display = "none";
    } else {
      goTop.style.display = "block";
    }
  } else {
    goTop.style.display = "block";
  }
}
window.addEventListener("load", isWinWt);
window.addEventListener("resize", isWinWt);

// scroll progress bar
// ================================
var initProgressBar = false;

function getScrollTop() {
  var bodyTop = 0;
  if (typeof window.pageYOffset != "undefined") {
    bodyTop = window.pageYOffset;
  } else if (
    typeof document.compatMode != "undefined" &&
    document.compatMode != "BackCompat"
  ) {
    bodyTop = document.documentElement.scrollTop;
  } else if (typeof document.body != "undefined") {
    bodyTop = document.body.scrollTop;
  }
  return bodyTop;
}
function progressBarWidth() {
  var finalWidth;
  var nowScroll = getScrollTop();
  var bodyHeight = document.body.scrollHeight - window.innerHeight;
  var bodyWidth = document.body.clientWidth;

  finalWidth = parseInt((nowScroll / bodyHeight) * bodyWidth);
  return finalWidth;
}
function makeProgressBar() {
  var body = document.body;
  var wrap = document.createElement("div");
  var bar = document.createElement("div");
  wrap.id = "progressBarWrap";
  wrap.style.opacity = 0; // 開始先隱藏
  wrap.style.position = "fixed";
  wrap.style.zIndex = 200;
  wrap.style.top = 0;
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  wrap.style.width = "100%";
  wrap.style.height = "0.5vh";
  bar.style.backgroundColor = "#cc1e05";
  bar.style.backgroundImage =
    "linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)";
  bar.style.height = "100%";
  bar.id = "progressBar";

  wrap.appendChild(bar);
  body.insertBefore(wrap, body.firstChild);
  if (getScrollTop()) initProgressBar = true; // 如果在最上面(getScrollTop() = 0)則不改變數
}
function detectScroll() {
  var wrap = document.getElementById("progressBarWrap");
  var bar = document.getElementById("progressBar");
  bar.style.width = progressBarWidth() + "px";

  // 如果不在最上面則打開隱藏，如果在最上面則打開init，之後就會打開隱藏且再滾回來都不會消失
  if (initProgressBar) wrap.style.opacity = 1;
  else initProgressBar = true;
}
makeProgressBar();

// 檢查有幾個progress bar，超過2條沒有id的(舊bar)移除
function checkBar() {
  var alllBars = Array.apply(null, document.querySelectorAll("#progressBar"));
  var newBarHasId = 0;

  if (alllBars.length > 1) {
    alllBars.forEach(function (el, index) {
      var barWrap = el.parentNode;

      if (barWrap.id === "progressBarWrap") {
        newBarHasId++;

        // 超過一個newBar就砍
        if (newBarHasId > 1) barWrap.parentNode.removeChild(barWrap);
      } else {
        // 舊bar都砍
        barWrap.parentNode.removeChild(barWrap);
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  checkBar();
});

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

window.addEventListener("load", function () {
  requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
});
window.addEventListener("scroll", function () {
  requestAnimationFrame ? requestAnimationFrame(detectScroll) : detectScroll();
});

// auto image resize
// ================================
function detectWindowWidth(width, functionWeb, functionMobile) {
  var windowWidth = document.body.clientWidth;
  if (windowWidth >= width) {
    if (typeof functionWeb === "function") return functionWeb();
  } else {
    if (typeof functionMobile === "function") return functionMobile();
  }
}
function autoWidth(wrapperWidth) {
  var autoWidthWrap = Array.apply(
    null,
    document.getElementsByClassName("width--auto")
  );
  var autoWidthImgs = Array.apply(
    null,
    document.querySelectorAll(".width--auto img")
  );

  if (autoWidthImgs.length !== autoWidthWrap.length)
    return console.error("自動圖片的外框與圖片數量不一致!");

  autoWidthImgs.forEach(function (el, index) {
    var elWidth = el.naturalWidth;
    autoWidthWrap[index].style =
      "width:" + (elWidth / wrapperWidth) * 100 + "%";
  });
}

function initAutoWidth() {
  detectWindowWidth(960, null, function () {
    autoWidth(960);
  });
}
window.addEventListener("load", initAutoWidth);
window.addEventListener("resize", initAutoWidth);

// 背景固定
// ================================
function stickyButton() {
  var winHt = document.body.offsetHeight;
  var navTop = document.getElementById("fixedBgHt");
  // 有navTop才執行
  if (navTop == null) return false;
  //        var imgaa = navTop.querySelector('.js--fixed__background');
  // if (window.scrollY >= document.documentElement.clientHeight) {
  if (window.scrollY >= 828) {
    navTop.style.height = winHt + "px";
    navTop.style.position = "fixed";
    // imgaa.classList.add("top--0");
    //            setInterval(imgaa.classList.add("top--0"))
  } else {
    navTop.style.height = "auto";
    navTop.style.position = "absolute";
    //            setInterval(imgaa.classList.remove("top--0"))
  }
}
var winWt = document.body.clientWidth;
if (winWt >= 960) {
  window.addEventListener("load", stickyButton);
  window.addEventListener("scroll", stickyButton);
}
window.addEventListener("resize", function () {
  winWt = document.body.clientWidth;
  if (winWt >= 960) {
    stickyButton;
  }
});
// lazyload init
// lazyload();

// 判斷是否有版頭
// ================================
function checkHeaderWrap() {
  var buildHeaderWrap = document.getElementById("buildHeaderWrap");
  if (!buildHeaderWrap) return false;

  var headerHeight = buildHeaderWrap.clientHeight;
  var newStyle = document.createElement("style");
  document.head.append(newStyle);
  newStyle.append("body::before{top:" + headerHeight + "px !important;}");
}
checkHeaderWrap();
