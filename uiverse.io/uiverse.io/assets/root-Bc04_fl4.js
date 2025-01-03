import {
    r as a,
    j as t,
    W as te
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u as zn
} from "./useDetectOutsideClick-DHO7tNhT.js";
import {
    N as Ht
} from "./Notifications-Bizu6BLj.js";
import {
    q as ke,
    y as tt,
    o as dt,
    x as Yt,
    p as Wn,
    R as ut,
    i as ft,
    L as Hn,
    aT as Yn,
    aV as Xt,
    T as Vt,
    ac as Te,
    aW as Jt,
    r as Oe,
    Y as Pe,
    Z as Zt,
    aX as Xn,
    as as Vn,
    E as Jn,
    A as Zn,
    aH as qn,
    aj as Qn,
    G as It,
    v as eo,
    aG as to,
    a6 as ro
} from "./icons-pNqq09c6.js";
import {
    c as Y,
    u as mt,
    m as no
} from "./utils-OWsBmDA3.js";
import {
    B as re
} from "./button-CiNp7xUM.js";
import {
    G as oo,
    f as Fe,
    H as so,
    I as ao,
    _ as io,
    g as qt,
    L as R,
    N as z,
    F as co,
    r as lo,
    C as uo,
    h as fo,
    e as mo,
    c as po,
    u as ho,
    M as Qt,
    J as er,
    O as xo,
    S as tr,
    a as go
} from "./components-BuvoIJIj.js";
import {
    C as vo
} from "./CustomTooltip-J09bHzyh.js";
import {
    a as Ue
} from "./constants-nXafxhpt.js";
import {
    B as Ie
} from "./Button-CFIJCp_o.js";
import {
    a as rr
} from "./astronaut-Da2lg0SW.js";
import {
    G as nr,
    M as or,
    T as sr,
    S as bo
} from "./Badges-Boz_qM20.js";
import {
    i as P
} from "./index-browser-CJEdsfDC.js";
import {
    U as ar
} from "./user-avatar-C7L6gCcp.js";
import {
    y as wo,
    j as ce
} from "./disclosure-1pvYrbuE.js";
import {
    S as Le
} from "./index-kwZc0teZ.js";
import {
    u as pt
} from "./index-COL9DQ1M.js";
import {
    a as yo,
    u as Ae
} from "./index-ccF5fHaF.js";
import {
    u as q,
    a as ve
} from "./index-CcT0GIt8.js";
import {
    u as No,
    o as jo,
    s as Co,
    l as Mo,
    f as Eo,
    a as So,
    b as Ro,
    h as _o
} from "./floating-ui.react-dom-E7IEuBz2.js";
import {
    u as Po
} from "./index-CzbA40Po.js";
import {
    d as Io
} from "./floating-ui.dom-Cian5nPY.js";
import {
    u as ir
} from "./index-BdBVW3oh.js";
import {
    c as Ao,
    _ as ko,
    u as To,
    a as ue,
    f as Oo,
    z as Fo,
    s as Lo,
    b as Do,
    R as Bo,
    e as Uo,
    h as $o
} from "./component-5ZU33JcH.js";
import {
    c as U
} from "./utils-BAZByXB4.js";
import {
    c as cr
} from "./createLucideIcon-teSh_oO_.js";
import {
    C as Ko
} from "./check-DH96kU61.js";
import {
    B as Go,
    Q as zo
} from "./react-toastify.esm-EkDeeNHo.js";
import {
    M as Wo
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    S as Ye
} from "./SignInButton-B8EQU2Px.js";
import {
    C as Ho
} from "./checkbox-B7nMMNEE.js";
import {
    u as Yo
} from "./useWindowSize-BGWPyh8W.js";
import {
    N as Xo
} from "./NewAd-Dkyvt_XU.js";
import {
    E as Vo
} from "./ErrorContent-Ck5J9Q_i.js";
import {
    c as Jo
} from "./tooltip-CeFBy-g5.js";
import {
    t as Zo
} from "./bundle-mjs-BOZU2X2x.js";
import {
    _ as qo
} from "./module-BKXOEbBQ.js";
import "./dates-D8Yi43wI.js";
import "./index-Bb4qSo10.js";
import "./avatar-B5HRkzDo.js";
import "./index-DrK2pFTP.js";
import "./index-w1qRmSKj.js";
import "./focus-management-BQHAzeQ5.js";
import "./transition-8DRjYs4_.js";
import "./hidden-B7qEBE7r.js";
import "./clsx-B-dksMZM.js";
import "./index-Bvmn5eQh.js";
import "./index-DW48STyt.js";
import "./index-C7pkbTOz.js";
import "./index-C9jkpvF-.js";
import "./index-DCuDrq3I.js";
import "./index-D3mH5y1-.js";
/**
 * @remix-run/react v2.10.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
let At = "positions";

function lr({
    getKey: e,
    ...r
}) {
    let {
        isSpaMode: n
    } = oo(), o = Fe(), s = so();
    ao({
        getKey: e,
        storageKey: At
    });
    let i = a.useMemo(() => {
        if (!e) return null;
        let l = e(o, s);
        return l !== o.key ? l : null
    }, []);
    if (n) return null;
    let d = ((l, m) => {
        if (!window.history.state || !window.history.state.key) {
            let c = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: c
            }, "")
        }
        try {
            let u = JSON.parse(sessionStorage.getItem(l) || "{}")[m || window.history.state.key];
            typeof u == "number" && window.scrollTo(0, u)
        } catch (c) {
            console.error(c), sessionStorage.removeItem(l)
        }
    }).toString();
    return a.createElement("script", io({}, r, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${d})(${JSON.stringify(At)}, ${JSON.stringify(i)})`
        }
    }))
}
const Qo = "/assets/global-D_7sb_Sp.css",
    es = "/assets/styles-Cn3ar6wA.css",
    ts = "/assets/tailwind-C2NydNYt.css",
    rs = ({
        user: e,
        notifications: r
    }) => {
        const n = a.useRef(null),
            [o, s] = zn(n, !1),
            [i, d] = a.useState(0),
            l = qt();
        a.useEffect(() => {
            r && d(r.filter(c => !c.read).length)
        }, [r]);
        const m = () => {
            s(c => (c === !1 && i > 0 && setTimeout(() => {
                l.submit({
                    action: "read"
                }, {
                    method: "post"
                })
            }, 1e3), !c))
        };
        return t.jsxs("div", {
            className: "relative",
            children: [t.jsx(re, {
                className: Y(o && "bg-dark-600", i > 0 && "new"),
                variant: "ghost",
                onClick: m,
                "data-count": i > 9 ? "9+" : i,
                children: ke("mr-0 w-5 h-5")
            }), t.jsxs("div", {
                ref: n,
                className: Y("rounded-lg absolute top-[45px] right-auto translate-y-0 z-[1000] p-1 shadow-xl bg-dark-600 transition-all duration-500 ease shadow-xl notifications right-auto lg:right-0 w-64 sm:w-96 text-offwhite border-2 border-dark-600/80 bg-dark-700", o ? "opacity-100 visible translate-y-[10px]" : "opacity-0 invisible translate-y-[-20px]"),
                children: [t.jsxs("div", {
                    className: "flex items-center px-4 py-2 text-base font-semibold",
                    children: [ke("w-5 h-5 mr-2 -translate-y-px"), " Notifications"]
                }), t.jsx("div", {
                    className: "overflow-y-auto custom-scrollbar max-h-96",
                    children: t.jsx("ul", {
                        children: (r == null ? void 0 : r.length) > 0 ? r.map(c => t.jsx(Ht, { ...c
                        }, c.id)) : t.jsx("li", {
                            className: "flex items-center justify-center px-3 py-6 text-gray-400",
                            children: t.jsx("p", {
                                children: "You have no new notifications"
                            })
                        })
                    })
                })]
            })]
        })
    },
    dr = "/assets/logo-png-BXFOQKfc.png",
    Xe = ({
        points: e,
        description: r
    }) => t.jsxs("div", {
        className: "flex items-center gap-3 py-2",
        children: [t.jsxs("span", {
            className: "flex items-center justify-center min-w-[4rem] px-4 py-2 font-bold text-gray-50 border-2 rounded-lg border-dark-600/80",
            children: [tt("block w-5 h-5 mr-2 text-indigo-400 flex-shrink-0"), " ", e]
        }), t.jsx("span", {
            className: "font-semibold text-gray-400",
            children: r
        })]
    }),
    ns = ({
        id: e,
        score: r
    }) => {
        const n = t.jsxs("div", {
            className: "flex items-center pl-3.5 text-sm pr-4 rounded-lg bg-dark-700 h-[42px] border-2 border-dark-600/80",
            children: [tt("w-5 h-5 mr-2 text-indigo-400"), (r == null ? void 0 : r.toLocaleString("en-US")) || 0]
        });
        return t.jsx(vo, {
            trigger: n,
            contentProps: {
                className: "p-5 max-w-[350px] bg-dark-700 border-2 border-dark-600/80",
                side: "bottom"
            },
            children: t.jsxs("div", {
                className: "space-y-4",
                children: [t.jsx("div", {
                    className: "flex items-center justify-center",
                    children: t.jsxs("span", {
                        className: "flex items-center text-xl font-bold",
                        children: [tt("block w-6 h-6 mr-2 text-indigo-400"), "Creator Points"]
                    })
                }), t.jsx("p", {
                    className: "font-semibold text-gray-300",
                    children: "Join the ranks of top contributors by accumulating points for your published posts and popular content."
                }), t.jsxs("div", {
                    className: "space-y-1",
                    children: [t.jsx("p", {
                        className: "font-semibold text-gray-300",
                        children: "You'll get:"
                    }), t.jsx(Xe, {
                        points: 100,
                        description: "When your post gets published"
                    }), t.jsx(Xe, {
                        points: 20,
                        description: "When your variation gets published"
                    }), t.jsx(Xe, {
                        points: 10,
                        description: "For every person that adds your post to their favorites"
                    })]
                })]
            })
        })
    },
    os = () => t.jsxs("div", {
        className: "relative flex flex-col items-center justify-end px-3 overflow-hidden rounded-lg bg-dark-700 w-[250px] flex-shrink-0 flex-auto pb-6",
        children: [t.jsx("img", {
            src: rr,
            alt: "",
            className: "w-24 relative z-[1] mb-2 scale-110"
        }), t.jsxs("div", {
            className: "text-xl text-center font-bold relative z-[1] mb-1",
            children: ["We're on", t.jsx("br", {}), "Social Media!"]
        }), t.jsx("div", {
            className: "mb-4 text-sm font-normal text-center relative z-[1]",
            children: "Follow us to find out about new challenges, updates and posts."
        }), t.jsxs("div", {
            className: "flex gap-3 items-center justify-center",
            children: [t.jsx(Ie, {
                href: "https://discord.gg/KD8ba2uUpT",
                target: "_blank",
                type: "secondary-with-bg",
                className: " relative z-[1] group",
                children: dt("w-5 h-5 ")
            }), t.jsx(Ie, {
                href: "https://twitter.com/uiverse_io",
                target: "_blank",
                type: "secondary-with-bg",
                className: " relative z-[1] group",
                children: Yt("w-5 h-5 ")
            }), t.jsx(Ie, {
                href: "https://www.instagram.com/uiverse.io/",
                target: "_blank",
                type: "secondary-with-bg",
                className: " relative z-[1] group",
                children: Wn("w-5 h-5 scale-[110%] ")
            })]
        }), t.jsx("div", {
            className: "absolute w-[300px] h-[700px] -right-[230px] z-0 -top-[300px] blur-[60px] opacity-60 rounded-full bg-sky-500"
        }), t.jsx("div", {
            className: "absolute -left-[400px] -bottom-[70px] w-[700px] z-0 h-[300px] blur-[60px] opacity-60 rotate-12 rounded-full bg-fuchsia-500"
        })]
    }),
    ss = ({
        activeTab: e,
        isDetailPage: r,
        challengeStatus: n,
        url: o,
        isVisibleOnMobile: s,
        user: i,
        postsByType: d,
        proFeatures: l
    }) => {
        const [m, c] = a.useState(!1), u = Object.values(l || {}).filter(Boolean).length, h = Object.values(l || {}).length;
        return a.useEffect(() => {
            c(!1)
        }, [o]), t.jsxs("div", {
            className: `flex flex-col items-center gap-2 xl:gap-3 lg:flex-row lg:flex ${s?"flex":"hidden"}`,
            children: [t.jsxs("div", {
                className: "relative overflow-visible",
                onMouseOver: () => c(!0),
                onMouseLeave: () => c(!1),
                children: [t.jsxs(R, {
                    to: "/elements",
                    className: `hover:bg-dark-600 lg:items-center hidden lg:flex transition-colors py-2 px-2.5 pr-2 text-sm xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 xl:pr-2 2xl:pr-4 rounded-lg browse-link ${e||r||m?"bg-dark-600":null}`,
                    children: ["Elements ", ut("w-4 h-4 ml-1")]
                }), m && t.jsx("div", {
                    className: "absolute left-0 flex gap-2 origin-top-left",
                    children: t.jsxs("div", {
                        className: "flex gap-2 p-4 mt-2 rounded-xl shadow-lg bg-dark-700 border-2 border-dark-600/80 w-[780px] flex-1",
                        children: [t.jsx("div", {
                            className: "grid w-full grid-cols-2 gap-2",
                            children: Object.values(Ue).map(p => {
                                var g;
                                return t.jsx(R, {
                                    to: `/${p.path}`,
                                    className: `bg-dark-600 block hover:bg-dark-400 p-4 font-medium text-sm tracking-wide rounded-md ${(e==null?void 0:e.id)===p.id&&"bg-dark-600"}`,
                                    children: t.jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [t.jsxs("span", {
                                            className: "flex items-center gap-2",
                                            children: [t.jsx(p.icon, {
                                                className: "w-5 h-5"
                                            }), p.label, " ", p.new && t.jsx("span", {
                                                className: "bg-red-500 ml-2 text-offwhite p-0.5 px-1.5 text-xs rounded",
                                                children: "New"
                                            })]
                                        }), t.jsx("div", {
                                            className: "text-gray-400 text-xs",
                                            children: p.id === "favorites" ? ft("w-4 h-4") : ((g = d.find(x => x.type === p.id)) == null ? void 0 : g._count) || null
                                        })]
                                    })
                                }, p.id)
                            })
                        }), t.jsx(os, {})]
                    })
                })]
            }), t.jsxs(z, {
                to: "/challenges",
                className: ({
                    isActive: p
                }) => `hover:bg-dark-600 group transition-colors py-2 px-2.5 xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 rounded-lg ${s?"text-lg":"text-sm"} link--challenges whitespace-nowrap ${p?"bg-dark-600":""}`,
                children: ["Challenges", n && (n === "open" ? t.jsxs("span", {
                    className: "relative inline-flex w-[6px] h-[6px] ml-2 -translate-y-[2px]",
                    children: [t.jsx("span", {
                        className: "absolute inline-flex w-full h-full bg-green-300 rounded-full group-hover:animate-ping opacity-30"
                    }), t.jsx("span", {
                        className: "relative inline-flex rounded-full w-[6px] h-[6px] bg-green-400"
                    })]
                }) : t.jsxs("span", {
                    className: "relative inline-flex w-[6px] h-[6px] ml-2 -translate-y-[2px]",
                    children: [t.jsx("span", {
                        className: "absolute inline-flex w-full h-full bg-yellow-300 rounded-full group-hover:animate-ping opacity-30"
                    }), t.jsx("span", {
                        className: "relative inline-flex rounded-full w-[6px] h-[6px] bg-yellow-400"
                    })]
                }))]
            }), t.jsx(z, {
                to: "/spotlight",
                className: ({
                    isActive: p
                }) => `hover:bg-dark-600 transition-colors ${s?"text-lg":"text-sm"} py-2 px-2.5 xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 rounded-lg ${p?"bg-dark-600":""}`,
                children: "Spotlight"
            }), ((i == null ? void 0 : i.role) === "admin" || (i == null ? void 0 : i.role) === "editor") && t.jsx(z, {
                to: "/jobs",
                className: ({
                    isActive: p
                }) => `hover:bg-dark-600 transition-colors ${s?"text-lg":"text-sm"} py-2 px-2.5 xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 rounded-lg ${p?"bg-dark-600":""}`,
                children: "Jobs"
            }), t.jsx(z, {
                to: "/blog",
                className: ({
                    isActive: p
                }) => `hover:bg-dark-600 transition-colors ${s?"text-lg":"text-sm"} py-2 px-2.5 xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 rounded-lg ${p?"bg-dark-600":""}`,
                children: "Blog"
            }), i != null && i.subscription ? t.jsxs(z, {
                to: "/subscription",
                className: ({
                    isActive: p
                }) => `hover:bg-dark-600 whitespace-nowrap transition-colors flex items-center ${s?"text-lg":"text-sm"} gap-1.5 py-2 px-2.5 xl:text-sm font-medium tracking-wide xl:py-2 xl:px-2 2xl:px-4 rounded-lg ${p?"bg-dark-600":""}`,
                children: ["My Pro", " ", h !== u && t.jsxs("div", {
                    className: "ml-1 text-sm font-medium text-green-400",
                    children: [u, " / ", h]
                })]
            }) : t.jsx(t.Fragment, {})]
        })
    },
    as = [{
        path: e => `/profile/${e}`,
        text: "Your Profile",
        icon: Vt("w-5 h-5"),
        showForAll: !0,
        content: e => t.jsxs(t.Fragment, {
            children: [t.jsx(nr, {
                subscription: e.subscription
            }), e.role === P.user_role.moderator && t.jsx(or, {}), e.role === P.user_role.tester && t.jsx(sr, {})]
        })
    }, {
        path: "/curator",
        text: "Curator",
        icon: Te("w-5 h-5"),
        allowedRoles: [P.user_role.moderator, P.user_role.admin, P.user_role.curator]
    }, {
        path: "/review",
        text: "Review",
        icon: Te("w-5 h-5"),
        allowedRoles: [P.user_role.moderator, P.user_role.admin]
    }, {
        path: "/tags/add",
        text: "Tags",
        icon: Jt("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["moderator", "admin"]
    }, {
        path: "/admin/comments",
        text: "Comments",
        icon: Oe("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["moderator", "admin"]
    }, {
        path: "/admin",
        text: "Admin",
        icon: Pe("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["admin"]
    }, {
        path: "/ai/overview",
        text: "Overview",
        icon: Zt("text-fuchsia-400 w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["admin"]
    }, {
        path: "/notifications-admin",
        text: "Notifications",
        icon: ke("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["admin"]
    }, {
        path: "/stats",
        text: "Stats",
        icon: Xn("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        allowedRoles: ["admin"]
    }, {
        path: "https://docs.google.com/forms/d/e/1FAIpQLSfbaOoGw82eXhX1la80_NM-P9Pv0lzxE1nUF85lp89s7G7vOw/viewform?usp=sf_link",
        text: "Send feedback",
        icon: Oe("w-5 h-5"),
        className: "text-gray-300 item hover:text-gray-100 hover:bg-dark-700",
        showForAll: !0,
        external: !0
    }, {
        path: "https://discord.gg/KD8ba2uUpT",
        text: "Join Discord",
        icon: dt("w-5 h-5"),
        className: "item item--discord",
        showForAll: !0,
        external: !0
    }];

function is() {
    const [e, r] = a.useState(!1), {
        pathname: n
    } = Fe(), {
        user: o,
        notifications: s
    } = mt(), [i, d] = a.useState(0), l = qt();
    a.useEffect(() => {
        s && d(s.filter(c => !c.read).length)
    }, [s]);
    const m = () => {
        i > 0 && setTimeout(() => {
            l.submit({
                action: "read"
            }, {
                method: "post"
            })
        }, 1e3)
    };
    return a.useEffect(() => {
        r(!1)
    }, [n]), t.jsxs("div", {
        className: "lg:hidden",
        children: [t.jsx("button", {
            className: "relative inline-flex items-center cursor-pointer justify-center text-gray-300 w-[40px] h-[40px]",
            onClick: () => r(c => !c),
            children: e ? Hn("h-5 w-5 block") : Yn("h-5 w-5 block")
        }), t.jsx(wo, {
            as: "div",
            className: "relative z-[400]",
            onClose: () => r(!1),
            open: e,
            children: t.jsx("div", {
                className: "fixed inset-0 top-[64px] w-screen overflow-y-auto",
                children: t.jsxs("div", {
                    className: "min-h-full p-4 bg-dark-700",
                    children: [t.jsxs("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 font-semibold",
                        children: [t.jsx(ce, {
                            defaultOpen: !o,
                            children: ({
                                open: c
                            }) => t.jsxs(t.Fragment, {
                                children: [t.jsxs(ce.Button, {
                                    className: Y(c && "bg-dark-600", "rounded-md py-2 px-3 text-base font-semibold w-full flex items-center justify-between text-gray-100"),
                                    children: [t.jsx("span", {
                                        children: "Categories"
                                    }), ut("h-5 w-5 text-gray-400")]
                                }), t.jsx(ce.Panel, {
                                    className: "py-4 pt-2 pl-6 text-gray-300",
                                    children: Object.values(Ue).map(u => t.jsx(z, {
                                        to: `/${u.path}`,
                                        className: ({
                                            isActive: h,
                                            isPending: p
                                        }) => Y(h ? "text-gray-100 bg-dark-600" : "text-gray-400", "flex items-center py-2 px-3 rounded-lg"),
                                        children: u.title || u.label
                                    }, u.id))
                                })]
                            })
                        }), t.jsx(z, {
                            to: "/challenges",
                            className: ({
                                isActive: c,
                                isPending: u
                            }) => Y(c ? "text-gray-100 bg-dark-600" : "text-gray-400", "flex items-center py-2 px-3 rounded-lg"),
                            children: "Challenges"
                        }), t.jsx(z, {
                            to: "/spotlight",
                            className: ({
                                isActive: c,
                                isPending: u
                            }) => Y(c ? "text-gray-100 bg-dark-600" : "text-gray-400", "flex items-center py-2 px-3 rounded-lg"),
                            children: "Spotlight"
                        }), t.jsx(z, {
                            to: "/blog",
                            className: ({
                                isActive: c,
                                isPending: u
                            }) => Y(c ? "text-gray-100 bg-dark-600" : "text-gray-400", "flex items-center py-2 px-3 rounded-lg"),
                            children: "Blog"
                        })]
                    }), t.jsxs("div", {
                        className: "relative pt-4 pb-3 border-t border-dark-500",
                        children: [o && t.jsx(ce, {
                            children: ({
                                open: c
                            }) => t.jsxs(t.Fragment, {
                                children: [t.jsxs("div", {
                                    className: "flex items-center px-4",
                                    children: [t.jsx("div", {
                                        className: "flex-shrink-0",
                                        children: t.jsx(ar, {
                                            user: o,
                                            size: "md",
                                            className: "w-[46px] h-[46px]"
                                        })
                                    }), t.jsx("div", {
                                        className: "flex items-center flex-1 gap-2 ml-3 font-semibold text-gray-50",
                                        children: o.username
                                    }), t.jsx(ce.Button, {
                                        className: `button button--notifications hover:bg-dark-600 rounded-lg button--secondary px-3 border-transparent relative ${c&&"bg-dark-600"} ${i>0&&"new"}`,
                                        "data-count": i > 9 ? "9+" : i,
                                        onClick: m,
                                        children: ke("w-5 h-5 mr-0")
                                    })]
                                }), t.jsx(ce.Panel, {
                                    className: "py-3",
                                    children: t.jsx("div", {
                                        className: "overflow-y-auto text-gray-100 custom-scrollbar max-h-96 rounded-xl",
                                        children: t.jsx("ul", {
                                            className: "flex flex-col gap-1",
                                            children: (s == null ? void 0 : s.length) > 0 ? s.map(u => t.jsx(Ht, { ...u
                                            }, u.id)) : t.jsx("li", {
                                                className: "flex items-center justify-center px-3 py-6 text-gray-400",
                                                children: t.jsx("p", {
                                                    children: "You have no new notifications"
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }), o ? t.jsxs(t.Fragment, {
                            children: [t.jsx("ul", {
                                className: "px-2 py-3 mt-3 space-y-1 list-none border-b border-dark-500",
                                children: as.map((c, u) => {
                                    var h;
                                    return !c.showForAll && !((h = c.allowedRoles) != null && h.includes(o.role)) ? null : t.jsx("li", {
                                        className: "font-semibold",
                                        children: typeof c.path == "string" && c.path.includes("http") ? t.jsxs("a", {
                                            href: c.path,
                                            className: "flex items-center gap-2 px-3 py-2 text-gray-400 rounded-lg",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [c.icon, t.jsx("span", {
                                                children: c.text
                                            })]
                                        }) : t.jsxs(z, {
                                            to: typeof c.path == "string" ? c.path : c.path(o.username),
                                            className: ({
                                                isActive: p
                                            }) => Y(p ? "text-gray-100 bg-dark-600" : "text-gray-400", "flex items-center gap-2 py-2 px-3 rounded-lg"),
                                            children: [c.icon, t.jsx("span", {
                                                children: c.text
                                            }), c.content && c.content(o)]
                                        })
                                    }, u)
                                })
                            }), t.jsx(co, {
                                action: "/logout",
                                method: "post",
                                className: "px-2 pt-3",
                                children: t.jsxs("button", {
                                    className: "flex items-center gap-2 px-3 py-2 font-semibold text-gray-400 rounded-lg",
                                    type: "submit",
                                    children: [Xt("w-5 h-5"), t.jsx("span", {
                                        children: "Log out"
                                    })]
                                })
                            })]
                        }) : t.jsx(Ie, {
                            href: "?create-account",
                            type: "secondary-with-bg",
                            className: "h-[42px]",
                            children: "Join the Community"
                        })]
                    })]
                })
            })
        })]
    })
}

function ye(e, r = []) {
    let n = [];

    function o(i, d) {
        const l = a.createContext(d),
            m = n.length;
        n = [...n, d];
        const c = h => {
            var b;
            const {
                scope: p,
                children: g,
                ...x
            } = h, f = ((b = p == null ? void 0 : p[e]) == null ? void 0 : b[m]) || l, v = a.useMemo(() => x, Object.values(x));
            return t.jsx(f.Provider, {
                value: v,
                children: g
            })
        };
        c.displayName = i + "Provider";

        function u(h, p) {
            var f;
            const g = ((f = p == null ? void 0 : p[e]) == null ? void 0 : f[m]) || l,
                x = a.useContext(g);
            if (x) return x;
            if (d !== void 0) return d;
            throw new Error(`\`${h}\` must be used within \`${i}\``)
        }
        return [c, u]
    }
    const s = () => {
        const i = n.map(d => a.createContext(d));
        return function(l) {
            const m = (l == null ? void 0 : l[e]) || i;
            return a.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: m
                }
            }), [l, m])
        }
    };
    return s.scopeName = e, [o, cs(s, ...r)]
}

function cs(...e) {
    const r = e[0];
    if (e.length === 1) return r;
    const n = () => {
        const o = e.map(s => ({
            useScope: s(),
            scopeName: s.scopeName
        }));
        return function(i) {
            const d = o.reduce((l, {
                useScope: m,
                scopeName: c
            }) => {
                const h = m(i)[`__scope${c}`];
                return { ...l,
                    ...h
                }
            }, {});
            return a.useMemo(() => ({
                [`__scope${r.scopeName}`]: d
            }), [d])
        }
    };
    return n.scopeName = r.scopeName, n
}

function kt(e, r) {
    if (typeof e == "function") return e(r);
    e != null && (e.current = r)
}

function ur(...e) {
    return r => {
        let n = !1;
        const o = e.map(s => {
            const i = kt(s, r);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let s = 0; s < o.length; s++) {
                const i = o[s];
                typeof i == "function" ? i() : kt(e[s], null)
            }
        }
    }
}

function T(...e) {
    return a.useCallback(ur(...e), e)
}

function ht(e) {
    const r = e + "CollectionProvider",
        [n, o] = ye(r),
        [s, i] = n(r, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        d = g => {
            const {
                scope: x,
                children: f
            } = g, v = te.useRef(null), b = te.useRef(new Map).current;
            return t.jsx(s, {
                scope: x,
                itemMap: b,
                collectionRef: v,
                children: f
            })
        };
    d.displayName = r;
    const l = e + "CollectionSlot",
        m = te.forwardRef((g, x) => {
            const {
                scope: f,
                children: v
            } = g, b = i(l, f), w = T(x, b.collectionRef);
            return t.jsx(Le, {
                ref: w,
                children: v
            })
        });
    m.displayName = l;
    const c = e + "CollectionItemSlot",
        u = "data-radix-collection-item",
        h = te.forwardRef((g, x) => {
            const {
                scope: f,
                children: v,
                ...b
            } = g, w = te.useRef(null), y = T(x, w), N = i(c, f);
            return te.useEffect(() => (N.itemMap.set(w, {
                ref: w,
                ...b
            }), () => void N.itemMap.delete(w))), t.jsx(Le, {
                [u]: "",
                ref: y,
                children: v
            })
        });
    h.displayName = c;

    function p(g) {
        const x = i(e + "CollectionConsumer", g);
        return te.useCallback(() => {
            const v = x.collectionRef.current;
            if (!v) return [];
            const b = Array.from(v.querySelectorAll(`[${u}]`));
            return Array.from(x.itemMap.values()).sort((N, M) => b.indexOf(N.ref.current) - b.indexOf(M.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: d,
        Slot: m,
        ItemSlot: h
    }, p, o]
}

function C(e, r, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(s) {
        if (e == null || e(s), n === !1 || !s.defaultPrevented) return r == null ? void 0 : r(s)
    }
}
var ls = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    A = ls.reduce((e, r) => {
        const n = a.forwardRef((o, s) => {
            const {
                asChild: i,
                ...d
            } = o, l = i ? Le : r;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), t.jsx(l, { ...d,
                ref: s
            })
        });
        return n.displayName = `Primitive.${r}`, { ...e,
            [r]: n
        }
    }, {});

function fr(e, r) {
    e && lo.flushSync(() => e.dispatchEvent(r))
}
var ds = "DismissableLayer",
    rt = "dismissableLayer.update",
    us = "dismissableLayer.pointerDownOutside",
    fs = "dismissableLayer.focusOutside",
    Tt, mr = a.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    pr = a.forwardRef((e, r) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: i,
            onInteractOutside: d,
            onDismiss: l,
            ...m
        } = e, c = a.useContext(mr), [u, h] = a.useState(null), p = (u == null ? void 0 : u.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, g] = a.useState({}), x = T(r, E => h(E)), f = Array.from(c.layers), [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = f.indexOf(v), w = u ? f.indexOf(u) : -1, y = c.layersWithOutsidePointerEventsDisabled.size > 0, N = w >= b, M = hs(E => {
            const S = E.target,
                F = [...c.branches].some(D => D.contains(S));
            !N || F || (s == null || s(E), d == null || d(E), E.defaultPrevented || l == null || l())
        }, p), _ = xs(E => {
            const S = E.target;
            [...c.branches].some(D => D.contains(S)) || (i == null || i(E), d == null || d(E), E.defaultPrevented || l == null || l())
        }, p);
        return yo(E => {
            w === c.layers.size - 1 && (o == null || o(E), !E.defaultPrevented && l && (E.preventDefault(), l()))
        }, p), a.useEffect(() => {
            if (u) return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Tt = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Ot(), () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Tt)
            }
        }, [u, p, n, c]), a.useEffect(() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Ot())
        }, [u, c]), a.useEffect(() => {
            const E = () => g({});
            return document.addEventListener(rt, E), () => document.removeEventListener(rt, E)
        }, []), t.jsx(A.div, { ...m,
            ref: x,
            style: {
                pointerEvents: y ? N ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: C(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: C(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: C(e.onPointerDownCapture, M.onPointerDownCapture)
        })
    });
pr.displayName = ds;
var ms = "DismissableLayerBranch",
    ps = a.forwardRef((e, r) => {
        const n = a.useContext(mr),
            o = a.useRef(null),
            s = T(r, o);
        return a.useEffect(() => {
            const i = o.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), t.jsx(A.div, { ...e,
            ref: s
        })
    });
ps.displayName = ms;

function hs(e, r = globalThis == null ? void 0 : globalThis.document) {
    const n = q(e),
        o = a.useRef(!1),
        s = a.useRef(() => {});
    return a.useEffect(() => {
        const i = l => {
                if (l.target && !o.current) {
                    let m = function() {
                        hr(us, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (r.removeEventListener("click", s.current), s.current = m, r.addEventListener("click", s.current, {
                        once: !0
                    })) : m()
                } else r.removeEventListener("click", s.current);
                o.current = !1
            },
            d = window.setTimeout(() => {
                r.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(d), r.removeEventListener("pointerdown", i), r.removeEventListener("click", s.current)
        }
    }, [r, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function xs(e, r = globalThis == null ? void 0 : globalThis.document) {
    const n = q(e),
        o = a.useRef(!1);
    return a.useEffect(() => {
        const s = i => {
            i.target && !o.current && hr(fs, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return r.addEventListener("focusin", s), () => r.removeEventListener("focusin", s)
    }, [r, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Ot() {
    const e = new CustomEvent(rt);
    document.dispatchEvent(e)
}

function hr(e, r, n, {
    discrete: o
}) {
    const s = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    r && s.addEventListener(e, r, {
        once: !0
    }), o ? fr(s, i) : s.dispatchEvent(i)
}
var Ve = 0;

function gs() {
    a.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? Ft()), document.body.insertAdjacentElement("beforeend", e[1] ? ? Ft()), Ve++, () => {
            Ve === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), Ve--
        }
    }, [])
}

function Ft() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Je = "focusScope.autoFocusOnMount",
    Ze = "focusScope.autoFocusOnUnmount",
    Lt = {
        bubbles: !1,
        cancelable: !0
    },
    vs = "FocusScope",
    xr = a.forwardRef((e, r) => {
        const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            ...d
        } = e, [l, m] = a.useState(null), c = q(s), u = q(i), h = a.useRef(null), p = T(r, f => m(f)), g = a.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        a.useEffect(() => {
            if (o) {
                let f = function(y) {
                        if (g.paused || !l) return;
                        const N = y.target;
                        l.contains(N) ? h.current = N : Z(h.current, {
                            select: !0
                        })
                    },
                    v = function(y) {
                        if (g.paused || !l) return;
                        const N = y.relatedTarget;
                        N !== null && (l.contains(N) || Z(h.current, {
                            select: !0
                        }))
                    },
                    b = function(y) {
                        if (document.activeElement === document.body)
                            for (const M of y) M.removedNodes.length > 0 && Z(l)
                    };
                document.addEventListener("focusin", f), document.addEventListener("focusout", v);
                const w = new MutationObserver(b);
                return l && w.observe(l, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), w.disconnect()
                }
            }
        }, [o, l, g.paused]), a.useEffect(() => {
            if (l) {
                Bt.add(g);
                const f = document.activeElement;
                if (!l.contains(f)) {
                    const b = new CustomEvent(Je, Lt);
                    l.addEventListener(Je, c), l.dispatchEvent(b), b.defaultPrevented || (bs(Cs(gr(l)), {
                        select: !0
                    }), document.activeElement === f && Z(l))
                }
                return () => {
                    l.removeEventListener(Je, c), setTimeout(() => {
                        const b = new CustomEvent(Ze, Lt);
                        l.addEventListener(Ze, u), l.dispatchEvent(b), b.defaultPrevented || Z(f ? ? document.body, {
                            select: !0
                        }), l.removeEventListener(Ze, u), Bt.remove(g)
                    }, 0)
                }
            }
        }, [l, c, u, g]);
        const x = a.useCallback(f => {
            if (!n && !o || g.paused) return;
            const v = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
                b = document.activeElement;
            if (v && b) {
                const w = f.currentTarget,
                    [y, N] = ws(w);
                y && N ? !f.shiftKey && b === N ? (f.preventDefault(), n && Z(y, {
                    select: !0
                })) : f.shiftKey && b === y && (f.preventDefault(), n && Z(N, {
                    select: !0
                })) : b === w && f.preventDefault()
            }
        }, [n, o, g.paused]);
        return t.jsx(A.div, {
            tabIndex: -1,
            ...d,
            ref: p,
            onKeyDown: x
        })
    });
xr.displayName = vs;

function bs(e, {
    select: r = !1
} = {}) {
    const n = document.activeElement;
    for (const o of e)
        if (Z(o, {
                select: r
            }), document.activeElement !== n) return
}

function ws(e) {
    const r = gr(e),
        n = Dt(r, e),
        o = Dt(r.reverse(), e);
    return [n, o]
}

function gr(e) {
    const r = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const s = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) r.push(n.currentNode);
    return r
}

function Dt(e, r) {
    for (const n of e)
        if (!ys(n, {
                upTo: r
            })) return n
}

function ys(e, {
    upTo: r
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (r !== void 0 && e === r) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function Ns(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Z(e, {
    select: r = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && Ns(e) && r && e.select()
    }
}
var Bt = js();

function js() {
    let e = [];
    return {
        add(r) {
            const n = e[0];
            r !== n && (n == null || n.pause()), e = Ut(e, r), e.unshift(r)
        },
        remove(r) {
            var n;
            e = Ut(e, r), (n = e[0]) == null || n.resume()
        }
    }
}

function Ut(e, r) {
    const n = [...e],
        o = n.indexOf(r);
    return o !== -1 && n.splice(o, 1), n
}

function Cs(e) {
    return e.filter(r => r.tagName !== "A")
}
var Ms = "Arrow",
    vr = a.forwardRef((e, r) => {
        const {
            children: n,
            width: o = 10,
            height: s = 5,
            ...i
        } = e;
        return t.jsx(A.svg, { ...i,
            ref: r,
            width: o,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : t.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
vr.displayName = Ms;
var Es = vr,
    xt = "Popper",
    [br, wr] = ye(xt),
    [Ss, yr] = br(xt),
    Nr = e => {
        const {
            __scopePopper: r,
            children: n
        } = e, [o, s] = a.useState(null);
        return t.jsx(Ss, {
            scope: r,
            anchor: o,
            onAnchorChange: s,
            children: n
        })
    };
Nr.displayName = xt;
var jr = "PopperAnchor",
    Cr = a.forwardRef((e, r) => {
        const {
            __scopePopper: n,
            virtualRef: o,
            ...s
        } = e, i = yr(jr, n), d = a.useRef(null), l = T(r, d);
        return a.useEffect(() => {
            i.onAnchorChange((o == null ? void 0 : o.current) || d.current)
        }), o ? null : t.jsx(A.div, { ...s,
            ref: l
        })
    });
Cr.displayName = jr;
var gt = "PopperContent",
    [Rs, _s] = br(gt),
    Mr = a.forwardRef((e, r) => {
        var V, pe, $, he, Rt, _t;
        const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: s = 0,
            align: i = "center",
            alignOffset: d = 0,
            arrowPadding: l = 0,
            avoidCollisions: m = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: h = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: g = "optimized",
            onPlaced: x,
            ...f
        } = e, v = yr(gt, n), [b, w] = a.useState(null), y = T(r, xe => w(xe)), [N, M] = a.useState(null), _ = Po(N), E = (_ == null ? void 0 : _.width) ? ? 0, S = (_ == null ? void 0 : _.height) ? ? 0, F = o + (i !== "center" ? "-" + i : ""), D = typeof u == "number" ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
        }, J = Array.isArray(c) ? c : [c], Q = J.length > 0, X = {
            padding: D,
            boundary: J.filter(Is),
            altBoundary: Q
        }, {
            refs: se,
            floatingStyles: ae,
            placement: G,
            isPositioned: ie,
            middlewareData: B
        } = No({
            strategy: "fixed",
            placement: F,
            whileElementsMounted: (...xe) => Io(...xe, {
                animationFrame: g === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [jo({
                mainAxis: s + S,
                alignmentAxis: d
            }), m && Co({
                mainAxis: !0,
                crossAxis: !1,
                limiter: h === "partial" ? Mo() : void 0,
                ...X
            }), m && Eo({ ...X
            }), So({ ...X,
                apply: ({
                    elements: xe,
                    rects: Pt,
                    availableWidth: Un,
                    availableHeight: $n
                }) => {
                    const {
                        width: Kn,
                        height: Gn
                    } = Pt.reference, Ee = xe.floating.style;
                    Ee.setProperty("--radix-popper-available-width", `${Un}px`), Ee.setProperty("--radix-popper-available-height", `${$n}px`), Ee.setProperty("--radix-popper-anchor-width", `${Kn}px`), Ee.setProperty("--radix-popper-anchor-height", `${Gn}px`)
                }
            }), N && Ro({
                element: N,
                padding: l
            }), As({
                arrowWidth: E,
                arrowHeight: S
            }), p && _o({
                strategy: "referenceHidden",
                ...X
            })]
        }), [j, L] = Rr(G), k = q(x);
        ve(() => {
            ie && (k == null || k())
        }, [ie, k]);
        const W = (V = B.arrow) == null ? void 0 : V.x,
            fe = (pe = B.arrow) == null ? void 0 : pe.y,
            me = (($ = B.arrow) == null ? void 0 : $.centerOffset) !== 0,
            [Me, ee] = a.useState();
        return ve(() => {
            b && ee(window.getComputedStyle(b).zIndex)
        }, [b]), t.jsx("div", {
            ref: se.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...ae,
                transform: ie ? ae.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Me,
                "--radix-popper-transform-origin": [(he = B.transformOrigin) == null ? void 0 : he.x, (Rt = B.transformOrigin) == null ? void 0 : Rt.y].join(" "),
                ...((_t = B.hide) == null ? void 0 : _t.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: t.jsx(Rs, {
                scope: n,
                placedSide: j,
                onArrowChange: M,
                arrowX: W,
                arrowY: fe,
                shouldHideArrow: me,
                children: t.jsx(A.div, {
                    "data-side": j,
                    "data-align": L,
                    ...f,
                    ref: y,
                    style: { ...f.style,
                        animation: ie ? void 0 : "none"
                    }
                })
            })
        })
    });
Mr.displayName = gt;
var Er = "PopperArrow",
    Ps = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Sr = a.forwardRef(function(r, n) {
        const {
            __scopePopper: o,
            ...s
        } = r, i = _s(Er, o), d = Ps[i.placedSide];
        return t.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [d]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: t.jsx(Es, { ...s,
                ref: n,
                style: { ...s.style,
                    display: "block"
                }
            })
        })
    });
Sr.displayName = Er;

function Is(e) {
    return e !== null
}
var As = e => ({
    name: "transformOrigin",
    options: e,
    fn(r) {
        var v, b, w;
        const {
            placement: n,
            rects: o,
            middlewareData: s
        } = r, d = ((v = s.arrow) == null ? void 0 : v.centerOffset) !== 0, l = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [c, u] = Rr(n), h = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u], p = (((b = s.arrow) == null ? void 0 : b.x) ? ? 0) + l / 2, g = (((w = s.arrow) == null ? void 0 : w.y) ? ? 0) + m / 2;
        let x = "",
            f = "";
        return c === "bottom" ? (x = d ? h : `${p}px`, f = `${-m}px`) : c === "top" ? (x = d ? h : `${p}px`, f = `${o.floating.height+m}px`) : c === "right" ? (x = `${-m}px`, f = d ? h : `${g}px`) : c === "left" && (x = `${o.floating.width+m}px`, f = d ? h : `${g}px`), {
            data: {
                x,
                y: f
            }
        }
    }
});

function Rr(e) {
    const [r, n = "center"] = e.split("-");
    return [r, n]
}
var ks = Nr,
    Ts = Cr,
    Os = Mr,
    Fs = Sr,
    Ls = "Portal",
    _r = a.forwardRef((e, r) => {
        var l;
        const {
            container: n,
            ...o
        } = e, [s, i] = a.useState(!1);
        ve(() => i(!0), []);
        const d = n || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return d ? uo.createPortal(t.jsx(A.div, { ...o,
            ref: r
        }), d) : null
    });
_r.displayName = Ls;

function Ds(e, r) {
    return a.useReducer((n, o) => r[n][o] ? ? n, e)
}
var Ne = e => {
    const {
        present: r,
        children: n
    } = e, o = Bs(r), s = typeof n == "function" ? n({
        present: o.isPresent
    }) : a.Children.only(n), i = T(o.ref, Us(s));
    return typeof n == "function" || o.isPresent ? a.cloneElement(s, {
        ref: i
    }) : null
};
Ne.displayName = "Presence";

function Bs(e) {
    const [r, n] = a.useState(), o = a.useRef({}), s = a.useRef(e), i = a.useRef("none"), d = e ? "mounted" : "unmounted", [l, m] = Ds(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return a.useEffect(() => {
        const c = Se(o.current);
        i.current = l === "mounted" ? c : "none"
    }, [l]), ve(() => {
        const c = o.current,
            u = s.current;
        if (u !== e) {
            const p = i.current,
                g = Se(c);
            e ? m("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? m("UNMOUNT") : m(u && p !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
        }
    }, [e, m]), ve(() => {
        if (r) {
            let c;
            const u = r.ownerDocument.defaultView ? ? window,
                h = g => {
                    const f = Se(o.current).includes(g.animationName);
                    if (g.target === r && f && (m("ANIMATION_END"), !s.current)) {
                        const v = r.style.animationFillMode;
                        r.style.animationFillMode = "forwards", c = u.setTimeout(() => {
                            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = v)
                        })
                    }
                },
                p = g => {
                    g.target === r && (i.current = Se(o.current))
                };
            return r.addEventListener("animationstart", p), r.addEventListener("animationcancel", h), r.addEventListener("animationend", h), () => {
                u.clearTimeout(c), r.removeEventListener("animationstart", p), r.removeEventListener("animationcancel", h), r.removeEventListener("animationend", h)
            }
        } else m("ANIMATION_END")
    }, [r, m]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: a.useCallback(c => {
            c && (o.current = getComputedStyle(c)), n(c)
        }, [])
    }
}

function Se(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Us(e) {
    var o, s;
    let r = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
        n = r && "isReactWarning" in r && r.isReactWarning;
    return n ? e.ref : (r = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = r && "isReactWarning" in r && r.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var qe = "rovingFocusGroup.onEntryFocus",
    $s = {
        bubbles: !1,
        cancelable: !0
    },
    $e = "RovingFocusGroup",
    [nt, Pr, Ks] = ht($e),
    [Gs, Ke] = ye($e, [Ks]),
    [zs, Ws] = Gs($e),
    Ir = a.forwardRef((e, r) => t.jsx(nt.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: t.jsx(nt.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: t.jsx(Hs, { ...e,
                ref: r
            })
        })
    }));
Ir.displayName = $e;
var Hs = a.forwardRef((e, r) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: o,
            loop: s = !1,
            dir: i,
            currentTabStopId: d,
            defaultCurrentTabStopId: l,
            onCurrentTabStopIdChange: m,
            onEntryFocus: c,
            preventScrollOnEntryFocus: u = !1,
            ...h
        } = e, p = a.useRef(null), g = T(r, p), x = pt(i), [f = null, v] = ir({
            prop: d,
            defaultProp: l,
            onChange: m
        }), [b, w] = a.useState(!1), y = q(c), N = Pr(n), M = a.useRef(!1), [_, E] = a.useState(0);
        return a.useEffect(() => {
            const S = p.current;
            if (S) return S.addEventListener(qe, y), () => S.removeEventListener(qe, y)
        }, [y]), t.jsx(zs, {
            scope: n,
            orientation: o,
            dir: x,
            loop: s,
            currentTabStopId: f,
            onItemFocus: a.useCallback(S => v(S), [v]),
            onItemShiftTab: a.useCallback(() => w(!0), []),
            onFocusableItemAdd: a.useCallback(() => E(S => S + 1), []),
            onFocusableItemRemove: a.useCallback(() => E(S => S - 1), []),
            children: t.jsx(A.div, {
                tabIndex: b || _ === 0 ? -1 : 0,
                "data-orientation": o,
                ...h,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: C(e.onMouseDown, () => {
                    M.current = !0
                }),
                onFocus: C(e.onFocus, S => {
                    const F = !M.current;
                    if (S.target === S.currentTarget && F && !b) {
                        const D = new CustomEvent(qe, $s);
                        if (S.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const J = N().filter(G => G.focusable),
                                Q = J.find(G => G.active),
                                X = J.find(G => G.id === f),
                                ae = [Q, X, ...J].filter(Boolean).map(G => G.ref.current);
                            Tr(ae, u)
                        }
                    }
                    M.current = !1
                }),
                onBlur: C(e.onBlur, () => w(!1))
            })
        })
    }),
    Ar = "RovingFocusGroupItem",
    kr = a.forwardRef((e, r) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: o = !0,
            active: s = !1,
            tabStopId: i,
            ...d
        } = e, l = Ae(), m = i || l, c = Ws(Ar, n), u = c.currentTabStopId === m, h = Pr(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: g
        } = c;
        return a.useEffect(() => {
            if (o) return p(), () => g()
        }, [o, p, g]), t.jsx(nt.ItemSlot, {
            scope: n,
            id: m,
            focusable: o,
            active: s,
            children: t.jsx(A.span, {
                tabIndex: u ? 0 : -1,
                "data-orientation": c.orientation,
                ...d,
                ref: r,
                onMouseDown: C(e.onMouseDown, x => {
                    o ? c.onItemFocus(m) : x.preventDefault()
                }),
                onFocus: C(e.onFocus, () => c.onItemFocus(m)),
                onKeyDown: C(e.onKeyDown, x => {
                    if (x.key === "Tab" && x.shiftKey) {
                        c.onItemShiftTab();
                        return
                    }
                    if (x.target !== x.currentTarget) return;
                    const f = Vs(x, c.orientation, c.dir);
                    if (f !== void 0) {
                        if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                        x.preventDefault();
                        let b = h().filter(w => w.focusable).map(w => w.ref.current);
                        if (f === "last") b.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && b.reverse();
                            const w = b.indexOf(x.currentTarget);
                            b = c.loop ? Js(b, w + 1) : b.slice(w + 1)
                        }
                        setTimeout(() => Tr(b))
                    }
                })
            })
        })
    });
kr.displayName = Ar;
var Ys = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function Xs(e, r) {
    return r !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function Vs(e, r, n) {
    const o = Xs(e.key, n);
    if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Ys[o]
}

function Tr(e, r = !1) {
    const n = document.activeElement;
    for (const o of e)
        if (o === n || (o.focus({
                preventScroll: r
            }), document.activeElement !== n)) return
}

function Js(e, r) {
    return e.map((n, o) => e[(r + o) % e.length])
}
var Or = Ir,
    Fr = kr,
    Lr = Ao(),
    Qe = function() {},
    Ge = a.forwardRef(function(e, r) {
        var n = a.useRef(null),
            o = a.useState({
                onScrollCapture: Qe,
                onWheelCapture: Qe,
                onTouchMoveCapture: Qe
            }),
            s = o[0],
            i = o[1],
            d = e.forwardProps,
            l = e.children,
            m = e.className,
            c = e.removeScrollBar,
            u = e.enabled,
            h = e.shards,
            p = e.sideCar,
            g = e.noIsolation,
            x = e.inert,
            f = e.allowPinchZoom,
            v = e.as,
            b = v === void 0 ? "div" : v,
            w = e.gapMode,
            y = ko(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            N = p,
            M = To([n, r]),
            _ = ue(ue({}, y), s);
        return a.createElement(a.Fragment, null, u && a.createElement(N, {
            sideCar: Lr,
            removeScrollBar: c,
            shards: h,
            noIsolation: g,
            inert: x,
            setCallbacks: i,
            allowPinchZoom: !!f,
            lockRef: n,
            gapMode: w
        }), d ? a.cloneElement(a.Children.only(l), ue(ue({}, _), {
            ref: M
        })) : a.createElement(b, ue({}, _, {
            className: m,
            ref: M
        }), l))
    });
Ge.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ge.classNames = {
    fullWidth: Oo,
    zeroRight: Fo
};
var ot = !1;
if (typeof window < "u") try {
    var Re = Object.defineProperty({}, "passive", {
        get: function() {
            return ot = !0, !0
        }
    });
    window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re)
} catch {
    ot = !1
}
var le = ot ? {
        passive: !1
    } : !1,
    Zs = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Dr = function(e, r) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[r] !== "hidden" && !(n.overflowY === n.overflowX && !Zs(e) && n[r] === "visible")
    },
    qs = function(e) {
        return Dr(e, "overflowY")
    },
    Qs = function(e) {
        return Dr(e, "overflowX")
    },
    $t = function(e, r) {
        var n = r.ownerDocument,
            o = r;
        do {
            typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
            var s = Br(e, o);
            if (s) {
                var i = Ur(e, o),
                    d = i[1],
                    l = i[2];
                if (d > l) return !0
            }
            o = o.parentNode
        } while (o && o !== n.body);
        return !1
    },
    ea = function(e) {
        var r = e.scrollTop,
            n = e.scrollHeight,
            o = e.clientHeight;
        return [r, n, o]
    },
    ta = function(e) {
        var r = e.scrollLeft,
            n = e.scrollWidth,
            o = e.clientWidth;
        return [r, n, o]
    },
    Br = function(e, r) {
        return e === "v" ? qs(r) : Qs(r)
    },
    Ur = function(e, r) {
        return e === "v" ? ea(r) : ta(r)
    },
    ra = function(e, r) {
        return e === "h" && r === "rtl" ? -1 : 1
    },
    na = function(e, r, n, o, s) {
        var i = ra(e, window.getComputedStyle(r).direction),
            d = i * o,
            l = n.target,
            m = r.contains(l),
            c = !1,
            u = d > 0,
            h = 0,
            p = 0;
        do {
            var g = Ur(e, l),
                x = g[0],
                f = g[1],
                v = g[2],
                b = f - v - i * x;
            (x || b) && Br(e, l) && (h += b, p += x), l instanceof ShadowRoot ? l = l.host : l = l.parentNode
        } while (!m && l !== document.body || m && (r.contains(l) || r === l));
        return (u && (Math.abs(h) < 1 || !s) || !u && (Math.abs(p) < 1 || !s)) && (c = !0), c
    },
    _e = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Kt = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Gt = function(e) {
        return e && "current" in e ? e.current : e
    },
    oa = function(e, r) {
        return e[0] === r[0] && e[1] === r[1]
    },
    sa = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    aa = 0,
    de = [];

function ia(e) {
    var r = a.useRef([]),
        n = a.useRef([0, 0]),
        o = a.useRef(),
        s = a.useState(aa++)[0],
        i = a.useState(Lo)[0],
        d = a.useRef(e);
    a.useEffect(function() {
        d.current = e
    }, [e]), a.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var f = Do([e.lockRef.current], (e.shards || []).map(Gt), !0).filter(Boolean);
            return f.forEach(function(v) {
                    return v.classList.add("allow-interactivity-".concat(s))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(s)), f.forEach(function(v) {
                        return v.classList.remove("allow-interactivity-".concat(s))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var l = a.useCallback(function(f, v) {
            if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey) return !d.current.allowPinchZoom;
            var b = _e(f),
                w = n.current,
                y = "deltaX" in f ? f.deltaX : w[0] - b[0],
                N = "deltaY" in f ? f.deltaY : w[1] - b[1],
                M, _ = f.target,
                E = Math.abs(y) > Math.abs(N) ? "h" : "v";
            if ("touches" in f && E === "h" && _.type === "range") return !1;
            var S = $t(E, _);
            if (!S) return !0;
            if (S ? M = E : (M = E === "v" ? "h" : "v", S = $t(E, _)), !S) return !1;
            if (!o.current && "changedTouches" in f && (y || N) && (o.current = M), !M) return !0;
            var F = o.current || M;
            return na(F, v, f, F === "h" ? y : N, !0)
        }, []),
        m = a.useCallback(function(f) {
            var v = f;
            if (!(!de.length || de[de.length - 1] !== i)) {
                var b = "deltaY" in v ? Kt(v) : _e(v),
                    w = r.current.filter(function(M) {
                        return M.name === v.type && (M.target === v.target || v.target === M.shadowParent) && oa(M.delta, b)
                    })[0];
                if (w && w.should) {
                    v.cancelable && v.preventDefault();
                    return
                }
                if (!w) {
                    var y = (d.current.shards || []).map(Gt).filter(Boolean).filter(function(M) {
                            return M.contains(v.target)
                        }),
                        N = y.length > 0 ? l(v, y[0]) : !d.current.noIsolation;
                    N && v.cancelable && v.preventDefault()
                }
            }
        }, []),
        c = a.useCallback(function(f, v, b, w) {
            var y = {
                name: f,
                delta: v,
                target: b,
                should: w,
                shadowParent: ca(b)
            };
            r.current.push(y), setTimeout(function() {
                r.current = r.current.filter(function(N) {
                    return N !== y
                })
            }, 1)
        }, []),
        u = a.useCallback(function(f) {
            n.current = _e(f), o.current = void 0
        }, []),
        h = a.useCallback(function(f) {
            c(f.type, Kt(f), f.target, l(f, e.lockRef.current))
        }, []),
        p = a.useCallback(function(f) {
            c(f.type, _e(f), f.target, l(f, e.lockRef.current))
        }, []);
    a.useEffect(function() {
        return de.push(i), e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: p
            }), document.addEventListener("wheel", m, le), document.addEventListener("touchmove", m, le), document.addEventListener("touchstart", u, le),
            function() {
                de = de.filter(function(f) {
                    return f !== i
                }), document.removeEventListener("wheel", m, le), document.removeEventListener("touchmove", m, le), document.removeEventListener("touchstart", u, le)
            }
    }, []);
    var g = e.removeScrollBar,
        x = e.inert;
    return a.createElement(a.Fragment, null, x ? a.createElement(i, {
        styles: sa(s)
    }) : null, g ? a.createElement(Bo, {
        gapMode: e.gapMode
    }) : null)
}

function ca(e) {
    for (var r = null; e !== null;) e instanceof ShadowRoot && (r = e.host, e = e.host), e = e.parentNode;
    return r
}
const la = Uo(Lr, ia);
var $r = a.forwardRef(function(e, r) {
    return a.createElement(Ge, ue({}, e, {
        ref: r,
        sideCar: la
    }))
});
$r.classNames = Ge.classNames;
var st = ["Enter", " "],
    da = ["ArrowDown", "PageUp", "Home"],
    Kr = ["ArrowUp", "PageDown", "End"],
    ua = [...da, ...Kr],
    fa = {
        ltr: [...st, "ArrowRight"],
        rtl: [...st, "ArrowLeft"]
    },
    ma = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    je = "Menu",
    [be, pa, ha] = ht(je),
    [ne, xa] = ye(je, [ha, wr, Ke]),
    ze = wr(),
    Gr = Ke(),
    [ga, oe] = ne(je),
    [va, Ce] = ne(je),
    zr = e => {
        const {
            __scopeMenu: r,
            open: n = !1,
            children: o,
            dir: s,
            onOpenChange: i,
            modal: d = !0
        } = e, l = ze(r), [m, c] = a.useState(null), u = a.useRef(!1), h = q(i), p = pt(s);
        return a.useEffect(() => {
            const g = () => {
                    u.current = !0, document.addEventListener("pointerdown", x, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", x, {
                        capture: !0,
                        once: !0
                    })
                },
                x = () => u.current = !1;
            return document.addEventListener("keydown", g, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", g, {
                    capture: !0
                }), document.removeEventListener("pointerdown", x, {
                    capture: !0
                }), document.removeEventListener("pointermove", x, {
                    capture: !0
                })
            }
        }, []), t.jsx(ks, { ...l,
            children: t.jsx(ga, {
                scope: r,
                open: n,
                onOpenChange: h,
                content: m,
                onContentChange: c,
                children: t.jsx(va, {
                    scope: r,
                    onClose: a.useCallback(() => h(!1), [h]),
                    isUsingKeyboardRef: u,
                    dir: p,
                    modal: d,
                    children: o
                })
            })
        })
    };
zr.displayName = je;
var ba = "MenuAnchor",
    vt = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, s = ze(n);
        return t.jsx(Ts, { ...s,
            ...o,
            ref: r
        })
    });
vt.displayName = ba;
var bt = "MenuPortal",
    [wa, Wr] = ne(bt, {
        forceMount: void 0
    }),
    Hr = e => {
        const {
            __scopeMenu: r,
            forceMount: n,
            children: o,
            container: s
        } = e, i = oe(bt, r);
        return t.jsx(wa, {
            scope: r,
            forceMount: n,
            children: t.jsx(Ne, {
                present: n || i.open,
                children: t.jsx(_r, {
                    asChild: !0,
                    container: s,
                    children: o
                })
            })
        })
    };
Hr.displayName = bt;
var K = "MenuContent",
    [ya, wt] = ne(K),
    Yr = a.forwardRef((e, r) => {
        const n = Wr(K, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...s
            } = e,
            i = oe(K, e.__scopeMenu),
            d = Ce(K, e.__scopeMenu);
        return t.jsx(be.Provider, {
            scope: e.__scopeMenu,
            children: t.jsx(Ne, {
                present: o || i.open,
                children: t.jsx(be.Slot, {
                    scope: e.__scopeMenu,
                    children: d.modal ? t.jsx(Na, { ...s,
                        ref: r
                    }) : t.jsx(ja, { ...s,
                        ref: r
                    })
                })
            })
        })
    }),
    Na = a.forwardRef((e, r) => {
        const n = oe(K, e.__scopeMenu),
            o = a.useRef(null),
            s = T(r, o);
        return a.useEffect(() => {
            const i = o.current;
            if (i) return $o(i)
        }, []), t.jsx(yt, { ...e,
            ref: s,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: C(e.onFocusOutside, i => i.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    ja = a.forwardRef((e, r) => {
        const n = oe(K, e.__scopeMenu);
        return t.jsx(yt, { ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    yt = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            loop: o = !1,
            trapFocus: s,
            onOpenAutoFocus: i,
            onCloseAutoFocus: d,
            disableOutsidePointerEvents: l,
            onEntryFocus: m,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: h,
            onInteractOutside: p,
            onDismiss: g,
            disableOutsideScroll: x,
            ...f
        } = e, v = oe(K, n), b = Ce(K, n), w = ze(n), y = Gr(n), N = pa(n), [M, _] = a.useState(null), E = a.useRef(null), S = T(r, E, v.onContentChange), F = a.useRef(0), D = a.useRef(""), J = a.useRef(0), Q = a.useRef(null), X = a.useRef("right"), se = a.useRef(0), ae = x ? $r : a.Fragment, G = x ? {
            as: Le,
            allowPinchZoom: !0
        } : void 0, ie = j => {
            var V, pe;
            const L = D.current + j,
                k = N().filter($ => !$.disabled),
                W = document.activeElement,
                fe = (V = k.find($ => $.ref.current === W)) == null ? void 0 : V.textValue,
                me = k.map($ => $.textValue),
                Me = Oa(me, L, fe),
                ee = (pe = k.find($ => $.textValue === Me)) == null ? void 0 : pe.ref.current;
            (function $(he) {
                D.current = he, window.clearTimeout(F.current), he !== "" && (F.current = window.setTimeout(() => $(""), 1e3))
            })(L), ee && setTimeout(() => ee.focus())
        };
        a.useEffect(() => () => window.clearTimeout(F.current), []), gs();
        const B = a.useCallback(j => {
            var k, W;
            return X.current === ((k = Q.current) == null ? void 0 : k.side) && La(j, (W = Q.current) == null ? void 0 : W.area)
        }, []);
        return t.jsx(ya, {
            scope: n,
            searchRef: D,
            onItemEnter: a.useCallback(j => {
                B(j) && j.preventDefault()
            }, [B]),
            onItemLeave: a.useCallback(j => {
                var L;
                B(j) || ((L = E.current) == null || L.focus(), _(null))
            }, [B]),
            onTriggerLeave: a.useCallback(j => {
                B(j) && j.preventDefault()
            }, [B]),
            pointerGraceTimerRef: J,
            onPointerGraceIntentChange: a.useCallback(j => {
                Q.current = j
            }, []),
            children: t.jsx(ae, { ...G,
                children: t.jsx(xr, {
                    asChild: !0,
                    trapped: s,
                    onMountAutoFocus: C(i, j => {
                        var L;
                        j.preventDefault(), (L = E.current) == null || L.focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: d,
                    children: t.jsx(pr, {
                        asChild: !0,
                        disableOutsidePointerEvents: l,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: u,
                        onFocusOutside: h,
                        onInteractOutside: p,
                        onDismiss: g,
                        children: t.jsx(Or, {
                            asChild: !0,
                            ...y,
                            dir: b.dir,
                            orientation: "vertical",
                            loop: o,
                            currentTabStopId: M,
                            onCurrentTabStopIdChange: _,
                            onEntryFocus: C(m, j => {
                                b.isUsingKeyboardRef.current || j.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: t.jsx(Os, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": dn(v.open),
                                "data-radix-menu-content": "",
                                dir: b.dir,
                                ...w,
                                ...f,
                                ref: S,
                                style: {
                                    outline: "none",
                                    ...f.style
                                },
                                onKeyDown: C(f.onKeyDown, j => {
                                    const k = j.target.closest("[data-radix-menu-content]") === j.currentTarget,
                                        W = j.ctrlKey || j.altKey || j.metaKey,
                                        fe = j.key.length === 1;
                                    k && (j.key === "Tab" && j.preventDefault(), !W && fe && ie(j.key));
                                    const me = E.current;
                                    if (j.target !== me || !ua.includes(j.key)) return;
                                    j.preventDefault();
                                    const ee = N().filter(V => !V.disabled).map(V => V.ref.current);
                                    Kr.includes(j.key) && ee.reverse(), ka(ee)
                                }),
                                onBlur: C(e.onBlur, j => {
                                    j.currentTarget.contains(j.target) || (window.clearTimeout(F.current), D.current = "")
                                }),
                                onPointerMove: C(e.onPointerMove, we(j => {
                                    const L = j.target,
                                        k = se.current !== j.clientX;
                                    if (j.currentTarget.contains(L) && k) {
                                        const W = j.clientX > se.current ? "right" : "left";
                                        X.current = W, se.current = j.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
Yr.displayName = K;
var Ca = "MenuGroup",
    Nt = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return t.jsx(A.div, {
            role: "group",
            ...o,
            ref: r
        })
    });
Nt.displayName = Ca;
var Ma = "MenuLabel",
    Xr = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return t.jsx(A.div, { ...o,
            ref: r
        })
    });
Xr.displayName = Ma;
var De = "MenuItem",
    zt = "menu.itemSelect",
    We = a.forwardRef((e, r) => {
        const {
            disabled: n = !1,
            onSelect: o,
            ...s
        } = e, i = a.useRef(null), d = Ce(De, e.__scopeMenu), l = wt(De, e.__scopeMenu), m = T(r, i), c = a.useRef(!1), u = () => {
            const h = i.current;
            if (!n && h) {
                const p = new CustomEvent(zt, {
                    bubbles: !0,
                    cancelable: !0
                });
                h.addEventListener(zt, g => o == null ? void 0 : o(g), {
                    once: !0
                }), fr(h, p), p.defaultPrevented ? c.current = !1 : d.onClose()
            }
        };
        return t.jsx(Vr, { ...s,
            ref: m,
            disabled: n,
            onClick: C(e.onClick, u),
            onPointerDown: h => {
                var p;
                (p = e.onPointerDown) == null || p.call(e, h), c.current = !0
            },
            onPointerUp: C(e.onPointerUp, h => {
                var p;
                c.current || (p = h.currentTarget) == null || p.click()
            }),
            onKeyDown: C(e.onKeyDown, h => {
                const p = l.searchRef.current !== "";
                n || p && h.key === " " || st.includes(h.key) && (h.currentTarget.click(), h.preventDefault())
            })
        })
    });
We.displayName = De;
var Vr = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            disabled: o = !1,
            textValue: s,
            ...i
        } = e, d = wt(De, n), l = Gr(n), m = a.useRef(null), c = T(r, m), [u, h] = a.useState(!1), [p, g] = a.useState("");
        return a.useEffect(() => {
            const x = m.current;
            x && g((x.textContent ? ? "").trim())
        }, [i.children]), t.jsx(be.ItemSlot, {
            scope: n,
            disabled: o,
            textValue: s ? ? p,
            children: t.jsx(Fr, {
                asChild: !0,
                ...l,
                focusable: !o,
                children: t.jsx(A.div, {
                    role: "menuitem",
                    "data-highlighted": u ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...i,
                    ref: c,
                    onPointerMove: C(e.onPointerMove, we(x => {
                        o ? d.onItemLeave(x) : (d.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: C(e.onPointerLeave, we(x => d.onItemLeave(x))),
                    onFocus: C(e.onFocus, () => h(!0)),
                    onBlur: C(e.onBlur, () => h(!1))
                })
            })
        })
    }),
    Ea = "MenuCheckboxItem",
    Jr = a.forwardRef((e, r) => {
        const {
            checked: n = !1,
            onCheckedChange: o,
            ...s
        } = e;
        return t.jsx(tn, {
            scope: e.__scopeMenu,
            checked: n,
            children: t.jsx(We, {
                role: "menuitemcheckbox",
                "aria-checked": Be(n) ? "mixed" : n,
                ...s,
                ref: r,
                "data-state": Ct(n),
                onSelect: C(s.onSelect, () => o == null ? void 0 : o(Be(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Jr.displayName = Ea;
var Zr = "MenuRadioGroup",
    [Sa, Ra] = ne(Zr, {
        value: void 0,
        onValueChange: () => {}
    }),
    qr = a.forwardRef((e, r) => {
        const {
            value: n,
            onValueChange: o,
            ...s
        } = e, i = q(o);
        return t.jsx(Sa, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: t.jsx(Nt, { ...s,
                ref: r
            })
        })
    });
qr.displayName = Zr;
var Qr = "MenuRadioItem",
    en = a.forwardRef((e, r) => {
        const {
            value: n,
            ...o
        } = e, s = Ra(Qr, e.__scopeMenu), i = n === s.value;
        return t.jsx(tn, {
            scope: e.__scopeMenu,
            checked: i,
            children: t.jsx(We, {
                role: "menuitemradio",
                "aria-checked": i,
                ...o,
                ref: r,
                "data-state": Ct(i),
                onSelect: C(o.onSelect, () => {
                    var d;
                    return (d = s.onValueChange) == null ? void 0 : d.call(s, n)
                }, {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
en.displayName = Qr;
var jt = "MenuItemIndicator",
    [tn, _a] = ne(jt, {
        checked: !1
    }),
    rn = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            forceMount: o,
            ...s
        } = e, i = _a(jt, n);
        return t.jsx(Ne, {
            present: o || Be(i.checked) || i.checked === !0,
            children: t.jsx(A.span, { ...s,
                ref: r,
                "data-state": Ct(i.checked)
            })
        })
    });
rn.displayName = jt;
var Pa = "MenuSeparator",
    nn = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            ...o
        } = e;
        return t.jsx(A.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...o,
            ref: r
        })
    });
nn.displayName = Pa;
var Ia = "MenuArrow",
    on = a.forwardRef((e, r) => {
        const {
            __scopeMenu: n,
            ...o
        } = e, s = ze(n);
        return t.jsx(Fs, { ...s,
            ...o,
            ref: r
        })
    });
on.displayName = Ia;
var Aa = "MenuSub",
    [Lc, sn] = ne(Aa),
    ge = "MenuSubTrigger",
    an = a.forwardRef((e, r) => {
        const n = oe(ge, e.__scopeMenu),
            o = Ce(ge, e.__scopeMenu),
            s = sn(ge, e.__scopeMenu),
            i = wt(ge, e.__scopeMenu),
            d = a.useRef(null),
            {
                pointerGraceTimerRef: l,
                onPointerGraceIntentChange: m
            } = i,
            c = {
                __scopeMenu: e.__scopeMenu
            },
            u = a.useCallback(() => {
                d.current && window.clearTimeout(d.current), d.current = null
            }, []);
        return a.useEffect(() => u, [u]), a.useEffect(() => {
            const h = l.current;
            return () => {
                window.clearTimeout(h), m(null)
            }
        }, [l, m]), t.jsx(vt, {
            asChild: !0,
            ...c,
            children: t.jsx(Vr, {
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": s.contentId,
                "data-state": dn(n.open),
                ...e,
                ref: ur(r, s.onTriggerChange),
                onClick: h => {
                    var p;
                    (p = e.onClick) == null || p.call(e, h), !(e.disabled || h.defaultPrevented) && (h.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: C(e.onPointerMove, we(h => {
                    i.onItemEnter(h), !h.defaultPrevented && !e.disabled && !n.open && !d.current && (i.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
                        n.onOpenChange(!0), u()
                    }, 100))
                })),
                onPointerLeave: C(e.onPointerLeave, we(h => {
                    var g, x;
                    u();
                    const p = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
                    if (p) {
                        const f = (x = n.content) == null ? void 0 : x.dataset.side,
                            v = f === "right",
                            b = v ? -5 : 5,
                            w = p[v ? "left" : "right"],
                            y = p[v ? "right" : "left"];
                        i.onPointerGraceIntentChange({
                            area: [{
                                x: h.clientX + b,
                                y: h.clientY
                            }, {
                                x: w,
                                y: p.top
                            }, {
                                x: y,
                                y: p.top
                            }, {
                                x: y,
                                y: p.bottom
                            }, {
                                x: w,
                                y: p.bottom
                            }],
                            side: f
                        }), window.clearTimeout(l.current), l.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (i.onTriggerLeave(h), h.defaultPrevented) return;
                        i.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: C(e.onKeyDown, h => {
                    var g;
                    const p = i.searchRef.current !== "";
                    e.disabled || p && h.key === " " || fa[o.dir].includes(h.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), h.preventDefault())
                })
            })
        })
    });
an.displayName = ge;
var cn = "MenuSubContent",
    ln = a.forwardRef((e, r) => {
        const n = Wr(K, e.__scopeMenu),
            {
                forceMount: o = n.forceMount,
                ...s
            } = e,
            i = oe(K, e.__scopeMenu),
            d = Ce(K, e.__scopeMenu),
            l = sn(cn, e.__scopeMenu),
            m = a.useRef(null),
            c = T(r, m);
        return t.jsx(be.Provider, {
            scope: e.__scopeMenu,
            children: t.jsx(Ne, {
                present: o || i.open,
                children: t.jsx(be.Slot, {
                    scope: e.__scopeMenu,
                    children: t.jsx(yt, {
                        id: l.contentId,
                        "aria-labelledby": l.triggerId,
                        ...s,
                        ref: c,
                        align: "start",
                        side: d.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: u => {
                            var h;
                            d.isUsingKeyboardRef.current && ((h = m.current) == null || h.focus()), u.preventDefault()
                        },
                        onCloseAutoFocus: u => u.preventDefault(),
                        onFocusOutside: C(e.onFocusOutside, u => {
                            u.target !== l.trigger && i.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: C(e.onEscapeKeyDown, u => {
                            d.onClose(), u.preventDefault()
                        }),
                        onKeyDown: C(e.onKeyDown, u => {
                            var g;
                            const h = u.currentTarget.contains(u.target),
                                p = ma[d.dir].includes(u.key);
                            h && p && (i.onOpenChange(!1), (g = l.trigger) == null || g.focus(), u.preventDefault())
                        })
                    })
                })
            })
        })
    });
ln.displayName = cn;

function dn(e) {
    return e ? "open" : "closed"
}

function Be(e) {
    return e === "indeterminate"
}

function Ct(e) {
    return Be(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function ka(e) {
    const r = document.activeElement;
    for (const n of e)
        if (n === r || (n.focus(), document.activeElement !== r)) return
}

function Ta(e, r) {
    return e.map((n, o) => e[(r + o) % e.length])
}

function Oa(e, r, n) {
    const s = r.length > 1 && Array.from(r).every(c => c === r[0]) ? r[0] : r,
        i = n ? e.indexOf(n) : -1;
    let d = Ta(e, Math.max(i, 0));
    s.length === 1 && (d = d.filter(c => c !== n));
    const m = d.find(c => c.toLowerCase().startsWith(s.toLowerCase()));
    return m !== n ? m : void 0
}

function Fa(e, r) {
    const {
        x: n,
        y: o
    } = e;
    let s = !1;
    for (let i = 0, d = r.length - 1; i < r.length; d = i++) {
        const l = r[i].x,
            m = r[i].y,
            c = r[d].x,
            u = r[d].y;
        m > o != u > o && n < (c - l) * (o - m) / (u - m) + l && (s = !s)
    }
    return s
}

function La(e, r) {
    if (!r) return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return Fa(n, r)
}

function we(e) {
    return r => r.pointerType === "mouse" ? e(r) : void 0
}
var Da = zr,
    Ba = vt,
    Ua = Hr,
    $a = Yr,
    Ka = Nt,
    Ga = Xr,
    za = We,
    Wa = Jr,
    Ha = qr,
    Ya = en,
    Xa = rn,
    Va = nn,
    Ja = on,
    Za = an,
    qa = ln,
    He = "Menubar",
    [at, Qa, ei] = ht(He),
    [un, Dc] = ye(He, [ei, Ke]),
    O = xa(),
    fn = Ke(),
    [ti, Mt] = un(He),
    mn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            value: o,
            onValueChange: s,
            defaultValue: i,
            loop: d = !0,
            dir: l,
            ...m
        } = e, c = pt(l), u = fn(n), [h = "", p] = ir({
            prop: o,
            onChange: s,
            defaultProp: i
        }), [g, x] = a.useState(null);
        return t.jsx(ti, {
            scope: n,
            value: h,
            onMenuOpen: a.useCallback(f => {
                p(f), x(f)
            }, [p]),
            onMenuClose: a.useCallback(() => p(""), [p]),
            onMenuToggle: a.useCallback(f => {
                p(v => v ? "" : f), x(f)
            }, [p]),
            dir: c,
            loop: d,
            children: t.jsx(at.Provider, {
                scope: n,
                children: t.jsx(at.Slot, {
                    scope: n,
                    children: t.jsx(Or, {
                        asChild: !0,
                        ...u,
                        orientation: "horizontal",
                        loop: d,
                        dir: c,
                        currentTabStopId: g,
                        onCurrentTabStopIdChange: x,
                        children: t.jsx(A.div, {
                            role: "menubar",
                            ...m,
                            ref: r
                        })
                    })
                })
            })
        })
    });
mn.displayName = He;
var Et = "MenubarMenu",
    [ri, pn] = un(Et),
    hn = e => {
        const {
            __scopeMenubar: r,
            value: n,
            ...o
        } = e, s = Ae(), i = n || s || "LEGACY_REACT_AUTO_VALUE", d = Mt(Et, r), l = O(r), m = a.useRef(null), c = a.useRef(!1), u = d.value === i;
        return a.useEffect(() => {
            u || (c.current = !1)
        }, [u]), t.jsx(ri, {
            scope: r,
            value: i,
            triggerId: Ae(),
            triggerRef: m,
            contentId: Ae(),
            wasKeyboardTriggerOpenRef: c,
            children: t.jsx(Da, { ...l,
                open: u,
                onOpenChange: h => {
                    h || d.onMenuClose()
                },
                modal: !1,
                dir: d.dir,
                ...o
            })
        })
    };
hn.displayName = Et;
var it = "MenubarTrigger",
    xn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            disabled: o = !1,
            ...s
        } = e, i = fn(n), d = O(n), l = Mt(it, n), m = pn(it, n), c = a.useRef(null), u = T(r, c, m.triggerRef), [h, p] = a.useState(!1), g = l.value === m.value;
        return t.jsx(at.ItemSlot, {
            scope: n,
            value: m.value,
            disabled: o,
            children: t.jsx(Fr, {
                asChild: !0,
                ...i,
                focusable: !o,
                tabStopId: m.value,
                children: t.jsx(Ba, {
                    asChild: !0,
                    ...d,
                    children: t.jsx(A.button, {
                        type: "button",
                        role: "menuitem",
                        id: m.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": g,
                        "aria-controls": g ? m.contentId : void 0,
                        "data-highlighted": h ? "" : void 0,
                        "data-state": g ? "open" : "closed",
                        "data-disabled": o ? "" : void 0,
                        disabled: o,
                        ...s,
                        ref: u,
                        onPointerDown: C(e.onPointerDown, x => {
                            !o && x.button === 0 && x.ctrlKey === !1 && (l.onMenuOpen(m.value), g || x.preventDefault())
                        }),
                        onPointerEnter: C(e.onPointerEnter, () => {
                            var f;
                            !!l.value && !g && (l.onMenuOpen(m.value), (f = c.current) == null || f.focus())
                        }),
                        onKeyDown: C(e.onKeyDown, x => {
                            o || (["Enter", " "].includes(x.key) && l.onMenuToggle(m.value), x.key === "ArrowDown" && l.onMenuOpen(m.value), ["Enter", " ", "ArrowDown"].includes(x.key) && (m.wasKeyboardTriggerOpenRef.current = !0, x.preventDefault()))
                        }),
                        onFocus: C(e.onFocus, () => p(!0)),
                        onBlur: C(e.onBlur, () => p(!1))
                    })
                })
            })
        })
    });
xn.displayName = it;
var ni = "MenubarPortal",
    gn = e => {
        const {
            __scopeMenubar: r,
            ...n
        } = e, o = O(r);
        return t.jsx(Ua, { ...o,
            ...n
        })
    };
gn.displayName = ni;
var ct = "MenubarContent",
    vn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            align: o = "start",
            ...s
        } = e, i = O(n), d = Mt(ct, n), l = pn(ct, n), m = Qa(n), c = a.useRef(!1);
        return t.jsx($a, {
            id: l.contentId,
            "aria-labelledby": l.triggerId,
            "data-radix-menubar-content": "",
            ...i,
            ...s,
            ref: r,
            align: o,
            onCloseAutoFocus: C(e.onCloseAutoFocus, u => {
                var p;
                !!!d.value && !c.current && ((p = l.triggerRef.current) == null || p.focus()), c.current = !1, u.preventDefault()
            }),
            onFocusOutside: C(e.onFocusOutside, u => {
                const h = u.target;
                m().some(g => {
                    var x;
                    return (x = g.ref.current) == null ? void 0 : x.contains(h)
                }) && u.preventDefault()
            }),
            onInteractOutside: C(e.onInteractOutside, () => {
                c.current = !0
            }),
            onEntryFocus: u => {
                l.wasKeyboardTriggerOpenRef.current || u.preventDefault()
            },
            onKeyDown: C(e.onKeyDown, u => {
                if (["ArrowRight", "ArrowLeft"].includes(u.key)) {
                    const h = u.target,
                        p = h.hasAttribute("data-radix-menubar-subtrigger"),
                        g = h.closest("[data-radix-menubar-content]") !== u.currentTarget,
                        f = (d.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
                    if (!f && p || g && f) return;
                    let w = m().filter(M => !M.disabled).map(M => M.value);
                    f && w.reverse();
                    const y = w.indexOf(l.value);
                    w = d.loop ? vi(w, y + 1) : w.slice(y + 1);
                    const [N] = w;
                    N && d.onMenuOpen(N)
                }
            }, {
                checkForDefaultPrevented: !1
            }),
            style: { ...e.style,
                "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
                "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
                "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
vn.displayName = ct;
var oi = "MenubarGroup",
    si = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Ka, { ...s,
            ...o,
            ref: r
        })
    });
si.displayName = oi;
var ai = "MenubarLabel",
    bn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Ga, { ...s,
            ...o,
            ref: r
        })
    });
bn.displayName = ai;
var ii = "MenubarItem",
    wn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(za, { ...s,
            ...o,
            ref: r
        })
    });
wn.displayName = ii;
var ci = "MenubarCheckboxItem",
    yn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Wa, { ...s,
            ...o,
            ref: r
        })
    });
yn.displayName = ci;
var li = "MenubarRadioGroup",
    di = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Ha, { ...s,
            ...o,
            ref: r
        })
    });
di.displayName = li;
var ui = "MenubarRadioItem",
    Nn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Ya, { ...s,
            ...o,
            ref: r
        })
    });
Nn.displayName = ui;
var fi = "MenubarItemIndicator",
    jn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Xa, { ...s,
            ...o,
            ref: r
        })
    });
jn.displayName = fi;
var mi = "MenubarSeparator",
    Cn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Va, { ...s,
            ...o,
            ref: r
        })
    });
Cn.displayName = mi;
var pi = "MenubarArrow",
    hi = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Ja, { ...s,
            ...o,
            ref: r
        })
    });
hi.displayName = pi;
var xi = "MenubarSubTrigger",
    Mn = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(Za, {
            "data-radix-menubar-subtrigger": "",
            ...s,
            ...o,
            ref: r
        })
    });
Mn.displayName = xi;
var gi = "MenubarSubContent",
    En = a.forwardRef((e, r) => {
        const {
            __scopeMenubar: n,
            ...o
        } = e, s = O(n);
        return t.jsx(qa, { ...s,
            "data-radix-menubar-content": "",
            ...o,
            ref: r,
            style: { ...e.style,
                "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
                "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
                "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
En.displayName = gi;

function vi(e, r) {
    return e.map((n, o) => e[(r + o) % e.length])
}
var Sn = mn,
    bi = hn,
    Rn = xn,
    wi = gn,
    _n = vn,
    Pn = bn,
    St = wn,
    In = yn,
    An = Nn,
    kn = jn,
    Tn = Cn,
    On = Mn,
    Fn = En;
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = cr("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ni = cr("Circle", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ]),
    ji = bi,
    Ln = a.forwardRef(({
        className: e,
        ...r
    }, n) => t.jsx(Sn, {
        ref: n,
        className: U("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", e),
        ...r
    }));
Ln.displayName = Sn.displayName;
const Dn = a.forwardRef(({
    className: e,
    ...r
}, n) => t.jsx(Rn, {
    ref: n,
    className: U("flex cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", e),
    ...r
}));
Dn.displayName = Rn.displayName;
const Ci = a.forwardRef(({
    className: e,
    inset: r,
    children: n,
    ...o
}, s) => t.jsxs(On, {
    ref: s,
    className: U("flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", r && "pl-8", e),
    ...o,
    children: [n, t.jsx(yi, {
        className: "ml-auto h-4 w-4"
    })]
}));
Ci.displayName = On.displayName;
const Mi = a.forwardRef(({
    className: e,
    ...r
}, n) => t.jsx(Fn, {
    ref: n,
    className: U("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...r
}));
Mi.displayName = Fn.displayName;
const Bn = a.forwardRef(({
    className: e,
    align: r = "start",
    alignOffset: n = -4,
    sideOffset: o = 8,
    ...s
}, i) => t.jsx(wi, {
    children: t.jsx(_n, {
        ref: i,
        align: r,
        alignOffset: n,
        sideOffset: o,
        className: U("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...s
    })
}));
Bn.displayName = _n.displayName;
const I = a.forwardRef(({
    className: e,
    inset: r,
    ...n
}, o) => t.jsx(St, {
    ref: o,
    className: U("relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r && "pl-8", e),
    ...n
}));
I.displayName = St.displayName;
const lt = a.forwardRef(({
    className: e,
    inset: r,
    children: n,
    variant: o = "default",
    ...s
}, i) => {
    const d = a.useRef(null),
        l = m => {
            var c;
            m.preventDefault(), m.stopPropagation(), (c = d.current) == null || c.submit()
        };
    return t.jsx("form", {
        ref: d,
        ...s,
        className: U("w-full", e),
        children: t.jsx(St, {
            className: U("relative flex w-full cursor-default select-none items-center rounded-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r && "pl-8"),
            onSelect: m => m.preventDefault(),
            children: t.jsx("button", {
                type: "button",
                onClick: l,
                className: U("flex w-full items-center px-2 py-2 text-sm border-none cursor-pointer", o === "destructive" ? "bg-red-400 hover:bg-red-500" : "bg-transparent hover:bg-accent", "transition-colors"),
                children: n
            })
        })
    })
});
lt.displayName = "MenubarFormItem";
const Ei = a.forwardRef(({
    className: e,
    children: r,
    checked: n,
    ...o
}, s) => t.jsxs(In, {
    ref: s,
    className: U("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: n,
    ...o,
    children: [t.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: t.jsx(kn, {
            children: t.jsx(Ko, {
                className: "h-4 w-4"
            })
        })
    }), r]
}));
Ei.displayName = In.displayName;
const Si = a.forwardRef(({
    className: e,
    children: r,
    ...n
}, o) => t.jsxs(An, {
    ref: o,
    className: U("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [t.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: t.jsx(kn, {
            children: t.jsx(Ni, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), r]
}));
Si.displayName = An.displayName;
const Ri = a.forwardRef(({
    className: e,
    inset: r,
    ...n
}, o) => t.jsx(Pn, {
    ref: o,
    className: U("px-2 py-1.5 text-sm font-semibold", r && "pl-8", e),
    ...n
}));
Ri.displayName = Pn.displayName;
const H = a.forwardRef(({
    className: e,
    ...r
}, n) => t.jsx(Tn, {
    ref: n,
    className: U("-mx-1 my-1 h-px bg-muted", e),
    ...r
}));
H.displayName = Tn.displayName;
const _i = ({
        user: e
    }) => t.jsx(Ln, {
        className: "border-none bg-transparent p-0",
        children: t.jsxs(ji, {
            children: [t.jsxs(Dn, {
                className: "focus:bg-dark-600 data-[state=open]:bg-dark-600 hover:bg-dark-600 transition-colors h-[42px] py-0 px-1 rounded-lg pl-3 border-transparent font-semibold",
                children: [ut(), t.jsxs("div", {
                    className: "flex items-center gap-2 profile-name text-sm",
                    children: [t.jsx(nr, {
                        subscription: e.subscription
                    }), e.role === P.user_role.moderator && t.jsx(or, {}), e.role === P.user_role.tester && t.jsx(sr, {}), e.isSuspended && t.jsx(bo, {}), e.username]
                }), t.jsx(ar, {
                    user: e,
                    size: "md",
                    className: "ml-3 mr-0 w-9 h-9"
                })]
            }), t.jsxs(Bn, {
                align: "end",
                className: "min-w-[200px] bg-dark-700 border-2 border-dark-600/80",
                children: [t.jsx(I, {
                    asChild: !0,
                    children: t.jsxs(R, {
                        to: `/profile/${e.username}`,
                        children: [Vt("mr-2 w-5 h-5"), t.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "Your Profile"
                        })]
                    })
                }), t.jsx(I, {
                    asChild: !0,
                    children: t.jsxs(R, {
                        to: "/favorites",
                        children: [ft("mr-2 w-[18px] h-[18px]"), t.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "Your Favorites"
                        })]
                    })
                }), t.jsx(I, {
                    asChild: !0,
                    children: t.jsxs(R, {
                        to: "/settings/profile",
                        children: [Vn("mr-2 w-[18px] h-[18px]"), t.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "Settings"
                        })]
                    })
                }), !1, (e.role === P.user_role.curator || e.role === P.user_role.admin || e.role === P.user_role.moderator) && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsx(R, {
                            to: "/curator",
                            className: "focus:bg-dark-500 focus:text-gray-100 cursor-pointer border border-indigo-400 rounded-[6px] my-1",
                            children: t.jsxs("div", {
                                className: "flex items-center gap-3 justify-between w-full",
                                children: [t.jsxs("div", {
                                    className: "flex items-center",
                                    children: [Te("mr-2 w-5 h-5 text-indigo-400"), t.jsx("span", {
                                        className: "whitespace-nowrap",
                                        children: "Curator"
                                    })]
                                }), t.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [t.jsx("span", {
                                        className: "text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-medium",
                                        children: "Beta"
                                    }), Jn("w-4 h-4 ml-1 text-indigo-400")]
                                })]
                            })
                        })
                    })]
                }), (e.role === P.user_role.moderator || e.role === P.user_role.admin || e.role === P.user_role.editor) && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin/review",
                            children: [Te("mr-2 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Review"
                            })]
                        })
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/tags/add",
                            children: [Jt("mr-2 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Tags"
                            })]
                        })
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin/comments",
                            children: [Oe("mr-2 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Comments"
                            })]
                        })
                    })]
                }), e.subscription && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/ai/variations",
                            children: [Zt("mr-2 w-5 h-5 text-fuchsia-400"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "AI Overview"
                            })]
                        })
                    })]
                }), e.role === P.user_role.admin && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin",
                            children: [Pe("mr-2 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Admin"
                            })]
                        })
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin/curators",
                            children: [Pe("mr-1.5 w-5 h-5 text-indigo-400"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Curators"
                            })]
                        })
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin/tools",
                            children: [Pe("mr-2 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Tools"
                            })]
                        })
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/challenges/create",
                            children: [Zn("mr-1.5 w-5 h-5"), t.jsx("span", {
                                className: "whitespace-nowrap",
                                children: "Create Challenge"
                            })]
                        })
                    })]
                }), (e.role === P.user_role.editor || e.role === P.user_role.admin) && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsx(I, {
                        asChild: !0,
                        children: t.jsxs(R, {
                            to: "/admin/sms",
                            children: [qn("w-5 h-5 mr-2"), " ", t.jsx("span", {
                                children: "SMS"
                            })]
                        })
                    })]
                }), t.jsx(H, {
                    className: "bg-white/5"
                }), t.jsx(I, {
                    asChild: !0,
                    children: t.jsxs("a", {
                        href: "https://docs.google.com/forms/d/e/1FAIpQLSfbaOoGw82eXhX1la80_NM-P9Pv0lzxE1nUF85lp89s7G7vOw/viewform?usp=sf_link",
                        target: "_blank",
                        rel: "noopener",
                        children: [Oe("mr-2 w-5 h-5"), t.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "Send feedback"
                        })]
                    })
                }), !1, e.subscription && t.jsxs(t.Fragment, {
                    children: [t.jsx(H, {
                        className: "bg-white/5"
                    }), t.jsxs(lt, {
                        action: "/resource/payment/portal",
                        method: "post",
                        children: [Qn("mr-2 w-5 h-5"), t.jsx("span", {
                            className: "whitespace-nowrap",
                            children: "Manage subscription"
                        })]
                    })]
                }), t.jsx(H, {
                    className: "bg-white/5"
                }), t.jsx(I, {
                    asChild: !0,
                    children: t.jsxs("a", {
                        href: "https://discord.gg/KD8ba2uUpT",
                        target: "_blank",
                        rel: "noopener",
                        className: "focus:bg-dark-500 focus:text-gray-100 cursor-pointer bg-[#5865f2] hover:bg-[#4955d6] transition-all duration-300 ease rounded-[6px] my-1",
                        children: [dt("mr-2 w-5 h-5 text-offwhite"), t.jsx("span", {
                            className: "whitespace-nowrap text-offwhite",
                            children: "Join Discord"
                        })]
                    })
                }), t.jsx(H, {
                    className: "bg-white/5"
                }), t.jsxs(lt, {
                    action: "/logout",
                    method: "post",
                    children: [Xt("mr-2 w-5 h-5"), t.jsx("span", {
                        className: "whitespace-nowrap",
                        children: "Log out"
                    })]
                })]
            })]
        })
    }),
    Pi = ({
        url: e,
        activeTab: r,
        isDetailPage: n
    }) => {
        const [o, s] = a.useState(!1), {
            user: i,
            notifications: d,
            challengeStatus: l,
            postsByType: m,
            proFeatures: c
        } = mt();
        return a.useEffect(() => {
            s(!1)
        }, [e]), t.jsxs("header", {
            className: "root-container mt-0 py-3 flex justify-between top-0 fixed lg:relative items-center z-[100] bg-dark-700 px-5",
            children: [t.jsx(R, {
                to: "/",
                className: "flex items-center p-3 py-0 xl:pr-10 lg:pr-8  2xl:pr-22 pr-5 translate-y-[2px] logo-wrapper",
                children: t.jsx("img", {
                    className: "logo max-w-[85px]",
                    src: dr,
                    alt: ""
                })
            }), t.jsxs("nav", {
                className: "items-center justify-between hidden w-full font-semibold lg:flex",
                children: [t.jsx(ss, {
                    activeTab: r,
                    isDetailPage: n,
                    challengeStatus: l,
                    url: e,
                    isVisibleOnMobile: !1,
                    user: i,
                    postsByType: m,
                    proFeatures: c
                }), t.jsx("div", {
                    className: "items-center hidden gap-2 xl:gap-3 lg:flex",
                    children: i ? t.jsxs(t.Fragment, {
                        children: [t.jsx(ns, {
                            id: "points-tooltip",
                            score: i.score
                        }), t.jsxs("div", {
                            className: "relative overflow-visible group",
                            children: [t.jsx("div", {
                                className: "absolute -translate-y-28 rounded-full left-1/2 -translate-x-1/2 bg-gradient-to-tl from-indigo-500 to-fuchsia-500 blur-2xl w-[140px] duration-1000 h-[80px] group-hover:-translate-y-20 z-0 transition-transform"
                            }), t.jsx(re, {
                                variant: "fancy",
                                className: "h-[42px] relative overflow-visible",
                                asChild: !0,
                                children: t.jsxs(R, {
                                    to: "/create",
                                    className: "flex items-center gap-2",
                                    children: [It("w-5 h-5"), " Create"]
                                })
                            })]
                        }), t.jsx(rs, {
                            notifications: d,
                            user: i
                        }), t.jsx(_i, {
                            user: i
                        })]
                    }) : t.jsxs(t.Fragment, {
                        children: [t.jsxs("div", {
                            className: "relative overflow-visible group",
                            children: [t.jsx("div", {
                                className: "absolute -translate-y-28 rounded-full left-1/2 -translate-x-1/2 bg-gradient-to-tl from-indigo-500 to-fuchsia-500 blur-2xl w-[140px] duration-1000 h-[80px] group-hover:-translate-y-14 z-0 transition-transform"
                            }), t.jsx(re, {
                                variant: "fancy",
                                className: "relative z-[10] h-[42px]",
                                asChild: !0,
                                children: t.jsxs(R, {
                                    to: "?create-account",
                                    preventScrollReset: !0,
                                    children: [It("w-5 h-5"), " Create"]
                                })
                            })]
                        }), t.jsx(re, {
                            variant: "secondary",
                            className: "h-[42px]",
                            asChild: !0,
                            children: t.jsxs(R, {
                                to: "?create-account",
                                preventScrollReset: !0,
                                children: [eo("w-5 h-5"), " Join the Community"]
                            })
                        })]
                    })
                })]
            }), t.jsx(is, {})]
        })
    },
    Ii = Pi,
    Ai = "/assets/logo-CNpFHOWv.svg",
    ki = "/assets/ReactToastify-BTGsrsBX.css";

function Ti({
    threshold: e = 1,
    ref: r
}) {
    const [n, o] = a.useState({
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
    }), s = () => {
        const i = r.current;
        if (i) {
            const d = i.scrollLeft,
                l = i.scrollWidth - (i.offsetWidth + i.scrollLeft),
                m = i.scrollTop,
                c = i.scrollHeight - (i.offsetHeight + i.scrollTop),
                u = {
                    top: m >= e,
                    bottom: c >= e,
                    left: d >= e,
                    right: l >= e
                };
            (n.top !== u.top || n.bottom !== u.bottom || n.left !== u.left || n.right !== u.right) && o(u)
        }
    };
    return a.useEffect(s), {
        onScroll: s,
        hasOverflow: n
    }
}
const Oi = () => {
        const {
            user: e
        } = mt(), r = a.useRef(null), {
            hasOverflow: n,
            onScroll: o
        } = Ti({
            ref: r
        });
        return t.jsxs("div", {
            className: "w-[200px] flex flex-col h-full",
            children: [t.jsxs("div", {
                className: "relative h-full overflow-hidden",
                children: [n.top && t.jsx("div", {
                    className: "absolute top-0 h-[55px] bg-gradient-to-t from-transparent to-dark-700 left-0 w-full z-10 pointer-events-none"
                }), t.jsx("nav", {
                    className: "h-full overflow-auto custom-scrollbar-transparent",
                    ref: r,
                    onScroll: o,
                    children: Object.values(Ue).filter(s => !s.hideFromSidebar).map(s => !e && s.id === "favorites" ? null : t.jsx(z, {
                        to: `/${s.path}`,
                        className: ({
                            isActive: i,
                            isPending: d
                        }) => Y(i ? "active bg-dark-600" : "", "hover:bg-dark-600 transition-colors tracking-wide flex items-center gap-2 font-normal text-sm px-4 pl-3 mb-1 py-2.5 rounded-lg", `tab--${s.id}`),
                        children: t.jsxs("div", {
                            className: "flex items-center gap-2 ",
                            children: [s.id === "favorites" ? ft("w-5 h-5") : t.jsx(s.icon, {
                                className: "w-5 h-5"
                            }), s.label]
                        })
                    }, s.id))
                }), n.bottom && t.jsx("div", {
                    className: "absolute bottom-0 h-[55px] bg-gradient-to-b from-transparent to-dark-700 left-0 w-full z-10 pointer-events-none"
                })]
            }), t.jsx("div", {
                className: "flex-shrink-0 h-[240px] pt-4 pb-2"
            })]
        })
    },
    Fi = () => {
        const e = new Date().getFullYear();
        return t.jsx("footer", {
            "aria-label": "Site Footer",
            className: "pb-[150px] bg-gradient-to-t from-dark-800 to-dark-700",
            children: t.jsxs("div", {
                className: "px-4 py-16 mx-auto space-y-8 max-w-screen-2xl sm:px-6 lg:space-y-16 lg:px-8",
                children: [t.jsxs("div", {
                    className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
                    children: [t.jsxs("div", {
                        children: [t.jsx("div", {
                            className: "text-teal-600",
                            children: t.jsx("img", {
                                src: dr,
                                className: "w-24",
                                alt: ""
                            })
                        }), t.jsx("p", {
                            className: "max-w-xs mt-4 text-base leading-5 text-gray-400",
                            children: "Uiverse | The universe of UI"
                        }), t.jsxs("div", {
                            children: [t.jsxs("p", {
                                className: "flex items-center max-w-xs gap-2 mt-4 font-semibold leading-5 text-offwhite",
                                children: [to("w-4 h-4"), " MIT License"]
                            }), t.jsxs("p", {
                                className: "max-w-xs mt-1 text-sm leading-5 text-gray-400",
                                children: ["All content (UI elements) on this site are published under the", " ", t.jsx("a", {
                                    href: "https://opensource.org/license/mit",
                                    target: "_blank",
                                    className: "underline underline-offset-2",
                                    rel: "noreferrer",
                                    children: "MIT License"
                                }), "."]
                            })]
                        }), t.jsxs("ul", {
                            className: "flex gap-6 mt-8 list-none",
                            children: [t.jsx("li", {
                                children: t.jsxs("a", {
                                    href: "https://www.instagram.com/uiverse.io/",
                                    rel: "noopener",
                                    target: "_blank",
                                    className: "transition text-gray-400 hover:hover:text-indigo-500",
                                    children: [t.jsx("span", {
                                        className: "sr-only",
                                        children: "Instagram"
                                    }), t.jsx("svg", {
                                        className: "w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: t.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                            clipRule: "evenodd"
                                        })
                                    })]
                                })
                            }), t.jsx("li", {
                                children: t.jsxs("a", {
                                    href: "https://twitter.com/uiverse_io",
                                    rel: "noopener",
                                    target: "_blank",
                                    className: "transition text-gray-400 hover:hover:text-indigo-500",
                                    children: [t.jsx("span", {
                                        className: "sr-only",
                                        children: "Twitter"
                                    }), t.jsx("svg", {
                                        className: "w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: t.jsx("path", {
                                            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        })
                                    })]
                                })
                            }), t.jsx("li", {
                                children: t.jsxs("a", {
                                    href: "https://discord.gg/KD8ba2uUpT",
                                    rel: "noopener",
                                    target: "_blank",
                                    className: "transition text-gray-400 hover:text-indigo-500",
                                    children: [t.jsx("span", {
                                        className: "sr-only",
                                        children: "Discord"
                                    }), t.jsx("svg", {
                                        width: "33",
                                        height: "27",
                                        className: "w-6 h-6",
                                        viewBox: "0 0 33 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: t.jsx("path", {
                                            d: "M27.9541 2.81323C25.818 1.81378 23.5339 1.08742 21.146 0.673828C20.8527 1.20404 20.5101 1.91719 20.2739 2.4845C17.7354 2.10275 15.2203 2.10275 12.7286 2.4845C12.4924 1.91719 12.142 1.20404 11.8461 0.673828C9.45561 1.08742 7.16891 1.81645 5.03277 2.81853C0.724134 9.32943 -0.443865 15.6786 0.140135 21.9377C2.99785 24.0717 5.76731 25.3681 8.49004 26.2164C9.1623 25.2912 9.76186 24.3077 10.2784 23.2711C9.29466 22.8973 8.35248 22.4361 7.46223 21.9006C7.69841 21.7256 7.92943 21.5426 8.15262 21.3544C13.5825 23.8941 19.4822 23.8941 24.8473 21.3544C25.0731 21.5426 25.3041 21.7256 25.5377 21.9006C24.6448 22.4387 23.7 22.9 22.7163 23.2738C23.2328 24.3077 23.8298 25.2939 24.5046 26.219C27.23 25.3707 30.002 24.0744 32.8597 21.9377C33.545 14.6818 31.6892 8.39096 27.9541 2.81323ZM11.0181 18.0884C9.38812 18.0884 8.05138 16.5667 8.05138 14.7136C8.05138 12.8606 9.35957 11.3363 11.0181 11.3363C12.6767 11.3363 14.0134 12.8579 13.9848 14.7136C13.9874 16.5667 12.6767 18.0884 11.0181 18.0884ZM21.9818 18.0884C20.3518 18.0884 19.015 16.5667 19.015 14.7136C19.015 12.8606 20.3232 11.3363 21.9818 11.3363C23.6403 11.3363 24.977 12.8579 24.9485 14.7136C24.9485 16.5667 23.6403 18.0884 21.9818 18.0884Z",
                                            fill: "currentColor"
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), t.jsxs("div", {
                        className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4",
                        children: [t.jsx("div", {}), t.jsxs("div", {
                            children: [t.jsx("p", {
                                className: "font-semibold text-offwhite font-display",
                                children: "Resources"
                            }), t.jsx("nav", {
                                "aria-label": "Footer Navigation - Legal",
                                className: "mt-6",
                                children: t.jsxs("ul", {
                                    className: "space-y-4 text-sm list-none",
                                    children: [t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://cssbuttons.io",
                                            target: "_blank",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Cssbuttons.io"
                                        })
                                    }), t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://neumorphism.io",
                                            target: "_blank",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Neumorphism.io"
                                        })
                                    })]
                                })
                            })]
                        }), t.jsxs("div", {
                            children: [t.jsx("p", {
                                className: "font-semibold text-offwhite font-display",
                                children: "Information"
                            }), t.jsx("nav", {
                                "aria-label": "Footer Navigation - Legal",
                                className: "mt-6",
                                children: t.jsxs("ul", {
                                    className: "space-y-4 text-sm list-none",
                                    children: [t.jsx("li", {
                                        children: t.jsx(R, {
                                            to: "/blog",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Blog"
                                        })
                                    }), t.jsx("li", {
                                        children: t.jsx(R, {
                                            to: "/guidelines",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Post Guidelines"
                                        })
                                    })]
                                })
                            })]
                        }), t.jsxs("div", {
                            children: [t.jsx("p", {
                                className: "font-semibold text-offwhite font-display",
                                children: "Legal"
                            }), t.jsx("nav", {
                                "aria-label": "Footer Navigation - Company",
                                className: "mt-6",
                                children: t.jsxs("ul", {
                                    className: "space-y-4 text-sm list-none",
                                    children: [t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://app.termly.io/document/terms-of-service/bdc0e7cf-cb88-4f24-9cb5-13761e20dedb",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Terms and Conditions"
                                        })
                                    }), t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://app.termly.io/document/privacy-policy/fe317b39-7972-4f85-b7c6-d4f562e429d4",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Privacy policy"
                                        })
                                    }), t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://app.termly.io/document/cookie-policy/4e4bbc89-b80d-43d6-98bc-02ee075cc311",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Cookie policy"
                                        })
                                    }), t.jsx("li", {
                                        children: t.jsx("a", {
                                            href: "https://app.termly.io/document/disclaimer/eabc96f8-640d-4858-aadc-c30f646265ed",
                                            className: "transition text-gray-400 hover:opacity-75",
                                            children: "Disclaimer"
                                        })
                                    })]
                                })
                            })]
                        })]
                    })]
                }), t.jsxs("p", {
                    className: "text-sm text-gray-500",
                    children: [e, " Pixel Galaxies. All rights reserved. - Uiverse.io"]
                })]
            })
        })
    },
    Li = ({
        isOpen: e,
        onClose: r
    }) => {
        const [n, o] = a.useState(!1), [s, i] = a.useState(!1);
        return t.jsxs(Wo, {
            open: e,
            onClose: r,
            center: !0,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            showCloseIcon: !0,
            classNames: {
                overlay: "customOverlay",
                modal: "relative max-w-[650px] w-full bg-dark-700 p-8 py-14 rounded-3xl overflow-hidden md:p-12 md:py-16 min-h-[500px]"
            },
            children: [t.jsxs("div", {
                className: "font-semibold modal relative z-10",
                children: [t.jsx("div", {
                    className: "mb-4 text-3xl font-bold text-center text-offwhite font-display",
                    children: s ? "Welcome Back" : "Join the Community"
                }), !s && t.jsxs("div", {
                    className: "mb-8 space-y-4",
                    children: [t.jsx("p", {
                        className: "text-lg text-center text-gray-200 max-w-[405px] mx-auto",
                        children: "Create beautiful UI elements and share them with 100,000+ developers"
                    }), t.jsxs("ul", {
                        className: "text-sm text-gray-400 space-y-2 max-w-[305px] mx-auto",
                        children: [t.jsxs("li", {
                            className: "flex items-center gap-2",
                            children: [t.jsx("span", {
                                className: "text-indigo-400",
                                children: "✓"
                            }), " Create and share unlimited UI elements"]
                        }), t.jsxs("li", {
                            className: "flex items-center gap-2",
                            children: [t.jsx("span", {
                                className: "text-indigo-400",
                                children: "✓"
                            }), " Get inspiration from thousands of designs"]
                        }), t.jsxs("li", {
                            className: "flex items-center gap-2",
                            children: [t.jsx("span", {
                                className: "text-indigo-400",
                                children: "✓"
                            }), " Join a thriving community of creators"]
                        })]
                    })]
                }), t.jsxs("div", {
                    className: `flex flex-col gap-4 mx-auto max-w-[280px] w-full ${s&&"mt-[100px]"}`,
                    children: [t.jsx(Ye, {
                        provider: "github",
                        className: "block w-full",
                        children: t.jsxs(re, {
                            variant: "secondary",
                            className: "w-full",
                            size: "lg",
                            disabled: !s && !n,
                            children: [ro("w-5 h-5 flex-shrink-0"), " ", s ? "Sign in" : "Continue", " with GitHub"]
                        })
                    }), t.jsx(Ye, {
                        provider: "google",
                        className: "block w-full",
                        children: t.jsxs(re, {
                            variant: "secondary",
                            className: "w-full",
                            size: "lg",
                            disabled: !s && !n,
                            children: [t.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-5 h-5",
                                children: [t.jsx("path", {
                                    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                    fill: "#4285F4"
                                }), t.jsx("path", {
                                    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                    fill: "#34A853"
                                }), t.jsx("path", {
                                    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                    fill: "#FBBC05"
                                }), t.jsx("path", {
                                    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                    fill: "#EA4335"
                                }), t.jsx("path", {
                                    d: "M1 1h22v22H1z",
                                    fill: "none"
                                })]
                            }), s ? "Sign in" : "Continue", " with Google"]
                        })
                    }), t.jsx(Ye, {
                        provider: "x",
                        className: "block w-full",
                        children: t.jsxs(re, {
                            variant: "secondary",
                            className: "w-full",
                            size: "lg",
                            disabled: !s && !n,
                            children: [s ? "Sign in" : "Continue", " with", " ", Yt("w-4 h-4 flex-shrink-0")]
                        })
                    })]
                }), !s && t.jsx("div", {
                    className: "mt-6 text-center",
                    children: t.jsxs("label", {
                        className: "inline-flex items-center justify-center text-sm text-gray-300 gap-2 cursor-pointer select-none",
                        htmlFor: "agree",
                        children: [t.jsx(Ho, {
                            id: "agree",
                            checked: n,
                            onCheckedChange: () => o(!n)
                        }), t.jsxs("span", {
                            children: ["I agree to the", " ", t.jsx("a", {
                                href: "https://app.termly.io/document/terms-of-service/bdc0e7cf-cb88-4f24-9cb5-13761e20dedb",
                                target: "_blank",
                                className: "text-gray-400 underline hover:text-gray-200",
                                children: "Terms"
                            }), " ", "and", " ", t.jsx("a", {
                                href: "https://app.termly.io/document/privacy-policy/fe317b39-7972-4f85-b7c6-d4f562e429d4",
                                target: "_blank",
                                className: "text-gray-400 underline hover:text-gray-200",
                                children: "Privacy Policy"
                            })]
                        })]
                    })
                }), t.jsxs("div", {
                    className: "mt-4 text-center text-sm text-gray-400",
                    children: [s ? "Don't have an account?" : "Already have an account?", " ", t.jsx("button", {
                        onClick: () => i(!s),
                        className: "text-indigo-400 hover:text-indigo-300",
                        children: s ? "Sign up" : "Sign in"
                    })]
                })]
            }), t.jsx("div", {
                className: "hidden md:block image-container w-36 h-36 rotate-[25deg] absolute -top-4 -left-10 ease-in transition-all hover:rotate-[15deg] hover:translate-x-3 hover:scale-105",
                children: t.jsx("img", {
                    className: "absolute",
                    src: rr,
                    alt: ""
                })
            }), t.jsx("div", {
                className: "max-w-[1600px] w-full z-0 rounded-full h-[366px] bg-gradient-to-b from-transparent from-0% via-90% to-100% via-indigo-700 to-transparent absolute bg-opacity-30 left-1/2 -translate-x-1/2 top-[-300px] blur-[100px]"
            })]
        })
    };

function Di() {
    typeof window < "u" && qo.init("phc_m9DPye2qU1H4ymd2DQMz4uiH3E1RFEIS1E7bq8IioRE", {
        api_host: "https://eu.i.posthog.com",
        person_profiles: "identified_only"
    })
}

function Bc() {
    const e = fo(),
        [r, n] = mo(),
        o = po(),
        {
            showNavigation: s,
            hideLayout: i
        } = no(),
        d = ho(),
        l = Fe(),
        m = d.toast;
    a.useEffect(() => {
        m && Go(m.message, {
            type: m.type
        })
    }, [m]);
    const c = Fe(),
        [u, h] = a.useState(!1),
        p = Yo(),
        g = Ue[e == null ? void 0 : e.category] || (e == null ? void 0 : e.username),
        x = !c.pathname.includes("create") && !i;
    a.useEffect(() => {
        r.has("create-account") && (h(!0), n(y => {
            const N = new URLSearchParams(y);
            return N.delete("create-account"), N
        }, {
            replace: !0,
            preventScrollReset: !0
        }))
    }, [r, n]);
    const f = o.state !== "idle",
        v = a.useRef(null),
        [b, w] = a.useState(!0);
    return a.useEffect(() => {
        v.current && (f && w(!1), Promise.allSettled(v.current.getAnimations().map(({
            finished: y
        }) => y)).then(() => !f && w(!0)))
    }, [f]), a.useEffect(() => {
        try {
            window._carbonads.refresh()
        } catch {}
    }, [l]), a.useEffect(() => {
        Di()
    }, []), t.jsxs("html", {
        lang: "en",
        className: "dark dark:bg-gray-950",
        children: [t.jsxs("head", {
            children: [t.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }), t.jsx(Qt, {}), t.jsx(er, {})]
        }), t.jsxs("body", {
            className: "bg-dark-700 dark",
            children: [t.jsx("div", {
                role: "progressbar",
                "aria-hidden": !f,
                "aria-valuetext": f ? "Loading" : void 0,
                className: "fixed inset-x-0 top-0 left-0 z-[101] h-[6px] lg:h-[3px]  animate-pulse",
                children: t.jsx("div", {
                    ref: v,
                    className: Y("h-full bg-gradient-to-r from-indigo-600 to-indigo-500 transition-all duration-500 ease-in-out", o.state === "idle" && b && "w-0 opacity-0 transition-none", o.state === "submitting" && "w-4/12", o.state === "loading" && "w-10/12", o.state === "idle" && !b && "w-full")
                })
            }), t.jsx(Jo, {
                delayDuration: 100,
                children: t.jsxs("div", {
                    className: `main-container min-h-screen bg-dark-700 ${!i&&"mt-[70px]"} lg:mt-0`,
                    children: [!i && t.jsx(Ii, {
                        url: c,
                        activeTab: g,
                        isDetailPage: !!(e != null && e.username)
                    }), t.jsxs("div", {
                        "data-path": c.pathname,
                        className: Zo("px-5 py-0 data-[path='/']:px-0 root-container relative", s && "flex", i && "p-0", !i && "mb-12 border-b-2 border-dark-300 shadow-[rgba(0,_0,_0,_0.1)_0px_20px_25px_-5px,_rgba(0,_0,_0,_0.04)_0px_10px_10px_-5px]"),
                        children: [!i && s ? t.jsx("div", {
                            className: "z-0 h-[calc(100vh_-_66px)] mr-4 sticky -top-3 pt-7 pb-4 hidden xl:block",
                            children: t.jsx(Oi, {})
                        }) : t.jsx("div", {}), t.jsx("div", {
                            className: "outlet-wrapper z-10",
                            children: t.jsx(xo, {})
                        })]
                    }), t.jsx(Li, {
                        isOpen: u,
                        onClose: () => h(!1)
                    }), (p == null ? void 0 : p.width) > 767 && x && t.jsx("div", {
                        className: "flex-shrink-0 rounded z-[100] min-h-[200px] max-h-[240px] p-2 fixed left-[13px] bottom-[13px] bg-dark-700",
                        children: t.jsx(Xo, {
                            className: "max-w-[130px] mx-auto overflow-hidden",
                            meta: {
                                serve: "CWYIC5QM",
                                placement: "uiverseio",
                                format: "responsive"
                            }
                        })
                    }), t.jsx(zo, {
                        position: "top-center",
                        theme: "dark"
                    }), !i && t.jsx(Fi, {})]
                })
            }), t.jsx(lr, {}), t.jsx(tr, {})]
        })]
    })
}
const Uc = () => [{
        rel: "icon",
        href: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32"
    }, {
        rel: "icon",
        href: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16"
    }, {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180"
    }, {
        rel: "manifest",
        href: "/manifest.json"
    }, {
        rel: "icon",
        sizes: "192x192",
        href: "/android-chrome-192x192.png"
    }, {
        rel: "icon",
        sizes: "512x512",
        href: "/android-chrome-512x512.png"
    }, {
        rel: "icon",
        sizes: "256x256",
        href: "/android-chrome-256x256.png"
    }, {
        rel: "stylesheet",
        href: ki
    }, {
        rel: "stylesheet",
        href: es
    }, {
        rel: "stylesheet",
        href: Qo
    }, {
        rel: "stylesheet",
        href: ts
    }, {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
    }, {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
    }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swapp"
    }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    }],
    et = "Community-made library of free and customizable UI elements made with CSS or Tailwind. It's all free to copy and use in your projects. Uiverse can save you many hours spent on building & customizing UI components for your next project.",
    Wt = "Uiverse | The Largest Library of Open-Source UI elements",
    $c = () => [{
        httpEquiv: "Content-Type",
        content: "text/html; charset=utf-8"
    }, {
        title: Wt
    }, {
        property: "og:url",
        content: "https://uiverse.io"
    }, {
        property: "og:image",
        content: "https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/c802e23e-4d13-44ef-a2fe-46c467571900/public"
    }, {
        property: "og:description",
        content: et
    }, {
        name: "twitter:card",
        content: "summary_large_image"
    }, {
        name: "twitter:url",
        content: "https://uiverse.io/"
    }, {
        name: "twitter:title",
        content: Wt
    }, {
        name: "twitter:description",
        content: et
    }, {
        name: "twitter:image",
        content: "https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/c802e23e-4d13-44ef-a2fe-46c467571900/public"
    }, {
        name: "description",
        content: et
    }, {
        name: "theme-color",
        content: "#171717"
    }],
    Kc = ({
        actionResult: e
    }) => (e == null ? void 0 : e.type) !== "ai";

function Gc() {
    const e = go();
    return t.jsxs("html", {
        lang: "en",
        children: [t.jsxs("head", {
            children: [t.jsx("meta", {
                charSet: "utf-8"
            }), t.jsx("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1"
            }), t.jsx(Qt, {}), t.jsx(er, {})]
        }), t.jsxs("body", {
            className: "bg-dark-700",
            children: [t.jsxs("div", {
                className: "main-container dark flex flex-col items-center p-2 font-sans",
                children: [t.jsx(R, {
                    to: "/",
                    className: "logo-wrapper my-6",
                    children: t.jsx("img", {
                        className: "logo max-w-[80px]",
                        src: Ai,
                        alt: ""
                    })
                }), t.jsx(Vo, {
                    error: e,
                    isRootPage: !0
                })]
            }), t.jsx(lr, {}), t.jsx(tr, {})]
        })]
    })
}
export {
    Gc as ErrorBoundary, Bc as
    default, Uc as links, $c as meta, Kc as shouldRevalidate
};