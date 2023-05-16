import { defineComponent as dt, ref as q, computed as j, openBlock as I, createElementBlock as J, normalizeClass as Y, unref as g, normalizeStyle as ot, createElementVNode as T, toDisplayString as rt, Fragment as at, renderList as st, renderSlot as ft, createTextVNode as ht, withDirectives as mt, vShow as $t } from "vue";
function vt(k) {
  const B = `es-${k}`;
  return {
    n: (c) => c ? c.startsWith("--") ? `${B}${c}` : `${B}__${c}` : B
  };
}
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
var lt = { exports: {} };
(function(k, B) {
  (function(b, c) {
    k.exports = c();
  })(it, function() {
    var b = 1e3, c = 6e4, y = 36e5, R = "millisecond", C = "second", $ = "minute", S = "hour", O = "day", z = "week", a = "month", d = "quarter", _ = "year", p = "date", H = "Invalid Date", L = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var n = ["th", "st", "nd", "rd"], t = r % 100;
      return "[" + r + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, N = function(r, n, t) {
      var s = String(r);
      return !s || s.length >= n ? r : "" + Array(n + 1 - s.length).join(t) + r;
    }, K = { s: N, z: function(r) {
      var n = -r.utcOffset(), t = Math.abs(n), s = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + N(s, 2, "0") + ":" + N(e, 2, "0");
    }, m: function r(n, t) {
      if (n.date() < t.date())
        return -r(t, n);
      var s = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(s, a), i = t - e < 0, o = n.clone().add(s + (i ? -1 : 1), a);
      return +(-(s + (t - e) / (i ? e - o : o - e)) || 0);
    }, a: function(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }, p: function(r) {
      return { M: a, y: _, w: z, d: O, D: p, h: S, m: $, s: C, ms: R, Q: d }[r] || String(r || "").toLowerCase().replace(/s$/, "");
    }, u: function(r) {
      return r === void 0;
    } }, W = "en", l = {};
    l[W] = G;
    var M = function(r) {
      return r instanceof E;
    }, w = function r(n, t, s) {
      var e;
      if (!n)
        return W;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        l[i] && (e = i), t && (l[i] = t, e = i);
        var o = n.split("-");
        if (!e && o.length > 1)
          return r(o[0]);
      } else {
        var f = n.name;
        l[f] = n, e = f;
      }
      return !s && e && (W = e), e || !s && W;
    }, h = function(r, n) {
      if (M(r))
        return r.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = r, t.args = arguments, new E(t);
    }, u = K;
    u.l = w, u.i = M, u.w = function(r, n) {
      return h(r, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var E = function() {
      function r(t) {
        this.$L = w(t.locale, null, !0), this.parse(t);
      }
      var n = r.prototype;
      return n.parse = function(t) {
        this.$d = function(s) {
          var e = s.date, i = s.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (u.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var o = e.match(L);
            if (o) {
              var f = o[2] - 1 || 0, v = (o[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(o[1], f, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, v)) : new Date(o[1], f, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, v);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return u;
      }, n.isValid = function() {
        return this.$d.toString() !== H;
      }, n.isSame = function(t, s) {
        var e = h(t);
        return this.startOf(s) <= e && e <= this.endOf(s);
      }, n.isAfter = function(t, s) {
        return h(t) < this.startOf(s);
      }, n.isBefore = function(t, s) {
        return this.endOf(s) < h(t);
      }, n.$g = function(t, s, e) {
        return u.u(t) ? this[s] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, s) {
        var e = this, i = !!u.u(s) || s, o = u.p(t), f = function(P, x) {
          var F = u.w(e.$u ? Date.UTC(e.$y, x, P) : new Date(e.$y, x, P), e);
          return i ? F : F.endOf(O);
        }, v = function(P, x) {
          return u.w(e.toDate()[P].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(x)), e);
        }, m = this.$W, D = this.$M, A = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (o) {
          case _:
            return i ? f(1, 0) : f(31, 11);
          case a:
            return i ? f(1, D) : f(0, D + 1);
          case z:
            var Q = this.$locale().weekStart || 0, X = (m < Q ? m + 7 : m) - Q;
            return f(i ? A - X : A + (6 - X), D);
          case O:
          case p:
            return v(V + "Hours", 0);
          case S:
            return v(V + "Minutes", 1);
          case $:
            return v(V + "Seconds", 2);
          case C:
            return v(V + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, s) {
        var e, i = u.p(t), o = "set" + (this.$u ? "UTC" : ""), f = (e = {}, e[O] = o + "Date", e[p] = o + "Date", e[a] = o + "Month", e[_] = o + "FullYear", e[S] = o + "Hours", e[$] = o + "Minutes", e[C] = o + "Seconds", e[R] = o + "Milliseconds", e)[i], v = i === O ? this.$D + (s - this.$W) : s;
        if (i === a || i === _) {
          var m = this.clone().set(p, 1);
          m.$d[f](v), m.init(), this.$d = m.set(p, Math.min(this.$D, m.daysInMonth())).$d;
        } else
          f && this.$d[f](v);
        return this.init(), this;
      }, n.set = function(t, s) {
        return this.clone().$set(t, s);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, s) {
        var e, i = this;
        t = Number(t);
        var o = u.p(s), f = function(D) {
          var A = h(i);
          return u.w(A.date(A.date() + Math.round(D * t)), i);
        };
        if (o === a)
          return this.set(a, this.$M + t);
        if (o === _)
          return this.set(_, this.$y + t);
        if (o === O)
          return f(1);
        if (o === z)
          return f(7);
        var v = (e = {}, e[$] = c, e[S] = y, e[C] = b, e)[o] || 1, m = this.$d.getTime() + t * v;
        return u.w(m, this);
      }, n.subtract = function(t, s) {
        return this.add(-1 * t, s);
      }, n.format = function(t) {
        var s = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || H;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", o = u.z(this), f = this.$H, v = this.$m, m = this.$M, D = e.weekdays, A = e.months, V = function(x, F, nt, tt) {
          return x && (x[F] || x(s, i)) || nt[F].slice(0, tt);
        }, Q = function(x) {
          return u.s(f % 12 || 12, x, "0");
        }, X = e.meridiem || function(x, F, nt) {
          var tt = x < 12 ? "AM" : "PM";
          return nt ? tt.toLowerCase() : tt;
        }, P = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: m + 1, MM: u.s(m + 1, 2, "0"), MMM: V(e.monthsShort, m, A, 3), MMMM: V(A, m), D: this.$D, DD: u.s(this.$D, 2, "0"), d: String(this.$W), dd: V(e.weekdaysMin, this.$W, D, 2), ddd: V(e.weekdaysShort, this.$W, D, 3), dddd: D[this.$W], H: String(f), HH: u.s(f, 2, "0"), h: Q(1), hh: Q(2), a: X(f, v, !0), A: X(f, v, !1), m: String(v), mm: u.s(v, 2, "0"), s: String(this.$s), ss: u.s(this.$s, 2, "0"), SSS: u.s(this.$ms, 3, "0"), Z: o };
        return i.replace(Z, function(x, F) {
          return F || P[x] || o.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, s, e) {
        var i, o = u.p(s), f = h(t), v = (f.utcOffset() - this.utcOffset()) * c, m = this - f, D = u.m(this, f);
        return D = (i = {}, i[_] = D / 12, i[a] = D, i[d] = D / 3, i[z] = (m - v) / 6048e5, i[O] = (m - v) / 864e5, i[S] = m / y, i[$] = m / c, i[C] = m / b, i)[o] || m, e ? D : u.a(D);
      }, n.daysInMonth = function() {
        return this.endOf(a).$D;
      }, n.$locale = function() {
        return l[this.$L];
      }, n.locale = function(t, s) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = w(t, s, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return u.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, r;
    }(), U = E.prototype;
    return h.prototype = U, [["$ms", R], ["$s", C], ["$m", $], ["$H", S], ["$W", O], ["$M", a], ["$y", _], ["$D", p]].forEach(function(r) {
      U[r[1]] = function(n) {
        return this.$g(n, r[0], r[1]);
      };
    }), h.extend = function(r, n) {
      return r.$i || (r(n, E, h), r.$i = !0), h;
    }, h.locale = w, h.isDayjs = M, h.unix = function(r) {
      return h(1e3 * r);
    }, h.en = l[W], h.Ls = l, h.p = {}, h;
  });
})(lt);
var yt = lt.exports;
const et = /* @__PURE__ */ ut(yt);
var ct = { exports: {} };
(function(k, B) {
  (function(b, c) {
    k.exports = c();
  })(it, function() {
    return function(b, c, y) {
      var R = c.prototype, C = function(a) {
        return a && (a.indexOf ? a : a.s);
      }, $ = function(a, d, _, p, H) {
        var L = a.name ? a : a.$locale(), Z = C(L[d]), G = C(L[_]), N = Z || G.map(function(W) {
          return W.slice(0, p);
        });
        if (!H)
          return N;
        var K = L.weekStart;
        return N.map(function(W, l) {
          return N[(l + (K || 0)) % 7];
        });
      }, S = function() {
        return y.Ls[y.locale()];
      }, O = function(a, d) {
        return a.formats[d] || function(_) {
          return _.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(p, H, L) {
            return H || L.slice(1);
          });
        }(a.formats[d.toUpperCase()]);
      }, z = function() {
        var a = this;
        return { months: function(d) {
          return d ? d.format("MMMM") : $(a, "months");
        }, monthsShort: function(d) {
          return d ? d.format("MMM") : $(a, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return a.$locale().weekStart || 0;
        }, weekdays: function(d) {
          return d ? d.format("dddd") : $(a, "weekdays");
        }, weekdaysMin: function(d) {
          return d ? d.format("dd") : $(a, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(d) {
          return d ? d.format("ddd") : $(a, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(d) {
          return O(a.$locale(), d);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      R.localeData = function() {
        return z.bind(this)();
      }, y.localeData = function() {
        var a = S();
        return { firstDayOfWeek: function() {
          return a.weekStart || 0;
        }, weekdays: function() {
          return y.weekdays();
        }, weekdaysShort: function() {
          return y.weekdaysShort();
        }, weekdaysMin: function() {
          return y.weekdaysMin();
        }, months: function() {
          return y.months();
        }, monthsShort: function() {
          return y.monthsShort();
        }, longDateFormat: function(d) {
          return O(a, d);
        }, meridiem: a.meridiem, ordinal: a.ordinal };
      }, y.months = function() {
        return $(S(), "months");
      }, y.monthsShort = function() {
        return $(S(), "monthsShort", "months", 3);
      }, y.weekdays = function(a) {
        return $(S(), "weekdays", null, null, a);
      }, y.weekdaysShort = function(a) {
        return $(S(), "weekdaysShort", "weekdays", 3, a);
      }, y.weekdaysMin = function(a) {
        return $(S(), "weekdaysMin", "weekdays", 2, a);
      };
    };
  });
})(ct);
var pt = ct.exports;
const Mt = /* @__PURE__ */ ut(pt), wt = ["aria-label"], gt = ["onClick"], St = /* @__PURE__ */ dt({
  __name: "calendar",
  props: {
    modelValue: [String, Number, Date],
    theme: {
      type: String,
      default: "black"
    },
    color: {
      type: String,
      default: "#0078d7"
    },
    maskColor: {
      type: String,
      default: "#818383"
    },
    maskSize: {
      type: Number,
      default: 150
    }
  },
  emits: ["update:modelValue"],
  setup(k, { emit: B }) {
    const b = k;
    et.extend(Mt);
    const { n: c } = vt("calendar"), y = q(), R = q(), C = q(!1), $ = q({
      left: "0px",
      top: "0px"
    }), S = j(() => y.value.getBoundingClientRect()), O = j(() => R.value.getBoundingClientRect()), z = j(() => ({
      "--es-calendar-color-bg": `var(--es-calendar-${b.theme}-bg)`,
      "--es-color-primary": b.color,
      "--es-text-color": `var(--es-calendar-${b.theme}-color)`,
      "--es-calendar-mask-color": b.maskColor,
      "--es-calendar-mask-size": b.maskSize + "px"
    })), a = (l) => {
      const M = l.clientX - S.value.left - O.value.width / 2, w = l.clientY - S.value.top - O.value.height / 2;
      $.value = { left: M + "px", top: w + "px" };
    }, d = j(() => p.value.get("year") + " " + p.value.format("MMMM")), _ = q(), p = j({
      get: () => b.modelValue ? et(b.modelValue) : et(_.value),
      set: (l) => {
        _.value = l, B("update:modelValue", l.toDate());
      }
    }), H = q([[], [], [], [], [], []]), L = j(
      () => p.value.locale("en").localeData().weekdaysShort().map((l) => l.toLowerCase())
    ), Z = j(() => L.value.map((l) => l[0].toUpperCase() + l.substring(1))), G = j(() => {
      const l = p.value.startOf("month");
      return l.subtract(l.day() || 7, "day");
    }), N = j(() => {
      const l = H.value, M = Z.value.length, w = p.value, h = w.startOf("month").day(), u = w.endOf("month").date();
      let E = 1;
      for (let U = 0; U < H.value.length; U++)
        for (let r = 0; r < M; r++) {
          const n = G.value.add(E, "day"), t = n.date(), s = n.format("YYYY-MM-DD") === p.value.format("YYYY-MM-DD");
          let e = "normal";
          E < h ? e = "prev-month" : E - h >= u && (e = "next-month"), l[U][r] = {
            type: e,
            date: n,
            text: t,
            isSelected: s
          }, E++;
        }
      return l;
    });
    function K(l) {
      p.value = l.date;
    }
    function W(l, M) {
      p.value = et(p.value.toDate()).add(M, l);
    }
    return (l, M) => (I(), J("div", {
      class: Y(g(c)()),
      style: ot(g(z))
    }, [
      T("div", {
        class: Y(g(c)("header"))
      }, [
        T("div", {
          class: Y([g(c)("header-title")])
        }, rt(g(d)), 3),
        T("div", {
          class: Y(g(c)("prev-btn")),
          onClick: M[0] || (M[0] = (w) => W("month", -1))
        }, null, 2),
        T("div", {
          class: Y(g(c)("next-btn")),
          onClick: M[1] || (M[1] = (w) => W("month", 1))
        }, null, 2)
      ], 2),
      T("div", {
        class: Y(g(c)("body")),
        ref_key: "wrapRef",
        ref: y,
        onMousemove: a,
        onMouseenter: M[2] || (M[2] = (w) => C.value = !0),
        onMouseleave: M[3] || (M[3] = (w) => C.value = !1)
      }, [
        T("table", {
          class: Y(g(c)("table")),
          cellpadding: "0",
          cellspacing: "0"
        }, [
          T("tbody", null, [
            T("tr", null, [
              (I(!0), J(at, null, st(g(Z), (w) => (I(), J("th", {
                "aria-label": w + "",
                scope: "col"
              }, [
                T("div", {
                  class: Y(g(c)("col-title"))
                }, rt(w), 3)
              ], 8, wt))), 256))
            ]),
            (I(!0), J(at, null, st(g(N), (w, h) => (I(), J("tr", { key: h }, [
              (I(!0), J(at, null, st(w, (u, E) => (I(), J("td", {
                key: `${h + E}`,
                class: Y([g(c)("col"), u.type, { selected: u.isSelected }]),
                onClick: (U) => K(u)
              }, [
                T("div", {
                  class: Y(g(c)("col-wrap"))
                }, [
                  T("div", {
                    class: Y(g(c)("col-wrap-box"))
                  }, [
                    T("div", {
                      class: Y(g(c)("col-inner"))
                    }, [
                      ft(l.$slots, "default", { data: u }, () => [
                        ht(rt(u.text), 1)
                      ])
                    ], 2)
                  ], 2)
                ], 2)
              ], 10, gt))), 128))
            ]))), 128))
          ])
        ], 2),
        mt(T("div", {
          ref_key: "maskRef",
          ref: R,
          class: Y(g(c)("circle")),
          style: ot($.value)
        }, null, 6), [
          [$t, C.value]
        ])
      ], 34)
    ], 6));
  }
});
const kt = (k) => {
  k.component("es-calendar", St);
};
export {
  vt as createNamespace,
  St as default,
  kt as install
};
