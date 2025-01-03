import {
    r as s,
    W as g,
    j as r
} from "./jsx-runtime-Dvja6b4T.js";
import {
    C as we
} from "./Comment-O5hkwq_d.js";
import {
    i as R
} from "./index-browser-CJEdsfDC.js";
import {
    U as Ne
} from "./user-avatar-C7L6gCcp.js";
import {
    r as $e,
    g as z,
    j as Ce,
    L as Ee
} from "./components-BuvoIJIj.js";
import {
    M as Oe
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    c as H
} from "./utils-OWsBmDA3.js";
import {
    B as ne
} from "./Button-CFIJCp_o.js";
import {
    B as Se
} from "./react-toastify.esm-EkDeeNHo.js";
import {
    o as L,
    p as Te,
    m as Fe,
    K,
    H as Pe,
    f as oe,
    w as ae,
    y as q,
    L as Q,
    s as se,
    n as ie,
    $ as le,
    a as de,
    _ as ce,
    U as Ie,
    u as De,
    d as _e,
    c as _,
    P as te,
    F as W,
    e as re,
    r as ue,
    g as Le
} from "./focus-management-BQHAzeQ5.js";
import {
    f as me,
    s as pe
} from "./hidden-B7qEBE7r.js";
import {
    Q as Me,
    K as fe,
    u as Ae,
    I as Ue
} from "./motion-CMzn_ctr.js";
import {
    aF as Ge,
    aH as He
} from "./icons-pNqq09c6.js";

function We(e, t, n) {
    let [o, a] = s.useState(n), i = e !== void 0, m = s.useRef(i), u = s.useRef(!1), l = s.useRef(!1);
    return i && !m.current && !u.current ? (u.current = !0, m.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && m.current && !l.current && (l.current = !0, m.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : o, L(d => (i || a(d), t == null ? void 0 : t(d)))]
}

function Be(e) {
    let [t] = s.useState(e);
    return t
}

function he(e = {}, t = null, n = []) {
    for (let [o, a] of Object.entries(e)) xe(n, ge(t, o), a);
    return n
}

function ge(e, t) {
    return e ? e + "[" + t + "]" : t
}

function xe(e, t, n) {
    if (Array.isArray(n))
        for (let [o, a] of n.entries()) xe(e, ge(t, o.toString()), a);
    else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : he(n, t, e)
}

function Ve(e) {
    var t, n;
    let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
    if (o) {
        for (let a of o.elements)
            if (a !== e && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
                a.click();
                return
            }(n = o.requestSubmit) == null || n.call(o)
    }
}
let ze = s.createContext(null);

function Ke({
    children: e
}) {
    let t = s.useContext(ze);
    if (!t) return g.createElement(g.Fragment, null, e);
    let {
        target: n
    } = t;
    return n ? $e.createPortal(g.createElement(g.Fragment, null, e), n) : null
}

function qe({
    data: e,
    form: t,
    disabled: n,
    onReset: o,
    overrides: a
}) {
    let [i, m] = s.useState(null), u = Te();
    return s.useEffect(() => {
        if (o && i) return u.addEventListener(i, "reset", o)
    }, [i, t, o]), g.createElement(Ke, null, g.createElement(Qe, {
        setForm: m,
        formId: t
    }), he(e).map(([l, d]) => g.createElement(me, {
        features: pe.Hidden,
        ...Fe({
            key: l,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: n,
            name: l,
            value: d,
            ...a
        })
    })))
}

function Qe({
    setForm: e,
    formId: t
}) {
    return s.useEffect(() => {
        if (t) {
            let n = document.getElementById(t);
            n && e(n)
        }
    }, [e, t]), t ? null : g.createElement(me, {
        features: pe.Hidden,
        as: "input",
        type: "hidden",
        hidden: !0,
        readOnly: !0,
        ref: n => {
            if (!n) return;
            let o = n.closest("form");
            o && e(o)
        }
    })
}

function Je(e, t) {
    return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t
}

function Xe(e = Je) {
    return s.useCallback((t, n) => {
        if (typeof e == "string") {
            let o = e;
            return (t == null ? void 0 : t[o]) === (n == null ? void 0 : n[o])
        }
        return e(t, n)
    }, [e])
}
var Ye = (e => (e[e.RegisterOption = 0] = "RegisterOption", e[e.UnregisterOption = 1] = "UnregisterOption", e))(Ye || {});
let Ze = {
        0(e, t) {
            let n = [...e.options, {
                id: t.id,
                element: t.element,
                propsRef: t.propsRef
            }];
            return { ...e,
                options: Le(n, o => o.element.current)
            }
        },
        1(e, t) {
            let n = e.options.slice(),
                o = e.options.findIndex(a => a.id === t.id);
            return o === -1 ? e : (n.splice(o, 1), { ...e,
                options: n
            })
        }
    },
    J = s.createContext(null);
J.displayName = "RadioGroupDataContext";

function X(e) {
    let t = s.useContext(J);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, X), n
    }
    return t
}
let Y = s.createContext(null);
Y.displayName = "RadioGroupActionsContext";

