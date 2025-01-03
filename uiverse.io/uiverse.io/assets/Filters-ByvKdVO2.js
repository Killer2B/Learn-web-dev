import {
    r as o,
    W as w,
    j as r
} from "./jsx-runtime-Dvja6b4T.js";
import {
    D as pe
} from "./Dropdown-D2tEq7s7.js";
import {
    c as ce
} from "./index-5vInR1HM.js";
import {
    L as _e,
    R as je,
    af as Le,
    an as Ae,
    ai as Ge
} from "./icons-pNqq09c6.js";
import {
    D as Z,
    a as Ke
} from "./constants-nXafxhpt.js";
import {
    c as q
} from "./utils-OWsBmDA3.js";
import {
    f as Ne,
    e as Ce,
    N as we,
    j as ze
} from "./components-BuvoIJIj.js";
import {
    O as oe,
    K as te,
    y as X,
    T as We,
    b as he,
    s as $e,
    o as k,
    L as ne,
    u as H,
    $ as He,
    a as Ue,
    _ as me,
    n as Ve,
    P as W,
    F as L,
    A as Je,
    h as Qe,
    c as z,
    r as Fe,
    d as Ye,
    e as fe
} from "./focus-management-BQHAzeQ5.js";
import {
    n as be,
    t as Ze,
    R as qe,
    c as Xe,
    i as ee,
    w as et,
    e as tt,
    u as Ie,
    x as Be,
    a as Te,
    m as rt,
    f as nt,
    s as at,
    r as lt,
    z as ae
} from "./transition-8DRjYs4_.js";
import {
    M as ot,
    y as st,
    x as it,
    R as ut,
    b as ct,
    d as dt
} from "./Card-CSbNp-yI.js";
import {
    b as pt,
    R as mt,
    E as ft,
    O as Oe,
    C as vt,
    u as Re,
    a as A,
    y as ke,
    j as de
} from "./disclosure-1pvYrbuE.js";
import {
    f as ve,
    s as xe
} from "./hidden-B7qEBE7r.js";
import {
    I as xt
} from "./input-DroKt9gF.js";
var ht = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ht || {}),
    bt = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(bt || {});
let gt = {
        0: e => ({ ...e,
            popoverState: H(e.popoverState, {
                0: 1,
                1: 0
            }),
            __demoMode: !1
        }),
        1(e) {
            return e.popoverState === 1 ? e : { ...e,
                popoverState: 1,
                __demoMode: !1
            }
        },
        2(e, s) {
            return e.button === s.button ? e : { ...e,
                button: s.button
            }
        },
        3(e, s) {
            return e.buttonId === s.buttonId ? e : { ...e,
                buttonId: s.buttonId
            }
        },
        4(e, s) {
            return e.panel === s.panel ? e : { ...e,
                panel: s.panel
            }
        },
        5(e, s) {
            return e.panelId === s.panelId ? e : { ...e,
                panelId: s.panelId
            }
        }
    },
    ge = o.createContext(null);
ge.displayName = "PopoverContext";

function se(e) {
    let s = o.useContext(ge);
    if (s === null) {
        let v = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(v, se), v
    }
    return s
}
let ie = o.createContext(null);
ie.displayName = "PopoverAPIContext";

function ye(e) {
    let s = o.useContext(ie);
    if (s === null) {
        let v = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(v, ye), v
    }
    return s
}
let Pe = o.createContext(null);
Pe.displayName = "PopoverGroupContext";

function Me() {
    return o.useContext(Pe)
}
let ue = o.createContext(null);
ue.displayName = "PopoverPanelContext";

function yt() {
    return o.useContext(ue)
}

function Pt(e, s) {
    return H(s.type, gt, e, s)
}
let St = "div";

