<template>
  <div class="contact-selector" :class="{ 'dark-mode': isDarkMode }">
    <select 
      v-model="selectedContact" 
      class="contact-select"
      :class="{ 'dark-mode': isDarkMode }"
      @change="$emit('update:modelValue', selectedContact)"
    >
      <option
        v-for="option in contacts"
        :key="option"
        :value="option"
      >
        {{ formatContactOption(option) }}
      </option>
    </select>
    <div class="select-arrow" :class="{ 'dark-mode': isDarkMode }">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  contacts: { type: Array as () => string[], required: true },
  modelValue: { type: String, required: true },
  isDarkMode: { type: Boolean, default: false }
})

const emit = defineEmits(['update:modelValue'])

const selectedContact = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  selectedContact.value = newValue
})

const formatContactOption = (option: string) => {
  const formatMap: Record<string, string> = {
    'email': '📧 Email',
    'whatsapp': '📱 WhatsApp',
    'telegram': '✈️ Telegram',
    'phone': '📞 Teléfono',
    'linkedin': '💼 LinkedIn'
  }
  return formatMap[option] || option.charAt(0).toUpperCase() + option.slice(1)
}
</script>

<style scoped>
.contact-selector {
  position: relative;
  margin-bottom: 1rem;
}

.contact-select {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  background: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.contact-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.contact-select:hover {
  border-color: #d1d5db;
}

.contact-select.dark-mode {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.contact-select.dark-mode:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}

.contact-select.dark-mode:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #6b7280;
  transition: color 0.3s ease;
}

.select-arrow.dark-mode {
  color: #d1d5db;
}

@media (max-width: 768px) {
  .contact-select {
    padding: 0.625rem 2rem 0.625rem 0.875rem;
    font-size: 0.8rem;
  }
  
  .select-arrow {
    right: 0.75rem;
  }
}
</style>