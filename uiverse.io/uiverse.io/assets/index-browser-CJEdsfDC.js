var Ne = {},
    ve = Object.defineProperty,
    Le = Object.getOwnPropertyDescriptor,
    $e = Object.getOwnPropertyNames,
    je = Object.prototype.hasOwnProperty,
    Pe = (e, r) => {
        for (var i in r) ve(e, i, {
            get: r[i],
            enumerable: !0
        })
    },
    He = (e, r, i, t) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let s of $e(r)) !je.call(e, s) && s !== i && ve(e, s, {
                get: () => r[s],
                enumerable: !(t = Le(r, s)) || t.enumerable
            });
        return e
    },
    Ze = e => He(ve({}, "__esModule", {
        value: !0
    }), e),
    ke = {};
Pe(ke, {
    Decimal: () => Kr,
    Public: () => Fe,
    getRuntime: () => er,
    makeStrictEnum: () => Ge,
    objectEnumValues: () => We
});
var Ve = Ze(ke),
    Fe = {};
Pe(Fe, {
    validator: () => Je
});

function Je(...e) {
    return r => r
}
var X = Symbol(),
    de = new WeakMap,
    ze = class {
        constructor(e) {
            e === X ? de.set(this, "Prisma.".concat(this._getName())) : de.set(this, "new Prisma.".concat(this._getNamespace(), ".").concat(this._getName(), "()"))
        }
        _getName() {
            return this.constructor.name
        }
        toString() {
            return de.get(this)
        }
    },
    we = class extends ze {
        _getNamespace() {
            return "NullTypes"
        }
    },
    ue = class extends we {};
ye(ue, "DbNull");
var le = class extends we {};
ye(le, "JsonNull");
var ce = class extends we {};
ye(ce, "AnyNull");
var We = {
    classes: {
        DbNull: ue,
        JsonNull: le,
        AnyNull: ce
    },
    instances: {
        DbNull: new ue(X),
        JsonNull: new le(X),
        AnyNull: new ce(X)
    }
};

function ye(e, r) {
    Object.defineProperty(e, "name", {
        value: r,
        configurable: !0
    })
}
var Ke = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);

function Ge(e) {
    return new Proxy(e, {
        get(r, i) {
            if (i in r) return r[i];
            if (!Ke.has(i)) throw new TypeError("Invalid enum value: ".concat(String(i)))
        }
    })
}
var Qe = "Cloudflare-Workers",
    Xe = "node";

function Ye() {
    var e, r, i;
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Qe ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : ((i = (r = globalThis.process) == null ? void 0 : r.release) == null ? void 0 : i.name) === Xe ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown"
}
var xe = {
    node: "Node.js",
    workerd: "Cloudflare Workers",
    deno: "Deno and Deno Deploy",
    netlify: "Netlify Edge Functions",
    "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
};

function er() {
    let e = Ye();
    return {
        id: e,
        prettyName: xe[e] || e,
        isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e)
    }
}
var H = 9e15,
    j = 1e9,
    me = "0123456789abcdef",
    x = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    ee = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    pe = {
        precision: 20,
        rounding: 4,
        modulo: 1,
        toExpNeg: -7,
        toExpPos: 21,
        minE: -H,
        maxE: H,
        crypto: !1
    },
    Ce, M, v = !0,
    ie = "[DecimalError] ",
    $ = ie + "Invalid argument: ",
    Se = ie + "Precision limit exceeded",
    Ae = ie + "crypto unavailable",
    Re = "[object Decimal]",
    C = Math.floor,
    N = Math.pow,
    rr = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    ir = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    tr = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    Oe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    T = 1e7,
    g = 7,
    nr = 9007199254740991,
    sr = x.length - 1,
    he = ee.length - 1,
    p = {
        toStringTag: Re
    };
