import {
    r as n
} from "./jsx-runtime-Dvja6b4T.js";
const o = (e, s) => {
    const [t, c] = n.useState(s);
    return n.useEffect(() => {
        const r = i => {
            e.current !== null && !e.current.contains(i.target) && c(!t)
        };
        return t && document.addEventListener("click", r), () => {
            document.removeEventListener("click", r)
        }
    }, [t, e]), [t, c]
};
export {
    o as u
};