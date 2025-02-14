import {
    r as d,
    j as R
} from "./jsx-runtime-Dvja6b4T.js";
import {
    u as M,
    P as _
} from "./index-w1qRmSKj.js";
import {
    u as y
} from "./index-CcT0GIt8.js";
var F = "focusScope.autoFocusOnMount",
    T = "focusScope.autoFocusOnUnmount",
    N = {
        bubbles: !1,
        cancelable: !0
    },
    x = "FocusScope",
    K = d.forwardRef((e, n) => {
        const {
            loop: t = !1,
            trapped: u = !1,
            onMountAutoFocus: p,
            onUnmountAutoFocus: L,
            ...g
        } = e, [s, P] = d.useState(null), E = y(p), v = y(L), b = d.useRef(null), U = M(n, o => P(o)), i = d.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        d.useEffect(() => {
            if (u) {
                let o = function(a) {
                        if (i.paused || !s) return;
                        const c = a.target;
                        s.contains(c) ? b.current = c : f(b.current, {
                            select: !0
                        })
                    },
                    l = function(a) {
                        if (i.paused || !s) return;
                        const c = a.relatedTarget;
                        c !== null && (s.contains(c) || f(b.current, {
                            select: !0
                        }))
                    },
                    r = function(a) {
                        if (document.activeElement === document.body)
                            for (const h of a) h.removedNodes.length > 0 && f(s)
                    };
                document.addEventListener("focusin", o), document.addEventListener("focusout", l);
                const m = new MutationObserver(r);
                return s && m.observe(s, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", o), document.removeEventListener("focusout", l), m.disconnect()
                }
            }
        }, [u, s, i.paused]), d.useEffect(() => {
            if (s) {
                S.add(i);
                const o = document.activeElement;
                if (!s.contains(o)) {
                    const r = new CustomEvent(F, N);
                    s.addEventListener(F, E), s.dispatchEvent(r), r.defaultPrevented || (k(V(I(s)), {
                        select: !0
                    }), document.activeElement === o && f(s))
                }
                return () => {
                    s.removeEventListener(F, E), setTimeout(() => {
                        const r = new CustomEvent(T, N);
                        s.addEventListener(T, v), s.dispatchEvent(r), r.defaultPrevented || f(o ? ? document.body, {
                            select: !0
                        }), s.removeEventListener(T, v), S.remove(i)
                    }, 0)
                }
            }
        }, [s, E, v, i]);
        const A = d.useCallback(o => {
            if (!t && !u || i.paused) return;
            const l = o.key === "Tab" && !o.altKey && !o.ctrlKey && !o.metaKey,
                r = document.activeElement;
            if (l && r) {
                const m = o.currentTarget,
                    [a, c] = w(m);
                a && c ? !o.shiftKey && r === c ? (o.preventDefault(), t && f(a, {
                    select: !0
                })) : o.shiftKey && r === a && (o.preventDefault(), t && f(c, {
                    select: !0
                })) : r === m && o.preventDefault()
            }
        }, [t, u, i.paused]);
        return R.jsx(_.div, {
            tabIndex: -1,
            ...g,
            ref: U,
            onKeyDown: A
        })
    });
K.displayName = x;

function k(e, {
    select: n = !1
} = {}) {
    const t = document.activeElement;
    for (const u of e)
        if (f(u, {
                select: n
            }), document.activeElement !== t) return
}

function w(e) {
    const n = I(e),
        t = O(n, e),
        u = O(n.reverse(), e);
    return [t, u]
}

function I(e) {
    const n = [],
        t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: u => {
                const p = u.tagName === "INPUT" && u.type === "hidden";
                return u.disabled || u.hidden || p ? NodeFilter.FILTER_SKIP : u.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; t.nextNode();) n.push(t.currentNode);
    return n
}

function O(e, n) {
    for (const t of e)
        if (!D(t, {
                upTo: n
            })) return t
}

function D(e, {
    upTo: n
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (n !== void 0 && e === n) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function H(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function f(e, {
    select: n = !1
} = {}) {
    if (e && e.focus) {
        const t = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== t && H(e) && n && e.select()
    }
}
var S = j();

function j() {
    let e = [];
    return {
        add(n) {
            const t = e[0];
            n !== t && (t == null || t.pause()), e = C(e, n), e.unshift(n)
        },
        remove(n) {
            var t;
            e = C(e, n), (t = e[0]) == null || t.resume()
        }
    }
}

function C(e, n) {
    const t = [...e],
        u = t.indexOf(n);
    return u !== -1 && t.splice(u, 1), t
}

function V(e) {
    return e.filter(n => n.tagName !== "A")
}
export {
    K as F
};