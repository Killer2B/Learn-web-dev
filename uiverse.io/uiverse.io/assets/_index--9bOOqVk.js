import {
    r as c,
    j as e
} from "./jsx-runtime-Dvja6b4T.js";
import {
    E as N
} from "./ErrorContent-Ck5J9Q_i.js";
import {
    C as u
} from "./Card-CSbNp-yI.js";
import {
    ai as k,
    y as z,
    o as C,
    _ as S,
    aJ as H,
    aK as P,
    v as g,
    a6 as U,
    ah as I,
    aL as L,
    aM as T
} from "./icons-pNqq09c6.js";
import {
    B as f
} from "./Button-CFIJCp_o.js";
import {
    j as _,
    L as m,
    u as B,
    a as D
} from "./components-BuvoIJIj.js";
import {
    c as M
} from "./clsx-B-dksMZM.js";
import {
    t as E
} from "./bundle-mjs-BOZU2X2x.js";
import {
    U as y
} from "./user-avatar-C7L6gCcp.js";
import {
    c as O
} from "./utils-OWsBmDA3.js";
import "./index-browser-CJEdsfDC.js";
import "./constants-nXafxhpt.js";
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
import "./avatar-B5HRkzDo.js";
const $ = ({
        theme: t
    }) => {
        const [s, r] = c.useState(""), a = _();
        return e.jsxs("form", {
            className: "flex w-full relative z-[21] p-1 mx-auto  hover:scale-105 bg-gray-300 shadow-lg overflow-visible [&:has(:focus-visible)]:ring-4 rounded-2xl transition-transform [&:has(:focus-visible)]:ring-indigo-400 [&:has(:focus-visible)]:border-indigo-400",
            onSubmit: l => {
                l.preventDefault(), a(s ? `/elements?search=${s}` : "/elements")
            },
            children: [e.jsx("input", {
                type: "text",
                value: s,
                name: "search",
                id: "search",
                autoComplete: "off",
                placeholder: "Search for components, styles, creators...",
                className: "block w-full px-6 pl-12 py-4 pr-2 mr-px font-sans ouline-gray-200 font-normal outline-none rounded-xl text-base border-none focus:ring-0 bg-gray-300 text-dark-900 placeholder:text-gray-500 shadow-sm",
                onChange: l => r(l.target.value)
            }), k("w-5 h-5 text-gray-600 absolute left-6 top-1/2 -translate-y-1/2"), e.jsx("button", {
                type: "submit",
                className: "flex items-center px-8 py-1.5 text-base gap-1.5 font-sans font-semibold transition-colors bg-indigo-600 hover:bg-indigo-700 text-offwhite group border-none cursor-pointer rounded-xl pointer",
                children: e.jsx("span", {
                    children: "Search"
                })
            })]
        })
    },
    F = "/assets/home-page-elements-HQ1obJle.png";

function w(...t) {
    return E(M(t))
}

