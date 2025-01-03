import {
    W as M,
    r as a
} from "./jsx-runtime-Dvja6b4T.js";
const U = typeof document < "u" ? M.useLayoutEffect : () => {};

function ue(e) {
    const n = a.useRef(null);
    return U(() => {
        n.current = e
    }, [e]), a.useCallback((...t) => {
        const r = n.current;
        return r == null ? void 0 : r(...t)
    }, [])
}
const w = e => {
        var n;
        return (n = e == null ? void 0 : e.ownerDocument) !== null && n !== void 0 ? n : document
    },
    h = e => e && "window" in e && e.window === e ? e : w(e).defaultView || window;

function ae(e) {
    var n;
    return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent)
}

function se(e) {
    var n;
    return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1
}

function V(e) {
    let n = null;
    return () => (n == null && (n = e()), n)
}
const le = V(function() {
        return se(/^Mac/i)
    }),
    ce = V(function() {
        return ae(/Android/i)
    });

function de(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : ce() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}
class fe {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented
    }
    preventDefault() {
        this.defaultPrevented = !0, this.nativeEvent.preventDefault()
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
    }
    isPropagationStopped() {
        return !1
    }
    persist() {}
    constructor(n, t) {
        this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = n
    }
}

function G(e) {
    let n = a.useRef({
        isFocused: !1,
        observer: null
    });
    U(() => {
        const r = n.current;
        return () => {
            r.observer && (r.observer.disconnect(), r.observer = null)
        }
    }, []);
    let t = ue(r => {
        e == null || e(r)
    });
    return a.useCallback(r => {
        if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
            n.current.isFocused = !0;
            let o = r.target,
                u = i => {
                    n.current.isFocused = !1, o.disabled && t(new fe("blur", i)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null)
                };
            o.addEventListener("focusout", u, {
                once: !0
            }), n.current.observer = new MutationObserver(() => {
                if (n.current.isFocused && o.disabled) {
                    var i;
                    (i = n.current.observer) === null || i === void 0 || i.disconnect();
                    let s = o === document.activeElement ? null : document.activeElement;
                    o.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: s
                    })), o.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: !0,
                        relatedTarget: s
                    }))
                }
            }), n.current.observer.observe(o, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }
    }, [t])
}

function ve(e) {
    let {
        isDisabled: n,
        onFocus: t,
        onBlur: r,
        onFocusChange: o
    } = e;
    const u = a.useCallback(l => {
            if (l.target === l.currentTarget) return r && r(l), o && o(!1), !0
        }, [r, o]),
        i = G(u),
        s = a.useCallback(l => {
            const d = w(l.target);
            l.target === l.currentTarget && d.activeElement === l.target && (t && t(l), o && o(!0), i(l))
        }, [o, t, i]);
    return {
        focusProps: {
            onFocus: !n && (t || o || r) ? s : void 0,
            onBlur: !n && (r || o) ? u : void 0
        }
    }
}
let T = null,
    C = new Set,
    y = new Map,
    $ = !1,
    N = !1;
const pe = {
    Tab: !0,
    Escape: !0
};

function W(e, n) {
    for (let t of C) t(e, n)
}

