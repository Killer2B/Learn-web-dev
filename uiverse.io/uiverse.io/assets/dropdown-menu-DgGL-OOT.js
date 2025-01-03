import {
    r as a,
    j as s
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as M
} from "./index-DW48STyt.js";
import {
    c as oe,
    u as F,
    P as j,
    d as Dn
} from "./index-w1qRmSKj.js";
import {
    c as xe
} from "./index-DrK2pFTP.js";
import {
    u as En
} from "./index-BdBVW3oh.js";
import {
    c as Pn
} from "./index-lWeSOaoU.js";
import {
    u as In
} from "./index-COL9DQ1M.js";
import {
    u as Sn,
    D as Nn,
    R as jn,
    P as An
} from "./Combination-DNpN-pE3.js";
import {
    F as Tn
} from "./index-zEK70-uj.js";
import {
    c as Ce,
    A as On,
    C as kn,
    a as Ln,
    R as Fn
} from "./index-DCuDrq3I.js";
import {
    P as z
} from "./index-C9jkpvF-.js";
import {
    c as _e,
    R as Gn,
    I as Kn
} from "./index-WefHMECi.js";
import {
    u as Re
} from "./index-CcT0GIt8.js";
import {
    h as $n
} from "./component-5ZU33JcH.js";
import {
    u as he
} from "./index-ccF5fHaF.js";
import {
    c as b
} from "./utils-BAZByXB4.js";
import {
    a8 as Un,
    K as ye
} from "./icons-pNqq09c6.js";
var be = a.forwardRef((e, t) => {
    const {
        children: n,
        ...o
    } = e, r = a.Children.toArray(n), c = r.find(Bn);
    if (c) {
        const u = c.props.children,
            d = r.map(f => f === c ? a.Children.count(u) > 1 ? a.Children.only(null) : a.isValidElement(u) ? u.props.children : null : f);
        return s.jsx(ne, { ...o,
            ref: t,
            children: a.isValidElement(u) ? a.cloneElement(u, void 0, d) : null
        })
    }
    return s.jsx(ne, { ...o,
        ref: t,
        children: n
    })
});
be.displayName = "Slot";
var ne = a.forwardRef((e, t) => {
    const {
        children: n,
        ...o
    } = e;
    if (a.isValidElement(n)) {
        const r = Xn(n);
        return a.cloneElement(n, { ...Wn(o, n.props),
            ref: t ? oe(t, r) : r
        })
    }
    return a.Children.count(n) > 1 ? a.Children.only(null) : null
});
ne.displayName = "SlotClone";
var Vn = ({
    children: e
}) => s.jsx(s.Fragment, {
    children: e
});

function Bn(e) {
    return a.isValidElement(e) && e.type === Vn
}

function Wn(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            c = t[o];
        /^on[A-Z]/.test(o) ? r && c ? n[o] = (...d) => {
            c(...d), r(...d)
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...c
        } : o === "className" && (n[o] = [r, c].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Xn(e) {
    var o, r;
    let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var te = ["Enter", " "],
    Yn = ["ArrowDown", "PageUp", "Home"],
    De = ["ArrowUp", "PageDown", "End"],
    zn = [...Yn, ...De],
    Hn = {
        ltr: [...te, "ArrowRight"],
        rtl: [...te, "ArrowLeft"]
    },
    Zn = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    G = "Menu",
    [k, qn, Jn] = Pn(G),
    [E, Ee] = xe(G, [Jn, Ce, _e]),
    H = Ce(),
    Pe = _e(),
    [Qn, P] = E(G),
    [et, K] = E(G),
    Ie = e => {
        const {
            __scopeMenu: t,
            open: n = !1,
            children: o,
            dir: r,
            onOpenChange: c,
            modal: u = !0
        } = e, d = H(t), [f, v] = a.useState(null), p = a.useRef(!1), i = Re(c), m = In(r);
        return a.useEffect(() => {
            const h = () => {
                    p.current = !0, document.addEventListener("pointerdown", w, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", w, {
                        capture: !0,
                        once: !0
                    })
                },
                w = () => p.current = !1;
            return document.addEventListener("keydown", h, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", h, {
                    capture: !0
                }), document.removeEventListener("pointerdown", w, {
                    capture: !0
                }), document.removeEventListener("pointermove", w, {
                    capture: !0
                })
            }
        }, []), s.jsx(Fn, { ...d,
            children: s.jsx(Qn, {
                scope: t,
                open: n,
                onOpenChange: i,
                content: f,
                onContentChange: v,
                children: s.jsx(et, {
                    scope: t,
                    onClose: a.useCallback(() => i(!1), [i]),
                    isUsingKeyboardRef: p,
                    dir: m,
                    modal: u,
                    children: o
                })
            })
        })
    };
