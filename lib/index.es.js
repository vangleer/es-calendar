import { defineComponent as dt, ref as q, computed as R, openBlock as U, createElementBlock as J, normalizeClass as Y, unref as D, normalizeStyle as ot, createElementVNode as T, toDisplayString as rt, Fragment as at, renderList as st, renderSlot as ft, createTextVNode as ht, withDirectives as mt, vShow as vt } from "vue";
function $t(M) {
  const H = `es-${M}`;
  return {
    n: (c) => c ? c.startsWith("--") ? `${H}${c}` : `${H}__${c}` : H
  };
}
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(M) {
  return M && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M;
}
var lt = { exports: {} };
(function(M, H) {
  (function(S, c) {
    M.exports = c();
  })(it, function() {
    var S = 1e3, c = 6e4, v = 36e5, z = "millisecond", C = "second", $ = "minute", k = "hour", O = "day", A = "week", a = "month", d = "quarter", b = "year", y = "date", L = "Invalid Date", N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var n = ["th", "st", "nd", "rd"], t = r % 100;
      return "[" + r + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, V = function(r, n, t) {
      var s = String(r);
      return !s || s.length >= n ? r : "" + Array(n + 1 - s.length).join(t) + r;
    }, K = { s: V, z: function(r) {
      var n = -r.utcOffset(), t = Math.abs(n), s = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + V(s, 2, "0") + ":" + V(e, 2, "0");
    }, m: function r(n, t) {
      if (n.date() < t.date())
        return -r(t, n);
      var s = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(s, a), i = t - e < 0, o = n.clone().add(s + (i ? -1 : 1), a);
      return +(-(s + (t - e) / (i ? e - o : o - e)) || 0);
    }, a: function(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }, p: function(r) {
      return { M: a, y: b, w: A, d: O, D: y, h: k, m: $, s: C, ms: z, Q: d }[r] || String(r || "").toLowerCase().replace(/s$/, "");
    }, u: function(r) {
      return r === void 0;
    } }, W = "en", l = {};
    l[W] = G;
    var w = function(r) {
      return r instanceof E;
    }, g = function r(n, t, s) {
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
      if (w(r))
        return r.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = r, t.args = arguments, new E(t);
    }, u = K;
    u.l = g, u.i = w, u.w = function(r, n) {
      return h(r, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var E = function() {
      function r(t) {
        this.$L = g(t.locale, null, !0), this.parse(t);
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
            var o = e.match(N);
            if (o) {
              var f = o[2] - 1 || 0, p = (o[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(o[1], f, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, p)) : new Date(o[1], f, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, p);
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
        return this.$d.toString() !== L;
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
          var B = u.w(e.$u ? Date.UTC(e.$y, x, P) : new Date(e.$y, x, P), e);
          return i ? B : B.endOf(O);
        }, p = function(P, x) {
          return u.w(e.toDate()[P].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(x)), e);
        }, m = this.$W, _ = this.$M, F = this.$D, j = "set" + (this.$u ? "UTC" : "");
        switch (o) {
          case b:
            return i ? f(1, 0) : f(31, 11);
          case a:
            return i ? f(1, _) : f(0, _ + 1);
          case A:
            var Q = this.$locale().weekStart || 0, X = (m < Q ? m + 7 : m) - Q;
            return f(i ? F - X : F + (6 - X), _);
          case O:
          case y:
            return p(j + "Hours", 0);
          case k:
            return p(j + "Minutes", 1);
          case $:
            return p(j + "Seconds", 2);
          case C:
            return p(j + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, s) {
        var e, i = u.p(t), o = "set" + (this.$u ? "UTC" : ""), f = (e = {}, e[O] = o + "Date", e[y] = o + "Date", e[a] = o + "Month", e[b] = o + "FullYear", e[k] = o + "Hours", e[$] = o + "Minutes", e[C] = o + "Seconds", e[z] = o + "Milliseconds", e)[i], p = i === O ? this.$D + (s - this.$W) : s;
        if (i === a || i === b) {
          var m = this.clone().set(y, 1);
          m.$d[f](p), m.init(), this.$d = m.set(y, Math.min(this.$D, m.daysInMonth())).$d;
        } else
          f && this.$d[f](p);
        return this.init(), this;
      }, n.set = function(t, s) {
        return this.clone().$set(t, s);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, s) {
        var e, i = this;
        t = Number(t);
        var o = u.p(s), f = function(_) {
          var F = h(i);
          return u.w(F.date(F.date() + Math.round(_ * t)), i);
        };
        if (o === a)
          return this.set(a, this.$M + t);
        if (o === b)
          return this.set(b, this.$y + t);
        if (o === O)
          return f(1);
        if (o === A)
          return f(7);
        var p = (e = {}, e[$] = c, e[k] = v, e[C] = S, e)[o] || 1, m = this.$d.getTime() + t * p;
        return u.w(m, this);
      }, n.subtract = function(t, s) {
        return this.add(-1 * t, s);
      }, n.format = function(t) {
        var s = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || L;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", o = u.z(this), f = this.$H, p = this.$m, m = this.$M, _ = e.weekdays, F = e.months, j = function(x, B, nt, tt) {
          return x && (x[B] || x(s, i)) || nt[B].slice(0, tt);
        }, Q = function(x) {
          return u.s(f % 12 || 12, x, "0");
        }, X = e.meridiem || function(x, B, nt) {
          var tt = x < 12 ? "AM" : "PM";
          return nt ? tt.toLowerCase() : tt;
        }, P = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: m + 1, MM: u.s(m + 1, 2, "0"), MMM: j(e.monthsShort, m, F, 3), MMMM: j(F, m), D: this.$D, DD: u.s(this.$D, 2, "0"), d: String(this.$W), dd: j(e.weekdaysMin, this.$W, _, 2), ddd: j(e.weekdaysShort, this.$W, _, 3), dddd: _[this.$W], H: String(f), HH: u.s(f, 2, "0"), h: Q(1), hh: Q(2), a: X(f, p, !0), A: X(f, p, !1), m: String(p), mm: u.s(p, 2, "0"), s: String(this.$s), ss: u.s(this.$s, 2, "0"), SSS: u.s(this.$ms, 3, "0"), Z: o };
        return i.replace(Z, function(x, B) {
          return B || P[x] || o.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, s, e) {
        var i, o = u.p(s), f = h(t), p = (f.utcOffset() - this.utcOffset()) * c, m = this - f, _ = u.m(this, f);
        return _ = (i = {}, i[b] = _ / 12, i[a] = _, i[d] = _ / 3, i[A] = (m - p) / 6048e5, i[O] = (m - p) / 864e5, i[k] = m / v, i[$] = m / c, i[C] = m / S, i)[o] || m, e ? _ : u.a(_);
      }, n.daysInMonth = function() {
        return this.endOf(a).$D;
      }, n.$locale = function() {
        return l[this.$L];
      }, n.locale = function(t, s) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = g(t, s, !0);
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
    }(), I = E.prototype;
    return h.prototype = I, [["$ms", z], ["$s", C], ["$m", $], ["$H", k], ["$W", O], ["$M", a], ["$y", b], ["$D", y]].forEach(function(r) {
      I[r[1]] = function(n) {
        return this.$g(n, r[0], r[1]);
      };
    }), h.extend = function(r, n) {
      return r.$i || (r(n, E, h), r.$i = !0), h;
    }, h.locale = g, h.isDayjs = w, h.unix = function(r) {
      return h(1e3 * r);
    }, h.en = l[W], h.Ls = l, h.p = {}, h;
  });
})(lt);
var pt = lt.exports;
const et = /* @__PURE__ */ ut(pt);
var ct = { exports: {} };
(function(M, H) {
  (function(S, c) {
    M.exports = c();
  })(it, function() {
    return function(S, c, v) {
      var z = c.prototype, C = function(a) {
        return a && (a.indexOf ? a : a.s);
      }, $ = function(a, d, b, y, L) {
        var N = a.name ? a : a.$locale(), Z = C(N[d]), G = C(N[b]), V = Z || G.map(function(W) {
          return W.slice(0, y);
        });
        if (!L)
          return V;
        var K = N.weekStart;
        return V.map(function(W, l) {
          return V[(l + (K || 0)) % 7];
        });
      }, k = function() {
        return v.Ls[v.locale()];
      }, O = function(a, d) {
        return a.formats[d] || function(b) {
          return b.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, L, N) {
            return L || N.slice(1);
          });
        }(a.formats[d.toUpperCase()]);
      }, A = function() {
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
      z.localeData = function() {
        return A.bind(this)();
      }, v.localeData = function() {
        var a = k();
        return { firstDayOfWeek: function() {
          return a.weekStart || 0;
        }, weekdays: function() {
          return v.weekdays();
        }, weekdaysShort: function() {
          return v.weekdaysShort();
        }, weekdaysMin: function() {
          return v.weekdaysMin();
        }, months: function() {
          return v.months();
        }, monthsShort: function() {
          return v.monthsShort();
        }, longDateFormat: function(d) {
          return O(a, d);
        }, meridiem: a.meridiem, ordinal: a.ordinal };
      }, v.months = function() {
        return $(k(), "months");
      }, v.monthsShort = function() {
        return $(k(), "monthsShort", "months", 3);
      }, v.weekdays = function(a) {
        return $(k(), "weekdays", null, null, a);
      }, v.weekdaysShort = function(a) {
        return $(k(), "weekdaysShort", "weekdays", 3, a);
      }, v.weekdaysMin = function(a) {
        return $(k(), "weekdaysMin", "weekdays", 2, a);
      };
    };
  });
})(ct);
var yt = ct.exports;
const Mt = /* @__PURE__ */ ut(yt), wt = ["aria-label"], gt = ["onClick"], St = /* @__PURE__ */ dt({
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
  setup(M, { emit: H }) {
    const S = M;
    et.extend(Mt);
    const { n: c } = $t("calendar"), v = q(), z = q(), C = q(!1), $ = q({
      left: "0px",
      top: "0px"
    }), k = R(() => v.value.getBoundingClientRect()), O = R(() => z.value.getBoundingClientRect()), A = R(() => ({
      "--es-calendar-color-bg": `var(--es-calendar-${S.theme}-bg)`,
      "--es-color-primary": S.color,
      "--es-text-color": `var(--es-calendar-${S.theme}-color)`,
      "--es-calendar-mask-color": S.maskColor,
      "--es-calendar-mask-size": S.maskSize + "px"
    })), a = (l) => {
      const w = l.clientX - k.value.left - O.value.width / 2, g = l.clientY - k.value.top - O.value.height / 2;
      $.value = { left: w + "px", top: g + "px" };
    }, d = R(() => y.value.get("year") + " " + y.value.format("MMMM")), b = q(), y = R({
      get: () => S.modelValue ? et(S.modelValue) : et(b.value),
      set: (l) => {
        b.value = l, H("update:modelValue", l.toDate());
      }
    }), L = q([[], [], [], [], [], []]), N = R(
      () => y.value.locale("en").localeData().weekdaysShort().map((l) => l.toLowerCase())
    ), Z = R(() => N.value.map((l) => l[0].toUpperCase() + l.substring(1))), G = R(() => {
      const l = y.value.startOf("month");
      return l.subtract(l.day() || 7, "day");
    }), V = R(() => {
      const l = L.value, w = Z.value.length, g = y.value, h = g.startOf("month").day(), u = g.endOf("month").date();
      let E = 1;
      for (let I = 0; I < L.value.length; I++)
        for (let r = 0; r < w; r++) {
          const n = G.value.add(E, "day"), t = n.date(), s = n.format("YYYY-MM-DD") === y.value.format("YYYY-MM-DD");
          let e = "normal";
          E < h ? e = "prev-month" : E - h >= u && (e = "next-month"), l[I][r] = {
            type: e,
            date: n,
            text: t,
            isSelected: s
          }, E++;
        }
      return l;
    });
    function K(l) {
      y.value = l.date;
    }
    function W(l, w) {
      y.value = et(y.value.toDate()).add(w, l);
    }
    return (l, w) => (U(), J("div", {
      class: Y(D(c)()),
      style: ot(D(A))
    }, [
      T("div", {
        class: Y(D(c)("header"))
      }, [
        T("div", {
          class: Y([D(c)("header-title")])
        }, rt(D(d)), 3),
        T("div", {
          class: Y(D(c)("prev-btn")),
          onClick: w[0] || (w[0] = (g) => W("month", -1))
        }, null, 2),
        T("div", {
          class: Y(D(c)("next-btn")),
          onClick: w[1] || (w[1] = (g) => W("month", 1))
        }, null, 2)
      ], 2),
      T("div", {
        class: Y(D(c)("body")),
        ref_key: "wrapRef",
        ref: v,
        onMousemove: a,
        onMouseenter: w[2] || (w[2] = (g) => C.value = !0),
        onMouseleave: w[3] || (w[3] = (g) => C.value = !1)
      }, [
        T("table", {
          class: Y(D(c)("table")),
          cellpadding: "0",
          cellspacing: "0"
        }, [
          T("tbody", null, [
            T("tr", null, [
              (U(!0), J(at, null, st(D(Z), (g) => (U(), J("th", {
                "aria-label": g + "",
                scope: "col"
              }, [
                T("div", {
                  class: Y(D(c)("col-title"))
                }, rt(g), 3)
              ], 8, wt))), 256))
            ]),
            (U(!0), J(at, null, st(D(V), (g, h) => (U(), J("tr", { key: h }, [
              (U(!0), J(at, null, st(g, (u, E) => (U(), J("td", {
                key: `${h + E}`,
                class: Y([D(c)("col"), u.type, { selected: u.isSelected }]),
                onClick: (I) => K(u)
              }, [
                T("div", {
                  class: Y(D(c)("col-wrap"))
                }, [
                  T("div", {
                    class: Y(D(c)("col-wrap-box"))
                  }, [
                    T("div", {
                      class: Y(D(c)("col-inner"))
                    }, [
                      ft(l.$slots, "default", { data: u }, () => [
                        ht(rt(u.text), 1)
                      ], !0)
                    ], 2)
                  ], 2)
                ], 2)
              ], 10, gt))), 128))
            ]))), 128))
          ])
        ], 2),
        mt(T("div", {
          ref_key: "maskRef",
          ref: z,
          class: Y(D(c)("circle")),
          style: ot($.value)
        }, null, 6), [
          [vt, C.value]
        ])
      ], 34)
    ], 6));
  }
});
const Dt = (M, H) => {
  const S = M.__vccOpts || M;
  for (const [c, v] of H)
    S[c] = v;
  return S;
}, kt = /* @__PURE__ */ Dt(St, [["__scopeId", "data-v-cc54d846"]]), bt = (M) => {
  M.component("es-calendar", kt);
};
export {
  $t as createNamespace,
  kt as default,
  bt as install
};
