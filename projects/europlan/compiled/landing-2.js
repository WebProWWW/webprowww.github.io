! function(n) {
  "use strict";

  function t(n, t) {
    var r = (65535 & n) + (65535 & t),
      e = (n >> 16) + (t >> 16) + (r >> 16);
    return e << 16 | 65535 & r
  }

  function r(n, t) {
    return n << t | n >>> 32 - t
  }

  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o)
  }

  function o(n, t, r, o, u, c, f) {
    return e(t & r | ~t & o, n, t, u, c, f)
  }

  function u(n, t, r, o, u, c, f) {
    return e(t & o | r & ~o, n, t, u, c, f)
  }

  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f)
  }

  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f)
  }

  function i(n, r) {
    n[r >> 5] |= 128 << r % 32, n[(r + 64 >>> 9 << 4) + 14] = r;
    var e, i, a, h, d, l = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (e = 0; e < n.length; e += 16) i = l, a = g, h = v, d = m, l = o(l, g, v, m, n[e], 7, -680876936), m = o(m, l, g, v, n[e + 1], 12, -389564586), v = o(v, m, l, g, n[e + 2], 17, 606105819), g = o(g, v, m, l, n[e + 3], 22, -1044525330), l = o(l, g, v, m, n[e + 4], 7, -176418897), m = o(m, l, g, v, n[e + 5], 12, 1200080426), v = o(v, m, l, g, n[e + 6], 17, -1473231341), g = o(g, v, m, l, n[e + 7], 22, -45705983), l = o(l, g, v, m, n[e + 8], 7, 1770035416), m = o(m, l, g, v, n[e + 9], 12, -1958414417), v = o(v, m, l, g, n[e + 10], 17, -42063), g = o(g, v, m, l, n[e + 11], 22, -1990404162), l = o(l, g, v, m, n[e + 12], 7, 1804603682), m = o(m, l, g, v, n[e + 13], 12, -40341101), v = o(v, m, l, g, n[e + 14], 17, -1502002290), g = o(g, v, m, l, n[e + 15], 22, 1236535329), l = u(l, g, v, m, n[e + 1], 5, -165796510), m = u(m, l, g, v, n[e + 6], 9, -1069501632), v = u(v, m, l, g, n[e + 11], 14, 643717713), g = u(g, v, m, l, n[e], 20, -373897302), l = u(l, g, v, m, n[e + 5], 5, -701558691), m = u(m, l, g, v, n[e + 10], 9, 38016083), v = u(v, m, l, g, n[e + 15], 14, -660478335), g = u(g, v, m, l, n[e + 4], 20, -405537848), l = u(l, g, v, m, n[e + 9], 5, 568446438), m = u(m, l, g, v, n[e + 14], 9, -1019803690), v = u(v, m, l, g, n[e + 3], 14, -187363961), g = u(g, v, m, l, n[e + 8], 20, 1163531501), l = u(l, g, v, m, n[e + 13], 5, -1444681467), m = u(m, l, g, v, n[e + 2], 9, -51403784), v = u(v, m, l, g, n[e + 7], 14, 1735328473), g = u(g, v, m, l, n[e + 12], 20, -1926607734), l = c(l, g, v, m, n[e + 5], 4, -378558), m = c(m, l, g, v, n[e + 8], 11, -2022574463), v = c(v, m, l, g, n[e + 11], 16, 1839030562), g = c(g, v, m, l, n[e + 14], 23, -35309556), l = c(l, g, v, m, n[e + 1], 4, -1530992060), m = c(m, l, g, v, n[e + 4], 11, 1272893353), v = c(v, m, l, g, n[e + 7], 16, -155497632), g = c(g, v, m, l, n[e + 10], 23, -1094730640), l = c(l, g, v, m, n[e + 13], 4, 681279174), m = c(m, l, g, v, n[e], 11, -358537222), v = c(v, m, l, g, n[e + 3], 16, -722521979), g = c(g, v, m, l, n[e + 6], 23, 76029189), l = c(l, g, v, m, n[e + 9], 4, -640364487), m = c(m, l, g, v, n[e + 12], 11, -421815835), v = c(v, m, l, g, n[e + 15], 16, 530742520), g = c(g, v, m, l, n[e + 2], 23, -995338651), l = f(l, g, v, m, n[e], 6, -198630844), m = f(m, l, g, v, n[e + 7], 10, 1126891415), v = f(v, m, l, g, n[e + 14], 15, -1416354905), g = f(g, v, m, l, n[e + 5], 21, -57434055), l = f(l, g, v, m, n[e + 12], 6, 1700485571), m = f(m, l, g, v, n[e + 3], 10, -1894986606), v = f(v, m, l, g, n[e + 10], 15, -1051523), g = f(g, v, m, l, n[e + 1], 21, -2054922799), l = f(l, g, v, m, n[e + 8], 6, 1873313359), m = f(m, l, g, v, n[e + 15], 10, -30611744), v = f(v, m, l, g, n[e + 6], 15, -1560198380), g = f(g, v, m, l, n[e + 13], 21, 1309151649), l = f(l, g, v, m, n[e + 4], 6, -145523070), m = f(m, l, g, v, n[e + 11], 10, -1120210379), v = f(v, m, l, g, n[e + 2], 15, 718787259), g = f(g, v, m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, h), m = t(m, d);
    return [l, g, v, m]
  }

  function a(n) {
    var t, r = "",
      e = 32 * n.length;
    for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    return r
  }

  function h(n) {
    var t, r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r
  }

  function d(n) {
    return a(i(h(n), 8 * n.length))
  }

  function l(n, t) {
    var r, e, o = h(n),
      u = [],
      c = [];
    for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
    return e = i(u.concat(h(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
  }

  function g(n) {
    var t, r, e = "0123456789abcdef",
      o = "";
    for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), o += e.charAt(t >>> 4 & 15) + e.charAt(15 & t);
    return o
  }

  function v(n) {
    return unescape(encodeURIComponent(n))
  }

  function m(n) {
    return d(v(n))
  }

  function p(n) {
    return g(m(n))
  }

  function s(n, t) {
    return l(v(n), v(t))
  }

  function C(n, t) {
    return g(s(n, t))
  }

  function A(n, t, r) {
    return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
  }
  "function" == typeof define && define.amd ? define(function() {
    return A
  }) : "object" == typeof module && module.exports ? module.exports = A : n.md5 = A
}(this);
! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length,
      n = Z.type(e);
    return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }

  function r(e, t, n) {
    if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return Z.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (ae.test(t)) return Z.filter(t, e, n);
      t = Z.filter(t, e)
    }
    return Z.grep(e, function(e) {
      return U.call(t, e) >= 0 !== n
    })
  }

  function i(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function o(e) {
    var t = he[e] = {};
    return Z.each(e.match(de) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function s() {
    J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
  }

  function a() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = Z.expando + Math.random()
  }

  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
        } catch (e) {}
        ye.set(e, t, n)
      } else n = void 0;
    return n
  }

  function l() {
    return !0
  }

  function c() {
    return !1
  }

  function f() {
    try {
      return J.activeElement
    } catch (e) {}
  }

  function p(e, t) {
    return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function d(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function h(e) {
    var t = Pe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function g(e, t) {
    for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
  }

  function m(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
        delete s.handle, s.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
      }
      ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
    }
  }

  function v(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
  }

  function y(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
  }

  function x(t, n) {
    var r, i = Z(n.createElement(t)).appendTo(n.body),
      o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
    return i.detach(), o
  }

  function b(e) {
    var t = J,
      n = $e[e];
    return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
  }

  function w(e, t, n) {
    var r, i, o, s, a = e.style;
    return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
  }

  function T(e, t) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }

  function C(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
      if (t = Ge[i] + n, t in e) return t;
    return r
  }

  function N(e, t, n) {
    var r = Xe.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function k(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
    return s
  }

  function E(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = _e(e),
      s = "border-box" === Z.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
      r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
  }

  function S(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
    for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
    return e
  }

  function j(e, t, n, r, i) {
    return new j.prototype.init(e, t, n, r, i)
  }

  function D() {
    return setTimeout(function() {
      Qe = void 0
    }), Qe = Z.now()
  }

  function A(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function L(e, t, n) {
    for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function q(e, t, n) {
    var r, i, o, s, a, u, l, c, f = this,
      p = {},
      d = e.style,
      h = e.nodeType && Ce(e),
      g = ve.get(e, "fxshow");
    n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
      a.unqueued || u()
    }), a.unqueued++, f.always(function() {
      f.always(function() {
        a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (i = t[r], Ke.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          h = !0
        }
        p[r] = g && g[r] || Z.style(e, r)
      } else l = void 0;
    if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
    else {
      g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
        Z(e).hide()
      }), f.done(function() {
        var t;
        ve.remove(e, "fxshow");
        for (t in p) Z.style(e, t, p[t])
      });
      for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function H(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
        o = s.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }

  function O(e, t, n) {
    var r, i, o = 0,
      s = tt.length,
      a = Z.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (i) return !1;
        for (var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
        return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
      },
      l = a.promise({
        elem: e,
        props: Z.extend({}, t),
        opts: Z.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Qe || D(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (H(c, l.opts.specialEasing); s > o; o++)
      if (r = tt[o].call(l, e, c, l.opts)) return r;
    return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function F(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(de) || [];
      if (Z.isFunction(n))
        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function P(e, t, n, r) {
    function i(a) {
      var u;
      return o[a] = !0, Z.each(e[a] || [], function(e, a) {
        var l = a(t, n, r);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
      }), u
    }
    var o = {},
      s = e === wt;
    return i(t.dataTypes[0]) || !o["*"] && i("*")
  }

  function M(e, t) {
    var n, r, i = Z.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Z.extend(!0, e, r), e
  }

  function R(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes;
      "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break
        }
        s || (s = i)
      }
      o = o || s
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function W(e, t, n, r) {
    var i, o, s, a, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
      if (s = l[u + " " + o] || l["* " + o], !s)
        for (i in l)
          if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
            s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
            break
          }
      if (s !== !0)
        if (s && e.throws) t = s(t);
        else try {
          t = s(t)
        } catch (e) {
          return {
            state: "parsererror",
            error: s ? e : "No conversion from " + u + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }

  function $(e, t, n, r) {
    var i;
    if (Z.isArray(t)) Z.each(t, function(t, i) {
      n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== Z.type(t)) r(e, t);
    else
      for (i in t) $(e + "[" + i + "]", t[i], n, r)
  }

  function B(e) {
    return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var I = [],
    _ = I.slice,
    z = I.concat,
    X = I.push,
    U = I.indexOf,
    V = {},
    Y = V.toString,
    G = V.hasOwnProperty,
    Q = {},
    J = e.document,
    K = "2.1.1",
    Z = function(e, t) {
      return new Z.fn.init(e, t)
    },
    ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    te = /^-ms-/,
    ne = /-([\da-z])/gi,
    re = function(e, t) {
      return t.toUpperCase()
    };
  Z.fn = Z.prototype = {
    jquery: K,
    constructor: Z,
    selector: "",
    length: 0,
    toArray: function() {
      return _.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
    },
    pushStack: function(e) {
      var t = Z.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return Z.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(Z.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(_.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: X,
    sort: I.sort,
    splice: I.splice
  }, Z.extend = Z.fn.extend = function() {
    var e, t, n, r, i, o, s = arguments[0] || {},
      a = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
      if (null != (e = arguments[a]))
        for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
    return s
  }, Z.extend({
    expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === Z.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      return !Z.isArray(e) && e - parseFloat(e) >= 0
    },
    isPlainObject: function(e) {
      return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      var t, n = eval;
      e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
    },
    camelCase: function(e) {
      return e.replace(te, "ms-").replace(ne, re)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, r) {
      var i, o = 0,
        s = e.length,
        a = n(e);
      if (r) {
        if (a)
          for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
        else
          for (o in e)
            if (i = t.apply(e[o], r), i === !1) break
      } else if (a)
        for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
      else
        for (o in e)
          if (i = t.call(e[o], o, e[o]), i === !1) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(ee, "")
    },
    makeArray: function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : U.call(t, e, n)
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
      return i
    },
    map: function(e, t, r) {
      var i, o = 0,
        s = e.length,
        a = n(e),
        u = [];
      if (a)
        for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
      else
        for (o in e) i = t(e[o], o, r), null != i && u.push(i);
      return z.apply([], u)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
        return e.apply(t || this, r.concat(_.call(arguments)))
      }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
    },
    now: Date.now,
    support: Q
  }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    V["[object " + t + "]"] = t.toLowerCase()
  });
  var ie = function(e) {
    function t(e, t, n, r) {
      var i, o, s, a, u, l, f, d, h, g;
      if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (a = t.nodeType) && 9 !== a) return [];
      if (O && !r) {
        if (i = ye.exec(e))
          if (s = i[1]) {
            if (9 === a) {
              if (o = t.getElementById(s), !o || !o.parentNode) return n;
              if (o.id === s) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
          } else {
            if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
            if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
          }
        if (w.qsa && (!F || !F.test(e))) {
          if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
            for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
            h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
          }
          if (g) try {
            return Z.apply(n, h.querySelectorAll(g)), n
          } catch (e) {} finally {
            f || t.removeAttribute("id")
          }
        }
      }
      return S(e.replace(ue, "$1"), t, n, r)
    }

    function n() {
      function e(n, r) {
        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
      }
      var t = [];
      return e
    }

    function r(e) {
      return e[W] = !0, e
    }

    function i(e) {
      var t = q.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
    }

    function s(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
      if (r) return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function a(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }

    function c(e) {
      return e && typeof e.getElementsByTagName !== V && e
    }

    function f() {}

    function p(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r
    }

    function d(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = I++;
      return t.first ? function(t, n, o) {
        for (; t = t[r];)
          if (1 === t.nodeType || i) return e(t, n, o)
      } : function(t, n, s) {
        var a, u, l = [B, o];
        if (s) {
          for (; t = t[r];)
            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || i) {
              if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
              if (u[r] = l, l[2] = e(t, n, s)) return !0
            }
      }
    }

    function h(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }

    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r
    }

    function m(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
      return s
    }

    function v(e, t, n, i, o, s) {
      return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
        var l, c, f, p = [],
          d = [],
          h = s.length,
          v = r || g(t || "*", a.nodeType ? [a] : a, []),
          y = !e || !r && t ? v : m(v, p, e, a, u),
          x = n ? o || (r ? e : h || i) ? [] : s : y;
        if (n && n(y, x, a, u), i)
          for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
              o(null, x = [], l, u)
            }
            for (c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
          }
        } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
      })
    }

    function y(e) {
      for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
          return e === t
        }, s, !0), l = d(function(e) {
          return te.call(t, e) > -1
        }, s, !0), c = [function(e, n, r) {
          return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
        }]; i > a; a++)
        if (n = T.relative[e[a].type]) c = [d(h(c), n)];
        else {
          if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
            for (r = ++a; i > r && !T.relative[e[r].type]; r++);
            return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
              value: " " === e[a - 2].type ? "*" : ""
            })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
          }
          c.push(n)
        }
      return h(c)
    }

    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function(r, s, a, u, l) {
          var c, f, p, d = 0,
            h = "0",
            g = r && [],
            v = [],
            y = j,
            x = r || o && T.find.TAG("*", l),
            b = B += null == y ? 1 : Math.random() || .1,
            w = x.length;
          for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
            if (o && c) {
              for (f = 0; p = e[f++];)
                if (p(c, s, a)) {
                  u.push(c);
                  break
                }
              l && (B = b)
            }
            i && ((c = !p && c) && d--, r && g.push(c))
          }
          if (d += h, i && h !== d) {
            for (f = 0; p = n[f++];) p(g, v, s, a);
            if (r) {
              if (d > 0)
                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
              v = m(v)
            }
            Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
          }
          return l && (B = b, j = y), g
        };
      return i ? r(s) : s
    }
    var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
      $ = e.document,
      B = 0,
      I = 0,
      _ = n(),
      z = n(),
      X = n(),
      U = function(e, t) {
        return e === t && (A = !0), 0
      },
      V = "undefined",
      Y = 1 << 31,
      G = {}.hasOwnProperty,
      Q = [],
      J = Q.pop,
      K = Q.push,
      Z = Q.push,
      ee = Q.slice,
      te = Q.indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++)
          if (this[t] === e) return t;
        return -1
      },
      ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      re = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      oe = ie.replace("w", "w#"),
      se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
      ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
      ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
      le = new RegExp("^" + re + "*," + re + "*"),
      ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
      fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
      pe = new RegExp(ae),
      de = new RegExp("^" + oe + "$"),
      he = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + se),
        PSEUDO: new RegExp("^" + ae),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + ne + ")$", "i"),
        needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
      },
      ge = /^(?:input|select|textarea|button)$/i,
      me = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      xe = /[+~]/,
      be = /'|\\/g,
      we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
      Te = function(e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      };
    try {
      Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
    } catch (e) {
      Z = {
        apply: Q.length ? function(e, t) {
          K.apply(e, ee.call(t))
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, N = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, L = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e : $,
        r = n.defaultView;
      return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
        L()
      }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
        L()
      })), w.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = i(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
      }), w.getById = i(function(e) {
        return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
      }), w.getById ? (T.find.ID = function(e, t) {
        if (typeof t.getElementById !== V && O) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, T.filter.ID = function(e) {
        var t = e.replace(we, Te);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete T.find.ID, T.filter.ID = function(e) {
        var t = e.replace(we, Te);
        return function(e) {
          var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
      } : function(e, t) {
        var n, r = [],
          i = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
        return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
      }, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
      }), i(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
      })), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
        w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
      }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, U = t ? function(e, t) {
        if (e === t) return A = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
      } : function(e, t) {
        if (e === t) return A = !0, 0;
        var r, i = 0,
          o = e.parentNode,
          a = t.parentNode,
          u = [e],
          l = [t];
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
        if (o === a) return s(e, t);
        for (r = e; r = r.parentNode;) u.unshift(r);
        for (r = t; r = r.parentNode;) l.unshift(r);
        for (; u[i] === l[i];) i++;
        return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
      }, n) : q
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
        var r = M.call(e, n);
        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
      } catch (e) {}
      return t(n, q, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== q && L(e), R(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== q && L(e);
      var n = T.attrHandle[t.toLowerCase()],
        r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
      return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        r = 0,
        i = 0;
      if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));
        for (; r--;) e.splice(n[r], 1)
      }
      return D = null, e
    }, C = t.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else
        for (; t = e[r++];) n += C(t);
      return n
    }, T = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: he,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(we, Te).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = _[e + " "];
          return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function(e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
          }
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
            s = "last" !== e.slice(-4),
            a = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              v = a && t.nodeName.toLowerCase(),
              y = !u && !a;
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = t; f = f[g];)
                    if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [s ? m.firstChild : m.lastChild], s && y) {
                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                  if (1 === f.nodeType && ++p && f === t) {
                    c[e] = [B, d, p];
                    break
                  }
              } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
              else
                for (;
                  (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
              return p -= i, p === r || p % r === 0 && p / r >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
          }) : function(e) {
            return o(e, 0, i)
          }) : o
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [],
            n = [],
            i = E(e.replace(ue, "$1"));
          return i[W] ? r(function(e, t, n, r) {
            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), !n.pop()
          }
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: r(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
          }
        }),
        lang: r(function(e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === H
        },
        focus: function(e) {
          return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !T.pseudos.empty(e)
        },
        header: function(e) {
          return me.test(e.nodeName)
        },
        input: function(e) {
          return ge.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: l(function() {
          return [0]
        }),
        last: l(function(e, t) {
          return [t - 1]
        }),
        eq: l(function(e, t, n) {
          return [0 > n ? n + t : n]
        }),
        even: l(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: l(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: l(function(e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, T.pseudos.nth = T.pseudos.eq;
    for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) T.pseudos[b] = a(b);
    for (b in {
        submit: !0,
        reset: !0
      }) T.pseudos[b] = u(b);
    return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
      var r, i, o, s, a, u, l, c = z[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (a = e, u = [], l = T.preFilter; a;) {
        (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(ue, " ")
        }), a = a.slice(r.length));
        for (s in T.filter) !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
          value: r,
          type: s,
          matches: i
        }), a = a.slice(r.length));
        if (!r) break
      }
      return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
    }, E = t.compile = function(e, t) {
      var n, r = [],
        i = [],
        o = X[e + " "];
      if (!o) {
        for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
        o = X(e, x(i, r)), o.selector = e
      }
      return o
    }, S = t.select = function(e, t, n, r) {
      var i, o, s, a, u, l = "function" == typeof e && e,
        f = !r && k(e = l.selector || e);
      if (n = n || [], 1 === f.length) {
        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
          if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
          if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
            break
          }
      }
      return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(q.createElement("div"))
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), i(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(ne, function(e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), t
  }(e);
  Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
  var oe = Z.expr.match.needsContext,
    se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ae = /^.[^:#\[\.,]*$/;
  Z.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, Z.fn.extend({
    find: function(e) {
      var t, n = this.length,
        r = [],
        i = this;
      if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
        for (t = 0; n > t; t++)
          if (Z.contains(i[t], this)) return !0
      }));
      for (t = 0; n > t; t++) Z.find(e, i[t], r);
      return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0))
    },
    is: function(e) {
      return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
    }
  });
  var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ce = Z.fn.init = function(e, t) {
      var n, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
            for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
  ce.prototype = Z.fn, ue = Z(J);
  var fe = /^(?:parents|prev(?:Until|All))/,
    pe = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  Z.extend({
    dir: function(e, t, n) {
      for (var r = [], i = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && Z(e).is(n)) break;
          r.push(e)
        }
      return r
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), Z.fn.extend({
    has: function(e) {
      var t = Z(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; n > e; e++)
          if (Z.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
            o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? Z.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), Z.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return Z.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return Z.dir(e, "parentNode", n)
    },
    next: function(e) {
      return i(e, "nextSibling")
    },
    prev: function(e) {
      return i(e, "previousSibling")
    },
    nextAll: function(e) {
      return Z.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return Z.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return Z.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return Z.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return Z.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return Z.sibling(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || Z.merge([], e.childNodes)
    }
  }, function(e, t) {
    Z.fn[e] = function(n, r) {
      var i = Z.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
    }
  });
  var de = /\S+/g,
    he = {};
  Z.Callbacks = function(e) {
    e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
    var t, n, r, i, s, a, u = [],
      l = !e.once && [],
      c = function(o) {
        for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
          if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            t = !1;
            break
          }
        r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
      },
      f = {
        add: function() {
          if (u) {
            var n = u.length;
            ! function t(n) {
              Z.each(n, function(n, r) {
                var i = Z.type(r);
                "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
              })
            }(arguments), r ? s = u.length : t && (i = n, c(t))
          }
          return this
        },
        remove: function() {
          return u && Z.each(arguments, function(e, t) {
            for (var n;
              (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
          }), this
        },
        has: function(e) {
          return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
        },
        empty: function() {
          return u = [], s = 0, this
        },
        disable: function() {
          return u = l = t = void 0, this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          return l = void 0, t || f.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, t) {
          return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
        },
        fire: function() {
          return f.fireWith(this, arguments), this
        },
        fired: function() {
          return !!n
        }
      };
    return f
  }, Z.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
          ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
          ["notify", "progress", Z.Callbacks("memory")]
        ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return Z.Deferred(function(n) {
              Z.each(t, function(t, o) {
                var s = Z.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? Z.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, Z.each(t, function(e, o) {
        var s = o[2],
          a = o[3];
        r[o[1]] = s.add, a && s.add(function() {
          n = a
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this
        }, i[o[0] + "With"] = s.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t, n, r, i = 0,
        o = _.call(arguments),
        s = o.length,
        a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
        u = 1 === a ? e : Z.Deferred(),
        l = function(e, n, r) {
          return function(i) {
            n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
          }
        };
      if (s > 1)
        for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
      return a || u.resolveWith(r, o), u.promise()
    }
  });
  var ge;
  Z.fn.ready = function(e) {
    return Z.ready.promise().done(e), this
  }, Z.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? Z.readyWait++ : Z.ready(!0)
    },
    ready: function(e) {
      (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
    }
  }), Z.ready.promise = function(t) {
    return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
  }, Z.ready.promise();
  var me = Z.access = function(e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === Z.type(n)) {
      i = !0;
      for (a in n) Z.access(e, t, a, n[a], !0, o, s)
    } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
        return l.call(Z(e), n)
      })), t))
      for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  };
  Z.acceptData = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
    key: function(e) {
      if (!a.accepts(e)) return 0;
      var t = {},
        n = e[this.expando];
      if (!n) {
        n = a.uid++;
        try {
          t[this.expando] = {
            value: n
          }, Object.defineProperties(e, t)
        } catch (r) {
          t[this.expando] = n, Z.extend(e, t)
        }
      }
      return this.cache[n] || (this.cache[n] = {}), n
    },
    set: function(e, t, n) {
      var r, i = this.key(e),
        o = this.cache[i];
      if ("string" == typeof t) o[t] = n;
      else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
      else
        for (r in t) o[r] = t[r];
      return o
    },
    get: function(e, t) {
      var n = this.cache[this.key(e)];
      return void 0 === t ? n : n[t]
    },
    access: function(e, t, n) {
      var r;
      return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r, i, o = this.key(e),
        s = this.cache[o];
      if (void 0 === t) this.cache[o] = {};
      else {
        Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
        for (; n--;) delete s[r[n]]
      }
    },
    hasData: function(e) {
      return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
    },
    discard: function(e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var ve = new a,
    ye = new a,
    xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    be = /([A-Z])/g;
  Z.extend({
    hasData: function(e) {
      return ye.hasData(e) || ve.hasData(e)
    },
    data: function(e, t, n) {
      return ye.access(e, t, n)
    },
    removeData: function(e, t) {
      ye.remove(e, t)
    },
    _data: function(e, t, n) {
      return ve.access(e, t, n)
    },
    _removeData: function(e, t) {
      ve.remove(e, t)
    }
  }), Z.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0],
        s = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
          for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
          ve.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof e ? this.each(function() {
        ye.set(this, e)
      }) : me(this, function(t) {
        var n, r = Z.camelCase(e);
        if (o && void 0 === t) {
          if (n = ye.get(o, e), void 0 !== n) return n;
          if (n = ye.get(o, r), void 0 !== n) return n;
          if (n = u(o, r, void 0), void 0 !== n) return n
        } else this.each(function() {
          var n = ye.get(this, r);
          ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        ye.remove(this, e)
      })
    }
  }), Z.extend({
    queue: function(e, t, n) {
      var r;
      return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = Z.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = Z._queueHooks(e, t),
        s = function() {
          Z.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return ve.get(e, n) || ve.access(e, n, {
        empty: Z.Callbacks("once memory").add(function() {
          ve.remove(e, [t + "queue", n])
        })
      })
    }
  }), Z.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = Z.queue(this, e, t);
        Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        Z.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = Z.Deferred(),
        o = this,
        s = this.length,
        a = function() {
          --r || i.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
      return a(), i.promise(t)
    }
  });
  var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Te = ["Top", "Right", "Bottom", "Left"],
    Ce = function(e, t) {
      return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    },
    Ne = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = J.createDocumentFragment(),
      t = e.appendChild(J.createElement("div")),
      n = J.createElement("input");
    n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var ke = "undefined";
  Q.focusinBubbles = "onfocusin" in e;
  var Ee = /^key/,
    Se = /^(?:mouse|pointer|contextmenu)|click/,
    je = /^(?:focusinfocus|focusoutblur)$/,
    De = /^([^.]*)(?:\.(.+)|)$/;
  Z.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
      if (m)
        for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
            return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
          }), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && Z.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
    },
    remove: function(e, t, n, r, i) {
      var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
      if (m && (u = m.events)) {
        for (t = (t || "").match(de) || [""], l = t.length; l--;)
          if (a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
            for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
          } else
            for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
        Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
      }
    },
    trigger: function(t, n, r, i) {
      var o, s, a, u, l, c, f, p = [r || J],
        d = G.call(t, "type") ? t.type : t,
        h = G.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
        if (!i && !f.noBubble && !Z.isWindow(r)) {
          for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
          a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
        }
        for (o = 0;
          (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
      }
    },
    dispatch: function(e) {
      e = Z.event.fix(e);
      var t, n, r, i, o, s = [],
        a = _.call(arguments),
        u = (ve.get(this, "events") || {})[e.type] || [],
        l = Z.event.special[e.type] || {};
      if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (s = Z.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (u.disabled !== !0 || "click" !== e.type) {
            for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
            r.length && s.push({
              elem: u,
              handlers: r
            })
          }
      return a < t.length && s.push({
        elem: this,
        handlers: t.slice(a)
      }), s
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, o = t.button;
        return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[Z.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
      return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== f() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === f() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return Z.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = Z.extend(new Z.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, Z.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }, Z.Event = function(e, t) {
    return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
  }, Z.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, Z.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    Z.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), Q.focusinBubbles || Z.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      Z.event.simulate(t, e.target, Z.event.fix(e), !0)
    };
    Z.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this,
          i = ve.access(r, t);
        i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
      },
      teardown: function() {
        var r = this.ownerDocument || this,
          i = ve.access(r, t) - 1;
        i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
      }
    }
  }), Z.fn.extend({
    on: function(e, t, n, r, i) {
      var o, s;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (s in e) this.on(s, t, n, e[s], i);
        return this
      }
      if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
      else if (!r) return this;
      return 1 === i && (o = r, r = function(e) {
        return Z().off(e), o.apply(this, arguments)
      }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
        Z.event.add(this, e, r, n, t)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
        Z.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        Z.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? Z.event.trigger(e, t, n, !0) : void 0
    }
  });
  var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Le = /<([\w:]+)/,
    qe = /<|&#?\w+;/,
    He = /<(?:script|style|link)/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Fe = /^$|\/(?:java|ecma)script/i,
    Pe = /^true\/(.*)/,
    Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Re = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
    clone: function(e, t, n) {
      var r, i, o, s, a = e.cloneNode(!0),
        u = Z.contains(e.ownerDocument, e);
      if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
        for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
        else m(e, a);
      return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
    },
    buildFragment: function(e, t, n, r) {
      for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
        if (i = e[p], i || 0 === i)
          if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
          else if (qe.test(i)) {
        for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
        Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
      } else f.push(t.createTextNode(i));
      for (c.textContent = "", p = 0; i = f[p++];)
        if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
          for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
      return c
    },
    cleanData: function(e) {
      for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
        if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
          if (t.events)
            for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
          ve.cache[i] && delete ve.cache[i]
        }
        delete ye.cache[n[ye.expando]]
      }
    }
  }), Z.fn.extend({
    text: function(e) {
      return me(this, function(e) {
        return void 0 === e ? Z.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return Z.clone(this, e, t)
      })
    },
    html: function(e) {
      return me(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Ae, "<$1></$2>");
          try {
            for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = z.apply([], e);
      var n, r, i, o, s, a, u = 0,
        l = this.length,
        c = this,
        f = l - 1,
        p = e[0],
        g = Z.isFunction(p);
      if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
        var r = c.eq(n);
        g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
      });
      if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
        for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
        if (o)
          for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
      }
      return this
    }
  }), Z.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    Z.fn[e] = function(e) {
      for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var We, $e = {},
    Be = /^margin/,
    Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
    _e = function(e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
  ! function() {
    function t() {
      s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
      var t = e.getComputedStyle(s, null);
      n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
    }
    var n, r, i = J.documentElement,
      o = J.createElement("div"),
      s = J.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
      pixelPosition: function() {
        return t(), n
      },
      boxSizingReliable: function() {
        return null == r && t(), r
      },
      reliableMarginRight: function() {
        var t, n = s.appendChild(J.createElement("div"));
        return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
      }
    }))
  }(), Z.swap = function(e, t, n, r) {
    var i, o, s = {};
    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
    i = n.apply(e, r || []);
    for (o in t) e.style[o] = s[o];
    return i
  };
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = new RegExp("^(" + we + ")(.*)$", "i"),
    Ue = new RegExp("^([+-])=(" + we + ")", "i"),
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ye = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ge = ["Webkit", "O", "Moz", "ms"];
  Z.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = w(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: "cssFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, s, a = Z.camelCase(t),
          u = e.style;
        return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
      }
    },
    css: function(e, t, n, r) {
      var i, o, s, a = Z.camelCase(t);
      return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
    }
  }), Z.each(["height", "width"], function(e, t) {
    Z.cssHooks[t] = {
      get: function(e, n, r) {
        return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
          return E(e, t, r)
        }) : E(e, t, r) : void 0
      },
      set: function(e, n, r) {
        var i = r && _e(e);
        return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
    return t ? Z.swap(e, {
      display: "inline-block"
    }, w, [e, "marginRight"]) : void 0
  }), Z.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    Z.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Be.test(e) || (Z.cssHooks[e + t].set = N)
  }), Z.fn.extend({
    css: function(e, t) {
      return me(this, function(e, t, n) {
        var r, i, o = {},
          s = 0;
        if (Z.isArray(t)) {
          for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
          return o
        }
        return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return S(this, !0)
    },
    hide: function() {
      return S(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Ce(this) ? Z(this).show() : Z(this).hide()
      })
    }
  }), Z.Tween = j, j.prototype = {
    constructor: j,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = j.propHooks[this.prop];
      return e && e.get ? e.get(this) : j.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = j.propHooks[this.prop];
      return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
    }
  }, j.prototype.init.prototype = j.prototype, j.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, Z.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, Z.fx = j.prototype.init, Z.fx.step = {};
  var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
    Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
    et = /queueHooks$/,
    tt = [q],
    nt = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = Ze.exec(t),
          o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
          s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
          a = 1,
          u = 20;
        if (s && s[3] !== o) {
          o = o || s[3], i = i || [], s = +r || 1;
          do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
        }
        return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };
  Z.Animation = Z.extend(O, {
      tweener: function(e, t) {
        Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
      },
      prefilter: function(e, t) {
        t ? tt.unshift(e) : tt.push(e)
      }
    }), Z.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? Z.extend({}, e) : {
        complete: n || !n && t || Z.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !Z.isFunction(t) && t
      };
      return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
        Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
      }, r
    }, Z.fn.extend({
      fadeTo: function(e, t, n, r) {
        return this.filter(Ce).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r)
      },
      animate: function(e, t, n, r) {
        var i = Z.isEmptyObject(e),
          o = Z.speed(t, n, r),
          s = function() {
            var t = O(this, Z.extend({}, e), o);
            (i || ve.get(this, "finish")) && t.stop(!0)
          };
        return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function(e, t, n) {
        var r = function(e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            i = null != e && e + "queueHooks",
            o = Z.timers,
            s = ve.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);
          else
            for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          (t || !n) && Z.dequeue(this, e)
        })
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = ve.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = Z.timers,
            s = r ? r.length : 0;
          for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), Z.each(["toggle", "show", "hide"], function(e, t) {
      var n = Z.fn[t];
      Z.fn[t] = function(e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
      }
    }), Z.each({
      slideDown: A("show"),
      slideUp: A("hide"),
      slideToggle: A("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      Z.fn[e] = function(e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), Z.timers = [], Z.fx.tick = function() {
      var e, t = 0,
        n = Z.timers;
      for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || Z.fx.stop(), Qe = void 0
    }, Z.fx.timer = function(e) {
      Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
      Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
      clearInterval(Je), Je = null
    }, Z.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, Z.fn.delay = function(e, t) {
      return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    function() {
      var e = J.createElement("input"),
        t = J.createElement("select"),
        n = t.appendChild(J.createElement("option"));
      e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
  var rt, it, ot = Z.expr.attrHandle;
  Z.fn.extend({
    attr: function(e, t) {
      return me(this, Z.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        Z.removeAttr(this, e)
      })
    }
  }), Z.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(de);
      if (o && 1 === e.nodeType)
        for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), it = {
    set: function(e, t, n) {
      return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = ot[t] || Z.find.attr;
    ot[t] = function(e, t, r) {
      var i, o;
      return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
    }
  });
  var st = /^(?:input|select|textarea|button)$/i;
  Z.fn.extend({
    prop: function(e, t) {
      return me(this, Z.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[Z.propFix[e] || e]
      })
    }
  }), Z.extend({
    propFix: {
      for: "htmlFor",
      class: "className"
    },
    prop: function(e, t, n) {
      var r, i, o, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), Q.optSelected || (Z.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    Z.propFix[this.toLowerCase()] = this
  });
  var at = /[\t\r\n\f]/g;
  Z.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, s, a = "string" == typeof e && e,
        u = 0,
        l = this.length;
      if (Z.isFunction(e)) return this.each(function(t) {
        Z(this).addClass(e.call(this, t, this.className))
      });
      if (a)
        for (t = (e || "").match(de) || []; l > u; u++)
          if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
            for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            s = Z.trim(r), n.className !== s && (n.className = s)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
        u = 0,
        l = this.length;
      if (Z.isFunction(e)) return this.each(function(t) {
        Z(this).removeClass(e.call(this, t, this.className))
      });
      if (a)
        for (t = (e || "").match(de) || []; l > u; u++)
          if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
            for (o = 0; i = t[o++];)
              for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
            s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
        Z(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function() {
        if ("string" === n)
          for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  });
  var ut = /\r/g;
  Z.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
        var i;
        1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
          return null == e ? "" : e + ""
        })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
      })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
    }
  }), Z.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = Z.find.attr(e, "value");
          return null != t ? t : Z.trim(Z.text(e))
        }
      },
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
            if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
              if (t = Z(n).val(), o) return t;
              s.push(t)
            }
          return s
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), Z.each(["radio", "checkbox"], function() {
    Z.valHooks[this] = {
      set: function(e, t) {
        return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
      }
    }, Q.checkOn || (Z.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    Z.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), Z.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var lt = Z.now(),
    ct = /\?/;
  Z.parseJSON = function(e) {
    return JSON.parse(e + "")
  }, Z.parseXML = function(e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      n = new DOMParser, t = n.parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
  };
  var ft, pt, dt = /#.*$/,
    ht = /([?&])_=[^&]*/,
    gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    vt = /^(?:GET|HEAD)$/,
    yt = /^\/\//,
    xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    bt = {},
    wt = {},
    Tt = "*/".concat("*");
  try {
    pt = location.href
  } catch (e) {
    pt = J.createElement("a"), pt.href = "", pt = pt.href
  }
  ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: pt,
      type: "GET",
      isLocal: mt.test(ft[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Tt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": Z.parseJSON,
        "text xml": Z.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
    },
    ajaxPrefilter: F(bt),
    ajaxTransport: F(wt),
    ajax: function(e, t) {
      function n(e, t, n, s) {
        var u, c, v, y, b, T = t;
        2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
        p = f.context || f,
        d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
        h = Z.Deferred(),
        g = Z.Callbacks("once memory"),
        m = f.statusCode || {},
        v = {},
        y = {},
        x = 0,
        b = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === x) {
              if (!s)
                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === x ? o : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return x || (e = y[n] = y[n] || e, v[e] = t), this
          },
          overrideMimeType: function(e) {
            return x || (f.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > x)
                for (t in e) m[t] = [m[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || b;
            return r && r.abort(t), n(0, t), this
          }
        };
      if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
      l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
      for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
      if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
      b = "abort";
      for (c in {
          success: 1,
          error: 1,
          complete: 1
        }) w[c](f[c]);
      if (r = P(wt, f, t, w)) {
        w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
          w.abort("timeout")
        }, f.timeout));
        try {
          x = 1, r.send(v, n)
        } catch (e) {
          if (!(2 > x)) throw e;
          n(-1, e)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function(e, t, n) {
      return Z.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return Z.get(e, void 0, t, "script")
    }
  }), Z.each(["get", "post"], function(e, t) {
    Z[t] = function(e, n, r, i) {
      return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      })
    }
  }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    Z.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), Z._evalUrl = function(e) {
    return Z.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  }, Z.fn.extend({
    wrapAll: function(e) {
      var t;
      return Z.isFunction(e) ? this.each(function(t) {
        Z(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(e) {
      return this.each(Z.isFunction(e) ? function(t) {
        Z(this).wrapInner(e.call(this, t))
      } : function() {
        var t = Z(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = Z.isFunction(e);
      return this.each(function(n) {
        Z(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
      }).end()
    }
  }), Z.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, Z.expr.filters.visible = function(e) {
    return !Z.expr.filters.hidden(e)
  };
  var Ct = /%20/g,
    Nt = /\[\]$/,
    kt = /\r?\n/g,
    Et = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
  Z.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) $(n, e[n], t, i);
    return r.join("&").replace(Ct, "+")
  }, Z.fn.extend({
    serialize: function() {
      return Z.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = Z.prop(this, "elements");
        return e ? Z.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
      }).map(function(e, t) {
        var n = Z(this).val();
        return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        }
      }).get()
    }
  }), Z.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (e) {}
  };
  var jt = 0,
    Dt = {},
    At = {
      0: 200,
      1223: 204
    },
    Lt = Z.ajaxSettings.xhr();
  e.ActiveXObject && Z(e).on("unload", function() {
    for (var e in Dt) Dt[e]()
  }), Q.cors = !!Lt && "withCredentials" in Lt, Q.ajax = Lt = !!Lt, Z.ajaxTransport(function(e) {
    var t;
    return Q.cors || Lt && !e.crossDomain ? {
      send: function(n, r) {
        var i, o = e.xhr(),
          s = ++jt;
        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (i in e.xhrFields) o[i] = e.xhrFields[i];
        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (i in n) o.setRequestHeader(i, n[i]);
        t = function(e) {
          return function() {
            t && (delete Dt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
              text: o.responseText
            } : void 0, o.getAllResponseHeaders()))
          }
        }, o.onload = t(), o.onerror = t("error"), t = Dt[s] = t("abort");
        try {
          o.send(e.hasContent && e.data || null)
        } catch (e) {
          if (t) throw e
        }
      },
      abort: function() {
        t && t()
      }
    } : void 0
  }), Z.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return Z.globalEval(e), e
      }
    }
  }), Z.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), Z.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function(r, i) {
          t = Z("<script>").prop({
            async: !0,
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function(e) {
            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
          }), J.head.appendChild(t[0])
        },
        abort: function() {
          n && n()
        }
      }
    }
  });
  var qt = [],
    Ht = /(=)\?(?=&|$)|\?\?/;
  Z.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = qt.pop() || Z.expando + "_" + lt++;
      return this[e] = !0, e
    }
  }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
    return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
      return s || Z.error(i + " was not called"), s[0]
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      s = arguments
    }, r.always(function() {
      e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
    }), "script") : void 0
  }), Z.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || J;
    var r = se.exec(e),
      i = !n && [];
    return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
  };
  var Ot = Z.fn.load;
  Z.fn.load = function(e, t, n) {
    if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
    var r, i, o, s = this,
      a = e.indexOf(" ");
    return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
      url: e,
      type: i,
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
    }).complete(n && function(e, t) {
      s.each(n, o || [e.responseText, t, e])
    }), this
  }, Z.expr.filters.animated = function(e) {
    return Z.grep(Z.timers, function(t) {
      return e === t.elem
    }).length
  };
  var Ft = e.document.documentElement;
  Z.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, s, a, u, l, c = Z.css(e, "position"),
        f = Z(e),
        p = {};
      "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
    }
  }, Z.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        Z.offset.setOffset(this, e, t)
      });
      var t, n, r = this[0],
        i = {
          top: 0,
          left: 0
        },
        o = r && r.ownerDocument;
      return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
        top: i.top + n.pageYOffset - t.clientTop,
        left: i.left + n.pageXOffset - t.clientLeft
      }) : i) : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n = this[0],
          r = {
            top: 0,
            left: 0
          };
        return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - r.top - Z.css(n, "marginTop", !0),
          left: t.left - r.left - Z.css(n, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
        return e || Ft
      })
    }
  }), Z.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, n) {
    var r = "pageYOffset" === n;
    Z.fn[t] = function(i) {
      return me(this, function(t, i, o) {
        var s = B(t);
        return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
      }, t, i, arguments.length, null)
    }
  }), Z.each(["top", "left"], function(e, t) {
    Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
      return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
    })
  }), Z.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    Z.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      Z.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r),
          s = n || (r === !0 || i === !0 ? "margin" : "border");
        return me(this, function(t, n, r) {
          var i;
          return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
        }, t, o ? r : void 0, o, null)
      }
    })
  }), Z.fn.size = function() {
    return this.length
  }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return Z
  });
  var Pt = e.jQuery,
    Mt = e.$;
  return Z.noConflict = function(t) {
    return e.$ === Z && (e.$ = Mt), t && e.jQuery === Z && (e.jQuery = Pt), Z
  }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
! function(o) {
  o.fn.bPopup = function(t, e) {
    function n() {
      switch (w.contentContainer = o(w.contentContainer || W), w.content) {
        case "iframe":
          var t = o('<iframe class="b-iframe" ' + w.iframeAttr + "></iframe>");
          t.appendTo(w.contentContainer), x = W.outerHeight(!0), P = W.outerWidth(!0), i(), t.attr("src", w.loadUrl), f(w.loadCallback);
          break;
        case "image":
          i(), o("<img />").load(function() {
            f(w.loadCallback), s(o(this))
          }).attr("src", w.loadUrl).hide().appendTo(w.contentContainer);
          break;
        default:
          i(), o('<div class="b-ajax-wrapper"></div>').load(w.loadUrl, w.loadData, function(t, e, n) {
            f(w.loadCallback, e), s(o(this))
          }).hide().appendTo(w.contentContainer)
      }
    }

    function i() {
      w.modal && o('<div class="b-modal ' + m + '"></div>').css({
        backgroundColor: w.modalColor,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        zIndex: w.zIndex + j
      }).appendTo(w.appendTo).fadeTo(w.speed, w.opacity), h(), W.data("bPopup", w).data("id", m).css({
        left: "slideIn" == w.transition || "slideBack" == w.transition ? "slideBack" == w.transition ? I.scrollLeft() + _ : -1 * (v + P) : u(!(!w.follow[0] && k || T)),
        position: w.positionStyle || "absolute",
        top: "slideDown" == w.transition || "slideUp" == w.transition ? "slideUp" == w.transition ? I.scrollTop() + B : y + -1 * x : p(!(!w.follow[1] && C || T)),
        "z-index": w.zIndex + j + 1
      }).each(function() {
        w.appending && o(this).appendTo(w.appendTo)
      }), c(!0)
    }

    function a() {
      return w.modal && o(".b-modal." + W.data("id")).fadeTo(w.speed, 0, function() {
        o(this).remove()
      }), w.scrollBar || o("html").css("overflow", "auto"), o(".b-modal." + m).unbind("click"), I.unbind("keydown." + m), z.unbind("." + m).data("bPopup", 0 < z.data("bPopup") - 1 ? z.data("bPopup") - 1 : null), W.undelegate(".bClose, ." + w.closeClass, "click." + m, a).data("bPopup", null), clearTimeout(H), c(), !1
    }

    function l(t) {
      B = S.innerHeight || z.height(), _ = S.innerWidth || z.width(), (g = b()) && (clearTimeout(U), U = setTimeout(function() {
        h(), t = t || w.followSpeed, W.dequeue().each(function() {
          T ? o(this).css({
            left: v,
            top: y
          }) : o(this).animate({
            left: w.follow[0] ? u(!0) : "auto",
            top: w.follow[1] ? p(!0) : "auto"
          }, t, w.followEasing)
        })
      }, 50))
    }

    function s(o) {
      var t = o.width(),
        e = o.height(),
        n = {};
      w.contentContainer.css({
        height: e,
        width: t
      }), e >= W.height() && (n.height = W.height()), t >= W.width() && (n.width = W.width()), x = W.outerHeight(!0), P = W.outerWidth(!0), h(), w.contentContainer.css({
        height: "auto",
        width: "auto"
      }), n.left = u(!(!w.follow[0] && k || T)), n.top = p(!(!w.follow[1] && C || T)), W.animate(n, 250, function() {
        o.show(), g = b()
      })
    }

    function d() {
      z.data("bPopup", j), W.delegate(".bClose, ." + w.closeClass, "click." + m, a), w.modalClose && o(".b-modal." + m).css("cursor", "pointer").bind("click", a), D || !w.follow[0] && !w.follow[1] || z.bind("scroll." + m, function() {
        g && W.dequeue().animate({
          left: w.follow[0] ? u(!T) : "auto",
          top: w.follow[1] ? p(!T) : "auto"
        }, w.followSpeed, w.followEasing)
      }).bind("resize." + m, function() {
        l()
      }), w.escClose && I.bind("keydown." + m, function(o) {
        27 == o.which && a()
      })
    }

    function c(o) {
      function t(t) {
        W.css({
          display: "block",
          opacity: 1
        }).animate(t, w.speed, w.easing, function() {
          r(o)
        })
      }
      switch (o ? w.transition : w.transitionClose || w.transition) {
        case "slideIn":
          t({
            left: o ? u(!(!w.follow[0] && k || T)) : I.scrollLeft() - (P || W.outerWidth(!0)) - L
          });
          break;
        case "slideBack":
          t({
            left: o ? u(!(!w.follow[0] && k || T)) : I.scrollLeft() + _ + L
          });
          break;
        case "slideDown":
          t({
            top: o ? p(!(!w.follow[1] && C || T)) : I.scrollTop() - (x || W.outerHeight(!0)) - L
          });
          break;
        case "slideUp":
          t({
            top: o ? p(!(!w.follow[1] && C || T)) : I.scrollTop() + B + L
          });
          break;
        default:
          W.stop().fadeTo(w.speed, o ? 1 : 0, function() {
            r(o)
          })
      }
    }

    function r(o) {
      o ? (d(), f(e), w.autoClose && (H = setTimeout(a, w.autoClose))) : (W.hide(), f(w.onClose), w.loadUrl && (w.contentContainer.empty(), W.css({
        height: "auto",
        width: "auto"
      })))
    }

    function u(o) {
      return o ? v + I.scrollLeft() : v
    }

    function p(o) {
      return o ? y + I.scrollTop() : y
    }

    function f(t, e) {
      o.isFunction(t) && t.call(W, e)
    }

    function h() {
      y = C ? w.position[1] : Math.max(0, (B - W.outerHeight(!0)) / 2 - w.amsl), v = k ? w.position[0] : (_ - W.outerWidth(!0)) / 2, g = b()
    }

    function b() {
      return B > W.outerHeight(!0) && _ > W.outerWidth(!0)
    }
    o.isFunction(t) && (e = t, t = null);
    var w = o.extend({}, o.fn.bPopup.defaults, t);
    w.scrollBar || o("html").css("overflow", "hidden");
    var m, g, C, k, T, y, v, x, P, U, H, W = this,
      I = o(document),
      S = window,
      z = o(S),
      B = S.innerHeight || z.height(),
      _ = S.innerWidth || z.width(),
      D = /OS 6(_\d)+/i.test(navigator.userAgent),
      L = 200,
      j = 0;
    return W.close = function() {
      a()
    }, W.reposition = function(o) {
      l(o)
    }, W.each(function() {
      o(this).data("bPopup") || (f(w.onOpen), j = (z.data("bPopup") || 0) + 1, m = "__b-popup" + j + "__", C = "auto" !== w.position[1], k = "auto" !== w.position[0], T = "fixed" === w.positionStyle, x = W.outerHeight(!0), P = W.outerWidth(!0), w.loadUrl ? n() : i())
    })
  }, o.fn.bPopup.defaults = {
    amsl: 50,
    appending: !0,
    appendTo: "body",
    autoClose: !1,
    closeClass: "b-close",
    content: "ajax",
    contentContainer: !1,
    easing: "swing",
    escClose: !0,
    follow: [!0, !0],
    followEasing: "swing",
    followSpeed: 500,
    iframeAttr: 'scrolling="no" frameborder="0"',
    loadCallback: !1,
    loadData: !1,
    loadUrl: !1,
    modal: !0,
    modalClose: !0,
    modalColor: "#000",
    onClose: !1,
    onOpen: !1,
    opacity: .7,
    position: ["auto", "auto"],
    positionStyle: "absolute",
    scrollBar: !0,
    speed: 250,
    transition: "fadeIn",
    transitionClose: !1,
    zIndex: 19997
  }
}(jQuery);
! function(t, e, i, s) {
  function n(e, i) {
    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) {
      this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
    }, this)), t.each(n.Pipe, t.proxy(function(e, i) {
      this._pipe.push({
        filter: i.filter,
        run: t.proxy(i.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }

  function o(t) {
    if (t.touches !== s) return {
      x: t.touches[0].pageX,
      y: t.touches[0].pageY
    };
    if (t.touches === s) {
      if (t.pageX !== s) return {
        x: t.pageX,
        y: t.pageY
      };
      if (t.pageX === s) return {
        x: t.clientX,
        y: t.clientY
      }
    }
  }

  function r(t) {
    var e, s, n = i.createElement("div"),
      o = t;
    for (e in o)
      if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
    return [!1]
  }

  function a() {
    return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
  }

  function h() {
    return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
  }

  function l() {
    return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
  }

  function c() {
    return "ontouchstart" in e || !!navigator.msMaxTouchPoints
  }

  function d() {
    return e.navigator.msPointerEnabled
  }
  var p, u, g;
  p = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null
  }, u = {
    isTouch: !1,
    isScrolling: !1,
    isSwiping: !1,
    direction: !1,
    inMotion: !1
  }, g = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null
  }, n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    responsiveClass: !1,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item",
    centerClass: "center",
    activeClass: "active"
  }, n.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, n.Plugins = {}, n.Pipe = [{
    filter: ["width", "items", "settings"],
    run: function(t) {
      t.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var t = this._clones,
        e = this.$stage.children(".cloned");
      (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var t, e, i = this._clones,
        s = this._items,
        n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
      for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var t, e, i, s = this.settings.rtl ? 1 : -1,
        n = (this.width() / this.settings.items).toFixed(3),
        o = 0;
      for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var e, i, s = (this.width() / this.settings.items).toFixed(3),
        n = {
          width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
          "padding-left": this.settings.stagePadding || "",
          "padding-right": this.settings.stagePadding || ""
        };
      if (this.$stage.css(n), n = {
          width: this.settings.autoWidth ? "auto" : s - this.settings.margin
        }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
          return t > 1
        }).length > 0)
        for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
      else this.$stage.children().css(n)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(t) {
      t.current && this.reset(this.$stage.children().index(t.current))
    }
  }, {
    filter: ["position"],
    run: function() {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
      var t, e, i, s, n = this.settings.rtl ? 1 : -1,
        o = 2 * this.settings.stagePadding,
        r = this.coordinates(this.current()) + o,
        a = r + this.width() * n,
        h = [];
      for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
    }
  }], n.prototype.initialize = function() {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
      var e, i, n;
      if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
    }
    this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
  }, n.prototype.setup = function() {
    var e = this.viewport(),
      i = this.options.responsive,
      s = -1,
      n = null;
    i ? (t.each(i, function(t) {
      e >= t && t > s && (s = Number(t))
    }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
      return e.replace(/\b owl-responsive-\S+/g, "")
    }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
      property: {
        name: "settings",
        value: n
      }
    }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    }))
  }, n.prototype.optionsLogic = function() {
    this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, n.prototype.prepare = function(e) {
    var i = this.trigger("prepare", {
      content: e
    });
    return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
      content: i.data
    }), i.data
  }, n.prototype.update = function() {
    for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
        return this[t]
      }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
    this._invalidated = {}
  }, n.prototype.width = function(t) {
    switch (t = t || n.Width.Default) {
      case n.Width.Inner:
      case n.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, n.prototype.refresh = function() {
    return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
  }, n.prototype.eventsCall = function() {
    this.e._onDragStart = t.proxy(function(t) {
      this.onDragStart(t)
    }, this), this.e._onDragMove = t.proxy(function(t) {
      this.onDragMove(t)
    }, this), this.e._onDragEnd = t.proxy(function(t) {
      this.onDragEnd(t)
    }, this), this.e._onResize = t.proxy(function(t) {
      this.onResize(t)
    }, this), this.e._transitionEnd = t.proxy(function(t) {
      this.transitionEnd(t)
    }, this), this.e._preventClick = t.proxy(function(t) {
      this.preventClick(t)
    }, this)
  }, n.prototype.onThrottledResize = function() {
    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
  }, n.prototype.onResize = function() {
    return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
  }, n.prototype.eventsRouter = function(t) {
    var e = t.type;
    "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
  }, n.prototype.internalEvents = function() {
    var i = (c(), d());
    this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
      this.eventsRouter(t)
    }, this)), this.$stage.on("dragstart", function() {
      return !1
    }), this.$stage.get(0).onselectstart = function() {
      return !1
    }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
      this.eventsRouter(t)
    }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
  }, n.prototype.onDragStart = function(s) {
    var n, r, a, h;
    if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
    if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
    else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
    this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
      this.eventsRouter(t)
    }, this))
  }, n.prototype.onDragMove = function(t) {
    var i, n, r, a, h, l;
    this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
  }, n.prototype.onDragEnd = function(e) {
    var s, n, o;
    if (this.state.isTouch) {
      if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
      this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
    }
  }, n.prototype.removeClick = function(i) {
    this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
      t(i).off("click.preventClick")
    }, 300)
  }, n.prototype.preventClick = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
  }, n.prototype.getTransformProperty = function() {
    var t, i;
    return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
  }, n.prototype.closest = function(e) {
    var i = -1,
      s = 30,
      n = this.width(),
      o = this.coordinates();
    return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
      return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
    }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
  }, n.prototype.animate = function(e) {
    this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
      transform: "translate3d(" + e + "px,0px, 0px)",
      transition: this.speed() / 1e3 + "s"
    }) : this.state.isTouch ? this.$stage.css({
      left: e + "px"
    }) : this.$stage.animate({
      left: e
    }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
      this.state.inMotion && this.transitionEnd()
    }, this))
  }, n.prototype.current = function(t) {
    if (t === s) return this._current;
    if (0 === this._items.length) return s;
    if (t = this.normalize(t), this._current !== t) {
      var e = this.trigger("change", {
        property: {
          name: "position",
          value: t
        }
      });
      e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, n.prototype.invalidate = function(t) {
    this._invalidated[t] = !0
  }, n.prototype.reset = function(t) {
    t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
  }, n.prototype.normalize = function(e, i) {
    var n = i ? this._items.length : this._items.length + this._clones.length;
    return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
  }, n.prototype.relative = function(t) {
    return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
  }, n.prototype.maximum = function(t) {
    var e, i, s, n = 0,
      o = this.settings;
    if (t) return this._items.length - 1;
    if (!o.loop && o.center) e = this._items.length - 1;
    else if (o.loop || o.center)
      if (o.loop || o.center) e = this._items.length + o.items;
      else {
        if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
        for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
          (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
      }
    else e = this._items.length - o.items;
    return e
  }, n.prototype.minimum = function(t) {
    return t ? 0 : this._clones.length / 2
  }, n.prototype.items = function(t) {
    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
  }, n.prototype.mergers = function(t) {
    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
  }, n.prototype.clones = function(e) {
    var i = this._clones.length / 2,
      n = i + this._items.length,
      o = function(t) {
        return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
      };
    return e === s ? t.map(this._clones, function(t, e) {
      return o(e)
    }) : t.map(this._clones, function(t, i) {
      return t === e ? o(i) : null
    })
  }, n.prototype.speed = function(t) {
    return t !== s && (this._speed = t), this._speed
  }, n.prototype.coordinates = function(e) {
    var i = null;
    return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
      return this.coordinates(e)
    }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
  }, n.prototype.duration = function(t, e, i) {
    return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
  }, n.prototype.to = function(i, s) {
    if (this.settings.loop) {
      var n = i - this.relative(this.current()),
        o = this.current(),
        r = this.current(),
        a = this.current() + n,
        h = 0 > r - a,
        l = this._clones.length + this._items.length;
      a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
        this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
      }, this), 30)
    } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
  }, n.prototype.next = function(t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t)
  }, n.prototype.prev = function(t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t)
  }, n.prototype.transitionEnd = function(t) {
    return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
  }, n.prototype.viewport = function() {
    var s;
    if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
    else if (e.innerWidth) s = e.innerWidth;
    else {
      if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
      s = i.documentElement.clientWidth
    }
    return s
  }, n.prototype.replace = function(e) {
    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
      return 1 === this.nodeType
    }).each(t.proxy(function(t, e) {
      e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, n.prototype.add = function(t, e) {
    e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
      content: t,
      position: e
    }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
      content: t,
      position: e
    })
  }, n.prototype.remove = function(t) {
    t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
      content: this._items[t],
      position: t
    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: t
    }))
  }, n.prototype.addTriggerableEvents = function() {
    var e = t.proxy(function(e, i) {
      return t.proxy(function(t) {
        t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
      }, this)
    }, this);
    t.each({
      next: this.next,
      prev: this.prev,
      to: this.to,
      destroy: this.destroy,
      refresh: this.refresh,
      replace: this.replace,
      add: this.add,
      remove: this.remove
    }, t.proxy(function(t, i) {
      this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
    }, this))
  }, n.prototype.watchVisibility = function() {
    function i(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0
    }

    function s() {
      i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
    }
    i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
  }, n.prototype.preloadAutoWidthImages = function(e) {
    var i, s, n, o;
    i = 0, s = this, e.each(function(r, a) {
      n = t(a), o = new Image, o.onload = function() {
        i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
      }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
    })
  }, n.prototype.destroy = function() {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    for (var s in this._plugins) this._plugins[s].destroy();
    (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
      return !1
    })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
  }, n.prototype.op = function(t, e, i) {
    var s = this.settings.rtl;
    switch (e) {
      case "<":
        return s ? t > i : i > t;
      case ">":
        return s ? i > t : t > i;
      case ">=":
        return s ? i >= t : t >= i;
      case "<=":
        return s ? t >= i : i >= t
    }
  }, n.prototype.on = function(t, e, i, s) {
    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
  }, n.prototype.off = function(t, e, i, s) {
    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
  }, n.prototype.trigger = function(e, i, s) {
    var n = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      o = t.camelCase(t.grep(["on", e, s], function(t) {
        return t
      }).join("-").toLowerCase()),
      r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
        relatedTarget: this
      }, n, i));
    return this._supress[e] || (t.each(this._plugins, function(t, e) {
      e.onTrigger && e.onTrigger(r)
    }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
  }, n.prototype.suppress = function(e) {
    t.each(e, t.proxy(function(t, e) {
      this._supress[e] = !0
    }, this))
  }, n.prototype.release = function(e) {
    t.each(e, t.proxy(function(t, e) {
      delete this._supress[e]
    }, this))
  }, n.prototype.browserSupport = function() {
    if (this.support3d = l(), this.support3d) {
      this.transformVendor = h();
      var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
      this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
    }
    this.state.orientation = e.orientation
  }, t.fn.owlCarousel = function(e) {
    return this.each(function() {
      t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
    })
  }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
  var i = function(e) {
    this._core = e, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
          for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
              this.load(e)
            }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  i.Defaults = {
    lazyLoad: !1
  }, i.prototype.load = function(i) {
    var s = this._core.$stage.children().eq(i),
      n = s && s.find(".owl-lazy");
    !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
      var n, o = t(s),
        r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
      this._core.trigger("load", {
        element: o,
        url: r
      }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
        o.css("opacity", 1), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy")
      }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() {
        o.css({
          "background-image": "url(" + r + ")",
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: o,
          url: r
        }, "lazy")
      }, this), n.src = r)
    }, this)), this._loaded.push(s.get(0)))
  }, i.prototype.destroy = function() {
    var t, e;
    for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
  var e = function(i) {
    this._core = i, this._handlers = {
      "initialized.owl.carousel": t.proxy(function() {
        this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": t.proxy(function(t) {
        this._core.settings.autoHeight && "position" == t.property.name && this.update()
      }, this),
      "loaded.owl.lazy": t.proxy(function(t) {
        this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function() {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function() {
    var t, e;
    for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
  var s = function(e) {
    this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
      "resize.owl.carousel": t.proxy(function(t) {
        this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
      }, this),
      "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
        this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": t.proxy(function(e) {
        var i = t(e.content).find(".owl-video");
        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
      }, this)
    }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
      this.play(t)
    }, this))
  };
  s.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, s.prototype.fetch = function(t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
      s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
      n = t.attr("data-width") || this._core.settings.videoWidth,
      o = t.attr("data-height") || this._core.settings.videoHeight,
      r = t.attr("href");
    if (!r) throw new Error("Missing video URL.");
    if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";
    else {
      if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
      i = "vimeo"
    }
    s = s[6], this._videos[r] = {
      type: i,
      id: s,
      width: n,
      height: o
    }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
  }, s.prototype.thumbnail = function(e, i) {
    var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
      a = e.find("img"),
      h = "src",
      l = "",
      c = this._core.settings,
      d = function(t) {
        n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
      };
    return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({
      type: "GET",
      url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(t) {
        o = t[0].thumbnail_large, d(o)
      }
    }))
  }, s.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
  }, s.prototype.play = function(e) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();
    var i, s, n = t(e.target || e.srcElement),
      o = n.closest("." + this._core.settings.itemClass),
      r = this._videos[o.attr("data-video")],
      a = r.width || "100%",
      h = r.height || this._core.$stage.height();
    "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
  }, s.prototype.isInFullScreen = function() {
    var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
    return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
  }, s.prototype.destroy = function() {
    var t, e;
    this._core.$element.off("click.owl.video");
    for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
  var n = function(e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
      "change.owl.carousel": t.proxy(function(t) {
        "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
        this.swapping = "translated" == t.type
      }, this),
      "translate.owl.carousel": t.proxy(function() {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  n.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, n.prototype.swap = function() {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var e, i = t.proxy(this.clear, this),
        s = this.core.$stage.children().eq(this.previous),
        n = this.core.$stage.children().eq(this.next),
        o = this.core.settings.animateIn,
        r = this.core.settings.animateOut;
      this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
        left: e + "px"
      }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
    }
  }, n.prototype.clear = function(e) {
    t(e.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
  }, n.prototype.destroy = function() {
    var t, e;
    for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
  var s = function(e) {
    this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
        this.autoplay()
      }, this),
      "play.owl.autoplay": t.proxy(function(t, e, i) {
        this.play(e, i)
      }, this),
      "stop.owl.autoplay": t.proxy(function() {
        this.stop()
      }, this),
      "mouseover.owl.autoplay": t.proxy(function() {
        this.core.settings.autoplayHoverPause && this.pause()
      }, this),
      "mouseleave.owl.autoplay": t.proxy(function() {
        this.core.settings.autoplayHoverPause && this.autoplay()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  s.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, s.prototype.autoplay = function() {
    this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
      this.play()
    }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
  }, s.prototype.play = function() {
    return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
  }, s.prototype.stop = function() {
    e.clearInterval(this.interval)
  }, s.prototype.pause = function() {
    e.clearInterval(this.interval)
  }, s.prototype.destroy = function() {
    var t, i;
    e.clearInterval(this.interval);
    for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t) {
  "use strict";
  var e = function(i) {
    this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": t.proxy(function(e) {
        this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "add.owl.carousel": t.proxy(function(e) {
        this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
        this._core.settings.dotsData && this._templates.splice(t.position, 1)
      }, this),
      "change.owl.carousel": t.proxy(function(t) {
        if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var e = this._core.current(),
            i = this._core.maximum(),
            s = this._core.minimum();
          t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
        }
      }, this),
      "changed.owl.carousel": t.proxy(function(t) {
        "position" == t.property.name && this.draw()
      }, this),
      "refreshed.owl.carousel": t.proxy(function() {
        this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
      }, this)
    }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navRewind: !0,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotData: !1,
    dotsSpeed: !1,
    dotsContainer: !1,
    controlsClass: "owl-controls"
  }, e.prototype.initialize = function() {
    var e, i, s = this._core.settings;
    s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
      var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
      e.preventDefault(), this.to(i, s.dotsSpeed)
    }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
      this.prev(s.navSpeed)
    }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
      this.next(s.navSpeed)
    }, this));
    for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
  }, e.prototype.destroy = function() {
    var t, e, i, s;
    for (t in this._handlers) this.$element.off(t, this._handlers[t]);
    for (e in this._controls) this._controls[e].remove();
    for (s in this.overides) this._core[s] = this._overrides[s];
    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
  }, e.prototype.update = function() {
    var t, e, i, s = this._core.settings,
      n = this._core.clones().length / 2,
      o = n + this._core.items().length,
      r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
    if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
      for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
        start: t - n,
        end: t - n + r - 1
      }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
  }, e.prototype.draw = function() {
    var e, i, s = "",
      n = this._core.settings,
      o = (this._core.$stage.children(), this._core.relative(this._core.current()));
    if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
      if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
        for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
        this._controls.$indicators.html(s)
      } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
      this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
    }
    this._controls.$indicators.toggle(n.dots)
  }, e.prototype.onTrigger = function(e) {
    var i = this._core.settings;
    e.page = {
      index: t.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
    }
  }, e.prototype.current = function() {
    var e = this._core.relative(this._core.current());
    return t.grep(this._pages, function(t) {
      return t.start <= e && t.end >= e
    }).pop()
  }, e.prototype.getPosition = function(e) {
    var i, s, n = this._core.settings;
    return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
  }, e.prototype.next = function(e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
  }, e.prototype.prev = function(e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
  }, e.prototype.to = function(e, i, s) {
    var n;
    s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
  }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
  "use strict";
  var i = function(s) {
    this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": t.proxy(function() {
        "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": t.proxy(function(e) {
        var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[i] = e.content
      }, this)
    }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
      var t = e.location.hash.substring(1),
        i = this._core.$stage.children(),
        s = this._hashes[t] && i.index(this._hashes[t]) || 0;
      return !!t && void this._core.to(s, !1, !0)
    }, this))
  };
  i.Defaults = {
    URLhashListener: !1
  }, i.prototype.destroy = function() {
    var i, s;
    t(e).off("hashchange.owl.navigation");
    for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
    for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
  }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document);
Function.prototype.bind || (Function.prototype.bind = function(t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var i = Array.prototype.slice.call(arguments, 1),
      n = this,
      e = function() {},
      r = function() {
        return n.apply(this instanceof e && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
      };
    return e.prototype = this.prototype, r.prototype = new e, r
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
    "use strict";
    if (null == this) throw new TypeError;
    var i, n, e = Object(this),
      r = e.length >>> 0;
    if (0 === r) return -1;
    if (i = 0, arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= r) return -1;
    for (n = i >= 0 ? i : Math.max(r - Math.abs(i), 0); n < r; n++)
      if (n in e && e[n] === t) return n;
    return -1
  }),
  function(t) {
    var i = this,
      n = i.document || {},
      e = i.Date,
      r = i.JSON,
      s = i.jQuery,
      o = i.ko,
      a = n.ELEMENT_NODE || 1;
    i.helpers = new function(t, i, r, s, o) {
      this.page = {
        url: n.location.href,
        title: n.title
      }, this.shortRuDateString = function(t) {
        if (t instanceof e) {
          var i = t.getFullYear(),
            n = (t.getMonth() + 1).toString(),
            r = t.getDate().toString();
          return (r[1] ? r : "0" + r[0]) + "." + (n[1] ? n : "0" + n[0]) + "." + i
        }
        return null
      }, this.findNearest = function(t, i, n, e) {
        for (var r = null, s = null, o = 0; o < t.length; o++)
          if (n && t[o] <= i || e && t[o] >= i) {
            var a = Math.abs(i - t[o]);
            (null == s || a < s) && (r = t[o], s = a)
          }
        return r
      }, this.initDialog = function() {
        if (r.ui && r.ui.dialog && r.ui.dialog.prototype && r.ui.dialog.prototype._init) {
          var t = r.ui.dialog.prototype._init;
          r.ui.dialog.prototype._init = function() {
            t.apply(this, arguments), r(".ui-dialog").css("background", "transparent").css("border", "none"), r(".ui-dialog-titlebar").remove()
          }
        }
      }, this.round = function(t, i) {
        i === o && (i = 0);
        var n = Math.pow(10, i);
        return Math.round(parseFloat(t) * n) / n
      }, this.getAge = function(t) {
        if (!t) return o;
        var i = new e,
          n = i.getFullYear() - t.getFullYear(),
          r = i.getMonth() - t.getMonth(),
          s = i.getDate() - t.getDate();
        return 0 === r ? s < 0 ? n - 1 : n : r < 0 ? n - 1 : n
      }, this.getNsObject = function(i) {
        var n = t;
        arguments.length > 1 && (n = arguments[0], i = arguments[1]);
        for (var e = i.split("."), r = n, s = 0, a = e.length; s < a; ++s) {
          var u = e[s];
          if (r = r[u], r === o) return o
        }
        return r
      }.bind(this), this.setNsObject = function(i, n, e) {
        2 == arguments.length ? (e = n, n = i, i = t) : 1 == arguments.length && (e = {}, n = i, i = t);
        for (var r = n.split("."), s = i, a = 0, u = r.length - 1; a < u; ++a) {
          var l = r[a];
          s[l] === o && (s[l] = {}), s = s[l]
        }
        return s[r[r.length - 1]] = e, e
      }.bind(this), this.extendNsObject = function(i, n, e) {
        2 == arguments.length && (e = n, n = i, i = t);
        for (var s = n.split("."), a = i, u = 0, l = s.length; u < l; ++u) {
          var h = s[u];
          a[h] === o && (a[h] = {}), a = a[h]
        }
        return r.extend(a, e)
      }, this.flattenObject = function(t, i) {
        var n = function(t) {
          return t === o || null === t || this.isString(t) || this.isBoolean(t) || this.isNumber(t) || this.isFunction(t) || this.isArray(t) || this.isNode(t)
        }.bind(this);
        if (n(t)) return t;
        var e, r, s = (i || {}).glue || ".",
          a = (i || {}).withProto === !0,
          u = a ? function t(i, e, r) {
            for (var o in e) try {
              var a = e[o];
              n(a) ? i[r + o] = a : t(i, a, r + o + s)
            } catch (t) {}
          } : function t(i, e, r) {
            for (var o in e)
              if (e.hasOwnProperty(o)) {
                var a = e[o];
                n(a) ? i[r + o] = a : t(i, a, r + o + s)
              }
          },
          l = {};
        if (a)
          for (e in t) try {
            r = t[e], n(r) ? l[e] = r : u(l, r, e + s)
          } catch (t) {} else
            for (e in t) t.hasOwnProperty(e) && (r = t[e], n(r) ? l[e] = r : u(l, r, e + s));
        return l
      }.bind(this), this.clearObject = function(t, i) {
        if (i) {
          var n = function t(i) {
            for (var n in i) i.hasOwnProperty(n) && (helpers.isPlainObject(i[n]) ? t(i[n]) : i[n] = null)
          };
          n(t)
        } else
          for (var e in t) t.hasOwnProperty(e) && (t[e] = null);
        return t
      }.bind(this), this.trim = function(t) {
        return r.trim(t)
      }, this.STRING_CAMELIZE_REGEXP = /(\-|_|\.|\s)+(.)?/g, this.camelize = function(t) {
        return t.replace(this.STRING_CAMELIZE_REGEXP, function(t, i, n) {
          return n ? n.toUpperCase() : ""
        }).replace(/^([A-Z])/, function(t, i, n) {
          return t.toLowerCase()
        })
      }.bind(this), this.isRegExp = function(t) {
        return t instanceof RegExp
      }.bind(this), this.isString = function(t) {
        return "string" == typeof t
      }.bind(this), this.isBoolean = function(t) {
        return "boolean" == typeof t
      }.bind(this), this.isNumber = function(t) {
        return "number" == typeof t
      }.bind(this), this.isFunction = function(t) {
        return "function" == typeof t
      }.bind(this), this.isArray = function(t) {
        return r.isArray(t)
      }.bind(this), this.isPlainObject = function(t) {
        return r.isPlainObject(t)
      }.bind(this), this.isEmptyObject = function(t) {
        return r.isEmptyObject(t)
      }.bind(this), this.isNode = (window.Node ? function(t) {
        return t instanceof window.Node
      } : function(t) {
        return "object" == typeof t && t.nodeType
      }).bind(this), this.isElement = function(t) {
        return t && t.nodeType === a
      }.bind(this), this._smartMergeInternal = function(t, i) {
        var n = {};
        for (var e in t) n[e] = t[e];
        if (this.isPlainObject(i))
          for (var r in i) {
            var s = i[r],
              a = t[r];
            a === o ? n[r] = s : this.isPlainObject(a) ? this.isPlainObject(s) ? n[r] = this._smartMergeInternal(a, s) : n[r] = s : this.isArray(a) ? this.isArray(s) ? n[r] = a.concat(s) : n[r] = a.concat([s]) : n[r] = s
          }
        return n
      }.bind(this), this.merge = function(t, i, n) {
        return n ? this._smartMergeInternal(t, i) : r.extend({}, t, i)
      }.bind(this), this.getElementData = function(t) {
        var n = {
            modelName: null,
            options: {},
            urls: {},
            model: {}
          },
          e = r(t),
          s = e.get(0).attributes;
        return Array.prototype.forEach.call(s, function(t) {
          var e = t.name;
          if (!(e.length < 11)) {
            var r = e.toLowerCase().substr(0, 10),
              s = t.value,
              o = "",
              a = {};
            if ("data-model-name" === e) n.modelName = s;
            else if ("data-json-" === r) {
              var u = e.substr(10);
              "urls" === u ? n.urls = this.merge(n.urls, i.parse(s)) : u.startsWith("urls-") ? (o = this.camelize(u.substr(5)), a[o] = i.parse(s), n.urls = this.merge(n.urls, a)) : "model" === u ? n.model = this.merge(n.model, i.parse(s)) : u.startsWith("model-") ? (o = this.camelize(u.substr(6)), a[o] = i.parse(s), n.model = this.merge(n.model, a)) : (o = this.camelize(u), a[o] = i.parse(s), n.options = this.merge(n.options, a))
            } else "data-urls-" === r && (a[this.camelize(e.substr(10))] = s, n.urls = this.merge(n.urls, a))
          }
        }.bind(this)), this.isEmptyObject(n.urls) && (n.urls = null), this.isEmptyObject(n.model) ? this.isEmptyObject(n.options) && (n.options = null) : n.options = this.merge(n.options, {
          model: n.model
        }), n
      }.bind(this), this._getViewModelClass = function(i) {
        var n = (t.VIEW_MODEL_NS ? t.VIEW_MODEL_NS + "." : "") + i,
          e = this.getNsObject(n);
        if (!e) throw 'Could not find view model class "' + i + '" ("' + n + '")';
        return e
      }.bind(this), this.knockout = function(t, i) {
        var n = "{9006ea83-1106-420c-8d1a-673af9de979b}";
        i || (i = {});
        var e = t,
          s = i.viewModelName || null,
          o = i.force || !1,
          a = i.extenders || null,
          u = i.viewModelClass || null;
        !u && s && (u = this._getViewModelClass(s));
        var l = r(e).not("script"),
          h = null;
        return l.each(function(t, i) {
          var e = r(i),
            s = this.getElementData(e),
            l = this.merge(this.merge({
              $element: e,
              $hide: function(t) {
                e.modal("hide", [t])
              }
            }, s.options), a);
          u || (u = this._getViewModelClass(s.modelName));
          var c = e.data(n);
          !o && c && c === u || (h || (h = new u(l, s.urls)), window.ko.applyBindings(h, i), e.data(n, u))
        }.bind(this)), h
      }.bind(this), this.bPopup = function(t) {
        var i = r(t),
          n = r(window).width() / 2 - 516;
        return i.bPopup({
          position: [n, 100]
        })
      }
    }(i, r, s, o)
  }();
! function(i) {
  "use strict";
  i("body").on("click", ".q1", function(t) {
    t.preventDefault(), i("#q1").bPopup()
  }), i("body").on("click", ".q2", function(t) {
    t.preventDefault(), i("#q2").bPopup()
  }), i("body").on("click", ".q3", function(t) {
    t.preventDefault(), i("#q3").bPopup()
  }), i("body").on("click", ".q4", function(t) {
    t.preventDefault(), i("#q4").bPopup()
  })
}(jQuery), $(document).ready(function() {
  if ($(".menu_tabs-alpha").offset()) {
    var i = $(".menu_tabs-alpha").offset().top,
      t = function() {
        var t = $(window).scrollTop();
        t > i ? $(".menu_tabs-alpha").addClass("sticky") : $(".menu_tabs-alpha").removeClass("sticky")
      };
    t(), $(window).scroll(function() {
      t()
    })
  }
}), $(document).ready(function() {
  $("[data-toggle]").click(function() {
    var i = $(this).data("toggle");
    $(i).toggleClass("open-slide-menu")
  })
}), $(document).ready(function() {
  $("[data-toggle2]").click(function() {
    var i = $(this).data("toggle2");
    $(i).toggleClass("screen-visible")
  }), $(".screen-menu").click(function() {
    $(".screen-menu").toggleClass("screen-visible"), $(".slide-menu").toggleClass("open-slide-menu")
  }), $(".slide-menu>ul>li>a").click(function() {
    $(".screen-menu").toggleClass("screen-visible"), $(".slide-menu").toggleClass("open-slide-menu")
  })
}), $(document).ready(function() {
  $(".trigger").click(function(i) {
    var t = $(this);
    t.hasClass("active") ? $(this).removeClass("active") : ($(".trigger.active").click(), $(this).addClass("active"))
  })
}), $(document).ready(function() {
  $(".leasing_question-list > li > div").click(function(i) {
    var t = $(this).parent("li");
    return t.hasClass("active") ? (t.children("ul").slideToggle(), t.removeClass("active")) : ($(".leasing_question-list > li.active > div").click(), t.children("ul").slideToggle(), t.addClass("active")), !1
  })
}), $(document).ready(function() {
  $(".-open").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideToggle(), $(this).removeClass("active")) : ($(".-open.active").click(), $($(this).attr("ref")).slideToggle(), $(this).addClass("active")), !1
  }), $(".-open.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".-open2").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideToggle(), $(this).removeClass("active")) : ($(".-open2.active").click(), $($(this).attr("ref")).slideToggle(), $(this).addClass("active")), !1
  }), $(".-open2.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".mobile .question-list > li > span").click(function(i) {
    var t = $(this).parent("li"),
      e = $(t.parent().siblings(".question-opening")[t.index()]);
    return t.hasClass("active") ? (e.toggle("normal"), t.removeClass("active")) : ($(".mobile .question-list > li.active").click(), e.toggle("normal"), t.addClass("active")), !1
  })
}), $(document).ready(function() {
  $(".question-list > li > span").not(".mobile .question-list > li > span").click(function(i) {
    var t = $(this).parent("li"),
      e = $(t.parent().siblings(".question-opening")[t.index()]);
    return t.hasClass("active") ? (e.toggle("normal"), t.removeClass("active")) : ($('.question-block-list .question-opening[style="display: block;"]').toggle("normal"), $(".question-list li.active").removeClass("active"), $(".question-list > li.active").click(), e.toggle("normal"), t.addClass("active")), !1
  })
}), $(document).ready(function() {
  $(".map-item-data > ul > li").click(function(i) {
    var t = $(this);
    return t.hasClass("active") ? ($(this).children("ul").slideToggle(), $(this).removeClass("active")) : ($(".map-item-data > ul > li.active").click(), $(this).children("ul").slideToggle(), $(this).addClass("active")), !1
  })
}), $(document).ready(function() {
  $("#smp-1").click(function(i) {
    $(this);
    return $("#smp-1 .active").click(), $(this).addClass("active"), !1
  })
}), $(document).ready(function() {
  $("#smp-2").click(function(i) {
    $(this);
    return $("#smp-2 .active").click(), $(this).addClass("active"), !1
  })
}), $(".-find").on("click", function() {
  $($(this).attr("ref")).slideDown(), $(this).addClass("active")
}), $(".smp").on("click", function() {
  $(this).addClass("active")
}), $(document).ready(function() {
  $("#s-1 > li").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($("#s-1 > li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
  }), $("#s-1 > li.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $("#s-2 > li").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($("#s-2 > li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
  }), $("#s-2 > li.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".leasing_clients-slider li").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($(".leasing_clients-slider li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
  }), $(".leasing_clients-slider li.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".desktop .menu_main-alpha li").hover(function() {
    var i = $(this).find(".submenu_main");
    i.hasClass("-partial") && i.css("width", i.parent().width() + "px"), i.fadeIn("fast", "swing")
  }, function() {
    $(this).find(".submenu_main").fadeOut("fast", "swing")
  })
}), $(document).ready(function() {
  $(".tablet .menu_main-alpha li").click(function() {
    if ($(this).hasClass("touch-hover")) return !0;
    $(this).siblings().removeClass("touch-hover"), $(this).siblings().find(".submenu_main").hide();
    var i = $(this).find(".submenu_main");
    return i.hasClass("-partial") && i.css("width", i.parent().width() + "px"), i.show(), $(this).addClass("touch-hover"), !1
  }), $(document).click(function(i) {
    $(i.target).closest(".tablet .menu_main-alpha").length < 1 && ($(".submenu_main").hide(), $(".touch-hover").removeClass("touch-hover"))
  })
}), $(document).ready(function() {
  $(".to-top").hide(), $(function() {
    $(window).scroll(function() {
      $(this).scrollTop() > 100 ? $(".to-top").fadeIn() : $(".to-top").fadeOut()
    }), $(".to-top .to-top-block").click(function() {
      return $("body,html").animate({
        scrollTop: 0
      }, 800), !1
    })
  })
}), $(document).ready(function() {
  $(".opener").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideUp(250), $(this).removeClass("active")) : ($(".opener.active").click(), $($(this).attr("ref")).slideDown(250), $(this).addClass("active")), !1
  }), $(".opener.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".menu_item").click(function() {
    var i = $(this);
    i.hasClass("active") ? $(this).removeClass("active") : ($(".menu_item.active").click(), $(this).addClass("active"))
  }), $(".menu_item.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".sa > li").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($(".sa > li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
  }), $(".sa > li.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $("#sw-1 .switch-item").click(function() {
    var i = $(this);
    return i.hasClass("active") ? ($($(this).attr("ref")).fadeOut(), $(this).removeClass("active")) : ($("#sw-1 .switch-item.active").click(), $($(this).attr("ref")).fadeIn(), $(this).addClass("active")), !1
  }), $("#sw-1 .switch-item.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $("#sw-2 .switch-item").click(function() {
    var i = $(this);
    return i.hasClass("active") ? $(this).removeClass("active") : ($("#sw-2 .switch-item.active").click(), $(this).addClass("active")), !1
  }), $("#sw-2 .switch-item.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $("#sw-3 .switch-item").click(function() {
    var i = $(this);
    return i.hasClass("active") ? $(this).removeClass("active") : ($("#sw-3 .switch-item.active").click(), $(this).addClass("active")), !1
  }), $("#sw-3 .switch-item.active").click(function() {
    return !1
  })
}), $(document).ready(function() {
  $(".file-upload input[type=file]").change(function() {
    var i = $(this).val().replace(/.*\\/, "");
    $(".filename").val(i)
  })
}), $(document).ready(function() {
  $(".slide-menu-nav > li").click(function(i) {
    var t = $(this);
    t.hasClass("active") ? ($(this).children("ul").slideToggle(), $(this).removeClass("active")) : ($(".slide-menu-nav > li.active").click(), $(this).children("ul").slideToggle(), $(this).addClass("active"))
  })
});
! function(e) {
  "use strict";

  function t(e, t) {
    return t = t || Error,
      function() {
        var n, r, i = 2,
          o = arguments,
          a = o[0],
          s = "[" + (e ? e + ":" : "") + a + "] ",
          u = o[1];
        for (s += u.replace(/\{\d+\}/g, function(e) {
            var t = +e.slice(1, -1),
              n = t + i;
            return n < o.length ? ge(o[n]) : e
          }), s += "\nhttp://errors.angularjs.org/1.5.8/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent(ge(o[r]));
        return new t(s)
      }
  }

  function n(e) {
    if (null == e || A(e)) return !1;
    if (Jr(e) || w(e) || Rr && e instanceof Rr) return !0;
    var t = "length" in Object(e) && e.length;
    return x(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
  }

  function r(e, t, i) {
    var o, a;
    if (e)
      if (S(e))
        for (o in e) "prototype" == o || "length" == o || "name" == o || e.hasOwnProperty && !e.hasOwnProperty(o) || t.call(i, e[o], o, e);
      else if (Jr(e) || n(e)) {
      var s = "object" != typeof e;
      for (o = 0, a = e.length; o < a; o++)(s || o in e) && t.call(i, e[o], o, e)
    } else if (e.forEach && e.forEach !== r) e.forEach(t, i, e);
    else if (b(e))
      for (o in e) t.call(i, e[o], o, e);
    else if ("function" == typeof e.hasOwnProperty)
      for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e);
    else
      for (o in e) Vr.call(e, o) && t.call(i, e[o], o, e);
    return e
  }

  function i(e, t, n) {
    for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
    return r
  }

  function o(e) {
    return function(t, n) {
      e(n, t)
    }
  }

  function a() {
    return ++Zr
  }

  function s(e, t) {
    t ? e.$$hashKey = t : delete e.$$hashKey
  }

  function u(e, t, n) {
    for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
      var a = t[i];
      if (y(a) || S(a))
        for (var c = Object.keys(a), l = 0, f = c.length; l < f; l++) {
          var h = c[l],
            p = a[h];
          n && y(p) ? C(p) ? e[h] = new Date(p.valueOf()) : E(p) ? e[h] = new RegExp(p) : p.nodeName ? e[h] = p.cloneNode(!0) : D(p) ? e[h] = p.clone() : (y(e[h]) || (e[h] = Jr(p) ? [] : {}), u(e[h], [p], !0)) : e[h] = p
        }
    }
    return s(e, r), e
  }

  function c(e) {
    return u(e, Ur.call(arguments, 1), !1)
  }

  function l(e) {
    return u(e, Ur.call(arguments, 1), !0)
  }

  function f(e) {
    return parseInt(e, 10)
  }

  function h(e, t) {
    return c(Object.create(e), t)
  }

  function p() {}

  function d(e) {
    return e
  }

  function $(e) {
    return function() {
      return e
    }
  }

  function v(e) {
    return S(e.toString) && e.toString !== Br
  }

  function m(e) {
    return "undefined" == typeof e
  }

  function g(e) {
    return "undefined" != typeof e
  }

  function y(e) {
    return null !== e && "object" == typeof e
  }

  function b(e) {
    return null !== e && "object" == typeof e && !zr(e)
  }

  function w(e) {
    return "string" == typeof e
  }

  function x(e) {
    return "number" == typeof e
  }

  function C(e) {
    return "[object Date]" === Br.call(e)
  }

  function S(e) {
    return "function" == typeof e
  }

  function E(e) {
    return "[object RegExp]" === Br.call(e)
  }

  function A(e) {
    return e && e.window === e
  }

  function k(e) {
    return e && e.$evalAsync && e.$watch
  }

  function O(e) {
    return "[object File]" === Br.call(e)
  }

  function M(e) {
    return "[object FormData]" === Br.call(e)
  }

  function T(e) {
    return "[object Blob]" === Br.call(e)
  }

  function N(e) {
    return "boolean" == typeof e
  }

  function V(e) {
    return e && S(e.then)
  }

  function j(e) {
    return e && x(e.length) && Yr.test(Br.call(e))
  }

  function I(e) {
    return "[object ArrayBuffer]" === Br.call(e)
  }

  function D(e) {
    return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
  }

  function P(e) {
    var t, n = {},
      r = e.split(",");
    for (t = 0; t < r.length; t++) n[r[t]] = !0;
    return n
  }

  function _(e) {
    return jr(e.nodeName || e[0] && e[0].nodeName)
  }

  function R(e, t) {
    var n = e.indexOf(t);
    return n >= 0 && e.splice(n, 1), n
  }

  function F(e, t) {
    function n(e, t) {
      var n, r = t.$$hashKey;
      if (Jr(e))
        for (var o = 0, a = e.length; o < a; o++) t.push(i(e[o]));
      else if (b(e))
        for (n in e) t[n] = i(e[n]);
      else if (e && "function" == typeof e.hasOwnProperty)
        for (n in e) e.hasOwnProperty(n) && (t[n] = i(e[n]));
      else
        for (n in e) Vr.call(e, n) && (t[n] = i(e[n]));
      return s(t, r), t
    }

    function i(e) {
      if (!y(e)) return e;
      var t = a.indexOf(e);
      if (t !== -1) return u[t];
      if (A(e) || k(e)) throw Wr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
      var r = !1,
        i = o(e);
      return void 0 === i && (i = Jr(e) ? [] : Object.create(zr(e)), r = !0), a.push(e), u.push(i), r ? n(e, i) : i
    }

    function o(e) {
      switch (Br.call(e)) {
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return new e.constructor(i(e.buffer), e.byteOffset, e.length);
        case "[object ArrayBuffer]":
          if (!e.slice) {
            var t = new ArrayBuffer(e.byteLength);
            return new Uint8Array(t).set(new Uint8Array(e)), t
          }
          return e.slice(0);
        case "[object Boolean]":
        case "[object Number]":
        case "[object String]":
        case "[object Date]":
          return new e.constructor(e.valueOf());
        case "[object RegExp]":
          var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
          return n.lastIndex = e.lastIndex, n;
        case "[object Blob]":
          return new e.constructor([e], {
            type: e.type
          })
      }
      if (S(e.cloneNode)) return e.cloneNode(!0)
    }
    var a = [],
      u = [];
    if (t) {
      if (j(t) || I(t)) throw Wr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
      if (e === t) throw Wr("cpi", "Can't copy! Source and destination are identical.");
      return Jr(t) ? t.length = 0 : r(t, function(e, n) {
        "$$hashKey" !== n && delete t[n]
      }), a.push(e), u.push(t), n(e, t)
    }
    return i(e)
  }

  function q(e, t) {
    if (e === t) return !0;
    if (null === e || null === t) return !1;
    if (e !== e && t !== t) return !0;
    var n, r, i, o = typeof e,
      a = typeof t;
    if (o == a && "object" == o) {
      if (!Jr(e)) {
        if (C(e)) return !!C(t) && q(e.getTime(), t.getTime());
        if (E(e)) return !!E(t) && e.toString() == t.toString();
        if (k(e) || k(t) || A(e) || A(t) || Jr(t) || C(t) || E(t)) return !1;
        i = de();
        for (r in e)
          if ("$" !== r.charAt(0) && !S(e[r])) {
            if (!q(e[r], t[r])) return !1;
            i[r] = !0
          }
        for (r in t)
          if (!(r in i) && "$" !== r.charAt(0) && g(t[r]) && !S(t[r])) return !1;
        return !0
      }
      if (!Jr(t)) return !1;
      if ((n = e.length) == t.length) {
        for (r = 0; r < n; r++)
          if (!q(e[r], t[r])) return !1;
        return !0
      }
    }
    return !1
  }

  function U(e, t, n) {
    return e.concat(Ur.call(t, n))
  }

  function L(e, t) {
    return Ur.call(e, t || 0)
  }

  function H(e, t) {
    var n = arguments.length > 2 ? L(arguments, 2) : [];
    return !S(t) || t instanceof RegExp ? t : n.length ? function() {
      return arguments.length ? t.apply(e, U(n, arguments, 0)) : t.apply(e, n)
    } : function() {
      return arguments.length ? t.apply(e, arguments) : t.call(e)
    }
  }

  function B(t, n) {
    var r = n;
    return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : A(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : k(n) && (r = "$SCOPE"), r
  }

  function z(e, t) {
    if (!m(e)) return x(t) || (t = t ? 2 : null), JSON.stringify(e, B, t)
  }

  function W(e) {
    return w(e) ? JSON.parse(e) : e
  }

  function G(e, t) {
    e = e.replace(ti, "");
    var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
    return isNaN(n) ? t : n
  }

  function Z(e, t) {
    return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
  }

  function J(e, t, n) {
    n = n ? -1 : 1;
    var r = e.getTimezoneOffset(),
      i = G(t, r);
    return Z(e, n * (i - r))
  }

  function Y(e) {
    e = Rr(e).clone();
    try {
      e.empty()
    } catch (e) {}
    var t = Rr("<div>").append(e).html();
    try {
      return e[0].nodeType === si ? jr(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
        return "<" + jr(t)
      })
    } catch (e) {
      return jr(t)
    }
  }

  function K(e) {
    try {
      return decodeURIComponent(e)
    } catch (e) {}
  }

  function X(e) {
    var t = {};
    return r((e || "").split("&"), function(e) {
      var n, r, i;
      e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), n !== -1 && (r = e.substring(0, n), i = e.substring(n + 1)), r = K(r), g(r) && (i = !g(i) || K(i), Vr.call(t, r) ? Jr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
    }), t
  }

  function Q(e) {
    var t = [];
    return r(e, function(e, n) {
      Jr(e) ? r(e, function(e) {
        t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
      }) : t.push(te(n, !0) + (e === !0 ? "" : "=" + te(e, !0)))
    }), t.length ? t.join("&") : ""
  }

  function ee(e) {
    return te(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function te(e, t) {
    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
  }

  function ne(e, t) {
    var n, r, i = ni.length;
    for (r = 0; r < i; ++r)
      if (n = ni[r] + t, w(n = e.getAttribute(n))) return n;
    return null
  }

  function re(e, t) {
    var n, i, o = {};
    r(ni, function(t) {
      var r = t + "app";
      !n && e.hasAttribute && e.hasAttribute(r) && (n = e, i = e.getAttribute(r))
    }), r(ni, function(t) {
      var r, o = t + "app";
      !n && (r = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = r, i = r.getAttribute(o))
    }), n && (o.strictDi = null !== ne(n, "strict-di"), t(n, i ? [i] : [], o))
  }

  function ie(t, n, i) {
    y(i) || (i = {});
    var o = {
      strictDi: !1
    };
    i = c(o, i);
    var a = function() {
        if (t = Rr(t), t.injector()) {
          var r = t[0] === e.document ? "document" : Y(t);
          throw Wr("btstrpd", "App already bootstrapped with this element '{0}'", r.replace(/</, "&lt;").replace(/>/, "&gt;"))
        }
        n = n || [], n.unshift(["$provide", function(e) {
          e.value("$rootElement", t)
        }]), i.debugInfoEnabled && n.push(["$compileProvider", function(e) {
          e.debugInfoEnabled(!0)
        }]), n.unshift("ng");
        var o = rt(n, i.strictDi);
        return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
          e.$apply(function() {
            t.data("$injector", r), n(t)(e)
          })
        }]), o
      },
      s = /^NG_ENABLE_DEBUG_INFO!/,
      u = /^NG_DEFER_BOOTSTRAP!/;
    return e && s.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !u.test(e.name) ? a() : (e.name = e.name.replace(u, ""), Gr.resumeBootstrap = function(e) {
      return r(e, function(e) {
        n.push(e)
      }), a()
    }, void(S(Gr.resumeDeferredBootstrap) && Gr.resumeDeferredBootstrap()))
  }

  function oe() {
    e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
  }

  function ae(e) {
    var t = Gr.element(e).injector();
    if (!t) throw Wr("test", "no injector found for element argument to getTestability");
    return t.get("$$testability")
  }

  function se(e, t) {
    return t = t || "_", e.replace(ri, function(e, n) {
      return (n ? t : "") + e.toLowerCase()
    })
  }

  function ue() {
    var t;
    if (!ii) {
      var n = ei();
      Fr = m(n) ? e.jQuery : n ? e[n] : void 0, Fr && Fr.fn.on ? (Rr = Fr, c(Fr.fn, {
        scope: Ai.scope,
        isolateScope: Ai.isolateScope,
        controller: Ai.controller,
        injector: Ai.injector,
        inheritedData: Ai.inheritedData
      }), t = Fr.cleanData, Fr.cleanData = function(e) {
        for (var n, r, i = 0; null != (r = e[i]); i++) n = Fr._data(r, "events"), n && n.$destroy && Fr(r).triggerHandler("$destroy");
        t(e)
      }) : Rr = Me, Gr.element = Rr, ii = !0
    }
  }

  function ce(e, t, n) {
    if (!e) throw Wr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
    return e
  }

  function le(e, t, n) {
    return n && Jr(e) && (e = e[e.length - 1]), ce(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
  }

  function fe(e, t) {
    if ("hasOwnProperty" === e) throw Wr("badname", "hasOwnProperty is not a valid {0} name", t)
  }

  function he(e, t, n) {
    if (!t) return e;
    for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++) r = i[s], e && (e = (o = e)[r]);
    return !n && S(e) ? H(o, e) : e
  }

  function pe(e) {
    for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = Rr(Ur.call(e, 0, i))), t.push(n));
    return t || e
  }

  function de() {
    return Object.create(null)
  }

  function $e(e) {
    function n(e, t, n) {
      return e[t] || (e[t] = n())
    }
    var r = t("$injector"),
      i = t("ng"),
      o = n(e, "angular", Object);
    return o.$$minErr = o.$$minErr || t, n(o, "module", function() {
      var e = {};
      return function(t, o, a) {
        var s = function(e, t) {
          if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
        };
        return s(t, "module"), o && e.hasOwnProperty(t) && (e[t] = null), n(e, t, function() {
          function e(e, t, n, r) {
            return r || (r = i),
              function() {
                return r[n || "push"]([e, t, arguments]), l
              }
          }

          function n(e, n) {
            return function(r, o) {
              return o && S(o) && (o.$$moduleName = t), i.push([e, n, arguments]), l
            }
          }
          if (!o) throw r("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", t);
          var i = [],
            s = [],
            u = [],
            c = e("$injector", "invoke", "push", s),
            l = {
              _invokeQueue: i,
              _configBlocks: s,
              _runBlocks: u,
              requires: o,
              name: t,
              provider: n("$provide", "provider"),
              factory: n("$provide", "factory"),
              service: n("$provide", "service"),
              value: e("$provide", "value"),
              constant: e("$provide", "constant", "unshift"),
              decorator: n("$provide", "decorator"),
              animation: n("$animateProvider", "register"),
              filter: n("$filterProvider", "register"),
              controller: n("$controllerProvider", "register"),
              directive: n("$compileProvider", "directive"),
              component: n("$compileProvider", "component"),
              config: c,
              run: function(e) {
                return u.push(e), this
              }
            };
          return a && c(a), l
        })
      }
    })
  }

  function ve(e, t) {
    if (Jr(e)) {
      t = t || [];
      for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
    } else if (y(e)) {
      t = t || {};
      for (var i in e) "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i])
    }
    return t || e
  }

  function me(e) {
    var t = [];
    return JSON.stringify(e, function(e, n) {
      if (n = B(e, n), y(n)) {
        if (t.indexOf(n) >= 0) return "...";
        t.push(n)
      }
      return n
    })
  }

  function ge(e) {
    return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : m(e) ? "undefined" : "string" != typeof e ? me(e) : e
  }

  function ye(n) {
    c(n, {
      bootstrap: ie,
      copy: F,
      extend: c,
      merge: l,
      equals: q,
      element: Rr,
      forEach: r,
      injector: rt,
      noop: p,
      bind: H,
      toJson: z,
      fromJson: W,
      identity: d,
      isUndefined: m,
      isDefined: g,
      isString: w,
      isFunction: S,
      isObject: y,
      isNumber: x,
      isElement: D,
      isArray: Jr,
      version: fi,
      isDate: C,
      lowercase: jr,
      uppercase: Ir,
      callbacks: {
        $$counter: 0
      },
      getTestability: ae,
      $$minErr: t,
      $$csp: Qr,
      reloadWithDebugInfo: oe
    }), (qr = $e(e))("ng", ["ngLocale"], ["$provide", function(e) {
      e.provider({
        $$sanitizeUri: En
      }), e.provider("$compile", dt).directive({
        a: Do,
        input: ea,
        textarea: ea,
        form: qo,
        script: Ja,
        select: Xa,
        style: es,
        option: Qa,
        ngBind: ra,
        ngBindHtml: oa,
        ngBindTemplate: ia,
        ngClass: sa,
        ngClassEven: ca,
        ngClassOdd: ua,
        ngCloak: la,
        ngController: fa,
        ngForm: Uo,
        ngHide: La,
        ngIf: da,
        ngInclude: $a,
        ngInit: ma,
        ngNonBindable: ja,
        ngPluralize: _a,
        ngRepeat: Ra,
        ngShow: Ua,
        ngStyle: Ha,
        ngSwitch: Ba,
        ngSwitchWhen: za,
        ngSwitchDefault: Wa,
        ngOptions: Pa,
        ngTransclude: Za,
        ngModel: Ta,
        ngList: ga,
        ngChange: aa,
        pattern: ns,
        ngPattern: ns,
        required: ts,
        ngRequired: ts,
        minlength: is,
        ngMinlength: is,
        maxlength: rs,
        ngMaxlength: rs,
        ngValue: na,
        ngModelOptions: Va
      }).directive({
        ngInclude: va
      }).directive(Po).directive(ha), e.provider({
        $anchorScroll: it,
        $animate: Li,
        $animateCss: zi,
        $$animateJs: qi,
        $$animateQueue: Ui,
        $$AnimateRunner: Bi,
        $$animateAsyncRun: Hi,
        $browser: lt,
        $cacheFactory: ft,
        $controller: bt,
        $document: wt,
        $exceptionHandler: xt,
        $filter: Fn,
        $$forceReflow: Ki,
        $interpolate: Pt,
        $interval: _t,
        $http: Vt,
        $httpParamSerializer: St,
        $httpParamSerializerJQLike: Et,
        $httpBackend: It,
        $xhrFactory: jt,
        $jsonpCallbacks: ao,
        $location: Xt,
        $log: Qt,
        $parse: yn,
        $rootScope: Sn,
        $q: bn,
        $$q: wn,
        $sce: Mn,
        $sceDelegate: On,
        $sniffer: Tn,
        $templateCache: ht,
        $templateRequest: Nn,
        $$testability: Vn,
        $timeout: jn,
        $window: Pn,
        $$rAF: Cn,
        $$jqLite: Ye,
        $$HashMap: Ti,
        $$cookieReader: Rn
      })
    }])
  }

  function be() {
    return ++pi
  }

  function we(e) {
    return e.replace(vi, function(e, t, n, r) {
      return r ? n.toUpperCase() : n
    }).replace(mi, "Moz$1")
  }

  function xe(e) {
    return !wi.test(e)
  }

  function Ce(e) {
    var t = e.nodeType;
    return t === oi || !t || t === ci
  }

  function Se(e) {
    for (var t in hi[e.ng339]) return !0;
    return !1
  }

  function Ee(e) {
    for (var t = 0, n = e.length; t < n; t++) je(e[t])
  }

  function Ae(e, t) {
    var n, i, o, a, s = t.createDocumentFragment(),
      u = [];
    if (xe(e)) u.push(t.createTextNode(e));
    else {
      for (n = s.appendChild(t.createElement("div")), i = (xi.exec(e) || ["", ""])[1].toLowerCase(), o = Si[i] || Si._default, n.innerHTML = o[1] + e.replace(Ci, "<$1></$2>") + o[2], a = o[0]; a--;) n = n.lastChild;
      u = U(u, n.childNodes), n = s.firstChild, n.textContent = ""
    }
    return s.textContent = "", s.innerHTML = "", r(u, function(e) {
      s.appendChild(e)
    }), s
  }

  function ke(t, n) {
    n = n || e.document;
    var r;
    return (r = bi.exec(t)) ? [n.createElement(r[1])] : (r = Ae(t, n)) ? r.childNodes : []
  }

  function Oe(e, t) {
    var n = e.parentNode;
    n && n.replaceChild(t, e), t.appendChild(e)
  }

  function Me(e) {
    if (e instanceof Me) return e;
    var t;
    if (w(e) && (e = Kr(e), t = !0), !(this instanceof Me)) {
      if (t && "<" != e.charAt(0)) throw yi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
      return new Me(e)
    }
    t ? Fe(this, ke(e)) : Fe(this, e)
  }

  function Te(e) {
    return e.cloneNode(!0)
  }

  function Ne(e, t) {
    if (t || je(e), e.querySelectorAll)
      for (var n = e.querySelectorAll("*"), r = 0, i = n.length; r < i; r++) je(n[r])
  }

  function Ve(e, t, n, i) {
    if (g(i)) throw yi("offargs", "jqLite#off() does not support the `selector` argument");
    var o = Ie(e),
      a = o && o.events,
      s = o && o.handle;
    if (s)
      if (t) {
        var u = function(t) {
          var r = a[t];
          g(n) && R(r || [], n), g(n) && r && r.length > 0 || ($i(e, t, s), delete a[t])
        };
        r(t.split(" "), function(e) {
          u(e), gi[e] && u(gi[e])
        })
      } else
        for (t in a) "$destroy" !== t && $i(e, t, s), delete a[t]
  }

  function je(e, t) {
    var n = e.ng339,
      r = n && hi[n];
    if (r) {
      if (t) return void delete r.data[t];
      r.handle && (r.events.$destroy && r.handle({}, "$destroy"), Ve(e)), delete hi[n], e.ng339 = void 0
    }
  }

  function Ie(e, t) {
    var n = e.ng339,
      r = n && hi[n];
    return t && !r && (e.ng339 = n = be(), r = hi[n] = {
      events: {},
      data: {},
      handle: void 0
    }), r
  }

  function De(e, t, n) {
    if (Ce(e)) {
      var r = g(n),
        i = !r && t && !y(t),
        o = !t,
        a = Ie(e, !i),
        s = a && a.data;
      if (r) s[t] = n;
      else {
        if (o) return s;
        if (i) return s && s[t];
        c(s, t)
      }
    }
  }

  function Pe(e, t) {
    return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
  }

  function _e(e, t) {
    t && e.setAttribute && r(t.split(" "), function(t) {
      e.setAttribute("class", Kr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Kr(t) + " ", " ")))
    })
  }

  function Re(e, t) {
    if (t && e.setAttribute) {
      var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      r(t.split(" "), function(e) {
        e = Kr(e), n.indexOf(" " + e + " ") === -1 && (n += e + " ")
      }), e.setAttribute("class", Kr(n))
    }
  }

  function Fe(e, t) {
    if (t)
      if (t.nodeType) e[e.length++] = t;
      else {
        var n = t.length;
        if ("number" == typeof n && t.window !== t) {
          if (n)
            for (var r = 0; r < n; r++) e[e.length++] = t[r]
        } else e[e.length++] = t
      }
  }

  function qe(e, t) {
    return Ue(e, "$" + (t || "ngController") + "Controller")
  }

  function Ue(e, t, n) {
    e.nodeType == ci && (e = e.documentElement);
    for (var r = Jr(t) ? t : [t]; e;) {
      for (var i = 0, o = r.length; i < o; i++)
        if (g(n = Rr.data(e, r[i]))) return n;
      e = e.parentNode || e.nodeType === li && e.host
    }
  }

  function Le(e) {
    for (Ne(e, !0); e.firstChild;) e.removeChild(e.firstChild)
  }

  function He(e, t) {
    t || Ne(e);
    var n = e.parentNode;
    n && n.removeChild(e)
  }

  function Be(t, n) {
    n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : Rr(n).on("load", t)
  }

  function ze(e, t) {
    var n = ki[t.toLowerCase()];
    return n && Oi[_(e)] && n
  }

  function We(e) {
    return Mi[e]
  }

  function Ge(e, t) {
    var n = function(n, r) {
      n.isDefaultPrevented = function() {
        return n.defaultPrevented
      };
      var i = t[r || n.type],
        o = i ? i.length : 0;
      if (o) {
        if (m(n.immediatePropagationStopped)) {
          var a = n.stopImmediatePropagation;
          n.stopImmediatePropagation = function() {
            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
          }
        }
        n.isImmediatePropagationStopped = function() {
          return n.immediatePropagationStopped === !0
        };
        var s = i.specialHandlerWrapper || Ze;
        o > 1 && (i = ve(i));
        for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(e, n, i[u])
      }
    };
    return n.elem = e, n
  }

  function Ze(e, t, n) {
    n.call(e, t)
  }

  function Je(e, t, n) {
    var r = t.relatedTarget;
    r && (r === e || Ei.call(e, r)) || n.call(e, t)
  }

  function Ye() {
    this.$get = function() {
      return c(Me, {
        hasClass: function(e, t) {
          return e.attr && (e = e[0]), Pe(e, t)
        },
        addClass: function(e, t) {
          return e.attr && (e = e[0]), Re(e, t)
        },
        removeClass: function(e, t) {
          return e.attr && (e = e[0]), _e(e, t)
        }
      })
    }
  }

  function Ke(e, t) {
    var n = e && e.$$hashKey;
    if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
    var r = typeof e;
    return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || a)() : r + ":" + e
  }

  function Xe(e, t) {
    if (t) {
      var n = 0;
      this.nextUid = function() {
        return ++n
      }
    }
    r(e, this.put, this)
  }

  function Qe(e) {
    return Function.prototype.toString.call(e) + " "
  }

  function et(e) {
    var t = Qe(e).replace(Di, ""),
      n = t.match(Ni) || t.match(Vi);
    return n
  }

  function tt(e) {
    var t = et(e);
    return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
  }

  function nt(e, t, n) {
    var i, o, a;
    if ("function" == typeof e) {
      if (!(i = e.$inject)) {
        if (i = [], e.length) {
          if (t) throw w(n) && n || (n = e.name || tt(e)), Pi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
          o = et(e), r(o[1].split(ji), function(e) {
            e.replace(Ii, function(e, t, n) {
              i.push(n)
            })
          })
        }
        e.$inject = i
      }
    } else Jr(e) ? (a = e.length - 1, le(e[a], "fn"), i = e.slice(0, a)) : le(e, "fn", !0);
    return i
  }

  function rt(e, t) {
    function n(e) {
      return function(t, n) {
        return y(t) ? void r(t, o(e)) : e(t, n)
      }
    }

    function i(e, t) {
      if (fe(e, "service"), (S(t) || Jr(t)) && (t = C.instantiate(t)), !t.$get) throw Pi("pget", "Provider '{0}' must define $get factory method.", e);
      return x[e + v] = t
    }

    function a(e, t) {
      return function() {
        var n = k.invoke(t, this);
        if (m(n)) throw Pi("undef", "Provider '{0}' must return a value from $get factory method.", e);
        return n
      }
    }

    function s(e, t, n) {
      return i(e, {
        $get: n !== !1 ? a(e, t) : t
      })
    }

    function u(e, t) {
      return s(e, ["$injector", function(e) {
        return e.instantiate(t)
      }])
    }

    function c(e, t) {
      return s(e, $(t), !1)
    }

    function l(e, t) {
      fe(e, "constant"), x[e] = t, E[e] = t
    }

    function f(e, t) {
      var n = C.get(e + v),
        r = n.$get;
      n.$get = function() {
        var e = k.invoke(r, n);
        return k.invoke(t, null, {
          $delegate: e
        })
      }
    }

    function h(e) {
      ce(m(e) || Jr(e), "modulesToLoad", "not an array");
      var t, n = [];
      return r(e, function(e) {
        function r(e) {
          var t, n;
          for (t = 0, n = e.length; t < n; t++) {
            var r = e[t],
              i = C.get(r[0]);
            i[r[1]].apply(i, r[2])
          }
        }
        if (!b.get(e)) {
          b.put(e, !0);
          try {
            w(e) ? (t = qr(e), n = n.concat(h(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : S(e) ? n.push(C.invoke(e)) : Jr(e) ? n.push(C.invoke(e)) : le(e, "module")
          } catch (t) {
            throw Jr(e) && (e = e[e.length - 1]), t.message && t.stack && t.stack.indexOf(t.message) == -1 && (t = t.message + "\n" + t.stack), Pi("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
          }
        }
      }), n
    }

    function p(e, n) {
      function r(t, r) {
        if (e.hasOwnProperty(t)) {
          if (e[t] === d) throw Pi("cdep", "Circular dependency found: {0}", t + " <- " + g.join(" <- "));
          return e[t]
        }
        try {
          return g.unshift(t), e[t] = d, e[t] = n(t, r)
        } catch (n) {
          throw e[t] === d && delete e[t], n
        } finally {
          g.shift()
        }
      }

      function i(e, n, i) {
        for (var o = [], a = rt.$$annotate(e, t, i), s = 0, u = a.length; s < u; s++) {
          var c = a[s];
          if ("string" != typeof c) throw Pi("itkn", "Incorrect injection token! Expected service name as string, got {0}", c);
          o.push(n && n.hasOwnProperty(c) ? n[c] : r(c, i))
        }
        return o
      }

      function o(e) {
        return !(_r <= 11) && ("function" == typeof e && /^(?:class\b|constructor\()/.test(Qe(e)))
      }

      function a(e, t, n, r) {
        "string" == typeof n && (r = n, n = null);
        var a = i(e, n, r);
        return Jr(e) && (e = e[e.length - 1]), o(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
      }

      function s(e, t, n) {
        var r = Jr(e) ? e[e.length - 1] : e,
          o = i(e, t, n);
        return o.unshift(null), new(Function.prototype.bind.apply(r, o))
      }
      return {
        invoke: a,
        instantiate: s,
        get: r,
        annotate: rt.$$annotate,
        has: function(t) {
          return x.hasOwnProperty(t + v) || e.hasOwnProperty(t)
        }
      }
    }
    t = t === !0;
    var d = {},
      v = "Provider",
      g = [],
      b = new Xe([], !0),
      x = {
        $provide: {
          provider: n(i),
          factory: n(s),
          service: n(u),
          value: n(c),
          constant: n(l),
          decorator: f
        }
      },
      C = x.$injector = p(x, function(e, t) {
        throw Gr.isString(t) && g.push(t), Pi("unpr", "Unknown provider: {0}", g.join(" <- "))
      }),
      E = {},
      A = p(E, function(e, t) {
        var n = C.get(e + v, t);
        return k.invoke(n.$get, n, void 0, e)
      }),
      k = A;
    x["$injector" + v] = {
      $get: $(A)
    };
    var O = h(e);
    return k = A.get("$injector"), k.strictDi = t, r(O, function(e) {
      e && k.invoke(e)
    }), k
  }

  function it() {
    var e = !0;
    this.disableAutoScrolling = function() {
      e = !1
    }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
      function i(e) {
        var t = null;
        return Array.prototype.some.call(e, function(e) {
          if ("a" === _(e)) return t = e, !0
        }), t
      }

      function o() {
        var e = s.yOffset;
        if (S(e)) e = e();
        else if (D(e)) {
          var n = e[0],
            r = t.getComputedStyle(n);
          e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
        } else x(e) || (e = 0);
        return e
      }

      function a(e) {
        if (e) {
          e.scrollIntoView();
          var n = o();
          if (n) {
            var r = e.getBoundingClientRect().top;
            t.scrollBy(0, r - n)
          }
        } else t.scrollTo(0, 0)
      }

      function s(e) {
        e = w(e) ? e : n.hash();
        var t;
        e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
      }
      var u = t.document;
      return e && r.$watch(function() {
        return n.hash()
      }, function(e, t) {
        e === t && "" === e || Be(function() {
          r.$evalAsync(s)
        })
      }), s
    }]
  }

  function ot(e, t) {
    return e || t ? e ? t ? (Jr(e) && (e = e.join(" ")), Jr(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
  }

  function at(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      if (n.nodeType === Ri) return n
    }
  }

  function st(e) {
    w(e) && (e = e.split(" "));
    var t = de();
    return r(e, function(e) {
      e.length && (t[e] = !0)
    }), t
  }

  function ut(e) {
    return y(e) ? e : {}
  }

  function ct(e, t, n, i) {
    function o(e) {
      try {
        e.apply(null, L(arguments, 1))
      } finally {
        if (g--, 0 === g)
          for (; y.length;) try {
            y.pop()()
          } catch (e) {
            n.error(e)
          }
      }
    }

    function a(e) {
      var t = e.indexOf("#");
      return t === -1 ? "" : e.substr(t)
    }

    function s() {
      S = null, u(), c()
    }

    function u() {
      b = E(), b = m(b) ? null : b, q(b, O) && (b = O), O = b
    }

    function c() {
      x === l.url() && w === b || (x = l.url(), w = b, r(A, function(e) {
        e(l.url(), b)
      }))
    }
    var l = this,
      f = e.location,
      h = e.history,
      d = e.setTimeout,
      $ = e.clearTimeout,
      v = {};
    l.isMock = !1;
    var g = 0,
      y = [];
    l.$$completeOutstandingRequest = o, l.$$incOutstandingRequestCount = function() {
      g++
    }, l.notifyWhenNoOutstandingRequests = function(e) {
      0 === g ? e() : y.push(e)
    };
    var b, w, x = f.href,
      C = t.find("base"),
      S = null,
      E = i.history ? function() {
        try {
          return h.state
        } catch (e) {}
      } : p;
    u(), w = b, l.url = function(t, n, r) {
      if (m(r) && (r = null), f !== e.location && (f = e.location), h !== e.history && (h = e.history), t) {
        var o = w === r;
        if (x === t && (!i.history || o)) return l;
        var s = x && Ht(x) === Ht(t);
        return x = t, w = r, !i.history || s && o ? (s || (S = t), n ? f.replace(t) : s ? f.hash = a(t) : f.href = t, f.href !== t && (S = t)) : (h[n ? "replaceState" : "pushState"](r, "", t), u(), w = b), S && (S = t), l
      }
      return S || f.href.replace(/%27/g, "'")
    }, l.state = function() {
      return b
    };
    var A = [],
      k = !1,
      O = null;
    l.onUrlChange = function(t) {
      return k || (i.history && Rr(e).on("popstate", s), Rr(e).on("hashchange", s), k = !0), A.push(t), t
    }, l.$$applicationDestroyed = function() {
      Rr(e).off("hashchange popstate", s)
    }, l.$$checkUrlChange = c, l.baseHref = function() {
      var e = C.attr("href");
      return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    }, l.defer = function(e, t) {
      var n;
      return g++, n = d(function() {
        delete v[n], o(e)
      }, t || 0), v[n] = !0, n
    }, l.defer.cancel = function(e) {
      return !!v[e] && (delete v[e], $(e), o(p), !0)
    }
  }

  function lt() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
      return new ct(e, r, t, n)
    }]
  }

  function ft() {
    this.$get = function() {
      function e(e, r) {
        function i(e) {
          e != h && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, h), h = e, h.n = null)
        }

        function o(e, t) {
          e != t && (e && (e.p = t), t && (t.n = e))
        }
        if (e in n) throw t("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
        var a = 0,
          s = c({}, r, {
            id: e
          }),
          u = de(),
          l = r && r.capacity || Number.MAX_VALUE,
          f = de(),
          h = null,
          p = null;
        return n[e] = {
          put: function(e, t) {
            if (!m(t)) {
              if (l < Number.MAX_VALUE) {
                var n = f[e] || (f[e] = {
                  key: e
                });
                i(n)
              }
              return e in u || a++, u[e] = t, a > l && this.remove(p.key), t
            }
          },
          get: function(e) {
            if (l < Number.MAX_VALUE) {
              var t = f[e];
              if (!t) return;
              i(t)
            }
            return u[e]
          },
          remove: function(e) {
            if (l < Number.MAX_VALUE) {
              var t = f[e];
              if (!t) return;
              t == h && (h = t.p), t == p && (p = t.n), o(t.n, t.p), delete f[e]
            }
            e in u && (delete u[e], a--)
          },
          removeAll: function() {
            u = de(), a = 0, f = de(), h = p = null
          },
          destroy: function() {
            u = null, s = null, f = null, delete n[e]
          },
          info: function() {
            return c({}, s, {
              size: a
            })
          }
        }
      }
      var n = {};
      return e.info = function() {
        var e = {};
        return r(n, function(t, n) {
          e[n] = t.info()
        }), e
      }, e.get = function(e) {
        return n[e]
      }, e
    }
  }

  function ht() {
    this.$get = ["$cacheFactory", function(e) {
      return e("templates")
    }]
  }

  function pt() {}

  function dt(t, n) {
    function i(e, t, n) {
      var i = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
        o = de();
      return r(e, function(e, r) {
        if (e in A) return void(o[r] = A[e]);
        var a = e.match(i);
        if (!a) throw Wi("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, r, e, n ? "controller bindings definition" : "isolate scope definition");
        o[r] = {
          mode: a[1][0],
          collection: "*" === a[2],
          optional: "?" === a[3],
          attrName: a[4] || r
        }, a[4] && (A[e] = o[r])
      }), o
    }

    function a(e, t) {
      var n = {
        isolateScope: null,
        bindToController: null
      };
      if (y(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), y(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), y(n.bindToController)) {
        var r = e.controller,
          o = e.controllerAs;
        if (!r) throw Wi("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
        if (!yt(r, o)) throw Wi("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
      }
      return n
    }

    function s(e) {
      var t = e.charAt(0);
      if (!t || t !== jr(t)) throw Wi("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
      if (e !== e.trim()) throw Wi("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
    }

    function u(e) {
      var t = e.require || e.controller && e.name;
      return !Jr(t) && y(t) && r(t, function(e, n) {
        var r = e.match(C),
          i = e.substring(r[0].length);
        i || (t[n] = r[0] + n)
      }), t
    }
    var l = {},
      f = "Directive",
      v = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
      b = /(([\w\-]+)(?:\:([^;]+))?;?)/,
      x = P("ngSrc,ngSrcset,src,srcset"),
      C = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
      E = /^(on[a-z]+|formaction)$/,
      A = de();
    this.directive = function e(n, i) {
      return fe(n, "directive"), w(n) ? (s(n), ce(i, "directiveFactory"), l.hasOwnProperty(n) || (l[n] = [], t.factory(n + f, ["$injector", "$exceptionHandler", function(e, t) {
        var i = [];
        return r(l[n], function(r, o) {
          try {
            var a = e.invoke(r);
            S(a) ? a = {
              compile: $(a)
            } : !a.compile && a.link && (a.compile = $(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = u(a), a.restrict = a.restrict || "EA", a.$$moduleName = r.$$moduleName, i.push(a)
          } catch (e) {
            t(e)
          }
        }), i
      }])), l[n].push(i)) : r(n, o(e)), this
    }, this.component = function(e, t) {
      function n(e) {
        function n(t) {
          return S(t) || Jr(t) ? function(n, r) {
            return e.invoke(t, this, {
              $element: n,
              $attrs: r
            })
          } : t
        }
        var o = t.template || t.templateUrl ? t.template : "",
          a = {
            controller: i,
            controllerAs: yt(t.controller) || t.controllerAs || "$ctrl",
            template: n(o),
            templateUrl: n(t.templateUrl),
            transclude: t.transclude,
            scope: {},
            bindToController: t.bindings || {},
            restrict: "E",
            require: t.require
          };
        return r(t, function(e, t) {
          "$" === t.charAt(0) && (a[t] = e)
        }), a
      }
      var i = t.controller || function() {};
      return r(t, function(e, t) {
        "$" === t.charAt(0) && (n[t] = e, S(i) && (i[t] = e))
      }), n.$inject = ["$injector"], this.directive(e, n)
    }, this.aHrefSanitizationWhitelist = function(e) {
      return g(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function(e) {
      return g(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
    };
    var O = !0;
    this.debugInfoEnabled = function(e) {
      return g(e) ? (O = e, this) : O
    };
    var M = 10;
    this.onChangesTtl = function(e) {
      return arguments.length ? (M = e, this) : M
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(t, n, i, o, s, u, $, A, T, V) {
      function j() {
        try {
          if (!--Ce) throw ye = void 0, Wi("infchng", "{0} $onChanges() iterations reached. Aborting!\n", M);
          $.$apply(function() {
            for (var e = [], t = 0, n = ye.length; t < n; ++t) try {
              ye[t]()
            } catch (t) {
              e.push(t)
            }
            if (ye = void 0, e.length) throw e
          })
        } finally {
          Ce++
        }
      }

      function I(e, t) {
        if (t) {
          var n, r, i, o = Object.keys(t);
          for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = t[i]
        } else this.$attr = {};
        this.$$element = e
      }

      function D(e, t, n) {
        we.innerHTML = "<span " + t + ">";
        var r = we.firstChild.attributes,
          i = r[0];
        r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
      }

      function P(e, t) {
        try {
          e.addClass(t)
        } catch (e) {}
      }

      function F(t, n, r, i, o) {
        t instanceof Rr || (t = Rr(t));
        for (var a = /\S+/, s = 0, u = t.length; s < u; s++) {
          var c = t[s];
          c.nodeType === si && c.nodeValue.match(a) && Oe(c, t[s] = e.document.createElement("span"))
        }
        var l = B(t, n, t, r, i, o);
        F.$$addScopeClass(t);
        var f = null;
        return function(e, n, r) {
          ce(e, "scope"), o && o.needsNewScope && (e = e.$parent.$new()), r = r || {};
          var i = r.parentBoundTranscludeFn,
            a = r.transcludeControllers,
            s = r.futureParentElement;
          i && i.$$boundTransclude && (i = i.$$boundTransclude), f || (f = U(s));
          var u;
          if (u = "html" !== f ? Rr(fe(f, Rr("<div>").append(t).html())) : n ? Ai.clone.call(t) : t, a)
            for (var c in a) u.data("$" + c + "Controller", a[c].instance);
          return F.$$addScopeInfo(u, e), n && n(u, e), l && l(e, u, u, i), u
        }
      }

      function U(e) {
        var t = e && e[0];
        return t && "foreignobject" !== _(t) && Br.call(t).match(/SVG/) ? "svg" : "html"
      }

      function B(e, t, n, r, i, o) {
        function a(e, n, r, i) {
          var o, a, s, u, c, l, f, h, $;
          if (p) {
            var v = n.length;
            for ($ = new Array(v), c = 0; c < d.length; c += 3) f = d[c], $[f] = n[f]
          } else $ = n;
          for (c = 0, l = d.length; c < l;) s = $[d[c++]], o = d[c++], a = d[c++], o ? (o.scope ? (u = e.$new(), F.$$addScopeInfo(Rr(s), u)) : u = e, h = o.transcludeOnThisElement ? z(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? z(e, t) : null, o(a, u, s, r, h)) : a && a(e, s.childNodes, void 0, i)
        }
        for (var s, u, c, l, f, h, p, d = [], $ = 0; $ < e.length; $++) s = new I, u = W(e[$], [], s, 0 === $ ? r : void 0, i), c = u.length ? X(u, e[$], s, t, n, null, [], [], o) : null, c && c.scope && F.$$addScopeClass(s.$$element), f = c && c.terminal || !(l = e[$].childNodes) || !l.length ? null : B(l, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), (c || f) && (d.push($, c, f), h = !0, p = p || c), o = null;
        return h ? a : null
      }

      function z(e, t, n) {
        function r(r, i, o, a, s) {
          return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
            parentBoundTranscludeFn: n,
            transcludeControllers: o,
            futureParentElement: a
          })
        }
        var i = r.$$slots = de();
        for (var o in t.$$slots) t.$$slots[o] ? i[o] = z(e, t.$$slots[o], n) : i[o] = null;
        return r
      }

      function W(e, t, n, r, i) {
        var o, a, s = e.nodeType,
          u = n.$attr;
        switch (s) {
          case oi:
            ne(t, vt(_(e)), "E", r, i);
            for (var c, l, f, h, p, d, $ = e.attributes, v = 0, m = $ && $.length; v < m; v++) {
              var g = !1,
                x = !1;
              c = $[v], l = c.name, p = Kr(c.value), h = vt(l), (d = ke.test(h)) && (l = l.replace(Zi, "").substr(8).replace(/_(.)/g, function(e, t) {
                return t.toUpperCase()
              }));
              var C = h.match(Me);
              C && re(C[1]) && (g = l, x = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), f = vt(l.toLowerCase()), u[f] = l, !d && n.hasOwnProperty(f) || (n[f] = p, ze(e, f) && (n[f] = !0)), pe(e, t, p, f, d), ne(t, f, "A", r, i, g, x)
            }
            if (a = e.className, y(a) && (a = a.animVal), w(a) && "" !== a)
              for (; o = b.exec(a);) f = vt(o[2]), ne(t, f, "C", r, i) && (n[f] = Kr(o[3])), a = a.substr(o.index + o[0].length);
            break;
          case si:
            if (11 === _r)
              for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === si;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
            le(t, e.nodeValue);
            break;
          case ui:
            G(e, t, n, r, i)
        }
        return t.sort(ae), t
      }

      function G(e, t, n, r, i) {
        try {
          var o = v.exec(e.nodeValue);
          if (o) {
            var a = vt(o[1]);
            ne(t, a, "M", r, i) && (n[a] = Kr(o[2]))
          }
        } catch (e) {}
      }

      function Z(e, t, n) {
        var r = [],
          i = 0;
        if (t && e.hasAttribute && e.hasAttribute(t)) {
          do {
            if (!e) throw Wi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
            e.nodeType == oi && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
          } while (i > 0)
        } else r.push(e);
        return Rr(r)
      }

      function J(e, t, n) {
        return function(r, i, o, a, s) {
          return i = Z(i[0], t, n), e(r, i, o, a, s)
        }
      }

      function K(e, t, n, r, i, o) {
        var a;
        return e ? F(t, n, r, i, o) : function() {
          return a || (a = F(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
        }
      }

      function X(e, t, n, o, a, s, u, l, f) {
        function h(e, t, n, r) {
          e && (n && (e = J(e, n, r)), e.require = d.require, e.directiveName = $, (E === d || d.$$isolateScope) && (e = ve(e, {
            isolateScope: !0
          })), u.push(e)), t && (n && (t = J(t, n, r)), t.require = d.require, t.directiveName = $, (E === d || d.$$isolateScope) && (t = ve(t, {
            isolateScope: !0
          })), l.push(t))
        }

        function p(e, o, a, s, f) {
          function h(e, t, n, r) {
            var i;
            if (k(e) || (r = n, n = t, t = e, e = void 0), N && (i = b), n || (n = N ? O.parent() : O), !r) return f(e, t, i, n, R);
            var o = f.$$slots[r];
            if (o) return o(e, t, i, n, R);
            if (m(o)) throw Wi("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, Y(O))
          }
          var p, d, $, v, g, b, w, O, M, T;
          t === a ? (M = n, O = n.$$element) : (O = Rr(a), M = new I(O, n)), g = o, E ? v = o.$new(!0) : x && (g = o.$parent), f && (w = h, w.$$boundTransclude = f, w.isSlotFilled = function(e) {
            return !!f.$$slots[e]
          }), C && (b = ee(O, M, w, C, v, o, E)), E && (F.$$addScopeInfo(O, v, !0, !(A && (A === E || A === E.$$originalDirective))), F.$$addScopeClass(O, !0), v.$$isolateBindings = E.$$isolateBindings, T = ge(o, M, v, v.$$isolateBindings, E), T.removeWatches && v.$on("$destroy", T.removeWatches));
          for (var V in b) {
            var j = C[V],
              D = b[V],
              P = j.$$bindings.bindToController;
            D.identifier && P ? D.bindingInfo = ge(g, M, D.instance, P, j) : D.bindingInfo = {};
            var _ = D();
            _ !== D.instance && (D.instance = _, O.data("$" + j.name + "Controller", _), D.bindingInfo.removeWatches && D.bindingInfo.removeWatches(), D.bindingInfo = ge(g, M, D.instance, P, j))
          }
          for (r(C, function(e, t) {
              var n = e.require;
              e.bindToController && !Jr(n) && y(n) && c(b[t].instance, Q(t, n, O, b))
            }), r(b, function(e) {
              var t = e.instance;
              if (S(t.$onChanges)) try {
                t.$onChanges(e.bindingInfo.initialChanges)
              } catch (e) {
                i(e)
              }
              if (S(t.$onInit)) try {
                t.$onInit()
              } catch (e) {
                i(e)
              }
              S(t.$doCheck) && (g.$watch(function() {
                t.$doCheck()
              }), t.$doCheck()), S(t.$onDestroy) && g.$on("$destroy", function() {
                t.$onDestroy()
              })
            }), p = 0, d = u.length; p < d; p++) $ = u[p], me($, $.isolateScope ? v : o, O, M, $.require && Q($.directiveName, $.require, O, b), w);
          var R = o;
          for (E && (E.template || null === E.templateUrl) && (R = v), e && e(R, a.childNodes, void 0, f), p = l.length - 1; p >= 0; p--) $ = l[p], me($, $.isolateScope ? v : o, O, M, $.require && Q($.directiveName, $.require, O, b), w);
          r(b, function(e) {
            var t = e.instance;
            S(t.$postLink) && t.$postLink()
          })
        }
        f = f || {};
        for (var d, $, v, g, b, w = -Number.MAX_VALUE, x = f.newScopeDirective, C = f.controllerDirectives, E = f.newIsolateScopeDirective, A = f.templateDirective, O = f.nonTlbTranscludeDirective, M = !1, T = !1, N = f.hasElementTranscludeDirective, V = n.$$element = Rr(t), j = s, D = o, P = !1, R = !1, q = 0, U = e.length; q < U; q++) {
          d = e[q];
          var B = d.$$start,
            z = d.$$end;
          if (B && (V = Z(t, B, z)), v = void 0, w > d.priority) break;
          if ((b = d.scope) && (d.templateUrl || (y(b) ? (ue("new/isolated scope", E || x, d, V), E = d) : ue("new/isolated scope", E, d, V)), x = x || d), $ = d.name, !P && (d.replace && (d.templateUrl || d.template) || d.transclude && !d.$$tlb)) {
            for (var G, X = q + 1; G = e[X++];)
              if (G.transclude && !G.$$tlb || G.replace && (G.templateUrl || G.template)) {
                R = !0;
                break
              }
            P = !0
          }
          if (!d.templateUrl && d.controller && (b = d.controller, C = C || de(), ue("'" + $ + "' controller", C[$], d, V), C[$] = d), b = d.transclude)
            if (M = !0, d.$$tlb || (ue("transclusion", O, d, V), O = d), "element" == b) N = !0, w = d.priority, v = V, V = n.$$element = Rr(F.$$createComment($, n[$])), t = V[0], $e(a, L(v), t), v[0].$$parentNode = v[0].parentNode, D = K(R, v, o, w, j && j.name, {
              nonTlbTranscludeDirective: O
            });
            else {
              var ne = de();
              if (v = Rr(Te(t)).contents(), y(b)) {
                v = [];
                var re = de(),
                  ae = de();
                r(b, function(e, t) {
                  var n = "?" === e.charAt(0);
                  e = n ? e.substring(1) : e, re[e] = t, ne[t] = null, ae[t] = n
                }), r(V.contents(), function(e) {
                  var t = re[vt(_(e))];
                  t ? (ae[t] = !0, ne[t] = ne[t] || [], ne[t].push(e)) : v.push(e)
                }), r(ae, function(e, t) {
                  if (!e) throw Wi("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                });
                for (var se in ne) ne[se] && (ne[se] = K(R, ne[se], o))
              }
              V.empty(), D = K(R, v, o, void 0, void 0, {
                needsNewScope: d.$$isolateScope || d.$$newScope
              }), D.$$slots = ne
            }
          if (d.template)
            if (T = !0, ue("template", A, d, V), A = d, b = S(d.template) ? d.template(V, n) : d.template, b = Ae(b), d.replace) {
              if (j = d, v = xe(b) ? [] : gt(fe(d.templateNamespace, Kr(b))), t = v[0], 1 != v.length || t.nodeType !== oi) throw Wi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $, "");
              $e(a, V, t);
              var ce = {
                  $attr: {}
                },
                le = W(t, [], ce),
                he = e.splice(q + 1, e.length - (q + 1));
              (E || x) && te(le, E, x), e = e.concat(le).concat(he), ie(n, ce), U = e.length
            } else V.html(b);
          if (d.templateUrl) T = !0, ue("template", A, d, V), A = d, d.replace && (j = d), p = oe(e.splice(q, e.length - q), V, n, a, M && D, u, l, {
            controllerDirectives: C,
            newScopeDirective: x !== d && x,
            newIsolateScopeDirective: E,
            templateDirective: A,
            nonTlbTranscludeDirective: O
          }), U = e.length;
          else if (d.compile) try {
            g = d.compile(V, n, D);
            var pe = d.$$originalDirective || d;
            S(g) ? h(null, H(pe, g), B, z) : g && h(H(pe, g.pre), H(pe, g.post), B, z)
          } catch (e) {
            i(e, Y(V))
          }
          d.terminal && (p.terminal = !0, w = Math.max(w, d.priority))
        }
        return p.scope = x && x.scope === !0, p.transcludeOnThisElement = M, p.templateOnThisElement = T, p.transclude = D, f.hasElementTranscludeDirective = N, p
      }

      function Q(e, t, n, i) {
        var o;
        if (w(t)) {
          var a = t.match(C),
            s = t.substring(a[0].length),
            u = a[1] || a[3],
            c = "?" === a[2];
          if ("^^" === u ? n = n.parent() : (o = i && i[s], o = o && o.instance), !o) {
            var l = "$" + s + "Controller";
            o = u ? n.inheritedData(l) : n.data(l)
          }
          if (!o && !c) throw Wi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, e)
        } else if (Jr(t)) {
          o = [];
          for (var f = 0, h = t.length; f < h; f++) o[f] = Q(e, t[f], n, i)
        } else y(t) && (o = {}, r(t, function(t, r) {
          o[r] = Q(e, t, n, i)
        }));
        return o || null
      }

      function ee(e, t, n, r, i, o, a) {
        var s = de();
        for (var c in r) {
          var l = r[c],
            f = {
              $scope: l === a || l.$$isolateScope ? i : o,
              $element: e,
              $attrs: t,
              $transclude: n
            },
            h = l.controller;
          "@" == h && (h = t[l.name]);
          var p = u(h, f, !0, l.controllerAs);
          s[l.name] = p, e.data("$" + l.name + "Controller", p.instance)
        }
        return s
      }

      function te(e, t, n) {
        for (var r = 0, i = e.length; r < i; r++) e[r] = h(e[r], {
          $$isolateScope: t,
          $$newScope: n
        })
      }

      function ne(e, n, r, o, s, u, c) {
        if (n === s) return null;
        var p = null;
        if (l.hasOwnProperty(n))
          for (var d, $ = t.get(n + f), v = 0, g = $.length; v < g; v++) try {
            if (d = $[v], (m(o) || o > d.priority) && d.restrict.indexOf(r) != -1) {
              if (u && (d = h(d, {
                  $$start: u,
                  $$end: c
                })), !d.$$bindings) {
                var b = d.$$bindings = a(d, d.name);
                y(b.isolateScope) && (d.$$isolateBindings = b.isolateScope)
              }
              e.push(d), p = d
            }
          } catch (e) {
            i(e)
          }
        return p
      }

      function re(e) {
        if (l.hasOwnProperty(e))
          for (var n, r = t.get(e + f), i = 0, o = r.length; i < o; i++)
            if (n = r[i], n.multiElement) return !0;
        return !1
      }

      function ie(e, t) {
        var n = t.$attr,
          i = e.$attr;
        e.$$element;
        r(e, function(r, i) {
          "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
        }), r(t, function(t, r) {
          e.hasOwnProperty(r) || "$" === r.charAt(0) || (e[r] = t, "class" !== r && "style" !== r && (i[r] = n[r]))
        })
      }

      function oe(e, t, n, i, a, s, u, c) {
        var l, f, p = [],
          d = t[0],
          $ = e.shift(),
          v = h($, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: $
          }),
          m = S($.templateUrl) ? $.templateUrl(t, n) : $.templateUrl,
          g = $.templateNamespace;
        return t.empty(), o(m).then(function(o) {
            var h, b, w, x;
            if (o = Ae(o), $.replace) {
              if (w = xe(o) ? [] : gt(fe(g, Kr(o))), h = w[0], 1 != w.length || h.nodeType !== oi) throw Wi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", $.name, m);
              b = {
                $attr: {}
              }, $e(i, t, h);
              var C = W(h, [], b);
              y($.scope) && te(C, !0), e = C.concat(e), ie(n, b)
            } else h = d, t.html(o);
            for (e.unshift(v), l = X(e, h, n, a, t, $, s, u, c), r(i, function(e, n) {
                e == h && (i[n] = t[0])
              }), f = B(t[0].childNodes, a); p.length;) {
              var S = p.shift(),
                E = p.shift(),
                A = p.shift(),
                k = p.shift(),
                O = t[0];
              if (!S.$$destroyed) {
                if (E !== d) {
                  var M = E.className;
                  c.hasElementTranscludeDirective && $.replace || (O = Te(h)), $e(A, Rr(E), O), P(Rr(O), M)
                }
                x = l.transcludeOnThisElement ? z(S, l.transclude, k) : k, l(f, S, O, i, x)
              }
            }
            p = null
          }),
          function(e, t, n, r, i) {
            var o = i;
            t.$$destroyed || (p ? p.push(t, n, r, o) : (l.transcludeOnThisElement && (o = z(t, l.transclude, i)), l(f, t, n, r, o)))
          }
      }

      function ae(e, t) {
        var n = t.priority - e.priority;
        return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
      }

      function ue(e, t, n, r) {
        function i(e) {
          return e ? " (module: " + e + ")" : ""
        }
        if (t) throw Wi("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, Y(r))
      }

      function le(e, t) {
        var r = n(t, !0);
        r && e.push({
          priority: 0,
          compile: function(e) {
            var t = e.parent(),
              n = !!t.length;
            return n && F.$$addBindingClass(t),
              function(e, t) {
                var i = t.parent();
                n || F.$$addBindingClass(i), F.$$addBindingInfo(i, r.expressions), e.$watch(r, function(e) {
                  t[0].nodeValue = e
                })
              }
          }
        })
      }

      function fe(t, n) {
        switch (t = jr(t || "html")) {
          case "svg":
          case "math":
            var r = e.document.createElement("div");
            return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
          default:
            return n
        }
      }

      function he(e, t) {
        if ("srcdoc" == t) return A.HTML;
        var n = _(e);
        return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? A.RESOURCE_URL : void 0
      }

      function pe(e, t, r, i, o) {
        var a = he(e, i);
        o = x[i] || o;
        var s = n(r, !0, a, o);
        if (s) {
          if ("multiple" === i && "select" === _(e)) throw Wi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Y(e));
          t.push({
            priority: 100,
            compile: function() {
              return {
                pre: function(e, t, u) {
                  var c = u.$$observers || (u.$$observers = de());
                  if (E.test(i)) throw Wi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                  var l = u[i];
                  l !== r && (s = l && n(l, !0, a, o), r = l), s && (u[i] = s(e), (c[i] || (c[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || e).$watch(s, function(e, t) {
                    "class" === i && e != t ? u.$updateClass(e, t) : u.$set(i, e)
                  }))
                }
              }
            }
          })
        }
      }

      function $e(t, n, r) {
        var i, o, a = n[0],
          s = n.length,
          u = a.parentNode;
        if (t)
          for (i = 0, o = t.length; i < o; i++)
            if (t[i] == a) {
              t[i++] = r;
              for (var c = i, l = c + s - 1, f = t.length; c < f; c++, l++) l < f ? t[c] = t[l] : delete t[c];
              t.length -= s - 1, t.context === a && (t.context = r);
              break
            }
        u && u.replaceChild(r, a);
        var h = e.document.createDocumentFragment();
        for (i = 0; i < s; i++) h.appendChild(n[i]);
        for (Rr.hasData(a) && (Rr.data(r, Rr.data(a)), Rr(a).off("$destroy")), Rr.cleanData(h.querySelectorAll("*")), i = 1; i < s; i++) delete n[i];
        n[0] = r, n.length = 1
      }

      function ve(e, t) {
        return c(function() {
          return e.apply(null, arguments)
        }, e, t)
      }

      function me(e, t, n, r, o, a) {
        try {
          e(t, n, r, o, a)
        } catch (e) {
          i(e, Y(n))
        }
      }

      function ge(e, t, i, o, a) {
        function u(t, n, r) {
          S(i.$onChanges) && n !== r && (ye || (e.$$postDigest(j), ye = []), l || (l = {}, ye.push(c)), l[t] && (r = l[t].previousValue), l[t] = new $t(r, n))
        }

        function c() {
          i.$onChanges(l), l = void 0
        }
        var l, f = [],
          h = {};
        return r(o, function(r, o) {
          var c, l, d, $, v, m = r.attrName,
            g = r.optional,
            y = r.mode;
          switch (y) {
            case "@":
              g || Vr.call(t, m) || (i[o] = t[m] = void 0), t.$observe(m, function(e) {
                if (w(e) || N(e)) {
                  var t = i[o];
                  u(o, e, t), i[o] = e
                }
              }), t.$$observers[m].$$scope = e, c = t[m], w(c) ? i[o] = n(c)(e) : N(c) && (i[o] = c), h[o] = new $t(Gi, i[o]);
              break;
            case "=":
              if (!Vr.call(t, m)) {
                if (g) break;
                t[m] = void 0
              }
              if (g && !t[m]) break;
              l = s(t[m]), $ = l.literal ? q : function(e, t) {
                return e === t || e !== e && t !== t
              }, d = l.assign || function() {
                throw c = i[o] = l(e), Wi("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[m], m, a.name)
              }, c = i[o] = l(e);
              var b = function(t) {
                return $(t, i[o]) || ($(t, c) ? d(e, t = i[o]) : i[o] = t), c = t
              };
              b.$stateful = !0, v = r.collection ? e.$watchCollection(t[m], b) : e.$watch(s(t[m], b), null, l.literal), f.push(v);
              break;
            case "<":
              if (!Vr.call(t, m)) {
                if (g) break;
                t[m] = void 0
              }
              if (g && !t[m]) break;
              l = s(t[m]);
              var x = i[o] = l(e);
              h[o] = new $t(Gi, i[o]), v = e.$watch(l, function(e, t) {
                if (t === e) {
                  if (t === x) return;
                  t = x
                }
                u(o, e, t), i[o] = e
              }, l.literal), f.push(v);
              break;
            case "&":
              if (l = t.hasOwnProperty(m) ? s(t[m]) : p, l === p && g) break;
              i[o] = function(t) {
                return l(e, t)
              }
          }
        }), {
          initialChanges: h,
          removeWatches: f.length && function() {
            for (var e = 0, t = f.length; e < t; ++e) f[e]()
          }
        }
      }
      var ye, be = /^\w/,
        we = e.document.createElement("div"),
        Ce = M;
      I.prototype = {
        $normalize: vt,
        $addClass: function(e) {
          e && e.length > 0 && T.addClass(this.$$element, e)
        },
        $removeClass: function(e) {
          e && e.length > 0 && T.removeClass(this.$$element, e)
        },
        $updateClass: function(e, t) {
          var n = mt(e, t);
          n && n.length && T.addClass(this.$$element, n);
          var r = mt(t, e);
          r && r.length && T.removeClass(this.$$element, r)
        },
        $set: function(e, t, n, o) {
          var a, s = this.$$element[0],
            u = ze(s, e),
            c = We(e),
            l = e;
          if (u ? (this.$$element.prop(e, t), o = u) : c && (this[c] = t, l = c), this[e] = t, o ? this.$attr[e] = o : (o = this.$attr[e], o || (this.$attr[e] = o = se(e, "-"))), a = _(this.$$element), "a" === a && ("href" === e || "xlinkHref" === e) || "img" === a && "src" === e) this[e] = t = V(t, "src" === e);
          else if ("img" === a && "srcset" === e && g(t)) {
            for (var f = "", h = Kr(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test(h) ? p : /(,)/, $ = h.split(d), v = Math.floor($.length / 2), y = 0; y < v; y++) {
              var b = 2 * y;
              f += V(Kr($[b]), !0), f += " " + Kr($[b + 1])
            }
            var w = Kr($[2 * y]).split(/\s/);
            f += V(Kr(w[0]), !0), 2 === w.length && (f += " " + Kr(w[1])), this[e] = t = f
          }
          n !== !1 && (null === t || m(t) ? this.$$element.removeAttr(o) : be.test(o) ? this.$$element.attr(o, t) : D(this.$$element[0], o, t));
          var x = this.$$observers;
          x && r(x[l], function(e) {
            try {
              e(t)
            } catch (e) {
              i(e)
            }
          })
        },
        $observe: function(e, t) {
          var n = this,
            r = n.$$observers || (n.$$observers = de()),
            i = r[e] || (r[e] = []);
          return i.push(t), $.$evalAsync(function() {
              i.$$inter || !n.hasOwnProperty(e) || m(n[e]) || t(n[e])
            }),
            function() {
              R(i, t)
            }
        }
      };
      var Se = n.startSymbol(),
        Ee = n.endSymbol(),
        Ae = "{{" == Se && "}}" == Ee ? d : function(e) {
          return e.replace(/\{\{/g, Se).replace(/}}/g, Ee)
        },
        ke = /^ngAttr[A-Z]/,
        Me = /^(.+)Start$/;
      return F.$$addBindingInfo = O ? function(e, t) {
        var n = e.data("$binding") || [];
        Jr(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
      } : p, F.$$addBindingClass = O ? function(e) {
        P(e, "ng-binding")
      } : p, F.$$addScopeInfo = O ? function(e, t, n, r) {
        var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
        e.data(i, t)
      } : p, F.$$addScopeClass = O ? function(e, t) {
        P(e, t ? "ng-isolate-scope" : "ng-scope")
      } : p, F.$$createComment = function(t, n) {
        var r = "";
        return O && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
      }, F
    }]
  }

  function $t(e, t) {
    this.previousValue = e, this.currentValue = t
  }

  function vt(e) {
    return we(e.replace(Zi, ""))
  }

  function mt(e, t) {
    var n = "",
      r = e.split(/\s+/),
      i = t.split(/\s+/);
    e: for (var o = 0; o < r.length; o++) {
      for (var a = r[o], s = 0; s < i.length; s++)
        if (a == i[s]) continue e;
      n += (n.length > 0 ? " " : "") + a
    }
    return n
  }

  function gt(e) {
    e = Rr(e);
    var t = e.length;
    if (t <= 1) return e;
    for (; t--;) {
      var n = e[t];
      n.nodeType === ui && Lr.call(e, t, 1)
    }
    return e
  }

  function yt(e, t) {
    if (t && w(t)) return t;
    if (w(e)) {
      var n = Yi.exec(e);
      if (n) return n[3]
    }
  }

  function bt() {
    var e = {},
      n = !1;
    this.has = function(t) {
      return e.hasOwnProperty(t)
    }, this.register = function(t, n) {
      fe(t, "controller"), y(t) ? c(e, t) : e[t] = n
    }, this.allowGlobals = function() {
      n = !0
    }, this.$get = ["$injector", "$window", function(r, i) {
      function o(e, n, r, i) {
        if (!e || !y(e.$scope)) throw t("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, n);
        e.$scope[n] = r
      }
      return function(t, a, s, u) {
        var l, f, h, p;
        if (s = s === !0, u && w(u) && (p = u), w(t)) {
          if (f = t.match(Yi), !f) throw Ji("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", t);
          h = f[1], p = p || f[3], t = e.hasOwnProperty(h) ? e[h] : he(a.$scope, h, !0) || (n ? he(i, h, !0) : void 0), le(t, h, !0)
        }
        if (s) {
          var d = (Jr(t) ? t[t.length - 1] : t).prototype;
          l = Object.create(d || null), p && o(a, p, l, h || t.name);
          var $;
          return $ = c(function() {
            var e = r.invoke(t, l, a, h);
            return e !== l && (y(e) || S(e)) && (l = e, p && o(a, p, l, h || t.name)), l
          }, {
            instance: l,
            identifier: p
          })
        }
        return l = r.instantiate(t, a, h), p && o(a, p, l, h || t.name), l
      }
    }]
  }

  function wt() {
    this.$get = ["$window", function(e) {
      return Rr(e.document)
    }]
  }

  function xt() {
    this.$get = ["$log", function(e) {
      return function(t, n) {
        e.error.apply(e, arguments)
      }
    }]
  }

  function Ct(e) {
    return y(e) ? C(e) ? e.toISOString() : z(e) : e
  }

  function St() {
    this.$get = function() {
      return function(e) {
        if (!e) return "";
        var t = [];
        return i(e, function(e, n) {
          null === e || m(e) || (Jr(e) ? r(e, function(e) {
            t.push(te(n) + "=" + te(Ct(e)))
          }) : t.push(te(n) + "=" + te(Ct(e))))
        }), t.join("&")
      }
    }
  }

  function Et() {
    this.$get = function() {
      return function(e) {
        function t(e, o, a) {
          null === e || m(e) || (Jr(e) ? r(e, function(e, n) {
            t(e, o + "[" + (y(e) ? n : "") + "]")
          }) : y(e) && !C(e) ? i(e, function(e, n) {
            t(e, o + (a ? "" : "[") + n + (a ? "" : "]"))
          }) : n.push(te(o) + "=" + te(Ct(e))))
        }
        if (!e) return "";
        var n = [];
        return t(e, "", !0), n.join("&")
      }
    }
  }

  function At(e, t) {
    if (w(e)) {
      var n = e.replace(no, "").trim();
      if (n) {
        var r = t("Content-Type");
        (r && 0 === r.indexOf(Xi) || kt(n)) && (e = W(n))
      }
    }
    return e
  }

  function kt(e) {
    var t = e.match(eo);
    return t && to[t[0]].test(e)
  }

  function Ot(e) {
    function t(e, t) {
      e && (i[e] = i[e] ? i[e] + ", " + t : t)
    }
    var n, i = de();
    return w(e) ? r(e.split("\n"), function(e) {
      n = e.indexOf(":"), t(jr(Kr(e.substr(0, n))), Kr(e.substr(n + 1)))
    }) : y(e) && r(e, function(e, n) {
      t(jr(n), Kr(e))
    }), i
  }

  function Mt(e) {
    var t;
    return function(n) {
      if (t || (t = Ot(e)), n) {
        var r = t[jr(n)];
        return void 0 === r && (r = null), r
      }
      return t
    }
  }

  function Tt(e, t, n, i) {
    return S(i) ? i(e, t, n) : (r(i, function(r) {
      e = r(e, t, n)
    }), e)
  }

  function Nt(e) {
    return 200 <= e && e < 300
  }

  function Vt() {
    var e = this.defaults = {
        transformResponse: [At],
        transformRequest: [function(e) {
          return !y(e) || O(e) || T(e) || M(e) ? e : z(e)
        }],
        headers: {
          common: {
            Accept: "application/json, text/plain, */*"
          },
          post: ve(Qi),
          put: ve(Qi),
          patch: ve(Qi)
        },
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        paramSerializer: "$httpParamSerializer"
      },
      n = !1;
    this.useApplyAsync = function(e) {
      return g(e) ? (n = !!e, this) : n
    };
    var i = !0;
    this.useLegacyPromiseExtensions = function(e) {
      return g(e) ? (i = !!e, this) : i
    };
    var o = this.interceptors = [];
    this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, s, u, l, f, h) {
      function p(n) {
        function o(e, t) {
          for (var n = 0, r = t.length; n < r;) {
            var i = t[n++],
              o = t[n++];
            e = e.then(i, o)
          }
          return t.length = 0, e
        }

        function a(e, t) {
          var n, i = {};
          return r(e, function(e, r) {
            S(e) ? (n = e(t), null != n && (i[r] = n)) : i[r] = e
          }), i
        }

        function s(t) {
          var n, r, i, o = e.headers,
            s = c({}, t.headers);
          o = c({}, o.common, o[jr(t.method)]);
          e: for (n in o) {
            r = jr(n);
            for (i in s)
              if (jr(i) === r) continue e;
            s[n] = o[n]
          }
          return a(s, ve(t))
        }

        function u(t) {
          var n = t.headers,
            i = Tt(t.data, Mt(n), void 0, t.transformRequest);
          return m(i) && r(n, function(e, t) {
            "content-type" === jr(t) && delete n[t]
          }), m(t.withCredentials) && !m(e.withCredentials) && (t.withCredentials = e.withCredentials), v(t, i).then(l, l)
        }

        function l(e) {
          var t = c({}, e);
          return t.data = Tt(e.data, e.headers, e.status, p.transformResponse), Nt(e.status) ? t : f.reject(t)
        }
        if (!y(n)) throw t("$http")("badreq", "Http request configuration must be an object.  Received: {0}", n);
        if (!w(n.url)) throw t("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", n.url);
        var p = c({
          method: "get",
          transformRequest: e.transformRequest,
          transformResponse: e.transformResponse,
          paramSerializer: e.paramSerializer
        }, n);
        p.headers = s(n), p.method = Ir(p.method), p.paramSerializer = w(p.paramSerializer) ? h.get(p.paramSerializer) : p.paramSerializer;
        var d = [],
          $ = [],
          g = f.when(p);
        return r(C, function(e) {
          (e.request || e.requestError) && d.unshift(e.request, e.requestError), (e.response || e.responseError) && $.push(e.response, e.responseError)
        }), g = o(g, d), g = g.then(u), g = o(g, $), i ? (g.success = function(e) {
          return le(e, "fn"), g.then(function(t) {
            e(t.data, t.status, t.headers, p)
          }), g
        }, g.error = function(e) {
          return le(e, "fn"), g.then(null, function(t) {
            e(t.data, t.status, t.headers, p)
          }), g
        }) : (g.success = io("success"), g.error = io("error")), g
      }

      function d(e) {
        r(arguments, function(e) {
          p[e] = function(t, n) {
            return p(c({}, n || {}, {
              method: e,
              url: t
            }))
          }
        })
      }

      function $(e) {
        r(arguments, function(e) {
          p[e] = function(t, n, r) {
            return p(c({}, r || {}, {
              method: e,
              url: t,
              data: n
            }))
          }
        })
      }

      function v(t, i) {
        function o(e) {
          if (e) {
            var t = {};
            return r(e, function(e, r) {
              t[r] = function(t) {
                function r() {
                  e(t)
                }
                n ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
              }
            }), t
          }
        }

        function u(e, t, r, i) {
          function o() {
            c(t, e, r, i)
          }
          $ && (Nt(e) ? $.put(E, [e, t, Ot(r), i]) : $.remove(E)), n ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply())
        }

        function c(e, n, r, i) {
          n = n >= -1 ? n : 0, (Nt(n) ? w.resolve : w.reject)({
            data: e,
            status: n,
            headers: Mt(r),
            config: t,
            statusText: i
          })
        }

        function h(e) {
          c(e.data, e.status, ve(e.headers()), e.statusText)
        }

        function d() {
          var e = p.pendingRequests.indexOf(t);
          e !== -1 && p.pendingRequests.splice(e, 1)
        }
        var $, v, w = f.defer(),
          C = w.promise,
          S = t.headers,
          E = b(t.url, t.paramSerializer(t.params));
        if (p.pendingRequests.push(t), C.then(d, d), !t.cache && !e.cache || t.cache === !1 || "GET" !== t.method && "JSONP" !== t.method || ($ = y(t.cache) ? t.cache : y(e.cache) ? e.cache : x), $ && (v = $.get(E), g(v) ? V(v) ? v.then(h, h) : Jr(v) ? c(v[1], v[0], ve(v[2]), v[3]) : c(v, 200, {}, "OK") : $.put(E, C)), m(v)) {
          var A = Dn(t.url) ? s()[t.xsrfCookieName || e.xsrfCookieName] : void 0;
          A && (S[t.xsrfHeaderName || e.xsrfHeaderName] = A), a(t.method, E, i, u, S, t.timeout, t.withCredentials, t.responseType, o(t.eventHandlers), o(t.uploadEventHandlers))
        }
        return C
      }

      function b(e, t) {
        return t.length > 0 && (e += (e.indexOf("?") == -1 ? "?" : "&") + t), e
      }
      var x = u("$http");
      e.paramSerializer = w(e.paramSerializer) ? h.get(e.paramSerializer) : e.paramSerializer;
      var C = [];
      return r(o, function(e) {
        C.unshift(w(e) ? h.get(e) : h.invoke(e))
      }), p.pendingRequests = [], d("get", "delete", "head", "jsonp"), $("post", "put", "patch"), p.defaults = e, p
    }]
  }

  function jt() {
    this.$get = function() {
      return function() {
        return new e.XMLHttpRequest
      }
    }
  }

  function It() {
    this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
      return Dt(e, r, e.defer, t, n[0])
    }]
  }

  function Dt(e, t, n, i, o) {
    function a(e, t, n) {
      e = e.replace("JSON_CALLBACK", t);
      var r = o.createElement("script"),
        a = null;
      return r.type = "text/javascript", r.src = e, r.async = !0, a = function(e) {
        $i(r, "load", a), $i(r, "error", a), o.body.removeChild(r), r = null;
        var s = -1,
          u = "unknown";
        e && ("load" !== e.type || i.wasCalled(t) || (e = {
          type: "error"
        }), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
      }, di(r, "load", a), di(r, "error", a), o.body.appendChild(r), a
    }
    return function(o, s, u, c, l, f, h, d, $, v) {
      function y() {
        x && x(), C && C.abort()
      }

      function b(t, r, i, o, a) {
        g(E) && n.cancel(E), x = C = null, t(r, i, o, a), e.$$completeOutstandingRequest(p)
      }
      if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" === jr(o)) var w = i.createCallback(s),
        x = a(s, w, function(e, t) {
          var n = 200 === e && i.getResponse(w);
          b(c, e, n, "", t), i.removeCallback(w)
        });
      else {
        var C = t(o, s);
        C.open(o, s, !0), r(l, function(e, t) {
          g(e) && C.setRequestHeader(t, e)
        }), C.onload = function() {
          var e = C.statusText || "",
            t = "response" in C ? C.response : C.responseText,
            n = 1223 === C.status ? 204 : C.status;
          0 === n && (n = t ? 200 : "file" == In(s).protocol ? 404 : 0), b(c, n, t, C.getAllResponseHeaders(), e)
        };
        var S = function() {
          b(c, -1, null, null, "")
        };
        if (C.onerror = S, C.onabort = S, r($, function(e, t) {
            C.addEventListener(t, e)
          }), r(v, function(e, t) {
            C.upload.addEventListener(t, e)
          }), h && (C.withCredentials = !0), d) try {
          C.responseType = d
        } catch (e) {
          if ("json" !== d) throw e
        }
        C.send(m(u) ? null : u)
      }
      if (f > 0) var E = n(y, f);
      else V(f) && f.then(y)
    }
  }

  function Pt() {
    var e = "{{",
      t = "}}";
    this.startSymbol = function(t) {
      return t ? (e = t, this) : e
    }, this.endSymbol = function(e) {
      return e ? (t = e, this) : t
    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
      function o(e) {
        return "\\\\\\" + e
      }

      function a(n) {
        return n.replace(p, e).replace(d, t)
      }

      function s(e) {
        if (null == e) return "";
        switch (typeof e) {
          case "string":
            break;
          case "number":
            e = "" + e;
            break;
          default:
            e = z(e)
        }
        return e
      }

      function u(e, t, n, r) {
        var i;
        return i = e.$watch(function(e) {
          return i(), r(e)
        }, t, n)
      }

      function l(o, l, p, d) {
        function v(e) {
          try {
            return e = V(e), d && !g(e) ? e : s(e)
          } catch (e) {
            r(oo.interr(o, e))
          }
        }
        if (!o.length || o.indexOf(e) === -1) {
          var y;
          if (!l) {
            var b = a(o);
            y = $(b), y.exp = o, y.expressions = [], y.$$watchDelegate = u
          }
          return y
        }
        d = !!d;
        for (var w, x, C, E = 0, A = [], k = [], O = o.length, M = [], T = []; E < O;) {
          if ((w = o.indexOf(e, E)) == -1 || (x = o.indexOf(t, w + f)) == -1) {
            E !== O && M.push(a(o.substring(E)));
            break
          }
          E !== w && M.push(a(o.substring(E, w))), C = o.substring(w + f, x), A.push(C), k.push(n(C, v)), E = x + h, T.push(M.length), M.push("")
        }
        if (p && M.length > 1 && oo.throwNoconcat(o), !l || A.length) {
          var N = function(e) {
              for (var t = 0, n = A.length; t < n; t++) {
                if (d && m(e[t])) return;
                M[T[t]] = e[t]
              }
              return M.join("")
            },
            V = function(e) {
              return p ? i.getTrusted(p, e) : i.valueOf(e)
            };
          return c(function(e) {
            var t = 0,
              n = A.length,
              i = new Array(n);
            try {
              for (; t < n; t++) i[t] = k[t](e);
              return N(i)
            } catch (e) {
              r(oo.interr(o, e))
            }
          }, {
            exp: o,
            expressions: A,
            $$watchDelegate: function(e, t) {
              var n;
              return e.$watchGroup(k, function(r, i) {
                var o = N(r);
                S(t) && t.call(this, o, r !== i ? n : o, e), n = o
              })
            }
          })
        }
      }
      var f = e.length,
        h = t.length,
        p = new RegExp(e.replace(/./g, o), "g"),
        d = new RegExp(t.replace(/./g, o), "g");
      return l.startSymbol = function() {
        return e
      }, l.endSymbol = function() {
        return t
      }, l
    }]
  }

  function _t() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
      function o(o, s, u, c) {
        function l() {
          f ? o.apply(null, h) : o($)
        }
        var f = arguments.length > 4,
          h = f ? L(arguments, 4) : [],
          p = t.setInterval,
          d = t.clearInterval,
          $ = 0,
          v = g(c) && !c,
          m = (v ? r : n).defer(),
          y = m.promise;
        return u = g(u) ? u : 0, y.$$intervalId = p(function() {
          v ? i.defer(l) : e.$evalAsync(l), m.notify($++), u > 0 && $ >= u && (m.resolve($), d(y.$$intervalId), delete a[y.$$intervalId]), v || e.$apply()
        }, s), a[y.$$intervalId] = m, y
      }
      var a = {};
      return o.cancel = function(e) {
        return !!(e && e.$$intervalId in a) && (a[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete a[e.$$intervalId], !0)
      }, o
    }]
  }

  function Rt(e) {
    for (var t = e.split("/"), n = t.length; n--;) t[n] = ee(t[n]);
    return t.join("/")
  }

  function Ft(e, t) {
    var n = In(e);
    t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = f(n.port) || uo[n.protocol] || null
  }

  function qt(e, t) {
    var n = "/" !== e.charAt(0);
    n && (e = "/" + e);
    var r = In(e);
    t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = X(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
  }

  function Ut(e, t) {
    return 0 === e.lastIndexOf(t, 0)
  }

  function Lt(e, t) {
    if (Ut(t, e)) return t.substr(e.length)
  }

  function Ht(e) {
    var t = e.indexOf("#");
    return t == -1 ? e : e.substr(0, t)
  }

  function Bt(e) {
    return e.replace(/(#.+)|#$/, "$1")
  }

  function zt(e) {
    return e.substr(0, Ht(e).lastIndexOf("/") + 1)
  }

  function Wt(e) {
    return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
  }

  function Gt(e, t, n) {
    this.$$html5 = !0, n = n || "", Ft(e, this), this.$$parse = function(e) {
      var n = Lt(t, e);
      if (!w(n)) throw co("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
      qt(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function() {
      var e = Q(this.$$search),
        n = this.$$hash ? "#" + ee(this.$$hash) : "";
      this.$$url = Rt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
    }, this.$$parseLinkUrl = function(r, i) {
      if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
      var o, a, s;
      return g(o = Lt(e, r)) ? (a = o, s = g(o = Lt(n, o)) ? t + (Lt("/", o) || o) : e + a) : g(o = Lt(t, r)) ? s = t + o : t == r + "/" && (s = t), s && this.$$parse(s), !!s
    }
  }

  function Zt(e, t, n) {
    Ft(e, this), this.$$parse = function(r) {
      function i(e, t, n) {
        var r, i = /^\/[A-Z]:(\/.*)/;
        return Ut(t, n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
      }
      var o, a = Lt(e, r) || Lt(t, r);
      m(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", m(a) && (e = r, this.replace())) : (o = Lt(n, a), m(o) && (o = a)), qt(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
    }, this.$$compose = function() {
      var t = Q(this.$$search),
        r = this.$$hash ? "#" + ee(this.$$hash) : "";
      this.$$url = Rt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
    }, this.$$parseLinkUrl = function(t, n) {
      return Ht(e) == Ht(t) && (this.$$parse(t), !0)
    }
  }

  function Jt(e, t, n) {
    this.$$html5 = !0, Zt.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
      if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
      var o, a;
      return e == Ht(r) ? o = r : (a = Lt(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
    }, this.$$compose = function() {
      var t = Q(this.$$search),
        r = this.$$hash ? "#" + ee(this.$$hash) : "";
      this.$$url = Rt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
    }
  }

  function Yt(e) {
    return function() {
      return this[e]
    }
  }

  function Kt(e, t) {
    return function(n) {
      return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
    }
  }

  function Xt() {
    var e = "",
      t = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function(t) {
      return g(t) ? (e = t, this) : e
    }, this.html5Mode = function(e) {
      return N(e) ? (t.enabled = e, this) : y(e) ? (N(e.enabled) && (t.enabled = e.enabled), N(e.requireBase) && (t.requireBase = e.requireBase), N(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
      function s(e, t, n) {
        var i = c.url(),
          o = c.$$state;
        try {
          r.url(e, t, n), c.$$state = r.state()
        } catch (e) {
          throw c.url(i), c.$$state = o, e
        }
      }

      function u(e, t) {
        n.$broadcast("$locationChangeSuccess", c.absUrl(), e, c.$$state, t)
      }
      var c, l, f, h = r.baseHref(),
        p = r.url();
      if (t.enabled) {
        if (!h && t.requireBase) throw co("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
        f = Wt(p) + (h || "/"), l = i.history ? Gt : Jt
      } else f = Ht(p), l = Zt;
      var d = zt(f);
      c = new l(f, d, "#" + e), c.$$parseLinkUrl(p, p), c.$$state = r.state();
      var $ = /^\s*(javascript|mailto):/i;
      o.on("click", function(e) {
        if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
          for (var i = Rr(e.target);
            "a" !== _(i[0]);)
            if (i[0] === o[0] || !(i = i.parent())[0]) return;
          var s = i.prop("href"),
            u = i.attr("href") || i.attr("xlink:href");
          y(s) && "[object SVGAnimatedString]" === s.toString() && (s = In(s.animVal).href), $.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || c.$$parseLinkUrl(s, u) && (e.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
        }
      }), Bt(c.absUrl()) != Bt(p) && r.url(c.absUrl(), !0);
      var v = !0;
      return r.onUrlChange(function(e, t) {
        return m(Lt(d, e)) ? void(a.location.href = e) : (n.$evalAsync(function() {
          var r, i = c.absUrl(),
            o = c.$$state;
          e = Bt(e), c.$$parse(e), c.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, c.absUrl() === e && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (v = !1, u(i, o)))
        }), void(n.$$phase || n.$digest()))
      }), n.$watch(function() {
        var e = Bt(r.url()),
          t = Bt(c.absUrl()),
          o = r.state(),
          a = c.$$replace,
          l = e !== t || c.$$html5 && i.history && o !== c.$$state;
        (v || l) && (v = !1, n.$evalAsync(function() {
          var t = c.absUrl(),
            r = n.$broadcast("$locationChangeStart", t, e, c.$$state, o).defaultPrevented;
          c.absUrl() === t && (r ? (c.$$parse(e), c.$$state = o) : (l && s(t, a, o === c.$$state ? null : c.$$state), u(e, o)))
        })), c.$$replace = !1
      }), c
    }]
  }

  function Qt() {
    var e = !0,
      t = this;
    this.debugEnabled = function(t) {
      return g(t) ? (e = t, this) : e
    }, this.$get = ["$window", function(n) {
      function i(e) {
        return e instanceof Error && (e.stack ? e = e.message && e.stack.indexOf(e.message) === -1 ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
      }

      function o(e) {
        var t = n.console || {},
          o = t[e] || t.log || p,
          a = !1;
        try {
          a = !!o.apply
        } catch (e) {}
        return a ? function() {
          var e = [];
          return r(arguments, function(t) {
            e.push(i(t))
          }), o.apply(t, e)
        } : function(e, t) {
          o(e, null == t ? "" : t)
        }
      }
      return {
        log: o("log"),
        info: o("info"),
        warn: o("warn"),
        error: o("error"),
        debug: function() {
          var n = o("debug");
          return function() {
            e && n.apply(t, arguments)
          }
        }()
      }
    }]
  }

  function en(e, t) {
    if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw fo("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
    return e
  }

  function tn(e) {
    return e + ""
  }

  function nn(e, t) {
    if (e) {
      if (e.constructor === e) throw fo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
      if (e.window === e) throw fo("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
      if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw fo("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
      if (e === Object) throw fo("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
    }
    return e
  }

  function rn(e, t) {
    if (e) {
      if (e.constructor === e) throw fo("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
      if (e === ho || e === po || e === $o) throw fo("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
    }
  }

  function on(e, t) {
    if (e && (e === (0).constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw fo("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
  }

  function an(e, t) {
    return "undefined" != typeof e ? e : t
  }

  function sn(e, t) {
    return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
  }

  function un(e, t) {
    var n = e(t);
    return !n.$stateful
  }

  function cn(e, t) {
    var n, i;
    switch (e.type) {
      case yo.Program:
        n = !0, r(e.body, function(e) {
          cn(e.expression, t), n = n && e.expression.constant
        }), e.constant = n;
        break;
      case yo.Literal:
        e.constant = !0, e.toWatch = [];
        break;
      case yo.UnaryExpression:
        cn(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
        break;
      case yo.BinaryExpression:
        cn(e.left, t), cn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
        break;
      case yo.LogicalExpression:
        cn(e.left, t), cn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
        break;
      case yo.ConditionalExpression:
        cn(e.test, t), cn(e.alternate, t), cn(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
        break;
      case yo.Identifier:
        e.constant = !1, e.toWatch = [e];
        break;
      case yo.MemberExpression:
        cn(e.object, t), e.computed && cn(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
        break;
      case yo.CallExpression:
        n = !!e.filter && un(t, e.callee.name), i = [], r(e.arguments, function(e) {
          cn(e, t), n = n && e.constant, e.constant || i.push.apply(i, e.toWatch)
        }), e.constant = n, e.toWatch = e.filter && un(t, e.callee.name) ? i : [e];
        break;
      case yo.AssignmentExpression:
        cn(e.left, t), cn(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
        break;
      case yo.ArrayExpression:
        n = !0, i = [], r(e.elements, function(e) {
          cn(e, t), n = n && e.constant, e.constant || i.push.apply(i, e.toWatch)
        }), e.constant = n, e.toWatch = i;
        break;
      case yo.ObjectExpression:
        n = !0, i = [], r(e.properties, function(e) {
          cn(e.value, t), n = n && e.value.constant && !e.computed, e.value.constant || i.push.apply(i, e.value.toWatch)
        }), e.constant = n, e.toWatch = i;
        break;
      case yo.ThisExpression:
        e.constant = !1, e.toWatch = [];
        break;
      case yo.LocalsExpression:
        e.constant = !1, e.toWatch = []
    }
  }

  function ln(e) {
    if (1 == e.length) {
      var t = e[0].expression,
        n = t.toWatch;
      return 1 !== n.length ? n : n[0] !== t ? n : void 0
    }
  }

  function fn(e) {
    return e.type === yo.Identifier || e.type === yo.MemberExpression
  }

  function hn(e) {
    if (1 === e.body.length && fn(e.body[0].expression)) return {
      type: yo.AssignmentExpression,
      left: e.body[0].expression,
      right: {
        type: yo.NGValueParameter
      },
      operator: "="
    }
  }

  function pn(e) {
    return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === yo.Literal || e.body[0].expression.type === yo.ArrayExpression || e.body[0].expression.type === yo.ObjectExpression)
  }

  function dn(e) {
    return e.constant
  }

  function $n(e, t) {
    this.astBuilder = e, this.$filter = t
  }

  function vn(e, t) {
    this.astBuilder = e, this.$filter = t
  }

  function mn(e) {
    return "constructor" == e
  }

  function gn(e) {
    return S(e.valueOf) ? e.valueOf() : wo.call(e)
  }

  function yn() {
    var e, t, n = de(),
      i = de(),
      o = {
        true: !0,
        false: !1,
        null: null,
        undefined: void 0
      };
    this.addLiteral = function(e, t) {
      o[e] = t
    }, this.setIdentifierFns = function(n, r) {
      return e = n, t = r, this
    }, this.$get = ["$filter", function(a) {
      function s(e, t, r) {
        var o, s, c;
        switch (r = r || b, typeof e) {
          case "string":
            e = e.trim(), c = e;
            var v = r ? i : n;
            if (o = v[c], !o) {
              ":" === e.charAt(0) && ":" === e.charAt(1) && (s = !0, e = e.substring(2));
              var g = r ? y : m,
                w = new go(g),
                x = new bo(w, a, g);
              o = x.parse(e), o.constant ? o.$$watchDelegate = d : s ? o.$$watchDelegate = o.literal ? h : f : o.inputs && (o.$$watchDelegate = l), r && (o = u(o)), v[c] = o
            }
            return $(o, t);
          case "function":
            return $(e, t);
          default:
            return $(p, t)
        }
      }

      function u(e) {
        function t(t, n, r, i) {
          var o = b;
          b = !0;
          try {
            return e(t, n, r, i)
          } finally {
            b = o
          }
        }
        if (!e) return e;
        t.$$watchDelegate = e.$$watchDelegate, t.assign = u(e.assign), t.constant = e.constant, t.literal = e.literal;
        for (var n = 0; e.inputs && n < e.inputs.length; ++n) e.inputs[n] = u(e.inputs[n]);
        return t.inputs = e.inputs, t
      }

      function c(e, t) {
        return null == e || null == t ? e === t : ("object" != typeof e || (e = gn(e), "object" != typeof e)) && (e === t || e !== e && t !== t)
      }

      function l(e, t, n, r, i) {
        var o, a = r.inputs;
        if (1 === a.length) {
          var s = c;
          return a = a[0], e.$watch(function(e) {
            var t = a(e);
            return c(t, s) || (o = r(e, void 0, void 0, [t]), s = t && gn(t)), o
          }, t, n, i)
        }
        for (var u = [], l = [], f = 0, h = a.length; f < h; f++) u[f] = c, l[f] = null;
        return e.$watch(function(e) {
          for (var t = !1, n = 0, i = a.length; n < i; n++) {
            var s = a[n](e);
            (t || (t = !c(s, u[n]))) && (l[n] = s, u[n] = s && gn(s))
          }
          return t && (o = r(e, void 0, void 0, l)), o
        }, t, n, i)
      }

      function f(e, t, n, r) {
        var i, o;
        return i = e.$watch(function(e) {
          return r(e)
        }, function(e, n, r) {
          o = e, S(t) && t.apply(this, arguments), g(e) && r.$$postDigest(function() {
            g(o) && i()
          })
        }, n)
      }

      function h(e, t, n, i) {
        function o(e) {
          var t = !0;
          return r(e, function(e) {
            g(e) || (t = !1)
          }), t
        }
        var a, s;
        return a = e.$watch(function(e) {
          return i(e)
        }, function(e, n, r) {
          s = e, S(t) && t.call(this, e, n, r), o(e) && r.$$postDigest(function() {
            o(s) && a()
          })
        }, n)
      }

      function d(e, t, n, r) {
        var i;
        return i = e.$watch(function(e) {
          return i(), r(e)
        }, t, n)
      }

      function $(e, t) {
        if (!t) return e;
        var n = e.$$watchDelegate,
          r = !1,
          i = n !== h && n !== f,
          o = i ? function(n, i, o, a) {
            var s = r && a ? a[0] : e(n, i, o, a);
            return t(s, n, i)
          } : function(n, r, i, o) {
            var a = e(n, r, i, o),
              s = t(a, n, r);
            return g(a) ? s : a
          };
        return e.$$watchDelegate && e.$$watchDelegate !== l ? o.$$watchDelegate = e.$$watchDelegate : t.$stateful || (o.$$watchDelegate = l, r = !e.inputs, o.inputs = e.inputs ? e.inputs : [e]), o
      }
      var v = Qr().noUnsafeEval,
        m = {
          csp: v,
          expensiveChecks: !1,
          literals: F(o),
          isIdentifierStart: S(e) && e,
          isIdentifierContinue: S(t) && t
        },
        y = {
          csp: v,
          expensiveChecks: !0,
          literals: F(o),
          isIdentifierStart: S(e) && e,
          isIdentifierContinue: S(t) && t
        },
        b = !1;
      return s.$$runningExpensiveChecks = function() {
        return b
      }, s
    }]
  }

  function bn() {
    this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
      return xn(function(t) {
        e.$evalAsync(t)
      }, t)
    }]
  }

  function wn() {
    this.$get = ["$browser", "$exceptionHandler", function(e, t) {
      return xn(function(t) {
        e.defer(t)
      }, t)
    }]
  }

  function xn(e, n) {
    function i() {
      this.$$state = {
        status: 0
      }
    }

    function o(e, t) {
      return function(n) {
        t.call(e, n)
      }
    }

    function a(e) {
      var t, r, i;
      i = e.pending, e.processScheduled = !1, e.pending = void 0;
      for (var o = 0, a = i.length; o < a; ++o) {
        r = i[o][0], t = i[o][e.status];
        try {
          S(t) ? r.resolve(t(e.value)) : 1 === e.status ? r.resolve(e.value) : r.reject(e.value)
        } catch (e) {
          r.reject(e), n(e)
        }
      }
    }

    function s(t) {
      !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
        a(t)
      }))
    }

    function u() {
      this.promise = new i
    }

    function l(e) {
      var t = new u,
        n = 0,
        i = Jr(e) ? [] : {};
      return r(e, function(e, r) {
        n++, g(e).then(function(e) {
          i.hasOwnProperty(r) || (i[r] = e, --n || t.resolve(i))
        }, function(e) {
          i.hasOwnProperty(r) || t.reject(e)
        })
      }), 0 === n && t.resolve(i), t.promise
    }

    function f(e) {
      var t = p();
      return r(e, function(e) {
        g(e).then(t.resolve, t.reject)
      }), t.promise
    }
    var h = t("$q", TypeError),
      p = function() {
        var e = new u;
        return e.resolve = o(e, e.resolve), e.reject = o(e, e.reject), e.notify = o(e, e.notify), e
      };
    c(i.prototype, {
      then: function(e, t, n) {
        if (m(e) && m(t) && m(n)) return this;
        var r = new u;
        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && s(this.$$state), r.promise
      },
      catch: function(e) {
        return this.then(null, e)
      },
      finally: function(e, t) {
        return this.then(function(t) {
          return v(t, !0, e)
        }, function(t) {
          return v(t, !1, e)
        }, t)
      }
    }), c(u.prototype, {
      resolve: function(e) {
        this.promise.$$state.status || (e === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
      },
      $$resolve: function(e) {
        function t(e) {
          u || (u = !0, a.$$resolve(e))
        }

        function r(e) {
          u || (u = !0, a.$$reject(e))
        }
        var i, a = this,
          u = !1;
        try {
          (y(e) || S(e)) && (i = e && e.then), S(i) ? (this.promise.$$state.status = -1, i.call(e, t, r, o(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, s(this.promise.$$state))
        } catch (e) {
          r(e), n(e)
        }
      },
      reject: function(e) {
        this.promise.$$state.status || this.$$reject(e)
      },
      $$reject: function(e) {
        this.promise.$$state.value = e, this.promise.$$state.status = 2, s(this.promise.$$state)
      },
      notify: function(t) {
        var r = this.promise.$$state.pending;
        this.promise.$$state.status <= 0 && r && r.length && e(function() {
          for (var e, i, o = 0, a = r.length; o < a; o++) {
            i = r[o][0], e = r[o][3];
            try {
              i.notify(S(e) ? e(t) : t)
            } catch (e) {
              n(e)
            }
          }
        })
      }
    });
    var d = function(e) {
        var t = new u;
        return t.reject(e), t.promise
      },
      $ = function(e, t) {
        var n = new u;
        return t ? n.resolve(e) : n.reject(e), n.promise
      },
      v = function(e, t, n) {
        var r = null;
        try {
          S(n) && (r = n())
        } catch (e) {
          return $(e, !1)
        }
        return V(r) ? r.then(function() {
          return $(e, t)
        }, function(e) {
          return $(e, !1)
        }) : $(e, t)
      },
      g = function(e, t, n, r) {
        var i = new u;
        return i.resolve(e), i.promise.then(t, n, r)
      },
      b = g,
      w = function(e) {
        function t(e) {
          r.resolve(e)
        }

        function n(e) {
          r.reject(e)
        }
        if (!S(e)) throw h("norslvr", "Expected resolverFn, got '{0}'", e);
        var r = new u;
        return e(t, n), r.promise
      };
    return w.prototype = i.prototype, w.defer = p, w.reject = d, w.when = g, w.resolve = b, w.all = l, w.race = f, w
  }

  function Cn() {
    this.$get = ["$window", "$timeout", function(e, t) {
      var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
        r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
        i = !!n,
        o = i ? function(e) {
          var t = n(e);
          return function() {
            r(t)
          }
        } : function(e) {
          var n = t(e, 16.66, !1);
          return function() {
            t.cancel(n)
          }
        };
      return o.supported = i, o
    }]
  }

  function Sn() {
    function e(e) {
      function t() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = a(), this.$$ChildScope = null
      }
      return t.prototype = e, t
    }
    var i = 10,
      o = t("$rootScope"),
      s = null,
      u = null;
    this.digestTtl = function(e) {
      return arguments.length && (i = e), i
    }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(t, c, l) {
      function f(e) {
        e.currentScope.$$destroyed = !0
      }

      function h(e) {
        9 === _r && (e.$$childHead && h(e.$$childHead), e.$$nextSibling && h(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
      }

      function d() {
        this.$id = a(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
      }

      function $(e) {
        if (E.$$phase) throw o("inprog", "{0} already in progress", E.$$phase);
        E.$$phase = e
      }

      function v() {
        E.$$phase = null
      }

      function g(e, t) {
        do e.$$watchersCount += t; while (e = e.$parent)
      }

      function b(e, t, n) {
        do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
      }

      function w() {}

      function x() {
        for (; O.length;) try {
          O.shift()()
        } catch (e) {
          t(e)
        }
        u = null
      }

      function C() {
        null === u && (u = l.defer(function() {
          E.$apply(x)
        }))
      }
      d.prototype = {
        constructor: d,
        $new: function(t, n) {
          var r;
          return n = n || this, t ? (r = new d, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", f), r
        },
        $watch: function(e, t, n, r) {
          var i = c(e);
          if (i.$$watchDelegate) return i.$$watchDelegate(this, t, n, i, e);
          var o = this,
            a = o.$$watchers,
            u = {
              fn: t,
              last: w,
              get: i,
              exp: r || e,
              eq: !!n
            };
          return s = null, S(t) || (u.fn = p), a || (a = o.$$watchers = []), a.unshift(u), g(this, 1),
            function() {
              R(a, u) >= 0 && g(o, -1), s = null
            }
        },
        $watchGroup: function(e, t) {
          function n() {
            u = !1, c ? (c = !1, t(o, o, s)) : t(o, i, s)
          }
          var i = new Array(e.length),
            o = new Array(e.length),
            a = [],
            s = this,
            u = !1,
            c = !0;
          if (!e.length) {
            var l = !0;
            return s.$evalAsync(function() {
                l && t(o, o, s)
              }),
              function() {
                l = !1
              }
          }
          return 1 === e.length ? this.$watch(e[0], function(e, n, r) {
            o[0] = e, i[0] = n, t(o, e === n ? o : i, r)
          }) : (r(e, function(e, t) {
            var r = s.$watch(e, function(e, r) {
              o[t] = e, i[t] = r, u || (u = !0, s.$evalAsync(n))
            });
            a.push(r)
          }), function() {
            for (; a.length;) a.shift()()
          })
        },
        $watchCollection: function(e, t) {
          function r(e) {
            o = e;
            var t, r, i, s, u;
            if (!m(o)) {
              if (y(o))
                if (n(o)) {
                  a !== p && (a = p, v = a.length = 0, f++), t = o.length, v !== t && (f++, a.length = v = t);
                  for (var c = 0; c < t; c++) u = a[c], s = o[c], i = u !== u && s !== s, i || u === s || (f++, a[c] = s)
                } else {
                  a !== d && (a = d = {}, v = 0, f++), t = 0;
                  for (r in o) Vr.call(o, r) && (t++, s = o[r], u = a[r], r in a ? (i = u !== u && s !== s, i || u === s || (f++, a[r] = s)) : (v++, a[r] = s, f++));
                  if (v > t) {
                    f++;
                    for (r in a) Vr.call(o, r) || (v--, delete a[r])
                  }
                }
              else a !== o && (a = o, f++);
              return f
            }
          }

          function i() {
            if ($ ? ($ = !1, t(o, o, u)) : t(o, s, u), l)
              if (y(o))
                if (n(o)) {
                  s = new Array(o.length);
                  for (var e = 0; e < o.length; e++) s[e] = o[e]
                } else {
                  s = {};
                  for (var r in o) Vr.call(o, r) && (s[r] = o[r])
                }
            else s = o
          }
          r.$stateful = !0;
          var o, a, s, u = this,
            l = t.length > 1,
            f = 0,
            h = c(e, r),
            p = [],
            d = {},
            $ = !0,
            v = 0;
          return this.$watch(h, i)
        },
        $digest: function() {
          var e, n, r, a, c, f, h, p, d, m, g, y, b = i,
            C = this,
            O = [];
          $("$digest"), l.$$checkUrlChange(), this === E && null !== u && (l.defer.cancel(u), x()), s = null;
          do {
            p = !1, m = C;
            for (var T = 0; T < A.length; T++) {
              try {
                y = A[T], y.scope.$eval(y.expression, y.locals)
              } catch (e) {
                t(e)
              }
              s = null
            }
            A.length = 0;
            e: do {
              if (f = m.$$watchers)
                for (h = f.length; h--;) try {
                  if (e = f[h])
                    if (c = e.get, (n = c(m)) === (r = e.last) || (e.eq ? q(n, r) : "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r))) {
                      if (e === s) {
                        p = !1;
                        break e
                      }
                    } else p = !0, s = e, e.last = e.eq ? F(n, null) : n, a = e.fn, a(n, r === w ? n : r, m), b < 5 && (g = 4 - b, O[g] || (O[g] = []), O[g].push({
                      msg: S(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                      newVal: n,
                      oldVal: r
                    }))
                } catch (e) {
                  t(e)
                }
              if (!(d = m.$$watchersCount && m.$$childHead || m !== C && m.$$nextSibling))
                for (; m !== C && !(d = m.$$nextSibling);) m = m.$parent
            } while (m = d);
            if ((p || A.length) && !b--) throw v(), o("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", i, O)
          } while (p || A.length);
          for (v(); M < k.length;) try {
            k[M++]()
          } catch (e) {
            t(e)
          }
          k.length = M = 0
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var e = this.$parent;
            this.$broadcast("$destroy"), this.$$destroyed = !0, this === E && l.$$applicationDestroyed(), g(this, -this.$$watchersCount);
            for (var t in this.$$listenerCount) b(this, this.$$listenerCount[t], t);
            e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
              return p
            }, this.$$listeners = {}, this.$$nextSibling = null, h(this)
          }
        },
        $eval: function(e, t) {
          return c(e)(this, t)
        },
        $evalAsync: function(e, t) {
          E.$$phase || A.length || l.defer(function() {
            A.length && E.$digest()
          }), A.push({
            scope: this,
            expression: c(e),
            locals: t
          })
        },
        $$postDigest: function(e) {
          k.push(e)
        },
        $apply: function(e) {
          try {
            $("$apply");
            try {
              return this.$eval(e)
            } finally {
              v()
            }
          } catch (e) {
            t(e)
          } finally {
            try {
              E.$digest()
            } catch (e) {
              throw t(e), e
            }
          }
        },
        $applyAsync: function(e) {
          function t() {
            n.$eval(e)
          }
          var n = this;
          e && O.push(t), e = c(e), C()
        },
        $on: function(e, t) {
          var n = this.$$listeners[e];
          n || (this.$$listeners[e] = n = []), n.push(t);
          var r = this;
          do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
          var i = this;
          return function() {
            var r = n.indexOf(t);
            r !== -1 && (n[r] = null, b(i, 1, e))
          }
        },
        $emit: function(e, n) {
          var r, i, o, a = [],
            s = this,
            u = !1,
            c = {
              name: e,
              targetScope: s,
              stopPropagation: function() {
                u = !0
              },
              preventDefault: function() {
                c.defaultPrevented = !0
              },
              defaultPrevented: !1
            },
            l = U([c], arguments, 1);
          do {
            for (r = s.$$listeners[e] || a, c.currentScope = s, i = 0, o = r.length; i < o; i++)
              if (r[i]) try {
                r[i].apply(null, l)
              } catch (e) {
                t(e)
              } else r.splice(i, 1), i--, o--;
            if (u) return c.currentScope = null, c;
            s = s.$parent
          } while (s);
          return c.currentScope = null, c
        },
        $broadcast: function(e, n) {
          var r = this,
            i = r,
            o = r,
            a = {
              name: e,
              targetScope: r,
              preventDefault: function() {
                a.defaultPrevented = !0
              },
              defaultPrevented: !1
            };
          if (!r.$$listenerCount[e]) return a;
          for (var s, u, c, l = U([a], arguments, 1); i = o;) {
            for (a.currentScope = i, s = i.$$listeners[e] || [], u = 0, c = s.length; u < c; u++)
              if (s[u]) try {
                s[u].apply(null, l)
              } catch (e) {
                t(e)
              } else s.splice(u, 1), u--, c--;
            if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== r && i.$$nextSibling))
              for (; i !== r && !(o = i.$$nextSibling);) i = i.$parent
          }
          return a.currentScope = null, a
        }
      };
      var E = new d,
        A = E.$$asyncQueue = [],
        k = E.$$postDigestQueue = [],
        O = E.$$applyAsyncQueue = [],
        M = 0;
      return E
    }]
  }

  function En() {
    var e = /^\s*(https?|ftp|mailto|tel|file):/,
      t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function(t) {
      return g(t) ? (e = t, this) : e
    }, this.imgSrcSanitizationWhitelist = function(e) {
      return g(e) ? (t = e, this) : t
    }, this.$get = function() {
      return function(n, r) {
        var i, o = r ? t : e;
        return i = In(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
      }
    }
  }

  function An(e) {
    if ("self" === e) return e;
    if (w(e)) {
      if (e.indexOf("***") > -1) throw xo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
      return e = Xr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
    }
    if (E(e)) return new RegExp("^" + e.source + "$");
    throw xo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
  }

  function kn(e) {
    var t = [];
    return g(e) && r(e, function(e) {
      t.push(An(e))
    }), t
  }

  function On() {
    this.SCE_CONTEXTS = Co;
    var e = ["self"],
      t = [];
    this.resourceUrlWhitelist = function(t) {
      return arguments.length && (e = kn(t)), e
    }, this.resourceUrlBlacklist = function(e) {
      return arguments.length && (t = kn(e)), t
    }, this.$get = ["$injector", function(n) {
      function r(e, t) {
        return "self" === e ? Dn(t) : !!e.exec(t.href)
      }

      function i(n) {
        var i, o, a = In(n.toString()),
          s = !1;
        for (i = 0, o = e.length; i < o; i++)
          if (r(e[i], a)) {
            s = !0;
            break
          }
        if (s)
          for (i = 0, o = t.length; i < o; i++)
            if (r(t[i], a)) {
              s = !1;
              break
            }
        return s
      }

      function o(e) {
        var t = function(e) {
          this.$$unwrapTrustedValue = function() {
            return e
          }
        };
        return e && (t.prototype = new e), t.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue()
        }, t.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString()
        }, t
      }

      function a(e, t) {
        var n = f.hasOwnProperty(e) ? f[e] : null;
        if (!n) throw xo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
        if (null === t || m(t) || "" === t) return t;
        if ("string" != typeof t) throw xo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
        return new n(t)
      }

      function s(e) {
        return e instanceof l ? e.$$unwrapTrustedValue() : e
      }

      function u(e, t) {
        if (null === t || m(t) || "" === t) return t;
        var n = f.hasOwnProperty(e) ? f[e] : null;
        if (n && t instanceof n) return t.$$unwrapTrustedValue();
        if (e === Co.RESOURCE_URL) {
          if (i(t)) return t;
          throw xo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
        }
        if (e === Co.HTML) return c(t);
        throw xo("unsafe", "Attempting to use an unsafe value in a safe context.")
      }
      var c = function(e) {
        throw xo("unsafe", "Attempting to use an unsafe value in a safe context.")
      };
      n.has("$sanitize") && (c = n.get("$sanitize"));
      var l = o(),
        f = {};
      return f[Co.HTML] = o(l), f[Co.CSS] = o(l), f[Co.URL] = o(l), f[Co.JS] = o(l), f[Co.RESOURCE_URL] = o(f[Co.URL]), {
        trustAs: a,
        getTrusted: u,
        valueOf: s
      }
    }]
  }

  function Mn() {
    var e = !0;
    this.enabled = function(t) {
      return arguments.length && (e = !!t), e
    }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
      if (e && _r < 8) throw xo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
      var i = ve(Co);
      i.isEnabled = function() {
        return e
      }, i.trustAs = n.trustAs, i.getTrusted = n.getTrusted, i.valueOf = n.valueOf, e || (i.trustAs = i.getTrusted = function(e, t) {
        return t
      }, i.valueOf = d), i.parseAs = function(e, n) {
        var r = t(n);
        return r.literal && r.constant ? r : t(n, function(t) {
          return i.getTrusted(e, t)
        })
      };
      var o = i.parseAs,
        a = i.getTrusted,
        s = i.trustAs;
      return r(Co, function(e, t) {
        var n = jr(t);
        i[we("parse_as_" + n)] = function(t) {
          return o(e, t)
        }, i[we("get_trusted_" + n)] = function(t) {
          return a(e, t)
        }, i[we("trust_as_" + n)] = function(t) {
          return s(e, t)
        }
      }), i
    }]
  }

  function Tn() {
    this.$get = ["$window", "$document", function(e, t) {
      var n, r, i = {},
        o = e.chrome && e.chrome.app && e.chrome.app.runtime,
        a = !o && e.history && e.history.pushState,
        s = f((/android (\d+)/.exec(jr((e.navigator || {}).userAgent)) || [])[1]),
        u = /Boxee/i.test((e.navigator || {}).userAgent),
        c = t[0] || {},
        l = /^(Moz|webkit|ms)(?=[A-Z])/,
        h = c.body && c.body.style,
        p = !1,
        d = !1;
      if (h) {
        for (var $ in h)
          if (r = l.exec($)) {
            n = r[0], n = n[0].toUpperCase() + n.substr(1);
            break
          }
        n || (n = "WebkitOpacity" in h && "webkit"), p = !!("transition" in h || n + "Transition" in h), d = !!("animation" in h || n + "Animation" in h), !s || p && d || (p = w(h.webkitTransition), d = w(h.webkitAnimation))
      }
      return {
        history: !(!a || s < 4 || u),
        hasEvent: function(e) {
          if ("input" === e && _r <= 11) return !1;
          if (m(i[e])) {
            var t = c.createElement("div");
            i[e] = "on" + e in t
          }
          return i[e]
        },
        csp: Qr(),
        vendorPrefix: n,
        transitions: p,
        animations: d,
        android: s
      }
    }]
  }

  function Nn() {
    var e;
    this.httpOptions = function(t) {
      return t ? (e = t, this) : e
    }, this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, n, r, i) {
      function o(a, s) {
        function u(e) {
          if (!s) throw So("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", a, e.status, e.statusText);
          return r.reject(e)
        }
        o.totalPendingRequests++, w(a) && !m(t.get(a)) || (a = i.getTrustedResourceUrl(a));
        var l = n.defaults && n.defaults.transformResponse;
        return Jr(l) ? l = l.filter(function(e) {
          return e !== At
        }) : l === At && (l = null), n.get(a, c({
          cache: t,
          transformResponse: l
        }, e)).finally(function() {
          o.totalPendingRequests--
        }).then(function(e) {
          return t.put(a, e.data), e.data
        }, u)
      }
      return o.totalPendingRequests = 0, o
    }]
  }

  function Vn() {
    this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
      var i = {};
      return i.findBindings = function(e, t, n) {
        var i = e.getElementsByClassName("ng-binding"),
          o = [];
        return r(i, function(e) {
          var i = Gr.element(e).data("$binding");
          i && r(i, function(r) {
            if (n) {
              var i = new RegExp("(^|\\s)" + Xr(t) + "(\\s|\\||$)");
              i.test(r) && o.push(e)
            } else r.indexOf(t) != -1 && o.push(e)
          })
        }), o
      }, i.findModels = function(e, t, n) {
        for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
          var o = n ? "=" : "*=",
            a = "[" + r[i] + "model" + o + '"' + t + '"]',
            s = e.querySelectorAll(a);
          if (s.length) return s
        }
      }, i.getLocation = function() {
        return n.url()
      }, i.setLocation = function(t) {
        t !== n.url() && (n.url(t), e.$digest())
      }, i.whenStable = function(e) {
        t.notifyWhenNoOutstandingRequests(e)
      }, i
    }]
  }

  function jn() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
      function o(o, s, u) {
        S(o) || (u = s, s = o, o = p);
        var c, l = L(arguments, 3),
          f = g(u) && !u,
          h = (f ? r : n).defer(),
          d = h.promise;
        return c = t.defer(function() {
          try {
            h.resolve(o.apply(null, l))
          } catch (e) {
            h.reject(e), i(e)
          } finally {
            delete a[d.$$timeoutId]
          }
          f || e.$apply()
        }, s), d.$$timeoutId = c, a[c] = h, d
      }
      var a = {};
      return o.cancel = function(e) {
        return !!(e && e.$$timeoutId in a) && (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId))
      }, o
    }]
  }

  function In(e) {
    var t = e;
    return _r && (Eo.setAttribute("href", t), t = Eo.href), Eo.setAttribute("href", t), {
      href: Eo.href,
      protocol: Eo.protocol ? Eo.protocol.replace(/:$/, "") : "",
      host: Eo.host,
      search: Eo.search ? Eo.search.replace(/^\?/, "") : "",
      hash: Eo.hash ? Eo.hash.replace(/^#/, "") : "",
      hostname: Eo.hostname,
      port: Eo.port,
      pathname: "/" === Eo.pathname.charAt(0) ? Eo.pathname : "/" + Eo.pathname
    }
  }

  function Dn(e) {
    var t = w(e) ? In(e) : e;
    return t.protocol === Ao.protocol && t.host === Ao.host
  }

  function Pn() {
    this.$get = $(e)
  }

  function _n(e) {
    function t(e) {
      try {
        return decodeURIComponent(e)
      } catch (t) {
        return e
      }
    }
    var n = e[0] || {},
      r = {},
      i = "";
    return function() {
      var e, o, a, s, u, c = n.cookie || "";
      if (c !== i)
        for (i = c, e = i.split("; "), r = {}, a = 0; a < e.length; a++) o = e[a], s = o.indexOf("="), s > 0 && (u = t(o.substring(0, s)), m(r[u]) && (r[u] = t(o.substring(s + 1))));
      return r
    }
  }

  function Rn() {
    this.$get = _n
  }

  function Fn(e) {
    function t(i, o) {
      if (y(i)) {
        var a = {};
        return r(i, function(e, n) {
          a[n] = t(n, e)
        }), a
      }
      return e.factory(i + n, o)
    }
    var n = "Filter";
    this.register = t, this.$get = ["$injector", function(e) {
      return function(t) {
        return e.get(t + n)
      }
    }], t("currency", Bn), t("date", or), t("filter", qn), t("json", ar), t("limitTo", sr), t("lowercase", jo), t("number", zn), t("orderBy", cr), t("uppercase", Io)
  }

  function qn() {
    return function(e, r, i, o) {
      if (!n(e)) {
        if (null == e) return e;
        throw t("filter")("notarray", "Expected array but received: {0}", e)
      }
      o = o || "$";
      var a, s, u = Hn(r);
      switch (u) {
        case "function":
          a = r;
          break;
        case "boolean":
        case "null":
        case "number":
        case "string":
          s = !0;
        case "object":
          a = Un(r, i, o, s);
          break;
        default:
          return e
      }
      return Array.prototype.filter.call(e, a)
    }
  }

  function Un(e, t, n, r) {
    var i, o = y(e) && n in e;
    return t === !0 ? t = q : S(t) || (t = function(e, t) {
      return !m(e) && (null === e || null === t ? e === t : !(y(t) || y(e) && !v(e)) && (e = jr("" + e), t = jr("" + t), e.indexOf(t) !== -1))
    }), i = function(i) {
      return o && !y(i) ? Ln(i, e[n], t, n, !1) : Ln(i, e, t, n, r)
    }
  }

  function Ln(e, t, n, r, i, o) {
    var a = Hn(e),
      s = Hn(t);
    if ("string" === s && "!" === t.charAt(0)) return !Ln(e, t.substring(1), n, r, i);
    if (Jr(e)) return e.some(function(e) {
      return Ln(e, t, n, r, i)
    });
    switch (a) {
      case "object":
        var u;
        if (i) {
          for (u in e)
            if ("$" !== u.charAt(0) && Ln(e[u], t, n, r, !0)) return !0;
          return !o && Ln(e, t, n, r, !1)
        }
        if ("object" === s) {
          for (u in t) {
            var c = t[u];
            if (!S(c) && !m(c)) {
              var l = u === r,
                f = l ? e : e[u];
              if (!Ln(f, c, n, r, l, l)) return !1
            }
          }
          return !0
        }
        return n(e, t);
      case "function":
        return !1;
      default:
        return n(e, t)
    }
  }

  function Hn(e) {
    return null === e ? "null" : typeof e
  }

  function Bn(e) {
    var t = e.NUMBER_FORMATS;
    return function(e, n, r) {
      return m(n) && (n = t.CURRENCY_SYM), m(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : Zn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
    }
  }

  function zn(e) {
    var t = e.NUMBER_FORMATS;
    return function(e, n) {
      return null == e ? e : Zn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
    }
  }

  function Wn(e) {
    var t, n, r, i, o, a = 0;
    for ((n = e.indexOf(Oo)) > -1 && (e = e.replace(Oo, "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charAt(r) == Mo; r++);
    if (r == (o = e.length)) t = [0], n = 1;
    else {
      for (o--; e.charAt(o) == Mo;) o--;
      for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = +e.charAt(r)
    }
    return n > ko && (t = t.splice(0, ko - 1), a = n - 1, n = 1), {
      d: t,
      e: a,
      i: n
    }
  }

  function Gn(e, t, n, r) {
    var i = e.d,
      o = i.length - e.i;
    t = m(t) ? Math.min(Math.max(n, o), r) : +t;
    var a = t + e.i,
      s = i[a];
    if (a > 0) {
      i.splice(Math.max(e.i, a));
      for (var u = a; u < i.length; u++) i[u] = 0
    } else {
      o = Math.max(0, o), e.i = 1, i.length = Math.max(1, a = t + 1), i[0] = 0;
      for (var c = 1; c < a; c++) i[c] = 0
    }
    if (s >= 5)
      if (a - 1 < 0) {
        for (var l = 0; l > a; l--) i.unshift(0), e.i++;
        i.unshift(1), e.i++
      } else i[a - 1]++;
    for (; o < Math.max(0, t); o++) i.push(0);
    var f = i.reduceRight(function(e, t, n, r) {
      return t += e, r[n] = t % 10, Math.floor(t / 10)
    }, 0);
    f && (i.unshift(f), e.i++)
  }

  function Zn(e, t, n, r, i) {
    if (!w(e) && !x(e) || isNaN(e)) return "";
    var o, a = !isFinite(e),
      s = !1,
      u = Math.abs(e) + "",
      c = "";
    if (a) c = "∞";
    else {
      o = Wn(u), Gn(o, i, t.minFrac, t.maxFrac);
      var l = o.d,
        f = o.i,
        h = o.e,
        p = [];
      for (s = l.reduce(function(e, t) {
          return e && !t
        }, !0); f < 0;) l.unshift(0), f++;
      f > 0 ? p = l.splice(f, l.length) : (p = l, l = [0]);
      var d = [];
      for (l.length >= t.lgSize && d.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize;) d.unshift(l.splice(-t.gSize, l.length).join(""));
      l.length && d.unshift(l.join("")), c = d.join(n), p.length && (c += r + p.join("")), h && (c += "e+" + h)
    }
    return e < 0 && !s ? t.negPre + c + t.negSuf : t.posPre + c + t.posSuf
  }

  function Jn(e, t, n, r) {
    var i = "";
    for ((e < 0 || r && e <= 0) && (r ? e = -e + 1 : (e = -e, i = "-")), e = "" + e; e.length < t;) e = Mo + e;
    return n && (e = e.substr(e.length - t)), i + e
  }

  function Yn(e, t, n, r, i) {
    return n = n || 0,
      function(o) {
        var a = o["get" + e]();
        return (n > 0 || a > -n) && (a += n), 0 === a && n == -12 && (a = 12), Jn(a, t, r, i)
      }
  }

  function Kn(e, t, n) {
    return function(r, i) {
      var o = r["get" + e](),
        a = (n ? "STANDALONE" : "") + (t ? "SHORT" : ""),
        s = Ir(a + e);
      return i[s][o]
    }
  }

  function Xn(e, t, n) {
    var r = -1 * n,
      i = r >= 0 ? "+" : "";
    return i += Jn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + Jn(Math.abs(r % 60), 2)
  }

  function Qn(e) {
    var t = new Date(e, 0, 1).getDay();
    return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
  }

  function er(e) {
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
  }

  function tr(e) {
    return function(t) {
      var n = Qn(t.getFullYear()),
        r = er(t),
        i = +r - +n,
        o = 1 + Math.round(i / 6048e5);
      return Jn(o, e)
    }
  }

  function nr(e, t) {
    return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
  }

  function rr(e, t) {
    return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
  }

  function ir(e, t) {
    return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
  }

  function or(e) {
    function t(e) {
      var t;
      if (t = e.match(n)) {
        var r = new Date(0),
          i = 0,
          o = 0,
          a = t[8] ? r.setUTCFullYear : r.setFullYear,
          s = t[8] ? r.setUTCHours : r.setHours;
        t[9] && (i = f(t[9] + t[10]), o = f(t[9] + t[11])), a.call(r, f(t[1]), f(t[2]) - 1, f(t[3]));
        var u = f(t[4] || 0) - i,
          c = f(t[5] || 0) - o,
          l = f(t[6] || 0),
          h = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
        return s.call(r, u, c, l, h), r
      }
      return e
    }
    var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(n, i, o) {
      var a, s, u = "",
        c = [];
      if (i = i || "mediumDate", i = e.DATETIME_FORMATS[i] || i, w(n) && (n = Vo.test(n) ? f(n) : t(n)), x(n) && (n = new Date(n)), !C(n) || !isFinite(n.getTime())) return n;
      for (; i;) s = No.exec(i), s ? (c = U(c, s, 1), i = c.pop()) : (c.push(i), i = null);
      var l = n.getTimezoneOffset();
      return o && (l = G(o, l), n = J(n, o, !0)), r(c, function(t) {
        a = To[t], u += a ? a(n, e.DATETIME_FORMATS, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), u
    }
  }

  function ar() {
    return function(e, t) {
      return m(t) && (t = 2), z(e, t)
    }
  }

  function sr() {
    return function(e, t, r) {
      return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : f(t), isNaN(t) ? e : (x(e) && (e = e.toString()), n(e) ? (r = !r || isNaN(r) ? 0 : f(r), r = r < 0 ? Math.max(0, e.length + r) : r, t >= 0 ? ur(e, r, r + t) : 0 === r ? ur(e, t, e.length) : ur(e, Math.max(0, r + t), r)) : e)
    }
  }

  function ur(e, t, n) {
    return w(e) ? e.slice(t, n) : Ur.call(e, t, n)
  }

  function cr(e) {
    function r(t) {
      return t.map(function(t) {
        var n = 1,
          r = d;
        if (S(t)) r = t;
        else if (w(t) && ("+" != t.charAt(0) && "-" != t.charAt(0) || (n = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t), r.constant))) {
          var i = r();
          r = function(e) {
            return e[i]
          }
        }
        return {
          get: r,
          descending: n
        }
      })
    }

    function i(e) {
      switch (typeof e) {
        case "number":
        case "boolean":
        case "string":
          return !0;
        default:
          return !1
      }
    }

    function o(e) {
      return S(e.valueOf) && (e = e.valueOf(), i(e)) ? e : v(e) && (e = e.toString(), i(e)) ? e : e
    }

    function a(e, t) {
      var n = typeof e;
      return null === e ? (n = "string", e = "null") : "object" === n && (e = o(e)), {
        value: e,
        type: n,
        index: t
      }
    }

    function s(e, t) {
      var n = 0,
        r = e.type,
        i = t.type;
      if (r === i) {
        var o = e.value,
          a = t.value;
        "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (y(o) && (o = e.index), y(a) && (a = t.index)), o !== a && (n = o < a ? -1 : 1)
      } else n = r < i ? -1 : 1;
      return n
    }
    return function(e, i, o, u) {
      function c(e, t) {
        return {
          value: e,
          tieBreaker: {
            value: t,
            type: "number",
            index: t
          },
          predicateValues: f.map(function(n) {
            return a(n.get(e), t)
          })
        }
      }

      function l(e, t) {
        for (var n = 0, r = f.length; n < r; n++) {
          var i = p(e.predicateValues[n], t.predicateValues[n]);
          if (i) return i * f[n].descending * h
        }
        return p(e.tieBreaker, t.tieBreaker) * h
      }
      if (null == e) return e;
      if (!n(e)) throw t("orderBy")("notarray", "Expected array but received: {0}", e);
      Jr(i) || (i = [i]), 0 === i.length && (i = ["+"]);
      var f = r(i),
        h = o ? -1 : 1,
        p = S(u) ? u : s,
        d = Array.prototype.map.call(e, c);
      return d.sort(l), e = d.map(function(e) {
        return e.value
      })
    }
  }

  function lr(e) {
    return S(e) && (e = {
      link: e
    }), e.restrict = e.restrict || "AC", $(e)
  }

  function fr(e, t) {
    e.$name = t
  }

  function hr(e, t, n, i, o) {
    var a = this,
      s = [];
    a.$error = {}, a.$$success = {}, a.$pending = void 0, a.$name = o(t.name || t.ngForm || "")(n), a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, a.$$parentForm = _o, a.$rollbackViewValue = function() {
      r(s, function(e) {
        e.$rollbackViewValue()
      })
    }, a.$commitViewValue = function() {
      r(s, function(e) {
        e.$commitViewValue()
      })
    }, a.$addControl = function(e) {
      fe(e.$name, "input"), s.push(e), e.$name && (a[e.$name] = e), e.$$parentForm = a
    }, a.$$renameControl = function(e, t) {
      var n = e.$name;
      a[n] === e && delete a[n], a[t] = e, e.$name = t
    }, a.$removeControl = function(e) {
      e.$name && a[e.$name] === e && delete a[e.$name], r(a.$pending, function(t, n) {
        a.$setValidity(n, null, e)
      }), r(a.$error, function(t, n) {
        a.$setValidity(n, null, e)
      }), r(a.$$success, function(t, n) {
        a.$setValidity(n, null, e)
      }), R(s, e), e.$$parentForm = _o
    }, kr({
      ctrl: this,
      $element: e,
      set: function(e, t, n) {
        var r = e[t];
        if (r) {
          var i = r.indexOf(n);
          i === -1 && r.push(n)
        } else e[t] = [n]
      },
      unset: function(e, t, n) {
        var r = e[t];
        r && (R(r, n), 0 === r.length && delete e[t])
      },
      $animate: i
    }), a.$setDirty = function() {
      i.removeClass(e, wa), i.addClass(e, xa), a.$dirty = !0, a.$pristine = !1, a.$$parentForm.$setDirty()
    }, a.$setPristine = function() {
      i.setClass(e, wa, xa + " " + Ro), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, r(s, function(e) {
        e.$setPristine()
      })
    }, a.$setUntouched = function() {
      r(s, function(e) {
        e.$setUntouched()
      })
    }, a.$setSubmitted = function() {
      i.addClass(e, Ro), a.$submitted = !0, a.$$parentForm.$setSubmitted()
    }
  }

  function pr(e) {
    e.$formatters.push(function(t) {
      return e.$isEmpty(t) ? t : t.toString()
    })
  }

  function dr(e, t, n, r, i, o) {
    $r(e, t, n, r, i, o), pr(r)
  }

  function $r(e, t, n, r, i, o) {
    var a = jr(t[0].type);
    if (!i.android) {
      var s = !1;
      t.on("compositionstart", function() {
        s = !0
      }), t.on("compositionend", function() {
        s = !1, c()
      })
    }
    var u, c = function(e) {
      if (u && (o.defer.cancel(u), u = null), !s) {
        var i = t.val(),
          c = e && e.type;
        "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Kr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, c)
      }
    };
    if (i.hasEvent("input")) t.on("input", c);
    else {
      var l = function(e, t, n) {
        u || (u = o.defer(function() {
          u = null, t && t.value === n || c(e)
        }))
      };
      t.on("keydown", function(e) {
        var t = e.keyCode;
        91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || l(e, this, this.value)
      }), i.hasEvent("paste") && t.on("paste cut", l)
    }
    t.on("change", c), Xo[a] && r.$$hasNativeValidators && a === n.type && t.on(Ko, function(e) {
      if (!u) {
        var t = this[Nr],
          n = t.badInput,
          r = t.typeMismatch;
        u = o.defer(function() {
          u = null, t.badInput === n && t.typeMismatch === r || c(e)
        })
      }
    }), r.$render = function() {
      var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
      t.val() !== e && t.val(e)
    }
  }

  function vr(e, t) {
    if (C(e)) return e;
    if (w(e)) {
      Zo.lastIndex = 0;
      var n = Zo.exec(e);
      if (n) {
        var r = +n[1],
          i = +n[2],
          o = 0,
          a = 0,
          s = 0,
          u = 0,
          c = Qn(r),
          l = 7 * (i - 1);
        return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u)
      }
    }
    return NaN
  }

  function mr(e, t) {
    return function(n, i) {
      var o, a;
      if (C(n)) return n;
      if (w(n)) {
        if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Lo.test(n)) return new Date(n);
        if (e.lastIndex = 0, o = e.exec(n)) return o.shift(), a = i ? {
          yyyy: i.getFullYear(),
          MM: i.getMonth() + 1,
          dd: i.getDate(),
          HH: i.getHours(),
          mm: i.getMinutes(),
          ss: i.getSeconds(),
          sss: i.getMilliseconds() / 1e3
        } : {
          yyyy: 1970,
          MM: 1,
          dd: 1,
          HH: 0,
          mm: 0,
          ss: 0,
          sss: 0
        }, r(o, function(e, n) {
          n < t.length && (a[t[n]] = +e)
        }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
      }
      return NaN
    }
  }

  function gr(e, t, n, r) {
    return function(i, o, a, s, u, c, l) {
      function f(e) {
        return e && !(e.getTime && e.getTime() !== e.getTime())
      }

      function h(e) {
        return g(e) && !C(e) ? n(e) || void 0 : e
      }
      yr(i, o, a, s), $r(i, o, a, s, u, c);
      var p, d = s && s.$options && s.$options.timezone;
      if (s.$$parserName = e, s.$parsers.push(function(e) {
          if (s.$isEmpty(e)) return null;
          if (t.test(e)) {
            var r = n(e, p);
            return d && (r = J(r, d)), r
          }
        }), s.$formatters.push(function(e) {
          if (e && !C(e)) throw Oa("datefmt", "Expected `{0}` to be a date", e);
          return f(e) ? (p = e, p && d && (p = J(p, d, !0)), l("date")(e, r, d)) : (p = null, "")
        }), g(a.min) || a.ngMin) {
        var $;
        s.$validators.min = function(e) {
          return !f(e) || m($) || n(e) >= $
        }, a.$observe("min", function(e) {
          $ = h(e), s.$validate()
        })
      }
      if (g(a.max) || a.ngMax) {
        var v;
        s.$validators.max = function(e) {
          return !f(e) || m(v) || n(e) <= v
        }, a.$observe("max", function(e) {
          v = h(e), s.$validate()
        })
      }
    }
  }

  function yr(e, t, n, r) {
    var i = t[0],
      o = r.$$hasNativeValidators = y(i.validity);
    o && r.$parsers.push(function(e) {
      var n = t.prop(Nr) || {};
      return n.badInput || n.typeMismatch ? void 0 : e
    })
  }

  function br(e, t, n, r, i, o) {
    if (yr(e, t, n, r), $r(e, t, n, r, i, o), r.$$parserName = "number", r.$parsers.push(function(e) {
        return r.$isEmpty(e) ? null : zo.test(e) ? parseFloat(e) : void 0
      }), r.$formatters.push(function(e) {
        if (!r.$isEmpty(e)) {
          if (!x(e)) throw Oa("numfmt", "Expected `{0}` to be a number", e);
          e = e.toString()
        }
        return e
      }), g(n.min) || n.ngMin) {
      var a;
      r.$validators.min = function(e) {
        return r.$isEmpty(e) || m(a) || e >= a
      }, n.$observe("min", function(e) {
        g(e) && !x(e) && (e = parseFloat(e)), a = x(e) && !isNaN(e) ? e : void 0, r.$validate()
      })
    }
    if (g(n.max) || n.ngMax) {
      var s;
      r.$validators.max = function(e) {
        return r.$isEmpty(e) || m(s) || e <= s
      }, n.$observe("max", function(e) {
        g(e) && !x(e) && (e = parseFloat(e)), s = x(e) && !isNaN(e) ? e : void 0, r.$validate()
      })
    }
  }

  function wr(e, t, n, r, i, o) {
    $r(e, t, n, r, i, o), pr(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
      var n = e || t;
      return r.$isEmpty(n) || Ho.test(n)
    }
  }

  function xr(e, t, n, r, i, o) {
    $r(e, t, n, r, i, o), pr(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
      var n = e || t;
      return r.$isEmpty(n) || Bo.test(n)
    }
  }

  function Cr(e, t, n, r) {
    m(n.name) && t.attr("name", a());
    var i = function(e) {
      t[0].checked && r.$setViewValue(n.value, e && e.type)
    };
    t.on("click", i), r.$render = function() {
      var e = n.value;
      t[0].checked = e == r.$viewValue
    }, n.$observe("value", r.$render)
  }

  function Sr(e, t, n, r, i) {
    var o;
    if (g(r)) {
      if (o = e(r), !o.constant) throw Oa("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
      return o(t)
    }
    return i
  }

  function Er(e, t, n, r, i, o, a, s) {
    var u = Sr(s, e, "ngTrueValue", n.ngTrueValue, !0),
      c = Sr(s, e, "ngFalseValue", n.ngFalseValue, !1),
      l = function(e) {
        r.$setViewValue(t[0].checked, e && e.type)
      };
    t.on("click", l), r.$render = function() {
      t[0].checked = r.$viewValue
    }, r.$isEmpty = function(e) {
      return e === !1
    }, r.$formatters.push(function(e) {
      return q(e, u)
    }), r.$parsers.push(function(e) {
      return e ? u : c
    })
  }

  function Ar(e, t) {
    return e = "ngClass" + e, ["$animate", function(n) {
      function i(e, t) {
        var n = [];
        e: for (var r = 0; r < e.length; r++) {
          for (var i = e[r], o = 0; o < t.length; o++)
            if (i == t[o]) continue e;
          n.push(i)
        }
        return n
      }

      function o(e) {
        var t = [];
        return Jr(e) ? (r(e, function(e) {
          t = t.concat(o(e))
        }), t) : w(e) ? e.split(" ") : y(e) ? (r(e, function(e, n) {
          e && (t = t.concat(n.split(" ")))
        }), t) : e
      }
      return {
        restrict: "AC",
        link: function(a, s, u) {
          function c(e) {
            var t = f(e, 1);
            u.$addClass(t)
          }

          function l(e) {
            var t = f(e, -1);
            u.$removeClass(t)
          }

          function f(e, t) {
            var n = s.data("$classCounts") || de(),
              i = [];
            return r(e, function(e) {
              (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && i.push(e))
            }), s.data("$classCounts", n), i.join(" ")
          }

          function h(e, t) {
            var r = i(t, e),
              o = i(e, t);
            r = f(r, 1), o = f(o, -1), r && r.length && n.addClass(s, r), o && o.length && n.removeClass(s, o)
          }

          function p(e) {
            if (t === !0 || (1 & a.$index) === t) {
              var n = o(e || []);
              if (d) {
                if (!q(e, d)) {
                  var r = o(d);
                  h(r, n)
                }
              } else c(n)
            }
            d = Jr(e) ? e.map(function(e) {
              return ve(e)
            }) : ve(e)
          }
          var d;
          a.$watch(u[e], p, !0), u.$observe("class", function(t) {
            p(a.$eval(u[e]))
          }), "ngClass" !== e && a.$watch("$index", function(n, r) {
            var i = 1 & n;
            if (i !== (1 & r)) {
              var s = o(a.$eval(u[e]));
              i === t ? c(s) : l(s)
            }
          })
        }
      }
    }]
  }

  function kr(e) {
    function t(e, t, s) {
      m(t) ? n("$pending", e, s) : r("$pending", e, s), N(t) ? t ? (l(a.$error, e, s), c(a.$$success, e, s)) : (c(a.$error, e, s), l(a.$$success, e, s)) : (l(a.$error, e, s), l(a.$$success, e, s)), a.$pending ? (i(Ea, !0), a.$valid = a.$invalid = void 0, o("", null)) : (i(Ea, !1), a.$valid = Or(a.$error), a.$invalid = !a.$valid, o("", a.$valid));
      var u;
      u = a.$pending && a.$pending[e] ? void 0 : !a.$error[e] && (!!a.$$success[e] || null), o(e, u), a.$$parentForm.$setValidity(e, u, a)
    }

    function n(e, t, n) {
      a[e] || (a[e] = {}), c(a[e], t, n)
    }

    function r(e, t, n) {
      a[e] && l(a[e], t, n), Or(a[e]) && (a[e] = void 0)
    }

    function i(e, t) {
      t && !u[e] ? (f.addClass(s, e), u[e] = !0) : !t && u[e] && (f.removeClass(s, e), u[e] = !1)
    }

    function o(e, t) {
      e = e ? "-" + se(e, "-") : "", i(ya + e, t === !0), i(ba + e, t === !1)
    }
    var a = e.ctrl,
      s = e.$element,
      u = {},
      c = e.set,
      l = e.unset,
      f = e.$animate;
    u[ba] = !(u[ya] = s.hasClass(ya)), a.$setValidity = t
  }

  function Or(e) {
    if (e)
      for (var t in e)
        if (e.hasOwnProperty(t)) return !1;
    return !0
  }

  function Mr(e) {
    e[0].hasAttribute("selected") && (e[0].selected = !0)
  }
  var Tr = /^\/(.+)\/([a-z]*)$/,
    Nr = "validity",
    Vr = Object.prototype.hasOwnProperty,
    jr = function(e) {
      return w(e) ? e.toLowerCase() : e
    },
    Ir = function(e) {
      return w(e) ? e.toUpperCase() : e
    },
    Dr = function(e) {
      return w(e) ? e.replace(/[A-Z]/g, function(e) {
        return String.fromCharCode(32 | e.charCodeAt(0))
      }) : e
    },
    Pr = function(e) {
      return w(e) ? e.replace(/[a-z]/g, function(e) {
        return String.fromCharCode(e.charCodeAt(0) & -33)
      }) : e
    };
  "i" !== "I".toLowerCase() && (jr = Dr, Ir = Pr);
  var _r, Rr, Fr, qr, Ur = [].slice,
    Lr = [].splice,
    Hr = [].push,
    Br = Object.prototype.toString,
    zr = Object.getPrototypeOf,
    Wr = t("ng"),
    Gr = e.angular || (e.angular = {}),
    Zr = 0;
  _r = e.document.documentMode, p.$inject = [], d.$inject = [];
  var Jr = Array.isArray,
    Yr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
    Kr = function(e) {
      return w(e) ? e.trim() : e
    },
    Xr = function(e) {
      return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    },
    Qr = function() {
      function t() {
        try {
          return new Function(""), !1
        } catch (e) {
          return !0
        }
      }
      if (!g(Qr.rules)) {
        var n = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
        if (n) {
          var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
          Qr.rules = {
            noUnsafeEval: !r || r.indexOf("no-unsafe-eval") !== -1,
            noInlineStyle: !r || r.indexOf("no-inline-style") !== -1
          }
        } else Qr.rules = {
          noUnsafeEval: t(),
          noInlineStyle: !1
        }
      }
      return Qr.rules
    },
    ei = function() {
      if (g(ei.name_)) return ei.name_;
      var t, n, r, i, o = ni.length;
      for (n = 0; n < o; ++n)
        if (r = ni[n], t = e.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
          i = t.getAttribute(r + "jq");
          break
        }
      return ei.name_ = i
    },
    ti = /:/g,
    ni = ["ng-", "data-ng-", "ng:", "x-ng-"],
    ri = /[A-Z]/g,
    ii = !1,
    oi = 1,
    ai = 2,
    si = 3,
    ui = 8,
    ci = 9,
    li = 11,
    fi = {
      full: "1.5.8",
      major: 1,
      minor: 5,
      dot: 8,
      codeName: "arbitrary-fallbacks"
    };
  Me.expando = "ng339";
  var hi = Me.cache = {},
    pi = 1,
    di = function(e, t, n) {
      e.addEventListener(t, n, !1)
    },
    $i = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    };
  Me._data = function(e) {
    return this.cache[e[this.expando]] || {}
  };
  var vi = /([\:\-\_]+(.))/g,
    mi = /^moz([A-Z])/,
    gi = {
      mouseleave: "mouseout",
      mouseenter: "mouseover"
    },
    yi = t("jqLite"),
    bi = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    wi = /<|&#?\w+;/,
    xi = /<([\w:-]+)/,
    Ci = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Si = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Si.optgroup = Si.option, Si.tbody = Si.tfoot = Si.colgroup = Si.caption = Si.thead, Si.th = Si.td;
  var Ei = e.Node.prototype.contains || function(e) {
      return !!(16 & this.compareDocumentPosition(e))
    },
    Ai = Me.prototype = {
      ready: function(t) {
        function n() {
          r || (r = !0, t())
        }
        var r = !1;
        "complete" === e.document.readyState ? e.setTimeout(n) : (this.on("DOMContentLoaded", n), Me(e).on("load", n))
      },
      toString: function() {
        var e = [];
        return r(this, function(t) {
          e.push("" + t)
        }), "[" + e.join(", ") + "]"
      },
      eq: function(e) {
        return Rr(e >= 0 ? this[e] : this[this.length + e])
      },
      length: 0,
      push: Hr,
      sort: [].sort,
      splice: [].splice
    },
    ki = {};
  r("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
    ki[jr(e)] = e
  });
  var Oi = {};
  r("input,select,option,textarea,button,form,details".split(","), function(e) {
    Oi[e] = !0
  });
  var Mi = {
    ngMinlength: "minlength",
    ngMaxlength: "maxlength",
    ngMin: "min",
    ngMax: "max",
    ngPattern: "pattern"
  };
  r({
    data: De,
    removeData: je,
    hasData: Se,
    cleanData: Ee
  }, function(e, t) {
    Me[t] = e
  }), r({
    data: De,
    inheritedData: Ue,
    scope: function(e) {
      return Rr.data(e, "$scope") || Ue(e.parentNode || e, ["$isolateScope", "$scope"])
    },
    isolateScope: function(e) {
      return Rr.data(e, "$isolateScope") || Rr.data(e, "$isolateScopeNoTemplate")
    },
    controller: qe,
    injector: function(e) {
      return Ue(e, "$injector")
    },
    removeAttr: function(e, t) {
      e.removeAttribute(t)
    },
    hasClass: Pe,
    css: function(e, t, n) {
      return t = we(t), g(n) ? void(e.style[t] = n) : e.style[t]
    },
    attr: function(e, t, n) {
      var r = e.nodeType;
      if (r !== si && r !== ai && r !== ui) {
        var i = jr(t);
        if (ki[i]) {
          if (!g(n)) return e[t] || (e.attributes.getNamedItem(t) || p).specified ? i : void 0;
          n ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
        } else if (g(n)) e.setAttribute(t, n);
        else if (e.getAttribute) {
          var o = e.getAttribute(t, 2);
          return null === o ? void 0 : o
        }
      }
    },
    prop: function(e, t, n) {
      return g(n) ? void(e[t] = n) : e[t]
    },
    text: function() {
      function e(e, t) {
        if (m(t)) {
          var n = e.nodeType;
          return n === oi || n === si ? e.textContent : ""
        }
        e.textContent = t
      }
      return e.$dv = "", e
    }(),
    val: function(e, t) {
      if (m(t)) {
        if (e.multiple && "select" === _(e)) {
          var n = [];
          return r(e.options, function(e) {
            e.selected && n.push(e.value || e.text)
          }), 0 === n.length ? null : n
        }
        return e.value
      }
      e.value = t
    },
    html: function(e, t) {
      return m(t) ? e.innerHTML : (Ne(e, !0), void(e.innerHTML = t))
    },
    empty: Le
  }, function(e, t) {
    Me.prototype[t] = function(t, n) {
      var r, i, o = this.length;
      if (e !== Le && m(2 == e.length && e !== Pe && e !== qe ? t : n)) {
        if (y(t)) {
          for (r = 0; r < o; r++)
            if (e === De) e(this[r], t);
            else
              for (i in t) e(this[r], i, t[i]);
          return this
        }
        for (var a = e.$dv, s = m(a) ? Math.min(o, 1) : o, u = 0; u < s; u++) {
          var c = e(this[u], t, n);
          a = a ? a + c : c
        }
        return a
      }
      for (r = 0; r < o; r++) e(this[r], t, n);
      return this
    }
  }), r({
    removeData: je,
    on: function(e, t, n, r) {
      if (g(r)) throw yi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
      if (Ce(e)) {
        var i = Ie(e, !0),
          o = i.events,
          a = i.handle;
        a || (a = i.handle = Ge(e, o));
        for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], u = s.length, c = function(t, r, i) {
            var s = o[t];
            s || (s = o[t] = [], s.specialHandlerWrapper = r, "$destroy" === t || i || di(e, t, a)), s.push(n)
          }; u--;) t = s[u], gi[t] ? (c(gi[t], Je), c(t, void 0, !0)) : c(t)
      }
    },
    off: Ve,
    one: function(e, t, n) {
      e = Rr(e), e.on(t, function r() {
        e.off(t, n), e.off(t, r)
      }), e.on(t, n)
    },
    replaceWith: function(e, t) {
      var n, i = e.parentNode;
      Ne(e), r(new Me(t), function(t) {
        n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e), n = t
      })
    },
    children: function(e) {
      var t = [];
      return r(e.childNodes, function(e) {
        e.nodeType === oi && t.push(e)
      }), t
    },
    contents: function(e) {
      return e.contentDocument || e.childNodes || []
    },
    append: function(e, t) {
      var n = e.nodeType;
      if (n === oi || n === li) {
        t = new Me(t);
        for (var r = 0, i = t.length; r < i; r++) {
          var o = t[r];
          e.appendChild(o)
        }
      }
    },
    prepend: function(e, t) {
      if (e.nodeType === oi) {
        var n = e.firstChild;
        r(new Me(t), function(t) {
          e.insertBefore(t, n)
        })
      }
    },
    wrap: function(e, t) {
      Oe(e, Rr(t).eq(0).clone()[0])
    },
    remove: He,
    detach: function(e) {
      He(e, !0)
    },
    after: function(e, t) {
      var n = e,
        r = e.parentNode;
      t = new Me(t);
      for (var i = 0, o = t.length; i < o; i++) {
        var a = t[i];
        r.insertBefore(a, n.nextSibling), n = a
      }
    },
    addClass: Re,
    removeClass: _e,
    toggleClass: function(e, t, n) {
      t && r(t.split(" "), function(t) {
        var r = n;
        m(r) && (r = !Pe(e, t)), (r ? Re : _e)(e, t)
      })
    },
    parent: function(e) {
      var t = e.parentNode;
      return t && t.nodeType !== li ? t : null
    },
    next: function(e) {
      return e.nextElementSibling
    },
    find: function(e, t) {
      return e.getElementsByTagName ? e.getElementsByTagName(t) : []
    },
    clone: Te,
    triggerHandler: function(e, t, n) {
      var i, o, a, s = t.type || t,
        u = Ie(e),
        l = u && u.events,
        f = l && l[s];
      f && (i = {
        preventDefault: function() {
          this.defaultPrevented = !0
        },
        isDefaultPrevented: function() {
          return this.defaultPrevented === !0
        },
        stopImmediatePropagation: function() {
          this.immediatePropagationStopped = !0
        },
        isImmediatePropagationStopped: function() {
          return this.immediatePropagationStopped === !0
        },
        stopPropagation: p,
        type: s,
        target: e
      }, t.type && (i = c(i, t)), o = ve(f), a = n ? [i].concat(n) : [i], r(o, function(t) {
        i.isImmediatePropagationStopped() || t.apply(e, a)
      }))
    }
  }, function(e, t) {
    Me.prototype[t] = function(t, n, r) {
      for (var i, o = 0, a = this.length; o < a; o++) m(i) ? (i = e(this[o], t, n, r), g(i) && (i = Rr(i))) : Fe(i, e(this[o], t, n, r));
      return g(i) ? i : this
    }, Me.prototype.bind = Me.prototype.on, Me.prototype.unbind = Me.prototype.off
  }), Xe.prototype = {
    put: function(e, t) {
      this[Ke(e, this.nextUid)] = t
    },
    get: function(e) {
      return this[Ke(e, this.nextUid)]
    },
    remove: function(e) {
      var t = this[e = Ke(e, this.nextUid)];
      return delete this[e], t
    }
  };
  var Ti = [function() {
      this.$get = [function() {
        return Xe
      }]
    }],
    Ni = /^([^\(]+?)=>/,
    Vi = /^[^\(]*\(\s*([^\)]*)\)/m,
    ji = /,/,
    Ii = /^\s*(_?)(\S+?)\1\s*$/,
    Di = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    Pi = t("$injector");
  rt.$$annotate = nt;
  var _i = t("$animate"),
    Ri = 1,
    Fi = "ng-animate",
    qi = function() {
      this.$get = p
    },
    Ui = function() {
      var e = new Xe,
        t = [];
      this.$get = ["$$AnimateRunner", "$rootScope", function(n, i) {
        function o(e, t, n) {
          var i = !1;
          return t && (t = w(t) ? t.split(" ") : Jr(t) ? t : [], r(t, function(t) {
            t && (i = !0, e[t] = n)
          })), i
        }

        function a() {
          r(t, function(t) {
            var n = e.get(t);
            if (n) {
              var i = st(t.attr("class")),
                o = "",
                a = "";
              r(n, function(e, t) {
                var n = !!i[t];
                e !== n && (e ? o += (o.length ? " " : "") + t : a += (a.length ? " " : "") + t)
              }), r(t, function(e) {
                o && Re(e, o), a && _e(e, a)
              }), e.remove(t)
            }
          }), t.length = 0
        }

        function s(n, r, s) {
          var u = e.get(n) || {},
            c = o(u, r, !0),
            l = o(u, s, !1);
          (c || l) && (e.put(n, u), t.push(n), 1 === t.length && i.$$postDigest(a))
        }
        return {
          enabled: p,
          on: p,
          off: p,
          pin: p,
          push: function(e, t, r, i) {
            i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass);
            var o = new n;
            return o.complete(), o
          }
        }
      }]
    },
    Li = ["$provide", function(e) {
      var t = this;
      this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
        if (n && "." !== n.charAt(0)) throw _i("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
        var i = n + "-animation";
        t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
      }, this.classNameFilter = function(e) {
        if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
          var t = new RegExp("(\\s+|\\/)" + Fi + "(\\s+|\\/)");
          if (t.test(this.$$classNameFilter.toString())) throw _i("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Fi)
        }
        return this.$$classNameFilter
      }, this.$get = ["$$animateQueue", function(e) {
        function t(e, t, n) {
          if (n) {
            var r = at(n);
            !r || r.parentNode || r.previousElementSibling || (n = null)
          }
          n ? n.after(e) : t.prepend(e)
        }
        return {
          on: e.on,
          off: e.off,
          pin: e.pin,
          enabled: e.enabled,
          cancel: function(e) {
            e.end && e.end()
          },
          enter: function(n, r, i, o) {
            return r = r && Rr(r), i = i && Rr(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", ut(o))
          },
          move: function(n, r, i, o) {
            return r = r && Rr(r), i = i && Rr(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", ut(o))
          },
          leave: function(t, n) {
            return e.push(t, "leave", ut(n), function() {
              t.remove()
            })
          },
          addClass: function(t, n, r) {
            return r = ut(r), r.addClass = ot(r.addclass, n), e.push(t, "addClass", r)
          },
          removeClass: function(t, n, r) {
            return r = ut(r), r.removeClass = ot(r.removeClass, n), e.push(t, "removeClass", r)
          },
          setClass: function(t, n, r, i) {
            return i = ut(i), i.addClass = ot(i.addClass, n), i.removeClass = ot(i.removeClass, r), e.push(t, "setClass", i)
          },
          animate: function(t, n, r, i, o) {
            return o = ut(o), o.from = o.from ? c(o.from, n) : n, o.to = o.to ? c(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = ot(o.tempClasses, i), e.push(t, "animate", o)
          }
        }
      }]
    }],
    Hi = function() {
      this.$get = ["$$rAF", function(e) {
        function t(t) {
          n.push(t), n.length > 1 || e(function() {
            for (var e = 0; e < n.length; e++) n[e]();
            n = []
          })
        }
        var n = [];
        return function() {
          var e = !1;
          return t(function() {
              e = !0
            }),
            function(n) {
              e ? n() : t(n)
            }
        }
      }]
    },
    Bi = function() {
      this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(e, t, n, i, o) {
        function a(e) {
          this.setHost(e);
          var t = n(),
            r = function(e) {
              o(e, 0, !1)
            };
          this._doneCallbacks = [], this._tick = function(e) {
            var n = i[0];
            n && n.hidden ? r(e) : t(e)
          }, this._state = 0
        }
        var s = 0,
          u = 1,
          c = 2;
        return a.chain = function(e, t) {
          function n() {
            return r === e.length ? void t(!0) : void e[r](function(e) {
              return e === !1 ? void t(!1) : (r++, void n())
            })
          }
          var r = 0;
          n()
        }, a.all = function(e, t) {
          function n(n) {
            o = o && n, ++i === e.length && t(o)
          }
          var i = 0,
            o = !0;
          r(e, function(e) {
            e.done(n)
          })
        }, a.prototype = {
          setHost: function(e) {
            this.host = e || {}
          },
          done: function(e) {
            this._state === c ? e() : this._doneCallbacks.push(e)
          },
          progress: p,
          getPromise: function() {
            if (!this.promise) {
              var t = this;
              this.promise = e(function(e, n) {
                t.done(function(t) {
                  t === !1 ? n() : e()
                })
              })
            }
            return this.promise
          },
          then: function(e, t) {
            return this.getPromise().then(e, t)
          },
          catch: function(e) {
            return this.getPromise().catch(e)
          },
          finally: function(e) {
            return this.getPromise().finally(e)
          },
          pause: function() {
            this.host.pause && this.host.pause()
          },
          resume: function() {
            this.host.resume && this.host.resume()
          },
          end: function() {
            this.host.end && this.host.end(), this._resolve(!0)
          },
          cancel: function() {
            this.host.cancel && this.host.cancel(), this._resolve(!1)
          },
          complete: function(e) {
            var t = this;
            t._state === s && (t._state = u, t._tick(function() {
              t._resolve(e)
            }))
          },
          _resolve: function(e) {
            this._state !== c && (r(this._doneCallbacks, function(t) {
              t(e)
            }), this._doneCallbacks.length = 0, this._state = c)
          }
        }, a
      }]
    },
    zi = function() {
      this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
        return function(t, r) {
          function i() {
            return e(function() {
              o(), s || u.complete(), s = !0
            }), u
          }

          function o() {
            a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
          }
          var a = r || {};
          a.$$prepared || (a = F(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
          var s, u = new n;
          return {
            start: i,
            end: i
          }
        }
      }]
    },
    Wi = t("$compile"),
    Gi = new pt;
  dt.$inject = ["$provide", "$$sanitizeUriProvider"], $t.prototype.isFirstChange = function() {
    return this.previousValue === Gi
  };
  var Zi = /^((?:x|data)[\:\-_])/i,
    Ji = t("$controller"),
    Yi = /^(\S+)(\s+as\s+([\w$]+))?$/,
    Ki = function() {
      this.$get = ["$document", function(e) {
        return function(t) {
          return t ? !t.nodeType && t instanceof Rr && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
        }
      }]
    },
    Xi = "application/json",
    Qi = {
      "Content-Type": Xi + ";charset=utf-8"
    },
    eo = /^\[|^\{(?!\{)/,
    to = {
      "[": /]$/,
      "{": /}$/
    },
    no = /^\)\]\}',?\n/,
    ro = t("$http"),
    io = function(e) {
      return function() {
        throw ro("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
      }
    },
    oo = Gr.$interpolateMinErr = t("$interpolate");
  oo.throwNoconcat = function(e) {
    throw oo("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
  }, oo.interr = function(e, t) {
    return oo("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
  };
  var ao = function() {
      this.$get = ["$window", function(e) {
        function t(e) {
          var t = function(e) {
            t.data = e, t.called = !0
          };
          return t.id = e, t
        }
        var n = e.angular.callbacks,
          r = {};
        return {
          createCallback: function(e) {
            var i = "_" + (n.$$counter++).toString(36),
              o = "angular.callbacks." + i,
              a = t(i);
            return r[o] = n[i] = a, o
          },
          wasCalled: function(e) {
            return r[e].called
          },
          getResponse: function(e) {
            return r[e].data
          },
          removeCallback: function(e) {
            var t = r[e];
            delete n[t.id], delete r[e]
          }
        }
      }]
    },
    so = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    uo = {
      http: 80,
      https: 443,
      ftp: 21
    },
    co = t("$location"),
    lo = {
      $$absUrl: "",
      $$html5: !1,
      $$replace: !1,
      absUrl: Yt("$$absUrl"),
      url: function(e) {
        if (m(e)) return this.$$url;
        var t = so.exec(e);
        return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
      },
      protocol: Yt("$$protocol"),
      host: Yt("$$host"),
      port: Yt("$$port"),
      path: Kt("$$path", function(e) {
        return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
      }),
      search: function(e, t) {
        switch (arguments.length) {
          case 0:
            return this.$$search;
          case 1:
            if (w(e) || x(e)) e = e.toString(), this.$$search = X(e);
            else {
              if (!y(e)) throw co("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
              e = F(e, {}), r(e, function(t, n) {
                null == t && delete e[n]
              }), this.$$search = e
            }
            break;
          default:
            m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
        }
        return this.$$compose(), this
      },
      hash: Kt("$$hash", function(e) {
        return null !== e ? e.toString() : ""
      }),
      replace: function() {
        return this.$$replace = !0, this
      }
    };
  r([Jt, Zt, Gt], function(e) {
    e.prototype = Object.create(lo), e.prototype.state = function(t) {
      if (!arguments.length) return this.$$state;
      if (e !== Gt || !this.$$html5) throw co("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
      return this.$$state = m(t) ? null : t, this
    }
  });
  var fo = t("$parse"),
    ho = Function.prototype.call,
    po = Function.prototype.apply,
    $o = Function.prototype.bind,
    vo = de();
  r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
    vo[e] = !0
  });
  var mo = {
      n: "\n",
      f: "\f",
      r: "\r",
      t: "\t",
      v: "\v",
      "'": "'",
      '"': '"'
    },
    go = function(e) {
      this.options = e
    };
  go.prototype = {
    constructor: go,
    lex: function(e) {
      for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
        var t = this.text.charAt(this.index);
        if ('"' === t || "'" === t) this.readString(t);
        else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
        else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
        else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: t
        }), this.index++;
        else if (this.isWhitespace(t)) this.index++;
        else {
          var n = t + this.peek(),
            r = n + this.peek(2),
            i = vo[t],
            o = vo[n],
            a = vo[r];
          if (i || o || a) {
            var s = a ? r : o ? n : t;
            this.tokens.push({
              index: this.index,
              text: s,
              operator: !0
            }), this.index += s.length
          } else this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
      }
      return this.tokens
    },
    is: function(e, t) {
      return t.indexOf(e) !== -1
    },
    peek: function(e) {
      var t = e || 1;
      return this.index + t < this.text.length && this.text.charAt(this.index + t)
    },
    isNumber: function(e) {
      return "0" <= e && e <= "9" && "string" == typeof e
    },
    isWhitespace: function(e) {
      return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
    },
    isIdentifierStart: function(e) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
    },
    isValidIdentifierStart: function(e) {
      return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
    },
    isIdentifierContinue: function(e) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
    },
    isValidIdentifierContinue: function(e, t) {
      return this.isValidIdentifierStart(e, t) || this.isNumber(e)
    },
    codePointAt: function(e) {
      return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
    },
    peekMultichar: function() {
      var e = this.text.charAt(this.index),
        t = this.peek();
      if (!t) return e;
      var n = e.charCodeAt(0),
        r = t.charCodeAt(0);
      return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? e + t : e
    },
    isExpOperator: function(e) {
      return "-" === e || "+" === e || this.isNumber(e)
    },
    throwError: function(e, t, n) {
      n = n || this.index;
      var r = g(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
      throw fo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
    },
    readNumber: function() {
      for (var e = "", t = this.index; this.index < this.text.length;) {
        var n = jr(this.text.charAt(this.index));
        if ("." == n || this.isNumber(n)) e += n;
        else {
          var r = this.peek();
          if ("e" == n && this.isExpOperator(r)) e += n;
          else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
          else {
            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      this.tokens.push({
        index: t,
        text: e,
        constant: !0,
        value: Number(e)
      })
    },
    readIdent: function() {
      var e = this.index;
      for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var t = this.peekMultichar();
        if (!this.isIdentifierContinue(t)) break;
        this.index += t.length
      }
      this.tokens.push({
        index: e,
        text: this.text.slice(e, this.index),
        identifier: !0
      })
    },
    readString: function(e) {
      var t = this.index;
      this.index++;
      for (var n = "", r = e, i = !1; this.index < this.text.length;) {
        var o = this.text.charAt(this.index);
        if (r += o, i) {
          if ("u" === o) {
            var a = this.text.substring(this.index + 1, this.index + 5);
            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
          } else {
            var s = mo[o];
            n += s || o
          }
          i = !1
        } else if ("\\" === o) i = !0;
        else {
          if (o === e) return this.index++, void this.tokens.push({
            index: t,
            text: r,
            constant: !0,
            value: n
          });
          n += o
        }
        this.index++
      }
      this.throwError("Unterminated quote", t)
    }
  };
  var yo = function(e, t) {
    this.lexer = e, this.options = t
  };
  yo.Program = "Program", yo.ExpressionStatement = "ExpressionStatement", yo.AssignmentExpression = "AssignmentExpression", yo.ConditionalExpression = "ConditionalExpression", yo.LogicalExpression = "LogicalExpression", yo.BinaryExpression = "BinaryExpression", yo.UnaryExpression = "UnaryExpression", yo.CallExpression = "CallExpression", yo.MemberExpression = "MemberExpression", yo.Identifier = "Identifier", yo.Literal = "Literal", yo.ArrayExpression = "ArrayExpression", yo.Property = "Property", yo.ObjectExpression = "ObjectExpression", yo.ThisExpression = "ThisExpression", yo.LocalsExpression = "LocalsExpression", yo.NGValueParameter = "NGValueParameter", yo.prototype = {
    ast: function(e) {
      this.text = e, this.tokens = this.lexer.lex(e);
      var t = this.program();
      return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
    },
    program: function() {
      for (var e = [];;)
        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
          type: yo.Program,
          body: e
        }
    },
    expressionStatement: function() {
      return {
        type: yo.ExpressionStatement,
        expression: this.filterChain()
      }
    },
    filterChain: function() {
      for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
      return t
    },
    expression: function() {
      return this.assignment()
    },
    assignment: function() {
      var e = this.ternary();
      return this.expect("=") && (e = {
        type: yo.AssignmentExpression,
        left: e,
        right: this.assignment(),
        operator: "="
      }), e
    },
    ternary: function() {
      var e, t, n = this.logicalOR();
      return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
        type: yo.ConditionalExpression,
        test: n,
        alternate: e,
        consequent: t
      }) : n
    },
    logicalOR: function() {
      for (var e = this.logicalAND(); this.expect("||");) e = {
        type: yo.LogicalExpression,
        operator: "||",
        left: e,
        right: this.logicalAND()
      };
      return e
    },
    logicalAND: function() {
      for (var e = this.equality(); this.expect("&&");) e = {
        type: yo.LogicalExpression,
        operator: "&&",
        left: e,
        right: this.equality()
      };
      return e
    },
    equality: function() {
      for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
        type: yo.BinaryExpression,
        operator: e.text,
        left: t,
        right: this.relational()
      };
      return t
    },
    relational: function() {
      for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
        type: yo.BinaryExpression,
        operator: e.text,
        left: t,
        right: this.additive()
      };
      return t
    },
    additive: function() {
      for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
        type: yo.BinaryExpression,
        operator: e.text,
        left: t,
        right: this.multiplicative()
      };
      return t
    },
    multiplicative: function() {
      for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
        type: yo.BinaryExpression,
        operator: e.text,
        left: t,
        right: this.unary()
      };
      return t
    },
    unary: function() {
      var e;
      return (e = this.expect("+", "-", "!")) ? {
        type: yo.UnaryExpression,
        operator: e.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary()
    },
    primary: function() {
      var e;
      this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = F(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
        type: yo.Literal,
        value: this.options.literals[this.consume().text]
      } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
      for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
        type: yo.CallExpression,
        callee: e,
        arguments: this.parseArguments()
      }, this.consume(")")) : "[" === t.text ? (e = {
        type: yo.MemberExpression,
        object: e,
        property: this.expression(),
        computed: !0
      }, this.consume("]")) : "." === t.text ? e = {
        type: yo.MemberExpression,
        object: e,
        property: this.identifier(),
        computed: !1
      } : this.throwError("IMPOSSIBLE");
      return e
    },
    filter: function(e) {
      for (var t = [e], n = {
          type: yo.CallExpression,
          callee: this.identifier(),
          arguments: t,
          filter: !0
        }; this.expect(":");) t.push(this.expression());
      return n
    },
    parseArguments: function() {
      var e = [];
      if (")" !== this.peekToken().text)
        do e.push(this.filterChain()); while (this.expect(","));
      return e
    },
    identifier: function() {
      var e = this.consume();
      return e.identifier || this.throwError("is not a valid identifier", e), {
        type: yo.Identifier,
        name: e.text
      }
    },
    constant: function() {
      return {
        type: yo.Literal,
        value: this.consume().value
      }
    },
    arrayDeclaration: function() {
      var e = [];
      if ("]" !== this.peekToken().text)
        do {
          if (this.peek("]")) break;
          e.push(this.expression())
        } while (this.expect(","));
      return this.consume("]"), {
        type: yo.ArrayExpression,
        elements: e
      }
    },
    object: function() {
      var e, t = [];
      if ("}" !== this.peekToken().text)
        do {
          if (this.peek("}")) break;
          e = {
            type: yo.Property,
            kind: "init"
          }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
        } while (this.expect(","));
      return this.consume("}"), {
        type: yo.ObjectExpression,
        properties: t
      }
    },
    throwError: function(e, t) {
      throw fo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
    },
    consume: function(e) {
      if (0 === this.tokens.length) throw fo("ueoe", "Unexpected end of expression: {0}", this.text);
      var t = this.expect(e);
      return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
    },
    peekToken: function() {
      if (0 === this.tokens.length) throw fo("ueoe", "Unexpected end of expression: {0}", this.text);
      return this.tokens[0]
    },
    peek: function(e, t, n, r) {
      return this.peekAhead(0, e, t, n, r)
    },
    peekAhead: function(e, t, n, r, i) {
      if (this.tokens.length > e) {
        var o = this.tokens[e],
          a = o.text;
        if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
      }
      return !1
    },
    expect: function(e, t, n, r) {
      var i = this.peek(e, t, n, r);
      return !!i && (this.tokens.shift(), i)
    },
    selfReferential: {
      this: {
        type: yo.ThisExpression
      },
      $locals: {
        type: yo.LocalsExpression
      }
    }
  }, $n.prototype = {
    compile: function(e, t) {
      var n = this,
        i = this.astBuilder.ast(e);
      this.state = {
        nextId: 0,
        filters: {},
        expensiveChecks: t,
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      }, cn(i, n.$filter);
      var o, a = "";
      if (this.stage = "assign", o = hn(i)) {
        this.state.computing = "assign";
        var s = this.nextId();
        this.recurse(o, s), this.return_(s), a = "fn.assign=" + this.generateFunction("assign", "s,v,l")
      }
      var u = ln(i.body);
      n.stage = "inputs", r(u, function(e, t) {
        var r = "fn" + t;
        n.state[r] = {
          vars: [],
          body: [],
          own: {}
        }, n.state.computing = r;
        var i = n.nextId();
        n.recurse(e, i), n.return_(i), n.state.inputs.push(r), e.watchId = t
      }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
      var c = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + a + this.watchFns() + "return fn;",
        l = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", c)(this.$filter, en, nn, rn, tn, on, an, sn, e);
      return this.state = this.stage = void 0, l.literal = pn(i), l.constant = dn(i), l
    },
    USE: "use",
    STRICT: "strict",
    watchFns: function() {
      var e = [],
        t = this.state.inputs,
        n = this;
      return r(t, function(t) {
        e.push("var " + t + "=" + n.generateFunction(t, "s"))
      }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
    },
    generateFunction: function(e, t) {
      return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
    },
    filterPrefix: function() {
      var e = [],
        t = this;
      return r(this.state.filters, function(n, r) {
        e.push(n + "=$filter(" + t.escape(r) + ")")
      }), e.length ? "var " + e.join(",") + ";" : ""
    },
    varsPrefix: function(e) {
      return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
    },
    body: function(e) {
      return this.state[e].body.join("")
    },
    recurse: function(e, t, n, i, o, a) {
      var s, u, c, l, f, h = this;
      if (i = i || p, !a && g(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, i, o, !0));
      switch (e.type) {
        case yo.Program:
          r(e.body, function(t, n) {
            h.recurse(t.expression, void 0, void 0, function(e) {
              u = e
            }), n !== e.body.length - 1 ? h.current().body.push(u, ";") : h.return_(u)
          });
          break;
        case yo.Literal:
          l = this.escape(e.value), this.assign(t, l), i(l);
          break;
        case yo.UnaryExpression:
          this.recurse(e.argument, void 0, void 0, function(e) {
            u = e
          }), l = e.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(t, l), i(l);
          break;
        case yo.BinaryExpression:
          this.recurse(e.left, void 0, void 0, function(e) {
            s = e
          }), this.recurse(e.right, void 0, void 0, function(e) {
            u = e
          }), l = "+" === e.operator ? this.plus(s, u) : "-" === e.operator ? this.ifDefined(s, 0) + e.operator + this.ifDefined(u, 0) : "(" + s + ")" + e.operator + "(" + u + ")", this.assign(t, l), i(l);
          break;
        case yo.LogicalExpression:
          t = t || this.nextId(), h.recurse(e.left, t), h.if_("&&" === e.operator ? t : h.not(t), h.lazyRecurse(e.right, t)), i(t);
          break;
        case yo.ConditionalExpression:
          t = t || this.nextId(), h.recurse(e.test, t), h.if_(t, h.lazyRecurse(e.alternate, t), h.lazyRecurse(e.consequent, t)), i(t);
          break;
        case yo.Identifier:
          t = t || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), en(e.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)), function() {
            h.if_("inputs" === h.stage || "s", function() {
              o && 1 !== o && h.if_(h.not(h.nonComputedMember("s", e.name)), h.lazyAssign(h.nonComputedMember("s", e.name), "{}")), h.assign(t, h.nonComputedMember("s", e.name))
            })
          }, t && h.lazyAssign(t, h.nonComputedMember("l", e.name))), (h.state.expensiveChecks || mn(e.name)) && h.addEnsureSafeObject(t), i(t);
          break;
        case yo.MemberExpression:
          s = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), h.recurse(e.object, s, void 0, function() {
            h.if_(h.notNull(s), function() {
              o && 1 !== o && h.addEnsureSafeAssignContext(s), e.computed ? (u = h.nextId(), h.recurse(e.property, u), h.getStringValue(u), h.addEnsureSafeMemberName(u), o && 1 !== o && h.if_(h.not(h.computedMember(s, u)), h.lazyAssign(h.computedMember(s, u), "{}")), l = h.ensureSafeObject(h.computedMember(s, u)), h.assign(t, l), n && (n.computed = !0, n.name = u)) : (en(e.property.name), o && 1 !== o && h.if_(h.not(h.nonComputedMember(s, e.property.name)), h.lazyAssign(h.nonComputedMember(s, e.property.name), "{}")), l = h.nonComputedMember(s, e.property.name), (h.state.expensiveChecks || mn(e.property.name)) && (l = h.ensureSafeObject(l)), h.assign(t, l), n && (n.computed = !1, n.name = e.property.name))
            }, function() {
              h.assign(t, "undefined")
            }), i(t)
          }, !!o);
          break;
        case yo.CallExpression:
          t = t || this.nextId(), e.filter ? (u = h.filter(e.callee.name), c = [], r(e.arguments, function(e) {
            var t = h.nextId();
            h.recurse(e, t), c.push(t)
          }), l = u + "(" + c.join(",") + ")", h.assign(t, l), i(t)) : (u = h.nextId(), s = {}, c = [], h.recurse(e.callee, u, s, function() {
            h.if_(h.notNull(u), function() {
              h.addEnsureSafeFunction(u), r(e.arguments, function(e) {
                h.recurse(e, h.nextId(), void 0, function(e) {
                  c.push(h.ensureSafeObject(e))
                })
              }), s.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(s.context), l = h.member(s.context, s.name, s.computed) + "(" + c.join(",") + ")") : l = u + "(" + c.join(",") + ")", l = h.ensureSafeObject(l), h.assign(t, l)
            }, function() {
              h.assign(t, "undefined")
            }), i(t)
          }));
          break;
        case yo.AssignmentExpression:
          if (u = this.nextId(), s = {}, !fn(e.left)) throw fo("lval", "Trying to assign a value to a non l-value");
          this.recurse(e.left, void 0, s, function() {
            h.if_(h.notNull(s.context), function() {
              h.recurse(e.right, u), h.addEnsureSafeObject(h.member(s.context, s.name, s.computed)), h.addEnsureSafeAssignContext(s.context), l = h.member(s.context, s.name, s.computed) + e.operator + u, h.assign(t, l), i(t || l)
            })
          }, 1);
          break;
        case yo.ArrayExpression:
          c = [], r(e.elements, function(e) {
            h.recurse(e, h.nextId(), void 0, function(e) {
              c.push(e)
            })
          }), l = "[" + c.join(",") + "]", this.assign(t, l), i(l);
          break;
        case yo.ObjectExpression:
          c = [], f = !1, r(e.properties, function(e) {
            e.computed && (f = !0)
          }), f ? (t = t || this.nextId(), this.assign(t, "{}"), r(e.properties, function(e) {
            e.computed ? (s = h.nextId(), h.recurse(e.key, s)) : s = e.key.type === yo.Identifier ? e.key.name : "" + e.key.value, u = h.nextId(), h.recurse(e.value, u), h.assign(h.member(t, s, e.computed), u)
          })) : (r(e.properties, function(t) {
            h.recurse(t.value, e.constant ? void 0 : h.nextId(), void 0, function(e) {
              c.push(h.escape(t.key.type === yo.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
            })
          }), l = "{" + c.join(",") + "}", this.assign(t, l)), i(t || l);
          break;
        case yo.ThisExpression:
          this.assign(t, "s"), i("s");
          break;
        case yo.LocalsExpression:
          this.assign(t, "l"), i("l");
          break;
        case yo.NGValueParameter:
          this.assign(t, "v"), i("v")
      }
    },
    getHasOwnProperty: function(e, t) {
      var n = e + "." + t,
        r = this.current().own;
      return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
    },
    assign: function(e, t) {
      if (e) return this.current().body.push(e, "=", t, ";"), e
    },
    filter: function(e) {
      return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
    },
    ifDefined: function(e, t) {
      return "ifDefined(" + e + "," + this.escape(t) + ")"
    },
    plus: function(e, t) {
      return "plus(" + e + "," + t + ")"
    },
    return_: function(e) {
      this.current().body.push("return ", e, ";")
    },
    if_: function(e, t, n) {
      if (e === !0) t();
      else {
        var r = this.current().body;
        r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
      }
    },
    not: function(e) {
      return "!(" + e + ")"
    },
    notNull: function(e) {
      return e + "!=null"
    },
    nonComputedMember: function(e, t) {
      var n = /[$_a-zA-Z][$_a-zA-Z0-9]*/,
        r = /[^$_a-zA-Z0-9]/g;
      return n.test(t) ? e + "." + t : e + '["' + t.replace(r, this.stringEscapeFn) + '"]'
    },
    computedMember: function(e, t) {
      return e + "[" + t + "]"
    },
    member: function(e, t, n) {
      return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
    },
    addEnsureSafeObject: function(e) {
      this.current().body.push(this.ensureSafeObject(e), ";")
    },
    addEnsureSafeMemberName: function(e) {
      this.current().body.push(this.ensureSafeMemberName(e), ";")
    },
    addEnsureSafeFunction: function(e) {
      this.current().body.push(this.ensureSafeFunction(e), ";")
    },
    addEnsureSafeAssignContext: function(e) {
      this.current().body.push(this.ensureSafeAssignContext(e), ";")
    },
    ensureSafeObject: function(e) {
      return "ensureSafeObject(" + e + ",text)"
    },
    ensureSafeMemberName: function(e) {
      return "ensureSafeMemberName(" + e + ",text)"
    },
    ensureSafeFunction: function(e) {
      return "ensureSafeFunction(" + e + ",text)"
    },
    getStringValue: function(e) {
      this.assign(e, "getStringValue(" + e + ")")
    },
    ensureSafeAssignContext: function(e) {
      return "ensureSafeAssignContext(" + e + ",text)"
    },
    lazyRecurse: function(e, t, n, r, i, o) {
      var a = this;
      return function() {
        a.recurse(e, t, n, r, i, o)
      }
    },
    lazyAssign: function(e, t) {
      var n = this;
      return function() {
        n.assign(e, t)
      }
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function(e) {
      return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
    },
    escape: function(e) {
      if (w(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
      if (x(e)) return e.toString();
      if (e === !0) return "true";
      if (e === !1) return "false";
      if (null === e) return "null";
      if ("undefined" == typeof e) return "undefined";
      throw fo("esc", "IMPOSSIBLE")
    },
    nextId: function(e, t) {
      var n = "v" + this.state.nextId++;
      return e || this.current().vars.push(n + (t ? "=" + t : "")), n
    },
    current: function() {
      return this.state[this.state.computing]
    }
  }, vn.prototype = {
    compile: function(e, t) {
      var n = this,
        i = this.astBuilder.ast(e);
      this.expression = e, this.expensiveChecks = t, cn(i, n.$filter);
      var o, a;
      (o = hn(i)) && (a = this.recurse(o));
      var s, u = ln(i.body);
      u && (s = [], r(u, function(e, t) {
        var r = n.recurse(e);
        e.input = r, s.push(r), e.watchId = t
      }));
      var c = [];
      r(i.body, function(e) {
        c.push(n.recurse(e.expression))
      });
      var l = 0 === i.body.length ? p : 1 === i.body.length ? c[0] : function(e, t) {
        var n;
        return r(c, function(r) {
          n = r(e, t)
        }), n
      };
      return a && (l.assign = function(e, t, n) {
        return a(e, n, t)
      }), s && (l.inputs = s), l.literal = pn(i), l.constant = dn(i), l
    },
    recurse: function(e, t, n) {
      var i, o, a, s = this;
      if (e.input) return this.inputs(e.input, e.watchId);
      switch (e.type) {
        case yo.Literal:
          return this.value(e.value, t);
        case yo.UnaryExpression:
          return o = this.recurse(e.argument), this["unary" + e.operator](o, t);
        case yo.BinaryExpression:
          return i = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](i, o, t);
        case yo.LogicalExpression:
          return i = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](i, o, t);
        case yo.ConditionalExpression:
          return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
        case yo.Identifier:
          return en(e.name, s.expression), s.identifier(e.name, s.expensiveChecks || mn(e.name), t, n, s.expression);
        case yo.MemberExpression:
          return i = this.recurse(e.object, !1, !!n), e.computed || (en(e.property.name, s.expression), o = e.property.name), e.computed && (o = this.recurse(e.property)), e.computed ? this.computedMember(i, o, t, n, s.expression) : this.nonComputedMember(i, o, s.expensiveChecks, t, n, s.expression);
        case yo.CallExpression:
          return a = [], r(e.arguments, function(e) {
            a.push(s.recurse(e))
          }), e.filter && (o = this.$filter(e.callee.name)), e.filter || (o = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, i) {
            for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](e, n, r, i));
            var c = o.apply(void 0, s, i);
            return t ? {
              context: void 0,
              name: void 0,
              value: c
            } : c
          } : function(e, n, r, i) {
            var u, c = o(e, n, r, i);
            if (null != c.value) {
              nn(c.context, s.expression), rn(c.value, s.expression);
              for (var l = [], f = 0; f < a.length; ++f) l.push(nn(a[f](e, n, r, i), s.expression));
              u = nn(c.value.apply(c.context, l), s.expression)
            }
            return t ? {
              value: u
            } : u
          };
        case yo.AssignmentExpression:
          return i = this.recurse(e.left, !0, 1), o = this.recurse(e.right),
            function(e, n, r, a) {
              var u = i(e, n, r, a),
                c = o(e, n, r, a);
              return nn(u.value, s.expression), on(u.context), u.context[u.name] = c, t ? {
                value: c
              } : c
            };
        case yo.ArrayExpression:
          return a = [], r(e.elements, function(e) {
              a.push(s.recurse(e))
            }),
            function(e, n, r, i) {
              for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](e, n, r, i));
              return t ? {
                value: o
              } : o
            };
        case yo.ObjectExpression:
          return a = [], r(e.properties, function(e) {
              e.computed ? a.push({
                key: s.recurse(e.key),
                computed: !0,
                value: s.recurse(e.value)
              }) : a.push({
                key: e.key.type === yo.Identifier ? e.key.name : "" + e.key.value,
                computed: !1,
                value: s.recurse(e.value)
              })
            }),
            function(e, n, r, i) {
              for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(e, n, r, i)] = a[s].value(e, n, r, i) : o[a[s].key] = a[s].value(e, n, r, i);
              return t ? {
                value: o
              } : o
            };
        case yo.ThisExpression:
          return function(e) {
            return t ? {
              value: e
            } : e
          };
        case yo.LocalsExpression:
          return function(e, n) {
            return t ? {
              value: n
            } : n
          };
        case yo.NGValueParameter:
          return function(e, n, r) {
            return t ? {
              value: r
            } : r
          }
      }
    },
    "unary+": function(e, t) {
      return function(n, r, i, o) {
        var a = e(n, r, i, o);
        return a = g(a) ? +a : 0, t ? {
          value: a
        } : a
      }
    },
    "unary-": function(e, t) {
      return function(n, r, i, o) {
        var a = e(n, r, i, o);
        return a = g(a) ? -a : 0, t ? {
          value: a
        } : a
      }
    },
    "unary!": function(e, t) {
      return function(n, r, i, o) {
        var a = !e(n, r, i, o);
        return t ? {
          value: a
        } : a
      }
    },
    "binary+": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a),
          u = t(r, i, o, a),
          c = sn(s, u);
        return n ? {
          value: c
        } : c
      }
    },
    "binary-": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a),
          u = t(r, i, o, a),
          c = (g(s) ? s : 0) - (g(u) ? u : 0);
        return n ? {
          value: c
        } : c
      }
    },
    "binary*": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) * t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary/": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) / t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary%": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) % t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary===": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) === t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary!==": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) !== t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary==": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) == t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary!=": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) != t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary<": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) < t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary>": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) > t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary<=": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) <= t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary>=": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) >= t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary&&": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) && t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "binary||": function(e, t, n) {
      return function(r, i, o, a) {
        var s = e(r, i, o, a) || t(r, i, o, a);
        return n ? {
          value: s
        } : s
      }
    },
    "ternary?:": function(e, t, n, r) {
      return function(i, o, a, s) {
        var u = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
        return r ? {
          value: u
        } : u
      }
    },
    value: function(e, t) {
      return function() {
        return t ? {
          context: void 0,
          name: void 0,
          value: e
        } : e
      }
    },
    identifier: function(e, t, n, r, i) {
      return function(o, a, s, u) {
        var c = a && e in a ? a : o;
        r && 1 !== r && c && !c[e] && (c[e] = {});
        var l = c ? c[e] : void 0;
        return t && nn(l, i), n ? {
          context: c,
          name: e,
          value: l
        } : l
      }
    },
    computedMember: function(e, t, n, r, i) {
      return function(o, a, s, u) {
        var c, l, f = e(o, a, s, u);
        return null != f && (c = t(o, a, s, u), c = tn(c), en(c, i), r && 1 !== r && (on(f), f && !f[c] && (f[c] = {})), l = f[c], nn(l, i)), n ? {
          context: f,
          name: c,
          value: l
        } : l
      }
    },
    nonComputedMember: function(e, t, n, r, i, o) {
      return function(a, s, u, c) {
        var l = e(a, s, u, c);
        i && 1 !== i && (on(l), l && !l[t] && (l[t] = {}));
        var f = null != l ? l[t] : void 0;
        return (n || mn(t)) && nn(f, o), r ? {
          context: l,
          name: t,
          value: f
        } : f
      }
    },
    inputs: function(e, t) {
      return function(n, r, i, o) {
        return o ? o[t] : e(n, r, i)
      }
    }
  };
  var bo = function(e, t, n) {
    this.lexer = e, this.$filter = t, this.options = n, this.ast = new yo(e, n), this.astCompiler = n.csp ? new vn(this.ast, t) : new $n(this.ast, t)
  };
  bo.prototype = {
    constructor: bo,
    parse: function(e) {
      return this.astCompiler.compile(e, this.options.expensiveChecks)
    }
  };
  var wo = Object.prototype.valueOf,
    xo = t("$sce"),
    Co = {
      HTML: "html",
      CSS: "css",
      URL: "url",
      RESOURCE_URL: "resourceUrl",
      JS: "js"
    },
    So = t("$compile"),
    Eo = e.document.createElement("a"),
    Ao = In(e.location.href);
  _n.$inject = ["$document"], Fn.$inject = ["$provide"];
  var ko = 22,
    Oo = ".",
    Mo = "0";
  Bn.$inject = ["$locale"], zn.$inject = ["$locale"];
  var To = {
      yyyy: Yn("FullYear", 4, 0, !1, !0),
      yy: Yn("FullYear", 2, 0, !0, !0),
      y: Yn("FullYear", 1, 0, !1, !0),
      MMMM: Kn("Month"),
      MMM: Kn("Month", !0),
      MM: Yn("Month", 2, 1),
      M: Yn("Month", 1, 1),
      LLLL: Kn("Month", !1, !0),
      dd: Yn("Date", 2),
      d: Yn("Date", 1),
      HH: Yn("Hours", 2),
      H: Yn("Hours", 1),
      hh: Yn("Hours", 2, -12),
      h: Yn("Hours", 1, -12),
      mm: Yn("Minutes", 2),
      m: Yn("Minutes", 1),
      ss: Yn("Seconds", 2),
      s: Yn("Seconds", 1),
      sss: Yn("Milliseconds", 3),
      EEEE: Kn("Day"),
      EEE: Kn("Day", !0),
      a: nr,
      Z: Xn,
      ww: tr(2),
      w: tr(1),
      G: rr,
      GG: rr,
      GGG: rr,
      GGGG: ir
    },
    No = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
    Vo = /^\-?\d+$/;
  or.$inject = ["$locale"];
  var jo = $(jr),
    Io = $(Ir);
  cr.$inject = ["$parse"];
  var Do = $({
      restrict: "E",
      compile: function(e, t) {
        if (!t.href && !t.xlinkHref) return function(e, t) {
          if ("a" === t[0].nodeName.toLowerCase()) {
            var n = "[object SVGAnimatedString]" === Br.call(t.prop("href")) ? "xlink:href" : "href";
            t.on("click", function(e) {
              t.attr(n) || e.preventDefault()
            })
          }
        }
      }
    }),
    Po = {};
  r(ki, function(e, t) {
    function n(e, n, i) {
      e.$watch(i[r], function(e) {
        i.$set(t, !!e)
      })
    }
    if ("multiple" != e) {
      var r = vt("ng-" + t),
        i = n;
      "checked" === e && (i = function(e, t, i) {
        i.ngModel !== i[r] && n(e, t, i)
      }), Po[r] = function() {
        return {
          restrict: "A",
          priority: 100,
          link: i
        }
      }
    }
  }), r(Mi, function(e, t) {
    Po[t] = function() {
      return {
        priority: 100,
        link: function(e, n, r) {
          if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
            var i = r.ngPattern.match(Tr);
            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
          }
          e.$watch(r[t], function(e) {
            r.$set(t, e)
          })
        }
      }
    }
  }), r(["src", "srcset", "href"], function(e) {
    var t = vt("ng-" + e);
    Po[t] = function() {
      return {
        priority: 99,
        link: function(n, r, i) {
          var o = e,
            a = e;
          "href" === e && "[object SVGAnimatedString]" === Br.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
            return t ? (i.$set(a, t), void(_r && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
          })
        }
      }
    }
  });
  var _o = {
      $addControl: p,
      $$renameControl: fr,
      $removeControl: p,
      $setValidity: p,
      $setDirty: p,
      $setPristine: p,
      $setSubmitted: p
    },
    Ro = "ng-submitted";
  hr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
  var Fo = function(e) {
      return ["$timeout", "$parse", function(t, n) {
        function r(e) {
          return "" === e ? n('this[""]').assign : n(e).assign || p
        }
        var i = {
          name: "form",
          restrict: e ? "EAC" : "E",
          require: ["form", "^^?form"],
          controller: hr,
          compile: function(n, i) {
            n.addClass(wa).addClass(ya);
            var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
            return {
              pre: function(e, n, i, a) {
                var s = a[0];
                if (!("action" in i)) {
                  var u = function(t) {
                    e.$apply(function() {
                      s.$commitViewValue(), s.$setSubmitted()
                    }), t.preventDefault()
                  };
                  di(n[0], "submit", u), n.on("$destroy", function() {
                    t(function() {
                      $i(n[0], "submit", u)
                    }, 0, !1)
                  })
                }
                var l = a[1] || s.$$parentForm;
                l.$addControl(s);
                var f = o ? r(s.$name) : p;
                o && (f(e, s), i.$observe(o, function(t) {
                  s.$name !== t && (f(e, void 0), s.$$parentForm.$$renameControl(s, t), (f = r(s.$name))(e, s))
                })), n.on("$destroy", function() {
                  s.$$parentForm.$removeControl(s), f(e, void 0), c(s, _o)
                })
              }
            }
          }
        };
        return i
      }]
    },
    qo = Fo(),
    Uo = Fo(!0),
    Lo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
    Ho = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
    Bo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
    zo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
    Wo = /^(\d{4,})-(\d{2})-(\d{2})$/,
    Go = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Zo = /^(\d{4,})-W(\d\d)$/,
    Jo = /^(\d{4,})-(\d\d)$/,
    Yo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
    Ko = "keydown wheel mousedown",
    Xo = de();
  r("date,datetime-local,month,time,week".split(","), function(e) {
    Xo[e] = !0
  });
  var Qo = {
      text: dr,
      date: gr("date", Wo, mr(Wo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
      "datetime-local": gr("datetimelocal", Go, mr(Go, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
      time: gr("time", Yo, mr(Yo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
      week: gr("week", Zo, vr, "yyyy-Www"),
      month: gr("month", Jo, mr(Jo, ["yyyy", "MM"]), "yyyy-MM"),
      number: br,
      url: wr,
      email: xr,
      radio: Cr,
      checkbox: Er,
      hidden: p,
      button: p,
      submit: p,
      reset: p,
      file: p
    },
    ea = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
      return {
        restrict: "E",
        require: ["?ngModel"],
        link: {
          pre: function(i, o, a, s) {
            s[0] && (Qo[jr(a.type)] || Qo.text)(i, o, a, s[0], t, e, n, r)
          }
        }
      }
    }],
    ta = /^(true|false|\d+)$/,
    na = function() {
      return {
        restrict: "A",
        priority: 100,
        compile: function(e, t) {
          return ta.test(t.ngValue) ? function(e, t, n) {
            n.$set("value", e.$eval(n.ngValue))
          } : function(e, t, n) {
            e.$watch(n.ngValue, function(e) {
              n.$set("value", e)
            })
          }
        }
      }
    },
    ra = ["$compile", function(e) {
      return {
        restrict: "AC",
        compile: function(t) {
          return e.$$addBindingClass(t),
            function(t, n, r) {
              e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                n.textContent = m(e) ? "" : e
              })
            }
        }
      }
    }],
    ia = ["$interpolate", "$compile", function(e, t) {
      return {
        compile: function(n) {
          return t.$$addBindingClass(n),
            function(n, r, i) {
              var o = e(r.attr(i.$attr.ngBindTemplate));
              t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                r.textContent = m(e) ? "" : e
              })
            }
        }
      }
    }],
    oa = ["$sce", "$parse", "$compile", function(e, t, n) {
      return {
        restrict: "A",
        compile: function(r, i) {
          var o = t(i.ngBindHtml),
            a = t(i.ngBindHtml, function(t) {
              return e.valueOf(t)
            });
          return n.$$addBindingClass(r),
            function(t, r, i) {
              n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                var n = o(t);
                r.html(e.getTrustedHtml(n) || "")
              })
            }
        }
      }
    }],
    aa = $({
      restrict: "A",
      require: "ngModel",
      link: function(e, t, n, r) {
        r.$viewChangeListeners.push(function() {
          e.$eval(n.ngChange)
        })
      }
    }),
    sa = Ar("", !0),
    ua = Ar("Odd", 0),
    ca = Ar("Even", 1),
    la = lr({
      compile: function(e, t) {
        t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
      }
    }),
    fa = [function() {
      return {
        restrict: "A",
        scope: !0,
        controller: "@",
        priority: 500
      }
    }],
    ha = {},
    pa = {
      blur: !0,
      focus: !0
    };
  r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
    var t = vt("ng-" + e);
    ha[t] = ["$parse", "$rootScope", function(n, r) {
      return {
        restrict: "A",
        compile: function(i, o) {
          var a = n(o[t], null, !0);
          return function(t, n) {
            n.on(e, function(n) {
              var i = function() {
                a(t, {
                  $event: n
                })
              };
              pa[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
            })
          }
        }
      }
    }]
  });
  var da = ["$animate", "$compile", function(e, t) {
      return {
        multiElement: !0,
        transclude: "element",
        priority: 600,
        terminal: !0,
        restrict: "A",
        $$tlb: !0,
        link: function(n, r, i, o, a) {
          var s, u, c;
          n.$watch(i.ngIf, function(n) {
            n ? u || a(function(n, o) {
              u = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
                clone: n
              }, e.enter(n, r.parent(), r)
            }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = pe(s.clone), e.leave(c).then(function() {
              c = null
            }), s = null))
          })
        }
      }
    }],
    $a = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
      return {
        restrict: "ECA",
        priority: 400,
        terminal: !0,
        transclude: "element",
        controller: Gr.noop,
        compile: function(r, i) {
          var o = i.ngInclude || i.src,
            a = i.onload || "",
            s = i.autoscroll;
          return function(r, i, u, c, l) {
            var f, h, p, d = 0,
              $ = function() {
                h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function() {
                  h = null
                }), h = p, p = null)
              };
            r.$watch(o, function(o) {
              var u = function() {
                  !g(s) || s && !r.$eval(s) || t()
                },
                h = ++d;
              o ? (e(o, !0).then(function(e) {
                if (!r.$$destroyed && h === d) {
                  var t = r.$new();
                  c.template = e;
                  var s = l(t, function(e) {
                    $(), n.enter(e, null, i).then(u)
                  });
                  f = t, p = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                }
              }, function() {
                r.$$destroyed || h === d && ($(), r.$emit("$includeContentError", o))
              }), r.$emit("$includeContentRequested", o)) : ($(), c.template = null)
            })
          }
        }
      }
    }],
    va = ["$compile", function(t) {
      return {
        restrict: "ECA",
        priority: -400,
        require: "ngInclude",
        link: function(n, r, i, o) {
          return Br.call(r[0]).match(/SVG/) ? (r.empty(), void t(Ae(o.template, e.document).childNodes)(n, function(e) {
            r.append(e)
          }, {
            futureParentElement: r
          })) : (r.html(o.template), void t(r.contents())(n))
        }
      }
    }],
    ma = lr({
      priority: 450,
      compile: function() {
        return {
          pre: function(e, t, n) {
            e.$eval(n.ngInit)
          }
        }
      }
    }),
    ga = function() {
      return {
        restrict: "A",
        priority: 100,
        require: "ngModel",
        link: function(e, t, n, i) {
          var o = t.attr(n.$attr.ngList) || ", ",
            a = "false" !== n.ngTrim,
            s = a ? Kr(o) : o,
            u = function(e) {
              if (!m(e)) {
                var t = [];
                return e && r(e.split(s), function(e) {
                  e && t.push(a ? Kr(e) : e)
                }), t
              }
            };
          i.$parsers.push(u), i.$formatters.push(function(e) {
            if (Jr(e)) return e.join(o)
          }), i.$isEmpty = function(e) {
            return !e || !e.length
          }
        }
      }
    },
    ya = "ng-valid",
    ba = "ng-invalid",
    wa = "ng-pristine",
    xa = "ng-dirty",
    Ca = "ng-untouched",
    Sa = "ng-touched",
    Ea = "ng-pending",
    Aa = "ng-empty",
    ka = "ng-not-empty",
    Oa = t("ngModel"),
    Ma = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, n, i, o, a, s, u, c, l) {
      this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = l(n.name || "", !1)(e), this.$$parentForm = _o;
      var f, h = o(n.ngModel),
        d = h.assign,
        $ = h,
        v = d,
        y = null,
        b = this;
      this.$$setOptions = function(e) {
        if (b.$options = e, e && e.getterSetter) {
          var t = o(n.ngModel + "()"),
            r = o(n.ngModel + "($$$p)");
          $ = function(e) {
            var n = h(e);
            return S(n) && (n = t(e)), n
          }, v = function(e, t) {
            S(h(e)) ? r(e, {
              $$$p: t
            }) : d(e, t)
          }
        } else if (!h.assign) throw Oa("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, Y(i))
      }, this.$render = p, this.$isEmpty = function(e) {
        return m(e) || "" === e || null === e || e !== e
      }, this.$$updateEmptyClasses = function(e) {
        b.$isEmpty(e) ? (a.removeClass(i, ka), a.addClass(i, Aa)) : (a.removeClass(i, Aa), a.addClass(i, ka))
      };
      var w = 0;
      kr({
        ctrl: this,
        $element: i,
        set: function(e, t) {
          e[t] = !0
        },
        unset: function(e, t) {
          delete e[t]
        },
        $animate: a
      }), this.$setPristine = function() {
        b.$dirty = !1, b.$pristine = !0, a.removeClass(i, xa), a.addClass(i, wa)
      }, this.$setDirty = function() {
        b.$dirty = !0, b.$pristine = !1, a.removeClass(i, wa), a.addClass(i, xa), b.$$parentForm.$setDirty()
      }, this.$setUntouched = function() {
        b.$touched = !1, b.$untouched = !0, a.setClass(i, Ca, Sa)
      }, this.$setTouched = function() {
        b.$touched = !0, b.$untouched = !1, a.setClass(i, Sa, Ca)
      }, this.$rollbackViewValue = function() {
        s.cancel(y), b.$viewValue = b.$$lastCommittedViewValue, b.$render()
      }, this.$validate = function() {
        if (!x(b.$modelValue) || !isNaN(b.$modelValue)) {
          var e = b.$$lastCommittedViewValue,
            t = b.$$rawModelValue,
            n = b.$valid,
            r = b.$modelValue,
            i = b.$options && b.$options.allowInvalid;
          b.$$runValidators(t, e, function(e) {
            i || n === e || (b.$modelValue = e ? t : void 0, b.$modelValue !== r && b.$$writeModelToScope())
          })
        }
      }, this.$$runValidators = function(e, t, n) {
        function i() {
          var e = b.$$parserName || "parse";
          return m(f) ? (s(e, null), !0) : (f || (r(b.$validators, function(e, t) {
            s(t, null)
          }), r(b.$asyncValidators, function(e, t) {
            s(t, null)
          })), s(e, f), f)
        }

        function o() {
          var n = !0;
          return r(b.$validators, function(r, i) {
            var o = r(e, t);
            n = n && o, s(i, o)
          }), !!n || (r(b.$asyncValidators, function(e, t) {
            s(t, null)
          }), !1)
        }

        function a() {
          var n = [],
            i = !0;
          r(b.$asyncValidators, function(r, o) {
            var a = r(e, t);
            if (!V(a)) throw Oa("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
            s(o, void 0), n.push(a.then(function() {
              s(o, !0)
            }, function() {
              i = !1, s(o, !1)
            }))
          }), n.length ? c.all(n).then(function() {
            u(i)
          }, p) : u(!0)
        }

        function s(e, t) {
          l === w && b.$setValidity(e, t)
        }

        function u(e) {
          l === w && n(e)
        }
        w++;
        var l = w;
        return i() && o() ? void a() : void u(!1)
      }, this.$commitViewValue = function() {
        var e = b.$viewValue;
        s.cancel(y), (b.$$lastCommittedViewValue !== e || "" === e && b.$$hasNativeValidators) && (b.$$updateEmptyClasses(e), b.$$lastCommittedViewValue = e, b.$pristine && this.$setDirty(), this.$$parseAndValidate())
      }, this.$$parseAndValidate = function() {
        function t() {
          b.$modelValue !== o && b.$$writeModelToScope()
        }
        var n = b.$$lastCommittedViewValue,
          r = n;
        if (f = !m(r) || void 0)
          for (var i = 0; i < b.$parsers.length; i++)
            if (r = b.$parsers[i](r), m(r)) {
              f = !1;
              break
            }
        x(b.$modelValue) && isNaN(b.$modelValue) && (b.$modelValue = $(e));
        var o = b.$modelValue,
          a = b.$options && b.$options.allowInvalid;
        b.$$rawModelValue = r, a && (b.$modelValue = r, t()), b.$$runValidators(r, b.$$lastCommittedViewValue, function(e) {
          a || (b.$modelValue = e ? r : void 0, t())
        })
      }, this.$$writeModelToScope = function() {
        v(e, b.$modelValue), r(b.$viewChangeListeners, function(e) {
          try {
            e()
          } catch (e) {
            t(e)
          }
        })
      }, this.$setViewValue = function(e, t) {
        b.$viewValue = e, b.$options && !b.$options.updateOnDefault || b.$$debounceViewValueCommit(t)
      }, this.$$debounceViewValueCommit = function(t) {
        var n, r = 0,
          i = b.$options;
        i && g(i.debounce) && (n = i.debounce, x(n) ? r = n : x(n[t]) ? r = n[t] : x(n.default) && (r = n.default)), s.cancel(y), r ? y = s(function() {
          b.$commitViewValue()
        }, r) : u.$$phase ? b.$commitViewValue() : e.$apply(function() {
          b.$commitViewValue()
        })
      }, e.$watch(function() {
        var t = $(e);
        if (t !== b.$modelValue && (b.$modelValue === b.$modelValue || t === t)) {
          b.$modelValue = b.$$rawModelValue = t, f = void 0;
          for (var n = b.$formatters, r = n.length, i = t; r--;) i = n[r](i);
          b.$viewValue !== i && (b.$$updateEmptyClasses(i), b.$viewValue = b.$$lastCommittedViewValue = i, b.$render(), b.$$runValidators(t, i, p))
        }
        return t
      })
    }],
    Ta = ["$rootScope", function(e) {
      return {
        restrict: "A",
        require: ["ngModel", "^?form", "^?ngModelOptions"],
        controller: Ma,
        priority: 1,
        compile: function(t) {
          return t.addClass(wa).addClass(Ca).addClass(ya), {
            pre: function(e, t, n, r) {
              var i = r[0],
                o = r[1] || i.$$parentForm;
              i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(e) {
                i.$name !== e && i.$$parentForm.$$renameControl(i, e)
              }), e.$on("$destroy", function() {
                i.$$parentForm.$removeControl(i)
              })
            },
            post: function(t, n, r, i) {
              var o = i[0];
              o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                o.$$debounceViewValueCommit(e && e.type)
              }), n.on("blur", function() {
                o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
              })
            }
          }
        }
      }
    }],
    Na = /(\s+|^)default(\s+|$)/,
    Va = function() {
      return {
        restrict: "A",
        controller: ["$scope", "$attrs", function(e, t) {
          var n = this;
          this.$options = F(e.$eval(t.ngModelOptions)), g(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Kr(this.$options.updateOn.replace(Na, function() {
            return n.$options.updateOnDefault = !0, " "
          }))) : this.$options.updateOnDefault = !0
        }]
      }
    },
    ja = lr({
      terminal: !0,
      priority: 1e3
    }),
    Ia = t("ngOptions"),
    Da = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
    Pa = ["$compile", "$document", "$parse", function(t, i, o) {
      function a(e, t, r) {
        function i(e, t, n, r, i) {
          this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
        }

        function a(e) {
          var t;
          if (!c && n(e)) t = e;
          else {
            t = [];
            for (var r in e) e.hasOwnProperty(r) && "$" !== r.charAt(0) && t.push(r)
          }
          return t
        }
        var s = e.match(Da);
        if (!s) throw Ia("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, Y(t));
        var u = s[5] || s[7],
          c = s[6],
          l = / as /.test(s[0]) && s[1],
          f = s[9],
          h = o(s[2] ? s[1] : u),
          p = l && o(l),
          d = p || h,
          $ = f && o(f),
          v = f ? function(e, t) {
            return $(r, t)
          } : function(e) {
            return Ke(e)
          },
          m = function(e, t) {
            return v(e, C(e, t))
          },
          g = o(s[2] || s[1]),
          y = o(s[3] || ""),
          b = o(s[4] || ""),
          w = o(s[8]),
          x = {},
          C = c ? function(e, t) {
            return x[c] = t, x[u] = e, x
          } : function(e) {
            return x[u] = e, x
          };
        return {
          trackBy: f,
          getTrackByValue: m,
          getWatchables: o(w, function(e) {
            var t = [];
            e = e || [];
            for (var n = a(e), i = n.length, o = 0; o < i; o++) {
              var u = e === n ? o : n[o],
                c = e[u],
                l = C(c, u),
                f = v(c, l);
              if (t.push(f), s[2] || s[1]) {
                var h = g(r, l);
                t.push(h)
              }
              if (s[4]) {
                var p = b(r, l);
                t.push(p)
              }
            }
            return t
          }),
          getOptions: function() {
            for (var e = [], t = {}, n = w(r) || [], o = a(n), s = o.length, u = 0; u < s; u++) {
              var c = n === o ? u : o[u],
                l = n[c],
                h = C(l, c),
                p = d(r, h),
                $ = v(p, h),
                x = g(r, h),
                S = y(r, h),
                E = b(r, h),
                A = new i($, p, x, S, E);
              e.push(A), t[$] = A
            }
            return {
              items: e,
              selectValueMap: t,
              getOptionFromViewValue: function(e) {
                return t[m(e)]
              },
              getViewValueFromOption: function(e) {
                return f ? Gr.copy(e.viewValue) : e.viewValue
              }
            }
          }
        }
      }

      function s(e, n, o, s) {
        function l(e, t) {
          var n = u.cloneNode(!1);
          t.appendChild(n), f(e, n)
        }

        function f(e, t) {
          e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
        }

        function h() {
          var e = C && d.readValue();
          if (C)
            for (var t = C.items.length - 1; t >= 0; t--) {
              var r = C.items[t];
              He(g(r.group) ? r.element.parentNode : r.element)
            }
          C = S.getOptions();
          var i = {};
          if (w && n.prepend(p), C.items.forEach(function(e) {
              var t;
              g(e.group) ? (t = i[e.group], t || (t = c.cloneNode(!1), E.appendChild(t), t.label = null === e.group ? "null" : e.group, i[e.group] = t), l(e, t)) : l(e, E)
            }), n[0].appendChild(E), $.$render(), !$.$isEmpty(e)) {
            var o = d.readValue(),
              a = S.trackBy || v;
            (a ? q(e, o) : e === o) || ($.$setViewValue(o), $.$render())
          }
        }
        for (var p, d = s[0], $ = s[1], v = o.multiple, m = 0, y = n.children(), b = y.length; m < b; m++)
          if ("" === y[m].value) {
            p = y.eq(m);
            break
          }
        var w = !!p,
          x = Rr(u.cloneNode(!1));
        x.val("?");
        var C, S = a(o.ngOptions, n, e),
          E = i[0].createDocumentFragment(),
          A = function() {
            w || n.prepend(p), n.val(""), p.prop("selected", !0), p.attr("selected", !0)
          },
          k = function() {
            w || p.remove()
          },
          O = function() {
            n.prepend(x), n.val("?"), x.prop("selected", !0), x.attr("selected", !0)
          },
          M = function() {
            x.remove()
          };
        v ? ($.$isEmpty = function(e) {
          return !e || 0 === e.length
        }, d.writeValue = function(e) {
          C.items.forEach(function(e) {
            e.element.selected = !1
          }), e && e.forEach(function(e) {
            var t = C.getOptionFromViewValue(e);
            t && (t.element.selected = !0)
          })
        }, d.readValue = function() {
          var e = n.val() || [],
            t = [];
          return r(e, function(e) {
            var n = C.selectValueMap[e];
            n && !n.disabled && t.push(C.getViewValueFromOption(n))
          }), t
        }, S.trackBy && e.$watchCollection(function() {
          if (Jr($.$viewValue)) return $.$viewValue.map(function(e) {
            return S.getTrackByValue(e)
          })
        }, function() {
          $.$render()
        })) : (d.writeValue = function(e) {
          var t = C.getOptionFromViewValue(e);
          t ? (n[0].value !== t.selectValue && (M(), k(), n[0].value = t.selectValue, t.element.selected = !0), t.element.setAttribute("selected", "selected")) : null === e || w ? (M(), A()) : (k(), O())
        }, d.readValue = function() {
          var e = C.selectValueMap[n.val()];
          return e && !e.disabled ? (k(), M(), C.getViewValueFromOption(e)) : null
        }, S.trackBy && e.$watch(function() {
          return S.getTrackByValue($.$viewValue)
        }, function() {
          $.$render()
        })), w ? (p.remove(), t(p)(e), p.removeClass("ng-scope")) : p = Rr(u.cloneNode(!1)), n.empty(), h(), e.$watchCollection(S.getWatchables, h)
      }
      var u = e.document.createElement("option"),
        c = e.document.createElement("optgroup");
      return {
        restrict: "A",
        terminal: !0,
        require: ["select", "ngModel"],
        link: {
          pre: function(e, t, n, r) {
            r[0].registerOption = p
          },
          post: s
        }
      }
    }],
    _a = ["$locale", "$interpolate", "$log", function(e, t, n) {
      var i = /{}/g,
        o = /^when(Minus)?(.+)$/;
      return {
        link: function(a, s, u) {
          function c(e) {
            s.text(e || "")
          }
          var l, f = u.count,
            h = u.$attr.when && s.attr(u.$attr.when),
            d = u.offset || 0,
            $ = a.$eval(h) || {},
            v = {},
            g = t.startSymbol(),
            y = t.endSymbol(),
            b = g + f + "-" + d + y,
            w = Gr.noop;
          r(u, function(e, t) {
            var n = o.exec(t);
            if (n) {
              var r = (n[1] ? "-" : "") + jr(n[2]);
              $[r] = s.attr(u.$attr[t])
            }
          }), r($, function(e, n) {
            v[n] = t(e.replace(i, b))
          }), a.$watch(f, function(t) {
            var r = parseFloat(t),
              i = isNaN(r);
            if (i || r in $ || (r = e.pluralCat(r - d)), r !== l && !(i && x(l) && isNaN(l))) {
              w();
              var o = v[r];
              m(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), w = p, c()) : w = a.$watch(o, c), l = r
            }
          })
        }
      }
    }],
    Ra = ["$parse", "$animate", "$compile", function(e, i, o) {
      var a = "$$NG_REMOVED",
        s = t("ngRepeat"),
        u = function(e, t, n, r, i, o, a) {
          e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
        },
        c = function(e) {
          return e.clone[0]
        },
        l = function(e) {
          return e.clone[e.clone.length - 1]
        };
      return {
        restrict: "A",
        multiElement: !0,
        transclude: "element",
        priority: 1e3,
        terminal: !0,
        $$tlb: !0,
        compile: function(t, f) {
          var h = f.ngRepeat,
            p = o.$$createComment("end ngRepeat", h),
            d = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
          if (!d) throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", h);
          var $ = d[1],
            v = d[2],
            m = d[3],
            g = d[4];
          if (d = $.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !d) throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", $);
          var y = d[3] || d[1],
            b = d[2];
          if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m))) throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", m);
          var w, x, C, S, E = {
            $id: Ke
          };
          return g ? w = e(g) : (C = function(e, t) {
              return Ke(t)
            }, S = function(e) {
              return e
            }),
            function(e, t, o, f, d) {
              w && (x = function(t, n, r) {
                return b && (E[b] = t), E[y] = n, E.$index = r, w(e, E)
              });
              var $ = de();
              e.$watchCollection(v, function(o) {
                var f, v, g, w, E, A, k, O, M, T, N, V, j = t[0],
                  I = de();
                if (m && (e[m] = o), n(o)) M = o, O = x || C;
                else {
                  O = x || S, M = [];
                  for (var D in o) Vr.call(o, D) && "$" !== D.charAt(0) && M.push(D)
                }
                for (w = M.length, N = new Array(w), f = 0; f < w; f++)
                  if (E = o === M ? f : M[f], A = o[E], k = O(E, A, f), $[k]) T = $[k], delete $[k], I[k] = T, N[f] = T;
                  else {
                    if (I[k]) throw r(N, function(e) {
                      e && e.scope && ($[e.id] = e)
                    }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", h, k, A);
                    N[f] = {
                      id: k,
                      scope: void 0,
                      clone: void 0
                    }, I[k] = !0
                  }
                for (var P in $) {
                  if (T = $[P], V = pe(T.clone), i.leave(V), V[0].parentNode)
                    for (f = 0, v = V.length; f < v; f++) V[f][a] = !0;
                  T.scope.$destroy()
                }
                for (f = 0; f < w; f++)
                  if (E = o === M ? f : M[f], A = o[E], T = N[f], T.scope) {
                    g = j;
                    do g = g.nextSibling; while (g && g[a]);
                    c(T) != g && i.move(pe(T.clone), null, j), j = l(T), u(T.scope, f, y, A, b, E, w)
                  } else d(function(e, t) {
                    T.scope = t;
                    var n = p.cloneNode(!1);
                    e[e.length++] = n, i.enter(e, null, j), j = n, T.clone = e, I[T.id] = T, u(T.scope, f, y, A, b, E, w)
                  });
                $ = I
              })
            }
        }
      }
    }],
    Fa = "ng-hide",
    qa = "ng-hide-animate",
    Ua = ["$animate", function(e) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(t, n, r) {
          t.$watch(r.ngShow, function(t) {
            e[t ? "removeClass" : "addClass"](n, Fa, {
              tempClasses: qa
            })
          })
        }
      }
    }],
    La = ["$animate", function(e) {
      return {
        restrict: "A",
        multiElement: !0,
        link: function(t, n, r) {
          t.$watch(r.ngHide, function(t) {
            e[t ? "addClass" : "removeClass"](n, Fa, {
              tempClasses: qa
            })
          })
        }
      }
    }],
    Ha = lr(function(e, t, n) {
      e.$watch(n.ngStyle, function(e, n) {
        n && e !== n && r(n, function(e, n) {
          t.css(n, "")
        }), e && t.css(e)
      }, !0)
    }),
    Ba = ["$animate", "$compile", function(e, t) {
      return {
        require: "ngSwitch",
        controller: ["$scope", function() {
          this.cases = {}
        }],
        link: function(n, i, o, a) {
          var s = o.ngSwitch || o.on,
            u = [],
            c = [],
            l = [],
            f = [],
            h = function(e, t) {
              return function() {
                e.splice(t, 1)
              }
            };
          n.$watch(s, function(n) {
            var i, o;
            for (i = 0, o = l.length; i < o; ++i) e.cancel(l[i]);
            for (l.length = 0, i = 0, o = f.length; i < o; ++i) {
              var s = pe(c[i].clone);
              f[i].$destroy();
              var p = l[i] = e.leave(s);
              p.then(h(l, i))
            }
            c.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && r(u, function(n) {
              n.transclude(function(r, i) {
                f.push(i);
                var o = n.element;
                r[r.length++] = t.$$createComment("end ngSwitchWhen");
                var a = {
                  clone: r
                };
                c.push(a), e.enter(r, o.parent(), o)
              })
            })
          })
        }
      }
    }],
    za = lr({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(e, t, n, r, i) {
        r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
          transclude: i,
          element: t
        })
      }
    }),
    Wa = lr({
      transclude: "element",
      priority: 1200,
      require: "^ngSwitch",
      multiElement: !0,
      link: function(e, t, n, r, i) {
        r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
          transclude: i,
          element: t
        })
      }
    }),
    Ga = t("ngTransclude"),
    Za = ["$compile", function(e) {
      return {
        restrict: "EAC",
        terminal: !0,
        compile: function(t) {
          var n = e(t.contents());
          return t.empty(),
            function(e, t, r, i, o) {
              function a(e, n) {
                e.length ? t.append(e) : (s(), n.$destroy())
              }

              function s() {
                n(e, function(e) {
                  t.append(e)
                })
              }
              if (!o) throw Ga("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Y(t));
              r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
              var u = r.ngTransclude || r.ngTranscludeSlot;
              o(a, null, u), u && !o.isSlotFilled(u) && s()
            }
        }
      }
    }],
    Ja = ["$templateCache", function(e) {
      return {
        restrict: "E",
        terminal: !0,
        compile: function(t, n) {
          if ("text/ng-template" == n.type) {
            var r = n.id,
              i = t[0].text;
            e.put(r, i)
          }
        }
      }
    }],
    Ya = {
      $setViewValue: p,
      $render: p
    },
    Ka = ["$element", "$scope", function(t, n) {
      var r = this,
        i = new Xe;
      r.ngModelCtrl = Ya, r.unknownOption = Rr(e.document.createElement("option")), r.renderUnknownOption = function(e) {
        var n = "? " + Ke(e) + " ?";
        r.unknownOption.val(n), t.prepend(r.unknownOption), t.val(n)
      }, n.$on("$destroy", function() {
        r.renderUnknownOption = p
      }), r.removeUnknownOption = function() {
        r.unknownOption.parent() && r.unknownOption.remove()
      }, r.readValue = function() {
        return r.removeUnknownOption(), t.val()
      }, r.writeValue = function(e) {
        r.hasOption(e) ? (r.removeUnknownOption(), t.val(e), "" === e && r.emptyOption.prop("selected", !0)) : null == e && r.emptyOption ? (r.removeUnknownOption(), t.val("")) : r.renderUnknownOption(e)
      }, r.addOption = function(e, t) {
        if (t[0].nodeType !== ui) {
          fe(e, '"option value"'), "" === e && (r.emptyOption = t);
          var n = i.get(e) || 0;
          i.put(e, n + 1), r.ngModelCtrl.$render(), Mr(t)
        }
      }, r.removeOption = function(e) {
        var t = i.get(e);
        t && (1 === t ? (i.remove(e), "" === e && (r.emptyOption = void 0)) : i.put(e, t - 1))
      }, r.hasOption = function(e) {
        return !!i.get(e)
      }, r.registerOption = function(e, t, n, i, o) {
        if (i) {
          var a;
          n.$observe("value", function(e) {
            g(a) && r.removeOption(a), a = e, r.addOption(e, t)
          })
        } else o ? e.$watch(o, function(e, i) {
          n.$set("value", e), i !== e && r.removeOption(i), r.addOption(e, t)
        }) : r.addOption(n.value, t);
        t.on("$destroy", function() {
          r.removeOption(n.value), r.ngModelCtrl.$render()
        })
      }
    }],
    Xa = function() {
      function e(e, t, n, i) {
        var o = i[1];
        if (o) {
          var a = i[0];
          if (a.ngModelCtrl = o, t.on("change", function() {
              e.$apply(function() {
                o.$setViewValue(a.readValue())
              })
            }), n.multiple) {
            a.readValue = function() {
              var e = [];
              return r(t.find("option"), function(t) {
                t.selected && e.push(t.value)
              }), e
            }, a.writeValue = function(e) {
              var n = new Xe(e);
              r(t.find("option"), function(e) {
                e.selected = g(n.get(e.value))
              })
            };
            var s, u = NaN;
            e.$watch(function() {
              u !== o.$viewValue || q(s, o.$viewValue) || (s = ve(o.$viewValue), o.$render()), u = o.$viewValue
            }), o.$isEmpty = function(e) {
              return !e || 0 === e.length
            }
          }
        }
      }

      function t(e, t, n, r) {
        var i = r[1];
        if (i) {
          var o = r[0];
          i.$render = function() {
            o.writeValue(i.$viewValue)
          }
        }
      }
      return {
        restrict: "E",
        require: ["select", "?ngModel"],
        controller: Ka,
        priority: 1,
        link: {
          pre: e,
          post: t
        }
      }
    },
    Qa = ["$interpolate", function(e) {
      return {
        restrict: "E",
        priority: 100,
        compile: function(t, n) {
          if (g(n.value)) var r = e(n.value, !0);
          else {
            var i = e(t.text(), !0);
            i || n.$set("value", t.text())
          }
          return function(e, t, n) {
            var o = "$selectController",
              a = t.parent(),
              s = a.data(o) || a.parent().data(o);
            s && s.registerOption(e, t, n, r, i)
          }
        }
      }
    }],
    es = $({
      restrict: "E",
      terminal: !1
    }),
    ts = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(e, t, n, r) {
          r && (n.required = !0, r.$validators.required = function(e, t) {
            return !n.required || !r.$isEmpty(t)
          }, n.$observe("required", function() {
            r.$validate()
          }))
        }
      }
    },
    ns = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(e, n, r, i) {
          if (i) {
            var o, a = r.ngPattern || r.pattern;
            r.$observe("pattern", function(e) {
              if (w(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw t("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, Y(n));
              o = e || void 0, i.$validate()
            }), i.$validators.pattern = function(e, t) {
              return i.$isEmpty(t) || m(o) || o.test(t)
            }
          }
        }
      }
    },
    rs = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(e, t, n, r) {
          if (r) {
            var i = -1;
            n.$observe("maxlength", function(e) {
              var t = f(e);
              i = isNaN(t) ? -1 : t, r.$validate()
            }), r.$validators.maxlength = function(e, t) {
              return i < 0 || r.$isEmpty(t) || t.length <= i
            }
          }
        }
      }
    },
    is = function() {
      return {
        restrict: "A",
        require: "?ngModel",
        link: function(e, t, n, r) {
          if (r) {
            var i = 0;
            n.$observe("minlength", function(e) {
              i = f(e) || 0, r.$validate()
            }), r.$validators.minlength = function(e, t) {
              return r.$isEmpty(t) || t.length >= i
            }
          }
        }
      }
    };
  return e.angular.bootstrap ? void(e.console && console.log("WARNING: Tried to load angular more than once.")) : (ue(), ye(Gr), Gr.module("ngLocale", [], ["$provide", function(e) {
    function t(e) {
      e += "";
      var t = e.indexOf(".");
      return t == -1 ? 0 : e.length - t - 1
    }

    function n(e, n) {
      var r = n;
      void 0 === r && (r = Math.min(t(e), 3));
      var i = Math.pow(10, r),
        o = (e * i | 0) % i;
      return {
        v: r,
        f: o
      }
    }
    var r = {
      ZERO: "zero",
      ONE: "one",
      TWO: "two",
      FEW: "few",
      MANY: "many",
      OTHER: "other"
    };
    e.value("$locale", {
      DATETIME_FORMATS: {
        AMPMS: ["AM", "PM"],
        DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        ERANAMES: ["Before Christ", "Anno Domini"],
        ERAS: ["BC", "AD"],
        FIRSTDAYOFWEEK: 6,
        MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        WEEKENDRANGE: [5, 6],
        fullDate: "EEEE, MMMM d, y",
        longDate: "MMMM d, y",
        medium: "MMM d, y h:mm:ss a",
        mediumDate: "MMM d, y",
        mediumTime: "h:mm:ss a",
        short: "M/d/yy h:mm a",
        shortDate: "M/d/yy",
        shortTime: "h:mm a"
      },
      NUMBER_FORMATS: {
        CURRENCY_SYM: "$",
        DECIMAL_SEP: ".",
        GROUP_SEP: ",",
        PATTERNS: [{
          gSize: 3,
          lgSize: 3,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        }, {
          gSize: 3,
          lgSize: 3,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "-¤",
          negSuf: "",
          posPre: "¤",
          posSuf: ""
        }]
      },
      id: "en-us",
      localeID: "en_US",
      pluralCat: function(e, t) {
        var i = 0 | e,
          o = n(e, t);
        return 1 == i && 0 == o.v ? r.ONE : r.OTHER
      }
    })
  }]), void Rr(e.document).ready(function() {
    re(e.document, ie)
  }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
angular.module("ngLocale", [], ["$provide", function(e) {
  var M = {
    ZERO: "zero",
    ONE: "one",
    TWO: "two",
    FEW: "few",
    MANY: "many",
    OTHER: "other"
  };
  e.value("$locale", {
    DATETIME_FORMATS: {
      AMPMS: {
        0: "до полудня",
        1: "после полудня"
      },
      DAY: {
        0: "воскресенье",
        1: "понедельник",
        2: "вторник",
        3: "среда",
        4: "четверг",
        5: "пятница",
        6: "суббота"
      },
      MONTH: {
        0: "января",
        1: "февраля",
        2: "марта",
        3: "апреля",
        4: "мая",
        5: "июня",
        6: "июля",
        7: "августа",
        8: "сентября",
        9: "октября",
        10: "ноября",
        11: "декабря"
      },
      SHORTDAY: {
        0: "вс",
        1: "пн",
        2: "вт",
        3: "ср",
        4: "чт",
        5: "пт",
        6: "сб"
      },
      SHORTMONTH: {
        0: "янв.",
        1: "февр.",
        2: "марта",
        3: "апр.",
        4: "мая",
        5: "июня",
        6: "июля",
        7: "авг.",
        8: "сент.",
        9: "окт.",
        10: "нояб.",
        11: "дек."
      },
      fullDate: "EEEE, d MMMM y 'г'.",
      longDate: "d MMMM y 'г'.",
      medium: "dd.MM.yyyy H:mm:ss",
      mediumDate: "dd.MM.yyyy",
      mediumTime: "H:mm:ss",
      short: "dd.MM.yy H:mm",
      shortDate: "dd.MM.yy",
      shortTime: "H:mm"
    },
    NUMBER_FORMATS: {
      CURRENCY_SYM: "руб.",
      DECIMAL_SEP: ",",
      GROUP_SEP: " ",
      PATTERNS: {
        0: {
          gSize: 3,
          lgSize: 3,
          macFrac: 0,
          maxFrac: 3,
          minFrac: 0,
          minInt: 1,
          negPre: "-",
          negSuf: "",
          posPre: "",
          posSuf: ""
        },
        1: {
          gSize: 3,
          lgSize: 3,
          macFrac: 0,
          maxFrac: 2,
          minFrac: 2,
          minInt: 1,
          negPre: "-",
          negSuf: " ¤",
          posPre: "",
          posSuf: " ¤"
        }
      }
    },
    id: "ru",
    pluralCat: function(e) {
      return e % 10 == 1 && e % 100 != 11 ? M.ONE : e == (0 | e) && e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? M.FEW : e % 10 == 0 || e == (0 | e) && e % 10 >= 5 && e % 10 <= 9 || e == (0 | e) && e % 100 >= 11 && e % 100 <= 14 ? M.MANY : M.OTHER
    }
  })
}]);
(function() {
  function n(n) {
    function t(t, r, e, u, i, o) {
      for (; i >= 0 && i < o; i += n) {
        var a = u ? u[i] : i;
        e = r(e, t[a], a, t)
      }
      return e
    }
    return function(r, e, u, i) {
      e = b(e, i, 4);
      var o = !k(r) && m.keys(r),
        a = (o || r).length,
        c = n > 0 ? 0 : a - 1;
      return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
    }
  }

  function t(n) {
    return function(t, r, e) {
      r = x(r, e);
      for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n)
        if (r(t[i], i, t)) return i;
      return -1
    }
  }

  function r(n, t, r) {
    return function(e, u, i) {
      var o = 0,
        a = O(e);
      if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
      else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
      if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
      for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n)
        if (e[i] === u) return i;
      return -1
    }
  }

  function e(n, t) {
    var r = I.length,
      e = n.constructor,
      u = m.isFunction(e) && e.prototype || a,
      i = "constructor";
    for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
  }
  var u = this,
    i = u._,
    o = Array.prototype,
    a = Object.prototype,
    c = Function.prototype,
    f = o.push,
    l = o.slice,
    s = a.toString,
    p = a.hasOwnProperty,
    h = Array.isArray,
    v = Object.keys,
    y = c.bind,
    d = Object.create,
    g = function() {},
    m = function(n) {
      return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
    };
  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
  var b = function(n, t, r) {
      if (void 0 === t) return n;
      switch (null == r ? 3 : r) {
        case 1:
          return function(r) {
            return n.call(t, r)
          };
        case 2:
          return function(r, e) {
            return n.call(t, r, e)
          };
        case 3:
          return function(r, e, u) {
            return n.call(t, r, e, u)
          };
        case 4:
          return function(r, e, u, i) {
            return n.call(t, r, e, u, i)
          }
      }
      return function() {
        return n.apply(t, arguments)
      }
    },
    x = function(n, t, r) {
      return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
    };
  m.iteratee = function(n, t) {
    return x(n, t, 1 / 0)
  };
  var _ = function(n, t) {
      return function(r) {
        var e = arguments.length;
        if (e < 2 || null == r) return r;
        for (var u = 1; u < e; u++)
          for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
            var f = o[c];
            t && void 0 !== r[f] || (r[f] = i[f])
          }
        return r
      }
    },
    j = function(n) {
      if (!m.isObject(n)) return {};
      if (d) return d(n);
      g.prototype = n;
      var t = new g;
      return g.prototype = null, t
    },
    w = function(n) {
      return function(t) {
        return null == t ? void 0 : t[n]
      }
    },
    A = Math.pow(2, 53) - 1,
    O = w("length"),
    k = function(n) {
      var t = O(n);
      return "number" == typeof t && t >= 0 && t <= A
    };
  m.each = m.forEach = function(n, t, r) {
    t = b(t, r);
    var e, u;
    if (k(n))
      for (e = 0, u = n.length; e < u; e++) t(n[e], e, n);
    else {
      var i = m.keys(n);
      for (e = 0, u = i.length; e < u; e++) t(n[i[e]], i[e], n)
    }
    return n
  }, m.map = m.collect = function(n, t, r) {
    t = x(t, r);
    for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
      var a = e ? e[o] : o;
      i[o] = t(n[a], a, n)
    }
    return i
  }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
    var e;
    if (e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), void 0 !== e && e !== -1) return n[e]
  }, m.filter = m.select = function(n, t, r) {
    var e = [];
    return t = x(t, r), m.each(n, function(n, r, u) {
      t(n, r, u) && e.push(n)
    }), e
  }, m.reject = function(n, t, r) {
    return m.filter(n, m.negate(x(t)), r)
  }, m.every = m.all = function(n, t, r) {
    t = x(t, r);
    for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;
      if (!t(n[o], o, n)) return !1
    }
    return !0
  }, m.some = m.any = function(n, t, r) {
    t = x(t, r);
    for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
      var o = e ? e[i] : i;
      if (t(n[o], o, n)) return !0
    }
    return !1
  }, m.contains = m.includes = m.include = function(n, t, r, e) {
    return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
  }, m.invoke = function(n, t) {
    var r = l.call(arguments, 2),
      e = m.isFunction(t);
    return m.map(n, function(n) {
      var u = e ? t : n[t];
      return null == u ? u : u.apply(n, r)
    })
  }, m.pluck = function(n, t) {
    return m.map(n, m.property(t))
  }, m.where = function(n, t) {
    return m.filter(n, m.matcher(t))
  }, m.findWhere = function(n, t) {
    return m.find(n, m.matcher(t))
  }, m.max = function(n, t, r) {
    var e, u, i = -(1 / 0),
      o = -(1 / 0);
    if (null == t && null != n) {
      n = k(n) ? n : m.values(n);
      for (var a = 0, c = n.length; a < c; a++) e = n[a], e > i && (i = e)
    } else t = x(t, r), m.each(n, function(n, r, e) {
      u = t(n, r, e), (u > o || u === -(1 / 0) && i === -(1 / 0)) && (i = n, o = u)
    });
    return i
  }, m.min = function(n, t, r) {
    var e, u, i = 1 / 0,
      o = 1 / 0;
    if (null == t && null != n) {
      n = k(n) ? n : m.values(n);
      for (var a = 0, c = n.length; a < c; a++) e = n[a], e < i && (i = e)
    } else t = x(t, r), m.each(n, function(n, r, e) {
      u = t(n, r, e), (u < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
    });
    return i
  }, m.shuffle = function(n) {
    for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; i < e; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
    return u
  }, m.sample = function(n, t, r) {
    return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
  }, m.sortBy = function(n, t, r) {
    return t = x(t, r), m.pluck(m.map(n, function(n, r, e) {
      return {
        value: n,
        index: r,
        criteria: t(n, r, e)
      }
    }).sort(function(n, t) {
      var r = n.criteria,
        e = t.criteria;
      if (r !== e) {
        if (r > e || void 0 === r) return 1;
        if (r < e || void 0 === e) return -1
      }
      return n.index - t.index
    }), "value")
  };
  var F = function(n) {
    return function(t, r, e) {
      var u = {};
      return r = x(r, e), m.each(t, function(e, i) {
        var o = r(e, i, t);
        n(u, e, o)
      }), u
    }
  };
  m.groupBy = F(function(n, t, r) {
    m.has(n, r) ? n[r].push(t) : n[r] = [t]
  }), m.indexBy = F(function(n, t, r) {
    n[r] = t
  }), m.countBy = F(function(n, t, r) {
    m.has(n, r) ? n[r]++ : n[r] = 1
  }), m.toArray = function(n) {
    return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
  }, m.size = function(n) {
    return null == n ? 0 : k(n) ? n.length : m.keys(n).length
  }, m.partition = function(n, t, r) {
    t = x(t, r);
    var e = [],
      u = [];
    return m.each(n, function(n, r, i) {
      (t(n, r, i) ? e : u).push(n)
    }), [e, u]
  }, m.first = m.head = m.take = function(n, t, r) {
    if (null != n) return null == t || r ? n[0] : m.initial(n, n.length - t)
  }, m.initial = function(n, t, r) {
    return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
  }, m.last = function(n, t, r) {
    if (null != n) return null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
  }, m.rest = m.tail = m.drop = function(n, t, r) {
    return l.call(n, null == t || r ? 1 : t)
  }, m.compact = function(n) {
    return m.filter(n, m.identity)
  };
  var S = function(n, t, r, e) {
    for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
      var c = n[o];
      if (k(c) && (m.isArray(c) || m.isArguments(c))) {
        t || (c = S(c, t, r));
        var f = 0,
          l = c.length;
        for (u.length += l; f < l;) u[i++] = c[f++]
      } else r || (u[i++] = c)
    }
    return u
  };
  m.flatten = function(n, t) {
    return S(n, t, !1)
  }, m.without = function(n) {
    return m.difference(n, l.call(arguments, 1))
  }, m.uniq = m.unique = function(n, t, r, e) {
    m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
    for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
      var c = n[o],
        f = r ? r(c, o, n) : c;
      t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
    }
    return u
  }, m.union = function() {
    return m.uniq(S(arguments, !0, !0))
  }, m.intersection = function(n) {
    for (var t = [], r = arguments.length, e = 0, u = O(n); e < u; e++) {
      var i = n[e];
      if (!m.contains(t, i)) {
        for (var o = 1; o < r && m.contains(arguments[o], i); o++);
        o === r && t.push(i)
      }
    }
    return t
  }, m.difference = function(n) {
    var t = S(arguments, !0, !0, 1);
    return m.filter(n, function(n) {
      return !m.contains(t, n)
    })
  }, m.zip = function() {
    return m.unzip(arguments)
  }, m.unzip = function(n) {
    for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; e < t; e++) r[e] = m.pluck(n, e);
    return r
  }, m.object = function(n, t) {
    for (var r = {}, e = 0, u = O(n); e < u; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
    return r
  }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
    r = x(r, e, 1);
    for (var u = r(t), i = 0, o = O(n); i < o;) {
      var a = Math.floor((i + o) / 2);
      r(n[a]) < u ? i = a + 1 : o = a
    }
    return i
  }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function(n, t, r) {
    null == t && (t = n || 0, n = 0), r = r || 1;
    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) u[i] = n;
    return u
  };
  var E = function(n, t, r, e, u) {
    if (!(e instanceof t)) return n.apply(r, u);
    var i = j(n.prototype),
      o = n.apply(i, u);
    return m.isObject(o) ? o : i
  };
  m.bind = function(n, t) {
    if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
    if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
    var r = l.call(arguments, 2),
      e = function() {
        return E(n, e, t, this, r.concat(l.call(arguments)))
      };
    return e
  }, m.partial = function(n) {
    var t = l.call(arguments, 1),
      r = function() {
        for (var e = 0, u = t.length, i = Array(u), o = 0; o < u; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
        for (; e < arguments.length;) i.push(arguments[e++]);
        return E(n, r, this, this, i)
      };
    return r
  }, m.bindAll = function(n) {
    var t, r, e = arguments.length;
    if (e <= 1) throw new Error("bindAll must be passed function names");
    for (t = 1; t < e; t++) r = arguments[t], n[r] = m.bind(n[r], n);
    return n
  }, m.memoize = function(n, t) {
    var r = function(e) {
      var u = r.cache,
        i = "" + (t ? t.apply(this, arguments) : e);
      return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
    };
    return r.cache = {}, r
  }, m.delay = function(n, t) {
    var r = l.call(arguments, 2);
    return setTimeout(function() {
      return n.apply(null, r)
    }, t)
  }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
    var e, u, i, o = null,
      a = 0;
    r || (r = {});
    var c = function() {
      a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
    };
    return function() {
      var f = m.now();
      a || r.leading !== !1 || (a = f);
      var l = t - (f - a);
      return e = this, u = arguments, l <= 0 || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
    }
  }, m.debounce = function(n, t, r) {
    var e, u, i, o, a, c = function() {
      var f = m.now() - o;
      f < t && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
    };
    return function() {
      i = this, u = arguments, o = m.now();
      var f = r && !e;
      return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
    }
  }, m.wrap = function(n, t) {
    return m.partial(t, n)
  }, m.negate = function(n) {
    return function() {
      return !n.apply(this, arguments)
    }
  }, m.compose = function() {
    var n = arguments,
      t = n.length - 1;
    return function() {
      for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
      return e
    }
  }, m.after = function(n, t) {
    return function() {
      if (--n < 1) return t.apply(this, arguments)
    }
  }, m.before = function(n, t) {
    var r;
    return function() {
      return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = null), r
    }
  }, m.once = m.partial(m.before, 2);
  var M = !{
      toString: null
    }.propertyIsEnumerable("toString"),
    I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  m.keys = function(n) {
    if (!m.isObject(n)) return [];
    if (v) return v(n);
    var t = [];
    for (var r in n) m.has(n, r) && t.push(r);
    return M && e(n, t), t
  }, m.allKeys = function(n) {
    if (!m.isObject(n)) return [];
    var t = [];
    for (var r in n) t.push(r);
    return M && e(n, t), t
  }, m.values = function(n) {
    for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = n[t[u]];
    return e
  }, m.mapObject = function(n, t, r) {
    t = x(t, r);
    for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) e = u[a], o[e] = t(n[e], e, n);
    return o
  }, m.pairs = function(n) {
    for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = [t[u], n[t[u]]];
    return e
  }, m.invert = function(n) {
    for (var t = {}, r = m.keys(n), e = 0, u = r.length; e < u; e++) t[n[r[e]]] = r[e];
    return t
  }, m.functions = m.methods = function(n) {
    var t = [];
    for (var r in n) m.isFunction(n[r]) && t.push(r);
    return t.sort()
  }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, t, r) {
    t = x(t, r);
    for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++)
      if (e = u[i], t(n[e], e, n)) return e
  }, m.pick = function(n, t, r) {
    var e, u, i = {},
      o = n;
    if (null == o) return i;
    m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function(n, t, r) {
      return t in r
    }, o = Object(o));
    for (var a = 0, c = u.length; a < c; a++) {
      var f = u[a],
        l = o[f];
      e(l, f, o) && (i[f] = l)
    }
    return i
  }, m.omit = function(n, t, r) {
    if (m.isFunction(t)) t = m.negate(t);
    else {
      var e = m.map(S(arguments, !1, !1, 1), String);
      t = function(n, t) {
        return !m.contains(e, t)
      }
    }
    return m.pick(n, t, r)
  }, m.defaults = _(m.allKeys, !0), m.create = function(n, t) {
    var r = j(n);
    return t && m.extendOwn(r, t), r
  }, m.clone = function(n) {
    return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
  }, m.tap = function(n, t) {
    return t(n), n
  }, m.isMatch = function(n, t) {
    var r = m.keys(t),
      e = r.length;
    if (null == n) return !e;
    for (var u = Object(n), i = 0; i < e; i++) {
      var o = r[i];
      if (t[o] !== u[o] || !(o in u)) return !1
    }
    return !0
  };
  var N = function(n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n === 1 / t;
    if (null == n || null == t) return n === t;
    n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
    var u = s.call(n);
    if (u !== s.call(t)) return !1;
    switch (u) {
      case "[object RegExp]":
      case "[object String]":
        return "" + n == "" + t;
      case "[object Number]":
        return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
      case "[object Date]":
      case "[object Boolean]":
        return +n === +t
    }
    var i = "[object Array]" === u;
    if (!i) {
      if ("object" != typeof n || "object" != typeof t) return !1;
      var o = n.constructor,
        a = t.constructor;
      if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
    }
    r = r || [], e = e || [];
    for (var c = r.length; c--;)
      if (r[c] === n) return e[c] === t;
    if (r.push(n), e.push(t), i) {
      if (c = n.length, c !== t.length) return !1;
      for (; c--;)
        if (!N(n[c], t[c], r, e)) return !1
    } else {
      var f, l = m.keys(n);
      if (c = l.length, m.keys(t).length !== c) return !1;
      for (; c--;)
        if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1
    }
    return r.pop(), e.pop(), !0
  };
  m.isEqual = function(n, t) {
    return N(n, t)
  }, m.isEmpty = function(n) {
    return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
  }, m.isElement = function(n) {
    return !(!n || 1 !== n.nodeType)
  }, m.isArray = h || function(n) {
    return "[object Array]" === s.call(n)
  }, m.isObject = function(n) {
    var t = typeof n;
    return "function" === t || "object" === t && !!n
  }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
    m["is" + n] = function(t) {
      return s.call(t) === "[object " + n + "]"
    }
  }), m.isArguments(arguments) || (m.isArguments = function(n) {
    return m.has(n, "callee")
  }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
    return "function" == typeof n || !1
  }), m.isFinite = function(n) {
    return isFinite(n) && !isNaN(parseFloat(n))
  }, m.isNaN = function(n) {
    return m.isNumber(n) && n !== +n
  }, m.isBoolean = function(n) {
    return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
  }, m.isNull = function(n) {
    return null === n
  }, m.isUndefined = function(n) {
    return void 0 === n
  }, m.has = function(n, t) {
    return null != n && p.call(n, t)
  }, m.noConflict = function() {
    return u._ = i, this
  }, m.identity = function(n) {
    return n
  }, m.constant = function(n) {
    return function() {
      return n
    }
  }, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
    return null == n ? function() {} : function(t) {
      return n[t]
    }
  }, m.matcher = m.matches = function(n) {
    return n = m.extendOwn({}, n),
      function(t) {
        return m.isMatch(t, n)
      }
  }, m.times = function(n, t, r) {
    var e = Array(Math.max(0, n));
    t = b(t, r, 1);
    for (var u = 0; u < n; u++) e[u] = t(u);
    return e
  }, m.random = function(n, t) {
    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
  }, m.now = Date.now || function() {
    return (new Date).getTime()
  };
  var B = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
    T = m.invert(B),
    R = function(n) {
      var t = function(t) {
          return n[t]
        },
        r = "(?:" + m.keys(n).join("|") + ")",
        e = RegExp(r),
        u = RegExp(r, "g");
      return function(n) {
        return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
      }
    };
  m.escape = R(B), m.unescape = R(T), m.result = function(n, t, r) {
    var e = null == n ? void 0 : n[t];
    return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e
  };
  var q = 0;
  m.uniqueId = function(n) {
    var t = ++q + "";
    return n ? n + t : t
  }, m.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var K = /(.)^/,
    z = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    D = /\\|'|\r|\n|\u2028|\u2029/g,
    L = function(n) {
      return "\\" + z[n]
    };
  m.template = function(n, t, r) {
    !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
    var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
      u = 0,
      i = "__p+='";
    n.replace(e, function(t, r, e, o, a) {
      return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
    }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
    try {
      var o = new Function(t.variable || "obj", "_", i)
    } catch (n) {
      throw n.source = i, n
    }
    var a = function(n) {
        return o.call(this, n, m)
      },
      c = t.variable || "obj";
    return a.source = "function(" + c + "){\n" + i + "}", a
  }, m.chain = function(n) {
    var t = m(n);
    return t._chain = !0, t
  };
  var P = function(n, t) {
    return n._chain ? m(t).chain() : t
  };
  m.mixin = function(n) {
    m.each(m.functions(n), function(t) {
      var r = m[t] = n[t];
      m.prototype[t] = function() {
        var n = [this._wrapped];
        return f.apply(n, arguments), P(this, r.apply(m, n))
      }
    })
  }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
    var t = o[n];
    m.prototype[n] = function() {
      var r = this._wrapped;
      return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
    }
  }), m.each(["concat", "join", "slice"], function(n) {
    var t = o[n];
    m.prototype[n] = function() {
      return P(this, t.apply(this._wrapped, arguments))
    }
  }), m.prototype.value = function() {
    return this._wrapped
  }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
    return "" + this._wrapped
  }, "function" == typeof define && define.amd && define("underscore", [], function() {
    return m
  })
}).call(this);
angular.module("cgNotify", []).factory("notify", ["$timeout", "$http", "$compile", "$templateCache", "$rootScope", function(e, n, t, a, i) {
  var s = 10,
    o = 15,
    r = 1e4,
    c = "angular-notify.html",
    l = "center",
    p = document.body,
    g = 0,
    m = [],
    f = [],
    u = function(u) {
      "object" != typeof u && (u = {
        message: u
      }), u.duration = u.duration ? u.duration : r, u.templateUrl = u.templateUrl ? u.templateUrl : c, u.container = u.container ? u.container : p, u.classes = u.classes ? u.classes : "";
      var d = u.scope ? u.scope.$new() : i.$new();
      if (d.$position = u.position ? u.position : l, d.$message = u.message, d.$classes = u.classes, d.$messageTemplate = u.messageTemplate, g > 0)
        for (var y = f.length + 1 - g, $ = 0; $ < y; $++) f[$].$close();
      n.get(u.templateUrl, {
        cache: a
      }).then(function(n) {
        var a = t(n.data)(d);
        if (a.bind("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd", function(e) {
            ("opacity" === e.propertyName || 0 === e.currentTarget.style.opacity || e.originalEvent && "opacity" === e.originalEvent.propertyName) && (a.remove(), m.splice(m.indexOf(a), 1), f.splice(f.indexOf(d), 1), c())
          }), u.messageTemplate) {
          for (var i, r = 0; r < a.children().length; r++)
            if (angular.element(a.children()[r]).hasClass("cg-notify-message-template")) {
              i = angular.element(a.children()[r]);
              break
            }
          if (!i) throw new Error("cgNotify could not find the .cg-notify-message-template element in " + u.templateUrl + ".");
          i.append(t(u.messageTemplate)(d))
        }
        angular.element(u.container).append(a), m.push(a), "center" === d.$position && e(function() {
          d.$centerMargin = "-" + a[0].offsetWidth / 2 + "px"
        }), d.$close = function() {
          a.css("opacity", 0).attr("data-closing", "true"), c()
        };
        var c = function() {
          for (var e = 0, n = s, t = m.length - 1; t >= 0; t--) {
            var a = 10,
              i = m[t],
              r = i[0].offsetHeight,
              c = n + r + a;
            i.attr("data-closing") ? c += 20 : n += r + o, i.css("top", c + "px").css("margin-top", "-" + (r + a) + "px").css("visibility", "visible"), e++
          }
        };
        e(function() {
          c()
        }), u.duration > 0 && e(function() {
          d.$close()
        }, u.duration)
      }, function(e) {
        throw new Error("Template specified for cgNotify (" + u.templateUrl + ") could not be loaded. " + e)
      });
      var h = {};
      return h.close = function() {
        d.$close && d.$close()
      }, Object.defineProperty(h, "message", {
        get: function() {
          return d.$message
        },
        set: function(e) {
          d.$message = e
        }
      }), f.push(d), h
    };
  return u.config = function(e) {
    s = angular.isUndefined(e.startTop) ? s : e.startTop, o = angular.isUndefined(e.verticalSpacing) ? o : e.verticalSpacing, r = angular.isUndefined(e.duration) ? r : e.duration, c = e.templateUrl ? e.templateUrl : c, l = angular.isUndefined(e.position) ? l : e.position, p = e.container ? e.container : p, g = e.maximumOpen ? e.maximumOpen : g
  }, u.closeAll = function() {
    for (var e = m.length - 1; e >= 0; e--) {
      var n = m[e];
      n.css("opacity", 0)
    }
  }, u
}]), angular.module("cgNotify").run(["$templateCache", function(e) {
  "use strict";
  e.put("angular-notify.html", "<div class=\"cg-notify-message\" ng-class=\"[$classes, \n    $position === 'center' ? 'cg-notify-message-center' : '',\n    $position === 'left' ? 'cg-notify-message-left' : '',\n    $position === 'right' ? 'cg-notify-message-right' : '']\"\n    ng-style=\"{'margin-left': $centerMargin}\">\n\n    <div ng-show=\"!$messageTemplate\">\n        {{$message}}\n    </div>\n\n" + '    <div ng-show="$messageTemplate" class="cg-notify-message-template">\n        \n    </div>\n\n    <button type="button" class="cg-notify-close" ng-click="$close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="cg-notify-sr-only">Close</span>\n    </button>\n\n</div>')
}]);
! function(n, e) {
  "use strict";
  if ("function" == typeof define && define.amd) define(["angular"], e);
  else {
    if ("undefined" == typeof module || "object" != typeof module.exports) return e(n.angular);
    module.exports = e(require("angular"))
  }
}(window, function(n) {
  "use strict";

  function e(n, e, t, r) {
    if (void 0 === n || null === n || "" === n) return 0;
    var u = "";
    return u = "," === e ? String(n).replace(".", ",") : String(n)
  }

  function t(n, e, t) {
    return "," === e ? String(n).replace(/['\.\s]/g, "").replace(",", ".") : "." === e ? String(n).replace(/[',\s]/g, "") : void 0
  }

  function r(n, e, t) {
    var r = n;
    return t && (r += t), e && (r = /^\-.+/.test(r) ? r.replace("-", "-" + e) : /^\-/.test(r) ? r : e + r), r
  }

  function u(n, e) {
    if (n >= 0) {
      var t = parseInt(n, 10);
      if (isNaN(t) === !1 && isFinite(t) && t >= 0) return t
    }
    return e
  }

  function a(n, e) {
    if (n >= 0) {
      var t = parseInt(n, 10);
      if (isNaN(t) === !1 && isFinite(t) && t >= 0) return t
    }
    return e
  }

  function i(n, e) {
    return "," === n ? "," : "." === n ? "." : e
  }

  function o(n, e) {
    return "false" !== n && n !== !1 && ("true" === n || n === !0 || e)
  }

  function c(n, e) {
    return "false" !== n && n !== !1 && ("true" === n || n === !0 || e)
  }

  function d(n, e) {
    return "floor" === n ? Math.floor : "ceil" === n ? Math.ceil : "round" === n ? Math.round : e
  }

  function p(n, e) {
    return "false" !== n && n !== !1 && ("true" === n || n === !0 || e)
  }

  function m(n, e) {
    return "false" !== n && n !== !1 && ("true" === n || n === !0 || e)
  }

  function s(n, e, t) {
    if (!n) return t;
    var r;
    return r = "." === e ? new RegExp("^[',\\s]$") : new RegExp("^['\\.\\s]$"), r.test(n) ? n : t
  }

  function f(n) {
    var e = new RegExp("[^\\d,\\.\\s\\-]{1}");
    return e.test(n) ? n : null
  }

  function l(n, e, t, r, u) {
    var a = "-?";
    r === !1 && u === !0 ? a = "-" : r === !0 && u === !1 && (a = "");
    var i = "[0-9]{0," + n + "}";
    0 === n && (i = "0");
    var o = "(\\" + t + "([0-9]){0," + e + "})";
    return 0 === e && (o = ""), new RegExp("^" + a + i + o + "?$")
  }

  function g(n) {
    return String(n).replace(/^0+/g, "").replace(/^-0(\d+)/g, "-$1").replace(new RegExp("^-([\\.,\\s])", "g"), "-0$1").replace(new RegExp("^[\\.,\\s]", "g"), "0$&")
  }

  function v(n, e, t) {
    var r = n;
    return e && (r = r.replace(new RegExp("[\\" + e + "]", "g"), "")), t && (r = r.replace(new RegExp("[\\" + t + "]", "g"), "")), r
  }

  function S(n, e) {
    return "." === e ? String(n).replace(/\./g, "") : "," === e ? String(n).replace(/,/g, "") : String(n).replace(new RegExp("['\\s]", "g"), "")
  }

  function h(n, e, t) {
    return n = String(n).split(e), n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, t), n.join(e)
  }

  function w(n, e) {
    var t = n;
    if (e.isFixed) {
      var r = t.split(e.fractionSeparator)[1],
        u = r && r.length ? r.length : 0;
      0 === u && (t += e.fractionSeparator);
      for (var a = u; a < e.fractionPart; a++) t += "0"
    }
    return t
  }

  function x(e, t, u, a, i) {
    i && (a.enable = !1);
    var o = String(t),
      c = w(o, u),
      d = r(c, u.prepend, u.append),
      p = n.version;
    1 === p.major && 2 === p.minor ? e.$viewValue = d : e.$setViewValue(d), e.$render()
  }

  function $(n, t, u, a, i, o, c, d, p) {
    if ("" === n || void 0 === n || null === n) return "";
    if (n = Number(n), !isNaN(n) && isFinite(n)) {
      var m = Math.pow(10, t);
      return n = i ? e((a(n * m) / m).toFixed(t), u, d, p) : e(String(a(n * m) / m), u, d, p), n = r(n, d, p), o && (n = h(n, u, c)), n
    }
    return i ? (0).toFixed(t) : "0"
  }

  function F(n) {
    var e = 0;
    if (document.selection) {
      n.focus();
      var t = document.selection.createRange();
      t.moveStart("character", -n.value.length), e = t.text.length
    } else(n.selectionStart || "0" == n.selectionStart) && (e = "backward" == n.selectionDirection ? n.selectionStart : n.selectionEnd);
    return e
  }

  function N(n, e) {
    if (null !== n)
      if (n.createTextRange) {
        var t = n.createTextRange();
        t.move("character", e), t.select()
      } else n.selectionStart ? (n.focus(), n.setSelectionRange(e, e)) : n.focus()
  }

  function P(n, e, t) {
    for (var r = 0, u = 0, a = 0; a < n.length; a++)
      if (n[a] !== e) {
        if (r++, r >= t) break
      } else u++;
    return u
  }

  function R(n, e) {
    var t = n,
      r = t.split(e.fractionSeparator),
      u = r[0],
      a = r[1];
    return a && a.length > e.fractionPart && (a = a.slice(0, e.fractionPart), t = [u, a].join(e.fractionSeparator)), t
  }

  function T(n) {
    return null === n ? null : Number(n)
  }

  function b(n, e, t) {
    var r = {
      awnum: n.awnum,
      numInt: n.numInt,
      numFract: n.numFract,
      numSep: n.numSep,
      numPos: n.numPos,
      numNeg: n.numNeg,
      numRound: n.numRound,
      numThousand: n.numThousand,
      numThousandSep: n.numThousandSep,
      numPrepend: n.numPrepend,
      numAppend: n.numAppend,
      numFixed: n.numFixed
    };
    return e && (r[e] = t), r
  }

  function y(n, e) {
    return n.replace(new RegExp("[\\" + e.fractionSeparator + "]+", "g"), e.fractionSeparator)
  }

  function E(n, e, t, r, g) {
    var v = {};
    n.awnum && (v = g.getStrategy(n.awnum));
    var S = u(void 0 !== n.numInt ? n.numInt : v.numInt, 6),
      h = a(void 0 !== n.numFract ? n.numFract : v.numFract, 2),
      w = i(void 0 !== n.numSep ? n.numSep : v.numSep, "."),
      x = o(void 0 !== n.numPos ? n.numPos : v.numPos, !0),
      $ = c(void 0 !== n.numNeg ? n.numNeg : v.numNeg, !0),
      F = d(void 0 !== n.numRound ? n.numRound : v.numRound, Math.round),
      N = m(void 0 !== n.numThousand ? n.numThousand : v.numThousand, !1),
      P = s(void 0 !== n.numThousandSep ? n.numThousandSep : v.numThousandSep, w, "." === w ? "," : "."),
      R = f(void 0 !== n.numPrepend ? n.numPrepend : v.numPrepend),
      T = f(void 0 !== n.numAppend ? n.numAppend : v.numAppend),
      b = p(void 0 !== n.numFixed ? n.numFixed : v.numFixed, !1);
    if (x === !1 && $ === !1) throw new Error("Number is set to not be positive and not be negative. Change num_pos attr or/and num_neg attr to true");
    var y = l(S, h, w, x, $);
    return {
      element: e,
      attrs: t,
      ngModelController: r,
      viewRegexTest: y,
      integerPart: S,
      fractionPart: h,
      fractionSeparator: w,
      isPositiveNumber: x,
      isNegativeNumber: $,
      roundFunction: F,
      isThousandSeparator: N,
      thousandSeparator: P,
      prepend: R,
      append: T,
      isFixed: b
    }
  }

  function A(n, r, u) {
    var a = r.element,
      i = (r.attrs, r.ngModelController),
      o = r.viewRegexTest,
      c = (r.integerPart, r.fractionPart),
      d = r.fractionSeparator,
      p = r.isPositiveNumber,
      m = r.isNegativeNumber,
      s = (r.roundFunction, r.isThousandSeparator),
      f = r.thousandSeparator,
      l = r.prepend,
      w = r.append,
      $ = (r.isFixed, String(n));
    if (j) {
      j = !1;
      var T = new RegExp("[^" + (m ? "-" : "") + d + f + "0-9]+", "g");
      $ = $.replace(T, ""), T = new RegExp("^[" + d + f + "]"), $ = $.replace(T, ""), T = new RegExp("[" + d + f + "]([0-9]{" + c + "})$"), $ = $.replace(T, d + "$1")
    }
    if ($ = v($, l, w), $ = y($, r), new RegExp("^[.," + f + "]{2,}").test($)) return x(i, "", r, u), null;
    var b = F(a[0]);
    l && b--;
    var E = $.slice(0, b);
    E = S(E, f), $ = S($, f), E = g(E);
    var A = $;
    if ($ = g($), $ === "0" + d && A === d && p) return c ? (x(i, "" + d, r, u, !0), N(a[0], 2), null) : (x(i, "", r, u), null);
    if ("" === $ && "0" === String(n).charAt(0)) return x(i, "", r), null;
    if (void 0 === $ || "" === $) return x(i, "", r), null;
    if ("-" === $) return p && !m ? x(i, "", r, u) : x(i, "-", r, u), null;
    if ($ = R($, r), o.test($) === !1) {
      var I = e(i.$modelValue, d, r);
      return s && (I = h(I, d, f)), x(i, I, r, u), N(a[0], b - 1), i.$modelValue
    }
    var M = 0,
      V = E.length;
    return s && ($ = h($, d, f), M = P($, f, V)), l && (M++, new RegExp("^(\\-\\d)$").test($) && (M += 2), new RegExp("^(\\d)$").test($) && M++), x(i, $, r, u), N(a[0], V + M), t($, d, f)
  }

  function I(n, e) {
    n.$setViewValue(""), n.$render(), n.$setViewValue(e), n.$render()
  }

  function M(n, e) {
    var t = $(n.$modelValue, e.fractionPart, e.fractionSeparator, e.roundFunction, e.isFixed, e.isThousandSeparator, e.thousandSeparator, e.prepend, e.append);
    I(n, t)
  }

  function V(n) {
    return {
      restrict: "A",
      require: "?ngModel",
      scope: {
        awnum: "@",
        numInt: "@",
        numFract: "@",
        numSep: "@",
        numPos: "@",
        numNeg: "@",
        numRound: "@",
        numThousand: "@",
        numThousandSep: "@",
        numPrepend: "@",
        numAppend: "@",
        numFixed: "@"
      },
      link: function(e, t, r, u) {
        if (!t[0] || "INPUT" !== t[0].tagName || "text" !== t[0].type && "tel" !== t[0].type) return void console.warn("Directive angular-dynamic-number works only for 'input' tag with type = 'text' or type = 'tel'");
        if (!u) return void console.warn("Directive angular-dynamic-number need ngModel attribute");
        var a = E(b(e), t, r, u, n);
        t.on("paste", function() {
          j = !0
        }), e.$watch("numInt", function(i, o) {
          o !== i && (a = E(b(e, "numInt", i), t, r, u, n), M(u, a))
        }), e.$watch("numFract", function(i, o) {
          o !== i && (a = E(b(e, "numFract", i), t, r, u, n), M(u, a))
        }), e.$watch("numSep", function(i, o) {
          o !== i && (a = E(b(e, "numSep", i), t, r, u, n), M(u, a))
        }), e.$watch("numPos", function(i, o) {
          o !== i && (a = E(b(e, "numPos", i), t, r, u, n), M(u, a))
        }), e.$watch("numNeg", function(i, o) {
          o !== i && (a = E(b(e, "numNeg", i), t, r, u, n), M(u, a))
        }), e.$watch("numThousand", function(i, o) {
          o !== i && (a = E(b(e, "numThousand", i), t, r, u, n), M(u, a))
        }), e.$watch("numThousandSep", function(i, o) {
          o !== i && (a = E(b(e, "numThousandSep", i), t, r, u, n), M(u, a))
        }), e.$watch("numAppend", function(i, o) {
          o !== i && (a = E(b(e, "numAppend", i), t, r, u, n), M(u, a))
        }), e.$watch("numPrepend", function(i, o) {
          o !== i && (a = E(b(e, "numPrepend", i), t, r, u, n), M(u, a))
        }), e.$watch("numFixed", function(i, o) {
          o !== i && (a = E(b(e, "numFixed", i), t, r, u, n), M(u, a))
        });
        var i = {
          enable: !0,
          count: 0
        };
        u.$parsers.unshift(function(n) {
          return i.enable ? (i.count++, T(A(n, a, i))) : (i.enable = !0, n)
        }), u.$formatters.push(function(n) {
          return $(n, a.fractionPart, a.fractionSeparator, a.roundFunction, a.isFixed, a.isThousandSeparator, a.thousandSeparator, a.prepend, a.append)
        })
      }
    }
  }
  var j = !1,
    k = "dynamicNumber";
  return n.module(k, []).provider("dynamicNumberStrategy", function() {
    var n = {};
    this.addStrategy = function(e, t) {
      n[e] = t
    }, this.getStrategy = function(e) {
      return n[e]
    }, this.$get = function() {
      return {
        getStrategy: function(e) {
          return n[e]
        }
      }
    }
  }).filter("awnum", ["dynamicNumberStrategy", function(e) {
    return function(t, r, u, o, c, l, g, v, S) {
      var h, w = {};
      n.isString(r) && (w = e.getStrategy(r), r = w.numFract);
      var h = a(r, 2),
        x = i(void 0 !== u ? u : w.numSep, "."),
        F = d(void 0 !== o ? o : w.numRound, Math.round),
        N = p(void 0 !== c ? c : w.numFixed, !1),
        P = m(void 0 !== l ? l : w.numThousand, !1),
        R = s(void 0 !== g ? g : w.numThousandSep, x, "." === x ? "," : "."),
        T = f(void 0 !== v ? v : w.numPrepend),
        b = f(void 0 !== S ? S : w.numAppend),
        y = $(t, h, x, F, N, P, R, T, b);
      return "" === y ? "0" : y
    }
  }]).directive("awnum", ["dynamicNumberStrategy", V]), k
});
! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["angular-file-upload"] = t() : e["angular-file-upload"] = t()
}(this, function() {
  return function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
  }([function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = n(1),
      i = o(r),
      s = n(2),
      a = o(s),
      u = n(3),
      l = o(u),
      p = n(4),
      c = o(p),
      f = n(5),
      d = o(f),
      h = n(6),
      y = o(h),
      v = n(7),
      m = o(v),
      _ = n(8),
      g = o(_),
      b = n(9),
      F = o(b),
      O = n(10),
      C = o(O),
      w = n(11),
      A = o(w),
      I = n(12),
      T = o(I),
      U = n(13),
      x = o(U);
    angular.module(i.default.name, []).value("fileUploaderOptions", a.default).factory("FileUploader", l.default).factory("FileLikeObject", c.default).factory("FileItem", d.default).factory("FileDirective", y.default).factory("FileSelect", m.default).factory("FileDrop", F.default).factory("FileOver", C.default).factory("Pipeline", g.default).directive("nvFileSelect", A.default).directive("nvFileDrop", T.default).directive("nvFileOver", x.default).run(["FileUploader", "FileLikeObject", "FileItem", "FileDirective", "FileSelect", "FileDrop", "FileOver", "Pipeline", function(e, t, n, o, r, i, s, a) {
      e.FileLikeObject = t, e.FileItem = n, e.FileDirective = o, e.FileSelect = r, e.FileDrop = i, e.FileOver = s, e.Pipeline = a
    }])
  }, function(e, t) {
    e.exports = {
      name: "angularFileUpload"
    }
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      url: "/",
      alias: "file",
      headers: {},
      queue: [],
      progress: 0,
      autoUpload: !1,
      removeAfterUpload: !1,
      method: "POST",
      filters: [],
      formData: [],
      queueLimit: Number.MAX_VALUE,
      withCredentials: !1,
      disableMultipart: !1
    }
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t, n, o, i, a, u, g) {
      var b = o.File,
        F = o.FormData,
        O = function() {
          function o(t) {
            r(this, o);
            var n = p(e);
            c(this, n, t, {
              isUploading: !1,
              _nextIndex: 0,
              _directives: {
                select: [],
                drop: [],
                over: []
              }
            }), this.filters.unshift({
              name: "queueLimit",
              fn: this._queueLimitFilter
            }), this.filters.unshift({
              name: "folder",
              fn: this._folderFilter
            })
          }
          return o.prototype.addToQueue = function(e, t, n) {
            var o = this,
              r = this.isArrayLikeObject(e) ? Array.prototype.slice.call(e) : [e],
              i = this._getFilters(n),
              l = this.queue.length,
              p = [],
              c = function e() {
                var n = r.shift();
                if (m(n)) return f();
                var l = o.isFile(n) ? n : new a(n),
                  c = o._convertFiltersToPipes(i),
                  d = new g(c),
                  h = function(t) {
                    var n = t.pipe.originalFilter,
                      r = s(t.args, 2),
                      i = r[0],
                      a = r[1];
                    o._onWhenAddingFileFailed(i, n, a), e()
                  },
                  y = function(t, n) {
                    var r = new u(o, t, n);
                    p.push(r), o.queue.push(r), o._onAfterAddingFile(r), e()
                  };
                d.onThrown = h, d.onSuccessful = y, d.exec(l, t)
              },
              f = function() {
                o.queue.length !== l && (o._onAfterAddingAll(p), o.progress = o._getTotalProgress()), o._render(), o.autoUpload && o.uploadAll()
              };
            c()
          }, o.prototype.removeFromQueue = function(e) {
            var t = this.getIndexOfItem(e),
              n = this.queue[t];
            n.isUploading && n.cancel(), this.queue.splice(t, 1), n._destroy(), this.progress = this._getTotalProgress()
          }, o.prototype.clearQueue = function() {
            for (; this.queue.length;) this.queue[0].remove();
            this.progress = 0
          }, o.prototype.uploadItem = function(e) {
            var t = this.getIndexOfItem(e),
              n = this.queue[t],
              o = this.isHTML5 ? "_xhrTransport" : "_iframeTransport";
            n._prepareToUploading(), this.isUploading || (this._onBeforeUploadItem(n), n.isCancel || (n.isUploading = !0, this.isUploading = !0, this[o](n), this._render()))
          }, o.prototype.cancelItem = function(e) {
            var t = this,
              n = this.getIndexOfItem(e),
              o = this.queue[n],
              r = this.isHTML5 ? "_xhr" : "_form";
            o && (o.isCancel = !0, o.isUploading ? o[r].abort() : ! function() {
              var e = [void 0, 0, {}],
                n = function() {
                  t._onCancelItem.apply(t, [o].concat(e)), t._onCompleteItem.apply(t, [o].concat(e))
                };
              i(n)
            }())
          }, o.prototype.uploadAll = function() {
            var e = this.getNotUploadedItems().filter(function(e) {
              return !e.isUploading
            });
            e.length && (f(e, function(e) {
              return e._prepareToUploading()
            }), e[0].upload())
          }, o.prototype.cancelAll = function() {
            var e = this.getNotUploadedItems();
            f(e, function(e) {
              return e.cancel()
            })
          }, o.prototype.isFile = function(e) {
            return this.constructor.isFile(e)
          }, o.prototype.isFileLikeObject = function(e) {
            return this.constructor.isFileLikeObject(e)
          }, o.prototype.isArrayLikeObject = function(e) {
            return this.constructor.isArrayLikeObject(e)
          }, o.prototype.getIndexOfItem = function(e) {
            return h(e) ? e : this.queue.indexOf(e)
          }, o.prototype.getNotUploadedItems = function() {
            return this.queue.filter(function(e) {
              return !e.isUploaded
            })
          }, o.prototype.getReadyItems = function() {
            return this.queue.filter(function(e) {
              return e.isReady && !e.isUploading
            }).sort(function(e, t) {
              return e.index - t.index
            })
          }, o.prototype.destroy = function() {
            var e = this;
            f(this._directives, function(t) {
              f(e._directives[t], function(e) {
                e.destroy()
              })
            })
          }, o.prototype.onAfterAddingAll = function(e) {}, o.prototype.onAfterAddingFile = function(e) {}, o.prototype.onWhenAddingFileFailed = function(e, t, n) {}, o.prototype.onBeforeUploadItem = function(e) {}, o.prototype.onProgressItem = function(e, t) {}, o.prototype.onProgressAll = function(e) {}, o.prototype.onSuccessItem = function(e, t, n, o) {}, o.prototype.onErrorItem = function(e, t, n, o) {}, o.prototype.onCancelItem = function(e, t, n, o) {}, o.prototype.onCompleteItem = function(e, t, n, o) {}, o.prototype.onCompleteAll = function() {}, o.prototype._getTotalProgress = function(e) {
            if (this.removeAfterUpload) return e || 0;
            var t = this.getNotUploadedItems().length,
              n = t ? this.queue.length - t : this.queue.length,
              o = 100 / this.queue.length,
              r = (e || 0) * o / 100;
            return Math.round(n * o + r)
          }, o.prototype._getFilters = function(e) {
            if (!e) return this.filters;
            if (v(e)) return e;
            var t = e.match(/[^\s,]+/g);
            return this.filters.filter(function(e) {
              return t.indexOf(e.name) !== -1
            })
          }, o.prototype._convertFiltersToPipes = function(e) {
            var t = this;
            return e.map(function(e) {
              var n = l(t, e.fn);
              return n.isAsync = 3 === e.fn.length, n.originalFilter = e, n
            })
          }, o.prototype._render = function() {
            t.$$phase || t.$apply()
          }, o.prototype._folderFilter = function(e) {
            return !(!e.size && !e.type)
          }, o.prototype._queueLimitFilter = function() {
            return this.queue.length < this.queueLimit
          }, o.prototype._isSuccessCode = function(e) {
            return e >= 200 && e < 300 || 304 === e
          }, o.prototype._transformResponse = function(e, t) {
            var o = this._headersGetter(t);
            return f(n.defaults.transformResponse, function(t) {
              e = t(e, o)
            }), e
          }, o.prototype._parseHeaders = function(e) {
            var t, n, o, r = {};
            return e ? (f(e.split("\n"), function(e) {
              o = e.indexOf(":"), t = e.slice(0, o).trim().toLowerCase(), n = e.slice(o + 1).trim(), t && (r[t] = r[t] ? r[t] + ", " + n : n)
            }), r) : r
          }, o.prototype._headersGetter = function(e) {
            return function(t) {
              return t ? e[t.toLowerCase()] || null : e
            }
          }, o.prototype._xhrTransport = function(e) {
            var t, n = this,
              o = e._xhr = new XMLHttpRequest;
            if (e.disableMultipart ? t = e._file : (t = new F, f(e.formData, function(e) {
                f(e, function(e, n) {
                  t.append(n, e)
                })
              }), t.append(e.alias, e._file, e.file.name)), "number" != typeof e._file.size) throw new TypeError("The file specified is no longer valid");
            o.upload.onprogress = function(t) {
              var o = Math.round(t.lengthComputable ? 100 * t.loaded / t.total : 0);
              n._onProgressItem(e, o)
            }, o.onload = function() {
              var t = n._parseHeaders(o.getAllResponseHeaders()),
                r = n._transformResponse(o.response, t),
                i = n._isSuccessCode(o.status) ? "Success" : "Error",
                s = "_on" + i + "Item";
              n[s](e, r, o.status, t), n._onCompleteItem(e, r, o.status, t)
            }, o.onerror = function() {
              var t = n._parseHeaders(o.getAllResponseHeaders()),
                r = n._transformResponse(o.response, t);
              n._onErrorItem(e, r, o.status, t), n._onCompleteItem(e, r, o.status, t)
            }, o.onabort = function() {
              var t = n._parseHeaders(o.getAllResponseHeaders()),
                r = n._transformResponse(o.response, t);
              n._onCancelItem(e, r, o.status, t), n._onCompleteItem(e, r, o.status, t)
            }, o.open(e.method, e.url, !0), o.withCredentials = e.withCredentials, f(e.headers, function(e, t) {
              o.setRequestHeader(t, e)
            }), o.send(t)
          }, o.prototype._iframeTransport = function(e) {
            var t = this,
              n = _('<form style="display: none;" />'),
              o = _('<iframe name="iframeTransport' + Date.now() + '">'),
              r = e._input;
            e._form && e._form.replaceWith(r), e._form = n, r.prop("name", e.alias), f(e.formData, function(e) {
              f(e, function(e, t) {
                var o = _('<input type="hidden" name="' + t + '" />');
                o.val(e), n.append(o)
              })
            }), n.prop({
              action: e.url,
              method: "POST",
              target: o.prop("name"),
              enctype: "multipart/form-data",
              encoding: "multipart/form-data"
            }), o.bind("load", function() {
              var n = "",
                r = 200;
              try {
                n = o[0].contentDocument.body.innerHTML
              } catch (e) {
                r = 500
              }
              var i = {
                  response: n,
                  status: r,
                  dummy: !0
                },
                s = {},
                a = t._transformResponse(i.response, s);
              t._onSuccessItem(e, a, i.status, s), t._onCompleteItem(e, a, i.status, s)
            }), n.abort = function() {
              var i, s = {
                  status: 0,
                  dummy: !0
                },
                a = {};
              o.unbind("load").prop("src", "javascript:false;"), n.replaceWith(r), t._onCancelItem(e, i, s.status, a), t._onCompleteItem(e, i, s.status, a)
            }, r.after(n), n.append(r).append(o), n[0].submit()
          }, o.prototype._onWhenAddingFileFailed = function(e, t, n) {
            this.onWhenAddingFileFailed(e, t, n)
          }, o.prototype._onAfterAddingFile = function(e) {
            this.onAfterAddingFile(e)
          }, o.prototype._onAfterAddingAll = function(e) {
            this.onAfterAddingAll(e)
          }, o.prototype._onBeforeUploadItem = function(e) {
            e._onBeforeUpload(), this.onBeforeUploadItem(e)
          }, o.prototype._onProgressItem = function(e, t) {
            var n = this._getTotalProgress(t);
            this.progress = n, e._onProgress(t), this.onProgressItem(e, t), this.onProgressAll(n), this._render()
          }, o.prototype._onSuccessItem = function(e, t, n, o) {
            e._onSuccess(t, n, o), this.onSuccessItem(e, t, n, o)
          }, o.prototype._onErrorItem = function(e, t, n, o) {
            e._onError(t, n, o), this.onErrorItem(e, t, n, o)
          }, o.prototype._onCancelItem = function(e, t, n, o) {
            e._onCancel(t, n, o), this.onCancelItem(e, t, n, o)
          }, o.prototype._onCompleteItem = function(e, t, n, o) {
            e._onComplete(t, n, o), this.onCompleteItem(e, t, n, o);
            var r = this.getReadyItems()[0];
            return this.isUploading = !1, y(r) ? void r.upload() : (this.onCompleteAll(), this.progress = this._getTotalProgress(), void this._render())
          }, o.isFile = function(e) {
            return b && e instanceof b
          }, o.isFileLikeObject = function(e) {
            return e instanceof a
          }, o.isArrayLikeObject = function(e) {
            return d(e) && "length" in e
          }, o.inherit = function(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.super_ = t
          }, o
        }();
      return O.prototype.isHTML5 = !(!b || !F), O.isHTML5 = O.prototype.isHTML5, O
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function() {
      function e(e, t) {
        var n = [],
          o = !0,
          r = !1,
          i = void 0;
        try {
          for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
        } catch (e) {
          r = !0, i = e
        } finally {
          try {
            !o && a.return && a.return()
          } finally {
            if (r) throw i
          }
        }
        return n
      }
      return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }();
    t.default = i;
    var a = n(1),
      u = (o(a), angular),
      l = u.bind,
      p = u.copy,
      c = u.extend,
      f = u.forEach,
      d = u.isObject,
      h = u.isNumber,
      y = u.isDefined,
      v = u.isArray,
      m = u.isUndefined,
      _ = u.element;
    i.$inject = ["fileUploaderOptions", "$rootScope", "$http", "$window", "$timeout", "FileLikeObject", "FileItem", "Pipeline"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i() {
      return function() {
        function e(t) {
          r(this, e);
          var n = l(t),
            o = n ? t.value : t,
            i = p(o) ? "FakePath" : "Object",
            s = "_createFrom" + i;
          this[s](o)
        }
        return e.prototype._createFromFakePath = function(e) {
          this.lastModifiedDate = null, this.size = null, this.type = "like/" + e.slice(e.lastIndexOf(".") + 1).toLowerCase(), this.name = e.slice(e.lastIndexOf("/") + e.lastIndexOf("\\") + 2)
        }, e.prototype._createFromObject = function(e) {
          this.lastModifiedDate = u(e.lastModifiedDate), this.size = e.size, this.type = e.type, this.name = e.name
        }, e
      }()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var s = n(1),
      a = (o(s), angular),
      u = a.copy,
      l = a.isElement,
      p = a.isString
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      return function() {
        function n(e, o, i) {
          r(this, n);
          var s = c(o),
            a = s ? p(o) : null,
            f = s ? null : o;
          l(this, {
            url: e.url,
            alias: e.alias,
            headers: u(e.headers),
            formData: u(e.formData),
            removeAfterUpload: e.removeAfterUpload,
            withCredentials: e.withCredentials,
            disableMultipart: e.disableMultipart,
            method: e.method
          }, i, {
            uploader: e,
            file: new t(o),
            isReady: !1,
            isUploading: !1,
            isUploaded: !1,
            isSuccess: !1,
            isCancel: !1,
            isError: !1,
            progress: 0,
            index: null,
            _file: f,
            _input: a
          }), a && this._replaceNode(a)
        }
        return n.prototype.upload = function() {
          try {
            this.uploader.uploadItem(this)
          } catch (t) {
            var e = t.name + ":" + t.message;
            this.uploader._onCompleteItem(this, e, t.code, []), this.uploader._onErrorItem(this, e, t.code, [])
          }
        }, n.prototype.cancel = function() {
          this.uploader.cancelItem(this)
        }, n.prototype.remove = function() {
          this.uploader.removeFromQueue(this)
        }, n.prototype.onBeforeUpload = function() {}, n.prototype.onProgress = function(e) {}, n.prototype.onSuccess = function(e, t, n) {}, n.prototype.onError = function(e, t, n) {}, n.prototype.onCancel = function(e, t, n) {}, n.prototype.onComplete = function(e, t, n) {}, n.prototype._onBeforeUpload = function() {
          this.isReady = !0, this.isUploading = !1, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !1, this.isError = !1, this.progress = 0, this.onBeforeUpload()
        }, n.prototype._onProgress = function(e) {
          this.progress = e, this.onProgress(e)
        }, n.prototype._onSuccess = function(e, t, n) {
          this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !0, this.isCancel = !1, this.isError = !1, this.progress = 100, this.index = null, this.onSuccess(e, t, n)
        }, n.prototype._onError = function(e, t, n) {
          this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !1, this.isCancel = !1, this.isError = !0, this.progress = 0, this.index = null, this.onError(e, t, n)
        }, n.prototype._onCancel = function(e, t, n) {
          this.isReady = !1, this.isUploading = !1, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !0, this.isError = !1, this.progress = 0, this.index = null, this.onCancel(e, t, n)
        }, n.prototype._onComplete = function(e, t, n) {
          this.onComplete(e, t, n), this.removeAfterUpload && this.remove()
        }, n.prototype._destroy = function() {
          this._input && this._input.remove(), this._form && this._form.remove(), delete this._form, delete this._input
        }, n.prototype._prepareToUploading = function() {
          this.index = this.index || ++this.uploader._nextIndex, this.isReady = !0
        }, n.prototype._replaceNode = function(t) {
          var n = e(t.clone())(t.scope());
          n.prop("value", null), t.css("display", "none"), t.after(n)
        }, n
      }()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var s = n(1),
      a = (o(s), angular),
      u = a.copy,
      l = a.extend,
      p = a.element,
      c = a.isElement;
    i.$inject = ["$compile", "FileLikeObject"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i() {
      var e = function() {
        function e(t) {
          r(this, e), u(this, t), this.uploader._directives[this.prop].push(this), this._saveLinks(), this.bind()
        }
        return e.prototype.bind = function() {
          for (var e in this.events) {
            var t = this.events[e];
            this.element.bind(e, this[t])
          }
        }, e.prototype.unbind = function() {
          for (var e in this.events) this.element.unbind(e, this.events[e])
        }, e.prototype.destroy = function() {
          var e = this.uploader._directives[this.prop].indexOf(this);
          this.uploader._directives[this.prop].splice(e, 1), this.unbind()
        }, e.prototype._saveLinks = function() {
          for (var e in this.events) {
            var t = this.events[e];
            this[t] = this[t].bind(this)
          }
        }, e
      }();
      return e.prototype.events = {}, e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = i;
    var s = n(1),
      a = (o(s), angular),
      u = a.extend
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e, t) {
      return function(t) {
        function n(e) {
          r(this, n);
          var o = p(e, {
              events: {
                $destroy: "destroy",
                change: "onChange"
              },
              prop: "select"
            }),
            s = i(this, t.call(this, o));
          return s.uploader.isHTML5 || s.element.removeAttr("multiple"), s.element.prop("value", null), s
        }
        return s(n, t), n.prototype.getOptions = function() {}, n.prototype.getFilters = function() {}, n.prototype.isEmptyAfterSelection = function() {
          return !!this.element.attr("multiple")
        }, n.prototype.onChange = function() {
          var t = this.uploader.isHTML5 ? this.element[0].files : this.element[0],
            n = this.getOptions(),
            o = this.getFilters();
          this.uploader.isHTML5 || this.destroy(), this.uploader.addToQueue(t, n, o), this.isEmptyAfterSelection() && (this.element.prop("value", null), this.element.replaceWith(e(this.element.clone())(this.scope)))
        }, n
      }(t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    var u = n(1),
      l = (o(u), angular),
      p = l.extend;
    a.$inject = ["$compile", "FileDirective"]
  }, function(e, t) {
    "use strict";

    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e) {
      return function() {
        function t() {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
          o(this, t), this.pipes = e
        }
        return t.prototype.next = function(t) {
          var o = this.pipes.shift();
          if (a(o)) return void this.onSuccessful.apply(this, n(t));
          var r = new Error("The filter has not passed");
          if (r.pipe = o, r.args = t, o.isAsync) {
            var i = e.defer(),
              u = s(this, this.next, t),
              l = s(this, this.onThrown, r);
            i.promise.then(u, l), o.apply(void 0, n(t).concat([i]))
          } else {
            var p = Boolean(o.apply(void 0, n(t)));
            p ? this.next(t) : this.onThrown(r)
          }
        }, t.prototype.exec = function() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          this.next(t)
        }, t.prototype.onThrown = function(e) {}, t.prototype.onSuccessful = function() {}, t
      }()
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var i = angular,
      s = i.bind,
      a = i.isUndefined;
    r.$inject = ["$q"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
      return function(e) {
        function t(n) {
          r(this, t);
          var o = p(n, {
            events: {
              $destroy: "destroy",
              drop: "onDrop",
              dragover: "onDragOver",
              dragleave: "onDragLeave"
            },
            prop: "drop"
          });
          return i(this, e.call(this, o))
        }
        return s(t, e), t.prototype.getOptions = function() {}, t.prototype.getFilters = function() {}, t.prototype.onDrop = function(e) {
          var t = this._getTransfer(e);
          if (t) {
            var n = this.getOptions(),
              o = this.getFilters();
            this._preventAndStop(e), c(this.uploader._directives.over, this._removeOverClass, this), this.uploader.addToQueue(t.files, n, o)
          }
        }, t.prototype.onDragOver = function(e) {
          var t = this._getTransfer(e);
          this._haveFiles(t.types) && (t.dropEffect = "copy", this._preventAndStop(e), c(this.uploader._directives.over, this._addOverClass, this))
        }, t.prototype.onDragLeave = function(e) {
          e.currentTarget !== this.element[0] && (this._preventAndStop(e), c(this.uploader._directives.over, this._removeOverClass, this))
        }, t.prototype._getTransfer = function(e) {
          return e.dataTransfer ? e.dataTransfer : e.originalEvent.dataTransfer
        }, t.prototype._preventAndStop = function(e) {
          e.preventDefault(), e.stopPropagation()
        }, t.prototype._haveFiles = function(e) {
          return !!e && (e.indexOf ? e.indexOf("Files") !== -1 : !!e.contains && e.contains("Files"))
        }, t.prototype._addOverClass = function(e) {
          e.addOverClass()
        }, t.prototype._removeOverClass = function(e) {
          e.removeOverClass()
        }, t
      }(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    var u = n(1),
      l = (o(u), angular),
      p = l.extend,
      c = l.forEach;
    a.$inject = ["FileDirective"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
      return function(e) {
        function t(n) {
          r(this, t);
          var o = p(n, {
            events: {
              $destroy: "destroy"
            },
            prop: "over",
            overClass: "nv-file-over"
          });
          return i(this, e.call(this, o))
        }
        return s(t, e), t.prototype.addOverClass = function() {
          this.element.addClass(this.getOverClass())
        }, t.prototype.removeOverClass = function() {
          this.element.removeClass(this.getOverClass())
        }, t.prototype.getOverClass = function() {
          return this.overClass
        }, t
      }(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = a;
    var u = n(1),
      l = (o(u), angular),
      p = l.extend;
    a.$inject = ["FileDirective"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t, n) {
      return {
        link: function(o, r, i) {
          var s = o.$eval(i.uploader);
          if (!(s instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          var a = new n({
            uploader: s,
            element: r,
            scope: o
          });
          a.getOptions = e(i.options).bind(a, o), a.getFilters = function() {
            return i.filters
          }
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var i = n(1);
    o(i);
    r.$inject = ["$parse", "FileUploader", "FileSelect"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t, n) {
      return {
        link: function(o, r, i) {
          var s = o.$eval(i.uploader);
          if (!(s instanceof t)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          if (s.isHTML5) {
            var a = new n({
              uploader: s,
              element: r
            });
            a.getOptions = e(i.options).bind(a, o), a.getFilters = function() {
              return i.filters
            }
          }
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var i = n(1);
    o(i);
    r.$inject = ["$parse", "FileUploader", "FileDrop"]
  }, function(e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function r(e, t) {
      return {
        link: function(n, o, r) {
          var i = n.$eval(r.uploader);
          if (!(i instanceof e)) throw new TypeError('"Uploader" must be an instance of FileUploader');
          var s = new t({
            uploader: i,
            element: o
          });
          s.getOverClass = function() {
            return r.overClass || s.overClass
          }
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var i = n(1);
    o(i);
    r.$inject = ["FileUploader", "FileOver"]
  }])
});
angular.module("ui.date", []).directive("uiDate", ["uiDateConfig", "uiDateConverter", function(e, t) {
  "use strict";
  var r;
  return r = {}, angular.extend(r, e), {
    require: "?ngModel",
    link: function(r, n, a, i) {
      var o = function() {
          return angular.extend({}, e, r.$eval(a.uiDate))
        },
        u = function() {
          var e = !1,
            u = o();
          if (i) {
            var c = u.onSelect || angular.noop;
            u.onSelect = function(t, a) {
              r.$apply(function() {
                e = !0, i.$setViewValue(n.datepicker("getDate")), c(t, a), n.blur()
              })
            };
            var f = u.beforeShow || angular.noop;
            u.beforeShow = function(t, r) {
              e = !0, f(t, r)
            };
            var l = u.onClose || angular.noop;
            u.onClose = function(t, r) {
              e = !1, l(t, r)
            }, n.off("blur.datepicker").on("blur.datepicker", function() {
              e || r.$apply(function() {
                n.datepicker("setDate", n.datepicker("getDate")), i.$setViewValue(n.datepicker("getDate"))
              })
            }), i.$render = function() {
              var e = i.$modelValue;
              if (angular.isDefined(e) && null !== e && !angular.isDate(e)) {
                if (!angular.isString(i.$modelValue)) throw new Error("ng-Model value must be a Date, or a String object with a date formatter - currently it is a " + typeof e + " - use ui-date-format to convert it from a string");
                e = t.stringToDate(a.uiDateFormat, i.$modelValue)
              }
              n.datepicker("setDate", e)
            }
          }
          n.data("datepicker") ? (n.datepicker("option", u), n.datepicker("refresh")) : (n.datepicker(u), n.on("$destroy", function() {
            n.datepicker("destroy")
          })), i && i.$render()
        };
      r.$watch(o, u, !0)
    }
  }
}]).factory("uiDateConverter", ["uiDateFormatConfig", function(e) {
  function t(t, r) {
    if (t = t || e, r) {
      if (t) return jQuery.datepicker.formatDate(t, r);
      if (r.toISOString) return r.toISOString()
    }
    return null
  }

  function r(t, r) {
    if (t = t || e, angular.isString(r)) {
      if (t) return jQuery.datepicker.parseDate(t, r);
      var n = new Date(r);
      return isNaN(n.getTime()) ? null : n
    }
    return null
  }
  return {
    stringToDate: r,
    dateToString: t
  }
}]).constant("uiDateFormatConfig", "").directive("uiDateFormat", ["uiDateConverter", function(e) {
  var t = {
    require: "ngModel",
    link: function(t, r, n, a) {
      var i = n.uiDateFormat;
      a.$formatters.unshift(function(t) {
        return e.stringToDate(i, t)
      }), a.$parsers.push(function(t) {
        return e.dateToString(i, t)
      })
    }
  };
  return t
}]);
var mod;
mod = angular.module("infinite-scroll", []), mod.directive("infiniteScroll", ["$rootScope", "$window", "$timeout", function(i, n, e) {
  return {
    link: function(t, l, o) {
      var r, c, f, a;
      return n = angular.element(n), f = 0, null != o.infiniteScrollDistance && t.$watch(o.infiniteScrollDistance, function(i) {
        return f = parseInt(i, 10)
      }), a = !0, r = !1, null != o.infiniteScrollDisabled && t.$watch(o.infiniteScrollDisabled, function(i) {
        return a = !i, a && r ? (r = !1, c()) : void 0
      }), c = function() {
        var e, c, u, d;
        return d = n.height() + n.scrollTop(), e = l.offset().top + l.height(), c = e - d, u = n.height() * f >= c, u && a ? i.$$phase ? t.$eval(o.infiniteScroll) : t.$apply(o.infiniteScroll) : u ? r = !0 : void 0
      }, n.on("scroll", c), t.$on("$destroy", function() {
        return n.off("scroll", c)
      }), e(function() {
        return o.infiniteScrollImmediateCheck ? t.$eval(o.infiniteScrollImmediateCheck) ? c() : void 0 : c()
      }, 0)
    }
  }
}]);
angular.module("ui.utils", ["ui.keypress", "ui.mask"]), angular.module("ui.date").constant("uiDateConfig", {
  onClose: function(i, e) {
    var u = $(e.input);
    u.datepicker("setDate", u.datepicker("getDate")), u.datepicker("widget").is(":visible") && $(".datepicker").hide()
  }
}), angular.module("ui-modules", ["ui.router", "ui.utils", "ui.date", "ui.slider", "ui.sliderScale", "ui.bootstrap.modal", "ui.sortable", "infinite-scroll"]);
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.modal", "ui.bootstrap.transition"]), angular.module("ui.bootstrap.tpls", ["template/modal/backdrop.html", "template/modal/window.html"]), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
  return {
    createNew: function() {
      var e = [];
      return {
        add: function(n, t) {
          e.push({
            key: n,
            value: t
          })
        },
        get: function(n) {
          for (var t = 0; t < e.length; t++)
            if (n == e[t].key) return e[t]
        },
        keys: function() {
          for (var n = [], t = 0; t < e.length; t++) n.push(e[t].key);
          return n
        },
        top: function() {
          return e[e.length - 1]
        },
        remove: function(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (n == e[o].key) {
              t = o;
              break
            }
          return e.splice(t, 1)[0]
        },
        removeTop: function() {
          return e.splice(e.length - 1, 1)[0]
        },
        length: function() {
          return e.length
        }
      }
    }
  }
}).directive("modalBackdrop", ["$timeout", function(e) {
  return {
    restrict: "EA",
    replace: !0,
    templateUrl: "template/modal/backdrop.html",
    link: function(n, t, o) {
      n.backdropClass = o.backdropClass || "", n.animate = !1, e(function() {
        n.animate = !0
      })
    }
  }
}]).directive("modalWindow", ["$modalStack", "$timeout", function(e, n) {
  return {
    restrict: "EA",
    scope: {
      index: "@",
      animate: "="
    },
    replace: !0,
    transclude: !0,
    templateUrl: function(e, n) {
      return n.templateUrl || "template/modal/window.html"
    },
    link: function(t, o, a) {
      o.addClass(a.windowClass || ""), t.size = a.size, n(function() {
        t.animate = !0, o[0].querySelectorAll("[autofocus]").length || o[0].focus()
      }), t.close = function(n) {
        var t = e.getTop();
        t && t.value.backdrop && "static" != t.value.backdrop && n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), e.dismiss(t.key, "backdrop click"))
      }
    }
  }
}]).directive("modalTransclude", function() {
  return {
    link: function(e, n, t, o, a) {
      a(e.$parent, function(e) {
        n.empty(), n.append(e)
      })
    }
  }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(e, n, t, o, a, i) {
  function r() {
    for (var e = -1, n = p.keys(), t = 0; t < n.length; t++) p.get(n[t]).value.backdrop && (e = t);
    return e
  }

  function l(e) {
    var n = t.find("body").eq(0),
      o = p.get(e).value;
    p.remove(e), s(o.modalDomEl, o.modalScope, 300, function() {
      o.modalScope.$destroy(), n.toggleClass(m, p.length() > 0), d()
    })
  }

  function d() {
    if (c && r() == -1) {
      var e = u;
      s(c, u, 150, function() {
        e.$destroy(), e = null
      }), c = void 0, u = void 0
    }
  }

  function s(t, o, a, i) {
    function r() {
      r.done || (r.done = !0, t.remove(), i && i())
    }
    o.animate = !1;
    var l = e.transitionEndEventName;
    if (l) {
      var d = n(r, a);
      t.bind(l, function() {
        n.cancel(d), r(), o.$apply()
      })
    } else n(r)
  }
  var c, u, m = "modal-open",
    p = i.createNew(),
    f = {};
  return a.$watch(r, function(e) {
    u && (u.index = e)
  }), t.bind("keydown", function(e) {
    var n;
    27 === e.which && (n = p.top(), n && n.value.keyboard && (e.preventDefault(), a.$apply(function() {
      f.dismiss(n.key, "escape key press")
    })))
  }), f.open = function(e, n) {
    p.add(e, {
      deferred: n.deferred,
      modalScope: n.scope,
      backdrop: n.backdrop,
      keyboard: n.keyboard
    });
    var i = t.find("body").eq(0),
      l = r();
    if (l >= 0 && !c) {
      u = a.$new(!0), u.index = l;
      var d = angular.element("<div modal-backdrop></div>");
      d.attr("backdrop-class", n.backdropClass), c = o(d)(u), i.append(c)
    }
    var s = angular.element("<div modal-window></div>");
    s.attr({
      "template-url": n.windowTemplateUrl,
      "window-class": n.windowClass,
      size: n.size,
      index: p.length() - 1,
      animate: "animate"
    }).html(n.content);
    var f = o(s)(n.scope);
    p.top().value.modalDomEl = f, i.append(f), i.addClass(m)
  }, f.close = function(e, n) {
    var t = p.get(e);
    t && (t.value.deferred.resolve(n), l(e))
  }, f.dismiss = function(e, n) {
    var t = p.get(e);
    t && (t.value.deferred.reject(n), l(e))
  }, f.dismissAll = function(e) {
    for (var n = this.getTop(); n;) this.dismiss(n.key, e), n = this.getTop()
  }, f.getTop = function() {
    return p.top()
  }, f
}]).provider("$modal", function() {
  var e = {
    options: {
      backdrop: !0,
      keyboard: !0
    },
    $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(n, t, o, a, i, r, l) {
      function d(e) {
        return e.template ? o.when(e.template) : a.get(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl, {
          cache: i
        }).then(function(e) {
          return e.data
        })
      }

      function s(e) {
        var t = [];
        return angular.forEach(e, function(e) {
          (angular.isFunction(e) || angular.isArray(e)) && t.push(o.when(n.invoke(e)))
        }), t
      }
      var c = {};
      return c.open = function(n) {
        var a = o.defer(),
          i = o.defer(),
          c = {
            result: a.promise,
            opened: i.promise,
            close: function(e) {
              l.close(c, e)
            },
            dismiss: function(e) {
              l.dismiss(c, e)
            }
          };
        if (n = angular.extend({}, e.options, n), n.resolve = n.resolve || {}, !n.template && !n.templateUrl) throw new Error("One of template or templateUrl options is required.");
        var u = o.all([d(n)].concat(s(n.resolve)));
        return u.then(function(e) {
          var o = (n.scope || t).$new();
          o.$close = c.close, o.$dismiss = c.dismiss;
          var i, d = {},
            s = 1;
          n.controller && (d.$scope = o, d.$modalInstance = c, angular.forEach(n.resolve, function(n, t) {
            d[t] = e[s++]
          }), i = r(n.controller, d), n.controllerAs && (o[n.controllerAs] = i)), l.open(c, {
            scope: o,
            deferred: a,
            content: e[0],
            backdrop: n.backdrop,
            keyboard: n.keyboard,
            backdropClass: n.backdropClass,
            windowClass: n.windowClass,
            windowTemplateUrl: n.windowTemplateUrl,
            size: n.size
          })
        }, function(e) {
          a.reject(e)
        }), u.then(function() {
          i.resolve(!0)
        }, function() {
          i.reject(!1)
        }), c
      }, c
    }]
  };
  return e
}), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(e, n, t) {
  function o(e) {
    for (var n in e)
      if (void 0 !== i.style[n]) return e[n]
  }
  var a = function(o, i, r) {
      r = r || {};
      var l = e.defer(),
        d = a[r.animation ? "animationEndEventName" : "transitionEndEventName"],
        s = function(e) {
          t.$apply(function() {
            o.unbind(d, s), l.resolve(o)
          })
        };
      return d && o.bind(d, s), n(function() {
        angular.isString(i) ? o.addClass(i) : angular.isFunction(i) ? i(o) : angular.isObject(i) && o.css(i), d || l.resolve(o)
      }), l.promise.cancel = function() {
        d && o.unbind(d, s), l.reject("Transition cancelled")
      }, l.promise
    },
    i = document.createElement("trans"),
    r = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      transition: "transitionend"
    },
    l = {
      WebkitTransition: "webkitAnimationEnd",
      MozTransition: "animationend",
      OTransition: "oAnimationEnd",
      transition: "animationend"
    };
  return a.transitionEndEventName = o(r), a.animationEndEventName = o(l), a
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(e) {
  e.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(e) {
  e.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
}]);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
  function(e, t, r) {
    "use strict";

    function n(e, t) {
      return D(new(D(function() {}, {
        prototype: e
      })), t)
    }

    function i(e) {
      return R(arguments, function(t) {
        t !== e && R(t, function(t, r) {
          e.hasOwnProperty(r) || (e[r] = t)
        })
      }), e
    }

    function a(e, t) {
      var r = [];
      for (var n in e.path) {
        if (e.path[n] !== t.path[n]) break;
        r.push(e.path[n])
      }
      return r
    }

    function o(e) {
      if (Object.keys) return Object.keys(e);
      var r = [];
      return t.forEach(e, function(e, t) {
        r.push(t)
      }), r
    }

    function u(e, t) {
      if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
      var r = e.length >>> 0,
        n = Number(arguments[2]) || 0;
      for (n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += r); n < r; n++)
        if (n in e && e[n] === t) return n;
      return -1
    }

    function s(e, t, r, n) {
      var i, s = a(r, n),
        l = {},
        c = [];
      for (var f in s)
        if (s[f].params && (i = o(s[f].params), i.length))
          for (var p in i) u(c, i[p]) >= 0 || (c.push(i[p]), l[i[p]] = e[i[p]]);
      return D({}, l, t)
    }

    function l(e, t, r) {
      if (!r) {
        r = [];
        for (var n in e) r.push(n)
      }
      for (var i = 0; i < r.length; i++) {
        var a = r[i];
        if (e[a] != t[a]) return !1
      }
      return !0
    }

    function c(e, t) {
      var r = {};
      return R(e, function(e) {
        r[e] = t[e]
      }), r
    }

    function f(e) {
      var t = {},
        r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
      for (var n in e) u(r, n) == -1 && (t[n] = e[n]);
      return t
    }

    function p(e, t) {
      var r = N(e),
        n = r ? [] : {};
      return R(e, function(e, i) {
        t(e, i) && (n[r ? n.length : i] = e)
      }), n
    }

    function h(e, t) {
      var r = N(e) ? [] : {};
      return R(e, function(e, n) {
        r[n] = t(e, n)
      }), r
    }

    function v(e, t) {
      var n = 1,
        a = 2,
        s = {},
        l = [],
        c = s,
        p = D(e.when(s), {
          $$promises: s,
          $$values: s
        });
      this.study = function(s) {
        function h(e, r) {
          if (g[r] !== a) {
            if (m.push(r), g[r] === n) throw m.splice(0, u(m, r)), new Error("Cyclic dependency: " + m.join(" -> "));
            if (g[r] = n, M(e)) d.push(r, [function() {
              return t.get(e)
            }], l);
            else {
              var i = t.annotate(e);
              R(i, function(e) {
                e !== r && s.hasOwnProperty(e) && h(s[e], e)
              }), d.push(r, e, i)
            }
            m.pop(), g[r] = a
          }
        }

        function v(e) {
          return F(e) && e.then && e.$$promises
        }
        if (!F(s)) throw new Error("'invocables' must be an object");
        var $ = o(s || {}),
          d = [],
          m = [],
          g = {};
        return R(s, h), s = m = g = null,
          function(n, a, o) {
            function u() {
              --y || (b || i(w, a.$$values), m.$$values = w, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, h.resolve(w))
            }

            function s(e) {
              m.$$failure = e, h.reject(e)
            }

            function l(r, i, a) {
              function l(e) {
                f.reject(e), s(e)
              }

              function c() {
                if (!I(m.$$failure)) try {
                  f.resolve(t.invoke(i, o, w)), f.promise.then(function(e) {
                    w[r] = e, u()
                  }, l)
                } catch (e) {
                  l(e)
                }
              }
              var f = e.defer(),
                p = 0;
              R(a, function(e) {
                g.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p++, g[e].then(function(t) {
                  w[e] = t, --p || c()
                }, l))
              }), p || c(), g[r] = f.promise
            }
            if (v(n) && o === r && (o = a, a = n, n = null), n) {
              if (!F(n)) throw new Error("'locals' must be an object")
            } else n = c;
            if (a) {
              if (!v(a)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
            } else a = p;
            var h = e.defer(),
              m = h.promise,
              g = m.$$promises = {},
              w = D({}, n),
              y = 1 + d.length / 3,
              b = !1;
            if (I(a.$$failure)) return s(a.$$failure), m;
            a.$$inheritedValues && i(w, f(a.$$inheritedValues, $)), D(g, a.$$promises), a.$$values ? (b = i(w, f(a.$$values, $)), m.$$inheritedValues = f(a.$$values, $), u()) : (a.$$inheritedValues && (m.$$inheritedValues = f(a.$$inheritedValues, $)), a.then(u, s));
            for (var E = 0, S = d.length; E < S; E += 3) n.hasOwnProperty(d[E]) ? u() : l(d[E], d[E + 1], d[E + 2]);
            return m
          }
      }, this.resolve = function(e, t, r, n) {
        return this.study(e)(t, r, n)
      }
    }

    function $(e, t, r) {
      this.fromConfig = function(e, t, r) {
        return I(e.template) ? this.fromString(e.template, t) : I(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : I(e.templateProvider) ? this.fromProvider(e.templateProvider, t, r) : null
      }, this.fromString = function(e, t) {
        return V(e) ? e(t) : e
      }, this.fromUrl = function(r, n) {
        return V(r) && (r = r(n)), null == r ? null : e.get(r, {
          cache: t,
          headers: {
            Accept: "text/html"
          }
        }).then(function(e) {
          return e.data
        })
      }, this.fromProvider = function(e, t, n) {
        return r.invoke(e, null, n || {
          params: t
        })
      }
    }

    function d(e, t, i) {
      function a(t, r, n, i) {
        if (d.push(t), v[t]) return v[t];
        if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
        if ($[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
        return $[t] = new T.Param(t, r, n, i), $[t]
      }

      function o(e, t, r) {
        var n = ["", ""],
          i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!t) return i;
        switch (r) {
          case !1:
            n = ["(", ")"];
            break;
          case !0:
            n = ["?(", ")?"];
            break;
          default:
            n = ["(" + r + "|", ")?"]
        }
        return i + n[0] + t + n[1]
      }

      function u(r, i) {
        var a, o, u, s, l;
        return a = r[2] || r[3], l = t.params[a], u = e.substring(p, r.index), o = i ? r[4] : r[4] || ("*" == r[1] ? ".*" : null), s = T.type(o || "string") || n(T.type("string"), {
          pattern: new RegExp(o)
        }), {
          id: a,
          regexp: o,
          segment: u,
          type: s,
          cfg: l
        }
      }
      t = D({
        params: {}
      }, F(t) ? t : {});
      var s, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        f = "^",
        p = 0,
        h = this.segments = [],
        v = i ? i.params : {},
        $ = this.params = i ? i.params.$$new() : new T.ParamSet,
        d = [];
      this.source = e;
      for (var m, g, w;
        (s = l.exec(e)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));) g = a(m.id, m.type, m.cfg, "path"), f += o(m.segment, g.type.pattern.source, g.squash), h.push(m.segment), p = l.lastIndex;
      w = e.substring(p);
      var y = w.indexOf("?");
      if (y >= 0) {
        var b = this.sourceSearch = w.substring(y);
        if (w = w.substring(0, y), this.sourcePath = e.substring(0, p + y), b.length > 0)
          for (p = 0; s = c.exec(b);) m = u(s, !0), g = a(m.id, m.type, m.cfg, "search"), p = l.lastIndex
      } else this.sourcePath = e, this.sourceSearch = "";
      f += o(w) + (t.strict === !1 ? "/?" : "") + "$", h.push(w), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : r), this.prefix = h[0], this.$$paramNames = d
    }

    function m(e) {
      D(this, e)
    }

    function g() {
      function e(e) {
        return null != e ? e.toString().replace(/\//g, "%2F") : e
      }

      function i(e) {
        return null != e ? e.toString().replace(/%2F/g, "/") : e
      }

      function a(e) {
        return this.pattern.test(e)
      }

      function s() {
        return {
          strict: w,
          caseInsensitive: $
        }
      }

      function l(e) {
        return V(e) || N(e) && V(e[e.length - 1])
      }

      function c() {
        for (; S.length;) {
          var e = S.shift();
          if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
          t.extend(b[e.name], v.invoke(e.def))
        }
      }

      function f(e) {
        D(this, e || {})
      }
      T = this;
      var v, $ = !1,
        w = !0,
        y = !1,
        b = {},
        E = !0,
        S = [],
        x = {
          string: {
            encode: e,
            decode: i,
            is: a,
            pattern: /[^\/]*/
          },
          int: {
            encode: e,
            decode: function(e) {
              return parseInt(e, 10)
            },
            is: function(e) {
              return I(e) && this.decode(e.toString()) === e
            },
            pattern: /\d+/
          },
          bool: {
            encode: function(e) {
              return e ? 1 : 0
            },
            decode: function(e) {
              return 0 !== parseInt(e, 10)
            },
            is: function(e) {
              return e === !0 || e === !1
            },
            pattern: /0|1/
          },
          date: {
            encode: function(e) {
              return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : r
            },
            decode: function(e) {
              if (this.is(e)) return e;
              var t = this.capture.exec(e);
              return t ? new Date(t[1], t[2] - 1, t[3]) : r
            },
            is: function(e) {
              return e instanceof Date && !isNaN(e.valueOf())
            },
            equals: function(e, t) {
              return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
          },
          json: {
            encode: t.toJson,
            decode: t.fromJson,
            is: t.isObject,
            equals: t.equals,
            pattern: /[^\/]*/
          },
          any: {
            encode: t.identity,
            decode: t.identity,
            is: t.identity,
            equals: t.equals,
            pattern: /.*/
          }
        };
      g.$$getDefaultValue = function(e) {
        if (!l(e.value)) return e.value;
        if (!v) throw new Error("Injectable functions cannot be called at configuration time");
        return v.invoke(e.value)
      }, this.caseInsensitive = function(e) {
        return I(e) && ($ = e), $
      }, this.strictMode = function(e) {
        return I(e) && (w = e), w
      }, this.defaultSquashPolicy = function(e) {
        if (!I(e)) return y;
        if (e !== !0 && e !== !1 && !M(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
        return y = e, e
      }, this.compile = function(e, t) {
        return new d(e, D(s(), t))
      }, this.isMatcher = function(e) {
        if (!F(e)) return !1;
        var t = !0;
        return R(d.prototype, function(r, n) {
          V(r) && (t = t && I(e[n]) && V(e[n]))
        }), t
      }, this.type = function(e, t, r) {
        if (!I(t)) return b[e];
        if (b.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
        return b[e] = new m(D({
          name: e
        }, t)), r && (S.push({
          name: e,
          def: r
        }), E || c()), this
      }, R(x, function(e, t) {
        b[t] = new m(D({
          name: t
        }, e))
      }), b = n(b, {}), this.$get = ["$injector", function(e) {
        return v = e, E = !1, c(), R(x, function(e, t) {
          b[t] || (b[t] = new m(e))
        }), this
      }], this.Param = function(e, t, n, i) {
        function a(e) {
          var t = F(e) ? o(e) : [],
            r = u(t, "value") === -1 && u(t, "type") === -1 && u(t, "squash") === -1 && u(t, "array") === -1;
          return r && (e = {
            value: e
          }), e.$$fn = l(e.value) ? e.value : function() {
            return e.value
          }, e
        }

        function s(t, r, n) {
          if (t.type && r) throw new Error("Param '" + e + "' has two type configurations.");
          return r ? r : t.type ? t.type instanceof m ? t.type : new m(t.type) : "config" === n ? b.any : b.string
        }

        function c() {
          var t = {
              array: "search" === i && "auto"
            },
            r = e.match(/\[\]$/) ? {
              array: !0
            } : {};
          return D(t, r, n).array
        }

        function f(e, t) {
          var r = e.squash;
          if (!t || r === !1) return !1;
          if (!I(r) || null == r) return y;
          if (r === !0 || M(r)) return r;
          throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
        }

        function $(e, t, n, i) {
          var a, o, s = [{
            from: "",
            to: n || t ? r : ""
          }, {
            from: null,
            to: n || t ? r : ""
          }];
          return a = N(e.replace) ? e.replace : [], M(i) && a.push({
            from: i,
            to: r
          }), o = h(a, function(e) {
            return e.from
          }), p(s, function(e) {
            return u(o, e.from) === -1
          }).concat(a)
        }

        function d() {
          if (!v) throw new Error("Injectable functions cannot be called at configuration time");
          return v.invoke(n.$$fn)
        }

        function g(e) {
          function t(e) {
            return function(t) {
              return t.from === e
            }
          }

          function r(e) {
            var r = h(p(E.replace, t(e)), function(e) {
              return e.to
            });
            return r.length ? r[0] : e
          }
          return e = r(e), I(e) ? E.type.decode(e) : d()
        }

        function w() {
          return "{Param:" + e + " " + t + " squash: '" + P + "' optional: " + x + "}"
        }
        var E = this;
        n = a(n), t = s(n, t, i);
        var S = c();
        t = S ? t.$asArray(S, "search" === i) : t, "string" !== t.name || S || "path" !== i || n.value !== r || (n.value = "");
        var x = n.value !== r,
          P = f(n, x),
          j = $(n, S, x, P);
        D(this, {
          id: e,
          type: t,
          location: i,
          array: S,
          squash: P,
          replace: j,
          isOptional: x,
          value: g,
          dynamic: r,
          config: n,
          toString: w
        })
      }, f.prototype = {
        $$new: function() {
          return n(this, D(new f, {
            $$parent: this
          }))
        },
        $$keys: function() {
          for (var e = [], t = [], r = this, n = o(f.prototype); r;) t.push(r), r = r.$$parent;
          return t.reverse(), R(t, function(t) {
            R(o(t), function(t) {
              u(e, t) === -1 && u(n, t) === -1 && e.push(t)
            })
          }), e
        },
        $$values: function(e) {
          var t = {},
            r = this;
          return R(r.$$keys(), function(n) {
            t[n] = r[n].value(e && e[n])
          }), t
        },
        $$equals: function(e, t) {
          var r = !0,
            n = this;
          return R(n.$$keys(), function(i) {
            var a = e && e[i],
              o = t && t[i];
            n[i].type.equals(a, o) || (r = !1)
          }), r
        },
        $$validates: function(e) {
          var t, r, n, i = !0,
            a = this;
          return R(this.$$keys(), function(o) {
            n = a[o], r = e[o], t = !r && n.isOptional, i = i && (t || !!n.type.is(r))
          }), i
        },
        $$parent: r
      }, this.ParamSet = f
    }

    function w(e, n) {
      function i(e) {
        var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
        return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
      }

      function a(e, t) {
        return e.replace(/\$(\$|\d{1,2})/, function(e, r) {
          return t["$" === r ? 0 : Number(r)]
        })
      }

      function o(e, t, r) {
        if (!r) return !1;
        var n = e.invoke(t, t, {
          $match: r
        });
        return !I(n) || n
      }

      function u(n, i, a, o) {
        function u(e, t, r) {
          return "/" === $ ? e : t ? $.slice(0, -1) + e : r ? $.slice(1) + e : e
        }

        function p(e) {
          function t(e) {
            var t = e(a, n);
            return !!t && (M(t) && n.replace().url(t), !0)
          }
          if (!e || !e.defaultPrevented) {
            var i = v && n.url() === v;
            if (v = r, i) return !0;
            var o, u = l.length;
            for (o = 0; o < u; o++)
              if (t(l[o])) return;
            c && t(c)
          }
        }

        function h() {
          return s = s || i.$on("$locationChangeSuccess", p)
        }
        var v, $ = o.baseHref(),
          d = n.url();
        return f || h(), {
          sync: function() {
            p()
          },
          listen: function() {
            return h()
          },
          update: function(e) {
            return e ? void(d = n.url()) : void(n.url() !== d && (n.url(d), n.replace()))
          },
          push: function(e, t, i) {
            n.url(e.format(t || {})), v = i && i.$$avoidResync ? n.url() : r, i && i.replace && n.replace()
          },
          href: function(r, i, a) {
            if (!r.validates(i)) return null;
            var o = e.html5Mode();
            t.isObject(o) && (o = o.enabled);
            var s = r.format(i);
            if (a = a || {}, o || null === s || (s = "#" + e.hashPrefix() + s), s = u(s, o, a.absolute), !a.absolute || !s) return s;
            var l = !o && s ? "/" : "",
              c = n.port();
            return c = 80 === c || 443 === c ? "" : ":" + c, [n.protocol(), "://", n.host(), c, l, s].join("")
          }
        }
      }
      var s, l = [],
        c = null,
        f = !1;
      this.rule = function(e) {
        if (!V(e)) throw new Error("'rule' must be a function");
        return l.push(e), this
      }, this.otherwise = function(e) {
        if (M(e)) {
          var t = e;
          e = function() {
            return t
          }
        } else if (!V(e)) throw new Error("'rule' must be a function");
        return c = e, this
      }, this.when = function(e, t) {
        var r, u = M(t);
        if (M(e) && (e = n.compile(e)), !u && !V(t) && !N(t)) throw new Error("invalid 'handler' in when()");
        var s = {
            matcher: function(e, t) {
              return u && (r = n.compile(t), t = ["$match", function(e) {
                return r.format(e)
              }]), D(function(r, n) {
                return o(r, t, e.exec(n.path(), n.search()))
              }, {
                prefix: M(e.prefix) ? e.prefix : ""
              })
            },
            regex: function(e, t) {
              if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
              return u && (r = t, t = ["$match", function(e) {
                return a(r, e)
              }]), D(function(r, n) {
                return o(r, t, e.exec(n.path()))
              }, {
                prefix: i(e)
              })
            }
          },
          l = {
            matcher: n.isMatcher(e),
            regex: e instanceof RegExp
          };
        for (var c in l)
          if (l[c]) return this.rule(s[c](e, t));
        throw new Error("invalid 'what' in when()")
      }, this.deferIntercept = function(e) {
        e === r && (e = !0), f = e
      }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }

    function y(e, i) {
      function a(e) {
        return 0 === e.indexOf(".") || 0 === e.indexOf("^")
      }

      function f(e, t) {
        if (!e) return r;
        var n = M(e),
          i = n ? e : e.name,
          o = a(i);
        if (o) {
          if (!t) throw new Error("No reference point given for path '" + i + "'");
          t = f(t);
          for (var u = i.split("."), s = 0, l = u.length, c = t; s < l; s++)
            if ("" !== u[s] || 0 !== s) {
              if ("^" !== u[s]) break;
              if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
              c = c.parent
            } else c = t;
          u = u.slice(s).join("."), i = c.name + (c.name && u ? "." : "") + u
        }
        var p = x[i];
        return !p || !n && (n || p !== e && p.self !== e) ? r : p
      }

      function p(e, t) {
        P[e] || (P[e] = []), P[e].push(t)
      }

      function v(e) {
        for (var t = P[e] || []; t.length;) $(t.shift())
      }

      function $(t) {
        t = n(t, {
          self: t,
          resolve: t.resolve || {},
          toString: function() {
            return this.name
          }
        });
        var r = t.name;
        if (!M(r) || r.indexOf("@") >= 0) throw new Error("State must have a valid name");
        if (x.hasOwnProperty(r)) throw new Error("State '" + r + "'' is already defined");
        var i = r.indexOf(".") !== -1 ? r.substring(0, r.lastIndexOf(".")) : M(t.parent) ? t.parent : F(t.parent) && M(t.parent.name) ? t.parent.name : "";
        if (i && !x[i]) return p(i, t.self);
        for (var a in O) V(O[a]) && (t[a] = O[a](t, O.$delegates[a]));
        return x[r] = t, !t[j] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, r) {
          S.$current.navigable == t && l(e, r) || S.transitionTo(t, e, {
            inherit: !0,
            location: !1
          })
        }]), v(r), t
      }

      function d(e) {
        return e.indexOf("*") > -1
      }

      function m(e) {
        var t = e.split("."),
          r = S.$current.name.split(".");
        if ("**" === t[0] && (r = r.slice(u(r, t[1])), r.unshift("**")), "**" === t[t.length - 1] && (r.splice(u(r, t[t.length - 2]) + 1, Number.MAX_VALUE), r.push("**")), t.length != r.length) return !1;
        for (var n = 0, i = t.length; n < i; n++) "*" === t[n] && (r[n] = "*");
        return r.join("") === t.join("")
      }

      function g(e, t) {
        return M(e) && !I(t) ? O[e] : V(t) && M(e) ? (O[e] && !O.$delegates[e] && (O.$delegates[e] = O[e]), O[e] = t, this) : this
      }

      function w(e, t) {
        return F(e) ? t = e : t.name = e, $(t), this
      }

      function y(e, i, a, u, p, v, $, g, w) {
        function y(t, r, n, a) {
          var o = e.$broadcast("$stateNotFound", t, r, n);
          if (o.defaultPrevented) return $.update(), q;
          if (!o.retry) return null;
          if (a.$retry) return $.update(), C;
          var u = S.transition = i.when(o.retry);
          return u.then(function() {
            return u !== S.transition ? O : (t.options.$retry = !0, S.transitionTo(t.to, t.toParams, t.options))
          }, function() {
            return q
          }), $.update(), u
        }

        function P(e, r, n, o, s, l) {
          var f = n ? r : c(e.params.$$keys(), r),
            h = {
              $stateParams: f
            };
          s.resolve = p.resolve(e.resolve, h, s.resolve, e);
          var v = [s.resolve.then(function(e) {
            s.globals = e
          })];
          return o && v.push(o), R(e.views, function(r, n) {
            var i = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
            i.$template = [function() {
              return a.load(n, {
                view: r,
                locals: h,
                params: f,
                notify: l.notify
              }) || ""
            }], v.push(p.resolve(i, h, s.resolve, e).then(function(a) {
              if (V(r.controllerProvider) || N(r.controllerProvider)) {
                var o = t.extend({}, i, h);
                a.$$controller = u.invoke(r.controllerProvider, null, o)
              } else a.$$controller = r.controller;
              a.$$state = e, a.$$controllerAs = r.controllerAs, s[n] = a
            }))
          }), i.all(v).then(function(e) {
            return s
          })
        }
        var O = i.reject(new Error("transition superseded")),
          A = i.reject(new Error("transition prevented")),
          q = i.reject(new Error("transition aborted")),
          C = i.reject(new Error("transition failed"));
        return E.locals = {
          resolve: null,
          globals: {
            $stateParams: {}
          }
        }, S = {
          params: {},
          current: E.self,
          $current: E,
          transition: null
        }, S.reload = function() {
          return S.transitionTo(S.current, v, {
            reload: !0,
            inherit: !1,
            notify: !0
          })
        }, S.go = function(e, t, r) {
          return S.transitionTo(e, t, D({
            inherit: !0,
            relative: S.$current
          }, r))
        }, S.transitionTo = function(t, r, a) {
          r = r || {}, a = D({
            location: !0,
            inherit: !1,
            relative: null,
            notify: !0,
            reload: !1,
            $retry: !1
          }, a || {});
          var o, l = S.$current,
            p = S.params,
            h = l.path,
            d = f(t, a.relative);
          if (!I(d)) {
            var m = {
                to: t,
                toParams: r,
                options: a
              },
              g = y(m, l.self, p, a);
            if (g) return g;
            if (t = m.to, r = m.toParams, a = m.options, d = f(t, a.relative), !I(d)) {
              if (!a.relative) throw new Error("No such state '" + t + "'");
              throw new Error("Could not resolve '" + t + "' from state '" + a.relative + "'")
            }
          }
          if (d[j]) throw new Error("Cannot transition to abstract state '" + t + "'");
          if (a.inherit && (r = s(v, r || {}, S.$current, d)), !d.params.$$validates(r)) return C;
          r = d.params.$$values(r), t = d;
          var w = t.path,
            x = 0,
            q = w[x],
            k = E.locals,
            V = [];
          if (!a.reload)
            for (; q && q === h[x] && q.ownParams.$$equals(r, p);) k = V[x] = q.locals, x++, q = w[x];
          if (b(t, l, k, a)) return t.self.reloadOnSearch !== !1 && $.update(), S.transition = null, i.when(S.current);
          if (r = c(t.params.$$keys(), r || {}), a.notify && e.$broadcast("$stateChangeStart", t.self, r, l.self, p).defaultPrevented) return $.update(), A;
          for (var M = i.when(k), F = x; F < w.length; F++, q = w[F]) k = V[F] = n(k), M = P(q, r, q === t, M, k, a);
          var N = S.transition = M.then(function() {
            var n, i, o;
            if (S.transition !== N) return O;
            for (n = h.length - 1; n >= x; n--) o = h[n], o.self.onExit && u.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
            for (n = x; n < w.length; n++) i = w[n], i.locals = V[n], i.self.onEnter && u.invoke(i.self.onEnter, i.self, i.locals.globals);
            return S.transition !== N ? O : (S.$current = t, S.current = t.self, S.params = r, U(S.params, v), S.transition = null, a.location && t.navigable && $.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
              $$avoidResync: !0,
              replace: "replace" === a.location
            }), a.notify && e.$broadcast("$stateChangeSuccess", t.self, r, l.self, p), $.update(!0), S.current)
          }, function(n) {
            return S.transition !== N ? O : (S.transition = null, o = e.$broadcast("$stateChangeError", t.self, r, l.self, p, n), o.defaultPrevented || $.update(), i.reject(n))
          });
          return N
        }, S.is = function(e, t, n) {
          n = D({
            relative: S.$current
          }, n || {});
          var i = f(e, n.relative);
          return I(i) ? S.$current === i && (!t || l(i.params.$$values(t), v)) : r
        }, S.includes = function(e, t, n) {
          if (n = D({
              relative: S.$current
            }, n || {}), M(e) && d(e)) {
            if (!m(e)) return !1;
            e = S.$current.name
          }
          var i = f(e, n.relative);
          return I(i) ? !!I(S.$current.includes[i.name]) && (!t || l(i.params.$$values(t), v, o(t))) : r
        }, S.href = function(e, t, n) {
          n = D({
            lossy: !0,
            inherit: !0,
            absolute: !1,
            relative: S.$current
          }, n || {});
          var i = f(e, n.relative);
          if (!I(i)) return null;
          n.inherit && (t = s(v, t || {}, S.$current, i));
          var a = i && n.lossy ? i.navigable : i;
          return a && a.url !== r && null !== a.url ? $.href(a.url, c(i.params.$$keys(), t || {}), {
            absolute: n.absolute
          }) : null
        }, S.get = function(e, t) {
          if (0 === arguments.length) return h(o(x), function(e) {
            return x[e].self
          });
          var r = f(e, t || S.$current);
          return r && r.self ? r.self : null
        }, S
      }

      function b(e, t, r, n) {
        if (e === t && (r === t.locals && !n.reload || e.self.reloadOnSearch === !1)) return !0
      }
      var E, S, x = {},
        P = {},
        j = "abstract",
        O = {
          parent: function(e) {
            if (I(e.parent) && e.parent) return f(e.parent);
            var t = /^(.+)\.[^.]+$/.exec(e.name);
            return t ? f(t[1]) : E
          },
          data: function(e) {
            return e.parent && e.parent.data && (e.data = e.self.data = D({}, e.parent.data, e.data)), e.data
          },
          url: function(e) {
            var t = e.url,
              r = {
                params: e.params || {}
              };
            if (M(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), r) : (e.parent.navigable || E).url.concat(t, r);
            if (!t || i.isMatcher(t)) return t;
            throw new Error("Invalid url '" + t + "' in state '" + e + "'")
          },
          navigable: function(e) {
            return e.url ? e : e.parent ? e.parent.navigable : null
          },
          ownParams: function(e) {
            var t = e.url && e.url.params || new T.ParamSet;
            return R(e.params || {}, function(e, r) {
              t[r] || (t[r] = new T.Param(r, null, e, "config"))
            }), t
          },
          params: function(e) {
            return e.parent && e.parent.params ? D(e.parent.params.$$new(), e.ownParams) : new T.ParamSet
          },
          views: function(e) {
            var t = {};
            return R(I(e.views) ? e.views : {
              "": e
            }, function(r, n) {
              n.indexOf("@") < 0 && (n += "@" + e.parent.name), t[n] = r
            }), t
          },
          path: function(e) {
            return e.parent ? e.parent.path.concat(e) : []
          },
          includes: function(e) {
            var t = e.parent ? D({}, e.parent.includes) : {};
            return t[e.name] = !0, t
          },
          $delegates: {}
        };
      E = $({
        name: "",
        url: "^",
        views: null,
        abstract: !0
      }), E.navigable = null, this.decorator = g, this.state = w, this.$get = y, y.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function b() {
      function e(e, t) {
        return {
          load: function(r, n) {
            var i, a = {
              template: null,
              controller: null,
              view: null,
              locals: null,
              notify: !0,
              async: !0,
              params: {}
            };
            return n = D(a, n), n.view && (i = t.fromConfig(n.view, n.params, n.locals)), i && n.notify && e.$broadcast("$viewContentLoading", n), i
          }
        }
      }
      this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
    }

    function E() {
      var e = !1;
      this.useAnchorScroll = function() {
        e = !0
      }, this.$get = ["$anchorScroll", "$timeout", function(t, r) {
        return e ? t : function(e) {
          r(function() {
            e[0].scrollIntoView()
          }, 0, !1)
        }
      }]
    }

    function S(e, r, n, i) {
      function a() {
        return r.has ? function(e) {
          return r.has(e) ? r.get(e) : null
        } : function(e) {
          try {
            return r.get(e)
          } catch (e) {
            return null
          }
        }
      }

      function o(e, t) {
        var r = function() {
          return {
            enter: function(e, t, r) {
              t.after(e), r()
            },
            leave: function(e, t) {
              e.remove(), t()
            }
          }
        };
        if (l) return {
          enter: function(e, t, r) {
            var n = l.enter(e, null, t, r);
            n && n.then && n.then(r)
          },
          leave: function(e, t) {
            var r = l.leave(e, t);
            r && r.then && r.then(t)
          }
        };
        if (s) {
          var n = s && s(t, e);
          return {
            enter: function(e, t, r) {
              n.enter(e, null, t), r()
            },
            leave: function(e, t) {
              n.leave(e), t()
            }
          }
        }
        return r()
      }
      var u = a(),
        s = u("$animator"),
        l = u("$animate"),
        c = {
          restrict: "ECA",
          terminal: !0,
          priority: 400,
          transclude: "element",
          compile: function(r, a, u) {
            return function(r, a, s) {
              function l() {
                f && (f.remove(), f = null), h && (h.$destroy(), h = null), p && (m.leave(p, function() {
                  f = null
                }), f = p, p = null)
              }

              function c(o) {
                var c, f = P(r, s, a, i),
                  g = f && e.$current && e.$current.locals[f];
                if (o || g !== v) {
                  c = r.$new(), v = e.$current.locals[f];
                  var w = u(c, function(e) {
                    m.enter(e, a, function() {
                      h && h.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || r.$eval(d)) && n(e)
                    }), l()
                  });
                  p = w, h = c, h.$emit("$viewContentLoaded"), h.$eval($)
                }
              }
              var f, p, h, v, $ = s.onload || "",
                d = s.autoscroll,
                m = o(s, r);
              r.$on("$stateChangeSuccess", function() {
                c(!1)
              }), r.$on("$viewContentLoading", function() {
                c(!1)
              }), c(!0)
            }
          }
        };
      return c
    }

    function x(e, t, r, n) {
      return {
        restrict: "ECA",
        priority: -400,
        compile: function(i) {
          var a = i.html();
          return function(i, o, u) {
            var s = r.$current,
              l = P(i, u, o, n),
              c = s && s.locals[l];
            if (c) {
              o.data("$uiView", {
                name: l,
                state: c.$$state
              }), o.html(c.$template ? c.$template : a);
              var f = e(o.contents());
              if (c.$$controller) {
                c.$scope = i;
                var p = t(c.$$controller, c);
                c.$$controllerAs && (i[c.$$controllerAs] = p), o.data("$ngControllerController", p), o.children().data("$ngControllerController", p)
              }
              f(i)
            }
          }
        }
      }
    }

    function P(e, t, r, n) {
      var i = n(t.uiView || t.name || "")(e),
        a = r.inheritedData("$uiView");
      return i.indexOf("@") >= 0 ? i : i + "@" + (a ? a.state.name : "")
    }

    function j(e, t) {
      var r, n = e.match(/^\s*({[^}]*})\s*$/);
      if (n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length) throw new Error("Invalid state ref '" + e + "'");
      return {
        state: r[1],
        paramExpr: r[3] || null
      }
    }

    function O(e) {
      var t = e.parent().inheritedData("$uiView");
      if (t && t.state && t.state.name) return t.state
    }

    function A(e, r) {
      var n = ["location", "inherit", "reload"];
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function(i, a, o, u) {
          var s = j(o.uiSref, e.current.name),
            l = null,
            c = O(a) || e.$current,
            f = null,
            p = "A" === a.prop("tagName"),
            h = "FORM" === a[0].nodeName,
            v = h ? "action" : "href",
            $ = !0,
            d = {
              relative: c,
              inherit: !0
            },
            m = i.$eval(o.uiSrefOpts) || {};
          t.forEach(n, function(e) {
            e in m && (d[e] = m[e])
          });
          var g = function(r) {
            if (r && (l = t.copy(r)), $) {
              f = e.href(s.state, l, d);
              var n = u[1] || u[0];
              return n && n.$$setStateInfo(s.state, l), null === f ? ($ = !1, !1) : void o.$set(v, f)
            }
          };
          s.paramExpr && (i.$watch(s.paramExpr, function(e, t) {
            e !== l && g(e)
          }, !0), l = t.copy(i.$eval(s.paramExpr))), g(), h || a.bind("click", function(t) {
            var n = t.which || t.button;
            if (!(n > 1 || t.ctrlKey || t.metaKey || t.shiftKey || a.attr("target"))) {
              var i = r(function() {
                e.go(s.state, l, d)
              });
              t.preventDefault();
              var o = p && !f ? 1 : 0;
              t.preventDefault = function() {
                o-- <= 0 && r.cancel(i)
              }
            }
          })
        }
      }
    }

    function q(e, t, r) {
      return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", function(t, n, i) {
          function a() {
            o() ? n.addClass(l) : n.removeClass(l)
          }

          function o() {
            return "undefined" != typeof i.uiSrefActiveEq ? u && e.is(u.name, s) : u && e.includes(u.name, s)
          }
          var u, s, l;
          l = r(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$setStateInfo = function(t, r) {
            u = e.get(t, O(n)), s = r, a()
          }, t.$on("$stateChangeSuccess", a)
        }]
      }
    }

    function C(e) {
      var t = function(t) {
        return e.is(t)
      };
      return t.$stateful = !0, t
    }

    function k(e) {
      var t = function(t) {
        return e.includes(t)
      };
      return t.$stateful = !0, t
    }
    var I = t.isDefined,
      V = t.isFunction,
      M = t.isString,
      F = t.isObject,
      N = t.isArray,
      R = t.forEach,
      D = t.extend,
      U = t.copy;
    t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), v.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", v), $.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", $);
    var T;
    d.prototype.concat = function(e, t) {
      var r = {
        caseInsensitive: T.caseInsensitive(),
        strict: T.strictMode(),
        squash: T.defaultSquashPolicy()
      };
      return new d(this.sourcePath + e + this.sourceSearch, D(r, t), this)
    }, d.prototype.toString = function() {
      return this.source
    }, d.prototype.exec = function(e, t) {
      function r(e) {
        function t(e) {
          return e.split("").reverse().join("")
        }

        function r(e) {
          return e.replace(/\\-/, "-")
        }
        var n = t(e).split(/-(?!\\)/),
          i = h(n, t);
        return h(i, r).reverse()
      }
      var n = this.regexp.exec(e);
      if (!n) return null;
      t = t || {};
      var i, a, o, u = this.parameters(),
        s = u.length,
        l = this.segments.length - 1,
        c = {};
      if (l !== n.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
      for (i = 0; i < l; i++) {
        o = u[i];
        var f = this.params[o],
          p = n[i + 1];
        for (a = 0; a < f.replace; a++) f.replace[a].from === p && (p = f.replace[a].to);
        p && f.array === !0 && (p = r(p)), c[o] = f.value(p)
      }
      for (; i < s; i++) o = u[i], c[o] = this.params[o].value(t[o]);
      return c
    }, d.prototype.parameters = function(e) {
      return I(e) ? this.params[e] || null : this.$$paramNames
    }, d.prototype.validates = function(e) {
      return this.params.$$validates(e)
    }, d.prototype.format = function(e) {
      function t(e) {
        return encodeURIComponent(e).replace(/-/g, function(e) {
          return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      e = e || {};
      var r = this.segments,
        n = this.parameters(),
        i = this.params;
      if (!this.validates(e)) return null;
      var a, o = !1,
        u = r.length - 1,
        s = n.length,
        l = r[0];
      for (a = 0; a < s; a++) {
        var c = a < u,
          f = n[a],
          p = i[f],
          v = p.value(e[f]),
          $ = p.isOptional && p.type.equals(p.value(), v),
          d = !!$ && p.squash,
          m = p.type.encode(v);
        if (c) {
          var g = r[a + 1];
          if (d === !1) null != m && (l += N(m) ? h(m, t).join("-") : encodeURIComponent(m)), l += g;
          else if (d === !0) {
            var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
            l += g.match(w)[1]
          } else M(d) && (l += d + g)
        } else {
          if (null == m || $ && d !== !1) continue;
          N(m) || (m = [m]), m = h(m, encodeURIComponent).join("&" + f + "="), l += (o ? "&" : "?") + (f + "=" + m), o = !0
        }
      }
      return l
    }, m.prototype.is = function(e, t) {
      return !0
    }, m.prototype.encode = function(e, t) {
      return e
    }, m.prototype.decode = function(e, t) {
      return e
    }, m.prototype.equals = function(e, t) {
      return e == t
    }, m.prototype.$subPattern = function() {
      var e = this.pattern.toString();
      return e.substr(1, e.length - 2)
    }, m.prototype.pattern = /.*/, m.prototype.toString = function() {
      return "{Type:" + this.name + "}"
    }, m.prototype.$asArray = function(e, t) {
      function n(e, t) {
        function n(e, t) {
          return function() {
            return e[t].apply(e, arguments)
          }
        }

        function i(e) {
          return N(e) ? e : I(e) ? [e] : []
        }

        function a(e) {
          switch (e.length) {
            case 0:
              return r;
            case 1:
              return "auto" === t ? e[0] : e;
            default:
              return e
          }
        }

        function o(e) {
          return !e
        }

        function u(e, t) {
          return function(r) {
            r = i(r);
            var n = h(r, e);
            return t === !0 ? 0 === p(n, o).length : a(n)
          }
        }

        function s(e) {
          return function(t, r) {
            var n = i(t),
              a = i(r);
            if (n.length !== a.length) return !1;
            for (var o = 0; o < n.length; o++)
              if (!e(n[o], a[o])) return !1;
            return !0
          }
        }
        this.encode = u(n(e, "encode")), this.decode = u(n(e, "decode")), this.is = u(n(e, "is"), !0), this.equals = s(n(e, "equals")), this.pattern = e.pattern, this.$arrayMode = t
      }
      if (!e) return this;
      if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
      return new n(this, e)
    }, t.module("ui.router.util").provider("$urlMatcherFactory", g), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), y.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", y), b.$inject = [], t.module("ui.router.state").provider("$view", b), t.module("ui.router.state").provider("$uiViewScroll", E), S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], x.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", S), t.module("ui.router.state").directive("uiView", x), A.$inject = ["$state", "$timeout"], q.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", A).directive("uiSrefActive", q).directive("uiSrefActiveEq", q), C.$inject = ["$state"], k.$inject = ["$state"], t.module("ui.router.state").filter("isState", C).filter("includedByState", k)
  }(window, window.angular);
angular.module("ui.slider", []).value("uiSliderConfig", {}).directive("uiSlider", ["uiSliderConfig", "$timeout", function(e, i) {
  return e = e || {}, {
    require: "ngModel",
    compile: function() {
      return function(n, a, u, l) {
        function r(e, i) {
          return i ? parseFloat(e) : parseInt(e, 10)
        }

        function o() {
          a.slider("destroy")
        }
        var t = angular.extend(n.$eval(u.uiSlider) || {}, e),
          d = {
            min: null,
            max: null
          },
          s = ["min", "max", "step"],
          v = !angular.isUndefined(u.useDecimals),
          $ = function() {
            angular.isArray(l.$viewValue) && t.range !== !0 && (console.warn("Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."), t.range = !0), angular.forEach(s, function(e) {
              angular.isDefined(u[e]) && (t[e] = r(u[e], v))
            }), a.slider(t), $ = angular.noop
          };
        angular.forEach(s, function(e) {
          u.$observe(e, function(i) {
            i && ($(), t[e] = r(i, v), a.slider("option", e, r(i, v)), l.$render())
          })
        }), u.$observe("disabled", function(e) {
          $(), a.slider("option", "disabled", !!e)
        }), n.$watch(u.uiSlider, function(e) {
          $(), void 0 !== e && a.slider("option", e)
        }, !0), i($, 0, !0), a.bind("slide", function(e, i) {
          l.$setViewValue(i.values || i.value), n.$apply()
        }), l.$render = function() {
          $();
          var e = t.range === !0 ? "values" : "value";
          t.range || !isNaN(l.$viewValue) || l.$viewValue instanceof Array ? t.range && !angular.isDefined(l.$viewValue) && (l.$viewValue = [0, 0]) : l.$viewValue = 0, t.range === !0 && (angular.isDefined(t.min) && t.min > l.$viewValue[0] && (l.$viewValue[0] = t.min), angular.isDefined(t.max) && t.max < l.$viewValue[1] && (l.$viewValue[1] = t.max), l.$viewValue[0] > l.$viewValue[1] && (d.min >= l.$viewValue[1] && (l.$viewValue[0] = d.min), d.max <= l.$viewValue[0] && (l.$viewValue[1] = d.max)), d.min = l.$viewValue[0], d.max = l.$viewValue[1]), a.slider(e, l.$viewValue)
        }, n.$watch(u.ngModel, function() {
          t.range === !0 && l.$render()
        }, !0), a.bind("$destroy", o)
      }
    }
  }
}]);
angular.module("ui.sliderScale", []).value("uiSliderConfig", {}).directive("uiSliderScale", ["uiSliderConfig", "$timeout", function(e, n) {
  return e = e || {}, {
    require: "ngModel",
    compile: function() {
      return function(i, r, t, u) {
        function a(e, n) {
          return n ? parseFloat(e) : parseInt(e)
        }

        function l() {
          r.slider("destroy")
        }

        function o(e) {
          function n(e, n, i, r) {
            for (var t = null, u = null, a = 0; a < r.length; a++)
              if (e && r[a] <= i || n && r[a] >= i) {
                var l = Math.abs(i - r[a]);
                (null == u || l < u) && (t = r[a], u = l)
              }
            return t
          }

          function i(e, n, i) {
            for (var r = 0; r < n.length; r++)
              if (n[r] >= i) return e[r];
            return 0
          }

          function r(e) {
            var n = {};
            return e.step && e.scale ? (n.directBinding = function(n, i, r) {
              var t = u.directScaleBinding(e.scale, n, i, r),
                a = u.directStepBinding(e.step, t, i, r);
              return a
            }, n.reverseBinding = function(n, i, r) {
              var t = u.reverseStepBinding(e.step, n, i, r),
                a = u.reverseScaleBinding(e.scale, t, i, r);
              return a
            }) : e.step ? (n.directBinding = function(n, i, r) {
              return u.directStepBinding(e.step, n, i, r)
            }, n.reverseBinding = function(n, i, r) {
              return u.reverseStepBinding(e.step, n, elem, r)
            }) : e.scale && (n.directBinding = function(n, i, r) {
              return u.directScaleBinding(e.scale, n, i, r)
            }, n.reverseBinding = function(n, i, r) {
              return u.reverseScaleBinding(e.scale, n, i, r)
            }), n
          }
          var t, u, a;
          t = e, u = {
            directStepBinding: function(e, n, i, r) {
              for (var t = 0, u = e[0].min; t < n;) {
                var a = _.find(e, function(e) {
                  return u < e.max
                });
                if (null == a) break;
                u += a.step, t++
              }
              return u
            },
            reverseStepBinding: function(e, n, i, r) {
              var t, u, a, l, o, d;
              for (d = parseInt(n), u = _.first(e).min, a = _.last(e).max, t = d, d < u && (t = u), d > a && (t = a), l = 0, o = e[0].min; o < t;) {
                var s = _.find(e, function(e) {
                  return o < e.max
                });
                if (null == s) break;
                o += s.step, o <= t && l++
              }
              return l
            },
            directScaleBinding: function(e, r, t, u) {
              var a = u.originalEvent.keyCode != $.ui.keyCode.RIGHT,
                l = u.originalEvent.keyCode != $.ui.keyCode.LEFT,
                o = n(a, l, r, e.values);
              setTimeout(function() {
                t.slider({
                  value: o
                })
              }, 0);
              var d = i(e.trueValues, e.values, o);
              return d
            },
            reverseScaleBinding: function(e, i, r, t) {
              var u = !0,
                a = !0,
                l = n(u, a, i, e.trueValues);
              return e.values[e.trueValues.indexOf(l)]
            }
          }, a = r(e), this.directBinding = function(e, n, i) {
            return a.directBinding(e, n, i)
          }, this.reverseBinding = function(e, n, i) {
            return a.reverseBinding(e, n, i)
          }
        }
        var d, s = angular.extend(i.$eval(t.uiSliderScale) || {}, e),
          c = i.$eval(t.scaleOptions),
          f = function() {
            angular.isArray(u.$viewValue) && s.range !== !0 && console.warn("Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."), d = new o(c), s.slide = function(e, n) {
              var t = d.directBinding(n.value, r, e);
              u.$setViewValue(t), i.$apply()
            }, r.slider(s), f = angular.noop
          },
          v = ["min", "max", "step"],
          g = !angular.isUndefined(t.useDecimals);
        angular.forEach(v, function(e, n) {
          t.$observe(e, function(n) {
            n && (f(), r.slider("option", e, a(n, g)))
          })
        }), t.$observe("disabled", function(e) {
          f(), r.slider("option", "disabled", !!e)
        }), i.$watch(t.uiSliderScale, function(e) {
          f(), r.slider("option", e)
        }, !0), n(f, 0, !0), u.$render = function() {
          f();
          var e = "value";
          isNaN(u.$viewValue) && (u.$viewValue = 0);
          var n = d.reverseBinding(u.$viewValue);
          r.slider(e, n)
        }, i.$watch(t.ngModel, function() {
          s.range === !0 && u.$render()
        }, !0), r.bind("$destroy", l)
      }
    }
  }
}]);
angular.module("ui.sortable", []).value("uiSortableConfig", {}).directive("uiSortable", ["uiSortableConfig", "$timeout", "$log", function(e, t, n) {
  return {
    require: "?ngModel",
    link: function(o, l, i, r) {
      function a(e, t) {
        return t && "function" == typeof t ? function(n, o) {
          e(n, o), t(n, o)
        } : e
      }

      function s(e, t) {
        var n = e.sortable("option", "helper");
        return "clone" === n || "function" == typeof n && t.item.sortable.isCustomHelperUsed()
      }
      var u, c = {},
        d = {
          receive: null,
          remove: null,
          start: null,
          stop: null,
          update: null
        },
        m = {
          helper: null
        };
      return angular.extend(c, e, o.$eval(i.uiSortable)), angular.element.fn && angular.element.fn.jquery ? (r ? (o.$watch(i.ngModel + ".length", function() {
        t(function() {
          l.data("ui-sortable") && l.sortable("refresh")
        })
      }), d.start = function(e, t) {
        t.item.sortable = {
          index: t.item.index(),
          cancel: function() {
            t.item.sortable._isCanceled = !0
          },
          isCanceled: function() {
            return t.item.sortable._isCanceled
          },
          isCustomHelperUsed: function() {
            return !!t.item.sortable._isCustomHelperUsed
          },
          _isCanceled: !1,
          _isCustomHelperUsed: t.item.sortable._isCustomHelperUsed
        }
      }, d.activate = function() {
        u = l.contents();
        var e = l.sortable("option", "placeholder");
        if (e && e.element && "function" == typeof e.element) {
          var t = e.element();
          t = angular.element(t);
          var n = l.find('[class="' + t.attr("class") + '"]');
          u = u.not(n)
        }
      }, d.update = function(e, t) {
        t.item.sortable.received || (t.item.sortable.dropindex = t.item.index(), t.item.sortable.droptarget = t.item.parent(), l.sortable("cancel")), s(l, t) && !t.item.sortable.received && "parent" === l.sortable("option", "appendTo") && (u = u.not(u.last())), u.appendTo(l), t.item.sortable.received && (u = null), t.item.sortable.received && !t.item.sortable.isCanceled() && o.$apply(function() {
          r.$modelValue.splice(t.item.sortable.dropindex, 0, t.item.sortable.moved)
        })
      }, d.stop = function(e, t) {
        !t.item.sortable.received && "dropindex" in t.item.sortable && !t.item.sortable.isCanceled() ? o.$apply(function() {
          r.$modelValue.splice(t.item.sortable.dropindex, 0, r.$modelValue.splice(t.item.sortable.index, 1)[0])
        }) : "dropindex" in t.item.sortable && !t.item.sortable.isCanceled() || s(l, t) || u.appendTo(l), u = null
      }, d.receive = function(e, t) {
        t.item.sortable.received = !0
      }, d.remove = function(e, t) {
        "dropindex" in t.item.sortable || (l.sortable("cancel"), t.item.sortable.cancel()), t.item.sortable.isCanceled() || o.$apply(function() {
          t.item.sortable.moved = r.$modelValue.splice(t.item.sortable.index, 1)[0]
        })
      }, m.helper = function(e) {
        return e && "function" == typeof e ? function(t, n) {
          var o = e(t, n);
          return n.sortable._isCustomHelperUsed = n !== o, o
        } : e
      }, o.$watch(i.uiSortable, function(e) {
        l.data("ui-sortable") && angular.forEach(e, function(e, t) {
          d[t] ? ("stop" === t && (e = a(e, function() {
            o.$apply()
          })), e = a(d[t], e)) : m[t] && (e = m[t](e)), l.sortable("option", t, e)
        })
      }, !0), angular.forEach(d, function(e, t) {
        c[t] = a(e, c[t])
      })) : n.info("ui.sortable: ngModel not provided!", l), void l.sortable(c)) : void n.error("ui.sortable: jQuery should be included before AngularJS!")
    }
  }
}]);
"use strict";
angular.module("ui.keypress", []).factory("keypressHelper", ["$parse", function(e) {
  var r = {
      8: "backspace",
      9: "tab",
      13: "enter",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "delete"
    },
    n = function(e) {
      return e.charAt(0).toUpperCase() + e.slice(1)
    };
  return function(s, t, u, i) {
    var a, o = [];
    a = t.$eval(i["ui" + n(s)]), angular.forEach(a, function(r, n) {
      var s, t;
      t = e(r), angular.forEach(n.split(" "), function(e) {
        s = {
          expression: t,
          keys: {}
        }, angular.forEach(e.split("-"), function(e) {
          s.keys[e] = !0
        }), o.push(s)
      })
    }), u.bind(s, function(e) {
      var n = !(!e.metaKey || e.ctrlKey),
        u = !!e.altKey,
        i = !!e.ctrlKey,
        a = !!e.shiftKey,
        c = e.keyCode;
      "keypress" === s && !a && c >= 97 && c <= 122 && (c -= 32), angular.forEach(o, function(s) {
        var o = s.keys[r[c]] || s.keys[c.toString()],
          p = !!s.keys.meta,
          l = !!s.keys.alt,
          y = !!s.keys.ctrl,
          k = !!s.keys.shift;
        o && p === n && l === u && y === i && k === a && t.$apply(function() {
          s.expression(t, {
            $event: e
          })
        })
      })
    })
  }
}]), angular.module("ui.keypress").directive("uiKeydown", ["keypressHelper", function(e) {
  return {
    link: function(r, n, s) {
      e("keydown", r, n, s)
    }
  }
}]), angular.module("ui.keypress").directive("uiKeypress", ["keypressHelper", function(e) {
  return {
    link: function(r, n, s) {
      e("keypress", r, n, s)
    }
  }
}]), angular.module("ui.keypress").directive("uiKeyup", ["keypressHelper", function(e) {
  return {
    link: function(r, n, s) {
      e("keyup", r, n, s)
    }
  }
}]);
"use strict";
angular.module("ui.mask", []).value("uiMaskConfig", {
  maskDefinitions: {
    9: /\d/,
    A: /[a-zA-Z]/,
    "*": /[a-zA-Z0-9]/
  }
}).directive("uiMaskPlaceholder", ["uiMaskConfig", "$parse", function(e, n) {
  return {
    priority: 100,
    require: "ngModel",
    restrict: "A",
    compile: function() {
      var t = e;
      return function(e, i, r, u) {
        function a(e) {
          return angular.isDefined(e) ? ($(e), F ? (f(), h(), !0) : c()) : c()
        }

        function o(e) {
          angular.isDefined(e) && (E = e, F && x())
        }

        function l(e) {
          return F ? (j = p(e || ""), z = d(j), u.$setValidity("mask", z), z && j.length ? v(j) : void 0) : e
        }

        function s(e) {
          return F ? (j = p(e || ""), z = d(j), u.$viewValue = j.length ? v(j) : "", u.$setValidity("mask", z), "" === j && r.required && u.$setValidity("required", !1), z ? j : void 0) : e
        }

        function c() {
          return F = !1, g(), angular.isDefined(K) ? i.attr("maxlength", K) : i.removeAttr("maxlength"), i.val(u.$modelValue), u.$viewValue = u.$modelValue, !1
        }

        function f() {
          j = T = p(u.$modelValue || ""), q = P = v(j), z = d(j);
          var e = z && j.length ? q : "";
          r.maxlength && i.attr("maxlength", 2 * S[S.length - 1]), i.val(e), u.$viewValue = e
        }

        function h() {
          H || (i.bind("blur", y), i.bind("mousedown mouseup", k), i.bind("input keyup click focus", x), H = !0)
        }

        function g() {
          H && (i.unbind("blur", y), i.unbind("mousedown", k), i.unbind("mouseup", k), i.unbind("input", x), i.unbind("keyup", x), i.unbind("click", x), i.unbind("focus", x), H = !1)
        }

        function d(e) {
          return !e.length || e.length >= R
        }

        function p(e) {
          var n = "",
            t = _.slice();
          return e = e.toString(), angular.forEach(D, function(n) {
            e = e.replace(n, "")
          }), angular.forEach(e.split(""), function(e) {
            t.length && t[0].test(e) && (n += e, t.shift())
          }), n
        }

        function v(e) {
          var n = "",
            t = S.slice();
          return angular.forEach(E.split(""), function(i, r) {
            e.length && r === t[0] ? (n += e.charAt(0) || "_", e = e.substr(1), t.shift()) : n += i
          }), n
        }

        function m(e) {
          var n = r.uiMaskFormat;
          return "undefined" != typeof n && n[e] ? n[e] : "_"
        }

        function b() {
          return E.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
        }

        function $(e) {
          var n = 0;
          if (S = [], _ = [], E = "", "string" == typeof e) {
            R = 0;
            var t = !1,
              i = e.split("");
            angular.forEach(i, function(e, i) {
              N.maskDefinitions[e] ? (S.push(n), E += m(i), _.push(N.maskDefinitions[e]), n++, t || R++) : "?" === e ? t = !0 : (E += e, n++)
            })
          }
          S.push(S.slice().pop() + 1), D = b(), F = S.length > 1
        }

        function y() {
          Z = 0, C = 0, z && 0 !== j.length || (q = "", i.val(""), e.$apply(function() {
            u.$setViewValue("")
          }))
        }

        function k(e) {
          "mousedown" === e.type ? i.bind("mouseout", w) : i.unbind("mouseout", w)
        }

        function w() {
          C = A(this), i.unbind("mouseout", w)
        }

        function x(n) {
          n = n || {};
          var t = n.which,
            r = n.type;
          if (16 !== t && 91 !== t) {
            var a, o = i.val(),
              l = P,
              s = p(o),
              c = T,
              f = !1,
              h = M(this) || 0,
              g = Z || 0,
              d = h - g,
              m = S[0],
              b = S[s.length] || S.slice().shift(),
              $ = C || 0,
              y = A(this) > 0,
              k = $ > 0,
              w = o.length > l.length || $ && o.length > l.length - $,
              x = o.length < l.length || $ && o.length === l.length - $,
              _ = t >= 37 && t <= 40 && n.shiftKey,
              E = 37 === t,
              D = 8 === t || "keyup" !== r && x && d === -1,
              R = 46 === t || "keyup" !== r && x && 0 === d && !k,
              j = (E || D || "click" === r) && h > m;
            if (C = A(this), !_ && (!y || "click" !== r && "keyup" !== r)) {
              if ("input" === r && x && !k && s === c) {
                for (; D && h > m && !V(h);) h--;
                for (; R && h < b && S.indexOf(h) === -1;) h++;
                var q = S.indexOf(h);
                s = s.substring(0, q) + s.substring(q + 1), f = !0
              }
              for (a = v(s), P = a, T = s, i.val(a), f && e.$apply(function() {
                  u.$setViewValue(s)
                }), w && h <= m && (h = m + 1), j && h--, h = h > b ? b : h < m ? m : h; !V(h) && h > m && h < b;) h += j ? -1 : 1;
              (j && h < b || w && !V(g)) && h++, Z = h, O(this, h)
            }
          }
        }

        function V(e) {
          return S.indexOf(e) > -1
        }

        function M(e) {
          if (!e) return 0;
          if (void 0 !== e.selectionStart) return e.selectionStart;
          if (document.selection) {
            e.focus();
            var n = document.selection.createRange();
            return n.moveStart("character", e.value ? -e.value.length : 0), n.text.length
          }
          return 0
        }

        function O(e, n) {
          if (!e) return 0;
          if (0 !== e.offsetWidth && 0 !== e.offsetHeight)
            if (e.setSelectionRange) e.focus(), e.setSelectionRange(n, n);
            else if (e.createTextRange) {
            var t = e.createTextRange();
            t.collapse(!0), t.moveEnd("character", n), t.moveStart("character", n), t.select()
          }
        }

        function A(e) {
          return e ? void 0 !== e.selectionStart ? e.selectionEnd - e.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
        }
        var S, _, E, D, R, j, q, z, P, T, Z, C, F = !1,
          H = !1,
          K = r.maxlength,
          N = {};
        r.uiOptions ? (N = e.$eval("[" + r.uiOptions + "]"), angular.isObject(N[0]) && (N = function(e, n) {
          for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] ? angular.extend(n[t], e[t]) : n[t] = angular.copy(e[t]));
          return n
        }(t, N[0]))) : N = t, r.$observe("uiMaskPlaceholder", a), r.$observe("uiMaskFormat", o);
        var W = !1;
        r.$observe("modelViewValue", function(e) {
          "true" === e && (W = !0)
        }), e.$watch(r.ngModel, function(t) {
          if (W && t) {
            var i = n(r.ngModel);
            i.assign(e, u.$viewValue)
          }
        }), u.$formatters.push(l), u.$parsers.push(s), i.bind("mousedown mouseup", k), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
          if (null === this) throw new TypeError;
          var n = Object(this),
            t = n.length >>> 0;
          if (0 === t) return -1;
          var i = 0;
          if (arguments.length > 1 && (i = Number(arguments[1]), i !== i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= t) return -1;
          for (var r = i >= 0 ? i : Math.max(t - Math.abs(i), 0); r < t; r++)
            if (r in n && n[r] === e) return r;
          return -1
        })
      }
    }
  }
}]);
angular.module("ui.mask").value("uiMaskConfig", {
  maskDefinitions: {
    9: /\d/,
    A: /[a-zA-Z]/,
    "*": /[a-zA-Z0-9]/
  },
  clearOnBlur: !0
}).directive("uiMask", ["uiMaskConfig", "$parse", function(e, n) {
  "use strict";
  return {
    priority: 100,
    require: "ngModel",
    restrict: "A",
    compile: function() {
      var t = e;
      return function(e, i, r, u) {
        function a(e) {
          return angular.isDefined(e) ? ($(e), H ? (f(), h(), !0) : s()) : s()
        }

        function o(e) {
          angular.isDefined(e) && (D = e, H && x())
        }

        function l(e) {
          return H ? (q = p(e || ""), z = g(q), u.$setValidity("mask", z), z && q.length ? v(q) : void 0) : e
        }

        function c(e) {
          return H ? (q = p(e || ""), z = g(q), u.$viewValue = q.length ? v(q) : "", u.$setValidity("mask", z), "" === q && r.required && u.$setValidity("required", !u.$error.required), z ? q : void 0) : e
        }

        function s() {
          return H = !1, d(), angular.isDefined(N) ? i.attr("placeholder", N) : i.removeAttr("placeholder"), angular.isDefined(P) ? i.attr("maxlength", P) : i.removeAttr("maxlength"), i.val(u.$modelValue), u.$viewValue = u.$modelValue, !1
        }

        function f() {
          q = T = p(u.$modelValue || ""), j = B = v(q), z = g(q);
          var e = z && q.length ? j : "";
          r.maxlength && i.attr("maxlength", 2 * S[S.length - 1]), i.attr("placeholder", D), i.val(e), u.$viewValue = e
        }

        function h() {
          K || (i.bind("blur", y), i.bind("mousedown mouseup", k), i.bind("input keyup click focus", x), K = !0)
        }

        function d() {
          K && (i.unbind("blur", y), i.unbind("mousedown", k), i.unbind("mouseup", k), i.unbind("input", x), i.unbind("keyup", x), i.unbind("click", x), i.unbind("focus", x), K = !1)
        }

        function g(e) {
          return !e.length || e.length >= R
        }

        function p(e) {
          var n = "",
            t = _.slice();
          return e = e.toString(), angular.forEach(E, function(n) {
            e = e.replace(n, "")
          }), angular.forEach(e.split(""), function(e) {
            t.length && t[0].test(e) && (n += e, t.shift())
          }), n
        }

        function v(e) {
          var n = "",
            t = S.slice();
          return angular.forEach(D.split(""), function(i, r) {
            e.length && r === t[0] ? (n += e.charAt(0) || "_", e = e.substr(1), t.shift()) : n += i
          }), n
        }

        function m(e) {
          var n = r.placeholder;
          return "undefined" != typeof n && n[e] ? n[e] : "_"
        }

        function b() {
          return D.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
        }

        function $(e) {
          var n = 0;
          if (S = [], _ = [], D = "", "string" == typeof e) {
            R = 0;
            var t = !1,
              i = e.split("");
            angular.forEach(i, function(e, i) {
              W.maskDefinitions[e] ? (S.push(n), D += m(i), _.push(W.maskDefinitions[e]), n++, t || R++) : "?" === e ? t = !0 : (D += e, n++)
            })
          }
          S.push(S.slice().pop() + 1), E = b(), H = S.length > 1
        }

        function y() {
          W.clearOnBlur && (Z = 0, C = 0), z && 0 !== q.length || (W.clearOnBlur && (j = "", i.val("")), e.$apply(function() {
            u.$setViewValue("")
          }))
        }

        function k(e) {
          "mousedown" === e.type ? i.bind("mouseout", w) : i.unbind("mouseout", w)
        }

        function w() {
          C = A(this), i.unbind("mouseout", w)
        }

        function x(n) {
          n = n || {};
          var t = n.which,
            r = n.type;
          if (16 !== t && 91 !== t) {
            var a, o = i.val(),
              l = B,
              c = p(o),
              s = T,
              f = !1,
              h = O(this) || 0,
              d = Z || 0,
              g = h - d,
              m = S[0],
              b = S[c.length] || S.slice().shift(),
              $ = C || 0,
              y = A(this) > 0,
              k = $ > 0,
              w = o.length > l.length || $ && o.length > l.length - $,
              x = o.length < l.length || $ && o.length === l.length - $,
              _ = t >= 37 && t <= 40 && n.shiftKey,
              D = 37 === t,
              E = 8 === t || "keyup" !== r && x && g === -1,
              R = 46 === t || "keyup" !== r && x && 0 === g && !k,
              q = (D || E || "click" === r) && h > m;
            if (C = A(this), !_ && (!y || "click" !== r && "keyup" !== r)) {
              if ("input" === r && x && !k && c === s) {
                for (; E && h > m && !V(h);) h--;
                for (; R && h < b && S.indexOf(h) === -1;) h++;
                var j = S.indexOf(h);
                c = c.substring(0, j) + c.substring(j + 1), f = !0
              }
              for (a = v(c), B = a, T = c, i.val(a), f && e.$apply(function() {
                  u.$setViewValue(c)
                }), w && h <= m && (h = m + 1), q && h--, h = h > b ? b : h < m ? m : h; !V(h) && h > m && h < b;) h += q ? -1 : 1;
              (q && h < b || w && !V(d)) && h++, Z = h, M(this, h)
            }
          }
        }

        function V(e) {
          return S.indexOf(e) > -1
        }

        function O(e) {
          if (!e) return 0;
          if (void 0 !== e.selectionStart) return e.selectionStart;
          if (document.selection) {
            e.focus();
            var n = document.selection.createRange();
            return n.moveStart("character", e.value ? -e.value.length : 0), n.text.length
          }
          return 0
        }

        function M(e, n) {
          if (!e) return 0;
          if (0 !== e.offsetWidth && 0 !== e.offsetHeight)
            if (e.setSelectionRange) e.focus(), e.setSelectionRange(n, n);
            else if (e.createTextRange) {
            var t = e.createTextRange();
            t.collapse(!0), t.moveEnd("character", n), t.moveStart("character", n), t.select()
          }
        }

        function A(e) {
          return e ? void 0 !== e.selectionStart ? e.selectionEnd - e.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
        }
        var S, _, D, E, R, q, j, z, B, T, Z, C, H = !1,
          K = !1,
          N = r.placeholder,
          P = r.maxlength,
          W = {};
        r.uiOptions ? (W = e.$eval("[" + r.uiOptions + "]"), angular.isObject(W[0]) && (W = function(e, n) {
          for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (void 0 === n[t] ? n[t] = angular.copy(e[t]) : angular.extend(n[t], e[t]));
          return n
        }(t, W[0]))) : W = t, r.$observe("uiMask", a), r.$observe("placeholder", o);
        var F = !1;
        r.$observe("modelViewValue", function(e) {
          "true" === e && (F = !0)
        }), e.$watch(r.ngModel, function(t) {
          if (F && t) {
            var i = n(r.ngModel);
            i.assign(e, u.$viewValue)
          }
        }), u.$formatters.push(l), u.$parsers.push(c), i.bind("mousedown mouseup", k), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
          if (null === this) throw new TypeError;
          var n = Object(this),
            t = n.length >>> 0;
          if (0 === t) return -1;
          var i = 0;
          if (arguments.length > 1 && (i = Number(arguments[1]), i !== i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= t) return -1;
          for (var r = i >= 0 ? i : Math.max(t - Math.abs(i), 0); r < t; r++)
            if (r in n && n[r] === e) return r;
          return -1
        })
      }
    }
  }
}]);
angular.module("dealer.web.app", ["dynamicNumber", "ui-modules", "cgNotify", "angularFileUpload"]).config(["$locationProvider", "$httpProvider", "$controllerProvider", function(e, t, n) {
  var i = $.browser,
    r = !(i && i.msie && parseInt(i.version) <= 9);
  r ? e.html5Mode({
    enabled: !0,
    requireBase: !1,
    rewriteLinks: !1
  }) : e.html5Mode(r)
}]);
var ngApp = {
  main: angular.module("dealer.web.app"),
  isProd: !1
};
angular.element(document).ready(function() {
  for (var e in Controllers) ngApp.main.controller(e, window.Controllers[e]);
  for (var e in Services) ngApp.main.service(stringHelpers.toLowerCamelCase(e), window.Services[e]);
  var t = new Date;
  t.setDate(t.getDate() + 1);
  var n = {
    expires: t,
    path: "/"
  };
  AngularHelpers.setOrKeepCokie("originalReferrer", document.referrer, n), AngularHelpers.setOrKeepCokie("originalUrl", location.href, n), angular.bootstrap(document, ["dealer.web.app"])
});
var Consts;
! function(e) {
  var t = function() {
    function e() {}
    return e.text = "Настоящим Я, действуя своей волей и в своем интересе предоставляю Акционерному обществу «Лизинговая компания «Европлан» с местом нахождения: Российская Федерация, 115093, г. Москва, 1-й Щипковский переулок, дом 20, ОГРН 1177746637584 (далее – «ЛК Европлан»), Обществу с ограниченной ответственностью «Европлан Авто» с местом нахождения: Российская Федерация, 115093, г. Москва, 1-й Щипковский переулок, дом 20, ОГРН 1027739053583 (далее – «Европлан Авто»), Обществу с ограниченной ответственностью «Европлан Лизинговые Платежи» с местом нахождения: Российская Федерация, 115093, г. Москва, ул. Большая Серпуховская, дом 44, офис 19, ОГРН 1067761337082 (далее – «Европлан Лизинговые Платежи»), свое согласие на обработку, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу, обезличивание, блокирование, удаление, уничтожение моих персональных данных, а именно: фамилия, имя, отчество, дата и место рождения, гражданство, пол, место работы и должность, почтовый адрес; номера рабочего и мобильного телефонов, адреса электронной почты, данные водительского удостоверения, адрес регистрации по месту жительства,  адрес фактического проживания, паспортные данные, данные, которые относятся (могут быть отнесены) к категории биометрические персональные данные, идентификационный номер налогоплательщика, номер страхового свидетельства обязательного пенсионного страхования, а также иные персональные данные, полученные ЛК Европлан, Европлан Авто, Европлан Лизинговые Платежи, в том числе полученные посредством заполнения настоящей Заявки. Целями обработки, в том числе целями сбора, персональных данных являются: определение возможности заключения договоров лизинга, договоров страхования (страховых полисов), договоров купли-продажи, любых иных договоров, их заключения, изменения, исполнения и прекращения, продвижения лизинговых, страховых и иных услуг посредством любых средств связи, а также для обеспечения соблюдения законов и иных нормативно-правовых актов. Обработка персональных данных осуществляется как с использованием средств автоматизации, так и без использования таких средств. Согласие на обработку персональных данных действует в течение двадцати лет, а в части персональных данных, содержащихся в документах и на иных носителях информации, срок хранения которых по действующему законодательству превышает двадцать лет, согласие на обработку персональных данных действует в течение сроков хранения таких документов и иных носителей информации, установленных действующим законодательством. Согласие на обработку персональных данных может быть отозвано посредством направления соответствующего письменного заявления в адрес ЛК Европлан, Европлан Авто, Европлан Лизинговые Платежи по адресам места нахождения, указанным в настоящем согласии на обработку персональных данных.В этом случае лицо, получившее отзыв согласия на обработку персональных данных, прекращает обработку персональных данных, а персональные данные подлежат уничтожению или обезличиванию, если отсутствуют иные правовые основания для обработки, установленные законодательством Российской Федерации или документами лица, получившего отзыв согласия на обработку персональных данных, регламентирующими вопросы обработки персональных данных. Настоящим Я, действуя своей волей и в своем интересе, подтверждаю согласие на получение от Акционерного общества «Лизинговая компания «Европлан» с местом нахождения: Российская Федерация, 115093, г. Москва, 1-й Щипковский переулок, д.20, стр.1, ОГРН 1177746637584 (далее – «ЛК Европлан»), Общества с ограниченной ответственностью «Европлан Авто» с местом нахождения: Российская Федерация, 115093, г. Москва, 1-й Щипковский переулок, д. 20, ОГРН 1027739053583 (далее – «Европлан Авто»), Общества с ограниченной ответственностью «Европлан Лизинговые Платежи» с местом нахождения: Российская Федерация, 115093, г. Москва, ул. Большая Серпуховская, д. 44, офис 19, ОГРН 1067761337082 (далее – «Европлан Лизинговые Платежи), сообщений, в том числе сообщений рекламного характера, посредством использования любых средств связи, в том числе телефонной, факсимильной и подвижной радиотелефонной связи (далее – «Рассылка»). Согласие на получение Рассылки действует в течение неопределенного периода времени и может быть отозвано посредством направления соответствующего письменного заявления в адрес ЛК Европлан, Европлан Авто, Европлан Лизинговые Платежи по адресам места нахождения, указанным в настоящем согласии на получении Рассылки. Адреса электронной почты и номера телефонов, по которым будет осуществляться Рассылка указаны в настоящей Заявке. При изменении адресов электронной почты и/ или номеров телефонов, по которым осуществляется Рассылка, я обязуюсь незамедлительно проинформировать об этом ЛК Европлан, Европлан Авто, Европлан Лизинговые Платежи в письменной форме.До получения ЛК Европлан, Европлан Авто, Европлан Лизинговые Платежи указанного уведомления об изменении адресов электронной почты и/или номеров телефонов Рассылка осуществляется по адресам электронной почты и номерам телефонов, указанным в настоящей Заявке, а риск связанных с этим последствий несет Клиент.", e
  }();
  e.DisclaimerText = t
}(Consts || (Consts = {}));
var Texts;
! function(e) {
  var t = function() {
    function e() {}
    return e.getText = function(e) {
      return this.text
    }, e.text = Consts.DisclaimerText.text, e
  }();
  e.DisclaimerTexts = t
}(Texts || (Texts = {}));
var Components;
! function(e) {
  var t = function() {
    function e() {
      this.text = Texts.DisclaimerTexts.getText("")
    }
    return e.prototype.show = function() {
      $("#disclaimer_text").bPopup()
    }, e
  }();
  e.EpPopupDisclaimer = t
}(Components || (Components = {})), ngApp.main.component("epPopupDisclaimer", {
  template: '\n\t\t<label>\n\t\t\t<input type="checkbox" name="acceptTerms" ng-model="vm.model" class="option-check gray xl t-14" checked="">\n\t\t\t<span></span>Согласен с передачей информации и обработкой данных (<a class="" ng-click="vm.show()" href="">подробная информация</a>)</label>\n\t\t<div id="disclaimer_text" style="display: none;">\n\t\t\t<div class="pp">\n\t\t\t\t<a href="" class="close b-close">Закрыть</a>\n\t\t\t\t<p style="text-align: justify;" class="t-13" ng-bind="vm.text"></p>\n\t\t\t</div>\n\t\t</div>\n\n\t',
  bindings: {
    model: "="
  },
  controller: Components.EpPopupDisclaimer,
  controllerAs: "vm"
});
var Components;
! function(e) {
  var t = function() {
    function e(e) {
      this.$http = e, this.icons = [], this.icons = [this.icon("facebook", "Мы в Facebook"), this.icon("vk", "Мы в Вконтакте"), this.icon("twitter", "Мы в Twitter"), this.icon("google", "Мы в Google")]
    }
    return e.$inject = ["$http"], e.prototype.icon = function(e, t) {
      return {
        type: e,
        title: t
      }
    }, e.prototype.open = function(e) {
      window.open(e, "_blank", "scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0")
    }, e.prototype.share = function(e, t, n) {
      var i = t;
      "facebook" == n ? this.open("http://www.facebook.com/sharer.php?m2w&s=100&p[url]=" + e + "&p[title]=" + i + "&p[summary]={}&p[images][0]=") : "twitter" == n ? this.open("https://twitter.com/intent/tweet?text=" + i + "&url=" + e) : "google" == n ? this.open("https://plus.google.com/share?hl=ru&url=" + e + "&title=" + i) : "vk" == n && this.open("http://vk.com/share.php?url=" + e + "&title=" + i + "&description=")
    }, e
  }();
  e.SocialIcons = t
}(Components || (Components = {})), ngApp.main.component("socialIcons", {
  template: '\n\t\t<span>Поделиться</span>\n\t\t<a rel="nofollow" ng-repeat="i in vm.icons" href="" ng-click="vm.share(vm.url, vm.title, i.type)"\n\t\t\t\ttarget="_blank" title="{{i.title}}" class="btn-social btn-social_{{$index + 1}}" ng-bind="i.title"></a>\n\t',
  bindings: {
    url: "@",
    title: "@"
  },
  controller: Components.SocialIcons,
  controllerAs: "vm"
});
var Consts;
! function(e) {
  var t = function() {
    function e() {}
    return e.lflForm = {
      open: "/lfl-form-open",
      send: "/lfl-form-send",
      decline: "/lfl-form-decline"
    }, e.lflLongForm = {
      send: "/individual-form-send-full",
      decline: "/individual-form-decline-full"
    }, e.leasingForm = {
      open: "/leasing-form-open",
      send: "/leasing-form-send",
      decline: "/leasing-form-decline"
    }, e.leasingLongForm = {
      send: "/leasing-form-send-full",
      decline: "/leasing-form-decline-full"
    }, e.creditLongForm = {
      send: "/credit-form-send-full",
      decline: "/credit-form-decline-full"
    }, e.creditForm = {
      open: "/credit-form-open",
      send: "/credit-form-send",
      decline: "/credit-form-decline"
    }, e.auto = {
      send: "/request-price-confirmed"
    }, e.cpa = {
      decline: "/leasing-special-cpa-decline"
    }, e.fuelCardForm = {
      send: "/fuelCard-form-send",
      decline: "/fuelCard-form-decline"
    }, e
  }();
  e.AnalyticTracks = t
}(Consts || (Consts = {}));
var Enums;
! function(e) {
  var t = function() {
    function e() {}
    return e.AutoCreditShortRegular = "AutoCreditShortRegular", e.AutoCreditShortLanding = "AutoCreditShortLanding", e.AutoCreditShortLandingMobile = "AutoCreditShortLandingMobile", e.AutoCreditLongLanding = "AutoCreditLongLanding", e.AutoCreditCashShortRegular = "AutoCreditCashShortRegular", e.LeasingIndividual = "LeasingIndividual", e.AutoCreditLongRegular = "AutoCreditLongRegular", e.LeasingLongRegular = "LeasingLongRegular", e.CreditCard = "CreditCard", e.NSCard = "NSCard", e.LeasingShortRegular = "LeasingShortRegular", e.LeasingIndividualAvito = "LeasingIndividualAvito", e.Deposit = "Deposit", e.DepositAvito = "DepositAvito", e.Insurance = "Insurance", e.FAQ = "FAQ", e.AgentLongRegular = "AgentLongRegular", e.CatalogLongSilverStatus = "CatalogLongSilverStatus", e.CatalogLongGoldStatus = "CatalogLongGoldStatus", e.AutoCreditProblemAssets = "AutoCreditProblemAssets", e.LeasingShortProblemAssets = "LeasingShortProblemAssets", e
  }();
  e.ApplicationKind = t
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  var t = function() {
    function e() {}
    return e.ApplicationSuccess = "ApplicationSuccess", e.ApplicationDeclined = "ApplicationDeclined", e.ApplicationError = "ApplicationError", e
  }();
  e.AppRequestEventNames = t
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.Success = 0] = "Success", e[e.Decline = 1] = "Decline", e[e.Fatal = 2] = "Fatal", e[e.Validation = 3] = "Validation", e[e.NotSended = 4] = "NotSended"
  }(e.AppSubmitStatusEnum || (e.AppSubmitStatusEnum = {}));
  e.AppSubmitStatusEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.PassengerCar = 1] = "PassengerCar", e[e.Truck = 2] = "Truck", e[e.Bus = 3] = "Bus", e[e.Trailer = 4] = "Trailer", e[e.SpecialVehicle = 5] = "SpecialVehicle", e[e.Commercial = 6] = "Commercial", e[e.SelfPropelledEquipment = 7] = "SelfPropelledEquipment"
  }(e.CarTypeEnum || (e.CarTypeEnum = {}));
  e.CarTypeEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.I = 0] = "I", e[e.II = 1] = "II", e[e.III = 2] = "III", e[e.IV = 3] = "IV", e[e.V = 4] = "V", e[e.VI = 5] = "VI", e[e.VII = 6] = "VII", e[e.VIII = 7] = "VIII", e[e.IX = 8] = "IX", e[e.X = 9] = "X", e[e.XI = 10] = "XI", e[e.XII = 11] = "XII", e[e.XIII = 12] = "XIII", e[e.XIV = 13] = "XIV", e[e.XV = 14] = "XV", e[e.XVI = 15] = "XVI", e[e.XVII = 16] = "XVII", e[e.XVIII = 17] = "XVIII", e[e.XIX = 18] = "XIX", e[e.XX = 19] = "XX"
  }(e.GenerationEnum || (e.GenerationEnum = {}));
  e.GenerationEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.BusinessClass = 1] = "BusinessClass", e[e.Service = 2] = "Service", e[e.Taxi = 3] = "Taxi", e[e.Commercial = 4] = "Commercial", e[e.Special = 5] = "Special", e[e.LoaderExcavator = 6] = "LoaderExcavator", e[e.TruckTrailer = 7] = "TruckTrailer", e[e.PassengerUsed = 8] = "PassengerUsed", e[e.TruckUsed = 9] = "TruckUsed"
  }(e.RecommendedCarTypeEnum || (e.RecommendedCarTypeEnum = {}));
  e.RecommendedCarTypeEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e["Пусто"] = 0] = "Пусто", e[e["Рестайлинг1"] = 1] = "Рестайлинг1", e[e["Рестайлинг2"] = 2] = "Рестайлинг2", e[e["Рестайлинг3"] = 3] = "Рестайлинг3", e[e["Рестайлинг4"] = 4] = "Рестайлинг4", e[e["Рестайлинг"] = 5] = "Рестайлинг"
  }(e.RestylingEnum || (e.RestylingEnum = {}));
  e.RestylingEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.LeasingInvalidRegion = 22] = "LeasingInvalidRegion", e[e.Declined = 11] = "Declined", e[e.Validation = 1] = "Validation", e[e.SmsSendFailed = 2] = "SmsSendFailed", e[e.SmsMaxCountExceeded = 3] = "SmsMaxCountExceeded", e[e.SmsCodeInvalid = 4] = "SmsCodeInvalid", e[e.SmsCodeValidationFailed = 5] = "SmsCodeValidationFailed", e[e.ContactsRequestFailed = 10] = "ContactsRequestFailed", e[e.Exception = 12] = "Exception"
  }(e.SiteErrorEnum || (e.SiteErrorEnum = {}));
  e.SiteErrorEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.Success = 0] = "Success", e[e.Invalid = 1] = "Invalid", e[e.ServerError = 2] = "ServerError", e[e.Error = 3] = "Error"
  }(e.SmsCheckStatusEnum || (e.SmsCheckStatusEnum = {}));
  e.SmsCheckStatusEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.Success = 0] = "Success", e[e.MaxCountExceeded = 1] = "MaxCountExceeded", e[e.ServerError = 2] = "ServerError", e[e.Error = 3] = "Error"
  }(e.SmsSendStatusEnum || (e.SmsSendStatusEnum = {}));
  e.SmsSendStatusEnum
}(Enums || (Enums = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.Leasing = 0] = "Leasing", e[e.Individual = 2] = "Individual"
  }(e.SpecialOfferType || (e.SpecialOfferType = {}));
  e.SpecialOfferType;
  ! function(e) {
    e[e.Passenger = 0] = "Passenger", e[e.Truck = 1] = "Truck", e[e.SpecialVehicle = 2] = "SpecialVehicle"
  }(e.SpecialOfferCarType || (e.SpecialOfferCarType = {}));
  e.SpecialOfferCarType
}(Enums || (Enums = {}));
var Consts;
! function(e) {
  var t = function() {
    function e() {}
    return e.apps = {
      faq: "/api/application/faq",
      leasingShort: "/api/application/leasingshort",
      catalogApp: "/api/application/catalogApp",
      lfl: "/api/application/lfl",
      fuelCard: "/api/application/fuelCard",
      feedbackInvestor: "/api/application/feedbackInvestor",
      rba: "/api/application/rba"
    }, e.api = {
      data: {
        allBrands: "/api/data/allbrands",
        allModels: "/api/data/allmodels",
        brands: function(e) {
          return "/api/data/brands/" + e
        },
        models: function(e, t) {
          return "/api/data/models/" + e + "/" + t
        },
        lulbrands: "/api/data/brands",
        lulmodels: "/api/data/models",
        lflbrands: "/api/data/lflbrands",
        lflmodels: "/api/data/lflmodels",
        regions: "/api/data/regions",
        cities: "/api/data/cities",
        regionofcity: "/api/data/regionofcity",
        lflregioncodes: "/api/data/lflregioncodes"
      },
      sms: {
        send: "/api/sms/send",
        check: "/api/sms/check"
      },
      validation: {
        phoneNumber: "/api/validation/phone"
      },
      vehicleTaxonomy: {
        brands: function(e) {
          return "/api/vehicle-taxonomy/brands?vehicleTypeId=" + e
        },
        brandsBySuperTypeId: function(e) {
          return "/api/vehicle-taxonomy/supertypebrands/" + e + "?includeNoImages=true"
        },
        models: function(e, t) {
          return "/api/vehicle-taxonomy/brand/" + e + "/models?vehicleTypeId=" + t
        },
        modelsBySuperTypeId: function(e, t) {
          return "/api/vehicle-taxonomy/supertypebrands/" + e + "/models?superTypeId=" + t + "&includeNoImages=true"
        },
        modifications: function(e, t) {
          return "/api/vehicle-taxonomy/model/" + e + "/modifications?vehicleTypeId=" + t
        },
        modificationsBySuperTypeId: function(e, t) {
          return "/api/vehicle-taxonomy/model/" + e + "/modifications-by-super-type?vehicleSuperTypeId=" + t
        },
        modification: function(e) {
          return "/api/vehicle-taxonomy/modification/" + e
        },
        optionsByModificationId: function(e) {
          return "/api/vehicle-taxonomy/options/" + e
        },
        generations: "/api/vehicle-taxonomy/generations",
        restyling: "/api/vehicle-taxonomy/restyling",
        superTypes: "/api/vehicle-taxonomy/supertypes"
      },
      auction: {
        bids: function(e) {
          return "/api/auction/bids/" + e
        },
        bid: "/api/auction/bid",
        lotStatus: function(e, t) {
          return "/api/auction/lot-status/" + e + "?status=" + t
        },
        lotDuration: function(e, t) {
          return "/api/auction/lot-duration/" + e + "?duration=" + t
        },
        lotListAdmin: function(e) {
          return "/api/auction/lot-list-admin?page=" + e.page + "&pageSize=" + e.pageSize + "&city=" + e.city + "&status=" + e.status + "&suzId=" + e.suzId + "&manager=" + e.manager + "&brand=" + e.brand + "&model=" + e.model + "&year=" + e.year + "&lotId=" + e.lotId + "&sortBy=" + e.sortBy
        },
        lotList: function(e) {
          return "/api/auction/lot-list?page=" + e.page + "&pageSize=" + e.pageSize + "&city=" + e.city + "&status=" + e.status + "&suzId=" + e.suzId + "&manager=" + e.manager + "&brand=" + e.brand + "&model=" + e.model + "&year=" + e.year + "&lotId=" + e.lotId + "&sortBy=" + e.sortBy
        },
        lot: function(e) {
          return "/api/auction/lot/" + e
        },
        modification: function(e) {
          return "/api/auction/modification/" + e
        },
        colors: "/api/auction/colors",
        save: "/api/auction/",
        managers: "/api/auction/managers",
        subscribe: "/api/auction/subscribe",
        getLotStatus: function(e) {
          return "/api/auction/lot-status/" + e
        },
        getPhotos: function(e) {
          return "/api/auction/photos/" + e
        },
        modelsByBrandId: function(e, t) {
          return "/api/auction/models/" + e + (t ? "?forAdmin=true" : "")
        }
      },
      advert: {
        advert: function(e) {
          return "/api/auto/advert/" + e
        },
        advertListAdmin: function(e) {
          return "/api/auto/advert-list-admin?page=" + e.page + "&pageSize=" + e.pageSize + "&cityId=" + e.cityId + "&year=" + e.year + "&moderationState=" + e.moderationState + "&brandId=" + e.brandId + "&modelId=" + e.modelId + "&sortBy=" + e.sortBy
        },
        changeAdvertActiveStatus: function(e, t) {
          return "/api/auto/change-active-status?advertId=" + e + "&isActive=" + t
        },
        advertInfo: function(e) {
          return "/api/auto/advert-info/" + e
        },
        save: "/api/auto/save/"
      },
      account: {
        inviteAuctionPerson: "/api/account/invite-auction-person",
        inviteAuctionOrg: "/api/account/invite-auction-org",
        registerAuctionPerson: "/api/account/register-auction-person",
        registerAuctionOrg: "/api/account/register-auction-org"
      }
    }, e.storagedFile = {
      upload: function(e) {
        return "/storagedfile/upload?type=" + e
      }
    }, e.advertImage = {
      upload: function() {
        return "/api/auto/upload-advert-image"
      }
    }, e.lfl = {
      calc: "/personal-leasing/calc"
    }, e.auction = {
      lotList: "/direct/auction/lots",
      lot: function(e) {
        return "/direct/auction/lot/" + e
      }
    }, e.faq = {
      questionUseful: "/faq/questionUseful",
      questionPreview: "/faq/questionPreview"
    }, e.company = {
      postQuestion: "/company/press/post-question"
    }, e.home = {
      survey: "/survey"
    }, e.auto = {
      minPirce: "/auto/models/minprice",
      contactsRequest: "/api/application/contactsrequest",
      similar: "/auto/similar",
      search: function(e, t, n) {
        void 0 === t && (t = 1), void 0 === n && (n = !1);
        var i = "/auto/search/" + e;
        return t > 1 && (i += "/" + t), n && (i += "#list"), i
      },
      recommended: function(e, t) {
        return "/auto/recommended/" + e + "/" + t
      }
    }, e.search = {
      filterRefs: function(e) {
        return "/api/search/filterrefs/" + e
      },
      models: function(e, t) {
        return "/api/search/models/" + e + "/" + t
      },
      post: "/api/search/post",
      results: function(e, t) {
        return void 0 === t && (t = 1), "/api/search/results/" + e + "/" + t
      }
    }, e
  }();
  e.Urls = t
}(Consts || (Consts = {}));
var Enums;
! function(e) {
  ! function(e) {
    e[e.PassengerCar = 9] = "PassengerCar"
  }(e.VehicleTypeEnum || (e.VehicleTypeEnum = {}));
  e.VehicleTypeEnum
}(Enums || (Enums = {})), angular.module("dealer.web.app").factory("$script", ["$q", "$rootScope", function(e, t) {
  "use strict";
  var n = [],
    i = {};
  return function(r) {
    var o = e.defer();
    if (n.indexOf(r) !== -1) o.resolve();
    else {
      if (i[r]) return i[r];
      AngularHelpers.loadScript(r, function() {
        delete i[r], n.push(r), t.$apply(function() {
          o.resolve()
        })
      }), i[r] = o.promise
    }
    return o.promise
  }
}]).factory("ymapsLoader", ["$window", "$timeout", "$script", "ymapsConfig", function(e, t, n, i) {
  "use strict";
  var r, o = !1;
  return {
    ready: function(a) {
      r || (r = n(i.apiUrl).then(function() {
        return e.ymaps
      })), r.then(function(e) {
        e.ready(function() {
          o || (o = !0, console.log(e.geolocation)), t(function() {
            a(e)
          })
        })
      })
    }
  }
}]).constant("ymapsConfig", {
  apiUrl: "//api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&ns=ymaps",
  mapBehaviors: ["default"],
  markerOptions: {
    preset: "islands#darkgreenIcon"
  },
  fitMarkers: !0
}).value("debounce", function(e, t) {
  "use strict";
  var n = null;
  return function() {
    var i = this,
      r = arguments,
      o = function() {
        n = null, e.apply(i, r)
      };
    clearTimeout(n), n = setTimeout(o, t)
  }
}).controller("YmapController", ["$scope", "$element", "ymapsLoader", "ymapsConfig", "debounce", function(e, t, n, i, r) {
  "use strict";

  function o(e, t) {
    var n = .1,
      i = r(function() {
        if (t.getLength() > 0) {
          var i = t.getBounds(),
            r = [i[1][0] + n, i[1][1] + n],
            o = [i[0][0] - n, i[0][1] - n];
          e.setBounds([o, r], {
            checkZoomRange: !0
          })
        }
      }, 100);
    t.events.add("boundschange", i)
  }
  var a = this;
  n.ready(function(n) {
    a.addMarker = function(t, i, r) {
      var o = new n.Placemark(t, i, r);
      return e.markers.add(o), o
    }, a.removeMarker = function(t) {
      e.markers.remove(t)
    }, a.map = new n.Map(t[0], {
      center: e.center || [0, 0],
      zoom: e.zoom || 0,
      behaviors: i.mapBehaviors
    }), e.markers = new n.GeoObjectCollection({}, i.markerOptions), a.map.geoObjects.add(e.markers), a.map.controls.add(new n.control.ZoomControl), i.fitMarkers && o(a.map, e.markers);
    var r;
    e.$watch("center", function(e) {
      r || a.map.panTo(e)
    }, !0), e.$watch("zoom", function(e) {
      r || a.map.setZoom(e, {
        checkZoomRange: !0
      })
    }), a.map.events.add("boundschange", function(t) {
      r = !0, e.$apply(function() {
        e.center = t.get("newCenter"), e.zoom = t.get("newZoom")
      }), r = !1
    })
  })
}]).directive("yandexMap", ["$compile", "ymapsLoader", function(e, t) {
  "use strict";
  return {
    restrict: "EA",
    scope: {
      center: "=",
      zoom: "="
    },
    compile: function(n) {
      var i = n.html();
      return n.html(""),
        function(n, r) {
          t.ready(function() {
            i = angular.element("<div></div>").html(i).contents(), r.append(i), e(i)(n.$parent)
          })
        }
    },
    controller: "YmapController"
  }
}]).directive("ymapMarker", function() {
  "use strict";
  return {
    restrict: "EA",
    require: "^yandexMap",
    scope: {
      coordinates: "=",
      index: "=",
      properties: "=",
      options: "="
    },
    link: function(e, t, n, i) {
      function r() {
        var t = [parseFloat(e.coordinates[0]), parseFloat(e.coordinates[1])];
        o ? o.geometry.setCoordinates(t) : o = i.addMarker(t, angular.extend({
          iconContent: e.index
        }, e.properties), e.options)
      }
      var o;
      e.$watch("index", function(e) {
        o && o.properties.set("iconContent", e)
      }), e.$watch("coordinates", function(e) {
        e && r()
      }, !0), e.$on("$destroy", function() {
        o && i.removeMarker(o)
      })
    }
  }
}), angular.module("dealer.web.app").directive("chosen", ["$timeout", function(e) {
  var t, n, i, r, o = [].indexOf || function(e) {
    for (var t = 0, n = this.length; t < n; t++)
      if (t in this && this[t] === e) return t;
    return -1
  };
  n = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, t = ["noResultsText", "allowSingleDeselect", "disableSearchThreshold", "disableSearch", "enableSplitWordSearch", "inheritSelectClasses", "maxSelectedOptions", "placeholderTextMultiple", "placeholderTextSingle", "searchContains", "singleBackstrokeDelete", "displayDisabledOptions", "displaySelectedOptions", "width"], r = function(e) {
    return e.replace(/[A-Z]/g, function(e) {
      return "_" + e.toLowerCase()
    })
  }, i = function(e) {
    var t;
    if (angular.isArray(e)) return 0 === e.length;
    if (angular.isObject(e))
      for (t in e)
        if (e.hasOwnProperty(t)) return !1;
    return !0
  };
  var a;
  return {
    restrict: "A",
    require: "?ngModel",
    terminal: !0,
    link: function(s, l, c, u) {
      var d, p, m, f, h, v, g, y, S, C, b, w, M;
      if (l.addClass("localytics-chosen"), s.$watch(function() {
          return u.$invalid && u.$dirty
        }, function(e, t) {
          e !== t && (u.$invalid && u.$dirty ? $(l).next().addClass("chosen-invalid") : $(l).next().removeClass("chosen-invalid"))
        }), g = s.$eval(c.chosen) || {}, g.no_results_text || (g.no_results_text = l.attr("data-placeholder")), angular.forEach(c, function(e, n) {
          if (o.call(t, n) >= 0) return g[r(n)] = s.$eval(e)
        }), C = function() {
          return l.addClass("loading").attr("disabled", !0).trigger("chosen:updated")
        }, b = function() {
          return l.removeClass("loading").attr("disabled", !1).trigger("chosen:updated")
        }, d = null, p = null, f = !1, h = function() {
          return d ? l.trigger("chosen:updated") : (d = l.chosen(g).data("chosen"), p = d ? d.default_text : "")
        }, S = function() {
          return f = !1, l.attr("data-placeholder", p)
        }, m = function() {
          return f = !0, l.attr("data-placeholder", d ? d.results_none_found : "").attr("disabled", !0).trigger("chosen:updated")
        }, u ? (y = u.$render, u.$render = function() {
          return y(), h()
        }, M = function() {
          return u.$viewValue
        }, s.$watch(M, u.$render, !0)) : h(), c.$observe("disabled", function() {
          return l.trigger("chosen:updated")
        }), c.ngOptions && u) return v = c.ngOptions.match(n), w = v[7], s.$watchCollection(w, function(t, n) {
        return a = e(function() {
          return angular.isUndefined(t) ? C() : (f && S(), b(), i(t) ? m() : void 0)
        })
      }), s.$on("$destroy", function(t) {
        if ("undefined" != typeof a && null !== a) return e.cancel(a)
      })
    }
  }
}]), angular.module("dealer.web.app").directive("epDate", function() {
  return {
    restrict: "A",
    link: function(e, t, n) {
      $(t).datetimepicker({
        pickTime: !1,
        useCurrent: !1,
        language: "ru"
      })
    }
  }
}), angular.module("dealer.web.app").directive("epSmsSend", ["formService", "smsService", function(e, t) {
  return {
    "restricе": "A",
    require: ["ngModel", "^form"],
    link: function(e, n, i, r) {
      var o, a = r[0],
        s = r[1],
        l = s[i.epSmsSend || "Phone"],
        c = function(r) {
          if (r.preventDefault(), o = null, !$(n).attr("disabled"))
            if (l.$invalid && !l.$dirty) l.$setDirty(), e.$apply();
            else if (l.$valid) {
            var a = l.$modelValue;
            t.sendSmsCode(a, i.source).then(function(e) {
              o = e;
              var t = u().getPhones();
              e != Enums.SmsSendStatusEnum.Success || _.contains(t, a) || t.push(a), d(!1, t)
            })
          }
        },
        u = function() {
          return a.$viewValue
        },
        d = function(e, t) {
          void 0 === t && (t = null);
          var n = new Directives.EpSmsSendVeiwValueModel(l.$modelValue, t || []);
          a.$setViewValue(n), e && a.$setPristine()
        };
      a.$validators.smsSendMaxCountExceeded = function(e, t) {
        return o != Enums.SmsSendStatusEnum.MaxCountExceeded
      }, a.$validators.smsSendFailed = function(e, t) {
        return o != Enums.SmsSendStatusEnum.ServerError && o != Enums.SmsSendStatusEnum.Error
      }, a.$validators.smsrequired = function(e, t) {
        return n.attr("required") && t.isSended()
      }, a.$formatters = [], a.$formatters.push(function(e) {
        return u()
      }), a.$parsers = [], a.$parsers.push(function(e) {
        return e.isSended()
      }), d(!0), n.on("click", function(e) {
        return c(e)
      }), e.$watch(function() {
        return l.$modelValue
      }, function() {
        return d(!0)
      })
    }
  }
}]);
var Directives;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.phone = e, this.phones = t
    }
    return e.prototype.isSended = function() {
      return _.contains(this.phones, this.phone)
    }, e.prototype.getPhones = function() {
      return this.phones.slice()
    }, e
  }();
  e.EpSmsSendVeiwValueModel = t
}(Directives || (Directives = {}));
var Services;
! function(e) {
  var t = function() {
    function e() {
      this.none = "_none_", this.clicks = 0, this.pageTypes = [], this.pageTypes.push({
        key: "landing",
        value: ["/leasing/special", "/leasing/short-app", "/en/landing"]
      }), this.pageTypes.push({
        key: "special",
        value: ["/special-offers"]
      }), this.pageTypes.push({
        key: "full",
        value: ["/auto"]
      }), this.vehicleTypes = [], this.vehicleTypes.push({
        key: "1",
        value: "Легковые"
      }), this.vehicleTypes.push({
        key: "2",
        value: "Грузовые"
      }), this.vehicleTypes.push({
        key: "3",
        value: "Автобусы"
      }), this.vehicleTypes.push({
        key: "4",
        value: "Прицепы/ полуприцепы"
      }), this.vehicleTypes.push({
        key: "5",
        value: "Спецтехника"
      }), this.vehicleTypes.push({
        key: "6",
        value: "Коммерческие"
      }), this.vehicleTypes.push({
        key: "7",
        value: "Самоходная техника"
      });
      try {
        var e = angular.element(document.body).injector().get("$gacData");
        this.vehicleBrandName = e.vehicleBrandName, this.vehicleModelName = e.vehicleModelName, this.vehicleCityName = e.vehicleCityName, this.vehicleTypeName = this.getVehicleTypeName(e.vehicleTypeName)
      } catch (e) {}
      window.gaCollectorService = this
    }
    return e.prototype.onButtonClick = function(e) {
      this.clicks++, this.button = e.attr("id")
    }, e.prototype.escapeRegExp = function(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }, e.prototype.replaceAll = function(e, t, n) {
      return e.replace(new RegExp(this.escapeRegExp(t), "g"), n)
    }, e.prototype.getQueryParam = function(e) {
      for (var t = window.location.search.substring(1), n = t.split("&"), i = 0; i < n.length; i++) {
        var r = n[i].split("=");
        if (r[0] == e) return r[1]
      }
      return ""
    }, e.prototype.getVehicleTypeName = function(e) {
      for (var t = 0; t < this.vehicleTypes.length; t++) {
        var n = this.vehicleTypes[t];
        if (n.key == e.toString()) return n.key + "^" + n.value
      }
    }, e.prototype.removeUrlParameter = function(e, t) {
      var n = e.split("?");
      if (n.length >= 2) {
        for (var i = n.shift(), r = n.join("?"), o = encodeURIComponent(t) + "=", a = r.split(/[&;]/g), s = a.length; s-- > 0;) a[s].lastIndexOf(o, 0) !== -1 && a.splice(s, 1);
        e = i + "?" + a.join("&")
      }
      return e
    }, e.prototype.getPageType = function(e) {
      for (var t = 0; t < this.pageTypes.length; t++)
        for (var n = 0; n < this.pageTypes[t].value.length; n++) {
          var i = this.pageTypes[t].value[n];
          if (0 == e.indexOf(i)) return this.pageTypes[t].key
        }
      return "site"
    }, e.prototype.removeUtmTags = function(e) {
      return e ? (e = this.removeUrlParameter(e, "utm_source"), e = this.removeUrlParameter(e, "utm_medium"), e = this.removeUrlParameter(e, "utm_content"), e = this.removeUrlParameter(e, "utm_campaign"), e = this.removeUrlParameter(e, "utm_term"), e = this.removeUrlParameter(e, "utm_device"), e = this.removeUrlParameter(e, "utm_geo")) : e
    }, e.prototype.getUtmTags = function() {
      var e = new Array,
        t = this.getQueryParam("utm_source"),
        n = this.getQueryParam("utm_medium"),
        i = this.getQueryParam("utm_content"),
        r = this.getQueryParam("utm_campaign"),
        o = this.getQueryParam("utm_term"),
        a = this.getQueryParam("utm_device"),
        s = this.getQueryParam("utm_geo");
      return t = this.replaceAll(t, "|", "^"), n = this.replaceAll(n, "|", "^"), i = this.replaceAll(i, "|", "^"), r = this.replaceAll(r, "|", "^"), o = this.replaceAll(o, "|", "^"), a = this.replaceAll(a, "|", "^"), s = this.replaceAll(s, "|", "^"), t = this.replaceAll(t, "_", "-"), n = this.replaceAll(n, "_", "-"), i = this.replaceAll(i, "_", "-"), r = this.replaceAll(r, "_", "-"), o = this.replaceAll(o, "_", "-"), a = this.replaceAll(a, "_", "-"), s = this.replaceAll(s, "_", "-"), a && e.push("utm-device=" + a), s && e.push("utm-geo=" + s), t && e.push("utm-source=" + t), n && e.push("utm-medium=" + n), i && e.push("utm-content=" + i), r && e.push("utm-campaign=" + r), o && e.push("utm-term=" + o), e
    }, e.prototype.readCookie = function(e) {
      var t, n, i, r;
      for (n = document.cookie.split("; "), r = {}, t = n.length - 1; t >= 0; t--) i = n[t].split("="), r[i[0]] = i[1];
      return r[e]
    }, e.prototype.getTracking = function(e, t, n, i) {
      var r = this.none,
        o = this.getUtmTags(),
        a = new Array;
      return this.page = this.getPageType(document.location.pathname), a.push("/leasing-form-send-" + (this.page || "site")), a.push(e || r), a.push(this.button || r), a.push(this.vehicleTypeName || "_notype_"), a.push(this.vehicleBrandName || r), a.push(this.vehicleModelName || r), a.push(this.removeUtmTags(decodeURIComponent(this.readCookie("originalUrl") || r))), a.push(decodeURIComponent(this.readCookie("originalReferrer") || r)), a.push(document.location.pathname), a.push(r), a.push(r), a.push($("a[href^='tel']").attr("href").substring(4)), a.push(r), a.push(this.vehicleCityName || r), a.push(n || r), a.push(md5(t.substr(1))), a.push(i || r), a.push(this.clicks.toString()), a.push(o.join("&") || r), a.join("#")
    }, e
  }();
  e.GaCollectorService = t
}(Services || (Services = {})), angular.module("dealer.web.app").directive("gaButtonTrack", ["gaCollectorService", function(e) {
  return {
    restrict: "A",
    link: function(t, n, i) {
      n.on("click", function(t) {
        e.onButtonClick(n)
      })
    }
  }
}]), angular.module("dealer.web.app").directive("interestButton", ["gaCollectorService", "userInterestService", function(e, t) {
  return {
    restrict: "A",
    scope: {
      pageTitle: "=",
      blockTitle: "=",
      brandIds: "=",
      carTypes: "=",
      vehicleSuperTypeIds: "=",
      safoBrandIds: "=",
      modelIds: "=",
      safoModelIds: "="
    },
    link: function(e, n, i) {
      n.on("click", function(n) {
        var i = t.getPageInterest();
        i.blockTitle = e.blockTitle || $(n.delegateTarget).parents("section").find("h1,h2,h3,h4").first().text(), e.pageTitle && (i.pageTitle = e.pageTitle), e.brandIds && e.brandIds.length > 0 && (i.brandIds = e.brandIds, i.safoBrandIds = []), e.safoBrandIds && e.safoBrandIds.length > 0 && (i.safoBrandIds = e.safoBrandIds, i.brandIds = []), e.modelIds && e.modelIds.length > 0 && (i.modelIds = e.modelIds, i.safoModelIds = []), e.safoModelIds && e.safoModelIds.length > 0 && (i.safoModelIds = e.safoModelIds, i.modelIds = []), e.carTypes && e.carTypes.length > 0 && (i.carTypes = e.carTypes, i.vehicleSuperTypeIds = []), e.vehicleSuperTypeIds && e.vehicleSuperTypeIds.length > 0 && (i.vehicleSuperTypeIds = e.vehicleSuperTypeIds, i.carTypes = []), i.action = Models.UserInterests.UserInterestActionEnum.ButtonClick, t.add(i)
      })
    }
  }
}]), angular.module("dealer.web.app").directive("listPager", function() {
  return {
    transclude: !0,
    scope: {
      pager: "=listPager"
    },
    templateUrl: "/ngview/listPager.html",
    controller: ["$scope", "$attrs", "scrollService", function(e, t, n) {
      var i = e.pager,
        r = {
          setPage: function(e) {
            e < 1 && (e = 1), e > i.pagesCount && (e = i.pagesCount), e != i.page && (i.page = e, i.setPage(e), t.listPagerScroll && n.scrollTo(t.listPagerScroll))
          },
          next: function() {
            return r.setPage(i.page + 1)
          },
          prev: function() {
            return r.setPage(i.page - 1)
          },
          getPages: function() {
            var t = [],
              n = i.page,
              r = 1,
              o = Math.max(2, n - r),
              a = Math.min(n + r, i.pagesCount - 1);
            n <= 2 && (a = 4);
            var s = i.pagesCount + 1;
            n >= s - 2 && (o = s - 4), o < 2 && (o = 2), a > i.pagesCount - 1 && (a = i.pagesCount - 1);
            for (var l = o; l <= a; ++l) t.push(l);
            return e.showFirstDots = t[0] > 2, e.showLastDots = t[t.length - 1] < i.pagesCount - 1, t
          },
          getCss: function(e) {
            return e == i.page ? "active" : ""
          }
        };
      e.vm = r
    }]
  }
}), angular.module("dealer.web.app").directive("map", ["$timeout", function(e) {
  return {
    template: "<div></div>",
    scope: {
      map: "=",
      selectedOffice: "="
    },
    link: function(t, n, i) {
      var r = function(i) {
        var r = i.map(function(e) {
            if (e.gps && e.gps.lat > 0 && e.gps.lng > 0) return e;
          }),
          o = new google.maps.LatLngBounds;
        r.forEach(function(e) {
          return o.extend(new google.maps.LatLng(e.gps.lat, e.gps.lng))
        });
        var a = {
            zoom: 14,
            center: o.getCenter(),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          },
          s = new google.maps.Map(n[0], a);
        r.length > 1 && s.fitBounds(o);
        var l = new google.maps.InfoWindow,
          c = function(e) {
            var n = new google.maps.LatLng(e.gps.lat, e.gps.lng),
              i = new google.maps.Marker({
                position: n,
                map: s,
                title: e.name,
                icon: "/img/metka.png"
              });
            (e.name || e.city) && e.mapPopup && google.maps.event.addListener(i, "click", function() {
              l.setContent("<h3>" + (e.name || e.city) + '</h3><div class="infoWindowContent">' + e.mapPopup + "</div>"), l.open(s, i), t.selectedOffice = e, t.$apply()
            })
          };
        r.forEach(function(e) {
          return c(e)
        }), e(function() {
          google.maps.event.trigger(s, "resize"), s.setCenter(o.getCenter())
        }, 500)
      };
      t.$watch("map", function(e) {
        e && r(e)
      })
    }
  }
}]), angular.module("dealer.web.app").directive("ngBindHtmlUnsafe", function() {
  return function(e, t, n) {
    t.addClass("ng-binding").data("$binding", n.ngBindHtmlUnsafe), e.$watch(n.ngBindHtmlUnsafe, function(e) {
      t.html(e || "")
    })
  }
}), angular.module("dealer.web.app").directive("scrollTo", ["$timeout", function(e) {
  function t(e) {
    return function() {
      var t = angular.element(e.container),
        n = "number" == typeof e.scrollTo ? e.scrollTo : angular.element(e.scrollTo),
        i = "number" == typeof n ? n : n.offset().top - e.offset;
      t.animate({
        scrollTop: i
      }, e.duration, e.easing, function() {})
    }
  }
  return {
    restrict: "A",
    link: function(n, i, r) {
      var o = angular.extend({
        container: "html, body",
        scrollTo: angular.element(),
        offset: r.scrollToOffset ? parseInt(r.scrollToOffset) : 0,
        duration: 150,
        easing: "swing"
      }, r);
      i.on("click", function() {
        e(t(o))
      })
    }
  }
}]), angular.module("dealer.web.app").directive("tabsHeader", function() {
  return {
    restrict: "C",
    link: function(e, t, n) {
      setTimeout(function() {
        function e() {
          i = n.find(".active").position(), n.find(".border").stop().css({
            left: i.left,
            top: i.top,
            width: n.find(".active").width()
          })
        }
        var n = $(t),
          i = ($(this), n.find(".active").position());
        e(), n.find("a").on("click", function(t) {
          t.preventDefault();
          var i = $(this).attr("tab-id");
          n.find("a").stop().parent().removeClass("active"), n.find("a").stop().closest(".wrp").removeClass(function(e, t) {
            return (t.match(/(^|\s)tab-\S+/g) || []).join(" ")
          }), $(this).stop().parent().addClass("active"), $(this).stop().closest(".wrp").addClass("tab-" + i), e(), o = r.filter(".active");
          var a = n.parent().next();
          a.find(".tab").stop().fadeOut(300, function() {
            $(this).removeClass("active")
          }).hide(), a.find('.tab[tab-id="' + i + '"]').stop().fadeIn(300, function() {
            $(this).addClass("active")
          })
        });
        var r = n.find("ul li"),
          o = r.filter(".active")
      }, 0)
    }
  }
});
var Shared;
! function(e) {
  var t = function() {
    function e() {}
    return e.prototype.setFormDirty = function(e, t) {
      void 0 === t && (t = !0), t ? e.$setDirty() : e.$setPristine();
      for (var n in e) {
        var i = e[n];
        e.hasOwnProperty(n) && i && void 0 !== i.$dirty && (t ? (i.$dirty = t, i.$validate(), this.interactWith(e[n])) : e[n].$setPristine())
      }
    }, e.prototype.interactWith = function(e) {
      e && e.$setViewValue && e.$setViewValue(e.$viewValue)
    }, e.prototype.compile = function(e) {
      angular.element($("body")).injector().invoke(["$compile", function(t) {
        var n = angular.element(e);
        t(n)(n.scope())
      }])
    }, e.prototype.scrollTo = function(e) {
      $("html, body").animate({
        scrollTop: $(e).offset().top
      }, 500)
    }, e.prototype.genericAjaxSelect2Option = function(e, t) {
      return {
        url: e,
        cache: !!t,
        data: function(e) {
          return {
            filter: e
          }
        },
        results: function(e) {
          return {
            results: e
          }
        }
      }
    }, e.prototype.watchGroup = function(e, t, n, i, r) {
      for (var o = 0; o < t.length; o++) e.$watch(t[o], n, i, r)
    }, e.prototype.setOrKeepCokie = function(e, t, n) {
      this.readCookie(e) || this.setCookie(e, t, n)
    }, e.prototype.setCookie = function(e, t, n) {
      n = n || {};
      var i = n.expires;
      if ("number" == typeof i && i) {
        var r = new Date;
        r.setTime(r.getTime() + 1e3 * i), i = n.expires = r
      }
      i && i.toUTCString && (n.expires = i.toUTCString()), t = encodeURIComponent(t);
      var o = e + "=" + t;
      for (var a in n) {
        o += "; " + a;
        var s = n[a];
        s !== !0 && (o += "=" + s)
      }
      document.cookie = o
    }, e.prototype.readCookie = function(e) {
      var t, n, i, r;
      for (n = document.cookie.split("; "), r = {}, t = n.length - 1; t >= 0; t--) i = n[t].split("="), r[i[0]] = i[1];
      return r[e]
    }, e.prototype.showPopup = function(e) {
      var t = $(e),
        n = 100,
        i = $(window).width();
      i < 800 && ($(t[0]).width("90%"), n = 0);
      var r = i / 2 - $(t[0]).width() / 2;
      return r < 0 && (r = 0), t.bPopup({
        position: [r, n]
      })
    }, e.prototype.loadScript = function(e, t) {
      var n = document.createElement("script");
      n.onload = n.onreadystatechange = function() {
        n.readyState && "complete" !== n.readyState && "loaded" !== n.readyState || (n.onload = n.onreadystatechange = null, angular.isFunction(t) && t())
      }, n.async = !0, n.src = e, document.getElementsByTagName("body")[0].appendChild(n)
    }, e
  }();
  e.AngularHelpers = t
}(Shared || (Shared = {}));
var AngularHelpers = new Shared.AngularHelpers,
  Shared;
! function(e) {
  var t = function() {
    function e() {}
    return e.prototype.toLowerCamelCase = function(e) {
      return e.split(" ").map(function(e) {
        return e.charAt(0).toLowerCase() + e.slice(1)
      }).join("")
    }, e
  }();
  e.StringHelpers = t
}(Shared || (Shared = {}));
var stringHelpers = new Shared.StringHelpers,
  Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.AutoBrand = t;
  var n = function() {
    function e() {}
    return e
  }();
  e.AutoModel = n
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t;
    ! function(e) {
      var t = function() {
        function e() {}
        return e
      }();
      e.City = t
    }(t = e.Data || (e.Data = {}))
  }(t = e.Api || (e.Api = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.Feedback = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.ImageStorageFile = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {
      this.advance = 20, this.term = 36
    }
    return e
  }();
  e.LflCalcModel = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {
      this.handlers = []
    }
    return e.prototype.on = function(e) {
      this.handlers.push(e)
    }, e.prototype.off = function(e) {
      this.handlers = this.handlers.filter(function(t) {
        return t !== e
      })
    }, e.prototype.trigger = function(e) {
      this.handlers && this.handlers.slice(0).forEach(function(t) {
        return t(e)
      })
    }, e
  }();
  e.LiteEvent = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.ManagerInfo = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.NameWithId = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t;
    ! function(e) {
      var t = function() {
        function e() {}
        return e
      }();
      e.Region = t
    }(t = e.Data || (e.Data = {}))
  }(t = e.Api || (e.Api = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.RequestResult = t;
  var n = function() {
    function e() {}
    return e
  }();
  e.RequestResultError = n
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.SliderOptions = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.StoragedFile = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.model = e, this.serverResult = t
    }
    return e
  }();
  e.SubmitResult = t
}(Models || (Models = {}));
var Models;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.SurveyModel = t;
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.AttachedFile = t
  }(t = e.SurveyModel || (e.SurveyModel = {}))
}(Models || (Models = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.getAdvertListAdmin = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.advert.advertListAdmin(e)).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("AdvertService.getAdvertList():", e), t.resolve([])
      }), t.promise
    }, e.prototype.getAdvertInfo = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.advert.advertInfo(e)).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("AdvertService.getAdvertInfo():", e), t.resolve([])
      }), t.promise
    }, e.prototype.changeAdvertActiveStatus = function(e, t) {
      var n = this.$q.defer();
      return this.$http.get(Consts.Urls.api.advert.changeAdvertActiveStatus(e, t)).success(function(e) {
        return n.resolve(e)
      }).error(function(e) {
        console.error("AdvertService.changeAdvertActiveStatus():", e), n.resolve([])
      }), n.promise
    }, e.prototype.getColors = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.colors).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getManagers = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.managers).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e
  }();
  e.AdvertService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.getCities = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.cities).success(function(t) {
        return e.resolve(t)
      }).error(function(t) {
        console.error("ApiDataService.getCities(): ", t), e.resolve([])
      }), e.promise
    }, e.prototype.getAllBrands = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.allBrands).success(function(t) {
        return e.resolve(t)
      }).error(function(t) {
        console.error("ApiDataService.getBrands(): ", t), e.resolve([])
      }), e.promise
    }, e.prototype.getAllModels = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.allModels + "/" + e).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getModels(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getLulBrands = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.lulbrands + "/" + e).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getBrands(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getLulModels = function(e, t) {
      var n = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.lulmodels + "/" + e + "/" + t).success(function(e) {
        return n.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getModels(): ", e), n.resolve([])
      }), n.promise
    }, e.prototype.getModelMinPrice = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.auto.minPirce + "?modelId=" + e).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getModelMinPrice(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getRegions = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.regions).success(function(t) {
        return e.resolve(t)
      }).error(function(t) {
        console.error("ApiDataService.getRegions(): ", t), e.resolve([])
      }), e.promise
    }, e.prototype.getRegionOfCityByName = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.regionofcity + "/name/" + e).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getRegionOfCityByName(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getRegionOfCityById = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.regionofcity + "/id/" + e).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("ApiDataService.getRegionOfCityById(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getLflRegionCodes = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.data.lflregioncodes).success(function(t) {
        return e.resolve(t)
      }).error(function(t) {
        console.error("ApiDataService.getLflRegionCodes(): ", t), e.resolve([])
      }), e.promise
    }, e.prototype.getLflBrands = function(e) {
      var t = this;
      void 0 === e && (e = null);
      var n = this.$q.defer(),
        i = new Array,
        r = null;
      return r = e instanceof Array ? e : null != e ? [e] : [""], r.forEach(function(e) {
        var n = Consts.Urls.api.data.lflbrands + "/" + e;
        i.push(t.$http.get(n))
      }), this.$q.all(i).then(function(e) {
        var t = e.filter(function(e) {
            return "OK" == e.statusText
          }),
          i = t.map(function(e) {
            return e.data
          }),
          r = new Array;
        r = [].concat.apply([], i), n.resolve(_.sortBy(r, "text"))
      }).catch(function(e) {
        console.error("ApiDataService.getLflBrands(): ", e), n.resolve([])
      }), n.promise
    }, e.prototype.getLflModels = function(e, t) {
      var n = this;
      void 0 === t && (t = null);
      var i = this.$q.defer();
      if (!e) return i.resolve(new Array), i.promise;
      var r = new Array,
        o = null;
      return o = t instanceof Array ? t : null != t ? [t] : [""], o.forEach(function(t) {
        var i = Consts.Urls.api.data.lflmodels + "/" + t + "/" + e;
        r.push(n.$http.get(i))
      }), this.$q.all(r).then(function(e) {
        var t = e.filter(function(e) {
            return "OK" == e.statusText
          }),
          n = t.map(function(e) {
            return e.data
          }),
          r = new Array;
        r = [].concat.apply([], n), i.resolve(_.sortBy(r, "text"))
      }).catch(function(e) {
        console.error("ApiDataService.getLflModels(): ", e), i.resolve([])
      }), i.promise
    }, e.prototype.getBrands = function(e) {
      var t = this;
      void 0 === e && (e = null);
      var n = this.$q.defer(),
        i = new Array,
        r = null;
      return r = e instanceof Array ? e : null != e ? [e] : [""], r.forEach(function(e) {
        var n = Consts.Urls.api.data.brands(e);
        i.push(t.$http.get(n))
      }), this.$q.all(i).then(function(e) {
        var t = (e.map(function(e) {
          return e.data
        }), new Array);
        t = [].concat.apply([], e.map(function(e) {
          return e.data
        })), n.resolve(_.sortBy(t, "text"))
      }).catch(function(e) {
        return n.reject(e)
      }), n.promise
    }, e.prototype.getModels = function(e, t) {
      var n = this;
      void 0 === t && (t = null);
      var i = this.$q.defer();
      if (!e) return i.resolve(new Array), i.promise;
      var r = new Array,
        o = null;
      return o = t instanceof Array ? t : null != t ? [t] : [""], o.forEach(function(t) {
        var i = Consts.Urls.api.data.models(t, e);
        r.push(n.$http.get(i))
      }), this.$q.all(r).then(function(e) {
        var t = new Array;
        t = [].concat.apply([], e.map(function(e) {
          return e.data
        })), i.resolve(_.sortBy(t, "text"))
      }).catch(function(e) {
        return i.reject(e)
      }), i.promise
    }, e
  }();
  e.ApiDataService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e) {
      this.popupService = e
    }
    return e.$inject = ["popupService"], e.prototype.successMessage = function(e) {
      this.popupService.popupRequestNumber(e.data.number)
    }, e.prototype.showError = function(e, t) {
      void 0 === t && (t = ""), this.popupService.popupMessage(e, t)
    }, e.prototype.closePopup = function() {
      helpers.modal.hide($(".modal"))
    }, e
  }();
  e.ApplicationNotifier = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.insurance = function(e) {
      return this.$http.post("/api/application/insurance", e).success(function(e) {
        analytics.track("/insure-form-sent")
      })
    }, e.prototype.leasingShort = function(e) {
      return this.$http.post("/api/application/leasingShort", e).success(function(t) {
        analytics.trackLeasing(e.phone, e.res.appNumber, e.res.sourceTrackString, e.res.lastSource)
      })
    }, e.prototype.lfl = function(e) {
      return this.$http.post("/api/application/lfl", e).success(function(e) {
        analytics.track("/lfl-form-send")
      })
    }, e
  }();
  e.AppService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.lotStatus = function(e, t) {
      var n = this.$q.defer();
      return this.$http.post(Consts.Urls.api.auction.lotStatus(e, t), null, null).success(function(e) {
        return n.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.lotStatus(): ", e), n.resolve(!1)
      }), n.promise
    }, e.prototype.lotDuration = function(e, t) {
      var n = this.$q.defer();
      return this.$http.post(Consts.Urls.api.auction.lotDuration(e, t), null, null).success(function(e) {
        return n.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.lotDuration(): ", e), n.resolve(!1)
      }), n.promise
    }, e.prototype.bids = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.bids(e), null).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.bids(): ", e), t.resolve(!1)
      }), t.promise
    }, e.prototype.getLotList = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.lotList(e)).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.getLotList(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getLotListAdmin = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.lotListAdmin(e)).success(function(e) {
        return t.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.getLotAdminList(): ", e), t.resolve([])
      }), t.promise
    }, e.prototype.getModelsByBrandId = function(e, t) {
      void 0 === t && (t = !1);
      var n = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.modelsByBrandId(e, t)).success(function(e) {
        return n.resolve(e)
      }).error(function(e) {
        console.error("AuctionService.getModelsByBrandId(): ", e), n.resolve([])
      }), n.promise
    }, e.prototype.getModificationById = function(e) {
      var t = this.$q.defer();
      if (!e) return t.resolve(new Models.Vt.ModificationInfo), t.promise;
      var n = Consts.Urls.api.auction.modification(e),
        i = this.$http.get(n);
      return i.then(function(e) {
        var n = new Models.Vt.ModificationInfo;
        n = e.data, t.resolve(n)
      }).catch(function(e) {
        return t.reject(e)
      }), t.promise
    }, e.prototype.getColors = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.colors).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getLotById = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.lot(e)).success(function(e) {
        return t.resolve(e)
      }), t.promise
    }, e.prototype.getSubscribe = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.subscribe).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getManagers = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.managers).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getLotStatusById = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.getLotStatus(e)).success(function(e) {
        return t.resolve(e)
      }), t.promise
    }, e.prototype.getPhotos = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.auction.getPhotos(e)).success(function(e) {
        return t.resolve(e)
      }), t.promise
    }, e
  }();
  e.AuctionService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e() {}
    return e.prototype.set = function(e, t, n) {
      n = n || {};
      var i = n.expires;
      if ("number" == typeof i && i) {
        var r = new Date;
        r.setTime(r.getTime() + 1e3 * i), i = n.expires = r
      }
      if (i && i.toUTCString && (n.expires = i.toUTCString()), t = encodeURIComponent(t), n.path) {
        var o = window.navigator.userAgent,
          a = o.indexOf("MSIE ");
        if (a) {
          var s = n.path.lastIndexOf("/", n.path.length);
          s > 0 ? n.path = n.path.substring(0, s + 1) : n.path = "/"
        }
      }
      var l = e + "=" + t;
      for (var c in n)
        if (n[c]) {
          l += "; " + c;
          var u = n[c];
          u !== !0 && (l += "=" + u)
        }
      document.cookie = l
    }, e.prototype.get = function(e) {
      var t, n, i, r;
      for (n = document.cookie.split("; "), r = {}, t = n.length - 1; t >= 0; t--) i = n[t].split("="), r[i[0]] = i[1];
      return r[e]
    }, e
  }();
  e.CookieService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.FilterPropVisibilities = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$q = e, this.$http = t
    }
    return e.$inject = ["$q", "$http"], e.prototype.setFormDirty = function(e, t) {
      void 0 === t && (t = !0), AngularHelpers.setFormDirty(e, t)
    }, e.prototype.interactWith = function(e) {
      e = e || {}, e.$setViewValue && e.$setViewValue(e.$viewValue)
    }, e.prototype.setFormPristine = function(e) {
      this.setFormDirty(e, !1)
    }, e.prototype.resetFormState = function(e) {
      if (void 0 !== e)
        for (var t in e) e.hasOwnProperty(t) && e[t] && void 0 != e[t].$dirty && (e[t].$dirty = !1)
    }, e.prototype.getSmsCode = function(e, t, n, i) {
      var r = this;
      i = i || "Phone";
      var o = this.$q.defer();
      if (e[i].$invalid) return this.interactWith(e[i]), o.reject({
        type: "getSmsCode"
      }), o.promise;
      if (!this.isSmsCodeRequestSend) return this.isSmsCodeRequestSend = !0, this.$http.post("/sms/send", {
        phone: t,
        source: n
      }).success(function(e) {
        r.isSmsCodeRequestSend = !1, "ok" == e.result ? o.resolve({
          type: "getSmsCode"
        }) : o.reject({
          type: "getSmsCode",
          errorMessage: e.error.message,
          errorCode: e.error.code
        })
      }).error(function() {
        r.isSmsCodeRequestSend = !1, o.reject({
          type: "getSmsCode",
          errorMessage: "Во время запроса кода подтверждения произошла ошибка"
        })
      }), o.promise
    }, e.prototype.checkPromocode = function(e, t) {
      var n = this,
        i = this.$q.defer();
      return this.$http.post("/api/service/validatepromocode", {
        code: t
      }).success(function(t) {
        if ("error" == t.result) i.reject({
          type: "checkPromocode",
          errorMessage: t.error.message
        });
        else {
          var r = "promocoe" + t.error.code;
          e.Promocode.$setValidity(r, !1), n.interactWith(e.SmsCode), i.resolve({
            type: "checkPromocode"
          })
        }
      }).error(function() {
        e.Promocode.$setValidity("promocode", !1), n.interactWith(e.SmsCode), i.reject({
          type: "checkPromocode",
          errorMessage: "При проверке промо-кода произошла ошибка"
        })
      }), i.promise
    }, e.prototype.getElementForm = function(e) {
      var t, n = e.prop("tagName");
      if ("form" == n || "FORM" == n || "ng-form" == n) t = e;
      else if (null != e.attr("ng-form")) t = e;
      else {
        var i = e.find("form, ng-form, [ng-form]");
        i.length > 0 ? t = i.first() : (i = e.parents("form, ng-form, [ng-form]"), i.length > 0 && (t = i.first()))
      }
      if (t && t.scope) {
        var r = t.scope();
        return r ? r[t.attr("ng-form") || t.attr("name")] : null
      }
    }, e.prototype.setValidity = function(e, t, n, i, r, o) {
      void 0 === r && (r = !1), void 0 === o && (o = null);
      var a = this.getElementForm(e);
      if (a) {
        var s = a[t];
        s && (s.$setValidity(n, i), r && s.$setViewValue(o))
      }
    }, e
  }();
  e.FormService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e) {
      this.notify = e
    }
    return e.$inject = ["notify"], e.prototype.success = function(e) {
      this.notify({
        message: e,
        classes: "alert-success",
        position: "left",
        duration: 5e3
      })
    }, e.prototype.error = function(e) {
      this.notify({
        message: e,
        classes: "alert-danger",
        position: "left",
        duration: 5e3
      })
    }, e.prototype.closeAll = function() {
      this.notify.closeAll()
    }, e
  }();
  e.Notifier = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e) {
      this.$timeout = e
    }
    return e.$inject = ["$timeout"], e.prototype.popupMessage = function(e, t, n) {
      void 0 === t && (t = ""), helpers.modal.alert("<div style='text-align: justify; line-height: 130%;'>" + e + "</div>", t, {}, n)
    }, e.prototype.popupSuccessMessage = function(e, t, n, i) {
      void 0 === i && (i = null);
      var r = 'Благодарим вас за обращение в Европлан!<div style="white-space:nowrap;">Номер вашей заявки: ' + t + '.</div>В ближайшее время с вами свяжется наш менеджер, либо вы можете сами обратиться по телефону: <b style="color: black;">' + n + "</b>.";
      helpers.modal.alert(r, e, {}, i)
    }, e.prototype.popupElement = function(e) {
      helpers.modal.show(e)
    }, e.prototype.bPopupElement = function(e, t) {
      return "string" == typeof e && (e = $(e)), this.$timeout(function() {
        null == t && (t = e.width());
        var n = $(window).width() / 2 - t / 2;
        e.addClass("bPopuped"), e.bPopup({
          position: [n, 100]
        })
      })
    }, e.prototype.bPopupElementVoid = function(e, t) {
      this.bPopupElement(e, t)
    }, e.prototype.bPopupClose = function(e) {
      return "string" == typeof e && (e = $(e)), e.removeClass("bPopuped"), e.bPopup().close()
    }, e.prototype.popupRequestNumber = function(e) {
      helpers.modal.alert("<h2>Благодарим вас за&nbsp;обращение в&nbsp;Европлан!</h2>\n                <p>В ближайшее время с&nbsp;вами свяжется наш&nbsp;менеджер и&nbsp;ответит\n                на&nbsp;все ваши&nbsp;вопросы.</p>\n                <p>Номер вашей заявки: <strong >" + e + "</strong>.</p>", "Заявка отправлена")
    }, e
  }();
  e.PopupService = t
}(Services || (Services = {})), angular.module("dealer.web.app").constant("presets", {
  1: {
    manufactureYearDiff: 15
  },
  2: {
    carType: {
      1: {
        manufactureYearDiff: 9
      },
      2: {
        manufactureYearDiff: 9
      },
      3: {
        manufactureYearDiff: 9
      },
      4: {
        manufactureYearDiff: 12
      },
      5: {
        manufactureYearDiff: 9
      },
      6: {
        manufactureYearDiff: 9
      },
      7: {
        carKind: {
          238: {
            manufactureYearDiff: 5
          },
          244: {
            manufactureYearDiff: 5
          },
          245: {
            manufactureYearDiff: 5
          },
          246: {
            manufactureYearDiff: 5
          },
          254: {
            manufactureYearDiff: 5
          },
          228: {
            manufactureYearDiff: 7
          },
          229: {
            manufactureYearDiff: 7
          },
          1309: {
            manufactureYearDiff: 7
          },
          1316: {
            manufactureYearDiff: 7
          },
          233: {
            manufactureYearDiff: 2
          },
          234: {
            manufactureYearDiff: 2
          },
          235: {
            manufactureYearDiff: 2
          },
          236: {
            manufactureYearDiff: 2
          },
          237: {
            manufactureYearDiff: 2
          },
          242: {
            manufactureYearDiff: 2
          },
          243: {
            manufactureYearDiff: 2
          },
          247: {
            manufactureYearDiff: 2
          },
          248: {
            manufactureYearDiff: 2
          },
          249: {
            manufactureYearDiff: 2
          },
          250: {
            manufactureYearDiff: 2
          },
          251: {
            manufactureYearDiff: 2
          },
          253: {
            manufactureYearDiff: 2
          },
          256: {
            manufactureYearDiff: 2
          },
          1310: {
            manufactureYearDiff: 2
          },
          1311: {
            manufactureYearDiff: 2
          },
          1312: {
            manufactureYearDiff: 2
          }
        }
      }
    }
  },
  3: {
    filterParams: {
      carType: 1,
      isUsed: !1
    }
  },
  4: {
    filterParams: {
      isEuroplanSale: !0
    }
  }
}).constant("carTypePropertyMapping", {
  2: {
    carKindParentPropertyName: "truck",
    carKindPropertyName: "truckType"
  },
  3: {
    carKindParentPropertyName: "bus",
    carKindPropertyName: "busType"
  },
  4: {
    carKindParentPropertyName: "trailer",
    carKindPropertyName: "trailerType"
  },
  5: {
    carKindParentPropertyName: "specialVehicle",
    carKindPropertyName: "specialVehicleType"
  },
  6: {
    carKindParentPropertyName: "commercialCar",
    carKindPropertyName: "commercialCarType"
  },
  7: {
    carKindParentPropertyName: "selfPropelledEquipment",
    carKindPropertyName: "selfPropelledEquipmentType"
  }
}).constant("catalogTabVisibilityPresets", {
  1: {
    carType: {
      new: {
        alwaysVisible: !0
      },
      used: {
        1: {
          manufactureYearDiff: 9
        },
        2: {
          manufactureYearDiff: 9
        },
        3: {
          manufactureYearDiff: 9
        },
        4: {
          manufactureYearDiff: 12
        },
        5: {
          manufactureYearDiff: 9
        },
        6: {
          manufactureYearDiff: 9
        },
        7: {
          carKind: {
            238: {
              manufactureYearDiff: 5
            },
            244: {
              manufactureYearDiff: 5
            },
            245: {
              manufactureYearDiff: 5
            },
            246: {
              manufactureYearDiff: 5
            },
            254: {
              manufactureYearDiff: 5
            },
            228: {
              manufactureYearDiff: 7
            },
            229: {
              manufactureYearDiff: 7
            },
            1309: {
              manufactureYearDiff: 7
            },
            1316: {
              manufactureYearDiff: 7
            },
            233: {
              manufactureYearDiff: 2
            },
            234: {
              manufactureYearDiff: 2
            },
            235: {
              manufactureYearDiff: 2
            },
            236: {
              manufactureYearDiff: 2
            },
            237: {
              manufactureYearDiff: 2
            },
            242: {
              manufactureYearDiff: 2
            },
            243: {
              manufactureYearDiff: 2
            },
            247: {
              manufactureYearDiff: 2
            },
            248: {
              manufactureYearDiff: 2
            },
            249: {
              manufactureYearDiff: 2
            },
            250: {
              manufactureYearDiff: 2
            },
            251: {
              manufactureYearDiff: 2
            },
            253: {
              manufactureYearDiff: 2
            },
            256: {
              manufactureYearDiff: 2
            },
            1310: {
              manufactureYearDiff: 2
            },
            1311: {
              manufactureYearDiff: 2
            },
            1312: {
              manufactureYearDiff: 2
            }
          }
        }
      }
    }
  },
  2: {
    carType: {
      1: {
        alwaysVisible: !0
      },
      2: {
        carKind: [59, 61, 62, 66, 67, 1272]
      },
      5: {
        carKind: [45, 54, 53, 258, 55, 218, 47, 52, 58]
      },
      3: {
        alwaysVisible: !0
      },
      6: {
        carKind: [1263, 1264, 1261, 1262, 1264, 1265, 1267, 1266]
      }
    }
  }
});
var Services;
! function(e) {
  var t = function() {
    function e() {}
    return e.prototype.scrollTo = function(e) {
      var t = $(e).offset().top,
        n = $(".sticky").outerHeight(),
        i = $(".nav-panel.fixed").outerHeight();
      $("html, body").animate({
        scrollTop: t - n - i
      }, 500), $("body").scrollTop()
    }, e
  }();
  e.ScrollService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      this.$http = e, this.$q = t, this.formService = n
    }
    return e.$inject = ["$http", "$q", "formService"], e.prototype.sendSmsCode = function(e, t) {
      var n = this.$q.defer(),
        i = {
          phone: e,
          source: t
        };
      return this.$http.post(Consts.Urls.api.sms.send, i).success(function(e) {
        n.resolve(Enums.SmsSendStatusEnum.Success)
      }).error(function(e) {
        e && e.error && e.error.code && (e.error.code == Enums.SiteErrorEnum.SmsMaxCountExceeded ? n.resolve(Enums.SmsSendStatusEnum.MaxCountExceeded) : n.resolve(Enums.SmsSendStatusEnum.ServerError)), n.reject(Enums.SmsSendStatusEnum.Error)
      }), n.promise
    }, e.prototype.checkSmsCode = function(e, t, n) {
      var i = this.$q.defer(),
        r = {
          phone: e,
          source: t,
          code: n
        };
      return this.$http.post(Consts.Urls.api.sms.check, r).success(function(e) {
        i.resolve(Enums.SmsCheckStatusEnum.Success)
      }).error(function(e) {
        e && e.error && e.error.code ? e.error.code == Enums.SiteErrorEnum.SmsCodeInvalid ? i.resolve(Enums.SmsCheckStatusEnum.Invalid) : i.resolve(Enums.SmsCheckStatusEnum.ServerError) : i.resolve(Enums.SmsCheckStatusEnum.Error)
      }), i.promise
    }, e
  }();
  e.SmsService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      this.$window = e, this.$location = t, this.$pageInterest = n, this._interests = new Array
    }
    return e.$inject = ["$window", "$location", "$pageInterest"], e.prototype.getPageInterest = function() {
      var e = angular.copy(this.$pageInterest || new Models.UserInterests.UserInterestItem, new Models.UserInterests.UserInterestItem);
      return e.pageTitle || (e.pageTitle = this.$window.document.title), e.link || (e.link = this.$location.absUrl()), e
    }, e.prototype.add = function(e) {
      e && this._interests.unshift(e), console.log(JSON.stringify(this._interests))
    }, e.prototype.getInterests = function() {
      var e = new Array;
      return this._interests.length > 0 && e.push(this._interests[0]), e
    }, e
  }();
  e.UserInterestService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.validatePhone = function(e) {
      var t = this,
        n = function(e) {
          return t.$q.resolve({
            success: !0
          })
        },
        i = function(e) {
          return t.$q.reject({
            success: !1,
            description: e.data.error.message
          })
        };
      return this.$http.post(Consts.Urls.api.validation.phoneNumber, {
        phoneNumber: e
      }).then(n, i)
    }, e.prototype.validateInn = function(e) {
      var t = this,
        n = function(e) {
          return t.$q.resolve({
            success: !0
          })
        },
        i = function(e) {
          return t.$q.reject({
            success: !1,
            description: e.data.error.message
          })
        };
      return this.$http.get(Consts.Urls.api.validation.phoneNumber, {
        params: {
          inn: e
        }
      }).then(n, i)
    }, e
  }();
  e.ValidationService = t
}(Services || (Services = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$http = e, this.$q = t
    }
    return e.$inject = ["$http", "$q"], e.prototype.getBrands = function(e) {
      var t = this;
      void 0 === e && (e = null);
      var n = this.$q.defer(),
        i = new Array,
        r = null;
      return r = e instanceof Array ? e : null != e ? [e] : [""], r.forEach(function(e) {
        var n = Consts.Urls.api.vehicleTaxonomy.brands(e);
        i.push(t.$http.get(n))
      }), this.$q.all(i).then(function(e) {
        var t = new Array;
        t = [].concat.apply([], e.map(function(e) {
          return e.data
        })), n.resolve(_.sortBy(t, "name"))
      }).catch(function(e) {
        return n.reject(e)
      }), n.promise
    }, e.prototype.getBrandsBySuperTypeId = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.brandsBySuperTypeId(e)).success(function(e) {
        return t.resolve(e)
      }), t.promise
    }, e.prototype.getModels = function(e, t) {
      var n = this;
      void 0 === t && (t = null);
      var i = this.$q.defer();
      if (!e) return i.resolve(new Array), i.promise;
      var r = new Array,
        o = null;
      return o = t instanceof Array ? t : null != t ? [t] : [""], o.forEach(function(t) {
        var i = Consts.Urls.api.vehicleTaxonomy.models(e, t);
        r.push(n.$http.get(i))
      }), this.$q.all(r).then(function(e) {
        var t = new Array;
        t = [].concat.apply([], e.map(function(e) {
          return e.data
        })), i.resolve(_.sortBy(t, "name"))
      }).catch(function(e) {
        return i.reject(e)
      }), i.promise
    }, e.prototype.getModelsBySuperTypeId = function(e, t) {
      var n = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.modelsBySuperTypeId(e, t)).success(function(e) {
        return n.resolve(e)
      }), n.promise
    }, e.prototype.getModifications = function(e, t) {
      var n = this;
      void 0 === t && (t = null);
      var i = this.$q.defer();
      if (!e) return i.resolve(new Array), i.promise;
      var r = new Array,
        o = null;
      return o = t instanceof Array ? t : null != t ? [t] : [""], o.forEach(function(t) {
        var i = Consts.Urls.api.vehicleTaxonomy.modifications(e, t);
        r.push(n.$http.get(i))
      }), this.$q.all(r).then(function(e) {
        var t = new Array;
        t = [].concat.apply([], e.map(function(e) {
          return e.data
        })), i.resolve(_.sortBy(t, "name"))
      }).catch(function(e) {
        return i.reject(e)
      }), i.promise
    }, e.prototype.getModificationsBySuperTypeId = function(e, t) {
      var n = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.modificationsBySuperTypeId(e, t)).success(function(e) {
        return n.resolve(e)
      }), n.promise
    }, e.prototype.getModificationById = function(e) {
      var t = this.$q.defer();
      if (!e) return t.resolve(new Models.Vt.Modification), t.promise;
      var n = Consts.Urls.api.vehicleTaxonomy.modification(e),
        i = this.$http.get(n);
      return i.then(function(e) {
        var n = new Models.Vt.Modification;
        n = e.data, t.resolve(n)
      }).catch(function(e) {
        return t.reject(e)
      }), t.promise
    }, e.prototype.getOptionsByModificationId = function(e) {
      var t = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.optionsByModificationId(e)).success(function(e) {
        return t.resolve(e)
      }), t.promise
    }, e.prototype.getGenerations = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.generations).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getRestyling = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.restyling).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e.prototype.getVehicleSuperTypes = function() {
      var e = this.$q.defer();
      return this.$http.get(Consts.Urls.api.vehicleTaxonomy.superTypes).success(function(t) {
        return e.resolve(t)
      }), e.promise
    }, e
  }();
  e.VehicleTaxonomyService = t
}(Services || (Services = {}));
var analytics = analytics,
  _gaq = _gaq || [],
  Ya = window.Ya,
  Shared;
! function(e) {
  var t = function() {
    function e() {
      this.disabled = !0
    }
    return e.prototype.enable = function() {
      this.disabled = !1,
        function(e, t, n, i, r, o, a) {
          e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
            (e[r].q = e[r].q || []).push(arguments)
          }, e[r].l = 1 * Date.now(), o = t.createElement(n), a = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, a.parentNode.insertBefore(o, a)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga", void 0, void 0),
        function() {
          var e, t = function(t, n) {
              var i = t.get("sendHitTask"),
                r = function() {
                  function i(e) {
                    var t, n = !1;
                    try {
                      window.XMLHttpRequest && "withCredentials" in (t = new XMLHttpRequest) && (t.open("POST", a(null, null), !0), t.onprogress = function() {}, t.ontimeout = function() {}, t.onerror = function() {}, t.onload = function() {}, t.setRequestHeader("Content-Type", "text/plain"),
                        t.send(e), n = !0)
                    } catch (e) {}
                    return n
                  }

                  function r(t) {
                    var n, i = !1;
                    try {
                      window.XDomainRequest && (n = new e, n.open("POST", a(!1, location.protocol.slice(0, -1))), n.onprogress = function() {}, n.ontimeout = function() {}, n.onerror = function() {}, n.onload = function() {}, setTimeout(function() {
                        n.send(t)
                      }, 0), i = !0)
                    } catch (e) {}
                    return i
                  }

                  function o(e) {
                    var t, n = !1;
                    try {
                      t = document.createElement("img"), t.onload = function() {}, t.src = a(!0, null) + "?" + e, n = !0
                    } catch (e) {}
                    return n
                  }

                  function a(e, n) {
                    var i;
                    return n || (n = "https"), i = n + "://" + s.domain + "/collect", e || (i += "?tid=" + encodeURIComponent(t.get("trackingId"))), i
                  }
                  var s = {
                    domain: n && n.domain ? n.domain : "google-analytics.bi.owox.com",
                    debug: !1
                  };
                  return {
                    send: function(e) {
                      var t;
                      if (!(t = 2036 >= e.length && o(e))) {
                        t = !1;
                        try {
                          t = navigator.sendBeacon && navigator.sendBeacon(a(null, null), e)
                        } catch (e) {}
                      }
                      return t || i(e) || r(e) || o(e)
                    }
                  }
                }();
              t.set("sendHitTask", function(e) {
                var t;
                if (n && 0 < n.sessionIdDimension) try {
                  t = e.get("clientId") + "_" + Date.now(), e.set("dimension" + n.sessionIdDimension, t), e.get("buildHitTask")(e)
                } catch (e) {}
                i(e), r.send(e.get("hitPayload"))
              })
            },
            n = window[window.GoogleAnalyticsObject || "ga"];
          n && n("provide", "OWOXBIStreaming", t)
        }(), ga("create", "UA-11838501-1", "auto"), ga("require", "OWOXBIStreaming", {
          sessionIdDimension: 4
        }), ga("require", "GTM-WJK4RNS"), ga("send", "pageview"), window.ga(function(e) {
          angular.module("dealer.web.app").run(["cookieService", function(t) {
            var n = new Date;
            n.setDate(n.getDate() + 1), t.set("referClientId", e.get("clientId"), {
              expires: n,
              path: "/"
            })
          }])
        }),
        function(e, t, n) {
          (t[n] = t[n] || []).push(function() {
            try {
              t.yaCounter19695820 = new Ya.Metrika({
                id: 19695820,
                webvisor: !0,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                ecommerce: "dataLayer"
              })
            } catch (e) {}
            try {
              t.yaCounter26519937 = new Ya.Metrika({
                id: 26519937,
                webvisor: !0,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                ecommerce: "dataLayer"
              })
            } catch (e) {}
          });
          var i = e.getElementsByTagName("script")[0],
            r = e.createElement("script"),
            o = function() {
              i.parentNode.insertBefore(r, i)
            };
          r.type = "text/javascript", r.async = !0, r.src = ("https:" == e.location.protocol ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js", "[object Opera]" == t.opera ? e.addEventListener("DOMContentLoaded", o, !1) : o()
        }(document, window, "yandex_metrika_callbacks"),
        function(e, t, n, i, r) {
          e[i] = e[i] || [], e[i].push({
            "gtm.start": (new Date).getTime(),
            event: "gtm.js"
          });
          var o = t.getElementsByTagName(n)[0],
            a = t.createElement(n),
            s = "dataLayer" != i ? "&l=" + i : "";
          a.async = !0, a.src = "//www.googletagmanager.com/gtm.js?id=" + r + s, o.parentNode.insertBefore(a, o)
        }(window, document, "script", "dataLayer", "GTM-MQM9MX")
    }, e.prototype.track = function(e) {
      console.log("analytics(" + (this.disabled ? "disabled" : "enabled") + "): " + e), this.disabled || (ga("send", "pageview", e), window.yaCounter19695820 && window.yaCounter19695820.hit(e))
    }, e.prototype.cabinetTrack = function(e) {
      console.log("catalog analytics(" + (this.disabled ? "disabled" : "enabled") + "): " + e), this.disabled || (ga("send", "pageview", e), window.yaCounter26519937 && window.yaCounter26519937.hit(e))
    }, e.prototype.ga = function(e, t, n, i, r, o) {
      console.log("ga(" + (this.disabled ? "disabled" : "enabled") + "): " + e + ", " + t + ", " + n + ", " + i + ", " + r + ", " + o), this.disabled || ga(e, t, n, i, r, o)
    }, e.prototype.dataLayer = function(e) {
      console.log("dataLayer(" + (this.disabled ? "disabled" : "enabled") + "): " + e), this.disabled || window.dataLayer.push({
        event: e
      })
    }, e.prototype.trackLeasing = function(e, t, n, i) {
      void 0 === n && (n = null), void 0 === i && (i = null);
      var r = window.gaCollectorService || new Services.GaCollectorService,
        o = e;
      e && e.length >= 5 && (o = e.substr(e.length - 5));
      var a = t;
      if (t && t.length >= 2) {
        var s = t.substr(0, 2);
        switch (s) {
          case "КК":
            s = "KK";
            break;
          case "ДК":
            s = "DK";
            break;
          case "АК":
            s = "AK";
            break;
          case "КЛ":
            s = "KL";
            break;
          case "ДЛ":
            s = "DL";
            break;
          case "ЛК":
            s = "LK";
            break;
          case "ДЗ":
            s = "DZ";
            break;
          case "КЗ":
            s = "KZ"
        }
        a = s + t.substr(2)
      }
      var l, c, u = k50Tracker.getResultData(),
        d = "";
      u && (u.geo && (l = u.geo.region + "#" + u.geo.city), c = u.uuid, d = u.sid);
      var p = r.getTracking(a, e, l, c);
      console.log("analytics.trackLeasing(" + (this.disabled ? "disabled" : "enabled") + "): " + p + " : " + o + " | " + a), this.disabled || (ga("set", "dimension2", a), ga("set", "dimension3", o), ga("set", "dimension5", c), ga("set", "dimension6", d), ga("send", "pageview", p), ga("set", "dimension7", n), ga("set", "dimension8", i), this.dataLayerPush({
        event: p,
        PhoneTop: o,
        SourceAttr: n,
        Source: i,
        ecommerce: {
          purchase: {
            actionField: {
              id: a,
              goal_id: "4238023",
              coupon: n
            },
            products: [{
              id: "xx" + o,
              name: "Phone_xx" + o,
              variant: i
            }]
          }
        }
      }), window.yaCounter19695820 && window.yaCounter19695820.hit(p))
    }, e.prototype.dataLayerPush = function(e) {
      console.log("dataLayer(" + (this.disabled ? "disabled" : "enabled") + "): " + JSON.stringify(e || {})), this.disabled || (window.dataLayer = window.dataLayer || [], window.dataLayer.push(e))
    }, e
  }();
  e.Analytics = t
}(Shared || (Shared = {})), analytics = new Shared.Analytics, analytics.disabled = !1;
var isAnalyticsEnabled = !(analytics && analytics.disabled);
analytics = new Shared.Analytics, isAnalyticsEnabled && analytics.enable();
var Shared;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.value = e, this.text = t
    }
    return e
  }();
  e.TextValuePair = t
}(Shared || (Shared = {})), angular.module("dealer.web.app").component("advertDeactivate", {
  templateUrl: "/components/advert-deactivate/advert-deactivate.html",
  bindings: {
    advert: "="
  },
  controller: ["$element", "$scope", "$model", "$modal", "advertService", function(e, t, n, i, r) {
    return new Components.AdvertDeactivateController(e, t, n, i, r)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r) {
      this.$element = e, this.$scope = t, this.$modal = i, this.advertService = r
    }
    return e.$inject = ["$element", "$scope", "$model", "$modal", "advertService"], e.prototype.deactivate = function() {
      var e = this;
      this.$modal.open({
        templateUrl: "/direct/auction/template/yesno/yesno.html",
        backdrop: !0,
        windowClass: "modal",
        controller: ["$scope", "$modalInstance", function(t, n) {
          t.newStatus = function() {
            return "Не активен"
          }, t.close = function(t) {
            t && e.advertService.changeAdvertActiveStatus(e.advert.id, !1).then(function(t) {
              e.advert.isActive = t
            }), n.dismiss("cancel")
          }
        }]
      })
    }, e
  }();
  e.AdvertDeactivateController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("advertListAdmin", {
  templateUrl: "/components/advert-list-admin/advert-list-admin.html",
  controller: ["$element", "$scope", "advertService", "scrollService", "apiDataService", "vehicleTaxonomyService", function(e, t, n, i, r, o) {
    return new Components.AdvertListAdminController(e, t, n, i, r, o)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r, o) {
      this.$element = e, this.advertService = n, this.scrollService = i, this.apiDataService = r, this.vehicleTaxonomyService = o, this.data = {
        brands: null,
        cities: null
      }, this.sortBy = [{
        id: 1,
        label: "По дате создания"
      }, {
        id: 2,
        label: "По году выпуска"
      }, {
        id: 3,
        label: "Сначала активные"
      }, {
        id: 4,
        label: "По цене"
      }], this.pagination = {
        pages: new Array,
        showFirstDots: !1,
        showLastDots: !1,
        activePage: 0,
        lastPage: 0
      }, this.filter = new Models.Advert.AdvertListFilter, this.filter.page = 1, this.filter.pageSize = 10, this.filter.sortBy = 1, this.getData(), this.getList(!1)
    }
    return e.$inject = ["$element", "$scope", "advertService", "scrollService", "apiDataService", "vehicleTaxonomyService"], e.prototype.getData = function() {
      var e = this;
      this.apiDataService.getCities().then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все города",
          regionCode: null,
          fullName: null
        }), e.data.cities = t
      }), this.vehicleTaxonomyService.getBrands(Enums.VehicleTypeEnum.PassengerCar).then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все марки"
        }), e.data.brands = t
      })
    }, e.prototype.getList = function(e) {
      var t = this;
      this.advertService.getAdvertListAdmin(this.filter).then(function(n) {
        t.adverts = n.items, t.filter = n.filter, t.updatePages(), e && t.scrollService.scrollTo(t.$element)
      })
    }, e.prototype.goToPage = function(e) {
      this.filter.page = e, this.getList(!0)
    }, e.prototype.search = function() {
      this.filter.page = 1, this.getList(!1)
    }, e.prototype.updatePages = function() {
      var e = 1,
        t = new Array,
        n = this.filter.page,
        i = this.filter.pages,
        r = Math.max(2, n - e),
        o = Math.min(n + e, i - 1);
      n <= 2 && (o = 4);
      var a = i + 1;
      n >= a - 2 && (r = a - 4), r < 2 && (r = 2), o > i - 1 && (o = i - 1);
      for (var s = r; s <= o; s++) t.push(s);
      this.pagination.showFirstDots = t.length > 0 && t[0] > 2, this.pagination.showLastDots = t.length > 0 && t[t.length - 1] < i - 1, this.pagination.activePage = this.filter.page, this.pagination.lastPage = this.filter.pages, this.pagination.pages = t
    }, e
  }();
  e.AdvertListAdminController = t
}(Components || (Components = {}));
var Controllers;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e(e, t, n, i) {
        void 0 === n && (n = Object), void 0 === i && (i = !0), this.$element = e, this.submitter = t, this.TModelClass = n, this.clearOnSubmit = i, this._isSending = !1, this._isSended = !1, this._isSuccessful = !1, this._isDeclined = !1;
        var r = e.injector();
        this.$http = r.get("$http"), this.$q = r.get("$q"), this.$rootScope = r.get("$rootScope"), this.notifier = r.get("notifier"), this._userInterestService = r.get("userInterestService"), this.initModel()
      }
      return e.$inject = ["$element", "submitter", "TModelClass", "clearOnSubmit"], e.prototype.isSending = function() {
        return this._isSending
      }, e.prototype.isSended = function() {
        return this._isSended
      }, e.prototype.isSuccessful = function() {
        return this._isSuccessful
      }, e.prototype.isDeclined = function() {
        return this._isDeclined
      }, e.prototype.errorMessage = function() {
        return this._errorMessage
      }, e.prototype.appNum = function() {
        return this._appNum
      }, e.prototype.submit = function() {
        var e = this,
          t = this.$q.defer();
        return this._isSending ? (t.resolve(), t.promise) : (this._isSending = !0, this.preSend().then(function() {
          return e.submitter.submit(e.getModel()).then(function(t) {
            return e.processSuccess(t)
          }).finally(function() {
            return e._isSending = !1
          })
        }, function(t) {
          var n = new Models.Applications.SubmitServerResult(t);
          return n.status = Enums.AppSubmitStatusEnum.NotSended, e._isSending = !1, n
        }))
      }, e.prototype.clearForm = function() {
        this.initModel(), this.formCtrl.$setPristine()
      }, e.prototype.preSend = function() {
        var e = this.$q.defer();
        return e.resolve(), e.promise
      }, e.prototype.initModel = function() {
        this.model = new this.TModelClass
      }, e.prototype.showError = function(e) {
        this.notifier.error(this._errorMessage || "Ошибка")
      }, e.prototype.getModel = function() {
        return this.model.k50sid = window.k50sid, this.model.k50uuid = window.k50uuid, this.model.interests = this._userInterestService.getInterests(), this.model
      }, e.prototype.processSuccess = function(e) {
        switch (e.status) {
          case Enums.AppSubmitStatusEnum.Success:
            this._appNum = e.appNumber, this._isSuccessful = !0, this._isSended = !0, this.clearOnSubmit && this.clearForm();
            break;
          case Enums.AppSubmitStatusEnum.Decline:
            this._isDeclined = !0, this._isSended = !0, this._errorMessage = e.message;
            break;
          default:
            this._errorMessage = e.message, this.showError(e)
        }
        return e
      }, e
    }();
    e.BaseAppCtrl = t
  }(t = e.Base || (e.Base = {}))
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o, a, s) {
      var l = this;
      e.call(this, t, new Services.AdvertSubmitter(t), Models.Advert.AdvertInfo), this.$element = t, this.apiDataService = r, this.vehicleTaxonomyService = o, this.advertService = a, this.$modal = s, this.clearOnSubmit = !1, this.data = {
        vehicleSuperTypes: null,
        brands: null,
        models: null,
        managers: null,
        managerId: null,
        modifications: null,
        options: null,
        citys: null,
        colors: null,
        years: Array.apply(null, {
          length: 30
        }).map(function(e, t) {
          return (new Date).getFullYear() - t
        })
      };
      var c = new Array,
        u = this.advertService.getManagers().then(function(e) {
          l.data.managers = e
        });
      c.push(u), this.vehicleTaxonomyService.getVehicleSuperTypes().then(function(e) {
        l.data.vehicleSuperTypes = e
      }), this.apiDataService.getCities().then(function(e) {
        l.data.citys = e
      }), this.advertService.getColors().then(function(e) {
        l.data.colors = e
      });
      var d = i && i.advertId;
      if (d) {
        var p = this.advertService.getAdvertInfo(i.advertId).then(function(e) {
          l.model = e
        });
        c.push(p)
      }
      this.$q.all(c).then(function() {
        if (d) {
          var e = l.data.managers.filter(function(e) {
            return e.fullName == l.model.contactName
          })[0];
          e || (e = l.data.managers.filter(function(e) {
            return e.email == l.model.notificationEmail
          })[0]), e && (l.data.managerId = e.id, l.model.contactPhoneNumber = e.phone.toString(), l.model.notificationEmail = e.email)
        } else l.model = new Models.Advert.AdvertInfo, l.model.isOwnerFL = !1
      }), n.$watch(function() {
        return l.model.vehicleSuperTypeId
      }, function(e, t) {
        l.model.vehicleSuperTypeId && l.vehicleTaxonomyService.getBrandsBySuperTypeId(l.model.vehicleSuperTypeId).then(function(e) {
          l.data.brands = e, l.data.brands && 1 == l.data.brands.length && (l.model.vehicleSuperTypeId = l.data.brands[0].id)
        }), t && t != e && (l.data.brands = null, l.model.brandId = null, l.data.models = null, null == l.model.modelId, l.data.modifications = null, null == l.model.modificationId)
      }), n.$watch(function() {
        return l.model.brandId
      }, function(e, t) {
        l.model.brandId && l.vehicleTaxonomyService.getModelsBySuperTypeId(l.model.brandId, l.model.vehicleSuperTypeId).then(function(e) {
          l.data.models = e, l.data.models && 1 == l.data.models.length && (l.model.modelId = l.data.models[0].id), t && null == l.model.modelId
        }).finally(function() {
          l.data.models && l.data.models.some(function(e) {
            return e.id == l.model.modelId
          }) || (l.model.modelId = null)
        }), t && !e && (l.data.models = null, l.model.modelId = null, l.data.modifications = null, l.model.modificationId = null)
      }), n.$watch(function() {
        return l.model.modelId
      }, function(e, t) {
        l.model.modelId && l.vehicleTaxonomyService.getModificationsBySuperTypeId(l.model.modelId, l.model.vehicleSuperTypeId).then(function(e) {
          l.data.modifications = e, l.data.modifications && 1 == l.data.modifications.length && (l.model.modificationId = l.data.modifications[0].id)
        }).finally(function() {
          l.data.modifications && l.data.modifications.some(function(e) {
            return e.id == l.model.modificationId
          }) || (l.model.modificationId = null)
        }), t && null == l.model.modificationId
      }), n.$watch(function() {
        return l.model.modificationId
      }, function(e, t) {
        l.model.modificationId && l.vehicleTaxonomyService.getOptionsByModificationId(l.model.modificationId).then(function(e) {
          l.data.options = e, l.data.options && 1 == l.data.options.length && (l.model.optionId = l.data.options[0].id)
        }).finally(function() {
          l.data.options && l.data.options.some(function(e) {
            return e.id == l.model.optionId
          }) || (l.model.optionId = null)
        })
      }), n.$watch(function() {
        return l.data.managerId
      }, function(e, t) {
        if (e) {
          var n = l.data.managers.filter(function(t) {
            return t.id === e
          })[0];
          n && (l.model.contactName = n.fullName, l.model.contactPhoneNumber = n.phone.toString(), l.model.notificationEmail = n.email)
        }
      }), this.submitter.onSuccess().on(function(e) {
        l.model = e.model
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "$model", "apiDataService", "vehicleTaxonomyService", "advertService", "$modal"], t.prototype.mayMoveLeft = function(e) {
      var t = this.model.imageIds.indexOf(e);
      return t > 0
    }, t.prototype.mayMoveRight = function(e) {
      var t = this.model.imageIds.indexOf(e);
      return t < this.model.imageIds.length - 1
    }, t.prototype.moveLeft = function(e) {
      var t = this.model.imageIds.indexOf(e);
      if (t > 0) {
        var n = this.model.imageIds[t - 1];
        this.model.imageIds[t - 1] = this.model.imageIds[t], this.model.imageIds[t] = n
      }
    }, t.prototype.moveRight = function(e) {
      var t = this.model.imageIds.indexOf(e);
      if (t < this.model.imageIds.length - 1) {
        var n = this.model.imageIds[t + 1];
        this.model.imageIds[t + 1] = this.model.imageIds[t], this.model.imageIds[t] = n
      }
    }, t.prototype.addImage = function(e) {
      this.model.imageIds || (this.model.imageIds = []), this.model.imageIds.push(e.id)
    }, t.prototype.removeImage = function(e) {
      var t = this.model.imageIds.indexOf(e);
      this.model.imageIds.splice(t, 1)
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AdvertEditorController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("advertEditor", {
  templateUrl: "/components/advert-editor/advert-editor.html",
  controller: ["$element", "$scope", "$model", "apiDataService", "vehicleTaxonomyService", "advertService", "$modal", function(e, t, n, i, r, o, a) {
    return new Components.AdvertEditorController(e, t, n, i, r, o, a)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o, a) {
      var s = this;
      e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.apps.leasingShort, function(e) {
        return analytics.trackLeasing(e.model.phone, e.serverResult.appNumber)
      }, Consts.AnalyticTracks.cpa.decline), Models.Applications.CpaRegionModelAppModel), this.$element = t, this.smsService = r, this.apiDataService = o, this.scrollService = a, this.data = {
        activeTab: 1,
        disclaimerText: Consts.DisclaimerText.text,
        brands: null,
        regions: null,
        lflRegionCodes: null,
        smsCode: null
      }, o.getRegions().then(function(e) {
        s.data.regions = e
      }), o.getLflRegionCodes().then(function(e) {
        s.data.lflRegionCodes = e
      }), o.getAllBrands().then(function(e) {
        s.data.brands = e
      }), n.$watch(function() {
        return s.model.regionCode
      }, function() {
        var e = _.any(s.data.lflRegionCodes, function(e) {
            return s.model.regionCode == e
          }),
          t = s.formCtrl.Region;
        t.$setValidity("notfinanced", e), s.model.regionCode && t.$setDirty()
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "ymapsLoader", "smsService", "apiDataService", "scrollService"], t.prototype.showDisclaimerText = function() {
      $("#disclaimer_text").bPopup()
    }, t.prototype.nextStep = function() {
      var e = this;
      this._isSending = !0, this.smsService.sendSmsCode(this.model.phone, "LeasingLandingCpa").then(function(t) {
        t == Enums.SmsSendStatusEnum.Success ? e.data.activeTab = 2 : t == Enums.SmsSendStatusEnum.MaxCountExceeded ? e.notifier.error("Превышено максимальное количество смс") : e.notifier.error("Ошибка отправки смс, попробуйте повторить попытку позднее")
      }).finally(function() {
        e._isSending = !1
      })
    }, t.prototype.sendAnotherSms = function() {
      this.nextStep()
    }, t.prototype.preSend = function() {
      var e = this,
        t = this.$q.defer();
      return this.smsService.checkSmsCode(this.model.phone, "LeasingLandingCpa", this.data.smsCode).then(function(n) {
        n == Enums.SmsCheckStatusEnum.Success ? t.resolve() : (e.notifier.error("Указан неправильный смс код, попробуйте получить смс код еще раз"), t.reject())
      }), t.promise
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AppCpaRegionModelController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("appFeedbackInvestor", {
  templateUrl: "/components/app-feedback-investor/app-feedback-investor.html",
  controller: ["$element", "$scope", function(e, t) {
    return new Components.AppFeedbackInvestorController(e, e)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n) {
      e.call(this, t, new Services.FeedbackInvestorAppSubmitter(t), Models.Applications.FeedbackInvestorAppModel), this.$element = t, this.data = {}, this.initModel()
    }
    return __extends(t, e), t.$inject = ["$element", "$scope"], t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model.acceptTerms = !0
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AppFeedbackInvestorController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("appFuelCard", {
  templateUrl: "/components/app-fuel-card/app-fuel-card.html",
  controller: ["$element", "$scope", "$location", function(e, t, n) {
    return new Components.AppFuelCardController(e, e, n)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i) {
      e.call(this, t, new Services.FuelCardAppSubmitter(t), Models.Applications.FuelCardAppModel), this.$element = t, this.$location = i, this.data = {}, this.initModel()
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "$location"], t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model.acceptTerms = !0, this.data && (this.model.appUrl = this.$location.absUrl())
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AppFuelCardController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("appLfl", {
  templateUrl: "/components/app-lfl/app-lfl.html",
  controller: ["$element", "$scope", "smsService", "ymapsLoader", "apiDataService", "scrollService", function(e, t, n, i, r, o) {
    return new Components.AppLflController(e, t, n, i, r, o)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o, a) {
      var s = this;
      e.call(this, t, new Services.LflAppSubmitter(t), Models.Applications.LflAppModel), this.$element = t, this.smsService = i, this.apiDataService = o, this.scrollService = a, this.page = 1, this.model = {
        acceptTerms: !1
      }, this.getAutoBrand = function(e) {
        return _.find(s.data.brands, function(t) {
          return t.safoId == e
        })
      }, this.getAutoModel = function(e) {
        return _.find(s.data.models, function(t) {
          return t.safoId == e
        })
      }, this.data = {
        regions: null,
        lflregions: null,
        lflRegionCodes: null,
        brands: null,
        models: null,
        advanceValues: null,
        termValues: null,
        smsSource: "landing"
      }, this.initAdvanceValues(20, 49), this.data.termValues = _.range(12, 37).map(function(e) {
        return new Shared.TextValuePair(e, e + " мес.")
      }), this.extraModel = {
        advance: null,
        userRegion: null,
        userCityName: null,
        smsSended: !1,
        smsCode: null,
        jobType: null,
        experience: null,
        birthDate: null
      }, o.getRegions().then(function(e) {
        s.data.regions = e
      }), o.getLflRegionCodes().then(function(e) {
        s.data.lflRegionCodes = e
      }), o.getLflBrands(Enums.CarTypeEnum.PassengerCar).then(function(e) {
        s.data.brands = e
      }), n.$watch(function() {
        return s.model.brandId
      }, function(e, t) {
        if (s.model.brandId) {
          var n = s.getAutoBrand(s.model.brandId);
          s.model.brandName = n.text, s.apiDataService.getLflModels(n.id, Enums.CarTypeEnum.PassengerCar).then(function(e) {
            s.data.models = e, s.data.models && 1 == s.data.models.length && (s.model.modelId = s.data.models[0].safoId)
          }).finally(function() {
            s.data.models && s.data.models.some(function(e) {
              return e.safoId == s.model.modelId
            }) || (s.model.modelId = null, s.model.modelName = null)
          })
        } else s.model.brandName = null
      }), n.$watch(function() {
        return s.model.modelId
      }, function() {
        if (s.model.modelId) {
          var e = s.getAutoModel(s.model.modelId);
          s.model.modelName = e ? e.text : "", s.model.advance = null, s.model.monthPayment = null, s.model.term = null, s.loadAdvanceBounds()
        } else s.model.modelName = null, s.initAdvanceValues(20, 49)
      }), n.$watchCollection(function() {
        return [s.data.regions, s.data.lflRegionCodes]
      }, function() {
        s.data.regions && s.data.lflRegionCodes && (s.data.lflregions = _.map(s.data.regions, function(e) {
          var t = new Models.Api.Data.Region;
          return t.code = e.code, t.name = e.name, _.any(s.data.lflRegionCodes, function(t) {
            return t == e.code
          }) || (t.name = e.name + "  (не финансируется)"), t
        }))
      }), n.$watch(function() {
        return s.model.regionCode
      }, function() {
        var e = _.any(s.data.lflRegionCodes, function(e) {
            return s.model.regionCode == e
          }),
          t = s.formCtrl.Region;
        t.$setValidity("notfinanced", e), s.extraModel.userRegion && t.$setDirty()
      }), n.$watch(function() {
        return s.extraModel.jobType
      }, function() {
        var e = !s.extraModel.jobType || "HiredEmployee" == s.extraModel.jobType || "Businessman" == s.extraModel.jobType,
          t = s.formCtrl.JobType;
        t.$setValidity("notworking", e), s.extraModel.jobType && t.$setDirty()
      }), n.$watch(function() {
        return s.extraModel.experience
      }, function() {
        var e = "lt3Month" != s.extraModel.experience,
          t = s.formCtrl.Experience;
        t.$setValidity("lt3month", e), s.extraModel.experience && t.$setDirty()
      }), n.$watch(function() {
        return s.model.birthDate
      }, function() {}), n.$watch(function() {
        return s.extraModel.smsCode
      }, function() {
        s.formCtrl.smsCode.$setValidity("smsCodeInvalid", !0), s.formCtrl.smsCode.$setValidity("smsCodeError", !0)
      }), this.submitter.onSuccess().on(function() {
        return s.scrollService.scrollTo(s.$element)
      }), this.submitter.onError().on(function() {
        return s.scrollService.scrollTo(s.$element)
      }), this.submitter.onDecline().on(function() {
        return s.scrollService.scrollTo(s.$element)
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "smsService", "ymapsLoader", "apiDataService", "scrollService"], t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model && (this.model.applicationKind = "LeasingIndividualAvito", this.model.isUsed = !1, this.model.term = 36, this.model.advance = 20), this.extraModel && (this.extraModel.advance = null, this.extraModel.smsCode = null, this.extraModel.jobType = null, this.extraModel.experience = null)
    }, t.prototype.preSend = function() {
      var e = this,
        t = this.$q.defer();
      return this.smsService.checkSmsCode(this.model.phone, "ЛФЛ", this.extraModel.smsCode).then(function(n) {
        switch (n) {
          case Enums.SmsCheckStatusEnum.Success:
            t.resolve();
            break;
          case Enums.SmsCheckStatusEnum.Invalid:
            var i = e.formCtrl.smsCode;
            i.$setValidity("smsCodeInvalid", !1), t.reject();
            break;
          default:
            var i = e.formCtrl.smsCode;
            i.$setValidity("smsCodeError", !1), t.reject()
        }
      }), t.promise
    }, t.prototype.initAdvanceValues = function(e, t) {
      t < e && (t = 49), this.data.advanceValues = _.map(_.range(e, t + 1), function(e) {
        return new Shared.TextValuePair(e, e + "%")
      }), (this.model.advance < e || !this.model.advance) && (this.model.advance = null), this.model.advance > t + 1 && (this.model.advance = t + 1)
    }, t.prototype.loadAdvanceBounds = function() {
      var e = this;
      if (this.model.brandId && this.model.modelId) {
        var t = {
          brandSafoId: this.model.brandId,
          modelSafoId: this.model.modelId,
          initialFee: this.model.advance || 0,
          term: this.model.term || 0,
          cityName: this.extraModel.userCityName
        };
        this.$http.post(Consts.Urls.lfl.calc, t).success(function(t) {
          t.success ? e.initAdvanceValues(t.data.AdvanceMin, t.data.AdvanceMax) : e.initAdvanceValues(20, 49)
        }).error(function() {
          return e.initAdvanceValues(20, 49)
        })
      }
    }, t.prototype.goToPage = function(e) {
      this.page = e, this.scrollService.scrollTo(this.$element)
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AppLflController = t
}(Components || (Components = {}));
var Services;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      this.$element = e, this.submitUrl = t, this.onSuccessTrack = n, this.onDeclineTrack = i, this._onSuccess = new Models.LiteEvent, this._onDecline = new Models.LiteEvent, this._onError = new Models.LiteEvent;
      var r = e.injector();
      this.$http = r.get("$http"), this.$q = r.get("$q"), this.$rootScope = r.get("$rootScope"), null != n && ("string" == typeof n ? this._onSuccess.on(function(e) {
        e.serverResult && e.serverResult.pushRequired === !1 || (analytics.track(n), analytics.dataLayer(n))
      }) : "function" == typeof n && this._onSuccess.on(n)), null != i && ("string" == typeof i ? this._onDecline.on(function(e) {
        e.serverResult && e.serverResult.pushRequired === !1 || (analytics.track(i), analytics.dataLayer(i))
      }) : "function" == typeof n && this._onDecline.on(i))
    }
    return e.prototype.onSuccess = function() {
      return this._onSuccess
    }, e.prototype.onDecline = function() {
      return this._onDecline
    }, e.prototype.onError = function() {
      return this._onError
    }, e.prototype.submit = function(e) {
      var t = this,
        n = this.$q.defer();
      return this.$http.post(this.submitUrl, e).success(function(i) {
        var r = t.getSubmitResult(i),
          o = new Models.SubmitResult(e, r);
        t._onSuccess.trigger(o), t.$rootScope.$broadcast(Enums.AppRequestEventNames.ApplicationSuccess, o), n.resolve(r)
      }).error(function(i) {
        var r = t.getErrorResult(i),
          o = new Models.SubmitResult(e, r);
        r.status == Enums.AppSubmitStatusEnum.Decline ? (t._onDecline.trigger(o), t.$rootScope.$broadcast(Enums.AppRequestEventNames.ApplicationDeclined, o)) : (t._onError.trigger(o), t.$rootScope.$broadcast(Enums.AppRequestEventNames.ApplicationDeclined, o)), n.resolve(r)
      }), n.promise
    }, e.prototype.getSubmitResult = function(e) {
      var t = new Models.Applications.SubmitServerResult(e);
      return t.status = Enums.AppSubmitStatusEnum.Success, e.appNumber ? t.appNumber = e.appNumber : t.appNumber = e, e.sourceTrackString && (t.sourceTrackString = e.sourceTrackString), e.lastSource && (t.lastSource = e.lastSource), e.pushRequired === !1 ? t.pushRequired = !1 : t.pushRequired = !0, t
    }, e.prototype.getErrorResult = function(e) {
      var t = new Models.Applications.SubmitServerResult(e);
      return e.error && e.error.code && e.error.code == Enums.SiteErrorEnum.Declined ? (t.status = Enums.AppSubmitStatusEnum.Decline, t.message = e.error.message) : e.error && e.error.code ? (t.status = Enums.AppSubmitStatusEnum.Validation, t.errorCode = e.error.code, t.message = e.error.message) : t.status = Enums.AppSubmitStatusEnum.Fatal, t
    }, e
  }();
  e.AppBaseSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.api.auction.save)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.LotSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o, a, s) {
      var l = this;
      e.call(this, t, new Services.LotSubmitter(t), Models.Auction.EditLotVm), this.$element = t, this.apiDataService = r, this.vehicleTaxonomyService = o, this.auctionService = a, this.$modal = s, this.data = {
        vehicleSuperTypes: null,
        brands: null,
        models: null,
        modifications: null,
        citys: null,
        colors: null,
        managers: null,
        generations: null,
        restyling: null,
        statusLot: 0,
        durations: [],
        years: Array.apply(null, {
          length: 30
        }).map(function(e, t) {
          return (new Date).getFullYear() - t
        })
      }, i && i.lot ? this.model = i.lot : (this.model = new Models.Auction.EditLotVm, this.model.isPassportOriginal = !0, this.model.isOwnerLegal = !0), this.data.durations.push(24), this.data.durations.push(72), this.data.durations.push(168), this.vehicleTaxonomyService.getVehicleSuperTypes().then(function(e) {
        l.data.vehicleSuperTypes = e
      }), this.auctionService.getManagers().then(function(e) {
        l.data.managers = e, l.initManagers()
      }), this.vehicleTaxonomyService.getGenerations().then(function(e) {
        l.data.generations = e
      }), this.vehicleTaxonomyService.getRestyling().then(function(e) {
        l.data.restyling = e
      }), this.apiDataService.getCities().then(function(e) {
        l.data.citys = e
      }), this.auctionService.getColors().then(function(e) {
        l.data.colors = e
      }), this.model.lotId && this.auctionService.getLotStatusById(this.model.lotId).then(function(e) {
        l.data.statusLot = e
      }), n.$watchCollection(function() {
        return [l.isLotActive, l.model.duration]
      }, function(e, t) {
        var n = new Date;
        n.setHours(n.getHours() + (l.model.duration || 0)), l.lotExpiration = n.toLocaleString()
      }), n.$watch(function() {
        return l.model.vehicleSuperTypeId
      }, function(e, t) {
        l.model.vehicleSuperTypeId && l.vehicleTaxonomyService.getBrandsBySuperTypeId(l.model.vehicleSuperTypeId).then(function(e) {
          l.data.brands = e, l.data.brands && 1 == l.data.brands.length && (l.model.vehicleSuperTypeId = l.data.brands[0].id)
        }), t && t != e && (l.data.brands = null, l.model.brandId = null, l.data.models = null, null == l.model.modelId, l.data.modifications = null, null == l.model.mdfId)
      }), n.$watch(function() {
        return l.model.brandId
      }, function(e, t) {
        l.model.brandId && l.vehicleTaxonomyService.getModelsBySuperTypeId(l.model.brandId, l.model.vehicleSuperTypeId).then(function(e) {
          l.data.models = e, l.data.models && 1 == l.data.models.length && (l.model.modelId = l.data.models[0].id), t && null == l.model.modelId
        }).finally(function() {
          l.data.models && l.data.models.some(function(e) {
            return e.id == l.model.modelId
          }) || (l.model.modelId = null)
        }), t && !e && (l.data.models = null, l.model.modelId = null, l.data.modifications = null, l.model.mdfId = null)
      }), n.$watch(function() {
        return l.model.managerId
      }, function(e, t) {
        l.initManagers()
      }), n.$watch(function() {
        return l.model.mdfId
      }, function(e, t) {
        l.auctionService.getModificationById(l.model.mdfId).then(function(e) {
          var t = "Нет информации...";
          l.model.bodyType = e.bodyType || t, l.model.doorsCount = e.doorsCount || t, l.model.engineType = e.engineType || t, l.model.engineVolume = e.engineVolume || t, l.model.engineHorsePower = e.engineHorsePower || t
        })
      }), n.$watch(function() {
        return l.model.modelId
      }, function(e, t) {
        l.model.modelId && l.vehicleTaxonomyService.getModificationsBySuperTypeId(l.model.modelId, l.model.vehicleSuperTypeId).then(function(e) {
          l.data.modifications = e, l.data.modifications && 1 == l.data.modifications.length && (l.model.mdfId = l.data.modifications[0].id)
        }).finally(function() {
          l.data.modifications && l.data.modifications.some(function(e) {
            return e.id == l.model.mdfId
          }) || (l.model.mdfId = null)
        }), t && null == l.model.mdfId
      }), this.submitter.onSuccess().on(function(e) {
        l.isLotActive ? l.auctionService.lotStatus(e.serverResult.response.id, 1).then(function(e) {
          window.location.pathname = Consts.Urls.auction.lotList
        }) : window.location.pathname = Consts.Urls.auction.lotList
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "$model", "apiDataService", "vehicleTaxonomyService", "auctionService", "$modal"], t.prototype.initManagers = function() {
      var e = this;
      this.data.managers && this.data.managers.length > 0 && this.model.managerId && (this.model.managerPhone = this.data.managers.filter(function(t) {
        return t.id == e.model.managerId;
      })[0].phone)
    }, t.prototype.isUneditable = function() {
      var e = this.data.statusLot;
      return 3 == e
    }, t.prototype.getVehicleSuperTypeName = function() {
      var e = this;
      if (this.data && this.data.vehicleSuperTypes) {
        var t = this.data.vehicleSuperTypes.filter(function(t) {
          return t.id == e.model.vehicleSuperTypeId
        });
        if (t.length > 0) return t[0].name
      }
      return null
    }, t.prototype.getStatusName = function() {
      var e = this.data.statusLot;
      return 0 == e ? "Создан" : 1 == e ? "Активен" : 2 == e ? "Приостановлен" : 3 == e ? "Завершён" : void 0
    }, t.prototype.addImage = function(e) {
      this.model.storagedFileIds || (this.model.storagedFileIds = []), this.model.storagedFileIds.push(e.id)
    }, t.prototype.removeImage = function(e) {
      var t = this.model.storagedFileIds.indexOf(e);
      this.model.storagedFileIds.splice(t, 1)
    }, t.prototype.mayMoveLeft = function(e) {
      var t = this.model.storagedFileIds.indexOf(e);
      return t > 0
    }, t.prototype.mayMoveRight = function(e) {
      var t = this.model.storagedFileIds.indexOf(e);
      return t < this.model.storagedFileIds.length - 1
    }, t.prototype.moveLeft = function(e) {
      var t = this.model.storagedFileIds.indexOf(e);
      if (t > 0) {
        var n = this.model.storagedFileIds[t - 1];
        this.model.storagedFileIds[t - 1] = this.model.storagedFileIds[t], this.model.storagedFileIds[t] = n
      }
    }, t.prototype.moveRight = function(e) {
      var t = this.model.storagedFileIds.indexOf(e);
      if (t < this.model.storagedFileIds.length - 1) {
        var n = this.model.storagedFileIds[t + 1];
        this.model.storagedFileIds[t + 1] = this.model.storagedFileIds[t], this.model.storagedFileIds[t] = n
      }
    }, t.prototype.getBrandName = function() {
      var e = this;
      return this.model.brandId && this.data.brands ? this.data.brands.filter(function(t) {
        return t.id == e.model.brandId
      })[0].name : ""
    }, t.prototype.getModelName = function() {
      var e = this;
      return this.model.modelId && this.data.models ? this.data.models.filter(function(t) {
        return t.id == e.model.modelId
      })[0].name : ""
    }, t.prototype.getMdfName = function() {
      var e = this;
      return this.model.mdfId && this.data.modifications ? this.data.modifications.filter(function(t) {
        return t.id == e.model.mdfId
      })[0].name : ""
    }, t.prototype.afterSend = function() {}, t.prototype.preSend = function() {
      var e = this,
        t = this.$q.defer();
      if (0 == this.data.statusLot) t.resolve();
      else if (this.data.statusLot > 0) {
        var n = {
            title: "Лот размещён! Сохранить изменения и сделать рассылку?",
            preMessage: "Обращаем Ваше внимание, в лоте произошли изменения.",
            preMessageOnNullMessage: "Обращаем Ваше внимание, в лоте произошли изменения, а именно: ",
            message: ""
          },
          i = this.$modal.open({
            templateUrl: "/direct/auction/lot/template/editLotAccept/editLotAccept.html",
            backdrop: !0,
            controller: ["$scope", "$modalInstance", function(e, t) {
              e.data = n, e.ok = function() {
                t.close(e.data)
              }, e.cancel = function() {
                t.dismiss("cancel")
              }
            }]
          });
        i.result.then(function(n) {
          e.model.message = n.message, t.resolve()
        }), this._isSending = !1
      }
      return t.promise
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AuctionEditorController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("auctionEditor", {
  templateUrl: "/components/auction-editor/auction-editor.html",
  controller: ["$element", "$scope", "$model", "apiDataService", "vehicleTaxonomyService", "auctionService", "$modal", function(e, t, n, i, r, o, a) {
    return new Components.AuctionEditorController(e, t, n, i, r, o, a)
  }]
}), angular.module("dealer.web.app").component("auctionList", {
  templateUrl: "/components/auction-list/auction-list.html",
  controller: ["$element", "$scope", "$interval", "auctionService", "scrollService", "apiDataService", "vehicleTaxonomyService", function(e, t, n, i, r, o, a) {
    return new Components.AuctionListController(e, t, n, i, r, o, a)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r, o, a) {
      var s = this;
      this.$element = e, this.$interval = n, this.auctionService = i, this.scrollService = r, this.apiDataService = o, this.vehicleTaxonomyService = a, this.data = {
        brands: null,
        models: null,
        cities: null,
        managers: null,
        yearList: new Array,
        orderList: [{
          id: null,
          label: "Сортировать по дате обновления"
        }, {
          id: 1,
          label: "Сортировать по марке (А-Я)"
        }, {
          id: 2,
          label: "Сортировать по модели (А-Я)"
        }, {
          id: 3,
          label: "Сортировать по наличию ставки"
        }, {
          id: 4,
          label: "Сортировать по статусу активен"
        }, {
          id: 5,
          label: "Сортировать по статусу завершен"
        }],
        statusList: [{
          id: null,
          label: "Все статусы"
        }, {
          id: 0,
          label: "Создан"
        }, {
          id: 1,
          label: "Активен"
        }, {
          id: 2,
          label: "Приостановлен"
        }, {
          id: 3,
          label: "Завершён"
        }],
        statusListCustomer: [{
          id: null,
          label: "Все статусы"
        }, {
          id: 1,
          label: "Активен"
        }, {
          id: 3,
          label: "Завершён"
        }]
      }, this.pagination = {
        pages: new Array,
        showFirstDots: !1,
        showLastDots: !1,
        activePage: 0,
        lastPage: 0
      }, this.filter = new Models.Auction.LotListFilter, this.filter.page = 1, this.filter.pageSize = 10, this.getData(), this.getList(!1), this.data.yearList = [], this.data.yearList.push({
        id: null,
        name: "Все года"
      });
      for (var l = 2e3; l <= Math.max((new Date).getFullYear(), 2001); l++) this.data.yearList.push({
        id: l,
        name: l.toString()
      });
      this.lotCount = 0, t.$watchCollection(function() {
        return [s.filter.brand, s.filter.model, s.filter.year, s.filter.city, s.filter.status, s.filter.lotId]
      }, function() {
        return s.getCount()
      }), t.$watch(function() {
        return s.filter.brand
      }, function(e, t) {
        e != t && s.getModels()
      });
      var c = this,
        u = function() {
          c.lots && c.lots.forEach(function(e) {
            if (e.status) {
              if (3 == e.status) return void(e.timeLeft = "Продолжительность " + e.exposition + " ч.");
              var t = new Date(e.expiration);
              if (!(t.getFullYear() <= 2e3)) {
                var n = new Date;
                if (t > n) {
                  var i = t.valueOf() - n.valueOf(),
                    r = Math.floor(i / 1e3),
                    o = r % 60;
                  r = Math.floor(r / 60);
                  var a = r % 60;
                  r = Math.floor(r / 60);
                  var s = r % 24;
                  r = Math.floor(r / 24);
                  var l = r;
                  e.timeLeft = "До завершения лота осталось ", l && (e.timeLeft += l + " д. "), (l || s) && (e.timeLeft += s + " ч. "), (l || s || a) && (e.timeLeft += a + " мин. "), l || s || a || (e.timeLeft += o + " сек.", $("#expiration" + e.id).fadeToggle(500))
                } else e.timeLeft = "", e.status = 3, $("#expiration" + e.id).fadeIn()
              }
            }
          })
        };
      this.$interval(u, 1e3), t.$watch(function() {
        return s.lots
      }, function(e, t) {
        u()
      })
    }
    return e.$inject = ["$element", "$scope", "$interval", "auctionService", "scrollService", "apiDataService", "vehicleTaxonomyService"], e.prototype.goToPage = function(e) {
      this.filter.page = e, this.getList(!0)
    }, e.prototype.getCount = function() {
      var e = this;
      this.auctionService.getLotList(this.filter).then(function(t) {
        e.lotCount = t.filter.total
      })
    }, e.prototype.search = function() {
      this.filter.page = 1, this.getList(!1)
    }, e.prototype.sortBy = function() {
      this.filter.page = 1, this.getList(!0)
    }, e.prototype.getData = function() {
      var e = this;
      this.apiDataService.getCities().then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все города",
          regionCode: null,
          fullName: null
        }), e.data.cities = t, e.filterCities()
      }), this.vehicleTaxonomyService.getBrands(Enums.VehicleTypeEnum.PassengerCar).then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все марки"
        }), e.data.brands = t, e.filterBrands()
      })
    }, e.prototype.getModels = function() {
      var e = this;
      this.auctionService.getModelsByBrandId(this.filter.brand).then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все модели"
        }), e.data.models = t
      })
    }, e.prototype.filterBrands = function() {
      var e = this;
      this.filter && this.filter.brands && this.filter.brands.length && this.data.brands && (this.data.brands = this.data.brands.filter(function(t) {
        return null == t.id || e.filter.brands.indexOf(t.id) >= 0
      }))
    }, e.prototype.filterCities = function() {
      var e = this;
      this.filter && this.filter.cities && this.filter.cities.length && this.data.cities && (this.data.cities = this.data.cities.filter(function(t) {
        return null == t.id || e.filter.cities.indexOf(t.id) >= 0
      }))
    }, e.prototype.getList = function(e) {
      var t = this;
      this.auctionService.getLotList(this.filter).then(function(n) {
        t.lots = n.items, t.filter = n.filter, t.filterCities(), t.filterBrands(), t.updatePages(), e && t.scrollService.scrollTo(t.$element)
      })
    }, e.prototype.updatePages = function() {
      var e = 1,
        t = new Array,
        n = this.filter.page,
        i = this.filter.pages,
        r = Math.max(2, n - e),
        o = Math.min(n + e, i - 1);
      n <= 2 && (o = 4);
      var a = i + 1;
      n >= a - 2 && (r = a - 4), r < 2 && (r = 2), o > i - 1 && (o = i - 1);
      for (var s = r; s <= o; s++) t.push(s);
      this.pagination.showFirstDots = t.length > 0 && t[0] > 2, this.pagination.showLastDots = t.length > 0 && t[t.length - 1] < i - 1, this.pagination.activePage = this.filter.page, this.pagination.lastPage = this.filter.pages, this.pagination.pages = t
    }, e.prototype.toggleBids = function(e, t) {
      void 0 == e.showBids && (e.showBids = !1), void 0 == e.bids && (e.bids = null), null == e.bids ? this.auctionService.bids(e.id).then(function(t) {
        e.bids = t, $("#bids" + e.id).fadeIn()
      }) : $("#bids" + e.id).fadeToggle()
    }, e
  }();
  e.AuctionListController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("auctionListAdmin", {
  templateUrl: "/components/auction-list-admin/auction-list-admin.html",
  controller: ["$element", "$scope", "$interval", "auctionService", "scrollService", "apiDataService", "vehicleTaxonomyService", function(e, t, n, i, r, o, a) {
    return new Components.AuctionListAdminController(e, t, n, i, r, o, a)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r, o, a) {
      var s = this;
      this.$element = e, this.$interval = n, this.auctionService = i, this.scrollService = r, this.apiDataService = o, this.vehicleTaxonomyService = a, this.data = {
        brands: null,
        models: null,
        cities: null,
        managers: null,
        yearList: new Array,
        orderList: [{
          id: null,
          label: "Сортировать по дате обновления"
        }, {
          id: 1,
          label: "Сортировать по марке (А-Я)"
        }, {
          id: 2,
          label: "Сортировать по модели (А-Я)"
        }, {
          id: 3,
          label: "Сортировать по наличию ставки"
        }, {
          id: 4,
          label: "Сортировать по статусу активен"
        }, {
          id: 5,
          label: "Сортировать по статусу завершен"
        }],
        statusList: [{
          id: null,
          label: "Все статусы"
        }, {
          id: 0,
          label: "Создан"
        }, {
          id: 1,
          label: "Активен"
        }, {
          id: 2,
          label: "Приостановлен"
        }, {
          id: 3,
          label: "Завершён"
        }]
      }, this.pagination = {
        pages: new Array,
        showFirstDots: !1,
        showLastDots: !1,
        activePage: 0,
        lastPage: 0
      }, this.filter = new Models.Auction.LotListFilter, this.filter.page = 1, this.filter.pageSize = 10, this.getData(), this.getList(!1), this.data.yearList = [], this.data.yearList.push({
        id: null,
        name: "Все года"
      });
      for (var l = 2e3; l <= Math.max((new Date).getFullYear(), 2001); l++) this.data.yearList.push({
        id: l,
        name: l.toString()
      });
      this.lotCount = 0, t.$watchCollection(function() {
        return [s.filter.brand, s.filter.model, s.filter.year, s.filter.city, s.filter.status, s.filter.lotId, s.filter.suzId, s.filter.manager]
      }, function() {
        return s.getCount()
      }), t.$watch(function() {
        return s.filter.brand
      }, function(e, t) {
        e != t && s.getModels()
      });
      var c = this,
        u = function() {
          c.lots && c.lots.forEach(function(e) {
            if (e.status) {
              if (3 == e.status) return void(e.timeLeft = "Продолжительность " + e.exposition + " ч.");
              var t = new Date(e.expiration);
              if (!(t.getFullYear() <= 2e3)) {
                var n = new Date;
                if (t > n) {
                  var i = t.valueOf() - n.valueOf(),
                    r = Math.floor(i / 1e3),
                    o = r % 60;
                  r = Math.floor(r / 60);
                  var a = r % 60;
                  r = Math.floor(r / 60);
                  var s = r % 24;
                  r = Math.floor(r / 24);
                  var l = r;
                  e.timeLeft = "До завершения лота осталось ", l && (e.timeLeft += l + " д. "), (l || s) && (e.timeLeft += s + " ч. "), (l || s || a) && (e.timeLeft += a + " мин. "), l || s || a || (e.timeLeft += o + " сек.", $("#expiration" + e.id).fadeToggle(500))
                } else e.timeLeft = "Завершите сбор котировок", $("#expiration" + e.id).fadeIn()
              }
            }
          })
        };
      this.$interval(u, 1e3), t.$watch(function() {
        return s.lots
      }, function(e, t) {
        u()
      })
    }
    return e.$inject = ["$element", "$scope", "$interval", "auctionService", "scrollService", "apiDataService", "vehicleTaxonomyService"], e.prototype.goToPage = function(e) {
      this.filter.page = e, this.getList(!0)
    }, e.prototype.getCount = function() {
      var e = this;
      this.auctionService.getLotListAdmin(this.filter).then(function(t) {
        e.lotCount = t.filter.total
      })
    }, e.prototype.search = function() {
      this.filter.page = 1, this.getList(!1)
    }, e.prototype.getData = function() {
      var e = this;
      this.apiDataService.getCities().then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все города",
          regionCode: null,
          fullName: null
        }), e.data.cities = t, e.filterCities()
      }), this.vehicleTaxonomyService.getBrands(Enums.VehicleTypeEnum.PassengerCar).then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все марки"
        }), e.data.brands = t, e.filterBrands()
      }), this.auctionService.getManagers().then(function(t) {
        t.splice(0, 0, {
          id: null,
          fullName: "Все менеджеры",
          name: null,
          phone: null,
          email: null
        }), e.data.managers = t
      })
    }, e.prototype.getModels = function() {
      var e = this;
      this.auctionService.getModelsByBrandId(this.filter.brand, !0).then(function(t) {
        t.splice(0, 0, {
          id: null,
          name: "Все модели"
        }), e.data.models = t
      })
    }, e.prototype.filterBrands = function() {
      var e = this;
      this.filter && this.filter.brands && this.filter.brands.length && this.data.brands && (this.data.brands = this.data.brands.filter(function(t) {
        return null == t.id || e.filter.brands.indexOf(t.id) >= 0
      }))
    }, e.prototype.filterCities = function() {
      var e = this;
      this.filter && this.filter.cities && this.filter.cities.length && this.data.cities && (this.data.cities = this.data.cities.filter(function(t) {
        return null == t.id || e.filter.cities.indexOf(t.id) >= 0
      }))
    }, e.prototype.getList = function(e) {
      var t = this;
      return this.auctionService.getLotListAdmin(this.filter).then(function(n) {
        t.lots = n.items, t.filter = n.filter, t.filterBrands(), t.filterCities(), t.updatePages(), e && t.scrollService.scrollTo(t.$element)
      })
    }, e.prototype.updatePages = function() {
      var e = 1,
        t = new Array,
        n = this.filter.page,
        i = this.filter.pages,
        r = Math.max(2, n - e),
        o = Math.min(n + e, i - 1);
      n <= 2 && (o = 4);
      var a = i + 1;
      n >= a - 2 && (r = a - 4), r < 2 && (r = 2), o > i - 1 && (o = i - 1);
      for (var s = r; s <= o; s++) t.push(s);
      this.pagination.showFirstDots = t.length > 0 && t[0] > 2, this.pagination.showLastDots = t.length > 0 && t[t.length - 1] < i - 1, this.pagination.activePage = this.filter.page, this.pagination.lastPage = this.filter.pages, this.pagination.pages = t
    }, e.prototype.updateBids = function(e, t) {
      this.auctionService.bids(e.id).then(function(t) {
        e.bids = t, $("#bids" + e.id).fadeOut(), $("#bids" + e.id).fadeIn()
      })
    }, e.prototype.toggleBids = function(e, t) {
      void 0 == e.showBids && (e.showBids = !1), void 0 == e.bids && (e.bids = null), null == e.bids ? this.auctionService.bids(e.id).then(function(t) {
        e.bids = t, $("#bids" + e.id).fadeIn()
      }) : $("#bids" + e.id).fadeToggle()
    }, e.prototype.isEditable = function(e) {
      var t = this.lots.filter(function(t) {
        return t.id == e
      })[0].status;
      return 3 !== t
    }, e
  }();
  e.AuctionListAdminController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("auctionLot", {
  templateUrl: "/components/auction-lot/auction-lot.html",
  controller: ["$element", "$scope", "$interval", "auctionService", "$timeout", function(e, t, n, i, r) {
    return new Components.AuctionLotController(e, t, n, i, r)
  }],
  bindings: {
    lotId: "<",
    role: "<"
  }
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o) {
      e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.auction.bid), Models.Auction.BidVm), this.$element = t, this.$interval = i, this.auctionService = r, this.$timeout = o, this.data = {
        lot: null,
        bid: null,
        storagedFileIds: null,
        statusLot: null,
        linkToLotList: null,
        timeLeft: "",
        expiration: null
      }
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "$interval", "auctionService", "$timeout"], t.prototype.getStatusName = function() {
      var e = this.data.statusLot;
      return 0 == e ? "Создан" : 1 == e ? "Активен" : 2 == e ? "Приостановлен" : 3 == e ? "Завершён" : void 0
    }, t.prototype.getReasonDecline = function() {
      var e = this.data.statusLot;
      return 0 == e ? "не активен" : 1 == e ? "активен" : 2 == e ? "приостановлен" : 3 == e ? "завершён" : void 0
    }, t.prototype.getRestyling = function() {
      return this.data.lot && this.data.lot.restyling ? "Рестайлинг: " + this.data.lot.restyling : ""
    }, t.prototype.isInactive = function() {
      var e = this.data.statusLot;
      return 0 == e || 2 == e || 3 == e
    }, t.prototype.$onInit = function() {
      var e = this;
      this.initModel(), "admin" == this.role ? this.data.linkToLotList = "/direct/auction/lots" : this.data.linkToLotList = "/direct/lots", this.auctionService.getPhotos(this.lotId).then(function(t) {
        e.data.storagedFileIds = t, e.$timeout(function() {
          console && console.log("#carousel img: " + $("#carousel img").length), $(".card-img").fotorama()
        })
      }), this.auctionService.getLotStatusById(this.lotId).then(function(t) {
        e.data.statusLot = t
      }), this.submitter.onSuccess().on(function(t) {
        e.data.lot.actualBidPrice = t.model.price.toString(), e.data.lot.expiration = t.serverResult.response.expiration, parseInt(e.data.lot.actualBidPrice) > parseInt(e.data.lot.maxBidPrice) && (e.data.lot.maxBidPrice = e.data.lot.actualBidPrice)
      }), this.auctionService.getLotById(this.lotId).then(function(t) {
        e.data.lot = t;
        var n = e.data,
          i = function() {
            if (n.lot.expiration) {
              var e = new Date(n.lot.expiration),
                t = new Date;
              if (e > t) {
                var i = e.valueOf() - t.valueOf(),
                  r = Math.floor(i / 1e3),
                  o = r % 60;
                r = Math.floor(r / 60);
                var a = r % 60;
                r = Math.floor(r / 60);
                var s = r % 24;
                r = Math.floor(r / 24);
                var l = r;
                n.timeLeft = "До завершения лота осталось ", l && (n.timeLeft += l + " д. "), (l || s) && (n.timeLeft += s + " ч. "), (l || s || a) && (n.timeLeft += a + " мин. "), l || s || a || (n.timeLeft += o + " сек.")
              } else n.timeLeft = "", n.statusLot = 3
            }
          };
        $("#timeLeft").fadeTo(0, .1), e.$interval(i, 1e3), i(), $("#timeLeft").fadeTo(600, 1)
      })
    }, t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model.id = this.lotId, this.model.terms = !0
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.AuctionLotController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("auctionStatus", {
  templateUrl: "/components/auction-status/auction-status.html",
  bindings: {
    lotId: "=",
    status: "=",
    lot: "="
  },
  controller: ["$element", "$scope", "$model", "$modal", "auctionService", function(e, t, n, i, r) {
    return new Components.AuctionStatusController(e, t, n, i, r)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r) {
      this.$element = e, this.$scope = t, this.$modal = i, this.auctionService = r, this.selectedStatus = this.status, this.statusList = [{
        id: null,
        label: "Все статусы"
      }, {
        id: 0,
        label: "Создан"
      }, {
        id: 1,
        label: "Активен"
      }, {
        id: 2,
        label: "Приостановлен"
      }, {
        id: 3,
        label: "Завершён"
      }]
    }
    return e.$inject = ["$element", "$scope", "$model", "$modal", "auctionService"], e.prototype.statusChange = function() {
      var e = this;
      if (e.selectedStatus && e.selectedStatus != e.status) {
        var t = this.lot.duration,
          n = e.statusList[parseInt(e.selectedStatus.toString()) + 1].label,
          i = 0 == this.lot.status && 1 == e.selectedStatus && new Date(this.lot.expiration).getFullYear() < 2e3,
          r = function() {
            i && e.selectedDuration ? e.auctionService.lotDuration(e.lotId, e.selectedDuration).then(function(t) {
              t && (e.duration = e.selectedDuration, e.auctionService.lotStatus(e.lotId, e.selectedStatus).then(function(t) {
                t && (e.status = e.selectedStatus)
              }))
            }) : e.auctionService.lotStatus(e.lotId, e.selectedStatus).then(function(t) {
              t && (e.status = e.selectedStatus)
            })
          },
          o = function() {
            e.selectedStatus = e.status.toString(), window.setTimeout(function() {
              $("#st" + e.lotId).val(e.status.toString());
              var t = $("#st" + e.lotId)[0];
              t.children[0].style = "display: none"
            }, 50)
          };
        this.$modal.open({
          templateUrl: i ? "/direct/auction/template/yesno/yesno_duration.html" : "/direct/auction/template/yesno/yesno.html",
          backdrop: !0,
          windowClass: "modal",
          controller: ["$scope", "$modalInstance", function(i, a) {
            var s = i;
            s.duration = t, s.expiration = "", s.newStatus = function() {
              return n
            }, s.setExpiration = function(e, t) {
              var n = new Date;
              n.setHours(n.getHours() + e), s.expiration = n.toLocaleString()
            }, s.$watch(function() {
              return s.duration
            }, function(e, t) {
              s.setExpiration(e)
            }), s.close = function(t, n) {
              e.selectedDuration = n, t ? r() : o(), a.dismiss("cancel")
            }
          }]
        })
      }
    }, e
  }();
  e.AuctionStatusController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("auctionSubscribe", {
  templateUrl: "/components/auction-subscribe/auction-subscribe.html",
  controller: ["$element", "$scope", "$model", "auctionService", function(e, t, n, i) {
    return new Components.AuctionSubscribeController(e, t, n, i)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r) {
      var o = this;
      e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.auction.subscribe), Models.Auction.SubscribeVm, !1), this.$element = t, this.auctionService = r, this.data = {
        offer: {
          email: "",
          sendNotifications: !0
        }
      }, this.auctionService.getSubscribe().then(function(e) {
        o.data.offer = e, o.model.email = o.data.offer.email, o.model.sendNotifications = o.data.offer.sendNotifications
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "$model", "auctionService"], t
  }(Controllers.Base.BaseAppCtrl);
  e.AuctionSubscribeController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("calcCadillac", {
  templateUrl: "/components/calc-cadillac/calc-cadillac.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.CalcCadillacController(e, t, n)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$element = e, this.apiDataService = n, this.model = {
        term: 0,
        advance: 0
      }, this.data = {
        rate: .195,
        oni: .03,
        sliderOptions: {
          price: {
            step: 1e5,
            min: 15e5,
            max: 15e6
          },
          advance: {
            step: 1,
            min: 10,
            max: 49
          },
          term: {
            step: 6,
            min: 12,
            max: 60
          }
        }
      }, t.$watchCollection(function() {
        return [i.model.price, i.model.advance, i.model.term]
      }, function() {
        return i.calculate()
      }), this.initModel()
    }
    return e.$inject = ["$element", "$scope", "apiDataService"], e.prototype.initModel = function() {
      this.model && (this.model.term = 48, this.model.advance = 10, this.model.price = this.data.sliderOptions.price.min, this.model.payment = 0, this.model.rise = 0)
    }, e.prototype.calculate = function() {
      this.model.term % 6 != 0 && this.data.sliderOptions.term.min < parseInt(this.model.term) && (this.model.term = this.data.sliderOptions.term.min), this.model.price < this.data.sliderOptions.price.min && (this.model.price = this.data.sliderOptions.price.min);
      var e = Math.min(Math.max(this.data.sliderOptions.price.min, this.model.price), this.data.sliderOptions.price.max),
        t = Math.min(Math.max(this.data.sliderOptions.advance.min, this.model.advance), this.data.sliderOptions.advance.max),
        n = Math.min(Math.max(this.data.sliderOptions.term.min, this.model.term), this.data.sliderOptions.term.max),
        i = (this.data.rate, this.data.oni, e * ((100 - t) / 100 * Math.pow(1 + this.data.rate / 12, n) - this.data.oni) / (Math.pow(1 + this.data.rate / 12, n) - 1) * this.data.rate / 12);
      this.model.rise = (e * t / 100 + n * i - e) / e / n * 12 * 100, this.model.payment = i
    }, e
  }();
  e.CalcCadillacController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("calcLul", {
  templateUrl: "/components/calc-lul/calc-lul.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.CalcLulController(e, t, n)
  }]
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$element = e, this.apiDataService = n, this.model = {
        term: 0,
        advance: 0
      }, this.data = {
        brands: new Array,
        models: new Array,
        rate: .195,
        oni: .03,
        sliderOptions: {
          price: {
            step: 1e5,
            min: 5e5,
            max: 15e6
          },
          advance: {
            step: 1,
            min: 5,
            max: 49
          },
          term: {
            step: 1,
            min: 12,
            max: 60
          }
        }
      }, this.vehicleTypeId = this.$element.context.getAttribute("vehicle-type-id"), this.advanceMin = this.$element.context.getAttribute("advance-min"), this.termMax = this.$element.context.getAttribute("term-max"), this.getAutoBrand = function(e) {
        return _.find(i.data.brands, function(t) {
          return t.safoId == e
        })
      }, this.getAutoModel = function(e) {
        return _.find(i.data.models, function(t) {
          return t.safoId == e
        })
      }, n.getLulBrands(this.vehicleTypeId).then(function(e) {
        i.data.brands = e
      }), t.$watch(function() {
        return i.model.brandId
      }, function(e, t) {
        if (i.model.brandId) {
          var n = i.getAutoBrand(i.model.brandId);
          i.model.brandName = n.text, i.apiDataService.getLulModels(i.vehicleTypeId, n.id).then(function(e) {
            i.data.models = e, i.data.models && 1 == i.data.models.length && (i.model.modelId = i.data.models[0].safoId)
          }).finally(function() {
            i.data.models && i.data.models.some(function(e) {
              return e.safoId == i.model.modelId
            }) || (i.model.modelId = null, i.model.modelName = null)
          })
        } else i.model.brandName = null
      }), t.$watch(function() {
        return i.model.modelId
      }, function() {
        if (i.model.modelId) {
          var e = i.getAutoModel(i.model.modelId);
          i.model.modelName = e ? e.text : "", i.apiDataService.getModelMinPrice(e.safoId).then(function(e) {
            return e > 1 ? (i.model.price = 1e5 * Math.round(e / 1e5), void(i.data.sliderOptions.price.min = i.model.price)) : (i.data.sliderOptions.price.min = 5e5, void(i.model.price = i.data.sliderOptions.price.min))
          }).finally(function() {})
        } else i.model.modelName = null
      }), t.$watchCollection(function() {
        return [i.model.price, i.model.advance, i.model.term, i.model.brandId, i.model.modelId]
      }, function() {
        return i.calculate()
      }), this.initModel()
    }
    return e.$inject = ["$element", "$scope", "apiDataService"], e.prototype.initModel = function() {
      null != this.advanceMin && (this.data.sliderOptions.advance.min = this.advanceMin), null != this.termMax && (this.data.sliderOptions.term.max = this.termMax), this.model && (this.model.term = null != this.termMax ? this.termMax : 60, this.model.advance = this.data.sliderOptions.advance.min, this.model.brandId = 0, this.model.modelId = 0, this.model.price = this.data.sliderOptions.price.min, this.model.payment = 0, this.model.rise = 0, this.data.rate = 1 == this.vehicleTypeId ? .185 : this.data.rate)
    }, e.prototype.calculate = function() {
      this.model.price < this.data.sliderOptions.price.min && (this.model.price = this.data.sliderOptions.price.min);
      var e = Math.min(Math.max(this.data.sliderOptions.price.min, this.model.price), this.data.sliderOptions.price.max),
        t = Math.min(Math.max(this.data.sliderOptions.advance.min, this.model.advance), this.data.sliderOptions.advance.max),
        n = Math.min(Math.max(this.data.sliderOptions.term.min, this.model.term), this.data.sliderOptions.term.max),
        i = (this.data.oni, e * ((100 - t) / 100 * Math.pow(1 + this.data.rate / 12, n) - this.data.oni) / (Math.pow(1 + this.data.rate / 12, n) - 1) * this.data.rate / 12);
      this.model.rise = (e * t / 100 + n * i - e) / e / n * 12 * 100, this.model.payment = i
    }, e
  }();
  e.CalcLulController = t
}(Components || (Components = {})), angular.module("dealer.web.app").component("subscription", {
  templateUrl: "/components/subscription/subscription.html",
  bindings: {
    type: "<"
  },
  controller: ["$element", function(e) {
    return new Components.SubscriptionController(e)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, new n(t, "/subscription/save"), i), this.model = new i
    }
    return __extends(t, e), t.$inject = ["$element"], t.prototype.$onChanges = function() {
      this.model.type = this.type
    }, t
  }(Controllers.Base.BaseAppCtrl);
  e.SubscriptionController = t;
  var n = function(e) {
      function t() {
        e.apply(this, arguments)
      }
      return __extends(t, e), t
    }(Services.AppBaseSubmitter),
    i = function() {
      function e() {}
      return e
    }()
}(Components || (Components = {})), angular.module("dealer.web.app").component("uploadAdvertImage", {
  templateUrl: "/components/upload-advert-image/upload-advert-image.html",
  controller: ["$element", "FileUploader", function(e, t) {
    return new Components.UploadAdvertImageController(e, t)
  }],
  bindings: {
    buttonText: "<",
    disabled: "<",
    onUpload: "&",
    onError: "&",
    buttonClass: "<"
  }
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t) {
      var i = this;
      this.$element = e, this.FileUploader = t, this.uploader = new this.FileUploader, this.uploader.onAfterAddingFile = function(e) {
        e.upload()
      }, this.uploader.onSuccessItem = function(e, t, r, o) {
        if (t.success) {
          if (i.onUpload) {
            var a = new Models.ImageStorageFile;
            a.id = t.uploaded.id, a.name = t.uploaded.name, i.onUpload(new n(a))
          }
        } else console && console.error("Ошибка при загрузке файла на сервер."), i.onError && i.onError(t.data)
      }, this.uploader.onErrorItem = function(e, t, n, r) {
        console && console.error("Ошибка при загрузке файла на сервер."), i.onError && i.onError(t)
      }
    }
    return e.$inject = ["$element", "FileUploader"], e.prototype.open = function() {
      this.uploader.url = Consts.Urls.advertImage.upload(), this.$element.find("input[type=file]").click()
    }, e
  }();
  e.UploadAdvertImageController = t;
  var n = function() {
    function e(e) {
      this.uploadedFile = e
    }
    return e
  }();
  e.UploadedImageVm = n
}(Components || (Components = {})), angular.module("dealer.web.app").component("uploadStoragedFile", {
  templateUrl: "/components/upload-storaged-file/upload-storaged-file.html",
  controller: ["$element", "FileUploader", function(e, t) {
    return new Components.UploadStoragedFileController(e, t)
  }],
  bindings: {
    buttonText: "<",
    disabled: "<",
    type: "<",
    onUpload: "&",
    onError: "&",
    buttonClass: "<"
  }
});
var Components;
! function(e) {
  var t = function() {
    function e(e, t) {
      var i = this;
      this.$element = e, this.FileUploader = t, this.uploader = new this.FileUploader, this.uploader.onAfterAddingFile = function(e) {
        e.upload()
      }, this.uploader.onSuccessItem = function(e, t, r, o) {
        if (t.success) {
          if (i.onUpload) {
            var a = new Models.StoragedFile;
            a.id = t.uploaded.id, a.name = t.uploaded.name, i.onUpload(new n(a))
          }
        } else console && console.error("Ошибка при загрузке файла на сервер."), i.onError && i.onError(t.data)
      }, this.uploader.onErrorItem = function(e, t, n, r) {
        console && console.error("Ошибка при загрузке файла на сервер."), i.onError && i.onError(t)
      }
    }
    return e.$inject = ["$element", "FileUploader"], e.prototype.$onInit = function() {
      this.uploader.url = Consts.Urls.storagedFile.upload(this.type)
    }, e.prototype.open = function() {
      this.$element.find("input[type=file]").click()
    }, e
  }();
  e.UploadStoragedFileController = t;
  var n = function() {
    function e(e) {
      this.uploadedFile = e
    }
    return e
  }();
  e.UploadedVm = n
}(Components || (Components = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o) {
      e.call(this, t, new Services.LongAppSubmitter(t)), this.$element = t, this.$model = n, this.$timeout = i, this.carTypePropertyMapping = r, this.catalogTabVisibilityPresets = o, this.showConditions = !1, this.changePosition(), this.initModel(), this.$model.leasingEnabled = !this.$model.ownerIsIndividual && this.isLeasingAvailable(), this.model.carId = this.$model.carId, this.model.isLegal = !0, this.model.acceptTerms = !0, this.model.isLeasing = this.$model.leasingEnabled
    }
    return __extends(t, e), t.$inject = ["$element", "$model", "$timeout", "carTypePropertyMapping", "catalogTabVisibilityPresets"], t.prototype.initModel = function() {
      this.model || (this.model = new Models.Applications.CatalogAppModel), this.model.firstName = null, this.model.phone = null
    }, t.prototype.setIsLegal = function(e) {
      this.model.isLegal = e, this.model.isLegal && !this.$model.leasingEnabled && (this.model.isLeasing = !1), this.model.isLegal || this.$model.lflEnabled || (this.model.isLeasing = !1), this.changePosition()
    }, t.prototype.isLeasingEnabled = function() {
      return this.model.isLegal ? this.$model.leasingEnabled : this.$model.lflEnabled
    }, t.prototype.getActualPrice = function() {
      return this.model.isLeasing ? this.$model.priceEP > 0 && this.$model.priceEP < this.$model.price ? this.$model.priceEP : this.$model.price : this.$model.priceEPcash > 0 && this.$model.priceEPcash < this.$model.price ? this.$model.priceEPcash : this.$model.price
    }, t.prototype.getAdvice = function() {
      return this.model.isLegal ? this.$model.leasingAdvance : this.$model.lflAdvance
    }, t.prototype.getTerm = function() {
      return this.model.isLegal ? this.$model.leasingTerm : this.$model.lflTerm
    }, t.prototype.getPayment = function() {
      return this.model.isLegal ? this.$model.leasingPayment : this.$model.lflPayment
    }, t.prototype.getTitle = function() {
      return this.model.isLeasing ? "Получите предложение" : "Показать контакты продавца"
    }, t.prototype.getButton = function() {
      return this.model.isLeasing ? "Купить в лизинг" : "Показать контакты"
    }, t.prototype.isLeasingAvailable = function() {
      var e = this.$model.isUsed ? "used" : "new",
        t = this.catalogTabVisibilityPresets[1].carType[e].alwaysVisible,
        n = this.$model.year,
        i = this.$model.carTypeId,
        r = this.carTypePropertyMapping[i] && this.carTypePropertyMapping[i].carKindParentPropertyName,
        o = this.carTypePropertyMapping[i] && this.carTypePropertyMapping[i].carKindPropertyName,
        a = this.$model.car[r] && this.$model.car[r][o + "Id"],
        s = this.catalogTabVisibilityPresets[1].carType[e][i],
        l = s && s.manufactureYearDiff,
        c = a && s && s.carKind && s.carKind[a] && s.carKind[a].manufactureYearDiff,
        u = c || l,
        d = new Date,
        p = d.getFullYear() - n < u;
      return !!t || !!p
    }, t.prototype.changePosition = function() {
      var e = this;
      this.$timeout(function() {
        var t = e.$element.find(".active").position();
        e.$element.find(".border").stop().css({
          left: t.left,
          top: t.top,
          width: e.$element.find(".active").width()
        })
      })
    }, t
  }(e.Base.BaseAppCtrl);
  e.AutoDetailsAppCtrl = t;
  var n = function() {
    function e() {}
    return e
  }();
  e.AutoDetailsVm = n
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e) {
      this.appService = e, this.model = {
        acceptTerms: !0
      }, this.number = "", this.isSent = !1, this.error = {}
    }
    return e.$inject = ["appService"], e.prototype.submit = function() {
      "leasing" == this.model.Type ? this.process(this.appService.leasingShort(this.model)) : "individual" == this.model.Type ? this.process(this.appService.lfl(this.model)) : "insurance" == this.model.Type && this.process(this.appService.insurance(this.model))
    }, e.prototype.process = function(e) {
      var t = this;
      e.success(function(e) {
        t.isSent = !0, t.number = e, t.model = {}
      }).error(function(e) {
        t.isSent = !0, t.error = e.error
      })
    }, e
  }();
  e.ErrorsShortApp = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  function t(e, t) {
    for (var n = [], i = e; i <= t; i++) n.push(i);
    return n
  }

  function n(e, t, n) {
    return e.filter(function(e) {
      return e[t] === n
    })
  }
  var i = function() {
    function e(e, n, i) {
      var r = this;
      this.$scope = e, this.appService = n, this.apiDataService = i, this.refs = {
        cities: [],
        cities_all: [],
        cities_filtered: [],
        brands: [],
        models: [],
        regions: [],
        years: [],
        ages: [],
        experiences: [],
        drivers: [],
        confirm: []
      }, this.model = new Models.Applications.InsuranceAppModel, this.view = {
        step: 1,
        acceptTerms: !0,
        forms: ["", "personInfo", "autoInfo", "driversInfo"],
        drivers: 2,
        applicationNumber: null,
        submitted: !1,
        policyType: null
      }, i.getCities().then(function(e) {
        r.refs.cities = e
      }, function(e) {
        console.error("getCities(): ", e)
      }), i.getAllBrands().then(function(e) {
        r.refs.brands = e
      }, function(e) {
        console.error("getBrands(): ", e)
      }), i.getRegions().then(function(e) {
        r.refs.regions = e
      }, function(e) {
        console.error("getRegions(): ", e)
      }), this.refs.ages = t(16, 90), this.refs.years = t(1980, (new Date).getFullYear()), this.refs.experiences = t(0, 50), this.refs.drivers = t(1, 5), this.refs.confirm = [{
        id: !0,
        text: "Да"
      }, {
        id: !1,
        text: "Нет"
      }], this.model.brandId && this.updateModels(this.model.brandId), this.model.cityId && this.updateRegion(this.model.cityId), this.view.drivers && this.updateDrivers(this.view.drivers), e.$watchGroup(["ctrl.model.casco", "ctrl.model.dosago", "ctrl.model.osago"], function(e) {
        var t = e[0],
          n = e[1],
          i = e[2];
        r.view.policyType = !!(t || n || i) || void 0, r.personInfo.policyType.$setValidity("dosagonokasko", !(n && !t))
      }), $(window).bind("beforeunload", function() {
        r.view.step >= 2 && !r.view.submitted && r.submitRequest()
      })
    }
    return e.$inject = ["$scope", "appService", "apiDataService"], e.prototype.updateModels = function(e) {
      var t = this;
      e && this.apiDataService.getAllModels(e).then(function(e) {
        t.refs.models = e
      }, function(e) {
        console.error("getModels(brandId: number): ", e)
      })
    }, e.prototype.updateRegion = function(e) {
      var t = this;
      e && this.apiDataService.getRegionOfCityById(e).then(function(e) {
        e && (t.model.region = e.code)
      }, function(e) {
        console.error("getRegionOfCityById(cityId): ", e)
      })
    }, e.prototype.updateDrivers = function(e) {
      if (!(e <= 0)) {
        for (var t = this.model.drivers; e > t.length;) t.push({
          gender: "m",
          age: null,
          experience: null,
          isWithinMariage: !1,
          hasChildren: !1
        });
        for (; e < t.length;) t.pop()
      }
    }, e.prototype.nextStep = function() {
      this.view.step++
    }, e.prototype.prevStep = function() {
      this.view.step--
    }, e.prototype.validateForm = function() {
      var e = this.view.forms[this.view.step],
        t = this[e];
      return AngularHelpers.setFormDirty(t), !t.$invalid
    }, e.prototype.citiesByPolicy = function(e, t, n) {
      var i = [{
        id: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
        name: "Москва"
      }];
      return function(r) {
        return !(t && !e && !n) || i.map(function(e) {
          return e.id
        }).indexOf(r.id) > -1
      }
    }, e.prototype.submitRequest = function() {
      var e = this,
        t = this.model,
        i = this.model.brandId;
      if (i) {
        var r = n(this.refs.brands, "id", i);
        this.model.brand = r[0] && r[0].text
      }
      var o = this.model.modelId;
      if (o) {
        var r = n(this.refs.models, "id", o);
        this.model.model = r[0] && r[0].text
      }
      var a = this.model.cityId;
      if (a) {
        var r = n(this.refs.cities, "id", a);
        this.model.city = r[0] && r[0].name
      }
      this.appService.insurance(t).success(function(t) {
        $(".to-top-block").click(), e.view.applicationNumber = t, e.view.submitted = !0, e.nextStep()
      }).error(function(e) {
        return console.error("submitRequest()", e)
      })
    }, e
  }();
  e.InsuranceRequestCtrl = i
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, new Services.LeasingShortAppSubmitter(t), Models.Applications.LeasingShortAppModel)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.Base.BaseAppCtrl);
  e.LeasingShortAppCtrl = t
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o) {
      var a = this;
      e.call(this, t, new Services.LflAppSubmitter(t), Models.Applications.LflAppModel), this.smsService = i, this.apiDataService = o, this.getAutoBrand = function(e) {
        return _.find(a.data.brands, function(t) {
          return t.safoId == e
        })
      }, this.getAutoModel = function(e) {
        return _.find(a.data.models, function(t) {
          return t.safoId == e
        })
      }, this.data = {
        regions: null,
        lflregions: null,
        lflRegionCodes: null,
        brands: null,
        models: null,
        advances: [{
          code: "lt30",
          title: "Менее 30% от стоимости авто"
        }, {
          code: "gt30",
          title: "Более 30% от стоимости авто"
        }],
        smsSource: "landing"
      }, this.extraModel = {
        advance: null,
        userRegion: null,
        userCityName: null,
        smsSended: !1,
        smsCode: null,
        calcModelId: null,
        jobType: null
      }, o.getRegions().then(function(e) {
        a.data.regions = e
      }), o.getLflRegionCodes().then(function(e) {
        a.data.lflRegionCodes = e
      }), o.getLflBrands(Enums.CarTypeEnum.PassengerCar).then(function(e) {
        a.data.brands = e
      }), r.ready(function(e) {
        e && e.geolocation && e.geolocation.city && (a.extraModel.userCityName = e.geolocation.city, o.getRegionOfCityByName(e.geolocation.city).then(function(e) {
          e && (a.extraModel.userRegion = e, a.model.regionCode = e.code)
        }))
      }), n.$watch(function() {
        return a.model.brandId
      }, function(e, t) {
        if (a.model.brandId) {
          var n = a.getAutoBrand(a.model.brandId);
          a.model.brandName = n.text, a.apiDataService.getLflModels(n.id, Enums.CarTypeEnum.PassengerCar).then(function(e) {
            a.data.models = e, a.data.models && 1 == a.data.models.length && (a.model.modelId = a.data.models[0].safoId)
          })
        } else a.model.brandName = null;
        e != t && (a.model.modelId = null, a.model.modelName = null, a.data.models = [])
      }), n.$watch(function() {
        return a.model.modelId
      }, function() {
        if (a.model.modelId) {
          var e = a.getAutoModel(a.model.modelId);
          a.model.modelName = e.text, a.calcModel && a.calcModel.model.safoId == a.model.modelId ? (a.model.advance = a.calcModel.advance, a.model.monthPayment = a.calcModel.leasingPayment, a.model.term = a.calcModel.term) : (a.model.advance = null, a.model.monthPayment = null, a.model.term = null)
        } else a.model.modelName = null
      }), n.$watchCollection(function() {
        return [a.data.regions, a.data.lflRegionCodes]
      }, function() {
        a.data.regions && a.data.lflRegionCodes && (a.data.lflregions = _.map(a.data.regions, function(e) {
          var t = new Models.Api.Data.Region;
          return t.code = e.code, t.name = e.name, _.any(a.data.lflRegionCodes, function(t) {
            return t == e.code
          }) || (t.name = e.name + "  (не финансируется)"), t
        }))
      }), n.$watch(function() {
        return a.extraModel.jobType
      }, function() {
        var e = !a.extraModel.jobType || "HiredEmployee" == a.extraModel.jobType || "Businessman" == a.extraModel.jobType,
          t = a.formCtrl.JobType;
        t.$setValidity("notworking", e), a.extraModel.jobType && t.$setDirty()
      }), n.$watch(function() {
        return a.extraModel.smsCode
      }, function() {
        a.formCtrl.smsCode.$setValidity("smsCodeInvalid", !0), a.formCtrl.smsCode.$setValidity("smsCodeError", !0)
      }), this.$rootScope.$on("calcSubmit", function(e, t) {
        a.calcModel = t, a.model.brandId = t.brand.safoId, a.model.brandName = t.brand.text, a.model.modelId = t.model.safoId, a.model.modelName = t.model.text
      })
    }
    return __extends(t, e), t.$inject = ["$element", "$scope", "smsService", "ymapsLoader", "apiDataService"], t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model && (this.model.applicationKind = "LeasingIndividualAvito", this.model.isUsed = !1, this.model.term = 36, this.model.advance = 20), this.extraModel && (this.extraModel.jobType = null, this.extraModel.advance = null, this.extraModel.smsCode = null)
    }, t.prototype.preSend = function() {
      var e = this,
        t = this.$q.defer();
      return this.smsService.checkSmsCode(this.model.phone, "ЛФЛ", this.extraModel.smsCode).then(function(n) {
        switch (n) {
          case Enums.SmsCheckStatusEnum.Success:
            e.model.modelId != e.extraModel.calcModelId && (e.model.advance = null, e.model.term = null, e.model.monthPayment = null), t.resolve();
            break;
          case Enums.SmsCheckStatusEnum.Invalid:
            var i = e.formCtrl.smsCode;
            i.$setValidity("smsCodeInvalid", !1), t.reject();
            break;
          default:
            var i = e.formCtrl.smsCode;
            i.$setValidity("smsCodeError", !1), t.reject()
        }
      }), t.promise
    }, t
  }(e.Base.BaseAppCtrl);
  e.LflAppCtrl = t
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t, n) {
      e.call(this, t, new Services.RbaAppSubmitter(t), Models.Applications.RbaAppModel), this.$element = t, this.data = {}, this.initModel()
    }
    return __extends(t, e), t.$inject = ["$element", "$scope"], t.prototype.initModel = function() {
      e.prototype.initModel.call(this), this.model.acceptTerms = !0
    }, t
  }(e.Base.BaseAppCtrl);
  e.AppRbaController = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      if (this.$http = t, this.refs = {
          cities: [],
          brands: [],
          models: [],
          enums: null
        }, this.props = {
          passenger: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "kilometersFrom", "kilometersTo", "yearFrom", "yearTo", "bodyType", "aBS", "aSR", "driverAirbag", "passengerAirbag", "sideAirbags", "curtainAirbag", "fabric", "velour", "leather", "alcantara", "combined", "mirrorsHeated", "seatHeating", "steeringWheelHeating", "poweredMirrors", "driverElectricSeat", "passangerElectricSeat", "powerFrontWindows", "powerAllWindows", "rainSensor", "lightSensor", "sunroof", "cruiseControl", "parktronic", "seatWithMemory", "steeringWheelHydroGear", "steeringWheelElectroGear", "steeringWheelAdjustmentOnePlane", "steeringWheelAdjustmentTwoPlane", "airConditioner", "climateCtrl", "imbolizer", "antitheftAlarm", "centralLock", "onBoardComputer", "rearViewCamera", "omnidirectionSystem", "carParkingSystem", "soundmachine", "multifunctionalSoundsystem", "tVSet", "headliteWashers", "fogLight", "halogenHeadlights", "xenonHeadlights", "biXenonHeadlights", "ledHeadlights", "colorsId", "orderBy", "orderDirection"],
          commercial: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "enginePowerRanges", "kilometersFrom", "kilometersTo", "carKind", "transmission", "aBS", "aSR", "driverAirbag", "passengerAirbag", "mirrorsHeated", "seatHeating", "steeringWheelHeating", "poweredMirrors", "sunroof", "powerFrontWindows", "powerAllWindows", "cruiseControl", "headliteWashers", "airConditioner", "climateCtrl", "imbolizer", "antitheftAlarm", "centralLock", "drive", "differentialLock", "orderBy", "orderDirection"],
          trailer: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "carKind", "axlesBrand", "numberOfAxles", "liftingAxle", "turningAxle", "palletBox", "conics", "orderBy", "orderDirection"],
          bus: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "passengerCountRanges", "carKind", "transmission", "orderBy", "orderDirection"],
          specialVehicle: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "enginePowerRanges", "carKind", "transmission", "orderBy", "orderDirection"],
          selfPropelledEquipment: ["carTypeId", "isUsed", "brand", "model", "withDiscount", "europlanSale", "cityId", "priceFrom", "priceTo", "enginePowerRanges", "carKind", "engineType", "orderBy", "orderDirection"]
        }, this.colorMapping = {}, this.isShort = !0, this.data = {
          enginePowerRanges: [{
            value: [{
              lower: 0,
              upper: 60
            }],
            text: "<60 л.с."
          }, {
            value: [{
              lower: 60,
              upper: 100
            }],
            text: "60-100 л.с."
          }, {
            value: [{
              lower: 101,
              upper: 125
            }],
            text: "101-125 л.с."
          }, {
            value: [{
              lower: 126,
              upper: 150
            }],
            text: "126-150 л.с."
          }, {
            value: [{
              lower: 151,
              upper: 175
            }],
            text: "151-175 л.с."
          }, {
            value: [{
              lower: 176,
              upper: 200
            }],
            text: "176-200 л.с."
          }, {
            value: [{
              lower: 201,
              upper: 250
            }],
            text: "201-250 л.с."
          }, {
            value: [{
              lower: 251,
              upper: 300
            }],
            text: "251-300 л.с."
          }, {
            value: [{
              lower: 300,
              upper: 1500
            }],
            text: ">300 л.с."
          }],
          passengerCountRanges: [{
            value: [{
              lower: 9,
              upper: 15
            }],
            text: "9-15"
          }, {
            value: [{
              lower: 16,
              upper: 22
            }],
            text: "16-22"
          }, {
            value: [{
              lower: 23,
              upper: 50
            }],
            text: "23-50"
          }, {
            value: [{
              lower: 50,
              upper: 60
            }],
            text: ">50"
          }],
          carTypes: [{
            value: 1,
            text: "Легковые"
          }, {
            value: 6,
            text: "Коммерческие"
          }, {
            value: 2,
            text: "Грузовые"
          }, {
            value: 4,
            text: "Прицепы"
          }, {
            value: 3,
            text: "Автобусы"
          }, {
            value: 5,
            text: "Спецтехника"
          }, {
            value: 7,
            text: "Самоходка"
          }],
          carKinds: function() {
            if (!r.refs.enums) return [];
            switch (r.model.carTypeId) {
              case 2:
                return r.refs.enums.truckType;
              case 3:
                return r.refs.enums.busType;
              case 4:
                return r.refs.enums.trailerType;
              case 5:
                return r.refs.enums.specialVehicleType;
              case 6:
                return r.refs.enums.commercialCarType;
              case 7:
                return r.refs.enums.selfPropelledEquipmentType
            }
          },
          colorMap: {
            22: "cl-1",
            34: "cl-2",
            33: "cl-3",
            269: "cl-4",
            29: "cl-5",
            30: "cl-6",
            271: "cl-10",
            272: "cl-2",
            26: "cl-11",
            32: "cl-12",
            25: "cl-13",
            267: "cl-14",
            268: "cl-16",
            28: "cl-7",
            27: "cl-15",
            31: "cl-9",
            270: "cl-8",
            23: "cl-18",
            24: "cl-17"
          },
          models: new Array
        }, this.model = e.filterModel, this.model.enginePowerRanges && this.model.enginePowerRanges.length > 0) {
        var o = _.filter(this.data.enginePowerRanges, function(e) {
          return _.any(r.model.enginePowerRanges, function(t) {
            return e.value[0].lower == t.lower && e.value[0].upper == t.upper
          })
        });
        this.model.enginePowerRanges = o[0].value
      }
      if (this.model.passengerCountRanges && this.model.passengerCountRanges.length > 0) {
        var o = _.filter(this.data.passengerCountRanges, function(e) {
          return _.any(r.model.passengerCountRanges, function(t) {
            return e.value[0].lower == t.lower && e.value[0].upper == t.upper
          })
        });
        this.model.passengerCountRanges = o[0].value
      }
      n.$watch(function() {
        return r.model.carTypeId
      }, function() {
        t.get(Consts.Urls.search.filterRefs(r.model.carTypeId)).success(function(e) {
          r.refs = e, r.model.brand && _.any(r.refs.brands, function(e) {
            return e.id == r.model.brand
          }) && r.updateModels()
        })
      }), n.$watch(function() {
        return r.model.brand
      }, function(e, t) {
        t && e != t && (r.data.models = [], r.model.model = null), r.updateModels()
      }), n.$watchCollection(function() {
        return r.getModelValues()
      }, function() {
        r.$http.post(Consts.Urls.search.post, r.getModel()).success(function(e) {
          r.searchCount = e.count, r.searchId = e.id
        })
      }), n.$watch(function() {
        return r.isShort
      }, function(e) {
        r.isShort ? $("#r2").hide("slow") : $("#r2").show("slow")
      })
    }
    return e.$inject = ["$model", "$http", "$scope", "$timeout"], e.prototype.getModel = function() {
      var e, t = {};
      switch (this.model.carTypeId) {
        case 1:
          e = this.props.passenger;
          break;
        case 2:
        case 6:
          e = this.props.commercial;
          break;
        case 3:
          e = this.props.bus;
          break;
        case 4:
          e = this.props.trailer;
          break;
        case 5:
          e = this.props.specialVehicle;
          break;
        case 7:
          e = this.props.selfPropelledEquipment
      }
      for (var n in e) {
        var i = this.model[e[n]];
        i !== !1 || "withDiscount" == e[n] || "isUsed" == e[n] || "europlanSale" == e[n] ? t[e[n]] = i : $.isArray(i) && i.length > 0 && (t[e[n]] = i)
      }
      return 1 != this.model.carTypeId || this.model.isUsed ? 2 != this.model.carTypeId && 5 != this.model.carTypeId && 6 != this.model.carTypeId || (this.model.isUsed ? this.model.enginePowerRanges = null : (t.kilometersFrom = null, t.kilometersTo = null)) : (t.kilometersFrom = null, t.kilometersTo = null, t.yearFrom = null, t.yearTo = null, t.bodyType = null), this.model.isUsed ? t.withDiscount = !1 : t.europlanSale = !1, t
    }, e.prototype.clearModel = function() {
      var e = new Models.Search.SearchParamSet;
      e.carTypeId = this.model.carTypeId, e.isUsed = this.model.isUsed, this.model = e
    }, e.prototype.updateModels = function() {
      var e = this;
      if (this.model.brand) {
        var t = this.model.brand;
        this.$http.get(Consts.Urls.search.models(this.model.carTypeId, this.model.brand)).success(function(n) {
          t == e.model.brand && (e.data.models = n)
        })
      }
    }, e.prototype.getModelValues = function() {
      var e = [],
        t = this.getModel(),
        n = Object.getOwnPropertyNames(t);
      for (var i in n) {
        var r = t[n[i]];
        null != r && void 0 != r && (e.push(n[i]), $.isArray(r) ? e.push(JSON.stringify(r)) : e.push(r))
      }
      return e
    }, e
  }();
  e.AutoFilter = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.$http = t, this.data = {
        sorting: [{
          value: "price",
          text: "Сортировать по цене"
        }, {
          value: "createdAt",
          text: "Сортировать по дате добавления"
        }, {
          value: "year",
          text: "Сортировать по году выпуска"
        }]
      }, this.cars = e.results.cars || [], this.cars.forEach(function(e) {
        e.priceEp && (e.priceEp = parseInt(e.priceEp).toString()), e.price && (e.price = parseInt(e.price).toString())
      }), this.loadedPagesCount = e.results.page || 1, this.pagesCount = e.results.pagesCount || 1, this.isLoading = !1, this.id = e.results.id, this.searchParamSet = e.filterModel, this.orderBy = this.searchParamSet.orderBy, this.list = !0, n.$watch(function() {
        return r.orderBy
      }, function() {
        if (r.orderBy != r.searchParamSet.orderBy) {
          switch (r.searchParamSet.orderBy = r.orderBy, r.orderBy) {
            case "createdAt":
              r.searchParamSet.orderDirection = "desc";
              break;
            case "price":
              r.searchParamSet.orderDirection = "asc";
              break;
            case "year":
              r.searchParamSet.orderDirection = "desc"
          }
          r.$http.post(Consts.Urls.search.post, r.searchParamSet).success(function(e) {
            window.location.href = Consts.Urls.auto.search(e.id) + "#list"
          })
        }
      })
    }
    return e.$inject = ["$model", "$http", "$scope", "$timeout"], e.prototype.loadCars = function() {
      var e = this;
      if (!this.isLoading && this.loadedPagesCount < this.pagesCount) {
        this.isLoading = !0;
        var t = this.loadedPagesCount + 1;
        this.$http.get(Consts.Urls.search.results(this.id, t)).success(function(n) {
          t == e.loadedPagesCount + 1 && (e.loadedPagesCount = t, e.cars = e.cars.concat(n), e.cars.forEach(function(e) {
            e.priceEp && (e.priceEp = parseInt(e.priceEp).toString()), e.price && (e.price = parseInt(e.price).toString())
          }), e.isLoading = !1)
        }).error(function() {
          t == e.loadedPagesCount + 1 && (e.isLoading = !1)
        })
      }
    }, e
  }();
  e.AutoResultsCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, i, r) {
      var o = this;
      this.$model = e, this.$http = t, this.pager = new n, this.orderBy = "";
      var a = e.pager;
      this.orderBy = e.orderBy, this.pager.page = a.page, this.pager.perPage = a.perPage, this.pager.pagesCount = a.pagesCount, this.pager.url = a.url, i.$watch(function() {
        return o.orderBy
      }, function(e, t) {
        e != t && o.setGetParameter("order", "price" == e ? "" : e)
      }), r(function() {
        $(".selectiv").chosen({
          width: "100%"
        }), $(".w90p").chosen({
          width: "90px"
        })
      }, 100)
    }
    return e.$inject = ["$model", "$http", "$scope", "$timeout"], e.prototype.setGetParameter = function(e, t) {
      var n = window.location.href,
        i = location.hash;
      if (n = n.replace(i, ""), n.indexOf(e + "=") >= 0) {
        var r = n.substring(0, n.indexOf(e)),
          o = n.substring(n.indexOf(e));
        o = o.substring(o.indexOf("=") + 1), o = o.indexOf("&") >= 0 ? o.substring(o.indexOf("&")) : "", n = r + e + "=" + t + o
      } else n += n.indexOf("?") < 0 ? "?" + e + "=" + t : "&" + e + "=" + t;
      window.location.href = n + i
    }, e
  }();
  e.AutoSearch = t;
  var n = function() {
    function e() {
      this.page = 1, this.url = "", this.perPage = 0, this.pagesCount = 0
    }
    return e.prototype.setPage = function(e) {
      this.page = e, location.href = this.url.replace("__page__", e.toString())
    }, e.prototype.next = function() {
      this.page < this.pagesCount && this.setPage(this.page + 1)
    }, e
  }()
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t) {
      var n = this;
      this.$model = e, this.$http = t, this.state = "initial", this.readyToSend = !1, this._isSending = !1, this.acceptTerms = !0, this.model = new Models.Auto.ContactsRequestModel, this.isSending = function() {
        return n._isSending
      }, this.model.carId = e.carId
    }
    return e.$inject = ["$model", "$http"], e.prototype.submit = function() {
      var e = this;
      this._isSending || (this._isSending = !0, this.$http.post(Consts.Urls.auto.contactsRequest, this.model).success(function(t) {
        e.result = t, e.state = "submitted"
      }).finally(function() {
        return e._isSending = !1
      }))
    }, e
  }();
  e.ContactsRequestCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$http = t, this.model = {
        isStatic: !0,
        type: 1
      }, this.data = {
        types: [{
          text: "Бизнес-класс<br> и лимузины",
          value: Enums.RecommendedCarTypeEnum.BusinessClass,
          html: "",
          clearText: "",
          order_truck: 7,
          order_special: 7,
          order_used: 8,
          order_fleet: 8,
          order_operating: 0,
          order_taxi: 8,
          order_partner: 0,
          order_fuel: 1,
          order_registration: 0,
          order_tradein: 2,
          order_help: 2
        }, {
          text: "Служебные<br> авто",
          value: Enums.RecommendedCarTypeEnum.Service,
          html: "",
          clearText: "",
          order_truck: 5,
          order_special: 5,
          order_used: 2,
          order_fleet: 0,
          order_operating: 2,
          order_taxi: 1,
          order_partner: 3,
          order_fuel: 0,
          order_registration: 1,
          order_tradein: 0,
          order_help: 0
        }, {
          text: "Авто<br> для такси",
          value: Enums.RecommendedCarTypeEnum.Taxi,
          html: "",
          clearText: "",
          order_truck: 6,
          order_special: 6,
          order_used: 3,
          order_fleet: 1,
          order_operating: 3,
          order_taxi: 0,
          order_partner: 4,
          order_fuel: 2,
          order_registration: 4,
          order_tradein: 1,
          order_help: 1
        }, {
          text: "Коммерческий<br> транспорт",
          value: Enums.RecommendedCarTypeEnum.Commercial,
          html: "",
          clearText: "",
          order_truck: 1,
          order_special: 3,
          order_used: 4,
          order_fleet: 2,
          order_operating: 1,
          order_taxi: 3,
          order_partner: 1,
          order_fuel: 3,
          order_registration: 2,
          order_tradein: 3,
          order_help: 3
        }, {
          text: "Специальные<br> автомобили",
          value: Enums.RecommendedCarTypeEnum.Special,
          html: "",
          clearText: "",
          order_truck: 3,
          order_special: 0,
          order_used: 5,
          order_fleet: 6,
          order_operating: 4,
          order_taxi: 6,
          order_partner: 7,
          order_fuel: 7,
          order_registration: 7,
          order_tradein: 7,
          order_help: 5
        }, {
          text: "Погрузчики<br> и экскаваторы",
          value: Enums.RecommendedCarTypeEnum.LoaderExcavator,
          html: "",
          clearText: "",
          order_truck: 2,
          order_special: 1,
          order_used: 6,
          order_fleet: 7,
          order_operating: 5,
          order_taxi: 7,
          order_partner: 8,
          order_fuel: 8,
          order_registration: 8,
          order_tradein: 8,
          order_help: 6
        }, {
          text: "Грузовики<br> и прицепы",
          value: Enums.RecommendedCarTypeEnum.TruckTrailer,
          html: "",
          clearText: "",
          order_truck: 0,
          order_special: 2,
          order_used: 7,
          order_fleet: 3,
          order_operating: 6,
          order_taxi: 4,
          order_partner: 2,
          order_fuel: 4,
          order_registration: 3,
          order_tradein: 4,
          order_help: 4
        }, {
          text: "Легковые авто<br> с пробегом",
          value: Enums.RecommendedCarTypeEnum.PassengerUsed,
          html: "",
          clearText: "",
          order_truck: 8,
          order_special: 8,
          order_used: 0,
          order_fleet: 4,
          order_operating: 7,
          order_taxi: 2,
          order_partner: 5,
          order_fuel: 5,
          order_registration: 5,
          order_tradein: 5,
          order_help: 7
        }, {
          text: "Грузовые авто<br> с пробегом",
          value: Enums.RecommendedCarTypeEnum.TruckUsed,
          html: "",
          clearText: "",
          order_truck: 4,
          order_special: 4,
          order_used: 1,
          order_fleet: 5,
          order_operating: 8,
          order_taxi: 5,
          order_partner: 6,
          order_fuel: 6,
          order_registration: 6,
          order_tradein: 6,
          order_help: 8
        }],
        cars: new Array,
        searchUrl: ""
      };
      for (var r in this.data.types) this.data.types[r].html = n.trustAsHtml(this.data.types[r].text), this.data.types[r].clearText = this.data.types[r].text.replace("<br>", "");
      e.$watch(function() {
        return i.model.type
      }, function(e, n) {
        n && e != n && t.get(Consts.Urls.auto.recommended(e, 3)).success(function(t) {
          i.model.type == e && (i.data.cars = t.cars, i.data.searchUrl = t.searchUrl, i.model.isStatic = !1)
        })
      })
    }
    return e.$inject = ["$scope", "$http", "$sce"], e.prototype.setType = function(e) {
      this.model.isStatic = !1, this.model.type = e
    }, e
  }();
  e.RecommendedAutoCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$model = e, this.$http = n, this.isStatic = !0, this.model = {
        sameBrand: !1,
        sameKind: !1,
        carId: 0
      }, this.isStatic = !1, this.model.carId = e.carId, this.data = {
        cars: e.similar.cars,
        searchUrl: e.similar.searchUrl
      }, t.$watchCollection(function() {
        return [i.model.sameBrand, i.model.sameKind]
      }, function() {
        n.get(Consts.Urls.auto.similar, {
          params: i.model
        }).success(function(e) {
          i.data.cars = e.cars, i.data.searchUrl = e.searchUrl
        })
      })
    }
    return e.$inject = ["$model", "$scope", "$http"], e
  }();
  e.SimilarCarsCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e() {}
    return e
  }();
  e.Infographic = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.$http = n, this.$filter = i, this.listAll = [], this.list = [], this.refs = {}, this.filter = {}, this.pager = {
        page: 1,
        perPage: 10,
        pagesCount: 0,
        setPage: function(e) {
          r.pager.page = e
        }
      }, this.listAll = t.docs, this.refs = t.refs, e.$watch(function() {
        return r.filter
      }, function(e) {
        r.pager.page = 1, r.updateFilter()
      }, !0), e.$watch(function() {
        return r.pager
      }, function(e) {
        return r.updateFilter()
      }, !0)
    }
    return e.$inject = ["$scope", "$model", "$http", "$filter"], e.prototype.updateFilter = function() {
      var e = this.$filter("filter")(this.listAll, this.filter),
        t = this.pager;
      t.pagesCount = Math.ceil(e.length / t.perPage), this.list = this.$filter("limitTo")(e, t.perPage, (t.page - 1) * t.perPage)
    }, e
  }();
  e.InvestorDisclosure = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.$http = n, this.$filter = i, this.listAll = [], this.list = [], this.folders = [], this.filter = {
        folder: "MSFO"
      }, this.pager = {
        page: 1,
        perPage: 10,
        pagesCount: 0,
        setPage: function(e) {
          r.pager.page = e
        }
      }, this.listAll = t.docs, this.folders = t.folders, e.$watch(function() {
        return r.filter
      }, function(e) {
        r.pager.page = 1, r.updateFilter()
      }, !0), e.$watch(function() {
        return r.pager
      }, function(e) {
        return r.updateFilter()
      }, !0)
    }
    return e.$inject = ["$scope", "$model", "$http", "$filter"], e.prototype.updateFilter = function() {
      var e = this.$filter("filter")(this.listAll, this.filter),
        t = this.pager;
      t.pagesCount = Math.ceil(e.length / t.perPage), this.list = this.$filter("limitTo")(e, t.perPage, (t.page - 1) * t.perPage)
    }, e
  }();
  e.InvestorReports = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$model = e, this.$http = t, this.pager = new n, this.email = "", this.sent = !1, this.subscribeUrl = "", this.subscribeUrl = e.subscribeUrl;
      var i = e.pager;
      this.pager.page = i.page, this.pager.perPage = i.perPage, this.pager.pagesCount = i.pagesCount, this.pager.url = i.url
    }
    return e.$inject = ["$model", "$http"], e.prototype.subscribe = function() {
      var e = this;
      this.$http.post(this.subscribeUrl + "?email=" + this.email, {}).success(function(t) {
        return e.sent = !0
      })
    }, e
  }();
  e.News = t;
  var n = function() {
    function e() {
      this.page = 1, this.url = "", this.perPage = 0, this.pagesCount = 0
    }
    return e.prototype.setPage = function(e) {
      this.page = e, location.href = this.url.replace("__page__", e.toString())
    }, e.prototype.next = function() {
      this.page < this.pagesCount && this.setPage(this.page + 1)
    }, e
  }()
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r) {
      var o = this;
      this.$model = t, this.ymapsLoader = i, this.offices = [], this.mapOffices = [], this.cityGroups = [], this.selectedOffices = [], this.showOfficeDetails = !1, this.cur = {
        offices: [],
        city: "",
        office: void 0
      }, this.offices = t.offices, this.offices.forEach(function(e) {
        return e.mapWorkSchedule = (e.mapWorkSchedule || "").replace("\n", "<br/>")
      }), t.currentOffice && this.selectCity(t.currentOffice.cityName), i.ready(function(e) {
        if (e.geolocation && !o.cur.city) {
          var t = "moskva",
            n = o.offices.filter(function(t) {
              return t.cityName == e.geolocation.city
            });
          n.length > 0 && (t = n[0].cityNameTranslit), window.location.pathname = "/company/contacts/" + t
        }
      });
      var a = _(this.offices.map(function(e) {
        return e.cityName
      })).uniq().sort().filter(function(e) {
        return "Москва" != e && "Санкт-Петербург" != e
      });
      this.cityGroups = _(_(a).groupBy(function(e) {
        return e[0]
      })).values(), $(document).ready(function() {
        $(document).on("click", ".office-toggle", function(e) {
          var t = $(this);
          return t.hasClass("active") ? (t.children("ul").slideToggle(), t.removeClass("active")) : ($(".office-toggle.active").click(), t.children("ul").slideToggle(), t.addClass("active")), !1
        }), $(document).on("click", ".sa > li", function() {
          var e = $(this);
          return e.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($(".sa > li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
        }), $(document).on("click", ".sa > li.active", function() {
          return !1
        })
      })
    }
    return e.$inject = ["$element", "$model", "$timeout", "ymapsLoader", "$location"], e.prototype.setOffice = function(e, t) {
      void 0 === t && (t = !1), this.cur.office && this.cur.office.id == e.id || (e.gps = {
        lat: e.latitude,
        lng: e.longitude
      }, this.showOfficeDetails = t, this.cur.office = e, this.mapOffices = [this.cur.office])
    }, e.prototype.selectCity = function(e) {
      this.cur.city = e, this.cur.offices = this.offices.filter(function(t) {
        return t.cityName == e
      }), this.setOffice(this.cur.offices[0]), 1 == this.cur.offices.length && (this.showOfficeDetails = !0);
      var t = $(".opener");
      t.hasClass("active") && t.trigger("click")
    }, e
  }();
  e.Offices = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t) {
      this.$model = t, this.offices = [], this.mapOffices = [], this.cityGroups = [], this.cityList = [], this.selectedOffices = [], this.showOfficeDetails = !1, this.cur = {
        offices: [],
        city: "",
        office: void 0
      }, this.offices = t, this.offices.forEach(function(e) {
        return e.mapWorkSchedule = (e.mapWorkSchedule || "").replace("\n", "<br/>")
      });
      var n = _(this.offices.map(function(e) {
        return e.cityName
      })).uniq().sort().filter(function(e) {
        return "Москва" != e && "Санкт-Петербург" != e
      });
      this.cityGroups = _(_(n).groupBy(function(e) {
        return e[0]
      })).values(), this.cityList = n, $(document).ready(function() {
        $(document).on("click", ".office-toggle", function(e) {
          var t = $(this);
          return t.hasClass("active") ? (t.children("ul").slideToggle(), t.removeClass("active")) : ($(".office-toggle.active").click(), t.children("ul").slideToggle(), t.addClass("active")), !1
        }), $(document).on("click", ".sa > li", function() {
          var e = $(this);
          return e.hasClass("active") ? ($($(this).attr("ref")).slideUp(0), $(this).removeClass("active")) : ($(".sa > li.active").click(), $($(this).attr("ref")).slideDown(0), $(this).addClass("active")), !1
        }), $(document).on("click", ".sa > li.active", function() {
          return !1
        })
      })
    }
    return e.$inject = ["$element", "$model"], e.prototype.setOffice = function(e, t) {
      void 0 === t && (t = !1), this.cur.office && this.cur.office.id == e.id || (e.gps = {
        lat: e.latitude,
        lng: e.longitude
      }, this.showOfficeDetails = t, this.cur.office = e, this.mapOffices = [this.cur.office])
    }, e.prototype.selectCity = function(e) {
      this.cur.city = e, this.cur.offices = this.offices.filter(function(t) {
        return t.cityName == e
      }), this.setOffice(this.cur.offices[0]), 1 == this.cur.offices.length && (this.showOfficeDetails = !0);
      var t = $(".opener");
      t.hasClass("active") && t.trigger("click")
    }, e
  }();
  e.OfficesLanding = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e) {
      this.cookieService = e, this.model = {
        company: "",
        site: "",
        show: !1,
        banner: {
          universal: !0,
          passenger: !0,
          truck: !0,
          special: !0
        }
      }, this.data = {
        variation: 1
      };
      var t = this.cookieService.get("partner-materials-variation");
      null != t && (this.data.variation = t, this.model.show = !0)
    }
    return e.$inject = ["cookieService"], e.prototype.submit = function() {
      this.data.variation = Math.floor(24 * Math.random() + 1), this.cookieService.set("partner-materials-variation", this.data.variation, ""), ga("send", "event", "PartnerMaterials", "form", this.model.site), this.model.show = !0
    }, e
  }();
  e.PartnerMaterialsCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.$http = n, this.$model = i, this.regions = [], this.brands = [], this.partners = [], this.partnerCount = 0, this.filter = {}, this.pager = {
        page: 1,
        perPage: 10,
        pagesCount: 0,
        setPage: function(e) {
          r.pager.page = e, r.loadData(e)
        }
      }, this.regions = i.regions, this.brands = i.brands, this.partners = i.partners, this.partnerCount = i.partnerCount, this.updatePageCount(), t.$watch(function() {
        return r.filter
      }, function(e, t) {
        e != t && (e.isClient != t.isClient && (r.filter.brandId = null), r.pager.page = 1, r.loadData(r.pager.page))
      }, !0)
    }
    return e.$inject = ["$element", "$scope", "$http", "$model"], e.prototype.next = function() {
      this.pager.page < this.pager.pagesCount && this.pager.setPage(this.pager.page + 1)
    }, e.prototype.updatePageCount = function() {
      this.pager.pagesCount = Math.ceil(this.partnerCount / this.pager.perPage)
    }, e.prototype.loadData = function(e) {
      var t = this;
      this.$http.post("/company/partnerData", angular.extend({}, this.filter, {
        page: e
      })).success(function(e) {
        t.partnerCount = e.count, t.partners = e.data, t.regions = e.regions, t.updatePageCount()
      })
    }, e
  }();
  e.Partners = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$model = e, this.$http = t, this.apiDataService = n, this.refs = {
        cities: [],
        subjects: []
      }, this.view = {
        step: 0,
        acceptTerms: !0
      }, this.model = {
        postList: [],
        news: [],
        blogPosts: [],
        feedback: {}
      }, this.model.news = e.news, this.model.blogPosts = e.blogPosts, this.model.postList = e.posts, this.model.feedback.subject = "Общие вопросы", this.refs.subjects = ["Общие вопросы", "Комментарий эксперта", "Аналитика отрасли", "Экспертное мнение по ситуации на рынке", "Приглашение к участию"], n.getCities().then(function(e) {
        i.refs.cities = e
      }, function(e) {
        console.error("getCities(): ", e)
      })
    }
    return e.$inject = ["$model", "$http", "apiDataService"], e.prototype.submitPressQuestion = function() {
      var e = this,
        t = this.model.feedback;
      this.$http.post(Consts.Urls.company.postQuestion, t).then(function(t) {
        e.view.step = 2
      }, function(e) {
        console.error("submitRequest()", e)
      })
    }, e.prototype.validatePressQuestionForm = function() {
      var e = this.postQuestionForm;
      return AngularHelpers.setFormDirty(e), !e.$invalid
    }, e
  }();
  e.Press = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r) {
      var o = this;
      this.$model = n, this.$filter = i, this.list = [], this.sources = [], this.refs = {}, this.filter = {}, this.pager = {
        page: 1,
        perPage: 10,
        pagesCount: 0,
        setPage: function(e) {
          o.pager.page = e
        }
      }, this.postList = [], this.tags = [], this.tags = n.tags, this.sources = n.sources, this.postList = n.posts, t.$watch(function() {
        return o.filter
      }, function(e) {
        o.pager.page = 1, o.updateFilter()
      }, !0), t.$watch(function() {
        return o.pager
      }, function(e) {
        return o.updateFilter()
      }, !0)
    }
    return e.$inject = ["$element", "$scope", "$model", "$filter", "$timeout"], e.prototype.updateFilter = function() {
      var e = this.filter,
        t = this.postList.filter(function(t) {
          if (e.tagId && e.tagId != t.tagId) return !1;
          if (e.source && e.source != t.source) return !1;
          var n = moment(t.createdAt, "YYYY-MM-DD");
          return !(e.createdFrom && n.diff(moment(e.createdFrom, "DD.MM.YYYY"), "days") < 0) && !(e.createdTo && n.diff(moment(e.createdTo, "DD.MM.YYYY"), "days") > 0)
        }),
        n = this.pager;
      n.pagesCount = Math.ceil(t.length / n.perPage), this.list = this.$filter("limitTo")(t, n.perPage, (n.page - 1) * n.perPage)
    }, e
  }();
  e.PressPosts = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r) {
      var o = this;
      this.$model = n, this.$filter = i, this.vacancies = [], this.refs = {}, this.filter = {}, this.pager = {
        page: 1,
        perPage: 6,
        pagesCount: 0,
        setPage: function(e) {
          o.pager.page = e
        }
      }, this.vacList = [], this.refs = n.refs, this.vacList = n.vacancies, t.$watch(function() {
        return o.filter
      }, function(e) {
        o.pager.page = 1, o.updateFilter()
      }, !0), t.$watch(function() {
        return o.pager
      }, function(e) {
        return o.updateFilter()
      }, !0)
    }
    return e.$inject = ["$element", "$scope", "$model", "$filter", "$timeout"], e.prototype.updateFilter = function() {
      var e = this.$filter("filter")(this.vacList, this.filter),
        t = this.pager;
      t.pagesCount = Math.ceil(e.length / t.perPage), this.vacancies = this.$filter("limitTo")(e, t.perPage, (t.page - 1) * t.perPage)
    }, e
  }();
  e.Vacancies = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      this.$scope = e, this.$http = n, this.isSent = !1, this.applicationId = "", this.vacancies = [], this.refs = {}, this.processingAction = !1, this.model = {
        IsMale: !0
      }, this.validExtensions = [".doc", ".docx"], this.requestType = "full", this.vacancies = t.vacancies, this.refs = t.refs, this.model.AcceptTerms = !0, this.model.VacancyName = t.vacancy.name, this.model.VacancyCityName = t.vacancy.city
    }
    return e.$inject = ["$scope", "$model", "$http"], e.prototype.onFileChange = function(e) {
      var t = e.filename.substr(e.filename.lastIndexOf(".")),
        n = _.some(this.validExtensions, function(e) {
          return e == t
        });
      this.$scope.vacancyForm.Attachment.$setValidity("fileType", n)
    }, e.prototype.submit = function() {
      var e = this;
      this.processingAction || (this.processingAction = !0, this.$scope.vacancyForm.VacancyNameOther && (this.model.VacancyName = this.model.VacancyNameOther), this.$http.post("/career/vacancySend", this.model, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        transformRequest: function(e) {
          return $.param(e)
        }
      }).success(function(t) {
        e.applicationId = t.application, e.isSent = !0, ga("send", "pageview", "/vacancy-form-send-" + e.requestType), window.yaCounter19695820 && window.yaCounter19695820.hit("/vacancy-form-send-" + e.requestType)
      }))
    }, e
  }();
  e.VacancyDetails = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r, o) {
      this.$scope = e, this.$location = t, this.$model = n, this.cookieService = i, this.$http = r, this.$timeout = o, this.faqQuestions = n.faqQuestions, this.checkVisibleQuestionUsefulVote()
    }
    return e.$inject = ["$scope", "$location", "$model", "cookieService", "$http", "$timeout"], e.prototype.sendQuestionAppraisal = function(e, t) {
      var n = this;
      if (0 == t && $("#faq-popup-form").bPopup(), 1 != e.isUsefulQuestionClicked) {
        var i = (this.cookieService.get("faqVote") || "").split(".");
        if (e.isUsefulQuestionClicked = !0, !_.contains(i, e.id + "")) {
          var r = {
            questionId: e.id,
            isUseful: t
          };
          this.$http.post(Consts.Urls.faq.questionUseful, r).success(function(i) {
            if (i.success && i.data) {
              t ? e.positiveQuestionUseful = i.data : e.negativeQuestionUseful = i.data;
              var r = n.cookieService.get("faqVote");
              r ? r += "." + e.id : r = e.id;
              var o = {
                expires: n.$model.cookieExpire,
                path: n.$model.cookieUrl
              };
              n.cookieService.set("faqVote", r, o)
            }
          }).error(function() {
            e.isUsefulQuestionClicked = !1
          })
        }
      }
    }, e.prototype.openQuestion = function(e, t) {
      var n = $(e.currentTarget),
        i = $(n.parent().siblings(".question-opening")[n.index()]);
      if (n.hasClass("active")) i.toggle("normal"), $(n).removeClass("active");
      else {
        var r = $(".question-list > li.active");
        this.$timeout(function() {
          return r.click()
        }), i.toggle("normal"), $(n).addClass("active")
      }
      e.preventDefault()
    }, e.prototype.checkVisibleQuestionUsefulVote = function() {
      var e = this,
        t = this.cookieService.get("faqVote");
      if (t) {
        var n = t.split(".");
        _.each(n, function(t) {
          var n = parseInt(t),
            i = _.findWhere(e.faqQuestions, {
              id: n
            });
          i && (i.isUsefulQuestionClicked = !0)
        })
      }
    }, e
  }();
  e.FaqQuestionsListCtrl = t
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t, n, i, r, o, a) {
      var s = this;
      e.call(this, t, n, i, r, o, a), this.$timeout = a, a(function() {
        return s.slideDownSelectedQuestion()
      })
    }
    return __extends(t, e), t.$inject = ["$scope", "$location", "$model", "cookieService", "$http", "$timeout"], t.prototype.slideDownSelectedQuestion = function() {
      var e = this.$location.hash() || this.$model.selectedQuestionId;
      if (e) {
        var t = "#q_" + e,
          n = $(t);
        n.trigger("click");
        var i = $(".sticky").height() || $(".nav-panel.fixed").outerHeight();
        $("html, body").animate({
          scrollTop: n.offset().top - i
        }, 700)
      }
    }, t.prototype.openQuestion = function(t, n) {
      e.prototype.openQuestion.call(this, t, n), this.sendQuestionPreview(n)
    }, t.prototype.sendQuestionPreview = function(e) {
      this.$http.post(Consts.Urls.faq.questionPreview, {
        questionId: e
      })
    }, t
  }(e.FaqQuestionsListCtrl);
  e.FaqQuestionsBlockCtrl = t
}(Controllers || (Controllers = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Controllers;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.apps.faq, null, null)), this.model = {
        acceptTerms: !0
      }
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.Base.BaseAppCtrl);
  e.FaqRequestFormCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$http = e, this.refs = {
        cities: [],
        brands: [],
        models: [],
        enums: null
      }, this.showError = !1, this.data = {
        carKinds: function() {
          if (!i.refs.enums) return [];
          switch (i.model.carTypeId) {
            case 2:
              return i.refs.enums.truckType;
            case 3:
              return i.refs.enums.busType;
            case 4:
              return i.refs.enums.trailerType;
            case 5:
              return i.refs.enums.specialVehicleType;
            case 6:
              return i.refs.enums.commercialCarType;
            case 7:
              return i.refs.enums.selfPropelledEquipmentType
          }
        }
      }, this.model = new Models.Search.SearchParamSet, this.model.carTypeId = 1, t.$watch(function() {
        return i.model.carTypeId
      }, function() {
        e.get(Consts.Urls.search.filterRefs(i.model.carTypeId)).success(function(e) {
          i.refs = e, i.model.brand && _.any(i.refs.brands, function(e) {
            return e.id == i.model.brand
          }) && i.updateModels()
        })
      }), t.$watch(function() {
        return i.model.brand
      }, function(e, t) {
        t && (i.refs.models = [], i.model.model = null), i.updateModels()
      }), t.$watchCollection(function() {
        return i.getModelValues()
      }, function() {
        i.$http.post(Consts.Urls.search.post, i.getModel()).success(function(e) {
          i.searchCount = e.count, i.searchId = e.id
        })
      })
    }
    return e.$inject = ["$http", "$scope", "$timeout"], e.prototype.search = function() {
      this.showError = !0, this.model.brand && this.searchId && (location.href = "/auto/search/" + this.searchId + "#list")
    }, e.prototype.getModel = function() {
      var e = angular.extend(new Models.Search.SearchParamSet, this.model),
        t = Object.getOwnPropertyNames(e);
      for (var n in t) {
        var i = e[t[n]];
        i === !1 && "withDiscount" != t[n] && "isUsed" != t[n] && "europlanSale" != t[n] ? e[t[n]] = null : $.isArray(i) && 0 == i.length && (e[t[n]] = null)
      }
      return e
    }, e.prototype.updateModels = function() {
      var e = this;
      if (this.model.brand) {
        var t = this.model.brand;
        this.$http.get(Consts.Urls.search.models(this.model.carTypeId, this.model.brand)).success(function(n) {
          t == e.model.brand && (e.refs.models = n)
        })
      }
    }, e.prototype.getModelValues = function() {
      var e = [],
        t = this.getModel(),
        n = Object.getOwnPropertyNames(t);
      for (var i in n) {
        var r = t[n[i]];
        e.push(n[i]), e.push(r)
      }
      return e
    }, e
  }();
  e.HomeSearch = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$model = e, this.$http = t, this.apiDataService = n, this.model = new Models.SurveyModel, this.view = {
        formName: "SurveyForm",
        step: 0
      }, this.data = {
        regions: new Array
      }, this.model.campaign = e.utm_campaign, this.model.acceptTerms = !0, n.getRegions().then(function(e) {
        i.data.regions = e
      })
    }
    return e.$inject = ["$model", "$http", "apiDataService"], e.prototype.validateForm = function() {
      var e = this[this.view.formName];
      return AngularHelpers.setFormDirty(e), !e.$invalid
    }, e.prototype.submitRequest = function() {
      var e = this,
        t = this.model;
      this.$http.post(Consts.Urls.home.survey, t).then(function(t) {
        $(".to-top-block").click(), e.view.step = 1
      }, function(e) {
        console.error("submitRequest()", e)
      })
    }, e
  }();
  e.SurveyCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e) {
      var t = this;
      this.model = {
        price: 5e5,
        advance: 10,
        payment: 0
      }, this.data = {
        rate: .195,
        term: 60,
        oni: .03,
        sliderOptions: {
          price: {
            step: 1e5,
            min: 5e5,
            max: 1e7
          },
          advance: {
            step: 1,
            min: 10,
            max: 49
          }
        }
      }, e.$watchCollection(function() {
        return [t.model.price, t.model.advance]
      }, function() {
        return t.calculate()
      })
    }
    return e.$inject = ["$scope"], e.prototype.calculate = function() {
      var e = (Math.min(Math.max(this.data.sliderOptions.price.min, this.model.price), this.data.sliderOptions.price.max), Math.min(Math.max(this.data.sliderOptions.advance.min, this.model.advance), this.data.sliderOptions.advance.max));
      this.data.rate, this.data.term, this.data.oni;
      this.model.payment = this.model.price * ((100 - e) / 100 * Math.pow(1 + this.data.rate / 12, this.data.term) - this.data.oni) / (Math.pow(1 + this.data.rate / 12, this.data.term) - 1) * this.data.rate / 12
    }, e
  }();
  e.LeasingCalcCtrl = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e) {
      var t = this;
      this.model = {
        price: 3e5,
        advance: 10,
        payment: 0,
        term: 12,
        discount: 0,
        overpayment: 0
      }, this.data = {
        rate: .2,
        oni: .03,
        comission: 1e4,
        sliderOptions: {
          price: {
            step: 1e4,
            min: 3e5,
            max: 1e7
          },
          advance: {
            step: 1,
            min: 10,
            max: 49
          },
          term: {
            step: 1,
            min: 12,
            max: 60
          },
          discount: {
            step: 1,
            min: 0,
            max: 50
          }
        }
      }, e.$watchCollection(function() {
        return [t.model.price, t.model.advance, t.model.term, t.model.discount]
      }, function() {
        return t.calculate()
      })
    }
    return e.$inject = ["$scope"], e.prototype.calculate = function() {
      var e = (Math.min(Math.max(this.data.sliderOptions.price.min, this.model.price), this.data.sliderOptions.price.max), Math.min(Math.max(this.data.sliderOptions.advance.min, this.model.advance), this.data.sliderOptions.advance.max));
      Math.min(Math.max(this.data.sliderOptions.term.min, this.model.term), this.data.sliderOptions.term.max), Math.min(Math.max(this.data.sliderOptions.discount.min, this.model.discount), this.data.sliderOptions.discount.max), this.data.rate, this.data.oni, this.data.comission;
      this.model.payment = this.model.price * ((100 - this.model.discount - e) / 100 * Math.pow(1 + this.data.rate / 12, this.model.term) - this.data.oni) / (Math.pow(1 + this.data.rate / 12, this.model.term) - 1) * this.data.rate / 12, this.model.overpayment = (this.model.price * this.model.advance / 100 + this.model.term * this.model.payment - this.model.price) / this.model.price / this.model.term * 12 * 100
    }, e
  }();
  e.LeasingCalcCtrlInfiniti = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, i, r, o, a, s) {
      var l = this;
      this.$http = r, this.apiDataService = o, this.$rootScope = s, this.model = new Models.LflCalcModel, this.data = new n, o.getLflBrands(Enums.CarTypeEnum.PassengerCar).then(function(e) {
        l.data.brands = e;
        var t = _.find(l.data.brands, function(e) {
          return e.id == i.brandId
        });
        t && (l.model.brand = t)
      }), t.$watch(function() {
        return l.model.brand
      }, function() {
        l.model.brand ? (l.model.model = null, l.data.models = [], l.model.price = null, l.apiDataService.getLflModels(l.model.brand.id, Enums.CarTypeEnum.PassengerCar).then(function(e) {
          if (l.data.models = e, 1 == l.data.models.length && (l.model.model = l.data.models[0]), l.model.brand.id == i.brandId) {
            var t = _.find(l.data.models, function(e) {
              return e.id == i.modelId
            });
            t && (l.model.model = t)
          }
        })) : l.data.models = []
      }), t.$watch(function() {
        return l.model.model
      }, function() {
        l.model.brand ? l.calculate() : l.model.model = null
      }), t.$watch(function() {
        return Number(l.model.advance)
      }, _.debounce(function() {
        return l.calculate()
      }, 200)), t.$watch(function() {
        return Number(l.model.term)
      }, _.debounce(function() {
        return l.calculate()
      }, 200)), a.ready(function(e) {
        e && e.geolocation && e.geolocation.city && (l.model.userCityName = e.geolocation.city)
      })
    }
    return e.$inject = ["$element", "$scope", "$model", "$http", "apiDataService", "ymapsLoader", "$rootScope"], e.prototype.calculate = function() {
      var e = this;
      if (angular.isNumber(this.model.advance) || (this.model.advance = Number(this.model.advance)), angular.isNumber(this.model.term) || (this.model.term = Number(this.model.term)), this.model.brand && this.model.model && this.model.advance && this.model.term) {
        var t = {
          brandSafoId: this.model.brand.safoId,
          modelSafoId: this.model.model.safoId,
          advance: this.model.advance,
          term: this.model.term,
          cityName: this.model.userCityName
        };
        this.$http.get(Consts.Urls.lfl.calc, {
          params: t
        }).success(function(t) {
          t.success ? (e.data.sliderOptions.advance.min = t.data.advanceMin, e.data.sliderOptions.advance.max = t.data.advanceMax, e.model.advance < e.data.sliderOptions.advance.min && (e.model.advance = e.data.sliderOptions.advance.min), e.model.advance > e.data.sliderOptions.advance.max && (e.model.advance = e.data.sliderOptions.advance.max), e.model.term < 12 && (e.model.term = 12), e.model.term > 36 && (e.model.term = 36), e.model.price = t.data.price, e.model.leasingPayment = t.data.leasingPayment, e.model.creditPayment = t.data.creditPayment, e.model.profit = t.data.profit, e.model.vehicleId = t.data.vehicleId) : (e.model.price = null, e.model.leasingPayment = null, e.model.creditPayment = null, e.model.profit = null, e.model.vehicleId = null)
        }).error(function() {
          e.model.price = null, e.model.leasingPayment = null, e.model.creditPayment = null, e.model.profit = null, e.model.vehicleId = null
        })
      }
    }, e.prototype.submit = function() {
      this.$rootScope.$broadcast("calcSubmit", _.extend({}, this.model))
    }, e
  }();
  e.LflCalcCtrl = t;
  var n = function() {
    function e() {
      this.sliderOptions = {
        advance: new Models.SliderOptions,
        term: new Models.SliderOptions
      }, this.sliderOptions.advance.step = 1, this.sliderOptions.advance.min = 20, this.sliderOptions.advance.max = 49, this.sliderOptions.term.step = 1, this.sliderOptions.term.min = 12, this.sliderOptions.term.max = 36
    }
    return e
  }();
  e.LflCalcData = n
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.appService = n, this.$timeout = i, this.cities = [], this.branches = [], this.cityBranches = [], this.appNumber = "", this.isSent = !1, this.error = {
        message: void 0
      }, this.data = {
        city: "",
        commentary: "",
        branch: "",
        bankEmployee: ""
      }, this.model = {
        AcceptTerms: !0,
        Commentary: ""
      }, t.$watch(function() {
        return r.data
      }, function() {
        r.model.Commentary = (r.data.commentary || "") + "|" + (r.data.city || "") + "|" + (r.data.branch || "") + "|" + (r.data.bankEmployee || "")
      }, !0), t.$watch(function() {
        return r.data.city
      }, function(e) {
        r.cityBranches = r.branches.filter(function(t) {
          return t.city == e
        })
      }), e.get("/page/binbankBranches").success(function(e) {
        r.branches = e, r.cities = _.uniq(_(e).map(function(e) {
          return e.city
        }))
      })
    }
    return e.$inject = ["$http", "$scope", "appService", "$timeout"], e.prototype.submit = function() {
      var e = this;
      this.appService.leasingShort(this.model).success(function(t) {
        e.isSent = !0, t && (e.appNumber = t), e.$timeout(function() {
          return AngularHelpers.scrollTo("#result-message")
        })
      }).error(function(t) {
        e.isSent = !0, e.error = t.error
      })
    }, e
  }();
  e.Binbank = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n) {
      var i = this;
      this.$scope = e, this.$http = t, this.pager = {
        page: 1,
        perPage: 10,
        pagesCount: 0,
        setPage: function(e) {
          i.pager.page = e, i.loadData(e)
        }
      }, this.items = n.items, this.count = n.count, this.updatePageCount(), this.filter = {
        type: n.type,
        cancelationDate: null,
        number: null,
        createDate: null
      }, e.$watch(function() {
        return i.filter
      }, function(e, t) {
        e != t && (i.pager.page = 1, i.loadData(i.pager.page))
      }, !0)
    }
    return e.$inject = ["$scope", "$http", "$model"], e.prototype.updatePageCount = function() {
      this.pager.pagesCount = Math.ceil(this.count / this.pager.perPage)
    }, e.prototype.loadData = function(e) {
      var t = this;
      this.updatePageCount();
      var n = {
        type: this.filter.type,
        number: this.filter.number,
        page: e,
        cancelationDate: null,
        createDate: null
      };
      if (this.filter.cancelationDate) {
        var i = moment(this.filter.cancelationDate, "DD.MM.YYYY");
        i.isValid() && (n.cancelationDate = i.toDate())
      }
      if (this.filter.createDate) {
        var r = moment(this.filter.createDate, "DD.MM.YYYY");
        r.isValid() && (n.createDate = r.toDate())
      }
      this.$http.post("/portal/about/powerOfAttorneyItems", n).success(function(e) {
        t.count = e.count, t.items = e.items, t.updatePageCount()
      })
    }, e
  }();
  e.PowerOfAttorneyCtrl = t;
  var n = function() {
    function e() {}
    return e
  }();
  e.PowerOfAttorneyItem = n
}(Controllers || (Controllers = {}));
var VM;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.filter = new n, this.types = Enums.SpecialOfferType, this.models = null, this.specialOffers = [], this.isLoading = !1, this.totalCount = 0, this.page = 0, this.perPage = 45
      }
      return e
    }();
    e.Index = t;
    var n = function() {
      function e() {
        this.type = Enums.SpecialOfferType.Leasing, this.isPassenger = !1, this.isSpecial = !1, this.isTruck = !1, this.isEpProposal = !1, this.brandId = null, this.modelId = null, this.regionCode = null
      }
      return e
    }();
    e.Filter = n
  }(t = e.SpecialOffers || (e.SpecialOffers = {}))
}(VM || (VM = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      var r = this;
      this.$http = e, this.vm = new VM.SpecialOffers.Index, this.vm.filter = i, t.$watch("ctrl.vm.filter | json", function() {
        r.vm.page = 0, r.load()
      }), this.updateModels(this.vm.filter.brandId)
    }
    return e.$inject = ["$http", "$scope", "$timeout", "$model"], e.prototype.resetFilter = function() {
      this.vm.filter = new VM.SpecialOffers.Filter, this.vm.models = null
    }, e.prototype.onBrandChange = function(e) {
      this.updateModels(e)
    }, e.prototype.updateModels = function(e) {
      var t = this;
      e && this.$http.get("/api/data/models/0/" + e).success(function(e) {
        return t.vm.models = e
      })
    }, e.prototype.load = function() {
      var e = this;
      if (!(this.vm.isLoading || 0 != this.vm.page && this.vm.page * this.vm.perPage >= this.vm.totalCount)) {
        var t = _.extend({}, this.vm.filter, {
          page: this.vm.page,
          perPage: this.vm.perPage
        });
        this.vm.isLoading = !0, this.$http.post("/special-offers/get", t).success(function(t) {
          e.vm.page++, e.vm.totalCount = t.count, 1 == e.vm.page ? e.vm.specialOffers = t.offers : e.vm.specialOffers = e.vm.specialOffers.concat(t.offers)
        }).finally(function() {
          return e.vm.isLoading = !1
        })
      }
    }, e
  }();
  e.SpecialOffers_Index = t
}(Controllers || (Controllers = {}));
var VM;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.filter = new n, this.types = Enums.SpecialOfferType, this.models = null, this.specialOffers = [], this.isLoading = !1, this.isRendering = !1, this.isSent = !1, this.totalCount = 0, this.page = 0, this.perPage = 45, this.data = {
          firstName: null,
          lastName: null,
          email: null
        }
      }
      return e
    }();
    e.Print = t;
    var n = function() {
      function e() {
        this.type = Enums.SpecialOfferType.Leasing, this.isPassenger = !1, this.isSpecial = !1, this.isTruck = !1, this.isEpProposal = !1, this.brandId = null, this.modelId = null, this.regionCode = null
      }
      return e
    }();
    e.FilterPrint = n
  }(t = e.SpecialOffers || (e.SpecialOffers = {}))
}(VM || (VM = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i, r, o) {
      var a = this;
      this.$http = e, this.$window = r, this.cookieService = o, this.vm = new VM.SpecialOffers.Print, this.vm.filter = i, t.$watch("ctrl.vm.filter | json", function() {
        a.vm.page = 0, a.load()
      });
      var s = this.cookieService.get("europlan_employee_contacts");
      if (void 0 != s) {
        var l = (s || "").split(".");
        this.vm.data.firstName = decodeURIComponent(l[0]), this.vm.data.lastName = decodeURIComponent(l[1]), this.vm.data.email = l[2] + "@europlan.ru"
      }
    }
    return e.$inject = ["$http", "$scope", "$timeout", "$model", "$window", "cookieService"], e.prototype.resetFilter = function() {
      this.$window.location.reload()
    }, e.prototype.load = function() {
      var e = this;
      if (!(this.vm.isLoading || 0 != this.vm.page && this.vm.page * this.vm.perPage >= this.vm.totalCount)) {
        var t = _.extend({}, this.vm.filter, {
          page: this.vm.page,
          perPage: this.vm.perPage
        });
        this.vm.isLoading = !0, this.vm.isSent = !1, this.$http.post("/special-offers/get", t).success(function(t) {
          e.vm.page++, e.vm.totalCount = t.count, 1 == e.vm.page ? e.vm.specialOffers = t.offers : e.vm.specialOffers = e.vm.specialOffers.concat(t.offers)
        }).finally(function() {
          return e.vm.isLoading = !1
        })
      }
    }, e.prototype.pdf = function() {
      var e = this,
        t = _.extend({}, {
          body: document.body.innerHTML,
          email: this.vm.data.email
        });
      this.vm.isRendering = !0, this.$http.post("best-offers-list-pdf", t).success(function(e) {}).finally(function() {
        e.vm.isRendering = !1, e.vm.isSent = !0, ga("send", "event", "BestOffers", "email", "")
      })
    }, e.prototype.submit = function() {
      ga("send", "event", "BestOffers", "print", ""), this.$window.print()
    }, e
  }();
  e.SpecialOffers_Print = t
}(Controllers || (Controllers = {}));
var Controllers;
! function(e) {
  var t = function() {
    function e(e, t, n, i) {
      this.$scope = e, this.$http = t, this.step = 1, this.pause = !1, this.result = {}, this.byTag = {}, this.valuesByName = {}, this.isDisabled = function(e) {
        return e.id < this.data.currentQuestion.id || this.result.show
      }, this.questions = n, this.model = {
        email: i
      };
      var r = this.questions[0];
      r.show = !0, r.idx = 1, this.data = {
        num: 1,
        currentQuestion: r
      };
      var o = this;
      n.forEach(function(e) {
        e.values.forEach(function(t) {
          t.name = t.value.split(" ").join(""), o.valuesByName[e.systemValue + "_" + t.name] = t
        }), o.byTag[e.systemValue] = e
      }), e.$watch("ctrl.model | json", function() {
        o.pause = !0, o.result.lastStep = o.isValidForm() && !o.getNextItem(), o.pause = !1
      })
    }
    return e.$inject = ["$scope", "$http", "model", "email"], e.prototype.selectedTag = function(e) {
      var t = (this._sysValue(), this._currResult(), this);
      return _.find(this.model, function(n, i) {
        if (_.isObject(n)) return _.find(n, function(n, r) {
          var o = t.valuesByName[i + "_" + r];
          return n && o && o.tag == e
        })
      })
    }, e.prototype.goTo = function(e) {
      return this.byTag[e]
    }, e.prototype._sysValue = function() {
      return this.data.currentQuestion.systemValue
    }, e.prototype._currResult = function() {
      return this.model[this._sysValue()]
    }, e.prototype.getNextItem = function() {
      var e = this._sysValue(),
        t = this._currResult(),
        n = ["КакуюСхему"];
      if ($.inArray(e, n) != -1) return this.finishSurvey();
      switch (e) {
        case "ПланируетеЛиПокупать":
          return this.goTo("Да." != t.value ? "ПоКакойПричине" : "ВКакомКвартале");
        case "ВКакомКвартале":
          return this.goTo("КакиеВидыТС");
        case "ВажноеУсловиеФинансирования":
          return this.goTo("КакойГрафик");
        case "ПоКакойПричине":
          return this.goTo(this.selectedTag("none") ? "КогдаПланируете" : "ПланируетеПокупку2016");
        case "ПланируетеПокупку2016":
          return this.goTo("Да." != t.value ? this.finishSurvey() : "КакиеВидыТС");
        case "КогдаПланируете":
          return this.goTo("Не планирую вообще." == t.value ? this.finishSurvey() : "КакиеТипыТС")
      }
      var i = this;
      return _.find(this.questions, function(e) {
        return e.id > i.data.currentQuestion.id
      })
    }, e.prototype.scrollToSelector = function(e) {
      setTimeout(function() {
        var t = $(e).offset().top - 50;
        $("html, body").animate({
          scrollTop: t
        }, 500)
      }, 50)
    }, e.prototype.isValidForm = function() {
      var e = this.data.currentQuestion,
        t = this._currResult();
      return !!t && (!(t.other && !t.otherValue) && !("radio" == e.type && (!t.value || "other" == t.value && !t.otherValue) || "checkbox" == e.type && !_(_.values(t)).contains(!0)))
    }, e.prototype.finishSurvey = function() {
      if ($("#divBusinessSurvey").append($("#surveyResult")), !this.pause) {
        var e = {
            surveyId: this.questions[0].surveyId,
            modelJson: JSON.stringify({
              model: this.model
            })
          },
          t = this;
        this.$http.post("/survey/save", e).success(function() {
          t.result.show = !0, t.scrollToSelector(".end")
        })
      }
    }, e.prototype.showOther = function(e) {
      return 18 == e.id || 23 == e.id || 32 == e.id
    }, e.prototype.next = function() {
      var e = this.data.currentQuestion;
      if (e.error = !this.isValidForm(), !e.error) {
        var t = this.getNextItem();
        t && ($("#divBusinessSurvey").append($("#question" + t.systemValue)), t.show = !0, t.idx = ++this.data.num, this.data.currentQuestion = t, this.model[t.systemValue] = {}, this.scrollToSelector("#" + t.systemValue))
      }
    }, e.prototype.getQuestionValues = function(e) {
      return _.map(e.values, function(e) {
        return e.systemValue = e.tag || e.id, e
      })
    }, e
  }();
  e.BusinessSurveyCtrl = t
}(Controllers || (Controllers = {})), angular.module("dealer.web.app").directive("autoComplete", ["$timeout", function(e) {
    return function(t, n, i) {
      n.autocomplete({
        source: t[i.uiItems],
        select: function() {
          e(function() {
            n.trigger("input")
          }, 0)
        }
      })
    }
  }]), angular.module("dealer.web.app").directive("autoFocusOn", ["$timeout", function(e) {
    return {
      scope: {
        model: "=autoFocusOn"
      },
      restrict: "AC",
      link: function(t, n) {
        t.$watch("model", function(t) {
          t && e(function() {
            n[0].focus()
          }, 0)
        })
      }
    }
  }]), ngApp.main.directive("checkbox", function() {
    return {
      scope: {
        checkbox: "=",
        value: "@"
      },
      transclude: !0,
      template: '<label><input ng-checked="selected" type="checkbox" class="option-check gray xl"><span></span><ng-transclude></ng-transclude></label>',
      link: function(e, t, n) {
        var i = e.value || !0;
        void 0 !== n.default && void 0 === e.checkbox && (e.checkbox = i), t.find("input").bind("click", function() {
          this.attributes.disabled || e.$apply(function() {
            e.checkbox = e.checkbox == i ? void 0 : i
          })
        }), e.$watch("checkbox", function() {
          e.selected = e.checkbox == i
        })
      }
    }
  }), ngApp.main.directive("checklistModel", ["$parse", "$compile", function(e, t) {
    function n(e, t, n) {
      if (angular.isArray(e))
        for (var i = e.length; i--;)
          if (n(e[i], t)) return !0;
      return !1
    }

    function i(e, t, i) {
      return e = angular.isArray(e) ? e : [], n(e, t, i) || e.push(t), _.sortBy(e, function(e) {
        return e
      })
    }

    function r(e, t, n) {
      if (angular.isArray(e))
        for (var i = e.length; i--;)
          if (n(e[i], t)) {
            e.splice(i, 1);
            break
          }
      return e
    }

    function o(o, a, s) {
      function l(e, t) {
        var n = d(o.$parent);
        angular.isFunction(p) && (t === !0 ? p(o.$parent, i(n, e, v)) : p(o.$parent, r(n, e, v)))
      }

      function c(e, t) {
        return f && f(o) === !1 ? void l(h, o[s.ngModel]) : void(o[s.ngModel] = n(e, h, v))
      }
      var u = s.checklistModel;
      s.$set("checklistModel", null), t(a)(o), s.$set("checklistModel", u);
      var d = e(u),
        p = d.assign,
        m = e(s.checklistChange),
        f = e(s.checklistBeforeChange),
        h = s.checklistValue ? e(s.checklistValue)(o.$parent) : s.value,
        v = angular.equals;
      if (s.hasOwnProperty("checklistComparator"))
        if ("." == s.checklistComparator[0]) {
          var g = s.checklistComparator.substring(1);
          v = function(e, t) {
            return e[g] === t[g]
          }
        } else v = e(s.checklistComparator)(o.$parent);
      o.$watch(s.ngModel, function(e, t) {
        if (e !== t) {
          if (f && f(o) === !1) return void(o[s.ngModel] = n(d(o.$parent), h, v));
          l(h, e), m && m(o)
        }
      }), angular.isFunction(o.$parent.$watchCollection) ? o.$parent.$watchCollection(u, c) : o.$parent.$watch(u, c, !0)
    }
    return {
      restrict: "A",
      priority: 1e3,
      terminal: !0,
      scope: !0,
      compile: function(e, t) {
        if (("INPUT" !== e[0].tagName || "checkbox" !== t.type) && "MD-CHECKBOX" !== e[0].tagName && !t.btnCheckbox) throw 'checklist-model should be applied to `input[type="checkbox"]` or `md-checkbox`.';
        if (!t.checklistValue && !t.value) throw "You should provide `value` or `checklist-value`.";
        return t.ngModel || t.$set("ngModel", "checked"), o
      }
    }
  }]), angular.module("dealer.web.app").directive("dynamicName", ["$compile", "$parse", function(e, t) {
    return {
      restrict: "A",
      terminal: !0,
      priority: 1e5,
      link: function(n, i) {
        var r = t(i.attr("dynamic-name"))(n);
        i.removeAttr("dynamic-name"), i.attr("name", r), e(i)(n)
      }
    }
  }]), angular.module("dealer.web.app").directive("epRangeOutput", ["$timeout", function(e) {
    return {
      restrict: "A",
      scope: {
        epRangeOutput: "@",
        min: "@",
        max: "@",
        html: "@"
      },
      link: function(t, n, i, r) {
        t.$watch(function() {
          return t.epRangeOutput
        }, function() {
          var i, r = $(n).parent().width() - 30,
            o = (t.epRangeOutput - t.min) / (t.max - t.min);
          i = o < 0 ? 0 : o > 1 ? r : r * o, i += 15, n.html(t.html || t.epRangeOutput), n.css("left", i + "px"), e(function() {
            return n.css("margin-left", -n.width() / 2 + "px")
          })
        })
      }
    }
  }]), angular.module("dealer.web.app").directive("fileUpload", function() {
    return {
      restrict: "A",
      require: "ngModel",
      link: function(e, t, n, i) {
        $(t).fileupload({
          url: n.fileUpload,
          dataType: "json",
          done: function(t, n) {
            e.$apply(function() {
              i.$setViewValue(n.result.fileName)
            })
          },
          fail: function(e, t) {
            helpers.modal.alert("Не удалось загрузить файл на сервер.")
          }
        })
      }
    }
  }), String.prototype.splice = function(e, t, n) {
    return this.slice(0, e) + n + this.slice(e + Math.abs(t))
  }, angular.module("dealer.web.app").directive("numberInput", function() {
    return {
      restrict: "A",
      scope: {
        field: "=numberInput",
        range: "=range"
      },
      replace: !0,
      template: '<input type="text" ng-model="tmpField"></input>',
      link: function(e, t, n) {
        $(t).on("keydown", function(e) {
          var t = e.which || e.keyCode;
          return !e.shiftKey && !e.altKey && !e.ctrlKey && t >= 48 && t <= 57 || t >= 96 && t <= 105 || 8 == t || 9 == t || 13 == t || 35 == t || 36 == t || 37 == t || 39 == t || 46 == t || 45 == t
        });
        var i = function(n) {
          void 0 === n && (n = !1), e.tmpField = e.tmpField || "";
          var i = t.find("input");
          for (i.val();
            "0" == e.tmpField.charAt(0);) e.tmpField = e.tmpField.substr(1);
          e.tmpField = e.tmpField.replace(/[^\d.\',']/g, "");
          var r = parseInt(e.tmpField);
          e.range && r > e.range.max && (r = e.range.max, e.tmpField = r.toString()), !e.range || r >= e.range.min ? e.field = r : e.range && n && r < e.range.min && (r = e.range.min, e.tmpField = r.toString());
          var o = e.tmpField.indexOf(".");
          o >= 0 && (e.tmpField = e.tmpField.slice(0, o + 3));
          var a = e.tmpField.split("."),
            s = a[0],
            l = a[1];
          if (s = s.replace(/[^\d]/g, ""), s.length > 3)
            for (var c = Math.floor(s.length / 3); c > 0;) {
              var u = s.indexOf(" ");
              u < 0 && (u = s.length), u - 3 > 0 && (s = s.splice(u - 3, 0, " ")), c--
            }
          l = void 0 === l ? "" : "." + l;
          var d = s + l;
          e.tmpField = d
        };
        i(), $(t).bind("keyup", function() {
          return e.$apply(function() {
            return i()
          })
        }), e.$watch("field", function(t) {
          e.tmpField = e.field.toString(), i()
        }), t.on("blur", function() {
          return e.$apply(function() {
            i(!0)
          })
        })
      }
    }
  }), angular.module("dealer.web.app").directive("preventInvalidFormSubmit", function() {
    return {
      require: "^form",
      link: function(e, t, n, i) {
        t.bind("submit", function() {
          var t = e[n.name];
          return !t.$invalid
        })
      }
    }
  }), angular.module("dealer.web.app").directive("radio", function() {
    return {
      scope: {
        radio: "=",
        value: "@"
      },
      transclude: !0,
      template: '<span class="radio" style="cursor:pointer" data-styled="1" ng-class="{\'radio-selected\': selected}" ></span> <span class="radio-label" style="cursor:pointer" ng-transclude></span>',
      link: function(e, t, n) {
        var i = e.value;
        "true" === i && (i = !0), "false" === i && (i = !1), void 0 === n.default || void 0 !== e.radio && null !== e.radio || (e.radio = i), t.bind("click", function() {
          this.attributes.disabled || e.$apply(function() {
            e.radio = i
          })
        }), e.$watch("radio", function() {
          e.selected = e.radio == i
        })
      }
    }
  }), angular.module("dealer.web.app").directive("setFormDirty", ["formService", function(e) {
    return {
      require: "^form",
      replace: !1,
      template: "",
      link: function(t, n, i, r) {
        n.on("click", function() {
          e.setFormDirty(r)
        })
      }
    }
  }]), angular.module("dealer.web.app").directive("submitIfValid", ["formService", "$parse", "scrollService", "$window", function(e, t, n, i) {
    return {
      require: "^form",
      replace: !1,
      template: "",
      link: function(r, o, a, s) {
        o.on("click", function(l) {
          r.$apply(function() {
            if (e.setFormDirty(s), s.$valid) {
              var c = t(a.submitIfValid);
              c(r, {
                $event: l
              })
            } else {
              var u = o.parents("[ng-form]").find(".ng-invalid").first();
              null != u.attr("chosen") && (u = o.parents("[ng-form]").find("#" + u.attr("name") + "_chosen")), u.offset().top < i.scrollY && n.scrollTo(u)
            }
          })
        })
      }
    }
  }]), angular.module("dealer.web.app").directive("submitIfValidAsync", ["formService", "$parse", function(e, t) {
    return {
      require: "^form",
      replace: !1,
      template: "",
      link: function(n, i, r, o) {
        i.on("click", function(i) {
          n.$apply(function() {
            return e.setFormDirty(o)
          });
          var a = n.$watch(function() {
            return o.$pending
          }, function(e) {
            var s = o.$valid;
            if (!e && (a(), s)) {
              var l = t(r.submitIfValidAsync);
              l(n, {
                $event: i
              })
            }
          })
        })
      }
    }
  }]), angular.module("dealer.web.app").directive("asyncPhoneNumber", ["validationService", "$q", function(e, t) {
    return {
      require: ["ngModel", "^form"],
      link: function(n, i, r, o) {
        var a = o[0],
          s = o[1],
          l = function(t) {
            return e.validatePhone(t)
          };
        a.$asyncValidators.asyncPhoneNumber = function(e) {
          return t(function(t, n) {
            s.errorMessages_asyncPhoneNumber = void 0, l(e).then(function(e) {
              console.log("success..."), t()
            }, function(e) {
              console.log("reject..."), s.errorMessages_asyncPhoneNumber = e.description, n(e)
            })
          })
        }, r.$observe("asyncPhoneNumber", function() {
          a.$validate()
        })
      }
    }
  }]), angular.module("dealer.web.app").directive("dynamicValidationMessage", function() {
    var e = {
      required: "Необходимо заполнить это поле.",
      minlength: "Длина поля должна быть не меньше {0} символов.",
      maxlength: "Длина поля должна быть не больше {0} символов.",
      pattern: "Пожалуйста, проверьте это поле.",
      email: "Введите в поле правильный адрес email",
      date: "Пожалуйста, введите правильную дату",
      number: "Поле должно содержать число",
      digit: "Поле должно содержать цифры"
    };
    return {
      scope: {
        for: "@"
      },
      require: "^form",
      replace: !1,
      template: "",
      link: function(t, n, i, r) {
        var o = r.$name,
          a = t.for,
          s = o + '["' + a + '"]';
        t[o] || (s = "$parent." + s), t.$watch("[" + s + ".$error, " + s + ".$dirty] | json", function() {
          var r = t[o] || t.$parent[o],
            s = r[a];
          if (s) {
            var l = s.$invalid && s.$dirty;
            n.css("display", l ? "" : "none");
            var c = "";
            if (l) {
              s.$setViewValue(s.$viewValue);
              var u = s.$error;
              for (var d in u)
                if (u.hasOwnProperty(d)) {
                  var p = i[d] || e[d];
                  if (u[d] && p) {
                    if ("minlength" == d || "maxlength" == d) {
                      var m = $('[name="' + o + '"]').find('input[name="' + a + '"]').attr("ng-" + d);
                      p = p.replace("{0}", m)
                    }
                    c += p + "<br/>"
                  }
                }
            }
            n.addClass(i.class || "text-error"), n.html(c)
          }
        })
      }
    }
  }), angular.module("dealer.web.app").directive("epEmail", function() {
    return {
      require: "ngModel",
      link: {
        pre: function(e, t, n, i) {
          $(t).prop("overwrite-email", !0)
        },
        post: function(e, t, n, i) {
          i.$parsers.unshift(function(e) {
            var t = void 0 == e || "" === e || /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(e);
            return i.$setValidity("epEmail", t), e
          })
        }
      }
    }
  }), angular.module("dealer.web.app").directive("numbersOnly", function() {
    return {
      require: "ngModel",
      link: function(e, t, n, i) {
        i.$parsers.push(function(e) {
          if (void 0 == e) return "";
          var t = e.toString().replace(/[^0-9]/g, "");
          return t != e && (i.$setViewValue(t), i.$render()), t
        })
      }
    }
  }), angular.module("dealer.web.app").directive("koNumbersOnly", function() {
    return {
      restrict: "A",
      link: function(e, t, n) {
        $(t).on("keydown", function(e) {
          var t = e.which || e.keyCode;
          return !e.shiftKey && !e.altKey && !e.ctrlKey && t >= 48 && t <= 57 || t >= 96 && t <= 105 || 8 == t || 9 == t || 13 == t || 35 == t || 36 == t || 37 == t || 39 == t || 46 == t || 45 == t
        })
      }
    }
  }), angular.module("dealer.web.app").directive("numbersRange", function() {
    return {
      scope: {
        rangeParams: "=numbersRange"
      },
      require: "ngModel",
      link: function(e, t, n, i) {
        t.on("blur", function() {
          e.$apply(function() {
            var n = parseInt(angular.element(t).val());
            if (isNaN(n) || n < e.rangeParams.min) {
              var r = e.rangeParams.min.toString();
              i.$setViewValue(r), i.$render()
            }
          })
        }), i.$parsers.push(function(t) {
          if (void 0 == t) return "";
          var n = parseInt(t),
            r = t.replace(/[^0-9]/g, "");
          return r != t && (i.$setViewValue(r), i.$render()), n > e.rangeParams.max && (r = e.rangeParams.max.toString(), i.$setViewValue(r), i.$render()), r
        })
      }
    }
  }), angular.module("dealer.web.app").directive("onlyCyrillic", function() {
    return {
      require: "ngModel",
      link: function(e, t, n, i) {
        i.$validators.onlyCyrillic = function(e, t) {
          var n = void 0 == t || "" === t || /^[а-яА-ЯеЁё\-]+$/.test(t);
          return n
        }, n.$observe("onlyCyrillic", function() {
          i.$validate()
        })
      }
    }
  }), angular.module("dealer.web.app").directive("onlyCyrillicLatin", function() {
    return {
      require: "ngModel",
      link: function(e, t, n, i) {
        i.$parsers.unshift(function(e) {
          var t = void 0 == e || "" === e || /^[а-яА-ЯеЁёa-zA-Z]+$/.test(e);
          return i.$setValidity("onlyCyrillicLatin", t), e
        })
      }
    }
  }), angular.module("dealer.web.app").directive("onlyNumeric", function() {
    return {
      require: "ngModel",
      link: function(e, t, n, i) {
        i.$validators.onlyNumeric = function(e, t) {
          var n = void 0 == t || "" === t || /^\d+$/.test(t);
          return n
        }, n.$observe("onlyNumeric", function() {
          i.$validate()
        })
      }
    }
  }),
  function(e) {
    "use strict";
    e.module("dealer.web.app").directive("validationMessage", ["$parse", function(e) {
      var t = {
        required: "Необходимо заполнить это поле",
        minlength: "Длина поля должна быть не меньше {0} символов.",
        maxlength: "Длина поля должна быть не больше {0} символов.",
        pattern: "Пожалуйста, проверьте это поле",
        email: "Введите в поле правильный адрес email",
        epEmail: "Введите в поле правильный адрес email",
        date: "Пожалуйста, введите правильную дату",
        number: "Поле должно содержать число",
        digit: "Поле должно содержать цифры",
        mask: "Пожалуйста, проверьте это поле",
        onlyCyrillic: "Пожалуйста, проверьте это поле",
        onlyCyrillicLatin: "Пожалуйста, проверьте это поле",
        onlyNumeric: "Поле должно содержать целое число",
        invalidRegion: "Данный регион не обслуживается",
        invalidBrand: "Данная марка не финансируется",
        invalidModel: "Данная модель не финансируется",
        smsSendMaxCountExceeded: "Превышено максимальное количество смс",
        smsSendFailed: "Не удалось отправить код подтверждения",
        smsrequired: "Необходимо получить код подтверждения",
        smsCodeInvalid: "Код подтверждения указан неверно",
        smsCodeError: "При проверке кода произошла ошибка",
        asyncPhoneNumber: null
      };
      return {
        require: "^form",
        replace: !1,
        template: "",
        link: function(n, i, r, o) {
          function a(t, n) {
            return e(n)(t)
          }
          var s = o.$name,
            l = r.for,
            c = s + '["' + l + '"]';
          n.$watch("[" + c + ".$error, " + c + ".$dirty] | json", function() {
            console.log("watch: " + l);
            var e = a(n, s),
              o = a(e, l);
            if (o) {
              var c = o.$invalid && o.$dirty;
              i.css("display", c ? "" : "none");
              if (c) {
                var u = o.$error;
                i.siblings('[name="' + l + '"]').addClass("error-field");
                for (var d in u)
                  if (u.hasOwnProperty(d)) {
                    var p = r[d] || t[d] || e["errorMessages_" + d];
                    if (u[d] && p) {
                      if ("minlength" == d || "maxlength" == d) {
                        var m = $('[name="' + s + '"]').find('input[name="' + l + '"]').attr("ng-" + d);
                        p = p.replace("{0}", m)
                      }
                      return i.addClass(r.class || "text-error"), void i.html(p)
                    }
                  }
              } else i.siblings('[name="' + l + '"]').removeClass("error-field")
            }
          })
        }
      }
    }])
  }(angular), angular.module("dealer.web.app").directive("owlCarousel", ["$parse", "$timeout", function(e, t) {
    var n = ["items", "margin", "loop", "center", "mouseDrag", "touchDrag", "pullDrag", "freeDrag", "merge", "mergeFit", "autoWidth", "startPosition", "URLhashListener", "nav", "navRewind", "navText", "slideBy", "dots", "dotsEach", "dotData", "lazyLoad", "lazyContent", "autoplay", "autoplayTimeout", "autoplayHoverPause", "smartSpeed", "fluidSpeed", "autoplaySpeed", "dotsSpeed", "dragEndSpeed", "callbacks", "responsive", "responsiveRefreshRate", "responsiveBaseElement", "responsiveClass", "video", "videoHeight", "videoWidth", "animateOut", "animateIn", "fallbackEasing", "info", "nestedItemSelector", "itemElement", "stageElement", "navContainer", "dotsContainer", "themeClass", "baseClass", "itemClass", "centerClass", "activeClass", "navContainerClass", "navClass", "controlsClass", "dotClass", "dotsClass", "autoHeightClass", "onInitialize", "onInitialized", "onResize", "onResized", "onRefresh", "onRefreshed", "onDrag", "onDragged", "onTranslate", "onTranslated", "onChange", "onChanged", "onStopVideo", "onPlayVideo", "onLoadLazy", "onLoadedLazy"];
    return {
      restrict: "A",
      transclude: !0,
      link: function(t, i, r, o, a) {
        for (var s = {
            dots: !1,
            loop: !1,
            responsiveClass: !0,
            responsive: {
              0: {
                items: 1,
                nav: !0
              },
              992: {
                items: 1,
                nav: !1,
                loop: !1,
                margin: 30
              }
            }
          }, l = $(i), c = null, u = r.owlCarousel, d = 0; d < n.length; d++) {
          var p = n[d];
          void 0 !== r[p] && (s[p] = e(r[p])())
        }
        t.$watchCollection(u, function(e, t) {
          c && c.destroy(), l.empty();
          for (var n in e) a(function(t, i) {
            i.item = e[n], l.append(t[1])
          });
          s.responsive[992].items = e.length, l.data("owl.carousel", null), l.owlCarousel(s), c = l.data("owlCarousel")
        })
      }
    }
  }]);
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.RegisterOrgVm = t
  }(t = e.Account || (e.Account = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.RegisterPersonVm = t
  }(t = e.Account || (e.Account = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.Equipment = t
  }(t = e.Advert || (e.Advert = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.AdvertInfo = t
  }(t = e.Advert || (e.Advert = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.AdvertList = t
  }(t = e.Advert || (e.Advert = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.sortBy = null, this.brandId = null, this.modelId = null, this.year = null, this.cityId = null, this.moderationState = null
      }
      return e
    }();
    e.AdvertListFilter = t
  }(t = e.Advert || (e.Advert = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.AdvertListItem = t
  }(t = e.Advert || (e.Advert = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.acceptTerms = !0
      }
      return e
    }();
    e.CpaRegionModelAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.title = helpers.page.title, this.url = helpers.page.url
      }
      return e
    }();
    e.EntryPoint = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.FaqAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.FeedbackInvestorAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.FuelCardAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.clientType = 0, this.osago = void 0, this.dosago = void 0, this.casco = void 0, this.inCredit = !0, this.driversCountLimited = !0, this.drivers = []
      }
      return e
    }();
    e.InsuranceAppModel = t;
    var t;
    ! function(e) {
      var t = function() {
        function e() {}
        return e
      }();
      e.Driver = t
    }(t = e.InsuranceAppModel || (e.InsuranceAppModel = {}))
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function t() {
        this.applicationKind = Enums.ApplicationKind.LeasingShortRegular, this.acceptTerms = !0, this.entryPoint = new e.EntryPoint
      }
      return t
    }();
    e.LeasingShortAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function t() {
        this.entryPoint = new e.EntryPoint, this.isUsed = !1, this.acceptTerms = !0
      }
      return t
    }();
    e.LflAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function t() {
        this.acceptTerms = !0, this.entryPoint = new e.EntryPoint
      }
      return t
    }();
    e.CatalogAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.RbaAppModel = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e(e) {
        this.response = e
      }
      return e
    }();
    e.SubmitServerResult = t
  }(t = e.Applications || (e.Applications = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.BidVm = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.LotVm = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Models;
! function(e) {
  var t;
  ! function(t) {
    var n = function(e) {
      function t() {
        e.call(this), this.storagedFileIds = []
      }
      return __extends(t, e), t
    }(e.Auction.LotVm);
    t.EditLotVm = n
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.Image = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.LotList = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.sortBy = null, this.brand = null, this.model = null, this.year = null, this.city = null, this.status = null, this.manager = null, this.suzId = null, this.lotId = null
      }
      return e
    }();
    e.LotListFilter = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.LotListItem = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.SubscribeVm = t
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Models;
! function(e) {
  var t;
  ! function(t) {
    var n = function(e) {
      function t() {
        e.apply(this, arguments)
      }
      return __extends(t, e), t
    }(e.Auction.LotVm);
    t.ViewLotVm = n
  }(t = e.Auction || (e.Auction = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.CarLinkVm = t
  }(t = e.Auto || (e.Auto = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {
        this.middleName = !0
      }
      return e
    }();
    e.ContactsRequestModel = t
  }(t = e.Auto || (e.Auto = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.SimilarCarModel = t
  }(t = e.Auto || (e.Auto = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.FaqQuestion = t
  }(t = e.Faq || (e.Faq = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.SearchParamSet = t
  }(t = e.Search || (e.Search = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    ! function(e) {
      e[e.ButtonClick = 0] = "ButtonClick"
    }(e.UserInterestActionEnum || (e.UserInterestActionEnum = {}));
    e.UserInterestActionEnum
  }(t = e.UserInterests || (e.UserInterests = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.UserInterestItem = t
  }(t = e.UserInterests || (e.UserInterests = {}))
}(Models || (Models = {}));
var Models;
! function(e) {
  var t;
  ! function(e) {
    var t = function() {
      function e() {}
      return e
    }();
    e.Modification = t;
    var n = function() {
      function e() {}
      return e
    }();
    e.BodyDefinition = n;
    var i = function() {
      function e() {}
      return e
    }();
    e.LengthDefinition = i;
    var r = function() {
      function e() {}
      return e
    }();
    e.ChassisDefinition = r;
    var o = function() {
      function e() {}
      return e
    }();
    e.EngineDefinition = o;
    var a = function() {
      function e() {}
      return e
    }();
    e.PowerDefinition = a;
    var s = function() {
      function e() {}
      return e
    }();
    e.ImageInfo = s,
      function(e) {
        e[e.PassengerCar = 9] = "PassengerCar"
      }(e.VehicleTypes || (e.VehicleTypes = {}));
    e.VehicleTypes;
    ! function(e) {
      e[e.Main = 1] = "Main", e[e.Front = 2] = "Front", e[e.Rear = 3] = "Rear", e[e.Right = 4] = "Right", e[e.Left = 5] = "Left", e[e.Interior = 6] = "Interior"
    }(e.ImageViews || (e.ImageViews = {}));
    e.ImageViews;
    ! function(e) {
      e[e.Manual = 1] = "Manual", e[e.Automatic = 2] = "Automatic", e[e.Robotic = 3] = "Robotic", e[e.Variator = 4] = "Variator"
    }(e.Gearboxes || (e.Gearboxes = {}));
    e.Gearboxes;
    ! function(e) {
      e[e.Rear = 1] = "Rear", e[e.Front = 2] = "Front", e[e.Full = 3] = "Full"
    }(e.Drives || (e.Drives = {}));
    e.Drives;
    ! function(e) {
      e[e.Offroad = 1] = "Offroad", e[e.Coupe = 2] = "Coupe", e[e.Cabriolet = 3] = "Cabriolet", e[e.Roadster = 4] = "Roadster", e[e.Minivan = 5] = "Minivan", e[e.Minibus = 6] = "Minibus", e[e.Pickup = 7] = "Pickup", e[e.Sedan = 8] = "Sedan", e[e.EstateCar = 9] = "EstateCar", e[e.Caravan = 10] = "Caravan", e[e.Combi = 11] = "Combi", e[e.Hatchback = 12] = "Hatchback", e[e.Chassis = 13] = "Chassis"
    }(e.BodyTypes || (e.BodyTypes = {}));
    e.BodyTypes;
    ! function(e) {
      e[e.Gasoline = 1] = "Gasoline", e[e.Diesel = 2] = "Diesel", e[e.Hybrid = 3] = "Hybrid", e[e.Electric = 4] = "Electric"
    }(e.EngineTypes || (e.EngineTypes = {}));
    var l = (e.EngineTypes, function() {
      function e() {}
      return e
    }());
    e.MassDefinition = l;
    var c = function() {
      function e() {}
      return e
    }();
    e.OptionDefinition = c;
    var u = function() {
      function e() {}
      return e
    }();
    e.Colors = u;
    var d = function() {
      function e() {}
      return e
    }();
    e.Color = d
  }(t = e.Vt || (e.Vt = {}))
}(Models || (Models = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Models;
! function(e) {
  var t;
  ! function(t) {
    var n = function(e) {
      function t() {
        e.apply(this, arguments)
      }
      return __extends(t, e), t
    }(e.NameWithId);
    t.ModificationInfo = n
  }(t = e.Vt || (e.Vt = {}))
}(Models || (Models = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.api.advert.save)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.AdvertSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.apps.feedbackInvestor)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.FeedbackInvestorAppSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.apps.fuelCard, Consts.AnalyticTracks.fuelCardForm.send, Consts.AnalyticTracks.fuelCardForm.decline)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.FuelCardAppSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.apps.leasingShort, function(e) {
        e.serverResult && e.serverResult.pushRequired === !1 || analytics.trackLeasing(e.model.phone, e.serverResult.appNumber, e.serverResult.sourceTrackString, e.serverResult.lastSource)
      }, Consts.AnalyticTracks.leasingForm.decline)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.LeasingShortAppSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.apps.lfl, Consts.AnalyticTracks.lflForm.send, Consts.AnalyticTracks.lflForm.decline)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.LflAppSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      var n = this;
      e.call(this, t, Consts.Urls.apps.catalogApp, function(e) {
        return n.trackSubmit(e)
      }, function() {
        return n.trackDecline()
      })
    }
    return __extends(t, e), t.$inject = ["$element"], t.prototype.submit = function(t) {
      return this._isLegal = t.isLegal, this._isLeasing = t.isLeasing, e.prototype.submit.call(this, t)
    }, t.prototype.trackSubmit = function(e) {
      this._isLeasing && (e.serverResult && e.serverResult.pushRequired === !1 || (this._isLegal ? analytics.trackLeasing(e.model.phone, e.serverResult.appNumber, e.serverResult.sourceTrackString, e.serverResult.lastSource) : analytics.dataLayer(Consts.AnalyticTracks.lflLongForm.send)))
    }, t.prototype.trackDecline = function() {
      this._isLeasing && (this._isLegal ? analytics.dataLayer(Consts.AnalyticTracks.leasingLongForm.decline) : analytics.dataLayer(Consts.AnalyticTracks.lflLongForm.decline))
    }, t
  }(e.AppBaseSubmitter);
  e.LongAppSubmitter = t
}(Services || (Services = {}));
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Services;
! function(e) {
  var t = function(e) {
    function t(t) {
      e.call(this, t, Consts.Urls.apps.rba, function(e) {
        e.serverResult && e.serverResult.pushRequired === !1 || analytics.trackLeasing(e.model.phone, e.serverResult.appNumber, e.serverResult.sourceTrackString, e.serverResult.lastSource)
      }, Consts.AnalyticTracks.leasingForm.decline)
    }
    return __extends(t, e), t.$inject = ["$element"], t
  }(e.AppBaseSubmitter);
  e.RbaAppSubmitter = t
}(Services || (Services = {})), angular.module("dealer.web.app").component("inviteAuctionOrg", {
  templateUrl: "/components/account/invite-auction-org/invite-auction-org.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.Account.InviteAuctionOrgController(e, t, n)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t;
  ! function(e) {
    var t = function(e) {
      function t(t, n, i) {
        var r = this;
        e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.account.inviteAuctionOrg), Models.Account.RegisterOrgVm), this.$element = t, this.apiDataService = i, this.data = {
          citys: null
        }, this.apiDataService.getCities().then(function(e) {
          r.data.citys = e
        }), this.submitter.onSuccess().on(function(e) {
          return r.notifier.success("Заявка отправлена")
        }), this.submitter.onDecline().on(function(e) {
          return r.notifier.error("При отправке возникла ошибка")
        })
      }
      return __extends(t, e), t.$inject = ["$element", "$scope", "apiDataService"], t.prototype.showError = function(e) {
        e.status == Enums.AppSubmitStatusEnum.Validation ? this.notifier.error(e.message) : this.notifier.error("При отправке возникла ошибка")
      }, t
    }(Controllers.Base.BaseAppCtrl);
    e.InviteAuctionOrgController = t
  }(t = e.Account || (e.Account = {}))
}(Components || (Components = {})), angular.module("dealer.web.app").component("inviteAuctionPerson", {
  templateUrl: "/components/account/invite-auction-person/invite-auction-person.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.Account.InviteAuctionPersonController(e, t, n)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t;
  ! function(e) {
    var t = function(e) {
      function t(t, n, i) {
        var r = this;
        e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.account.inviteAuctionPerson), Models.Account.RegisterPersonVm), this.$element = t, this.apiDataService = i, this.data = {
          citys: null
        }, this.apiDataService.getCities().then(function(e) {
          r.data.citys = e
        }), this.submitter.onSuccess().on(function(e) {
          return r.notifier.success("Заявка отправлена")
        }), this.submitter.onDecline().on(function(e) {
          return r.notifier.error("При отправке возникла ошибка")
        })
      }
      return __extends(t, e), t.$inject = ["$element", "$scope", "apiDataService"], t.prototype.showError = function(e) {
        e.status == Enums.AppSubmitStatusEnum.Validation ? this.notifier.error(e.message) : this.notifier.error("При отправке возникла ошибка")
      }, t
    }(Controllers.Base.BaseAppCtrl);
    e.InviteAuctionPersonController = t
  }(t = e.Account || (e.Account = {}))
}(Components || (Components = {})), angular.module("dealer.web.app").component("registerAuctionOrg", {
  templateUrl: "/components/account/register-auction-org/register-auction-org.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.Account.RegisterAuctionOrgController(e, t, n)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t;
  ! function(e) {
    var t = function(e) {
      function t(t, n, i) {
        var r = this;
        e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.account.registerAuctionOrg), Models.Account.RegisterOrgVm), this.$element = t, this.apiDataService = i, this.data = {
          citys: null
        }, this.apiDataService.getCities().then(function(e) {
          r.data.citys = e
        }), this.submitter.onSuccess().on(function(e) {
          return r.notifier.success("Пользователь '" + e.serverResult.response + "' зарегистрирован")
        }), this.submitter.onDecline().on(function(e) {
          return r.notifier.error("При сохранении возникла ошибка")
        })
      }
      return __extends(t, e), t.$inject = ["$element", "$scope", "apiDataService"], t.prototype.showError = function(e) {
        e.status == Enums.AppSubmitStatusEnum.Validation ? this.notifier.error(e.message) : this.notifier.error("При сохранении возникла ошибка")
      }, t
    }(Controllers.Base.BaseAppCtrl);
    e.RegisterAuctionOrgController = t
  }(t = e.Account || (e.Account = {}))
}(Components || (Components = {})), angular.module("dealer.web.app").component("registerAuctionPerson", {
  templateUrl: "/components/account/register-auction-person/register-auction-person.html",
  controller: ["$element", "$scope", "apiDataService", function(e, t, n) {
    return new Components.Account.RegisterAuctionPersonController(e, t, n)
  }]
});
var __extends = this && this.__extends || function(e, t) {
    function n() {
      this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  },
  Components;
! function(e) {
  var t;
  ! function(e) {
    var t = function(e) {
      function t(t, n, i) {
        var r = this;
        e.call(this, t, new Services.AppBaseSubmitter(t, Consts.Urls.api.account.registerAuctionPerson), Models.Account.RegisterPersonVm), this.$element = t, this.apiDataService = i, this.data = {
          citys: null
        }, this.apiDataService.getCities().then(function(e) {
          r.data.citys = e
        }), this.submitter.onSuccess().on(function(e) {
          return r.notifier.success("Пользователь зарегистрирован")
        }), this.submitter.onDecline().on(function(e) {
          return r.notifier.error("При сохранении возникла ошибка")
        })
      }
      return __extends(t, e), t.$inject = ["$element", "$scope", "apiDataService"], t.prototype.showError = function(e) {
        e.status == Enums.AppSubmitStatusEnum.Validation ? this.notifier.error(e.message) : this.notifier.error("При сохранении возникла ошибка")
      }, t
    }(Controllers.Base.BaseAppCtrl);
    e.RegisterAuctionPersonController = t
  }(t = e.Account || (e.Account = {}))
}(Components || (Components = {})), angular.module("dealer.web.app").component("appCpaRegionModelBottomForm", {
  templateUrl: "/components/app-cpa-region-model/app-cpa-region-model-bottom-form/app-cpa-region-model-bottom-form.html",
  controller: ["$element", "$scope", "ymapsLoader", "smsService", "apiDataService", "scrollService", function(e, t, n, i, r, o) {
    return new Components.AppCpaRegionModelController(e, t, n, i, r, o)
  }]
}), angular.module("dealer.web.app").component("appCpaRegionModelForm", {
  templateUrl: "/components/app-cpa-region-model/app-cpa-region-model-form/app-cpa-region-model-form.html",
  controller: ["$element", "$scope", "ymapsLoader", "smsService", "apiDataService", "scrollService", function(e, t, n, i, r, o) {
    return new Components.AppCpaRegionModelController(e, t, n, i, r, o)
  }]
}), angular.module("dealer.web.app").component("appCpaRegionModelModalForm", {
  templateUrl: "/components/app-cpa-region-model/app-cpa-region-model-modal-form/app-cpa-region-model-modal-form.html",
  controller: ["$element", "$scope", "ymapsLoader", "smsService", "apiDataService", "scrollService", function(e, t, n, i, r, o) {
    return new Components.AppCpaRegionModelController(e, t, n, i, r, o)
  }]
});
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.lazyframe = t()
}(this, function() {
  "use strict";
  var e = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
      }
      return e
    },
    t = function() {
      function t(t) {
        if (d = e({}, v, arguments.length <= 1 ? void 0 : arguments[1]), "string" == typeof t)
          for (var i = document.querySelectorAll(t), r = 0; r < i.length; r++) n(i[r]);
        else if ("undefined" == typeof t.length) n(t);
        else if (t.length > 1)
          for (var o = 0; o < t.length; o++) n(t[o]);
        else n(t[0]);
        d.lazyload && a()
      }

      function n(e) {
        if (e instanceof HTMLElement != 0) {
          var t = {
            el: e,
            settings: i(e)
          };
          t.el.addEventListener("click", function() {
            return t.el.appendChild(t.iframe)
          }), d.lazyload ? l(t) : s(t, !!t.settings.thumbnail)
        }
      }

      function i(t) {
        var n = Array.prototype.slice.apply(t.attributes).filter(function(e) {
            return "" !== e.value
          }).reduce(function(e, t) {
            var n = 0 === t.name.indexOf("data-") ? t.name.split("data-")[1] : t.name;
            return e[n] = t.value, e
          }, {}),
          i = e({}, d, n, {
            y: t.offsetTop,
            parameters: r(n.src)
          });
        if (i.vendor) {
          var o = i.src.match(m.regex[i.vendor]);
          i.id = m.condition[i.vendor](o)
        }
        return i
      }

      function r(e) {
        var t = e.split("?");
        if (t[1]) {
          t = t[1];
          var n = t.indexOf("autoplay") !== -1;
          return n ? t : t + "&autoplay=1"
        }
        return "autoplay=1"
      }

      function o(e) {
        return !(!e.vendor || e.title && e.thumbnail || "youtube" === e.vendor && !e.apikey)
      }

      function s(e) {
        o(e.settings) ? u(e, function(e, t) {
          if (!e) {
            var n = t[0],
              i = t[1];
            i.settings.title || (i.settings.title = m.response[i.settings.vendor].title(n)), i.settings.thumbnail || (i.settings.thumbnail = m.response[i.settings.vendor].thumbnail(n)), l(i, !0)
          }
        }) : l(e, !0)
      }

      function u(e, t) {
        var n = m.endpoints[e.settings.vendor](e.settings),
          i = new XMLHttpRequest;
        i.open("GET", n, !0), i.onload = function() {
          if (i.status >= 200 && i.status < 400) {
            var n = JSON.parse(i.responseText);
            t(null, [n, e])
          } else t(!0)
        }, i.onerror = function() {
          t(!0)
        }, i.send()
      }

      function a() {
        function e(e, t, n) {
          var i = void 0;
          return function() {
            var r = this,
              o = arguments,
              s = function() {
                i = null, n || e.apply(r, o)
              },
              u = n && !i;
            clearTimeout(i), i = setTimeout(s, t), u && e.apply(r, o)
          }
        }
        var t = this,
          n = window.innerHeight,
          i = f.length,
          r = function(e, n) {
            e.settings.initialized = !0, e.el.classList.add("lazyframe--loaded"), i--, s(e), e.settings.initinview && e.el.click(), e.settings.onLoad.call(t, e)
          };
        f.filter(function(e) {
          return e.settings.y < n
        }).forEach(r);
        var o = e(function() {
            a = u < window.scrollY, u = window.scrollY, a && f.filter(function(e) {
              return e.settings.y < n + u && e.settings.initialized === !1
            }).forEach(r), 0 === i && window.removeEventListener("scroll", o, !1)
          }, d.debounce),
          u = 0,
          a = !1;
        window.addEventListener("scroll", o, !1)
      }

      function l(e, t) {
        if (e.iframe = c(e.settings), e.settings.thumbnail && t && (e.el.style.backgroundImage = "url(" + e.settings.thumbnail + ")"), e.settings.title && 0 === e.el.children.length) {
          var n = document.createDocumentFragment(),
            i = document.createElement("span");
          i.className = "lazyframe__title", i.innerHTML = e.settings.title, n.appendChild(i), e.el.appendChild(n)
        }
        d.lazyload || (e.el.classList.add("lazyframe--loaded"), e.settings.onLoad.call(this, e), f.push(e)), e.settings.initialized || f.push(e)
      }

      function c(e) {
        var t = document.createDocumentFragment(),
          n = document.createElement("iframe");
        if (e.vendor && (e.src = m.src[e.vendor](e)), n.setAttribute("src", e.src), n.setAttribute("frameborder", 0), n.setAttribute("allowfullscreen", ""), "vine" === e.vendor) {
          var i = document.createElement("script");
          i.setAttribute("src", "https://platform.vine.co/static/scripts/embed.js"), t.appendChild(i)
        }
        return t.appendChild(n), t
      }
      var d = void 0,
        f = [],
        v = {
          vendor: void 0,
          id: void 0,
          src: void 0,
          thumbnail: void 0,
          title: void 0,
          apikey: void 0,
          initialized: !1,
          parameters: void 0,
          y: void 0,
          debounce: 250,
          lazyload: !0,
          initinview: !1,
          onLoad: function(e) {}
        },
        m = {
          regex: {
            youtube: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,
            vimeo: /vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/,
            vine: /vine.co\/v\/(.*)/
          },
          condition: {
            youtube: function(e) {
              return !(!e || 11 != e[1].length) && e[1]
            },
            vimeo: function(e) {
              return !!(e && 9 === e[1].length || 8 === e[1].length) && e[1]
            },
            vine: function(e) {
              return !(!e || 11 !== e[1].length) && e[1]
            }
          },
          src: {
            youtube: function(e) {
              return "https://www.youtube.com/embed/" + e.id + "/?" + e.parameters
            },
            vimeo: function(e) {
              return "https://player.vimeo.com/video/" + e.id + "/?" + e.parameters
            },
            vine: function(e) {
              return "https://vine.co/v/" + e.id + "/embed/simple"
            }
          },
          endpoints: {
            youtube: function(e) {
              return "https://www.googleapis.com/youtube/v3/videos?id=" + e.id + "&key=" + e.apikey + "&fields=items(snippet(title,thumbnails))&part=snippet"
            },
            vimeo: function(e) {
              return "https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/" + e.id
            },
            vine: function(e) {
              return "https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2F" + e.id
            }
          },
          response: {
            youtube: {
              title: function(e) {
                return e.items[0].snippet.title
              },
              thumbnail: function(e) {
                var t = e.items[0].snippet.thumbnails,
                  n = t.maxres ? t.maxres.url : t.standard.url;
                return n
              }
            },
            vimeo: {
              title: function(e) {
                return e.title
              },
              thumbnail: function(e) {
                return e.thumbnail_url
              }
            },
            vine: {
              title: function(e) {
                return e.title
              },
              thumbnail: function(e) {
                return e.thumbnail_url
              }
            }
          }
        };
      return t
    },
    n = t();
  return n
});
! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
  e.ui = e.ui || {}, e.ui.version = "1.12.1";
  var t = 0,
    i = Array.prototype.slice;
  e.cleanData = function(t) {
    return function(i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++) try {
        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
      } catch (e) {}
      t(i)
    }
  }(e.cleanData), e.widget = function(t, i, s) {
    var n, a, o, h = {},
      u = t.split(".")[0];
    t = t.split(".")[1];
    var r = u + "-" + t;
    return s || (s = i, i = e.Widget), e.isArray(s) && (s = e.extend.apply(null, [{}].concat(s))), e.expr[":"][r.toLowerCase()] = function(t) {
      return !!e.data(t, r)
    }, e[u] = e[u] || {}, n = e[u][t], a = e[u][t] = function(e, t) {
      return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
    }, e.extend(a, n, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), o = new i, o.options = e.widget.extend({}, o.options), e.each(s, function(t, s) {
      return e.isFunction(s) ? void(h[t] = function() {
        function e() {
          return i.prototype[t].apply(this, arguments)
        }

        function n(e) {
          return i.prototype[t].apply(this, e)
        }
        return function() {
          var t, i = this._super,
            a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
        }
      }()) : void(h[t] = s)
    }), a.prototype = e.widget.extend(o, {
      widgetEventPrefix: n ? o.widgetEventPrefix || t : t
    }, h, {
      constructor: a,
      namespace: u,
      widgetName: t,
      widgetFullName: r
    }), n ? (e.each(n._childConstructors, function(t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, a, i._proto)
    }), delete n._childConstructors) : i._childConstructors.push(a), e.widget.bridge(t, a), a
  }, e.widget.extend = function(t) {
    for (var s, n, a = i.call(arguments, 1), o = 0, h = a.length; h > o; o++)
      for (s in a[o]) n = a[o][s], a[o].hasOwnProperty(s) && void 0 !== n && (t[s] = e.isPlainObject(n) ? e.isPlainObject(t[s]) ? e.widget.extend({}, t[s], n) : e.widget.extend({}, n) : n);
    return t
  }, e.widget.bridge = function(t, s) {
    var n = s.prototype.widgetFullName || t;
    e.fn[t] = function(a) {
      var o = "string" == typeof a,
        h = i.call(arguments, 1),
        u = this;
      return o ? this.length || "instance" !== a ? this.each(function() {
        var i, s = e.data(this, n);
        return "instance" === a ? (u = s, !1) : s ? e.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, h), i !== s && void 0 !== i ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
      }) : u = void 0 : (h.length && (a = e.widget.extend.apply(null, [a].concat(h))), this.each(function() {
        var t = e.data(this, n);
        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, n, new s(a, this))
      })), u
    }
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function(i, s) {
      s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(e) {
          e.target === s && this.destroy()
        }
      }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: function() {
      return {}
    },
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      var t = this;
      this._destroy(), e.each(this.classesElementLookup, function(e, i) {
        t._removeClass(i, e)
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
    },
    _destroy: e.noop,
    widget: function() {
      return this.element
    },
    option: function(t, i) {
      var s, n, a, o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t)
        if (o = {}, s = t.split("."), t = s.shift(), s.length) {
          for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
          if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
          n[t] = i
        } else {
          if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
          o[t] = i
        }
      return this._setOptions(o), this
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function(e, t) {
      return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
    },
    _setOptionClasses: function(t) {
      var i, s, n;
      for (i in t) n = this.classesElementLookup[i], t[i] !== this.options.classes[i] && n && n.length && (s = e(n.get()), this._removeClass(n, i), s.addClass(this._classes({
        element: s,
        keys: i,
        classes: t,
        add: !0
      })))
    },
    _setOptionDisabled: function(e) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
    },
    enable: function() {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function() {
      return this._setOptions({
        disabled: !0
      })
    },
    _classes: function(t) {
      function i(i, a) {
        var o, h;
        for (h = 0; i.length > h; h++) o = n.classesElementLookup[i[h]] || e(), o = e(t.add ? e.unique(o.get().concat(t.element.get())) : o.not(t.element).get()), n.classesElementLookup[i[h]] = o, s.push(i[h]), a && t.classes[i[h]] && s.push(t.classes[i[h]])
      }
      var s = [],
        n = this;
      return t = e.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, t), this._on(t.element, {
        remove: "_untrackClassesElement"
      }), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), s.join(" ")
    },
    _untrackClassesElement: function(t) {
      var i = this;
      e.each(i.classesElementLookup, function(s, n) {
        -1 !== e.inArray(t.target, n) && (i.classesElementLookup[s] = e(n.not(t.target).get()))
      })
    },
    _removeClass: function(e, t, i) {
      return this._toggleClass(e, t, i, !1)
    },
    _addClass: function(e, t, i) {
      return this._toggleClass(e, t, i, !0)
    },
    _toggleClass: function(e, t, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof e || null === e,
        a = {
          extra: n ? t : i,
          keys: n ? e : t,
          element: n ? this.element : e,
          add: s
        };
      return a.element.toggleClass(this._classes(a), s), this
    },
    _on: function(t, i, s) {
      var n, a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
        function h() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
        }
        "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
        var u = s.match(/^([\w:-]*)\s*(.*)$/),
          r = u[1] + a.eventNamespace,
          l = u[2];
        l ? n.on(r, l, h) : i.on(r, h)
      })
    },
    _off: function(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
    },
    _delay: function(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
      }
      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {
          this._addClass(e(t.currentTarget), null, "ui-state-hover")
        },
        mouseleave: function(t) {
          this._removeClass(e(t.currentTarget), null, "ui-state-hover")
        }
      })
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {
          this._addClass(e(t.currentTarget), null, "ui-state-focus")
        },
        focusout: function(t) {
          this._removeClass(e(t.currentTarget), null, "ui-state-focus")
        }
      })
    },
    _trigger: function(t, i, s) {
      var n, a, o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
        for (n in a) n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, i) {
    e.Widget.prototype["_" + t] = function(s, n, a) {
      "string" == typeof n && (n = {
        effect: n
      });
      var o, h = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[h] ? s[t](n) : h !== t && s[h] ? s[h](n.duration, n.easing, a) : s.queue(function(i) {
        e(this)[t](), a && a.call(s[0]), i()
      })
    }
  }), e.widget, e.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var s = !1;
  e(document).on("mouseup", function() {
    s = !1
  }), e.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.on("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).on("click." + this.widgetName, function(i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(t) {
      if (!s) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this,
          n = 1 === t.which,
          a = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
        return !(n && !a && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
          return i._mouseMove(e)
        }, this._mouseUpDelegate = function(e) {
          return i._mouseUp(e)
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), s = !0, !0))
      }
    },
    _mouseMove: function(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
        if (!t.which)
          if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(t)
      }
      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function(t) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, t.preventDefault()
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  }), e.widget("ui.slider", e.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function() {
      var t, i, s = this.options,
        n = this.element.find(".ui-slider-handle"),
        a = "<span tabindex='0'></span>",
        o = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
      this.handles = n.add(e(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
        e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
      })
    },
    _createRange: function() {
      var t = this.options;
      t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
    },
    _mouseCapture: function(t) {
      var i, s, n, a, o, h, u, r, l = this,
        d = this.options;
      return !d.disabled && (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: t.pageX,
        y: t.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
        var i = Math.abs(s - l.values(t));
        (n > i || n === i && (t === l._lastChangedValue || l.values(t) === d.min)) && (n = i, a = e(this), o = t)
      }), h = this._start(t, o), h !== !1 && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(a, null, "ui-state-active"), a.trigger("focus"), u = a.offset(), r = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = r ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - u.left - a.width() / 2,
        top: t.pageY - u.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
    },
    _mouseStart: function() {
      return !0
    },
    _mouseDrag: function(e) {
      var t = {
          x: e.pageX,
          y: e.pageY
        },
        i = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, i), !1
    },
    _mouseStop: function(e) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
    },
    _uiHash: function(e, t, i) {
      var s = {
        handle: this.handles[e],
        handleIndex: e,
        value: void 0 !== t ? t : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== t ? t : this.values(e), s.values = i || this.values()), s
    },
    _hasMultipleValues: function() {
      return this.options.values && this.options.values.length
    },
    _start: function(e, t) {
      return this._trigger("start", e, this._uiHash(t))
    },
    _slide: function(e, t, i) {
      var s, n, a = this.value(),
        o = this.values();
      this._hasMultipleValues() && (n = this.values(t ? 0 : 1), a = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === t ? Math.min(n, i) : Math.max(n, i)), o[t] = i), i !== a && (s = this._trigger("slide", e, this._uiHash(t, i, o)), s !== !1 && (this._hasMultipleValues() ? this.values(t, i) : this.value(i)))
    },
    _stop: function(e, t) {
      this._trigger("stop", e, this._uiHash(t))
    },
    _change: function(e, t) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
    },
    value: function(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
    },
    values: function(t, i) {
      var s, n, a;
      if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, t);
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      this._refreshValue()
    },
    _setOption: function(t, i) {
      var s, n = 0;
      switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), this._super(t, i), t) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _setOptionDisabled: function(e) {
      this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
    },
    _value: function() {
      var e = this.options.value;
      return e = this._trimAlignValue(e)
    },
    _values: function(e) {
      var t, i, s;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i
      }
      return []
    },
    _trimAlignValue: function(e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        i = (e - this._valueMin()) % t,
        s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
    },
    _calculateNewMax: function() {
      var e = this.options.max,
        t = this._valueMin(),
        i = this.options.step,
        s = Math.round((e - t) / i) * i;
      e = s + t, e > this.options.max && (e -= i), this.max = parseFloat(e.toFixed(this._precision()))
    },
    _precision: function() {
      var e = this._precisionOf(this.options.step);
      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
    },
    _precisionOf: function(e) {
      var t = "" + e,
        i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.max
    },
    _refreshRange: function(e) {
      "vertical" === e && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === e && this.range.css({
        height: "",
        bottom: ""
      })
    },
    _refreshValue: function() {
      var t, i, s, n, a, o = this.options.range,
        h = this.options,
        u = this,
        r = !this._animateOff && h.animate,
        l = {};
      this._hasMultipleValues() ? this.handles.each(function(s) {
        i = 100 * ((u.values(s) - u._valueMin()) / (u._valueMax() - u._valueMin())), l["horizontal" === u.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[r ? "animate" : "css"](l, h.animate), u.options.range === !0 && ("horizontal" === u.orientation ? (0 === s && u.range.stop(1, 1)[r ? "animate" : "css"]({
          left: i + "%"
        }, h.animate), 1 === s && u.range[r ? "animate" : "css"]({
          width: i - t + "%"
        }, {
          queue: !1,
          duration: h.animate
        })) : (0 === s && u.range.stop(1, 1)[r ? "animate" : "css"]({
          bottom: i + "%"
        }, h.animate), 1 === s && u.range[r ? "animate" : "css"]({
          height: i - t + "%"
        }, {
          queue: !1,
          duration: h.animate
        }))), t = i
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[r ? "animate" : "css"](l, h.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
        width: i + "%"
      }, h.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
        width: 100 - i + "%"
      }, h.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
        height: i + "%"
      }, h.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
        height: 100 - i + "%"
      }, h.animate))
    },
    _handleEvents: {
      keydown: function(t) {
        var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), i = this._start(t, o), i === !1)) return
        }
        switch (a = this.options.step, s = n = this._hasMultipleValues() ? this.values(o) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case e.ui.keyCode.END:
            n = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + a);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - a)
        }
        this._slide(t, o, n)
      },
      keyup: function(t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), this._removeClass(e(t.target), null, "ui-state-active"))
      }
    }
  })
});
! function(t, e) {
  "use strict";

  function r(r, a, i, l, u) {
    function f() {
      L = t.devicePixelRatio > 1, c(i), a.delay >= 0 && setTimeout(function() {
        s(!0)
      }, a.delay), (a.delay < 0 || a.combined) && (l.e = v(a.throttle, function(t) {
        "resize" === t.type && (w = B = -1), s(t.all)
      }), l.a = function(t) {
        c(t), i.push.apply(i, t)
      }, l.g = function() {
        return i = n(i).filter(function() {
          return !n(this).data(a.loadedName)
        })
      }, l.f = function(t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(t[e]);
          r.length && s(!1, r)
        }
      }, s(), n(a.appendScroll).on("scroll." + u + " resize." + u, l.e))
    }

    function c(t) {
      var i = a.defaultImage,
        o = a.placeholder,
        l = a.imageBase,
        u = a.srcsetAttribute,
        f = a.loaderAttribute,
        c = a._f || {};
      t = n(t).filter(function() {
        var t = n(this),
          r = m(this);
        return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e)
      }).data("plugin_" + a.name, r);
      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
          g = m(t[s]),
          h = A.attr(a.imageBaseAttribute) || l;
        g == N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g == N && i && !A.attr(E) ? A.attr(E, i) : g == N || !o || A.css(O) && "none" != A.css(O) || A.css(O, "url('" + o + "')")
      }
    }

    function s(t, e) {
      if (!i.length) return void(a.autoDestroy && r.destroy());
      for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
        if (t || e || A(o[s])) {
          var g = n(o[s]),
            h = m(o[s]),
            b = g.attr(a.attribute),
            v = g.attr(a.imageBaseAttribute) || u,
            p = g.attr(a.loaderAttribute);
          g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h == N && (v + b != g.attr(E) || g.attr(f) != g.attr(F)) || h != N && v + b != g.css(O)) || p) || (l = !0, g.data(c, !0), d(g, h, v, p))
        }
      l && (i = n(i).filter(function() {
        return !n(this).data(c)
      }))
    }

    function d(t, e, r, i) {
      ++z;
      var o = function() {
        y("onError", t), p(), o = n.noop
      };
      y("beforeLoad", t);
      var l = a.attribute,
        u = a.srcsetAttribute,
        f = a.sizesAttribute,
        c = a.retinaAttribute,
        s = a.removeAttribute,
        d = a.loadedName,
        A = t.attr(c);
      if (i) {
        var g = function() {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
        };
        t.off(I).one(I, o).one(D, g), y(i, t, function(e) {
          e ? (t.off(D), g()) : (t.off(I), o())
        }) || t.trigger(I)
      } else {
        var h = n(new Image);
        h.one(I, o).one(D, function() {
          t.hide(), e == N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
        });
        var m = (L && A ? A : t.attr(l)) || "";
        h.attr(C, t.attr(f)).attr(F, t.attr(u)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
      }
    }

    function A(t) {
      var e = t.getBoundingClientRect(),
        r = a.scrollDirection,
        n = a.threshold,
        i = h() + n > e.top && -n < e.bottom,
        o = g() + n > e.left && -n < e.right;
      return "vertical" == r ? i : "horizontal" == r ? o : i && o
    }

    function g() {
      return w >= 0 ? w : w = n(t).width()
    }

    function h() {
      return B >= 0 ? B : B = n(t).height()
    }

    function m(t) {
      return t.tagName.toLowerCase()
    }

    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";
        for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
      }
      return t
    }

    function v(t, e) {
      var n, i = 0;
      return function(o, l) {
        function u() {
          i = +new Date, e.call(r, o)
        }
        var f = +new Date - i;
        n && clearTimeout(n), f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f)
      }
    }

    function p() {
      --z, i.length || z || y("onFinishedAll")
    }

    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
    }
    var z = 0,
      w = -1,
      B = -1,
      L = !1,
      T = "afterLoad",
      D = "load",
      I = "error",
      N = "img",
      E = "src",
      F = "srcset",
      C = "sizes",
      O = "background-image";
    "event" == a.bind || o ? f() : n(t).on(D + "." + u, f)
  }

  function a(a, o) {
    var l = this,
      u = n.extend({}, l.config, o),
      f = {},
      c = u.name + "-" + ++i;
    return l.config = function(t, r) {
      return r === e ? u[t] : (u[t] = r, l)
    }, l.addItems = function(t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), l
    }, l.getItems = function() {
      return f.g ? f.g() : {}
    }, l.update = function(t) {
      return f.e && f.e({}, !t), l
    }, l.force = function(t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), l
    }, l.loadAll = function() {
      return f.e && f.e({
        all: !0
      }, !0), l
    }, l.destroy = function() {
      return n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
    }, r(l, u, a, f, c), u.chainable ? a : l
  }
  var n = t.jQuery || t.Zepto,
    i = 0,
    o = !1;
  n.fn.Lazy = n.fn.lazy = function(t) {
    return new a(this, t)
  }, n.Lazy = n.lazy = function(t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
      for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++)(o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
      for (var c = 0, s = r.length; c < s; c++) l[r[c]] = t[0]
    }
  }, a.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: t,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: e,
    afterLoad: e,
    onError: e,
    onFinishedAll: e
  }, n(t).on("load", function() {
    o = !0
  })
}(window);
! function(o) {
  function t(o, t) {
    if (!(o.originalEvent.touches.length > 1)) {
      o.preventDefault();
      var e = o.originalEvent.changedTouches[0],
        u = document.createEvent("MouseEvents");
      u.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), o.target.dispatchEvent(u)
    }
  }
  if (o.support.touch = "ontouchend" in document, o.support.touch) {
    var e, u = o.ui.mouse.prototype,
      n = u._mouseInit,
      c = u._mouseDestroy;
    u._touchStart = function(o) {
      var u = this;
      !e && u._mouseCapture(o.originalEvent.changedTouches[0]) && (e = !0, u._touchMoved = !1, t(o, "mouseover"), t(o, "mousemove"), t(o, "mousedown"))
    }, u._touchMove = function(o) {
      e && (this._touchMoved = !0, t(o, "mousemove"))
    }, u._touchEnd = function(o) {
      e && (t(o, "mouseup"), t(o, "mouseout"), this._touchMoved || t(o, "click"), e = !1)
    }, u._mouseInit = function() {
      var t = this;
      t.element.bind({
        touchstart: o.proxy(t, "_touchStart"),
        touchmove: o.proxy(t, "_touchMove"),
        touchend: o.proxy(t, "_touchEnd")
      }), n.call(t)
    }, u._mouseDestroy = function() {
      var t = this;
      t.element.unbind({
        touchstart: o.proxy(t, "_touchStart"),
        touchmove: o.proxy(t, "_touchMove"),
        touchend: o.proxy(t, "_touchEnd")
      }), c.call(t)
    }
  }
}(jQuery);