Ie.displayName = G;
var nt = "MenuAnchor",
    re = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = H(n);
        return s.jsx(On, { ...r,
            ...o,
            ref: t
        })
    });
re.displayName = nt;
var ae = "MenuPortal",
    [tt, Se] = E(ae, {
        forceMount: void 0
    }),
    Ne = e => {
        const {
            __scopeMenu: t,
            forceMount: n,
            children: o,
            container: r
        } = e, c = P(ae, t);
        return s.jsx(tt, {
            scope: t,
            forceMount: n,
            children: s.jsx(z, {
                present: n || c.open,
                children: s.jsx(An, {
                    asChild: !0,
                    container: r,
                    children: o
                })
            })
        })
    };
Ne.displayName = ae;
var C = "MenuContent",
    [ot, se] = E(C),
    je = a.forwardRef((e, t) => {
        const n = Se(C, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            c = P(C, e.__scopeMenu),
            u = K(C, e.__scopeMenu);
        return s.jsx(k.Provider, {
            scope: e.__scopeMenu,
            children: s.jsx(z, {
                present: o || c.open,
                children: s.jsx(k.Slot, {
                    scope: e.__scopeMenu,
                    children: u.modal ? s.jsx(rt, { ...r,
                        ref: t
                    }) : s.jsx(at, { ...r,
                        ref: t
                    })
                })
            })
        })
    }),
    rt = a.forwardRef((e, t) => {
        const n = P(C, e.__scopeMenu),
            o = a.useRef(null),
            r = F(t, o);
        return a.useEffect(() => {
            const c = o.current;
            if (c) return $n(c)
        }, []), s.jsx(ce, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: M(e.onFocusOutside, c => c.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    at = a.forwardRef((e, t) => {
        const n = P(C, e.__scopeMenu);
        return s.jsx(ce, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    ce = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            loop: o = !1,
            trapFocus: r,
            onOpenAutoFocus: c,
            onCloseAutoFocus: u,
            disableOutsidePointerEvents: d,
            onEntryFocus: f,
            onEscapeKeyDown: v,
            onPointerDownOutside: p,
            onFocusOutside: i,
            onInteractOutside: m,
            onDismiss: h,
            disableOutsideScroll: w,
            ...D
        } = e, I = P(C, n), A = K(C, n), $ = H(n), U = Pe(n), pe = qn(n), [xn, fe] = a.useState(null), V = a.useRef(null), Cn = F(t, V, I.onContentChange), B = a.useRef(0), W = a.useRef(""), _n = a.useRef(0), q = a.useRef(null), me = a.useRef("right"), J = a.useRef(0), Rn = w ? jn : a.Fragment, yn = w ? {
            as: be,
            allowPinchZoom: !0
        } : void 0, bn = l => {
            var N, Me;
            const x = W.current + l,
                _ = pe().filter(R => !R.disabled),
                y = document.activeElement,
                Q = (N = _.find(R => R.ref.current === y)) == null ? void 0 : N.textValue,
                ee = _.map(R => R.textValue),
                ve = wt(ee, x, Q),
                T = (Me = _.find(R => R.textValue === ve)) == null ? void 0 : Me.ref.current;
            (function R(we) {
                W.current = we, window.clearTimeout(B.current), we !== "" && (B.current = window.setTimeout(() => R(""), 1e3))
            })(x), T && setTimeout(() => T.focus())
        };
        a.useEffect(() => () => window.clearTimeout(B.current), []), Sn();
        const S = a.useCallback(l => {
            var _, y;
            return me.current === ((_ = q.current) == null ? void 0 : _.side) && gt(l, (y = q.current) == null ? void 0 : y.area)
        }, []);
        return s.jsx(ot, {
            scope: n,
            searchRef: W,
            onItemEnter: a.useCallback(l => {
                S(l) && l.preventDefault()
            }, [S]),
            onItemLeave: a.useCallback(l => {
                var x;
                S(l) || ((x = V.current) == null || x.focus(), fe(null))
            }, [S]),
            onTriggerLeave: a.useCallback(l => {
                S(l) && l.preventDefault()
            }, [S]),
            pointerGraceTimerRef: _n,
            onPointerGraceIntentChange: a.useCallback(l => {
                q.current = l
            }, []),
            children: s.jsx(Rn, { ...yn,
                children: s.jsx(Tn, {
                    asChild: !0,
                    trapped: r,
                    onMountAutoFocus: M(c, l => {
                        var x;
                        l.preventDefault(), (x = V.current) == null || x.focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: u,
                    children: s.jsx(Nn, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: p,
                        onFocusOutside: i,
                        onInteractOutside: m,
                        onDismiss: h,
                        children: s.jsx(Gn, {
                            asChild: !0,
                            ...U,
                            dir: A.dir,
                            orientation: "vertical",
                            loop: o,
                            currentTabStopId: xn,
                            onCurrentTabStopIdChange: fe,
                            onEntryFocus: M(f, l => {
                                A.isUsingKeyboardRef.current || l.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: s.jsx(kn, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": ze(I.open),
                                "data-radix-menu-content": "",
                                dir: A.dir,
                                ...$,
                                ...D,
                                ref: Cn,
                                style: {
                                    outline: "none",
                                    ...D.style
                                },
                                onKeyDown: M(D.onKeyDown, l => {
                                    const _ = l.target.closest("[data-radix-menu-content]") === l.currentTarget,
                                        y = l.ctrlKey || l.altKey || l.metaKey,
                                        Q = l.key.length === 1;
                                    _ && (l.key === "Tab" && l.preventDefault(), !y && Q && bn(l.key));
                                    const ee = V.current;
                                    if (l.target !== ee || !zn.includes(l.key)) return;
                                    l.preventDefault();
                                    const T = pe().filter(N => !N.disabled).map(N => N.ref.current);
                                    De.includes(l.key) && T.reverse(), vt(T)
                                }),
                                onBlur: M(e.onBlur, l => {
                                    l.currentTarget.contains(l.target) || (window.clearTimeout(B.current), W.current = "")
                                }),
                                onPointerMove: M(e.onPointerMove, L(l => {
                                    const x = l.target,
                                        _ = J.current !== l.clientX;
                                    if (l.currentTarget.contains(x) && _) {
                                        const y = l.clientX > J.current ? "right" : "left";
                                        me.current = y, J.current = l.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
je.displayName = C;
var st = "MenuGroup",
    ie = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return s.jsx(j.div, {
            role: "group",
            ...o,
            ref: t
        })
    });
ie.displayName = st;
var ct = "MenuLabel",
    Ae = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return s.jsx(j.div, { ...o,
            ref: t
        })
    });
Ae.displayName = ct;
var X = "MenuItem",
    ge = "menu.itemSelect",
    Z = a.forwardRef((e, t) => {
        const {
            disabled: n = !1,
            onSelect: o,
            ...r
        } = e, c = a.useRef(null), u = K(X, e.__scopeMenu), d = se(X, e.__scopeMenu), f = F(t, c), v = a.useRef(!1), p = () => {
            const i = c.current;
            if (!n && i) {
                const m = new CustomEvent(ge, {
                    bubbles: !0,
                    cancelable: !0
                });
                i.addEventListener(ge, h => o == null ? void 0 : o(h), {
                    once: !0
                }), Dn(i, m), m.defaultPrevented ? v.current = !1 : u.onClose()
            }
        };
        return s.jsx(Te, { ...r,
            ref: f,
            disabled: n,
            onClick: M(e.onClick, p),
            onPointerDown: i => {
                var m;
                (m = e.onPointerDown) == null || m.call(e, i), v.current = !0
            },
            onPointerUp: M(e.onPointerUp, i => {
                var m;
                v.current || (m = i.currentTarget) == null || m.click()
            }),
            onKeyDown: M(e.onKeyDown, i => {
                const m = d.searchRef.current !== "";
                n || m && i.key === " " || te.includes(i.key) && (i.currentTarget.click(), i.preventDefault())
            })
        })
    });
Z.displayName = X;
var Te = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            disabled: o = !1,
            textValue: r,
            ...c
        } = e, u = se(X, n), d = Pe(n), f = a.useRef(null), v = F(t, f), [p, i] = a.useState(!1), [m, h] = a.useState("");
        return a.useEffect(() => {
            const w = f.current;
            w && h((w.textContent ? ? "").trim())
        }, [c.children]), s.jsx(k.ItemSlot, {
            scope: n,
            disabled: o,
            textValue: r ? ? m,
            children: s.jsx(Kn, {
                asChild: !0,
                ...d,
                focusable: !o,
                children: s.jsx(j.div, {
                    role: "menuitem",
                    "data-highlighted": p ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...c,
                    ref: v,
                    onPointerMove: M(e.onPointerMove, L(w => {
                        o ? u.onItemLeave(w) : (u.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: M(e.onPointerLeave, L(w => u.onItemLeave(w))),
                    onFocus: M(e.onFocus, () => i(!0)),
                    onBlur: M(e.onBlur, () => i(!1))
                })
            })
        })
    }),
    it = "MenuCheckboxItem",
    Oe = a.forwardRef((e, t) => {
        const {
            checked: n = !1,
            onCheckedChange: o,
            ...r
        } = e;
        return s.jsx(Ke, {
            scope: e.__scopeMenu,
            checked: n,
            children: s.jsx(Z, {
                role: "menuitemcheckbox",
                "aria-checked": Y(n) ? "mixed" : n,
                ...r,
                ref: t,
                "data-state": de(n),
                onSelect: M(r.onSelect, () => o == null ? void 0 : o(Y(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Oe.displayName = it;
var ke = "MenuRadioGroup",
    [ut, dt] = E(ke, {
        value: void 0,
        onValueChange: () => {}
    }),
    Le = a.forwardRef((e, t) => {
        const {
            value: n,
            onValueChange: o,
            ...r
        } = e, c = Re(o);
        return s.jsx(ut, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: c,
            children: s.jsx(ie, { ...r,
                ref: t
            })
        })
    });
Le.displayName = ke;
var Fe = "MenuRadioItem",
    Ge = a.forwardRef((e, t) => {
        const {
            value: n,
            ...o
        } = e, r = dt(Fe, e.__scopeMenu), c = n === r.value;
        return s.jsx(Ke, {
            scope: e.__scopeMenu,
            checked: c,
            children: s.jsx(Z, {
                role: "menuitemradio",
                "aria-checked": c,
                ...o,
                ref: t,
                "data-state": de(c),
                onSelect: M(o.onSelect, () => {
                    var u;
                    return (u = r.onValueChange) == null ? void 0 : u.call(r, n)
                }, {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Ge.displayName = Fe;
var ue = "MenuItemIndicator",
    [Ke, lt] = E(ue, {
        checked: !1
    }),
    $e = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            forceMount: o,
            ...r
        } = e, c = lt(ue, n);
        return s.jsx(z, {
            present: o || Y(c.checked) || c.checked === !0,
            children: s.jsx(j.span, { ...r,
                ref: t,
                "data-state": de(c.checked)
            })
        })
    });
$e.displayName = ue;
var pt = "MenuSeparator",
    Ue = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return s.jsx(j.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...o,
            ref: t
        })
    });
Ue.displayName = pt;
var ft = "MenuArrow",
    Ve = a.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, r = H(n);
        return s.jsx(Ln, { ...r,
            ...o,
            ref: t
        })
    });
Ve.displayName = ft;
var mt = "MenuSub",
    [Eo, Be] = E(mt),
    O = "MenuSubTrigger",
    We = a.forwardRef((e, t) => {
        const n = P(O, e.__scopeMenu),
            o = K(O, e.__scopeMenu),
            r = Be(O, e.__scopeMenu),
            c = se(O, e.__scopeMenu),
            u = a.useRef(null),
            {
                pointerGraceTimerRef: d,
                onPointerGraceIntentChange: f
            } = c,
            v = {
                __scopeMenu: e.__scopeMenu
            },
            p = a.useCallback(() => {
                u.current && window.clearTimeout(u.current), u.current = null
            }, []);
        return a.useEffect(() => p, [p]), a.useEffect(() => {
            const i = d.current;
            return () => {
                window.clearTimeout(i), f(null)
            }
        }, [d, f]), s.jsx(re, {
            asChild: !0,
            ...v,
            children: s.jsx(Te, {
                id: r.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": r.contentId,
                "data-state": ze(n.open),
                ...e,
                ref: oe(t, r.onTriggerChange),
                onClick: i => {
                    var m;
                    (m = e.onClick) == null || m.call(e, i), !(e.disabled || i.defaultPrevented) && (i.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: M(e.onPointerMove, L(i => {
                    c.onItemEnter(i), !i.defaultPrevented && !e.disabled && !n.open && !u.current && (c.onPointerGraceIntentChange(null), u.current = window.setTimeout(() => {
                        n.onOpenChange(!0), p()
                    }, 100))
                })),
                onPointerLeave: M(e.onPointerLeave, L(i => {
                    var h, w;
                    p();
                    const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
                    if (m) {
                        const D = (w = n.content) == null ? void 0 : w.dataset.side,
                            I = D === "right",
                            A = I ? -5 : 5,
                            $ = m[I ? "left" : "right"],
                            U = m[I ? "right" : "left"];
                        c.onPointerGraceIntentChange({
                            area: [{
                                x: i.clientX + A,
                                y: i.clientY
                            }, {
                                x: $,
                                y: m.top
                            }, {
                                x: U,
                                y: m.top
                            }, {
                                x: U,
                                y: m.bottom
                            }, {
                                x: $,
                                y: m.bottom
                            }],
                            side: D
                        }), window.clearTimeout(d.current), d.current = window.setTimeout(() => c.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (c.onTriggerLeave(i), i.defaultPrevented) return;
                        c.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: M(e.onKeyDown, i => {
                    var h;
                    const m = c.searchRef.current !== "";
                    e.disabled || m && i.key === " " || Hn[o.dir].includes(i.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), i.preventDefault())
                })
            })
        })
    });
We.displayName = O;
var Xe = "MenuSubContent",
    Ye = a.forwardRef((e, t) => {
        const n = Se(C, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            c = P(C, e.__scopeMenu),
            u = K(C, e.__scopeMenu),
            d = Be(Xe, e.__scopeMenu),
            f = a.useRef(null),
            v = F(t, f);
        return s.jsx(k.Provider, {
            scope: e.__scopeMenu,
            children: s.jsx(z, {
                present: o || c.open,
                children: s.jsx(k.Slot, {
                    scope: e.__scopeMenu,
                    children: s.jsx(ce, {
                        id: d.contentId,
                        "aria-labelledby": d.triggerId,
                        ...r,
                        ref: v,
                        align: "start",
                        side: u.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: p => {
                            var i;
                            u.isUsingKeyboardRef.current && ((i = f.current) == null || i.focus()), p.preventDefault()
                        },
                        onCloseAutoFocus: p => p.preventDefault(),
                        onFocusOutside: M(e.onFocusOutside, p => {
                            p.target !== d.trigger && c.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: M(e.onEscapeKeyDown, p => {
                            u.onClose(), p.preventDefault()
                        }),
                        onKeyDown: M(e.onKeyDown, p => {
                            var h;
                            const i = p.currentTarget.contains(p.target),
                                m = Zn[u.dir].includes(p.key);
                            i && m && (c.onOpenChange(!1), (h = d.trigger) == null || h.focus(), p.preventDefault())
                        })
                    })
                })
            })
        })
    });
Ye.displayName = Xe;

function ze(e) {
    return e ? "open" : "closed"
}

function Y(e) {
    return e === "indeterminate"
}

function de(e) {
    return Y(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function vt(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function Mt(e, t) {
    return e.map((n, o) => e[(t + o) % e.length])
}

function wt(e, t, n) {
    const r = t.length > 1 && Array.from(t).every(v => v === t[0]) ? t[0] : t,
        c = n ? e.indexOf(n) : -1;
    let u = Mt(e, Math.max(c, 0));
    r.length === 1 && (u = u.filter(v => v !== n));
    const f = u.find(v => v.toLowerCase().startsWith(r.toLowerCase()));
    return f !== n ? f : void 0
}

function ht(e, t) {
    const {
        x: n,
        y: o
    } = e;
    let r = !1;
    for (let c = 0, u = t.length - 1; c < t.length; u = c++) {
        const d = t[c].x,
            f = t[c].y,
            v = t[u].x,
            p = t[u].y;
        f > o != p > o && n < (v - d) * (o - f) / (p - f) + d && (r = !r)
    }
    return r
}

function gt(e, t) {
    if (!t) return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return ht(n, t)
}

function L(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var xt = Ie,
    Ct = re,
    _t = Ne,
    Rt = je,
    yt = ie,
    bt = Ae,
    Dt = Z,
    Et = Oe,
    Pt = Le,
    It = Ge,
    St = $e,
    Nt = Ue,
    jt = Ve,
    At = We,
    Tt = Ye,
    le = "DropdownMenu",
    [Ot, Po] = xe(le, [Ee]),
    g = Ee(),
    [kt, He] = Ot(le),
    Ze = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            dir: o,
            open: r,
            defaultOpen: c,
            onOpenChange: u,
            modal: d = !0
        } = e, f = g(t), v = a.useRef(null), [p = !1, i] = En({
            prop: r,
            defaultProp: c,
            onChange: u
        });
        return s.jsx(kt, {
            scope: t,
            triggerId: he(),
            triggerRef: v,
            contentId: he(),
            open: p,
            onOpenChange: i,
            onOpenToggle: a.useCallback(() => i(m => !m), [i]),
            modal: d,
            children: s.jsx(xt, { ...f,
                open: p,
                onOpenChange: i,
                dir: o,
                modal: d,
                children: n
            })
        })
    };
Ze.displayName = le;
var qe = "DropdownMenuTrigger",
    Je = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            disabled: o = !1,
            ...r
        } = e, c = He(qe, n), u = g(n);
        return s.jsx(Ct, {
            asChild: !0,
            ...u,
            children: s.jsx(j.button, {
                type: "button",
                id: c.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": c.open,
                "aria-controls": c.open ? c.contentId : void 0,
                "data-state": c.open ? "open" : "closed",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                ...r,
                ref: oe(t, c.triggerRef),
                onPointerDown: M(e.onPointerDown, d => {
                    !o && d.button === 0 && d.ctrlKey === !1 && (c.onOpenToggle(), c.open || d.preventDefault())
                }),
                onKeyDown: M(e.onKeyDown, d => {
                    o || (["Enter", " "].includes(d.key) && c.onOpenToggle(), d.key === "ArrowDown" && c.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(d.key) && d.preventDefault())
                })
            })
        })
    });
Je.displayName = qe;
var Lt = "DropdownMenuPortal",
    Qe = e => {
        const {
            __scopeDropdownMenu: t,
            ...n
        } = e, o = g(t);
        return s.jsx(_t, { ...o,
            ...n
        })
    };
Qe.displayName = Lt;
var en = "DropdownMenuContent",
    nn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = He(en, n), c = g(n), u = a.useRef(!1);
        return s.jsx(Rt, {
            id: r.contentId,
            "aria-labelledby": r.triggerId,
            ...c,
            ...o,
            ref: t,
            onCloseAutoFocus: M(e.onCloseAutoFocus, d => {
                var f;
                u.current || (f = r.triggerRef.current) == null || f.focus(), u.current = !1, d.preventDefault()
            }),
            onInteractOutside: M(e.onInteractOutside, d => {
                const f = d.detail.originalEvent,
                    v = f.button === 0 && f.ctrlKey === !0,
                    p = f.button === 2 || v;
                (!r.modal || p) && (u.current = !0)
            }),
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
nn.displayName = en;
var Ft = "DropdownMenuGroup",
    Gt = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(yt, { ...r,
            ...o,
            ref: t
        })
    });
Gt.displayName = Ft;
var Kt = "DropdownMenuLabel",
    tn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(bt, { ...r,
            ...o,
            ref: t
        })
    });
tn.displayName = Kt;
var $t = "DropdownMenuItem",
    on = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(Dt, { ...r,
            ...o,
            ref: t
        })
    });
on.displayName = $t;
var Ut = "DropdownMenuCheckboxItem",
    rn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(Et, { ...r,
            ...o,
            ref: t
        })
    });
rn.displayName = Ut;
var Vt = "DropdownMenuRadioGroup",
    Bt = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(Pt, { ...r,
            ...o,
            ref: t
        })
    });
Bt.displayName = Vt;
var Wt = "DropdownMenuRadioItem",
    an = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(It, { ...r,
            ...o,
            ref: t
        })
    });
an.displayName = Wt;
var Xt = "DropdownMenuItemIndicator",
    sn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(St, { ...r,
            ...o,
            ref: t
        })
    });
sn.displayName = Xt;
var Yt = "DropdownMenuSeparator",
    cn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(Nt, { ...r,
            ...o,
            ref: t
        })
    });
cn.displayName = Yt;
var zt = "DropdownMenuArrow",
    Ht = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(jt, { ...r,
            ...o,
            ref: t
        })
    });
Ht.displayName = zt;
var Zt = "DropdownMenuSubTrigger",
    un = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(At, { ...r,
            ...o,
            ref: t
        })
    });
un.displayName = Zt;
var qt = "DropdownMenuSubContent",
    dn = a.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...o
        } = e, r = g(n);
        return s.jsx(Tt, { ...r,
            ...o,
            ref: t,
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
dn.displayName = qt;
var Jt = Ze,
    Qt = Je,
    eo = Qe,
    ln = nn,
    pn = tn,
    fn = on,
    mn = rn,
    vn = an,
    Mn = sn,
    wn = cn,
    hn = un,
    gn = dn;
const Io = Jt,
    So = Qt,
    no = a.forwardRef(({
        className: e,
        inset: t,
        children: n,
        ...o
    }, r) => s.jsxs(hn, {
        ref: r,
        className: b("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e),
        ...o,
        children: [n, Un("h-4 w-4 ml-auto")]
    }));
no.displayName = hn.displayName;
const to = a.forwardRef(({
    className: e,
    ...t
}, n) => s.jsx(gn, {
    ref: n,
    className: b("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...t
}));
to.displayName = gn.displayName;
const oo = a.forwardRef(({
    className: e,
    sideOffset: t = 4,
    ...n
}, o) => s.jsx(eo, {
    children: s.jsx(ln, {
        ref: o,
        sideOffset: t,
        className: b("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    })
}));
oo.displayName = ln.displayName;
const ro = a.forwardRef(({
    className: e,
    inset: t,
    ...n
}, o) => s.jsx(fn, {
    ref: o,
    className: b("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
    ...n
}));
ro.displayName = fn.displayName;
const ao = a.forwardRef(({
    className: e,
    children: t,
    checked: n,
    ...o
}, r) => s.jsxs(mn, {
    ref: r,
    className: b("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: n,
    ...o,
    children: [s.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: s.jsx(Mn, {
            children: ye("h-4 w-4")
        })
    }), t]
}));
ao.displayName = mn.displayName;
const so = a.forwardRef(({
    className: e,
    children: t,
    ...n
}, o) => s.jsxs(vn, {
    ref: o,
    className: b("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [s.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: s.jsx(Mn, {
            children: ye("h-2 w-2 fill-current")
        })
    }), t]
}));
so.displayName = vn.displayName;
const co = a.forwardRef(({
    className: e,
    inset: t,
    ...n
}, o) => s.jsx(pn, {
    ref: o,
    className: b("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
}));
co.displayName = pn.displayName;
const io = a.forwardRef(({
    className: e,
    ...t
}, n) => s.jsx(wn, {
    ref: n,
    className: b("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
io.displayName = wn.displayName;
export {
    Io as D, So as a, oo as b, ro as c, co as d, io as e
};