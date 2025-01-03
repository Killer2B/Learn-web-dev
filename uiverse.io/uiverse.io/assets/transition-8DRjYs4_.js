import {
    r as s,
    W as E,
    R as he
} from "./jsx-runtime-Dvja6b4T.js";
import {
    p as re,
    o as y,
    d as le,
    n as C,
    j as A,
    s as j,
    A as We,
    h as je,
    t as Ie,
    l as D,
    K as F,
    y as I,
    T as Ue,
    L as U,
    O as Ye,
    q as x,
    m as Be,
    v as Ve,
    u as we
} from "./focus-management-BQHAzeQ5.js";
import {
    r as Xe
} from "./components-BuvoIJIj.js";

function _e(e) {
    let t = e.width / 2,
        n = e.height / 2;
    return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t
    }
}

function ze(e, t) {
    return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)
}

function Ht({
    disabled: e = !1
} = {}) {
    let t = s.useRef(null),
        [n, r] = s.useState(!1),
        o = re(),
        i = y(() => {
            t.current = null, r(!1), o.dispose()
        }),
        u = y(a => {
            if (o.dispose(), t.current === null) {
                t.current = a.currentTarget, r(!0); {
                    let l = le(a.currentTarget);
                    o.addEventListener(l, "pointerup", i, !1), o.addEventListener(l, "pointermove", d => {
                        if (t.current) {
                            let c = _e(d);
                            r(ze(c, t.current.getBoundingClientRect()))
                        }
                    }, !1), o.addEventListener(l, "pointercancel", i, !1)
                }
            }
        });
    return {
        pressed: n,
        pressProps: e ? {} : {
            onPointerDown: u,
            onPointerUp: i,
            onClick: i
        }
    }
}
let qe = class extends Map {
    constructor(t) {
        super(), this.factory = t
    }
    get(t) {
        let n = super.get(t);
        return n === void 0 && (n = this.factory(t), this.set(t, n)), n
    }
};

function ye(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(o) {
            return r.add(o), () => r.delete(o)
        },
        dispatch(o, ...i) {
            let u = t[o].call(n, ...i);
            u && (n = u, r.forEach(a => a()))
        }
    }
}

function Ce(e) {
    return s.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot)
}
let Ge = new qe(() => ye(() => [], {
    ADD(e) {
        return this.includes(e) ? this : [...this, e]
    },
    REMOVE(e) {
        let t = this.indexOf(e);
        if (t === -1) return this;
        let n = this.slice();
        return n.splice(t, 1), n
    }
}));

function ie(e, t) {
    let n = Ge.get(t),
        r = s.useId(),
        o = Ce(n);
    if (C(() => {
            if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r)
        }, [n, e]), !e) return !1;
    let i = o.indexOf(r),
        u = o.length;
    return i === -1 && (i = u, u += 1), i === u - 1
}
let ee = new Map,
    W = new Map;

function me(e) {
    var t;
    let n = (t = W.get(e)) != null ? t : 0;
    return W.set(e, n + 1), n !== 0 ? () => ve(e) : (ee.set(e, {
        "aria-hidden": e.getAttribute("aria-hidden"),
        inert: e.inert
    }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => ve(e))
}

function ve(e) {
    var t;
    let n = (t = W.get(e)) != null ? t : 1;
    if (n === 1 ? W.delete(e) : W.set(e, n - 1), n !== 1) return;
    let r = ee.get(e);
    r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, ee.delete(e))
}

function kt(e, {
    allowed: t,
    disallowed: n
} = {}) {
    let r = ie(e, "inert-others");
    C(() => {
        var o, i;
        if (!r) return;
        let u = A();
        for (let l of (o = n == null ? void 0 : n()) != null ? o : []) l && u.add(me(l));
        let a = (i = t == null ? void 0 : t()) != null ? i : [];
        for (let l of a) {
            if (!l) continue;
            let d = le(l);
            if (!d) continue;
            let c = l.parentElement;
            for (; c && c !== d.body;) {
                for (let p of c.children) a.some(v => p.contains(v)) || u.add(me(p));
                c = c.parentElement
            }
        }
        return u.dispose
    }, [r, t, n])
}

