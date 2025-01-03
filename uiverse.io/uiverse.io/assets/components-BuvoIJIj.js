var ep = Object.defineProperty;
var tp = (e, t, n) => t in e ? ep(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var zl = (e, t, n) => tp(e, typeof t != "symbol" ? t + "" : t, n);
import {
    r as m,
    g as np,
    R as Hc
} from "./jsx-runtime-Dvja6b4T.js";

function rp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Wc = {
        exports: {}
    },
    be = {},
    Vc = {
        exports: {}
    },
    Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(O, W) {
        var V = O.length;
        O.push(W);
        e: for (; 0 < V;) {
            var X = V - 1 >>> 1,
                le = O[X];
            if (0 < l(le, W)) O[X] = W, O[V] = le, V = X;
            else break e
        }
    }

    function n(O) {
        return O.length === 0 ? null : O[0]
    }

    function r(O) {
        if (O.length === 0) return null;
        var W = O[0],
            V = O.pop();
        if (V !== W) {
            O[0] = V;
            e: for (var X = 0, le = O.length, kt = le >>> 1; X < kt;) {
                var _e = 2 * (X + 1) - 1,
                    ft = O[_e],
                    Ie = _e + 1,
                    Un = O[Ie];
                if (0 > l(ft, V)) Ie < le && 0 > l(Un, ft) ? (O[X] = Un, O[Ie] = V, X = Ie) : (O[X] = ft, O[_e] = V, X = _e);
                else if (Ie < le && 0 > l(Un, V)) O[X] = Un, O[Ie] = V, X = Ie;
                else break e
            }
        }
        return W
    }

    function l(O, W) {
        var V = O.sortIndex - W.sortIndex;
        return V !== 0 ? V : O.id - W.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var u = [],
        s = [],
        f = 1,
        c = null,
        h = 3,
        E = !1,
        g = !1,
        S = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(O) {
        for (var W = n(s); W !== null;) {
            if (W.callback === null) r(s);
            else if (W.startTime <= O) r(s), W.sortIndex = W.expirationTime, t(u, W);
            else break;
            W = n(s)
        }
    }

    function k(O) {
        if (S = !1, p(O), !g)
            if (n(u) !== null) g = !0, tt(L);
            else {
                var W = n(s);
                W !== null && ae(k, W.startTime - O)
            }
    }

    function L(O, W) {
        g = !1, S && (S = !1, v(T), T = -1), E = !0;
        var V = h;
        try {
            for (p(W), c = n(u); c !== null && (!(c.expirationTime > W) || O && !$());) {
                var X = c.callback;
                if (typeof X == "function") {
                    c.callback = null, h = c.priorityLevel;
                    var le = X(c.expirationTime <= W);
                    W = e.unstable_now(), typeof le == "function" ? c.callback = le : c === n(u) && r(u), p(W)
                } else r(u);
                c = n(u)
            }
            if (c !== null) var kt = !0;
            else {
                var _e = n(s);
                _e !== null && ae(k, _e.startTime - W), kt = !1
            }
            return kt
        } finally {
            c = null, h = V, E = !1
        }
    }
    var y = !1,
        P = null,
        T = -1,
        D = 5,
        I = -1;

    function $() {
        return !(e.unstable_now() - I < D)
    }

    function b() {
        if (P !== null) {
            var O = e.unstable_now();
            I = O;
            var W = !0;
            try {
                W = P(!0, O)
            } finally {
                W ? te() : (y = !1, P = null)
            }
        } else y = !1
    }
    var te;
    if (typeof d == "function") te = function() {
        d(b)
    };
    else if (typeof MessageChannel < "u") {
        var pe = new MessageChannel,
            Re = pe.port2;
        pe.port1.onmessage = b, te = function() {
            Re.postMessage(null)
        }
    } else te = function() {
        _(b, 0)
    };

    function tt(O) {
        P = O, y || (y = !0, te())
    }

    function ae(O, W) {
        T = _(function() {
            O(e.unstable_now())
        }, W)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
        O.callback = null
    }, e.unstable_continueExecution = function() {
        g || E || (g = !0, tt(L))
    }, e.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < O ? Math.floor(1e3 / O) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(O) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var W = 3;
                break;
            default:
                W = h
        }
        var V = h;
        h = W;
        try {
            return O()
        } finally {
            h = V
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(O, W) {
        switch (O) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                O = 3
        }
        var V = h;
        h = O;
        try {
            return W()
        } finally {
            h = V
        }
    }, e.unstable_scheduleCallback = function(O, W, V) {
        var X = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? X + V : X) : V = X, O) {
            case 1:
                var le = -1;
                break;
            case 2:
                le = 250;
                break;
            case 5:
                le = 1073741823;
                break;
            case 4:
                le = 1e4;
                break;
            default:
                le = 5e3
        }
        return le = V + le, O = {
            id: f++,
            callback: W,
            priorityLevel: O,
            startTime: V,
            expirationTime: le,
            sortIndex: -1
        }, V > X ? (O.sortIndex = V, t(s, O), n(u) === null && O === n(s) && (S ? (v(T), T = -1) : S = !0, ae(k, V - X))) : (O.sortIndex = le, t(u, O), g || E || (g = !0, tt(L))), O
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(O) {
        var W = h;
        return function() {
            var V = h;
            h = W;
            try {
                return O.apply(this, arguments)
            } finally {
                h = V
            }
        }
    }
})(Kc);
Vc.exports = Kc;
var lp = Vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = m,
    qe = lp;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Qc = new Set,
    br = {};

function In(e, t) {
    cr(e, t), cr(e + "Capture", t)
}

function cr(e, t) {
    for (br[e] = t, e = 0; e < t.length; e++) Qc.add(t[e])
}
var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Yo = Object.prototype.hasOwnProperty,
    op = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    fs = {},
    ds = {};

function ap(e) {
    return Yo.call(ds, e) ? !0 : Yo.call(fs, e) ? !1 : op.test(e) ? ds[e] = !0 : (fs[e] = !0, !1)
}

