import {
    r,
    j as X
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as A
} from "./index-DW48STyt.js";
import {
    u as Z,
    P as Y,
    d as te
} from "./index-w1qRmSKj.js";
import {
    u as G,
    a as re
} from "./index-CcT0GIt8.js";
import {
    a as ne
} from "./index-ccF5fHaF.js";
import {
    C as ae
} from "./components-BuvoIJIj.js";
import {
    c as oe,
    _ as se,
    u as ie,
    a as B,
    f as ce,
    z as le,
    s as ue,
    b as de,
    R as fe,
    e as ve
} from "./component-5ZU33JcH.js";
var he = "DismissableLayer",
    F = "dismissableLayer.update",
    me = "dismissableLayer.pointerDownOutside",
    Ee = "dismissableLayer.focusOutside",
    H, q = r.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    be = r.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: o = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: i,
            onFocusOutside: c,
            onInteractOutside: f,
            onDismiss: s,
            ...m
        } = e, u = r.useContext(q), [v, S] = r.useState(null), E = (v == null ? void 0 : v.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, w] = r.useState({}), P = Z(t, d => S(d)), a = Array.from(u.layers), [l] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), b = a.indexOf(l), y = v ? a.indexOf(v) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= b, h = Ce(d => {
            const L = d.target,
                T = [...u.branches].some(N => N.contains(L));
            !C || T || (i == null || i(d), f == null || f(d), d.defaultPrevented || s == null || s())
        }, E), R = Se(d => {
            const L = d.target;
            [...u.branches].some(N => N.contains(L)) || (c == null || c(d), f == null || f(d), d.defaultPrevented || s == null || s())
        }, E);
        return ne(d => {
            y === u.layers.size - 1 && (n == null || n(d), !d.defaultPrevented && s && (d.preventDefault(), s()))
        }, E), r.useEffect(() => {
            if (v) return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (H = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(v)), u.layers.add(v), _(), () => {
                o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = H)
            }
        }, [v, E, o, u]), r.useEffect(() => () => {
            v && (u.layers.delete(v), u.layersWithOutsidePointerEventsDisabled.delete(v), _())
        }, [v, u]), r.useEffect(() => {
            const d = () => w({});
            return document.addEventListener(F, d), () => document.removeEventListener(F, d)
        }, []), X.jsx(Y.div, { ...m,
            ref: P,
            style: {
                pointerEvents: g ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: A(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: A(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: A(e.onPointerDownCapture, h.onPointerDownCapture)
        })
    });
be.displayName = he;
var ye = "DismissableLayerBranch",
    ge = r.forwardRef((e, t) => {
        const o = r.useContext(q),
            n = r.useRef(null),
            i = Z(t, n);
        return r.useEffect(() => {
            const c = n.current;
            if (c) return o.branches.add(c), () => {
                o.branches.delete(c)
            }
        }, [o.branches]), X.jsx(Y.div, { ...e,
            ref: i
        })
    });
ge.displayName = ye;

function Ce(e, t = globalThis == null ? void 0 : globalThis.document) {
    const o = G(e),
        n = r.useRef(!1),
        i = r.useRef(() => {});
    return r.useEffect(() => {
        const c = s => {
                if (s.target && !n.current) {
                    let m = function() {
                        Q(me, o, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = m, t.addEventListener("click", i.current, {
                        once: !0
                    })) : m()
                } else t.removeEventListener("click", i.current);
                n.current = !1
            },
            f = window.setTimeout(() => {
                t.addEventListener("pointerdown", c)
            }, 0);
        return () => {
            window.clearTimeout(f), t.removeEventListener("pointerdown", c), t.removeEventListener("click", i.current)
        }
    }, [t, o]), {
        onPointerDownCapture: () => n.current = !0
    }
}

function Se(e, t = globalThis == null ? void 0 : globalThis.document) {
    const o = G(e),
        n = r.useRef(!1);
    return r.useEffect(() => {
        const i = c => {
            c.target && !n.current && Q(Ee, o, {
                originalEvent: c
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i)
    }, [t, o]), {
        onFocusCapture: () => n.current = !0,
        onBlurCapture: () => n.current = !1
    }
}

function _() {
    const e = new CustomEvent(F);
    document.dispatchEvent(e)
}

function Q(e, t, o, {
    discrete: n
}) {
    const i = o.originalEvent.target,
        c = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: o
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), n ? te(i, c) : i.dispatchEvent(c)
}
var M = 0;

function Ue() {
    r.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? j()), document.body.insertAdjacentElement("beforeend", e[1] ? ? j()), M++, () => {
            M === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), M--
        }
    }, [])
}

