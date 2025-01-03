import {
    r as s,
    j as h
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as T
} from "./index-DW48STyt.js";
import {
    u as N,
    P as W,
    d as ae,
    c as ce
} from "./index-w1qRmSKj.js";
import {
    u as z,
    a as V
} from "./index-CcT0GIt8.js";
import {
    a as le,
    u as ue
} from "./index-ccF5fHaF.js";
import {
    c as Y,
    A as de,
    C as fe,
    a as pe,
    R as me
} from "./index-DCuDrq3I.js";
import {
    u as ve
} from "./index-BdBVW3oh.js";
import {
    R as he
} from "./index-D3mH5y1-.js";
import {
    c as ye
} from "./utils-BAZByXB4.js";

function Ee(e, t = []) {
    let n = [];

    function r(i, a) {
        const d = s.createContext(a),
            c = n.length;
        n = [...n, a];
        const l = m => {
            var g;
            const {
                scope: p,
                children: f,
                ...v
            } = m, y = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[c]) || d, x = s.useMemo(() => v, Object.values(v));
            return h.jsx(y.Provider, {
                value: x,
                children: f
            })
        };
        l.displayName = i + "Provider";

        function u(m, p) {
            var y;
            const f = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[c]) || d,
                v = s.useContext(f);
            if (v) return v;
            if (a !== void 0) return a;
            throw new Error(`\`${m}\` must be used within \`${i}\``)
        }
        return [l, u]
    }
    const o = () => {
        const i = n.map(a => s.createContext(a));
        return function(d) {
            const c = (d == null ? void 0 : d[e]) || i;
            return s.useMemo(() => ({
                [`__scope${e}`]: { ...d,
                    [e]: c
                }
            }), [d, c])
        }
    };
    return o.scopeName = e, [r, xe(o, ...t)]
}

function xe(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const a = r.reduce((d, {
                useScope: c,
                scopeName: l
            }) => {
                const m = c(i)[`__scope${l}`];
                return { ...d,
                    ...m
                }
            }, {});
            return s.useMemo(() => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    };
    return n.scopeName = t.scopeName, n
}
var ge = "DismissableLayer",
    j = "dismissableLayer.update",
    Ce = "dismissableLayer.pointerDownOutside",
    Te = "dismissableLayer.focusOutside",
    $, X = s.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    q = s.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: a,
            onDismiss: d,
            ...c
        } = e, l = s.useContext(X), [u, m] = s.useState(null), p = (u == null ? void 0 : u.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = s.useState({}), v = N(t, E => m(E)), y = Array.from(l.layers), [x] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), g = y.indexOf(x), C = u ? y.indexOf(u) : -1, P = l.layersWithOutsidePointerEventsDisabled.size > 0, b = C >= g, w = we(E => {
            const D = E.target,
                B = [...l.branches].some(I => I.contains(D));
            !b || B || (o == null || o(E), a == null || a(E), E.defaultPrevented || d == null || d())
        }, p), O = Re(E => {
            const D = E.target;
            [...l.branches].some(I => I.contains(D)) || (i == null || i(E), a == null || a(E), E.defaultPrevented || d == null || d())
        }, p);
        return le(E => {
            C === l.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && d && (E.preventDefault(), d()))
        }, p), s.useEffect(() => {
            if (u) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && ($ = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), G(), () => {
                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $)
            }
        }, [u, p, n, l]), s.useEffect(() => () => {
            u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), G())
        }, [u, l]), s.useEffect(() => {
            const E = () => f({});
            return document.addEventListener(j, E), () => document.removeEventListener(j, E)
        }, []), h.jsx(W.div, { ...c,
            ref: v,
            style: {
                pointerEvents: P ? b ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: T(e.onFocusCapture, O.onFocusCapture),
            onBlurCapture: T(e.onBlurCapture, O.onBlurCapture),
            onPointerDownCapture: T(e.onPointerDownCapture, w.onPointerDownCapture)
        })
    });
q.displayName = ge;
var be = "DismissableLayerBranch",
    Pe = s.forwardRef((e, t) => {
        const n = s.useContext(X),
            r = s.useRef(null),
            o = N(t, r);
        return s.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), h.jsx(W.div, { ...e,
            ref: o
        })
    });
Pe.displayName = be;