function jt(e, s) {
    var v;
    let {
        __demoMode: S = !1,
        ...p
    } = e, u = o.useRef(null), h = X(s, We(c => {
        u.current = c
    })), a = o.useRef([]), m = o.useReducer(Pt, {
        __demoMode: S,
        popoverState: S ? 0 : 1,
        buttons: a,
        button: null,
        buttonId: null,
        panel: null,
        panelId: null,
        beforePanelSentinel: o.createRef(),
        afterPanelSentinel: o.createRef(),
        afterButtonSentinel: o.createRef()
    }), [{
        popoverState: b,
        button: l,
        buttonId: P,
        panel: x,
        panelId: $,
        beforePanelSentinel: j,
        afterPanelSentinel: g,
        afterButtonSentinel: t
    }, i] = m, y = be((v = u.current) != null ? v : l), B = o.useMemo(() => {
        if (!l || !x) return !1;
        for (let E of document.querySelectorAll("body > *"))
            if (Number(E == null ? void 0 : E.contains(l)) ^ Number(E == null ? void 0 : E.contains(x))) return !0;
        let c = he(),
            n = c.indexOf(l),
            f = (n + c.length - 1) % c.length,
            d = (n + 1) % c.length,
            C = c[f],
            I = c[d];
        return !x.contains(C) && !x.contains(I)
    }, [l, x]), T = $e(P), O = $e($), U = o.useMemo(() => ({
        buttonId: T,
        panelId: O,
        close: () => i({
            type: 1
        })
    }), [T, O, i]), R = Me(), N = R == null ? void 0 : R.registerPopover, G = k(() => {
        var c;
        return (c = R == null ? void 0 : R.isFocusWithinPopoverGroup()) != null ? c : (y == null ? void 0 : y.activeElement) && ((l == null ? void 0 : l.contains(y.activeElement)) || (x == null ? void 0 : x.contains(y.activeElement)))
    });
    o.useEffect(() => N == null ? void 0 : N(U), [N, U]);
    let [F, V] = Ze(), K = pt(l), M = mt({
        mainTreeNode: K,
        portals: F,
        defaultContainers: [l, x]
    });
    ft(y == null ? void 0 : y.defaultView, "focus", c => {
        var n, f, d, C, I, E;
        c.target !== window && c.target instanceof HTMLElement && b === 0 && (G() || l && x && (M.contains(c.target) || (f = (n = j.current) == null ? void 0 : n.contains) != null && f.call(n, c.target) || (C = (d = g.current) == null ? void 0 : d.contains) != null && C.call(d, c.target) || (E = (I = t.current) == null ? void 0 : I.contains) != null && E.call(I, c.target) || i({
            type: 1
        })))
    }, !0), qe(b === 0, M.resolveContainers, (c, n) => {
        i({
            type: 1
        }), Je(n, Qe.Loose) || (c.preventDefault(), l == null || l.focus())
    });
    let D = k(c => {
            i({
                type: 1
            });
            let n = c ? c instanceof HTMLElement ? c : "current" in c && c.current instanceof HTMLElement ? c.current : l : l;
            n == null || n.focus()
        }),
        J = o.useMemo(() => ({
            close: D,
            isPortalled: B
        }), [D, B]),
        Q = o.useMemo(() => ({
            open: b === 0,
            close: D
        }), [b, D]),
        Y = {
            ref: h
        },
        re = ne();
    return w.createElement(Oe, {
        node: K
    }, w.createElement(ot, null, w.createElement(ue.Provider, {
        value: null
    }, w.createElement(ge.Provider, {
        value: m
    }, w.createElement(ie.Provider, {
        value: J
    }, w.createElement(vt, {
        value: D
    }, w.createElement(Xe, {
        value: H(b, {
            0: ee.Open,
            1: ee.Closed
        })
    }, w.createElement(V, null, re({
        ourProps: Y,
        theirProps: p,
        slot: Q,
        defaultTag: St,
        name: "Popover"
    })))))))))
}
let wt = "button";

