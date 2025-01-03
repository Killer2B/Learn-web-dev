import {
    r as o,
    j as i
} from "./jsx-runtime-Dvja6b4T.js";
import "./components-BuvoIJIj.js";
import {
    S as u
} from "./index-kwZc0teZ.js";
import {
    c
} from "./index-Bb4qSo10.js";
import {
    c as p
} from "./utils-BAZByXB4.js";
var b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    v = b.reduce((e, r) => {
        const a = o.forwardRef((s, t) => {
            const {
                asChild: m,
                ...d
            } = s, f = m ? u : r;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), i.jsx(f, { ...d,
                ref: t
            })
        });
        return a.displayName = `Primitive.${r}`, { ...e,
            [r]: a
        }
    }, {}),
    w = "Label",
    l = o.forwardRef((e, r) => i.jsx(v.label, { ...e,
        ref: r,
        onMouseDown: a => {
            var t;
            a.target.closest("button, input, select, textarea") || ((t = e.onMouseDown) == null || t.call(e, a), !a.defaultPrevented && a.detail > 1 && a.preventDefault())
        }
    }));
l.displayName = w;
var n = l;
const x = c("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    N = o.forwardRef(({
        className: e,
        ...r
    }, a) => i.jsx(n, {
        ref: a,
        className: p(x(), e),
        ...r
    }));
N.displayName = n.displayName;
export {
    N as L
};