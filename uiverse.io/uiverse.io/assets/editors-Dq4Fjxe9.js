const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/MonacoEditorWorker-DOMzaUgR.js", "assets/jsx-runtime-Dvja6b4T.js", "assets/MonacoEditorWorker-DyQrAAdL.css"]))) => i.map(i => d[i]);
import {
    c as I,
    g as He,
    r as H,
    j as z
} from "./jsx-runtime-Dvja6b4T.js";
import {
    C as ye
} from "./client-only-BA55xl8q.js";
const lt = "/assets/prism-vs-code-CVMdTe9F.css",
    qe = "modulepreload",
    Ue = function(a) {
        return "/" + a
    },
    $e = {},
    Te = function(i, g, u) {
        let h = Promise.resolve();
        if (g && g.length > 0) {
            document.getElementsByTagName("link");
            const w = document.querySelector("meta[property=csp-nonce]"),
                F = (w == null ? void 0 : w.nonce) || (w == null ? void 0 : w.getAttribute("nonce"));
            h = Promise.all(g.map(o => {
                if (o = Ue(o), o in $e) return;
                $e[o] = !0;
                const c = o.endsWith(".css"),
                    y = c ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${o}"]${y}`)) return;
                const p = document.createElement("link");
                if (p.rel = c ? "stylesheet" : qe, c || (p.as = "script", p.crossOrigin = ""), p.href = o, F && p.setAttribute("nonce", F), document.head.appendChild(p), c) return new Promise((b, T) => {
                    p.addEventListener("load", b), p.addEventListener("error", () => T(new Error(`Unable to preload CSS for ${o}`)))
                })
            }))
        }
        return h.then(() => i()).catch(w => {
            const F = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (F.payload = w, window.dispatchEvent(F), !F.defaultPrevented) throw w
        })
    };
