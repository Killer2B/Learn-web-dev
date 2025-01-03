import {
    j as e
} from "./jsx-runtime-Dvja6b4T.js";
import {
    l as a,
    n as l,
    o,
    p as i,
    x as c
} from "./icons-pNqq09c6.js";
import {
    c as x
} from "./utils-OWsBmDA3.js";
import {
    i as d,
    L as m
} from "./components-BuvoIJIj.js";

function g({
    error: t,
    isRootPage: s = !1
}) {
    return d(t) ? e.jsx(n, {
        isRootPage: s,
        color: "bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500",
        errorContent: e.jsxs(e.Fragment, {
            children: [a("text-dark-600 w-20 h-20"), e.jsxs("h1", {
                className: "text-4xl font-bold text-offwhite mt-3",
                children: [t.status, " ", t.statusText]
            }), e.jsx("p", {
                className: "text-gray-400 font-semibold max-w-[500px] text-center",
                children: t.data
            })]
        })
    }) : t instanceof Error ? e.jsx(n, {
        isRootPage: s,
        color: "bg-red-500 ",
        errorContent: e.jsxs(e.Fragment, {
            children: [l("text-dark-600 w-20 h-20"), e.jsx("h1", {
                className: "text-4xl font-bold text-offwhite mt-3",
                children: "Error"
            }), t.stack && e.jsxs("details", {
                className: "max-w-[800px] overflow-auto",
                children: [e.jsx("summary", {
                    className: "text-gray-400 font-semibold sm:px-10 px-52 break-words text-center",
                    children: t == null ? void 0 : t.message
                }), e.jsx("pre", {
                    children: t == null ? void 0 : t.stack
                })]
            })]
        })
    }) : e.jsx(n, {
        isRootPage: s,
        color: "bg-red-500 ",
        errorContent: e.jsxs(e.Fragment, {
            children: [l("text-dark-600 w-20 h-20"), e.jsx("h1", {
                className: "text-4xl font-bold text-offwhite mt-3",
                children: "Unknown error"
            })]
        })
    })
}
const n = ({
    errorContent: t,
    color: s,
    isRootPage: r
}) => e.jsxs("div", {
    className: "min-h-[500px] h-full py-10 px-8 rounded-xl mb-5 relative overflow-hidden w-full border-2 gap-2 border-dark-600/80 flex flex-col items-center justify-center",
    children: [e.jsxs("div", {
        className: "flex flex-col items-center justify-center gap-3 flex-[0.7] mb-20",
        children: [t, r ? e.jsx("p", {
            className: "text-offwhite font-semibold text-lg mt-6",
            children: "Contact us below"
        }) : e.jsx(m, {
            to: "/",
            className: "text-indigo-500 underline underline-offset-2 font-semibold text-lg mt-6",
            children: "Back to Homepage"
        })]
    }), e.jsxs("div", {
        className: "flex sm:flex-row flex-col items-center gap-6 flex-[0.3]",
        children: [e.jsx("p", {
            className: "font-semibold",
            children: "Get in touch"
        }), e.jsxs("a", {
            target: "_blank",
            rel: "noopener",
            href: "https://discord.gg/KD8ba2uUpT",
            className: "flex items-center gap-2 font-semibold group transition-all",
            children: [o("w-5 h-5"), e.jsx("span", {
                className: " group-hover:underline underline-offset-2",
                children: "Discord"
            })]
        }), e.jsxs("a", {
            target: "_blank",
            rel: "noopener",
            href: "https://www.instagram.com/uiverse.io/",
            className: "flex items-center gap-2 font-semibold group transition-all",
            children: [i("w-5 h-5"), e.jsx("span", {
                className: " group-hover:underline underline-offset-2",
                children: "Instagram"
            })]
        }), e.jsxs("a", {
            target: "_blank",
            rel: "noopener",
            href: "https://twitter.com/uiverse_io",
            className: "flex items-center gap-2 font-semibold group transition-all",
            children: [c("w-5 h-5"), e.jsx("span", {
                className: " group-hover:underline underline-offset-2",
                children: "Twitter/X"
            })]
        })]
    }), e.jsx("div", {
        className: x("blur-3xl w-[70%] rounded-full h-28 absolute -bottom-28", s)
    })]
});
export {
    g as E
};