function up(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function sp(e, t, n, r) {
    if (t === null || typeof t > "u" || up(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Be(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Be(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    De[t] = new Be(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Be(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Be(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Be(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Be(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Be(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Be(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Be(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Qa = /[\-:]([a-z])/g;

function Ya(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Qa, Ya);
    De[t] = new Be(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Qa, Ya);
    De[t] = new Be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Qa, Ya);
    De[t] = new Be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Be(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
De.xlinkHref = new Be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Be(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Xa(e, t, n, r) {
    var l = De.hasOwnProperty(t) ? De[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sp(t, n, l, r) && (n = null), r || l === null ? ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Kt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Il = Symbol.for("react.element"),
    Kn = Symbol.for("react.portal"),
    Qn = Symbol.for("react.fragment"),
    Ja = Symbol.for("react.strict_mode"),
    Xo = Symbol.for("react.profiler"),
    Yc = Symbol.for("react.provider"),
    Xc = Symbol.for("react.context"),
    Ga = Symbol.for("react.forward_ref"),
    Jo = Symbol.for("react.suspense"),
    Go = Symbol.for("react.suspense_list"),
    Za = Symbol.for("react.memo"),
    qt = Symbol.for("react.lazy"),
    Jc = Symbol.for("react.offscreen"),
    hs = Symbol.iterator;

function _r(e) {
    return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var he = Object.assign,
    mo;

function Ar(e) {
    if (mo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        mo = t && t[1] || ""
    }
    return `
` + mo + e
}
var vo = !1;

function yo(e, t) {
    if (!e || vo) return "";
    vo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || l[o] !== i[a]) {
                                var u = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        vo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ar(e) : ""
}

function cp(e) {
    switch (e.tag) {
        case 5:
            return Ar(e.type);
        case 16:
            return Ar("Lazy");
        case 13:
            return Ar("Suspense");
        case 19:
            return Ar("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = yo(e.type, !1), e;
        case 11:
            return e = yo(e.type.render, !1), e;
        case 1:
            return e = yo(e.type, !0), e;
        default:
            return ""
    }
}

function Zo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Qn:
            return "Fragment";
        case Kn:
            return "Portal";
        case Xo:
            return "Profiler";
        case Ja:
            return "StrictMode";
        case Jo:
            return "Suspense";
        case Go:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Xc:
            return (e.displayName || "Context") + ".Consumer";
        case Yc:
            return (e._context.displayName || "Context") + ".Provider";
        case Ga:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Za:
            return t = e.displayName || null, t !== null ? t : Zo(e.type) || "Memo";
        case qt:
            t = e._payload, e = e._init;
            try {
                return Zo(e(t))
            } catch {}
    }
    return null
}

function fp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Zo(t);
        case 8:
            return t === Ja ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function hn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Gc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function dp(e) {
    var t = Gc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function jl(e) {
    e._valueTracker || (e._valueTracker = dp(e))
}

function Zc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Gc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function vi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function qo(e, t) {
    var n = t.checked;
    return he({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function ps(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = hn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function qc(e, t) {
    t = t.checked, t != null && Xa(e, "checked", t, !1)
}

function bo(e, t) {
    qc(e, t);
    var n = hn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ea(e, t.type, n) : t.hasOwnProperty("defaultValue") && ea(e, t.type, hn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function ms(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ea(e, t, n) {
    (t !== "number" || vi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var $r = Array.isArray;

function lr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + hn(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ta(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return he({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function vs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if ($r(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: hn(n)
    }
}

function bc(e, t) {
    var n = hn(t.value),
        r = hn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ys(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ef(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function na(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ef(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ul, tf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ul = Ul || document.createElement("div"), Ul.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ul.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function el(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Vr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vr).forEach(function(e) {
    hp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Vr[t] = Vr[e]
    })
});

function nf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vr.hasOwnProperty(e) && Vr[e] ? ("" + t).trim() : t + "px"
}

function rf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = nf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var pp = he({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ra(e, t) {
    if (t) {
        if (pp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function la(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ia = null;

function qa(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var oa = null,
    ir = null,
    or = null;

function gs(e) {
    if (e = Sl(e)) {
        if (typeof oa != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = Ji(t), oa(e.stateNode, e.type, t))
    }
}

function lf(e) {
    ir ? or ? or.push(e) : or = [e] : ir = e
}

function of () {
    if (ir) {
        var e = ir,
            t = or;
        if (or = ir = null, gs(e), t)
            for (e = 0; e < t.length; e++) gs(t[e])
    }
}

function af(e, t) {
    return e(t)
}

function uf() {}
var go = !1;

function sf(e, t, n) {
    if (go) return e(t, n);
    go = !0;
    try {
        return af(e, t, n)
    } finally {
        go = !1, (ir !== null || or !== null) && (uf(), of ())
    }
}

function tl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ji(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var aa = !1;
if (Bt) try {
    var Lr = {};
    Object.defineProperty(Lr, "passive", {
        get: function() {
            aa = !0
        }
    }), window.addEventListener("test", Lr, Lr), window.removeEventListener("test", Lr, Lr)
} catch {
    aa = !1
}

function mp(e, t, n, r, l, i, o, a, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (f) {
        this.onError(f)
    }
}
var Kr = !1,
    yi = null,
    gi = !1,
    ua = null,
    vp = {
        onError: function(e) {
            Kr = !0, yi = e
        }
    };

function yp(e, t, n, r, l, i, o, a, u) {
    Kr = !1, yi = null, mp.apply(vp, arguments)
}

function gp(e, t, n, r, l, i, o, a, u) {
    if (yp.apply(this, arguments), Kr) {
        if (Kr) {
            var s = yi;
            Kr = !1, yi = null
        } else throw Error(N(198));
        gi || (gi = !0, ua = s)
    }
}

function jn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function cf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function ws(e) {
    if (jn(e) !== e) throw Error(N(188))
}

function wp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = jn(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return ws(l), e;
                if (i === r) return ws(l), t;
                i = i.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, a = l.child; a;) {
                if (a === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (a === r) {
                    o = !0, r = l, n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a;) {
                    if (a === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (a === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function ff(e) {
    return e = wp(e), e !== null ? df(e) : null
}

function df(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = df(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var hf = qe.unstable_scheduleCallback,
    Ss = qe.unstable_cancelCallback,
    Sp = qe.unstable_shouldYield,
    Ep = qe.unstable_requestPaint,
    ye = qe.unstable_now,
    xp = qe.unstable_getCurrentPriorityLevel,
    ba = qe.unstable_ImmediatePriority,
    pf = qe.unstable_UserBlockingPriority,
    wi = qe.unstable_NormalPriority,
    kp = qe.unstable_LowPriority,
    mf = qe.unstable_IdlePriority,
    Ki = null,
    Lt = null;

function Cp(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function") try {
        Lt.onCommitFiberRoot(Ki, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : _p,
    Pp = Math.log,
    Rp = Math.LN2;

function _p(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Pp(e) / Rp | 0) | 0
}
var Al = 64,
    $l = 4194304;

function Br(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Si(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = Br(a) : (i &= o, i !== 0 && (r = Br(i)))
    } else o = n & ~l, o !== 0 ? r = Br(o) : i !== 0 && (r = Br(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - yt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Lp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Tp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - yt(i),
            a = 1 << o,
            u = l[o];
        u === -1 ? (!(a & n) || a & r) && (l[o] = Lp(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function sa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function vf() {
    var e = Al;
    return Al <<= 1, !(Al & 4194240) && (Al = 64), e
}

function wo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function gl(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n
}

function Np(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - yt(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function eu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - yt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var Z = 0;

function yf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var gf, tu, wf, Sf, Ef, ca = !1,
    Bl = [],
    ln = null,
    on = null,
    an = null,
    nl = new Map,
    rl = new Map,
    en = [],
    Dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Es(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            ln = null;
            break;
        case "dragenter":
        case "dragleave":
            on = null;
            break;
        case "mouseover":
        case "mouseout":
            an = null;
            break;
        case "pointerover":
        case "pointerout":
            nl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rl.delete(t.pointerId)
    }
}

function Tr(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = Sl(t), t !== null && tu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Mp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return ln = Tr(ln, e, t, n, r, l), !0;
        case "dragenter":
            return on = Tr(on, e, t, n, r, l), !0;
        case "mouseover":
            return an = Tr(an, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return nl.set(i, Tr(nl.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, rl.set(i, Tr(rl.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function xf(e) {
    var t = xn(e.target);
    if (t !== null) {
        var n = jn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = cf(n), t !== null) {
                    e.blockedOn = t, Ef(e.priority, function() {
                        wf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ia = r, n.target.dispatchEvent(r), ia = null
        } else return t = Sl(n), t !== null && tu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function xs(e, t, n) {
    ri(e) && n.delete(t)
}

function Op() {
    ca = !1, ln !== null && ri(ln) && (ln = null), on !== null && ri(on) && (on = null), an !== null && ri(an) && (an = null), nl.forEach(xs), rl.forEach(xs)
}

function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ca || (ca = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Op)))
}

function ll(e) {
    function t(l) {
        return Nr(l, e)
    }
    if (0 < Bl.length) {
        Nr(Bl[0], e);
        for (var n = 1; n < Bl.length; n++) {
            var r = Bl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ln !== null && Nr(ln, e), on !== null && Nr(on, e), an !== null && Nr(an, e), nl.forEach(t), rl.forEach(t), n = 0; n < en.length; n++) r = en[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < en.length && (n = en[0], n.blockedOn === null);) xf(n), n.blockedOn === null && en.shift()
}
var ar = Kt.ReactCurrentBatchConfig,
    Ei = !0;

function Fp(e, t, n, r) {
    var l = Z,
        i = ar.transition;
    ar.transition = null;
    try {
        Z = 1, nu(e, t, n, r)
    } finally {
        Z = l, ar.transition = i
    }
}

function zp(e, t, n, r) {
    var l = Z,
        i = ar.transition;
    ar.transition = null;
    try {
        Z = 4, nu(e, t, n, r)
    } finally {
        Z = l, ar.transition = i
    }
}

function nu(e, t, n, r) {
    if (Ei) {
        var l = fa(e, t, n, r);
        if (l === null) To(e, t, r, xi, n), Es(e, r);
        else if (Mp(l, e, t, n, r)) r.stopPropagation();
        else if (Es(e, r), t & 4 && -1 < Dp.indexOf(e)) {
            for (; l !== null;) {
                var i = Sl(l);
                if (i !== null && gf(i), i = fa(e, t, n, r), i === null && To(e, t, r, xi, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else To(e, t, r, null, n)
    }
}
var xi = null;

function fa(e, t, n, r) {
    if (xi = null, e = qa(r), e = xn(e), e !== null)
        if (t = jn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = cf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return xi = e, null
}

function kf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (xp()) {
                case ba:
                    return 1;
                case pf:
                    return 4;
                case wi:
                case kp:
                    return 16;
                case mf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nn = null,
    ru = null,
    li = null;

function Cf() {
    if (li) return li;
    var e, t = ru,
        n = t.length,
        r, l = "value" in nn ? nn.value : nn.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return li = l.slice(e, 1 < r ? 1 - r : void 0)
}

function ii(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Hl() {
    return !0
}

function ks() {
    return !1
}

function et(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Hl : ks, this.isPropagationStopped = ks, this
    }
    return he(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hl)
        },
        persist: function() {},
        isPersistent: Hl
    }), t
}
var Sr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    lu = et(Sr),
    wl = he({}, Sr, {
        view: 0,
        detail: 0
    }),
    Ip = et(wl),
    So, Eo, Dr, Qi = he({}, wl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: iu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (So = e.screenX - Dr.screenX, Eo = e.screenY - Dr.screenY) : Eo = So = 0, Dr = e), So)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Eo
        }
    }),
    Cs = et(Qi),
    jp = he({}, Qi, {
        dataTransfer: 0
    }),
    Up = et(jp),
    Ap = he({}, wl, {
        relatedTarget: 0
    }),
    xo = et(Ap),
    $p = he({}, Sr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Bp = et($p),
    Hp = he({}, Sr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Wp = et(Hp),
    Vp = he({}, Sr, {
        data: 0
    }),
    Ps = et(Vp),
    Kp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Qp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Yp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Xp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yp[e]) ? !!t[e] : !1
}

function iu() {
    return Xp
}
var Jp = he({}, wl, {
        key: function(e) {
            if (e.key) {
                var t = Kp[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: iu,
        charCode: function(e) {
            return e.type === "keypress" ? ii(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Gp = et(Jp),
    Zp = he({}, Qi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Rs = et(Zp),
    qp = he({}, wl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: iu
    }),
    bp = et(qp),
    em = he({}, Sr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    tm = et(em),
    nm = he({}, Qi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    rm = et(nm),
    lm = [9, 13, 27, 32],
    ou = Bt && "CompositionEvent" in window,
    Qr = null;
Bt && "documentMode" in document && (Qr = document.documentMode);
var im = Bt && "TextEvent" in window && !Qr,
    Pf = Bt && (!ou || Qr && 8 < Qr && 11 >= Qr),
    _s = " ",
    Ls = !1;

function Rf(e, t) {
    switch (e) {
        case "keyup":
            return lm.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function _f(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Yn = !1;

function om(e, t) {
    switch (e) {
        case "compositionend":
            return _f(t);
        case "keypress":
            return t.which !== 32 ? null : (Ls = !0, _s);
        case "textInput":
            return e = t.data, e === _s && Ls ? null : e;
        default:
            return null
    }
}

function am(e, t) {
    if (Yn) return e === "compositionend" || !ou && Rf(e, t) ? (e = Cf(), li = ru = nn = null, Yn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Pf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var um = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!um[e.type] : t === "textarea"
}

function Lf(e, t, n, r) {
    lf(r), t = ki(t, "onChange"), 0 < t.length && (n = new lu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Yr = null,
    il = null;

function sm(e) {
    Af(e, 0)
}

function Yi(e) {
    var t = Gn(e);
    if (Zc(t)) return e
}

function cm(e, t) {
    if (e === "change") return t
}
var Tf = !1;
if (Bt) {
    var ko;
    if (Bt) {
        var Co = "oninput" in document;
        if (!Co) {
            var Ns = document.createElement("div");
            Ns.setAttribute("oninput", "return;"), Co = typeof Ns.oninput == "function"
        }
        ko = Co
    } else ko = !1;
    Tf = ko && (!document.documentMode || 9 < document.documentMode)
}

function Ds() {
    Yr && (Yr.detachEvent("onpropertychange", Nf), il = Yr = null)
}

function Nf(e) {
    if (e.propertyName === "value" && Yi(il)) {
        var t = [];
        Lf(t, il, e, qa(e)), sf(sm, t)
    }
}

function fm(e, t, n) {
    e === "focusin" ? (Ds(), Yr = t, il = n, Yr.attachEvent("onpropertychange", Nf)) : e === "focusout" && Ds()
}

function dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yi(il)
}

function hm(e, t) {
    if (e === "click") return Yi(t)
}

function pm(e, t) {
    if (e === "input" || e === "change") return Yi(t)
}

function mm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var wt = typeof Object.is == "function" ? Object.is : mm;

function ol(e, t) {
    if (wt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Yo.call(t, l) || !wt(e[l], t[l])) return !1
    }
    return !0
}

function Ms(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Os(e, t) {
    var n = Ms(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ms(n)
    }
}

function Df(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Df(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Mf() {
    for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = vi(e.document)
    }
    return t
}

function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function vm(e) {
    var t = Mf(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Df(n.ownerDocument.documentElement, n)) {
        if (r !== null && au(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Os(n, i);
                var o = Os(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var ym = Bt && "documentMode" in document && 11 >= document.documentMode,
    Xn = null,
    da = null,
    Xr = null,
    ha = !1;

function Fs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ha || Xn == null || Xn !== vi(r) || (r = Xn, "selectionStart" in r && au(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Xr && ol(Xr, r) || (Xr = r, r = ki(da, "onSelect"), 0 < r.length && (t = new lu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Xn)))
}

function Wl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Jn = {
        animationend: Wl("Animation", "AnimationEnd"),
        animationiteration: Wl("Animation", "AnimationIteration"),
        animationstart: Wl("Animation", "AnimationStart"),
        transitionend: Wl("Transition", "TransitionEnd")
    },
    Po = {},
    Of = {};
Bt && (Of = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);

function Xi(e) {
    if (Po[e]) return Po[e];
    if (!Jn[e]) return e;
    var t = Jn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Of) return Po[e] = t[n];
    return e
}
var Ff = Xi("animationend"),
    zf = Xi("animationiteration"),
    If = Xi("animationstart"),
    jf = Xi("transitionend"),
    Uf = new Map,
    zs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vn(e, t) {
    Uf.set(e, t), In(t, [e])
}
for (var Ro = 0; Ro < zs.length; Ro++) {
    var _o = zs[Ro],
        gm = _o.toLowerCase(),
        wm = _o[0].toUpperCase() + _o.slice(1);
    vn(gm, "on" + wm)
}
vn(Ff, "onAnimationEnd");
vn(zf, "onAnimationIteration");
vn(If, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(jf, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
In("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
In("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));

function Is(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gp(r, t, void 0, e), e.currentTarget = null
}

function Af(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        u = a.instance,
                        s = a.currentTarget;
                    if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
                    Is(l, a, s), i = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], u = a.instance, s = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
                        Is(l, a, s), i = u
                    }
        }
    }
    if (gi) throw e = ua, gi = !1, ua = null, e
}

function ie(e, t) {
    var n = t[ga];
    n === void 0 && (n = t[ga] = new Set);
    var r = e + "__bubble";
    n.has(r) || ($f(t, e, 2, !1), n.add(r))
}

function Lo(e, t, n) {
    var r = 0;
    t && (r |= 4), $f(n, e, r, t)
}
var Vl = "_reactListening" + Math.random().toString(36).slice(2);

function al(e) {
    if (!e[Vl]) {
        e[Vl] = !0, Qc.forEach(function(n) {
            n !== "selectionchange" && (Sm.has(n) || Lo(n, !1, e), Lo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vl] || (t[Vl] = !0, Lo("selectionchange", !1, t))
    }
}

function $f(e, t, n, r) {
    switch (kf(t)) {
        case 1:
            var l = Fp;
            break;
        case 4:
            l = zp;
            break;
        default:
            l = nu
    }
    n = l.bind(null, t, n, e), l = void 0, !aa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function To(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = xn(a), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = i = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    sf(function() {
        var s = i,
            f = qa(n),
            c = [];
        e: {
            var h = Uf.get(e);
            if (h !== void 0) {
                var E = lu,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (ii(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        E = Gp;
                        break;
                    case "focusin":
                        g = "focus", E = xo;
                        break;
                    case "focusout":
                        g = "blur", E = xo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        E = xo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        E = Cs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        E = Up;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        E = bp;
                        break;
                    case Ff:
                    case zf:
                    case If:
                        E = Bp;
                        break;
                    case jf:
                        E = tm;
                        break;
                    case "scroll":
                        E = Ip;
                        break;
                    case "wheel":
                        E = rm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        E = Wp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        E = Rs
                }
                var S = (t & 4) !== 0,
                    _ = !S && e === "scroll",
                    v = S ? h !== null ? h + "Capture" : null : h;
                S = [];
                for (var d = s, p; d !== null;) {
                    p = d;
                    var k = p.stateNode;
                    if (p.tag === 5 && k !== null && (p = k, v !== null && (k = tl(d, v), k != null && S.push(ul(d, k, p)))), _) break;
                    d = d.return
                }
                0 < S.length && (h = new E(h, g, null, n, f), c.push({
                    event: h,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", h && n !== ia && (g = n.relatedTarget || n.fromElement) && (xn(g) || g[Ht])) break e;
                if ((E || h) && (h = f.window === f ? f : (h = f.ownerDocument) ? h.defaultView || h.parentWindow : window, E ? (g = n.relatedTarget || n.toElement, E = s, g = g ? xn(g) : null, g !== null && (_ = jn(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (E = null, g = s), E !== g)) {
                    if (S = Cs, k = "onMouseLeave", v = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (S = Rs, k = "onPointerLeave", v = "onPointerEnter", d = "pointer"), _ = E == null ? h : Gn(E), p = g == null ? h : Gn(g), h = new S(k, d + "leave", E, n, f), h.target = _, h.relatedTarget = p, k = null, xn(f) === s && (S = new S(v, d + "enter", g, n, f), S.target = p, S.relatedTarget = _, k = S), _ = k, E && g) t: {
                        for (S = E, v = g, d = 0, p = S; p; p = Wn(p)) d++;
                        for (p = 0, k = v; k; k = Wn(k)) p++;
                        for (; 0 < d - p;) S = Wn(S),
                        d--;
                        for (; 0 < p - d;) v = Wn(v),
                        p--;
                        for (; d--;) {
                            if (S === v || v !== null && S === v.alternate) break t;
                            S = Wn(S), v = Wn(v)
                        }
                        S = null
                    }
                    else S = null;
                    E !== null && js(c, h, E, S, !1), g !== null && _ !== null && js(c, _, g, S, !0)
                }
            }
            e: {
                if (h = s ? Gn(s) : window, E = h.nodeName && h.nodeName.toLowerCase(), E === "select" || E === "input" && h.type === "file") var L = cm;
                else if (Ts(h))
                    if (Tf) L = pm;
                    else {
                        L = dm;
                        var y = fm
                    }
                else(E = h.nodeName) && E.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (L = hm);
                if (L && (L = L(e, s))) {
                    Lf(c, L, n, f);
                    break e
                }
                y && y(e, h, s),
                e === "focusout" && (y = h._wrapperState) && y.controlled && h.type === "number" && ea(h, "number", h.value)
            }
            switch (y = s ? Gn(s) : window, e) {
                case "focusin":
                    (Ts(y) || y.contentEditable === "true") && (Xn = y, da = s, Xr = null);
                    break;
                case "focusout":
                    Xr = da = Xn = null;
                    break;
                case "mousedown":
                    ha = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ha = !1, Fs(c, n, f);
                    break;
                case "selectionchange":
                    if (ym) break;
                case "keydown":
                case "keyup":
                    Fs(c, n, f)
            }
            var P;
            if (ou) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Yn ? Rf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (Pf && n.locale !== "ko" && (Yn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Yn && (P = Cf()) : (nn = f, ru = "value" in nn ? nn.value : nn.textContent, Yn = !0)), y = ki(s, T), 0 < y.length && (T = new Ps(T, e, null, n, f), c.push({
                event: T,
                listeners: y
            }), P ? T.data = P : (P = _f(n), P !== null && (T.data = P)))),
            (P = im ? om(e, n) : am(e, n)) && (s = ki(s, "onBeforeInput"), 0 < s.length && (f = new Ps("onBeforeInput", "beforeinput", null, n, f), c.push({
                event: f,
                listeners: s
            }), f.data = P))
        }
        Af(c, t)
    })
}

function ul(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ki(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = tl(e, n), i != null && r.unshift(ul(e, i, l)), i = tl(e, t), i != null && r.push(ul(e, i, l))), e = e.return
    }
    return r
}

function Wn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function js(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            s = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && s !== null && (a = s, l ? (u = tl(n, i), u != null && o.unshift(ul(n, u, a))) : l || (u = tl(n, i), u != null && o.push(ul(n, u, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Em = /\r\n?/g,
    xm = /\u0000|\uFFFD/g;

function Us(e) {
    return (typeof e == "string" ? e : "" + e).replace(Em, `
`).replace(xm, "")
}

function Kl(e, t, n) {
    if (t = Us(t), Us(e) !== t && n) throw Error(N(425))
}

function Ci() {}
var pa = null,
    ma = null;

function va(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0,
    km = typeof clearTimeout == "function" ? clearTimeout : void 0,
    As = typeof Promise == "function" ? Promise : void 0,
    Cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof As < "u" ? function(e) {
        return As.resolve(null).then(e).catch(Pm)
    } : ya;

function Pm(e) {
    setTimeout(function() {
        throw e
    })
}

function No(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), ll(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    ll(t)
}

function un(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function $s(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Er = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + Er,
    sl = "__reactProps$" + Er,
    Ht = "__reactContainer$" + Er,
    ga = "__reactEvents$" + Er,
    Rm = "__reactListeners$" + Er,
    _m = "__reactHandles$" + Er;

function xn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ht] || n[_t]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = $s(e); e !== null;) {
                    if (n = e[_t]) return n;
                    e = $s(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Sl(e) {
    return e = e[_t] || e[Ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function Ji(e) {
    return e[sl] || null
}
var wa = [],
    Zn = -1;

function yn(e) {
    return {
        current: e
    }
}

function oe(e) {
    0 > Zn || (e.current = wa[Zn], wa[Zn] = null, Zn--)
}

function re(e, t) {
    Zn++, wa[Zn] = e.current, e.current = t
}
var pn = {},
    ze = yn(pn),
    Ve = yn(!1),
    Nn = pn;

function fr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Ke(e) {
    return e = e.childContextTypes, e != null
}

function Pi() {
    oe(Ve), oe(ze)
}

function Bs(e, t, n) {
    if (ze.current !== pn) throw Error(N(168));
    re(ze, t), re(Ve, n)
}

function Bf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(N(108, fp(e) || "Unknown", l));
    return he({}, n, r)
}

function Ri(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Nn = ze.current, re(ze, e), re(Ve, Ve.current), !0
}

function Hs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = Bf(e, t, Nn), r.__reactInternalMemoizedMergedChildContext = e, oe(Ve), oe(ze), re(ze, e)) : oe(Ve), re(Ve, n)
}
var It = null,
    Gi = !1,
    Do = !1;

function Hf(e) {
    It === null ? It = [e] : It.push(e)
}

function Lm(e) {
    Gi = !0, Hf(e)
}

function gn() {
    if (!Do && It !== null) {
        Do = !0;
        var e = 0,
            t = Z;
        try {
            var n = It;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            It = null, Gi = !1
        } catch (l) {
            throw It !== null && (It = It.slice(e + 1)), hf(ba, gn), l
        } finally {
            Z = t, Do = !1
        }
    }
    return null
}
var qn = [],
    bn = 0,
    _i = null,
    Li = 0,
    lt = [],
    it = 0,
    Dn = null,
    Ut = 1,
    At = "";

function Sn(e, t) {
    qn[bn++] = Li, qn[bn++] = _i, _i = e, Li = t
}

function Wf(e, t, n) {
    lt[it++] = Ut, lt[it++] = At, lt[it++] = Dn, Dn = e;
    var r = Ut;
    e = At;
    var l = 32 - yt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - yt(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ut = 1 << 32 - yt(t) + l | n << l | r, At = i + e
    } else Ut = 1 << i | n << l | r, At = e
}

function uu(e) {
    e.return !== null && (Sn(e, 1), Wf(e, 1, 0))
}

function su(e) {
    for (; e === _i;) _i = qn[--bn], qn[bn] = null, Li = qn[--bn], qn[bn] = null;
    for (; e === Dn;) Dn = lt[--it], lt[it] = null, At = lt[--it], lt[it] = null, Ut = lt[--it], lt[it] = null
}
var Ze = null,
    Ge = null,
    ce = !1,
    vt = null;

function Vf(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ws(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = un(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Dn !== null ? {
                id: Ut,
                overflow: At
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = ot(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Ge = null, !0) : !1;
        default:
            return !1
    }
}

function Sa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ea(e) {
    if (ce) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!Ws(e, t)) {
                if (Sa(e)) throw Error(N(418));
                t = un(n.nextSibling);
                var r = Ze;
                t && Ws(e, t) ? Vf(r, n) : (e.flags = e.flags & -4097 | 2, ce = !1, Ze = e)
            }
        } else {
            if (Sa(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, ce = !1, Ze = e
        }
    }
}

function Vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ze = e
}

function Ql(e) {
    if (e !== Ze) return !1;
    if (!ce) return Vs(e), ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !va(e.type, e.memoizedProps)), t && (t = Ge)) {
        if (Sa(e)) throw Kf(), Error(N(418));
        for (; t;) Vf(e, t), t = un(t.nextSibling)
    }
    if (Vs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = un(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else Ge = Ze ? un(e.stateNode.nextSibling) : null;
    return !0
}

function Kf() {
    for (var e = Ge; e;) e = un(e.nextSibling)
}

function dr() {
    Ge = Ze = null, ce = !1
}

function cu(e) {
    vt === null ? vt = [e] : vt.push(e)
}
var Tm = Kt.ReactCurrentBatchConfig;

function Mr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                o === null ? delete a[i] : a[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function Yl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ks(e) {
    var t = e._init;
    return t(e._payload)
}

function Qf(e) {
    function t(v, d) {
        if (e) {
            var p = v.deletions;
            p === null ? (v.deletions = [d], v.flags |= 16) : p.push(d)
        }
    }

    function n(v, d) {
        if (!e) return null;
        for (; d !== null;) t(v, d), d = d.sibling;
        return null
    }

    function r(v, d) {
        for (v = new Map; d !== null;) d.key !== null ? v.set(d.key, d) : v.set(d.index, d), d = d.sibling;
        return v
    }

    function l(v, d) {
        return v = dn(v, d), v.index = 0, v.sibling = null, v
    }

    function i(v, d, p) {
        return v.index = p, e ? (p = v.alternate, p !== null ? (p = p.index, p < d ? (v.flags |= 2, d) : p) : (v.flags |= 2, d)) : (v.flags |= 1048576, d)
    }

    function o(v) {
        return e && v.alternate === null && (v.flags |= 2), v
    }

    function a(v, d, p, k) {
        return d === null || d.tag !== 6 ? (d = Uo(p, v.mode, k), d.return = v, d) : (d = l(d, p), d.return = v, d)
    }

    function u(v, d, p, k) {
        var L = p.type;
        return L === Qn ? f(v, d, p.props.children, k, p.key) : d !== null && (d.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qt && Ks(L) === d.type) ? (k = l(d, p.props), k.ref = Mr(v, d, p), k.return = v, k) : (k = di(p.type, p.key, p.props, null, v.mode, k), k.ref = Mr(v, d, p), k.return = v, k)
    }

    function s(v, d, p, k) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Ao(p, v.mode, k), d.return = v, d) : (d = l(d, p.children || []), d.return = v, d)
    }

    function f(v, d, p, k, L) {
        return d === null || d.tag !== 7 ? (d = Tn(p, v.mode, k, L), d.return = v, d) : (d = l(d, p), d.return = v, d)
    }

    function c(v, d, p) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = Uo("" + d, v.mode, p), d.return = v, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case Il:
                    return p = di(d.type, d.key, d.props, null, v.mode, p), p.ref = Mr(v, null, d), p.return = v, p;
                case Kn:
                    return d = Ao(d, v.mode, p), d.return = v, d;
                case qt:
                    var k = d._init;
                    return c(v, k(d._payload), p)
            }
            if ($r(d) || _r(d)) return d = Tn(d, v.mode, p, null), d.return = v, d;
            Yl(v, d)
        }
        return null
    }

    function h(v, d, p, k) {
        var L = d !== null ? d.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : a(v, d, "" + p, k);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Il:
                    return p.key === L ? u(v, d, p, k) : null;
                case Kn:
                    return p.key === L ? s(v, d, p, k) : null;
                case qt:
                    return L = p._init, h(v, d, L(p._payload), k)
            }
            if ($r(p) || _r(p)) return L !== null ? null : f(v, d, p, k, null);
            Yl(v, p)
        }
        return null
    }

    function E(v, d, p, k, L) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return v = v.get(p) || null, a(d, v, "" + k, L);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Il:
                    return v = v.get(k.key === null ? p : k.key) || null, u(d, v, k, L);
                case Kn:
                    return v = v.get(k.key === null ? p : k.key) || null, s(d, v, k, L);
                case qt:
                    var y = k._init;
                    return E(v, d, p, y(k._payload), L)
            }
            if ($r(k) || _r(k)) return v = v.get(p) || null, f(d, v, k, L, null);
            Yl(d, k)
        }
        return null
    }

    function g(v, d, p, k) {
        for (var L = null, y = null, P = d, T = d = 0, D = null; P !== null && T < p.length; T++) {
            P.index > T ? (D = P, P = null) : D = P.sibling;
            var I = h(v, P, p[T], k);
            if (I === null) {
                P === null && (P = D);
                break
            }
            e && P && I.alternate === null && t(v, P), d = i(I, d, T), y === null ? L = I : y.sibling = I, y = I, P = D
        }
        if (T === p.length) return n(v, P), ce && Sn(v, T), L;
        if (P === null) {
            for (; T < p.length; T++) P = c(v, p[T], k), P !== null && (d = i(P, d, T), y === null ? L = P : y.sibling = P, y = P);
            return ce && Sn(v, T), L
        }
        for (P = r(v, P); T < p.length; T++) D = E(P, v, T, p[T], k), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? T : D.key), d = i(D, d, T), y === null ? L = D : y.sibling = D, y = D);
        return e && P.forEach(function($) {
            return t(v, $)
        }), ce && Sn(v, T), L
    }

    function S(v, d, p, k) {
        var L = _r(p);
        if (typeof L != "function") throw Error(N(150));
        if (p = L.call(p), p == null) throw Error(N(151));
        for (var y = L = null, P = d, T = d = 0, D = null, I = p.next(); P !== null && !I.done; T++, I = p.next()) {
            P.index > T ? (D = P, P = null) : D = P.sibling;
            var $ = h(v, P, I.value, k);
            if ($ === null) {
                P === null && (P = D);
                break
            }
            e && P && $.alternate === null && t(v, P), d = i($, d, T), y === null ? L = $ : y.sibling = $, y = $, P = D
        }
        if (I.done) return n(v, P), ce && Sn(v, T), L;
        if (P === null) {
            for (; !I.done; T++, I = p.next()) I = c(v, I.value, k), I !== null && (d = i(I, d, T), y === null ? L = I : y.sibling = I, y = I);
            return ce && Sn(v, T), L
        }
        for (P = r(v, P); !I.done; T++, I = p.next()) I = E(P, v, T, I.value, k), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? T : I.key), d = i(I, d, T), y === null ? L = I : y.sibling = I, y = I);
        return e && P.forEach(function(b) {
            return t(v, b)
        }), ce && Sn(v, T), L
    }

    function _(v, d, p, k) {
        if (typeof p == "object" && p !== null && p.type === Qn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Il:
                    e: {
                        for (var L = p.key, y = d; y !== null;) {
                            if (y.key === L) {
                                if (L = p.type, L === Qn) {
                                    if (y.tag === 7) {
                                        n(v, y.sibling), d = l(y, p.props.children), d.return = v, v = d;
                                        break e
                                    }
                                } else if (y.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qt && Ks(L) === y.type) {
                                    n(v, y.sibling), d = l(y, p.props), d.ref = Mr(v, y, p), d.return = v, v = d;
                                    break e
                                }
                                n(v, y);
                                break
                            } else t(v, y);
                            y = y.sibling
                        }
                        p.type === Qn ? (d = Tn(p.props.children, v.mode, k, p.key), d.return = v, v = d) : (k = di(p.type, p.key, p.props, null, v.mode, k), k.ref = Mr(v, d, p), k.return = v, v = k)
                    }
                    return o(v);
                case Kn:
                    e: {
                        for (y = p.key; d !== null;) {
                            if (d.key === y)
                                if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                    n(v, d.sibling), d = l(d, p.children || []), d.return = v, v = d;
                                    break e
                                } else {
                                    n(v, d);
                                    break
                                }
                            else t(v, d);
                            d = d.sibling
                        }
                        d = Ao(p, v.mode, k),
                        d.return = v,
                        v = d
                    }
                    return o(v);
                case qt:
                    return y = p._init, _(v, d, y(p._payload), k)
            }
            if ($r(p)) return g(v, d, p, k);
            if (_r(p)) return S(v, d, p, k);
            Yl(v, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(v, d.sibling), d = l(d, p), d.return = v, v = d) : (n(v, d), d = Uo(p, v.mode, k), d.return = v, v = d), o(v)) : n(v, d)
    }
    return _
}
var hr = Qf(!0),
    Yf = Qf(!1),
    Ti = yn(null),
    Ni = null,
    er = null,
    fu = null;

function du() {
    fu = er = Ni = null
}

function hu(e) {
    var t = Ti.current;
    oe(Ti), e._currentValue = t
}

function xa(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function ur(e, t) {
    Ni = e, fu = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null)
}

function ut(e) {
    var t = e._currentValue;
    if (fu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, er === null) {
            if (Ni === null) throw Error(N(308));
            er = e, Ni.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else er = er.next = e;
    return t
}
var kn = null;

function pu(e) {
    kn === null ? kn = [e] : kn.push(e)
}

function Xf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, pu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Wt(e, r)
}

function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var bt = !1;

function mu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Jf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function $t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Y & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Wt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, pu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Wt(e, n)
}

function oi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eu(e, n)
    }
}

function Qs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Di(e, t, n, r) {
    var l = e.updateQueue;
    bt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            s = u.next;
        u.next = null, o === null ? i = s : o.next = s, o = u;
        var f = e.alternate;
        f !== null && (f = f.updateQueue, a = f.lastBaseUpdate, a !== o && (a === null ? f.firstBaseUpdate = s : a.next = s, f.lastBaseUpdate = u))
    }
    if (i !== null) {
        var c = l.baseState;
        o = 0, f = s = u = null, a = i;
        do {
            var h = a.lane,
                E = a.eventTime;
            if ((r & h) === h) {
                f !== null && (f = f.next = {
                    eventTime: E,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e,
                        S = a;
                    switch (h = t, E = n, S.tag) {
                        case 1:
                            if (g = S.payload, typeof g == "function") {
                                c = g.call(E, c, h);
                                break e
                            }
                            c = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = S.payload, h = typeof g == "function" ? g.call(E, c, h) : g, h == null) break e;
                            c = he({}, c, h);
                            break e;
                        case 2:
                            bt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [a] : h.push(a))
            } else E = {
                eventTime: E,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, f === null ? (s = f = E, u = c) : f = f.next = E, o |= h;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null
            }
        } while (!0);
        if (f === null && (u = c), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        On |= o, e.lanes = o, e.memoizedState = c
    }
}

function Ys(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(N(191, l));
                l.call(r)
            }
        }
}
var El = {},
    Tt = yn(El),
    cl = yn(El),
    fl = yn(El);

function Cn(e) {
    if (e === El) throw Error(N(174));
    return e
}

function vu(e, t) {
    switch (re(fl, t), re(cl, e), re(Tt, El), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : na(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = na(t, e)
    }
    oe(Tt), re(Tt, t)
}

function pr() {
    oe(Tt), oe(cl), oe(fl)
}

function Gf(e) {
    Cn(fl.current);
    var t = Cn(Tt.current),
        n = na(t, e.type);
    t !== n && (re(cl, e), re(Tt, n))
}

function yu(e) {
    cl.current === e && (oe(Tt), oe(cl))
}
var fe = yn(0);

function Mi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Mo = [];

function gu() {
    for (var e = 0; e < Mo.length; e++) Mo[e]._workInProgressVersionPrimary = null;
    Mo.length = 0
}
var ai = Kt.ReactCurrentDispatcher,
    Oo = Kt.ReactCurrentBatchConfig,
    Mn = 0,
    de = null,
    xe = null,
    Ce = null,
    Oi = !1,
    Jr = !1,
    dl = 0,
    Nm = 0;

function Me() {
    throw Error(N(321))
}

function wu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!wt(e[n], t[n])) return !1;
    return !0
}

function Su(e, t, n, r, l, i) {
    if (Mn = i, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ai.current = e === null || e.memoizedState === null ? Fm : zm, e = n(r, l), Jr) {
        i = 0;
        do {
            if (Jr = !1, dl = 0, 25 <= i) throw Error(N(301));
            i += 1, Ce = xe = null, t.updateQueue = null, ai.current = Im, e = n(r, l)
        } while (Jr)
    }
    if (ai.current = Fi, t = xe !== null && xe.next !== null, Mn = 0, Ce = xe = de = null, Oi = !1, t) throw Error(N(300));
    return e
}

function Eu() {
    var e = dl !== 0;
    return dl = 0, e
}

function Rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e, Ce
}

function st() {
    if (xe === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = xe.next;
    var t = Ce === null ? de.memoizedState : Ce.next;
    if (t !== null) Ce = t, xe = e;
    else {
        if (e === null) throw Error(N(310));
        xe = e, e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null
        }, Ce === null ? de.memoizedState = Ce = e : Ce = Ce.next = e
    }
    return Ce
}

function hl(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Fo(e) {
    var t = st(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = xe,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var a = o = null,
            u = null,
            s = i;
        do {
            var f = s.lane;
            if ((Mn & f) === f) u !== null && (u = u.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var c = {
                    lane: f,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                u === null ? (a = u = c, o = r) : u = u.next = c, de.lanes |= f, On |= f
            }
            s = s.next
        } while (s !== null && s !== i);
        u === null ? o = r : u.next = a, wt(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, de.lanes |= i, On |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function zo(e) {
    var t = st(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        wt(i, t.memoizedState) || (We = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Zf() {}

function qf(e, t) {
    var n = de,
        r = st(),
        l = t(),
        i = !wt(r.memoizedState, l);
    if (i && (r.memoizedState = l, We = !0), r = r.queue, xu(td.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ce !== null && Ce.memoizedState.tag & 1) {
        if (n.flags |= 2048, pl(9, ed.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(N(349));
        Mn & 30 || bf(n, t, l)
    }
    return l
}

function bf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = de.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, de.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ed(e, t, n, r) {
    t.value = n, t.getSnapshot = r, nd(t) && rd(e)
}

function td(e, t, n) {
    return n(function() {
        nd(t) && rd(e)
    })
}

function nd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !wt(e, n)
    } catch {
        return !0
    }
}

function rd(e) {
    var t = Wt(e, 1);
    t !== null && gt(t, e, 1, -1)
}

function Xs(e) {
    var t = Rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hl,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Om.bind(null, de, e), [t.memoizedState, e]
}

function pl(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = de.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, de.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ld() {
    return st().memoizedState
}

function ui(e, t, n, r) {
    var l = Rt();
    de.flags |= e, l.memoizedState = pl(1 | t, n, void 0, r === void 0 ? null : r)
}

function Zi(e, t, n, r) {
    var l = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (xe !== null) {
        var o = xe.memoizedState;
        if (i = o.destroy, r !== null && wu(r, o.deps)) {
            l.memoizedState = pl(t, n, i, r);
            return
        }
    }
    de.flags |= e, l.memoizedState = pl(1 | t, n, i, r)
}

function Js(e, t) {
    return ui(8390656, 8, e, t)
}

function xu(e, t) {
    return Zi(2048, 8, e, t)
}

function id(e, t) {
    return Zi(4, 2, e, t)
}

function od(e, t) {
    return Zi(4, 4, e, t)
}

function ad(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function ud(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zi(4, 4, ad.bind(null, t, e), n)
}

function ku() {}

function sd(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function cd(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function fd(e, t, n) {
    return Mn & 21 ? (wt(n, t) || (n = vf(), de.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n)
}

function Dm(e, t) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Oo.transition;
    Oo.transition = {};
    try {
        e(!1), t()
    } finally {
        Z = n, Oo.transition = r
    }
}

function dd() {
    return st().memoizedState
}

function Mm(e, t, n) {
    var r = fn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, hd(e)) pd(t, n);
    else if (n = Xf(e, t, n, r), n !== null) {
        var l = $e();
        gt(n, e, r, l), md(n, t, r)
    }
}

function Om(e, t, n) {
    var r = fn(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (hd(e)) pd(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                a = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = a, wt(a, o)) {
                var u = t.interleaved;
                u === null ? (l.next = l, pu(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Xf(e, t, l, r), n !== null && (l = $e(), gt(n, e, r, l), md(n, t, r))
    }
}

function hd(e) {
    var t = e.alternate;
    return e === de || t !== null && t === de
}

function pd(e, t) {
    Jr = Oi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function md(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eu(e, n)
    }
}
var Fi = {
        readContext: ut,
        useCallback: Me,
        useContext: Me,
        useEffect: Me,
        useImperativeHandle: Me,
        useInsertionEffect: Me,
        useLayoutEffect: Me,
        useMemo: Me,
        useReducer: Me,
        useRef: Me,
        useState: Me,
        useDebugValue: Me,
        useDeferredValue: Me,
        useTransition: Me,
        useMutableSource: Me,
        useSyncExternalStore: Me,
        useId: Me,
        unstable_isNewReconciler: !1
    },
    Fm = {
        readContext: ut,
        useCallback: function(e, t) {
            return Rt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: ut,
        useEffect: Js,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, ui(4194308, 4, ad.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return ui(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return ui(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Rt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Rt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Mm.bind(null, de, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Rt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Xs,
        useDebugValue: ku,
        useDeferredValue: function(e) {
            return Rt().memoizedState = e
        },
        useTransition: function() {
            var e = Xs(!1),
                t = e[0];
            return e = Dm.bind(null, e[1]), Rt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = de,
                l = Rt();
            if (ce) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), Pe === null) throw Error(N(349));
                Mn & 30 || bf(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Js(td.bind(null, r, i, e), [e]), r.flags |= 2048, pl(9, ed.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Rt(),
                t = Pe.identifierPrefix;
            if (ce) {
                var n = At,
                    r = Ut;
                n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dl++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Nm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    zm = {
        readContext: ut,
        useCallback: sd,
        useContext: ut,
        useEffect: xu,
        useImperativeHandle: ud,
        useInsertionEffect: id,
        useLayoutEffect: od,
        useMemo: cd,
        useReducer: Fo,
        useRef: ld,
        useState: function() {
            return Fo(hl)
        },
        useDebugValue: ku,
        useDeferredValue: function(e) {
            var t = st();
            return fd(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = Fo(hl)[0],
                t = st().memoizedState;
            return [e, t]
        },
        useMutableSource: Zf,
        useSyncExternalStore: qf,
        useId: dd,
        unstable_isNewReconciler: !1
    },
    Im = {
        readContext: ut,
        useCallback: sd,
        useContext: ut,
        useEffect: xu,
        useImperativeHandle: ud,
        useInsertionEffect: id,
        useLayoutEffect: od,
        useMemo: cd,
        useReducer: zo,
        useRef: ld,
        useState: function() {
            return zo(hl)
        },
        useDebugValue: ku,
        useDeferredValue: function(e) {
            var t = st();
            return xe === null ? t.memoizedState = e : fd(t, xe.memoizedState, e)
        },
        useTransition: function() {
            var e = zo(hl)[0],
                t = st().memoizedState;
            return [e, t]
        },
        useMutableSource: Zf,
        useSyncExternalStore: qf,
        useId: dd,
        unstable_isNewReconciler: !1
    };

function ht(e, t) {
    if (e && e.defaultProps) {
        t = he({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function ka(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : he({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var qi = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? jn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            l = fn(e),
            i = $t(r, l);
        i.payload = t, n != null && (i.callback = n), t = sn(e, i, l), t !== null && (gt(t, e, l, r), oi(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = $e(),
            l = fn(e),
            i = $t(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = sn(e, i, l), t !== null && (gt(t, e, l, r), oi(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = $e(),
            r = fn(e),
            l = $t(n, r);
        l.tag = 2, t != null && (l.callback = t), t = sn(e, l, r), t !== null && (gt(t, e, r, n), oi(t, e, r))
    }
};

function Gs(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ol(n, r) || !ol(l, i) : !0
}

function vd(e, t, n) {
    var r = !1,
        l = pn,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = ut(i) : (l = Ke(t) ? Nn : ze.current, r = t.contextTypes, i = (r = r != null) ? fr(e, l) : pn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Zs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qi.enqueueReplaceState(t, t.state, null)
}

function Ca(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, mu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = ut(i) : (i = Ke(t) ? Nn : ze.current, l.context = fr(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (ka(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && qi.enqueueReplaceState(l, l.state, null), Di(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function mr(e, t) {
    try {
        var n = "",
            r = t;
        do n += cp(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Io(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Pa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var jm = typeof WeakMap == "function" ? WeakMap : Map;

function yd(e, t, n) {
    n = $t(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ii || (Ii = !0, za = r), Pa(e, t)
    }, n
}

function gd(e, t, n) {
    n = $t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Pa(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Pa(e, t), typeof r != "function" && (cn === null ? cn = new Set([this]) : cn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function qs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new jm;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Zm.bind(null, e, t, n), t.then(e, e))
}

function bs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ec(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, sn(n, t, 1))), n.lanes |= 1), e)
}
var Um = Kt.ReactCurrentOwner,
    We = !1;

function Ae(e, t, n, r) {
    t.child = e === null ? Yf(t, null, n, r) : hr(t, e.child, n, r)
}

function tc(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return ur(t, l), r = Su(e, t, n, r, i, l), n = Eu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Vt(e, t, l)) : (ce && n && uu(t), t.flags |= 1, Ae(e, t, r, l), t.child)
}

function nc(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Du(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, wd(e, t, i, r, l)) : (e = di(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ol, n(o, r) && e.ref === t.ref) return Vt(e, t, l)
    }
    return t.flags |= 1, e = dn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function wd(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ol(i, r) && e.ref === t.ref)
            if (We = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (We = !0);
            else return t.lanes = e.lanes, Vt(e, t, l)
    }
    return Ra(e, t, n, r, l)
}

function Sd(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, re(nr, Xe), Xe |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, re(nr, Xe), Xe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, re(nr, Xe), Xe |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, re(nr, Xe), Xe |= r;
    return Ae(e, t, l, n), t.child
}

function Ed(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ra(e, t, n, r, l) {
    var i = Ke(n) ? Nn : ze.current;
    return i = fr(t, i), ur(t, l), n = Su(e, t, n, r, i, l), r = Eu(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Vt(e, t, l)) : (ce && r && uu(t), t.flags |= 1, Ae(e, t, n, l), t.child)
}

function rc(e, t, n, r, l) {
    if (Ke(n)) {
        var i = !0;
        Ri(t)
    } else i = !1;
    if (ur(t, l), t.stateNode === null) si(e, t), vd(t, n, r), Ca(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var u = o.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = ut(s) : (s = Ke(n) ? Nn : ze.current, s = fr(t, s));
        var f = n.getDerivedStateFromProps,
            c = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== s) && Zs(t, o, r, s), bt = !1;
        var h = t.memoizedState;
        o.state = h, Di(t, r, o, l), u = t.memoizedState, a !== r || h !== u || Ve.current || bt ? (typeof f == "function" && (ka(t, n, f, r), u = t.memoizedState), (a = bt || Gs(t, n, a, r, h, u, s)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Jf(e, t), a = t.memoizedProps, s = t.type === t.elementType ? a : ht(t.type, a), o.props = s, c = t.pendingProps, h = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = ut(u) : (u = Ke(n) ? Nn : ze.current, u = fr(t, u));
        var E = n.getDerivedStateFromProps;
        (f = typeof E == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || h !== u) && Zs(t, o, r, u), bt = !1, h = t.memoizedState, o.state = h, Di(t, r, o, l);
        var g = t.memoizedState;
        a !== c || h !== g || Ve.current || bt ? (typeof E == "function" && (ka(t, n, E, r), g = t.memoizedState), (s = bt || Gs(t, n, s, r, h, g, u) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = u, r = s) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return _a(e, t, n, r, i, l)
}

function _a(e, t, n, r, l, i) {
    Ed(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Hs(t, n, !1), Vt(e, t, i);
    r = t.stateNode, Um.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = hr(t, e.child, null, i), t.child = hr(t, null, a, i)) : Ae(e, t, a, i), t.memoizedState = r.state, l && Hs(t, n, !0), t.child
}

function xd(e) {
    var t = e.stateNode;
    t.pendingContext ? Bs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bs(e, t.context, !1), vu(e, t.containerInfo)
}

function lc(e, t, n, r, l) {
    return dr(), cu(l), t.flags |= 256, Ae(e, t, n, r), t.child
}
var La = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ta(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function kd(e, t, n) {
    var r = t.pendingProps,
        l = fe.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(fe, l & 1), e === null) return Ea(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = to(o, r, 0, null), e = Tn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ta(n), t.memoizedState = La, e) : Cu(t, o));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Am(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dn(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = dn(a, i) : (i = Tn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ta(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = La, r
    }
    return i = e.child, e = i.sibling, r = dn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Cu(e, t) {
    return t = to({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Xl(e, t, n, r) {
    return r !== null && cu(r), hr(t, e.child, null, n), e = Cu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Am(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Io(Error(N(422))), Xl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = to({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = Tn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && hr(t, e.child, null, o), t.child.memoizedState = Ta(o), t.memoizedState = La, i);
    if (!(t.mode & 1)) return Xl(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(N(419)), r = Io(i, r, void 0), Xl(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, We || a) {
        if (r = Pe, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Wt(e, l), gt(r, e, l, -1))
        }
        return Nu(), r = Io(Error(N(421))), Xl(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qm.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ge = un(l.nextSibling), Ze = t, ce = !0, vt = null, e !== null && (lt[it++] = Ut, lt[it++] = At, lt[it++] = Dn, Ut = e.id, At = e.overflow, Dn = t), t = Cu(t, r.children), t.flags |= 4096, t)
}

function ic(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), xa(e.return, t, n)
}

function jo(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Cd(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (Ae(e, t, r.children, n), r = fe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
            else if (e.tag === 19) ic(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (re(fe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Mi(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), jo(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Mi(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            jo(t, !0, n, null, i);
            break;
        case "together":
            jo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function si(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function $m(e, t, n) {
    switch (t.tag) {
        case 3:
            xd(t), dr();
            break;
        case 5:
            Gf(t);
            break;
        case 1:
            Ke(t.type) && Ri(t);
            break;
        case 4:
            vu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            re(Ti, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (re(fe, fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kd(e, t, n) : (re(fe, fe.current & 1), e = Vt(e, t, n), e !== null ? e.sibling : null);
            re(fe, fe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Cd(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(fe, fe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Sd(e, t, n)
    }
    return Vt(e, t, n)
}
var Pd, Na, Rd, _d;
Pd = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Na = function() {};
Rd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Cn(Tt.current);
        var i = null;
        switch (n) {
            case "input":
                l = qo(e, l), r = qo(e, r), i = [];
                break;
            case "select":
                l = he({}, l, {
                    value: void 0
                }), r = he({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = ta(e, l), r = ta(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ci)
        }
        ra(n, r);
        var o;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var a = l[s];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (br.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
        for (s in r) {
            var u = r[s];
            if (a = l != null ? l[s] : void 0, r.hasOwnProperty(s) && u !== a && (u != null || a != null))
                if (s === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (i || (i = []), i.push(s, n)), n = u;
            else s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(s, u)) : s === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(s, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (br.hasOwnProperty(s) ? (u != null && s === "onScroll" && ie("scroll", e), i || a === u || (i = [])) : (i = i || []).push(s, u))
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
_d = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Or(e, t) {
    if (!ce) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Bm(e, t, n) {
    var r = t.pendingProps;
    switch (su(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Oe(t), null;
        case 1:
            return Ke(t.type) && Pi(), Oe(t), null;
        case 3:
            return r = t.stateNode, pr(), oe(Ve), oe(ze), gu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, vt !== null && (Ua(vt), vt = null))), Na(e, t), Oe(t), null;
        case 5:
            yu(t);
            var l = Cn(fl.current);
            if (n = t.type, e !== null && t.stateNode != null) Rd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return Oe(t), null
                }
                if (e = Cn(Tt.current), Ql(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[_t] = t, r[sl] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ie("cancel", r), ie("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ie("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Hr.length; l++) ie(Hr[l], r);
                            break;
                        case "source":
                            ie("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ie("error", r), ie("load", r);
                            break;
                        case "details":
                            ie("toggle", r);
                            break;
                        case "input":
                            ps(r, i), ie("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, ie("invalid", r);
                            break;
                        case "textarea":
                            vs(r, i), ie("invalid", r)
                    }
                    ra(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Kl(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Kl(r.textContent, a, e), l = ["children", "" + a]) : br.hasOwnProperty(o) && a != null && o === "onScroll" && ie("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            jl(r), ms(r, i, !0);
                            break;
                        case "textarea":
                            jl(r), ys(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Ci)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ef(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[_t] = t, e[sl] = r, Pd(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = la(n, r), n) {
                            case "dialog":
                                ie("cancel", e), ie("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ie("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Hr.length; l++) ie(Hr[l], e);
                                l = r;
                                break;
                            case "source":
                                ie("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ie("error", e), ie("load", e), l = r;
                                break;
                            case "details":
                                ie("toggle", e), l = r;
                                break;
                            case "input":
                                ps(e, r), l = qo(e, r), ie("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = he({}, r, {
                                    value: void 0
                                }), ie("invalid", e);
                                break;
                            case "textarea":
                                vs(e, r), l = ta(e, r), ie("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ra(n, l),
                        a = l;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var u = a[i];
                                i === "style" ? rf(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && tf(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && el(e, u) : typeof u == "number" && el(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (br.hasOwnProperty(i) ? u != null && i === "onScroll" && ie("scroll", e) : u != null && Xa(e, i, u, o))
                            }
                        switch (n) {
                            case "input":
                                jl(e), ms(e, r, !1);
                                break;
                            case "textarea":
                                jl(e), ys(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + hn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? lr(e, !!r.multiple, i, !1) : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Ci)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Oe(t), null;
        case 6:
            if (e && t.stateNode != null) _d(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = Cn(fl.current), Cn(Tt.current), Ql(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[_t] = t, (i = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
                        case 3:
                            Kl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Kl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[_t] = t, t.stateNode = r
            }
            return Oe(t), null;
        case 13:
            if (oe(fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ce && Ge !== null && t.mode & 1 && !(t.flags & 128)) Kf(), dr(), t.flags |= 98560, i = !1;
                else if (i = Ql(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(N(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
                        i[_t] = t
                    } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Oe(t), i = !1
                } else vt !== null && (Ua(vt), vt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Nu())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
        case 4:
            return pr(), Na(e, t), e === null && al(t.stateNode.containerInfo), Oe(t), null;
        case 10:
            return hu(t.type._context), Oe(t), null;
        case 17:
            return Ke(t.type) && Pi(), Oe(t), null;
        case 19:
            if (oe(fe), i = t.memoizedState, i === null) return Oe(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) Or(i, !1);
                else {
                    if (ke !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Mi(e), o !== null) {
                                for (t.flags |= 128, Or(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return re(fe, fe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ye() > vr && (t.flags |= 128, r = !0, Or(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Mi(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Or(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !ce) return Oe(t), null
                    } else 2 * ye() - i.renderingStartTime > vr && n !== 1073741824 && (t.flags |= 128, r = !0, Or(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ye(), t.sibling = null, n = fe.current, re(fe, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
        case 22:
        case 23:
            return Tu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function Hm(e, t) {
    switch (su(t), t.tag) {
        case 1:
            return Ke(t.type) && Pi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return pr(), oe(Ve), oe(ze), gu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return yu(t), null;
        case 13:
            if (oe(fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                dr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return oe(fe), null;
        case 4:
            return pr(), null;
        case 10:
            return hu(t.type._context), null;
        case 22:
        case 23:
            return Tu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Jl = !1,
    Fe = !1,
    Wm = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function tr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ve(e, t, r)
        } else n.current = null
}

function Da(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var oc = !1;

function Vm(e, t) {
    if (pa = Ei, e = Mf(), au(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    u = -1,
                    s = 0,
                    f = 0,
                    c = e,
                    h = null;
                t: for (;;) {
                    for (var E; c !== n || l !== 0 && c.nodeType !== 3 || (a = o + l), c !== i || r !== 0 && c.nodeType !== 3 || (u = o + r), c.nodeType === 3 && (o += c.nodeValue.length), (E = c.firstChild) !== null;) h = c, c = E;
                    for (;;) {
                        if (c === e) break t;
                        if (h === n && ++s === l && (a = o), h === i && ++f === r && (u = o), (E = c.nextSibling) !== null) break;
                        c = h, h = c.parentNode
                    }
                    c = E
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ma = {
            focusedElem: e,
            selectionRange: n
        }, Ei = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var S = g.memoizedProps,
                                    _ = g.memoizedState,
                                    v = t.stateNode,
                                    d = v.getSnapshotBeforeUpdate(t.elementType === t.type ? S : ht(t.type, S), _);
                                v.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (k) {
                    ve(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return g = oc, oc = !1, g
}

function Gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Da(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function bi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ma(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ld(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_t], delete t[sl], delete t[ga], delete t[Rm], delete t[_m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Td(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ac(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Td(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Oa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ci));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oa(e, t, n), e = e.sibling; e !== null;) Oa(e, t, n), e = e.sibling
}

function Fa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Fa(e, t, n), e = e.sibling; e !== null;) Fa(e, t, n), e = e.sibling
}
var Te = null,
    pt = !1;

function Gt(e, t, n) {
    for (n = n.child; n !== null;) Nd(e, t, n), n = n.sibling
}

function Nd(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function") try {
        Lt.onCommitFiberUnmount(Ki, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Fe || tr(n, t);
        case 6:
            var r = Te,
                l = pt;
            Te = null, Gt(e, t, n), Te = r, pt = l, Te !== null && (pt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
            break;
        case 18:
            Te !== null && (pt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? No(e.parentNode, n) : e.nodeType === 1 && No(e, n), ll(e)) : No(Te, n.stateNode));
            break;
        case 4:
            r = Te, l = pt, Te = n.stateNode.containerInfo, pt = !0, Gt(e, t, n), Te = r, pt = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && Da(n, t, o), l = l.next
                } while (l !== r)
            }
            Gt(e, t, n);
            break;
        case 1:
            if (!Fe && (tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ve(n, t, a)
            }
            Gt(e, t, n);
            break;
        case 21:
            Gt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null, Gt(e, t, n), Fe = r) : Gt(e, t, n);
            break;
        default:
            Gt(e, t, n)
    }
}

function uc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Wm), t.forEach(function(r) {
            var l = bm.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Te = a.stateNode, pt = !1;
                            break e;
                        case 3:
                            Te = a.stateNode.containerInfo, pt = !0;
                            break e;
                        case 4:
                            Te = a.stateNode.containerInfo, pt = !0;
                            break e
                    }
                    a = a.return
                }
                if (Te === null) throw Error(N(160));
                Nd(i, o, l), Te = null, pt = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (s) {
                ve(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Dd(t, e), t = t.sibling
}

function Dd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (dt(t, e), Pt(e), r & 4) {
                try {
                    Gr(3, e, e.return), bi(3, e)
                } catch (S) {
                    ve(e, e.return, S)
                }
                try {
                    Gr(5, e, e.return)
                } catch (S) {
                    ve(e, e.return, S)
                }
            }
            break;
        case 1:
            dt(t, e), Pt(e), r & 512 && n !== null && tr(n, n.return);
            break;
        case 5:
            if (dt(t, e), Pt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    el(l, "")
                } catch (S) {
                    ve(e, e.return, S)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && qc(l, i), la(a, o);
                    var s = la(a, i);
                    for (o = 0; o < u.length; o += 2) {
                        var f = u[o],
                            c = u[o + 1];
                        f === "style" ? rf(l, c) : f === "dangerouslySetInnerHTML" ? tf(l, c) : f === "children" ? el(l, c) : Xa(l, f, c, s)
                    }
                    switch (a) {
                        case "input":
                            bo(l, i);
                            break;
                        case "textarea":
                            bc(l, i);
                            break;
                        case "select":
                            var h = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var E = i.value;
                            E != null ? lr(l, !!i.multiple, E, !1) : h !== !!i.multiple && (i.defaultValue != null ? lr(l, !!i.multiple, i.defaultValue, !0) : lr(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[sl] = i
                } catch (S) {
                    ve(e, e.return, S)
                }
            }
            break;
        case 6:
            if (dt(t, e), Pt(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (S) {
                    ve(e, e.return, S)
                }
            }
            break;
        case 3:
            if (dt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ll(t.containerInfo)
            } catch (S) {
                ve(e, e.return, S)
            }
            break;
        case 4:
            dt(t, e), Pt(e);
            break;
        case 13:
            dt(t, e), Pt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (_u = ye())), r & 4 && uc(e);
            break;
        case 22:
            if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Fe = (s = Fe) || f, dt(t, e), Fe = s) : dt(t, e), Pt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !f && e.mode & 1)
                    for (z = e, f = e.child; f !== null;) {
                        for (c = z = f; z !== null;) {
                            switch (h = z, E = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gr(4, h, h.return);
                                    break;
                                case 1:
                                    tr(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (S) {
                                            ve(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    tr(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        cc(c);
                                        continue
                                    }
                            }
                            E !== null ? (E.return = h, z = E) : cc(c)
                        }
                        f = f.sibling
                    }
                e: for (f = null, c = e;;) {
                    if (c.tag === 5) {
                        if (f === null) {
                            f = c;
                            try {
                                l = c.stateNode, s ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = c.stateNode, u = c.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = nf("display", o))
                            } catch (S) {
                                ve(e, e.return, S)
                            }
                        }
                    } else if (c.tag === 6) {
                        if (f === null) try {
                            c.stateNode.nodeValue = s ? "" : c.memoizedProps
                        } catch (S) {
                            ve(e, e.return, S)
                        }
                    } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                        c.child.return = c, c = c.child;
                        continue
                    }
                    if (c === e) break e;
                    for (; c.sibling === null;) {
                        if (c.return === null || c.return === e) break e;
                        f === c && (f = null), c = c.return
                    }
                    f === c && (f = null), c.sibling.return = c.return, c = c.sibling
                }
            }
            break;
        case 19:
            dt(t, e), Pt(e), r & 4 && uc(e);
            break;
        case 21:
            break;
        default:
            dt(t, e), Pt(e)
    }
}

function Pt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Td(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (el(l, ""), r.flags &= -33);
                    var i = ac(e);
                    Fa(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = ac(e);
                    Oa(e, a, o);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (u) {
            ve(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Km(e, t, n) {
    z = e, Md(e)
}

function Md(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var l = z,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Jl;
            if (!o) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || Fe;
                a = Jl;
                var s = Fe;
                if (Jl = o, (Fe = u) && !s)
                    for (z = l; z !== null;) o = z, u = o.child, o.tag === 22 && o.memoizedState !== null ? fc(l) : u !== null ? (u.return = o, z = u) : fc(l);
                for (; i !== null;) z = i, Md(i), i = i.sibling;
                z = l, Jl = a, Fe = s
            }
            sc(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, z = i) : sc(e)
    }
}

function sc(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || bi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Ys(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ys(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var f = s.memoizedState;
                                if (f !== null) {
                                    var c = f.dehydrated;
                                    c !== null && ll(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                }
                Fe || t.flags & 512 && Ma(t)
            } catch (h) {
                ve(t, t.return, h)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function cc(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function fc(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        bi(4, t)
                    } catch (u) {
                        ve(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ve(t, l, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Ma(t)
                    } catch (u) {
                        ve(t, i, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ma(t)
                    } catch (u) {
                        ve(t, o, u)
                    }
            }
        } catch (u) {
            ve(t, t.return, u)
        }
        if (t === e) {
            z = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, z = a;
            break
        }
        z = t.return
    }
}
var Qm = Math.ceil,
    zi = Kt.ReactCurrentDispatcher,
    Pu = Kt.ReactCurrentOwner,
    at = Kt.ReactCurrentBatchConfig,
    Y = 0,
    Pe = null,
    Se = null,
    Ne = 0,
    Xe = 0,
    nr = yn(0),
    ke = 0,
    ml = null,
    On = 0,
    eo = 0,
    Ru = 0,
    Zr = null,
    He = null,
    _u = 0,
    vr = 1 / 0,
    zt = null,
    Ii = !1,
    za = null,
    cn = null,
    Gl = !1,
    rn = null,
    ji = 0,
    qr = 0,
    Ia = null,
    ci = -1,
    fi = 0;

function $e() {
    return Y & 6 ? ye() : ci !== -1 ? ci : ci = ye()
}

function fn(e) {
    return e.mode & 1 ? Y & 2 && Ne !== 0 ? Ne & -Ne : Tm.transition !== null ? (fi === 0 && (fi = vf()), fi) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : kf(e.type)), e) : 1
}

function gt(e, t, n, r) {
    if (50 < qr) throw qr = 0, Ia = null, Error(N(185));
    gl(e, n, r), (!(Y & 2) || e !== Pe) && (e === Pe && (!(Y & 2) && (eo |= n), ke === 4 && tn(e, Ne)), Qe(e, r), n === 1 && Y === 0 && !(t.mode & 1) && (vr = ye() + 500, Gi && gn()))
}

function Qe(e, t) {
    var n = e.callbackNode;
    Tp(e, t);
    var r = Si(e, e === Pe ? Ne : 0);
    if (r === 0) n !== null && Ss(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ss(n), t === 1) e.tag === 0 ? Lm(dc.bind(null, e)) : Hf(dc.bind(null, e)), Cm(function() {
            !(Y & 6) && gn()
        }), n = null;
        else {
            switch (yf(r)) {
                case 1:
                    n = ba;
                    break;
                case 4:
                    n = pf;
                    break;
                case 16:
                    n = wi;
                    break;
                case 536870912:
                    n = mf;
                    break;
                default:
                    n = wi
            }
            n = $d(n, Od.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Od(e, t) {
    if (ci = -1, fi = 0, Y & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (sr() && e.callbackNode !== n) return null;
    var r = Si(e, e === Pe ? Ne : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
    else {
        t = r;
        var l = Y;
        Y |= 2;
        var i = zd();
        (Pe !== e || Ne !== t) && (zt = null, vr = ye() + 500, Ln(e, t));
        do try {
            Jm();
            break
        } catch (a) {
            Fd(e, a)
        }
        while (!0);
        du(), zi.current = i, Y = l, Se !== null ? t = 0 : (Pe = null, Ne = 0, t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (l = sa(e), l !== 0 && (r = l, t = ja(e, l))), t === 1) throw n = ml, Ln(e, 0), tn(e, r), Qe(e, ye()), n;
        if (t === 6) tn(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Ym(l) && (t = Ui(e, r), t === 2 && (i = sa(e), i !== 0 && (r = i, t = ja(e, i))), t === 1)) throw n = ml, Ln(e, 0), tn(e, r), Qe(e, ye()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    En(e, He, zt);
                    break;
                case 3:
                    if (tn(e, r), (r & 130023424) === r && (t = _u + 500 - ye(), 10 < t)) {
                        if (Si(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            $e(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = ya(En.bind(null, e, He, zt), t);
                        break
                    }
                    En(e, He, zt);
                    break;
                case 4:
                    if (tn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - yt(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ya(En.bind(null, e, He, zt), r);
                        break
                    }
                    En(e, He, zt);
                    break;
                case 5:
                    En(e, He, zt);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Qe(e, ye()), e.callbackNode === n ? Od.bind(null, e) : null
}

function ja(e, t) {
    var n = Zr;
    return e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256), e = Ui(e, t), e !== 2 && (t = He, He = n, t !== null && Ua(t)), e
}

function Ua(e) {
    He === null ? He = e : He.push.apply(He, e)
}

function Ym(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!wt(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tn(e, t) {
    for (t &= ~Ru, t &= ~eo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - yt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function dc(e) {
    if (Y & 6) throw Error(N(327));
    sr();
    var t = Si(e, 0);
    if (!(t & 1)) return Qe(e, ye()), null;
    var n = Ui(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = sa(e);
        r !== 0 && (t = r, n = ja(e, r))
    }
    if (n === 1) throw n = ml, Ln(e, 0), tn(e, t), Qe(e, ye()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, He, zt), Qe(e, ye()), null
}

function Lu(e, t) {
    var n = Y;
    Y |= 1;
    try {
        return e(t)
    } finally {
        Y = n, Y === 0 && (vr = ye() + 500, Gi && gn())
    }
}

function Fn(e) {
    rn !== null && rn.tag === 0 && !(Y & 6) && sr();
    var t = Y;
    Y |= 1;
    var n = at.transition,
        r = Z;
    try {
        if (at.transition = null, Z = 1, e) return e()
    } finally {
        Z = r, at.transition = n, Y = t, !(Y & 6) && gn()
    }
}

function Tu() {
    Xe = nr.current, oe(nr)
}

function Ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, km(n)), Se !== null)
        for (n = Se.return; n !== null;) {
            var r = n;
            switch (su(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Pi();
                    break;
                case 3:
                    pr(), oe(Ve), oe(ze), gu();
                    break;
                case 5:
                    yu(r);
                    break;
                case 4:
                    pr();
                    break;
                case 13:
                    oe(fe);
                    break;
                case 19:
                    oe(fe);
                    break;
                case 10:
                    hu(r.type._context);
                    break;
                case 22:
                case 23:
                    Tu()
            }
            n = n.return
        }
    if (Pe = e, Se = e = dn(e.current, null), Ne = Xe = t, ke = 0, ml = null, Ru = eo = On = 0, He = Zr = null, kn !== null) {
        for (t = 0; t < kn.length; t++)
            if (n = kn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            }
        kn = null
    }
    return e
}

function Fd(e, t) {
    do {
        var n = Se;
        try {
            if (du(), ai.current = Fi, Oi) {
                for (var r = de.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Oi = !1
            }
            if (Mn = 0, Ce = xe = de = null, Jr = !1, dl = 0, Pu.current = null, n === null || n.return === null) {
                ke = 1, ml = t, Se = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    u = t;
                if (t = Ne, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var s = u,
                        f = a,
                        c = f.tag;
                    if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var h = f.alternate;
                        h ? (f.updateQueue = h.updateQueue, f.memoizedState = h.memoizedState, f.lanes = h.lanes) : (f.updateQueue = null, f.memoizedState = null)
                    }
                    var E = bs(o);
                    if (E !== null) {
                        E.flags &= -257, ec(E, o, a, i, t), E.mode & 1 && qs(i, s, t), t = E, u = s;
                        var g = t.updateQueue;
                        if (g === null) {
                            var S = new Set;
                            S.add(u), t.updateQueue = S
                        } else g.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            qs(i, s, t), Nu();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (ce && a.mode & 1) {
                    var _ = bs(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), ec(_, o, a, i, t), cu(mr(u, a));
                        break e
                    }
                }
                i = u = mr(u, a),
                ke !== 4 && (ke = 2),
                Zr === null ? Zr = [i] : Zr.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var v = yd(i, u, t);
                            Qs(i, v);
                            break e;
                        case 1:
                            a = u;
                            var d = i.type,
                                p = i.stateNode;
                            if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (cn === null || !cn.has(p)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var k = gd(i, a, t);
                                Qs(i, k);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            jd(n)
        } catch (L) {
            t = L, Se === n && n !== null && (Se = n = n.return);
            continue
        }
        break
    } while (!0)
}

function zd() {
    var e = zi.current;
    return zi.current = Fi, e === null ? Fi : e
}

function Nu() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Pe === null || !(On & 268435455) && !(eo & 268435455) || tn(Pe, Ne)
}

function Ui(e, t) {
    var n = Y;
    Y |= 2;
    var r = zd();
    (Pe !== e || Ne !== t) && (zt = null, Ln(e, t));
    do try {
        Xm();
        break
    } catch (l) {
        Fd(e, l)
    }
    while (!0);
    if (du(), Y = n, zi.current = r, Se !== null) throw Error(N(261));
    return Pe = null, Ne = 0, ke
}

function Xm() {
    for (; Se !== null;) Id(Se)
}

function Jm() {
    for (; Se !== null && !Sp();) Id(Se)
}

function Id(e) {
    var t = Ad(e.alternate, e, Xe);
    e.memoizedProps = e.pendingProps, t === null ? jd(e) : Se = t, Pu.current = null
}

function jd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Hm(n, t), n !== null) {
                n.flags &= 32767, Se = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ke = 6, Se = null;
                return
            }
        } else if (n = Bm(n, t, Xe), n !== null) {
            Se = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Se = t;
            return
        }
        Se = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}

function En(e, t, n) {
    var r = Z,
        l = at.transition;
    try {
        at.transition = null, Z = 1, Gm(e, t, n, r)
    } finally {
        at.transition = l, Z = r
    }
    return null
}

function Gm(e, t, n, r) {
    do sr(); while (rn !== null);
    if (Y & 6) throw Error(N(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Np(e, i), e === Pe && (Se = Pe = null, Ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Gl || (Gl = !0, $d(wi, function() {
            return sr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = at.transition, at.transition = null;
        var o = Z;
        Z = 1;
        var a = Y;
        Y |= 4, Pu.current = null, Vm(e, n), Dd(n, e), vm(ma), Ei = !!pa, ma = pa = null, e.current = n, Km(n), Ep(), Y = a, Z = o, at.transition = i
    } else e.current = n;
    if (Gl && (Gl = !1, rn = e, ji = l), i = e.pendingLanes, i === 0 && (cn = null), Cp(n.stateNode), Qe(e, ye()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Ii) throw Ii = !1, e = za, za = null, e;
    return ji & 1 && e.tag !== 0 && sr(), i = e.pendingLanes, i & 1 ? e === Ia ? qr++ : (qr = 0, Ia = e) : qr = 0, gn(), null
}

function sr() {
    if (rn !== null) {
        var e = yf(ji),
            t = at.transition,
            n = Z;
        try {
            if (at.transition = null, Z = 16 > e ? 16 : e, rn === null) var r = !1;
            else {
                if (e = rn, rn = null, ji = 0, Y & 6) throw Error(N(331));
                var l = Y;
                for (Y |= 4, z = e.current; z !== null;) {
                    var i = z,
                        o = i.child;
                    if (z.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var s = a[u];
                                for (z = s; z !== null;) {
                                    var f = z;
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Gr(8, f, i)
                                    }
                                    var c = f.child;
                                    if (c !== null) c.return = f, z = c;
                                    else
                                        for (; z !== null;) {
                                            f = z;
                                            var h = f.sibling,
                                                E = f.return;
                                            if (Ld(f), f === s) {
                                                z = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = E, z = h;
                                                break
                                            }
                                            z = E
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var S = g.child;
                                if (S !== null) {
                                    g.child = null;
                                    do {
                                        var _ = S.sibling;
                                        S.sibling = null, S = _
                                    } while (S !== null)
                                }
                            }
                            z = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, z = o;
                    else e: for (; z !== null;) {
                        if (i = z, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Gr(9, i, i.return)
                        }
                        var v = i.sibling;
                        if (v !== null) {
                            v.return = i.return, z = v;
                            break e
                        }
                        z = i.return
                    }
                }
                var d = e.current;
                for (z = d; z !== null;) {
                    o = z;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null) p.return = o, z = p;
                    else e: for (o = d; z !== null;) {
                        if (a = z, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    bi(9, a)
                            }
                        } catch (L) {
                            ve(a, a.return, L)
                        }
                        if (a === o) {
                            z = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, z = k;
                            break e
                        }
                        z = a.return
                    }
                }
                if (Y = l, gn(), Lt && typeof Lt.onPostCommitFiberRoot == "function") try {
                    Lt.onPostCommitFiberRoot(Ki, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Z = n, at.transition = t
        }
    }
    return !1
}

function hc(e, t, n) {
    t = mr(n, t), t = yd(e, t, 1), e = sn(e, t, 1), t = $e(), e !== null && (gl(e, 1, t), Qe(e, t))
}

function ve(e, t, n) {
    if (e.tag === 3) hc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                hc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
                    e = mr(n, e), e = gd(t, e, 1), t = sn(t, e, 1), e = $e(), t !== null && (gl(t, 1, e), Qe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Zm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Ne & n) === n && (ke === 4 || ke === 3 && (Ne & 130023424) === Ne && 500 > ye() - _u ? Ln(e, 0) : Ru |= n), Qe(e, t)
}

function Ud(e, t) {
    t === 0 && (e.mode & 1 ? (t = $l, $l <<= 1, !($l & 130023424) && ($l = 4194304)) : t = 1);
    var n = $e();
    e = Wt(e, t), e !== null && (gl(e, t, n), Qe(e, n))
}

function qm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ud(e, n)
}

function bm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(N(314))
    }
    r !== null && r.delete(t), Ud(e, n)
}
var Ad;
Ad = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current) We = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, $m(e, t, n);
            We = !!(e.flags & 131072)
        }
    else We = !1, ce && t.flags & 1048576 && Wf(t, Li, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            si(e, t), e = t.pendingProps;
            var l = fr(t, ze.current);
            ur(t, n), l = Su(null, t, r, e, l, n);
            var i = Eu();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (i = !0, Ri(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mu(t), l.updater = qi, t.stateNode = l, l._reactInternals = t, Ca(t, r, e, n), t = _a(null, t, r, !0, i, n)) : (t.tag = 0, ce && i && uu(t), Ae(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (si(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = tv(r), e = ht(r, e), l) {
                    case 0:
                        t = Ra(null, t, r, e, n);
                        break e;
                    case 1:
                        t = rc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = tc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = nc(null, t, r, ht(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), Ra(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), rc(e, t, r, l, n);
        case 3:
            e: {
                if (xd(t), e === null) throw Error(N(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                Jf(e, t),
                Di(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = mr(Error(N(423)), t), t = lc(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = mr(Error(N(424)), t), t = lc(e, t, r, n, l);
                    break e
                } else
                    for (Ge = un(t.stateNode.containerInfo.firstChild), Ze = t, ce = !0, vt = null, n = Yf(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (dr(), r === l) {
                        t = Vt(e, t, n);
                        break e
                    }
                    Ae(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Gf(t), e === null && Ea(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, va(r, l) ? o = null : i !== null && va(r, i) && (t.flags |= 32), Ed(e, t), Ae(e, t, o, n), t.child;
        case 6:
            return e === null && Ea(t), null;
        case 13:
            return kd(e, t, n);
        case 4:
            return vu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hr(t, null, r, n) : Ae(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), tc(e, t, r, l, n);
        case 7:
            return Ae(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ae(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ae(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, re(Ti, r._currentValue), r._currentValue = o, i !== null)
                    if (wt(i.value, o)) {
                        if (i.children === l.children && !Ve.current) {
                            t = Vt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = $t(-1, n & -n), u.tag = 2;
                                            var s = i.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var f = s.pending;
                                                f === null ? u.next = u : (u.next = f.next, f.next = u), s.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), xa(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(N(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), xa(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                Ae(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, ur(t, n), l = ut(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = ht(r, t.pendingProps), l = ht(r.type, l), nc(e, t, r, l, n);
        case 15:
            return wd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ht(r, l), si(e, t), t.tag = 1, Ke(r) ? (e = !0, Ri(t)) : e = !1, ur(t, n), vd(t, r, l), Ca(t, r, l, n), _a(null, t, r, !0, e, n);
        case 19:
            return Cd(e, t, n);
        case 22:
            return Sd(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function $d(e, t) {
    return hf(e, t)
}

function ev(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ot(e, t, n, r) {
    return new ev(e, t, n, r)
}

function Du(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function tv(e) {
    if (typeof e == "function") return Du(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ga) return 11;
        if (e === Za) return 14
    }
    return 2
}

function dn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function di(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Du(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Qn:
            return Tn(n.children, l, i, t);
        case Ja:
            o = 8, l |= 8;
            break;
        case Xo:
            return e = ot(12, n, t, l | 2), e.elementType = Xo, e.lanes = i, e;
        case Jo:
            return e = ot(13, n, t, l), e.elementType = Jo, e.lanes = i, e;
        case Go:
            return e = ot(19, n, t, l), e.elementType = Go, e.lanes = i, e;
        case Jc:
            return to(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Yc:
                    o = 10;
                    break e;
                case Xc:
                    o = 9;
                    break e;
                case Ga:
                    o = 11;
                    break e;
                case Za:
                    o = 14;
                    break e;
                case qt:
                    o = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = ot(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function Tn(e, t, n, r) {
    return e = ot(7, e, r, t), e.lanes = n, e
}

function to(e, t, n, r) {
    return e = ot(22, e, r, t), e.elementType = Jc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Uo(e, t, n) {
    return e = ot(6, e, null, t), e.lanes = n, e
}

function Ao(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function nv(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wo(0), this.expirationTimes = wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Mu(e, t, n, r, l, i, o, a, u) {
    return e = new nv(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = ot(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mu(i), e
}

function rv(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Kn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Bd(e) {
    if (!e) return pn;
    e = e._reactInternals;
    e: {
        if (jn(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ke(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ke(n)) return Bf(e, n, t)
    }
    return t
}

function Hd(e, t, n, r, l, i, o, a, u) {
    return e = Mu(n, r, !0, e, l, i, o, a, u), e.context = Bd(null), n = e.current, r = $e(), l = fn(n), i = $t(r, l), i.callback = t ? ? null, sn(n, i, l), e.current.lanes = l, gl(e, l, r), Qe(e, r), e
}

function no(e, t, n, r) {
    var l = t.current,
        i = $e(),
        o = fn(l);
    return n = Bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = sn(l, t, o), e !== null && (gt(e, l, o, i), oi(e, l, o)), o
}

function Ai(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function pc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ou(e, t) {
    pc(e, t), (e = e.alternate) && pc(e, t)
}

function lv() {
    return null
}
var Wd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Fu(e) {
    this._internalRoot = e
}
ro.prototype.render = Fu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    no(e, t, null, null)
};
ro.prototype.unmount = Fu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Fn(function() {
            no(null, e, null, null)
        }), t[Ht] = null
    }
};

function ro(e) {
    this._internalRoot = e
}
ro.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Sf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < en.length && t !== 0 && t < en[n].priority; n++);
        en.splice(n, 0, e), n === 0 && xf(e)
    }
};

function zu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function mc() {}

function iv(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var s = Ai(o);
                i.call(s)
            }
        }
        var o = Hd(t, r, e, 0, null, !1, !1, "", mc);
        return e._reactRootContainer = o, e[Ht] = o.current, al(e.nodeType === 8 ? e.parentNode : e), Fn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var s = Ai(u);
            a.call(s)
        }
    }
    var u = Mu(e, 0, !1, null, null, !1, !1, "", mc);
    return e._reactRootContainer = u, e[Ht] = u.current, al(e.nodeType === 8 ? e.parentNode : e), Fn(function() {
        no(t, u, n, r)
    }), u
}

function io(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = Ai(o);
                a.call(u)
            }
        }
        no(t, o, e, l)
    } else o = iv(n, t, e, l, r);
    return Ai(o)
}
gf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Br(t.pendingLanes);
                n !== 0 && (eu(t, n | 1), Qe(t, ye()), !(Y & 6) && (vr = ye() + 500, gn()))
            }
            break;
        case 13:
            Fn(function() {
                var r = Wt(e, 1);
                if (r !== null) {
                    var l = $e();
                    gt(r, e, 1, l)
                }
            }), Ou(e, 1)
    }
};
tu = function(e) {
    if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
            var n = $e();
            gt(t, e, 134217728, n)
        }
        Ou(e, 134217728)
    }
};
wf = function(e) {
    if (e.tag === 13) {
        var t = fn(e),
            n = Wt(e, t);
        if (n !== null) {
            var r = $e();
            gt(n, e, t, r)
        }
        Ou(e, t)
    }
};
Sf = function() {
    return Z
};
Ef = function(e, t) {
    var n = Z;
    try {
        return Z = e, t()
    } finally {
        Z = n
    }
};
oa = function(e, t, n) {
    switch (t) {
        case "input":
            if (bo(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Ji(r);
                        if (!l) throw Error(N(90));
                        Zc(r), bo(r, l)
                    }
                }
            }
            break;
        case "textarea":
            bc(e, n);
            break;
        case "select":
            t = n.value, t != null && lr(e, !!n.multiple, t, !1)
    }
};
af = Lu;
uf = Fn;
var ov = {
        usingClientEntryPoint: !1,
        Events: [Sl, Gn, Ji, lf, of , Lu]
    },
    Fr = {
        findFiberByHostInstance: xn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    av = {
        bundleType: Fr.bundleType,
        version: Fr.version,
        rendererPackageName: Fr.rendererPackageName,
        rendererConfig: Fr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = ff(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Fr.findFiberByHostInstance || lv,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zl.isDisabled && Zl.supportsFiber) try {
        Ki = Zl.inject(av), Lt = Zl
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zu(t)) throw Error(N(200));
    return rv(e, t, null, n)
};
be.createRoot = function(e, t) {
    if (!zu(e)) throw Error(N(299));
    var n = !1,
        r = "",
        l = Wd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Mu(e, 1, !1, null, null, n, !1, r, l), e[Ht] = t.current, al(e.nodeType === 8 ? e.parentNode : e), new Fu(t)
};
be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = ff(t), e = e === null ? null : e.stateNode, e
};
be.flushSync = function(e) {
    return Fn(e)
};
be.hydrate = function(e, t, n) {
    if (!lo(t)) throw Error(N(200));
    return io(null, e, t, !0, n)
};
be.hydrateRoot = function(e, t, n) {
    if (!zu(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = Wd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Hd(t, null, e, 1, n ? ? null, l, !1, i, o), e[Ht] = t.current, al(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ro(t)
};
be.render = function(e, t, n) {
    if (!lo(t)) throw Error(N(200));
    return io(null, e, t, !1, n)
};
be.unmountComponentAtNode = function(e) {
    if (!lo(e)) throw Error(N(40));
    return e._reactRootContainer ? (Fn(function() {
        io(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ht] = null
        })
    }), !0) : !1
};
be.unstable_batchedUpdates = Lu;
be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!lo(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return io(e, t, n, !1, r)
};
be.version = "18.3.1-next-f1338f8080-20240426";

function Vd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd)
    } catch (e) {
        console.error(e)
    }
}
Vd(), Wc.exports = be;
var Kd = Wc.exports;
const uv = np(Kd),
    sv = rp({
        __proto__: null,
        default: uv
    }, [Kd]);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, se.apply(this, arguments)
}
var we;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(we || (we = {}));
const vc = "popstate";

function v0(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: i,
            search: o,
            hash: a
        } = r.location;
        return vl("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : mn(l)
    }
    return fv(t, n, null, e)
}

function H(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function yr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function cv() {
    return Math.random().toString(36).substr(2, 8)
}

function yc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function vl(e, t, n, r) {
    return n === void 0 && (n = null), se({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Qt(t) : t, {
        state: n,
        key: t && t.key || r || cv()
    })
}

function mn(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Qt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function fv(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, a = we.Pop, u = null, s = f();
    s == null && (s = 0, o.replaceState(se({}, o.state, {
        idx: s
    }), ""));

    function f() {
        return (o.state || {
            idx: null
        }).idx
    }

    function c() {
        a = we.Pop;
        let _ = f(),
            v = _ == null ? null : _ - s;
        s = _, u && u({
            action: a,
            location: S.location,
            delta: v
        })
    }

    function h(_, v) {
        a = we.Push;
        let d = vl(S.location, _, v);
        s = f() + 1;
        let p = yc(d, s),
            k = S.createHref(d);
        try {
            o.pushState(p, "", k)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError") throw L;
            l.location.assign(k)
        }
        i && u && u({
            action: a,
            location: S.location,
            delta: 1
        })
    }

    function E(_, v) {
        a = we.Replace;
        let d = vl(S.location, _, v);
        s = f();
        let p = yc(d, s),
            k = S.createHref(d);
        o.replaceState(p, "", k), i && u && u({
            action: a,
            location: S.location,
            delta: 0
        })
    }

    function g(_) {
        let v = l.location.origin !== "null" ? l.location.origin : l.location.href,
            d = typeof _ == "string" ? _ : mn(_);
        return d = d.replace(/ $/, "%20"), H(v, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, v)
    }
    let S = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(_) {
            if (u) throw new Error("A history only accepts one active listener");
            return l.addEventListener(vc, c), u = _, () => {
                l.removeEventListener(vc, c), u = null
            }
        },
        createHref(_) {
            return t(l, _)
        },
        createURL: g,
        encodeLocation(_) {
            let v = g(_);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: h,
        replace: E,
        go(_) {
            return o.go(_)
        }
    };
    return S
}
var ne;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ne || (ne = {}));
const dv = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function hv(e) {
    return e.index === !0
}

function yl(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((l, i) => {
        let o = [...n, String(i)],
            a = typeof l.id == "string" ? l.id : o.join("-");
        if (H(l.index !== !0 || !l.children, "Cannot specify children on an index route"), H(!r[a], 'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`), hv(l)) {
            let u = se({}, l, t(l), {
                id: a
            });
            return r[a] = u, u
        } else {
            let u = se({}, l, t(l), {
                id: a,
                children: void 0
            });
            return r[a] = u, l.children && (u.children = yl(l.children, t, o, r)), u
        }
    })
}

function jt(e, t, n) {
    return n === void 0 && (n = "/"), hi(e, t, n, !1)
}

function hi(e, t, n, r) {
    let l = typeof t == "string" ? Qt(t) : t,
        i = ct(l.pathname || "/", n);
    if (i == null) return null;
    let o = Yd(e);
    pv(o);
    let a = null;
    for (let u = 0; a == null && u < o.length; ++u) {
        let s = Pv(i);
        a = kv(o[u], s, r)
    }
    return a
}

function Qd(e, t) {
    let {
        route: n,
        pathname: r,
        params: l
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}

function Yd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (i, o, a) => {
        let u = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i
        };
        u.relativePath.startsWith("/") && (H(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), u.relativePath = u.relativePath.slice(r.length));
        let s = Nt([r, u.relativePath]),
            f = n.concat(u);
        i.children && i.children.length > 0 && (H(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), Yd(i.children, t, f, s)), !(i.path == null && !i.index) && t.push({
            path: s,
            score: Ev(s, i.index),
            routesMeta: f
        })
    };
    return e.forEach((i, o) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
        else
            for (let u of Xd(i.path)) l(i, o, u)
    }), t
}

function Xd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [i, ""] : [i];
    let o = Xd(r.join("/")),
        a = [];
    return a.push(...o.map(u => u === "" ? i : [i, u].join("/"))), l && a.push(...o), a.map(u => e.startsWith("/") && u === "" ? "/" : u)
}

function pv(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : xv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const mv = /^:[\w-]+$/,
    vv = 3,
    yv = 2,
    gv = 1,
    wv = 10,
    Sv = -2,
    gc = e => e === "*";

function Ev(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(gc) && (r += Sv), t && (r += yv), n.filter(l => !gc(l)).reduce((l, i) => l + (mv.test(i) ? vv : i === "" ? gv : wv), r)
}

function xv(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function kv(e, t, n) {
    n === void 0 && (n = !1);
    let {
        routesMeta: r
    } = e, l = {}, i = "/", o = [];
    for (let a = 0; a < r.length; ++a) {
        let u = r[a],
            s = a === r.length - 1,
            f = i === "/" ? t : t.slice(i.length) || "/",
            c = $i({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: s
            }, f),
            h = u.route;
        if (!c && s && n && !r[r.length - 1].route.index && (c = $i({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: !1
            }, f)), !c) return null;
        Object.assign(l, c.params), o.push({
            params: l,
            pathname: Nt([i, c.pathname]),
            pathnameBase: Lv(Nt([i, c.pathnameBase])),
            route: h
        }), c.pathnameBase !== "/" && (i = Nt([i, c.pathnameBase]))
    }
    return o
}

function $i(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Cv(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let i = l[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = l.slice(1);
    return {
        params: r.reduce((s, f, c) => {
            let {
                paramName: h,
                isOptional: E
            } = f;
            if (h === "*") {
                let S = a[c] || "";
                o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const g = a[c];
            return E && !g ? s[h] = void 0 : s[h] = (g || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e
    }
}

function Cv(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), yr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, u) => (r.push({
            paramName: a,
            isOptional: u != null
        }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function Pv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return yr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function ct(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Rv(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? Qt(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : _v(n, t) : t,
        search: Tv(r),
        hash: Nv(l)
    }
}

function _v(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function $o(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Jd(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Iu(e, t) {
    let n = Jd(e);
    return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function ju(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Qt(e) : (l = se({}, e), H(!l.pathname || !l.pathname.includes("?"), $o("?", "pathname", "search", l)), H(!l.pathname || !l.pathname.includes("#"), $o("#", "pathname", "hash", l)), H(!l.search || !l.search.includes("#"), $o("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        a;
    if (o == null) a = n;
    else {
        let c = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";) h.shift(), c -= 1;
            l.pathname = h.join("/")
        }
        a = c >= 0 ? t[c] : "/"
    }
    let u = Rv(l, a),
        s = o && o !== "/" && o.endsWith("/"),
        f = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u
}
const Nt = e => e.join("/").replace(/\/\/+/g, "/"),
    Lv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Tv = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Nv = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Bi extends Error {}
class Dv {
    constructor(t, n) {
        this.pendingKeysSet = new Set, this.subscribers = new Set, this.deferredKeys = [], H(t && typeof t == "object" && !Array.isArray(t), "defer() only accepts plain objects");
        let r;
        this.abortPromise = new Promise((i, o) => r = o), this.controller = new AbortController;
        let l = () => r(new Bi("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", l), this.controller.signal.addEventListener("abort", l), this.data = Object.entries(t).reduce((i, o) => {
            let [a, u] = o;
            return Object.assign(i, {
                [a]: this.trackPromise(a, u)
            })
        }, {}), this.done && this.unlistenAbortSignal(), this.init = n
    }
    trackPromise(t, n) {
        if (!(n instanceof Promise)) return n;
        this.deferredKeys.push(t), this.pendingKeysSet.add(t);
        let r = Promise.race([n, this.abortPromise]).then(l => this.onSettle(r, t, void 0, l), l => this.onSettle(r, t, l));
        return r.catch(() => {}), Object.defineProperty(r, "_tracked", {
            get: () => !0
        }), r
    }
    onSettle(t, n, r, l) {
        if (this.controller.signal.aborted && r instanceof Bi) return this.unlistenAbortSignal(), Object.defineProperty(t, "_error", {
            get: () => r
        }), Promise.reject(r);
        if (this.pendingKeysSet.delete(n), this.done && this.unlistenAbortSignal(), r === void 0 && l === void 0) {
            let i = new Error('Deferred data for key "' + n + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
            return Object.defineProperty(t, "_error", {
                get: () => i
            }), this.emit(!1, n), Promise.reject(i)
        }
        return l === void 0 ? (Object.defineProperty(t, "_error", {
            get: () => r
        }), this.emit(!1, n), Promise.reject(r)) : (Object.defineProperty(t, "_data", {
            get: () => l
        }), this.emit(!1, n), l)
    }
    emit(t, n) {
        this.subscribers.forEach(r => r(t, n))
    }
    subscribe(t) {
        return this.subscribers.add(t), () => this.subscribers.delete(t)
    }
    cancel() {
        this.controller.abort(), this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)), this.emit(!0)
    }
    async resolveData(t) {
        let n = !1;
        if (!this.done) {
            let r = () => this.cancel();
            t.addEventListener("abort", r), n = await new Promise(l => {
                this.subscribe(i => {
                    t.removeEventListener("abort", r), (i || this.done) && l(i)
                })
            })
        }
        return n
    }
    get done() {
        return this.pendingKeysSet.size === 0
    }
    get unwrappedData() {
        return H(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((t, n) => {
            let [r, l] = n;
            return Object.assign(t, {
                [r]: Ov(l)
            })
        }, {})
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet)
    }
}

function Mv(e) {
    return e instanceof Promise && e._tracked === !0
}

function Ov(e) {
    if (!Mv(e)) return e;
    if (e._error) throw e._error;
    return e._data
}
const Gd = function(t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number" ? r = {
        status: r
    } : typeof r.status > "u" && (r.status = 302);
    let l = new Headers(r.headers);
    return l.set("Location", t), new Response(null, se({}, r, {
        headers: l
    }))
};
class gr {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function xl(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const Zd = ["post", "put", "patch", "delete"],
    Fv = new Set(Zd),
    zv = ["get", ...Zd],
    Iv = new Set(zv),
    jv = new Set([301, 302, 303, 307, 308]),
    Uv = new Set([307, 308]),
    Bo = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    qd = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    zr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    Uu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Av = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    bd = "remix-router-transitions";

function y0(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    H(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let w = e.detectErrorBoundary;
        l = x => ({
            hasErrorBoundary: w(x)
        })
    } else l = Av;
    let i = {},
        o = yl(e.routes, l, void 0, i),
        a, u = e.basename || "/",
        s = e.unstable_dataStrategy || Vv,
        f = e.unstable_patchRoutesOnMiss,
        c = se({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
        }, e.future),
        h = null,
        E = new Set,
        g = null,
        S = null,
        _ = null,
        v = e.hydrationData != null,
        d = jt(o, e.history.location, u),
        p = null;
    if (d == null && !f) {
        let w = Ue(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: x,
                route: C
            } = Lc(o);
        d = x, p = {
            [C.id]: w
        }
    }
    d && f && !e.hydrationData && po(d, o, e.history.location.pathname).active && (d = null);
    let k;
    if (!d) k = !1, d = [];
    else if (d.some(w => w.route.lazy)) k = !1;
    else if (!d.some(w => w.route.loader)) k = !0;
    else if (c.v7_partialHydration) {
        let w = e.hydrationData ? e.hydrationData.loaderData : null,
            x = e.hydrationData ? e.hydrationData.errors : null,
            C = R => R.route.loader ? typeof R.route.loader == "function" && R.route.loader.hydrate === !0 ? !1 : w && w[R.route.id] !== void 0 || x && x[R.route.id] !== void 0 : !0;
        if (x) {
            let R = d.findIndex(F => x[F.route.id] !== void 0);
            k = d.slice(0, R + 1).every(C)
        } else k = d.every(C)
    } else k = e.hydrationData != null;
    let L, y = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: d,
            initialized: k,
            navigation: Bo,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || p,
            fetchers: new Map,
            blockers: new Map
        },
        P = we.Pop,
        T = !1,
        D, I = !1,
        $ = new Map,
        b = null,
        te = !1,
        pe = !1,
        Re = [],
        tt = [],
        ae = new Map,
        O = 0,
        W = -1,
        V = new Map,
        X = new Set,
        le = new Map,
        kt = new Map,
        _e = new Set,
        ft = new Map,
        Ie = new Map,
        Un = new Map,
        so = !1;

    function jh() {
        if (h = e.history.listen(w => {
                let {
                    action: x,
                    location: C,
                    delta: R
                } = w;
                if (so) {
                    so = !1;
                    return
                }
                yr(Ie.size === 0 || R != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let F = as({
                    currentLocation: y.location,
                    nextLocation: C,
                    historyAction: x
                });
                if (F && R != null) {
                    so = !0, e.history.go(R * -1), Tl(F, {
                        state: "blocked",
                        location: C,
                        proceed() {
                            Tl(F, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: C
                            }), e.history.go(R)
                        },
                        reset() {
                            let j = new Map(y.blockers);
                            j.set(F, zr), je({
                                blockers: j
                            })
                        }
                    });
                    return
                }
                return wn(x, C)
            }), n) {
            ry(t, $);
            let w = () => ly(t, $);
            t.addEventListener("pagehide", w), b = () => t.removeEventListener("pagehide", w)
        }
        return y.initialized || wn(we.Pop, y.location, {
            initialHydration: !0
        }), L
    }

    function Uh() {
        h && h(), b && b(), E.clear(), D && D.abort(), y.fetchers.forEach((w, x) => Ll(x)), y.blockers.forEach((w, x) => os(x))
    }

    function Ah(w) {
        return E.add(w), () => E.delete(w)
    }

    function je(w, x) {
        x === void 0 && (x = {}), y = se({}, y, w);
        let C = [],
            R = [];
        c.v7_fetcherPersist && y.fetchers.forEach((F, j) => {
            F.state === "idle" && (_e.has(j) ? R.push(j) : C.push(j))
        }), [...E].forEach(F => F(y, {
            deletedFetchers: R,
            unstable_viewTransitionOpts: x.viewTransitionOpts,
            unstable_flushSync: x.flushSync === !0
        })), c.v7_fetcherPersist && (C.forEach(F => y.fetchers.delete(F)), R.forEach(F => Ll(F)))
    }

    function An(w, x, C) {
        var R, F;
        let {
            flushSync: j
        } = C === void 0 ? {} : C, B = y.actionData != null && y.navigation.formMethod != null && mt(y.navigation.formMethod) && y.navigation.state === "loading" && ((R = w.state) == null ? void 0 : R._isRedirect) !== !0, M;
        x.actionData ? Object.keys(x.actionData).length > 0 ? M = x.actionData : M = null : B ? M = y.actionData : M = null;
        let K = x.loaderData ? Rc(y.loaderData, x.loaderData, x.matches || [], x.errors) : y.loaderData,
            U = y.blockers;
        U.size > 0 && (U = new Map(U), U.forEach((G, ee) => U.set(ee, zr)));
        let A = T === !0 || y.navigation.formMethod != null && mt(y.navigation.formMethod) && ((F = w.state) == null ? void 0 : F._isRedirect) !== !0;
        a && (o = a, a = void 0), te || P === we.Pop || (P === we.Push ? e.history.push(w, w.state) : P === we.Replace && e.history.replace(w, w.state));
        let q;
        if (P === we.Pop) {
            let G = $.get(y.location.pathname);
            G && G.has(w.pathname) ? q = {
                currentLocation: y.location,
                nextLocation: w
            } : $.has(w.pathname) && (q = {
                currentLocation: w,
                nextLocation: y.location
            })
        } else if (I) {
            let G = $.get(y.location.pathname);
            G ? G.add(w.pathname) : (G = new Set([w.pathname]), $.set(y.location.pathname, G)), q = {
                currentLocation: y.location,
                nextLocation: w
            }
        }
        je(se({}, x, {
            actionData: M,
            loaderData: K,
            historyAction: P,
            location: w,
            initialized: !0,
            navigation: Bo,
            revalidation: "idle",
            restoreScrollPosition: ss(w, x.matches || y.matches),
            preventScrollReset: A,
            blockers: U
        }), {
            viewTransitionOpts: q,
            flushSync: j === !0
        }), P = we.Pop, T = !1, I = !1, te = !1, pe = !1, Re = [], tt = []
    }
    async function bu(w, x) {
        if (typeof w == "number") {
            e.history.go(w);
            return
        }
        let C = Aa(y.location, y.matches, u, c.v7_prependBasename, w, c.v7_relativeSplatPath, x == null ? void 0 : x.fromRouteId, x == null ? void 0 : x.relative),
            {
                path: R,
                submission: F,
                error: j
            } = wc(c.v7_normalizeFormMethod, !1, C, x),
            B = y.location,
            M = vl(y.location, R, x && x.state);
        M = se({}, M, e.history.encodeLocation(M));
        let K = x && x.replace != null ? x.replace : void 0,
            U = we.Push;
        K === !0 ? U = we.Replace : K === !1 || F != null && mt(F.formMethod) && F.formAction === y.location.pathname + y.location.search && (U = we.Replace);
        let A = x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
            q = (x && x.unstable_flushSync) === !0,
            G = as({
                currentLocation: B,
                nextLocation: M,
                historyAction: U
            });
        if (G) {
            Tl(G, {
                state: "blocked",
                location: M,
                proceed() {
                    Tl(G, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: M
                    }), bu(w, x)
                },
                reset() {
                    let ee = new Map(y.blockers);
                    ee.set(G, zr), je({
                        blockers: ee
                    })
                }
            });
            return
        }
        return await wn(U, M, {
            submission: F,
            pendingError: j,
            preventScrollReset: A,
            replace: x && x.replace,
            enableViewTransition: x && x.unstable_viewTransition,
            flushSync: q
        })
    }

    function $h() {
        if (co(), je({
                revalidation: "loading"
            }), y.navigation.state !== "submitting") {
            if (y.navigation.state === "idle") {
                wn(y.historyAction, y.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            wn(P || y.historyAction, y.navigation.location, {
                overrideNavigation: y.navigation
            })
        }
    }
    async function wn(w, x, C) {
        D && D.abort(), D = null, P = w, te = (C && C.startUninterruptedRevalidation) === !0, Gh(y.location, y.matches), T = (C && C.preventScrollReset) === !0, I = (C && C.enableViewTransition) === !0;
        let R = a || o,
            F = C && C.overrideNavigation,
            j = jt(R, x, u),
            B = (C && C.flushSync) === !0,
            M = po(j, R, x.pathname);
        if (M.active && M.matches && (j = M.matches), !j) {
            let {
                error: J,
                notFoundMatches: Le,
                route: ge
            } = fo(x.pathname);
            An(x, {
                matches: Le,
                loaderData: {},
                errors: {
                    [ge.id]: J
                }
            }, {
                flushSync: B
            });
            return
        }
        if (y.initialized && !pe && Gv(y.location, x) && !(C && C.submission && mt(C.submission.formMethod))) {
            An(x, {
                matches: j
            }, {
                flushSync: B
            });
            return
        }
        D = new AbortController;
        let K = Vn(e.history, x, D.signal, C && C.submission),
            U;
        if (C && C.pendingError) U = [rr(j).route.id, {
            type: ne.error,
            error: C.pendingError
        }];
        else if (C && C.submission && mt(C.submission.formMethod)) {
            let J = await Bh(K, x, C.submission, j, M.active, {
                replace: C.replace,
                flushSync: B
            });
            if (J.shortCircuited) return;
            if (J.pendingActionResult) {
                let [Le, ge] = J.pendingActionResult;
                if (Je(ge) && xl(ge.error) && ge.error.status === 404) {
                    D = null, An(x, {
                        matches: J.matches,
                        loaderData: {},
                        errors: {
                            [Le]: ge.error
                        }
                    });
                    return
                }
            }
            j = J.matches || j, U = J.pendingActionResult, F = Ho(x, C.submission), B = !1, M.active = !1, K = Vn(e.history, K.url, K.signal)
        }
        let {
            shortCircuited: A,
            matches: q,
            loaderData: G,
            errors: ee
        } = await Hh(K, x, j, M.active, F, C && C.submission, C && C.fetcherSubmission, C && C.replace, C && C.initialHydration === !0, B, U);
        A || (D = null, An(x, se({
            matches: q || j
        }, _c(U), {
            loaderData: G,
            errors: ee
        })))
    }
    async function Bh(w, x, C, R, F, j) {
        j === void 0 && (j = {}), co();
        let B = ty(x, C);
        if (je({
                navigation: B
            }, {
                flushSync: j.flushSync === !0
            }), F) {
            let U = await Dl(R, x.pathname, w.signal);
            if (U.type === "aborted") return {
                shortCircuited: !0
            };
            if (U.type === "error") {
                let {
                    boundaryId: A,
                    error: q
                } = Nl(x.pathname, U);
                return {
                    matches: U.partialMatches,
                    pendingActionResult: [A, {
                        type: ne.error,
                        error: q
                    }]
                }
            } else if (U.matches) R = U.matches;
            else {
                let {
                    notFoundMatches: A,
                    error: q,
                    route: G
                } = fo(x.pathname);
                return {
                    matches: A,
                    pendingActionResult: [G.id, {
                        type: ne.error,
                        error: q
                    }]
                }
            }
        }
        let M, K = Wr(R, x);
        if (!K.route.action && !K.route.lazy) M = {
            type: ne.error,
            error: Ue(405, {
                method: w.method,
                pathname: x.pathname,
                routeId: K.route.id
            })
        };
        else if (M = (await Pr("action", w, [K], R))[0], w.signal.aborted) return {
            shortCircuited: !0
        };
        if (Rn(M)) {
            let U;
            return j && j.replace != null ? U = j.replace : U = kc(M.response.headers.get("Location"), new URL(w.url), u) === y.location.pathname + y.location.search, await Cr(w, M, {
                submission: C,
                replace: U
            }), {
                shortCircuited: !0
            }
        }
        if (Pn(M)) throw Ue(400, {
            type: "defer-action"
        });
        if (Je(M)) {
            let U = rr(R, K.route.id);
            return (j && j.replace) !== !0 && (P = we.Push), {
                matches: R,
                pendingActionResult: [U.route.id, M]
            }
        }
        return {
            matches: R,
            pendingActionResult: [K.route.id, M]
        }
    }
    async function Hh(w, x, C, R, F, j, B, M, K, U, A) {
        let q = F || Ho(x, j),
            G = j || B || Dc(q),
            ee = !te && (!c.v7_partialHydration || !K);
        if (R) {
            if (ee) {
                let me = es(A);
                je(se({
                    navigation: q
                }, me !== void 0 ? {
                    actionData: me
                } : {}), {
                    flushSync: U
                })
            }
            let Q = await Dl(C, x.pathname, w.signal);
            if (Q.type === "aborted") return {
                shortCircuited: !0
            };
            if (Q.type === "error") {
                let {
                    boundaryId: me,
                    error: Ye
                } = Nl(x.pathname, Q);
                return {
                    matches: Q.partialMatches,
                    loaderData: {},
                    errors: {
                        [me]: Ye
                    }
                }
            } else if (Q.matches) C = Q.matches;
            else {
                let {
                    error: me,
                    notFoundMatches: Ye,
                    route: ue
                } = fo(x.pathname);
                return {
                    matches: Ye,
                    loaderData: {},
                    errors: {
                        [ue.id]: me
                    }
                }
            }
        }
        let J = a || o,
            [Le, ge] = Sc(e.history, y, C, G, x, c.v7_partialHydration && K === !0, c.v7_skipActionErrorRevalidation, pe, Re, tt, _e, le, X, J, u, A);
        if (ho(Q => !(C && C.some(me => me.route.id === Q)) || Le && Le.some(me => me.route.id === Q)), W = ++O, Le.length === 0 && ge.length === 0) {
            let Q = ls();
            return An(x, se({
                matches: C,
                loaderData: {},
                errors: A && Je(A[1]) ? {
                    [A[0]]: A[1].error
                } : null
            }, _c(A), Q ? {
                fetchers: new Map(y.fetchers)
            } : {}), {
                flushSync: U
            }), {
                shortCircuited: !0
            }
        }
        if (ee) {
            let Q = {};
            if (!R) {
                Q.navigation = q;
                let me = es(A);
                me !== void 0 && (Q.actionData = me)
            }
            ge.length > 0 && (Q.fetchers = Wh(ge)), je(Q, {
                flushSync: U
            })
        }
        ge.forEach(Q => {
            ae.has(Q.key) && Xt(Q.key), Q.controller && ae.set(Q.key, Q.controller)
        });
        let Rr = () => ge.forEach(Q => Xt(Q.key));
        D && D.signal.addEventListener("abort", Rr);
        let {
            loaderResults: Jt,
            fetcherResults: $n
        } = await ts(y.matches, C, Le, ge, w);
        if (w.signal.aborted) return {
            shortCircuited: !0
        };
        D && D.signal.removeEventListener("abort", Rr), ge.forEach(Q => ae.delete(Q.key));
        let Bn = Tc([...Jt, ...$n]);
        if (Bn) {
            if (Bn.idx >= Le.length) {
                let Q = ge[Bn.idx - Le.length].key;
                X.add(Q)
            }
            return await Cr(w, Bn.result, {
                replace: M
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: Hn,
            errors: Ct
        } = Pc(y, C, Le, Jt, A, ge, $n, ft);
        ft.forEach((Q, me) => {
            Q.subscribe(Ye => {
                (Ye || Q.done) && ft.delete(me)
            })
        }), c.v7_partialHydration && K && y.errors && Object.entries(y.errors).filter(Q => {
            let [me] = Q;
            return !Le.some(Ye => Ye.route.id === me)
        }).forEach(Q => {
            let [me, Ye] = Q;
            Ct = Object.assign(Ct || {}, {
                [me]: Ye
            })
        });
        let Ml = ls(),
            Ol = is(W),
            Fl = Ml || Ol || ge.length > 0;
        return se({
            matches: C,
            loaderData: Hn,
            errors: Ct
        }, Fl ? {
            fetchers: new Map(y.fetchers)
        } : {})
    }

    function es(w) {
        if (w && !Je(w[1])) return {
            [w[0]]: w[1].data
        };
        if (y.actionData) return Object.keys(y.actionData).length === 0 ? null : y.actionData
    }

    function Wh(w) {
        return w.forEach(x => {
            let C = y.fetchers.get(x.key),
                R = Ir(void 0, C ? C.data : void 0);
            y.fetchers.set(x.key, R)
        }), new Map(y.fetchers)
    }

    function Vh(w, x, C, R) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        ae.has(w) && Xt(w);
        let F = (R && R.unstable_flushSync) === !0,
            j = a || o,
            B = Aa(y.location, y.matches, u, c.v7_prependBasename, C, c.v7_relativeSplatPath, x, R == null ? void 0 : R.relative),
            M = jt(j, B, u),
            K = po(M, j, B);
        if (K.active && K.matches && (M = K.matches), !M) {
            Ot(w, x, Ue(404, {
                pathname: B
            }), {
                flushSync: F
            });
            return
        }
        let {
            path: U,
            submission: A,
            error: q
        } = wc(c.v7_normalizeFormMethod, !0, B, R);
        if (q) {
            Ot(w, x, q, {
                flushSync: F
            });
            return
        }
        let G = Wr(M, U);
        if (T = (R && R.preventScrollReset) === !0, A && mt(A.formMethod)) {
            Kh(w, x, U, G, M, K.active, F, A);
            return
        }
        le.set(w, {
            routeId: x,
            path: U
        }), Qh(w, x, U, G, M, K.active, F, A)
    }
    async function Kh(w, x, C, R, F, j, B, M) {
        co(), le.delete(w);

        function K(ue) {
            if (!ue.route.action && !ue.route.lazy) {
                let Ft = Ue(405, {
                    method: M.formMethod,
                    pathname: C,
                    routeId: x
                });
                return Ot(w, x, Ft, {
                    flushSync: B
                }), !0
            }
            return !1
        }
        if (!j && K(R)) return;
        let U = y.fetchers.get(w);
        Yt(w, ny(M, U), {
            flushSync: B
        });
        let A = new AbortController,
            q = Vn(e.history, C, A.signal, M);
        if (j) {
            let ue = await Dl(F, C, q.signal);
            if (ue.type === "aborted") return;
            if (ue.type === "error") {
                let {
                    error: Ft
                } = Nl(C, ue);
                Ot(w, x, Ft, {
                    flushSync: B
                });
                return
            } else if (ue.matches) {
                if (F = ue.matches, R = Wr(F, C), K(R)) return
            } else {
                Ot(w, x, Ue(404, {
                    pathname: C
                }), {
                    flushSync: B
                });
                return
            }
        }
        ae.set(w, A);
        let G = O,
            J = (await Pr("action", q, [R], F))[0];
        if (q.signal.aborted) {
            ae.get(w) === A && ae.delete(w);
            return
        }
        if (c.v7_fetcherPersist && _e.has(w)) {
            if (Rn(J) || Je(J)) {
                Yt(w, Zt(void 0));
                return
            }
        } else {
            if (Rn(J))
                if (ae.delete(w), W > G) {
                    Yt(w, Zt(void 0));
                    return
                } else return X.add(w), Yt(w, Ir(M)), Cr(q, J, {
                    fetcherSubmission: M
                });
            if (Je(J)) {
                Ot(w, x, J.error);
                return
            }
        }
        if (Pn(J)) throw Ue(400, {
            type: "defer-action"
        });
        let Le = y.navigation.location || y.location,
            ge = Vn(e.history, Le, A.signal),
            Rr = a || o,
            Jt = y.navigation.state !== "idle" ? jt(Rr, y.navigation.location, u) : y.matches;
        H(Jt, "Didn't find any matches after fetcher action");
        let $n = ++O;
        V.set(w, $n);
        let Bn = Ir(M, J.data);
        y.fetchers.set(w, Bn);
        let [Hn, Ct] = Sc(e.history, y, Jt, M, Le, !1, c.v7_skipActionErrorRevalidation, pe, Re, tt, _e, le, X, Rr, u, [R.route.id, J]);
        Ct.filter(ue => ue.key !== w).forEach(ue => {
            let Ft = ue.key,
                cs = y.fetchers.get(Ft),
                bh = Ir(void 0, cs ? cs.data : void 0);
            y.fetchers.set(Ft, bh), ae.has(Ft) && Xt(Ft), ue.controller && ae.set(Ft, ue.controller)
        }), je({
            fetchers: new Map(y.fetchers)
        });
        let Ml = () => Ct.forEach(ue => Xt(ue.key));
        A.signal.addEventListener("abort", Ml);
        let {
            loaderResults: Ol,
            fetcherResults: Fl
        } = await ts(y.matches, Jt, Hn, Ct, ge);
        if (A.signal.aborted) return;
        A.signal.removeEventListener("abort", Ml), V.delete(w), ae.delete(w), Ct.forEach(ue => ae.delete(ue.key));
        let Q = Tc([...Ol, ...Fl]);
        if (Q) {
            if (Q.idx >= Hn.length) {
                let ue = Ct[Q.idx - Hn.length].key;
                X.add(ue)
            }
            return Cr(ge, Q.result)
        }
        let {
            loaderData: me,
            errors: Ye
        } = Pc(y, y.matches, Hn, Ol, void 0, Ct, Fl, ft);
        if (y.fetchers.has(w)) {
            let ue = Zt(J.data);
            y.fetchers.set(w, ue)
        }
        is($n), y.navigation.state === "loading" && $n > W ? (H(P, "Expected pending action"), D && D.abort(), An(y.navigation.location, {
            matches: Jt,
            loaderData: me,
            errors: Ye,
            fetchers: new Map(y.fetchers)
        })) : (je({
            errors: Ye,
            loaderData: Rc(y.loaderData, me, Jt, Ye),
            fetchers: new Map(y.fetchers)
        }), pe = !1)
    }
    async function Qh(w, x, C, R, F, j, B, M) {
        let K = y.fetchers.get(w);
        Yt(w, Ir(M, K ? K.data : void 0), {
            flushSync: B
        });
        let U = new AbortController,
            A = Vn(e.history, C, U.signal);
        if (j) {
            let J = await Dl(F, C, A.signal);
            if (J.type === "aborted") return;
            if (J.type === "error") {
                let {
                    error: Le
                } = Nl(C, J);
                Ot(w, x, Le, {
                    flushSync: B
                });
                return
            } else if (J.matches) F = J.matches, R = Wr(F, C);
            else {
                Ot(w, x, Ue(404, {
                    pathname: C
                }), {
                    flushSync: B
                });
                return
            }
        }
        ae.set(w, U);
        let q = O,
            ee = (await Pr("loader", A, [R], F))[0];
        if (Pn(ee) && (ee = await lh(ee, A.signal, !0) || ee), ae.get(w) === U && ae.delete(w), !A.signal.aborted) {
            if (_e.has(w)) {
                Yt(w, Zt(void 0));
                return
            }
            if (Rn(ee))
                if (W > q) {
                    Yt(w, Zt(void 0));
                    return
                } else {
                    X.add(w), await Cr(A, ee);
                    return
                }
            if (Je(ee)) {
                Ot(w, x, ee.error);
                return
            }
            H(!Pn(ee), "Unhandled fetcher deferred data"), Yt(w, Zt(ee.data))
        }
    }
    async function Cr(w, x, C) {
        let {
            submission: R,
            fetcherSubmission: F,
            replace: j
        } = C === void 0 ? {} : C;
        x.response.headers.has("X-Remix-Revalidate") && (pe = !0);
        let B = x.response.headers.get("Location");
        H(B, "Expected a Location header on the redirect Response"), B = kc(B, new URL(w.url), u);
        let M = vl(y.location, B, {
            _isRedirect: !0
        });
        if (n) {
            let ee = !1;
            if (x.response.headers.has("X-Remix-Reload-Document")) ee = !0;
            else if (Uu.test(B)) {
                const J = e.history.createURL(B);
                ee = J.origin !== t.location.origin || ct(J.pathname, u) == null
            }
            if (ee) {
                j ? t.location.replace(B) : t.location.assign(B);
                return
            }
        }
        D = null;
        let K = j === !0 ? we.Replace : we.Push,
            {
                formMethod: U,
                formAction: A,
                formEncType: q
            } = y.navigation;
        !R && !F && U && A && q && (R = Dc(y.navigation));
        let G = R || F;
        if (Uv.has(x.response.status) && G && mt(G.formMethod)) await wn(K, M, {
            submission: se({}, G, {
                formAction: B
            }),
            preventScrollReset: T
        });
        else {
            let ee = Ho(M, R);
            await wn(K, M, {
                overrideNavigation: ee,
                fetcherSubmission: F,
                preventScrollReset: T
            })
        }
    }
    async function Pr(w, x, C, R) {
        try {
            let F = await Kv(s, w, x, C, R, i, l);
            return await Promise.all(F.map((j, B) => {
                if (qv(j)) {
                    let M = j.result;
                    return {
                        type: ne.redirect,
                        response: Xv(M, x, C[B].route.id, R, u, c.v7_relativeSplatPath)
                    }
                }
                return Yv(j)
            }))
        } catch (F) {
            return C.map(() => ({
                type: ne.error,
                error: F
            }))
        }
    }
    async function ts(w, x, C, R, F) {
        let [j, ...B] = await Promise.all([C.length ? Pr("loader", F, C, x) : [], ...R.map(M => {
            if (M.matches && M.match && M.controller) {
                let K = Vn(e.history, M.path, M.controller.signal);
                return Pr("loader", K, [M.match], M.matches).then(U => U[0])
            } else return Promise.resolve({
                type: ne.error,
                error: Ue(404, {
                    pathname: M.path
                })
            })
        })]);
        return await Promise.all([Nc(w, C, j, j.map(() => F.signal), !1, y.loaderData), Nc(w, R.map(M => M.match), B, R.map(M => M.controller ? M.controller.signal : null), !0)]), {
            loaderResults: j,
            fetcherResults: B
        }
    }

    function co() {
        pe = !0, Re.push(...ho()), le.forEach((w, x) => {
            ae.has(x) && (tt.push(x), Xt(x))
        })
    }

    function Yt(w, x, C) {
        C === void 0 && (C = {}), y.fetchers.set(w, x), je({
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (C && C.flushSync) === !0
        })
    }

    function Ot(w, x, C, R) {
        R === void 0 && (R = {});
        let F = rr(y.matches, x);
        Ll(w), je({
            errors: {
                [F.route.id]: C
            },
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (R && R.flushSync) === !0
        })
    }

    function ns(w) {
        return c.v7_fetcherPersist && (kt.set(w, (kt.get(w) || 0) + 1), _e.has(w) && _e.delete(w)), y.fetchers.get(w) || qd
    }

    function Ll(w) {
        let x = y.fetchers.get(w);
        ae.has(w) && !(x && x.state === "loading" && V.has(w)) && Xt(w), le.delete(w), V.delete(w), X.delete(w), _e.delete(w), y.fetchers.delete(w)
    }

    function Yh(w) {
        if (c.v7_fetcherPersist) {
            let x = (kt.get(w) || 0) - 1;
            x <= 0 ? (kt.delete(w), _e.add(w)) : kt.set(w, x)
        } else Ll(w);
        je({
            fetchers: new Map(y.fetchers)
        })
    }

    function Xt(w) {
        let x = ae.get(w);
        H(x, "Expected fetch controller: " + w), x.abort(), ae.delete(w)
    }

    function rs(w) {
        for (let x of w) {
            let C = ns(x),
                R = Zt(C.data);
            y.fetchers.set(x, R)
        }
    }

    function ls() {
        let w = [],
            x = !1;
        for (let C of X) {
            let R = y.fetchers.get(C);
            H(R, "Expected fetcher: " + C), R.state === "loading" && (X.delete(C), w.push(C), x = !0)
        }
        return rs(w), x
    }

    function is(w) {
        let x = [];
        for (let [C, R] of V)
            if (R < w) {
                let F = y.fetchers.get(C);
                H(F, "Expected fetcher: " + C), F.state === "loading" && (Xt(C), V.delete(C), x.push(C))
            }
        return rs(x), x.length > 0
    }

    function Xh(w, x) {
        let C = y.blockers.get(w) || zr;
        return Ie.get(w) !== x && Ie.set(w, x), C
    }

    function os(w) {
        y.blockers.delete(w), Ie.delete(w)
    }

    function Tl(w, x) {
        let C = y.blockers.get(w) || zr;
        H(C.state === "unblocked" && x.state === "blocked" || C.state === "blocked" && x.state === "blocked" || C.state === "blocked" && x.state === "proceeding" || C.state === "blocked" && x.state === "unblocked" || C.state === "proceeding" && x.state === "unblocked", "Invalid blocker state transition: " + C.state + " -> " + x.state);
        let R = new Map(y.blockers);
        R.set(w, x), je({
            blockers: R
        })
    }

    function as(w) {
        let {
            currentLocation: x,
            nextLocation: C,
            historyAction: R
        } = w;
        if (Ie.size === 0) return;
        Ie.size > 1 && yr(!1, "A router only supports one blocker at a time");
        let F = Array.from(Ie.entries()),
            [j, B] = F[F.length - 1],
            M = y.blockers.get(j);
        if (!(M && M.state === "proceeding") && B({
                currentLocation: x,
                nextLocation: C,
                historyAction: R
            })) return j
    }

    function fo(w) {
        let x = Ue(404, {
                pathname: w
            }),
            C = a || o,
            {
                matches: R,
                route: F
            } = Lc(C);
        return ho(), {
            notFoundMatches: R,
            route: F,
            error: x
        }
    }

    function Nl(w, x) {
        return {
            boundaryId: rr(x.partialMatches).route.id,
            error: Ue(400, {
                type: "route-discovery",
                pathname: w,
                message: x.error != null && "message" in x.error ? x.error : String(x.error)
            })
        }
    }

    function ho(w) {
        let x = [];
        return ft.forEach((C, R) => {
            (!w || w(R)) && (C.cancel(), x.push(R), ft.delete(R))
        }), x
    }

    function Jh(w, x, C) {
        if (g = w, _ = x, S = C || null, !v && y.navigation === Bo) {
            v = !0;
            let R = ss(y.location, y.matches);
            R != null && je({
                restoreScrollPosition: R
            })
        }
        return () => {
            g = null, _ = null, S = null
        }
    }

    function us(w, x) {
        return S && S(w, x.map(R => Qd(R, y.loaderData))) || w.key
    }

    function Gh(w, x) {
        if (g && _) {
            let C = us(w, x);
            g[C] = _()
        }
    }

    function ss(w, x) {
        if (g) {
            let C = us(w, x),
                R = g[C];
            if (typeof R == "number") return R
        }
        return null
    }

    function po(w, x, C) {
        if (f)
            if (w) {
                let R = w[w.length - 1].route;
                if (R.path && (R.path === "*" || R.path.endsWith("/*"))) return {
                    active: !0,
                    matches: hi(x, C, u, !0)
                }
            } else return {
                active: !0,
                matches: hi(x, C, u, !0) || []
            };
        return {
            active: !1,
            matches: null
        }
    }
    async function Dl(w, x, C) {
        let R = w,
            F = R.length > 0 ? R[R.length - 1].route : null;
        for (;;) {
            let j = a == null,
                B = a || o;
            try {
                await Wv(f, x, R, B, i, l, Un, C)
            } catch (A) {
                return {
                    type: "error",
                    error: A,
                    partialMatches: R
                }
            } finally {
                j && (o = [...o])
            }
            if (C.aborted) return {
                type: "aborted"
            };
            let M = jt(B, x, u),
                K = !1;
            if (M) {
                let A = M[M.length - 1].route;
                if (A.index) return {
                    type: "success",
                    matches: M
                };
                if (A.path && A.path.length > 0)
                    if (A.path === "*") K = !0;
                    else return {
                        type: "success",
                        matches: M
                    }
            }
            let U = hi(B, x, u, !0);
            if (!U || R.map(A => A.route.id).join("-") === U.map(A => A.route.id).join("-")) return {
                type: "success",
                matches: K ? M : null
            };
            if (R = U, F = R[R.length - 1].route, F.path === "*") return {
                type: "success",
                matches: R
            }
        }
    }

    function Zh(w) {
        i = {}, a = yl(w, l, void 0, i)
    }

    function qh(w, x) {
        let C = a == null;
        th(w, x, a || o, i, l), C && (o = [...o], je({}))
    }
    return L = {
        get basename() {
            return u
        },
        get future() {
            return c
        },
        get state() {
            return y
        },
        get routes() {
            return o
        },
        get window() {
            return t
        },
        initialize: jh,
        subscribe: Ah,
        enableScrollRestoration: Jh,
        navigate: bu,
        fetch: Vh,
        revalidate: $h,
        createHref: w => e.history.createHref(w),
        encodeLocation: w => e.history.encodeLocation(w),
        getFetcher: ns,
        deleteFetcher: Yh,
        dispose: Uh,
        getBlocker: Xh,
        deleteBlocker: os,
        patchRoutes: qh,
        _internalFetchControllers: ae,
        _internalActiveDeferreds: ft,
        _internalSetRoutes: Zh
    }, L
}

function $v(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function Aa(e, t, n, r, l, i, o, a) {
    let u, s;
    if (o) {
        u = [];
        for (let c of t)
            if (u.push(c), c.route.id === o) {
                s = c;
                break
            }
    } else u = t, s = t[t.length - 1];
    let f = ju(l || ".", Iu(u, i), ct(e.pathname, n) || e.pathname, a === "path");
    return l == null && (f.search = e.search, f.hash = e.hash), (l == null || l === "" || l === ".") && s && s.route.index && !Au(f.search) && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (f.pathname = f.pathname === "/" ? n : Nt([n, f.pathname])), mn(f)
}

function wc(e, t, n, r) {
    if (!r || !$v(r)) return {
        path: n
    };
    if (r.formMethod && !ey(r.formMethod)) return {
        path: n,
        error: Ue(405, {
            method: r.formMethod
        })
    };
    let l = () => ({
            path: n,
            error: Ue(400, {
                type: "invalid-body"
            })
        }),
        i = r.formMethod || "get",
        o = e ? i.toUpperCase() : i.toLowerCase(),
        a = nh(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!mt(o)) return l();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((E, g) => {
                let [S, _] = g;
                return "" + E + S + "=" + _ + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: a,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!mt(o)) return l();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: a,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    H(typeof FormData == "function", "FormData is not available in this environment");
    let u, s;
    if (r.formData) u = $a(r.formData), s = r.formData;
    else if (r.body instanceof FormData) u = $a(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) u = r.body, s = Cc(u);
    else if (r.body == null) u = new URLSearchParams, s = new FormData;
    else try {
        u = new URLSearchParams(r.body), s = Cc(u)
    } catch {
        return l()
    }
    let f = {
        formMethod: o,
        formAction: a,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (mt(f.formMethod)) return {
        path: n,
        submission: f
    };
    let c = Qt(n);
    return t && c.search && Au(c.search) && u.append("index", ""), c.search = "?" + u, {
        path: mn(c),
        submission: f
    }
}

function Bv(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(l => l.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function Sc(e, t, n, r, l, i, o, a, u, s, f, c, h, E, g, S) {
    let _ = S ? Je(S[1]) ? S[1].error : S[1].data : void 0,
        v = e.createURL(t.location),
        d = e.createURL(l),
        p = S && Je(S[1]) ? S[0] : void 0,
        k = p ? Bv(n, p) : n,
        L = S ? S[1].statusCode : void 0,
        y = o && L && L >= 400,
        P = k.filter((D, I) => {
            let {
                route: $
            } = D;
            if ($.lazy) return !0;
            if ($.loader == null) return !1;
            if (i) return typeof $.loader != "function" || $.loader.hydrate ? !0 : t.loaderData[$.id] === void 0 && (!t.errors || t.errors[$.id] === void 0);
            if (Hv(t.loaderData, t.matches[I], D) || u.some(pe => pe === D.route.id)) return !0;
            let b = t.matches[I],
                te = D;
            return Ec(D, se({
                currentUrl: v,
                currentParams: b.params,
                nextUrl: d,
                nextParams: te.params
            }, r, {
                actionResult: _,
                actionStatus: L,
                defaultShouldRevalidate: y ? !1 : a || v.pathname + v.search === d.pathname + d.search || v.search !== d.search || eh(b, te)
            }))
        }),
        T = [];
    return c.forEach((D, I) => {
        if (i || !n.some(Re => Re.route.id === D.routeId) || f.has(I)) return;
        let $ = jt(E, D.path, g);
        if (!$) {
            T.push({
                key: I,
                routeId: D.routeId,
                path: D.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let b = t.fetchers.get(I),
            te = Wr($, D.path),
            pe = !1;
        h.has(I) ? pe = !1 : s.includes(I) ? pe = !0 : b && b.state !== "idle" && b.data === void 0 ? pe = a : pe = Ec(te, se({
            currentUrl: v,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: d,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: _,
            actionStatus: L,
            defaultShouldRevalidate: y ? !1 : a
        })), pe && T.push({
            key: I,
            routeId: D.routeId,
            path: D.path,
            matches: $,
            match: te,
            controller: new AbortController
        })
    }), [P, T]
}

function Hv(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l
}

function eh(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Ec(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function Wv(e, t, n, r, l, i, o, a) {
    let u = [t, ...n.map(s => s.route.id)].join("-");
    try {
        let s = o.get(u);
        s || (s = e({
            path: t,
            matches: n,
            patch: (f, c) => {
                a.aborted || th(f, c, r, l, i)
            }
        }), o.set(u, s)), s && Zv(s) && await s
    } finally {
        o.delete(u)
    }
}

function th(e, t, n, r, l) {
    if (e) {
        var i;
        let o = r[e];
        H(o, "No route found to patch children into: routeId = " + e);
        let a = yl(t, l, [e, "patch", String(((i = o.children) == null ? void 0 : i.length) || "0")], r);
        o.children ? o.children.push(...a) : o.children = a
    } else {
        let o = yl(t, l, ["patch", String(n.length || "0")], r);
        n.push(...o)
    }
}
async function xc(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    H(l, "No route found in manifest");
    let i = {};
    for (let o in r) {
        let u = l[o] !== void 0 && o !== "hasErrorBoundary";
        yr(!u, 'Route "' + l.id + '" has a static property "' + o + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + o + '" will be ignored.')), !u && !dv.has(o) && (i[o] = r[o])
    }
    Object.assign(l, i), Object.assign(l, se({}, t(l), {
        lazy: void 0
    }))
}

function Vv(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function Kv(e, t, n, r, l, i, o, a) {
    let u = r.reduce((c, h) => c.add(h.route.id), new Set),
        s = new Set,
        f = await e({
            matches: l.map(c => {
                let h = u.has(c.route.id);
                return se({}, c, {
                    shouldLoad: h,
                    resolve: g => (s.add(c.route.id), h ? Qv(t, n, c, i, o, g, a) : Promise.resolve({
                        type: ne.data,
                        result: void 0
                    }))
                })
            }),
            request: n,
            params: l[0].params,
            context: a
        });
    return l.forEach(c => H(s.has(c.route.id), '`match.resolve()` was not called for route id "' + c.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), f.filter((c, h) => u.has(l[h].route.id))
}
async function Qv(e, t, n, r, l, i, o) {
    let a, u, s = f => {
        let c, h = new Promise((S, _) => c = _);
        u = () => c(), t.signal.addEventListener("abort", u);
        let E = S => typeof f != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : f({
                request: t,
                params: n.params,
                context: o
            }, ...S !== void 0 ? [S] : []),
            g;
        return i ? g = i(S => E(S)) : g = (async () => {
            try {
                return {
                    type: "data",
                    result: await E()
                }
            } catch (S) {
                return {
                    type: "error",
                    result: S
                }
            }
        })(), Promise.race([g, h])
    };
    try {
        let f = n.route[e];
        if (n.route.lazy)
            if (f) {
                let c, [h] = await Promise.all([s(f).catch(E => {
                    c = E
                }), xc(n.route, l, r)]);
                if (c !== void 0) throw c;
                a = h
            } else if (await xc(n.route, l, r), f = n.route[e], f) a = await s(f);
        else if (e === "action") {
            let c = new URL(t.url),
                h = c.pathname + c.search;
            throw Ue(405, {
                method: t.method,
                pathname: h,
                routeId: n.route.id
            })
        } else return {
            type: ne.data,
            result: void 0
        };
        else if (f) a = await s(f);
        else {
            let c = new URL(t.url),
                h = c.pathname + c.search;
            throw Ue(404, {
                pathname: h
            })
        }
        H(a.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (f) {
        return {
            type: ne.error,
            result: f
        }
    } finally {
        u && t.signal.removeEventListener("abort", u)
    }
    return a
}
async function Yv(e) {
    let {
        result: t,
        type: n,
        status: r
    } = e;
    if (rh(t)) {
        let o;
        try {
            let a = t.headers.get("Content-Type");
            a && /\bapplication\/json\b/.test(a) ? t.body == null ? o = null : o = await t.json() : o = await t.text()
        } catch (a) {
            return {
                type: ne.error,
                error: a
            }
        }
        return n === ne.error ? {
            type: ne.error,
            error: new gr(t.status, t.statusText, o),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: ne.data,
            data: o,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === ne.error) return {
        type: ne.error,
        error: t,
        statusCode: xl(t) ? t.status : r
    };
    if (bv(t)) {
        var l, i;
        return {
            type: ne.deferred,
            deferredData: t,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: ne.data,
        data: t,
        statusCode: r
    }
}

function Xv(e, t, n, r, l, i) {
    let o = e.headers.get("Location");
    if (H(o, "Redirects returned/thrown from loaders/actions must have a Location header"), !Uu.test(o)) {
        let a = r.slice(0, r.findIndex(u => u.route.id === n) + 1);
        o = Aa(new URL(t.url), a, l, !0, o, i), e.headers.set("Location", o)
    }
    return e
}

function kc(e, t, n) {
    if (Uu.test(e)) {
        let r = e,
            l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            i = ct(l.pathname, n) != null;
        if (l.origin === t.origin && i) return l.pathname + l.search + l.hash
    }
    return e
}

function Vn(e, t, n, r) {
    let l = e.createURL(nh(t)).toString(),
        i = {
            signal: n
        };
    if (r && mt(r.formMethod)) {
        let {
            formMethod: o,
            formEncType: a
        } = r;
        i.method = o.toUpperCase(), a === "application/json" ? (i.headers = new Headers({
            "Content-Type": a
        }), i.body = JSON.stringify(r.json)) : a === "text/plain" ? i.body = r.text : a === "application/x-www-form-urlencoded" && r.formData ? i.body = $a(r.formData) : i.body = r.formData
    }
    return new Request(l, i)
}

function $a(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function Cc(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function Jv(e, t, n, r, l, i) {
    let o = {},
        a = null,
        u, s = !1,
        f = {},
        c = r && Je(r[1]) ? r[1].error : void 0;
    return n.forEach((h, E) => {
        let g = t[E].route.id;
        if (H(!Rn(h), "Cannot handle redirect results in processLoaderData"), Je(h)) {
            let S = h.error;
            c !== void 0 && (S = c, c = void 0), a = a || {}; {
                let _ = rr(e, g);
                a[_.route.id] == null && (a[_.route.id] = S)
            }
            o[g] = void 0, s || (s = !0, u = xl(h.error) ? h.error.status : 500), h.headers && (f[g] = h.headers)
        } else Pn(h) ? (l.set(g, h.deferredData), o[g] = h.deferredData.data, h.statusCode != null && h.statusCode !== 200 && !s && (u = h.statusCode), h.headers && (f[g] = h.headers)) : (o[g] = h.data, h.statusCode && h.statusCode !== 200 && !s && (u = h.statusCode), h.headers && (f[g] = h.headers))
    }), c !== void 0 && r && (a = {
        [r[0]]: c
    }, o[r[0]] = void 0), {
        loaderData: o,
        errors: a,
        statusCode: u || 200,
        loaderHeaders: f
    }
}

function Pc(e, t, n, r, l, i, o, a) {
    let {
        loaderData: u,
        errors: s
    } = Jv(t, n, r, l, a);
    for (let f = 0; f < i.length; f++) {
        let {
            key: c,
            match: h,
            controller: E
        } = i[f];
        H(o !== void 0 && o[f] !== void 0, "Did not find corresponding fetcher result");
        let g = o[f];
        if (!(E && E.signal.aborted))
            if (Je(g)) {
                let S = rr(e.matches, h == null ? void 0 : h.route.id);
                s && s[S.route.id] || (s = se({}, s, {
                    [S.route.id]: g.error
                })), e.fetchers.delete(c)
            } else if (Rn(g)) H(!1, "Unhandled fetcher revalidation redirect");
        else if (Pn(g)) H(!1, "Unhandled fetcher deferred data");
        else {
            let S = Zt(g.data);
            e.fetchers.set(c, S)
        }
    }
    return {
        loaderData: u,
        errors: s
    }
}

function Rc(e, t, n, r) {
    let l = se({}, t);
    for (let i of n) {
        let o = i.route.id;
        if (t.hasOwnProperty(o) ? t[o] !== void 0 && (l[o] = t[o]) : e[o] !== void 0 && i.route.loader && (l[o] = e[o]), r && r.hasOwnProperty(o)) break
    }
    return l
}

function _c(e) {
    return e ? Je(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function rr(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function Lc(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function Ue(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: l,
        type: i,
        message: o
    } = t === void 0 ? {} : t, a = "Unknown Server Error", u = "Unknown @remix-run/router error";
    return e === 400 ? (a = "Bad Request", i === "route-discovery" ? u = 'Unable to match URL "' + n + '" - the `unstable_patchRoutesOnMiss()` ' + (`function threw the following error:
` + o) : l && n && r ? u = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : i === "defer-action" ? u = "defer() is not supported in actions" : i === "invalid-body" && (u = "Unable to encode submission body")) : e === 403 ? (a = "Forbidden", u = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (a = "Not Found", u = 'No route matches URL "' + n + '"') : e === 405 && (a = "Method Not Allowed", l && n && r ? u = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')), new gr(e || 500, a, new Error(u), !0)
}

function Tc(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Rn(n)) return {
            result: n,
            idx: t
        }
    }
}

function nh(e) {
    let t = typeof e == "string" ? Qt(e) : e;
    return mn(se({}, t, {
        hash: ""
    }))
}

function Gv(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function Zv(e) {
    return typeof e == "object" && e != null && "then" in e
}

function qv(e) {
    return rh(e.result) && jv.has(e.result.status)
}

function Pn(e) {
    return e.type === ne.deferred
}

function Je(e) {
    return e.type === ne.error
}

function Rn(e) {
    return (e && e.type) === ne.redirect
}

function bv(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function rh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function ey(e) {
    return Iv.has(e.toLowerCase())
}

function mt(e) {
    return Fv.has(e.toLowerCase())
}
async function Nc(e, t, n, r, l, i) {
    for (let o = 0; o < n.length; o++) {
        let a = n[o],
            u = t[o];
        if (!u) continue;
        let s = e.find(c => c.route.id === u.route.id),
            f = s != null && !eh(s, u) && (i && i[u.route.id]) !== void 0;
        if (Pn(a) && (l || f)) {
            let c = r[o];
            H(c, "Expected an AbortSignal for revalidating fetcher deferred result"), await lh(a, c, l).then(h => {
                h && (n[o] = h || n[o])
            })
        }
    }
}
async function lh(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: ne.data,
                data: e.deferredData.unwrappedData
            }
        } catch (l) {
            return {
                type: ne.error,
                error: l
            }
        }
        return {
            type: ne.data,
            data: e.deferredData.data
        }
    }
}

function Au(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function Wr(e, t) {
    let n = typeof t == "string" ? Qt(t).search : t.search;
    if (e[e.length - 1].route.index && Au(n || "")) return e[e.length - 1];
    let r = Jd(e);
    return r[r.length - 1]
}

function Dc(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: i,
        json: o
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: l
        };
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: i,
            json: void 0,
            text: void 0
        };
        if (o !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: o,
            text: void 0
        }
    }
}

function Ho(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function ty(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Ir(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function ny(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Zt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function ry(e, t) {
    try {
        let n = e.sessionStorage.getItem(bd);
        if (n) {
            let r = JSON.parse(n);
            for (let [l, i] of Object.entries(r || {})) i && Array.isArray(i) && t.set(l, new Set(i || []))
        }
    } catch {}
}

function ly(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, l] of t) n[r] = [...l];
        try {
            e.sessionStorage.setItem(bd, JSON.stringify(n))
        } catch (r) {
            yr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Hi() {
    return Hi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Hi.apply(this, arguments)
}
const xr = m.createContext(null),
    kl = m.createContext(null),
    Wi = m.createContext(null),
    Et = m.createContext(null),
    $u = m.createContext(null),
    xt = m.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    ih = m.createContext(null);

function Bu(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    Cl() || H(!1);
    let {
        basename: r,
        navigator: l
    } = m.useContext(Et), {
        hash: i,
        pathname: o,
        search: a
    } = Pl(e, {
        relative: n
    }), u = o;
    return r !== "/" && (u = o === "/" ? r : Nt([r, o])), l.createHref({
        pathname: u,
        search: a,
        hash: i
    })
}

function Cl() {
    return m.useContext($u) != null
}

function Mt() {
    return Cl() || H(!1), m.useContext($u).location
}

function oh(e) {
    m.useContext(Et).static || m.useLayoutEffect(e)
}

function ah() {
    let {
        isDataRoute: e
    } = m.useContext(xt);
    return e ? xy() : iy()
}

function iy() {
    Cl() || H(!1);
    let e = m.useContext(xr),
        {
            basename: t,
            future: n,
            navigator: r
        } = m.useContext(Et),
        {
            matches: l
        } = m.useContext(xt),
        {
            pathname: i
        } = Mt(),
        o = JSON.stringify(Iu(l, n.v7_relativeSplatPath)),
        a = m.useRef(!1);
    return oh(() => {
        a.current = !0
    }), m.useCallback(function(s, f) {
        if (f === void 0 && (f = {}), !a.current) return;
        if (typeof s == "number") {
            r.go(s);
            return
        }
        let c = ju(s, JSON.parse(o), i, f.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : Nt([t, c.pathname])), (f.replace ? r.replace : r.push)(c, f.state, f)
    }, [t, r, o, i, e])
}
const oy = m.createContext(null);

function ay(e) {
    let t = m.useContext(xt).outlet;
    return t && m.createElement(oy.Provider, {
        value: e
    }, t)
}

function g0() {
    let {
        matches: e
    } = m.useContext(xt), t = e[e.length - 1];
    return t ? t.params : {}
}

function Pl(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = m.useContext(Et), {
        matches: l
    } = m.useContext(xt), {
        pathname: i
    } = Mt(), o = JSON.stringify(Iu(l, r.v7_relativeSplatPath));
    return m.useMemo(() => ju(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}

function uy(e, t, n, r) {
    Cl() || H(!1);
    let {
        navigator: l
    } = m.useContext(Et), {
        matches: i
    } = m.useContext(xt), o = i[i.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let u = o ? o.pathnameBase : "/";
    o && o.route;
    let s = Mt(),
        f;
    f = s;
    let c = f.pathname || "/",
        h = c;
    if (u !== "/") {
        let S = u.replace(/^\//, "").split("/");
        h = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let E = jt(e, {
        pathname: h
    });
    return hy(E && E.map(S => Object.assign({}, S, {
        params: Object.assign({}, a, S.params),
        pathname: Nt([u, l.encodeLocation ? l.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? u : Nt([u, l.encodeLocation ? l.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), i, n, r)
}

function sy() {
    let e = ch(),
        t = xl(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return m.createElement(m.Fragment, null, m.createElement("h2", null, "Unexpected Application Error!"), m.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? m.createElement("pre", {
        style: l
    }, n) : null, null)
}
const cy = m.createElement(sy, null);
class fy extends m.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? m.createElement(xt.Provider, {
            value: this.props.routeContext
        }, m.createElement(ih.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function dy(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = m.useContext(xr);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), m.createElement(xt.Provider, {
        value: t
    }, r)
}

function hy(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null
    }
    let o = e,
        a = (l = n) == null ? void 0 : l.errors;
    if (a != null) {
        let f = o.findIndex(c => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0);
        f >= 0 || H(!1), o = o.slice(0, Math.min(o.length, f + 1))
    }
    let u = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let f = 0; f < o.length; f++) {
            let c = o[f];
            if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = f), c.route.id) {
                let {
                    loaderData: h,
                    errors: E
                } = n, g = c.route.loader && h[c.route.id] === void 0 && (!E || E[c.route.id] === void 0);
                if (c.route.lazy || g) {
                    u = !0, s >= 0 ? o = o.slice(0, s + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((f, c, h) => {
        let E, g = !1,
            S = null,
            _ = null;
        n && (E = a && c.route.id ? a[c.route.id] : void 0, S = c.route.errorElement || cy, u && (s < 0 && h === 0 ? (g = !0, _ = null) : s === h && (g = !0, _ = c.route.hydrateFallbackElement || null)));
        let v = t.concat(o.slice(0, h + 1)),
            d = () => {
                let p;
                return E ? p = S : g ? p = _ : c.route.Component ? p = m.createElement(c.route.Component, null) : c.route.element ? p = c.route.element : p = f, m.createElement(dy, {
                    match: c,
                    routeContext: {
                        outlet: f,
                        matches: v,
                        isDataRoute: n != null
                    },
                    children: p
                })
            };
        return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0) ? m.createElement(fy, {
            location: n.location,
            revalidation: n.revalidation,
            component: S,
            error: E,
            children: d(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : d()
    }, null)
}
var uh = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(uh || {}),
    St = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(St || {});

function py(e) {
    let t = m.useContext(xr);
    return t || H(!1), t
}

function Rl(e) {
    let t = m.useContext(kl);
    return t || H(!1), t
}

function my(e) {
    let t = m.useContext(xt);
    return t || H(!1), t
}

function _l(e) {
    let t = my(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || H(!1), n.route.id
}

function vy() {
    return _l(St.UseRouteId)
}

function yy() {
    return Rl(St.UseNavigation).navigation
}

function sh() {
    let {
        matches: e,
        loaderData: t
    } = Rl(St.UseMatches);
    return m.useMemo(() => e.map(n => Qd(n, t)), [e, t])
}

function gy() {
    let e = Rl(St.UseLoaderData),
        t = _l(St.UseLoaderData);
    if (e.errors && e.errors[t] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
        return
    }
    return e.loaderData[t]
}

function wy() {
    let e = Rl(St.UseActionData),
        t = _l(St.UseLoaderData);
    return e.actionData ? e.actionData[t] : void 0
}

function ch() {
    var e;
    let t = m.useContext(ih),
        n = Rl(St.UseRouteError),
        r = _l(St.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Sy() {
    let e = m.useContext(Wi);
    return e == null ? void 0 : e._data
}

function Ey() {
    let e = m.useContext(Wi);
    return e == null ? void 0 : e._error
}

function xy() {
    let {
        router: e
    } = py(uh.UseNavigateStable), t = _l(St.UseNavigateStable), n = m.useRef(!1);
    return oh(() => {
        n.current = !0
    }), m.useCallback(function(l, i) {
        i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Hi({
            fromRouteId: t
        }, i)))
    }, [e, t])
}

function w0(e) {
    return ay(e.context)
}

function ky(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = we.Pop,
        navigator: i,
        static: o = !1,
        future: a
    } = e;
    Cl() && H(!1);
    let u = t.replace(/^\/*/, "/"),
        s = m.useMemo(() => ({
            basename: u,
            navigator: i,
            static: o,
            future: Hi({
                v7_relativeSplatPath: !1
            }, a)
        }), [u, a, i, o]);
    typeof r == "string" && (r = Qt(r));
    let {
        pathname: f = "/",
        search: c = "",
        hash: h = "",
        state: E = null,
        key: g = "default"
    } = r, S = m.useMemo(() => {
        let _ = ct(f, u);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: c,
                hash: h,
                state: E,
                key: g
            },
            navigationType: l
        }
    }, [u, f, c, h, E, g, l]);
    return S == null ? null : m.createElement(Et.Provider, {
        value: s
    }, m.createElement($u.Provider, {
        children: n,
        value: S
    }))
}

function Cy(e) {
    let {
        children: t,
        errorElement: n,
        resolve: r
    } = e;
    return m.createElement(Ry, {
        resolve: r,
        errorElement: n
    }, m.createElement(_y, null, t))
}
var nt = function(e) {
    return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
}(nt || {});
const Py = new Promise(() => {});
class Ry extends m.Component {
    constructor(t) {
        super(t), this.state = {
            error: null
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    componentDidCatch(t, n) {
        console.error("<Await> caught the following error during render", t, n)
    }
    render() {
        let {
            children: t,
            errorElement: n,
            resolve: r
        } = this.props, l = null, i = nt.pending;
        if (!(r instanceof Promise)) i = nt.success, l = Promise.resolve(), Object.defineProperty(l, "_tracked", {
            get: () => !0
        }), Object.defineProperty(l, "_data", {
            get: () => r
        });
        else if (this.state.error) {
            i = nt.error;
            let o = this.state.error;
            l = Promise.reject().catch(() => {}), Object.defineProperty(l, "_tracked", {
                get: () => !0
            }), Object.defineProperty(l, "_error", {
                get: () => o
            })
        } else r._tracked ? (l = r, i = "_error" in l ? nt.error : "_data" in l ? nt.success : nt.pending) : (i = nt.pending, Object.defineProperty(r, "_tracked", {
            get: () => !0
        }), l = r.then(o => Object.defineProperty(r, "_data", {
            get: () => o
        }), o => Object.defineProperty(r, "_error", {
            get: () => o
        })));
        if (i === nt.error && l._error instanceof Bi) throw Py;
        if (i === nt.error && !n) throw l._error;
        if (i === nt.error) return m.createElement(Wi.Provider, {
            value: l,
            children: n
        });
        if (i === nt.success) return m.createElement(Wi.Provider, {
            value: l,
            children: t
        });
        throw l
    }
}

function _y(e) {
    let {
        children: t
    } = e, n = Sy(), r = typeof t == "function" ? t(n) : t;
    return m.createElement(m.Fragment, null, r)
}

function S0(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: m.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: m.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: m.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dt() {
    return Dt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Dt.apply(this, arguments)
}

function Hu(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, i;
    for (i = 0; i < r.length; i++) l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}
const pi = "get",
    Wo = "application/x-www-form-urlencoded";

function oo(e) {
    return e != null && typeof e.tagName == "string"
}

function Ly(e) {
    return oo(e) && e.tagName.toLowerCase() === "button"
}

function Ty(e) {
    return oo(e) && e.tagName.toLowerCase() === "form"
}

function Ny(e) {
    return oo(e) && e.tagName.toLowerCase() === "input"
}

function Dy(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function My(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Dy(e)
}

function Ba(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(l => [n, l]) : [
            [n, r]
        ])
    }, []))
}

function Oy(e, t) {
    let n = Ba(e);
    return t && t.forEach((r, l) => {
        n.has(l) || t.getAll(l).forEach(i => {
            n.append(l, i)
        })
    }), n
}
let ql = null;

function Fy() {
    if (ql === null) try {
        new FormData(document.createElement("form"), 0), ql = !1
    } catch {
        ql = !0
    }
    return ql
}
const zy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Vo(e) {
    return e != null && !zy.has(e) ? null : e
}

function Iy(e, t) {
    let n, r, l, i, o;
    if (Ty(e)) {
        let a = e.getAttribute("action");
        r = a ? ct(a, t) : null, n = e.getAttribute("method") || pi, l = Vo(e.getAttribute("enctype")) || Wo, i = new FormData(e)
    } else if (Ly(e) || Ny(e) && (e.type === "submit" || e.type === "image")) {
        let a = e.form;
        if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || a.getAttribute("action");
        if (r = u ? ct(u, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || pi, l = Vo(e.getAttribute("formenctype")) || Vo(a.getAttribute("enctype")) || Wo, i = new FormData(a, e), !Fy()) {
            let {
                name: s,
                type: f,
                value: c
            } = e;
            if (f === "image") {
                let h = s ? s + "." : "";
                i.append(h + "x", "0"), i.append(h + "y", "0")
            } else s && i.append(s, c)
        }
    } else {
        if (oo(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = pi, r = null, l = Wo, o = e
    }
    return i && l === "text/plain" && (o = i, i = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: l,
        formData: i,
        body: o
    }
}
const jy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Uy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
    Ay = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"],
    $y = "6";
try {
    window.__reactRouterVersion = $y
} catch {}
const fh = m.createContext({
        isTransitioning: !1
    }),
    dh = m.createContext(new Map),
    By = "startTransition",
    Mc = Hc[By],
    Hy = "flushSync",
    Oc = sv[Hy],
    Wy = "useId",
    Fc = Hc[Wy];

function Vy(e) {
    Mc ? Mc(e) : e()
}

function jr(e) {
    Oc ? Oc(e) : e()
}
let Ky = class {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
};

function x0(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [l, i] = m.useState(n.state), [o, a] = m.useState(), [u, s] = m.useState({
        isTransitioning: !1
    }), [f, c] = m.useState(), [h, E] = m.useState(), [g, S] = m.useState(), _ = m.useRef(new Map), {
        v7_startTransition: v
    } = r || {}, d = m.useCallback(P => {
        v ? Vy(P) : P()
    }, [v]), p = m.useCallback((P, T) => {
        let {
            deletedFetchers: D,
            unstable_flushSync: I,
            unstable_viewTransitionOpts: $
        } = T;
        D.forEach(te => _.current.delete(te)), P.fetchers.forEach((te, pe) => {
            te.data !== void 0 && _.current.set(pe, te.data)
        });
        let b = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!$ || b) {
            I ? jr(() => i(P)) : d(() => i(P));
            return
        }
        if (I) {
            jr(() => {
                h && (f && f.resolve(), h.skipTransition()), s({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: $.currentLocation,
                    nextLocation: $.nextLocation
                })
            });
            let te = n.window.document.startViewTransition(() => {
                jr(() => i(P))
            });
            te.finished.finally(() => {
                jr(() => {
                    c(void 0), E(void 0), a(void 0), s({
                        isTransitioning: !1
                    })
                })
            }), jr(() => E(te));
            return
        }
        h ? (f && f.resolve(), h.skipTransition(), S({
            state: P,
            currentLocation: $.currentLocation,
            nextLocation: $.nextLocation
        })) : (a(P), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: $.currentLocation,
            nextLocation: $.nextLocation
        }))
    }, [n.window, h, f, _, d]);
    m.useLayoutEffect(() => n.subscribe(p), [n, p]), m.useEffect(() => {
        u.isTransitioning && !u.flushSync && c(new Ky)
    }, [u]), m.useEffect(() => {
        if (f && o && n.window) {
            let P = o,
                T = f.promise,
                D = n.window.document.startViewTransition(async () => {
                    d(() => i(P)), await T
                });
            D.finished.finally(() => {
                c(void 0), E(void 0), a(void 0), s({
                    isTransitioning: !1
                })
            }), E(D)
        }
    }, [d, o, f, n.window]), m.useEffect(() => {
        f && o && l.location.key === o.location.key && f.resolve()
    }, [f, h, l.location, o]), m.useEffect(() => {
        !u.isTransitioning && g && (a(g.state), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: g.currentLocation,
            nextLocation: g.nextLocation
        }), S(void 0))
    }, [u.isTransitioning, g]), m.useEffect(() => {}, []);
    let k = m.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: P => n.navigate(P),
            push: (P, T, D) => n.navigate(P, {
                state: T,
                preventScrollReset: D == null ? void 0 : D.preventScrollReset
            }),
            replace: (P, T, D) => n.navigate(P, {
                replace: !0,
                state: T,
                preventScrollReset: D == null ? void 0 : D.preventScrollReset
            })
        }), [n]),
        L = n.basename || "/",
        y = m.useMemo(() => ({
            router: n,
            navigator: k,
            static: !1,
            basename: L
        }), [n, k, L]);
    return m.createElement(m.Fragment, null, m.createElement(xr.Provider, {
        value: y
    }, m.createElement(kl.Provider, {
        value: l
    }, m.createElement(dh.Provider, {
        value: _.current
    }, m.createElement(fh.Provider, {
        value: u
    }, m.createElement(ky, {
        basename: L,
        location: l.location,
        navigationType: l.historyAction,
        navigator: k,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, l.initialized || n.future.v7_partialHydration ? m.createElement(Qy, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}

function Qy(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return uy(t, void 0, r, n)
}
const Yy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    Xy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    hh = m.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: i,
            replace: o,
            state: a,
            target: u,
            to: s,
            preventScrollReset: f,
            unstable_viewTransition: c
        } = t, h = Hu(t, jy), {
            basename: E
        } = m.useContext(Et), g, S = !1;
        if (typeof s == "string" && Xy.test(s) && (g = s, Yy)) try {
            let p = new URL(window.location.href),
                k = s.startsWith("//") ? new URL(p.protocol + s) : new URL(s),
                L = ct(k.pathname, E);
            k.origin === p.origin && L != null ? s = L + k.search + k.hash : S = !0
        } catch {}
        let _ = Bu(s, {
                relative: l
            }),
            v = Gy(s, {
                replace: o,
                state: a,
                target: u,
                preventScrollReset: f,
                relative: l,
                unstable_viewTransition: c
            });

        function d(p) {
            r && r(p), p.defaultPrevented || v(p)
        }
        return m.createElement("a", Dt({}, h, {
            href: g || _,
            onClick: S || i ? r : d,
            ref: n,
            target: u
        }))
    }),
    Jy = m.forwardRef(function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: l = !1,
            className: i = "",
            end: o = !1,
            style: a,
            to: u,
            unstable_viewTransition: s,
            children: f
        } = t, c = Hu(t, Uy), h = Pl(u, {
            relative: c.relative
        }), E = Mt(), g = m.useContext(kl), {
            navigator: S,
            basename: _
        } = m.useContext(Et), v = g != null && ng(h) && s === !0, d = S.encodeLocation ? S.encodeLocation(h).pathname : h.pathname, p = E.pathname, k = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
        l || (p = p.toLowerCase(), k = k ? k.toLowerCase() : null, d = d.toLowerCase()), k && _ && (k = ct(k, _) || k);
        const L = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
        let y = p === d || !o && p.startsWith(d) && p.charAt(L) === "/",
            P = k != null && (k === d || !o && k.startsWith(d) && k.charAt(d.length) === "/"),
            T = {
                isActive: y,
                isPending: P,
                isTransitioning: v
            },
            D = y ? r : void 0,
            I;
        typeof i == "function" ? I = i(T) : I = [i, y ? "active" : null, P ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
        let $ = typeof a == "function" ? a(T) : a;
        return m.createElement(hh, Dt({}, c, {
            "aria-current": D,
            className: I,
            ref: n,
            style: $,
            to: u,
            unstable_viewTransition: s
        }), typeof f == "function" ? f(T) : f)
    }),
    ph = m.forwardRef((e, t) => {
        let {
            fetcherKey: n,
            navigate: r,
            reloadDocument: l,
            replace: i,
            state: o,
            method: a = pi,
            action: u,
            onSubmit: s,
            relative: f,
            preventScrollReset: c,
            unstable_viewTransition: h
        } = e, E = Hu(e, Ay), g = yh(), S = by(u, {
            relative: f
        }), _ = a.toLowerCase() === "get" ? "get" : "post", v = d => {
            if (s && s(d), d.defaultPrevented) return;
            d.preventDefault();
            let p = d.nativeEvent.submitter,
                k = (p == null ? void 0 : p.getAttribute("formmethod")) || a;
            g(p || d.currentTarget, {
                fetcherKey: n,
                method: k,
                navigate: r,
                replace: i,
                state: o,
                relative: f,
                preventScrollReset: c,
                unstable_viewTransition: h
            })
        };
        return m.createElement("form", Dt({
            ref: t,
            method: _,
            action: S,
            onSubmit: l ? s : v
        }, E))
    });
var wr;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(wr || (wr = {}));
var Vi;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Vi || (Vi = {}));

function ao(e) {
    let t = m.useContext(xr);
    return t || H(!1), t
}

function mh(e) {
    let t = m.useContext(kl);
    return t || H(!1), t
}

function Gy(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: i,
        relative: o,
        unstable_viewTransition: a
    } = t === void 0 ? {} : t, u = ah(), s = Mt(), f = Pl(e, {
        relative: o
    });
    return m.useCallback(c => {
        if (My(c, n)) {
            c.preventDefault();
            let h = r !== void 0 ? r : mn(s) === mn(f);
            u(e, {
                replace: h,
                state: l,
                preventScrollReset: i,
                relative: o,
                unstable_viewTransition: a
            })
        }
    }, [s, u, f, r, l, n, e, i, o, a])
}

function k0(e) {
    let t = m.useRef(Ba(e)),
        n = m.useRef(!1),
        r = Mt(),
        l = m.useMemo(() => Oy(r.search, n.current ? null : t.current), [r.search]),
        i = ah(),
        o = m.useCallback((a, u) => {
            const s = Ba(typeof a == "function" ? a(l) : a);
            n.current = !0, i("?" + s, u)
        }, [i, l]);
    return [l, o]
}

function Zy() {
    if (typeof document > "u") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
}
let qy = 0,
    vh = () => "__" + String(++qy) + "__";

function yh() {
    let {
        router: e
    } = ao(wr.UseSubmit), {
        basename: t
    } = m.useContext(Et), n = vy();
    return m.useCallback(function(r, l) {
        l === void 0 && (l = {}), Zy();
        let {
            action: i,
            method: o,
            encType: a,
            formData: u,
            body: s
        } = Iy(r, t);
        if (l.navigate === !1) {
            let f = l.fetcherKey || vh();
            e.fetch(f, n, l.action || i, {
                preventScrollReset: l.preventScrollReset,
                formData: u,
                body: s,
                formMethod: l.method || o,
                formEncType: l.encType || a,
                unstable_flushSync: l.unstable_flushSync
            })
        } else e.navigate(l.action || i, {
            preventScrollReset: l.preventScrollReset,
            formData: u,
            body: s,
            formMethod: l.method || o,
            formEncType: l.encType || a,
            replace: l.replace,
            state: l.state,
            fromRouteId: n,
            unstable_flushSync: l.unstable_flushSync,
            unstable_viewTransition: l.unstable_viewTransition
        })
    }, [e, t, n])
}

function by(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        basename: r
    } = m.useContext(Et), l = m.useContext(xt);
    l || H(!1);
    let [i] = l.matches.slice(-1), o = Dt({}, Pl(e || ".", {
        relative: n
    })), a = Mt();
    if (e == null) {
        o.search = a.search;
        let u = new URLSearchParams(o.search);
        u.has("index") && u.get("index") === "" && (u.delete("index"), o.search = u.toString() ? "?" + u.toString() : "")
    }
    return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : Nt([r, o.pathname])), mn(o)
}

function eg(e) {
    var t;
    let {
        key: n
    } = e === void 0 ? {} : e, {
        router: r
    } = ao(wr.UseFetcher), l = mh(Vi.UseFetcher), i = m.useContext(dh), o = m.useContext(xt), a = (t = o.matches[o.matches.length - 1]) == null ? void 0 : t.route.id;
    i || H(!1), o || H(!1), a == null && H(!1);
    let u = Fc ? Fc() : "",
        [s, f] = m.useState(n || u);
    n && n !== s ? f(n) : s || f(vh()), m.useEffect(() => (r.getFetcher(s), () => {
        r.deleteFetcher(s)
    }), [r, s]);
    let c = m.useCallback((d, p) => {
            a || H(!1), r.fetch(s, a, d, p)
        }, [s, a, r]),
        h = yh(),
        E = m.useCallback((d, p) => {
            h(d, Dt({}, p, {
                navigate: !1,
                fetcherKey: s
            }))
        }, [s, h]),
        g = m.useMemo(() => m.forwardRef((p, k) => m.createElement(ph, Dt({}, p, {
            navigate: !1,
            fetcherKey: s,
            ref: k
        }))), [s]),
        S = l.fetchers.get(s) || qd,
        _ = i.get(s);
    return m.useMemo(() => Dt({
        Form: g,
        submit: E,
        load: c
    }, S, {
        data: _
    }), [g, E, c, S, _])
}
const zc = "react-router-scroll-positions";
let bl = {};

function C0(e) {
    let {
        getKey: t,
        storageKey: n
    } = e === void 0 ? {} : e, {
        router: r
    } = ao(wr.UseScrollRestoration), {
        restoreScrollPosition: l,
        preventScrollReset: i
    } = mh(Vi.UseScrollRestoration), {
        basename: o
    } = m.useContext(Et), a = Mt(), u = sh(), s = yy();
    m.useEffect(() => (window.history.scrollRestoration = "manual", () => {
        window.history.scrollRestoration = "auto"
    }), []), tg(m.useCallback(() => {
        if (s.state === "idle") {
            let f = (t ? t(a, u) : null) || a.key;
            bl[f] = window.scrollY
        }
        try {
            sessionStorage.setItem(n || zc, JSON.stringify(bl))
        } catch {}
        window.history.scrollRestoration = "auto"
    }, [n, t, s.state, a, u])), typeof document < "u" && (m.useLayoutEffect(() => {
        try {
            let f = sessionStorage.getItem(n || zc);
            f && (bl = JSON.parse(f))
        } catch {}
    }, [n]), m.useLayoutEffect(() => {
        let f = t && o !== "/" ? (h, E) => t(Dt({}, h, {
                pathname: ct(h.pathname, o) || h.pathname
            }), E) : t,
            c = r == null ? void 0 : r.enableScrollRestoration(bl, () => window.scrollY, f);
        return () => c && c()
    }, [r, o, t]), m.useLayoutEffect(() => {
        if (l !== !1) {
            if (typeof l == "number") {
                window.scrollTo(0, l);
                return
            }
            if (a.hash) {
                let f = document.getElementById(decodeURIComponent(a.hash.slice(1)));
                if (f) {
                    f.scrollIntoView();
                    return
                }
            }
            i !== !0 && window.scrollTo(0, 0)
        }
    }, [a, l, i]))
}

function P0(e, t) {
    let {
        capture: n
    } = {};
    m.useEffect(() => {
        let r = n != null ? {
            capture: n
        } : void 0;
        return window.addEventListener("beforeunload", e, r), () => {
            window.removeEventListener("beforeunload", e, r)
        }
    }, [e, n])
}

function tg(e, t) {
    let {
        capture: n
    } = {};
    m.useEffect(() => {
        let r = n != null ? {
            capture: n
        } : void 0;
        return window.addEventListener("pagehide", e, r), () => {
            window.removeEventListener("pagehide", e, r)
        }
    }, [e, n])
}

function ng(e, t) {
    t === void 0 && (t = {});
    let n = m.useContext(fh);
    n == null && H(!1);
    let {
        basename: r
    } = ao(wr.useViewTransitionState), l = Pl(e, {
        relative: t.relative
    });
    if (!n.isTransitioning) return !1;
    let i = ct(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        o = ct(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return $i(l.pathname, o) != null || $i(l.pathname, i) != null
}
var rg = -1,
    lg = -2,
    ig = -3,
    og = -4,
    ag = -5,
    ug = -6,
    sg = -7,
    cg = "B",
    fg = "D",
    gh = "E",
    dg = "M",
    hg = "N",
    wh = "P",
    pg = "R",
    mg = "S",
    vg = "Y",
    yg = "U",
    gg = "Z",
    Sh = class {
        constructor() {
            zl(this, "promise");
            zl(this, "resolve");
            zl(this, "reject");
            this.promise = new Promise((e, t) => {
                this.resolve = e, this.reject = t
            })
        }
    };

function wg() {
    const e = new TextDecoder;
    let t = "";
    return new TransformStream({
        transform(n, r) {
            const l = e.decode(n, {
                    stream: !0
                }),
                i = (t + l).split(`
`);
            t = i.pop() || "";
            for (const o of i) r.enqueue(o)
        },
        flush(n) {
            t && n.enqueue(t)
        }
    })
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Ko = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;

function Ha(e) {
    const {
        hydrated: t,
        values: n
    } = this;
    if (typeof e == "number") return rt.call(this, e);
    if (!Array.isArray(e) || !e.length) throw new SyntaxError;
    const r = n.length;
    return n.push(...e), t.length = n.length, rt.call(this, r)
}

function rt(e) {
    const {
        hydrated: t,
        values: n,
        deferred: r,
        plugins: l
    } = this;
    switch (e) {
        case sg:
            return;
        case ag:
            return null;
        case lg:
            return NaN;
        case ug:
            return 1 / 0;
        case ig:
            return -1 / 0;
        case og:
            return -0
    }
    if (t[e]) return t[e];
    const i = n[e];
    if (!i || typeof i != "object") return t[e] = i;
    if (Array.isArray(i))
        if (typeof i[0] == "string") {
            const [o, a, u] = i;
            switch (o) {
                case fg:
                    return t[e] = new Date(a);
                case yg:
                    return t[e] = new URL(a);
                case cg:
                    return t[e] = BigInt(a);
                case pg:
                    return t[e] = new RegExp(a, u);
                case vg:
                    return t[e] = Symbol.for(a);
                case mg:
                    const s = new Set;
                    t[e] = s;
                    for (let S = 1; S < i.length; S++) s.add(rt.call(this, i[S]));
                    return s;
                case dg:
                    const f = new Map;
                    t[e] = f;
                    for (let S = 1; S < i.length; S += 2) f.set(rt.call(this, i[S]), rt.call(this, i[S + 1]));
                    return f;
                case hg:
                    const c = Object.create(null);
                    t[e] = c;
                    for (const S in a) c[rt.call(this, Number(S))] = rt.call(this, a[S]);
                    return c;
                case wh:
                    if (t[a]) return t[e] = t[a]; {
                        const S = new Sh;
                        return r[a] = S, t[e] = S.promise
                    }
                case gh:
                    const [, h, E] = i;
                    let g = E && Ko && Ko[E] ? new Ko[E](h) : new Error(h);
                    return t[e] = g, g;
                case gg:
                    return rt.call(this, a);
                default:
                    if (Array.isArray(l)) {
                        const S = i.slice(1).map(_ => rt.call(this, _));
                        for (const _ of l) {
                            const v = _(i[0], ...S);
                            if (v) return t[e] = v.value
                        }
                    }
                    throw new SyntaxError
            }
        } else {
            const o = [];
            t[e] = o;
            for (let a = 0; a < i.length; a++) {
                const u = i[a];
                u !== rg && (o[a] = rt.call(this, u))
            }
            return o
        }
    else {
        const o = {};
        t[e] = o;
        for (const a in i) o[rt.call(this, Number(a))] = rt.call(this, i[a]);
        return o
    }
}
async function Sg(e, t) {
    const {
        plugins: n
    } = t ? ? {}, r = new Sh, l = e.pipeThrough(wg()).getReader(), i = {
        values: [],
        hydrated: [],
        deferred: {},
        plugins: n
    }, o = await Eg.call(i, l);
    let a = r.promise;
    return o.done ? r.resolve() : a = xg.call(i, l).then(r.resolve).catch(u => {
        for (const s of Object.values(i.deferred)) s.reject(u);
        r.reject(u)
    }), {
        done: a.then(() => l.closed),
        value: o.value
    }
}
async function Eg(e) {
    const t = await e.read();
    if (!t.value) throw new SyntaxError;
    let n;
    try {
        n = JSON.parse(t.value)
    } catch {
        throw new SyntaxError
    }
    return {
        done: t.done,
        value: Ha.call(this, n)
    }
}
async function xg(e) {
    let t = await e.read();
    for (; !t.done;) {
        if (!t.value) continue;
        const n = t.value;
        switch (n[0]) {
            case wh:
                {
                    const r = n.indexOf(":"),
                        l = Number(n.slice(1, r)),
                        i = this.deferred[l];
                    if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
                    const o = n.slice(r + 1);
                    let a;
                    try {
                        a = JSON.parse(o)
                    } catch {
                        throw new SyntaxError
                    }
                    const u = Ha.call(this, a);i.resolve(u);
                    break
                }
            case gh:
                {
                    const r = n.indexOf(":"),
                        l = Number(n.slice(1, r)),
                        i = this.deferred[l];
                    if (!i) throw new Error(`Deferred ID ${l} not found in stream`);
                    const o = n.slice(r + 1);
                    let a;
                    try {
                        a = JSON.parse(o)
                    } catch {
                        throw new SyntaxError
                    }
                    const u = Ha.call(this, a);i.reject(u);
                    break
                }
            default:
                throw new SyntaxError
        }
        t = await e.read()
    }
}
/**
 * @remix-run/server-runtime v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Eh = Symbol("SingleFetchRedirect");
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ee() {
    return Ee = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ee.apply(this, arguments)
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zn(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function xh(e, t) {
    if (e.id in t) return t[e.id];
    try {
        let n = await
        import (e.module);
        return t[e.id] = n, n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__remixContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kg(e, t, n) {
    let r = e.map(i => {
            var o;
            let a = t[i.route.id],
                u = n.routes[i.route.id];
            return [u.css ? u.css.map(s => ({
                rel: "stylesheet",
                href: s
            })) : [], (a == null || (o = a.links) === null || o === void 0 ? void 0 : o.call(a)) || []]
        }).flat(2),
        l = Tg(e, n);
    return Ch(r, l)
}
async function kh(e, t) {
    var n, r;
    if (!e.css && !t.links || !Dg()) return;
    let l = [((n = e.css) === null || n === void 0 ? void 0 : n.map(a => ({
        rel: "stylesheet",
        href: a
    }))) ? ? [], ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ? ? []].flat(1);
    if (l.length === 0) return;
    let i = [];
    for (let a of l) !Wu(a) && a.rel === "stylesheet" && i.push({ ...a,
        rel: "preload",
        as: "style"
    });
    let o = i.filter(a => (!a.media || window.matchMedia(a.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`));
    await Promise.all(o.map(Cg))
}
async function Cg(e) {
    return new Promise(t => {
        let n = document.createElement("link");
        Object.assign(n, e);

        function r() {
            document.head.contains(n) && document.head.removeChild(n)
        }
        n.onload = () => {
            r(), t()
        }, n.onerror = () => {
            r(), t()
        }, document.head.appendChild(n)
    })
}

function Wu(e) {
    return e != null && typeof e.page == "string"
}

function Pg(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function Rg(e, t, n) {
    let r = await Promise.all(e.map(async l => {
        let i = await xh(t.routes[l.route.id], n);
        return i.links ? i.links() : []
    }));
    return Ch(r.flat(1).filter(Pg).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ? { ...l,
        rel: "prefetch",
        as: "style"
    } : { ...l,
        rel: "prefetch"
    }))
}

function Ic(e, t, n, r, l, i) {
    let o = Ph(e),
        a = (f, c) => n[c] ? f.route.id !== n[c].route.id : !0,
        u = (f, c) => {
            var h;
            return n[c].pathname !== f.pathname || ((h = n[c].route.path) === null || h === void 0 ? void 0 : h.endsWith("*")) && n[c].params["*"] !== f.params["*"]
        };
    return i === "data" && l.search !== o.search ? t.filter((f, c) => {
        if (!r.routes[f.route.id].hasLoader) return !1;
        if (a(f, c) || u(f, c)) return !0;
        if (f.route.shouldRevalidate) {
            var E;
            let g = f.route.shouldRevalidate({
                currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
                currentParams: ((E = n[0]) === null || E === void 0 ? void 0 : E.params) || {},
                nextUrl: new URL(e, window.origin),
                nextParams: f.params,
                defaultShouldRevalidate: !0
            });
            if (typeof g == "boolean") return g
        }
        return !0
    }) : t.filter((f, c) => {
        let h = r.routes[f.route.id];
        return (i === "assets" || h.hasLoader) && (a(f, c) || u(f, c))
    })
}

function _g(e, t, n) {
    let r = Ph(e);
    return Vu(t.filter(l => n.routes[l.route.id].hasLoader && !n.routes[l.route.id].hasClientLoader).map(l => {
        let {
            pathname: i,
            search: o
        } = r, a = new URLSearchParams(o);
        return a.set("_data", l.route.id), `${i}?${a}`
    }))
}

function Lg(e, t) {
    return Vu(e.map(n => {
        let r = t.routes[n.route.id],
            l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l
    }).flat(1))
}

function Tg(e, t) {
    return Vu(e.map(n => {
        let r = t.routes[n.route.id],
            l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l
    }).flat(1))
}

function Vu(e) {
    return [...new Set(e)]
}

function Ng(e) {
    let t = {},
        n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t
}

function Ch(e, t) {
    let n = new Set,
        r = new Set(t);
    return e.reduce((l, i) => {
        if (t && !Wu(i) && i.as === "script" && i.href && r.has(i.href)) return l;
        let a = JSON.stringify(Ng(i));
        return n.has(a) || (n.add(a), l.push({
            key: a,
            link: i
        })), l
    }, [])
}

function Ph(e) {
    let t = Qt(e);
    return t.search === void 0 && (t.search = ""), t
}
let ei;

function Dg() {
    if (ei !== void 0) return ei;
    let e = document.createElement("link");
    return ei = e.relList.supports("preload"), e = null, ei
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Mg = {
        "&": "\\u0026",
        ">": "\\u003e",
        "<": "\\u003c",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    },
    Og = /[&><\u2028\u2029]/g;

function ti(e) {
    return e.replace(Og, t => Mg[t])
}

function jc(e) {
    return {
        __html: e
    }
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Fg(e) {
    return e.headers.get("X-Remix-Catch") != null
}

function zg(e) {
    return e.headers.get("X-Remix-Error") != null
}

function Ig(e) {
    return Rh(e) && e.status >= 400 && e.headers.get("X-Remix-Error") == null && e.headers.get("X-Remix-Catch") == null && e.headers.get("X-Remix-Response") == null
}

function jg(e) {
    return e.headers.get("X-Remix-Redirect") != null
}

function Ug(e) {
    var t;
    return !!((t = e.headers.get("Content-Type")) !== null && t !== void 0 && t.match(/text\/remix-deferred/))
}

function Rh(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function Ag(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
async function _h(e, t, n = 0) {
    let r = new URL(e.url);
    r.searchParams.set("_data", t), n > 0 && await new Promise(a => setTimeout(a, 5 ** n * 10));
    let l = await Ku(e),
        i = window.__remixRevalidation,
        o = await fetch(r.href, l).catch(a => {
            if (typeof i == "number" && i === window.__remixRevalidation && (a == null ? void 0 : a.name) === "TypeError" && n < 3) return _h(e, t, n + 1);
            throw a
        });
    if (zg(o)) {
        let a = await o.json(),
            u = new Error(a.message);
        return u.stack = a.stack, u
    }
    if (Ig(o)) {
        let a = await o.text(),
            u = new Error(a);
        return u.stack = void 0, u
    }
    return o
}
async function Ku(e) {
    let t = {
        signal: e.signal
    };
    if (e.method !== "GET") {
        t.method = e.method;
        let n = e.headers.get("Content-Type");
        n && /\bapplication\/json\b/.test(n) ? (t.headers = {
            "Content-Type": n
        }, t.body = JSON.stringify(await e.json())) : n && /\btext\/plain\b/.test(n) ? (t.headers = {
            "Content-Type": n
        }, t.body = await e.text()) : n && /\bapplication\/x-www-form-urlencoded\b/.test(n) ? t.body = new URLSearchParams(await e.text()) : t.body = await e.formData()
    }
    return t
}
const $g = "__deferred_promise:";
async function Bg(e) {
    if (!e) throw new Error("parseDeferredReadableStream requires stream argument");
    let t, n = {};
    try {
        let r = Hg(e),
            i = (await r.next()).value;
        if (!i) throw new Error("no critical data");
        let o = JSON.parse(i);
        if (typeof o == "object" && o !== null)
            for (let [a, u] of Object.entries(o)) typeof u != "string" || !u.startsWith($g) || (t = t || {}, t[a] = new Promise((s, f) => {
                n[a] = {
                    resolve: c => {
                        s(c), delete n[a]
                    },
                    reject: c => {
                        f(c), delete n[a]
                    }
                }
            }));
        return (async () => {
            try {
                for await (let a of r) {
                    let [u, ...s] = a.split(":"), f = s.join(":"), c = JSON.parse(f);
                    if (u === "data")
                        for (let [h, E] of Object.entries(c)) n[h] && n[h].resolve(E);
                    else if (u === "error")
                        for (let [h, E] of Object.entries(c)) {
                            let g = new Error(E.message);
                            g.stack = E.stack, n[h] && n[h].reject(g)
                        }
                }
                for (let [a, u] of Object.entries(n)) u.reject(new Bi(`Deferred ${a} will never be resolved`))
            } catch (a) {
                for (let u of Object.values(n)) u.reject(a)
            }
        })(), new Dv({ ...o,
            ...t
        })
    } catch (r) {
        for (let l of Object.values(n)) l.reject(r);
        throw r
    }
}
async function* Hg(e) {
    let t = e.getReader(),
        n = [],
        r = [],
        l = !1,
        i = new TextEncoder,
        o = new TextDecoder,
        a = async () => {
            if (r.length > 0) return r.shift();
            for (; !l && r.length === 0;) {
                let s = await t.read();
                if (s.done) {
                    l = !0;
                    break
                }
                n.push(s.value);
                try {
                    let c = o.decode(Uc(...n)).split(`

`);
                    if (c.length >= 2 && (r.push(...c.slice(0, -1)), n = [i.encode(c.slice(-1).join(`

`))]), r.length > 0) break
                } catch {
                    continue
                }
            }
            return r.length > 0 || n.length > 0 && (r = o.decode(Uc(...n)).split(`

`).filter(f => f), n = []), r.shift()
        },
        u = await a();
    for (; u;) yield u, u = await a()
}

function Uc(...e) {
    let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
        n = 0;
    for (let r of e) t.set(r, n), n += r.length;
    return t
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function R0(e, t) {
    return async ({
        request: n,
        matches: r
    }) => n.method !== "GET" ? Wg(n, r) : Vg(e, t, n, r)
}

function Wg(e, t) {
    return Promise.all(t.map(async n => {
        let r;
        return { ...await n.resolve(async i => ({
                type: "data",
                result: await i(async () => {
                    let a = Qu(e.url),
                        u = await Ku(e),
                        {
                            data: s,
                            status: f
                        } = await Wa(a, u);
                    return r = f, Va(s, n.route.id)
                }),
                status: r
            })),
            status: r
        }
    }))
}

function Vg(e, t, n, r) {
    let l;
    return Promise.all(r.map(async i => i.resolve(async o => {
        let a, u = Kg(Qu(n.url)),
            s = await Ku(n);
        return e.routes[i.route.id].hasClientLoader ? a = await o(async () => {
            u.searchParams.set("_routes", i.route.id);
            let {
                data: f
            } = await Wa(u, s);
            return Ac(f, i.route.id)
        }) : a = await o(async () => {
            l || (u = Lh(e, t, r.map(c => c.route), r.filter(c => c.shouldLoad).map(c => c.route), u), l = Wa(u, s).then(({
                data: c
            }) => c));
            let f = await l;
            return Ac(f, i.route.id)
        }), {
            type: "data",
            result: a
        }
    })))
}

function Kg(e) {
    let t = e.searchParams.getAll("index");
    e.searchParams.delete("index");
    let n = [];
    for (let r of t) r && n.push(r);
    for (let r of n) e.searchParams.append("index", r);
    return e
}

function Lh(e, t, n, r, l) {
    let i = s => s.filter(f => e.routes[f].hasLoader).join(",");
    if (!n.some(s => {
            var f, c;
            return ((f = t[s.id]) === null || f === void 0 ? void 0 : f.shouldRevalidate) || ((c = e.routes[s.id]) === null || c === void 0 ? void 0 : c.hasClientLoader)
        })) return l;
    let a = i(n.map(s => s.id)),
        u = i(r.filter(s => {
            var f;
            return !((f = e.routes[s.id]) !== null && f !== void 0 && f.hasClientLoader)
        }).map(s => s.id));
    return a !== u && l.searchParams.set("_routes", u), l
}

function Qu(e) {
    let t = typeof e == "string" ? new URL(e, window.location.origin) : e;
    return t.pathname = `${t.pathname==="/"?"_root":t.pathname}.data`, t
}
async function Wa(e, t) {
    let n = await fetch(e, t);
    zn(n.body, "No response body to decode");
    try {
        let r = await Qg(n.body, window);
        return {
            status: n.status,
            data: r.value
        }
    } catch (r) {
        throw console.error(r), new Error(`Unable to decode turbo-stream response from URL: ${e.toString()}`)
    }
}

function Qg(e, t) {
    return Sg(e, {
        plugins: [(n, ...r) => {
            if (n === "SanitizedError") {
                let [l, i, o] = r, a = Error;
                l && l in t && typeof t[l] == "function" && (a = t[l]);
                let u = new a(i);
                return u.stack = o, {
                    value: u
                }
            }
            if (n === "ErrorResponse") {
                let [l, i, o] = r;
                return {
                    value: new gr(i, o, l)
                }
            }
            if (n === "SingleFetchRedirect") return {
                value: {
                    [Eh]: r[0]
                }
            }
        }]
    })
}

function Ac(e, t) {
    let n = e[Eh];
    return n ? Va(n, t) : e[t] !== void 0 ? Va(e[t], t) : null
}

function Va(e, t) {
    if ("error" in e) throw e.error;
    if ("redirect" in e) {
        let n = {};
        return e.revalidate && (n["X-Remix-Revalidate"] = "yes"), e.reload && (n["X-Remix-Reload-Document"] = "yes"), Gd(e.redirect, {
            status: e.status,
            headers: n
        })
    } else {
        if ("data" in e) return e.data;
        throw new Error(`No response found for routeId "${t}"`)
    }
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class _0 extends m.Component {
    constructor(t) {
        super(t), this.state = {
            error: t.error || null,
            location: t.location
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ? {
            error: t.error || null,
            location: t.location
        } : {
            error: t.error || n.error,
            location: n.location
        }
    }
    render() {
        return this.state.error ? m.createElement(Th, {
            error: this.state.error,
            isOutsideRemixApp: !0
        }) : this.props.children
    }
}

function Th({
    error: e,
    isOutsideRemixApp: t
}) {
    console.error(e);
    let n = m.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
        }
    });
    if (xl(e)) return m.createElement(Ka, {
        title: "Unhandled Thrown Response!"
    }, m.createElement("h1", {
        style: {
            fontSize: "24px"
        }
    }, e.status, " ", e.statusText), n);
    let r;
    if (e instanceof Error) r = e;
    else {
        let l = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
        r = new Error(l)
    }
    return m.createElement(Ka, {
        title: "Application Error!",
        isOutsideRemixApp: t
    }, m.createElement("h1", {
        style: {
            fontSize: "24px"
        }
    }, "Application Error"), m.createElement("pre", {
        style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto"
        }
    }, r.stack), n)
}

function Ka({
    title: e,
    renderScripts: t,
    isOutsideRemixApp: n,
    children: r
}) {
    var l;
    let {
        routeModules: i
    } = kr();
    return (l = i.root) !== null && l !== void 0 && l.Layout && !n ? r : m.createElement("html", {
        lang: "en"
    }, m.createElement("head", null, m.createElement("meta", {
        charSet: "utf-8"
    }), m.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), m.createElement("title", null, e)), m.createElement("body", null, m.createElement("main", {
        style: {
            fontFamily: "system-ui, sans-serif",
            padding: "2rem"
        }
    }, r, t ? m.createElement(f0, null) : null)))
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Yg() {
    return m.createElement(Ka, {
        title: "Loading...",
        renderScripts: !0
    }, m.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `
        }
    }))
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nh(e) {
    let t = {};
    return Object.values(e).forEach(n => {
        let r = n.parentId || "";
        t[r] || (t[r] = []), t[r].push(n)
    }), t
}

function Xg(e, t, n) {
    let r = Dh(t),
        l = t.HydrateFallback && (!n || e.id === "root") ? t.HydrateFallback : e.id === "root" ? Yg : void 0,
        i = t.ErrorBoundary ? t.ErrorBoundary : e.id === "root" ? () => m.createElement(Th, {
            error: ch()
        }) : void 0;
    return e.id === "root" && t.Layout ? { ...r ? {
            element: m.createElement(t.Layout, null, m.createElement(r, null))
        } : {
            Component: r
        },
        ...i ? {
            errorElement: m.createElement(t.Layout, null, m.createElement(i, null))
        } : {
            ErrorBoundary: i
        },
        ...l ? {
            hydrateFallbackElement: m.createElement(t.Layout, null, m.createElement(l, null))
        } : {
            HydrateFallback: l
        }
    } : {
        Component: r,
        ErrorBoundary: i,
        HydrateFallback: l
    }
}

function L0(e, t, n, r, l, i) {
    return Yu(t, n, r, l, i, "", Nh(t), e)
}

function ni(e, t, n) {
    if (n) {
        let o = `You cannot call ${e==="action"?"serverAction()":"serverLoader()"} in SPA Mode (routeId: "${t.id}")`;
        throw console.error(o), new gr(400, "Bad Request", new Error(o), !0)
    }
    let l = `You are trying to call ${e==="action"?"serverAction()":"serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    if (e === "loader" && !t.hasLoader || e === "action" && !t.hasAction) throw console.error(l), new gr(400, "Bad Request", new Error(l), !0)
}

function Qo(e, t) {
    let n = e === "clientAction" ? "a" : "an",
        r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
    throw console.error(r), new gr(405, "Method Not Allowed", new Error(r), !0)
}

function Yu(e, t, n, r, l, i = "", o = Nh(e), a) {
    return (o[i] || []).map(u => {
        let s = t[u.id];
        async function f(p, k, L) {
            if (typeof L == "function") return await L();
            let y = await Gg(p, u);
            return k ? Zg(y) : y
        }

        function c(p, k, L) {
            return u.hasLoader ? f(p, k, L) : Promise.resolve(null)
        }

        function h(p, k, L) {
            if (!u.hasAction) throw Qo("action", u.id);
            return f(p, k, L)
        }
        async function E(p) {
            let k = t[u.id],
                L = k ? kh(u, k) : Promise.resolve();
            try {
                return p()
            } finally {
                await L
            }
        }
        let g = {
            id: u.id,
            index: u.index,
            path: u.path
        };
        if (s) {
            var S, _, v;
            Object.assign(g, { ...g,
                ...Xg(u, s, l),
                handle: s.handle,
                shouldRevalidate: a ? $c(u.id, s.shouldRevalidate, a) : s.shouldRevalidate
            });
            let p = n == null || (S = n.loaderData) === null || S === void 0 ? void 0 : S[u.id],
                k = n == null || (_ = n.errors) === null || _ === void 0 ? void 0 : _[u.id],
                L = a == null && (((v = s.clientLoader) === null || v === void 0 ? void 0 : v.hydrate) === !0 || !u.hasLoader);
            g.loader = async ({
                request: y,
                params: P
            }, T) => {
                try {
                    return await E(async () => (zn(s, "No `routeModule` available for critical-route loader"), s.clientLoader ? s.clientLoader({
                        request: y,
                        params: P,
                        async serverLoader() {
                            if (ni("loader", u, l), L) {
                                if (k !== void 0) throw k;
                                return p
                            }
                            return c(y, !0, T)
                        }
                    }) : l ? null : c(y, !1, T)))
                } finally {
                    L = !1
                }
            }, g.loader.hydrate = bg(u, s, l), g.action = ({
                request: y,
                params: P
            }, T) => E(async () => {
                if (zn(s, "No `routeModule` available for critical-route action"), !s.clientAction) {
                    if (l) throw Qo("clientAction", u.id);
                    return h(y, !1, T)
                }
                return s.clientAction({
                    request: y,
                    params: P,
                    async serverAction() {
                        return ni("action", u, l), h(y, !0, T)
                    }
                })
            })
        } else u.hasClientLoader || (g.loader = ({
            request: p
        }, k) => E(() => l ? Promise.resolve(null) : c(p, !1, k))), u.hasClientAction || (g.action = ({
            request: p
        }, k) => E(() => {
            if (l) throw Qo("clientAction", u.id);
            return h(p, !1, k)
        })), g.lazy = async () => {
            let p = await Jg(u, t),
                k = { ...p
                };
            if (p.clientLoader) {
                let L = p.clientLoader;
                k.loader = (y, P) => L({ ...y,
                    async serverLoader() {
                        return ni("loader", u, l), c(y.request, !0, P)
                    }
                })
            }
            if (p.clientAction) {
                let L = p.clientAction;
                k.action = (y, P) => L({ ...y,
                    async serverAction() {
                        return ni("action", u, l), h(y.request, !0, P)
                    }
                })
            }
            return a && (k.shouldRevalidate = $c(u.id, p.shouldRevalidate, a)), { ...k.loader ? {
                    loader: k.loader
                } : {},
                ...k.action ? {
                    action: k.action
                } : {},
                hasErrorBoundary: k.hasErrorBoundary,
                shouldRevalidate: k.shouldRevalidate,
                handle: k.handle,
                Component: k.Component,
                ErrorBoundary: k.ErrorBoundary
            }
        };
        let d = Yu(e, t, n, r, l, u.id, o, a);
        return d.length > 0 && (g.children = d), g
    })
}

function $c(e, t, n) {
    let r = !1;
    return l => r ? t ? t(l) : l.defaultShouldRevalidate : (r = !0, n.has(e))
}
async function Jg(e, t) {
    let n = await xh(e, t);
    return await kh(e, n), {
        Component: Dh(n),
        ErrorBoundary: n.ErrorBoundary,
        clientAction: n.clientAction,
        clientLoader: n.clientLoader,
        handle: n.handle,
        links: n.links,
        meta: n.meta,
        shouldRevalidate: n.shouldRevalidate
    }
}
async function Gg(e, t) {
    let n = await _h(e, t.id);
    if (n instanceof Error) throw n;
    if (jg(n)) throw qg(n);
    if (Fg(n)) throw n;
    return Ug(n) && n.body ? await Bg(n.body) : n
}

function Zg(e) {
    if (Ag(e)) return e.data;
    if (Rh(e)) {
        let t = e.headers.get("Content-Type");
        return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text()
    }
    return e
}

function qg(e) {
    let t = parseInt(e.headers.get("X-Remix-Status"), 10) || 302,
        n = e.headers.get("X-Remix-Redirect"),
        r = {},
        l = e.headers.get("X-Remix-Revalidate");
    l && (r["X-Remix-Revalidate"] = l);
    let i = e.headers.get("X-Remix-Reload-Document");
    return i && (r["X-Remix-Reload-Document"] = i), Gd(n, {
        status: t,
        headers: r
    })
}

function Dh(e) {
    if (e.default == null) return;
    if (!(typeof e.default == "object" && Object.keys(e.default).length === 0)) return e.default
}

function bg(e, t, n) {
    return n && e.id !== "root" || t.clientLoader != null && (t.clientLoader.hydrate === !0 || e.hasLoader !== !0)
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const e0 = 7680;
let _n = null;

function Xu(e, t) {
    return e.unstable_fogOfWar === !0 && !t
}

function t0(e, t) {
    let n = new Set(t.state.matches.map(o => o.route.id)),
        r = t.state.location.pathname.split("/").filter(Boolean),
        l = ["/"];
    for (r.pop(); r.length > 0;) l.push(`/${r.join("/")}`), r.pop();
    l.forEach(o => {
        let a = jt(t.routes, o, t.basename);
        a && a.forEach(u => n.add(u.route.id))
    });
    let i = [...n].reduce((o, a) => Object.assign(o, {
        [a]: e.routes[a]
    }), {});
    return { ...e,
        routes: i
    }
}

function T0(e, t, n, r, l) {
    return Xu(n, r) ? (_n = {
        nextPaths: new Set,
        knownGoodPaths: new Set,
        known404Paths: new Set
    }, {
        enabled: !0,
        patchRoutesOnMiss: async ({
            path: i,
            patch: o
        }) => {
            _n.known404Paths.has(i) || _n.knownGoodPaths.has(i) || await Mh([i], _n, e, t, n, r, l, o)
        }
    }) : {
        enabled: !1
    }
}

function N0(e, t, n, r, l) {
    m.useEffect(() => {
        var i;
        if (!Xu(r, l) || ((i = navigator.connection) === null || i === void 0 ? void 0 : i.saveData) === !0) return;

        function o(c) {
            let h = c.tagName === "FORM" ? c.getAttribute("action") : c.getAttribute("href");
            if (!h) return;
            let E = new URL(h, window.location.origin),
                {
                    knownGoodPaths: g,
                    known404Paths: S,
                    nextPaths: _
                } = _n;
            g.has(E.pathname) || S.has(E.pathname) || _.add(E.pathname)
        }
        async function a() {
            let c = n0(_n);
            if (c.length !== 0) try {
                await Mh(c, _n, t, n, r, l, e.basename, e.patchRoutes)
            } catch (h) {
                console.error("Failed to fetch manifest patches", h)
            }
        }
        document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach(c => o(c)), a();
        let u = r0(a, 100);

        function s(c) {
            return c.nodeType === Node.ELEMENT_NODE
        }
        let f = new MutationObserver(c => {
            let h = new Set;
            c.forEach(E => {
                [E.target, ...E.addedNodes].forEach(g => {
                    s(g) && ((g.tagName === "A" && g.getAttribute("data-discover") || g.tagName === "FORM" && g.getAttribute("data-discover")) && h.add(g), g.tagName !== "A" && g.querySelectorAll("a[data-discover], form[data-discover]").forEach(S => h.add(S)))
                })
            }), h.forEach(E => o(E)), u()
        });
        return f.observe(document.documentElement, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: ["data-discover", "href", "action"]
        }), () => f.disconnect()
    }, [r, l, t, n, e])
}

function n0(e, t) {
    let {
        knownGoodPaths: n,
        known404Paths: r,
        nextPaths: l
    } = e;
    return Array.from(l.keys()).filter(i => n.has(i) || r.has(i) ? (l.delete(i), !1) : !0)
}
async function Mh(e, t, n, r, l, i, o, a) {
    let {
        nextPaths: u,
        knownGoodPaths: s,
        known404Paths: f
    } = t, c = `${o??"/"}/__manifest`.replace(/\/+/g, "/"), h = new URL(c, window.location.origin);
    if (h.searchParams.set("version", n.version), e.forEach(d => h.searchParams.append("p", d)), h.toString().length > e0) {
        u.clear();
        return
    }
    let E = await fetch(h);
    if (E.ok) {
        if (E.status >= 400) throw new Error(await E.text())
    } else throw new Error(`${E.status} ${E.statusText}`);
    let g = await E.json(),
        S = new Set(Object.keys(n.routes)),
        _ = Object.values(g.patches).reduce((d, p) => S.has(p.id) ? d : Object.assign(d, {
            [p.id]: p
        }), {});
    Object.assign(n.routes, _), g.notFoundPaths.forEach(d => f.add(d)), e.forEach(d => s.add(d));
    let v = new Set;
    Object.values(_).forEach(d => {
        (!d.parentId || !_[d.parentId]) && v.add(d.parentId)
    }), v.forEach(d => a(d || null, Yu(_, r, null, l, i, d)))
}

function r0(e, t) {
    let n;
    return (...r) => {
        window.clearTimeout(n), n = window.setTimeout(() => e(...r), t)
    }
}
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Oh() {
    let e = m.useContext(xr);
    return zn(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
}

function uo() {
    let e = m.useContext(kl);
    return zn(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
}
const Fh = m.createContext(void 0);
Fh.displayName = "Remix";

function kr() {
    let e = m.useContext(Fh);
    return zn(e, "You must render this element inside a <Remix> element"), e
}

function zh(e, t) {
    let [n, r] = m.useState(!1), [l, i] = m.useState(!1), {
        onFocus: o,
        onBlur: a,
        onMouseEnter: u,
        onMouseLeave: s,
        onTouchStart: f
    } = t, c = m.useRef(null);
    m.useEffect(() => {
        if (e === "render" && i(!0), e === "viewport") {
            let g = _ => {
                    _.forEach(v => {
                        i(v.isIntersecting)
                    })
                },
                S = new IntersectionObserver(g, {
                    threshold: .5
                });
            return c.current && S.observe(c.current), () => {
                S.disconnect()
            }
        }
    }, [e]);
    let h = () => {
            e === "intent" && r(!0)
        },
        E = () => {
            e === "intent" && (r(!1), i(!1))
        };
    return m.useEffect(() => {
        if (n) {
            let g = setTimeout(() => {
                i(!0)
            }, 100);
            return () => {
                clearTimeout(g)
            }
        }
    }, [n]), [l, c, {
        onFocus: Ur(o, h),
        onBlur: Ur(a, E),
        onMouseEnter: Ur(u, h),
        onMouseLeave: Ur(s, E),
        onTouchStart: Ur(f, h)
    }]
}
const Ju = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function Gu(e, t, n) {
    return e === "render" && !t && !n ? "true" : void 0
}
let l0 = m.forwardRef(({
    to: e,
    prefetch: t = "none",
    discover: n = "render",
    ...r
}, l) => {
    let i = typeof e == "string" && Ju.test(e),
        o = Bu(e),
        [a, u, s] = zh(t, r);
    return m.createElement(m.Fragment, null, m.createElement(Jy, Ee({}, r, s, {
        ref: Ih(l, u),
        to: e,
        "data-discover": Gu(n, i, r.reloadDocument)
    })), a && !i ? m.createElement(qu, {
        page: o
    }) : null)
});
l0.displayName = "NavLink";
let i0 = m.forwardRef(({
    to: e,
    prefetch: t = "none",
    discover: n = "render",
    ...r
}, l) => {
    let i = typeof e == "string" && Ju.test(e),
        o = Bu(e),
        [a, u, s] = zh(t, r);
    return m.createElement(m.Fragment, null, m.createElement(hh, Ee({}, r, s, {
        ref: Ih(l, u),
        to: e,
        "data-discover": Gu(n, i, r.reloadDocument)
    })), a && !i ? m.createElement(qu, {
        page: o
    }) : null)
});
i0.displayName = "Link";
let o0 = m.forwardRef(({
    discover: e = "render",
    ...t
}, n) => {
    let r = typeof t.action == "string" && Ju.test(t.action);
    return m.createElement(ph, Ee({}, t, {
        ref: n,
        "data-discover": Gu(e, r, t.reloadDocument)
    }))
});
o0.displayName = "Form";

function Ur(e, t) {
    return n => {
        e && e(n), n.defaultPrevented || t(n)
    }
}

function Zu(e, t, n) {
    if (n && !mi) return [e[0]];
    if (t) {
        let r = e.findIndex(l => t[l.route.id] !== void 0);
        return e.slice(0, r + 1)
    }
    return e
}

function D0() {
    let {
        isSpaMode: e,
        manifest: t,
        routeModules: n,
        criticalCss: r
    } = kr(), {
        errors: l,
        matches: i
    } = uo(), o = Zu(i, l, e), a = m.useMemo(() => kg(o, n, t), [o, n, t]);
    return m.createElement(m.Fragment, null, r ? m.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: r
        }
    }) : null, a.map(({
        key: u,
        link: s
    }) => Wu(s) ? m.createElement(qu, Ee({
        key: u
    }, s)) : m.createElement("link", Ee({
        key: u
    }, s))))
}

function qu({
    page: e,
    ...t
}) {
    let {
        router: n
    } = Oh(), r = m.useMemo(() => jt(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? m.createElement(u0, Ee({
        page: e,
        matches: r
    }, t)) : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null)
}

function a0(e) {
    let {
        manifest: t,
        routeModules: n
    } = kr(), [r, l] = m.useState([]);
    return m.useEffect(() => {
        let i = !1;
        return Rg(e, t, n).then(o => {
            i || l(o)
        }), () => {
            i = !0
        }
    }, [e, t, n]), r
}

function u0({
    page: e,
    matches: t,
    ...n
}) {
    let r = Mt(),
        {
            future: l,
            manifest: i,
            routeModules: o
        } = kr(),
        {
            matches: a
        } = uo(),
        u = m.useMemo(() => Ic(e, t, a, i, r, "data"), [e, t, a, i, r]),
        s = m.useMemo(() => Ic(e, t, a, i, r, "assets"), [e, t, a, i, r]),
        f = m.useMemo(() => _g(e, u, i), [u, e, i]),
        c = m.useMemo(() => Lg(s, i), [s, i]),
        h = a0(s),
        E = null;
    if (!l.unstable_singleFetch) E = f.map(g => m.createElement("link", Ee({
        key: g,
        rel: "prefetch",
        as: "fetch",
        href: g
    }, n)));
    else if (u.length > 0) {
        let g = Lh(i, o, t.map(S => S.route), u.map(S => S.route), Qu(e));
        g.searchParams.get("_routes") !== "" && (E = m.createElement("link", Ee({
            key: g.pathname + g.search,
            rel: "prefetch",
            as: "fetch",
            href: g.pathname + g.search
        }, n)))
    }
    return m.createElement(m.Fragment, null, E, c.map(g => m.createElement("link", Ee({
        key: g,
        rel: "modulepreload",
        href: g
    }, n))), h.map(({
        key: g,
        link: S
    }) => m.createElement("link", Ee({
        key: g
    }, S))))
}

function M0() {
    let {
        isSpaMode: e,
        routeModules: t
    } = kr(), {
        errors: n,
        matches: r,
        loaderData: l
    } = uo(), i = Mt(), o = Zu(r, n, e), a = null;
    n && (a = n[o[o.length - 1].route.id]);
    let u = [],
        s = null,
        f = [];
    for (let c = 0; c < o.length; c++) {
        let h = o[c],
            E = h.route.id,
            g = l[E],
            S = h.params,
            _ = t[E],
            v = [],
            d = {
                id: E,
                data: g,
                meta: [],
                params: h.params,
                pathname: h.pathname,
                handle: h.route.handle,
                error: a
            };
        if (f[c] = d, _ != null && _.meta ? v = typeof _.meta == "function" ? _.meta({
                data: g,
                params: S,
                location: i,
                matches: f,
                error: a
            }) : Array.isArray(_.meta) ? [..._.meta] : _.meta : s && (v = [...s]), v = v || [], !Array.isArray(v)) throw new Error("The route at " + h.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
        d.meta = v, f[c] = d, u = [...v], s = u
    }
    return m.createElement(m.Fragment, null, u.flat().map(c => {
        if (!c) return null;
        if ("tagName" in c) {
            let {
                tagName: h,
                ...E
            } = c;
            if (!s0(h)) return console.warn(`A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`), null;
            let g = h;
            return m.createElement(g, Ee({
                key: JSON.stringify(E)
            }, E))
        }
        if ("title" in c) return m.createElement("title", {
            key: "title"
        }, String(c.title));
        if ("charset" in c && (c.charSet ? ? (c.charSet = c.charset), delete c.charset), "charSet" in c && c.charSet != null) return typeof c.charSet == "string" ? m.createElement("meta", {
            key: "charSet",
            charSet: c.charSet
        }) : null;
        if ("script:ld+json" in c) try {
            let h = JSON.stringify(c["script:ld+json"]);
            return m.createElement("script", {
                key: `script:ld+json:${h}`,
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: h
                }
            })
        } catch {
            return null
        }
        return m.createElement("meta", Ee({
            key: JSON.stringify(c)
        }, c))
    }))
}

function s0(e) {
    return typeof e == "string" && /^(meta|link)$/.test(e)
}

function c0(e) {
    return m.createElement(Cy, e)
}
let mi = !1;

function f0(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        abortDelay: r,
        serializeError: l,
        isSpaMode: i,
        future: o,
        renderMeta: a
    } = kr(), {
        router: u,
        static: s,
        staticContext: f
    } = Oh(), {
        matches: c
    } = uo(), h = Xu(o, i);
    a && (a.didRenderScripts = !0);
    let E = Zu(c, null, i);
    m.useEffect(() => {
        mi = !0
    }, []);
    let g = (y, P) => {
            let T;
            return l && P instanceof Error ? T = l(P) : T = P, `${JSON.stringify(y)}:__remixContext.p(!1, ${ti(JSON.stringify(T))})`
        },
        S = (y, P, T) => {
            let D;
            try {
                D = JSON.stringify(T)
            } catch (I) {
                return g(P, I)
            }
            return `${JSON.stringify(P)}:__remixContext.p(${ti(D)})`
        },
        _ = (y, P, T) => {
            let D;
            return l && T instanceof Error ? D = l(T) : D = T, `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(P)}, !1, ${ti(JSON.stringify(D))})`
        },
        v = (y, P, T) => {
            let D;
            try {
                D = JSON.stringify(T)
            } catch (I) {
                return _(y, P, I)
            }
            return `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(P)}, ${ti(D)})`
        },
        d = [],
        p = m.useMemo(() => {
            var y;
            let P = o.unstable_singleFetch ? "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());" : "",
                T = f ? `window.__remixContext = ${n};${P}` : " ",
                D = o.unstable_singleFetch || f == null ? void 0 : f.activeDeferreds;
            T += D ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof r == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(D).map(([$, b]) => {
                let te = new Set(b.pendingKeys),
                    pe = b.deferredKeys.map(Re => {
                        if (te.has(Re)) return d.push(m.createElement(Bc, {
                            key: `${$} | ${Re}`,
                            deferredData: b,
                            routeId: $,
                            dataKey: Re,
                            scriptProps: e,
                            serializeData: v,
                            serializeError: _
                        })), `${JSON.stringify(Re)}:__remixContext.n(${JSON.stringify($)}, ${JSON.stringify(Re)})`; {
                            let tt = b.data[Re];
                            return typeof tt._error < "u" ? g(Re, tt._error) : S($, Re, tt._data)
                        }
                    }).join(`,
`);
                return `Object.assign(__remixContext.state.loaderData[${JSON.stringify($)}], {${pe}});`
            }).join(`
`) + (d.length > 0 ? `__remixContext.a=${d.length};` : "") : "";
            let I = s ? `${(y=t.hmr)!==null&&y!==void 0&&y.runtime?`import ${JSON.stringify(t.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(t.url)}`};
${E.map(($,b)=>`import * as route${b} from ${JSON.stringify(t.routes[$.route.id].module)};`).join(`
`)}
${h?`window.__remixManifest = ${JSON.stringify(t0(t,u),null,2)};`:""}
window.__remixRouteModules = {${E.map(($,b)=>`${JSON.stringify($.route.id)}:route${b}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
            return m.createElement(m.Fragment, null, m.createElement("script", Ee({}, e, {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: jc(T),
                type: void 0
            })), m.createElement("script", Ee({}, e, {
                suppressHydrationWarning: !0,
                dangerouslySetInnerHTML: jc(I),
                type: "module",
                async: !0
            })))
        }, []);
    if (!s && typeof __remixContext == "object" && __remixContext.a)
        for (let y = 0; y < __remixContext.a; y++) d.push(m.createElement(Bc, {
            key: y,
            scriptProps: e,
            serializeData: v,
            serializeError: _
        }));
    let k = E.map(y => {
            let P = t.routes[y.route.id];
            return (P.imports || []).concat([P.module])
        }).flat(1),
        L = mi ? [] : t.entry.imports.concat(k);
    return mi ? null : m.createElement(m.Fragment, null, h ? null : m.createElement("link", {
        rel: "modulepreload",
        href: t.url,
        crossOrigin: e.crossOrigin
    }), m.createElement("link", {
        rel: "modulepreload",
        href: t.entry.module,
        crossOrigin: e.crossOrigin
    }), h0(L).map(y => m.createElement("link", {
        key: y,
        rel: "modulepreload",
        href: y,
        crossOrigin: e.crossOrigin
    })), p, d)
}

function Bc({
    dataKey: e,
    deferredData: t,
    routeId: n,
    scriptProps: r,
    serializeData: l,
    serializeError: i
}) {
    return typeof document > "u" && t && e && n && zn(t.pendingKeys.includes(e), `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`), m.createElement(m.Suspense, {
        fallback: typeof document > "u" && t && e && n ? null : m.createElement("script", Ee({}, r, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: " "
            }
        }))
    }, typeof document > "u" && t && e && n ? m.createElement(c0, {
        resolve: t.data[e],
        errorElement: m.createElement(d0, {
            dataKey: e,
            routeId: n,
            scriptProps: r,
            serializeError: i
        }),
        children: o => m.createElement("script", Ee({}, r, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: l(n, e, o)
            }
        }))
    }) : m.createElement("script", Ee({}, r, {
        async: !0,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: " "
        }
    })))
}

function d0({
    dataKey: e,
    routeId: t,
    scriptProps: n,
    serializeError: r
}) {
    let l = Ey();
    return m.createElement("script", Ee({}, n, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: r(t, e, l)
        }
    }))
}

function h0(e) {
    return [...new Set(e)]
}

function O0() {
    return sh()
}

function F0() {
    return gy()
}

function z0() {
    return wy()
}

function I0(e = {}) {
    return eg(e)
}

function Ih(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        })
    }
}
export {
    _0 as A, x0 as B, uv as C, P0 as D, gr as E, o0 as F, kr as G, sh as H, C0 as I, D0 as J, i0 as L, M0 as M, l0 as N, w0 as O, Fh as R, f0 as S, Ee as _, ch as a, z0 as b, yy as c, O0 as d, k0 as e, Mt as f, I0 as g, g0 as h, xl as i, ah as j, H as k, gy as l, L0 as m, zn as n, Qg as o, Yu as p, jt as q, Kd as r, bg as s, T0 as t, F0 as u, y0 as v, v0 as w, S0 as x, R0 as y, N0 as z
};