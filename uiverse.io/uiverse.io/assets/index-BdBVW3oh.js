import {
    r
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u as f
} from "./index-CcT0GIt8.js";

function b({
    prop: t,
    defaultProp: l,
    onChange: s = () => {}
}) {
    const [e, o] = v({
        defaultProp: l,
        onChange: s
    }), n = t !== void 0, i = n ? t : e, u = f(s), d = r.useCallback(c => {
        if (n) {
            const a = typeof c == "function" ? c(t) : c;
            a !== t && u(a)
        } else o(c)
    }, [n, t, o, u]);
    return [i, d]
}

function v({
    defaultProp: t,
    onChange: l
}) {
    const s = r.useState(t),
        [e] = s,
        o = r.useRef(e),
        n = f(l);
    return r.useEffect(() => {
        o.current !== e && (n(e), o.current = e)
    }, [e, o, n]), s
}
export {
    b as u
};