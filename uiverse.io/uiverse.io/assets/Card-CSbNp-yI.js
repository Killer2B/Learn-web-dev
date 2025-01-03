import {
    r as d,
    W as H,
    j as l
} from "./jsx-runtime-Dvja6b4T.js";
import {
    at as Ee,
    G as oe,
    aU as Oe,
    ao as me,
    i as Ae,
    af as Le,
    u as fe,
    H as Be,
    aH as $e,
    ac as He,
    aF as Ve,
    aa as ze
} from "./icons-pNqq09c6.js";
import {
    i as R
} from "./index-browser-CJEdsfDC.js";
import {
    r as J,
    g as X,
    j as Ne,
    L as U
} from "./components-BuvoIJIj.js";
import {
    c as K,
    p as Ue,
    u as Fe,
    a as Ke,
    l as pe
} from "./utils-OWsBmDA3.js";
import {
    t as Qe,
    g as We
} from "./constants-nXafxhpt.js";
import {
    n as D,
    d as qe,
    o as S,
    p as Re,
    O as ge,
    K as V,
    y as re,
    L as z,
    u as Ce,
    $ as Ge,
    a as Je,
    _ as Pe,
    j as Xe,
    w as Ye,
    A as Ze,
    h as et,
    c as E,
    r as tt,
    k as rt,
    F as xe,
    G as ke,
    g as nt
} from "./focus-management-BQHAzeQ5.js";
import {
    R as st,
    c as it,
    i as te,
    w as lt,
    e as ot,
    n as at,
    u as ut,
    x as ct,
    m as dt,
    f as mt,
    y as ft,
    a as pt,
    r as gt,
    z as xt
} from "./transition-8DRjYs4_.js";
import {
    u as ht,
    i as vt,
    a as bt,
    b as yt
} from "./floating-ui.react-pqI3rI6L.js";
import {
    o as wt,
    s as It,
    f as jt,
    a as St
} from "./floating-ui.react-dom-E7IEuBz2.js";
import {
    d as Et
} from "./floating-ui.dom-Cian5nPY.js";
import {
    K as Me,
    P as $t,
    m as Nt
} from "./motion-CMzn_ctr.js";
import {
    V as ee
} from "./Tooltip-CWGz9yl1.js";
import {
    P as Ft,
    a as Rt
} from "./Badges-Boz_qM20.js";
import {
    M as Ct
} from "./react-tooltip.min-DglEp1XQ.js";
import {
    p as Pt
} from "./dates-D8Yi43wI.js";
import {
    B as he
} from "./badge-C49ifptK.js";
import {
    C as ve
} from "./CustomTooltip-J09bHzyh.js";

function kt(e) {
    if (e === null) return {
        width: 0,
        height: 0
    };
    let {
        width: t,
        height: r
    } = e.getBoundingClientRect();
    return {
        width: t,
        height: r
    }
}

function Mt(e, t = !1) {
    let [r, s] = d.useReducer(() => ({}), {}), i = d.useMemo(() => kt(e), [e, r]);
    return D(() => {
        if (!e) return;
        let n = new ResizeObserver(s);
        return n.observe(e), () => {
            n.disconnect()
        }
    }, [e]), t ? {
        width: `${i.width}px`,
        height: `${i.height}px`
    } : i
}

function be(e) {
    return [e.screenX, e.screenY]
}

function Dt() {
    let e = d.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let r = be(t);
            return e.current[0] === r[0] && e.current[1] === r[1] ? !1 : (e.current = r, !0)
        },
        update(t) {
            e.current = be(t)
        }
    }
}

function Tt(e, {
    container: t,
    accept: r,
    walk: s
}) {
    let i = d.useRef(r),
        n = d.useRef(s);
    d.useEffect(() => {
        i.current = r, n.current = s
    }, [r, s]), D(() => {
        if (!t || !e) return;
        let o = qe(t);
        if (!o) return;
        let c = i.current,
            m = n.current,
            p = Object.assign(v => c(v), {
                acceptNode: c
            }),
            x = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, p, !1);
        for (; x.nextNode();) m(x.currentNode)
    }, [t, e, i, n])
}
let Q = d.createContext({
    styles: void 0,
    setReference: () => {},
    setFloating: () => {},
    getReferenceProps: () => ({}),
    getFloatingProps: () => ({}),
    slot: {}
});
Q.displayName = "FloatingContext";
let ue = d.createContext(null);
ue.displayName = "PlacementContext";

function _t(e) {
    return d.useMemo(() => e ? typeof e == "string" ? {
        to: e
    } : e : null, [e])
}

function Ot() {
    return d.useContext(Q).setReference
}

function At() {
    return d.useContext(Q).getReferenceProps
}

function Lt() {
    let {
        getFloatingProps: e,
        slot: t
    } = d.useContext(Q);
    return d.useCallback((...r) => Object.assign({}, e(...r), {
        "data-anchor": t.anchor
    }), [e, t])
}

function Bt(e = null) {
    e === !1 && (e = null), typeof e == "string" && (e = {
        to: e
    });
    let t = d.useContext(ue),
        r = d.useMemo(() => e, [JSON.stringify(e, (i, n) => {
            var o;
            return (o = n == null ? void 0 : n.outerHTML) != null ? o : n
        })]);
    D(() => {
        t == null || t(r ? ? null)
    }, [t, r]);
    let s = d.useContext(Q);
    return d.useMemo(() => [s.setFloating, e ? s.styles : {}], [s.setFloating, e, s.styles])
}
let ye = 4;

