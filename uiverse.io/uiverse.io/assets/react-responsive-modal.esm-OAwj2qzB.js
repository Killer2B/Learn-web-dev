import {
    W as u,
    r as c
} from "./jsx-runtime-Dvja6b4T.js";
import {
    C as Ae
} from "./components-BuvoIJIj.js";
import {
    y as C
} from "./index-Bvmn5eQh.js";

function Se(e) {
    if (Array.isArray(e)) {
        for (var n = 0, o = Array(e.length); n < e.length; n++) o[n] = e[n];
        return o
    } else return Array.from(e)
}
var x = !1;
if (typeof window < "u") {
    var X = {
        get passive() {
            x = !0
        }
    };
    window.addEventListener("testPassive", null, X), window.removeEventListener("testPassive", null, X)
}
var Z = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1),
    m = [],
    k = !1,
    _ = -1,
    A = void 0,
    S = void 0,
    ee = function(n) {
        return m.some(function(o) {
            return !!(o.options.allowTouchMove && o.options.allowTouchMove(n))
        })
    },
    R = function(n) {
        var o = n || window.event;
        return ee(o.target) || o.touches.length > 1 ? !0 : (o.preventDefault && o.preventDefault(), !1)
    },
    Ie = function(n) {
        if (S === void 0) {
            var o = !!n && n.reserveScrollBarGap === !0,
                t = window.innerWidth - document.documentElement.clientWidth;
            o && t > 0 && (S = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
        }
        A === void 0 && (A = document.body.style.overflow, document.body.style.overflow = "hidden")
    },
    Oe = function() {
        S !== void 0 && (document.body.style.paddingRight = S, S = void 0), A !== void 0 && (document.body.style.overflow = A, A = void 0)
    },
    Te = function(n) {
        return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1
    },
    ke = function(n, o) {
        var t = n.targetTouches[0].clientY - _;
        return ee(n.target) ? !1 : o && o.scrollTop === 0 && t > 0 || Te(o) && t < 0 ? R(n) : (n.stopPropagation(), !0)
    },
    Re = function(n, o) {
        if (!n) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }
        if (!m.some(function(r) {
                return r.targetElement === n
            })) {
            var t = {
                targetElement: n,
                options: o || {}
            };
            m = [].concat(Se(m), [t]), Z ? (n.ontouchstart = function(r) {
                r.targetTouches.length === 1 && (_ = r.targetTouches[0].clientY)
            }, n.ontouchmove = function(r) {
                r.targetTouches.length === 1 && ke(r, n)
            }, k || (document.addEventListener("touchmove", R, x ? {
                passive: !1
            } : void 0), k = !0)) : Ie(o)
        }
    },
    Ne = function(n) {
        if (!n) {
            console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
            return
        }
        m = m.filter(function(o) {
            return o.targetElement !== n
        }), Z ? (n.ontouchstart = null, n.ontouchmove = null, k && m.length === 0 && (document.removeEventListener("touchmove", R, x ? {
            passive: !1
        } : void 0), k = !1)) : m.length || Oe()
    };

function Be(e = null) {
    let [n, o] = u.useState(e);
    const {
        current: t
    } = u.useRef({
        current: n
    });
    return Object.defineProperty(t, "current", {
        get: () => n,
        set: r => {
            Object.is(n, r) || (n = r, o(r))
        }
    }), t
}

function De(e, n = {
    isStateful: !0
}) {
    const o = Be(null),
        t = c.useRef(null),
        r = n.isStateful ? o : t;
    return u.useEffect(() => {
        !e || (typeof e == "function" ? e(r.current) : e.current = r.current)
    }), r
}

function N() {
    return N = Object.assign || function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
        }
        return e
    }, N.apply(this, arguments)
}
var Me = function(n) {
        var o = n.classes,
            t = n.classNames,
            r = n.styles,
            l = n.id,
            a = n.closeIcon,
            y = n.onClick;
        return u.createElement("button", {
            id: l,
            className: C(o.closeButton, t == null ? void 0 : t.closeButton),
            style: r == null ? void 0 : r.closeButton,
            onClick: y,
            "data-testid": "close-button"
        }, a || u.createElement("svg", {
            className: t == null ? void 0 : t.closeIcon,
            style: r == null ? void 0 : r.closeIcon,
            width: 28,
            height: 28,
            viewBox: "0 0 36 36",
            "data-testid": "close-icon"
        }, u.createElement("path", {
            d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
        })))
    },
    T = typeof window < "u",
    ne = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];

