!(function () {
  "use strict";
  var e, u, n, c, f, l;
  Array.prototype.fill ||
    Object.defineProperty(Array.prototype, "fill", {
      value: function (t) {
        if (null == this) throw new TypeError("this is null or not defined");
        for (
          var e = Object(this),
            n = e.length >>> 0,
            r = arguments[1] >> 0,
            o = r < 0 ? Math.max(n + r, 0) : Math.min(r, n),
            r = arguments[2],
            r = void 0 === r ? n : r >> 0,
            i = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
          o < i;

        )
          (e[o] = t), o++;
        return e;
      },
    }),
    Array.prototype.find ||
      Object.defineProperty(Array.prototype, "find", {
        value: function (t) {
          if (null == this) throw TypeError('"this" is null or not defined');
          var e = Object(this),
            n = e.length >>> 0;
          if ("function" != typeof t)
            throw TypeError("predicate must be a function");
          for (var r = arguments[1], o = 0; o < n; ) {
            var i = e[o];
            if (t.call(r, i, o, e)) return i;
            o++;
          }
        },
        configurable: !0,
        writable: !0,
      }),
    Array.from ||
      (Array.from =
        ((e = Object.prototype.toString),
        (u = function (t) {
          return "function" == typeof t || "[object Function]" === e.call(t);
        }),
        (n = Math.pow(2, 53) - 1),
        (c = function (t) {
          (t = Number(t)),
            (t = isNaN(t)
              ? 0
              : 0 !== t && isFinite(t)
              ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t))
              : t);
          return Math.min(Math.max(t, 0), n);
        }),
        (f = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              return e.push(t);
            }),
            e
          );
        }),
        function (t) {
          if (t instanceof Set) return f(t);
          var e = Object(t);
          if (null == t)
            throw new TypeError(
              "Array.from requires an array-like object - not null or undefined"
            );
          var n,
            r = 1 < arguments.length ? arguments[1] : void 0;
          if (void 0 !== r) {
            if (!u(r))
              throw new TypeError(
                "Array.from: when provided, the second argument must be a function"
              );
            2 < arguments.length && (n = arguments[2]);
          }
          for (
            var o,
              i = c(e.length),
              a = u(this) ? Object(new this(i)) : new Array(i),
              s = 0;
            s < i;

          )
            (o = e[s]),
              (a[s] = r ? (void 0 === n ? r(o, s) : r.call(n, o, s)) : o),
              (s += 1);
          return (a.length = i), a;
        })),
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (t) {
        var e = this;
        do {
          if (Element.prototype.matches.call(e, t)) return e;
        } while (
          null !== (e = e.parentElement || e.parentNode) &&
          1 === e.nodeType
        );
        return null;
      }),
    "currentScript" in (l = document) ||
      Object.defineProperty(l, "currentScript", {
        get: function () {
          try {
            throw new Error();
          } catch (t) {
            var e,
              n = 0,
              r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack),
              o = (r && r[1]) || !1,
              i = (r && r[2]) || !1,
              a = l.location.href.replace(l.location.hash, ""),
              s = l.getElementsByTagName("script");
            for (
              o === a &&
              ((r = l.documentElement.outerHTML),
              (i = new RegExp(
                "(?:[^\\n]+?\\n){0," +
                  (i - 2) +
                  "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                "i"
              )),
              (e = r.replace(i, "$1").trim()));
              n < s.length;
              n++
            ) {
              if ("interactive" === s[n].readyState) return s[n];
              if (s[n].src === o) return s[n];
              if (o === a && s[n].innerHTML && s[n].innerHTML.trim() === e)
                return s[n];
            }
            return null;
          }
        },
      }),
    "function" != typeof Object.assign &&
      Object.defineProperty(Object, "assign", {
        value: function (t, e) {
          if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (null != o)
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
          }
          return n;
        },
        writable: !0,
        configurable: !0,
      });
  var d,
    C =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function t(t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t;
  }
  function o(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function i(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function b(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, s = t[Symbol.iterator]();
              !(r = (a = s.next()).done) &&
              (n.push(a.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      })(t, e) ||
      s(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function s(t, e) {
    if (t) {
      if ("string" == typeof t) return p(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === n && t.constructor && (n = t.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(t)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? p(t, e)
          : void 0
      );
    }
  }
  function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function g() {}
  function h(t) {
    return t();
  }
  function m() {
    return Object.create(null);
  }
  function v(t) {
    t.forEach(h);
  }
  function y(t) {
    return "function" == typeof t;
  }
  function w(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function a(t) {
    if (null == t) return g;
    for (
      var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1;
      r < e;
      r++
    )
      n[r - 1] = arguments[r];
    var o = t.subscribe.apply(t, n);
    return o.unsubscribe
      ? function () {
          return o.unsubscribe();
        }
      : o;
  }
  function _(t, e, n) {
    t.$$.on_destroy.push(a(e, n));
  }
  function x(t) {
    return null == t ? "" : t;
  }
  function k(t, e) {
    t.appendChild(e);
  }
  function E(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function P(t) {
    t.parentNode.removeChild(t);
  }
  function O(t) {
    return document.createElement(t);
  }
  function S(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function A(t) {
    return document.createTextNode(t);
  }
  function j() {
    return A(" ");
  }
  function $(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function B(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function T(t, e, n, r) {
    t.style.setProperty(e, n, r ? "important" : "");
  }
  function z(t) {
    d = t;
  }
  function R(t) {
    (function () {
      if (!d)
        throw new Error("Function called outside component initialization");
      return d;
    })().$$.on_mount.push(t);
  }
  ((et = { exports: {} }).exports = (function () {
    function u(t) {
      return "function" == typeof t;
    }
    var n =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
      r = 0,
      e = void 0,
      o = void 0,
      s = function (t, e) {
        (l[r] = t), (l[r + 1] = e), 2 === (r += 2) && (o ? o(d) : v());
      },
      t = "undefined" != typeof window ? window : void 0,
      i = t || {},
      a = i.MutationObserver || i.WebKitMutationObserver,
      c =
        "undefined" == typeof self &&
        "undefined" != typeof process &&
        "[object process]" === {}.toString.call(process),
      i =
        "undefined" != typeof Uint8ClampedArray &&
        "undefined" != typeof importScripts &&
        "undefined" != typeof MessageChannel;
    function f() {
      var t = setTimeout;
      return function () {
        return t(d, 1);
      };
    }
    var l = new Array(1e3);
    function d() {
      for (var t = 0; t < r; t += 2)
        (0, l[t])(l[t + 1]), (l[t] = void 0), (l[t + 1] = void 0);
      r = 0;
    }
    var p,
      h,
      m,
      v = void 0;
    function y(t, e) {
      var n = this,
        r = new this.constructor(w);
      void 0 === r[g] && $(r);
      var o,
        i = n._state;
      return (
        i
          ? ((o = arguments[i - 1]),
            s(function () {
              return A(i, r, o, n._result);
            }))
          : O(n, r, t, e),
        r
      );
    }
    function b(t) {
      if (t && "object" == typeof t && t.constructor === this) return t;
      var e = new this(w);
      return x(e, t), e;
    }
    v = c
      ? function () {
          return process.nextTick(d);
        }
      : a
      ? ((h = 0),
        (a = new a(d)),
        (m = document.createTextNode("")),
        a.observe(m, { characterData: !0 }),
        function () {
          m.data = h = ++h % 2;
        })
      : i
      ? (((p = new MessageChannel()).port1.onmessage = d),
        function () {
          return p.port2.postMessage(0);
        })
      : (void 0 === t
          ? function () {
              try {
                var t = Function("return this")().require("vertx");
                return void 0 !== (e = t.runOnLoop || t.runOnContext)
                  ? function () {
                      e(d);
                    }
                  : f();
              } catch (t) {
                return f();
              }
            }
          : f)();
    var g = Math.random().toString(36).substring(2);
    function w() {}
    function _(t, e, n) {
      var o, i, r, a;
      e.constructor === t.constructor && n === y && e.constructor.resolve === b
        ? ((r = t),
          1 === (a = e)._state
            ? E(r, a._result)
            : 2 === a._state
            ? P(r, a._result)
            : O(
                a,
                void 0,
                function (t) {
                  return x(r, t);
                },
                function (t) {
                  return P(r, t);
                }
              ))
        : void 0 !== n && u(n)
        ? ((o = e),
          (i = n),
          s(function (n) {
            var r = !1,
              t = (function (t, e) {
                try {
                  t.call(
                    e,
                    function (t) {
                      r || ((r = !0), o !== t ? x(n, t) : E(n, t));
                    },
                    function (t) {
                      r || ((r = !0), P(n, t));
                    }
                  );
                } catch (t) {
                  return t;
                }
              })(i, o);
            !r && t && ((r = !0), P(n, t));
          }, t))
        : E(t, e);
    }
    function x(t, e) {
      if (t === e)
        P(t, new TypeError("You cannot resolve a promise with itself"));
      else if (
        ((r = typeof e), null === e || ("object" != r && "function" != r))
      )
        E(t, e);
      else {
        var n = void 0;
        try {
          n = e.then;
        } catch (e) {
          return void P(t, e);
        }
        _(t, e, n);
      }
      var r;
    }
    function k(t) {
      t._onerror && t._onerror(t._result), S(t);
    }
    function E(t, e) {
      void 0 === t._state &&
        ((t._result = e),
        (t._state = 1),
        0 !== t._subscribers.length && s(S, t));
    }
    function P(t, e) {
      void 0 === t._state && ((t._state = 2), (t._result = e), s(k, t));
    }
    function O(t, e, n, r) {
      var o = t._subscribers,
        i = o.length;
      (t._onerror = null),
        (o[i] = e),
        (o[i + 1] = n),
        (o[i + 2] = r),
        0 === i && t._state && s(S, t);
    }
    function S(t) {
      var e = t._subscribers,
        n = t._state;
      if (0 !== e.length) {
        for (var r, o = void 0, i = t._result, a = 0; a < e.length; a += 3)
          (r = e[a]), (o = e[a + n]), r ? A(n, r, o, i) : o(i);
        t._subscribers.length = 0;
      }
    }
    function A(t, e, n, r) {
      var o = u(n),
        i = void 0,
        a = void 0,
        s = !0;
      if (o) {
        try {
          i = n(r);
        } catch (t) {
          (s = !1), (a = t);
        }
        if (e === i)
          return void P(
            e,
            new TypeError(
              "A promises callback cannot return that same promise."
            )
          );
      } else i = r;
      void 0 !== e._state ||
        (o && s
          ? x(e, i)
          : !1 === s
          ? P(e, a)
          : 1 === t
          ? E(e, i)
          : 2 === t && P(e, i));
    }
    var j = 0;
    function $(t) {
      (t[g] = j++),
        (t._state = void 0),
        (t._result = void 0),
        (t._subscribers = []);
    }
    var B =
      ((T.prototype._enumerate = function (t) {
        for (var e = 0; void 0 === this._state && e < t.length; e++)
          this._eachEntry(t[e], e);
      }),
      (T.prototype._eachEntry = function (e, t) {
        var n = this._instanceConstructor,
          r = n.resolve;
        if (r === b) {
          var o,
            i = void 0,
            a = void 0,
            s = !1;
          try {
            i = e.then;
          } catch (e) {
            (s = !0), (a = e);
          }
          i === y && void 0 !== e._state
            ? this._settledAt(e._state, t, e._result)
            : "function" != typeof i
            ? (this._remaining--, (this._result[t] = e))
            : n === z
            ? ((o = new n(w)),
              s ? P(o, a) : _(o, e, i),
              this._willSettleAt(o, t))
            : this._willSettleAt(
                new n(function (t) {
                  return t(e);
                }),
                t
              );
        } else this._willSettleAt(r(e), t);
      }),
      (T.prototype._settledAt = function (t, e, n) {
        var r = this.promise;
        void 0 === r._state &&
          (this._remaining--, 2 === t ? P(r, n) : (this._result[e] = n)),
          0 === this._remaining && E(r, this._result);
      }),
      (T.prototype._willSettleAt = function (t, e) {
        var n = this;
        O(
          t,
          void 0,
          function (t) {
            return n._settledAt(1, e, t);
          },
          function (t) {
            return n._settledAt(2, e, t);
          }
        );
      }),
      T);
    function T(t, e) {
      (this._instanceConstructor = t),
        (this.promise = new t(w)),
        this.promise[g] || $(this.promise),
        n(e)
          ? ((this.length = e.length),
            (this._remaining = e.length),
            (this._result = new Array(this.length)),
            0 === this.length
              ? E(this.promise, this._result)
              : ((this.length = this.length || 0),
                this._enumerate(e),
                0 === this._remaining && E(this.promise, this._result)))
          : P(
              this.promise,
              new Error("Array Methods must be provided an Array")
            );
    }
    var z =
      ((R.prototype.catch = function (t) {
        return this.then(null, t);
      }),
      (R.prototype.finally = function (e) {
        var n = this.constructor;
        return u(e)
          ? this.then(
              function (t) {
                return n.resolve(e()).then(function () {
                  return t;
                });
              },
              function (t) {
                return n.resolve(e()).then(function () {
                  throw t;
                });
              }
            )
          : this.then(e, e);
      }),
      R);
    function R(t) {
      (this[g] = j++),
        (this._result = this._state = void 0),
        (this._subscribers = []),
        w !== t &&
          ("function" != typeof t &&
            (function () {
              throw new TypeError(
                "You must pass a resolver function as the first argument to the promise constructor"
              );
            })(),
          this instanceof R
            ? (function (e, t) {
                try {
                  t(
                    function (t) {
                      x(e, t);
                    },
                    function (t) {
                      P(e, t);
                    }
                  );
                } catch (t) {
                  P(e, t);
                }
              })(this, t)
            : (function () {
                throw new TypeError(
                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                );
              })());
    }
    return (
      (z.prototype.then = y),
      (z.all = function (t) {
        return new B(this, t).promise;
      }),
      (z.race = function (o) {
        var i = this;
        return n(o)
          ? new i(function (t, e) {
              for (var n = o.length, r = 0; r < n; r++)
                i.resolve(o[r]).then(t, e);
            })
          : new i(function (t, e) {
              return e(new TypeError("You must pass an array to race."));
            });
      }),
      (z.resolve = b),
      (z.reject = function (t) {
        var e = new this(w);
        return P(e, t), e;
      }),
      (z._setScheduler = function (t) {
        o = t;
      }),
      (z._setAsap = function (t) {
        s = t;
      }),
      (z._asap = s),
      (z.polyfill = function () {
        var t = void 0,
          e = (t = C).Promise;
        if (e) {
          var n = null;
          try {
            n = Object.prototype.toString.call(e.resolve());
          } catch (t) {}
          if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = z;
      }),
      (z.Promise = z)
    );
  })()),
    et.exports.polyfill(),
    String.prototype.includes ||
      (String.prototype.includes = function (t, e) {
        if (t instanceof RegExp)
          throw TypeError("first argument must not be a RegExp");
        return void 0 === e && (e = 0), -1 !== this.indexOf(t, e);
      });
  var L = [],
    N = [],
    M = [],
    D = [],
    U = Promise.resolve(),
    F = !1;
  function q(t) {
    M.push(t);
  }
  var I = !1,
    Q = new Set();
  function Z() {
    if (!I) {
      I = !0;
      do {
        for (var t = 0; t < L.length; t += 1) {
          var e = L[t];
          z(e),
            (o = e.$$),
            (e = void 0),
            void (
              null !== o.fragment &&
              (o.update(),
              v(o.before_update),
              (e = o.dirty),
              (o.dirty = [-1]),
              o.fragment && o.fragment.p(o.ctx, e),
              o.after_update.forEach(q))
            );
        }
        for (L.length = 0; N.length; ) N.pop()();
        for (var n = 0; n < M.length; n += 1) {
          var r = M[n];
          Q.has(r) || (Q.add(r), r());
        }
      } while (((M.length = 0), L.length));
      for (; D.length; ) D.pop()();
      (I = F = !1), Q.clear();
    }
    var o;
  }
  var H,
    J = new Set();
  function X(t, e) {
    t && t.i && (J.delete(t), t.i(e));
  }
  function K(t, e, n, r) {
    t &&
      t.o &&
      (J.has(t) ||
        (J.add(t),
        H.c.push(function () {
          J.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e)));
  }
  var V =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
  function W(t) {
    t && t.c();
  }
  function G(n, t, e) {
    var r = n.$$,
      o = r.fragment,
      i = r.on_mount,
      a = r.on_destroy,
      r = r.after_update;
    o && o.m(t, e),
      q(function () {
        var t,
          e = i.map(h).filter(y);
        a
          ? a.push.apply(
              a,
              (function (t) {
                if (Array.isArray(t)) return p(t);
              })((t = e)) ||
                (function (t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(t)
                  )
                    return Array.from(t);
                })(t) ||
                s(t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
            )
          : v(e),
          (n.$$.on_mount = []);
      }),
      r.forEach(q);
  }
  function Y(t, e) {
    t = t.$$;
    null !== t.fragment &&
      (v(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function tt(r, t, e, n, o, i, a) {
    void 0 === a && (a = [-1]);
    var s = d;
    z(r);
    var u = t.props || {},
      c = (r.$$ = {
        fragment: null,
        ctx: null,
        props: i,
        update: g,
        not_equal: o,
        bound: m(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(s ? s.$$.context : []),
        callbacks: m(),
        dirty: a,
        skip_bound: !1,
      }),
      f = !1;
    (c.ctx = e
      ? e(r, u, function (t, e) {
          var n =
            !(arguments.length <= 2) && arguments.length - 2
              ? arguments.length <= 2
                ? void 0
                : arguments[2]
              : e;
          return (
            c.ctx &&
              o(c.ctx[t], (c.ctx[t] = n)) &&
              (!c.skip_bound && c.bound[t] && c.bound[t](n),
              f &&
                ((n = t),
                -1 === (t = r).$$.dirty[0] &&
                  (L.push(t), F || ((F = !0), U.then(Z)), t.$$.dirty.fill(0)),
                (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31))),
            e
          );
        })
      : []),
      c.update(),
      (f = !0),
      v(c.before_update),
      (c.fragment = !!n && n(c.ctx)),
      t.target &&
        (t.hydrate
          ? ((n = t.target),
            (n = Array.from(n.childNodes)),
            c.fragment && c.fragment.l(n),
            n.forEach(P))
          : c.fragment && c.fragment.c(),
        t.intro && X(r.$$.fragment),
        G(r, t.target, t.anchor),
        Z()),
      z(s);
  }
  var et =
      (((st = rt.prototype).$destroy = function () {
        Y(this, 1), (this.$destroy = g);
      }),
      (st.$on = function (t, e) {
        var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          function () {
            var t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        );
      }),
      (st.$set = function (t) {
        this.$$set &&
          0 !== Object.keys(t).length &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }),
      rt),
    nt = [];
  function rt() {}
  var ot = (function (o, r) {
    var i;
    void 0 === r && (r = g);
    var a = [];
    function s(t) {
      if (w(o, t) && ((o = t), i)) {
        for (var t = !nt.length, e = 0; e < a.length; e += 1) {
          var n = a[e];
          n[1](), nt.push(n, o);
        }
        if (t) {
          for (var r = 0; r < nt.length; r += 2) nt[r][0](nt[r + 1]);
          nt.length = 0;
        }
      }
    }
    return {
      set: s,
      update: function (t) {
        s(t(o));
      },
      subscribe: function (t, e) {
        void 0 === e && (e = g);
        var n = [t, e];
        return (
          a.push(n),
          1 === a.length && (i = r(s) || g),
          t(o),
          function () {
            var t = a.indexOf(n);
            -1 !== t && a.splice(t, 1), 0 === a.length && (i(), (i = null));
          }
        );
      },
    };
  })({
    baseUrl: "https://api.razorpay.com/v1",
    paymentButtonOptions: null,
    isTestMode: null,
    isQATestMode: null,
    isColorJSLoading: !1,
    buttonPreferences: { isFetching: !1, data: null, error: null },
    modalFrameEl: null,
    isIframeContentsLoaded: !1,
    isPaymentFormOpened: !1,
  });
  function it() {
    return (
      a(ot, function (t) {
        return (e = t);
      })(),
      e
    );
    var e;
  }
  function at(e) {
    ot.update(function (t) {
      return Object.assign({}, t, e);
    });
  }
  var st = navigator.userAgent;
  function ut(t, e, n) {
    var r;
    t &&
      (((r = document.createElement("script")).src = t),
      (r.onload = e),
      n && (r.onerror = n),
      document.head.appendChild(r));
  }
  function ct() {
    "object" == typeof window.RZP && window.RZP.environment;
  }
  function ft() {
    return (window.performance || Date).now();
  }
  /iPhone/.test(st),
    (function () {
      var t;
      if ("undefined" != typeof global) t = global;
      else if ("undefined" != typeof self) t = self;
      else
        try {
          t = Function("return this")();
        } catch (t) {
          throw new Error(
            "polyfill failed because global object is unavailable in this environment"
          );
        }
      var e = t.Promise;
      if (e) {
        var n = null;
        try {
          n = Object.prototype.toString.call(e.resolve());
        } catch (t) {}
        if ("[object Promise]" === n && !e.cast) return;
      }
      document.write(
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js"></script>'
      );
    })();
  var lt,
    dt,
    pt,
    ht = (((st = {}).lj = "96df432a283745908a06f711acd9e5eb"), st),
    mt = ["ga", "hotjar", "perf"],
    vt =
      ((dt = []),
      (pt = !0),
      {
        buttonLoaded: function () {
          return bt("loaded");
        },
        buttonClicked: function () {
          return bt("clicked");
        },
        modalOpenSuccess: function () {
          return bt("modal_success");
        },
        performance: {
          renderStart: function (t) {
            return bt("performance.render:start", { timeSinceOpen: t });
          },
          renderEnd: function (t) {
            return bt("performance.render:stop", { timeSinceOpen: t });
          },
        },
        init: function (t, e) {
          (lt = e),
            window.rzpQ ||
              ((e = t),
              (t = window.analytics || window.razorpayAnalytics)
                ? t.createQ && (window.rzpQ = t.createQ({ pollFreq: 500 }))
                : ((t = function () {}),
                  (window.rzpQ = Object.assign(
                    {
                      interaction: t,
                      initiated: t,
                      dropped: t,
                      success: t,
                      failed: t,
                      push: t,
                      now: function () {
                        return window.rzpQ;
                      },
                      defineEventModifiers: t,
                    },
                    e
                  ))));
        },
        flushQueue: function () {
          if (window.rzpQ && window.rzpQ.paymentButton)
            for (var t = 0; t < dt.length; t++) {
              var e = dt[t];
              bt(e.key, e.value);
            }
          pt = !1;
        },
      }),
    yt = {
      lj: vt,
      init: function (o, i) {
        ut(
          "https://cdn.razorpay.com/static/analytics/bundle.js",
          function () {
            var e, n;
            void 0 === (r = ["lj"]) && (r = mt),
              window.razorpayAnalytics || window.analytics
                ? ((e = []),
                  (n = {}),
                  r.forEach(function (t) {
                    e.push(t), ht[t] && (n[t] = ht[t]);
                  }),
                  (window.razorpayAnalytics || window.analytics).init(
                    e,
                    n,
                    !1,
                    void 0,
                    !1,
                    void 0
                  ))
                : (window.analytics = { track: function () {} });
            var t = {
                paymentButton: function () {
                  return window.rzpQ;
                },
              },
              r = {
                pluginSource: i || "native",
                button_id: o,
                local_order_id:
                  Date.now() +
                  "_" +
                  window.location.href +
                  "_" +
                  Math.floor(1e7 * Math.random()),
              };
            vt.init(t, r),
              window.rzpQ &&
                window.rzpQ.defineEventModifiers({
                  paymentButton: [
                    { propertyName: "event_type", value: "paymentbuttons" },
                    {
                      propertyName: "event_group",
                      value: "paymentbuttons-button",
                    },
                    { propertyName: "location", value: window.location.href },
                  ],
                }),
              vt.flushQueue(),
              vt.buttonLoaded();
          },
          function () {
            vt.flushQueue();
          }
        );
      },
    };
  function bt(t, e) {
    window.rzpQ && window.rzpQ.paymentButton
      ? window.rzpQ.push(
          window.rzpQ
            .now()
            .paymentButton()
            .interaction(
              "button.website." + t,
              Object.assign({}, e, { mode: "live", type: "payment" }, lt)
            )
        )
      : pt && dt.push({ key: t, value: e });
  }
  var st = navigator.userAgent,
    gt = /iPhone/.test(st);
  function wt(t) {
    var n, r;
    return {
      c: function () {
        $((n = O("div")), "class", "razorpay-loader svelte-q4m8xw"),
          $(n, "style", (r = t[0] ? "opacity: 1" : ""));
      },
      m: function (t, e) {
        E(t, n, e);
      },
      p: function (t, e) {
        1 & b(e, 1)[0] &&
          r !== (r = t[0] ? "opacity: 1" : "") &&
          $(n, "style", r);
      },
      i: g,
      o: g,
      d: function (t) {
        t && P(n);
      },
    };
  }
  function _t(t, e, n) {
    var e = e.show,
      r = void 0 !== e && e;
    return (
      (t.$$set = function (t) {
        "show" in t && n(0, (r = t.show));
      }),
      [r]
    );
  }
  (st = window.addEventListener ? "addEventListener" : "attachEvent"),
    (0, window[st])(
      "attachEvent" == st ? "onmessage" : "message",
      function (t) {
        event.origin;
        var e,
          n,
          r,
          o = t[t.message ? "message" : "data"];
        switch ((ct(o.event_type, o.data), o.event_type)) {
          case "close_modal":
            ct(), at({ isPaymentFormOpened: !1 });
            break;
          case "redirect_to_on_payment_success":
            (e = o.data.redirectTo) &&
              ((r = !1),
              (n = e) &&
                (r = new RegExp(
                  /^(?:(?:http|https|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:(\/|\?|#)[^\s]*)?$/i
                ).test(n)),
              r) &&
              (location.href = e);
            break;
          case "iframe_contents_loaded":
            at({ isIframeContentsLoaded: !0 });
        }
      },
      !1
    );
  var xt,
    kt =
      (o(Et, (xt = et)),
      t(Et, [
        {
          key: "show",
          get: function () {
            return this.$$.ctx[0];
          },
          set: function (t) {
            this.$set({ show: t }), Z();
          },
        },
      ]),
      Et);
  function Et(t) {
    var e,
      n = xt.call(this) || this;
    return (
      document.getElementById("svelte-q4m8xw-style") ||
        (((e = O("style")).id = "svelte-q4m8xw-style"),
        (e.textContent =
          ".razorpay-loader.svelte-q4m8xw{position:relative;height:50px;width:50px;border-radius:50%;top:30%;margin:0 auto;border:1px solid rgba(255,255,255,0.2);border-top-color:rgba(255,255,255,0.7);animation:svelte-q4m8xw-rzp-rot 1s infinite linear;transition:.2s;opacity:0}@-moz-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@-webkit-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@-o-keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}@keyframes svelte-q4m8xw-rzp-rot{100%{transform:rotate(360deg)}}"),
        k(document.head, e)),
      tt(i(n), t, _t, wt, w, { show: 0 }),
      n
    );
  }
  function Pt(n) {
    var r,
      o,
      i,
      a,
      s,
      u,
      c,
      f,
      l,
      d = new kt({ props: { show: n[1] } });
    return {
      c: function () {
        (r = O("div")),
          (o = O("div")),
          (i = O("span")),
          (a = A("Test Mode")),
          (s = j()),
          W(d.$$.fragment),
          (u = j()),
          (c = O("iframe")),
          $(i, "class", "test-mode-badge svelte-7tbrl8"),
          $(i, "style", n[5]),
          $(o, "class", "razorpay-backdrop svelte-7tbrl8"),
          $(o, "style", n[4]),
          $(c, "title", "payment-form"),
          $(c, "class", "razorpay-payment-form-frame svelte-7tbrl8"),
          $(c, "frameborder", "0"),
          $(c, "height", "100%"),
          $(c, "width", "100%"),
          $(c, "allowtransparency", "true"),
          (c.allowPaymentRequest = "true"),
          c.src !== (f = n[0]) && $(c, "src", f),
          $(r, "class", "razorpay-payment-form-container svelte-7tbrl8"),
          $(r, "style", n[2]);
      },
      m: function (t, e) {
        E(t, r, e),
          k(r, o),
          k(o, i),
          k(i, a),
          k(r, s),
          G(d, r, null),
          k(r, u),
          k(r, c),
          n[6](c),
          (l = !0);
      },
      p: function (t, e) {
        var n = b(e, 1)[0];
        (!l || 32 & n) && $(i, "style", t[5]),
          (!l || 16 & n) && $(o, "style", t[4]);
        e = {};
        2 & n && (e.show = t[1]),
          d.$set(e),
          (!l || (1 & n && c.src !== (f = t[0]))) && $(c, "src", f),
          (!l || 4 & n) && $(r, "style", t[2]);
      },
      i: function (t) {
        l || (X(d.$$.fragment, t), (l = !0));
      },
      o: function (t) {
        K(d.$$.fragment, t), (l = !1);
      },
      d: function (t) {
        t && P(r), Y(d), n[6](null);
      },
    };
  }
  function Ot(t, e, n) {
    var r;
    _(t, ot, function (t) {
      return n(3, (r = t));
    });
    var o,
      i,
      a,
      s,
      u,
      c = r.paymentFormUrl;
    return (
      r.isQATestMode &&
        ((u = r.paymentButtonOptions.payment_button_id),
        (c = r.baseUrl + "/payment_buttons/" + u + "/view")),
      (t.$$.update = function () {
        8 & t.$$.dirty &&
          n(2, (i = r.isPaymentFormOpened ? "" : "display: none;")),
          8 & t.$$.dirty &&
            n(4, (a = r.isPaymentFormOpened ? "opacity:1;" : "")),
          8 & t.$$.dirty && n(5, (s = r.isTestMode ? "opacity:1;" : "")),
          8 & t.$$.dirty &&
            (r.isPaymentFormOpened
              ? (n(1, (o = !0)),
                r.isIframeContentsLoaded &&
                  setTimeout(function () {
                    n(1, (o = !1));
                  }, 1e3))
              : n(1, (o = !1)));
      }),
      [
        c,
        o,
        i,
        r,
        a,
        s,
        function (t) {
          N[t ? "unshift" : "push"](function () {
            (r.modalFrameEl = t), ot.set(r);
          });
        },
      ]
    );
  }
  var St,
    At = (o($t, (St = et)), $t),
    jt = {
      RZP_DARK_STANDARD: "rzp-dark-standard",
      RZP_OUTLINE_STANDARD: "rzp-outline-standard",
      RZP_LIGHT_STANDARD: "rzp-light-standard",
      BRAND_COLOR: "brand-color",
    };
  function $t(t) {
    var e,
      n = St.call(this) || this;
    return (
      document.getElementById("svelte-7tbrl8-style") ||
        (((e = O("style")).id = "svelte-7tbrl8-style"),
        (e.textContent =
          ".razorpay-payment-form-container.svelte-7tbrl8{z-index:1000000000;position:fixed;top:0;display:block;left:0;height:100%;width:100%;backface-visibility:hidden;overflow-y:visible}.razorpay-payment-form-frame.svelte-7tbrl8{opacity:1;min-height:100% !important;position:fixed;top:0;background:none;display:block;border:0 none transparent;margin:0;padding:0;z-index:2;width:100% !important}.razorpay-backdrop.svelte-7tbrl8{min-height:100%;transition:all .3s ease-out 0s;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);opacity:0}.test-mode-badge.svelte-7tbrl8{text-decoration:none;background:#d64444;border:1px dashed #fff;padding:3px;opacity:0;transform:rotate(45deg);transition:opacity .3s ease-in 0s;font-family:lato,ubuntu,helvetica,sans-serif;color:#fff;position:absolute;width:200px;text-align:center;right:-50px;top:50px}"),
        k(document.head, e)),
      tt(i(n), t, Ot, Pt, w, {}),
      n
    );
  }
  function Bt(t) {
    var n;
    return {
      c: function () {
        n = A("Secured by Razorpay");
      },
      m: function (t, e) {
        E(t, n, e);
      },
      p: g,
      d: function (t) {
        t && P(n);
      },
    };
  }
  function Tt(t) {
    var n, r, e;
    return {
      c: function () {
        (n = A("Secured by ")),
          $((r = O("img")), "class", "secured-by-logo svelte-ekc7fv"),
          r.src !== (e = t[4]) && $(r, "src", e),
          $(r, "alt", "brand"),
          $(r, "height", "14px");
      },
      m: function (t, e) {
        E(t, n, e), E(t, r, e);
      },
      p: g,
      d: function (t) {
        t && P(n), t && P(r);
      },
    };
  }
  function zt(o) {
    var i,
      a,
      s,
      u,
      c,
      f,
      l,
      n,
      d,
      p,
      r,
      h,
      m,
      v = o[3] && {
        c: function () {
          (r = S("svg")),
            (h = S("path")),
            (m = S("path")),
            $(
              h,
              "d",
              "M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z"
            ),
            $(h, "fill", "#fff"),
            $(h, "class", "svelte-ekc7fv"),
            $(m, "d", "M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z"),
            $(m, "fill", "#fff"),
            $(m, "class", "svelte-ekc7fv"),
            $(r, "width", "18"),
            $(r, "height", "20"),
            $(r, "viewBox", "0 0 18 20"),
            $(r, "fill", "none"),
            $(r, "xmlns", "http://www.w3.org/2000/svg"),
            $(r, "class", "svelte-ekc7fv");
        },
        m: function (t, e) {
          E(t, r, e), k(r, h), k(r, m);
        },
        d: function (t) {
          t && P(r);
        },
      },
      y = (o[4] ? Tt : Bt)(o);
    return {
      c: function () {
        (i = O("a")),
          v && v.c(),
          (a = j()),
          (s = O("div")),
          (u = O("span")),
          (c = A(o[0])),
          (f = j()),
          (l = O("div")),
          y.c(),
          $(u, "class", "PaymentButton-text svelte-ekc7fv"),
          $(l, "class", "PaymentButton-securedBy svelte-ekc7fv"),
          $(s, "class", "PaymentButton-contents svelte-ekc7fv"),
          $(i, "href", o[5]),
          $(i, "type", "submit"),
          $(i, "class", (n = x(o[1]) + " svelte-ekc7fv")),
          T(i, "background", o[2] || "");
      },
      m: function (t, e) {
        var n, r;
        E(t, i, e),
          v && v.m(i, null),
          k(i, a),
          k(i, s),
          k(s, u),
          k(u, c),
          k(s, f),
          k(s, l),
          y.m(l, null),
          d ||
            ((n = i),
            (r = o[9]),
            n.addEventListener("click", r, void 0),
            (p = function () {
              return n.removeEventListener("click", r, void 0);
            }),
            (d = !0));
      },
      p: function (t, e) {
        e = b(e, 1)[0];
        1 & e && B(c, t[0]),
          y.p(t, e),
          2 & e && n !== (n = x(t[1]) + " svelte-ekc7fv") && $(i, "class", n),
          4 & e && T(i, "background", t[2] || "");
      },
      i: g,
      o: g,
      d: function (t) {
        t && P(i), v && v.d(), y.d(), (d = !1), p();
      },
    };
  }
  function Rt(n, t, e) {
    var r;
    _(n, ot, function (t) {
      return e(10, (r = t));
    });
    var o,
      i = t.brandColor,
      a = t.buttonTheme,
      s = t.buttonText,
      u = t.brandingOptions,
      s = s.substring(0, 20),
      c = void 0 === u.show_rzp_logo || u.show_rzp_logo,
      f = u.branding_logo,
      l =
        r.paymentFormUrl +
        "/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button",
      d =
        -1 <
        [
          jt.RZP_DARK_STANDARD,
          jt.RZP_LIGHT_STANDARD,
          jt.RZP_OUTLINE_STANDARD,
        ].indexOf(a),
      p = !0;
    return (
      d
        ? jt.RZP_DARK_STANDARD === a && (p = !1)
        : ((o = jt.BRAND_COLOR === a ? i : a),
          (p = !(colorLib && colorLib.isDark(o)))),
      (t = "PaymentButton"),
      (t += " PaymentButton--" + (p ? "light" : "dark")),
      d && ((t += " PaymentButton--rzpTheme"), (t += " PaymentButton--" + a)),
      c || (t += " PaymentButton--noRzpLogo"),
      f && (t += " PaymentButton--customSecuredByLogo"),
      (n.$$set = function (t) {
        "brandColor" in t && e(6, (i = t.brandColor)),
          "buttonTheme" in t && e(7, (a = t.buttonTheme)),
          "buttonText" in t && e(0, (s = t.buttonText)),
          "brandingOptions" in t && e(8, (u = t.brandingOptions));
      }),
      [
        s,
        t,
        o,
        c,
        f,
        l,
        i,
        a,
        u,
        function (t) {
          var e;
          (e = t),
            (t = n.$$.callbacks[e.type]) &&
              t.slice().forEach(function (t) {
                return t(e);
              });
        },
      ]
    );
  }
  var Ct,
    Lt =
      (o(Nt, (Ct = et)),
      t(Nt, [
        {
          key: "brandColor",
          get: function () {
            return this.$$.ctx[6];
          },
          set: function (t) {
            this.$set({ brandColor: t }), Z();
          },
        },
        {
          key: "buttonTheme",
          get: function () {
            return this.$$.ctx[7];
          },
          set: function (t) {
            this.$set({ buttonTheme: t }), Z();
          },
        },
        {
          key: "buttonText",
          get: function () {
            return this.$$.ctx[0];
          },
          set: function (t) {
            this.$set({ buttonText: t }), Z();
          },
        },
        {
          key: "brandingOptions",
          get: function () {
            return this.$$.ctx[8];
          },
          set: function (t) {
            this.$set({ brandingOptions: t }), Z();
          },
        },
      ]),
      Nt);
  function Nt(t) {
    var e,
      n = Ct.call(this) || this;
    return (
      document.getElementById("svelte-ekc7fv-style") ||
        (((e = O("style")).id = "svelte-ekc7fv-style"),
        (e.textContent =
          "@import url(\"https://fonts.googleapis.com/css2?family=Muli:wght@700;800&display=swap\");.PaymentButton.svelte-ekc7fv.svelte-ekc7fv{position:relative;display:inline-block;min-width:160px;height:40px;padding:0;border-radius:3px;text-align:center;font-style:italic;font-family:Muli,helvetica,sans-serif;font-display:swap;overflow:hidden;border:1px solid transparent;outline:none;cursor:pointer;-webkit-tap-highlight-color:transparent;text-decoration:none}.PaymentButton--customSecuredByLogo.svelte-ekc7fv.svelte-ekc7fv{height:48px}.PaymentButton--light.svelte-ekc7fv.svelte-ekc7fv{color:#072654}.PaymentButton--dark.svelte-ekc7fv.svelte-ekc7fv{color:#fff}.PaymentButton--rzpTheme.svelte-ekc7fv.svelte-ekc7fv::before{content:'';position:absolute;left:-6px;top:0;width:46px;height:100%;background:#1e40a0;border-radius:2px 0 0 2px;transform:skew(-15deg,0)}.PaymentButton--rzp-dark-standard.svelte-ekc7fv.svelte-ekc7fv{background:#072654;border-color:#072654}.PaymentButton--rzp-outline-standard.svelte-ekc7fv.svelte-ekc7fv{background:#eaf2fe;border-color:#1e40a0}.PaymentButton--rzp-outline-standard.svelte-ekc7fv.svelte-ekc7fv::before{box-shadow:2px 0 4px rgba(0,0,0,0.15)}.PaymentButton--rzp-light-standard.svelte-ekc7fv.svelte-ekc7fv{background:#fff;border-color:#fff}.PaymentButton--rzp-light-standard.svelte-ekc7fv.svelte-ekc7fv::before{box-shadow:2px 0 4px rgba(0,0,0,0.15)}svg.svelte-ekc7fv.svelte-ekc7fv{position:absolute;top:0;left:0;margin:9px 11px}svg.svelte-ekc7fv svg path.svelte-ekc7fv{fill:#fff}.PaymentButton--rzpTheme.svelte-ekc7fv svg path.svelte-ekc7fv{fill:#fff}.PaymentButton--light.svelte-ekc7fv:not(.PaymentButton--rzpTheme) svg path.svelte-ekc7fv{fill:#072654}.PaymentButton.svelte-ekc7fv.svelte-ekc7fv:not(.PaymentButton--rzpTheme):not(.PaymentButton--noRzpLogo)::before{content:'';position:absolute;bottom:0;left:0;top:0;right:0;background:linear-gradient(121deg,rgba(255,255,255,0) 40%,rgba(255,255,255,0.2) 100%)}.PaymentButton-contents.svelte-ekc7fv.svelte-ekc7fv{padding:4px 28px 4px 44px;margin:1px 0}.PaymentButton--noRzpLogo.svelte-ekc7fv .PaymentButton-contents.svelte-ekc7fv{padding-left:28px !important}.PaymentButton--rzpTheme.svelte-ekc7fv .PaymentButton-contents.svelte-ekc7fv{padding-left:60px}.PaymentButton-text.svelte-ekc7fv.svelte-ekc7fv{display:block;min-height:18px;line-height:18px;font-size:14px;font-weight:800;opacity:1;text-transform:initial}.PaymentButton-securedBy.svelte-ekc7fv.svelte-ekc7fv{font-size:8px;line-height:10px;text-transform:initial;margin-top:0;opacity:.6}.PaymentButton--customSecuredByLogo.svelte-ekc7fv .PaymentButton-securedBy.svelte-ekc7fv{opacity:1;margin-top:1px}.secured-by-logo.svelte-ekc7fv.svelte-ekc7fv{vertical-align:middle}"),
        k(document.head, e)),
      tt(i(n), t, Rt, zt, w, {
        brandColor: 6,
        buttonTheme: 7,
        buttonText: 0,
        brandingOptions: 8,
      }),
      n
    );
  }
  function Mt(t) {
    var r, n;
    return (
      (r = new Lt({
        props: {
          buttonText: t[1],
          buttonTheme: t[0],
          brandColor: t[2],
          brandingOptions: t[3],
        },
      })).$on("click", t[4]),
      {
        c: function () {
          W(r.$$.fragment);
        },
        m: function (t, e) {
          G(r, t, e), (n = !0);
        },
        p: function (t, e) {
          var n = b(e, 1)[0],
            e = {};
          2 & n && (e.buttonText = t[1]),
            1 & n && (e.buttonTheme = t[0]),
            4 & n && (e.brandColor = t[2]),
            8 & n && (e.brandingOptions = t[3]),
            r.$set(e);
        },
        i: function (t) {
          n || (X(r.$$.fragment, t), (n = !0));
        },
        o: function (t) {
          K(r.$$.fragment, t), (n = !1);
        },
        d: function (t) {
          Y(r, t);
        },
      }
    );
  }
  function Dt(t, e, n) {
    var i, r, o, a, s;
    _(t, ot, function (t) {
      return n(6, (i = t));
    }),
      R(function () {
        yt.lj.performance.renderEnd(ft());
      });
    var u = i.paymentButtonOptions;
    function c(t) {
      var n,
        r,
        e = i.paymentButtonOptions,
        o =
          ((n = i.paymentButtonOptions),
          (r = {}),
          Object.keys(n).forEach(function (t) {
            var e = (function (t, e) {
              e = new RegExp("prefill.amount" + t).exec(e);
              return e && e[1];
            })(".((.*?)*)", t);
            e && ((t = n[t]), (r[e] = t));
          }),
          r);
      return {
        notes: Object.assign({}, e.notes, t),
        amount: o,
        callback_url: e.callback_url,
      };
    }
    return (
      (a = i.buttonPreferences.data.merchant_brand_color),
      (o = u.button_text),
      (r = u.button_theme),
      (u = i.buttonPreferences.data.branding || {}),
      Object.keys(jt).find(function (t) {
        return jt[t] === r;
      }) || (r = ""),
      (r = r || i.buttonPreferences.data.payment_button_theme),
      (o = o || i.buttonPreferences.data.payment_button_text),
      (t.$$.update = function () {
        96 & t.$$.dirty &&
          i.isPaymentFormOpened &&
          i.isIframeContentsLoaded &&
          (function (t) {
            ct();
            var e = it(),
              n = e.modalFrameEl;
            e.isQATestMode &&
              ((e = e.baseUrl), (t.base_url = e.replace("/v1", ""))),
              (t.is_mobile =
                (window.innerWidth && window.innerWidth < 450) ||
                gt ||
                window.matchMedia(
                  "(max-device-height: 450px),(max-device-width: 450px)"
                ).matches),
              (t = { event_type: "init_payment_form", data: t }),
              yt.lj.modalOpenSuccess(),
              n.contentWindow.postMessage(t, "*");
          })(s);
      }),
      [
        r,
        o,
        a,
        u,
        function (t) {
          t.preventDefault(),
            ct(),
            n(5, (s = c({}))),
            at({ isPaymentFormOpened: !0 }),
            yt.lj.buttonClicked();
        },
      ]
    );
  }
  var Ut,
    Ft,
    qt = (o(It, (Ft = et)), It);
  function It(t) {
    var e;
    return tt(i((e = Ft.call(this) || this)), t, Dt, Mt, w, {}), e;
  }
  function Qt(e, n) {
    function t() {
      var t;
      (Ut =
        !1 !== (t = e).defaultIntegrations
          ? (window.Sentry.init(t), window.Sentry)
          : ((t.integrations = [
              new window.Sentry.Integrations.InboundFilters(),
              new window.Sentry.Integrations.FunctionToString(),
              new window.Sentry.Integrations.Breadcrumbs(),
              new window.Sentry.Integrations.LinkedErrors(),
              new window.Sentry.Integrations.UserAgent(),
            ]),
            (t = new window.Sentry.BrowserClient(t)),
            new window.Sentry.Hub(t))),
        n && n();
    }
    window.Sentry &&
    window.Sentry.BrowserClient &&
    window.Sentry.captureException
      ? t()
      : ut("https://browser.sentry-cdn.com/6.16.1/bundle.min.js", t);
  }
  function Zt(e) {
    if (Ut && e)
      return Ut.run
        ? Ut.run(function (t) {
            t.captureException(e);
          })
        : void Ut.captureException(e);
  }
  var Ht = [];
  function Jt() {
    Ht.length && Ut && Ht.forEach(Zt), (Ht = []);
  }
  window.addEventListener("error", function (t) {
    0 <= t.filename.indexOf("payment-button.js") && (Ut ? Zt(t) : Ht.push(t));
  });
  var Xt = V.document;
  function Kt(t) {
    var n,
      r,
      o = t[0].buttonPreferences.error + "";
    return {
      c: function () {
        (n = O("span")), (r = A(o));
      },
      m: function (t, e) {
        E(t, n, e), k(n, r);
      },
      p: function (t, e) {
        1 & e && o !== (o = t[0].buttonPreferences.error + "") && B(r, o);
      },
      i: g,
      o: g,
      d: function (t) {
        t && P(n);
      },
    };
  }
  function Vt(t) {
    var n,
      r = new qt({});
    return {
      c: function () {
        W(r.$$.fragment);
      },
      m: function (t, e) {
        G(r, t, e), (n = !0);
      },
      p: g,
      i: function (t) {
        n || (X(r.$$.fragment, t), (n = !0));
      },
      o: function (t) {
        K(r.$$.fragment, t), (n = !1);
      },
      d: function (t) {
        Y(r, t);
      },
    };
  }
  function Wt(t) {
    var r,
      o,
      i,
      n,
      a = [Vt, Kt],
      s = [];
    function u(t) {
      return t[0].buttonPreferences.data && !t[0].isColorJSLoading
        ? 0
        : t[0].buttonPreferences.error
        ? 1
        : -1;
    }
    return (
      ~(o = u(t)) && (i = s[o] = a[o](t)),
      {
        c: function () {
          (r = O("span")),
            i && i.c(),
            $(r, "class", "razorpay-payment-button svelte-ohbfj8");
        },
        m: function (t, e) {
          E(t, r, e), ~o && s[o].m(r, null), (n = !0);
        },
        p: function (t, e) {
          var e = b(e, 1)[0],
            n = o;
          (o = u(t)) === n
            ? ~o && s[o].p(t, e)
            : (i &&
                ((H = { r: 0, c: [], p: H }),
                K(s[n], 1, 1, function () {
                  s[n] = null;
                }),
                H.r || v(H.c),
                (H = H.p)),
              ~o
                ? ((i = s[o]) || (i = s[o] = a[o](t)).c(),
                  X(i, 1),
                  i.m(r, null))
                : (i = null));
        },
        i: function (t) {
          n || (X(i), (n = !0));
        },
        o: function (t) {
          K(i), (n = !1);
        },
        d: function (t) {
          t && P(r), ~o && s[o].d();
        },
      }
    );
  }
  function Gt(t, e, n) {
    var r;
    return (
      _(t, ot, function (t) {
        return n(0, (r = t));
      }),
      R(function () {
        new At({ target: document.body }),
          Qt(
            {
              dsn: "https://a9fa294c5e224e028cc57801fee46dd0@o515678.ingest.sentry.io/6726576",
              defaultIntegrations: !1,
            },
            Jt
          ),
          yt.init(
            r.paymentButtonOptions.payment_button_id,
            r.paymentButtonOptions.plugin
          );
      }),
      [r]
    );
  }
  function Yt(n, r) {
    return function () {
      for (var t = new Array(arguments.length), e = 0; e < t.length; e++)
        t[e] = arguments[e];
      return n.apply(r, t);
    };
  }
  var te,
    ee = (o(re, (te = et)), re),
    ne = Object.prototype.toString;
  function re(t) {
    var e,
      n = te.call(this) || this;
    return (
      Xt.getElementById("svelte-ohbfj8-style") ||
        (((e = O("style")).id = "svelte-ohbfj8-style"),
        (e.textContent =
          ".razorpay-payment-button.svelte-ohbfj8,.razorpay-payment-button.svelte-ohbfj8 *,.razorpay-payment-button.svelte-ohbfj8 *::before,.razorpay-payment-button.svelte-ohbfj8 *::after{box-sizing:border-box}.razorpay-payment-button.svelte-ohbfj8{position:relative;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}"),
        k(Xt.head, e)),
      tt(i(n), t, Gt, Wt, w, {}),
      n
    );
  }
  function oe(t) {
    return "[object Array]" === ne.call(t);
  }
  function ie(t) {
    return void 0 === t;
  }
  function ae(t) {
    return null !== t && "object" == typeof t;
  }
  function se(t) {
    if ("[object Object]" !== ne.call(t)) return !1;
    t = Object.getPrototypeOf(t);
    return null === t || t === Object.prototype;
  }
  function ue(t) {
    return "[object Function]" === ne.call(t);
  }
  function ce(t, e) {
    if (null != t)
      if (("object" != typeof t && (t = [t]), oe(t)))
        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
      else
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) &&
            e.call(null, t[o], o, t);
  }
  var fe = {
    isArray: oe,
    isArrayBuffer: function (t) {
      return "[object ArrayBuffer]" === ne.call(t);
    },
    isBuffer: function (t) {
      return (
        null !== t &&
        !ie(t) &&
        null !== t.constructor &&
        !ie(t.constructor) &&
        "function" == typeof t.constructor.isBuffer &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: function (t) {
      return "undefined" != typeof FormData && t instanceof FormData;
    },
    isArrayBufferView: function (t) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(t)
        : t && t.buffer && t.buffer instanceof ArrayBuffer;
    },
    isString: function (t) {
      return "string" == typeof t;
    },
    isNumber: function (t) {
      return "number" == typeof t;
    },
    isObject: ae,
    isPlainObject: se,
    isUndefined: ie,
    isDate: function (t) {
      return "[object Date]" === ne.call(t);
    },
    isFile: function (t) {
      return "[object File]" === ne.call(t);
    },
    isBlob: function (t) {
      return "[object Blob]" === ne.call(t);
    },
    isFunction: ue,
    isStream: function (t) {
      return ae(t) && ue(t.pipe);
    },
    isURLSearchParams: function (t) {
      return (
        "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
      );
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: ce,
    merge: function n() {
      var r = {};
      function t(t, e) {
        se(r[e]) && se(t)
          ? (r[e] = n(r[e], t))
          : se(t)
          ? (r[e] = n({}, t))
          : oe(t)
          ? (r[e] = t.slice())
          : (r[e] = t);
      }
      for (var e = 0, o = arguments.length; e < o; e++) ce(arguments[e], t);
      return r;
    },
    extend: function (n, t, r) {
      return (
        ce(t, function (t, e) {
          n[e] = r && "function" == typeof t ? Yt(t, r) : t;
        }),
        n
      );
    },
    trim: function (t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    },
    stripBOM: function (t) {
      return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
    },
  };
  function le(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function de(t, e, n) {
    return (
      e &&
        (n = n
          ? n(e)
          : fe.isURLSearchParams(e)
          ? e.toString()
          : ((r = []),
            fe.forEach(e, function (t, e) {
              null != t &&
                (fe.isArray(t) ? (e += "[]") : (t = [t]),
                fe.forEach(t, function (t) {
                  fe.isDate(t)
                    ? (t = t.toISOString())
                    : fe.isObject(t) && (t = JSON.stringify(t)),
                    r.push(le(e) + "=" + le(t));
                }));
            }),
            r.join("&"))) &&
        (-1 !== (e = t.indexOf("#")) && (t = t.slice(0, e)),
        (t += (-1 === t.indexOf("?") ? "?" : "&") + n)),
      t
    );
    var r;
  }
  function pe() {
    this.handlers = [];
  }
  function he(e, n, t) {
    return (
      fe.forEach(t, function (t) {
        e = t(e, n);
      }),
      e
    );
  }
  function me(t) {
    return !(!t || !t.__CANCEL__);
  }
  function ve(n, r) {
    fe.forEach(n, function (t, e) {
      e !== r &&
        e.toUpperCase() === r.toUpperCase() &&
        ((n[r] = t), delete n[e]);
    });
  }
  function ye(t, e, n, r, o) {
    return (
      (t = new Error(t)),
      (n = n),
      (r = r),
      (o = o),
      (t.config = e),
      n && (t.code = n),
      (t.request = r),
      (t.response = o),
      (t.isAxiosError = !0),
      (t.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        };
      }),
      t
    );
  }
  (pe.prototype.use = function (t, e) {
    return (
      this.handlers.push({ fulfilled: t, rejected: e }),
      this.handlers.length - 1
    );
  }),
    (pe.prototype.eject = function (t) {
      this.handlers[t] && (this.handlers[t] = null);
    }),
    (pe.prototype.forEach = function (e) {
      fe.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var be,
    ge,
    we,
    _e = pe,
    xe = fe.isStandardBrowserEnv()
      ? {
          write: function (t, e, n, r, o, i) {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e)),
              fe.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              fe.isString(r) && a.push("path=" + r),
              fe.isString(o) && a.push("domain=" + o),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (t) {
            t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        },
    ke = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    Ee = fe.isStandardBrowserEnv()
      ? ((ge = /(msie|trident)/i.test(navigator.userAgent)),
        (we = document.createElement("a")),
        (be = Oe(window.location.href)),
        function (t) {
          t = fe.isString(t) ? Oe(t) : t;
          return t.protocol === be.protocol && t.host === be.host;
        })
      : function () {
          return !0;
        },
    Pe = { "Content-Type": "application/x-www-form-urlencoded" };
  function Oe(t) {
    return (
      ge && (we.setAttribute("href", t), (t = we.href)),
      we.setAttribute("href", t),
      {
        href: we.href,
        protocol: we.protocol ? we.protocol.replace(/:$/, "") : "",
        host: we.host,
        search: we.search ? we.search.replace(/^\?/, "") : "",
        hash: we.hash ? we.hash.replace(/^#/, "") : "",
        hostname: we.hostname,
        port: we.port,
        pathname:
          "/" === we.pathname.charAt(0) ? we.pathname : "/" + we.pathname,
      }
    );
  }
  function Se(t, e) {
    !fe.isUndefined(t) &&
      fe.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = e);
  }
  var Ae = {
    adapter:
      (("undefined" != typeof XMLHttpRequest ||
        ("undefined" != typeof process &&
          "[object process]" === Object.prototype.toString.call(process))) &&
        (Ue = function (f) {
          return new Promise(function (s, u) {
            var n = f.data,
              r = f.headers;
            fe.isFormData(n) && delete r["Content-Type"];
            var c = new XMLHttpRequest();
            f.auth &&
              ((i = f.auth.username || ""),
              (t = f.auth.password
                ? unescape(encodeURIComponent(f.auth.password))
                : ""),
              (r.Authorization = "Basic " + btoa(i + ":" + t)));
            var t,
              e,
              o,
              i =
                ((e = f.baseURL),
                (i = f.url),
                e && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(i)
                  ? ((t = e),
                    (e = i)
                      ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
                      : t)
                  : i);
            if (
              (c.open(
                f.method.toUpperCase(),
                de(i, f.params, f.paramsSerializer),
                !0
              ),
              (c.timeout = f.timeout),
              (c.onreadystatechange = function () {
                var e, n, r, t, o, i, a;
                c &&
                  4 === c.readyState &&
                  (0 !== c.status ||
                    (c.responseURL && 0 === c.responseURL.indexOf("file:"))) &&
                  ((i =
                    "getAllResponseHeaders" in c
                      ? ((o = c.getAllResponseHeaders()),
                        (r = {}),
                        o &&
                          fe.forEach(o.split("\n"), function (t) {
                            (n = t.indexOf(":")),
                              (e = fe.trim(t.substr(0, n)).toLowerCase()),
                              (n = fe.trim(t.substr(n + 1))),
                              e &&
                                ((r[e] && 0 <= ke.indexOf(e)) ||
                                  (r[e] =
                                    "set-cookie" === e
                                      ? (r[e] || []).concat([n])
                                      : r[e]
                                      ? r[e] + ", " + n
                                      : n));
                          }),
                        r)
                      : null),
                  (a = {
                    data:
                      f.responseType && "text" !== f.responseType
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: i,
                    config: f,
                    request: c,
                  }),
                  (t = s),
                  (o = u),
                  (a = (i = a).config.validateStatus),
                  i.status && a && !a(i.status)
                    ? o(
                        ye(
                          "Request failed with status code " + i.status,
                          i.config,
                          null,
                          i.request,
                          i
                        )
                      )
                    : t(i),
                  (c = null));
              }),
              (c.onabort = function () {
                c &&
                  (u(ye("Request aborted", f, "ECONNABORTED", c)), (c = null));
              }),
              (c.onerror = function () {
                u(ye("Network Error", f, null, c)), (c = null);
              }),
              (c.ontimeout = function () {
                var t = "timeout of " + f.timeout + "ms exceeded";
                f.timeoutErrorMessage && (t = f.timeoutErrorMessage),
                  u(ye(t, f, "ECONNABORTED", c)),
                  (c = null);
              }),
              fe.isStandardBrowserEnv() &&
                (o =
                  (f.withCredentials || Ee(i)) && f.xsrfCookieName
                    ? xe.read(f.xsrfCookieName)
                    : void 0) &&
                (r[f.xsrfHeaderName] = o),
              "setRequestHeader" in c &&
                fe.forEach(r, function (t, e) {
                  void 0 === n && "content-type" === e.toLowerCase()
                    ? delete r[e]
                    : c.setRequestHeader(e, t);
                }),
              fe.isUndefined(f.withCredentials) ||
                (c.withCredentials = !!f.withCredentials),
              f.responseType)
            )
              try {
                c.responseType = f.responseType;
              } catch (s) {
                if ("json" !== f.responseType) throw s;
              }
            "function" == typeof f.onDownloadProgress &&
              c.addEventListener("progress", f.onDownloadProgress),
              "function" == typeof f.onUploadProgress &&
                c.upload &&
                c.upload.addEventListener("progress", f.onUploadProgress),
              f.cancelToken &&
                f.cancelToken.promise.then(function (t) {
                  c && (c.abort(), u(t), (c = null));
                }),
              (n = n || null),
              c.send(n);
          });
        }),
      Ue),
    transformRequest: [
      function (t, e) {
        return (
          ve(e, "Accept"),
          ve(e, "Content-Type"),
          fe.isFormData(t) ||
          fe.isArrayBuffer(t) ||
          fe.isBuffer(t) ||
          fe.isStream(t) ||
          fe.isFile(t) ||
          fe.isBlob(t)
            ? t
            : fe.isArrayBufferView(t)
            ? t.buffer
            : fe.isURLSearchParams(t)
            ? (Se(e, "application/x-www-form-urlencoded;charset=utf-8"),
              t.toString())
            : fe.isObject(t)
            ? (Se(e, "application/json;charset=utf-8"), JSON.stringify(t))
            : t
        );
      },
    ],
    transformResponse: [
      function (t) {
        if ("string" == typeof t)
          try {
            t = JSON.parse(t);
          } catch (t) {}
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (t) {
      return 200 <= t && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  fe.forEach(["delete", "get", "head"], function (t) {
    Ae.headers[t] = {};
  }),
    fe.forEach(["post", "put", "patch"], function (t) {
      Ae.headers[t] = fe.merge(Pe);
    });
  var je = Ae;
  function $e(t) {
    t.cancelToken && t.cancelToken.throwIfRequested();
  }
  function Be(e) {
    return (
      $e(e),
      (e.headers = e.headers || {}),
      (e.data = he(e.data, e.headers, e.transformRequest)),
      (e.headers = fe.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      fe.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (t) {
          delete e.headers[t];
        }
      ),
      (e.adapter || je.adapter)(e).then(
        function (t) {
          return (
            $e(e), (t.data = he(t.data, t.headers, e.transformResponse)), t
          );
        },
        function (t) {
          return (
            me(t) ||
              ($e(e),
              t &&
                t.response &&
                (t.response.data = he(
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  function Te(e, n) {
    n = n || {};
    var r = {},
      t = ["url", "method", "data"],
      o = ["headers", "auth", "proxy", "params"],
      i = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding",
      ],
      a = ["validateStatus"];
    function s(t, e) {
      return fe.isPlainObject(t) && fe.isPlainObject(e)
        ? fe.merge(t, e)
        : fe.isPlainObject(e)
        ? fe.merge({}, e)
        : fe.isArray(e)
        ? e.slice()
        : e;
    }
    function u(t) {
      fe.isUndefined(n[t])
        ? fe.isUndefined(e[t]) || (r[t] = s(void 0, e[t]))
        : (r[t] = s(e[t], n[t]));
    }
    fe.forEach(t, function (t) {
      fe.isUndefined(n[t]) || (r[t] = s(void 0, n[t]));
    }),
      fe.forEach(o, u),
      fe.forEach(i, function (t) {
        fe.isUndefined(n[t])
          ? fe.isUndefined(e[t]) || (r[t] = s(void 0, e[t]))
          : (r[t] = s(void 0, n[t]));
      }),
      fe.forEach(a, function (t) {
        t in n ? (r[t] = s(e[t], n[t])) : t in e && (r[t] = s(void 0, e[t]));
      });
    var c = t.concat(o).concat(i).concat(a),
      a = Object.keys(e)
        .concat(Object.keys(n))
        .filter(function (t) {
          return -1 === c.indexOf(t);
        });
    return fe.forEach(a, u), r;
  }
  function ze(t) {
    (this.defaults = t),
      (this.interceptors = { request: new _e(), response: new _e() });
  }
  (ze.prototype.request = function (t) {
    "string" == typeof t
      ? ((t = arguments[1] || {}).url = arguments[0])
      : (t = t || {}),
      (t = Te(this.defaults, t)).method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
        ? (t.method = this.defaults.method.toLowerCase())
        : (t.method = "get");
    var e = [Be, void 0],
      n = Promise.resolve(t);
    for (
      this.interceptors.request.forEach(function (t) {
        e.unshift(t.fulfilled, t.rejected);
      }),
        this.interceptors.response.forEach(function (t) {
          e.push(t.fulfilled, t.rejected);
        });
      e.length;

    )
      n = n.then(e.shift(), e.shift());
    return n;
  }),
    (ze.prototype.getUri = function (t) {
      return (
        (t = Te(this.defaults, t)),
        de(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
      );
    }),
    fe.forEach(["delete", "get", "head", "options"], function (n) {
      ze.prototype[n] = function (t, e) {
        return this.request(
          Te(e || {}, { method: n, url: t, data: (e || {}).data })
        );
      };
    }),
    fe.forEach(["post", "put", "patch"], function (r) {
      ze.prototype[r] = function (t, e, n) {
        return this.request(Te(n || {}, { method: r, url: t, data: e }));
      };
    });
  var Re = ze;
  function Ce(t) {
    this.message = t;
  }
  (Ce.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (Ce.prototype.__CANCEL__ = !0);
  var Le = Ce;
  function Ne(t) {
    if ("function" != typeof t)
      throw new TypeError("executor must be a function.");
    var e;
    this.promise = new Promise(function (t) {
      e = t;
    });
    var n = this;
    t(function (t) {
      n.reason || ((n.reason = new Le(t)), e(n.reason));
    });
  }
  (Ne.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (Ne.source = function () {
      var e;
      return {
        token: new Ne(function (t) {
          e = t;
        }),
        cancel: e,
      };
    });
  var et = Ne;
  function Me(t) {
    var e = new Re(t),
      t = Yt(Re.prototype.request, e);
    return fe.extend(t, Re.prototype, e), fe.extend(t, e), t;
  }
  var De = Me(je);
  (De.Axios = Re),
    (De.create = function (t) {
      return Me(Te(De.defaults, t));
    }),
    (De.Cancel = Le),
    (De.CancelToken = et),
    (De.isCancel = me),
    (De.all = function (t) {
      return Promise.all(t);
    }),
    (De.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (De.isAxiosError = function (t) {
      return "object" == typeof t && !0 === t.isAxiosError;
    });
  var Ue = De;
  Ue.default = De;
  var Fe = Ue;
  function qe(t, e) {
    if (!e.payment_button_id) {
      var n =
        "Payment Button cannot be added. Provide a valid payment button id";
      throw (window.alert(n), n);
    }
    t ||
      window.console.log(
        "Payment Button is added inside 'body' tag, because Target element is missing"
      );
    t = t || document.body;
    if ((t instanceof Element || (t = document.getElementById(t)), !t)) {
      var r =
        "Payment Button is not added. Provide target element/id which is present in DOM";
      throw (window.alert(r), r);
    }
    r = "https://api.razorpay.com/v1";
    return (
      "test" === window.RZP.environment &&
        window.RZP.base_url &&
        (r = window.RZP.base_url),
      (Fe.defaults.baseURL = r || "https://api.razorpay.com/v1"),
      (function (t, e) {
        var n = it(),
          n = JSON.parse(JSON.stringify(n));
        (n.baseUrl = e),
          (n.paymentButtonOptions = t),
          (n.isQATestMode = window.RZP && "test" === window.RZP.environment);
        t = t.payment_button_id;
        (n.paymentFormUrl =
          "https://razorpay.com/payment-button/" + t + "/view"),
          ot.set(n);
      })(e, r),
      (function () {
        ct();
        var t =
          "payment_buttons/" +
          it().paymentButtonOptions.payment_button_id +
          "/button_preferences";
        vt.performance.renderStart(ft()),
          at({ buttonPreferences: { isFetching: !0 } }),
          Fe(t)
            .then(function (t) {
              t = t.data;
              at({
                isTestMode: t.is_test_mode,
                buttonPreferences: { isFetching: !1, data: t.preferences },
              });
            })
            .catch(function (n) {
              var t;
              ct(),
                at({
                  buttonPreferences: {
                    isFetching: !1,
                    error: "Some error occurred",
                  },
                }),
                vt.performance.renderEnd(ft()),
                !n.response &&
                  -1 <
                    (null == (t = n.message) || null == t.toLowerCase
                      ? void 0
                      : t.toLowerCase().indexOf("network error")) &&
                  Ut &&
                  Ut.run(function (e) {
                    e.withScope(function (t) {
                      t.setLevel(Sentry.Severity.Fatal),
                        (n.message = "P0_4XX_PBS: " + n.message),
                        e.captureException(n);
                    });
                  });
            });
      })(),
      ((r = it().paymentButtonOptions.button_theme) && jt.BRAND_COLOR !== r) ||
        (at({ isColorJSLoading: !0 }),
        ut("https://cdn.razorpay.com/static/assets/color.js", function () {
          at({ isColorJSLoading: !1 });
        })),
      new ee({ target: t, store: ot })
    );
  }
  (window.RZP = window.RZP || {}),
    (et = document.currentScript),
    "FORM" !== (Ue = et.parentElement).tagName &&
      window.alert(
        "Payment Button is not added. Add Button script inside 'form' tag."
      ),
    (et = et.dataset),
    ct(),
    qe(Ue, et);
})();
