import {
    j as o
} from "./jsx-runtime-Dvja6b4T.js";
import {
    c as s
} from "./index-Bb4qSo10.js";
import {
    c as i
} from "./utils-BAZByXB4.js";
const d = {
        review: "pending",
        approved: "success",
        needs_work: "destructive",
        draft: "info",
        saved: "info",
        none: "default"
    },
    c = s("inline-flex items-center rounded border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-dark-500 text-primary-foreground",
                secondary: "border-transparent bg-secondary text-secondary-foreground",
                destructive: "border-transparent bg-red-500/20 text-red-400",
                outline: "text-foreground",
                success: "border-transparent bg-green-500/20 text-green-400",
                pending: "border-transparent bg-yellow-500/20 text-yellow-400",
                info: "border-transparent bg-blue-500/20 text-blue-400"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

function p({
    className: e,
    variant: t,
    status: r,
    ...n
}) {
    const a = r ? d[r] : t;
    return o.jsx("div", {
        className: i(c({
            variant: a
        }), e),
        ...n
    })
}
export {
    p as B
};