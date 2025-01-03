import {
    i as A
} from "./index-browser-CJEdsfDC.js";
import {
    a as ka,
    r as E,
    j as c,
    g as Kn
} from "./jsx-runtime-Dvja6b4T.js";
import {
    d as Ia,
    V as Xn
} from "./ControlsComponents-BJfRgjNb.js";
import {
    R as La
} from "./ReviewBox-Cgj5FpXI.js";
import {
    B as Vu
} from "./react-toastify.esm-EkDeeNHo.js";
import {
    M as ru
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    I as kt
} from "./Input-BlB8njt3.js";
import {
    C as _a
} from "./Card-CSbNp-yI.js";
import {
    aa as Ma,
    v as ds,
    N as hs,
    Z as Oa,
    u as Bu,
    A as Da,
    at as ja,
    i as qa,
    M as Gt,
    aY as Fa,
    aZ as Ha,
    a_ as Jn,
    a$ as Va,
    b0 as Ba,
    b1 as $a,
    af as Pa,
    aR as Ua,
    L as Ga,
    U as Wa,
    V as za,
    aK as en,
    a9 as Ka,
    R as Xa,
    j as Ja,
    ad as Ya
} from "./icons-pNqq09c6.js";
import {
    B as V
} from "./Button-CFIJCp_o.js";
import {
    c as He,
    j as Yn,
    e as Zn,
    u as Za,
    n as Qa
} from "./utils-OWsBmDA3.js";
import {
    F as Qn,
    L as eo,
    g as iu,
    j as to
} from "./components-BuvoIJIj.js";
import {
    V as $u
} from "./Tooltip-CWGz9yl1.js";
import {
    S as uo
} from "./editors-Dq4Fjxe9.js";
import {
    m as xu
} from "./motion-CMzn_ctr.js";
import {
    u as so
} from "./useDetectOutsideClick-DHO7tNhT.js";
const no = {},
    ro = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: no
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    io = ka(ro),
    ao = (t, e) => {
        var Zs, Qs;
        const [u, s] = E.useState(t.css), [n, r] = E.useState(t.html), [i, a] = E.useState(t.status === A.post_status.draft || t.status === A.post_status.needs_work || t.status === A.post_status.review), [o, l] = E.useState(!1), [h, p] = E.useState("isOwner" in t && t.isOwner && (t.status === A.post_status.draft || t.status === A.post_status.needs_work || t.status === A.post_status.review)), [S, y] = E.useState(740), [v, T] = E.useState((t == null ? void 0 : t.post_tag) || []), [R, _] = E.useState(!1), [F, $] = E.useState(t.theme === "light"), [U, j] = E.useState((t == null ? void 0 : t.issues) || []), [O, P] = E.useState(!1), [te, J] = E.useState(!1), [le, G] = E.useState(!1), [de, Se] = E.useState((t == null ? void 0 : t.isTailwind) || !1), [ie, dt] = E.useState(t.backgroundColor), [ht, Rt] = E.useState(((Zs = t == null ? void 0 : t.post_source) == null ? void 0 : Zs.website) || ""), [Pe, Ca] = E.useState(((Qs = t == null ? void 0 : t.post_source) == null ? void 0 : Qs.name) || ""), [Ys, Ea] = E.useState(A.post_source.original), Na = t.id, [Me, mu] = E.useState({
            css: [u],
            html: [n]
        }), Ta = (D, et) => {
            s(D), r(et), mu({
                css: [D, ...Me.css.slice(0, 9)],
                html: [et, ...Me.html.slice(0, 9)]
            })
        }, Aa = () => {
            if (Me.css.length > 1 || Me.html.length > 1) {
                if (Me.css.length > 1) {
                    const [, ...D] = Me.css;
                    s(D[0]), mu(et => ({ ...et,
                        css: D
                    }))
                }
                if (Me.html.length > 1) {
                    const [, ...D] = Me.html;
                    r(D[0]), mu(et => ({ ...et,
                        html: D
                    }))
                }
            }
        };
        E.useEffect(() => {
            O || (de ? (t.html !== n || t.theme !== (F ? "light" : "dark") || t.backgroundColor !== ie) && P(!0) : (t.html !== n || t.css !== u || t.theme !== (F ? "light" : "dark") || t.backgroundColor !== ie) && P(!0))
        }, [n, u, O, t, F, ie]), E.useEffect(() => {
            de || j(() => Ia(u, e ? "" : n))
        }, [n, u]);
        const Ra = D => {
            o ? P(D.css !== u || D.html !== n || D.theme !== (F ? "light" : "dark") || D.backgroundColor !== ie) : (s(D.css), r(D.html), dt(D.backgroundColor), $(D.theme === "light"), Se(D.isTailwind || !1), P(!1)), T((D == null ? void 0 : D.post_tag) || []), j((D == null ? void 0 : D.issues) || []), l(!1)
        };
        return {
            values: {
                css: u,
                html: n,
                tags: v,
                isPrefixed: R,
                isLight: F,
                issues: U,
                hasChanged: O,
                sourceWebsite: ht,
                sourceName: Pe,
                sourceType: Ys,
                isAiPromptOpen: le,
                isEditMode: i,
                currentlyAutosaving: o,
                isAutoSaving: h,
                backgroundColor: ie,
                isTailwind: de,
                previewHeight: S
            },
            actions: {
                setCss: s,
                setHtml: r,
                setTags: T,
                setIsPrefixed: _,
                setIsLight: $,
                setIssues: j,
                setHasChanged: P,
                setSourceWebsite: Rt,
                setSourceName: Ca,
                setSourceType: Ea,
                setSubmitModalOpen: J,
                setAiPromptOpen: G,
                applyAiEdit: Ta,
                undoChanges: Aa,
                setIsEditMode: a,
                setCurrentlyAutosaving: l,
                setIsAutoSaving: p,
                setBackgroundColor: dt,
                setIsTailwind: Se,
                setPreviewHeight: y
            },
            formData: {
                css: u,
                html: n,
                tagsJson: JSON.stringify(v),
                issues: U.map(D => D.id).join(","),
                theme: F ? "light" : "dark",
                friendlyId: (t == null ? void 0 : t.friendlyId) || "",
                postId: Na,
                hasChanged: O.toString(),
                isTailwind: de.toString(),
                backgroundColor: ie,
                sourceName: Pe,
                sourceWebsite: ht,
                sourceType: Ys,
                originalPostId: (t == null ? void 0 : t.originalPostId) || "",
                type: t.type
            },
            reset: Ra
        }
    },
    oh = ao;

function tn(t) {
    try {
        return new URL(t), !0
    } catch {
        return !1
    }
}
const oo = ({
        isOpen: t,
        onClose: e,
        post: u,
        values: s,
        actions: n,
        onClickUpdate: r,
        allowToChangeSource: i,
        isLoading: a
    }) => c.jsx(ru, {
        open: t,
        onClose: e,
        center: !0,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        showCloseIcon: !0,
        classNames: {
            overlay: "backdrop-blur-sm",
            modal: "max-w-[1200px] bg-dark-700 text-white sm:px-20 p-4 py-14 overflow-visible border-dark-600/80 border-2 rounded-3xl"
        },
        children: c.jsxs("div", {
            className: He("modal flex gap-x-8", i ? "max-lg:flex-wrap" : "flex-col items-center"),
            children: [c.jsx("div", {
                className: He("grid", `grid-cols-${u.type}`),
                children: c.jsx("div", {
                    className: He("pointer-events-none"),
                    children: c.jsx(_a, {
                        post: u,
                        hideFooter: !0,
                        mockCode: {
                            css: s.css,
                            html: s.html
                        },
                        mockMetadata: {}
                    })
                })
            }), c.jsxs("div", {
                className: "flex flex-col",
                children: [i && c.jsxs(c.Fragment, {
                    children: [c.jsx("label", {
                        className: "block mt-3 mb-3 text-2xl font-bold leading-5 text-gray-100",
                        children: "Are you the original creator of this post?"
                    }), c.jsxs("fieldset", {
                        className: "mt-6 font-semibold border-none",
                        children: [c.jsx("legend", {
                            className: "sr-only",
                            children: "Post source"
                        }), c.jsxs("div", {
                            className: "mb-6 space-y-4",
                            children: [c.jsxs("div", {
                                className: "flex items-start",
                                children: [c.jsx("input", {
                                    id: A.post_source.original,
                                    name: "notification-method",
                                    type: "radio",
                                    checked: s.sourceType === A.post_source.original,
                                    onChange: () => n.setSourceType(A.post_source.original),
                                    className: "w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                                }), c.jsx("label", {
                                    htmlFor: A.post_source.original,
                                    className: "block ml-3 text-base font-medium text-gray-300",
                                    children: "Yes, I am the original creator"
                                })]
                            }, A.post_source.original), c.jsxs("div", {
                                children: [c.jsxs("div", {
                                    className: "flex items-start",
                                    children: [c.jsx("input", {
                                        id: A.post_source.reposted,
                                        name: "notification-method",
                                        type: "radio",
                                        checked: s.sourceType === A.post_source.reposted,
                                        onChange: () => n.setSourceType(A.post_source.reposted),
                                        className: "w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                                    }), c.jsx("label", {
                                        htmlFor: A.post_source.reposted,
                                        className: "block ml-3 text-base font-medium text-gray-300",
                                        children: "No, I found this post somewhere else and I want to share it with the community here"
                                    })]
                                }), s.sourceType === A.post_source.reposted && c.jsxs("div", {
                                    className: "mt-2 mb-4 pl-[26px]",
                                    children: [c.jsx(kt, {
                                        type: "text",
                                        placeholder: "https://example.com",
                                        htmlName: "source",
                                        className: "mb-3 font-sans",
                                        label: "Link to the source",
                                        required: !0,
                                        value: s.sourceWebsite,
                                        defaultValue: s.sourceWebsite,
                                        onChange: o => {
                                            n.setSourceWebsite(o == null ? void 0 : o.target.value)
                                        }
                                    }), c.jsx(kt, {
                                        type: "text",
                                        placeholder: "John Doe",
                                        htmlName: "source",
                                        className: "font-sans text-sm",
                                        label: "Name of the creator or the source",
                                        value: s.sourceName,
                                        defaultValue: s.sourceName,
                                        onChange: o => {
                                            n.setSourceName(o == null ? void 0 : o.target.value)
                                        }
                                    })]
                                })]
                            }, A.post_source.reposted), c.jsxs("div", {
                                className: "",
                                children: [c.jsxs("div", {
                                    className: "flex items-start",
                                    children: [c.jsx("input", {
                                        id: A.post_source.modified,
                                        name: "notification-method",
                                        type: "radio",
                                        checked: s.sourceType === A.post_source.modified,
                                        onChange: () => n.setSourceType(A.post_source.modified),
                                        className: "w-4 h-4 text-indigo-500 border-dark-800 focus:ring-indigo-400"
                                    }), c.jsx("label", {
                                        htmlFor: A.post_source.modified,
                                        className: "block ml-3 text-base font-medium text-gray-300",
                                        children: "No, I found this post somewhere else and I made significant changes to it"
                                    })]
                                }), s.sourceType === A.post_source.modified && c.jsxs("div", {
                                    className: "mt-2 mb-4 pl-[26px]",
                                    children: [c.jsx(kt, {
                                        type: "text",
                                        placeholder: "https://example.com",
                                        htmlName: "source",
                                        className: "mb-3 font-sans",
                                        label: "Link to the source (valid URL)",
                                        required: !0,
                                        value: s.sourceWebsite,
                                        defaultValue: s.sourceWebsite,
                                        onChange: o => {
                                            n.setSourceWebsite(o == null ? void 0 : o.target.value)
                                        }
                                    }), c.jsx(kt, {
                                        type: "text",
                                        placeholder: "John Doe",
                                        htmlName: "source",
                                        className: "font-sans text-sm",
                                        label: "Name of the creator or the source",
                                        value: s.sourceName,
                                        defaultValue: s.sourceName,
                                        onChange: o => {
                                            n.setSourceName(o == null ? void 0 : o.target.value)
                                        }
                                    })]
                                })]
                            }, A.post_source.modified)]
                        })]
                    }), c.jsxs("p", {
                        className: "max-w-md text-base text-yellow-400",
                        children: [Ma("w-4 h-4 mr-1.5 inline"), "If you repost without crediting the source, your account may be suspended."]
                    })]
                }), c.jsx("div", {
                    className: "flex justify-end mt-auto",
                    children: c.jsx(V, {
                        type: "primary",
                        icon: ds("h-5 w-5"),
                        onClick: () => r("review"),
                        disabled: a || !s.sourceType || (s.sourceType === "modified" || s.sourceType === "reposted") && !s.sourceWebsite || (s.sourceType === "modified" || s.sourceType === "reposted") && !tn(s.sourceWebsite),
                        children: "Submit for review"
                    })
                }), c.jsxs("div", {
                    children: [(s.sourceType === "modified" || s.sourceType === "reposted") && !s.sourceWebsite && c.jsx("p", {
                        className: "mt-1 text-sm text-right text-red-400",
                        children: "You need to add a link to the source website"
                    }), (s.sourceType === "modified" || s.sourceType === "reposted") && s.sourceWebsite && !tn(s.sourceWebsite) && c.jsx("p", {
                        className: "mt-1 text-sm text-right text-red-400",
                        children: "The source website must be a valid URL"
                    })]
                })]
            })]
        })
    }),
    er = ({
        isOpen: t,
        onDeleteModalClose: e,
        post: u
    }) => c.jsx(ru, {
        open: t,
        onClose: e,
        center: !0,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        showCloseIcon: !0,
        classNames: {
            overlay: "customOverlay",
            modal: "max-w-[600px] w-full rounded-3xl overflow-hidden border-dark-600/80 border-2 bg-dark-700 text-white sm:px-20 p-4 py-14"
        },
        children: c.jsxs("div", {
            className: "",
            children: [c.jsxs("div", {
                className: "text-2xl text-center font-bold pb-4",
                children: ["Delete ", (u == null ? void 0 : u.status) === "draft" ? "draft" : "post", "?"]
            }), c.jsxs("p", {
                className: "text-center pb-3",
                children: [c.jsx("span", {
                    className: "text-yellow-300",
                    children: "Careful! "
                }), " This action cannot be undone."]
            }), c.jsxs("div", {
                className: "flex items-center justify-center gap-3 mt-3",
                children: [c.jsxs(Qn, {
                    method: "post",
                    children: [c.jsx("input", {
                        hidden: !0,
                        name: "postId",
                        id: "postId",
                        value: u == null ? void 0 : u.id,
                        readOnly: !0
                    }), c.jsx(V, {
                        htmlType: "submit",
                        htmlName: "action",
                        type: "warning",
                        htmlValue: "delete",
                        icon: hs("w-5 h-5"),
                        children: "Delete"
                    })]
                }), c.jsx(V, {
                    type: "primary",
                    onClick: () => e(),
                    children: "Go back"
                })]
            })]
        })
    }),
    tr = ({
        actions: t,
        values: e,
        post: u
    }) => {
        var s;
        return c.jsxs("div", {
            className: "flex items-stretch max-md:flex-col max-md:gap-3 md:px-1 rounded-lg relative w-full",
            children: [c.jsx("div", {
                className: "px-2 flex items-center justify-center max-md:hidden",
                children: Oa("h-6 w-6 text-fuchsia-400")
            }), c.jsx("div", {
                className: "my-[5px] bg-dark-400 w-[2px] mr-[2px] max-md:hidden"
            }), c.jsx($u, {
                id: "ai/variations-tooltip",
                text: "Create variations with AI"
            }), u.user && c.jsxs(eo, {
                className: "flex gap-3 font-semibold font-sans text-sm max-md:h-[40px] items-center md:justify-center px-4 hover:bg-dark-600 max-md:bg-dark-600 rounded-lg relative transition-colors self-stretch",
                to: `/ai/variations/create?username=${(s=u.user)==null?void 0:s.username}&friendlyId=${u.friendlyId}`,
                id: "ai/variations-tooltip",
                children: [Bu("h-5 w-5"), " ", c.jsx("span", {
                    className: "md:hidden",
                    children: "AI Variations"
                })]
            }), c.jsx($u, {
                id: "ai-edit-tooltip",
                text: "Edit with AI"
            }), c.jsxs("button", {
                onClick: () => t.setAiPromptOpen(n => !n),
                className: "flex gap-3 font-semibold font-sans text-sm max-md:h-[40px] items-center md:justify-center px-3 cursor-pointer rounded-lg relative self-stretch bg-transparent border-none text-inherit hover:bg-dark-600 max-md:bg-dark-600 transition-colors",
                id: "ai-edit-tooltip",
                children: [Da("h-5 w-5"), " ", c.jsx("span", {
                    className: "md:hidden",
                    children: "Edit with AI"
                })]
            })]
        })
    },
    ur = ({
        isFavorite: t,
        postId: e,
        favoriteCount: u = 0,
        isSignedIn: s = !1,
        isCompact: n = !1
    }) => {
        const r = iu(),
            i = to(),
            a = o => {
                if (o.preventDefault(), !s) {
                    i("?create-account", {
                        preventScrollReset: !0
                    });
                    return
                }
                r.submit(o.currentTarget)
            };
        return c.jsxs(r.Form, {
            method: "post",
            action: "/favorites",
            className: "flex h-full",
            onSubmit: a,
            children: [c.jsx("input", {
                type: "hidden",
                name: "postId",
                value: e
            }), c.jsx("input", {
                type: "hidden",
                name: "action",
                value: t ? "remove" : "save"
            }), c.jsxs("button", {
                type: "submit",
                className: `px-5 max-md:w-full pl-4 gap-3 flex bg-transparent max-md:h-[40px] hover:bg-dark-600 max-md:bg-dark-600 text-sm cursor-pointer transition-colors text-offwhite font-sans font-semibold border-none items-center overflow-hidden rounded-lg ${t&&""}`,
                disabled: r.state === "loading" || r.state === "submitting",
                children: [c.jsxs("div", {
                    className: `flex gap-1.5 items-center  ${t?"text-yellow-400":"text-white"}`,
                    children: [r.state === "loading" ? ja("w-5 h-5") : qa("w-5 h-5"), u > 0 && u]
                }), !t && c.jsx("div", {
                    className: "flex items-center",
                    children: "Save to favorites"
                })]
            })]
        })
    },
    un = {
        HTML_MAX_CHARS: 5e4,
        CSS_MAX_CHARS: 5e4
    },
    sr = (t, e) => {
        const u = (t == null ? void 0 : t.length) || 0,
            s = (e == null ? void 0 : e.length) || 0,
            n = u <= un.HTML_MAX_CHARS,
            r = s <= un.CSS_MAX_CHARS;
        return {
            isValid: n && r,
            htmlLength: u,
            cssLength: s,
            isHtmlValid: n,
            isCssValid: r
        }
    },
    nr = ({
        validation: t
    }) => t.isValid ? null : c.jsxs("div", {
        className: "text-red-400 text-sm text-right mt-2",
        children: [!t.isHtmlValid && c.jsxs("span", {
            children: ["HTML exceeds maximum length (", t.htmlLength, "/50000).", " "]
        }), !t.isCssValid && c.jsxs("span", {
            children: ["CSS exceeds maximum length (", t.cssLength, "/50000)"]
        })]
    }),
    co = ({
        post: t,
        isCreator: e,
        isAllowedToEditTags: u,
        values: s,
        actions: n,
        isEditMode: r = !1,
        setSubmitModalOpen: i,
        setSubmitModalActivePage: a,
        user: o,
        favoriteCount: l,
        favoritesIds: h,
        deleteModalOpen: p,
        setDeleteModalOpen: S,
        onClickUpdate: y,
        isLoading: v,
        isCreatePage: T,
        originalPost: R
    }) => {
        var F, $, U, j, O;
        const _ = sr(s.html, s.css);
        return c.jsx(c.Fragment, {
            children: c.jsx("div", {
                className: "block p-6 mt-4 col-span-full bg-dark-500 md:p-2 rounded-xl md:hidden",
                children: c.jsxs("div", {
                    className: "flex flex-col items-stretch h-full gap-3",
                    children: [!T && c.jsxs("div", {
                        className: "flex items-center pl-3",
                        children: [t.viewCount > 0 ? Yn.format(t.viewCount) : 0, " views"]
                    }), c.jsx(Xn, {
                        username: ((F = R == null ? void 0 : R.user) == null ? void 0 : F.username) || ((U = ($ = t == null ? void 0 : t.originalPost) == null ? void 0 : $.user) == null ? void 0 : U.username),
                        friendlyId: ((j = t == null ? void 0 : t.originalPost) == null ? void 0 : j.friendlyId) || (R == null ? void 0 : R.friendlyId),
                        type: ((O = t == null ? void 0 : t.originalPost) == null ? void 0 : O.type) || (R == null ? void 0 : R.type)
                    }), !T && c.jsx(ur, {
                        isFavorite: h.includes(t.id),
                        postId: t.id,
                        isSignedIn: !!o,
                        favoriteCount: l
                    }), e && !T && c.jsxs(c.Fragment, {
                        children: [c.jsxs(V, {
                            type: "secondary",
                            onClick: () => S(!0),
                            small: !0,
                            children: [hs("h-5 w-5 text-gray-400"), " Delete"]
                        }), c.jsx(er, {
                            isOpen: p,
                            onDeleteModalClose: () => S(!1),
                            post: t
                        })]
                    }), (o == null ? void 0 : o.subscription) && !s.isTailwind && c.jsx("div", {
                        className: "flex items-stretch",
                        children: c.jsx(tr, {
                            post: t,
                            values: s,
                            actions: n
                        })
                    }), (o == null ? void 0 : o.role) === A.user_role.admin && !T && c.jsxs(V, {
                        type: "secondary",
                        onClick: () => y("previous"),
                        small: !0,
                        children: [Gt("h-5 w-5"), " Fast Update"]
                    }), u && !T && c.jsxs(V, {
                        type: "primary",
                        onClick: () => y("draft"),
                        small: !0,
                        disabled: !_.isValid || v,
                        children: [Gt(`h-5 w-5 ${v&&"loading-icon"}`), " Update"]
                    }), o && (t == null ? void 0 : t.status) === "draft" && c.jsx(c.Fragment, {
                        children: c.jsxs(V, {
                            type: "primary",
                            onClick: () => {
                                i(!0), a(0)
                            },
                            className: "bg-green-600 hover:bg-green-700 whitespace-nowrap",
                            small: !0,
                            disabled: !_.isValid,
                            children: [ds("h-5 w-5"), " Submit for review"]
                        })
                    }), !_.isValid && c.jsx(nr, {
                        validation: _
                    })]
                })
            })
        })
    };

function lo({
    isEditMode: t,
    setIsEditMode: e
}) {
    return c.jsxs(c.Fragment, {
        children: [c.jsx("div", {
            onClick: () => e(!t),
            id: "mode-switch-tooltip",
            className: " relative flex flex-shrink-0 items-center justify-center h-full w-[100px] border-2 border-transparent rounded-lg cursor-pointer transition-colors ease-in-out duration-200",
            children: c.jsxs("div", {
                className: "flex w-[90%] h-full [&>*]:rounded-lg gap-1 [&>*]:flex [&>*]:justify-start [&>*]:w-full [&>*]:h-full [&>*>*]:inset-0 [&>*>*]:h-full [&>*>*]:w-full [&>*>*]:flex [&>*>*]:items-center [&>*>*]:justify-center",
                children: [c.jsx("div", {
                    className: t ? "hover:bg-dark-300" : "bg-dark-300",
                    children: c.jsx("span", {
                        "aria-hidden": "true",
                        children: Fa("h-5 w-5 text-gray-100")
                    })
                }), c.jsx("div", {
                    className: t ? "bg-dark-300" : "hover:bg-dark-300",
                    children: c.jsx("span", {
                        "aria-hidden": "true",
                        children: Ha("h-5 w-5 text-gray-100")
                    })
                })]
            })
        }), c.jsx($u, {
            id: "mode-switch-tooltip",
            text: "Change editor mode"
        })]
    })
}
const Wt = Symbol("changed"),
    nt = Symbol("classList"),
    pe = Symbol("CustomElements"),
    It = Symbol("content"),
    Su = Symbol("dataset"),
    Ue = Symbol("doctype"),
    Pu = Symbol("DOMParser"),
    w = Symbol("end"),
    ft = Symbol("EventTarget"),
    Ht = Symbol("globals"),
    be = Symbol("image"),
    it = Symbol("mime"),
    De = Symbol("MutationObserver"),
    g = Symbol("next"),
    rr = Symbol("ownerElement"),
    K = Symbol("prev"),
    Q = Symbol("private"),
    tt = Symbol("sheet"),
    se = Symbol("start"),
    yu = Symbol("style"),
    mt = Symbol("upgrade"),
    q = Symbol("value"),
    ir = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(t => t.charCodeAt(0))),
    ar = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(t => t.charCodeAt(0)));
var vu;
const ho = new Map([
        [0, 65533],
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376]
    ]),
    Uu = (vu = String.fromCodePoint) !== null && vu !== void 0 ? vu : function(t) {
        let e = "";
        return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e
    };

function or(t) {
    var e;
    return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = ho.get(t)) !== null && e !== void 0 ? e : t
}
var X;
(function(t) {
    t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"
})(X || (X = {}));
const fo = 32;
var ge;
(function(t) {
    t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"
})(ge || (ge = {}));

function Gu(t) {
    return t >= X.ZERO && t <= X.NINE
}

function po(t) {
    return t >= X.UPPER_A && t <= X.UPPER_F || t >= X.LOWER_A && t <= X.LOWER_F
}

function bo(t) {
    return t >= X.UPPER_A && t <= X.UPPER_Z || t >= X.LOWER_A && t <= X.LOWER_Z || Gu(t)
}

function go(t) {
    return t === X.EQUALS || bo(t)
}
var z;
(function(t) {
    t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"
})(z || (z = {}));
var We;
(function(t) {
    t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"
})(We || (We = {}));
class mo {
    constructor(e, u, s) {
        this.decodeTree = e, this.emitCodePoint = u, this.errors = s, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = We.Strict
    }
    startEntity(e) {
        this.decodeMode = e, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1
    }
    write(e, u) {
        switch (this.state) {
            case z.EntityStart:
                return e.charCodeAt(u) === X.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(e, u));
            case z.NumericStart:
                return this.stateNumericStart(e, u);
            case z.NumericDecimal:
                return this.stateNumericDecimal(e, u);
            case z.NumericHex:
                return this.stateNumericHex(e, u);
            case z.NamedEntity:
                return this.stateNamedEntity(e, u)
        }
    }
    stateNumericStart(e, u) {
        return u >= e.length ? -1 : (e.charCodeAt(u) | fo) === X.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(e, u))
    }
    addToNumericResult(e, u, s, n) {
        if (u !== s) {
            const r = s - u;
            this.result = this.result * Math.pow(n, r) + parseInt(e.substr(u, r), n), this.consumed += r
        }
    }
    stateNumericHex(e, u) {
        const s = u;
        for (; u < e.length;) {
            const n = e.charCodeAt(u);
            if (Gu(n) || po(n)) u += 1;
            else return this.addToNumericResult(e, s, u, 16), this.emitNumericEntity(n, 3)
        }
        return this.addToNumericResult(e, s, u, 16), -1
    }
    stateNumericDecimal(e, u) {
        const s = u;
        for (; u < e.length;) {
            const n = e.charCodeAt(u);
            if (Gu(n)) u += 1;
            else return this.addToNumericResult(e, s, u, 10), this.emitNumericEntity(n, 2)
        }
        return this.addToNumericResult(e, s, u, 10), -1
    }
    emitNumericEntity(e, u) {
        var s;
        if (this.consumed <= u) return (s = this.errors) === null || s === void 0 || s.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e === X.SEMI) this.consumed += 1;
        else if (this.decodeMode === We.Strict) return 0;
        return this.emitCodePoint(or(this.result), this.consumed), this.errors && (e !== X.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed
    }
    stateNamedEntity(e, u) {
        const {
            decodeTree: s
        } = this;
        let n = s[this.treeIndex],
            r = (n & ge.VALUE_LENGTH) >> 14;
        for (; u < e.length; u++, this.excess++) {
            const i = e.charCodeAt(u);
            if (this.treeIndex = lr(s, n, this.treeIndex + Math.max(1, r), i), this.treeIndex < 0) return this.result === 0 || this.decodeMode === We.Attribute && (r === 0 || go(i)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (n = s[this.treeIndex], r = (n & ge.VALUE_LENGTH) >> 14, r !== 0) {
                if (i === X.SEMI) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
                this.decodeMode !== We.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0)
            }
        }
        return -1
    }
    emitNotTerminatedNamedEntity() {
        var e;
        const {
            result: u,
            decodeTree: s
        } = this, n = (s[u] & ge.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(u, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed
    }
    emitNamedEntityData(e, u, s) {
        const {
            decodeTree: n
        } = this;
        return this.emitCodePoint(u === 1 ? n[e] & ~ge.VALUE_LENGTH : n[e + 1], s), u === 3 && this.emitCodePoint(n[e + 2], s), s
    }
    end() {
        var e;
        switch (this.state) {
            case z.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== We.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case z.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case z.NumericHex:
                return this.emitNumericEntity(0, 3);
            case z.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case z.EntityStart:
                return 0
        }
    }
}

function cr(t) {
    let e = "";
    const u = new mo(t, s => e += Uu(s));
    return function(n, r) {
        let i = 0,
            a = 0;
        for (;
            (a = n.indexOf("&", a)) >= 0;) {
            e += n.slice(i, a), u.startEntity(r);
            const l = u.write(n, a + 1);
            if (l < 0) {
                i = a + u.end();
                break
            }
            i = a + l, a = l === 0 ? i + 1 : i
        }
        const o = e + n.slice(i);
        return e = "", o
    }
}

function lr(t, e, u, s) {
    const n = (e & ge.BRANCH_LENGTH) >> 7,
        r = e & ge.JUMP_TABLE;
    if (n === 0) return r !== 0 && s === r ? u : -1;
    if (r) {
        const o = s - r;
        return o < 0 || o >= n ? -1 : t[u + o] - 1
    }
    let i = u,
        a = i + n - 1;
    for (; i <= a;) {
        const o = i + a >>> 1,
            l = t[o];
        if (l < s) i = o + 1;
        else if (l > s) a = o - 1;
        else return t[o + n]
    }
    return -1
}
cr(ir);
cr(ar);
var x;
(function(t) {
    t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"
})(x || (x = {}));
var f;
(function(t) {
    t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.SpecialStartSequence = 23] = "SpecialStartSequence", t[t.InSpecialTag = 24] = "InSpecialTag", t[t.BeforeEntity = 25] = "BeforeEntity", t[t.BeforeNumericEntity = 26] = "BeforeNumericEntity", t[t.InNamedEntity = 27] = "InNamedEntity", t[t.InNumericEntity = 28] = "InNumericEntity", t[t.InHexEntity = 29] = "InHexEntity"
})(f || (f = {}));

function Te(t) {
    return t === x.Space || t === x.NewLine || t === x.Tab || t === x.FormFeed || t === x.CarriageReturn
}

function Lt(t) {
    return t === x.Slash || t === x.Gt || Te(t)
}

function sn(t) {
    return t >= x.Zero && t <= x.Nine
}

function xo(t) {
    return t >= x.LowerA && t <= x.LowerZ || t >= x.UpperA && t <= x.UpperZ
}