function j() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
var we = "Portal",
    Pe = r.forwardRef((e, t) => {
        var s;
        const {
            container: o,
            ...n
        } = e, [i, c] = r.useState(!1);
        re(() => c(!0), []);
        const f = o || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
        return f ? ae.createPortal(X.jsx(Y.div, { ...n,
            ref: t
        }), f) : null
    });
Pe.displayName = we;
var J = oe(),
    W = function() {},
    x = r.forwardRef(function(e, t) {
        var o = r.useRef(null),
            n = r.useState({
                onScrollCapture: W,
                onWheelCapture: W,
                onTouchMoveCapture: W
            }),
            i = n[0],
            c = n[1],
            f = e.forwardProps,
            s = e.children,
            m = e.className,
            u = e.removeScrollBar,
            v = e.enabled,
            S = e.shards,
            E = e.sideCar,
            w = e.noIsolation,
            P = e.inert,
            a = e.allowPinchZoom,
            l = e.as,
            b = l === void 0 ? "div" : l,
            y = e.gapMode,
            g = se(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = E,
            h = ie([o, t]),
            R = B(B({}, g), i);
        return r.createElement(r.Fragment, null, v && r.createElement(C, {
            sideCar: J,
            removeScrollBar: u,
            shards: S,
            noIsolation: w,
            inert: P,
            setCallbacks: c,
            allowPinchZoom: !!a,
            lockRef: o,
            gapMode: y
        }), f ? r.cloneElement(r.Children.only(s), B(B({}, R), {
            ref: h
        })) : r.createElement(b, B({}, R, {
            className: m,
            ref: h
        }), s))
    });
x.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
x.classNames = {
    fullWidth: ce,
    zeroRight: le
};
var I = !1;
if (typeof window < "u") try {
    var k = Object.defineProperty({}, "passive", {
        get: function() {
            return I = !0, !0
        }
    });
    window.addEventListener("test", k, k), window.removeEventListener("test", k, k)
} catch {
    I = !1
}
var p = I ? {
        passive: !1
    } : !1,
    Re = function(e) {
        return e.tagName === "TEXTAREA"
    },
    K = function(e, t) {
        var o = window.getComputedStyle(e);
        return o[t] !== "hidden" && !(o.overflowY === o.overflowX && !Re(e) && o[t] === "visible")
    },
    Le = function(e) {
        return K(e, "overflowY")
    },
    pe = function(e) {
        return K(e, "overflowX")
    },
    z = function(e, t) {
        var o = t.ownerDocument,
            n = t;
        do {
            typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
            var i = $(e, n);
            if (i) {
                var c = ee(e, n),
                    f = c[1],
                    s = c[2];
                if (f > s) return !0
            }
            n = n.parentNode
        } while (n && n !== o.body);
        return !1
    },
    De = function(e) {
        var t = e.scrollTop,
            o = e.scrollHeight,
            n = e.clientHeight;
        return [t, o, n]
    },
    Be = function(e) {
        var t = e.scrollLeft,
            o = e.scrollWidth,
            n = e.clientWidth;
        return [t, o, n]
    },
    $ = function(e, t) {
        return e === "v" ? Le(t) : pe(t)
    },
    ee = function(e, t) {
        return e === "v" ? De(t) : Be(t)
    },
    Te = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    ke = function(e, t, o, n, i) {
        var c = Te(e, window.getComputedStyle(t).direction),
            f = c * n,
            s = o.target,
            m = t.contains(s),
            u = !1,
            v = f > 0,
            S = 0,
            E = 0;
        do {
            var w = ee(e, s),
                P = w[0],
                a = w[1],
                l = w[2],
                b = a - l - c * P;
            (P || b) && $(e, s) && (S += b, E += P), s instanceof ShadowRoot ? s = s.host : s = s.parentNode
        } while (!m && s !== document.body || m && (t.contains(s) || t === s));
        return (v && (Math.abs(S) < 1 || !i) || !v && (Math.abs(E) < 1 || !i)) && (u = !0), u
    },
    O = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    U = function(e) {
        return [e.deltaX, e.deltaY]
    },
    V = function(e) {
        return e && "current" in e ? e.current : e
    },
    Oe = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    xe = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    Ne = 0,
    D = [];

function Ae(e) {
    var t = r.useRef([]),
        o = r.useRef([0, 0]),
        n = r.useRef(),
        i = r.useState(Ne++)[0],
        c = r.useState(ue)[0],
        f = r.useRef(e);
    r.useEffect(function() {
        f.current = e
    }, [e]), r.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var a = de([e.lockRef.current], (e.shards || []).map(V), !0).filter(Boolean);
            return a.forEach(function(l) {
                    return l.classList.add("allow-interactivity-".concat(i))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(i)), a.forEach(function(l) {
                        return l.classList.remove("allow-interactivity-".concat(i))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = r.useCallback(function(a, l) {
            if ("touches" in a && a.touches.length === 2) return !f.current.allowPinchZoom;
            var b = O(a),
                y = o.current,
                g = "deltaX" in a ? a.deltaX : y[0] - b[0],
                C = "deltaY" in a ? a.deltaY : y[1] - b[1],
                h, R = a.target,
                d = Math.abs(g) > Math.abs(C) ? "h" : "v";
            if ("touches" in a && d === "h" && R.type === "range") return !1;
            var L = z(d, R);
            if (!L) return !0;
            if (L ? h = d : (h = d === "v" ? "h" : "v", L = z(d, R)), !L) return !1;
            if (!n.current && "changedTouches" in a && (g || C) && (n.current = h), !h) return !0;
            var T = n.current || h;
            return ke(T, l, a, T === "h" ? g : C, !0)
        }, []),
        m = r.useCallback(function(a) {
            var l = a;
            if (!(!D.length || D[D.length - 1] !== c)) {
                var b = "deltaY" in l ? U(l) : O(l),
                    y = t.current.filter(function(h) {
                        return h.name === l.type && (h.target === l.target || l.target === h.shadowParent) && Oe(h.delta, b)
                    })[0];
                if (y && y.should) {
                    l.cancelable && l.preventDefault();
                    return
                }
                if (!y) {
                    var g = (f.current.shards || []).map(V).filter(Boolean).filter(function(h) {
                            return h.contains(l.target)
                        }),
                        C = g.length > 0 ? s(l, g[0]) : !f.current.noIsolation;
                    C && l.cancelable && l.preventDefault()
                }
            }
        }, []),
        u = r.useCallback(function(a, l, b, y) {
            var g = {
                name: a,
                delta: l,
                target: b,
                should: y,
                shadowParent: Me(b)
            };
            t.current.push(g), setTimeout(function() {
                t.current = t.current.filter(function(C) {
                    return C !== g
                })
            }, 1)
        }, []),
        v = r.useCallback(function(a) {
            o.current = O(a), n.current = void 0
        }, []),
        S = r.useCallback(function(a) {
            u(a.type, U(a), a.target, s(a, e.lockRef.current))
        }, []),
        E = r.useCallback(function(a) {
            u(a.type, O(a), a.target, s(a, e.lockRef.current))
        }, []);
    r.useEffect(function() {
        return D.push(c), e.setCallbacks({
                onScrollCapture: S,
                onWheelCapture: S,
                onTouchMoveCapture: E
            }), document.addEventListener("wheel", m, p), document.addEventListener("touchmove", m, p), document.addEventListener("touchstart", v, p),
            function() {
                D = D.filter(function(a) {
                    return a !== c
                }), document.removeEventListener("wheel", m, p), document.removeEventListener("touchmove", m, p), document.removeEventListener("touchstart", v, p)
            }
    }, []);
    var w = e.removeScrollBar,
        P = e.inert;
    return r.createElement(r.Fragment, null, P ? r.createElement(c, {
        styles: xe(i)
    }) : null, w ? r.createElement(fe, {
        gapMode: e.gapMode
    }) : null)
}

function Me(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const We = ve(J, Ae);
var Fe = r.forwardRef(function(e, t) {
    return r.createElement(x, B({}, e, {
        ref: t,
        sideCar: We
    }))
});
Fe.classNames = x.classNames;
export {
    be as D, Pe as P, Fe as R, Ue as u
};