import {
    r as u,
    W as d
} from "./jsx-runtime-Dvja6b4T.js";
import {
    s as Re,
    o as w,
    i as Me,
    c as H,
    n as xe,
    d as pe,
    K as I,
    y as O,
    u as B,
    P as K,
    F as C,
    p as Oe,
    L as M,
    I as P,
    t as me,
    e as ue,
    O as V,
    H as He,
    w as Be,
    T as Ne,
    $ as Ae,
    a as je,
    _ as ie,
    r as Ke
} from "./focus-management-BQHAzeQ5.js";
import {
    b as G,
    n as X,
    d as Ue,
    l as ve,
    g as Ve,
    h as Ee,
    u as Z,
    i as R,
    t as Ye,
    y as _e,
    R as qe,
    f as We,
    m as ze,
    s as ge,
    j as se,
    r as Ge,
    X as Xe,
    z as Ze,
    F as be,
    c as Je,
    w as Qe,
    e as et,
    x as tt,
    a as nt
} from "./transition-8DRjYs4_.js";
import {
    f as W,
    s as z
} from "./hidden-B7qEBE7r.js";
let rt = u.createContext(() => {});

function we({
    value: e,
    children: t
}) {
    return d.createElement(rt.Provider, {
        value: e
    }, t)
}

function ye(e, t, n, r) {
    let o = Re(n);
    u.useEffect(() => {
        e = e ? ? window;

        function i(s) {
            o.current(s)
        }
        return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r)
    }, [e, t, r])
}

function J(e, t) {
    let n = u.useRef([]),
        r = w(e);
    u.useEffect(() => {
        let o = [...n.current];
        for (let [i, s] of t.entries())
            if (n.current[i] !== s) {
                let l = r(t, o);
                return n.current = t, l
            }
    }, [r, ...t])
}

