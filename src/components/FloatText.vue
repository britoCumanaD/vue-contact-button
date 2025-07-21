<template>
  <div
    v-if="text && !isDismissed"
    class="float-text-container"
    :class="{ 'dark-mode': isDarkMode }"
  >
    <span class="float-text" :style="floatTextStyle">
      {{ text }}
    </span>
    <button
      class="float-text-close"
      @click="dismissFloatText"
      :class="{ 'dark-mode': isDarkMode }"
      :title="t.floatText.close"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, onMounted } from 'vue'
import { getTranslation } from '../utils/i18n'

const props = defineProps({
  text: { type: String, required: true },
  mainColor: { type: String, default: '#00258b' },
  secondaryColor: { type: String, default: '#ffffff' },
  isDarkMode: { type: Boolean, default: false },
  lang: { type: String, default: 'en' }
})

const isDismissed = ref(false)
const storageKey = `float-text-dismissed-${props.text}`
const t = computed(() => getTranslation(props.lang))

const floatTextStyle = computed(() => ({
  background: props.isDarkMode 
    ? 'rgba(255, 255, 255, 0.1)' 
    : props.mainColor,
  color: props.isDarkMode 
    ? '#ffffff' 
    : props.secondaryColor,
  backdropFilter: props.isDarkMode ? 'blur(10px)' : 'none',
  border: props.isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
}))

const dismissFloatText = () => {
  isDismissed.value = true
  sessionStorage.setItem(storageKey, 'true')
}

onMounted(() => {
  const dismissed = sessionStorage.getItem(storageKey)
  if (dismissed === 'true') {
    isDismissed.value = true
  }
})
</script>
