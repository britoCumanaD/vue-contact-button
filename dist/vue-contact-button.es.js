import { defineComponent as g, ref as v, computed as x, onMounted as D, createElementBlock as f, createCommentVNode as p, openBlock as u, normalizeClass as d, createElementVNode as n, normalizeStyle as M, toDisplayString as y, watch as B, withDirectives as S, Fragment as T, renderList as V, vModelSelect as I, createBlock as b, vModelText as L, createTextVNode as $, renderSlot as j } from "vue";
const E = /* @__PURE__ */ g({
  __name: "FloatText",
  props: {
    text: { type: String, required: !0 },
    mainColor: { type: String, default: "#00258b" },
    secondaryColor: { type: String, default: "#ffffff" },
    isDarkMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, o = v(!1), l = `float-text-dismissed-${r.text}`, a = x(() => ({
      background: r.isDarkMode ? "rgba(255, 255, 255, 0.1)" : r.mainColor,
      color: r.isDarkMode ? "#ffffff" : r.secondaryColor,
      backdropFilter: r.isDarkMode ? "blur(10px)" : "none",
      border: r.isDarkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), t = () => {
      o.value = !0, sessionStorage.setItem(l, "true");
    };
    return D(() => {
      sessionStorage.getItem(l) === "true" && (o.value = !0);
    }), (s, i) => e.text && !o.value ? (u(), f("div", {
      key: 0,
      class: d(["float-text-container", { "dark-mode": e.isDarkMode }])
    }, [
      n("span", {
        class: "float-text",
        style: M(a.value)
      }, y(e.text), 5),
      n("button", {
        class: d(["float-text-close", { "dark-mode": e.isDarkMode }]),
        onClick: t
      }, " × ", 2)
    ], 2)) : p("", !0);
  }
}), C = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [l, a] of r)
    o[l] = a;
  return o;
}, F = /* @__PURE__ */ C(E, [["__scopeId", "data-v-90e46ec0"]]), W = ["value"], A = /* @__PURE__ */ g({
  __name: "ContactSelector",
  props: {
    contacts: { type: Array, required: !0 },
    modelValue: { type: String, required: !0 },
    isDarkMode: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const o = e, l = v(o.modelValue);
    B(() => o.modelValue, (t) => {
      l.value = t;
    });
    const a = (t) => ({
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Teléfono",
      linkedin: "💼 LinkedIn"
    })[t] || t.charAt(0).toUpperCase() + t.slice(1);
    return (t, s) => (u(), f("div", {
      class: d(["contact-selector", { "dark-mode": e.isDarkMode }])
    }, [
      S(n("select", {
        "onUpdate:modelValue": s[0] || (s[0] = (i) => l.value = i),
        class: d(["contact-select", { "dark-mode": e.isDarkMode }]),
        onChange: s[1] || (s[1] = (i) => t.$emit("update:modelValue", l.value))
      }, [
        (u(!0), f(T, null, V(e.contacts, (i) => (u(), f("option", {
          key: i,
          value: i
        }, y(a(i)), 9, W))), 128))
      ], 34), [
        [I, l.value]
      ]),
      n("div", {
        class: d(["select-arrow", { "dark-mode": e.isDarkMode }])
      }, s[2] || (s[2] = [
        n("svg", {
          width: "12",
          height: "8",
          viewBox: "0 0 12 8",
          fill: "none"
        }, [
          n("path", {
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
}), N = /* @__PURE__ */ C(A, [["__scopeId", "data-v-6f92f3f5"]]), q = { class: "message-input-container" }, z = ["maxlength"], U = ["disabled"], H = /* @__PURE__ */ g({
  __name: "ChatWindow",
  props: {
    contacts: { type: Array, required: !0 },
    maxChars: { type: Number, default: 200 },
    isDarkMode: { type: Boolean, default: !1 }
  },
  emits: ["send"],
  setup(e, { emit: r }) {
    const o = e, l = r, a = v(o.contacts[0]), t = v(""), s = () => {
      t.value.trim() && (l("send", { contact: a.value, message: t.value }), t.value = "");
    };
    return (i, c) => (u(), f("div", {
      class: d(["chat-window", { "dark-mode": e.isDarkMode }])
    }, [
      e.contacts.length > 1 ? (u(), b(N, {
        key: 0,
        contacts: e.contacts,
        modelValue: a.value,
        "onUpdate:modelValue": [
          c[0] || (c[0] = (m) => a.value = m),
          c[1] || (c[1] = (m) => a.value = m)
        ],
        isDarkMode: e.isDarkMode
      }, null, 8, ["contacts", "modelValue", "isDarkMode"])) : p("", !0),
      n("div", q, [
        S(n("textarea", {
          "onUpdate:modelValue": c[2] || (c[2] = (m) => t.value = m),
          maxlength: e.maxChars,
          class: d(["chat-textarea", { "dark-mode": e.isDarkMode }]),
          placeholder: "Escribe tu mensaje...",
          rows: "3"
        }, null, 10, z), [
          [L, t.value]
        ]),
        n("div", {
          class: d(["char-counter", { "dark-mode": e.isDarkMode }])
        }, y(t.value.length) + "/" + y(e.maxChars), 3)
      ]),
      n("button", {
        class: d(["chat-send", { "dark-mode": e.isDarkMode, disabled: !t.value.trim() }]),
        disabled: !t.value.trim(),
        onClick: s
      }, c[3] || (c[3] = [
        n("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none"
        }, [
          n("path", {
            d: "M22 2L11 13",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          n("path", {
            d: "M22 2L15 22L11 13L2 9L22 2Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1),
        $(" Enviar ")
      ]), 10, U)
    ], 2));
  }
}), O = /* @__PURE__ */ C(H, [["__scopeId", "data-v-cb758fbf"]]), Q = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, K = /* @__PURE__ */ g({
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
  setup(e, { emit: r }) {
    const o = e, l = r, a = v(!1), t = v(o.darkMode), s = x(() => ({
      top: o.top,
      bottom: o.bottom,
      left: o.left,
      right: o.right,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      zIndex: 9999
    })), i = x(() => ({
      backgroundColor: t.value ? "rgba(255, 255, 255, 0.1)" : o.mainColor,
      color: t.value ? "#ffffff" : o.secondaryColor,
      backdropFilter: t.value ? "blur(10px)" : "none",
      border: t.value ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), c = () => {
      o.chatInWindow ? a.value = !a.value : l("openContact");
    }, m = (k) => {
      l("send", k), a.value = !1;
    }, w = () => {
      if (o.autoDetectTheme) {
        const k = window.matchMedia("(prefers-color-scheme: dark)").matches;
        t.value = k;
      } else
        t.value = o.darkMode;
    };
    return D(() => {
      w(), o.autoDetectTheme && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", w);
    }), (k, h) => (u(), f("div", {
      class: d(["contact-button-wrapper", { "dark-mode": t.value }]),
      style: M(s.value)
    }, [
      e.floatText ? (u(), b(F, {
        key: 0,
        text: e.floatText,
        mainColor: e.mainColor,
        secondaryColor: e.secondaryColor,
        isDarkMode: t.value
      }, null, 8, ["text", "mainColor", "secondaryColor", "isDarkMode"])) : p("", !0),
      n("button", {
        class: d(["contact-button", {
          "contact-button-close": a.value,
          "dark-mode": t.value
        }]),
        style: M(i.value),
        onClick: c
      }, [
        a.value ? (u(), f("svg", Q, h[1] || (h[1] = [
          n("path", {
            d: "M18 6L6 18M6 6l12 12",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : j(k.$slots, "default", { key: 0 }, () => [
          h[0] || (h[0] = n("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none"
          }, [
            n("path", {
              d: "M7 8h10M7 12h6m-6 8l-4-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H9l-2 2z",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1))
        ], !0)
      ], 6),
      a.value && e.chatInWindow ? (u(), b(O, {
        key: 1,
        contacts: e.contacts,
        maxChars: e.maxChars,
        isDarkMode: t.value,
        onSend: m
      }, null, 8, ["contacts", "maxChars", "isDarkMode"])) : p("", !0)
    ], 6));
  }
}), G = /* @__PURE__ */ C(K, [["__scopeId", "data-v-a8ce6e3f"]]);
export {
  O as ChatWindow,
  G as ContactButton,
  N as ContactSelector,
  F as FloatText
};
