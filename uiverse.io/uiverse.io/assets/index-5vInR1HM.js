import "./jsx-runtime-Dvja6b4T.js";
import "./components-BuvoIJIj.js";
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function S(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((a, r) => {
        let s = e[r];
        return a.concat(Array.isArray(s) ? s.map(n => [r, n]) : [
            [r, s]
        ])
    }, []))
}
const u = "6";
try {
    window.__reactRouterVersion = u
} catch {}
var c;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(c || (c = {}));
var t;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(t || (t = {}));
export {
    S as c
};