import {
    j as e,
    r as d
} from "./jsx-runtime-Dvja6b4T.js";
import {
    M as A
} from "./react-responsive-modal.esm-OAwj2qzB.js";
import {
    aa as I,
    aN as L,
    aO as P,
    r as M,
    ad as R,
    W as H,
    Z as k,
    aP as $,
    L as _,
    aQ as O,
    aR as G,
    a9 as F,
    R as B,
    aS as v,
    af as D,
    an as W,
    u as z
} from "./icons-pNqq09c6.js";
import {
    L as w,
    g as U
} from "./components-BuvoIJIj.js";
import {
    L as b,
    g as V
} from "./constants-nXafxhpt.js";
import {
    k as q,
    e as Y,
    p as Q,
    c as S
} from "./utils-OWsBmDA3.js";
import {
    S as J
} from "./ShadowRootDiv-CnNJ_Y3i.js";
import {
    i as y
} from "./index-browser-CJEdsfDC.js";
import {
    u as X
} from "./useCustomCSS-CEehwEIH.js";
import {
    B as j
} from "./badge-C49ifptK.js";
import {
    T as Z,
    a as K,
    b as ee
} from "./tooltip-CeFBy-g5.js";
import {
    C
} from "./CustomTooltip-J09bHzyh.js";
import {
    B as te
} from "./Button-CFIJCp_o.js";
import {
    C as se,
    H as ne
} from "./editors-Dq4Fjxe9.js";
import {
    u as oe
} from "./useWindowSize-BGWPyh8W.js";
import {
    s as re,
    a as ae,
    l as ie
} from "./functions-C_ILNh5F.js";
import {
    d as le
} from "./debounce-Dr8Vn2AE.js";
import {
    m as ce
} from "./motion-CMzn_ctr.js";
const de = ({
        isOpen: t,
        onClose: n,
        issues: s
    }) => e.jsx(A, {
        open: t,
        onClose: n,
        center: !0,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        showCloseIcon: !0,
        classNames: {
            overlay: "customOverlay",
            modal: "max-w-[600px] w-full rounded-3xl overflow-hidden border-2 border-dark-600/80 p-16 bg-dark-700"
        },
        children: e.jsxs("div", {
            className: "leading-6 text-base text-gray-200",
            children: [e.jsx("span", {
                className: "block text-2xl font-bold pb-2.5",
                children: "Issues"
            }), e.jsx("p", {
                className: "pb-4",
                children: "There are some issues with your code. You can still submit the post but the chances of it being approved will be lower."
            }), e.jsx("hr", {
                className: "bg-dark-600 h-0.5 border-none"
            }), e.jsx("div", {
                className: "mt-5",
                children: s.map(o => e.jsxs("div", {
                    className: "mb-4 rounded-lg",
                    children: [e.jsxs("span", {
                        className: "flex align-center text-lg font-semibold pb-2",
                        children: [I("text-red-500 w-[25px] h-[25px] mr-1"), " ", o.title]
                    }), e.jsx("p", {
                        className: "pl-7",
                        dangerouslySetInnerHTML: {
                            __html: o.description
                        }
                    })]
                }, o.id))
            }), e.jsx("div", {
                className: "w-full flex justify-end align-center mt-2",
                children: e.jsx(w, {
                    to: "/guidelines",
                    target: "_blank",
                    className: "transition text-offwhite mt-1 font-bold underline hover:text-indigo-400",
                    children: "Check Post Guidelines"
                })
            })]
        })
    }),
    Ve = de,
    me = /^\*.*|^body.*|^div.*|^span.*|^input.*|^svg.*|^input.*|^p.*|^html.*/m,
    he = /<h1|<h2|<h3|<h4|<h5|<h6/,
    xe = /@import|https:|http:|url/,
    pe = /\d+vw|vh/,
    ue = /<img|src="https:|src="http:/,
    N = {
        globalSelectors: {
            id: "globalSelectors",
            title: "Global selectors",
            description: 'All selectors should be scoped to a class name that is specific to your post. We want to avoid global selectors to not make unintended style changes when someone uses your element on their website. <br />Examples: <code class="bg-dark-900 text-gray-200 py-1 px-1.5 rounded-lg mt-2 inline-block">* {}, body {}, div {}, span {}, input {}</code>',
            language: b.CSS,
            test: t => me.test(t)
        },
        externalImages: {
            id: "externalImages",
            title: "External images",
            description: 'Importing any external images is not allowed. <br /> Examples: <code class="bg-dark-900 text-offwhite py-1 px-1.5 rounded-lg mt-2 inline-block">src="https://website.com/image.png"></code>',
            language: b.HTML,
            test: t => ue.test(t)
        },
        externalImports: {
            id: "externalImports",
            title: "External imports",
            description: 'Importing any external fonts or files is not allowed. <br /> Examples: <code class="bg-dark-900 text-offwhite py-1 px-1.5 rounded-lg mt-2 inline-block">@import</code>',
            language: b.CSS,
            test: t => xe.test(t)
        },
        headings: {
            id: "headings",
            title: "Headings",
            description: `The use of headings is not allowed because they change the structure and hierarchy of the website's content which may result in unintended errors.<br /> Examples: <code class="bg-dark-900 text-offwhite py-1 px-1.5 rounded-lg mt-2 inline-block">&lt;h1&gt; &lt;h2&gt; &lt;h3&gt;</code>`,
            language: b.HTML,
            test: t => he.test(t)
        },
        units: {
            id: "units",
            title: "Units not allowed",
            description: 'The use of units <code>wv</code> and <code class="bg-dark-900 text-offwhite py-1 px-1.5 rounded-lg mt-2 inline-block">wh</code> is not allowed.',
            language: b.CSS,
            test: t => pe.test(t)
        }
    },
    qe = (t, n) => {
        const s = [];
        return Object.keys(N).forEach(o => {
            const r = N[o];
            r.test(r.language === b.HTML ? n : t) && s.push(r)
        }), s
    },
    fe = ({
        challenge: t,
        creating: n = !1,
        type: s
    }) => t != null && t.id ? e.jsxs("div", {
        className: "flex items-center gap-3 px-4 py-3 mb-3 text-sm font-semibold rounded-xl bg-dark-600",
        children: [e.jsx("img", {
            src: t.image_url,
            alt: "",
            className: "w-8 h-8 rounded-md"
        }), e.jsx("span", {
            className: "text",
            children: n ? e.jsxs(e.Fragment, {
                children: ["You're creating a ", s, " for", " ", e.jsx(w, {
                    to: `/challenges/${t.id}`,
                    className: "underline text-fuchsia-400 underline-offset-2",
                    children: t.name
                })]
            }) : e.jsxs(e.Fragment, {
                children: ["This ", s, " was created for", " ", e.jsx(w, {
                    to: `/challenges/${t.id}`,
                    className: "underline underline-offset-2 text-fuchsia-400",
                    children: t.name
                })]
            })
        })]
    }) : null,
    T = ({
        onChange: t,
        checked: n,
        backgroundColor: s,
        setBackgroundColor: o,
        showColorSelector: r
    }) => {
        const c = a => {
            t(a), o("")
        };
        return e.jsxs("div", {
            className: "p-4 flex items-center border-none gap-3 absolute top-0 right-0 z-10",
            children: [e.jsx("span", {
                className: "font-semibold border-none",
                style: {
                    color: q(s || (n ? "#e8e8e8" : "#212121"))
                },
                children: s || (n ? "#e8e8e8" : "#212121")
            }), e.jsxs("label", {
                className: "block custom-switch cursor-pointer outline-none border-none",
                htmlFor: "theme-switch",
                children: [e.jsx("div", {
                    className: "moon",
                    children: L("w-[20px] h-[20px] text-gray-500 border-none")
                }), e.jsx("div", {
                    className: "sun",
                    children: P("w-[19px] h-[19px] text-offwhite border-none")
                }), e.jsx("input", {
                    type: "checkbox",
                    id: "theme-switch",
                    className: "input absolute translate-x-[1000px] outline-none border-none",
                    onChange: c,
                    checked: n
                }), e.jsx("div", {
                    className: "slider border-none"
                })]
            }), r && e.jsx("label", {
                htmlFor: "color5123123",
                style: {
                    backgroundColor: s || (n ? "#e8e8e8" : "#212121")
                },
                className: "border-gray-300 border-[3px] border-solid w-[30px] h-[30px] rounded-md block  cursor-pointer",
                children: e.jsx("input", {
                    type: "color",
                    name: "color",
                    id: "color5123123",
                    value: s || (n ? "#e8e8e8" : "#212121"),
                    onChange: a => o(a.target.value),
                    onInput: a => o(a.target.value),
                    className: "w-0 h-0 opacity-0 translate-y-6 border-none"
                })
            })]
        })
    },
    ge = ({
        values: t,
        actions: n,
        post: s
    }) => {
        var c;
        const o = t.backgroundColor ? {
                backgroundColor: t.backgroundColor
            } : {},
            r = ((c = s.challenge) == null ? void 0 : c.customCSS) || "";
        return X(r), e.jsxs("div", {
            className: `flex flex-1 absolute w-full left-0 top-0 ${s.type!==y.post_type.pattern&&"py-10"} h-full font-sans border-none ${t.backgroundColor?"":t.isLight?"bg-[#e8e8e8]":"bg-dark-600"}`,
            style: o,
            children: [e.jsx("div", {
                className: "flex h-full w-full text-black border-none preview-container",
                children: e.jsx(J, {
                    css: r + t.css,
                    html: t.html,
                    globalReset: V,
                    postType: s.type
                })
            }), s.type !== y.post_type.pattern && e.jsx(T, {
                onChange: () => n.setIsLight(a => !a),
                checked: t.isLight,
                backgroundColor: t.backgroundColor,
                setBackgroundColor: n.setBackgroundColor,
                showColorSelector: !0
            })]
        })
    },
    be = {
        draft: {
            tooltip: "This post is saved as a draft.",
            className: "text-blue-400",
            icon: R("w-5 h-5 flex-none")
        },
        review: {
            tooltip: "This post is waiting to be reviewed.",
            className: "text-yellow-400",
            icon: H("w-5 h-5 text-yellow-400 flex-none")
        },
        saved: {
            tooltip: "This post is saved from your AI experiment",
            className: "text-fuchsia-400",
            icon: k("w-5 h-5 flex-none")
        },
        none: {
            tooltip: "This post is saved in case you want to use it. It is not public.",
            className: "text-slate-400",
            icon: $("w-5 h-5 flex-none")
        },
        needs_work: {
            className: "text-offwhite",
            icon: _("w-5 h-5 flex-none"),
            tooltip: "This post has been rejected and needs improvements.",
            text: e.jsxs("span", {
                children: ["This post has been rejected. Try to read the", " ", e.jsxs(w, {
                    to: "/guidelines",
                    target: "_blank",
                    className: "inline-flex items-baseline gap-0.5 text-offwhite underline",
                    children: [O("h-4 w-4 translate-y-0.5 flex-none"), "guidelines"]
                }), " ", "and see if it can be improved."]
            })
        }
    },
    we = ({
        post: t
    }) => {
        if (!t || t.status === "approved") return null;
        const n = be[t.status];
        return n ? e.jsxs("div", {
            className: "flex gap-3 items-center",
            children: [t.reviewStats && e.jsxs("div", {
                className: "flex items-center gap-1",
                children: [e.jsx("div", {
                    className: "text-sm text-gray-400 mr-1",
                    children: "Community reviews"
                }), e.jsx(C, {
                    trigger: e.jsx("div", {
                        children: e.jsx(j, {
                            variant: "success",
                            className: "cursor-default min-w-[30px] justify-center",
                            children: t.reviewStats.communityApprovalsCount
                        })
                    }),
                    contentProps: {
                        side: "bottom"
                    },
                    children: e.jsxs("div", {
                        children: [t.reviewStats.communityApprovalsCount, " community member", t.reviewStats.communityApprovalsCount !== 1 ? "s" : "", " ", "approved this post"]
                    })
                }), e.jsx(C, {
                    trigger: e.jsx("div", {
                        children: e.jsx(j, {
                            variant: "destructive",
                            className: "cursor-default min-w-[30px] justify-center",
                            children: t.reviewStats.communityRejectionsCount
                        })
                    }),
                    contentProps: {
                        side: "bottom"
                    },
                    children: e.jsxs("div", {
                        children: [t.reviewStats.communityRejectionsCount, " community member", t.reviewStats.communityRejectionsCount !== 1 ? "s" : "", " ", "rejected this post"]
                    })
                })]
            }), e.jsxs(Z, {
                children: [e.jsx(K, {
                    children: e.jsx(j, {
                        status: t.status,
                        children: Y(t.status.replace("_", " "))
                    })
                }), e.jsx(ee, {
                    side: "bottom",
                    children: e.jsx("p", {
                        children: n.tooltip
                    })
                })]
            }), t.status === "needs_work" && t.comment && e.jsxs("div", {
                className: "py-2 pr-2 max-w-max text-sm flex items-start gap-1.5 text-offwhite",
                children: [M("w-5 h-5 flex-none"), e.jsx("p", {
                    children: t.comment
                })]
            })]
        }) : null
    },
    ye = ({
        values: t,
        actions: n,
        post: s
    }) => {
        var h;
        const [o, r] = d.useState(!1), c = d.useRef(null), a = ((h = s.challenge) == null ? void 0 : h.customCSS) || "";
        d.useEffect(() => (r(!0), () => r(!1)), []), d.useEffect(() => {
            const p = m => {
                m.origin === "null" && n.setCss(m.data)
            };
            return window.addEventListener("message", p), () => window.removeEventListener("message", p)
        }, []);
        const l = "https://uiverse.io";
        d.useEffect(() => {
            o && setTimeout(() => {
                var f;
                if (!c.current) return;
                const m = c.current,
                    x = m.contentDocument || ((f = m.contentWindow) == null ? void 0 : f.document);
                if (!x) return;
                const g = `
        <!DOCTYPE html>
        <html style="height:100%">
          <head>
            <meta charset="utf-8">
            <script>console.warn = () => {};<\/script>
            <script>
              window.onload = function() {
                var head = document.querySelector('head');
                var styleTag = document.querySelector('head style:not([data-custom-challenge-css])');
                if (styleTag) {
                  window.parent.postMessage(styleTag.innerHTML, "${l}");
                }
              };

              let post_type = {
                loader: "loader",
                pattern: "pattern",
              };

              const preventNavigation = ${Q.toString()}

              document.addEventListener('click', e => preventNavigation(e, ${t.postType}));
            <\/script>
            <script src="https://cdn.tailwindcss.com"><\/script>
            <style data-custom-challenge-css>${a}</style>
          </head>
          <body style="display:flex;align-items:center;justify-content:center;height:100%;" class="preview-container">
            ${t.html}
          </body>
        </html>
      `;
                x.open(), x.write(g), x.close()
            }, 0)
        }, [t, o, a, l]);
        const u = t.backgroundColor ? {
                backgroundColor: t.backgroundColor
            } : void 0,
            i = `flex flex-1 absolute w-full left-0 top-0 py-10 h-full font-sans ${t.backgroundColor?"":t.isLight?"bg-[#e8e8e8]":"bg-dark-600"}`;
        return e.jsxs("div", {
            className: i,
            style: u,
            children: [e.jsx("div", {
                className: "flex h-full w-full text-black relative z-[1]",
                children: e.jsx("iframe", {
                    title: "Preview Content",
                    src: "about:blank",
                    style: {
                        border: "none"
                    },
                    ref: c,
                    width: "100%",
                    height: "100%",
                    sandbox: "allow-scripts allow-same-origin allow-modals"
                }, `${t.isTailwind}-${t.html}`)
            }), e.jsx(T, {
                onChange: () => n.setIsLight(p => !p),
                checked: t.isLight,
                backgroundColor: t.backgroundColor,
                setBackgroundColor: n.setBackgroundColor,
                showColorSelector: !0
            })]
        })
    },
    Ye = ({
        post: t,
        actions: n,
        values: s,
        user: o,
        isAllowedToEditTags: r
    }) => {
        const c = d.useRef(null);
        return e.jsxs("div", {
            ref: c,
            className: S("flex relative md:min-w-[330px] max-md:min-h-[450px] max-md:w-full h-[calc(100vh-140px)] md:h-auto", s.isEditMode ? "min-h-0" : "md:min-h-[100px]"),
            style: {
                flex: "0 0 auto",
                width: "50%"
            },
            children: [e.jsx("div", {
                className: "absolute hidden md:block w-[5px] h-full bg-dark-300 top-0 right-0 z-10"
            }), !s.isEditMode && e.jsx(we, {
                post: t
            }), !s.isEditMode && t.challenge && e.jsx(fe, {
                challenge: t.challenge,
                type: t.type,
                creating: !1
            }), s.isTailwind ? e.jsx(ye, {
                post: t,
                values: s,
                actions: n,
                isAllowedToEditTags: r,
                user: o
            }, `iframe-${t.id}-${s.isTailwind}`) : e.jsx(ge, {
                post: t,
                values: s,
                actions: n,
                user: o,
                isAllowedToEditTags: r
            }, t.id)]
        })
    },
    je = ({
        text: t,
        language: n,
        user: s,
        isFancyEditor: o = !1
    }) => {
        const [r, c] = d.useState(!1), a = () => {
            c(!0), setTimeout(() => {
                c(!1)
            }, 1200);
            const l = n === "HTML" ? `<!-- From Uiverse.io by ${s.username} --> 
` + t : `/* From Uiverse.io by ${s.username} */ 
` + t;
            navigator.clipboard.writeText(l)
        };
        return e.jsxs("button", {
            className: `copy-all ${n} ${o&&"fancy"}`,
            onClick: a,
            children: [G(), e.jsx("span", {
                className: "copy-all__text",
                children: r ? "✔" : "Copy"
            })]
        })
    },
    ve = ({
        prefixedCss: t,
        setIsPrefixed: n,
        isPrefixed: s
    }) => t ? e.jsxs("label", {
        htmlFor: "prefixed",
        className: "toggle-checkbox cursor-pointer",
        children: [e.jsx("span", {
            className: "label text-gray-400 font-mono font-normal",
            children: "Toggle prefixes"
        }), e.jsxs("label", {
            className: "checkbox-container text-xs",
            children: [e.jsx("input", {
                type: "checkbox",
                name: "prefixed",
                id: "prefixed",
                checked: s,
                onChange: () => n(o => !o)
            }), e.jsx("div", {
                className: "checkmark"
            })]
        })]
    }) : e.jsx("div", {}),
    Ce = ({
        postId: t,
        generationPrompt: n,
        css: s,
        html: o,
        isTailwind: r
    }) => fetch("/resource/ai/generate", {
        method: "POST",
        body: JSON.stringify({
            postId: t,
            generationPrompt: n,
            css: s,
            html: o,
            isTailwind: r
        })
    }),
    Ne = async ({
        response: t,
        onChunkProcessed: n,
        setActiveTab: s,
        isTailwind: o = !1
    }) => {
        const r = new TextDecoderStream,
            c = t.body.pipeThrough(r).getReader();
        let a = {
                css: "",
                html: "",
                finishReason: ""
            },
            l = "",
            u = "";
        const i = le(n, 250);
        try {
            for await (const h of re(c)) {
                const p = h.choices[0].delta.content;
                if (p) {
                    if (l += p, u += p, l.includes("```json")) {
                        const m = l.indexOf("```json") + 7;
                        l = l.substring(m)
                    }
                    try {
                        const m = ae.parse(l);
                        i({
                            css: m.css || "",
                            html: m.html || "",
                            finishReason: m.finishReason || ""
                        })
                    } catch {}
                }
            }
        } catch (h) {
            console.error("An error occurred while reading the stream:", h)
        }
        return i.flush(), [{
            css: a.css,
            html: a.html,
            finishReason: a.finishReason
        }]
    },
    ke = t => {
        const [n, s] = d.useState(0), [o, r] = d.useState(!1), c = U();
        ie(i => {
            o && i.preventDefault()
        });
        const [a, l] = d.useState({});
        return {
            progress: n,
            isLoading: o,
            startGenerating: async ({
                css: i,
                html: h,
                prompt: p,
                postId: m = "",
                isTailwind: x = !1
            }) => {
                r(!0);
                const g = await Ce({
                    postId: m,
                    generationPrompt: p,
                    css: i,
                    html: h,
                    isTailwind: x
                });
                if (!g) return;
                const f = g.headers.get("X-Ai-Generation-Query-Id"),
                    E = await Ne({
                        response: g,
                        onChunkProcessed: l,
                        setActiveTab: t,
                        isTailwind: x
                    });
                c.submit({
                    generationQueryId: f,
                    result: E
                }, {
                    method: "post",
                    action: "/resource/ai/save-generation"
                }), s(100), r(!1)
            },
            codeStrings: a
        }
    },
    Se = ({
        postId: t,
        actions: n,
        values: s,
        setActiveTab: o = () => {},
        scrollToBottom: r
    }) => {
        const [c, a] = d.useState(""), l = d.useRef(null), {
            startGenerating: u,
            codeStrings: i,
            isLoading: h
        } = ke(o);
        d.useEffect(() => {
            (i.css || i.html) && (n.setCss((i == null ? void 0 : i.css) || ""), n.setHtml((i == null ? void 0 : i.html) || ""), r())
        }, [i]), d.useEffect(() => {
            s.isAiPromptOpen && setTimeout(() => {
                var x;
                (x = l == null ? void 0 : l.current) == null || x.focus()
            }, 150)
        }, [s.isAiPromptOpen]);
        const p = {
                open: {
                    opacity: 1,
                    y: "calc(-50%)",
                    x: "calc(-50%)"
                },
                closed: {
                    opacity: 0,
                    y: "100%",
                    x: "calc(-50%)"
                }
            },
            m = async x => {
                x.preventDefault(), c && u({
                    prompt: c,
                    css: s.css,
                    html: s.html,
                    isTailwind: s.isTailwind,
                    postId: t
                }).then(() => {
                    n.setAiPromptOpen(!1), a("")
                })
            };
        return e.jsx(ce.div, {
            variants: p,
            initial: "closed",
            animate: s.isAiPromptOpen ? "open" : "closed",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 350
            },
            className: "absolute z-20 bottom-0 max-w-[400px] w-full shadow-xl rounded-full",
            style: {
                left: "50%"
            },
            children: e.jsxs("form", {
                className: "flex mx-auto",
                onSubmit: m,
                children: [e.jsx("input", {
                    type: "text",
                    value: c,
                    name: "prompt",
                    id: "prompt",
                    ref: l,
                    disabled: h,
                    placeholder: "Write instructions...",
                    className: "block w-full font-sans font-normal placeholder:text-gray-400 px-6 py-3 pr-2 mr-px text-base border-none shadow-sm rounded-s-full bg-dark-500 focus:ring-sky-500 focus:border-sky-500 text-offwhite disabled:text-gray-400 disabled:opacity-90",
                    onChange: x => a(x.target.value)
                }), e.jsx("input", {
                    type: "hidden",
                    name: "css",
                    value: s.css
                }), e.jsx("input", {
                    type: "hidden",
                    name: "html",
                    value: s.html
                }), e.jsxs("button", {
                    type: "submit",
                    disabled: h,
                    className: "flex items-center px-3 py-1.5 pr-6 text-base gap-1.5 font-sans font-semibold transition-colors border-none cursor-pointer disabled:text-gray-400 disabled:opacity-90 bg-dark-600 hover:bg-dark-800 rounded-e-full pointer text-offwhite",
                    children: [h ? F("w-5 h-5 animate-spin text-fuchsia-400") : k("w-5 h-5 text-fuchsia-400"), " ", e.jsx("span", {
                        children: h ? "Generating" : "Generate"
                    })]
                })]
            })
        })
    },
    Te = ({
        setIsAutoSaving: t,
        isAutoSaving: n
    }) => e.jsxs("label", {
        htmlFor: "autosave",
        className: "toggle-checkbox cursor-pointer",
        children: [e.jsx("span", {
            className: "label text-gray-400 font-mono font-normal",
            children: "Toggle auto saving"
        }), e.jsxs("label", {
            className: "checkbox-container text-xs",
            children: [e.jsx("input", {
                type: "checkbox",
                name: "autosave",
                id: "autosave",
                checked: n,
                onChange: () => t(s => !s)
            }), e.jsx("div", {
                className: "checkmark"
            })]
        })]
    }),
    Qe = ({
        post: t,
        actions: n,
        values: s,
        user: o,
        readOnly: r = !1,
        isFancy: c = !1
    }) => {
        var g;
        const a = oe(),
            [l, u] = d.useState(!0),
            [i, h] = d.useState("css"),
            p = d.useRef(null);
        d.useEffect(() => {
            (a == null ? void 0 : a.width) < 768 && u(!1)
        }, [a]);
        const m = () => {
            const f = p.current;
            f.scrollTop = f.scrollHeight
        };
        d.useEffect(() => {
            u(!0)
        }, [i]);
        const x = ((g = t.challenge) == null ? void 0 : g.isHtmlLocked) || t.type === y.post_type.pattern;
        return e.jsxs("div", {
            className: S("relative max-w-full overflow-hidden flex flex-col", "md:h-full", l ? "h-[600px]" : "h-[240px]"),
            style: {
                flex: "1 1 0%"
            },
            children: [e.jsx(Se, {
                postId: t.id,
                actions: n,
                values: s,
                setActiveTab: h,
                scrollToBottom: () => m()
            }), !l && e.jsx("div", {
                className: "absolute z-50 w-full h-[200px] top-[40px] bg-gradient-to-t from-dark-700 to-[#17171742]",
                children: e.jsx(te, {
                    type: "secondary-with-bg",
                    className: "absolute -translate-x-1/2 left-1/2 bottom-16 whitespace-nowrap bg-dark-400",
                    onClick: () => u(!0),
                    icon: B(),
                    children: "Expand code"
                })
            }), e.jsx("div", {
                className: "flex items-center px-4 pt-2 bg-dark-500",
                children: s.isTailwind ? e.jsx("div", {
                    children: e.jsxs("span", {
                        className: "flex items-center gap-1 py-1 pl-2 font-sans text-base font-semibold",
                        children: [v("text-[#e74d4d] w-5 h-5"), " HTML", " ", s.isTailwind ? e.jsxs(e.Fragment, {
                            children: [e.jsx("span", {
                                className: "px-1",
                                children: "+"
                            }), D("h-6 w-6 mr-1"), "TailwindCSS"]
                        }) : null]
                    })
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("button", {
                        className: `px-4 py-1 pl-3 max-w-[170px] w-full cursor-pointer font-sans text-base font-semibold text-gray-200 flex gap-2 items-center transition-colors rounded-b-none border-none rounded-md label hover:bg-[#1e1e1e] ${i==="html"?"bg-[#1e1e1e]":"bg-dark-700"}`,
                        onClick: () => h("html"),
                        children: [v("text-[#e74d4d] w-5 h-5"), " HTML"]
                    }), e.jsxs("button", {
                        className: `px-4 py-1 pl-3 max-w-[170px] w-full cursor-pointer font-sans text-base font-semibold text-gray-200 transition-colors flex gap-2 items-center border-none rounded-md rounded-b-none label hover:bg-[#1e1e1e] ${i==="css"?"bg-[#1e1e1e]":"bg-dark-700"}`,
                        onClick: () => h("css"),
                        children: [W("text-blue-600 w-5 h-5"), " CSS"]
                    })]
                })
            }), e.jsxs("div", {
                className: `flex flex-1 ${s.isEditMode?"overflow-hidden":"overflow-auto"} custom-scrollbar-editor bg-darkEditor relative max-h-[500px] min-h-0 md:max-h-none
        h-full
        `,
                ref: p,
                children: [e.jsx(je, {
                    text: i === "css" && !s.isTailwind ? s.isPrefixed ? t == null ? void 0 : t.prefixedCss : s.css : s.html,
                    isFancyEditor: s.isEditMode,
                    user: t.user,
                    language: b.CSS
                }), e.jsx("div", {
                    className: "relative w-full overflow-y-auto custom-scrollbar-editor",
                    children: i === "css" && !s.isTailwind ? e.jsx(se, {
                        onChange: n.setCss,
                        css: s == null ? void 0 : s.css,
                        prefixedCss: t == null ? void 0 : t.prefixedCss,
                        isPrefixed: s.isPrefixed,
                        fancy: !1,
                        readOnly: r,
                        height: s.previewHeight - 68,
                        codeExpanded: l
                    }, t.id) : e.jsx(ne, {
                        html: s.html,
                        isTailwind: s.isTailwind,
                        onChange: f => n.setHtml(f),
                        fancy: !1,
                        readOnly: x || r,
                        type: t.type,
                        height: s.previewHeight - 68,
                        codeExpanded: l
                    }, t.id)
                })]
            }), !r && e.jsxs("div", {
                className: "flex items-center justify-between gap-3 px-4 py-1 font-mono text-sm text-gray-400 bg-dark-500",
                children: [s.hasChanged ? e.jsx("span", {
                    className: "text-orange-300",
                    children: "Unsaved changes"
                }) : e.jsx("span", {}), i === "html" && x && e.jsx("span", {
                    className: "text-yellow-300",
                    children: "You cannot change the HTML for this post type"
                }), e.jsxs("div", {
                    className: "flex gap-4",
                    children: [t.isOwner && t.status !== y.post_status.approved && e.jsx(Te, {
                        isAutoSaving: s.isAutoSaving,
                        setIsAutoSaving: n.setIsAutoSaving
                    }), !s.isEditMode && i === "css" && e.jsx(ve, {
                        prefixedCss: t == null ? void 0 : t.prefixedCss,
                        isPrefixed: s.isPrefixed,
                        setIsPrefixed: n.setIsPrefixed
                    })]
                })]
            })]
        })
    },
    Je = ({
        username: t,
        friendlyId: n,
        type: s
    }) => !t || !n || !s ? null : e.jsxs("div", {
        className: "flex items-center gap-2 px-3 font-semibold text-gray-200",
        children: [z("h-5 w-5 text-blue-400"), "Variation of a", e.jsx(w, {
            to: `/${t}/${n}`,
            className: "underline underline-offset-2",
            children: s
        })]
    });
export {
    Ve as I, Ye as P, N as R, we as S, Je as V, Qe as a, ye as b, ge as c, qe as d
};