function d({
    children: t,
    direction: s = "left",
    pauseOnHover: r = !1,
    reverse: a = !1,
    fade: l = !1,
    className: o,
    innerClassName: n,
    numberOfCopies: i = 3,
    style: p = {},
    ...x
}) {
    return e.jsx("div", {
        className: w("group flex gap-[1rem] overflow-hidden", s === "left" ? "flex-row" : "flex-col", o),
        style: {
            maskImage: l ? `linear-gradient(${s==="left"?"to right":"to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0,
            WebkitMaskImage: l ? `linear-gradient(${s==="left"?"to right":"to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : void 0,
            ...p
        },
        ...x,
        children: Array(i).fill(0).map((j, h) => e.jsx("div", {
            className: w("flex justify-around gap-[1rem] [--gap:1rem] shrink-0", s === "left" ? "animate-marquee-left flex-row" : "animate-marquee-up flex-col", r && "group-hover:pause", a && "direction-reverse", n),
            children: t
        }, h))
    })
}
const b = ({
        creator: t,
        className: s = ""
    }) => {
        var r;
        return e.jsxs(m, {
            to: `/profile/${t.username}`,
            className: "flex gap-4 bg-dark-800 p-3 pl-5 rounded-xl items-center border-dark-600/80 border-2",
            children: [e.jsx(y, {
                user: t,
                size: "lg",
                className: "w-[48px] h-[48px]"
            }), e.jsxs("div", {
                className: "pr-3",
                children: [e.jsx("div", {
                    className: "font-semibold max-w-[200px] font-display truncate text-lg text-offwhite",
                    children: t.username
                }), e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [e.jsxs("div", {
                        className: " text-gray-200 font-semibold py-1 rounded-full font-sm",
                        children: [e.jsx("span", {
                            className: "text-gray-400",
                            children: t._count.post
                        }), " ", e.jsx("span", {
                            className: "text-gray-400",
                            children: t._count.post === 1 ? "post" : "posts"
                        })]
                    }), e.jsxs("div", {
                        className: "flex font-semibold gap-1.5 py-1 leading-none items-center rounded-full font-sm",
                        children: [z("w-5 h-5 text-indigo-400"), " ", ((r = t.score) == null ? void 0 : r.toLocaleString("en-US")) || 0]
                    })]
                })]
            })]
        }, t.username)
    },
    G = ({
        creators: t
    }) => {
        const s = t.length / 3,
            r = t.slice(0, s),
            a = t.slice(s, s * 2),
            l = t.slice(s * 2);
        return e.jsxs("div", {
            className: "relative overflow-hidden pb-28",
            children: [e.jsx("h2", {
                className: "mb-12 text-4xl font-bold text-center font-display",
                children: "Top Creators"
            }), e.jsxs("div", {
                className: "relative z-10 flex flex-col gap-3",
                children: [e.jsx(d, {
                    className: "",
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "70s"
                    },
                    children: r.map((o, n) => e.jsx(b, {
                        creator: o
                    }, o.username))
                }), e.jsx(d, {
                    className: "",
                    reverse: !0,
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "65s"
                    },
                    children: a.map((o, n) => e.jsx(b, {
                        creator: o
                    }, o.username))
                }), e.jsx(d, {
                    className: "",
                    reverse: !1,
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "60s"
                    },
                    children: l.map((o, n) => e.jsx(b, {
                        creator: o
                    }, o.username))
                })]
            }), e.jsx("div", {
                className: "max-w-[1600px] w-full rounded-full h-[396px] bg-gradient-to-b z-0 from-transparent from-0% via-90% to-100% via-indigo-500 to-transparent absolute bg-opacity-30 left-1/2 -translate-x-1/2 bottom-[-300px] blur-[100px]"
            })]
        })
    },
    q = () => {
        const [t, s] = c.useState(null);
        return c.useEffect(() => {
            fetch("https://discord.com/api/guilds/1071161875842211840/widget.json").then(r => r.json()).then(r => {
                s(r)
            })
        }, []), e.jsxs("section", {
            className: "relative z-10 w-full h-full px-10 py-24 overflow-hidden ",
            children: [t && t.presence_count && e.jsxs("p", {
                className: "relative flex items-center gap-4 mb-4 text-green-400 max-w-fit",
                children: [e.jsxs("span", {
                    className: "relative flex w-3 h-3",
                    children: [e.jsx("span", {
                        className: "absolute inline-flex w-full h-full bg-green-400 rounded-full animate-ping opacity-30"
                    }), e.jsx("span", {
                        className: "relative inline-flex w-3 h-3 bg-green-500 rounded-full"
                    })]
                }), " ", t.presence_count, " online"]
            }), e.jsx("h2", {
                className: "text-xl font-bold sm:text-3xl font-display",
                children: "Join the Discord community!"
            }), e.jsx("p", {
                className: "text-lg max-w-[290px] md:max-w-full text-gray-400",
                children: "An open space for UI designers and developers"
            }), e.jsxs("a", {
                href: "https://discord.gg/KD8ba2uUpT",
                target: "_blank",
                className: "px-4 py-2.5 font-sans font-semibold transition-colors duration-200 flex items-center gap-2.5 border-none max-w-fit rounded-lg bg-[#5865f2] mt-10",
                rel: "noopener",
                children: [C("w-5 h-5"), "Join Discord"]
            }), e.jsx("div", {
                className: "absolute left-[-200px] top-[-200px] -z-10 w-[800px] h-[450px] bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-10 blur-3xl ",
                "aria-hidden": "true"
            })]
        })
    },
    J = () => e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "relative z-10 flex flex-wrap items-center gap-5",
            children: [S("h-16 w-16"), e.jsxs("div", {
                children: [e.jsxs("h2", {
                    className: "mb-1 text-xl font-bold sm:text-3xl font-display",
                    children: ["Uiverse", " ", e.jsx("span", {
                        className: "inline-block text-transparent bg-gradient-to-br from-indigo-500 via-fuchisa-500 to-fuchsia-400 bg-clip-text",
                        children: "Galaxy"
                    })]
                }), e.jsx("p", {
                    className: "text-lg text-gray-400",
                    children: "The largest Open-Source UI Library, available on GitHub as well!"
                }), e.jsx(m, {
                    to: "https://github.com/uiverse-io/galaxy",
                    target: "_blank",
                    className: "font-mono text-sm text-gray-500 underline underline-offset-2",
                    children: "uiverse-io/galaxy"
                })]
            })]
        }), e.jsxs(f, {
            href: "https://github.com/uiverse-io/galaxy",
            target: "_blank",
            type: "secondary-with-bg",
            className: " relative z-[1]",
            children: [H("w-5 h-5 text-yellow-500"), " Star on GitHub"]
        }), e.jsx("div", {
            className: "hidden absolute left-1/2 top-full z-0 -translate-x-1/2 w-[100%] h-[150px] bg-gradient-to-br from-fuchsia-500 to-indigo-500 rounded-full opacity-20 blur-3xl ",
            "aria-hidden": "true"
        }), e.jsx("div", {
            className: "hidden absolute right-0 top-[-200px] z-0 w-[800px] h-[450px] bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-10 blur-3xl ",
            "aria-hidden": "true"
        }), e.jsx("div", {
            className: "absolute left-1/2 bottom-[80%] z-0 -translate-x-1/2 w-[100%] h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-20 blur-3xl ",
            "aria-hidden": "true"
        }), e.jsx("div", {
            className: "hidden absolute right-[-7%] bottom-0 h-[300px] w-[100%] bg-gradient-to-r from-transparent via-indigo-500 to-fuchsia-400 z-0 transform-gpu opacity-20 blur-3xl"
        })]
    }),
    R = "/assets/figma-CmpLUCXr.png",
    v = ({
        value: t,
        isHighlighted: s
    }) => e.jsx(m, {
        to: `/tags/${t}`,
        className: O("bg-gradient-to-br  rounded-md px-3 py-2 m-1 overflow-visible", s ? "text-indigo-400 opacity-80 from-dark-500/80 to-dark-700" : "text-gray-300 opacity-50 from-dark-600 to-dark-700"),
        children: t
    }),
    A = ({
        tags: t
    }) => {
        const [s, r] = c.useState({
            firstPart: [],
            secondPart: [],
            thirdPart: []
        });
        return c.useEffect(() => {
            const a = Math.floor(t.length / 3),
                l = t.slice(0, a),
                o = t.slice(a, a * 2),
                n = t.slice(a * 2),
                i = p => {
                    let x = new Set;
                    for (; x.size < 2;) x.add(Math.floor(Math.random() * p.length));
                    return p.map((j, h) => ({ ...j,
                        isHighlighted: x.has(h)
                    }))
                };
            r({
                firstPart: i(l),
                secondPart: i(o),
                thirdPart: i(n)
            })
        }, [t]), e.jsxs("div", {
            className: "pt-10 pb-0 relative",
            children: [e.jsx("div", {
                className: "absolute left-1/2 top-[80%] z-0 -translate-x-1/2 w-[100%] h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-full opacity-20 blur-3xl ",
                "aria-hidden": "true"
            }), e.jsxs("div", {
                className: "flex flex-col gap-[10px] mt-auto pb-6",
                children: [e.jsx(d, {
                    className: "",
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "130s"
                    },
                    innerClassName: "gap-[10px]",
                    children: s.firstPart.map(({
                        value: a,
                        isHighlighted: l
                    }, o) => e.jsx(v, {
                        value: a,
                        isHighlighted: !!l
                    }, a))
                }), e.jsx(d, {
                    className: "",
                    reverse: !0,
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "130s"
                    },
                    innerClassName: "gap-[10px]",
                    children: s.secondPart.map(({
                        value: a,
                        isHighlighted: l
                    }, o) => e.jsx(v, {
                        value: a,
                        isHighlighted: !!l
                    }, a))
                }), e.jsx(d, {
                    className: "",
                    reverse: !1,
                    fade: !0,
                    pauseOnHover: !0,
                    style: {
                        "--duration": "130s"
                    },
                    innerClassName: "gap-[10px]",
                    children: s.thirdPart.map(({
                        value: a,
                        isHighlighted: l
                    }, o) => e.jsx(v, {
                        value: a,
                        isHighlighted: !!l
                    }, a))
                })]
            }), e.jsx("h2", {
                className: "mb-12 text-3xl font-bold font-display text-gray-100 text-center relative z-10",
                children: "Browse by Tags"
            })]
        })
    },
    V = ({
        tags: t
    }) => e.jsxs("section", {
        className: "relative z-10 flex flex-col gap-4 px-4 mx-auto mb-24 sm:container sm:px-0",
        children: [e.jsx("div", {
            className: "w-full overflow-hidden border-2 bg-dark-800 rounded-3xl border-dark-600/80",
            children: e.jsx(A, {
                tags: t
            })
        }), e.jsxs("div", {
            className: "flex flex-wrap gap-4",
            children: [e.jsx("div", {
                className: "bg-dark-800 min-w-[300px] w-full min-h-[300px] flex-1 rounded-3xl overflow-hidden border-dark-600/80 border-2",
                children: e.jsx(q, {})
            }), e.jsx("div", {
                className: "bg-dark-800 min-h-[440px] md:min-h-[300px] min-w-[300px] w-full flex-1 rounded-3xl max-w-[700px] overflow-hidden border-dark-600/80 border-2",
                children: e.jsxs("section", {
                    className: "relative z-10 flex items-end w-full h-full px-10 py-10 overflow-hidden ",
                    children: [e.jsxs("div", {
                        className: "relative z-10 flex flex-wrap items-center gap-4",
                        children: [P("h-12 w-12"), e.jsxs("div", {
                            children: [e.jsx("h2", {
                                className: "text-xl font-bold sm:text-3xl font-display",
                                children: "Use in Figma"
                            }), e.jsx("p", {
                                className: "text-lg text-gray-400",
                                children: "Copy and paste to Figma from any element page"
                            })]
                        })]
                    }), e.jsx(m, {
                        to: "https://uiverse.io/adamgiebl/soft-gecko-85",
                        className: "w-[400px] md:w-full absolute top-0 border-dark-600/80 border-2 sm:-right-26 md:-top-10 md:right-0 max-w-[500px] overflow-hidden rounded-bl-3xl",
                        children: e.jsx("img", {
                            src: R,
                            alt: "Figma",
                            className: "w-full"
                        })
                    }), e.jsx("div", {
                        className: "absolute right-[-590px] md:right-[-400px] top-0 md:top-[-200px] -z-10 w-[1000px] h-[450px] bg-gradient-to-br from-[#f24e1e] to-[#1abcfe] rounded-full opacity-30 blur-3xl ",
                        "aria-hidden": "true"
                    })]
                })
            })]
        }), e.jsx("div", {
            className: "min-h-[200px] py-8 bg-dark-800 border-dark-600/80 border-2 px-14 content-center w-full flex sm:justify-between gap-4 flex-wrap items-center relative overflow-hidden rounded-3xl",
            children: e.jsx(J, {})
        })]
    });

