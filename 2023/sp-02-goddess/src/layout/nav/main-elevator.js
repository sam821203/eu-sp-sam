/*
 ** TODO: 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 離線測試與線上icon要分開切換
 */
/*
 ** TODO: 切換離線或線上的左電梯小網icon
 * 1. 註解掉或false可以使左電梯小網三顆icon使用相對路徑，離線檢查用
 * 2. true時，會抓navContent第一項的linkUrl（主會場網址）做成絕對路徑
 * 3. 要這樣作是為了霸道電梯在禮包內生成時要用絕對路徑連回主活動要圖片( 不然禮包內會變成相對路徑，找不到圖片 )
 */
var onLineIcon = true;

/**
 * TODO: 選填右電梯呈現樣式
 * @param {string} rightStyle - 固定單字如下，若不填或填非設定的單字，則不會報錯也沒有動畫
 * 'fade-in' - 原地淡入
 * 'left-in' - 從螢幕左邊飛入
 * 'up-in' - 從下方往上淡入
 */
var rightStyle = "left-in";

/*
  ** 行銷電梯：判斷左右兩邊電梯是否出現
  */
var leftNav = true;
var rightNav = true;

// 配合css 決定大小網寬度
var $screenChangeWt = 1212;
// }

$(function () {
  // 檢查若是sp頁，則要補上絕對路徑
  let dataUrlPrefix;

  // 如果已經有dataCheckElevator表明在禮包，取得禮包內主視覺電梯位置（給icon加絕對路徑）沒有的話就使用相對路徑即可。
  if(typeof dataCheckElevator !== 'undefined') {
      dataUrlPrefix =  dataCheckElevator.onlineElevatorUrl.split('index.html')[0];
  } else {
    dataUrlPrefix = '';
  }

  // 如果是被霸道電梯帶過去活動頁，data將會先被fetch存在全域變數dataMainElevator，就不用重複取得
  if(typeof dataMainElevator !== 'undefined') {
    // console.log(dataMainElevator);
    // console.log('prefeteched');

    initBuildElevator(dataMainElevator);
  } else {
    // fetch路徑取得json檔
    const timeStamp = new Date().getTime();
    const dataUrl = dataUrlPrefix + 'data-main-elevator.json' + '?' + timeStamp;
    fetch( dataUrl )
    .then( response => {
      if ( !response.ok ) {
        throw new Error( 'fetch時http錯誤：' + response.status );
      }
      return response.json();
    })
    .then( json => initBuildElevator(json) )
    .catch(error => {
      throw new Error( '本機端fetch失敗：' + error );
    });
  }

  // 商品頁如果沒有離線右電梯，則共用電梯時也不開離線右電梯
  if (window.notRightElevator) rightNav = false;
  if (!leftNav && !rightNav) return false;

  var getSearch = location.href.split("linkName")[1];

  // 開始建構電梯並載入相關功能
  function initBuildElevator( json ) {
    // 新增小網彈窗
    addMobilePopup()
    // 新增小網下拉選單
    addMobiledropDown();
    // 新增小網底部固定欄
    addFixedBottomNav(json);
    // 新增網址跨頁用參數
    addLinkName(json);
    // 建構左邊電梯
    spScrollNav(json);
    // 建構右邊電梯
    spScrollRightNav();
    // 功能：右電梯小網時點擊item後會橫向移動置中
    mobileAnchorClickGoMiddle();
    // 功能：右電梯點擊時平滑scroll錨點
    ahchorSmoothScroll();
    // 功能：左電梯小網時點擊彈窗
    $(document).on("click", ".js-ElevatorBtn-m", doClick);
    // 功能：左電梯小網時點擊遮罩關閉
    $(document).on("click", "#overlay-mask", overwayDoClick);

  };

  /*
   ** 新增小網彈窗
   */
  function addMobilePopup(){
    $("body").append(
      '<div class="elevatorHome js--main--dialog" id="elevatorHome_2"></div>'
    );
    $("body").addClass("safe-area-padding-bottom");
    $("head").append(
      '<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">'
    );
  }
  /*
   ** 新增小網固定欄
   */
  function addFixedBottomNav(json) {
    const dataJson = json;
    const iconPathPrefix = dataUrlPrefix;
    let bottomMainUrl;

    if (typeof dataJson.bottom[1].webLink === 'undefined') {
      bottomMainUrl = dataJson.main.webLink;
    } else {
      bottomMainUrl = dataJson.bottom[1].webLink;
    }

    $("body").append('<div class="footer__box" id="footerBox"></div>');
    var fixedBottomNav = "";
    fixedBottomNav += '<div class="footer__box">';
    fixedBottomNav += '<ul class="footer__ul">';
    fixedBottomNav +=
      '<li class="footer__list js-ElevatorBtn-m" data-dialog="elevatorHome_2">';
    fixedBottomNav += '<img src="' + iconPathPrefix + 'icon-1.png' + '" alt="">';
    fixedBottomNav += "<p>" + dataJson.bottom[0].text + "</p>";
    fixedBottomNav += "</li>";
    fixedBottomNav += '<li class="footer__list icon__main">';
    fixedBottomNav += '<a href="' + bottomMainUrl + '">';
    fixedBottomNav += '<img src="' + iconPathPrefix + 'icon-2.png' + '" alt="">';
    fixedBottomNav += "<p>" + dataJson.bottom[1].text + "</p>";
    fixedBottomNav += "</a></li>";
    fixedBottomNav +=
      ' <li class="footer__list js-ElevatorBtn-m" data-dialog="elevatorHome">';
    fixedBottomNav += '<img src="' + iconPathPrefix + 'icon-3.png' + '" alt="">';
    fixedBottomNav += "<p>" + dataJson.bottom[2].text + "</p>";
    fixedBottomNav += "</li>";
    fixedBottomNav += "</ul></div>";

    $("#footerBox").html(fixedBottomNav);
  }

  /*
   ** 增加參數
   */
  function addLinkName(json) {
    // 取得電梯連結的網址並加上偵測碼 目的:判斷是哪一頁
    const dataJson = json;

    dataJson.sub.forEach(function (el, index) {
      el.webLink += "?linkNameEv" + (index + 1) + "linkName";
      if(el.mobileLink) el.mobileLink += "?linkNameEv" + (index + 1) + "linkName";
    });
    dataJson.sub.forEach(function (el, index) {
      var detectString = "%3FlinkNameEv" + (index + 1) + "linkName";
      var newLink = "";
      // judge 是否為縮網址 TODO 共用主視覺未測
      var isNotAbbreviation = el.appLink.match("app.html");
      if (isNotAbbreviation) {
        newLink = el.appLink.replace("app.html", "app.html" + detectString);
        el.appLink = newLink;
      }
    });

    dataJson.depart.forEach(function (el, index) {
      el.webLink += "?linkNameEv" + (index + 20) + "linkName";
      if(el.mobileLink) el.mobileLink += "?linkNameEv" + (index + 1) + "linkName";
    });
    dataJson.depart.forEach(function (el, index) {
      var detectString = "%3FlinkNameEv" + (index + 20) + "linkName";
      var newLink = "";
      // judge 是否為縮網址 TODO 共用主視覺未測
      var isNotAbbreviation = el.appLink.match("app.html");
      if (isNotAbbreviation) {
        newLink = el.appLink.replace("app.html", "app.html" + detectString);
        el.appLink = newLink;
      }
    });
  }

  /*
   ** 左邊電梯(大網)
   */
  function spScrollNav(json) {
    if (!leftNav) return false;

    const dataJson = json;

    function buildNav() {
      var navHtml = "";

      // 建構主會場
      navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
      navHtml += '<ul class="sp-nav_ul js-nav_ul">';
      navHtml +=
        '<li class="sp-nav__home"><a href="' +
        dataJson.main.webLink +
        '" title="回主會場" target="' +
        (dataJson.main.blank ? '_blank' : '') +
        '">回主會場</a></li>';

      /*
       ** judge which url is active !!
       * 記得要在url後面加上?linkName="value"
       */

      // 建構次活動區
      for (var i = 0; i < dataJson.sub.length; i++) {
        var getSearch1 = dataJson.sub[i].webLink.split("linkName")[1];

        // 抓取網址相同 && 自己的網址切割後不是空值
        if (getSearch === getSearch1 && getSearch1 != undefined) {
          navHtml +=
            '<li class="sp-nav__' +
            i +
            ' js-sp__nav__all sp-nav_g1"><a href="' +
            dataJson.sub[i].webLink +
            '" title="' +
            dataJson.sub[i].text +
            '"  target="' +
             (dataJson.sub[i].target ? '_blank' : '') +
            '" class="active">' +
            dataJson.sub[i].text +
            "</a></li>";
        } else {
          navHtml +=
            '<li class="sp-nav__' +
            (i + 1) +
            ' js-sp__nav__all sp-nav_g1"><a href="' +
            dataJson.sub[i].webLink +
            '" title="' +
            dataJson.sub[i].text +
            '" target="' +
             (dataJson.sub[i].target ? '_blank' : '') +
            '">' +
            dataJson.sub[i].text +
            "</a></li>";
        }
      }

      // 建構分館區
      navHtml += '<li class="sp-nav__home_2"><a href="">精選品類</a></li>';
      for (var i = 0; i < dataJson.depart.length; i++) {
        // i=0，進迴圈一次跑兩個; i=1，時不執行
        if (i % 2 === 0) {
          var getSearch2 = dataJson.depart[i].webLink.split("linkName")[1];
          var getSearch3 = dataJson.depart[i + 1].webLink.split("linkName")[1];
          // 大網的sp-nav_g2
          navHtml +=
            '<li class="sp-nav__2' + i + ' js-sp__nav__all sp-nav_g2">';
          isThisPage();
          navHtml += "</li>";
        }
        // 抓取網址相同 && 自己的網址切割後不是空值
      }
      navHtml += '<li class="sp-nav__bottom"></li>';
      navHtml += "</ul>";
      navHtml += "</nav>";

      elevatorHomeAddWhere();

      /*
       ** 跳到那一頁的時候看是哪一個URL，且亮燈
       */
      function isThisPage() {
        var first = dataJson.depart[i];
        var second = dataJson.depart[i + 1];
        if (getSearch === getSearch2 && getSearch2 != undefined) {
          navHtml += clickActive(first, true);
          navHtml += clickActive(second, false);
        } else if (getSearch === getSearch3 && getSearch3 != undefined) {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, true);
        } else {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, false);
        }
      }

      function clickActive(obj, active) {
        if (active) {
          return (
            '<a href="' +
            obj.webLink +
            '" title="' +
            obj.text +
            '" target="' +
            (obj.blank ? '_blank' : '') +
            '" class="nav_bg2 active">' +
            obj.text +
            "</a>"
          );
        } else {
          return (
            '<a href="' +
            obj.webLink +
            '" title="' +
            obj.text +
            '" target="' +
            (obj.blank ? '_blank' : '') +
            obj.target +
            '" class="nav_bg2">' +
            obj.text +
            "</a>"
          );
        }
      }

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        var parent = $("#elevatorHome");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    /*
     ** 小網次活動
     */
    function buildMobileNav(isApp = false) {
      var navHtml = "";

      function buildMobileBrandContent() {
        navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
        /*
         ** 分館
         */
        // navHtml += '<p class="sp-nav__home_2">精選品類</p>';
        navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-1">';
        for (var i = 0; i < dataJson.sub.length; i++) {
          const subMobileLink = dataJson.sub[i].mobileLink ? dataJson.sub[i].mobileLink : dataJson.sub[i].webLink;
          const subFinalLink = isApp ? dataJson.sub[i].appLink : subMobileLink;

          // i=0，進迴圈一次跑兩個; i=1，時不執行

          var getSearch2 = subFinalLink.split("linkName")[1];

          // 抓取網址相同 && 自己的網址切割後不是空值
          if (getSearch === getSearch2 && getSearch2 != undefined) {
            navHtml +=
              '<li class="sp-nav__2' +
              i +
              ' js-sp__nav__all sp-nav_g1 active"><a href="' +
              subFinalLink +
              '" title="' +
              dataJson.sub[i].text +
              '" target="' +
              (dataJson.sub[i].target ? '_blank' : '') +
              '" class="nav_bg2">' +
              dataJson.sub[i].text +
              "</a></li>";
          } else {
            navHtml +=
              '<li class="sp-nav__2' +
              i +
              ' js-sp__nav__all sp-nav_g1"><a href="' +
              subFinalLink +
              '" title="' +
              dataJson.sub[i].text +
              '" target="' +
              (dataJson.sub[i].target ? '_blank' : '') +
              '" class="nav_bg2">' +
              dataJson.sub[i].text +
              "</a></li>";
          }
        }
        navHtml += "</ul>";
        navHtml += "</nav>";
      }

      buildMobileBrandContent();
      elevatorHomeAddWhere();

      /*
       ** 跳到那一頁的時候看是哪一個URL，且亮燈
       */
      function isThisPage() {
        var first = isAppNav_brand[i];
        var second = isAppNav_brand[i + 1];
        if (getSearch === getSearch2 && getSearch2 != undefined) {
          navHtml += clickActive(first, true);
          navHtml += clickActive(second, false);
        } else if (getSearch === getSearch3 && getSearch3 != undefined) {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, true);
        } else {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, false);
        }
      }

      function clickActive(obj, active) {
        if (active) {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2 active">' +
            obj.words +
            "</a>"
          );
        } else {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2">' +
            obj.words +
            "</a>"
          );
        }
      }

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        var parent = $("#elevatorHome");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    // 小網分館
    function buildMobileNav_2(isApp = false) {
      var navHtml = "";

      function buildMobileActivityContent() {
        navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
        navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-1">';

        /*
         ** judge which url is active !!
         * 記得要在url後面加上?linkName="value"
         */
        var url = window.location;
        var urlHref = url.href;
        var getSearch = urlHref.split("linkName")[1];
        for (var i = 0; i < dataJson.depart.length; i++) {
          const departMobileLink = dataJson.depart[i].mobileLink ? dataJson.depart[i].mobileLink : dataJson.depart[i].webLink;
          const departFinalLink = isApp ? dataJson.depart[i].appLink : departMobileLink;

          var getSearch1 = departFinalLink.split("linkName")[1];

          // 抓取網址相同 && 自己的網址切割後不是空值
          if (getSearch === getSearch1 && getSearch1 != undefined) {
            navHtml +=
              '<li class="sp-nav__' +
              i +
              ' js-sp__nav__all sp-nav_g1 active"><a href="' +
              departFinalLink +
              '" title="' +
              dataJson.depart[i].text +
              '"  target="' +
              (dataJson.depart[i].target ? '_blank' : '') +
              '">' +
              dataJson.depart[i].text +
              "</a></li>";
          } else {
            navHtml +=
              '<li class="sp-nav__' +
              i +
              ' js-sp__nav__all sp-nav_g1"><a href="' +
              departFinalLink +
              '" title="' +
              dataJson.depart[i].text +
              '" target="' +
              (dataJson.depart[i].target ? '_blank' : '') +
              '">' +
              dataJson.depart[i].text +
              "</a></li>";
          }
        }

        navHtml += "</ul>";
        navHtml += "</ul>";
        navHtml += "</nav>";
      }

      buildMobileActivityContent();
      elevatorHomeAddWhere();

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        // 要新增html tag 在上面 TODO 看能不能用js新增
        var parent = $("#elevatorHome_2");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    // judge app | not app
    function checkAppRunBuild() {
      // is app
      if (isApp()) {
        const isApp = true;
        buildMobileNav(isApp);
        // 新增
        buildMobileNav_2(isApp);
      } else {
        // is desktop | mobile
        resizeInitPage();
        $(window).on("resize", resizeInitPage);
      }
    }

    function resizeInitPage() {
      var $winWt = $(document).width();
      // desktop
      if ($winWt > $screenChangeWt) {
        buildNav();
        resizeScrollTop();
      }
      // mobile
      else {
        buildMobileNav();
        // 新增
        buildMobileNav_2();
      }
    }

    // 滾動效果(For desktop)
    function resizeScrollTop() {
      var _document = $(document);
      _document.on("scroll", function () {
        var $spFixedNav = $("#spFixedNav");
        // judge desktop移動距離
        function judgeScrollTop() {
          if (_document.scrollTop() >= 300) {
            $spFixedNav.css({
              "pointer-events": "",
            });
          }
        }

        var $winWt = $(document).width();
        if ($winWt > $screenChangeWt) {
          judgeScrollTop();
        }
      });
    }

    // output value
    checkAppRunBuild();
    // 情境: 使用者手動伸縮大小網時
    var isScreenResize = true;
    $(window).resize(function () {
      var $winWt = $(document).width();
      if ($winWt > $screenChangeWt && isScreenResize) {
        checkAppRunBuild();
        $("#elevatorHome").css("display", "block");
        // 情境: 大網時上面的活動要關掉
        $("#elevatorHome_2").css("display", "none");
        isScreenResize = false;
      } else if ($winWt <= $screenChangeWt) {
        $("#elevatorHome").css("display", "none");
        isScreenResize = true;
      }
    });
  }
  // 左邊電梯  /.END

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
      '<li class="sp-nav-right__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
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

      document.addEventListener( "scroll", checkRightActive );

      /**
       * 測量是否過長
       */
      var elevatorElement = document.getElementById( 'spRightNav' );
      var elevatorHeight = elevatorElement.clientHeight;
      var elevatorOffsetTop = detectElementTop(elevatorElement);
      var windowHeight = window.innerHeight;
      var elevatorOffsetWindow = elevatorOffsetTop + elevatorHeight - windowHeight;

      if ( window.innerWidth >= 960 &&  elevatorOffsetWindow > 0 ) {
        var pageHeight = document.body.clientHeight;
        var elevatorPageRatio = elevatorOffsetWindow / pageHeight;
        document.addEventListener( 'scroll', function () {
          if ( window.scrollY > ( windowHeight + elevatorHeight / 2 ) ) {
            elevatorElement.style.transform = 'translateY(' + ( window.scrollY * elevatorPageRatio * -1 ) + 'px' + ')';
          } else {
            // reset
            elevatorElement.style = '';
          }
        } );
      }
    }

    /*
     ** judge 如果沒有值 右邊電梯隱藏
     */
    var result = arrDataGroup.filter(function (word) {
      return word && word.trim();
    });
    if (result.length == 0) {
      document.getElementById("navRightBar").style.display = "none";
    }

    var goTopEffect = function (selectors) {
      selectors.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          300
        );
      });
    };

    // last li contact 'top'
    var $spNavLastLi = $spWrapRight.find("#navTop");
    goTopEffect($spNavLastLi);
  }
  // 右邊電梯  /.END

  // judge now which isClick
  function mobileAnchorClickGoMiddle(){
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
  }

  /*
   ** 滾動function
   */
  function ahchorSmoothScroll() {
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
      var $winWt = $(document).width();
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
      // 1212 watch css
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
  }

  /*
   ** 左邊電梯 mobile 彈窗打開
   */
  function doClick(e) {
    e.preventDefault();
    // 彈出視窗
    var $body = $("body");
    var touchId = $(this).attr("data-dialog");
    var targetId = $(".js--main--dialog");
    // console.log($(this).hasClass('footer__fixed-active'))
    var openButton = $(".js-ElevatorBtn-m");
    if ($(this).hasClass("footer__fixed-active")) {
      $body.removeClass('locked');
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      SettingzIndex("", "", "", "");
      openButton.removeClass("footer__fixed-active");
    } else {
      $body.removeClass('locked');
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      // openButton.html(elevatoBtn_content.open);
      // 拿掉可以做到直接點開，但body會是fixed
      //- fixed: 20-0525，不確定之前為什麼拿掉，如果body為fixed的狀態會導致宮格無法滑出
      SettingzIndex("", "", "", "");

      $body.addClass('locked');
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
    $body.removeClass('locked');

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

  /*
   ** 選單下拉樣式
   */
  function addMobiledropDown(){
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
  }

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

// 偵測元素距離頁面高度
function detectElementTop(el) {
  var actualTop = el.offsetTop;
  var current = el.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

function checkAppRunBuild() {
  // app-view | web-view
  var isUiWebview =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );

  // is app
  if (isUiWebview) {
    const isApp = true;
    buildMobileNav(isApp);
    // 新增
    buildMobileNav_2(isApp);
  }
  // not app
  else {
    // is desktop | mobile
    resizeInitPage();
    $(window).on("resize", resizeInitPage);
  }
}

function isApp() {
  var isUiWebview =
    /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
      navigator.userAgent
    );
  if (isUiWebview) return true;
  else return false;
}