function ot(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}
let L = [];
ot(() => {
    function e(t) {
        if (!(t.target instanceof HTMLElement) || t.target === document.body || L[0] === t.target) return;
        let n = t.target;
        n = n.closest(Me), L.unshift(n ? ? t.target), L = L.filter(r => r != null && r.isConnected), L.splice(10)
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function lt(e, t = typeof document < "u" ? document.defaultView : null, n) {
    let r = G(e, "escape");
    ye(t, "keydown", o => {
        r && (o.defaultPrevented || o.key === H.Escape && n(o))
    })
}

function at() {
    var e;
    let [t] = u.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = u.useState((e = t == null ? void 0 : t.matches) != null ? e : !1);
    return xe(() => {
        if (!t) return;

        function o(i) {
            r(i.matches)
        }
        return t.addEventListener("change", o), () => t.removeEventListener("change", o)
    }, [t]), n
}

function ut({
    defaultContainers: e = [],
    portals: t,
    mainTreeNode: n
} = {}) {
    let r = X(n),
        o = w(() => {
            var i, s;
            let l = [];
            for (let a of e) a !== null && (a instanceof HTMLElement ? l.push(a) : "current" in a && a.current instanceof HTMLElement && l.push(a.current));
            if (t != null && t.current)
                for (let a of t.current) l.push(a);
            for (let a of (i = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? i : []) a !== document.body && a !== document.head && a instanceof HTMLElement && a.id !== "headlessui-portal-root" && (n && (a.contains(n) || a.contains((s = n == null ? void 0 : n.getRootNode()) == null ? void 0 : s.host)) || l.some(c => a.contains(c)) || l.push(a));
            return l
        });
    return {
        resolveContainers: o,
        contains: w(i => o().some(s => s.contains(i)))
    }
}
let $e = u.createContext(null);

function ce({
    children: e,
    node: t
}) {
    let [n, r] = u.useState(null), o = he(t ? ? n);
    return d.createElement($e.Provider, {
        value: o
    }, e, o === null && d.createElement(W, {
        features: z.Hidden,
        ref: i => {
            var s, l;
            if (i) {
                for (let a of (l = (s = pe(i)) == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null ? l : [])
                    if (a !== document.body && a !== document.head && a instanceof HTMLElement && a != null && a.contains(i)) {
                        r(a);
                        break
                    }
            }
        }
    }))
}

function he(e = null) {
    var t;
    return (t = u.useContext($e)) != null ? t : e
}
var j = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(j || {});

function it() {
    let e = u.useRef(0);
    return Ue(!0, "keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Te(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let st = "div";
var x = (e => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(x || {});

function ct(e, t) {
    let n = u.useRef(null),
        r = O(n, t),
        {
            initialFocus: o,
            initialFocusFallback: i,
            containers: s,
            features: l = 15,
            ...a
        } = e;
    ve() || (l = 0);
    let c = X(n);
    mt(l, {
        ownerDocument: c
    });
    let f = vt(l, {
        ownerDocument: c,
        container: n,
        initialFocus: o,
        initialFocusFallback: i
    });
    Et(l, {
        ownerDocument: c,
        container: n,
        containers: s,
        previousActiveElement: f
    });
    let F = it(),
        y = w(m => {
            let D = n.current;
            D && ($ => $())(() => {
                B(F.current, {
                    [j.Forwards]: () => {
                        K(D, C.First, {
                            skipElements: [m.relatedTarget, i]
                        })
                    },
                    [j.Backwards]: () => {
                        K(D, C.Last, {
                            skipElements: [m.relatedTarget, i]
                        })
                    }
                })
            })
        }),
        g = G(!!(l & 2), "focus-trap#tab-lock"),
        v = Oe(),
        p = u.useRef(!1),
        b = {
            ref: r,
            onKeyDown(m) {
                m.key == "Tab" && (p.current = !0, v.requestAnimationFrame(() => {
                    p.current = !1
                }))
            },
            onBlur(m) {
                if (!(l & 4)) return;
                let D = Te(s);
                n.current instanceof HTMLElement && D.add(n.current);
                let $ = m.relatedTarget;
                $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (Fe(D, $) || (p.current ? K(n.current, B(F.current, {
                    [j.Forwards]: () => C.Next,
                    [j.Backwards]: () => C.Previous
                }) | C.WrapAround, {
                    relativeTo: m.target
                }) : m.target instanceof HTMLElement && P(m.target)))
            }
        },
        E = M();
    return d.createElement(d.Fragment, null, g && d.createElement(W, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: y,
        features: z.Focusable
    }), E({
        ourProps: b,
        theirProps: a,
        defaultTag: st,
        name: "FocusTrap"
    }), g && d.createElement(W, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: y,
        features: z.Focusable
    }))
}
let dt = I(ct),
    ft = Object.assign(dt, {
        features: x
    });

function pt(e = !0) {
    let t = u.useRef(L.slice());
    return J(([n], [r]) => {
        r === !0 && n === !1 && me(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = L.slice())
    }, [e, L, t]), w(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function mt(e, {
    ownerDocument: t
}) {
    let n = !!(e & 8),
        r = pt(n);
    J(() => {
        n || (t == null ? void 0 : t.activeElement) === (t == null ? void 0 : t.body) && P(r())
    }, [n]), Ve(() => {
        n && P(r())
    })
}

function vt(e, {
    ownerDocument: t,
    container: n,
    initialFocus: r,
    initialFocusFallback: o
}) {
    let i = u.useRef(null),
        s = G(!!(e & 1), "focus-trap#initial-focus"),
        l = Ee();
    return J(() => {
        if (e === 0) return;
        if (!s) {
            o != null && o.current && P(o.current);
            return
        }
        let a = n.current;
        a && me(() => {
            if (!l.current) return;
            let c = t == null ? void 0 : t.activeElement;
            if (r != null && r.current) {
                if ((r == null ? void 0 : r.current) === c) {
                    i.current = c;
                    return
                }
            } else if (a.contains(c)) {
                i.current = c;
                return
            }
            if (r != null && r.current) P(r.current);
            else {
                if (e & 16) {
                    if (K(a, C.First | C.AutoFocus) !== ue.Error) return
                } else if (K(a, C.First) !== ue.Error) return;
                if (o != null && o.current && (P(o.current), (t == null ? void 0 : t.activeElement) === o.current)) return;
                console.warn("There are no focusable elements inside the <FocusTrap />")
            }
            i.current = t == null ? void 0 : t.activeElement
        })
    }, [o, s, e]), i
}

function Et(e, {
    ownerDocument: t,
    container: n,
    containers: r,
    previousActiveElement: o
}) {
    let i = Ee(),
        s = !!(e & 4);
    ye(t == null ? void 0 : t.defaultView, "focus", l => {
        if (!s || !i.current) return;
        let a = Te(r);
        n.current instanceof HTMLElement && a.add(n.current);
        let c = o.current;
        if (!c) return;
        let f = l.target;
        f && f instanceof HTMLElement ? Fe(a, f) ? (o.current = f, P(f)) : (l.preventDefault(), l.stopPropagation(), P(c)) : P(o.current)
    }, !0)
}

function Fe(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
var gt = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(gt || {}),
    bt = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(bt || {});
let wt = {
        0(e, t) {
            return e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        }
    },
    Q = u.createContext(null);
Q.displayName = "DialogContext";

function Y(e) {
    let t = u.useContext(Q);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n
    }
    return t
}

function yt(e, t) {
    return B(t.type, wt, e, t)
}
let de = I(function(e, t) {
        let n = u.useId(),
            {
                id: r = `headlessui-dialog-${n}`,
                open: o,
                onClose: i,
                initialFocus: s,
                role: l = "dialog",
                autoFocus: a = !0,
                __demoMode: c = !1,
                unmount: f = !1,
                ...F
            } = e,
            y = u.useRef(!1);
        l = function() {
            return l === "dialog" || l === "alertdialog" ? l : (y.current || (y.current = !0, console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")
        }();
        let g = Z();
        o === void 0 && g !== null && (o = (g & R.Open) === R.Open);
        let v = u.useRef(null),
            p = O(v, t),
            b = X(v),
            E = o ? 0 : 1,
            [m, D] = u.useReducer(yt, {
                titleId: null,
                descriptionId: null,
                panelRef: u.createRef()
            }),
            $ = w(() => i(!1)),
            N = w(T => D({
                type: 0,
                id: T
            })),
            k = ve() ? E === 0 : !1,
            [U, _] = Ye(),
            h = {
                get current() {
                    var T;
                    return (T = m.panelRef.current) != null ? T : v.current
                }
            },
            S = he(),
            {
                resolveContainers: q
            } = ut({
                mainTreeNode: S,
                portals: U,
                defaultContainers: [h]
            }),
            oe = g !== null ? (g & R.Closing) === R.Closing : !1;
        _e(c || oe ? !1 : k, {
            allowed: w(() => {
                var T, ae;
                return [(ae = (T = v.current) == null ? void 0 : T.closest("[data-headlessui-portal]")) != null ? ae : null]
            }),
            disallowed: w(() => {
                var T;
                return [(T = S == null ? void 0 : S.closest("body > *:not(#headlessui-portal-root)")) != null ? T : null]
            })
        }), qe(k, q, T => {
            T.preventDefault(), $()
        }), lt(k, b == null ? void 0 : b.defaultView, T => {
            T.preventDefault(), T.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), $()
        }), We(c || oe ? !1 : k, b, q), ze(k, v, $);
        let [Se, Pe] = Be(), Ie = u.useMemo(() => [{
            dialogState: E,
            close: $,
            setTitleId: N,
            unmount: f
        }, m], [E, m, $, N, f]), le = u.useMemo(() => ({
            open: E === 0
        }), [E]), ke = {
            ref: p,
            id: r,
            role: l,
            tabIndex: -1,
            "aria-modal": c ? void 0 : E === 0 ? !0 : void 0,
            "aria-labelledby": m.titleId,
            "aria-describedby": Se,
            unmount: f
        }, Ce = !at(), A = x.None;
        k && !c && (A |= x.RestoreFocus, A |= x.TabLock, a && (A |= x.AutoFocus), Ce && (A |= x.InitialFocus));
        let Le = M();
        return d.createElement(ge, null, d.createElement(se, {
            force: !0
        }, d.createElement(Ge, null, d.createElement(Q.Provider, {
            value: Ie
        }, d.createElement(Xe, {
            target: v
        }, d.createElement(se, {
            force: !1
        }, d.createElement(Pe, {
            slot: le
        }, d.createElement(_, null, d.createElement(ft, {
            initialFocus: s,
            initialFocusFallback: v,
            containers: q,
            features: A
        }, d.createElement(we, {
            value: $
        }, Le({
            ourProps: ke,
            theirProps: F,
            slot: le,
            defaultTag: $t,
            features: ht,
            visible: E === 0,
            name: "Dialog"
        })))))))))))
    }),
    $t = "div",
    ht = V.RenderStrategy | V.Static;

function Tt(e, t) {
    let {
        transition: n = !1,
        open: r,
        ...o
    } = e, i = Z(), s = e.hasOwnProperty("open") || i !== null, l = e.hasOwnProperty("onClose");
    if (!s && !l) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!s) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!l) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
    if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
    return (r !== void 0 || n) && !o.static ? d.createElement(ce, null, d.createElement(Ze, {
        show: r,
        transition: n,
        unmount: o.unmount
    }, d.createElement(de, {
        ref: t,
        ...o
    }))) : d.createElement(ce, null, d.createElement(de, {
        ref: t,
        open: r,
        ...o
    }))
}
let Ft = "div";

function Dt(e, t) {
    let n = u.useId(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            transition: o = !1,
            ...i
        } = e,
        [{
            dialogState: s,
            unmount: l
        }, a] = Y("Dialog.Panel"),
        c = O(t, a.panelRef),
        f = u.useMemo(() => ({
            open: s === 0
        }), [s]),
        F = w(b => {
            b.stopPropagation()
        }),
        y = {
            ref: c,
            id: r,
            onClick: F
        },
        g = o ? be : u.Fragment,
        v = o ? {
            unmount: l
        } : {},
        p = M();
    return d.createElement(g, { ...v
    }, p({
        ourProps: y,
        theirProps: i,
        slot: f,
        defaultTag: Ft,
        name: "Dialog.Panel"
    }))
}
let St = "div";

function Pt(e, t) {
    let {
        transition: n = !1,
        ...r
    } = e, [{
        dialogState: o,
        unmount: i
    }] = Y("Dialog.Backdrop"), s = u.useMemo(() => ({
        open: o === 0
    }), [o]), l = {
        ref: t,
        "aria-hidden": !0
    }, a = n ? be : u.Fragment, c = n ? {
        unmount: i
    } : {}, f = M();
    return d.createElement(a, { ...c
    }, f({
        ourProps: l,
        theirProps: r,
        slot: s,
        defaultTag: St,
        name: "Dialog.Backdrop"
    }))
}
let It = "h2";

function kt(e, t) {
    let n = u.useId(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...o
        } = e,
        [{
            dialogState: i,
            setTitleId: s
        }] = Y("Dialog.Title"),
        l = O(t);
    u.useEffect(() => (s(r), () => s(null)), [r, s]);
    let a = u.useMemo(() => ({
            open: i === 0
        }), [i]),
        c = {
            ref: l,
            id: r
        };
    return M()({
        ourProps: c,
        theirProps: o,
        slot: a,
        defaultTag: It,
        name: "Dialog.Title"
    })
}
let Ct = I(Tt),
    Lt = I(Dt);
I(Pt);
let Rt = I(kt),
    Qt = Object.assign(Ct, {
        Panel: Lt,
        Title: Rt,
        Description: He
    });
var fe;
let Mt = (fe = d.startTransition) != null ? fe : function(e) {
    e()
};
var xt = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xt || {}),
    Ot = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.SetButtonElement = 4] = "SetButtonElement", e[e.SetPanelElement = 5] = "SetPanelElement", e))(Ot || {});
let Ht = {
        0: e => ({ ...e,
            disclosureState: B(e.disclosureState, {
                0: 1,
                1: 0
            })
        }),
        1: e => e.disclosureState === 1 ? e : { ...e,
            disclosureState: 1
        },
        2(e, t) {
            return e.buttonId === t.buttonId ? e : { ...e,
                buttonId: t.buttonId
            }
        },
        3(e, t) {
            return e.panelId === t.panelId ? e : { ...e,
                panelId: t.panelId
            }
        },
        4(e, t) {
            return e.buttonElement === t.element ? e : { ...e,
                buttonElement: t.element
            }
        },
        5(e, t) {
            return e.panelElement === t.element ? e : { ...e,
                panelElement: t.element
            }
        }
    },
    ee = u.createContext(null);
ee.displayName = "DisclosureContext";

function te(e) {
    let t = u.useContext(ee);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, te), n
    }
    return t
}
let ne = u.createContext(null);
ne.displayName = "DisclosureAPIContext";

function De(e) {
    let t = u.useContext(ne);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, De), n
    }
    return t
}
let re = u.createContext(null);
re.displayName = "DisclosurePanelContext";

