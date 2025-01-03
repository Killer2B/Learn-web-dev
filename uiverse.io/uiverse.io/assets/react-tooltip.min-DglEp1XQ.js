import {
    r as t,
    W as se
} from "./jsx-runtime-Dvja6b4T.js";
import {
    d as yt,
    b as ht,
    c as lt,
    o as wt,
    f as _t,
    s as bt
} from "./floating-ui.dom-Cian5nPY.js";
import {
    y as Ye
} from "./index-Bvmn5eQh.js";
var nt = {};
const Et = "react-tooltip-core-styles",
    St = "react-tooltip-base-styles",
    st = {
        core: !1,
        base: !1
    };

function at({
    css: o,
    id: n = St,
    type: p = "base",
    ref: c
}) {
    var v, h;
    if (!o || typeof document > "u" || st[p] || p === "core" && typeof process < "u" && (!((v = process == null ? void 0 : nt) === null || v === void 0) && v.REACT_TOOLTIP_DISABLE_CORE_STYLES) || p !== "base" && typeof process < "u" && (!((h = process == null ? void 0 : nt) === null || h === void 0) && h.REACT_TOOLTIP_DISABLE_BASE_STYLES)) return;
    p === "core" && (n = Et), c || (c = {});
    const {
        insertAt: O
    } = c;
    if (document.getElementById(n)) return;
    const w = document.head || document.getElementsByTagName("head")[0],
        m = document.createElement("style");
    m.id = n, m.type = "text/css", O === "top" && w.firstChild ? w.insertBefore(m, w.firstChild) : w.appendChild(m), m.styleSheet ? m.styleSheet.cssText = o : m.appendChild(document.createTextNode(o)), st[p] = !0
}
const ct = async ({
        elementReference: o = null,
        tooltipReference: n = null,
        tooltipArrowReference: p = null,
        place: c = "top",
        offset: v = 10,
        strategy: h = "absolute",
        middlewares: O = [wt(Number(v)), _t({
            fallbackAxisSideDirection: "start"
        }), bt({
            padding: 5
        })],
        border: w
    }) => {
        if (!o) return {
            tooltipStyles: {},
            tooltipArrowStyles: {},
            place: c
        };
        if (n === null) return {
            tooltipStyles: {},
            tooltipArrowStyles: {},
            place: c
        };
        const m = O;
        return p ? (m.push(ht({
            element: p,
            padding: 5
        })), lt(o, n, {
            placement: c,
            strategy: h,
            middleware: m
        }).then(({
            x: D,
            y: q,
            placement: R,
            middlewareData: ae
        }) => {
            var H, N;
            const $ = {
                    left: `${D}px`,
                    top: `${q}px`,
                    border: w
                },
                {
                    x: X,
                    y: z
                } = (H = ae.arrow) !== null && H !== void 0 ? H : {
                    x: 0,
                    y: 0
                },
                J = (N = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                }[R.split("-")[0]]) !== null && N !== void 0 ? N : "bottom",
                j = w && {
                    borderBottom: w,
                    borderRight: w
                };
            let Z = 0;
            if (w) {
                const G = `${w}`.match(/(\d+)px/);
                Z = G != null && G[1] ? Number(G[1]) : 1
            }
            return {
                tooltipStyles: $,
                tooltipArrowStyles: {
                    left: X != null ? `${X}px` : "",
                    top: z != null ? `${z}px` : "",
                    right: "",
                    bottom: "",
                    ...j,
                    [J]: `-${4+Z}px`
                },
                place: R
            }
        })) : lt(o, n, {
            placement: "bottom",
            strategy: h,
            middleware: m
        }).then(({
            x: D,
            y: q,
            placement: R
        }) => ({
            tooltipStyles: {
                left: `${D}px`,
                top: `${q}px`
            },
            tooltipArrowStyles: {},
            place: R
        }))
    },
    it = (o, n) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(o, n),
    ut = (o, n, p) => {
        let c = null;
        const v = function(...h) {
            const O = () => {
                c = null
            };
            !c && (o.apply(this, h), c = setTimeout(O, n))
        };
        return v.cancel = () => {
            c && (clearTimeout(c), c = null)
        }, v
    },
    dt = o => o !== null && !Array.isArray(o) && typeof o == "object",
    Qe = (o, n) => {
        if (o === n) return !0;
        if (Array.isArray(o) && Array.isArray(n)) return o.length === n.length && o.every((v, h) => Qe(v, n[h]));
        if (Array.isArray(o) !== Array.isArray(n)) return !1;
        if (!dt(o) || !dt(n)) return o === n;
        const p = Object.keys(o),
            c = Object.keys(n);
        return p.length === c.length && p.every(v => Qe(o[v], n[v]))
    },
    gt = o => {
        if (!(o instanceof HTMLElement || o instanceof SVGElement)) return !1;
        const n = getComputedStyle(o);
        return ["overflow", "overflow-x", "overflow-y"].some(p => {
            const c = n.getPropertyValue(p);
            return c === "auto" || c === "scroll"
        })
    },
    ft = o => {
        if (!o) return null;
        let n = o.parentElement;
        for (; n;) {
            if (gt(n)) return n;
            n = n.parentElement
        }
        return document.scrollingElement || document.documentElement
    },
    At = typeof window < "u" ? t.useLayoutEffect : t.useEffect,
    C = o => {
        o.current && (clearTimeout(o.current), o.current = null)
    },
    kt = "DEFAULT_TOOLTIP_ID",
    Ot = {
        anchorRefs: new Set,
        activeAnchor: {
            current: null
        },
        attach: () => {},
        detach: () => {},
        setActiveAnchor: () => {}
    },
    Rt = t.createContext({
        getTooltipData: () => Ot
    });