function Z(e) {
    let t = s.useContext(Y);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Z), n
    }
    return t
}

function et(e, t) {
    return De(t.type, Ze, e, t)
}
let tt = "div";

function rt(e, t) {
    let n = s.useId(),
        o = oe(),
        {
            id: a = `headlessui-radiogroup-${n}`,
            value: i,
            form: m,
            name: u,
            onChange: l,
            by: d,
            disabled: p = o || !1,
            defaultValue: x,
            ...$
        } = e,
        b = Xe(d),
        [k, C] = s.useReducer(et, {
            options: []
        }),
        c = k.options,
        [w, E] = fe(),
        [O, j] = ae(),
        T = s.useRef(null),
        P = q(T, t),
        S = Be(x),
        [f, I] = We(i, l, S),
        D = s.useMemo(() => c.find(h => !h.propsRef.current.disabled), [c]),
        F = s.useMemo(() => c.some(h => b(h.propsRef.current.value, f)), [c, f]),
        v = L(h => {
            var M;
            if (p || b(h, f)) return !1;
            let N = (M = c.find(G => b(G.propsRef.current.value, h))) == null ? void 0 : M.propsRef.current;
            return N != null && N.disabled ? !1 : (I == null || I(h), !0)
        }),
        U = L(h => {
            let M = T.current;
            if (!M) return;
            let N = _e(M),
                G = c.filter(y => y.propsRef.current.disabled === !1).map(y => y.element.current);
            switch (h.key) {
                case _.Enter:
                    Ve(h.currentTarget);
                    break;
                case _.ArrowLeft:
                case _.ArrowUp:
                    if (h.preventDefault(), h.stopPropagation(), te(G, W.Previous | W.WrapAround) === re.Success) {
                        let y = c.find(A => A.element.current === (N == null ? void 0 : N.activeElement));
                        y && v(y.propsRef.current.value)
                    }
                    break;
                case _.ArrowRight:
                case _.ArrowDown:
                    if (h.preventDefault(), h.stopPropagation(), te(G, W.Next | W.WrapAround) === re.Success) {
                        let y = c.find(A => A.element.current === (N == null ? void 0 : N.activeElement));
                        y && v(y.propsRef.current.value)
                    }
                    break;
                case _.Space:
                    {
                        h.preventDefault(),
                        h.stopPropagation();
                        let y = c.find(A => A.element.current === (N == null ? void 0 : N.activeElement));y && v(y.propsRef.current.value)
                    }
                    break
            }
        }),
        ee = L(h => (C({
            type: 0,
            ...h
        }), () => C({
            type: 1,
            id: h.id
        }))),
        be = s.useMemo(() => ({
            value: f,
            firstOption: D,
            containsCheckedOption: F,
            disabled: p,
            compare: b,
            ...k
        }), [f, D, F, p, b, k]),
        ve = s.useMemo(() => ({
            registerOption: ee,
            change: v
        }), [ee, v]),
        ye = {
            ref: P,
            id: a,
            role: "radiogroup",
            "aria-labelledby": w,
            "aria-describedby": O,
            onKeyDown: U
        },
        je = s.useMemo(() => ({
            value: f
        }), [f]),
        Re = s.useCallback(() => {
            if (S !== void 0) return v(S)
        }, [v, S]),
        ke = Q();
    return g.createElement(j, {
        name: "RadioGroup.Description"
    }, g.createElement(E, {
        name: "RadioGroup.Label"
    }, g.createElement(Y.Provider, {
        value: ve
    }, g.createElement(J.Provider, {
        value: be
    }, u != null && g.createElement(qe, {
        disabled: p,
        data: {
            [u]: f || "on"
        },
        overrides: {
            type: "radio",
            checked: f != null
        },
        form: m,
        onReset: Re
    }), ke({
        ourProps: ye,
        theirProps: $,
        slot: je,
        defaultTag: tt,
        name: "RadioGroup"
    })))))
}
let nt = "div";