function Le(e) {
    return e.offsetParent === null || getComputedStyle(e).visibility === "hidden"
}

function xe(e, n) {
    for (var o = 0; o < e.length; o++)
        if (e[o].checked && e[o].form === n) return e[o]
}

function Pe(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !0;
    var n = e.form || e.ownerDocument,
        o = n.querySelectorAll('input[type="radio"][name="' + e.name + '"]'),
        t = xe(o, e.form);
    return t === e || t === void 0 && o[0] === e
}

function oe(e) {
    for (var n = document.activeElement, o = e.querySelectorAll(ne.join(",")), t = [], r = 0; r < o.length; r++) {
        var l = o[r];
        (n === l || !l.disabled && Fe(l) > -1 && !Le(l) && Pe(l)) && t.push(l)
    }
    return t
}

function $e(e, n) {
    if (!(!e || e.key !== "Tab")) {
        if (!n || !n.contains) return process, !1;
        if (!n.contains(e.target)) return !1;
        var o = oe(n),
            t = o[0],
            r = o[o.length - 1];
        return e.shiftKey && e.target === t ? (r.focus(), e.preventDefault(), !0) : !e.shiftKey && e.target === r ? (t.focus(), e.preventDefault(), !0) : !1
    }
}

function Fe(e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return isNaN(n) ? Ke(e) ? 0 : e.tabIndex : n
}

function Ke(e) {
    return e.getAttribute("contentEditable")
}
var je = function(n) {
        var o = n.container,
            t = n.initialFocusRef,
            r = c.useRef();
        return c.useEffect(function() {
            var l = function(b) {
                o != null && o.current && $e(b, o.current)
            };
            if (T && document.addEventListener("keydown", l), T && (o != null && o.current)) {
                var a = function() {
                    ne.findIndex(function(b) {
                        var w;
                        return (w = document.activeElement) == null ? void 0 : w.matches(b)
                    }) !== -1 && (r.current = document.activeElement)
                };
                if (t) a(), requestAnimationFrame(function() {
                    var s;
                    (s = t.current) == null || s.focus()
                });
                else {
                    var y = oe(o.current);
                    y[0] && (a(), y[0].focus())
                }
            }
            return function() {
                if (T) {
                    var s;
                    document.removeEventListener("keydown", l), (s = r.current) == null || s.focus()
                }
            }
        }, [o, t]), null
    },
    p = [],
    L = {
        add: function(n) {
            p.push(n)
        },
        remove: function(n) {
            p = p.filter(function(o) {
                return o !== n
            })
        },
        isTopModal: function(n) {
            return !!p.length && p[p.length - 1] === n
        }
    };

