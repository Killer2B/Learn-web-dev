import {
    r as o,
    R as n
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u,
    a as c
} from "./index-CcT0GIt8.js";

function E(s, e = globalThis == null ? void 0 : globalThis.document) {
    const t = u(s);
    o.useEffect(() => {
        const a = r => {
            r.key === "Escape" && t(r)
        };
        return e.addEventListener("keydown", a, {
            capture: !0
        }), () => e.removeEventListener("keydown", a, {
            capture: !0
        })
    }, [t, e])
}
var d = n.useId || (() => {}),
    i = 0;

function y(s) {
    const [e, t] = o.useState(d());
    return c(() => {
        t(a => a ? ? String(i++))
    }, [s]), e ? `radix-${e}` : ""
}
export {
    E as a, y as u
};