function we(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = z(e),
        r = s.useRef(!1),
        o = s.useRef(() => {});
    return s.useEffect(() => {
        const i = d => {
                if (d.target && !r.current) {
                    let c = function() {
                        K(Ce, n, l, {
                            discrete: !0
                        })
                    };
                    const l = {
                        originalEvent: d
                    };
                    d.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
                        once: !0
                    })) : c()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            a = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Re(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = z(e),
        r = s.useRef(!1);
    return s.useEffect(() => {
        const o = i => {
            i.target && !r.current && K(Te, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function G() {
    const e = new CustomEvent(j);
    document.dispatchEvent(e)
}

function K(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? ae(o, i) : o.dispatchEvent(i)
}

function Oe(e, t) {
    return s.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Z = e => {
    const {
        present: t,
        children: n
    } = e, r = Ne(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : s.Children.only(n), i = N(r.ref, De(o));
    return typeof n == "function" || r.isPresent ? s.cloneElement(o, {
        ref: i
    }) : null
};
Z.displayName = "Presence";

function Ne(e) {
    const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [d, c] = Oe(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return s.useEffect(() => {
        const l = A(r.current);
        i.current = d === "mounted" ? l : "none"
    }, [d]), V(() => {
        const l = r.current,
            u = o.current;
        if (u !== e) {
            const p = i.current,
                f = A(l);
            e ? c("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, c]), V(() => {
        if (t) {
            let l;
            const u = t.ownerDocument.defaultView ? ? window,
                m = f => {
                    const y = A(r.current).includes(f.animationName);
                    if (f.target === t && y && (c("ANIMATION_END"), !o.current)) {
                        const x = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                        })
                    }
                },
                p = f => {
                    f.target === t && (i.current = A(r.current))
                };
            return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
                u.clearTimeout(l), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m)
            }
        } else c("ANIMATION_END")
    }, [t, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: s.useCallback(l => {
            l && (r.current = getComputedStyle(l)), n(l)
        }, [])
    }
}

function A(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function De(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Ae = s.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = s.Children.toArray(n), i = o.find(Le);
    if (i) {
        const a = i.props.children,
            d = o.map(c => c === i ? s.Children.count(a) > 1 ? s.Children.only(null) : s.isValidElement(a) ? a.props.children : null : c);
        return h.jsx(k, { ...r,
            ref: t,
            children: s.isValidElement(a) ? s.cloneElement(a, void 0, d) : null
        })
    }
    return h.jsx(k, { ...r,
        ref: t,
        children: n
    })
});
Ae.displayName = "Slot";
var k = s.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (s.isValidElement(n)) {
        const o = _e(n);
        return s.cloneElement(n, { ...Se(r, n.props),
            ref: t ? ce(t, o) : o
        })
    }
    return s.Children.count(n) > 1 ? s.Children.only(null) : null
});
k.displayName = "SlotClone";
var J = ({
    children: e
}) => h.jsx(h.Fragment, {
    children: e
});

function Le(e) {
    return s.isValidElement(e) && e.type === J
}

function Se(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...d) => {
            i(...d), o(...d)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function _e(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var [L, ct] = Ee("Tooltip", [Y]), S = Y(), Q = "TooltipProvider", Me = 700, F = "tooltip.open", [Ie, U] = L(Q), ee = e => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Me,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i
    } = e, [a, d] = s.useState(!0), c = s.useRef(!1), l = s.useRef(0);
    return s.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }, []), h.jsx(Ie, {
        scope: t,
        isOpenDelayed: a,
        delayDuration: n,
        onOpen: s.useCallback(() => {
            window.clearTimeout(l.current), d(!1)
        }, []),
        onClose: s.useCallback(() => {
            window.clearTimeout(l.current), l.current = window.setTimeout(() => d(!0), r)
        }, [r]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: s.useCallback(u => {
            c.current = u
        }, []),
        disableHoverableContent: o,
        children: i
    })
};
ee.displayName = Q;
var _ = "Tooltip",
    [je, M] = L(_),
    te = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: i,
            disableHoverableContent: a,
            delayDuration: d
        } = e, c = U(_, e.__scopeTooltip), l = S(t), [u, m] = s.useState(null), p = ue(), f = s.useRef(0), v = a ? ? c.disableHoverableContent, y = d ? ? c.delayDuration, x = s.useRef(!1), [g = !1, C] = ve({
            prop: r,
            defaultProp: o,
            onChange: E => {
                E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(F))) : c.onClose(), i == null || i(E)
            }
        }), P = s.useMemo(() => g ? x.current ? "delayed-open" : "instant-open" : "closed", [g]), b = s.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, x.current = !1, C(!0)
        }, [C]), w = s.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, C(!1)
        }, [C]), O = s.useCallback(() => {
            window.clearTimeout(f.current), f.current = window.setTimeout(() => {
                x.current = !0, C(!0), f.current = 0
            }, y)
        }, [y, C]);
        return s.useEffect(() => () => {
            f.current && (window.clearTimeout(f.current), f.current = 0)
        }, []), h.jsx(me, { ...l,
            children: h.jsx(je, {
                scope: t,
                contentId: p,
                open: g,
                stateAttribute: P,
                trigger: u,
                onTriggerChange: m,
                onTriggerEnter: s.useCallback(() => {
                    c.isOpenDelayed ? O() : b()
                }, [c.isOpenDelayed, O, b]),
                onTriggerLeave: s.useCallback(() => {
                    v ? w() : (window.clearTimeout(f.current), f.current = 0)
                }, [w, v]),
                onOpen: b,
                onClose: w,
                disableHoverableContent: v,
                children: n
            })
        })
    };
