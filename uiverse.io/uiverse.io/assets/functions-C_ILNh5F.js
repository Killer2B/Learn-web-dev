import {
    r as x
} from "./jsx-runtime-Dvja6b4T.js";
const C = u => {
    const a = typeof u == "function",
        c = x.useRef(u);
    x.useEffect(() => {
        c.current = u
    }), x.useEffect(() => {
        if (a) {
            const s = t => {
                const o = c.current(t);
                if (typeof o == "string") return t.preventDefault(), t.returnValue = o;
                if (t.defaultPrevented) return t.returnValue = ""
            };
            return window.addEventListener("beforeunload", s), () => {
                window.removeEventListener("beforeunload", s)
            }
        }
    }, [a])
};
var w = {};
(function(u) {
    Object.defineProperty(u, "__esModule", {
        value: !0
    }), u.parse = void 0;

    function a(e) {
        if (e !== void 0) {
            if (e === null) return null;
            if (e === "") return "";
            e = e.replace(/\\+$/, n => n.length % 2 === 0 ? n : n.slice(0, -1));
            try {
                return JSON.parse(e)
            } catch (n) {
                const [r, i] = e.trimLeft()[0] === ":" ? c(e, n) : c(e, n, y);
                return a.lastParseReminding = i, a.onExtraToken && i.length > 0 && a.onExtraToken(e, r, i), r
            }
        }
    }
    u.parse = a,
        function(e) {
            e.onExtraToken = (n, r, i) => {
                console.error("parsed json with extra tokens:", {
                    text: n,
                    data: r,
                    reminding: i
                })
            }
        }(a = u.parse || (u.parse = {}));

    function c(e, n, r) {
        const i = t[e[0]] || r;
        if (!i) throw console.error(`no parser registered for ${JSON.stringify(e[0])}:`, {
            s: e
        }), n;
        return i(e, n)
    }

    function s(e, n, r) {
        return e[0] === '"' ? g(e) : e[0] === "'" ? O(e) : y(e, n, r)
    }
    const t = {};

    function o(e) {
        return e.trimLeft()
    }
    t[" "] = l, t["\r"] = l, t[`
`] = l, t["	"] = l;

    function l(e, n) {
        return e = o(e), c(e, n)
    }
    t["["] = p;

    function p(e, n) {
        e = e.substr(1);
        const r = [];
        for (e = o(e); e.length > 0;) {
            if (e[0] === "]") {
                e = e.substr(1);
                break
            }
            const i = c(e, n, (f, b) => y(f, b, [",", "]"]));
            r.push(i[0]), e = i[1], e = o(e), e[0] === "," && (e = e.substring(1), e = o(e))
        }
        return [r, e]
    }
    for (const e of "0123456789.-".slice()) t[e] = h;

    function h(e) {
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            if (t[r] === h) continue;
            const i = e.substring(0, n);
            return e = e.substring(n), [d(i), e]
        }
        return [d(e), ""]
    }

    function d(e) {
        if (e === "-") return -0;
        const n = +e;
        return Number.isNaN(n) ? e : n
    }
    t['"'] = g;

    function g(e) {
        for (let n = 1; n < e.length; n++) {
            const r = e[n];
            if (r === "\\") {
                n++;
                continue
            }
            if (r === '"') {
                const i = m(e.substring(0, n + 1));
                return e = e.substring(n + 1), [JSON.parse(i), e]
            }
        }
        return [JSON.parse(m(e) + '"'), ""]
    }

    function m(e) {
        return e.replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r")
    }
    t["'"] = O;

    function O(e) {
        for (let n = 1; n < e.length; n++) {
            const r = e[n];
            if (r === "\\") {
                n++;
                continue
            }
            if (r === "'") {
                const i = m(e.substring(0, n + 1));
                return e = e.substring(n + 1), [JSON.parse('"' + i.slice(1, -1) + '"'), e]
            }
        }
        return [JSON.parse('"' + m(e.slice(1)) + '"'), ""]
    }

    function y(e, n, r = [" "]) {
        const i = Math.min(...r.map(T => {
                const k = e.indexOf(T);
                return k === -1 ? e.length : k
            })),
            f = e.substring(0, i).trim(),
            b = e.substring(i);
        return [f, b]
    }
    t["{"] = v;

    function v(e, n) {
        e = e.substr(1);
        const r = {};
        for (e = o(e); e.length > 0;) {
            if (e[0] === "}") {
                e = e.substr(1);
                break
            }
            const i = s(e, n, [":", "}"]),
                f = i[0];
            if (e = i[1], e = o(e), e[0] !== ":") {
                r[f] = void 0;
                break
            }
            if (e = e.substr(1), e = o(e), e.length === 0) {
                r[f] = void 0;
                break
            }
            const b = c(e, n);
            r[f] = b[0], e = b[1], e = o(e), e[0] === "," && (e = e.substr(1), e = o(e))
        }
        return [r, e]
    }
    t.t = N;

    function N(e, n) {
        return S(e, "true", !0, n)
    }
    t.f = E;

    function E(e, n) {
        return S(e, "false", !1, n)
    }
    t.n = R;

    function R(e, n) {
        return S(e, "null", null, n)
    }

    function S(e, n, r, i) {
        for (let f = n.length; f >= 1; f--)
            if (e.startsWith(n.slice(0, f))) return [r, e.slice(f)]; {
            const f = JSON.stringify(e.slice(0, n.length));
            throw console.error(`unknown token starting with ${f}:`, {
                s: e
            }), i
        }
    }
})(w);
const P = ({
        postId: u,
        prompt: a,
        variationCount: c,
        isTailwind: s = !1
    }) => fetch("/resource/ai/variations", {
        method: "POST",
        body: JSON.stringify({
            postId: u,
            prompt: a,
            variationCount: c,
            isTailwind: s
        }),
        headers: {
            "Content-Type": "application/json",
            Connection: "keep-alive",
            "Response-Type": "stream"
        }
    }),
    A = async ({
        response: u,
        onChunkProcessed: a
    }) => {
        const c = new TextDecoderStream,
            s = u.body.pipeThrough(c).getReader();
        let t = [];
        try {
            for await (const o of j(s)) {
                const l = o.choices[0].delta.content,
                    p = o.choices[0].index,
                    h = o.choices[0].finish_reason;
                if (t[p] ? h && (t[p].finishReason = h) : t[p] = {
                        content: "",
                        finishReason: h,
                        buffer: "",
                        index: p
                    }, !l || o.choices[0].delta.content === "") continue;
                let d = t[p].buffer;
                if (t[p].buffer += l, d.includes("```json")) {
                    const g = d.indexOf("```json") + 7;
                    d = d.substring(g)
                }
                try {
                    const g = w.parse(d);
                    t[p].content = g, a(m => [...t])
                } catch {
                    continue
                }
            }
        } catch {}
        return t
    };
async function* j(u) {
    let a = "";
    for (;;) {
        const {
            done: c,
            value: s
        } = await u.read();
        if (c) break;
        a += s;
        let t;
        for (;
            (t = a.indexOf(`

`)) !== -1;) {
            const o = a.substring(0, t);
            if (a = a.substring(t + 2), o.indexOf("data: ") !== 0) throw new Error('Expected "data:" prefix in: ' + o);
            const l = o.substring(6);
            if (l === "[DONE]") break;
            yield JSON.parse(l)
        }
    }
}

function D(u, a, c) {
    let s = (u.css.length + u.html.length) * c,
        t = a / s * 100;
    return t = Math.round(t), t > 97 && (t = 97), t
}
export {
    w as a, D as c, C as l, A as p, P as r, j as s
};