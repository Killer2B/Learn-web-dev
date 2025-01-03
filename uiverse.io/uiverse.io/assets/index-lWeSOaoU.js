import {
    r as l,
    j as C,
    W as m
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as v
} from "./index-DrK2pFTP.js";
import {
    c as O,
    u as A
} from "./index-w1qRmSKj.js";
var y = l.forwardRef((e, t) => {
    const {
        children: o,
        ...r
    } = e, n = l.Children.toArray(o), s = n.find(w);
    if (s) {
        const i = s.props.children,
            u = n.map(x => x === s ? l.Children.count(i) > 1 ? l.Children.only(null) : l.isValidElement(i) ? i.props.children : null : x);
        return C.jsx(S, { ...r,
            ref: t,
            children: l.isValidElement(i) ? l.cloneElement(i, void 0, u) : null
        })
    }
    return C.jsx(S, { ...r,
        ref: t,
        children: o
    })
});
y.displayName = "Slot";
var S = l.forwardRef((e, t) => {
    const {
        children: o,
        ...r
    } = e;
    if (l.isValidElement(o)) {
        const n = V(o);
        return l.cloneElement(o, { ...T(r, o.props),
            ref: t ? O(t, n) : n
        })
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null
});
S.displayName = "SlotClone";
var P = ({
    children: e
}) => C.jsx(C.Fragment, {
    children: e
});

function w(e) {
    return l.isValidElement(e) && e.type === P
}

function T(e, t) {
    const o = { ...t
    };
    for (const r in t) {
        const n = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? n && s ? o[r] = (...u) => {
            s(...u), n(...u)
        } : n && (o[r] = n) : r === "style" ? o[r] = { ...n,
            ...s
        } : r === "className" && (o[r] = [n, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...o
    }
}

function V(e) {
    var r, n;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        o = t && "isReactWarning" in t && t.isReactWarning;
    return o ? e.ref : (t = (n = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : n.get, o = t && "isReactWarning" in t && t.isReactWarning, o ? e.props.ref : e.props.ref || e.ref)
}

function D(e) {
    const t = e + "CollectionProvider",
        [o, r] = v(t),
        [n, s] = o(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = p => {
            const {
                scope: c,
                children: R
            } = p, a = m.useRef(null), f = m.useRef(new Map).current;
            return C.jsx(n, {
                scope: c,
                itemMap: f,
                collectionRef: a,
                children: R
            })
        };
    i.displayName = t;
    const u = e + "CollectionSlot",
        x = m.forwardRef((p, c) => {
            const {
                scope: R,
                children: a
            } = p, f = s(u, R), d = A(c, f.collectionRef);
            return C.jsx(y, {
                ref: d,
                children: a
            })
        });
    x.displayName = u;
    const g = e + "CollectionItemSlot",
        h = "data-radix-collection-item",
        M = m.forwardRef((p, c) => {
            const {
                scope: R,
                children: a,
                ...f
            } = p, d = m.useRef(null), N = A(c, d), E = s(g, R);
            return m.useEffect(() => (E.itemMap.set(d, {
                ref: d,
                ...f
            }), () => void E.itemMap.delete(d))), C.jsx(y, {
                [h]: "",
                ref: N,
                children: a
            })
        });
    M.displayName = g;

    function I(p) {
        const c = s(e + "CollectionConsumer", p);
        return m.useCallback(() => {
            const a = c.collectionRef.current;
            if (!a) return [];
            const f = Array.from(a.querySelectorAll(`[${h}]`));
            return Array.from(c.itemMap.values()).sort((E, j) => f.indexOf(E.ref.current) - f.indexOf(j.ref.current))
        }, [c.collectionRef, c.itemMap])
    }
    return [{
        Provider: i,
        Slot: x,
        ItemSlot: M
    }, I, r]
}
export {
    D as c
};