function Ht({
    children: e,
    enabled: t = !0
}) {
    let [r, s] = d.useState(null), [i, n] = d.useState(0), o = d.useRef(null), [c, m] = d.useState(null);
    Vt(c);
    let p = t && r !== null && c !== null,
        {
            to: x = "bottom",
            gap: v = 0,
            offset: a = 0,
            padding: f = 0,
            inner: I
        } = zt(r, c),
        [h, w = "center"] = x.split(" ");
    D(() => {
        p && n(0)
    }, [p]);
    let {
        refs: j,
        floatingStyles: C,
        context: u
    } = ht({
        open: p,
        placement: h === "selection" ? w === "center" ? "bottom" : `bottom-${w}` : w === "center" ? `${h}` : `${h}-${w}`,
        strategy: "absolute",
        transform: !1,
        middleware: [wt({
            mainAxis: h === "selection" ? 0 : v,
            crossAxis: a
        }), It({
            padding: f
        }), h !== "selection" && jt({
            padding: f
        }), h === "selection" && I ? vt({ ...I,
            padding: f,
            overflowRef: o,
            offset: i,
            minItemsVisible: ye,
            referenceOverflowThreshold: f,
            onFallbackChange(y) {
                var F, O;
                if (!y) return;
                let T = u.elements.floating;
                if (!T) return;
                let Y = parseFloat(getComputedStyle(T).scrollPaddingBottom) || 0,
                    W = Math.min(ye, T.childElementCount),
                    Z = 0,
                    g = 0;
                for (let _ of (O = (F = u.elements.floating) == null ? void 0 : F.childNodes) != null ? O : [])
                    if (_ instanceof HTMLElement) {
                        let A = _.offsetTop,
                            q = A + _.clientHeight + Y,
                            G = T.scrollTop,
                            de = G + T.clientHeight;
                        if (A >= G && q <= de) W--;
                        else {
                            g = Math.max(0, Math.min(q, de) - Math.max(A, G)), Z = _.clientHeight;
                            break
                        }
                    }
                W >= 1 && n(_ => {
                    let A = Z * W - g + Y;
                    return _ >= A ? _ : A
                })
            }
        }) : null, St({
            padding: f,
            apply({
                availableWidth: y,
                availableHeight: F,
                elements: O
            }) {
                Object.assign(O.floating.style, {
                    overflow: "auto",
                    maxWidth: `${y}px`,
                    maxHeight: `min(var(--anchor-max-height, 100vh), ${F}px)`
                })
            }
        })].filter(Boolean),
        whileElementsMounted: Et
    }), [N = h, P = w] = u.placement.split("-");
    h === "selection" && (N = "selection");
    let k = d.useMemo(() => ({
            anchor: [N, P].filter(Boolean).join(" ")
        }), [N, P]),
        b = bt(u, {
            overflowRef: o,
            onChange: n
        }),
        {
            getReferenceProps: M,
            getFloatingProps: L
        } = yt([b]),
        B = S(y => {
            m(y), j.setFloating(y)
        });
    return d.createElement(ue.Provider, {
        value: s
    }, d.createElement(Q.Provider, {
        value: {
            setFloating: B,
            setReference: j.setReference,
            styles: C,
            getReferenceProps: M,
            getFloatingProps: L,
            slot: k
        }
    }, e))
}

function Vt(e) {
    D(() => {
        if (!e) return;
        let t = new MutationObserver(() => {
            let r = window.getComputedStyle(e).maxHeight,
                s = parseFloat(r);
            if (isNaN(s)) return;
            let i = parseInt(r);
            isNaN(i) || s !== i && (e.style.maxHeight = `${Math.ceil(s)}px`)
        });
        return t.observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        }), () => {
            t.disconnect()
        }
    }, [e])
}

function zt(e, t) {
    var r, s, i;
    let n = se((r = e == null ? void 0 : e.gap) != null ? r : "var(--anchor-gap, 0)", t),
        o = se((s = e == null ? void 0 : e.offset) != null ? s : "var(--anchor-offset, 0)", t),
        c = se((i = e == null ? void 0 : e.padding) != null ? i : "var(--anchor-padding, 0)", t);
    return { ...e,
        gap: n,
        offset: o,
        padding: c
    }
}

function se(e, t, r = void 0) {
    let s = Re(),
        i = S((m, p) => {
            if (m == null) return [r, null];
            if (typeof m == "number") return [m, null];
            if (typeof m == "string") {
                if (!p) return [r, null];
                let x = we(m, p);
                return [x, v => {
                    let a = De(m); {
                        let f = a.map(I => window.getComputedStyle(p).getPropertyValue(I));
                        s.requestAnimationFrame(function I() {
                            s.nextFrame(I);
                            let h = !1;
                            for (let [j, C] of a.entries()) {
                                let u = window.getComputedStyle(p).getPropertyValue(C);
                                if (f[j] !== u) {
                                    f[j] = u, h = !0;
                                    break
                                }
                            }
                            if (!h) return;
                            let w = we(m, p);
                            x !== w && (v(w), x = w)
                        })
                    }
                    return s.dispose
                }]
            }
            return [r, null]
        }),
        n = d.useMemo(() => i(e, t)[0], [e, t]),
        [o = n, c] = d.useState();
    return D(() => {
        let [m, p] = i(e, t);
        if (c(m), !!p) return p(c)
    }, [e, t]), o
}

function De(e) {
    let t = /var\((.*)\)/.exec(e);
    if (t) {
        let r = t[1].indexOf(",");
        if (r === -1) return [t[1]];
        let s = t[1].slice(0, r).trim(),
            i = t[1].slice(r + 1).trim();
        return i ? [s, ...De(i)] : [s]
    }
    return []
}

function we(e, t) {
    let r = document.createElement("div");
    t.appendChild(r), r.style.setProperty("margin-top", "0px", "important"), r.style.setProperty("margin-top", e, "important");
    let s = parseFloat(window.getComputedStyle(r).marginTop) || 0;
    return t.removeChild(r), s
}

function Ut(e) {
    throw new Error("Unexpected object: " + e)
}
var $ = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))($ || {});

function ie(e, t) {
    let r = t.resolveItems();
    if (r.length <= 0) return null;
    let s = t.resolveActiveIndex(),
        i = s ? ? -1;
    switch (e.focus) {
        case 0:
            {
                for (let n = 0; n < r.length; ++n)
                    if (!t.resolveDisabled(r[n], n, r)) return n;
                return s
            }
        case 1:
            {
                i === -1 && (i = r.length);
                for (let n = i - 1; n >= 0; --n)
                    if (!t.resolveDisabled(r[n], n, r)) return n;
                return s
            }
        case 2:
            {
                for (let n = i + 1; n < r.length; ++n)
                    if (!t.resolveDisabled(r[n], n, r)) return n;
                return s
            }
        case 3:
            {
                for (let n = r.length - 1; n >= 0; --n)
                    if (!t.resolveDisabled(r[n], n, r)) return n;
                return s
            }
        case 4:
            {
                for (let n = 0; n < r.length; ++n)
                    if (t.resolveId(r[n], n, r) === e.id) return n;
                return s
            }
        case 5:
            return null;
        default:
            Ut(e)
    }
}

