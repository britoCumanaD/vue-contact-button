import "@/style/contact-button.css";
import "@/style/float-text.css";
import "@/style/contact-selector.css";
import "@/style/chat-window.css";

export { default as ContactButton } from "./components/ContactButton.vue";
export { default as FloatText } from "./components/FloatText.vue";
export { default as ChatWindow } from "./components/ChatWindow.vue";
export { default as ContactSelector } from "./components/ContactSelector.vue";
export { getTranslation, translations } from "./utils/i18n";
export type { Translations } from "./utils/i18n";
