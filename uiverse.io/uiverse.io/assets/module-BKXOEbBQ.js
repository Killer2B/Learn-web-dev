var ge, p = typeof window < "u" ? window : void 0,
    ee = typeof globalThis < "u" ? globalThis : p,
    hn = Array.prototype,
    cr = hn.forEach,
    dr = hn.indexOf,
    ne = ee == null ? void 0 : ee.navigator,
    w = ee == null ? void 0 : ee.document,
    Q = ee == null ? void 0 : ee.location,
    Ei = ee == null ? void 0 : ee.fetch,
    Si = ee != null && ee.XMLHttpRequest && "withCredentials" in new ee.XMLHttpRequest ? ee.XMLHttpRequest : void 0,
    hr = ee == null ? void 0 : ee.AbortController,
    j = ne == null ? void 0 : ne.userAgent,
    I = p ? ? {},
    Se = {
        DEBUG: !1,
        LIB_VERSION: "1.203.2"
    },
    ci = "$copy_autocapture",
    ws = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"];
(function(r) {
    r.GZipJS = "gzip-js", r.Base64 = "base64"
})(ge || (ge = {}));

function F(r, e) {
    return r.indexOf(e) !== -1
}
var ri = function(r) {
        return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
    ki = function(r) {
        return r.replace(/^\$/, "")
    },
    Es = Array.isArray,
    _n = Object.prototype,
    pn = _n.hasOwnProperty,
    ni = _n.toString,
    H = Es || function(r) {
        return ni.call(r) === "[object Array]"
    },
    ae = r => typeof r == "function",
    q = r => r === Object(r) && !H(r),
    Qe = r => {
        if (q(r)) {
            for (var e in r)
                if (pn.call(r, e)) return !1;
            return !0
        }
        return !1
    },
    S = r => r === void 0,
    G = r => ni.call(r) == "[object String]",
    _r = r => G(r) && r.trim().length === 0,
    Ae = r => r === null,
    M = r => S(r) || Ae(r),
    K = r => ni.call(r) == "[object Number]",
    We = r => ni.call(r) === "[object Boolean]",
    Ss = r => r instanceof FormData,
    ks = r => F(ws, r),
    gn = r => {
        var e = {
            _log: function(t) {
                if (p && (Se.DEBUG || I.POSTHOG_DEBUG) && !S(p.console) && p.console) {
                    for (var i = ("__rrweb_original__" in p.console[t]) ? p.console[t].__rrweb_original__ : p.console[t], n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];
                    i(r, ...s)
                }
            },
            info: function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                e._log("log", ...i)
            },
            warn: function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                e._log("warn", ...i)
            },
            error: function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                e._log("error", ...i)
            },
            critical: function() {
                for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                console.error(r, ...i)
            },
            uninitializedWarning: t => {
                e.error("You must initialize PostHog before calling ".concat(t))
            },
            createLogger: t => gn("".concat(r, " ").concat(t))
        };
        return e
    },
    k = gn("[PostHog.js]"),
    Z = k.createLogger,
    xs = Z("[ExternalScriptsLoader]"),
    pr = (r, e, t) => {
        if (r.config.disable_external_dependency_loading) return xs.warn("".concat(e, " was requested but loading of external scripts is disabled.")), t("Loading of external scripts is disabled");
        var i = () => {
            if (!w) return t("document not found");
            var n = w.createElement("script");
            if (n.type = "text/javascript", n.crossOrigin = "anonymous", n.src = e, n.onload = a => t(void 0, a), n.onerror = a => t(a), r.config.prepare_external_dependency_script && (n = r.config.prepare_external_dependency_script(n)), !n) return t("prepare_external_dependency_script returned null");
            var s, o = w.querySelectorAll("body > script");
            o.length > 0 ? (s = o[0].parentNode) === null || s === void 0 || s.insertBefore(n, o[0]) : w.body.appendChild(n)
        };
        w != null && w.body ? i() : w == null || w.addEventListener("DOMContentLoaded", i)
    };

function gr(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(r);
        e && (i = i.filter(function(n) {
            return Object.getOwnPropertyDescriptor(r, n).enumerable
        })), t.push.apply(t, i)
    }
    return t
}

function f(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? gr(Object(t), !0).forEach(function(i) {
            m(r, i, t[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gr(Object(t)).forEach(function(i) {
            Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i))
        })
    }
    return r
}

function m(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r
}

function vn(r, e) {
    if (r == null) return {};
    var t, i, n = function(o, a) {
        if (o == null) return {};
        var l, c, d = {},
            u = Object.keys(o);
        for (c = 0; c < u.length; c++) l = u[c], a.indexOf(l) >= 0 || (d[l] = o[l]);
        return d
    }(r, e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(r);
        for (i = 0; i < s.length; i++) t = s[i], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(r, t) && (n[t] = r[t])
    }
    return n
}
I.__PosthogExtensions__ = I.__PosthogExtensions__ || {}, I.__PosthogExtensions__.loadExternalDependency = (r, e, t) => {
    var i = "/static/".concat(e, ".js") + "?v=".concat(r.version);
    if (e === "remote-config" && (i = "/array/".concat(r.config.token, "/config.js")), e === "toolbar") {
        var n = 3e5,
            s = Math.floor(Date.now() / n) * n;
        i = "".concat(i, "&t=").concat(s)
    }
    var o = r.requestRouter.endpointFor("assets", i);
    pr(r, o, t)
}, I.__PosthogExtensions__.loadSiteApp = (r, e, t) => {
    var i = r.requestRouter.endpointFor("api", e);
    pr(r, i, t)
};
var Ut = {};

function tt(r, e, t) {
    if (H(r)) {
        if (cr && r.forEach === cr) r.forEach(e, t);
        else if ("length" in r && r.length === +r.length) {
            for (var i = 0, n = r.length; i < n; i++)
                if (i in r && e.call(t, r[i], i) === Ut) return
        }
    }
}

function T(r, e, t) {
    if (!M(r)) {
        if (H(r)) return tt(r, e, t);
        if (Ss(r)) {
            for (var i of r.entries())
                if (e.call(t, i[1], i[0]) === Ut) return
        } else
            for (var n in r)
                if (pn.call(r, n) && e.call(t, r[n], n) === Ut) return
    }
}
var X = function(r) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) t[i - 1] = arguments[i];
    return tt(t, function(n) {
        for (var s in n) n[s] !== void 0 && (r[s] = n[s])
    }), r
};

function qt(r) {
    for (var e = Object.keys(r), t = e.length, i = new Array(t); t--;) i[t] = [e[t], r[e[t]]];
    return i
}
var vr = function(r) {
        try {
            return r()
        } catch {
            return
        }
    },
    Cs = function(r) {
        return function() {
            try {
                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return r.apply(this, t)
            } catch (n) {
                k.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), k.critical(n)
            }
        }
    },
    zt = function(r) {
        var e = {};
        return T(r, function(t, i) {
            G(t) && t.length > 0 && (e[i] = t)
        }), e
    };

function Is(r, e) {
    return t = r, i = s => G(s) && !Ae(e) ? s.slice(0, e) : s, n = new Set,
        function s(o, a) {
            return o !== Object(o) ? i ? i(o, a) : o : n.has(o) ? void 0 : (n.add(o), H(o) ? (l = [], tt(o, c => {
                l.push(s(c))
            })) : (l = {}, T(o, (c, d) => {
                n.has(c) || (l[d] = s(c, d))
            })), l);
            var l
        }(t);
    var t, i, n
}
var ke = function() {
    function r(e) {
        return e && (e.preventDefault = r.preventDefault, e.stopPropagation = r.stopPropagation), e
    }
    return r.preventDefault = function() {
            this.returnValue = !1
        }, r.stopPropagation = function() {
            this.cancelBubble = !0
        },
        function(e, t, i, n, s) {
            if (e)
                if (e.addEventListener && !n) e.addEventListener(t, i, !!s);
                else {
                    var o = "on" + t,
                        a = e[o];
                    e[o] = function(l, c, d) {
                        return function(u) {
                            if (u = u || r(p == null ? void 0 : p.event)) {
                                var _, h = !0;
                                ae(d) && (_ = d(u));
                                var g = c.call(l, u);
                                return _ !== !1 && g !== !1 || (h = !1), h
                            }
                        }
                    }(e, i, a)
                }
            else k.error("No valid element provided to register_event")
        }
}();

function fn(r, e) {
    for (var t = 0; t < r.length; t++)
        if (e(r[t])) return r[t]
}
var mn = "$people_distinct_id",
    pt = "__alias",
    gt = "__timers",
    fr = "$autocapture_disabled_server_side",
    xi = "$heatmaps_enabled_server_side",
    mr = "$exception_capture_enabled_server_side",
    br = "$web_vitals_enabled_server_side",
    bn = "$dead_clicks_enabled_server_side",
    yr = "$web_vitals_allowed_metrics",
    Ci = "$session_recording_enabled_server_side",
    wr = "$console_log_recording_enabled_server_side",
    Er = "$session_recording_network_payload_capture",
    Sr = "$session_recording_canvas_recording",
    kr = "$replay_sample_rate",
    xr = "$replay_minimum_duration",
    Cr = "$replay_script_config",
    jt = "$sesid",
    vt = "$session_is_sampled",
    di = "$session_recording_url_trigger_activated_session",
    hi = "$session_recording_event_trigger_activated_session",
    et = "$enabled_feature_flags",
    Bt = "$early_access_features",
    ft = "$stored_person_properties",
    Ue = "$stored_group_properties",
    Ii = "$surveys",
    Pt = "$surveys_activated",
    Wt = "$flag_call_reported",
    ye = "$user_state",
    Pi = "$client_session_props",
    Ri = "$capture_rate_limit",
    Fi = "$initial_campaign_params",
    Ti = "$initial_referrer_info",
    $i = "$initial_person_info",
    Gt = "$epp",
    yn = "__POSTHOG_TOOLBAR__",
    Ir = "$posthog_cklsh",
    Ps = [mn, pt, "__cmpns", gt, Ci, xi, jt, et, ye, Bt, Ue, ft, Ii, Wt, Pi, Ri, Fi, Ti, Gt],
    Rt = Z("[FeatureFlags]"),
    _i = "$active_feature_flags",
    Ft = "$override_feature_flags",
    Pr = "$feature_flag_payloads",
    Rr = r => {
        var e = {};
        for (var [t, i] of qt(r || {})) i && (e[t] = i);
        return e
    };