function He(e, n) {
    c.useEffect(function() {
        return n && L.add(e),
            function() {
                L.remove(e)
            }
    }, [n, e])
}
var We = function(n, o, t, r, l) {
        var a = c.useRef(null);
        c.useEffect(function() {
            return o && n.current && r && (a.current = n.current, Re(n.current, {
                    reserveScrollBarGap: l
                })),
                function() {
                    a.current && (Ne(a.current), a.current = null)
                }
        }, [o, t, n, r, l])
    },
    d = {
        root: "react-responsive-modal-root",
        overlay: "react-responsive-modal-overlay",
        overlayAnimationIn: "react-responsive-modal-overlay-in",
        overlayAnimationOut: "react-responsive-modal-overlay-out",
        modalContainer: "react-responsive-modal-container",
        modalContainerCenter: "react-responsive-modal-containerCenter",
        modal: "react-responsive-modal-modal",
        modalAnimationIn: "react-responsive-modal-modal-in",
        modalAnimationOut: "react-responsive-modal-modal-out",
        closeButton: "react-responsive-modal-closeButton"
    },
    ze = u.forwardRef(function(e, n) {
        var o, t, r, l, a = e.open,
            y = e.center,
            s = e.blockScroll,
            b = s === void 0 ? !0 : s,
            w = e.closeOnEsc,
            te = w === void 0 ? !0 : w,
            P = e.closeOnOverlayClick,
            re = P === void 0 ? !0 : P,
            B = e.container,
            $ = e.showCloseIcon,
            ae = $ === void 0 ? !0 : $,
            le = e.closeIconId,
            ie = e.closeIcon,
            F = e.focusTrapped,
            ue = F === void 0 ? !0 : F,
            K = e.initialFocusRef,
            ce = K === void 0 ? void 0 : K,
            j = e.animationDuration,
            H = j === void 0 ? 300 : j,
            i = e.classNames,
            f = e.styles,
            W = e.role,
            se = W === void 0 ? "dialog" : W,
            de = e.ariaDescribedby,
            fe = e.ariaLabelledby,
            ve = e.containerId,
            me = e.modalId,
            D = e.onClose,
            Y = e.onEscKeyDown,
            q = e.onOverlayClick,
            U = e.onAnimationEnd,
            ye = e.children,
            he = e.reserveScrollBarGap,
            z = De(n),
            I = c.useRef(null),
            h = c.useRef(null),
            v = c.useRef(null);
        v.current === null && T && (v.current = document.createElement("div"));
        var G = c.useState(!1),
            g = G[0],
            J = G[1];
        He(I, a), We(I, a, g, b, he);
        var pe = function() {
                v.current && !B && !document.body.contains(v.current) && document.body.appendChild(v.current), document.addEventListener("keydown", Q)
            },
            be = function() {
                v.current && !B && document.body.contains(v.current) && document.body.removeChild(v.current), document.removeEventListener("keydown", Q)
            },
            Q = function(O) {
                O.keyCode !== 27 || !L.isTopModal(I) || (Y == null || Y(O), te && D())
            };
        c.useEffect(function() {
            return function() {
                g && be()
            }
        }, [g]), c.useEffect(function() {
            a && !g && (J(!0), pe())
        }, [a]);
        var we = function(O) {
                if (h.current === null && (h.current = !0), !h.current) {
                    h.current = null;
                    return
                }
                q == null || q(O), re && D(), h.current = null
            },
            M = function() {
                h.current = !1
            },
            ge = function() {
                a || J(!1), U == null || U()
            },
            V = B || v.current,
            Ee = a ? (o = i == null ? void 0 : i.overlayAnimationIn) != null ? o : d.overlayAnimationIn : (t = i == null ? void 0 : i.overlayAnimationOut) != null ? t : d.overlayAnimationOut,
            Ce = a ? (r = i == null ? void 0 : i.modalAnimationIn) != null ? r : d.modalAnimationIn : (l = i == null ? void 0 : i.modalAnimationOut) != null ? l : d.modalAnimationOut;
        return g && V ? Ae.createPortal(u.createElement("div", {
            className: C(d.root, i == null ? void 0 : i.root),
            style: f == null ? void 0 : f.root,
            "data-testid": "root"
        }, u.createElement("div", {
            className: C(d.overlay, i == null ? void 0 : i.overlay),
            "data-testid": "overlay",
            "aria-hidden": !0,
            style: N({
                animation: Ee + " " + H + "ms"
            }, f == null ? void 0 : f.overlay)
        }), u.createElement("div", {
            ref: I,
            id: ve,
            className: C(d.modalContainer, y && d.modalContainerCenter, i == null ? void 0 : i.modalContainer),
            style: f == null ? void 0 : f.modalContainer,
            "data-testid": "modal-container",
            onClick: we
        }, u.createElement("div", {
            ref: z,
            className: C(d.modal, i == null ? void 0 : i.modal),
            style: N({
                animation: Ce + " " + H + "ms"
            }, f == null ? void 0 : f.modal),
            onMouseDown: M,
            onMouseUp: M,
            onClick: M,
            onAnimationEnd: ge,
            id: me,
            role: se,
            "aria-modal": "true",
            "aria-labelledby": fe,
            "aria-describedby": de,
            "data-testid": "modal",
            tabIndex: -1
        }, ue && u.createElement(je, {
            container: z,
            initialFocusRef: ce
        }), ye, ae && u.createElement(Me, {
            classes: d,
            classNames: i,
            styles: f,
            closeIcon: ie,
            onClick: D,
            id: le
        })))), V) : null
    });
export {
    ze as M
};