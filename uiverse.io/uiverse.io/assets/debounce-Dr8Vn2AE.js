import {
    g as N
} from "./jsx-runtime-Dvja6b4T.js";
import {
    _ as W,
    a as C,
    i as A,
    b as O
} from "./isObject-CZTq-Izs.js";
var M = W,
    B = function() {
        return M.Date.now()
    },
    F = B,
    R = /\s/;

function D(e) {
    for (var r = e.length; r-- && R.test(e.charAt(r)););
    return r
}
var G = D,
    H = G,
    P = /^\s+/;

function U(e) {
    return e && e.slice(0, H(e) + 1).replace(P, "")
}
var X = U,
    q = C,
    w = A,
    z = "[object Symbol]";

function J(e) {
    return typeof e == "symbol" || w(e) && q(e) == z
}
var K = J,
    Q = X,
    h = O,
    V = K,
    E = NaN,
    Y = /^[-+]0x[0-9a-f]+$/i,
    Z = /^0b[01]+$/i,
    ee = /^0o[0-7]+$/i,
    ne = parseInt;

function re(e) {
    if (typeof e == "number") return e;
    if (V(e)) return E;
    if (h(e)) {
        var r = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = h(r) ? r + "" : r
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = Q(e);
    var i = Z.test(e);
    return i || ee.test(e) ? ne(e.slice(2), i ? 2 : 8) : Y.test(e) ? E : +e
}
var te = re,
    ie = O,
    x = F,
    $ = te,
    ae = "Expected a function",
    se = Math.max,
    oe = Math.min;

function fe(e, r, i) {
    var o, u, b, f, t, s, m = 0,
        y = !1,
        c = !1,
        v = !0;
    if (typeof e != "function") throw new TypeError(ae);
    r = $(r) || 0, ie(i) && (y = !!i.leading, c = "maxWait" in i, b = c ? se($(i.maxWait) || 0, r) : b, v = "trailing" in i ? !!i.trailing : v);

    function g(n) {
        var a = o,
            d = u;
        return o = u = void 0, m = n, f = e.apply(d, a), f
    }

    function S(n) {
        return m = n, t = setTimeout(l, r), y ? g(n) : f
    }

    function k(n) {
        var a = n - s,
            d = n - m,
            p = r - a;
        return c ? oe(p, b - d) : p
    }

    function I(n) {
        var a = n - s,
            d = n - m;
        return s === void 0 || a >= r || a < 0 || c && d >= b
    }

    function l() {
        var n = x();
        if (I(n)) return _(n);
        t = setTimeout(l, k(n))
    }

    function _(n) {
        return t = void 0, v && o ? g(n) : (o = u = void 0, f)
    }

    function j() {
        t !== void 0 && clearTimeout(t), m = 0, o = s = u = t = void 0
    }

    function L() {
        return t === void 0 ? f : _(x())
    }

    function T() {
        var n = x(),
            a = I(n);
        if (o = arguments, u = this, s = n, a) {
            if (t === void 0) return S(s);
            if (c) return clearTimeout(t), t = setTimeout(l, r), g(s)
        }
        return t === void 0 && (t = setTimeout(l, r)), f
    }
    return T.cancel = j, T.flush = L, T
}
var ue = fe;
const de = N(ue);
export {
    ue as a, de as d, K as i, te as t
};