(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-f163fcd0"],
  {
    3519: function (e, t, a) {
      "use strict";
      var s = a("f25b").a,
        i = a("2877"),
        n = Object(i.a)(
          s,
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !e.isLoading,
                    expression: "!isLoading",
                  },
                ],
                ref: "tawk-chat-message-container",
                staticClass:
                  "tawk-chat-message-container tawk-margin-small-top",
              },
              [
                a(
                  "transition-group",
                  { attrs: { name: "list" } },
                  e._l(e.messageBlocks, function (t) {
                    return a(
                      "div",
                      {
                        key: t.blockId,
                        ref: t.blockId,
                        refInFor: !0,
                        staticClass:
                          "tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block",
                        attrs: { id: "blockId-" + t.blockId },
                      },
                      [
                        "call" === t.messageType
                          ? [
                              t.callData && !t.callData.hasError
                                ? a("tawk-alert", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      status: e.callStatus(t.callData),
                                      title: e.callTitle(t.callData),
                                      description: e.callDescription(
                                        t.callData
                                      ),
                                      icon: e.callIcon(t.callData),
                                    },
                                  })
                                : a("tawk-alert", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      status: "danger",
                                      title: e.$i18n("chat", "error_title"),
                                      description: e.$i18n(
                                        "chat",
                                        "call_error_load"
                                      ),
                                      icon: "call",
                                    },
                                  }),
                            ]
                          : [
                              "c" === t.messageType && "v" !== t.senderType
                                ? a("tawk-avatar", {
                                    staticClass:
                                      "tawk-message-profile tawk-flex-none",
                                    class:
                                      Object.keys(e.agents).length > 1
                                        ? "tawk-margin-bottom"
                                        : "",
                                    attrs: {
                                      size: "small",
                                      src: t.profileImage,
                                      alt:
                                        "" +
                                        e.$i18n("chat", "agent_profile_image"),
                                    },
                                  })
                                : e._e(),
                              a(
                                "div",
                                {
                                  staticClass: "tawk-message-group tawk-flex-1",
                                  class: [
                                    "v" == t.senderType
                                      ? "tawk-margin-auto-left"
                                      : "",
                                  ],
                                },
                                [
                                  e._l(t.messages, function (t) {
                                    return a(
                                      "div",
                                      {
                                        key: t.messageId,
                                        ref: t.messageId,
                                        refInFor: !0,
                                        staticClass: "tawk-message-bubble",
                                        attrs: {
                                          id: "messageId-" + t.messageId,
                                        },
                                      },
                                      [
                                        t.showBar && e.barMessageRerence
                                          ? a(
                                              "div",
                                              {
                                                staticStyle: {
                                                  position: "relative",
                                                },
                                              },
                                              [
                                                a("div", [
                                                  a(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        position: "absolute",
                                                        right: "0",
                                                        background: "#fff",
                                                        transform:
                                                          "translate(0, -50%)",
                                                        padding: "0 10px",
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        e._s(
                                                          e.$i18n(
                                                            "chat",
                                                            "newMessages"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  a("hr"),
                                                ]),
                                              ]
                                            )
                                          : e._e(),
                                        "c" === t.type
                                          ? [
                                              a(
                                                "div",
                                                {
                                                  staticClass:
                                                    "tawk-flex tawk-flex-bottom",
                                                  class: [
                                                    "v" == t.senderType
                                                      ? "tawk-visitor-chat"
                                                      : "tawk-agent-chat",
                                                  ],
                                                  on: {
                                                    mouseenter: e.onMouseEnter,
                                                  },
                                                },
                                                [
                                                  "v" === t.senderType
                                                    ? a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tawk-flex-none",
                                                          staticStyle: {
                                                            "min-width": "40px",
                                                          },
                                                        },
                                                        [
                                                          t.time
                                                            ? a(
                                                                "tawk-timeago",
                                                                {
                                                                  staticClass:
                                                                    "tawk-time-display",
                                                                  attrs: {
                                                                    datetime:
                                                                      t.time,
                                                                    isLive: !1,
                                                                    timeOnly:
                                                                      !0,
                                                                  },
                                                                }
                                                              )
                                                            : e._e(),
                                                        ],
                                                        1
                                                      )
                                                    : e._e(),
                                                  a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tawk-message-body tawk-margin-xsmall-left ",
                                                      class: [
                                                        "v" !== t.senderType
                                                          ? "tawk-margin-xsmall-right"
                                                          : "",
                                                      ],
                                                    },
                                                    [
                                                      t.isUpload
                                                        ? a(
                                                            "tawk-card",
                                                            {
                                                              class: [
                                                                "v" ==
                                                                t.senderType
                                                                  ? "tawk-visitor-chat-bubble"
                                                                  : "tawk-agent-chat-bubble",
                                                              ],
                                                              attrs: {
                                                                color:
                                                                  "inverse",
                                                                size: "small",
                                                              },
                                                            },
                                                            [
                                                              t.fileType
                                                                ? [
                                                                    "image" ===
                                                                    t.fileType
                                                                      ? a(
                                                                          "tawk-image",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: t.fileLink,
                                                                                name: t.fileName,
                                                                                position:
                                                                                  "center",
                                                                              },
                                                                            on: {
                                                                              imageLoaded:
                                                                                e.imageLoaded,
                                                                            },
                                                                          }
                                                                        )
                                                                      : e._e(),
                                                                    "video" ===
                                                                    t.fileType
                                                                      ? a(
                                                                          "tawk-video",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                content:
                                                                                  {
                                                                                    source:
                                                                                      "selfhosted",
                                                                                    url: t.fileLink,
                                                                                    options:
                                                                                      {
                                                                                        controls:
                                                                                          "",
                                                                                        mute: !0,
                                                                                        loop: !1,
                                                                                        startTime:
                                                                                          "0",
                                                                                      },
                                                                                  },
                                                                              },
                                                                          }
                                                                        )
                                                                      : e._e(),
                                                                    "audio" ===
                                                                    t.fileType
                                                                      ? a(
                                                                          "audio",
                                                                          {
                                                                            staticStyle:
                                                                              {
                                                                                width:
                                                                                  "100%",
                                                                                height:
                                                                                  "30px",
                                                                              },
                                                                            attrs:
                                                                              {
                                                                                controls:
                                                                                  "",
                                                                              },
                                                                          },
                                                                          [
                                                                            a(
                                                                              "source",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: t.fileLink,
                                                                                    type: t
                                                                                      .data
                                                                                      .file
                                                                                      .mimetype,
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : e._e(),
                                                                    a(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tawk-flex",
                                                                        staticStyle:
                                                                          {
                                                                            "margin-top":
                                                                              "10px",
                                                                          },
                                                                      },
                                                                      [
                                                                        a(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "tawk-flex-1",
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              " " +
                                                                                e._s(
                                                                                  t.fileName
                                                                                ) +
                                                                                " "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                        a(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "tawk-flex-none",
                                                                            staticStyle:
                                                                              {
                                                                                padding:
                                                                                  "0 5px",
                                                                              },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              " " +
                                                                                e._s(
                                                                                  t.humanizeFileSize
                                                                                ) +
                                                                                " "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    a(
                                                                      "a",
                                                                      {
                                                                        staticStyle:
                                                                          {
                                                                            color:
                                                                              "inherit",
                                                                            "text-decoration":
                                                                              "underline",
                                                                            "text-align":
                                                                              "right",
                                                                            display:
                                                                              "block",
                                                                          },
                                                                        attrs: {
                                                                          href: t.fileLink,
                                                                          target:
                                                                            "_blank",
                                                                        },
                                                                      },
                                                                      [
                                                                        e._v(
                                                                          " " +
                                                                            e._s(
                                                                              e.$i18n(
                                                                                "chat",
                                                                                "download"
                                                                              )
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                        a(
                                                                          "tawk-icon",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                type: "download",
                                                                                size: "small",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ],
                                                                      1
                                                                    ),
                                                                  ]
                                                                : e._e(),
                                                            ],
                                                            2
                                                          )
                                                        : a(
                                                            "div",
                                                            [
                                                              t.isPending
                                                                ? a(
                                                                    "tawk-spinner",
                                                                    {
                                                                      class: [
                                                                        "v" !==
                                                                        t.senderType
                                                                          ? "lds-spinner-left"
                                                                          : "",
                                                                      ],
                                                                    }
                                                                  )
                                                                : e._e(),
                                                              [
                                                                t.rawMessage
                                                                  .md &&
                                                                t.rawMessage.md
                                                                  .rt
                                                                  ? a(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "tawk-chat-rating",
                                                                      },
                                                                      [
                                                                        a(
                                                                          "tawk-icon",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                type: t.message,
                                                                                size: "xxlarge",
                                                                              },
                                                                          }
                                                                        ),
                                                                      ],
                                                                      1
                                                                    )
                                                                  : a(
                                                                      "tawk-card",
                                                                      {
                                                                        class: [
                                                                          "v" ==
                                                                          t.senderType
                                                                            ? "tawk-visitor-chat-bubble"
                                                                            : "tawk-agent-chat-bubble",
                                                                          "tawk-text-regular-3",
                                                                        ],
                                                                        attrs: {
                                                                          color:
                                                                            "primary",
                                                                          size: "small",
                                                                        },
                                                                      },
                                                                      [
                                                                        t.surveyObj
                                                                          ? a(
                                                                              "div",
                                                                              [
                                                                                a(
                                                                                  "p",
                                                                                  {
                                                                                    domProps:
                                                                                      {
                                                                                        innerHTML:
                                                                                          e._s(
                                                                                            t
                                                                                              .surveyObj
                                                                                              .question
                                                                                          ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                e._l(
                                                                                  t
                                                                                    .surveyObj
                                                                                    .options,
                                                                                  function (
                                                                                    s,
                                                                                    i
                                                                                  ) {
                                                                                    return a(
                                                                                      "label",
                                                                                      {
                                                                                        key: i,
                                                                                        staticClass:
                                                                                          "tawk-flex tawk-flex-middle tawk-margin-xsmall",
                                                                                      },
                                                                                      [
                                                                                        a(
                                                                                          "input",
                                                                                          {
                                                                                            staticStyle:
                                                                                              {
                                                                                                margin:
                                                                                                  "0px",
                                                                                              },
                                                                                            attrs:
                                                                                              {
                                                                                                type: "radio",
                                                                                                name: t.messageId,
                                                                                                disabled:
                                                                                                  e.isHistory,
                                                                                              },
                                                                                            domProps:
                                                                                              {
                                                                                                value:
                                                                                                  s,
                                                                                              },
                                                                                            on: {
                                                                                              input:
                                                                                                function (
                                                                                                  t
                                                                                                ) {
                                                                                                  return e.submitSurvey(
                                                                                                    s
                                                                                                  );
                                                                                                },
                                                                                            },
                                                                                          }
                                                                                        ),
                                                                                        a(
                                                                                          "span",
                                                                                          {
                                                                                            staticClass:
                                                                                              "tawk-margin-xsmall-left",
                                                                                            domProps:
                                                                                              {
                                                                                                innerHTML:
                                                                                                  e._s(
                                                                                                    s
                                                                                                  ),
                                                                                              },
                                                                                          }
                                                                                        ),
                                                                                      ]
                                                                                    );
                                                                                  }
                                                                                ),
                                                                              ],
                                                                              2
                                                                            )
                                                                          : a(
                                                                              "tawk-emoji",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    emoji:
                                                                                      t.message,
                                                                                    enabled:
                                                                                      e.emojiEnabled,
                                                                                  },
                                                                              }
                                                                            ),
                                                                      ],
                                                                      1
                                                                    ),
                                                              ],
                                                            ],
                                                            2
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                  "v" !== t.senderType
                                                    ? a(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tawk-flex-none",
                                                          staticStyle: {
                                                            "min-width": "40px",
                                                          },
                                                        },
                                                        [
                                                          t.time
                                                            ? a(
                                                                "tawk-timeago",
                                                                {
                                                                  staticClass:
                                                                    "tawk-time-display",
                                                                  attrs: {
                                                                    datetime:
                                                                      t.time,
                                                                    isLive: !1,
                                                                    timeOnly:
                                                                      !0,
                                                                  },
                                                                }
                                                              )
                                                            : e._e(),
                                                        ],
                                                        1
                                                      )
                                                    : e._e(),
                                                ]
                                              ),
                                              t.sendFailed
                                                ? a(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "tawk-chat-resend",
                                                    },
                                                    [
                                                      a(
                                                        "p",
                                                        [
                                                          a("tawk-icon", {
                                                            attrs: {
                                                              type: "error",
                                                              size: "small",
                                                            },
                                                          }),
                                                          a("span", [
                                                            e._v("Failed"),
                                                          ]),
                                                        ],
                                                        1
                                                      ),
                                                      a(
                                                        "tawk-button",
                                                        {
                                                          attrs: { isText: !0 },
                                                          on: {
                                                            click: function (
                                                              a
                                                            ) {
                                                              return e.resendMessage(
                                                                t
                                                              );
                                                            },
                                                          },
                                                        },
                                                        [e._v(" Resend ")]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : e._e(),
                                            ]
                                          : e._e(),
                                        "v" === t.senderType && "n" === t.type
                                          ? a(
                                              "div",
                                              [
                                                a(
                                                  "tawk-card",
                                                  {
                                                    attrs: {
                                                      color: "inverse",
                                                      size: "xsmall",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "tawk-alert",
                                                      {
                                                        attrs: {
                                                          title: t.message,
                                                          description: "",
                                                          icon: "alert",
                                                        },
                                                      },
                                                      [
                                                        a("tawk-timeago", {
                                                          staticClass:
                                                            "tawk-time-display",
                                                          attrs: {
                                                            slot: "alert-description",
                                                            datetime: t.time,
                                                            isLive: !1,
                                                            timeOnly: !0,
                                                          },
                                                          slot: "alert-description",
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            )
                                          : e._e(),
                                        a("div", { staticClass: "clearfix" }),
                                      ],
                                      2
                                    );
                                  }),
                                  "v" != t.senderType
                                    ? a(
                                        "p",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                Object.keys(e.agents).length >
                                                1,
                                              expression:
                                                "Object.keys(agents).length > 1",
                                            },
                                          ],
                                          staticClass:
                                            "tawk-margin-xsmall-left\n\t\t\t\t\t\t\ttawk-text-regular-2\n\t\t\t\t\t\t\ttawk-text-truncate",
                                        },
                                        [
                                          e._v(
                                            " " + e._s(t.messages[0].name) + " "
                                          ),
                                        ]
                                      )
                                    : e._e(),
                                ],
                                2
                              ),
                            ],
                      ],
                      2
                    );
                  }),
                  0
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = n.exports;
    },
    "3f09": function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return i;
        });
        var s = a("f0b0"),
          i = {
            data: function () {
              return { headerClass: "" };
            },
            methods: {
              displayMessages: function (t) {
                var a,
                  i = t.message,
                  n = void 0 === i ? {} : i,
                  r = t.isIncoming,
                  l = void 0 !== r && r,
                  o = t.isLive,
                  c = void 0 === o || o,
                  d = this.isScrollBarBottom(),
                  p = c
                    ? this.$store.getters["chat/messageBlocks"]
                    : this.$store.getters["history/messageBlocks"];
                if (!n.profileImage && n.data && n.data.rsc) {
                  var m = this.agentProfile(n.data.rsc);
                  if (!m) return;
                  n.profileImage = m.profileImage;
                }
                if (
                  (p.length > 0 &&
                    "c" === n.type &&
                    ((a = p[p.length - 1]).ownerId === n.ownerId
                      ? ((n.blockId = a.blockId), a.messages.push(n))
                      : (a = null)),
                  n.timeStamp > this.lastMessageTimestamp &&
                    ("v" === n.senderType
                      ? this.$store.dispatch(
                          "session/updateVisitorChatSeen",
                          n.timeStamp
                        )
                      : (this.unseenMessages.push(n),
                        ("chat" === this.currentRoute &&
                          d &&
                          !this.isLoading) ||
                          this.barMessageId ||
                          ((n.showBar = !0),
                          (this.barMessageId = n.messageId),
                          (this.barMessageRerence = n)))),
                  l &&
                    "a" === n.senderType &&
                    n.data &&
                    n.data.rsc &&
                    this.removeAgentIsTyping(n.data.rsc),
                  n.isCallView)
                ) {
                  e.Tawk_Window.chatManager.callStatusUpdate({
                    clid: n.callId,
                    f: {},
                  });
                  var g = {
                    ownerId: n.callId,
                    callData: n.callData,
                    messageType: "call",
                    blockId: s.Helper.generateUUID(),
                    callId: n.callId,
                  };
                  c
                    ? this.$store.dispatch("chat/addMessageBlock", g)
                    : this.$store.dispatch("history/addMessageBlock", g);
                } else if (!a) {
                  if (void 0 === n.ownerId && "n" === n.type) return;
                  var u = {
                    ownerId: n.ownerId,
                    messages: [n],
                    senderType: n.senderType,
                    messageType: n.type,
                    blockId: s.Helper.generateUUID(),
                    profileImage: n.profileImage,
                  };
                  (n.blockId = u.blockId),
                    c
                      ? this.$store.dispatch("chat/addMessageBlock", u)
                      : this.$store.dispatch("history/addMessageBlock", u);
                }
                l &&
                  ("v" === n.senderType || d
                    ? this.scrollToBottom()
                    : this.checkBarPosition());
              },
              isScrollBarBottom: function () {
                var e = this.$refs["tawk-chat-panel"];
                if (e) {
                  var t = e.offsetHeight + 10;
                  return e.scrollHeight - (e.scrollTop + t) < 30;
                }
              },
            },
          };
      }.call(this, a("c8ba")));
    },
    9348: function (e, t, a) {
      "use strict";
      var s = { name: "TawkSpinner" },
        i = a("2877"),
        n = Object(i.a)(
          s,
          function () {
            var e = this;
            e.$createElement;
            return e._self._c, e._m(0);
          },
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t(
                "div",
                {
                  staticClass: "lds-spinner loader",
                  attrs: { role: "status" },
                },
                [
                  t("div", { staticClass: "spin spin-1" }),
                  t("div", { staticClass: "spin spin-2" }),
                  t("div", { staticClass: "spin spin-3" }),
                  t("div", { staticClass: "spin spin-4" }),
                  t("div", { staticClass: "spin spin-5" }),
                  t("div", { staticClass: "spin spin-6" }),
                  t("div", { staticClass: "spin spin-7" }),
                  t("div", { staticClass: "spin spin-8" }),
                  t("div", { staticClass: "spin spin-9" }),
                  t("div", { staticClass: "spin spin-10" }),
                  t("div", { staticClass: "spin spin-11" }),
                  t("div", { staticClass: "spin spin-12" }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        );
      t.a = n.exports;
    },
    f25b: function (e, t, a) {
      "use strict";
      (function (e) {
        var s = a("2f62"),
          i = a("f0b0"),
          n = a("9348");
        function r(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            t &&
              (s = s.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              a.push.apply(a, s);
          }
          return a;
        }
        function l(e, t, a) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = a),
            e
          );
        }
        t.a = {
          name: "chat-body",
          props: {
            isLoading: { type: Boolean, default: !0 },
            messageBlocks: {
              type: Array,
              default: function () {
                return [];
              },
            },
            barMessageRerence: { type: String, default: null },
            isHistory: { type: Boolean, default: !1 },
            emojiEnabled: { type: Boolean, default: !0 },
          },
          data: function () {
            return { showTime: !1 };
          },
          components: {
            TawkCard: i.TawkCard,
            TawkAvatar: i.TawkAvatar,
            TawkImage: i.TawkImage,
            TawkVideo: i.TawkVideo,
            TawkSpinner: n.a,
            TawkAlert: i.TawkAlert,
            TawkEmoji: i.TawkEmoji,
            TawkIcon: i.TawkIcon,
            TawkButton: i.TawkButton,
          },
          methods: {
            onMouseEnter: function () {
              this.showTime = !0;
            },
            callStatus: function (e) {
              return e.isMissed || e.isRejected ? "danger" : "success";
            },
            callTitle: function (e) {
              return e.isDone
                ? e.isRejected
                  ? this.$i18n("chat", "rejected_call")
                  : e.isMissed
                  ? this.$i18n(
                      "chat",
                      "missed_" + ("v" === e.caller.t ? "agent" : "visitor")
                    )
                  : this.$i18n("chat", "completed_call")
                : this.$i18n("chat", "ongoing_call");
            },
            callDescription: function (e) {
              var t = new Date(e.startedAt),
                a = t.getHours(),
                s = t.getMinutes();
              if (e.isDone) {
                if (
                  (a < 10 && (a = "0" + a),
                  s < 10 && (s = "0" + s),
                  e.isRejected || e.isMissed)
                )
                  return this.$i18n("chat", "call_started_on", {
                    startedOn: "".concat(a, ":").concat(s),
                  });
                var i,
                  n,
                  r,
                  l = 6e4,
                  o = 60 * l,
                  c =
                    new Date(e.endedAt).getTime() -
                    new Date(e.startedAt).getTime();
                return (
                  c >= o
                    ? ((i = Math.round(c / o)), (r = "hours"))
                    : c >= l
                    ? ((i = Math.round(c / l)), (r = "minutes"))
                    : ((i = Math.round(c / 1e3)), (r = "seconds")),
                  (n = this.$i18n("chat", r, { num: i })),
                  this.$i18n("chat", "call_end_details", {
                    startedOn: "".concat(a, ":").concat(s),
                    duration: n,
                  })
                );
              }
              return "";
            },
            callIcon: function (e) {
              return e.isVideo
                ? "video-chat"
                : e.isScreenshare
                ? "screenshare"
                : "call";
            },
            submitSurvey: function (t) {
              this.isHistory || e.Tawk_Window.chatManager.sendMessage(t);
            },
            imageLoaded: function () {
              this.$emit("imageLoaded", !0);
            },
            resendMessage: function (t) {
              for (var a = 0; a < this.messageBlocks.length; a++) {
                var s = this.messageBlocks[a];
                if (s.blockId === t.blockId) {
                  for (var i = 0; i < s.messages.length; i++)
                    if (s.messages[i].messageId === t.messageId) {
                      s.messages.splice(i, 1);
                      break;
                    }
                  break;
                }
              }
              e.Tawk_Window.chatManager.sendMessage(t.rawMessage.m);
            },
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? r(Object(a), !0).forEach(function (t) {
                    l(e, t, a[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a)
                  )
                : r(Object(a)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t)
                    );
                  });
            }
            return e;
          })({}, Object(s.c)({ agents: "chat/agents" })),
        };
      }.call(this, a("c8ba")));
    },
  },
]);
