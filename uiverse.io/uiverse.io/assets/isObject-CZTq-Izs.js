import {
    c as o,
    g as j
} from "./jsx-runtime-Dvja6b4T.js";
var l = typeof o == "object" && o && o.Object === Object && o,
    v = l,
    T = v,
    y = typeof self == "object" && self && self.Object === Object && self,
    O = T || y || Function("return this")(),
    S = O,
    u = S,
    d = u.Symbol,
    i = d,
    a = i,
    b = Object.prototype,
    p = b.hasOwnProperty,
    m = b.toString,
    e = a ? a.toStringTag : void 0;

function $(t) {
    var r = p.call(t, e),
        s = t[e];
    try {
        t[e] = void 0;
        var f = !0
    } catch {}
    var g = m.call(t);
    return f && (r ? t[e] = s : delete t[e]), g
}
var _ = $,
    w = Object.prototype,
    G = w.toString;

function h(t) {
    return G.call(t)
}
var P = h,
    n = i,
    R = _,
    k = P,
    x = "[object Null]",
    F = "[object Undefined]",
    c = n ? n.toStringTag : void 0;

function L(t) {
    return t == null ? t === void 0 ? F : x : c && c in Object(t) ? R(t) : k(t)
}
var q = L;

function C(t) {
    return t != null && typeof t == "object"
}
var z = C;

function D(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function")
}
var E = D;
const A = j(E);
export {
    S as _, q as a, E as b, v as c, i as d, A as e, z as i
};