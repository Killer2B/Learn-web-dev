import {
    j as r
} from "./jsx-runtime-Dvja6b4T.js";
import {
    A as c,
    a as l,
    b as n
} from "./avatar-B5HRkzDo.js";
import {
    g as i
} from "./utils-OWsBmDA3.js";

function f({
    user: a,
    size: s = "md",
    className: e
}) {
    var t;
    const m = ((t = a.username) == null ? void 0 : t.slice(0, 2).toUpperCase()) || "??",
        o = a.avatar_url || "";
    return r.jsxs(c, {
        className: e,
        children: [r.jsx(l, {
            src: i(o, s),
            alt: a.username || ""
        }), r.jsx(n, {
            children: m
        })]
    })
}
export {
    f as U
};