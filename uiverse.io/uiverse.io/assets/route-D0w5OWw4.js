import {
    r as x,
    j as e
} from "./jsx-runtime-Dvja6b4T.js";
import {
    e as Y
} from "./editors-Dq4Fjxe9.js";
import {
    d as V,
    e as S,
    u as z,
    c as N
} from "./utils-OWsBmDA3.js";
import {
    b as H,
    c as J,
    R as W,
    S as Q,
    P as Z,
    a as ee,
    I as se
} from "./ControlsComponents-BJfRgjNb.js";
import {
    u as te,
    C as ae
} from "./Controls-C4XqEIH8.js";
import {
    i as u
} from "./index-browser-CJEdsfDC.js";
import {
    B
} from "./react-toastify.esm-EkDeeNHo.js";
import {
    B as m
} from "./Button-CFIJCp_o.js";
import {
    aF as T,
    M as I,
    aG as re,
    G as R,
    p as ie,
    x as le,
    a4 as D,
    a5 as ne,
    q as de,
    E as oe,
    K as A,
    L as ce,
    ab as me,
    v as xe,
    a0 as ue,
    k as he,
    X as pe
} from "./icons-pNqq09c6.js";
import {
    U as E
} from "./user-avatar-C7L6gCcp.js";
import {
    g as k,
    L as p,
    e as K,
    u as ge,
    a as fe
} from "./components-BuvoIJIj.js";
import {
    G as je
} from "./GoBackButton-C1R_aqPV.js";
import {
    m as ye
} from "./constants-nXafxhpt.js";
import {
    C as G
} from "./Card-CSbNp-yI.js";
import {
    t as be
} from "./bundle-mjs-BOZU2X2x.js";
import {
    u as ve,
    S as Ne,
    C as we,
    R as ke
} from "./useCapturePostView-hK0Wtf_p.js";
import {
    I as v
} from "./Input-BlB8njt3.js";
import {
    p as $e
} from "./dates-D8Yi43wI.js";
import {
    M as Se
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    I as Ie
} from "./input-DroKt9gF.js";
import {
    T as Ee
} from "./textarea-CCL2-BaL.js";
import {
    L as U
} from "./label-BXX6oNCG.js";
import {
    B as Le
} from "./button-CiNp7xUM.js";
import {
    E as Me
} from "./ErrorContent-Ck5J9Q_i.js";
import "./client-only-BA55xl8q.js";
import "./ShadowRootDiv-CnNJ_Y3i.js";
import "./useCustomCSS-CEehwEIH.js";
import "./badge-C49ifptK.js";
import "./index-Bb4qSo10.js";
import "./utils-BAZByXB4.js";
import "./clsx-B-dksMZM.js";
import "./tooltip-CeFBy-g5.js";
import "./index-DW48STyt.js";
import "./index-w1qRmSKj.js";
import "./index-CcT0GIt8.js";
import "./index-ccF5fHaF.js";
import "./index-DCuDrq3I.js";
import "./floating-ui.react-dom-E7IEuBz2.js";
import "./floating-ui.dom-Cian5nPY.js";
import "./index-DrK2pFTP.js";
import "./index-CzbA40Po.js";
import "./index-BdBVW3oh.js";
import "./index-D3mH5y1-.js";
import "./CustomTooltip-J09bHzyh.js";
import "./useWindowSize-BGWPyh8W.js";
import "./functions-C_ILNh5F.js";
import "./debounce-Dr8Vn2AE.js";
import "./isObject-CZTq-Izs.js";
import "./motion-CMzn_ctr.js";
import "./focus-management-BQHAzeQ5.js";
import "./ReviewBox-Cgj5FpXI.js";
import "./x-20Z_dvlB.js";
import "./createLucideIcon-teSh_oO_.js";
import "./check-DH96kU61.js";
import "./Tooltip-CWGz9yl1.js";
import "./react-tooltip.min-DglEp1XQ.js";
import "./index-Bvmn5eQh.js";
import "./useDetectOutsideClick-DHO7tNhT.js";
import "./avatar-B5HRkzDo.js";
import "./transition-8DRjYs4_.js";
import "./floating-ui.react-pqI3rI6L.js";
import "./Badges-Boz_qM20.js";
import "./Comment-O5hkwq_d.js";
import "./hidden-B7qEBE7r.js";
import "./index-kwZc0teZ.js";
const _e = ({
        role: s,
        post: t
    }) => {
        var n, d;
        const a = k();
        x.useEffect(() => {
            a.state === "idle" && a.data && B("Updated", {
                icon: "✅"
            })
        }, [a]);

        function r(i) {
            return /^[a-z]{3}.*\d{3}$/.test(i)
        }
        return s !== u.user_role.admin ? null : e.jsxs("div", {
            className: "flex flex-wrap items-start p-6 mt-10 overflow-hidden rounded-xl bg-dark-800",
            children: [e.jsxs("div", {
                className: "flex flex-wrap w-full gap-5 shrink-0",
                children: [e.jsxs("div", {
                    className: "relative",
                    children: [(t == null ? void 0 : t.ogImageId) && e.jsx("img", {
                        src: `https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/${t.ogImageId}/public`,
                        alt: "",
                        className: "max-w-xs rounded-lg bg-dark-500"
                    }), (a.state === "loading" || a.state === "submitting") && e.jsx("div", {
                        className: "absolute top-0 left-0 flex items-center justify-center w-full h-full px-4 pointer-events-none bg-opacity-70 text-offwhite bg-dark-600",
                        children: e.jsx("div", {
                            className: "loader"
                        })
                    })]
                }), e.jsxs(a.Form, {
                    action: "/resource/posts/request-source",
                    method: "post",
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: t.id
                    }), e.jsx(m, {
                        htmlType: "submit",
                        type: "secondary-with-bg",
                        icon: T("w-5 h-5"),
                        children: "Request source"
                    })]
                }), e.jsxs(a.Form, {
                    action: "/resource/posts/remove-source",
                    method: "post",
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: t.id
                    }), e.jsx(m, {
                        htmlType: "submit",
                        type: "secondary-with-bg",
                        icon: T("w-5 h-5"),
                        children: "Remove source"
                    })]
                }), e.jsxs(a.Form, {
                    method: "post",
                    action: `/${t.username}/${t.friendlyId}`,
                    className: "type-form",
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: t.id,
                        readOnly: !0
                    }), e.jsxs(m, {
                        type: "primary",
                        htmlName: "action",
                        htmlValue: "update-image",
                        children: [I("w-5 h-5"), " Update image"]
                    })]
                }), e.jsxs(a.Form, {
                    method: "post",
                    action: "/resource/posts/processing",
                    className: "type-form",
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: t.id,
                        readOnly: !0
                    }), e.jsxs(m, {
                        type: "primary",
                        children: [I("w-5 h-5"), " Generate Metadata"]
                    })]
                }), e.jsx(p, {
                    to: `/resource/preview-metadata-image/${t.id}`,
                    children: e.jsx(m, {
                        type: "primary",
                        children: "Preview Metadata Image"
                    })
                }), e.jsx(a.Form, {
                    method: "post",
                    action: `/resource/generate-metadata/${t.id}`,
                    children: e.jsxs(m, {
                        type: "primary",
                        children: [I("w-5 h-5"), " Generate Metadata"]
                    })
                }), t.challenge && e.jsxs(a.Form, {
                    method: "post",
                    action: "/resource/posts/challenge-approved-post",
                    className: "p-4 border rounded-lg type-form border-dark-500",
                    children: [e.jsx("input", {
                        type: "hidden",
                        name: "postId",
                        value: t.id,
                        readOnly: !0
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsxs("div", {
                            className: "flex items-center h-6",
                            children: [e.jsx("input", {
                                id: "approved-challenge",
                                "aria-describedby": "approved-challenge-description",
                                name: "approved-challenge",
                                type: "checkbox",
                                defaultChecked: t.approvedFromChallenge,
                                className: "w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                            }), e.jsxs("div", {
                                className: "ml-3 text-sm leading-6",
                                children: [e.jsx("label", {
                                    htmlFor: "approved-challenge",
                                    className: "font-medium text-gray-100",
                                    children: "Approved"
                                }), " ", e.jsx("span", {
                                    id: "approved-challenge-description",
                                    className: "text-gray-300",
                                    children: "from a challenge"
                                })]
                            })]
                        }), e.jsx(m, {
                            type: "primary",
                            className: "block mt-3",
                            children: "Update"
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex flex-col items-start w-full gap-4 mt-6",
                children: [e.jsxs(a.Form, {
                    method: "post",
                    className: "flex items-center ml-1",
                    children: [e.jsx("input", {
                        hidden: !0,
                        name: "postId",
                        id: "postId",
                        value: t == null ? void 0 : t.id,
                        readOnly: !0
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx("select", {
                            name: "type",
                            id: "type",
                            defaultValue: t == null ? void 0 : t.type,
                            className: "block px-4 py-3 mr-1 capitalize border-none rounded-lg appearance-none cursor-pointer w-36 bg-dark-500 text-offwhite",
                            children: Object.values(u.post_type).map(i => e.jsx("option", {
                                value: i,
                                children: i
                            }, i))
                        }), e.jsx("div", {
                            className: "absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-offwhite",
                            children: e.jsx("svg", {
                                className: "w-4 h-4 fill-current",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                children: e.jsx("path", {
                                    fill: "current",
                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                })
                            })
                        })]
                    }), e.jsx(m, {
                        type: "primary",
                        htmlType: "submit",
                        htmlName: "action",
                        htmlValue: "change-type",
                        children: "Change"
                    })]
                }), e.jsx("span", {
                    className: "date",
                    children: V(new Date((t == null ? void 0 : t.createdDate) || ""))
                }), e.jsx("span", {
                    className: "text-gray-400 date",
                    children: t.fulltext
                })]
            }), e.jsx("div", {
                className: "flex flex-wrap w-full gap-4 mt-5 col-span-full",
                children: (n = t == null ? void 0 : t.user_favorite_post) == null ? void 0 : n.filter(i => r(i.user.username)).map(i => e.jsxs(p, {
                    to: `/profile/${i.user.username}`,
                    className: "flex items-center gap-2 bg-dark-600 px-2 py-1.5 rounded-lg",
                    children: [e.jsx(E, {
                        user: i.user,
                        size: "sm",
                        className: "w-7 h-7"
                    }), e.jsx("span", {
                        children: i.user.username
                    })]
                }, i.user.username))
            }), e.jsx("div", {
                className: "mt-6 mb-4 text-lg font-bold",
                children: "Votes"
            }), e.jsx("div", {
                className: "flex flex-wrap w-full gap-4 col-span-full",
                children: (d = t == null ? void 0 : t.user_vote_post.filter(i => r(i.user.username))) == null ? void 0 : d.map(i => e.jsxs(p, {
                    to: `/profile/${i.user.username}`,
                    className: "flex items-center gap-2 bg-dark-600 px-2 py-1.5 rounded-lg",
                    children: [e.jsx(E, {
                        user: i.user,
                        size: "sm",
                        className: "w-7 h-7"
                    }), e.jsx("span", {
                        children: i.user.username
                    })]
                }, i.user.username))
            }), e.jsx("div", {
                className: "mt-2 text-xs text-gray-400 col-span-full",
                children: t.id
            })]
        })
    },
    Fe = ({
        data: s,
        params: t
    }) => {
        var c;
        if (!s) return [{
            title: "Not found"
        }];
        const a = `https://uiverse.io/${t.username}/${t.friendlyId}`,
            {
                post: r = null
            } = s,
            n = r != null && r.ogImageId ? `https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/${r.ogImageId}/public` : "https://uiverse.io/og-uiverse.png",
            d = `${r!=null&&r.type?S(r==null?void 0:r.type):"Post"} by ${t.username} made with ${r!=null&&r.isTailwind?"Tailwind":"CSS"} | Uiverse.io`,
            i = `This ${r!=null&&r.type?S(r==null?void 0:r.type):"post"} was posted by ${t.username}. Tagged with: ${r==null?void 0:r.post_tag.join(", ")}. You can create your own elements by signing up.`;
        return [{
            title: d
        }, {
            property: "og:url",
            content: a
        }, {
            property: "og:image",
            content: n
        }, {
            name: "twitter:url",
            content: a
        }, {
            name: "twitter:title",
            content: d
        }, {
            name: "twitter:description",
            content: i
        }, {
            name: "twitter:image",
            content: n
        }, {
            name: "twitter:card",
            content: "summary_large_image"
        }, {
            name: "twitter:site",
            content: "@uiverse_io"
        }, {
            property: "og:description",
            content: i
        }, {
            name: "description",
            content: i
        }, ...((c = r.post_source) == null ? void 0 : c.type) !== u.post_source.reposted ? [{
            type: "application/ld+json",
            script: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                headline: `${S(r.type)||"Post"} by ${r.user.username}`,
                datePublished: r.createdDate,
                dateModified: r.updatedDate,
                image: n,
                author: {
                    "@type": "Person",
                    name: r.user.name || r.user.username,
                    url: `https://uiverse.io/profile/${r.user.username}`
                }
            })
        }] : []]
    },
    Pe = ({
        post: s,
        setSubmitModalOpen: t,
        canChangeSource: a = !1
    }) => {
        var d, i, c, o, g, l;
        const r = `${(d=s==null?void 0:s.user)==null?void 0:d.username} ${s.user.name?`(${(i=s.user)==null?void 0:i.name})`:""}`;
        let n = [];
        return s.source !== u.post_source.reposted && ((c = s == null ? void 0 : s.post_source) == null ? void 0 : c.type) !== u.post_source.reposted && n.unshift(r), s.originalPostId && n.unshift(`${(o=s.originalPost.user)==null?void 0:o.username} ${(g=s.originalPost.user)!=null&&g.name?`(${(l=s.originalPost.user)==null?void 0:l.name})`:""}`), s.source !== u.post_source.original && (s != null && s.source_author) && n.unshift(s == null ? void 0 : s.source_author), s.post_source && n.unshift(`${s.post_source.name} - ${s.post_source.website}`), e.jsx("section", {
            className: "grid grid-cols-1 md:grid-cols-2 rounded-xl col-span-full",
            children: e.jsxs("div", {
                className: "lg:max-w-2xl max-w-[70%] md:max-w-full",
                children: [e.jsxs("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [e.jsxs("span", {
                        className: "flex items-center text-gray-400",
                        children: [re("h-5 w-5 mr-2"), " MIT License"]
                    }), !s.originalPostId && a && e.jsx("button", {
                        onClick: () => {
                            t(!0)
                        },
                        className: "flex items-center gap-2 px-3 py-2 font-sans text-sm font-semibold text-gray-200 transition-colors duration-200 border-none rounded-lg cursor-pointer bg-dark-600 hover:bg-dark-500",
                        children: "Change source"
                    })]
                }), e.jsx("textarea", {
                    name: "",
                    id: "",
                    cols: 10,
                    rows: 5,
                    className: "w-full p-6 text-base text-gray-300 border-none resize-none bg-dark-800 custom-scrollbar rounded-xl",
                    readOnly: !0,
                    value: ye(n)
                })]
            })
        })
    },
    Ce = ({
        post: s
    }) => {
        var a;
        z();
        const t = x.useMemo(() => s.originalPost ? [s.originalPost, ...s.variations] : s.variations, [s]);
        return t.length === 0 ? null : e.jsx("section", {
            children: e.jsx("div", {
                className: be("grid gap-y-5 gap-x-3.5 content-stretch items-end w-full mb-5 max-xs:grid-cols-1 max-xs:gap-2.5", `grid-cols-${(a=t[0])==null?void 0:a.type}`),
                children: t.map((r, n) => e.jsxs("div", {
                    children: [(n === 0 || n === 1 && s.originalPostId) && e.jsxs("div", {
                        className: "mb-4 flex items-center gap-3",
                        children: [e.jsx("h3", {
                            children: s.originalPostId && n === 0 ? "Original Post" : "Variations"
                        }), s.originalPostId ? n === 1 && e.jsx("span", {
                            className: "text-dark-100 text-sm font-semibold",
                            children: t.length
                        }) : n === 0 && e.jsx("span", {
                            className: "text-dark-100 text-sm font-semibold",
                            children: t.length
                        })]
                    }), e.jsx(G, {
                        post: r
                    })]
                }, r.id))
            })
        })
    },
    Oe = ({
        post: s
    }) => e.jsx("section", {
        className: "rounded-xl md:pr-8 max-w-full md:w-[300px] xl:w-[350px] mb-6",
        children: e.jsxs("div", {
            className: "grid grid-cols-[48px_1fr] gap-4 content-start",
            children: [e.jsx(p, {
                to: `/profile/${s.user.username}`,
                className: "",
                children: e.jsx(E, {
                    user: s.user,
                    size: "md",
                    className: "w-12 h-12"
                })
            }), e.jsxs("div", {
                className: "max-w-full overflow-hidden",
                children: [e.jsx(p, {
                    to: `/profile/${s.user.username}`,
                    className: "block text-xl font-semibold text-gray-200 truncate overflow-hidden",
                    children: s.user.username
                }), e.jsx("p", {
                    className: "block text-gray-400",
                    children: s.user.name
                })]
            }), e.jsx("p", {
                className: "block text-gray-200 col-span-full text-base",
                children: s.user.bio
            })]
        })
    }),
    Te = ({
        post: s,
        actions: t,
        values: a,
        user: r,
        isAllowedToEditTags: n
    }) => {
        const [d] = K(), i = d.get("preview") === "full";
        return e.jsxs("section", {
            className: N("flex flex-col h-screen", i ? "p-0" : "p-10"),
            children: [e.jsx("div", {
                className: N("relative w-full h-full min-h-0", i ? "" : "overflow-hidden rounded-2xl"),
                children: a.isTailwind ? e.jsx(H, {
                    values: a,
                    actions: t,
                    post: s
                }) : e.jsx(J, {
                    post: s,
                    values: a,
                    actions: t,
                    user: r,
                    isAllowedToEditTags: n
                }, s.id)
            }), !i && e.jsxs("div", {
                className: "flex gap-4 p-4 pb-0",
                children: [e.jsx(p, {
                    to: `/profile/${s.user.username}`,
                    className: "",
                    children: e.jsx(E, {
                        user: s.user,
                        size: "md",
                        className: "w-12 h-12"
                    })
                }), e.jsxs("div", {
                    className: "max-w-full overflow-hidden",
                    children: [e.jsx(p, {
                        to: `/profile/${s.user.username}`,
                        className: "block overflow-hidden text-xl font-semibold text-gray-200 truncate",
                        children: s.user.username
                    }), e.jsx("p", {
                        className: "block text-gray-400",
                        children: s.user.name
                    })]
                })]
            })]
        })
    };

