import {
    r
} from "./jsx-runtime-Dvja6b4T.js";
const l = (t, e = "custom-challenge-css") => {
    r.useEffect(() => {
        if (!t) return;
        const o = document.createElement("style");
        o.setAttribute(`data-${e}`, ""), o.textContent = t;
        const n = document.head.querySelector(`[data-${e}]`);
        return n && n.remove(), document.head.appendChild(o), () => {
            const s = document.head.querySelector(`[data-${e}]`);
            s && s.remove()
        }
    }, [t, e])
};
export {
    l as u
};