import {
    r as i,
    j as p
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u as Pe,
    o as Ae,
    s as ye,
    f as ve,
    a as Ce,
    b as be,
    h as Se,
    l as Oe
} from "./floating-ui.react-dom-E7IEuBz2.js";
import {
    P as N,
    u as z
} from "./index-w1qRmSKj.js";
import {
    c as Re
} from "./index-DrK2pFTP.js";
import {
    u as Ee,
    a as T
} from "./index-CcT0GIt8.js";
import {
    u as Ne
} from "./index-CzbA40Po.js";
import {
    d as $e
} from "./floating-ui.dom-Cian5nPY.js";
var _e = "Arrow",
    Z = i.forwardRef((e, a) => {
        const {
            children: o,
            width: t = 10,
            height: n = 5,
            ...r
        } = e;
        return p.jsx(N.svg, { ...r,
            ref: a,
            width: t,
            height: n,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? o : p.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Z.displayName = _e;
var je = Z,
    $ = "Popper",
    [L, Le] = Re($),
    [He, U] = L($),
    q = e => {
        const {
            __scopePopper: a,
            children: o
        } = e, [t, n] = i.useState(null);
        return p.jsx(He, {
            scope: a,
            anchor: t,
            onAnchorChange: n,
            children: o
        })
    };
q.displayName = $;
var G = "PopperAnchor",
    J = i.forwardRef((e, a) => {
        const {
            __scopePopper: o,
            virtualRef: t,
            ...n
        } = e, r = U(G, o), s = i.useRef(null), w = z(a, s);
        return i.useEffect(() => {
            r.onAnchorChange((t == null ? void 0 : t.current) || s.current)
        }), t ? null : p.jsx(N.div, { ...n,
            ref: w
        })
    });
J.displayName = G;
var _ = "PopperContent",
    [We, Ie] = L(_),
    K = i.forwardRef((e, a) => {
        var M, Y, X, B, D, F;
        const {
            __scopePopper: o,
            side: t = "bottom",
            sideOffset: n = 0,
            align: r = "center",
            alignOffset: s = 0,
            arrowPadding: w = 0,
            avoidCollisions: c = !0,
            collisionBoundary: d = [],
            collisionPadding: x = 0,
            sticky: h = "partial",
            hideWhenDetached: A = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: f,
            ...l
        } = e, v = U(_, o), [m, C] = i.useState(null), te = z(a, P => C(P)), [E, re] = i.useState(null), g = Ne(E), oe = (g == null ? void 0 : g.width) ? ? 0, j = (g == null ? void 0 : g.height) ? ? 0, ne = t + (r !== "center" ? "-" + r : ""), ae = typeof x == "number" ? x : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...x
        }, H = Array.isArray(d) ? d : [d], se = H.length > 0, b = {
            padding: ae,
            boundary: H.filter(Ye),
            altBoundary: se
        }, {
            refs: ie,
            floatingStyles: W,
            placement: pe,
            isPositioned: S,
            middlewareData: u
        } = Pe({
            strategy: "fixed",
            placement: ne,
            whileElementsMounted: (...P) => $e(...P, {
                animationFrame: y === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [Ae({
                mainAxis: n + j,
                alignmentAxis: s
            }), c && ye({
                mainAxis: !0,
                crossAxis: !1,
                limiter: h === "partial" ? Oe() : void 0,
                ...b
            }), c && ve({ ...b
            }), Ce({ ...b,
                apply: ({
                    elements: P,
                    rects: k,
                    availableWidth: ge,
                    availableHeight: ue
                }) => {
                    const {
                        width: we,
                        height: xe
                    } = k.reference, R = P.floating.style;
                    R.setProperty("--radix-popper-available-width", `${ge}px`), R.setProperty("--radix-popper-available-height", `${ue}px`), R.setProperty("--radix-popper-anchor-width", `${we}px`), R.setProperty("--radix-popper-anchor-height", `${xe}px`)
                }
            }), E && be({
                element: E,
                padding: w
            }), Xe({
                arrowWidth: oe,
                arrowHeight: j
            }), A && Se({
                strategy: "referenceHidden",
                ...b
            })]
        }), [I, ce] = ee(pe), O = Ee(f);
        T(() => {
            S && (O == null || O())
        }, [S, O]);
        const de = (M = u.arrow) == null ? void 0 : M.x,
            le = (Y = u.arrow) == null ? void 0 : Y.y,
            fe = ((X = u.arrow) == null ? void 0 : X.centerOffset) !== 0,
            [he, me] = i.useState();
        return T(() => {
            m && me(window.getComputedStyle(m).zIndex)
        }, [m]), p.jsx("div", {
            ref: ie.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...W,
                transform: S ? W.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: he,
                "--radix-popper-transform-origin": [(B = u.transformOrigin) == null ? void 0 : B.x, (D = u.transformOrigin) == null ? void 0 : D.y].join(" "),
                ...((F = u.hide) == null ? void 0 : F.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: p.jsx(We, {
                scope: o,
                placedSide: I,
                onArrowChange: re,
                arrowX: de,
                arrowY: le,
                shouldHideArrow: fe,
                children: p.jsx(N.div, {
                    "data-side": I,
                    "data-align": ce,
                    ...l,
                    ref: te,
                    style: { ...l.style,
                        animation: S ? void 0 : "none"
                    }
                })
            })
        })
    });
K.displayName = _;
var Q = "PopperArrow",
    Me = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    V = i.forwardRef(function(a, o) {
        const {
            __scopePopper: t,
            ...n
        } = a, r = Ie(Q, t), s = Me[r.placedSide];
        return p.jsx("span", {
            ref: r.onArrowChange,
            style: {
                position: "absolute",
                left: r.arrowX,
                top: r.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[r.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[r.placedSide],
                visibility: r.shouldHideArrow ? "hidden" : void 0
            },
            children: p.jsx(je, { ...n,
                ref: o,
                style: { ...n.style,
                    display: "block"
                }
            })
        })
    });
V.displayName = Q;

function Ye(e) {
    return e !== null
}
var Xe = e => ({
    name: "transformOrigin",
    options: e,
    fn(a) {
        var v, m, C;
        const {
            placement: o,
            rects: t,
            middlewareData: n
        } = a, s = ((v = n.arrow) == null ? void 0 : v.centerOffset) !== 0, w = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [d, x] = ee(o), h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[x], A = (((m = n.arrow) == null ? void 0 : m.x) ? ? 0) + w / 2, y = (((C = n.arrow) == null ? void 0 : C.y) ? ? 0) + c / 2;
        let f = "",
            l = "";
        return d === "bottom" ? (f = s ? h : `${A}px`, l = `${-c}px`) : d === "top" ? (f = s ? h : `${A}px`, l = `${t.floating.height+c}px`) : d === "right" ? (f = `${-c}px`, l = s ? h : `${y}px`) : d === "left" && (f = `${t.floating.width+c}px`, l = s ? h : `${y}px`), {
            data: {
                x: f,
                y: l
            }
        }
    }
});

function ee(e) {
    const [a, o = "center"] = e.split("-");
    return [a, o]
}
var Ue = q,
    qe = J,
    Ge = K,
    Je = V;
export {
    qe as A, Ge as C, Ue as R, Je as a, Le as c
};