function ot(e, t) {
    var n;
    let o = X("RadioGroup.Option"),
        a = Z("RadioGroup.Option"),
        i = s.useId(),
        {
            id: m = `headlessui-radiogroup-option-${i}`,
            value: u,
            disabled: l = o.disabled || !1,
            autoFocus: d = !1,
            ...p
        } = e,
        x = s.useRef(null),
        $ = q(x, t),
        [b, k] = fe(),
        [C, c] = ae(),
        w = se({
            value: u,
            disabled: l
        });
    ie(() => a.registerOption({
        id: m,
        element: x,
        propsRef: w
    }), [m, a, x, w]);
    let E = L(v => {
            var U;
            if (ue(v.currentTarget)) return v.preventDefault();
            a.change(u) && ((U = x.current) == null || U.focus())
        }),
        O = ((n = o.firstOption) == null ? void 0 : n.id) === m,
        {
            isFocusVisible: j,
            focusProps: T
        } = le({
            autoFocus: d
        }),
        {
            isHovered: P,
            hoverProps: S
        } = de({
            isDisabled: l
        }),
        f = o.compare(o.value, u),
        I = ce({
            ref: $,
            id: m,
            role: "radio",
            "aria-checked": f ? "true" : "false",
            "aria-labelledby": b,
            "aria-describedby": C,
            "aria-disabled": l ? !0 : void 0,
            tabIndex: l ? -1 : f || !o.containsCheckedOption && O ? 0 : -1,
            onClick: l ? void 0 : E,
            autoFocus: d
        }, T, S),
        D = s.useMemo(() => ({
            checked: f,
            disabled: l,
            active: j,
            hover: P,
            focus: j,
            autofocus: d
        }), [f, l, P, j, d]),
        F = Q();
    return g.createElement(c, {
        name: "RadioGroup.Description"
    }, g.createElement(k, {
        name: "RadioGroup.Label"
    }, F({
        ourProps: I,
        theirProps: p,
        slot: D,
        defaultTag: nt,
        name: "RadioGroup.Option"
    })))
}
let at = "span";