function Kt(e, t) {
    let r = d.useRef({
        left: 0,
        top: 0
    });
    if (D(() => {
            if (!t) return;
            let i = t.getBoundingClientRect();
            i && (r.current = i)
        }, [e, t]), t == null || !e || t === document.activeElement) return !1;
    let s = t.getBoundingClientRect();
    return s.top !== r.current.top || s.left !== r.current.left
}
let Ie = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function je(e) {
    var t, r;
    let s = (t = e.innerText) != null ? t : "",
        i = e.cloneNode(!0);
    if (!(i instanceof HTMLElement)) return s;
    let n = !1;
    for (let c of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) c.remove(), n = !0;
    let o = n ? (r = i.innerText) != null ? r : "" : s;
    return Ie.test(o) && (o = o.replace(Ie, "")), o
}

function Qt(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string") return t.trim();
    let r = e.getAttribute("aria-labelledby");
    if (r) {
        let s = r.split(" ").map(i => {
            let n = document.getElementById(i);
            if (n) {
                let o = n.getAttribute("aria-label");
                return typeof o == "string" ? o.trim() : je(n).trim()
            }
            return null
        }).filter(Boolean);
        if (s.length > 0) return s.join(", ")
    }
    return je(e).trim()
}

function Wt(e) {
    let t = d.useRef(""),
        r = d.useRef("");
    return S(() => {
        let s = e.current;
        if (!s) return "";
        let i = s.innerText;
        if (t.current === i) return r.current;
        let n = Qt(s).trim().toLowerCase();
        return t.current = i, r.current = n, n
    })
}
var qt = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qt || {}),
    Gt = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Gt || {}),
    Jt = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(Jt || {});

function le(e, t = r => r) {
    let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        s = nt(t(e.items.slice()), n => n.dataRef.current.domRef.current),
        i = r ? s.indexOf(r) : null;
    return i === -1 && (i = null), {
        items: s,
        activeItemIndex: i
    }
}
let Xt = {
        1(e) {
            return e.menuState === 1 ? e : { ...e,
                activeItemIndex: null,
                menuState: 1
            }
        },
        0(e) {
            return e.menuState === 0 ? e : { ...e,
                __demoMode: !1,
                menuState: 0
            }
        },
        2: (e, t) => {
            var r, s, i, n, o;
            if (e.menuState === 1) return e;
            let c = { ...e,
                searchQuery: "",
                activationTrigger: (r = t.trigger) != null ? r : 1,
                __demoMode: !1
            };
            if (t.focus === $.Nothing) return { ...c,
                activeItemIndex: null
            };
            if (t.focus === $.Specific) return { ...c,
                activeItemIndex: e.items.findIndex(x => x.id === t.id)
            };
            if (t.focus === $.Previous) {
                let x = e.activeItemIndex;
                if (x !== null) {
                    let v = e.items[x].dataRef.current.domRef,
                        a = ie(t, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: f => f.id,
                            resolveDisabled: f => f.dataRef.current.disabled
                        });
                    if (a !== null) {
                        let f = e.items[a].dataRef.current.domRef;
                        if (((s = v.current) == null ? void 0 : s.previousElementSibling) === f.current || ((i = f.current) == null ? void 0 : i.previousElementSibling) === null) return { ...c,
                            activeItemIndex: a
                        }
                    }
                }
            } else if (t.focus === $.Next) {
                let x = e.activeItemIndex;
                if (x !== null) {
                    let v = e.items[x].dataRef.current.domRef,
                        a = ie(t, {
                            resolveItems: () => e.items,
                            resolveActiveIndex: () => e.activeItemIndex,
                            resolveId: f => f.id,
                            resolveDisabled: f => f.dataRef.current.disabled
                        });
                    if (a !== null) {
                        let f = e.items[a].dataRef.current.domRef;
                        if (((n = v.current) == null ? void 0 : n.nextElementSibling) === f.current || ((o = f.current) == null ? void 0 : o.nextElementSibling) === null) return { ...c,
                            activeItemIndex: a
                        }
                    }
                }
            }
            let m = le(e),
                p = ie(t, {
                    resolveItems: () => m.items,
                    resolveActiveIndex: () => m.activeItemIndex,
                    resolveId: x => x.id,
                    resolveDisabled: x => x.dataRef.current.disabled
                });
            return { ...c,
                ...m,
                activeItemIndex: p
            }
        },
        3: (e, t) => {
            let r = e.searchQuery !== "" ? 0 : 1,
                s = e.searchQuery + t.value.toLowerCase(),
                i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find(o => {
                    var c;
                    return ((c = o.dataRef.current.textValue) == null ? void 0 : c.startsWith(s)) && !o.dataRef.current.disabled
                }),
                n = i ? e.items.indexOf(i) : -1;
            return n === -1 || n === e.activeItemIndex ? { ...e,
                searchQuery: s
            } : { ...e,
                searchQuery: s,
                activeItemIndex: n,
                activationTrigger: 1
            }
        },
        4(e) {
            return e.searchQuery === "" ? e : { ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        5: (e, t) => {
            let r = le(e, s => [...s, {
                id: t.id,
                dataRef: t.dataRef
            }]);
            return { ...e,
                ...r
            }
        },
        6: (e, t) => {
            let r = le(e, s => {
                let i = s.findIndex(n => n.id === t.id);
                return i !== -1 && s.splice(i, 1), s
            });
            return { ...e,
                ...r,
                activationTrigger: 1
            }
        },
        7: (e, t) => e.buttonElement === t.element ? e : { ...e,
            buttonElement: t.element
        },
        8: (e, t) => e.itemsElement === t.element ? e : { ...e,
            itemsElement: t.element
        }
    },
    ce = d.createContext(null);
ce.displayName = "MenuContext";

function ne(e) {
    let t = d.useContext(ce);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r, ne), r
    }
    return t
}

function Yt(e, t) {
    return Ce(t.type, Xt, e, t)
}
let Zt = d.Fragment;

