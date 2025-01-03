import {
    r as i
} from "./jsx-runtime-Dvja6b4T.js";
const r = () => {
    const [t, n] = i.useState({
        width: void 0,
        height: void 0
    });
    return i.useEffect(() => {
        const e = () => {
            n({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
    }, []), t
};
export {
    r as u
};