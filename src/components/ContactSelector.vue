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