function So(t) {
    return t >= x.UpperA && t <= x.UpperF || t >= x.LowerA && t <= x.LowerF
}
var ve;
(function(t) {
    t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"
})(ve || (ve = {}));
const ue = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
};
class dr {
    constructor({
        xmlMode: e = !1,
        decodeEntities: u = !0
    }, s) {
        this.cbs = s, this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = f.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = e, this.decodeEntities = u, this.entityTrie = e ? ar : ir
    }
    reset() {
        this.state = f.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = f.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0
    }
    write(e) {
        this.offset += this.buffer.length, this.buffer = e, this.parse()
    }
    end() {
        this.running && this.finish()
    }
    pause() {
        this.running = !1
    }
    resume() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse()
    }
    getIndex() {
        return this.index
    }
    getSectionStart() {
        return this.sectionStart
    }
    stateText(e) {
        e === x.Lt || !this.decodeEntities && this.fastForwardTo(x.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = f.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === x.Amp && (this.state = f.BeforeEntity)
    }
    stateSpecialStartSequence(e) {
        const u = this.sequenceIndex === this.currentSequence.length;
        if (!(u ? Lt(e) : (e | 32) === this.currentSequence[this.sequenceIndex])) this.isSpecial = !1;
        else if (!u) {
            this.sequenceIndex++;
            return
        }
        this.sequenceIndex = 0, this.state = f.InTagName, this.stateInTagName(e)
    }
    stateInSpecialTag(e) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (e === x.Gt || Te(e)) {
                const u = this.index - this.currentSequence.length;
                if (this.sectionStart < u) {
                    const s = this.index;
                    this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = s
                }
                this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
                return
            }
            this.sequenceIndex = 0
        }(e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === ue.TitleEnd ? this.decodeEntities && e === x.Amp && (this.state = f.BeforeEntity) : this.fastForwardTo(x.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === x.Lt)
    }
    stateCDATASequence(e) {
        e === ue.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === ue.Cdata.length && (this.state = f.InCommentLike, this.currentSequence = ue.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = f.InDeclaration, this.stateInDeclaration(e))
    }
    fastForwardTo(e) {
        for (; ++this.index < this.buffer.length + this.offset;)
            if (this.buffer.charCodeAt(this.index - this.offset) === e) return !0;
        return this.index = this.buffer.length + this.offset - 1, !1
    }
    stateInCommentLike(e) {
        e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = f.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0)
    }
    isTagStartChar(e) {
        return this.xmlMode ? !Lt(e) : xo(e)
    }
    startSpecial(e, u) {
        this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = f.SpecialStartSequence
    }
    stateBeforeTagName(e) {
        if (e === x.ExclamationMark) this.state = f.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (e === x.Questionmark) this.state = f.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(e)) {
            const u = e | 32;
            this.sectionStart = this.index, !this.xmlMode && u === ue.TitleEnd[2] ? this.startSpecial(ue.TitleEnd, 3) : this.state = !this.xmlMode && u === ue.ScriptEnd[2] ? f.BeforeSpecialS : f.InTagName
        } else e === x.Slash ? this.state = f.BeforeClosingTagName : (this.state = f.Text, this.stateText(e))
    }
    stateInTagName(e) {
        Lt(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e))
    }
    stateBeforeClosingTagName(e) {
        Te(e) || (e === x.Gt ? this.state = f.Text : (this.state = this.isTagStartChar(e) ? f.InClosingTagName : f.InSpecialComment, this.sectionStart = this.index))
    }
    stateInClosingTagName(e) {
        (e === x.Gt || Te(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.AfterClosingTagName, this.stateAfterClosingTagName(e))
    }
    stateAfterClosingTagName(e) {
        (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.state = f.Text, this.baseState = f.Text, this.sectionStart = this.index + 1)
    }
    stateBeforeAttributeName(e) {
        e === x.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = f.InSpecialTag, this.sequenceIndex = 0) : this.state = f.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : e === x.Slash ? this.state = f.InSelfClosingTag : Te(e) || (this.state = f.InAttributeName, this.sectionStart = this.index)
    }
    stateInSelfClosingTag(e) {
        e === x.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = f.Text, this.baseState = f.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Te(e) || (this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e))
    }
    stateInAttributeName(e) {
        (e === x.Eq || Lt(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = f.AfterAttributeName, this.stateAfterAttributeName(e))
    }
    stateAfterAttributeName(e) {
        e === x.Eq ? this.state = f.BeforeAttributeValue : e === x.Slash || e === x.Gt ? (this.cbs.onattribend(ve.NoValue, this.index), this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : Te(e) || (this.cbs.onattribend(ve.NoValue, this.index), this.state = f.InAttributeName, this.sectionStart = this.index)
    }
    stateBeforeAttributeValue(e) {
        e === x.DoubleQuote ? (this.state = f.InAttributeValueDq, this.sectionStart = this.index + 1) : e === x.SingleQuote ? (this.state = f.InAttributeValueSq, this.sectionStart = this.index + 1) : Te(e) || (this.sectionStart = this.index, this.state = f.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e))
    }
    handleInAttributeValue(e, u) {
        e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === x.DoubleQuote ? ve.Double : ve.Single, this.index), this.state = f.BeforeAttributeName) : this.decodeEntities && e === x.Amp && (this.baseState = this.state, this.state = f.BeforeEntity)
    }
    stateInAttributeValueDoubleQuotes(e) {
        this.handleInAttributeValue(e, x.DoubleQuote)
    }
    stateInAttributeValueSingleQuotes(e) {
        this.handleInAttributeValue(e, x.SingleQuote)
    }
    stateInAttributeValueNoQuotes(e) {
        Te(e) || e === x.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ve.Unquoted, this.index), this.state = f.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === x.Amp && (this.baseState = this.state, this.state = f.BeforeEntity)
    }
    stateBeforeDeclaration(e) {
        e === x.OpeningSquareBracket ? (this.state = f.CDATASequence, this.sequenceIndex = 0) : this.state = e === x.Dash ? f.BeforeComment : f.InDeclaration
    }
    stateInDeclaration(e) {
        (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1)
    }
    stateInProcessingInstruction(e) {
        (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = f.Text, this.sectionStart = this.index + 1)
    }
    stateBeforeComment(e) {
        e === x.Dash ? (this.state = f.InCommentLike, this.currentSequence = ue.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = f.InDeclaration
    }
    stateInSpecialComment(e) {
        (e === x.Gt || this.fastForwardTo(x.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = f.Text, this.sectionStart = this.index + 1)
    }
    stateBeforeSpecialS(e) {
        const u = e | 32;
        u === ue.ScriptEnd[3] ? this.startSpecial(ue.ScriptEnd, 4) : u === ue.StyleEnd[3] ? this.startSpecial(ue.StyleEnd, 4) : (this.state = f.InTagName, this.stateInTagName(e))
    }
    stateBeforeEntity(e) {
        this.entityExcess = 1, this.entityResult = 0, e === x.Number ? this.state = f.BeforeNumericEntity : e === x.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = f.InNamedEntity, this.stateInNamedEntity(e))
    }
    stateInNamedEntity(e) {
        if (this.entityExcess += 1, this.trieIndex = lr(this.entityTrie, this.trieCurrent, this.trieIndex + 1, e), this.trieIndex < 0) {
            this.emitNamedEntity(), this.index--;
            return
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const u = this.trieCurrent & ge.VALUE_LENGTH;
        if (u) {
            const s = (u >> 14) - 1;
            if (!this.allowLegacyEntity() && e !== x.Semi) this.trieIndex += s;
            else {
                const n = this.index - this.entityExcess + 1;
                n > this.sectionStart && this.emitPartial(this.sectionStart, n), this.entityResult = this.trieIndex, this.trieIndex += s, this.entityExcess = 0, this.sectionStart = this.index + 1, s === 0 && this.emitNamedEntity()
            }
        }
    }
    emitNamedEntity() {
        if (this.state = this.baseState, this.entityResult === 0) return;
        switch ((this.entityTrie[this.entityResult] & ge.VALUE_LENGTH) >> 14) {
            case 1:
                {
                    this.emitCodePoint(this.entityTrie[this.entityResult] & ~ge.VALUE_LENGTH);
                    break
                }
            case 2:
                {
                    this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
                    break
                }
            case 3:
                this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2])
        }
    }
    stateBeforeNumericEntity(e) {
        (e | 32) === x.LowerX ? (this.entityExcess++, this.state = f.InHexEntity) : (this.state = f.InNumericEntity, this.stateInNumericEntity(e))
    }
    emitNumericEntity(e) {
        const u = this.index - this.entityExcess - 1;
        u + 2 + +(this.state === f.InHexEntity) !== this.index && (u > this.sectionStart && this.emitPartial(this.sectionStart, u), this.sectionStart = this.index + Number(e), this.emitCodePoint(or(this.entityResult))), this.state = this.baseState
    }
    stateInNumericEntity(e) {
        e === x.Semi ? this.emitNumericEntity(!0) : sn(e) ? (this.entityResult = this.entityResult * 10 + (e - x.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--)
    }
    stateInHexEntity(e) {
        e === x.Semi ? this.emitNumericEntity(!0) : sn(e) ? (this.entityResult = this.entityResult * 16 + (e - x.Zero), this.entityExcess++) : So(e) ? (this.entityResult = this.entityResult * 16 + ((e | 32) - x.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--)
    }
    allowLegacyEntity() {
        return !this.xmlMode && (this.baseState === f.Text || this.baseState === f.InSpecialTag)
    }
    cleanup() {
        this.running && this.sectionStart !== this.index && (this.state === f.Text || this.state === f.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === f.InAttributeValueDq || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index))
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running
    }
    parse() {
        for (; this.shouldContinue();) {
            const e = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
                case f.Text:
                    {
                        this.stateText(e);
                        break
                    }
                case f.SpecialStartSequence:
                    {
                        this.stateSpecialStartSequence(e);
                        break
                    }
                case f.InSpecialTag:
                    {
                        this.stateInSpecialTag(e);
                        break
                    }
                case f.CDATASequence:
                    {
                        this.stateCDATASequence(e);
                        break
                    }
                case f.InAttributeValueDq:
                    {
                        this.stateInAttributeValueDoubleQuotes(e);
                        break
                    }
                case f.InAttributeName:
                    {
                        this.stateInAttributeName(e);
                        break
                    }
                case f.InCommentLike:
                    {
                        this.stateInCommentLike(e);
                        break
                    }
                case f.InSpecialComment:
                    {
                        this.stateInSpecialComment(e);
                        break
                    }
                case f.BeforeAttributeName:
                    {
                        this.stateBeforeAttributeName(e);
                        break
                    }
                case f.InTagName:
                    {
                        this.stateInTagName(e);
                        break
                    }
                case f.InClosingTagName:
                    {
                        this.stateInClosingTagName(e);
                        break
                    }
                case f.BeforeTagName:
                    {
                        this.stateBeforeTagName(e);
                        break
                    }
                case f.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(e);
                        break
                    }
                case f.InAttributeValueSq:
                    {
                        this.stateInAttributeValueSingleQuotes(e);
                        break
                    }
                case f.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(e);
                        break
                    }
                case f.BeforeClosingTagName:
                    {
                        this.stateBeforeClosingTagName(e);
                        break
                    }
                case f.AfterClosingTagName:
                    {
                        this.stateAfterClosingTagName(e);
                        break
                    }
                case f.BeforeSpecialS:
                    {
                        this.stateBeforeSpecialS(e);
                        break
                    }
                case f.InAttributeValueNq:
                    {
                        this.stateInAttributeValueNoQuotes(e);
                        break
                    }
                case f.InSelfClosingTag:
                    {
                        this.stateInSelfClosingTag(e);
                        break
                    }
                case f.InDeclaration:
                    {
                        this.stateInDeclaration(e);
                        break
                    }
                case f.BeforeDeclaration:
                    {
                        this.stateBeforeDeclaration(e);
                        break
                    }
                case f.BeforeComment:
                    {
                        this.stateBeforeComment(e);
                        break
                    }
                case f.InProcessingInstruction:
                    {
                        this.stateInProcessingInstruction(e);
                        break
                    }
                case f.InNamedEntity:
                    {
                        this.stateInNamedEntity(e);
                        break
                    }
                case f.BeforeEntity:
                    {
                        this.stateBeforeEntity(e);
                        break
                    }
                case f.InHexEntity:
                    {
                        this.stateInHexEntity(e);
                        break
                    }
                case f.InNumericEntity:
                    {
                        this.stateInNumericEntity(e);
                        break
                    }
                default:
                    this.stateBeforeNumericEntity(e)
            }
            this.index++
        }
        this.cleanup()
    }
    finish() {
        this.state === f.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend()
    }
    handleTrailingData() {
        const e = this.buffer.length + this.offset;
        this.state === f.InCommentLike ? this.currentSequence === ue.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === f.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === f.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === f.InTagName || this.state === f.BeforeAttributeName || this.state === f.BeforeAttributeValue || this.state === f.AfterAttributeName || this.state === f.InAttributeName || this.state === f.InAttributeValueSq || this.state === f.InAttributeValueDq || this.state === f.InAttributeValueNq || this.state === f.InClosingTagName || this.cbs.ontext(this.sectionStart, e)
    }
    emitPartial(e, u) {
        this.baseState !== f.Text && this.baseState !== f.InSpecialTag ? this.cbs.onattribdata(e, u) : this.cbs.ontext(e, u)
    }
    emitCodePoint(e) {
        this.baseState !== f.Text && this.baseState !== f.InSpecialTag ? this.cbs.onattribentity(e) : this.cbs.ontextentity(e)
    }
}
const ut = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]),
    M = new Set(["p"]),
    nn = new Set(["thead", "tbody"]),
    rn = new Set(["dd", "dt"]),
    an = new Set(["rt", "rp"]),
    yo = new Map([
        ["tr", new Set(["tr", "th", "td"])],
        ["th", new Set(["th"])],
        ["td", new Set(["thead", "th", "td"])],
        ["body", new Set(["head", "link", "script"])],
        ["li", new Set(["li"])],
        ["p", M],
        ["h1", M],
        ["h2", M],
        ["h3", M],
        ["h4", M],
        ["h5", M],
        ["h6", M],
        ["select", ut],
        ["input", ut],
        ["output", ut],
        ["button", ut],
        ["datalist", ut],
        ["textarea", ut],
        ["option", new Set(["option"])],
        ["optgroup", new Set(["optgroup", "option"])],
        ["dd", rn],
        ["dt", rn],
        ["address", M],
        ["article", M],
        ["aside", M],
        ["blockquote", M],
        ["details", M],
        ["div", M],
        ["dl", M],
        ["fieldset", M],
        ["figcaption", M],
        ["figure", M],
        ["footer", M],
        ["form", M],
        ["header", M],
        ["hr", M],
        ["main", M],
        ["nav", M],
        ["ol", M],
        ["pre", M],
        ["section", M],
        ["table", M],
        ["ul", M],
        ["rt", an],
        ["rp", an],
        ["tbody", nn],
        ["tfoot", nn]
    ]),
    vo = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
    on = new Set(["math", "svg"]),
    cn = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]),
    wo = /\s|\//;
let fs = class {
    constructor(e, u = {}) {
        var s, n, r, i, a;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ? ? {}, this.lowerCaseTagNames = (s = u.lowerCaseTags) !== null && s !== void 0 ? s : !u.xmlMode, this.lowerCaseAttributeNames = (n = u.lowerCaseAttributeNames) !== null && n !== void 0 ? n : !u.xmlMode, this.tokenizer = new((r = u.Tokenizer) !== null && r !== void 0 ? r : dr)(this.options, this), (a = (i = this.cbs).onparserinit) === null || a === void 0 || a.call(i, this)
    }
    ontext(e, u) {
        var s, n;
        const r = this.getSlice(e, u);
        this.endIndex = u - 1, (n = (s = this.cbs).ontext) === null || n === void 0 || n.call(s, r), this.startIndex = u
    }
    ontextentity(e) {
        var u, s;
        const n = this.tokenizer.getSectionStart();
        this.endIndex = n - 1, (s = (u = this.cbs).ontext) === null || s === void 0 || s.call(u, Uu(e)), this.startIndex = n
    }
    isVoidElement(e) {
        return !this.options.xmlMode && vo.has(e)
    }
    onopentagname(e, u) {
        this.endIndex = u;
        let s = this.getSlice(e, u);
        this.lowerCaseTagNames && (s = s.toLowerCase()), this.emitOpenTag(s)
    }
    emitOpenTag(e) {
        var u, s, n, r;
        this.openTagStart = this.startIndex, this.tagname = e;
        const i = !this.options.xmlMode && yo.get(e);
        if (i)
            for (; this.stack.length > 0 && i.has(this.stack[this.stack.length - 1]);) {
                const a = this.stack.pop();
                (s = (u = this.cbs).onclosetag) === null || s === void 0 || s.call(u, a, !0)
            }
        this.isVoidElement(e) || (this.stack.push(e), on.has(e) ? this.foreignContext.push(!0) : cn.has(e) && this.foreignContext.push(!1)), (r = (n = this.cbs).onopentagname) === null || r === void 0 || r.call(n, e), this.cbs.onopentag && (this.attribs = {})
    }
    endOpenTag(e) {
        var u, s;
        this.startIndex = this.openTagStart, this.attribs && ((s = (u = this.cbs).onopentag) === null || s === void 0 || s.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""
    }
    onopentagend(e) {
        this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1
    }
    onclosetag(e, u) {
        var s, n, r, i, a, o;
        this.endIndex = u;
        let l = this.getSlice(e, u);
        if (this.lowerCaseTagNames && (l = l.toLowerCase()), (on.has(l) || cn.has(l)) && this.foreignContext.pop(), this.isVoidElement(l)) !this.options.xmlMode && l === "br" && ((n = (s = this.cbs).onopentagname) === null || n === void 0 || n.call(s, "br"), (i = (r = this.cbs).onopentag) === null || i === void 0 || i.call(r, "br", {}, !0), (o = (a = this.cbs).onclosetag) === null || o === void 0 || o.call(a, "br", !1));
        else {
            const h = this.stack.lastIndexOf(l);
            if (h !== -1)
                if (this.cbs.onclosetag) {
                    let p = this.stack.length - h;
                    for (; p--;) this.cbs.onclosetag(this.stack.pop(), p !== 0)
                } else this.stack.length = h;
            else !this.options.xmlMode && l === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0))
        }
        this.startIndex = u + 1
    }
    onselfclosingtag(e) {
        this.endIndex = e, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e)
    }
    closeCurrentTag(e) {
        var u, s;
        const n = this.tagname;
        this.endOpenTag(e), this.stack[this.stack.length - 1] === n && ((s = (u = this.cbs).onclosetag) === null || s === void 0 || s.call(u, n, !e), this.stack.pop())
    }
    onattribname(e, u) {
        this.startIndex = e;
        const s = this.getSlice(e, u);
        this.attribname = this.lowerCaseAttributeNames ? s.toLowerCase() : s
    }
    onattribdata(e, u) {
        this.attribvalue += this.getSlice(e, u)
    }
    onattribentity(e) {
        this.attribvalue += Uu(e)
    }
    onattribend(e, u) {
        var s, n;
        this.endIndex = u, (n = (s = this.cbs).onattribute) === null || n === void 0 || n.call(s, this.attribname, this.attribvalue, e === ve.Double ? '"' : e === ve.Single ? "'" : e === ve.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""
    }
    getInstructionName(e) {
        const u = e.search(wo);
        let s = u < 0 ? e : e.substr(0, u);
        return this.lowerCaseTagNames && (s = s.toLowerCase()), s
    }
    ondeclaration(e, u) {
        this.endIndex = u;
        const s = this.getSlice(e, u);
        if (this.cbs.onprocessinginstruction) {
            const n = this.getInstructionName(s);
            this.cbs.onprocessinginstruction(`!${n}`, `!${s}`)
        }
        this.startIndex = u + 1
    }
    onprocessinginstruction(e, u) {
        this.endIndex = u;
        const s = this.getSlice(e, u);
        if (this.cbs.onprocessinginstruction) {
            const n = this.getInstructionName(s);
            this.cbs.onprocessinginstruction(`?${n}`, `?${s}`)
        }
        this.startIndex = u + 1
    }
    oncomment(e, u, s) {
        var n, r, i, a;
        this.endIndex = u, (r = (n = this.cbs).oncomment) === null || r === void 0 || r.call(n, this.getSlice(e, u - s)), (a = (i = this.cbs).oncommentend) === null || a === void 0 || a.call(i), this.startIndex = u + 1
    }
    oncdata(e, u, s) {
        var n, r, i, a, o, l, h, p, S, y;
        this.endIndex = u;
        const v = this.getSlice(e, u - s);
        this.options.xmlMode || this.options.recognizeCDATA ? ((r = (n = this.cbs).oncdatastart) === null || r === void 0 || r.call(n), (a = (i = this.cbs).ontext) === null || a === void 0 || a.call(i, v), (l = (o = this.cbs).oncdataend) === null || l === void 0 || l.call(o)) : ((p = (h = this.cbs).oncomment) === null || p === void 0 || p.call(h, `[CDATA[${v}]]`), (y = (S = this.cbs).oncommentend) === null || y === void 0 || y.call(S)), this.startIndex = u + 1
    }
    onend() {
        var e, u;
        if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (let s = this.stack.length; s > 0; this.cbs.onclosetag(this.stack[--s], !0));
        }(u = (e = this.cbs).onend) === null || u === void 0 || u.call(e)
    }
    reset() {
        var e, u, s, n;
        (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (s = this.cbs).onparserinit) === null || n === void 0 || n.call(s, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1
    }
    parseComplete(e) {
        this.reset(), this.end(e)
    }
    getSlice(e, u) {
        for (; e - this.bufferOffset >= this.buffers[0].length;) this.shiftBuffer();
        let s = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset);
        for (; u - this.bufferOffset > this.buffers[0].length;) this.shiftBuffer(), s += this.buffers[0].slice(0, u - this.bufferOffset);
        return s
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift()
    }
    write(e) {
        var u, s;
        if (this.ended) {
            (s = (u = this.cbs).onerror) === null || s === void 0 || s.call(u, new Error(".write() after done!"));
            return
        }
        this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++)
    }
    end(e) {
        var u, s;
        if (this.ended) {
            (s = (u = this.cbs).onerror) === null || s === void 0 || s.call(u, new Error(".end() after done!"));
            return
        }
        e && this.write(e), this.ended = !0, this.tokenizer.end()
    }
    pause() {
        this.tokenizer.pause()
    }
    resume() {
        for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;) this.tokenizer.write(this.buffers[this.writeIndex++]);
        this.ended && this.tokenizer.end()
    }
    parseChunk(e) {
        this.write(e)
    }
    done(e) {
        this.end(e)
    }
};
var k;
(function(t) {
    t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"
})(k || (k = {}));

function hr(t) {
    return t.type === k.Tag || t.type === k.Script || t.type === k.Style
}
const fr = k.Root,
    pr = k.Text,
    br = k.Directive,
    gr = k.Comment,
    mr = k.Script,
    xr = k.Style,
    Sr = k.Tag,
    yr = k.CDATA,
    vr = k.Doctype,
    Co = Object.freeze(Object.defineProperty({
        __proto__: null,
        CDATA: yr,
        Comment: gr,
        Directive: br,
        Doctype: vr,
        get ElementType() {
            return k
        },
        Root: fr,
        Script: mr,
        Style: xr,
        Tag: Sr,
        Text: pr,
        isTag: hr
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let wr = class {
    constructor() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
    }
    get parentNode() {
        return this.parent
    }
    set parentNode(e) {
        this.parent = e
    }
    get previousSibling() {
        return this.prev
    }
    set previousSibling(e) {
        this.prev = e
    }
    get nextSibling() {
        return this.next
    }
    set nextSibling(e) {
        this.next = e
    }
    cloneNode(e = !1) {
        return Rr(this, e)
    }
};
class ps extends wr {
    constructor(e) {
        super(), this.data = e
    }
    get nodeValue() {
        return this.data
    }
    set nodeValue(e) {
        this.data = e
    }
}
let Wu = class extends ps {
        constructor() {
            super(...arguments), this.type = k.Text
        }
        get nodeType() {
            return 3
        }
    },
    Cr = class extends ps {
        constructor() {
            super(...arguments), this.type = k.Comment
        }
        get nodeType() {
            return 8
        }
    };
class Er extends ps {
    constructor(e, u) {
        super(u), this.name = e, this.type = k.Directive
    }
    get nodeType() {
        return 1
    }
}
class bs extends wr {
    constructor(e) {
        super(), this.children = e
    }
    get firstChild() {
        var e;
        return (e = this.children[0]) !== null && e !== void 0 ? e : null
    }
    get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null
    }
    get childNodes() {
        return this.children
    }
    set childNodes(e) {
        this.children = e
    }
}
class Nr extends bs {
    constructor() {
        super(...arguments), this.type = k.CDATA
    }
    get nodeType() {
        return 4
    }
}
let zu = class extends bs {
        constructor() {
            super(...arguments), this.type = k.Root
        }
        get nodeType() {
            return 9
        }
    },
    Tr = class extends bs {
        constructor(e, u, s = [], n = e === "script" ? k.Script : e === "style" ? k.Style : k.Tag) {
            super(s), this.name = e, this.attribs = u, this.type = n
        }
        get nodeType() {
            return 1
        }
        get tagName() {
            return this.name
        }
        set tagName(e) {
            this.name = e
        }
        get attributes() {
            return Object.keys(this.attribs).map(e => {
                var u, s;
                return {
                    name: e,
                    value: this.attribs[e],
                    namespace: (u = this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e],
                    prefix: (s = this["x-attribsPrefix"]) === null || s === void 0 ? void 0 : s[e]
                }
            })
        }
    };

function oe(t) {
    return hr(t)
}

function au(t) {
    return t.type === k.CDATA
}

function Xe(t) {
    return t.type === k.Text
}

function gs(t) {
    return t.type === k.Comment
}

function Eo(t) {
    return t.type === k.Directive
}

function Ar(t) {
    return t.type === k.Root
}

function Ve(t) {
    return Object.prototype.hasOwnProperty.call(t, "children")
}

function Rr(t, e = !1) {
    let u;
    if (Xe(t)) u = new Wu(t.data);
    else if (gs(t)) u = new Cr(t.data);
    else if (oe(t)) {
        const s = e ? wu(t.children) : [],
            n = new Tr(t.name, { ...t.attribs
            }, s);
        s.forEach(r => r.parent = n), t.namespace != null && (n.namespace = t.namespace), t["x-attribsNamespace"] && (n["x-attribsNamespace"] = { ...t["x-attribsNamespace"]
        }), t["x-attribsPrefix"] && (n["x-attribsPrefix"] = { ...t["x-attribsPrefix"]
        }), u = n
    } else if (au(t)) {
        const s = e ? wu(t.children) : [],
            n = new Nr(s);
        s.forEach(r => r.parent = n), u = n
    } else if (Ar(t)) {
        const s = e ? wu(t.children) : [],
            n = new zu(s);
        s.forEach(r => r.parent = n), t["x-mode"] && (n["x-mode"] = t["x-mode"]), u = n
    } else if (Eo(t)) {
        const s = new Er(t.name, t.data);
        t["x-name"] != null && (s["x-name"] = t["x-name"], s["x-publicId"] = t["x-publicId"], s["x-systemId"] = t["x-systemId"]), u = s
    } else throw new Error(`Not implemented yet: ${t.type}`);
    return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u
}

function wu(t) {
    const e = t.map(u => Rr(u, !0));
    for (let u = 1; u < e.length; u++) e[u].prev = e[u - 1], e[u - 1].next = e[u];
    return e
}
const ln = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
};
class zt {
    constructor(e, u, s) {
        this.dom = [], this.root = new zu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (s = u, u = ln), typeof e == "object" && (u = e, e = void 0), this.callback = e ? ? null, this.options = u ? ? ln, this.elementCB = s ? ? null
    }
    onparserinit(e) {
        this.parser = e
    }
    onreset() {
        this.dom = [], this.root = new zu(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
    }
    onend() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
    }
    onerror(e) {
        this.handleCallback(e)
    }
    onclosetag() {
        this.lastNode = null;
        const e = this.tagStack.pop();
        this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
    }
    onopentag(e, u) {
        const s = this.options.xmlMode ? k.Tag : void 0,
            n = new Tr(e, u, void 0, s);
        this.addNode(n), this.tagStack.push(n)
    }
    ontext(e) {
        const {
            lastNode: u
        } = this;
        if (u && u.type === k.Text) u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
        else {
            const s = new Wu(e);
            this.addNode(s), this.lastNode = s
        }
    }
    oncomment(e) {
        if (this.lastNode && this.lastNode.type === k.Comment) {
            this.lastNode.data += e;
            return
        }
        const u = new Cr(e);
        this.addNode(u), this.lastNode = u
    }
    oncommentend() {
        this.lastNode = null
    }
    oncdatastart() {
        const e = new Wu(""),
            u = new Nr([e]);
        this.addNode(u), e.parent = u, this.lastNode = e
    }
    oncdataend() {
        this.lastNode = null
    }
    onprocessinginstruction(e, u) {
        const s = new Er(e, u);
        this.addNode(s)
    }
    handleCallback(e) {
        if (typeof this.callback == "function") this.callback(e, this.dom);
        else if (e) throw e
    }
    addNode(e) {
        const u = this.tagStack[this.tagStack.length - 1],
            s = u.children[u.children.length - 1];
        this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), s && (e.prev = s, s.next = e), e.parent = u, this.lastNode = null
    }
}
const dn = /["&'<>$\x80-\uFFFF]/g,
    No = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"]
    ]),
    To = String.prototype.codePointAt != null ? (t, e) => t.codePointAt(e) : (t, e) => (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e);

function kr(t) {
    let e = "",
        u = 0,
        s;
    for (;
        (s = dn.exec(t)) !== null;) {
        const n = s.index,
            r = t.charCodeAt(n),
            i = No.get(r);
        i !== void 0 ? (e += t.substring(u, n) + i, u = n + 1) : (e += `${t.substring(u,n)}&#x${To(t,n).toString(16)};`, u = dn.lastIndex += +((r & 64512) === 55296))
    }
    return e + t.substr(u)
}

function Ir(t, e) {
    return function(s) {
        let n, r = 0,
            i = "";
        for (; n = t.exec(s);) r !== n.index && (i += s.substring(r, n.index)), i += e.get(n[0].charCodeAt(0)), r = n.index + 1;
        return i + s.substring(r)
    }
}
const Ao = Ir(/["&\u00A0]/g, new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"]
    ])),
    Ro = Ir(/[&<>\u00A0]/g, new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"]
    ])),
    ko = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(t => [t.toLowerCase(), t])),
    Io = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(t => [t.toLowerCase(), t])),
    Lo = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);

function _o(t) {
    return t.replace(/"/g, "&quot;")
}

function Mo(t, e) {
    var u;
    if (!t) return;
    const s = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? _o : e.xmlMode || e.encodeEntities !== "utf8" ? kr : Ao;
    return Object.keys(t).map(n => {
        var r, i;
        const a = (r = t[n]) !== null && r !== void 0 ? r : "";
        return e.xmlMode === "foreign" && (n = (i = Io.get(n)) !== null && i !== void 0 ? i : n), !e.emptyAttrs && !e.xmlMode && a === "" ? n : `${n}="${s(a)}"`
    }).join(" ")
}
const hn = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);

function ms(t, e = {}) {
    const u = "length" in t ? t : [t];
    let s = "";
    for (let n = 0; n < u.length; n++) s += Oo(u[n], e);
    return s
}

function Oo(t, e) {
    switch (t.type) {
        case fr:
            return ms(t.children, e);
        case vr:
        case br:
            return Fo(t);
        case gr:
            return Bo(t);
        case yr:
            return Vo(t);
        case mr:
        case xr:
        case Sr:
            return qo(t, e);
        case pr:
            return Ho(t, e)
    }
}
const Do = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]),
    jo = new Set(["svg", "math"]);

function qo(t, e) {
    var u;
    e.xmlMode === "foreign" && (t.name = (u = ko.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && Do.has(t.parent.name) && (e = { ...e,
        xmlMode: !1
    })), !e.xmlMode && jo.has(t.name) && (e = { ...e,
        xmlMode: "foreign"
    });
    let s = `<${t.name}`;
    const n = Mo(t.attribs, e);
    return n && (s += ` ${n}`), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && hn.has(t.name)) ? (e.xmlMode || (s += " "), s += "/>") : (s += ">", t.children.length > 0 && (s += ms(t.children, e)), (e.xmlMode || !hn.has(t.name)) && (s += `</${t.name}>`)), s
}

function Fo(t) {
    return `<${t.data}>`
}

function Ho(t, e) {
    var u;
    let s = t.data || "";
    return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && Lo.has(t.parent.name)) && (s = e.xmlMode || e.encodeEntities !== "utf8" ? kr(s) : Ro(s)), s
}

function Vo(t) {
    return `<![CDATA[${t.children[0].data}]]>`
}

function Bo(t) {
    return `<!--${t.data}-->`
}

function Lr(t, e) {
    return ms(t, e)
}

function $o(t, e) {
    return Ve(t) ? t.children.map(u => Lr(u, e)).join("") : ""
}

function Vt(t) {
    return Array.isArray(t) ? t.map(Vt).join("") : oe(t) ? t.name === "br" ? `
` : Vt(t.children) : au(t) ? Vt(t.children) : Xe(t) ? t.data : ""
}

function Kt(t) {
    return Array.isArray(t) ? t.map(Kt).join("") : Ve(t) && !gs(t) ? Kt(t.children) : Xe(t) ? t.data : ""
}

function Ku(t) {
    return Array.isArray(t) ? t.map(Ku).join("") : Ve(t) && (t.type === k.Tag || au(t)) ? Ku(t.children) : Xe(t) ? t.data : ""
}

function _r(t) {
    return Ve(t) ? t.children : []
}

function Mr(t) {
    return t.parent || null
}

function Po(t) {
    const e = Mr(t);
    if (e != null) return _r(e);
    const u = [t];
    let {
        prev: s,
        next: n
    } = t;
    for (; s != null;) u.unshift(s), {
        prev: s
    } = s;
    for (; n != null;) u.push(n), {
        next: n
    } = n;
    return u
}

function Uo(t, e) {
    var u;
    return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]
}

function Go(t, e) {
    return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null
}

function Wo(t) {
    return t.name
}

function zo(t) {
    let {
        next: e
    } = t;
    for (; e !== null && !oe(e);)({
        next: e
    } = e);
    return e
}

function Ko(t) {
    let {
        prev: e
    } = t;
    for (; e !== null && !oe(e);)({
        prev: e
    } = e);
    return e
}

function wt(t) {
    if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
        const e = t.parent.children,
            u = e.lastIndexOf(t);
        u >= 0 && e.splice(u, 1)
    }
    t.next = null, t.prev = null, t.parent = null
}

function Xo(t, e) {
    const u = e.prev = t.prev;
    u && (u.next = e);
    const s = e.next = t.next;
    s && (s.prev = e);
    const n = e.parent = t.parent;
    if (n) {
        const r = n.children;
        r[r.lastIndexOf(t)] = e, t.parent = null
    }
}