te.displayName = _;
var H = "TooltipTrigger",
    ne = s.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = M(H, n), i = U(H, n), a = S(n), d = s.useRef(null), c = N(t, d, o.onTriggerChange), l = s.useRef(!1), u = s.useRef(!1), m = s.useCallback(() => l.current = !1, []);
        return s.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), h.jsx(de, {
            asChild: !0,
            ...a,
            children: h.jsx(W.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: c,
                onPointerMove: T(e.onPointerMove, p => {
                    p.pointerType !== "touch" && !u.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0)
                }),
                onPointerLeave: T(e.onPointerLeave, () => {
                    o.onTriggerLeave(), u.current = !1
                }),
                onPointerDown: T(e.onPointerDown, () => {
                    l.current = !0, document.addEventListener("pointerup", m, {
                        once: !0
                    })
                }),
                onFocus: T(e.onFocus, () => {
                    l.current || o.onOpen()
                }),
                onBlur: T(e.onBlur, o.onClose),
                onClick: T(e.onClick, o.onClose)
            })
        })
    });
ne.displayName = H;
var ke = "TooltipPortal",
    [lt, Fe] = L(ke, {
        forceMount: void 0
    }),
    R = "TooltipContent",
    re = s.forwardRef((e, t) => {
        const n = Fe(R, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            a = M(R, e.__scopeTooltip);
        return h.jsx(Z, {
            present: r || a.open,
            children: a.disableHoverableContent ? h.jsx(oe, {
                side: o,
                ...i,
                ref: t
            }) : h.jsx(He, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    He = s.forwardRef((e, t) => {
        const n = M(R, e.__scopeTooltip),
            r = U(R, e.__scopeTooltip),
            o = s.useRef(null),
            i = N(t, o),
            [a, d] = s.useState(null),
            {
                trigger: c,
                onClose: l
            } = n,
            u = o.current,
            {
                onPointerInTransitChange: m
            } = r,
            p = s.useCallback(() => {
                d(null), m(!1)
            }, [m]),
            f = s.useCallback((v, y) => {
                const x = v.currentTarget,
                    g = {
                        x: v.clientX,
                        y: v.clientY
                    },
                    C = Ve(g, x.getBoundingClientRect()),
                    P = $e(g, C),
                    b = Ge(y.getBoundingClientRect()),
                    w = Ye([...P, ...b]);
                d(w), m(!0)
            }, [m]);
        return s.useEffect(() => () => p(), [p]), s.useEffect(() => {
            if (c && u) {
                const v = x => f(x, u),
                    y = x => f(x, c);
                return c.addEventListener("pointerleave", v), u.addEventListener("pointerleave", y), () => {
                    c.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", y)
                }
            }
        }, [c, u, f, p]), s.useEffect(() => {
            if (a) {
                const v = y => {
                    const x = y.target,
                        g = {
                            x: y.clientX,
                            y: y.clientY
                        },
                        C = (c == null ? void 0 : c.contains(x)) || (u == null ? void 0 : u.contains(x)),
                        P = !ze(g, a);
                    C ? p() : P && (p(), l())
                };
                return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v)
            }
        }, [c, u, a, l, p]), h.jsx(oe, { ...e,
            ref: i
        })
    }),
    [We, Ue] = L(_, {
        isInside: !1
    }),
    oe = s.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            ...d
        } = e, c = M(R, n), l = S(n), {
            onClose: u
        } = c;
        return s.useEffect(() => (document.addEventListener(F, u), () => document.removeEventListener(F, u)), [u]), s.useEffect(() => {
            if (c.trigger) {
                const m = p => {
                    const f = p.target;
                    f != null && f.contains(c.trigger) && u()
                };
                return window.addEventListener("scroll", m, {
                    capture: !0
                }), () => window.removeEventListener("scroll", m, {
                    capture: !0
                })
            }
        }, [c.trigger, u]), h.jsx(q, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: a,
            onFocusOutside: m => m.preventDefault(),
            onDismiss: u,
            children: h.jsxs(fe, {
                "data-state": c.stateAttribute,
                ...l,
                ...d,
                ref: t,
                style: { ...d.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [h.jsx(J, {
                    children: r
                }), h.jsx(We, {
                    scope: n,
                    isInside: !0,
                    children: h.jsx(he, {
                        id: c.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
re.displayName = R;
var se = "TooltipArrow",
    Be = s.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = S(n);
        return Ue(se, n).isInside ? null : h.jsx(pe, { ...o,
            ...r,
            ref: t
        })
    });
Be.displayName = se;

function Ve(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function $e(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function Ge(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function ze(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
        const d = t[i].x,
            c = t[i].y,
            l = t[a].x,
            u = t[a].y;
        c > r != u > r && n < (l - d) * (r - c) / (u - c) + d && (o = !o)
    }
    return o
}

function Ye(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Xe(t)
}

function Xe(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                a = t[t.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                a = n[n.length - 2];
            if ((i.x - a.x) * (o.y - a.y) >= (i.y - a.y) * (o.x - a.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var qe = ee,
    Ke = te,
    Ze = ne,
    ie = re;
const ut = qe,
    dt = Ke,
    ft = Ze,
    Je = s.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => h.jsx(ie, {
        ref: r,
        sideOffset: t,
        className: ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
Je.displayName = ie.displayName;
export {
    dt as T, ft as a, Je as b, ut as c
};