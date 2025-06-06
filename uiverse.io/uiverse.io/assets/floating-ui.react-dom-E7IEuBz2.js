import {
    c as H,
    o as I,
    s as J,
    f as K,
    a as N,
    h as Q,
    b as j,
    l as T
} from "./floating-ui.dom-Cian5nPY.js";
import {
    r as s
} from "./jsx-runtime-Dvja6b4T.js";
import {
    r as U
} from "./components-BuvoIJIj.js";
var w = typeof document < "u" ? s.useLayoutEffect : s.useEffect;

function R(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!R(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const p = o[r];
            if (!(p === "_owner" && e.$$typeof) && !R(e[p], t[p])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function z(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function L(e, t) {
    const n = z(e);
    return Math.round(t * n) / n
}

function v(e) {
    const t = s.useRef(e);
    return w(() => {
        t.current = e
    }), t
}

function te(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: p,
            floating: A
        } = {},
        transform: E = !0,
        whileElementsMounted: $,
        open: k
    } = e, [i, D] = s.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [x, q] = s.useState(r);
    R(x, r) || q(r);
    const [B, V] = s.useState(null), [W, b] = s.useState(null), _ = s.useCallback(f => {
        f !== a.current && (a.current = f, V(f))
    }, []), C = s.useCallback(f => {
        f !== d.current && (d.current = f, b(f))
    }, []), u = p || B, l = A || W, a = s.useRef(null), d = s.useRef(null), y = s.useRef(i), G = $ != null, M = v($), P = v(o), g = s.useCallback(() => {
        if (!a.current || !d.current) return;
        const f = {
            placement: t,
            strategy: n,
            middleware: x
        };
        P.current && (f.platform = P.current), H(a.current, d.current, f).then(h => {
            const m = { ...h,
                isPositioned: !0
            };
            S.current && !R(y.current, m) && (y.current = m, U.flushSync(() => {
                D(m)
            }))
        })
    }, [x, t, n, P]);
    w(() => {
        k === !1 && y.current.isPositioned && (y.current.isPositioned = !1, D(f => ({ ...f,
            isPositioned: !1
        })))
    }, [k]);
    const S = s.useRef(!1);
    w(() => (S.current = !0, () => {
        S.current = !1
    }), []), w(() => {
        if (u && (a.current = u), l && (d.current = l), u && l) {
            if (M.current) return M.current(u, l, g);
            g()
        }
    }, [u, l, g, M, G]);
    const F = s.useMemo(() => ({
            reference: a,
            floating: d,
            setReference: _,
            setFloating: C
        }), [_, C]),
        c = s.useMemo(() => ({
            reference: u,
            floating: l
        }), [u, l]),
        O = s.useMemo(() => {
            const f = {
                position: n,
                left: 0,
                top: 0
            };
            if (!c.floating) return f;
            const h = L(c.floating, i.x),
                m = L(c.floating, i.y);
            return E ? { ...f,
                transform: "translate(" + h + "px, " + m + "px)",
                ...z(c.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: h,
                top: m
            }
        }, [n, E, c.floating, i.x, i.y]);
    return s.useMemo(() => ({ ...i,
        update: g,
        refs: F,
        elements: c,
        floatingStyles: O
    }), [i, g, F, c, O])
}
const X = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? j({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? j({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    ne = (e, t) => ({ ...I(e),
        options: [e, t]
    }),
    re = (e, t) => ({ ...J(e),
        options: [e, t]
    }),
    se = (e, t) => ({ ...T(e),
        options: [e, t]
    }),
    fe = (e, t) => ({ ...K(e),
        options: [e, t]
    }),
    oe = (e, t) => ({ ...N(e),
        options: [e, t]
    }),
    ie = (e, t) => ({ ...Q(e),
        options: [e, t]
    }),
    ue = (e, t) => ({ ...X(e),
        options: [e, t]
    });
export {
    oe as a, ue as b, fe as f, ie as h, se as l, ne as o, re as s, te as u
};