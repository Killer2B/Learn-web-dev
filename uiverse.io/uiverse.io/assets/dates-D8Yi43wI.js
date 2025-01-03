const g = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function a(e, t = !1, i = !1) {
    const r = e.getDate(),
        u = g[e.getMonth()],
        s = e.getFullYear(),
        o = e.getHours();
    let n = e.getMinutes();
    return n < 10 && (n = `0${n}`), t ? `${t} at ${o}:${n}` : i ? `${r}. ${u} at ${o}:${n}` : `${r}. ${u} ${s}. at ${o}:${n}`
}

function f(e) {
    if (!e) return null;
    const t = typeof e == "object" ? e : new Date(e),
        i = 864e5,
        r = new Date,
        u = new Date(r - i),
        s = Math.round((r - t) / 1e3),
        o = Math.round(s / 60),
        n = r.toDateString() === t.toDateString(),
        c = u.toDateString() === t.toDateString(),
        l = r.getFullYear() === t.getFullYear();
    return s < 5 ? "now" : s < 60 ? `${s} seconds ago` : s < 90 ? "about a minute ago" : o < 60 ? `${o} minutes ago` : n ? a(t, "Today") : c ? a(t, "Yesterday") : l ? a(t, !1, !0) : a(t)
}
const y = e => f(e);
export {
    y as p, f as t
};