function Jo(t, e) {
    if (wt(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
        const u = t.children[t.children.length - 2];
        u.next = e, e.prev = u
    } else e.prev = null
}

function Yo(t, e) {
    wt(e);
    const {
        parent: u
    } = t, s = t.next;
    if (e.next = s, e.prev = t, t.next = e, e.parent = u, s) {
        if (s.prev = e, u) {
            const n = u.children;
            n.splice(n.lastIndexOf(s), 0, e)
        }
    } else u && u.children.push(e)
}

function Zo(t, e) {
    if (wt(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
        const u = t.children[1];
        u.prev = e, e.next = u
    } else e.next = null
}

function Qo(t, e) {
    wt(e);
    const {
        parent: u
    } = t;
    if (u) {
        const s = u.children;
        s.splice(s.indexOf(t), 0, e)
    }
    t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e
}

function ou(t, e, u = !0, s = 1 / 0) {
    return Or(t, Array.isArray(e) ? e : [e], u, s)
}

function Or(t, e, u, s) {
    const n = [],
        r = [e],
        i = [0];
    for (;;) {
        if (i[0] >= r[0].length) {
            if (i.length === 1) return n;
            r.shift(), i.shift();
            continue
        }
        const a = r[0][i[0]++];
        if (t(a) && (n.push(a), --s <= 0)) return n;
        u && Ve(a) && a.children.length > 0 && (i.unshift(0), r.unshift(a.children))
    }
}

function e0(t, e) {
    return e.find(t)
}

function xs(t, e, u = !0) {
    let s = null;
    for (let n = 0; n < e.length && !s; n++) {
        const r = e[n];
        if (oe(r)) t(r) ? s = r : u && r.children.length > 0 && (s = xs(t, r.children, !0));
        else continue
    }
    return s
}

function Dr(t, e) {
    return e.some(u => oe(u) && (t(u) || Dr(t, u.children)))
}

function t0(t, e) {
    const u = [],
        s = [e],
        n = [0];
    for (;;) {
        if (n[0] >= s[0].length) {
            if (s.length === 1) return u;
            s.shift(), n.shift();
            continue
        }
        const r = s[0][n[0]++];
        oe(r) && (t(r) && u.push(r), r.children.length > 0 && (n.unshift(0), s.unshift(r.children)))
    }
}
const Xt = {
    tag_name(t) {
        return typeof t == "function" ? e => oe(e) && t(e.name) : t === "*" ? oe : e => oe(e) && e.name === t
    },
    tag_type(t) {
        return typeof t == "function" ? e => t(e.type) : e => e.type === t
    },
    tag_contains(t) {
        return typeof t == "function" ? e => Xe(e) && t(e.data) : e => Xe(e) && e.data === t
    }
};

function jr(t, e) {
    return typeof e == "function" ? u => oe(u) && e(u.attribs[t]) : u => oe(u) && u.attribs[t] === e
}

function u0(t, e) {
    return u => t(u) || e(u)
}

function qr(t) {
    const e = Object.keys(t).map(u => {
        const s = t[u];
        return Object.prototype.hasOwnProperty.call(Xt, u) ? Xt[u](s) : jr(u, s)
    });
    return e.length === 0 ? null : e.reduce(u0)
}

function s0(t, e) {
    const u = qr(t);
    return u ? u(e) : !0
}

function n0(t, e, u, s = 1 / 0) {
    const n = qr(t);
    return n ? ou(n, e, u, s) : []
}

function r0(t, e, u = !0) {
    return Array.isArray(e) || (e = [e]), xs(jr("id", t), e, u)
}

function at(t, e, u = !0, s = 1 / 0) {
    return ou(Xt.tag_name(t), e, u, s)
}

function i0(t, e, u = !0, s = 1 / 0) {
    return ou(Xt.tag_type(t), e, u, s)
}

function a0(t) {
    let e = t.length;
    for (; --e >= 0;) {
        const u = t[e];
        if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
            t.splice(e, 1);
            continue
        }
        for (let s = u.parent; s; s = s.parent)
            if (t.includes(s)) {
                t.splice(e, 1);
                break
            }
    }
    return t
}
var he;
(function(t) {
    t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"
})(he || (he = {}));

function Fr(t, e) {
    const u = [],
        s = [];
    if (t === e) return 0;
    let n = Ve(t) ? t : t.parent;
    for (; n;) u.unshift(n), n = n.parent;
    for (n = Ve(e) ? e : e.parent; n;) s.unshift(n), n = n.parent;
    const r = Math.min(u.length, s.length);
    let i = 0;
    for (; i < r && u[i] === s[i];) i++;
    if (i === 0) return he.DISCONNECTED;
    const a = u[i - 1],
        o = a.children,
        l = u[i],
        h = s[i];
    return o.indexOf(l) > o.indexOf(h) ? a === e ? he.FOLLOWING | he.CONTAINED_BY : he.FOLLOWING : a === t ? he.PRECEDING | he.CONTAINS : he.PRECEDING
}

function o0(t) {
    return t = t.filter((e, u, s) => !s.includes(e, u + 1)), t.sort((e, u) => {
        const s = Fr(e, u);
        return s & he.PRECEDING ? -1 : s & he.FOLLOWING ? 1 : 0
    }), t
}

function Ss(t) {
    const e = Jt(f0, t);
    return e ? e.name === "feed" ? c0(e) : l0(e) : null
}

function c0(t) {
    var e;
    const u = t.children,
        s = {
            type: "atom",
            items: at("entry", u).map(i => {
                var a;
                const {
                    children: o
                } = i, l = {
                    media: Hr(o)
                };
                ne(l, "id", "id", o), ne(l, "title", "title", o);
                const h = (a = Jt("link", o)) === null || a === void 0 ? void 0 : a.attribs.href;
                h && (l.link = h);
                const p = je("summary", o) || je("content", o);
                p && (l.description = p);
                const S = je("updated", o);
                return S && (l.pubDate = new Date(S)), l
            })
        };
    ne(s, "id", "id", u), ne(s, "title", "title", u);
    const n = (e = Jt("link", u)) === null || e === void 0 ? void 0 : e.attribs.href;
    n && (s.link = n), ne(s, "description", "subtitle", u);
    const r = je("updated", u);
    return r && (s.updated = new Date(r)), ne(s, "author", "email", u, !0), s
}

function l0(t) {
    var e, u;
    const s = (u = (e = Jt("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [],
        n = {
            type: t.name.substr(0, 3),
            id: "",
            items: at("item", t.children).map(i => {
                const {
                    children: a
                } = i, o = {
                    media: Hr(a)
                };
                ne(o, "id", "guid", a), ne(o, "title", "title", a), ne(o, "link", "link", a), ne(o, "description", "description", a);
                const l = je("pubDate", a) || je("dc:date", a);
                return l && (o.pubDate = new Date(l)), o
            })
        };
    ne(n, "title", "title", s), ne(n, "link", "link", s), ne(n, "description", "description", s);
    const r = je("lastBuildDate", s);
    return r && (n.updated = new Date(r)), ne(n, "author", "managingEditor", s, !0), n
}
const d0 = ["url", "type", "lang"],
    h0 = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];

function Hr(t) {
    return at("media:content", t).map(e => {
        const {
            attribs: u
        } = e, s = {
            medium: u.medium,
            isDefault: !!u.isDefault
        };
        for (const n of d0) u[n] && (s[n] = u[n]);
        for (const n of h0) u[n] && (s[n] = parseInt(u[n], 10));
        return u.expression && (s.expression = u.expression), s
    })
}

function Jt(t, e) {
    return at(t, e, !0, 1)[0]
}

function je(t, e, u = !1) {
    return Kt(at(t, e, u, 1)).trim()
}

function ne(t, e, u, s, n = !1) {
    const r = je(u, s, n);
    r && (t[e] = r)
}

function f0(t) {
    return t === "rss" || t === "feed" || t === "rdf:RDF"
}
const ys = Object.freeze(Object.defineProperty({
    __proto__: null,
    get DocumentPosition() {
        return he
    },
    append: Yo,
    appendChild: Jo,
    compareDocumentPosition: Fr,
    existsOne: Dr,
    filter: ou,
    find: Or,
    findAll: t0,
    findOne: xs,
    findOneChild: e0,
    getAttributeValue: Uo,
    getChildren: _r,
    getElementById: r0,
    getElements: n0,
    getElementsByTagName: at,
    getElementsByTagType: i0,
    getFeed: Ss,
    getInnerHTML: $o,
    getName: Wo,
    getOuterHTML: Lr,
    getParent: Mr,
    getSiblings: Po,
    getText: Vt,
    hasAttrib: Go,
    hasChildren: Ve,
    innerText: Ku,
    isCDATA: au,
    isComment: gs,
    isDocument: Ar,
    isTag: oe,
    isText: Xe,
    nextElementSibling: zo,
    prepend: Qo,
    prependChild: Zo,
    prevElementSibling: Ko,
    removeElement: wt,
    removeSubsets: a0,
    replaceElement: Xo,
    testElement: s0,
    textContent: Kt,
    uniqueSort: o0
}, Symbol.toStringTag, {
    value: "Module"
}));

function Vr(t, e) {
    const u = new zt(void 0, e);
    return new fs(u, e).end(t), u.root
}

function Br(t, e) {
    return Vr(t, e).children
}

function p0(t, e, u) {
    const s = new zt(t, e, u);
    return new fs(s, e)
}
const b0 = {
    xmlMode: !0
};

function g0(t, e = b0) {
    return Ss(Br(t, e))
}
const m0 = Object.freeze(Object.defineProperty({
        __proto__: null,
        DefaultHandler: zt,
        DomHandler: zt,
        DomUtils: ys,
        ElementType: Co,
        Parser: fs,
        Tokenizer: dr,
        createDomStream: p0,
        getFeed: Ss,
        parseDOM: Br,
        parseDocument: Vr,
        parseFeed: g0
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Be = -1,
    I = 1,
    Y = 2,
    ee = 3,
    Re = 8,
    Oe = 9,
    rt = 10,
    Ae = 11,
    x0 = new Set(["ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "COL", "COLGROUP", "DD", "DIV", "DL", "DT", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL", "P"]),
    S0 = -1,
    y0 = 1,
    v0 = 4,
    w0 = 128,
    C0 = 1,
    fn = 2,
    pn = 4,
    E0 = 8,
    N0 = 16,
    T0 = 32,
    Yt = "http://www.w3.org/2000/svg",
    {
        assign: A0,
        create: R0,
        defineProperties: k0,
        entries: I0,
        getOwnPropertyDescriptors: bh,
        keys: L0,
        setPrototypeOf: re
    } = Object,
    xt = String,
    ae = t => t.nodeType === I ? t[w] : t,
    Ct = ({
        ownerDocument: t
    }) => t[it].ignoreCase,
    me = (t, e) => {
        t[g] = e, e[K] = t
    },
    $r = (t, e, u) => {
        me(t, e), me(ae(e), u)
    },
    _0 = (t, e, u, s) => {
        me(t, e), me(ae(u), s)
    },
    cu = (t, e, u) => {
        me(t, e), me(e, u)
    },
    Xu = ({
        localName: t,
        ownerDocument: e
    }) => e[it].ignoreCase ? t.toUpperCase() : t,
    Pr = (t, e) => {
        t && (t[g] = e), e && (e[K] = t)
    },
    qe = new WeakMap;
let lu = !1;
const Zt = new WeakMap,
    Je = new WeakMap,
    du = (t, e, u, s) => {
        lu && Je.has(t) && t.attributeChangedCallback && t.constructor.observedAttributes.includes(e) && t.attributeChangedCallback(e, u, s)
    },
    Ur = (t, e) => u => {
        if (Je.has(u)) {
            const s = Je.get(u);
            s.connected !== e && u.isConnected === e && (s.connected = e, t in u && u[t]())
        }
    },
    bn = Ur("connectedCallback", !0),
    Ju = t => {
        if (lu) {
            bn(t), qe.has(t) && (t = qe.get(t).shadowRoot);
            let {
                [g]: e, [w]: u
            } = t;
            for (; e !== u;) e.nodeType === I && bn(e), e = e[g]
        }
    },
    gn = Ur("disconnectedCallback", !1),
    M0 = t => {
        if (lu) {
            gn(t), qe.has(t) && (t = qe.get(t).shadowRoot);
            let {
                [g]: e, [w]: u
            } = t;
            for (; e !== u;) e.nodeType === I && gn(e), e = e[g]
        }
    };
class O0 {
    constructor(e) {
        this.ownerDocument = e, this.registry = new Map, this.waiting = new Map, this.active = !1
    }
    define(e, u, s = {}) {
        const {
            ownerDocument: n,
            registry: r,
            waiting: i
        } = this;
        if (r.has(e)) throw new Error("unable to redefine " + e);
        if (Zt.has(u)) throw new Error("unable to redefine the same class: " + u);
        this.active = lu = !0;
        const {
            extends: a
        } = s;
        Zt.set(u, {
            ownerDocument: n,
            options: {
                is: a ? e : ""
            },
            localName: a || e
        });
        const o = a ? l => l.localName === a && l.getAttribute("is") === e : l => l.localName === e;
        if (r.set(e, {
                Class: u,
                check: o
            }), i.has(e)) {
            for (const l of i.get(e)) l(u);
            i.delete(e)
        }
        n.querySelectorAll(a ? `${a}[is="${e}"]` : e).forEach(this.upgrade, this)
    }
    upgrade(e) {
        if (Je.has(e)) return;
        const {
            ownerDocument: u,
            registry: s
        } = this, n = e.getAttribute("is") || e.localName;
        if (s.has(n)) {
            const {
                Class: r,
                check: i
            } = s.get(n);
            if (i(e)) {
                const {
                    attributes: a,
                    isConnected: o
                } = e;
                for (const h of a) e.removeAttributeNode(h);
                const l = I0(e);
                for (const [h] of l) delete e[h];
                re(e, r.prototype), u[mt] = {
                    element: e,
                    values: l
                }, new r(u, n), Je.set(e, {
                    connected: o
                });
                for (const h of a) e.setAttributeNode(h);
                o && e.connectedCallback && e.connectedCallback()
            }
        }
    }
    whenDefined(e) {
        const {
            registry: u,
            waiting: s
        } = this;
        return new Promise(n => {
            u.has(e) ? n(u.get(e).Class) : (s.has(e) || s.set(e, []), s.get(e).push(n))
        })
    }
    get(e) {
        const u = this.registry.get(e);
        return u && u.Class
    }
}
const {
    Parser: D0
} = m0, st = (t, e, u) => {
    const s = t[w];
    return e.parentNode = t, $r(s[K], e, s), u && e.nodeType === I && Ju(e), e
}, j0 = (t, e, u, s, n) => {
    u[q] = s, u.ownerElement = t, cu(e[K], u, e), u.name === "class" && (t.className = s), n && du(t, u.name, null, s)
}, Gr = (t, e, u) => {
    const {
        active: s,
        registry: n
    } = t[pe];
    let r = t,
        i = null;
    const a = new D0({
        onprocessinginstruction(o, l) {
            o.toLowerCase() === "!doctype" && (t.doctype = l.slice(o.length).trim())
        },
        onopentag(o, l) {
            let h = !0;
            if (e) {
                if (i) r = st(r, t.createElementNS(Yt, o), s), r.ownerSVGElement = i, h = !1;
                else if (o === "svg" || o === "SVG") i = t.createElementNS(Yt, o), r = st(r, i, s), h = !1;
                else if (s) {
                    const S = o.includes("-") ? o : l.is || "";
                    if (S && n.has(S)) {
                        const {
                            Class: y
                        } = n.get(S);
                        r = st(r, new y, s), delete l.is, h = !1
                    }
                }
            }
            h && (r = st(r, t.createElement(o), !1));
            let p = r[w];
            for (const S of L0(l)) j0(r, p, t.createAttribute(S), l[S], s)
        },
        oncomment(o) {
            st(r, t.createComment(o), s)
        },
        ontext(o) {
            st(r, t.createTextNode(o), s)
        },
        onclosetag() {
            e && r === i && (i = null), r = r.parentNode
        }
    }, {
        lowerCaseAttributeNames: !1,
        decodeEntities: !0,
        xmlMode: !e
    });
    return a.write(u), a.end(), t
}, Qt = new Map, Z = (t, e) => {
    for (const u of [].concat(t)) Qt.set(u, e), Qt.set(u.toUpperCase(), e)
};
var mn = {},
    Yu;
try {
    const {
        performance: t
    } = io;
    Yu = mn.performance = t
} catch {
    Yu = mn.performance = {
        now() {
            return +new Date
        }
    }
}
const Wr = ({
        [g]: t,
        [w]: e
    }, u) => {
        for (; t !== e;) {
            switch (t.nodeType) {
                case Y:
                    zr(t, u);
                    break;
                case ee:
                case Re:
                    Kr(t, u);
                    break;
                case I:
                    Jr(t, u), t = ae(t);
                    break;
                case rt:
                    Xr(t, u);
                    break
            }
            t = t[g]
        }
        const s = u.length - 1,
            n = u[s];
        typeof n == "number" && n < 0 ? u[s] += Be : u.push(Be)
    },
    zr = (t, e) => {
        e.push(Y, t.name);
        const u = t[q].trim();
        u && e.push(u)
    },
    Kr = (t, e) => {
        const u = t[q];
        u.trim() && e.push(t.nodeType, u)
    },
    q0 = (t, e) => {
        e.push(t.nodeType), Wr(t, e)
    },
    Xr = ({
        name: t,
        publicId: e,
        systemId: u
    }, s) => {
        s.push(rt, t), e && s.push(e), u && s.push(u)
    },
    Jr = (t, e) => {
        e.push(I, t.localName), Wr(t, e)
    },
    Yr = (t, e, u, s, n, r) => ({
        type: t,
        target: e,
        addedNodes: u,
        removedNodes: s,
        attributeName: n,
        oldValue: r
    }),
    xn = (t, e, u, s, n, r) => {
        if (!s || s.includes(u)) {
            const {
                callback: i,
                records: a,
                scheduled: o
            } = t;
            a.push(Yr("attributes", e, [], [], u, n ? r : void 0)), o || (t.scheduled = !0, Promise.resolve().then(() => {
                t.scheduled = !1, i(a.splice(0), t)
            }))
        }
    },
    vs = (t, e, u) => {
        const {
            ownerDocument: s
        } = t, {
            active: n,
            observers: r
        } = s[De];
        if (n) {
            for (const i of r)
                for (const [a, {
                        childList: o,
                        subtree: l,
                        attributes: h,
                        attributeFilter: p,
                        attributeOldValue: S
                    }] of i.nodes)
                    if (o) {
                        if (l && (a === s || a.contains(t)) || !l && a.children.includes(t)) {
                            xn(i, t, e, p, S, u);
                            break
                        }
                    } else if (h && a === t) {
                xn(i, t, e, p, S, u);
                break
            }
        }
    },
    St = (t, e) => {
        const {
            ownerDocument: u
        } = t, {
            active: s,
            observers: n
        } = u[De];
        if (s) {
            for (const r of n)
                for (const [i, {
                        subtree: a,
                        childList: o,
                        characterData: l
                    }] of r.nodes)
                    if (o && (e && (i === e || a && i.contains(e)) || !e && (a && (i === u || i.contains(t)) || !a && i[l ? "childNodes" : "children"].includes(t)))) {
                        const {
                            callback: h,
                            records: p,
                            scheduled: S
                        } = r;
                        p.push(Yr("childList", i, e ? [] : [t], e ? [t] : [])), S || (r.scheduled = !0, Promise.resolve().then(() => {
                            r.scheduled = !1, h(p.splice(0), r)
                        }));
                        break
                    }
        }
    };
class F0 {
    constructor(e) {
        const u = new Set;
        this.observers = u, this.active = !1, this.class = class {
            constructor(n) {
                this.callback = n, this.nodes = new Map, this.records = [], this.scheduled = !1
            }
            disconnect() {
                this.records.splice(0), this.nodes.clear(), u.delete(this), e[De].active = !!u.size
            }
            observe(n, r = {
                subtree: !1,
                childList: !1,
                attributes: !1,
                attributeFilter: null,
                attributeOldValue: !1,
                characterData: !1
            }) {
                ("attributeOldValue" in r || "attributeFilter" in r) && (r.attributes = !0), r.childList = !!r.childList, r.subtree = !!r.subtree, this.nodes.set(n, r), u.add(this), e[De].active = !0
            }
            takeRecords() {
                return this.records.splice(0)
            }
        }
    }
}
const H0 = new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "class", "contenteditable", "controls", "default", "defer", "disabled", "draggable", "formnovalidate", "hidden", "id", "ismap", "itemscope", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected", "style", "truespeed"]),
    Zu = (t, e) => {
        const {
            [q]: u, name: s
        } = e;
        e.ownerElement = t, cu(t, e, t[g]), s === "class" && (t.className = u), vs(t, s, null), du(t, s, null, u)
    },
    Sn = (t, e) => {
        const {
            [q]: u, name: s
        } = e;
        me(e[K], e[g]), e.ownerElement = e[K] = e[g] = null, s === "class" && (t[nt] = null), vs(t, s, u), du(t, s, u, null)
    },
    L = {
        get(t, e) {
            return t.hasAttribute(e)
        },
        set(t, e, u) {
            u ? t.setAttribute(e, "") : t.removeAttribute(e)
        }
    },
    Fe = {
        get(t, e) {
            return parseFloat(t.getAttribute(e) || 0)
        },
        set(t, e, u) {
            t.setAttribute(e, u)
        }
    },
    b = {
        get(t, e) {
            return t.getAttribute(e) || ""
        },
        set(t, e, u) {
            t.setAttribute(e, u)
        }
    },
    Bt = new WeakMap;

function V0(t, e) {
    return typeof e == "function" ? e.call(t.target, t) : e.handleEvent(t), t._stopImmediatePropagationFlag
}

function B0({
    currentTarget: t,
    target: e
}) {
    const u = Bt.get(t);
    if (u && u.has(this.type)) {
        const s = u.get(this.type);
        t === e ? this.eventPhase = this.AT_TARGET : this.eventPhase = this.BUBBLING_PHASE, this.currentTarget = t, this.target = e;
        for (const [n, r] of s)
            if (r && r.once && s.delete(n), V0(this, n)) break;
        return delete this.currentTarget, delete this.target, this.cancelBubble
    }
}
class ws {
    constructor() {
        Bt.set(this, new Map)
    }
    _getParent() {
        return null
    }
    addEventListener(e, u, s) {
        const n = Bt.get(this);
        n.has(e) || n.set(e, new Map), n.get(e).set(u, s)
    }
    removeEventListener(e, u) {
        const s = Bt.get(this);
        if (s.has(e)) {
            const n = s.get(e);
            n.delete(u) && !n.size && s.delete(e)
        }
    }
    dispatchEvent(e) {
        let u = this;
        for (e.eventPhase = e.CAPTURING_PHASE; u;) u.dispatchEvent && e._path.push({
            currentTarget: u,
            target: this
        }), u = e.bubbles && u._getParent && u._getParent();
        return e._path.some(B0, e), e._path = [], e.eventPhase = e.NONE, !e.defaultPrevented
    }
}
class we extends Array {
    item(e) {
        return e < this.length ? this[e] : null
    }
}
const yn = ({
    parentNode: t
}) => {
    let e = 0;
    for (; t;) e++, t = t.parentNode;
    return e
};
let Qe = class extends ws {
    static get ELEMENT_NODE() {
        return I
    }
    static get ATTRIBUTE_NODE() {
        return Y
    }
    static get TEXT_NODE() {
        return ee
    }
    static get COMMENT_NODE() {
        return Re
    }
    static get DOCUMENT_NODE() {
        return Oe
    }
    static get DOCUMENT_FRAGMENT_NODE() {
        return Ae
    }
    static get DOCUMENT_TYPE_NODE() {
        return rt
    }
    constructor(e, u, s) {
        super(), this.ownerDocument = e, this.localName = u, this.nodeType = s, this.parentNode = null, this[g] = null, this[K] = null
    }
    get ELEMENT_NODE() {
        return I
    }
    get ATTRIBUTE_NODE() {
        return Y
    }
    get TEXT_NODE() {
        return ee
    }
    get COMMENT_NODE() {
        return Re
    }
    get DOCUMENT_NODE() {
        return Oe
    }
    get DOCUMENT_FRAGMENT_NODE() {
        return Ae
    }
    get DOCUMENT_TYPE_NODE() {
        return rt
    }
    get baseURI() {
        const e = this.nodeType === Oe ? this : this.ownerDocument;
        if (e) {
            const u = e.querySelector("base");
            if (u) return u.getAttribute("href");
            const {
                location: s
            } = e.defaultView;
            if (s) return s.href
        }
        return null
    }
    get isConnected() {
        return !1
    }
    get nodeName() {
        return this.localName
    }
    get parentElement() {
        return null
    }
    get previousSibling() {
        return null
    }
    get previousElementSibling() {
        return null
    }
    get nextSibling() {
        return null
    }
    get nextElementSibling() {
        return null
    }
    get childNodes() {
        return new we
    }
    get firstChild() {
        return null
    }
    get lastChild() {
        return null
    }
    get nodeValue() {
        return null
    }
    set nodeValue(e) {}
    get textContent() {
        return null
    }
    set textContent(e) {}
    normalize() {}
    cloneNode() {
        return null
    }
    contains() {
        return !1
    }
    insertBefore(e, u) {
        return e
    }
    appendChild(e) {
        return e
    }
    replaceChild(e, u) {
        return u
    }
    removeChild(e) {
        return e
    }
    toString() {
        return ""
    }
    hasChildNodes() {
        return !!this.lastChild
    }
    isSameNode(e) {
        return this === e
    }
    compareDocumentPosition(e) {
        let u = 0;
        if (this !== e) {
            let s = yn(this),
                n = yn(e);
            if (s < n) u += pn, this.contains(e) && (u += N0);
            else if (n < s) u += fn, e.contains(this) && (u += E0);
            else if (s && n) {
                const {
                    childNodes: r
                } = this.parentNode;
                r.indexOf(this) < r.indexOf(e) ? u += pn : u += fn
            }(!s || !n) && (u += T0, u += C0)
        }
        return u
    }
    isEqualNode(e) {
        if (this === e) return !0;
        if (this.nodeType === e.nodeType) {
            switch (this.nodeType) {
                case Oe:
                case Ae:
                    {
                        const u = this.childNodes,
                            s = e.childNodes;
                        return u.length === s.length && u.every((n, r) => n.isEqualNode(s[r]))
                    }
            }
            return this.toString() === e.toString()
        }
        return !1
    }
    _getParent() {
        return this.parentNode
    }
    getRootNode() {
        let e = this;
        for (; e.parentNode;) e = e.parentNode;
        return e.nodeType === Oe ? e.documentElement : e
    }
};
const $0 = /"/g;
let Et = class Zr extends Qe {
    constructor(e, u, s = "") {
        super(e, "#attribute", Y), this.ownerElement = null, this.name = xt(u), this[q] = xt(s), this[Wt] = !1
    }
    get value() {
        return this[q]
    }
    set value(e) {
        const {
            [q]: u, name: s, ownerElement: n
        } = this;
        this[q] = xt(e), this[Wt] = !0, n && (vs(n, s, u), du(n, s, u, this[q]))
    }
    cloneNode() {
        const {
            ownerDocument: e,
            name: u,
            [q]: s
        } = this;
        return new Zr(e, u, s)
    }
    toString() {
        const {
            name: e,
            [q]: u
        } = this;
        return H0.has(e) && !u ? e : `${e}="${u.replace($0,"&quot;")}"`
    }
    toJSON() {
        const e = [];
        return zr(this, e), e
    }
};
const Qr = ({
        ownerDocument: t,
        parentNode: e
    }) => {
        for (; e;) {
            if (e === t) return !0;
            e = e.parentNode || e.host
        }
        return !1
    },
    ei = ({
        parentNode: t
    }) => {
        if (t) switch (t.nodeType) {
            case Oe:
            case Ae:
                return null
        }
        return t
    },
    vt = ({
        [K]: t
    }) => {
        switch (t ? t.nodeType : 0) {
            case Be:
                return t[se];
            case ee:
            case Re:
                return t
        }
        return null
    },
    Ke = t => {
        const e = ae(t)[g];
        return e && (e.nodeType === Be ? null : e)
    },
    Cs = t => {
        let e = Ke(t);
        for (; e && e.nodeType !== I;) e = Ke(e);
        return e
    },
    ti = t => {
        let e = vt(t);
        for (; e && e.nodeType !== I;) e = vt(e);
        return e
    },
    Es = (t, e) => {
        const u = t.createDocumentFragment();
        return u.append(...e), u
    },
    ui = (t, e) => {
        const {
            ownerDocument: u,
            parentNode: s
        } = t;
        s && s.insertBefore(Es(u, e), t)
    },
    si = (t, e) => {
        const {
            ownerDocument: u,
            parentNode: s
        } = t;
        s && s.insertBefore(Es(u, e), ae(t)[g])
    },
    ni = (t, e) => {
        const {
            ownerDocument: u,
            parentNode: s
        } = t;
        s && (s.insertBefore(Es(u, e), t), t.remove())
    },
    ri = (t, e, u) => {
        const {
            parentNode: s,
            nodeType: n
        } = e;
        (t || u) && (Pr(t, u), e[K] = null, ae(e)[g] = null), s && (e.parentNode = null, St(e, s), n === I && M0(e))
    };
let hu = class extends Qe {
        constructor(e, u, s, n) {
            super(e, u, s), this[q] = xt(n)
        }
        get isConnected() {
            return Qr(this)
        }
        get parentElement() {
            return ei(this)
        }
        get previousSibling() {
            return vt(this)
        }
        get nextSibling() {
            return Ke(this)
        }
        get previousElementSibling() {
            return ti(this)
        }
        get nextElementSibling() {
            return Cs(this)
        }
        before(...e) {
            ui(this, e)
        }
        after(...e) {
            si(this, e)
        }
        replaceWith(...e) {
            ni(this, e)
        }
        remove() {
            ri(this[K], this, this[g])
        }
        get data() {
            return this[q]
        }
        set data(e) {
            this[q] = xt(e), St(this, this.parentNode)
        }
        get nodeValue() {
            return this.data
        }
        set nodeValue(e) {
            this.data = e
        }
        get textContent() {
            return this.data
        }
        set textContent(e) {
            this.data = e
        }
        get length() {
            return this.data.length
        }
        substringData(e, u) {
            return this.data.substr(e, u)
        }
        appendData(e) {
            this.data += e
        }
        insertData(e, u) {
            const {
                data: s
            } = this;
            this.data = s.slice(0, e) + u + s.slice(e)
        }
        deleteData(e, u) {
            const {
                data: s
            } = this;
            this.data = s.slice(0, e) + s.slice(e + u)
        }
        replaceData(e, u, s) {
            const {
                data: n
            } = this;
            this.data = n.slice(0, e) + s + n.slice(e + u)
        }
        toJSON() {
            const e = [];
            return Kr(this, e), e
        }
    },
    Ns = class ii extends hu {
        constructor(e, u = "") {
            super(e, "#comment", Re, u)
        }
        cloneNode() {
            const {
                ownerDocument: e,
                [q]: u
            } = this;
            return new ii(e, u)
        }
        toString() {
            return `<!--${this[q]}-->`
        }
    };
var P0 = {
    trueFunc: function() {
        return !0
    },
    falseFunc: function() {
        return !1
    }
};
const N = Kn(P0);
var C;
(function(t) {
    t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"
})(C || (C = {}));
var W;
(function(t) {
    t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"
})(W || (W = {}));
const vn = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
    U0 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    G0 = new Map([
        [126, W.Element],
        [94, W.Start],
        [36, W.End],
        [42, W.Any],
        [33, W.Not],
        [124, W.Hyphen]
    ]),
    W0 = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);

function z0(t) {
    switch (t.type) {
        case C.Adjacent:
        case C.Child:
        case C.Descendant:
        case C.Parent:
        case C.Sibling:
        case C.ColumnCombinator:
            return !0;
        default:
            return !1
    }
}
const K0 = new Set(["contains", "icontains"]);

function X0(t, e, u) {
    const s = parseInt(e, 16) - 65536;
    return s !== s || u ? e : s < 0 ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, s & 1023 | 56320)
}

function pt(t) {
    return t.replace(U0, X0)
}

function Cu(t) {
    return t === 39 || t === 34
}

function wn(t) {
    return t === 32 || t === 9 || t === 10 || t === 12 || t === 13
}

function ai(t) {
    const e = [],
        u = oi(e, `${t}`, 0);
    if (u < t.length) throw new Error(`Unmatched selector: ${t.slice(u)}`);
    return e
}

function oi(t, e, u) {
    let s = [];

    function n(S) {
        const y = e.slice(u + S).match(vn);
        if (!y) throw new Error(`Expected name, found ${e.slice(u)}`);
        const [v] = y;
        return u += S + v.length, pt(v)
    }

    function r(S) {
        for (u += S; u < e.length && wn(e.charCodeAt(u));) u++
    }

    function i() {
        u += 1;
        const S = u;
        let y = 1;
        for (; y > 0 && u < e.length; u++) e.charCodeAt(u) === 40 && !a(u) ? y++ : e.charCodeAt(u) === 41 && !a(u) && y--;
        if (y) throw new Error("Parenthesis not matched");
        return pt(e.slice(S, u - 1))
    }

    function a(S) {
        let y = 0;
        for (; e.charCodeAt(--S) === 92;) y++;
        return (y & 1) === 1
    }

    function o() {
        if (s.length > 0 && z0(s[s.length - 1])) throw new Error("Did not expect successive traversals.")
    }

    function l(S) {
        if (s.length > 0 && s[s.length - 1].type === C.Descendant) {
            s[s.length - 1].type = S;
            return
        }
        o(), s.push({
            type: S
        })
    }

    function h(S, y) {
        s.push({
            type: C.Attribute,
            name: S,
            action: y,
            value: n(1),
            namespace: null,
            ignoreCase: "quirks"
        })
    }

    function p() {
        if (s.length && s[s.length - 1].type === C.Descendant && s.pop(), s.length === 0) throw new Error("Empty sub-selector");
        t.push(s)
    }
    if (r(0), e.length === u) return u;
    e: for (; u < e.length;) {
        const S = e.charCodeAt(u);
        switch (S) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
                {
                    (s.length === 0 || s[0].type !== C.Descendant) && (o(), s.push({
                        type: C.Descendant
                    })),
                    r(1);
                    break
                }
            case 62:
                {
                    l(C.Child),
                    r(1);
                    break
                }
            case 60:
                {
                    l(C.Parent),
                    r(1);
                    break
                }
            case 126:
                {
                    l(C.Sibling),
                    r(1);
                    break
                }
            case 43:
                {
                    l(C.Adjacent),
                    r(1);
                    break
                }
            case 46:
                {
                    h("class", W.Element);
                    break
                }
            case 35:
                {
                    h("id", W.Equals);
                    break
                }
            case 91:
                {
                    r(1);
                    let y, v = null;e.charCodeAt(u) === 124 ? y = n(1) : e.startsWith("*|", u) ? (v = "*", y = n(2)) : (y = n(0), e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 61 && (v = y, y = n(1))),
                    r(0);
                    let T = W.Exists;
                    const R = G0.get(e.charCodeAt(u));
                    if (R) {
                        if (T = R, e.charCodeAt(u + 1) !== 61) throw new Error("Expected `=`");
                        r(2)
                    } else e.charCodeAt(u) === 61 && (T = W.Equals, r(1));
                    let _ = "",
                        F = null;
                    if (T !== "exists") {
                        if (Cu(e.charCodeAt(u))) {
                            const j = e.charCodeAt(u);
                            let O = u + 1;
                            for (; O < e.length && (e.charCodeAt(O) !== j || a(O));) O += 1;
                            if (e.charCodeAt(O) !== j) throw new Error("Attribute value didn't end");
                            _ = pt(e.slice(u + 1, O)), u = O + 1
                        } else {
                            const j = u;
                            for (; u < e.length && (!wn(e.charCodeAt(u)) && e.charCodeAt(u) !== 93 || a(u));) u += 1;
                            _ = pt(e.slice(j, u))
                        }
                        r(0);
                        const U = e.charCodeAt(u) | 32;
                        U === 115 ? (F = !1, r(1)) : U === 105 && (F = !0, r(1))
                    }
                    if (e.charCodeAt(u) !== 93) throw new Error("Attribute selector didn't terminate");u += 1;
                    const $ = {
                        type: C.Attribute,
                        name: y,
                        action: T,
                        value: _,
                        namespace: v,
                        ignoreCase: F
                    };s.push($);
                    break
                }
            case 58:
                {
                    if (e.charCodeAt(u + 1) === 58) {
                        s.push({
                            type: C.PseudoElement,
                            name: n(2).toLowerCase(),
                            data: e.charCodeAt(u) === 40 ? i() : null
                        });
                        continue
                    }
                    const y = n(1).toLowerCase();
                    let v = null;
                    if (e.charCodeAt(u) === 40)
                        if (W0.has(y)) {
                            if (Cu(e.charCodeAt(u + 1))) throw new Error(`Pseudo-selector ${y} cannot be quoted`);
                            if (v = [], u = oi(v, e, u + 1), e.charCodeAt(u) !== 41) throw new Error(`Missing closing parenthesis in :${y} (${e})`);
                            u += 1
                        } else {
                            if (v = i(), K0.has(y)) {
                                const T = v.charCodeAt(0);
                                T === v.charCodeAt(v.length - 1) && Cu(T) && (v = v.slice(1, -1))
                            }
                            v = pt(v)
                        }
                    s.push({
                        type: C.Pseudo,
                        name: y,
                        data: v
                    });
                    break
                }
            case 44:
                {
                    p(),
                    s = [],
                    r(1);
                    break
                }
            default:
                {
                    if (e.startsWith("/*", u)) {
                        const T = e.indexOf("*/", u + 2);
                        if (T < 0) throw new Error("Comment was not terminated");
                        u = T + 2, s.length === 0 && r(0);
                        break
                    }
                    let y = null,
                        v;
                    if (S === 42) u += 1,
                    v = "*";
                    else if (S === 124) {
                        if (v = "", e.charCodeAt(u + 1) === 124) {
                            l(C.ColumnCombinator), r(2);
                            break
                        }
                    } else if (vn.test(e.slice(u))) v = n(0);
                    else break e;e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 124 && (y = v, e.charCodeAt(u + 1) === 42 ? (v = "*", u += 2) : v = n(1)),
                    s.push(v === "*" ? {
                        type: C.Universal,
                        namespace: y
                    } : {
                        type: C.Tag,
                        name: v,
                        namespace: y
                    })
                }
        }
    }
    return p(), u
}
const ci = new Map([
    [C.Universal, 50],
    [C.Tag, 30],
    [C.Attribute, 1],
    [C.Pseudo, 0]
]);

function Ts(t) {
    return !ci.has(t.type)
}
const J0 = new Map([
    [W.Exists, 10],
    [W.Equals, 8],
    [W.Not, 7],
    [W.Start, 6],
    [W.End, 6],
    [W.Any, 5]
]);

function Y0(t) {
    const e = t.map(li);
    for (let u = 1; u < t.length; u++) {
        const s = e[u];
        if (!(s < 0))
            for (let n = u - 1; n >= 0 && s < e[n]; n--) {
                const r = t[n + 1];
                t[n + 1] = t[n], t[n] = r, e[n + 1] = e[n], e[n] = s
            }
    }
}

function li(t) {
    var e, u;
    let s = (e = ci.get(t.type)) !== null && e !== void 0 ? e : -1;
    return t.type === C.Attribute ? (s = (u = J0.get(t.action)) !== null && u !== void 0 ? u : 4, t.action === W.Equals && t.name === "id" && (s = 9), t.ignoreCase && (s >>= 1)) : t.type === C.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? s = 0 : Array.isArray(t.data) ? (s = Math.min(...t.data.map(n => Math.min(...n.map(li)))), s < 0 && (s = 0)) : s = 2 : s = 3), s
}
const Z0 = /[-[\]{}()*+?.,\\^$|#\s]/g;

function Cn(t) {
    return t.replace(Z0, "\\$&")
}
const Q0 = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);

function Ge(t, e) {
    return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Q0.has(t.name)
}
const ec = {
        equals(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n
            } = e;
            let {
                value: r
            } = e;
            return Ge(e, u) ? (r = r.toLowerCase(), i => {
                const a = s.getAttributeValue(i, n);
                return a != null && a.length === r.length && a.toLowerCase() === r && t(i)
            }) : i => s.getAttributeValue(i, n) === r && t(i)
        },
        hyphen(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n
            } = e;
            let {
                value: r
            } = e;
            const i = r.length;
            return Ge(e, u) ? (r = r.toLowerCase(), function(o) {
                const l = s.getAttributeValue(o, n);
                return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i).toLowerCase() === r && t(o)
            }) : function(o) {
                const l = s.getAttributeValue(o, n);
                return l != null && (l.length === i || l.charAt(i) === "-") && l.substr(0, i) === r && t(o)
            }
        },
        element(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n,
                value: r
            } = e;
            if (/\s/.test(r)) return N.falseFunc;
            const i = new RegExp(`(?:^|\\s)${Cn(r)}(?:$|\\s)`, Ge(e, u) ? "i" : "");
            return function(o) {
                const l = s.getAttributeValue(o, n);
                return l != null && l.length >= r.length && i.test(l) && t(o)
            }
        },
        exists(t, {
            name: e
        }, {
            adapter: u
        }) {
            return s => u.hasAttrib(s, e) && t(s)
        },
        start(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n
            } = e;
            let {
                value: r
            } = e;
            const i = r.length;
            return i === 0 ? N.falseFunc : Ge(e, u) ? (r = r.toLowerCase(), a => {
                const o = s.getAttributeValue(a, n);
                return o != null && o.length >= i && o.substr(0, i).toLowerCase() === r && t(a)
            }) : a => {
                var o;
                return !!(!((o = s.getAttributeValue(a, n)) === null || o === void 0) && o.startsWith(r)) && t(a)
            }
        },
        end(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n
            } = e;
            let {
                value: r
            } = e;
            const i = -r.length;
            return i === 0 ? N.falseFunc : Ge(e, u) ? (r = r.toLowerCase(), a => {
                var o;
                return ((o = s.getAttributeValue(a, n)) === null || o === void 0 ? void 0 : o.substr(i).toLowerCase()) === r && t(a)
            }) : a => {
                var o;
                return !!(!((o = s.getAttributeValue(a, n)) === null || o === void 0) && o.endsWith(r)) && t(a)
            }
        },
        any(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n,
                value: r
            } = e;
            if (r === "") return N.falseFunc;
            if (Ge(e, u)) {
                const i = new RegExp(Cn(r), "i");
                return function(o) {
                    const l = s.getAttributeValue(o, n);
                    return l != null && l.length >= r.length && i.test(l) && t(o)
                }
            }
            return i => {
                var a;
                return !!(!((a = s.getAttributeValue(i, n)) === null || a === void 0) && a.includes(r)) && t(i)
            }
        },
        not(t, e, u) {
            const {
                adapter: s
            } = u, {
                name: n
            } = e;
            let {
                value: r
            } = e;
            return r === "" ? i => !!s.getAttributeValue(i, n) && t(i) : Ge(e, u) ? (r = r.toLowerCase(), i => {
                const a = s.getAttributeValue(i, n);
                return (a == null || a.length !== r.length || a.toLowerCase() !== r) && t(i)
            }) : i => s.getAttributeValue(i, n) !== r && t(i)
        }
    },
    tc = new Set([9, 10, 12, 13, 32]),
    En = 48,
    uc = 57;

