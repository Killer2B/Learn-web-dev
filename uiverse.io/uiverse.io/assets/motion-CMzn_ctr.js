import {
    r as P,
    W as Hi,
    j as fe
} from "./jsx-runtime-Dvja6b4T.js";
import {
    K as zi,
    o as gs,
    f as Xi,
    y as Yi,
    n as qi,
    L as Zi
} from "./focus-management-BQHAzeQ5.js";
let Qi = P.createContext(void 0);

function Ji() {
    return P.useContext(Qi)
}
let Wt = P.createContext(null);
Wt.displayName = "LabelContext";

function ys() {
    let t = P.useContext(Wt);
    if (t === null) {
        let e = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(e, ys), e
    }
    return t
}

function to(t) {
    var e, n, s;
    let i = (n = (e = P.useContext(Wt)) == null ? void 0 : e.value) != null ? n : void 0;
    return ((s = void 0) != null ? s : 0) > 0 ? [i, ...t].filter(Boolean).join(" ") : i
}

function Mu({
    inherit: t = !1
} = {}) {
    let e = to(),
        [n, s] = P.useState([]),
        i = t ? [e, ...n].filter(Boolean) : n;
    return [i.length > 0 ? i.join(" ") : void 0, P.useMemo(() => function(r) {
        let o = gs(l => (s(u => [...u, l]), () => s(u => {
                let c = u.slice(),
                    h = c.indexOf(l);
                return h !== -1 && c.splice(h, 1), c
            }))),
            a = P.useMemo(() => ({
                register: o,
                slot: r.slot,
                name: r.name,
                props: r.props,
                value: r.value
            }), [o, r.slot, r.name, r.props, r.value]);
        return Hi.createElement(Wt.Provider, {
            value: a
        }, r.children)
    }, [s])]
}
let eo = "label";

function no(t, e) {
    var n;
    let s = P.useId(),
        i = ys(),
        r = Ji(),
        o = Xi(),
        {
            id: a = `headlessui-label-${s}`,
            htmlFor: l = r ? ? ((n = i.props) == null ? void 0 : n.htmlFor),
            passive: u = !1,
            ...c
        } = t,
        h = Yi(e);
    qi(() => i.register(a), [a, i.register]);
    let f = gs(x => {
            let y = x.currentTarget;
            if (y instanceof HTMLLabelElement && x.preventDefault(), i.props && "onClick" in i.props && typeof i.props.onClick == "function" && i.props.onClick(x), y instanceof HTMLLabelElement) {
                let g = document.getElementById(y.htmlFor);
                if (g) {
                    let v = g.getAttribute("disabled");
                    if (v === "true" || v === "") return;
                    let S = g.getAttribute("aria-disabled");
                    if (S === "true" || S === "") return;
                    (g instanceof HTMLInputElement && (g.type === "radio" || g.type === "checkbox") || g.role === "radio" || g.role === "checkbox" || g.role === "switch") && g.click(), g.focus({
                        preventScroll: !0
                    })
                }
            }
        }),
        d = o || !1,
        p = P.useMemo(() => ({ ...i.slot,
            disabled: d
        }), [i.slot, d]),
        m = {
            ref: h,
            ...i.props,
            id: a,
            htmlFor: l,
            onClick: f
        };
    return u && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in c && delete c.onClick), Zi()({
        ourProps: m,
        theirProps: c,
        slot: p,
        defaultTag: l ? eo : "div",
        name: i.name || "Label"
    })
}
let so = zi(no),
    Ru = Object.assign(so, {});
const vs = P.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    }),
    _t = P.createContext({}),
    De = P.createContext(null),
    Me = typeof window < "u",
    io = Me ? P.useLayoutEffect : P.useEffect,
    xs = P.createContext({
        strict: !1
    }),
    Gt = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    oo = "framerAppearId",
    Ts = "data-" + Gt(oo),
    ro = {
        skipAnimations: !1,
        useManualTiming: !1
    };

function ao(t) {
    let e = new Set,
        n = new Set,
        s = !1,
        i = !1;
    const r = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        r.has(u) && (l.schedule(u), t()), u(o)
    }
    const l = {
        schedule: (u, c = !1, h = !1) => {
            const d = h && s ? e : n;
            return c && r.add(u), d.has(u) || d.add(u), u
        },
        cancel: u => {
            n.delete(u), r.delete(u)
        },
        process: u => {
            if (o = u, s) {
                i = !0;
                return
            }
            s = !0, [e, n] = [n, e], n.clear(), e.forEach(a), s = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const Rt = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    lo = 40;

function Ps(t, e) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        r = () => n = !0,
        o = Rt.reduce((y, g) => (y[g] = ao(r), y), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: h,
            postRender: f
        } = o,
        d = () => {
            const y = performance.now();
            n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, lo), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), i.isProcessing = !1, n && e && (s = !1, t(d))
        },
        p = () => {
            n = !0, s = !0, i.isProcessing || t(d)
        };
    return {
        schedule: Rt.reduce((y, g) => {
            const v = o[g];
            return y[g] = (S, b = !1, D = !1) => (n || p(), v.schedule(S, b, D)), y
        }, {}),
        cancel: y => {
            for (let g = 0; g < Rt.length; g++) o[Rt[g]].cancel(y)
        },
        state: i,
        steps: o
    }
}
const {
    schedule: Re,
    cancel: Eu
} = Ps(queueMicrotask, !1);

function rt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const Ss = P.createContext({});
let en = !1;

function uo(t, e, n, s, i) {
    const {
        visualElement: r
    } = P.useContext(_t), o = P.useContext(xs), a = P.useContext(De), l = P.useContext(vs).reducedMotion, u = P.useRef();
    s = s || o.renderer, !u.current && s && (u.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const c = u.current,
        h = P.useContext(Ss);
    c && !c.projection && i && (c.type === "html" || c.type === "svg") && ho(u.current, n, i, h), P.useInsertionEffect(() => {
        c && c.update(n, a)
    });
    const f = P.useRef(!!(n[Ts] && !window.HandoffComplete));
    return io(() => {
        c && (c.updateFeatures(), Re.render(c.render), f.current && c.animationState && c.animationState.animateChanges())
    }), P.useEffect(() => {
        c && (!f.current && c.animationState && c.animationState.animateChanges(), f.current && (f.current = !1, en || (en = !0, queueMicrotask(co))))
    }), c
}

function co() {
    window.HandoffComplete = !0
}

function ho(t, e, n, s) {
    const {
        layoutId: i,
        layout: r,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : bs(t.parent)), t.projection.setOptions({
        layoutId: i,
        layout: r,
        alwaysMeasureLayout: !!o || a && rt(a),
        visualElement: t,
        animationType: typeof r == "string" ? r : "both",
        initialPromotionConfig: s,
        layoutScroll: l,
        layoutRoot: u
    })
}

function bs(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : bs(t.parent)
}

function fo(t, e, n) {
    return P.useCallback(s => {
        s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : rt(n) && (n.current = s))
    }, [e])
}

function Pt(t) {
    return typeof t == "string" || Array.isArray(t)
}