class Rs {
    constructor(e) {
        m(this, "_override_warning", !1), m(this, "_hasLoadedFlags", !1), m(this, "_requestInFlight", !1), m(this, "_reloadingDisabled", !1), m(this, "_additionalReloadRequested", !1), m(this, "_decideCalled", !1), m(this, "_flagsLoadedFromRemote", !1), this.instance = e, this.featureFlagEventHandlers = []
    }
    decide() {
        if (this.instance.config.__preview_remote_config) this._decideCalled = !0;
        else {
            var e = !this._reloadDebouncer && (this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load);
            this._callDecideEndpoint({
                disableFlags: e
            })
        }
    }
    get hasLoadedFlags() {
        return this._hasLoadedFlags
    }
    getFlags() {
        return Object.keys(this.getFlagVariants())
    }
    getFlagVariants() {
        var e = this.instance.get_property(et),
            t = this.instance.get_property(Ft);
        if (!t) return e || {};
        for (var i = X({}, e), n = Object.keys(t), s = 0; s < n.length; s++) i[n[s]] = t[n[s]];
        return this._override_warning || (Rt.warn(" Overriding feature flags!", {
            enabledFlags: e,
            overriddenFlags: t,
            finalFlags: i
        }), this._override_warning = !0), i
    }
    getFlagPayloads() {
        return this.instance.get_property(Pr) || {}
    }
    reloadFeatureFlags() {
        this._reloadingDisabled || this.instance.config.advanced_disable_feature_flags || this._reloadDebouncer || (this._reloadDebouncer = setTimeout(() => {
            this._callDecideEndpoint()
        }, 5))
    }
    clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
    }
    ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
    }
    setAnonymousDistinctId(e) {
        this.$anon_distinct_id = e
    }
    setReloadingPaused(e) {
        this._reloadingDisabled = e
    }
    _callDecideEndpoint(e) {
        if (this.clearDebouncer(), !this.instance.config.advanced_disable_decide)
            if (this._requestInFlight) this._additionalReloadRequested = !0;
            else {
                var t = {
                    token: this.instance.config.token,
                    distinct_id: this.instance.get_distinct_id(),
                    groups: this.instance.getGroups(),
                    $anon_distinct_id: this.$anon_distinct_id,
                    person_properties: this.instance.get_property(ft),
                    group_properties: this.instance.get_property(Ue)
                };
                (e != null && e.disableFlags || this.instance.config.advanced_disable_feature_flags) && (t.disable_flags = !0), this._requestInFlight = !0, this.instance._send_request({
                    method: "POST",
                    url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                    data: t,
                    compression: this.instance.config.disable_compression ? void 0 : ge.Base64,
                    timeout: this.instance.config.feature_flag_request_timeout_ms,
                    callback: i => {
                        var n, s, o = !0;
                        i.statusCode === 200 && (this.$anon_distinct_id = void 0, o = !1), this._requestInFlight = !1, this._decideCalled || (this._decideCalled = !0, this.instance._onRemoteConfig((s = i.json) !== null && s !== void 0 ? s : {})), t.disable_flags || (this._flagsLoadedFromRemote = !o, this.receivedFeatureFlags((n = i.json) !== null && n !== void 0 ? n : {}, o), this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callDecideEndpoint()))
                    }
                })
            }
    }
    getFeatureFlag(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) {
            var i, n, s, o, a, l = this.getFlagVariants()[e],
                c = "".concat(l),
                d = this.instance.get_property(Wt) || {};
            return (t.send_event || !("send_event" in t)) && (!(e in d) || !d[e].includes(c)) && (H(d[e]) ? d[e].push(c) : d[e] = [c], (i = this.instance.persistence) === null || i === void 0 || i.register({
                [Wt]: d
            }), this.instance.capture("$feature_flag_called", {
                $feature_flag: e,
                $feature_flag_response: l,
                $feature_flag_payload: this.getFeatureFlagPayload(e) || null,
                $feature_flag_bootstrapped_response: ((n = this.instance.config.bootstrap) === null || n === void 0 || (s = n.featureFlags) === null || s === void 0 ? void 0 : s[e]) || null,
                $feature_flag_bootstrapped_payload: ((o = this.instance.config.bootstrap) === null || o === void 0 || (a = o.featureFlagPayloads) === null || a === void 0 ? void 0 : a[e]) || null,
                $used_bootstrap_value: !this._flagsLoadedFromRemote
            })), l
        }
        Rt.warn('getFeatureFlag for key "' + e + `" failed. Feature flags didn't load in time.`)
    }
    getFeatureFlagPayload(e) {
        return this.getFlagPayloads()[e]
    }
    isFeatureEnabled(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
        Rt.warn('isFeatureEnabled for key "' + e + `" failed. Feature flags didn't load in time.`)
    }
    addFeatureFlagsHandler(e) {
        this.featureFlagEventHandlers.push(e)
    }
    removeFeatureFlagsHandler(e) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(t => t !== e)
    }
    receivedFeatureFlags(e, t) {
        if (this.instance.persistence) {
            this._hasLoadedFlags = !0;
            var i = this.getFlagVariants(),
                n = this.getFlagPayloads();
            (function(s, o) {
                var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    c = s.featureFlags,
                    d = s.featureFlagPayloads;
                if (c)
                    if (H(c)) {
                        var u = {};
                        if (c)
                            for (var _ = 0; _ < c.length; _++) u[c[_]] = !0;
                        o && o.register({
                            [_i]: c,
                            [et]: u
                        })
                    } else {
                        var h = c,
                            g = d;
                        s.errorsWhileComputingFlags && (h = f(f({}, a), h), g = f(f({}, l), g)), o && o.register({
                            [_i]: Object.keys(Rr(h)),
                            [et]: h || {},
                            [Pr]: g || {}
                        })
                    }
            })(e, this.instance.persistence, i, n), this._fireFeatureFlagsCallbacks(t)
        }
    }
    override(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        if (!this.instance.__loaded || !this.instance.persistence) return Rt.uninitializedWarning("posthog.feature_flags.override");
        if (this._override_warning = t, e === !1) this.instance.persistence.unregister(Ft);
        else if (H(e)) {
            for (var i = {}, n = 0; n < e.length; n++) i[e[n]] = !0;
            this.instance.persistence.register({
                [Ft]: i
            })
        } else this.instance.persistence.register({
            [Ft]: e
        })
    }
    onFeatureFlags(e) {
        if (this.addFeatureFlagsHandler(e), this._hasLoadedFlags) {
            var {
                flags: t,
                flagVariants: i
            } = this._prepareFeatureFlagsForCallbacks();
            e(t, i)
        }
        return () => this.removeFeatureFlagsHandler(e)
    }
    updateEarlyAccessFeatureEnrollment(e, t) {
        var i, n = (this.instance.get_property(Bt) || []).find(l => l.flagKey === e),
            s = {
                ["$feature_enrollment/".concat(e)]: t
            },
            o = {
                $feature_flag: e,
                $feature_enrollment: t,
                $set: s
            };
        n && (o.$early_access_feature_name = n.name), this.instance.capture("$feature_enrollment_update", o), this.setPersonPropertiesForFlags(s, !1);
        var a = f(f({}, this.getFlagVariants()), {}, {
            [e]: t
        });
        (i = this.instance.persistence) === null || i === void 0 || i.register({
            [_i]: Object.keys(Rr(a)),
            [et]: a
        }), this._fireFeatureFlagsCallbacks()
    }
    getEarlyAccessFeatures(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
            i = this.instance.get_property(Bt);
        if (i && !t) return e(i);
        this.instance._send_request({
            url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
            method: "GET",
            callback: n => {
                var s;
                if (n.json) {
                    var o = n.json.earlyAccessFeatures;
                    return (s = this.instance.persistence) === null || s === void 0 || s.register({
                        [Bt]: o
                    }), e(o)
                }
            }
        })
    }
    _prepareFeatureFlagsForCallbacks() {
        var e = this.getFlags(),
            t = this.getFlagVariants();
        return {
            flags: e.filter(i => t[i]),
            flagVariants: Object.keys(t).filter(i => t[i]).reduce((i, n) => (i[n] = t[n], i), {})
        }
    }
    _fireFeatureFlagsCallbacks(e) {
        var {
            flags: t,
            flagVariants: i
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach(n => n(t, i, {
            errorsLoading: e
        }))
    }
    setPersonPropertiesForFlags(e) {
        var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
            i = this.instance.get_property(ft) || {};
        this.instance.register({
            [ft]: f(f({}, i), e)
        }), t && this.instance.reloadFeatureFlags()
    }
    resetPersonPropertiesForFlags() {
        this.instance.unregister(ft)
    }
    setGroupPropertiesForFlags(e) {
        var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
            i = this.instance.get_property(Ue) || {};
        Object.keys(i).length !== 0 && Object.keys(i).forEach(n => {
            i[n] = f(f({}, i[n]), e[n]), delete e[n]
        }), this.instance.register({
            [Ue]: f(f({}, i), e)
        }), t && this.instance.reloadFeatureFlags()
    }
    resetGroupPropertiesForFlags(e) {
        if (e) {
            var t = this.instance.get_property(Ue) || {};
            this.instance.register({
                [Ue]: f(f({}, t), {}, {
                    [e]: {}
                })
            })
        } else this.instance.unregister(Ue)
    }
}
Math.trunc || (Math.trunc = function(r) {
    return r < 0 ? Math.ceil(r) : Math.floor(r)
}), Number.isInteger || (Number.isInteger = function(r) {
    return K(r) && isFinite(r) && Math.floor(r) === r
});
var Fr = "0123456789abcdef";
class Vt {
    constructor(e) {
        if (this.bytes = e, e.length !== 16) throw new TypeError("not 128-bit length")
    }
    static fromFieldsV7(e, t, i, n) {
        if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(n) || e < 0 || t < 0 || i < 0 || n < 0 || e > 0xffffffffffff || t > 4095 || i > 1073741823 || n > 4294967295) throw new RangeError("invalid field value");
        var s = new Uint8Array(16);
        return s[0] = e / Math.pow(2, 40), s[1] = e / Math.pow(2, 32), s[2] = e / Math.pow(2, 24), s[3] = e / Math.pow(2, 16), s[4] = e / Math.pow(2, 8), s[5] = e, s[6] = 112 | t >>> 8, s[7] = t, s[8] = 128 | i >>> 24, s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = n >>> 24, s[13] = n >>> 16, s[14] = n >>> 8, s[15] = n, new Vt(s)
    }
    toString() {
        for (var e = "", t = 0; t < this.bytes.length; t++) e = e + Fr.charAt(this.bytes[t] >>> 4) + Fr.charAt(15 & this.bytes[t]), t !== 3 && t !== 5 && t !== 7 && t !== 9 || (e += "-");
        if (e.length !== 36) throw new Error("Invalid UUIDv7 was generated");
        return e
    }
    clone() {
        return new Vt(this.bytes.slice(0))
    }
    equals(e) {
        return this.compareTo(e) === 0
    }
    compareTo(e) {
        for (var t = 0; t < 16; t++) {
            var i = this.bytes[t] - e.bytes[t];
            if (i !== 0) return Math.sign(i)
        }
        return 0
    }
}
class Fs {
    constructor() {
        m(this, "timestamp", 0), m(this, "counter", 0), m(this, "random", new Ts)
    }
    generate() {
        var e = this.generateOrAbort();
        if (S(e)) {
            this.timestamp = 0;
            var t = this.generateOrAbort();
            if (S(t)) throw new Error("Could not generate UUID after timestamp reset");
            return t
        }
        return e
    }
    generateOrAbort() {
        var e = Date.now();
        if (e > this.timestamp) this.timestamp = e, this.resetCounter();
        else {
            if (!(e + 1e4 > this.timestamp)) return;
            this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
        }
        return Vt.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32())
    }
    resetCounter() {
        this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
    }
}
var Tr, wn = r => {
    if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
    for (var e = 0; e < r.length; e++) r[e] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
    return r
};
p && !S(p.crypto) && crypto.getRandomValues && (wn = r => crypto.getRandomValues(r));
class Ts {
    constructor() {
        m(this, "buffer", new Uint32Array(8)), m(this, "cursor", 1 / 0)
    }
    nextUint32() {
        return this.cursor >= this.buffer.length && (wn(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
    }
}
var Te = () => $s().toString(),
    $s = () => (Tr || (Tr = new Fs)).generate(),
    Ms = "Thu, 01 Jan 1970 00:00:00 GMT",
    ct = "",
    As = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

function Os(r, e) {
    if (e) {
        var t = function(n) {
            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w;
            if (ct) return ct;
            if (!s || ["localhost", "127.0.0.1"].includes(n)) return "";
            for (var o = n.split("."), a = Math.min(o.length, 8), l = "dmn_chk_" + Te(), c = new RegExp("(^|;)\\s*" + l + "=1"); !ct && a--;) {
                var d = o.slice(a).join("."),
                    u = l + "=1;domain=." + d;
                s.cookie = u, c.test(s.cookie) && (s.cookie = u + ";expires=" + Ms, ct = d)
            }
            return ct
        }(r);
        if (!t) {
            var i = (n => {
                var s = n.match(As);
                return s ? s[0] : ""
            })(r);
            i !== t && k.info("Warning: cookie subdomain discovery mismatch", i, t), t = i
        }
        return t ? "; domain=." + t : ""
    }
    return ""
}
var xe = {
        is_supported: () => !!w,
        error: function(r) {
            k.error("cookieStore error: " + r)
        },
        get: function(r) {
            if (w) {
                try {
                    for (var e = r + "=", t = w.cookie.split(";").filter(s => s.length), i = 0; i < t.length; i++) {
                        for (var n = t[i]; n.charAt(0) == " ";) n = n.substring(1, n.length);
                        if (n.indexOf(e) === 0) return decodeURIComponent(n.substring(e.length, n.length))
                    }
                } catch {}
                return null
            }
        },
        parse: function(r) {
            var e;
            try {
                e = JSON.parse(xe.get(r)) || {}
            } catch {}
            return e
        },
        set: function(r, e, t, i, n) {
            if (w) try {
                var s = "",
                    o = "",
                    a = Os(w.location.hostname, i);
                if (t) {
                    var l = new Date;
                    l.setTime(l.getTime() + 24 * t * 60 * 60 * 1e3), s = "; expires=" + l.toUTCString()
                }
                n && (o = "; secure");
                var c = r + "=" + encodeURIComponent(JSON.stringify(e)) + s + "; SameSite=Lax; path=/" + a + o;
                return c.length > 3686.4 && k.warn("cookieStore warning: large cookie, len=" + c.length), w.cookie = c, c
            } catch {
                return
            }
        },
        remove: function(r, e) {
            try {
                xe.set(r, "", -1, e)
            } catch {
                return
            }
        }
    },
    pi = null,
    U = {
        is_supported: function() {
            if (!Ae(pi)) return pi;
            var r = !0;
            if (S(p)) r = !1;
            else try {
                var e = "__mplssupport__";
                U.set(e, "xyz"), U.get(e) !== '"xyz"' && (r = !1), U.remove(e)
            } catch {
                r = !1
            }
            return r || k.error("localStorage unsupported; falling back to cookie store"), pi = r, r
        },
        error: function(r) {
            k.error("localStorage error: " + r)
        },
        get: function(r) {
            try {
                return p == null ? void 0 : p.localStorage.getItem(r)
            } catch (e) {
                U.error(e)
            }
            return null
        },
        parse: function(r) {
            try {
                return JSON.parse(U.get(r)) || {}
            } catch {}
            return null
        },
        set: function(r, e) {
            try {
                p == null || p.localStorage.setItem(r, JSON.stringify(e))
            } catch (t) {
                U.error(t)
            }
        },
        remove: function(r) {
            try {
                p == null || p.localStorage.removeItem(r)
            } catch (e) {
                U.error(e)
            }
        }
    },
    Ls = ["distinct_id", jt, vt, Gt, $i],
    Tt = f(f({}, U), {}, {
        parse: function(r) {
            try {
                var e = {};
                try {
                    e = xe.parse(r) || {}
                } catch {}
                var t = X(e, JSON.parse(U.get(r) || "{}"));
                return U.set(r, t), t
            } catch {}
            return null
        },
        set: function(r, e, t, i, n, s) {
            try {
                U.set(r, e, void 0, void 0, s);
                var o = {};
                Ls.forEach(a => {
                    e[a] && (o[a] = e[a])
                }), Object.keys(o).length && xe.set(r, o, t, i, n, s)
            } catch (a) {
                U.error(a)
            }
        },
        remove: function(r, e) {
            try {
                p == null || p.localStorage.removeItem(r), xe.remove(r, e)
            } catch (t) {
                U.error(t)
            }
        }
    }),
    $t = {},
    Ds = {
        is_supported: function() {
            return !0
        },
        error: function(r) {
            k.error("memoryStorage error: " + r)
        },
        get: function(r) {
            return $t[r] || null
        },
        parse: function(r) {
            return $t[r] || null
        },
        set: function(r, e) {
            $t[r] = e
        },
        remove: function(r) {
            delete $t[r]
        }
    },
    Le = null,
    W = {
        is_supported: function() {
            if (!Ae(Le)) return Le;
            if (Le = !0, S(p)) Le = !1;
            else try {
                var r = "__support__";
                W.set(r, "xyz"), W.get(r) !== '"xyz"' && (Le = !1), W.remove(r)
            } catch {
                Le = !1
            }
            return Le
        },
        error: function(r) {
            k.error("sessionStorage error: ", r)
        },
        get: function(r) {
            try {
                return p == null ? void 0 : p.sessionStorage.getItem(r)
            } catch (e) {
                W.error(e)
            }
            return null
        },
        parse: function(r) {
            try {
                return JSON.parse(W.get(r)) || null
            } catch {}
            return null
        },
        set: function(r, e) {
            try {
                p == null || p.sessionStorage.setItem(r, JSON.stringify(e))
            } catch (t) {
                W.error(t)
            }
        },
        remove: function(r) {
            try {
                p == null || p.sessionStorage.removeItem(r)
            } catch (e) {
                W.error(e)
            }
        }
    },
    Ns = ["localhost", "127.0.0.1"],
    it = r => {
        var e = w == null ? void 0 : w.createElement("a");
        return S(e) ? null : (e.href = r, e)
    },
    st = function(r, e) {
        return !! function(t) {
            try {
                new RegExp(t)
            } catch {
                return !1
            }
            return !0
        }(e) && new RegExp(e).test(r)
    },
    qs = function(r) {
        var e, t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "&",
            n = [];
        return T(r, function(s, o) {
            S(s) || S(o) || o === "undefined" || (e = encodeURIComponent((a => a instanceof File)(s) ? s.name : s.toString()), t = encodeURIComponent(o), n[n.length] = t + "=" + e)
        }), n.join(i)
    },
    Jt = function(r, e) {
        for (var t, i = ((r.split("#")[0] || "").split("?")[1] || "").split("&"), n = 0; n < i.length; n++) {
            var s = i[n].split("=");
            if (s[0] === e) {
                t = s;
                break
            }
        }
        if (!H(t) || t.length < 2) return "";
        var o = t[1];
        try {
            o = decodeURIComponent(o)
        } catch {
            k.error("Skipping decoding for malformed query param: " + o)
        }
        return o.replace(/\+/g, " ")
    },
    Yt = function(r, e) {
        var t = r.match(new RegExp(e + "=([^&]*)"));
        return t ? t[1] : null
    },
    le = "Mobile",
    Kt = "iOS",
    ve = "Android",
    St = "Tablet",
    En = ve + " " + St,
    Sn = "iPad",
    kn = "Apple",
    xn = kn + " Watch",
    kt = "Safari",
    ot = "BlackBerry",
    Cn = "Samsung",
    In = Cn + "Browser",
    Pn = Cn + " Internet",
    Ve = "Chrome",
    Bs = Ve + " OS",
    Rn = Ve + " " + Kt,
    Ki = "Internet Explorer",
    Fn = Ki + " " + le,
    Xi = "Opera",
    Hs = Xi + " Mini",
    Zi = "Edge",
    Tn = "Microsoft " + Zi,
    rt = "Firefox",
    $n = rt + " " + Kt,
    xt = "Nintendo",
    Ct = "PlayStation",
    nt = "Xbox",
    Mn = ve + " " + le,
    An = le + " " + kt,
    mt = "Windows",
    Mi = mt + " Phone",
    $r = "Nokia",
    Ai = "Ouya",
    On = "Generic",
    Us = On + " " + le.toLowerCase(),
    Ln = On + " " + St.toLowerCase(),
    Oi = "Konqueror",
    Y = "(\\d+(\\.\\d+)?)",
    gi = new RegExp("Version/" + Y),
    zs = new RegExp(nt, "i"),
    js = new RegExp(Ct + " \\w+", "i"),
    Ws = new RegExp(xt + " \\w+", "i"),
    Qi = new RegExp(ot + "|PlayBook|BB10", "i"),
    Gs = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10"
    },
    Vs = (r, e) => e && F(e, kn) || function(t) {
        return F(t, kt) && !F(t, Ve) && !F(t, ve)
    }(r),
    Mr = function(r, e) {
        return e = e || "", F(r, " OPR/") && F(r, "Mini") ? Hs : F(r, " OPR/") ? Xi : Qi.test(r) ? ot : F(r, "IE" + le) || F(r, "WPDesktop") ? Fn : F(r, In) ? Pn : F(r, Zi) || F(r, "Edg/") ? Tn : F(r, "FBIOS") ? "Facebook " + le : F(r, "UCWEB") || F(r, "UCBrowser") ? "UC Browser" : F(r, "CriOS") ? Rn : F(r, "CrMo") || F(r, Ve) ? Ve : F(r, ve) && F(r, kt) ? Mn : F(r, "FxiOS") ? $n : F(r.toLowerCase(), Oi.toLowerCase()) ? Oi : Vs(r, e) ? F(r, le) ? An : kt : F(r, rt) ? rt : F(r, "MSIE") || F(r, "Trident/") ? Ki : F(r, "Gecko") ? rt : ""
    },
    Js = {
        [Fn]: [new RegExp("rv:" + Y)],
        [Tn]: [new RegExp(Zi + "?\\/" + Y)],
        [Ve]: [new RegExp("(" + Ve + "|CrMo)\\/" + Y)],
        [Rn]: [new RegExp("CriOS\\/" + Y)],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + Y)],
        [kt]: [gi],
        [An]: [gi],
        [Xi]: [new RegExp("(Opera|OPR)\\/" + Y)],
        [rt]: [new RegExp(rt + "\\/" + Y)],
        [$n]: [new RegExp("FxiOS\\/" + Y)],
        [Oi]: [new RegExp("Konqueror[:/]?" + Y, "i")],
        [ot]: [new RegExp(ot + " " + Y), gi],
        [Mn]: [new RegExp("android\\s" + Y, "i")],
        [Pn]: [new RegExp(In + "\\/" + Y)],
        [Ki]: [new RegExp("(rv:|MSIE )" + Y)],
        Mozilla: [new RegExp("rv:" + Y)]
    },
    Ar = [
        [new RegExp(nt + "; " + nt + " (.*?)[);]", "i"), r => [nt, r && r[1] || ""]],
        [new RegExp(xt, "i"), [xt, ""]],
        [new RegExp(Ct, "i"), [Ct, ""]],
        [Qi, [ot, ""]],
        [new RegExp(mt, "i"), (r, e) => {
            if (/Phone/.test(e) || /WPDesktop/.test(e)) return [Mi, ""];
            if (new RegExp(le).test(e) && !/IEMobile\b/.test(e)) return [mt + " " + le, ""];
            var t = /Windows NT ([0-9.]+)/i.exec(e);
            if (t && t[1]) {
                var i = t[1],
                    n = Gs[i] || "";
                return /arm/i.test(e) && (n = "RT"), [mt, n]
            }
            return [mt, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, r => {
            if (r && r[3]) {
                var e = [r[3], r[4], r[5] || "0"];
                return [Kt, e.join(".")]
            }
            return [Kt, ""]
        }],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, r => {
            var e = "";
            return r && r.length >= 3 && (e = S(r[2]) ? r[3] : r[2]), ["watchOS", e]
        }],
        [new RegExp("(" + ve + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ve + ")", "i"), r => {
            if (r && r[2]) {
                var e = [r[2], r[3], r[4] || "0"];
                return [ve, e.join(".")]
            }
            return [ve, ""]
        }],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, r => {
            var e = ["Mac OS X", ""];
            if (r && r[1]) {
                var t = [r[1], r[2], r[3] || "0"];
                e[1] = t.join(".")
            }
            return e
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, [Bs, ""]],
        [/Linux|debian/i, ["Linux", ""]]
    ],
    Or = function(r) {
        return Ws.test(r) ? xt : js.test(r) ? Ct : zs.test(r) ? nt : new RegExp(Ai, "i").test(r) ? Ai : new RegExp("(" + Mi + "|WPDesktop)", "i").test(r) ? Mi : /iPad/.test(r) ? Sn : /iPod/.test(r) ? "iPod Touch" : /iPhone/.test(r) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(r) ? xn : Qi.test(r) ? ot : /(kobo)\s(ereader|touch)/i.test(r) ? "Kobo" : new RegExp($r, "i").test(r) ? $r : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(r) || /(kf[a-z]+)( bui|\)).+silk\//i.test(r) ? "Kindle Fire" : /(Android|ZTE)/i.test(r) ? !new RegExp(le).test(r) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(r) ? /pixel[\daxl ]{1,6}/i.test(r) && !/pixel c/i.test(r) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(r) || /lmy47v/i.test(r) && !/QTAQZ3/i.test(r) ? ve : En : ve : new RegExp("(pda|" + le + ")", "i").test(r) ? Us : new RegExp(St, "i").test(r) && !new RegExp(St + " pc", "i").test(r) ? Ln : ""
    },
    Mt = "https?://(.*)",
    Ys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"],
    D = {
        campaignParams: function(r) {
            return w ? this._campaignParamsFromUrl(w.URL, r) : {}
        },
        _campaignParamsFromUrl: function(r, e) {
            var t = Ys.concat(e || []),
                i = {};
            return T(t, function(n) {
                var s = Jt(r, n);
                i[n] = s || null
            }), i
        },
        _searchEngine: function(r) {
            return r ? r.search(Mt + "google.([^/?]*)") === 0 ? "google" : r.search(Mt + "bing.com") === 0 ? "bing" : r.search(Mt + "yahoo.com") === 0 ? "yahoo" : r.search(Mt + "duckduckgo.com") === 0 ? "duckduckgo" : null : null
        },
        _searchInfoFromReferrer: function(r) {
            var e = D._searchEngine(r),
                t = e != "yahoo" ? "q" : "p",
                i = {};
            if (!Ae(e)) {
                i.$search_engine = e;
                var n = w ? Jt(w.referrer, t) : "";
                n.length && (i.ph_keyword = n)
            }
            return i
        },
        searchInfo: function() {
            var r = w == null ? void 0 : w.referrer;
            return r ? this._searchInfoFromReferrer(r) : {}
        },
        browser: Mr,
        browserVersion: function(r, e) {
            var t = Mr(r, e),
                i = Js[t];
            if (S(i)) return null;
            for (var n = 0; n < i.length; n++) {
                var s = i[n],
                    o = r.match(s);
                if (o) return parseFloat(o[o.length - 2])
            }
            return null
        },
        browserLanguage: function() {
            return navigator.language || navigator.userLanguage
        },
        browserLanguagePrefix: function() {
            var r = this.browserLanguage();
            return typeof r == "string" ? r.split("-")[0] : void 0
        },
        os: function(r) {
            for (var e = 0; e < Ar.length; e++) {
                var [t, i] = Ar[e], n = t.exec(r), s = n && (ae(i) ? i(n, r) : i);
                if (s) return s
            }
            return ["", ""]
        },
        device: Or,
        deviceType: function(r) {
            var e = Or(r);
            return e === Sn || e === En || e === "Kobo" || e === "Kindle Fire" || e === Ln ? St : e === xt || e === nt || e === Ct || e === Ai ? "Console" : e === xn ? "Wearable" : e ? le : "Desktop"
        },
        referrer: function() {
            return (w == null ? void 0 : w.referrer) || "$direct"
        },
        referringDomain: function() {
            var r;
            return w != null && w.referrer && ((r = it(w.referrer)) === null || r === void 0 ? void 0 : r.host) || "$direct"
        },
        referrerInfo: function() {
            return {
                $referrer: this.referrer(),
                $referring_domain: this.referringDomain()
            }
        },
        initialPersonInfo: function() {
            return {
                r: this.referrer().substring(0, 1e3),
                u: Q == null ? void 0 : Q.href.substring(0, 1e3)
            }
        },
        initialPersonPropsFromInfo: function(r) {
            var e, {
                    r: t,
                    u: i
                } = r,
                n = {
                    $initial_referrer: t,
                    $initial_referring_domain: t == null ? void 0 : t == "$direct" ? "$direct" : (e = it(t)) === null || e === void 0 ? void 0 : e.host
                };
            if (i) {
                n.$initial_current_url = i;
                var s = it(i);
                n.$initial_host = s == null ? void 0 : s.host, n.$initial_pathname = s == null ? void 0 : s.pathname, T(this._campaignParamsFromUrl(i), function(o, a) {
                    n["$initial_" + ki(a)] = o
                })
            }
            return t && T(this._searchInfoFromReferrer(t), function(o, a) {
                n["$initial_" + ki(a)] = o
            }), n
        },
        timezone: function() {
            try {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch {
                return
            }
        },
        timezoneOffset: function() {
            try {
                return new Date().getTimezoneOffset()
            } catch {
                return
            }
        },
        properties: function() {
            if (!j) return {};
            var [r, e] = D.os(j);
            return X(zt({
                $os: r,
                $os_version: e,
                $browser: D.browser(j, navigator.vendor),
                $device: D.device(j),
                $device_type: D.deviceType(j),
                $timezone: D.timezone(),
                $timezone_offset: D.timezoneOffset()
            }), {
                $current_url: Q == null ? void 0 : Q.href,
                $host: Q == null ? void 0 : Q.host,
                $pathname: Q == null ? void 0 : Q.pathname,
                $raw_user_agent: j.length > 1e3 ? j.substring(0, 997) + "..." : j,
                $browser_version: D.browserVersion(j, navigator.vendor),
                $browser_language: D.browserLanguage(),
                $browser_language_prefix: D.browserLanguagePrefix(),
                $screen_height: p == null ? void 0 : p.screen.height,
                $screen_width: p == null ? void 0 : p.screen.width,
                $viewport_height: p == null ? void 0 : p.innerHeight,
                $viewport_width: p == null ? void 0 : p.innerWidth,
                $lib: "web",
                $lib_version: Se.LIB_VERSION,
                $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                $time: Date.now() / 1e3
            })
        },
        people_properties: function() {
            if (!j) return {};
            var [r, e] = D.os(j);
            return X(zt({
                $os: r,
                $os_version: e,
                $browser: D.browser(j, navigator.vendor)
            }), {
                $browser_version: D.browserVersion(j, navigator.vendor)
            })
        }
    },
    Ks = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
class vi {
    constructor(e) {
        this.config = e, this.props = {}, this.campaign_params_saved = !1, this.name = (t => {
            var i = "";
            return t.token && (i = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + i + "_posthog"
        })(e), this.storage = this.buildStorage(e), this.load(), e.debug && k.info("Persistence loaded", e.persistence, f({}, this.props)), this.update_config(e, e), this.save()
    }
    buildStorage(e) {
        Ks.indexOf(e.persistence.toLowerCase()) === -1 && (k.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
        var t = e.persistence.toLowerCase();
        return t === "localstorage" && U.is_supported() ? U : t === "localstorage+cookie" && Tt.is_supported() ? Tt : t === "sessionstorage" && W.is_supported() ? W : t === "memory" ? Ds : t === "cookie" ? xe : Tt.is_supported() ? Tt : xe
    }
    properties() {
        var e = {};
        return T(this.props, function(t, i) {
            if (i === et && q(t))
                for (var n = Object.keys(t), s = 0; s < n.length; s++) e["$feature/".concat(n[s])] = t[n[s]];
            else a = i, l = !1, (Ae(o = Ps) ? l : dr && o.indexOf === dr ? o.indexOf(a) != -1 : (T(o, function(c) {
                if (l || (l = c === a)) return Ut
            }), l)) || (e[i] = t);
            var o, a, l
        }), e
    }
    load() {
        if (!this.disabled) {
            var e = this.storage.parse(this.name);
            e && (this.props = X({}, e))
        }
    }
    save() {
        this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug)
    }
    remove() {
        this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
    }
    clear() {
        this.remove(), this.props = {}
    }
    register_once(e, t, i) {
        if (q(e)) {
            S(t) && (t = "None"), this.expire_days = S(i) ? this.default_expiry : i;
            var n = !1;
            if (T(e, (s, o) => {
                    this.props.hasOwnProperty(o) && this.props[o] !== t || (this.props[o] = s, n = !0)
                }), n) return this.save(), !0
        }
        return !1
    }
    register(e, t) {
        if (q(e)) {
            this.expire_days = S(t) ? this.default_expiry : t;
            var i = !1;
            if (T(e, (n, s) => {
                    e.hasOwnProperty(s) && this.props[s] !== n && (this.props[s] = n, i = !0)
                }), i) return this.save(), !0
        }
        return !1
    }
    unregister(e) {
        e in this.props && (delete this.props[e], this.save())
    }
    update_campaign_params() {
        if (!this.campaign_params_saved) {
            var e = D.campaignParams(this.config.custom_campaign_params);
            Qe(zt(e)) || this.register(e), this.campaign_params_saved = !0
        }
    }
    update_search_keyword() {
        this.register(D.searchInfo())
    }
    update_referrer_info() {
        this.register_once(D.referrerInfo(), void 0)
    }
    set_initial_person_info() {
        this.props[Fi] || this.props[Ti] || this.register_once({
            [$i]: D.initialPersonInfo()
        }, void 0)
    }
    get_referrer_info() {
        return zt({
            $referrer: this.props.$referrer,
            $referring_domain: this.props.$referring_domain
        })
    }
    get_initial_props() {
        var e = {};
        T([Ti, Fi], n => {
            var s = this.props[n];
            s && T(s, function(o, a) {
                e["$initial_" + ki(a)] = o
            })
        });
        var t = this.props[$i];
        if (t) {
            var i = D.initialPersonPropsFromInfo(t);
            X(e, i)
        }
        return e
    }
    safe_merge(e) {
        return T(this.props, function(t, i) {
            i in e || (e[i] = t)
        }), e
    }
    update_config(e, t) {
        if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
            var i = this.buildStorage(e),
                n = this.props;
            this.clear(), this.storage = i, this.props = n, this.save()
        }
    }
    set_disabled(e) {
        this.disabled = e, this.disabled ? this.remove() : this.save()
    }
    set_cross_subdomain(e) {
        e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
    }
    get_cross_subdomain() {
        return !!this.cross_subdomain
    }
    set_secure(e) {
        e !== this.secure && (this.secure = e, this.remove(), this.save())
    }
    set_event_timer(e, t) {
        var i = this.props[gt] || {};
        i[e] = t, this.props[gt] = i, this.save()
    }
    remove_event_timer(e) {
        var t = (this.props[gt] || {})[e];
        return S(t) || (delete this.props[gt][e], this.save()), t
    }
    get_property(e) {
        return this.props[e]
    }
    set_property(e, t) {
        this.props[e] = t, this.save()
    }
}

function Xt(r) {
    var e, t;
    return ((e = JSON.stringify(r, (t = [], function(i, n) {
        if (q(n)) {
            for (; t.length > 0 && t[t.length - 1] !== this;) t.pop();
            return t.includes(n) ? "[Circular]" : (t.push(n), n)
        }
        return n
    }))) === null || e === void 0 ? void 0 : e.length) || 0
}

function Li(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66060288e-1;
    if (r.size >= e && r.data.length > 1) {
        var t = Math.floor(r.data.length / 2),
            i = r.data.slice(0, t),
            n = r.data.slice(t);
        return [Li({
            size: Xt(i),
            data: i,
            sessionId: r.sessionId,
            windowId: r.windowId
        }), Li({
            size: Xt(n),
            data: n,
            sessionId: r.sessionId,
            windowId: r.windowId
        })].flatMap(s => s)
    }
    return [r]
}
var we = (r => (r[r.DomContentLoaded = 0] = "DomContentLoaded", r[r.Load = 1] = "Load", r[r.FullSnapshot = 2] = "FullSnapshot", r[r.IncrementalSnapshot = 3] = "IncrementalSnapshot", r[r.Meta = 4] = "Meta", r[r.Custom = 5] = "Custom", r[r.Plugin = 6] = "Plugin", r))(we || {}),
    de = (r => (r[r.Mutation = 0] = "Mutation", r[r.MouseMove = 1] = "MouseMove", r[r.MouseInteraction = 2] = "MouseInteraction", r[r.Scroll = 3] = "Scroll", r[r.ViewportResize = 4] = "ViewportResize", r[r.Input = 5] = "Input", r[r.TouchMove = 6] = "TouchMove", r[r.MediaInteraction = 7] = "MediaInteraction", r[r.StyleSheetRule = 8] = "StyleSheetRule", r[r.CanvasMutation = 9] = "CanvasMutation", r[r.Font = 10] = "Font", r[r.Log = 11] = "Log", r[r.Drag = 12] = "Drag", r[r.StyleDeclaration = 13] = "StyleDeclaration", r[r.Selection = 14] = "Selection", r[r.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", r[r.CustomElement = 16] = "CustomElement", r))(de || {});

function Lr(r) {
    var e;
    return r instanceof Element && (r.id === yn || !((e = r.closest) === null || e === void 0 || !e.call(r, ".toolbar-global-fade-container")))
}

function si(r) {
    return !!r && r.nodeType === 1
}

function Me(r, e) {
    return !!r && !!r.tagName && r.tagName.toLowerCase() === e.toLowerCase()
}

function Dn(r) {
    return !!r && r.nodeType === 3
}

function Nn(r) {
    return !!r && r.nodeType === 11
}

function er(r) {
    return r ? ri(r).split(/\s+/) : []
}

function Dr(r) {
    var e = p == null ? void 0 : p.location.href;
    return !!(e && r && r.some(t => e.match(t)))
}

function Zt(r) {
    var e = "";
    switch (typeof r.className) {
        case "string":
            e = r.className;
            break;
        case "object":
            e = (r.className && "baseVal" in r.className ? r.className.baseVal : null) || r.getAttribute("class") || "";
            break;
        default:
            e = ""
    }
    return er(e)
}

function qn(r) {
    return M(r) ? null : ri(r).split(/(\s+)/).filter(e => at(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
}

function oi(r) {
    var e = "";
    return Ni(r) && !Un(r) && r.childNodes && r.childNodes.length && T(r.childNodes, function(t) {
        var i;
        Dn(t) && t.textContent && (e += (i = qn(t.textContent)) !== null && i !== void 0 ? i : "")
    }), ri(e)
}

function Bn(r) {
    return S(r.target) ? r.srcElement || null : (e = r.target) !== null && e !== void 0 && e.shadowRoot ? r.composedPath()[0] || null : r.target || null;
    var e
}
var Di = ["a", "button", "form", "input", "select", "textarea", "label"];

function Hn(r) {
    var e = r.parentNode;
    return !(!e || !si(e)) && e
}

function Xs(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0,
        n = arguments.length > 4 ? arguments[4] : void 0;
    if (!p || !r || Me(r, "html") || !si(r) || t != null && t.url_allowlist && !Dr(t.url_allowlist) || t != null && t.url_ignorelist && Dr(t.url_ignorelist)) return !1;
    if (t != null && t.dom_event_allowlist) {
        var s = t.dom_event_allowlist;
        if (s && !s.some(h => e.type === h)) return !1
    }
    for (var o = !1, a = [r], l = !0, c = r; c.parentNode && !Me(c, "body");)
        if (Nn(c.parentNode)) a.push(c.parentNode.host), c = c.parentNode.host;
        else {
            if (!(l = Hn(c))) break;
            if (i || Di.indexOf(l.tagName.toLowerCase()) > -1) o = !0;
            else {
                var d = p.getComputedStyle(l);
                d && d.getPropertyValue("cursor") === "pointer" && (o = !0)
            }
            a.push(l), c = l
        }
    if (! function(h, g) {
            var v = g == null ? void 0 : g.element_allowlist;
            if (S(v)) return !0;
            var E = function(x) {
                if (v.some(C => x.tagName.toLowerCase() === C)) return {
                    v: !0
                }
            };
            for (var y of h) {
                var b = E(y);
                if (typeof b == "object") return b.v
            }
            return !1
        }(a, t) || ! function(h, g) {
            var v = g == null ? void 0 : g.css_selector_allowlist;
            if (S(v)) return !0;
            var E = function(x) {
                if (v.some(C => x.matches(C))) return {
                    v: !0
                }
            };
            for (var y of h) {
                var b = E(y);
                if (typeof b == "object") return b.v
            }
            return !1
        }(a, t)) return !1;
    var u = p.getComputedStyle(r);
    if (u && u.getPropertyValue("cursor") === "pointer" && e.type === "click") return !0;
    var _ = r.tagName.toLowerCase();
    switch (_) {
        case "html":
            return !1;
        case "form":
            return (n || ["submit"]).indexOf(e.type) >= 0;
        case "input":
        case "select":
        case "textarea":
            return (n || ["change", "click"]).indexOf(e.type) >= 0;
        default:
            return o ? (n || ["click"]).indexOf(e.type) >= 0 : (n || ["click"]).indexOf(e.type) >= 0 && (Di.indexOf(_) > -1 || r.getAttribute("contenteditable") === "true")
    }
}

function Ni(r) {
    for (var e = r; e.parentNode && !Me(e, "body"); e = e.parentNode) {
        var t = Zt(e);
        if (F(t, "ph-sensitive") || F(t, "ph-no-capture")) return !1
    }
    if (F(Zt(r), "ph-include")) return !0;
    var i = r.type || "";
    if (G(i)) switch (i.toLowerCase()) {
        case "hidden":
        case "password":
            return !1
    }
    var n = r.name || r.id || "";
    return !(G(n) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(n.replace(/[^a-zA-Z0-9]/g, "")))
}

function Un(r) {
    return !!(Me(r, "input") && !["button", "checkbox", "submit", "reset"].includes(r.type) || Me(r, "select") || Me(r, "textarea") || r.getAttribute("contenteditable") === "true")
}
var zn = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
    Zs = new RegExp("^(?:".concat(zn, ")$")),
    Qs = new RegExp(zn),
    jn = "\\d{3}-?\\d{2}-?\\d{4}",
    eo = new RegExp("^(".concat(jn, ")$")),
    to = new RegExp("(".concat(jn, ")"));

function at(r) {
    var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    return !(M(r) || G(r) && (r = ri(r), (e ? Zs : Qs).test((r || "").replace(/[- ]/g, "")) || (e ? eo : to).test(r)))
}

function Wn(r) {
    var e = oi(r);
    return at(e = "".concat(e, " ").concat(Gn(r)).trim()) ? e : ""
}

function Gn(r) {
    var e = "";
    return r && r.childNodes && r.childNodes.length && T(r.childNodes, function(t) {
        var i;
        if (t && ((i = t.tagName) === null || i === void 0 ? void 0 : i.toLowerCase()) === "span") try {
            var n = oi(t);
            e = "".concat(e, " ").concat(n).trim(), t.childNodes && t.childNodes.length && (e = "".concat(e, " ").concat(Gn(t)).trim())
        } catch (s) {
            k.error("[AutoCapture]", s)
        }
    }), e
}

function io(r) {
    return function(e) {
        var t = e.map(i => {
            var n, s, o = "";
            if (i.tag_name && (o += i.tag_name), i.attr_class)
                for (var a of (i.attr_class.sort(), i.attr_class)) o += ".".concat(a.replace(/"/g, ""));
            var l = f(f(f(f({}, i.text ? {
                    text: i.text
                } : {}), {}, {
                    "nth-child": (n = i.nth_child) !== null && n !== void 0 ? n : 0,
                    "nth-of-type": (s = i.nth_of_type) !== null && s !== void 0 ? s : 0
                }, i.href ? {
                    href: i.href
                } : {}), i.attr_id ? {
                    attr_id: i.attr_id
                } : {}), i.attributes),
                c = {};
            return qt(l).sort((d, u) => {
                var [_] = d, [h] = u;
                return _.localeCompare(h)
            }).forEach(d => {
                var [u, _] = d;
                return c[Nr(u.toString())] = Nr(_.toString())
            }), o += ":", o += qt(l).map(d => {
                var [u, _] = d;
                return "".concat(u, '="').concat(_, '"')
            }).join("")
        });
        return t.join(";")
    }(function(e) {
        return e.map(t => {
            var i, n, s = {
                text: (i = t.$el_text) === null || i === void 0 ? void 0 : i.slice(0, 400),
                tag_name: t.tag_name,
                href: (n = t.attr__href) === null || n === void 0 ? void 0 : n.slice(0, 2048),
                attr_class: ro(t),
                attr_id: t.attr__id,
                nth_child: t.nth_child,
                nth_of_type: t.nth_of_type,
                attributes: {}
            };
            return qt(t).filter(o => {
                var [a] = o;
                return a.indexOf("attr__") === 0
            }).forEach(o => {
                var [a, l] = o;
                return s.attributes[a] = l
            }), s
        })
    }(r))
}

function Nr(r) {
    return r.replace(/"|\\"/g, '\\"')
}

function ro(r) {
    var e = r.attr__class;
    return e ? H(e) ? e : er(e) : void 0
}
var qi = "[SessionRecording]",
    Bi = "redacted",
    At = {
        initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
        maskRequestFn: r => r,
        recordHeaders: !1,
        recordBody: !1,
        recordInitialRequests: !1,
        recordPerformance: !1,
        performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
        payloadSizeLimitBytes: 1e6,
        payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "analytics.google.com"]
    },
    no = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
    so = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
    oo = ["/s/", "/e/", "/i/"];

function qr(r, e, t, i) {
    if (M(r)) return r;
    var n = (e == null ? void 0 : e["content-length"]) || function(s) {
        return new Blob([s]).size
    }(r);
    return G(n) && (n = parseInt(n)), n > t ? qi + " ".concat(i, " body too large to record (").concat(n, " bytes)") : r
}

function Br(r, e) {
    if (M(r)) return r;
    var t = r;
    return at(t, !1) || (t = qi + " " + e + " body " + Bi), T(so, i => {
        var n, s;
        (n = t) !== null && n !== void 0 && n.length && ((s = t) === null || s === void 0 ? void 0 : s.indexOf(i)) !== -1 && (t = qi + " " + e + " body " + Bi + " as might contain: " + i)
    }), t
}
var ao = (r, e) => {
    var t, i, n, s = {
            payloadSizeLimitBytes: At.payloadSizeLimitBytes,
            performanceEntryTypeToObserve: [...At.performanceEntryTypeToObserve],
            payloadHostDenyList: [...e.payloadHostDenyList || [], ...At.payloadHostDenyList]
        },
        o = r.session_recording.recordHeaders !== !1 && e.recordHeaders,
        a = r.session_recording.recordBody !== !1 && e.recordBody,
        l = r.capture_performance !== !1 && e.recordPerformance,
        c = (t = s, n = Math.min(1e6, (i = t.payloadSizeLimitBytes) !== null && i !== void 0 ? i : 1e6), _ => (_ != null && _.requestBody && (_.requestBody = qr(_.requestBody, _.requestHeaders, n, "Request")), _ != null && _.responseBody && (_.responseBody = qr(_.responseBody, _.responseHeaders, n, "Response")), _)),
        d = _ => {
            return c(((v, E) => {
                var y, b = it(v.name),
                    x = E.indexOf("http") === 0 ? (y = it(E)) === null || y === void 0 ? void 0 : y.pathname : E;
                x === "/" && (x = "");
                var C = b == null ? void 0 : b.pathname.replace(x || "", "");
                if (!(b && C && oo.some(R => C.indexOf(R) === 0))) return v
            })((g = (h = _).requestHeaders, M(g) || T(Object.keys(g ? ? {}), v => {
                no.includes(v.toLowerCase()) && (g[v] = Bi)
            }), h), r.api_host));
            var h, g
        },
        u = ae(r.session_recording.maskNetworkRequestFn);
    return u && ae(r.session_recording.maskCapturedNetworkRequestFn) && k.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), u && (r.session_recording.maskCapturedNetworkRequestFn = _ => {
        var h = r.session_recording.maskNetworkRequestFn({
            url: _.name
        });
        return f(f({}, _), {}, {
            name: h == null ? void 0 : h.url
        })
    }), s.maskRequestFn = ae(r.session_recording.maskCapturedNetworkRequestFn) ? _ => {
        var h, g, v, E = d(_);
        return E && (h = (g = (v = r.session_recording).maskCapturedNetworkRequestFn) === null || g === void 0 ? void 0 : g.call(v, E)) !== null && h !== void 0 ? h : void 0
    } : _ => function(h) {
        if (!S(h)) return h.requestBody = Br(h.requestBody, "Request"), h.responseBody = Br(h.responseBody, "Response"), h
    }(d(_)), f(f(f({}, At), s), {}, {
        recordHeaders: o,
        recordBody: a,
        recordPerformance: l,
        recordInitialRequests: l
    })
};

function fe(r, e, t, i, n) {
    return e > t && (k.warn("min cannot be greater than max."), e = t), K(r) ? r > t ? (i && k.warn(i + " cannot be  greater than max: " + t + ". Using max value instead."), t) : r < e ? (i && k.warn(i + " cannot be less than min: " + e + ". Using min value instead."), e) : r : (i && k.warn(i + " must be a number. using max or fallback. max: " + t + ", fallback: " + n), fe(n || t, e, t, i))
}
class lo {
    constructor(e) {
        var t, i, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        m(this, "bucketSize", 100), m(this, "refillRate", 10), m(this, "mutationBuckets", {}), m(this, "loggedTracker", {}), m(this, "refillBuckets", () => {
            Object.keys(this.mutationBuckets).forEach(s => {
                this.mutationBuckets[s] = this.mutationBuckets[s] + this.refillRate, this.mutationBuckets[s] >= this.bucketSize && delete this.mutationBuckets[s]
            })
        }), m(this, "getNodeOrRelevantParent", s => {
            var o = this.rrweb.mirror.getNode(s);
            if ((o == null ? void 0 : o.nodeName) !== "svg" && o instanceof Element) {
                var a = o.closest("svg");
                if (a) return [this.rrweb.mirror.getId(a), a]
            }
            return [s, o]
        }), m(this, "numberOfChanges", s => {
            var o, a, l, c, d, u, _, h;
            return ((o = (a = s.removes) === null || a === void 0 ? void 0 : a.length) !== null && o !== void 0 ? o : 0) + ((l = (c = s.attributes) === null || c === void 0 ? void 0 : c.length) !== null && l !== void 0 ? l : 0) + ((d = (u = s.texts) === null || u === void 0 ? void 0 : u.length) !== null && d !== void 0 ? d : 0) + ((_ = (h = s.adds) === null || h === void 0 ? void 0 : h.length) !== null && _ !== void 0 ? _ : 0)
        }), m(this, "throttleMutations", s => {
            if (s.type !== 3 || s.data.source !== 0) return s;
            var o = s.data,
                a = this.numberOfChanges(o);
            o.attributes && (o.attributes = o.attributes.filter(c => {
                var d, u, _, [h, g] = this.getNodeOrRelevantParent(c.id);
                return this.mutationBuckets[h] === 0 ? !1 : (this.mutationBuckets[h] = (d = this.mutationBuckets[h]) !== null && d !== void 0 ? d : this.bucketSize, this.mutationBuckets[h] = Math.max(this.mutationBuckets[h] - 1, 0), this.mutationBuckets[h] === 0 && (this.loggedTracker[h] || (this.loggedTracker[h] = !0, (u = (_ = this.options).onBlockedNode) === null || u === void 0 || u.call(_, h, g))), c)
            }));
            var l = this.numberOfChanges(o);
            return l !== 0 || a === l ? s : void 0
        }), this.rrweb = e, this.options = n, this.refillRate = fe((t = this.options.refillRate) !== null && t !== void 0 ? t : this.refillRate, 0, 100, "mutation throttling refill rate"), this.bucketSize = fe((i = this.options.bucketSize) !== null && i !== void 0 ? i : this.bucketSize, 0, 100, "mutation throttling bucket size"), setInterval(() => {
            this.refillBuckets()
        }, 1e3)
    }
}
var ue = Uint8Array,
    te = Uint16Array,
    lt = Uint32Array,
    tr = new ue([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
    ir = new ue([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
    Hr = new ue([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Vn = function(r, e) {
        for (var t = new te(31), i = 0; i < 31; ++i) t[i] = e += 1 << r[i - 1];
        var n = new lt(t[30]);
        for (i = 1; i < 30; ++i)
            for (var s = t[i]; s < t[i + 1]; ++s) n[s] = s - t[i] << 5 | i;
        return [t, n]
    },
    Jn = Vn(tr, 2),
    uo = Jn[0],
    Hi = Jn[1];
uo[28] = 258, Hi[258] = 28;
for (var Ur = Vn(ir, 0)[1], Yn = new te(32768), O = 0; O < 32768; ++O) {
    var De = (43690 & O) >>> 1 | (21845 & O) << 1;
    De = (61680 & (De = (52428 & De) >>> 2 | (13107 & De) << 2)) >>> 4 | (3855 & De) << 4, Yn[O] = ((65280 & De) >>> 8 | (255 & De) << 8) >>> 1
}
var yt = function(r, e, t) {
        for (var i = r.length, n = 0, s = new te(e); n < i; ++n) ++s[r[n] - 1];
        var o, a = new te(e);
        for (n = 0; n < e; ++n) a[n] = a[n - 1] + s[n - 1] << 1;
        for (o = new te(i), n = 0; n < i; ++n) o[n] = Yn[a[r[n] - 1]++] >>> 15 - r[n];
        return o
    },
    Je = new ue(288);
for (O = 0; O < 144; ++O) Je[O] = 8;
for (O = 144; O < 256; ++O) Je[O] = 9;
for (O = 256; O < 280; ++O) Je[O] = 7;
for (O = 280; O < 288; ++O) Je[O] = 8;
var Qt = new ue(32);
for (O = 0; O < 32; ++O) Qt[O] = 5;
var co = yt(Je, 9),
    ho = yt(Qt, 5),
    Kn = function(r) {
        return (r / 8 >> 0) + (7 & r && 1)
    },
    Xn = function(r, e, t) {
        (t == null || t > r.length) && (t = r.length);
        var i = new(r instanceof te ? te : r instanceof lt ? lt : ue)(t - e);
        return i.set(r.subarray(e, t)), i
    },
    be = function(r, e, t) {
        t <<= 7 & e;
        var i = e / 8 >> 0;
        r[i] |= t, r[i + 1] |= t >>> 8
    },
    dt = function(r, e, t) {
        t <<= 7 & e;
        var i = e / 8 >> 0;
        r[i] |= t, r[i + 1] |= t >>> 8, r[i + 2] |= t >>> 16
    },
    fi = function(r, e) {
        for (var t = [], i = 0; i < r.length; ++i) r[i] && t.push({
            s: i,
            f: r[i]
        });
        var n = t.length,
            s = t.slice();
        if (!n) return [new ue(0), 0];
        if (n == 1) {
            var o = new ue(t[0].s + 1);
            return o[t[0].s] = 1, [o, 1]
        }
        t.sort(function(R, L) {
            return R.f - L.f
        }), t.push({
            s: -1,
            f: 25001
        });
        var a = t[0],
            l = t[1],
            c = 0,
            d = 1,
            u = 2;
        for (t[0] = {
                s: -1,
                f: a.f + l.f,
                l: a,
                r: l
            }; d != n - 1;) a = t[t[c].f < t[u].f ? c++ : u++], l = t[c != d && t[c].f < t[u].f ? c++ : u++], t[d++] = {
            s: -1,
            f: a.f + l.f,
            l: a,
            r: l
        };
        var _ = s[0].s;
        for (i = 1; i < n; ++i) s[i].s > _ && (_ = s[i].s);
        var h = new te(_ + 1),
            g = Ui(t[d - 1], h, 0);
        if (g > e) {
            i = 0;
            var v = 0,
                E = g - e,
                y = 1 << E;
            for (s.sort(function(R, L) {
                    return h[L.s] - h[R.s] || R.f - L.f
                }); i < n; ++i) {
                var b = s[i].s;
                if (!(h[b] > e)) break;
                v += y - (1 << g - h[b]), h[b] = e
            }
            for (v >>>= E; v > 0;) {
                var x = s[i].s;
                h[x] < e ? v -= 1 << e - h[x]++ - 1 : ++i
            }
            for (; i >= 0 && v; --i) {
                var C = s[i].s;
                h[C] == e && (--h[C], ++v)
            }
            g = e
        }
        return [new ue(h), g]
    },
    Ui = function(r, e, t) {
        return r.s == -1 ? Math.max(Ui(r.l, e, t + 1), Ui(r.r, e, t + 1)) : e[r.s] = t
    },
    zr = function(r) {
        for (var e = r.length; e && !r[--e];);
        for (var t = new te(++e), i = 0, n = r[0], s = 1, o = function(l) {
                t[i++] = l
            }, a = 1; a <= e; ++a)
            if (r[a] == n && a != e) ++s;
            else {
                if (!n && s > 2) {
                    for (; s > 138; s -= 138) o(32754);
                    s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                } else if (s > 3) {
                    for (o(n), --s; s > 6; s -= 6) o(8304);
                    s > 2 && (o(s - 3 << 5 | 8208), s = 0)
                }
                for (; s--;) o(n);
                s = 1, n = r[a]
            }
        return [t.subarray(0, i), e]
    },
    ht = function(r, e) {
        for (var t = 0, i = 0; i < e.length; ++i) t += r[i] * e[i];
        return t
    },
    zi = function(r, e, t) {
        var i = t.length,
            n = Kn(e + 2);
        r[n] = 255 & i, r[n + 1] = i >>> 8, r[n + 2] = 255 ^ r[n], r[n + 3] = 255 ^ r[n + 1];
        for (var s = 0; s < i; ++s) r[n + s + 4] = t[s];
        return 8 * (n + 4 + i)
    },
    jr = function(r, e, t, i, n, s, o, a, l, c, d) {
        be(e, d++, t), ++n[256];
        for (var u = fi(n, 15), _ = u[0], h = u[1], g = fi(s, 15), v = g[0], E = g[1], y = zr(_), b = y[0], x = y[1], C = zr(v), R = C[0], L = C[1], $ = new te(19), P = 0; P < b.length; ++P) $[31 & b[P]]++;
        for (P = 0; P < R.length; ++P) $[31 & R[P]]++;
        for (var A = fi($, 7), B = A[0], ie = A[1], se = 19; se > 4 && !B[Hr[se - 1]]; --se);
        var me, he, _e, Ye, Ce = c + 5 << 3,
            Oe = ht(n, Je) + ht(s, Qt) + o,
            pe = ht(n, _) + ht(s, v) + o + 14 + 3 * se + ht($, B) + (2 * $[16] + 3 * $[17] + 7 * $[18]);
        if (Ce <= Oe && Ce <= pe) return zi(e, d, r.subarray(l, l + c));
        if (be(e, d, 1 + (pe < Oe)), d += 2, pe < Oe) {
            me = yt(_, h), he = _, _e = yt(v, E), Ye = v;
            var Ie = yt(B, ie);
            for (be(e, d, x - 257), be(e, d + 5, L - 1), be(e, d + 10, se - 4), d += 14, P = 0; P < se; ++P) be(e, d + 3 * P, B[Hr[P]]);
            d += 3 * se;
            for (var Ke = [b, R], J = 0; J < 2; ++J) {
                var oe = Ke[J];
                for (P = 0; P < oe.length; ++P) {
                    var re = 31 & oe[P];
                    be(e, d, Ie[re]), d += B[re], re > 15 && (be(e, d, oe[P] >>> 5 & 127), d += oe[P] >>> 12)
                }
            }
        } else me = co, he = Je, _e = ho, Ye = Qt;
        for (P = 0; P < a; ++P)
            if (i[P] > 255) {
                re = i[P] >>> 18 & 31, dt(e, d, me[re + 257]), d += he[re + 257], re > 7 && (be(e, d, i[P] >>> 23 & 31), d += tr[re]);
                var Xe = 31 & i[P];
                dt(e, d, _e[Xe]), d += Ye[Xe], Xe > 3 && (dt(e, d, i[P] >>> 5 & 8191), d += ir[Xe])
            } else dt(e, d, me[i[P]]), d += he[i[P]];
        return dt(e, d, me[256]), d + he[256]
    },
    _o = new lt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
    po = function() {
        for (var r = new lt(256), e = 0; e < 256; ++e) {
            for (var t = e, i = 9; --i;) t = (1 & t && 3988292384) ^ t >>> 1;
            r[e] = t
        }
        return r
    }(),
    go = function() {
        var r = 4294967295;
        return {
            p: function(e) {
                for (var t = r, i = 0; i < e.length; ++i) t = po[255 & t ^ e[i]] ^ t >>> 8;
                r = t
            },
            d: function() {
                return 4294967295 ^ r
            }
        }
    },
    vo = function(r, e, t, i, n) {
        return function(s, o, a, l, c, d) {
            var u = s.length,
                _ = new ue(l + u + 5 * (1 + Math.floor(u / 7e3)) + c),
                h = _.subarray(l, _.length - c),
                g = 0;
            if (!o || u < 8)
                for (var v = 0; v <= u; v += 65535) {
                    var E = v + 65535;
                    E < u ? g = zi(h, g, s.subarray(v, E)) : (h[v] = d, g = zi(h, g, s.subarray(v, u)))
                } else {
                    for (var y = _o[o - 1], b = y >>> 13, x = 8191 & y, C = (1 << a) - 1, R = new te(32768), L = new te(C + 1), $ = Math.ceil(a / 3), P = 2 * $, A = function(ui) {
                            return (s[ui] ^ s[ui + 1] << $ ^ s[ui + 2] << P) & C
                        }, B = new lt(25e3), ie = new te(288), se = new te(32), me = 0, he = 0, _e = (v = 0, 0), Ye = 0, Ce = 0; v < u; ++v) {
                        var Oe = A(v),
                            pe = 32767 & v,
                            Ie = L[Oe];
                        if (R[pe] = Ie, L[Oe] = pe, Ye <= v) {
                            var Ke = u - v;
                            if ((me > 7e3 || _e > 24576) && Ke > 423) {
                                g = jr(s, h, 0, B, ie, se, he, _e, Ce, v - Ce, g), _e = me = he = 0, Ce = v;
                                for (var J = 0; J < 286; ++J) ie[J] = 0;
                                for (J = 0; J < 30; ++J) se[J] = 0
                            }
                            var oe = 2,
                                re = 0,
                                Xe = x,
                                Pe = pe - Ie & 32767;
                            if (Ke > 2 && Oe == A(v - Pe))
                                for (var fs = Math.min(b, Ke) - 1, ms = Math.min(32767, v), bs = Math.min(258, Ke); Pe <= ms && --Xe && pe != Ie;) {
                                    if (s[v + oe] == s[v + oe - Pe]) {
                                        for (var Re = 0; Re < bs && s[v + Re] == s[v + Re - Pe]; ++Re);
                                        if (Re > oe) {
                                            if (oe = Re, re = Pe, Re > fs) break;
                                            var ys = Math.min(Pe, Re - 2),
                                                or = 0;
                                            for (J = 0; J < ys; ++J) {
                                                var li = v - Pe + J + 32768 & 32767,
                                                    ar = li - R[li] + 32768 & 32767;
                                                ar > or && (or = ar, Ie = li)
                                            }
                                        }
                                    }
                                    Pe += (pe = Ie) - (Ie = R[pe]) + 32768 & 32767
                                }
                            if (re) {
                                B[_e++] = 268435456 | Hi[oe] << 18 | Ur[re];
                                var lr = 31 & Hi[oe],
                                    ur = 31 & Ur[re];
                                he += tr[lr] + ir[ur], ++ie[257 + lr], ++se[ur], Ye = v + oe, ++me
                            } else B[_e++] = s[v], ++ie[s[v]]
                        }
                    }
                    g = jr(s, h, d, B, ie, se, he, _e, Ce, v - Ce, g)
                }
            return Xn(_, 0, l + Kn(g) + c)
        }(r, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(r.length)))) : 12 + e.mem, t, i, !n)
    },
    ji = function(r, e, t) {
        for (; t; ++e) r[e] = t, t >>>= 8
    },
    fo = function(r, e) {
        var t = e.filename;
        if (r[0] = 31, r[1] = 139, r[2] = 8, r[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0, r[9] = 3, e.mtime != 0 && ji(r, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), t) {
            r[3] = 8;
            for (var i = 0; i <= t.length; ++i) r[i + 10] = t.charCodeAt(i)
        }
    },
    mo = function(r) {
        return 10 + (r.filename && r.filename.length + 1 || 0)
    };

function Zn(r, e) {
    e === void 0 && (e = {});
    var t = go(),
        i = r.length;
    t.p(r);
    var n = vo(r, e, mo(e), 8),
        s = n.length;
    return fo(n, e), ji(n, s - 8, t.d()), ji(n, s - 4, i), n
}

function Qn(r, e) {
    var t = r.length;
    if (typeof TextEncoder < "u") return new TextEncoder().encode(r);
    for (var i = new ue(r.length + (r.length >>> 1)), n = 0, s = function(c) {
            i[n++] = c
        }, o = 0; o < t; ++o) {
        if (n + 5 > i.length) {
            var a = new ue(n + 8 + (t - o << 1));
            a.set(i), i = a
        }
        var l = r.charCodeAt(o);
        l < 128 || e ? s(l) : l < 2048 ? (s(192 | l >>> 6), s(128 | 63 & l)) : l > 55295 && l < 57344 ? (s(240 | (l = 65536 + (1047552 & l) | 1023 & r.charCodeAt(++o)) >>> 18), s(128 | l >>> 12 & 63), s(128 | l >>> 6 & 63), s(128 | 63 & l)) : (s(224 | l >>> 12), s(128 | l >>> 6 & 63), s(128 | 63 & l))
    }
    return Xn(i, 0, n)
}
var bt = "[SessionRecording]",
    V = Z(bt),
    bo = 3e5,
    yo = [de.MouseMove, de.MouseInteraction, de.Scroll, de.ViewportResize, de.Input, de.TouchMove, de.MediaInteraction, de.Drag],
    Wr = r => ({
        rrwebMethod: r,
        enqueuedAt: Date.now(),
        attempt: 1
    });

function Ne(r) {
    return function(e, t) {
        for (var i = "", n = 0; n < e.length;) {
            var s = e[n++];
            s < 128 || t ? i += String.fromCharCode(s) : s < 224 ? i += String.fromCharCode((31 & s) << 6 | 63 & e[n++]) : s < 240 ? i += String.fromCharCode((15 & s) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) : (s = ((15 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536, i += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s))
        }
        return i
    }(Zn(Qn(JSON.stringify(r))), !0)
}

function Gr(r) {
    return r.type === we.Custom && r.data.tag === "sessionIdle"
}

function Vr(r, e) {
    return e.some(t => t.matching === "regex" && new RegExp(t.url).test(r))
}
class wo {
    get sessionIdleThresholdMilliseconds() {
        return this.instance.config.session_recording.session_idle_threshold_ms || 3e5
    }
    get rrwebRecord() {
        var e, t;
        return I == null || (e = I.__PosthogExtensions__) === null || e === void 0 || (t = e.rrweb) === null || t === void 0 ? void 0 : t.record
    }
    get started() {
        return this._captureStarted
    }
    get sessionManager() {
        if (!this.instance.sessionManager) throw new Error(bt + " must be started with a valid sessionManager.");
        return this.instance.sessionManager
    }
    get fullSnapshotIntervalMillis() {
        var e, t;
        return this.triggerStatus === "trigger_pending" ? 6e4 : (e = (t = this.instance.config.session_recording) === null || t === void 0 ? void 0 : t.full_snapshot_interval_millis) !== null && e !== void 0 ? e : bo
    }
    get isSampled() {
        var e = this.instance.get_property(vt);
        return We(e) ? e : null
    }
    get sessionDuration() {
        var e, t, i = (e = this.buffer) === null || e === void 0 ? void 0 : e.data[((t = this.buffer) === null || t === void 0 ? void 0 : t.data.length) - 1],
            {
                sessionStartTimestamp: n
            } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
        return i ? i.timestamp - n : null
    }
    get isRecordingEnabled() {
        var e = !!this.instance.get_property(Ci),
            t = !this.instance.config.disable_session_recording;
        return p && e && t
    }
    get isConsoleLogCaptureEnabled() {
        var e = !!this.instance.get_property(wr),
            t = this.instance.config.enable_recording_console_log;
        return t ? ? e
    }
    get canvasRecording() {
        var e, t, i, n, s, o, a = this.instance.config.session_recording.captureCanvas,
            l = this.instance.get_property(Sr),
            c = (e = (t = a == null ? void 0 : a.recordCanvas) !== null && t !== void 0 ? t : l == null ? void 0 : l.enabled) !== null && e !== void 0 && e,
            d = (i = (n = a == null ? void 0 : a.canvasFps) !== null && n !== void 0 ? n : l == null ? void 0 : l.fps) !== null && i !== void 0 ? i : 0,
            u = (s = (o = a == null ? void 0 : a.canvasQuality) !== null && o !== void 0 ? o : l == null ? void 0 : l.quality) !== null && s !== void 0 ? s : 0;
        return {
            enabled: c,
            fps: fe(d, 0, 12, "canvas recording fps"),
            quality: fe(u, 0, 1, "canvas recording quality")
        }
    }
    get networkPayloadCapture() {
        var e, t, i = this.instance.get_property(Er),
            n = {
                recordHeaders: (e = this.instance.config.session_recording) === null || e === void 0 ? void 0 : e.recordHeaders,
                recordBody: (t = this.instance.config.session_recording) === null || t === void 0 ? void 0 : t.recordBody
            },
            s = (n == null ? void 0 : n.recordHeaders) || (i == null ? void 0 : i.recordHeaders),
            o = (n == null ? void 0 : n.recordBody) || (i == null ? void 0 : i.recordBody),
            a = q(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
            l = !!(We(a) ? a : i != null && i.capturePerformance);
        return s || o || l ? {
            recordHeaders: s,
            recordBody: o,
            recordPerformance: l
        } : void 0
    }
    get sampleRate() {
        var e = this.instance.get_property(kr);
        return K(e) ? e : null
    }
    get minimumDuration() {
        var e = this.instance.get_property(xr);
        return K(e) ? e : null
    }
    get status() {
        return this.receivedDecide ? this.isRecordingEnabled ? this._urlBlocked ? "paused" : M(this._linkedFlag) || this._linkedFlagSeen ? this.triggerStatus === "trigger_pending" ? "buffering" : We(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
    }
    get urlTriggerStatus() {
        var e;
        return this._urlTriggers.length === 0 ? "trigger_disabled" : ((e = this.instance) === null || e === void 0 ? void 0 : e.get_property(di)) === this.sessionId ? "trigger_activated" : "trigger_pending"
    }
    get eventTriggerStatus() {
        var e;
        return this._eventTriggers.length === 0 ? "trigger_disabled" : ((e = this.instance) === null || e === void 0 ? void 0 : e.get_property(hi)) === this.sessionId ? "trigger_activated" : "trigger_pending"
    }
    get triggerStatus() {
        var e = this.eventTriggerStatus === "trigger_activated" || this.urlTriggerStatus === "trigger_activated",
            t = this.eventTriggerStatus === "trigger_pending" || this.urlTriggerStatus === "trigger_pending";
        return e ? "trigger_activated" : t ? "trigger_pending" : "trigger_disabled"
    }
    constructor(e) {
        if (m(this, "queuedRRWebEvents", []), m(this, "isIdle", !1), m(this, "_linkedFlagSeen", !1), m(this, "_lastActivityTimestamp", Date.now()), m(this, "_linkedFlag", null), m(this, "_removePageViewCaptureHook", void 0), m(this, "_onSessionIdListener", void 0), m(this, "_persistDecideOnSessionListener", void 0), m(this, "_samplingSessionListener", void 0), m(this, "_urlTriggers", []), m(this, "_urlBlocklist", []), m(this, "_urlBlocked", !1), m(this, "_eventTriggers", []), m(this, "_removeEventTriggerCaptureHook", void 0), m(this, "_forceAllowLocalhostNetworkCapture", !1), m(this, "_onBeforeUnload", () => {
                this._flushBuffer()
            }), m(this, "_onOffline", () => {
                this._tryAddCustomEvent("browser offline", {})
            }), m(this, "_onOnline", () => {
                this._tryAddCustomEvent("browser online", {})
            }), m(this, "_onVisibilityChange", () => {
                if (w != null && w.visibilityState) {
                    var n = "window " + w.visibilityState;
                    this._tryAddCustomEvent(n, {})
                }
            }), this.instance = e, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, !this.instance.sessionManager) throw V.error("started without valid sessionManager"), new Error(bt + " started without valid sessionManager. This is a bug.");
        if (this.instance.config.__preview_experimental_cookieless_mode) throw new Error(bt + " cannot be used with __preview_experimental_cookieless_mode.");
        var {
            sessionId: t,
            windowId: i
        } = this.sessionManager.checkAndGetSessionAndWindowId();
        this.sessionId = t, this.windowId = i, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && V.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"))
    }
    startIfEnabledOrStop(e) {
        this.isRecordingEnabled ? (this._startCapture(e), p == null || p.addEventListener("beforeunload", this._onBeforeUnload), p == null || p.addEventListener("offline", this._onOffline), p == null || p.addEventListener("online", this._onOnline), p == null || p.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), this._addEventTriggerListener(), M(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance.on("eventCaptured", t => {
            try {
                if (t.event === "$pageview") {
                    var i = t != null && t.properties.$current_url ? this._maskUrl(t == null ? void 0 : t.properties.$current_url) : "";
                    if (!i) return;
                    this._tryAddCustomEvent("$pageview", {
                        href: i
                    })
                }
            } catch (n) {
                V.error("Could not add $pageview to rrweb session", n)
            }
        })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((t, i, n) => {
            var s, o, a, l;
            n && (this._tryAddCustomEvent("$session_id_change", {
                sessionId: t,
                windowId: i,
                changeReason: n
            }), (s = this.instance) === null || s === void 0 || (o = s.persistence) === null || o === void 0 || o.unregister(hi), (a = this.instance) === null || a === void 0 || (l = a.persistence) === null || l === void 0 || l.unregister(di))
        }))) : this.stopRecording()
    }
    stopRecording() {
        var e, t, i, n;
        this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, p == null || p.removeEventListener("beforeunload", this._onBeforeUnload), p == null || p.removeEventListener("offline", this._onOffline), p == null || p.removeEventListener("online", this._onOnline), p == null || p.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), (e = this._removePageViewCaptureHook) === null || e === void 0 || e.call(this), this._removePageViewCaptureHook = void 0, (t = this._removeEventTriggerCaptureHook) === null || t === void 0 || t.call(this), this._removeEventTriggerCaptureHook = void 0, (i = this._onSessionIdListener) === null || i === void 0 || i.call(this), this._onSessionIdListener = void 0, (n = this._samplingSessionListener) === null || n === void 0 || n.call(this), this._samplingSessionListener = void 0, V.info("stopped"))
    }
    makeSamplingDecision(e) {
        var t, i = this.sessionId !== e,
            n = this.sampleRate;
        if (K(n)) {
            var s, o = this.isSampled,
                a = i || !We(o);
            a ? s = Math.random() < n : s = o, a && (s ? this._reportStarted("sampled") : V.warn("Sample rate (".concat(n, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                sampleRate: n,
                isSampled: s
            })), (t = this.instance.persistence) === null || t === void 0 || t.register({
                [vt]: s
            })
        } else {
            var l;
            (l = this.instance.persistence) === null || l === void 0 || l.register({
                [vt]: null
            })
        }
    }
    onRemoteConfig(e) {
        var t, i, n, s, o, a;
        if (this._tryAddCustomEvent("$remote_config_received", e), this._persistRemoteConfig(e), this._linkedFlag = ((t = e.sessionRecording) === null || t === void 0 ? void 0 : t.linkedFlag) || null, (i = e.sessionRecording) !== null && i !== void 0 && i.endpoint && (this._endpoint = (a = e.sessionRecording) === null || a === void 0 ? void 0 : a.endpoint), this._setupSampling(), !M(this._linkedFlag) && !this._linkedFlagSeen) {
            var l = G(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                c = G(this._linkedFlag) ? null : this._linkedFlag.variant;
            this.instance.onFeatureFlags((d, u) => {
                var _ = q(u) && l in u,
                    h = c ? u[l] === c : _;
                h && this._reportStarted("linked_flag_matched", {
                    linkedFlag: l,
                    linkedVariant: c
                }), this._linkedFlagSeen = h
            })
        }(n = e.sessionRecording) !== null && n !== void 0 && n.urlTriggers && (this._urlTriggers = e.sessionRecording.urlTriggers), (s = e.sessionRecording) !== null && s !== void 0 && s.urlBlocklist && (this._urlBlocklist = e.sessionRecording.urlBlocklist), (o = e.sessionRecording) !== null && o !== void 0 && o.eventTriggers && (this._eventTriggers = e.sessionRecording.eventTriggers), this.receivedDecide = !0, this.startIfEnabledOrStop()
    }
    _setupSampling() {
        K(this.sampleRate) && M(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(e => {
            this.makeSamplingDecision(e)
        }))
    }
    _persistRemoteConfig(e) {
        if (this.instance.persistence) {
            var t, i = this.instance.persistence,
                n = () => {
                    var s, o, a, l, c, d, u, _, h = (s = e.sessionRecording) === null || s === void 0 ? void 0 : s.sampleRate,
                        g = M(h) ? null : parseFloat(h),
                        v = (o = e.sessionRecording) === null || o === void 0 ? void 0 : o.minimumDurationMilliseconds;
                    i.register({
                        [Ci]: !!e.sessionRecording,
                        [wr]: (a = e.sessionRecording) === null || a === void 0 ? void 0 : a.consoleLogRecordingEnabled,
                        [Er]: f({
                            capturePerformance: e.capturePerformance
                        }, (l = e.sessionRecording) === null || l === void 0 ? void 0 : l.networkPayloadCapture),
                        [Sr]: {
                            enabled: (c = e.sessionRecording) === null || c === void 0 ? void 0 : c.recordCanvas,
                            fps: (d = e.sessionRecording) === null || d === void 0 ? void 0 : d.canvasFps,
                            quality: (u = e.sessionRecording) === null || u === void 0 ? void 0 : u.canvasQuality
                        },
                        [kr]: g,
                        [xr]: S(v) ? null : v,
                        [Cr]: (_ = e.sessionRecording) === null || _ === void 0 ? void 0 : _.scriptConfig
                    })
                };
            n(), (t = this._persistDecideOnSessionListener) === null || t === void 0 || t.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(n)
        }
    }
    log(e) {
        var t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "log";
        (t = this.instance.sessionRecording) === null || t === void 0 || t.onRRwebEmit({
            type: 6,
            data: {
                plugin: "rrweb/console@1",
                payload: {
                    level: i,
                    trace: [],
                    payload: [JSON.stringify(e)]
                }
            },
            timestamp: Date.now()
        })
    }
    _startCapture(e) {
        if (!S(Object.assign) && !S(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
            var t, i;
            this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : (t = I.__PosthogExtensions__) === null || t === void 0 || (i = t.loadExternalDependency) === null || i === void 0 || i.call(t, this.instance, this.scriptName, n => {
                if (n) return V.error("could not load recorder", n);
                this._onScriptLoaded()
            }), V.info("starting"), this.status === "active" && this._reportStarted(e || "recording_initialized")
        }
    }
    get scriptName() {
        var e, t, i;
        return ((e = this.instance) === null || e === void 0 || (t = e.persistence) === null || t === void 0 || (i = t.get_property(Cr)) === null || i === void 0 ? void 0 : i.script) || "recorder"
    }
    isInteractiveEvent(e) {
        var t;
        return e.type === 3 && yo.indexOf((t = e.data) === null || t === void 0 ? void 0 : t.source) !== -1
    }
    _updateWindowAndSessionIds(e) {
        var t = this.isInteractiveEvent(e);
        t || this.isIdle || e.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = !0, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", {
            eventTimestamp: e.timestamp,
            lastActivityTimestamp: this._lastActivityTimestamp,
            threshold: this.sessionIdleThresholdMilliseconds,
            bufferLength: this.buffer.data.length,
            bufferSize: this.buffer.size
        }), this._flushBuffer());
        var i = !1;
        if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                reason: "user activity",
                type: e.type
            }), i = !0)), !this.isIdle) {
            var {
                windowId: n,
                sessionId: s
            } = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp), o = this.sessionId !== s, a = this.windowId !== n;
            this.windowId = n, this.sessionId = s, o || a ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i && this._scheduleFullSnapshot()
        }
    }
    _tryRRWebMethod(e) {
        try {
            return e.rrwebMethod(), !0
        } catch (t) {
            return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                enqueuedAt: e.enqueuedAt || Date.now(),
                attempt: e.attempt++,
                rrwebMethod: e.rrwebMethod
            }) : V.warn("could not emit queued rrweb event.", t, e), !1
        }
    }
    _tryAddCustomEvent(e, t) {
        return this._tryRRWebMethod(Wr(() => this.rrwebRecord.addCustomEvent(e, t)))
    }
    _tryTakeFullSnapshot() {
        return this._tryRRWebMethod(Wr(() => this.rrwebRecord.takeFullSnapshot()))
    }
    _onScriptLoaded() {
        var e, t = {
                blockClass: "ph-no-capture",
                blockSelector: void 0,
                ignoreClass: "ph-ignore-input",
                maskTextClass: "ph-mask",
                maskTextSelector: void 0,
                maskTextFn: void 0,
                maskAllInputs: !0,
                maskInputOptions: {
                    password: !0
                },
                maskInputFn: void 0,
                slimDOMOptions: {},
                collectFonts: !1,
                inlineStylesheet: !0,
                recordCrossOriginIframes: !1
            },
            i = this.instance.config.session_recording;
        for (var [n, s] of Object.entries(i || {})) n in t && (n === "maskInputOptions" ? t.maskInputOptions = f({
            password: !0
        }, s) : t[n] = s);
        if (this.canvasRecording && this.canvasRecording.enabled && (t.recordCanvas = !0, t.sampling = {
                canvas: this.canvasRecording.fps
            }, t.dataURLOptions = {
                type: "image/webp",
                quality: this.canvasRecording.quality
            }), this.rrwebRecord) {
            this.mutationRateLimiter = (e = this.mutationRateLimiter) !== null && e !== void 0 ? e : new lo(this.rrwebRecord, {
                refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate,
                bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize,
                onBlockedNode: (a, l) => {
                    var c = "Too many mutations on node '".concat(a, "'. Rate limiting. This could be due to SVG animations or something similar");
                    V.info(c, {
                        node: l
                    }), this.log(bt + " " + c, "warn")
                }
            });
            var o = this._gatherRRWebPlugins();
            this.stopRrweb = this.rrwebRecord(f({
                emit: a => {
                    this.onRRwebEmit(a)
                },
                plugins: o
            }, t)), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                sessionRecordingOptions: t,
                activePlugins: o.map(a => a == null ? void 0 : a.name)
            }), this._tryAddCustomEvent("$posthog_config", {
                config: this.instance.config
            })
        } else V.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
    }
    _scheduleFullSnapshot() {
        if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
            var e = this.fullSnapshotIntervalMillis;
            e && (this._fullSnapshotTimer = setInterval(() => {
                this._tryTakeFullSnapshot()
            }, e))
        }
    }
    _gatherRRWebPlugins() {
        var e, t, i, n, s = [],
            o = (e = I.__PosthogExtensions__) === null || e === void 0 || (t = e.rrwebPlugins) === null || t === void 0 ? void 0 : t.getRecordConsolePlugin;
        o && this.isConsoleLogCaptureEnabled && s.push(o());
        var a = (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.rrwebPlugins) === null || n === void 0 ? void 0 : n.getRecordNetworkPlugin;
        return this.networkPayloadCapture && ae(a) && (!Ns.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? s.push(a(ao(this.instance.config, this.networkPayloadCapture))) : V.info("NetworkCapture not started because we are on localhost.")), s
    }
    onRRwebEmit(e) {
        var t;
        if (this._processQueuedEvents(), e && q(e)) {
            if (e.type === we.Meta) {
                var i = this._maskUrl(e.data.href);
                if (this._lastHref = i, !i) return;
                e.data.href = i
            } else this._pageViewFallBack();
            if (this._checkUrlTriggerConditions(), this.status !== "paused" || function(u) {
                    return u.type === we.Custom && u.data.tag === "recording paused"
                }(e)) {
                e.type === we.FullSnapshot && this._scheduleFullSnapshot(), e.type === we.FullSnapshot && this.triggerStatus === "trigger_pending" && this.clearBuffer();
                var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                if (n) {
                    var s = function(u) {
                        var _ = u;
                        if (_ && q(_) && _.type === 6 && q(_.data) && _.data.plugin === "rrweb/console@1") {
                            _.data.payload.payload.length > 10 && (_.data.payload.payload = _.data.payload.payload.slice(0, 10), _.data.payload.payload.push("...[truncated]"));
                            for (var h = [], g = 0; g < _.data.payload.payload.length; g++) _.data.payload.payload[g] && _.data.payload.payload[g].length > 2e3 ? h.push(_.data.payload.payload[g].slice(0, 2e3) + "...[truncated]") : h.push(_.data.payload.payload[g]);
                            return _.data.payload.payload = h, u
                        }
                        return u
                    }(n);
                    if (this._updateWindowAndSessionIds(s), !this.isIdle || Gr(s)) {
                        if (Gr(s)) {
                            var o = s.data.payload;
                            if (o) {
                                var a = o.lastActivityTimestamp,
                                    l = o.threshold;
                                s.timestamp = a + l
                            }
                        }
                        var c = (t = this.instance.config.session_recording.compress_events) === null || t === void 0 || t ? function(u) {
                                if (Xt(u) < 1024) return u;
                                try {
                                    if (u.type === we.FullSnapshot) return f(f({}, u), {}, {
                                        data: Ne(u.data),
                                        cv: "2024-10"
                                    });
                                    if (u.type === we.IncrementalSnapshot && u.data.source === de.Mutation) return f(f({}, u), {}, {
                                        cv: "2024-10",
                                        data: f(f({}, u.data), {}, {
                                            texts: Ne(u.data.texts),
                                            attributes: Ne(u.data.attributes),
                                            removes: Ne(u.data.removes),
                                            adds: Ne(u.data.adds)
                                        })
                                    });
                                    if (u.type === we.IncrementalSnapshot && u.data.source === de.StyleSheetRule) return f(f({}, u), {}, {
                                        cv: "2024-10",
                                        data: f(f({}, u.data), {}, {
                                            adds: Ne(u.data.adds),
                                            removes: Ne(u.data.removes)
                                        })
                                    })
                                } catch (_) {
                                    V.error("could not compress event - will use uncompressed event", _)
                                }
                                return u
                            }(s) : s,
                            d = {
                                $snapshot_bytes: Xt(c),
                                $snapshot_data: c,
                                $session_id: this.sessionId,
                                $window_id: this.windowId
                            };
                        this.status !== "disabled" ? this._captureSnapshotBuffered(d) : this.clearBuffer()
                    }
                }
            }
        }
    }
    _pageViewFallBack() {
        if (!this.instance.config.capture_pageview && p) {
            var e = this._maskUrl(p.location.href);
            this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                href: e
            }), this._lastHref = e)
        }
    }
    _processQueuedEvents() {
        if (this.queuedRRWebEvents.length) {
            var e = [...this.queuedRRWebEvents];
            this.queuedRRWebEvents = [], e.forEach(t => {
                Date.now() - t.enqueuedAt <= 2e3 && this._tryRRWebMethod(t)
            })
        }
    }
    _maskUrl(e) {
        var t = this.instance.config.session_recording;
        if (t.maskNetworkRequestFn) {
            var i, n = {
                url: e
            };
            return (i = n = t.maskNetworkRequestFn(n)) === null || i === void 0 ? void 0 : i.url
        }
        return e
    }
    clearBuffer() {
        return this.buffer = {
            size: 0,
            data: [],
            sessionId: this.sessionId,
            windowId: this.windowId
        }, this.buffer
    }
    _flushBuffer() {
        this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
        var e = this.minimumDuration,
            t = this.sessionDuration,
            i = K(t) && t >= 0,
            n = K(e) && i && t < e;
        return this.status === "buffering" || this.status === "paused" || n ? (this.flushBufferTimer = setTimeout(() => {
            this._flushBuffer()
        }, 2e3), this.buffer) : (this.buffer.data.length > 0 && Li(this.buffer).forEach(s => {
            this._captureSnapshot({
                $snapshot_bytes: s.size,
                $snapshot_data: s.data,
                $session_id: s.sessionId,
                $window_id: s.windowId,
                $lib: "web",
                $lib_version: Se.LIB_VERSION
            })
        }), this.clearBuffer())
    }
    _captureSnapshotBuffered(e) {
        var t, i = 2 + (((t = this.buffer) === null || t === void 0 ? void 0 : t.data.length) || 0);
        !this.isIdle && (this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(() => {
            this._flushBuffer()
        }, 2e3))
    }
    _captureSnapshot(e) {
        this.instance.capture("$snapshot", e, {
            _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
        })
    }
    _checkUrlTriggerConditions() {
        if (p !== void 0 && p.location.href) {
            var e = p.location.href,
                t = this.status === "paused",
                i = Vr(e, this._urlBlocklist);
            i && !t ? this._pauseRecording() : !i && t && this._resumeRecording(), Vr(e, this._urlTriggers) && this._activateTrigger("url")
        }
    }
    _activateTrigger(e) {
        var t, i;
        this.triggerStatus === "trigger_pending" && ((t = this.instance) === null || t === void 0 || (i = t.persistence) === null || i === void 0 || i.register({
            [e === "url" ? di : hi]: this.sessionId
        }), this._flushBuffer(), this._reportStarted(e + "_trigger_matched"))
    }
    _pauseRecording() {
        this.status !== "paused" && (this._urlBlocked = !0, clearInterval(this._fullSnapshotTimer), V.info("recording paused due to URL blocker"), this._tryAddCustomEvent("recording paused", {
            reason: "url blocker"
        }))
    }
    _resumeRecording() {
        this.status === "paused" && (this._urlBlocked = !1, this._tryTakeFullSnapshot(), this._scheduleFullSnapshot(), this._tryAddCustomEvent("recording resumed", {
            reason: "left blocked url"
        }), V.info("recording resumed"))
    }
    _addEventTriggerListener() {
        this._eventTriggers.length !== 0 && M(this._removeEventTriggerCaptureHook) && (this._removeEventTriggerCaptureHook = this.instance.on("eventCaptured", e => {
            try {
                this._eventTriggers.includes(e.event) && this._activateTrigger("event")
            } catch (t) {
                V.error("Could not activate event trigger", t)
            }
        }))
    }
    overrideLinkedFlag() {
        this._linkedFlagSeen = !0, this._reportStarted("linked_flag_overridden")
    }
    overrideSampling() {
        var e;
        (e = this.instance.persistence) === null || e === void 0 || e.register({
            [vt]: !0
        }), this._reportStarted("sampling_overridden")
    }
    overrideTrigger(e) {
        this._activateTrigger(e)
    }
    _reportStarted(e, t) {
        this.instance.register_for_session({
            $session_recording_start_reason: e
        }), V.info(e.replace("_", " "), t), F(["recording_initialized", "session_id_changed"], e) || this._tryAddCustomEvent(e, t)
    }
}
var qe = Z("[RemoteConfig]");
class Eo {
    constructor(e) {
        this.instance = e
    }
    get remoteConfig() {
        var e, t;
        return (e = I._POSTHOG_REMOTE_CONFIG) === null || e === void 0 || (t = e[this.instance.config.token]) === null || t === void 0 ? void 0 : t.config
    }
    _loadRemoteConfigJs(e) {
        var t, i, n;
        (t = I.__PosthogExtensions__) !== null && t !== void 0 && t.loadExternalDependency ? (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.loadExternalDependency) === null || n === void 0 || n.call(i, this.instance, "remote-config", () => e(this.remoteConfig)) : (qe.error("PostHog Extensions not found. Cannot load remote config."), e())
    }
    _loadRemoteConfigJSON(e) {
        this.instance._send_request({
            method: "GET",
            url: this.instance.requestRouter.endpointFor("assets", "/array/".concat(this.instance.config.token, "/config")),
            callback: t => {
                e(t.json)
            }
        })
    }
    load() {
        try {
            if (this.remoteConfig) return qe.info("Using preloaded remote config", this.remoteConfig), void this.onRemoteConfig(this.remoteConfig);
            if (this.instance.config.advanced_disable_decide) return void qe.warn("Remote config is disabled. Falling back to local config.");
            this._loadRemoteConfigJs(e => {
                if (!e) return qe.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON(t => {
                    this.onRemoteConfig(t)
                });
                this.onRemoteConfig(e)
            })
        } catch (e) {
            qe.error("Error loading remote config", e)
        }
    }
    onRemoteConfig(e) {
        e ? this.instance.config.__preview_remote_config ? (this.instance._onRemoteConfig(e), e.hasFeatureFlags !== !1 && this.instance.featureFlags.ensureFlagsLoaded()) : qe.info("__preview_remote_config is disabled. Logging config instead", e) : qe.error("Failed to fetch remote config from PostHog.")
    }
}
var Ee, So = p != null && p.location ? Yt(p.location.hash, "__posthog") || Yt(location.hash, "state") : null,
    Jr = "_postHogToolbarParams";