function er(e, t) {
    let {
        __demoMode: r = !1,
        ...s
    } = e, i = d.useReducer(Yt, {
        __demoMode: r,
        menuState: r ? 0 : 1,
        buttonElement: null,
        itemsElement: null,
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1
    }), [{
        menuState: n,
        itemsElement: o,
        buttonElement: c
    }, m] = i, p = re(t);
    st(n === 0, [c, o], (I, h) => {
        m({
            type: 1
        }), Ze(h, et.Loose) || (I.preventDefault(), c == null || c.focus())
    });
    let x = S(() => {
            m({
                type: 1
            })
        }),
        v = d.useMemo(() => ({
            open: n === 0,
            close: x
        }), [n, x]),
        a = {
            ref: p
        },
        f = z();
    return H.createElement(Ht, null, H.createElement(ce.Provider, {
        value: i
    }, H.createElement(it, {
        value: Ce(n, {
            0: te.Open,
            1: te.Closed
        })
    }, f({
        ourProps: a,
        theirProps: s,
        slot: v,
        defaultTag: Zt,
        name: "Menu"
    }))))
}
let tr = "button";

function rr(e, t) {
    var r;
    let s = d.useId(),
        {
            id: i = `headlessui-menu-button-${s}`,
            disabled: n = !1,
            autoFocus: o = !1,
            ...c
        } = e,
        [m, p] = ne("Menu.Button"),
        x = At(),
        v = re(t, Ot(), S(b => p({
            type: 7,
            element: b
        }))),
        a = S(b => {
            switch (b.key) {
                case E.Space:
                case E.Enter:
                case E.ArrowDown:
                    b.preventDefault(), b.stopPropagation(), J.flushSync(() => p({
                        type: 0
                    })), p({
                        type: 2,
                        focus: $.First
                    });
                    break;
                case E.ArrowUp:
                    b.preventDefault(), b.stopPropagation(), J.flushSync(() => p({
                        type: 0
                    })), p({
                        type: 2,
                        focus: $.Last
                    });
                    break
            }
        }),
        f = S(b => {
            switch (b.key) {
                case E.Space:
                    b.preventDefault();
                    break
            }
        }),
        I = S(b => {
            var M;
            if (tt(b.currentTarget)) return b.preventDefault();
            n || (m.menuState === 0 ? (J.flushSync(() => p({
                type: 1
            })), (M = m.buttonElement) == null || M.focus({
                preventScroll: !0
            })) : (b.preventDefault(), p({
                type: 0
            })))
        }),
        {
            isFocusVisible: h,
            focusProps: w
        } = Ge({
            autoFocus: o
        }),
        {
            isHovered: j,
            hoverProps: C
        } = Je({
            isDisabled: n
        }),
        {
            pressed: u,
            pressProps: N
        } = lt({
            disabled: n
        }),
        P = d.useMemo(() => ({
            open: m.menuState === 0,
            active: u || m.menuState === 0,
            disabled: n,
            hover: j,
            focus: h,
            autofocus: o
        }), [m, j, h, u, n, o]),
        k = Pe(x(), {
            ref: v,
            id: i,
            type: ot(e, m.buttonElement),
            "aria-haspopup": "menu",
            "aria-controls": (r = m.itemsElement) == null ? void 0 : r.id,
            "aria-expanded": m.menuState === 0,
            disabled: n || void 0,
            autoFocus: o,
            onKeyDown: a,
            onKeyUp: f,
            onClick: I
        }, w, C, N);
    return z()({
        ourProps: k,
        theirProps: c,
        slot: P,
        defaultTag: tr,
        name: "Menu.Button"
    })
}
let nr = "div",
    sr = ge.RenderStrategy | ge.Static;