function Bt() {
    return u.useContext(re)
}

function Nt(e, t) {
    return B(t.type, Ht, e, t)
}
let At = u.Fragment;

function jt(e, t) {
    let {
        defaultOpen: n = !1,
        ...r
    } = e, o = u.useRef(null), i = O(t, Ne(p => {
        o.current = p
    }, e.as === void 0 || e.as === u.Fragment)), s = u.useReducer(Nt, {
        disclosureState: n ? 0 : 1,
        buttonElement: null,
        panelElement: null,
        buttonId: null,
        panelId: null
    }), [{
        disclosureState: l,
        buttonId: a
    }, c] = s, f = w(p => {
        c({
            type: 1
        });
        let b = pe(o);
        if (!b || !a) return;
        let E = p ? p instanceof HTMLElement ? p : p.current instanceof HTMLElement ? p.current : b.getElementById(a) : b.getElementById(a);
        E == null || E.focus()
    }), F = u.useMemo(() => ({
        close: f
    }), [f]), y = u.useMemo(() => ({
        open: l === 0,
        close: f
    }), [l, f]), g = {
        ref: i
    }, v = M();
    return d.createElement(ee.Provider, {
        value: s
    }, d.createElement(ne.Provider, {
        value: F
    }, d.createElement(we, {
        value: f
    }, d.createElement(Je, {
        value: B(l, {
            0: R.Open,
            1: R.Closed
        })
    }, v({
        ourProps: g,
        theirProps: r,
        slot: y,
        defaultTag: At,
        name: "Disclosure"
    })))))
}
let Kt = "button";