function Dt(e, t, n) {
    let r = j(o => {
        let i = o.getBoundingClientRect();
        i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n()
    });
    s.useEffect(() => {
        if (!e) return;
        let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
        if (!o) return;
        let i = A();
        if (typeof ResizeObserver < "u") {
            let u = new ResizeObserver(() => r.current(o));
            u.observe(o), i.add(() => u.disconnect())
        }
        if (typeof IntersectionObserver < "u") {
            let u = new IntersectionObserver(() => r.current(o));
            u.observe(o), i.add(() => u.disconnect())
        }
        return () => i.dispose()
    }, [t, r, e])
}

function $e() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function Ke() {
    return /Android/gi.test(window.navigator.userAgent)
}

function Je() {
    return $e() || Ke()
}

function k(e, t, n, r) {
    let o = j(n);
    s.useEffect(() => {
        if (!e) return;

        function i(u) {
            o.current(u)
        }
        return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r)
    }, [e, t, r])
}

function Qe(e, t, n, r) {
    let o = j(n);
    s.useEffect(() => {
        if (!e) return;

        function i(u) {
            o.current(u)
        }
        return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r)
    }, [e, t, r])
}
const ge = 30;

function Wt(e, t, n) {
    let r = ie(e, "outside-click"),
        o = j(n),
        i = s.useCallback(function(l, d) {
            if (l.defaultPrevented) return;
            let c = d(l);
            if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
            let p = function v(f) {
                return typeof f == "function" ? v(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
            }(t);
            for (let v of p)
                if (v !== null && (v.contains(c) || l.composed && l.composedPath().includes(v))) return;
            return !We(c, je.Loose) && c.tabIndex !== -1 && l.preventDefault(), o.current(l, c)
        }, [o, t]),
        u = s.useRef(null);
    k(r, "pointerdown", l => {
        var d, c;
        u.current = ((c = (d = l.composedPath) == null ? void 0 : d.call(l)) == null ? void 0 : c[0]) || l.target
    }, !0), k(r, "mousedown", l => {
        var d, c;
        u.current = ((c = (d = l.composedPath) == null ? void 0 : d.call(l)) == null ? void 0 : c[0]) || l.target
    }, !0), k(r, "click", l => {
        Je() || u.current && (i(l, () => u.current), u.current = null)
    }, !0);
    let a = s.useRef({
        x: 0,
        y: 0
    });
    k(r, "touchstart", l => {
        a.current.x = l.touches[0].clientX, a.current.y = l.touches[0].clientY
    }, !0), k(r, "touchend", l => {
        let d = {
            x: l.changedTouches[0].clientX,
            y: l.changedTouches[0].clientY
        };
        if (!(Math.abs(d.x - a.current.x) >= ge || Math.abs(d.y - a.current.y) >= ge)) return i(l, () => l.target instanceof HTMLElement ? l.target : null)
    }, !0), Qe(r, "blur", l => i(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Pe(...e) {
    return s.useMemo(() => le(...e), [...e])
}

function jt(e, t) {
    return s.useMemo(() => {
        var n;
        if (e.type) return e.type;
        let r = (n = e.as) != null ? n : "button";
        if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button"
    }, [e.type, e.as, t])
}

function Ze() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement,
                o = (n = t.defaultView) != null ? n : window;
            e = Math.max(0, o.innerWidth - r.clientWidth)
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                o = Math.max(0, r.clientWidth - r.offsetWidth),
                i = Math.max(0, e - o);
            n.style(r, "paddingRight", `${i}px`)
        }
    }
}

function et() {
    return $e() ? {
        before({
            doc: e,
            d: t,
            meta: n
        }) {
            function r(o) {
                return n.containers.flatMap(i => i()).some(i => i.contains(o))
            }
            t.microTask(() => {
                var o;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let a = A();
                    a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()))
                }
                let i = (o = window.scrollY) != null ? o : window.pageYOffset,
                    u = null;
                t.addEventListener(e, "click", a => {
                    if (a.target instanceof HTMLElement) try {
                        let l = a.target.closest("a");
                        if (!l) return;
                        let {
                            hash: d
                        } = new URL(l.href), c = e.querySelector(d);
                        c && !r(c) && (u = c)
                    } catch {}
                }, !0), t.addEventListener(e, "touchstart", a => {
                    if (a.target instanceof HTMLElement)
                        if (r(a.target)) {
                            let l = a.target;
                            for (; l.parentElement && r(l.parentElement);) l = l.parentElement;
                            t.style(l, "overscrollBehavior", "contain")
                        } else t.style(a.target, "touchAction", "none")
                }), t.addEventListener(e, "touchmove", a => {
                    if (a.target instanceof HTMLElement) {
                        if (a.target.tagName === "INPUT") return;
                        if (r(a.target)) {
                            let l = a.target;
                            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth);) l = l.parentElement;
                            l.dataset.headlessuiPortal === "" && a.preventDefault()
                        } else a.preventDefault()
                    }
                }, {
                    passive: !1
                }), t.add(() => {
                    var a;
                    let l = (a = window.scrollY) != null ? a : window.pageYOffset;
                    i !== l && window.scrollTo(0, i), u && u.isConnected && (u.scrollIntoView({
                        block: "nearest"
                    }), u = null)
                })
            })
        }
    } : {}
}