function sc(t) {
    if (t = t.trim().toLowerCase(), t === "even") return [2, 0];
    if (t === "odd") return [2, 1];
    let e = 0,
        u = 0,
        s = r(),
        n = i();
    if (e < t.length && t.charAt(e) === "n" && (e++, u = s * (n ? ? 1), a(), e < t.length ? (s = r(), a(), n = i()) : s = n = 0), n === null || e < t.length) throw new Error(`n-th rule couldn't be parsed ('${t}')`);
    return [u, s * n];

    function r() {
        return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1)
    }

    function i() {
        const o = e;
        let l = 0;
        for (; e < t.length && t.charCodeAt(e) >= En && t.charCodeAt(e) <= uc;) l = l * 10 + (t.charCodeAt(e) - En), e++;
        return e === o ? null : l
    }

    function a() {
        for (; e < t.length && tc.has(t.charCodeAt(e));) e++
    }
}

function nc(t) {
    const e = t[0],
        u = t[1] - 1;
    if (u < 0 && e <= 0) return N.falseFunc;
    if (e === -1) return r => r <= u;
    if (e === 0) return r => r === u;
    if (e === 1) return u < 0 ? N.trueFunc : r => r >= u;
    const s = Math.abs(e),
        n = (u % s + s) % s;
    return e > 1 ? r => r >= u && r % s === n : r => r <= u && r % s === n
}

function _t(t) {
    return nc(sc(t))
}

function Mt(t, e) {
    return u => {
        const s = e.getParent(u);
        return s != null && e.isTag(s) && t(u)
    }
}
const Qu = {
    contains(t, e, {
        adapter: u
    }) {
        return function(n) {
            return t(n) && u.getText(n).includes(e)
        }
    },
    icontains(t, e, {
        adapter: u
    }) {
        const s = e.toLowerCase();
        return function(r) {
            return t(r) && u.getText(r).toLowerCase().includes(s)
        }
    },
    "nth-child" (t, e, {
        adapter: u,
        equals: s
    }) {
        const n = _t(e);
        return n === N.falseFunc ? N.falseFunc : n === N.trueFunc ? Mt(t, u) : function(i) {
            const a = u.getSiblings(i);
            let o = 0;
            for (let l = 0; l < a.length && !s(i, a[l]); l++) u.isTag(a[l]) && o++;
            return n(o) && t(i)
        }
    },
    "nth-last-child" (t, e, {
        adapter: u,
        equals: s
    }) {
        const n = _t(e);
        return n === N.falseFunc ? N.falseFunc : n === N.trueFunc ? Mt(t, u) : function(i) {
            const a = u.getSiblings(i);
            let o = 0;
            for (let l = a.length - 1; l >= 0 && !s(i, a[l]); l--) u.isTag(a[l]) && o++;
            return n(o) && t(i)
        }
    },
    "nth-of-type" (t, e, {
        adapter: u,
        equals: s
    }) {
        const n = _t(e);
        return n === N.falseFunc ? N.falseFunc : n === N.trueFunc ? Mt(t, u) : function(i) {
            const a = u.getSiblings(i);
            let o = 0;
            for (let l = 0; l < a.length; l++) {
                const h = a[l];
                if (s(i, h)) break;
                u.isTag(h) && u.getName(h) === u.getName(i) && o++
            }
            return n(o) && t(i)
        }
    },
    "nth-last-of-type" (t, e, {
        adapter: u,
        equals: s
    }) {
        const n = _t(e);
        return n === N.falseFunc ? N.falseFunc : n === N.trueFunc ? Mt(t, u) : function(i) {
            const a = u.getSiblings(i);
            let o = 0;
            for (let l = a.length - 1; l >= 0; l--) {
                const h = a[l];
                if (s(i, h)) break;
                u.isTag(h) && u.getName(h) === u.getName(i) && o++
            }
            return n(o) && t(i)
        }
    },
    root(t, e, {
        adapter: u
    }) {
        return s => {
            const n = u.getParent(s);
            return (n == null || !u.isTag(n)) && t(s)
        }
    },
    scope(t, e, u, s) {
        const {
            equals: n
        } = u;
        return !s || s.length === 0 ? Qu.root(t, e, u) : s.length === 1 ? r => n(s[0], r) && t(r) : r => s.includes(r) && t(r)
    },
    hover: Eu("isHovered"),
    visited: Eu("isVisited"),
    active: Eu("isActive")
};

function Eu(t) {
    return function(u, s, {
        adapter: n
    }) {
        const r = n[t];
        return typeof r != "function" ? N.falseFunc : function(a) {
            return r(a) && u(a)
        }
    }
}
const Nn = {
    empty(t, {
        adapter: e
    }) {
        return !e.getChildren(t).some(u => e.isTag(u) || e.getText(u) !== "")
    },
    "first-child" (t, {
        adapter: e,
        equals: u
    }) {
        if (e.prevElementSibling) return e.prevElementSibling(t) == null;
        const s = e.getSiblings(t).find(n => e.isTag(n));
        return s != null && u(t, s)
    },
    "last-child" (t, {
        adapter: e,
        equals: u
    }) {
        const s = e.getSiblings(t);
        for (let n = s.length - 1; n >= 0; n--) {
            if (u(t, s[n])) return !0;
            if (e.isTag(s[n])) break
        }
        return !1
    },
    "first-of-type" (t, {
        adapter: e,
        equals: u
    }) {
        const s = e.getSiblings(t),
            n = e.getName(t);
        for (let r = 0; r < s.length; r++) {
            const i = s[r];
            if (u(t, i)) return !0;
            if (e.isTag(i) && e.getName(i) === n) break
        }
        return !1
    },
    "last-of-type" (t, {
        adapter: e,
        equals: u
    }) {
        const s = e.getSiblings(t),
            n = e.getName(t);
        for (let r = s.length - 1; r >= 0; r--) {
            const i = s[r];
            if (u(t, i)) return !0;
            if (e.isTag(i) && e.getName(i) === n) break
        }
        return !1
    },
    "only-of-type" (t, {
        adapter: e,
        equals: u
    }) {
        const s = e.getName(t);
        return e.getSiblings(t).every(n => u(t, n) || !e.isTag(n) || e.getName(n) !== s)
    },
    "only-child" (t, {
        adapter: e,
        equals: u
    }) {
        return e.getSiblings(t).every(s => u(t, s) || !e.isTag(s))
    }
};

function Tn(t, e, u, s) {
    if (u === null) {
        if (t.length > s) throw new Error(`Pseudo-class :${e} requires an argument`)
    } else if (t.length === s) throw new Error(`Pseudo-class :${e} doesn't have any arguments`)
}
const rc = {
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
    },
    di = {};

function hi(t, e) {
    return t === N.falseFunc ? N.falseFunc : u => e.isTag(u) && t(u)
}

function ic(t, e) {
    const u = e.getSiblings(t);
    if (u.length <= 1) return [];
    const s = u.indexOf(t);
    return s < 0 || s === u.length - 1 ? [] : u.slice(s + 1).filter(e.isTag)
}

function es(t) {
    return {
        xmlMode: !!t.xmlMode,
        lowerCaseAttributeNames: !!t.lowerCaseAttributeNames,
        lowerCaseTags: !!t.lowerCaseTags,
        quirksMode: !!t.quirksMode,
        cacheResults: !!t.cacheResults,
        pseudos: t.pseudos,
        adapter: t.adapter,
        equals: t.equals
    }
}
const Nu = (t, e, u, s, n) => {
        const r = n(e, es(u), s);
        return r === N.trueFunc ? t : r === N.falseFunc ? N.falseFunc : i => r(i) && t(i)
    },
    Tu = {
        is: Nu,
        matches: Nu,
        where: Nu,
        not(t, e, u, s, n) {
            const r = n(e, es(u), s);
            return r === N.falseFunc ? t : r === N.trueFunc ? N.falseFunc : i => !r(i) && t(i)
        },
        has(t, e, u, s, n) {
            const {
                adapter: r
            } = u, i = es(u);
            i.relativeSelector = !0;
            const a = e.some(h => h.some(Ts)) ? [di] : void 0,
                o = n(e, i, a);
            if (o === N.falseFunc) return N.falseFunc;
            const l = hi(o, r);
            if (a && o !== N.trueFunc) {
                const {
                    shouldTestNextSiblings: h = !1
                } = o;
                return p => {
                    if (!t(p)) return !1;
                    a[0] = p;
                    const S = r.getChildren(p),
                        y = h ? [...S, ...ic(p, r)] : S;
                    return r.existsOne(l, y)
                }
            }
            return h => t(h) && r.existsOne(l, r.getChildren(h))
        }
    };

function ac(t, e, u, s, n) {
    var r;
    const {
        name: i,
        data: a
    } = e;
    if (Array.isArray(a)) {
        if (!(i in Tu)) throw new Error(`Unknown pseudo-class :${i}(${a})`);
        return Tu[i](t, a, u, s, n)
    }
    const o = (r = u.pseudos) === null || r === void 0 ? void 0 : r[i],
        l = typeof o == "string" ? o : rc[i];
    if (typeof l == "string") {
        if (a != null) throw new Error(`Pseudo ${i} doesn't have any arguments`);
        const h = ai(l);
        return Tu.is(t, h, u, s, n)
    }
    if (typeof o == "function") return Tn(o, i, a, 1), h => o(h, a) && t(h);
    if (i in Qu) return Qu[i](t, a, u, s);
    if (i in Nn) {
        const h = Nn[i];
        return Tn(h, i, a, 2), p => h(p, u, a) && t(p)
    }
    throw new Error(`Unknown pseudo-class :${i}`)
}

function Au(t, e) {
    const u = e.getParent(t);
    return u && e.isTag(u) ? u : null
}

function oc(t, e, u, s, n) {
    const {
        adapter: r,
        equals: i
    } = u;
    switch (e.type) {
        case C.PseudoElement:
            throw new Error("Pseudo-elements are not supported by css-select");
        case C.ColumnCombinator:
            throw new Error("Column combinators are not yet supported by css-select");
        case C.Attribute:
            {
                if (e.namespace != null) throw new Error("Namespaced attributes are not yet supported by css-select");
                return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()),
                ec[e.action](t, e, u)
            }
        case C.Pseudo:
            return ac(t, e, u, s, n);
        case C.Tag:
            {
                if (e.namespace != null) throw new Error("Namespaced tag names are not yet supported by css-select");
                let {
                    name: a
                } = e;
                return (!u.xmlMode || u.lowerCaseTags) && (a = a.toLowerCase()),
                function(l) {
                    return r.getName(l) === a && t(l)
                }
            }
        case C.Descendant:
            {
                if (u.cacheResults === !1 || typeof WeakSet > "u") return function(l) {
                    let h = l;
                    for (; h = Au(h, r);)
                        if (t(h)) return !0;
                    return !1
                };
                const a = new WeakSet;
                return function(l) {
                    let h = l;
                    for (; h = Au(h, r);)
                        if (!a.has(h)) {
                            if (r.isTag(h) && t(h)) return !0;
                            a.add(h)
                        }
                    return !1
                }
            }
        case "_flexibleDescendant":
            return function(o) {
                let l = o;
                do
                    if (t(l)) return !0; while (l = Au(l, r));
                return !1
            };
        case C.Parent:
            return function(o) {
                return r.getChildren(o).some(l => r.isTag(l) && t(l))
            };
        case C.Child:
            return function(o) {
                const l = r.getParent(o);
                return l != null && r.isTag(l) && t(l)
            };
        case C.Sibling:
            return function(o) {
                const l = r.getSiblings(o);
                for (let h = 0; h < l.length; h++) {
                    const p = l[h];
                    if (i(o, p)) break;
                    if (r.isTag(p) && t(p)) return !0
                }
                return !1
            };
        case C.Adjacent:
            return r.prevElementSibling ? function(o) {
                const l = r.prevElementSibling(o);
                return l != null && t(l)
            } : function(o) {
                const l = r.getSiblings(o);
                let h;
                for (let p = 0; p < l.length; p++) {
                    const S = l[p];
                    if (i(o, S)) break;
                    r.isTag(S) && (h = S)
                }
                return !!h && t(h)
            };
        case C.Universal:
            {
                if (e.namespace != null && e.namespace !== "*") throw new Error("Namespaced universal selectors are not yet supported by css-select");
                return t
            }
    }
}

function fi(t, e, u) {
    const s = cc(t, e, u);
    return hi(s, e.adapter)
}

function cc(t, e, u) {
    const s = typeof t == "string" ? ai(t) : t;
    return bi(s, e, u)
}

function pi(t) {
    return t.type === C.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(e => e.some(pi)))
}
const lc = {
        type: C.Descendant
    },
    dc = {
        type: "_flexibleDescendant"
    },
    hc = {
        type: C.Pseudo,
        name: "scope",
        data: null
    };

function fc(t, {
    adapter: e
}, u) {
    const s = !!(u != null && u.every(n => {
        const r = e.isTag(n) && e.getParent(n);
        return n === di || r && e.isTag(r)
    }));
    for (const n of t) {
        if (!(n.length > 0 && Ts(n[0]) && n[0].type !== C.Descendant))
            if (s && !n.some(pi)) n.unshift(lc);
            else continue;
        n.unshift(hc)
    }
}

function bi(t, e, u) {
    var s;
    t.forEach(Y0), u = (s = e.context) !== null && s !== void 0 ? s : u;
    const n = Array.isArray(u),
        r = u && (Array.isArray(u) ? u : [u]);
    if (e.relativeSelector !== !1) fc(t, e, r);
    else if (t.some(o => o.length > 0 && Ts(o[0]))) throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    let i = !1;
    const a = t.map(o => {
        if (o.length >= 2) {
            const [l, h] = o;
            l.type !== C.Pseudo || l.name !== "scope" || (n && h.type === C.Descendant ? o[1] = dc : (h.type === C.Adjacent || h.type === C.Sibling) && (i = !0))
        }
        return pc(o, e, r)
    }).reduce(bc, N.falseFunc);
    return a.shouldTestNextSiblings = i, a
}

function pc(t, e, u) {
    var s;
    return t.reduce((n, r) => n === N.falseFunc ? N.falseFunc : oc(n, r, e, u, bi), (s = e.rootFunc) !== null && s !== void 0 ? s : N.trueFunc)
}

function bc(t, e) {
    return e === N.falseFunc || t === N.trueFunc ? t : t === N.falseFunc || e === N.trueFunc ? e : function(s) {
        return t(s) || e(s)
    }
}
const gi = (t, e) => t === e,
    gc = {
        adapter: ys,
        equals: gi
    };

function mi(t) {
    var e, u, s, n;
    const r = t ? ? gc;
    return (e = r.adapter) !== null && e !== void 0 || (r.adapter = ys), (u = r.equals) !== null && u !== void 0 || (r.equals = (n = (s = r.adapter) === null || s === void 0 ? void 0 : s.equals) !== null && n !== void 0 ? n : gi), r
}

function mc(t) {
    return function(u, s, n) {
        const r = mi(s);
        return t(u, r, n)
    }
}
const xc = mc(fi);

function Sc(t, e, u) {
    const s = mi(u);
    return (typeof e == "function" ? e : fi(e, s))(t)
}
const {
    isArray: yc
} = Array, fu = ({
    nodeType: t
}) => t === I, xi = (t, e) => e.some(u => fu(u) && (t(u) || xi(t, ot(u)))), vc = (t, e) => e === "class" ? t.classList.value : t.getAttribute(e), ot = ({
    childNodes: t
}) => t, wc = t => {
    const {
        localName: e
    } = t;
    return Ct(t) ? e.toLowerCase() : e
}, Cc = ({
    parentNode: t
}) => t, Ec = t => {
    const {
        parentNode: e
    } = t;
    return e ? ot(e) : t
}, ts = t => yc(t) ? t.map(ts).join("") : fu(t) ? ts(ot(t)) : t.nodeType === ee ? t.data : "", Nc = (t, e) => t.hasAttribute(e), Tc = t => {
    let {
        length: e
    } = t;
    for (; e--;) {
        const u = t[e];
        if (e && -1 < t.lastIndexOf(u, e - 1)) {
            t.splice(e, 1);
            continue
        }
        for (let {
                parentNode: s
            } = u; s; s = s.parentNode)
            if (t.includes(s)) {
                t.splice(e, 1);
                break
            }
    }
    return t
}, Si = (t, e) => {
    const u = [];
    for (const s of e) fu(s) && (t(s) && u.push(s), u.push(...Si(t, ot(s))));
    return u
}, yi = (t, e) => {
    for (let u of e)
        if (t(u) || (u = yi(t, ot(u)))) return u;
    return null
}, vi = {
    isTag: fu,
    existsOne: xi,
    getAttributeValue: vc,
    getChildren: ot,
    getName: wc,
    getParent: Cc,
    getSiblings: Ec,
    getText: ts,
    hasAttrib: Nc,
    removeSubsets: Tc,
    findAll: Si,
    findOne: yi
}, us = (t, e) => xc(e, {
    context: e.includes(":scope") ? t : void 0,
    xmlMode: !Ct(t),
    adapter: vi
}), Ac = (t, e) => Sc(t, e, {
    strict: !0,
    context: e.includes(":scope") ? t : void 0,
    xmlMode: !Ct(t),
    adapter: vi
}), {
    replace: Rc
} = "", kc = /[<>&\xA0]/g, Ic = {
    " ": "&nbsp;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
}, Lc = t => Ic[t], _c = t => Rc.call(t, kc, Lc);
let Nt = class wi extends hu {
    constructor(e, u = "") {
        super(e, "#text", ee, u)
    }
    get wholeText() {
        const e = [];
        let {
            previousSibling: u,
            nextSibling: s
        } = this;
        for (; u && u.nodeType === ee;) {
            e.unshift(u[q]);
            u = u.previousSibling
        }
        for (e.push(this[q]); s && s.nodeType === ee;) {
            e.push(s[q]);
            s = s.nextSibling
        }
        return e.join("")
    }
    cloneNode() {
        const {
            ownerDocument: e,
            [q]: u
        } = this;
        return new wi(e, u)
    }
    toString() {
        return _c(this[q])
    }
};
const Mc = t => t instanceof Qe,
    Ru = (t, e, u) => {
        const {
            ownerDocument: s
        } = t;
        for (const n of u) t.insertBefore(Mc(n) ? n : new Nt(s, n), e)
    };
class Ci extends Qe {
    constructor(e, u, s) {
        super(e, u, s), this[Q] = null, this[g] = this[w] = {
            [g]: null,
            [K]: this,
            [se]: this,
            nodeType: Be,
            ownerDocument: this.ownerDocument,
            parentNode: null
        }
    }
    get childNodes() {
        const e = new we;
        let {
            firstChild: u
        } = this;
        for (; u;) e.push(u), u = Ke(u);
        return e
    }
    get children() {
        const e = new we;
        let {
            firstElementChild: u
        } = this;
        for (; u;) e.push(u), u = Cs(u);
        return e
    }
    get firstChild() {
        let {
            [g]: e, [w]: u
        } = this;
        for (; e.nodeType === Y;) e = e[g];
        return e === u ? null : e
    }
    get firstElementChild() {
        let {
            firstChild: e
        } = this;
        for (; e;) {
            if (e.nodeType === I) return e;
            e = Ke(e)
        }
        return null
    }
    get lastChild() {
        const e = this[w][K];
        switch (e.nodeType) {
            case Be:
                return e[se];
            case Y:
                return null
        }
        return e === this ? null : e
    }
    get lastElementChild() {
        let {
            lastChild: e
        } = this;
        for (; e;) {
            if (e.nodeType === I) return e;
            e = vt(e)
        }
        return null
    }
    get childElementCount() {
        return this.children.length
    }
    prepend(...e) {
        Ru(this, this.firstChild, e)
    }
    append(...e) {
        Ru(this, this[w], e)
    }
    replaceChildren(...e) {
        let {
            [g]: u, [w]: s
        } = this;
        for (; u !== s && u.nodeType === Y;) u = u[g];
        for (; u !== s;) {
            const n = ae(u)[g];
            u.remove(), u = n
        }
        e.length && Ru(this, s, e)
    }
    getElementsByClassName(e) {
        const u = new we;
        let {
            [g]: s, [w]: n
        } = this;
        for (; s !== n;) s.nodeType === I && s.hasAttribute("class") && s.classList.has(e) && u.push(s), s = s[g];
        return u
    }
    getElementsByTagName(e) {
        const u = new we;
        let {
            [g]: s, [w]: n
        } = this;
        for (; s !== n;) s.nodeType === I && (s.localName === e || Xu(s) === e) && u.push(s), s = s[g];
        return u
    }
    querySelector(e) {
        const u = us(this, e);
        let {
            [g]: s, [w]: n
        } = this;
        for (; s !== n;) {
            if (s.nodeType === I && u(s)) return s;
            s = s.localName === "template" ? s[w] : s[g]
        }
        return null
    }
    querySelectorAll(e) {
        const u = us(this, e),
            s = new we;
        let {
            [g]: n, [w]: r
        } = this;
        for (; n !== r;) n.nodeType === I && u(n) && s.push(n), n = n.localName === "template" ? n[w] : n[g];
        return s
    }
    appendChild(e) {
        return this.insertBefore(e, this[w])
    }
    contains(e) {
        let u = e;
        for (; u && u !== this;) u = u.parentNode;
        return u === this
    }
    insertBefore(e, u = null) {
        if (e === u) return e;
        if (e === this) throw new Error("unable to append a node to itself");
        const s = u || this[w];
        switch (e.nodeType) {
            case I:
                e.remove(), e.parentNode = this, $r(s[K], e, s), St(e, null), Ju(e);
                break;
            case Ae:
                {
                    let {
                        [Q]: n, firstChild: r, lastChild: i
                    } = e;
                    if (r) {
                        _0(s[K], r, i, s), me(e, e[w]), n && n.replaceChildren();
                        do r.parentNode = this, St(r, null), r.nodeType === I && Ju(r); while (r !== i && (r = Ke(r)))
                    }
                    break
                }
            case ee:
            case Re:
                e.remove();
            default:
                e.parentNode = this, cu(s[K], e, s), St(e, null);
                break
        }
        return e
    }
    normalize() {
        let {
            [g]: e, [w]: u
        } = this;
        for (; e !== u;) {
            const {
                [g]: s, [K]: n, nodeType: r
            } = e;
            r === ee && (e[q] ? n && n.nodeType === ee && (n.textContent += e.textContent, e.remove()) : e.remove()), e = s
        }
    }
    removeChild(e) {
        if (e.parentNode !== this) throw new Error("node is not a child");
        return e.remove(), e
    }
    replaceChild(e, u) {
        const s = ae(u)[g];
        return u.remove(), this.insertBefore(e, s), u
    }
}
class As extends Ci {
    getElementById(e) {
        let {
            [g]: u, [w]: s
        } = this;
        for (; u !== s;) {
            if (u.nodeType === I && u.id === e) return u;
            u = u[g]
        }
        return null
    }
    cloneNode(e) {
        const {
            ownerDocument: u,
            constructor: s
        } = this, n = new s(u);
        if (e) {
            const {
                [w]: r
            } = n;
            for (const i of this.childNodes) n.insertBefore(i.cloneNode(e), r)
        }
        return n
    }
    toString() {
        const {
            childNodes: e,
            localName: u
        } = this;
        return `<${u}>${e.join("")}</${u}>`
    }
    toJSON() {
        const e = [];
        return q0(this, e), e
    }
}
let Rs = class extends As {
        constructor(e) {
            super(e, "#document-fragment", Ae)
        }
    },
    eu = class Ei extends Qe {
        constructor(e, u, s = "", n = "") {
            super(e, "#document-type", rt), this.name = u, this.publicId = s, this.systemId = n
        }
        cloneNode() {
            const {
                ownerDocument: e,
                name: u,
                publicId: s,
                systemId: n
            } = this;
            return new Ei(e, u, s, n)
        }
        toString() {
            const {
                name: e,
                publicId: u,
                systemId: s
            } = this, n = 0 < u.length, r = [e];
            return n && r.push("PUBLIC", `"${u}"`), s.length && (n || r.push("SYSTEM"), r.push(`"${s}"`)), `<!DOCTYPE ${r.join(" ")}>`
        }
        toJSON() {
            const e = [];
            return Xr(this, e), e
        }
    };
const Ni = t => t.childNodes.join(""),
    Ti = (t, e) => {
        const {
            ownerDocument: u
        } = t, {
            constructor: s
        } = u, n = new s;
        n[pe] = u[pe];
        const {
            childNodes: r
        } = Gr(n, Ct(t), e);
        t.replaceChildren(...r.map(Ai, u))
    };

function Ai(t) {
    switch (t.ownerDocument = this, t.nodeType) {
        case I:
        case Ae:
            t.childNodes.forEach(Ai, this);
            break
    }
    return t
}
const $t = t => t.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z0-9]+)([A-Z]))/g, "$2$5-$3$6").toLowerCase(),
    Pt = new WeakMap,
    ku = t => `data-${$t(t)}`,
    Oc = t => t.slice(5).replace(/-([a-z])/g, (e, u) => u.toUpperCase()),
    Dc = {
        get(t, e) {
            if (e in t) return Pt.get(t).getAttribute(ku(e))
        },
        set(t, e, u) {
            return t[e] = u, Pt.get(t).setAttribute(ku(e), u), !0
        },
        deleteProperty(t, e) {
            return e in t && Pt.get(t).removeAttribute(ku(e)), delete t[e]
        }
    };
