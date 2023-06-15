!(function (e) {
    var t = {}
    function n(o) {
        if (t[o]) return t[o].exports
        var r = (t[o] = { i: o, l: !1, exports: {} })
        return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    ;(n.m = e),
        (n.c = t),
        (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
        }),
        (n.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var o = Object.create(null)
            if (
                (n.r(o),
                Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    n.d(
                        o,
                        r,
                        function (t) {
                            return e[t]
                        }.bind(null, r)
                    )
            return o
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default
                      }
                    : function () {
                          return e
                      }
            return n.d(t, 'a', t), t
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 1))
})([
    function (e, t, n) {},
    function (e, t, n) {
        'use strict'
        n.r(t)
        n(0)
        !(function () {
            var e,
                t,
                n,
                o = !1
            function r() {
                var e = 0
                return (
                    void 0 !== window.pageYOffset
                        ? (e = window.pageYOffset)
                        : void 0 !== document.compatMode && 'BackCompat' != document.compatMode
                        ? (e = document.documentElement.scrollTop)
                        : void 0 !== document.body && (e = document.body.scrollTop),
                    e
                )
            }
            function i() {
                var e,
                    t,
                    n,
                    i = document.getElementById('progressBarWrap')
                ;(document.getElementById('progressBar').style.width =
                    ((e = r()),
                    (t = document.body.scrollHeight - window.innerHeight),
                    (n = document.body.clientWidth),
                    parseInt((e / t) * n) + 'px')),
                    o ? (i.style.opacity = 1) : (o = !0)
            }
            ;(e = document.body),
                (t = document.createElement('div')),
                (n = document.createElement('div')),
                (t.id = 'progressBarWrap'),
                (t.style.opacity = 0),
                (t.style.position = 'fixed'),
                (t.style.zIndex = 200),
                (t.style.top = 0),
                (t.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'),
                (t.style.width = '100%'),
                (t.style.height = '0.5vh'),
                (n.style.backgroundColor = '#cc1e05'),
                (n.style.backgroundImage = 'linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)'),
                (n.style.height = '100%'),
                (n.id = 'progressBar'),
                t.appendChild(n),
                e.insertBefore(t, e.firstChild),
                r() && (o = !0),
                document.addEventListener('DOMContentLoaded', function () {
                    var e, t
                    ;(e = Array.apply(null, document.querySelectorAll('#progressBar'))),
                        (t = 0),
                        e.length > 1 &&
                            e.forEach(function (e, n) {
                                var o = e.parentNode
                                'progressBarWrap' === o.id
                                    ? ++t > 1 && o.parentNode.removeChild(o)
                                    : o.parentNode.removeChild(o)
                            })
                })
            var d =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame
            window.addEventListener('load', function () {
                d ? d(i) : i()
            }),
                window.addEventListener('scroll', function () {
                    d ? d(i) : i()
                })
        })()
    }
])
