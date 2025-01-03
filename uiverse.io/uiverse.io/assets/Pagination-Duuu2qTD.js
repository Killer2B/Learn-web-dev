import {
    j as t
} from "./jsx-runtime-Dvja6b4T.js";
import {
    z as p,
    E as s
} from "./icons-pNqq09c6.js";
import {
    c as x
} from "./utils-OWsBmDA3.js";
const m = ({
        handleNavigation: e,
        currentPage: o,
        hasNextPage: a,
        hasPreviousPage: r
    }) => t.jsxs("div", {
        className: x("grid col-span-full gap-3.5 grid-cols-2"),
        children: [r && t.jsxs("button", {
            className: x("flex items-center justify-start p-5 bg-[#252525] text-gray-400 rounded-lg text-[20px] col-span-1 font-semibold text-lg", "button--left", "max-[600px]:p-3.5 max-[600px]:text-[16px]", "max-[450px]:p-2.5 max-[450px]:text-[14px]"),
            onClick: () => e("back"),
            children: [p(x("w-6 h-6 text-inherit mr-5 max-[600px]:w-7 max-[600px]:h-7 max-[600px]:mr-2.5 max-[450px]:w-5 max-[450px]:h-5")), "Previous page"]
        }), a && t.jsxs("button", {
            className: "flex items-center justify-end p-5 bg-[#252525] text-gray-400 rounded-lg text-[20px] col-span-1 text-right font-semibold text-lg button--right col-start-2 max-[600px]:p-3.5 max-[600px]:text-[16px] max-[450px]:p-2.5 max-[450px]:text-[14px]",
            onClick: () => e("forward"),
            children: ["Next page", s("w-6 h-6 text-inherit mr-0 ml-5 max-[600px]:ml-2.5")]
        })]
    }),
    c = m;
export {
    c as P
};