class Ri {
    constructor(e) {
        for (const {
                name: u,
                value: s
            } of e.attributes) /^data-/.test(u) && (this[Oc(u)] = s);
        return Pt.set(this, e), new Proxy(this, Dc)
    }
}
re(Ri.prototype, null);
const {
    add: jc
} = Set.prototype, An = (t, e) => {
    for (const u of e) u && jc.call(t, u)
}, bt = ({
    [rr]: t,
    value: e
}) => {
    const u = t.getAttributeNode("class");
    u ? u.value = e : Zu(t, new Et(t.ownerDocument, "class", e))
};
class qc extends Set {
    constructor(e) {
        super(), this[rr] = e;
        const u = e.getAttributeNode("class");
        u && An(this, u.value.split(/\s+/))
    }
    get length() {
        return this.size
    }
    get value() {
        return [...this].join(" ")
    }
    add(...e) {
        An(this, e), bt(this)
    }
    contains(e) {
        return this.has(e)
    }
    remove(...e) {
        for (const u of e) this.delete(u);
        bt(this)
    }
    toggle(e, u) {
        if (this.has(e)) {
            if (u) return !0;
            this.delete(e), bt(this)
        } else if (u || arguments.length === 1) return super.add(e), bt(this), !0;
        return !1
    }
    replace(e, u) {
        return this.has(e) ? (this.delete(e), super.add(u), bt(this), !0) : !1
    }
    supports() {
        return !0
    }
}
const tu = new WeakMap,
    ss = t => [...t.keys()].filter(e => e !== Q),
    ns = t => {
        const e = tu.get(t).getAttributeNode("style");
        if ((!e || e[Wt] || t.get(Q) !== e) && (t.clear(), e)) {
            t.set(Q, e);
            for (const u of e[q].split(/\s*;\s*/)) {
                let [s, ...n] = u.split(":");
                if (n.length > 0) {
                    s = s.trim();
                    const r = n.join(":").trim();
                    s && r && t.set(s, r)
                }
            }
        }
        return e
    },
    Ot = {
        get(t, e) {
            return e in Fc ? t[e] : (ns(t), e === "length" ? ss(t).length : /^\d+$/.test(e) ? ss(t)[e] : t.get($t(e)))
        },
        set(t, e, u) {
            if (e === "cssText") t[e] = u;
            else {
                let s = ns(t);
                if (u == null ? t.delete($t(e)) : t.set($t(e), u), !s) {
                    const n = tu.get(t);
                    s = n.ownerDocument.createAttribute("style"), n.setAttributeNode(s), t.set(Q, s)
                }
                s[Wt] = !1, s[q] = t.toString()
            }
            return !0
        }
    };
let ki = class extends Map {
    constructor(e) {
        return super(), tu.set(this, e), new Proxy(this, Ot)
    }
    get cssText() {
        return this.toString()
    }
    set cssText(e) {
        tu.get(this).setAttribute("style", e)
    }
    getPropertyValue(e) {
        const u = this[Q];
        return Ot.get(u, e)
    }
    setProperty(e, u) {
        const s = this[Q];
        Ot.set(s, e, u)
    }
    removeProperty(e) {
        const u = this[Q];
        Ot.set(u, e, null)
    }[Symbol.iterator]() {
        const e = ss(this[Q]),
            {
                length: u
            } = e;
        let s = 0;
        return {
            next() {
                const n = s === u;
                return {
                    done: n,
                    value: n ? null : e[s++]
                }
            }
        }
    }
    get[Q]() {
        return this
    }
    toString() {
        const e = this[Q];
        ns(e);
        const u = [];
        return e.forEach(Hc, u), u.join(";")
    }
};
const {
    prototype: Fc
} = ki;

function Hc(t, e) {
    e !== Q && this.push(`${e}:${t}`)
}
const Rn = 3,
    kn = 2,
    In = 1,
    Ln = 0;
class Ye {
    static get BUBBLING_PHASE() {
        return Rn
    }
    static get AT_TARGET() {
        return kn
    }
    static get CAPTURING_PHASE() {
        return In
    }
    static get NONE() {
        return Ln
    }
    constructor(e, u = {}) {
        this.type = e, this.bubbles = !!u.bubbles, this.cancelBubble = !1, this._stopImmediatePropagationFlag = !1, this.cancelable = !!u.cancelable, this.eventPhase = this.NONE, this.timeStamp = Date.now(), this.defaultPrevented = !1, this.originalTarget = null, this.returnValue = null, this.srcElement = null, this.target = null, this._path = []
    }
    get BUBBLING_PHASE() {
        return Rn
    }
    get AT_TARGET() {
        return kn
    }
    get CAPTURING_PHASE() {
        return In
    }
    get NONE() {
        return Ln
    }
    preventDefault() {
        this.defaultPrevented = !0
    }
    composedPath() {
        return this._path
    }
    stopPropagation() {
        this.cancelBubble = !0
    }
    stopImmediatePropagation() {
        this.stopPropagation(), this._stopImmediatePropagationFlag = !0
    }
}
class Ii extends Array {
    constructor(e) {
        super(), this.ownerElement = e
    }
    getNamedItem(e) {
        return this.ownerElement.getAttributeNode(e)
    }
    setNamedItem(e) {
        this.ownerElement.setAttributeNode(e), this.unshift(e)
    }
    removeNamedItem(e) {
        const u = this.getNamedItem(e);
        this.ownerElement.removeAttribute(e), this.splice(this.indexOf(u), 1)
    }
    item(e) {
        return e < this.length ? this[e] : null
    }
    getNamedItemNS(e, u) {
        return this.getNamedItem(u)
    }
    setNamedItemNS(e, u) {
        return this.setNamedItem(u)
    }
    removeNamedItemNS(e, u) {
        return this.removeNamedItem(u)
    }
}
let ks = class extends As {
    constructor(e) {
        super(e.ownerDocument, "#shadow-root", Ae), this.host = e
    }
    get innerHTML() {
        return Ni(this)
    }
    set innerHTML(e) {
        Ti(this, e)
    }
};
const Vc = {
        get(t, e) {
            return e in t ? t[e] : t.find(({
                name: u
            }) => u === e)
        }
    },
    _n = (t, e, u) => {
        if ("ownerSVGElement" in e) {
            const s = t.createElementNS(Yt, u);
            return s.ownerSVGElement = e.ownerSVGElement, s
        }
        return t.createElement(u)
    },
    Bc = ({
        localName: t,
        ownerDocument: e
    }) => e[it].voidElements.test(t);
let Tt = class extends Ci {
    constructor(e, u) {
        super(e, u, I), this[nt] = null, this[Su] = null, this[yu] = null
    }
    get isConnected() {
        return Qr(this)
    }
    get parentElement() {
        return ei(this)
    }
    get previousSibling() {
        return vt(this)
    }
    get nextSibling() {
        return Ke(this)
    }
    get namespaceURI() {
        return "http://www.w3.org/1999/xhtml"
    }
    get previousElementSibling() {
        return ti(this)
    }
    get nextElementSibling() {
        return Cs(this)
    }
    before(...e) {
        ui(this, e)
    }
    after(...e) {
        si(this, e)
    }
    replaceWith(...e) {
        ni(this, e)
    }
    remove() {
        ri(this[K], this, this[w][g])
    }
    get id() {
        return b.get(this, "id")
    }
    set id(e) {
        b.set(this, "id", e)
    }
    get className() {
        return this.classList.value
    }
    set className(e) {
        const {
            classList: u
        } = this;
        u.clear(), u.add(...e.split(/\s+/))
    }
    get nodeName() {
        return Xu(this)
    }
    get tagName() {
        return Xu(this)
    }
    get classList() {
        return this[nt] || (this[nt] = new qc(this))
    }
    get dataset() {
        return this[Su] || (this[Su] = new Ri(this))
    }
    get nonce() {
        return b.get(this, "nonce")
    }
    set nonce(e) {
        b.set(this, "nonce", e)
    }
    get style() {
        return this[yu] || (this[yu] = new ki(this))
    }
    get tabIndex() {
        return Fe.get(this, "tabindex") || -1
    }
    set tabIndex(e) {
        Fe.set(this, "tabindex", e)
    }
    get innerText() {
        const e = [];
        let {
            [g]: u, [w]: s
        } = this;
        for (; u !== s;) u.nodeType === ee ? e.push(u.textContent.replace(/\s+/g, " ")) : e.length && u[g] != s && x0.has(u.tagName) && e.push(`
`), u = u[g];
        return e.join("")
    }
    get textContent() {
        const e = [];
        let {
            [g]: u, [w]: s
        } = this;
        for (; u !== s;) u.nodeType === ee && e.push(u.textContent), u = u[g];
        return e.join("")
    }
    set textContent(e) {
        this.replaceChildren(), e && this.appendChild(new Nt(this.ownerDocument, e))
    }
    get innerHTML() {
        return Ni(this)
    }
    set innerHTML(e) {
        Ti(this, e)
    }
    get outerHTML() {
        return this.toString()
    }
    set outerHTML(e) {
        const u = this.ownerDocument.createElement("");
        u.innerHTML = e, this.replaceWith(...u.childNodes)
    }
    get attributes() {
        const e = new Ii(this);
        let u = this[g];
        for (; u.nodeType === Y;) e.push(u), u = u[g];
        return new Proxy(e, Vc)
    }
    focus() {
        this.dispatchEvent(new Ye("focus"))
    }
    getAttribute(e) {
        if (e === "class") return this.className;
        const u = this.getAttributeNode(e);
        return u && u.value
    }
    getAttributeNode(e) {
        let u = this[g];
        for (; u.nodeType === Y;) {
            if (u.name === e) return u;
            u = u[g]
        }
        return null
    }
    getAttributeNames() {
        const e = new we;
        let u = this[g];
        for (; u.nodeType === Y;) e.push(u.name), u = u[g];
        return e
    }
    hasAttribute(e) {
        return !!this.getAttributeNode(e)
    }
    hasAttributes() {
        return this[g].nodeType === Y
    }
    removeAttribute(e) {
        e === "class" && this[nt] && this[nt].clear();
        let u = this[g];
        for (; u.nodeType === Y;) {
            if (u.name === e) {
                Sn(this, u);
                return
            }
            u = u[g]
        }
    }
    removeAttributeNode(e) {
        let u = this[g];
        for (; u.nodeType === Y;) {
            if (u === e) {
                Sn(this, u);
                return
            }
            u = u[g]
        }
    }
    setAttribute(e, u) {
        if (e === "class") this.className = u;
        else {
            const s = this.getAttributeNode(e);
            s ? s.value = u : Zu(this, new Et(this.ownerDocument, e, u))
        }
    }
    setAttributeNode(e) {
        const {
            name: u
        } = e, s = this.getAttributeNode(u);
        if (s !== e) {
            s && this.removeAttributeNode(s);
            const {
                ownerElement: n
            } = e;
            n && n.removeAttributeNode(e), Zu(this, e)
        }
        return s
    }
    toggleAttribute(e, u) {
        return this.hasAttribute(e) ? u ? !0 : (this.removeAttribute(e), !1) : u || arguments.length === 1 ? (this.setAttribute(e, ""), !0) : !1
    }
    get shadowRoot() {
        if (qe.has(this)) {
            const {
                mode: e,
                shadowRoot: u
            } = qe.get(this);
            if (e === "open") return u
        }
        return null
    }
    attachShadow(e) {
        if (qe.has(this)) throw new Error("operation not supported");
        const u = new ks(this);
        return u.append(...this.childNodes), qe.set(this, {
            mode: e.mode,
            shadowRoot: u
        }), u
    }
    matches(e) {
        return Ac(this, e)
    }
    closest(e) {
        let u = this;
        const s = us(u, e);
        for (; u && !s(u);) u = u.parentElement;
        return u
    }
    insertAdjacentElement(e, u) {
        const {
            parentElement: s
        } = this;
        switch (e) {
            case "beforebegin":
                if (s) {
                    s.insertBefore(u, this);
                    break
                }
                return null;
            case "afterbegin":
                this.insertBefore(u, this.firstChild);
                break;
            case "beforeend":
                this.insertBefore(u, null);
                break;
            case "afterend":
                if (s) {
                    s.insertBefore(u, this.nextSibling);
                    break
                }
                return null
        }
        return u
    }
    insertAdjacentHTML(e, u) {
        const s = this.ownerDocument.createElement("template");
        s.innerHTML = u, this.insertAdjacentElement(e, s.content)
    }
    insertAdjacentText(e, u) {
        const s = this.ownerDocument.createTextNode(u);
        this.insertAdjacentElement(e, s)
    }
    cloneNode(e = !1) {
        const {
            ownerDocument: u,
            localName: s
        } = this, n = h => {
            h.parentNode = i, me(a, h), a = h
        }, r = _n(u, this, s);
        let i = r,
            a = r,
            {
                [g]: o,
                [w]: l
            } = this;
        for (; o !== l && (e || o.nodeType === Y);) {
            switch (o.nodeType) {
                case Be:
                    me(a, i[w]), a = i[w], i = i.parentNode;
                    break;
                case I:
                    {
                        const h = _n(u, o, o.localName);n(h),
                        i = h;
                        break
                    }
                case Y:
                    {
                        const h = o.cloneNode(e);h.ownerElement = i,
                        n(h);
                        break
                    }
                case ee:
                case Re:
                    n(o.cloneNode(e));
                    break
            }
            o = o[g]
        }
        return me(a, r[w]), r
    }
    toString() {
        const e = [],
            {
                [w]: u
            } = this;
        let s = {
                [g]: this
            },
            n = !1;
        do switch (s = s[g], s.nodeType) {
            case Y:
                {
                    const r = " " + s;
                    switch (r) {
                        case " id":
                        case " class":
                        case " style":
                            break;
                        default:
                            e.push(r)
                    }
                    break
                }
            case Be:
                {
                    const r = s[se];n ? ("ownerSVGElement" in r ? e.push(" />") : Bc(r) ? e.push(Ct(r) ? ">" : " />") : e.push(`></${r.localName}>`), n = !1) : e.push(`</${r.localName}>`);
                    break
                }
            case I:
                n && e.push(">"), s.toString !== this.toString ? (e.push(s.toString()), s = s[w], n = !1) : (e.push(`<${s.localName}`), n = !0);
                break;
            case ee:
            case Re:
                e.push((n ? ">" : "") + s), n = !1;
                break
        }
        while (s !== u);
        return e.join("")
    }
    toJSON() {
        const e = [];
        return Jr(this, e), e
    }
    getAttributeNS(e, u) {
        return this.getAttribute(u)
    }
    getElementsByTagNameNS(e, u) {
        return this.getElementsByTagName(u)
    }
    hasAttributeNS(e, u) {
        return this.hasAttribute(u)
    }
    removeAttributeNS(e, u) {
        this.removeAttribute(u)
    }
    setAttributeNS(e, u, s) {
        this.setAttribute(u, s)
    }
    setAttributeNodeNS(e) {
        return this.setAttributeNode(e)
    }
};
const Iu = new WeakMap,
    $c = {
        get(t, e) {
            return t[e]
        },
        set(t, e, u) {
            return t[e] = u, !0
        }
    };
let Is = class extends Tt {
    constructor(e, u, s = null) {
        super(e, u), this.ownerSVGElement = s
    }
    get className() {
        return Iu.has(this) || Iu.set(this, new Proxy({
            baseVal: "",
            animVal: ""
        }, $c)), Iu.get(this)
    }
    set className(e) {
        const {
            classList: u
        } = this;
        u.clear(), u.add(...e.split(/\s+/))
    }
    get namespaceURI() {
        return "http://www.w3.org/2000/svg"
    }
    getAttribute(e) {
        return e === "class" ? [...this.classList].join(" ") : super.getAttribute(e)
    }
    setAttribute(e, u) {
        if (e === "class") this.className = u;
        else if (e === "style") {
            const {
                className: s
            } = this;
            s.baseVal = s.animVal = u
        }
        super.setAttribute(e, u)
    }
};
const fe = () => {
    throw new TypeError("Illegal constructor")
};

function Ls() {
    fe()
}
re(Ls, Et);
Ls.prototype = Et.prototype;

function _s() {
    fe()
}
re(_s, hu);
_s.prototype = hu.prototype;

function Ms() {
    fe()
}
re(Ms, Ns);
Ms.prototype = Ns.prototype;

function Os() {
    fe()
}
re(Os, Rs);
Os.prototype = Rs.prototype;

function Ds() {
    fe()
}
re(Ds, eu);
Ds.prototype = eu.prototype;

function js() {
    fe()
}
re(js, Tt);
js.prototype = Tt.prototype;

function qs() {
    fe()
}
re(qs, Qe);
qs.prototype = Qe.prototype;

function Fs() {
    fe()
}
re(Fs, ks);
Fs.prototype = ks.prototype;

function Hs() {
    fe()
}
re(Hs, Nt);
Hs.prototype = Nt.prototype;

function Vs() {
    fe()
}
re(Vs, Is);
Vs.prototype = Is.prototype;
const Pc = {
        Attr: Ls,
        CharacterData: _s,
        Comment: Ms,
        DocumentFragment: Os,
        DocumentType: Ds,
        Element: js,
        Node: qs,
        ShadowRoot: Fs,
        Text: Hs,
        SVGElement: Vs
    },
    gt = new WeakMap,
    d = {
        get(t, e) {
            return gt.has(t) && gt.get(t)[e] || null
        },
        set(t, e, u) {
            gt.has(t) || gt.set(t, {});
            const s = gt.get(t),
                n = e.slice(2);
            s[e] && t.removeEventListener(n, s[e], !1), (s[e] = u) && t.addEventListener(n, u, !1)
        }
    };
class m extends Tt {
    static get observedAttributes() {
        return []
    }
    constructor(e = null, u = "") {
        super(e, u);
        const s = !e;
        let n;
        if (s) {
            const {
                constructor: r
            } = this;
            if (!Zt.has(r)) throw new Error("unable to initialize this Custom Element");
            ({
                ownerDocument: e,
                localName: u,
                options: n
            } = Zt.get(r))
        }
        if (e[mt]) {
            const {
                element: r,
                values: i
            } = e[mt];
            e[mt] = null;
            for (const [a, o] of i) r[a] = o;
            return r
        }
        s && (this.ownerDocument = this[w].ownerDocument = e, this.localName = u, Je.set(this, {
            connected: !1
        }), n.is && this.setAttribute("is", n.is))
    }
    blur() {
        this.dispatchEvent(new Ye("blur"))
    }
    click() {
        this.dispatchEvent(new Ye("click"))
    }
    get accessKeyLabel() {
        const {
            accessKey: e
        } = this;
        return e && `Alt+Shift+${e}`
    }
    get isContentEditable() {
        return this.hasAttribute("contenteditable")
    }
    get contentEditable() {
        return L.get(this, "contenteditable")
    }
    set contentEditable(e) {
        L.set(this, "contenteditable", e)
    }
    get draggable() {
        return L.get(this, "draggable")
    }
    set draggable(e) {
        L.set(this, "draggable", e)
    }
    get hidden() {
        return L.get(this, "hidden")
    }
    set hidden(e) {
        L.set(this, "hidden", e)
    }
    get spellcheck() {
        return L.get(this, "spellcheck")
    }
    set spellcheck(e) {
        L.set(this, "spellcheck", e)
    }
    get accessKey() {
        return b.get(this, "accesskey")
    }
    set accessKey(e) {
        b.set(this, "accesskey", e)
    }
    get dir() {
        return b.get(this, "dir")
    }
    set dir(e) {
        b.set(this, "dir", e)
    }
    get lang() {
        return b.get(this, "lang")
    }
    set lang(e) {
        b.set(this, "lang", e)
    }
    get title() {
        return b.get(this, "title")
    }
    set title(e) {
        b.set(this, "title", e)
    }
    get onabort() {
        return d.get(this, "onabort")
    }
    set onabort(e) {
        d.set(this, "onabort", e)
    }
    get onblur() {
        return d.get(this, "onblur")
    }
    set onblur(e) {
        d.set(this, "onblur", e)
    }
    get oncancel() {
        return d.get(this, "oncancel")
    }
    set oncancel(e) {
        d.set(this, "oncancel", e)
    }
    get oncanplay() {
        return d.get(this, "oncanplay")
    }
    set oncanplay(e) {
        d.set(this, "oncanplay", e)
    }
    get oncanplaythrough() {
        return d.get(this, "oncanplaythrough")
    }
    set oncanplaythrough(e) {
        d.set(this, "oncanplaythrough", e)
    }
    get onchange() {
        return d.get(this, "onchange")
    }
    set onchange(e) {
        d.set(this, "onchange", e)
    }
    get onclick() {
        return d.get(this, "onclick")
    }
    set onclick(e) {
        d.set(this, "onclick", e)
    }
    get onclose() {
        return d.get(this, "onclose")
    }
    set onclose(e) {
        d.set(this, "onclose", e)
    }
    get oncontextmenu() {
        return d.get(this, "oncontextmenu")
    }
    set oncontextmenu(e) {
        d.set(this, "oncontextmenu", e)
    }
    get oncuechange() {
        return d.get(this, "oncuechange")
    }
    set oncuechange(e) {
        d.set(this, "oncuechange", e)
    }
    get ondblclick() {
        return d.get(this, "ondblclick")
    }
    set ondblclick(e) {
        d.set(this, "ondblclick", e)
    }
    get ondrag() {
        return d.get(this, "ondrag")
    }
    set ondrag(e) {
        d.set(this, "ondrag", e)
    }
    get ondragend() {
        return d.get(this, "ondragend")
    }
    set ondragend(e) {
        d.set(this, "ondragend", e)
    }
    get ondragenter() {
        return d.get(this, "ondragenter")
    }
    set ondragenter(e) {
        d.set(this, "ondragenter", e)
    }
    get ondragleave() {
        return d.get(this, "ondragleave")
    }
    set ondragleave(e) {
        d.set(this, "ondragleave", e)
    }
    get ondragover() {
        return d.get(this, "ondragover")
    }
    set ondragover(e) {
        d.set(this, "ondragover", e)
    }
    get ondragstart() {
        return d.get(this, "ondragstart")
    }
    set ondragstart(e) {
        d.set(this, "ondragstart", e)
    }
    get ondrop() {
        return d.get(this, "ondrop")
    }
    set ondrop(e) {
        d.set(this, "ondrop", e)
    }
    get ondurationchange() {
        return d.get(this, "ondurationchange")
    }
    set ondurationchange(e) {
        d.set(this, "ondurationchange", e)
    }
    get onemptied() {
        return d.get(this, "onemptied")
    }
    set onemptied(e) {
        d.set(this, "onemptied", e)
    }
    get onended() {
        return d.get(this, "onended")
    }
    set onended(e) {
        d.set(this, "onended", e)
    }
    get onerror() {
        return d.get(this, "onerror")
    }
    set onerror(e) {
        d.set(this, "onerror", e)
    }
    get onfocus() {
        return d.get(this, "onfocus")
    }
    set onfocus(e) {
        d.set(this, "onfocus", e)
    }
    get oninput() {
        return d.get(this, "oninput")
    }
    set oninput(e) {
        d.set(this, "oninput", e)
    }
    get oninvalid() {
        return d.get(this, "oninvalid")
    }
    set oninvalid(e) {
        d.set(this, "oninvalid", e)
    }
    get onkeydown() {
        return d.get(this, "onkeydown")
    }
    set onkeydown(e) {
        d.set(this, "onkeydown", e)
    }
    get onkeypress() {
        return d.get(this, "onkeypress")
    }
    set onkeypress(e) {
        d.set(this, "onkeypress", e)
    }
    get onkeyup() {
        return d.get(this, "onkeyup")
    }
    set onkeyup(e) {
        d.set(this, "onkeyup", e)
    }
    get onload() {
        return d.get(this, "onload")
    }
    set onload(e) {
        d.set(this, "onload", e)
    }
    get onloadeddata() {
        return d.get(this, "onloadeddata")
    }
    set onloadeddata(e) {
        d.set(this, "onloadeddata", e)
    }
    get onloadedmetadata() {
        return d.get(this, "onloadedmetadata")
    }
    set onloadedmetadata(e) {
        d.set(this, "onloadedmetadata", e)
    }
    get onloadstart() {
        return d.get(this, "onloadstart")
    }
    set onloadstart(e) {
        d.set(this, "onloadstart", e)
    }
    get onmousedown() {
        return d.get(this, "onmousedown")
    }
    set onmousedown(e) {
        d.set(this, "onmousedown", e)
    }
    get onmouseenter() {
        return d.get(this, "onmouseenter")
    }
    set onmouseenter(e) {
        d.set(this, "onmouseenter", e)
    }
    get onmouseleave() {
        return d.get(this, "onmouseleave")
    }
    set onmouseleave(e) {
        d.set(this, "onmouseleave", e)
    }
    get onmousemove() {
        return d.get(this, "onmousemove")
    }
    set onmousemove(e) {
        d.set(this, "onmousemove", e)
    }
    get onmouseout() {
        return d.get(this, "onmouseout")
    }
    set onmouseout(e) {
        d.set(this, "onmouseout", e)
    }
    get onmouseover() {
        return d.get(this, "onmouseover")
    }
    set onmouseover(e) {
        d.set(this, "onmouseover", e)
    }
    get onmouseup() {
        return d.get(this, "onmouseup")
    }
    set onmouseup(e) {
        d.set(this, "onmouseup", e)
    }
    get onmousewheel() {
        return d.get(this, "onmousewheel")
    }
    set onmousewheel(e) {
        d.set(this, "onmousewheel", e)
    }
    get onpause() {
        return d.get(this, "onpause")
    }
    set onpause(e) {
        d.set(this, "onpause", e)
    }
    get onplay() {
        return d.get(this, "onplay")
    }
    set onplay(e) {
        d.set(this, "onplay", e)
    }
    get onplaying() {
        return d.get(this, "onplaying")
    }
    set onplaying(e) {
        d.set(this, "onplaying", e)
    }
    get onprogress() {
        return d.get(this, "onprogress")
    }
    set onprogress(e) {
        d.set(this, "onprogress", e)
    }
    get onratechange() {
        return d.get(this, "onratechange")
    }
    set onratechange(e) {
        d.set(this, "onratechange", e)
    }
    get onreset() {
        return d.get(this, "onreset")
    }
    set onreset(e) {
        d.set(this, "onreset", e)
    }
    get onresize() {
        return d.get(this, "onresize")
    }
    set onresize(e) {
        d.set(this, "onresize", e)
    }
    get onscroll() {
        return d.get(this, "onscroll")
    }
    set onscroll(e) {
        d.set(this, "onscroll", e)
    }
    get onseeked() {
        return d.get(this, "onseeked")
    }
    set onseeked(e) {
        d.set(this, "onseeked", e)
    }
    get onseeking() {
        return d.get(this, "onseeking")
    }
    set onseeking(e) {
        d.set(this, "onseeking", e)
    }
    get onselect() {
        return d.get(this, "onselect")
    }
    set onselect(e) {
        d.set(this, "onselect", e)
    }
    get onshow() {
        return d.get(this, "onshow")
    }
    set onshow(e) {
        d.set(this, "onshow", e)
    }
    get onstalled() {
        return d.get(this, "onstalled")
    }
    set onstalled(e) {
        d.set(this, "onstalled", e)
    }
    get onsubmit() {
        return d.get(this, "onsubmit")
    }
    set onsubmit(e) {
        d.set(this, "onsubmit", e)
    }
    get onsuspend() {
        return d.get(this, "onsuspend")
    }
    set onsuspend(e) {
        d.set(this, "onsuspend", e)
    }
    get ontimeupdate() {
        return d.get(this, "ontimeupdate")
    }
    set ontimeupdate(e) {
        d.set(this, "ontimeupdate", e)
    }
    get ontoggle() {
        return d.get(this, "ontoggle")
    }
    set ontoggle(e) {
        d.set(this, "ontoggle", e)
    }
    get onvolumechange() {
        return d.get(this, "onvolumechange")
    }
    set onvolumechange(e) {
        d.set(this, "onvolumechange", e)
    }
    get onwaiting() {
        return d.get(this, "onwaiting")
    }
    set onwaiting(e) {
        d.set(this, "onwaiting", e)
    }
    get onauxclick() {
        return d.get(this, "onauxclick")
    }
    set onauxclick(e) {
        d.set(this, "onauxclick", e)
    }
    get ongotpointercapture() {
        return d.get(this, "ongotpointercapture")
    }
    set ongotpointercapture(e) {
        d.set(this, "ongotpointercapture", e)
    }
    get onlostpointercapture() {
        return d.get(this, "onlostpointercapture")
    }
    set onlostpointercapture(e) {
        d.set(this, "onlostpointercapture", e)
    }
    get onpointercancel() {
        return d.get(this, "onpointercancel")
    }
    set onpointercancel(e) {
        d.set(this, "onpointercancel", e)
    }
    get onpointerdown() {
        return d.get(this, "onpointerdown")
    }
    set onpointerdown(e) {
        d.set(this, "onpointerdown", e)
    }
    get onpointerenter() {
        return d.get(this, "onpointerenter")
    }
    set onpointerenter(e) {
        d.set(this, "onpointerenter", e)
    }
    get onpointerleave() {
        return d.get(this, "onpointerleave")
    }
    set onpointerleave(e) {
        d.set(this, "onpointerleave", e)
    }
    get onpointermove() {
        return d.get(this, "onpointermove")
    }
    set onpointermove(e) {
        d.set(this, "onpointermove", e)
    }
    get onpointerout() {
        return d.get(this, "onpointerout")
    }
    set onpointerout(e) {
        d.set(this, "onpointerout", e)
    }
    get onpointerover() {
        return d.get(this, "onpointerover")
    }
    set onpointerover(e) {
        d.set(this, "onpointerover", e)
    }
    get onpointerup() {
        return d.get(this, "onpointerup")
    }
    set onpointerup(e) {
        d.set(this, "onpointerup", e)
    }
}
const Li = "template";
class _i extends m {
    constructor(e) {
        super(e, Li);
        const u = this.ownerDocument.createDocumentFragment();
        (this[It] = u)[Q] = this
    }
    get content() {
        if (this.hasChildNodes() && !this[It].hasChildNodes())
            for (const e of this.childNodes) this[It].appendChild(e.cloneNode(!0));
        return this[It]
    }
}
Z(Li, _i);
class Uc extends m {
    constructor(e, u = "html") {
        super(e, u)
    }
}
const {
    toString: Gc
} = m.prototype;
class pu extends m {
    get innerHTML() {
        return this.textContent
    }
    set innerHTML(e) {
        this.textContent = e
    }
    toString() {
        return Gc.call(this.cloneNode()).replace(/></, `>${this.textContent}<`)
    }
}
const Mi = "script";
class Oi extends pu {
    constructor(e, u = Mi) {
        super(e, u)
    }
    get type() {
        return b.get(this, "type")
    }
    set type(e) {
        b.set(this, "type", e)
    }
    get src() {
        return b.get(this, "src")
    }
    set src(e) {
        b.set(this, "src", e)
    }
    get defer() {
        return L.get(this, "defer")
    }
    set defer(e) {
        L.set(this, "defer", e)
    }
    get crossOrigin() {
        return b.get(this, "crossorigin")
    }
    set crossOrigin(e) {
        b.set(this, "crossorigin", e)
    }
    get nomodule() {
        return L.get(this, "nomodule")
    }
    set nomodule(e) {
        L.set(this, "nomodule", e)
    }
    get referrerPolicy() {
        return b.get(this, "referrerpolicy")
    }
    set referrerPolicy(e) {
        b.set(this, "referrerpolicy", e)
    }
    get nonce() {
        return b.get(this, "nonce")
    }
    set nonce(e) {
        b.set(this, "nonce", e)
    }
    get async() {
        return L.get(this, "async")
    }
    set async(e) {
        L.set(this, "async", e)
    }
    get text() {
        return this.textContent
    }
    set text(e) {
        this.textContent = e
    }
}
Z(Mi, Oi);
class Wc extends m {
    constructor(e, u = "frame") {
        super(e, u)
    }
}
const Di = "iframe";
class ji extends m {
    constructor(e, u = Di) {
        super(e, u)
    }
    get src() {
        return b.get(this, "src")
    }
    set src(e) {
        b.set(this, "src", e)
    }
    get srcdoc() {
        return b.get(this, "srcdoc")
    }
    set srcdoc(e) {
        b.set(this, "srcdoc", e)
    }
    get name() {
        return b.get(this, "name")
    }
    set name(e) {
        b.set(this, "name", e)
    }
    get allow() {
        return b.get(this, "allow")
    }
    set allow(e) {
        b.set(this, "allow", e)
    }
    get allowFullscreen() {
        return L.get(this, "allowfullscreen")
    }
    set allowFullscreen(e) {
        L.set(this, "allowfullscreen", e)
    }
    get referrerPolicy() {
        return b.get(this, "referrerpolicy")
    }
    set referrerPolicy(e) {
        b.set(this, "referrerpolicy", e)
    }
    get loading() {
        return b.get(this, "loading")
    }
    set loading(e) {
        b.set(this, "loading", e)
    }
}
Z(Di, ji);
class zc extends m {
    constructor(e, u = "object") {
        super(e, u)
    }
}
class Kc extends m {
    constructor(e, u = "head") {
        super(e, u)
    }
}
class Xc extends m {
    constructor(e, u = "body") {
        super(e, u)
    }
}
var Lu = {},
    _u = {},
    Mu = {},
    qi = {},
    Fi = {};
Fi.StyleSheet = function() {
    this.parentStyleSheet = null
};
qi.StyleSheet = Fi.StyleSheet;
var Ou = {},
    ce = {},
    B = {};
B.CSSRule = function() {
    this.parentRule = null, this.parentStyleSheet = null
};
B.CSSRule.UNKNOWN_RULE = 0;
B.CSSRule.STYLE_RULE = 1;
B.CSSRule.CHARSET_RULE = 2;
B.CSSRule.IMPORT_RULE = 3;
B.CSSRule.MEDIA_RULE = 4;
B.CSSRule.FONT_FACE_RULE = 5;
B.CSSRule.PAGE_RULE = 6;
B.CSSRule.KEYFRAMES_RULE = 7;
B.CSSRule.KEYFRAME_RULE = 8;
B.CSSRule.MARGIN_RULE = 9;
B.CSSRule.NAMESPACE_RULE = 10;
B.CSSRule.COUNTER_STYLE_RULE = 11;
B.CSSRule.SUPPORTS_RULE = 12;
B.CSSRule.DOCUMENT_RULE = 13;
B.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
B.CSSRule.VIEWPORT_RULE = 15;
B.CSSRule.REGION_STYLE_RULE = 16;
B.CSSRule.prototype = {
    constructor: B.CSSRule
};
ce.CSSRule = B.CSSRule;
var Mn;