function tt() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function nt(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let L = ye(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: A(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: nt(n)
            },
            o = [et(), Ze(), tt()];
        o.forEach(({
            before: i
        }) => i == null ? void 0 : i(r)), o.forEach(({
            after: i
        }) => i == null ? void 0 : i(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
L.subscribe(() => {
    let e = L.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            o = n.count !== 0;
        (o && !r || !o && r) && L.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && L.dispatch("TEARDOWN", n)
    }
});

function rt(e, t, n = () => ({
    containers: []
})) {
    let r = Ce(L),
        o = t ? r.get(t) : void 0,
        i = o ? o.count > 0 : !1;
    return C(() => {
        if (!(!t || !e)) return L.dispatch("PUSH", t, n), () => L.dispatch("POP", t, n)
    }, [e, t]), i
}

function It(e, t, n = () => [document.body]) {
    let r = ie(e, "scroll-lock");
    rt(r, t, o => {
        var i;
        return {
            containers: [...(i = o.containers) != null ? i : [], n]
        }
    })
}

function lt(e = 0) {
    let [t, n] = s.useState(e), r = s.useCallback(l => n(l), [t]), o = s.useCallback(l => n(d => d | l), [t]), i = s.useCallback(l => (t & l) === l, [t]), u = s.useCallback(l => n(d => d & ~l), [n]), a = s.useCallback(l => n(d => d ^ l), [n]);
    return {
        flags: t,
        setFlag: r,
        addFlag: o,
        hasFlag: i,
        removeFlag: u,
        toggleFlag: a
    }
}
var it = {},
    Ee, be;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Ee = process == null ? void 0 : it) == null ? void 0 : Ee.NODE_ENV) === "test" && typeof((be = Element == null ? void 0 : Element.prototype) == null ? void 0 : be.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), []
});
var ot = (e => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(ot || {});

function ut(e) {
    let t = {};
    for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
    return t
}

function at(e, t, n, r) {
    let [o, i] = s.useState(n), {
        hasFlag: u,
        addFlag: a,
        removeFlag: l
    } = lt(e && o ? 3 : 0), d = s.useRef(!1), c = s.useRef(!1), p = re();
    return C(() => {
        var v;
        if (e) {
            if (n && i(!0), !t) {
                n && a(3);
                return
            }
            return (v = r == null ? void 0 : r.start) == null || v.call(r, n), st(t, {
                inFlight: d,
                prepare() {
                    c.current ? c.current = !1 : c.current = d.current, d.current = !0, !c.current && (n ? (a(3), l(4)) : (a(4), l(2)))
                },
                run() {
                    c.current ? n ? (l(3), a(4)) : (l(4), a(3)) : n ? l(1) : a(1)
                },
                done() {
                    var f;
                    c.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (d.current = !1, l(7), n || i(!1), (f = r == null ? void 0 : r.end) == null || f.call(r, n))
                }
            })
        }
    }, [e, n, t, p]), e ? [o, {
        closed: u(1),
        enter: u(2),
        leave: u(4),
        transition: u(2) || u(4)
    }] : [n, {
        closed: void 0,
        enter: void 0,
        leave: void 0,
        transition: void 0
    }]
}

function st(e, {
    prepare: t,
    run: n,
    done: r,
    inFlight: o
}) {
    let i = A();
    return dt(e, {
        prepare: t,
        inFlight: o
    }), i.nextFrame(() => {
        n(), i.requestAnimationFrame(() => {
            i.add(ct(e, r))
        })
    }), i.dispose
}

function ct(e, t) {
    var n, r;
    let o = A();
    if (!e) return o.dispose;
    let i = !1;
    o.add(() => {
        i = !0
    });
    let u = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter(a => a instanceof CSSTransition)) != null ? r : [];
    return u.length === 0 ? (t(), o.dispose) : (Promise.allSettled(u.map(a => a.finished)).then(() => {
        i || t()
    }), o.dispose)
}

