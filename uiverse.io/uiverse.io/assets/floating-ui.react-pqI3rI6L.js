import {
    r as n,
    R as X
} from "./jsx-runtime-Dvja6b4T.js";
import {
    g as G,
    i as O,
    e as Q,
    j as P
} from "./floating-ui.dom-Cian5nPY.js";
import {
    r as M
} from "./components-BuvoIJIj.js";
import {
    u as Z,
    o as z
} from "./floating-ui.react-dom-E7IEuBz2.js";

function J() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(o => {
        let {
            brand: i,
            version: t
        } = o;
        return i + "/" + t
    }).join(" ") : navigator.userAgent
}
const _ = { ...X
    },
    ee = _.useInsertionEffect,
    te = ee || (e => e());

function $(e) {
    const o = n.useRef(() => {});
    return te(() => {
        o.current = e
    }), n.useCallback(function() {
        for (var i = arguments.length, t = new Array(i), c = 0; c < i; c++) t[c] = arguments[c];
        return o.current == null ? void 0 : o.current(...t)
    }, [])
}
var y = typeof document < "u" ? n.useLayoutEffect : n.useEffect;

function F() {
    return F = Object.assign ? Object.assign.bind() : function(e) {
        for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t])
        }
        return e
    }, F.apply(this, arguments)
}
let Y = !1,
    ne = 0;
const W = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ne++;

function oe() {
    const [e, o] = n.useState(() => Y ? W() : void 0);
    return y(() => {
        e == null && o(W())
    }, []), n.useEffect(() => {
        Y = !0
    }, []), e
}
const re = _.useId,
    k = re || oe,
    pe = n.forwardRef(function(o, i) {
        const {
            context: {
                placement: t,
                elements: {
                    floating: c
                },
                middlewareData: {
                    arrow: a
                }
            },
            width: r = 14,
            height: s = 7,
            tipRadius: p = 0,
            strokeWidth: d = 0,
            staticOffset: u,
            stroke: R,
            d: v,
            style: {
                transform: l,
                ...f
            } = {},
            ...g
        } = o, h = k(), [C, x] = n.useState(!1);
        if (y(() => {
                if (!c) return;
                G(c).direction === "rtl" && x(!0)
            }, [c]), !c) return null;
        const m = d * 2,
            w = m / 2,
            b = r / 2 * (p / -8 + 1),
            S = s / 2 * p / 4,
            [I, T] = t.split("-"),
            E = !!v,
            q = I === "top" || I === "bottom",
            K = u && T === "end" ? "bottom" : "top";
        let H = u && T === "end" ? "right" : "left";
        u && C && (H = T === "end" ? "left" : "right");
        const L = (a == null ? void 0 : a.x) != null ? u || a.x : "",
            N = (a == null ? void 0 : a.y) != null ? u || a.y : "",
            D = v || "M0,0" + (" H" + r) + (" L" + (r - b) + "," + (s - S)) + (" Q" + r / 2 + "," + s + " " + b + "," + (s - S)) + " Z",
            U = {
                top: E ? "rotate(180deg)" : "",
                left: E ? "rotate(90deg)" : "rotate(-90deg)",
                bottom: E ? "" : "rotate(180deg)",
                right: E ? "rotate(-90deg)" : "rotate(90deg)"
            }[I];
        return n.createElement("svg", F({}, g, {
            "aria-hidden": !0,
            ref: i,
            width: E ? r : r + m,
            height: r,
            viewBox: "0 0 " + r + " " + (s > r ? s : r),
            style: {
                position: "absolute",
                pointerEvents: "none",
                [H]: L,
                [K]: N,
                [I]: q || E ? "100%" : "calc(100% - " + m / 2 + "px)",
                transform: "" + U + (l ? ? ""),
                ...f
            }
        }), m > 0 && n.createElement("path", {
            clipPath: "url(#" + h + ")",
            fill: "none",
            stroke: R,
            strokeWidth: m + (v ? 0 : 1),
            d: D
        }), n.createElement("path", {
            stroke: m && !v ? g.fill : "none",
            d: D
        }), n.createElement("clipPath", {
            id: h
        }, n.createElement("rect", {
            x: -w,
            y: w * (E ? -1 : 1),
            width: r + m,
            height: r
        })))
    });