function Ut(e, t) {
    let n = u.useId(),
        {
            id: r = `headlessui-disclosure-button-${n}`,
            disabled: o = !1,
            autoFocus: i = !1,
            ...s
        } = e,
        [l, a] = te("Disclosure.Button"),
        c = Bt(),
        f = c === null ? !1 : c === l.panelId,
        F = u.useRef(null),
        y = O(F, t, w(h => {
            if (!f) return a({
                type: 4,
                element: h
            })
        }));
    u.useEffect(() => {
        if (!f) return a({
            type: 2,
            buttonId: r
        }), () => {
            a({
                type: 2,
                buttonId: null
            })
        }
    }, [r, a, f]);
    let g = w(h => {
            var S;
            if (f) {
                if (l.disclosureState === 1) return;
                switch (h.key) {
                    case H.Space:
                    case H.Enter:
                        h.preventDefault(), h.stopPropagation(), a({
                            type: 0
                        }), (S = l.buttonElement) == null || S.focus();
                        break
                }
            } else switch (h.key) {
                case H.Space:
                case H.Enter:
                    h.preventDefault(), h.stopPropagation(), a({
                        type: 0
                    });
                    break
            }
        }),
        v = w(h => {
            switch (h.key) {
                case H.Space:
                    h.preventDefault();
                    break
            }
        }),
        p = w(h => {
            var S;
            Ke(h.currentTarget) || o || (f ? (a({
                type: 0
            }), (S = l.buttonElement) == null || S.focus()) : a({
                type: 0
            }))
        }),
        {
            isFocusVisible: b,
            focusProps: E
        } = Ae({
            autoFocus: i
        }),
        {
            isHovered: m,
            hoverProps: D
        } = je({
            isDisabled: o
        }),
        {
            pressed: $,
            pressProps: N
        } = Qe({
            disabled: o
        }),
        k = u.useMemo(() => ({
            open: l.disclosureState === 0,
            hover: m,
            active: $,
            disabled: o,
            focus: b,
            autofocus: i
        }), [l, m, $, b, o, i]),
        U = et(e, l.buttonElement),
        _ = f ? ie({
            ref: y,
            type: U,
            disabled: o || void 0,
            autoFocus: i,
            onKeyDown: g,
            onClick: p
        }, E, D, N) : ie({
            ref: y,
            id: r,
            type: U,
            "aria-expanded": l.disclosureState === 0,
            "aria-controls": l.panelElement ? l.panelId : void 0,
            disabled: o || void 0,
            autoFocus: i,
            onKeyDown: g,
            onKeyUp: v,
            onClick: p
        }, E, D, N);
    return M()({
        ourProps: _,
        theirProps: s,
        slot: k,
        defaultTag: Kt,
        name: "Disclosure.Button"
    })
}
let Vt = "div",
    Yt = V.RenderStrategy | V.Static;