function dt(e, {
    inFlight: t,
    prepare: n
}) {
    if (t != null && t.current) {
        n();
        return
    }
    let r = e.style.transition;
    e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r
}
let _ = s.createContext(null);
_.displayName = "OpenClosedContext";
var O = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(O || {});

function Te() {
    return s.useContext(_)
}

function ft({
    value: e,
    children: t
}) {
    return E.createElement(_.Provider, {
        value: e
    }, t)
}

function Ut({
    children: e
}) {
    return E.createElement(_.Provider, {
        value: null
    }, e)
}

function pt(e) {
    let t = y(e),
        n = s.useRef(!1);
    s.useEffect(() => (n.current = !1, () => {
        n.current = !0, Ie(() => {
            n.current && t()
        })
    }), [t])
}

function ht() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in he ? (t => t.useSyncExternalStore)(he)(() => () => {}, () => !1, () => !e) : !1
}

function oe() {
    let e = ht(),
        [t, n] = s.useState(D.isHandoffComplete);
    return t && D.isHandoffComplete === !1 && n(!1), s.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), s.useEffect(() => D.handoff(), []), e ? !1 : t
}
let Re = s.createContext(!1);

function mt() {
    return s.useContext(Re)
}

function Yt(e) {
    return E.createElement(Re.Provider, {
        value: e.force
    }, e.children)
}

function vt(e) {
    let t = mt(),
        n = s.useContext(xe),
        r = Pe(e),
        [o, i] = s.useState(() => {
            var u;
            if (!t && n !== null) return (u = n.current) != null ? u : null;
            if (D.isServer) return null;
            let a = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (a) return a;
            if (r === null) return null;
            let l = r.createElement("div");
            return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l)
        });
    return s.useEffect(() => {
        o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o))
    }, [o, r]), s.useEffect(() => {
        t || n !== null && i(n.current)
    }, [n, i, t]), o
}
let Se = s.Fragment,
    gt = F(function(e, t) {
        let n = e,
            r = s.useRef(null),
            o = I(Ue(p => {
                r.current = p
            }), t),
            i = Pe(r),
            u = vt(r),
            [a] = s.useState(() => {
                var p;
                return D.isServer ? null : (p = i == null ? void 0 : i.createElement("div")) != null ? p : null
            }),
            l = s.useContext(te),
            d = oe();
        C(() => {
            !u || !a || u.contains(a) || (a.setAttribute("data-headlessui-portal", ""), u.appendChild(a))
        }, [u, a]), C(() => {
            if (a && l) return l.register(a)
        }, [l, a]), pt(() => {
            var p;
            !u || !a || (a instanceof Node && u.contains(a) && u.removeChild(a), u.childNodes.length <= 0 && ((p = u.parentElement) == null || p.removeChild(u)))
        });
        let c = U();
        return d ? !u || !a ? null : Xe.createPortal(c({
            ourProps: {
                ref: o
            },
            theirProps: n,
            slot: {},
            defaultTag: Se,
            name: "Portal"
        }), a) : null
    });

function Et(e, t) {
    let n = I(t),
        {
            enabled: r = !0,
            ...o
        } = e,
        i = U();
    return r ? E.createElement(gt, { ...o,
        ref: n
    }) : i({
        ourProps: {
            ref: n
        },
        theirProps: o,
        slot: {},
        defaultTag: Se,
        name: "Portal"
    })
}
let bt = s.Fragment,
    xe = s.createContext(null);

function wt(e, t) {
    let {
        target: n,
        ...r
    } = e, o = {
        ref: I(t)
    }, i = U();
    return E.createElement(xe.Provider, {
        value: n
    }, i({
        ourProps: o,
        theirProps: r,
        defaultTag: bt,
        name: "Popover.Group"
    }))
}
let te = s.createContext(null);

