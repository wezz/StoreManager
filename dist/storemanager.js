var u = Object.defineProperty;
var S = (o, e, t) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var f = (o, e, t) => (S(o, typeof e != "symbol" ? e + "" : e, t), t);
class g {
  constructor(e = "cache") {
    f(this, "prefix");
    this.prefix = e;
  }
  getStorageMedium(e = !0) {
    return e && typeof (window == null ? void 0 : window.localStorage) < "u" ? window.localStorage : typeof (window == null ? void 0 : window.sessionStorage) < "u" ? window.sessionStorage : null;
  }
  Has(e) {
    return typeof this.Get(`${this.prefix}-${e}`) < "u";
  }
  Get(e) {
    const t = this.getStorageMedium(!1), i = this.getStorageMedium(!0);
    let s = !1, r = null;
    if (t && i) {
      try {
        r = t.getItem(`${this.prefix}-${e}`), r = this.toJSONIfJSON(r), s = r !== null;
      } catch {
      }
      if (!s)
        try {
          r = i.getItem(`${this.prefix}-${e}`), r = this.toJSONIfJSON(r), s = r !== null;
        } catch {
        }
    }
    return r;
  }
  toJSONIfJSON(e) {
    return typeof e == "string" && (e.indexOf("{") === 0 || e.indexOf("[") === 0) && (e = JSON.parse(e)), e;
  }
  Save(e, t, i = !0) {
    console.warn("StoreManager.Save is deprecated"), this.Set(e, t, i);
  }
  Set(e, t, i = !0) {
    const s = this.getStorageMedium(i);
    let r = !1;
    if (s) {
      typeof t == "object" && (t = JSON.stringify(t));
      try {
        s.setItem(`${this.prefix}-${e}`, t), r = !0;
      } catch (n) {
        console.error("Unable to save object", n);
      }
    }
    return r;
  }
  Remove(e) {
    const t = this.getStorageMedium(!0), i = this.getStorageMedium(!1);
    t && t.removeItem(`${this.prefix}-${e}`), i && i.removeItem(`${this.prefix}-${e}`);
  }
}
export {
  g as StoreManager
};