var Me = {
    exports: {}
};
(function(a) {
    var i = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var g = function(u) {
        var h = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            w = 0,
            F = {},
            o = {
                manual: u.Prism && u.Prism.manual,
                disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function t(e) {
                        return e instanceof c ? new c(e.type, t(e.content), e.alias) : Array.isArray(e) ? e.map(t) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(t) {
                        return Object.prototype.toString.call(t).slice(8, -1)
                    },
                    objId: function(t) {
                        return t.__id || Object.defineProperty(t, "__id", {
                            value: ++w
                        }), t.__id
                    },
                    clone: function t(e, s) {
                        s = s || {};
                        var n, l;
                        switch (o.util.type(e)) {
                            case "Object":
                                if (l = o.util.objId(e), s[l]) return s[l];
                                n = {}, s[l] = n;
                                for (var d in e) e.hasOwnProperty(d) && (n[d] = t(e[d], s));
                                return n;
                            case "Array":
                                return l = o.util.objId(e), s[l] ? s[l] : (n = [], s[l] = n, e.forEach(function(E, f) {
                                    n[f] = t(E, s)
                                }), n);
                            default:
                                return e
                        }
                    },
                    getLanguage: function(t) {
                        for (; t;) {
                            var e = h.exec(t.className);
                            if (e) return e[1].toLowerCase();
                            t = t.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function(t, e) {
                        t.className = t.className.replace(RegExp(h, "gi"), ""), t.classList.add("language-" + e)
                    },
                    currentScript: function() {
                        if (typeof document > "u") return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (n) {
                            var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack) || [])[1];
                            if (t) {
                                var e = document.getElementsByTagName("script");
                                for (var s in e)
                                    if (e[s].src == t) return e[s]
                            }
                            return null
                        }
                    },
                    isActive: function(t, e, s) {
                        for (var n = "no-" + e; t;) {
                            var l = t.classList;
                            if (l.contains(e)) return !0;
                            if (l.contains(n)) return !1;
                            t = t.parentElement
                        }
                        return !!s
                    }
                },
                languages: {
                    plain: F,
                    plaintext: F,
                    text: F,
                    txt: F,
                    extend: function(t, e) {
                        var s = o.util.clone(o.languages[t]);
                        for (var n in e) s[n] = e[n];
                        return s
                    },
                    insertBefore: function(t, e, s, n) {
                        n = n || o.languages;
                        var l = n[t],
                            d = {};
                        for (var E in l)
                            if (l.hasOwnProperty(E)) {
                                if (E == e)
                                    for (var f in s) s.hasOwnProperty(f) && (d[f] = s[f]);
                                s.hasOwnProperty(E) || (d[E] = l[E])
                            }
                        var C = n[t];
                        return n[t] = d, o.languages.DFS(o.languages, function(_, M) {
                            M === C && _ != t && (this[_] = d)
                        }), d
                    },
                    DFS: function t(e, s, n, l) {
                        l = l || {};
                        var d = o.util.objId;
                        for (var E in e)
                            if (e.hasOwnProperty(E)) {
                                s.call(e, E, e[E], n || E);
                                var f = e[E],
                                    C = o.util.type(f);
                                C === "Object" && !l[d(f)] ? (l[d(f)] = !0, t(f, s, null, l)) : C === "Array" && !l[d(f)] && (l[d(f)] = !0, t(f, s, E, l))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(t, e) {
                    o.highlightAllUnder(document, t, e)
                },
                highlightAllUnder: function(t, e, s) {
                    var n = {
                        callback: s,
                        container: t,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    o.hooks.run("before-highlightall", n), n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)), o.hooks.run("before-all-elements-highlight", n);
                    for (var l = 0, d; d = n.elements[l++];) o.highlightElement(d, e === !0, n.callback)
                },
                highlightElement: function(t, e, s) {
                    var n = o.util.getLanguage(t),
                        l = o.languages[n];
                    o.util.setLanguage(t, n);
                    var d = t.parentElement;
                    d && d.nodeName.toLowerCase() === "pre" && o.util.setLanguage(d, n);
                    var E = t.textContent,
                        f = {
                            element: t,
                            language: n,
                            grammar: l,
                            code: E
                        };

                    function C(M) {
                        f.highlightedCode = M, o.hooks.run("before-insert", f), f.element.innerHTML = f.highlightedCode, o.hooks.run("after-highlight", f), o.hooks.run("complete", f), s && s.call(f.element)
                    }
                    if (o.hooks.run("before-sanity-check", f), d = f.element.parentElement, d && d.nodeName.toLowerCase() === "pre" && !d.hasAttribute("tabindex") && d.setAttribute("tabindex", "0"), !f.code) {
                        o.hooks.run("complete", f), s && s.call(f.element);
                        return
                    }
                    if (o.hooks.run("before-highlight", f), !f.grammar) {
                        C(o.util.encode(f.code));
                        return
                    }
                    if (e && u.Worker) {
                        var _ = new Worker(o.filename);
                        _.onmessage = function(M) {
                            C(M.data)
                        }, _.postMessage(JSON.stringify({
                            language: f.language,
                            code: f.code,
                            immediateClose: !0
                        }))
                    } else C(o.highlight(f.code, f.grammar, f.language))
                },
                highlight: function(t, e, s) {
                    var n = {
                        code: t,
                        grammar: e,
                        language: s
                    };
                    if (o.hooks.run("before-tokenize", n), !n.grammar) throw new Error('The language "' + n.language + '" has no grammar.');
                    return n.tokens = o.tokenize(n.code, n.grammar), o.hooks.run("after-tokenize", n), c.stringify(o.util.encode(n.tokens), n.language)
                },
                tokenize: function(t, e) {
                    var s = e.rest;
                    if (s) {
                        for (var n in s) e[n] = s[n];
                        delete e.rest
                    }
                    var l = new b;
                    return T(l, l.head, t), p(t, l, e, l.head, 0), be(l)
                },
                hooks: {
                    all: {},
                    add: function(t, e) {
                        var s = o.hooks.all;
                        s[t] = s[t] || [], s[t].push(e)
                    },
                    run: function(t, e) {
                        var s = o.hooks.all[t];
                        if (!(!s || !s.length))
                            for (var n = 0, l; l = s[n++];) l(e)
                    }
                },
                Token: c
            };
        u.Prism = o;

        function c(t, e, s, n) {
            this.type = t, this.content = e, this.alias = s, this.length = (n || "").length | 0
        }
        c.stringify = function t(e, s) {
            if (typeof e == "string") return e;
            if (Array.isArray(e)) {
                var n = "";
                return e.forEach(function(C) {
                    n += t(C, s)
                }), n
            }
            var l = {
                    type: e.type,
                    content: t(e.content, s),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: s
                },
                d = e.alias;
            d && (Array.isArray(d) ? Array.prototype.push.apply(l.classes, d) : l.classes.push(d)), o.hooks.run("wrap", l);
            var E = "";
            for (var f in l.attributes) E += " " + f + '="' + (l.attributes[f] || "").replace(/"/g, "&quot;") + '"';
            return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + E + ">" + l.content + "</" + l.tag + ">"
        };

        function y(t, e, s, n) {
            t.lastIndex = e;
            var l = t.exec(s);
            if (l && n && l[1]) {
                var d = l[1].length;
                l.index += d, l[0] = l[0].slice(d)
            }
            return l
        }

        function p(t, e, s, n, l, d) {
            for (var E in s)
                if (!(!s.hasOwnProperty(E) || !s[E])) {
                    var f = s[E];
                    f = Array.isArray(f) ? f : [f];
                    for (var C = 0; C < f.length; ++C) {
                        if (d && d.cause == E + "," + C) return;
                        var _ = f[C],
                            M = _.inside,
                            ae = !!_.lookbehind,
                            de = !!_.greedy,
                            fe = _.alias;
                        if (de && !_.pattern.global) {
                            var xe = _.pattern.toString().match(/[imsuy]*$/)[0];
                            _.pattern = RegExp(_.pattern.source, xe + "g")
                        }
                        for (var S = _.pattern || _, A = n.next, D = l; A !== e.tail && !(d && D >= d.reach); D += A.value.length, A = A.next) {
                            var Z = A.value;
                            if (e.length > t.length) return;
                            if (!(Z instanceof c)) {
                                var Q = 1,
                                    O;
                                if (de) {
                                    if (O = y(S, D, t, ae), !O || O.index >= t.length) break;
                                    var J = O.index,
                                        re = O.index + O[0].length,
                                        j = D;
                                    for (j += A.value.length; J >= j;) A = A.next, j += A.value.length;
                                    if (j -= A.value.length, D = j, A.value instanceof c) continue;
                                    for (var B = A; B !== e.tail && (j < re || typeof B.value == "string"); B = B.next) Q++, j += B.value.length;
                                    Q--, Z = t.slice(D, j), O.index -= D
                                } else if (O = y(S, 0, Z, ae), !O) continue;
                                var J = O.index,
                                    N = O[0],
                                    L = Z.slice(0, J),
                                    pe = Z.slice(J + N.length),
                                    ie = D + Z.length;
                                d && ie > d.reach && (d.reach = ie);
                                var X = A.prev;
                                L && (X = T(e, X, L), D += L.length), q(e, X, Q);
                                var we = new c(E, M ? o.tokenize(N, M) : N, fe, N);
                                if (A = T(e, X, we), pe && T(e, A, pe), Q > 1) {
                                    var r = {
                                        cause: E + "," + C,
                                        reach: ie
                                    };
                                    p(t, e, s, A.prev, D, r), d && r.reach > d.reach && (d.reach = r.reach)
                                }
                            }
                        }
                    }
                }
        }

        function b() {
            var t = {
                    value: null,
                    prev: null,
                    next: null
                },
                e = {
                    value: null,
                    prev: t,
                    next: null
                };
            t.next = e, this.head = t, this.tail = e, this.length = 0
        }

        function T(t, e, s) {
            var n = e.next,
                l = {
                    value: s,
                    prev: e,
                    next: n
                };
            return e.next = l, n.prev = l, t.length++, l
        }

        function q(t, e, s) {
            for (var n = e.next, l = 0; l < s && n !== t.tail; l++) n = n.next;
            e.next = n, n.prev = e, t.length -= l
        }

        function be(t) {
            for (var e = [], s = t.head.next; s !== t.tail;) e.push(s.value), s = s.next;
            return e
        }
        if (!u.document) return u.addEventListener && (o.disableWorkerMessageHandler || u.addEventListener("message", function(t) {
            var e = JSON.parse(t.data),
                s = e.language,
                n = e.code,
                l = e.immediateClose;
            u.postMessage(o.highlight(n, o.languages[s], s)), l && u.close()
        }, !1)), o;
        var G = o.util.currentScript();
        G && (o.filename = G.src, G.hasAttribute("data-manual") && (o.manual = !0));

        function te() {
            o.manual || o.highlightAll()
        }
        if (!o.manual) {
            var ne = document.readyState;
            ne === "loading" || ne === "interactive" && G && G.defer ? document.addEventListener("DOMContentLoaded", te) : window.requestAnimationFrame ? window.requestAnimationFrame(te) : window.setTimeout(te, 16)
        }
        return o
    }(i);
    a.exports && (a.exports = g), typeof I < "u" && (I.Prism = g)
})(Me);
var Ye = Me.exports;
const Oe = He(Ye);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(a) {
    a.type === "entity" && (a.attributes.title = a.content.replace(/&amp;/, "&"))
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(i, g) {
        var u = {};
        u["language-" + g] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[g]
        }, u.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var h = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: u
            }
        };
        h["language-" + g] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[g]
        };
        var w = {};
        w[i] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return i
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: h
        }, Prism.languages.insertBefore("markup", "cdata", w)
    }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(a, i) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + a + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [i, "language-" + i],
                            inside: Prism.languages[i]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
});
Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript"));
Prism.languages.js = Prism.languages.javascript;
(function(a) {
    var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    a.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + i.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + i.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + i.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: i,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }, a.languages.css.atrule.inside.rest = a.languages.css;
    var g = a.languages.markup;
    g && (g.tag.addInlined("style", "css"), g.tag.addAttribute("style", "css"))
})(Prism);
(function(a) {
    var i = a.util.clone(a.languages.javascript),
        g = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
        u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
        h = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

    function w(c, y) {
        return c = c.replace(/<S>/g, function() {
            return g
        }).replace(/<BRACES>/g, function() {
            return u
        }).replace(/<SPREAD>/g, function() {
            return h
        }), RegExp(c, y)
    }
    h = w(h).source, a.languages.jsx = a.languages.extend("markup", i), a.languages.jsx.tag.pattern = w(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = i.comment, a.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: w(/<SPREAD>/.source),
            inside: a.languages.jsx
        }
    }, a.languages.jsx.tag), a.languages.insertBefore("inside", "special-attr", {
        script: {
            pattern: w(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
                "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation"
                },
                rest: a.languages.jsx
            }
        }
    }, a.languages.jsx.tag);
    var F = function(c) {
            return c ? typeof c == "string" ? c : typeof c.content == "string" ? c.content : c.content.map(F).join("") : ""
        },
        o = function(c) {
            for (var y = [], p = 0; p < c.length; p++) {
                var b = c[p],
                    T = !1;
                if (typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? y.length > 0 && y[y.length - 1].tagName === F(b.content[0].content[1]) && y.pop() : b.content[b.content.length - 1].content === "/>" || y.push({
                        tagName: F(b.content[0].content[1]),
                        openedBraces: 0
                    }) : y.length > 0 && b.type === "punctuation" && b.content === "{" ? y[y.length - 1].openedBraces++ : y.length > 0 && y[y.length - 1].openedBraces > 0 && b.type === "punctuation" && b.content === "}" ? y[y.length - 1].openedBraces-- : T = !0), (T || typeof b == "string") && y.length > 0 && y[y.length - 1].openedBraces === 0) {
                    var q = F(b);
                    p < c.length - 1 && (typeof c[p + 1] == "string" || c[p + 1].type === "plain-text") && (q += F(c[p + 1]), c.splice(p + 1, 1)), p > 0 && (typeof c[p - 1] == "string" || c[p - 1].type === "plain-text") && (q = F(c[p - 1]) + q, c.splice(p - 1, 1), p--), c[p] = new a.Token("plain-text", q, null, q)
                }
                b.content && typeof b.content != "string" && o(b.content)
            }
        };
    a.hooks.add("after-tokenize", function(c) {
        c.language !== "jsx" && c.language !== "tsx" || o(c.tokens)
    })
})(Prism);
Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
};
Prism.languages.webmanifest = Prism.languages.json;
var Be = {},
    P = I && I.__assign || function() {
        return P = Object.assign || function(a) {
            for (var i, g = 1, u = arguments.length; g < u; g++) {
                i = arguments[g];
                for (var h in i) Object.prototype.hasOwnProperty.call(i, h) && (a[h] = i[h])
            }
            return a
        }, P.apply(this, arguments)
    },
    Ze = I && I.__createBinding || (Object.create ? function(a, i, g, u) {
        u === void 0 && (u = g);
        var h = Object.getOwnPropertyDescriptor(i, g);
        (!h || ("get" in h ? !i.__esModule : h.writable || h.configurable)) && (h = {
            enumerable: !0,
            get: function() {
                return i[g]
            }
        }), Object.defineProperty(a, u, h)
    } : function(a, i, g, u) {
        u === void 0 && (u = g), a[u] = i[g]
    }),
    Ne = I && I.__setModuleDefault || (Object.create ? function(a, i) {
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: i
        })
    } : function(a, i) {
        a.default = i
    }),
    Ve = I && I.__importStar || function(a) {
        if (a && a.__esModule) return a;
        var i = {};
        if (a != null)
            for (var g in a) g !== "default" && Object.prototype.hasOwnProperty.call(a, g) && Ze(i, a, g);
        return Ne(i, a), i
    },
    Ge = I && I.__rest || function(a, i) {
        var g = {};
        for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && i.indexOf(u) < 0 && (g[u] = a[u]);
        if (a != null && typeof Object.getOwnPropertySymbols == "function")
            for (var h = 0, u = Object.getOwnPropertySymbols(a); h < u.length; h++) i.indexOf(u[h]) < 0 && Object.prototype.propertyIsEnumerable.call(a, u[h]) && (g[u[h]] = a[u[h]]);
        return g
    };