function Bt() {
    let e = s.useContext(te),
        t = s.useRef([]),
        n = y(i => (t.current.push(i), e && e.register(i), () => r(i))),
        r = y(i => {
            let u = t.current.indexOf(i);
            u !== -1 && t.current.splice(u, 1), e && e.unregister(i)
        }),
        o = s.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, s.useMemo(() => function({
        children: i
    }) {
        return E.createElement(te.Provider, {
            value: o
        }, i)
    }, [o])]
}
let yt = F(Et),
    Ct = F(wt),
    Vt = Object.assign(yt, {
        Group: Ct
    });

function $t() {
    let e = s.useRef(!1);
    return C(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Le(e) {
    var t;
    return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Ae) !== s.Fragment || E.Children.count(e.children) === 1
}
let z = s.createContext(null);
z.displayName = "TransitionContext";
var Pt = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(Pt || {});

function Tt() {
    let e = s.useContext(z);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function Rt() {
    let e = s.useContext(q);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let q = s.createContext(null);
q.displayName = "NestingContext";

function G(e) {
    return "children" in e ? G(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Oe(e, t) {
    let n = j(e),
        r = s.useRef([]),
        o = $t(),
        i = re(),
        u = y((f, h = x.Hidden) => {
            let g = r.current.findIndex(({
                el: m
            }) => m === f);
            g !== -1 && (we(h, {
                [x.Unmount]() {
                    r.current.splice(g, 1)
                },
                [x.Hidden]() {
                    r.current[g].state = "hidden"
                }
            }), i.microTask(() => {
                var m;
                !G(r) && o.current && ((m = n.current) == null || m.call(n))
            }))
        }),
        a = y(f => {
            let h = r.current.find(({
                el: g
            }) => g === f);
            return h ? h.state !== "visible" && (h.state = "visible") : r.current.push({
                el: f,
                state: "visible"
            }), () => u(f, x.Unmount)
        }),
        l = s.useRef([]),
        d = s.useRef(Promise.resolve()),
        c = s.useRef({
            enter: [],
            leave: []
        }),
        p = y((f, h, g) => {
            l.current.splice(0), t && (t.chains.current[h] = t.chains.current[h].filter(([m]) => m !== f)), t == null || t.chains.current[h].push([f, new Promise(m => {
                l.current.push(m)
            })]), t == null || t.chains.current[h].push([f, new Promise(m => {
                Promise.all(c.current[h].map(([R, M]) => M)).then(() => m())
            })]), h === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => g(h)) : g(h)
        }),
        v = y((f, h, g) => {
            Promise.all(c.current[h].splice(0).map(([m, R]) => R)).then(() => {
                var m;
                (m = l.current.shift()) == null || m()
            }).then(() => g(h))
        });
    return s.useMemo(() => ({
        children: r,
        register: a,
        unregister: u,
        onStart: p,
        onStop: v,
        wait: d,
        chains: c
    }), [a, u, r, p, v, c, d])
}
let Ae = s.Fragment,
    Fe = Ye.RenderStrategy;

function St(e, t) {
    var n, r;
    let {
        transition: o = !0,
        beforeEnter: i,
        afterEnter: u,
        beforeLeave: a,
        afterLeave: l,
        enter: d,
        enterFrom: c,
        enterTo: p,
        entered: v,
        leave: f,
        leaveFrom: h,
        leaveTo: g,
        ...m
    } = e, [R, M] = s.useState(null), b = s.useRef(null), P = Le(e), S = I(...P ? [b, t, M] : t === null ? [] : [t]), ue = (n = m.unmount) == null || n ? x.Unmount : x.Hidden, {
        show: $,
        appear: ae,
        initial: se
    } = Tt(), [T, K] = s.useState($ ? "visible" : "hidden"), ce = Rt(), {
        register: Y,
        unregister: B
    } = ce;
    C(() => Y(b), [Y, b]), C(() => {
        if (ue === x.Hidden && b.current) {
            if ($ && T !== "visible") {
                K("visible");
                return
            }
            return we(T, {
                hidden: () => B(b),
                visible: () => Y(b)
            })
        }
    }, [T, b, Y, B, $, ue]);
    let J = oe();
    C(() => {
        if (P && J && T === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [b, T, J, P]);
    let He = se && !ae,
        de = ae && $ && se,
        Q = s.useRef(!1),
        V = Oe(() => {
            Q.current || (K("hidden"), B(b))
        }, ce),
        fe = y(Z => {
            Q.current = !0;
            let X = Z ? "enter" : "leave";
            V.onStart(b, X, N => {
                N === "enter" ? i == null || i() : N === "leave" && (a == null || a())
            })
        }),
        pe = y(Z => {
            let X = Z ? "enter" : "leave";
            Q.current = !1, V.onStop(b, X, N => {
                N === "enter" ? u == null || u() : N === "leave" && (l == null || l())
            }), X === "leave" && !G(V) && (K("hidden"), B(b))
        });
    s.useEffect(() => {
        P && o || (fe($), pe($))
    }, [$, P, o]);
    let Ne = !(!o || !P || !J || He),
        [, w] = at(Ne, R, $, {
            start: fe,
            end: pe
        }),
        ke = Be({
            ref: S,
            className: ((r = Ve(m.className, de && d, de && c, w.enter && d, w.enter && w.closed && c, w.enter && !w.closed && p, w.leave && f, w.leave && !w.closed && h, w.leave && w.closed && g, !w.transition && $ && v)) == null ? void 0 : r.trim()) || void 0,
            ...ut(w)
        }),
        H = 0;
    T === "visible" && (H |= O.Open), T === "hidden" && (H |= O.Closed), w.enter && (H |= O.Opening), w.leave && (H |= O.Closing);
    let De = U();
    return E.createElement(q.Provider, {
        value: V
    }, E.createElement(ft, {
        value: H
    }, De({
        ourProps: ke,
        theirProps: m,
        defaultTag: Ae,
        features: Fe,
        visible: T === "visible",
        name: "Transition.Child"
    })))
}

function xt(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: o = !0,
        ...i
    } = e, u = s.useRef(null), a = Le(e), l = I(...a ? [u, t] : t === null ? [] : [t]);
    oe();
    let d = Te();
    if (n === void 0 && d !== null && (n = (d & O.Open) === O.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [c, p] = s.useState(n ? "visible" : "hidden"), v = Oe(() => {
        n || p("hidden")
    }), [f, h] = s.useState(!0), g = s.useRef([n]);
    C(() => {
        f !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n), h(!1))
    }, [g, n]);
    let m = s.useMemo(() => ({
        show: n,
        appear: r,
        initial: f
    }), [n, r, f]);
    C(() => {
        n ? p("visible") : !G(v) && u.current !== null && p("hidden")
    }, [n, v]);
    let R = {
            unmount: o
        },
        M = y(() => {
            var S;
            f && h(!1), (S = e.beforeEnter) == null || S.call(e)
        }),
        b = y(() => {
            var S;
            f && h(!1), (S = e.beforeLeave) == null || S.call(e)
        }),
        P = U();
    return E.createElement(q.Provider, {
        value: v
    }, E.createElement(z.Provider, {
        value: m
    }, P({
        ourProps: { ...R,
            as: s.Fragment,
            children: E.createElement(Me, {
                ref: l,
                ...R,
                ...i,
                beforeEnter: M,
                beforeLeave: b
            })
        },
        theirProps: {},
        defaultTag: s.Fragment,
        features: Fe,
        visible: c === "visible",
        name: "Transition"
    })))
}

function Lt(e, t) {
    let n = s.useContext(z) !== null,
        r = Te() !== null;
    return E.createElement(E.Fragment, null, !n && r ? E.createElement(ne, {
        ref: t,
        ...e
    }) : E.createElement(Me, {
        ref: t,
        ...e
    }))
}
let ne = F(xt),
    Me = F(St),
    Ot = F(Lt),
    Xt = Object.assign(ne, {
        Child: Ot,
        Root: ne
    });
export {
    Ot as F, Wt as R, Ct as X, ut as a, ie as b, ft as c, Qe as d, jt as e, It as f, pt as g, $t as h, O as i, Yt as j, oe as l, Dt as m, Pe as n, Vt as r, Ut as s, Bt as t, Te as u, Ht as w, at as x, kt as y, Xt as z
};