import {
    r as e
} from "./jsx-runtime-Dvja6b4T.js";

function n() {
    return () => {}
}

function u() {
    return e.useSyncExternalStore(n, () => !0, () => !1)
}

function a({
    children: r,
    fallback: t = null
}) {
    return u() ? e.createElement(e.Fragment, null, r()) : e.createElement(e.Fragment, null, t)
}
export {
    a as C
};