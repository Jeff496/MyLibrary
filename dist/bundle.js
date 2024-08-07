(() => {
  "use strict";
  var e = {
      365: (e, t, n) => {
        n.d(t, { A: () => d });
        var o = n(601),
          r = n.n(o),
          a = n(314),
          i = n.n(a)()(r());
        i.push([
          e.id,
          "* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n/* header styling */\n\nnav ul {\n    display: flex;\n    height: 10vh;\n    list-style: none;\n    border-bottom: rgba(0, 0, 0, 0.2) solid 2px;\n}\n\nnav ul li {\n    flex-grow: 1;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav ul li:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul li:nth-child(2) {\n    border-left: rgba(0, 0, 0, 0.2) solid 2px;\n    border-right: rgba(0, 0, 0, 0.2) solid 2px;\n}\n\n/* headline styling */\n\n.headline {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 20px;\n}\n\n/* booklist tab styling */\n\n.bookCard {\n    margin: 5%;\n    padding: 10px;\n    border: rgba(0, 0, 0, 1) solid 2px;\n    display: flex;\n    flex-direction: column;\n}\n\n.bookCard > * {\n    margin: 5px 0;\n}\n\n.bookCard select,\n.bookCard button {\n    width: fit-content;\n    padding: 5px;\n}\n\n.bookCard h2 {\n    border-bottom: rgba(0, 0, 0, 1) solid 2px;\n}\n\n.container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.bookCard img {\n    filter: grayscale(100%) sepia(100%) hue-rotate(180deg) brightness(80%) contrast(90%);\n    height: 36px;\n    width: 36px;\n    transform: rotate(90deg);\n}\n\n.bookCard img:hover {\n    filter: grayscale(0%) sepia(0%) hue-rotate(0deg) brightness(60%) contrast(100%);\n}\n\n.bookCard p,\n.endContainer img {\n    display: none;\n}\n\n.bookCard .endContainer {\n    display: flex;\n    justify-content: flex-end;\n}\n\n/* catalog tab styling */\n\n.addBookForm {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 50%;\n    margin-left: 40px;\n    padding: 10px;\n    border:rgba(0, 0, 0, 1) solid 3px;\n}\n\n.addBookForm > lable {\n    margin-top: 10px;\n}\n\n.addBookForm > input {\n    width: 100%;\n}\n\n.addBookForm > select {\n    margin: 10px 0;\n}",
          "",
        ]);
        const d = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var d = 0; d < this.length; d++) {
                  var c = this[d][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (o && i[s[0]]) ||
                  (void 0 !== a &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = a)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  r &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = r))
                      : (s[4] = "".concat(r))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var a = {}, i = [], d = 0; d < e.length; d++) {
            var c = e[d],
              l = o.base ? c[0] + o.base : c[0],
              s = a[l] || 0,
              p = "".concat(l, " ").concat(s);
            a[l] = s + 1;
            var u = n(p),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) t[u].references++, t[u].updater(m);
            else {
              var h = r(m, o);
              (o.byIndex = d),
                t.splice(d, 0, { identifier: p, updater: h, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var d = n(a[i]);
              t[d].references--;
            }
            for (var c = o(e, r), l = 0; l < a.length; l++) {
              var s = n(a[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            a = c;
          };
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(n);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { id: o, exports: {} });
    return e[o](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName("script");
        if (o.length)
          for (var r = o.length - 1; r > -1 && (!e || !/^http(s?):/.test(e)); )
            e = o[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.nc = void 0),
    n.d({}, { R: () => S });
  var o = n(72),
    r = n.n(o),
    a = n(825),
    i = n.n(a),
    d = n(659),
    c = n.n(d),
    l = n(56),
    s = n.n(l),
    p = n(540),
    u = n.n(p),
    m = n(113),
    h = n.n(m),
    f = n(365),
    g = {};
  (g.styleTagTransform = h()),
    (g.setAttributes = s()),
    (g.insert = c().bind(null, "head")),
    (g.domAPI = i()),
    (g.insertStyleElement = u()),
    r()(f.A, g),
    f.A && f.A.locals && f.A.locals;
  const v = {
    READ: "read",
    READING: "reading",
    WANT_TO_READ: "want-to-read",
    UNREAD: "unread",
  };
  class y {
    constructor(e, t, n, o, r) {
      (this.title = e),
        (this.author = t),
        (this.pages = n),
        (this.read = o),
        (this.description = r);
    }
  }
  function b() {
    const e = document.createElement("div"),
      t = document.createElement("h1");
    return (
      (t.textContent = "Welcome to the Library"),
      t.classList.add("headline"),
      e.appendChild(t),
      e
    );
  }
  const C = n.p + "3eaac46dd386ec518163.png",
    x = n.p + "9768773d0f3dbfe8999e.png";
  function E() {
    sessionStorage.setItem("userSessionStore", JSON.stringify(S)),
      localStorage.setItem("userLocalStore", JSON.stringify(S));
  }
  function k() {
    !(function () {
      const e = sessionStorage.getItem("userSessionStore"),
        t = localStorage.getItem("userLocalStore");
      if (((S.length = 0), e)) {
        const t = JSON.parse(e);
        S.push(...t);
      } else if (t) {
        const e = JSON.parse(t);
        S.push(...e);
      }
    })();
    const e = document.createElement("div"),
      t = document.createElement("h1");
    return (
      (t.textContent = "The BookList"),
      t.classList.add("headline"),
      e.appendChild(t),
      S.forEach((t, n) => {
        const o = document.createElement("div");
        o.classList.add("bookCard");
        const r = document.createElement("h2");
        (r.textContent = t.title), o.appendChild(r);
        const a = document.createElement("h3");
        (a.textContent = `Author: ${t.author}`), o.appendChild(a);
        const i = document.createElement("h3");
        (i.textContent = `Pages: ${t.pages}`), o.appendChild(i);
        const d = document.createElement("select");
        Object.values(v).forEach((e) => {
          const t = document.createElement("option");
          (t.value = e),
            (t.textContent =
              e.charAt(0).toUpperCase() + e.slice(1).replaceAll("-", " ")),
            d.appendChild(t);
        }),
          (d.value = t.read),
          o.appendChild(d),
          d.addEventListener("change", () => {
            (t.read = d.value), E();
          });
        const c = document.createElement("div");
        c.classList.add("container");
        const l = document.createElement("button");
        (l.textContent = "Remove Book"),
          l.addEventListener("click", () => {
            S.splice(n, 1), e.removeChild(o), E();
          }),
          c.appendChild(l);
        const s = document.createElement("img");
        (s.src = C),
          (s.alt = "expand button"),
          s.addEventListener("click", () => {
            (m.style.display = "block"),
              (u.style.display = "block"),
              (s.style.display = "none");
          }),
          c.appendChild(s),
          o.appendChild(c);
        const p = document.createElement("div");
        p.classList.add("endContainer");
        const u = document.createElement("img");
        (u.src = x),
          (u.alt = "collapse button"),
          u.addEventListener("click", () => {
            (m.style.display = "none"),
              (u.style.display = "none"),
              (s.style.display = "block");
          }),
          p.appendChild(u);
        const m = document.createElement("p");
        (m.textContent = t.description),
          o.appendChild(m),
          o.appendChild(p),
          e.appendChild(o);
      }),
      e
    );
  }
  function A() {
    const e = document.createElement("div"),
      t = document.createElement("h1");
    return (
      (t.textContent = "The Catalog"),
      t.classList.add("headline"),
      e.appendChild(t),
      e.appendChild(
        (function () {
          const e = document.createElement("form");
          e.classList.add("addBookForm");
          const t = document.createElement("label");
          (t.textContent = "Book Title: "), (t.htmlFor = "titlefield");
          const n = document.createElement("input");
          (n.type = "text"),
            (n.placeholder = "Title"),
            (n.name = "title"),
            (n.required = !0),
            (n.id = "titlefield"),
            e.appendChild(t),
            e.appendChild(n);
          const o = document.createElement("label");
          (o.textContent = "Author name: "), (o.htmlFor = "authorfield");
          const r = document.createElement("input");
          (r.type = "text"),
            (r.placeholder = "Author"),
            (r.name = "author"),
            (r.required = !0),
            (r.id = "authorfield"),
            e.appendChild(o),
            e.appendChild(r);
          const a = document.createElement("label");
          (a.textContent = "Number of Pages: "), (a.htmlFor = "pagesfield");
          const i = document.createElement("input");
          (i.type = "number"),
            (i.placeholder = "Pages"),
            (i.name = "pages"),
            (i.required = !0),
            (i.id = "pagesfield"),
            e.appendChild(a),
            e.appendChild(i);
          const d = document.createElement("label");
          (d.textContent = "Book Description: "),
            (d.htmlFor = "descriptionfield");
          const c = document.createElement("textarea");
          (c.placeholder = "Description"),
            (c.name = "description"),
            (c.id = "descriptionfield"),
            e.appendChild(d),
            e.appendChild(c);
          const l = document.createElement("select");
          (l.name = "read"), (l.required = !0);
          const s = document.createElement("option");
          (s.value = v.READ), (s.textContent = "Read"), l.appendChild(s);
          const p = document.createElement("option");
          (p.value = v.READING), (p.textContent = "Reading"), l.appendChild(p);
          const u = document.createElement("option");
          (u.value = v.WANT_TO_READ),
            (u.textContent = "Want to Read"),
            l.appendChild(u);
          const m = document.createElement("option");
          (m.value = v.UNREAD),
            (m.textContent = "Unread"),
            l.appendChild(m),
            e.appendChild(l);
          const h = document.createElement("button");
          return (
            (h.type = "submit"),
            (h.textContent = "Add Book"),
            e.appendChild(h),
            e.addEventListener("submit", (t) => {
              t.preventDefault();
              const n = t.target.title.value,
                o = t.target.author.value,
                r = t.target.pages.value,
                a = t.target.read.value,
                i = t.target.description.value,
                d = new y(n, o, r, a, i);
              S.push(d), E(), e.reset();
            }),
            e
          );
        })(),
      ),
      e
    );
  }
  const S = [];
  function w(e, t, n, o, r) {
    const a = new y(e, t, n, o, r);
    S.push(a);
  }
  function L(e) {
    !(function () {
      const e = document.getElementById("content");
      for (; e.firstChild; ) e.removeChild(e.firstChild);
    })(),
      document.getElementById("content").appendChild(e());
  }
  w(
    "1984",
    "George Orwell",
    324,
    v.READ,
    "It tells the story of Winston Smith, a citizen of the miserable society of Oceania, who is trying to rebel against the Party and its omnipresent symbol, Big Brother.",
  ),
    w("fakeBook", "fake Author", 234, v.READING, "hello"),
    w("fakeBook2", "fake Author", 548, v.WANT_TO_READ, "helllooooooo?"),
    document.addEventListener("DOMContentLoaded", () => {
      const e = document.querySelector("li:nth-of-type(1)"),
        t = document.querySelector("li:nth-of-type(2)"),
        n = document.querySelector("li:nth-of-type(3)");
      e.addEventListener("click", () => L(b)),
        t.addEventListener("click", () => L(k)),
        n.addEventListener("click", () => L(A)),
        L(k);
    });
})();
