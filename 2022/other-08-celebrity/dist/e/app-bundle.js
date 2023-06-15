!(function (e) {
  function t(t) {
    for (
      var n, a, l = t[0], d = t[1], c = t[2], u = 0, p = [];
      u < l.length;
      u++
    )
      (a = l[u]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0);
    for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
    for (s && s(t); p.length; ) p.shift()();
    return i.push.apply(i, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < i.length; t++) {
      for (var r = i[t], n = !0, l = 1; l < r.length; l++) {
        var d = r[l];
        0 !== o[d] && (n = !1);
      }
      n && (i.splice(t--, 1), (e = a((a.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { 0: 0 },
    i = [];
  function a(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function (e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var l = (window.webpackJsonp = window.webpackJsonp || []),
    d = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var c = 0; c < l.length; c++) t(l[c]);
  var s = d;
  i.push([5, 1]), r();
})([
  ,
  ,
  function (e, t, r) {},
  ,
  function (e, t) {
    (Number.isNaN =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && isNaN(e);
      }),
      String.prototype.repeat ||
        (String.prototype.repeat = function (e) {
          "use strict";
          if (null == this)
            throw new TypeError("can't convert " + this + " to object");
          var t = "" + this;
          if (((e = +e) != e && (e = 0), e < 0))
            throw new RangeError("repeat count must be non-negative");
          if (e == 1 / 0)
            throw new RangeError("repeat count must be less than infinity");
          if (((e = Math.floor(e)), 0 == t.length || 0 == e)) return "";
          if (t.length * e >= 1 << 28)
            throw new RangeError(
              "repeat count must not overflow maximum string size"
            );
          var r = t.length * e;
          for (e = Math.floor(Math.log(e) / Math.log(2)); e; ) (t += t), e--;
          return (t += t.substring(0, r - t.length));
        });
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    r(2);
    var n = r(1),
      o = r.n(n);
    r(3), r(4);
    function i() {
      var e = (e || navigator.userAgent).toLowerCase(),
        t = e.match(/android\s([0-9\.]*)/i);
      return t ? t[1] : void 0;
    }
    function a(e) {
      return document.body.clientWidth >= e;
    }
    function l(e, t, r, n) {
      var o =
        /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
          navigator.userAgent
        )
          ? t
          : a(e)
          ? r
          : n;
      return n || (n = r), o;
    }
    function d() {
      var e = 0;
      return (
        void 0 !== window.pageYOffset
          ? (e = window.pageYOffset)
          : void 0 !== document.compatMode &&
            "BackCompat" != document.compatMode
          ? (e = document.documentElement.scrollTop)
          : void 0 !== document.body && (e = document.body.scrollTop),
        e
      );
    }
    function c(e, t) {
      return "object" != typeof e
        ? (t && console.error(t), !1)
        : (!Array.isArray(e) && null !== e) || (t && console.error(t), !1);
    }
    function s(e, t, r, n) {
      var o = [],
        i = typeof e;
      return (
        "undefined" === i
          ? t && o.push(t)
          : "string" === i
          ? (n && o.push(t), o.push(e))
          : Array.isArray(e)
          ? (n && o.push(t),
            e.forEach(function (e) {
              o.push(e);
            }))
          : r && console.error(r),
        o
      );
    }
    function u(e) {
      var t =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      return t ? t(e) : e();
    }
    !(function () {
      if (
        -1 == navigator.appName.indexOf("Internet Explorer") ||
        -1 != navigator.appVersion.indexOf("MSIE 1")
      )
        return !1;
      var e = -1 == location.href.indexOf("u-mall");
      alert(
        (e ? "東森會員" : "森森會員") +
          "您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。"
      );
    })();
    !(function (e) {
      if (
        !(function (e) {
          return (
            !!i && ("string" == typeof i() ? parseInt(i(), 10) < e : void 0)
          );
        })(e)
      )
        return !1;
      alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。");
    })(5);
    function p(e, t) {
      var r = { top: e || 0, left: t || 0, behavior: "smooth" },
        n = "scrollBehavior" in document.documentElement.style;
      if (window.jQuery)
        $("html,body")
          .stop()
          .animate({ scrollTop: r.top, scrollLeft: r.left }, 500);
      else if (n) window.scrollTo(r);
      else {
        var o = function () {
          (window.scrollX == r.left && window.scrollY == r.top) ||
            setTimeout(function () {
              window.scrollTo(window.scrollX - 100, window.scrollY - 100), o();
            }, 0);
        };
        o();
      }
    }
    ((v = document.createElement("button")).id = "fixedGoTop"),
      v.classList.add("go-top"),
      v.classList.add("js--go-top"),
      (v.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="Gradient" x1="48" y1="5" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" offset="0"/><stop stop-color="#fff" stop-opacity="0.5" offset="1"/></linearGradient></defs><circle cx="24" cy="24" r="23" fill="transparent" stroke-width="1" stroke="url(#Gradient)"/><path fill="#fff" d="M23.5 15h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V30.25a.75.75 0 0 1-1.493.102l-.007-.102V17.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z"/></svg>'),
      document.body.appendChild(v),
      window.addEventListener("load", g),
      window.addEventListener("load", w),
      window.addEventListener("resize", w),
      Array.apply(null, document.querySelectorAll('a[href^="#"]')).forEach(
        function (e) {
          e.addEventListener("click", function (e) {
            var t,
              r = document.querySelector(this.getAttribute("href"));
            if (
              (t =
                r ||
                document.querySelector(
                  "[data-title=" + this.getAttribute("href").split("#")[1] + "]"
                ))
            ) {
              e.preventDefault();
              var n = document.getElementById("progressBar")
                  ? document.getElementById("progressBar").clientHeight + 4
                  : 0,
                o = document.getElementById("navSub")
                  ? document.getElementById("navSub").clientHeight
                  : 0,
                i = o > 0 ? o : n;
              p(t.offsetTop - i);
            }
          });
        }
      ),
      (f = document.body),
      (m = document.createElement("div")),
      (y = document.createElement("div")),
      (m.id = "progressBarWrap"),
      (m.style.opacity = 0),
      (m.style.position = "fixed"),
      (m.style.zIndex = 200),
      (m.style.top = 0),
      (m.style.backgroundColor = "rgba(0, 0, 0, 0.3)"),
      (m.style.width = "100%"),
      (m.style.height = "0.5vh"),
      (y.style.backgroundColor = "#cc1e05"),
      (y.style.backgroundImage =
        "linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)"),
      (y.style.height = "100%"),
      (y.id = "progressBar"),
      m.appendChild(y),
      f.insertBefore(m, f.firstChild),
      d(),
      document.addEventListener("DOMContentLoaded", function () {
        var e, t;
        (e = Array.apply(null, document.querySelectorAll("#progressBar"))),
          (t = 0),
          e.length > 1 &&
            e.forEach(function (e) {
              var r = e.parentNode;
              "progressBarWrap" === r.id
                ? ++t > 1 && r.parentNode.removeChild(r)
                : r.parentNode.removeChild(r);
            });
      }),
      window.addEventListener("load", function () {
        u(E);
      }),
      window.addEventListener("scroll", function () {
        u(E);
      });
    var f,
      m,
      y,
      v,
      h = !1;
    function g() {
      Array.apply(null, document.querySelectorAll(".js--go-top")).forEach(
        function (e) {
          e.addEventListener("click", b);
        }
      );
    }
    function b(e) {
      e.preventDefault(), p(0);
    }
    function w() {
      var e = document.body.clientWidth,
        t = document.getElementById("navGoTop"),
        r = document.getElementById("fixedGoTop");
      t && e >= 1260
        ? (r.style.display = "none")
        : window.addEventListener("scroll", L);
    }
    function L() {
      var e = document.getElementById("fixedGoTop");
      window.scrollY >= 300
        ? e.classList.add("is-visible")
        : e.classList.remove("is-visible");
    }
    function E() {
      var e,
        t,
        r,
        n = document.getElementById("progressBarWrap");
      (document.getElementById("progressBar").style.width =
        ((e = d()),
        (t = document.body.scrollHeight - window.innerHeight),
        (r = document.body.clientWidth),
        parseInt((e / t) * r) + "px")),
        h ? (n.style.opacity = 1) : (h = !0);
    }
    var S = r(0),
      A = r.n(S);
    new A.a("#sliderW2M2Item", {
      autoplay: { delay: 2e3, disableOnInteraction: !1 },
      grabCursor: !0,
      effect: "flip",
      flipEffect: { slideShadows: !1 },
      initialSlide: Math.floor(
        Math.random() *
          document.querySelectorAll("#sliderW2M2Item .swiper-slide").length
      ),
      lazy: { loadPrevNext: !0 },
      loop: !0,
      perspective: !0,
      slidesPerGroup: 2,
      speed: 800,
      watchSlidesProgress: !0,
      watchSlidesVisibility: !0,
    });
    function C(e) {
      if (void 0 === e) return console.error("沒有資料來源");
    }
    function N(e) {
      return e ? (c(e, "客製化設定請用物件表示"), e) : {};
    }
    function x(e, t, r, n) {
      n = void 0 === n || n;
      var o,
        i,
        a = N(t);
      if ((n && C(e), "string" == typeof e || "number" == typeof e)) {
        var l = Number(e);
        isNaN(l) || 0 === l
          ? (console.log(e), console.error("銷編數值有誤"))
          : (o = { productNumber: l });
      } else {
        c(e, "資料格式不正確");
        var d = a.productNumberKey || "productNumber";
        if ("string" == typeof e[d] || "number" == typeof e[d]) {
          l = Number(e[d]);
          isNaN(l) || 0 === l
            ? (console.log(e), console.error("銷編數值有誤"))
            : (o = e);
        } else if (e[d]) console.log(e), console.error("銷編格式錯誤");
        else {
          var s = a.nameKey || "name",
            u = a.textKey || "text",
            p = a.priceKey || "price";
          e[s] && (e[u] || e[p])
            ? (o = e)
            : (console.log(e),
              console.error("無銷編的話品名與價格/促銷字兩者都要填"));
        }
      }
      if (((i = r), Array.isArray(i) || c(i))) {
        var f = [];
        return (
          r.forEach(function (e) {
            "function" == typeof e
              ? f.push(r(o, a))
              : console.error("callback並非函式");
          }),
          f
        );
      }
      if ("function" == typeof r) return r(o, a);
      console.error("callback並非函式");
    }
    function T(e, t) {
      return x(e, t, k, !1);
    }
    function k(e, t) {
      var r,
        n,
        o,
        i,
        a = t.productNumberKey || "productNumber",
        d = t.webLinkKey || "webLink",
        c = t.mobileLinkKey || "mobileLink",
        s = t.appLinkKey || "appLink",
        u = t.titleKey || "name";
      if (e[d]) (r = e[d]), (n = e[c] ? e[c] : r), (o = e[s] ? e[s] : n);
      else if (e[a]) {
        (r = "https://www.etmall.com.tw/i/" + e.productNumber),
          (n = "https://m.etmall.com.tw/Product/" + e.productNumber),
          (o = "etmall://open?pgid=1&gd=" + e.productNumber);
      } else
        console.error("網址填寫錯誤：沒有網址來源，客製連結至少要填web網址");
      return (i = e[u] || ""), [l(960, o, r, n), i];
    }
    function B(e, t) {
      return x(e, t, I, !1);
    }
    function I(e, t) {
      var r,
        n = t.productNumberKey || "productNumber",
        o = t.imgSrcKey || "imgSrc",
        i = t.altKey || "name";
      if (e[o]) r = e[o];
      else if (e[n]) {
        var l = t.imgSizeBreakpoint || 768,
          d = t.imgSizeWebSize || "XL",
          c = t.imgSizeMobileSize || "L",
          s = "-1_" + (a(l) ? d : c) + ".jpg",
          u = e[n];
        r =
          "https://media.etmall.com.tw/NXimg/00" +
          u.toString().slice(0, 4) +
          "/" +
          u +
          "/" +
          u +
          s;
      } else console.error("圖片來源填寫錯誤：未指定銷售編號或是圖片來源");
      return [r, e[i] ? e[i] : ""];
    }
    function M(e, t) {
      return x(e, t, z, !1);
    }
    function z(e, t) {
      var r = t.productNumberKey || "productNumber",
        n = document.createElement("custom"),
        o = document.createElement("custom");
      return (
        n.setAttribute("tag", "GOOD_NAME"),
        n.setAttribute("goodid", e[r]),
        o.setAttribute("tag", "GOOD_SALEPRC"),
        o.setAttribute("goodid", e[r]),
        [n, o]
      );
    }
    function _(e, t) {
      var r,
        n = N(t),
        o = n.namekey || "name",
        i = n.pricekey || "price",
        a = n.textkey || "text";
      if (((r = e[o] || ""), e[a])) var l = !0;
      return [
        r,
        l
          ? e[a]
          : Number.prototype.toLocaleString
          ? isNaN(Number(e[i]))
            ? e[i] || ""
            : Number(e[i]).toLocaleString() || ""
          : e[i] || "",
      ];
    }
    function O(e, t) {
      var r,
        n,
        o = (t = t || {}).namekey || "name",
        i = t.pricekey || "price",
        a = t.textkey || "text",
        l = document.createElement("span"),
        d = document.createElement("span"),
        c = !1,
        s = void 0 === t.isAutoSync ? "auto" : t.isAutoSync;
      if (!1 === s || "false" === s || "none" === s)
        var u = void 0 !== t.isNameAutoSync && t.isNameAutoSync,
          p = void 0 !== t.isPriceAutoSync && t.isPriceAutoSync;
      return (
        "auto" === s
          ? (e[o] ? ((l.innerHTML = _(e, t)[0]), (r = l)) : (r = M(e, t)[0]),
            e[a] && (c = !0),
            e[a] || e[i]
              ? ((d.innerHTML = _(e, t)[1]), (n = d))
              : (d.appendChild(M(e, t)[1]), (n = d)))
          : "all" === s
          ? ((r = M(e, t)[0]), d.appendChild(M(e, t)[1]), (n = d))
          : !1 === s || "false" === s || "none" === s
          ? (u
              ? (r = M(e, t)[0])
              : e[o]
              ? ((l.innerHTML = _(e, t)[0]), (r = l))
              : console.error("設定手動填name卻沒有找到來源"),
            p
              ? (d.appendChild(M(e, t)[1]), (n = d))
              : (e[a] && (c = !0),
                e[a] || e[i]
                  ? ((d.innerHTML = _(e, t)[1]), (n = d))
                  : console.error("設定手動填text/price卻沒有找到來源")),
            u ||
              p ||
              (e[o]
                ? ((l.innerHTML = _(e, t)[0]), (r = l))
                : console.error("設定手動填name卻沒有找到來源"),
              e[a] && (c = !0),
              e[a] || e[i]
                ? ((d.innerHTML = _(e, t)[1]), (n = d))
                : console.error("設定手動填text/price卻沒有找到來源")))
          : console.error("isAutoSync設定錯誤"),
        [r, n, c]
      );
    }
    !(function () {
      var e = document.getElementById("tabBoxSecond"),
        t = Array.apply(null, e.querySelectorAll(".tab__item")),
        r = document.getElementById("tabContentBlockSecond"),
        n = Array.apply(null, r.querySelectorAll(".content__box"));
      if (t.length !== n.length)
        return console.error("Tab Item數量與Content Box數量不符"), !1;
      (function () {
        if (
          !(
            dataTab1 &&
            dataTab2 &&
            dataTab3 &&
            dataTab4 &&
            dataTab5 &&
            dataTab6
          )
        )
          return !1;
        var e = [dataTab1, dataTab2, dataTab3, dataTab4, dataTab5, dataTab6];
        Array.apply(
          null,
          document.querySelectorAll("#tabContentBlockSecond .swiper-wrapper")
        ).forEach(function (t, r) {
          e[r].forEach(function (e) {
            var r = (function (e, t) {
              C(e);
              var r = (t = t || {}).outerTag || "li",
                n = void 0 !== t.isLazyLoad && t.isLazyLoad,
                o = void 0 === t.isSlider || t.isSlider;
              if (o) {
                var i = t.sliderClass,
                  a = void 0 === t.isSliderLazyLoad || t.isSliderLazyLoad,
                  l = s(i, "swiper-slide", "sliderClass格式不正確", !0);
                if (a) {
                  var d = t.sliderImgLazyLoadClass,
                    c = t.sliderLazyLoadIndicatorClass,
                    u = s(d, null, "sliderImgLazyLoadClass格式不正確", !0),
                    p = s(
                      c,
                      null,
                      "sliderLazyLoadIndicatorClass格式不正確",
                      !0
                    );
                  ["swiper-lazy"].forEach(function (e) {
                    u.push(e);
                  }),
                    [
                      "swiper-lazy-preloader",
                      "swiper-lazy-preloader-black",
                    ].forEach(function (e) {
                      p.push(e);
                    });
                } else if (n) {
                  var f = t.imgLazyLoadClass,
                    m = t.lazyLoadIndicatorSrc || "1x1_low.png",
                    y = s(f, null, "imgLazyLoadClass格式不正確", !0);
                  y.push("lazyload");
                }
              }
              var v = document.createElement("img");
              if (a || n) {
                var h = document.createElement("div");
                (v.dataset.src = B(e, t)[0]), (v.alt = "");
              } else (v.src = B(e, t)[0]), (v.alt = B(e, t)[1]);
              a
                ? (u.forEach(function (e) {
                    v.classList.add(e);
                  }),
                  p.forEach(function (e) {
                    h.classList.add(e);
                  }))
                : n &&
                  (y.forEach(function (e) {
                    v.classList.add(e);
                  }),
                  (v.src = m));
              var g = document.createElement(r),
                b = s(t.outerClass),
                w = o ? l : b;
              Array.isArray(w) &&
                w.forEach(function (e) {
                  g.classList.add(e);
                });
              var L,
                E,
                S = document.createElement("a");
              (S.href = T(e, t)[0]),
                (S.title = T(e, t)[1]),
                (L = O(e, t)[0]),
                (E = O(e, t)[1]);
              var A = O(e, t)[2],
                N = document.createElement("div"),
                x = document.createElement("div"),
                k = document.createElement("div"),
                I = document.createElement("div"),
                M = document.createElement("div"),
                z = document.createElement("div");
              if (
                (N.classList.add("product"),
                N.classList.add("product--dynamic"),
                x.classList.add("product__block"),
                k.classList.add("product__img"),
                I.classList.add("product__text"),
                M.classList.add("product__name"),
                z.classList.add("product__price"),
                k.appendChild(v),
                a && k.appendChild(h),
                M.appendChild(L),
                A)
              )
                z.appendChild(E);
              else {
                var _ = document.createElement("span");
                (_.innerHTML = "$"), z.appendChild(_), z.appendChild(E);
              }
              return (
                I.appendChild(M),
                I.appendChild(z),
                x.appendChild(k),
                x.appendChild(I),
                S.appendChild(x),
                N.appendChild(S),
                g.appendChild(N),
                n ||
                  v.addEventListener("error", function () {
                    g.style.display = "none";
                  }),
                g
              );
            })(e);
            t.appendChild(r);
          });
        });
      })(),
        t.forEach(function (e, r) {
          e.addEventListener("click", function () {
            P(t, r), P(n, r), j(r);
          });
        }),
        j();
    })();
    function P(e, t) {
      e.forEach(function (e) {
        e.classList.remove("active");
      }),
        e[t].classList.add("active");
    }
    function j(e) {
      e = e || 0;
      var t = Array.apply(null, document.querySelectorAll(".tab__slider")),
        r = document.querySelectorAll(".swiper-slide").length;
      return new A.a(t[e], {
        autoplay: { delay: 3e3, stopOnLastSlide: !1, disableOnInteraction: !0 },
        grabCursor: !0,
        init: r > 1 || console.log("沒填輪播資料"),
        lazy: { loadPrevNext: !0 },
        slidesPerView: 2,
        spaceBetween: "3%",
        speed: 600,
        watchSlidesProgress: !0,
        watchSlidesVisibility: !0,
      });
    }
    document.body.classList.add("js-loading"), new o.a().init();
    var q = document.getElementById("scrollBgTop");
    function H() {
      window.scrollY >= 700
        ? q.classList.add("bg-fixed")
        : q.classList.remove("bg-fixed");
    }
    H(), document.addEventListener("scroll", H);
  },
]);
