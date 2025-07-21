<template>
  <div class="chat-window" :class="{ 'dark-mode': isDarkMode }">
    <ContactSelector
      v-if="contacts.length > 1"
      :contacts="contacts"
      v-model="selectedContact"
      :isDarkMode="isDarkMode"
      @update:modelValue="selectedContact = $event"
    />

    <div class="message-input-container">
      <textarea
        v-model="message"
        :maxlength="maxChars"
        class="chat-textarea"
        :class="{ 'dark-mode': isDarkMode }"
        :placeholder="t.chatWindow.placeholder"
        rows="3"
      />
      <div class="char-counter" :class="{ 'dark-mode': isDarkMode }">
        {{ message.length }}/{{ maxChars }}
      </div>
    </div>

    <button
      class="chat-send"
      :class="{ 'dark-mode': isDarkMode, 'disabled': !message.trim() }"
      :disabled="!message.trim()"
      @click="handleSend"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ t.chatWindow.send }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue'
import ContactSelector from './ContactSelector.vue'
import { getTranslation } from '../utils/i18n'

const props = defineProps({
  contacts: { type: Array as () => string[], required: true },
  maxChars: { type: Number, default: 200 },
  isDarkMode: { type: Boolean, default: false },
  lang: { type: String, default: 'en' }
})

const emit = defineEmits(['send'])

const selectedContact = ref(props.contacts[0])
const message = ref('')
const t = computed(() => getTranslation(props.lang))

const handleSend = () => {
  if (message.value.trim()) {
    emit('send', { contact: selectedContact.value, message: message.value })
    message.value = ''
  }
}
</script>
