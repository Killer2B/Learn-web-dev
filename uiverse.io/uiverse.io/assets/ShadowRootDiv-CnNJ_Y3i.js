import {
    r as n,
    j as l
} from "./jsx-runtime-Dvja6b4T.js";
import {
    p as c
} from "./utils-OWsBmDA3.js";
const p = ({
        css: o,
        html: s,
        globalReset: a,
        postType: i
    }) => {
        const t = n.useRef(null),
            [u, d] = n.useState(!1);
        return n.useEffect(() => {
            d(!0)
        }, []), n.useEffect(() => {
            if (!u || !t.current) return;
            let e = t.current.shadowRoot;
            return (() => {
                e || (e = t.current.attachShadow({
                    mode: "open"
                }), t.current.id = "shadow-root-div-ready");
                const r = e.querySelector("style") || document.createElement("style");
                r.textContent = a + o, e.innerHTML = "", e.appendChild(r), e.innerHTML += s, e.addEventListener("click", f => c(f, i))
            })(), () => {
                e == null || e.removeEventListener("click", r => c(r, i))
            }
        }, [s, o, t, u, a]), l.jsx("div", {
            className: "flex items-center justify-center h-full w-full relative z-[1] transform-cpu overflow-hidden",
            ref: t,
            suppressHydrationWarning: !0
        })
    },
    w = p;
export {
    w as S
};