function se() {
    const e = new Map;
    return {
        emit(o, i) {
            var t;
            (t = e.get(o)) == null || t.forEach(c => c(i))
        },
        on(o, i) {
            e.set(o, [...e.get(o) || [], i])
        },
        off(o, i) {
            var t;
            e.set(o, ((t = e.get(o)) == null ? void 0 : t.filter(c => c !== i)) || [])
        }
    }
}
const le = n.createContext(null),
    ce = n.createContext(null),
    ie = () => {
        var e;
        return ((e = n.useContext(le)) == null ? void 0 : e.id) || null
    },
    fe = () => n.useContext(ce);

function ae(e) {
    const {
        open: o = !1,
        onOpenChange: i,
        elements: t
    } = e, c = k(), a = n.useRef({}), [r] = n.useState(() => se()), s = ie() != null, [p, d] = n.useState(t.reference), u = $((l, f, g) => {
        a.current.openEvent = l ? f : void 0, r.emit("openchange", {
            open: l,
            event: f,
            reason: g,
            nested: s
        }), i == null || i(l, f, g)
    }), R = n.useMemo(() => ({
        setPositionReference: d
    }), []), v = n.useMemo(() => ({
        reference: p || t.reference || null,
        floating: t.floating || null,
        domReference: t.reference
    }), [p, t.reference, t.floating]);
    return n.useMemo(() => ({
        dataRef: a,
        open: o,
        onOpenChange: u,
        elements: v,
        events: r,
        floatingId: c,
        refs: R
    }), [o, u, v, r, c, R])
}

function ve(e) {
    e === void 0 && (e = {});
    const {
        nodeId: o
    } = e, i = ae({ ...e,
        elements: {
            reference: null,
            floating: null,
            ...e.elements
        }
    }), t = e.rootContext || i, c = t.elements, [a, r] = n.useState(null), [s, p] = n.useState(null), u = (c == null ? void 0 : c.reference) || a, R = n.useRef(null), v = fe();
    y(() => {
        u && (R.current = u)
    }, [u]);
    const l = Z({ ...e,
            elements: { ...c,
                ...s && {
                    reference: s
                }
            }
        }),
        f = n.useCallback(m => {
            const w = O(m) ? {
                getBoundingClientRect: () => m.getBoundingClientRect(),
                contextElement: m
            } : m;
            p(w), l.refs.setReference(w)
        }, [l.refs]),
        g = n.useCallback(m => {
            (O(m) || m === null) && (R.current = m, r(m)), (O(l.refs.reference.current) || l.refs.reference.current === null || m !== null && !O(m)) && l.refs.setReference(m)
        }, [l.refs]),
        h = n.useMemo(() => ({ ...l.refs,
            setReference: g,
            setPositionReference: f,
            domReference: R
        }), [l.refs, g, f]),
        C = n.useMemo(() => ({ ...l.elements,
            domReference: u
        }), [l.elements, u]),
        x = n.useMemo(() => ({ ...l,
            ...t,
            refs: h,
            elements: C,
            nodeId: o
        }), [l, h, C, o, t]);
    return y(() => {
        t.dataRef.current.floatingContext = x;
        const m = v == null ? void 0 : v.nodesRef.current.find(w => w.id === o);
        m && (m.context = x)
    }), n.useMemo(() => ({ ...l,
        context: x,
        refs: h,
        elements: C
    }), [l, h, C, x])
}
const j = "active",
    B = "selected";

function A(e, o, i) {
    const t = new Map,
        c = i === "item";
    let a = e;
    if (c && e) {
        const {
            [j]: r, [B]: s, ...p
        } = e;
        a = p
    }
    return { ...i === "floating" && {
            tabIndex: -1
        },
        ...a,
        ...o.map(r => {
            const s = r ? r[i] : null;
            return typeof s == "function" ? e ? s(e) : null : s
        }).concat(e).reduce((r, s) => (s && Object.entries(s).forEach(p => {
            let [d, u] = p;
            if (!(c && [j, B].includes(d)))
                if (d.indexOf("on") === 0) {
                    if (t.has(d) || t.set(d, []), typeof u == "function") {
                        var R;
                        (R = t.get(d)) == null || R.push(u), r[d] = function() {
                            for (var v, l = arguments.length, f = new Array(l), g = 0; g < l; g++) f[g] = arguments[g];
                            return (v = t.get(d)) == null ? void 0 : v.map(h => h(...f)).find(h => h !== void 0)
                        }
                    }
                } else r[d] = u
        }), r), {})
    }
}