function $t(e, s) {
    let v = o.useId(),
        {
            id: S = `headlessui-popover-button-${v}`,
            disabled: p = !1,
            autoFocus: u = !1,
            ...h
        } = e,
        [a, m] = se("Popover.Button"),
        {
            isPortalled: b
        } = ye("Popover.Button"),
        l = o.useRef(null),
        P = `headlessui-focus-sentinel-${o.useId()}`,
        x = Me(),
        $ = x == null ? void 0 : x.closeOthers,
        j = yt() !== null;
    o.useEffect(() => {
        if (!j) return m({
            type: 3,
            buttonId: S
        }), () => {
            m({
                type: 3,
                buttonId: null
            })
        }
    }, [j, S, m]);
    let [g] = o.useState(() => Symbol()), t = X(l, s, st(), k(n => {
        if (!j) {
            if (n) a.buttons.current.push(g);
            else {
                let f = a.buttons.current.indexOf(g);
                f !== -1 && a.buttons.current.splice(f, 1)
            }
            a.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), n && m({
                type: 2,
                button: n
            })
        }
    })), i = X(l, s), y = be(l), B = k(n => {
        var f, d, C;
        if (j) {
            if (a.popoverState === 1) return;
            switch (n.key) {
                case z.Space:
                case z.Enter:
                    n.preventDefault(), (d = (f = n.target).click) == null || d.call(f), m({
                        type: 1
                    }), (C = a.button) == null || C.focus();
                    break
            }
        } else switch (n.key) {
            case z.Space:
            case z.Enter:
                n.preventDefault(), n.stopPropagation(), a.popoverState === 1 && ($ == null || $(a.buttonId)), m({
                    type: 0
                });
                break;
            case z.Escape:
                if (a.popoverState !== 0) return $ == null ? void 0 : $(a.buttonId);
                if (!l.current || y != null && y.activeElement && !l.current.contains(y.activeElement)) return;
                n.preventDefault(), n.stopPropagation(), m({
                    type: 1
                });
                break
        }
    }), T = k(n => {
        j || n.key === z.Space && n.preventDefault()
    }), O = k(n => {
        var f, d;
        Fe(n.currentTarget) || p || (j ? (m({
            type: 1
        }), (f = a.button) == null || f.focus()) : (n.preventDefault(), n.stopPropagation(), a.popoverState === 1 && ($ == null || $(a.buttonId)), m({
            type: 0
        }), (d = a.button) == null || d.focus()))
    }), U = k(n => {
        n.preventDefault(), n.stopPropagation()
    }), {
        isFocusVisible: R,
        focusProps: N
    } = He({
        autoFocus: u
    }), {
        isHovered: G,
        hoverProps: F
    } = Ue({
        isDisabled: p
    }), {
        pressed: V,
        pressProps: K
    } = et({
        disabled: p
    }), M = a.popoverState === 0, D = o.useMemo(() => ({
        open: M,
        active: V || M,
        disabled: p,
        hover: G,
        focus: R,
        autofocus: u
    }), [M, G, R, V, p, u]), J = tt(e, a.button), Q = j ? me({
        ref: i,
        type: J,
        onKeyDown: B,
        onClick: O,
        disabled: p || void 0,
        autoFocus: u
    }, N, F, K) : me({
        ref: t,
        id: a.buttonId,
        type: J,
        "aria-expanded": a.popoverState === 0,
        "aria-controls": a.panel ? a.panelId : void 0,
        disabled: p || void 0,
        autoFocus: u,
        onKeyDown: B,
        onKeyUp: T,
        onClick: O,
        onMouseDown: U
    }, N, F, K), Y = Re(), re = k(() => {
        let n = a.panel;
        if (!n) return;

        function f() {
            H(Y.current, {
                [A.Forwards]: () => W(n, L.First),
                [A.Backwards]: () => W(n, L.Last)
            }) === fe.Error && W(he().filter(d => d.dataset.headlessuiFocusGuard !== "true"), H(Y.current, {
                [A.Forwards]: L.Next,
                [A.Backwards]: L.Previous
            }), {
                relativeTo: a.button
            })
        }
        f()
    }), c = ne();
    return w.createElement(w.Fragment, null, c({
        ourProps: Q,
        theirProps: h,
        slot: D,
        defaultTag: wt,
        name: "Popover.Button"
    }), M && !j && b && w.createElement(ve, {
        id: P,
        ref: a.afterButtonSentinel,
        features: xe.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: re
    }))
}
let kt = "div",
    Et = oe.RenderStrategy | oe.Static;

