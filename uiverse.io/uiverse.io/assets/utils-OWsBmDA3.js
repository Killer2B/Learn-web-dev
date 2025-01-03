import {
    r as u
} from "./jsx-runtime-Dvja6b4T.js";
import {
    d as i,
    e as l
} from "./components-BuvoIJIj.js";
const b = t => {
        const e = t.toLowerCase();
        return t.charAt(0).toUpperCase() + e.slice(1)
    },
    h = t => JSON.stringify(t, null, 2),
    v = t => {
        const e = parseInt(t.substr(1, 2), 16),
            r = parseInt(t.substr(3, 2), 16),
            n = parseInt(t.substr(5, 2), 16);
        return (e * 299 + r * 587 + n * 114) / 1e3 >= 128 ? "dark" : "light"
    },
    y = t => {
        const e = parseInt(t.substr(1, 2), 16),
            r = parseInt(t.substr(3, 2), 16),
            n = parseInt(t.substr(5, 2), 16);
        return (e * 299 + r * 587 + n * 114) / 1e3 >= 128 ? "#001f3f" : "#F6F5F7"
    },
    w = t => {
        const e = (r, n = 2) => `${new Array(n).fill(0)}${r}`.slice(-n);
        return `${e(t.getFullYear(),4)}-${e(t.getMonth()+1)}-${e(t.getDate())} ${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`
    };

function g() {
    const t = c("root");
    if (t) return t
}

function I() {
    const {
        favoritesIds: t
    } = c("root");
    if (t) return t
}

function N() {
    const t = g();
    if (!t) throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
    return t
}

function c(t) {
    const e = i(),
        r = u.useMemo(() => e.find(n => n.id === t), [e, t]);
    return r == null ? void 0 : r.data
}
const $ = t => t.includes("https://") || t.includes("http://") ? t : "https://" + t,
    f = Intl.NumberFormat("en", {
        notation: "compact"
    }),
    F = t => f.format(t),
    m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function M(t) {
    return `${m[t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`
}

function C(...t) {
    return t.filter(Boolean).join(" ")
}
const U = (t, e) => {
        if (!t) return "";
        if (t.includes("github")) switch (e) {
            case "sm":
                return t + "&s=24";
            case "md":
                return t + "&s=48";
            case "lg":
                return t + "&s=73";
            case "xl":
                return t;
            default:
                return t
        } else switch (e) {
            case "sm":
                return t.replace("_normal", "_mini");
            case "md":
                return t;
            case "lg":
                return t.replace("_normal", "_bigger");
            case "xl":
                return t.replace("_normal", "");
            default:
                return t
        }
    },
    D = (t, e) => {
        e !== "loader" && e !== "pattern" && t.stopImmediatePropagation();
        const r = t.target,
            n = s => s.tagName.toLowerCase() === "a" || s.closest("a") !== null,
            o = s => s.tagName.toLowerCase() === "button" || s.closest("button") !== null,
            a = s => s.tagName.toLowerCase() === "form" || s.closest("form") !== null;
        if (n(r) || o(r) || a(r)) console.log("Preventing navigation");
        else return;
        t.preventDefault(), t.stopPropagation()
    },
    L = () => {
        const t = i(),
            [e] = l();
        let r = !1,
            n = !1;
        return t.forEach(o => {
            const a = o.pathname,
                s = o.params;
            r || (r = !!(e.has("preview") || o.id.includes("image") || a.includes("generate-media") && (s != null && s.username) && (s != null && s.friendlyId))), !n && a !== "/" && (n = !!((s.category || s.tag || s != null && s.username || a === "/favorites") && !a.includes("curators") && !a.includes("admin") && !a.includes("review-variation")))
        }), {
            showNavigation: n,
            hideLayout: r
        }
    };
export {
    F as a, N as b, C as c, M as d, b as e, $ as f, U as g, h, w as i, f as j, y as k, v as l, L as m, I as n, D as p, g as u
};