function st(e, t) {
    var n;
    let o = X("Radio"),
        a = Z("Radio"),
        i = s.useId(),
        m = Ae(),
        u = oe(),
        {
            id: l = m || `headlessui-radio-${i}`,
            value: d,
            disabled: p = o.disabled || u || !1,
            autoFocus: x = !1,
            ...$
        } = e,
        b = s.useRef(null),
        k = q(b, t),
        C = Ue(),
        c = Ie(),
        w = se({
            value: d,
            disabled: p
        });
    ie(() => a.registerOption({
        id: l,
        element: b,
        propsRef: w
    }), [l, a, b, w]);
    let E = L(F => {
            var v;
            if (ue(F.currentTarget)) return F.preventDefault();
            a.change(d) && ((v = b.current) == null || v.focus())
        }),
        {
            isFocusVisible: O,
            focusProps: j
        } = le({
            autoFocus: x
        }),
        {
            isHovered: T,
            hoverProps: P
        } = de({
            isDisabled: p
        }),
        S = ((n = o.firstOption) == null ? void 0 : n.id) === l,
        f = o.compare(o.value, d),
        I = ce({
            ref: k,
            id: l,
            role: "radio",
            "aria-checked": f ? "true" : "false",
            "aria-labelledby": C,
            "aria-describedby": c,
            "aria-disabled": p ? !0 : void 0,
            tabIndex: p ? -1 : f || !o.containsCheckedOption && S ? 0 : -1,
            autoFocus: x,
            onClick: p ? void 0 : E
        }, j, P),
        D = s.useMemo(() => ({
            checked: f,
            disabled: p,
            hover: T,
            focus: O,
            autofocus: x
        }), [f, p, T, O, x]);
    return Q()({
        ourProps: I,
        theirProps: $,
        slot: D,
        defaultTag: at,
        name: "Radio"
    })
}
let it = K(rt),
    lt = K(ot),
    dt = K(st),
    ct = Me,
    ut = Pe,
    B = Object.assign(it, {
        Option: lt,
        Radio: dt,
        Label: ct,
        Description: ut
    });
