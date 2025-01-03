import {
    j as c
} from "./jsx-runtime-Dvja6b4T.js";
import {
    t as l
} from "./bundle-mjs-BOZU2X2x.js";
import {
    L as p
} from "./components-BuvoIJIj.js";
const w = ({
        type: x,
        icon: r,
        htmlType: h,
        htmlName: m,
        htmlValue: u,
        onClick: o,
        children: a,
        href: s,
        disabled: t = !1,
        className: n,
        small: i = !1,
        target: b = null,
        id: g
    }) => {
        const f = (d = !1) => {
            let e = "";
            switch (x) {
                case "primary":
                    e = "bg-indigo-600 hover:bg-indigo-700 text-offwhite";
                    break;
                case "primary-fuchsia":
                    e = " bg-fuchsia-700 hover:bg-fuchsia-800 text-offwhite";
                    break;
                case "primary-green":
                    e = "bg-green-600 hover:bg-green-700 text-offwhite";
                    break;
                case "secondary":
                    e = "bg-transparent hover:bg-dark-600 max-md:bg-dark-600 text-offwhite";
                    break;
                case "secondary-with-bg":
                    e = "bg-dark-600 hover:bg-dark-500 text-offwhite";
                    break;
                case "special":
                    e = "bg-yellow-500 hover:bg-yellow-600 text-white";
                    break;
                case "warning":
                    e = "bg-red-500 hover:bg-red-600 text-offwhite";
                    break;
                default:
                    e = "bg-blue-500 hover:bg-blue-600 text-white";
                    break
            }
            return e + (d ? " opacity-50 cursor-not-allowed" : " cursor-pointer")
        };
        return s ? c.jsxs(p, {
            to: s,
            className: l("px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg", i ? "text-sm" : "text-base", "font-semibold transition-colors duration-200", f(t), n),
            onClick: o,
            ...b ? {
                target: b
            } : {},
            id: g,
            children: [r, a]
        }) : c.jsxs("button", {
            className: l("px-4 py-2.5 font-sans flex items-center gap-2 border-none rounded-lg", i ? "text-sm" : "text-base", "font-semibold transition-colors duration-200", f(t), n),
            onClick: o,
            type: h,
            disabled: t,
            id: g,
            name: m,
            value: u,
            children: [r, a]
        })
    },
    j = w;
export {
    j as B
};