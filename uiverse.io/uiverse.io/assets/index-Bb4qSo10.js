function m(n) {
    var e, t, l = "";
    if (typeof n == "string" || typeof n == "number") l += n;
    else if (typeof n == "object")
        if (Array.isArray(n))
            for (e = 0; e < n.length; e++) n[e] && (t = m(n[e])) && (l && (l += " "), l += t);
        else
            for (e in n) n[e] && (l && (l += " "), l += e);
    return l
}

function j() {
    for (var n, e, t = 0, l = ""; t < arguments.length;)(n = arguments[t++]) && (e = m(n)) && (l && (l += " "), l += e);
    return l
}
const f = n => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n,
    y = j,
    A = (n, e) => t => {
        var l;
        if ((e == null ? void 0 : e.variants) == null) return y(n, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
        const {
            variants: d,
            defaultVariants: u
        } = e, N = Object.keys(d).map(a => {
            const r = t == null ? void 0 : t[a],
                s = u == null ? void 0 : u[a];
            if (r === null) return null;
            const i = f(r) || f(s);
            return d[a][i]
        }), v = t && Object.entries(t).reduce((a, r) => {
            let [s, i] = r;
            return i === void 0 || (a[s] = i), a
        }, {}), V = e == null || (l = e.compoundVariants) === null || l === void 0 ? void 0 : l.reduce((a, r) => {
            let {
                class: s,
                className: i,
                ...b
            } = r;
            return Object.entries(b).every(C => {
                let [c, o] = C;
                return Array.isArray(o) ? o.includes({ ...u,
                    ...v
                }[c]) : { ...u,
                    ...v
                }[c] === o
            }) ? [...a, s, i] : a
        }, []);
        return y(n, N, V, t == null ? void 0 : t.class, t == null ? void 0 : t.className)
    };
export {
    A as c
};