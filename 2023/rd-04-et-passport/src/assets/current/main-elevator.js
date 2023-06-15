/*
 ** TODO: 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 確認generateVersion.js中generate的link和script是正確的
 */
$(function () {
  /**
   * TODO: 選填右電梯呈現樣式
   * @param {string} rightStyle - 固定單字如下，若不填或填非設定的單字，則不會報錯也沒有動畫
   * 'fade-in' - 原地淡入
   * 'left-in' - 從螢幕左邊飛入
   * 'up-in' - 從下方往上淡入
   */
  var rightStyle = "left-in";

  /*
   ** TODO: 電梯DATA ******************
   */

  /*
   ** 新增小網彈窗
   */
  $("body").append(
    '<div class="elevatorHome js--main--dialog" id="elevatorHome_2"></div>'
  );
  $("body").addClass("safe-area-padding-bottom");
  $("head").append(
    '<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">'
  );

  /*
   ** 行銷電梯：判斷右電梯是否出現
   */
  var rightNav = true;

  // 商品頁如果沒有離線右電梯，則共用電梯時也不開離線右電梯
  if (window.notRightElevator) rightNav = false;

  if (!rightNav) return false;

  var _window = $(window),
    _document = $(document),
    $htmlBody = $("html, body");
  var $winWt = $(document).width();

  var $spWrap = $("#elevatorHome");

  var $spFixedNav = $("#spFixedNav");
  // 配合css 決定大小網寬度
  var $screenChangeWt = 959;

  var goTopEffect = function (selectors) {
    selectors.on("click", function (e) {
      e.preventDefault();
      $htmlBody.animate(
        {
          scrollTop: 0,
        },
        300
      );
    });
  };

  /*
   ** 右邊電梯
   */
  function spScrollRightNav() {
    if (!rightNav) return false;

    var checkStyle;
    var rightStyleArray = ["fade-in", "left-in", "up-in"];

    if (typeof rightStyle !== "undefined") {
      rightStyleArray.forEach(function (itemStyle) {
        if (rightStyle === itemStyle) checkStyle = itemStyle;
      });
    } else {
      checkStyle = null;
    }

    var arrSection = Array.apply(
      null,
      document.querySelectorAll("[data-title]")
    );
    var navHtml = "";
    var arrDataGroup = [];
    var $spWrapRight = $("#navRightBar");

    navHtml += '<nav id="spRightNav" class="sp-right__nav">';
    navHtml += '<ul class="sp-nav-right_ul" id="spNavRightUl">';
    navHtml += '<li class="sp-bav_top_img"></li>';

    arrSection.forEach(function (el) {
      var valueEl = el.getAttribute("data-title");
      var isHideData = valueEl.indexOf("stop") == -1;
      if (valueEl && isHideData) {
        navHtml +=
          ' <li class="sp-nav_right"><a href="#' +
          valueEl +
          '">' +
          valueEl +
          "</a></li>";
        arrDataGroup.push(valueEl);
      }
      //  隱藏標題出現錨點無法對應高度 -> 將錨點加入陣列但隱藏
      else if (!isHideData) {
        navHtml +=
          ' <li class="sp-nav_right" style="width: 0; min-width: 0;"></li>';
        arrDataGroup.push(valueEl);
      }
    });
    navHtml +=
    '<li class="sp-nav-right__record"><a class="m-top--xs" href="javascript:void(0)" title="您的東森幣"><span>您的東森幣</span><img src="e-coin.png" alt=""><span>99,999</span></a></li>';

    
    navHtml +=
      '<li class="sp-nav-right__record jsRecordList"><a href="javascript:void(0)" title="兌換紀錄">兌換紀錄</a></li>';
    navHtml +=
      '<li class="sp-nav-right__top" id="navGoTop"><a href="" title="回到頁首">TOP</a></li>';
    navHtml += '<li class="sp-nav-right__mobile__click" id="clickMenu"></li>';
    navHtml += "</ul>";
    navHtml += "</nav>";

    var parent = $("#navRightBar");
    var body = $("body");
    if (parent) {
      parent.html(navHtml);
    } else {
      body.html(navHtml);
    }

    var rightNavUl = document.getElementById("spRightNav");
    if (checkStyle) {
      rightNavUl.classList.add(checkStyle);

      function checkRightActive() {
        if (window.pageYOffset >= 300) {
          rightNavUl.classList.add("active");
        } else {
          rightNavUl.classList.remove("active");
        }
      }

      document.addEventListener("scroll", checkRightActive);
    }

    /*
     ** judge 如果沒有值 右邊電梯隱藏
     */
    var result = arrDataGroup.filter(function (word) {
      return word && word.trim();
    });
    // if (result.length == 0) {
    //   document.getElementById("navRightBar").style.display = "none";
    // }

    // last li contact 'top'
    var $spNavLastLi = $spWrapRight.find("#navGoTop");
    goTopEffect($spNavLastLi);
  }

  /*
   ** judge 是不是主會場，主會場出現右邊電梯(判定undefined是如果沒帶值時)
   */
  // if (getSearch === "Ev1" || getSearch == undefined) {
  spScrollRightNav();
  // }
  // 右邊電梯  /.END

  // judge now which isClick
  $(".js-sp__nav__all > a").click(function () {
    $(".js-sp__nav__all a").removeClass("active");
    $(this).addClass("active");
  });

  // active move in the screen middle
  var $winWt = $(document).width();
  if ($(".active").length) {
    var offsetLeft = $(".active").offset().left - $winWt / 2;
  }
  $(".js-nav_ul").stop().animate({
    scrollLeft: offsetLeft,
  });
  // active move in the screen middle

  /*
   ** 滾動function
   */
  function bindNav($winWt) {
    if (!rightNav) return false;

    var arrSection = Array.apply(
      null,
      document.querySelectorAll("[data-title]")
    );
    var arrTitle = [];
    var navClickItems = Array.apply(
      null,
      document.querySelectorAll("#spNavRightUl a")
    );
    var docScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var navBarHeight =
      document.querySelector(".sp-right__nav").offsetHeight + 2 || 41;
    var $winWt = $(document).width();
    var targetIndex = 0;

    // data-title each
    arrSection.forEach(function (el) {
      var valueEl = el.getAttribute("data-title");
      var isHideData = valueEl.indexOf("stop") == -1;
      /*
       ** 如果data-title的值 1.有值 2.不等於stop 加入陣列
       */
      if (valueEl && isHideData) {
        arrTitle.push(el);
      }
    });

    /*
     ** judge mobile 需加上navBar的高度
     */
    arrTitle.forEach(function (el, index) {
      if ($winWt > $screenChangeWt && docScrollTop - el.offsetTop >= 0) {
        targetIndex = index;
      } else if (
        $winWt <= $screenChangeWt &&
        docScrollTop - el.offsetTop + navBarHeight >= 0
      ) {
        targetIndex = index;
      }
    });

    /*
     ** 1.防呆 2.移除所有active 3.當下的加上active
     */
    if (targetIndex === -1) return;
    navClickItems.forEach(function (el) {
      el.classList.remove("active");
    });
    navClickItems[targetIndex].classList.add("active");
    /*
     ** active move in the screen middle, 一定要重新抓取document.width，不然會有拖曳螢幕大小時出現的錯誤
     */
    var moveLeft = $("#spRightNav li").width() || 90;
    if ($(".active").length) {
      //
      var offsetLeft = moveLeft * targetIndex - $winWt / 3;
      $("#spNavRightUl").stop().animate({
        scrollLeft: offsetLeft,
      });
    }
    // active move in the screen middle /.END
  }

  /*
   ** scroll 給點間隔時間去跑
   */
  $.debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  $.throttle = function (func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = $.debounce(function () {
      more = throttling = false;
    }, wait);
    return function () {
      (context = this), (args = arguments);
      var later = function () {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);

      if (throttling) {
        more = true;
      } else {
        result = func.apply(context, args);
      }
      whenDone();
      throttling = true;
      return result;
    };
  };
  var bind__handler = $.throttle(function (e) {
    // window.addEventListener('load',bindNav);
    bindNav($winWt);
  }, 200);

  window.addEventListener("scroll", bind__handler);

  /*
   ** 點擊後移動對應的欄位
   */
  $(document).on("click", "#spNavRightUl .sp-nav_right a", function (e) {
    // 點擊後關閉 ps.先執行關閉在移動不然會錯
    var $this = $(this).parent().siblings("#clickMenu");
    var $parent = $this.parent();
    var $isOpen = $parent.hasClass("click--active");
    var $btnChange = $(".sp-nav-right__mobile__click");
    var $body = $("body");
    clickMenuClose($this, $btnChange, $parent, $body);
    // END 點擊後關閉
    var $winWt = $(document).width();
    var _href = $(this).attr("href").substr(1);
    var toElem = $('[data-title="' + _href + '"]');
    var toActiveBtn = toElem.offset().top + 10;
    // 959watch css
    if ($winWt > $screenChangeWt) {
      $("html, body").animate({ scrollTop: toActiveBtn });
    } else {
      $("html, body").animate({
        scrollTop: toActiveBtn - $("#spRightNav").height(),
      });
    }

    return false;
  });
  // 滾動 END

  /*
   ** 左邊電梯 mobile 彈窗打開
   */
  function doClick(e) {
    e.preventDefault();
    // 彈出視窗
    var $overlayEvents = $(this);
    var $body = $("body");
    var touchId = $(this).attr("data-dialog");
    var targetId = $(".js--main--dialog");
    // console.log($(this).hasClass('footer__fixed-active'))
    var openButton = $(".js-ElevatorBtn-m");
    if ($(this).hasClass("footer__fixed-active")) {
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      SettingzIndex("", "", "", "");
      openButton.removeClass("footer__fixed-active");
    } else {
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      // openButton.html(elevatoBtn_content.open);
      // 拿掉可以做到直接點開，但body會是fixed
      //- fixed: 20-0525，不確定之前為什麼拿掉，如果body為fixed的狀態會導致宮格無法滑出
      SettingzIndex("", "", "", "");

      openButton.removeClass("footer__fixed-active");

      //- 新增彈窗內容
      initDialog();
      $(this).toggleClass("footer__fixed-active");
    }

    function comparisonDialog() {
      targetId.each(function () {
        if (touchId == $(this).attr("id")) {
          $(this).fadeIn(200).addClass("overlay-open");
        }
      });
    }

    function SettingzIndex(size, hidden, position, overflow) {
      $(".sp__visual").css("z-index", size);
      $("html, body").css({
        "overflow-y": overflow,
        top: position,
        right: position,
        left: position,
        bottom: position,
        position: hidden,
      });
    }

    function initDialog() {
      $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');
      comparisonDialog();
      // SettingzIndex("1000", "fixed", "0", "scroll");
    }

    // .END 彈出視窗
  }

  /*
   ** 左邊電梯 點擊黑幕關閉
   */
  function overwayDoClick(e) {
    e.preventDefault();
    // 彈出視窗
    var $overlayEvents = $(this);
    var $body = $("body");
    var targetId = $(".js--main--dialog");
    var openButton = $(".js-ElevatorBtn-m");
    $overlayEvents.remove();
    targetId.fadeOut(200).removeClass("overlay-open");
    SettingzIndex("", "", "", "");

    openButton.removeClass("footer__fixed-active");

    function SettingzIndex(size, hidden, position, overflow) {
      $(".sp__visual").css("z-index", size);
      $("html, body").css({
        "overflow-y": overflow,
        top: position,
        right: position,
        left: position,
        bottom: position,
        position: hidden,
      });
    }
  }

  $(document).on("click", ".js-ElevatorBtn-m", doClick);
  $(document).on("click", "#overlay-mask", overwayDoClick);
  $(document).on("click", "#clickMenu", function () {
    var $this = $(this);
    var $parent = $this.parent();
    var $isOpen = $parent.hasClass("click--active");
    var $btnChange = $(".sp-nav-right__mobile__click");
    var $body = $("body");
    if ($isOpen == false) {
      clickMenuOpen($this, $btnChange, $parent, $body);
    } else {
      clickMenuClose($this, $btnChange, $parent, $body);
    }
  });
  function clickMenuOpen($this, $btnChange, $parent, $body) {
    $body.css("padding-top", "39px");
    $btnChange.addClass("btn--active");
    $parent.addClass("click--active close");
    $this.addClass("close");
    $parent.parents(".navRightBar").addClass("add--fixed");
  }

  function clickMenuClose($this, $btnChange, $parent, $body) {
    $body.css("padding-top", "");
    $btnChange.removeClass("btn--active");
    $parent.removeClass("click--active");
    $this.removeClass("close");
    $parent.parents(".navRightBar").removeClass("add--fixed");
  }
});
