import {
    r as n,
    j as c
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u as B,
    P as R
} from "./index-w1qRmSKj.js";
import {
    c as K
} from "./index-DrK2pFTP.js";
import {
    c as E
} from "./index-DW48STyt.js";
import {
    u as M
} from "./index-BdBVW3oh.js";
import {
    u as O
} from "./index-C7pkbTOz.js";
import {
    u as A
} from "./index-CzbA40Po.js";
import {
    P as H
} from "./index-C9jkpvF-.js";
import {
    c as P
} from "./utils-BAZByXB4.js";
import {
    K as L
} from "./icons-pNqq09c6.js";
var v = "Checkbox",
    [q, oe] = K(v),
    [z, T] = q(v),
    j = n.forwardRef((e, a) => {
        const {
            __scopeCheckbox: t,
            name: d,
            checked: p,
            defaultChecked: s,
            required: m,
            disabled: u,
            value: l = "on",
            onCheckedChange: b,
            ...y
        } = e, [r, k] = n.useState(null), _ = B(a, o => k(o)), x = n.useRef(!1), g = r ? !!r.closest("form") : !0, [f = !1, C] = M({
            prop: p,
            defaultProp: s,
            onChange: b
        }), D = n.useRef(f);
        return n.useEffect(() => {
            const o = r == null ? void 0 : r.form;
            if (o) {
                const h = () => C(D.current);
                return o.addEventListener("reset", h), () => o.removeEventListener("reset", h)
            }
        }, [r, C]), c.jsxs(z, {
            scope: t,
            state: f,
            disabled: u,
            children: [c.jsx(R.button, {
                type: "button",
                role: "checkbox",
                "aria-checked": i(f) ? "mixed" : f,
                "aria-required": m,
                "data-state": I(f),
                "data-disabled": u ? "" : void 0,
                disabled: u,
                value: l,
                ...y,
                ref: _,
                onKeyDown: E(e.onKeyDown, o => {
                    o.key === "Enter" && o.preventDefault()
                }),
                onClick: E(e.onClick, o => {
                    C(h => i(h) ? !0 : !h), g && (x.current = o.isPropagationStopped(), x.current || o.stopPropagation())
                })
            }), g && c.jsx(X, {
                control: r,
                bubbles: !x.current,
                name: d,
                value: l,
                checked: f,
                required: m,
                disabled: u,
                style: {
                    transform: "translateX(-100%)"
                }
            })]
        })
    });
j.displayName = v;
var w = "CheckboxIndicator",
    S = n.forwardRef((e, a) => {
        const {
            __scopeCheckbox: t,
            forceMount: d,
            ...p
        } = e, s = T(w, t);
        return c.jsx(H, {
            present: d || i(s.state) || s.state === !0,
            children: c.jsx(R.span, {
                "data-state": I(s.state),
                "data-disabled": s.disabled ? "" : void 0,
                ...p,
                ref: a,
                style: {
                    pointerEvents: "none",
                    ...e.style
                }
            })
        })
    });
S.displayName = w;
var X = e => {
    const {
        control: a,
        checked: t,
        bubbles: d = !0,
        ...p
    } = e, s = n.useRef(null), m = O(t), u = A(a);
    return n.useEffect(() => {
        const l = s.current,
            b = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(b, "checked").set;
        if (m !== t && r) {
            const k = new Event("click", {
                bubbles: d
            });
            l.indeterminate = i(t), r.call(l, i(t) ? !1 : t), l.dispatchEvent(k)
        }
    }, [m, t, d]), c.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i(t) ? !1 : t,
        ...p,
        tabIndex: -1,
        ref: s,
        style: { ...e.style,
            ...u,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
};

function i(e) {
    return e === "indeterminate"
}

function I(e) {
    return i(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var N = j,
    F = S;
const $ = n.forwardRef(({
    className: e,
    ...a
}, t) => c.jsx(N, {
    ref: t,
    className: P("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
    ...a,
    children: c.jsx(F, {
        className: P("flex items-center justify-center text-current"),
        children: L("h-4 w-4")
    })
}));
$.displayName = N.displayName;
export {
    $ as C
};