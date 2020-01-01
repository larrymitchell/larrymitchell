(this.webpackJsonplarrymitchell = this.webpackJsonplarrymitchell || []).push([
  [0],
  {
    10: function(e, t, n) {
      e.exports = {
        container: "style_container__3hSNO",
        nav: "style_nav__ev2zY",
        linkList: "style_linkList__1Dl3g",
        name: "style_name__KQHZO",
        link: "style_link__aWnfh"
      };
    },
    27: function(e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADJ0lEQVR42t1az2sTQRTeChY85BBtr9YIsQcPEQ85lFZwT94LBq+Fgl5S6KWQS65KS/o3CBvQf6OHaFpyMqc2PeWaYurFQNrVN/K2rF9mNrvJZGeSBx+EzezM+/b9mDc/HCdaHhJ2CW3Cb4KfIm4IfcIJYYd1SSxZQoXQ5U7/GIbPugidHsUl8YLQINxaQEBG6Dvh5TgSLqEn6WBIaBE8wlFK8HjMoUSfK9ZVKgUJiV+EY8Jjx5yIsWuEa9Ctx94zEhMNMOGprKFBEbo0IWYbrPudVCAmBIknjn2yxroFet6y7ncptgvuVDCo7D3Cew7qC8IXwnMIgbCbdYPUvAvmOjb81T9KMuZPIFODMNh2eLILZyeTgf1MkTUFvkICCGczkeH+zdjBg5Zha7yJmIAvoG0r9N+5Ay96holswocNowltP4Mn/UfkSIMyS4QMT1hlQpVR5mcZbiOTB5IUG2SnD9D2ENpoI3Kf8JpQ52JPVWb0uY0gtSzpZ53JBEWqmMU/cTabOZEcKzdIUDcN+J2cwjKbHDPrijG1E9kidKYoBDvcR1LRSmRL4kY+p3QRE0UuIVb59z7/50vc7ZUpIjmJJS4JJYk/48xdkrzbUbjZTIkss3+HOzoj5BMokud3wn3UFQlgZkRcCOxLnpWTSh4sM4haZ+gmsgTW8NlVJpUS6FCPmGe0EslAgLfHxEScarcNgZ9Jg4gLHZQ1VANl6NNNgwgOWtRApDjBx5maSBU6yGogkoU+qyaIrGogsmKCyMK4Fgb7/rwG+8Kk34WZEGUlSidhnWVFiaKzaDw1XTROW8a/U7z71OaF1QqjyM9+KBZWGyZXiLqWuhsTjDsXmw/GiAQJwNWwHWSciGyDbi+0QbcXY4NuKiI3Fm2ZJhEPt0z7Fm1iJ5GRTewTx55jhbgiPVbYgTipzQERPOh5Kx7i0Zs41ipYTEJ59CakAlYRNdCahSSETk2wRgXXzLYfTxec0bOTb7I9A3Et4gpy8zX749xcGAivM8Zd4ThMCVFXOHpx1i22X6ppJHF54XcHjn3XnA4m3UcTaW2bzXyuMPOsMOQxPdYh8uLZX6kUbKpaA+crAAAAAElFTkSuQmCC";
    },
    28: function(e, t, n) {
      e.exports = { icon: "style_icon__3qv_b" };
    },
    31: function(e, t, n) {
      e.exports = n(46);
    },
    40: function(e, t, n) {
      var a = { "./first-thing.jpg": 41, "./house.jpg": 42, "./woman.jpg": 43 };
      function r(e) {
        var t = c(e);
        return n(t);
      }
      function c(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (r.keys = function() {
        return Object.keys(a);
      }),
        (r.resolve = c),
        (e.exports = r),
        (r.id = 40);
    },
    41: function(e, t, n) {
      e.exports = n.p + "static/media/first-thing.bab62db4.jpg";
    },
    42: function(e, t, n) {
      e.exports = n.p + "static/media/house.44b5280f.jpg";
    },
    43: function(e, t, n) {
      e.exports = n.p + "static/media/woman.ca16f936.jpg";
    },
    45: function(e, t, n) {},
    46: function(e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        i = n(14),
        o = n.n(i),
        l = n(30),
        u = n(13),
        s = n(16),
        m = n(17),
        b = (a = n(40)).keys().reduce(function(e, t) {
          return Object(m.a)({}, e, Object(s.a)({}, t.replace("./", ""), a(t)));
        }, {}),
        f = function() {
          return b;
        },
        p = function() {
          var e = f(),
            t = Object(u.c)(function(e) {
              return e.illustration.currentImageKey;
            }),
            n = Object(u.b)(),
            a = Object(r.useCallback)(
              function(e) {
                return n({ type: "UPDATE_IMAGE_KEY", data: e });
              },
              [n]
            ),
            c = Object(r.useMemo)(
              function() {
                return t;
              },
              [t]
            ),
            i = Object(r.useMemo)(
              function() {
                return e[t] || "";
              },
              [e, t]
            ),
            o = Object(r.useMemo)(
              function() {
                return Object.keys(e);
              },
              [e]
            );
          Object(r.useEffect)(
            function() {
              a(o[0]);
            },
            [o, a]
          );
          var l = Object(r.useMemo)(
              function() {
                return o.findIndex(function(e) {
                  return e === t;
                });
              },
              [t, o]
            ),
            s = Object(r.useMemo)(
              function() {
                return o[l === o.length - 1 ? 0 : l + 1];
              },
              [l, o]
            ),
            m = Object(r.useMemo)(
              function() {
                return o[0 === l ? o.length - 1 : l - 1];
              },
              [l, o]
            );
          return [
            c,
            i,
            Object(r.useCallback)(
              function() {
                return a(s);
              },
              [s, a]
            ),
            Object(r.useCallback)(
              function() {
                return a(m);
              },
              [m, a]
            )
          ];
        },
        E = n(9),
        g = n.n(E),
        h = n(20),
        v = n.n(h),
        y = function() {
          var e = p(),
            t = Object(l.a)(e, 4),
            n = t[0],
            a = t[1],
            r = t[2],
            i = t[3];
          return c.a.createElement(
            "div",
            { className: g.a.container },
            c.a.createElement(
              "button",
              { className: v()(g.a.button, g.a.previous), onClick: i },
              "previous"
            ),
            c.a.createElement("img", {
              className: g.a.image,
              src: a,
              alt: n,
              style: { maxWidth: "100vw" }
            }),
            c.a.createElement(
              "button",
              { className: v()(g.a.button, g.a.next), onClick: r },
              "next"
            )
          );
        },
        d = function() {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("h2", null, "Hi, I'm Lawrence Mitchell!"),
            c.a.createElement("p", null, "Designer and Creative")
          );
        },
        O = n(27),
        A = n.n(O),
        j = n(28),
        _ = n.n(j),
        k = function() {
          return Object(r.useMemo)(function() {
            return [
              { name: "Illustrations", path: "/", component: y },
              { name: "About", path: "/about", component: d },
              {
                name: c.a.createElement("img", {
                  className: _.a.icon,
                  src: A.a,
                  alt: "Instagram"
                }),
                path: "https://www.instagram.com/larry.mitchell/",
                inNavBar: !0,
                isExternal: !0
              }
            ];
          }, []);
        },
        I = n(21),
        N = n(8),
        x = n(10),
        w = n.n(x),
        M = function() {
          var e = k();
          return c.a.createElement(
            I.a,
            null,
            c.a.createElement(
              "div",
              { className: w.a.container },
              c.a.createElement(
                "nav",
                { className: w.a.nav },
                c.a.createElement(
                  "h1",
                  { className: w.a.name },
                  "LAWRENCE MITCHELL"
                ),
                c.a.createElement(
                  "ul",
                  { className: w.a.linkList },
                  e
                    .filter(function(e) {
                      var t = e.isNavBar;
                      return void 0 === t || t;
                    })
                    .map(function(e) {
                      var t = e.name,
                        n = e.path,
                        a = e.isExternal;
                      return c.a.createElement(
                        "li",
                        { className: w.a.link, key: n },
                        a
                          ? c.a.createElement("a", { href: n }, t)
                          : c.a.createElement(I.b, { to: n }, t)
                      );
                    })
                )
              ),
              c.a.createElement(
                "main",
                null,
                c.a.createElement(
                  N.c,
                  null,
                  e
                    .filter(function(e) {
                      var t = e.isExternal;
                      return !(void 0 !== t && t);
                    })
                    .map(function(e) {
                      var t = e.component,
                        n = e.path;
                      return c.a.createElement(
                        N.a,
                        { exact: !0, path: n, key: n },
                        c.a.createElement(t, null)
                      );
                    })
                )
              )
            )
          );
        };
      n(45),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var C = n(12),
        T = { currentImageKey: "" },
        K = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : T,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "UPDATE_IMAGE_KEY":
              return Object(m.a)({}, e, { currentImageKey: t.data });
            default:
              return e;
          }
        },
        U = Object(C.b)({ illustration: K }),
        S = Object(C.c)(U);
      o.a.render(
        c.a.createElement(u.a, { store: S }, c.a.createElement(M, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    9: function(e, t, n) {
      e.exports = {
        container: "style_container__1LtLV",
        image: "style_image__3NCmM",
        button: "style_button__19oFV",
        previous: "style_previous__2aO0X",
        next: "style_next__1Si6W"
      };
    }
  },
  [[31, 1, 2]]
]);
//# sourceMappingURL=main.4cb848f3.chunk.js.map
