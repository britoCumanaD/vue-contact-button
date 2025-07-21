<template>
  <div
    class="contact-button-wrapper"
    :class="{ 'dark-mode': isDarkMode }"
    :style="wrapperStyle"
  >
    <FloatText
      v-if="floatText"
      :text="floatText"
      :mainColor="mainColor"
      :secondaryColor="secondaryColor"
      :isDarkMode="isDarkMode"
    />

    <button
      class="contact-button"
      :class="{ 
        'contact-button-close': showChat,
        'dark-mode': isDarkMode 
      }"
      :style="buttonStyle"
      @click="handleClick"
    >
      <slot v-if="!showChat">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M7 8h10M7 12h6m-6 8l-4-4H3a1 1 0 01-1-1V5a1 1 0 011-1h18a1 1 0 011 1v10a1 1 0 01-1 1H9l-2 2z" 
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </slot>
      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <ChatWindow
      v-if="showChat && chatInWindow"
      :contacts="contacts"
      :maxChars="maxChars"
      :isDarkMode="isDarkMode"
      @send="handleSend"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, onMounted } from 'vue'
import FloatText from './FloatText.vue'
import ChatWindow from './ChatWindow.vue'

const props = defineProps({
  label: { type: String, default: '' },
  chatInWindow: { type: Boolean, default: true },
  contacts: { type: Array as () => string[], default: () => ['email'] },
  floatText: { type: String, default: '' },
  top: { type: String, default: '' },
  bottom: { type: String, default: '1.5rem' },
  left: { type: String, default: '' },
  right: { type: String, default: '1.5rem' },
  mainColor: { type: String, default: '#3b82f6' },
  secondaryColor: { type: String, default: '#ffffff' },
  maxChars: { type: Number, default: 200 },
  darkMode: { type: Boolean, default: false },
  autoDetectTheme: { type: Boolean, default: true }
})

const emit = defineEmits(['openContact', 'send'])

const showChat = ref(false)
const isDarkMode = ref(props.darkMode)

const wrapperStyle = computed(() => ({
  top: props.top,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  zIndex: 9999,
}))

const buttonStyle = computed(() => ({
  backgroundColor: isDarkMode.value 
    ? 'rgba(255, 255, 255, 0.1)' 
    : props.mainColor,
  color: isDarkMode.value 
    ? '#ffffff' 
    : props.secondaryColor,
  backdropFilter: isDarkMode.value ? 'blur(10px)' : 'none',
  border: isDarkMode.value ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
}))

const handleClick = () => {
  if (props.chatInWindow) {
    showChat.value = !showChat.value
  } else {
    emit('openContact')
  }
}

const handleSend = (data: { contact: string; message: string }) => {
  emit('send', data)
  showChat.value = false
}

const detectTheme = () => {
  if (props.autoDetectTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDark
  } else {
    isDarkMode.value = props.darkMode
  }
}

onMounted(() => {
  detectTheme()
  
  if (props.autoDetectTheme) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', detectTheme)
  }
})
</script>

<style scoped>
.contact-button-wrapper {
  transform: translateY(0);
  transition: transform 0.4s ease-out;
}

.contact-button {
  padding: 1rem;
  border: none;
  font-size: 16px;
  transition: all 0.3s ease;
  border-radius: 50%;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.contact-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.contact-button:hover::before {
  transform: translateX(100%);
}

.contact-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.contact-button:active {
  transform: translateY(-1px) scale(1.02);
}

.contact-button-close {
  width: 40px;
  height: 40px;
  position: absolute;
  top: -8px;
  left: -16px;
  background: #ef4444 !important;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
}

.contact-button-close:hover {
  background: #dc2626 !important;
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.5);
}

.contact-button.dark-mode {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.contact-button.dark-mode:hover {
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .contact-button {
    width: 48px;
    height: 48px;
    padding: 0.875rem;
  }
  
  .contact-button-close {
    width: 36px;
    height: 36px;
    top: -6px;
    left: -12px;
  }
  
  .contact-button-wrapper {
    gap: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-button,
  .contact-button::before,
  .contact-button-wrapper {
    transition: none;
  }
}
</style>