import {
    K as t,
    L as a
} from "./focus-management-BQHAzeQ5.js";
let l = "span";
var p = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(p || {});

function s(e, n) {
    var i;
    let {
        features: d = 1,
        ...o
    } = e, r = {
        ref: n,
        "aria-hidden": (d & 2) === 2 ? !0 : (i = o["aria-hidden"]) != null ? i : void 0,
        hidden: (d & 4) === 4 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(d & 4) === 4 && (d & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return a()({
        ourProps: r,
        theirProps: o,
        slot: {},
        defaultTag: l,
        name: "Hidden"
    })
}
let f = t(s);
export {
    f,
    p as s
};