import {
    r as t
} from "./jsx-runtime-Dvja6b4T.js";

function f(u) {
    const e = t.useRef(u);
    return t.useEffect(() => {
        e.current = u
    }), t.useMemo(() => (...r) => {
        var o;
        return (o = e.current) == null ? void 0 : o.call(e, ...r)
    }, [])
}
var a = globalThis != null && globalThis.document ? t.useLayoutEffect : () => {};
export {
    a,
    f as u
};