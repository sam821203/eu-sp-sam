! function (e) {
  function t(t) {
    for (var o, a, s = t[0], d = t[1], l = t[2], u = 0, p = []; u < s.length; u++) a = s[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0;
    for (o in d) Object.prototype.hasOwnProperty.call(d, o) && (e[o] = d[o]);
    for (c && c(t); p.length;) p.shift()();
    return i.push.apply(i, l || []), n()
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
        var d = n[s];
        0 !== r[d] && (o = !1)
      }
      o && (i.splice(t--, 1), e = a(a.s = n[0]))
    }
    return e
  }
  var o = {},
    r = {
      0: 0
    },
    i = [];

  function a(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
  }
  a.m = e, a.c = o, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, a.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) a.d(n, o, function (t) {
        return e[t]
      }.bind(null, o));
    return n
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return a.d(t, "a", t), t
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, a.p = "";
  var s = window.webpackJsonp = window.webpackJsonp || [],
    d = s.push.bind(s);
  s.push = t, s = s.slice();
  for (var l = 0; l < s.length; l++) t(s[l]);
  var c = d;
  i.push([5, 1]), n()
}([, , function (e, t, n) {}, , function (e, t) {
  Number.isNaN = Number.isNaN || function (e) {
    return "number" == typeof e && isNaN(e)
  }, String.prototype.repeat || (String.prototype.repeat = function (e) {
    "use strict";
    if (null == this) throw new TypeError("can't convert " + this + " to object");
    var t = "" + this;
    if ((e = +e) != e && (e = 0), e < 0) throw new RangeError("repeat count must be non-negative");
    if (e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
    if (e = Math.floor(e), 0 == t.length || 0 == e) return "";
    if (t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
    var n = t.length * e;
    for (e = Math.floor(Math.log(e) / Math.log(2)); e;) t += t, e--;
    return t += t.substring(0, n - t.length)
  })
}, function (e, t, n) {
  "use strict";
  n.r(t);
  n(2);
  var o = n(0),
    r = n.n(o);
  n(3), n(4);

  function i() {
    var e = (e || navigator.userAgent).toLowerCase(),
      t = e.match(/android\s([0-9\.]*)/i);
    return t ? t[1] : void 0
  }! function () {
    if (-1 == navigator.appName.indexOf("Internet Explorer") || -1 != navigator.appVersion.indexOf("MSIE 1")) return !1;
    var e = -1 == location.href.indexOf("u-mall");
    alert((e ? "東森會員" : "森森會員") + "您好，微軟(Microsoft)已於2020年1月14日停止支援Windows 7的更新。舊的作業系統與瀏覽器將有被入侵和攻擊的風險。為提升您購物時的安全性，我們停止對Internet Explorer 9 (IE9)瀏覽器及其前代版本的支援。\n建議立即更新您的瀏覽器版本。")
  }();
  ! function (e) {
    if (! function (e) {
        return !!i && ("string" == typeof i() ? parseInt(i(), 10) < e : void 0)
      }(e)) return !1;
    alert("請使用Android 5.0以上版本，建議您更新版本，以獲得最佳瀏覽體驗。")
  }(5);
  ! function () {
    var e = document.createElement("link");
    e.rel = "stylesheet", e.type = "text/css", e.href = "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
    var t, n, o = document.createElement("button");

    function r() {
      var e = document.body.clientWidth,
        t = document.getElementById("navTop"),
        n = document.getElementById("goTop");
      n.style.display = e >= 1213 && t ? "none" : "block"
    }
    o.id = "goTop", o.classList.add("go-top"), o.innerHTML = '<i class="fas fa-arrow-up" style="font-size: 20px;"></i>', document.head.appendChild(e), document.body.appendChild(o), t = document.getElementById("goTop"), n = function () {
      0 != window.scrollY && (window.jQuery ? $("html,body").stop().animate({
        scrollTop: 0
      }, 500) : setTimeout((function () {
        window.scrollTo(0, window.scrollY - 100), n()
      }), 0))
    }, window.addEventListener("scroll", (function () {
      window.scrollY >= 300 ? t.classList.add("is-visible") : t.classList.remove("is-visible")
    })), t.addEventListener("click", n), window.addEventListener("load", r), window.addEventListener("resize", r), window.jQuery && $('a[href^="#"]').on("click", (function (e) {
      var t;
      (t = $(this.getAttribute("href")).length ? $(this.getAttribute("href")) : $("[data-title=" + this.getAttribute("href").split("#")[1] + "]")).length && (e.preventDefault(), $("html,body").stop().animate({
        scrollTop: t.offset().top - 10
      }, 500))
    }));
    var i, a, s, d = !1;

    function l() {
      var e = 0;
      return void 0 !== window.pageYOffset ? e = window.pageYOffset : void 0 !== document.compatMode && "BackCompat" != document.compatMode ? e = document.documentElement.scrollTop : void 0 !== document.body && (e = document.body.scrollTop), e
    }

    function c() {
      var e, t, n, o = document.getElementById("progressBarWrap");
      document.getElementById("progressBar").style.width = (e = l(), t = document.body.scrollHeight - window.innerHeight, n = document.body.clientWidth, parseInt(e / t * n) + "px"), d ? o.style.opacity = 1 : d = !0
    }
    i = document.body, a = document.createElement("div"), s = document.createElement("div"), a.id = "progressBarWrap", a.style.opacity = 0, a.style.position = "fixed", a.style.zIndex = 200, a.style.top = 0, a.style.backgroundColor = "rgba(0, 0, 0, 0.3)", a.style.width = "100%", a.style.height = "0.5vh", s.style.backgroundColor = "#cc1e05", s.style.backgroundImage = "linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)", s.style.height = "100%", s.id = "progressBar", a.appendChild(s), i.insertBefore(a, i.firstChild), l() && (d = !0), document.addEventListener("DOMContentLoaded", (function () {
      var e, t;
      e = Array.apply(null, document.querySelectorAll("#progressBar")), t = 0, e.length > 1 && e.forEach((function (e, n) {
        var o = e.parentNode;
        "progressBarWrap" === o.id ? ++t > 1 && o.parentNode.removeChild(o) : o.parentNode.removeChild(o)
      }))
    }));
    var u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.addEventListener("load", (function () {
      u ? u(c) : c()
    })), window.addEventListener("scroll", (function () {
      u ? u(c) : c()
    }))
  }();
  var a = n(1),
    s = n.n(a);
  var d, l, c;
  d = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12], l = (new Date).getDate() - 1, c = d[l] ? d[l] : 0, new s.a("#dynamicSlide", {
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false,
    // },
    centeredSlides: !0,
    lazy: {
      loadPrevNext: !0
    },
    loop: !0,
    // initialSlide: c,
    slidesPerView: 3,
    speed: 1e3,
    watchSlidesProgress: !0,
    watchSlidesVisibility: !0
  });
  document.body.classList.add("js-loading"), (new r.a).init()
}]);