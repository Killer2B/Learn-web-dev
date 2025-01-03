import {
    r as c,
    j as o
} from "./jsx-runtime-Dvja6b4T.js";
const i = "CEAI5KQW",
    p = "uiverseio",
    d = ({
        className: e,
        meta: r
    }) => {
        const s = c.useRef();
        return c.useEffect(() => {
            if (s.current) {
                s.current.innerHTML = "";
                const n = document.createElement("script");
                n.id = "_carbonads_js", n.src = `//cdn.carbonads.com/carbon.js?serve=${(r==null?void 0:r.serve)||i}&placement=${(r==null?void 0:r.placement)||p}&format=${(r==null?void 0:r.format)||"responsive"}`, s.current.appendChild(n)
            }
        }, []), o.jsx("div", {
            className: e,
            ref: s
        })
    };
export {
    d as N
};