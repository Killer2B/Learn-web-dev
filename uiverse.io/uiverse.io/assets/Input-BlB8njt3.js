import {
    j as s
} from "./jsx-runtime-Dvja6b4T.js";
const b = ({
        label: e = "",
        htmlName: t = "",
        value: f = "",
        className: r = "",
        defaultValue: o = "",
        required: a = !1,
        type: l = "text",
        onChange: n = i => {},
        disabled: d = !1,
        placeholder: x = "",
        customProps: c = {},
        maxLength: m = 255
    }) => s.jsxs("div", {
        className: `w-full ${r}`,
        children: [e && s.jsxs("label", {
            htmlFor: t,
            className: "block text-sm font-semibold text-gray-300",
            children: [e, " ", a && s.jsx("span", {
                className: "text-red-400",
                children: "*"
            })]
        }), s.jsx("input", {
            type: l,
            name: t,
            defaultValue: o,
            onChange: n,
            id: t,
            required: a,
            maxLength: m,
            disabled: d,
            placeholder: x,
            ...c,
            className: `block w-full ${e&&"mt-1"} font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400`
        })]
    }),
    h = ({
        label: e = "",
        htmlName: t = "",
        value: f = "",
        className: r = "",
        defaultValue: o = "",
        required: a = !1,
        minRows: l = 2,
        onChange: n = i => {},
        disabled: d = !1,
        placeholder: x = "",
        customProps: c = {},
        maxLength: m = 255
    }) => s.jsxs("div", {
        className: `w-full ${r}`,
        children: [e && s.jsxs("label", {
            htmlFor: t,
            className: "block text-sm font-semibold text-gray-300",
            children: [e, " ", a && s.jsx("span", {
                className: "text-red-400",
                children: "*"
            })]
        }), s.jsx("textarea", {
            name: t,
            defaultValue: o,
            onChange: n,
            rows: l,
            id: t,
            required: a,
            disabled: d,
            maxLength: m,
            placeholder: x,
            ...c,
            className: `block w-full ${e&&"mt-1"} font-[inherit] border-none rounded-md shadow-sm bg-dark-500 focus:ring-sky-500 focus:border-sky-500 sm:text-sm md:text-base text-offwhite placeholder:text-gray-400`
        })]
    });
export {
    b as I, h as T
};