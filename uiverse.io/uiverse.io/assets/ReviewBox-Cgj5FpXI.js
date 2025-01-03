import {
    r as c,
    j as t
} from "./jsx-runtime-Dvja6b4T.js";
import {
    B as a
} from "./button-CiNp7xUM.js";
import {
    I as i
} from "./input-DroKt9gF.js";
import {
    X as l
} from "./x-20Z_dvlB.js";
import {
    C as u
} from "./check-DH96kU61.js";

function v({
    onReview: e,
    isAdmin: o,
    comment: r,
    status: x
}) {
    const [s, m] = c.useState(r);
    return t.jsxs("div", {
        className: "flex items-center gap-2 max-w-sm ml-auto mt-3",
        children: [t.jsx(i, {
            placeholder: "Comment for rejection",
            value: s,
            onChange: n => m(n.target.value),
            className: "h-8"
        }), t.jsxs("div", {
            className: "flex gap-1",
            children: [t.jsx(a, {
                variant: "destructive",
                size: "icon",
                type: "button",
                className: "h-8 w-8",
                onClick: () => e(!1, s),
                children: t.jsx(l, {
                    className: "h-4 w-4"
                })
            }), o && t.jsx(a, {
                variant: "default",
                size: "icon",
                className: "h-8 w-8",
                type: "button",
                onClick: () => e(!0),
                children: t.jsx(u, {
                    className: "h-4 w-4"
                })
            })]
        })]
    })
}
export {
    v as R
};