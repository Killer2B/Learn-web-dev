import {
    r as s,
    j as d
} from "./jsx-runtime-Dvja6b4T.js";
import {
    S as u
} from "./index-kwZc0teZ.js";
import {
    c
} from "./index-Bb4qSo10.js";
import {
    c as f
} from "./utils-BAZByXB4.js";
const l = c("inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-red-500/20 text-red-400 hover:bg-red-500/30",
                outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-dark-600 text-secondary-foreground hover:bg-dark-500",
                ghost: "hover:bg-dark-600 hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                fancy: "bg-gradient-to-tl from-indigo-500 to-fuchsia-500 text-white"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    m = s.forwardRef(({
        className: e,
        variant: t,
        size: r,
        asChild: o = !1,
        ...n
    }, a) => {
        const i = o ? u : "button";
        return d.jsx(i, {
            className: f(l({
                variant: t,
                size: r,
                className: e
            })),
            ref: a,
            ...n
        })
    });
m.displayName = "Button";
export {
    m as B
};