import {
    r,
    j as t
} from "./jsx-runtime-Dvja6b4T.js";
import {
    f as i,
    F as p
} from "./components-BuvoIJIj.js";
const m = ({
    children: o,
    className: n = "",
    provider: s = "github"
}) => {
    const e = r.useRef(null),
        a = i();
    return t.jsxs(p, {
        method: "post",
        action: `/auth/${s}`,
        ref: e,
        className: n,
        children: [t.jsx("input", {
            type: "hidden",
            name: "prevLocation",
            value: a.pathname
        }), o]
    })
};
export {
    m as S
};