function Re(e) {
    e === void 0 && (e = []);
    const o = e.map(s => s == null ? void 0 : s.reference),
        i = e.map(s => s == null ? void 0 : s.floating),
        t = e.map(s => s == null ? void 0 : s.item),
        c = n.useCallback(s => A(s, e, "reference"), o),
        a = n.useCallback(s => A(s, e, "floating"), i),
        r = n.useCallback(s => A(s, e, "item"), t);
    return n.useMemo(() => ({
        getReferenceProps: c,
        getFloatingProps: a,
        getItemProps: r
    }), [c, a, r])
}

function V(e, o) {
    return { ...e,
        rects: { ...e.rects,
            floating: { ...e.rects.floating,
                height: o
            }
        }
    }
}
const xe = e => ({
    name: "inner",
    options: e,
    async fn(o) {
        const {
            listRef: i,
            overflowRef: t,
            onFallbackChange: c,
            offset: a = 0,
            index: r = 0,
            minItemsVisible: s = 4,
            referenceOverflowThreshold: p = 0,
            scrollRef: d,
            ...u
        } = Q(e, o), {
            rects: R,
            elements: {
                floating: v
            }
        } = o, l = i.current[r];
        if (!l) return {};
        const f = { ...o,
                ...await z(-l.offsetTop - v.clientTop - R.reference.height / 2 - l.offsetHeight / 2 - a).fn(o)
            },
            g = (d == null ? void 0 : d.current) || v,
            h = await P(V(f, g.scrollHeight), u),
            C = await P(f, { ...u,
                elementContext: "reference"
            }),
            x = Math.max(0, h.top),
            m = f.y + x,
            w = Math.max(0, g.scrollHeight - x - Math.max(0, h.bottom));
        return g.style.maxHeight = w + "px", g.scrollTop = x, c && (g.offsetHeight < l.offsetHeight * Math.min(s, i.current.length - 1) - 1 || C.top >= -p || C.bottom >= -p ? M.flushSync(() => c(!0)) : M.flushSync(() => c(!1))), t && (t.current = await P(V({ ...f,
            y: m
        }, g.offsetHeight), u)), {
            y: m
        }
    }
});

function Ce(e, o) {
    const {
        open: i,
        elements: t
    } = e, {
        enabled: c = !0,
        overflowRef: a,
        scrollRef: r,
        onChange: s
    } = o, p = $(s), d = n.useRef(!1), u = n.useRef(null), R = n.useRef(null);
    n.useEffect(() => {
        if (!c) return;

        function l(g) {
            if (g.ctrlKey || !f || a.current == null) return;
            const h = g.deltaY,
                C = a.current.top >= -.5,
                x = a.current.bottom >= -.5,
                m = f.scrollHeight - f.clientHeight,
                w = h < 0 ? -1 : 1,
                b = h < 0 ? "max" : "min";
            f.scrollHeight <= f.clientHeight || (!C && h > 0 || !x && h < 0 ? (g.preventDefault(), M.flushSync(() => {
                p(S => S + Math[b](h, m * w))
            })) : /firefox/i.test(J()) && (f.scrollTop += h))
        }
        const f = (r == null ? void 0 : r.current) || t.floating;
        if (i && f) return f.addEventListener("wheel", l), requestAnimationFrame(() => {
            u.current = f.scrollTop, a.current != null && (R.current = { ...a.current
            })
        }), () => {
            u.current = null, R.current = null, f.removeEventListener("wheel", l)
        }
    }, [c, i, t.floating, a, r, p]);
    const v = n.useMemo(() => ({
        onKeyDown() {
            d.current = !0
        },
        onWheel() {
            d.current = !1
        },
        onPointerMove() {
            d.current = !1
        },
        onScroll() {
            const l = (r == null ? void 0 : r.current) || t.floating;
            if (!(!a.current || !l || !d.current)) {
                if (u.current !== null) {
                    const f = l.scrollTop - u.current;
                    (a.current.bottom < -.5 && f < -1 || a.current.top < -.5 && f > 1) && M.flushSync(() => p(g => g + f))
                }
                requestAnimationFrame(() => {
                    u.current = l.scrollTop
                })
            }
        }
    }), [t.floating, p, a, r]);
    return n.useMemo(() => c ? {
        floating: v
    } : {}, [c, v])
}
export {
    pe as F, Ce as a, Re as b, xe as i, ve as u
};