(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-4fe9d5dd"],
  {
    "9f3e": function (a, t, e) {
      "use strict";
      var s = { name: "base-frame" },
        n = e("2877"),
        l = Object(n.a)(
          s,
          function (a, t) {
            var e = t._c;
            return e(
              "div",
              {
                ref: "tawk-main-panel",
                staticClass: "tawk-main-panel tawk-custom-flex-1",
                class: [t.data.class, t.data.staticClass],
              },
              [
                e(
                  "div",
                  t._g(
                    {
                      directives: [
                        { name: "tawk-scroll", rawName: "v-tawk-scroll" },
                      ],
                      ref: "tawk-chat-panel",
                      staticClass:
                        "tawk-chat-panel tawk-custom-flex-1 ps--active-y",
                    },
                    t.listeners
                  ),
                  [
                    e(
                      "div",
                      {
                        ref: "tawk-inner-panel",
                        staticClass:
                          "tawk-chat-panel-inner tawk-flex tawk-flex-column",
                      },
                      [t._t("default")],
                      2
                    ),
                  ]
                ),
                t._t("unseen-message-count"),
              ],
              2
            );
          },
          [],
          !0,
          null,
          null,
          null
        );
      t.a = l.exports;
    },
    dbd1: function (a, t, e) {
      "use strict";
      var s = { name: "base-body" },
        n = e("2877"),
        l = Object(n.a)(
          s,
          function () {
            var a = this,
              t = a.$createElement;
            return (a._self._c || t)(
              "div",
              { staticClass: "tawk-body", attrs: { id: "tawk-body" } },
              [a._t("default")],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = l.exports;
    },
  },
]);
