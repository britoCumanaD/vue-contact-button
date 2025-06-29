import { defineComponent as l, createElementBlock as r, openBlock as a, normalizeStyle as p, toDisplayString as s } from "vue";
const u = /* @__PURE__ */ l({
  __name: "ContactButton",
  props: {
    label: {},
    color: {}
  },
  emits: ["openContact"],
  setup(i, { emit: e }) {
    const n = e;
    return (t, o) => (a(), r("button", {
      class: "fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-md text-white",
      style: p({ backgroundColor: t.color }),
      onClick: o[0] || (o[0] = (c) => n("openContact"))
    }, s(t.label), 5));
  }
});
export {
  u as ContactButton,
  u as default
};
