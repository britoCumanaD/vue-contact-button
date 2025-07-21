import { defineComponent as C, ref as h, computed as p, onMounted as b, createElementBlock as f, createCommentVNode as y, openBlock as c, normalizeClass as d, createElementVNode as a, normalizeStyle as x, toDisplayString as g, watch as S, withDirectives as D, Fragment as B, renderList as T, vModelSelect as V, createBlock as M, vModelText as L, createTextVNode as $, renderSlot as I } from "vue";
const j = /* @__PURE__ */ C({
  __name: "FloatText",
  props: {
    text: { type: String, required: !0 },
    mainColor: { type: String, default: "#00258b" },
    secondaryColor: { type: String, default: "#ffffff" },
    isDarkMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, o = h(!1), s = `float-text-dismissed-${l.text}`, n = p(() => ({
      background: l.isDarkMode ? "rgba(255, 255, 255, 0.1)" : l.mainColor,
      color: l.isDarkMode ? "#ffffff" : l.secondaryColor,
      backdropFilter: l.isDarkMode ? "blur(10px)" : "none",
      border: l.isDarkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), t = () => {
      o.value = !0, sessionStorage.setItem(s, "true");
    };
    return b(() => {
      sessionStorage.getItem(s) === "true" && (o.value = !0);
    }), (r, i) => e.text && !o.value ? (c(), f("div", {
      key: 0,
      class: d(["float-text-container", { "dark-mode": e.isDarkMode }])
    }, [
      a("span", {
        class: "float-text",
        style: x(n.value)
      }, g(e.text), 5),
      a("button", {
        class: d(["float-text-close", { "dark-mode": e.isDarkMode }]),
        onClick: t
      }, " × ", 2)
    ], 2)) : y("", !0);
  }
}), E = ["value"], F = /* @__PURE__ */ C({
  __name: "ContactSelector",
  props: {
    contacts: { type: Array, required: !0 },
    modelValue: { type: String, required: !0 },
    isDarkMode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const o = e, s = h(o.modelValue);
    S(() => o.modelValue, (t) => {
      s.value = t;
    });
    const n = (t) => ({
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Teléfono",
      linkedin: "💼 LinkedIn"
    })[t] || t.charAt(0).toUpperCase() + t.slice(1);
    return (t, r) => (c(), f("div", {
      class: d(["contact-selector", { "dark-mode": e.isDarkMode }])
    }, [
      D(a("select", {
        "onUpdate:modelValue": r[0] || (r[0] = (i) => s.value = i),
        class: d(["contact-select", { "dark-mode": e.isDarkMode }]),
        onChange: r[1] || (r[1] = (i) => t.$emit("update:modelValue", s.value))
      }, [
        (c(!0), f(B, null, T(e.contacts, (i) => (c(), f("option", {
          key: i,
          value: i
        }, g(n(i)), 9, E))), 128))
      ], 34), [
        [V, s.value]
      ]),
      a("div", {
        class: d(["select-arrow", { "dark-mode": e.isDarkMode }])
      }, r[2] || (r[2] = [
        a("svg", {
          width: "12",
          height: "8",
          viewBox: "0 0 12 8",
          fill: "none"
        }, [
          a("path", {
            d: "M1 1L6 6L11 1",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1)
      ]), 2)
    ], 2));
  }
}), W = { class: "message-input-container" }, A = ["maxlength"], N = ["disabled"], q = /* @__PURE__ */ C({
  __name: "ChatWindow",
  props: {
    contacts: { type: Array, required: !0 },
    maxChars: { type: Number, default: 200 },
    isDarkMode: { type: Boolean, default: !1 }
  },
  emits: ["send"],
  setup(e, { emit: l }) {
    const o = e, s = l, n = h(o.contacts[0]), t = h(""), r = () => {
      t.value.trim() && (s("send", { contact: n.value, message: t.value }), t.value = "");
    };
    return (i, u) => (c(), f("div", {
      class: d(["chat-window", { "dark-mode": e.isDarkMode }])
    }, [
      e.contacts.length > 1 ? (c(), M(F, {
        key: 0,
        contacts: e.contacts,
        modelValue: n.value,
        "onUpdate:modelValue": [
          u[0] || (u[0] = (m) => n.value = m),
          u[1] || (u[1] = (m) => n.value = m)
        ],
        isDarkMode: e.isDarkMode
      }, null, 8, ["contacts", "modelValue", "isDarkMode"])) : y("", !0),
      a("div", W, [
        D(a("textarea", {
          "onUpdate:modelValue": u[2] || (u[2] = (m) => t.value = m),
          maxlength: e.maxChars,
          class: d(["chat-textarea", { "dark-mode": e.isDarkMode }]),
          placeholder: "Escribe tu mensaje...",
          rows: "3"
        }, null, 10, A), [
          [L, t.value]
        ]),
        a("div", {
          class: d(["char-counter", { "dark-mode": e.isDarkMode }])
        }, g(t.value.length) + "/" + g(e.maxChars), 3)
      ]),
      a("button", {
        class: d(["chat-send", { "dark-mode": e.isDarkMode, disabled: !t.value.trim() }]),
        disabled: !t.value.trim(),
        onClick: r
      }, u[3] || (u[3] = [
        a("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none"
        }, [
          a("path", {
            d: "M22 2L11 13",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          a("path", {
            d: "M22 2L15 22L11 13L2 9L22 2Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        $(" Enviar ")
      ]), 10, N)
    ], 2));
  }
}), z = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, H = /* @__PURE__ */ C({
  __name: "ContactButton",
  props: {
    label: { type: String, default: "" },
    chatInWindow: { type: Boolean, default: !0 },
    contacts: { type: Array, default: () => ["email"] },
    floatText: { type: String, default: "" },
    top: { type: String, default: "" },
    bottom: { type: String, default: "1.5rem" },
    left: { type: String, default: "" },
    right: { type: String, default: "1.5rem" },
    mainColor: { type: String, default: "#3b82f6" },
    secondaryColor: { type: String, default: "#ffffff" },
    maxChars: { type: Number, default: 200 },
    darkMode: { type: Boolean, default: !1 },
    autoDetectTheme: { type: Boolean, default: !0 }
  },
  emits: ["openContact", "send"],
  setup(e, { emit: l }) {
    const o = e, s = l, n = h(!1), t = h(o.darkMode), r = p(() => ({
      top: o.top,
      bottom: o.bottom,
      left: o.left,
      right: o.right,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      zIndex: 9999
    })), i = p(() => ({
      backgroundColor: t.value ? "rgba(255, 255, 255, 0.1)" : o.mainColor,
      color: t.value ? "#ffffff" : o.secondaryColor,
      backdropFilter: t.value ? "blur(10px)" : "none",
      border: t.value ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), u = () => {
      o.chatInWindow ? n.value = !n.value : s("openContact");
    }, m = (k) => {
      s("send", k), n.value = !1;
    }, w = () => {
      if (o.autoDetectTheme) {
        const k = window.matchMedia("(prefers-color-scheme: dark)").matches;
        t.value = k;
      } else
        t.value = o.darkMode;
    };
    return b(() => {
      w(), o.autoDetectTheme && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", w);
    }), (k, v) => (c(), f("div", {
      class: d(["contact-button-wrapper", { "dark-mode": t.value }]),
      style: x(r.value)
    }, [
      e.floatText ? (c(), M(j, {
        key: 0,
        text: e.floatText,
        mainColor: e.mainColor,
        secondaryColor: e.secondaryColor,
        isDarkMode: t.value
      }, null, 8, ["text", "mainColor", "secondaryColor", "isDarkMode"])) : y("", !0),
      a("button", {
        class: d(["contact-button", {
          "contact-button-close": n.value,
          "dark-mode": t.value
        }]),
        style: x(i.value),
        onClick: u
      }, [
        n.value ? (c(), f("svg", z, v[1] || (v[1] = [
          a("path", {
            d: "M18 6L6 18M6 6l12 12",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : I(k.$slots, "default", { key: 0 }, () => [
          v[0] || (v[0] = a("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none"
          }, [
            a("path", {
              d: "M7 8h10M7 12h6m-6 8l-4-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H9l-2 2z",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1))
        ])
      ], 6),
      n.value && e.chatInWindow ? (c(), M(q, {
        key: 1,
        contacts: e.contacts,
        maxChars: e.maxChars,
        isDarkMode: t.value,
        onSend: m
      }, null, 8, ["contacts", "maxChars", "isDarkMode"])) : y("", !0)
    ], 6));
  }
});
export {
  q as ChatWindow,
  H as ContactButton,
  F as ContactSelector,
  j as FloatText
};
