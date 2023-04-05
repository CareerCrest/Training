(window.tawkJsonp = window.tawkJsonp || []).push([
  ["chunk-48f46bef"],
  {
    6775: function (t, e, i) {
      "use strict";
      (function (t) {
        var a = i("5a60"),
          s = i("2f62"),
          n = i("f0b0"),
          r = i("87dd");
        function o(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e &&
              (a = a.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              i.push.apply(i, a);
          }
          return i;
        }
        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(i), !0).forEach(function (e) {
                  c(t, e, i[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : o(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e)
                  );
                });
          }
          return t;
        }
        function c(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        e.a = {
          name: "MessagePreview",
          components: {
            "i-frame": a.a,
            TawkChatInput: n.TawkChatInput,
            TawkCard: n.TawkCard,
            TawkIcon: n.TawkIcon,
            TawkAvatar: n.TawkAvatar,
            TawkVideo: n.TawkVideo,
            TawkImage: n.TawkImage,
            CallWidget: function () {
              return i.e("chunk-495e3f59").then(i.bind(null, "bcae"));
            },
            TawkEmoji: n.TawkEmoji,
          },
          directives: { TawkTooltip: n.TawkTooltip },
          mixins: [r.a],
          computed: l(
            l(
              {},
              Object(s.c)({
                minDesktop: "widget/minDesktop",
                minMobile: "widget/minMobile",
                pageStatus: "session/pageStatus",
                chatWindowState: "session/chatWindowState",
                showMessagePreview: "widget/showMessagePreview",
                isRight: "widget/isRight",
                isBottom: "widget/isBottom",
                isCenter: "widget/isCenter",
                features: "widget/features",
                isRoundWidget: "widget/isRoundWidget",
                incomingMessage: "chat/incomingMessage",
                chatVersion: "chat/chatVersion",
                states: "widget/states",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                agentProfile: "chat/agentProfile",
                incomingCall: "chat/incomingCall",
                hasLiveChat: "widget/hasLiveChat",
                zoomRatio: "widget/zoomRatio",
                mobileBrowserName: "browserData/mobileBrowserName",
                hasChatStarted: "chat/hasChatStarted",
                agentsCount: "chat/agentsCount",
                emojiEnabled: "widget/emojiEnabled",
              })
            ),
            {},
            {
              xOffset: function () {
                return t.Tawk_Window.widgetSettings.xOffset();
              },
              yOffset: function () {
                return t.Tawk_Window.widgetSettings.yOffset();
              },
              xOffsetMobile: function () {
                return t.Tawk_Window.widgetSettings.xOffsetMobile();
              },
              yOffsetMobile: function () {
                return t.Tawk_Window.widgetSettings.yOffsetMobile();
              },
              width: function () {
                var t = 360;
                return (
                  this.mobileBrowserName &&
                    (t = 0.6 * window.screen.availWidth),
                  t < 360 && (t = 360),
                  window.innerWidth <= t + 2 * this.padding &&
                    (t = window.innerWidth - 2 * this.padding),
                  t
                );
              },
              frameWidth: function () {
                var t = this.width * this.zoomRatio;
                return (
                  this.previewXOffset + t > window.innerWidth &&
                    (t = window.innerWidth - this.previewXOffset),
                  "".concat(t, "px")
                );
              },
              frameHeight: function () {
                return "".concat((this.height + 45) * this.zoomRatio, "px");
              },
              previewYOffset: function () {
                var t = this.mobileBrowserName
                    ? this.minMobile
                    : this.minDesktop,
                  e = this.mobileBrowserName
                    ? this.yOffsetMobile
                    : this.yOffset;
                return this.isCenter
                  ? e
                  : (t.height + this.padding + e) * this.zoomRatio;
              },
              previewXOffset: function () {
                var t = this.mobileBrowserName
                    ? this.minMobile
                    : this.minDesktop,
                  e = this.mobileBrowserName
                    ? this.xOffsetMobile
                    : this.xOffset;
                return this.isCenter
                  ? (t.height + this.padding + e) * this.zoomRatio
                  : e * this.zoomRatio;
              },
              styleObject: function () {
                var t = {
                  "position:": "fixed !important;",
                  "height:": "".concat(this.frameHeight, " !important;"),
                  "width:": "".concat(this.frameWidth, " !important;"),
                  "min-height:": "".concat(this.frameHeight, " !important;"),
                  "min-width:": "".concat(this.frameWidth, " !important;"),
                  "max-height:": "".concat(this.frameHeight, " !important;"),
                  "max-width:": "".concat(this.frameWidth, " !important;"),
                };
                return (
                  this.isCenter
                    ? ((t["top:"] = "calc(50% + ".concat(
                        this.previewYOffset,
                        "px);"
                      )),
                      (t["transform:"] = "translate(0, -50%) !important;"),
                      (t["-webkit-transform:"] =
                        "translate(0, -50%) !important;"))
                    : this.isBottom
                    ? (t["bottom:"] = "".concat(this.previewYOffset, "px;"))
                    : (t["top:"] = "".concat(this.previewYOffset, "px;")),
                  this.isRight
                    ? (t["right:"] = "".concat(
                        this.previewXOffset,
                        "px !important;"
                      ))
                    : (t["left:"] = "".concat(
                        this.previewXOffset,
                        "px !important;"
                      )),
                  this.isVisible
                    ? (t["display:"] = "block !important;")
                    : (t["display:"] = "none !important;"),
                  l(l({}, this.genericStyles), t)
                );
              },
              inputPlaceholder: function () {
                var t,
                  e = this.states[this.pageStatus];
                if (e && e.body && e.body.length)
                  for (var i = 0; i < e.body.length; i++) {
                    var a = e.body[i];
                    if ("chat" === a.type) {
                      t = a.content.inputPlaceholder;
                      break;
                    }
                  }
                return t;
              },
              showInputField: function () {
                return !(
                  this.states.prechat &&
                  this.states.prechat.handlers &&
                  this.states.prechat.handlers.form &&
                  !this.prechatFormSubmitted
                );
              },
              isLiveChatFeatureEnabled: function () {
                return !!(
                  this.hasLiveChat ||
                  (this.hasChatStarted && this.agentsCount > 0)
                );
              },
            }
          ),
          data: function () {
            return {
              backgroundColor: this.$store.getters["widget/headerBgColor"],
              cssLink: "".concat(
                "https://embed.tawk.to/_s/v4/app/641d54f6f05",
                "/css/message-preview.css"
              ),
              isVisible: !1,
              messages: [],
              isDuration: !0,
              height: 100,
              isLive: !0,
              padding: 20,
              isDraggedOver: !1,
              textAreaHeight: 18,
            };
          },
          watch: {
            incomingMessage: function (t, e) {
              "min" === this.chatWindowState &&
                t &&
                "v" !== t.senderType &&
                (!e || (e.cver && e.cver < t.cver)) &&
                (this.displayMessage(t), (this.isVisible = !0));
            },
            chatWindowState: function (t) {
              "max" === t && this.clearMessages();
            },
            isVisible: function (e) {
              t.Tawk_Window.eventBus.$emit("mpIsVisible", e);
            },
            incomingCall: function (t) {
              "min" === this.chatWindowState &&
                (this.isVisible = !!t || 0 !== this.messages.length);
            },
          },
          methods: l(
            l({}, Object(s.b)({ toggleWidget: "session/toggleWidget" })),
            {},
            {
              maximizeWidget: function () {
                (this.isVisible = !1),
                  this.toggleWidget(),
                  this.clearMessages();
              },
              clearMessages: function () {
                (this.isVisible = !1), (this.messages = []);
              },
              displayMessage: function (t) {
                if ("v" !== t.ut && !t.callId) {
                  if (t.profileImg)
                    t.profileImage = ""
                      .concat("https://tawk.link", "/")
                      .concat(t.profileImg);
                  else if (t.data && t.data.rsc) {
                    var e = this.agentProfile(t.data.rsc);
                    if (!e) return;
                    t.profileImage = e.profileImage;
                  }
                  if (
                    (t.isUpload ||
                      ("s" === t.senderType
                        ? (t.snippet = this.limitMessageLength(t.message, 500))
                        : (t.snippet = this.limitMessageLength(
                            t.message,
                            150
                          ))),
                    (t.showProfile = !0),
                    3 === this.messages.length &&
                      (this.isBottom
                        ? this.messages.splice(0, 1)
                        : this.messages.splice(-1, 1))[0].showProfile &&
                      this.messages.length > 0 &&
                      (this.isBottom
                        ? (this.messages[0].showProfile = !0)
                        : (this.messages[this.messages.length - 1].showProfile =
                            !0)),
                    this.messages.length > 0)
                  )
                    this.messages[this.messages.length - 1].ownerId ===
                      t.ownerId && (t.showProfile = !1);
                  this.isBottom
                    ? this.messages.push(t)
                    : this.messages.unshift(t),
                    this.recalculateHeight();
                }
              },
              recalculateHeight: function () {
                var t = this;
                setTimeout(function () {
                  t.height =
                    t.$refs["tawk-message-preview-content"].clientHeight + 10;
                  var e =
                    window.innerHeight -
                    t.previewYOffset -
                    t.$refs["tawk-chatinput-container"].clientHeight -
                    45;
                  (t.$refs["tawk-chat-message-container"].style["max-height"] =
                    "".concat(e * t.zoomRatio, "px")),
                    (t.$refs[
                      "tawk-chat-message-container"
                    ].scrollTop = 999999999),
                    t.scaleContent();
                }, 1e3);
              },
              limitMessageLength: function (t, e) {
                var i = 0;
                if (t.length > e)
                  for (i = 0; i < e; )
                    if (
                      '<img class="emojione"' === t.substring(i, i + 21) ||
                      '<a target="_blank"' === t.substring(i, i + 18)
                    ) {
                      for (var a = i; a < t.length; a++)
                        if ((i++, e++, ">" === t.substring(a, a + 1))) {
                          e -= 1;
                          break;
                        }
                    } else i++;
                return t.substring(0, e) + (t.length > e ? "[...]" : "");
              },
              emojiOpened: function (t) {
                t
                  ? this.$refs["tawk-message-preview-content"].clientHeight <
                      this.textAreaHeight + 310 &&
                    (this.height = this.textAreaHeight + 310)
                  : this.recalculateHeight();
              },
              textareaResized: function (t) {
                this.$refs &&
                  this.$refs["tawk-message-preview-content"] &&
                  (t >= 0
                    ? ((this.textAreaHeight = t),
                      (this.height =
                        this.$refs["tawk-message-preview-content"]
                          .clientHeight +
                        10 +
                        t))
                    : this.recalculateHeight());
              },
              messageTyping: function (e) {
                t.Tawk_Window.chatManager.sendMessagePreview(e);
              },
              sendMessage: function (e) {
                this.maximizeWidget(),
                  t.Tawk_Window.chatManager.sendMessage(e),
                  this.clearMessages();
              },
              ratingClicked: function (e) {
                this.maximizeWidget(),
                  t.Tawk_Window.chatManager.changeRating(e),
                  this.clearMessages();
              },
              filesAdded: function () {
                this.height =
                  this.$refs["tawk-message-preview-content"].clientHeight +
                  10 +
                  66;
              },
              filesRemoved: function () {
                this.recalculateHeight();
              },
              sendFiles: function (e) {
                t.Tawk_Window.chatManager.uploadFiles(e),
                  this.clearMessages(),
                  this.maximizeWidget();
              },
              dragover: function (t) {
                this.isLiveChatFeatureEnabled &&
                  this.features.upload &&
                  (t.preventDefault(),
                  (this.isDraggedOver = !0),
                  this.recalculateHeight());
              },
              dragleave: function (t) {
                this.isLiveChatFeatureEnabled &&
                  this.features.upload &&
                  (t.preventDefault(),
                  t.currentTarget.contains(t.relatedTarget) ||
                    ((this.isDraggedOver = !1), this.recalculateHeight()));
              },
              drop: function (t) {
                this.isLiveChatFeatureEnabled &&
                  this.features.upload &&
                  (t.preventDefault(),
                  (this.isDraggedOver = !1),
                  this.$refs["tawk-chatinput"] &&
                    this.$refs["tawk-chatinput"].$refs &&
                    this.$refs["tawk-chatinput"].$refs.fileupload &&
                    ((this.$refs["tawk-chatinput"].$refs.fileupload.files =
                      t.dataTransfer.files),
                    this.$refs["tawk-chatinput"].onFileUpload()));
              },
              dismissPreview: function (e, i) {
                if ((e && e.stopPropagation(), this.messages.length)) {
                  if (!i) {
                    var a = this.messages[this.messages.length - 1];
                    if (!a || !a.timeStamp) return;
                    t.Tawk_Window.app.$socket.publish(
                      "visitorChatDismiss",
                      { timestamp: a.timeStamp },
                      function () {}
                    );
                  }
                  this.clearMessages();
                }
              },
              scaleContent: function () {
                if (this.mobileBrowserName) {
                  var e,
                    i = this.isRight ? "right" : "left";
                  if (
                    ((e = this.isBottom ? "bottom" : "top"),
                    !t.Tawk_Window.isMobileOptimizedWebsite)
                  ) {
                    var a = "scale(".concat(this.zoomRatio, ")"),
                      s = "-moz-transform: "
                        .concat(a, ";\n\t\t\t\t\t\t\t-webkit-transform: ")
                        .concat(a, ";\n\t\t\t\t\t\t\t-o-transform: ")
                        .concat(a, ";\n\t\t\t\t\t\t\t-ms-transform: ")
                        .concat(a, ";\n\t\t\t\t\t\t\ttransform: ")
                        .concat(a, ";"),
                      n = "-moz-transform-origin: "
                        .concat(e, " ")
                        .concat(
                          i,
                          ";\n\t\t\t\t\t\t\t\t-webkit-transform-origin: "
                        )
                        .concat(e, "  ")
                        .concat(i, ";\n\t\t\t\t\t\t\t\t-o-transform-orgin: ")
                        .concat(e, "  ")
                        .concat(i, ";\n\t\t\t\t\t\t\t\t-ms-transform-origin: ")
                        .concat(e, "  ")
                        .concat(i, ";\n\t\t\t\t\t\t\t\ttransform-origin: ")
                        .concat(e, "  ")
                        .concat(i);
                    this.$refs["tawk-message-preview-content"].style.cssText +=
                      s + n;
                    var r = parseInt(this.frameWidth.replace("px", ""), 10);
                    r && (r /= this.zoomRatio),
                      (this.$refs["tawk-message-preview"].style.width =
                        "".concat(r, "px"));
                  }
                }
              },
              loaded: function () {
                var e,
                  i = this;
                (e = this.$refs["tawk-message-preview"]
                  ? parseFloat(
                      getComputedStyle(this.$refs["tawk-message-preview"])
                        .fontSize
                    )
                  : 16),
                  (this.textAreaHeight = e + 2),
                  t.Tawk_Window.eventBus.$on("resetState", function () {
                    i.clearMessages();
                  });
              },
              paste: function (t) {
                var e,
                  i = (t.originalEvent || t).clipboardData;
                i &&
                  (((e = i.files).length && !this.features.upload) ||
                    (e &&
                      e.length &&
                      ((this.$refs["tawk-chatinput"].$refs.fileupload.files =
                        e),
                      this.$refs["tawk-chatinput"].onFileUpload())));
              },
            }
          ),
          mounted: function () {
            var e = this;
            window.addEventListener("resize", this.recalculateHeight),
              t.Tawk_Window.eventBus.$on("dismissPreview", function (t) {
                t.ts && e.dismissPreview(null, !0);
              });
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.recalculateHeight),
              t.Tawk_Window.eventBus.$off("dismissPreview");
          },
        };
      }.call(this, i("c8ba")));
    },
    "6b5b": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6775").a,
        s = i("2877"),
        n = Object(s.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i(
              "i-frame",
              {
                attrs: {
                  width: t.frameWidth,
                  height: t.frameHeight,
                  cssLink: t.cssLink,
                  styleObject: t.styleObject,
                },
              },
              [
                i(
                  "div",
                  {
                    staticClass: "tawk-flex",
                    staticStyle: { width: "100%", height: "100%" },
                    style: {
                      "justify-content": t.isRight ? "flex-end" : "flex-start",
                    },
                  },
                  [
                    i(
                      "div",
                      {
                        ref: "tawk-message-preview",
                        staticClass:
                          "tawk-flex tawk-message-preview tawk-fadeIn",
                        class: [
                          t.isBottom ? "tawk-flex-bottom" : "tawk-flex-top",
                        ],
                        style: {
                          width: t.width + "px",
                          "justify-content": t.isRight
                            ? "flex-end"
                            : "flex-start",
                        },
                        attrs: { id: "tawk-message-preview" },
                        on: {
                          dragover: t.dragover,
                          dragleave: t.dragleave,
                          drop: t.drop,
                          paste: t.paste,
                        },
                      },
                      [
                        i(
                          "div",
                          {
                            ref: "tawk-message-preview-content",
                            staticClass: "tawk-message-preview-content",
                            attrs: { id: "tawk-message-preview-content" },
                          },
                          [
                            t.isLiveChatFeatureEnabled
                              ? i(
                                  "tawk-card",
                                  {
                                    directives: [
                                      {
                                        name: "tawk-tooltip",
                                        rawName: "v-tawk-tooltip",
                                      },
                                    ],
                                    staticClass:
                                      "tawk-message-preview-close tawk-box-shadow-xsmall",
                                    attrs: {
                                      id: "tawk-mpreview-close",
                                      role: "button",
                                      tabindex: "0",
                                      "data-text":
                                        "" +
                                        t.$i18n("bubble", "attention_grabber"),
                                      "aria-label":
                                        "" +
                                        t.$i18n("bubble", "attention_grabber"),
                                    },
                                    on: { click: t.dismissPreview },
                                  },
                                  [
                                    i("tawk-icon", {
                                      attrs: { type: "close" },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t.incomingCall
                              ? i(
                                  "div",
                                  {
                                    staticClass:
                                      "tawk-message-box tawk-call-card tawk-flex tawk-flex-bottom",
                                  },
                                  [
                                    i(
                                      "tawk-card",
                                      {
                                        staticClass:
                                          "tawk-box-shadow-xsmall tawk-message tawk-margin-auto-left tawk-call-card",
                                        attrs: { size: "xsmall" },
                                      },
                                      [
                                        i("call-widget", {
                                          attrs: { fullVersion: !1 },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : t._e(),
                            i(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value:
                                      !t.incomingCall &&
                                      t.isLiveChatFeatureEnabled,
                                    expression:
                                      "!incomingCall &&\n\t\t\t\t\t\t\tisLiveChatFeatureEnabled",
                                  },
                                ],
                              },
                              [
                                i(
                                  "div",
                                  {
                                    ref: "tawk-chat-message-container",
                                    staticClass: "tawk-chat-message-container",
                                    attrs: {
                                      id: "tawk-chat-message-container",
                                      role: "button",
                                      tabindex: "0",
                                    },
                                    on: { click: t.maximizeWidget },
                                  },
                                  [
                                    i(
                                      "transition-group",
                                      { attrs: { name: "list" } },
                                      t._l(t.messages, function (e) {
                                        return i(
                                          "div",
                                          {
                                            key: e.cver,
                                            staticClass:
                                              "tawk-message-box tawk-flex tawk-flex-bottom",
                                          },
                                          [
                                            e.showProfile
                                              ? i("tawk-avatar", {
                                                  staticClass:
                                                    "tawk-box-shadow-small",
                                                  attrs: {
                                                    src: e.profileImage,
                                                    alt:
                                                      "" +
                                                      t.$i18n(
                                                        "chat",
                                                        "agent_profile_image"
                                                      ),
                                                    size: "small",
                                                  },
                                                })
                                              : t._e(),
                                            i(
                                              "tawk-card",
                                              {
                                                staticClass:
                                                  "tawk-box-shadow-xsmall tawk-message tawk-margin-auto-left",
                                                class: [
                                                  e.showProfile
                                                    ? "tawk-has-avatar"
                                                    : "",
                                                ],
                                                attrs: { size: "xsmall" },
                                              },
                                              [
                                                e.isUpload
                                                  ? i(
                                                      "div",
                                                      {
                                                        staticStyle: {
                                                          "padding-bottom":
                                                            "20px",
                                                        },
                                                      },
                                                      [
                                                        e.fileType
                                                          ? i(
                                                              "div",
                                                              [
                                                                "image" ===
                                                                e.fileType
                                                                  ? i(
                                                                      "tawk-image",
                                                                      {
                                                                        attrs: {
                                                                          src: e.fileLink,
                                                                          alt: e.fileName,
                                                                          position:
                                                                            "center",
                                                                        },
                                                                        on: {
                                                                          imageLoaded:
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              return t.recalculateHeight();
                                                                            },
                                                                        },
                                                                      }
                                                                    )
                                                                  : t._e(),
                                                                "video" ===
                                                                e.fileType
                                                                  ? i(
                                                                      "tawk-video",
                                                                      {
                                                                        attrs: {
                                                                          content:
                                                                            {
                                                                              source:
                                                                                "selfhosted",
                                                                              url: e.fileLink,
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
                                                                  : t._e(),
                                                                "audio" ===
                                                                e.fileType
                                                                  ? i(
                                                                      "audio",
                                                                      {
                                                                        staticStyle:
                                                                          {
                                                                            width:
                                                                              "100%",
                                                                            height:
                                                                              "30px",
                                                                          },
                                                                        attrs: {
                                                                          controls:
                                                                            "",
                                                                        },
                                                                      },
                                                                      [
                                                                        i(
                                                                          "source",
                                                                          {
                                                                            attrs:
                                                                              {
                                                                                src: e.fileLink,
                                                                                type: e
                                                                                  .data
                                                                                  .file
                                                                                  .mimetype,
                                                                              },
                                                                          }
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
                                                                i(
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
                                                                    i(
                                                                      "span",
                                                                      {
                                                                        staticClass:
                                                                          "tawk-text-truncate tawk-flex-1",
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              e.fileName
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    i(
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
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              e.humanizeFileSize
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    i(
                                                                      "a",
                                                                      {
                                                                        staticClass:
                                                                          "tawk-flex-none",
                                                                        attrs: {
                                                                          href: e.fileLink,
                                                                          target:
                                                                            "_blank",
                                                                        },
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          " " +
                                                                            t._s(
                                                                              t.$i18n(
                                                                                "chat",
                                                                                "download"
                                                                              )
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                        i(
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
                                                                ),
                                                              ],
                                                              1
                                                            )
                                                          : i("div", [
                                                              i("b", [
                                                                t._v(
                                                                  t._s(
                                                                    e.fileName
                                                                  )
                                                                ),
                                                              ]),
                                                              i(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "tawk-flex",
                                                                  staticStyle: {
                                                                    "margin-top":
                                                                      "10px",
                                                                  },
                                                                },
                                                                [
                                                                  i(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "tawk-flex-none",
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        " " +
                                                                          t._s(
                                                                            e.humanizeFileSize
                                                                          ) +
                                                                          " "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  i(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "tawk-flex-none tawk-margin-auto-left",
                                                                      attrs: {
                                                                        href: e.fileLink,
                                                                        target:
                                                                          "_blank",
                                                                      },
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        " " +
                                                                          t._s(
                                                                            t.$i18n(
                                                                              "chat",
                                                                              "download"
                                                                            )
                                                                          ) +
                                                                          " "
                                                                      ),
                                                                      i(
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
                                                              ),
                                                            ]),
                                                      ]
                                                    )
                                                  : i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "tawk-text-regular-3",
                                                        staticStyle: {
                                                          "padding-bottom":
                                                            "20px",
                                                        },
                                                      },
                                                      [
                                                        i("tawk-emoji", {
                                                          attrs: {
                                                            emoji: e.snippet,
                                                            enabled:
                                                              t.emojiEnabled,
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tawk-flex tawk-text-regular-2 tawk-text-grey-2",
                                                  },
                                                  [
                                                    i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "flex-auto",
                                                      },
                                                      [t._v(t._s(e.name) + " ")]
                                                    ),
                                                    i(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "flex-none tawk-margin-auto-left",
                                                      },
                                                      [
                                                        i("tawk-timeago", {
                                                          staticClass:
                                                            "tawk-text-regular-1 tawk-text-grey-2",
                                                          attrs: {
                                                            datetime: e.time,
                                                            isDuration:
                                                              t.isDuration,
                                                            isLive: t.isLive,
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    ),
                                  ],
                                  1
                                ),
                                i(
                                  "transition",
                                  { attrs: { name: "fade-enter" } },
                                  [
                                    i(
                                      "div",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: t.showInputField,
                                            expression: "showInputField",
                                          },
                                        ],
                                      },
                                      [
                                        i(
                                          "tawk-card",
                                          {
                                            ref: "tawk-chatinput-container",
                                            staticClass:
                                              "tawk-chatinput-container tawk-box-shadow-xsmall",
                                            class: [
                                              t.isDraggedOver
                                                ? "has-dragover"
                                                : "",
                                            ],
                                            attrs: {
                                              size: "xsmall",
                                              id: "tawk-chatinput-container",
                                            },
                                          },
                                          [
                                            t.isDraggedOver
                                              ? i(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "tawk-dragover-container",
                                                    attrs: {
                                                      id: "tawk-dragover-container",
                                                    },
                                                  },
                                                  [
                                                    i("tawk-icon", {
                                                      attrs: {
                                                        type: "attach-file",
                                                        size: "xlarge",
                                                      },
                                                    }),
                                                    i("p", [
                                                      t._v(
                                                        t._s(
                                                          t.$i18n(
                                                            "rollover",
                                                            "uploadFile"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ],
                                                  1
                                                )
                                              : t._e(),
                                            i("tawk-chat-input", {
                                              ref: "tawk-chatinput",
                                              attrs: {
                                                features: t.features,
                                                placeholder: t.inputPlaceholder,
                                              },
                                              on: {
                                                emojiPreview: t.emojiOpened,
                                                textareaResized:
                                                  t.textareaResized,
                                                messageTyping: t.messageTyping,
                                                sendMessage: t.sendMessage,
                                                ratingClicked: t.ratingClicked,
                                                filesAdded: t.filesAdded,
                                                sendFiles: t.sendFiles,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = n.exports;
    },
  },
]);
