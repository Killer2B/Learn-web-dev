import {
    j as e
} from "./jsx-runtime-Dvja6b4T.js";
import {
    q as x,
    r,
    t as c,
    u as l,
    v as f,
    i as p,
    w as h,
    y as j
} from "./icons-pNqq09c6.js";
import {
    i as t
} from "./index-browser-CJEdsfDC.js";
import {
    t as g
} from "./dates-D8Yi43wI.js";
import {
    L as i
} from "./components-BuvoIJIj.js";
const y = (o, n) => {
        switch (o) {
            case t.notification_type.approved:
                return 100;
            case t.notification_type.variationApproved:
                return 20;
            case t.notification_type.favorites:
                return 10 * (n == null ? void 0 : n.count);
            case t.notification_type.custom:
                return (n == null ? void 0 : n.points) || 0;
            default:
                return 0
        }
    },
    E = ({
        type: o,
        variables: n = "{}",
        createdDate: a,
        read: d
    }) => {
        let s;
        try {
            s = JSON.parse(n)
        } catch {
            return null
        }
        const {
            content: u,
            icon: m
        } = w(o, s);
        return e.jsxs("li", {
            className: `pl-3 gap-3 w-full inline-flex  ${!d&&"unread"}`,
            children: [e.jsx("div", {
                className: "flex-[0_0_40px] mt-1 items-start justify-center min-w-0 pt-2 pb-2",
                children: m
            }), e.jsxs("div", {
                className: "min-w-0 pt-3 pb-3 pr-3 font-normal ",
                children: [e.jsx("p", {
                    className: "text-sm font-medium",
                    children: u
                }), e.jsxs("span", {
                    className: "flex items-center text-xs font-normal text-gray-400",
                    suppressHydrationWarning: !0,
                    children: [g(a), " ", e.jsx(N, {
                        points: y(o, s)
                    })]
                })]
            })]
        })
    },
    w = (o, n) => {
        switch (o) {
            case t.notification_type.approved:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: ["Your", " ", e.jsxs(i, {
                            to: n.link ? `${n.link}?approved` : "",
                            className: "underline underline-offset-2 decoration-green-400",
                            children: [" ", e.jsx("b", {
                                className: "text-green-400",
                                children: n.typeOfElement
                            })]
                        }), " ", "has been approved! You can now customize it", " ", e.jsxs(i, {
                            to: n.link ? `${n.link}?approved` : "",
                            className: "underline underline-offset-2 decoration-green-400",
                            children: [" ", e.jsx("b", {
                                className: "text-green-400",
                                children: "here"
                            })]
                        }), "."]
                    }),
                    icon: e.jsx("div", {
                        className: "text-green-800 bg-green-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center",
                        children: h("h-5 w-5")
                    })
                };
            case t.notification_type.favorites:
                return {
                    content: e.jsx(e.Fragment, {
                        children: n.count === 1 ? e.jsx(e.Fragment, {
                            children: "Someone has favorited your post!"
                        }) : e.jsxs(e.Fragment, {
                            children: ["There are", e.jsxs("b", {
                                className: "text-amber-300",
                                children: [" ", n.count, " new favorites", " "]
                            }), "on your posts!"]
                        })
                    }),
                    icon: e.jsx("div", {
                        className: "rounded-lg w-[40px] h-[40px] flex items-center justify-center bg-amber-300 text-amber-700",
                        children: p("h-5 w-5")
                    })
                };
            case t.notification_type.views:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: ["Congratulations, your", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2",
                            children: e.jsx("b", {
                                children: n.typeOfElement
                            })
                        }), " ", "has reached ", e.jsxs("b", {
                            className: "text-blue-400",
                            children: [n.views, " views"]
                        }), "!"]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center blue",
                        children: f("h-5 w-5")
                    })
                };
            case t.notification_type.challenge:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: ["Help us pick the winner of the space-themed", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2",
                            children: "CSS challenge"
                        }), "!"]
                    }),
                    icon: e.jsx("div", {
                        className: "rounded-lg w-[40px] h-[40px] flex items-center justify-center purple text-offwhite",
                        children: c("h-5 w-5")
                    })
                };
            case t.notification_type.variationApproved:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: ["Your", " ", e.jsxs(i, {
                            to: n.link ? `${n.link}?approved` : "",
                            className: "underline underline-offset-2 decoration-blue-400",
                            children: [" ", e.jsx("b", {
                                className: "text-blue-400",
                                children: "variation"
                            })]
                        }), " ", "has been approved! You can now customize it", " ", e.jsxs(i, {
                            to: n.link ? `${n.link}?approved` : "",
                            className: "underline underline-offset-2 decoration-blue-400",
                            children: [" ", e.jsx("b", {
                                className: "text-blue-400",
                                children: "here"
                            })]
                        }), "."]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-300 rounded-lg w-[40px] h-[40px] flex items-center justify-center",
                        children: l("h-5 w-5")
                    })
                };
            case t.notification_type.variation:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: [e.jsx(i, {
                            to: `/profile/${n.username}`,
                            className: "underline underline-offset-2",
                            children: n.username
                        }) || "Someone", " ", "has made a", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2 decoration-blue-400",
                            children: e.jsx("b", {
                                className: "text-blue-400",
                                children: "variation"
                            })
                        }), " ", "on your ", n.typeOfElement, "!"]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-300 rounded-lg w-[40px] h-[40px] flex items-center justify-center",
                        children: l("h-5 w-5")
                    })
                };
            case t.notification_type.newChallenge:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: ["New ", e.jsx("b", {
                            className: "text-violet-400",
                            children: "Challenge"
                        }), " is now open!", e.jsx(i, {
                            to: n.link || "",
                            className: "inline-flex justify-center px-2 py-1 mt-2 mb-2 text-sm font-semibold text-white transition-colors border border-transparent rounded-md shadow-sm bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500",
                            children: "View challenge"
                        })]
                    }),
                    icon: e.jsx("div", {
                        className: "rounded-lg w-[40px] h-[40px] flex items-center justify-center purple text-offwhite bg-violet-500",
                        children: c("h-5 w-5")
                    })
                };
            case t.notification_type.comment:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: [n.username, " commented on your", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2",
                            children: e.jsx("b", {
                                children: n.typeOfElement
                            })
                        }), "!"]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center blue",
                        children: r("h-5 w-5")
                    })
                };
            case t.notification_type.commentReply:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: [n.username, " replied to your", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2",
                            children: e.jsx("b", {
                                children: "comment"
                            })
                        }), "!"]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center blue",
                        children: r("h-5 w-5")
                    })
                };
            case t.notification_type.reviewComment:
                return {
                    content: e.jsxs(e.Fragment, {
                        children: [n.username, " added feedback to your", " ", e.jsx(i, {
                            to: n.link || "",
                            className: "underline underline-offset-2 font-semibold",
                            children: "post"
                        }), " ", "in review."]
                    }),
                    icon: e.jsx("div", {
                        className: "text-blue-800 bg-blue-400 rounded-lg w-[40px] h-[40px] flex items-center justify-center blue",
                        children: r("h-5 w-5")
                    })
                };
            default:
                return {
                    content: e.jsx(e.Fragment, {
                        children: n.text
                    }),
                    icon: e.jsx("div", {
                        className: "rounded-lg w-[40px] h-[40px] flex items-center justify-center bg-amber-300 text-amber-600",
                        children: x("h-5 w-5")
                    })
                }
        }
    },
    N = ({
        points: o
    }) => o === 0 ? null : e.jsxs("span", {
        className: "flex items-center gap-1.5 px-2 py-1 text-sm font-semibold rounded-full text-offwhite",
        children: [j("w-5 h-5 text-indigo-400"), o]
    }),
    C = {
        [t.notification_type.approved]: {
            link: "",
            typeOfElement: ""
        },
        [t.notification_type.variationApproved]: {
            link: "",
            typeOfElement: ""
        },
        [t.notification_type.variation]: {
            link: "",
            typeOfElement: "",
            username: ""
        },
        [t.notification_type.favorites]: {
            count: 0
        },
        [t.notification_type.views]: {
            link: "",
            typeOfElement: "",
            views: 0
        },
        [t.notification_type.challenge]: {
            link: ""
        },
        [t.notification_type.newChallenge]: {
            link: ""
        },
        [t.notification_type.custom]: {
            text: "",
            points: 0,
            link: ""
        },
        [t.notification_type.comment]: {
            username: "",
            link: "",
            typeOfElement: ""
        },
        [t.notification_type.commentReply]: {
            username: "",
            link: ""
        }
    };
export {
    E as N, C as n
};