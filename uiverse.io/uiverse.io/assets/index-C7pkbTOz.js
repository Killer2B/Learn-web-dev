import {
    r as u
} from "./jsx-runtime-Dvja6b4T.js";

function o(r) {
    const e = u.useRef({
        value: r,
        previous: r
    });
    return u.useMemo(() => (e.current.value !== r && (e.current.previous = e.current.value, e.current.value = r), e.current.previous), [r])
}
export {
    o as u
};