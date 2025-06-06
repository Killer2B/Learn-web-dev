/* { "version": "1", "hash": "MEUCICQVGTVRCvfGTVmQAffxUttLXJorWxgCSDqP4PM/yyFzAiEAmVr0emwWsmLB8MgHLihKuoAvNNVkpVYdtu8qq2/NQVk=" } */
/* https://hcaptcha.com/license */
! function() {
    "use strict";

    function e(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }

    function t(e) {
        return new this((function(t, n) {
            if (!e || "undefined" == typeof e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, n) {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var a = n.then;
                    if ("function" == typeof a) return void a.call(n, (function(t) {
                        o(e, t)
                    }), (function(n) {
                        r[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --i && t(r)
                    }))
                }
                r[e] = {
                    status: "fulfilled",
                    value: n
                }, 0 == --i && t(r)
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
    }
    var n = setTimeout,
        r = "undefined" != typeof setImmediate ? setImmediate : null;

    function i(e) {
        return Boolean(e && "undefined" != typeof e.length)
    }

    function o() {}

    function a(e) {
        if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], d(e, this)
    }

    function s(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, a._immediateFn((function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (i) {
                    return void l(t.promise, i)
                }
                c(t.promise, r)
            } else(1 === e._state ? c : l)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function c(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof a) return e._state = 3, e._value = t, void u(e);
                if ("function" == typeof n) return void d((r = n, i = t, function() {
                    r.apply(i, arguments)
                }), e)
            }
            e._state = 1, e._value = t, u(e)
        } catch (o) {
            l(e, o)
        }
        var r, i
    }

    function l(e, t) {
        e._state = 2, e._value = t, u(e)
    }

    function u(e) {
        2 === e._state && 0 === e._deferreds.length && a._immediateFn((function() {
            e._handled || a._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
        e._deferreds = null
    }

    function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function d(e, t) {
        var n = !1;
        try {
            e((function(e) {
                n || (n = !0, c(t, e))
            }), (function(e) {
                n || (n = !0, l(t, e))
            }))
        } catch (r) {
            if (n) return;
            n = !0, l(t, r)
        }
    }
    a.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, a.prototype.then = function(e, t) {
        var n = new this.constructor(o);
        return s(this, new h(e, t, n)), n
    }, a.prototype["finally"] = e, a.all = function(e) {
        return new a((function(t, n) {
            if (!i(e)) return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var o = r.length;

            function a(e, i) {
                try {
                    if (i && ("object" == typeof i || "function" == typeof i)) {
                        var s = i.then;
                        if ("function" == typeof s) return void s.call(i, (function(t) {
                            a(e, t)
                        }), n)
                    }
                    r[e] = i, 0 == --o && t(r)
                } catch (c) {
                    n(c)
                }
            }
            for (var s = 0; s < r.length; s++) a(s, r[s])
        }))
    }, a.allSettled = t, a.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === a ? e : new a((function(t) {
            t(e)
        }))
    }, a.reject = function(e) {
        return new a((function(t, n) {
            n(e)
        }))
    }, a.race = function(e) {
        return new a((function(t, n) {
            if (!i(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, o = e.length; r < o; r++) a.resolve(e[r]).then(t, n)
        }))
    }, a._immediateFn = "function" == typeof r && function(e) {
        r(e)
    } || function(e) {
        n(e, 0)
    }, a._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var p = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();

    function f(e, t, n) {
        return t <= e && e <= n
    }

    function m(e) {
        if (e === undefined) return {};
        if (e === Object(e)) return e;
        throw TypeError("Could not convert argument to dictionary")
    }
    "function" != typeof p.Promise ? p.Promise = a : (p.Promise.prototype["finally"] || (p.Promise.prototype["finally"] = e), p.Promise.allSettled || (p.Promise.allSettled = t));
    var y = function(e) {
            return e >= 0 && e <= 127
        },
        g = -1;

    function v(e) {
        this.tokens = [].slice.call(e), this.tokens.reverse()
    }
    v.prototype = {
        endOfStream: function() {
            return !this.tokens.length
        },
        read: function() {
            return this.tokens.length ? this.tokens.pop() : g
        },
        prepend: function(e) {
            if (Array.isArray(e))
                for (var t = e; t.length;) this.tokens.push(t.pop());
            else this.tokens.push(e)
        },
        push: function(e) {
            if (Array.isArray(e))
                for (var t = e; t.length;) this.tokens.unshift(t.shift());
            else this.tokens.unshift(e)
        }
    };
    var w = -1;

    function b(e, t) {
        if (e) throw TypeError("Decoder error");
        return t || 65533
    }

    function _(e) {
        return e = String(e).trim().toLowerCase(), Object.prototype.hasOwnProperty.call(E, e) ? E[e] : null
    }
    var E = {};
    [{
        encodings: [{
            labels: ["unicode-1-1-utf-8", "utf-8", "utf8"],
            name: "UTF-8"
        }],
        heading: "The Encoding"
    }].forEach((function(e) {
        e.encodings.forEach((function(e) {
            e.labels.forEach((function(t) {
                E[t] = e
            }))
        }))
    }));
    var V, k = {
            "UTF-8": function(e) {
                return new U(e)
            }
        },
        x = {
            "UTF-8": function(e) {
                return new C(e)
            }
        },
        S = "utf-8";

    function T(e, t) {
        if (!(this instanceof T)) throw TypeError("Called as a function. Did you forget 'new'?");
        e = e !== undefined ? String(e) : S, t = m(t), this._encoding = null, this._decoder = null, this._ignoreBOM = !1, this._BOMseen = !1, this._error_mode = "replacement", this._do_not_flush = !1;
        var n = _(e);
        if (null === n || "replacement" === n.name) throw RangeError("Unknown encoding: " + e);
        if (!x[n.name]) throw Error("Decoder not present. Did you forget to include encoding-indexes.js first?");
        var r = this;
        return r._encoding = n, t.fatal && (r._error_mode = "fatal"), t.ignoreBOM && (r._ignoreBOM = !0), Object.defineProperty || (this.encoding = r._encoding.name.toLowerCase(), this.fatal = "fatal" === r._error_mode, this.ignoreBOM = r._ignoreBOM), r
    }

    function R(e, t) {
        if (!(this instanceof R)) throw TypeError("Called as a function. Did you forget 'new'?");
        t = m(t), this._encoding = null, this._encoder = null, this._do_not_flush = !1, this._fatal = t.fatal ? "fatal" : "replacement";
        var n = this;
        if (t.NONSTANDARD_allowLegacyEncoding) {
            var r = _(e = e !== undefined ? String(e) : S);
            if (null === r || "replacement" === r.name) throw RangeError("Unknown encoding: " + e);
            if (!k[r.name]) throw Error("Encoder not present. Did you forget to include encoding-indexes.js first?");
            n._encoding = r
        } else n._encoding = _("utf-8");
        return Object.defineProperty || (this.encoding = n._encoding.name.toLowerCase()), n
    }

    function C(e) {
        var t = e.fatal,
            n = 0,
            r = 0,
            i = 0,
            o = 128,
            a = 191;
        this.handler = function(e, s) {
            if (s === g && 0 !== i) return i = 0, b(t);
            if (s === g) return w;
            if (0 === i) {
                if (f(s, 0, 127)) return s;
                if (f(s, 194, 223)) i = 1, n = 31 & s;
                else if (f(s, 224, 239)) 224 === s && (o = 160), 237 === s && (a = 159), i = 2, n = 15 & s;
                else {
                    if (!f(s, 240, 244)) return b(t);
                    240 === s && (o = 144), 244 === s && (a = 143), i = 3, n = 7 & s
                }
                return null
            }
            if (!f(s, o, a)) return n = i = r = 0, o = 128, a = 191, e.prepend(s), b(t);
            if (o = 128, a = 191, n = n << 6 | 63 & s, (r += 1) !== i) return null;
            var c = n;
            return n = i = r = 0, c
        }
    }

    function U(e) {
        e.fatal;
        this.handler = function(e, t) {
            if (t === g) return w;
            if (y(t)) return t;
            var n, r;
            f(t, 128, 2047) ? (n = 1, r = 192) : f(t, 2048, 65535) ? (n = 2, r = 224) : f(t, 65536, 1114111) && (n = 3, r = 240);
            for (var i = [(t >> 6 * n) + r]; n > 0;) {
                var o = t >> 6 * (n - 1);
                i.push(128 | 63 & o), n -= 1
            }
            return i
        }
    }
    Object.defineProperty && (Object.defineProperty(T.prototype, "encoding", {
            get: function() {
                return this._encoding.name.toLowerCase()
            }
        }), Object.defineProperty(T.prototype, "fatal", {
            get: function() {
                return "fatal" === this._error_mode
            }
        }), Object.defineProperty(T.prototype, "ignoreBOM", {
            get: function() {
                return this._ignoreBOM
            }
        })), T.prototype.decode = function(e, t) {
            var n;
            n = "object" == typeof e && e instanceof ArrayBuffer ? new Uint8Array(e) : "object" == typeof e && "buffer" in e && e.buffer instanceof ArrayBuffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(0), t = m(t), this._do_not_flush || (this._decoder = x[this._encoding.name]({
                fatal: "fatal" === this._error_mode
            }), this._BOMseen = !1), this._do_not_flush = Boolean(t.stream);
            for (var r, i = new v(n), o = [];;) {
                var a = i.read();
                if (a === g) break;
                if ((r = this._decoder.handler(i, a)) === w) break;
                null !== r && (Array.isArray(r) ? o.push.apply(o, r) : o.push(r))
            }
            if (!this._do_not_flush) {
                do {
                    if ((r = this._decoder.handler(i, i.read())) === w) break;
                    null !== r && (Array.isArray(r) ? o.push.apply(o, r) : o.push(r))
                } while (!i.endOfStream());
                this._decoder = null
            }
            return function(e) {
                var t, n;
                return t = ["UTF-8", "UTF-16LE", "UTF-16BE"], n = this._encoding.name, -1 === t.indexOf(n) || this._ignoreBOM || this._BOMseen || (e.length > 0 && 65279 === e[0] ? (this._BOMseen = !0, e.shift()) : e.length > 0 && (this._BOMseen = !0)),
                    function(e) {
                        for (var t = "", n = 0; n < e.length; ++n) {
                            var r = e[n];
                            r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536, t += String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r)))
                        }
                        return t
                    }(e)
            }.call(this, o)
        }, Object.defineProperty && Object.defineProperty(R.prototype, "encoding", {
            get: function() {
                return this._encoding.name.toLowerCase()
            }
        }), R.prototype.encode = function(e, t) {
            e = e === undefined ? "" : String(e), t = m(t), this._do_not_flush || (this._encoder = k[this._encoding.name]({
                fatal: "fatal" === this._fatal
            })), this._do_not_flush = Boolean(t.stream);
            for (var n, r = new v(function(e) {
                    for (var t = String(e), n = t.length, r = 0, i = []; r < n;) {
                        var o = t.charCodeAt(r);
                        if (o < 55296 || o > 57343) i.push(o);
                        else if (o >= 56320 && o <= 57343) i.push(65533);
                        else if (o >= 55296 && o <= 56319)
                            if (r === n - 1) i.push(65533);
                            else {
                                var a = t.charCodeAt(r + 1);
                                if (a >= 56320 && a <= 57343) {
                                    var s = 1023 & o,
                                        c = 1023 & a;
                                    i.push(65536 + (s << 10) + c), r += 1
                                } else i.push(65533)
                            }
                        r += 1
                    }
                    return i
                }(e)), i = [];;) {
                var o = r.read();
                if (o === g) break;
                if ((n = this._encoder.handler(r, o)) === w) break;
                Array.isArray(n) ? i.push.apply(i, n) : i.push(n)
            }
            if (!this._do_not_flush) {
                for (;
                    (n = this._encoder.handler(r, r.read())) !== w;) Array.isArray(n) ? i.push.apply(i, n) : i.push(n);
                this._encoder = null
            }
            return new Uint8Array(i)
        }, window.TextDecoder || (window.TextDecoder = T), window.TextEncoder || (window.TextEncoder = R),
        function(e) {
            if ("function" != typeof Promise) throw "Promise support required";
            var t = e.crypto || e.msCrypto;
            if (t) {
                var n = t.subtle || t.webkitSubtle;
                if (n) {
                    var r = e.Crypto || t.constructor || Object,
                        i = e.SubtleCrypto || n.constructor || Object,
                        o = (e.CryptoKey || e.Key, e.navigator.userAgent.indexOf("Edge/") > -1),
                        a = !!e.msCrypto && !o,
                        s = !t.subtle && !!t.webkitSubtle;
                    if (a || s) {
                        var c = {
                                KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
                            },
                            l = {
                                "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
                            };
                        if (["generateKey", "importKey", "unwrapKey"].forEach((function(e) {
                                var r = n[e];
                                n[e] = function(i, o, c) {
                                    var l, u, h, f, b = [].slice.call(arguments);
                                    switch (e) {
                                        case "generateKey":
                                            l = m(i), u = o, h = c;
                                            break;
                                        case "importKey":
                                            l = m(c), u = b[3], h = b[4], "jwk" === i && ((o = g(o)).alg || (o.alg = y(l)), o.key_ops || (o.key_ops = "oct" !== o.kty ? "d" in o ? h.filter(x) : h.filter(k) : h.slice()), b[1] = v(o));
                                            break;
                                        case "unwrapKey":
                                            l = b[4], u = b[5], h = b[6], b[2] = c._key
                                    }
                                    if ("generateKey" === e && "HMAC" === l.name && l.hash) return l.length = l.length || {
                                        "SHA-1": 512,
                                        "SHA-256": 512,
                                        "SHA-384": 1024,
                                        "SHA-512": 1024
                                    }[l.hash.name], n.importKey("raw", t.getRandomValues(new Uint8Array(l.length + 7 >> 3)), l, u, h);
                                    if (s && "generateKey" === e && "RSASSA-PKCS1-v1_5" === l.name && (!l.modulusLength || l.modulusLength >= 2048)) return (i = m(i)).name = "RSAES-PKCS1-v1_5", delete i.hash, n.generateKey(i, !0, ["encrypt", "decrypt"]).then((function(e) {
                                        return Promise.all([n.exportKey("jwk", e.publicKey), n.exportKey("jwk", e.privateKey)])
                                    })).then((function(e) {
                                        return e[0].alg = e[1].alg = y(l), e[0].key_ops = h.filter(k), e[1].key_ops = h.filter(x), Promise.all([n.importKey("jwk", e[0], l, !0, e[0].key_ops), n.importKey("jwk", e[1], l, u, e[1].key_ops)])
                                    })).then((function(e) {
                                        return {
                                            publicKey: e[0],
                                            privateKey: e[1]
                                        }
                                    }));
                                    if ((s || a && "SHA-1" === (l.hash || {}).name) && "importKey" === e && "jwk" === i && "HMAC" === l.name && "oct" === o.kty) return n.importKey("raw", p(d(o.k)), c, b[3], b[4]);
                                    if (s && "importKey" === e && ("spki" === i || "pkcs8" === i)) return n.importKey("jwk", w(o), c, b[3], b[4]);
                                    if (a && "unwrapKey" === e) return n.decrypt(b[3], c, o).then((function(e) {
                                        return n.importKey(i, e, b[4], b[5], b[6])
                                    }));
                                    try {
                                        f = r.apply(n, b)
                                    } catch (_) {
                                        return Promise.reject(_)
                                    }
                                    return a && (f = new Promise((function(e, t) {
                                        f.onabort = f.onerror = function(e) {
                                            t(e)
                                        }, f.oncomplete = function(t) {
                                            e(t.target.result)
                                        }
                                    }))), f = f.then((function(e) {
                                        return "HMAC" === l.name && (l.length || (l.length = 8 * e.algorithm.length)), 0 == l.name.search("RSA") && (l.modulusLength || (l.modulusLength = (e.publicKey || e).algorithm.modulusLength), l.publicExponent || (l.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e = e.publicKey && e.privateKey ? {
                                            publicKey: new V(e.publicKey, l, u, h.filter(k)),
                                            privateKey: new V(e.privateKey, l, u, h.filter(x))
                                        } : new V(e, l, u, h)
                                    }))
                                }
                            })), ["exportKey", "wrapKey"].forEach((function(e) {
                                var t = n[e];
                                n[e] = function(r, i, o) {
                                    var c, l = [].slice.call(arguments);
                                    switch (e) {
                                        case "exportKey":
                                            l[1] = i._key;
                                            break;
                                        case "wrapKey":
                                            l[1] = i._key, l[2] = o._key
                                    }
                                    if ((s || a && "SHA-1" === (i.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === r && "HMAC" === i.algorithm.name && (l[0] = "raw"), !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (l[0] = "jwk"), a && "wrapKey" === e) return n.exportKey(r, i).then((function(e) {
                                        return "jwk" === r && (e = p(unescape(encodeURIComponent(JSON.stringify(g(e)))))), n.encrypt(l[3], o, e)
                                    }));
                                    try {
                                        c = t.apply(n, l)
                                    } catch (u) {
                                        return Promise.reject(u)
                                    }
                                    return a && (c = new Promise((function(e, t) {
                                        c.onabort = c.onerror = function(e) {
                                            t(e)
                                        }, c.oncomplete = function(t) {
                                            e(t.target.result)
                                        }
                                    }))), "exportKey" === e && "jwk" === r && (c = c.then((function(e) {
                                        return (s || a && "SHA-1" === (i.algorithm.hash || {}).name) && "HMAC" === i.algorithm.name ? {
                                            kty: "oct",
                                            alg: y(i.algorithm),
                                            key_ops: i.usages.slice(),
                                            ext: !0,
                                            k: h(f(e))
                                        } : ((e = g(e)).alg || (e.alg = y(i.algorithm)), e.key_ops || (e.key_ops = "public" === i.type ? i.usages.filter(k) : "private" === i.type ? i.usages.filter(x) : i.usages.slice()), e)
                                    }))), !s || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (c = c.then((function(e) {
                                        return e = b(g(e))
                                    }))), c
                                }
                            })), ["encrypt", "decrypt", "sign", "verify"].forEach((function(e) {
                                var t = n[e];
                                n[e] = function(r, i, o, s) {
                                    if (a && (!o.byteLength || s && !s.byteLength)) throw new Error("Empty input is not allowed");
                                    var c, l = [].slice.call(arguments),
                                        u = m(r);
                                    if (!a || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== r && "HMAC" !== r || (l[0] = {
                                            name: r
                                        }), a && i.algorithm.hash && (l[0].hash = l[0].hash || i.algorithm.hash), a && "decrypt" === e && "AES-GCM" === u.name) {
                                        var h = r.tagLength >> 3;
                                        l[2] = (o.buffer || o).slice(0, o.byteLength - h), r.tag = (o.buffer || o).slice(o.byteLength - h)
                                    }
                                    a && "AES-GCM" === u.name && l[0].tagLength === undefined && (l[0].tagLength = 128), l[1] = i._key;
                                    try {
                                        c = t.apply(n, l)
                                    } catch (d) {
                                        return Promise.reject(d)
                                    }
                                    return a && (c = new Promise((function(t, n) {
                                        c.onabort = c.onerror = function(e) {
                                            n(e)
                                        }, c.oncomplete = function(n) {
                                            n = n.target.result;
                                            if ("encrypt" === e && n instanceof AesGcmEncryptResult) {
                                                var r = n.ciphertext,
                                                    i = n.tag;
                                                (n = new Uint8Array(r.byteLength + i.byteLength)).set(new Uint8Array(r), 0), n.set(new Uint8Array(i), r.byteLength), n = n.buffer
                                            }
                                            t(n)
                                        }
                                    }))), c
                                }
                            })), a) {
                            var u = n.digest;
                            n.digest = function(e, t) {
                                if (!t.byteLength) throw new Error("Empty input is not allowed");
                                var r;
                                try {
                                    r = u.call(n, e, t)
                                } catch (i) {
                                    return Promise.reject(i)
                                }
                                return r = new Promise((function(e, t) {
                                    r.onabort = r.onerror = function(e) {
                                        t(e)
                                    }, r.oncomplete = function(t) {
                                        e(t.target.result)
                                    }
                                })), r
                            }, e.crypto = Object.create(t, {
                                getRandomValues: {
                                    value: function(e) {
                                        return t.getRandomValues(e)
                                    }
                                },
                                subtle: {
                                    value: n
                                }
                            }), e.CryptoKey = V
                        }
                        s && (t.subtle = n, e.Crypto = r, e.SubtleCrypto = i, e.CryptoKey = V)
                    }
                }
            }

            function h(e) {
                return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function d(e) {
                return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function p(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                return t
            }

            function f(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e)
            }

            function m(e) {
                var t = {
                    name: (e.name || e || "").toUpperCase().replace("V", "v")
                };
                switch (t.name) {
                    case "SHA-1":
                    case "SHA-256":
                    case "SHA-384":
                    case "SHA-512":
                        break;
                    case "AES-CBC":
                    case "AES-GCM":
                    case "AES-KW":
                        e.length && (t.length = e.length);
                        break;
                    case "HMAC":
                        e.hash && (t.hash = m(e.hash)), e.length && (t.length = e.length);
                        break;
                    case "RSAES-PKCS1-v1_5":
                        e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    case "RSASSA-PKCS1-v1_5":
                    case "RSA-OAEP":
                        e.hash && (t.hash = m(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    default:
                        throw new SyntaxError("Bad algorithm name")
                }
                return t
            }

            function y(e) {
                return {
                    HMAC: {
                        "SHA-1": "HS1",
                        "SHA-256": "HS256",
                        "SHA-384": "HS384",
                        "SHA-512": "HS512"
                    },
                    "RSASSA-PKCS1-v1_5": {
                        "SHA-1": "RS1",
                        "SHA-256": "RS256",
                        "SHA-384": "RS384",
                        "SHA-512": "RS512"
                    },
                    "RSAES-PKCS1-v1_5": {
                        "": "RSA1_5"
                    },
                    "RSA-OAEP": {
                        "SHA-1": "RSA-OAEP",
                        "SHA-256": "RSA-OAEP-256"
                    },
                    "AES-KW": {
                        128: "A128KW",
                        192: "A192KW",
                        256: "A256KW"
                    },
                    "AES-GCM": {
                        128: "A128GCM",
                        192: "A192GCM",
                        256: "A256GCM"
                    },
                    "AES-CBC": {
                        128: "A128CBC",
                        192: "A192CBC",
                        256: "A256CBC"
                    }
                }[e.name][(e.hash || {}).name || e.length || ""]
            }

            function g(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(f(e)))));
                var t = {
                    kty: e.kty,
                    alg: e.alg,
                    ext: e.ext || e.extractable
                };
                switch (t.kty) {
                    case "oct":
                        t.k = e.k;
                    case "RSA":
                        ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach((function(n) {
                            n in e && (t[n] = e[n])
                        }));
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return t
            }

            function v(e) {
                var t = g(e);
                return a && (t.extractable = t.ext, delete t.ext), p(unescape(encodeURIComponent(JSON.stringify(t)))).buffer
            }

            function w(e) {
                var t = _(e),
                    n = !1;
                t.length > 2 && (n = !0, t.shift());
                var r = {
                    ext: !0
                };
                if ("1.2.840.113549.1.1.1" !== t[0][0]) throw new TypeError("Unsupported key type");
                var i = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                    o = _(t[1]);
                n && o.shift();
                for (var a = 0; a < o.length; a++) o[a][0] || (o[a] = o[a].subarray(1)), r[i[a]] = h(f(o[a]));
                return r.kty = "RSA", r
            }

            function b(e) {
                var t, n = [
                        ["", null]
                    ],
                    r = !1;
                if ("RSA" !== e.kty) throw new TypeError("Unsupported key type");
                for (var i = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], o = [], a = 0; a < i.length && i[a] in e; a++) {
                    var s = o[a] = p(d(e[i[a]]));
                    128 & s[0] && (o[a] = new Uint8Array(s.length + 1), o[a].set(s, 1))
                }
                return o.length > 2 && (r = !0, o.unshift(new Uint8Array([0]))), n[0][0] = "1.2.840.113549.1.1.1", t = o, n.push(new Uint8Array(E(t)).buffer), r ? n.unshift(new Uint8Array([0])) : n[1] = {
                    tag: 3,
                    value: n[1]
                }, new Uint8Array(E(n)).buffer
            }

            function _(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = {
                        pos: 0,
                        end: e.length
                    }), t.end - t.pos < 2 || t.end > e.length) throw new RangeError("Malformed DER");
                var n, r = e[t.pos++],
                    i = e[t.pos++];
                if (i >= 128) {
                    if (i &= 127, t.end - t.pos < i) throw new RangeError("Malformed DER");
                    for (var o = 0; i--;) o <<= 8, o |= e[t.pos++];
                    i = o
                }
                if (t.end - t.pos < i) throw new RangeError("Malformed DER");
                switch (r) {
                    case 2:
                        n = e.subarray(t.pos, t.pos += i);
                        break;
                    case 3:
                        if (e[t.pos++]) throw new Error("Unsupported bit string");
                        i--;
                    case 4:
                        n = new Uint8Array(e.subarray(t.pos, t.pos += i)).buffer;
                        break;
                    case 5:
                        n = null;
                        break;
                    case 6:
                        var a = btoa(f(e.subarray(t.pos, t.pos += i)));
                        if (!(a in c)) throw new Error("Unsupported OBJECT ID " + a);
                        n = c[a];
                        break;
                    case 48:
                        n = [];
                        for (var s = t.pos + i; t.pos < s;) n.push(_(e, t));
                        break;
                    default:
                        throw new Error("Unsupported DER tag 0x" + r.toString(16))
                }
                return n
            }

            function E(e, t) {
                t || (t = []);
                var n = 0,
                    r = 0,
                    i = t.length + 2;
                if (t.push(0, 0), e instanceof Uint8Array) {
                    n = 2, r = e.length;
                    for (var o = 0; o < r; o++) t.push(e[o])
                } else if (e instanceof ArrayBuffer) {
                    n = 4, r = e.byteLength, e = new Uint8Array(e);
                    for (o = 0; o < r; o++) t.push(e[o])
                } else if (null === e) n = 5, r = 0;
                else if ("string" == typeof e && e in l) {
                    var a = p(atob(l[e]));
                    n = 6, r = a.length;
                    for (o = 0; o < r; o++) t.push(a[o])
                } else if (e instanceof Array) {
                    for (o = 0; o < e.length; o++) E(e[o], t);
                    n = 48, r = t.length - i
                } else {
                    if (!("object" == typeof e && 3 === e.tag && e.value instanceof ArrayBuffer)) throw new Error("Unsupported DER value " + e);
                    n = 3, r = (e = new Uint8Array(e.value)).byteLength, t.push(0);
                    for (o = 0; o < r; o++) t.push(e[o]);
                    r++
                }
                if (r >= 128) {
                    var s = r;
                    r = 4;
                    for (t.splice(i, 0, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s); r > 1 && !(s >> 24);) s <<= 8, r--;
                    r < 4 && t.splice(i, 4 - r), r |= 128
                }
                return t.splice(i - 2, 2, n, r), t
            }

            function V(e, t, n, r) {
                Object.defineProperties(this, {
                    _key: {
                        value: e
                    },
                    type: {
                        value: e.type,
                        enumerable: !0
                    },
                    extractable: {
                        value: n === undefined ? e.extractable : n,
                        enumerable: !0
                    },
                    algorithm: {
                        value: t === undefined ? e.algorithm : t,
                        enumerable: !0
                    },
                    usages: {
                        value: r === undefined ? e.usages : r,
                        enumerable: !0
                    }
                })
            }

            function k(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e
            }

            function x(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e
            }
        }(window), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
            return function(t, n) {
                if (null === this || this === undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");
                var r = e(this),
                    i = r.length >>> 0,
                    o = Math.min(0 | n, i);
                if (o < 0) o = Math.max(0, i + o);
                else if (o >= i) return -1;
                if (void 0 === t) {
                    for (; o !== i; ++o)
                        if (void 0 === r[o] && o in r) return o
                } else if (t != t) {
                    for (; o !== i; ++o)
                        if (r[o] != r[o]) return o
                } else
                    for (; o !== i; ++o)
                        if (r[o] === t) return o;
                return -1
            }
        }(Object)), Array.isArray || (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }), document.getElementsByClassName || (window.Element.prototype.getElementsByClassName = document.constructor.prototype.getElementsByClassName = function(e) {
            if (document.querySelectorAll) return document.querySelectorAll("." + e);
            for (var t = document.getElementsByTagName("*"), n = new RegExp("(^|\\s)" + e + "(\\s|$)"), r = [], i = 0; i < t.length; i++) n.test(t[i].className) && r.push(t[i]);
            return r
        }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
            return this.substr(!t || t < 0 ? 0 : +t, e.length) === e
        }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
            return (t === undefined || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
        });
    try {
        if (Object.defineProperty && Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(Element.prototype, "textContent") && !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get) {
            var O = Object.getOwnPropertyDescriptor(Element.prototype, "innerText");
            Object.defineProperty(Element.prototype, "textContent", {
                get: function() {
                    return O.get.call(this)
                },
                set: function(e) {
                    O.set.call(this, e)
                }
            })
        }
    } catch (In) {}
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind: Item Can Not Be Bound.");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            r = function() {},
            i = function() {
                return n.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
        return this.prototype && (r.prototype = this.prototype), i.prototype = new r, i
    }), "function" != typeof Object.create && (Object.create = function(e, t) {
        function n() {}
        if (n.prototype = e, "object" == typeof t)
            for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
        return new n
    }), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), window.console || (window.console = {});
    for (var P, M, D, W, j = ["error", "info", "log", "show", "table", "trace", "warn"], F = function(e) {}, A = j.length; --A > -1;) V = j[A], window.console[V] || (window.console[V] = F);
    if (window.atob) try {
        window.atob(" ")
    } catch (Ln) {
        window.atob = function(e) {
            var t = function(t) {
                return e(String(t).replace(/[\t\n\f\r ]+/g, ""))
            };
            return t.original = e, t
        }(window.atob)
    } else {
        var N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            B = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        window.atob = function(e) {
            if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !B.test(e)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
            var t, n, r;
            e += "==".slice(2 - (3 & e.length));
            for (var i = "", o = 0; o < e.length;) t = N.indexOf(e.charAt(o++)) << 18 | N.indexOf(e.charAt(o++)) << 12 | (n = N.indexOf(e.charAt(o++))) << 6 | (r = N.indexOf(e.charAt(o++))), i += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
            return i
        }
    }
    if (Event.prototype.preventDefault || (Event.prototype.preventDefault = function() {
            this.returnValue = !1
        }), Event.prototype.stopPropagation || (Event.prototype.stopPropagation = function() {
            this.cancelBubble = !0
        }), window.Prototype && Array.prototype.toJSON) {
        console.error("[hCaptcha] Custom JSON polyfill detected, please remove to ensure hCaptcha works properly");
        var K = Array.prototype.toJSON,
            Z = JSON.stringify;
        JSON.stringify = function(e) {
            try {
                return delete Array.prototype.toJSON, Z(e)
            } finally {
                Array.prototype.toJSON = K
            }
        }
    }
    Object.keys || (Object.keys = (P = Object.prototype.hasOwnProperty, M = !Object.prototype.propertyIsEnumerable.call({
            toString: null
        }, "toString"), W = (D = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(e) {
            if ("function" != typeof e && ("object" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
            var t, n, r = [];
            for (t in e) P.call(e, t) && r.push(t);
            if (M)
                for (n = 0; n < W; n++) P.call(e, D[n]) && r.push(D[n]);
            return r
        }))
        /*! Raven.js 3.27.2 (6d91db933) | github.com/getsentry/raven-js */
        ,
        function(e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
            else if ("function" == typeof define && define.amd) define("raven-js", e);
            else {
                ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Raven = e()
            }
        }((function() {
            return function e(t, n, r) {
                function i(a, s) {
                    if (!n[a]) {
                        if (!t[a]) {
                            var c = "function" == typeof require && require;
                            if (!s && c) return c(a, !0);
                            if (o) return o(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var u = n[a] = {
                            exports: {}
                        };
                        t[a][0].call(u.exports, (function(e) {
                            var n = t[a][1][e];
                            return i(n || e)
                        }), u, u.exports, e, t, n, r)
                    }
                    return n[a].exports
                }
                for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
                return i
            }({
                1: [function(e, t, n) {
                    function r(e) {
                        this.name = "RavenConfigError", this.message = e
                    }
                    r.prototype = new Error, r.prototype.constructor = r, t.exports = r
                }, {}],
                2: [function(e, t, n) {
                    var r = e(5);
                    t.exports = {
                        wrapMethod: function(e, t, n) {
                            var i = e[t],
                                o = e;
                            if (t in e) {
                                var a = "warn" === t ? "warning" : t;
                                e[t] = function() {
                                    var e = [].slice.call(arguments),
                                        s = r.safeJoin(e, " "),
                                        c = {
                                            level: a,
                                            logger: "console",
                                            extra: {
                                                arguments: e
                                            }
                                        };
                                    "assert" === t ? !1 === e[0] && (s = "Assertion failed: " + (r.safeJoin(e.slice(1), " ") || "console.assert"), c.extra.arguments = e.slice(1), n && n(s, c)) : n && n(s, c), i && Function.prototype.apply.call(i, o, e)
                                }
                            }
                        }
                    }
                }, {
                    5: 5
                }],
                3: [function(e, t, n) {
                    (function(n) {
                        function r() {
                            return +new Date
                        }

                        function i(e, t) {
                            return v(t) ? function(n) {
                                return t(n, e)
                            } : t
                        }

                        function o() {
                            for (var e in this.a = !("object" != typeof JSON || !JSON.stringify), this.b = !g(I), this.c = !g(L), this.d = null, this.e = null, this.f = null, this.g = null, this.h = null, this.i = null, this.j = {}, this.k = {
                                    release: q.SENTRY_RELEASE && q.SENTRY_RELEASE.id,
                                    logger: "javascript",
                                    ignoreErrors: [],
                                    ignoreUrls: [],
                                    whitelistUrls: [],
                                    includePaths: [],
                                    headers: null,
                                    collectWindowErrors: !0,
                                    captureUnhandledRejections: !0,
                                    maxMessageLength: 0,
                                    maxUrlLength: 250,
                                    stackTraceLimit: 50,
                                    autoBreadcrumbs: !0,
                                    instrument: !0,
                                    sampleRate: 1,
                                    sanitizeKeys: []
                                }, this.l = {
                                    method: "POST",
                                    referrerPolicy: j() ? "origin" : ""
                                }, this.m = 0, this.n = !1, this.o = Error.stackTraceLimit, this.p = q.console || {}, this.q = {}, this.r = [], this.s = r(), this.t = [], this.u = [], this.v = null, this.w = q.location, this.x = this.w && this.w.href, this.y(), this.p) this.q[e] = this.p[e]
                        }
                        var a = e(6),
                            s = e(7),
                            c = e(8),
                            l = e(1),
                            u = e(5),
                            h = u.isErrorEvent,
                            d = u.isDOMError,
                            p = u.isDOMException,
                            f = u.isError,
                            m = u.isObject,
                            y = u.isPlainObject,
                            g = u.isUndefined,
                            v = u.isFunction,
                            w = u.isString,
                            b = u.isArray,
                            _ = u.isEmptyObject,
                            E = u.each,
                            V = u.objectMerge,
                            k = u.truncate,
                            x = u.objectFrozen,
                            S = u.hasKey,
                            T = u.joinRegExp,
                            R = u.urlencode,
                            C = u.uuid4,
                            U = u.htmlTreeAsString,
                            O = u.isSameException,
                            P = u.isSameStacktrace,
                            M = u.parseUrl,
                            D = u.fill,
                            W = u.supportsFetch,
                            j = u.supportsReferrerPolicy,
                            F = u.serializeKeysForMessage,
                            A = u.serializeException,
                            N = u.sanitize,
                            B = e(2).wrapMethod,
                            K = "source protocol user pass host port path".split(" "),
                            Z = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                            q = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {},
                            I = q.document,
                            L = q.navigator;
                        o.prototype = {
                            VERSION: "3.27.2",
                            debug: !1,
                            TraceKit: a,
                            config: function(e, t) {
                                var n = this;
                                if (n.g) return this.z("error", "Error: Raven has already been configured"), n;
                                if (!e) return n;
                                var r = n.k;
                                t && E(t, (function(e, t) {
                                    "tags" === e || "extra" === e || "user" === e ? n.j[e] = t : r[e] = t
                                })), n.setDSN(e), r.ignoreErrors.push(/^Script error\.?$/), r.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/), r.ignoreErrors = T(r.ignoreErrors), r.ignoreUrls = !!r.ignoreUrls.length && T(r.ignoreUrls), r.whitelistUrls = !!r.whitelistUrls.length && T(r.whitelistUrls), r.includePaths = T(r.includePaths), r.maxBreadcrumbs = Math.max(0, Math.min(r.maxBreadcrumbs || 100, 100));
                                var i = {
                                        xhr: !0,
                                        console: !0,
                                        dom: !0,
                                        location: !0,
                                        sentry: !0
                                    },
                                    o = r.autoBreadcrumbs;
                                "[object Object]" === {}.toString.call(o) ? o = V(i, o) : !1 !== o && (o = i), r.autoBreadcrumbs = o;
                                var s = {
                                        tryCatch: !0
                                    },
                                    c = r.instrument;
                                return "[object Object]" === {}.toString.call(c) ? c = V(s, c) : !1 !== c && (c = s), r.instrument = c, a.collectWindowErrors = !!r.collectWindowErrors, n
                            },
                            install: function() {
                                var e = this;
                                return e.isSetup() && !e.n && (a.report.subscribe((function() {
                                    e.A.apply(e, arguments)
                                })), e.k.captureUnhandledRejections && e.B(), e.C(), e.k.instrument && e.k.instrument.tryCatch && e.D(), e.k.autoBreadcrumbs && e.E(), e.F(), e.n = !0), Error.stackTraceLimit = e.k.stackTraceLimit, this
                            },
                            setDSN: function(e) {
                                var t = this,
                                    n = t.G(e),
                                    r = n.path.lastIndexOf("/"),
                                    i = n.path.substr(1, r);
                                t.H = e, t.h = n.user, t.I = n.pass && n.pass.substr(1), t.i = n.path.substr(r + 1), t.g = t.J(n), t.K = t.g + "/" + i + "api/" + t.i + "/store/", this.y()
                            },
                            context: function(e, t, n) {
                                return v(e) && (n = t || [], t = e, e = {}), this.wrap(e, t).apply(this, n)
                            },
                            wrap: function(e, t, n) {
                                function r() {
                                    var r = [],
                                        o = arguments.length,
                                        a = !e || e && !1 !== e.deep;
                                    for (n && v(n) && n.apply(this, arguments); o--;) r[o] = a ? i.wrap(e, arguments[o]) : arguments[o];
                                    try {
                                        return t.apply(this, r)
                                    } catch (s) {
                                        throw i.L(), i.captureException(s, e), s
                                    }
                                }
                                var i = this;
                                if (g(t) && !v(e)) return e;
                                if (v(e) && (t = e, e = void 0), !v(t)) return t;
                                try {
                                    if (t.M) return t;
                                    if (t.N) return t.N
                                } catch (o) {
                                    return t
                                }
                                for (var a in t) S(t, a) && (r[a] = t[a]);
                                return r.prototype = t.prototype, t.N = r, r.M = !0, r.O = t, r
                            },
                            uninstall: function() {
                                return a.report.uninstall(), this.P(), this.Q(), this.R(), this.S(), Error.stackTraceLimit = this.o, this.n = !1, this
                            },
                            T: function(e) {
                                this.z("debug", "Raven caught unhandled promise rejection:", e), this.captureException(e.reason, {
                                    mechanism: {
                                        type: "onunhandledrejection",
                                        handled: !1
                                    }
                                })
                            },
                            B: function() {
                                return this.T = this.T.bind(this), q.addEventListener && q.addEventListener("unhandledrejection", this.T), this
                            },
                            P: function() {
                                return q.removeEventListener && q.removeEventListener("unhandledrejection", this.T), this
                            },
                            captureException: function(e, t) {
                                if (t = V({
                                        trimHeadFrames: 0
                                    }, t || {}), h(e) && e.error) e = e.error;
                                else {
                                    if (d(e) || p(e)) {
                                        var n = e.name || (d(e) ? "DOMError" : "DOMException"),
                                            r = e.message ? n + ": " + e.message : n;
                                        return this.captureMessage(r, V(t, {
                                            stacktrace: !0,
                                            trimHeadFrames: t.trimHeadFrames + 1
                                        }))
                                    }
                                    if (f(e)) e = e;
                                    else {
                                        if (!y(e)) return this.captureMessage(e, V(t, {
                                            stacktrace: !0,
                                            trimHeadFrames: t.trimHeadFrames + 1
                                        }));
                                        t = this.U(t, e), e = new Error(t.message)
                                    }
                                }
                                this.d = e;
                                try {
                                    var i = a.computeStackTrace(e);
                                    this.V(i, t)
                                } catch (o) {
                                    if (e !== o) throw o
                                }
                                return this
                            },
                            U: function(e, t) {
                                var n = Object.keys(t).sort(),
                                    r = V(e, {
                                        message: "Non-Error exception captured with keys: " + F(n),
                                        fingerprint: [c(n)],
                                        extra: e.extra || {}
                                    });
                                return r.extra.W = A(t), r
                            },
                            captureMessage: function(e, t) {
                                if (!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(e)) {
                                    var n, r = V({
                                        message: e += ""
                                    }, t = t || {});
                                    try {
                                        throw new Error(e)
                                    } catch (i) {
                                        n = i
                                    }
                                    n.name = null;
                                    var o = a.computeStackTrace(n),
                                        s = b(o.stack) && o.stack[1];
                                    s && "Raven.captureException" === s.func && (s = o.stack[2]);
                                    var c = s && s.url || "";
                                    if ((!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(c)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(c))) {
                                        if (this.k.stacktrace || t.stacktrace || "" === r.message) {
                                            r.fingerprint = null == r.fingerprint ? e : r.fingerprint, (t = V({
                                                trimHeadFrames: 0
                                            }, t)).trimHeadFrames += 1;
                                            var l = this.X(o, t);
                                            r.stacktrace = {
                                                frames: l.reverse()
                                            }
                                        }
                                        return r.fingerprint && (r.fingerprint = b(r.fingerprint) ? r.fingerprint : [r.fingerprint]), this.Y(r), this
                                    }
                                }
                            },
                            captureBreadcrumb: function(e) {
                                var t = V({
                                    timestamp: r() / 1e3
                                }, e);
                                if (v(this.k.breadcrumbCallback)) {
                                    var n = this.k.breadcrumbCallback(t);
                                    if (m(n) && !_(n)) t = n;
                                    else if (!1 === n) return this
                                }
                                return this.u.push(t), this.u.length > this.k.maxBreadcrumbs && this.u.shift(), this
                            },
                            addPlugin: function(e) {
                                var t = [].slice.call(arguments, 1);
                                return this.r.push([e, t]), this.n && this.F(), this
                            },
                            setUserContext: function(e) {
                                return this.j.user = e, this
                            },
                            setExtraContext: function(e) {
                                return this.Z("extra", e), this
                            },
                            setTagsContext: function(e) {
                                return this.Z("tags", e), this
                            },
                            clearContext: function() {
                                return this.j = {}, this
                            },
                            getContext: function() {
                                return JSON.parse(s(this.j))
                            },
                            setEnvironment: function(e) {
                                return this.k.environment = e, this
                            },
                            setRelease: function(e) {
                                return this.k.release = e, this
                            },
                            setDataCallback: function(e) {
                                var t = this.k.dataCallback;
                                return this.k.dataCallback = i(t, e), this
                            },
                            setBreadcrumbCallback: function(e) {
                                var t = this.k.breadcrumbCallback;
                                return this.k.breadcrumbCallback = i(t, e), this
                            },
                            setShouldSendCallback: function(e) {
                                var t = this.k.shouldSendCallback;
                                return this.k.shouldSendCallback = i(t, e), this
                            },
                            setTransport: function(e) {
                                return this.k.transport = e, this
                            },
                            lastException: function() {
                                return this.d
                            },
                            lastEventId: function() {
                                return this.f
                            },
                            isSetup: function() {
                                return !(!this.a || !this.g && (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0, this.z("error", "Error: Raven has not been configured.")), 1))
                            },
                            afterLoad: function() {
                                var e = q.RavenConfig;
                                e && this.config(e.dsn, e.config).install()
                            },
                            showReportDialog: function(e) {
                                if (I) {
                                    if (!(e = V({
                                            eventId: this.lastEventId(),
                                            dsn: this.H,
                                            user: this.j.user || {}
                                        }, e)).eventId) throw new l("Missing eventId");
                                    if (!e.dsn) throw new l("Missing DSN");
                                    var t = encodeURIComponent,
                                        n = [];
                                    for (var r in e)
                                        if ("user" === r) {
                                            var i = e.user;
                                            i.name && n.push("name=" + t(i.name)), i.email && n.push("email=" + t(i.email))
                                        } else n.push(t(r) + "=" + t(e[r]));
                                    var o = this.J(this.G(e.dsn)),
                                        a = I.createElement("script");
                                    a.async = !0, a.src = o + "/api/embed/error-page/?" + n.join("&"), (I.head || I.body).appendChild(a)
                                }
                            },
                            L: function() {
                                var e = this;
                                this.m += 1, setTimeout((function() {
                                    e.m -= 1
                                }))
                            },
                            $: function(e, t) {
                                var n, r;
                                if (this.b) {
                                    for (r in t = t || {}, e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1), I.createEvent ? (n = I.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (n = I.createEventObject()).eventType = e, t) S(t, r) && (n[r] = t[r]);
                                    if (I.createEvent) I.dispatchEvent(n);
                                    else try {
                                        I.fireEvent("on" + n.eventType.toLowerCase(), n)
                                    } catch (i) {}
                                }
                            },
                            _: function(e) {
                                var t = this;
                                return function(n) {
                                    if (t.aa = null, t.v !== n) {
                                        var r;
                                        t.v = n;
                                        try {
                                            r = U(n.target)
                                        } catch (i) {
                                            r = "<unknown>"
                                        }
                                        t.captureBreadcrumb({
                                            category: "ui." + e,
                                            message: r
                                        })
                                    }
                                }
                            },
                            ba: function() {
                                var e = this;
                                return function(t) {
                                    var n;
                                    try {
                                        n = t.target
                                    } catch (i) {
                                        return
                                    }
                                    var r = n && n.tagName;
                                    if (r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable)) {
                                        var o = e.aa;
                                        o || e._("input")(t), clearTimeout(o), e.aa = setTimeout((function() {
                                            e.aa = null
                                        }), 1e3)
                                    }
                                }
                            },
                            ca: function(e, t) {
                                var n = M(this.w.href),
                                    r = M(t),
                                    i = M(e);
                                this.x = t, n.protocol === r.protocol && n.host === r.host && (t = r.relative), n.protocol === i.protocol && n.host === i.host && (e = i.relative), this.captureBreadcrumb({
                                    category: "navigation",
                                    data: {
                                        to: t,
                                        from: e
                                    }
                                })
                            },
                            C: function() {
                                var e = this;
                                e.da = Function.prototype.toString, Function.prototype.toString = function() {
                                    return "function" == typeof this && this.M ? e.da.apply(this.O, arguments) : e.da.apply(this, arguments)
                                }
                            },
                            Q: function() {
                                this.da && (Function.prototype.toString = this.da)
                            },
                            D: function() {
                                function e(e) {
                                    return function(t, r) {
                                        for (var i = new Array(arguments.length), o = 0; o < i.length; ++o) i[o] = arguments[o];
                                        var a = i[0];
                                        return v(a) && (i[0] = n.wrap({
                                            mechanism: {
                                                type: "instrument",
                                                data: {
                                                    "function": e.name || "<anonymous>"
                                                }
                                            }
                                        }, a)), e.apply ? e.apply(this, i) : e(i[0], i[1])
                                    }
                                }

                                function t(e) {
                                    var t = q[e] && q[e].prototype;
                                    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (D(t, "addEventListener", (function(t) {
                                        return function(r, o, a, s) {
                                            try {
                                                o && o.handleEvent && (o.handleEvent = n.wrap({
                                                    mechanism: {
                                                        type: "instrument",
                                                        data: {
                                                            target: e,
                                                            "function": "handleEvent",
                                                            handler: o && o.name || "<anonymous>"
                                                        }
                                                    }
                                                }, o.handleEvent))
                                            } catch (c) {}
                                            var l, u, h;
                                            return i && i.dom && ("EventTarget" === e || "Node" === e) && (u = n._("click"), h = n.ba(), l = function(e) {
                                                if (e) {
                                                    var t;
                                                    try {
                                                        t = e.type
                                                    } catch (n) {
                                                        return
                                                    }
                                                    return "click" === t ? u(e) : "keypress" === t ? h(e) : void 0
                                                }
                                            }), t.call(this, r, n.wrap({
                                                mechanism: {
                                                    type: "instrument",
                                                    data: {
                                                        target: e,
                                                        "function": "addEventListener",
                                                        handler: o && o.name || "<anonymous>"
                                                    }
                                                }
                                            }, o, l), a, s)
                                        }
                                    }), r), D(t, "removeEventListener", (function(e) {
                                        return function(t, n, r, i) {
                                            try {
                                                n = n && (n.N ? n.N : n)
                                            } catch (o) {}
                                            return e.call(this, t, n, r, i)
                                        }
                                    }), r))
                                }
                                var n = this,
                                    r = n.t,
                                    i = this.k.autoBreadcrumbs;
                                D(q, "setTimeout", e, r), D(q, "setInterval", e, r), q.requestAnimationFrame && D(q, "requestAnimationFrame", (function(e) {
                                    return function(t) {
                                        return e(n.wrap({
                                            mechanism: {
                                                type: "instrument",
                                                data: {
                                                    "function": "requestAnimationFrame",
                                                    handler: e && e.name || "<anonymous>"
                                                }
                                            }
                                        }, t))
                                    }
                                }), r);
                                for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], a = 0; a < o.length; a++) t(o[a])
                            },
                            E: function() {
                                function e(e, n) {
                                    e in n && v(n[e]) && D(n, e, (function(n) {
                                        return t.wrap({
                                            mechanism: {
                                                type: "instrument",
                                                data: {
                                                    "function": e,
                                                    handler: n && n.name || "<anonymous>"
                                                }
                                            }
                                        }, n)
                                    }))
                                }
                                var t = this,
                                    n = this.k.autoBreadcrumbs,
                                    r = t.t;
                                if (n.xhr && "XMLHttpRequest" in q) {
                                    var i = q.XMLHttpRequest && q.XMLHttpRequest.prototype;
                                    D(i, "open", (function(e) {
                                        return function(n, r) {
                                            return w(r) && -1 === r.indexOf(t.h) && (this.ea = {
                                                method: n,
                                                url: r,
                                                status_code: null
                                            }), e.apply(this, arguments)
                                        }
                                    }), r), D(i, "send", (function(n) {
                                        return function() {
                                            function r() {
                                                if (i.ea && 4 === i.readyState) {
                                                    try {
                                                        i.ea.status_code = i.status
                                                    } catch (e) {}
                                                    t.captureBreadcrumb({
                                                        type: "http",
                                                        category: "xhr",
                                                        data: i.ea
                                                    })
                                                }
                                            }
                                            for (var i = this, o = ["onload", "onerror", "onprogress"], a = 0; a < o.length; a++) e(o[a], i);
                                            return "onreadystatechange" in i && v(i.onreadystatechange) ? D(i, "onreadystatechange", (function(e) {
                                                return t.wrap({
                                                    mechanism: {
                                                        type: "instrument",
                                                        data: {
                                                            "function": "onreadystatechange",
                                                            handler: e && e.name || "<anonymous>"
                                                        }
                                                    }
                                                }, e, r)
                                            })) : i.onreadystatechange = r, n.apply(this, arguments)
                                        }
                                    }), r)
                                }
                                n.xhr && W() && D(q, "fetch", (function(e) {
                                    return function() {
                                        for (var n = new Array(arguments.length), r = 0; r < n.length; ++r) n[r] = arguments[r];
                                        var i, o = n[0],
                                            a = "GET";
                                        if ("string" == typeof o ? i = o : "Request" in q && o instanceof q.Request ? (i = o.url, o.method && (a = o.method)) : i = "" + o, -1 !== i.indexOf(t.h)) return e.apply(this, n);
                                        n[1] && n[1].method && (a = n[1].method);
                                        var s = {
                                            method: a,
                                            url: i,
                                            status_code: null
                                        };
                                        return e.apply(this, n).then((function(e) {
                                            return s.status_code = e.status, t.captureBreadcrumb({
                                                type: "http",
                                                category: "fetch",
                                                data: s
                                            }), e
                                        }))["catch"]((function(e) {
                                            throw t.captureBreadcrumb({
                                                type: "http",
                                                category: "fetch",
                                                data: s,
                                                level: "error"
                                            }), e
                                        }))
                                    }
                                }), r), n.dom && this.b && (I.addEventListener ? (I.addEventListener("click", t._("click"), !1), I.addEventListener("keypress", t.ba(), !1)) : I.attachEvent && (I.attachEvent("onclick", t._("click")), I.attachEvent("onkeypress", t.ba())));
                                var o = q.chrome,
                                    a = !(o && o.app && o.app.runtime) && q.history && q.history.pushState && q.history.replaceState;
                                if (n.location && a) {
                                    var s = q.onpopstate;
                                    q.onpopstate = function() {
                                        var e = t.w.href;
                                        if (t.ca(t.x, e), s) return s.apply(this, arguments)
                                    };
                                    var c = function(e) {
                                        return function() {
                                            var n = arguments.length > 2 ? arguments[2] : void 0;
                                            return n && t.ca(t.x, n + ""), e.apply(this, arguments)
                                        }
                                    };
                                    D(q.history, "pushState", c, r), D(q.history, "replaceState", c, r)
                                }
                                if (n.console && "console" in q && console.log) {
                                    var l = function(e, n) {
                                        t.captureBreadcrumb({
                                            message: e,
                                            level: n.level,
                                            category: "console"
                                        })
                                    };
                                    E(["debug", "info", "warn", "error", "log"], (function(e, t) {
                                        B(console, t, l)
                                    }))
                                }
                            },
                            R: function() {
                                for (var e; this.t.length;) {
                                    var t = (e = this.t.shift())[0],
                                        n = e[1],
                                        r = e[2];
                                    t[n] = r
                                }
                            },
                            S: function() {
                                for (var e in this.q) this.p[e] = this.q[e]
                            },
                            F: function() {
                                var e = this;
                                E(this.r, (function(t, n) {
                                    var r = n[0],
                                        i = n[1];
                                    r.apply(e, [e].concat(i))
                                }))
                            },
                            G: function(e) {
                                var t = Z.exec(e),
                                    n = {},
                                    r = 7;
                                try {
                                    for (; r--;) n[K[r]] = t[r] || ""
                                } catch (i) {
                                    throw new l("Invalid DSN: " + e)
                                }
                                if (n.pass && !this.k.allowSecretKey) throw new l("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                                return n
                            },
                            J: function(e) {
                                var t = "//" + e.host + (e.port ? ":" + e.port : "");
                                return e.protocol && (t = e.protocol + ":" + t), t
                            },
                            A: function(e, t) {
                                (t = t || {}).mechanism = t.mechanism || {
                                    type: "onerror",
                                    handled: !1
                                }, this.m || this.V(e, t)
                            },
                            V: function(e, t) {
                                var n = this.X(e, t);
                                this.$("handle", {
                                    stackInfo: e,
                                    options: t
                                }), this.fa(e.name, e.message, e.url, e.lineno, n, t)
                            },
                            X: function(e, t) {
                                var n = this,
                                    r = [];
                                if (e.stack && e.stack.length && (E(e.stack, (function(t, i) {
                                        var o = n.ga(i, e.url);
                                        o && r.push(o)
                                    })), t && t.trimHeadFrames))
                                    for (var i = 0; i < t.trimHeadFrames && i < r.length; i++) r[i].in_app = !1;
                                return r = r.slice(0, this.k.stackTraceLimit)
                            },
                            ga: function(e, t) {
                                var n = {
                                    filename: e.url,
                                    lineno: e.line,
                                    colno: e.column,
                                    "function": e.func || "?"
                                };
                                return e.url || (n.filename = t), n.in_app = !(this.k.includePaths.test && !this.k.includePaths.test(n.filename) || /(Raven|TraceKit)\./.test(n["function"]) || /raven\.(min\.)?js$/.test(n.filename)), n
                            },
                            fa: function(e, t, n, r, i, o) {
                                var a, s = (e ? e + ": " : "") + (t || "");
                                if ((!this.k.ignoreErrors.test || !this.k.ignoreErrors.test(t) && !this.k.ignoreErrors.test(s)) && (i && i.length ? (n = i[0].filename || n, i.reverse(), a = {
                                        frames: i
                                    }) : n && (a = {
                                        frames: [{
                                            filename: n,
                                            lineno: r,
                                            in_app: !0
                                        }]
                                    }), (!this.k.ignoreUrls.test || !this.k.ignoreUrls.test(n)) && (!this.k.whitelistUrls.test || this.k.whitelistUrls.test(n)))) {
                                    var c = V({
                                            exception: {
                                                values: [{
                                                    type: e,
                                                    value: t,
                                                    stacktrace: a
                                                }]
                                            },
                                            transaction: n
                                        }, o),
                                        l = c.exception.values[0];
                                    null == l.type && "" === l.value && (l.value = "Unrecoverable error caught"), !c.exception.mechanism && c.mechanism && (c.exception.mechanism = c.mechanism, delete c.mechanism), c.exception.mechanism = V({
                                        type: "generic",
                                        handled: !0
                                    }, c.exception.mechanism || {}), this.Y(c)
                                }
                            },
                            ha: function(e) {
                                var t = this.k.maxMessageLength;
                                if (e.message && (e.message = k(e.message, t)), e.exception) {
                                    var n = e.exception.values[0];
                                    n.value = k(n.value, t)
                                }
                                var r = e.request;
                                return r && (r.url && (r.url = k(r.url, this.k.maxUrlLength)), r.Referer && (r.Referer = k(r.Referer, this.k.maxUrlLength))), e.breadcrumbs && e.breadcrumbs.values && this.ia(e.breadcrumbs), e
                            },
                            ia: function(e) {
                                for (var t, n, r, i = ["to", "from", "url"], o = 0; o < e.values.length; ++o)
                                    if ((n = e.values[o]).hasOwnProperty("data") && m(n.data) && !x(n.data)) {
                                        r = V({}, n.data);
                                        for (var a = 0; a < i.length; ++a) t = i[a], r.hasOwnProperty(t) && r[t] && (r[t] = k(r[t], this.k.maxUrlLength));
                                        e.values[o].data = r
                                    }
                            },
                            ja: function() {
                                if (this.c || this.b) {
                                    var e = {};
                                    return this.c && L.userAgent && (e.headers = {
                                        "User-Agent": L.userAgent
                                    }), q.location && q.location.href && (e.url = q.location.href), this.b && I.referrer && (e.headers || (e.headers = {}), e.headers.Referer = I.referrer), e
                                }
                            },
                            y: function() {
                                this.ka = 0, this.la = null
                            },
                            ma: function() {
                                return this.ka && r() - this.la < this.ka
                            },
                            na: function(e) {
                                var t = this.e;
                                return !(!t || e.message !== t.message || e.transaction !== t.transaction) && (e.stacktrace || t.stacktrace ? P(e.stacktrace, t.stacktrace) : e.exception || t.exception ? O(e.exception, t.exception) : !e.fingerprint && !t.fingerprint || Boolean(e.fingerprint && t.fingerprint) && JSON.stringify(e.fingerprint) === JSON.stringify(t.fingerprint))
                            },
                            oa: function(e) {
                                if (!this.ma()) {
                                    var t = e.status;
                                    if (400 === t || 401 === t || 429 === t) {
                                        var n;
                                        try {
                                            n = W() ? e.headers.get("Retry-After") : e.getResponseHeader("Retry-After"), n = 1e3 * parseInt(n, 10)
                                        } catch (i) {}
                                        this.ka = n || (2 * this.ka || 1e3), this.la = r()
                                    }
                                }
                            },
                            Y: function(e) {
                                var t = this.k,
                                    n = {
                                        project: this.i,
                                        logger: t.logger,
                                        platform: "javascript"
                                    },
                                    i = this.ja();
                                if (i && (n.request = i), e.trimHeadFrames && delete e.trimHeadFrames, (e = V(n, e)).tags = V(V({}, this.j.tags), e.tags), e.extra = V(V({}, this.j.extra), e.extra), e.extra["session:duration"] = r() - this.s, this.u && this.u.length > 0 && (e.breadcrumbs = {
                                        values: [].slice.call(this.u, 0)
                                    }), this.j.user && (e.user = this.j.user), t.environment && (e.environment = t.environment), t.release && (e.release = t.release), t.serverName && (e.server_name = t.serverName), e = this.pa(e), Object.keys(e).forEach((function(t) {
                                        (null == e[t] || "" === e[t] || _(e[t])) && delete e[t]
                                    })), v(t.dataCallback) && (e = t.dataCallback(e) || e), e && !_(e) && (!v(t.shouldSendCallback) || t.shouldSendCallback(e))) return this.ma() ? void this.z("warn", "Raven dropped error due to backoff: ", e) : void("number" == typeof t.sampleRate ? Math.random() < t.sampleRate && this.qa(e) : this.qa(e))
                            },
                            pa: function(e) {
                                return N(e, this.k.sanitizeKeys)
                            },
                            ra: function() {
                                return C()
                            },
                            qa: function(e, t) {
                                var n = this,
                                    r = this.k;
                                if (this.isSetup()) {
                                    if (e = this.ha(e), !this.k.allowDuplicates && this.na(e)) return void this.z("warn", "Raven dropped repeat event: ", e);
                                    this.f = e.event_id || (e.event_id = this.ra()), this.e = e, this.z("debug", "Raven about to send:", e);
                                    var i = {
                                        sentry_version: "7",
                                        sentry_client: "raven-js/" + this.VERSION,
                                        sentry_key: this.h
                                    };
                                    this.I && (i.sentry_secret = this.I);
                                    var o = e.exception && e.exception.values[0];
                                    this.k.autoBreadcrumbs && this.k.autoBreadcrumbs.sentry && this.captureBreadcrumb({
                                        category: "sentry",
                                        message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                                        event_id: e.event_id,
                                        level: e.level || "error"
                                    });
                                    var a = this.K;
                                    (r.transport || this._makeRequest).call(this, {
                                        url: a,
                                        auth: i,
                                        data: e,
                                        options: r,
                                        onSuccess: function() {
                                            n.y(), n.$("success", {
                                                data: e,
                                                src: a
                                            }), t && t()
                                        },
                                        onError: function(r) {
                                            n.z("error", "Raven transport failed to send: ", r), r.request && n.oa(r.request), n.$("failure", {
                                                data: e,
                                                src: a
                                            }), r = r || new Error("Raven send failed (no additional details provided)"), t && t(r)
                                        }
                                    })
                                }
                            },
                            _makeRequest: function(e) {
                                var t = e.url + "?" + R(e.auth),
                                    n = null,
                                    r = {};
                                if (e.options.headers && (n = this.sa(e.options.headers)), e.options.fetchParameters && (r = this.sa(e.options.fetchParameters)), W()) {
                                    r.body = s(e.data);
                                    var i = V({}, this.l),
                                        o = V(i, r);
                                    return n && (o.headers = n), q.fetch(t, o).then((function(t) {
                                        if (t.ok) e.onSuccess && e.onSuccess();
                                        else {
                                            var n = new Error("Sentry error code: " + t.status);
                                            n.request = t, e.onError && e.onError(n)
                                        }
                                    }))["catch"]((function() {
                                        e.onError && e.onError(new Error("Sentry error code: network unavailable"))
                                    }))
                                }
                                var a = q.XMLHttpRequest && new q.XMLHttpRequest;
                                a && (("withCredentials" in a || "undefined" != typeof XDomainRequest) && ("withCredentials" in a ? a.onreadystatechange = function() {
                                    if (4 === a.readyState)
                                        if (200 === a.status) e.onSuccess && e.onSuccess();
                                        else if (e.onError) {
                                        var t = new Error("Sentry error code: " + a.status);
                                        t.request = a, e.onError(t)
                                    }
                                } : (a = new XDomainRequest, t = t.replace(/^https?:/, ""), e.onSuccess && (a.onload = e.onSuccess), e.onError && (a.onerror = function() {
                                    var t = new Error("Sentry error code: XDomainRequest");
                                    t.request = a, e.onError(t)
                                })), a.open("POST", t), n && E(n, (function(e, t) {
                                    a.setRequestHeader(e, t)
                                })), a.send(s(e.data))))
                            },
                            sa: function(e) {
                                var t = {};
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var r = e[n];
                                        t[n] = "function" == typeof r ? r() : r
                                    }
                                return t
                            },
                            z: function(e) {
                                this.q[e] && (this.debug || this.k.debug) && Function.prototype.apply.call(this.q[e], this.p, [].slice.call(arguments, 1))
                            },
                            Z: function(e, t) {
                                g(t) ? delete this.j[e] : this.j[e] = V(this.j[e] || {}, t)
                            }
                        }, o.prototype.setUser = o.prototype.setUserContext, o.prototype.setReleaseContext = o.prototype.setRelease, t.exports = o
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    1: 1,
                    2: 2,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8
                }],
                4: [function(e, t, n) {
                    (function(n) {
                        var r = e(3),
                            i = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {},
                            o = i.Raven,
                            a = new r;
                        a.noConflict = function() {
                            return i.Raven = o, a
                        }, a.afterLoad(), t.exports = a, t.exports.Client = r
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    3: 3
                }],
                5: [function(e, t, n) {
                    (function(n) {
                        function r(e) {
                            switch (Object.prototype.toString.call(e)) {
                                case "[object Error]":
                                case "[object Exception]":
                                case "[object DOMException]":
                                    return !0;
                                default:
                                    return e instanceof Error
                            }
                        }

                        function i(e) {
                            return "[object DOMError]" === Object.prototype.toString.call(e)
                        }

                        function o(e) {
                            return void 0 === e
                        }

                        function a(e) {
                            return "[object Object]" === Object.prototype.toString.call(e)
                        }

                        function s(e) {
                            return "[object String]" === Object.prototype.toString.call(e)
                        }

                        function c(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }

                        function l() {
                            if (!("fetch" in _)) return !1;
                            try {
                                return new Headers, new Request(""), new Response, !0
                            } catch (e) {
                                return !1
                            }
                        }

                        function u(e, t) {
                            var n, r;
                            if (o(e.length))
                                for (n in e) d(e, n) && t.call(null, n, e[n]);
                            else if (r = e.length)
                                for (n = 0; n < r; n++) t.call(null, n, e[n])
                        }

                        function h(e, t) {
                            if ("number" != typeof t) throw new Error("2nd argument to `truncate` function should be a number");
                            return "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "…"
                        }

                        function d(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }

                        function p(e) {
                            for (var t, n = [], r = 0, i = e.length; r < i; r++) s(t = e[r]) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
                            return new RegExp(n.join("|"), "i")
                        }

                        function f(e) {
                            var t, n, r, i, o, a = [];
                            if (!e || !e.tagName) return "";
                            if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (t = e.className) && s(t))
                                for (n = t.split(/\s+/), o = 0; o < n.length; o++) a.push("." + n[o]);
                            var c = ["type", "name", "title", "alt"];
                            for (o = 0; o < c.length; o++) r = c[o], (i = e.getAttribute(r)) && a.push("[" + r + '="' + i + '"]');
                            return a.join("")
                        }

                        function m(e, t) {
                            return !!(!!e ^ !!t)
                        }

                        function y(e, t) {
                            if (m(e, t)) return !1;
                            var n = e.frames,
                                r = t.frames;
                            if (void 0 === n || void 0 === r) return !1;
                            if (n.length !== r.length) return !1;
                            for (var i, o, a = 0; a < n.length; a++)
                                if (i = n[a], o = r[a], i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i["function"] !== o["function"]) return !1;
                            return !0
                        }

                        function g(e) {
                            return function(e) {
                                return ~-encodeURI(e).split(/%..|./).length
                            }(JSON.stringify(e))
                        }

                        function v(e) {
                            if ("string" == typeof e) {
                                return h(e, 40)
                            }
                            if ("number" == typeof e || "boolean" == typeof e || void 0 === e) return e;
                            var t = Object.prototype.toString.call(e);
                            return "[object Object]" === t ? "[Object]" : "[object Array]" === t ? "[Array]" : "[object Function]" === t ? e.name ? "[Function: " + e.name + "]" : "[Function]" : e
                        }

                        function w(e, t) {
                            return 0 === t ? v(e) : a(e) ? Object.keys(e).reduce((function(n, r) {
                                return n[r] = w(e[r], t - 1), n
                            }), {}) : Array.isArray(e) ? e.map((function(e) {
                                return w(e, t - 1)
                            })) : v(e)
                        }
                        var b = e(7),
                            _ = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {},
                            E = 3,
                            V = 51200,
                            k = 40;
                        t.exports = {
                            isObject: function(e) {
                                return "object" == typeof e && null !== e
                            },
                            isError: r,
                            isErrorEvent: function(e) {
                                return "[object ErrorEvent]" === Object.prototype.toString.call(e)
                            },
                            isDOMError: i,
                            isDOMException: function(e) {
                                return "[object DOMException]" === Object.prototype.toString.call(e)
                            },
                            isUndefined: o,
                            isFunction: function(e) {
                                return "function" == typeof e
                            },
                            isPlainObject: a,
                            isString: s,
                            isArray: c,
                            isEmptyObject: function(e) {
                                if (!a(e)) return !1;
                                for (var t in e)
                                    if (e.hasOwnProperty(t)) return !1;
                                return !0
                            },
                            supportsErrorEvent: function() {
                                try {
                                    return new ErrorEvent(""), !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            supportsDOMError: function() {
                                try {
                                    return new DOMError(""), !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            supportsDOMException: function() {
                                try {
                                    return new DOMException(""), !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            supportsFetch: l,
                            supportsReferrerPolicy: function() {
                                if (!l()) return !1;
                                try {
                                    return new Request("pickleRick", {
                                        referrerPolicy: "origin"
                                    }), !0
                                } catch (e) {
                                    return !1
                                }
                            },
                            supportsPromiseRejectionEvent: function() {
                                return "function" == typeof PromiseRejectionEvent
                            },
                            wrappedCallback: function(e) {
                                return function(t, n) {
                                    var r = e(t) || t;
                                    return n && n(r) || r
                                }
                            },
                            each: u,
                            objectMerge: function(e, t) {
                                return t ? (u(t, (function(t, n) {
                                    e[t] = n
                                })), e) : e
                            },
                            truncate: h,
                            objectFrozen: function(e) {
                                return !!Object.isFrozen && Object.isFrozen(e)
                            },
                            hasKey: d,
                            joinRegExp: p,
                            urlencode: function(e) {
                                var t = [];
                                return u(e, (function(e, n) {
                                    t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                                })), t.join("&")
                            },
                            uuid4: function() {
                                var e = _.crypto || _.msCrypto;
                                if (!o(e) && e.getRandomValues) {
                                    var t = new Uint16Array(8);
                                    e.getRandomValues(t), t[3] = 4095 & t[3] | 16384, t[4] = 16383 & t[4] | 32768;
                                    var n = function(e) {
                                        for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                                        return t
                                    };
                                    return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
                                }
                                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                    var t = 16 * Math.random() | 0;
                                    return ("x" === e ? t : 3 & t | 8).toString(16)
                                }))
                            },
                            htmlTreeAsString: function(e) {
                                for (var t, n = [], r = 0, i = 0, o = " > ".length; e && r++ < 5 && !("html" === (t = f(e)) || r > 1 && i + n.length * o + t.length >= 80);) n.push(t), i += t.length, e = e.parentNode;
                                return n.reverse().join(" > ")
                            },
                            htmlElementAsString: f,
                            isSameException: function(e, t) {
                                return !m(e, t) && (e = e.values[0], t = t.values[0], e.type === t.type && e.value === t.value && ! function(e, t) {
                                    return o(e) && o(t)
                                }(e.stacktrace, t.stacktrace) && y(e.stacktrace, t.stacktrace))
                            },
                            isSameStacktrace: y,
                            parseUrl: function(e) {
                                if ("string" != typeof e) return {};
                                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/),
                                    n = t[6] || "",
                                    r = t[8] || "";
                                return {
                                    protocol: t[2],
                                    host: t[4],
                                    path: t[5],
                                    relative: t[5] + n + r
                                }
                            },
                            fill: function(e, t, n, r) {
                                if (null != e) {
                                    var i = e[t];
                                    e[t] = n(i), e[t].M = !0, e[t].O = i, r && r.push([e, t, i])
                                }
                            },
                            safeJoin: function(e, t) {
                                if (!c(e)) return "";
                                for (var n = [], i = 0; i < e.length; i++) try {
                                    n.push(String(e[i]))
                                } catch (r) {
                                    n.push("[value cannot be serialized]")
                                }
                                return n.join(t)
                            },
                            serializeException: function x(e, t, n) {
                                if (!a(e)) return e;
                                n = "number" != typeof(t = "number" != typeof t ? E : t) ? V : n;
                                var r = w(e, t);
                                return g(b(r)) > n ? x(e, t - 1) : r
                            },
                            serializeKeysForMessage: function(e, t) {
                                if ("number" == typeof e || "string" == typeof e) return e.toString();
                                if (!Array.isArray(e)) return "";
                                if (0 === (e = e.filter((function(e) {
                                        return "string" == typeof e
                                    }))).length) return "[object has no keys]";
                                if (t = "number" != typeof t ? k : t, e[0].length >= t) return e[0];
                                for (var n = e.length; n > 0; n--) {
                                    var r = e.slice(0, n).join(", ");
                                    if (!(r.length > t)) return n === e.length ? r : r + "…"
                                }
                                return ""
                            },
                            sanitize: function(e, t) {
                                if (!c(t) || c(t) && 0 === t.length) return e;
                                var n, r = p(t),
                                    o = "********";
                                try {
                                    n = JSON.parse(b(e))
                                } catch (i) {
                                    return e
                                }
                                return function s(e) {
                                    return c(e) ? e.map((function(e) {
                                        return s(e)
                                    })) : a(e) ? Object.keys(e).reduce((function(t, n) {
                                        return t[n] = r.test(n) ? o : s(e[n]), t
                                    }), {}) : e
                                }(n)
                            }
                        }
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    7: 7
                }],
                6: [function(e, t, n) {
                    (function(n) {
                        function r() {
                            return "undefined" == typeof document || null == document.location ? "" : document.location.href
                        }
                        var i = e(5),
                            o = {
                                collectWindowErrors: !0,
                                debug: !1
                            },
                            a = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {},
                            s = [].slice,
                            c = "?",
                            l = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
                        o.report = function() {
                            function e(t, n) {
                                var r = null;
                                if (!n || o.collectWindowErrors) {
                                    for (var i in p)
                                        if (p.hasOwnProperty(i)) try {
                                            p[i].apply(null, [t].concat(s.call(arguments, 2)))
                                        } catch (e) {
                                            r = e
                                        }
                                    if (r) throw r
                                }
                            }

                            function t(t, a, s, u, d) {
                                var p = i.isErrorEvent(d) ? d.error : d,
                                    f = i.isErrorEvent(t) ? t.message : t;
                                if (y) o.computeStackTrace.augmentStackTraceWithInitialElement(y, a, s, f), n();
                                else if (p && i.isError(p)) e(o.computeStackTrace(p), !0);
                                else {
                                    var m, g = {
                                            url: a,
                                            line: s,
                                            column: u
                                        },
                                        v = void 0;
                                    if ("[object String]" === {}.toString.call(f))(m = f.match(l)) && (v = m[1], f = m[2]);
                                    g.func = c, e({
                                        name: v,
                                        message: f,
                                        url: r(),
                                        stack: [g]
                                    }, !0)
                                }
                                return !!h && h.apply(this, arguments)
                            }

                            function n() {
                                var t = y,
                                    n = f;
                                f = null, y = null, m = null, e.apply(null, [t, !1].concat(n))
                            }

                            function u(e, t) {
                                var r = s.call(arguments, 1);
                                if (y) {
                                    if (m === e) return;
                                    n()
                                }
                                var i = o.computeStackTrace(e);
                                if (y = i, m = e, f = r, setTimeout((function() {
                                        m === e && n()
                                    }), i.incomplete ? 2e3 : 0), !1 !== t) throw e
                            }
                            var h, d, p = [],
                                f = null,
                                m = null,
                                y = null;
                            return u.subscribe = function(e) {
                                d || (h = a.onerror, a.onerror = t, d = !0), p.push(e)
                            }, u.unsubscribe = function(e) {
                                for (var t = p.length - 1; t >= 0; --t) p[t] === e && p.splice(t, 1)
                            }, u.uninstall = function() {
                                d && (a.onerror = h, d = !1, h = void 0), p = []
                            }, u
                        }(), o.computeStackTrace = function() {
                            function e(e) {
                                if ("undefined" != typeof e.stack && e.stack) {
                                    for (var t, n, i, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, u = /\((\S*)(?::(\d+))(?::(\d+))\)/, h = e.stack.split("\n"), d = [], p = (/^(.*) is undefined$/.exec(e.message), 0), f = h.length; p < f; ++p) {
                                        if (n = o.exec(h[p])) {
                                            var m = n[2] && 0 === n[2].indexOf("native");
                                            n[2] && 0 === n[2].indexOf("eval") && (t = u.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), i = {
                                                url: m ? null : n[2],
                                                func: n[1] || c,
                                                args: m ? [n[2]] : [],
                                                line: n[3] ? +n[3] : null,
                                                column: n[4] ? +n[4] : null
                                            }
                                        } else if (n = a.exec(h[p])) i = {
                                            url: n[2],
                                            func: n[1] || c,
                                            args: [],
                                            line: +n[3],
                                            column: n[4] ? +n[4] : null
                                        };
                                        else {
                                            if (!(n = s.exec(h[p]))) continue;
                                            n[3] && n[3].indexOf(" > eval") > -1 && (t = l.exec(n[3])) ? (n[3] = t[1], n[4] = t[2], n[5] = null) : 0 !== p || n[5] || "undefined" == typeof e.columnNumber || (d[0].column = e.columnNumber + 1), i = {
                                                url: n[3],
                                                func: n[1] || c,
                                                args: n[2] ? n[2].split(",") : [],
                                                line: n[4] ? +n[4] : null,
                                                column: n[5] ? +n[5] : null
                                            }
                                        }
                                        if (!i.func && i.line && (i.func = c), i.url && "blob:" === i.url.substr(0, 5)) {
                                            var y = new XMLHttpRequest;
                                            if (y.open("GET", i.url, !1), y.send(null), 200 === y.status) {
                                                var g = y.responseText || "",
                                                    v = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                                                if (v) {
                                                    var w = v[1];
                                                    "~" === w.charAt(0) && (w = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + w.slice(1)), i.url = w.slice(0, -4)
                                                }
                                            }
                                        }
                                        d.push(i)
                                    }
                                    return d.length ? {
                                        name: e.name,
                                        message: e.message,
                                        url: r(),
                                        stack: d
                                    } : null
                                }
                            }

                            function t(e, t, n, r) {
                                var i = {
                                    url: t,
                                    line: n
                                };
                                if (i.url && i.line) {
                                    if (e.incomplete = !1, i.func || (i.func = c), e.stack.length > 0 && e.stack[0].url === i.url) {
                                        if (e.stack[0].line === i.line) return !1;
                                        if (!e.stack[0].line && e.stack[0].func === i.func) return e.stack[0].line = i.line, !1
                                    }
                                    return e.stack.unshift(i), e.partial = !0, !0
                                }
                                return e.incomplete = !0, !1
                            }

                            function n(e, a) {
                                for (var s, l, u = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, h = [], d = {}, p = !1, f = n.caller; f && !p; f = f.caller)
                                    if (f !== i && f !== o.report) {
                                        if (l = {
                                                url: null,
                                                func: c,
                                                line: null,
                                                column: null
                                            }, f.name ? l.func = f.name : (s = u.exec(f.toString())) && (l.func = s[1]), "undefined" == typeof l.func) try {
                                            l.func = s.input.substring(0, s.input.indexOf("{"))
                                        } catch (y) {}
                                        d["" + f] ? p = !0 : d["" + f] = !0, h.push(l)
                                    }
                                a && h.splice(0, a);
                                var m = {
                                    name: e.name,
                                    message: e.message,
                                    url: r(),
                                    stack: h
                                };
                                return t(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), m
                            }

                            function i(t, i) {
                                var s = null;
                                i = null == i ? 0 : +i;
                                try {
                                    if (s = e(t)) return s
                                } catch (a) {
                                    if (o.debug) throw a
                                }
                                try {
                                    if (s = n(t, i + 1)) return s
                                } catch (a) {
                                    if (o.debug) throw a
                                }
                                return {
                                    name: t.name,
                                    message: t.message,
                                    url: r()
                                }
                            }
                            return i.augmentStackTraceWithInitialElement = t, i.computeStackTraceFromStackProp = e, i
                        }(), t.exports = o
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                }, {
                    5: 5
                }],
                7: [function(e, t, n) {
                    function r(e, t) {
                        for (var n = 0; n < e.length; ++n)
                            if (e[n] === t) return n;
                        return -1
                    }

                    function i(e, t) {
                        var n = [],
                            i = [];
                        return null == t && (t = function(e, t) {
                                return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, r(n, t)).join(".") + "]"
                            }),
                            function(o, a) {
                                if (n.length > 0) {
                                    var s = r(n, this);
                                    ~s ? n.splice(s + 1) : n.push(this), ~s ? i.splice(s, 1 / 0, o) : i.push(o), ~r(n, a) && (a = t.call(this, o, a))
                                } else n.push(a);
                                return null == e ? a instanceof Error ? function(e) {
                                    var t = {
                                        stack: e.stack,
                                        message: e.message,
                                        name: e.name
                                    };
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    return t
                                }(a) : a : e.call(this, o, a)
                            }
                    }
                    n = t.exports = function(e, t, n, r) {
                        return JSON.stringify(e, i(t, r), n)
                    }, n.getSerialize = i
                }, {}],
                8: [function(e, t, n) {
                    function r(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }

                    function i(e, t, n, i, o, a) {
                        return r(function(e, t) {
                            return e << t | e >>> 32 - t
                        }(r(r(t, e), r(i, a)), o), n)
                    }

                    function o(e, t, n, r, o, a, s) {
                        return i(t & n | ~t & r, e, t, o, a, s)
                    }

                    function a(e, t, n, r, o, a, s) {
                        return i(t & r | n & ~r, e, t, o, a, s)
                    }

                    function s(e, t, n, r, o, a, s) {
                        return i(t ^ n ^ r, e, t, o, a, s)
                    }

                    function c(e, t, n, r, o, a, s) {
                        return i(n ^ (t | ~r), e, t, o, a, s)
                    }

                    function l(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var n, i, l, u, h, d = 1732584193,
                            p = -271733879,
                            f = -1732584194,
                            m = 271733878;
                        for (n = 0; n < e.length; n += 16) i = d, l = p, u = f, h = m, d = o(d, p, f, m, e[n], 7, -680876936), m = o(m, d, p, f, e[n + 1], 12, -389564586), f = o(f, m, d, p, e[n + 2], 17, 606105819), p = o(p, f, m, d, e[n + 3], 22, -1044525330), d = o(d, p, f, m, e[n + 4], 7, -176418897), m = o(m, d, p, f, e[n + 5], 12, 1200080426), f = o(f, m, d, p, e[n + 6], 17, -1473231341), p = o(p, f, m, d, e[n + 7], 22, -45705983), d = o(d, p, f, m, e[n + 8], 7, 1770035416), m = o(m, d, p, f, e[n + 9], 12, -1958414417), f = o(f, m, d, p, e[n + 10], 17, -42063), p = o(p, f, m, d, e[n + 11], 22, -1990404162), d = o(d, p, f, m, e[n + 12], 7, 1804603682), m = o(m, d, p, f, e[n + 13], 12, -40341101), f = o(f, m, d, p, e[n + 14], 17, -1502002290), d = a(d, p = o(p, f, m, d, e[n + 15], 22, 1236535329), f, m, e[n + 1], 5, -165796510), m = a(m, d, p, f, e[n + 6], 9, -1069501632), f = a(f, m, d, p, e[n + 11], 14, 643717713), p = a(p, f, m, d, e[n], 20, -373897302), d = a(d, p, f, m, e[n + 5], 5, -701558691), m = a(m, d, p, f, e[n + 10], 9, 38016083), f = a(f, m, d, p, e[n + 15], 14, -660478335), p = a(p, f, m, d, e[n + 4], 20, -405537848), d = a(d, p, f, m, e[n + 9], 5, 568446438), m = a(m, d, p, f, e[n + 14], 9, -1019803690), f = a(f, m, d, p, e[n + 3], 14, -187363961), p = a(p, f, m, d, e[n + 8], 20, 1163531501), d = a(d, p, f, m, e[n + 13], 5, -1444681467), m = a(m, d, p, f, e[n + 2], 9, -51403784), f = a(f, m, d, p, e[n + 7], 14, 1735328473), d = s(d, p = a(p, f, m, d, e[n + 12], 20, -1926607734), f, m, e[n + 5], 4, -378558), m = s(m, d, p, f, e[n + 8], 11, -2022574463), f = s(f, m, d, p, e[n + 11], 16, 1839030562), p = s(p, f, m, d, e[n + 14], 23, -35309556), d = s(d, p, f, m, e[n + 1], 4, -1530992060), m = s(m, d, p, f, e[n + 4], 11, 1272893353), f = s(f, m, d, p, e[n + 7], 16, -155497632), p = s(p, f, m, d, e[n + 10], 23, -1094730640), d = s(d, p, f, m, e[n + 13], 4, 681279174), m = s(m, d, p, f, e[n], 11, -358537222), f = s(f, m, d, p, e[n + 3], 16, -722521979), p = s(p, f, m, d, e[n + 6], 23, 76029189), d = s(d, p, f, m, e[n + 9], 4, -640364487), m = s(m, d, p, f, e[n + 12], 11, -421815835), f = s(f, m, d, p, e[n + 15], 16, 530742520), d = c(d, p = s(p, f, m, d, e[n + 2], 23, -995338651), f, m, e[n], 6, -198630844), m = c(m, d, p, f, e[n + 7], 10, 1126891415), f = c(f, m, d, p, e[n + 14], 15, -1416354905), p = c(p, f, m, d, e[n + 5], 21, -57434055), d = c(d, p, f, m, e[n + 12], 6, 1700485571), m = c(m, d, p, f, e[n + 3], 10, -1894986606), f = c(f, m, d, p, e[n + 10], 15, -1051523), p = c(p, f, m, d, e[n + 1], 21, -2054922799), d = c(d, p, f, m, e[n + 8], 6, 1873313359), m = c(m, d, p, f, e[n + 15], 10, -30611744), f = c(f, m, d, p, e[n + 6], 15, -1560198380), p = c(p, f, m, d, e[n + 13], 21, 1309151649), d = c(d, p, f, m, e[n + 4], 6, -145523070), m = c(m, d, p, f, e[n + 11], 10, -1120210379), f = c(f, m, d, p, e[n + 2], 15, 718787259), p = c(p, f, m, d, e[n + 9], 21, -343485551), d = r(d, i), p = r(p, l), f = r(f, u), m = r(m, h);
                        return [d, p, f, m]
                    }

                    function u(e) {
                        var t, n = "",
                            r = 32 * e.length;
                        for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return n
                    }

                    function h(e) {
                        var t, n = [];
                        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                        var r = 8 * e.length;
                        for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return n
                    }

                    function d(e) {
                        var t, n, r = "0123456789abcdef",
                            i = "";
                        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                        return i
                    }

                    function p(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function f(e) {
                        return function(e) {
                            return u(l(h(e), 8 * e.length))
                        }(p(e))
                    }

                    function m(e, t) {
                        return function(e, t) {
                            var n, r, i = h(e),
                                o = [],
                                a = [];
                            for (o[15] = a[15] = void 0, i.length > 16 && (i = l(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                            return r = l(o.concat(h(t)), 512 + 8 * t.length), u(l(a.concat(r), 640))
                        }(p(e), p(t))
                    }
                    t.exports = function(e, t, n) {
                        return t ? n ? m(t, e) : function(e, t) {
                            return d(m(e, t))
                        }(t, e) : n ? f(e) : function(e) {
                            return d(f(e))
                        }(e)
                    }
                }, {}]
            }, {}, [4])(4)
        }));
    var q = [{
            family: "UC Browser",
            patterns: ["(UC? ?Browser|UCWEB|U3)[ /]?(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Mobile",
            patterns: ["(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)", "(Opera)/(\\d+)\\.(\\d+).+Opera Mobi", "Opera Mobi.+(Opera)(?:/|\\s+)(\\d+)\\.(\\d+)", "Opera Mobi", "(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Mini",
            patterns: ["(Opera Mini)(?:/att|)/?(\\d+|)(?:\\.(\\d+)|)(?:\\.(\\d+)|)", "(OPiOS)/(\\d+).(\\d+).(\\d+)"]
        }, {
            family: "Opera",
            name_replace: "Opera Neon",
            patterns: ["Chrome/.+( MMS)/(\\d+).(\\d+).(\\d+)"]
        }, {
            name_replace: "Opera",
            patterns: ["(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Firefox",
            name_replace: "Firefox Mobile",
            patterns: ["(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)", "(Fennec)/(\\d+)\\.(\\d+)(pre)", "(Fennec)/(\\d+)\\.(\\d+)", "(?:Mobile|Tablet);.*(Firefox)/(\\d+)\\.(\\d+)", "(FxiOS)/(\\d+)\\.(\\d+)(\\.(\\d+)|)(\\.(\\d+)|)"]
        }, {
            name_replace: "Coc Coc",
            patterns: ["(coc_coc_browser)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            family: "QQ",
            name_replace: "QQ Mini",
            patterns: ["(MQQBrowser/Mini)(?:(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"]
        }, {
            family: "QQ",
            name_replace: "QQ Mobile",
            patterns: ["(MQQBrowser)(?:/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)"]
        }, {
            name_replace: "QQ",
            patterns: ["(QQBrowser)(?:/(\\d+)(?:\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)|)"]
        }, {
            family: "Edge",
            name: "Edge Mobile",
            patterns: ["Windows Phone .*(Edge)/(\\d+)\\.(\\d+)", "(EdgiOS|EdgA)/(\\d+)\\.(\\d+).(\\d+).(\\d+)"]
        }, {
            name_replace: "Edge",
            patterns: ["(Edge|Edg)/(\\d+)(?:\\.(\\d+)|)"]
        }, {
            patterns: ["(Puffin)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            family: "Chrome",
            name_replace: "Chrome Mobile",
            patterns: ["Version/.+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "; wv\\).+(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)", "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile(?:[ /]|$)", " Mobile .*(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            family: "Yandex",
            name_replace: "Yandex Mobile",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+).*Mobile"]
        }, {
            name_replace: "Yandex",
            patterns: ["(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            patterns: ["(Vivaldi)/(\\d+)\\.(\\d+)", "(Vivaldi)/(\\d+)\\.(\\d+)\\.(\\d+)"]
        }, {
            name_replace: "Brave",
            patterns: ["(brave)/(\\d+)\\.(\\d+)\\.(\\d+) Chrome"]
        }, {
            family: "Chrome",
            patterns: ["(Chromium|Chrome)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)"]
        }, {
            name_replace: "Internet Explorer Mobile",
            patterns: ["(IEMobile)[ /](\\d+)\\.(\\d+)"]
        }, {
            family: "Safari",
            name_replace: "Safari Mobile",
            patterns: ["(iPod|iPhone|iPad).+Version/(d+).(d+)(?:.(d+)|).*[ +]Safari", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews\\/\\d+\\.\\d+\\.\\d+?", "(iPod|iPhone|iPad).+Version/(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile.*[ +]Safari", "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).*Mobile", "(iPod|iPod touch|iPhone|iPad).* Safari", "(iPod|iPod touch|iPhone|iPad)"]
        }, {
            name_replace: "Safari",
            patterns: ["(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+)|).*Safari/"]
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(7|8).(0)"],
            major_replace: "11"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(6)\\.(0)"],
            major_replace: "10"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(5)\\.(0)"],
            major_replace: "9"
        }, {
            name_replace: "Internet Explorer",
            patterns: ["(Trident)/(4)\\.(0)"],
            major_replace: "8"
        }, {
            family: "Firefox",
            patterns: ["(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)", "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*|)"]
        }],
        I = [{
            family: "Windows",
            name_replace: "Windows Phone",
            patterns: ["(Windows Phone) (?:OS[ /])?(\\d+)\\.(\\d+)", "^UCWEB.*; (wds) (\\d+)\\.(d+)(?:\\.(\\d+)|);", "^UCWEB.*; (wds) (\\d+)\\.(\\d+)(?:\\.(\\d+)|);"]
        }, {
            family: "Windows",
            name_replace: "Windows Mobile",
            patterns: ["(Windows ?Mobile)"]
        }, {
            name_replace: "Android",
            patterns: ["(Android)[ \\-/](\\d+)(?:\\.(\\d+)|)(?:[.\\-]([a-z0-9]+)|)", "(Android) (d+);", "^UCWEB.*; (Adr) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+)|);", "^(JUC).*; ?U; ?(?:Android|)(\\d+)\\.(\\d+)(?:[\\.\\-]([a-z0-9]+)|)", "(android)\\s(?:mobile\\/)(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)", "(Silk-Accelerated=[a-z]{4,5})", "Puffin/[\\d\\.]+AT", "Puffin/[\\d\\.]+AP"]
        }, {
            name_replace: "Chrome OS",
            patterns: ["(x86_64|aarch64)\\ (\\d+)\\.(\\d+)\\.(\\d+).*Chrome.*(?:CitrixChromeApp)$", "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+)|)"]
        }, {
            name_replace: "Windows",
            patterns: ["(Windows 10)", "(Windows NT 6\\.4)", "(Windows NT 10\\.0)"],
            major_replace: "10"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.3; ARM;)", "(Windows NT 6.3)"],
            major_replace: "8",
            minor_replace: "1"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.2)"],
            major_replace: "8"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.1)"],
            major_replace: "7"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows NT 6\\.0)"],
            major_replace: "Vista"
        }, {
            name_replace: "Windows",
            patterns: ["(Windows (?:NT 5\\.2|NT 5\\.1))"],
            major_replace: "XP"
        }, {
            name_replace: "Mac OS X",
            patterns: ["((?:Mac[ +]?|; )OS[ +]X)[\\s+/](?:(\\d+)[_.](\\d+)(?:[_.](\\d+)|)|Mach-O)", "\\w+\\s+Mac OS X\\s+\\w+\\s+(\\d+).(\\d+).(\\d+).*", "(?:PPC|Intel) (Mac OS X)"]
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(10).(d+).*((?:i386|x86_64))"],
            major_replace: "10",
            minor_replace: "6"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(11).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "7"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(12).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "8"
        }, {
            name_replace: "Mac OS X",
            patterns: [" (Dar)(win)/(13).(\\d+).*\\((?:i386|x86_64)\\)"],
            major_replace: "10",
            minor_replace: "9"
        }, {
            name_replace: "iOS",
            patterns: ["^UCWEB.*; (iPad|iPh|iPd) OS (\\d+)_(\\d+)(?:_(\\d+)|);", "(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(\\d+)[_\\.](\\d+)(?:[_\\.](\\d+)|)", "(iPhone|iPad|iPod); Opera", "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)", "\\b(iOS[ /]|iOS; |iPhone(?:/| v|[ _]OS[/,]|; | OS : |\\d,\\d/|\\d,\\d; )|iPad/)(\\d{1,2})[_\\.](\\d{1,2})(?:[_\\.](\\d+)|)", "\\((iOS);", "(iPod|iPhone|iPad)", "Puffin/[\\d\\.]+IT", "Puffin/[\\d\\.]+IP"]
        }, {
            family: "Chrome",
            name_replace: "Chromecast",
            patterns: ["(CrKey -)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "(CrKey[ +]armv7l)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "(CrKey)(?:[/](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)"]
        }, {
            name_replace: "Debian",
            patterns: ["([Dd]ebian)"]
        }, {
            family: "Linux",
            name_replace: "Linux",
            patterns: ["(Linux Mint)(?:/(\\d+)|)"]
        }, {
            family: "Linux",
            patterns: ["(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Mageia|(?:Free|Open|Net|\\b)BSD)", "(Mandriva)(?: Linux|)/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d)|)", "(Linux)(?:[ /](\\d+)\\.(\\d+)(?:\\.(\\d+)|)|)", "\\(linux-gnu\\)"]
        }, {
            family: "BlackBerry",
            name_replace: "BlackBerry OS",
            patterns: ["(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)", "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+)|)", "(Black[Bb]erry)"]
        }, {
            patterns: ["(Fedora|Red Hat|PCLinuxOS|Puppy|Ubuntu|Kindle|Bada|Sailfish|Lubuntu|BackTrack|Slackware|(?:Free|Open|Net|\\b)BSD)[/ ](\\d+)\\.(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)"]
        }],
        L = navigator.userAgent,
        z = function() {
            return L
        },
        H = function(e) {
            return G(e || L, q)
        },
        $ = function(e) {
            return G(e || L, I)
        };

    function J(e, t) {
        try {
            var n = new RegExp(t).exec(e);
            return n ? {
                name: n[1] || "Other",
                major: n[2] || "0",
                minor: n[3] || "0",
                patch: n[4] || "0"
            } : null
        } catch (Ln) {
            return null
        }
    }

    function G(e, t) {
        for (var n = null, r = null, i = -1, o = !1; ++i < t.length && !o;) {
            n = t[i];
            for (var a = -1; ++a < n.patterns.length && !o;) o = null !== (r = J(e, n.patterns[a]))
        }
        return o ? (r.family = n.family || n.name_replace || r.name, n.name_replace && (r.name = n.name_replace), n.major_replace && (r.major = n.major_replace), n.minor_replace && (r.minor = n.minor_replace), n.patch_replace && (r.minor = n.patch_replace), r) : {
            family: "Other",
            name: "Other",
            major: "0",
            minor: "0",
            patch: "0"
        }
    }

    function X() {
        var e = this,
            t = H(),
            n = z();
        this.agent = n.toLowerCase(), this.language = window.navigator.userLanguage || window.navigator.language, this.isCSS1 = "CSS1Compat" === (document.compatMode || ""), this.width = function() {
            return window.innerWidth && window.document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || window.document.documentElement.clientWidth || document.body.clientWidth
        }, this.height = function() {
            return window.innerHeight || window.document.documentElement.clientHeight || document.body.clientHeight
        }, this.scrollX = function() {
            return window.pageXOffset !== undefined ? window.pageXOffset : e.isCSS1 ? document.documentElement.scrollLeft : document.body.scrollLeft
        }, this.scrollY = function() {
            return window.pageYOffset !== undefined ? window.pageYOffset : e.isCSS1 ? document.documentElement.scrollTop : document.body.scrollTop
        }, this.type = "Edge" === t.family ? "edge" : "Internet Explorer" === t.family ? "ie" : "Chrome" === t.family ? "chrome" : "Safari" === t.family ? "safari" : "Firefox" === t.family ? "firefox" : t.family.toLowerCase(), this.version = 1 * (t.major + "." + t.minor) || 0, this.hasPostMessage = !!window.postMessage
    }
    X.prototype.hasEvent = function(e, t) {
        return "on" + e in (t || document.createElement("div"))
    }, X.prototype.getScreenDimensions = function() {
        var e = {};
        for (var t in window.screen) e[t] = window.screen[t];
        return delete e.orientation, e
    }, X.prototype.getOrientation = function() {
        return "function" == typeof matchMedia ? matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait" : window.screen.orientation ? screen.orientation.type.startsWith("landscape") ? "landscape" : "portrait" : this.width() > this.height() ? "landscape" : "portrait"
    }, X.prototype.getWindowDimensions = function() {
        return [this.width(), this.height()]
    }, X.prototype.interrogateNavigator = function() {
        var e = {};
        for (var t in window.navigator)
            if ("webkitPersistentStorage" !== t) try {
                e[t] = window.navigator[t]
            } catch (In) {}
        if (delete e.plugins, delete e.mimeTypes, e.plugins = [], window.navigator.plugins)
            for (var n = 0; n < window.navigator.plugins.length; n++) e.plugins[n] = window.navigator.plugins[n].filename;
        return e
    }, X.prototype.supportsPST = function() {
        return document.hasPrivateToken !== undefined
    }, X.prototype.supportsCanvas = function() {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, X.prototype.supportsWebAssembly = function() {
        try {
            if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) {
                var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                if (e instanceof WebAssembly.Module) return new WebAssembly.Instance(e) instanceof WebAssembly.Instance
            }
        } catch (Ln) {
            return !1
        }
    };
    var Y = new X,
        Q = new function() {
            var e, t, n = $(),
                r = z();
            this.mobile = (e = !!("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), t = !1, n && (t = ["iOS", "Windows Phone", "Windows Mobile", "Android", "BlackBerry OS"].indexOf(n.name) >= 0), e && t), this.dpr = function() {
                return window.devicePixelRatio || 1
            }, this.mobile && n && "Windows" === n.family && r.indexOf("touch") < 0 && (this.mobile = !1), this.os = "iOS" === n.family ? "ios" : "Android" === n.family ? "android" : "Mac OS X" === n.family ? "mac" : "Windows" === n.family ? "windows" : "Linux" === n.family ? "linux" : n.family.toLowerCase(), this.version = function() {
                if (!n) return "unknown";
                var e = n.major;
                return n.minor && (e += "." + n.minor), n.patch && (e += "." + n.patch), e
            }()
        },
        ee = {
            Browser: Y,
            System: Q,
            supportsPAT: function() {
                return ("mac" === Q.os || "ios" === Q.os) && "safari" === Y.type && Y.version >= 16.2
            }
        },
        te = "challenge-passed",
        ne = "challenge-escaped",
        re = "challenge-closed",
        ie = "challenge-expired",
        oe = "invalid-data",
        ae = "bundle-error",
        se = "rate-limited",
        ce = "network-error",
        le = "challenge-error",
        ue = "incomplete-answer",
        he = "missing-captcha",
        de = "missing-sitekey",
        pe = "invalid-captcha-id",
        fe = "https://api.hcaptcha.com",
        me = "https://api2.hcaptcha.com",
        ye = "auto",
        ge = {
            host: null,
            file: null,
            sitekey: null,
            a11y_tfe: null,
            pingdom: "safari" === ee.Browser.type && "windows" !== ee.System.os && "mac" !== ee.System.os && "ios" !== ee.System.os && "android" !== ee.System.os,
            assetDomain: "https://newassets.hcaptcha.com",
            assetUrl: "https://newassets.hcaptcha.com/captcha/v1/c1e11bfffe54019b36ca486d59d75ea65128f510/static",
            width: null,
            height: null,
            mobile: null,
            orientation: "portrait",
            challenge_type: null
        },
        ve = {
            se: null,
            custom: !1,
            tplinks: "on",
            language: null,
            reportapi: "https://accounts.hcaptcha.com",
            endpoint: fe,
            pstIssuer: "https://pst-issuer.hcaptcha.com",
            size: "normal",
            theme: "light",
            mode: undefined,
            assethost: null,
            imghost: null,
            recaptchacompat: "true",
            pat: "on",
            confirmNav: !1
        },
        we = "https://30910f52569b4c17b1081ead2dae43b4@sentry.hcaptcha.com/6",
        be = "c1e11bfffe54019b36ca486d59d75ea65128f510",
        _e = "prod";

    function Ee(e, t) {
        e.style.width = "304px", e.style.height = "78px", e.style.backgroundColor = "#f9e5e5", e.style.position = "relative", e.innerHTML = "";
        var n = document.createElement("div");
        n.style.width = "284px", n.style.position = "absolute", n.style.top = "12px", n.style.left = "10px", n.style.color = "#7c0a06", n.style.fontSize = "14px", n.style.fontWeight = "normal", n.style.lineHeight = "18px", n.innerHTML = t || "Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> to complete this captcha.", e.appendChild(n)
    }

    function Ve(e) {
        for (var t = document.getElementsByClassName("h-captcha"), n = [], r = 0; r < t.length; r++) n.push(t[r]);
        var i = [];
        if ("off" !== ve.recaptchacompat)
            for (var o = document.getElementsByClassName("g-recaptcha"), a = 0; a < o.length; a++) i.push(o[a]);
        for (var s = [].concat(n, i), c = 0; c < s.length; c++) e(s[c])
    }
    var ke = "The captcha failed to load.",
        xe = [];

    function Se(e) {
        for (var t = [], n = /(https?|wasm):\/\//, r = /^at /, i = /:\d+:\d+/g, o = 0, a = e.length; o < a; o++) {
            var s = e[o];
            if (!n.test(s)) {
                var c = s.trim().replace(r, "").replace(i, "");
                t.push(c)
            }
        }
        return t.join("\n").trim()
    }

    function Te(e) {
        if (e && "string" == typeof e && -1 === xe.indexOf(e) && !(xe.length >= 10)) {
            var t = Se(e.trim().split("\n").slice(0, 2));
            xe.push(t)
        }
    }

    function Re(e) {
        e && "object" == typeof e || (e = {
            name: "error",
            message: "",
            stack: ""
        });
        var t = {
            message: e.name + ": " + e.message
        };
        e.stack && (t.stack_trace = {
            trace: e.stack
        }), Me("report error", "internal", "debug", t), Oe(e.message || "internal error", "error", ge.file, e)
    }

    function Ce(e) {
        return function() {
            try {
                return e.apply(this, arguments)
            } catch (In) {
                throw Re(In), Ve((function(e) {
                    Ee(e, ke)
                })), In
            }
        }
    }

    function Ue(e) {
        if (ve.sentry) {
            var t = !1,
                n = !1;
            try {
                t = -1 !== window.location.href.indexOf("chargebee.com"), n = -1 !== window.location.href.indexOf("kobo")
            } catch (Ln) {}
            window.Raven && Raven.config(we, {
                release: be,
                environment: _e,
                autoBreadcrumbs: {
                    xhr: !0,
                    dom: !0,
                    sentry: !0
                },
                tags: {
                    "site-host": ge.host,
                    "site-key": ge.sitekey,
                    "endpoint-url": ve.endpoint,
                    "asset-url": ge.assetUrl
                },
                sampleRate: t || n ? 1 : .01,
                ignoreErrors: ["Cannot set properties of undefined (setting 'data')", "canvas.contentDocument", "Can't find variable: ZiteReader", "Cannot redefine property: hcaptcha", "Cannot redefine property: BetterJsPop", "grecaptcha is not defined", "jQuery is not defined", "$ is not defined", "Script is not a function"]
            }), window.Raven && Raven.setUserContext({
                "Browser-Agent": ee.Browser.agent,
                "Browser-Type": ee.Browser.type,
                "Browser-Version": ee.Browser.version,
                "System-OS": ee.System.os,
                "System-Version": ee.System.version,
                "Is-Mobile": ee.System.mobile
            }), Me(ge.file + "_internal", "setup", "info"), e && (window.onerror = function(e, t, n, r, i) {
                i && "object" == typeof i || (i = {});
                var o = i.name || "Error",
                    a = i.stack || "";
                Ce(Te)(a), -1 === a.indexOf("chrome-extension://") && -1 === a.indexOf("safari-extension://") && -1 === a.indexOf("moz-extension://") && -1 === a.indexOf("chrome://internal-") && -1 === a.indexOf("/hammerhead.js") && -1 === a.indexOf("eval at buildCode") && -1 === a.indexOf("u.c.b.r.o.w.s.e.r/ucbrowser_script.js") && (Me(e, "global", "debug", {
                    name: o,
                    url: t,
                    line: n,
                    column: r,
                    stack: a
                }), Pe("global", i, {
                    message: e
                }))
            })
        }
    }

    function Oe(e, t, n, r) {
        if (t = t || "error", ve.sentry) {
            var i = "warn" === t ? "warning" : t;
            window.Raven && Raven.captureMessage(e, {
                level: i,
                logger: n,
                extra: r
            })
        }
    }

    function Pe(e, t, n) {
        return (n = n || {}).error = t, Oe(t && t.message || "Missing error message", "error", e, n)
    }

    function Me(e, t, n, r) {
        ve.sentry && window.Raven && Raven.captureBreadcrumb({
            message: e,
            category: t,
            level: n,
            data: r
        })
    }
    var De = {
        __proto__: null,
        _stackTraceSet: xe,
        toRefinedString: Se,
        reportError: Re,
        errorWrapper: Ce,
        initSentry: Ue,
        sentryMessage: Oe,
        sentryError: Pe,
        sentryBreadcrumb: Me
    };

    function We() {
        var e = [],
            t = null,
            n = !1,
            r = [],
            i = function(t) {
                try {
                    if (e.length >= 10) return;
                    var n = t.stack;
                    if ("string" != typeof n) return;
                    var r = n.trim().split("\n");
                    "Error" === r[0] && (r = r.slice(1));
                    for (var i = /extension/, o = r.length; o--;) {
                        var a = r[o];
                        if (i.test(a)) {
                            r = [a];
                            break
                        }
                    }
                    o < 0 && (r = r.slice(-2));
                    var s = Se(r);
                    s && -1 === e.indexOf(s) && e.push(s)
                } catch (t) {
                    return
                }
            },
            o = function() {
                if (n) try {
                    for (var e = 0; e < r.length; e++) r[e]();
                    null !== t && clearTimeout(t)
                } catch (o) {
                    i(o)
                } finally {
                    r = [], t = null, n = !1
                }
            },
            a = function(t, a) {
                var s = Object.getOwnPropertyDescriptor(t, a);
                if (!(s && !1 === s.writable)) {
                    var c = Object.prototype.hasOwnProperty.call(t, a),
                        l = t[a];
                    t[a] = function() {
                        return n && (e.length >= 10 && o(), i(new Error)), l.apply(t, arguments)
                    }, r.push((function() {
                        c ? t[a] = l : delete t[a]
                    }))
                }
            };
        return {
            run: function(e) {
                if (!n) {
                    n = !0, isFinite(e) && (t = setTimeout((function() {
                        o()
                    }), e));
                    try {
                        a(document, "getElementsByClassName"), a(document, "getElementById"), a(document, "querySelector"), a(document, "querySelectorAll"), a(document, "getElementsByTagName"), a(console, "log")
                    } catch (r) {
                        o(), i(r)
                    }
                }
            },
            collect: function() {
                return e.concat(xe)
            }
        }
    }
    var je = {
            getCookie: function(e) {
                var t = document.cookie.replace(/ /g, "").split(";");
                try {
                    for (var n = "", r = t.length; r-- && !n;) t[r].indexOf(e) >= 0 && (n = t[r]);
                    return n
                } catch (Ln) {
                    return ""
                }
            },
            hasCookie: function(e) {
                return !!je.getCookie(e)
            },
            supportsAPI: function() {
                try {
                    return "hasStorageAccess" in document && "requestStorageAccess" in document
                } catch (Ln) {
                    return !1
                }
            },
            hasAccess: function() {
                return new Promise((function(e) {
                    document.hasStorageAccess().then((function() {
                        e(!0)
                    }))["catch"]((function() {
                        e(!1)
                    }))
                }))
            },
            requestAccess: function() {
                try {
                    return document.requestStorageAccess()
                } catch (Ln) {
                    return Promise.resolve()
                }
            }
        },
        Fe = {
            array: function(e) {
                if (0 === e.length) return e;
                for (var t, n, r = e.length; --r > -1;) n = Math.floor(Math.random() * (r + 1)), t = e[r], e[r] = e[n], e[n] = t;
                return e
            }
        };

    function Ae(e) {
        this.r = 255, this.g = 255, this.b = 255, this.a = 1, this.h = 1, this.s = 1, this.l = 1, this.parseString(e)
    }

    function Ne(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    Ae.hasAlpha = function(e) {
        return "string" == typeof e && (-1 !== e.indexOf("rgba") || 9 === e.length && "#" === e[0])
    }, Ae.prototype.parseString = function(e) {
        e && (0 === e.indexOf("#") ? this.fromHex(e) : 0 === e.indexOf("rgb") && this.fromRGBA(e))
    }, Ae.prototype.fromHex = function(e) {
        var t = 1;
        9 === e.length && (t = parseInt(e.substr(7, 2), 16) / 255);
        var n = (e = e.substr(1, 6)).replace(/^([a-f\d])([a-f\d])([a-f\d])?$/i, (function(e, t, n, r) {
                return t + t + n + n + r + r
            })),
            r = parseInt(n, 16),
            i = r >> 16,
            o = r >> 8 & 255,
            a = 255 & r;
        this.setRGBA(i, o, a, t)
    }, Ae.prototype.fromRGBA = function(e) {
        var t = e.indexOf("rgba"),
            n = e.substr(t).replace(/rgba?\(/, "").replace(/\)/, "").replace(/[\s+]/g, "").split(","),
            r = Math.floor(parseInt(n[0])),
            i = Math.floor(parseInt(n[1])),
            o = Math.floor(parseInt(n[2])),
            a = parseFloat(n[3]);
        this.setRGBA(r, i, o, a)
    }, Ae.prototype.setRGB = function(e, t, n) {
        this.setRGBA(e, t, n, 1)
    }, Ae.prototype.setRGBA = function(e, t, n, r) {
        this.r = e, this.g = t, this.b = n, this.a = isNaN(r) ? this.a : r, this.updateHSL()
    }, Ae.prototype.hsl2rgb = function(e, t, n) {
        if (0 === t) {
            var r = Math.round(255 * n);
            return this.setRGB(r, r, r), this
        }
        var i = n <= .5 ? n * (1 + t) : n + t - n * t,
            o = 2 * n - i;
        return this.r = Math.round(255 * Ne(o, i, e + 1 / 3)), this.g = Math.round(255 * Ne(o, i, e)), this.b = Math.round(255 * Ne(o, i, e - 1 / 3)), this.h = e, this.s = t, this.l = n, this
    }, Ae.prototype.updateHSL = function() {
        var e, t = this.r / 255,
            n = this.g / 255,
            r = this.b / 255,
            i = Math.max(t, n, r),
            o = Math.min(t, n, r),
            a = null,
            s = (i + o) / 2;
        if (i === o) a = e = 0;
        else {
            var c = i - o;
            switch (e = s > .5 ? c / (2 - i - o) : c / (i + o), i) {
                case t:
                    a = (n - r) / c + (n < r ? 6 : 0);
                    break;
                case n:
                    a = (r - t) / c + 2;
                    break;
                case r:
                    a = (t - n) / c + 4
            }
            a /= 6
        }
        return this.h = a, this.s = e, this.l = s, this
    }, Ae.prototype.getHex = function() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1)
    }, Ae.prototype.getRGBA = function() {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
    }, Ae.prototype.clone = function() {
        var e = new Ae;
        return e.setRGBA(this.r, this.g, this.b, this.a), e
    }, Ae.prototype.mix = function(e, t) {
        e instanceof Ae || (e = new Ae(e));
        var n = new Ae,
            r = Math.round(this.r + t * (e.r - this.r)),
            i = Math.round(this.g + t * (e.g - this.g)),
            o = Math.round(this.b + t * (e.b - this.b));
        return n.setRGB(r, i, o), n
    }, Ae.prototype.blend = function(e, t) {
        var n;
        e instanceof Ae || (e = new Ae(e));
        for (var r = [], i = 0; i < t; i++) n = this.mix.call(this, e, i / t), r.push(n);
        return r
    }, Ae.prototype.lightness = function(e) {
        return e > 1 && (e /= 100), this.hsl2rgb(this.h, this.s, e), this
    }, Ae.prototype.saturation = function(e) {
        return e > 1 && (e /= 100), this.hsl2rgb(this.h, e, this.l), this
    }, Ae.prototype.hue = function(e) {
        return this.hsl2rgb(e / 360, this.s, this.l), this
    };
    var Be = {
            decode: function(e) {
                try {
                    var t = e.split(".");
                    return {
                        header: JSON.parse(atob(t[0])),
                        payload: JSON.parse(atob(t[1])),
                        signature: atob(t[2].replace(/_/g, "/").replace(/-/g, "+")),
                        raw: {
                            header: t[0],
                            payload: t[1],
                            signature: t[2]
                        }
                    }
                } catch (Ln) {
                    throw new Error("Token is invalid.")
                }
            },
            checkExpiration: function(e) {
                if (new Date(1e3 * e) <= new Date(Date.now())) throw new Error("Token is expired.");
                return !0
            }
        },
        Ke = {
            _setup: !1,
            _af: null,
            _fps: 60,
            _singleFrame: 1 / 60,
            _lagThreshold: 500,
            _adjustedLag: 1 / 60 * 2,
            _startTime: 0,
            _lastTime: 0,
            _nextTime: 1 / 60,
            _elapsed: 0,
            _difference: 0,
            _renders: [],
            _paused: !1,
            _running: !1,
            _tick: !1,
            frame: 0,
            time: 0,
            requestFrame: null,
            cancelFrame: null,
            _init: function() {
                for (var e, t = window.requestAnimationFrame, n = window.cancelAnimationFrame, r = ["ms", "moz", "webkit", "o"], i = r.length; --i > -1 && !t;) t = window[r[i] + "RequestAnimationFrame"], n = window[r[i] + "CancelAnimationFrame"] || window[r[i] + "CancelRequestAnimationFrame"];
                t ? (Ke.requestFrame = t.bind(window), Ke.cancelFrame = n.bind(window)) : (Ke.requestFrame = (e = Date.now(), function(t) {
                    window.setTimeout((function() {
                        t(Date.now() - e)
                    }), 1e3 * Ke._singleFrame)
                }), Ke.cancelFrame = function(e) {
                    return clearTimeout(e), null
                }), Ke._setup = !0, Ke._startTime = Ke._lastTime = Date.now()
            },
            add: function(e, t) {
                Ke._renders.push({
                    callback: e,
                    paused: !1 == !t || !1
                }), !1 == !t && Ke.start()
            },
            remove: function(e) {
                for (var t = Ke._renders.length; --t > -1;) Ke._renders[t].callback === e && (Ke._renders[t].paused = !0, Ke._renders.splice(t, 1))
            },
            start: function(e) {
                if (!1 === Ke._setup && Ke._init(), e)
                    for (var t = Ke._renders.length; --t > -1;) Ke._renders[t].callback === e && (Ke._renders[t].paused = !1);
                !0 !== Ke._running && (Ke._paused = !1, Ke._running = !0, Ke._af = Ke.requestFrame(Ke._update))
            },
            stop: function(e) {
                if (e)
                    for (var t = Ke._renders.length; --t > -1;) Ke._renders[t].callback === e && (Ke._renders[t].paused = !0);
                else !1 !== Ke._running && (Ke._af = Ke.cancelFrame(Ke._af), Ke._paused = !0, Ke._running = !1)
            },
            elapsed: function() {
                return Date.now() - Ke._startTime
            },
            fps: function(e) {
                return arguments.length ? (Ke._fps = e, Ke._singleFrame = 1 / (Ke._fps || 60), Ke._adjustedLag = 2 * Ke._singleFrame, Ke._nextTime = Ke.time + Ke._singleFrame, Ke._fps) : Ke._fps
            },
            isRunning: function() {
                return Ke._running
            },
            _update: function() {
                if (!Ke._paused && (Ke._elapsed = Date.now() - Ke._lastTime, Ke._tick = !1, Ke._elapsed > Ke._lagThreshold && (Ke._startTime += Ke._elapsed - Ke._adjustedLag), Ke._lastTime += Ke._elapsed, Ke.time = (Ke._lastTime - Ke._startTime) / 1e3, Ke._difference = Ke.time - Ke._nextTime, Ke._difference > 0 && (Ke.frame++, Ke._nextTime += Ke._difference + (Ke._difference >= Ke._singleFrame ? Ke._singleFrame / 4 : Ke._singleFrame - Ke._difference), Ke._tick = !0), Ke._af = Ke.requestFrame(Ke._update), !0 === Ke._tick && Ke._renders.length > 0))
                    for (var e = Ke._renders.length; --e > -1;) Ke._renders[e] && !1 === Ke._renders[e].paused && Ke._renders[e].callback(Ke.time)
            }
        };
    var Ze = function(e) {
            for (var t, n, r, i = {}, o = e ? e.indexOf("&") >= 0 ? e.split("&") : [e] : [], a = 0; a < o.length; a++)
                if (o[a].indexOf("=") >= 0) {
                    if (t = o[a].split("="), n = decodeURIComponent(t[0]), "false" !== (r = decodeURIComponent(t[1])) && "true" !== r || (r = "true" === r), "theme" === n || "themeConfig" === n) try {
                        r = JSON.parse(r)
                    } catch (Ln) {}
                    i[n] = r
                }
            return i
        },
        qe = function(e) {
            var t = [];
            for (var n in e) {
                var r = e[n];
                r = "object" == typeof r ? JSON.stringify(r) : r, t.push([encodeURIComponent(n), encodeURIComponent(r)].join("="))
            }
            return t.join("&")
        },
        Ie = {
            __proto__: null,
            Decode: Ze,
            Encode: qe
        };

    function Le(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }
    var ze = {
        __proto__: null,
        clamp: Le,
        range: function(e, t, n, r, i, o) {
            var a = (e - t) * (i - r) / (n - t) + r;
            return !1 === o ? a : Le(a, Math.min(r, i), Math.max(r, i))
        },
        toRadians: function(e) {
            return e * (Math.PI / 180)
        },
        toDegrees: function(e) {
            return 180 * e / Math.PI
        }
    };

    function He(e, t) {
        this._period = e, this._interval = t, this._date = [], this._data = [], this._prevTimestamp = 0, this._meanPeriod = 0, this._medianPeriod = 0, this._medianMaxHeapSize = 32, this._medianMinHeap = [], this._medianMaxHeap = [], this._meanCounter = 0
    }

    function $e(e) {
        return new Promise((function(t, n) {
            e(t, n, (function r() {
                e(t, n, r)
            }))
        }))
    }

    function Je(e, t) {
        var n = "attempts" in (t = t || {}) ? t.attempts : 1,
            r = t.delay || 0,
            i = t.onFail;
        return $e((function(t, o, a) {
            e().then(t, (function(e) {
                var t = n-- > 0;
                if (i) {
                    var s = i(e, n);
                    s && (t = !1 !== s.retry && t, r = s.delay)
                }
                t ? setTimeout(a, r || 0) : o(e)
            }))
        }))
    }

    function Ge(e) {
        var t = [].slice.call(arguments, 1);
        "string" == typeof e ? window[e] ? "function" == typeof window[e] ? window[e].apply(null, t) : console.log("[hCaptcha] Callback '" + e + "' is not a function.") : console.log("[hCaptcha] Callback '" + e + "' is not defined.") : "function" == typeof e ? e.apply(null, t) : console.log("[hcaptcha] Invalid callback '" + e + "'.")
    }

    function Xe() {
        try {
            Ge.apply(null, arguments)
        } catch (In) {
            console.error("[hCaptcha] There was an error in your callback."), console.error(In)
        }
    }

    function Ye(e, t) {
        for (var n = ["hl", "custom", "tplinks", "sitekey", "theme", "type", "size", "tabindex", "callback", "expired-callback", "chalexpired-callback", "error-callback", "open-callback", "close-callback", "endpoint", "challenge-container", "confirm-nav", "orientation", "mode"], r = {}, i = 0; i < n.length; i++) {
            var o = n[i],
                a = t && t[o];
            a || (a = e.getAttribute("data-" + o)), a && (r[o] = a)
        }
        return r
    }
    He.prototype.getMeanPeriod = function() {
        return this._meanPeriod
    }, He.prototype.getMedianPeriod = function() {
        return this._medianPeriod
    }, He.prototype.getData = function() {
        return this._cleanStaleData(), this._data
    }, He.prototype.getSize = function() {
        return this._cleanStaleData(), this._data.length
    }, He.prototype.getCapacity = function() {
        return 0 === this._period ? this._interval : Math.ceil(this._interval / this._period)
    }, He.prototype.push = function(e, t) {
        this._cleanStaleData();
        var n = 0 === this._date.length;
        if (e - (this._date[this._date.length - 1] || 0) >= this._period && (this._date.push(e), this._data.push(t)), !n) {
            var r = e - this._prevTimestamp;
            this._meanPeriod = (this._meanPeriod * this._meanCounter + r) / (this._meanCounter + 1), this._meanCounter++, this._medianPeriod = this._calculateMedianPeriod(r)
        }
        this._prevTimestamp = e
    }, He.prototype._calculateMedianPeriod = function(e) {
        this._medianMaxHeap || (this._medianMaxHeap = []), this._medianMinHeap || (this._medianMinHeap = []);
        var t = this._fetchMedianPeriod();
        return 0 === this._medianMaxHeap.length && 0 === this._medianMinHeap.length ? this._medianMaxHeap.push(e) : e <= t ? (this._medianMaxHeap.push(e), this._medianMaxHeap.sort((function(e, t) {
            return t - e
        }))) : (this._medianMinHeap.push(e), this._medianMinHeap.sort((function(e, t) {
            return e - t
        }))), this._rebalanceHeaps(), this._fetchMedianPeriod()
    }, He.prototype._rebalanceHeaps = function() {
        var e = null;
        this._medianMaxHeap.length > this._medianMinHeap.length + 1 ? (e = this._medianMaxHeap.shift(), this._medianMinHeap.push(e), this._medianMinHeap.sort((function(e, t) {
            return e - t
        }))) : this._medianMinHeap.length > this._medianMaxHeap.length + 1 && (e = this._medianMinHeap.shift(), this._medianMaxHeap.push(e), this._medianMaxHeap.sort((function(e, t) {
            return t - e
        }))), this._medianMinHeap.length == this._medianMaxHeap.length && this._medianMaxHeap.length > this._medianMaxHeapSize && (this._medianMinHeap.pop(), this._medianMaxHeap.pop())
    }, He.prototype._fetchMedianPeriod = function() {
        return this._medianMaxHeap.length > this._medianMinHeap.length ? this._medianMaxHeap[0] : this._medianMinHeap.length > this._medianMaxHeap.length ? this._medianMinHeap[0] : 0 !== this._medianMaxHeap.length && 0 !== this._medianMinHeap.length ? (this._medianMaxHeap[0] + this._medianMinHeap[0]) / 2 : -1
    }, He.prototype._cleanStaleData = function() {
        for (var e = Date.now(), t = this._date.length - 1; t >= 0; t--) {
            if (e - this._date[t] >= this._interval) {
                this._date.splice(0, t + 1), this._data.splice(0, t + 1);
                break
            }
        }
    };
    var Qe, et = {
        UUID: function(e) {
            return /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(e) || !1
        },
        UUIDv4: function(e) {
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e) || !1
        },
        URL: function(e) {
            var t = new RegExp("^(http|https)://"),
                n = new RegExp("^((?!(data|javascript):).)*$");
            return t.test(e) && n.test(e) && -1 === e.indexOf("#")
        },
        IMAGE: function(e) {
            return (0 === e.indexOf("https://") || 0 === e.indexOf("/")) && e.endsWith(".png")
        }
    };

    function tt(e) {
        var t, n, r = "string" == typeof e ? e : JSON.stringify(e),
            i = -1;
        for (Qe = Qe || function() {
                var e, t, n, r = [];
                for (t = 0; t < 256; t++) {
                    for (e = t, n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    r[t] = e
                }
                return r
            }(), t = 0, n = r.length; t < n; t += 1) i = i >>> 8 ^ Qe[255 & (i ^ r.charCodeAt(t))];
        return (-1 ^ i) >>> 0
    }
    var nt = {
            __proto__: null,
            createErrorsAggregator: We,
            uuid: function() {
                return Math.random().toString(36).substr(2)
            },
            Render: Ke,
            JWT: Be,
            Color: Ae,
            Shuffle: Fe,
            MathUtil: ze,
            Storage: je,
            Query: Ie,
            TimeBuffer: He,
            PromiseUtil: {
                __proto__: null,
                promiseRecursive: $e,
                promiseRetry: Je
            },
            ErrorUtil: De,
            _stackTraceSet: xe,
            toRefinedString: Se,
            reportError: Re,
            errorWrapper: Ce,
            initSentry: Ue,
            sentryMessage: Oe,
            sentryError: Pe,
            sentryBreadcrumb: Me,
            renderFallback: Ee,
            forEachCaptchaNode: Ve,
            callUserFunction: Xe,
            composeParams: Ye,
            is: et,
            promiseRecursive: $e,
            promiseRetry: Je,
            crc32: tt,
            TaskContext: {
                container: {},
                set: function(e, t) {
                    this.container[e] = t
                },
                clear: function() {
                    this.container = {}
                }
            }
        },
        rt = {
            eventName: function(e, t) {
                var n = e;
                "down" === e || "up" === e || "move" === e || "over" === e || "out" === e ? n = !(ee.System.mobile && "desktop" !== t || "mobile" === t) || "down" !== e && "up" !== e && "move" !== e ? "mouse" + e : "down" === e ? "touchstart" : "up" === e ? "touchend" : "touchmove" : "enter" === e && (n = "keydown");
                return n
            },
            actionName: function(e) {
                var t = e;
                return "touchstart" === t || "mousedown" === t ? t = "down" : "touchmove" === t || "mousemove" === t ? t = "move" : "touchend" === t || "mouseup" === t ? t = "up" : "mouseover" === t ? t = "over" : "mouseout" === t && (t = "out"), t
            },
            eventCallback: function(e, t, n) {
                var r = rt.actionName(e);
                return function(i) {
                    if (i = i || window.event, "down" === r || "move" === r || "up" === r || "over" === r || "out" === r || "click" === r) {
                        var o = rt.eventCoords(i);
                        if (!o) return;
                        var a = n.getBoundingClientRect();
                        i.windowX = o.x, i.windowY = o.y, i.elementX = i.windowX - (a.x || a.left), i.elementY = i.windowY - (a.y || a.top)
                    }
                    i.keyNum = i.which || i.keyCode || 0, "enter" === e && 13 !== i.keyNum && 32 !== i.keyNum || (i.action = r, i.targetElement = n, t(i))
                }
            },
            eventCoords: function(e) {
                if (!e) return null;
                var t = e;
                if (e.touches || e.changedTouches) {
                    var n = e.touches && e.touches.length >= 1 ? e.touches : e.changedTouches;
                    n && n[0] && (t = n[0])
                }
                return "number" == typeof t.pageX && "number" == typeof t.pageY ? {
                    x: t.pageX,
                    y: t.pageY
                } : "number" == typeof t.clientX && "number" == typeof t.clientY ? {
                    x: t.clientX,
                    y: t.clientY
                } : null
            }
        },
        it = ["Webkit", "Moz", "ms"],
        ot = document.createElement("div").style,
        at = {};

    function st(e) {
        var t = at[e];
        return t || (e in ot ? e : at[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;)
                if ((e = it[n] + t) in ot) return e
        }(e) || e)
    }

    function ct(e, t, n) {
        if (this.dom = null, this._clss = [], this._nodes = [], this._listeners = [], this._frag = null, e && "object" == typeof e) {
            this.dom = e;
            var r = [],
                i = [];
            "string" == typeof e.className && (i = e.className.split(" "));
            for (var o = 0; o < i.length; o++) "" !== i[o] && " " !== i[o] && r.push(i[o]);
            this._clss = r
        } else n !== undefined && null !== n || (n = !0), (!e || "string" == typeof e && (e.indexOf("#") >= 0 || e.indexOf(".") >= 0)) && (e && (t = e), e = "div"), this.dom = document.createElement(e), t && (t.indexOf("#") >= 0 ? this.dom.id = t.split("#")[1] : (t.indexOf(".") >= 0 && (t = t.split(".")[1]), this.addClass.call(this, t)));
        !0 === n && (this._frag = document.createDocumentFragment(), this._frag.appendChild(this.dom))
    }

    function lt(e) {
        if (null === e) return "";
        var t = [];
        return ut(e, t), t.join("&")
    }

    function ut(e, t) {
        var n, r;
        if ("object" == typeof e)
            for (r in e) !0 === ht(n = e[r]) ? ut(n, t) : t[t.length] = dt(r, n);
        else if (!0 === Array.isArray(e))
            for (var i = 0; i < e.length; i++) !0 === ht(n = e[i]) ? ut(e, t) : t[t.length] = dt(r, n);
        else t[t.length] = dt(e)
    }

    function ht(e) {
        return !0 === Array.isArray(e) || "object" == typeof e
    }

    function dt(e, t) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(null === t ? "" : t)
    }
    ct.prototype.cloneNode = function(e) {
        try {
            return this.dom.cloneNode(e)
        } catch (Ln) {
            return Pe("element", Ln), null
        }
    }, ct.prototype.createElement = function(e, t) {
        try {
            var n = new ct(e, t, !1);
            return this.appendElement.call(this, n), this._nodes.push(n), n
        } catch (Ln) {
            return Pe("element", Ln), null
        }
    }, ct.prototype.appendElement = function(e) {
        if (e === undefined) return Re({
            name: "DomElement Add Child",
            message: "Child Element is undefined"
        });
        var t;
        t = e._frag !== undefined && null !== e._frag ? e._frag : e.dom !== undefined ? e.dom : e;
        try {
            e instanceof ct && (e._parent = this), this.dom.appendChild(t)
        } catch (Ln) {
            Re({
                name: "DomElement Add Child",
                message: "Failed to append child."
            })
        }
        return this
    }, ct.prototype.removeElement = function(e) {
        try {
            var t;
            if (e._nodes)
                for (t = e._nodes.length; t--;) e.removeElement(e._nodes[t]);
            for (t = this._nodes.length; --t > -1;) this._nodes[t] === e && this._nodes.splice(t, 1);
            var n = e instanceof ct ? e.dom : e,
                r = n.parentNode === this.dom ? this.dom : n.parentNode;
            if (r.removeChild && r.removeChild(n), !r) throw new Error("Child component does not have correct setup");
            e.__destroy && e.__destroy()
        } catch (Ln) {
            Re({
                name: "DomElement Remove Child",
                message: Ln.message || "Failed to remove child."
            })
        }
    }, ct.prototype.addClass = function(e) {
        return !1 === this.hasClass.call(this, e) && (this._clss.push(e), this.dom.className = this._clss.join(" ")), this
    }, ct.prototype.hasClass = function(e) {
        for (var t = -1 !== this.dom.className.split(" ").indexOf(e), n = this._clss.length; n-- && !t;) t = this._clss[n] === e;
        return t
    }, ct.prototype.removeClass = function(e) {
        for (var t = this._clss.length; --t > -1;) this._clss[t] === e && this._clss.splice(t, 1);
        return this.dom.className = this._clss.join(" "), this
    }, ct.prototype.text = function(e) {
        if (this && this.dom) {
            if (!e) return this.dom.textContent;
            for (var t, n, r, i, o = /&(.*?);/g, a = /<[a-z][\s\S]*>/i; null !== (t = o.exec(e));) {
                !1 === a.test(t[0]) ? (r = t[0], i = void 0, (i = document.createElement("div")).innerHTML = r, n = i.textContent, e = e.replace(new RegExp(t[0], "g"), n)) : e = e.replace(t[0], "")
            }
            return this.dom.textContent = e, this
        }
    }, ct.prototype.content = ct.prototype.text, ct.prototype.css = function(e) {
        var t, n = "ie" === ee.Browser.type && 8 === ee.Browser.version,
            r = "safari" === ee.Browser.type && 12 === Math.floor(ee.Browser.version);
        for (var i in e) {
            t = e[i];
            try {
                if ("transition" === i && r) continue;
                "opacity" !== i && "zIndex" !== i && "fontWeight" !== i && isFinite(t) && parseFloat(t) === t && (t += "px");
                var o = st(i);
                n && "opacity" === i ? this.dom.style.filter = "alpha(opacity=" + 100 * t + ")" : n && Ae.hasAlpha(t) ? this.dom.style[o] = new Ae(t).getHex() : this.dom.style[o] = t
            } catch (In) {}
        }
        return this
    }, ct.prototype.backgroundImage = function(e, t, n, r) {
        var i = t !== undefined && n !== undefined,
            o = {
                "-ms-high-contrast-adjust": "none"
            };
        if ("object" == typeof t && (r = t), r === undefined && (r = {}), i) {
            var a = e.width / e.height,
                s = t,
                c = s / a;
            r.cover && c < n && (s = (c = n) * a), r.contain && c > n && (s = (c = n) * a), o.width = s, o.height = c, r.center && (o.marginLeft = -s / 2, o.marginTop = -c / 2, o.position = "absolute", o.left = "50%", o.top = "50%"), (r.left || r.right) && (o.left = r.left || 0, o.top = r.top || 0)
        }
        "ie" === ee.Browser.type && 8 === ee.Browser.version ? o.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + e.src + "',sizingMethod='scale')" : (o.background = "url(" + e.src + ")", o.backgroundPosition = "50% 50%", o.backgroundRepeat = "no-repeat", o.backgroundSize = i ? s + "px " + c + "px" : r.cover ? "cover" : r.contain ? "contain" : "100%"), this.css.call(this, o)
    }, ct.prototype.setAttribute = function(e, t) {
        var n;
        if ("object" == typeof e)
            for (var r in e) n = e[r], this.dom.setAttribute(r, n);
        else this.dom.setAttribute(e, t)
    }, ct.prototype.removeAttribute = function(e, t) {
        var n;
        if ("object" == typeof e)
            for (var r in e) n = e[r], this.dom.removeAttribute(r, n);
        else this.dom.removeAttribute(e, t)
    }, ct.prototype.addEventListener = function(e, t, n) {
        var r = {
            event: rt.eventName(e),
            handler: rt.eventCallback(e, t, this.dom),
            callback: t
        };
        if (this._listeners.push(r), this.dom.addEventListener ? this.dom.addEventListener(r.event, r.handler, n) : this.dom.attachEvent("on" + r.event, r.handler), e !== r.event && (r.event.indexOf("mouse") >= 0 || r.event.indexOf("touch") >= 0)) {
            var i = r.event.indexOf("touch") >= 0 ? "desktop" : "mobile",
                o = rt.eventName(e, i);
            if (o === r.event) return;
            this.addEventListener.call(this, o, t, n)
        }
    }, ct.prototype.removeEventListener = function(e, t, n) {
        for (var r, i = this._listeners.length, o = rt.eventName(e); --i > -1;)(r = this._listeners[i]).event === o && r.callback === t && (this._listeners.splice(i, 1), this.dom.removeEventListener ? this.dom.removeEventListener(r.event, r.handler, n) : this.dom.detachEvent("on" + r.event, r.handler))
    }, ct.prototype.focus = function() {
        this.dom.focus()
    }, ct.prototype.blur = function() {
        this.dom.blur()
    }, ct.prototype.html = function(e) {
        return e && (this.dom.innerHTML = e), this.dom.innerHTML
    }, ct.prototype.__destroy = function() {
        for (var e, t = this._listeners.length; --t > -1;) e = this._listeners[t], this._listeners.splice(t, 1), this.dom.removeEventListener ? this.dom.removeEventListener(e.event, e.handler) : this.dom.detachEvent("on" + e.event, e.handler);
        return this.dom = null, this._clss = [], this._nodes = [], this._listeners = [], this._frag = null, e = null, null
    }, ct.prototype.isConnected = function() {
        return !!this.dom && ("isConnected" in this.dom ? this.dom.isConnected : !(this.dom.ownerDocument && this.dom.ownerDocument.compareDocumentPosition(this.dom) & this.dom.DOCUMENT_POSITION_DISCONNECTED))
    };
    var pt = {
            af: "Afrikaans",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            hy: "Armenian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bg: "Bulgarian",
            bs: "Bosnian",
            my: "Burmese",
            ca: "Catalan",
            ceb: "Cebuano",
            zh: "Chinese",
            "zh-CN": "Chinese Simplified",
            "zh-TW": "Chinese Traditional",
            co: "Corsican",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            eo: "Esperanto",
            et: "Estonian",
            fi: "Finnish",
            fr: "French",
            fy: "Frisian",
            gd: "Gaelic",
            gl: "Galacian",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            gu: "Gujurati",
            ht: "Haitian",
            ha: "Hausa",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hmn: "Hmong",
            hu: "Hungarian",
            is: "Icelandic",
            ig: "Igbo",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            jw: "Javanese",
            kn: "Kannada",
            kk: "Kazakh",
            km: "Khmer",
            rw: "Kinyarwanda",
            ky: "Kirghiz",
            ko: "Korean",
            ku: "Kurdish",
            lo: "Lao",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mn: "Mongolian",
            ne: "Nepali",
            no: "Norwegian",
            ny: "Nyanja",
            or: "Oriya",
            fa: "Persian",
            pl: "Polish",
            "pt-BR": "Portuguese (Brazil)",
            pt: "Portuguese (Portugal)",
            ps: "Pashto",
            pa: "Punjabi",
            ro: "Romanian",
            ru: "Russian",
            sm: "Samoan",
            sn: "Shona",
            sd: "Sindhi",
            si: "Singhalese",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somani",
            st: "Southern Sotho",
            es: "Spanish",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            tg: "Tajik",
            ta: "Tamil",
            tt: "Tatar",
            te: "Teluga",
            th: "Thai",
            tr: "Turkish",
            tk: "Turkmen",
            ug: "Uyghur",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            cy: "Welsh",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            zu: "Zulu"
        },
        ft = {
            zh: {
                "I am human": "我是人"
            },
            ar: {
                "I am human": "أنا الإنسان"
            },
            af: {
                "I am human": "Ek is menslike"
            },
            am: {
                "I am human": "እኔ ሰው ነኝ"
            },
            hy: {
                "I am human": "Ես մարդ եմ"
            },
            az: {
                "I am human": "Mən insanam"
            },
            eu: {
                "I am human": "Gizakia naiz"
            },
            bn: {
                "I am human": "আমি মানব নই"
            },
            bg: {
                "I am human": "Аз съм човек"
            },
            ca: {
                "I am human": "Sóc humà"
            },
            hr: {
                "I am human": "Ja sam čovjek"
            },
            cs: {
                "I am human": "Jsem člověk"
            },
            da: {
                "I am human": "Jeg er et menneske"
            },
            nl: {
                "I am human": "Ik ben een mens"
            },
            et: {
                "I am human": "Ma olen inimeste"
            },
            fi: {
                "I am human": "Olen ihminen"
            },
            fr: {
                "I am human": "Je suis humain"
            },
            gl: {
                "I am human": "Eu son humano"
            },
            ka: {
                "I am human": "მე ვარ ადამიანი"
            },
            de: {
                "I am human": "Ich bin ein Mensch"
            },
            el: {
                "I am human": "Είμαι άνθρωπος"
            },
            gu: {
                "I am human": "હું માનવ છું"
            },
            iw: {
                "I am human": ". אני אנושי"
            },
            hi: {
                "I am human": "मैं मानव हूं"
            },
            hu: {
                "I am human": "Nem vagyok robot"
            },
            is: {
                "I am human": "Ég er manneskja"
            },
            id: {
                "I am human": "Aku manusia"
            },
            it: {
                "I am human": "Sono un essere umano"
            },
            ja: {
                "I am human": "私は人間です"
            },
            kn: {
                "I am human": "ನಾನು ಮಾನವನು"
            },
            ko: {
                "I am human": "사람입니다"
            },
            lo: {
                "I am human": "ຂ້ອຍເປັນມະນຸດ"
            },
            lv: {
                "I am human": "Es esmu cilvēks"
            },
            lt: {
                "I am human": "Aš esu žmogaus"
            },
            ms: {
                "I am human": "Saya manusia"
            },
            ml: {
                "I am human": "ഞാൻ മനുഷ്യനാണ്"
            },
            mr: {
                "I am human": "मी मानवी आहे"
            },
            mn: {
                "I am human": "Би бол хүн"
            },
            no: {
                "I am human": "Jeg er menneskelig"
            },
            fa: {
                "I am human": "من انسانی هستم"
            },
            pl: {
                "I am human": "Jestem człowiekiem"
            },
            pt: {
                "I am human": "Sou humano"
            },
            ro: {
                "I am human": "Eu sunt om"
            },
            ru: {
                "I am human": "Я человек"
            },
            sr: {
                "I am human": "Ja sam ljudski"
            },
            si: {
                "I am human": "මම මිනිස්සු"
            },
            sk: {
                "I am human": "Ja som človek"
            },
            sl: {
                "I am human": "Jaz sem človeški"
            },
            es: {
                "I am human": "Soy humano"
            },
            sw: {
                "I am human": "Mimi ni binadamu"
            },
            sv: {
                "I am human": "Jag är människa"
            },
            ta: {
                "I am human": "நான் மனித"
            },
            te: {
                "I am human": "నేను మనిషిని"
            },
            th: {
                "I am human": "ผมมนุษย์"
            },
            tr: {
                "I am human": "Ben bir insanım"
            },
            uk: {
                "I am human": "Я людини"
            },
            ur: {
                "I am human": "میں انسان ہوں"
            },
            vi: {
                "I am human": "Tôi là con người"
            },
            zu: {
                "I am human": "Ngingumuntu"
            }
        },
        mt = null,
        yt = {
            translate: function(e, t) {
                var n = yt.getBestTrans(ft),
                    r = n && n[e];
                if (r = r || e, t)
                    for (var i = Object.keys(t), o = i.length; o--;) r = r.replace(new RegExp("{{" + i[o] + "}}", "g"), t[i[o]]);
                return r
            },
            getBestTrans: function(e) {
                var t = yt.getLocale();
                return t in e ? e[t] : yt.getShortLocale(t) in e ? e[yt.getShortLocale(t)] : "en" in e ? e.en : null
            },
            resolveLocale: function(e) {
                var t = yt.getShortLocale(e);
                return "in" === t && (e = "id"), "iw" === t && (e = "he"), "nb" === t && (e = "no"), "ji" === t && (e = "yi"), "zh-CN" === e && (e = "zh"), "jv" === t && (e = "jw"), "me" === t && (e = "bs"), pt[e] ? e : pt[t] ? t : "en"
            },
            getLocale: function() {
                return yt.resolveLocale(mt || window.navigator.userLanguage || window.navigator.language)
            },
            setLocale: function(e) {
                "zh-Hans" === e ? e = "zh-CN" : "zh-Hant" === e && (e = "zh-TW"), mt = e
            },
            getShortLocale: function(e) {
                return e.indexOf("-") >= 0 ? e.substring(0, e.indexOf("-")) : e
            },
            getLangName: function(e) {
                return pt[e]
            },
            isShortLocale: function(e) {
                return 2 === e.length || 3 === e.length
            },
            addTable: function(e, t) {
                if (t || (t = Object.create(null)), ft[e]) {
                    var n = ft[e];
                    for (var r in t) n[r] = t[r]
                } else ft[e] = t;
                return ft[e]
            },
            getTable: function(e) {
                return ft[e]
            },
            addTables: function(e) {
                for (var t in e) yt.addTable(t, e[t]);
                return ft
            },
            getTables: function() {
                return ft
            }
        },
        gt = {
            400: "Rate limited or network error. Please retry.",
            429: "Your computer or network has sent too many requests.",
            500: "Cannot contact hCaptcha. Check your connection and try again."
        },
        vt = function(e) {
            try {
                return yt.translate(gt[e])
            } catch (Ln) {
                return !1
            }
        },
        wt = "undefined" != typeof XDomainRequest && !("withCredentials" in XMLHttpRequest.prototype);

    function bt(e, t, n) {
        n = n || {};
        var r = {
            url: t,
            method: e.toUpperCase(),
            responseType: n.responseType || "string",
            dataType: n.dataType || null,
            withCredentials: n.withCredentials || !1,
            headers: n.headers || null,
            data: n.data || null,
            timeout: n.timeout || null,
            pst: n.pst || null
        };
        r.legacy = r.withCredentials && wt;
        var i = "fetch" in window && r.pst ? Et : _t;
        return n.retry ? Je((function() {
            return n.data && (r.data = "function" == typeof n.data ? n.data() : n.data, "json" === r.dataType && "object" == typeof r.data ? r.data = JSON.stringify(r.data) : "query" === r.dataType && (r.data = lt(r.data))), i(r)
        }), n.retry) : (n.data && (r.data = "function" == typeof n.data ? n.data() : n.data, "json" === r.dataType && "object" == typeof r.data ? r.data = JSON.stringify(r.data) : "query" === r.dataType && (r.data = lt(r.data))), i(r))
    }

    function _t(e) {
        var t = e.legacy ? new XDomainRequest : new XMLHttpRequest,
            n = "function" == typeof e.url ? e.url() : e.url;
        return new Promise((function(r, i) {
            var o, a = function(o) {
                return function() {
                    var a = t.response,
                        s = t.statusText || "",
                        c = t.status,
                        l = t.readyState;
                    if (a || "" !== t.responseType && "text" !== t.responseType || (a = t.responseText), 4 === l || e.legacy) {
                        try {
                            if (a) {
                                var u = t.contentType;
                                t.getResponseHeader && (u = t.getResponseHeader("content-type"));
                                var h = -1 !== (u = u ? u.toLowerCase() : "").indexOf("application/json");
                                if ("ArrayBuffer" in window && a instanceof ArrayBuffer && h && (a = (new TextDecoder).decode(new Uint8Array(a))), "string" == typeof a) try {
                                    a = JSON.parse(a)
                                } catch (d) {
                                    h && Pe("http", d, {
                                        url: n,
                                        config: e,
                                        responseType: t.responseType,
                                        contentType: u,
                                        response: a
                                    })
                                }
                            }
                        } catch (d) {
                            return Pe("http", d, {
                                contentType: u
                            }), void i({
                                event: ce,
                                endpoint: n,
                                response: a,
                                state: l,
                                status: c,
                                message: vt(c || 400) || s
                            })
                        }
                        if ("error" === o || c >= 400 && c <= 511) return void i({
                            event: ce,
                            endpoint: n,
                            response: a,
                            state: l,
                            status: c,
                            message: 409 === c && a.error || vt(c || 400) || s
                        });
                        r({
                            state: l,
                            status: c,
                            body: a,
                            message: s
                        })
                    }
                }
            };
            if ((t.onload = a("complete"), t.onerror = t.ontimeout = a("error"), t.open(e.method, n), "arraybuffer" === e.responseType && (!e.legacy && "TextDecoder" in window && "ArrayBuffer" in window ? t.responseType = "arraybuffer" : (e.responseType = "json", e.headers.accept = "application/json")), e.timeout && (t.timeout = "function" == typeof e.timeout ? e.timeout(n) : e.timeout), !e.legacy) && (t.withCredentials = e.withCredentials, e.headers))
                for (var s in e.headers) o = e.headers[s], t.setRequestHeader(s, o);
            setTimeout((function() {
                t.send(e.data)
            }), 0)
        }))
    }

    function Et(e) {
        var t, n = "function" == typeof e.url ? e.url() : e.url,
            r = new Headers;
        if ("json" === e.responseType && r.set("content-type", "application/json"), e.headers)
            for (var i in e.headers) t = e.headers[i], r.set(i, t);
        var o = {
            method: e.method,
            credentials: "include",
            body: e.data,
            headers: r
        };
        if (e.pst) {
            var a = {};
            "token-request" === e.pst ? a = {
                version: 1,
                operation: "token-request"
            } : "token-redemption" === e.pst ? a = {
                version: 1,
                operation: "token-redemption",
                refreshPolicy: "refresh"
            } : "send-redemption-record" === e.pst && (a = {
                version: 1,
                operation: "send-redemption-record",
                issuers: [ve.pstIssuer]
            }), o.privateToken = a
        }
        return new Promise((function(t, r) {
            fetch(n, o).then((function(i) {
                return 200 !== i.status ? r({
                    event: ce,
                    endpoint: n,
                    response: i,
                    state: 4,
                    status: i.status,
                    message: vt(i.status || 400)
                }) : ("arraybuffer" === e.responseType ? i.arrayBuffer() : "json" === e.responseType ? i.json() : i.text()).then((function(e) {
                    t({
                        state: 4,
                        status: i.status,
                        body: e,
                        message: vt(i.status || 400)
                    })
                }))
            }))["catch"]((function(e) {
                r({
                    event: ce,
                    endpoint: n,
                    response: e.error,
                    state: 4,
                    status: 400,
                    message: vt(400)
                })
            }))
        }))
    }
    var Vt = function(e, t) {
            if ("object" == typeof e && t === undefined && (e = (t = e).url), null === e) throw new Error("Url missing");
            return bt("GET", e, t)
        },
        kt = ["svg", "gif", "png"];

    function xt(e, t) {
        t = t || {};
        var n, r = e;
        if (0 === r.indexOf("data:image"))
            for (var i = !1, o = kt.length, a = -1; a++ < o && !i;)(i = r.indexOf(kt[a]) >= 0) && (n = kt[a]);
        else n = r.substr(r.lastIndexOf(".") + 1, r.length);
        !!(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) && t.fallback && (t.fallback.indexOf(".") >= 0 ? n = (r = t.fallback).substr(r.lastIndexOf(".") + 1, r.length) : (r = e.substr(0, e.indexOf(n)) + t.fallback, n = t.fallback)), t.prefix && (r = t.prefix + "/" + r), this.attribs = {
            crossOrigin: t.crossOrigin || null
        }, this.id = r, this.src = function(e) {
            if (ve.assethost && 0 === e.indexOf(ge.assetDomain)) return ve.assethost + e.replace(ge.assetDomain, "");
            if (ve.imghost && e.indexOf("imgs") >= 0) {
                var t = e.indexOf(".ai") >= 0 ? e.indexOf(".ai") + 3 : e.indexOf(".com") + 4;
                return ve.imghost + e.substr(t, e.length)
            }
            return e
        }(r), this.ext = n, this.width = 0, this.height = 0, this.aspect = 0, this.loaded = !1, this.error = !1, this.element = null, this.cb = {
            load: [],
            error: []
        }
    }

    function St(e, t, n) {
        for (var r = e[t], i = r.length, o = null; --i > -1;) o = r[i], r.splice(i, 1), o(n);
        "error" === t ? e.load = [] : e.error = []
    }

    function Tt(e, t) {
        var n = e;
        t || (t = {}), t.prefix && (n = t.prefix + "/" + e), this.attribs = {
            defer: t.defer || null,
            async: t.async || null,
            crossOrigin: t.crossOrigin || null,
            integrity: t.integrity || null
        }, this.id = n, this.src = function(e) {
            if (ve.assethost && 0 === e.indexOf(ge.assetDomain)) return ve.assethost + e.replace(ge.assetDomain, "");
            return e
        }(n), this.loaded = !1, this.error = !1, this.element = null, this.cb = {
            load: [],
            error: []
        }
    }

    function Rt(e, t, n) {
        for (var r = e[t], i = r.length, o = null; --i > -1;) o = r[i], r.splice(i, 1), o(n);
        "error" === t ? e.load = [] : e.error = []
    }

    function Ct(e, t) {
        var n = e;
        t || (t = {}), t.prefix && (n = t.prefix + "/" + e), this.responseType = t.responseType, this.id = n, this.src = function(e) {
            if (ve.assethost && 0 === e.indexOf(ge.assetDomain)) return ve.assethost + e.replace(ge.assetDomain, "");
            return e
        }(n), this.loaded = !1, this.error = !1, this.cb = {
            load: [],
            error: []
        }, this.data = null
    }

    function Ut(e, t, n) {
        for (var r = e[t], i = r.length, o = null; --i > -1;) o = r[i], r.splice(i, 1), o(n);
        "error" === t ? e.load = [] : e.error = []
    }
    xt.prototype.load = function() {
        return ("svg" === this.ext ? this._loadSvg() : this._loadImg())["catch"]((function(e) {
            throw Oe("Asset failed", "error", "assets", {
                error: e
            }), e
        }))
    }, xt.prototype._loadSvg = function() {
        var e, t = this,
            n = this.src,
            r = this.id;
        if (0 === n.indexOf("data:image/svg+xml")) {
            var i = n.slice("data:image/svg+xml,".length);
            e = Promise.resolve(decodeURIComponent(i))
        } else e = Vt(n).then((function(e) {
            return e.body
        }));
        return e.then((function(e) {
            var n = (new DOMParser).parseFromString(e, "image/svg+xml").documentElement,
                r = parseInt(n.getAttribute("width")),
                i = parseInt(n.getAttribute("height"));
            return t._imgLoaded(n, r, i), t
        }))["catch"]((function(e) {
            t.error = !0;
            var n = (e && e.message ? e.message : e || "Loading Error") + ": " + r;
            throw St(t.cb, "error", n), n
        }))
    }, xt.prototype._loadImg = function() {
        var e = this,
            t = this.attribs,
            n = this.src,
            r = this.id;
        return new Promise((function(i, o) {
            function a() {
                e.loaded || (e._imgLoaded(s, s.width, s.height), s.onload = s.onerror = null, i(e))
            }
            var s = new Image;
            t.crossOrigin && (s.crossOrigin = t.crossOrigin), s.onerror = function() {
                e.error = !0, s.onload = s.onerror = null;
                var t = "Loading Error: " + r;
                St(e.cb, "error", t), o(t)
            }, s.onload = a, s.src = n, s.complete && a()
        }))
    }, xt.prototype._imgLoaded = function(e, t, n) {
        this.element = new ct(e), this.width = t, this.height = n, this.aspect = t / n, this.loaded = !0, St(this.cb, "load", this)
    }, xt.prototype.onload = function(e) {
        this.error || (this.loaded ? e(this) : this.cb.load.push(e))
    }, xt.prototype.onerror = function(e) {
        this.loaded && !this.error || (this.error ? e(this) : this.cb.error.push(e))
    }, Tt.prototype.load = function() {
        var e = this,
            t = this.attribs,
            n = this.src,
            r = this.id;
        return new Promise((function(i, o) {
            var a = document.createElement("script");
            e.element = a, a.onerror = function() {
                e.error = !0, a.onload = a.onreadystatechange = a.onerror = null;
                var t = "Loading Error: " + r;
                Rt(e.cb, "error", t), o(t)
            }, a.onload = a.onreadystatechange = function() {
                this.loaded || a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (e.loaded = !0, a.onload = a.onreadystatechange = a.onerror = null, document.body.removeChild(a), Rt(e.cb, "load", e), i(e))
            }, a.type = "text/javascript", a.src = n, t.crossOrigin && (a.crossorigin = t.crossOrigin), t.async && (a.async = !0), t.defer && (a.defer = !0), t.integrity && (a.integrity = t.integrity), document.body.appendChild(a), a.complete && a.onload()
        }))
    }, Tt.prototype.onload = function(e) {
        this.error || (this.loaded ? e(this) : this.cb.load.push(e))
    }, Tt.prototype.onerror = function(e) {
        this.loaded && !this.error || (this.error ? e(this) : this.cb.error.push(e))
    }, Ct.prototype.load = function() {
        var e = this,
            t = this.src,
            n = this.id;
        return new Promise((function(r, i) {
            var o = {};
            "arraybuffer" === e.responseType ? o.responseType = "arraybuffer" : t.indexOf("json") >= 0 && (o.responseType = "json"), Vt(t, o).then((function(t) {
                e.loaded = !0, e.data = t.body, Ut(e.cb, "load", e), r(e)
            }))["catch"]((function(t) {
                e.error = !0;
                var r = (t && t.message ? t.message : "Loading Error") + ": " + n;
                Ut(e.cb, "error", r), i(r)
            }))
        }))
    }, Ct.prototype.onload = function(e) {
        this.error || (this.loaded ? e(this) : this.cb.load.push(e))
    }, Ct.prototype.onerror = function(e) {
        this.loaded && !this.error || (this.error ? e(this) : this.cb.error.push(e))
    };
    var Ot = [],
        Pt = function(e, t) {
            var n = new Ct(e, t);
            return Ot.push(n), n.load()
        },
        Mt = function(e) {
            return new Promise((function(t, n) {
                for (var r = Ot.length, i = !1, o = null; --r > -1 && !i;) i = (o = Ot[r]).id === e || -1 !== o.id.indexOf("/" === e[0] ? "" : "/" + e);
                if (!i) return t(null);
                o.onload(t), o.onerror(n)
            }))
        },
        Dt = [],
        Wt = !1,
        jt = !1;

    function Ft() {
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", Nt), window.addEventListener("load", Nt)) : (document.attachEvent("onreadystatechange", At), window.attachEvent("onload", Nt)), Wt = !0
    }

    function At() {
        "interactive" !== document.readyState && "loaded" !== document.readyState && "complete" !== document.readyState || Nt()
    }

    function Nt() {
        if (!1 === jt) {
            for (var e = 0; e < Dt.length; e++) Dt[e].fn.apply(null, Dt[e].args);
            Dt = []
        }
        jt = !0, document.removeEventListener ? (document.removeEventListener("DOMContentLoaded", Nt), window.removeEventListener("load", Nt)) : (document.detachEvent("onreadystatechange", At), window.detachEvent("onload", Nt))
    }
    new ct(document);
    var Bt = new ct(window),
        Kt = {
            touchstart: "ts",
            touchend: "te",
            touchmove: "tm",
            touchcancel: "tc"
        },
        Zt = {
            mousedown: "md",
            mouseup: "mu",
            mousemove: "mm"
        },
        qt = {
            pointermove: "pm"
        },
        It = {
            keydown: "kd",
            keyup: "ku"
        },
        Lt = {
            devicemotion: "dm"
        },
        zt = function(e, t) {
            var n = Zt[e],
                r = null;
            return function(e) {
                r = function(e) {
                    return [e.windowX, e.windowY, Date.now()]
                }(e), t(n, r)
            }
        },
        Ht = function(e, t) {
            var n = qt[e],
                r = null;
            return function(e) {
                r = function(e) {
                    var t = [],
                        n = [];
                    e.getCoalescedEvents && (n = e.getCoalescedEvents());
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        t.push([i.x, i.y, Date.now()])
                    }
                    return t
                }(e);
                for (var i = 0; i < r.length; i++) t(n, r[i])
            }
        },
        $t = function(e, t) {
            var n = Kt[e],
                r = null;
            return function(e) {
                r = function(e) {
                    var t = [];
                    try {
                        var n, r;
                        if (e.touches && e.touches.length >= 1 ? n = e.touches : e.changedTouches && e.changedTouches.length >= 1 && (n = e.changedTouches), n) {
                            for (var i = 0; i < n.length; i++)(r = rt.eventCoords(n[i])) && t.push([n[i].identifier, r.x, r.y]);
                            t.push(Date.now())
                        }
                        return t
                    } catch (Ln) {
                        return t
                    }
                }(e), t(n, r)
            }
        },
        Jt = function(e, t) {
            var n = It[e],
                r = null;
            return function(e) {
                r = function(e) {
                    return [e.keyNum, Date.now()]
                }(e), t(n, r)
            }
        },
        Gt = function(e, t) {
            var n = Lt[e],
                r = null,
                i = [];
            return function(e) {
                r = function(e, t) {
                    (e.acceleration === undefined || e.acceleration && e.acceleration.x === undefined) && (e.acceleration = {
                        x: 0,
                        y: 0,
                        z: 0
                    });
                    (e.rotationRate === undefined || e.rotationRate && e.rotationRate.alpha === undefined) && (e.rotationRate = {
                        alpha: 0,
                        beta: 0,
                        gamma: 0
                    });
                    var n = [e.acceleration.x, e.acceleration.y, e.acceleration.z, e.rotationRate.alpha, e.rotationRate.beta, e.rotationRate.gamma, Date.now()],
                        r = [];
                    if (0 === t.length) t = n, r = n;
                    else {
                        for (var i, o = 0, a = 0; a < 6; a++) i = t[a] - n[a], r.push(n[a]), o += Math.abs(i);
                        if (r.push(Date.now()), t = n, o <= 0) return null
                    }
                    return {
                        motion: r,
                        prevmotion: t
                    }
                }(e, i), null !== r && (i = r.prevmotion, r = r.motion, t(n, r))
            }
        };

    function Xt() {
        this._manifest = {}, this.state = {
            timeBuffers: {},
            loadTime: Date.now(),
            recording: !1,
            initRecord: !1,
            record: {
                mouse: !0,
                touch: !0,
                keys: !1,
                motion: !1
            }
        }, this._recordEvent = this._recordEvent.bind(this)
    }
    Xt.prototype.record = function(e, t, n, r) {
        if (this._manifest.st = Date.now(), this.state.record.mouse = e === undefined ? this.state.record.mouse : e, this.state.record.touch = n === undefined ? this.state.record.touch : n, this.state.record.keys = t === undefined ? this.state.record.keys : t, this.state.record.motion = r === undefined ? this.state.record.motion : r, !1 === this.state.initRecord) {
            var i = new ct(document.body);
            this.state.record.mouse && (i.addEventListener("mousedown", zt("mousedown", this._recordEvent), !0), i.addEventListener("mousemove", zt("mousemove", this._recordEvent), !0), i.addEventListener("mouseup", zt("mouseup", this._recordEvent), !0), i.addEventListener("pointermove", Ht("pointermove", this._recordEvent), !0)), !0 === this.state.record.keys && (i.addEventListener("keyup", Jt("keyup", this._recordEvent), !0), i.addEventListener("keydown", Jt("keydown", this._recordEvent), !0)), this.state.record.touch && !0 === ee.Browser.hasEvent("touchstart", document.body) && (i.addEventListener("touchstart", $t("touchstart", this._recordEvent), !0), i.addEventListener("touchmove", $t("touchmove", this._recordEvent), !0), i.addEventListener("touchend", $t("touchend", this._recordEvent), !0)), this.state.record.motion && !0 === ee.Browser.hasEvent("devicemotion", window) && i.addEventListener("devicemotion", Gt("devicemotion", this._recordEvent), !0), this.state.initRecord = !0
        }
        this.state.recording = !0
    }, Xt.prototype.stop = function() {
        this.state.recording = !1
    }, Xt.prototype.time = function() {
        return this.state.loadTime
    }, Xt.prototype.getData = function() {
        for (var e in this.state.timeBuffers) this._manifest[e] = this.state.timeBuffers[e].getData(), this._manifest[e + "-mp"] = this.state.timeBuffers[e].getMeanPeriod();
        return this._manifest
    }, Xt.prototype.setData = function(e, t) {
        this._manifest[e] = t
    }, Xt.prototype.resetData = function() {
        this._manifest = {}, this.state.timeBuffers = {}
    }, Xt.prototype.circBuffPush = function(e, t) {
        this._recordEvent(e, t)
    }, Xt.prototype._recordEvent = function(e, t) {
        if (!1 !== this.state.recording) try {
            var n = t[t.length - 1];
            this.state.timeBuffers[e] || (this.state.timeBuffers[e] = new He(16, 15e3)), this.state.timeBuffers[e].push(n, t)
        } catch (In) {
            Pe("motion", In)
        }
    };
    var Yt, Qt, en, tn, nn = new Xt;
    try {
        Yt = function() {
            var e = {
                _8dyZiyy: 0,
                _L0jN7v2: 0,
                _VKq1Et2Da: [],
                _ftZ04: [],
                _96B0QzLhP: [],
                _VtvPdQ: {},
                _4lZCSJ: window,
                _Dg4zU7tZH: [function(e) {
                    e._VKq1Et2Da.push(ct)
                }, function(e) {
                    e._VKq1Et2Da.push(e._c1V63q[e._8dyZiyy++])
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n > t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++],
                        i = -1 == n ? e._ftZ04 : e._96B0QzLhP[n];
                    e._VKq1Et2Da.push(i[r] = t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n <= t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop(),
                        r = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n[t] = r)
                }, function(e) {
                    var t = e._c1V63q[e._8dyZiyy++];
                    e._L0jN7v2 = t
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n instanceof t)
                }, function(e) {
                    e._VKq1Et2Da.push(undefined)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n >= t)
                }, function(e) {
                    for (var t = e._c1V63q[e._8dyZiyy++], n = e._c1V63q[e._8dyZiyy++], r = e._c1V63q[e._8dyZiyy++], i = decodeURIComponent(atob(e._Q4f4Fpw.slice(t, t + n))), o = "", a = 0; a < i.length; a++) o += String.fromCharCode((256 + i.charCodeAt(a) + r) % 256);
                    e._VKq1Et2Da.push(o)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++];
                    e._ftZ04[r] = t;
                    for (var i = 0; i < n; i++) e._ftZ04[e._c1V63q[e._8dyZiyy++]] = t[i]
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n / t)
                }, function(e) {
                    e._VKq1Et2Da.push(e._4lZCSJ)
                }, function(e) {
                    e._VKq1Et2Da.push(!!e._c1V63q[e._8dyZiyy++])
                }, function() {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++];
                    e._96B0QzLhP[n] ? e._ftZ04 = e._96B0QzLhP[n] : (e._ftZ04 = t, e._96B0QzLhP[n] = t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(window[t])
                }, function() {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++];
                    e._ftZ04 = t, e._96B0QzLhP[n] = t
                }, function(e) {
                    var t = e._c1V63q[e._8dyZiyy++],
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++],
                        i = -1 == t ? e._ftZ04 : e._96B0QzLhP[t];
                    r ? e._VKq1Et2Da.push(++i[n]) : e._VKq1Et2Da.push(i[n]++)
                }, function(e) {
                    e._VtvPdQ[e._VKq1Et2Da[e._VKq1Et2Da.length - 1]] = e._VKq1Et2Da[e._VKq1Et2Da.length - 2]
                }, function(e) {
                    var n = e._VKq1Et2Da.pop(),
                        r = function() {
                            var i = !1,
                                o = Array.prototype.slice.call(arguments);
                            o.length > 0 && o[0]._l ? o = o.splice(1, o.length - 1) : i = !0;
                            var a = e._4lZCSJ,
                                s = e._L0jN7v2,
                                c = e._96B0QzLhP;
                            if (e._VKq1Et2Da.push(e._8dyZiyy), e._VKq1Et2Da.push(e._4lZCSJ), e._VKq1Et2Da.push(e._ftZ04), e._VKq1Et2Da.push(o), e._VKq1Et2Da.push(r), e._L0jN7v2 = e._8dyZiyy, e._8dyZiyy = n, e._4lZCSJ = this, e._96B0QzLhP = r._r, t(e), e._4lZCSJ = a, e._L0jN7v2 = s, e._96B0QzLhP = c, i) return e._VKq1Et2Da.pop()
                        };
                    r._l = {}, r._r = Array.prototype.slice.call(e._96B0QzLhP), e._VKq1Et2Da.push(r)
                }, function(e) {
                    e._8dyZiyy = e._VKq1Et2Da.splice(e._VKq1Et2Da.length - 4, 1)[0], e._4lZCSJ = e._VKq1Et2Da.splice(e._VKq1Et2Da.length - 3, 1)[0], e._ftZ04 = e._VKq1Et2Da.splice(e._VKq1Et2Da.length - 2, 1)[0]
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++];
                    (-1 == n ? e._ftZ04 : e._96B0QzLhP[n])[r] = t
                }, function(e) {
                    e._VKq1Et2Da.pop(), e._VKq1Et2Da.push(void 0)
                }, function(e) {
                    e._VKq1Et2Da.push(tt)
                }, function(e) {
                    e._VKq1Et2Da.push(nt)
                }, function(e) {
                    var t = e._c1V63q[e._8dyZiyy++],
                        n = e._c1V63q[e._8dyZiyy++],
                        r = -1 == t ? e._ftZ04 : e._96B0QzLhP[t];
                    e._VKq1Et2Da.push(r[n])
                }, function(e) {
                    var t = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(-t)
                }, function(e) {
                    e._VKq1Et2Da.push(rt)
                }, function(e) {
                    e._VKq1Et2Da.push(nt)
                }, function(e) {
                    for (var t = e._c1V63q[e._8dyZiyy++], n = [], r = 0; r < t; r++) n.push(e._VKq1Et2Da.pop());
                    e._VKq1Et2Da.push(n)
                }, function(e) {
                    for (var t = e._c1V63q[e._8dyZiyy++], n = {}, r = 0; r < t; r++) {
                        var i = e._VKq1Et2Da.pop();
                        n[e._VKq1Et2Da.pop()] = i
                    }
                    e._VKq1Et2Da.push(n)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n + t)
                }, function(e) {
                    var n = e._L0jN7v2,
                        r = e._c1V63q[e._8dyZiyy++];
                    try {
                        t(e)
                    } catch (i) {
                        e._VKq1Et2Da.push(i), e._8dyZiyy = r, t(e)
                    }
                    e._L0jN7v2 = n
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    if (t._l !== undefined) n.splice(0, 0, {
                        _l: {}
                    }), t.apply(e._4lZCSJ, n);
                    else {
                        var r = t.apply(e._4lZCSJ, n);
                        e._VKq1Et2Da.push(r)
                    }
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++];
                    t || (e._8dyZiyy = n)
                }, function(e) {
                    e._VKq1Et2Da.pop()
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n < t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n * t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n in t)
                }, function() {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop(),
                        r = !1;
                    t._l !== undefined && (r = !0, n.splice(0, 0, {
                        _l: {}
                    }));
                    var i = new(Function.prototype.bind.apply(t, [null].concat(n)));
                    r && e._VKq1Et2Da.pop(), e._VKq1Et2Da.push(i)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n | t)
                }, function(e) {
                    e._VKq1Et2Da.push(null)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop(),
                        r = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n[t] += r)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++],
                        i = -1 == n ? e._ftZ04 : e._96B0QzLhP[n];
                    e._VKq1Et2Da.push(i[r] += t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n === t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop(),
                        r = n[t];
                    "function" == typeof r && (r = r.bind(n)), e._VKq1Et2Da.push(r)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(!t)
                }, function(e) {
                    e._VKq1Et2Da.push(ee)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(typeof t)
                }, function(e) {
                    e._VKq1Et2Da.push(e._VKq1Et2Da[e._VKq1Et2Da.length - 1])
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._c1V63q[e._8dyZiyy++],
                        r = e._c1V63q[e._8dyZiyy++],
                        i = -1 == n ? e._ftZ04 : e._96B0QzLhP[n];
                    e._VKq1Et2Da.push(i[r] |= t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n << t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n - t)
                }, function(e) {
                    var t = e._VKq1Et2Da.pop(),
                        n = e._VKq1Et2Da.pop();
                    e._VKq1Et2Da.push(n !== t)
                }],
                _c1V63q: [30, 0, 15, 0, 1, 14, 20, 22, -1, 0, 14, 0, 35, 59, 30, 0, 17, 1, 36, 11, 1, 0, 1, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 3264, 40, -19, 46, 26, -1, 1, 10, 3932, 24, -9, 46, 30, 3, 14, 0, 35, 58, 21, 1, 69, 20, 22, -1, 1, 14, 0, 35, 202, 30, 0, 17, 2, 36, 11, 1, 0, 1, 30, 0, 22, -1, 2, 30, 0, 22, -1, 3, 26, -1, 1, 10, 1876, 32, 12, 46, 35, 113, 30, 0, 26, -1, 1, 10, 1876, 32, 12, 46, 34, 3, -1, 3, 36, 1, 0, 22, -1, 4, 26, -1, 4, 26, -1, 3, 10, 180, 8, 1, 46, 37, 35, 194, 26, -1, 3, 26, -1, 4, 46, 22, -1, 5, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 5, 10, 2856, 4, 14, 46, 26, -1, 5, 10, 2520, 8, -10, 46, 30, 3, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 18, -1, 4, 0, 36, 14, 0, 35, 118, 26, -1, 2, 14, 0, 35, 201, 21, 1, 212, 20, 22, -1, 2, 14, 0, 35, 249, 30, 0, 17, 3, 36, 11, 1, 0, 1, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 1736, 24, -13, 46, 30, 2, 14, 0, 35, 248, 21, 1, 259, 20, 22, -1, 3, 14, 0, 35, 521, 30, 0, 17, 4, 36, 11, 1, 0, 1, 30, 0, 22, -1, 2, 33, 501, 26, -1, 1, 10, 4324, 12, 0, 46, 50, 35, 303, 36, 26, -1, 1, 10, 4324, 12, 0, 46, 10, 180, 8, 1, 46, 1, 1, 9, 35, 321, 26, -1, 1, 10, 4324, 12, 0, 46, 3, -1, 3, 36, 14, 0, 35, 363, 26, -1, 1, 10, 1972, 36, -15, 46, 50, 35, 349, 36, 26, -1, 1, 10, 1972, 36, -15, 46, 10, 180, 8, 1, 46, 1, 1, 9, 35, 363, 26, -1, 1, 10, 1972, 36, -15, 46, 3, -1, 3, 36, 26, -1, 3, 35, 488, 1, 0, 22, -1, 5, 26, -1, 5, 26, -1, 3, 10, 180, 8, 1, 46, 37, 35, 463, 26, -1, 3, 26, -1, 5, 46, 30, 1, 28, 10, 720, 28, 19, 46, 34, 3, -1, 4, 36, 26, -1, 4, 35, 454, 26, -1, 4, 10, 2856, 4, 14, 46, 26, -1, 4, 10, 2520, 8, -10, 46, 26, -1, 3, 26, -1, 5, 46, 10, 2240, 16, 2, 46, 30, 3, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 18, -1, 5, 0, 36, 14, 0, 35, 373, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 2, 14, 0, 35, 520, 6, 497, 14, 0, 35, 511, 22, -1, 6, 26, -1, 2, 14, 0, 35, 520, 10, 4092, 36, -20, 16, 14, 0, 35, 520, 21, 1, 531, 20, 22, -1, 4, 14, 0, 35, 978, 30, 0, 17, 5, 36, 11, 2, 0, 1, 2, 26, -1, 1, 10, 232, 44, -17, 46, 1, 0, 23, 45, 50, 47, 35, 587, 36, 26, -1, 1, 10, 232, 44, -17, 46, 50, 35, 587, 36, 26, -1, 1, 10, 232, 44, -17, 46, 10, 2520, 8, -10, 46, 1, 0, 23, 45, 35, 618, 10, 1432, 4, -3, 1, 0, 10, 2856, 4, 14, 1, 0, 10, 2520, 8, -10, 1, 0, 31, 3, 26, -1, 1, 10, 232, 44, -17, 5, 36, 26, -1, 1, 10, 488, 32, -9, 46, 1, 0, 23, 45, 50, 47, 35, 664, 36, 26, -1, 1, 10, 488, 32, -9, 46, 50, 35, 664, 36, 26, -1, 1, 10, 488, 32, -9, 46, 10, 3820, 12, 1, 46, 1, 0, 23, 45, 35, 695, 10, 1384, 8, -11, 1, 0, 10, 3652, 8, -4, 1, 0, 10, 3820, 12, 1, 1, 0, 31, 3, 26, -1, 1, 10, 488, 32, -9, 5, 36, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 488, 32, -9, 46, 10, 1384, 8, -11, 46, 26, -1, 1, 10, 488, 32, -9, 46, 10, 3652, 8, -4, 46, 26, -1, 1, 10, 488, 32, -9, 46, 10, 3820, 12, 1, 46, 26, -1, 1, 10, 232, 44, -17, 46, 10, 1432, 4, -3, 46, 26, -1, 1, 10, 232, 44, -17, 46, 10, 2856, 4, 14, 46, 26, -1, 1, 10, 232, 44, -17, 46, 10, 2520, 8, -10, 46, 30, 7, 22, -1, 3, 30, 0, 22, -1, 4, 26, -1, 2, 10, 180, 8, 1, 46, 1, 0, 45, 35, 827, 26, -1, 3, 3, -1, 2, 36, 26, -1, 3, 3, -1, 4, 36, 14, 0, 35, 957, 1, 0, 22, -1, 5, 1, 0, 22, -1, 7, 26, -1, 7, 1, 6, 37, 35, 912, 26, -1, 2, 26, -1, 7, 46, 26, -1, 3, 26, -1, 7, 46, 53, 3, -1, 6, 36, 26, -1, 3, 26, -1, 7, 46, 30, 1, 26, -1, 4, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 6, 30, 1, 10, 1372, 8, 11, 16, 10, 3024, 12, -15, 46, 34, 44, -1, 5, 36, 18, -1, 7, 0, 36, 14, 0, 35, 837, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 30, 1, 26, -1, 4, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 3, 3, -1, 2, 36, 26, -1, 5, 1, 0, 4, 35, 957, 42, 14, 0, 35, 977, 10, 1796, 28, -11, 26, -1, 2, 10, 1420, 8, 0, 26, -1, 4, 31, 2, 14, 0, 35, 977, 21, 1, 988, 20, 22, -1, 5, 14, 0, 35, 1111, 30, 0, 17, 6, 36, 11, 0, 0, 31, 0, 13, 10, 3092, 20, 8, 5, 36, 10, 104, 16, 6, 10, 1420, 8, 0, 14, 0, 10, 2224, 8, 9, 14, 0, 10, 1236, 12, 5, 14, 1, 10, 3444, 36, -19, 14, 1, 31, 4, 10, 2308, 16, -6, 14, 0, 10, 3528, 44, -18, 14, 0, 10, 4268, 16, -10, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 10, 452, 16, 1, 31, 0, 31, 5, 13, 10, 3492, 12, 21, 5, 36, 13, 30, 1, 13, 10, 768, 20, -5, 46, 10, 2988, 8, 13, 46, 34, 13, 10, 768, 20, -5, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 1110, 21, 1, 1121, 20, 22, -1, 6, 14, 0, 35, 1303, 30, 0, 17, 7, 36, 11, 1, 0, 1, 30, 0, 26, -1, 1, 10, 656, 16, 3, 46, 10, 3692, 20, 16, 46, 34, 22, -1, 2, 26, -1, 1, 10, 3772, 4, -1, 46, 50, 47, 35, 1166, 36, 10, 336, 0, 15, 22, -1, 3, 26, -1, 1, 10, 2996, 8, 13, 46, 50, 47, 35, 1186, 36, 10, 336, 0, 15, 22, -1, 4, 26, -1, 1, 10, 1936, 12, 20, 46, 50, 47, 35, 1206, 36, 10, 336, 0, 15, 22, -1, 5, 26, -1, 1, 10, 3036, 20, 4, 46, 50, 47, 35, 1226, 36, 10, 336, 0, 15, 22, -1, 6, 26, -1, 1, 10, 4004, 52, -20, 46, 50, 47, 35, 1246, 36, 10, 336, 0, 15, 22, -1, 7, 26, -1, 1, 30, 1, 26, 0, 7, 34, 22, -1, 8, 26, -1, 2, 26, -1, 3, 32, 26, -1, 4, 32, 26, -1, 5, 32, 26, -1, 6, 32, 26, -1, 7, 32, 26, -1, 8, 32, 22, -1, 9, 26, -1, 9, 30, 1, 24, 34, 14, 0, 35, 1302, 21, 1, 1313, 20, 22, -1, 7, 14, 0, 35, 1730, 30, 0, 17, 8, 36, 11, 1, 0, 1, 26, -1, 1, 10, 3772, 4, -1, 46, 10, 336, 0, 15, 54, 35, 1359, 10, 3428, 16, -21, 26, -1, 1, 10, 3772, 4, -1, 46, 32, 10, 1348, 4, -5, 32, 14, 0, 35, 1729, 26, -1, 1, 10, 2508, 12, -5, 16, 10, 1824, 8, 13, 46, 45, 35, 1383, 10, 2792, 24, 18, 14, 0, 35, 1729, 10, 336, 0, 15, 22, -1, 2, 1, 0, 22, -1, 3, 26, -1, 1, 10, 1616, 16, -4, 46, 35, 1722, 26, -1, 3, 26, 0, 41, 2, 35, 1418, 14, 0, 35, 1722, 1, 0, 22, -1, 4, 1, 0, 22, -1, 5, 26, -1, 1, 10, 1616, 16, -4, 46, 10, 3180, 20, 13, 46, 10, 180, 8, 1, 46, 22, -1, 6, 26, 0, 42, 26, -1, 6, 30, 2, 10, 1372, 8, 11, 16, 10, 1760, 4, 7, 46, 34, 22, -1, 7, 1, 0, 22, -1, 8, 26, -1, 8, 26, -1, 7, 37, 35, 1557, 26, -1, 1, 10, 1616, 16, -4, 46, 10, 3180, 20, 13, 46, 26, -1, 8, 46, 22, -1, 9, 26, -1, 9, 10, 1908, 12, -5, 46, 26, -1, 1, 10, 1908, 12, -5, 46, 45, 35, 1548, 26, -1, 9, 26, -1, 1, 45, 35, 1543, 26, -1, 4, 1, 1, 32, 3, -1, 5, 36, 18, -1, 4, 0, 36, 18, -1, 8, 0, 36, 14, 0, 35, 1476, 10, 2996, 8, 13, 30, 1, 26, -1, 1, 10, 3216, 24, -10, 46, 34, 50, 35, 1596, 36, 10, 2996, 8, 13, 30, 1, 26, -1, 1, 10, 1920, 16, 16, 46, 34, 10, 336, 0, 15, 54, 35, 1657, 10, 1380, 4, -19, 30, 0, 26, -1, 1, 10, 1908, 12, -5, 46, 10, 3692, 20, 16, 46, 34, 32, 10, 3724, 12, -7, 32, 10, 2996, 8, 13, 30, 1, 26, -1, 1, 10, 1920, 16, 16, 46, 34, 32, 10, 1348, 4, -5, 32, 26, -1, 2, 32, 3, -1, 2, 36, 14, 0, 35, 1700, 10, 1380, 4, -19, 30, 0, 26, -1, 1, 10, 1908, 12, -5, 46, 10, 3692, 20, 16, 46, 34, 32, 10, 4056, 4, 8, 32, 26, -1, 5, 32, 10, 2964, 4, 12, 32, 26, -1, 2, 32, 3, -1, 2, 36, 26, -1, 1, 10, 1616, 16, -4, 46, 3, -1, 1, 36, 1, 1, 44, -1, 3, 36, 14, 0, 35, 1395, 26, -1, 2, 14, 0, 35, 1729, 21, 1, 1740, 20, 22, -1, 8, 14, 0, 35, 1762, 30, 0, 17, 9, 36, 11, 2, 0, 1, 2, 26, -1, 1, 26, -1, 2, 41, 14, 0, 35, 1761, 21, 1, 1772, 20, 22, -1, 9, 14, 0, 35, 1909, 30, 0, 17, 10, 36, 11, 1, 0, 1, 26, -1, 1, 30, 1, 26, 0, 6, 34, 22, -1, 2, 26, 0, 44, 26, -1, 2, 46, 35, 1813, 26, 0, 44, 26, -1, 2, 46, 14, 0, 35, 1908, 26, -1, 1, 10, 2756, 32, -18, 46, 35, 1829, 1, 1, 14, 0, 35, 1831, 1, 0, 26, -1, 1, 10, 3400, 20, -13, 46, 35, 1847, 1, 1, 14, 0, 35, 1849, 1, 0, 26, -1, 1, 10, 2492, 16, 11, 46, 35, 1865, 1, 1, 14, 0, 35, 1867, 1, 0, 26, -1, 1, 30, 1, 26, 0, 11, 34, 26, -1, 1, 30, 1, 26, 0, 10, 34, 30, 5, 22, -1, 3, 26, -1, 3, 26, 0, 44, 26, -1, 2, 5, 36, 26, -1, 3, 14, 0, 35, 1908, 21, 1, 1919, 20, 22, -1, 10, 14, 0, 35, 2634, 30, 0, 17, 11, 36, 11, 1, 0, 1, 26, -1, 1, 10, 136, 12, -3, 46, 10, 1868, 8, 21, 46, 35, 1955, 26, 0, 43, 10, 848, 8, -15, 46, 14, 0, 35, 2633, 26, -1, 1, 10, 1936, 12, 20, 46, 50, 35, 1983, 36, 30, 0, 26, -1, 1, 10, 1936, 12, 20, 46, 10, 3692, 20, 16, 46, 34, 22, -1, 2, 30, 0, 26, -1, 1, 10, 656, 16, 3, 46, 10, 3692, 20, 16, 46, 34, 22, -1, 3, 26, -1, 3, 10, 3008, 16, -4, 45, 35, 2027, 26, 0, 43, 10, 1664, 8, 5, 46, 14, 0, 35, 2633, 10, 864, 8, -6, 26, 0, 43, 10, 3484, 8, -1, 46, 10, 896, 8, 14, 26, 0, 43, 10, 4220, 12, 21, 46, 10, 520, 8, 14, 26, 0, 43, 10, 1576, 4, 2, 46, 10, 2300, 8, 0, 26, 0, 43, 10, 4312, 12, -7, 46, 10, 3364, 16, 17, 26, 0, 43, 10, 624, 16, -4, 46, 10, 3380, 8, -7, 26, 0, 43, 10, 384, 8, 0, 46, 31, 6, 22, -1, 4, 26, -1, 4, 26, -1, 2, 46, 35, 2124, 26, -1, 4, 26, -1, 2, 46, 14, 0, 35, 2633, 30, 0, 26, -1, 1, 10, 2996, 8, 13, 46, 50, 47, 35, 2143, 36, 10, 336, 0, 15, 10, 3692, 20, 16, 46, 34, 22, -1, 5, 30, 0, 26, -1, 1, 10, 3772, 4, -1, 46, 50, 47, 35, 2171, 36, 10, 336, 0, 15, 10, 3692, 20, 16, 46, 34, 22, -1, 6, 30, 0, 26, -1, 1, 10, 4004, 52, -20, 46, 50, 47, 35, 2199, 36, 10, 336, 0, 15, 10, 3692, 20, 16, 46, 34, 22, -1, 7, 30, 0, 26, -1, 1, 10, 3036, 20, 4, 46, 50, 47, 35, 2227, 36, 10, 336, 0, 15, 10, 3692, 20, 16, 46, 34, 22, -1, 8, 10, 3380, 8, -7, 30, 1, 26, -1, 5, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2279, 36, 10, 3380, 8, -7, 30, 1, 26, -1, 6, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2303, 36, 10, 3380, 8, -7, 30, 1, 26, -1, 7, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2327, 36, 10, 3380, 8, -7, 30, 1, 26, -1, 8, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 35, 2341, 26, 0, 43, 10, 384, 8, 0, 46, 14, 0, 35, 2633, 10, 3364, 16, 17, 30, 1, 26, -1, 5, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2384, 36, 10, 3364, 16, 17, 30, 1, 26, -1, 6, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2408, 36, 10, 3364, 16, 17, 30, 1, 26, -1, 7, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2432, 36, 10, 3364, 16, 17, 30, 1, 26, -1, 8, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 35, 2446, 26, 0, 43, 10, 624, 16, -4, 46, 14, 0, 35, 2633, 10, 3200, 16, -16, 30, 1, 26, -1, 5, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2489, 36, 10, 3200, 16, -16, 30, 1, 26, -1, 6, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2513, 36, 10, 3200, 16, -16, 30, 1, 26, -1, 7, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2537, 36, 10, 3200, 16, -16, 30, 1, 26, -1, 8, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2561, 36, 10, 520, 8, 14, 30, 1, 26, -1, 5, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 50, 47, 35, 2585, 36, 10, 520, 8, 14, 30, 1, 26, -1, 6, 10, 2104, 12, 13, 46, 34, 1, 1, 27, 54, 35, 2599, 26, 0, 43, 10, 1576, 4, 2, 46, 14, 0, 35, 2633, 26, -1, 2, 10, 3624, 8, 1, 45, 35, 2621, 26, 0, 43, 10, 1664, 8, 5, 46, 14, 0, 35, 2633, 26, 0, 43, 10, 2400, 8, 1, 46, 14, 0, 35, 2633, 21, 1, 2644, 20, 22, -1, 11, 14, 0, 35, 2776, 30, 0, 17, 12, 36, 11, 1, 0, 1, 10, 4004, 52, -20, 10, 644, 12, 17, 10, 2996, 8, 13, 10, 3772, 4, -1, 30, 4, 22, -1, 2, 30, 0, 22, -1, 3, 1, 0, 22, -1, 4, 26, -1, 4, 26, -1, 2, 10, 180, 8, 1, 46, 37, 35, 2768, 26, -1, 2, 26, -1, 4, 46, 22, -1, 5, 26, -1, 5, 30, 1, 26, -1, 1, 10, 3216, 24, -10, 46, 34, 35, 2746, 26, -1, 5, 30, 1, 26, -1, 1, 10, 1920, 16, 16, 46, 34, 30, 1, 24, 34, 14, 0, 35, 2747, 42, 30, 1, 26, -1, 3, 10, 2292, 8, 9, 46, 34, 36, 18, -1, 4, 0, 36, 14, 0, 35, 2684, 26, -1, 3, 14, 0, 35, 2775, 21, 1, 2786, 20, 22, -1, 12, 14, 0, 35, 2889, 30, 0, 17, 13, 36, 11, 1, 0, 1, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 26, -1, 1, 10, 3264, 40, -19, 46, 35, 2844, 26, -1, 1, 10, 3264, 40, -19, 46, 14, 0, 35, 2852, 26, -1, 1, 10, 2948, 12, 6, 46, 26, -1, 1, 10, 3932, 24, -9, 46, 35, 2874, 26, -1, 1, 10, 3932, 24, -9, 46, 14, 0, 35, 2882, 26, -1, 1, 10, 1392, 20, -16, 46, 30, 4, 14, 0, 35, 2888, 21, 1, 2899, 20, 22, -1, 13, 14, 0, 35, 3226, 30, 0, 17, 14, 36, 11, 1, 0, 1, 1, 0, 22, -1, 2, 26, -1, 1, 10, 2476, 16, 14, 46, 35, 2944, 26, 0, 54, 10, 3832, 16, 10, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 3124, 16, -4, 46, 35, 2975, 26, 0, 54, 10, 3572, 20, 14, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 2408, 24, -13, 46, 35, 3006, 26, 0, 54, 10, 4128, 16, 3, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 612, 12, 11, 46, 35, 3037, 26, 0, 54, 10, 1436, 16, 18, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 2324, 16, -16, 46, 10, 3848, 12, 6, 45, 35, 3073, 26, 0, 54, 10, 2724, 16, 8, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 2324, 16, -16, 46, 10, 1848, 20, -19, 45, 35, 3109, 26, 0, 54, 10, 2704, 20, 21, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 2324, 16, -16, 46, 10, 1248, 12, -2, 45, 35, 3145, 26, 0, 54, 10, 3660, 24, -17, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 26, -1, 1, 10, 2324, 16, -16, 46, 10, 704, 16, -11, 45, 35, 3181, 26, 0, 54, 10, 2688, 16, 2, 46, 26, -1, 2, 30, 2, 26, 0, 8, 34, 3, -1, 2, 36, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 26, -1, 2, 26, -1, 1, 10, 912, 20, 18, 46, 30, 4, 14, 0, 35, 3225, 21, 1, 3236, 20, 22, -1, 14, 14, 0, 35, 3572, 30, 0, 17, 15, 36, 11, 1, 0, 1, 30, 0, 22, -1, 2, 33, 3552, 26, -1, 1, 10, 4324, 12, 0, 46, 50, 35, 3280, 36, 26, -1, 1, 10, 4324, 12, 0, 46, 10, 180, 8, 1, 46, 1, 1, 9, 35, 3298, 26, -1, 1, 10, 4324, 12, 0, 46, 3, -1, 3, 36, 14, 0, 35, 3340, 26, -1, 1, 10, 1972, 36, -15, 46, 50, 35, 3326, 36, 26, -1, 1, 10, 1972, 36, -15, 46, 10, 180, 8, 1, 46, 1, 1, 9, 35, 3340, 26, -1, 1, 10, 1972, 36, -15, 46, 3, -1, 3, 36, 26, -1, 3, 35, 3539, 1, 0, 22, -1, 5, 26, -1, 5, 26, -1, 3, 10, 180, 8, 1, 46, 37, 35, 3488, 26, -1, 3, 26, -1, 5, 46, 30, 1, 28, 10, 720, 28, 19, 46, 34, 3, -1, 4, 36, 26, -1, 4, 35, 3479, 26, -1, 3, 26, -1, 5, 46, 10, 2240, 16, 2, 46, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 4, 10, 2520, 8, -10, 46, 30, 1, 10, 1372, 8, 11, 16, 10, 336, 12, 14, 46, 34, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 4, 10, 2856, 4, 14, 46, 30, 1, 10, 1372, 8, 11, 16, 10, 336, 12, 14, 46, 34, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 18, -1, 5, 0, 36, 14, 0, 35, 3350, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 30, 1, 26, -1, 2, 10, 2292, 8, 9, 46, 34, 36, 26, -1, 2, 14, 0, 35, 3571, 6, 3548, 14, 0, 35, 3562, 22, -1, 6, 26, -1, 2, 14, 0, 35, 3571, 10, 4092, 36, -20, 16, 14, 0, 35, 3571, 21, 1, 3582, 20, 22, -1, 15, 14, 0, 35, 3625, 30, 0, 17, 16, 36, 11, 1, 0, 1, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 30, 2, 14, 0, 35, 3624, 21, 1, 3635, 20, 22, -1, 16, 14, 0, 35, 3946, 30, 0, 17, 17, 36, 11, 1, 0, 1, 26, -1, 1, 10, 148, 28, -18, 46, 22, -1, 2, 26, -1, 1, 10, 1936, 12, 20, 46, 10, 1672, 28, -17, 45, 35, 3682, 26, 0, 55, 10, 2008, 8, -3, 46, 14, 0, 35, 3690, 26, 0, 55, 10, 2116, 12, 2, 46, 22, -1, 3, 26, -1, 2, 10, 3504, 24, -19, 46, 50, 47, 35, 3710, 36, 10, 336, 0, 15, 22, -1, 4, 10, 3624, 8, 1, 30, 1, 26, -1, 1, 10, 1260, 20, -7, 46, 10, 2528, 20, 9, 46, 34, 22, -1, 5, 1, 0, 22, -1, 6, 26, -1, 3, 26, 0, 55, 10, 2116, 12, 2, 46, 45, 35, 3831, 26, -1, 2, 10, 2624, 24, 12, 46, 1, 0, 30, 2, 26, -1, 4, 10, 392, 16, -14, 46, 34, 26, -1, 5, 32, 26, -1, 2, 10, 3776, 28, 14, 46, 30, 1, 26, -1, 4, 10, 392, 16, -14, 46, 34, 32, 22, -1, 7, 26, -1, 5, 10, 180, 8, 1, 46, 26, -1, 7, 10, 180, 8, 1, 46, 12, 1, 100, 38, 3, -1, 6, 36, 14, 0, 35, 3885, 26, -1, 2, 10, 3776, 28, 14, 46, 26, -1, 2, 10, 2624, 24, 12, 46, 30, 2, 26, -1, 4, 10, 392, 16, -14, 46, 34, 22, -1, 8, 26, -1, 8, 10, 180, 8, 1, 46, 26, -1, 4, 10, 180, 8, 1, 46, 12, 1, 100, 38, 3, -1, 6, 36, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 2, 30, 1, 26, 0, 6, 34, 26, -1, 3, 26, 0, 55, 10, 2116, 12, 2, 46, 45, 35, 3932, 26, -1, 5, 30, 1, 24, 34, 14, 0, 35, 3933, 42, 26, -1, 6, 26, -1, 3, 30, 5, 14, 0, 35, 3945, 21, 1, 3956, 20, 22, -1, 17, 14, 0, 35, 4173, 30, 0, 17, 18, 36, 11, 1, 0, 1, 1, 0, 22, -1, 2, 26, -1, 1, 10, 148, 28, -18, 46, 10, 348, 36, 10, 16, 7, 50, 47, 35, 4003, 36, 26, -1, 1, 10, 148, 28, -18, 46, 10, 4284, 28, -2, 16, 7, 35, 4031, 26, -1, 1, 10, 148, 28, -18, 46, 10, 3504, 24, -19, 46, 10, 180, 8, 1, 46, 3, -1, 2, 36, 14, 0, 35, 4086, 26, -1, 1, 10, 148, 28, -18, 46, 10, 188, 20, -9, 16, 7, 50, 35, 4062, 36, 26, -1, 1, 10, 148, 28, -18, 46, 10, 580, 24, -1, 46, 35, 4086, 26, -1, 1, 10, 148, 28, -18, 46, 10, 3860, 20, 21, 46, 10, 180, 8, 1, 46, 3, -1, 2, 36, 26, -1, 1, 10, 2168, 8, -11, 46, 35, 4113, 26, -1, 1, 10, 2168, 8, -11, 46, 10, 180, 8, 1, 46, 14, 0, 35, 4116, 1, 1, 27, 22, -1, 3, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 9, 34, 26, -1, 3, 26, -1, 2, 30, 5, 14, 0, 35, 4172, 21, 1, 4183, 20, 22, -1, 18, 14, 0, 35, 4435, 30, 0, 17, 19, 36, 11, 1, 0, 1, 26, -1, 1, 10, 1936, 12, 20, 46, 10, 2360, 16, -4, 45, 50, 35, 4217, 36, 26, -1, 1, 10, 1876, 32, 12, 46, 35, 4352, 30, 0, 26, -1, 1, 10, 1876, 32, 12, 46, 34, 22, -1, 2, 30, 0, 1, 4242, 20, 14, 0, 35, 4327, 30, 0, 17, 20, 22, -1, 0, 11, 1, 1, 2, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 2, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 26, -1, 2, 10, 120, 16, 16, 46, 26, -1, 2, 10, 2340, 20, 11, 46, 26, -1, 2, 10, 1832, 16, 2, 46, 26, -1, 2, 10, 2948, 12, 6, 46, 26, -1, 2, 10, 1392, 20, -16, 46, 30, 7, 14, 0, 35, 4326, 21, 30, 1, 26, -1, 2, 10, 2788, 4, -1, 46, 34, 10, 1568, 8, 10, 46, 34, 14, 0, 35, 4434, 14, 0, 35, 4425, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 26, -1, 1, 10, 148, 28, -18, 46, 30, 1, 26, 0, 6, 34, 26, -1, 1, 10, 120, 16, 16, 46, 26, -1, 1, 10, 2340, 20, 11, 46, 26, -1, 1, 10, 1832, 16, 2, 46, 26, -1, 1, 10, 2948, 12, 6, 46, 26, -1, 1, 10, 1392, 20, -16, 46, 30, 7, 14, 0, 35, 4434, 10, 4092, 36, -20, 16, 14, 0, 35, 4434, 21, 1, 4445, 20, 22, -1, 19, 14, 0, 35, 4598, 30, 0, 17, 21, 36, 11, 0, 0, 31, 0, 13, 10, 3092, 20, 8, 5, 36, 10, 4268, 16, -10, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 10, 4060, 24, 19, 1, 0, 10, 1580, 20, 9, 31, 0, 10, 2888, 4, -8, 31, 0, 10, 452, 16, 1, 31, 0, 10, 104, 16, 6, 10, 60, 44, -20, 14, 1, 10, 4232, 8, 5, 14, 1, 10, 444, 8, -4, 14, 1, 10, 1236, 12, 5, 14, 1, 10, 2224, 8, 9, 14, 1, 10, 1720, 16, -9, 14, 1, 31, 6, 10, 2308, 16, -6, 14, 0, 10, 3528, 44, -18, 14, 0, 31, 8, 13, 10, 3492, 12, 21, 5, 36, 13, 30, 1, 13, 10, 768, 20, -5, 46, 10, 2988, 8, 13, 46, 34, 13, 10, 768, 20, -5, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 4597, 21, 1, 4608, 20, 22, -1, 20, 14, 0, 35, 4657, 30, 0, 17, 22, 36, 11, 0, 0, 33, 4639, 30, 0, 26, 0, 59, 10, 2528, 20, 9, 46, 34, 14, 0, 35, 4656, 6, 4635, 14, 0, 35, 4647, 22, -1, 1, 42, 14, 0, 35, 4656, 10, 4092, 36, -20, 16, 14, 0, 35, 4656, 21, 1, 4667, 20, 22, -1, 21, 14, 0, 35, 4720, 30, 0, 17, 23, 36, 11, 0, 0, 33, 4702, 10, 3908, 12, 8, 16, 10, 912, 20, 18, 46, 10, 2648, 8, 4, 46, 14, 0, 35, 4719, 6, 4698, 14, 0, 35, 4710, 22, -1, 1, 42, 14, 0, 35, 4719, 10, 4092, 36, -20, 16, 14, 0, 35, 4719, 21, 1, 4730, 20, 22, -1, 22, 14, 0, 35, 4823, 30, 0, 17, 24, 36, 11, 0, 0, 33, 4805, 10, 1292, 20, 13, 30, 1, 10, 1352, 20, 13, 16, 10, 808, 40, 22, 46, 34, 22, -1, 1, 26, -1, 1, 10, 180, 8, 1, 46, 1, 0, 2, 35, 4792, 26, -1, 1, 1, 0, 46, 10, 3992, 12, 0, 46, 14, 0, 35, 4822, 14, 0, 35, 4799, 1, 1, 27, 14, 0, 35, 4822, 6, 4801, 14, 0, 35, 4813, 22, -1, 2, 42, 14, 0, 35, 4822, 10, 4092, 36, -20, 16, 14, 0, 35, 4822, 21, 1, 4833, 20, 22, -1, 23, 14, 0, 35, 4886, 30, 0, 17, 25, 36, 11, 0, 0, 33, 4868, 10, 2508, 12, -5, 16, 10, 912, 20, 18, 46, 10, 2648, 8, 4, 46, 14, 0, 35, 4885, 6, 4864, 14, 0, 35, 4876, 22, -1, 1, 42, 14, 0, 35, 4885, 10, 4092, 36, -20, 16, 14, 0, 35, 4885, 21, 1, 4896, 20, 22, -1, 24, 14, 0, 35, 4945, 30, 0, 17, 26, 36, 11, 0, 0, 33, 4927, 30, 0, 26, 0, 40, 10, 2528, 20, 9, 46, 34, 14, 0, 35, 4944, 6, 4923, 14, 0, 35, 4935, 22, -1, 1, 42, 14, 0, 35, 4944, 10, 4092, 36, -20, 16, 14, 0, 35, 4944, 21, 1, 4955, 20, 22, -1, 25, 14, 0, 35, 5165, 30, 0, 17, 27, 36, 11, 1, 0, 1, 33, 5152, 26, -1, 1, 10, 2168, 8, -11, 46, 22, -1, 2, 26, -1, 2, 1, 0, 23, 54, 50, 35, 5e3, 36, 26, -1, 2, 10, 484, 4, -2, 46, 1, 0, 23, 54, 35, 5146, 26, -1, 2, 10, 484, 4, -2, 46, 10, 1228, 8, -18, 45, 35, 5054, 26, -1, 1, 10, 3592, 8, 2, 46, 26, -1, 1, 10, 1600, 16, 20, 46, 30, 2, 30, 1, 26, 0, 62, 1, 0, 46, 10, 2292, 8, 9, 46, 34, 36, 14, 0, 35, 5146, 26, -1, 2, 10, 484, 4, -2, 46, 10, 3684, 4, 16, 45, 35, 5098, 26, -1, 1, 10, 3592, 8, 2, 46, 26, -1, 1, 10, 1600, 16, 20, 46, 30, 2, 26, 0, 62, 1, 1, 5, 36, 14, 0, 35, 5146, 26, -1, 2, 10, 484, 4, -2, 46, 10, 3004, 4, -19, 45, 35, 5146, 26, -1, 2, 10, 1228, 8, -18, 46, 26, -1, 2, 10, 3688, 4, -11, 46, 30, 2, 30, 1, 26, 0, 62, 1, 2, 46, 10, 2292, 8, 9, 46, 34, 36, 6, 5148, 14, 0, 35, 5155, 22, -1, 3, 10, 4092, 36, -20, 16, 14, 0, 35, 5164, 21, 1, 5175, 20, 22, -1, 26, 14, 0, 35, 5338, 30, 0, 17, 28, 36, 11, 2, 0, 1, 2, 33, 5325, 26, -1, 1, 10, 2168, 8, -11, 46, 22, -1, 3, 26, -1, 3, 1, 0, 23, 54, 50, 35, 5221, 36, 26, -1, 3, 10, 484, 4, -2, 46, 1, 0, 23, 54, 35, 5319, 26, -1, 3, 10, 484, 4, -2, 46, 10, 1632, 4, 0, 45, 35, 5319, 30, 0, 26, 0, 27, 34, 36, 10, 2960, 4, 8, 10, 1228, 8, -18, 26, 0, 60, 30, 1, 10, 672, 8, 6, 16, 10, 3956, 24, -11, 46, 34, 30, 1, 26, 0, 28, 34, 10, 3688, 4, -11, 26, -1, 2, 10, 484, 4, -2, 10, 3004, 4, -19, 10, 1600, 16, 20, 10, 2832, 24, -17, 31, 4, 30, 2, 10, 3908, 12, 8, 16, 10, 2212, 12, -10, 46, 10, 2740, 16, -1, 46, 34, 36, 6, 5321, 14, 0, 35, 5328, 22, -1, 4, 10, 4092, 36, -20, 16, 14, 0, 35, 5337, 21, 1, 5348, 20, 22, -1, 27, 14, 0, 35, 5427, 30, 0, 17, 29, 36, 11, 0, 0, 1, 0, 22, -1, 1, 26, -1, 1, 26, 0, 61, 10, 180, 8, 1, 46, 37, 35, 5417, 26, 0, 61, 26, -1, 1, 46, 49, 10, 1472, 16, 6, 45, 35, 5408, 30, 0, 26, 0, 61, 26, -1, 1, 46, 34, 26, 0, 60, 26, -1, 1, 5, 36, 18, -1, 1, 0, 36, 14, 0, 35, 5361, 10, 4092, 36, -20, 16, 14, 0, 35, 5426, 21, 1, 5437, 20, 22, -1, 28, 14, 0, 35, 5454, 30, 0, 17, 30, 36, 11, 1, 0, 1, 26, -1, 1, 14, 0, 35, 5453, 21, 1, 5464, 20, 22, -1, 29, 14, 0, 35, 5997, 30, 0, 17, 31, 36, 11, 0, 0, 33, 5937, 30, 0, 26, 0, 27, 34, 36, 1, 0, 22, -1, 1, 26, -1, 1, 26, 0, 62, 1, 0, 46, 10, 180, 8, 1, 46, 37, 35, 5565, 26, 0, 62, 1, 0, 46, 26, -1, 1, 46, 1, 1, 46, 10, 484, 4, -2, 10, 1632, 4, 0, 10, 1600, 16, 20, 10, 2832, 24, -17, 31, 2, 30, 2, 26, 0, 62, 1, 0, 46, 26, -1, 1, 46, 1, 0, 46, 10, 2740, 16, -1, 46, 34, 36, 18, -1, 1, 0, 36, 14, 0, 35, 5486, 26, 0, 60, 30, 1, 10, 672, 8, 6, 16, 10, 3956, 24, -11, 46, 34, 30, 1, 26, 0, 28, 34, 1, 0, 30, 2, 30, 1, 26, 0, 62, 1, 2, 46, 10, 2292, 8, 9, 46, 34, 36, 1, 5613, 20, 14, 0, 35, 5919, 30, 0, 17, 32, 22, -1, 0, 11, 1, 1, 2, 1, 5634, 20, 22, -1, 3, 14, 0, 35, 5900, 30, 0, 17, 33, 36, 11, 1, 0, 1, 26, 0, 62, 1, 1, 46, 22, -1, 2, 26, 0, 62, 1, 2, 46, 22, -1, 3, 26, -1, 2, 1, 0, 23, 45, 50, 47, 35, 5680, 36, 26, -1, 3, 1, 0, 23, 45, 50, 47, 35, 5696, 36, 26, -1, 3, 10, 180, 8, 1, 46, 1, 3, 37, 50, 35, 5706, 36, 26, -1, 1, 1, 30, 37, 35, 5778, 26, -1, 1, 1, 10, 37, 35, 5722, 1, 1, 14, 0, 35, 5724, 1, 3, 22, -1, 4, 26, -1, 4, 1, 5737, 20, 14, 0, 35, 5765, 30, 0, 17, 34, 22, -1, 0, 11, 0, 1, 26, 33, 1, 26, 33, 4, 32, 30, 1, 26, 32, 3, 34, 14, 0, 35, 5764, 21, 30, 2, 10, 2672, 16, 6, 16, 34, 36, 14, 0, 35, 5890, 26, -1, 2, 1, 0, 23, 54, 50, 35, 5800, 36, 26, -1, 2, 10, 180, 8, 1, 46, 1, 2, 45, 35, 5867, 10, 1716, 4, 17, 26, -1, 3, 30, 1, 10, 672, 8, 6, 16, 10, 3956, 24, -11, 46, 34, 10, 484, 4, -2, 10, 300, 4, 15, 10, 1600, 16, 20, 10, 2832, 24, -17, 31, 3, 22, -1, 5, 26, -1, 2, 1, 1, 46, 26, -1, 5, 30, 2, 26, -1, 2, 1, 0, 46, 10, 2740, 16, -1, 46, 34, 36, 30, 0, 26, 0, 62, 1, 2, 5, 36, 1, 0, 26, 32, 2, 30, 2, 10, 2672, 16, 6, 16, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 5899, 21, 1, 0, 30, 1, 26, -1, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 5918, 21, 30, 1, 10, 1764, 12, 4, 16, 40, 14, 0, 35, 5996, 6, 5933, 14, 0, 35, 5987, 22, -1, 2, 1, 5947, 20, 14, 0, 35, 5975, 30, 0, 17, 35, 22, -1, 0, 11, 1, 1, 2, 30, 0, 26, -1, 2, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 5974, 21, 30, 1, 10, 1764, 12, 4, 16, 40, 14, 0, 35, 5996, 10, 4092, 36, -20, 16, 14, 0, 35, 5996, 21, 1, 6007, 20, 22, -1, 30, 14, 0, 35, 6208, 30, 0, 17, 36, 36, 11, 1, 0, 1, 26, -1, 1, 1, 0, 45, 35, 6049, 26, 0, 25, 10, 680, 24, -13, 30, 2, 10, 3908, 12, 8, 16, 10, 0, 24, -3, 46, 34, 36, 14, 0, 35, 6198, 1, 6056, 20, 14, 0, 35, 6090, 30, 0, 17, 37, 22, -1, 0, 11, 1, 1, 2, 26, 36, 1, 26, -1, 2, 30, 2, 26, 0, 26, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 6089, 21, 10, 680, 24, -13, 30, 2, 10, 3908, 12, 8, 16, 10, 0, 24, -3, 46, 34, 36, 10, 2960, 4, 8, 10, 484, 4, -2, 10, 1228, 8, -18, 10, 1600, 16, 20, 10, 2832, 24, -17, 31, 2, 30, 2, 10, 3908, 12, 8, 16, 10, 2212, 12, -10, 46, 10, 2740, 16, -1, 46, 34, 36, 26, -1, 1, 1, 2, 45, 35, 6198, 10, 2960, 4, 8, 10, 484, 4, -2, 10, 3684, 4, 16, 10, 1600, 16, 20, 10, 2832, 24, -17, 31, 2, 30, 2, 10, 3908, 12, 8, 16, 10, 2212, 12, -10, 46, 10, 2740, 16, -1, 46, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 6207, 21, 10, 1644, 20, 19, 10, 2164, 4, 9, 10, 788, 20, 20, 10, 296, 4, -2, 10, 2436, 40, -18, 10, 756, 12, -17, 10, 3304, 60, -17, 10, 640, 4, 13, 31, 4, 22, -1, 31, 10, 1776, 20, 9, 10, 3420, 8, -16, 10, 4144, 12, 12, 10, 3480, 4, 14, 10, 1508, 20, 7, 10, 528, 8, -15, 31, 3, 22, -1, 32, 10, 2360, 16, -4, 10, 3980, 12, -16, 31, 1, 22, -1, 33, 10, 3896, 12, 14, 10, 1336, 12, -13, 10, 1948, 12, 12, 10, 1960, 4, -2, 31, 2, 22, -1, 34, 10, 872, 24, 19, 10, 1964, 8, 9, 31, 1, 22, -1, 35, 10, 2572, 44, -13, 1, 6332, 20, 14, 0, 35, 6475, 30, 0, 17, 38, 22, -1, 0, 11, 1, 1, 2, 42, 22, -1, 3, 26, 0, 31, 26, -1, 2, 46, 1, 0, 23, 54, 35, 6371, 26, 0, 31, 26, -1, 2, 46, 3, -1, 3, 36, 26, 0, 32, 26, -1, 2, 46, 1, 0, 23, 54, 35, 6395, 26, 0, 32, 26, -1, 2, 46, 3, -1, 3, 36, 26, 0, 33, 26, -1, 2, 46, 1, 0, 23, 54, 35, 6419, 26, 0, 33, 26, -1, 2, 46, 3, -1, 3, 36, 26, 0, 34, 26, -1, 2, 46, 1, 0, 23, 54, 35, 6443, 26, 0, 34, 26, -1, 2, 46, 3, -1, 3, 36, 26, 0, 35, 26, -1, 2, 46, 1, 0, 23, 54, 35, 6467, 26, 0, 35, 26, -1, 2, 46, 3, -1, 3, 36, 26, -1, 3, 14, 0, 35, 6474, 21, 10, 4084, 8, -3, 1, 6486, 20, 14, 0, 35, 6615, 30, 0, 17, 39, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 35, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 30, 0, 22, -1, 6, 1, 6524, 20, 14, 0, 35, 6610, 30, 0, 17, 40, 22, -1, 0, 11, 1, 1, 2, 26, 39, 6, 26, -1, 2, 30, 2, 26, 0, 4, 34, 3, 39, 5, 36, 26, 39, 5, 42, 45, 35, 6563, 8, 14, 0, 35, 6609, 26, 39, 5, 10, 1796, 28, -11, 46, 3, 39, 6, 36, 26, 39, 5, 10, 1420, 8, 0, 46, 3, 39, 5, 36, 26, 39, 5, 26, 39, 4, 30, 2, 26, 39, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 6609, 21, 14, 0, 35, 6614, 21, 10, 1280, 12, 17, 1, 6626, 20, 14, 0, 35, 6711, 30, 0, 17, 41, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 34, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 6659, 20, 14, 0, 35, 6706, 30, 0, 17, 42, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 2, 34, 3, 41, 5, 36, 26, 41, 5, 26, 41, 4, 30, 2, 26, 41, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 6705, 21, 14, 0, 35, 6710, 21, 10, 1236, 12, 5, 1, 6722, 20, 14, 0, 35, 6807, 30, 0, 17, 43, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 31, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 6755, 20, 14, 0, 35, 6802, 30, 0, 17, 44, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 3, 34, 3, 43, 5, 36, 26, 43, 5, 26, 43, 4, 30, 2, 26, 43, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 6801, 21, 14, 0, 35, 6806, 21, 10, 2360, 16, -4, 1, 6818, 20, 14, 0, 35, 6935, 30, 0, 17, 45, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 33, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 6851, 20, 14, 0, 35, 6930, 30, 0, 17, 46, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 1, 34, 3, 45, 5, 36, 1, 0, 22, -1, 3, 26, -1, 3, 26, 45, 5, 10, 180, 8, 1, 46, 37, 35, 6920, 26, 45, 5, 26, -1, 3, 46, 26, 45, 4, 30, 2, 26, 45, 3, 34, 36, 18, -1, 3, 0, 36, 14, 0, 35, 6880, 10, 4092, 36, -20, 16, 14, 0, 35, 6929, 21, 14, 0, 35, 6934, 21, 10, 3444, 36, -19, 1, 6946, 20, 14, 0, 35, 7031, 30, 0, 17, 47, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 32, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 6979, 20, 14, 0, 35, 7026, 30, 0, 17, 48, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 0, 34, 3, 47, 5, 36, 26, 47, 5, 26, 47, 4, 30, 2, 26, 47, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 7025, 21, 14, 0, 35, 7030, 21, 31, 6, 22, -1, 36, 1, 16, 22, -1, 37, 1, 15, 1, 1e3, 38, 22, -1, 38, 1, 7056, 20, 14, 0, 35, 7892, 30, 0, 17, 49, 22, -1, 0, 11, 4, 1, 2, 3, 4, 5, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 13, 10, 3092, 20, 8, 46, 10, 1428, 4, 9, 5, 36, 26, -1, 2, 1, 0, 23, 45, 35, 7124, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 3444, 36, -19, 46, 14, 0, 35, 7127, 26, -1, 2, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 3444, 36, -19, 5, 36, 26, -1, 4, 1, 0, 23, 45, 35, 7173, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1236, 12, 5, 46, 14, 0, 35, 7176, 26, -1, 4, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1236, 12, 5, 5, 36, 26, -1, 3, 1, 0, 23, 45, 35, 7222, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 2224, 8, 9, 46, 14, 0, 35, 7225, 26, -1, 3, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 2224, 8, 9, 5, 36, 26, -1, 5, 1, 0, 23, 45, 35, 7271, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1420, 8, 0, 46, 14, 0, 35, 7274, 26, -1, 5, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1420, 8, 0, 5, 36, 13, 10, 3492, 12, 21, 46, 10, 2308, 16, -6, 46, 14, 0, 45, 35, 7868, 10, 2508, 12, -5, 16, 10, 1824, 8, 13, 46, 30, 1, 0, 40, 22, -1, 6, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 3444, 36, -19, 46, 35, 7498, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1508, 20, 7, 30, 2, 26, 0, 36, 10, 3444, 36, -19, 46, 34, 10, 1508, 20, 7, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1776, 20, 9, 30, 2, 26, 0, 36, 10, 3444, 36, -19, 46, 34, 10, 1776, 20, 9, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 4144, 12, 12, 30, 2, 26, 0, 36, 10, 3444, 36, -19, 46, 34, 10, 4144, 12, 12, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2360, 16, -4, 30, 2, 26, 0, 36, 10, 2360, 16, -4, 46, 34, 10, 2360, 16, -4, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 2224, 8, 9, 46, 14, 1, 45, 35, 7597, 14, 1, 13, 10, 768, 20, -5, 46, 10, 3896, 12, 14, 30, 2, 26, 0, 36, 10, 1280, 12, 17, 46, 34, 10, 3896, 12, 14, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1948, 12, 12, 30, 2, 26, 0, 36, 10, 1280, 12, 17, 46, 34, 10, 1948, 12, 12, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1236, 12, 5, 46, 50, 35, 7648, 36, 10, 2508, 12, -5, 16, 10, 1824, 8, 13, 46, 10, 3304, 60, -17, 30, 2, 48, 10, 2376, 24, -10, 46, 10, 3600, 16, -7, 46, 34, 14, 1, 45, 35, 7767, 14, 1, 13, 10, 768, 20, -5, 46, 10, 3304, 60, -17, 30, 2, 26, 0, 36, 10, 1236, 12, 5, 46, 34, 10, 3304, 60, -17, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 788, 20, 20, 30, 2, 26, 0, 36, 10, 1236, 12, 5, 46, 34, 10, 788, 20, 20, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2436, 40, -18, 30, 2, 26, 0, 36, 10, 1236, 12, 5, 46, 34, 10, 2436, 40, -18, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1420, 8, 0, 46, 50, 35, 7813, 36, 10, 3908, 12, 8, 16, 10, 872, 24, 19, 30, 2, 48, 10, 2376, 24, -10, 46, 10, 3600, 16, -7, 46, 34, 14, 1, 45, 35, 7854, 14, 1, 13, 10, 768, 20, -5, 46, 10, 872, 24, 19, 30, 2, 26, 0, 36, 10, 4084, 8, -3, 46, 34, 10, 872, 24, 19, 30, 3, 26, -1, 6, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 3492, 12, 21, 46, 10, 2308, 16, -6, 5, 36, 14, 1, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 7891, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 104, 16, 6, 5, 36, 1, 7913, 20, 14, 0, 35, 7947, 30, 0, 17, 50, 22, -1, 0, 11, 0, 1, 14, 0, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 7946, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 1528, 24, -14, 5, 36, 1, 7968, 20, 14, 0, 35, 7994, 30, 0, 17, 51, 22, -1, 0, 11, 0, 1, 13, 10, 3492, 12, 21, 46, 10, 4268, 16, -10, 46, 14, 0, 35, 7993, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 856, 8, -1, 5, 36, 1, 8015, 20, 14, 0, 35, 8180, 30, 0, 17, 52, 22, -1, 0, 11, 0, 1, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 30, 1, 10, 3616, 8, 11, 16, 10, 2224, 8, 9, 46, 34, 22, -1, 2, 26, -1, 2, 10, 180, 8, 1, 46, 22, -1, 3, 1, 0, 22, -1, 4, 26, -1, 4, 26, -1, 3, 37, 35, 8169, 26, -1, 2, 26, -1, 4, 46, 22, -1, 5, 30, 0, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 5, 46, 10, 2528, 20, 9, 46, 34, 13, 10, 3092, 20, 8, 46, 26, -1, 5, 5, 36, 30, 0, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 5, 46, 10, 408, 36, -15, 46, 34, 13, 10, 3092, 20, 8, 46, 26, -1, 5, 10, 748, 8, 8, 32, 5, 36, 18, -1, 4, 0, 36, 14, 0, 35, 8068, 13, 10, 3092, 20, 8, 46, 14, 0, 35, 8179, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 2528, 20, 9, 5, 36, 1, 8201, 20, 14, 0, 35, 8237, 30, 0, 17, 53, 22, -1, 0, 11, 2, 1, 2, 3, 26, -1, 3, 13, 10, 3092, 20, 8, 46, 26, -1, 2, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 8236, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 304, 32, -17, 5, 36, 1, 8258, 20, 14, 0, 35, 8301, 30, 0, 17, 54, 22, -1, 0, 11, 0, 1, 31, 0, 13, 10, 3092, 20, 8, 5, 36, 31, 0, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 8300, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 24, 12, -5, 5, 36, 1, 8322, 20, 14, 0, 35, 8360, 30, 0, 17, 55, 22, -1, 0, 11, 2, 1, 2, 3, 26, -1, 3, 26, -1, 2, 30, 2, 13, 10, 768, 20, -5, 46, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 8359, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 208, 24, -6, 5, 36, 1, 8381, 20, 14, 0, 35, 8555, 30, 0, 17, 56, 22, -1, 0, 11, 2, 1, 2, 3, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 46, 14, 0, 45, 35, 8414, 8, 14, 0, 35, 8554, 33, 8525, 26, -1, 3, 10, 180, 8, 1, 46, 1, 1, 53, 22, -1, 4, 26, -1, 3, 26, -1, 4, 46, 22, -1, 5, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 46, 47, 35, 8489, 26, 0, 38, 26, 0, 37, 30, 2, 25, 10, 4240, 24, -11, 46, 40, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 5, 36, 26, -1, 3, 26, -1, 5, 30, 2, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 46, 10, 2292, 8, 9, 46, 34, 36, 6, 8521, 14, 0, 35, 8545, 22, -1, 6, 26, -1, 6, 10, 1420, 8, 0, 30, 2, 25, 10, 468, 16, -5, 46, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 8554, 21, 26, -1, 5, 10, 536, 44, -15, 46, 10, 768, 20, -5, 5, 36, 30, 0, 26, -1, 5, 40, 22, -1, 39, 26, -1, 39, 22, -1, 40, 1, 1, 22, -1, 41, 1, 2, 22, -1, 42, 10, 848, 8, -15, 1, 8, 10, 2400, 8, 1, 1, 7, 10, 4220, 12, 21, 1, 6, 10, 1576, 4, 2, 1, 5, 10, 3484, 8, -1, 1, 4, 10, 4312, 12, -7, 1, 3, 10, 1664, 8, 5, 1, 2, 10, 624, 16, -4, 1, 1, 10, 384, 8, 0, 1, 0, 31, 9, 22, -1, 43, 31, 0, 22, -1, 44, 10, 3388, 12, 12, 10, 1488, 8, -21, 1, 62, 10, 2980, 8, -16, 1, 61, 10, 904, 8, -3, 1, 60, 31, 3, 10, 604, 8, 13, 10, 2548, 24, 17, 1, 53, 10, 1312, 24, 11, 1, 52, 10, 2232, 8, -5, 1, 51, 10, 604, 8, 13, 1, 50, 31, 4, 10, 276, 20, -18, 10, 2116, 12, 2, 1, 41, 10, 2008, 8, -3, 1, 40, 31, 2, 10, 2936, 12, 12, 10, 2816, 16, -16, 1, 30, 31, 1, 10, 2880, 8, -7, 10, 2980, 8, -16, 1, 21, 10, 904, 8, -3, 1, 20, 31, 2, 10, 3920, 12, -9, 10, 3880, 16, 20, 1, 13, 10, 1488, 8, -21, 1, 12, 10, 2980, 8, -16, 1, 11, 10, 904, 8, -3, 1, 10, 31, 4, 10, 3712, 12, 8, 10, 1552, 16, -18, 1, 3, 10, 1488, 8, -21, 1, 2, 10, 176, 4, -20, 1, 1, 10, 1496, 12, -7, 1, 0, 31, 4, 31, 7, 22, -1, 45, 10, 1644, 20, 19, 26, -1, 45, 10, 3712, 12, 8, 46, 10, 1552, 16, -18, 46, 10, 788, 20, 20, 26, -1, 45, 10, 3712, 12, 8, 46, 10, 1488, 8, -21, 46, 10, 2436, 40, -18, 26, -1, 45, 10, 3712, 12, 8, 46, 10, 176, 4, -20, 46, 10, 3304, 60, -17, 26, -1, 45, 10, 3712, 12, 8, 46, 10, 1496, 12, -7, 46, 31, 4, 22, -1, 46, 10, 2860, 20, -10, 26, -1, 45, 10, 3920, 12, -9, 46, 10, 3880, 16, 20, 46, 10, 1776, 20, 9, 26, -1, 45, 10, 3920, 12, -9, 46, 10, 1488, 8, -21, 46, 10, 4144, 12, 12, 26, -1, 45, 10, 3920, 12, -9, 46, 10, 2980, 8, -16, 46, 10, 1508, 20, 7, 26, -1, 45, 10, 3920, 12, -9, 46, 10, 904, 8, -3, 46, 31, 4, 22, -1, 47, 10, 3896, 12, 14, 26, -1, 45, 10, 2880, 8, -7, 46, 10, 2980, 8, -16, 46, 10, 1948, 12, 12, 26, -1, 45, 10, 2880, 8, -7, 46, 10, 904, 8, -3, 46, 31, 2, 22, -1, 48, 10, 4232, 8, 5, 26, -1, 45, 10, 2936, 12, 12, 46, 10, 2816, 16, -16, 46, 31, 1, 22, -1, 49, 10, 2968, 12, -8, 26, -1, 45, 10, 276, 20, -18, 46, 10, 2116, 12, 2, 46, 10, 1672, 28, -17, 26, -1, 45, 10, 276, 20, -18, 46, 10, 2008, 8, -3, 46, 31, 2, 22, -1, 50, 10, 36, 24, 17, 26, -1, 45, 10, 604, 8, 13, 46, 10, 2548, 24, 17, 46, 10, 3804, 16, -1, 26, -1, 45, 10, 604, 8, 13, 46, 10, 1312, 24, 11, 46, 10, 2176, 20, -14, 26, -1, 45, 10, 604, 8, 13, 46, 10, 2232, 8, -5, 46, 10, 444, 8, -4, 26, -1, 45, 10, 604, 8, 13, 46, 10, 604, 8, 13, 46, 31, 4, 22, -1, 51, 10, 2360, 16, -4, 26, -1, 45, 10, 3388, 12, 12, 46, 10, 1488, 8, -21, 46, 10, 2128, 36, -12, 26, -1, 45, 10, 3388, 12, 12, 46, 10, 2980, 8, -16, 46, 10, 1452, 20, 5, 26, -1, 45, 10, 3388, 12, 12, 46, 10, 904, 8, -3, 46, 31, 3, 22, -1, 52, 10, 1720, 16, -9, 1, 9211, 20, 14, 0, 35, 9296, 30, 0, 17, 57, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 52, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 9244, 20, 14, 0, 35, 9291, 30, 0, 17, 58, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 18, 34, 3, 57, 5, 36, 26, 57, 5, 26, 57, 4, 30, 2, 26, 57, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9290, 21, 14, 0, 35, 9295, 21, 10, 4232, 8, 5, 1, 9307, 20, 14, 0, 35, 9387, 30, 0, 17, 59, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 49, 26, -1, 2, 46, 22, -1, 4, 1, 9336, 20, 14, 0, 35, 9382, 30, 0, 17, 60, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 17, 34, 22, -1, 3, 26, -1, 3, 26, 59, 4, 30, 2, 26, 59, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9381, 21, 14, 0, 35, 9386, 21, 10, 60, 44, -20, 1, 9398, 20, 14, 0, 35, 9478, 30, 0, 17, 61, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 50, 26, -1, 2, 46, 22, -1, 4, 1, 9427, 20, 14, 0, 35, 9473, 30, 0, 17, 62, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 16, 34, 22, -1, 3, 26, -1, 3, 26, 61, 4, 30, 2, 26, 61, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9472, 21, 14, 0, 35, 9477, 21, 10, 444, 8, -4, 1, 9489, 20, 14, 0, 35, 9574, 30, 0, 17, 63, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 51, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 9522, 20, 14, 0, 35, 9569, 30, 0, 17, 64, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 15, 34, 3, 63, 5, 36, 26, 63, 5, 26, 63, 4, 30, 2, 26, 63, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9568, 21, 14, 0, 35, 9573, 21, 10, 1280, 12, 17, 1, 9585, 20, 14, 0, 35, 9670, 30, 0, 17, 65, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 48, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 9618, 20, 14, 0, 35, 9665, 30, 0, 17, 66, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 13, 34, 3, 65, 5, 36, 26, 65, 5, 26, 65, 4, 30, 2, 26, 65, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9664, 21, 14, 0, 35, 9669, 21, 10, 1236, 12, 5, 1, 9681, 20, 14, 0, 35, 9766, 30, 0, 17, 67, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 46, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 9714, 20, 14, 0, 35, 9761, 30, 0, 17, 68, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 14, 34, 3, 67, 5, 36, 26, 67, 5, 26, 67, 4, 30, 2, 26, 67, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9760, 21, 14, 0, 35, 9765, 21, 10, 3444, 36, -19, 1, 9777, 20, 14, 0, 35, 9862, 30, 0, 17, 69, 22, -1, 0, 11, 2, 1, 2, 3, 26, 0, 47, 26, -1, 2, 46, 22, -1, 4, 42, 22, -1, 5, 1, 9810, 20, 14, 0, 35, 9857, 30, 0, 17, 70, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 12, 34, 3, 69, 5, 36, 26, 69, 5, 26, 69, 4, 30, 2, 26, 69, 3, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 9856, 21, 14, 0, 35, 9861, 21, 31, 7, 22, -1, 53, 10, 2688, 16, 2, 1, 1, 1, 7, 52, 10, 3660, 24, -17, 1, 1, 1, 6, 52, 10, 2704, 20, 21, 1, 1, 1, 5, 52, 10, 2724, 16, 8, 1, 1, 1, 4, 52, 10, 1436, 16, 18, 1, 1, 1, 3, 52, 10, 4128, 16, 3, 1, 1, 1, 2, 52, 10, 3572, 20, 14, 1, 1, 1, 1, 52, 10, 3832, 16, 10, 1, 1, 1, 0, 52, 31, 8, 22, -1, 54, 10, 2116, 12, 2, 1, 1, 10, 2008, 8, -3, 1, 0, 31, 2, 22, -1, 55, 1, 16, 22, -1, 56, 1, 150, 1, 1e3, 38, 22, -1, 57, 10, 276, 20, -18, 1, 1, 1, 5, 52, 10, 2936, 12, 12, 1, 1, 1, 4, 52, 10, 604, 8, 13, 1, 1, 1, 3, 52, 10, 3712, 12, 8, 1, 1, 1, 2, 52, 10, 1412, 8, -5, 1, 1, 1, 1, 52, 10, 3388, 12, 12, 1, 1, 1, 0, 52, 31, 6, 22, -1, 58, 1, 10040, 20, 14, 0, 35, 10186, 30, 0, 17, 71, 22, -1, 0, 11, 0, 1, 31, 0, 22, -1, 2, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 30, 1, 10, 3616, 8, 11, 16, 10, 2224, 8, 9, 46, 34, 22, -1, 3, 1, 0, 22, -1, 4, 26, -1, 4, 26, -1, 3, 10, 180, 8, 1, 46, 37, 35, 10178, 26, -1, 3, 26, -1, 4, 46, 22, -1, 5, 26, -1, 5, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 46, 39, 35, 10169, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 46, 26, -1, 5, 46, 22, -1, 6, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 26, -1, 5, 46, 26, -1, 2, 26, -1, 6, 5, 36, 18, -1, 4, 0, 36, 14, 0, 35, 10087, 26, -1, 2, 14, 0, 35, 10185, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 4156, 48, -9, 5, 36, 1, 10207, 20, 14, 0, 35, 10361, 30, 0, 17, 72, 22, -1, 0, 11, 1, 1, 2, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 47, 35, 10246, 31, 0, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 5, 36, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 46, 47, 35, 10288, 31, 0, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 5, 36, 1, 0, 13, 10, 3492, 12, 21, 46, 10, 4060, 24, 19, 5, 36, 10, 2892, 44, 13, 30, 1, 26, -1, 2, 10, 3140, 40, 21, 46, 34, 22, -1, 3, 1, 0, 22, -1, 4, 26, -1, 4, 26, -1, 3, 10, 180, 8, 1, 46, 37, 35, 10351, 26, -1, 3, 26, -1, 4, 46, 30, 1, 13, 10, 3056, 36, 7, 46, 34, 36, 18, -1, 4, 0, 36, 14, 0, 35, 10311, 10, 4092, 36, -20, 16, 14, 0, 35, 10360, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 2016, 88, -16, 5, 36, 1, 10382, 20, 14, 0, 35, 10505, 30, 0, 17, 73, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 30, 1, 26, 0, 6, 34, 22, -1, 3, 26, -1, 3, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 39, 47, 35, 10495, 26, -1, 2, 30, 1, 26, 0, 9, 34, 22, -1, 4, 26, -1, 4, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 26, -1, 3, 5, 36, 13, 10, 3492, 12, 21, 46, 10, 4060, 24, 19, 46, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 46, 26, -1, 3, 5, 36, 1, 1, 13, 10, 3492, 12, 21, 46, 10, 4060, 24, 19, 43, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 10504, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 3056, 36, 7, 5, 36, 1, 10526, 20, 14, 0, 35, 11600, 30, 0, 17, 74, 22, -1, 0, 11, 1, 1, 2, 26, -1, 2, 50, 47, 35, 10547, 36, 31, 0, 3, -1, 2, 36, 10, 60, 44, -20, 26, -1, 2, 10, 60, 44, -20, 46, 14, 0, 54, 10, 4232, 8, 5, 26, -1, 2, 10, 4232, 8, 5, 46, 14, 0, 54, 10, 444, 8, -4, 26, -1, 2, 10, 444, 8, -4, 46, 14, 0, 54, 10, 1236, 12, 5, 26, -1, 2, 10, 1236, 12, 5, 46, 14, 0, 54, 10, 2224, 8, 9, 26, -1, 2, 10, 2224, 8, 9, 46, 14, 0, 54, 10, 1720, 16, -9, 26, -1, 2, 10, 1720, 16, -9, 46, 14, 0, 54, 31, 6, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 5, 36, 30, 0, 10, 1636, 8, 3, 16, 10, 2616, 8, 14, 46, 34, 13, 10, 3492, 12, 21, 46, 10, 1700, 16, 2, 5, 36, 13, 10, 3492, 12, 21, 46, 10, 2308, 16, -6, 46, 14, 0, 45, 35, 11576, 10, 2508, 12, -5, 16, 10, 1824, 8, 13, 46, 30, 1, 0, 40, 22, -1, 3, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1720, 16, -9, 46, 35, 11004, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1452, 20, 5, 30, 2, 26, 0, 53, 10, 1720, 16, -9, 46, 34, 10, 1452, 20, 5, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2360, 16, -4, 30, 2, 26, 0, 53, 10, 1720, 16, -9, 46, 34, 10, 2360, 16, -4, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2128, 36, -12, 30, 2, 26, 0, 53, 10, 1720, 16, -9, 46, 34, 10, 2128, 36, -12, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1508, 20, 7, 30, 2, 26, 0, 53, 10, 3444, 36, -19, 46, 34, 10, 1508, 20, 7, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1776, 20, 9, 30, 2, 26, 0, 53, 10, 3444, 36, -19, 46, 34, 10, 1776, 20, 9, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 4144, 12, 12, 30, 2, 26, 0, 53, 10, 3444, 36, -19, 46, 34, 10, 4144, 12, 12, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2860, 20, -10, 30, 2, 26, 0, 53, 10, 3444, 36, -19, 46, 34, 10, 2196, 16, -15, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 2224, 8, 9, 46, 35, 11100, 14, 1, 13, 10, 768, 20, -5, 46, 10, 3896, 12, 14, 30, 2, 26, 0, 53, 10, 1280, 12, 17, 46, 34, 10, 3896, 12, 14, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1948, 12, 12, 30, 2, 26, 0, 53, 10, 1280, 12, 17, 46, 34, 10, 1948, 12, 12, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 1236, 12, 5, 46, 35, 11235, 14, 1, 13, 10, 768, 20, -5, 46, 10, 3304, 60, -17, 30, 2, 26, 0, 53, 10, 1236, 12, 5, 46, 34, 10, 3304, 60, -17, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 788, 20, 20, 30, 2, 26, 0, 53, 10, 1236, 12, 5, 46, 34, 10, 788, 20, 20, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2436, 40, -18, 30, 2, 26, 0, 53, 10, 1236, 12, 5, 46, 34, 10, 2436, 40, -18, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 60, 44, -20, 46, 35, 11331, 14, 1, 13, 10, 768, 20, -5, 46, 10, 1672, 28, -17, 30, 2, 26, 0, 53, 10, 60, 44, -20, 46, 34, 10, 1672, 28, -17, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2968, 12, -8, 30, 2, 26, 0, 53, 10, 60, 44, -20, 46, 34, 10, 2968, 12, -8, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 4232, 8, 5, 46, 35, 11388, 14, 1, 13, 10, 768, 20, -5, 46, 10, 4232, 8, 5, 30, 2, 26, 0, 53, 10, 4232, 8, 5, 46, 34, 10, 4232, 8, 5, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 10, 444, 8, -4, 46, 35, 11562, 14, 1, 13, 10, 768, 20, -5, 46, 10, 444, 8, -4, 30, 2, 26, 0, 53, 10, 444, 8, -4, 46, 34, 10, 444, 8, -4, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 2176, 20, -14, 30, 2, 26, 0, 53, 10, 444, 8, -4, 46, 34, 10, 2176, 20, -14, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 3804, 16, -1, 30, 2, 26, 0, 53, 10, 444, 8, -4, 46, 34, 10, 3804, 16, -1, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 768, 20, -5, 46, 10, 36, 24, 17, 30, 2, 26, 0, 53, 10, 444, 8, -4, 46, 34, 10, 36, 24, 17, 30, 3, 26, -1, 3, 10, 0, 24, -3, 46, 34, 36, 14, 1, 13, 10, 3492, 12, 21, 46, 10, 2308, 16, -6, 5, 36, 14, 1, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 11599, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 104, 16, 6, 5, 36, 1, 11621, 20, 14, 0, 35, 11678, 30, 0, 17, 75, 22, -1, 0, 11, 0, 1, 13, 10, 4204, 16, 15, 46, 35, 11654, 30, 0, 13, 10, 4204, 16, 15, 46, 10, 2656, 16, -3, 46, 34, 36, 14, 0, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 11677, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 1528, 24, -14, 5, 36, 1, 11699, 20, 14, 0, 35, 11855, 30, 0, 17, 76, 22, -1, 0, 11, 0, 1, 31, 0, 22, -1, 2, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 30, 1, 10, 3616, 8, 11, 16, 10, 2224, 8, 9, 46, 34, 22, -1, 3, 26, -1, 3, 10, 180, 8, 1, 46, 22, -1, 4, 1, 0, 22, -1, 5, 26, -1, 5, 26, -1, 4, 37, 35, 11816, 26, -1, 3, 26, -1, 5, 46, 22, -1, 6, 30, 0, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 6, 46, 10, 2528, 20, 9, 46, 34, 26, -1, 2, 26, -1, 6, 5, 36, 18, -1, 5, 0, 36, 14, 0, 35, 11757, 13, 10, 3492, 12, 21, 46, 10, 1700, 16, 2, 46, 30, 0, 13, 10, 4156, 48, -9, 46, 34, 26, -1, 2, 30, 0, 13, 10, 3736, 36, 2, 46, 34, 30, 4, 14, 0, 35, 11854, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 2528, 20, 9, 5, 36, 1, 11876, 20, 14, 0, 35, 11912, 30, 0, 17, 77, 22, -1, 0, 11, 2, 1, 2, 3, 26, -1, 3, 13, 10, 3092, 20, 8, 46, 26, -1, 2, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 11911, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 304, 32, -17, 5, 36, 1, 11933, 20, 14, 0, 35, 11976, 30, 0, 17, 78, 22, -1, 0, 11, 0, 1, 31, 0, 13, 10, 3092, 20, 8, 5, 36, 31, 0, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 5, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 11975, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 24, 12, -5, 5, 36, 1, 11997, 20, 14, 0, 35, 12446, 30, 0, 17, 79, 22, -1, 0, 11, 2, 1, 2, 3, 13, 10, 3492, 12, 21, 46, 10, 3528, 44, -18, 46, 14, 0, 45, 35, 12030, 8, 14, 0, 35, 12445, 33, 12416, 1, 10, 26, -1, 2, 30, 2, 10, 2260, 16, -10, 16, 34, 3, -1, 2, 36, 26, -1, 3, 10, 180, 8, 1, 46, 1, 1, 53, 22, -1, 4, 26, -1, 3, 26, -1, 4, 46, 22, -1, 5, 26, -1, 3, 26, -1, 3, 10, 180, 8, 1, 46, 1, 2, 53, 46, 22, -1, 6, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 46, 47, 35, 12140, 26, 0, 57, 26, 0, 56, 30, 2, 29, 10, 4240, 24, -11, 46, 40, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 5, 36, 26, -1, 2, 26, 0, 45, 10, 2936, 12, 12, 46, 10, 2816, 16, -16, 46, 9, 50, 35, 12178, 36, 26, -1, 2, 26, 0, 45, 10, 276, 20, -18, 46, 10, 2008, 8, -3, 46, 37, 35, 12238, 26, -1, 3, 1, 2, 46, 22, -1, 7, 26, -1, 7, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 26, -1, 6, 5, 36, 26, -1, 3, 1, 4, 46, 26, -1, 3, 1, 3, 46, 26, -1, 3, 1, 1, 46, 26, -1, 3, 1, 0, 46, 30, 4, 3, -1, 3, 36, 26, -1, 3, 10, 180, 8, 1, 46, 1, 1, 53, 3, -1, 4, 36, 26, -1, 3, 26, -1, 4, 46, 13, 10, 3492, 12, 21, 46, 10, 1700, 16, 2, 46, 53, 26, -1, 3, 26, -1, 4, 5, 36, 26, -1, 3, 10, 180, 8, 1, 46, 1, 2, 53, 22, -1, 8, 13, 10, 3492, 12, 21, 46, 10, 1580, 20, 9, 46, 26, -1, 6, 46, 22, -1, 9, 26, -1, 9, 26, -1, 3, 26, -1, 8, 5, 36, 13, 10, 3492, 12, 21, 46, 10, 2888, 4, -8, 46, 26, -1, 6, 46, 22, -1, 10, 26, -1, 10, 47, 35, 12352, 8, 14, 0, 35, 12445, 26, -1, 10, 1, 0, 46, 22, -1, 11, 26, -1, 11, 26, 0, 43, 10, 2400, 8, 1, 46, 45, 35, 12380, 8, 14, 0, 35, 12445, 26, -1, 3, 26, -1, 5, 30, 2, 13, 10, 3492, 12, 21, 46, 10, 452, 16, 1, 46, 26, -1, 2, 46, 10, 2292, 8, 9, 46, 34, 36, 6, 12412, 14, 0, 35, 12436, 22, -1, 12, 26, -1, 12, 10, 2276, 16, -7, 30, 2, 29, 10, 468, 16, -5, 46, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 12445, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 768, 20, -5, 5, 36, 1, 12467, 20, 14, 0, 35, 12505, 30, 0, 17, 80, 22, -1, 0, 11, 2, 1, 2, 3, 26, -1, 3, 26, -1, 2, 30, 2, 13, 10, 768, 20, -5, 46, 34, 36, 10, 4092, 36, -20, 16, 14, 0, 35, 12504, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 3240, 24, -10, 5, 36, 1, 12526, 20, 14, 0, 35, 12695, 30, 0, 17, 81, 22, -1, 0, 11, 0, 1, 1, 0, 22, -1, 2, 13, 10, 3492, 12, 21, 46, 10, 104, 16, 6, 46, 22, -1, 3, 26, -1, 3, 10, 1720, 16, -9, 46, 35, 12577, 26, 0, 58, 10, 3388, 12, 12, 46, 51, -1, 2, 36, 26, -1, 3, 10, 2224, 8, 9, 46, 35, 12599, 26, 0, 58, 10, 1412, 8, -5, 46, 51, -1, 2, 36, 26, -1, 3, 10, 1236, 12, 5, 46, 35, 12621, 26, 0, 58, 10, 3712, 12, 8, 46, 51, -1, 2, 36, 26, -1, 3, 10, 444, 8, -4, 46, 35, 12643, 26, 0, 58, 10, 604, 8, 13, 46, 51, -1, 2, 36, 26, -1, 3, 10, 4232, 8, 5, 46, 35, 12665, 26, 0, 58, 10, 2936, 12, 12, 46, 51, -1, 2, 36, 26, -1, 3, 10, 60, 44, -20, 46, 35, 12687, 26, 0, 58, 10, 276, 20, -18, 46, 51, -1, 2, 36, 26, -1, 2, 14, 0, 35, 12694, 21, 26, -1, 19, 10, 536, 44, -15, 46, 10, 3736, 36, 2, 5, 36, 30, 0, 26, -1, 19, 40, 22, -1, 59, 10, 932, 296, -12, 1, 1, 27, 30, 0, 26, -1, 23, 34, 30, 0, 26, -1, 22, 34, 30, 0, 26, -1, 21, 34, 1, 1, 27, 30, 6, 22, -1, 60, 1, 12758, 20, 14, 0, 35, 12773, 30, 0, 17, 82, 36, 11, 0, 0, 30, 0, 26, 0, 24, 34, 21, 42, 42, 42, 1, 12783, 20, 14, 0, 35, 12798, 30, 0, 17, 83, 36, 11, 0, 0, 30, 0, 26, 0, 20, 34, 21, 30, 5, 22, -1, 61, 30, 0, 1, 0, 23, 30, 0, 30, 3, 22, -1, 62, 26, -1, 59, 10, 2432, 4, 12, 19, 26, -1, 40, 10, 4264, 4, -6, 19, 26, -1, 29, 10, 2256, 4, 6, 19, 26, -1, 30, 10, 3112, 12, -7, 19, 26, -1, 29, 10, 3632, 20, -4, 19],
                _Q4f4Fpw: atob("WkdkblNIbG9jWGRQYkhaM2FIRm9kUT09ZDJwNGFubEpabmxtSlRWREpUVkZaR0pVSlRWQ1ZGQmxWQT09ZHlWRE1pVTRNQ1UzUkNWRE1pVTROSFlsUXpJbE9ETjFKVU15SlRnMmVBPT1iRjhsTlVScGJDVTFSUT09SlRZd1lsVmpZMlZpVlE9PVoyUjNaSFpvZHc9PUpVTXlKVGcyY3lWRE1pVTROSGwzSlVNeUpUZzJXV0pZYTJSdFpuTm5VU1UxUkZaVlRuVnVkbTUzSlRkRWFXOTRhVWdsTjBKc2JGWWxOMEo1Ymc9PWNuUjBkaVUzUkhZbFF6SWxPRE55SlVNeUpUZzFlaVZETWlVNE1DVTNSZz09VlNVMVJTVTFRbUpVWVZOa1ZnPT1kbTg9VlE9PUpVTXlKVGcwZGlWRE1pVTROVlZ5SlVNeUpUZzFjZz09WkdGbkpUWXdWZz09SlRORlNrTkNKVE5HWkdacmFpVXpRbUlsTlVKakpUVkNaR289UlUxQlNVdz1KVU15SlRneGVuZHhjdz09ZG5RbFF6SWxPRE1sTlVOMGNDVTNSRjkwSlVNeUpUZ3hlSDV6YW5ObmVYYz1jMmhzWkVGMFpXVmtjWEk9ZUdwemVYZCtTbmQzZEhjPWRnPT1KVGRDZUNVM1JHb2xOMFJ5ZUhjbE5VSnFKVGRFYmc9PVpsY2xOVVU9SlRkRGN3PT1KVGRHSlVNeUpUZ3hmaVZETWlVNE0zNGxReklsT0RNbFF6SWxPRGdsTjBaMGFuUkVjRzkxWm05MVJtVnFkV0pqYldZPU9VSTJTRVk9WWxwcFZpVTBNRnB1VkVWWFZ5VTFRbE5XU0E9PVoyWT1VaVUxUWxCaVlnPT1jU1UxUldSTEpUVkZhbUk9UkUxSlNBPT1lbklsUXpJbE9EQWxReklsT0RCdWRIST1UbXdsTjBKK1YzcHVkZz09VW1OU0pUVkNZVEFsTlVNbE5VTmZVU1UyTUE9PUpUSTFaV2c9SlVNeUpUZzFkZz09WkhkcWFIUjNhVW9sTjBKcWMzaz1KVFl3SlRWQ1lVOVVXU1UxUW1KUlVVOGxOVVVsTWtaWUpUVkZKVFZEVTA4bE5VUWxNa05qSlRORlkxcFBZMVJpWXc9PWRXcHVaZz09ZVd0bmVHbHVVVkpqVmxCU1dpVTFRMkZXSlRWREpUVkNaMlFsTlVVPVIxSmFVUT09V2lVMVJGRlBZbGNsTlVRbE5VTT1KVU15SlRnMmNTVTNRM0IyZG5nbFF6SWxPRFJUUVdNbE0wWlRZbmxaVkcwbE0wWWxReklsT0ROQ0pUTkVZU1ZETWlVNE5WY2xOMFpsVlhsbVZuNVhKVU15SlRnMEpVTXlKVGd5SlRWQ2VsTlNKVE5GV0hrbFF6SWxPREIwSlRWRUpUVkZkbVJsZDJGaldpVXpRbmx0WlU4bFF6SWxPREI2SlRORlJIcG1KVU15SlRnMUpVTXlKVGcyV2xWMUpVTXlKVGcxZFg1NkpVTXlKVGcyZDE5V0pUUXdVbUZYSlRkRUpVTXlKVGd6WkVKMlQza2xReklsT0RSUFkzY2xNMFpEVW5FM1R5VXpSRm9sTkRBbFF6SWxPRFJqSlRkRWVDVTFSQ1V6UTBrPUpVTXlKVGcwYjJwd0pUVkZZdz09UkdObGJYVnlZMlZuYW5Od2QybDJhSGxyUzJnbE4wSm9XbFJvWDJGVVltST1ZVlJwSlRWRFdsUm5KVFZEWW1FPVFrUktTQ1V6UVNVelFVTkpKVE5CUnc9PWVDVkRNaVU0TWc9PUoyST1ZMWhsV1dKbEpUWXdWR0ZXV0E9PVFsWnBKVFZFUWc9PWNteDRlR3c9Y3lVM1EzbDFmaVZETWlVNE5HZz1VRW9sTlVWWWJXOTBhVzl1YW1zPUpUZEVKVE5DTTBJbE1rWk5PVE5IYTJwa2FXOGxOakJ0WDJweWFRPT1KVFl3YjJnbE5VUnVZMmxvWW1ScldnPT1XaVUxUWtoWkpUVkNabWh1YkNVMVJTVTFSR2h3Wnc9PUpVTXlKVGd4SlVNeUpUZ3lKVGRFZmc9PVZWTWxOakJWVnlVMVJRPT1KVFZEWWxkcVVrTktKVFZFWkZaZldHcGZWbVJZWnc9PVh5VTFRbUVsTlVWUFVRPT1kR1YyYVhKNFVuTm9hUT09Y21NPVFTVTFSWEZpWVNVMVEySlFWVkJPSlRWQ1VGSlpUeVUwTUZOUGRDVkRNaVU0TUNWRE1pVTRNU1ZETWlVNFFRPT1jR05oYlhCaVVtZHJZdz09WHc9PWVYaHlkeVUzUkc0bE4wST1lSElsUXpJbE9EWWxOVUlsUXpJbE9ESjZabUpuVEc1cmFXVnZZUT09Wkdac2FpVTFRMlJtYlNVMVF3PT1KVGRDSlRkRWNDVkRNaVU0TVhoNkpUZEdkSHA1VldKWGJBPT1ibTFuYkhKamNGSjNibU09VjNnbE4wWjRKVU15SlRnM2VBPT1YMUFsTlVWZkpUVkNXV2czWTFVbE5qQlpaMWRaV0RscVdXSm9adz09YzNScGFsTm1jbW89VjFWa01XUmtZbGxTWldSVkpUWXdaU1UxUTFFPVgxbHRXR05yWWc9PWJXWT1KVFZDWkE9PWNuZHdKVGRFZG5SelkzNGxReklsT0RSeWQzUWxReklsT0RJPVJsSlRKVFZESlVNeUpUZ3djU1ZETWlVNE1pVkRNaVU0TTNVbE5VVjFKVU15SlRnM1ZpVTNSaVZETWlVNE1pVTNSRlVsTjBOMUpUZEVkWDRsUXpJbE9EUWxReklsT0RNPUpUVkRZVmRZYTBKWlRpVXpSbEZTUXc9PUpUZERKVGRDZFhvbFF6SWxPREJ4ZmlWRE1pVTRNU1UzUXc9PWExbz1iMndsTjBac2NIb2xReklsT0RNbFF6SWxPREE9YzNFbE4wSnlKVGRDZUhKNmVtc2xOME52ZUg0PVlpVTFRM0JxUjFGYVZ3PT1aMkpqYkhKblpHZGpjQT09YlE9PWVtc2xOME1sTjBSdlUzaCtTVkJVZGlVM1FuQjJkUT09WjJ4cVh3PT1iblZ0WW1WeWIzUnZlbGhyYVhWNGFnPT1KVGRDZFNWRE1pVTRPUT09WldRbE5VVmphVnBuSlRORldRPT1kSE50Y25ocGRuRnplbWs9VENVM1Eza2xReklsT0RFbE4wUnZKVGREVGxOSFJGRT1ibmtsUXpJbE9ERlljaVZETWlVNE5nPT1WZz09SlVNeUpUZzJKVU15SlRneEpVTXlKVGczZFhwM0pVTXlKVGd3ZGc9PVZXWmtKVFZGSlRORVYycz1aMXBtYWlVMVJXZGFXUT09YVhSb2VuSnFjM2s9SlVNeUpUZ3lKVFZGSlRWRGF5VXpRbGhyV0E9PUpUTkRKVE5GUkVJMEpUTkNOREJGTkE9PWRISWxReklsT0RGU0pVTXlKVGd6Y2lVM1FpVkRNaVU0TVZBbE4wTnhjZz09SlRZd1lXaz1aMWtsTmpCWlYyZ2xOVVJqWWtkb1ZXWm9aRzVoWWc9PVoyeDJabkp4Y1dobWR3PT1iVjl1VG1OblgybHZiZz09UVNVelJrNVJKVFZFU1VOWEpUSkdNRGN3SlROR01FbzJNRVE9VERrbE0wRlhReVV6UkZFPWNYQjBkVTVtZEhSaWFHWT1KVU15SlRnMGQzTjJZU1ZETWlVNE1INGxReklsT0VJPWJtSnhKVEZFVm1JbE5VSmFKVEZFVUNVMVJGSm5VU1UyTUNVMk1DVTFRMms9ZVhSeUpVTXlKVGd4SlVNeUpUZzFkSGx5YXc9PWJua2xOMFpzZG05dGRuTnRkUT09VWt3bE5qQT1iblU9SlRWRFlXTm9aeVV4UmlVeE0yWllYMWhXWnlVeFJpVXhNMmRZYTJkVVpWaFVKVE5FUWtSSlNBPT1KVFZFWm1OZmFHNVRKVEl5VVE9PWVHa2xOMElsTjBOdFpTVTJNQT09VlNVMVEyRlhZVlFsTmpCWWRnPT1lR2tsTjBONFpYWnBaUT09Y0hFbFF6SWxPREk9WDJnbE5VUnZiMG9sTlVScFlRPT1XaVUxUkNVMVJDVXpSbWhyWmlVelJXVWxOVVZtSlRWRloyMD1WMlZaWm1FbE5VVWxOVVJyYkE9PWVpVTNRbWg1SlRkQ2QyeHRhbmhQYVNVM1JBPT1KVFZESlRZd1VDVTFSR1FsTTBWUVYxQk9YMW9sTlVRbE1rTlhWdz09VmlVMVFpVTFRMTlYUVdKWFdHWT1KVU15SlRnd2VDVTNSbjUxY21zbE4wUkxmbjRsTjBOemJDVTNSbjV2ZWlVM1JpVTNSSEpQSlVNeUpUZ3diM2grSlVNeUpUaEJKVGRESlVNeUpUZ3hkeVZETWlVNE1pVkRNaVU0UVd3PUpVTXlKVGcxSlVNeUpUZ3dKVU15SlRnMmRIa2xReklsT0RRbFF6SWxPRFZ5SlVNeUpUZ3pKVU15SlRnMVgxQmlZbVlsTlVWaFV3PT1iSFJvY0hNPVJFTWxNMFJDU0RsR2NYWWxReklsT0RCdWIzbHljUT09SlRkRUpUZEVSRVFsTTBad1ZYNTVVamM9SlVNeUpUZ3dKVU15SlRneUpVTXlKVGc0SlVNeUpUZzJlQT09WDJjPVZFWkNVMFJKSlRWRlgweGZVQT09SlVNeUpUZzVkQ1UzUmlWRE1pVTRPSGc9SlVNeUpUZzBkM1VsUXpJbE9ERWxReklsT0RSMkpUZENKVU15SlRnd2VRPT1SU1V6UVNVelFqaEdVU1V6UkRkTGJYQm5aV2RzYjJoNlRDVTNSR3gxSlRkQ1JGZGZXbGhwYzJSM2N3PT1kM2xtY1cxNFdITk5jbmQwYVc5NFptbDRaUT09VTFKVUpUVkRaR0ZTVkZad0pUVkRWbW89WWxrPWNRPT1aRjhsTTBOZloxVmlNMUZqVlE9PVRFZE5KVE5DSlRRd1lrZDFhSFJzUkNrPUpUVkVZMnhoYldKalFXMXNaR2RsVW0wbE5EQm5jbVJxWDJWeGFtVT1aVmNsTlVWWFZXWWxOVUpoSlRZd055VTJNRlk9Ym5CMmRHWm1iM1ZtY3c9PUpUWXdhMjluSlRZd09VcElRbFZCSlROQ1R3PT1UaVUxUWlVMVF3PT1WRmxaVUNVMVJDVXpSbEJqWHc9PU1DVXlSamcxSlRKR053PT1KVFZFVjJ0bllnPT1iMkZtSlRWRFoyOD1WbGdsTlVVbE5VTk9KVU15SlRnd2NuZHRlQ1ZETWlVNE1HRT1maVUzUmlVM1JIUjVjblJ4SlVNeUpUZzBKVU15SlRnd0pUZEVaSFZ5WVhScGIyND1KVU15SlRnMEpVTXlKVGd3ZFhkNUpUZERKVU15SlRnekpVTXlKVGd3ZUhrbFF6SWxPRFk9VXc9PVUxcE1WVTRsTmpCVlRGWWxOVUpSVW1VPVoyaDViR1pvSlVNeUpUZzVKVU15SlRneWVIbDZKVGRFSlVNeUpUZ3llWGc9SlRORlNWRWxOVU5JUWxZPVlXTnBaMWxwWkE9PWNHNGxOMFJQZGlVMVF5VTNSR29sTjBSdUpUWXdjaVUzUkhGU2QyMXliRzRsTjBNPVVDVTJNRk5rVm1OblZtTT1KVFF3SlRORU53PT1aR2xyY0c4PVgzUjRjRTBsUXpJbE9EQnhjWEFsTjBRPWN3PT1kbmxyYmlVMVJYTjNidz09U2xaUFRsWm5lblpEZEdkalIyNW5iMmR3ZGc9PVZTVTFRMVJKVEZrPWRHOTFZMmhsY3c9PQ==")
            };

            function t(e) {
                for (; e._8dyZiyy !== e._L0jN7v2;) {
                    var t = e._c1V63q[e._8dyZiyy++];
                    e._Dg4zU7tZH[t](e)
                }
            }
            return e._L0jN7v2 = e._c1V63q.length, t(e), e._VtvPdQ
        }(), Qt = Yt.s, en = Yt.m, Yt.b, tn = Yt.start
    } catch (zn) {
        Oe("ob-error", "error", "api", {
            message: zn.message
        });
        var rn = function() {};
        Qt = function() {
            return Promise.resolve()
        }, en = {
            record: rn,
            resetData: rn,
            setData: rn,
            stop: rn,
            circBuffPush: rn
        }, {
            record: rn,
            stop: rn
        }, tn = rn
    }

    function on(e, t) {
        this.cause = e, this.message = t
    }

    function an(e) {
        on.call(this, pe, "Invalid hCaptcha id: " + e)
    }

    function sn() {
        on.call(this, he, "No hCaptcha exists.")
    }

    function cn() {
        on.call(this, de, "Missing sitekey - https://docs.hcaptcha.com/configuration#javascript-api")
    }
    on.prototype = Error.prototype;
    var ln = [],
        un = [],
        hn = {
            add: function(e) {
                ln.push(e)
            },
            remove: function(e) {
                for (var t = !1, n = ln.length; --n > -1 && !1 === t;) ln[n].id === e.id && (t = ln[n], ln.splice(n, 1));
                return t
            },
            each: function(e) {
                for (var t = -1; ++t < ln.length;) e(ln[t])
            },
            isValidId: function(e) {
                for (var t = !1, n = -1; ++n < ln.length && !1 === t;) ln[n].id === e && (t = !0);
                return t
            },
            getByIndex: function(e) {
                for (var t = !1, n = -1; ++n < ln.length && !1 === t;) n === e && (t = ln[n]);
                return t
            },
            getById: function(e) {
                for (var t = !1, n = -1; ++n < ln.length && !1 === t;) ln[n].id === e && (t = ln[n]);
                return t
            },
            getCaptchaIdList: function() {
                var e = [];
                return hn.each((function(t) {
                    e.push(t.id)
                })), e
            },
            pushSession: function(e, t) {
                un.push([e, t]), un.length > 10 && un.splice(0, un.length - 10)
            },
            getSession: function() {
                return un
            }
        };

    function dn(e, t) {
        "object" != typeof e || t || (t = e, e = null);
        var n, r, i, o = !0 === (t = t || {}).async,
            a = new Promise((function(e, t) {
                r = e, i = t
            }));
        if (a.resolve = r, a.reject = i, n = e ? hn.getById(e) : hn.getByIndex(0)) Me("Execute called", "hCaptcha", "info"), nn.setData("exec", "api"), en.setData("exec", "api"), o && n.setPromise(a), n.onReady(n.initChallenge, t);
        else if (e) {
            if (!o) throw new an(e);
            a.reject(pe)
        } else {
            if (!o) throw new sn;
            a.reject(he)
        }
        if (o) return a
    }

    function pn(e) {
        var t = "",
            n = null;
        n = e ? hn.getById(e) : hn.getByIndex(0);
        try {
            for (var r = hn.getSession(), i = r.length, o = !1; --i > -1 && !o;)(o = r[i][1] === n.id) && (t = r[i][0])
        } catch (zn) {
            t = ""
        }
        return t
    }

    function fn(e, t, n) {
        this.target = e, this.setTargetOrigin(n), this.id = t, this.messages = [], this.incoming = [], this.waiting = [], this.isReady = !0, this.queue = []
    }
    fn.prototype._sendMessage = function(e, t) {
        var n = e instanceof HTMLIFrameElement;
        try {
            n ? e.contentWindow.postMessage(JSON.stringify(t), this.targetOrigin) : e.postMessage(JSON.stringify(t), this.targetOrigin)
        } catch (In) {
            Pe("messaging", In), "*" !== this.targetOrigin && (this.setTargetOrigin("*"), this._sendMessage(e, t))
        }
    }, fn.prototype.setReady = function(e) {
        var t = this;
        t.isReady = e, t.isReady && t.queue.length && (t.queue.forEach((function(e) {
            t._sendMessage.apply(t, e)
        })), t.clearQueue())
    }, fn.prototype.clearQueue = function() {
        this.queue = []
    }, fn.prototype.setID = function(e) {
        this.id = e
    }, fn.prototype.setTargetOrigin = function(e) {
        this.targetOrigin = "*"
    }, fn.prototype.contact = function(e, t) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        var n = this,
            r = Math.random().toString(36).substr(2),
            i = {
                source: "hcaptcha",
                label: e,
                id: this.id,
                promise: "create",
                lookup: r
            };
        if (t) {
            if ("object" != typeof t) throw new Error("Message must be an object.");
            i.contents = t
        }
        return new Promise((function(t, o) {
            n.waiting.push({
                label: e,
                reject: o,
                resolve: t,
                lookup: r
            }), n._addToQueue(n.target, i)
        }))
    }, fn.prototype.listen = function(e, t) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        for (var n = this.messages.length, r = !1; --n > -1 && !1 === r;) this.messages[n].label === e && (r = this.messages[n]);
        !1 === r && (r = {
            label: e,
            listeners: []
        }, this.messages.push(r)), r.listeners.push(t)
    }, fn.prototype.answer = function(e, t) {
        if (!this.id) throw new Error("Chat requires unique id to communicate between windows");
        for (var n = this.incoming.length, r = !1; --n > -1 && !1 === r;) this.incoming[n].label === e && (r = this.incoming[n]);
        !1 === r && (r = {
            label: e,
            listeners: []
        }, this.incoming.push(r)), r.listeners.push(t)
    }, fn.prototype.send = function(e, t) {
        var n = this;
        if (!n.id) throw new Error("Chat requires unique id to communicate between windows");
        var r = {
            source: "hcaptcha",
            label: e,
            id: n.id
        };
        if (t) {
            if ("object" != typeof t) throw new Error("Message must be an object.");
            r.contents = t
        }
        n._addToQueue(n.target, r)
    }, fn.prototype.check = function(e, t) {
        for (var n = [].concat.apply([], [this.messages, this.incoming, this.waiting]), r = [], i = -1; ++i < n.length;)
            if (n[i].label === e) {
                if (t && n[i].lookup && t !== n[i].lookup) continue;
                r.push(n[i])
            }
        return r
    }, fn.prototype.respond = function(e) {
        for (var t, n, r = -1, i = 0, o = [].concat.apply([], [this.messages, this.incoming, this.waiting]); ++r < o.length;)
            if (o[r].label === e.label) {
                if (e.lookup && o[r].lookup && e.lookup !== o[r].lookup) continue;
                var a = [];
                if (t = o[r], e.error && a.push(e.error), e.contents && a.push(e.contents), e.promise && "create" !== e.promise) {
                    t[e.promise].apply(t[e.promise], a);
                    for (var s = this.waiting.length, c = !1; --s > -1 && !1 === c;) this.waiting[s].label === t.label && this.waiting[s].lookup === t.lookup && (c = !0, this.waiting.splice(s, 1));
                    continue
                }
                for (i = 0; i < t.listeners.length; i++) {
                    if (n = t.listeners[i], "create" === e.promise) {
                        var l = this._contactPromise(t.label, e.lookup);
                        a.push(l)
                    }
                    n.apply(n, a)
                }
            }
        o = null
    }, fn.prototype.destroy = function() {
        return this.clearQueue(), this.messages = null, this.incoming = null, this.waiting = null, this.isReady = !1, null
    }, fn.prototype._contactPromise = function(e, t) {
        var n = this,
            r = {},
            i = new Promise((function(e, t) {
                r.resolve = e, r.reject = t
            })),
            o = {
                source: "hcaptcha",
                label: e,
                id: n.id,
                promise: null,
                lookup: t
            };
        return i.then((function(e) {
            o.promise = "resolve", null !== e && (o.contents = e), n._addToQueue(n.target, o)
        }))["catch"]((function(e) {
            o.promise = "reject", null !== e && (o.error = e), n._addToQueue(n.target, o)
        })), r
    }, fn.prototype._addToQueue = function(e, t) {
        this.isReady ? this._sendMessage(e, t) : this.queue.push([e, t])
    };
    var mn = {
        chats: [],
        messages: [],
        globalEnabled: !1,
        isSupported: function() {
            return !!window.postMessage
        },
        createChat: function(e, t, n) {
            var r = new fn(e, t, n);
            return mn.chats.push(r), r
        },
        addChat: function(e) {
            mn.chats.push(e)
        },
        removeChat: function(e) {
            for (var t = !1, n = mn.chats.length; --n > -1 && !1 === t;) e.id === mn.chats[n].id && e.target === mn.chats[n].target && (t = mn.chats[n], mn.chats.splice(n, 1));
            return t
        },
        consumeMessages: function() {
            var e = mn.messages;
            return mn.messages = [], e
        },
        handleGlobal: function(e) {
            if (mn.globalEnabled) {
                var t = mn.messages;
                if (t.length >= 10) mn.globalEnabled = !1;
                else {
                    var n = t.some((function(t) {
                        return JSON.stringify(t.data) === JSON.stringify(e.data)
                    }));
                    n || t.push(e)
                }
            }
        },
        handle: function(e) {
            var t = e.data,
                n = "string" == typeof t && t.indexOf("hcaptcha") >= 0 || "object" == typeof t && JSON.stringify(t).indexOf("hcaptcha") >= 0;
            try {
                if (!n) return void mn.handleGlobal(e);
                "string" == typeof t && (t = JSON.parse(t)), "d" === t.t && mn.messages.push(e);
                for (var r, i = mn.chats, o = -1; ++o < i.length;) {
                    var a = "*" === (r = i[o]).targetOrigin || e.origin === r.targetOrigin;
                    r.id === t.id && a && r.respond(t)
                }
            } catch (In) {
                Me("postMessage handler error", "postMessage", "debug", {
                    event: e,
                    error: In
                })
            }
        }
    };

    function yn(e) {
        var t = e ? hn.getById(e) : hn.getByIndex(0);
        if (!t) throw e ? new an(e) : new sn;
        hn.remove(t), t.destroy(), t = null
    }

    function gn() {
        try {
            return Object.keys(window).sort().join(",")
        } catch (Ln) {
            return null
        }
    }
    window.addEventListener ? window.addEventListener("message", mn.handle) : window.attachEvent("onmessage", mn.handle);
    var vn = We();

    function wn(e, t) {
        for (var n in t) {
            var r = t[n];
            switch (typeof r) {
                case "string":
                    e[n] = r;
                    break;
                case "object":
                    e[n] = e[n] || {}, wn(e[n], r);
                    break;
                default:
                    throw new Error("Source theme contains invalid data types. Only string and object types are supported.")
            }
        }
    }

    function bn(e, t) {
        try {
            return e in t
        } catch (n) {
            return !1
        }
    }

    function _n(e) {
        return !!e && "object" == typeof e
    }

    function En(e) {
        return _n(e) ? Vn({}, e) : e
    }

    function Vn(e, t) {
        var n, r = {},
            i = Object.keys(e);
        for (n = 0; n < i.length; n++) r[i[n]] = En(e[i[n]]);
        var o, a, s = Object.keys(t);
        for (n = 0; n < s.length; n++) {
            var c = s[n];
            if (!(!bn(o = c, a = e) || Object.hasOwnProperty.call(a, o) && Object.propertyIsEnumerable.call(a, o))) return;
            bn(c, e) && _n(e[c]) ? r[c] = Vn(e[c], t[c]) : r[c] = En(t[c])
        }
        return r
    }
    var kn = {
            transparent: "transparent",
            white: "#ffffff",
            black: "#000000"
        },
        xn = {
            100: "#fafafa",
            200: "#f5f5f5",
            300: "#E0E0E0",
            400: "#D7D7D7",
            500: "#BFBFBF",
            600: "#919191",
            700: "#555555",
            800: "#333333",
            900: "#222222",
            1e3: "#14191F"
        },
        Sn = "#4DE1D2",
        Tn = "#00838F",
        Rn = {
            mode: "light",
            grey: xn,
            primary: {
                main: Tn
            },
            secondary: {
                main: Sn
            },
            warn: {
                light: "#BF1722",
                main: "#BF1722",
                dark: "#9D1B1B"
            },
            text: {
                heading: xn[700],
                body: xn[700]
            }
        },
        Cn = {
            mode: "dark",
            grey: xn,
            primary: {
                main: Tn
            },
            secondary: {
                main: Sn
            },
            text: {
                heading: xn[200],
                body: xn[200]
            }
        };

    function Un(e, t) {
        return "dark" === t && e in Cn ? Cn[e] : Rn[e]
    }

    function On() {
        this._themes = Object.create(null), this._active = "light", this.add("light", {}), this.add("dark", {
            palette: {
                mode: "dark"
            }
        })
    }
    On.prototype.get = function(e) {
        if (!e) return this._themes[this._active];
        var t = this._themes[e];
        if (!t) throw new Error("Cannot find theme with name: " + e);
        return t
    }, On.prototype.use = function(e) {
        this._themes[e] ? this._active = e : console.error("Cannot find theme with name: " + e)
    }, On.prototype.active = function() {
        return this._active
    }, On.prototype.add = function(e, t) {
        t || (t = {}), t.palette = function(e) {
            e || (e = {});
            var t = e.mode || "light",
                n = e.primary || Un("primary", t),
                r = e.secondary || Un("secondary", t),
                i = e.warn || Un("warn", t),
                o = e.grey || Un("grey", t),
                a = e.text || Un("text", t);
            return Vn({
                common: kn,
                mode: t,
                primary: n,
                secondary: r,
                grey: o,
                warn: i,
                text: a
            }, e)
        }(t.palette), t.component = t.component || Object.create(null), this._themes[e] = t
    }, On.prototype.extend = function(e, t) {
        "string" == typeof t && (t = JSON.parse(t));
        var n = JSON.parse(JSON.stringify(this.get(e)));
        return wn(n, t), n
    }, On.merge = function(e, t) {
        return Vn(e, t || {})
    };
    var Pn = ["light", "dark", "contrast", "grey-red"],
        Mn = new On;
    Mn.add("contrast", {}), Mn.add("grey-red", {
        component: {
            challenge: {
                main: {
                    border: "#6a6a6a"
                }
            }
        }
    });

    function Dn(e, t) {
        var n = this;
        this.id = e, this.width = null, this.height = null, this.mobile = !1, this.ready = !1, this.listeners = [], this.config = t, this._visible = !1, this._selected = !1, this.$iframe = new ct("iframe"), this._host = ge.host || window.location.hostname;
        var r = ge.assetUrl;
        ve.assethost && (r = ve.assethost + ge.assetUrl.replace(ge.assetDomain, ""));
        var i = r.match(/^.+\:\/\/[^\/]+/),
            o = i ? i[0] : null,
            a = r + "/hcaptcha.html#frame=challenge&id=" + this.id + "&host=" + this._host + (t ? "&" + qe(this.config) : ""),
            s = ee.Browser.supportsPST();
        this.setupParentContainer(t), this.chat = mn.createChat(this.$iframe.dom, e, o), this.chat.setReady(!1), this._timeoutFailedToInitialize = setTimeout((function() {
            n.$iframe && n.$iframe.isConnected() ? Oe("Failed to initialize. Iframe attached", "error", "frame:challenge", {
                contentWindow: !!n.$iframe.dom.contentWindow,
                iframeSrc: a,
                supportsPST: s,
                customContainer: n._hasCustomContainer
            }) : Oe("Failed to initialize. Iframe detached", "error", "frame:challenge")
        }), 6e4), this.$iframe.dom.src = a, this.$iframe.dom.frameBorder = 0, this.$iframe.dom.scrolling = "no", ee.Browser.supportsPST() && (this.$iframe.dom.allow = "private-state-token-issuance 'src'; private-state-token-redemption 'src'"), this.translate(), this._hasCustomContainer ? (this._hideIframe(), this._parent.appendChild(this.$iframe.dom)) : (this.$container = new ct("div"), this.$wrapper = this.$container.createElement("div"), this.$overlay = this.$container.createElement("div"), this.$arrow = this.$container.createElement("div"), this.$arrow.fg = this.$arrow.createElement("div"), this.$arrow.bg = this.$arrow.createElement("div"), this.style.call(this), this.$wrapper.appendElement(this.$iframe), this._parent.appendChild(this.$container.dom), this.$container.setAttribute("aria-hidden", !0)), this.style()
    }
    Dn.prototype.setupParentContainer = function(e) {
        var t, n = e["challenge-container"];
        n && (t = "string" == typeof n ? document.getElementById(n) : n), t ? (this._hasCustomContainer = !0, this._parent = t) : (this._hasCustomContainer = !1, this._parent = document.body)
    }, Dn.prototype._hideIframe = function() {
        var e = {};
        "ie" !== ee.Browser.type || "ie" === ee.Browser.type && 8 !== ee.Browser.version ? (e.opacity = 0, e.visibility = "hidden") : e.display = "none", this.$iframe.setAttribute("aria-hidden", !0), this.$iframe.css(e)
    }, Dn.prototype._showIframe = function() {
        var e = {};
        "ie" !== ee.Browser.type || "ie" === ee.Browser.type && 8 !== ee.Browser.version ? (e.opacity = 1, e.visibility = "visible") : e.display = "block", this.$iframe.removeAttribute("aria-hidden"), this.$iframe.css(e)
    }, Dn.prototype.style = function() {
        var e = function(e) {
            var t = e.palette,
                n = e.component;
            return On.merge({
                main: {
                    fill: t.common.white,
                    border: t.grey[400]
                }
            }, n.challenge)
        }(Mn.get());
        if (this._hasCustomContainer) this.$iframe.css({
            border: 0,
            position: "relative",
            backgroundColor: e.main.fill
        });
        else {
            var t = {
                backgroundColor: e.main.fill,
                border: "1px solid " + e.main.border,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 4px",
                borderRadius: 4,
                left: "auto",
                top: -1e4,
                zIndex: -9999999999999,
                position: "absolute",
                pointerEvents: "auto"
            };
            "ie" !== ee.Browser.type || "ie" === ee.Browser.type && 8 !== ee.Browser.version ? (t.transition = "opacity 0.15s ease-out", t.opacity = 0, t.visibility = "hidden") : t.display = "none", this.$container.css(t), this.$wrapper.css({
                position: "relative",
                zIndex: 1
            }), this.$overlay.css({
                width: "100%",
                height: "100%",
                position: "fixed",
                pointerEvents: "none",
                top: 0,
                left: 0,
                zIndex: 0,
                backgroundColor: e.main.fill,
                opacity: .05
            }), this.$arrow.css({
                borderWidth: 11,
                position: "absolute",
                pointerEvents: "none",
                marginTop: -11,
                zIndex: 1,
                right: "100%"
            }), this.$arrow.fg.css({
                borderWidth: 10,
                borderStyle: "solid",
                borderColor: "transparent rgb(255, 255, 255) transparent transparent",
                position: "relative",
                top: 10,
                zIndex: 1
            }), this.$arrow.bg.css({
                borderWidth: 11,
                borderStyle: "solid",
                borderColor: "transparent " + e.main.border + " transparent transparent",
                position: "relative",
                top: -11,
                zIndex: 0
            }), this.$iframe.css({
                border: 0,
                zIndex: 2e9,
                position: "relative"
            })
        }
    }, Dn.prototype.setup = function(e) {
        return this.chat.send("create-challenge", e)
    }, Dn.prototype.sendTranslation = function(e) {
        var t = {
            locale: e,
            table: yt.getTable(e) || {}
        };
        this.chat && this.chat.send("challenge-translate", t), this.translate()
    }, Dn.prototype.translate = function() {
        this.$iframe.dom.title = yt.translate("Main content of the hCaptcha challenge")
    }, Dn.prototype.isVisible = function() {
        return this._visible
    }, Dn.prototype.getDimensions = function(e, t) {
        return this._visible ? this.chat.contact("resize-challenge", {
            width: e,
            height: t
        }) : Promise.resolve(null)
    }, Dn.prototype.show = function() {
        if (!0 !== this._visible)
            if (this._visible = !0, this._hasCustomContainer) this._showIframe();
            else {
                var e = {
                    zIndex: 9999999999999,
                    display: "block"
                };
                ("ie" !== ee.Browser.type || "ie" === ee.Browser.type && 8 !== ee.Browser.version) && (e.opacity = 1, e.visibility = "visible"), this.$container.css(e), this.$container.removeAttribute("aria-hidden"), this.$overlay.css({
                    pointerEvents: "auto",
                    cursor: "pointer"
                })
            }
    }, Dn.prototype.focus = function() {
        this.$iframe.dom.focus()
    }, Dn.prototype.close = function(e) {
        if (!1 !== this._visible) {
            if (this._visible = !1, this._hasCustomContainer) return this._hideIframe(), void this.chat.send("close-challenge", {
                event: e
            });
            var t = {
                left: "auto",
                top: -1e4,
                zIndex: -9999999999999
            };
            "ie" !== ee.Browser.type || "ie" === ee.Browser.type && 8 !== ee.Browser.version ? (t.opacity = 0, t.visibility = "hidden") : t.display = "none", this.$container.css(t), this._hasCustomContainer || this.$overlay.css({
                pointerEvents: "none",
                cursor: "default"
            }), this.chat.send("close-challenge", {
                event: e
            }), this.$container.setAttribute("aria-hidden", !0)
        }
    }, Dn.prototype.size = function(e, t, n) {
        this.width = e, this.height = t, this.mobile = n, this.$iframe.css({
            width: e,
            height: t
        }), this._hasCustomContainer || (this.$wrapper.css({
            width: e,
            height: t
        }), n ? this.$overlay.css({
            opacity: .5
        }) : this.$overlay.css({
            opacity: .05
        }))
    }, Dn.prototype.position = function(e) {
        if (!this._hasCustomContainer && e) {
            var t = 10,
                n = window.document.documentElement,
                r = ee.Browser.scrollY(),
                i = ee.Browser.width(),
                o = ee.Browser.height(),
                a = this.mobile || "invisible" === this.config.size || e.offset.left + e.tick.x <= e.tick.width / 2,
                s = Math.round(e.bounding.top) + r !== e.offset.top,
                c = a ? (i - this.width) / 2 : e.bounding.left + e.tick.right + 10;
            (c + this.width + t > i || c < 0) && (c = (i - this.width) / 2, a = !0);
            var l = (n.scrollHeight < n.clientHeight ? n.clientHeight : n.scrollHeight) - this.height - t,
                u = a ? (o - this.height) / 2 + r : e.bounding.top + e.tick.y + r - this.height / 2;
            s && u < r && (u = r + t), s && u + this.height >= r + o && (u = r + o - (this.height + t)), u = Math.max(Math.min(u, l), 10);
            var h = e.bounding.top + e.tick.y + r - u - 10,
                d = this.height - 10 - 30;
            h = Math.max(Math.min(h, d), t), this.$container.css({
                left: c,
                top: u
            }), this.$arrow.fg.css({
                display: a ? "none" : "block"
            }), this.$arrow.bg.css({
                display: a ? "none" : "block"
            }), this.$arrow.css({
                top: h
            }), this.top = u, this.$container.dom.getBoundingClientRect()
        }
    }, Dn.prototype.destroy = function() {
        this._timeoutFailedToInitialize && (clearTimeout(this._timeoutFailedToInitialize), this._timeoutFailedToInitialize = null), this._visible && this.close.call(this), mn.removeChat(this.chat), this.chat = this.chat.destroy(), this._hasCustomContainer ? this._parent.removeChild(this.$iframe.dom) : (this._parent.removeChild(this.$container.dom), this.$container = this.$container.__destroy()), this.$iframe = this.$iframe.__destroy()
    }, Dn.prototype.setReady = function() {
        var e;
        this._timeoutFailedToInitialize && (clearTimeout(this._timeoutFailedToInitialize), this._timeoutFailedToInitialize = null), this.chat && this.chat.setReady(!0), this.ready = !0;
        for (var t = this.listeners.length; --t > -1;) e = this.listeners[t], this.listeners.splice(t, 1), e()
    }, Dn.prototype.onReady = function(e) {
        var t = Array.prototype.slice.call(arguments, 1),
            n = function() {
                e.apply(null, t)
            };
        this.ready ? n() : this.listeners.push(n)
    }, Dn.prototype.onOverlayClick = function(e) {
        this._hasCustomContainer || this.$overlay.addEventListener("click", e)
    }, Dn.prototype.setData = function(e) {
        this.chat && this.chat.send("challenge-data", e)
    };

    function Wn(e, t, n) {
        var r = this;
        this.id = t, this.response = null, this.location = {
            tick: null,
            offset: null,
            bounding: null
        }, this.config = n, this._ticked = !0, this.$container = e instanceof ct ? e : new ct(e), this._host = ge.host || window.location.hostname, this.$iframe = new ct("iframe");
        var i = ge.assetUrl;
        ve.assethost && (i = ve.assethost + ge.assetUrl.replace(ge.assetDomain, ""));
        var o = i.match(/^.+\:\/\/[^\/]+/),
            a = o ? o[0] : null,
            s = i + "/hcaptcha.html#frame=checkbox&id=" + this.id + "&host=" + this._host + (n ? "&" + qe(this.config) : "");
        this.chat = mn.createChat(this.$iframe.dom, t, a), this.chat.setReady(!1), this._timeoutFailedToInitialize = setTimeout((function() {
            r.$iframe && r.$iframe.isConnected() ? Oe("Failed to initialize. Iframe attached", "error", "frame:checkbox", {
                contentWindow: !!r.$iframe.dom.contentWindow,
                iframeSrc: s
            }) : Oe("Failed to initialize. Iframe detached", "error", "frame:checkbox")
        }), 6e4), this.$iframe.dom.src = s, this.$iframe.dom.tabIndex = this.config.tabindex || 0, this.$iframe.dom.frameBorder = "0", this.$iframe.dom.scrolling = "no", ee.Browser.supportsPST() && (this.$iframe.dom.allow = "private-state-token-issuance 'src'; private-state-token-redemption 'src'"), this.translate(), this.config.size && "invisible" === this.config.size && this.$iframe.setAttribute("aria-hidden", "true"), this.$iframe.setAttribute("data-hcaptcha-widget-id", t), this.$iframe.setAttribute("data-hcaptcha-response", ""), this.$container.appendElement(this.$iframe), "off" !== ve.recaptchacompat && (this.$textArea0 = this.$container.createElement("textarea", "#g-recaptcha-response-" + t), this.$textArea0.dom.name = "g-recaptcha-response", this.$textArea0.css({
            display: "none"
        })), this.$textArea1 = this.$container.createElement("textarea", "#h-captcha-response-" + t), this.$textArea1.dom.name = "h-captcha-response", this.$textArea1.css({
            display: "none"
        }), this.ready = new Promise((function(e) {
            r.chat.listen("checkbox-ready", e)
        })).then((function() {
            r._timeoutFailedToInitialize && (clearTimeout(r._timeoutFailedToInitialize), r._timeoutFailedToInitialize = null), r.chat && r.chat.setReady(!0)
        })), this.clearLoading = this.clearLoading.bind(this), this.style()
    }

    function jn(e, t, n) {
        this.id = t, this.response = null, this.location = {
            tick: null,
            offset: null,
            bounding: null
        }, this.config = n, this.$container = e instanceof ct ? e : new ct(e), this.$iframe = new ct("iframe"), this.$iframe.setAttribute("aria-hidden", "true"), this.$iframe.css({
            display: "none"
        }), this.$iframe.setAttribute("data-hcaptcha-widget-id", t), this.$iframe.setAttribute("data-hcaptcha-response", "");
        var r = ge.assetUrl;
        ve.assethost && (r = ve.assethost + ge.assetUrl.replace(ge.assetDomain, "")), this.$iframe.dom.src = r + "/hcaptcha.html#frame=checkbox-invisible", this.$container.appendElement(this.$iframe), "off" !== ve.recaptchacompat && (this.$textArea0 = this.$container.createElement("textarea", "#g-recaptcha-response-" + t), this.$textArea0.dom.name = "g-recaptcha-response", this.$textArea0.css({
            display: "none"
        })), this.$textArea1 = this.$container.createElement("textarea", "#h-captcha-response-" + t), this.$textArea1.dom.name = "h-captcha-response", this.$textArea1.css({
            display: "none"
        })
    }

    function Fn(e, t, n) {
        if (!n.sitekey) throw new cn;
        this.id = t, this.visible = !1, this.overflow = {
            override: !1,
            cssUsed: !0,
            value: null,
            scroll: 0
        }, this.onError = null, this.onPass = null, this.onExpire = null, this.onChalExpire = null, this.onOpen = null, this.onClose = null, this._ready = !1, this._active = !1, this._listeners = [], this.config = n, Pn.indexOf(n.theme) >= 0 && Mn.use(n.theme), this._state = {
            escaped: !1,
            passed: !1,
            expiredChallenge: !1,
            expiredResponse: !1
        }, this._origData = null, this._langSet = !1, this._promise = null, this._responseTimer = null, this.initChallenge = this.initChallenge.bind(this), this.closeChallenge = this.closeChallenge.bind(this), this.displayChallenge = this.displayChallenge.bind(this), this.getGetCaptchaManifest = this.getGetCaptchaManifest.bind(this), this.challenge = new Dn(t, n), "invisible" === this.config.size ? (Me("Invisible mode is set", "hCaptcha", "info"), this.checkbox = new jn(e, t, n)) : this.checkbox = new Wn(e, t, n)
    }

    function An(e) {
        if ("en" === e) return Promise.resolve();
        var t = e + ".json";
        return new Promise((function(n, r) {
            Mt(t).then((function(n) {
                return n || Pt(t, {
                    prefix: "https://newassets.hcaptcha.com/captcha/v1/c1e11bfffe54019b36ca486d59d75ea65128f510/static/i18n"
                }).then((function(t) {
                    return yt.addTable(e, t.data), t
                }))
            })).then((function(e) {
                n(e.data)
            }))["catch"]((function(e) {
                r(e)
            }))
        }))
    }
    Wn.prototype.setResponse = function(e) {
        this.response = e, this.$iframe.dom.setAttribute("data-hcaptcha-response", e), "off" !== ve.recaptchacompat && (this.$textArea0.dom.value = e), this.$textArea1.dom.value = e
    }, Wn.prototype.style = function() {
        var e = this.config.size;
        switch (this.$iframe.css({
            pointerEvents: "auto",
            backgroundColor: "rgba(255,255,255,0)"
        }), e) {
            case "compact":
                this.$iframe.css({
                    width: 164,
                    height: 144
                });
                break;
            case "invisible":
                this.$iframe.css({
                    display: "none"
                });
                break;
            default:
                this.$iframe.css({
                    width: 303,
                    height: 78,
                    overflow: "hidden"
                })
        }
    }, Wn.prototype.reset = function() {
        this._ticked = !1, this.$iframe && this.$iframe.dom.contentWindow && this.chat && this.chat.send("checkbox-reset")
    }, Wn.prototype.clearLoading = function() {
        this.chat && this.chat.send("checkbox-clear")
    }, Wn.prototype.sendTranslation = function(e) {
        var t = {
            locale: e,
            table: yt.getTable(e) || {}
        };
        this.chat && this.chat.send("checkbox-translate", t), this.translate()
    }, Wn.prototype.translate = function() {
        this.$iframe.dom.title = yt.translate("Widget containing checkbox for hCaptcha security challenge")
    }, Wn.prototype.status = function(e, t) {
        this.$iframe && this.$iframe.dom.contentWindow && this.chat && this.chat.send("checkbox-status", {
            text: e || null,
            a11yOnly: t || !1
        })
    }, Wn.prototype.tick = function() {
        this._ticked = !0, this.chat && this.chat.send("checkbox-tick")
    }, Wn.prototype.getTickLocation = function() {
        return this.chat.contact("checkbox-location")
    }, Wn.prototype.getOffset = function() {
        var e = this.$iframe.dom;
        e.offsetParent || (e = e.parentElement);
        for (var t = 0, n = 0; e;) t += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
        return {
            top: n,
            left: t
        }
    }, Wn.prototype.getBounding = function() {
        return this.$iframe.dom.getBoundingClientRect()
    }, Wn.prototype.destroy = function() {
        this._timeoutFailedToInitialize && (clearTimeout(this._timeoutFailedToInitialize), this._timeoutFailedToInitialize = null), this._ticked && this.reset(), mn.removeChat(this.chat), this.chat = this.chat.destroy(), this.$container.removeElement(this.$iframe), this.$container.removeElement(this.$textArea1), "off" !== ve.recaptchacompat && (this.$container.removeElement(this.$textArea0), this.$textArea0 = this.$textArea0.__destroy()), this.$textArea1 = this.$textArea1.__destroy(), this.$container = this.$container.__destroy(), this.$iframe = this.$iframe.__destroy()
    }, jn.prototype.setResponse = function(e) {
        this.response = e, this.$iframe.dom.setAttribute("data-hcaptcha-response", e), "off" !== ve.recaptchacompat && (this.$textArea0.dom.value = e), this.$textArea1.dom.value = e
    }, jn.prototype.reset = function() {}, jn.prototype.clearLoading = function() {}, jn.prototype.sendTranslation = function(e) {}, jn.prototype.status = function(e, t) {}, jn.prototype.tick = function() {}, jn.prototype.getTickLocation = function() {
        return Promise.resolve({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0
        })
    }, jn.prototype.getOffset = function() {
        var e = this.$iframe.dom;
        e.offsetParent || (e = e.parentElement);
        for (var t = 0, n = 0; e;) t += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
        return {
            top: n,
            left: t
        }
    }, jn.prototype.getBounding = function() {
        return this.$iframe.dom.getBoundingClientRect()
    }, jn.prototype.destroy = function() {
        this._ticked && this.reset(), this.$container.removeElement(this.$iframe), this.$container.removeElement(this.$textArea1), "off" !== ve.recaptchacompat && (this.$container.removeElement(this.$textArea0), this.$textArea0 = this.$textArea0.__destroy()), this.$textArea1 = this.$textArea1.__destroy(), this.$container = this.$container.__destroy(), this.$iframe = this.$iframe.__destroy()
    }, Fn.prototype._resetTimer = function() {
        null !== this._responseTimer && (clearTimeout(this._responseTimer), this._responseTimer = null)
    }, Fn.prototype.initChallenge = function(e) {
        e || (e = {}), Me("Initiate challenge", "hCaptcha", "info"), this._origData = e;
        var t = this.getGetCaptchaManifest(),
            n = e.charity || null,
            r = e.a11yChallenge || !1,
            i = e.link || null,
            o = e.action || "",
            a = e.rqdata || null,
            s = e.errors || [],
            c = ee.Browser.width(),
            l = ee.Browser.height();
        this._active = !0, this._resetTimer(), this._resetState(), this.checkbox.setResponse(""), this.challenge.setup({
            a11yChallenge: r,
            manifest: t,
            width: c,
            height: l,
            charity: n,
            link: i,
            action: o,
            rqdata: a,
            wdata: gn(),
            errors: s.concat(vn.collect())
        })
    }, Fn.prototype.getGetCaptchaManifest = function() {
        var e = (this._origData || {}).manifest || null;
        return e || ((e = Object.create(null)).st = Date.now()), e.v = 1, e.topLevel = nn.getData(), e.session = hn.getSession(), e.widgetList = hn.getCaptchaIdList(), e.widgetId = this.id, e.href = window.location.href, e.prev = JSON.parse(JSON.stringify(this._state)), e
    }, Fn.prototype.displayChallenge = function(e) {
        if (this._active) {
            var t = this;
            this.visible = !0;
            var n = this.checkbox,
                r = this.challenge,
                i = ee.Browser.height();
            if (!("ie" === ee.Browser.type && 8 === ee.Browser.version)) {
                var o = window.getComputedStyle(document.body).getPropertyValue("overflow-y");
                this.overflow.override = "hidden" === o, this.overflow.override && (this.overflow.cssUsed = "" === document.body.style.overflow && "" === document.body.style.overflowY, this.overflow.cssUsed || (this.overflow.value = "" === o ? "auto" : o), this.overflow.scroll = ee.Browser.scrollY(), document.body.style.overflowY = "auto")
            }
            return new Promise((function(o) {
                n.status(), n.getTickLocation().then((function(a) {
                    if (t._active) {
                        if (r.size(e.width, e.height, e.mobile), r.show(), n.clearLoading(), n.location.bounding = n.getBounding(), n.location.tick = a, n.location.offset = n.getOffset(), r.position(n.location), r.focus(), r.height > window.document.documentElement.clientHeight)(window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = Math.abs(r.height - i) + r.top;
                        o()
                    }
                }))
            })).then((function() {
                Me("Challenge is displayed", "hCaptcha", "info"), t.onOpen && Xe(t.onOpen)
            }))
        }
    }, Fn.prototype.resize = function(e, t, n) {
        var r = this,
            i = this.checkbox,
            o = this.challenge;
        o.getDimensions(e, t).then((function(e) {
            e && o.size(e.width, e.height, e.mobile), i.location.bounding = i.getBounding(), i.location.offset = i.getOffset(), ee.System.mobile && !n || o.position(i.location)
        }))["catch"]((function(e) {
            r.closeChallenge.call(r, {
                event: le,
                message: "Captcha resize caused error.",
                error: e
            })
        }))
    }, Fn.prototype.position = function() {
        var e = this.checkbox,
            t = this.challenge;
        ee.System.mobile || (e.location.bounding = e.getBounding(), t.position(e.location))
    }, Fn.prototype.reset = function() {
        Me("Captcha Reset", "hCaptcha", "info");
        try {
            this.checkbox.reset(), this.checkbox.setResponse(""), this._resetTimer(), this._resetState()
        } catch (zn) {
            Pe("hCaptcha", zn)
        }
    }, Fn.prototype._resetState = function() {
        for (var e in this._state) this._state[e] = !1
    }, Fn.prototype.closeChallenge = function(e) {
        this.visible = !1, this._active = !1;
        var t = this,
            n = this.checkbox,
            r = this.challenge;
        this.overflow.override && ((window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = this.overflow.scroll, this.overflow.override = !1, this.overflow.scroll = 0, document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value);
        var i = e.response || "";
        switch (n.setResponse(i), r.close(e.event), n.$iframe.dom.focus(), Me("Challenge has closed", "hCaptcha", "info", {
            event: e.event,
            response: e.response,
            message: e.message
        }), e.event) {
            case ne:
                this._state.escaped = !0, n.reset(), t.onClose && Xe(t.onClose), t._promise && t._promise.reject(re);
                break;
            case ie:
                this._state.expiredChallenge = !0, n.reset(), n.status("hCaptcha window closed due to timeout.", !0), t.onChalExpire && Xe(t.onChalExpire), t._promise && t._promise.reject(ie);
                break;
            case le:
            case ae:
            case ce:
                var o = e.event;
                n.reset(), e.event === ce ? (n.status(e.message), 429 === e.status ? o = se : "invalid-data" === e.message ? o = oe : "client-fail" === e.message && (o = le)) : e.event === ae ? o = le : e.event === le && "Answers are incomplete" === e.message && (o = ue), Oe("Failed to execute", "error", "hCaptcha", {
                    error: o,
                    event: e.event,
                    message: e.message
                }), this.onError && Xe(this.onError, o), t._promise && t._promise.reject(o);
                break;
            case te:
                this._state.passed = !0, n.tick(), this.onPass && Xe(this.onPass, i), t._promise && t._promise.resolve({
                    response: i,
                    key: pn(this.id)
                }), "number" == typeof e.expiration && (t._resetTimer(), t._responseTimer = setTimeout((function() {
                    try {
                        n.$iframe && (n.$iframe.dom.contentWindow ? (n.reset(), n.setResponse(""), n.status("hCaptcha security token has expired. Please complete the challenge again.", !0)) : yn(t.id))
                    } catch (In) {
                        Pe("global", In)
                    }
                    t.onExpire && Xe(t.onExpire), t._responseTimer = null, t._state.expiredResponse = !0
                }), 1e3 * e.expiration))
        }
        t._promise = null
    }, Fn.prototype.updateTranslation = function(e) {
        this.config.hl = e, this._langSet = !0, this.checkbox && this.checkbox.sendTranslation(e), this.challenge && this.challenge.sendTranslation(e)
    }, Fn.prototype.isLangSet = function() {
        return this._langSet
    }, Fn.prototype.isReady = function() {
        return this._ready
    }, Fn.prototype.setReady = function(e) {
        if (this._ready = e, this._ready) {
            var t;
            Me("Instance is ready", "hCaptcha", "info");
            for (var n = this._listeners.length; --n > -1;) t = this._listeners[n], this._listeners.splice(n, 1), t()
        }
    }, Fn.prototype.setPromise = function(e) {
        this._promise = e
    }, Fn.prototype.onReady = function(e) {
        var t = Array.prototype.slice.call(arguments, 1),
            n = function() {
                e.apply(null, t)
            };
        this._ready ? n() : this._listeners.push(n)
    }, Fn.prototype.destroy = function() {
        (Me("Captcha Destroy", "hCaptcha", "info"), this._resetTimer(), this.overflow.override) && ((window.document.scrollingElement || document.getElementsByTagName("html")[0]).scrollTop = this.overflow.scroll, this.overflow.override = !1, this.overflow.scroll = 0, document.body.style.overflowY = this.overflow.cssUsed ? null : this.overflow.value);
        this.challenge.destroy(), this.checkbox.destroy(), this.challenge = null, this.checkbox = null
    }, Fn.prototype.setSiteConfig = function(e) {
        var t = this;
        if ("ok" in e) {
            var n = e.ok.features || {};
            if (this.config.themeConfig && n.custom_theme) {
                var r = "custom-" + this.id;
                Mn.add(r, Mn.extend(Mn.active(), this.config.themeConfig)), Mn.use(r), this.challenge.style()
            }
        }
        return "invisible" === this.config.size ? ("err" in e && console.error("[hCaptcha] " + e.err.message), Promise.resolve()) : this.checkbox.ready.then((function() {
            return t.checkbox.chat.send("site-setup", e), new Promise((function(e) {
                t.checkbox.chat.listen("checkbox-loaded", (function() {
                    e()
                }))
            }))
        }))
    };
    var Nn = 0,
        Bn = ["hl", "custom", "tplinks", "sitekey", "theme", "size", "tabindex", "challenge-container", "confirm-nav", "orientation", "mode"];

    function Kn(e, t) {
        if (e) try {
            e.updateTranslation(t)
        } catch (In) {
            Pe("translation", In)
        }
    }

    function Zn(e, t) {
        return new Promise((function(n, r) {
            var i = setTimeout((function() {
                r(new Error("timeout"))
            }), t);
            e.then((function(e) {
                clearTimeout(i), n(e)
            }))["catch"]((function(e) {
                clearTimeout(i), r(e)
            }))
        }))
    }
    var qn = {
        render: function(e, t) {
            if ("string" == typeof e && (e = document.getElementById(e)), e && 1 === e.nodeType)
                if (function(e) {
                        if (!e || !("challenge-container" in e)) return !0;
                        var t = e["challenge-container"];
                        return "string" == typeof t && (t = document.getElementById(t)), !!t && 1 === t.nodeType
                    }(t)) {
                    if (!1 !== mn.isSupported()) {
                        for (var n, r, i = e.getElementsByTagName("iframe"), o = -1; ++o < i.length && !n;)(r = i[o].getAttribute("data-hcaptcha-widget-id")) && (n = !0);
                        if (n) return console.error("Only one captcha is permitted per parent container."), r;
                        Me("Render instance", "hCaptcha", "info");
                        var a = Ye(e, t),
                            s = Nn++ + Math.random().toString(36).substr(2),
                            c = Object.create(null);
                        c.sentry = ve.sentry, c.reportapi = ve.reportapi, c.recaptchacompat = ve.recaptchacompat, c.custom = ve.custom, null !== ve.language && (c.hl = yt.getLocale()), ve.assethost && (c.assethost = ve.assethost), ve.imghost && (c.imghost = ve.imghost), ve.tplinks && (c.tplinks = ve.tplinks), ve.se && (c.se = ve.se), "off" === ve.pat && (c.pat = ve.pat), c.pstissuer = ve.pstIssuer, "landscape" === ve.orientation && (c.orientation = ve.orientation);
                        for (var l = 0; l < Bn.length; l++) {
                            var u = Bn[l];
                            u in a && (c[u] = a[u])
                        }
                        var h = ve.endpoint,
                            d = c.sitekey;
                        "78c843a4-f80d-4a14-b3e5-74b492762487" === d && (h = me), h === fe && -1 === ["pt-BR", "es-BR"].indexOf(navigator.language) && Math.random() < .001 && d && -1 === d.indexOf("-0000-0000-0000-") && (h = me), h !== fe && (c.endpoint = h), c.theme = ve.theme;
                        var p = window.location,
                            f = p.origin || p.protocol + "//" + p.hostname + (p.port ? ":" + p.port : "");
                        if ("null" !== f && (c.origin = f), a.theme) try {
                            var m = a.theme;
                            "string" == typeof m && (m = JSON.parse(m)), c.themeConfig = m, c.custom = !0
                        } catch (Ln) {
                            c.theme = m
                        }
                        if (e instanceof HTMLButtonElement || e instanceof HTMLInputElement) {
                            var y = new ct("div", ".h-captcha");
                            y.css({
                                display: "none"
                            });
                            for (var g = null, v = 0; v < e.attributes.length; v++)(g = e.attributes[v]).name.startsWith("data-") && y.setAttribute(g.name, g.value);
                            var w = e.tagName.toLowerCase() + "[data-hcaptcha-widget-id='" + s + "']";
                            e.setAttribute("data-hcaptcha-widget-id", s), y.setAttribute("data-hcaptcha-source-id", w), e.parentNode.insertBefore(y.dom, e), e.onclick = function(e) {
                                return e.preventDefault(), Me("User initiated", "hCaptcha", "info"), dn(s)
                            }, e = y, c.size = "invisible"
                        }
                        c.mode === ye && "invisible" === c.size && (console.warn("[hCaptcha] mode='auto' cannot be used in combination with size='invisible'."), delete c.mode);
                        try {
                            var b = new Fn(e, s, c)
                        } catch (In) {
                            var _ = "Your browser plugins or privacy policies are blocking the hCaptcha service. Please disable them for hCaptcha.com";
                            return In instanceof cn && (_ = "hCaptcha has failed to initialize. Please see the developer tools console for more information.", console.error(In.message)), Ee(e, _), void Pe("api", In)
                        }
                        a.callback && (b.onPass = a.callback), a["expired-callback"] && (b.onExpire = a["expired-callback"]), a["chalexpired-callback"] && (b.onChalExpire = a["chalexpired-callback"]), a["open-callback"] && (b.onOpen = a["open-callback"]), a["close-callback"] && (b.onClose = a["close-callback"]), a["error-callback"] && (b.onError = a["error-callback"]);
                        try {
                            nn.setData("inv", "invisible" === c.size), nn.setData("size", c.size), nn.setData("theme", tt(c.themeConfig || c.theme)), nn.setData("pel", (e.outerHTML || "").replace(e.innerHTML, "")), en.setData("inv", "invisible" === c.size), en.setData("size", c.size), en.setData("theme", tt(c.themeConfig || c.theme)), en.setData("pel", (e.outerHTML || "").replace(e.innerHTML, ""))
                        } catch (zn) {
                            Pe("api", zn)
                        }
                        return function(e, t) {
                                if ("invisible" === t.size) return;
                                e.checkbox.chat.listen("checkbox-selected", (function(t) {
                                    Me("User initiated", "hCaptcha", "info"), Zn(Qt(), 100)["finally"]((function() {
                                        var n = "enter" === t.action ? "kb" : "m";
                                        nn.setData("exec", n), en.setData("exec", n), e.onReady(e.initChallenge, t)
                                    }))["catch"]((function(e) {
                                        Pe("submitvm", e)
                                    }))
                                })), e.checkbox.chat.listen("checkbox-loaded", (function(n) {
                                    Me("Loaded", "frame:checkbox", "info"), e.checkbox.location.bounding = e.checkbox.getBounding(), e.checkbox.location.tick = n, e.checkbox.location.offset = e.checkbox.getOffset(), e.checkbox.sendTranslation(t.hl)
                                })), t.mode === ye && e.onReady((function() {
                                    dn(e.id)
                                }), t)
                            }(b, c),
                            function(e, t) {
                                function n(t, n) {
                                    if (t.locale) {
                                        var r = yt.resolveLocale(t.locale);
                                        An(r).then((function() {
                                            n ? Kn(e, r) : (yt.setLocale(r), hn.each((function(e) {
                                                Kn(e, r)
                                            })))
                                        }))["catch"]((function(e) {
                                            Pe("api", e, {
                                                locale: r
                                            })
                                        }))
                                    }
                                }
                                e.challenge.chat.listen("site-setup", (function(t) {
                                    var n = e.setSiteConfig(t);
                                    e.challenge.onReady((function() {
                                        n.then((function() {
                                            e.setReady(!0)
                                        }))
                                    }))
                                })), e.challenge.chat.listen("challenge-loaded", (function() {
                                    Me("Loaded", "frame:challenge", "info"), e.challenge.setReady(), e.challenge.sendTranslation(t.hl)
                                })), e.challenge.chat.answer("challenge-ready", (function(t, n) {
                                    e.displayChallenge(t).then(n.resolve)
                                })), e.challenge.chat.listen("challenge-resize", (function() {
                                    var t = ee.Browser.width(),
                                        n = ee.Browser.height();
                                    e.resize(t, n)
                                })), e.challenge.chat.listen(re, (function(t) {
                                    nn.setData("lpt", Date.now()), en.setData("lpt", Date.now()), e.closeChallenge(t)
                                })), e.challenge.chat.answer("get-url", (function(e) {
                                    e.resolve(window.location.href)
                                })), e.challenge.chat.answer("getcaptcha-manifest", (function(t) {
                                    t.resolve(e.getGetCaptchaManifest())
                                })), e.challenge.chat.answer("check-api", (function(e) {
                                    Zn(Qt(), 100)["finally"]((function() {
                                        e.resolve(nn.getData())
                                    }))["catch"]((function(e) {
                                        Pe("submitvm", e)
                                    }))
                                })), e.challenge.chat.listen("challenge-key", (function(t) {
                                    hn.pushSession(t.key, e.id)
                                })), e.challenge.onOverlayClick((function() {
                                    e.closeChallenge({
                                        event: ne
                                    })
                                })), e.challenge.chat.listen("challenge-language", n), n({
                                    locale: t.hl
                                }, !0), e.challenge.chat.answer("get-ac", (function(e) {
                                    e.resolve(je.hasCookie("hc_accessibility"))
                                }))
                            }(b, c), hn.add(b), s
                    }
                    Ee(e, "Your browser is missing or has disabled Cross-Window Messaging. Please <a style='color:inherit;text-decoration:underline; font: inherit' target='_blank' href='https://www.whatismybrowser.com/guides/how-to-update-your-browser/auto'>upgrade your browser</a> or enable it for hCaptcha.com")
                } else console.log("[hCaptcha] render: invalid challenge container '" + t["challenge-container"] + "'.");
            else console.log("[hCaptcha] render: invalid container '" + e + "'.")
        },
        reset: function(e) {
            var t;
            if (e) {
                if (!(t = hn.getById(e))) throw new an(e);
                t.reset()
            } else {
                if (!(t = hn.getByIndex(0))) throw new sn;
                t.reset()
            }
        },
        remove: yn,
        execute: dn,
        getResponse: function(e) {
            var t, n;
            if ((n = e ? hn.getById(e) : hn.getByIndex(0)) && (t = n.checkbox.response || ""), void 0 !== t) return t;
            throw e ? new an(e) : new sn
        },
        getRespKey: pn,
        close: function(e) {
            var t = !1;
            if (!(t = e ? hn.getById(e) : hn.getByIndex(0))) throw e ? new an(e) : new sn;
            t.closeChallenge({
                event: ne
            })
        },
        setData: function(e, t) {
            if ("object" != typeof e || t || (t = e, e = null), !t || "object" != typeof t) throw Error("[hCaptcha] invalid data supplied");
            var n = !1;
            if (!(n = e ? hn.getById(e) : hn.getByIndex(0))) throw e ? new an(e) : new sn;
            Me("Set data", "hCaptcha", "info");
            var r = n.challenge.setData.bind(n.challenge);
            n.onReady(r, t)
        },
        nodes: hn
    };
    ! function(e) {
        tn(0), ge.file = "hcaptcha";
        var t = document.currentScript,
            n = !1,
            r = !1,
            i = "on",
            o = ee.Browser.width() / ee.Browser.height(),
            a = !(!window.hcaptcha || !window.hcaptcha.render);

        function s() {
            var e = ee.Browser.width(),
                t = ee.Browser.height(),
                n = ee.System.mobile && o !== e / t;
            o = e / t, u(), qn.nodes.each((function(r) {
                r.visible && r.resize(e, t, n)
            }))
        }

        function c(e) {
            l(), qn.nodes.each((function(e) {
                e.visible && e.position()
            }))
        }

        function l() {
            var e = [ee.Browser.scrollX(), ee.Browser.scrollY(), document.documentElement.clientWidth / ee.Browser.width(), Date.now()];
            nn.circBuffPush("xy", e), en.circBuffPush("xy", e)
        }

        function u() {
            var e = [ee.Browser.width(), ee.Browser.height(), ee.System.dpr(), Date.now()];
            nn.circBuffPush("wn", e)
        }
        window.hcaptcha = {
                render: function() {
                    return a || console.warn("[hCaptcha] should not render before js api is fully loaded. `render=explicit` should be used in combination with `onload`."), qn.render.apply(this, arguments)
                },
                remove: qn.remove,
                execute: qn.execute,
                reset: qn.reset,
                close: qn.close,
                setData: qn.setData,
                getResponse: qn.getResponse,
                getRespKey: qn.getRespKey
            }, vn.run(3e3),
            function(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                !0 !== jt && "interactive" !== document.readyState && "loaded" !== document.readyState && "complete" !== document.readyState ? (Dt.push({
                    fn: e,
                    args: t
                }), !1 === Wt && Ft()) : setTimeout((function() {
                    e(t)
                }), 1)
            }((function() {
                ! function() {
                    var o;
                    o = t ? [t] : document.getElementsByTagName("script");
                    var a = -1,
                        s = !1,
                        c = null,
                        l = null;
                    for (; ++a < o.length && !1 === s;) o[a] && o[a].src && (l = (c = o[a].src.split("?"))[0], /\/(hcaptcha|1\/api)\.js$/.test(l) && (s = o[a], l && -1 !== l.toLowerCase().indexOf("www.") && console.warn("[hCaptcha] JS API is being loaded from www.hcaptcha.com. Please use https://js.hcaptcha.com/1/api.js")));
                    if (!1 === s) return;
                    e = e || Ze(c[1]), n = e.onload || !1, r = e.render || !1, "off" === e.tplinks && (i = "off");
                    ve.tplinks = i, ve.language = e.hl || null, e.endpoint && (ve.endpoint = e.endpoint);
                    ve.reportapi = e.reportapi || ve.reportapi, ve.imghost = e.imghost || null, ve.custom = e.custom || ve.custom, ve.se = e.se || null, ve.pat = e.pat || ve.pat, ve.pstIssuer = e.pstissuer || ve.pstIssuer, ve.orientation = e.orientation || null, e.assethost && (et.URL(e.assethost) ? ve.assethost = e.assethost : console.error("Invalid assethost uri."));
                    ve.recaptchacompat = e.recaptchacompat || ve.recaptchacompat, ge.host = e.host || window.location.hostname, ve.sentry = !1 !== e.sentry, Ue(!1), ve.language = ve.language || window.navigator.userLanguage || window.navigator.language, yt.setLocale(ve.language), "off" === ve.recaptchacompat ? console.log("recaptchacompat disabled") : window.grecaptcha = window.hcaptcha
                }(), n && setTimeout((function() {
                    Xe(n)
                }), 1), a || (a = !0, function() {
                    var e = yt.getLocale();
                    if ("en" === e) return;
                    An(e).then((function() {
                        qn.nodes.each((function(t) {
                            if (t) try {
                                t.isLangSet() || t.updateTranslation(e)
                            } catch (In) {
                                Pe("translation", In)
                            }
                        }))
                    }))["catch"]((function(t) {
                        Pe("api", t, {
                            locale: e
                        })
                    }))
                }(), !1 === r || "onload" === r ? Ve(qn.render) : "explicit" !== r && console.log("hcaptcha: invalid render parameter '" + r + "', using 'explicit' instead."), function() {
                    try {
                        nn.record(), en.record(), nn.setData("sc", ee.Browser.getScreenDimensions()), nn.setData("or", ee.Browser.getOrientation()), nn.setData("wi", ee.Browser.getWindowDimensions()), nn.setData("nv", ee.Browser.interrogateNavigator()), nn.setData("dr", document.referrer), en.setData("sc", ee.Browser.getScreenDimensions()), en.setData("wi", ee.Browser.getWindowDimensions()), en.setData("nv", ee.Browser.interrogateNavigator()), en.setData("or", ee.Browser.getOrientation()), en.setData("dr", document.referrer), u(), l()
                    } catch (In) {
                        Pe("motion", In)
                    }
                }(), Bt.addEventListener("resize", s), Bt.addEventListener("scroll", c))
            }))
    }()
}();