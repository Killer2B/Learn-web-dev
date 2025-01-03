import {
    j as e
} from "./jsx-runtime-Dvja6b4T.js";
import {
    i as r
} from "./index-browser-CJEdsfDC.js";
const s = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "bg-indigo-600 text-indigo-100 px-1.5 py-0.5 text-xs font-bold rounded-md",
            children: "Pro"
        })
    }),
    d = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "bg-fuchsia-600 text-indigo-100 px-1.5 py-0.5 text-xs font-bold rounded-md",
            children: "Pro+"
        })
    }),
    o = ({
        subscription: t
    }) => {
        switch (t) {
            case r.subscription.pro:
                return e.jsx(s, {});
            case r.subscription.pro_plus:
                return e.jsx(d, {});
            default:
                return null
        }
    },
    i = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "px-2 py-1 text-xs text-green-200 bg-green-700 rounded-md",
            title: "Moderator",
            children: "M"
        })
    }),
    x = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "px-2 py-1 text-xs text-gray-200 bg-gray-700 rounded-md",
            title: "Editor",
            children: "E"
        })
    }),
    c = () => e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "px-2 py-1 text-xs text-red-200 bg-red-500/40 rounded-md",
            title: "Suspended",
            children: "Suspended"
        })
    });
export {
    o as G, i as M, s as P, c as S, x as T, d as a
};