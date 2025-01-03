import {
    r as o,
    j as i
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as h
} from "./index-DrK2pFTP.js";
import {
    u as I,
    a as g
} from "./index-CcT0GIt8.js";
import {
    P as u
} from "./index-w1qRmSKj.js";
import {
    c as m
} from "./utils-BAZByXB4.js";
var f = "Avatar",
    [j, q] = h(f),
    [C, p] = j(f),
    A = o.forwardRef((a, t) => {
        const {
            __scopeAvatar: e,
            ...r
        } = a, [s, n] = o.useState("idle");
        return i.jsx(C, {
            scope: e,
            imageLoadingStatus: s,
            onImageLoadingStatusChange: n,
            children: i.jsx(u.span, { ...r,
                ref: t
            })
        })
    });
A.displayName = f;
var x = "AvatarImage",
    w = o.forwardRef((a, t) => {
        const {
            __scopeAvatar: e,
            src: r,
            onLoadingStatusChange: s = () => {},
            ...n
        } = a, l = p(x, e), d = _(r), c = I(v => {
            s(v), l.onImageLoadingStatusChange(v)
        });
        return g(() => {
            d !== "idle" && c(d)
        }, [d, c]), d === "loaded" ? i.jsx(u.img, { ...n,
            ref: t,
            src: r
        }) : null
    });
w.displayName = x;
var S = "AvatarFallback",
    N = o.forwardRef((a, t) => {
        const {
            __scopeAvatar: e,
            delayMs: r,
            ...s
        } = a, n = p(S, e), [l, d] = o.useState(r === void 0);
        return o.useEffect(() => {
            if (r !== void 0) {
                const c = window.setTimeout(() => d(!0), r);
                return () => window.clearTimeout(c)
            }
        }, [r]), l && n.imageLoadingStatus !== "loaded" ? i.jsx(u.span, { ...s,
            ref: t
        }) : null
    });
N.displayName = S;

function _(a) {
    const [t, e] = o.useState("idle");
    return g(() => {
        if (!a) {
            e("error");
            return
        }
        let r = !0;
        const s = new window.Image,
            n = l => () => {
                r && e(l)
            };
        return e("loading"), s.onload = n("loaded"), s.onerror = n("error"), s.src = a, () => {
            r = !1
        }
    }, [a]), t
}
var L = A,
    y = w,
    R = N;
const b = o.forwardRef(({
    className: a,
    ...t
}, e) => i.jsx(L, {
    ref: e,
    className: m("relative flex h-10 w-10 shrink-0 overflow-hidden rounded", a),
    ...t
}));
b.displayName = L.displayName;
const E = o.forwardRef(({
    className: a,
    ...t
}, e) => i.jsx(y, {
    ref: e,
    className: m("aspect-square h-full w-full", a),
    ...t
}));
E.displayName = y.displayName;
const k = o.forwardRef(({
    className: a,
    ...t
}, e) => i.jsx(R, {
    ref: e,
    className: m("flex h-full w-full items-center justify-center rounded bg-muted", a),
    ...t
}));
k.displayName = R.displayName;
export {
    b as A, E as a, k as b
};