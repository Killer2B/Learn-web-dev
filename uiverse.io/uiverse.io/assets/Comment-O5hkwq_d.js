import {
    j as e,
    r as x
} from "./jsx-runtime-Dvja6b4T.js";
import {
    N as j,
    G as I,
    ao as Y,
    W as z,
    ap as G
} from "./icons-pNqq09c6.js";
import {
    t as H
} from "./dates-D8Yi43wI.js";
import {
    M as R
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    B as g
} from "./Button-CFIJCp_o.js";
import {
    U as A
} from "./user-avatar-C7L6gCcp.js";
import {
    L as y,
    g as w,
    j as V
} from "./components-BuvoIJIj.js";
import {
    B as P
} from "./badge-C49ifptK.js";
import {
    C as W
} from "./CustomTooltip-J09bHzyh.js";
const q = ({
        contents: s,
        user: t
    }) => {
        const {
            content: a,
            replyHandle: r,
            date: m,
            tag: o,
            votecount: d
        } = s;
        return e.jsx(e.Fragment, {
            children: e.jsx("div", {
                className: "flex relative gap-4 sm:gap-6 bg-dark-600 py-4 px-4 sm:px-6 rounded-xl",
                children: e.jsxs("div", {
                    children: [e.jsxs("div", {
                        className: "flex mb-3",
                        children: [e.jsx(y, {
                            to: `/profile/${t.username}`,
                            children: e.jsx(A, {
                                user: t,
                                size: "md",
                                className: "w-[40px] h-[40px] mr-3"
                            })
                        }), e.jsxs("div", {
                            className: "flex flex-col sm:flex-row items-start sm:gap-4",
                            children: [e.jsx("div", {
                                children: e.jsx("div", {
                                    className: "font-bold text-gray-200 text-base mb-2 leading-3 sm:leading-normal",
                                    children: t.username
                                })
                            }), e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [e.jsx("span", {
                                    children: "You"
                                }), e.jsx("span", {
                                    className: "text-gray-400 block text-sm mt-[2px]",
                                    children: m
                                })]
                            })]
                        })]
                    }), e.jsxs("p", {
                        className: "text-gray-200 text-base block ",
                        children: [r, " ", a]
                    }), e.jsx("div", {
                        className: "sm:absolute top-3 right-4 mt-6 sm:mt-0 font-semibold flex items-center gap-2 -ml-2 sm:ml-0"
                    })]
                })
            })
        })
    },
    J = ({
        isOpen: s,
        onDeleteModalClose: t,
        contents: a,
        commentId: r,
        user: m
    }) => {
        const o = w();
        return e.jsx(R, {
            open: s,
            onClose: t,
            center: !0,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            showCloseIcon: !0,
            classNames: {
                overlay: "customOverlay",
                modal: "max-w-[770px] w-full rounded-3xl overflow-hidden border-2 border-dark-600/80 bg-dark-700 text-white sm:px-20 p-4 py-14"
            },
            children: e.jsxs("div", {
                className: "",
                children: [e.jsx("div", {
                    className: "text-2xl text-center font-bold pb-4",
                    children: "Are you sure you want to delete this comment?"
                }), e.jsx("div", {
                    className: "my-6",
                    children: e.jsx(q, {
                        contents: a,
                        user: m
                    })
                }), e.jsxs("p", {
                    className: "text-center pb-3",
                    children: [e.jsx("span", {
                        className: "text-yellow-300",
                        children: "Careful! "
                    }), " This action cannot be undone."]
                }), e.jsxs("div", {
                    className: "flex items-center justify-center gap-3 mt-3",
                    children: [e.jsxs(o.Form, {
                        action: "/resource/comments/delete",
                        method: "post",
                        children: [e.jsx("input", {
                            type: "hidden",
                            name: "commentId",
                            value: r
                        }), e.jsx(g, {
                            htmlType: "submit",
                            htmlName: "action",
                            type: "warning",
                            htmlValue: "delete",
                            icon: j("w-5 h-5"),
                            children: "Delete"
                        })]
                    }), e.jsx(g, {
                        type: "primary",
                        onClick: () => t(),
                        children: "Go back"
                    })]
                })]
            })
        })
    },
    K = ({
        isOpen: s,
        onDeleteModalClose: t,
        handleDiscard: a
    }) => (w(), e.jsx(R, {
        open: s,
        onClose: t,
        center: !0,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        showCloseIcon: !0,
        classNames: {
            overlay: "customOverlay",
            modal: "max-w-[650px] w-full rounded-3xl overflow-hidden border-2 border-dark-600/80 bg-dark-700 text-white sm:px-20 p-4 py-14"
        },
        children: e.jsxs("div", {
            className: "",
            children: [e.jsx("div", {
                className: "text-2xl text-center font-bold pb-4",
                children: "Are you sure you want to discard adding a comment?"
            }), e.jsxs("div", {
                className: "flex items-center justify-center gap-3 mt-3",
                children: [e.jsx(g, {
                    type: "warning",
                    htmlValue: "delete",
                    icon: j("w-5 h-5"),
                    onClick: a,
                    children: "Discard"
                }), e.jsx(g, {
                    type: "primary",
                    onClick: () => t(),
                    children: "Continue"
                })]
            })]
        })
    })),
    Q = ({
        comment: s,
        user: t,
        post: a
    }) => {
        var D, F;
        const r = w(),
            [m, o] = x.useState(!1),
            d = (r == null ? void 0 : r.state) === "submitting" || (r == null ? void 0 : r.state) === "loading",
            i = s.votes.find(n => n.user.id === (t == null ? void 0 : t.id));
        x.useEffect(() => {
            d || o(!1)
        }, [d]);
        const [l, v] = x.useState(""), [S, N] = x.useState(!1), [M, b] = x.useState(!1), k = s.user.username === (a == null ? void 0 : a.username), f = s.user.username === (t == null ? void 0 : t.username), C = H(s.createdDate), T = V(), E = () => {
            if (l) {
                b(!0);
                return
            }
            o(!1)
        }, B = () => {
            o(!1), b(!1), v("")
        }, L = () => {
            T("?create-account", {
                preventScrollReset: !0
            })
        };
        x.useEffect(() => {
            var n;
            (n = r.data) != null && n.error && console.error(r.data.error)
        }, [r]);
        const U = {
                content: s.content,
                replyHandle: ((D = s.parentComment) == null ? void 0 : D.user.username) || "",
                date: C,
                tag: f ? "You" : k ? "Author" : "",
                votecount: null
            },
            c = 244,
            O = l.length >= c,
            p = (i == null ? void 0 : i.value) === 1,
            u = (i == null ? void 0 : i.value) === -1,
            $ = s.commentType === "review" && new Date(s.createdDate) < new Date(a.updatedDate);
        return e.jsxs(e.Fragment, {
            children: [e.jsx(J, {
                isOpen: S,
                onDeleteModalClose: () => N(!1),
                contents: U,
                commentId: s.id,
                user: s.user
            }), e.jsx(K, {
                isOpen: M,
                onDeleteModalClose: () => b(!1),
                handleDiscard: B
            }), e.jsxs("div", {
                className: `flex relative gap-4 lg:gap-6 bg-dark-600 py-4 px-4 lg:px-6 rounded-xl overflow-hidden ${$?"opacity-60":""}`,
                style: {
                    wordBreak: "break-word"
                },
                children: [e.jsxs(r.Form, {
                    action: `/resource/comments/${i?"deleteVote":"vote"}`,
                    method: "post",
                    className: `${!t&&"opacity-60 pointer-events-none"} flex flex-col items-center gap-1 min-w-[44px] max-h-[100px] justify-center  rounded-lg overflow-hidden transition bg-gradient-to-t from-dark-500 via-transparent to-dark-500 ${d&&"opacity-70 cursor-default"} ${p&&r.formAction==="/resource/comments/deleteVote"||u&&r.formAction==="/resource/comments/deleteVote"?"animate-pulse":""}`,
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "commentId",
                        value: s == null ? void 0 : s.id
                    }), e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: a == null ? void 0 : a.id
                    }), e.jsx("button", {
                        className: "px-3 py-2 transition hover:bg-dark-300 cursor-pointer bg-opacity-30 bg-transparent border-none",
                        name: "value",
                        value: 1,
                        disabled: d || !t,
                        children: I(`w-5 h-5 ${p?"text-sky-400":"text-gray-400"} block`)
                    }), e.jsx("div", {
                        className: `text-sm font-semibold relative ${p?"text-sky-400":u?"text-red-400":"text-gray-400"}`,
                        children: e.jsx("div", {
                            className: "h-[20px] w-[44px] relative overflow-hidden",
                            children: e.jsxs("div", {
                                className: `flex flex-col gap-2 w-full h-[20px] absolute items-center justify-center text-center pointer-events-none transition transform ${p&&"duration-150 translate-y-7"} ${u&&"duration-150 -translate-y-7"}`,
                                children: [e.jsx("div", {
                                    className: "w-12",
                                    children: s.votes.reduce((n, h) => n + h.value, p ? 0 : 1)
                                }), e.jsx("div", {
                                    className: "w-12",
                                    children: s.votes.reduce((n, h) => n + h.value, 0)
                                }), e.jsx("div", {
                                    className: "w-12",
                                    children: s.votes.reduce((n, h) => n + h.value, u ? 0 : -1)
                                })]
                            })
                        })
                    }), e.jsx("button", {
                        className: "px-3 py-2 transition hover:bg-dark-300 cursor-pointer bg-opacity-30 bg-transparent border-none",
                        name: "value",
                        value: -1,
                        disabled: d || !t,
                        children: Y(`w-5 h-5 ${u?"text-red-400":"text-gray-400"} block`)
                    })]
                }), e.jsxs("div", {
                    children: [e.jsxs("div", {
                        className: "flex mb-3 items-center",
                        children: [e.jsx(y, {
                            to: `/profile/${s.user.username}`,
                            children: e.jsx(A, {
                                user: s.user,
                                size: "md",
                                className: "w-[50px] h-[50px] lg:w-[40px] lg:h-[40px] mr-3"
                            })
                        }), e.jsx("div", {
                            className: "flex flex-col items-start",
                            children: e.jsxs("div", {
                                className: "font-bold text-gray-200 text-base leading-2 flex items-center gap-4",
                                children: [e.jsx(y, {
                                    to: `/profile/${s.user.username}`,
                                    className: "block",
                                    children: s.user.username
                                }), s.commentType === "review" && e.jsxs(W, {
                                    trigger: e.jsx("div", {
                                        children: e.jsx(P, {
                                            variant: "info",
                                            children: "From Review"
                                        })
                                    }),
                                    children: [e.jsx("span", {
                                        className: "font-semibold text-gray-100 mb-1 block mt-2",
                                        children: "Review Comments"
                                    }), e.jsx("p", {
                                        className: "text-gray-300 text-sm max-w-[250px] leading-relaxed font-normal mb-2",
                                        children: "This comment is from a community review. Reviews are suggestions from other users to improve the submission, but do not represent official Uiverse feedback."
                                    })]
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "flex items-center gap-3 ml-3",
                            children: [f && e.jsx("span", {
                                className: "text-sm break-normal",
                                children: "You"
                            }), k && !f && e.jsx("span", {
                                className: "text-sm",
                                children: "Author"
                            }), e.jsx("span", {
                                className: " text-gray-400 block text-sm",
                                children: C
                            })]
                        })]
                    }), e.jsxs("p", {
                        className: "text-gray-200 text-base block",
                        children: [s.parentComment && e.jsxs("span", {
                            className: "font-semibold text-gray-50",
                            children: ["@", s.parentComment.user.username]
                        }), " ", s.content]
                    }), $ && e.jsxs("div", {
                        className: "mt-2 text-sm text-gray-400 flex items-center gap-2",
                        children: [z("w-4 h-4"), e.jsx("span", {
                            children: "This review was made before the latest update"
                        })]
                    }), e.jsx("div", {
                        className: "lg:absolute top-3 right-4 mt-6 lg:mt-0 font-semibold flex items-center gap-2 -ml-2 lg:ml-0",
                        children: e.jsxs(e.Fragment, {
                            children: [f && e.jsxs("button", {
                                onClick: () => N(!0),
                                className: "flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none",
                                children: [j("w-4 h-4"), "Delete"]
                            }), !s.parentCommentId && e.jsxs("button", {
                                onClick: t ? () => o(!0) : L,
                                className: "flex items-center gap-2 text-gray-400 font-sans cursor-pointer bg-transparent hover:bg-dark-400 px-2 py-2 rounded border-none ",
                                children: [G("w-4 h-4"), "Reply"]
                            })]
                        })
                    })]
                })]
            }, s.id), ((F = s.replies) == null ? void 0 : F.length) > 0 && e.jsxs("div", {
                className: "w-full relative flex mb-2",
                children: [e.jsx("div", {
                    className: "w-12 lg:w-24 h-full py-2 flex justify-center",
                    children: e.jsx("button", {
                        className: "h-full border-none bg-white transition opacity-30 w-1 rounded-full"
                    })
                }), e.jsx("div", {
                    className: "flex flex-col w-full gap-3",
                    children: s.replies.map(n => e.jsx(Q, {
                        comment: n,
                        user: t,
                        post: a
                    }, n.id))
                })]
            }), m && e.jsxs("div", {
                className: "w-full relative flex mb-2",
                children: [e.jsx("div", {
                    className: "w-12 lg:w-24 h-full py-2 flex justify-center",
                    children: e.jsx("button", {
                        className: "h-full border-none bg-sky-400  w-1 rounded-full"
                    })
                }), e.jsx("div", {
                    className: "flex flex-col w-full gap-3",
                    children: e.jsxs(r.Form, {
                        action: "/resource/comments/reply",
                        method: "post",
                        onSubmit: () => {
                            v("")
                        },
                        className: "relative p-4 [&:has(:focus-visible)]:ring-4 w-full bg-dark-600 flex items-center focus-visible:border-sky-400 gap-4 focus-visible:ring-sky-400  rounded-xl overflow-hidden",
                        children: [e.jsx("input", {
                            type: "hidden",
                            name: "postId",
                            value: a == null ? void 0 : a.id
                        }), e.jsx("input", {
                            type: "hidden",
                            name: "parentCommentUserId",
                            value: s.user.id
                        }), e.jsx("input", {
                            type: "hidden",
                            name: "commentId",
                            value: s.id
                        }), e.jsx("input", {
                            type: "text",
                            name: "content",
                            id: "content",
                            className: "w-full rounded-lg text-base flex-1 border-solid border border-dark-300 block font-sans bg-dark-500 text-gray-200 placeholder:text-gray-400 outline-none focus:outline-none focus:ring-0 focus:border-gray-700 px-4 py-3",
                            placeholder: "Add a comment...",
                            onChange: n => v(n.target.value),
                            autoFocus: !0
                        }), e.jsxs("button", {
                            type: "submit",
                            disabled: !l || O,
                            className: "group relative overflow-hidden text-transparent disabled:bg-dark-400 px-8 py-3 font-sans  disabled:cursor-auto bg-blue-800 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg transition",
                            children: ["Send", e.jsxs("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: [e.jsxs("p", {
                                    className: `${l.length>c-30?`translate-y-0 opacity-100 ${l.length<c&&"group-hover:translate-y-12 group-hover:opacity-0"}`:"translate-y-12 opacity-0"} transform transition absolute flex text-white`,
                                    children: [e.jsx("span", {
                                        className: `${O?"text-white":""}  `,
                                        children: l.length
                                    }), e.jsxs("span", {
                                        className: "opacity-70",
                                        children: ["/", c]
                                    })]
                                }), e.jsx("span", {
                                    className: `${l.length>c-30?`-translate-y-12 opacity-0 ${l.length<c&&"group-hover:translate-y-0 group-hover:opacity-100"}`:"translate-y-0 opacity-100"} transform transition absolute text-white`,
                                    children: "Send"
                                })]
                            })]
                        }), e.jsx("button", {
                            type: "button",
                            className: "px-4 py-3 font-sans bg-transparent transition hover:bg-dark-400 border-none cursor-pointer h-full text-offwhite font-semibold rounded-lg",
                            onClick: E,
                            children: I("w-5 h-5 transform rotate-45")
                        })]
                    })
                })]
            })]
        })
    };
export {
    Q as C
};