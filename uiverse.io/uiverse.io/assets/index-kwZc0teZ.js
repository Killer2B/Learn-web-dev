import {
    r as i,
    j as a
} from "./jsx-runtime-Dvja6b4T.js";

function p(e, n) {
    if (typeof e == "function") return e(n);
    e != null && (e.current = n)
}

function d(...e) {
    return n => {
        let r = !1;
        const l = e.map(t => {
            const o = p(t, n);
            return !r && typeof o == "function" && (r = !0), o
        });
        if (r) return () => {
            for (let t = 0; t < l.length; t++) {
                const o = l[t];
                typeof o == "function" ? o() : p(e[t], null)
            }
        }
    }
}
var m = i.forwardRef((e, n) => {
    const {
        children: r,
        ...l
    } = e, t = i.Children.toArray(r), o = t.find(g);
    if (o) {
        const s = o.props.children,
            c = t.map(f => f === o ? i.Children.count(s) > 1 ? i.Children.only(null) : i.isValidElement(s) ? s.props.children : null : f);
        return a.jsx(u, { ...l,
            ref: n,
            children: i.isValidElement(s) ? i.cloneElement(s, void 0, c) : null
        })
    }
    return a.jsx(u, { ...l,
        ref: n,
        children: r
    })
});
m.displayName = "Slot";
var u = i.forwardRef((e, n) => {
    const {
        children: r,
        ...l
    } = e;
    if (i.isValidElement(r)) {
        const t = E(r);
        return i.cloneElement(r, { ...h(l, r.props),
            ref: n ? d(n, t) : t
        })
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null
});
u.displayName = "SlotClone";
var y = ({
    children: e
}) => a.jsx(a.Fragment, {
    children: e
});

function g(e) {
    return i.isValidElement(e) && e.type === y
}

function h(e, n) {
    const r = { ...n
    };
    for (const l in n) {
        const t = e[l],
            o = n[l];
        /^on[A-Z]/.test(l) ? t && o ? r[l] = (...c) => {
            o(...c), t(...c)
        } : t && (r[l] = t) : l === "style" ? r[l] = { ...t,
            ...o
        } : l === "className" && (r[l] = [t, o].filter(Boolean).join(" "))
    }
    return { ...e,
        ...r
    }
}

function E(e) {
    var l, t;
    let n = (l = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : l.get,
        r = n && "isReactWarning" in n && n.isReactWarning;
    return r ? e.ref : (n = (t = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : t.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
}
export {
    m as S
};