function Le() {
    const {
        elements: t,
        countPosts: s,
        countUsers: r,
        creators: a,
        tags: l,
        postsInLastWeek: o,
        randomUserImages: n
    } = B();
    return e.jsxs("div", {
        className: "overflow-x-hidden",
        children: [e.jsxs("div", {
            className: "relative w-full md:hidden",
            children: [e.jsx("img", {
                src: F,
                alt: "",
                className: "w-full object-cover h-[400px] object-top"
            }), e.jsx("div", {
                className: "absolute left-0 bottom-0 z-0 w-full h-[300px] pointer-events-none bg-gradient-to-b from-transparent from-0% via-[70%] to-100% via-dark-600 to-dark-700"
            })]
        }), e.jsxs("div", {
            className: "relative px-4 pb-0 pt-0 md:pt-[100px] -mt-[150px] mb-10 md:mt-0 mx-auto flex flex-col items-center justify-center",
            children: [e.jsx("div", {
                className: "max-w-[1600px] w-full rounded-full h-[200px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-gray-700 to-transparent absolute left-1/2 -translate-x-1/2 md:bottom-[-20px] blur-[100px]"
            }), e.jsxs("div", {
                className: "text-green-400 text-sm flex items-center gap-3 mb-4 font-bold uppercase flex-col sm:flex-row",
                children: [e.jsxs("span", {
                    className: "whitespace-nowrap flex items-center",
                    children: [g("w-5 h-5 mr-2"), e.jsxs(m, {
                        to: "/elements?orderBy=recent",
                        className: "underline underline-offset-2 hover:text-green-300 mr-1",
                        children: [o, " new elements"]
                    }), " ", "this week!"]
                }), e.jsx("div", {
                    className: "flex -space-x-2 ml-2",
                    children: n.map(i => e.jsx(m, {
                        to: `/profile/${i.username}`,
                        className: "rounded-full ring-2 ring-dark-700 bg-dark-700 w-7 h-7 overflow-hidden hover:ring-indigo-400 hover:scale-110 transition-all",
                        children: e.jsx(y, {
                            user: i,
                            size: "sm",
                            className: "w-7 h-7"
                        })
                    }, i.username))
                })]
            }), e.jsx("h1", {
                className: "max-w-[50rem] sm:max-w-[49rem] px-3 md:px-0 sm:text-5xl md:text-7xl text-4xl font-bold font-display md:leading-[1.1em] text-center z-10 bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text",
                children: "The Largest Library of Open-Source UI"
            }), e.jsxs("h2", {
                className: "z-10 font-semibold mb-12  mt-4 text-center max-w-[390px] sm:max-w-[410px] px-4 text-gray-400",
                children: ["Community-built library of UI elements.", e.jsx("br", {}), "Copy as HTML/CSS, Tailwind, React and Figma."]
            }), e.jsx("div", {
                className: "md:mb-[-80px] gap-3 max-w-[530px] w-full",
                children: e.jsx($, {
                    theme: t[0].theme
                })
            }), e.jsxs("div", {
                className: "flex flex-wrap justify-center gap-4 mt-8 md:hidden",
                children: [e.jsxs(f, {
                    href: "/elements",
                    type: "primary",
                    className: " z-[21] max-w-fit mx-auto bg-indigo-600 hover:bg-indigo-700 relative pr-12 py-3 pl-10",
                    children: [g("h-6 w-6 mr-1.5"), "Browse all elements"]
                }), e.jsxs(f, {
                    className: "gap-4 py-3 pl-8 pr-10 font-semibold rounded-lg",
                    type: "secondary-with-bg",
                    href: "https://github.com/uiverse-io/galaxy",
                    target: "_blank",
                    children: [U(), " Star on GitHub"]
                })]
            })]
        }), e.jsxs("div", {
            className: "-ml-5 pb-12 hidden md:block overflow-visible bg-gradient-to-t from-transparent from-0% via-[95%] to-100% via-dark-700 to-transparent pt-6 relative z-20",
            children: [e.jsx("div", {
                className: "grid-cols-[repeat(10,_274px)] grid grid-flow-col content-stretch auto-cols-auto gap-3.5 justify-center items-stretch mb-3.5 overflow-visible",
                children: t.slice(0, 10).map(i => e.jsx(u, {
                    post: { ...i,
                        theme: "dark"
                    },
                    className: "max-h-[230px]",
                    isCompact: !0,
                    hideVariationCount: !0,
                    animate: !1
                }, i.id))
            }), e.jsx("div", {
                className: "pr-40 grid-cols-[repeat(10,_274px)] grid grid-flow-col content-stretch auto-cols-auto gap-3.5 justify-center items-stretch mb-3.5 overflow-visible",
                children: t.slice(10, 20).map(i => e.jsx(u, {
                    post: { ...i,
                        theme: "dark"
                    },
                    className: "max-h-[230px]",
                    isCompact: !0,
                    hideVariationCount: !0,
                    animate: !1
                }, i.id))
            }), e.jsx("div", {
                className: "grid-cols-[repeat(10,_274px)] grid grid-flow-col content-stretch auto-cols-auto gap-3.5 justify-center items-stretch mb-3.5 overflow-visible",
                children: t.slice(20, 30).map(i => e.jsx(u, {
                    post: { ...i,
                        theme: "dark"
                    },
                    className: "max-h-[230px]",
                    isCompact: !0,
                    hideVariationCount: !0,
                    animate: !1
                }, i.id))
            }), e.jsx("div", {
                className: "absolute z-20 bottom-12 left-[-30%] right-[-30%] w-auto h-[400px] pointer-events-none bg-gradient-to-b from-transparent to-dark-700"
            }), e.jsxs(f, {
                href: "/elements",
                type: "primary",
                className: "z-[21] max-w-fit -top-11 mx-auto relative pr-12 py-3 pl-10",
                children: [g("h-6 w-6 mr-1.5"), "Browse all elements"]
            })]
        }), e.jsxs("div", {
            className: "flex z-[1] py-40 px-6 pt-28 items-center justify-center flex-wrap gap-10 relative",
            children: [e.jsxs("div", {
                className: "text-center max-w-[200px] flex flex-col items-center",
                children: [I("w-8 h-8 md:w-10 md:h-10 mb-4 text-gray-400"), e.jsx("span", {
                    className: "text-4xl font-extrabold font-display md:text-6xl",
                    children: s == null ? void 0 : s.toLocaleString("en-US")
                }), e.jsx("p", {
                    className: "mt-2 text-base font-semibold text-gray-400",
                    children: "Community-made UI elements"
                })]
            }), e.jsxs("div", {
                className: "text-center max-w-[200px] flex flex-col items-center",
                children: [L("w-8 h-8 md:w-10 md:h-10 mb-4 text-gray-400"), e.jsx("span", {
                    className: "text-4xl font-extrabold font-display md:text-6xl",
                    children: "100%"
                }), e.jsx("p", {
                    className: "mt-2 text-base font-semibold text-gray-400",
                    children: "Free for personal and commercial use"
                })]
            }), e.jsxs("div", {
                className: "text-center max-w-[200px] flex flex-col items-center",
                children: [T("w-8 h-8 md:w-10 md:h-10 mb-4 text-gray-400"), e.jsx("span", {
                    className: "text-4xl font-extrabold font-display md:text-6xl",
                    children: r == null ? void 0 : r.toLocaleString("en-US")
                }), e.jsx("p", {
                    className: "mt-2 text-base font-semibold text-gray-400",
                    children: "Contributors to the community"
                })]
            })]
        }), e.jsx(V, {
            tags: l
        }), e.jsx(G, {
            creators: a
        })]
    })
}

function Te() {
    const t = D();
    return e.jsx(N, {
        error: t
    })
}
export {
    Te as ErrorBoundary, Le as
    default
};