function St(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Ee = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Le = ["initial", ...Ee];

function $t(t) {
    return St(t.animate) || Le.some(e => Pt(t[e]))
}

function As(t) {
    return !!($t(t) || t.variants)
}

function po(t, e) {
    if ($t(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || Pt(n) ? n : void 0,
            animate: Pt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function mo(t) {
    const {
        initial: e,
        animate: n
    } = po(t, P.useContext(_t));
    return P.useMemo(() => ({
        initial: e,
        animate: n
    }), [nn(e), nn(n)])
}

function nn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const sn = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ht = {};
for (const t in sn) ht[t] = {
    isEnabled: e => sn[t].some(n => !!e[n])
};

function go(t) {
    for (const e in t) ht[e] = { ...ht[e],
        ...t[e]
    }
}
const Vs = P.createContext({}),
    yo = Symbol.for("motionComponentSymbol"),
    L = t => t;
let de = L;

function vo({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    t && go(t);

    function r(a, l) {
        let u;
        const c = { ...P.useContext(vs),
                ...a,
                layoutId: xo(a)
            },
            {
                isStatic: h
            } = c,
            f = mo(a),
            d = s(a, h);
        if (!h && Me) {
            To();
            const p = Po(c);
            u = p.MeasureLayout, f.visualElement = uo(i, d, c, e, p.ProjectionNode)
        }
        return fe.jsxs(_t.Provider, {
            value: f,
            children: [u && f.visualElement ? fe.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(i, a, fo(d, f.visualElement, l), d, h, f.visualElement)]
        })
    }
    const o = P.forwardRef(r);
    return o[yo] = i, o
}

function xo({
    layoutId: t
}) {
    const e = P.useContext(Vs).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function To(t, e) {
    P.useContext(xs).strict
}

function Po(t) {
    const {
        drag: e,
        layout: n
    } = ht;
    if (!e && !n) return {};
    const s = { ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}

function So(t) {
    function e(s, i = {}) {
        return vo(t(s, i))
    }
    if (typeof Proxy > "u") return e;
    const n = new Map;
    return new Proxy(e, {
        get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
    })
}
const bo = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Fe(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(bo.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
const jt = {};

function Ao(t) {
    Object.assign(jt, t)
}
const wt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Q = new Set(wt);

function ws(t, {
    layout: e,
    layoutId: n
}) {
    return Q.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!jt[t] || t === "opacity")
}
const E = t => !!(t && t.getVelocity),
    Vo = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    wo = wt.length;

function Co(t, e, n) {
    let s = "";
    for (let i = 0; i < wo; i++) {
        const r = wt[i];
        if (t[r] !== void 0) {
            const o = Vo[r] || r;
            s += `${o}(${t[r]}) `
        }
    }
    return s = s.trim(), n ? s = n(t, e ? "" : s) : e && (s = "none"), s
}
const Cs = t => e => typeof e == "string" && e.startsWith(t),
    Ds = Cs("--"),
    Do = Cs("var(--"),
    ke = t => Do(t) ? Mo.test(t.split("/*")[0].trim()) : !1,
    Mo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Ro = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    q = (t, e, n) => n > e ? e : n < t ? t : n,
    dt = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    yt = { ...dt,
        transform: t => q(0, 1, t)
    },
    Et = { ...dt,
        default: 1
    },
    vt = t => Math.round(t * 1e5) / 1e5,
    Be = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    Eo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    Lo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

function Ct(t) {
    return typeof t == "string"
}

function Fo(t) {
    return t == null
}
const Dt = t => ({
        test: e => Ct(e) && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    z = Dt("deg"),
    N = Dt("%"),
    T = Dt("px"),
    ko = Dt("vh"),
    Bo = Dt("vw"),
    on = { ...N,
        parse: t => N.parse(t) / 100,
        transform: t => N.transform(t * 100)
    },
    rn = { ...dt,
        transform: Math.round
    },
    Ms = {
        borderWidth: T,
        borderTopWidth: T,
        borderRightWidth: T,
        borderBottomWidth: T,
        borderLeftWidth: T,
        borderRadius: T,
        radius: T,
        borderTopLeftRadius: T,
        borderTopRightRadius: T,
        borderBottomRightRadius: T,
        borderBottomLeftRadius: T,
        width: T,
        maxWidth: T,
        height: T,
        maxHeight: T,
        size: T,
        top: T,
        right: T,
        bottom: T,
        left: T,
        padding: T,
        paddingTop: T,
        paddingRight: T,
        paddingBottom: T,
        paddingLeft: T,
        margin: T,
        marginTop: T,
        marginRight: T,
        marginBottom: T,
        marginLeft: T,
        rotate: z,
        rotateX: z,
        rotateY: z,
        rotateZ: z,
        scale: Et,
        scaleX: Et,
        scaleY: Et,
        scaleZ: Et,
        skew: z,
        skewX: z,
        skewY: z,
        distance: T,
        translateX: T,
        translateY: T,
        translateZ: T,
        x: T,
        y: T,
        z: T,
        perspective: T,
        transformPerspective: T,
        opacity: yt,
        originX: on,
        originY: on,
        originZ: T,
        zIndex: rn,
        backgroundPositionX: T,
        backgroundPositionY: T,
        fillOpacity: yt,
        strokeOpacity: yt,
        numOctaves: rn
    };

function je(t, e, n) {
    const {
        style: s,
        vars: i,
        transform: r,
        transformOrigin: o
    } = t;
    let a = !1,
        l = !1,
        u = !0;
    for (const c in e) {
        const h = e[c];
        if (Ds(c)) {
            i[c] = h;
            continue
        }
        const f = Ms[c],
            d = Ro(h, f);
        if (Q.has(c)) {
            if (a = !0, r[c] = d, !u) continue;
            h !== (f.default || 0) && (u = !1)
        } else c.startsWith("origin") ? (l = !0, o[c] = d) : s[c] = d
    }
    if (e.transform || (a || n ? s.transform = Co(t.transform, u, n) : s.transform && (s.transform = "none")), l) {
        const {
            originX: c = "50%",
            originY: h = "50%",
            originZ: f = 0
        } = o;
        s.transformOrigin = `${c} ${h} ${f}`
    }
}
const Oe = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Rs(t, e, n) {
    for (const s in e) !E(e[s]) && !ws(s, n) && (t[s] = e[s])
}

function jo({
    transformTemplate: t
}, e) {
    return P.useMemo(() => {
        const n = Oe();
        return je(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function Oo(t, e) {
    const n = t.style || {},
        s = {};
    return Rs(s, n, t), Object.assign(s, jo(t, e)), s
}

function Io(t, e) {
    const n = {},
        s = Oo(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
}
const No = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Ot(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || No.has(t)
}
let Es = t => !Ot(t);

function Uo(t) {
    t && (Es = e => e.startsWith("on") ? !Ot(e) : t(e))
}
try {
    Uo(require("@emotion/is-prop-valid").default)
} catch {}

function Ko(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Es(i) || n === !0 && Ot(i) || !e && !Ot(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}

function an(t, e, n) {
    return typeof t == "string" ? t : T.transform(e + n * t)
}

function Wo(t, e, n) {
    const s = an(e, t.x, t.width),
        i = an(n, t.y, t.height);
    return `${s} ${i}`
}
const _o = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Go = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function $o(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const r = i ? _o : Go;
    t[r.offset] = T.transform(-s);
    const o = T.transform(e),
        a = T.transform(n);
    t[r.array] = `${o} ${a}`
}

function Ie(t, {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: r,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, h) {
    if (je(t, u, h), c) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: f,
        style: d,
        dimensions: p
    } = t;
    f.transform && (p && (d.transform = f.transform), delete f.transform), p && (i !== void 0 || r !== void 0 || d.transform) && (d.transformOrigin = Wo(p, i !== void 0 ? i : .5, r !== void 0 ? r : .5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), o !== void 0 && $o(f, o, a, l, !1)
}
const Ls = () => ({ ...Oe(),
        attrs: {}
    }),
    Ne = t => typeof t == "string" && t.toLowerCase() === "svg";

function Ho(t, e, n, s) {
    const i = P.useMemo(() => {
        const r = Ls();
        return Ie(r, e, Ne(s), t.transformTemplate), { ...r.attrs,
            style: { ...r.style
            }
        }
    }, [e]);
    if (t.style) {
        const r = {};
        Rs(r, t.style, t), i.style = { ...r,
            ...i.style
        }
    }
    return i
}

function zo(t = !1) {
    return (n, s, i, {
        latestValues: r
    }, o) => {
        const l = (Fe(n) ? Ho : Io)(s, r, o, n),
            u = Ko(s, typeof n == "string", t),
            c = n !== P.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: h
            } = s,
            f = P.useMemo(() => E(h) ? h.get() : h, [h]);
        return P.createElement(n, { ...c,
            children: f
        })
    }
}

function Fs(t, {
    style: e,
    vars: n
}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const r in n) t.style.setProperty(r, n[r])
}
const ks = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Bs(t, e, n, s) {
    Fs(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(ks.has(i) ? i : Gt(i), e.attrs[i])
}

function Ue(t, e, n) {
    var s;
    const {
        style: i
    } = t, r = {};
    for (const o in i)(E(i[o]) || e.style && E(e.style[o]) || ws(o, t) || ((s = n == null ? void 0 : n.getValue(o)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (r[o] = i[o]);
    return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), r
}

function js(t, e, n) {
    const s = Ue(t, e, n);
    for (const i in t)
        if (E(t[i]) || E(e[i])) {
            const r = wt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[r] = t[i]
        }
    return s
}

function ln(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((n, s) => {
        e[0][s] = n.get(), e[1][s] = n.getVelocity()
    }), e
}

function Ke(t, e, n, s) {
    if (typeof e == "function") {
        const [i, r] = ln(s);
        e = e(n !== void 0 ? n : t.custom, i, r)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [i, r] = ln(s);
        e = e(n !== void 0 ? n : t.custom, i, r)
    }
    return e
}

function Xo(t) {
    const e = P.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const pe = t => Array.isArray(t),
    Yo = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    qo = t => pe(t) ? t[t.length - 1] || 0 : t;

function Ft(t) {
    const e = E(t) ? t.get() : t;
    return Yo(e) ? e.toValue() : e
}
const Os = new Set(["opacity", "clipPath", "filter", "transform"]);

function Is(t) {
    if (Q.has(t)) return "transform";
    if (Os.has(t)) return Gt(t)
}

function Ht(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function zt(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

function Zo({
    applyWillChange: t = !1,
    scrapeMotionValuesFromProps: e,
    createRenderState: n,
    onMount: s
}, i, r, o, a) {
    const l = {
        latestValues: Jo(i, r, o, a ? !1 : t, e),
        renderState: n()
    };
    return s && (l.mount = u => s(i, u, l)), l
}
const Ns = t => (e, n) => {
    const s = P.useContext(_t),
        i = P.useContext(De),
        r = () => Zo(t, e, s, i, n);
    return n ? r() : Xo(r)
};

function Qo(t, e) {
    const n = Is(e);
    n && Ht(t, n)
}

function un(t, e, n) {
    const s = Array.isArray(e) ? e : [e];
    for (let i = 0; i < s.length; i++) {
        const r = Ke(t, s[i]);
        if (r) {
            const {
                transitionEnd: o,
                transition: a,
                ...l
            } = r;
            n(l, o)
        }
    }
}

function Jo(t, e, n, s, i) {
    var r;
    const o = {},
        a = [],
        l = s && ((r = t.style) === null || r === void 0 ? void 0 : r.willChange) === void 0,
        u = i(t, {});
    for (const x in u) o[x] = Ft(u[x]);
    let {
        initial: c,
        animate: h
    } = t;
    const f = $t(t),
        d = As(t);
    e && d && !f && t.inherit !== !1 && (c === void 0 && (c = e.initial), h === void 0 && (h = e.animate));
    let p = n ? n.initial === !1 : !1;
    p = p || c === !1;
    const m = p ? h : c;
    return m && typeof m != "boolean" && !St(m) && un(t, m, (x, y) => {
        for (const g in x) {
            let v = x[g];
            if (Array.isArray(v)) {
                const S = p ? v.length - 1 : 0;
                v = v[S]
            }
            v !== null && (o[g] = v)
        }
        for (const g in y) o[g] = y[g]
    }), l && (h && c !== !1 && !St(h) && un(t, h, x => {
        for (const y in x) Qo(a, y)
    }), a.length && (o.willChange = a.join(","))), o
}
const {
    schedule: V,
    cancel: $,
    state: M,
    steps: Jt
} = Ps(typeof requestAnimationFrame < "u" ? requestAnimationFrame : L, !0), tr = {
    useVisualState: Ns({
        scrapeMotionValuesFromProps: js,
        createRenderState: Ls,
        onMount: (t, e, {
            renderState: n,
            latestValues: s
        }) => {
            V.read(() => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), V.render(() => {
                Ie(n, s, Ne(e.tagName), t.transformTemplate), Bs(e, n)
            })
        }
    })
}, er = {
    useVisualState: Ns({
        applyWillChange: !0,
        scrapeMotionValuesFromProps: Ue,
        createRenderState: Oe
    })
};

function nr(t, {
    forwardMotionProps: e = !1
}, n, s) {
    return { ...Fe(t) ? tr : er,
        preloadedFeatures: n,
        useRender: zo(e),
        createVisualElement: s,
        Component: t
    }
}

function K(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}
const Us = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

function Xt(t, e = "page") {
    return {
        point: {
            x: t[`${e}X`],
            y: t[`${e}Y`]
        }
    }
}
const sr = t => e => Us(e) && t(e, Xt(e));

function W(t, e, n, s) {
    return K(t, e, sr(n), s)
}
const ir = (t, e) => n => e(t(n)),
    _ = (...t) => t.reduce(ir);

function Ks(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        };
        return e === null ? (e = t, n) : !1
    }
}
const cn = Ks("dragHorizontal"),
    hn = Ks("dragVertical");

function Ws(t) {
    let e = !1;
    if (t === "y") e = hn();
    else if (t === "x") e = cn();
    else {
        const n = cn(),
            s = hn();
        n && s ? e = () => {
            n(), s()
        } : (n && n(), s && s())
    }
    return e
}

function _s() {
    const t = Ws(!0);
    return t ? (t(), !1) : !0
}
class J {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}

function fn(t, e) {
    const n = e ? "pointerenter" : "pointerleave",
        s = e ? "onHoverStart" : "onHoverEnd",
        i = (r, o) => {
            if (r.pointerType === "touch" || _s()) return;
            const a = t.getProps();
            t.animationState && a.whileHover && t.animationState.setActive("whileHover", e);
            const l = a[s];
            l && V.postRender(() => l(r, o))
        };
    return W(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class or extends J {
    mount() {
        this.unmount = _(fn(this.node, !0), fn(this.node, !1))
    }
    unmount() {}
}
class rr extends J {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = _(K(this.node.current, "focus", () => this.onFocus()), K(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Gs = (t, e) => e ? t === e ? !0 : Gs(t, e.parentElement) : !1;

function te(t, e) {
    if (!e) return;
    const n = new PointerEvent("pointer" + t);
    e(n, Xt(n))
}
class ar extends J {
    constructor() {
        super(...arguments), this.removeStartListeners = L, this.removeEndListeners = L, this.removeAccessibleListeners = L, this.startPointerPress = (e, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const s = this.node.getProps(),
                r = W(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: h
                    } = this.node.getProps(), f = !h && !Gs(this.node.current, a.target) ? c : u;
                    f && V.update(() => f(a, l))
                }, {
                    passive: !(s.onTap || s.onPointerUp)
                }),
                o = W(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(s.onTapCancel || s.onPointerCancel)
                });
            this.removeEndListeners = _(r, o), this.startPress(e, n)
        }, this.startAccessiblePress = () => {
            const e = r => {
                    if (r.key !== "Enter" || this.isPressing) return;
                    const o = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || te("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && V.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = K(this.node.current, "keyup", o), te("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = K(this.node.current, "keydown", e),
                s = () => {
                    this.isPressing && te("cancel", (r, o) => this.cancelPress(r, o))
                },
                i = K(this.node.current, "blur", s);
            this.removeAccessibleListeners = _(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {
            onTapStart: s,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && V.postRender(() => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !_s()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: s
        } = this.node.getProps();
        s && V.postRender(() => s(e, n))
    }
    mount() {
        const e = this.node.getProps(),
            n = W(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(e.onTapStart || e.onPointerStart)
            }),
            s = K(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = _(n, s)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const me = new WeakMap,
    ee = new WeakMap,
    lr = t => {
        const e = me.get(t.target);
        e && e(t)
    },
    ur = t => {
        t.forEach(lr)
    };

function cr({
    root: t,
    ...e
}) {
    const n = t || document;
    ee.has(n) || ee.set(n, {});
    const s = ee.get(n),
        i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(ur, {
        root: t,
        ...e
    })), s[i]
}

function hr(t, e, n) {
    const s = cr(e);
    return me.set(t, n), s.observe(t), () => {
        me.delete(t), s.unobserve(t)
    }
}
const fr = {
    some: 0,
    all: 1
};
class dr extends J {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: r
        } = e, o = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : fr[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: h
            } = this.node.getProps(), f = u ? c : h;
            f && f(l)
        };
        return hr(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(pr(e, n)) && this.startObserver()
    }
    unmount() {}
}

function pr({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const mr = {
    inView: {
        Feature: dr
    },
    tap: {
        Feature: ar
    },
    focus: {
        Feature: rr
    },
    hover: {
        Feature: or
    }
};

function $s(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}

function Yt(t, e, n) {
    const s = t.getProps();
    return Ke(s, e, n !== void 0 ? n : s.custom, t)
}
const X = t => t * 1e3,
    G = t => t / 1e3,
    gr = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    yr = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    vr = {
        type: "keyframes",
        duration: .8
    },
    xr = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Tr = (t, {
        keyframes: e
    }) => e.length > 2 ? vr : Q.has(t) ? t.startsWith("scale") ? yr(e[1]) : gr : xr;

function Pr({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: r,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function We(t, e) {
    return t[e] || t.default || t
}
const Sr = t => t !== null;

function qt(t, {
    repeat: e,
    repeatType: n = "loop"
}, s) {
    const i = t.filter(Sr),
        r = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return !r || s === void 0 ? i[r] : s
}
let kt;

function br() {
    kt = void 0
}
const Y = {
        now: () => (kt === void 0 && Y.set(M.isProcessing || ro.useManualTiming ? M.timestamp : performance.now()), kt),
        set: t => {
            kt = t, queueMicrotask(br)
        }
    },
    Hs = t => /^0[^.\s]+$/u.test(t);

function Ar(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Hs(t) : !0
}
const zs = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    Vr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function wr(t) {
    const e = Vr.exec(t);
    if (!e) return [, ];
    const [, n, s, i] = e;
    return [`--${n??s}`, i]
}

function Xs(t, e, n = 1) {
    const [s, i] = wr(t);
    if (!s) return;
    const r = window.getComputedStyle(e).getPropertyValue(s);
    if (r) {
        const o = r.trim();
        return zs(o) ? parseFloat(o) : o
    }
    return ke(i) ? Xs(i, e, n + 1) : i
}
const Cr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    dn = t => t === dt || t === T,
    pn = (t, e) => parseFloat(t.split(", ")[e]),
    mn = (t, e) => (n, {
        transform: s
    }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/u);
        if (i) return pn(i[1], e); {
            const r = s.match(/^matrix\((.+)\)$/u);
            return r ? pn(r[1], t) : 0
        }
    },
    Dr = new Set(["x", "y", "z"]),
    Mr = wt.filter(t => !Dr.has(t));

function Rr(t) {
    const e = [];
    return Mr.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const ft = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: mn(4, 13),
    y: mn(5, 14)
};
ft.translateX = ft.x;
ft.translateY = ft.y;
const Ys = t => e => e.test(t),
    Er = {
        test: t => t === "auto",
        parse: t => t
    },
    qs = [dt, T, N, z, Bo, ko, Er],
    gn = t => qs.find(Ys(t)),
    it = new Set;
let ge = !1,
    ye = !1;

function Zs() {
    if (ye) {
        const t = Array.from(it).filter(s => s.needsMeasurement),
            e = new Set(t.map(s => s.element)),
            n = new Map;
        e.forEach(s => {
            const i = Rr(s);
            i.length && (n.set(s, i), s.render())
        }), t.forEach(s => s.measureInitialState()), e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach(([r, o]) => {
                var a;
                (a = s.getValue(r)) === null || a === void 0 || a.set(o)
            })
        }), t.forEach(s => s.measureEndState()), t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    ye = !1, ge = !1, it.forEach(t => t.complete()), it.clear()
}

function Qs() {
    it.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (ye = !0)
    })
}

function Lr() {
    Qs(), Zs()
}
class _e {
    constructor(e, n, s, i, r, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = r, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (it.add(this), ge || (ge = !0, V.read(Qs), V.resolveKeyframes(Zs))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n,
            element: s,
            motionValue: i
        } = this;
        for (let r = 0; r < e.length; r++)
            if (e[r] === null)
                if (r === 0) {
                    const o = i == null ? void 0 : i.get(),
                        a = e[e.length - 1];
                    if (o !== void 0) e[0] = o;
                    else if (s && n) {
                        const l = s.readValue(n, a);
                        l != null && (e[0] = l)
                    }
                    e[0] === void 0 && (e[0] = a), i && o === void 0 && i.set(e[0])
                } else e[r] = e[r - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), it.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, it.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ge = (t, e) => n => !!(Ct(n) && Lo.test(n) && n.startsWith(t) || e && !Fo(n) && Object.prototype.hasOwnProperty.call(n, e)),
    Js = (t, e, n) => s => {
        if (!Ct(s)) return s;
        const [i, r, o, a] = s.match(Be);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(r),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    Fr = t => q(0, 255, t),
    ne = { ...dt,
        transform: t => Math.round(Fr(t))
    },
    st = {
        test: Ge("rgb", "red"),
        parse: Js("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + ne.transform(t) + ", " + ne.transform(e) + ", " + ne.transform(n) + ", " + vt(yt.transform(s)) + ")"
    };

function kr(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const ve = {
        test: Ge("#"),
        parse: kr,
        transform: st.transform
    },
    at = {
        test: Ge("hsl", "hue"),
        parse: Js("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + N.transform(vt(e)) + ", " + N.transform(vt(n)) + ", " + vt(yt.transform(s)) + ")"
    },
    R = {
        test: t => st.test(t) || ve.test(t) || at.test(t),
        parse: t => st.test(t) ? st.parse(t) : at.test(t) ? at.parse(t) : ve.parse(t),
        transform: t => Ct(t) ? t : t.hasOwnProperty("red") ? st.transform(t) : at.transform(t)
    };

function Br(t) {
    var e, n;
    return isNaN(t) && Ct(t) && (((e = t.match(Be)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Eo)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const ti = "number",
    ei = "color",
    jr = "var",
    Or = "var(",
    yn = "${}",
    Ir = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bt(t) {
    const e = t.toString(),
        n = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let r = 0;
    const a = e.replace(Ir, l => (R.test(l) ? (s.color.push(r), i.push(ei), n.push(R.parse(l))) : l.startsWith(Or) ? (s.var.push(r), i.push(jr), n.push(l)) : (s.number.push(r), i.push(ti), n.push(parseFloat(l))), ++r, yn)).split(yn);
    return {
        values: n,
        split: a,
        indexes: s,
        types: i
    }
}

function ni(t) {
    return bt(t).values
}

function si(t) {
    const {
        split: e,
        types: n
    } = bt(t), s = e.length;
    return i => {
        let r = "";
        for (let o = 0; o < s; o++)
            if (r += e[o], i[o] !== void 0) {
                const a = n[o];
                a === ti ? r += vt(i[o]) : a === ei ? r += R.transform(i[o]) : r += i[o]
            }
        return r
    }
}
const Nr = t => typeof t == "number" ? 0 : t;

function Ur(t) {
    const e = ni(t);
    return si(t)(e.map(Nr))
}
const Z = {
        test: Br,
        parse: ni,
        createTransformer: si,
        getAnimatableNone: Ur
    },
    Kr = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Wr(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(Be) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let r = Kr.has(e) ? 1 : 0;
    return s !== n && (r *= 100), e + "(" + r + i + ")"
}
const _r = /\b([a-z-]*)\(.*?\)/gu,
    xe = { ...Z,
        getAnimatableNone: t => {
            const e = t.match(_r);
            return e ? e.map(Wr).join(" ") : t
        }
    },
    Gr = { ...Ms,
        color: R,
        backgroundColor: R,
        outlineColor: R,
        fill: R,
        stroke: R,
        borderColor: R,
        borderTopColor: R,
        borderRightColor: R,
        borderBottomColor: R,
        borderLeftColor: R,
        filter: xe,
        WebkitFilter: xe
    },
    $e = t => Gr[t];

function ii(t, e) {
    let n = $e(t);
    return n !== xe && (n = Z), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const $r = new Set(["auto", "none", "0"]);

function Hr(t, e, n) {
    let s = 0,
        i;
    for (; s < t.length && !i;) {
        const r = t[s];
        typeof r == "string" && !$r.has(r) && bt(r).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const r of e) t[r] = ii(n, i)
}
class oi extends _e {
    constructor(e, n, s, i) {
        super(e, n, s, i, i == null ? void 0 : i.owner, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: n,
            name: s
        } = this;
        if (!n.current) return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let u = e[l];
            if (typeof u == "string" && (u = u.trim(), ke(u))) {
                const c = Xs(u, n.current);
                c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Cr.has(s) || e.length !== 2) return;
        const [i, r] = e, o = gn(i), a = gn(r);
        if (o !== a)
            if (dn(o) && dn(a))
                for (let l = 0; l < e.length; l++) {
                    const u = e[l];
                    typeof u == "string" && (e[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n
        } = this, s = [];
        for (let i = 0; i < e.length; i++) Ar(e[i]) && s.push(i);
        s.length && Hr(e, s, n)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: n,
            name: s
        } = this;
        if (!e.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ft[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        var e;
        const {
            element: n,
            name: s,
            unresolvedKeyframes: i
        } = this;
        if (!n.current) return;
        const r = n.getValue(s);
        r && r.jump(this.measuredOrigin, !1);
        const o = i.length - 1,
            a = i[o];
        i[o] = ft[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function ri(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const vn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Z.test(t) || t === "0") && !t.startsWith("url("));

function zr(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Xr(t, e, n, s) {
    const i = t[0];
    if (i === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const r = t[t.length - 1],
        o = vn(i, e),
        a = vn(r, e);
    return !o || !a ? !1 : zr(t) || n === "spring" && s
}
class ai {
    constructor({
        autoplay: e = !0,
        delay: n = 0,
        type: s = "keyframes",
        repeat: i = 0,
        repeatDelay: r = 0,
        repeatType: o = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
            autoplay: e,
            delay: n,
            type: s,
            repeat: i,
            repeatDelay: r,
            repeatType: o,
            ...a
        }, this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Lr(), this._resolved
    }
    onKeyframesResolved(e, n) {
        this.hasAttemptedResolve = !0;
        const {
            name: s,
            type: i,
            velocity: r,
            delay: o,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !Xr(e, s, i, r))
            if (o) this.options.duration = 0;
            else {
                l == null || l(qt(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(e, n);
        c !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}

function li(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Yr = 5;

function ui(t, e, n) {
    const s = Math.max(e - Yr, 0);
    return li(n - t(s), e - s)
}
const se = .001,
    qr = .01,
    Zr = 10,
    Qr = .05,
    Jr = 1;

function ta({
    duration: t = 800,
    bounce: e = .25,
    velocity: n = 0,
    mass: s = 1
}) {
    let i, r, o = 1 - e;
    o = q(Qr, Jr, o), t = q(qr, Zr, G(t)), o < 1 ? (i = u => {
        const c = u * o,
            h = c * t,
            f = c - n,
            d = Te(u, o),
            p = Math.exp(-h);
        return se - f / d * p
    }, r = u => {
        const h = u * o * t,
            f = h * n + n,
            d = Math.pow(o, 2) * Math.pow(u, 2) * t,
            p = Math.exp(-h),
            m = Te(Math.pow(u, 2), o);
        return (-i(u) + se > 0 ? -1 : 1) * ((f - d) * p) / m
    }) : (i = u => {
        const c = Math.exp(-u * t),
            h = (u - n) * t + 1;
        return -se + c * h
    }, r = u => {
        const c = Math.exp(-u * t),
            h = (n - u) * (t * t);
        return c * h
    });
    const a = 5 / t,
        l = na(i, r, a);
    if (t = X(t), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: t
    }; {
        const u = Math.pow(l, 2) * s;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(s * u),
            duration: t
        }
    }
}
const ea = 12;

function na(t, e, n) {
    let s = n;
    for (let i = 1; i < ea; i++) s = s - t(s) / e(s);
    return s
}

function Te(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const sa = ["duration", "bounce"],
    ia = ["stiffness", "damping", "mass"];

function xn(t, e) {
    return e.some(n => t[n] !== void 0)
}

function oa(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!xn(t, ia) && xn(t, sa)) {
        const n = ta(t);
        e = { ...e,
            ...n,
            mass: 1
        }, e.isResolvedFromDuration = !0
    }
    return e
}

function ci({
    keyframes: t,
    restDelta: e,
    restSpeed: n,
    ...s
}) {
    const i = t[0],
        r = t[t.length - 1],
        o = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: h,
            isResolvedFromDuration: f
        } = oa({ ...s,
            velocity: -G(s.velocity || 0)
        }),
        d = h || 0,
        p = l / (2 * Math.sqrt(a * u)),
        m = r - i,
        x = G(Math.sqrt(a / u)),
        y = Math.abs(m) < 5;
    n || (n = y ? .01 : 2), e || (e = y ? .005 : .5);
    let g;
    if (p < 1) {
        const v = Te(x, p);
        g = S => {
            const b = Math.exp(-p * x * S);
            return r - b * ((d + p * x * m) / v * Math.sin(v * S) + m * Math.cos(v * S))
        }
    } else if (p === 1) g = v => r - Math.exp(-x * v) * (m + (d + x * m) * v);
    else {
        const v = x * Math.sqrt(p * p - 1);
        g = S => {
            const b = Math.exp(-p * x * S),
                D = Math.min(v * S, 300);
            return r - b * ((d + p * x * m) * Math.sinh(D) + v * m * Math.cosh(D)) / v
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: v => {
            const S = g(v);
            if (f) o.done = v >= c;
            else {
                let b = d;
                v !== 0 && (p < 1 ? b = ui(g, v, S) : b = 0);
                const D = Math.abs(b) <= n,
                    H = Math.abs(r - S) <= e;
                o.done = D && H
            }
            return o.value = o.done ? r : S, o
        }
    }
}

function Tn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: r = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const h = t[0],
        f = {
            done: !1,
            value: h
        },
        d = A => a !== void 0 && A < a || l !== void 0 && A > l,
        p = A => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
    let m = n * e;
    const x = h + m,
        y = o === void 0 ? x : o(x);
    y !== x && (m = y - h);
    const g = A => -m * Math.exp(-A / s),
        v = A => y + g(A),
        S = A => {
            const B = g(A),
                j = v(A);
            f.done = Math.abs(B) <= u, f.value = f.done ? y : j
        };
    let b, D;
    const H = A => {
        d(f.value) && (b = A, D = ci({
            keyframes: [f.value, p(f.value)],
            velocity: ui(v, A, f.value),
            damping: i,
            stiffness: r,
            restDelta: u,
            restSpeed: c
        }))
    };
    return H(0), {
        calculatedDuration: null,
        next: A => {
            let B = !1;
            return !D && b === void 0 && (B = !0, S(A), H(A)), b !== void 0 && A >= b ? D.next(A - b) : (!B && S(A), f)
        }
    }
}
const hi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    ra = 1e-7,
    aa = 12;

function la(t, e, n, s, i) {
    let r, o, a = 0;
    do o = e + (n - e) / 2, r = hi(o, s, i) - t, r > 0 ? n = o : e = o; while (Math.abs(r) > ra && ++a < aa);
    return o
}

function Mt(t, e, n, s) {
    if (t === e && n === s) return L;
    const i = r => la(r, 0, 1, t, n);
    return r => r === 0 || r === 1 ? r : hi(i(r), e, s)
}
const ua = Mt(.42, 0, 1, 1),
    ca = Mt(0, 0, .58, 1),
    fi = Mt(.42, 0, .58, 1),
    ha = t => Array.isArray(t) && typeof t[0] != "number",
    di = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    pi = t => e => 1 - t(1 - e),
    He = t => 1 - Math.sin(Math.acos(t)),
    mi = pi(He),
    fa = di(He),
    gi = Mt(.33, 1.53, .69, .99),
    ze = pi(gi),
    da = di(ze),
    pa = t => (t *= 2) < 1 ? .5 * ze(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Pn = {
        linear: L,
        easeIn: ua,
        easeInOut: fi,
        easeOut: ca,
        circIn: He,
        circInOut: fa,
        circOut: mi,
        backIn: ze,
        backInOut: da,
        backOut: gi,
        anticipate: pa
    },
    Sn = t => {
        if (Array.isArray(t)) {
            de(t.length === 4);
            const [e, n, s, i] = t;
            return Mt(e, n, s, i)
        } else if (typeof t == "string") return de(Pn[t] !== void 0), Pn[t];
        return t
    },
    At = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s
    },
    w = (t, e, n) => t + (e - t) * n;

function ie(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function ma({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        r = 0,
        o = 0;
    if (!e) i = r = o = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        i = ie(l, a, t + 1 / 3), r = ie(l, a, t), o = ie(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: s
    }
}

function It(t, e) {
    return n => n > 0 ? e : t
}
const oe = (t, e, n) => {
        const s = t * t,
            i = n * (e * e - s) + s;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    ga = [ve, st, at],
    ya = t => ga.find(e => e.test(t));

function bn(t) {
    const e = ya(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === at && (n = ma(n)), n
}
const An = (t, e) => {
        const n = bn(t),
            s = bn(e);
        if (!n || !s) return It(t, e);
        const i = { ...n
        };
        return r => (i.red = oe(n.red, s.red, r), i.green = oe(n.green, s.green, r), i.blue = oe(n.blue, s.blue, r), i.alpha = w(n.alpha, s.alpha, r), st.transform(i))
    },
    Pe = new Set(["none", "hidden"]);

function va(t, e) {
    return Pe.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function xa(t, e) {
    return n => w(t, e, n)
}

function Xe(t) {
    return typeof t == "number" ? xa : typeof t == "string" ? ke(t) ? It : R.test(t) ? An : Sa : Array.isArray(t) ? yi : typeof t == "object" ? R.test(t) ? An : Ta : It
}

function yi(t, e) {
    const n = [...t],
        s = n.length,
        i = t.map((r, o) => Xe(r)(r, e[o]));
    return r => {
        for (let o = 0; o < s; o++) n[o] = i[o](r);
        return n
    }
}

function Ta(t, e) {
    const n = { ...t,
            ...e
        },
        s = {};
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Xe(t[i])(t[i], e[i]));
    return i => {
        for (const r in s) n[r] = s[r](i);
        return n
    }
}

function Pa(t, e) {
    var n;
    const s = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let r = 0; r < e.values.length; r++) {
        const o = e.types[r],
            a = t.indexes[o][i[o]],
            l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
        s[r] = l, i[o]++
    }
    return s
}
const Sa = (t, e) => {
    const n = Z.createTransformer(e),
        s = bt(t),
        i = bt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Pe.has(t) && !i.values.length || Pe.has(e) && !s.values.length ? va(t, e) : _(yi(Pa(s, i), i.values), n) : It(t, e)
};

function vi(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? w(t, e, n) : Xe(t)(t, e)
}

function ba(t, e, n) {
    const s = [],
        i = n || vi,
        r = t.length - 1;
    for (let o = 0; o < r; o++) {
        let a = i(t[o], t[o + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[o] || L : e;
            a = _(l, a)
        }
        s.push(a)
    }
    return s
}

function Aa(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const r = t.length;
    if (de(r === e.length), r === 1) return () => e[0];
    if (r === 2 && t[0] === t[1]) return () => e[1];
    t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const o = ba(e, s, i),
        a = o.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < t.length - 2 && !(u < t[c + 1]); c++);
            const h = At(t[c], t[c + 1], u);
            return o[c](h)
        };
    return n ? u => l(q(t[0], t[r - 1], u)) : l
}

function Va(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = At(0, e, s);
        t.push(w(n, 1, i))
    }
}

function wa(t) {
    const e = [0];
    return Va(e, t.length - 1), e
}

function Ca(t, e) {
    return t.map(n => n * e)
}

function Da(t, e) {
    return t.map(() => e || fi).splice(0, t.length - 1)
}

function Nt({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = ha(s) ? s.map(Sn) : Sn(s),
        r = {
            done: !1,
            value: e[0]
        },
        o = Ca(n && n.length === e.length ? n : wa(e), t),
        a = Aa(o, e, {
            ease: Array.isArray(i) ? i : Da(e, i)
        });
    return {
        calculatedDuration: t,
        next: l => (r.value = a(l), r.done = l >= t, r)
    }
}
const Vn = 2e4;

function Ma(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Vn;) e += n, s = t.next(e);
    return e >= Vn ? 1 / 0 : e
}
const Ra = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => V.update(e, !0),
            stop: () => $(e),
            now: () => M.isProcessing ? M.timestamp : Y.now()
        }
    },
    Ea = {
        decay: Tn,
        inertia: Tn,
        tween: Nt,
        keyframes: Nt,
        spring: ci
    },
    La = t => t / 100;
class Ye extends ai {
    constructor({
        KeyframeResolver: e = _e,
        ...n
    }) {
        super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: a
            } = this.options;
            a && a()
        };
        const {
            name: s,
            motionValue: i,
            keyframes: r
        } = this.options, o = (a, l) => this.onKeyframesResolved(a, l);
        s && i && i.owner ? this.resolver = i.owner.resolveKeyframes(r, o, s, i) : this.resolver = new e(r, o, s, i), this.resolver.scheduleResolve()
    }
    initPlayback(e) {
        const {
            type: n = "keyframes",
            repeat: s = 0,
            repeatDelay: i = 0,
            repeatType: r,
            velocity: o = 0
        } = this.options, a = Ea[n] || Nt;
        let l, u;
        a !== Nt && typeof e[0] != "number" && (l = _(La, vi(e[0], e[1])), e = [0, 100]);
        const c = a({ ...this.options,
            keyframes: e
        });
        r === "mirror" && (u = a({ ...this.options,
            keyframes: [...e].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Ma(c));
        const {
            calculatedDuration: h
        } = c, f = h + i, d = f * (s + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: h,
            resolvedDuration: f,
            totalDuration: d
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n = !1) {
        const {
            resolved: s
        } = this;
        if (!s) {
            const {
                keyframes: A
            } = this.options;
            return {
                done: !0,
                value: A[A.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: h
        } = s;
        if (this.startTime === null) return r.next(0);
        const {
            delay: f,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const y = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? y < 0 : y > c;
        this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let v = this.currentTime,
            S = r;
        if (d) {
            const A = Math.min(this.currentTime, c) / h;
            let B = Math.floor(A),
                j = A % 1;
            !j && A >= 1 && (j = 1), j === 1 && B--, B = Math.min(B, d + 1), !!(B % 2) && (p === "reverse" ? (j = 1 - j, m && (j -= m / h)) : p === "mirror" && (S = o)), v = q(0, 1, j) * h
        }
        const b = g ? {
            done: !1,
            value: l[0]
        } : S.next(v);
        a && (b.value = a(b.value));
        let {
            done: D
        } = b;
        !g && u !== null && (D = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const H = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
        return H && i !== void 0 && (b.value = qt(l, this.options, i)), x && x(b.value), H && this.finish(), b
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? G(e.calculatedDuration) : 0
    }
    get time() {
        return G(this.currentTime)
    }
    set time(e) {
        e = X(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e, n && (this.time = G(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = Ra,
            onPlay: n
        } = this.options;
        this.driver || (this.driver = e(i => this.tick(i))), n && n();
        const s = this.driver.now();
        this.holdTime !== null ? this.startTime = s - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = s), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const xi = t => Array.isArray(t) && typeof t[0] == "number";

function Ti(t) {
    return !!(!t || typeof t == "string" && t in qe || xi(t) || Array.isArray(t) && t.every(Ti))
}
const mt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
    qe = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: mt([0, .65, .55, 1]),
        circOut: mt([.55, 0, 1, .45]),
        backIn: mt([.31, .01, .66, -.59]),
        backOut: mt([.33, 1.53, .69, .99])
    };

function Fa(t) {
    return Pi(t) || qe.easeOut
}

function Pi(t) {
    if (t) return xi(t) ? mt(t) : Array.isArray(t) ? t.map(Fa) : qe[t]
}

function ka(t, e, n, {
    delay: s = 0,
    duration: i = 300,
    repeat: r = 0,
    repeatType: o = "loop",
    ease: a,
    times: l
} = {}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = Pi(a);
    return Array.isArray(c) && (u.easing = c), t.animate(u, {
        delay: s,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: r + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const Ba = ri(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Ut = 10,
    ja = 2e4;

function Oa(t) {
    return t.type === "spring" || !Ti(t.ease)
}

function Ia(t, e) {
    const n = new Ye({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: t[0]
    };
    const i = [];
    let r = 0;
    for (; !s.done && r < ja;) s = n.sample(r), i.push(s.value), r += Ut;
    return {
        times: void 0,
        keyframes: i,
        duration: r - Ut,
        ease: "linear"
    }
}
class wn extends ai {
    constructor(e) {
        super(e);
        const {
            name: n,
            motionValue: s,
            keyframes: i
        } = this.options;
        this.resolver = new oi(i, (r, o) => this.onKeyframesResolved(r, o), n, s), this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        var s;
        let {
            duration: i = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u
        } = this.options;
        if (!(!((s = l.owner) === null || s === void 0) && s.current)) return !1;
        if (Oa(this.options)) {
            const {
                onComplete: h,
                onUpdate: f,
                motionValue: d,
                ...p
            } = this.options, m = Ia(e, p);
            e = m.keyframes, e.length === 1 && (e[1] = e[0]), i = m.duration, r = m.times, o = m.ease, a = "keyframes"
        }
        const c = ka(l.owner.current, u, e, { ...this.options,
            duration: i,
            times: r,
            ease: o
        });
        return c.startTime = Y.now(), this.pendingTimeline ? (c.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : c.onfinish = () => {
            const {
                onComplete: h
            } = this.options;
            l.set(qt(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: c,
            duration: i,
            times: r,
            type: a,
            ease: o,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: n
        } = e;
        return G(n)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: n
        } = e;
        return G(n.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.currentTime = X(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: n
        } = e;
        return n.playbackRate
    }
    set speed(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: s
        } = n;
        s.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: n
        } = e;
        return n.playState
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return L;
            const {
                animation: s
            } = n;
            s.timeline = e, s.onfinish = null
        }
        return L
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n,
            keyframes: s,
            duration: i,
            type: r,
            ease: o,
            times: a
        } = e;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: h,
                ...f
            } = this.options, d = new Ye({ ...f,
                keyframes: s,
                duration: i,
                type: r,
                ease: o,
                times: a,
                isGenerator: !0
            }), p = X(this.time);
            u.setWithVelocity(d.sample(p - Ut).value, d.sample(p).value, Ut)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: n,
            name: s,
            repeatDelay: i,
            repeatType: r,
            damping: o,
            type: a
        } = e;
        return Ba() && s && Os.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && r !== "mirror" && o !== 0 && a !== "inertia"
    }
}

function Na(t, e) {
    let n;
    const s = () => {
        const {
            currentTime: i
        } = e, o = (i === null ? 0 : i.value) / 100;
        n !== o && t(o), n = o
    };
    return V.update(s, !0), () => $(s)
}
const Ua = ri(() => window.ScrollTimeline !== void 0);
class Ka {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let s = 0; s < this.animations.length; s++) this.animations[s][e] = n
    }
    attachTimeline(e) {
        const n = this.animations.map(s => {
            if (Ua() && s.attachTimeline) s.attachTimeline(e);
            else return s.pause(), Na(i => {
                s.time = s.duration * i
            }, e)
        });
        return () => {
            n.forEach((s, i) => {
                s && s(), this.animations[i].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
const Ze = (t, e, n, s = {}, i, r, o) => a => {
    const l = We(s, t) || {},
        u = l.delay || s.delay || 0;
    let {
        elapsed: c = 0
    } = s;
    c = c - X(u);
    let h = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...l,
        delay: -c,
        onUpdate: d => {
            e.set(d), l.onUpdate && l.onUpdate(d)
        },
        onComplete: () => {
            a(), l.onComplete && l.onComplete(), o && o()
        },
        onStop: o,
        name: t,
        motionValue: e,
        element: r ? void 0 : i
    };
    Pr(l) || (h = { ...h,
        ...Tr(t, h)
    }), h.duration && (h.duration = X(h.duration)), h.repeatDelay && (h.repeatDelay = X(h.repeatDelay)), h.from !== void 0 && (h.keyframes[0] = h.from);
    let f = !1;
    if ((h.type === !1 || h.duration === 0 && !h.repeatDelay) && (h.duration = 0, h.delay === 0 && (f = !0)), f && !r && e.get() !== void 0) {
        const d = qt(h.keyframes, l);
        if (d !== void 0) return V.update(() => {
            h.onUpdate(d), h.onComplete()
        }), new Ka([])
    }
    return !r && wn.supports(h) ? new wn(h) : new Ye(h)
};
class Qe {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Ht(this.subscriptions, e), () => zt(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](e, n, s);
            else
                for (let r = 0; r < i; r++) {
                    const o = this.subscriptions[r];
                    o && o(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Cn = 30,
    Wa = t => !isNaN(parseFloat(t));
class Si {
    constructor(e, n = {}) {
        this.version = "11.3.19", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
            const r = Y.now();
            this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = Y.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Wa(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new Qe);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(), V.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Y.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Cn) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Cn);
        return li(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Vt(t, e) {
    return new Si(t, e)
}

function _a(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Vt(n))
}

function Ga(t, e) {
    const n = Yt(t, e);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...r
    } = n || {};
    r = { ...r,
        ...s
    };
    for (const o in r) {
        const a = qo(r[o]);
        _a(t, o, a)
    }
}

function bi(t) {
    return t.getProps()[Ts]
}
class $a extends Si {
    constructor() {
        super(...arguments), this.output = [], this.counts = new Map
    }
    add(e) {
        const n = Is(e);
        if (!n) return;
        const s = this.counts.get(n) || 0;
        this.counts.set(n, s + 1), s === 0 && (this.output.push(n), this.update());
        let i = !1;
        return () => {
            if (i) return;
            i = !0;
            const r = this.counts.get(n) - 1;
            this.counts.set(n, r), r === 0 && (zt(this.output, n), this.update())
        }
    }
    update() {
        this.set(this.output.length ? this.output.join(", ") : "auto")
    }
}

function Ha(t) {
    return !!(E(t) && t.add)
}

function Se(t, e) {
    var n;
    if (!t.applyWillChange) return;
    let s = t.getValue("willChange");
    if (!s && !(!((n = t.props.style) === null || n === void 0) && n.willChange) && (s = new $a("auto"), t.addValue("willChange", s)), Ha(s)) return s.add(e)
}

function za({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function Ai(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    var r;
    let {
        transition: o = t.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = e;
    s && (o = s);
    const u = [],
        c = i && t.animationState && t.animationState.getState()[i];
    for (const h in l) {
        const f = t.getValue(h, (r = t.latestValues[h]) !== null && r !== void 0 ? r : null),
            d = l[h];
        if (d === void 0 || c && za(c, h)) continue;
        const p = {
            delay: n,
            elapsed: 0,
            ...We(o || {}, h)
        };
        let m = !1;
        if (window.HandoffAppearAnimations) {
            const y = bi(t);
            if (y) {
                const g = window.HandoffAppearAnimations(y, h, f, V);
                g !== null && (p.elapsed = g, m = !0)
            }
        }
        f.start(Ze(h, f, d, t.shouldReduceMotion && Q.has(h) ? {
            type: !1
        } : p, t, m, Se(t, h)));
        const x = f.animation;
        x && u.push(x)
    }
    return a && Promise.all(u).then(() => {
        V.update(() => {
            a && Ga(t, a)
        })
    }), u
}

function be(t, e, n = {}) {
    var s;
    const i = Yt(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {
        transition: r = t.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (r = n.transitionOverride);
    const o = i ? () => Promise.all(Ai(t, i, n)) : () => Promise.resolve(),
        a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: h,
                staggerDirection: f
            } = r;
            return Xa(t, e, c + u, h, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = r;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
        return u().then(() => c())
    } else return Promise.all([o(), a(n.delay)])
}

function Xa(t, e, n = 0, s = 0, i = 1, r) {
    const o = [],
        a = (t.variantChildren.size - 1) * s,
        l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
    return Array.from(t.variantChildren).sort(Ya).forEach((u, c) => {
        u.notify("AnimationStart", e), o.push(be(u, e, { ...r,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", e)))
    }), Promise.all(o)
}

function Ya(t, e) {
    return t.sortNodePosition(e)
}

function qa(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(r => be(t, r, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = be(t, e, n);
    else {
        const i = typeof e == "function" ? Yt(t, e, n.custom) : e;
        s = Promise.all(Ai(t, i, n))
    }
    return s.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const Za = [...Ee].reverse(),
    Qa = Ee.length;

function Ja(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => qa(t, n, s)))
}

function tl(t) {
    let e = Ja(t),
        n = Dn(),
        s = !0;
    const i = l => (u, c) => {
        var h;
        const f = Yt(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: d,
                transitionEnd: p,
                ...m
            } = f;
            u = { ...u,
                ...m,
                ...p
            }
        }
        return u
    };

    function r(l) {
        e = l(t)
    }

    function o(l) {
        const u = t.getProps(),
            c = t.getVariantContext(!0) || {},
            h = [],
            f = new Set;
        let d = {},
            p = 1 / 0;
        for (let x = 0; x < Qa; x++) {
            const y = Za[x],
                g = n[y],
                v = u[y] !== void 0 ? u[y] : c[y],
                S = Pt(v),
                b = y === l ? g.isActive : null;
            b === !1 && (p = x);
            let D = v === c[y] && v !== u[y] && S;
            if (D && s && t.manuallyAnimateOnMount && (D = !1), g.protectedKeys = { ...d
                }, !g.isActive && b === null || !v && !g.prevProp || St(v) || typeof v == "boolean") continue;
            let A = el(g.prevProp, v) || y === l && g.isActive && !D && S || x > p && S,
                B = !1;
            const j = Array.isArray(v) ? v : [v];
            let ot = j.reduce(i(y), {});
            b === !1 && (ot = {});
            const {
                prevResolvedValues: Je = {}
            } = g, $i = { ...Je,
                ...ot
            }, tn = F => {
                A = !0, f.has(F) && (B = !0, f.delete(F)), g.needsAnimating[F] = !0;
                const U = t.getValue(F);
                U && (U.liveStyle = !1)
            };
            for (const F in $i) {
                const U = ot[F],
                    Zt = Je[F];
                if (d.hasOwnProperty(F)) continue;
                let Qt = !1;
                pe(U) && pe(Zt) ? Qt = !$s(U, Zt) : Qt = U !== Zt, Qt ? U != null ? tn(F) : f.add(F) : U !== void 0 && f.has(F) ? tn(F) : g.protectedKeys[F] = !0
            }
            g.prevProp = v, g.prevResolvedValues = ot, g.isActive && (d = { ...d,
                ...ot
            }), s && t.blockInitialAnimation && (A = !1), A && (!D || B) && h.push(...j.map(F => ({
                animation: F,
                options: {
                    type: y
                }
            })))
        }
        if (f.size) {
            const x = {};
            f.forEach(y => {
                const g = t.getBaseTarget(y),
                    v = t.getValue(y);
                v && (v.liveStyle = !0), x[y] = g ? ? null
            }), h.push({
                animation: x
            })
        }
        let m = !!h.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (m = !1), s = !1, m ? e(h) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = t.variantChildren) === null || c === void 0 || c.forEach(f => {
            var d;
            return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u)
        }), n[l].isActive = u;
        const h = o(l);
        for (const f in n) n[f].protectedKeys = {};
        return h
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: r,
        getState: () => n,
        reset: () => {
            n = Dn(), s = !0
        }
    }
}

function el(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !$s(e, t) : !1
}

function tt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Dn() {
    return {
        animate: tt(!0),
        whileInView: tt(),
        whileHover: tt(),
        whileTap: tt(),
        whileDrag: tt(),
        whileFocus: tt(),
        exit: tt()
    }
}
class nl extends J {
    constructor(e) {
        super(e), e.animationState || (e.animationState = tl(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        St(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let sl = 0;
class il extends J {
    constructor() {
        super(...arguments), this.id = sl++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s) return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const ol = {
        animation: {
            Feature: nl
        },
        exit: {
            Feature: il
        }
    },
    Mn = (t, e) => Math.abs(t - e);

function rl(t, e) {
    const n = Mn(t.x, e.x),
        s = Mn(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class Vi {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: r = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const h = ae(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    d = rl(h.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !d) return;
                const {
                    point: p
                } = h, {
                    timestamp: m
                } = M;
                this.history.push({ ...p,
                    timestamp: m
                });
                const {
                    onStart: x,
                    onMove: y
                } = this.handlers;
                f || (x && x(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, f) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = re(f, this.transformPagePoint), V.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, f) => {
                this.end();
                const {
                    onEnd: d,
                    onSessionEnd: p,
                    resumeAnimation: m
                } = this.handlers;
                if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = ae(h.type === "pointercancel" ? this.lastMoveEventInfo : re(f, this.transformPagePoint), this.history);
                this.startEvent && d && d(h, x), p && p(h, x)
            }, !Us(e)) return;
        this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const o = Xt(e),
            a = re(o, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = M;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(e, ae(a, this.history)), this.removeListeners = _(W(this.contextWindow, "pointermove", this.handlePointerMove), W(this.contextWindow, "pointerup", this.handlePointerUp), W(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), $(this.updatePoint)
    }
}

function re(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Rn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function ae({
    point: t
}, e) {
    return {
        point: t,
        delta: Rn(t, wi(e)),
        offset: Rn(t, al(e)),
        velocity: ll(e, .1)
    }
}

function al(t) {
    return t[0]
}

function wi(t) {
    return t[t.length - 1]
}

function ll(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = wi(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > X(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const r = G(i.timestamp - s.timestamp);
    if (r === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - s.x) / r,
        y: (i.y - s.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
const Ci = 1e-4,
    ul = 1 - Ci,
    cl = 1 + Ci,
    Di = .01,
    hl = 0 - Di,
    fl = 0 + Di;

function k(t) {
    return t.max - t.min
}

function dl(t, e, n) {
    return Math.abs(t - e) <= n
}

function En(t, e, n, s = .5) {
    t.origin = s, t.originPoint = w(e.min, e.max, t.origin), t.scale = k(n) / k(e), t.translate = w(n.min, n.max, t.origin) - t.originPoint, (t.scale >= ul && t.scale <= cl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= hl && t.translate <= fl || isNaN(t.translate)) && (t.translate = 0)
}

function xt(t, e, n, s) {
    En(t.x, e.x, n.x, s ? s.originX : void 0), En(t.y, e.y, n.y, s ? s.originY : void 0)
}

function Ln(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + k(e)
}

function pl(t, e, n) {
    Ln(t.x, e.x, n.x), Ln(t.y, e.y, n.y)
}

function Fn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + k(e)
}

function Tt(t, e, n) {
    Fn(t.x, e.x, n.x), Fn(t.y, e.y, n.y)
}

function ml(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? w(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? w(n, t, s.max) : Math.min(t, n)), t
}

function kn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function gl(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: kn(t.x, n, i),
        y: kn(t.y, e, s)
    }
}

function Bn(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function yl(t, e) {
    return {
        x: Bn(t.x, e.x),
        y: Bn(t.y, e.y)
    }
}

function vl(t, e) {
    let n = .5;
    const s = k(t),
        i = k(e);
    return i > s ? n = At(e.min, e.max - s, t.min) : s > i && (n = At(t.min, t.max - i, e.min)), q(0, 1, n)
}

function xl(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const Ae = .35;

function Tl(t = Ae) {
    return t === !1 ? t = 0 : t === !0 && (t = Ae), {
        x: jn(t, "left", "right"),
        y: jn(t, "top", "bottom")
    }
}

function jn(t, e, n) {
    return {
        min: On(t, e),
        max: On(t, n)
    }
}

function On(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const In = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    lt = () => ({
        x: In(),
        y: In()
    }),
    Nn = () => ({
        min: 0,
        max: 0
    }),
    C = () => ({
        x: Nn(),
        y: Nn()
    });

function I(t) {
    return [t("x"), t("y")]
}

function Mi({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function Pl({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function Sl(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function le(t) {
    return t === void 0 || t === 1
}

function Ve({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !le(t) || !le(e) || !le(n)
}

function et(t) {
    return Ve(t) || Ri(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Ri(t) {
    return Un(t.x) || Un(t.y)
}

function Un(t) {
    return t && t !== "0%"
}

function Kt(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function Kn(t, e, n, s, i) {
    return i !== void 0 && (t = Kt(t, i, s)), Kt(t, n, s) + e
}

function we(t, e = 0, n = 1, s, i) {
    t.min = Kn(t.min, e, n, s, i), t.max = Kn(t.max, e, n, s, i)
}

function Ei(t, {
    x: e,
    y: n
}) {
    we(t.x, e.translate, e.scale, e.originPoint), we(t.y, n.translate, n.scale, n.originPoint)
}
const Wn = .999999999999,
    _n = 1.0000000000001;

function bl(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let r, o;
    for (let a = 0; a < i; a++) {
        r = n[a], o = r.projectionDelta;
        const {
            visualElement: l
        } = r.options;
        l && l.props.style && l.props.style.display === "contents" || (s && r.options.layoutScroll && r.scroll && r !== r.root && ct(t, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }), o && (e.x *= o.x.scale, e.y *= o.y.scale, Ei(t, o)), s && et(r.latestValues) && ct(t, r.latestValues))
    }
    e.x < _n && e.x > Wn && (e.x = 1), e.y < _n && e.y > Wn && (e.y = 1)
}

function ut(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function Gn(t, e, n, s, i = .5) {
    const r = w(t.min, t.max, i);
    we(t, e, n, r, s)
}

function ct(t, e) {
    Gn(t.x, e.x, e.scaleX, e.scale, e.originX), Gn(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Li(t, e) {
    return Mi(Sl(t.getBoundingClientRect(), e))
}

function Al(t, e, n) {
    const s = Li(t, n),
        {
            scroll: i
        } = e;
    return i && (ut(s.x, i.offset.x), ut(s.y, i.offset.y)), s
}
const Fi = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    Vl = new WeakMap;
class wl {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = C(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Xt(c, "page").point)
            },
            r = (c, h) => {
                var f;
                const {
                    drag: d,
                    dragPropagation: p,
                    onDragStart: m
                } = this.getProps();
                if (d && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ws(d), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), I(y => {
                    let g = this.getAxisMotionValue(y).get() || 0;
                    if (N.test(g)) {
                        const {
                            projection: v
                        } = this.visualElement;
                        if (v && v.layout) {
                            const S = v.layout.layoutBox[y];
                            S && (g = k(S) * (parseFloat(g) / 100))
                        }
                    }
                    this.originPoint[y] = g
                }), m && V.postRender(() => m(c, h)), (f = this.removeWillChange) === null || f === void 0 || f.call(this), this.removeWillChange = Se(this.visualElement, "transform");
                const {
                    animationState: x
                } = this.visualElement;
                x && x.setActive("whileDrag", !0)
            },
            o = (c, h) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: d,
                    onDirectionLock: p,
                    onDrag: m
                } = this.getProps();
                if (!f && !this.openGlobalLock) return;
                const {
                    offset: x
                } = h;
                if (d && this.currentDirection === null) {
                    this.currentDirection = Cl(x), this.currentDirection !== null && p && p(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, x), this.updateAxis("y", h.point, x), this.visualElement.render(), m && m(c, h)
            },
            a = (c, h) => this.stop(c, h),
            l = () => I(c => {
                var h;
                return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new Vi(e, {
            onSessionStart: i,
            onStart: r,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Fi(this.visualElement)
        })
    }
    stop(e, n) {
        var s;
        (s = this.removeWillChange) === null || s === void 0 || s.call(this);
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: r
        } = n;
        this.startAnimation(r);
        const {
            onDragEnd: o
        } = this.getProps();
        o && V.postRender(() => o(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !Lt(e, i, this.currentDirection)) return;
        const r = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (o = ml(o, this.constraints[e], this.elastic[e])), r.set(o)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: n,
            dragElastic: s
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, r = this.constraints;
        n && rt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = gl(i.layoutBox, n) : this.constraints = !1, this.elastic = Tl(s), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && I(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = xl(i.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !rt(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const r = Al(s, i.root, this.visualElement.getTransformPagePoint());
        let o = yl(i.layout.layoutBox, r);
        if (n) {
            const a = n(Pl(o));
            this.hasMutatedConstraints = !!a, a && (o = Mi(a))
        }
        return o
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: r,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = I(c => {
            if (!Lt(c, n, this.currentDirection)) return;
            let h = l && l[c] || {};
            o && (h = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                p = {
                    type: "inertia",
                    velocity: s ? e[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...r,
                    ...h
                };
            return this.startAxisValueAnimation(c, p)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start(Ze(e, s, 0, n, this.visualElement, !1, Se(this.visualElement, e)))
    }
    stopAnimation() {
        I(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        I(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`,
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        I(n => {
            const {
                drag: s
            } = this.getProps();
            if (!Lt(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, r = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                r.set(e[n] - w(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!rt(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        I(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = vl({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: r
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), I(o => {
            if (!Lt(o, e, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(w(l, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Vl.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = W(e, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            s = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                rt(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            r = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(s);
        const o = K(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (I(c => {
                    const h = this.getAxisMotionValue(c);
                    h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), r(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: r = !1,
                dragElastic: o = Ae,
                dragMomentum: a = !0
            } = e;
        return { ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Lt(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function Cl(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class Dl extends J {
    constructor(e) {
        super(e), this.removeGroupControls = L, this.removeListeners = L, this.controls = new wl(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const $n = t => (e, n) => {
    t && V.postRender(() => t(e, n))
};
class Ml extends J {
    constructor() {
        super(...arguments), this.removePointerDownListener = L
    }
    onPointerDown(e) {
        this.session = new Vi(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Fi(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: $n(e),
            onStart: $n(n),
            onMove: s,
            onEnd: (r, o) => {
                delete this.session, i && V.postRender(() => i(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = W(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function Rl() {
    const t = P.useContext(De);
    if (t === null) return [!0, null];
    const {
        isPresent: e,
        onExitComplete: n,
        register: s
    } = t, i = P.useId();
    P.useEffect(() => s(i), []);
    const r = P.useCallback(() => n && n(i), [i, n]);
    return !e && n ? [!1, r] : [!0]
}
const Bt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Hn(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const pt = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (T.test(t)) t = parseFloat(t);
                else return t;
            const n = Hn(t, e.target.x),
                s = Hn(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    El = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = Z.parse(t);
            if (i.length > 5) return s;
            const r = Z.createTransformer(t),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const u = w(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), r(i)
        }
    };
class Ll extends P.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: r
        } = e;
        Ao(Fl), r && (n.group && n.group.add(r), s && s.register && i && s.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), r.setOptions({ ...r.options,
            onExitComplete: () => this.safeToRemove()
        })), Bt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: r
        } = this.props, o = s.projection;
        return o && (o.isPresent = r, i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || V.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), Re.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function ki(t) {
    const [e, n] = Rl(), s = P.useContext(Vs);
    return fe.jsx(Ll, { ...t,
        layoutGroup: s,
        switchLayoutGroup: P.useContext(Ss),
        isPresent: e,
        safeToRemove: n
    })
}
const Fl = {
        borderRadius: { ...pt,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: pt,
        borderTopRightRadius: pt,
        borderBottomLeftRadius: pt,
        borderBottomRightRadius: pt,
        boxShadow: El
    },
    Bi = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    kl = Bi.length,
    zn = t => typeof t == "string" ? parseFloat(t) : t,
    Xn = t => typeof t == "number" || T.test(t);

function Bl(t, e, n, s, i, r) {
    i ? (t.opacity = w(0, n.opacity !== void 0 ? n.opacity : 1, jl(s)), t.opacityExit = w(e.opacity !== void 0 ? e.opacity : 1, 0, Ol(s))) : r && (t.opacity = w(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let o = 0; o < kl; o++) {
        const a = `border${Bi[o]}Radius`;
        let l = Yn(e, a),
            u = Yn(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Xn(l) === Xn(u) ? (t[a] = Math.max(w(zn(l), zn(u), s), 0), (N.test(u) || N.test(l)) && (t[a] += "%")) : t[a] = u
    }(e.rotate || n.rotate) && (t.rotate = w(e.rotate || 0, n.rotate || 0, s))
}

function Yn(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const jl = ji(0, .5, mi),
    Ol = ji(.5, .95, L);

function ji(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(At(t, e, s))
}

function qn(t, e) {
    t.min = e.min, t.max = e.max
}

function O(t, e) {
    qn(t.x, e.x), qn(t.y, e.y)
}

function Zn(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Qn(t, e, n, s, i) {
    return t -= e, t = Kt(t, 1 / n, s), i !== void 0 && (t = Kt(t, 1 / i, s)), t
}

function Il(t, e = 0, n = 1, s = .5, i, r = t, o = t) {
    if (N.test(e) && (e = parseFloat(e), e = w(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
    let a = w(r.min, r.max, s);
    t === r && (a -= e), t.min = Qn(t.min, e, n, a, i), t.max = Qn(t.max, e, n, a, i)
}

function Jn(t, e, [n, s, i], r, o) {
    Il(t, e[n], e[s], e[i], e.scale, r, o)
}
const Nl = ["x", "scaleX", "originX"],
    Ul = ["y", "scaleY", "originY"];

function ts(t, e, n, s) {
    Jn(t.x, e, Nl, n ? n.x : void 0, s ? s.x : void 0), Jn(t.y, e, Ul, n ? n.y : void 0, s ? s.y : void 0)
}

function es(t) {
    return t.translate === 0 && t.scale === 1
}

function Oi(t) {
    return es(t.x) && es(t.y)
}

function ns(t, e) {
    return t.min === e.min && t.max === e.max
}

function Kl(t, e) {
    return ns(t.x, e.x) && ns(t.y, e.y)
}

function ss(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function Ii(t, e) {
    return ss(t.x, e.x) && ss(t.y, e.y)
}

function is(t) {
    return k(t.x) / k(t.y)
}

function os(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class Wl {
    constructor() {
        this.members = []
    }
    add(e) {
        Ht(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (zt(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const r = this.members[i];
            if (r.isPresent !== !1) {
                s = r;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function _l(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        r = t.y.translate / e.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || r || o) && (s = `translate3d(${i}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: h,
            rotateY: f,
            skewX: d,
            skewY: p
        } = n;
        u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none"
}
const Gl = (t, e) => t.depth - e.depth;
class $l {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        Ht(this.children, e), this.isDirty = !0
    }
    remove(e) {
        zt(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(Gl), this.isDirty = !1, this.children.forEach(e)
    }
}

function Hl(t, e) {
    const n = Y.now(),
        s = ({
            timestamp: i
        }) => {
            const r = i - n;
            r >= e && ($(s), t(r - e))
        };
    return V.read(s, !0), () => $(s)
}

function zl(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}

function Xl(t, e, n) {
    const s = E(t) ? t : Vt(t);
    return s.start(Ze("", s, e, n)), s.animation
}
const nt = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    gt = typeof window < "u" && window.MotionDebug !== void 0,
    ue = ["", "X", "Y", "Z"],
    Yl = {
        visibility: "hidden"
    },
    rs = 1e3;
let ql = 0;

function ce(t, e, n, s) {
    const {
        latestValues: i
    } = e;
    i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0))
}

function Ni(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return !1;
    const {
        visualElement: e
    } = t.options;
    return e ? bi(e) ? !0 : t.parent && !t.parent.hasCheckedOptimisedAppear ? Ni(t.parent) : !1 : !1
}

function Ui({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = e == null ? void 0 : e()) {
            this.id = ql++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, gt && (nt.totalNodes = nt.resolvedTargetDeltas = nt.recalculatedProjection = 0), this.nodes.forEach(Jl), this.nodes.forEach(iu), this.nodes.forEach(ou), this.nodes.forEach(tu), gt && window.MotionDebug.record(nt)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $l)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Qe), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = zl(o), this.instance = o;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
                let h;
                const f = () => this.root.updateBlockedByResize = !1;
                t(o, () => {
                    this.root.updateBlockedByResize = !0, h && h(), h = Hl(f, 250), Bt.hasAnimatedSinceResize && (Bt.hasAnimatedSinceResize = !1, this.nodes.forEach(ls))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: h,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: d,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || c.getDefaultTransition() || cu,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: y
                    } = c.getProps(),
                    g = !this.targetLayout || !Ii(this.targetLayout, p) || d,
                    v = !f && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, v);
                    const S = { ...We(m, "layout"),
                        onPlay: x,
                        onComplete: y
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S)
                } else f || ls(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, $(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ru), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.HandoffCancelAllAnimations && Ni(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const h = this.path[c];
                h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(as);
                return
            }
            this.isUpdating || this.nodes.forEach(nu), this.isUpdating = !1, this.nodes.forEach(su), this.nodes.forEach(Zl), this.nodes.forEach(Ql), this.clearAllSnapshots();
            const a = Y.now();
            M.delta = q(0, 1e3 / 60, a - M.timestamp), M.timestamp = a, M.isProcessing = !0, Jt.update.process(M), Jt.preRender.process(M), Jt.render.process(M), M.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Re.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(eu), this.sharedNodes.forEach(au)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, V.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            V.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = C(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Oi(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o && (a || et(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), hu(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {
                visualElement: a
            } = this.options;
            if (!a) return C();
            const l = a.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(fu))) {
                const {
                    scroll: c
                } = this.root;
                c && (ut(l.x, c.offset.x), ut(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(o) {
            var a;
            const l = C();
            if (O(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: h,
                        options: f
                    } = c;
                c !== this.root && h && f.layoutScroll && (h.wasRoot && O(l, o), ut(l.x, h.offset.x), ut(l.y, h.offset.y))
            }
            return l
        }
        applyTransform(o, a = !1) {
            const l = C();
            O(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ct(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), et(c.latestValues) && ct(l, c.latestValues)
            }
            return et(this.latestValues) && ct(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = C();
            O(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !et(u.latestValues)) continue;
                Ve(u.latestValues) && u.updateSnapshot();
                const c = C(),
                    h = u.measurePageBox();
                O(c, h), ts(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return et(this.latestValues) && ts(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = { ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== M.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: h,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(h || f))) {
                if (this.resolvedRelativeTargetAt = M.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = C(), this.relativeTargetOrigin = C(), Tt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), O(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = C(), this.targetWithTransforms = C()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), pl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : O(this.target, this.layout.layoutBox), Ei(this.target, this.targetDelta)) : O(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = C(), this.relativeTargetOrigin = C(), Tt(this.relativeTargetOrigin, this.target, d.target), O(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    gt && nt.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ve(this.parent.latestValues) || Ri(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === M.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: h
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h)) return;
            O(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                d = this.treeScale.y;
            bl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = C());
            const {
                target: p
            } = a;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Zn(this.prevProjectionDelta.x, this.projectionDelta.x), Zn(this.prevProjectionDelta.y, this.projectionDelta.y)), xt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !os(this.projectionDelta.x, this.prevProjectionDelta.x) || !os(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), gt && nt.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = lt(), this.projectionDelta = lt(), this.projectionDeltaWithTransform = lt()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                h = lt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = C(),
                d = l ? l.source : void 0,
                p = this.layout ? this.layout.source : void 0,
                m = d !== p,
                x = this.getStack(),
                y = !x || x.members.length <= 1,
                g = !!(m && !y && this.options.crossfade === !0 && !this.path.some(uu));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = S => {
                const b = S / 1e3;
                us(h.x, o.x, b), us(h.y, o.y, b), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Tt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), lu(this.relativeTarget, this.relativeTargetOrigin, f, b), v && Kl(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = C()), O(v, this.relativeTarget)), m && (this.animationValues = c, Bl(c, u, this.latestValues, b, g, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ($(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
                Bt.hasAnimatedSinceResize = !0, this.currentAnimation = Xl(0, rs, { ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(rs), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && Ki(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || C();
                    const h = k(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + h;
                    const f = k(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + f
                }
                O(a, l), ct(a, c), xt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Wl), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && ce("z", o, u, this.animationValues);
            for (let c = 0; c < ue.length; c++) ce(`rotate${ue[c]}`, o, u, this.animationValues), ce(`skew${ue[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Yl;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ft(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const h = this.getLead();
            if (!this.projectionDelta || !this.layout || !h.target) {
                const m = {};
                return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Ft(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !et(this.latestValues) && (m.transform = c ? c({}, "") : "none", this.hasProjected = !1), m
            }
            const f = h.animationValues || h.latestValues;
            this.applyTransformsToTarget(), u.transform = _l(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: d,
                y: p
            } = this.projectionDelta;
            u.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const m in jt) {
                if (f[m] === void 0) continue;
                const {
                    correct: x,
                    applyTo: y
                } = jt[m], g = u.transform === "none" ? f[m] : x(f[m], h);
                if (y) {
                    const v = y.length;
                    for (let S = 0; S < v; S++) u[y[S]] = g
                } else u[m] = g
            }
            return this.options.layoutId && (u.pointerEvents = h === this ? Ft(o == null ? void 0 : o.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(as), this.root.sharedNodes.clear()
        }
    }
}

function Zl(t) {
    t.updateLayout()
}

function Ql(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = t.layout, {
            animationType: r
        } = t.options, o = n.source !== t.layout.source;
        r === "size" ? I(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h],
                d = k(f);
            f.min = s[h].min, f.max = f.min + d
        }) : Ki(r, n.layoutBox, s) && I(h => {
            const f = o ? n.measuredBox[h] : n.layoutBox[h],
                d = k(s[h]);
            f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d)
        });
        const a = lt();
        xt(a, s, n.layoutBox);
        const l = lt();
        o ? xt(l, t.applyTransform(i, !0), n.measuredBox) : xt(l, s, n.layoutBox);
        const u = !Oi(a);
        let c = !1;
        if (!t.resumeFrom) {
            const h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
                const {
                    snapshot: f,
                    layout: d
                } = h;
                if (f && d) {
                    const p = C();
                    Tt(p, n.layoutBox, f.layoutBox);
                    const m = C();
                    Tt(m, s, d.layoutBox), Ii(p, m) || (c = !0), h.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = h)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: s
        } = t.options;
        s && s()
    }
    t.options.transition = void 0
}

function Jl(t) {
    gt && nt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function tu(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function eu(t) {
    t.clearSnapshot()
}

function as(t) {
    t.clearMeasurements()
}

function nu(t) {
    t.isLayoutDirty = !1
}

function su(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function ls(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function iu(t) {
    t.resolveTargetDelta()
}

function ou(t) {
    t.calcProjection()
}

function ru(t) {
    t.resetSkewAndRotation()
}

function au(t) {
    t.removeLeadSnapshot()
}

function us(t, e, n) {
    t.translate = w(e.translate, 0, n), t.scale = w(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function cs(t, e, n, s) {
    t.min = w(e.min, n.min, s), t.max = w(e.max, n.max, s)
}

function lu(t, e, n, s) {
    cs(t.x, e.x, n.x, s), cs(t.y, e.y, n.y, s)
}

function uu(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const cu = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    hs = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    fs = hs("applewebkit/") && !hs("chrome/") ? Math.round : L;

function ds(t) {
    t.min = fs(t.min), t.max = fs(t.max)
}

function hu(t) {
    ds(t.x), ds(t.y)
}

function Ki(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !dl(is(e), is(n), .2)
}

function fu(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const du = Ui({
        attachResizeListener: (t, e) => K(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    he = {
        current: void 0
    },
    Wi = Ui({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!he.current) {
                const t = new du({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), he.current = t
            }
            return he.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    pu = {
        pan: {
            Feature: Ml
        },
        drag: {
            Feature: Dl,
            ProjectionNode: Wi,
            MeasureLayout: ki
        }
    },
    Ce = {
        current: null
    },
    _i = {
        current: !1
    };

function mu() {
    if (_i.current = !0, !!Me)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Ce.current = t.matches;
            t.addListener(e), e()
        } else Ce.current = !1
}

function gu(t, e, n) {
    for (const s in e) {
        const i = e[s],
            r = n[s];
        if (E(i)) t.addValue(s, i);
        else if (E(r)) t.addValue(s, Vt(i, {
            owner: t
        }));
        else if (r !== i)
            if (t.hasValue(s)) {
                const o = t.getValue(s);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = t.getStaticValue(s);
                t.addValue(s, Vt(o !== void 0 ? o : i, {
                    owner: t
                }))
            }
    }
    for (const s in n) e[s] === void 0 && t.removeValue(s);
    return e
}
const ps = new WeakMap,
    yu = [...qs, R, Z],
    vu = t => yu.find(Ys(t)),
    ms = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    xu = Le.length;
class Tu {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        blockInitialAnimation: r,
        visualState: o
    }, a = {}) {
        this.applyWillChange = !1, this.resolveKeyframes = (f, d, p, m) => new this.KeyframeResolver(f, d, p, m, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = _e, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.isRenderScheduled = !1, this.scheduleRender = () => {
            this.isRenderScheduled || (this.isRenderScheduled = !0, V.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = o;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = $t(n), this.isVariantNode = As(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: c,
            ...h
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in h) {
            const d = h[f];
            l[f] !== void 0 && E(d) && d.set(l[f], !1)
        }
    }
    mount(e) {
        this.current = e, ps.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), _i.current || mu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ce.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        ps.delete(this.current), this.projection && this.projection.unmount(), $(this.notifyUpdate), $(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        const s = Q.has(e),
            i = n.on("change", o => {
                this.latestValues[e] = o, this.props.onUpdate && V.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            r = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(), r(), n.owner && n.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ht) {
            const n = ht[e];
            if (!n) continue;
            const {
                isEnabled: s,
                Feature: i
            } = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
                const r = this.features[e];
                r.isMounted ? r.update() : (r.mount(), r.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : C()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < ms.length; s++) {
            const i = ms[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const r = "on" + i,
                o = e[r];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = gu(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e = !1) {
        if (e) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial), s
        }
        const n = {};
        for (let s = 0; s < xu; s++) {
            const i = Le[s],
                r = this.props[i];
            (Pt(r) || r === !1) && (n[i] = r)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = Vt(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e, n) {
        var s;
        let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
        return i != null && (typeof i == "string" && (zs(i) || Hs(i)) ? i = parseFloat(i) : !vu(i) && Z.test(n) && (i = ii(e, n)), this.setBaseTarget(e, E(i) ? i.get() : i)), E(i) ? i.get() : i
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {
            initial: s
        } = this.props;
        let i;
        if (typeof s == "string" || typeof s == "object") {
            const o = Ke(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[e])
        }
        if (s && i !== void 0) return i;
        const r = this.getBaseTargetFromProps(this.props, e);
        return r !== void 0 && !E(r) ? r : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new Qe), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Gi extends Tu {
    constructor() {
        super(...arguments), this.KeyframeResolver = oi
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
}

function Pu(t) {
    return window.getComputedStyle(t)
}
class Su extends Gi {
    constructor() {
        super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = Fs
    }
    readValueFromInstance(e, n) {
        if (Q.has(n)) {
            const s = $e(n);
            return s && s.default || 0
        } else {
            const s = Pu(e),
                i = (Ds(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return Li(e, n)
    }
    build(e, n, s) {
        je(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return Ue(e, n, s)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        E(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class bu extends Gi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = C
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (Q.has(n)) {
            const s = $e(n);
            return s && s.default || 0
        }
        return n = ks.has(n) ? n : Gt(n), e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return js(e, n, s)
    }
    build(e, n, s) {
        Ie(e, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        Bs(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = Ne(e.tagName), super.mount(e)
    }
}
const Au = (t, e) => Fe(t) ? new bu(e) : new Su(e, {
        allowProjection: t !== P.Fragment
    }),
    Vu = {
        layout: {
            ProjectionNode: Wi,
            MeasureLayout: ki
        }
    },
    wu = { ...ol,
        ...mr,
        ...pu,
        ...Vu
    },
    Fu = So((t, e) => nr(t, e, wu, Au));
export {
    to as I, Mu as K, ys as P, Ru as Q, Fu as m, Ji as u
};