function pt(o = kt) {
    return t.useContext(Rt).getTooltipData(o)
}
var we = {
        tooltip: "core-styles-module_tooltip__3vRRp",
        fixed: "core-styles-module_fixed__pcSol",
        arrow: "core-styles-module_arrow__cvMwQ",
        noArrow: "core-styles-module_noArrow__xock6",
        clickable: "core-styles-module_clickable__ZuTTB",
        show: "core-styles-module_show__Nt9eE",
        closing: "core-styles-module_closing__sGnxF"
    },
    Ge = {
        tooltip: "styles-module_tooltip__mnnfp",
        arrow: "styles-module_arrow__K0L3T",
        dark: "styles-module_dark__xNqje",
        light: "styles-module_light__Z6W-X",
        success: "styles-module_success__A2AKt",
        warning: "styles-module_warning__SCK0X",
        error: "styles-module_error__JvumD",
        info: "styles-module_info__BWdHW"
    };
const xt = ({
        forwardRef: o,
        id: n,
        className: p,
        classNameArrow: c,
        variant: v = "dark",
        anchorId: h,
        anchorSelect: O,
        place: w = "top",
        offset: m = 10,
        events: D = ["hover"],
        openOnClick: q = !1,
        positionStrategy: R = "absolute",
        middlewares: ae,
        wrapper: H,
        delayShow: N = 0,
        delayHide: $ = 0,
        float: X = !1,
        hidden: z = !1,
        noArrow: J = !1,
        clickable: j = !1,
        closeOnEsc: Z = !1,
        closeOnScroll: G = !1,
        closeOnResize: Pe = !1,
        openEvents: x,
        closeEvents: ce,
        globalCloseEvents: _e,
        imperativeModeOnly: Xe,
        style: Ie,
        position: Be,
        afterShow: De,
        afterHide: W,
        content: be,
        contentWrapperRef: Y,
        isOpen: Q,
        defaultIsOpen: ee = !1,
        setIsOpen: te,
        activeAnchor: f,
        setActiveAnchor: ie,
        border: qe,
        opacity: ze,
        arrowColor: We,
        role: Je = "tooltip"
    }) => {
        var Ee;
        const S = t.useRef(null),
            ue = t.useRef(null),
            I = t.useRef(null),
            U = t.useRef(null),
            Se = t.useRef(null),
            [V, Ue] = t.useState({
                tooltipStyles: {},
                tooltipArrowStyles: {},
                place: w
            }),
            [A, Ke] = t.useState(!1),
            [oe, re] = t.useState(!1),
            [d, ge] = t.useState(null),
            Ae = t.useRef(!1),
            ke = t.useRef(null),
            {
                anchorRefs: Oe,
                setActiveAnchor: Me
            } = pt(n),
            de = t.useRef(!1),
            [F, Re] = t.useState([]),
            le = t.useRef(!1),
            fe = q || D.includes("click"),
            xe = fe || (x == null ? void 0 : x.click) || (x == null ? void 0 : x.dblclick) || (x == null ? void 0 : x.mousedown),
            pe = x ? { ...x
            } : {
                mouseover: !0,
                focus: !0,
                mouseenter: !1,
                click: !1,
                dblclick: !1,
                mousedown: !1
            };
        !x && fe && Object.assign(pe, {
            mouseenter: !1,
            focus: !1,
            mouseover: !1,
            click: !0
        });
        const Te = ce ? { ...ce
        } : {
            mouseout: !0,
            blur: !0,
            mouseleave: !1,
            click: !1,
            dblclick: !1,
            mouseup: !1
        };
        !ce && fe && Object.assign(Te, {
            mouseleave: !1,
            blur: !1,
            mouseout: !1
        });
        const B = _e ? { ..._e
        } : {
            escape: Z || !1,
            scroll: G || !1,
            resize: Pe || !1,
            clickOutsideAnchor: xe || !1
        };
        Xe && (Object.assign(pe, {
            mouseenter: !1,
            focus: !1,
            click: !1,
            dblclick: !1,
            mousedown: !1
        }), Object.assign(Te, {
            mouseleave: !1,
            blur: !1,
            click: !1,
            dblclick: !1,
            mouseup: !1
        }), Object.assign(B, {
            escape: !1,
            scroll: !1,
            resize: !1,
            clickOutsideAnchor: !1
        })), At(() => (le.current = !0, () => {
            le.current = !1
        }), []);
        const y = e => {
            le.current && (e && re(!0), setTimeout(() => {
                le.current && (te == null || te(e), Q === void 0 && Ke(e))
            }, 10))
        };
        t.useEffect(() => {
            if (Q === void 0) return () => null;
            Q && re(!0);
            const e = setTimeout(() => {
                Ke(Q)
            }, 10);
            return () => {
                clearTimeout(e)
            }
        }, [Q]), t.useEffect(() => {
            if (A !== Ae.current)
                if (C(Se), Ae.current = A, A) De == null || De();
                else {
                    const e = (l => {
                        const s = l.match(/^([\d.]+)(ms|s)$/);
                        if (!s) return 0;
                        const [, b, E] = s;
                        return Number(b) * (E === "ms" ? 1 : 1e3)
                    })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
                    Se.current = setTimeout(() => {
                        re(!1), ge(null), W == null || W()
                    }, e + 25)
                }
        }, [A]);
        const He = e => {
                Ue(l => Qe(l, e) ? l : e)
            },
            Le = (e = N) => {
                C(I), oe ? y(!0) : I.current = setTimeout(() => {
                    y(!0)
                }, e)
            },
            ve = (e = $) => {
                C(U), U.current = setTimeout(() => {
                    de.current || y(!1)
                }, e)
            },
            Ce = e => {
                var l;
                if (!e) return;
                const s = (l = e.currentTarget) !== null && l !== void 0 ? l : e.target;
                if (!(s != null && s.isConnected)) return ie(null), void Me({
                    current: null
                });
                N ? Le() : y(!0), ie(s), Me({
                    current: s
                }), C(U)
            },
            me = () => {
                j ? ve($ || 100) : $ ? ve() : y(!1), C(I)
            },
            ye = ({
                x: e,
                y: l
            }) => {
                var s;
                const b = {
                    getBoundingClientRect: () => ({
                        x: e,
                        y: l,
                        width: 0,
                        height: 0,
                        top: l,
                        left: e,
                        right: e,
                        bottom: l
                    })
                };
                ct({
                    place: (s = d == null ? void 0 : d.place) !== null && s !== void 0 ? s : w,
                    offset: m,
                    elementReference: b,
                    tooltipReference: S.current,
                    tooltipArrowReference: ue.current,
                    strategy: R,
                    middlewares: ae,
                    border: qe
                }).then(E => {
                    He(E)
                })
            },
            he = e => {
                if (!e) return;
                const l = e,
                    s = {
                        x: l.clientX,
                        y: l.clientY
                    };
                ye(s), ke.current = s
            },
            Ne = e => {
                var l;
                if (!A) return;
                const s = e.target;
                s.isConnected && (!((l = S.current) === null || l === void 0) && l.contains(s) || [document.querySelector(`[id='${h}']`), ...F].some(b => b == null ? void 0 : b.contains(s)) || (y(!1), C(I)))
            },
            Ze = ut(Ce, 50),
            _ = ut(me, 50),
            T = e => {
                _.cancel(), Ze(e)
            },
            r = () => {
                Ze.cancel(), _()
            },
            a = t.useCallback(() => {
                var e, l;
                const s = (e = d == null ? void 0 : d.position) !== null && e !== void 0 ? e : Be;
                s ? ye(s) : X ? ke.current && ye(ke.current) : f != null && f.isConnected && ct({
                    place: (l = d == null ? void 0 : d.place) !== null && l !== void 0 ? l : w,
                    offset: m,
                    elementReference: f,
                    tooltipReference: S.current,
                    tooltipArrowReference: ue.current,
                    strategy: R,
                    middlewares: ae,
                    border: qe
                }).then(b => {
                    le.current && He(b)
                })
            }, [A, f, be, Ie, w, d == null ? void 0 : d.place, m, R, Be, d == null ? void 0 : d.position, X]);
        t.useEffect(() => {
            var e, l;
            const s = new Set(Oe);
            F.forEach(i => {
                s.add({
                    current: i
                })
            });
            const b = document.querySelector(`[id='${h}']`);
            b && s.add({
                current: b
            });
            const E = () => {
                    y(!1)
                },
                K = ft(f),
                M = ft(S.current);
            B.scroll && (window.addEventListener("scroll", E), K == null || K.addEventListener("scroll", E), M == null || M.addEventListener("scroll", E));
            let g = null;
            B.resize ? window.addEventListener("resize", E) : f && S.current && (g = yt(f, S.current, a, {
                ancestorResize: !0,
                elementResize: !0,
                layoutShift: !0
            }));
            const L = i => {
                i.key === "Escape" && y(!1)
            };
            B.escape && window.addEventListener("keydown", L), B.clickOutsideAnchor && window.addEventListener("click", Ne);
            const u = [],
                $e = i => {
                    A && (i == null ? void 0 : i.target) === f || Ce(i)
                },
                vt = i => {
                    A && (i == null ? void 0 : i.target) === f && me()
                },
                et = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"],
                tt = ["click", "dblclick", "mousedown", "mouseup"];
            Object.entries(pe).forEach(([i, P]) => {
                P && (et.includes(i) ? u.push({
                    event: i,
                    listener: T
                }) : tt.includes(i) && u.push({
                    event: i,
                    listener: $e
                }))
            }), Object.entries(Te).forEach(([i, P]) => {
                P && (et.includes(i) ? u.push({
                    event: i,
                    listener: r
                }) : tt.includes(i) && u.push({
                    event: i,
                    listener: vt
                }))
            }), X && u.push({
                event: "pointermove",
                listener: he
            });
            const ot = () => {
                    de.current = !0
                },
                rt = () => {
                    de.current = !1, me()
                };
            return j && !xe && ((e = S.current) === null || e === void 0 || e.addEventListener("mouseenter", ot), (l = S.current) === null || l === void 0 || l.addEventListener("mouseleave", rt)), u.forEach(({
                event: i,
                listener: P
            }) => {
                s.forEach(Ve => {
                    var je;
                    (je = Ve.current) === null || je === void 0 || je.addEventListener(i, P)
                })
            }), () => {
                var i, P;
                B.scroll && (window.removeEventListener("scroll", E), K == null || K.removeEventListener("scroll", E), M == null || M.removeEventListener("scroll", E)), B.resize ? window.removeEventListener("resize", E) : g == null || g(), B.clickOutsideAnchor && window.removeEventListener("click", Ne), B.escape && window.removeEventListener("keydown", L), j && !xe && ((i = S.current) === null || i === void 0 || i.removeEventListener("mouseenter", ot), (P = S.current) === null || P === void 0 || P.removeEventListener("mouseleave", rt)), u.forEach(({
                    event: Ve,
                    listener: je
                }) => {
                    s.forEach(mt => {
                        var Fe;
                        (Fe = mt.current) === null || Fe === void 0 || Fe.removeEventListener(Ve, je)
                    })
                })
            }
        }, [f, a, oe, Oe, F, x, ce, _e, fe, N, $]), t.useEffect(() => {
            var e, l;
            let s = (l = (e = d == null ? void 0 : d.anchorSelect) !== null && e !== void 0 ? e : O) !== null && l !== void 0 ? l : "";
            !s && n && (s = `[data-tooltip-id='${n.replace(/'/g,"\\'")}']`);
            const b = new MutationObserver(E => {
                const K = [],
                    M = [];
                E.forEach(g => {
                    if (g.type === "attributes" && g.attributeName === "data-tooltip-id" && (g.target.getAttribute("data-tooltip-id") === n ? K.push(g.target) : g.oldValue === n && M.push(g.target)), g.type === "childList") {
                        if (f) {
                            const L = [...g.removedNodes].filter(u => u.nodeType === 1);
                            if (s) try {
                                M.push(...L.filter(u => u.matches(s))), M.push(...L.flatMap(u => [...u.querySelectorAll(s)]))
                            } catch {}
                            L.some(u => {
                                var $e;
                                return !!(!(($e = u == null ? void 0 : u.contains) === null || $e === void 0) && $e.call(u, f)) && (re(!1), y(!1), ie(null), C(I), C(U), !0)
                            })
                        }
                        if (s) try {
                            const L = [...g.addedNodes].filter(u => u.nodeType === 1);
                            K.push(...L.filter(u => u.matches(s))), K.push(...L.flatMap(u => [...u.querySelectorAll(s)]))
                        } catch {}
                    }
                }), (K.length || M.length) && Re(g => [...g.filter(L => !M.includes(L)), ...K])
            });
            return b.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["data-tooltip-id"],
                attributeOldValue: !0
            }), () => {
                b.disconnect()
            }
        }, [n, O, d == null ? void 0 : d.anchorSelect, f]), t.useEffect(() => {
            a()
        }, [a]), t.useEffect(() => {
            if (!(Y != null && Y.current)) return () => null;
            const e = new ResizeObserver(() => {
                setTimeout(() => a())
            });
            return e.observe(Y.current), () => {
                e.disconnect()
            }
        }, [be, Y == null ? void 0 : Y.current]), t.useEffect(() => {
            var e;
            const l = document.querySelector(`[id='${h}']`),
                s = [...F, l];
            f && s.includes(f) || ie((e = F[0]) !== null && e !== void 0 ? e : l)
        }, [h, F, f]), t.useEffect(() => (ee && y(!0), () => {
            C(I), C(U)
        }), []), t.useEffect(() => {
            var e;
            let l = (e = d == null ? void 0 : d.anchorSelect) !== null && e !== void 0 ? e : O;
            if (!l && n && (l = `[data-tooltip-id='${n.replace(/'/g,"\\'")}']`), l) try {
                const s = Array.from(document.querySelectorAll(l));
                Re(s)
            } catch {
                Re([])
            }
        }, [n, O, d == null ? void 0 : d.anchorSelect]), t.useEffect(() => {
            I.current && (C(I), Le(N))
        }, [N]);
        const k = (Ee = d == null ? void 0 : d.content) !== null && Ee !== void 0 ? Ee : be,
            ne = A && Object.keys(V.tooltipStyles).length > 0;
        return t.useImperativeHandle(o, () => ({
            open: e => {
                if (e != null && e.anchorSelect) try {
                    document.querySelector(e.anchorSelect)
                } catch {
                    return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)
                }
                ge(e ? ? null), e != null && e.delay ? Le(e.delay) : y(!0)
            },
            close: e => {
                e != null && e.delay ? ve(e.delay) : y(!1)
            },
            activeAnchor: f,
            place: V.place,
            isOpen: !!(oe && !z && k && ne)
        })), oe && !z && k ? se.createElement(H, {
            id: n,
            role: Je,
            className: Ye("react-tooltip", we.tooltip, Ge.tooltip, Ge[v], p, `react-tooltip__place-${V.place}`, we[ne ? "show" : "closing"], ne ? "react-tooltip__show" : "react-tooltip__closing", R === "fixed" && we.fixed, j && we.clickable),
            onTransitionEnd: e => {
                C(Se), A || e.propertyName !== "opacity" || (re(!1), ge(null), W == null || W())
            },
            style: { ...Ie,
                ...V.tooltipStyles,
                opacity: ze !== void 0 && ne ? ze : void 0
            },
            ref: S
        }, k, se.createElement(H, {
            className: Ye("react-tooltip-arrow", we.arrow, Ge.arrow, c, J && we.noArrow),
            style: { ...V.tooltipArrowStyles,
                background: We ? `linear-gradient(to right bottom, transparent 50%, ${We} 50%)` : void 0
            },
            ref: ue
        })) : null
    },
    Tt = ({
        content: o
    }) => se.createElement("span", {
        dangerouslySetInnerHTML: {
            __html: o
        }
    }),
    $t = se.forwardRef(({
        id: o,
        anchorId: n,
        anchorSelect: p,
        content: c,
        html: v,
        render: h,
        className: O,
        classNameArrow: w,
        variant: m = "dark",
        place: D = "top",
        offset: q = 10,
        wrapper: R = "div",
        children: ae = null,
        events: H = ["hover"],
        openOnClick: N = !1,
        positionStrategy: $ = "absolute",
        middlewares: X,
        delayShow: z = 0,
        delayHide: J = 0,
        float: j = !1,
        hidden: Z = !1,
        noArrow: G = !1,
        clickable: Pe = !1,
        closeOnEsc: x = !1,
        closeOnScroll: ce = !1,
        closeOnResize: _e = !1,
        openEvents: Xe,
        closeEvents: Ie,
        globalCloseEvents: Be,
        imperativeModeOnly: De = !1,
        style: W,
        position: be,
        isOpen: Y,
        defaultIsOpen: Q = !1,
        disableStyleInjection: ee = !1,
        border: te,
        opacity: f,
        arrowColor: ie,
        setIsOpen: qe,
        afterShow: ze,
        afterHide: We,
        role: Je = "tooltip"
    }, Ee) => {
        const [S, ue] = t.useState(c), [I, U] = t.useState(v), [Se, V] = t.useState(D), [Ue, A] = t.useState(m), [Ke, oe] = t.useState(q), [re, d] = t.useState(z), [ge, Ae] = t.useState(J), [ke, Oe] = t.useState(j), [Me, de] = t.useState(Z), [F, Re] = t.useState(R), [le, fe] = t.useState(H), [xe, pe] = t.useState($), [Te, B] = t.useState(null), [y, He] = t.useState(null), Le = t.useRef(ee), {
            anchorRefs: ve,
            activeAnchor: Ce
        } = pt(o), me = _ => _ == null ? void 0 : _.getAttributeNames().reduce((T, r) => {
            var a;
            return r.startsWith("data-tooltip-") && (T[r.replace(/^data-tooltip-/, "")] = (a = _ == null ? void 0 : _.getAttribute(r)) !== null && a !== void 0 ? a : null), T
        }, {}), ye = _ => {
            const T = {
                place: r => {
                    var a;
                    V((a = r) !== null && a !== void 0 ? a : D)
                },
                content: r => {
                    ue(r ? ? c)
                },
                html: r => {
                    U(r ? ? v)
                },
                variant: r => {
                    var a;
                    A((a = r) !== null && a !== void 0 ? a : m)
                },
                offset: r => {
                    oe(r === null ? q : Number(r))
                },
                wrapper: r => {
                    var a;
                    Re((a = r) !== null && a !== void 0 ? a : R)
                },
                events: r => {
                    const a = r == null ? void 0 : r.split(" ");
                    fe(a ? ? H)
                },
                "position-strategy": r => {
                    var a;
                    pe((a = r) !== null && a !== void 0 ? a : $)
                },
                "delay-show": r => {
                    d(r === null ? z : Number(r))
                },
                "delay-hide": r => {
                    Ae(r === null ? J : Number(r))
                },
                float: r => {
                    Oe(r === null ? j : r === "true")
                },
                hidden: r => {
                    de(r === null ? Z : r === "true")
                },
                "class-name": r => {
                    B(r)
                }
            };
            Object.values(T).forEach(r => r(null)), Object.entries(_).forEach(([r, a]) => {
                var k;
                (k = T[r]) === null || k === void 0 || k.call(T, a)
            })
        };
        t.useEffect(() => {
            ue(c)
        }, [c]), t.useEffect(() => {
            U(v)
        }, [v]), t.useEffect(() => {
            V(D)
        }, [D]), t.useEffect(() => {
            A(m)
        }, [m]), t.useEffect(() => {
            oe(q)
        }, [q]), t.useEffect(() => {
            d(z)
        }, [z]), t.useEffect(() => {
            Ae(J)
        }, [J]), t.useEffect(() => {
            Oe(j)
        }, [j]), t.useEffect(() => {
            de(Z)
        }, [Z]), t.useEffect(() => {
            pe($)
        }, [$]), t.useEffect(() => {
            Le.current !== ee && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
        }, [ee]), t.useEffect(() => {
            typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", {
                detail: {
                    disableCore: ee === "core",
                    disableBase: ee
                }
            }))
        }, []), t.useEffect(() => {
            var _;
            const T = new Set(ve);
            let r = p;
            if (!r && o && (r = `[data-tooltip-id='${o.replace(/'/g,"\\'")}']`), r) try {
                document.querySelectorAll(r).forEach(l => {
                    T.add({
                        current: l
                    })
                })
            } catch {
                console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`)
            }
            const a = document.querySelector(`[id='${n}']`);
            if (a && T.add({
                    current: a
                }), !T.size) return () => null;
            const k = (_ = y ? ? a) !== null && _ !== void 0 ? _ : Ce.current,
                ne = new MutationObserver(l => {
                    l.forEach(s => {
                        var b;
                        if (!k || s.type !== "attributes" || !(!((b = s.attributeName) === null || b === void 0) && b.startsWith("data-tooltip-"))) return;
                        const E = me(k);
                        ye(E)
                    })
                }),
                e = {
                    attributes: !0,
                    childList: !1,
                    subtree: !1
                };
            if (k) {
                const l = me(k);
                ye(l), ne.observe(k, e)
            }
            return () => {
                ne.disconnect()
            }
        }, [ve, Ce, y, n, p]), t.useEffect(() => {
            W != null && W.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), te && !it("border", `${te}`) && console.warn(`[react-tooltip] "${te}" is not a valid \`border\`.`), W != null && W.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), f && !it("opacity", `${f}`) && console.warn(`[react-tooltip] "${f}" is not a valid \`opacity\`.`)
        }, []);
        let he = ae;
        const Ne = t.useRef(null);
        if (h) {
            const _ = h({
                content: (y == null ? void 0 : y.getAttribute("data-tooltip-content")) || S || null,
                activeAnchor: y
            });
            he = _ ? se.createElement("div", {
                ref: Ne,
                className: "react-tooltip-content-wrapper"
            }, _) : null
        } else S && (he = S);
        I && (he = se.createElement(Tt, {
            content: I
        }));
        const Ze = {
            forwardRef: Ee,
            id: o,
            anchorId: n,
            anchorSelect: p,
            className: Ye(O, Te),
            classNameArrow: w,
            content: he,
            contentWrapperRef: Ne,
            place: Se,
            variant: Ue,
            offset: Ke,
            wrapper: F,
            events: le,
            openOnClick: N,
            positionStrategy: xe,
            middlewares: X,
            delayShow: re,
            delayHide: ge,
            float: ke,
            hidden: Me,
            noArrow: G,
            clickable: Pe,
            closeOnEsc: x,
            closeOnScroll: ce,
            closeOnResize: _e,
            openEvents: Xe,
            closeEvents: Ie,
            globalCloseEvents: Be,
            imperativeModeOnly: De,
            style: W,
            position: be,
            isOpen: Y,
            defaultIsOpen: Q,
            border: te,
            opacity: f,
            arrowColor: ie,
            setIsOpen: qe,
            afterShow: ze,
            afterHide: We,
            activeAnchor: y,
            setActiveAnchor: _ => He(_),
            role: Je
        };
        return se.createElement(xt, { ...Ze
        })
    });
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", o => {
    o.detail.disableCore || at({
        css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
        type: "core"
    }), o.detail.disableBase || at({
        css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
        type: "base"
    })
});
export {
    $t as M
};