p.absoluteValue = p.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), h(e)
};
p.ceil = function() {
    return h(new this.constructor(this), this.e + 1, 2)
};
p.clampedTo = p.clamp = function(e, r) {
    var i, t = this,
        s = t.constructor;
    if (e = new s(e), r = new s(r), !e.s || !r.s) return new s(NaN);
    if (e.gt(r)) throw Error($ + r);
    return i = t.cmp(e), i < 0 ? e : t.cmp(r) > 0 ? r : new s(t)
};
p.comparedTo = p.cmp = function(e) {
    var r, i, t, s, n = this,
        o = n.d,
        a = (e = new n.constructor(e)).d,
        d = n.s,
        u = e.s;
    if (!o || !a) return !d || !u ? NaN : d !== u ? d : o === a ? 0 : !o ^ d < 0 ? 1 : -1;
    if (!o[0] || !a[0]) return o[0] ? d : a[0] ? -u : 0;
    if (d !== u) return d;
    if (n.e !== e.e) return n.e > e.e ^ d < 0 ? 1 : -1;
    for (t = o.length, s = a.length, r = 0, i = t < s ? t : s; r < i; ++r)
        if (o[r] !== a[r]) return o[r] > a[r] ^ d < 0 ? 1 : -1;
    return t === s ? 0 : t > s ^ d < 0 ? 1 : -1
};
p.cosine = p.cos = function() {
    var e, r, i = this,
        t = i.constructor;
    return i.d ? i.d[0] ? (e = t.precision, r = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + g, t.rounding = 1, i = or(t, Me(t, i)), t.precision = e, t.rounding = r, h(M == 2 || M == 3 ? i.neg() : i, e, r, !0)) : new t(1) : new t(NaN)
};
p.cubeRoot = p.cbrt = function() {
    var e, r, i, t, s, n, o, a, d, u, l = this,
        c = l.constructor;
    if (!l.isFinite() || l.isZero()) return new c(l);
    for (v = !1, n = l.s * N(l.s * l, 1 / 3), !n || Math.abs(n) == 1 / 0 ? (i = P(l.d), e = l.e, (n = (e - i.length + 1) % 3) && (i += n == 1 || n == -2 ? "0" : "00"), n = N(i, 1 / 3), e = C((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), n == 1 / 0 ? i = "5e" + e : (i = n.toExponential(), i = i.slice(0, i.indexOf("e") + 1) + e), t = new c(i), t.s = l.s) : t = new c(n.toString()), o = (e = c.precision) + 3;;)
        if (a = t, d = a.times(a).times(a), u = d.plus(l), t = b(u.plus(l).times(a), u.plus(d), o + 2, 1), P(a.d).slice(0, o) === (i = P(t.d)).slice(0, o))
            if (i = i.slice(o - 3, o + 1), i == "9999" || !s && i == "4999") {
                if (!s && (h(a, e + 1, 0), a.times(a).times(a).eq(l))) {
                    t = a;
                    break
                }
                o += 4, s = 1
            } else {
                (!+i || !+i.slice(1) && i.charAt(0) == "5") && (h(t, e + 1, 1), r = !t.times(t).times(t).eq(l));
                break
            }
    return v = !0, h(t, e, c.rounding, r)
};
p.decimalPlaces = p.dp = function() {
    var e, r = this.d,
        i = NaN;
    if (r) {
        if (e = r.length - 1, i = (e - C(this.e / g)) * g, e = r[e], e)
            for (; e % 10 == 0; e /= 10) i--;
        i < 0 && (i = 0)
    }
    return i
};
p.dividedBy = p.div = function(e) {
    return b(this, new this.constructor(e))
};
p.dividedToIntegerBy = p.divToInt = function(e) {
    var r = this,
        i = r.constructor;
    return h(b(r, new i(e), 0, 1, 1), i.precision, i.rounding)
};
p.equals = p.eq = function(e) {
    return this.cmp(e) === 0
};
p.floor = function() {
    return h(new this.constructor(this), this.e + 1, 3)
};
p.greaterThan = p.gt = function(e) {
    return this.cmp(e) > 0
};
p.greaterThanOrEqualTo = p.gte = function(e) {
    var r = this.cmp(e);
    return r == 1 || r === 0
};
p.hyperbolicCosine = p.cosh = function() {
    var e, r, i, t, s, n = this,
        o = n.constructor,
        a = new o(1);
    if (!n.isFinite()) return new o(n.s ? 1 / 0 : NaN);
    if (n.isZero()) return a;
    i = o.precision, t = o.rounding, o.precision = i + Math.max(n.e, n.sd()) + 4, o.rounding = 1, s = n.d.length, s < 32 ? (e = Math.ceil(s / 3), r = (1 / ne(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), n = Z(o, 1, n.times(r), new o(1), !0);
    for (var d, u = e, l = new o(8); u--;) d = n.times(n), n = a.minus(d.times(l.minus(d.times(l))));
    return h(n, o.precision = i, o.rounding = t, !0)
};
p.hyperbolicSine = p.sinh = function() {
    var e, r, i, t, s = this,
        n = s.constructor;
    if (!s.isFinite() || s.isZero()) return new n(s);
    if (r = n.precision, i = n.rounding, n.precision = r + Math.max(s.e, s.sd()) + 4, n.rounding = 1, t = s.d.length, t < 3) s = Z(n, 2, s, s, !0);
    else {
        e = 1.4 * Math.sqrt(t), e = e > 16 ? 16 : e | 0, s = s.times(1 / ne(5, e)), s = Z(n, 2, s, s, !0);
        for (var o, a = new n(5), d = new n(16), u = new n(20); e--;) o = s.times(s), s = s.times(a.plus(o.times(d.times(o).plus(u))))
    }
    return n.precision = r, n.rounding = i, h(s, r, i, !0)
};
p.hyperbolicTangent = p.tanh = function() {
    var e, r, i = this,
        t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, r = t.rounding, t.precision = e + 7, t.rounding = 1, b(i.sinh(), i.cosh(), t.precision = e, t.rounding = r)) : new t(i.s)
};
p.inverseCosine = p.acos = function() {
    var e, r = this,
        i = r.constructor,
        t = r.abs().cmp(1),
        s = i.precision,
        n = i.rounding;
    return t !== -1 ? t === 0 ? r.isNeg() ? D(i, s, n) : new i(0) : new i(NaN) : r.isZero() ? D(i, s + 4, n).times(.5) : (i.precision = s + 6, i.rounding = 1, r = r.asin(), e = D(i, s + 4, n).times(.5), i.precision = s, i.rounding = n, e.minus(r))
};
p.inverseHyperbolicCosine = p.acosh = function() {
    var e, r, i = this,
        t = i.constructor;
    return i.lte(1) ? new t(i.eq(1) ? 0 : NaN) : i.isFinite() ? (e = t.precision, r = t.rounding, t.precision = e + Math.max(Math.abs(i.e), i.sd()) + 4, t.rounding = 1, v = !1, i = i.times(i).minus(1).sqrt().plus(i), v = !0, t.precision = e, t.rounding = r, i.ln()) : new t(i)
};
p.inverseHyperbolicSine = p.asinh = function() {
    var e, r, i = this,
        t = i.constructor;
    return !i.isFinite() || i.isZero() ? new t(i) : (e = t.precision, r = t.rounding, t.precision = e + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, t.rounding = 1, v = !1, i = i.times(i).plus(1).sqrt().plus(i), v = !0, t.precision = e, t.rounding = r, i.ln())
};
p.inverseHyperbolicTangent = p.atanh = function() {
    var e, r, i, t, s = this,
        n = s.constructor;
    return s.isFinite() ? s.e >= 0 ? new n(s.abs().eq(1) ? s.s / 0 : s.isZero() ? s : NaN) : (e = n.precision, r = n.rounding, t = s.sd(), Math.max(t, e) < 2 * -s.e - 1 ? h(new n(s), e, r, !0) : (n.precision = i = t - s.e, s = b(s.plus(1), new n(1).minus(s), i + e, 1), n.precision = e + 4, n.rounding = 1, s = s.ln(), n.precision = e, n.rounding = r, s.times(.5))) : new n(NaN)
};
p.inverseSine = p.asin = function() {
    var e, r, i, t, s = this,
        n = s.constructor;
    return s.isZero() ? new n(s) : (r = s.abs().cmp(1), i = n.precision, t = n.rounding, r !== -1 ? r === 0 ? (e = D(n, i + 4, t).times(.5), e.s = s.s, e) : new n(NaN) : (n.precision = i + 6, n.rounding = 1, s = s.div(new n(1).minus(s.times(s)).sqrt().plus(1)).atan(), n.precision = i, n.rounding = t, s.times(2)))
};
p.inverseTangent = p.atan = function() {
    var e, r, i, t, s, n, o, a, d, u = this,
        l = u.constructor,
        c = l.precision,
        m = l.rounding;
    if (u.isFinite()) {
        if (u.isZero()) return new l(u);
        if (u.abs().eq(1) && c + 4 <= he) return o = D(l, c + 4, m).times(.25), o.s = u.s, o
    } else {
        if (!u.s) return new l(NaN);
        if (c + 4 <= he) return o = D(l, c + 4, m).times(.5), o.s = u.s, o
    }
    for (l.precision = a = c + 10, l.rounding = 1, i = Math.min(28, a / g + 2 | 0), e = i; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (v = !1, r = Math.ceil(a / g), t = 1, d = u.times(u), o = new l(u), s = u; e !== -1;)
        if (s = s.times(d), n = o.minus(s.div(t += 2)), s = s.times(d), o = n.plus(s.div(t += 2)), o.d[r] !== void 0)
            for (e = r; o.d[e] === n.d[e] && e--;);
    return i && (o = o.times(2 << i - 1)), v = !0, h(o, l.precision = c, l.rounding = m, !0)
};
p.isFinite = function() {
    return !!this.d
};
p.isInteger = p.isInt = function() {
    return !!this.d && C(this.e / g) > this.d.length - 2
};
p.isNaN = function() {
    return !this.s
};
p.isNegative = p.isNeg = function() {
    return this.s < 0
};
p.isPositive = p.isPos = function() {
    return this.s > 0
};
p.isZero = function() {
    return !!this.d && this.d[0] === 0
};
p.lessThan = p.lt = function(e) {
    return this.cmp(e) < 0
};
p.lessThanOrEqualTo = p.lte = function(e) {
    return this.cmp(e) < 1
};
p.logarithm = p.log = function(e) {
    var r, i, t, s, n, o, a, d, u = this,
        l = u.constructor,
        c = l.precision,
        m = l.rounding,
        f = 5;
    if (e == null) e = new l(10), r = !0;
    else {
        if (e = new l(e), i = e.d, e.s < 0 || !i || !i[0] || e.eq(1)) return new l(NaN);
        r = e.eq(10)
    }
    if (i = u.d, u.s < 0 || !i || !i[0] || u.eq(1)) return new l(i && !i[0] ? -1 / 0 : u.s != 1 ? NaN : i ? 0 : 1 / 0);
    if (r)
        if (i.length > 1) n = !0;
        else {
            for (s = i[0]; s % 10 === 0;) s /= 10;
            n = s !== 1
        }
    if (v = !1, a = c + f, o = L(u, a), t = r ? re(l, a + 10) : L(e, a), d = b(o, t, a, 1), J(d.d, s = c, m))
        do
            if (a += 10, o = L(u, a), t = r ? re(l, a + 10) : L(e, a), d = b(o, t, a, 1), !n) {
                +P(d.d).slice(s + 1, s + 15) + 1 == 1e14 && (d = h(d, c + 1, 0));
                break
            }
    while (J(d.d, s += 10, m));
    return v = !0, h(d, c, m)
};
p.minus = p.sub = function(e) {
    var r, i, t, s, n, o, a, d, u, l, c, m, f = this,
        y = f.constructor;
    if (e = new y(e), !f.d || !e.d) return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s) return e.s = -e.s, f.plus(e);
    if (u = f.d, m = e.d, a = y.precision, d = y.rounding, !u[0] || !m[0]) {
        if (m[0]) e.s = -e.s;
        else if (u[0]) e = new y(f);
        else return new y(d === 3 ? -0 : 0);
        return v ? h(e, a, d) : e
    }
    if (i = C(e.e / g), l = C(f.e / g), u = u.slice(), n = l - i, n) {
        for (c = n < 0, c ? (r = u, n = -n, o = m.length) : (r = m, i = l, o = u.length), t = Math.max(Math.ceil(a / g), o) + 2, n > t && (n = t, r.length = 1), r.reverse(), t = n; t--;) r.push(0);
        r.reverse()
    } else {
        for (t = u.length, o = m.length, c = t < o, c && (o = t), t = 0; t < o; t++)
            if (u[t] != m[t]) {
                c = u[t] < m[t];
                break
            }
        n = 0
    }
    for (c && (r = u, u = m, m = r, e.s = -e.s), o = u.length, t = m.length - o; t > 0; --t) u[o++] = 0;
    for (t = m.length; t > n;) {
        if (u[--t] < m[t]) {
            for (s = t; s && u[--s] === 0;) u[s] = T - 1;
            --u[s], u[t] += T
        }
        u[t] -= m[t]
    }
    for (; u[--o] === 0;) u.pop();
    for (; u[0] === 0; u.shift()) --i;
    return u[0] ? (e.d = u, e.e = te(u, i), v ? h(e, a, d) : e) : new y(d === 3 ? -0 : 0)
};
p.modulo = p.mod = function(e) {
    var r, i = this,
        t = i.constructor;
    return e = new t(e), !i.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || i.d && !i.d[0] ? h(new t(i), t.precision, t.rounding) : (v = !1, t.modulo == 9 ? (r = b(i, e.abs(), 0, 3, 1), r.s *= e.s) : r = b(i, e, 0, t.modulo, 1), r = r.times(e), v = !0, i.minus(r))
};
p.naturalExponential = p.exp = function() {
    return fe(this)
};
p.naturalLogarithm = p.ln = function() {
    return L(this)
};
p.negated = p.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, h(e)
};
p.plus = p.add = function(e) {
    var r, i, t, s, n, o, a, d, u, l, c = this,
        m = c.constructor;
    if (e = new m(e), !c.d || !e.d) return !c.s || !e.s ? e = new m(NaN) : c.d || (e = new m(e.d || c.s === e.s ? c : NaN)), e;
    if (c.s != e.s) return e.s = -e.s, c.minus(e);
    if (u = c.d, l = e.d, a = m.precision, d = m.rounding, !u[0] || !l[0]) return l[0] || (e = new m(c)), v ? h(e, a, d) : e;
    if (n = C(c.e / g), t = C(e.e / g), u = u.slice(), s = n - t, s) {
        for (s < 0 ? (i = u, s = -s, o = l.length) : (i = l, t = n, o = u.length), n = Math.ceil(a / g), o = n > o ? n + 1 : o + 1, s > o && (s = o, i.length = 1), i.reverse(); s--;) i.push(0);
        i.reverse()
    }
    for (o = u.length, s = l.length, o - s < 0 && (s = o, i = l, l = u, u = i), r = 0; s;) r = (u[--s] = u[s] + l[s] + r) / T | 0, u[s] %= T;
    for (r && (u.unshift(r), ++t), o = u.length; u[--o] == 0;) u.pop();
    return e.d = u, e.e = te(u, t), v ? h(e, a, d) : e
};
p.precision = p.sd = function(e) {
    var r, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error($ + e);
    return i.d ? (r = De(i.d), e && i.e + 1 > r && (r = i.e + 1)) : r = NaN, r
};
p.round = function() {
    var e = this,
        r = e.constructor;
    return h(new r(e), e.e + 1, r.rounding)
};
p.sine = p.sin = function() {
    var e, r, i = this,
        t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, r = t.rounding, t.precision = e + Math.max(i.e, i.sd()) + g, t.rounding = 1, i = dr(t, Me(t, i)), t.precision = e, t.rounding = r, h(M > 2 ? i.neg() : i, e, r, !0)) : new t(NaN)
};
p.squareRoot = p.sqrt = function() {
    var e, r, i, t, s, n, o = this,
        a = o.d,
        d = o.e,
        u = o.s,
        l = o.constructor;
    if (u !== 1 || !a || !a[0]) return new l(!u || u < 0 && (!a || a[0]) ? NaN : a ? o : 1 / 0);
    for (v = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (r = P(a), (r.length + d) % 2 == 0 && (r += "0"), u = Math.sqrt(r), d = C((d + 1) / 2) - (d < 0 || d % 2), u == 1 / 0 ? r = "5e" + d : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + d), t = new l(r)) : t = new l(u.toString()), i = (d = l.precision) + 3;;)
        if (n = t, t = n.plus(b(o, n, i + 2, 1)).times(.5), P(n.d).slice(0, i) === (r = P(t.d)).slice(0, i))
            if (r = r.slice(i - 3, i + 1), r == "9999" || !s && r == "4999") {
                if (!s && (h(n, d + 1, 0), n.times(n).eq(o))) {
                    t = n;
                    break
                }
                i += 4, s = 1
            } else {
                (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(t, d + 1, 1), e = !t.times(t).eq(o));
                break
            }
    return v = !0, h(t, d, l.rounding, e)
};
p.tangent = p.tan = function() {
    var e, r, i = this,
        t = i.constructor;
    return i.isFinite() ? i.isZero() ? new t(i) : (e = t.precision, r = t.rounding, t.precision = e + 10, t.rounding = 1, i = i.sin(), i.s = 1, i = b(i, new t(1).minus(i.times(i)).sqrt(), e + 10, 0), t.precision = e, t.rounding = r, h(M == 2 || M == 4 ? i.neg() : i, e, r, !0)) : new t(NaN)
};
p.times = p.mul = function(e) {
    var r, i, t, s, n, o, a, d, u, l = this,
        c = l.constructor,
        m = l.d,
        f = (e = new c(e)).d;
    if (e.s *= l.s, !m || !m[0] || !f || !f[0]) return new c(!e.s || m && !m[0] && !f || f && !f[0] && !m ? NaN : !m || !f ? e.s / 0 : e.s * 0);
    for (i = C(l.e / g) + C(e.e / g), d = m.length, u = f.length, d < u && (n = m, m = f, f = n, o = d, d = u, u = o), n = [], o = d + u, t = o; t--;) n.push(0);
    for (t = u; --t >= 0;) {
        for (r = 0, s = d + t; s > t;) a = n[s] + f[t] * m[s - t - 1] + r, n[s--] = a % T | 0, r = a / T | 0;
        n[s] = (n[s] + r) % T | 0
    }
    for (; !n[--o];) n.pop();
    return r ? ++i : n.shift(), e.d = n, e.e = te(n, i), v ? h(e, c.precision, c.rounding) : e
};
p.toBinary = function(e, r) {
    return Ie(this, 2, e, r)
};
p.toDecimalPlaces = p.toDP = function(e, r) {
    var i = this,
        t = i.constructor;
    return i = new t(i), e === void 0 ? i : (A(e, 0, j), r === void 0 ? r = t.rounding : A(r, 0, 8), h(i, e + i.e + 1, r))
};
p.toExponential = function(e, r) {
    var i, t = this,
        s = t.constructor;
    return e === void 0 ? i = B(t, !0) : (A(e, 0, j), r === void 0 ? r = s.rounding : A(r, 0, 8), t = h(new s(t), e + 1, r), i = B(t, !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + i : i
};
p.toFixed = function(e, r) {
    var i, t, s = this,
        n = s.constructor;
    return e === void 0 ? i = B(s) : (A(e, 0, j), r === void 0 ? r = n.rounding : A(r, 0, 8), t = h(new n(s), e + s.e + 1, r), i = B(t, !1, e + t.e + 1)), s.isNeg() && !s.isZero() ? "-" + i : i
};
p.toFraction = function(e) {
    var r, i, t, s, n, o, a, d, u, l, c, m, f = this,
        y = f.d,
        w = f.constructor;
    if (!y) return new w(f);
    if (u = i = new w(1), t = d = new w(0), r = new w(t), n = r.e = De(y) - f.e - 1, o = n % g, r.d[0] = N(10, o < 0 ? g + o : o), e == null) e = n > 0 ? r : u;
    else {
        if (a = new w(e), !a.isInt() || a.lt(u)) throw Error($ + a);
        e = a.gt(r) ? n > 0 ? r : u : a
    }
    for (v = !1, a = new w(P(y)), l = w.precision, w.precision = n = y.length * g * 2; c = b(a, r, 0, 1, 1), s = i.plus(c.times(t)), s.cmp(e) != 1;) i = t, t = s, s = u, u = d.plus(c.times(s)), d = s, s = r, r = a.minus(c.times(s)), a = s;
    return s = b(e.minus(i), t, 0, 1, 1), d = d.plus(s.times(u)), i = i.plus(s.times(t)), d.s = u.s = f.s, m = b(u, t, n, 1).minus(f).abs().cmp(b(d, i, n, 1).minus(f).abs()) < 1 ? [u, t] : [d, i], w.precision = l, v = !0, m
};
p.toHexadecimal = p.toHex = function(e, r) {
    return Ie(this, 16, e, r)
};
p.toNearest = function(e, r) {
    var i = this,
        t = i.constructor;
    if (i = new t(i), e == null) {
        if (!i.d) return i;
        e = new t(1), r = t.rounding
    } else {
        if (e = new t(e), r === void 0 ? r = t.rounding : A(r, 0, 8), !i.d) return e.s ? i : e;
        if (!e.d) return e.s && (e.s = i.s), e
    }
    return e.d[0] ? (v = !1, i = b(i, e, 0, r, 1).times(e), v = !0, h(i)) : (e.s = i.s, i = e), i
};
p.toNumber = function() {
    return +this
};
p.toOctal = function(e, r) {
    return Ie(this, 8, e, r)
};
p.toPower = p.pow = function(e) {
    var r, i, t, s, n, o, a = this,
        d = a.constructor,
        u = +(e = new d(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new d(N(+a, u));
    if (a = new d(a), a.eq(1)) return a;
    if (t = d.precision, n = d.rounding, e.eq(1)) return h(a, t, n);
    if (r = C(e.e / g), r >= e.d.length - 1 && (i = u < 0 ? -u : u) <= nr) return s = Te(d, a, i, t), e.s < 0 ? new d(1).div(s) : h(s, t, n);
    if (o = a.s, o < 0) {
        if (r < e.d.length - 1) return new d(NaN);
        if (e.d[r] & 1 || (o = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = o, a
    }
    return i = N(+a, u), r = i == 0 || !isFinite(i) ? C(u * (Math.log("0." + P(a.d)) / Math.LN10 + a.e + 1)) : new d(i + "").e, r > d.maxE + 1 || r < d.minE - 1 ? new d(r > 0 ? o / 0 : 0) : (v = !1, d.rounding = a.s = 1, i = Math.min(12, (r + "").length), s = fe(e.times(L(a, t + i)), t), s.d && (s = h(s, t + 5, 1), J(s.d, t, n) && (r = t + 10, s = h(fe(e.times(L(a, r + i)), r), r + 5, 1), +P(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = h(s, t + 1, 0)))), s.s = o, v = !0, d.rounding = n, h(s, t, n))
};
p.toPrecision = function(e, r) {
    var i, t = this,
        s = t.constructor;
    return e === void 0 ? i = B(t, t.e <= s.toExpNeg || t.e >= s.toExpPos) : (A(e, 1, j), r === void 0 ? r = s.rounding : A(r, 0, 8), t = h(new s(t), e, r), i = B(t, e <= t.e || t.e <= s.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + i : i
};
p.toSignificantDigits = p.toSD = function(e, r) {
    var i = this,
        t = i.constructor;
    return e === void 0 ? (e = t.precision, r = t.rounding) : (A(e, 1, j), r === void 0 ? r = t.rounding : A(r, 0, 8)), h(new t(i), e, r)
};
p.toString = function() {
    var e = this,
        r = e.constructor,
        i = B(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + i : i
};
p.truncated = p.trunc = function() {
    return h(new this.constructor(this), this.e + 1, 1)
};
p.valueOf = p.toJSON = function() {
    var e = this,
        r = e.constructor,
        i = B(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
    return e.isNeg() ? "-" + i : i
};

function P(e) {
    var r, i, t, s = e.length - 1,
        n = "",
        o = e[0];
    if (s > 0) {
        for (n += o, r = 1; r < s; r++) t = e[r] + "", i = g - t.length, i && (n += U(i)), n += t;
        o = e[r], t = o + "", i = g - t.length, i && (n += U(i))
    } else if (o === 0) return "0";
    for (; o % 10 === 0;) o /= 10;
    return n + o
}

function A(e, r, i) {
    if (e !== ~~e || e < r || e > i) throw Error($ + e)
}

function J(e, r, i, t) {
    var s, n, o, a;
    for (n = e[0]; n >= 10; n /= 10) --r;
    return --r < 0 ? (r += g, s = 0) : (s = Math.ceil((r + 1) / g), r %= g), n = N(10, g - r), a = e[s] % n | 0, t == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), o = i < 4 && a == 99999 || i > 3 && a == 49999 || a == 5e4 || a == 0) : o = (i < 4 && a + 1 == n || i > 3 && a + 1 == n / 2) && (e[s + 1] / n / 100 | 0) == N(10, r - 2) - 1 || (a == n / 2 || a == 0) && (e[s + 1] / n / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), o = (t || i < 4) && a == 9999 || !t && i > 3 && a == 4999) : o = ((t || i < 4) && a + 1 == n || !t && i > 3 && a + 1 == n / 2) && (e[s + 1] / n / 1e3 | 0) == N(10, r - 3) - 1, o
}

function Y(e, r, i) {
    for (var t, s = [0], n, o = 0, a = e.length; o < a;) {
        for (n = s.length; n--;) s[n] *= r;
        for (s[0] += me.indexOf(e.charAt(o++)), t = 0; t < s.length; t++) s[t] > i - 1 && (s[t + 1] === void 0 && (s[t + 1] = 0), s[t + 1] += s[t] / i | 0, s[t] %= i)
    }
    return s.reverse()
}

function or(e, r) {
    var i, t, s;
    if (r.isZero()) return r;
    t = r.d.length, t < 32 ? (i = Math.ceil(t / 3), s = (1 / ne(4, i)).toString()) : (i = 16, s = "2.3283064365386962890625e-10"), e.precision += i, r = Z(e, 1, r.times(s), new e(1));
    for (var n = i; n--;) {
        var o = r.times(r);
        r = o.times(o).minus(o).times(8).plus(1)
    }
    return e.precision -= i, r
}
var b = function() {
    function e(t, s, n) {
        var o, a = 0,
            d = t.length;
        for (t = t.slice(); d--;) o = t[d] * s + a, t[d] = o % n | 0, a = o / n | 0;
        return a && t.unshift(a), t
    }

    function r(t, s, n, o) {
        var a, d;
        if (n != o) d = n > o ? 1 : -1;
        else
            for (a = d = 0; a < n; a++)
                if (t[a] != s[a]) {
                    d = t[a] > s[a] ? 1 : -1;
                    break
                } return d
    }

    function i(t, s, n, o) {
        for (var a = 0; n--;) t[n] -= a, a = t[n] < s[n] ? 1 : 0, t[n] = a * o + t[n] - s[n];
        for (; !t[0] && t.length > 1;) t.shift()
    }
    return function(t, s, n, o, a, d) {
        var u, l, c, m, f, y, w, S, E, R, I, k, W, q, se, K, V, oe, O, G, Q = t.constructor,
            ae = t.s == s.s ? 1 : -1,
            F = t.d,
            _ = s.d;
        if (!F || !F[0] || !_ || !_[0]) return new Q(!t.s || !s.s || (F ? _ && F[0] == _[0] : !_) ? NaN : F && F[0] == 0 || !_ ? ae * 0 : ae / 0);
        for (d ? (f = 1, l = t.e - s.e) : (d = T, f = g, l = C(t.e / f) - C(s.e / f)), O = _.length, V = F.length, E = new Q(ae), R = E.d = [], c = 0; _[c] == (F[c] || 0); c++);
        if (_[c] > (F[c] || 0) && l--, n == null ? (q = n = Q.precision, o = Q.rounding) : a ? q = n + (t.e - s.e) + 1 : q = n, q < 0) R.push(1), y = !0;
        else {
            if (q = q / f + 2 | 0, c = 0, O == 1) {
                for (m = 0, _ = _[0], q++;
                    (c < V || m) && q--; c++) se = m * d + (F[c] || 0), R[c] = se / _ | 0, m = se % _ | 0;
                y = m || c < V
            } else {
                for (m = d / (_[0] + 1) | 0, m > 1 && (_ = e(_, m, d), F = e(F, m, d), O = _.length, V = F.length), K = O, I = F.slice(0, O), k = I.length; k < O;) I[k++] = 0;
                G = _.slice(), G.unshift(0), oe = _[0], _[1] >= d / 2 && ++oe;
                do m = 0, u = r(_, I, O, k), u < 0 ? (W = I[0], O != k && (W = W * d + (I[1] || 0)), m = W / oe | 0, m > 1 ? (m >= d && (m = d - 1), w = e(_, m, d), S = w.length, k = I.length, u = r(w, I, S, k), u == 1 && (m--, i(w, O < S ? G : _, S, d))) : (m == 0 && (u = m = 1), w = _.slice()), S = w.length, S < k && w.unshift(0), i(I, w, k, d), u == -1 && (k = I.length, u = r(_, I, O, k), u < 1 && (m++, i(I, O < k ? G : _, k, d))), k = I.length) : u === 0 && (m++, I = [0]), R[c++] = m, u && I[0] ? I[k++] = F[K] || 0 : (I = [F[K]], k = 1); while ((K++ < V || I[0] !== void 0) && q--);
                y = I[0] !== void 0
            }
            R[0] || R.shift()
        }
        if (f == 1) E.e = l, Ce = y;
        else {
            for (c = 1, m = R[0]; m >= 10; m /= 10) c++;
            E.e = c + l * f - 1, h(E, a ? n + E.e + 1 : n, o, y)
        }
        return E
    }
}();

function h(e, r, i, t) {
    var s, n, o, a, d, u, l, c, m, f = e.constructor;
    e: if (r != null) {
        if (c = e.d, !c) return e;
        for (s = 1, a = c[0]; a >= 10; a /= 10) s++;
        if (n = r - s, n < 0) n += g, o = r, l = c[m = 0], d = l / N(10, s - o - 1) % 10 | 0;
        else if (m = Math.ceil((n + 1) / g), a = c.length, m >= a)
            if (t) {
                for (; a++ <= m;) c.push(0);
                l = d = 0, s = 1, n %= g, o = n - g + 1
            } else break e;
        else {
            for (l = a = c[m], s = 1; a >= 10; a /= 10) s++;
            n %= g, o = n - g + s, d = o < 0 ? 0 : l / N(10, s - o - 1) % 10 | 0
        }
        if (t = t || r < 0 || c[m + 1] !== void 0 || (o < 0 ? l : l % N(10, s - o - 1)), u = i < 4 ? (d || t) && (i == 0 || i == (e.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (i == 4 || t || i == 6 && (n > 0 ? o > 0 ? l / N(10, s - o) : 0 : c[m - 1]) % 10 & 1 || i == (e.s < 0 ? 8 : 7)), r < 1 || !c[0]) return c.length = 0, u ? (r -= e.e + 1, c[0] = N(10, (g - r % g) % g), e.e = -r || 0) : c[0] = e.e = 0, e;
        if (n == 0 ? (c.length = m, a = 1, m--) : (c.length = m + 1, a = N(10, g - n), c[m] = o > 0 ? (l / N(10, s - o) % N(10, o) | 0) * a : 0), u)
            for (;;)
                if (m == 0) {
                    for (n = 1, o = c[0]; o >= 10; o /= 10) n++;
                    for (o = c[0] += a, a = 1; o >= 10; o /= 10) a++;
                    n != a && (e.e++, c[0] == T && (c[0] = 1));
                    break
                } else {
                    if (c[m] += a, c[m] != T) break;
                    c[m--] = 0, a = 1
                }
        for (n = c.length; c[--n] === 0;) c.pop()
    }
    return v && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e
}

function B(e, r, i) {
    if (!e.isFinite()) return qe(e);
    var t, s = e.e,
        n = P(e.d),
        o = n.length;
    return r ? (i && (t = i - o) > 0 ? n = n.charAt(0) + "." + n.slice(1) + U(t) : o > 1 && (n = n.charAt(0) + "." + n.slice(1)), n = n + (e.e < 0 ? "e" : "e+") + e.e) : s < 0 ? (n = "0." + U(-s - 1) + n, i && (t = i - o) > 0 && (n += U(t))) : s >= o ? (n += U(s + 1 - o), i && (t = i - s - 1) > 0 && (n = n + "." + U(t))) : ((t = s + 1) < o && (n = n.slice(0, t) + "." + n.slice(t)), i && (t = i - o) > 0 && (s + 1 === o && (n += "."), n += U(t))), n
}

function te(e, r) {
    var i = e[0];
    for (r *= g; i >= 10; i /= 10) r++;
    return r
}

function re(e, r, i) {
    if (r > sr) throw v = !0, i && (e.precision = i), Error(Se);
    return h(new e(x), r, 1, !0)
}

function D(e, r, i) {
    if (r > he) throw Error(Se);
    return h(new e(ee), r, i, !0)
}

function De(e) {
    var r = e.length - 1,
        i = r * g + 1;
    if (r = e[r], r) {
        for (; r % 10 == 0; r /= 10) i--;
        for (r = e[0]; r >= 10; r /= 10) i++
    }
    return i
}

function U(e) {
    for (var r = ""; e--;) r += "0";
    return r
}

function Te(e, r, i, t) {
    var s, n = new e(1),
        o = Math.ceil(t / g + 4);
    for (v = !1;;) {
        if (i % 2 && (n = n.times(r), _e(n.d, o) && (s = !0)), i = C(i / 2), i === 0) {
            i = n.d.length - 1, s && n.d[i] === 0 && ++n.d[i];
            break
        }
        r = r.times(r), _e(r.d, o)
    }
    return v = !0, n
}

function be(e) {
    return e.d[e.d.length - 1] & 1
}

function Be(e, r, i) {
    for (var t, s = new e(r[0]), n = 0; ++n < r.length;)
        if (t = new e(r[n]), t.s) s[i](t) && (s = t);
        else {
            s = t;
            break
        }
    return s
}

function fe(e, r) {
    var i, t, s, n, o, a, d, u = 0,
        l = 0,
        c = 0,
        m = e.constructor,
        f = m.rounding,
        y = m.precision;
    if (!e.d || !e.d[0] || e.e > 17) return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (r == null ? (v = !1, d = y) : d = r, a = new m(.03125); e.e > -2;) e = e.times(a), c += 5;
    for (t = Math.log(N(2, c)) / Math.LN10 * 2 + 5 | 0, d += t, i = n = o = new m(1), m.precision = d;;) {
        if (n = h(n.times(e), d, 1), i = i.times(++l), a = o.plus(b(n, i, d, 1)), P(a.d).slice(0, d) === P(o.d).slice(0, d)) {
            for (s = c; s--;) o = h(o.times(o), d, 1);
            if (r == null)
                if (u < 3 && J(o.d, d - t, f, u)) m.precision = d += 10, i = n = a = new m(1), l = 0, u++;
                else return h(o, m.precision = y, f, v = !0);
            else return m.precision = y, o
        }
        o = a
    }
}

function L(e, r) {
    var i, t, s, n, o, a, d, u, l, c, m, f = 1,
        y = 10,
        w = e,
        S = w.d,
        E = w.constructor,
        R = E.rounding,
        I = E.precision;
    if (w.s < 0 || !S || !S[0] || !w.e && S[0] == 1 && S.length == 1) return new E(S && !S[0] ? -1 / 0 : w.s != 1 ? NaN : S ? 0 : w);
    if (r == null ? (v = !1, l = I) : l = r, E.precision = l += y, i = P(S), t = i.charAt(0), Math.abs(n = w.e) < 15e14) {
        for (; t < 7 && t != 1 || t == 1 && i.charAt(1) > 3;) w = w.times(e), i = P(w.d), t = i.charAt(0), f++;
        n = w.e, t > 1 ? (w = new E("0." + i), n++) : w = new E(t + "." + i.slice(1))
    } else return u = re(E, l + 2, I).times(n + ""), w = L(new E(t + "." + i.slice(1)), l - y).plus(u), E.precision = I, r == null ? h(w, I, R, v = !0) : w;
    for (c = w, d = o = w = b(w.minus(1), w.plus(1), l, 1), m = h(w.times(w), l, 1), s = 3;;) {
        if (o = h(o.times(m), l, 1), u = d.plus(b(o, new E(s), l, 1)), P(u.d).slice(0, l) === P(d.d).slice(0, l))
            if (d = d.times(2), n !== 0 && (d = d.plus(re(E, l + 2, I).times(n + ""))), d = b(d, new E(f), l, 1), r == null)
                if (J(d.d, l - y, R, a)) E.precision = l += y, u = o = w = b(c.minus(1), c.plus(1), l, 1), m = h(w.times(w), l, 1), s = a = 1;
                else return h(d, E.precision = I, R, v = !0);
        else return E.precision = I, d;
        d = u, s += 2
    }
}

function qe(e) {
    return String(e.s * e.s / 0)
}

function ge(e, r) {
    var i, t, s;
    for ((i = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (t = r.search(/e/i)) > 0 ? (i < 0 && (i = t), i += +r.slice(t + 1), r = r.substring(0, t)) : i < 0 && (i = r.length), t = 0; r.charCodeAt(t) === 48; t++);
    for (s = r.length; r.charCodeAt(s - 1) === 48; --s);
    if (r = r.slice(t, s), r) {
        if (s -= t, e.e = i = i - t - 1, e.d = [], t = (i + 1) % g, i < 0 && (t += g), t < s) {
            for (t && e.d.push(+r.slice(0, t)), s -= g; t < s;) e.d.push(+r.slice(t, t += g));
            r = r.slice(t), t = g - r.length
        } else t -= s;
        for (; t--;) r += "0";
        e.d.push(+r), v && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
    } else e.e = 0, e.d = [0];
    return e
}

function ar(e, r) {
    var i, t, s, n, o, a, d, u, l;
    if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Oe.test(r)) return ge(e, r)
    } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (ir.test(r)) i = 16, r = r.toLowerCase();
    else if (rr.test(r)) i = 2;
    else if (tr.test(r)) i = 8;
    else throw Error($ + r);
    for (n = r.search(/p/i), n > 0 ? (d = +r.slice(n + 1), r = r.substring(2, n)) : r = r.slice(2), n = r.indexOf("."), o = n >= 0, t = e.constructor, o && (r = r.replace(".", ""), a = r.length, n = a - n, s = Te(t, new t(i), n, n * 2)), u = Y(r, i, T), l = u.length - 1, n = l; u[n] === 0; --n) u.pop();
    return n < 0 ? new t(e.s * 0) : (e.e = te(u, l), e.d = u, v = !1, o && (e = b(e, s, a * 4)), d && (e = e.times(Math.abs(d) < 54 ? N(2, d) : z.pow(2, d))), v = !0, e)
}

function dr(e, r) {
    var i, t = r.d.length;
    if (t < 3) return r.isZero() ? r : Z(e, 2, r, r);
    i = 1.4 * Math.sqrt(t), i = i > 16 ? 16 : i | 0, r = r.times(1 / ne(5, i)), r = Z(e, 2, r, r);
    for (var s, n = new e(5), o = new e(16), a = new e(20); i--;) s = r.times(r), r = r.times(n.plus(s.times(o.times(s).minus(a))));
    return r
}

function Z(e, r, i, t, s) {
    var n, o, a, d, u = e.precision,
        l = Math.ceil(u / g);
    for (v = !1, d = i.times(i), a = new e(t);;) {
        if (o = b(a.times(d), new e(r++ * r++), u, 1), a = s ? t.plus(o) : t.minus(o), t = b(o.times(d), new e(r++ * r++), u, 1), o = a.plus(t), o.d[l] !== void 0) {
            for (n = l; o.d[n] === a.d[n] && n--;);
            if (n == -1) break
        }
        n = a, a = t, t = o, o = n
    }
    return v = !0, o.d.length = l + 1, o
}

function ne(e, r) {
    for (var i = e; --r;) i *= e;
    return i
}

function Me(e, r) {
    var i, t = r.s < 0,
        s = D(e, e.precision, 1),
        n = s.times(.5);
    if (r = r.abs(), r.lte(n)) return M = t ? 4 : 1, r;
    if (i = r.divToInt(s), i.isZero()) M = t ? 3 : 2;
    else {
        if (r = r.minus(i.times(s)), r.lte(n)) return M = be(i) ? t ? 2 : 3 : t ? 4 : 1, r;
        M = be(i) ? t ? 1 : 4 : t ? 3 : 2
    }
    return r.minus(s).abs()
}

function Ie(e, r, i, t) {
    var s, n, o, a, d, u, l, c, m, f = e.constructor,
        y = i !== void 0;
    if (y ? (A(i, 1, j), t === void 0 ? t = f.rounding : A(t, 0, 8)) : (i = f.precision, t = f.rounding), !e.isFinite()) l = qe(e);
    else {
        for (l = B(e), o = l.indexOf("."), y ? (s = 2, r == 16 ? i = i * 4 - 3 : r == 8 && (i = i * 3 - 2)) : s = r, o >= 0 && (l = l.replace(".", ""), m = new f(1), m.e = l.length - o, m.d = Y(B(m), 10, s), m.e = m.d.length), c = Y(l, 10, s), n = d = c.length; c[--d] == 0;) c.pop();
        if (!c[0]) l = y ? "0p+0" : "0";
        else {
            if (o < 0 ? n-- : (e = new f(e), e.d = c, e.e = n, e = b(e, m, i, t, 0, s), c = e.d, n = e.e, u = Ce), o = c[i], a = s / 2, u = u || c[i + 1] !== void 0, u = t < 4 ? (o !== void 0 || u) && (t === 0 || t === (e.s < 0 ? 3 : 2)) : o > a || o === a && (t === 4 || u || t === 6 && c[i - 1] & 1 || t === (e.s < 0 ? 8 : 7)), c.length = i, u)
                for (; ++c[--i] > s - 1;) c[i] = 0, i || (++n, c.unshift(1));
            for (d = c.length; !c[d - 1]; --d);
            for (o = 0, l = ""; o < d; o++) l += me.charAt(c[o]);
            if (y) {
                if (d > 1)
                    if (r == 16 || r == 8) {
                        for (o = r == 16 ? 4 : 3, --d; d % o; d++) l += "0";
                        for (c = Y(l, s, r), d = c.length; !c[d - 1]; --d);
                        for (o = 1, l = "1."; o < d; o++) l += me.charAt(c[o])
                    } else l = l.charAt(0) + "." + l.slice(1);
                l = l + (n < 0 ? "p" : "p+") + n
            } else if (n < 0) {
                for (; ++n;) l = "0" + l;
                l = "0." + l
            } else if (++n > d)
                for (n -= d; n--;) l += "0";
            else n < d && (l = l.slice(0, n) + "." + l.slice(n))
        }
        l = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + l
    }
    return e.s < 0 ? "-" + l : l
}

function _e(e, r) {
    if (e.length > r) return e.length = r, !0
}

function ur(e) {
    return new this(e).abs()
}

function lr(e) {
    return new this(e).acos()
}

function cr(e) {
    return new this(e).acosh()
}

function mr(e, r) {
    return new this(e).plus(r)
}

function pr(e) {
    return new this(e).asin()
}

function hr(e) {
    return new this(e).asinh()
}

function fr(e) {
    return new this(e).atan()
}

function gr(e) {
    return new this(e).atanh()
}

function vr(e, r) {
    e = new this(e), r = new this(r);
    var i, t = this.precision,
        s = this.rounding,
        n = t + 4;
    return !e.s || !r.s ? i = new this(NaN) : !e.d && !r.d ? (i = D(this, n, 1).times(r.s > 0 ? .25 : .75), i.s = e.s) : !r.d || e.isZero() ? (i = r.s < 0 ? D(this, t, s) : new this(0), i.s = e.s) : !e.d || r.isZero() ? (i = D(this, n, 1).times(.5), i.s = e.s) : r.s < 0 ? (this.precision = n, this.rounding = 1, i = this.atan(b(e, r, n, 1)), r = D(this, n, 1), this.precision = t, this.rounding = s, i = e.s < 0 ? i.minus(r) : i.plus(r)) : i = this.atan(b(e, r, n, 1)), i
}

function wr(e) {
    return new this(e).cbrt()
}

function yr(e) {
    return h(e = new this(e), e.e + 1, 2)
}

function Ir(e, r, i) {
    return new this(e).clamp(r, i)
}

function br(e) {
    if (!e || typeof e != "object") throw Error(ie + "Object expected");
    var r, i, t, s = e.defaults === !0,
        n = ["precision", 1, j, "rounding", 0, 8, "toExpNeg", -H, 0, "toExpPos", 0, H, "maxE", 0, H, "minE", -H, 0, "modulo", 0, 9];
    for (r = 0; r < n.length; r += 3)
        if (i = n[r], s && (this[i] = pe[i]), (t = e[i]) !== void 0)
            if (C(t) === t && t >= n[r + 1] && t <= n[r + 2]) this[i] = t;
            else throw Error($ + i + ": " + t);
    if (i = "crypto", s && (this[i] = pe[i]), (t = e[i]) !== void 0)
        if (t === !0 || t === !1 || t === 0 || t === 1)
            if (t)
                if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[i] = !0;
                else throw Error(Ae);
    else this[i] = !1;
    else throw Error($ + i + ": " + t);
    return this
}

function _r(e) {
    return new this(e).cos()
}

function Er(e) {
    return new this(e).cosh()
}

function Ue(e) {
    var r, i, t;

    function s(n) {
        var o, a, d, u = this;
        if (!(u instanceof s)) return new s(n);
        if (u.constructor = s, Ee(n)) {
            u.s = n.s, v ? !n.d || n.e > s.maxE ? (u.e = NaN, u.d = null) : n.e < s.minE ? (u.e = 0, u.d = [0]) : (u.e = n.e, u.d = n.d.slice()) : (u.e = n.e, u.d = n.d ? n.d.slice() : n.d);
            return
        }
        if (d = typeof n, d === "number") {
            if (n === 0) {
                u.s = 1 / n < 0 ? -1 : 1, u.e = 0, u.d = [0];
                return
            }
            if (n < 0 ? (n = -n, u.s = -1) : u.s = 1, n === ~~n && n < 1e7) {
                for (o = 0, a = n; a >= 10; a /= 10) o++;
                v ? o > s.maxE ? (u.e = NaN, u.d = null) : o < s.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [n]) : (u.e = o, u.d = [n]);
                return
            } else if (n * 0 !== 0) {
                n || (u.s = NaN), u.e = NaN, u.d = null;
                return
            }
            return ge(u, n.toString())
        } else if (d !== "string") throw Error($ + n);
        return (a = n.charCodeAt(0)) === 45 ? (n = n.slice(1), u.s = -1) : (a === 43 && (n = n.slice(1)), u.s = 1), Oe.test(n) ? ge(u, n) : ar(u, n)
    }
    if (s.prototype = p, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = br, s.clone = Ue, s.isDecimal = Ee, s.abs = ur, s.acos = lr, s.acosh = cr, s.add = mr, s.asin = pr, s.asinh = hr, s.atan = fr, s.atanh = gr, s.atan2 = vr, s.cbrt = wr, s.ceil = yr, s.clamp = Ir, s.cos = _r, s.cosh = Er, s.div = Nr, s.exp = Pr, s.floor = kr, s.hypot = Fr, s.ln = Cr, s.log = Sr, s.log10 = Rr, s.log2 = Ar, s.max = Or, s.min = Dr, s.mod = Tr, s.mul = Br, s.pow = qr, s.random = Mr, s.round = Ur, s.sign = Lr, s.sin = $r, s.sinh = jr, s.sqrt = Hr, s.sub = Zr, s.sum = Vr, s.tan = Jr, s.tanh = zr, s.trunc = Wr, e === void 0 && (e = {}), e && e.defaults !== !0)
        for (t = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < t.length;) e.hasOwnProperty(i = t[r++]) || (e[i] = this[i]);
    return s.config(e), s
}

function Nr(e, r) {
    return new this(e).div(r)
}

function Pr(e) {
    return new this(e).exp()
}

function kr(e) {
    return h(e = new this(e), e.e + 1, 3)
}

function Fr() {
    var e, r, i = new this(0);
    for (v = !1, e = 0; e < arguments.length;)
        if (r = new this(arguments[e++]), r.d) i.d && (i = i.plus(r.times(r)));
        else {
            if (r.s) return v = !0, new this(1 / 0);
            i = r
        }
    return v = !0, i.sqrt()
}

function Ee(e) {
    return e instanceof z || e && e.toStringTag === Re || !1
}

function Cr(e) {
    return new this(e).ln()
}

function Sr(e, r) {
    return new this(e).log(r)
}

function Ar(e) {
    return new this(e).log(2)
}

function Rr(e) {
    return new this(e).log(10)
}

function Or() {
    return Be(this, arguments, "lt")
}

function Dr() {
    return Be(this, arguments, "gt")
}

function Tr(e, r) {
    return new this(e).mod(r)
}

function Br(e, r) {
    return new this(e).mul(r)
}

function qr(e, r) {
    return new this(e).pow(r)
}

function Mr(e) {
    var r, i, t, s, n = 0,
        o = new this(1),
        a = [];
    if (e === void 0 ? e = this.precision : A(e, 1, j), t = Math.ceil(e / g), this.crypto)
        if (crypto.getRandomValues)
            for (r = crypto.getRandomValues(new Uint32Array(t)); n < t;) s = r[n], s >= 429e7 ? r[n] = crypto.getRandomValues(new Uint32Array(1))[0] : a[n++] = s % 1e7;
        else if (crypto.randomBytes) {
        for (r = crypto.randomBytes(t *= 4); n < t;) s = r[n] + (r[n + 1] << 8) + (r[n + 2] << 16) + ((r[n + 3] & 127) << 24), s >= 214e7 ? crypto.randomBytes(4).copy(r, n) : (a.push(s % 1e7), n += 4);
        n = t / 4
    } else throw Error(Ae);
    else
        for (; n < t;) a[n++] = Math.random() * 1e7 | 0;
    for (t = a[--n], e %= g, t && e && (s = N(10, g - e), a[n] = (t / s | 0) * s); a[n] === 0; n--) a.pop();
    if (n < 0) i = 0, a = [0];
    else {
        for (i = -1; a[0] === 0; i -= g) a.shift();
        for (t = 1, s = a[0]; s >= 10; s /= 10) t++;
        t < g && (i -= g - t)
    }
    return o.e = i, o.d = a, o
}

function Ur(e) {
    return h(e = new this(e), e.e + 1, this.rounding)
}

function Lr(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
}

function $r(e) {
    return new this(e).sin()
}

function jr(e) {
    return new this(e).sinh()
}

function Hr(e) {
    return new this(e).sqrt()
}

function Zr(e, r) {
    return new this(e).sub(r)
}

function Vr() {
    var e = 0,
        r = arguments,
        i = new this(r[e]);
    for (v = !1; i.s && ++e < r.length;) i = i.plus(r[e]);
    return v = !0, h(i, this.precision, this.rounding)
}

function Jr(e) {
    return new this(e).tan()
}

function zr(e) {
    return new this(e).tanh()
}

function Wr(e) {
    return h(e = new this(e), e.e + 1, 1)
}
p[Symbol.for("nodejs.util.inspect.custom")] = p.toString;
p[Symbol.toStringTag] = "Decimal";
var z = p.constructor = Ue(pe);
x = new z(x);
ee = new z(ee);
var Kr = z;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    const {
        Decimal: r,
        objectEnumValues: i,
        makeStrictEnum: t,
        Public: s,
        getRuntime: n
    } = Ve, o = {};
    e.Prisma = o, e.$Enums = {}, o.prismaVersion = {
        client: "5.17.0",
        engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
    }, o.PrismaClientKnownRequestError = () => {
        const d = n().prettyName;
        throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.PrismaClientUnknownRequestError = () => {
        const d = n().prettyName;
        throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.PrismaClientRustPanicError = () => {
        const d = n().prettyName;
        throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.PrismaClientInitializationError = () => {
        const d = n().prettyName;
        throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.PrismaClientValidationError = () => {
        const d = n().prettyName;
        throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.NotFoundError = () => {
        const d = n().prettyName;
        throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.Decimal = r, o.sql = () => {
        const d = n().prettyName;
        throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.empty = () => {
        const d = n().prettyName;
        throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.join = () => {
        const d = n().prettyName;
        throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.raw = () => {
        const d = n().prettyName;
        throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.validator = s.validator, o.getExtensionContext = () => {
        const d = n().prettyName;
        throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.defineExtension = () => {
        const d = n().prettyName;
        throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${d}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`)
    }, o.DbNull = i.instances.DbNull, o.JsonNull = i.instances.JsonNull, o.AnyNull = i.instances.AnyNull, o.NullTypes = {
        DbNull: i.classes.DbNull,
        JsonNull: i.classes.JsonNull,
        AnyNull: i.classes.AnyNull
    }, e.Prisma.TransactionIsolationLevel = t({
        ReadUncommitted: "ReadUncommitted",
        ReadCommitted: "ReadCommitted",
        RepeatableRead: "RepeatableRead",
        Serializable: "Serializable"
    }), e.Prisma.NotificationScalarFieldEnum = {
        id: "id",
        type: "type",
        variables: "variables",
        read: "read",
        deleted: "deleted",
        createdDate: "createdDate",
        userId: "userId",
        challengeId: "challengeId",
        socialMediaShareId: "socialMediaShareId"
    }, e.Prisma.User_reportScalarFieldEnum = {
        id: "id",
        type: "type",
        createdAt: "createdAt",
        comment: "comment",
        resolved: "resolved",
        userId: "userId",
        postId: "postId"
    }, e.Prisma.PostScalarFieldEnum = {
        id: "id",
        username: "username",
        likeCount: "likeCount",
        viewCount: "viewCount",
        createdDate: "createdDate",
        updatedDate: "updatedDate",
        action: "action",
        theme: "theme",
        type: "type",
        creatorId: "creatorId",
        collectionId: "collectionId",
        aiDescription: "aiDescription",
        title: "title",
        description: "description",
        figmaClipboard: "figmaClipboard",
        version: "version",
        html: "html",
        originalHtml: "originalHtml",
        reactCode: "reactCode",
        friendlyId: "friendlyId",
        css: "css",
        scopedCss: "scopedCss",
        prefixedCss: "prefixedCss",
        ipAdresses: "ipAdresses",
        status: "status",
        comment: "comment",
        favoriteCount: "favoriteCount",
        lastClearedIps: "lastClearedIps",
        is_recommended: "is_recommended",
        availableForReview: "availableForReview",
        order: "order",
        ogImageId: "ogImageId",
        challengeId: "challengeId",
        approvedFromChallenge: "approvedFromChallenge",
        showOnNeumorphism: "showOnNeumorphism",
        showOnCssbuttons: "showOnCssbuttons",
        reviewerId: "reviewerId",
        hasBeenPublic: "hasBeenPublic",
        originalPostId: "originalPostId",
        source_author: "source_author",
        source: "source",
        rawCode: "rawCode",
        finishReason: "finishReason",
        backgroundColor: "backgroundColor",
        fulltext: "fulltext",
        isTailwind: "isTailwind",
        tailwindCss: "tailwindCss"
    }, e.Prisma.User_review_postScalarFieldEnum = {
        id: "id",
        postId: "postId",
        reviewerId: "reviewerId",
        rating: "rating",
        approved: "approved",
        active: "active",
        createdDate: "createdDate",
        updatedDate: "updatedDate"
    }, e.Prisma.SourceScalarFieldEnum = {
        postId: "postId",
        name: "name",
        website: "website",
        type: "type",
        createdDate: "createdDate",
        updatedDate: "updatedDate"
    }, e.Prisma.EventScalarFieldEnum = {
        id: "id",
        userId: "userId",
        type: "type",
        value: "value",
        createdDate: "createdDate"
    }, e.Prisma.CollectionScalarFieldEnum = {
        id: "id",
        name: "name",
        creatorId: "creatorId",
        description: "description",
        completion_tokens: "completion_tokens",
        model: "model",
        prompt_tokens: "prompt_tokens",
        temperature: "temperature",
        total_tokens: "total_tokens",
        error: "error",
        processingTime: "processingTime",
        finishedAt: "finishedAt",
        errorCount: "errorCount",
        madeByAi: "madeByAi",
        createdDate: "createdDate",
        updatedDate: "updatedDate"
    }, e.Prisma.Post_ai_variation_queryScalarFieldEnum = {
        id: "id",
        postId: "postId",
        ai_variation_queryId: "ai_variation_queryId"
    }, e.Prisma.Ai_variation_queryScalarFieldEnum = {
        id: "id",
        query: "query",
        userId: "userId",
        targetPostId: "targetPostId",
        createdAt: "createdAt",
        apiId: "apiId",
        completion_tokens: "completion_tokens",
        model: "model",
        prompt_tokens: "prompt_tokens",
        temperature: "temperature",
        total_tokens: "total_tokens",
        error: "error",
        processingTime: "processingTime",
        finishedAt: "finishedAt",
        errorCount: "errorCount",
        numberOfVariations: "numberOfVariations"
    }, e.Prisma.Ai_generation_queryScalarFieldEnum = {
        id: "id",
        query: "query",
        completion_tokens: "completion_tokens",
        prompt_tokens: "prompt_tokens",
        total_tokens: "total_tokens",
        model: "model",
        temperature: "temperature",
        apiId: "apiId",
        userId: "userId",
        error: "error",
        targetPostId: "targetPostId",
        createdAt: "createdAt",
        finishedAt: "finishedAt",
        result: "result"
    }, e.Prisma.SearchScalarFieldEnum = {
        id: "id",
        userId: "userId",
        query: "query",
        createdAt: "createdAt",
        resultsCount: "resultsCount"
    }, e.Prisma.IssueScalarFieldEnum = {
        id: "id"
    }, e.Prisma.Issue_postScalarFieldEnum = {
        postId: "postId",
        issueId: "issueId"
    }, e.Prisma.Post_tagScalarFieldEnum = {
        postId: "postId",
        tagId: "tagId",
        createdAt: "createdAt"
    }, e.Prisma.TagScalarFieldEnum = {
        id: "id",
        value: "value",
        approved: "approved",
        isAi: "isAi",
        createdDate: "createdDate",
        creatorId: "creatorId"
    }, e.Prisma.RankingsScalarFieldEnum = {
        id: "id",
        username: "username",
        rankByViews: "rankByViews",
        rankByPosts: "rankByPosts",
        rankAverage: "rankAverage",
        avatar_url: "avatar_url"
    }, e.Prisma.UserScalarFieldEnum = {
        id: "id",
        githubId: "githubId",
        xId: "xId",
        googleId: "googleId",
        username: "username",
        email: "email",
        avatar_url: "avatar_url",
        bio: "bio",
        company: "company",
        location: "location",
        name: "name",
        blog: "blog",
        customBio: "customBio",
        role: "role",
        providers: "providers",
        socials: "socials",
        createdDate: "createdDate",
        updatedDate: "updatedDate",
        lastAction: "lastAction",
        instagram: "instagram",
        rankByViews: "rankByViews",
        githubFollowers: "githubFollowers",
        score: "score",
        totalFavorites: "totalFavorites",
        totalPosts: "totalPosts",
        lastSeenNotifications: "lastSeenNotifications",
        hasEditedProfile: "hasEditedProfile",
        isSuspended: "isSuspended",
        emailUnsubscribeToken: "emailUnsubscribeToken",
        hasUnsubscribedEmails: "hasUnsubscribedEmails",
        twitter: "twitter",
        tokens: "tokens",
        cuId: "cuId",
        subscription: "subscription",
        discordAccessToken: "discordAccessToken",
        discordRefreshToken: "discordRefreshToken",
        discordTokenExpiresAt: "discordTokenExpiresAt"
    }, e.Prisma.Email_sentScalarFieldEnum = {
        id: "id",
        emailType: "emailType",
        challengeId: "challengeId",
        socialMediaShareId: "socialMediaShareId",
        createdAt: "createdAt",
        userId: "userId"
    }, e.Prisma.User_follow_userScalarFieldEnum = {
        userIdBeingFollowed: "userIdBeingFollowed",
        userIdFollowing: "userIdFollowing",
        createdAt: "createdAt"
    }, e.Prisma.Admin_variablesScalarFieldEnum = {
        id: "id",
        userId: "userId",
        lastSeenReports: "lastSeenReports",
        lastSeenComments: "lastSeenComments",
        lastSeenNotifications: "lastSeenNotifications",
        lastSeenEvents: "lastSeenEvents"
    }, e.Prisma.User_favorite_postScalarFieldEnum = {
        userId: "userId",
        postId: "postId",
        createdDate: "createdDate"
    }, e.Prisma.User_export_postScalarFieldEnum = {
        userId: "userId",
        postId: "postId",
        type: "type",
        isHappy: "isHappy",
        createdAt: "createdAt"
    }, e.Prisma.User_vote_postScalarFieldEnum = {
        userId: "userId",
        postId: "postId",
        createdDate: "createdDate",
        challengeId: "challengeId"
    }, e.Prisma.ChallengeScalarFieldEnum = {
        id: "id",
        name: "name",
        submissionEndDate: "submissionEndDate",
        createdDate: "createdDate",
        updatedDate: "updatedDate",
        action: "action",
        description: "description",
        prize: "prize",
        closedDate: "closedDate",
        image_url: "image_url",
        type: "type",
        isPublic: "isPublic",
        defaultHtml: "defaultHtml",
        defaultCss: "defaultCss",
        isHtmlLocked: "isHtmlLocked",
        isTailwind: "isTailwind",
        customCSS: "customCSS"
    }, e.Prisma.Challenge_authorScalarFieldEnum = {
        id: "id",
        twitter: "twitter",
        imageUrl: "imageUrl",
        bio: "bio",
        name: "name",
        challengeId: "challengeId"
    }, e.Prisma.VariablesScalarFieldEnum = {
        key: "key",
        value: "value"
    }, e.Prisma.User_achievementsScalarFieldEnum = {
        userId: "userId",
        achievementId: "achievementId",
        createdDate: "createdDate",
        challengeId: "challengeId",
        id: "id"
    }, e.Prisma.AchievementScalarFieldEnum = {
        id: "id",
        description: "description",
        points: "points"
    }, e.Prisma.CommentScalarFieldEnum = {
        content: "content",
        createdDate: "createdDate",
        postId: "postId",
        userId: "userId",
        commentType: "commentType",
        id: "id",
        parentCommentId: "parentCommentId"
    }, e.Prisma.Comment_voteScalarFieldEnum = {
        userId: "userId",
        commentId: "commentId",
        value: "value",
        createdDate: "createdDate"
    }, e.Prisma.BlogPostScalarFieldEnum = {
        id: "id",
        title: "title",
        content: "content",
        description: "description",
        slug: "slug",
        published: "published",
        imageUrl: "imageUrl",
        viewCount: "viewCount",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        authorId: "authorId",
        categoryId: "categoryId"
    }, e.Prisma.BlogCommentScalarFieldEnum = {
        id: "id",
        content: "content",
        createdAt: "createdAt",
        postId: "postId",
        userId: "userId"
    }, e.Prisma.BlogCategoryScalarFieldEnum = {
        id: "id",
        name: "name",
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }, e.Prisma.BlogPostTagScalarFieldEnum = {
        postId: "postId",
        tagId: "tagId"
    }, e.Prisma.SocialMediaShareScalarFieldEnum = {
        id: "id",
        userId: "userId",
        postId: "postId",
        instagramLink: "instagramLink",
        xLink: "xLink",
        threadsLink: "threadsLink",
        tiktokLink: "tiktokLink",
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }, e.Prisma.JobScalarFieldEnum = {
        id: "id",
        slug: "slug",
        title: "title",
        content: "content",
        applyLink: "applyLink",
        isPublic: "isPublic",
        employmentType: "employmentType",
        locationType: "locationType",
        seniorityLevel: "seniorityLevel",
        roleType: "roleType",
        salary: "salary",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        companyId: "companyId"
    }, e.Prisma.CompanyScalarFieldEnum = {
        id: "id",
        name: "name",
        logoUrl: "logoUrl",
        description: "description",
        website: "website",
        location: "location",
        email: "email"
    }, e.Prisma.Curator_feedbackScalarFieldEnum = {
        id: "id",
        userId: "userId",
        createdDate: "createdDate",
        periodStart: "periodStart",
        periodEnd: "periodEnd",
        version: "version",
        summary: "summary"
    }, e.Prisma.Curator_feedback_itemScalarFieldEnum = {
        id: "id",
        feedbackId: "feedbackId",
        type: "type",
        category: "category",
        content: "content"
    }, e.Prisma.SortOrder = {
        asc: "asc",
        desc: "desc"
    }, e.Prisma.QueryMode = {
        default: "default",
        insensitive: "insensitive"
    }, e.Prisma.NullsOrder = {
        first: "first",
        last: "last"
    }, e.Prisma.notificationOrderByRelevanceFieldEnum = {
        id: "id",
        variables: "variables",
        userId: "userId",
        challengeId: "challengeId",
        socialMediaShareId: "socialMediaShareId"
    }, e.Prisma.user_reportOrderByRelevanceFieldEnum = {
        id: "id",
        comment: "comment",
        userId: "userId",
        postId: "postId"
    }, e.Prisma.postOrderByRelevanceFieldEnum = {
        id: "id",
        username: "username",
        creatorId: "creatorId",
        collectionId: "collectionId",
        aiDescription: "aiDescription",
        title: "title",
        description: "description",
        figmaClipboard: "figmaClipboard",
        html: "html",
        originalHtml: "originalHtml",
        reactCode: "reactCode",
        friendlyId: "friendlyId",
        css: "css",
        scopedCss: "scopedCss",
        prefixedCss: "prefixedCss",
        ipAdresses: "ipAdresses",
        comment: "comment",
        ogImageId: "ogImageId",
        challengeId: "challengeId",
        reviewerId: "reviewerId",
        originalPostId: "originalPostId",
        source_author: "source_author",
        rawCode: "rawCode",
        finishReason: "finishReason",
        backgroundColor: "backgroundColor",
        fulltext: "fulltext",
        tailwindCss: "tailwindCss"
    }, e.Prisma.user_review_postOrderByRelevanceFieldEnum = {
        id: "id",
        postId: "postId",
        reviewerId: "reviewerId"
    }, e.Prisma.sourceOrderByRelevanceFieldEnum = {
        postId: "postId",
        name: "name",
        website: "website"
    }, e.Prisma.eventOrderByRelevanceFieldEnum = {
        userId: "userId",
        type: "type",
        value: "value"
    }, e.Prisma.collectionOrderByRelevanceFieldEnum = {
        id: "id",
        name: "name",
        creatorId: "creatorId",
        description: "description",
        model: "model",
        error: "error"
    }, e.Prisma.post_ai_variation_queryOrderByRelevanceFieldEnum = {
        postId: "postId",
        ai_variation_queryId: "ai_variation_queryId"
    }, e.Prisma.ai_variation_queryOrderByRelevanceFieldEnum = {
        id: "id",
        query: "query",
        userId: "userId",
        targetPostId: "targetPostId",
        apiId: "apiId",
        model: "model",
        error: "error"
    }, e.Prisma.ai_generation_queryOrderByRelevanceFieldEnum = {
        id: "id",
        query: "query",
        model: "model",
        apiId: "apiId",
        userId: "userId",
        error: "error",
        targetPostId: "targetPostId",
        result: "result"
    }, e.Prisma.searchOrderByRelevanceFieldEnum = {
        userId: "userId",
        query: "query"
    }, e.Prisma.issueOrderByRelevanceFieldEnum = {
        id: "id"
    }, e.Prisma.issue_postOrderByRelevanceFieldEnum = {
        postId: "postId",
        issueId: "issueId"
    }, e.Prisma.post_tagOrderByRelevanceFieldEnum = {
        postId: "postId"
    }, e.Prisma.tagOrderByRelevanceFieldEnum = {
        value: "value",
        creatorId: "creatorId"
    }, e.Prisma.rankingsOrderByRelevanceFieldEnum = {
        username: "username",
        avatar_url: "avatar_url"
    }, e.Prisma.userOrderByRelevanceFieldEnum = {
        id: "id",
        githubId: "githubId",
        xId: "xId",
        googleId: "googleId",
        username: "username",
        email: "email",
        avatar_url: "avatar_url",
        bio: "bio",
        company: "company",
        location: "location",
        name: "name",
        blog: "blog",
        customBio: "customBio",
        providers: "providers",
        socials: "socials",
        instagram: "instagram",
        emailUnsubscribeToken: "emailUnsubscribeToken",
        twitter: "twitter",
        cuId: "cuId",
        discordAccessToken: "discordAccessToken",
        discordRefreshToken: "discordRefreshToken"
    }, e.Prisma.email_sentOrderByRelevanceFieldEnum = {
        id: "id",
        emailType: "emailType",
        challengeId: "challengeId",
        socialMediaShareId: "socialMediaShareId",
        userId: "userId"
    }, e.Prisma.user_follow_userOrderByRelevanceFieldEnum = {
        userIdBeingFollowed: "userIdBeingFollowed",
        userIdFollowing: "userIdFollowing"
    }, e.Prisma.admin_variablesOrderByRelevanceFieldEnum = {
        id: "id",
        userId: "userId"
    }, e.Prisma.user_favorite_postOrderByRelevanceFieldEnum = {
        userId: "userId",
        postId: "postId"
    }, e.Prisma.user_export_postOrderByRelevanceFieldEnum = {
        userId: "userId",
        postId: "postId",
        type: "type"
    }, e.Prisma.user_vote_postOrderByRelevanceFieldEnum = {
        userId: "userId",
        postId: "postId",
        challengeId: "challengeId"
    }, e.Prisma.challengeOrderByRelevanceFieldEnum = {
        id: "id",
        name: "name",
        action: "action",
        description: "description",
        image_url: "image_url",
        defaultHtml: "defaultHtml",
        defaultCss: "defaultCss",
        customCSS: "customCSS"
    }, e.Prisma.challenge_authorOrderByRelevanceFieldEnum = {
        id: "id",
        twitter: "twitter",
        imageUrl: "imageUrl",
        bio: "bio",
        name: "name",
        challengeId: "challengeId"
    }, e.Prisma.variablesOrderByRelevanceFieldEnum = {
        key: "key",
        value: "value"
    }, e.Prisma.user_achievementsOrderByRelevanceFieldEnum = {
        userId: "userId",
        achievementId: "achievementId",
        challengeId: "challengeId"
    }, e.Prisma.achievementOrderByRelevanceFieldEnum = {
        id: "id",
        description: "description"
    }, e.Prisma.commentOrderByRelevanceFieldEnum = {
        content: "content",
        postId: "postId",
        userId: "userId"
    }, e.Prisma.comment_voteOrderByRelevanceFieldEnum = {
        userId: "userId"
    }, e.Prisma.blogPostOrderByRelevanceFieldEnum = {
        id: "id",
        title: "title",
        content: "content",
        description: "description",
        slug: "slug",
        imageUrl: "imageUrl",
        authorId: "authorId",
        categoryId: "categoryId"
    }, e.Prisma.blogCommentOrderByRelevanceFieldEnum = {
        id: "id",
        content: "content",
        postId: "postId",
        userId: "userId"
    }, e.Prisma.blogCategoryOrderByRelevanceFieldEnum = {
        id: "id",
        name: "name"
    }, e.Prisma.blogPostTagOrderByRelevanceFieldEnum = {
        postId: "postId"
    }, e.Prisma.socialMediaShareOrderByRelevanceFieldEnum = {
        id: "id",
        userId: "userId",
        postId: "postId",
        instagramLink: "instagramLink",
        xLink: "xLink",
        threadsLink: "threadsLink",
        tiktokLink: "tiktokLink"
    }, e.Prisma.jobOrderByRelevanceFieldEnum = {
        id: "id",
        slug: "slug",
        title: "title",
        content: "content",
        applyLink: "applyLink",
        salary: "salary",
        companyId: "companyId"
    }, e.Prisma.companyOrderByRelevanceFieldEnum = {
        id: "id",
        name: "name",
        logoUrl: "logoUrl",
        description: "description",
        website: "website",
        location: "location",
        email: "email"
    }, e.Prisma.curator_feedbackOrderByRelevanceFieldEnum = {
        id: "id",
        userId: "userId",
        summary: "summary"
    }, e.Prisma.curator_feedback_itemOrderByRelevanceFieldEnum = {
        id: "id",
        feedbackId: "feedbackId",
        type: "type",
        category: "category",
        content: "content"
    }, e.notification_type = e.$Enums.notification_type = {
        approved: "approved",
        rejected: "rejected",
        botd: "botd",
        favorites: "favorites",
        views: "views",
        custom: "custom",
        challenge: "challenge",
        newFollower: "newFollower",
        newPostFromFollowing: "newPostFromFollowing",
        newChallenge: "newChallenge",
        voteChallenge: "voteChallenge",
        winChallenge: "winChallenge",
        variationApproved: "variationApproved",
        variation: "variation",
        comment: "comment",
        commentReply: "commentReply",
        reviewComment: "reviewComment"
    }, e.report_type = e.$Enums.report_type = {
        inappropriate: "inappropriate",
        malicious: "malicious",
        copyright: "copyright",
        other: "other"
    }, e.post_action = e.$Enums.post_action = {
        general: "general",
        delete: "delete",
        add: "add",
        add_to_cart: "add_to_cart",
        edit: "edit",
        upload: "upload",
        download: "download",
        play: "play",
        other: "other"
    }, e.post_theme = e.$Enums.post_theme = {
        both: "both",
        light: "light",
        dark: "dark"
    }, e.post_type = e.$Enums.post_type = {
        button: "button",
        checkbox: "checkbox",
        switch: "switch",
        input: "input",
        card: "card",
        form: "form",
        notification: "notification",
        loader: "loader",
        radio: "radio",
        pattern: "pattern",
        header: "header",
        tooltip: "tooltip"
    }, e.post_status = e.$Enums.post_status = {
        review: "review",
        approved: "approved",
        draft: "draft",
        needs_work: "needs_work",
        saved: "saved",
        none: "none"
    }, e.post_source = e.$Enums.post_source = {
        original: "original",
        reposted: "reposted",
        modified: "modified",
        variation: "variation"
    }, e.user_role = e.$Enums.user_role = {
        admin: "admin",
        user: "user",
        moderator: "moderator",
        tester: "tester",
        curator: "curator",
        editor: "editor"
    }, e.subscription = e.$Enums.subscription = {
        pro: "pro",
        pro_plus: "pro_plus"
    }, e.commentType = e.$Enums.commentType = {
        general: "general",
        review: "review"
    }, e.employment_type = e.$Enums.employment_type = {
        fullTime: "fullTime",
        partTime: "partTime",
        contract: "contract",
        internship: "internship",
        freelance: "freelance"
    }, e.location_type = e.$Enums.location_type = {
        remote: "remote",
        on_site: "on_site",
        hybrid: "hybrid"
    }, e.seniority_level = e.$Enums.seniority_level = {
        junior: "junior",
        mid: "mid",
        senior: "senior",
        chief: "chief",
        executive: "executive",
        other: "other"
    }, e.role_type = e.$Enums.role_type = {
        frontend: "frontend",
        backend: "backend",
        fullstack: "fullstack",
        devops: "devops",
        design: "design",
        product: "product",
        marketing: "marketing",
        other: "other"
    }, e.Prisma.ModelName = {
        notification: "notification",
        user_report: "user_report",
        post: "post",
        user_review_post: "user_review_post",
        source: "source",
        event: "event",
        collection: "collection",
        post_ai_variation_query: "post_ai_variation_query",
        ai_variation_query: "ai_variation_query",
        ai_generation_query: "ai_generation_query",
        search: "search",
        issue: "issue",
        issue_post: "issue_post",
        post_tag: "post_tag",
        tag: "tag",
        rankings: "rankings",
        user: "user",
        email_sent: "email_sent",
        user_follow_user: "user_follow_user",
        admin_variables: "admin_variables",
        user_favorite_post: "user_favorite_post",
        user_export_post: "user_export_post",
        user_vote_post: "user_vote_post",
        challenge: "challenge",
        challenge_author: "challenge_author",
        variables: "variables",
        user_achievements: "user_achievements",
        achievement: "achievement",
        comment: "comment",
        comment_vote: "comment_vote",
        blogPost: "blogPost",
        blogComment: "blogComment",
        blogCategory: "blogCategory",
        blogPostTag: "blogPostTag",
        socialMediaShare: "socialMediaShare",
        job: "job",
        company: "company",
        curator_feedback: "curator_feedback",
        curator_feedback_item: "curator_feedback_item"
    };
    class a {
        constructor() {
            return new Proxy(this, {
                get(u, l) {
                    let c;
                    const m = n();
                    throw m.isEdge ? c = `PrismaClient is not configured to run in ${m.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
` : c = "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" + m.prettyName + "`).", c += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`, new Error(c)
                }
            })
        }
    }
    e.PrismaClient = a, Object.assign(e, o)
})(Ne);
const Gr = Ne;
var Qr = Gr;
export {
    Qr as i
};