function ir(e, t) {
    var r, s;
    let i = d.useId(),
        {
            id: n = `headlessui-menu-items-${i}`,
            anchor: o,
            portal: c = !1,
            modal: m = !0,
            transition: p = !1,
            ...x
        } = e,
        v = _t(o),
        [a, f] = ne("Menu.Items"),
        [I, h] = Bt(v),
        w = Lt(),
        [j, C] = d.useState(null),
        u = re(t, v ? I : null, S(g => f({
            type: 8,
            element: g
        })), C),
        N = at(a.itemsElement);
    v && (c = !0);
    let P = ut(),
        [k, b] = ct(p, j, P !== null ? (P & te.Open) === te.Open : a.menuState === 0);
    dt(k, a.buttonElement, () => {
        f({
            type: 1
        })
    });
    let M = a.__demoMode ? !1 : m && a.menuState === 0;
    mt(M, N);
    let L = a.__demoMode ? !1 : m && a.menuState === 0;
    ft(L, {
        allowed: d.useCallback(() => [a.buttonElement, a.itemsElement], [a.buttonElement, a.itemsElement])
    });
    let B = a.menuState !== 0,
        y = Kt(B, a.buttonElement) ? !1 : k;
    d.useEffect(() => {
        let g = a.itemsElement;
        g && a.menuState === 0 && g !== (N == null ? void 0 : N.activeElement) && g.focus({
            preventScroll: !0
        })
    }, [a.menuState, a.itemsElement, N]), Tt(a.menuState === 0, {
        container: a.itemsElement,
        accept(g) {
            return g.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(g) {
            g.setAttribute("role", "none")
        }
    });
    let F = Re(),
        O = S(g => {
            var _, A, q;
            switch (F.dispose(), g.key) {
                case E.Space:
                    if (a.searchQuery !== "") return g.preventDefault(), g.stopPropagation(), f({
                        type: 3,
                        value: g.key
                    });
                case E.Enter:
                    if (g.preventDefault(), g.stopPropagation(), f({
                            type: 1
                        }), a.activeItemIndex !== null) {
                        let {
                            dataRef: G
                        } = a.items[a.activeItemIndex];
                        (A = (_ = G.current) == null ? void 0 : _.domRef.current) == null || A.click()
                    }
                    ke(a.buttonElement);
                    break;
                case E.ArrowDown:
                    return g.preventDefault(), g.stopPropagation(), f({
                        type: 2,
                        focus: $.Next
                    });
                case E.ArrowUp:
                    return g.preventDefault(), g.stopPropagation(), f({
                        type: 2,
                        focus: $.Previous
                    });
                case E.Home:
                case E.PageUp:
                    return g.preventDefault(), g.stopPropagation(), f({
                        type: 2,
                        focus: $.First
                    });
                case E.End:
                case E.PageDown:
                    return g.preventDefault(), g.stopPropagation(), f({
                        type: 2,
                        focus: $.Last
                    });
                case E.Escape:
                    g.preventDefault(), g.stopPropagation(), J.flushSync(() => f({
                        type: 1
                    })), (q = a.buttonElement) == null || q.focus({
                        preventScroll: !0
                    });
                    break;
                case E.Tab:
                    g.preventDefault(), g.stopPropagation(), J.flushSync(() => f({
                        type: 1
                    })), rt(a.buttonElement, g.shiftKey ? xe.Previous : xe.Next);
                    break;
                default:
                    g.key.length === 1 && (f({
                        type: 3,
                        value: g.key
                    }), F.setTimeout(() => f({
                        type: 4
                    }), 350));
                    break
            }
        }),
        T = S(g => {
            switch (g.key) {
                case E.Space:
                    g.preventDefault();
                    break
            }
        }),
        Y = d.useMemo(() => ({
            open: a.menuState === 0
        }), [a.menuState]),
        W = Pe(v ? w() : {}, {
            "aria-activedescendant": a.activeItemIndex === null || (r = a.items[a.activeItemIndex]) == null ? void 0 : r.id,
            "aria-labelledby": (s = a.buttonElement) == null ? void 0 : s.id,
            id: n,
            onKeyDown: O,
            onKeyUp: T,
            role: "menu",
            tabIndex: a.menuState === 0 ? 0 : void 0,
            ref: u,
            style: { ...x.style,
                ...h,
                "--button-width": Mt(a.buttonElement, !0).width
            },
            ...pt(b)
        }),
        Z = z();
    return H.createElement(gt, {
        enabled: c ? e.static || k : !1
    }, Z({
        ourProps: W,
        theirProps: x,
        slot: Y,
        defaultTag: nr,
        features: sr,
        visible: y,
        name: "Menu.Items"
    }))
}
let lr = d.Fragment;

function or(e, t) {
    let r = d.useId(),
        {
            id: s = `headlessui-menu-item-${r}`,
            disabled: i = !1,
            ...n
        } = e,
        [o, c] = ne("Menu.Item"),
        m = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === s : !1,
        p = d.useRef(null),
        x = re(t, p);
    D(() => {
        if (!o.__demoMode && o.menuState === 0 && m && o.activationTrigger !== 0) return Xe().requestAnimationFrame(() => {
            var y, F;
            (F = (y = p.current) == null ? void 0 : y.scrollIntoView) == null || F.call(y, {
                block: "nearest"
            })
        })
    }, [o.__demoMode, p, m, o.menuState, o.activationTrigger, o.activeItemIndex]);
    let v = Wt(p),
        a = d.useRef({
            disabled: i,
            domRef: p,
            get textValue() {
                return v()
            }
        });
    D(() => {
        a.current.disabled = i
    }, [a, i]), D(() => (c({
        type: 5,
        id: s,
        dataRef: a
    }), () => c({
        type: 6,
        id: s
    })), [a, s]);
    let f = S(() => {
            c({
                type: 1
            })
        }),
        I = S(y => {
            if (i) return y.preventDefault();
            c({
                type: 1
            }), ke(o.buttonElement)
        }),
        h = S(() => {
            if (i) return c({
                type: 2,
                focus: $.Nothing
            });
            c({
                type: 2,
                focus: $.Specific,
                id: s
            })
        }),
        w = Dt(),
        j = S(y => {
            w.update(y), !i && (m || c({
                type: 2,
                focus: $.Specific,
                id: s,
                trigger: 0
            }))
        }),
        C = S(y => {
            w.wasMoved(y) && (i || m || c({
                type: 2,
                focus: $.Specific,
                id: s,
                trigger: 0
            }))
        }),
        u = S(y => {
            w.wasMoved(y) && (i || m && c({
                type: 2,
                focus: $.Nothing
            }))
        }),
        [N, P] = Me(),
        [k, b] = Ye(),
        M = d.useMemo(() => ({
            active: m,
            focus: m,
            disabled: i,
            close: f
        }), [m, i, f]),
        L = {
            id: s,
            ref: x,
            role: "menuitem",
            tabIndex: i === !0 ? void 0 : -1,
            "aria-disabled": i === !0 ? !0 : void 0,
            "aria-labelledby": N,
            "aria-describedby": k,
            disabled: void 0,
            onClick: I,
            onFocus: h,
            onPointerEnter: j,
            onMouseEnter: j,
            onPointerMove: C,
            onMouseMove: C,
            onPointerLeave: u,
            onMouseLeave: u
        },
        B = z();
    return H.createElement(P, null, H.createElement(b, null, B({
        ourProps: L,
        theirProps: n,
        slot: M,
        defaultTag: lr,
        name: "Menu.Item"
    })))
}
let ar = "div";

function ur(e, t) {
    let [r, s] = Me(), i = e, n = {
        ref: t,
        "aria-labelledby": r,
        role: "group"
    }, o = z();
    return H.createElement(s, null, o({
        ourProps: n,
        theirProps: i,
        slot: {},
        defaultTag: ar,
        name: "Menu.Section"
    }))
}
let cr = "header";

function dr(e, t) {
    let r = d.useId(),
        {
            id: s = `headlessui-menu-heading-${r}`,
            ...i
        } = e,
        n = $t();
    D(() => n.register(s), [s, n.register]);
    let o = {
        id: s,
        ref: t,
        role: "presentation",
        ...n.props
    };
    return z()({
        ourProps: o,
        theirProps: i,
        slot: {},
        defaultTag: cr,
        name: "Menu.Heading"
    })
}
let mr = "div";

function fr(e, t) {
    let r = e,
        s = {
            ref: t,
            role: "separator"
        };
    return z()({
        ourProps: s,
        theirProps: r,
        slot: {},
        defaultTag: mr,
        name: "Menu.Separator"
    })
}
let pr = V(er),
    Te = V(rr),
    _e = V(ir),
    ae = V(or),
    gr = V(ur),
    xr = V(dr),
    hr = V(fr),
    vr = Object.assign(pr, {
        Button: Te,
        Items: _e,
        Item: ae,
        Section: gr,
        Heading: xr,
        Separator: hr
    });
const br = ({
        isRecommended: e = !1,
        postId: t
    }) => {
        const r = X();
        return l.jsxs(r.Form, {
            method: "post",
            action: "/recommended",
            className: "",
            children: [l.jsx("input", {
                type: "hidden",
                name: "postId",
                value: t
            }), l.jsx("input", {
                type: "hidden",
                name: "action",
                value: e ? "remove" : "add"
            }), l.jsx("button", {
                type: "submit",
                className: `flex bg-transparent border-none cursor-pointer p-1 rounded-lg  ${e?"hover:bg-blue-300 text-blue-500":" hover:bg-gray-300 text-gray-500 opacity-0 group-hover:opacity-100"}`,
                children: r.state === "loading" ? Ee("w-5 h-5") : oe("w-5 h-5")
            })]
        })
    },
    Se = /backdrop-filter:\s*blur\(\d+px\);\s*/g,
    yr = ({
        id: e,
        postType: t,
        backgroundColor: r,
        isTailwind: s,
        isInView: i,
        mockCode: n,
        version: o
    }) => {
        const [c, m] = d.useState(null), p = X(), x = r ? {
            backgroundColor: r
        } : {}, v = d.useRef(null);
        return d.useEffect(() => {
            if (!v.current) return;
            const a = v.current.shadowRoot || v.current.attachShadow({
                mode: "open"
            });
            return m(a), () => {
                a && (a.innerHTML = "")
            }
        }, []), d.useEffect(() => {
            i && !n && p.load(`/resource/post/code/${e}?v=${o}`)
        }, [i, e, n, o]), d.useEffect(() => {
            if (!c || !p.data && !n) return;
            const {
                css: a,
                html: f,
                customCSS: I
            } = p.data || n;
            if (!a || !f) return;
            const h = document.createElement("style");
            h.textContent = s ? (I || "") + Qe + a.replace(Se, "") : (I || "") + We + a.replace(Se, ""), requestAnimationFrame(() => {
                c.innerHTML = "", c.appendChild(h), c.innerHTML += f
            });
            const w = j => Ue(j, t);
            return c.addEventListener("click", w), () => {
                c.removeEventListener("click", w)
            }
        }, [p.data, t, s, c, n]), l.jsx("div", {
            id: "container",
            ref: v,
            className: K("card__button-container relative z-[1] preview-container"),
            style: x,
            suppressHydrationWarning: !0
        })
    };

function wr({
    className: e = "",
    metadata: t,
    post: r
}) {
    var n;
    const s = X(),
        {
            user: i
        } = Fe();
    return ((n = R.user_role) == null ? void 0 : n.admin) !== (i == null ? void 0 : i.role) ? null : l.jsxs(vr, {
        as: "div",
        className: `font-sans inline-block text-left ${e}`,
        children: [l.jsx("div", {
            children: l.jsx(Te, {
                className: K(r.theme === R.post_theme.dark ? "hover:bg-dark-400 text-gray-400" : "hover:bg-gray-300 text-dark-800", " border-none inline-flex justify-center w-full p-1.5 text-sm font-semibold  bg-transparent border cursor-pointer  rounded-md shadow-sm  focus:outline-none "),
                children: Oe("w-5 h-5")
            })
        }), l.jsx(xt, {
            as: d.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: l.jsx(_e, {
                className: K(r.theme === R.post_theme.dark ? "bg-dark-500 ring-dark-700 text-gray-100" : "bg-gray-100 ring-gray-400 text-dark-800", "absolute mt-2 font-semibold origin-top-right rounded-md shadow-lg w-48 right-2 ring-1 ring-opacity-5 focus:outline-none"),
                children: l.jsxs("div", {
                    className: "py-1",
                    children: [(i == null ? void 0 : i.role) === R.user_role.admin && l.jsx(ae, {
                        children: l.jsxs(s.Form, {
                            method: "post",
                            action: "/resource/toggle/neumorphism",
                            children: [l.jsxs("button", {
                                type: "submit",
                                className: K(r.theme === R.post_theme.dark ? "hover:bg-dark-300" : "hover:bg-gray-200", "flex items-center gap-1.5 px-2 py-2 text-sm w-full border-none bg-transparent"),
                                children: [t != null && t.showOnNeumorphism ? me("h-5 w-5") : oe("h-5 w-5"), "Neumorphism"]
                            }), l.jsx("input", {
                                type: "hidden",
                                name: "postId",
                                value: r.id
                            })]
                        })
                    }), (i == null ? void 0 : i.role) === R.user_role.admin && l.jsx(ae, {
                        children: l.jsxs(s.Form, {
                            method: "post",
                            action: "/resource/toggle/cssbuttons",
                            children: [l.jsxs("button", {
                                type: "submit",
                                className: K(r.theme === R.post_theme.dark ? "hover:bg-dark-300" : "hover:bg-gray-200", "flex items-center gap-1.5 px-2 py-2 text-sm w-full border-none bg-transparent"),
                                children: [t != null && t.showOnCssbuttons ? me("h-5 w-5") : oe("h-5 w-5"), "Cssbuttons"]
                            }), l.jsx("input", {
                                type: "hidden",
                                name: "postId",
                                value: r.id
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
const Ir = ({
        isFavorite: e,
        postId: t,
        favoriteCount: r = 0,
        isSignedIn: s = !1,
        isCompact: i = !1
    }) => {
        const n = X(),
            o = Ne(),
            c = m => {
                if (m.preventDefault(), !s) {
                    o("?create-account", {
                        preventScrollReset: !0
                    });
                    return
                }
                n.submit(m.currentTarget)
            };
        return l.jsxs(n.Form, {
            method: "post",
            action: "/favorites",
            onSubmit: c,
            children: [l.jsx("input", {
                type: "hidden",
                name: "postId",
                value: t
            }), l.jsx("input", {
                type: "hidden",
                name: "action",
                value: e ? "remove" : "save"
            }), l.jsxs("button", {
                type: "submit",
                className: `flex hover:bg-dark-500 bg-transparent p-1 text-sm gap-0.5 text-gray-300 cursor-pointer transition-colors  font-sans font-semibold border-none items-center overflow-hidden rounded-lg ${e&&""}`,
                disabled: n.state === "loading" || n.state === "submitting",
                children: [n.state === "loading" ? Ee("w-4 h-4") : Ae(`w-4 h-4 ${e?"text-yellow-400":"text-gray-300"}`), r > 0 && Ke(r)]
            })]
        })
    },
    jr = ({
        variationsCount: e,
        originalPostId: t,
        theme: r,
        status: s,
        backgroundColor: i,
        isTailwind: n,
        postId: o
    }) => {
        const c = s === R.post_status.saved;
        return l.jsxs("div", {
            className: "absolute z-20 flex items-center left-1.5 top-[6px] gap-0.5",
            children: [n && l.jsxs(l.Fragment, {
                children: [l.jsx("div", {
                    className: "px-1 py-1",
                    id: `tailwind-${o}`,
                    children: Le("h-5 w-5")
                }), l.jsx(ee, {
                    id: `tailwind-${o}`,
                    text: "Tailwind CSS"
                })]
            }), e > 0 && l.jsxs(l.Fragment, {
                children: [l.jsxs("button", {
                    id: `variations-${o}`,
                    className: `flex items-center gap-2 px-1.5 pl-1 py-1 font-sans text-sm font-semibold border-none rounded-md  ${r==="dark"?"text-gray-200 bg-dark-600":"text-dark-600 bg-[#e8e8e8]"}`,
                    children: [fe(`h-5 w-5 ${r==="dark"?"text-blue-500":"text-blue-600"}`), " ", e]
                }), l.jsx(ee, {
                    id: `variations-${o}`,
                    text: `This post has ${e} ${e>1?"variations":"variation"}`
                })]
            }), t && l.jsxs(l.Fragment, {
                children: [l.jsx("div", {
                    id: `variation-${o}`,
                    className: "z-20 flex items-center gap-2 px-1.5 pl-1 py-1 font-sans text-sm font-semibold ",
                    children: fe(`h-5 w-5 ${i?pe(i)==="light"?"text-gray-100":"text-gray-500":"text-gray-400"}`)
                }), l.jsx(ee, {
                    id: `variation-${o}`,
                    text: "This post is a variation of another post"
                })]
            }), c && l.jsxs(l.Fragment, {
                children: [l.jsx("div", {
                    id: `private-${o}`,
                    className: "z-20 flex items-center gap-2 px-1 py-1 font-sans text-sm font-semibold ",
                    children: Be(`h-4 w-4 ${i?pe(i)==="light"?"text-gray-100":"text-gray-500":"text-gray-400"}`)
                }), l.jsx(ee, {
                    id: `private-${o}`,
                    text: "This post is private, only you can see it"
                })]
            })]
        })
    },
    Sr = ({
        id: e,
        website: t
    }) => l.jsx(Ct, {
        anchorId: e,
        className: "z-[1000] opacity-100 shadow-lg rounded-lg bg-dark-600 p-0",
        clickable: !0,
        children: l.jsxs(U, {
            className: "flex items-center underline underline-offset-2 gap-2 text-sm text-offwhite  px-4 py-3 pl-3",
            to: t,
            children: [$e("w-5 h-5 text-blue-500"), " Visit external source"]
        })
    }),
    Er = (e = {}) => {
        const t = d.useRef(null),
            [r, s] = d.useState(!1),
            {
                rootMargin: i = "0px",
                once: n = !0
            } = e;
        return d.useEffect(() => {
            const o = t.current;
            if (!o) return;
            const c = new IntersectionObserver(m => {
                m.forEach(p => {
                    p.isIntersecting ? (s(!0), n && c.disconnect()) : n || s(!1)
                })
            }, {
                rootMargin: i
            });
            return c.observe(o), () => c.disconnect()
        }, [i, n]), {
            ref: t,
            isInView: r
        }
    },
    $r = ({
        stats: e
    }) => l.jsxs("div", {
        className: "flex items-center gap-1.5 mt-2 px-2",
        children: [l.jsx("span", {
            className: "text-xs text-gray-400",
            children: "Review in progress"
        }), l.jsxs("div", {
            className: "flex gap-1",
            children: [l.jsx(ve, {
                trigger: l.jsx("div", {
                    children: l.jsx(he, {
                        variant: "success",
                        className: "cursor-default min-w-[24px] h-5 text-xs justify-center",
                        children: e.communityApprovalsCount
                    })
                }),
                children: l.jsxs("div", {
                    className: "text-sm",
                    children: [e.communityApprovalsCount, " community approval", e.communityApprovalsCount !== 1 ? "s" : ""]
                })
            }), l.jsx(ve, {
                trigger: l.jsx("div", {
                    children: l.jsx(he, {
                        variant: "destructive",
                        className: "cursor-default min-w-[24px] h-5 text-xs justify-center",
                        children: e.communityRejectionsCount
                    })
                }),
                children: l.jsxs("div", {
                    className: "text-sm",
                    children: [e.communityRejectionsCount, " community rejection", e.communityRejectionsCount !== 1 ? "s" : ""]
                })
            })]
        })]
    }),
    Nr = Intl.NumberFormat("en", {
        notation: "compact"
    }),
    Qr = ({
        post: e,
        onClick: t,
        className: r = "",
        review: s = !1,
        isCompact: i = !1,
        hideFooter: n = !1,
        hideVariationCount: o = !1,
        link: c = `/${(v=>(v=e==null?void 0:e.user)==null?void 0:v.username)()}/${e==null?void 0:e.friendlyId}`,
        mockMetadata: m,
        mockCode: p,
        animate: x = !0
    }) => {
        var b, M, L, B, y, F, O, T;
        const {
            ref: a,
            isInView: f
        } = Er({
            rootMargin: "100px"
        }), I = X(), {
            user: h
        } = Fe(), w = Ne(), j = (h == null ? void 0 : h.role) === R.user_role.admin, C = (h == null ? void 0 : h.id) === ((b = e == null ? void 0 : e.user) == null ? void 0 : b.id);
        d.useEffect(() => {
            f && !m && I.load(`/resource/post/metadata/${e.id}`)
        }, [f, e.id, m]);
        const u = I.data || m,
            N = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .5,
                        ease: "easeOut"
                    }
                }
            },
            P = x ? Nt.article : "article",
            k = x ? {
                initial: "hidden",
                animate: f ? "visible" : "hidden",
                variants: N
            } : {};
        return l.jsxs(P, {
            ref: a,
            ...k,
            className: `card flex flex-col text-black h-full z-10 card--${e.type} group ${e.theme==="dark"&&"dark-background"} ${u!=null&&u.isFavorite?"favorite":""}`,
            onClick: t,
            children: [l.jsxs("div", {
                className: `card-content grow ${i?"compact":""} ${r}`,
                children: [l.jsxs(U, {
                    to: c,
                    className: "font-sans font-semibold get-code bg-dark-400",
                    children: [He("w-[20px] h-[20px]"), " Get code"]
                }), (u == null ? void 0 : u.post_source) && l.jsxs(l.Fragment, {
                    children: [l.jsx(U, {
                        className: "left-[12px] bottom-[12px] z-10 opacity-0 group-hover:opacity-100 transition-opacity absolute px-[8px] py-[4px] rounded-md bg-blue-700 hover:bg-blue-800 text-white",
                        to: u.post_source.website,
                        id: e.id + "-source",
                        children: Ve("w-[20px] h-[20px] text-white")
                    }), l.jsx(Sr, {
                        id: e.id + "-source",
                        website: u.post_source.website
                    })]
                }), j && !s && l.jsxs("div", {
                    className: "absolute z-50 left-1.5 bottom-1.5 flex items-center gap-1",
                    children: [u != null && u.socialMediaShare && ((M = u.socialMediaShare) == null ? void 0 : M.length) > 0 ? $e("w-5 h-5 text-purple-500") : null, l.jsx(br, {
                        isRecommended: (u == null ? void 0 : u.isRecommended) ? ? !1,
                        postId: e.id
                    })]
                }), C && (u == null ? void 0 : u.comment) && s && l.jsxs("div", {
                    className: "absolute m-[20px] w-[calc(100%_-_40px)] rounded-lg bottom-0 z-[2] shadow-xl bg-red-50 text-red-400 px-6 py-4",
                    children: [l.jsx("div", {
                        className: "mb-1 text-sm text-dark-700",
                        children: "Feedback:"
                    }), l.jsxs("span", {
                        className: "font-semibold",
                        children: ['"', u == null ? void 0 : u.comment, '"']
                    })]
                }), l.jsx(wr, {
                    post: e,
                    metadata: u,
                    className: "top-1 right-1 absolute z-50 hidden group-hover:block"
                }), l.jsx(jr, {
                    originalPostId: e.originalPostId,
                    variationsCount: o ? 0 : (u == null ? void 0 : u.variationsCount) ? ? 0,
                    backgroundColor: e.backgroundColor,
                    theme: e.theme,
                    status: e.status,
                    isTailwind: e.isTailwind,
                    postId: e.id
                }), l.jsxs("div", {
                    className: "clickable-wrapper",
                    onClick: () => w(c),
                    children: [l.jsx(yr, {
                        id: e.id,
                        backgroundColor: e.backgroundColor,
                        isTailwind: e.isTailwind,
                        postType: e.type,
                        version: (u == null ? void 0 : u.version) || e.version,
                        isInView: f,
                        mockCode: p
                    }), l.jsx(U, {
                        to: c,
                        className: "fake-link",
                        children: "Link to post"
                    })]
                })]
            }), !i && !n && l.jsxs("div", {
                className: K("card__footer", s ? "" : "h-[28px]"),
                children: [l.jsxs("div", {
                    className: "",
                    children: [((L = e == null ? void 0 : e.user) == null ? void 0 : L.username) && l.jsx(U, {
                        to: `/profile/${(B=e==null?void 0:e.user)==null?void 0:B.username}`,
                        children: l.jsxs("div", {
                            className: "card__nickname text-color flex items-center gap-1.5",
                            children: [(y = e == null ? void 0 : e.user) == null ? void 0 : y.username, ((F = e == null ? void 0 : e.user) == null ? void 0 : F.subscription) === R.subscription.pro && l.jsx(Ft, {}), ((O = e == null ? void 0 : e.user) == null ? void 0 : O.subscription) === R.subscription.pro_plus && l.jsx(Rt, {})]
                        })
                    }), s && e.createdDate && l.jsxs("div", {
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-3 text-xs text-white",
                            children: [Pt(e.createdDate), l.jsx("div", {
                                className: "font-semibold rounded bg-dark-500 text-amber-400",
                                children: (T = h == null ? void 0 : h._count) == null ? void 0 : T.post
                            })]
                        }), (u == null ? void 0 : u.challenge) && l.jsx("div", {
                            className: "flex justify-center px-2 py-1 mt-2 mb-2 text-sm font-semibold text-white transition-colors border border-transparent rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500",
                            children: u.challenge.name
                        })]
                    })]
                }), u != null && u.issueCount && u.issueCount > 0 && (e.status === R.post_status.review || e.status === R.post_status.needs_work) ? l.jsxs(U, {
                    to: c,
                    className: "card__issues",
                    children: [ze(), " ", l.jsx("span", {
                        className: "count",
                        children: u.issueCount
                    }), " ", l.jsx("span", {
                        className: "label",
                        children: u.issueCount === 1 ? "issue" : "issues"
                    })]
                }) : null, l.jsxs("div", {
                    className: "flex items-center gap-1 card__views",
                    children: [u != null && u.viewCount && u.viewCount > 0 ? l.jsxs("span", {
                        children: [Nr.format(u.viewCount), " views"]
                    }) : null, l.jsx(Ir, {
                        isFavorite: (u == null ? void 0 : u.isFavorite) ? ? !1,
                        postId: e.id,
                        isSignedIn: !!h || !1,
                        isCompact: i,
                        favoriteCount: u == null ? void 0 : u.favoriteCount
                    })]
                })]
            }), s && e.reviewStats && l.jsx($r, {
                stats: e.reviewStats
            })]
        })
    };
export {
    Qr as C, Ht as M, Bt as R, yr as S, Lt as b, Mt as d, _t as x, Ot as y
};