function De(e, s) {
    let v = o.useId(),
        {
            id: S = `headlessui-popover-backdrop-${v}`,
            transition: p = !1,
            ...u
        } = e,
        [{
            popoverState: h
        }, a] = se("Popover.Backdrop"),
        [m, b] = o.useState(null),
        l = X(s, b),
        P = Ie(),
        [x, $] = Be(p, m, P !== null ? (P & ee.Open) === ee.Open : h === 0),
        j = k(i => {
            if (Fe(i.currentTarget)) return i.preventDefault();
            a({
                type: 1
            })
        }),
        g = o.useMemo(() => ({
            open: h === 0
        }), [h]),
        t = {
            ref: l,
            id: S,
            "aria-hidden": !0,
            onClick: j,
            ...Te($)
        };
    return ne()({
        ourProps: t,
        theirProps: u,
        slot: g,
        defaultTag: kt,
        features: Et,
        visible: x,
        name: "Popover.Backdrop"
    })
}
let Nt = "div",
    Ct = oe.RenderStrategy | oe.Static;

function Ft(e, s) {
    let v = o.useId(),
        {
            id: S = `headlessui-popover-panel-${v}`,
            focus: p = !1,
            anchor: u,
            portal: h = !1,
            modal: a = !1,
            transition: m = !1,
            ...b
        } = e,
        [l, P] = se("Popover.Panel"),
        {
            close: x,
            isPortalled: $
        } = ye("Popover.Panel"),
        j = `headlessui-focus-sentinel-before-${v}`,
        g = `headlessui-focus-sentinel-after-${v}`,
        t = o.useRef(null),
        i = it(u),
        [y, B] = ut(i),
        T = ct();
    i && (h = !0);
    let [O, U] = o.useState(null), R = X(t, s, i ? y : null, k(n => P({
        type: 4,
        panel: n
    })), U), N = be(t);
    Ve(() => (P({
        type: 5,
        panelId: S
    }), () => {
        P({
            type: 5,
            panelId: null
        })
    }), [S, P]);
    let G = Ie(),
        [F, V] = Be(m, O, G !== null ? (G & ee.Open) === ee.Open : l.popoverState === 0);
    rt(F, l.button, () => {
        P({
            type: 1
        })
    });
    let K = l.__demoMode ? !1 : a && F;
    nt(K, N);
    let M = k(n => {
        var f;
        switch (n.key) {
            case z.Escape:
                if (l.popoverState !== 0 || !t.current || N != null && N.activeElement && !t.current.contains(N.activeElement)) return;
                n.preventDefault(), n.stopPropagation(), P({
                    type: 1
                }), (f = l.button) == null || f.focus();
                break
        }
    });
    o.useEffect(() => {
        var n;
        e.static || l.popoverState === 1 && ((n = e.unmount) == null || n) && P({
            type: 4,
            panel: null
        })
    }, [l.popoverState, e.unmount, e.static, P]), o.useEffect(() => {
        if (l.__demoMode || !p || l.popoverState !== 0 || !t.current) return;
        let n = N == null ? void 0 : N.activeElement;
        t.current.contains(n) || W(t.current, L.First)
    }, [l.__demoMode, p, t.current, l.popoverState]);
    let D = o.useMemo(() => ({
            open: l.popoverState === 0,
            close: x
        }), [l.popoverState, x]),
        J = me(i ? T() : {}, {
            ref: R,
            id: S,
            onKeyDown: M,
            onBlur: p && l.popoverState === 0 ? n => {
                var f, d, C, I, E;
                let _ = n.relatedTarget;
                _ && t.current && ((f = t.current) != null && f.contains(_) || (P({
                    type: 1
                }), ((C = (d = l.beforePanelSentinel.current) == null ? void 0 : d.contains) != null && C.call(d, _) || (E = (I = l.afterPanelSentinel.current) == null ? void 0 : I.contains) != null && E.call(I, _)) && _.focus({
                    preventScroll: !0
                })))
            } : void 0,
            tabIndex: -1,
            style: { ...b.style,
                ...B,
                "--button-width": dt(l.button, !0).width
            },
            ...Te(V)
        }),
        Q = Re(),
        Y = k(() => {
            let n = t.current;
            if (!n) return;

            function f() {
                H(Q.current, {
                    [A.Forwards]: () => {
                        var d;
                        W(n, L.First) === fe.Error && ((d = l.afterPanelSentinel.current) == null || d.focus())
                    },
                    [A.Backwards]: () => {
                        var d;
                        (d = l.button) == null || d.focus({
                            preventScroll: !0
                        })
                    }
                })
            }
            f()
        }),
        re = k(() => {
            let n = t.current;
            if (!n) return;

            function f() {
                H(Q.current, {
                    [A.Forwards]: () => {
                        if (!l.button) return;
                        let d = he(),
                            C = d.indexOf(l.button),
                            I = d.slice(0, C + 1),
                            E = [...d.slice(C + 1), ...I];
                        for (let _ of E.slice())
                            if (_.dataset.headlessuiFocusGuard === "true" || O != null && O.contains(_)) {
                                let Se = E.indexOf(_);
                                Se !== -1 && E.splice(Se, 1)
                            }
                        W(E, L.First, {
                            sorted: !1
                        })
                    },
                    [A.Backwards]: () => {
                        var d;
                        W(n, L.Previous) === fe.Error && ((d = l.button) == null || d.focus())
                    }
                })
            }
            f()
        }),
        c = ne();
    return w.createElement(at, null, w.createElement(ue.Provider, {
        value: S
    }, w.createElement(ie.Provider, {
        value: {
            close: x,
            isPortalled: $
        }
    }, w.createElement(lt, {
        enabled: h ? e.static || F : !1
    }, F && $ && w.createElement(ve, {
        id: j,
        ref: l.beforePanelSentinel,
        features: xe.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: Y
    }), c({
        ourProps: J,
        theirProps: b,
        slot: D,
        defaultTag: Nt,
        features: Ct,
        visible: F,
        name: "Popover.Panel"
    }), F && $ && w.createElement(ve, {
        id: g,
        ref: l.afterPanelSentinel,
        features: xe.Focusable,
        "data-headlessui-focus-guard": !0,
        as: "button",
        type: "button",
        onFocus: re
    })))))
}
let It = "div";

