import { defineComponent as C, ref as d, computed as k, createElementBlock as n, openBlock as l, normalizeStyle as u, renderSlot as v, createCommentVNode as m, createElementVNode as s, toDisplayString as f, normalizeClass as b, withDirectives as y, Fragment as S, renderList as L, vModelSelect as B, vModelText as T } from "vue";
const I = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke='currentColor'%20stroke-width='1.5'%20%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M7%208h10M7%2012h6m-6%208l-4-4H3a1%201%200%2001-1-1V5a1%201%200%20011-1h18a1%201%200%20011%201v10a1%201%200%2001-1%201H9l-2%202z'%20/%3e%3c/svg%3e", M = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2050%2050'%20width='50px'%20height='50px'%3e%3cpath%20d='M%209.15625%206.3125%20L%206.3125%209.15625%20L%2022.15625%2025%20L%206.21875%2040.96875%20L%209.03125%2043.78125%20L%2025%2027.84375%20L%2040.9375%2043.78125%20L%2043.78125%2040.9375%20L%2027.84375%2025%20L%2043.6875%209.15625%20L%2040.84375%206.3125%20L%2025%2022.15625%20Z'/%3e%3c/svg%3e", V = {
  key: 1,
  src: M,
  width: "14",
  height: "14"
}, z = {
  key: 1,
  class: "chat-window"
}, E = {
  key: 0,
  class: "contact-options"
}, N = ["value", "textContent"], W = ["maxlength"], j = /* @__PURE__ */ C({
  __name: "ContactButton",
  props: {
    label: { type: String, default: "" },
    chatInWindow: { type: Boolean, default: !0 },
    contacts: { type: Array, default: () => ["email"] },
    floatText: { type: String, default: "" },
    top: { type: String, default: "" },
    bottom: { type: String, default: "1rem" },
    left: { type: String, default: "" },
    right: { type: String, default: "1rem" },
    mainColor: { type: String, default: "#00258b" },
    secondaryColor: { type: String, default: "#000000" },
    maxChars: { type: Number, default: 200 }
  },
  emits: ["openContact", "send"],
  setup(t, { emit: x }) {
    const r = t, g = x, a = d(!1), c = d(r.contacts[0]), i = d(""), p = k(() => ({
      background: r.mainColor,
      color: r.secondaryColor,
      padding: "0.25rem 0.5rem",
      borderRadius: "0.25rem",
      whiteSpace: "nowrap"
    })), w = () => {
      r.chatInWindow ? a.value = !a.value : g("openContact");
    };
    return (h, e) => (l(), n("div", {
      class: "contact-button-wrapper",
      style: u({
        top: t.top,
        bottom: t.bottom,
        left: t.left,
        right: t.right,
        position: "fixed",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 9999
      })
    }, [
      t.floatText && !a.value ? v(h.$slots, "floatText", { key: 0 }, () => [
        s("span", {
          class: "float-text",
          style: u(p.value)
        }, f(t.floatText), 5)
      ]) : m("", !0),
      s("button", {
        class: b(["contact-button", { "contact-button-close": a.value }]),
        style: u({
          backgroundColor: t.mainColor,
          color: t.secondaryColor
        }),
        onClick: w
      }, [
        a.value ? (l(), n("img", V)) : v(h.$slots, "default", { key: 0 }, () => [
          e[3] || (e[3] = s("img", {
            src: I,
            width: "28",
            height: "28"
          }, null, -1))
        ])
      ], 6),
      a.value && t.chatInWindow ? (l(), n("div", z, [
        t.contacts.length > 1 ? (l(), n("div", E, [
          y(s("select", {
            class: "contact-radio",
            "onUpdate:modelValue": e[0] || (e[0] = (o) => c.value = o)
          }, [
            (l(!0), n(S, null, L(t.contacts, (o) => (l(), n("option", {
              key: o,
              value: o,
              textContent: f(o)
            }, null, 8, N))), 128))
          ], 512), [
            [B, c.value]
          ])
        ])) : m("", !0),
        y(s("textarea", {
          "onUpdate:modelValue": e[1] || (e[1] = (o) => i.value = o),
          maxlength: t.maxChars,
          class: "chat-textarea",
          placeholder: "Escribe tu mensaje..."
        }, null, 8, W), [
          [T, i.value]
        ]),
        s("button", {
          class: "chat-send",
          onClick: e[2] || (e[2] = (o) => g("send", { contact: c.value, message: i.value }))
        }, " Enviar ")
      ])) : m("", !0)
    ], 4));
  }
});
export {
  j as ContactButton
};