function bu() {
    if (Mn) return Ou;
    Mn = 1;
    var t = {
        CSSStyleDeclaration: lt().CSSStyleDeclaration,
        CSSRule: ce.CSSRule
    };
    return t.CSSStyleRule = function() {
        t.CSSRule.call(this), this.selectorText = "", this.style = new t.CSSStyleDeclaration, this.style.parentRule = this
    }, t.CSSStyleRule.prototype = new t.CSSRule, t.CSSStyleRule.prototype.constructor = t.CSSStyleRule, t.CSSStyleRule.prototype.type = 1, Object.defineProperty(t.CSSStyleRule.prototype, "cssText", {
        get: function() {
            var e;
            return this.selectorText ? e = this.selectorText + " {" + this.style.cssText + "}" : e = "", e
        },
        set: function(e) {
            var u = t.CSSStyleRule.parse(e);
            this.style = u.style, this.selectorText = u.selectorText
        }
    }), t.CSSStyleRule.parse = function(e) {
        for (var u = 0, s = "selector", n, r = u, i = "", a = {
                selector: !0,
                value: !0
            }, o = new t.CSSStyleRule, l, h = "", p; p = e.charAt(u); u++) switch (p) {
            case " ":
            case "	":
            case "\r":
            case `
`:
            case "\f":
                if (a[s]) switch (e.charAt(u - 1)) {
                    case " ":
                    case "	":
                    case "\r":
                    case `
`:
                    case "\f":
                        break;
                    default:
                        i += " ";
                        break
                }
                break;
            case '"':
                if (r = u + 1, n = e.indexOf('"', r) + 1, !n) throw '" is missing';
                i += e.slice(u, n), u = n - 1;
                break;
            case "'":
                if (r = u + 1, n = e.indexOf("'", r) + 1, !n) throw "' is missing";
                i += e.slice(u, n), u = n - 1;
                break;
            case "/":
                if (e.charAt(u + 1) === "*") {
                    if (u += 2, n = e.indexOf("*/", u), n === -1) throw new SyntaxError("Missing */");
                    u = n + 1
                } else i += p;
                break;
            case "{":
                s === "selector" && (o.selectorText = i.trim(), i = "", s = "name");
                break;
            case ":":
                s === "name" ? (l = i.trim(), i = "", s = "value") : i += p;
                break;
            case "!":
                s === "value" && e.indexOf("!important", u) === u ? (h = "important", u += 9) : i += p;
                break;
            case ";":
                s === "value" ? (o.style.setProperty(l, i.trim(), h), h = "", i = "", s = "name") : i += p;
                break;
            case "}":
                if (s === "value") o.style.setProperty(l, i.trim(), h), h = "", i = "";
                else {
                    if (s === "name") break;
                    i += p
                }
                s = "selector";
                break;
            default:
                i += p;
                break
        }
        return o
    }, Ou.CSSStyleRule = t.CSSStyleRule, Ou
}
var On;