function Bt(e, s) {
    let v = o.useRef(null),
        S = X(v, s),
        [p, u] = o.useState([]),
        h = k(g => {
            u(t => {
                let i = t.indexOf(g);
                if (i !== -1) {
                    let y = t.slice();
                    return y.splice(i, 1), y
                }
                return t
            })
        }),
        a = k(g => (u(t => [...t, g]), () => h(g))),
        m = k(() => {
            var g;
            let t = Ye(v);
            if (!t) return !1;
            let i = t.activeElement;
            return (g = v.current) != null && g.contains(i) ? !0 : p.some(y => {
                var B, T;
                return ((B = t.getElementById(y.buttonId.current)) == null ? void 0 : B.contains(i)) || ((T = t.getElementById(y.panelId.current)) == null ? void 0 : T.contains(i))
            })
        }),
        b = k(g => {
            for (let t of p) t.buttonId.current !== g && t.close()
        }),
        l = o.useMemo(() => ({
            registerPopover: a,
            unregisterPopover: h,
            isFocusWithinPopoverGroup: m,
            closeOthers: b
        }), [a, h, m, b]),
        P = o.useMemo(() => ({}), []),
        x = e,
        $ = {
            ref: S
        },
        j = ne();
    return w.createElement(Oe, null, w.createElement(Pe.Provider, {
        value: l
    }, j({
        ourProps: $,
        theirProps: x,
        slot: P,
        defaultTag: It,
        name: "Popover.Group"
    })))
}
let Tt = te(jt),
    Ot = te($t),
    Rt = te(De),
    Mt = te(De),
    Dt = te(Ft),
    _t = te(Bt),
    le = Object.assign(Tt, {
        Button: Ot,
        Backdrop: Mt,
        Overlay: Rt,
        Panel: Dt,
        Group: _t
    });
