(function (e) {
  function n(n) {
    for (var t, o, l = n[0], r = n[1], a = 0, d = []; a < l.length; a++)
      (o = l[a]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && d.push(i[o][0]),
        (i[o] = 0);
    for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    s && s(n);
    while (d.length) d.shift()();
  }
  var t = {},
    i = { 35: 0 };
  function o(e) {
    return l.p + "brandhub." + ({}[e] || e) + ".min.js";
  }
  function l(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
  }
  (l.e = function (e) {
    var n = [],
      t = i[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function (n, o) {
          t = i[e] = [n, o];
        });
        n.push((t[2] = r));
        var a,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          (d.src = o(e));
        var s = new Error();
        a = function (n) {
          (d.onerror = d.onload = null), clearTimeout(u);
          var t = i[e];
          if (0 !== t) {
            if (t) {
              var o = n && ("load" === n.type ? "missing" : n.type),
                l = n && n.target && n.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + l + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = o),
                (s.request = l),
                t[1](s);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          a({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = a), document.head.appendChild(d);
      }
    return Promise.all(n);
  }),
    (l.m = e),
    (l.c = t),
    (l.d = function (e, n, t) {
      l.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (l.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, n) {
      if ((1 & n && (e = l(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (l.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          l.d(
            t,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return t;
    }),
    (l.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return l.d(n, "a", n), n;
    }),
    (l.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (l.p = ""),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var r = (window["brandhub_jsonp"] = window["brandhub_jsonp"] || []),
    a = r.push.bind(r);
  (r.push = n), (r = r.slice());
  for (var d = 0; d < r.length; d++) n(r[d]);
  var s = a;
  l((l.s = "5a74"));
})({
  "24fb": function (e, n, t) {
    "use strict";
    function i(e, n) {
      var t = e[1] || "",
        i = e[3];
      if (!i) return t;
      if (n && "function" === typeof btoa) {
        var l = o(i),
          r = i.sources.map(function (e) {
            return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */");
          });
        return [t].concat(r).concat([l]).join("\n");
      }
      return [t].join("\n");
    }
    function o(e) {
      var n = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
        t =
          "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
            n
          );
      return "/*# ".concat(t, " */");
    }
    e.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var t = i(n, e);
            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (n.i = function (e, t, i) {
          "string" === typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (i)
            for (var l = 0; l < this.length; l++) {
              var r = this[l][0];
              null != r && (o[r] = !0);
            }
          for (var a = 0; a < e.length; a++) {
            var d = [].concat(e[a]);
            (i && o[d[0]]) ||
              (t &&
                (d[2]
                  ? (d[2] = "".concat(t, " and ").concat(d[2]))
                  : (d[2] = t)),
              n.push(d));
          }
        }),
        n
      );
    };
  },
  2877: function (e, n, t) {
    "use strict";
    function i(e, n, t, i, o, l, r, a) {
      var d,
        s = "function" === typeof e ? e.options : e;
      if (
        (n && ((s.render = n), (s.staticRenderFns = t), (s._compiled = !0)),
        i && (s.functional = !0),
        l && (s._scopeId = "data-v-" + l),
        r
          ? ((d = function (e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)),
                e ||
                  "undefined" === typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                o && o.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(r);
            }),
            (s._ssrRegister = d))
          : o &&
            (d = a
              ? function () {
                  o.call(
                    this,
                    (s.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : o),
        d)
      )
        if (s.functional) {
          s._injectStyles = d;
          var u = s.render;
          s.render = function (e, n) {
            return d.call(n), u(e, n);
          };
        } else {
          var c = s.beforeCreate;
          s.beforeCreate = c ? [].concat(c, d) : [d];
        }
      return { exports: e, options: s };
    }
    t.d(n, "a", function () {
      return i;
    });
  },
  "35d6": function (e, n, t) {
    "use strict";
    function i(e, n) {
      for (var t = [], i = {}, o = 0; o < n.length; o++) {
        var l = n[o],
          r = l[0],
          a = l[1],
          d = l[2],
          s = l[3],
          u = { id: e + ":" + o, css: a, media: d, sourceMap: s };
        i[r] ? i[r].parts.push(u) : t.push((i[r] = { id: r, parts: [u] }));
      }
      return t;
    }
    function o(e, n, t) {
      var o = i(e, n);
      l(o, t);
    }
    function l(e, n) {
      const t = n._injectedStyles || (n._injectedStyles = {});
      for (var i = 0; i < e.length; i++) {
        var o = e[i],
          l = t[o.id];
        if (!l) {
          for (var r = 0; r < o.parts.length; r++) a(o.parts[r], n);
          t[o.id] = !0;
        }
      }
    }
    function r(e) {
      var n = document.createElement("style");
      return (n.type = "text/css"), e.appendChild(n), n;
    }
    function a(e, n) {
      var t = r(n),
        i = e.css,
        o = e.media,
        l = e.sourceMap;
      if (
        (o && t.setAttribute("media", o),
        l &&
          ((i += "\n/*# sourceURL=" + l.sources[0] + " */"),
          (i +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(l)))) +
            " */")),
        t.styleSheet)
      )
        t.styleSheet.cssText = i;
      else {
        while (t.firstChild) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    t.r(n),
      t.d(n, "default", function () {
        return o;
      });
  },
  "5a74": function (e, n, t) {
    "use strict";
    if ((t.r(n), "undefined" !== typeof window)) {
      var i = window.document.currentScript;
      if (
        Object({
          NODE_ENV: "production",
          BASE_URL: "/plugin/brandhub/brandhub-frontend/1.56.0/",
        }).NEED_CURRENTSCRIPT_POLYFILL
      ) {
        var o = t("8875");
        (i = o()),
          "currentScript" in document ||
            Object.defineProperty(document, "currentScript", { get: o });
      }
      var l = i && i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
      l && (t.p = l[1]);
    }
    var r = t("8bbf"),
      a = t.n(r);
    const d = /-(\w)/g,
      s = (e) => e.replace(d, (e, n) => (n ? n.toUpperCase() : "")),
      u = /\B([A-Z])/g,
      c = (e) => e.replace(u, "-$1").toLowerCase();
    function m(e) {
      const n = {};
      return (
        e.forEach((e) => {
          n[e] = void 0;
        }),
        n
      );
    }
    function b(e, n, t) {
      (e[n] = [].concat(e[n] || [])), e[n].unshift(t);
    }
    function h(e, n) {
      if (e) {
        const t = e.$options[n] || [];
        t.forEach((n) => {
          n.call(e);
        });
      }
    }
    function f(e, n) {
      return new CustomEvent(e, { bubbles: !1, cancelable: !1, detail: n });
    }
    const w = (e) => /function Boolean/.test(String(e)),
      p = (e) => /function Number/.test(String(e));
    function E(e, n, { type: t } = {}) {
      if (w(t))
        return "true" === e || "false" === e
          ? "true" === e
          : "" === e || e === n || null != e || e;
      if (p(t)) {
        const n = parseFloat(e, 10);
        return isNaN(n) ? e : n;
      }
      return e;
    }
    function P(e, n) {
      const t = [];
      for (let i = 0, o = n.length; i < o; i++) t.push(g(e, n[i]));
      return t;
    }
    function g(e, n) {
      if (3 === n.nodeType) return n.data.trim() ? n.data : null;
      if (1 === n.nodeType) {
        const t = { attrs: v(n), domProps: { innerHTML: n.innerHTML } };
        return (
          t.attrs.slot && ((t.slot = t.attrs.slot), delete t.attrs.slot),
          e(n.tagName, t)
        );
      }
      return null;
    }
    function v(e) {
      const n = {};
      for (let t = 0, i = e.attributes.length; t < i; t++) {
        const i = e.attributes[t];
        n[i.nodeName] = i.nodeValue;
      }
      return n;
    }
    function y(e, n) {
      const t = "function" === typeof n && !n.cid;
      let i,
        o,
        l,
        r = !1;
      function a(e) {
        if (r) return;
        const n = "function" === typeof e ? e.options : e,
          t = Array.isArray(n.props) ? n.props : Object.keys(n.props || {});
        (i = t.map(c)), (o = t.map(s));
        const a = Array.isArray(n.props) ? {} : n.props || {};
        (l = o.reduce((e, n, i) => ((e[n] = a[t[i]]), e), {})),
          b(n, "beforeCreate", function () {
            const e = this.$emit;
            this.$emit = (n, ...t) => (
              this.$root.$options.customElement.dispatchEvent(f(n, t)),
              e.call(this, n, ...t)
            );
          }),
          b(n, "created", function () {
            o.forEach((e) => {
              this.$root.props[e] = this[e];
            });
          }),
          o.forEach((e) => {
            Object.defineProperty(u.prototype, e, {
              get() {
                return this._wrapper.props[e];
              },
              set(n) {
                this._wrapper.props[e] = n;
              },
              enumerable: !1,
              configurable: !0,
            });
          }),
          (r = !0);
      }
      function d(e, n) {
        const t = s(n),
          i = e.hasAttribute(n) ? e.getAttribute(n) : void 0;
        e._wrapper.props[t] = E(i, n, l[t]);
      }
      class u extends HTMLElement {
        constructor() {
          const t = super();
          t.attachShadow({ mode: "open" });
          const i = (t._wrapper = new e({
              name: "shadow-root",
              customElement: t,
              shadowRoot: t.shadowRoot,
              data() {
                return { props: {}, slotChildren: [] };
              },
              render(e) {
                return e(
                  n,
                  { ref: "inner", props: this.props },
                  this.slotChildren
                );
              },
            })),
            o = new MutationObserver((e) => {
              let n = !1;
              for (let i = 0; i < e.length; i++) {
                const o = e[i];
                r && "attributes" === o.type && o.target === t
                  ? d(t, o.attributeName)
                  : (n = !0);
              }
              n &&
                (i.slotChildren = Object.freeze(
                  P(i.$createElement, t.childNodes)
                ));
            });
          o.observe(t, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0,
          });
        }
        get vueComponent() {
          return this._wrapper.$refs.inner;
        }
        connectedCallback() {
          const e = this._wrapper;
          if (e._isMounted) h(this.vueComponent, "activated");
          else {
            const t = () => {
              (e.props = m(o)),
                i.forEach((e) => {
                  d(this, e);
                });
            };
            r
              ? t()
              : n().then((e) => {
                  (e.__esModule || "Module" === e[Symbol.toStringTag]) &&
                    (e = e.default),
                    a(e),
                    t();
                }),
              (e.slotChildren = Object.freeze(
                P(e.$createElement, this.childNodes)
              )),
              e.$mount(),
              this.shadowRoot.appendChild(e.$el);
          }
        }
        disconnectedCallback() {
          h(this.vueComponent, "deactivated");
        }
      }
      return t || a(n), u;
    }
    var _ = y;
    t("24fb"), t("35d6"), t("2877");
    window.customElements.define(
      "brandhub-accordion",
      _(a.a, () =>
        Promise.all([t.e(0), t.e(3), t.e(125), t.e(186)]).then(
          t.bind(null, "d315")
        )
      )
    ),
      window.customElements.define(
        "brandhub-accordion-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(3), t.e(117), t.e(152)]).then(
            t.bind(null, "4718")
          )
        )
      ),
      window.customElements.define(
        "brandhub-article-stage",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(50)]).then(
            t.bind(null, "99f1")
          )
        )
      ),
      window.customElements.define(
        "brandhub-back-top-button",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(212)]).then(t.bind(null, "bd82"))
        )
      ),
      window.customElements.define(
        "brandhub-background-animation",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(47)]).then(
            t.bind(null, "0d35")
          )
        )
      ),
      window.customElements.define(
        "brandhub-folding-gradient-background",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(3), t.e(17), t.e(187)]).then(
            t.bind(null, "179d")
          )
        )
      ),
      window.customElements.define(
        "brandhub-fullscreen-stage",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(67)]).then(
            t.bind(null, "388f")
          )
        )
      ),
      window.customElements.define(
        "brandhub-bold-text",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(222)]).then(t.bind(null, "0380"))
        )
      ),
      window.customElements.define(
        "brandhub-icon",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(3), t.e(118), t.e(213)]).then(
            t.bind(null, "3384")
          )
        )
      ),
      window.customElements.define(
        "brandhub-breadcrumb",
        _(a.a, () => Promise.all([t.e(0), t.e(201)]).then(t.bind(null, "723b")))
      ),
      window.customElements.define(
        "brandhub-brush-stage",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(51)]).then(
            t.bind(null, "eecc")
          )
        )
      ),
      window.customElements.define(
        "brandhub-brush-stage-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(214)]).then(t.bind(null, "12e1"))
        )
      ),
      window.customElements.define(
        "brandhub-button",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(172)]).then(t.bind(null, "5afb"))
        )
      ),
      window.customElements.define(
        "brandhub-co2-labeling",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(4), t.e(91)]).then(
            t.bind(null, "aeac")
          )
        )
      ),
      window.customElements.define(
        "brandhub-cross-fade",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(74)]).then(
            t.bind(null, "f681")
          )
        )
      ),
      window.customElements.define(
        "brandhub-cross-fade-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(103), t.e(157)]).then(
            t.bind(null, "f535")
          )
        )
      ),
      window.customElements.define(
        "brandhub-cross-fade-slider",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(54)]).then(
            t.bind(null, "086a")
          )
        )
      ),
      window.customElements.define(
        "brandhub-cross-fade-slider-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(104), t.e(156)]).then(
            t.bind(null, "3237")
          )
        )
      ),
      window.customElements.define(
        "brandhub-disclaimer",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(4), t.e(130), t.e(202)]).then(
            t.bind(null, "2f55")
          )
        )
      ),
      window.customElements.define(
        "brandhub-editorial-highlight",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(62)]).then(
            t.bind(null, "1e8a")
          )
        )
      ),
      window.customElements.define(
        "brandhub-expand-media",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(113)]).then(t.bind(null, "ba62"))
        )
      ),
      window.customElements.define(
        "brandhub-expanded-media",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(3), t.e(85)]).then(
            t.bind(null, "8f81")
          )
        )
      ),
      window.customElements.define(
        "brandhub-footer-logo",
        _(a.a, () => Promise.all([t.e(0), t.e(188)]).then(t.bind(null, "0f0d")))
      ),
      window.customElements.define(
        "brandhub-footer-navigation",
        _(a.a, () => Promise.all([t.e(0), t.e(189)]).then(t.bind(null, "5ee0")))
      ),
      window.customElements.define(
        "brandhub-footer-navigation-item",
        _(a.a, () => Promise.all([t.e(0), t.e(190)]).then(t.bind(null, "d56d")))
      ),
      window.customElements.define(
        "brandhub-footer-sections",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(3), t.e(79), t.e(174)]).then(
            t.bind(null, "6008")
          )
        )
      ),
      window.customElements.define(
        "brandhub-footer-sections-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(64), t.e(132)]).then(
            t.bind(null, "ad6c")
          )
        )
      ),
      window.customElements.define(
        "brandhub-sub-footer-sections-item",
        _(a.a, () => Promise.all([t.e(0), t.e(175)]).then(t.bind(null, "c39f")))
      ),
      window.customElements.define(
        "brandhub-footer-sitemap",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(92), t.e(176)]).then(
            t.bind(null, "4c62")
          )
        )
      ),
      window.customElements.define(
        "brandhub-footer-sitemap-item",
        _(a.a, () => Promise.all([t.e(0), t.e(177)]).then(t.bind(null, "27d4")))
      ),
      window.customElements.define(
        "brandhub-footnotes",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(4), t.e(97)]).then(
            t.bind(null, "7caa")
          )
        )
      ),
      window.customElements.define(
        "brandhub-form",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(203)]).then(t.bind(null, "e2c09"))
        )
      ),
      window.customElements.define(
        "brandhub-fullscreen-video",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(58)]).then(
            t.bind(null, "82e5")
          )
        )
      ),
      window.customElements.define(
        "brandhub-fullwidth-media",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(37)]).then(
            t.bind(null, "4cdb")
          )
        )
      ),
      window.customElements.define(
        "brandhub-google-model-viewer",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(165), t.e(231)]).then(t.bind(null, "c997"))
        )
      ),
      window.customElements.define(
        "brandhub-grid",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(68)]).then(
            t.bind(null, "8611")
          )
        )
      ),
      window.customElements.define(
        "brandhub-grid-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(49)]).then(
            t.bind(null, "e582")
          )
        )
      ),
      window.customElements.define(
        "brandhub-flyout-button",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(94)]).then(t.bind(null, "033c"))
        )
      ),
      window.customElements.define(
        "brandhub-header",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(40)]).then(
            t.bind(null, "572c")
          )
        )
      ),
      window.customElements.define(
        "brandhub-header-flyout-editor",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(227), t.e(178)]).then(t.bind(null, "4bfa"))
        )
      ),
      window.customElements.define(
        "brandhub-header-flyout-image-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(70), t.e(131)]).then(
            t.bind(null, "7e99")
          )
        )
      ),
      window.customElements.define(
        "brandhub-header-flyout-list-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(56)]).then(
            t.bind(null, "a4b6")
          )
        )
      ),
      window.customElements.define(
        "brandhub-header-flyout-list-item-link",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(81)]).then(t.bind(null, "dee3"))
        )
      ),
      window.customElements.define(
        "brandhub-language-switcher",
        _(a.a, () => Promise.all([t.e(0), t.e(114)]).then(t.bind(null, "0cd8")))
      ),
      window.customElements.define(
        "brandhub-language-switcher-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(4), t.e(138), t.e(179)]).then(
            t.bind(null, "1a58")
          )
        )
      ),
      window.customElements.define(
        "brandhub-main-navigation",
        _(a.a, () => Promise.all([t.e(0), t.e(204)]).then(t.bind(null, "6eb7")))
      ),
      window.customElements.define(
        "brandhub-main-navigation-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(126), t.e(180)]).then(t.bind(null, "3a3b"))
        )
      ),
      window.customElements.define(
        "brandhub-meta-navigation-flyout-link",
        _(a.a, () => Promise.all([t.e(0), t.e(181)]).then(t.bind(null, "aa2b")))
      ),
      window.customElements.define(
        "brandhub-search-link-list",
        _(a.a, () => Promise.all([t.e(0), t.e(205)]).then(t.bind(null, "7248")))
      ),
      window.customElements.define(
        "brandhub-search-link-list-item",
        _(a.a, () => Promise.all([t.e(0), t.e(191)]).then(t.bind(null, "736b")))
      ),
      window.customElements.define(
        "brandhub-sub-navigation-item",
        _(a.a, () => Promise.all([t.e(0), t.e(192)]).then(t.bind(null, "20c3")))
      ),
      window.customElements.define(
        "brandhub-header-announcement-content",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(4), t.e(44)]).then(
            t.bind(null, "596d")
          )
        )
      ),
      window.customElements.define(
        "brandhub-headline",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(154)]).then(t.bind(null, "3e14"))
        )
      ),
      window.customElements.define(
        "brandhub-headline-and-copy",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(83)]).then(
            t.bind(null, "76c5")
          )
        )
      ),
      window.customElements.define(
        "brandhub-highlight-text",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(65)]).then(
            t.bind(null, "0813")
          )
        )
      ),
      window.customElements.define(
        "brandhub-hyperscreen",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(39)]).then(
            t.bind(null, "296b")
          )
        )
      ),
      window.customElements.define(
        "brandhub-iframe",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(72), t.e(170)]).then(
            t.bind(null, "c348")
          )
        )
      ),
      window.customElements.define(
        "brandhub-image-fullscreen",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(105), t.e(158)]).then(
            t.bind(null, "1db0")
          )
        )
      ),
      window.customElements.define(
        "brandhub-image-jumper",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(45)]).then(
            t.bind(null, "4e46")
          )
        )
      ),
      window.customElements.define(
        "brandhub-image-jumper-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(76)]).then(
            t.bind(null, "7dee")
          )
        )
      ),
      window.customElements.define(
        "brandhub-layered-gallery",
        _(a.a, () => Promise.all([t.e(0), t.e(163)]).then(t.bind(null, "20fb")))
      ),
      window.customElements.define(
        "brandhub-layered-gallery-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(98)]).then(t.bind(null, "064f"))
        )
      ),
      window.customElements.define(
        "brandhub-legal-layer",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(46)]).then(
            t.bind(null, "faa2")
          )
        )
      ),
      window.customElements.define(
        "brandhub-media-gallery",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(4), t.e(88), t.e(99)]).then(
            t.bind(null, "c972")
          )
        )
      ),
      window.customElements.define(
        "brandhub-media-gallery-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(52)]).then(
            t.bind(null, "d8ae")
          )
        )
      ),
      window.customElements.define(
        "brandhub-media-single",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(53)]).then(
            t.bind(null, "3420")
          )
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-disclaimer",
        _(a.a, () => Promise.all([t.e(0), t.e(206)]).then(t.bind(null, "a55f")))
      ),
      window.customElements.define(
        "brandhub-paragraph-headline",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(77), t.e(216)]).then(
            t.bind(null, "b783")
          )
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-image",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(87), t.e(171)]).then(
            t.bind(null, "0dbe")
          )
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-labeling",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(232)]).then(t.bind(null, "6bc9"))
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-linkout",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(75)]).then(
            t.bind(null, "79a8")
          )
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-quote",
        _(a.a, () => Promise.all([t.e(0), t.e(207)]).then(t.bind(null, "6532")))
      ),
      window.customElements.define(
        "brandhub-paragraph-table",
        _(a.a, () => Promise.all([t.e(0), t.e(193)]).then(t.bind(null, "7c99")))
      ),
      window.customElements.define(
        "brandhub-paragraph-text",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(84)]).then(
            t.bind(null, "d115")
          )
        )
      ),
      window.customElements.define(
        "brandhub-paragraph-wrapper",
        _(a.a, () => Promise.all([t.e(0), t.e(164)]).then(t.bind(null, "c1b0")))
      ),
      window.customElements.define(
        "brandhub-responsive-image",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(106), t.e(211)]).then(
            t.bind(null, "0eed")
          )
        )
      ),
      window.customElements.define(
        "brandhub-scroll-cross-fade",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(60)]).then(
            t.bind(null, "e391")
          )
        )
      ),
      window.customElements.define(
        "brandhub-scroll-text-fill",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(66)]).then(
            t.bind(null, "bd62")
          )
        )
      ),
      window.customElements.define(
        "brandhub-scroll-word-fill",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(78), t.e(225)]).then(
            t.bind(null, "3444")
          )
        )
      ),
      window.customElements.define(
        "brandhub-social-media-box",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(82)]).then(
            t.bind(null, "b39b")
          )
        )
      ),
      window.customElements.define(
        "brandhub-social-media-box-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(137)]).then(t.bind(null, "a17e"))
        )
      ),
      window.customElements.define(
        "brandhub-soft-configurator",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(36)]).then(
            t.bind(null, "6d74")
          )
        )
      ),
      window.customElements.define(
        "brandhub-soft-configurator-exterior-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(107), t.e(159)]).then(
            t.bind(null, "dc78")
          )
        )
      ),
      window.customElements.define(
        "brandhub-soft-configurator-interior-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(108), t.e(160)]).then(
            t.bind(null, "6dc0")
          )
        )
      ),
      window.customElements.define(
        "brandhub-spacer",
        _(a.a, () => Promise.all([t.e(0), t.e(194)]).then(t.bind(null, "4d7c")))
      ),
      window.customElements.define(
        "brandhub-stage",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(42)]).then(
            t.bind(null, "3c7d")
          )
        )
      ),
      window.customElements.define(
        "brandhub-stage-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(63)]).then(
            t.bind(null, "38fe")
          )
        )
      ),
      window.customElements.define(
        "brandhub-star-field-background",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(73)]).then(
            t.bind(null, "2b85")
          )
        )
      ),
      window.customElements.define(
        "brandhub-star-pattern",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(69)]).then(
            t.bind(null, "8e8f")
          )
        )
      ),
      window.customElements.define(
        "brandhub-table",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(3), t.e(4), t.e(100)]).then(
            t.bind(null, "2f50")
          )
        )
      ),
      window.customElements.define(
        "brandhub-teaser",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(61)]).then(
            t.bind(null, "5bad")
          )
        )
      ),
      window.customElements.define(
        "brandhub-teaser-tiles",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(57)]).then(
            t.bind(null, "9993")
          )
        )
      ),
      window.customElements.define(
        "brandhub-teaser-tiles-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(4), t.e(48)]).then(
            t.bind(null, "74ed")
          )
        )
      ),
      window.customElements.define(
        "brandhub-text-mask",
        _(a.a, () => Promise.all([t.e(0), t.e(155)]).then(t.bind(null, "cd26")))
      ),
      window.customElements.define(
        "brandhub-text-simple",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(218)]).then(t.bind(null, "1496"))
        )
      ),
      window.customElements.define(
        "brandhub-vertical-gallery",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(55)]).then(
            t.bind(null, "47d6")
          )
        )
      ),
      window.customElements.define(
        "brandhub-vertical-gallery-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(59)]).then(
            t.bind(null, "698a")
          )
        )
      ),
      window.customElements.define(
        "brandhub-video",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(43)]).then(
            t.bind(null, "278c")
          )
        )
      ),
      window.customElements.define(
        "brandhub-video-trailer",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(38)]).then(
            t.bind(null, "a73e")
          )
        )
      ),
      window.customElements.define(
        "brandhub-video-trailer-item",
        _(a.a, () =>
          Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(41)]).then(
            t.bind(null, "6b2b")
          )
        )
      ),
      window.customElements.define(
        "brandhub-video-trailer-pager",
        _(a.a, () => Promise.all([t.e(0), t.e(129)]).then(t.bind(null, "0d95")))
      ),
      window.customElements.define(
        "brandhub-video-trailer-pager-bar",
        _(a.a, () => Promise.all([t.e(0), t.e(145)]).then(t.bind(null, "74dc")))
      );
  },
  8875: function (e, n, t) {
    var i, o, l;
    (function (t, r) {
      (o = []),
        (i = r),
        (l = "function" === typeof i ? i.apply(n, o) : i),
        void 0 === l || (e.exports = l);
    })("undefined" !== typeof self && self, function () {
      function e() {
        var n = Object.getOwnPropertyDescriptor(document, "currentScript");
        if (!n && "currentScript" in document && document.currentScript)
          return document.currentScript;
        if (n && n.get !== e && document.currentScript)
          return document.currentScript;
        try {
          throw new Error();
        } catch (b) {
          var t,
            i,
            o,
            l = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
            r = /@([^@]*):(\d+):(\d+)\s*$/gi,
            a = l.exec(b.stack) || r.exec(b.stack),
            d = (a && a[1]) || !1,
            s = (a && a[2]) || !1,
            u = document.location.href.replace(document.location.hash, ""),
            c = document.getElementsByTagName("script");
          d === u &&
            ((t = document.documentElement.outerHTML),
            (i = new RegExp(
              "(?:[^\\n]+?\\n){0," +
                (s - 2) +
                "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
              "i"
            )),
            (o = t.replace(i, "$1").trim()));
          for (var m = 0; m < c.length; m++) {
            if ("interactive" === c[m].readyState) return c[m];
            if (c[m].src === d) return c[m];
            if (d === u && c[m].innerHTML && c[m].innerHTML.trim() === o)
              return c[m];
          }
          return null;
        }
      }
      return e;
    });
  },
  "8bbf": function (e, n) {
    e.exports = Vue;
  },
});
//# sourceMappingURL=brandhub.min.js.map