function De({
    postId: s
}) {
    var c, o, g;
    const t = k(),
        a = k(),
        [r, n] = x.useState(null);
    if (x.useEffect(() => {
            !t.data && t.state === "idle" && t.load(`/resource/post/manager/${s}`)
        }, [s, t]), x.useEffect(() => {
            t.data && t.data.post.socialMediaShare.length === 0 && n("new")
        }, [t.data]), !t.data) return e.jsx("div", {
        className: "p-6 border-2 bg-dark-700 rounded-xl border-dark-600/80",
        children: e.jsx("h3", {
            className: "mb-4 text-2xl font-bold text-gray-100",
            children: "Social Media Share Loading..."
        })
    });
    const d = (c = t.data) == null ? void 0 : c.post,
        i = ((g = (o = t.data) == null ? void 0 : o.post) == null ? void 0 : g.socialMediaShare) || [];
    return e.jsxs("div", {
        className: "px-12 py-10 border-2 bg-dark-700 rounded-xl border-dark-600/80",
        children: [e.jsxs("h3", {
            className: "flex items-center gap-3 mb-4 text-2xl font-bold text-gray-100",
            children: ["Social Media Sharing", e.jsxs(m, {
                small: !0,
                type: "primary",
                onClick: () => n("new"),
                children: [R("w-5 h-5"), " Create"]
            })]
        }), e.jsxs("div", {
            className: "flex flex-wrap items-start gap-8 mb-6",
            children: [e.jsxs("table", {
                className: "flex-1 divide-y divide-gray-700",
                children: [e.jsx("thead", {
                    children: e.jsxs("tr", {
                        children: [e.jsx("th", {
                            className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase",
                            children: "Date"
                        }), e.jsx("th", {
                            className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase",
                            children: "Platforms"
                        }), e.jsx("th", {
                            className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase",
                            children: "Notifications"
                        }), e.jsx("th", {
                            className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase",
                            children: "Actions"
                        }), e.jsx("td", {
                            className: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase",
                            children: " "
                        })]
                    })
                }), e.jsx("tbody", {
                    className: "divide-y divide-gray-600 bg-dark-700",
                    children: i.map((l, b) => {
                        var h, f;
                        return e.jsxs("tr", {
                            className: N(r === l.id && "bg-dark-600"),
                            children: [e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-100 whitespace-nowrap",
                                children: $e(l.createdAt)
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-100 whitespace-nowrap",
                                children: e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [l.instagramLink && ie("w-5 h-5 text-orange-400"), l.xLink && le("w-4 h-4 text-white"), l.threadsLink && D("w-5 h-5 text-white"), l.tiktokLink && ne("w-5 h-5 text-purple-400")]
                                })
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-100 whitespace-nowrap",
                                children: e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [((h = l.notifications) == null ? void 0 : h.length) > 0 && de("w-5 h-5 text-amber-400"), ((f = l.emails) == null ? void 0 : f.length) > 0 && D("w-5 h-5 text-sky-400")]
                                })
                            }), e.jsx("td", {
                                className: "px-6 py-4 text-sm text-gray-100 whitespace-nowrap",
                                children: e.jsx(m, {
                                    type: "secondary-with-bg",
                                    onClick: () => n(r === l.id ? null : l.id),
                                    children: r === l.id ? "Collapse" : "Expand"
                                })
                            }), e.jsx("td", {
                                children: r === l.id && oe("w-6 h-6 text-indigo-400")
                            })]
                        }, l.id)
                    })
                })]
            }), i.map(l => {
                var b, h, f, w;
                return e.jsx("div", {
                    className: `mt-4 min-w-[300px] ${r===l.id?"block":"hidden"}`,
                    children: e.jsxs(a.Form, {
                        method: "post",
                        className: "flex-1",
                        action: `/resource/post/manager/${s}`,
                        children: [e.jsx("input", {
                            type: "hidden",
                            name: "id",
                            value: l.id
                        }), e.jsx(v, {
                            label: "Instagram Link",
                            htmlName: "instagramLink",
                            className: "mb-4",
                            defaultValue: l.instagramLink
                        }), e.jsx(v, {
                            label: "X Link",
                            htmlName: "xLink",
                            className: "mb-4",
                            defaultValue: l.xLink
                        }), e.jsx(v, {
                            label: "Threads Link",
                            htmlName: "threadsLink",
                            className: "mb-4",
                            defaultValue: l.threadsLink
                        }), e.jsx(v, {
                            label: "TikTok Link",
                            htmlName: "tiktokLink",
                            className: "mb-4",
                            defaultValue: l.tiktokLink
                        }), e.jsx("div", {
                            className: "relative flex items-start my-3",
                            children: d.user.hasUnsubscribedEmails ? e.jsx("div", {
                                children: "This user has unsubscribed from email notifications."
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsx("div", {
                                    className: "flex items-center h-6",
                                    children: ((b = l.emails) == null ? void 0 : b.length) > 0 ? e.jsx("div", {
                                        children: A("w-5 h-5 text-green-400")
                                    }) : e.jsx("input", {
                                        id: `shouldSendEmail-${l.id}`,
                                        name: "shouldSendEmail",
                                        type: "checkbox",
                                        defaultChecked: ((h = l.emails) == null ? void 0 : h.length) > 0,
                                        className: "w-4 h-4 text-indigo-400 border-gray-700 rounded cursor-pointer focus:ring-indigo-400"
                                    })
                                }), e.jsx("div", {
                                    className: "ml-3 text-sm leading-6",
                                    children: e.jsx("label", {
                                        htmlFor: `shouldSendEmail-${l.id}`,
                                        className: "font-medium text-gray-100 cursor-pointer select-none",
                                        children: "Send Email"
                                    })
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "relative flex items-start my-3",
                            children: [e.jsx("div", {
                                className: "flex items-center h-6",
                                children: ((f = l == null ? void 0 : l.notifications) == null ? void 0 : f.length) > 0 ? e.jsx("div", {
                                    children: A("w-5 h-5 text-green-400")
                                }) : e.jsx("input", {
                                    id: `shouldNotify-${l.id}`,
                                    name: "shouldNotify",
                                    type: "checkbox",
                                    defaultChecked: ((w = l == null ? void 0 : l.notifications) == null ? void 0 : w.length) > 0,
                                    className: "w-4 h-4 text-indigo-400 border-gray-700 rounded cursor-pointer focus:ring-indigo-400"
                                })
                            }), e.jsx("div", {
                                className: "ml-3 text-sm leading-6",
                                children: e.jsx("label", {
                                    htmlFor: `shouldNotify-${l.id}`,
                                    className: "font-medium text-gray-100 cursor-pointer select-none",
                                    children: "Notify"
                                })
                            })]
                        }), e.jsx(m, {
                            htmlType: "submit",
                            type: "primary",
                            disabled: a.state !== "idle",
                            children: "Save"
                        })]
                    })
                }, l.id)
            }), r === "new" && e.jsx("div", {
                className: "mt-4 min-w-[300px] block",
                children: e.jsxs(a.Form, {
                    method: "post",
                    className: "flex-1",
                    action: `/resource/post/manager/${s}`,
                    children: [e.jsx(v, {
                        label: "Instagram Link",
                        htmlName: "instagramLink",
                        className: "mb-4"
                    }), e.jsx(v, {
                        label: "X Link",
                        htmlName: "xLink",
                        className: "mb-4"
                    }), e.jsx(v, {
                        label: "Threads Link",
                        htmlName: "threadsLink",
                        className: "mb-4"
                    }), e.jsx(v, {
                        label: "TikTok Link",
                        htmlName: "tiktokLink",
                        className: "mb-4"
                    }), e.jsx("div", {
                        className: "relative flex items-start my-3",
                        children: d.user.hasUnsubscribedEmails ? e.jsx("div", {
                            className: "text-amber-400",
                            children: "This user has unsubscribed from email notifications."
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx("div", {
                                className: "flex items-center h-6",
                                children: e.jsx("input", {
                                    id: "shouldSendEmail-new",
                                    name: "shouldSendEmail",
                                    type: "checkbox",
                                    className: "w-4 h-4 text-indigo-400 border-gray-700 rounded cursor-pointer focus:ring-indigo-400"
                                })
                            }), e.jsx("div", {
                                className: "ml-3 text-sm leading-6",
                                children: e.jsx("label", {
                                    htmlFor: "shouldSendEmail-new",
                                    className: "font-medium text-gray-100 cursor-pointer select-none",
                                    children: "Send Email"
                                })
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "relative flex items-start my-3",
                        children: [e.jsx("div", {
                            className: "flex items-center h-6",
                            children: e.jsx("input", {
                                id: "shouldNotify-new",
                                name: "shouldNotify",
                                type: "checkbox",
                                className: "w-4 h-4 text-indigo-400 border-gray-700 rounded cursor-pointer focus:ring-indigo-400"
                            })
                        }), e.jsx("div", {
                            className: "ml-3 text-sm leading-6",
                            children: e.jsx("label", {
                                htmlFor: "shouldNotify-new",
                                className: "font-medium text-gray-100 cursor-pointer select-none",
                                children: "Notify"
                            })
                        })]
                    }), e.jsx(m, {
                        htmlType: "submit",
                        type: "primary",
                        disabled: a.state !== "idle",
                        children: "Save"
                    })]
                })
            })]
        }), e.jsxs("div", {
            children: [e.jsx("div", {
                className: "w-full max-w-xs mb-5 border-2 border-indigo-400 rounded-lg bg-dark-400",
                children: d != null && d.ogImageId ? e.jsx("img", {
                    src: `https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/${d==null?void 0:d.ogImageId}/public`,
                    alt: "",
                    className: "object-contain w-full h-full rounded-lg"
                }) : e.jsx("div", {
                    className: "flex items-center justify-center w-full h-full text-gray-300 ",
                    children: "No Image :("
                })
            }), e.jsxs(a.Form, {
                method: "post",
                action: `/${d==null?void 0:d.username}/${d==null?void 0:d.friendlyId}`,
                className: "type-form",
                children: [e.jsx("input", {
                    type: "hidden",
                    name: "postId",
                    value: s,
                    readOnly: !0
                }), e.jsxs(m, {
                    type: "primary",
                    htmlName: "action",
                    htmlValue: "update-image",
                    disabled: a.state !== "idle",
                    children: [I("w-5 h-5"), " Update image"]
                })]
            })]
        })]
    })
}
const Ae = ({
        existingTags: s,
        postTags: t,
        setTags: a
    }) => {
        const [r, n] = x.useState(""), d = i => {
            if (i.key === "Enter") {
                i.preventDefault();
                const c = r.trim();
                c !== "" && !t.includes(c) && (a(o => [...o, c]), n(""))
            }
        };
        return e.jsxs("div", {
            children: [e.jsx("p", {
                className: "text-sm font-semibold text-gray-300",
                children: t.length > 0 ? "Selected tags" : "Add tags"
            }), e.jsxs("label", {
                htmlFor: "tags",
                className: "my-1 relative cursor-text [&:has(:focus-visible)]:ring-4 focus-visible:ring-sky-400 focus-visible:border-sky-400 bg-dark-500 rounded-lg px-2 py-2 flex flex-wrap gap-1",
                children: [t.map(i => e.jsxs("button", {
                    onClick: () => a(c => c.filter(o => o !== i)),
                    className: "bg-dark-600 flex items-center gap-1.5 cursor-pointer hover:bg-dark-700 text-gray-200 rounded px-2 pl-2.5 py-0.5",
                    children: [i, " ", ce("h-4 w-4 text-gray-300")]
                }, i)), e.jsx("input", {
                    type: "text",
                    placeholder: "Search...",
                    value: r,
                    id: "tags",
                    onKeyDown: d,
                    onChange: i => n(i.target.value),
                    className: "bg-transparent focus:ring-0 border-none w-[190px] outline-none py-0"
                }), s.filter(i => i.includes(r)).length < 4 && e.jsxs("div", {
                    className: "absolute -top-[24px] text-sm right-0 text-gray-300",
                    children: ["Press ", e.jsx("code", {
                        children: "Enter"
                    }), " to add"]
                })]
            }), e.jsx("p", {
                className: "text-sm font-normal text-gray-400",
                children: "Selecting the right tags is important for your post to be found by the right people."
            }), e.jsx("div", {
                className: "flex flex-wrap items-start gap-1 mt-3 overflow-y-auto custom-scrollbar justify-stretch",
                children: s.filter(i => !t.includes(i) && i.includes(r)).slice(0, 200).map(i => e.jsx("button", {
                    onClick: () => a(c => [...c, i]),
                    className: "px-2 py-1 font-normal text-gray-200 rounded cursor-pointer bg-dark-600 hover:bg-dark-500",
                    children: i
                }, i))
            }), t.length > 8 && e.jsxs("p", {
                className: "flex justify-end mt-1 text-sm text-red-400",
                children: ["Remove ", t.length - 8, " tag", t.length - 8 > 1 && "s", " to continue."]
            })]
        })
    },
    Ue = ({
        isOpen: s,
        onClose: t,
        postId: a,
        type: r
    }) => {
        var g;
        const n = k(),
            d = k(),
            [i, c] = x.useState([]);
        x.useEffect(() => {
            !n.data && n.state === "idle" && n.load(`/resource/post-metadata/${a}`)
        }, [a, n]);
        const o = ((g = n.data) == null ? void 0 : g.post) || null;
        return x.useEffect(() => {
            var l, b, h;
            n.data && c(((h = (b = (l = n.data) == null ? void 0 : l.post) == null ? void 0 : b.post_tag) == null ? void 0 : h.map(f => f.tag.value)) || [])
        }, [n.data]), x.useEffect(() => {
            var l;
            (l = d.data) != null && l.success && d.state === "idle" && (B("Post updated", {
                icon: "✅"
            }), t())
        }, [d, t]), e.jsx(Se, {
            open: s,
            onClose: t,
            center: !0,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            showCloseIcon: !0,
            classNames: {
                overlay: "backdrop-blur-sm",
                modal: "max-w-[1100px] rounded-3xl bg-dark-700 text-white sm:px-20 p-4 py-14 overflow-visible border-dark-600/80 border-2"
            },
            children: e.jsxs("div", {
                className: N("modal flex gap-x-8 justify-start items-start max-lg:flex-wrap"),
                children: [e.jsxs("div", {
                    className: " basis-[min-content]",
                    children: [e.jsx("div", {
                        className: N("grid", `grid-cols-${r||(o==null?void 0:o.type)}`),
                        children: e.jsx("div", {
                            className: N("pointer-events-none min-w-[294px]"),
                            children: o ? e.jsx(G, {
                                post: o,
                                hideFooter: !0
                            }) : e.jsx("div", {
                                className: "flex items-center justify-center rounded-lg bg-dark-500 min-h-[250px]",
                                children: "Loading..."
                            })
                        })
                    }), e.jsx("div", {
                        className: "mt-5",
                        children: e.jsxs("div", {
                            className: "flex gap-2 mt-3 text-sm leading-relaxed text-blue-400 items-cetner",
                            children: [me("w-5 h-5 flex-shrink-0"), " You can update this information without needing to get your post approved again."]
                        })
                    })]
                }), e.jsxs(d.Form, {
                    className: "flex flex-col flex-1 flex-grow w-full",
                    method: "post",
                    action: `/resource/post-metadata/${a}`,
                    children: [e.jsx("div", {
                        className: "text-xl font-bold text-gray-100",
                        children: "About your post"
                    }), e.jsx("p", {
                        className: "mt-2 text-sm leading-relaxed text-gray-400",
                        children: "You can give the viewers of your post a better idea of what it is and why it's awesome. Related tags will help people find your post. On the other hand, tags that are not related will harm your post's visibility."
                    }), e.jsxs("fieldset", {
                        className: "w-full mt-4 font-semibold border-none",
                        children: [e.jsxs("div", {
                            className: "mb-6 space-y-4",
                            children: [e.jsxs("div", {
                                className: "space-y-2",
                                children: [e.jsx(U, {
                                    htmlFor: "title",
                                    children: "Title"
                                }), e.jsx(Ie, {
                                    type: "text",
                                    placeholder: `Super Awesome ${S((o==null?void 0:o.type)||"button")}`,
                                    name: "title",
                                    id: "title",
                                    defaultValue: (o == null ? void 0 : o.title) || "",
                                    maxLength: 55
                                })]
                            }), e.jsxs("div", {
                                className: "space-y-2",
                                children: [e.jsx(U, {
                                    htmlFor: "description",
                                    children: "Description"
                                }), e.jsx(Ee, {
                                    placeholder: "I created this awesome post",
                                    name: "description",
                                    id: "description",
                                    defaultValue: (o == null ? void 0 : o.description) || "",
                                    className: "min-h-[80px]"
                                })]
                            })]
                        }), e.jsx("input", {
                            type: "hidden",
                            name: "tags",
                            id: "tags-values",
                            value: i.join(";")
                        }), e.jsx(Ae, {
                            existingTags: [],
                            postTags: i,
                            setTags: c
                        })]
                    }), e.jsx("div", {
                        className: "flex justify-end mt-5",
                        children: e.jsxs(Le, {
                            variant: "default",
                            children: [xe("w-5 h-5"), "Save"]
                        })
                    })]
                })]
            })
        })
    },
    Ve = Ue;

function Qs() {
    var F, P, C, O;
    const {
        post: s
    } = ge(), [t] = K(), {
        user: a
    } = z(), [r, n] = x.useState(!1), [d, i] = x.useState(!1), [c, o] = x.useState(!1), [g, l] = x.useState(!1), [b, h] = x.useState(!1), f = k();
    ve(s.id), s.issue_post && (s.issues = s.issue_post.map(y => W[y.issueId]));
    const w = (a == null ? void 0 : a.role) === u.user_role.admin || (a == null ? void 0 : a.role) === u.user_role.editor,
        $ = s.isOwner || (a == null ? void 0 : a.role) === u.user_role.moderator || (a == null ? void 0 : a.role) === u.user_role.tester || w,
        {
            values: j,
            actions: L,
            formData: q,
            reset: X
        } = te(s);
    x.useEffect(() => {
        X(s)
    }, [s]);
    const M = a == null ? void 0 : a.role,
        _ = s.isOwner && a || M === u.user_role.admin;
    return x.useEffect(() => {
        t.has("approved") && h(!0)
    }, [t]), t.has("preview") ? e.jsx(Te, {
        post: s,
        actions: L,
        values: j,
        user: a,
        isAllowedToEditTags: $
    }) : e.jsxs("main", {
        className: `mx-auto mb-40 ${!j.isEditMode&&"xl:pr-10 border-none"} wrapper`,
        children: [e.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-3 mb-1",
            children: [e.jsx(je, {}), s.status === u.post_status.approved ? e.jsxs("h1", {
                className: "flex items-center gap-2 text-base font-semibold text-gray-400",
                children: [S(s.type), " by", " ", e.jsxs(p, {
                    to: `/profile/${s.user.username}`,
                    className: "flex items-center gap-3 p-1 pr-2 font-bold transition-colors rounded-lg text-offwhite hover:bg-dark-600",
                    children: [e.jsx(E, {
                        user: s.user,
                        size: "sm",
                        className: "w-6 h-6"
                    }), s.user.username]
                })]
            }) : e.jsx(Q, {
                post: s
            })]
        }), e.jsxs("div", {
            className: N("block md:flex border-none md:min-h-[200px] rounded-xl overflow-hidden md:resize-y max-w-full md:flex-row", "md:h-[calc(100vh-220px)]"),
            children: [e.jsx(Z, {
                post: s,
                actions: L,
                values: j,
                user: a,
                isAllowedToEditTags: $
            }), e.jsx(ee, {
                post: s,
                actions: L,
                values: j,
                user: a
            })]
        }), e.jsx(ae, {
            formData: q,
            post: s,
            isCreator: _,
            isAllowedToEditTags: $,
            issueCount: j.issues.length,
            setIssuesModalOpen: i,
            source: j.source,
            values: j,
            actions: L,
            isSubmitModalOpen: c,
            setSubmitModalOpen: o,
            user: a
        }), e.jsxs("div", {
            className: "col-span-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mt-10",
            children: [e.jsxs("div", {
                className: "",
                children: [e.jsx(Ne, {
                    source: s.post_source,
                    username: s.user.username
                }), e.jsxs("div", {
                    className: `flex gap-10 ${((F=s.variations)==null?void 0:F.length)>0?"flex-col-reverse":"flex-col"}`,
                    children: [e.jsx(we, {
                        user: a,
                        post: s
                    }), ((P = s.variations) == null ? void 0 : P.length) > 0 || s.originalPostId ? e.jsx(Ce, {
                        post: s
                    }) : e.jsx(e.Fragment, {
                        children: s.status === u.post_status.approved ? e.jsx(p, {
                            to: `/create?originalPostId=${s.id}`,
                            className: `relative h-[200px] flex items-center justify-center cursor-pointer ${!a&&"pointer-events-none"} w-full border-2 border-gray-600 bg-transparent border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
                            children: e.jsx("span", {
                                className: "flex items-center gap-3 mt-2 font-sans font-semibold text-gray-600 text-md",
                                children: a ? e.jsxs(e.Fragment, {
                                    children: [R("w-6 h-6 mx-auto text-gray-600"), "No variations yet, create one!"]
                                }) : e.jsx(e.Fragment, {
                                    children: "No variations yet"
                                })
                            })
                        }) : e.jsx("div", {})
                    })]
                })]
            }), e.jsxs("aside", {
                children: [e.jsxs("div", {
                    className: "",
                    children: [e.jsx("h2", {
                        className: "mb-2 text-2xl font-bold text-gray-100 font-display capitalize max-w-[300px]",
                        children: s.title || s.type
                    }), s.description && e.jsx("p", {
                        className: "flex mb-6 flex-wrap text-gray-400 max-w-[300px]",
                        children: s.description
                    }), e.jsxs("div", {
                        className: "flex flex-wrap gap-y-0 gap-x-2 text-gray-300 max-w-[300px]",
                        style: {
                            color: "#e8e8e8"
                        },
                        children: [(C = j.tags) == null ? void 0 : C.map(y => e.jsx(p, {
                            to: `/tags/${y}`,
                            className: "hover:underline underline-offset-2",
                            children: y
                        }, y)), (O = s == null ? void 0 : s.ai_tags) == null ? void 0 : O.map(y => e.jsx(p, {
                            className: "text-sky-300 hover:underline underline-offset-2",
                            to: `/tags/${y.tag.value}`,
                            children: y.tag.value
                        }, y.tag.value + "-ai"))]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-2 mt-2",
                        children: [$ && e.jsxs(m, {
                            type: "secondary-with-bg",
                            className: "",
                            small: !0,
                            onClick: () => h(!0),
                            children: [ue("w-5 h-5"), " Edit"]
                        }), w && e.jsx(f.Form, {
                            method: "post",
                            action: `/resource/generate-metadata/${s.id}`,
                            children: e.jsxs(m, {
                                type: "primary",
                                small: !0,
                                children: [I("w-5 h-5"), " Generate Tags"]
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-wrap items-center justify-between gap-3 mt-4",
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-3 font-normal text-gray-400",
                            children: [he("w-5 h-5"), " ", V(new Date(s.createdDate))]
                        }), e.jsxs(m, {
                            type: "secondary",
                            className: "group",
                            onClick: () => l(!0),
                            children: [pe("w-5 h-5 text-red-400 opacity-70 group-hover:opacity-100"), " ", e.jsx("span", {
                                className: "text-gray-400 group-hover:text-gray-200",
                                children: "Report"
                            })]
                        }), e.jsx(ke, {
                            post: s,
                            isOpen: g,
                            onClose: () => l(!1)
                        })]
                    }), e.jsx("div", {
                        className: "w-full h-[2px] bg-dark-500 mb-6 mt-4"
                    })]
                }), e.jsx(Oe, {
                    post: s
                }), w && e.jsx(m, {
                    type: "secondary-with-bg",
                    small: !0,
                    onClick: () => n(!r),
                    children: r ? "Hide Admin UI" : "Show Admin UI"
                })]
            }), e.jsx(Pe, {
                post: s,
                canChangeSource: _ || M === u.user_role.admin,
                setSubmitModalOpen: o
            })]
        }), ((a == null ? void 0 : a.role) === u.user_role.admin || (a == null ? void 0 : a.role) === u.user_role.editor) && r && e.jsx("div", {
            className: "mt-10 ",
            children: e.jsx(De, {
                postId: s.id
            })
        }), r && e.jsx(_e, {
            role: M,
            post: s
        }), e.jsx(se, {
            isOpen: d,
            onClose: () => i(!1),
            issues: j.issues
        }), $ && b && e.jsx(Ve, {
            isOpen: !0,
            onClose: () => h(!1),
            postId: s.id,
            type: s.type
        })]
    })
}
const Zs = Fe,
    et = () => [{
        rel: "stylesheet",
        href: Y
    }],
    st = ({
        actionResult: s
    }) => (s == null ? void 0 : s.type) !== "ai";

function tt() {
    const s = fe();
    return e.jsx(Me, {
        error: s
    })
}
export {
    tt as ErrorBoundary, Qs as
    default, et as links, Zs as meta, st as shouldRevalidate
};