function _t(e, t) {
    let n = u.useId(),
        {
            id: r = `headlessui-disclosure-panel-${n}`,
            transition: o = !1,
            ...i
        } = e,
        [s, l] = te("Disclosure.Panel"),
        {
            close: a
        } = De("Disclosure.Panel"),
        [c, f] = u.useState(null),
        F = O(t, w(m => {
            Mt(() => l({
                type: 5,
                element: m
            }))
        }), f);
    u.useEffect(() => (l({
        type: 3,
        panelId: r
    }), () => {
        l({
            type: 3,
            panelId: null
        })
    }), [r, l]);
    let y = Z(),
        [g, v] = tt(o, c, y !== null ? (y & R.Open) === R.Open : s.disclosureState === 0),
        p = u.useMemo(() => ({
            open: s.disclosureState === 0,
            close: a
        }), [s.disclosureState, a]),
        b = {
            ref: F,
            id: r,
            ...nt(v)
        },
        E = M();
    return d.createElement(ge, null, d.createElement(re.Provider, {
        value: s.panelId
    }, E({
        ourProps: b,
        theirProps: i,
        slot: p,
        defaultTag: Vt,
        features: Yt,
        visible: g,
        name: "Disclosure.Panel"
    })))
}
let qt = I(jt),
    Wt = I(Ut),
    zt = I(_t),
    en = Object.assign(qt, {
        Button: Wt,
        Panel: zt
    });
export {
    we as C, ye as E, ce as O, ut as R, j as a, he as b, en as j, it as u, Qt as y
};