const $t = ({
        user: e,
        post: t,
        title: n = "Comments",
        commentType: o = "general"
    }) => {
        const a = z(),
            i = s.useRef(null),
            m = (a == null ? void 0 : a.state) === "submitting" || (a == null ? void 0 : a.state) === "loading",
            [u, l] = s.useState(""),
            d = s.useRef(null),
            p = Ce();
        s.useEffect(() => {
            var c;
            m || ((c = i.current) == null || c.reset(), d.current.style.height = "auto")
        }, [m]), s.useEffect(() => {
            d.current.style.height = "0px";
            const c = d.current.scrollHeight;
            d.current.style.height = c + "px"
        }, [u]);
        const x = 244,
            $ = u.length >= x,
            k = (c => {
                let w = 0;
                const E = O => {
                    w++;
                    const j = O.replies;
                    j && Object.keys(j).length > 0 && Object.values(j).forEach(E)
                };
                return c.forEach(E), w
            })(t.comments),
            C = ((e == null ? void 0 : e.role) === R.user_role.curator || (e == null ? void 0 : e.role) === R.user_role.admin || (e == null ? void 0 : e.role) === R.user_role.moderator) && (t.status === "review" || t.status === "needs_work") ? "review" : o;
        return r.jsx(r.Fragment, {
            children: r.jsxs("section", {
                className: "",
                children: [r.jsxs("div", {
                    className: "mb-4 flex items-center gap-3",
                    children: [r.jsx("h3", {
                        className: "font-body text-gray-400",
                        children: n
                    }), r.jsxs("span", {
                        className: "text-dark-100 text-sm font-semibold",
                        children: [k > 0 ? k : "", " "]
                    }), !e && r.jsxs("p", {
                        className: "text-dark-100 text-sm font-medium ml-auto",
                        children: [r.jsx(Ee, {
                            to: "?create-account",
                            preventScrollReset: !0,
                            className: "text-offwhite transition hover:opacity-75 cursor-pointer text-sm border-none bg-transparent font-sans",
                            children: "Log in"
                        }), " ", "to add comments"]
                    })]
                }), r.jsx("div", {
                    className: "flex gap-4 mb-4",
                    children: r.jsxs(a.Form, {
                        action: "/resource/comments/add",
                        method: "post",
                        ref: i,
                        onSubmit: () => {
                            l("")
                        },
                        onClick: () => !e && p("?create-account", {
                            preventScrollReset: !0
                        }),
                        className: `relative p-4 [&:has(:focus-visible)]:ring-4 ring-indigo-400 w-full bg-dark-600 flex items-start  gap-4   rounded-xl overflow-hidden ${m&&"opacity-60"}`,
                        children: [e && r.jsx(Ne, {
                            user: e,
                            size: "md",
                            className: "w-12 h-12 hidden sm:block"
                        }), r.jsx("input", {
                            type: "hidden",
                            name: "postId",
                            value: t.id
                        }), r.jsx("input", {
                            type: "hidden",
                            name: "commentType",
                            value: C
                        }), r.jsx("textarea", {
                            ref: d,
                            name: "content",
                            id: "content",
                            rows: 1,
                            className: `${!e&&"pointer-events-none"} w-full min-h-[48px] resize-none rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3 overflow-hidden`,
                            placeholder: t.comments.length > 0 ? "Add a comment..." : "Send a first comment...",
                            autoFocus: !1,
                            disabled: !e,
                            onChange: c => l(c.target.value)
                        }), r.jsxs("div", {
                            className: "flex flex-col items-center ",
                            children: [r.jsx("button", {
                                type: "submit",
                                className: " relative z-30 px-8 py-3 h-12 font-sans  disabled:cursor-auto border-none cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-offwhite font-semibold rounded-lg transition disabled:bg-dark-400",
                                disabled: !u || $,
                                children: "Send"
                            }), r.jsxs("p", {
                                className: `text-xs text-dark-100 transition duration-300 pointer-events-none transform ${u.length<130?"absolute opacity-0 translate-y-0":"absolute opacity-100 translate-y-16 md:translate-y-14"}`,
                                children: [r.jsx("span", {
                                    className: $ ? "text-red-400 font-semibold" : "text-white",
                                    children: u.length
                                }), "/", x]
                            })]
                        })]
                    })
                }), r.jsx("div", {
                    className: "grid grid-cols-1 gap-3",
                    children: t.comments.map(c => r.jsx(we, {
                        comment: c,
                        user: e,
                        post: t
                    }, c.id))
                })]
            })
        })
    },
    V = [{
        id: R.report_type.inappropriate,
        name: "Misleading or Inappropriate Content",
        description: "Select this if this post contains false, misleading, or inappropriate information that may deceive users or promote harmful actions"
    }, {
        id: R.report_type.copyright,
        name: "Copyright Violation",
        description: "Choose this if you believe this post infringes on someone's intellectual property or copyrighted content"
    }, {
        id: R.report_type.malicious,
        name: "Spam or Malicious Content",
        description: "Report this if this post seems to be spam, promotes phishing, or contains malicious intent or links"
    }, {
        id: R.report_type.other,
        name: "Other",
        description: "If your reason doesn't fit the categories above, select this and provide more details in the subsequent field"
    }],
    mt = ({
        isOpen: e,
        onClose: t,
        post: n
    }) => {
        const [o, a] = s.useState(V[0]), i = z(), m = i.state === "loading" || i.state === "submitting";
        return s.useEffect(() => {
            i.state === "idle" && i.data && (Se("Report submitted", {
                icon: "✅"
            }), t())
        }, [i, t]), r.jsx(Oe, {
            open: e,
            onClose: t,
            center: !0,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            showCloseIcon: !0,
            classNames: {
                overlay: "customOverlay",
                modal: "max-w-[600px] w-full p-16 border-dark-600/80 border-2 rounded-3xl bg-dark-700 max-w-[700px]"
            },
            children: r.jsxs("div", {
                className: "",
                children: [r.jsx("div", {
                    className: "mb-4 text-2xl font-bold text-gray-300",
                    children: "Report post"
                }), r.jsx("div", {
                    className: "py-4 bg-dark-700",
                    children: r.jsx(B, {
                        value: o,
                        onChange: a,
                        children: r.jsx("div", {
                            className: "-space-y-px rounded-md",
                            children: V.map((u, l) => r.jsx(B.Option, {
                                value: u,
                                className: ({
                                    checked: d
                                }) => H(l === 0 ? "rounded-tl-md rounded-tr-md" : "", l === V.length - 1 ? "rounded-bl-md rounded-br-md" : "", d ? "z-10 border-indigo-400 bg-dark-500" : "border-dark-600", "relative flex cursor-pointer border p-4 focus:outline-none"),
                                children: ({
                                    active: d,
                                    checked: p
                                }) => r.jsxs(r.Fragment, {
                                    children: [r.jsx("span", {
                                        className: H(p ? "bg-indigo-600 border-transparent" : "bg-white border-gray-300", d ? "ring-2 ring-offset-2 ring-indigo-600" : "", "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"),
                                        "aria-hidden": "true",
                                        children: r.jsx("span", {
                                            className: "rounded-full bg-white w-1.5 h-1.5"
                                        })
                                    }), r.jsxs("span", {
                                        className: "flex flex-col ml-3",
                                        children: [r.jsx(B.Label, {
                                            as: "span",
                                            className: H(p ? "text-gray-100" : "text-gray-300", "block text-sm font-semibold"),
                                            children: u.name
                                        }), r.jsx(B.Description, {
                                            as: "span",
                                            className: H(p ? "text-gray-300" : "text-gray-400", "block text-sm"),
                                            children: u.description
                                        })]
                                    })]
                                })
                            }, u.name))
                        })
                    })
                }), r.jsxs(i.Form, {
                    method: "post",
                    action: "/resource/report",
                    children: [r.jsx("input", {
                        type: "hidden",
                        name: "type",
                        value: o.id
                    }), r.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: n.id
                    }), r.jsx("label", {
                        htmlFor: "comment",
                        className: "block text-sm font-semibold leading-6 text-gray-200",
                        children: "Write anything that will help us verify your claim. For example, add links."
                    }), r.jsx("div", {
                        className: "mt-2",
                        children: r.jsx("textarea", {
                            rows: 4,
                            name: "comment",
                            id: "comment",
                            className: "block w-full rounded-md border-0 py-1.5 bg-dark-500 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6",
                            defaultValue: ""
                        })
                    }), r.jsx(ne, {
                        disabled: m,
                        type: "primary",
                        htmlType: "submit",
                        className: "mt-3 ml-auto",
                        children: "Submit"
                    })]
                })]
            })
        })
    },
    Ct = mt,
    Et = ({
        source: e,
        username: t
    }) => !e || !e.type || e.type === R.post_source.original ? null : r.jsx("div", {
        className: "rounded-lg bg-dark-600 px-4 py-6 w-full mb-6",
        children: r.jsxs("div", {
            className: "flex",
            children: [r.jsx("div", {
                className: "flex-shrink-0",
                children: Ge(`h-5 w-5 ${e.type===R.post_source.reposted?"text-blue-500":"text-teal-500"}`)
            }), r.jsxs("div", {
                className: "ml-3 overflow-hidden",
                children: [r.jsx("div", {
                    className: "text-sm font-semibold text-offwhite text-ellipsis max-w-full",
                    children: e.type === R.post_source.reposted ? r.jsx(r.Fragment, {
                        children: e != null && e.name ? `Original Creator: ${e==null?void 0:e.name}` : "External Design"
                    }) : r.jsx(r.Fragment, {
                        children: r.jsx(r.Fragment, {
                            children: e != null && e.name ? `Based on a design by ${e==null?void 0:e.name}` : "External Inspiration"
                        })
                    })
                }), r.jsx("div", {
                    className: "mt-2 text-sm text-gray-300",
                    children: e.type === R.post_source.reposted ? r.jsx("p", {
                        className: "leading-relaxed",
                        children: "This UI element is reposted from an external origin. Show them some appreciation!"
                    }) : r.jsxs("p", {
                        className: "leading-relaxed",
                        children: ["This UI element is based on content from an external source and modified by ", r.jsx("b", {
                            className: "font-semibold",
                            children: t
                        }), "."]
                    })
                }), r.jsx("div", {
                    className: "mt-5",
                    children: r.jsx("div", {
                        className: "flex",
                        children: r.jsxs(ne, {
                            type: "primary",
                            href: e == null ? void 0 : e.website,
                            target: "_blank",
                            className: "text-sm",
                            children: [He("w-5 h-5"), "Visit source website"]
                        })
                    })
                })]
            })]
        })
    });

function Ot(e) {
    const t = z();
    return s.useEffect(() => {
        t.submit({
            postId: e
        }, {
            method: "POST",
            action: "/resource/post-views"
        })
    }, [e]), t
}
export {
    $t as C, Ct as R, Et as S, Ot as u
};