(function(r) {
    r[r.UNINITIALIZED = 0] = "UNINITIALIZED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED"
})(Ee || (Ee = {}));
class ko {
    constructor(e) {
        this.instance = e
    }
    setToolbarState(e) {
        I.ph_toolbar_state = e
    }
    getToolbarState() {
        var e;
        return (e = I.ph_toolbar_state) !== null && e !== void 0 ? e : Ee.UNINITIALIZED
    }
    maybeLoadToolbar() {
        var e, t, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
            s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
        if (!p || !w) return !1;
        i = (e = i) !== null && e !== void 0 ? e : p.location, s = (t = s) !== null && t !== void 0 ? t : p.history;
        try {
            if (!n) {
                try {
                    p.localStorage.setItem("test", "test"), p.localStorage.removeItem("test")
                } catch {
                    return !1
                }
                n = p == null ? void 0 : p.localStorage
            }
            var o, a = So || Yt(i.hash, "__posthog") || Yt(i.hash, "state"),
                l = a ? vr(() => JSON.parse(atob(decodeURIComponent(a)))) || vr(() => JSON.parse(decodeURIComponent(a))) : null;
            return l && l.action === "ph_authorize" ? ((o = l).source = "url", o && Object.keys(o).length > 0 && (l.desiredHash ? i.hash = l.desiredHash : s ? s.replaceState(s.state, "", i.pathname + i.search) : i.hash = "")) : ((o = JSON.parse(n.getItem(Jr) || "{}")).source = "localstorage", delete o.userIntent), !(!o.token || this.instance.config.token !== o.token) && (this.loadToolbar(o), !0)
        } catch {
            return !1
        }
    }
    _callLoadToolbar(e) {
        (I.ph_load_toolbar || I.ph_load_editor)(e, this.instance)
    }
    loadToolbar(e) {
        var t = !(w == null || !w.getElementById(yn));
        if (!p || t) return !1;
        var i = this.instance.requestRouter.region === "custom" && this.instance.config.advanced_disable_toolbar_metrics,
            n = f(f({
                token: this.instance.config.token
            }, e), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
            }, i ? {
                instrument: !1
            } : {});
        if (p.localStorage.setItem(Jr, JSON.stringify(f(f({}, n), {}, {
                source: void 0
            }))), this.getToolbarState() === Ee.LOADED) this._callLoadToolbar(n);
        else if (this.getToolbarState() === Ee.UNINITIALIZED) {
            var s, o;
            this.setToolbarState(Ee.LOADING), (s = I.__PosthogExtensions__) === null || s === void 0 || (o = s.loadExternalDependency) === null || o === void 0 || o.call(s, this.instance, "toolbar", a => {
                if (a) return k.error("[Toolbar] Failed to load", a), void this.setToolbarState(Ee.UNINITIALIZED);
                this.setToolbarState(Ee.LOADED), this._callLoadToolbar(n)
            }), ke(p, "turbolinks:load", () => {
                this.setToolbarState(Ee.UNINITIALIZED), this.loadToolbar(n)
            })
        }
        return !0
    }
    _loadEditor(e) {
        return this.loadToolbar(e)
    }
    maybeLoadEditor() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
        return this.maybeLoadToolbar(e, t, i)
    }
}
class xo {
    constructor(e) {
        m(this, "isPaused", !0), m(this, "queue", []), m(this, "flushTimeoutMs", 3e3), this.sendRequest = e
    }
    enqueue(e) {
        this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
    }
    unload() {
        this.clearFlushTimeout();
        var e = this.queue.length > 0 ? this.formatQueue() : {},
            t = Object.values(e),
            i = [...t.filter(n => n.url.indexOf("/e") === 0), ...t.filter(n => n.url.indexOf("/e") !== 0)];
        i.map(n => {
            this.sendRequest(f(f({}, n), {}, {
                transport: "sendBeacon"
            }))
        })
    }
    enable() {
        this.isPaused = !1, this.setFlushTimeout()
    }
    setFlushTimeout() {
        var e = this;
        this.isPaused || (this.flushTimeout = setTimeout(() => {
            if (this.clearFlushTimeout(), this.queue.length > 0) {
                var t = this.formatQueue(),
                    i = function(s) {
                        var o = t[s],
                            a = new Date().getTime();
                        o.data && H(o.data) && T(o.data, l => {
                            l.offset = Math.abs(l.timestamp - a), delete l.timestamp
                        }), e.sendRequest(o)
                    };
                for (var n in t) i(n)
            }
        }, this.flushTimeoutMs))
    }
    clearFlushTimeout() {
        clearTimeout(this.flushTimeout), this.flushTimeout = void 0
    }
    formatQueue() {
        var e = {};
        return T(this.queue, t => {
            var i, n = t,
                s = (n ? n.batchKey : null) || n.url;
            S(e[s]) && (e[s] = f(f({}, n), {}, {
                data: []
            })), (i = e[s].data) === null || i === void 0 || i.push(n.data)
        }), this.queue = [], e
    }
}
var Co = function(r) {
        var e, t, i, n, s = "";
        for (e = t = 0, i = (r = (r + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`)).length, n = 0; n < i; n++) {
            var o = r.charCodeAt(n),
                a = null;
            o < 128 ? t++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), Ae(a) || (t > e && (s += r.substring(e, t)), s += a, e = t = n + 1)
        }
        return t > e && (s += r.substring(e, r.length)), s
    },
    Io = !!Si || !!Ei,
    Yr = "text/plain",
    ei = (r, e) => {
        var [t, i] = r.split("?"), n = f({}, e);
        i == null || i.split("&").forEach(o => {
            var [a] = o.split("=");
            delete n[a]
        });
        var s = qs(n);
        return s = s ? (i ? i + "&" : "") + s : i, "".concat(t, "?").concat(s)
    },
    Ot = (r, e) => JSON.stringify(r, (t, i) => typeof i == "bigint" ? i.toString() : i, e),
    mi = r => {
        var {
            data: e,
            compression: t
        } = r;
        if (e) {
            if (t === ge.GZipJS) {
                var i = Zn(Qn(Ot(e)), {
                        mtime: 0
                    }),
                    n = new Blob([i], {
                        type: Yr
                    });
                return {
                    contentType: Yr,
                    body: n,
                    estimatedSize: n.size
                }
            }
            if (t === ge.Base64) {
                var s = function(l) {
                        var c, d, u, _, h, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            v = 0,
                            E = 0,
                            y = "",
                            b = [];
                        if (!l) return l;
                        l = Co(l);
                        do c = (h = l.charCodeAt(v++) << 16 | l.charCodeAt(v++) << 8 | l.charCodeAt(v++)) >> 18 & 63, d = h >> 12 & 63, u = h >> 6 & 63, _ = 63 & h, b[E++] = g.charAt(c) + g.charAt(d) + g.charAt(u) + g.charAt(_); while (v < l.length);
                        switch (y = b.join(""), l.length % 3) {
                            case 1:
                                y = y.slice(0, -2) + "==";
                                break;
                            case 2:
                                y = y.slice(0, -1) + "="
                        }
                        return y
                    }(Ot(e)),
                    o = (l => "data=" + encodeURIComponent(typeof l == "string" ? l : Ot(l)))(s);
                return {
                    contentType: "application/x-www-form-urlencoded",
                    body: o,
                    estimatedSize: new Blob([o]).size
                }
            }
            var a = Ot(e);
            return {
                contentType: "application/json",
                body: a,
                estimatedSize: new Blob([a]).size
            }
        }
    },
    wt = [];
Ei && wt.push({
    transport: "fetch",
    method: r => {
        var e, t, {
                contentType: i,
                body: n,
                estimatedSize: s
            } = (e = mi(r)) !== null && e !== void 0 ? e : {},
            o = new Headers;
        T(r.headers, function(d, u) {
            o.append(u, d)
        }), i && o.append("Content-Type", i);
        var a = r.url,
            l = null;
        if (hr) {
            var c = new hr;
            l = {
                signal: c.signal,
                timeout: setTimeout(() => c.abort(), r.timeout)
            }
        }
        Ei(a, f({
            method: (r == null ? void 0 : r.method) || "GET",
            headers: o,
            keepalive: r.method === "POST" && (s || 0) < 52428.8,
            body: n,
            signal: (t = l) === null || t === void 0 ? void 0 : t.signal
        }, r.fetchOptions)).then(d => d.text().then(u => {
            var _, h = {
                statusCode: d.status,
                text: u
            };
            if (d.status === 200) try {
                h.json = JSON.parse(u)
            } catch (g) {
                k.error(g)
            }(_ = r.callback) === null || _ === void 0 || _.call(r, h)
        })).catch(d => {
            var u;
            k.error(d), (u = r.callback) === null || u === void 0 || u.call(r, {
                statusCode: 0,
                text: d
            })
        }).finally(() => l ? clearTimeout(l.timeout) : null)
    }
}), Si && wt.push({
    transport: "XHR",
    method: r => {
        var e, t = new Si;
        t.open(r.method || "GET", r.url, !0);
        var {
            contentType: i,
            body: n
        } = (e = mi(r)) !== null && e !== void 0 ? e : {};
        T(r.headers, function(s, o) {
            t.setRequestHeader(o, s)
        }), i && t.setRequestHeader("Content-Type", i), r.timeout && (t.timeout = r.timeout), t.withCredentials = !0, t.onreadystatechange = () => {
            if (t.readyState === 4) {
                var s, o = {
                    statusCode: t.status,
                    text: t.responseText
                };
                if (t.status === 200) try {
                    o.json = JSON.parse(t.responseText)
                } catch {}(s = r.callback) === null || s === void 0 || s.call(r, o)
            }
        }, t.send(n)
    }
}), ne != null && ne.sendBeacon && wt.push({
    transport: "sendBeacon",
    method: r => {
        var e = ei(r.url, {
            beacon: "1"
        });
        try {
            var t, {
                    contentType: i,
                    body: n
                } = (t = mi(r)) !== null && t !== void 0 ? t : {},
                s = typeof n == "string" ? new Blob([n], {
                    type: i
                }) : n;
            ne.sendBeacon(e, s)
        } catch {}
    }
});
var Po = ["retriesPerformedSoFar"];
class Ro {
    constructor(e) {
        m(this, "isPolling", !1), m(this, "pollIntervalMs", 3e3), m(this, "queue", []), this.instance = e, this.queue = [], this.areWeOnline = !0, !S(p) && "onLine" in p.navigator && (this.areWeOnline = p.navigator.onLine, p.addEventListener("online", () => {
            this.areWeOnline = !0, this.flush()
        }), p.addEventListener("offline", () => {
            this.areWeOnline = !1
        }))
    }
    retriableRequest(e) {
        var {
            retriesPerformedSoFar: t
        } = e, i = vn(e, Po);
        K(t) && t > 0 && (i.url = ei(i.url, {
            retry_count: t
        })), this.instance._send_request(f(f({}, i), {}, {
            callback: n => {
                var s;
                n.statusCode !== 200 && (n.statusCode < 400 || n.statusCode >= 500) && (t ? ? 0) < 10 ? this.enqueue(f({
                    retriesPerformedSoFar: t
                }, i)) : (s = i.callback) === null || s === void 0 || s.call(i, n)
            }
        }))
    }
    enqueue(e) {
        var t = e.retriesPerformedSoFar || 0;
        e.retriesPerformedSoFar = t + 1;
        var i = function(o) {
                var a = 3e3 * Math.pow(2, o),
                    l = a / 2,
                    c = Math.min(18e5, a),
                    d = (Math.random() - .5) * (c - l);
                return Math.ceil(c + d)
            }(t),
            n = Date.now() + i;
        this.queue.push({
            retryAt: n,
            requestOptions: e
        });
        var s = "Enqueued failed request for retry in ".concat(i);
        navigator.onLine || (s += " (Browser is offline)"), k.warn(s), this.isPolling || (this.isPolling = !0, this.poll())
    }
    poll() {
        this.poller && clearTimeout(this.poller), this.poller = setTimeout(() => {
            this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll()
        }, this.pollIntervalMs)
    }
    flush() {
        var e = Date.now(),
            t = [],
            i = this.queue.filter(s => s.retryAt < e || (t.push(s), !1));
        if (this.queue = t, i.length > 0)
            for (var {
                    requestOptions: n
                } of i) this.retriableRequest(n)
    }
    unload() {
        for (var {
                requestOptions: e
            } of (this.poller && (clearTimeout(this.poller), this.poller = void 0), this.queue)) try {
            this.instance._send_request(f(f({}, e), {}, {
                transport: "sendBeacon"
            }))
        } catch (t) {
            k.error(t)
        }
        this.queue = []
    }
}
var Ge, Kr = Z("[SessionId]");
class Fo {
    constructor(e, t, i) {
        var n;
        if (m(this, "_sessionIdChangedHandlers", []), !e.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if (e.config.__preview_experimental_cookieless_mode) throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");
        this.config = e.config, this.persistence = e.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = t || Te, this._windowIdGenerator = i || Te;
        var s = this.config.persistence_name || this.config.token,
            o = this.config.session_idle_timeout_seconds || 1800;
        if (this._sessionTimeoutMs = 1e3 * fe(o, 60, 36e3, "session_idle_timeout_seconds", 1800), e.register({
                $configured_session_timeout_ms: this._sessionTimeoutMs
            }), this.resetIdleTimer(), this._window_id_storage_key = "ph_" + s + "_window_id", this._primary_window_exists_storage_key = "ph_" + s + "_primary_window_exists", this._canUseSessionStorage()) {
            var a = W.parse(this._window_id_storage_key),
                l = W.parse(this._primary_window_exists_storage_key);
            a && !l ? this._windowId = a : W.remove(this._window_id_storage_key), W.set(this._primary_window_exists_storage_key, !0)
        }
        if ((n = this.config.bootstrap) !== null && n !== void 0 && n.sessionID) try {
            var c = (d => {
                var u = d.replace(/-/g, "");
                if (u.length !== 32) throw new Error("Not a valid UUID");
                if (u[12] !== "7") throw new Error("Not a UUIDv7");
                return parseInt(u.substring(0, 12), 16)
            })(this.config.bootstrap.sessionID);
            this._setSessionId(this.config.bootstrap.sessionID, new Date().getTime(), c)
        } catch (d) {
            Kr.error("Invalid sessionID in bootstrap", d)
        }
        this._listenToReloadWindow()
    }
    get sessionTimeoutMs() {
        return this._sessionTimeoutMs
    }
    onSessionId(e) {
        return S(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId), () => {
            this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(t => t !== e)
        }
    }
    _canUseSessionStorage() {
        return this.config.persistence !== "memory" && !this.persistence.disabled && W.is_supported()
    }
    _setWindowId(e) {
        e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && W.set(this._window_id_storage_key, e))
    }
    _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? W.parse(this._window_id_storage_key) : null
    }
    _setSessionId(e, t, i) {
        e === this._sessionId && t === this._sessionActivityTimestamp && i === this._sessionStartTimestamp || (this._sessionStartTimestamp = i, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register({
            [jt]: [t, e, i]
        }))
    }
    _getSessionId() {
        if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
        var e = this.persistence.props[jt];
        return H(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0]
    }
    resetSessionId() {
        this._setSessionId(null, null, null)
    }
    _listenToReloadWindow() {
        p == null || p.addEventListener("beforeunload", () => {
            this._canUseSessionStorage() && W.remove(this._primary_window_exists_storage_key)
        })
    }
    checkAndGetSessionAndWindowId() {
        var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (this.config.__preview_experimental_cookieless_mode) throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");
        var i = t || new Date().getTime(),
            [n, s, o] = this._getSessionId(),
            a = this._getWindowId(),
            l = K(o) && o > 0 && Math.abs(i - o) > 864e5,
            c = !1,
            d = !s,
            u = !e && Math.abs(i - n) > this.sessionTimeoutMs;
        d || u || l ? (s = this._sessionIdGenerator(), a = this._windowIdGenerator(), Kr.info("new session ID generated", {
            sessionId: s,
            windowId: a,
            changeReason: {
                noSessionId: d,
                activityTimeout: u,
                sessionPastMaximumLength: l
            }
        }), o = i, c = !0) : a || (a = this._windowIdGenerator(), c = !0);
        var _ = n === 0 || !e || l ? i : n,
            h = o === 0 ? new Date().getTime() : o;
        return this._setWindowId(a), this._setSessionId(s, _, h), e || this.resetIdleTimer(), c && this._sessionIdChangedHandlers.forEach(g => g(s, a, c ? {
            noSessionId: d,
            activityTimeout: u,
            sessionPastMaximumLength: l
        } : void 0)), {
            sessionId: s,
            windowId: a,
            sessionStartTimestamp: h,
            changeReason: c ? {
                noSessionId: d,
                activityTimeout: u,
                sessionPastMaximumLength: l
            } : void 0,
            lastActivityTimestamp: n
        }
    }
    resetIdleTimer() {
        clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout(() => {
            this.resetSessionId()
        }, 1.1 * this.sessionTimeoutMs)
    }
}(function(r) {
    r.US = "us", r.EU = "eu", r.CUSTOM = "custom"
})(Ge || (Ge = {}));
var Xr = "i.posthog.com";
class To {
    constructor(e) {
        m(this, "_regionCache", {}), this.instance = e
    }
    get apiHost() {
        var e = this.instance.config.api_host.trim().replace(/\/$/, "");
        return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e
    }
    get uiHost() {
        var e, t = (e = this.instance.config.ui_host) === null || e === void 0 ? void 0 : e.replace(/\/$/, "");
        return t || (t = this.apiHost.replace(".".concat(Xr), ".posthog.com")), t === "https://app.posthog.com" ? "https://us.posthog.com" : t
    }
    get region() {
        return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = Ge.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = Ge.EU : this._regionCache[this.apiHost] = Ge.CUSTOM), this._regionCache[this.apiHost]
    }
    endpointFor(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        if (t && (t = t[0] === "/" ? t : "/".concat(t)), e === "ui") return this.uiHost + t;
        if (this.region === Ge.CUSTOM) return this.apiHost + t;
        var i = Xr + t;
        switch (e) {
            case "assets":
                return "https://".concat(this.region, "-assets.").concat(i);
            case "api":
                return "https://".concat(this.region, ".").concat(i)
        }
    }
}
var es = "posthog-js";

function ts(r) {
    var {
        organization: e,
        projectId: t,
        prefix: i,
        severityAllowList: n = ["error"]
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return s => {
        var o, a, l, c, d;
        if (!(n === "*" || n.includes(s.level)) || !r.__loaded) return s;
        s.tags || (s.tags = {});
        var u = r.requestRouter.endpointFor("ui", "/project/".concat(r.config.token, "/person/").concat(r.get_distinct_id()));
        s.tags["PostHog Person URL"] = u, r.sessionRecordingStarted() && (s.tags["PostHog Recording URL"] = r.get_session_replay_url({
            withTimestamp: !0
        }));
        var _ = ((o = s.exception) === null || o === void 0 ? void 0 : o.values) || [];
        _.map(g => {
            g.stacktrace && (g.stacktrace.type = "raw")
        });
        var h = {
            $exception_message: ((a = _[0]) === null || a === void 0 ? void 0 : a.value) || s.message,
            $exception_type: (l = _[0]) === null || l === void 0 ? void 0 : l.type,
            $exception_personURL: u,
            $exception_level: s.level,
            $exception_list: _,
            $sentry_event_id: s.event_id,
            $sentry_exception: s.exception,
            $sentry_exception_message: ((c = _[0]) === null || c === void 0 ? void 0 : c.value) || s.message,
            $sentry_exception_type: (d = _[0]) === null || d === void 0 ? void 0 : d.type,
            $sentry_tags: s.tags
        };
        return e && t && (h.$sentry_url = (i || "https://sentry.io/organizations/") + e + "/issues/?project=" + t + "&query=" + s.event_id), r.exceptions.sendExceptionEvent(h), s
    }
}
class $o {
    constructor(e, t, i, n, s) {
        this.name = es, this.setupOnce = function(o) {
            o(ts(e, {
                organization: t,
                projectId: i,
                prefix: n,
                severityAllowList: s
            }))
        }
    }
}
var Zr, ti, ce, bi = Z("[SegmentIntegration]");

function Mo(r, e) {
    var t = r.config.segment;
    if (!t) return e();
    (function(i, n) {
        var s = i.config.segment;
        if (!s) return n();
        var o = l => {
                var c = () => l.anonymousId() || Te();
                i.config.get_device_id = c, l.id() && (i.register({
                    distinct_id: l.id(),
                    $device_id: c()
                }), i.persistence.set_property(ye, "identified")), n()
            },
            a = s.user();
        "then" in a && ae(a.then) ? a.then(l => o(l)) : o(a)
    })(r, () => {
        t.register((i => {
            Promise && Promise.resolve || bi.warn("This browser does not have Promise support, and can not use the segment integration");
            var n = (s, o) => {
                var a;
                if (!o) return s;
                s.event.userId || s.event.anonymousId === i.get_distinct_id() || (bi.info("No userId set, resetting PostHog"), i.reset()), s.event.userId && s.event.userId !== i.get_distinct_id() && (bi.info("UserId set, identifying with PostHog"), i.identify(s.event.userId));
                var l = i._calculate_event_properties(o, (a = s.event.properties) !== null && a !== void 0 ? a : {}, new Date);
                return s.event.properties = Object.assign({}, l, s.event.properties), s
            };
            return {
                name: "PostHog JS",
                type: "enrichment",
                version: "1.0.0",
                isLoaded: () => !0,
                load: () => Promise.resolve(),
                track: s => n(s, s.event.event),
                page: s => n(s, "$pageview"),
                identify: s => n(s, "$identify"),
                screen: s => n(s, "$screen")
            }
        })(r)).then(() => {
            e()
        })
    })
}
class Ao {
    constructor(e) {
        this._instance = e
    }
    doPageView(e) {
        var t, i = this._previousPageViewProperties(e);
        return this._currentPath = (t = p == null ? void 0 : p.location.pathname) !== null && t !== void 0 ? t : "", this._instance.scrollManager.resetContext(), this._prevPageviewTimestamp = e, i
    }
    doPageLeave(e) {
        return this._previousPageViewProperties(e)
    }
    _previousPageViewProperties(e) {
        var t = this._currentPath,
            i = this._prevPageviewTimestamp,
            n = this._instance.scrollManager.getContext();
        if (!i) return {};
        var s = {};
        if (n) {
            var {
                maxScrollHeight: o,
                lastScrollY: a,
                maxScrollY: l,
                maxContentHeight: c,
                lastContentY: d,
                maxContentY: u
            } = n;
            S(o) || S(a) || S(l) || S(c) || S(d) || S(u) || (o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), c = Math.ceil(c), d = Math.ceil(d), u = Math.ceil(u), s = {
                $prev_pageview_last_scroll: a,
                $prev_pageview_last_scroll_percentage: o <= 1 ? 1 : fe(a / o, 0, 1),
                $prev_pageview_max_scroll: l,
                $prev_pageview_max_scroll_percentage: o <= 1 ? 1 : fe(l / o, 0, 1),
                $prev_pageview_last_content: d,
                $prev_pageview_last_content_percentage: c <= 1 ? 1 : fe(d / c, 0, 1),
                $prev_pageview_max_content: u,
                $prev_pageview_max_content_percentage: c <= 1 ? 1 : fe(u / c, 0, 1)
            })
        }
        return t && (s.$prev_pageview_pathname = t), i && (s.$prev_pageview_duration = (e.getTime() - i.getTime()) / 1e3), s
    }
}(function(r) {
    r.Popover = "popover", r.API = "api", r.Widget = "widget"
})(Zr || (Zr = {})),
function(r) {
    r.Open = "open", r.MultipleChoice = "multiple_choice", r.SingleChoice = "single_choice", r.Rating = "rating", r.Link = "link"
}(ti || (ti = {})),
function(r) {
    r.NextQuestion = "next_question", r.End = "end", r.ResponseBased = "response_based", r.SpecificQuestion = "specific_question"
}(ce || (ce = {}));
class is {
    constructor() {
        m(this, "events", {}), this.events = {}
    }
    on(e, t) {
        return this.events[e] || (this.events[e] = []), this.events[e].push(t), () => {
            this.events[e] = this.events[e].filter(i => i !== t)
        }
    }
    emit(e, t) {
        for (var i of this.events[e] || []) i(t);
        for (var n of this.events["*"] || []) n(e, t)
    }
}
class ze {
    constructor(e) {
        m(this, "_debugEventEmitter", new is), m(this, "checkStep", (t, i) => this.checkStepEvent(t, i) && this.checkStepUrl(t, i) && this.checkStepElement(t, i)), m(this, "checkStepEvent", (t, i) => i == null || !i.event || (t == null ? void 0 : t.event) === (i == null ? void 0 : i.event)), this.instance = e, this.actionEvents = new Set, this.actionRegistry = new Set
    }
    init() {
        var e;
        if (!S((e = this.instance) === null || e === void 0 ? void 0 : e._addCaptureHook)) {
            var t;
            (t = this.instance) === null || t === void 0 || t._addCaptureHook((i, n) => {
                this.on(i, n)
            })
        }
    }
    register(e) {
        var t, i;
        if (!S((t = this.instance) === null || t === void 0 ? void 0 : t._addCaptureHook) && (e.forEach(o => {
                var a, l;
                (a = this.actionRegistry) === null || a === void 0 || a.add(o), (l = o.steps) === null || l === void 0 || l.forEach(c => {
                    var d;
                    (d = this.actionEvents) === null || d === void 0 || d.add((c == null ? void 0 : c.event) || "")
                })
            }), (i = this.instance) !== null && i !== void 0 && i.autocapture)) {
            var n, s = new Set;
            e.forEach(o => {
                var a;
                (a = o.steps) === null || a === void 0 || a.forEach(l => {
                    l != null && l.selector && s.add(l == null ? void 0 : l.selector)
                })
            }), (n = this.instance) === null || n === void 0 || n.autocapture.setElementSelectors(s)
        }
    }
    on(e, t) {
        var i;
        t != null && e.length != 0 && (this.actionEvents.has(e) || this.actionEvents.has(t == null ? void 0 : t.event)) && this.actionRegistry && ((i = this.actionRegistry) === null || i === void 0 ? void 0 : i.size) > 0 && this.actionRegistry.forEach(n => {
            this.checkAction(t, n) && this._debugEventEmitter.emit("actionCaptured", n.name)
        })
    }
    _addActionHook(e) {
        this.onAction("actionCaptured", t => e(t))
    }
    checkAction(e, t) {
        if ((t == null ? void 0 : t.steps) == null) return !1;
        for (var i of t.steps)
            if (this.checkStep(e, i)) return !0;
        return !1
    }
    onAction(e, t) {
        return this._debugEventEmitter.on(e, t)
    }
    checkStepUrl(e, t) {
        if (t != null && t.url) {
            var i, n = e == null || (i = e.properties) === null || i === void 0 ? void 0 : i.$current_url;
            if (!n || typeof n != "string" || !ze.matchString(n, t == null ? void 0 : t.url, (t == null ? void 0 : t.url_matching) || "contains")) return !1
        }
        return !0
    }
    static matchString(e, t, i) {
        switch (i) {
            case "regex":
                return !!p && st(e, t);
            case "exact":
                return t === e;
            case "contains":
                var n = ze.escapeStringRegexp(t).replace(/_/g, ".").replace(/%/g, ".*");
                return st(e, n);
            default:
                return !1
        }
    }
    static escapeStringRegexp(e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
    }
    checkStepElement(e, t) {
        if ((t != null && t.href || t != null && t.tag_name || t != null && t.text) && !this.getElementsList(e).some(s => !(t != null && t.href && !ze.matchString(s.href || "", t == null ? void 0 : t.href, (t == null ? void 0 : t.href_matching) || "exact")) && (t == null || !t.tag_name || s.tag_name === (t == null ? void 0 : t.tag_name)) && !(t != null && t.text && !ze.matchString(s.text || "", t == null ? void 0 : t.text, (t == null ? void 0 : t.text_matching) || "exact") && !ze.matchString(s.$el_text || "", t == null ? void 0 : t.text, (t == null ? void 0 : t.text_matching) || "exact")))) return !1;
        if (t != null && t.selector) {
            var i, n = e == null || (i = e.properties) === null || i === void 0 ? void 0 : i.$element_selectors;
            if (!n || !n.includes(t == null ? void 0 : t.selector)) return !1
        }
        return !0
    }
    getElementsList(e) {
        return (e == null ? void 0 : e.properties.$elements) == null ? [] : e == null ? void 0 : e.properties.$elements
    }
}
class It {
    constructor(e) {
        this.instance = e, this.eventToSurveys = new Map, this.actionToSurveys = new Map
    }
    register(e) {
        var t;
        S((t = this.instance) === null || t === void 0 ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e))
    }
    setupActionBasedSurveys(e) {
        var t = e.filter(i => {
            var n, s, o, a;
            return ((n = i.conditions) === null || n === void 0 ? void 0 : n.actions) && ((s = i.conditions) === null || s === void 0 || (o = s.actions) === null || o === void 0 || (a = o.values) === null || a === void 0 ? void 0 : a.length) > 0
        });
        t.length !== 0 && (this.actionMatcher == null && (this.actionMatcher = new ze(this.instance), this.actionMatcher.init(), this.actionMatcher._addActionHook(i => {
            this.onAction(i)
        })), t.forEach(i => {
            var n, s, o, a, l, c, d, u, _, h;
            i.conditions && (n = i.conditions) !== null && n !== void 0 && n.actions && (s = i.conditions) !== null && s !== void 0 && (o = s.actions) !== null && o !== void 0 && o.values && ((a = i.conditions) === null || a === void 0 || (l = a.actions) === null || l === void 0 || (c = l.values) === null || c === void 0 ? void 0 : c.length) > 0 && ((d = this.actionMatcher) === null || d === void 0 || d.register(i.conditions.actions.values), (u = i.conditions) === null || u === void 0 || (_ = u.actions) === null || _ === void 0 || (h = _.values) === null || h === void 0 || h.forEach(g => {
                if (g && g.name) {
                    var v = this.actionToSurveys.get(g.name);
                    v && v.push(i.id), this.actionToSurveys.set(g.name, v || [i.id])
                }
            }))
        }))
    }
    setupEventBasedSurveys(e) {
        var t;
        e.filter(i => {
            var n, s, o, a;
            return ((n = i.conditions) === null || n === void 0 ? void 0 : n.events) && ((s = i.conditions) === null || s === void 0 || (o = s.events) === null || o === void 0 || (a = o.values) === null || a === void 0 ? void 0 : a.length) > 0
        }).length !== 0 && ((t = this.instance) === null || t === void 0 || t._addCaptureHook((i, n) => {
            this.onEvent(i, n)
        }), e.forEach(i => {
            var n, s, o;
            (n = i.conditions) === null || n === void 0 || (s = n.events) === null || s === void 0 || (o = s.values) === null || o === void 0 || o.forEach(a => {
                if (a && a.name) {
                    var l = this.eventToSurveys.get(a.name);
                    l && l.push(i.id), this.eventToSurveys.set(a.name, l || [i.id])
                }
            })
        }))
    }
    onEvent(e, t) {
        var i, n, s = ((i = this.instance) === null || i === void 0 || (n = i.persistence) === null || n === void 0 ? void 0 : n.props[Pt]) || [];
        if (It.SURVEY_SHOWN_EVENT_NAME == e && t && s.length > 0) {
            var o, a = t == null || (o = t.properties) === null || o === void 0 ? void 0 : o.$survey_id;
            if (a) {
                var l = s.indexOf(a);
                l >= 0 && (s.splice(l, 1), this._updateActivatedSurveys(s))
            }
        } else this.eventToSurveys.has(e) && this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(e) || []))
    }
    onAction(e) {
        var t, i, n = ((t = this.instance) === null || t === void 0 || (i = t.persistence) === null || i === void 0 ? void 0 : i.props[Pt]) || [];
        this.actionToSurveys.has(e) && this._updateActivatedSurveys(n.concat(this.actionToSurveys.get(e) || []))
    }
    _updateActivatedSurveys(e) {
        var t, i;
        (t = this.instance) === null || t === void 0 || (i = t.persistence) === null || i === void 0 || i.register({
            [Pt]: [...new Set(e)]
        })
    }
    getSurveys() {
        var e, t, i = (e = this.instance) === null || e === void 0 || (t = e.persistence) === null || t === void 0 ? void 0 : t.props[Pt];
        return i || []
    }
    getEventToSurveys() {
        return this.eventToSurveys
    }
    _getActionMatcher() {
        return this.actionMatcher
    }
}
m(It, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
var rs, N, ns, je, Qr, ss, Wi, os, Gi = {},
    as = [],
    Oo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    rr = Array.isArray;

function $e(r, e) {
    for (var t in e) r[t] = e[t];
    return r
}

function ls(r) {
    var e = r.parentNode;
    e && e.removeChild(r)
}

function yi(r, e, t, i, n) {
    var s = {
        type: r,
        props: e,
        key: t,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: n ? ? ++ns,
        __i: -1,
        __u: 0
    };
    return n == null && N.vnode != null && N.vnode(s), s
}

function nr(r) {
    return r.children
}

function Ht(r, e) {
    this.props = r, this.context = e
}

function ut(r, e) {
    if (e == null) return r.__ ? ut(r.__, r.__i + 1) : null;
    for (var t; e < r.__k.length; e++)
        if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
    return typeof r.type == "function" ? ut(r) : null
}

function us(r) {
    var e, t;
    if ((r = r.__) != null && r.__c != null) {
        for (r.__e = r.__c.base = null, e = 0; e < r.__k.length; e++)
            if ((t = r.__k[e]) != null && t.__e != null) {
                r.__e = r.__c.base = t.__e;
                break
            }
        return us(r)
    }
}

function Vi(r) {
    (!r.__d && (r.__d = !0) && je.push(r) && !ii.__r++ || Qr !== N.debounceRendering) && ((Qr = N.debounceRendering) || ss)(ii)
}

function ii() {
    var r, e, t, i, n, s, o, a, l;
    for (je.sort(Wi); r = je.shift();) r.__d && (e = je.length, i = void 0, s = (n = (t = r).__v).__e, a = [], l = [], (o = t.__P) && ((i = $e({}, n)).__v = n.__v + 1, N.vnode && N.vnode(i), hs(o, i, n, t.__n, o.ownerSVGElement !== void 0, 32 & n.__u ? [s] : null, a, s ? ? ut(n), !!(32 & n.__u), l), i.__.__k[i.__i] = i, No(a, i, l), i.__e != s && us(i)), je.length > e && je.sort(Wi));
    ii.__r = 0
}

function cs(r, e, t, i, n, s, o, a, l, c, d) {
    var u, _, h, g, v, E = i && i.__k || as,
        y = e.length;
    for (t.__d = l, Lo(t, e, E), l = t.__d, u = 0; u < y; u++)(h = t.__k[u]) != null && typeof h != "boolean" && typeof h != "function" && (_ = h.__i === -1 ? Gi : E[h.__i] || Gi, h.__i = u, hs(r, h, _, n, s, o, a, l, c, d), g = h.__e, h.ref && _.ref != h.ref && (_.ref && sr(_.ref, null, h), d.push(h.ref, h.__c || g, h)), v == null && g != null && (v = g), 65536 & h.__u || _.__k === h.__k ? l = ds(h, l, r) : typeof h.type == "function" && h.__d !== void 0 ? l = h.__d : g && (l = g.nextSibling), h.__d = void 0, h.__u &= -196609);
    t.__d = l, t.__e = v
}

function Lo(r, e, t) {
    var i, n, s, o, a, l = e.length,
        c = t.length,
        d = c,
        u = 0;
    for (r.__k = [], i = 0; i < l; i++)(n = r.__k[i] = (n = e[i]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? yi(null, n, null, null, n) : rr(n) ? yi(nr, {
        children: n
    }, null, null, null) : n.constructor === void 0 && n.__b > 0 ? yi(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = r, n.__b = r.__b + 1, a = Do(n, t, o = i + u, d), n.__i = a, s = null, a !== -1 && (d--, (s = t[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && u--, typeof n.type != "function" && (n.__u |= 65536)) : a !== o && (a === o + 1 ? u++ : a > o ? d > l - o ? u += a - o : u-- : u = a < o && a == o - 1 ? a - o : 0, a !== i + u && (n.__u |= 65536))) : (s = t[i]) && s.key == null && s.__e && (s.__e == r.__d && (r.__d = ut(s)), Ji(s, s, !1), t[i] = null, d--);
    if (d)
        for (i = 0; i < c; i++)(s = t[i]) != null && !(131072 & s.__u) && (s.__e == r.__d && (r.__d = ut(s)), Ji(s, s))
}

function ds(r, e, t) {
    var i, n;
    if (typeof r.type == "function") {
        for (i = r.__k, n = 0; i && n < i.length; n++) i[n] && (i[n].__ = r, e = ds(i[n], e, t));
        return e
    }
    return r.__e != e && (t.insertBefore(r.__e, e || null), e = r.__e), e && e.nextSibling
}

function Do(r, e, t, i) {
    var n = r.key,
        s = r.type,
        o = t - 1,
        a = t + 1,
        l = e[t];
    if (l === null || l && n == l.key && s === l.type) return t;
    if (i > (l != null && !(131072 & l.__u) ? 1 : 0))
        for (; o >= 0 || a < e.length;) {
            if (o >= 0) {
                if ((l = e[o]) && !(131072 & l.__u) && n == l.key && s === l.type) return o;
                o--
            }
            if (a < e.length) {
                if ((l = e[a]) && !(131072 & l.__u) && n == l.key && s === l.type) return a;
                a++
            }
        }
    return -1
}

function en(r, e, t) {
    e[0] === "-" ? r.setProperty(e, t ? ? "") : r[e] = t == null ? "" : typeof t != "number" || Oo.test(e) ? t : t + "px"
}

function Lt(r, e, t, i, n) {
    var s;
    e: if (e === "style")
        if (typeof t == "string") r.style.cssText = t;
        else {
            if (typeof i == "string" && (r.style.cssText = i = ""), i)
                for (e in i) t && e in t || en(r.style, e, "");
            if (t)
                for (e in t) i && t[e] === i[e] || en(r.style, e, t[e])
        }
    else if (e[0] === "o" && e[1] === "n") s = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in r ? e.toLowerCase().slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + s] = t, t ? i ? t.u = i.u : (t.u = Date.now(), r.addEventListener(e, s ? rn : tn, s)) : r.removeEventListener(e, s ? rn : tn, s);
    else {
        if (n) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in r) try {
            r[e] = t ? ? "";
            break e
        } catch {}
        typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? r.removeAttribute(e) : r.setAttribute(e, t))
    }
}

function tn(r) {
    var e = this.l[r.type + !1];
    if (r.t) {
        if (r.t <= e.u) return
    } else r.t = Date.now();
    return e(N.event ? N.event(r) : r)
}

function rn(r) {
    return this.l[r.type + !0](N.event ? N.event(r) : r)
}

function hs(r, e, t, i, n, s, o, a, l, c) {
    var d, u, _, h, g, v, E, y, b, x, C, R, L, $, P, A = e.type;
    if (e.constructor !== void 0) return null;
    128 & t.__u && (l = !!(32 & t.__u), s = [a = e.__e = t.__e]), (d = N.__b) && d(e);
    e: if (typeof A == "function") try {
        if (y = e.props, b = (d = A.contextType) && i[d.__c], x = d ? b ? b.props.value : d.__ : i, t.__c ? E = (u = e.__c = t.__c).__ = u.__E : ("prototype" in A && A.prototype.render ? e.__c = u = new A(y, x) : (e.__c = u = new Ht(y, x), u.constructor = A, u.render = Bo), b && b.sub(u), u.props = y, u.state || (u.state = {}), u.context = x, u.__n = i, _ = u.__d = !0, u.__h = [], u._sb = []), u.__s == null && (u.__s = u.state), A.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = $e({}, u.__s)), $e(u.__s, A.getDerivedStateFromProps(y, u.__s))), h = u.props, g = u.state, u.__v = e, _) A.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
        else {
            if (A.getDerivedStateFromProps == null && y !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, x), !u.__e && (u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, x) === !1 || e.__v === t.__v)) {
                for (e.__v !== t.__v && (u.props = y, u.state = u.__s, u.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(B) {
                        B && (B.__ = e)
                    }), C = 0; C < u._sb.length; C++) u.__h.push(u._sb[C]);
                u._sb = [], u.__h.length && o.push(u);
                break e
            }
            u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, x), u.componentDidUpdate != null && u.__h.push(function() {
                u.componentDidUpdate(h, g, v)
            })
        }
        if (u.context = x, u.props = y, u.__P = r, u.__e = !1, R = N.__r, L = 0, "prototype" in A && A.prototype.render) {
            for (u.state = u.__s, u.__d = !1, R && R(e), d = u.render(u.props, u.state, u.context), $ = 0; $ < u._sb.length; $++) u.__h.push(u._sb[$]);
            u._sb = []
        } else
            do u.__d = !1, R && R(e), d = u.render(u.props, u.state, u.context), u.state = u.__s; while (u.__d && ++L < 25);
        u.state = u.__s, u.getChildContext != null && (i = $e($e({}, i), u.getChildContext())), _ || u.getSnapshotBeforeUpdate == null || (v = u.getSnapshotBeforeUpdate(h, g)), cs(r, rr(P = d != null && d.type === nr && d.key == null ? d.props.children : d) ? P : [P], e, t, i, n, s, o, a, l, c), u.base = e.__e, e.__u &= -161, u.__h.length && o.push(u), E && (u.__E = u.__ = null)
    } catch (B) {
        e.__v = null, l || s != null ? (e.__e = a, e.__u |= l ? 160 : 32, s[s.indexOf(a)] = null) : (e.__e = t.__e, e.__k = t.__k), N.__e(B, e, t)
    } else s == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = qo(t.__e, e, t, i, n, s, o, l, c);
    (d = N.diffed) && d(e)
}

function No(r, e, t) {
    e.__d = void 0;
    for (var i = 0; i < t.length; i++) sr(t[i], t[++i], t[++i]);
    N.__c && N.__c(e, r), r.some(function(n) {
        try {
            r = n.__h, n.__h = [], r.some(function(s) {
                s.call(n)
            })
        } catch (s) {
            N.__e(s, n.__v)
        }
    })
}

function qo(r, e, t, i, n, s, o, a, l) {
    var c, d, u, _, h, g, v, E = t.props,
        y = e.props,
        b = e.type;
    if (b === "svg" && (n = !0), s != null) {
        for (c = 0; c < s.length; c++)
            if ((h = s[c]) && "setAttribute" in h == !!b && (b ? h.localName === b : h.nodeType === 3)) {
                r = h, s[c] = null;
                break
            }
    }
    if (r == null) {
        if (b === null) return document.createTextNode(y);
        r = n ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, y.is && y), s = null, a = !1
    }
    if (b === null) E === y || a && r.data === y || (r.data = y);
    else {
        if (s = s && rs.call(r.childNodes), E = t.props || Gi, !a && s != null)
            for (E = {}, c = 0; c < r.attributes.length; c++) E[(h = r.attributes[c]).name] = h.value;
        for (c in E) h = E[c], c == "children" || (c == "dangerouslySetInnerHTML" ? u = h : c === "key" || c in y || Lt(r, c, null, h, n));
        for (c in y) h = y[c], c == "children" ? _ = h : c == "dangerouslySetInnerHTML" ? d = h : c == "value" ? g = h : c == "checked" ? v = h : c === "key" || a && typeof h != "function" || E[c] === h || Lt(r, c, h, E[c], n);
        if (d) a || u && (d.__html === u.__html || d.__html === r.innerHTML) || (r.innerHTML = d.__html), e.__k = [];
        else if (u && (r.innerHTML = ""), cs(r, rr(_) ? _ : [_], e, t, i, n && b !== "foreignObject", s, o, s ? s[0] : t.__k && ut(t, 0), a, l), s != null)
            for (c = s.length; c--;) s[c] != null && ls(s[c]);
        a || (c = "value", g !== void 0 && (g !== r[c] || b === "progress" && !g || b === "option" && g !== E[c]) && Lt(r, c, g, E[c], !1), c = "checked", v !== void 0 && v !== r[c] && Lt(r, c, v, E[c], !1))
    }
    return r
}

function sr(r, e, t) {
    try {
        typeof r == "function" ? r(e) : r.current = e
    } catch (i) {
        N.__e(i, t)
    }
}

function Ji(r, e, t) {
    var i, n;
    if (N.unmount && N.unmount(r), (i = r.ref) && (i.current && i.current !== r.__e || sr(i, null, e)), (i = r.__c) != null) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount()
        } catch (s) {
            N.__e(s, e)
        }
        i.base = i.__P = null, r.__c = void 0
    }
    if (i = r.__k)
        for (n = 0; n < i.length; n++) i[n] && Ji(i[n], e, t || typeof r.type != "function");
    t || r.__e == null || ls(r.__e), r.__ = r.__e = r.__d = void 0
}

function Bo(r, e, t) {
    return this.constructor(r, t)
}
rs = as.slice, N = {
    __e: function(r, e, t, i) {
        for (var n, s, o; e = e.__;)
            if ((n = e.__c) && !n.__) try {
                if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(r)), o = n.__d), n.componentDidCatch != null && (n.componentDidCatch(r, i || {}), o = n.__d), o) return n.__E = n
            } catch (a) {
                r = a
            }
        throw r
    }
}, ns = 0, Ht.prototype.setState = function(r, e) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $e({}, this.state), typeof r == "function" && (r = r($e({}, t), this.props)), r && $e(t, r), r != null && this.__v && (e && this._sb.push(e), Vi(this))
}, Ht.prototype.forceUpdate = function(r) {
    this.__v && (this.__e = !0, r && this.__h.push(r), Vi(this))
}, Ht.prototype.render = nr, je = [], ss = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wi = function(r, e) {
    return r.__v.__b - e.__v.__b
}, ii.__r = 0, os = 0;
(function(r, e) {
    var t = {
        __c: e = "__cC" + os++,
        __: r,
        Consumer: function(i, n) {
            return i.children(n)
        },
        Provider: function(i) {
            var n, s;
            return this.getChildContext || (n = [], (s = {})[e] = this, this.getChildContext = function() {
                return s
            }, this.shouldComponentUpdate = function(o) {
                this.props.value !== o.value && n.some(function(a) {
                    a.__e = !0, Vi(a)
                })
            }, this.sub = function(o) {
                n.push(o);
                var a = o.componentWillUnmount;
                o.componentWillUnmount = function() {
                    n.splice(n.indexOf(o), 1), a && a.call(o)
                }
            }), i.children
        }
    };
    t.Provider.__ = t.Consumer.contextType = t
})({
    isPreviewMode: !1,
    previewPageIndex: 0,
    handleCloseSurveyPopup: () => {},
    isPopup: !0
});
var _t = Z("[Surveys]"),
    Ho = {
        icontains: r => !!p && p.location.href.toLowerCase().indexOf(r.toLowerCase()) > -1,
        not_icontains: r => !!p && p.location.href.toLowerCase().indexOf(r.toLowerCase()) === -1,
        regex: r => !!p && st(p.location.href, r),
        not_regex: r => !!p && !st(p.location.href, r),
        exact: r => (p == null ? void 0 : p.location.href) === r,
        is_not: r => (p == null ? void 0 : p.location.href) !== r
    };
class Uo {
    constructor(e) {
        this.instance = e, this._surveyEventReceiver = null
    }
    onRemoteConfig(e) {
        this._decideServerResponse = !!e.surveys, this.loadIfEnabled()
    }
    reset() {
        localStorage.removeItem("lastSeenSurveyDate");
        var e = (() => {
            for (var t = [], i = 0; i < localStorage.length; i++) {
                var n = localStorage.key(i);
                n != null && n.startsWith("seenSurvey_") && t.push(n)
            }
            return t
        })();
        e.forEach(t => localStorage.removeItem(t))
    }
    loadIfEnabled() {
        var e, t, i, n = I == null || (e = I.__PosthogExtensions__) === null || e === void 0 ? void 0 : e.generateSurveys;
        this.instance.config.disable_surveys || !this._decideServerResponse || n || (this._surveyEventReceiver == null && (this._surveyEventReceiver = new It(this.instance)), (t = I.__PosthogExtensions__) === null || t === void 0 || (i = t.loadExternalDependency) === null || i === void 0 || i.call(t, this.instance, "surveys", s => {
            var o, a;
            if (s) return _t.error("Could not load surveys script", s);
            this._surveyManager = (o = I.__PosthogExtensions__) === null || o === void 0 || (a = o.generateSurveys) === null || a === void 0 ? void 0 : a.call(o, this.instance)
        }))
    }
    getSurveys(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        if (this.instance.config.disable_surveys) return e([]);
        this._surveyEventReceiver == null && (this._surveyEventReceiver = new It(this.instance));
        var i = this.instance.get_property(Ii);
        if (i && !t) return e(i);
        this.instance._send_request({
            url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
            method: "GET",
            callback: n => {
                var s;
                if (n.statusCode !== 200 || !n.json) return e([]);
                var o, a = n.json.surveys || [],
                    l = a.filter(c => {
                        var d, u, _, h, g, v, E, y, b, x, C, R;
                        return ((d = c.conditions) === null || d === void 0 ? void 0 : d.events) && ((u = c.conditions) === null || u === void 0 || (_ = u.events) === null || _ === void 0 ? void 0 : _.values) && ((h = c.conditions) === null || h === void 0 || (g = h.events) === null || g === void 0 || (v = g.values) === null || v === void 0 ? void 0 : v.length) > 0 || ((E = c.conditions) === null || E === void 0 ? void 0 : E.actions) && ((y = c.conditions) === null || y === void 0 || (b = y.actions) === null || b === void 0 ? void 0 : b.values) && ((x = c.conditions) === null || x === void 0 || (C = x.actions) === null || C === void 0 || (R = C.values) === null || R === void 0 ? void 0 : R.length) > 0
                    });
                return l.length > 0 && ((o = this._surveyEventReceiver) === null || o === void 0 || o.register(l)), (s = this.instance.persistence) === null || s === void 0 || s.register({
                    [Ii]: a
                }), e(a)
            }
        })
    }
    getActiveMatchingSurveys(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        this.getSurveys(i => {
            var n, s = i.filter(l => !(!l.start_date || l.end_date)).filter(l => {
                    var c, d, u, _;
                    if (!l.conditions) return !0;
                    var h = (c = l.conditions) === null || c === void 0 || !c.url || Ho[(d = (u = l.conditions) === null || u === void 0 ? void 0 : u.urlMatchType) !== null && d !== void 0 ? d : "icontains"](l.conditions.url),
                        g = (_ = l.conditions) === null || _ === void 0 || !_.selector || (w == null ? void 0 : w.querySelector(l.conditions.selector));
                    return h && g
                }),
                o = (n = this._surveyEventReceiver) === null || n === void 0 ? void 0 : n.getSurveys(),
                a = s.filter(l => {
                    var c, d, u, _, h, g, v, E, y, b, x;
                    if (!(l.linked_flag_key || l.targeting_flag_key || l.internal_targeting_flag_key || (c = l.feature_flag_keys) !== null && c !== void 0 && c.length)) return !0;
                    var C = !l.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(l.linked_flag_key),
                        R = !l.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(l.targeting_flag_key),
                        L = ((d = l.conditions) === null || d === void 0 ? void 0 : d.events) && ((u = l.conditions) === null || u === void 0 || (_ = u.events) === null || _ === void 0 ? void 0 : _.values) && ((h = l.conditions) === null || h === void 0 || (g = h.events) === null || g === void 0 ? void 0 : g.values.length) > 0,
                        $ = ((v = l.conditions) === null || v === void 0 ? void 0 : v.actions) && ((E = l.conditions) === null || E === void 0 || (y = E.actions) === null || y === void 0 ? void 0 : y.values) && ((b = l.conditions) === null || b === void 0 || (x = b.actions) === null || x === void 0 ? void 0 : x.values.length) > 0,
                        P = !L && !$ || (o == null ? void 0 : o.includes(l.id)),
                        A = this._canActivateRepeatedly(l),
                        B = !(l.internal_targeting_flag_key && !A) || this.instance.featureFlags.isFeatureEnabled(l.internal_targeting_flag_key),
                        ie = this.checkFlags(l);
                    return C && R && B && P && ie
                });
            return e(a)
        }, t)
    }
    checkFlags(e) {
        var t;
        return (t = e.feature_flag_keys) === null || t === void 0 || !t.length || e.feature_flag_keys.every(i => {
            var {
                key: n,
                value: s
            } = i;
            return !n || !s || this.instance.featureFlags.isFeatureEnabled(s)
        })
    }
    getNextSurveyStep(e, t, i) {
        var n, s = e.questions[t],
            o = t + 1;
        if ((n = s.branching) === null || n === void 0 || !n.type) return t === e.questions.length - 1 ? ce.End : o;
        if (s.branching.type === ce.End) return ce.End;
        if (s.branching.type === ce.SpecificQuestion) {
            if (Number.isInteger(s.branching.index)) return s.branching.index
        } else if (s.branching.type === ce.ResponseBased) {
            if (s.type === ti.SingleChoice) {
                var a, l, c = s.choices.indexOf("".concat(i));
                if ((a = s.branching) !== null && a !== void 0 && (l = a.responseValues) !== null && l !== void 0 && l.hasOwnProperty(c)) {
                    var d = s.branching.responseValues[c];
                    return Number.isInteger(d) ? d : d === ce.End ? ce.End : o
                }
            } else if (s.type === ti.Rating) {
                var u, _;
                if (typeof i != "number" || !Number.isInteger(i)) throw new Error("The response type must be an integer");
                var h = function(v, E) {
                    if (E === 3) {
                        if (v < 1 || v > 3) throw new Error("The response must be in range 1-3");
                        return v === 1 ? "negative" : v === 2 ? "neutral" : "positive"
                    }
                    if (E === 5) {
                        if (v < 1 || v > 5) throw new Error("The response must be in range 1-5");
                        return v <= 2 ? "negative" : v === 3 ? "neutral" : "positive"
                    }
                    if (E === 7) {
                        if (v < 1 || v > 7) throw new Error("The response must be in range 1-7");
                        return v <= 3 ? "negative" : v === 4 ? "neutral" : "positive"
                    }
                    if (E === 10) {
                        if (v < 0 || v > 10) throw new Error("The response must be in range 0-10");
                        return v <= 6 ? "detractors" : v <= 8 ? "passives" : "promoters"
                    }
                    throw new Error("The scale must be one of: 3, 5, 7, 10")
                }(i, s.scale);
                if ((u = s.branching) !== null && u !== void 0 && (_ = u.responseValues) !== null && _ !== void 0 && _.hasOwnProperty(h)) {
                    var g = s.branching.responseValues[h];
                    return Number.isInteger(g) ? g : g === ce.End ? ce.End : o
                }
            }
            return o
        }
        return _t.warn("Falling back to next question index due to unexpected branching type"), o
    }
    _canActivateRepeatedly(e) {
        var t;
        return M((t = I.__PosthogExtensions__) === null || t === void 0 ? void 0 : t.canActivateRepeatedly) ? (_t.warn("init was not called"), !1) : I.__PosthogExtensions__.canActivateRepeatedly(e)
    }
    canRenderSurvey(e) {
        M(this._surveyManager) ? _t.warn("init was not called") : this.getSurveys(t => {
            var i = t.filter(n => n.id === e)[0];
            this._surveyManager.canRenderSurvey(i)
        })
    }
    renderSurvey(e, t) {
        M(this._surveyManager) ? _t.warn("init was not called") : this.getSurveys(i => {
            var n = i.filter(s => s.id === e)[0];
            this._surveyManager.renderSurvey(n, w == null ? void 0 : w.querySelector(t))
        })
    }
}
var nn = Z("[RateLimiter]");
class zo {
    constructor(e) {
        var t, i;
        m(this, "serverLimits", {}), m(this, "lastEventRateLimited", !1), m(this, "checkForLimiting", n => {
            var s = n.text;
            if (s && s.length) try {
                (JSON.parse(s).quota_limited || []).forEach(o => {
                    nn.info("".concat(o || "events", " is quota limited.")), this.serverLimits[o] = new Date().getTime() + 6e4
                })
            } catch (o) {
                return void nn.warn('could not rate limit - continuing. Error: "'.concat(o == null ? void 0 : o.message, '"'), {
                    text: s
                })
            }
        }), this.instance = e, this.captureEventsPerSecond = ((t = e.config.rate_limiting) === null || t === void 0 ? void 0 : t.events_per_second) || 10, this.captureEventsBurstLimit = Math.max(((i = e.config.rate_limiting) === null || i === void 0 ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
    }
    clientRateLimitContext() {
        var e, t, i, n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
            s = new Date().getTime(),
            o = (e = (t = this.instance.persistence) === null || t === void 0 ? void 0 : t.get_property(Ri)) !== null && e !== void 0 ? e : {
                tokens: this.captureEventsBurstLimit,
                last: s
            };
        o.tokens += (s - o.last) / 1e3 * this.captureEventsPerSecond, o.last = s, o.tokens > this.captureEventsBurstLimit && (o.tokens = this.captureEventsBurstLimit);
        var a = o.tokens < 1;
        return a || n || (o.tokens = Math.max(0, o.tokens - 1)), !a || this.lastEventRateLimited || n || this.instance.capture("$$client_ingestion_warning", {
            $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
        }, {
            skip_client_rate_limiting: !0
        }), this.lastEventRateLimited = a, (i = this.instance.persistence) === null || i === void 0 || i.set_property(Ri, o), {
            isRateLimited: a,
            remainingTokens: o.tokens
        }
    }
    isServerRateLimited(e) {
        var t = this.serverLimits[e || "events"] || !1;
        return t !== !1 && new Date().getTime() < t
    }
}
var jo = () => f({
    initialPathName: (Q == null ? void 0 : Q.pathname) || "",
    referringDomain: D.referringDomain()
}, D.campaignParams());
class Wo {
    constructor(e, t, i) {
        m(this, "_onSessionIdCallback", n => {
            var s = this._getStoredProps();
            if (!s || s.sessionId !== n) {
                var o = {
                    sessionId: n,
                    props: this._sessionSourceParamGenerator()
                };
                this._persistence.register({
                    [Pi]: o
                })
            }
        }), this._sessionIdManager = e, this._persistence = t, this._sessionSourceParamGenerator = i || jo, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
    }
    _getStoredProps() {
        return this._persistence.props[Pi]
    }
    getSessionProps() {
        var e, t = (e = this._getStoredProps()) === null || e === void 0 ? void 0 : e.props;
        return t ? {
            $client_session_initial_referring_host: t.referringDomain,
            $client_session_initial_pathname: t.initialPathName,
            $client_session_initial_utm_source: t.utm_source,
            $client_session_initial_utm_campaign: t.utm_campaign,
            $client_session_initial_utm_medium: t.utm_medium,
            $client_session_initial_utm_content: t.utm_content,
            $client_session_initial_utm_term: t.utm_term
        } : {}
    }
}
var Go = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
    sn = function(r, e) {
        if (!r) return !1;
        var t = r.toLowerCase();
        return Go.concat(e || []).some(i => {
            var n = i.toLowerCase();
            return t.indexOf(n) !== -1
        })
    },
    _s = function(r, e) {
        if (!r) return !1;
        var t = r.userAgent;
        if (t && sn(t, e)) return !0;
        try {
            var i = r == null ? void 0 : r.userAgentData;
            if (i != null && i.brands && i.brands.some(n => sn(n == null ? void 0 : n.brand, e))) return !0
        } catch {}
        return !!r.webdriver
    };
class ps {
    constructor() {
        this.clicks = []
    }
    isRageClick(e, t, i) {
        var n = this.clicks[this.clicks.length - 1];
        if (n && Math.abs(e - n.x) + Math.abs(t - n.y) < 30 && i - n.timestamp < 1e3) {
            if (this.clicks.push({
                    x: e,
                    y: t,
                    timestamp: i
                }), this.clicks.length === 3) return !0
        } else this.clicks = [{
            x: e,
            y: t,
            timestamp: i
        }];
        return !1
    }
}
var Dt = Z("[Dead Clicks]"),
    Vo = () => !0,
    Jo = r => {
        var e, t = !((e = r.instance.persistence) === null || e === void 0 || !e.get_property(bn)),
            i = r.instance.config.capture_dead_clicks;
        return We(i) ? i : t
    };
class gs {
    get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
    }
    constructor(e, t, i) {
        this.instance = e, this.isEnabled = t, this.onCapture = i, this.startIfEnabled()
    }
    onRemoteConfig(e) {
        this.instance.persistence && this.instance.persistence.register({
            [bn]: e == null ? void 0 : e.captureDeadClicks
        }), this.startIfEnabled()
    }
    startIfEnabled() {
        this.isEnabled(this) && this.loadScript(() => {
            this.start()
        })
    }
    loadScript(e) {
        var t, i, n;
        (t = I.__PosthogExtensions__) !== null && t !== void 0 && t.initDeadClicksAutocapture && e(), (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.loadExternalDependency) === null || n === void 0 || n.call(i, this.instance, "dead-clicks-autocapture", s => {
            s ? Dt.error("failed to load script", s) : e()
        })
    }
    start() {
        var e;
        if (w) {
            if (!this._lazyLoadedDeadClicksAutocapture && (e = I.__PosthogExtensions__) !== null && e !== void 0 && e.initDeadClicksAutocapture) {
                var t = q(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                t.__onCapture = this.onCapture, this._lazyLoadedDeadClicksAutocapture = I.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this._lazyLoadedDeadClicksAutocapture.start(w), Dt.info("starting...")
            }
        } else Dt.error("`document` not found. Cannot start.")
    }
    stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Dt.info("stopping..."))
    }
}
var Yo = Z("[Heatmaps]");

function on(r) {
    return q(r) && "clientX" in r && "clientY" in r && K(r.clientX) && K(r.clientY)
}
class Ko {
    constructor(e) {
        var t;
        m(this, "rageclicks", new ps), m(this, "_enabledServerSide", !1), m(this, "_initialized", !1), m(this, "_flushInterval", null), this.instance = e, this._enabledServerSide = !((t = this.instance.persistence) === null || t === void 0 || !t.props[xi]), p == null || p.addEventListener("beforeunload", () => {
            this.flush()
        })
    }
    get flushIntervalMilliseconds() {
        var e = 5e3;
        return q(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e
    }
    get isEnabled() {
        return S(this.instance.config.capture_heatmaps) ? S(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : this.instance.config.capture_heatmaps !== !1
    }
    startIfEnabled() {
        if (this.isEnabled) {
            if (this._initialized) return;
            Yo.info("starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds)
        } else {
            var e, t;
            clearInterval((e = this._flushInterval) !== null && e !== void 0 ? e : void 0), (t = this.deadClicksCapture) === null || t === void 0 || t.stop(), this.getAndClearBuffer()
        }
    }
    onRemoteConfig(e) {
        var t = !!e.heatmaps;
        this.instance.persistence && this.instance.persistence.register({
            [xi]: t
        }), this._enabledServerSide = t, this.startIfEnabled()
    }
    getAndClearBuffer() {
        var e = this.buffer;
        return this.buffer = void 0, e
    }
    _onDeadClick(e) {
        this._onClick(e.originalEvent, "deadclick")
    }
    _setupListeners() {
        p && w && (ke(w, "click", e => this._onClick(e || (p == null ? void 0 : p.event)), !1, !0), ke(w, "mousemove", e => this._onMouseMove(e || (p == null ? void 0 : p.event)), !1, !0), this.deadClicksCapture = new gs(this.instance, Vo, this._onDeadClick.bind(this)), this.deadClicksCapture.startIfEnabled(), this._initialized = !0)
    }
    _getProperties(e, t) {
        var i = this.instance.scrollManager.scrollY(),
            n = this.instance.scrollManager.scrollX(),
            s = this.instance.scrollManager.scrollElement(),
            o = function(a, l, c) {
                for (var d = a; d && si(d) && !Me(d, "body");) {
                    if (d === c) return !1;
                    if (F(l, p == null ? void 0 : p.getComputedStyle(d).position)) return !0;
                    d = Hn(d)
                }
                return !1
            }(Bn(e), ["fixed", "sticky"], s);
        return {
            x: e.clientX + (o ? 0 : n),
            y: e.clientY + (o ? 0 : i),
            target_fixed: o,
            type: t
        }
    }
    _onClick(e) {
        var t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click";
        if (!Lr(e.target) && on(e)) {
            var n = this._getProperties(e, i);
            (t = this.rageclicks) !== null && t !== void 0 && t.isRageClick(e.clientX, e.clientY, new Date().getTime()) && this._capture(f(f({}, n), {}, {
                type: "rageclick"
            })), this._capture(n)
        }
    }
    _onMouseMove(e) {
        !Lr(e.target) && on(e) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
            this._capture(this._getProperties(e, "mousemove"))
        }, 500))
    }
    _capture(e) {
        if (p) {
            var t = p.location.href;
            this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
        }
    }
    flush() {
        this.buffer && !Qe(this.buffer) && this.instance.capture("$$heatmap", {
            $heatmap_data: this.getAndClearBuffer()
        })
    }
}
class Xo {
    constructor(e) {
        m(this, "_updateScrollData", () => {
            var t, i, n, s;
            this.context || (this.context = {});
            var o = this.scrollElement(),
                a = this.scrollY(),
                l = o ? Math.max(0, o.scrollHeight - o.clientHeight) : 0,
                c = a + ((o == null ? void 0 : o.clientHeight) || 0),
                d = (o == null ? void 0 : o.scrollHeight) || 0;
            this.context.lastScrollY = Math.ceil(a), this.context.maxScrollY = Math.max(a, (t = this.context.maxScrollY) !== null && t !== void 0 ? t : 0), this.context.maxScrollHeight = Math.max(l, (i = this.context.maxScrollHeight) !== null && i !== void 0 ? i : 0), this.context.lastContentY = c, this.context.maxContentY = Math.max(c, (n = this.context.maxContentY) !== null && n !== void 0 ? n : 0), this.context.maxContentHeight = Math.max(d, (s = this.context.maxContentHeight) !== null && s !== void 0 ? s : 0)
        }), this.instance = e
    }
    getContext() {
        return this.context
    }
    resetContext() {
        var e = this.context;
        return setTimeout(this._updateScrollData, 0), e
    }
    startMeasuringScrollPosition() {
        p == null || p.addEventListener("scroll", this._updateScrollData, !0), p == null || p.addEventListener("scrollend", this._updateScrollData, !0), p == null || p.addEventListener("resize", this._updateScrollData)
    }
    scrollElement() {
        if (!this.instance.config.scroll_root_selector) return p == null ? void 0 : p.document.documentElement;
        var e = H(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector];
        for (var t of e) {
            var i = p == null ? void 0 : p.document.querySelector(t);
            if (i) return i
        }
    }
    scrollY() {
        if (this.instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return e && e.scrollTop || 0
        }
        return p && (p.scrollY || p.pageYOffset || p.document.documentElement.scrollTop) || 0
    }
    scrollX() {
        if (this.instance.config.scroll_root_selector) {
            var e = this.scrollElement();
            return e && e.scrollLeft || 0
        }
        return p && (p.scrollX || p.pageXOffset || p.document.documentElement.scrollLeft) || 0
    }
}
var an = Z("[AutoCapture]");

function wi(r, e) {
    return e.length > r ? e.slice(0, r) + "..." : e
}

function Zo(r) {
    if (r.previousElementSibling) return r.previousElementSibling;
    var e = r;
    do e = e.previousSibling; while (e && !si(e));
    return e
}

function Qo(r, e, t, i) {
    var n = r.tagName.toLowerCase(),
        s = {
            tag_name: n
        };
    Di.indexOf(n) > -1 && !t && (n.toLowerCase() === "a" || n.toLowerCase() === "button" ? s.$el_text = wi(1024, Wn(r)) : s.$el_text = wi(1024, oi(r)));
    var o = Zt(r);
    o.length > 0 && (s.classes = o.filter(function(d) {
        return d !== ""
    })), T(r.attributes, function(d) {
        var u;
        if ((!Un(r) || ["name", "id", "class", "aria-label"].indexOf(d.name) !== -1) && (i == null || !i.includes(d.name)) && !e && at(d.value) && (u = d.name, !G(u) || u.substring(0, 10) !== "_ngcontent" && u.substring(0, 7) !== "_nghost")) {
            var _ = d.value;
            d.name === "class" && (_ = er(_).join(" ")), s["attr__" + d.name] = wi(1024, _)
        }
    });
    for (var a = 1, l = 1, c = r; c = Zo(c);) a++, c.tagName === r.tagName && l++;
    return s.nth_child = a, s.nth_of_type = l, s
}

function ea(r, e) {
    for (var t, i, {
            e: n,
            maskAllElementAttributes: s,
            maskAllText: o,
            elementAttributeIgnoreList: a,
            elementsChainAsString: l
        } = e, c = [r], d = r; d.parentNode && !Me(d, "body");) Nn(d.parentNode) ? (c.push(d.parentNode.host), d = d.parentNode.host) : (c.push(d.parentNode), d = d.parentNode);
    var u, _ = [],
        h = {},
        g = !1,
        v = !1;
    if (T(c, C => {
            var R = Ni(C);
            C.tagName.toLowerCase() === "a" && (g = C.getAttribute("href"), g = R && g && at(g) && g), F(Zt(C), "ph-no-capture") && (v = !0), _.push(Qo(C, s, o, a));
            var L = function($) {
                if (!Ni($)) return {};
                var P = {};
                return T($.attributes, function(A) {
                    if (A.name && A.name.indexOf("data-ph-capture-attribute") === 0) {
                        var B = A.name.replace("data-ph-capture-attribute-", ""),
                            ie = A.value;
                        B && ie && at(ie) && (P[B] = ie)
                    }
                }), P
            }(C);
            X(h, L)
        }), v) return {
        props: {},
        explicitNoCapture: v
    };
    if (o || (r.tagName.toLowerCase() === "a" || r.tagName.toLowerCase() === "button" ? _[0].$el_text = Wn(r) : _[0].$el_text = oi(r)), g) {
        var E, y;
        _[0].attr__href = g;
        var b = (E = it(g)) === null || E === void 0 ? void 0 : E.host,
            x = p == null || (y = p.location) === null || y === void 0 ? void 0 : y.host;
        b && x && b !== x && (u = g)
    }
    return {
        props: X({
            $event_type: n.type,
            $ce_version: 1
        }, l ? {} : {
            $elements: _
        }, {
            $elements_chain: io(_)
        }, (t = _[0]) !== null && t !== void 0 && t.$el_text ? {
            $el_text: (i = _[0]) === null || i === void 0 ? void 0 : i.$el_text
        } : {}, u && n.type === "click" ? {
            $external_click_url: u
        } : {}, h)
    }
}
class ta {
    constructor(e) {
        m(this, "_initialized", !1), m(this, "_isDisabledServerSide", null), m(this, "rageclicks", new ps), m(this, "_elementsChainAsString", !1), this.instance = e, this._elementSelectors = null
    }
    get config() {
        var e, t, i = q(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
        return i.url_allowlist = (e = i.url_allowlist) === null || e === void 0 ? void 0 : e.map(n => new RegExp(n)), i.url_ignorelist = (t = i.url_ignorelist) === null || t === void 0 ? void 0 : t.map(n => new RegExp(n)), i
    }
    _addDomEventHandlers() {
        if (this.isBrowserSupported()) {
            if (p && w) {
                var e = i => {
                        i = i || (p == null ? void 0 : p.event);
                        try {
                            this._captureEvent(i)
                        } catch (n) {
                            an.error("Failed to capture event", n)
                        }
                    },
                    t = i => {
                        i = i || (p == null ? void 0 : p.event), this._captureEvent(i, ci)
                    };
                ke(w, "submit", e, !1, !0), ke(w, "change", e, !1, !0), ke(w, "click", e, !1, !0), this.config.capture_copied_text && (ke(w, "copy", t, !1, !0), ke(w, "cut", t, !1, !0))
            }
        } else an.info("Disabling Automatic Event Collection because this browser is not supported")
    }
    startIfEnabled() {
        this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
    }
    onRemoteConfig(e) {
        e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
            [fr]: !!e.autocapture_opt_out
        }), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
    }
    setElementSelectors(e) {
        this._elementSelectors = e
    }
    getElementSelectors(e) {
        var t, i = [];
        return (t = this._elementSelectors) === null || t === void 0 || t.forEach(n => {
            var s = w == null ? void 0 : w.querySelectorAll(n);
            s == null || s.forEach(o => {
                e === o && i.push(n)
            })
        }), i
    }
    get isEnabled() {
        var e, t, i = (e = this.instance.persistence) === null || e === void 0 ? void 0 : e.props[fr],
            n = this._isDisabledServerSide;
        if (Ae(n) && !We(i) && !this.instance.config.advanced_disable_decide) return !1;
        var s = (t = this._isDisabledServerSide) !== null && t !== void 0 ? t : !!i;
        return !!this.instance.config.autocapture && !s
    }
    _captureEvent(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "$autocapture";
        if (this.isEnabled) {
            var i, n = Bn(e);
            Dn(n) && (n = n.parentNode || null), t === "$autocapture" && e.type === "click" && e instanceof MouseEvent && this.instance.config.rageclick && (i = this.rageclicks) !== null && i !== void 0 && i.isRageClick(e.clientX, e.clientY, new Date().getTime()) && this._captureEvent(e, "$rageclick");
            var s = t === ci;
            if (n && Xs(n, e, this.config, s, s ? ["copy", "cut"] : void 0)) {
                var {
                    props: o,
                    explicitNoCapture: a
                } = ea(n, {
                    e,
                    maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                    maskAllText: this.instance.config.mask_all_text,
                    elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
                    elementsChainAsString: this._elementsChainAsString
                });
                if (a) return !1;
                var l = this.getElementSelectors(n);
                if (l && l.length > 0 && (o.$element_selectors = l), t === ci) {
                    var c, d = qn(p == null || (c = p.getSelection()) === null || c === void 0 ? void 0 : c.toString()),
                        u = e.type || "clipboard";
                    if (!d) return !1;
                    o.$selected_content = d, o.$copy_type = u
                }
                return this.instance.capture(t, o), !0
            }
        }
    }
    isBrowserSupported() {
        return ae(w == null ? void 0 : w.querySelectorAll)
    }
}
var ia = Z("[TracingHeaders]");
class ra {
    constructor(e) {
        m(this, "_restoreXHRPatch", void 0), m(this, "_restoreFetchPatch", void 0), m(this, "_startCapturing", () => {
            var t, i, n, s;
            S(this._restoreXHRPatch) && ((t = I.__PosthogExtensions__) === null || t === void 0 || (i = t.tracingHeadersPatchFns) === null || i === void 0 || i._patchXHR(this.instance.sessionManager)), S(this._restoreFetchPatch) && ((n = I.__PosthogExtensions__) === null || n === void 0 || (s = n.tracingHeadersPatchFns) === null || s === void 0 || s._patchFetch(this.instance.sessionManager))
        }), this.instance = e
    }
    _loadScript(e) {
        var t, i, n;
        (t = I.__PosthogExtensions__) !== null && t !== void 0 && t.tracingHeadersPatchFns && e(), (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.loadExternalDependency) === null || n === void 0 || n.call(i, this.instance, "tracing-headers", s => {
            if (s) return ia.error("failed to load script", s);
            e()
        })
    }
    startIfEnabledOrStop() {
        var e, t;
        this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : ((e = this._restoreXHRPatch) === null || e === void 0 || e.call(this), (t = this._restoreFetchPatch) === null || t === void 0 || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0)
    }
}
var Fe;
(function(r) {
    r[r.PENDING = -1] = "PENDING", r[r.DENIED = 0] = "DENIED", r[r.GRANTED = 1] = "GRANTED"
})(Fe || (Fe = {}));
class na {
    constructor(e) {
        this.instance = e
    }
    get config() {
        return this.instance.config
    }
    get consent() {
        return this.getDnt() ? Fe.DENIED : this.storedConsent
    }
    isOptedOut() {
        return this.consent === Fe.DENIED || this.consent === Fe.PENDING && this.config.opt_out_capturing_by_default
    }
    isOptedIn() {
        return !this.isOptedOut()
    }
    optInOut(e) {
        this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
    }
    reset() {
        this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
    }
    get storageKey() {
        var {
            token: e,
            opt_out_capturing_cookie_prefix: t
        } = this.instance.config;
        return (t || "__ph_opt_in_out_") + e
    }
    get storedConsent() {
        var e = this.storage.get(this.storageKey);
        return e === "1" ? Fe.GRANTED : e === "0" ? Fe.DENIED : Fe.PENDING
    }
    get storage() {
        if (!this._storage) {
            var e = this.config.opt_out_capturing_persistence_type;
            this._storage = e === "localStorage" ? U : xe;
            var t = e === "localStorage" ? xe : U;
            t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut(t.get(this.storageKey) === "1"), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
        }
        return this._storage
    }
    getDnt() {
        return !!this.config.respect_dnt && !!fn([ne == null ? void 0 : ne.doNotTrack, ne == null ? void 0 : ne.msDoNotTrack, I.doNotTrack], e => F([!0, 1, "1", "yes"], e))
    }
}
var Nt = Z("[ExceptionAutocapture]");
class sa {
    constructor(e) {
        var t;
        m(this, "originalOnUnhandledRejectionHandler", void 0), m(this, "startCapturing", () => {
            var i, n, s, o;
            if (p && this.isEnabled && !this.hasHandlers && !this.isCapturing) {
                var a = (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.errorWrappingFunctions) === null || n === void 0 ? void 0 : n.wrapOnError,
                    l = (s = I.__PosthogExtensions__) === null || s === void 0 || (o = s.errorWrappingFunctions) === null || o === void 0 ? void 0 : o.wrapUnhandledRejection;
                if (a && l) try {
                    this.unwrapOnError = a(this.captureException.bind(this)), this.unwrapUnhandledRejection = l(this.captureException.bind(this))
                } catch (c) {
                    Nt.error("failed to start", c), this.stopCapturing()
                } else Nt.error("failed to load error wrapping functions - cannot start")
            }
        }), this.instance = e, this.remoteEnabled = !((t = this.instance.persistence) === null || t === void 0 || !t.props[mr]), this.startIfEnabled()
    }
    get isEnabled() {
        var e;
        return (e = this.remoteEnabled) !== null && e !== void 0 && e
    }
    get isCapturing() {
        var e;
        return !(p == null || (e = p.onerror) === null || e === void 0 || !e.__POSTHOG_INSTRUMENTED__)
    }
    get hasHandlers() {
        return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
    }
    startIfEnabled() {
        this.isEnabled && !this.isCapturing && (Nt.info("enabled, starting..."), this.loadScript(this.startCapturing))
    }
    loadScript(e) {
        var t, i;
        this.hasHandlers && e(), (t = I.__PosthogExtensions__) === null || t === void 0 || (i = t.loadExternalDependency) === null || i === void 0 || i.call(t, this.instance, "exception-autocapture", n => {
            if (n) return Nt.error("failed to load script", n);
            e()
        })
    }
    stopCapturing() {
        var e, t;
        (e = this.unwrapOnError) === null || e === void 0 || e.call(this), (t = this.unwrapUnhandledRejection) === null || t === void 0 || t.call(this)
    }
    onRemoteConfig(e) {
        var t = e.autocaptureExceptions;
        this.remoteEnabled = !!t || !1, this.instance.persistence && this.instance.persistence.register({
            [mr]: this.remoteEnabled
        }), this.startIfEnabled()
    }
    captureException(e) {
        var t = this.instance.requestRouter.endpointFor("ui");
        e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.instance.exceptions.sendExceptionEvent(e)
    }
}
var Be = Z("[Web Vitals]"),
    ln = 9e5;
class oa {
    constructor(e) {
        var t;
        m(this, "_enabledServerSide", !1), m(this, "_initialized", !1), m(this, "buffer", {
            url: void 0,
            metrics: [],
            firstMetricTimestamp: void 0
        }), m(this, "_flushToCapture", () => {
            clearTimeout(this._delayedFlushTimer), this.buffer.metrics.length !== 0 && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce((i, n) => f(f({}, i), {}, {
                ["$web_vitals_".concat(n.name, "_event")]: f({}, n),
                ["$web_vitals_".concat(n.name, "_value")]: n.value
            }), {})), this.buffer = {
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
            })
        }), m(this, "_addToBuffer", i => {
            var n, s = (n = this.instance.sessionManager) === null || n === void 0 ? void 0 : n.checkAndGetSessionAndWindowId(!0);
            if (S(s)) Be.error("Could not read session ID. Dropping metrics!");
            else {
                this.buffer = this.buffer || {
                    url: void 0,
                    metrics: [],
                    firstMetricTimestamp: void 0
                };
                var o = this._currentURL();
                S(o) || (M(i == null ? void 0 : i.name) || M(i == null ? void 0 : i.value) ? Be.error("Invalid metric received", i) : this._maxAllowedValue && i.value >= this._maxAllowedValue ? Be.error("Ignoring metric with value >= " + this._maxAllowedValue, i) : (this.buffer.url !== o && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), S(this.buffer.url) && (this.buffer.url = o), this.buffer.firstMetricTimestamp = S(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, i.attribution && i.attribution.interactionTargetElement && (i.attribution.interactionTargetElement = void 0), this.buffer.metrics.push(f(f({}, i), {}, {
                    $current_url: o,
                    $session_id: s.sessionId,
                    $window_id: s.windowId,
                    timestamp: Date.now()
                })), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()))
            }
        }), m(this, "_startCapturing", () => {
            var i, n, s, o, a = I.__PosthogExtensions__;
            S(a) || S(a.postHogWebVitalsCallbacks) || ({
                onLCP: i,
                onCLS: n,
                onFCP: s,
                onINP: o
            } = a.postHogWebVitalsCallbacks), i && n && s && o ? (this.allowedMetrics.indexOf("LCP") > -1 && i(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && n(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && s(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && o(this._addToBuffer.bind(this)), this._initialized = !0) : Be.error("web vitals callbacks not loaded - not starting")
        }), this.instance = e, this._enabledServerSide = !((t = this.instance.persistence) === null || t === void 0 || !t.props[br]), this.startIfEnabled()
    }
    get allowedMetrics() {
        var e, t, i = q(this.instance.config.capture_performance) ? (e = this.instance.config.capture_performance) === null || e === void 0 ? void 0 : e.web_vitals_allowed_metrics : void 0;
        return S(i) ? ((t = this.instance.persistence) === null || t === void 0 ? void 0 : t.props[yr]) || ["CLS", "FCP", "INP", "LCP"] : i
    }
    get flushToCaptureTimeoutMs() {
        return (q(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3
    }
    get _maxAllowedValue() {
        var e = q(this.instance.config.capture_performance) && K(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : ln;
        return 0 < e && e <= 6e4 ? ln : e
    }
    get isEnabled() {
        var e = q(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
        return We(e) ? e : this._enabledServerSide
    }
    startIfEnabled() {
        this.isEnabled && !this._initialized && (Be.info("enabled, starting..."), this.loadScript(this._startCapturing))
    }
    onRemoteConfig(e) {
        var t = q(e.capturePerformance) && !!e.capturePerformance.web_vitals,
            i = q(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
        this.instance.persistence && (this.instance.persistence.register({
            [br]: t
        }), this.instance.persistence.register({
            [yr]: i
        })), this._enabledServerSide = t, this.startIfEnabled()
    }
    loadScript(e) {
        var t, i, n;
        (t = I.__PosthogExtensions__) !== null && t !== void 0 && t.postHogWebVitalsCallbacks && e(), (i = I.__PosthogExtensions__) === null || i === void 0 || (n = i.loadExternalDependency) === null || n === void 0 || n.call(i, this.instance, "web-vitals", s => {
            s ? Be.error("failed to load script", s) : e()
        })
    }
    _currentURL() {
        var e = p ? p.location.href : void 0;
        return e || Be.error("Could not determine current URL"), e
    }
}
var aa = {
    icontains: (r, e) => !!p && e.href.toLowerCase().indexOf(r.toLowerCase()) > -1,
    not_icontains: (r, e) => !!p && e.href.toLowerCase().indexOf(r.toLowerCase()) === -1,
    regex: (r, e) => !!p && st(e.href, r),
    not_regex: (r, e) => !!p && !st(e.href, r),
    exact: (r, e) => e.href === r,
    is_not: (r, e) => e.href !== r
};
class z {
    constructor(e) {
        var t = this;
        m(this, "getWebExperimentsAndEvaluateDisplayLogic", function() {
            var i = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            t.getWebExperiments(n => {
                z.logInfo("retrieved web experiments from the server"), t._flagToExperiments = new Map, n.forEach(s => {
                    if (s.feature_flag_key) {
                        var o;
                        t._flagToExperiments && (z.logInfo("setting flag key ", s.feature_flag_key, " to web experiment ", s), (o = t._flagToExperiments) === null || o === void 0 || o.set(s.feature_flag_key, s));
                        var a = t.instance.getFeatureFlag(s.feature_flag_key);
                        G(a) && s.variants[a] && t.applyTransforms(s.name, a, s.variants[a].transforms)
                    } else if (s.variants)
                        for (var l in s.variants) {
                            var c = s.variants[l];
                            z.matchesTestVariant(c) && t.applyTransforms(s.name, l, c.transforms)
                        }
                })
            }, i)
        }), this.instance = e, this.instance.onFeatureFlags(i => {
            this.onFeatureFlags(i)
        })
    }
    onFeatureFlags(e) {
        if (this._is_bot()) z.logInfo("Refusing to render web experiment since the viewer is a likely bot");
        else if (!this.instance.config.disable_web_experiments) {
            if (M(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
            z.logInfo("applying feature flags", e), e.forEach(t => {
                var i;
                if (this._flagToExperiments && (i = this._flagToExperiments) !== null && i !== void 0 && i.has(t)) {
                    var n, s = this.instance.getFeatureFlag(t),
                        o = (n = this._flagToExperiments) === null || n === void 0 ? void 0 : n.get(t);
                    s && o != null && o.variants[s] && this.applyTransforms(o.name, s, o.variants[s].transforms)
                }
            })
        }
    }
    previewWebExperiment() {
        var e = z.getWindowLocation();
        if (e != null && e.search) {
            var t = Jt(e == null ? void 0 : e.search, "__experiment_id"),
                i = Jt(e == null ? void 0 : e.search, "__experiment_variant");
            t && i && (z.logInfo("previewing web experiments ".concat(t, " && ").concat(i)), this.getWebExperiments(n => {
                this.showPreviewWebExperiment(parseInt(t), i, n)
            }, !1, !0))
        }
    }
    loadIfEnabled() {
        this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
    }
    getWebExperiments(e, t, i) {
        if (this.instance.config.disable_web_experiments && !i) return e([]);
        var n = this.instance.get_property("$web_experiments");
        if (n && !t) return e(n);
        this.instance._send_request({
            url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)),
            method: "GET",
            callback: s => {
                if (s.statusCode !== 200 || !s.json) return e([]);
                var o = s.json.experiments || [];
                return e(o)
            }
        })
    }
    showPreviewWebExperiment(e, t, i) {
        var n = i.filter(s => s.id === e);
        n && n.length > 0 && (z.logInfo("Previewing web experiment [".concat(n[0].name, "] with variant [").concat(t, "]")), this.applyTransforms(n[0].name, t, n[0].variants[t].transforms, !0))
    }
    static matchesTestVariant(e) {
        return !M(e.conditions) && z.matchUrlConditions(e) && z.matchUTMConditions(e)
    }
    static matchUrlConditions(e) {
        var t;
        if (M(e.conditions) || M((t = e.conditions) === null || t === void 0 ? void 0 : t.url)) return !0;
        var i, n, s, o = z.getWindowLocation();
        return !!o && ((i = e.conditions) === null || i === void 0 || !i.url || aa[(n = (s = e.conditions) === null || s === void 0 ? void 0 : s.urlMatchType) !== null && n !== void 0 ? n : "icontains"](e.conditions.url, o))
    }
    static getWindowLocation() {
        return p == null ? void 0 : p.location
    }
    static matchUTMConditions(e) {
        var t;
        if (M(e.conditions) || M((t = e.conditions) === null || t === void 0 ? void 0 : t.utm)) return !0;
        var i = D.campaignParams();
        if (i.utm_source) {
            var n, s, o, a, l, c, d, u, _, h, g, v, E, y, b, x, C = (n = e.conditions) === null || n === void 0 || (s = n.utm) === null || s === void 0 || !s.utm_campaign || ((o = e.conditions) === null || o === void 0 || (a = o.utm) === null || a === void 0 ? void 0 : a.utm_campaign) == i.utm_campaign,
                R = (l = e.conditions) === null || l === void 0 || (c = l.utm) === null || c === void 0 || !c.utm_source || ((d = e.conditions) === null || d === void 0 || (u = d.utm) === null || u === void 0 ? void 0 : u.utm_source) == i.utm_source,
                L = (_ = e.conditions) === null || _ === void 0 || (h = _.utm) === null || h === void 0 || !h.utm_medium || ((g = e.conditions) === null || g === void 0 || (v = g.utm) === null || v === void 0 ? void 0 : v.utm_medium) == i.utm_medium,
                $ = (E = e.conditions) === null || E === void 0 || (y = E.utm) === null || y === void 0 || !y.utm_term || ((b = e.conditions) === null || b === void 0 || (x = b.utm) === null || x === void 0 ? void 0 : x.utm_term) == i.utm_term;
            return C && L && $ && R
        }
        return !1
    }
    static logInfo(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        k.info("[WebExperiments] ".concat(e), i)
    }
    applyTransforms(e, t, i, n) {
        var s;
        this._is_bot() ? z.logInfo("Refusing to render web experiment since the viewer is a likely bot") : t !== "control" ? i.forEach(o => {
            if (o.selector) {
                var a;
                z.logInfo("applying transform of variant ".concat(t, " for experiment ").concat(e, " "), o);
                var l, c = 0,
                    d = (a = document) === null || a === void 0 ? void 0 : a.querySelectorAll(o.selector);
                d == null || d.forEach(u => {
                    var _ = u;
                    c += 1, o.attributes && o.attributes.forEach(h => {
                        switch (h.name) {
                            case "text":
                                _.innerText = h.value;
                                break;
                            case "html":
                                _.innerHTML = h.value;
                                break;
                            case "cssClass":
                                _.className = h.value;
                                break;
                            default:
                                _.setAttribute(h.name, h.value)
                        }
                    }), o.text && (_.innerText = o.text), o.html && (_.parentElement ? _.parentElement.innerHTML = o.html : _.innerHTML = o.html), o.css && _.setAttribute("style", o.css)
                }), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", {
                    $web_experiment_name: e,
                    $web_experiment_variant: t,
                    $web_experiment_preview: n,
                    $web_experiment_document_url: (l = z.getWindowLocation()) === null || l === void 0 ? void 0 : l.href,
                    $web_experiment_elements_modified: c
                })
            }
        }) : (z.logInfo("Control variants leave the page unmodified."), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", {
            $web_experiment_name: e,
            $web_experiment_preview: n,
            $web_experiment_variant: t,
            $web_experiment_document_url: (s = z.getWindowLocation()) === null || s === void 0 ? void 0 : s.href,
            $web_experiment_elements_modified: 0
        }))
    }
    _is_bot() {
        return ne && this.instance ? _s(ne, this.instance.config.custom_blocked_useragents) : void 0
    }
}
class la {
    constructor(e) {
        this.instance = e
    }
    sendExceptionEvent(e) {
        this.instance.capture("$exception", e, {
            _noTruncate: !0,
            _batchKey: "exceptionEvent"
        })
    }
}
var ua = ["$set_once", "$set"],
    He = Z("[SiteApps]");
class ca {
    constructor(e) {
        this.instance = e, this.bufferedInvocations = [], this.apps = {}
    }
    get isEnabled() {
        return !!this.instance.config.opt_in_site_apps
    }
    eventCollector(e, t) {
        if (t) {
            var i = this.globalsForEvent(t);
            this.bufferedInvocations.push(i), this.bufferedInvocations.length > 1e3 && (this.bufferedInvocations = this.bufferedInvocations.slice(10))
        }
    }
    get siteAppLoaders() {
        var e, t;
        return (e = I._POSTHOG_REMOTE_CONFIG) === null || e === void 0 || (t = e[this.instance.config.token]) === null || t === void 0 ? void 0 : t.siteApps
    }
    init() {
        if (this.isEnabled) {
            var e = this.instance._addCaptureHook(this.eventCollector.bind(this));
            this.stopBuffering = () => {
                e(), this.bufferedInvocations = [], this.stopBuffering = void 0
            }
        }
    }
    globalsForEvent(e) {
        var t, i, n, s, o, a, l;
        if (!e) throw new Error("Event payload is required");
        var c = {},
            d = this.instance.get_property("$groups") || [],
            u = this.instance.get_property("$stored_group_properties") || {};
        for (var [_, h] of Object.entries(u)) c[_] = {
            id: d[_],
            type: _,
            properties: h
        };
        var {
            $set_once: g,
            $set: v
        } = e;
        return {
            event: f(f({}, vn(e, ua)), {}, {
                properties: f(f(f({}, e.properties), v ? {
                    $set: f(f({}, (t = (i = e.properties) === null || i === void 0 ? void 0 : i.$set) !== null && t !== void 0 ? t : {}), v)
                } : {}), g ? {
                    $set_once: f(f({}, (n = (s = e.properties) === null || s === void 0 ? void 0 : s.$set_once) !== null && n !== void 0 ? n : {}), g)
                } : {}),
                elements_chain: (o = (a = e.properties) === null || a === void 0 ? void 0 : a.$elements_chain) !== null && o !== void 0 ? o : "",
                distinct_id: (l = e.properties) === null || l === void 0 ? void 0 : l.distinct_id
            }),
            person: {
                properties: this.instance.get_property("$stored_person_properties")
            },
            groups: c
        }
    }
    setupSiteApp(e) {
        var t = {
            id: e.id,
            loaded: !1,
            errored: !1
        };
        this.apps[e.id] = t;
        var i = s => {
            var o;
            for (var a of (this.apps[e.id].errored = !s, this.apps[e.id].loaded = !0, He.info("Site app with id ".concat(e.id, " ").concat(s ? "loaded" : "errored")), s && this.bufferedInvocations.length && (He.info("Processing ".concat(this.bufferedInvocations.length, " events for site app with id ").concat(e.id)), this.bufferedInvocations.forEach(l => {
                    var c;
                    return (c = t.processEvent) === null || c === void 0 ? void 0 : c.call(t, l)
                })), Object.values(this.apps)))
                if (!a.loaded) return;
            (o = this.stopBuffering) === null || o === void 0 || o.call(this)
        };
        try {
            var {
                processEvent: n
            } = e.init({
                posthog: this.instance,
                callback: s => {
                    i(s)
                }
            });
            n && (t.processEvent = n)
        } catch (s) {
            He.error("Error while initializing PostHog app with config id ".concat(e.id), s), i(!1)
        }
    }
    onCapturedEvent(e) {
        if (Object.keys(this.apps).length !== 0) {
            var t = this.globalsForEvent(e);
            for (var i of Object.values(this.apps)) try {
                var n;
                (n = i.processEvent) === null || n === void 0 || n.call(i, t)
            } catch (s) {
                He.error("Error while processing event ".concat(e.event, " for site app ").concat(i.id), s)
            }
        }
    }
    onRemoteConfig(e) {
        var t, i, n, s = this;
        if ((t = this.siteAppLoaders) !== null && t !== void 0 && t.length) {
            if (!this.isEnabled) return void He.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            for (var o of this.siteAppLoaders) this.setupSiteApp(o);
            this.instance.on("eventCaptured", d => this.onCapturedEvent(d))
        } else if ((i = this.stopBuffering) === null || i === void 0 || i.call(this), (n = e.siteApps) !== null && n !== void 0 && n.length)
            if (this.isEnabled) {
                var a = function(d, u) {
                    var _, h;
                    I["__$$ph_site_app_".concat(d)] = s.instance, (_ = I.__PosthogExtensions__) === null || _ === void 0 || (h = _.loadSiteApp) === null || h === void 0 || h.call(_, s.instance, u, g => {
                        if (g) return He.error("Error while initializing PostHog app with config id ".concat(d), g)
                    })
                };
                for (var {
                        id: l,
                        url: c
                    } of e.siteApps) a(l, c)
            } else He.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
    }
}
var Et = {},
    Yi = () => {},
    Ze = "posthog",
    vs = !Io && (j == null ? void 0 : j.indexOf("MSIE")) === -1 && (j == null ? void 0 : j.indexOf("Mozilla")) === -1,
    un = () => {
        var r, e, t;
        return {
            api_host: "https://us.i.posthog.com",
            ui_host: null,
            token: "",
            autocapture: !0,
            rageclick: !0,
            cross_subdomain_cookie: (e = w == null ? void 0 : w.location, t = e == null ? void 0 : e.hostname, !!G(t) && t.split(".").slice(-2).join(".") !== "herokuapp.com"),
            persistence: "localStorage+cookie",
            persistence_name: "",
            loaded: Yi,
            store_google: !0,
            custom_campaign_params: [],
            custom_blocked_useragents: [],
            save_referrer: !0,
            capture_pageview: !0,
            capture_pageleave: "if_capture_pageview",
            debug: Q && G(Q == null ? void 0 : Q.search) && Q.search.indexOf("__posthog_debug=true") !== -1 || !1,
            verbose: !1,
            cookie_expiration: 365,
            upgrade: !1,
            disable_session_recording: !1,
            disable_persistence: !1,
            disable_web_experiments: !0,
            disable_surveys: !1,
            enable_recording_console_log: void 0,
            secure_cookie: (p == null || (r = p.location) === null || r === void 0 ? void 0 : r.protocol) === "https:",
            ip: !0,
            opt_out_capturing_by_default: !1,
            opt_out_persistence_by_default: !1,
            opt_out_useragent_filter: !1,
            opt_out_capturing_persistence_type: "localStorage",
            opt_out_capturing_cookie_prefix: null,
            opt_in_site_apps: !1,
            property_denylist: [],
            respect_dnt: !1,
            sanitize_properties: null,
            request_headers: {},
            inapp_protocol: "//",
            inapp_link_new_window: !1,
            request_batching: !0,
            properties_string_max_length: 65535,
            session_recording: {},
            mask_all_element_attributes: !1,
            mask_all_text: !1,
            advanced_disable_decide: !1,
            advanced_disable_feature_flags: !1,
            advanced_disable_feature_flags_on_first_load: !1,
            advanced_disable_toolbar_metrics: !1,
            feature_flag_request_timeout_ms: 3e3,
            on_request_error: i => {
                var n = "Bad HTTP status: " + i.statusCode + " " + i.text;
                k.error(n)
            },
            get_device_id: i => i,
            _onCapture: Yi,
            capture_performance: void 0,
            name: "posthog",
            bootstrap: {},
            disable_compression: !1,
            session_idle_timeout_seconds: 1800,
            person_profiles: "identified_only",
            __add_tracing_headers: !1,
            before_send: void 0
        }
    },
    cn = r => {
        var e = {};
        S(r.process_person) || (e.person_profiles = r.process_person), S(r.xhr_headers) || (e.request_headers = r.xhr_headers), S(r.cookie_name) || (e.persistence_name = r.cookie_name), S(r.disable_cookie) || (e.disable_persistence = r.disable_cookie);
        var t = X({}, e, r);
        return H(r.property_blacklist) && (S(r.property_denylist) ? t.property_denylist = r.property_blacklist : H(r.property_denylist) ? t.property_denylist = [...r.property_blacklist, ...r.property_denylist] : k.error("Invalid value for property_denylist config: " + r.property_denylist)), t
    };
class da {
    constructor() {
        m(this, "__forceAllowLocalhost", !1)
    }
    get _forceAllowLocalhost() {
        return this.__forceAllowLocalhost
    }
    set _forceAllowLocalhost(e) {
        k.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
    }
}
class ai {
    get decideEndpointWasHit() {
        var e, t;
        return (e = (t = this.featureFlags) === null || t === void 0 ? void 0 : t.hasLoadedFlags) !== null && e !== void 0 && e
    }
    constructor() {
        m(this, "webPerformance", new da), m(this, "version", Se.LIB_VERSION), m(this, "_internalEventEmitter", new is), this.config = un(), this.SentryIntegration = $o, this.sentryIntegration = e => function(t, i) {
            var n = ts(t, i);
            return {
                name: es,
                processEvent: s => n(s)
            }
        }(this, e), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._initialPersonProfilesConfig = null, this.featureFlags = new Rs(this), this.toolbar = new ko(this), this.scrollManager = new Xo(this), this.pageViewManager = new Ao(this), this.surveys = new Uo(this), this.experiments = new z(this), this.exceptions = new la(this), this.rateLimiter = new zo(this), this.requestRouter = new To(this), this.consent = new na(this), this.people = {
            set: (e, t, i) => {
                var n = G(e) ? {
                    [e]: t
                } : e;
                this.setPersonProperties(n), i == null || i({})
            },
            set_once: (e, t, i) => {
                var n = G(e) ? {
                    [e]: t
                } : e;
                this.setPersonProperties(void 0, n), i == null || i({})
            }
        }, this.on("eventCaptured", e => k.info('send "'.concat(e == null ? void 0 : e.event, '"'), e))
    }
    init(e, t, i) {
        if (i && i !== Ze) {
            var n, s = (n = Et[i]) !== null && n !== void 0 ? n : new ai;
            return s._init(e, t, i), Et[i] = s, Et[Ze][i] = s, s
        }
        return this._init(e, t, i)
    }
    _init(e) {
        var t, i, n, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            o = arguments.length > 2 ? arguments[2] : void 0;
        if (S(e) || _r(e)) return k.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
        if (this.__loaded) return k.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
        this.__loaded = !0, this.config = {}, this._triggered_notifs = [], s.person_profiles && (this._initialPersonProfilesConfig = s.person_profiles), this.set_config(X({}, un(), cn(s), {
            name: o,
            token: e
        })), this.config.on_xhr_error && k.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = s.disable_compression ? void 0 : ge.GZipJS, this.persistence = new vi(this.config), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new vi(f(f({}, this.config), {}, {
            persistence: "sessionStorage"
        }));
        var a = f({}, this.persistence.props),
            l = f({}, this.sessionPersistence.props);
        if (this._requestQueue = new xo(b => this._send_retriable_request(b)), this._retryQueue = new Ro(this), this.__request_queue = [], this.config.__preview_experimental_cookieless_mode || (this.sessionManager = new Fo(this), this.sessionPropsManager = new Wo(this.sessionManager, this.persistence)), new ra(this).startIfEnabledOrStop(), this.siteApps = new ca(this), (t = this.siteApps) === null || t === void 0 || t.init(), this.config.__preview_experimental_cookieless_mode || (this.sessionRecording = new wo(this), this.sessionRecording.startIfEnabledOrStop()), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new ta(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new Ko(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new oa(this), this.exceptionObserver = new sa(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new gs(this, Jo), this.deadClicksAutocapture.startIfEnabled(), Se.DEBUG = Se.DEBUG || this.config.debug, Se.DEBUG && k.info("Starting in debug mode", {
                this: this,
                config: s,
                thisC: f({}, this.config),
                p: a,
                s: l
            }), this._sync_opt_out_with_persistence(), ((i = s.bootstrap) === null || i === void 0 ? void 0 : i.distinctID) !== void 0) {
            var c, d, u = this.config.get_device_id(Te()),
                _ = (c = s.bootstrap) !== null && c !== void 0 && c.isIdentifiedID ? u : s.bootstrap.distinctID;
            this.persistence.set_property(ye, (d = s.bootstrap) !== null && d !== void 0 && d.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: s.bootstrap.distinctID,
                $device_id: _
            })
        }
        if (this._hasBootstrappedFeatureFlags()) {
            var h, g, v = Object.keys(((h = s.bootstrap) === null || h === void 0 ? void 0 : h.featureFlags) || {}).filter(b => {
                    var x, C;
                    return !((x = s.bootstrap) === null || x === void 0 || (C = x.featureFlags) === null || C === void 0 || !C[b])
                }).reduce((b, x) => {
                    var C, R;
                    return b[x] = ((C = s.bootstrap) === null || C === void 0 || (R = C.featureFlags) === null || R === void 0 ? void 0 : R[x]) || !1, b
                }, {}),
                E = Object.keys(((g = s.bootstrap) === null || g === void 0 ? void 0 : g.featureFlagPayloads) || {}).filter(b => v[b]).reduce((b, x) => {
                    var C, R, L, $;
                    return (C = s.bootstrap) !== null && C !== void 0 && (R = C.featureFlagPayloads) !== null && R !== void 0 && R[x] && (b[x] = (L = s.bootstrap) === null || L === void 0 || ($ = L.featureFlagPayloads) === null || $ === void 0 ? void 0 : $[x]), b
                }, {});
            this.featureFlags.receivedFeatureFlags({
                featureFlags: v,
                featureFlagPayloads: E
            })
        }
        if (this.config.__preview_experimental_cookieless_mode) this.register_once({
            distinct_id: Ir,
            $device_id: null
        }, "");
        else if (!this.get_distinct_id()) {
            var y = this.config.get_device_id(Te());
            this.register_once({
                distinct_id: y,
                $device_id: y
            }, ""), this.persistence.set_property(ye, "anonymous")
        }
        return p == null || (n = p.addEventListener) === null || n === void 0 || n.call(p, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s.segment ? Mo(this, () => this._loaded()) : this._loaded(), ae(this.config._onCapture) && this.config._onCapture !== Yi && (k.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", b => this.config._onCapture(b.event, b))), this
    }
    _onRemoteConfig(e) {
        var t, i, n, s, o, a, l, c, d;
        if (!w || !w.body) return k.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
            this._onRemoteConfig(e)
        }, 500);
        this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = F(e.supportedCompression, ge.GZipJS) ? ge.GZipJS : F(e.supportedCompression, ge.Base64) ? ge.Base64 : void 0), (t = e.analytics) !== null && t !== void 0 && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : e.defaultIdentifiedOnly ? "identified_only" : "always"
        }), (i = this.siteApps) === null || i === void 0 || i.onRemoteConfig(e), (n = this.sessionRecording) === null || n === void 0 || n.onRemoteConfig(e), (s = this.autocapture) === null || s === void 0 || s.onRemoteConfig(e), (o = this.heatmaps) === null || o === void 0 || o.onRemoteConfig(e), (a = this.surveys) === null || a === void 0 || a.onRemoteConfig(e), (l = this.webVitalsAutocapture) === null || l === void 0 || l.onRemoteConfig(e), (c = this.exceptionObserver) === null || c === void 0 || c.onRemoteConfig(e), (d = this.deadClicksAutocapture) === null || d === void 0 || d.onRemoteConfig(e)
    }
    _loaded() {
        try {
            this.config.loaded(this)
        } catch (e) {
            k.critical("`loaded` function failed", e)
        }
        this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(() => {
            this.consent.isOptedIn() && this._captureInitialPageview()
        }, 1), new Eo(this).load(), this.featureFlags.decide()
    }
    _start_queue_if_opted_in() {
        var e;
        this.has_opted_out_capturing() || this.config.request_batching && ((e = this._requestQueue) === null || e === void 0 || e.enable())
    }
    _dom_loaded() {
        this.has_opted_out_capturing() || tt(this.__request_queue, e => this._send_retriable_request(e)), this.__request_queue = [], this._start_queue_if_opted_in()
    }
    _handle_unload() {
        var e, t;
        this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), (e = this._requestQueue) === null || e === void 0 || e.unload(), (t = this._retryQueue) === null || t === void 0 || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
            transport: "sendBeacon"
        })
    }
    _send_request(e) {
        this.__loaded && (vs ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = ei(e.url, {
            ip: this.config.ip ? 1 : 0
        }), e.headers = f({}, this.config.request_headers), e.compression = e.compression === "best-available" ? this.compression : e.compression, e.fetchOptions = e.fetchOptions || this.config.fetch_options, (t => {
            var i, n, s, o = f({}, t);
            o.timeout = o.timeout || 6e4, o.url = ei(o.url, {
                _: new Date().getTime().toString(),
                ver: Se.LIB_VERSION,
                compression: o.compression
            });
            var a = (i = o.transport) !== null && i !== void 0 ? i : "fetch",
                l = (n = (s = fn(wt, c => c.transport === a)) === null || s === void 0 ? void 0 : s.method) !== null && n !== void 0 ? n : wt[0].method;
            if (!l) throw new Error("No available transport method");
            l(o)
        })(f(f({}, e), {}, {
            callback: t => {
                var i, n, s;
                this.rateLimiter.checkForLimiting(t), t.statusCode >= 400 && ((n = (s = this.config).on_request_error) === null || n === void 0 || n.call(s, t)), (i = e.callback) === null || i === void 0 || i.call(e, t)
            }
        }))))
    }
    _send_retriable_request(e) {
        this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
    }
    _execute_array(e) {
        var t, i = [],
            n = [],
            s = [];
        tt(e, a => {
            a && (t = a[0], H(t) ? s.push(a) : ae(a) ? a.call(this) : H(a) && t === "alias" ? i.push(a) : H(a) && t.indexOf("capture") !== -1 && ae(this[t]) ? s.push(a) : n.push(a))
        });
        var o = function(a, l) {
            tt(a, function(c) {
                if (H(c[0])) {
                    var d = l;
                    T(c, function(u) {
                        d = d[u[0]].apply(d, u.slice(1))
                    })
                } else this[c[0]].apply(this, c.slice(1))
            }, l)
        };
        o(i, this), o(n, this), o(s, this)
    }
    _hasBootstrappedFeatureFlags() {
        var e, t;
        return ((e = this.config.bootstrap) === null || e === void 0 ? void 0 : e.featureFlags) && Object.keys((t = this.config.bootstrap) === null || t === void 0 ? void 0 : t.featureFlags).length > 0 || !1
    }
    push(e) {
        this._execute_array([e])
    }
    capture(e, t, i) {
        var n;
        if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
            if (!this.consent.isOptedOut())
                if (!S(e) && G(e)) {
                    if (this.config.opt_out_useragent_filter || !this._is_bot()) {
                        var s = i != null && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                        if (s == null || !s.isRateLimited) {
                            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
                            var o = new Date,
                                a = (i == null ? void 0 : i.timestamp) || o,
                                l = {
                                    uuid: Te(),
                                    event: e,
                                    properties: this._calculate_event_properties(e, t || {}, a)
                                };
                            s && (l.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), i != null && i.$set && (l.$set = i == null ? void 0 : i.$set);
                            var c = this._calculate_set_once_properties(i == null ? void 0 : i.$set_once);
                            c && (l.$set_once = c), (l = Is(l, i != null && i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = a, S(i == null ? void 0 : i.timestamp) || (l.properties.$event_time_override_provided = !0, l.properties.$event_time_override_system_time = o);
                            var d = f(f({}, l.properties.$set), l.$set);
                            if (Qe(d) || this.setPersonPropertiesForFlags(d), !M(this.config.before_send)) {
                                var u = this._runBeforeSend(l);
                                if (!u) return;
                                l = u
                            }
                            this._internalEventEmitter.emit("eventCaptured", l);
                            var _ = {
                                method: "POST",
                                url: (n = i == null ? void 0 : i._url) !== null && n !== void 0 ? n : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                data: l,
                                compression: "best-available",
                                batchKey: i == null ? void 0 : i._batchKey
                            };
                            return !this.config.request_batching || i && (i == null || !i._batchKey) || i != null && i.send_instantly ? this._send_retriable_request(_) : this._requestQueue.enqueue(_), l
                        }
                        k.critical("This capture call is ignored due to client rate limiting.")
                    }
                } else k.error("No event name provided to posthog.capture")
        } else k.uninitializedWarning("posthog.capture")
    }
    _addCaptureHook(e) {
        return this.on("eventCaptured", t => e(t.event, t))
    }
    _calculate_event_properties(e, t, i) {
        if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
        var n = this.persistence.remove_event_timer(e),
            s = f({}, t);
        if (s.token = this.config.token, this.config.__preview_experimental_cookieless_mode && (s.$cklsh_mode = !0), e === "$snapshot") {
            var o = f(f({}, this.persistence.properties()), this.sessionPersistence.properties());
            return s.distinct_id = o.distinct_id, (!G(s.distinct_id) && !K(s.distinct_id) || _r(s.distinct_id)) && k.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s
        }
        var a = D.properties();
        if (this.sessionManager) {
            var {
                sessionId: l,
                windowId: c
            } = this.sessionManager.checkAndGetSessionAndWindowId();
            s.$session_id = l, s.$window_id = c
        }
        if (this.sessionRecording && (s.$recording_status = this.sessionRecording.status), this.requestRouter.region === Ge.CUSTOM && (s.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && (e === "$pageview" || e === "$pageleave" || e === "$autocapture")) {
            var d = this.sessionPropsManager.getSessionProps();
            s = X(s, d)
        }
        if (!this.config.disable_scroll_properties) {
            var u = {};
            e === "$pageview" ? u = this.pageViewManager.doPageView(i) : e === "$pageleave" && (u = this.pageViewManager.doPageLeave(i)), s = X(s, u)
        }
        if (e === "$pageview" && w && (s.title = w.title), !S(n)) {
            var _ = i.getTime() - n;
            s.$duration = parseFloat((_ / 1e3).toFixed(3))
        }
        j && this.config.opt_out_useragent_filter && (s.$browser_type = this._is_bot() ? "bot" : "browser"), (s = X({}, a, this.persistence.properties(), this.sessionPersistence.properties(), s)).$is_identified = this._isIdentified(), H(this.config.property_denylist) ? T(this.config.property_denylist, function(v) {
            delete s[v]
        }) : k.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
        var h = this.config.sanitize_properties;
        h && (s = h(s, e));
        var g = this._hasPersonProcessing();
        return s.$process_person_profile = g, g && this._requirePersonProcessing("_calculate_event_properties"), s
    }
    _calculate_set_once_properties(e) {
        if (!this.persistence || !this._hasPersonProcessing()) return e;
        var t = X({}, this.persistence.get_initial_props(), e || {}),
            i = this.config.sanitize_properties;
        return i && (t = i(t, "$set_once")), Qe(t) ? void 0 : t
    }
    register(e, t) {
        var i;
        (i = this.persistence) === null || i === void 0 || i.register(e, t)
    }
    register_once(e, t, i) {
        var n;
        (n = this.persistence) === null || n === void 0 || n.register_once(e, t, i)
    }
    register_for_session(e) {
        var t;
        (t = this.sessionPersistence) === null || t === void 0 || t.register(e)
    }
    unregister(e) {
        var t;
        (t = this.persistence) === null || t === void 0 || t.unregister(e)
    }
    unregister_for_session(e) {
        var t;
        (t = this.sessionPersistence) === null || t === void 0 || t.unregister(e)
    }
    _register_single(e, t) {
        this.register({
            [e]: t
        })
    }
    getFeatureFlag(e, t) {
        return this.featureFlags.getFeatureFlag(e, t)
    }
    getFeatureFlagPayload(e) {
        var t = this.featureFlags.getFeatureFlagPayload(e);
        try {
            return JSON.parse(t)
        } catch {
            return t
        }
    }
    isFeatureEnabled(e, t) {
        return this.featureFlags.isFeatureEnabled(e, t)
    }
    reloadFeatureFlags() {
        this.featureFlags.reloadFeatureFlags()
    }
    updateEarlyAccessFeatureEnrollment(e, t) {
        this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
    }
    getEarlyAccessFeatures(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return this.featureFlags.getEarlyAccessFeatures(e, t)
    }
    on(e, t) {
        return this._internalEventEmitter.on(e, t)
    }
    onFeatureFlags(e) {
        return this.featureFlags.onFeatureFlags(e)
    }
    onSessionId(e) {
        var t, i;
        return (t = (i = this.sessionManager) === null || i === void 0 ? void 0 : i.onSessionId(e)) !== null && t !== void 0 ? t : () => {}
    }
    getSurveys(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        this.surveys.getSurveys(e, t)
    }
    getActiveMatchingSurveys(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        this.surveys.getActiveMatchingSurveys(e, t)
    }
    renderSurvey(e, t) {
        this.surveys.renderSurvey(e, t)
    }
    canRenderSurvey(e) {
        this.surveys.canRenderSurvey(e)
    }
    getNextSurveyStep(e, t, i) {
        return this.surveys.getNextSurveyStep(e, t, i)
    }
    identify(e, t, i) {
        if (!this.__loaded || !this.persistence) return k.uninitializedWarning("posthog.identify");
        if (K(e) && (e = e.toString(), k.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
            if (["distinct_id", "distinctid"].includes(e.toLowerCase())) k.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
            else if (this._requirePersonProcessing("posthog.identify")) {
                var n = this.get_distinct_id();
                if (this.register({
                        $user_id: e
                    }), !this.get_property("$device_id")) {
                    var s = n;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: s
                    }, "")
                }
                e !== n && e !== this.get_property(pt) && (this.unregister(pt), this.register({
                    distinct_id: e
                }));
                var o = (this.persistence.get_property(ye) || "anonymous") === "anonymous";
                e !== n && o ? (this.persistence.set_property(ye, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: n
                }, {
                    $set: t || {},
                    $set_once: i || {}
                }), this.featureFlags.setAnonymousDistinctId(n)) : (t || i) && this.setPersonProperties(t, i), e !== n && (this.reloadFeatureFlags(), this.unregister(Wt))
            }
        } else k.error("Unique user id has not been set in posthog.identify")
    }
    setPersonProperties(e, t) {
        (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
            $set: e || {},
            $set_once: t || {}
        }))
    }
    group(e, t, i) {
        if (e && t) {
            if (this._requirePersonProcessing("posthog.group")) {
                var n = this.getGroups();
                n[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                    $groups: f(f({}, n), {}, {
                        [e]: t
                    })
                }), i && (this.capture("$groupidentify", {
                    $group_type: e,
                    $group_key: t,
                    $group_set: i
                }), this.setGroupPropertiesForFlags({
                    [e]: i
                })), n[e] === t || i || this.reloadFeatureFlags()
            }
        } else k.error("posthog.group requires a group type and group key")
    }
    resetGroups() {
        this.register({
            $groups: {}
        }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
    }
    setPersonPropertiesForFlags(e) {
        var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        this.featureFlags.setPersonPropertiesForFlags(e, t)
    }
    resetPersonPropertiesForFlags() {
        this.featureFlags.resetPersonPropertiesForFlags()
    }
    setGroupPropertiesForFlags(e) {
        var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
    }
    resetGroupPropertiesForFlags(e) {
        this.featureFlags.resetGroupPropertiesForFlags(e)
    }
    reset(e) {
        var t, i, n, s, o;
        if (k.info("reset"), !this.__loaded) return k.uninitializedWarning("posthog.reset");
        var a = this.get_property("$device_id");
        if (this.consent.reset(), (t = this.persistence) === null || t === void 0 || t.clear(), (i = this.sessionPersistence) === null || i === void 0 || i.clear(), (n = this.surveys) === null || n === void 0 || n.reset(), (s = this.persistence) === null || s === void 0 || s.set_property(ye, "anonymous"), (o = this.sessionManager) === null || o === void 0 || o.resetSessionId(), this.config.__preview_experimental_cookieless_mode) this.register_once({
            distinct_id: Ir,
            $device_id: null
        }, "");
        else {
            var l = this.config.get_device_id(Te());
            this.register_once({
                distinct_id: l,
                $device_id: e ? l : a
            }, "")
        }
    }
    get_distinct_id() {
        return this.get_property("distinct_id")
    }
    getGroups() {
        return this.get_property("$groups") || {}
    }
    get_session_id() {
        var e, t;
        return (e = (t = this.sessionManager) === null || t === void 0 ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) !== null && e !== void 0 ? e : ""
    }
    get_session_replay_url(e) {
        if (!this.sessionManager) return "";
        var {
            sessionId: t,
            sessionStartTimestamp: i
        } = this.sessionManager.checkAndGetSessionAndWindowId(!0), n = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(t));
        if (e != null && e.withTimestamp && i) {
            var s, o = (s = e.timestampLookBack) !== null && s !== void 0 ? s : 10;
            if (!i) return n;
            var a = Math.max(Math.floor((new Date().getTime() - i) / 1e3) - o, 0);
            n += "?t=".concat(a)
        }
        return n
    }
    alias(e, t) {
        return e === this.get_property(mn) ? (k.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (S(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(pt, e), this.capture("$create_alias", {
            alias: e,
            distinct_id: t
        })) : (k.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
    }
    set_config(e) {
        var t, i, n, s, o = f({}, this.config);
        q(e) && (X(this.config, cn(e)), (t = this.persistence) === null || t === void 0 || t.update_config(this.config, o), this.sessionPersistence = this.config.persistence === "sessionStorage" || this.config.persistence === "memory" ? this.persistence : new vi(f(f({}, this.config), {}, {
            persistence: "sessionStorage"
        })), U.is_supported() && U.get("ph_debug") === "true" && (this.config.debug = !0), this.config.debug && (Se.DEBUG = !0, k.info("set_config", {
            config: e,
            oldConfig: o,
            newConfig: f({}, this.config)
        })), (i = this.sessionRecording) === null || i === void 0 || i.startIfEnabledOrStop(), (n = this.autocapture) === null || n === void 0 || n.startIfEnabled(), (s = this.heatmaps) === null || s === void 0 || s.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
    }
    startSessionRecording(e) {
        var t = e === !0,
            i = {
                sampling: t || !(e == null || !e.sampling),
                linked_flag: t || !(e == null || !e.linked_flag),
                url_trigger: t || !(e == null || !e.url_trigger),
                event_trigger: t || !(e == null || !e.event_trigger)
            };
        if (Object.values(i).some(Boolean)) {
            var n, s, o, a, l;
            (n = this.sessionManager) === null || n === void 0 || n.checkAndGetSessionAndWindowId(), i.sampling && ((s = this.sessionRecording) === null || s === void 0 || s.overrideSampling()), i.linked_flag && ((o = this.sessionRecording) === null || o === void 0 || o.overrideLinkedFlag()), i.url_trigger && ((a = this.sessionRecording) === null || a === void 0 || a.overrideTrigger("url")), i.event_trigger && ((l = this.sessionRecording) === null || l === void 0 || l.overrideTrigger("event"))
        }
        this.set_config({
            disable_session_recording: !1
        })
    }
    stopSessionRecording() {
        this.set_config({
            disable_session_recording: !0
        })
    }
    sessionRecordingStarted() {
        var e;
        return !((e = this.sessionRecording) === null || e === void 0 || !e.started)
    }
    captureException(e, t) {
        var i, n = new Error("PostHog syntheticException"),
            s = ae((i = I.__PosthogExtensions__) === null || i === void 0 ? void 0 : i.parseErrorAsProperties) ? I.__PosthogExtensions__.parseErrorAsProperties([e.message, void 0, void 0, void 0, e], {
                syntheticException: n
            }) : f({
                $exception_level: "error",
                $exception_list: [{
                    type: e.name,
                    value: e.message,
                    mechanism: {
                        handled: !0,
                        synthetic: !1
                    }
                }]
            }, t);
        this.exceptions.sendExceptionEvent(s)
    }
    loadToolbar(e) {
        return this.toolbar.loadToolbar(e)
    }
    get_property(e) {
        var t;
        return (t = this.persistence) === null || t === void 0 ? void 0 : t.props[e]
    }
    getSessionProperty(e) {
        var t;
        return (t = this.sessionPersistence) === null || t === void 0 ? void 0 : t.props[e]
    }
    toString() {
        var e, t = (e = this.config.name) !== null && e !== void 0 ? e : Ze;
        return t !== Ze && (t = Ze + "." + t), t
    }
    _isIdentified() {
        var e, t;
        return ((e = this.persistence) === null || e === void 0 ? void 0 : e.get_property(ye)) === "identified" || ((t = this.sessionPersistence) === null || t === void 0 ? void 0 : t.get_property(ye)) === "identified"
    }
    _hasPersonProcessing() {
        var e, t, i, n;
        return !(this.config.person_profiles === "never" || this.config.person_profiles === "identified_only" && !this._isIdentified() && Qe(this.getGroups()) && ((e = this.persistence) === null || e === void 0 || (t = e.props) === null || t === void 0 || !t[pt]) && ((i = this.persistence) === null || i === void 0 || (n = i.props) === null || n === void 0 || !n[Gt]))
    }
    _shouldCapturePageleave() {
        return this.config.capture_pageleave === !0 || this.config.capture_pageleave === "if_capture_pageview" && this.config.capture_pageview
    }
    createPersonProfile() {
        this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
    }
    _requirePersonProcessing(e) {
        return this.config.person_profiles === "never" ? (k.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(Gt, !0), !0)
    }
    _sync_opt_out_with_persistence() {
        var e, t, i, n, s = this.consent.isOptedOut(),
            o = this.config.opt_out_persistence_by_default,
            a = this.config.disable_persistence || s && !!o;
        ((e = this.persistence) === null || e === void 0 ? void 0 : e.disabled) !== a && ((i = this.persistence) === null || i === void 0 || i.set_disabled(a)), ((t = this.sessionPersistence) === null || t === void 0 ? void 0 : t.disabled) !== a && ((n = this.sessionPersistence) === null || n === void 0 || n.set_disabled(a))
    }
    opt_in_capturing(e) {
        var t;
        this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), (S(e == null ? void 0 : e.captureEventName) || e != null && e.captureEventName) && this.capture((t = e == null ? void 0 : e.captureEventName) !== null && t !== void 0 ? t : "$opt_in", e == null ? void 0 : e.captureProperties, {
            send_instantly: !0
        }), this.config.capture_pageview && this._captureInitialPageview()
    }
    opt_out_capturing() {
        this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
    }
    has_opted_in_capturing() {
        return this.consent.isOptedIn()
    }
    has_opted_out_capturing() {
        return this.consent.isOptedOut()
    }
    clear_opt_in_out_capturing() {
        this.consent.reset(), this._sync_opt_out_with_persistence()
    }
    _is_bot() {
        return ne ? _s(ne, this.config.custom_blocked_useragents) : void 0
    }
    _captureInitialPageview() {
        w && !this._initialPageviewCaptured && (this._initialPageviewCaptured = !0, this.capture("$pageview", {
            title: w.title
        }, {
            send_instantly: !0
        }))
    }
    debug(e) {
        e === !1 ? (p == null || p.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
            debug: !1
        })) : (p == null || p.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
            debug: !0
        }))
    }
    _runBeforeSend(e) {
        if (M(this.config.before_send)) return e;
        var t = H(this.config.before_send) ? this.config.before_send : [this.config.before_send],
            i = e;
        for (var n of t) {
            if (i = n(i), M(i)) {
                var s = "Event '".concat(e.event, "' was rejected in beforeSend function");
                return ks(e.event) ? k.warn("".concat(s, ". This can cause unexpected behavior.")) : k.info(s), null
            }
            i.properties && !Qe(i.properties) || k.warn("Event '".concat(e.event, "' has no properties after beforeSend function, this is likely an error."))
        }
        return i
    }
}(function(r, e) {
    for (var t = 0; t < e.length; t++) r.prototype[e[t]] = Cs(r.prototype[e[t]])
})(ai, ["identify"]);
var dn, ha = (dn = Et[Ze] = new ai, function() {
    function r() {
        r.done || (r.done = !0, vs = !1, T(Et, function(e) {
            e._dom_loaded()
        }))
    }
    w != null && w.addEventListener && (w.readyState === "complete" ? r() : w.addEventListener("DOMContentLoaded", r, !1)), p && ke(p, "load", r, !0)
}(), dn);
export {
    ha as _
};