Object.defineProperty(Be, "__esModule", {
    value: !0
});
var K = Ve(H),
    Je = 89,
    ve = 90,
    Qe = 77,
    De = 57,
    Re = 219,
    ze = 222,
    Ke = 192,
    Ie = 100,
    Xe = 3e3,
    et = typeof window < "u" && "navigator" in window && /Win/i.test(navigator.platform),
    Fe = typeof window < "u" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    me = "npm__react-simple-code-editor__textarea",
    tt = `
/**
 * Reset the text fill color so that placeholder is visible
 */
.`.concat(me, `:empty {
  -webkit-text-fill-color: inherit !important;
}

/**
 * Hack to apply on some CSS on IE10 and IE11
 */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  /**
    * IE doesn't support '-webkit-text-fill-color'
    * So we use 'color: transparent' to make the text transparent on IE
    * Unlike other browsers, it doesn't affect caret color in IE
    */
  .`).concat(me, ` {
    color: transparent !important;
  }

  .`).concat(me, `::selection {
    background-color: #accef7 !important;
    color: transparent !important;
  }
}
`),
    nt = K.forwardRef(function(i, g) {
        var u = i.autoFocus,
            h = i.disabled,
            w = i.form,
            F = i.highlight,
            o = i.ignoreTabKey,
            c = o === void 0 ? !1 : o,
            y = i.insertSpaces,
            p = y === void 0 ? !0 : y,
            b = i.maxLength,
            T = i.minLength,
            q = i.name,
            be = i.onBlur,
            G = i.onClick,
            te = i.onFocus,
            ne = i.onKeyDown,
            t = i.onKeyUp,
            e = i.onValueChange,
            s = i.padding,
            n = s === void 0 ? 0 : s,
            l = i.placeholder,
            d = i.preClassName,
            E = i.readOnly,
            f = i.required,
            C = i.style,
            _ = i.tabSize,
            M = _ === void 0 ? 2 : _,
            ae = i.textareaClassName,
            de = i.textareaId,
            fe = i.value,
            xe = Ge(i, ["autoFocus", "disabled", "form", "highlight", "ignoreTabKey", "insertSpaces", "maxLength", "minLength", "name", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onValueChange", "padding", "placeholder", "preClassName", "readOnly", "required", "style", "tabSize", "textareaClassName", "textareaId", "value"]),
            S = K.useRef({
                stack: [],
                offset: -1
            }),
            A = K.useRef(null),
            D = K.useState(!0),
            Z = D[0],
            Q = D[1],
            O = {
                paddingTop: typeof n == "object" ? n.top : n,
                paddingRight: typeof n == "object" ? n.right : n,
                paddingBottom: typeof n == "object" ? n.bottom : n,
                paddingLeft: typeof n == "object" ? n.left : n
            },
            re = F(fe),
            j = function(r, x) {
                return r.substring(0, x).split(`
`)
            },
            B = K.useCallback(function(r, x) {
                var v, m, k;
                x === void 0 && (x = !1);
                var $ = S.current,
                    U = $.stack,
                    se = $.offset;
                if (U.length && se > -1) {
                    S.current.stack = U.slice(0, se + 1);
                    var le = S.current.stack.length;
                    if (le > Ie) {
                        var ee = le - Ie;
                        S.current.stack = U.slice(ee, le), S.current.offset = Math.max(S.current.offset - ee, 0)
                    }
                }
                var W = Date.now();
                if (x) {
                    var V = S.current.stack[S.current.offset];
                    if (V && W - V.timestamp < Xe) {
                        var oe = /[^a-z0-9]([a-z0-9]+)$/i,
                            R = (v = j(V.value, V.selectionStart).pop()) === null || v === void 0 ? void 0 : v.match(oe),
                            ue = (m = j(r.value, r.selectionStart).pop()) === null || m === void 0 ? void 0 : m.match(oe);
                        if (R != null && R[1] && (!((k = ue == null ? void 0 : ue[1]) === null || k === void 0) && k.startsWith(R[1]))) {
                            S.current.stack[S.current.offset] = P(P({}, r), {
                                timestamp: W
                            });
                            return
                        }
                    }
                }
                S.current.stack.push(P(P({}, r), {
                    timestamp: W
                })), S.current.offset++
            }, []),
            J = K.useCallback(function() {
                var r = A.current;
                if (r) {
                    var x = r.value,
                        v = r.selectionStart,
                        m = r.selectionEnd;
                    B({
                        value: x,
                        selectionStart: v,
                        selectionEnd: m
                    })
                }
            }, [B]),
            N = function(r) {
                var x = A.current;
                x && (x.value = r.value, x.selectionStart = r.selectionStart, x.selectionEnd = r.selectionEnd, e == null || e(r.value))
            },
            L = function(r) {
                var x = A.current,
                    v = S.current.stack[S.current.offset];
                v && x && (S.current.stack[S.current.offset] = P(P({}, v), {
                    selectionStart: x.selectionStart,
                    selectionEnd: x.selectionEnd
                })), B(r), N(r)
            },
            pe = function() {
                var r = S.current,
                    x = r.stack,
                    v = r.offset,
                    m = x[v - 1];
                m && (N(m), S.current.offset = Math.max(v - 1, 0))
            },
            ie = function() {
                var r = S.current,
                    x = r.stack,
                    v = r.offset,
                    m = x[v + 1];
                m && (N(m), S.current.offset = Math.min(v + 1, x.length - 1))
            },
            X = function(r) {
                if (!(ne && (ne(r), r.defaultPrevented))) {
                    r.key === "Escape" && r.currentTarget.blur();
                    var x = r.currentTarget,
                        v = x.value,
                        m = x.selectionStart,
                        k = x.selectionEnd,
                        $ = (p ? " " : "	").repeat(M);
                    if (r.key === "Tab" && !c && Z)
                        if (r.preventDefault(), r.shiftKey) {
                            var U = j(v, m),
                                se = U.length - 1,
                                le = j(v, k).length - 1,
                                ee = v.split(`
`).map(function(ce, Ce) {
                                    return Ce >= se && Ce <= le && ce.startsWith($) ? ce.substring($.length) : ce
                                }).join(`
`);
                            if (v !== ee) {
                                var W = U[se];
                                L({
                                    value: ee,
                                    selectionStart: W != null && W.startsWith($) ? m - $.length : m,
                                    selectionEnd: k - (v.length - ee.length)
                                })
                            }
                        } else if (m !== k) {
                        var U = j(v, m),
                            V = U.length - 1,
                            oe = j(v, k).length - 1,
                            W = U[V];
                        L({
                            value: v.split(`
`).map(function(Pe, je) {
                                return je >= V && je <= oe ? $ + Pe : Pe
                            }).join(`
`),
                            selectionStart: W && /\S/.test(W) ? m + $.length : m,
                            selectionEnd: k + $.length * (oe - V + 1)
                        })
                    } else {
                        var R = m + $.length;
                        L({
                            value: v.substring(0, m) + $ + v.substring(k),
                            selectionStart: R,
                            selectionEnd: R
                        })
                    } else if (r.key === "Backspace") {
                        var ue = m !== k,
                            We = v.substring(0, m);
                        if (We.endsWith($) && !ue) {
                            r.preventDefault();
                            var R = m - $.length;
                            L({
                                value: v.substring(0, m - $.length) + v.substring(k),
                                selectionStart: R,
                                selectionEnd: R
                            })
                        }
                    } else if (r.key === "Enter") {
                        if (m === k) {
                            var Ee = j(v, m).pop(),
                                he = Ee == null ? void 0 : Ee.match(/^\s+/);
                            if (he != null && he[0]) {
                                r.preventDefault();
                                var _e = `
` + he[0],
                                    R = m + _e.length;
                                L({
                                    value: v.substring(0, m) + _e + v.substring(k),
                                    selectionStart: R,
                                    selectionEnd: R
                                })
                            }
                        }
                    } else if (r.keyCode === De || r.keyCode === Re || r.keyCode === ze || r.keyCode === Ke) {
                        var Y = void 0;
                        r.keyCode === De && r.shiftKey ? Y = ["(", ")"] : r.keyCode === Re ? r.shiftKey ? Y = ["{", "}"] : Y = ["[", "]"] : r.keyCode === ze ? r.shiftKey ? Y = ['"', '"'] : Y = ["'", "'"] : r.keyCode === Ke && !r.shiftKey && (Y = ["`", "`"]), m !== k && Y && (r.preventDefault(), L({
                            value: v.substring(0, m) + Y[0] + v.substring(m, k) + Y[1] + v.substring(k),
                            selectionStart: m,
                            selectionEnd: k + 2
                        }))
                    } else(Fe ? r.metaKey && r.keyCode === ve : r.ctrlKey && r.keyCode === ve) && !r.shiftKey && !r.altKey ? (r.preventDefault(), pe()) : (Fe ? r.metaKey && r.keyCode === ve && r.shiftKey : et ? r.ctrlKey && r.keyCode === Je : r.ctrlKey && r.keyCode === ve && r.shiftKey) && !r.altKey ? (r.preventDefault(), ie()) : r.keyCode === Qe && r.ctrlKey && (!Fe || r.shiftKey) && (r.preventDefault(), Q(function(ce) {
                        return !ce
                    }))
                }
            },
            we = function(r) {
                var x = r.currentTarget,
                    v = x.value,
                    m = x.selectionStart,
                    k = x.selectionEnd;
                B({
                    value: v,
                    selectionStart: m,
                    selectionEnd: k
                }, !0), e(v)
            };
        return K.useEffect(function() {
            J()
        }, [J]), K.useImperativeHandle(g, function() {
            return {
                get session() {
                    return {
                        history: S.current
                    }
                },
                set session(r) {
                    S.current = r.history
                }
            }
        }, []), K.createElement("div", P({}, xe, {
            style: P(P({}, ge.container), C)
        }), K.createElement("pre", P({
            className: d,
            "aria-hidden": "true",
            style: P(P(P({}, ge.editor), ge.highlight), O)
        }, typeof re == "string" ? {
            dangerouslySetInnerHTML: {
                __html: re + "<br />"
            }
        } : {
            children: re
        })), K.createElement("textarea", {
            ref: function(r) {
                return A.current = r
            },
            style: P(P(P({}, ge.editor), ge.textarea), O),
            className: me + (ae ? " ".concat(ae) : ""),
            id: de,
            value: fe,
            onChange: we,
            onKeyDown: X,
            onClick: G,
            onKeyUp: t,
            onFocus: te,
            onBlur: be,
            disabled: h,
            form: w,
            maxLength: b,
            minLength: T,
            name: q,
            placeholder: l,
            readOnly: E,
            required: f,
            autoFocus: u,
            autoCapitalize: "off",
            autoComplete: "off",
            autoCorrect: "off",
            spellCheck: !1,
            "data-gramm": !1
        }), K.createElement("style", {
            dangerouslySetInnerHTML: {
                __html: tt
            }
        }))
    }),
    ge = {
        container: {
            position: "relative",
            textAlign: "left",
            boxSizing: "border-box",
            padding: 0,
            overflow: "hidden"
        },
        textarea: {
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            resize: "none",
            color: "inherit",
            overflow: "hidden",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            WebkitTextFillColor: "transparent"
        },
        highlight: {
            position: "relative",
            pointerEvents: "none"
        },
        editor: {
            margin: 0,
            border: 0,
            background: "none",
            boxSizing: "inherit",
            display: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontStyle: "inherit",
            fontVariantLigatures: "inherit",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            lineHeight: "inherit",
            tabSize: "inherit",
            textIndent: "inherit",
            textRendering: "inherit",
            textTransform: "inherit",
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all",
            overflowWrap: "break-word"
        }
    },
    Se = Be.default = nt;
const at = H.lazy(() => Te(() =>
        import ("./MonacoEditorWorker-DOMzaUgR.js").then(a => a.M), __vite__mapDeps([0, 1, 2])).then(a => ({
        default: a.MonacoEditorWorkerCss
    }))),
    rt = H.lazy(() => Te(() =>
        import ("./MonacoEditorWorker-DOMzaUgR.js").then(a => a.M), __vite__mapDeps([0, 1, 2])).then(a => ({
        default: a.MonacoEditorWorkerHtml
    }))),
    Le = {
        fontSize: 16,
        automaticLayout: !0,
        tabSize: 2
    },
    Ae = {
        style: {
            fontSize: 16,
            fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", monospace'
        },
        padding: 16,
        tabSize: 2
    },
    ke = (a, i) => Oe.highlight(a, Oe.languages[i], i).split(`
`).map((g, u) => `<span class='editorLineNumber'>${u+1}</span>${g}`).join(`
`),
    ot = ({
        css: a,
        onChange: i,
        isPrefixed: g = !1,
        prefixedCss: u = "",
        fancy: h = !1,
        defaultCss: w = "",
        readOnly: F = !1,
        height: o,
        codeExpanded: c
    }) => {
        const y = H.useRef(null);

        function p(b) {
            y.current = b
        }
        return H.useEffect(() => {
            var b;
            y.current && ((b = y.current) == null || b.layout())
        }, [o, c]), h ? z.jsx(ye, {
            children: () => z.jsx(H.Suspense, {
                fallback: z.jsx("div", {
                    children: "Loading..."
                }),
                children: z.jsx(at, {
                    editorSharedProps: Le,
                    handleEditorDidMount: p,
                    css: a,
                    onChange: i,
                    isPrefixed: g,
                    prefixedCss: u,
                    defaultCss: w,
                    readOnly: F
                })
            })
        }) : z.jsx(ye, {
            children: () => z.jsx(Se, {
                value: g ? u : a,
                className: "editor",
                textareaId: "codeArea1",
                onValueChange: i,
                defaultValue: w,
                highlight: b => ke(b, "css"),
                readOnly: g || F,
                ...Ae
            })
        })
    },
    ut = ({
        html: a = "",
        onChange: i,
        fancy: g = !1,
        readOnly: u = !1,
        type: h,
        isTailwind: w = !1,
        height: F,
        codeExpanded: o
    }) => {
        const c = H.useRef(null);

        function y(p) {
            c.current = p
        }
        return H.useEffect(() => {
            var p;
            c.current && ((p = c.current) == null || p.layout())
        }, [h]), H.useEffect(() => {
            window.requestAnimationFrame(() => {
                var p;
                (p = c.current) == null || p.layout()
            })
        }, [F, o]), g ? z.jsx(ye, {
            children: () => z.jsx(H.Suspense, {
                fallback: z.jsx("div", {
                    children: "Loading..."
                }),
                children: z.jsx(rt, {
                    editorSharedProps: Le,
                    handleEditorDidMount: y,
                    html: a,
                    onChange: i,
                    readOnly: u,
                    isTailwind: w
                })
            })
        }) : z.jsx(ye, {
            children: () => z.jsx(Se, {
                value: a,
                onValueChange: i,
                textareaId: "codeArea2",
                readOnly: u,
                className: "editor editor--html",
                highlight: p => ke(p, "html"),
                ...Ae
            })
        })
    },
    ct = ({
        value: a,
        onChange: i,
        language: g = "json",
        className: u = "",
        name: h = "code",
        readOnly: w = !1
    }) => z.jsx(Se, {
        value: a,
        onValueChange: i,
        textareaId: "codeArea2",
        name: h,
        className: `editor editor--html ${u}`,
        highlight: F => ke(F, g),
        readOnly: w,
        ...Ae
    });
export {
    ot as C, ut as H, ct as S, Te as _, lt as e
};