var ir = Object.defineProperty;
var sr = (t, e, n) => e in t ? ir(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Yt = (t, e, n) => sr(t, typeof e != "symbol" ? e + "" : e, n);
function yn(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: ar } = Object.prototype, { getPrototypeOf: jt } = Object, ft = /* @__PURE__ */ ((t) => (e) => {
  const n = ar.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Z = (t) => (t = t.toLowerCase(), (e) => ft(e) === t), dt = (t) => (e) => typeof e === t, { isArray: De } = Array, je = dt("undefined");
function lr(t) {
  return t !== null && !je(t) && t.constructor !== null && !je(t.constructor) && Y(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const wn = Z("ArrayBuffer");
function ur(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && wn(t.buffer), e;
}
const cr = dt("string"), Y = dt("function"), En = dt("number"), ht = (t) => t !== null && typeof t == "object", fr = (t) => t === !0 || t === !1, Ge = (t) => {
  if (ft(t) !== "object")
    return !1;
  const e = jt(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, dr = Z("Date"), hr = Z("File"), pr = Z("Blob"), mr = Z("FileList"), gr = (t) => ht(t) && Y(t.pipe), br = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Y(t.append) && ((e = ft(t)) === "formdata" || // detect form-data instance
  e === "object" && Y(t.toString) && t.toString() === "[object FormData]"));
}, yr = Z("URLSearchParams"), [wr, Er, vr, Sr] = ["ReadableStream", "Request", "Response", "Headers"].map(Z), Tr = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function He(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), De(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function vn(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sn = (t) => !je(t) && t !== ge;
function xt() {
  const { caseless: t } = Sn(this) && this || {}, e = {}, n = (r, o) => {
    const i = t && vn(e, o) || o;
    Ge(e[i]) && Ge(r) ? e[i] = xt(e[i], r) : Ge(r) ? e[i] = xt({}, r) : De(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && He(arguments[r], n);
  return e;
}
const _r = (t, e, n, { allOwnKeys: r } = {}) => (He(e, (o, i) => {
  n && Y(o) ? t[i] = yn(o, n) : t[i] = o;
}, { allOwnKeys: r }), t), Dr = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Or = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Ar = (t, e, n, r) => {
  let o, i, s;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, t, e)) && !a[s] && (e[s] = t[s], a[s] = !0);
    t = n !== !1 && jt(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Rr = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Cr = (t) => {
  if (!t) return null;
  if (De(t)) return t;
  let e = t.length;
  if (!En(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, xr = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && jt(Uint8Array)), Pr = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    e.call(t, i[0], i[1]);
  }
}, Nr = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Fr = Z("HTMLFormElement"), Ir = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Jt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), kr = Z("RegExp"), Tn = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  He(n, (o, i) => {
    let s;
    (s = e(o, i, t)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(t, r);
}, Br = (t) => {
  Tn(t, (e, n) => {
    if (Y(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (Y(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Mr = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return De(t) ? r(t) : r(String(t).split(e)), n;
}, Lr = () => {
}, Ur = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function jr(t) {
  return !!(t && Y(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Hr = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (ht(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const i = De(r) ? [] : {};
        return He(r, (s, a) => {
          const u = n(s, o + 1);
          !je(u) && (i[a] = u);
        }), e[o] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, qr = Z("AsyncFunction"), zr = (t) => t && (ht(t) || Y(t)) && Y(t.then) && Y(t.catch), _n = ((t, e) => t ? setImmediate : e ? ((n, r) => (ge.addEventListener("message", ({ source: o, data: i }) => {
  o === ge && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), ge.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Y(ge.postMessage)
), Xr = typeof queueMicrotask < "u" ? queueMicrotask.bind(ge) : typeof process < "u" && process.nextTick || _n, c = {
  isArray: De,
  isArrayBuffer: wn,
  isBuffer: lr,
  isFormData: br,
  isArrayBufferView: ur,
  isString: cr,
  isNumber: En,
  isBoolean: fr,
  isObject: ht,
  isPlainObject: Ge,
  isReadableStream: wr,
  isRequest: Er,
  isResponse: vr,
  isHeaders: Sr,
  isUndefined: je,
  isDate: dr,
  isFile: hr,
  isBlob: pr,
  isRegExp: kr,
  isFunction: Y,
  isStream: gr,
  isURLSearchParams: yr,
  isTypedArray: xr,
  isFileList: mr,
  forEach: He,
  merge: xt,
  extend: _r,
  trim: Tr,
  stripBOM: Dr,
  inherits: Or,
  toFlatObject: Ar,
  kindOf: ft,
  kindOfTest: Z,
  endsWith: Rr,
  toArray: Cr,
  forEachEntry: Pr,
  matchAll: Nr,
  isHTMLForm: Fr,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Tn,
  freezeMethods: Br,
  toObjectSet: Mr,
  toCamelCase: Ir,
  noop: Lr,
  toFiniteNumber: Ur,
  findKey: vn,
  global: ge,
  isContextDefined: Sn,
  isSpecCompliantForm: jr,
  toJSONObject: Hr,
  isAsyncFn: qr,
  isThenable: zr,
  setImmediate: _n,
  asap: Xr
};
function S(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
c.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Dn = S.prototype, On = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  On[t] = { value: t };
});
Object.defineProperties(S, On);
Object.defineProperty(Dn, "isAxiosError", { value: !0 });
S.from = (t, e, n, r, o, i) => {
  const s = Object.create(Dn);
  return c.toFlatObject(t, s, function(u) {
    return u !== Error.prototype;
  }, (a) => a !== "isAxiosError"), S.call(s, t.message, e, n, r, o), s.cause = t, s.name = t.name, i && Object.assign(s, i), s;
};
const $r = null;
function Pt(t) {
  return c.isPlainObject(t) || c.isArray(t);
}
function An(t) {
  return c.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Gt(t, e, n) {
  return t ? t.concat(e).map(function(o, i) {
    return o = An(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Wr(t) {
  return c.isArray(t) && !t.some(Pt);
}
const Vr = c.toFlatObject(c, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function pt(t, e, n) {
  if (!c.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !c.isUndefined(g[m]);
  });
  const r = n.metaTokens, o = n.visitor || f, i = n.dots, s = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(e);
  if (!c.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (c.isDate(h))
      return h.toISOString();
    if (!u && c.isBlob(h))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(h) || c.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function f(h, m, g) {
    let O = h;
    if (h && !g && typeof h == "object") {
      if (c.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (c.isArray(h) && Wr(h) || (c.isFileList(h) || c.endsWith(m, "[]")) && (O = c.toArray(h)))
        return m = An(m), O.forEach(function(A, C) {
          !(c.isUndefined(A) || A === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Gt([m], C, i) : s === null ? m : m + "[]",
            l(A)
          );
        }), !1;
    }
    return Pt(h) ? !0 : (e.append(Gt(g, m, i), l(h)), !1);
  }
  const d = [], b = Object.assign(Vr, {
    defaultVisitor: f,
    convertValue: l,
    isVisitable: Pt
  });
  function w(h, m) {
    if (!c.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(h), c.forEach(h, function(O, _) {
        (!(c.isUndefined(O) || O === null) && o.call(
          e,
          O,
          c.isString(_) ? _.trim() : _,
          m,
          b
        )) === !0 && w(O, m ? m.concat(_) : [_]);
      }), d.pop();
    }
  }
  if (!c.isObject(t))
    throw new TypeError("data must be an object");
  return w(t), e;
}
function Kt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Ht(t, e) {
  this._pairs = [], t && pt(t, this, e);
}
const Rn = Ht.prototype;
Rn.append = function(e, n) {
  this._pairs.push([e, n]);
};
Rn.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Kt);
  } : Kt;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Yr(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Yr;
  c.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(e, n) : i = c.isURLSearchParams(e) ? e.toString() : new Ht(e, n).toString(r), i) {
    const s = t.indexOf("#");
    s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class Zt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    c.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const xn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jr = typeof URLSearchParams < "u" ? URLSearchParams : Ht, Gr = typeof FormData < "u" ? FormData : null, Kr = typeof Blob < "u" ? Blob : null, Zr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jr,
    FormData: Gr,
    Blob: Kr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qt = typeof window < "u" && typeof document < "u", Nt = typeof navigator == "object" && navigator || void 0, Qr = qt && (!Nt || ["ReactNative", "NativeScript", "NS"].indexOf(Nt.product) < 0), eo = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", to = qt && window.location.href || "http://localhost", no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qt,
  hasStandardBrowserEnv: Qr,
  hasStandardBrowserWebWorkerEnv: eo,
  navigator: Nt,
  origin: to
}, Symbol.toStringTag, { value: "Module" })), j = {
  ...no,
  ...Zr
};
function ro(t, e) {
  return pt(t, new j.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return j.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function oo(t) {
  return c.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function io(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Pn(t) {
  function e(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), u = i >= n.length;
    return s = !s && c.isArray(o) ? o.length : s, u ? (c.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !c.isObject(o[s])) && (o[s] = []), e(n, r, o[s], i) && c.isArray(o[s]) && (o[s] = io(o[s])), !a);
  }
  if (c.isFormData(t) && c.isFunction(t.entries)) {
    const n = {};
    return c.forEachEntry(t, (r, o) => {
      e(oo(r), o, n, 0);
    }), n;
  }
  return null;
}
function so(t, e, n) {
  if (c.isString(t))
    try {
      return (e || JSON.parse)(t), c.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const qe = {
  transitional: xn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = c.isObject(e);
    if (i && c.isHTMLForm(e) && (e = new FormData(e)), c.isFormData(e))
      return o ? JSON.stringify(Pn(e)) : e;
    if (c.isArrayBuffer(e) || c.isBuffer(e) || c.isStream(e) || c.isFile(e) || c.isBlob(e) || c.isReadableStream(e))
      return e;
    if (c.isArrayBufferView(e))
      return e.buffer;
    if (c.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ro(e, this.formSerializer).toString();
      if ((a = c.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return pt(
          a ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), so(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || qe.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (c.isResponse(e) || c.isReadableStream(e))
      return e;
    if (e && c.isString(e) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: j.classes.FormData,
    Blob: j.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  qe.headers[t] = {};
});
const ao = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), lo = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || e[n] && ao[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Qt = Symbol("internals");
function Pe(t) {
  return t && String(t).trim().toLowerCase();
}
function Ke(t) {
  return t === !1 || t == null ? t : c.isArray(t) ? t.map(Ke) : String(t);
}
function uo(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const co = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function yt(t, e, n, r, o) {
  if (c.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!c.isString(e)) {
    if (c.isString(r))
      return e.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(e);
  }
}
function fo(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function ho(t, e) {
  const n = c.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, e, o, i, s);
      },
      configurable: !0
    });
  });
}
let $ = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function i(a, u, l) {
      const f = Pe(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = c.findKey(o, f);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || u] = Ke(a));
    }
    const s = (a, u) => c.forEach(a, (l, f) => i(l, f, u));
    if (c.isPlainObject(e) || e instanceof this.constructor)
      s(e, n);
    else if (c.isString(e) && (e = e.trim()) && !co(e))
      s(lo(e), n);
    else if (c.isHeaders(e))
      for (const [a, u] of e.entries())
        i(u, a, r);
    else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = Pe(e), e) {
      const r = c.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return uo(o);
        if (c.isFunction(n))
          return n.call(this, o, r);
        if (c.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Pe(e), e) {
      const r = c.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = Pe(s), s) {
        const a = c.findKey(r, s);
        a && (!n || yt(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return c.isArray(e) ? e.forEach(i) : i(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || yt(this, this[i], i, e, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return c.forEach(this, (o, i) => {
      const s = c.findKey(r, i);
      if (s) {
        n[s] = Ke(o), delete n[i];
        return;
      }
      const a = e ? fo(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Ke(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Qt] = this[Qt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = Pe(s);
      r[a] || (ho(o, s), r[a] = !0);
    }
    return c.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
$.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors($.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods($);
function wt(t, e) {
  const n = this || qe, r = e || n, o = $.from(r.headers);
  let i = r.data;
  return c.forEach(t, function(a) {
    i = a.call(n, i, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), i;
}
function Nn(t) {
  return !!(t && t.__CANCEL__);
}
function Oe(t, e, n) {
  S.call(this, t ?? "canceled", S.ERR_CANCELED, e, n), this.name = "CanceledError";
}
c.inherits(Oe, S, {
  __CANCEL__: !0
});
function Fn(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function po(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function mo(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, i = 0, s;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const l = Date.now(), f = r[i];
    s || (s = l), n[o] = u, r[o] = l;
    let d = i, b = 0;
    for (; d !== o; )
      b += n[d++], d = d % t;
    if (o = (o + 1) % t, o === i && (i = (i + 1) % t), l - s < e)
      return;
    const w = f && l - f;
    return w ? Math.round(b * 1e3 / w) : void 0;
  };
}
function go(t, e) {
  let n = 0, r = 1e3 / e, o, i;
  const s = (l, f = Date.now()) => {
    n = f, o = null, i && (clearTimeout(i), i = null), t.apply(null, l);
  };
  return [(...l) => {
    const f = Date.now(), d = f - n;
    d >= r ? s(l, f) : (o = l, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const ot = (t, e, n = 3) => {
  let r = 0;
  const o = mo(50, 250);
  return go((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, u = s - r, l = o(u), f = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: u,
      rate: l || void 0,
      estimated: l && a && f ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, en = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, tn = (t) => (...e) => c.asap(() => t(...e)), bo = j.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (n) => (n = new URL(n, j.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(j.origin),
  j.navigator && /(msie|trident)/i.test(j.navigator.userAgent)
) : () => !0, yo = j.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, i) {
      const s = [t + "=" + encodeURIComponent(e)];
      c.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), c.isString(r) && s.push("path=" + r), c.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function wo(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Eo(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function In(t, e, n) {
  let r = !wo(e);
  return t && (r || n == !1) ? Eo(t, e) : e;
}
const nn = (t) => t instanceof $ ? { ...t } : t;
function ye(t, e) {
  e = e || {};
  const n = {};
  function r(l, f, d, b) {
    return c.isPlainObject(l) && c.isPlainObject(f) ? c.merge.call({ caseless: b }, l, f) : c.isPlainObject(f) ? c.merge({}, f) : c.isArray(f) ? f.slice() : f;
  }
  function o(l, f, d, b) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(l))
        return r(void 0, l, d, b);
    } else return r(l, f, d, b);
  }
  function i(l, f) {
    if (!c.isUndefined(f))
      return r(void 0, f);
  }
  function s(l, f) {
    if (c.isUndefined(f)) {
      if (!c.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, f);
  }
  function a(l, f, d) {
    if (d in e)
      return r(l, f);
    if (d in t)
      return r(void 0, l);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (l, f, d) => o(nn(l), nn(f), d, !0)
  };
  return c.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = u[f] || o, b = d(t[f], e[f], f);
    c.isUndefined(b) && d !== a || (n[f] = b);
  }), n;
}
const kn = (t) => {
  const e = ye({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = e;
  e.headers = s = $.from(s), e.url = Cn(In(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let u;
  if (c.isFormData(n)) {
    if (j.hasStandardBrowserEnv || j.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((u = s.getContentType()) !== !1) {
      const [l, ...f] = u ? u.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...f].join("; "));
    }
  }
  if (j.hasStandardBrowserEnv && (r && c.isFunction(r) && (r = r(e)), r || r !== !1 && bo(e.url))) {
    const l = o && i && yo.read(i);
    l && s.set(o, l);
  }
  return e;
}, vo = typeof XMLHttpRequest < "u", So = vo && function(t) {
  return new Promise(function(n, r) {
    const o = kn(t);
    let i = o.data;
    const s = $.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: u, onDownloadProgress: l } = o, f, d, b, w, h;
    function m() {
      w && w(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function O() {
      if (!g)
        return;
      const A = $.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: A,
        config: t,
        request: g
      };
      Fn(function(H) {
        n(H), m();
      }, function(H) {
        r(H), m();
      }, P), g = null;
    }
    "onloadend" in g ? g.onloadend = O : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, g.onabort = function() {
      g && (r(new S("Request aborted", S.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, t, g)), g = null;
    }, g.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const P = o.transitional || xn;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new S(
        C,
        P.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        t,
        g
      )), g = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in g && c.forEach(s.toJSON(), function(C, P) {
      g.setRequestHeader(P, C);
    }), c.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), a && a !== "json" && (g.responseType = o.responseType), l && ([b, h] = ot(l, !0), g.addEventListener("progress", b)), u && g.upload && ([d, w] = ot(u), g.upload.addEventListener("progress", d), g.upload.addEventListener("loadend", w)), (o.cancelToken || o.signal) && (f = (A) => {
      g && (r(!A || A.type ? new Oe(null, t, g) : A), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const _ = po(o.url);
    if (_ && j.protocols.indexOf(_) === -1) {
      r(new S("Unsupported protocol " + _ + ":", S.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(i || null);
  });
}, To = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), o;
    const i = function(l) {
      if (!o) {
        o = !0, a();
        const f = l instanceof Error ? l : this.reason;
        r.abort(f instanceof S ? f : new Oe(f instanceof Error ? f.message : f));
      }
    };
    let s = e && setTimeout(() => {
      s = null, i(new S(`timeout ${e} of ms exceeded`, S.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (s && clearTimeout(s), s = null, t.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((l) => l.addEventListener("abort", i));
    const { signal: u } = r;
    return u.unsubscribe = () => c.asap(a), u;
  }
}, _o = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + e, yield t.slice(r, o), r = o;
}, Do = async function* (t, e) {
  for await (const n of Oo(t))
    yield* _o(n, e);
}, Oo = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, rn = (t, e, n, r) => {
  const o = Do(t, e);
  let i = 0, s, a = (u) => {
    s || (s = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: l, value: f } = await o.next();
        if (l) {
          a(), u.close();
          return;
        }
        let d = f.byteLength;
        if (n) {
          let b = i += d;
          n(b);
        }
        u.enqueue(new Uint8Array(f));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(u) {
      return a(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, mt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Bn = mt && typeof ReadableStream == "function", Ao = mt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Mn = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, Ro = Bn && Mn(() => {
  let t = !1;
  const e = new Request(j.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), on = 64 * 1024, Ft = Bn && Mn(() => c.isReadableStream(new Response("").body)), it = {
  stream: Ft && ((t) => t.body)
};
mt && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !it[e] && (it[e] = c.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new S(`Response type '${e}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Co = async (t) => {
  if (t == null)
    return 0;
  if (c.isBlob(t))
    return t.size;
  if (c.isSpecCompliantForm(t))
    return (await new Request(j.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (c.isArrayBufferView(t) || c.isArrayBuffer(t))
    return t.byteLength;
  if (c.isURLSearchParams(t) && (t = t + ""), c.isString(t))
    return (await Ao(t)).byteLength;
}, xo = async (t, e) => {
  const n = c.toFiniteNumber(t.getContentLength());
  return n ?? Co(e);
}, Po = mt && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: u,
    responseType: l,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: b
  } = kn(t);
  l = l ? (l + "").toLowerCase() : "text";
  let w = To([o, i && i.toAbortSignal()], s), h;
  const m = w && w.unsubscribe && (() => {
    w.unsubscribe();
  });
  let g;
  try {
    if (u && Ro && n !== "get" && n !== "head" && (g = await xo(f, r)) !== 0) {
      let P = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), B;
      if (c.isFormData(r) && (B = P.headers.get("content-type")) && f.setContentType(B), P.body) {
        const [H, Q] = en(
          g,
          ot(tn(u))
        );
        r = rn(P.body, on, H, Q);
      }
    }
    c.isString(d) || (d = d ? "include" : "omit");
    const O = "credentials" in Request.prototype;
    h = new Request(e, {
      ...b,
      signal: w,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: O ? d : void 0
    });
    let _ = await fetch(h);
    const A = Ft && (l === "stream" || l === "response");
    if (Ft && (a || A && m)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((L) => {
        P[L] = _[L];
      });
      const B = c.toFiniteNumber(_.headers.get("content-length")), [H, Q] = a && en(
        B,
        ot(tn(a), !0)
      ) || [];
      _ = new Response(
        rn(_.body, on, H, () => {
          Q && Q(), m && m();
        }),
        P
      );
    }
    l = l || "text";
    let C = await it[c.findKey(it, l) || "text"](_, t);
    return !A && m && m(), await new Promise((P, B) => {
      Fn(P, B, {
        data: C,
        headers: $.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: t,
        request: h
      });
    });
  } catch (O) {
    throw m && m(), O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, t, h),
      {
        cause: O.cause || O
      }
    ) : S.from(O, O && O.code, t, h);
  }
}), It = {
  http: $r,
  xhr: So,
  fetch: Po
};
c.forEach(It, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const sn = (t) => `- ${t}`, No = (t) => c.isFunction(t) || t === null || t === !1, Ln = {
  getAdapter: (t) => {
    t = c.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let s;
      if (r = n, !No(n) && (r = It[(s = String(n)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, u]) => `adapter ${a} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = e ? i.length > 1 ? `since :
` + i.map(sn).join(`
`) : " " + sn(i[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: It
};
function Et(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Oe(null, t);
}
function an(t) {
  return Et(t), t.headers = $.from(t.headers), t.data = wt.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(t.adapter || qe.adapter)(t).then(function(r) {
    return Et(t), r.data = wt.call(
      t,
      t.transformResponse,
      r
    ), r.headers = $.from(r.headers), r;
  }, function(r) {
    return Nn(r) || (Et(t), r && r.response && (r.response.data = wt.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = $.from(r.response.headers))), Promise.reject(r);
  });
}
const Un = "1.8.4", gt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  gt[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const ln = {};
gt.transitional = function(e, n, r) {
  function o(i, s) {
    return "[Axios v" + Un + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (e === !1)
      throw new S(
        o(s, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !ln[s] && (ln[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, s, a) : !0;
  };
};
gt.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function Fo(t, e, n) {
  if (typeof t != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = e[i];
    if (s) {
      const a = t[i], u = a === void 0 || s(a, i, t);
      if (u !== !0)
        throw new S("option " + i + " must be " + u, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + i, S.ERR_BAD_OPTION);
  }
}
const Ze = {
  assertOptions: Fo,
  validators: gt
}, ee = Ze.validators;
let be = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Zt(),
      response: new Zt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = ye(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && Ze.assertOptions(r, {
      silentJSONParsing: ee.transitional(ee.boolean),
      forcedJSONParsing: ee.transitional(ee.boolean),
      clarifyTimeoutError: ee.transitional(ee.boolean)
    }, !1), o != null && (c.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ze.assertOptions(o, {
      encode: ee.function,
      serialize: ee.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ze.assertOptions(n, {
      baseUrl: ee.spelling("baseURL"),
      withXsrfToken: ee.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && c.merge(
      i.common,
      i[n.method]
    );
    i && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), n.headers = $.concat(s, i);
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (u = u && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let f, d = 0, b;
    if (!u) {
      const h = [an.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, l), b = h.length, f = Promise.resolve(n); d < b; )
        f = f.then(h[d++], h[d++]);
      return f;
    }
    b = a.length;
    let w = n;
    for (d = 0; d < b; ) {
      const h = a[d++], m = a[d++];
      try {
        w = h(w);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      f = an.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, b = l.length; d < b; )
      f = f.then(l[d++], l[d++]);
    return f;
  }
  getUri(e) {
    e = ye(this.defaults, e);
    const n = In(e.baseURL, e.url, e.allowAbsoluteUrls);
    return Cn(n, e.params, e.paramsSerializer);
  }
};
c.forEach(["delete", "get", "head", "options"], function(e) {
  be.prototype[e] = function(n, r) {
    return this.request(ye(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, s, a) {
      return this.request(ye(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  be.prototype[e] = n(), be.prototype[e + "Form"] = n(!0);
});
let Io = class jn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, e(function(i, s, a) {
      r.reason || (r.reason = new Oe(i, s, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new jn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
};
function ko(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Bo(t) {
  return c.isObject(t) && t.isAxiosError === !0;
}
const kt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(kt).forEach(([t, e]) => {
  kt[e] = t;
});
function Hn(t) {
  const e = new be(t), n = yn(be.prototype.request, e);
  return c.extend(n, be.prototype, e, { allOwnKeys: !0 }), c.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Hn(ye(t, o));
  }, n;
}
const F = Hn(qe);
F.Axios = be;
F.CanceledError = Oe;
F.CancelToken = Io;
F.isCancel = Nn;
F.VERSION = Un;
F.toFormData = pt;
F.AxiosError = S;
F.Cancel = F.CanceledError;
F.all = function(e) {
  return Promise.all(e);
};
F.spread = ko;
F.isAxiosError = Bo;
F.mergeConfig = ye;
F.AxiosHeaders = $;
F.formToJSON = (t) => Pn(c.isHTMLForm(t) ? new FormData(t) : t);
F.getAdapter = Ln.getAdapter;
F.HttpStatusCode = kt;
F.default = F;
const {
  Axios: di,
  AxiosError: hi,
  CanceledError: pi,
  isCancel: mi,
  CancelToken: gi,
  VERSION: bi,
  all: yi,
  Cancel: wi,
  isAxiosError: Ei,
  spread: vi,
  toFormData: Si,
  AxiosHeaders: Ti,
  HttpStatusCode: _i,
  formToJSON: Di,
  getAdapter: Oi,
  mergeConfig: Ai
} = F;
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function un(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ne(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? un(Object(n), !0).forEach(function(r) {
      Mo(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Qe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qe = function(e) {
    return typeof e;
  } : Qe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Qe(t);
}
function Mo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ie() {
  return ie = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ie.apply(this, arguments);
}
function Lo(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
function Uo(t, e) {
  if (t == null) return {};
  var n = Lo(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      r = i[o], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
var jo = "1.15.6";
function oe(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var se = oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ze = oe(/Edge/i), cn = oe(/firefox/i), ke = oe(/safari/i) && !oe(/chrome/i) && !oe(/android/i), zt = oe(/iP(ad|od|hone)/i), qn = oe(/chrome/i) && oe(/android/i), zn = {
  capture: !1,
  passive: !1
};
function D(t, e, n) {
  t.addEventListener(e, n, !se && zn);
}
function T(t, e, n) {
  t.removeEventListener(e, n, !se && zn);
}
function st(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Xn(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function K(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && st(t, e) : st(t, e)) || r && t === n)
        return t;
      if (t === n) break;
    } while (t = Xn(t));
  }
  return null;
}
var fn = /\s+/g;
function W(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(fn, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(fn, " ");
    }
}
function E(t, e, n) {
  var r = t && t.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function Te(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var r = E(t, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!e && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function $n(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), o = 0, i = r.length;
    if (n)
      for (; o < i; o++)
        n(r[o], o);
    return r;
  }
  return [];
}
function te() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function k(t, e, n, r, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var i, s, a, u, l, f, d;
    if (t !== window && t.parentNode && t !== te() ? (i = t.getBoundingClientRect(), s = i.top, a = i.left, u = i.bottom, l = i.right, f = i.height, d = i.width) : (s = 0, a = 0, u = window.innerHeight, l = window.innerWidth, f = window.innerHeight, d = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !se))
      do
        if (o && o.getBoundingClientRect && (E(o, "transform") !== "none" || n && E(o, "position") !== "static")) {
          var b = o.getBoundingClientRect();
          s -= b.top + parseInt(E(o, "border-top-width")), a -= b.left + parseInt(E(o, "border-left-width")), u = s + i.height, l = a + i.width;
          break;
        }
      while (o = o.parentNode);
    if (r && t !== window) {
      var w = Te(o || t), h = w && w.a, m = w && w.d;
      w && (s /= m, a /= h, d /= h, f /= m, u = s + f, l = a + d);
    }
    return {
      top: s,
      left: a,
      bottom: u,
      right: l,
      width: d,
      height: f
    };
  }
}
function dn(t, e, n) {
  for (var r = fe(t, !0), o = k(t)[e]; r; ) {
    var i = k(r)[n], s = void 0;
    if (s = o >= i, !s) return r;
    if (r === te()) break;
    r = fe(r, !1);
  }
  return !1;
}
function _e(t, e, n, r) {
  for (var o = 0, i = 0, s = t.children; i < s.length; ) {
    if (s[i].style.display !== "none" && s[i] !== y.ghost && (r || s[i] !== y.dragged) && K(s[i], n.draggable, t, !1)) {
      if (o === e)
        return s[i];
      o++;
    }
    i++;
  }
  return null;
}
function Xt(t, e) {
  for (var n = t.lastElementChild; n && (n === y.ghost || E(n, "display") === "none" || e && !st(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function J(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== y.clone && (!e || st(t, e)) && n++;
  return n;
}
function hn(t) {
  var e = 0, n = 0, r = te();
  if (t)
    do {
      var o = Te(t), i = o.a, s = o.d;
      e += t.scrollLeft * i, n += t.scrollTop * s;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function Ho(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r]) return Number(n);
    }
  return -1;
}
function fe(t, e) {
  if (!t || !t.getBoundingClientRect) return te();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = E(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return te();
        if (r || e) return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return te();
}
function qo(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function vt(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Be;
function Wn(t, e) {
  return function() {
    if (!Be) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Be = setTimeout(function() {
        Be = void 0;
      }, e);
    }
  };
}
function zo() {
  clearTimeout(Be), Be = void 0;
}
function Vn(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function Yn(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Jn(t, e, n) {
  var r = {};
  return Array.from(t.children).forEach(function(o) {
    var i, s, a, u;
    if (!(!K(o, e.draggable, t, !1) || o.animated || o === n)) {
      var l = k(o);
      r.left = Math.min((i = r.left) !== null && i !== void 0 ? i : 1 / 0, l.left), r.top = Math.min((s = r.top) !== null && s !== void 0 ? s : 1 / 0, l.top), r.right = Math.max((a = r.right) !== null && a !== void 0 ? a : -1 / 0, l.right), r.bottom = Math.max((u = r.bottom) !== null && u !== void 0 ? u : -1 / 0, l.bottom);
    }
  }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
var X = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Xo() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(o) {
          if (!(E(o, "display") === "none" || o === y.ghost)) {
            t.push({
              target: o,
              rect: k(o)
            });
            var i = ne({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var s = Te(o, !0);
              s && (i.top -= s.f, i.left -= s.e);
            }
            o.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(r) {
      t.push(r);
    },
    removeAnimationState: function(r) {
      t.splice(Ho(t, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var i = !1, s = 0;
      t.forEach(function(a) {
        var u = 0, l = a.target, f = l.fromRect, d = k(l), b = l.prevFromRect, w = l.prevToRect, h = a.rect, m = Te(l, !0);
        m && (d.top -= m.f, d.left -= m.e), l.toRect = d, l.thisAnimationDuration && vt(b, d) && !vt(f, d) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - d.top) / (h.left - d.left) === (f.top - d.top) / (f.left - d.left) && (u = Wo(h, b, w, o.options)), vt(d, f) || (l.prevFromRect = f, l.prevToRect = d, u || (u = o.options.animation), o.animate(l, h, d, u)), u && (i = !0, s = Math.max(s, u), clearTimeout(l.animationResetTimer), l.animationResetTimer = setTimeout(function() {
          l.animationTime = 0, l.prevFromRect = null, l.fromRect = null, l.prevToRect = null, l.thisAnimationDuration = null;
        }, u), l.thisAnimationDuration = u);
      }), clearTimeout(e), i ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, s) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, o, i, s) {
      if (s) {
        E(r, "transition", ""), E(r, "transform", "");
        var a = Te(this.el), u = a && a.a, l = a && a.d, f = (o.left - i.left) / (u || 1), d = (o.top - i.top) / (l || 1);
        r.animatingX = !!f, r.animatingY = !!d, E(r, "transform", "translate3d(" + f + "px," + d + "px,0)"), this.forRepaintDummy = $o(r), E(r, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), E(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          E(r, "transition", ""), E(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, s);
      }
    }
  };
}
function $o(t) {
  return t.offsetWidth;
}
function Wo(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var we = [], St = {
  initializeByDefault: !0
}, Xe = {
  mount: function(e) {
    for (var n in St)
      St.hasOwnProperty(n) && !(n in e) && (e[n] = St[n]);
    we.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), we.push(e);
  },
  pluginEvent: function(e, n, r) {
    var o = this;
    this.eventCanceled = !1, r.cancel = function() {
      o.eventCanceled = !0;
    };
    var i = e + "Global";
    we.forEach(function(s) {
      n[s.pluginName] && (n[s.pluginName][i] && n[s.pluginName][i](ne({
        sortable: n
      }, r)), n.options[s.pluginName] && n[s.pluginName][e] && n[s.pluginName][e](ne({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, o) {
    we.forEach(function(a) {
      var u = a.pluginName;
      if (!(!e.options[u] && !a.initializeByDefault)) {
        var l = new a(e, n, e.options);
        l.sortable = e, l.options = e.options, e[u] = l, ie(r, l.defaults);
      }
    });
    for (var i in e.options)
      if (e.options.hasOwnProperty(i)) {
        var s = this.modifyOption(e, i, e.options[i]);
        typeof s < "u" && (e.options[i] = s);
      }
  },
  getEventProperties: function(e, n) {
    var r = {};
    return we.forEach(function(o) {
      typeof o.eventProperties == "function" && ie(r, o.eventProperties.call(n[o.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var o;
    return we.forEach(function(i) {
      e[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (o = i.optionListeners[n].call(e[i.pluginName], r));
    }), o;
  }
};
function Vo(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, o = t.targetEl, i = t.cloneEl, s = t.toEl, a = t.fromEl, u = t.oldIndex, l = t.newIndex, f = t.oldDraggableIndex, d = t.newDraggableIndex, b = t.originalEvent, w = t.putSortable, h = t.extraEventProperties;
  if (e = e || n && n[X], !!e) {
    var m, g = e.options, O = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !se && !ze ? m = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(r, !0, !0)), m.to = s || n, m.from = a || n, m.item = o || n, m.clone = i, m.oldIndex = u, m.newIndex = l, m.oldDraggableIndex = f, m.newDraggableIndex = d, m.originalEvent = b, m.pullMode = w ? w.lastPutMode : void 0;
    var _ = ne(ne({}, h), Xe.getEventProperties(r, e));
    for (var A in _)
      m[A] = _[A];
    n && n.dispatchEvent(m), g[O] && g[O].call(e, m);
  }
}
var Yo = ["evt"], z = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.evt, i = Uo(r, Yo);
  Xe.pluginEvent.bind(y)(e, n, ne({
    dragEl: p,
    parentEl: N,
    ghostEl: v,
    rootEl: R,
    nextEl: me,
    lastDownEl: et,
    cloneEl: x,
    cloneHidden: ce,
    dragStarted: Ne,
    putSortable: M,
    activeSortable: y.active,
    originalEvent: o,
    oldIndex: Se,
    oldDraggableIndex: Me,
    newIndex: V,
    newDraggableIndex: ue,
    hideGhostForTarget: Qn,
    unhideGhostForTarget: er,
    cloneNowHidden: function() {
      ce = !0;
    },
    cloneNowShown: function() {
      ce = !1;
    },
    dispatchSortableEvent: function(a) {
      q({
        sortable: n,
        name: a,
        originalEvent: o
      });
    }
  }, i));
};
function q(t) {
  Vo(ne({
    putSortable: M,
    cloneEl: x,
    targetEl: p,
    rootEl: R,
    oldIndex: Se,
    oldDraggableIndex: Me,
    newIndex: V,
    newDraggableIndex: ue
  }, t));
}
var p, N, v, R, me, et, x, ce, Se, V, Me, ue, We, M, ve = !1, at = !1, lt = [], he, G, Tt, _t, pn, mn, Ne, Ee, Le, Ue = !1, Ve = !1, tt, U, Dt = [], Bt = !1, ut = [], bt = typeof document < "u", Ye = zt, gn = ze || se ? "cssFloat" : "float", Jo = bt && !qn && !zt && "draggable" in document.createElement("div"), Gn = function() {
  if (bt) {
    if (se)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), Kn = function(e, n) {
  var r = E(e), o = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), i = _e(e, 0, n), s = _e(e, 1, n), a = i && E(i), u = s && E(s), l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + k(i).width, f = u && parseInt(u.marginLeft) + parseInt(u.marginRight) + k(s).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && a.float && a.float !== "none") {
    var d = a.float === "left" ? "left" : "right";
    return s && (u.clear === "both" || u.clear === d) ? "vertical" : "horizontal";
  }
  return i && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || l >= o && r[gn] === "none" || s && r[gn] === "none" && l + f > o) ? "vertical" : "horizontal";
}, Go = function(e, n, r) {
  var o = r ? e.left : e.top, i = r ? e.right : e.bottom, s = r ? e.width : e.height, a = r ? n.left : n.top, u = r ? n.right : n.bottom, l = r ? n.width : n.height;
  return o === a || i === u || o + s / 2 === a + l / 2;
}, Ko = function(e, n) {
  var r;
  return lt.some(function(o) {
    var i = o[X].options.emptyInsertThreshold;
    if (!(!i || Xt(o))) {
      var s = k(o), a = e >= s.left - i && e <= s.right + i, u = n >= s.top - i && n <= s.bottom + i;
      if (a && u)
        return r = o;
    }
  }), r;
}, Zn = function(e) {
  function n(i, s) {
    return function(a, u, l, f) {
      var d = a.options.group.name && u.options.group.name && a.options.group.name === u.options.group.name;
      if (i == null && (s || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (s && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(a, u, l, f), s)(a, u, l, f);
      var b = (s ? a : u).options.group.name;
      return i === !0 || typeof i == "string" && i === b || i.join && i.indexOf(b) > -1;
    };
  }
  var r = {}, o = e.group;
  (!o || Qe(o) != "object") && (o = {
    name: o
  }), r.name = o.name, r.checkPull = n(o.pull, !0), r.checkPut = n(o.put), r.revertClone = o.revertClone, e.group = r;
}, Qn = function() {
  !Gn && v && E(v, "display", "none");
}, er = function() {
  !Gn && v && E(v, "display", "");
};
bt && !qn && document.addEventListener("click", function(t) {
  if (at)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), at = !1, !1;
}, !0);
var pe = function(e) {
  if (p) {
    e = e.touches ? e.touches[0] : e;
    var n = Ko(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var o in e)
        e.hasOwnProperty(o) && (r[o] = e[o]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[X]._onDragOver(r);
    }
  }
}, Zo = function(e) {
  p && p.parentNode[X]._isOutsideThisEl(e.target);
};
function y(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = ie({}, e), t[X] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Kn(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, a) {
      s.setData("Text", a.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: y.supportPointer !== !1 && "PointerEvent" in window && (!ke || zt),
    emptyInsertThreshold: 5
  };
  Xe.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  Zn(e);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Jo, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? D(t, "pointerdown", this._onTapStart) : (D(t, "mousedown", this._onTapStart), D(t, "touchstart", this._onTapStart)), this.nativeDraggable && (D(t, "dragover", this), D(t, "dragenter", this)), lt.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ie(this, Xo());
}
y.prototype = /** @lends Sortable.prototype */
{
  constructor: y,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Ee = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, p) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, r = this.el, o = this.options, i = o.preventOnFilter, s = e.type, a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, u = (a || e).target, l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || u, f = o.filter;
      if (si(r), !p && !(/mousedown|pointerdown/.test(s) && e.button !== 0 || o.disabled) && !l.isContentEditable && !(!this.nativeDraggable && ke && u && u.tagName.toUpperCase() === "SELECT") && (u = K(u, o.draggable, r, !1), !(u && u.animated) && et !== u)) {
        if (Se = J(u), Me = J(u, o.draggable), typeof f == "function") {
          if (f.call(this, e, u, this)) {
            q({
              sortable: n,
              rootEl: l,
              name: "filter",
              targetEl: u,
              toEl: r,
              fromEl: r
            }), z("filter", n, {
              evt: e
            }), i && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(d) {
          if (d = K(l, d.trim(), r, !1), d)
            return q({
              sortable: n,
              rootEl: d,
              name: "filter",
              targetEl: u,
              fromEl: r,
              toEl: r
            }), z("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          i && e.preventDefault();
          return;
        }
        o.handle && !K(l, o.handle, r, !1) || this._prepareDragStart(e, a, u);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var o = this, i = o.el, s = o.options, a = i.ownerDocument, u;
    if (r && !p && r.parentNode === i) {
      var l = k(r);
      if (R = i, p = r, N = p.parentNode, me = p.nextSibling, et = r, We = s.group, y.dragged = p, he = {
        target: p,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, pn = he.clientX - l.left, mn = he.clientY - l.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, p.style["will-change"] = "all", u = function() {
        if (z("delayEnded", o, {
          evt: e
        }), y.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !cn && o.nativeDraggable && (p.draggable = !0), o._triggerDragStart(e, n), q({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), W(p, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(f) {
        $n(p, f.trim(), Ot);
      }), D(a, "dragover", pe), D(a, "mousemove", pe), D(a, "touchmove", pe), s.supportPointer ? (D(a, "pointerup", o._onDrop), !this.nativeDraggable && D(a, "pointercancel", o._onDrop)) : (D(a, "mouseup", o._onDrop), D(a, "touchend", o._onDrop), D(a, "touchcancel", o._onDrop)), cn && this.nativeDraggable && (this.options.touchStartThreshold = 4, p.draggable = !0), z("delayStart", this, {
        evt: e
      }), s.delay && (!s.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ze || se))) {
        if (y.eventCanceled) {
          this._onDrop();
          return;
        }
        s.supportPointer ? (D(a, "pointerup", o._disableDelayedDrag), D(a, "pointercancel", o._disableDelayedDrag)) : (D(a, "mouseup", o._disableDelayedDrag), D(a, "touchend", o._disableDelayedDrag), D(a, "touchcancel", o._disableDelayedDrag)), D(a, "mousemove", o._delayedDragTouchMoveHandler), D(a, "touchmove", o._delayedDragTouchMoveHandler), s.supportPointer && D(a, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(u, s.delay);
      } else
        u();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    p && Ot(p), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._disableDelayedDrag), T(e, "touchend", this._disableDelayedDrag), T(e, "touchcancel", this._disableDelayedDrag), T(e, "pointerup", this._disableDelayedDrag), T(e, "pointercancel", this._disableDelayedDrag), T(e, "mousemove", this._delayedDragTouchMoveHandler), T(e, "touchmove", this._delayedDragTouchMoveHandler), T(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? D(document, "pointermove", this._onTouchMove) : n ? D(document, "touchmove", this._onTouchMove) : D(document, "mousemove", this._onTouchMove) : (D(p, "dragend", this), D(R, "dragstart", this._onDragStart));
    try {
      document.selection ? nt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (ve = !1, R && p) {
      z("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && D(document, "dragover", Zo);
      var r = this.options;
      !e && W(p, r.dragClass, !1), W(p, r.ghostClass, !0), y.active = this, e && this._appendGhost(), q({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (G) {
      this._lastX = G.clientX, this._lastY = G.clientY, Qn();
      for (var e = document.elementFromPoint(G.clientX, G.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(G.clientX, G.clientY), e !== n); )
        n = e;
      if (p.parentNode[X]._isOutsideThisEl(e), n)
        do {
          if (n[X]) {
            var r = void 0;
            if (r = n[X]._onDragOver({
              clientX: G.clientX,
              clientY: G.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = Xn(n));
      er();
    }
  },
  _onTouchMove: function(e) {
    if (he) {
      var n = this.options, r = n.fallbackTolerance, o = n.fallbackOffset, i = e.touches ? e.touches[0] : e, s = v && Te(v, !0), a = v && s && s.a, u = v && s && s.d, l = Ye && U && hn(U), f = (i.clientX - he.clientX + o.x) / (a || 1) + (l ? l[0] - Dt[0] : 0) / (a || 1), d = (i.clientY - he.clientY + o.y) / (u || 1) + (l ? l[1] - Dt[1] : 0) / (u || 1);
      if (!y.active && !ve) {
        if (r && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (v) {
        s ? (s.e += f - (Tt || 0), s.f += d - (_t || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: d
        };
        var b = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        E(v, "webkitTransform", b), E(v, "mozTransform", b), E(v, "msTransform", b), E(v, "transform", b), Tt = f, _t = d, G = i;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!v) {
      var e = this.options.fallbackOnBody ? document.body : R, n = k(p, !0, Ye, !0, e), r = this.options;
      if (Ye) {
        for (U = e; E(U, "position") === "static" && E(U, "transform") === "none" && U !== document; )
          U = U.parentNode;
        U !== document.body && U !== document.documentElement ? (U === document && (U = te()), n.top += U.scrollTop, n.left += U.scrollLeft) : U = te(), Dt = hn(U);
      }
      v = p.cloneNode(!0), W(v, r.ghostClass, !1), W(v, r.fallbackClass, !0), W(v, r.dragClass, !0), E(v, "transition", ""), E(v, "transform", ""), E(v, "box-sizing", "border-box"), E(v, "margin", 0), E(v, "top", n.top), E(v, "left", n.left), E(v, "width", n.width), E(v, "height", n.height), E(v, "opacity", "0.8"), E(v, "position", Ye ? "absolute" : "fixed"), E(v, "zIndex", "100000"), E(v, "pointerEvents", "none"), y.ghost = v, e.appendChild(v), E(v, "transform-origin", pn / parseInt(v.style.width) * 100 + "% " + mn / parseInt(v.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var r = this, o = e.dataTransfer, i = r.options;
    if (z("dragStart", this, {
      evt: e
    }), y.eventCanceled) {
      this._onDrop();
      return;
    }
    z("setupClone", this), y.eventCanceled || (x = Yn(p), x.removeAttribute("id"), x.draggable = !1, x.style["will-change"] = "", this._hideClone(), W(x, this.options.chosenClass, !1), y.clone = x), r.cloneId = nt(function() {
      z("clone", r), !y.eventCanceled && (r.options.removeCloneOnHide || R.insertBefore(x, p), r._hideClone(), q({
        sortable: r,
        name: "clone"
      }));
    }), !n && W(p, i.dragClass, !0), n ? (at = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (T(document, "mouseup", r._onDrop), T(document, "touchend", r._onDrop), T(document, "touchcancel", r._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(r, o, p)), D(document, "drop", r), E(p, "transform", "translateZ(0)")), ve = !0, r._dragStartId = nt(r._dragStarted.bind(r, n, e)), D(document, "selectstart", r), Ne = !0, window.getSelection().removeAllRanges(), ke && E(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, r = e.target, o, i, s, a = this.options, u = a.group, l = y.active, f = We === u, d = a.sort, b = M || l, w, h = this, m = !1;
    if (Bt) return;
    function g(xe, rr) {
      z(xe, h, ne({
        evt: e,
        isOwner: f,
        axis: w ? "vertical" : "horizontal",
        revert: s,
        dragRect: o,
        targetRect: i,
        canSort: d,
        fromSortable: b,
        target: r,
        completed: _,
        onMove: function(Vt, or) {
          return Je(R, n, p, o, Vt, k(Vt), e, or);
        },
        changed: A
      }, rr));
    }
    function O() {
      g("dragOverAnimationCapture"), h.captureAnimationState(), h !== b && b.captureAnimationState();
    }
    function _(xe) {
      return g("dragOverCompleted", {
        insertion: xe
      }), xe && (f ? l._hideClone() : l._showClone(h), h !== b && (W(p, M ? M.options.ghostClass : l.options.ghostClass, !1), W(p, a.ghostClass, !0)), M !== h && h !== y.active ? M = h : h === y.active && M && (M = null), b === h && (h._ignoreWhileAnimating = r), h.animateAll(function() {
        g("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (r === p && !p.animated || r === n && !r.animated) && (Ee = null), !a.dragoverBubble && !e.rootEl && r !== document && (p.parentNode[X]._isOutsideThisEl(e.target), !xe && pe(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function A() {
      V = J(p), ue = J(p, a.draggable), q({
        sortable: h,
        name: "change",
        toEl: n,
        newIndex: V,
        newDraggableIndex: ue,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = K(r, a.draggable, n, !0), g("dragOver"), y.eventCanceled) return m;
    if (p.contains(e.target) || r.animated && r.animatingX && r.animatingY || h._ignoreWhileAnimating === r)
      return _(!1);
    if (at = !1, l && !a.disabled && (f ? d || (s = N !== R) : M === this || (this.lastPutMode = We.checkPull(this, l, p, e)) && u.checkPut(this, l, p, e))) {
      if (w = this._getDirection(e, r) === "vertical", o = k(p), g("dragOverValid"), y.eventCanceled) return m;
      if (s)
        return N = R, O(), this._hideClone(), g("revert"), y.eventCanceled || (me ? R.insertBefore(p, me) : R.appendChild(p)), _(!0);
      var C = Xt(n, a.draggable);
      if (!C || ni(e, w, this) && !C.animated) {
        if (C === p)
          return _(!1);
        if (C && n === e.target && (r = C), r && (i = k(r)), Je(R, n, p, o, r, i, e, !!r) !== !1)
          return O(), C && C.nextSibling ? n.insertBefore(p, C.nextSibling) : n.appendChild(p), N = n, A(), _(!0);
      } else if (C && ti(e, w, this)) {
        var P = _e(n, 0, a, !0);
        if (P === p)
          return _(!1);
        if (r = P, i = k(r), Je(R, n, p, o, r, i, e, !1) !== !1)
          return O(), n.insertBefore(p, P), N = n, A(), _(!0);
      } else if (r.parentNode === n) {
        i = k(r);
        var B = 0, H, Q = p.parentNode !== n, L = !Go(p.animated && p.toRect || o, r.animated && r.toRect || i, w), Ae = w ? "top" : "left", ae = dn(r, "top", "top") || dn(p, "top", "top"), Re = ae ? ae.scrollTop : void 0;
        Ee !== r && (H = i[Ae], Ue = !1, Ve = !L && a.invertSwap || Q), B = ri(e, r, i, w, L ? 1 : a.swapThreshold, a.invertedSwapThreshold == null ? a.swapThreshold : a.invertedSwapThreshold, Ve, Ee === r);
        var re;
        if (B !== 0) {
          var de = J(p);
          do
            de -= B, re = N.children[de];
          while (re && (E(re, "display") === "none" || re === v));
        }
        if (B === 0 || re === r)
          return _(!1);
        Ee = r, Le = B;
        var Ce = r.nextElementSibling, le = !1;
        le = B === 1;
        var $e = Je(R, n, p, o, r, i, e, le);
        if ($e !== !1)
          return ($e === 1 || $e === -1) && (le = $e === 1), Bt = !0, setTimeout(ei, 30), O(), le && !Ce ? n.appendChild(p) : r.parentNode.insertBefore(p, le ? Ce : r), ae && Vn(ae, 0, Re - ae.scrollTop), N = p.parentNode, H !== void 0 && !Ve && (tt = Math.abs(H - k(r)[Ae])), A(), _(!0);
      }
      if (n.contains(p))
        return _(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    T(document, "mousemove", this._onTouchMove), T(document, "touchmove", this._onTouchMove), T(document, "pointermove", this._onTouchMove), T(document, "dragover", pe), T(document, "mousemove", pe), T(document, "touchmove", pe);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    T(e, "mouseup", this._onDrop), T(e, "touchend", this._onDrop), T(e, "pointerup", this._onDrop), T(e, "pointercancel", this._onDrop), T(e, "touchcancel", this._onDrop), T(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (V = J(p), ue = J(p, r.draggable), z("drop", this, {
      evt: e
    }), N = p && p.parentNode, V = J(p), ue = J(p, r.draggable), y.eventCanceled) {
      this._nulling();
      return;
    }
    ve = !1, Ve = !1, Ue = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Mt(this.cloneId), Mt(this._dragStartId), this.nativeDraggable && (T(document, "drop", this), T(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ke && E(document.body, "user-select", ""), E(p, "transform", ""), e && (Ne && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), v && v.parentNode && v.parentNode.removeChild(v), (R === N || M && M.lastPutMode !== "clone") && x && x.parentNode && x.parentNode.removeChild(x), p && (this.nativeDraggable && T(p, "dragend", this), Ot(p), p.style["will-change"] = "", Ne && !ve && W(p, M ? M.options.ghostClass : this.options.ghostClass, !1), W(p, this.options.chosenClass, !1), q({
      sortable: this,
      name: "unchoose",
      toEl: N,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), R !== N ? (V >= 0 && (q({
      rootEl: N,
      name: "add",
      toEl: N,
      fromEl: R,
      originalEvent: e
    }), q({
      sortable: this,
      name: "remove",
      toEl: N,
      originalEvent: e
    }), q({
      rootEl: N,
      name: "sort",
      toEl: N,
      fromEl: R,
      originalEvent: e
    }), q({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), M && M.save()) : V !== Se && V >= 0 && (q({
      sortable: this,
      name: "update",
      toEl: N,
      originalEvent: e
    }), q({
      sortable: this,
      name: "sort",
      toEl: N,
      originalEvent: e
    })), y.active && ((V == null || V === -1) && (V = Se, ue = Me), q({
      sortable: this,
      name: "end",
      toEl: N,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    z("nulling", this), R = p = N = v = me = x = et = ce = he = G = Ne = V = ue = Se = Me = Ee = Le = M = We = y.dragged = y.ghost = y.clone = y.active = null, ut.forEach(function(e) {
      e.checked = !0;
    }), ut.length = Tt = _t = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        p && (this._onDragOver(e), Qo(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var e = [], n, r = this.el.children, o = 0, i = r.length, s = this.options; o < i; o++)
      n = r[o], K(n, s.draggable, this.el, !1) && e.push(n.getAttribute(s.dataIdAttr) || ii(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var r = {}, o = this.el;
    this.toArray().forEach(function(i, s) {
      var a = o.children[s];
      K(a, this.options.draggable, o, !1) && (r[i] = a);
    }, this), n && this.captureAnimationState(), e.forEach(function(i) {
      r[i] && (o.removeChild(r[i]), o.appendChild(r[i]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return K(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var o = Xe.modifyOption(this, e, n);
    typeof o < "u" ? r[e] = o : r[e] = n, e === "group" && Zn(r);
  },
  /**
   * Destroy
   */
  destroy: function() {
    z("destroy", this);
    var e = this.el;
    e[X] = null, T(e, "mousedown", this._onTapStart), T(e, "touchstart", this._onTapStart), T(e, "pointerdown", this._onTapStart), this.nativeDraggable && (T(e, "dragover", this), T(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), lt.splice(lt.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!ce) {
      if (z("hideClone", this), y.eventCanceled) return;
      E(x, "display", "none"), this.options.removeCloneOnHide && x.parentNode && x.parentNode.removeChild(x), ce = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ce) {
      if (z("showClone", this), y.eventCanceled) return;
      p.parentNode == R && !this.options.group.revertClone ? R.insertBefore(x, p) : me ? R.insertBefore(x, me) : R.appendChild(x), this.options.group.revertClone && this.animate(p, x), E(x, "display", ""), ce = !1;
    }
  }
};
function Qo(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Je(t, e, n, r, o, i, s, a) {
  var u, l = t[X], f = l.options.onMove, d;
  return window.CustomEvent && !se && !ze ? u = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (u = document.createEvent("Event"), u.initEvent("move", !0, !0)), u.to = e, u.from = t, u.dragged = n, u.draggedRect = r, u.related = o || e, u.relatedRect = i || k(e), u.willInsertAfter = a, u.originalEvent = s, t.dispatchEvent(u), f && (d = f.call(l, u, s)), d;
}
function Ot(t) {
  t.draggable = !1;
}
function ei() {
  Bt = !1;
}
function ti(t, e, n) {
  var r = k(_e(n.el, 0, n.options, !0)), o = Jn(n.el, n.options, v), i = 10;
  return e ? t.clientX < o.left - i || t.clientY < r.top && t.clientX < r.right : t.clientY < o.top - i || t.clientY < r.bottom && t.clientX < r.left;
}
function ni(t, e, n) {
  var r = k(Xt(n.el, n.options.draggable)), o = Jn(n.el, n.options, v), i = 10;
  return e ? t.clientX > o.right + i || t.clientY > r.bottom && t.clientX > r.left : t.clientY > o.bottom + i || t.clientX > r.right && t.clientY > r.top;
}
function ri(t, e, n, r, o, i, s, a) {
  var u = r ? t.clientY : t.clientX, l = r ? n.height : n.width, f = r ? n.top : n.left, d = r ? n.bottom : n.right, b = !1;
  if (!s) {
    if (a && tt < l * o) {
      if (!Ue && (Le === 1 ? u > f + l * i / 2 : u < d - l * i / 2) && (Ue = !0), Ue)
        b = !0;
      else if (Le === 1 ? u < f + tt : u > d - tt)
        return -Le;
    } else if (u > f + l * (1 - o) / 2 && u < d - l * (1 - o) / 2)
      return oi(e);
  }
  return b = b || s, b && (u < f + l * i / 2 || u > d - l * i / 2) ? u > f + l / 2 ? 1 : -1 : 0;
}
function oi(t) {
  return J(p) < J(t) ? 1 : -1;
}
function ii(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function si(t) {
  ut.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && ut.push(r);
  }
}
function nt(t) {
  return setTimeout(t, 0);
}
function Mt(t) {
  return clearTimeout(t);
}
bt && D(document, "touchmove", function(t) {
  (y.active || ve) && t.cancelable && t.preventDefault();
});
y.utils = {
  on: D,
  off: T,
  css: E,
  find: $n,
  is: function(e, n) {
    return !!K(e, n, e, !1);
  },
  extend: qo,
  throttle: Wn,
  closest: K,
  toggleClass: W,
  clone: Yn,
  index: J,
  nextTick: nt,
  cancelNextTick: Mt,
  detectDirection: Kn,
  getChild: _e,
  expando: X
};
y.get = function(t) {
  return t[X];
};
y.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (y.utils = ne(ne({}, y.utils), r.utils)), Xe.mount(r);
  });
};
y.create = function(t, e) {
  return new y(t, e);
};
y.version = jo;
var I = [], Fe, Lt, Ut = !1, At, Rt, ct, Ie;
function ai() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? D(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? D(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? D(document, "touchmove", this._handleFallbackAutoScroll) : D(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? T(document, "dragover", this._handleAutoScroll) : (T(document, "pointermove", this._handleFallbackAutoScroll), T(document, "touchmove", this._handleFallbackAutoScroll), T(document, "mousemove", this._handleFallbackAutoScroll)), bn(), rt(), zo();
    },
    nulling: function() {
      ct = Lt = Fe = Ut = Ie = At = Rt = null, I.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var o = this, i = (n.touches ? n.touches[0] : n).clientX, s = (n.touches ? n.touches[0] : n).clientY, a = document.elementFromPoint(i, s);
      if (ct = n, r || this.options.forceAutoScrollFallback || ze || se || ke) {
        Ct(n, this.options, a, r);
        var u = fe(a, !0);
        Ut && (!Ie || i !== At || s !== Rt) && (Ie && bn(), Ie = setInterval(function() {
          var l = fe(document.elementFromPoint(i, s), !0);
          l !== u && (u = l, rt()), Ct(n, o.options, l, r);
        }, 10), At = i, Rt = s);
      } else {
        if (!this.options.bubbleScroll || fe(a, !0) === te()) {
          rt();
          return;
        }
        Ct(n, this.options, fe(a, !1), !1);
      }
    }
  }, ie(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function rt() {
  I.forEach(function(t) {
    clearInterval(t.pid);
  }), I = [];
}
function bn() {
  clearInterval(Ie);
}
var Ct = Wn(function(t, e, n, r) {
  if (e.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, i = (t.touches ? t.touches[0] : t).clientY, s = e.scrollSensitivity, a = e.scrollSpeed, u = te(), l = !1, f;
    Lt !== n && (Lt = n, rt(), Fe = e.scroll, f = e.scrollFn, Fe === !0 && (Fe = fe(n, !0)));
    var d = 0, b = Fe;
    do {
      var w = b, h = k(w), m = h.top, g = h.bottom, O = h.left, _ = h.right, A = h.width, C = h.height, P = void 0, B = void 0, H = w.scrollWidth, Q = w.scrollHeight, L = E(w), Ae = w.scrollLeft, ae = w.scrollTop;
      w === u ? (P = A < H && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), B = C < Q && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (P = A < H && (L.overflowX === "auto" || L.overflowX === "scroll"), B = C < Q && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var Re = P && (Math.abs(_ - o) <= s && Ae + A < H) - (Math.abs(O - o) <= s && !!Ae), re = B && (Math.abs(g - i) <= s && ae + C < Q) - (Math.abs(m - i) <= s && !!ae);
      if (!I[d])
        for (var de = 0; de <= d; de++)
          I[de] || (I[de] = {});
      (I[d].vx != Re || I[d].vy != re || I[d].el !== w) && (I[d].el = w, I[d].vx = Re, I[d].vy = re, clearInterval(I[d].pid), (Re != 0 || re != 0) && (l = !0, I[d].pid = setInterval((function() {
        r && this.layer === 0 && y.active._onTouchMove(ct);
        var Ce = I[this.layer].vy ? I[this.layer].vy * a : 0, le = I[this.layer].vx ? I[this.layer].vx * a : 0;
        typeof f == "function" && f.call(y.dragged.parentNode[X], le, Ce, t, ct, I[this.layer].el) !== "continue" || Vn(I[this.layer].el, le, Ce);
      }).bind({
        layer: d
      }), 24))), d++;
    } while (e.bubbleScroll && b !== u && (b = fe(b, !1)));
    Ut = l;
  }
}, 30), tr = function(e) {
  var n = e.originalEvent, r = e.putSortable, o = e.dragEl, i = e.activeSortable, s = e.dispatchSortableEvent, a = e.hideGhostForTarget, u = e.unhideGhostForTarget;
  if (n) {
    var l = r || i;
    a();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, d = document.elementFromPoint(f.clientX, f.clientY);
    u(), l && !l.el.contains(d) && (s("spill"), this.onSpill({
      dragEl: o,
      putSortable: r
    }));
  }
};
function $t() {
}
$t.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var o = _e(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: tr
};
ie($t, {
  pluginName: "revertOnSpill"
});
function Wt() {
}
Wt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, o = r || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: tr
};
ie(Wt, {
  pluginName: "removeOnSpill"
});
y.mount(new ai());
y.mount(Wt, $t);
class nr extends window.Controller {
  connect() {
    console.log("Инициализация Sortable"), this.element.querySelectorAll(this.taskSelectorValue).forEach((e) => {
      new y(e, {
        group: "shared",
        animation: 150,
        onEnd: (n) => this.reorderTasks(n)
      });
    }), this.columns = new y(this.element, {
      animation: 150,
      onEnd: (e) => this.reorderColumns(e)
    });
  }
  reorderTasks(e) {
    console.log(e);
    let n = Array.from(e.to.children).map((s) => s.dataset.id), r = e.item.dataset.id, o = e.to.dataset.statusId, i = {
      task_id: r,
      column_id: o,
      order: n
    };
    axios.post(this.taskActionValue, i).then(() => this.toast(this.successMessageValue)).catch((s) => {
      console.error(s), this.toast(this.failureMessageValue, "danger");
    });
  }
  reorderColumns(e) {
    let r = {
      order: Array.from(e.to.children).map((o) => o.dataset.id)
    };
    axios.post(this.columnActionValue, r).then(() => this.toast(this.successMessageValue)).catch((o) => {
      console.error(o), this.toast(this.failureMessageValue, "danger");
    });
  }
  /**
   * Reorder the elements based on the new order
   */
  reorderElements() {
    const e = {
      model: this.modelValue,
      items: []
    };
    this.element.querySelectorAll(this.selectorValue).forEach((r, o) => {
      e.items.push({
        id: r.getAttribute("data-model-id"),
        sortOrder: o
      });
    }), axios.post(this.actionValue, e).then(() => this.toast(this.successMessageValue)).catch((r) => {
      console.error(r), this.toast(this.failureMessageValue, "danger");
    });
  }
}
Yt(nr, "values", {
  taskAction: String,
  columnAction: String,
  taskSelector: {
    type: String,
    default: ".task-list"
  },
  successMessage: {
    type: String,
    default: "Sorting saved successfully."
  },
  failureMessage: {
    type: String,
    default: "Failed to save sorting."
  }
});
window.axios = F;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
application.register("board", nr);