const Ee = [{
    id: "category",
    name: "Category",
    options: Object.values(Ke).map(e => ({
        value: e.id,
        label: e.label,
        new: e.new,
        path: e.path
    })),
    open: !0
}];

function Lt() {
    var p;
    const [e, s] = o.useState(!1), {
        pathname: v
    } = Ne(), [S] = Ce();
    return o.useEffect(() => {
        s(!1)
    }, [v]), r.jsxs("div", {
        className: "block lg:hidden",
        children: [r.jsx(ae.Root, {
            show: e,
            as: o.Fragment,
            children: r.jsxs(ke, {
                as: "div",
                className: "relative z-[400] sm:hidden",
                onClose: s,
                children: [r.jsx(ae.Child, {
                    as: o.Fragment,
                    enter: "transition-opacity ease-linear duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: r.jsx("div", {
                        className: "fixed inset-0 bg-black bg-opacity-25"
                    })
                }), r.jsx("div", {
                    className: "fixed inset-0 z-40 flex",
                    children: r.jsx(ae.Child, {
                        as: o.Fragment,
                        enter: "transition ease-in-out duration-300 transform",
                        enterFrom: "translate-x-full",
                        enterTo: "translate-x-0",
                        leave: "transition ease-in-out duration-300 transform",
                        leaveFrom: "translate-x-0",
                        leaveTo: "translate-x-full",
                        children: r.jsxs(ke.Panel, {
                            className: "relative flex flex-col w-full h-full max-w-xs py-6 pb-12 ml-auto overflow-y-auto shadow-xl bg-dark-700",
                            children: [r.jsxs("div", {
                                className: "flex items-center justify-between px-6 pb-6",
                                children: [r.jsx("div", {
                                    className: "text-lg font-semibold text-gray-100",
                                    children: "Filters"
                                }), r.jsxs("button", {
                                    type: "button",
                                    className: "flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-300 rounded-md",
                                    onClick: () => s(!1),
                                    children: [r.jsx("span", {
                                        className: "sr-only",
                                        children: "Close menu"
                                    }), _e("h-6 w-6")]
                                })]
                            }), Ee.map(u => r.jsx(de, {
                                as: "div",
                                className: "border-t border-dark-500",
                                defaultOpen: !0,
                                children: ({
                                    open: h
                                }) => r.jsxs(r.Fragment, {
                                    children: [r.jsx("div", {
                                        className: "",
                                        children: r.jsxs(de.Button, {
                                            className: "flex items-center justify-between w-full px-6 py-8 text-sm text-gray-400",
                                            children: [r.jsx("span", {
                                                className: "font-semibold text-gray-100",
                                                children: u.name
                                            }), r.jsx("span", {
                                                className: "flex items-center ml-6",
                                                children: je(q(h ? "-rotate-180" : "rotate-0", "h-5 w-5 transform"))
                                            })]
                                        })
                                    }), r.jsx(de.Panel, {
                                        className: "px-6 py-2 pb-6",
                                        children: r.jsx("div", {
                                            className: "space-y-1",
                                            children: u.options.map((a, m) => r.jsxs(we, {
                                                to: `/${a.path}`,
                                                className: ({
                                                    isActive: b,
                                                    isPending: l
                                                }) => q(b ? "text-gray-100 bg-dark-500" : "text-gray-400", "flex items-center py-2.5  rounded-lg"),
                                                children: [u.id !== "category" && r.jsx("input", {
                                                    id: `filter-mobile-${u.id}-${m}`,
                                                    name: `${u.id}[]`,
                                                    defaultValue: a.value,
                                                    type: "checkbox",
                                                    defaultChecked: a.checked,
                                                    className: "w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-400"
                                                }), r.jsx("label", {
                                                    htmlFor: `filter-mobile-${u.id}-${m}`,
                                                    className: "ml-3 font-semibold text-inherit",
                                                    children: a.label
                                                })]
                                            }, a.value))
                                        })
                                    })]
                                })
                            }, u.name))]
                        })
                    })
                })]
            })
        }), r.jsxs("section", {
            "aria-labelledby": "filter-heading pt-6",
            children: [r.jsx("span", {
                id: "filter-heading",
                className: "sr-only",
                children: "Filters"
            }), r.jsx("div", {
                className: "",
                children: r.jsxs("div", {
                    className: "flex items-center justify-between mx-auto max-w-7xl",
                    children: [r.jsx(pe, {
                        data: Z.orderBy,
                        searchParams: S,
                        pathname: v,
                        align: "left",
                        label: "Sort",
                        value: (p = Z.orderBy.items.find(u => u.id === S.get("orderBy"))) == null ? void 0 : p.label
                    }), r.jsx("button", {
                        type: "button",
                        className: "inline-block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-gray-100 sm:hidden",
                        onClick: () => s(!0),
                        children: "Category"
                    }), r.jsx("div", {
                        className: "hidden sm:block",
                        children: r.jsx("div", {
                            className: "flow-root",
                            children: r.jsx(le.Group, {
                                className: "flex items-center -mx-4 divide-x divide-dark-600",
                                children: Ee.map(u => r.jsxs(le, {
                                    className: "relative inline-block px-4 text-left",
                                    children: [r.jsxs(le.Button, {
                                        className: "inline-flex justify-center text-sm font-semibold text-gray-300 group hover:text-gray-200",
                                        children: [r.jsx("span", {
                                            children: u.name
                                        }), je("-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500")]
                                    }), r.jsx(ae, {
                                        as: o.Fragment,
                                        enter: "transition ease-out duration-100",
                                        enterFrom: "transform opacity-0 scale-95",
                                        enterTo: "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom: "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: r.jsx(le.Panel, {
                                            className: "absolute right-0 z-10 p-4 mt-2 origin-top-right rounded-md shadow-2xl bg-dark-600 ring-1 ring-black ring-opacity-5 focus:outline-none",
                                            children: r.jsx("div", {
                                                className: "space-y-4",
                                                children: u.options.map(h => r.jsx(we, {
                                                    to: `/${h.path}`,
                                                    className: "font-semibold text-gray-100 whitespace-nowrap block px-4",
                                                    children: h.label
                                                }, h.value))
                                            })
                                        })
                                    })]
                                }, u.name))
                            })
                        })
                    })]
                })
            })]
        })]
    })
}
const At = ({
        activeTab: e,
        currentPage: s,
        hideSearch: v = !1,
        hideTags: S = !1
    }) => {
        var j, g;
        const {
            pathname: p
        } = Ne(), [u, h] = o.useState(""), [a] = Ce(), m = ze(), b = ["neumorphism", "3d", "gradient"], l = a.getAll("tags"), P = () => {
            if (!a || !p) return;
            const t = ce(a);
            t.delete("page"), t.delete("theme"), t.delete("t"), u === "" ? t.delete("search") : t.set("search", u), m(`/elements?${t.toString()}`)
        }, x = t => {
            if (!a || !p) return;
            const i = ce(a);
            i.delete("page"), t === null ? i.delete("t") : i.set("t", t), m(`${p}?${i.toString()}`)
        }, $ = t => {
            if (!a || !p) return;
            const i = ce(a);
            i.delete("page"), l.includes(t) ? (i.delete("tags"), l.forEach(y => {
                y !== t && i.append("tags", y)
            })) : (i.delete("tags"), i.append("tags", t)), m(`${p}?${i.toString()}`)
        };
        return r.jsxs("div", {
            className: "w-full",
            children: [r.jsxs("div", {
                className: "items-center justify-between hidden gap-2 filters max-lg:items-end lg:flex",
                children: [r.jsx("div", {
                    className: "text-gray-400 page text-sm whitespace-nowrap",
                    children: s === 0 ? "First page" : `Page ${s}`
                }), r.jsxs("div", {
                    className: q("flex items-center justify-end flex-wrap gap-1 gap-y-2 w-full", e.id === "favorites" && "hidden"),
                    children: [!S && r.jsxs(r.Fragment, {
                        children: [r.jsx("p", {
                            className: "flex items-center max-[1650px]:hidden",
                            children: b == null ? void 0 : b.map(t => r.jsxs("button", {
                                onClick: () => $(t),
                                className: `px-3 py-2 ${l.includes(t)?"bg-dark-600":"hover:bg-dark-600"} rounded-lg cursor-pointer text-sm font-normal text-gray-300`,
                                children: ["#", t]
                            }, t))
                        }), r.jsx("div", {
                            className: "h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block"
                        })]
                    }), r.jsxs("div", {
                        className: "items-center hidden gap-1 text-sm lg:flex",
                        children: [r.jsx("div", {
                            onClick: () => x(null),
                            className: q("flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2", !a.get("t") && "bg-dark-600", "hover:bg-dark-600 rounded-lg text-gray-200"),
                            children: "All"
                        }), r.jsxs("div", {
                            onClick: () => x("tailwind"),
                            className: q("flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2", a.get("t") === "tailwind" && "bg-dark-600", "hover:bg-dark-600 rounded-lg text-gray-200"),
                            children: [Le("h-5 w-5 mr-1"), " Tailwind"]
                        }), r.jsxs("div", {
                            onClick: () => x("css"),
                            className: q("flex items-center cursor-pointer py-2 px-2.5 font-semibold gap-2", a.get("t") === "css" && "bg-dark-600", "hover:bg-dark-600 rounded-lg text-gray-200"),
                            children: [Ae("text-blue-600 w-5 h-5"), " CSS"]
                        })]
                    }), r.jsx("div", {
                        className: "h-[30px] w-[2px] bg-dark-600 mx-1 hidden lg:block"
                    }), r.jsx(pe, {
                        data: Z.orderBy,
                        searchParams: a,
                        pathname: p,
                        label: "Sort",
                        value: (j = Z.orderBy.items.find(t => t.id === a.get("orderBy"))) == null ? void 0 : j.label
                    }), r.jsx(pe, {
                        data: Z.theme,
                        searchParams: a,
                        pathname: p,
                        value: (g = Z.theme.items.find(t => t.id === a.get("theme"))) == null ? void 0 : g.label
                    }), r.jsxs("form", {
                        className: "flex ml-2 items-center relative max-w-[250px] w-full",
                        onSubmit: t => {
                            t.preventDefault(), P()
                        },
                        children: [Ge("w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"), r.jsx(xt, {
                            type: "text",
                            name: "search",
                            defaultValue: a.get("search") || "",
                            onChange: t => h(t.target.value),
                            id: "search",
                            placeholder: "Search tags, users, posts...",
                            className: "pr-10 pl-4 bg-dark-600 border-none text-offwhite placeholder:text-gray-400 placeholder:text-sm focus:ring-indigo-500/80 focus:ring-4"
                        })]
                    })]
                })]
            }), r.jsx(Lt, {})]
        })
    },
    er = At;
export {
    er as F
};