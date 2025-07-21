<template>
  <div
    class="contact-button-wrapper"
    :style="{
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 9999,
    }"
  >
    <slot name="floatText" v-if="floatText && !showChat">
      <span class="float-text" :style="floatTextStyle">{{ floatText }}</span>
    </slot>

    <button
      class="contact-button"
      :style="{
        backgroundColor: mainColor,
        color: secondaryColor,
      }"
      :class="{ 'contact-button-close': showChat }"
      @click="handleClick"
    >
      <slot v-if="!showChat">
        <img src="@/assets/Contact.svg" width="28" height="28" />
      </slot>
      <img v-else src="@/assets/Close.svg" width="14" height="14" />
    </button>

    <div v-if="showChat && chatInWindow" class="chat-window">
      <div v-if="contacts.length > 1" class="contact-options">
        <select class="contact-radio" v-model="selectedContact">
          <option
            v-for="option in contacts"
            :key="option"
            :value="option"
            v-text="option"
          />
        </select>
      </div>

      <textarea
        v-model="message"
        :maxlength="maxChars"
        class="chat-textarea"
        placeholder="Escribe tu mensaje..."
      />
      <button
        class="chat-send"
        @click="emit('send', { contact: selectedContact, message })"
      >
        Enviar
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  chatInWindow: { type: Boolean, default: true },
  contacts: { type: Array as () => string[], default: () => ["email"] },
  floatText: { type: String, default: "" },
  top: { type: String, default: "" },
  bottom: { type: String, default: "1rem" },
  left: { type: String, default: "" },
  right: { type: String, default: "1rem" },
  mainColor: { type: String, default: "#00258b" },
  secondaryColor: { type: String, default: "#000000" },
  maxChars: { type: Number, default: 200 },
});

const emit = defineEmits(["openContact", "send"]);

const showChat = ref(false);
const selectedContact = ref(props.contacts[0]);
const message = ref("");

const floatTextStyle = computed(() => {
  return {
    background: props.mainColor,
    color: props.secondaryColor,
    padding: "0.25rem 0.5rem",
    borderRadius: "0.25rem",
    whiteSpace: "nowrap",
  };
});

const handleClick = () => {
  if (props.chatInWindow) {
    showChat.value = !showChat.value;
  } else {
    emit("openContact");
  }
};
</script>
