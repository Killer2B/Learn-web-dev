import {
    j as s
} from "./jsx-runtime-Dvja6b4T.js";
import {
    R as h
} from "./icons-pNqq09c6.js";
import {
    c as u
} from "./index-5vInR1HM.js";
import {
    D as m,
    a as x,
    b as f,
    c as j
} from "./dropdown-menu-DgGL-OOT.js";
import {
    B as w
} from "./button-CiNp7xUM.js";
import {
    L as g
} from "./components-BuvoIJIj.js";
const L = ({
    data: r,
    searchParams: i,
    pathname: n = "",
    value: c = null,
    align: l = "right",
    label: t = ""
}) => {
    const p = e => {
        if (!i || !n) return n;
        const o = u(Object.fromEntries(i.entries()));
        return o.set(r.id, e), o.delete("page"), `${n}?${o.toString()}`
    };
    return s.jsxs(m, {
        children: [s.jsx(x, {
            asChild: !0,
            children: s.jsxs(w, {
                variant: "ghost",
                className: "h-10 flex items-center gap-2 capitalize",
                children: [r.icon && r.icon("h-4 w-4"), t && s.jsxs("span", {
                    children: [t, ": "]
                }), c || (r == null ? void 0 : r.items[0].label), h("h-4 w-4")]
            })
        }), s.jsx(f, {
            align: l === "left" ? "start" : "end",
            children: r == null ? void 0 : r.items.map(e => s.jsx(j, {
                asChild: !0,
                children: s.jsxs(g, {
                    to: e.path ? `/${e.path}` : p(e.id),
                    preventScrollReset: !0,
                    className: "flex items-center gap-2 w-full cursor-pointer",
                    children: [e.icon && e.icon("h-4 w-4"), s.jsx("span", {
                        children: e.label
                    })]
                })
            }, e.id))
        })]
    })
};
export {
    L as D
};