function be(e) {
    return !(e.metaKey || !le() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}

function S(e) {
    $ = !0, be(e) && (T = "keyboard", W("keyboard", e))
}

function m(e) {
    T = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && ($ = !0, W("pointer", e))
}

function q(e) {
    de(e) && ($ = !0, T = "virtual")
}

function X(e) {
    e.target === window || e.target === document || (!$ && !N && (T = "virtual", W("virtual", e)), $ = !1, N = !1)
}

function Y() {
    $ = !1, N = !0
}

function D(e) {
    if (typeof window > "u" || y.get(h(e))) return;
    const n = h(e),
        t = w(e);
    let r = n.HTMLElement.prototype.focus;
    n.HTMLElement.prototype.focus = function() {
        $ = !0, r.apply(this, arguments)
    }, t.addEventListener("keydown", S, !0), t.addEventListener("keyup", S, !0), t.addEventListener("click", q, !0), n.addEventListener("focus", X, !0), n.addEventListener("blur", Y, !1), typeof PointerEvent < "u" ? (t.addEventListener("pointerdown", m, !0), t.addEventListener("pointermove", m, !0), t.addEventListener("pointerup", m, !0)) : (t.addEventListener("mousedown", m, !0), t.addEventListener("mousemove", m, !0), t.addEventListener("mouseup", m, !0)), n.addEventListener("beforeunload", () => {
        z(e)
    }, {
        once: !0
    }), y.set(n, {
        focus: r
    })
}
const z = (e, n) => {
    const t = h(e),
        r = w(e);
    n && r.removeEventListener("DOMContentLoaded", n), y.has(t) && (t.HTMLElement.prototype.focus = y.get(t).focus, r.removeEventListener("keydown", S, !0), r.removeEventListener("keyup", S, !0), r.removeEventListener("click", q, !0), t.removeEventListener("focus", X, !0), t.removeEventListener("blur", Y, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", m, !0), r.removeEventListener("pointermove", m, !0), r.removeEventListener("pointerup", m, !0)) : (r.removeEventListener("mousedown", m, !0), r.removeEventListener("mousemove", m, !0), r.removeEventListener("mouseup", m, !0)), y.delete(t))
};

function me(e) {
    const n = w(e);
    let t;
    return n.readyState !== "loading" ? D(e) : (t = () => {
        D(e)
    }, n.addEventListener("DOMContentLoaded", t)), () => z(e, t)
}
typeof document < "u" && me();

function Z() {
    return T !== "pointer"
}
const ge = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function he(e, n, t) {
    var r;
    const o = typeof window < "u" ? h(t == null ? void 0 : t.target).HTMLInputElement : HTMLInputElement,
        u = typeof window < "u" ? h(t == null ? void 0 : t.target).HTMLTextAreaElement : HTMLTextAreaElement,
        i = typeof window < "u" ? h(t == null ? void 0 : t.target).HTMLElement : HTMLElement,
        s = typeof window < "u" ? h(t == null ? void 0 : t.target).KeyboardEvent : KeyboardEvent;
    return e = e || (t == null ? void 0 : t.target) instanceof o && !ge.has(t == null || (r = t.target) === null || r === void 0 ? void 0 : r.type) || (t == null ? void 0 : t.target) instanceof u || (t == null ? void 0 : t.target) instanceof i && (t == null ? void 0 : t.target.isContentEditable), !(e && n === "keyboard" && t instanceof s && !pe[t.key])
}

function $e(e, n, t) {
    D(), a.useEffect(() => {
        let r = (o, u) => {
            he(!!(t != null && t.isTextInput), o, u) && e(Z())
        };
        return C.add(r), () => {
            C.delete(r)
        }
    }, n)
}

function Ee(e) {
    let {
        isDisabled: n,
        onBlurWithin: t,
        onFocusWithin: r,
        onFocusWithinChange: o
    } = e, u = a.useRef({
        isFocusWithin: !1
    }), i = a.useCallback(d => {
        u.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (u.current.isFocusWithin = !1, t && t(d), o && o(!1))
    }, [t, o, u]), s = G(i), l = a.useCallback(d => {
        !u.current.isFocusWithin && document.activeElement === d.target && (r && r(d), o && o(!0), u.current.isFocusWithin = !0, s(d))
    }, [r, o, s]);
    return n ? {
        focusWithinProps: {
            onFocus: void 0,
            onBlur: void 0
        }
    } : {
        focusWithinProps: {
            onFocus: l,
            onBlur: i
        }
    }
}
let x = !1,
    H = 0;

function I() {
    x = !0, setTimeout(() => {
        x = !1
    }, 50)
}

function B(e) {
    e.pointerType === "touch" && I()
}

function ye() {
    if (!(typeof document > "u")) return typeof PointerEvent < "u" ? document.addEventListener("pointerup", B) : document.addEventListener("touchend", I), H++, () => {
        H--, !(H > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", B) : document.removeEventListener("touchend", I))
    }
}

function rt(e) {
    let {
        onHoverStart: n,
        onHoverChange: t,
        onHoverEnd: r,
        isDisabled: o
    } = e, [u, i] = a.useState(!1), s = a.useRef({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
    }).current;
    a.useEffect(ye, []);
    let {
        hoverProps: l,
        triggerHoverEnd: d
    } = a.useMemo(() => {
        let f = (c, b) => {
                if (s.pointerType = b, o || b === "touch" || s.isHovered || !c.currentTarget.contains(c.target)) return;
                s.isHovered = !0;
                let g = c.currentTarget;
                s.target = g, n && n({
                    type: "hoverstart",
                    target: g,
                    pointerType: b
                }), t && t(!0), i(!0)
            },
            p = (c, b) => {
                if (s.pointerType = "", s.target = null, b === "touch" || !s.isHovered) return;
                s.isHovered = !1;
                let g = c.currentTarget;
                r && r({
                    type: "hoverend",
                    target: g,
                    pointerType: b
                }), t && t(!1), i(!1)
            },
            v = {};
        return typeof PointerEvent < "u" ? (v.onPointerEnter = c => {
            x && c.pointerType === "mouse" || f(c, c.pointerType)
        }, v.onPointerLeave = c => {
            !o && c.currentTarget.contains(c.target) && p(c, c.pointerType)
        }) : (v.onTouchStart = () => {
            s.ignoreEmulatedMouseEvents = !0
        }, v.onMouseEnter = c => {
            !s.ignoreEmulatedMouseEvents && !x && f(c, "mouse"), s.ignoreEmulatedMouseEvents = !1
        }, v.onMouseLeave = c => {
            !o && c.currentTarget.contains(c.target) && p(c, "mouse")
        }), {
            hoverProps: v,
            triggerHoverEnd: p
        }
    }, [n, t, r, o, s]);
    return a.useEffect(() => {
        o && d({
            currentTarget: s.target
        }, s.pointerType)
    }, [o]), {
        hoverProps: l,
        isHovered: u
    }
}

function ot(e = {}) {
    let {
        autoFocus: n = !1,
        isTextInput: t,
        within: r
    } = e, o = a.useRef({
        isFocused: !1,
        isFocusVisible: n || Z()
    }), [u, i] = a.useState(!1), [s, l] = a.useState(() => o.current.isFocused && o.current.isFocusVisible), d = a.useCallback(() => l(o.current.isFocused && o.current.isFocusVisible), []), f = a.useCallback(c => {
        o.current.isFocused = c, i(c), d()
    }, [d]);
    $e(c => {
        o.current.isFocusVisible = c, d()
    }, [], {
        isTextInput: t
    });
    let {
        focusProps: p
    } = ve({
        isDisabled: r,
        onFocusChange: f
    }), {
        focusWithinProps: v
    } = Ee({
        isDisabled: !r,
        onFocusWithinChange: f
    });
    return {
        isFocused: u,
        isFocusVisible: s,
        focusProps: r ? v : p
    }
}
var we = Object.defineProperty,
    Te = (e, n, t) => n in e ? we(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t,
    k = (e, n, t) => (Te(e, typeof n != "symbol" ? n + "" : n, t), t);
let Fe = class {
        constructor() {
            k(this, "current", this.detect()), k(this, "handoffState", "pending"), k(this, "currentId", 0)
        }
        set(n) {
            this.current !== n && (this.handoffState = "pending", this.currentId = 0, this.current = n)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    J = new Fe;

function Q(e) {
    return J.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}

function Le(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(n => setTimeout(() => {
        throw n
    }))
}

function _() {
    let e = [],
        n = {
            addEventListener(t, r, o, u) {
                return t.addEventListener(r, o, u), n.add(() => t.removeEventListener(r, o, u))
            },
            requestAnimationFrame(...t) {
                let r = requestAnimationFrame(...t);
                return n.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...t) {
                return n.requestAnimationFrame(() => n.requestAnimationFrame(...t))
            },
            setTimeout(...t) {
                let r = setTimeout(...t);
                return n.add(() => clearTimeout(r))
            },
            microTask(...t) {
                let r = {
                    current: !0
                };
                return Le(() => {
                    r.current && t[0]()
                }), n.add(() => {
                    r.current = !1
                })
            },
            style(t, r, o) {
                let u = t.style.getPropertyValue(r);
                return Object.assign(t.style, {
                    [r]: o
                }), this.add(() => {
                    Object.assign(t.style, {
                        [r]: u
                    })
                })
            },
            group(t) {
                let r = _();
                return t(r), this.add(() => r.dispose())
            },
            add(t) {
                return e.includes(t) || e.push(t), () => {
                    let r = e.indexOf(t);
                    if (r >= 0)
                        for (let o of e.splice(r, 1)) o()
                }
            },
            dispose() {
                for (let t of e.splice(0)) t()
            }
        };
    return n
}

function ut() {
    let [e] = a.useState(_);
    return a.useEffect(() => () => e.dispose(), [e]), e
}
let ee = (e, n) => {
    J.isServer ? a.useEffect(e, n) : a.useLayoutEffect(e, n)
};

function Pe(e) {
    let n = a.useRef(e);
    return ee(() => {
        n.current = e
    }, [e]), n
}
let te = function(e) {
        let n = Pe(e);
        return M.useCallback((...t) => n.current(...t), [n])
    },
    Se = a.createContext(void 0);

function xe() {
    return a.useContext(Se)
}

function K(...e) {
    return Array.from(new Set(e.flatMap(n => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ")
}

function R(e, n, ...t) {
    if (e in n) {
        let o = n[e];
        return typeof o == "function" ? o(...t) : o
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, R), r
}
var Me = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Me || {}),
    Ae = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ae || {});

function He() {
    let e = Oe();
    return a.useCallback(n => ke({
        mergeRefs: e,
        ...n
    }), [e])
}

function ke({
    ourProps: e,
    theirProps: n,
    slot: t,
    defaultTag: r,
    features: o,
    visible: u = !0,
    name: i,
    mergeRefs: s
}) {
    s = s ? ? Ce;
    let l = ne(n, e);
    if (u) return P(l, t, r, i, s);
    let d = o ? ? 0;
    if (d & 2) {
        let {
            static: f = !1,
            ...p
        } = l;
        if (f) return P(p, t, r, i, s)
    }
    if (d & 1) {
        let {
            unmount: f = !0,
            ...p
        } = l;
        return R(f ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return P({ ...p,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, t, r, i, s)
            }
        })
    }
    return P(l, t, r, i, s)
}

function P(e, n = {}, t, r, o) {
    let {
        as: u = t,
        children: i,
        refName: s = "ref",
        ...l
    } = O(e, ["unmount", "static"]), d = e.ref !== void 0 ? {
        [s]: e.ref
    } : {}, f = typeof i == "function" ? i(n) : i;
    "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(n)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
    let p = {};
    if (n) {
        let v = !1,
            c = [];
        for (let [b, g] of Object.entries(n)) typeof g == "boolean" && (v = !0), g === !0 && c.push(b.replace(/([A-Z])/g, F => `-${F.toLowerCase()}`));
        if (v) {
            p["data-headlessui-state"] = c.join(" ");
            for (let b of c) p[`data-${b}`] = ""
        }
    }
    if (u === a.Fragment && (Object.keys(E(l)).length > 0 || Object.keys(E(p)).length > 0))
        if (!a.isValidElement(f) || Array.isArray(f) && f.length > 1) {
            if (Object.keys(E(l)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(E(l)).concat(Object.keys(E(p))).map(v => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(v => `  - ${v}`).join(`
`)].join(`
`))
        } else {
            let v = f.props,
                c = v == null ? void 0 : v.className,
                b = typeof c == "function" ? (...L) => K(c(...L), l.className) : K(c, l.className),
                g = b ? {
                    className: b
                } : {},
                F = ne(f.props, E(O(l, ["ref"])));
            for (let L in p) L in F && delete p[L];
            return a.cloneElement(f, Object.assign({}, F, p, d, {
                ref: o(De(f), d.ref)
            }, g))
        }
    return a.createElement(u, Object.assign({}, O(l, ["ref"]), u !== a.Fragment && d, u !== a.Fragment && p), f)
}

function Oe() {
    let e = a.useRef([]),
        n = a.useCallback(t => {
            for (let r of e.current) r != null && (typeof r == "function" ? r(t) : r.current = t)
        }, []);
    return (...t) => {
        if (!t.every(r => r == null)) return e.current = t, n
    }
}

function Ce(...e) {
    return e.every(n => n == null) ? void 0 : n => {
        for (let t of e) t != null && (typeof t == "function" ? t(n) : t.current = n)
    }
}

function ne(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let n = {},
        t = {};
    for (let r of e)
        for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (t[o] != null || (t[o] = []), t[o].push(r[o])) : n[o] = r[o];
    if (n.disabled || n["aria-disabled"])
        for (let r in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (t[r] = [o => {
            var u;
            return (u = o == null ? void 0 : o.preventDefault) == null ? void 0 : u.call(o)
        }]);
    for (let r in t) Object.assign(n, {
        [r](o, ...u) {
            let i = t[r];
            for (let s of i) {
                if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
                s(o, ...u)
            }
        }
    });
    return n
}

function at(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let n = {},
        t = {};
    for (let r of e)
        for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (t[o] != null || (t[o] = []), t[o].push(r[o])) : n[o] = r[o];
    for (let r in t) Object.assign(n, {
        [r](...o) {
            let u = t[r];
            for (let i of u) i == null || i(...o)
        }
    });
    return n
}

function Ne(e) {
    var n;
    return Object.assign(a.forwardRef(e), {
        displayName: (n = e.displayName) != null ? n : e.name
    })
}

function E(e) {
    let n = Object.assign({}, e);
    for (let t in n) n[t] === void 0 && delete n[t];
    return n
}

function O(e, n = []) {
    let t = Object.assign({}, e);
    for (let r of n) r in t && delete t[r];
    return t
}

function De(e) {
    return M.version.split(".")[0] >= "19" ? e.props.ref : e.ref
}

function st(e) {
    let n = e.parentElement,
        t = null;
    for (; n && !(n instanceof HTMLFieldSetElement);) n instanceof HTMLLegendElement && (t = n), n = n.parentElement;
    let r = (n == null ? void 0 : n.getAttribute("disabled")) === "";
    return r && Ie(t) ? !1 : r
}

function Ie(e) {
    if (!e) return !1;
    let n = e.previousElementSibling;
    for (; n !== null;) {
        if (n instanceof HTMLLegendElement) return !1;
        n = n.previousElementSibling
    }
    return !0
}
let re = Symbol();

function lt(e, n = !0) {
    return Object.assign(e, {
        [re]: n
    })
}

function je(...e) {
    let n = a.useRef(e);
    a.useEffect(() => {
        n.current = e
    }, [e]);
    let t = te(r => {
        for (let o of n.current) o != null && (typeof o == "function" ? o(r) : o.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[re])) ? void 0 : t
}
let A = a.createContext(null);
A.displayName = "DescriptionContext";

function oe() {
    let e = a.useContext(A);
    if (e === null) {
        let n = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(n, oe), n
    }
    return e
}

function ct() {
    var e, n;
    return (n = (e = a.useContext(A)) == null ? void 0 : e.value) != null ? n : void 0
}

function dt() {
    let [e, n] = a.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, a.useMemo(() => function(t) {
        let r = te(u => (n(i => [...i, u]), () => n(i => {
                let s = i.slice(),
                    l = s.indexOf(u);
                return l !== -1 && s.splice(l, 1), s
            }))),
            o = a.useMemo(() => ({
                register: r,
                slot: t.slot,
                name: t.name,
                props: t.props,
                value: t.value
            }), [r, t.slot, t.name, t.props, t.value]);
        return M.createElement(A.Provider, {
            value: o
        }, t.children)
    }, [n])]
}
let We = "p";

function _e(e, n) {
    let t = a.useId(),
        r = xe(),
        {
            id: o = `headlessui-description-${t}`,
            ...u
        } = e,
        i = oe(),
        s = je(n);
    ee(() => i.register(o), [o, i.register]);
    let l = r || !1,
        d = a.useMemo(() => ({ ...i.slot,
            disabled: l
        }), [i.slot, l]),
        f = {
            ref: s,
            ...i.props,
            id: o
        };
    return He()({
        ourProps: f,
        theirProps: u,
        slot: d,
        defaultTag: We,
        name: i.name || "Description"
    })
}
let Re = Ne(_e),
    ft = Object.assign(Re, {});
var Be = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Be || {});
let j = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(","),
    Ke = ["[data-autofocus]"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var Ue = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Ue || {}),
    Ve = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ve || {}),
    Ge = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ge || {});

function ie(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(j)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
}

function qe(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Ke)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Xe = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Xe || {});

function Ye(e, n = 0) {
    var t;
    return e === ((t = Q(e)) == null ? void 0 : t.body) ? !1 : R(n, {
        0() {
            return e.matches(j)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(j)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}

function vt(e) {
    let n = Q(e);
    _().nextFrame(() => {
        n && !Ye(n.activeElement, 0) && Ze(e)
    })
}
var ze = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ze || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function Ze(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Je = ["textarea", "input"].join(",");

function Qe(e) {
    var n, t;
    return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, Je)) != null ? t : !1
}

function et(e, n = t => t) {
    return e.slice().sort((t, r) => {
        let o = n(t),
            u = n(r);
        if (o === null || u === null) return 0;
        let i = o.compareDocumentPosition(u);
        return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function pt(e, n) {
    return tt(ie(), n, {
        relativeTo: e
    })
}

function tt(e, n, {
    sorted: t = !0,
    relativeTo: r = null,
    skipElements: o = []
} = {}) {
    let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        i = Array.isArray(e) ? t ? et(e) : e : n & 64 ? qe(e) : ie(e);
    o.length > 0 && i.length > 1 && (i = i.filter(c => !o.some(b => b != null && "current" in b ? (b == null ? void 0 : b.current) === c : b === c))), r = r ? ? u.activeElement;
    let s = (() => {
            if (n & 5) return 1;
            if (n & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        l = (() => {
            if (n & 1) return 0;
            if (n & 2) return Math.max(0, i.indexOf(r)) - 1;
            if (n & 4) return Math.max(0, i.indexOf(r)) + 1;
            if (n & 8) return i.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        d = n & 32 ? {
            preventScroll: !0
        } : {},
        f = 0,
        p = i.length,
        v;
    do {
        if (f >= p || f + p <= 0) return 0;
        let c = l + f;
        if (n & 16) c = (c + p) % p;
        else {
            if (c < 0) return 3;
            if (c >= p) return 1
        }
        v = i[c], v == null || v.focus(d), f += s
    } while (v !== u.activeElement);
    return n & 6 && Qe(v) && v.select(), 2
}
export {
    ot as $, Ye as A, Ue as F, vt as G, ft as H, Ze as I, Ne as K, He as L, Me as O, tt as P, lt as T, ct as U, at as _, rt as a, ie as b, Be as c, Q as d, Ve as e, xe as f, et as g, Xe as h, j as i, _ as j, pt as k, J as l, E as m, ee as n, te as o, ut as p, Ae as q, st as r, Pe as s, Le as t, R as u, K as v, dt as w, je as y
};