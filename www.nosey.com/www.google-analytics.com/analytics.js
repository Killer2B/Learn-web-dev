! function(n, e) {
    const t = "done",
        o = n.uniqueId + n.name + "_" + (Array.isArray(e) ? e.join("_") : "");
    if (n.uniqueId && Window.prototype.toString[o] === t) return;

    function a() {}
    const i = e ? [].concat(n).concat(e) : [n];
    try {
        (function(n) {
            var e, t = function() {},
                o = t.prototype;
            o.get = a, o.set = a, o.send = a;
            var i = window.GoogleAnalyticsObject || "ga",
                c = null === (e = window[i]) || void 0 === e ? void 0 : e.q;

            function r(n) {
                var e = arguments.length;
                if (0 !== e) {
                    var t, o = arguments[e - 1];
                    o instanceof Object && null !== o && "function" == typeof o.hitCallback ? t = o.hitCallback : "function" == typeof o && (t = function() {
                        o(r.create())
                    });
                    try {
                        setTimeout(t, 1)
                    } catch (n) {}
                }
            }
            if (r.create = function() {
                    return new t
                }, r.getByName = function() {
                    return new t
                }, r.getAll = function() {
                    return [new t]
                }, r.remove = a, r.loaded = !0, window[i] = r, Array.isArray(c)) {
                var u = function(n) {
                    r(...n)
                };
                c.push = u, c.forEach(u)
            }
            var f = window,
                l = f.dataLayer,
                d = f.google_optimize;
            if (l instanceof Object != 0) {
                l.hide instanceof Object && "function" == typeof l.hide.end && l.hide.end();
                var s = function(n, e) {
                    n && "function" == typeof n[e] && setTimeout(n[e])
                };
                if ("function" == typeof l.push && (l.push = function(n) {
                        if (n instanceof Object) {
                            for (var e in s(n, "eventCallback"), n) s(n[e], "event_callback");
                            n.hasOwnProperty("eventCallback") || n.hasOwnProperty("eventCallback") || [].push.call(window.dataLayer, n)
                        }
                        return Array.isArray(n) && n.forEach((function(n) {
                            s(n, "callback")
                        })), a
                    }), d instanceof Object && "function" == typeof d.get) {
                    var y = {
                        get: a
                    };
                    window.google_optimize = y
                }! function(n) {
                    var e = "[AdGuard]";
                    if (n.verbose) {
                        try {
                            var t = console.trace.bind(console),
                                o = "".concat(e, " ");
                            "corelibs" === n.engine ? o += n.ruleText : (n.domainName && (o += "".concat(n.domainName)), n.args ? o += "#%#//scriptlet('".concat(n.name, "', '").concat(n.args.join("', '"), "')") : o += "#%#//scriptlet('".concat(n.name, "')")), t && t(o)
                        } catch (n) {}
                        "function" == typeof window.__debug && window.__debug(n)
                    }
                }(n)
            }
        }).apply(this, i), n.uniqueId && Object.defineProperty(Window.prototype.toString, o, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !1
        })
    } catch (n) {
        console.log(n)
    }
}({
    name: "google-analytics",
    args: []
}, []);