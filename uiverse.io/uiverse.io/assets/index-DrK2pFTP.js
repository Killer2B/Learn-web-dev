import {
    r as i,
    j as _
} from "./jsx-runtime-Dvja6b4T.js";

function P(t, x = []) {
    let o = [];

    function f(u, e) {
        const n = i.createContext(e),
            r = o.length;
        o = [...o, e];

        function m(a) {
            const {
                scope: c,
                children: C,
                ...p
            } = a, d = (c == null ? void 0 : c[t][r]) || n, v = i.useMemo(() => p, Object.values(p));
            return _.jsx(d.Provider, {
                value: v,
                children: C
            })
        }

        function S(a, c) {
            const C = (c == null ? void 0 : c[t][r]) || n,
                p = i.useContext(C);
            if (p) return p;
            if (e !== void 0) return e;
            throw new Error(`\`${a}\` must be used within \`${u}\``)
        }
        return m.displayName = u + "Provider", [m, S]
    }
    const s = () => {
        const u = o.map(e => i.createContext(e));
        return function(n) {
            const r = (n == null ? void 0 : n[t]) || u;
            return i.useMemo(() => ({
                [`__scope${t}`]: { ...n,
                    [t]: r
                }
            }), [n, r])
        }
    };
    return s.scopeName = t, [f, h(s, ...x)]
}

function h(...t) {
    const x = t[0];
    if (t.length === 1) return x;
    const o = () => {
        const f = t.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(u) {
            const e = f.reduce((n, {
                useScope: r,
                scopeName: m
            }) => {
                const a = r(u)[`__scope${m}`];
                return { ...n,
                    ...a
                }
            }, {});
            return i.useMemo(() => ({
                [`__scope${x.scopeName}`]: e
            }), [e])
        }
    };
    return o.scopeName = x.scopeName, o
}
export {
    P as c
};