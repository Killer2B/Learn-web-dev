import {
    j as o
} from "./jsx-runtime-Dvja6b4T.js";
import {
    a as m
} from "./constants-nXafxhpt.js";
import {
    u as g
} from "./utils-OWsBmDA3.js";
import {
    C as y
} from "./Card-CSbNp-yI.js";
import {
    P as b
} from "./Pagination-Duuu2qTD.js";
import {
    F as x
} from "./Filters-ByvKdVO2.js";
import {
    c as w
} from "./index-5vInR1HM.js";
import {
    D as v
} from "./icons-pNqq09c6.js";
import {
    o as C
} from "./metaOgImage-DYpNllW7.js";
import {
    t as S
} from "./bundle-mjs-BOZU2X2x.js";
import {
    E as j
} from "./ErrorContent-Ck5J9Q_i.js";
import {
    A as U
} from "./Affiliate-DFywxzX-.js";
import {
    u as E,
    h as $,
    j as N,
    e as P,
    a as z
} from "./components-BuvoIJIj.js";
import "./index-browser-CJEdsfDC.js";
import "./focus-management-BQHAzeQ5.js";
import "./transition-8DRjYs4_.js";
import "./floating-ui.react-pqI3rI6L.js";
import "./floating-ui.dom-Cian5nPY.js";
import "./floating-ui.react-dom-E7IEuBz2.js";
import "./motion-CMzn_ctr.js";
import "./Tooltip-CWGz9yl1.js";
import "./react-tooltip.min-DglEp1XQ.js";
import "./index-Bvmn5eQh.js";
import "./Badges-Boz_qM20.js";
import "./dates-D8Yi43wI.js";
import "./badge-C49ifptK.js";
import "./index-Bb4qSo10.js";
import "./utils-BAZByXB4.js";
import "./clsx-B-dksMZM.js";
import "./CustomTooltip-J09bHzyh.js";
import "./tooltip-CeFBy-g5.js";
import "./index-DW48STyt.js";
import "./index-w1qRmSKj.js";
import "./index-CcT0GIt8.js";
import "./index-ccF5fHaF.js";
import "./index-DCuDrq3I.js";
import "./index-DrK2pFTP.js";
import "./index-CzbA40Po.js";
import "./index-BdBVW3oh.js";
import "./index-D3mH5y1-.js";
import "./Dropdown-D2tEq7s7.js";
import "./dropdown-menu-DgGL-OOT.js";
import "./index-lWeSOaoU.js";
import "./index-COL9DQ1M.js";
import "./Combination-DNpN-pE3.js";
import "./component-5ZU33JcH.js";
import "./index-zEK70-uj.js";
import "./index-C9jkpvF-.js";
import "./index-WefHMECi.js";
import "./button-CiNp7xUM.js";
import "./index-kwZc0teZ.js";
import "./disclosure-1pvYrbuE.js";
import "./hidden-B7qEBE7r.js";
import "./input-DroKt9gF.js";
import "./module-BKXOEbBQ.js";
import "./Button-CFIJCp_o.js";
const B = {
    all: "Discover a wide range of open-source, customizable components for web and mobile applications on Uiverse. Browse an extensive selection of buttons, cards, loaders, inputs, and more to enhance your app's user interface and elevate your design experience.",
    buttons: "Explore a wide variety of open-source, customizable buttons for web and mobile applications on Uiverse. Find the perfect button style, from flat to rounded designs, to enhance your app's user interface and elevate your design experience.",
    checkboxes: "Discover an extensive range of open-source, versatile checkboxes for web and mobile applications at Uiverse. Browse different styles and sizes to improve your app's user experience and achieve a polished, professional look.",
    switches: "Upgrade your app's user interface with an impressive selection of open-source toggle switches on Uiverse. Choose from various styles and colors to create a seamless, engaging experience for web and mobile applications.",
    cards: "Elevate your app's design with Uiverse's library of open-source, responsive cards for web and mobile applications. Browse an array of styles, from minimalistic to feature-rich, to find the perfect match for your user interface.",
    loaders: "Enhance your app's loading experience with a diverse collection of open-source loaders from Uiverse. Explore various styles, including spinners, progress bars, and animations, to create an engaging, user-friendly interface for web and mobile applications.",
    inputs: "Improve your app's user experience with customizable, open-source input fields from Uiverse. Browse an extensive selection of styles and formats to create seamless, user-friendly forms for web and mobile applications.",
    "radio-buttons": "Find the perfect open-source radio buttons for your web and mobile applications at Uiverse. Choose from a variety of styles and sizes to create an engaging, consistent user interface that enhances your app's overall design.",
    forms: "Build professional, user-friendly pre-built forms for web and mobile applications with Uiverse's collection of open-source form components. Discover an array of streamlined forms that improve user experience and elevate your design.",
    favorites: "Discover a wide range of open-source, customizable components for web and mobile applications on Uiverse. Browse an extensive selection of buttons, cards, loaders, inputs, and more to enhance your app's user interface and elevate your design experience."
};

