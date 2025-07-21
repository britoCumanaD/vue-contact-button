import { defineComponent as C, ref as g, computed as p, onMounted as T, createElementBlock as f, createCommentVNode as x, openBlock as m, normalizeClass as i, createElementVNode as o, normalizeStyle as w, toDisplayString as v, watch as W, withDirectives as D, Fragment as L, renderList as B, vModelSelect as I, createBlock as S, vModelText as E, createTextVNode as V, renderSlot as A } from "vue";
const b = {
  en: {
    floatText: {
      close: "Close"
    },
    contactSelector: {
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Phone",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Write your message...",
      send: "Send"
    }
  },
  es: {
    floatText: {
      close: "Cerrar"
    },
    contactSelector: {
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Teléfono",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Escribe tu mensaje...",
      send: "Enviar"
    }
  },
  fr: {
    floatText: {
      close: "Fermer"
    },
    contactSelector: {
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Téléphone",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Écrivez votre message...",
      send: "Envoyer"
    }
  },
  de: {
    floatText: {
      close: "Schließen"
    },
    contactSelector: {
      email: "📧 E-Mail",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Telefon",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Schreiben Sie Ihre Nachricht...",
      send: "Senden"
    }
  },
  pt: {
    floatText: {
      close: "Fechar"
    },
    contactSelector: {
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Telefone",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Escreva sua mensagem...",
      send: "Enviar"
    }
  },
  it: {
    floatText: {
      close: "Chiudi"
    },
    contactSelector: {
      email: "📧 Email",
      whatsapp: "📱 WhatsApp",
      telegram: "✈️ Telegram",
      phone: "📞 Telefono",
      linkedin: "💼 LinkedIn"
    },
    chatWindow: {
      placeholder: "Scrivi il tuo messaggio...",
      send: "Invia"
    }
  }
}, M = (e) => b[e] || b.en, $ = ["title"], F = /* @__PURE__ */ C({
  __name: "FloatText",
  props: {
    text: { type: String, required: !0 },
    mainColor: { type: String, default: "#00258b" },
    secondaryColor: { type: String, default: "#ffffff" },
    isDarkMode: { type: Boolean, default: !1 },
    lang: { type: String, default: "en" }
  },
  setup(e) {
    const r = e, a = g(!1), d = `float-text-dismissed-${r.text}`, n = p(() => M(r.lang)), t = p(() => ({
      background: r.isDarkMode ? "rgba(255, 255, 255, 0.1)" : r.mainColor,
      color: r.isDarkMode ? "#ffffff" : r.secondaryColor,
      backdropFilter: r.isDarkMode ? "blur(10px)" : "none",
      border: r.isDarkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), l = () => {
      a.value = !0, sessionStorage.setItem(d, "true");
    };
    return T(() => {
      sessionStorage.getItem(d) === "true" && (a.value = !0);
    }), (s, c) => e.text && !a.value ? (m(), f("div", {
      key: 0,
      class: i(["float-text-container", { "dark-mode": e.isDarkMode }])
    }, [
      o("span", {
        class: "float-text",
        style: w(t.value)
      }, v(e.text), 5),
      o("button", {
        class: i(["float-text-close", { "dark-mode": e.isDarkMode }]),
        onClick: l,
        title: n.value.floatText.close
      }, " × ", 10, $)
    ], 2)) : x("", !0);
  }
}), j = ["value"], N = /* @__PURE__ */ C({
  __name: "ContactSelector",
  props: {
    contacts: { type: Array, required: !0 },
    modelValue: { type: String, required: !0 },
    isDarkMode: { type: Boolean, default: !1 },
    lang: { type: String, default: "en" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const a = e, d = g(a.modelValue), n = p(() => M(a.lang));
    W(() => a.modelValue, (l) => {
      d.value = l;
    });
    const t = (l) => n.value.contactSelector[l] || l.charAt(0).toUpperCase() + l.slice(1);
    return (l, s) => (m(), f("div", {
      class: i(["contact-selector", { "dark-mode": e.isDarkMode }])
    }, [
      D(o("select", {
        "onUpdate:modelValue": s[0] || (s[0] = (c) => d.value = c),
        class: i(["contact-select", { "dark-mode": e.isDarkMode }]),
        onChange: s[1] || (s[1] = (c) => l.$emit("update:modelValue", d.value))
      }, [
        (m(!0), f(L, null, B(e.contacts, (c) => (m(), f("option", {
          key: c,
          value: c
        }, v(t(c)), 9, j))), 128))
      ], 34), [
        [I, d.value]
      ]),
      o("div", {
        class: i(["select-arrow", { "dark-mode": e.isDarkMode }])
      }, s[2] || (s[2] = [
        o("svg", {
          width: "12",
          height: "8",
          viewBox: "0 0 12 8",
          fill: "none"
        }, [
          o("path", {
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
}), z = { class: "message-input-container" }, q = ["maxlength", "placeholder"], U = ["disabled"], H = /* @__PURE__ */ C({
  __name: "ChatWindow",
  props: {
    contacts: { type: Array, required: !0 },
    maxChars: { type: Number, default: 200 },
    isDarkMode: { type: Boolean, default: !1 },
    lang: { type: String, default: "en" }
  },
  emits: ["send"],
  setup(e, { emit: r }) {
    const a = e, d = r, n = g(a.contacts[0]), t = g(""), l = p(() => M(a.lang)), s = () => {
      t.value.trim() && (d("send", { contact: n.value, message: t.value }), t.value = "");
    };
    return (c, u) => (m(), f("div", {
      class: i(["chat-window", { "dark-mode": e.isDarkMode }])
    }, [
      e.contacts.length > 1 ? (m(), S(N, {
        key: 0,
        contacts: e.contacts,
        modelValue: n.value,
        "onUpdate:modelValue": [
          u[0] || (u[0] = (h) => n.value = h),
          u[1] || (u[1] = (h) => n.value = h)
        ],
        isDarkMode: e.isDarkMode
      }, null, 8, ["contacts", "modelValue", "isDarkMode"])) : x("", !0),
      o("div", z, [
        D(o("textarea", {
          "onUpdate:modelValue": u[2] || (u[2] = (h) => t.value = h),
          maxlength: e.maxChars,
          class: i(["chat-textarea", { "dark-mode": e.isDarkMode }]),
          placeholder: l.value.chatWindow.placeholder,
          rows: "3"
        }, null, 10, q), [
          [E, t.value]
        ]),
        o("div", {
          class: i(["char-counter", { "dark-mode": e.isDarkMode }])
        }, v(t.value.length) + "/" + v(e.maxChars), 3)
      ]),
      o("button", {
        class: i(["chat-send", { "dark-mode": e.isDarkMode, disabled: !t.value.trim() }]),
        disabled: !t.value.trim(),
        onClick: s
      }, [
        u[3] || (u[3] = o("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none"
        }, [
          o("path", {
            d: "M22 2L11 13",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          o("path", {
            d: "M22 2L15 22L11 13L2 9L22 2Z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1)),
        V(" " + v(l.value.chatWindow.send), 1)
      ], 10, U)
    ], 2));
  }
}), Q = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none"
}, O = /* @__PURE__ */ C({
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
    autoDetectTheme: { type: Boolean, default: !0 },
    lang: { type: String, default: "en" }
  },
  emits: ["openContact", "send"],
  setup(e, { emit: r }) {
    const a = e, d = r, n = g(!1), t = g(a.darkMode), l = p(() => ({
      top: a.top,
      bottom: a.bottom,
      left: a.left,
      right: a.right,
      position: "fixed",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      zIndex: 9999
    })), s = p(() => ({
      backgroundColor: t.value ? "rgba(255, 255, 255, 0.1)" : a.mainColor,
      color: t.value ? "#ffffff" : a.secondaryColor,
      backdropFilter: t.value ? "blur(10px)" : "none",
      border: t.value ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    })), c = () => {
      a.chatInWindow ? n.value = !n.value : d("openContact");
    }, u = (k) => {
      d("send", k), n.value = !1;
    }, h = () => {
      if (a.autoDetectTheme) {
        const k = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        t.value = k;
      } else
        t.value = a.darkMode;
    };
    return T(() => {
      h(), a.autoDetectTheme && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", h);
    }), (k, y) => (m(), f("div", {
      class: i(["contact-button-wrapper", { "dark-mode": t.value }]),
      style: w(l.value)
    }, [
      e.floatText && !n.value ? (m(), S(F, {
        key: 0,
        text: e.floatText,
        mainColor: e.mainColor,
        secondaryColor: e.secondaryColor,
        isDarkMode: t.value,
        lang: e.lang
      }, null, 8, ["text", "mainColor", "secondaryColor", "isDarkMode", "lang"])) : x("", !0),
      o("button", {
        class: i(["contact-button", {
          "contact-button-close": n.value,
          "dark-mode": t.value
        }]),
        style: w(s.value),
        onClick: c
      }, [
        n.value ? (m(), f("svg", Q, y[1] || (y[1] = [
          o("path", {
            d: "M18 6L6 18M6 6l12 12",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ]))) : A(k.$slots, "default", { key: 0 }, () => [
          y[0] || (y[0] = o("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none"
          }, [
            o("path", {
              d: "M7 8h10M7 12h6m-6 8l-4-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H9l-2 2z",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            })
          ], -1))
        ])
      ], 6),
      n.value && e.chatInWindow ? (m(), S(H, {
        key: 1,
        contacts: e.contacts,
        maxChars: e.maxChars,
        isDarkMode: t.value,
        lang: e.lang,
        onSend: u
      }, null, 8, ["contacts", "maxChars", "isDarkMode", "lang"])) : x("", !0)
    ], 6));
  }
});
export {
  H as ChatWindow,
  O as ContactButton,
  N as ContactSelector,
  F as FloatText,
  M as getTranslation,
  b as translations
};
