<template>
  <div
    class="contact-button-wrapper"
    :class="{ 'dark-mode': isDarkMode }"
    :style="wrapperStyle"
  >
    <FloatText
      v-if="floatText && !showChat"
      :text="floatText"
      :mainColor="mainColor"
      :secondaryColor="secondaryColor"
      :isDarkMode="isDarkMode"
      :lang="lang"
    />

    <button
      class="contact-button"
      :class="{
        'contact-button-close': showChat,
        'dark-mode': isDarkMode,
      }"
      :style="buttonStyle"
      @click="handleClick"
    >
      <slot v-if="!showChat">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 8h10M7 12h6m-6 8l-4-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H9l-2 2z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 6L6 18M6 6l12 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <ChatWindow
      v-if="showChat && chatInWindow"
      :contacts="contacts"
      :maxChars="maxChars"
      :isDarkMode="isDarkMode"
      :lang="lang"
      @send="handleSend"
    />
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  computed,
  onMounted,
  CSSProperties,
} from "vue";
import FloatText from "./FloatText.vue";
import ChatWindow from "./ChatWindow.vue";

const props = defineProps({
  label: { type: String, default: "" },
  chatInWindow: { type: Boolean, default: true },
  contacts: { type: Array as () => string[], default: () => ["email"] },
  floatText: { type: String, default: "" },
  top: { type: String, default: "" },
  bottom: { type: String, default: "1.5rem" },
  left: { type: String, default: "" },
  right: { type: String, default: "1.5rem" },
  mainColor: { type: String, default: "#3b82f6" },
  secondaryColor: { type: String, default: "#ffffff" },
  maxChars: { type: Number, default: 200 },
  darkMode: { type: Boolean, default: false },
  autoDetectTheme: { type: Boolean, default: true },
  lang: { type: String, default: "en" },
});

const emit = defineEmits(["openContact", "send"]);

const showChat = ref(false);
const isDarkMode = ref(props.darkMode);

const wrapperStyle = computed<CSSProperties>(() => ({
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  position: "fixed",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  zIndex: 9999,
}));

const buttonStyle = computed(() => ({
  backgroundColor: isDarkMode.value
    ? "rgba(255, 255, 255, 0.1)"
    : props.mainColor,
  color: isDarkMode.value ? "#ffffff" : props.secondaryColor,
  backdropFilter: isDarkMode.value ? "blur(10px)" : "none",
  border: isDarkMode.value ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
}));

const handleClick = () => {
  if (props.chatInWindow) {
    showChat.value = !showChat.value;
  } else {
    emit("openContact");
  }
};

const handleSend = (data: { contact: string; message: string }) => {
  emit("send", data);
  showChat.value = false;
};

const detectTheme = () => {
  if (props.autoDetectTheme) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    isDarkMode.value = prefersDark;
  } else {
    isDarkMode.value = props.darkMode;
  }
};

onMounted(() => {
  detectTheme();

  if (props.autoDetectTheme) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", detectTheme);
  }
});
</script>