function Te() {
    const {
        posts: e,
        currentPage: t,
        hasNextPage: p
    } = E(), {
        category: n
    } = $(), {
        user: l
    } = g(), c = N(), a = t > 0, [s] = P(), r = m[n], d = i => {
        const h = i === "forward" ? 1 : -1,
            f = w(s);
        f.set("page", (t + h).toString()), c(`/${r.path}?${f.toString()}`)
    }, u = (r == null ? void 0 : r.title) || (r == null ? void 0 : r.label);
    return o.jsxs("main", {
        className: "category-page",
        children: [!l && o.jsxs("div", {
            className: "mt-9 mr-10 max-md:mb-2.5",
            children: [o.jsx("h1", {
                className: "mb-2 text-3xl font-bold font-display",
                children: s.has("search") ? `Search results for ${s.get("search")}` : u
            }), s.has("search") ? o.jsx("p", {
                className: "text-gray-400 pb-2.5 leading-6",
                children: `Showing results for "${s.get("search")}" - UI Elements in CSS & Tailwind, free to use, open-source, and customizable. Copy to Figma, or use on your website.`
            }) : o.jsxs("p", {
                className: "text-gray-400 pb-2.5 leading-6",
                children: ["Open-Source", " ", u !== "Browse all" ? u.toLowerCase() : "UI elements", " ", "made with CSS or Tailwind"]
            })]
        }), o.jsx("div", {
            className: "pt-3.5 pb-2.5 z-60 relative justify-between items-end flex-wrap",
            children: o.jsx(x, {
                activeTab: r,
                currentPage: t
            })
        }), o.jsxs("section", {
            className: S("grid grid-cols-default gap-y-5 gap-x-3.5 content-stretch items-stretch w-full mb-24 max-xs:grid-cols-1 max-xs:gap-2.5", `grid-cols-${r.id}`),
            children: [e && e.length > 0 ? e.map(i => i.type ? o.jsx(y, {
                post: i
            }, i.id) : o.jsx(U, {
                id: i.id
            }, i.id)) : o.jsx("div", {
                className: "flex items-center justify-center col-span-full border-dashed border-gray-500 border-2  min-h-[300px] rounded-2xl grid-cols-auto-fill-334",
                children: o.jsxs("div", {
                    className: "flex flex-col items-center p-2 font-semibold text-center text-gray-500 grid-cols-auto-fill-434",
                    children: [v("w-12 h-12 mb-4 text-gray-500"), "Nothing here, try to tweak your filters or adjust the search query"]
                })
            }), o.jsx(b, {
                handleNavigation: d,
                currentPage: t,
                hasNextPage: p,
                hasPreviousPage: a
            })]
        })]
    })
}
const Fe = ({
    data: e,
    params: t,
    location: p
}) => {
    var r;
    const n = t.category,
        l = `https://uiverse.io/${t.category}`,
        c = new URLSearchParams(p == null ? void 0 : p.search).get("search");
    let a = "Discover Our Entire UI Collection: CSS & Tailwind Elements",
        s = B[n];
    return c ? (a = `${(e==null?void 0:e.postsCount)>20?`${e==null?void 0:e.postsCount}+ `:""}${c} UI Elements in CSS & Tailwind`, s = `${(e==null?void 0:e.postsCount)>20?`${e==null?void 0:e.postsCount} search`:"Search"} results for "${c}": UI Elements in CSS & Tailwind, free to use, open-source, and customizable. Copy to Figma, or use on your website.`) : a = (r = m[n]) != null && r.label ? `${(e==null?void 0:e.postsCount)>50?`${e==null?void 0:e.postsCount} `:""}${m[n].altTitle||m[n].label}: CSS & Tailwind` : "CSS & Tailwind UI Elements", [{
        title: a
    }, {
        name: "description",
        content: s
    }, {
        name: "twitter:description",
        content: s
    }, {
        property: "og:description",
        content: s
    }, {
        property: "og:url",
        content: l
    }, {
        name: "twitter:url",
        content: l
    }, {
        name: "twitter:title",
        content: a
    }, ...C]
};

function ke() {
    const e = z();
    return o.jsx("div", {
        className: "h-full pb-14",
        children: o.jsx(j, {
            error: e
        })
    })
}
export {
    ke as ErrorBoundary, Te as
    default, Fe as meta
};