function gu() {
    if (On) return Mu;
    On = 1;
    var t = {
        StyleSheet: qi.StyleSheet,
        CSSStyleRule: bu().CSSStyleRule
    };
    return t.CSSStyleSheet = function() {
        t.StyleSheet.call(this), this.cssRules = []
    }, t.CSSStyleSheet.prototype = new t.StyleSheet, t.CSSStyleSheet.prototype.constructor = t.CSSStyleSheet, t.CSSStyleSheet.prototype.insertRule = function(e, u) {
        if (u < 0 || u > this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
        var s = t.parse(e).cssRules[0];
        return s.parentStyleSheet = this, this.cssRules.splice(u, 0, s), u
    }, t.CSSStyleSheet.prototype.deleteRule = function(e) {
        if (e < 0 || e >= this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
        this.cssRules.splice(e, 1)
    }, t.CSSStyleSheet.prototype.toString = function() {
        for (var e = "", u = this.cssRules, s = 0; s < u.length; s++) e += u[s].cssText + `
`;
        return e
    }, Mu.CSSStyleSheet = t.CSSStyleSheet, t.parse = Ws().parse, Mu
}
var Du = {},
    Bs = {},
    uu = {};
uu.MediaList = function() {
    this.length = 0
};
uu.MediaList.prototype = {
    constructor: uu.MediaList,
    get mediaText() {
        return Array.prototype.join.call(this, ", ")
    },
    set mediaText(t) {
        for (var e = t.split(","), u = this.length = e.length, s = 0; s < u; s++) this[s] = e[s].trim()
    },
    appendMedium: function(t) {
        Array.prototype.indexOf.call(this, t) === -1 && (this[this.length] = t, this.length++)
    },
    deleteMedium: function(t) {
        var e = Array.prototype.indexOf.call(this, t);
        e !== -1 && Array.prototype.splice.call(this, e, 1)
    }
};
Bs.MediaList = uu.MediaList;
var Dn;

function Hi() {
    if (Dn) return Du;
    Dn = 1;
    var t = {
        CSSRule: ce.CSSRule,
        CSSStyleSheet: gu().CSSStyleSheet,
        MediaList: Bs.MediaList
    };
    return t.CSSImportRule = function() {
        t.CSSRule.call(this), this.href = "", this.media = new t.MediaList, this.styleSheet = new t.CSSStyleSheet
    }, t.CSSImportRule.prototype = new t.CSSRule, t.CSSImportRule.prototype.constructor = t.CSSImportRule, t.CSSImportRule.prototype.type = 3, Object.defineProperty(t.CSSImportRule.prototype, "cssText", {
        get: function() {
            var e = this.media.mediaText;
            return "@import url(" + this.href + ")" + (e ? " " + e : "") + ";"
        },
        set: function(e) {
            for (var u = 0, s = "", n = "", r, i; i = e.charAt(u); u++) switch (i) {
                case " ":
                case "	":
                case "\r":
                case `
`:
                case "\f":
                    s === "after-import" ? s = "url" : n += i;
                    break;
                case "@":
                    !s && e.indexOf("@import", u) === u && (s = "after-import", u += 6, n = "");
                    break;
                case "u":
                    if (s === "url" && e.indexOf("url(", u) === u) {
                        if (r = e.indexOf(")", u + 1), r === -1) throw u + ': ")" not found';
                        u += 4;
                        var a = e.slice(u, r);
                        a[0] === a[a.length - 1] && (a[0] === '"' || a[0] === "'") && (a = a.slice(1, -1)), this.href = a, u = r, s = "media"
                    }
                    break;
                case '"':
                    if (s === "url") {
                        if (r = e.indexOf('"', u + 1), !r) throw u + `: '"' not found`;
                        this.href = e.slice(u + 1, r), u = r, s = "media"
                    }
                    break;
                case "'":
                    if (s === "url") {
                        if (r = e.indexOf("'", u + 1), !r) throw u + `: "'" not found`;
                        this.href = e.slice(u + 1, r), u = r, s = "media"
                    }
                    break;
                case ";":
                    s === "media" && n && (this.media.mediaText = n.trim());
                    break;
                default:
                    s === "media" && (n += i);
                    break
            }
        }
    }), Du.CSSImportRule = t.CSSImportRule, Du
}
var ct = {},
    Ne = {
        CSSRule: ce.CSSRule
    };
Ne.CSSGroupingRule = function() {
    Ne.CSSRule.call(this), this.cssRules = []
};
Ne.CSSGroupingRule.prototype = new Ne.CSSRule;
Ne.CSSGroupingRule.prototype.constructor = Ne.CSSGroupingRule;
Ne.CSSGroupingRule.prototype.insertRule = function(e, u) {
    if (u < 0 || u > this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
    var s = Ne.parse(e).cssRules[0];
    return s.parentRule = this, this.cssRules.splice(u, 0, s), u
};
Ne.CSSGroupingRule.prototype.deleteRule = function(e) {
    if (e < 0 || e >= this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
    this.cssRules.splice(e, 1)[0].parentRule = null
};
ct.CSSGroupingRule = Ne.CSSGroupingRule;
var $s = {},
    At = {},
    ke = {
        CSSRule: ce.CSSRule,
        CSSGroupingRule: ct.CSSGroupingRule
    };
ke.CSSConditionRule = function() {
    ke.CSSGroupingRule.call(this), this.cssRules = []
};
ke.CSSConditionRule.prototype = new ke.CSSGroupingRule;
ke.CSSConditionRule.prototype.constructor = ke.CSSConditionRule;
ke.CSSConditionRule.prototype.conditionText = "";
ke.CSSConditionRule.prototype.cssText = "";
At.CSSConditionRule = ke.CSSConditionRule;
var Ce = {
    CSSRule: ce.CSSRule,
    CSSGroupingRule: ct.CSSGroupingRule,
    CSSConditionRule: At.CSSConditionRule,
    MediaList: Bs.MediaList
};
Ce.CSSMediaRule = function() {
    Ce.CSSConditionRule.call(this), this.media = new Ce.MediaList
};
Ce.CSSMediaRule.prototype = new Ce.CSSConditionRule;
Ce.CSSMediaRule.prototype.constructor = Ce.CSSMediaRule;
Ce.CSSMediaRule.prototype.type = 4;
Object.defineProperties(Ce.CSSMediaRule.prototype, {
    conditionText: {
        get: function() {
            return this.media.mediaText
        },
        set: function(t) {
            this.media.mediaText = t
        },
        configurable: !0,
        enumerable: !0
    },
    cssText: {
        get: function() {
            for (var t = [], e = 0, u = this.cssRules.length; e < u; e++) t.push(this.cssRules[e].cssText);
            return "@media " + this.media.mediaText + " {" + t.join("") + "}"
        },
        configurable: !0,
        enumerable: !0
    }
});
$s.CSSMediaRule = Ce.CSSMediaRule;
var Ps = {},
    Ie = {
        CSSRule: ce.CSSRule,
        CSSGroupingRule: ct.CSSGroupingRule,
        CSSConditionRule: At.CSSConditionRule
    };
Ie.CSSSupportsRule = function() {
    Ie.CSSConditionRule.call(this)
};
Ie.CSSSupportsRule.prototype = new Ie.CSSConditionRule;
Ie.CSSSupportsRule.prototype.constructor = Ie.CSSSupportsRule;
Ie.CSSSupportsRule.prototype.type = 12;
Object.defineProperty(Ie.CSSSupportsRule.prototype, "cssText", {
    get: function() {
        for (var t = [], e = 0, u = this.cssRules.length; e < u; e++) t.push(this.cssRules[e].cssText);
        return "@supports " + this.conditionText + " {" + t.join("") + "}"
    }
});
Ps.CSSSupportsRule = Ie.CSSSupportsRule;
var ju = {},
    jn;

function Vi() {
    if (jn) return ju;
    jn = 1;
    var t = {
        CSSStyleDeclaration: lt().CSSStyleDeclaration,
        CSSRule: ce.CSSRule
    };
    return t.CSSFontFaceRule = function() {
        t.CSSRule.call(this), this.style = new t.CSSStyleDeclaration, this.style.parentRule = this
    }, t.CSSFontFaceRule.prototype = new t.CSSRule, t.CSSFontFaceRule.prototype.constructor = t.CSSFontFaceRule, t.CSSFontFaceRule.prototype.type = 5, Object.defineProperty(t.CSSFontFaceRule.prototype, "cssText", {
        get: function() {
            return "@font-face {" + this.style.cssText + "}"
        }
    }), ju.CSSFontFaceRule = t.CSSFontFaceRule, ju
}
var Bi = {},
    Le = {
        CSSRule: ce.CSSRule
    };
Le.CSSHostRule = function() {
    Le.CSSRule.call(this), this.cssRules = []
};
Le.CSSHostRule.prototype = new Le.CSSRule;
Le.CSSHostRule.prototype.constructor = Le.CSSHostRule;
Le.CSSHostRule.prototype.type = 1001;
Object.defineProperty(Le.CSSHostRule.prototype, "cssText", {
    get: function() {
        for (var t = [], e = 0, u = this.cssRules.length; e < u; e++) t.push(this.cssRules[e].cssText);
        return "@host {" + t.join("") + "}"
    }
});
Bi.CSSHostRule = Le.CSSHostRule;
var qu = {},
    qn;

function Us() {
    if (qn) return qu;
    qn = 1;
    var t = {
        CSSRule: ce.CSSRule,
        CSSStyleDeclaration: lt().CSSStyleDeclaration
    };
    return t.CSSKeyframeRule = function() {
        t.CSSRule.call(this), this.keyText = "", this.style = new t.CSSStyleDeclaration, this.style.parentRule = this
    }, t.CSSKeyframeRule.prototype = new t.CSSRule, t.CSSKeyframeRule.prototype.constructor = t.CSSKeyframeRule, t.CSSKeyframeRule.prototype.type = 8, Object.defineProperty(t.CSSKeyframeRule.prototype, "cssText", {
        get: function() {
            return this.keyText + " {" + this.style.cssText + "} "
        }
    }), qu.CSSKeyframeRule = t.CSSKeyframeRule, qu
}
var Gs = {},
    _e = {
        CSSRule: ce.CSSRule
    };
_e.CSSKeyframesRule = function() {
    _e.CSSRule.call(this), this.name = "", this.cssRules = []
};
_e.CSSKeyframesRule.prototype = new _e.CSSRule;
_e.CSSKeyframesRule.prototype.constructor = _e.CSSKeyframesRule;
_e.CSSKeyframesRule.prototype.type = 7;
Object.defineProperty(_e.CSSKeyframesRule.prototype, "cssText", {
    get: function() {
        for (var t = [], e = 0, u = this.cssRules.length; e < u; e++) t.push("  " + this.cssRules[e].cssText);
        return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + ` { 
` + t.join(`
`) + `
}`
    }
});
Gs.CSSKeyframesRule = _e.CSSKeyframesRule;
var $i = {},
    Pi = {},
    su = {};
su.CSSValue = function() {};
su.CSSValue.prototype = {
    constructor: su.CSSValue,
    set cssText(t) {
        var e = this._getConstructorName();
        throw new Error('DOMException: property "cssText" of "' + e + '" is readonly and can not be replaced with "' + t + '"!')
    },
    get cssText() {
        var t = this._getConstructorName();
        throw new Error('getter "cssText" of "' + t + '" is not implemented!')
    },
    _getConstructorName: function() {
        var t = this.constructor.toString(),
            e = t.match(/function\s([^\(]+)/),
            u = e[1];
        return u
    }
};
Pi.CSSValue = su.CSSValue;
var xe = {
    CSSValue: Pi.CSSValue
};
xe.CSSValueExpression = function(e, u) {
    this._token = e, this._idx = u
};
xe.CSSValueExpression.prototype = new xe.CSSValue;
xe.CSSValueExpression.prototype.constructor = xe.CSSValueExpression;
xe.CSSValueExpression.prototype.parse = function() {
    for (var t = this._token, e = this._idx, u = "", s = "", n = "", r, i = [];; ++e) {
        if (u = t.charAt(e), u === "") {
            n = "css expression error: unfinished expression!";
            break
        }
        switch (u) {
            case "(":
                i.push(u), s += u;
                break;
            case ")":
                i.pop(u), s += u;
                break;
            case "/":
                (r = this._parseJSComment(t, e)) ? r.error ? n = "css expression error: unfinished comment in expression!" : e = r.idx: (r = this._parseJSRexExp(t, e)) ? (e = r.idx, s += r.text) : s += u;
                break;
            case "'":
            case '"':
                r = this._parseJSString(t, e, u), r ? (e = r.idx, s += r.text) : s += u;
                break;
            default:
                s += u;
                break
        }
        if (n || i.length === 0) break
    }
    var a;
    return n ? a = {
        error: n
    } : a = {
        idx: e,
        expression: s
    }, a
};
xe.CSSValueExpression.prototype._parseJSComment = function(t, e) {
    var u = t.charAt(e + 1),
        s;
    if (u === "/" || u === "*") {
        var n = e,
            r, i;
        if (u === "/" ? i = `
` : u === "*" && (i = "*/"), r = t.indexOf(i, n + 1 + 1), r !== -1) return r = r + i.length - 1, s = t.substring(e, r + 1), {
            idx: r,
            text: s
        };
        var a = "css expression error: unfinished comment in expression!";
        return {
            error: a
        }
    } else return !1
};
xe.CSSValueExpression.prototype._parseJSString = function(t, e, u) {
    var s = this._findMatchedIdx(t, e, u),
        n;
    return s === -1 ? !1 : (n = t.substring(e, s + u.length), {
        idx: s,
        text: n
    })
};
xe.CSSValueExpression.prototype._parseJSRexExp = function(t, e) {
    var u = t.substring(0, e).replace(/\s+$/, ""),
        s = [/^$/, /\($/, /\[$/, /\!$/, /\+$/, /\-$/, /\*$/, /\/\s+/, /\%$/, /\=$/, /\>$/, /<$/, /\&$/, /\|$/, /\^$/, /\~$/, /\?$/, /\,$/, /delete$/, /in$/, /instanceof$/, /new$/, /typeof$/, /void$/],
        n = s.some(function(i) {
            return i.test(u)
        });
    if (n) {
        var r = "/";
        return this._parseJSString(t, e, r)
    } else return !1
};
xe.CSSValueExpression.prototype._findMatchedIdx = function(t, e, u) {
    for (var s = e, n, r = -1;;)
        if (n = t.indexOf(u, s + 1), n === -1) {
            n = r;
            break
        } else {
            var i = t.substring(e + 1, n),
                a = i.match(/\\+$/);
            if (!a || a[0] % 2 === 0) break;
            s = n
        }
    var o = t.indexOf(`
`, e + 1);
    return o < n && (n = r), n
};
$i.CSSValueExpression = xe.CSSValueExpression;
var Ui = {},
    Gi = {},
    nu = {};
nu.MatcherList = function() {
    this.length = 0
};
nu.MatcherList.prototype = {
    constructor: nu.MatcherList,
    get matcherText() {
        return Array.prototype.join.call(this, ", ")
    },
    set matcherText(t) {
        for (var e = t.split(","), u = this.length = e.length, s = 0; s < u; s++) this[s] = e[s].trim()
    },
    appendMatcher: function(t) {
        Array.prototype.indexOf.call(this, t) === -1 && (this[this.length] = t, this.length++)
    },
    deleteMatcher: function(t) {
        var e = Array.prototype.indexOf.call(this, t);
        e !== -1 && Array.prototype.splice.call(this, e, 1)
    }
};
Gi.MatcherList = nu.MatcherList;
var Ee = {
    CSSRule: ce.CSSRule,
    MatcherList: Gi.MatcherList
};
Ee.CSSDocumentRule = function() {
    Ee.CSSRule.call(this), this.matcher = new Ee.MatcherList, this.cssRules = []
};
Ee.CSSDocumentRule.prototype = new Ee.CSSRule;
Ee.CSSDocumentRule.prototype.constructor = Ee.CSSDocumentRule;
Ee.CSSDocumentRule.prototype.type = 10;
Object.defineProperty(Ee.CSSDocumentRule.prototype, "cssText", {
    get: function() {
        for (var t = [], e = 0, u = this.cssRules.length; e < u; e++) t.push(this.cssRules[e].cssText);
        return "@-moz-document " + this.matcher.matcherText + " {" + t.join("") + "}"
    }
});
Ui.CSSDocumentRule = Ee.CSSDocumentRule;
var Fn;

function Ws() {
    if (Fn) return _u;
    Fn = 1;
    var t = {};
    return t.parse = function(u) {
        for (var s = 0, n = "before-selector", r, i = "", a = 0, o = {
                selector: !0,
                value: !0,
                "value-parenthesis": !0,
                atRule: !0,
                "importRule-begin": !0,
                importRule: !0,
                atBlock: !0,
                conditionBlock: !0,
                "documentRule-begin": !0
            }, l = new t.CSSStyleSheet, h = l, p, S = [], y = !1, v, T, R = "", _, F, $, U, j, O, P, te, J = /@(-(?:\w+-)+)?keyframes/g, le = function(ie) {
                var dt = u.substring(0, s).split(`
`),
                    ht = dt.length,
                    Rt = dt.pop().length + 1,
                    Pe = new Error(ie + " (line " + ht + ", char " + Rt + ")");
                throw Pe.line = ht, Pe.char = Rt, Pe.styleSheet = l, Pe
            }, G; G = u.charAt(s); s++) switch (G) {
            case " ":
            case "	":
            case "\r":
            case `
`:
            case "\f":
                o[n] && (i += G);
                break;
            case '"':
                r = s + 1;
                do r = u.indexOf('"', r) + 1, r || le('Unmatched "'); while (u[r - 2] === "\\");
                switch (i += u.slice(s, r), s = r - 1, n) {
                    case "before-value":
                        n = "value";
                        break;
                    case "importRule-begin":
                        n = "importRule";
                        break
                }
                break;
            case "'":
                r = s + 1;
                do r = u.indexOf("'", r) + 1, r || le("Unmatched '"); while (u[r - 2] === "\\");
                switch (i += u.slice(s, r), s = r - 1, n) {
                    case "before-value":
                        n = "value";
                        break;
                    case "importRule-begin":
                        n = "importRule";
                        break
                }
                break;
            case "/":
                u.charAt(s + 1) === "*" ? (s += 2, r = u.indexOf("*/", s), r === -1 ? le("Missing */") : s = r + 1) : i += G, n === "importRule-begin" && (i += " ", n = "importRule");
                break;
            case "@":
                if (u.indexOf("@-moz-document", s) === s) {
                    n = "documentRule-begin", P = new t.CSSDocumentRule, P.__starts = s, s += 13, i = "";
                    break
                } else if (u.indexOf("@media", s) === s) {
                    n = "atBlock", F = new t.CSSMediaRule, F.__starts = s, s += 5, i = "";
                    break
                } else if (u.indexOf("@supports", s) === s) {
                    n = "conditionBlock", $ = new t.CSSSupportsRule, $.__starts = s, s += 8, i = "";
                    break
                } else if (u.indexOf("@host", s) === s) {
                    n = "hostRule-begin", s += 4, te = new t.CSSHostRule, te.__starts = s, i = "";
                    break
                } else if (u.indexOf("@import", s) === s) {
                    n = "importRule-begin", s += 6, i += "@import";
                    break
                } else if (u.indexOf("@font-face", s) === s) {
                    n = "fontFaceRule-begin", s += 9, j = new t.CSSFontFaceRule, j.__starts = s, i = "";
                    break
                } else {
                    J.lastIndex = s;
                    var de = J.exec(u);
                    if (de && de.index === s) {
                        n = "keyframesRule-begin", O = new t.CSSKeyframesRule, O.__starts = s, O._vendorPrefix = de[1], s += de[0].length - 1, i = "";
                        break
                    } else n === "selector" && (n = "atRule")
                }
                i += G;
                break;
            case "{":
                n === "selector" || n === "atRule" ? (_.selectorText = i.trim(), _.style.__starts = s, i = "", n = "before-name") : n === "atBlock" ? (F.media.mediaText = i.trim(), p && S.push(p), h = p = F, F.parentStyleSheet = l, i = "", n = "before-selector") : n === "conditionBlock" ? ($.conditionText = i.trim(), p && S.push(p), h = p = $, $.parentStyleSheet = l, i = "", n = "before-selector") : n === "hostRule-begin" ? (p && S.push(p), h = p = te, te.parentStyleSheet = l, i = "", n = "before-selector") : n === "fontFaceRule-begin" ? (p && (j.parentRule = p), j.parentStyleSheet = l, _ = j, i = "", n = "before-name") : n === "keyframesRule-begin" ? (O.name = i.trim(), p && (S.push(p), O.parentRule = p), O.parentStyleSheet = l, h = p = O, i = "", n = "keyframeRule-begin") : n === "keyframeRule-begin" ? (_ = new t.CSSKeyframeRule, _.keyText = i.trim(), _.__starts = s, i = "", n = "before-name") : n === "documentRule-begin" && (P.matcher.matcherText = i.trim(), p && (S.push(p), P.parentRule = p), h = p = P, P.parentStyleSheet = l, i = "", n = "before-selector");
                break;
            case ":":
                n === "name" ? (T = i.trim(), i = "", n = "before-value") : i += G;
                break;
            case "(":
                if (n === "value")
                    if (i.trim() === "expression") {
                        var Se = new t.CSSValueExpression(u, s).parse();
                        Se.error ? le(Se.error) : (i += Se.expression, s = Se.idx)
                    } else n = "value-parenthesis", a = 1, i += G;
                else n === "value-parenthesis" && a++, i += G;
                break;
            case ")":
                n === "value-parenthesis" && (a--, a === 0 && (n = "value")), i += G;
                break;
            case "!":
                n === "value" && u.indexOf("!important", s) === s ? (R = "important", s += 9) : i += G;
                break;
            case ";":
                switch (n) {
                    case "value":
                        _.style.setProperty(T, i.trim(), R), R = "", i = "", n = "before-name";
                        break;
                    case "atRule":
                        i = "", n = "before-selector";
                        break;
                    case "importRule":
                        U = new t.CSSImportRule, U.parentStyleSheet = U.styleSheet.parentStyleSheet = l, U.cssText = i + G, l.cssRules.push(U), i = "", n = "before-selector";
                        break;
                    default:
                        i += G;
                        break
                }
                break;
            case "}":
                switch (n) {
                    case "value":
                        _.style.setProperty(T, i.trim(), R), R = "";
                    case "before-name":
                    case "name":
                        _.__ends = s + 1, p && (_.parentRule = p), _.parentStyleSheet = l, h.cssRules.push(_), i = "", h.constructor === t.CSSKeyframesRule ? n = "keyframeRule-begin" : n = "before-selector";
                        break;
                    case "keyframeRule-begin":
                    case "before-selector":
                    case "selector":
                        for (p || le("Unexpected }"), y = S.length > 0; S.length > 0;) {
                            if (p = S.pop(), p.constructor.name === "CSSMediaRule" || p.constructor.name === "CSSSupportsRule") {
                                v = h, h = p, h.cssRules.push(v);
                                break
                            }
                            S.length === 0 && (y = !1)
                        }
                        y || (h.__ends = s + 1, l.cssRules.push(h), h = l, p = null), i = "", n = "before-selector";
                        break
                }
                break;
            default:
                switch (n) {
                    case "before-selector":
                        n = "selector", _ = new t.CSSStyleRule, _.__starts = s;
                        break;
                    case "before-name":
                        n = "name";
                        break;
                    case "before-value":
                        n = "value";
                        break;
                    case "importRule-begin":
                        n = "importRule";
                        break
                }
                i += G;
                break
        }
        return l
    }, _u.parse = t.parse, t.CSSStyleSheet = gu().CSSStyleSheet, t.CSSStyleRule = bu().CSSStyleRule, t.CSSImportRule = Hi().CSSImportRule, t.CSSGroupingRule = ct.CSSGroupingRule, t.CSSMediaRule = $s.CSSMediaRule, t.CSSConditionRule = At.CSSConditionRule, t.CSSSupportsRule = Ps.CSSSupportsRule, t.CSSFontFaceRule = Vi().CSSFontFaceRule, t.CSSHostRule = Bi.CSSHostRule, t.CSSStyleDeclaration = lt().CSSStyleDeclaration, t.CSSKeyframeRule = Us().CSSKeyframeRule, t.CSSKeyframesRule = Gs.CSSKeyframesRule, t.CSSValueExpression = $i.CSSValueExpression, t.CSSDocumentRule = Ui.CSSDocumentRule, _u
}
var Hn;

function lt() {
    if (Hn) return Lu;
    Hn = 1;
    var t = {};
    return t.CSSStyleDeclaration = function() {
        this.length = 0, this.parentRule = null, this._importants = {}
    }, t.CSSStyleDeclaration.prototype = {
        constructor: t.CSSStyleDeclaration,
        getPropertyValue: function(e) {
            return this[e] || ""
        },
        setProperty: function(e, u, s) {
            if (this[e]) {
                var n = Array.prototype.indexOf.call(this, e);
                n < 0 && (this[this.length] = e, this.length++)
            } else this[this.length] = e, this.length++;
            this[e] = u + "", this._importants[e] = s
        },
        removeProperty: function(e) {
            if (!(e in this)) return "";
            var u = Array.prototype.indexOf.call(this, e);
            if (u < 0) return "";
            var s = this[e];
            return this[e] = "", Array.prototype.splice.call(this, u, 1), s
        },
        getPropertyCSSValue: function() {},
        getPropertyPriority: function(e) {
            return this._importants[e] || ""
        },
        getPropertyShorthand: function() {},
        isPropertyImplicit: function() {},
        get cssText() {
            for (var e = [], u = 0, s = this.length; u < s; ++u) {
                var n = this[u],
                    r = this.getPropertyValue(n),
                    i = this.getPropertyPriority(n);
                i && (i = " !" + i), e[u] = n + ": " + r + i + ";"
            }
            return e.join(" ")
        },
        set cssText(e) {
            var u, s;
            for (u = this.length; u--;) s = this[u], this[s] = "";
            Array.prototype.splice.call(this, 0, this.length), this._importants = {};
            var n = t.parse("#bogus{" + e + "}").cssRules[0].style,
                r = n.length;
            for (u = 0; u < r; ++u) s = n[u], this.setProperty(n[u], n.getPropertyValue(s), n.getPropertyPriority(s))
        }
    }, Lu.CSSStyleDeclaration = t.CSSStyleDeclaration, t.parse = Ws().parse, Lu
}
gu().CSSStyleSheet, ce.CSSRule, bu().CSSStyleRule, ct.CSSGroupingRule, At.CSSConditionRule, $s.CSSMediaRule, Ps.CSSSupportsRule, lt().CSSStyleDeclaration, Us().CSSKeyframeRule, Gs.CSSKeyframesRule;
lt().CSSStyleDeclaration;
bu().CSSStyleRule;
Hi().CSSImportRule;
Vi().CSSFontFaceRule;
gu().CSSStyleSheet;
Us().CSSKeyframeRule;
var Jc = Ws().parse;
const Wi = "style";
class zi extends pu {
    constructor(e, u = Wi) {
        super(e, u), this[tt] = null
    }
    get sheet() {
        const e = this[tt];
        return e !== null ? e : this[tt] = Jc(this.textContent)
    }
    get innerHTML() {
        return super.innerHTML || ""
    }
    set innerHTML(e) {
        super.textContent = e, this[tt] = null
    }
    get innerText() {
        return super.innerText || ""
    }
    set innerText(e) {
        super.textContent = e, this[tt] = null
    }
    get textContent() {
        return super.textContent || ""
    }
    set textContent(e) {
        super.textContent = e, this[tt] = null
    }
}
Z(Wi, zi);
class Yc extends m {
    constructor(e, u = "time") {
        super(e, u)
    }
}
class Zc extends m {
    constructor(e, u = "fieldset") {
        super(e, u)
    }
}
class Qc extends m {
    constructor(e, u = "embed") {
        super(e, u)
    }
}
class el extends m {
    constructor(e, u = "hr") {
        super(e, u)
    }
}
class tl extends m {
    constructor(e, u = "progress") {
        super(e, u)
    }
}
class ul extends m {
    constructor(e, u = "p") {
        super(e, u)
    }
}
class sl extends m {
    constructor(e, u = "table") {
        super(e, u)
    }
}
class nl extends m {
    constructor(e, u = "frameset") {
        super(e, u)
    }
}
class rl extends m {
    constructor(e, u = "li") {
        super(e, u)
    }
}
class il extends m {
    constructor(e, u = "base") {
        super(e, u)
    }
}
class al extends m {
    constructor(e, u = "datalist") {
        super(e, u)
    }
}
const Ki = "input";
class Xi extends m {
    constructor(e, u = Ki) {
        super(e, u)
    }
    get autofocus() {
        return L.get(this, "autofocus") || -1
    }
    set autofocus(e) {
        L.set(this, "autofocus", e)
    }
    get disabled() {
        return L.get(this, "disabled")
    }
    set disabled(e) {
        L.set(this, "disabled", e)
    }
    get name() {
        return this.getAttribute("name")
    }
    set name(e) {
        this.setAttribute("name", e)
    }
    get placeholder() {
        return this.getAttribute("placeholder")
    }
    set placeholder(e) {
        this.setAttribute("placeholder", e)
    }
    get type() {
        return this.getAttribute("type")
    }
    set type(e) {
        this.setAttribute("type", e)
    }
    get value() {
        return b.get(this, "value")
    }
    set value(e) {
        b.set(this, "value", e)
    }
}
Z(Ki, Xi);
class ol extends m {
    constructor(e, u = "param") {
        super(e, u)
    }
}
class cl extends m {
    constructor(e, u = "media") {
        super(e, u)
    }
}
class ll extends m {
    constructor(e, u = "audio") {
        super(e, u)
    }
}
const Ji = "h1";
class Yi extends m {
    constructor(e, u = Ji) {
        super(e, u)
    }
}
Z([Ji, "h2", "h3", "h4", "h5", "h6"], Yi);
class dl extends m {
    constructor(e, u = "dir") {
        super(e, u)
    }
}
class hl extends m {
    constructor(e, u = "quote") {
        super(e, u)
    }
}
var rs = {
        exports: {}
    },
    Fu, Vn;

function fl() {
    if (Vn) return Fu;
    Vn = 1;
    class t {
        constructor(u, s) {
            this.width = u, this.height = s
        }
        getContext() {
            return null
        }
        toDataURL() {
            return ""
        }
    }
    return Fu = {
        createCanvas: (e, u) => new t(e, u)
    }, Fu
}
try {
    rs.exports = require("canvas")
} catch {
    rs.exports = fl()
}
var pl = rs.exports;
const bl = Kn(pl),
    {
        createCanvas: gl
    } = bl,
    Zi = "canvas";
class Qi extends m {
    constructor(e, u = Zi) {
        super(e, u), this[be] = gl(300, 150)
    }
    get width() {
        return this[be].width
    }
    set width(e) {
        Fe.set(this, "width", e), this[be].width = e
    }
    get height() {
        return this[be].height
    }
    set height(e) {
        Fe.set(this, "height", e), this[be].height = e
    }
    getContext(e) {
        return this[be].getContext(e)
    }
    toDataURL(...e) {
        return this[be].toDataURL(...e)
    }
}
Z(Zi, Qi);
class ml extends m {
    constructor(e, u = "legend") {
        super(e, u)
    }
}
const ea = "option";
class ta extends m {
    constructor(e, u = ea) {
        super(e, u)
    }
    get value() {
        return b.get(this, "value")
    }
    set value(e) {
        b.set(this, "value", e)
    }
    get selected() {
        return L.get(this, "selected")
    }
    set selected(e) {
        var s;
        const u = (s = this.parentElement) == null ? void 0 : s.querySelector("option[selected]");
        u && u !== this && (u.selected = !1), L.set(this, "selected", e)
    }
}
Z(ea, ta);
class xl extends m {
    constructor(e, u = "span") {
        super(e, u)
    }
}
class Sl extends m {
    constructor(e, u = "meter") {
        super(e, u)
    }
}
class yl extends m {
    constructor(e, u = "video") {
        super(e, u)
    }
}
class vl extends m {
    constructor(e, u = "td") {
        super(e, u)
    }
}
const ua = "title";
class sa extends pu {
    constructor(e, u = ua) {
        super(e, u)
    }
}
Z(ua, sa);
class wl extends m {
    constructor(e, u = "output") {
        super(e, u)
    }
}
class Cl extends m {
    constructor(e, u = "tr") {
        super(e, u)
    }
}
class El extends m {
    constructor(e, u = "data") {
        super(e, u)
    }
}
class Nl extends m {
    constructor(e, u = "menu") {
        super(e, u)
    }
}
const na = "select";
class ra extends m {
    constructor(e, u = na) {
        super(e, u)
    }
    get options() {
        let e = new we,
            {
                firstElementChild: u
            } = this;
        for (; u;) u.tagName === "OPTGROUP" ? e.push(...u.children) : e.push(u), u = u.nextElementSibling;
        return e
    }
    get disabled() {
        return L.get(this, "disabled")
    }
    set disabled(e) {
        L.set(this, "disabled", e)
    }
    get name() {
        return this.getAttribute("name")
    }
    set name(e) {
        this.setAttribute("name", e)
    }
    get value() {
        var e;
        return (e = this.querySelector("option[selected]")) == null ? void 0 : e.value
    }
}
Z(na, ra);
class Tl extends m {
    constructor(e, u = "br") {
        super(e, u)
    }
}
const ia = "button";
class aa extends m {
    constructor(e, u = ia) {
        super(e, u)
    }
    get disabled() {
        return L.get(this, "disabled")
    }
    set disabled(e) {
        L.set(this, "disabled", e)
    }
    get name() {
        return this.getAttribute("name")
    }
    set name(e) {
        this.setAttribute("name", e)
    }
    get type() {
        return this.getAttribute("type")
    }
    set type(e) {
        this.setAttribute("type", e)
    }
}
Z(ia, aa);
class Al extends m {
    constructor(e, u = "map") {
        super(e, u)
    }
}
class Rl extends m {
    constructor(e, u = "optgroup") {
        super(e, u)
    }
}
class kl extends m {
    constructor(e, u = "dl") {
        super(e, u)
    }
}
const oa = "textarea";
class ca extends pu {
    constructor(e, u = oa) {
        super(e, u)
    }
    get disabled() {
        return L.get(this, "disabled")
    }
    set disabled(e) {
        L.set(this, "disabled", e)
    }
    get name() {
        return this.getAttribute("name")
    }
    set name(e) {
        this.setAttribute("name", e)
    }
    get placeholder() {
        return this.getAttribute("placeholder")
    }
    set placeholder(e) {
        this.setAttribute("placeholder", e)
    }
    get type() {
        return this.getAttribute("type")
    }
    set type(e) {
        this.setAttribute("type", e)
    }
    get value() {
        return this.textContent
    }
    set value(e) {
        this.textContent = e
    }
}
Z(oa, ca);
class Il extends m {
    constructor(e, u = "font") {
        super(e, u)
    }
}
class Ll extends m {
    constructor(e, u = "div") {
        super(e, u)
    }
}
const la = "link";
class da extends m {
    constructor(e, u = la) {
        super(e, u)
    }
    get disabled() {
        return L.get(this, "disabled")
    }
    set disabled(e) {
        L.set(this, "disabled", e)
    }
    get href() {
        return b.get(this, "href")
    }
    set href(e) {
        b.set(this, "href", e)
    }
    get hreflang() {
        return b.get(this, "hreflang")
    }
    set hreflang(e) {
        b.set(this, "hreflang", e)
    }
    get media() {
        return b.get(this, "media")
    }
    set media(e) {
        b.set(this, "media", e)
    }
    get rel() {
        return b.get(this, "rel")
    }
    set rel(e) {
        b.set(this, "rel", e)
    }
    get type() {
        return b.get(this, "type")
    }
    set type(e) {
        b.set(this, "type", e)
    }
}
Z(la, da);
class _l extends m {
    constructor(e, u = "slot") {
        super(e, u)
    }
}
class Ml extends m {
    constructor(e, u = "form") {
        super(e, u)
    }
}
const ha = "img";
class zs extends m {
    constructor(e, u = ha) {
        super(e, u)
    }
    get alt() {
        return b.get(this, "alt")
    }
    set alt(e) {
        b.set(this, "alt", e)
    }
    get sizes() {
        return b.get(this, "sizes")
    }
    set sizes(e) {
        b.set(this, "sizes", e)
    }
    get src() {
        return b.get(this, "src")
    }
    set src(e) {
        b.set(this, "src", e)
    }
    get srcset() {
        return b.get(this, "srcset")
    }
    set srcset(e) {
        b.set(this, "srcset", e)
    }
    get title() {
        return b.get(this, "title")
    }
    set title(e) {
        b.set(this, "title", e)
    }
    get width() {
        return Fe.get(this, "width")
    }
    set width(e) {
        Fe.set(this, "width", e)
    }
    get height() {
        return Fe.get(this, "height")
    }
    set height(e) {
        Fe.set(this, "height", e)
    }
}
Z(ha, zs);
class Ol extends m {
    constructor(e, u = "pre") {
        super(e, u)
    }
}
class Dl extends m {
    constructor(e, u = "ul") {
        super(e, u)
    }
}
const fa = "meta";
class pa extends m {
    constructor(e, u = fa) {
        super(e, u)
    }
    get name() {
        return b.get(this, "name")
    }
    set name(e) {
        b.set(this, "name", e)
    }
    get httpEquiv() {
        return b.get(this, "http-equiv")
    }
    set httpEquiv(e) {
        b.set(this, "http-equiv", e)
    }
    get content() {
        return b.get(this, "content")
    }
    set content(e) {
        b.set(this, "content", e)
    }
    get charset() {
        return b.get(this, "charset")
    }
    set charset(e) {
        b.set(this, "charset", e)
    }
    get media() {
        return b.get(this, "media")
    }
    set media(e) {
        b.set(this, "media", e)
    }
}
Z(fa, pa);
class jl extends m {
    constructor(e, u = "picture") {
        super(e, u)
    }
}
class ql extends m {
    constructor(e, u = "area") {
        super(e, u)
    }
}
class Fl extends m {
    constructor(e, u = "ol") {
        super(e, u)
    }
}
class Hl extends m {
    constructor(e, u = "caption") {
        super(e, u)
    }
}
const ba = "a";
class ga extends m {
    constructor(e, u = ba) {
        super(e, u)
    }
    get href() {
        return encodeURI(b.get(this, "href"))
    }
    set href(e) {
        b.set(this, "href", decodeURI(e))
    }
    get download() {
        return encodeURI(b.get(this, "download"))
    }
    set download(e) {
        b.set(this, "download", decodeURI(e))
    }
    get target() {
        return b.get(this, "target")
    }
    set target(e) {
        b.set(this, "target", e)
    }
    get type() {
        return b.get(this, "type")
    }
    set type(e) {
        b.set(this, "type", e)
    }
}
Z(ba, ga);
class Vl extends m {
    constructor(e, u = "label") {
        super(e, u)
    }
}
class Bl extends m {
    constructor(e, u = "unknown") {
        super(e, u)
    }
}
class $l extends m {
    constructor(e, u = "mod") {
        super(e, u)
    }
}
class Pl extends m {
    constructor(e, u = "details") {
        super(e, u)
    }
}
const ma = "source";
class xa extends m {
    constructor(e, u = ma) {
        super(e, u)
    }
    get src() {
        return b.get(this, "src")
    }
    set src(e) {
        b.set(this, "src", e)
    }
    get srcset() {
        return b.get(this, "srcset")
    }
    set srcset(e) {
        b.set(this, "srcset", e)
    }
    get sizes() {
        return b.get(this, "sizes")
    }
    set sizes(e) {
        b.set(this, "sizes", e)
    }
    get type() {
        return b.get(this, "type")
    }
    set type(e) {
        b.set(this, "type", e)
    }
}
Z(ma, xa);
class Ul extends m {
    constructor(e, u = "track") {
        super(e, u)
    }
}
class Gl extends m {
    constructor(e, u = "marquee") {
        super(e, u)
    }
}
const Wl = {
        HTMLElement: m,
        HTMLTemplateElement: _i,
        HTMLHtmlElement: Uc,
        HTMLScriptElement: Oi,
        HTMLFrameElement: Wc,
        HTMLIFrameElement: ji,
        HTMLObjectElement: zc,
        HTMLHeadElement: Kc,
        HTMLBodyElement: Xc,
        HTMLStyleElement: zi,
        HTMLTimeElement: Yc,
        HTMLFieldSetElement: Zc,
        HTMLEmbedElement: Qc,
        HTMLHRElement: el,
        HTMLProgressElement: tl,
        HTMLParagraphElement: ul,
        HTMLTableElement: sl,
        HTMLFrameSetElement: nl,
        HTMLLIElement: rl,
        HTMLBaseElement: il,
        HTMLDataListElement: al,
        HTMLInputElement: Xi,
        HTMLParamElement: ol,
        HTMLMediaElement: cl,
        HTMLAudioElement: ll,
        HTMLHeadingElement: Yi,
        HTMLDirectoryElement: dl,
        HTMLQuoteElement: hl,
        HTMLCanvasElement: Qi,
        HTMLLegendElement: ml,
        HTMLOptionElement: ta,
        HTMLSpanElement: xl,
        HTMLMeterElement: Sl,
        HTMLVideoElement: yl,
        HTMLTableCellElement: vl,
        HTMLTitleElement: sa,
        HTMLOutputElement: wl,
        HTMLTableRowElement: Cl,
        HTMLDataElement: El,
        HTMLMenuElement: Nl,
        HTMLSelectElement: ra,
        HTMLBRElement: Tl,
        HTMLButtonElement: aa,
        HTMLMapElement: Al,
        HTMLOptGroupElement: Rl,
        HTMLDListElement: kl,
        HTMLTextAreaElement: ca,
        HTMLFontElement: Il,
        HTMLDivElement: Ll,
        HTMLLinkElement: da,
        HTMLSlotElement: _l,
        HTMLFormElement: Ml,
        HTMLImageElement: zs,
        HTMLPreElement: Ol,
        HTMLUListElement: Dl,
        HTMLMetaElement: pa,
        HTMLPictureElement: jl,
        HTMLAreaElement: ql,
        HTMLOListElement: Fl,
        HTMLTableCaptionElement: Hl,
        HTMLAnchorElement: ga,
        HTMLLabelElement: Vl,
        HTMLUnknownElement: Bl,
        HTMLModElement: $l,
        HTMLDetailsElement: Pl,
        HTMLSourceElement: xa,
        HTMLTrackElement: Ul,
        HTMLMarqueeElement: Gl
    },
    Dt = {
        test: () => !0
    },
    zl = {
        "text/html": {
            docType: "<!DOCTYPE html>",
            ignoreCase: !0,
            voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
        },
        "image/svg+xml": {
            docType: '<?xml version="1.0" encoding="utf-8"?>',
            ignoreCase: !1,
            voidElements: Dt
        },
        "text/xml": {
            docType: '<?xml version="1.0" encoding="utf-8"?>',
            ignoreCase: !1,
            voidElements: Dt
        },
        "application/xml": {
            docType: '<?xml version="1.0" encoding="utf-8"?>',
            ignoreCase: !1,
            voidElements: Dt
        },
        "application/xhtml+xml": {
            docType: '<?xml version="1.0" encoding="utf-8"?>',
            ignoreCase: !1,
            voidElements: Dt
        }
    };
class Sa extends Ye {
    constructor(e, u = {}) {
        super(e, u), this.detail = u.detail
    }
}
class Kl extends Ye {
    constructor(e, u = {}) {
        super(e, u), this.inputType = u.inputType, this.data = u.data, this.dataTransfer = u.dataTransfer, this.isComposing = u.isComposing || !1, this.ranges = u.ranges
    }
}
const Xl = t => class extends zs {
        constructor(u, s) {
            switch (super(t), arguments.length) {
                case 1:
                    this.height = u, this.width = u;
                    break;
                case 2:
                    this.height = s, this.width = u;
                    break
            }
        }
    },
    Bn = ({
        [se]: t,
        [w]: e
    }, u = null) => {
        Pr(t[K], e[g]);
        do {
            const s = ae(t),
                n = s === e ? s : s[g];
            u ? u.insertBefore(t, u[w]) : t.remove(), t = n
        } while (t !== e)
    };
class Ks {
    constructor() {
        this[se] = null, this[w] = null, this.commonAncestorContainer = null
    }
    insertNode(e) {
        this[w].parentNode.insertBefore(e, this[se])
    }
    selectNode(e) {
        this[se] = e, this[w] = ae(e)
    }
    surroundContents(e) {
        e.replaceChildren(this.extractContents())
    }
    setStartBefore(e) {
        this[se] = e
    }
    setStartAfter(e) {
        this[se] = e.nextSibling
    }
    setEndBefore(e) {
        this[w] = ae(e.previousSibling)
    }
    setEndAfter(e) {
        this[w] = ae(e)
    }
    cloneContents() {
        let {
            [se]: e, [w]: u
        } = this;
        const s = e.ownerDocument.createDocumentFragment();
        for (; e !== u;) s.insertBefore(e.cloneNode(!0), s[w]), e = ae(e), e !== u && (e = e[g]);
        return s
    }
    deleteContents() {
        Bn(this)
    }
    extractContents() {
        const e = this[se].ownerDocument.createDocumentFragment();
        return Bn(this, e), e
    }
    createContextualFragment(e) {
        const u = this.commonAncestorContainer.createElement("template");
        return u.innerHTML = e, this.selectNode(u.content), u.content
    }
    cloneRange() {
        const e = new Ks;
        return e[se] = this[se], e[w] = this[w], e
    }
}
const Jl = ({
    nodeType: t
}, e) => {
    switch (t) {
        case I:
            return e & y0;
        case ee:
            return e & v0;
        case Re:
            return e & w0
    }
    return 0
};
class Yl {
    constructor(e, u = S0) {
        this.root = e, this.currentNode = e, this.whatToShow = u;
        let {
            [g]: s, [w]: n
        } = e;
        if (e.nodeType === Oe) {
            const {
                documentElement: i
            } = e;
            s = i, n = i[w]
        }
        const r = [];
        for (; s !== n;) Jl(s, u) && r.push(s), s = s[g];
        this[Q] = {
            i: 0,
            nodes: r
        }
    }
    nextNode() {
        const e = this[Q];
        return this.currentNode = e.i < e.nodes.length ? e.nodes[e.i++] : null, this.currentNode
    }
}
const $n = (t, e, u) => {
        let {
            [g]: s, [w]: n
        } = e;
        return t.call({
            ownerDocument: e,
            [g]: s,
            [w]: n
        }, u)
    },
    ya = A0({}, Pc, Wl, {
        CustomEvent: Sa,
        Event: Ye,
        EventTarget: ws,
        InputEvent: Kl,
        NamedNodeMap: Ii,
        NodeList: we
    }),
    jt = new WeakMap;
let Ze = class extends As {
    constructor(e) {
        super(null, "#document", Oe), this[pe] = {
            active: !1,
            registry: null
        }, this[De] = {
            active: !1,
            class: null
        }, this[it] = zl[e], this[Ue] = null, this[Pu] = null, this[Ht] = null, this[be] = null, this[mt] = null
    }
    get defaultView() {
        return jt.has(this) || jt.set(this, new Proxy(globalThis, {
            set: (e, u, s) => {
                switch (u) {
                    case "addEventListener":
                    case "removeEventListener":
                    case "dispatchEvent":
                        this[ft][u] = s;
                        break;
                    default:
                        e[u] = s;
                        break
                }
                return !0
            },
            get: (e, u) => {
                switch (u) {
                    case "addEventListener":
                    case "removeEventListener":
                    case "dispatchEvent":
                        if (!this[ft]) {
                            const s = this[ft] = new ws;
                            s.dispatchEvent = s.dispatchEvent.bind(s), s.addEventListener = s.addEventListener.bind(s), s.removeEventListener = s.removeEventListener.bind(s)
                        }
                        return this[ft][u];
                    case "document":
                        return this;
                    case "navigator":
                        return {
                            userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
                        };
                    case "window":
                        return jt.get(this);
                    case "customElements":
                        return this[pe].registry || (this[pe] = new O0(this)), this[pe];
                    case "performance":
                        return Yu;
                    case "DOMParser":
                        return this[Pu];
                    case "Image":
                        return this[be] || (this[be] = Xl(this)), this[be];
                    case "MutationObserver":
                        return this[De].class || (this[De] = new F0(this)), this[De].class
                }
                return this[Ht] && this[Ht][u] || ya[u] || e[u]
            }
        })), jt.get(this)
    }
    get doctype() {
        const e = this[Ue];
        if (e) return e;
        const {
            firstChild: u
        } = this;
        return u && u.nodeType === rt ? this[Ue] = u : null
    }
    set doctype(e) {
        if (/^([a-z:]+)(\s+system|\s+public(\s+"([^"]+)")?)?(\s+"([^"]+)")?/i.test(e)) {
            const {
                $1: u,
                $4: s,
                $6: n
            } = RegExp;
            this[Ue] = new eu(this, u, s, n), cu(this, this[Ue], this[g])
        }
    }
    get documentElement() {
        return this.firstElementChild
    }
    get isConnected() {
        return !0
    }
    _getParent() {
        return this[ft]
    }
    createAttribute(e) {
        return new Et(this, e)
    }
    createComment(e) {
        return new Ns(this, e)
    }
    createDocumentFragment() {
        return new Rs(this)
    }
    createDocumentType(e, u, s) {
        return new eu(this, e, u, s)
    }
    createElement(e) {
        return new Tt(this, e)
    }
    createRange() {
        const e = new Ks;
        return e.commonAncestorContainer = this, e
    }
    createTextNode(e) {
        return new Nt(this, e)
    }
    createTreeWalker(e, u = -1) {
        return new Yl(e, u)
    }
    createNodeIterator(e, u = -1) {
        return this.createTreeWalker(e, u)
    }
    createEvent(e) {
        const u = R0(e === "Event" ? new Ye("") : new Sa(""));
        return u.initEvent = u.initCustomEvent = (s, n = !1, r = !1, i) => {
            k0(u, {
                type: {
                    value: s
                },
                canBubble: {
                    value: n
                },
                cancelable: {
                    value: r
                },
                detail: {
                    value: i
                }
            })
        }, u
    }
    cloneNode(e = !1) {
        const {
            constructor: u,
            [pe]: s,
            [Ue]: n
        } = this, r = new u;
        if (r[pe] = s, e) {
            const i = r[w],
                {
                    childNodes: a
                } = this;
            for (let {
                    length: o
                } = a, l = 0; l < o; l++) r.insertBefore(a[l].cloneNode(!0), i);
            n && (r[Ue] = a[0])
        }
        return r
    }
    importNode(e) {
        const u = 1 < arguments.length && !!arguments[1],
            s = e.cloneNode(u),
            {
                [pe]: n
            } = this,
            {
                active: r
            } = n,
            i = a => {
                const {
                    ownerDocument: o,
                    nodeType: l
                } = a;
                a.ownerDocument = this, r && o !== this && l === I && n.upgrade(a)
            };
        if (i(s), u) switch (s.nodeType) {
            case I:
            case Ae:
                {
                    let {
                        [g]: a, [w]: o
                    } = s;
                    for (; a !== o;) a.nodeType === I && i(a),
                    a = a[g];
                    break
                }
        }
        return s
    }
    toString() {
        return this.childNodes.join("")
    }
    querySelector(e) {
        return $n(super.querySelector, this, e)
    }
    querySelectorAll(e) {
        return $n(super.querySelectorAll, this, e)
    }
    getElementsByTagNameNS(e, u) {
        return this.getElementsByTagName(u)
    }
    createAttributeNS(e, u) {
        return this.createAttribute(u)
    }
    createElementNS(e, u, s) {
        return e === Yt ? new Is(this, u, null) : this.createElement(u, s)
    }
};
re(ya.Document = function() {
    fe()
}, Ze).prototype = Ze.prototype;
const Zl = (t, e, u, s) => {
    if (!e && Qt.has(u)) {
        const i = Qt.get(u);
        return new i(t, u)
    }
    const {
        [pe]: {
            active: n,
            registry: r
        }
    } = t;
    if (n) {
        const i = e ? s.is : u;
        if (r.has(i)) {
            const {
                Class: a
            } = r.get(i), o = new a(t, u);
            return Je.set(o, {
                connected: !1
            }), o
        }
    }
    return new m(t, u)
};
class Ql extends Ze {
    constructor() {
        super("text/html")
    }
    get all() {
        const e = new we;
        let {
            [g]: u, [w]: s
        } = this;
        for (; u !== s;) {
            switch (u.nodeType) {
                case I:
                    e.push(u);
                    break
            }
            u = u[g]
        }
        return e
    }
    get head() {
        const {
            documentElement: e
        } = this;
        let {
            firstElementChild: u
        } = e;
        return (!u || u.tagName !== "HEAD") && (u = this.createElement("head"), e.prepend(u)), u
    }
    get body() {
        const {
            head: e
        } = this;
        let {
            nextElementSibling: u
        } = e;
        return (!u || u.tagName !== "BODY") && (u = this.createElement("body"), e.after(u)), u
    }
    get title() {
        const {
            head: e
        } = this;
        let u = e.getElementsByTagName("title").shift();
        return u ? u.textContent : ""
    }
    set title(e) {
        const {
            head: u
        } = this;
        let s = u.getElementsByTagName("title").shift();
        s ? s.textContent = e : u.insertBefore(this.createElement("title"), u.firstChild).textContent = e
    }
    createElement(e, u) {
        const s = !!(u && u.is),
            n = Zl(this, s, e, u);
        return s && n.setAttribute("is", u.is), n
    }
}
class ed extends Ze {
    constructor() {
        super("image/svg+xml")
    }
    toString() {
        return this[it].docType + super.toString()
    }
}
class td extends Ze {
    constructor() {
        super("text/xml")
    }
    toString() {
        return this[it].docType + super.toString()
    }
}
class Xs {
    parseFromString(e, u, s = null) {
        let n = !1,
            r;
        return u === "text/html" ? (n = !0, r = new Ql) : u === "image/svg+xml" ? r = new ed : r = new td, r[Pu] = Xs, s && (r[Ht] = s), n && e === "..." && (e = "<!doctype html><html><head></head><body></body></html>"), e ? Gr(r, n, e) : r
    }
}
const ud = (t, e = null) => new Xs().parseFromString(t, "text/html", e).defaultView;

function sd() {
    fe()
}
re(sd, Ze).prototype = Ze.prototype;

function is() {
    return is = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var u = arguments[e];
            for (var s in u) Object.prototype.hasOwnProperty.call(u, s) && (t[s] = u[s])
        }
        return t
    }, is.apply(this, arguments)
}

function nd(t, e) {
    if (t == null) return {};
    var u = {},
        s = Object.keys(t),
        n, r;
    for (r = 0; r < s.length; r++) n = s[r], !(e.indexOf(n) >= 0) && (u[n] = t[n]);
    return u
}
var qt = 1,
    H = 4,
    Pn = 8,
    Ft = 24,
    rd = 32,
    id = {
        Properties: {
            accept: 0,
            acceptCharset: 0,
            accessKey: 0,
            action: 0,
            allowFullScreen: H,
            allowTransparency: 0,
            alt: 0,
            as: 0,
            async: H,
            autoComplete: 0,
            autoPlay: H,
            capture: H,
            cellPadding: 0,
            cellSpacing: 0,
            charSet: 0,
            challenge: 0,
            checked: qt | H,
            cite: 0,
            classID: 0,
            className: 0,
            cols: Ft,
            colSpan: 0,
            content: 0,
            contentEditable: 0,
            contextMenu: 0,
            controls: H,
            controlsList: 0,
            coords: 0,
            crossOrigin: 0,
            data: 0,
            dateTime: 0,
            default: H,
            defer: H,
            dir: 0,
            disabled: H,
            download: rd,
            draggable: 0,
            encType: 0,
            form: 0,
            formAction: 0,
            formEncType: 0,
            formMethod: 0,
            formNoValidate: H,
            formTarget: 0,
            frameBorder: 0,
            headers: 0,
            height: 0,
            hidden: H,
            high: 0,
            href: 0,
            hrefLang: 0,
            htmlFor: 0,
            httpEquiv: 0,
            icon: 0,
            id: 0,
            inputMode: 0,
            integrity: 0,
            is: 0,
            keyParams: 0,
            keyType: 0,
            kind: 0,
            label: 0,
            lang: 0,
            list: 0,
            loop: H,
            low: 0,
            manifest: 0,
            marginHeight: 0,
            marginWidth: 0,
            max: 0,
            maxLength: 0,
            media: 0,
            mediaGroup: 0,
            method: 0,
            min: 0,
            minLength: 0,
            multiple: qt | H,
            muted: qt | H,
            name: 0,
            nonce: 0,
            noValidate: H,
            open: H,
            optimum: 0,
            pattern: 0,
            placeholder: 0,
            playsInline: H,
            poster: 0,
            preload: 0,
            profile: 0,
            radioGroup: 0,
            readOnly: H,
            referrerPolicy: 0,
            rel: 0,
            required: H,
            reversed: H,
            role: 0,
            rows: Ft,
            rowSpan: Pn,
            sandbox: 0,
            scope: 0,
            scoped: H,
            scrolling: 0,
            seamless: H,
            selected: qt | H,
            shape: 0,
            size: Ft,
            sizes: 0,
            span: Ft,
            spellCheck: 0,
            src: 0,
            srcDoc: 0,
            srcLang: 0,
            srcSet: 0,
            start: Pn,
            step: 0,
            style: 0,
            summary: 0,
            tabIndex: 0,
            target: 0,
            title: 0,
            type: 0,
            useMap: 0,
            value: 0,
            width: 0,
            wmode: 0,
            wrap: 0,
            about: 0,
            datatype: 0,
            inlist: 0,
            prefix: 0,
            property: 0,
            resource: 0,
            typeof: 0,
            vocab: 0,
            autoCapitalize: 0,
            autoCorrect: 0,
            autoSave: 0,
            color: 0,
            itemProp: 0,
            itemScope: H,
            itemType: 0,
            itemID: 0,
            itemRef: 0,
            results: 0,
            security: 0,
            unselectable: 0
        },
        DOMAttributeNames: {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
        }
    },
    ye = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    },
    Hu = {
        accentHeight: "accent-height",
        accumulate: 0,
        additive: 0,
        alignmentBaseline: "alignment-baseline",
        allowReorder: "allowReorder",
        alphabetic: 0,
        amplitude: 0,
        arabicForm: "arabic-form",
        ascent: 0,
        attributeName: "attributeName",
        attributeType: "attributeType",
        autoReverse: "autoReverse",
        azimuth: 0,
        baseFrequency: "baseFrequency",
        baseProfile: "baseProfile",
        baselineShift: "baseline-shift",
        bbox: 0,
        begin: 0,
        bias: 0,
        by: 0,
        calcMode: "calcMode",
        capHeight: "cap-height",
        clip: 0,
        clipPath: "clip-path",
        clipRule: "clip-rule",
        clipPathUnits: "clipPathUnits",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        contentScriptType: "contentScriptType",
        contentStyleType: "contentStyleType",
        cursor: 0,
        cx: 0,
        cy: 0,
        d: 0,
        decelerate: 0,
        descent: 0,
        diffuseConstant: "diffuseConstant",
        direction: 0,
        display: 0,
        divisor: 0,
        dominantBaseline: "dominant-baseline",
        dur: 0,
        dx: 0,
        dy: 0,
        edgeMode: "edgeMode",
        elevation: 0,
        enableBackground: "enable-background",
        end: 0,
        exponent: 0,
        externalResourcesRequired: "externalResourcesRequired",
        fill: 0,
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        filter: 0,
        filterRes: "filterRes",
        filterUnits: "filterUnits",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        focusable: 0,
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        format: 0,
        from: 0,
        fx: 0,
        fy: 0,
        g1: 0,
        g2: 0,
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        glyphRef: "glyphRef",
        gradientTransform: "gradientTransform",
        gradientUnits: "gradientUnits",
        hanging: 0,
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        ideographic: 0,
        imageRendering: "image-rendering",
        in: 0,
        in2: 0,
        intercept: 0,
        k: 0,
        k1: 0,
        k2: 0,
        k3: 0,
        k4: 0,
        kernelMatrix: "kernelMatrix",
        kernelUnitLength: "kernelUnitLength",
        kerning: 0,
        keyPoints: "keyPoints",
        keySplines: "keySplines",
        keyTimes: "keyTimes",
        lengthAdjust: "lengthAdjust",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        limitingConeAngle: "limitingConeAngle",
        local: 0,
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        markerHeight: "markerHeight",
        markerUnits: "markerUnits",
        markerWidth: "markerWidth",
        mask: 0,
        maskContentUnits: "maskContentUnits",
        maskUnits: "maskUnits",
        mathematical: 0,
        mode: 0,
        numOctaves: "numOctaves",
        offset: 0,
        opacity: 0,
        operator: 0,
        order: 0,
        orient: 0,
        orientation: 0,
        origin: 0,
        overflow: 0,
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pathLength: "pathLength",
        patternContentUnits: "patternContentUnits",
        patternTransform: "patternTransform",
        patternUnits: "patternUnits",
        pointerEvents: "pointer-events",
        points: 0,
        pointsAtX: "pointsAtX",
        pointsAtY: "pointsAtY",
        pointsAtZ: "pointsAtZ",
        preserveAlpha: "preserveAlpha",
        preserveAspectRatio: "preserveAspectRatio",
        primitiveUnits: "primitiveUnits",
        r: 0,
        radius: 0,
        refX: "refX",
        refY: "refY",
        renderingIntent: "rendering-intent",
        repeatCount: "repeatCount",
        repeatDur: "repeatDur",
        requiredExtensions: "requiredExtensions",
        requiredFeatures: "requiredFeatures",
        restart: 0,
        result: 0,
        rotate: 0,
        rx: 0,
        ry: 0,
        scale: 0,
        seed: 0,
        shapeRendering: "shape-rendering",
        slope: 0,
        spacing: 0,
        specularConstant: "specularConstant",
        specularExponent: "specularExponent",
        speed: 0,
        spreadMethod: "spreadMethod",
        startOffset: "startOffset",
        stdDeviation: "stdDeviation",
        stemh: 0,
        stemv: 0,
        stitchTiles: "stitchTiles",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        string: 0,
        stroke: 0,
        strokeDasharray: "stroke-dasharray",
        strokeDashoffset: "stroke-dashoffset",
        strokeLinecap: "stroke-linecap",
        strokeLinejoin: "stroke-linejoin",
        strokeMiterlimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        surfaceScale: "surfaceScale",
        systemLanguage: "systemLanguage",
        tableValues: "tableValues",
        targetX: "targetX",
        targetY: "targetY",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        textLength: "textLength",
        to: 0,
        transform: 0,
        u1: 0,
        u2: 0,
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicode: 0,
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        values: 0,
        vectorEffect: "vector-effect",
        version: 0,
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        viewBox: "viewBox",
        viewTarget: "viewTarget",
        visibility: 0,
        widths: 0,
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        x: 0,
        xHeight: "x-height",
        x1: 0,
        x2: 0,
        xChannelSelector: "xChannelSelector",
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type",
        xmlBase: "xml:base",
        xmlns: 0,
        xmlnsXlink: "xmlns:xlink",
        xmlLang: "xml:lang",
        xmlSpace: "xml:space",
        y: 0,
        y1: 0,
        y2: 0,
        yChannelSelector: "yChannelSelector",
        z: 0,
        zoomAndPan: "zoomAndPan"
    },
    as = {
        Properties: {},
        DOMAttributeNamespaces: {
            xlinkActuate: ye.xlink,
            xlinkArcrole: ye.xlink,
            xlinkHref: ye.xlink,
            xlinkRole: ye.xlink,
            xlinkShow: ye.xlink,
            xlinkTitle: ye.xlink,
            xlinkType: ye.xlink,
            xmlBase: ye.xml,
            xmlLang: ye.xml,
            xmlSpace: ye.xml
        },
        DOMAttributeNames: {}
    };
Object.keys(Hu).forEach(function(t) {
    as.Properties[t] = 0;
    var e = t;
    Hu[e] && (as.DOMAttributeNames[t] = Hu[e])
});
var os = {
    for: "htmlFor",
    class: "className"
};

function va(t) {
    Object.keys(t.Properties).forEach(function(e) {
        var u = t.DOMAttributeNames[e] || e.toLowerCase();
        os[u] || (os[u] = e)
    })
}
va(id);
va(as);
var Un = {
        input: {
            checked: "defaultChecked",
            value: "defaultValue",
            autofocus: "autoFocus"
        }
    },
    Gn = {
        a: "a",
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animate: "animate",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        audio: "audio",
        canvas: "canvas",
        circle: "circle",
        clippath: "clipPath",
        "color-profile": "colorProfile",
        cursor: "cursor",
        defs: "defs",
        desc: "desc",
        discard: "discard",
        ellipse: "ellipse",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        filter: "filter",
        font: "font",
        "font-face": "fontFace",
        "font-face-format": "fontFaceFormat",
        "font-face-name": "fontFaceName",
        "font-face-src": "fontFaceSrc",
        "font-face-uri": "fontFaceUri",
        foreignobject: "foreignObject",
        g: "g",
        glyph: "glyph",
        glyphref: "glyphRef",
        hatch: "hatch",
        hatchpath: "hatchpath",
        hkern: "hkern",
        iframe: "iframe",
        image: "image",
        line: "line",
        lineargradient: "linearGradient",
        marker: "marker",
        mask: "mask",
        mesh: "mesh",
        meshgradient: "meshgradient",
        meshpatch: "meshpatch",
        meshrow: "meshrow",
        metadata: "metadata",
        "missing-glyph": "missingGlyph",
        mpath: "mpath",
        path: "path",
        pattern: "pattern",
        polygon: "polygon",
        polyline: "polyline",
        radialgradient: "radialGradient",
        rect: "rect",
        script: "script",
        set: "set",
        solidcolor: "solidcolor",
        stop: "stop",
        style: "style",
        svg: "svg",
        switch: "switch",
        symbol: "symbol",
        text: "text",
        textpath: "textPath",
        title: "title",
        tref: "tref",
        tspan: "tspan",
        unknown: "unknown",
        use: "use",
        video: "video",
        view: "view",
        vkern: "vkern"
    },
    ze = {
        ELEMENT: 1,
        TEXT: 3,
        COMMENT: 8
    };

function ad(t) {
    return t = t.trim(), t = t.replace(/<script([\s\S]*?)<\/script>/g, ""), t
}
var cs;
if (typeof IN_BROWSER < "u" && IN_BROWSER) cs = function(e) {
    return document.createElement(e)
};
else {
    var od = ud("<html></html>"),
        cd = od.document;
    cs = function(e) {
        return cd.createElement(e)
    }
}
var wa = cs,
    Wn = wa("div");

function ld(t) {
    return Wn.textContent = t, Wn.innerHTML
}

function ls(t) {
    return t != null && (typeof t == "number" || parseInt(t, 10) == t)
}

function yt(t) {
    var e = t.toLowerCase();
    return Gn.hasOwnProperty(e) && (e = Gn[e]), e
}

function zn(t) {
    var e = yt(t.tagName);
    return !t.firstChild || e === "textarea" || e === "style"
}

function dd(t) {
    return !/[^\s]/.test(t)
}

function hd(t) {
    if (t.childNodes.length === 1 && t.childNodes[0].nodeType === ze.ELEMENT) return !0;
    for (var e = !1, u = 0, s = t.childNodes.length; u < s; u++) {
        var n, r = t.childNodes[u];
        if (r.nodeType === ze.ELEMENT) {
            if (e) return !1;
            e = !0
        } else if (r.nodeType === ze.TEXT && !dd((n = r.textContent) != null ? n : "")) return !1
    }
    return !0
}

function fd(t, e) {
    if (e === 1) return t;
    if (e < 0) throw new Error;
    for (var u = ""; e;) e & 1 && (u += t), (e >>= 1) && (t += t);
    return u
}

function pd(t, e) {
    return t.endsWith(e) ? t.slice(0, -e.length) : t
}

function bd(t) {
    return t.replace(/-(.)/g, function(e, u) {
        return u.toUpperCase()
    })
}

function gd(t) {
    return /^-ms-/.test(t) && (t = t.slice(1)), bd(t)
}

function md(t) {
    if (ls(t)) return t;
    var e = t.trim();
    if (e.length > 2 && e.endsWith("px")) {
        var u = e.replace("px", "");
        if (ls(u)) return u
    }
    return "'" + t.replace(/'/g, '"') + "'"
}
var xd = function() {
        function t(u) {
            this.styles = {}, this.parse(u)
        }
        var e = t.prototype;
        return e.parse = function(s) {
            var n = this;
            this.styles = {}, s.split(";").forEach(function(r) {
                r = r.trim();
                var i = r.indexOf(":"),
                    a = r.slice(0, i),
                    o = r.slice(i + 1).trim();
                a !== "" && (a = a.toLowerCase(), n.styles[a] = o)
            })
        }, e.toJSXString = function() {
            return Object.entries(this.styles).map(function(s) {
                var n = s[0],
                    r = s[1];
                return gd(n) + ": " + md(r)
            }).join(", ")
        }, t
    }(),
    Sd = ["createClass", "indent"];

function yd(t) {
    var e = new xd(t).toJSXString();
    return "style={{" + e + "}}"
}

function vd(t, e) {
    var u = new RegExp("\\n" + e + e + e, "g");
    return t.replace(u, `
`)
}

function wd(t, e) {
    switch (e.name) {
        case "style":
            return yd(e.value);
        default:
            var u = yt(t.tagName),
                s = Un[u] && Un[u][e.name] || os[e.name] || e.name,
                n = s;
            return ls(e.value) ? n += "={" + e.value + "}" : e.value.length > 0 ? n += '="' + e.value.replace(/"/gm, "&quot;") + '"' : e.value.length === 0 && e.name === "alt" && (n += '=""'), n
    }
}
var Cd = function() {
    function t(u) {
        u === void 0 && (u = {});
        var s = u,
            n = s.createClass,
            r = s.indent,
            i = nd(s, Sd);
        this.config = is({
            createClass: n === void 0 ? !0 : n,
            indent: r || "  "
        }, i), this.output = "", this.level = 0, this._inPreTag = !1
    }
    var e = t.prototype;
    return e.reset = function() {
        this.output = "", this.level = 0, this._inPreTag = !1
    }, e._visitComment = function(s) {
        var n;
        this.output += "{/*" + ((n = s.textContent) == null ? void 0 : n.replace("*/", "* /")) + "*/}"
    }, e._getIndentedNewline = function() {
        return `
` + fd(this.config.indent, this.level + 2)
    }, e._visit = function(s) {
        this._beginVisit(s), this._traverse(s), this._endVisit(s)
    }, e._traverse = function(s) {
        this.level++;
        for (var n = 0, r = s.childNodes.length; n < r; n++) this._visit(s.childNodes[n]);
        this.level--
    }, e._beginVisit = function(s) {
        switch (s.nodeType) {
            case ze.ELEMENT:
                this._beginVisitElement(s);
                break;
            case ze.TEXT:
                this._visitText(s);
                break;
            case ze.COMMENT:
                this._visitComment(s);
                break;
            default:
                console.warn("Unrecognised node type: " + s.nodeType)
        }
    }, e._endVisit = function(s) {
        switch (s.nodeType) {
            case ze.ELEMENT:
                this._endVisitElement(s);
                break
        }
    }, e._beginVisitElement = function(s) {
        for (var n = yt(s.tagName), r = [], i = 0, a = s.attributes.length; i < a; i++) r.push(wd(s, s.attributes[i]));
        n === "textarea" && r.push("defaultValue={" + JSON.stringify(s.value) + "}"), n === "style" && r.push("dangerouslySetInnerHTML={{__html: " + JSON.stringify(s.textContent) + " }}"), n === "pre" && (this._inPreTag = !0), this.output += "<" + n, r.length > 0 && (this.output += " " + r.join(" ")), zn(s) || (this.output += ">")
    }, e._endVisitElement = function(s) {
        var n = yt(s.tagName);
        this.output = pd(this.output, this.config.indent), zn(s) ? this.output += " />" : this.output += "</" + n + ">", n === "pre" && (this._inPreTag = !1)
    }, e._visitText = function(s) {
        var n = s.parentNode && yt(s.parentNode.tagName);
        if (!(n === "textarea" || n === "style")) {
            var r = ld(s.textContent || "");
            this._inPreTag ? r = r.replace(/\r/g, "").replace(/( {2,}|\n|\t|\{|\})/g, function(i) {
                return "{" + JSON.stringify(i) + "}"
            }) : (r = r.replace(/(\{|\})/g, function(i) {
                return "{'" + i + "'}"
            }), r.indexOf(`
`) > -1 && (r = r.replace(/\n\s*/g, this._getIndentedNewline()))), this.output += r
        }
    }, e.convert = function(s) {
        this.reset();
        var n = wa("div");
        return n.innerHTML = `
` + ad(s) + `
`, this.config.createClass && (this.config.outputClassName ? this.output = "var " + this.config.outputClassName + ` = React.createClass({
` : this.output = `React.createClass({
`, this.output += this.config.indent + `render: function() {
`, this.output += this.config.indent + this.config.indent + `return (
`), hd(n) ? this._traverse(n) : (this.output += this.config.indent + this.config.indent + this.config.indent, this.level++, this._visit(n)), this.output = this.output.trim() + `
`, this.config.createClass ? (this.output += this.config.indent + this.config.indent + `);
`, this.output += this.config.indent + `}
`, this.output += "});") : this.output = vd(this.output, this.config.indent), this.output
    }, t
}();
const $e = (t, e) => t.trim().split(`
`).map(u => u.trim() === "" ? "" : " ".repeat(e) + u).join(`
`),
    Js = t => t.replace(/`/g, "\\`"),
    Ed = t => `
const StyledWrapper = styled.div\`
${$e(Js(t),2)}\`;
`,
    Nd = (t, e) => e ? `return (
${$e(t,4)}
  );` : `return (
    <StyledWrapper>
${$e(t,6)}
    </StyledWrapper>
  );`,
    Td = ({
        type: t,
        html: e,
        css: u,
        isTailwind: s
    }) => {
        const n = Zn(t),
            r = s ? "import React from 'react';" : `import React from 'react';
import styled from 'styled-components';`,
            i = !s && u ? Ed(u) : "",
            a = Nd(e, u.trim().length === 0 || (s ? ? !1));
        return `${r}

const ${n} = () => {
  ${a}
}
${i}
export default ${n};
`
    },
    Ad = ({
        type: t,
        html: e,
        css: u,
        isTailwind: s
    }) => {
        try {
            const n = new Cd({
                createClass: !1
            });
            return Td({
                css: u,
                html: n.convert(e),
                isTailwind: s,
                type: t
            })
        } catch {
            return "Something went wrong"
        }
    },
    Rd = t => `
  static styles = css\`
${$e(Js(t),4)}\`;

`,
    kd = t => `return html\`
${$e(Js(t),6)}
    \`;`,
    Id = ({
        type: t,
        html: e,
        css: u,
        isTailwind: s
    }) => {
        const n = Zn(t),
            r = s ? "import { LitElement, html } from 'lit';" : "import { LitElement, html, css } from 'lit';",
            i = !s && u ? Rd(u) : "",
            a = kd(e);
        return `${r}
import { customElement } from 'lit/decorators.js';

@customElement('my-${t}')
export class My${n} extends LitElement {${i}  render() {
    ${a}
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-${t}': My${n};
  }
}
`
    },
    Ld = ({
        type: t,
        html: e,
        css: u,
        isTailwind: s
    }) => {
        try {
            return Id({
                css: u,
                html: e,
                isTailwind: s,
                type: t
            })
        } catch {
            return "Something went wrong"
        }
    },
    _d = t => `<style>
${$e(t,2)}
</style>`,
    Md = ({
        html: t,
        css: e,
        isTailwind: u
    }) => {
        const s = t.trim(),
            n = e ? _d(e) : "";
        return u ? `${s}
` : `${s}

${n}
`
    },
    Od = ({
        html: t,
        css: e,
        isTailwind: u
    }) => {
        try {
            return Md({
                css: e,
                html: t,
                isTailwind: u
            })
        } catch {
            return "Something went wrong"
        }
    },
    Dd = t => `<style scoped>
${$e(t,2)}
</style>`,
    jd = ({
        html: t,
        css: e,
        isTailwind: u
    }) => {
        const s = $e(t.trim(), 2),
            n = e ? Dd(e) : "";
        return u ? `<template>
${s}
</template>
` : `${n}

<template>
${s}
</template>
`
    },
    qd = ({
        html: t,
        css: e,
        isTailwind: u
    }) => {
        try {
            return jd({
                css: e,
                html: t,
                isTailwind: u
            })
        } catch {
            return "Something went wrong"
        }
    },
    Ut = [{
        code: Ad,
        language: "jsx",
        icon: t => Jn(`${t} text-[#61DBFB]`),
        label: "React"
    }, {
        code: qd,
        language: "html",
        icon: Va,
        label: "Vue"
    }, {
        code: Od,
        language: "html",
        icon: Ba,
        label: "Svelte"
    }, {
        code: Ld,
        language: "jsx",
        icon: $a,
        label: "Lit"
    }],
    Fd = ({
        post: t,
        isOpen: e,
        onClose: u,
        activeTab: s,
        setActiveTab: n
    }) => {
        const [r, i] = E.useState(!1), a = s.code(t), {
            language: o,
            label: l
        } = s, h = () => navigator.clipboard.writeText(a).then(() => {
            i(!0), setTimeout(() => {
                i(!1)
            }, 1200)
        }).catch(p => {
            console.error(p), Vu.error("Failed to copy code to clipboard")
        });
        return c.jsxs(ru, {
            open: e,
            onClose: u,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            showCloseIcon: !0,
            classNames: {
                overlay: "customOverlay",
                modalContainer: "flex justify-center content-center flex-wrap",
                modal: "w-full flex flex-col max-w-[900px] max-h-full pt-4 rounded-xl overflow-hidden bg-dark-500"
            },
            children: [c.jsx("div", {
                className: "pr-8 min-h-12 flex items-center",
                children: t.isTailwind ? c.jsxs("div", {
                    className: "text-offwhite leading-relaxed text-sm",
                    children: ["This snippet is using", " ", c.jsxs("a", {
                        href: "https://tailwindcss.com/docs/guides/vite?ref=Uiverse.io",
                        target: "_blank",
                        rel: "noopener",
                        className: "text-offwhite underline underline-offset-2",
                        children: [Pa("w-5 h-5 inline-block mr-1 flex-shrink-0"), " Tailwind CSS"]
                    }), ". You need to have it set up in your project for this code to work."]
                }) : l === "React" ? c.jsxs("div", {
                    className: "text-offwhite leading-relaxed text-sm",
                    children: ["This snippet is using", " ", c.jsx("a", {
                        href: "https://styled-components.com?ref=Uiverse.io",
                        target: "_blank",
                        rel: "noopener",
                        className: "text-[#61DBFB] underline underline-offset-2 inline-flex items-center gap-2",
                        children: "styled-components"
                    }), ". Install it with", " ", c.jsx("code", {
                        className: "bg-dark-600 px-2 py-1 rounded whitespace-nowrap",
                        children: "npm i styled-components"
                    }), " ", "or", " ", c.jsx("code", {
                        className: "bg-dark-600 px-2 py-1 rounded whitespace-nowrap",
                        children: "yarn add styled-components"
                    }), ", or copy the styles to your own CSS file for this code to work."]
                }) : null
            }), c.jsx("div", {
                className: "relative mt-3 shrink-0 w-full flex flex-row overflow-x-auto",
                children: Ut.map(p => c.jsxs("button", {
                    className: `px-4 py-1 pl-3 max-w-[170px] w-full cursor-pointer font-sans text-base font-semibold text-gray-200 flex gap-2 items-center transition-colors rounded-b-none border-none rounded-md label hover:bg-[#1e1e1e] ${l===p.label?"bg-[#1e1e1e]":"bg-dark-700"}`,
                    onClick: () => n(p),
                    children: [p.icon("w-5 h-5"), " ", p.label]
                }, p.label))
            }), c.jsx("div", {
                className: "relative",
                children: c.jsxs("button", {
                    className: "copy-all absolute top-4 right-4",
                    onClick: h,
                    children: [Ua(), c.jsx("span", {
                        className: "copy-all__text",
                        children: r ? "✔" : "Copy"
                    })]
                })
            }), c.jsx("div", {
                className: "h-[500px] overflow-y-auto custom-scrollbar bg-[#1e1e1e] rounded-md rounded-tl-none",
                children: c.jsx(uo, {
                    value: a,
                    language: o,
                    className: `language-${o} editor`,
                    name: "code",
                    onChange: () => {},
                    readOnly: !0
                })
            })]
        })
    },
    Hd = ({
        postId: t,
        setIsOpen: e
    }) => {
        const u = iu();
        return E.useEffect(() => {
            u.data && e(!1)
        }, [u.state]), c.jsxs(u.Form, {
            action: "/resource/posts/figma-feedback",
            method: "post",
            className: "absolute bottom-[calc(100%_+_5px)] left-1/2 -translate-x-1/2 w-[200px] bg-dark-300 px-4 pt-4 pb-1 rounded-lg",
            children: [c.jsx("button", {
                type: "button",
                onClick: () => e(!1),
                className: "absolute top-1 right-1 p-1 cursor-pointer hover:bg-dark-500 transition-colors rounded-md",
                children: Ga("w-3 h-3 text-gray-400")
            }), c.jsx("p", {
                className: "text-xs text-center font-semibold",
                children: "Did you like the result?"
            }), c.jsx("input", {
                type: "hidden",
                name: "postId",
                value: t
            }), c.jsxs("div", {
                className: "flex gap-2 justify-center mt-1.5",
                children: [c.jsx("button", {
                    name: "feedback",
                    value: "like",
                    className: "w-[40px] h-[40px] hover:bg-dark-500 transition-colors flex items-center justify-center rounded-md",
                    children: Wa("w-5 h-5 text-green-400")
                }), c.jsx("button", {
                    name: "feedback",
                    value: "dislike",
                    className: "w-[40px] h-[40px] hover:bg-dark-500 transition-colors flex items-center justify-center rounded-md",
                    children: za("w-5 h-5 text-red-400")
                })]
            })]
        })
    },
    Vd = ({
        postId: t
    }) => {
        const e = iu(),
            {
                user: u
            } = Za(),
            [s, n] = E.useState(!1),
            [r, i] = E.useState(!1),
            a = e.state === "loading" || e.state === "submitting";
        E.useEffect(() => {
            e.data && !s && (n(!0), setTimeout(() => {
                n(!1), i(!0)
            }, 4e3))
        }, [e.state]);
        const o = E.useCallback(p => {
            const S = y => {
                var v;
                (v = y.clipboardData) == null || v.setData("text/html", p), y.preventDefault()
            };
            document.addEventListener("copy", S), document.execCommand("copy"), document.removeEventListener("copy", S)
        }, []);
        E.useEffect(() => {
            e.state === "idle" && e.data && o(e.data.figmaClipboard)
        }, [e, o]);
        const l = {
                default: {
                    opacity: 1
                },
                loading: {
                    opacity: 0,
                    y: "100%"
                },
                done: {
                    opacity: 0
                }
            },
            h = {
                default: {
                    opacity: 0,
                    y: 200,
                    x: "calc(-50%)"
                },
                loading: {
                    opacity: 1,
                    y: 50,
                    x: "calc(-50%)"
                },
                done: {
                    opacity: 1,
                    y: 0,
                    x: "calc(-50%)"
                }
            };
        return c.jsxs("div", {
            className: "relative z-30",
            children: [u ? c.jsxs(e.Form, {
                action: "/resource/posts/get-figma",
                method: "post",
                children: [c.jsx("input", {
                    type: "hidden",
                    name: "postId",
                    value: t
                }), c.jsxs("button", {
                    className: He(a || s ? "bg-dark-600" : "bg-transparent", "relative overflow-hidden z-[1] px-4 py-2.5 font-semibold font-sans flex items-center gap-2 text-sm hover:bg-dark-600 max-md:bg-dark-600 text-offwhite border-none rounded-lg"),
                    children: [c.jsxs(xu.div, {
                        variants: l,
                        animate: a ? "loading" : s ? "done" : "default",
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 350
                        },
                        className: "flex items-center gap-1.5",
                        children: [en("h-5 w-5"), "Copy to Figma"]
                    }), c.jsxs(xu.div, {
                        variants: h,
                        animate: a ? "loading" : s ? "done" : "default",
                        className: "absolute -z-10",
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 200
                        },
                        style: {
                            left: "50%",
                            transform: "translateY(200px)"
                        },
                        children: [c.jsx("div", {
                            className: He("w-[100px] h-[100px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg transition-colors", s ? "opacity-50" : "opacity-100")
                        }), c.jsx("div", {
                            className: "absolute -top-[8px] left-1/2 -translate-x-1/2",
                            children: Ka("w-5 h-5 animate-spin text-white")
                        }), c.jsx("div", {
                            className: "text-white absolute font-semibold top-[40px] left-1/2 -translate-x-1/2 z-[10]",
                            children: "Copied!"
                        })]
                    })]
                })]
            }) : c.jsxs(V, {
                type: "secondary",
                href: "?create-account",
                small: !0,
                children: [en("h-5 w-5"), "Copy to Figma"]
            }), r && c.jsx(xu.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .5
                },
                children: c.jsx(Hd, {
                    postId: t,
                    isOpen: r,
                    setIsOpen: i
                })
            })]
        })
    },
    Bd = ({
        isOpen: t,
        onReviewAlertModalClose: e,
        onClickUpdatePost: u
    }) => c.jsx(ru, {
        open: t,
        onClose: e,
        center: !0,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        showCloseIcon: !0,
        classNames: {
            overlay: "customOverlay",
            modal: "customModal bg-dark-700 text-white sm:px-20 p-4 py-14"
        },
        children: c.jsxs("div", {
            className: "",
            children: [c.jsx("div", {
                className: "text-2xl text-center font-bold pb-4",
                children: "Review Alert"
            }), c.jsx("p", {
                className: "text-center pb-3",
                children: "If you update this post, it will become a draft and will need to be reviewed again. Do you want to continue?"
            }), c.jsxs("div", {
                className: "flex items-center justify-center gap-3 mt-3",
                children: [c.jsx(V, {
                    type: "secondary",
                    onClick: () => e(),
                    children: "Cancel"
                }), c.jsx(V, {
                    type: "primary",
                    onClick: () => u(),
                    children: "Continue"
                })]
            })]
        })
    });

function $d({
    children: t,
    items: e,
    align: u = "left",
    className: s = ""
}) {
    const n = E.useRef(null),
        [r, i] = so(n, !1),
        a = () => i(!r);
    return c.jsxs("div", {
        className: He("relative"),
        children: [c.jsxs("button", {
            onClick: a,
            className: He("text-gray-100 font-semibold h-[40px] text-sm dropdown-trigger py-2 hover:bg-dark-600 rounded-lg flex items-center justify-center", r && "bg-dark-600", s),
            children: [t, Xa("w-4 h-4")]
        }), c.jsx("nav", {
            ref: n,
            className: He("rounded-lg absolute border-dark-600/80 border-2 top-[40px] right-0 translate-y-0 z-[1000] p-1 bg-dark-600 transition-all duration-500 ease shadow-xl", u === "left" && "left-0 right-[unset]", "bg-dark-600", r ? "opacity-100 visible translate-y-[5px]" : "opacity-0 invisible translate-y-[-20px]"),
            children: c.jsx("ul", {
                children: e.map(o => c.jsx("li", {
                    className: "text-gray-200",
                    onClick: () => i(!1),
                    children: o.value
                }, o.id))
            })
        })]
    })
}
const Pd = ({
    post: t,
    isCreator: e,
    isAllowedToEditTags: u,
    values: s,
    actions: n,
    isEditMode: r = !1,
    setSubmitModalOpen: i,
    setSubmitModalActivePage: a,
    user: o,
    favoriteCount: l,
    favoritesIds: h,
    onClickUpdate: p,
    isLoading: S,
    setDeleteModalOpen: y,
    deleteModalOpen: v,
    isCreatePage: T,
    originalPost: R,
    setIssuesModalOpen: _
}) => {
    var J, le, G, de, Se;
    const [F, $] = E.useState(!1), [U, j] = E.useState(!1), [O, P] = E.useState(Ut[0]), te = sr(s.html, s.css);
    return c.jsx(c.Fragment, {
        children: c.jsxs("div", {
            className: "items-stretch hidden p-2 mt-4 col-span-full bg-dark-500 rounded-xl md:block",
            children: [c.jsxs("div", {
                className: "flex flex-col md:flex-row items-stretch justify-between gap-2 h-full flex-wrap min-h-[40px]",
                children: [c.jsxs("div", {
                    className: "flex items-stretch gap-2 left",
                    children: [!T && c.jsxs("div", {
                        className: "flex items-center pl-3",
                        children: [t.viewCount > 0 ? Yn.format(t.viewCount) : 0, " ", "views"]
                    }), c.jsx(Xn, {
                        username: ((J = R == null ? void 0 : R.user) == null ? void 0 : J.username) || ((G = (le = t == null ? void 0 : t.originalPost) == null ? void 0 : le.user) == null ? void 0 : G.username),
                        friendlyId: ((de = t == null ? void 0 : t.originalPost) == null ? void 0 : de.friendlyId) || (R == null ? void 0 : R.friendlyId),
                        type: ((Se = t == null ? void 0 : t.originalPost) == null ? void 0 : Se.type) || (R == null ? void 0 : R.type)
                    }), !T && c.jsx(ur, {
                        isFavorite: h.includes(t.id),
                        postId: t.id,
                        isSignedIn: !!o,
                        favoriteCount: l
                    }), c.jsx("div", {
                        className: "w-[2px] h-full bg-dark-300"
                    }), t.hasFigmaClipboard && t.type !== A.post_type.pattern && c.jsx(Vd, {
                        postId: t.id
                    }), c.jsx("div", {
                        className: "flex flex-row",
                        children: !T && c.jsxs(c.Fragment, {
                            children: [c.jsxs(V, {
                                type: "secondary",
                                small: !0,
                                className: "relative rounded-r-none pr-2",
                                onClick: () => {
                                    P(Ut[0]), $(!0)
                                },
                                children: [Jn("h-5 w-5 text-[#61DBFB]"), "Export to React", c.jsx("div", {
                                    className: "absolute -bottom-2 right-3 text-[10px] text-green-400",
                                    children: "BETA"
                                })]
                            }), c.jsx($d, {
                                className: "rounded-l-none px-1",
                                items: Ut.map(ie => ({
                                    value: c.jsxs("div", {
                                        className: "flex items-center gap-2 p-2 cursor-pointer hover:bg-dark-700 rounded-[6px]",
                                        onClick: () => {
                                            P(ie), $(!0)
                                        },
                                        children: [ie.icon("w-5 h-5"), " ", ie.label]
                                    }),
                                    id: ie.label
                                })),
                                align: "right"
                            }), c.jsx(Fd, {
                                post: t,
                                isOpen: F,
                                onClose: () => $(!1),
                                activeTab: O,
                                setActiveTab: P
                            })]
                        })
                    }), u && c.jsx(V, {
                        href: "?preview=full",
                        type: "secondary",
                        children: Ja("h-5 w-5")
                    }), e && !T && c.jsxs(c.Fragment, {
                        children: [c.jsx(V, {
                            type: "secondary",
                            onClick: () => y(!0),
                            small: !0,
                            children: hs("h-5 w-5 text-gray-400")
                        }), c.jsx("div", {
                            className: "w-[2px] h-full bg-dark-300"
                        }), c.jsx("div", {
                            className: "h-full max-md:hidden",
                            children: c.jsx(lo, {
                                isEditMode: s.isEditMode,
                                setIsEditMode: n.setIsEditMode
                            })
                        }), c.jsx(er, {
                            isOpen: v,
                            onDeleteModalClose: () => y(!1),
                            post: t
                        }), c.jsx(Bd, {
                            isOpen: U,
                            onReviewAlertModalClose: () => j(!1),
                            onClickUpdatePost: async () => {
                                await p(t.status === "review" ? "review" : "draft"), j(!1)
                            }
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "flex items-stretch gap-2",
                    children: [e && s.issues.length > 0 && c.jsxs(V, {
                        type: "secondary",
                        className: "text-red-400 whitespace-nowrap",
                        onClick: () => _(!0),
                        small: !0,
                        children: [s.issues.length, s.issues.length === 1 ? " issue" : " issues"]
                    }), (o == null ? void 0 : o.subscription) && !s.isTailwind && c.jsxs(c.Fragment, {
                        children: [c.jsx(tr, {
                            post: t,
                            values: s,
                            actions: n
                        }), c.jsx("div", {
                            className: "w-[2px] h-full bg-dark-300"
                        })]
                    }), s.hasChanged && t.status === A.post_status.approved && o && !T ? c.jsxs(Qn, {
                        method: "post",
                        action: "/resource/posts/save-variation",
                        children: [c.jsx("input", {
                            type: "hidden",
                            name: "postId",
                            value: t.id
                        }), c.jsx("input", {
                            type: "hidden",
                            name: "css",
                            value: s.css
                        }), c.jsx("input", {
                            type: "hidden",
                            name: "html",
                            value: s.html
                        }), c.jsxs(V, {
                            type: "primary",
                            className: "max-md:hidden whitespace-nowrap",
                            small: !0,
                            disabled: !te.isValid,
                            children: [Bu("h-5 w-5"), " Save as a new variation"]
                        })]
                    }) : c.jsx(c.Fragment, {
                        children: o && !r && !T && !t.originalPostId && c.jsxs(V, {
                            type: "secondary",
                            className: "max-md:hidden whitespace-nowrap flex",
                            href: `/create?originalPostId=${t.id}`,
                            small: !0,
                            children: [Bu("h-5 w-5"), " New variation"]
                        })
                    }), !T && c.jsxs(c.Fragment, {
                        children: [(o == null ? void 0 : o.role) === A.user_role.admin && c.jsx(V, {
                            type: "secondary",
                            onClick: () => p("previous"),
                            small: !0,
                            children: Gt("h-5 w-5")
                        }), u && c.jsxs(V, {
                            type: "primary",
                            onClick: () => {
                                t.status === "approved" ? j(!0) : p(t.status === "review" ? "review" : "draft")
                            },
                            small: !0,
                            disabled: !te.isValid || S,
                            children: [Gt(`h-5 w-5 ${S&&"loading-icon"}`), " Update"]
                        })]
                    }), T && c.jsx(c.Fragment, {
                        children: o ? c.jsxs(V, {
                            type: "secondary",
                            className: "whitespace-nowrap",
                            onClick: () => p("draft"),
                            disabled: !te.isValid,
                            children: [Ya("w-5 h-5"), " Save as a draft"]
                        }) : c.jsx(V, {
                            type: "secondary",
                            href: "?create-account",
                            className: "whitespace-nowrap",
                            children: "Sign in or Create Account"
                        })
                    }), o && (t == null ? void 0 : t.status) === "draft" && c.jsx(c.Fragment, {
                        children: c.jsxs(V, {
                            type: "primary",
                            onClick: () => {
                                i(!0), a(0)
                            },
                            className: "text-white bg-green-600 hover:bg-green-700 whitespace-nowrap",
                            small: !0,
                            disabled: !te.isValid,
                            children: [ds("h-5 w-5"), " Submit for review"]
                        })
                    })]
                })]
            }), !te.isValid && c.jsx(nr, {
                validation: te
            })]
        })
    })
};

function Ud(t) {
    E.useEffect(() => {
        const e = u => {
            u.ctrlKey && u.key === "s" && (u.preventDefault(), t())
        };
        return typeof window < "u" && document.addEventListener("keydown", e), () => {
            typeof window < "u" && document.removeEventListener("keydown", e)
        }
    }, [t])
}

function Gd({
    actions: t,
    values: e,
    formData: u,
    fetcher: s,
    post: n
}) {
    const r = () => {
            t.setCurrentlyAutosaving(!0), s.submit({ ...u,
                currentStatus: n.status,
                autosave: !0,
                status: n.status,
                action: "update"
            }, {
                method: "post"
            })
        },
        i = E.useRef(void 0),
        a = () => {
            clearTimeout(i.current)
        };
    return E.useEffect(() => {
        if (!e.isAutoSaving) return;
        const {
            hasChanged: o
        } = u;
        if (o !== "true") {
            a();
            return
        }
        return i.current = setTimeout(() => {
            r()
        }, 3e3), a
    }, [u.css, u.html, u.theme, u.backgroundColor, u.hasChanged]), E.useEffect(() => {
        e.isAutoSaving || a()
    }, [e.isAutoSaving]), {
        clearDraftTimeout: a
    }
}
const Th = t => {
    var te;
    const {
        post: e,
        formData: u,
        setIssuesModalOpen: s,
        issueCount: n,
        isCreator: r,
        values: i,
        actions: a,
        isSubmitModalOpen: o,
        setSubmitModalOpen: l,
        isCreatePage: h,
        user: p,
        type: S,
        challenge: y
    } = t, v = iu(), T = Qa(), R = (te = e == null ? void 0 : e._count) == null ? void 0 : te.user_favorite_post, _ = (J, le = "") => {
        v.submit({
            postId: e.id,
            action: J ? "approve" : "reject",
            comment: le
        }, {
            method: "post"
        })
    }, [F, $] = E.useState(!1);
    Ud(() => {
        U()
    }), E.useEffect(() => {
        var J;
        if (v.state === "idle" && v.data) {
            if ((J = v.data) != null && J.error) return;
            "autosave" in v.data ? Vu("Post autosaved!", {
                icon: "📝"
            }) : Vu("Post saved!", {
                icon: "✅"
            })
        }
    }, [v]);
    const U = J => {
            v.submit({ ...u,
                ...h ? {
                    challengeId: (y == null ? void 0 : y.id) || "",
                    type: S
                } : {
                    action: "update",
                    currentStatus: e.status
                },
                status: J || e.status === A.post_status.review ? J : A.post_status.draft
            }, {
                method: "post"
            }), a.setCurrentlyAutosaving(!1), O()
        },
        j = J => {
            l(!1), U(J)
        },
        {
            clearDraftTimeout: O
        } = Gd({
            actions: a,
            values: i,
            formData: u,
            fetcher: v,
            post: e
        }),
        P = v.state === "submitting" || v.state === "loading";
    return c.jsxs(c.Fragment, {
        children: [c.jsx(Pd, { ...t,
            favoritesIds: T,
            favoriteCount: R,
            isLoading: P,
            onClickUpdate: j,
            deleteModalOpen: F,
            setDeleteModalOpen: $
        }), c.jsx(co, { ...t,
            favoritesIds: T,
            favoriteCount: R,
            isLoading: P,
            onClickUpdate: j,
            deleteModalOpen: F,
            setDeleteModalOpen: $
        }), (e.status === A.post_status.needs_work || e.status === A.post_status.review) && ((p == null ? void 0 : p.role) === A.user_role.admin || (p == null ? void 0 : p.role) === A.user_role.moderator) && c.jsx("div", {
            className: "admin-controls",
            children: c.jsx("div", {
                className: "review-controls",
                children: c.jsx(La, {
                    onReview: _,
                    comment: e.comment,
                    status: e.status,
                    isAdmin: (p == null ? void 0 : p.role) === A.user_role.admin
                })
            })
        }), r && c.jsx(oo, {
            isOpen: o,
            onClose: () => l(!1),
            post: e,
            issueCount: n,
            setIssuesModalOpen: s,
            onClickUpdate: j,
            values: i,
            actions: a,
            isLoading: P,
            startPage: 0,
            allowToChangeSource: !e.originalPostId
        })]
    })
};
export {
    Th as C, oh as u
};