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
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, onMounted } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  mainColor: { type: String, default: '#00258b' },
  secondaryColor: { type: String, default: '#ffffff' },
  isDarkMode: { type: Boolean, default: false }
})

const isDismissed = ref(false)
const storageKey = `float-text-dismissed-${props.text}`

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

<style scoped>
.float-text-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideIn 0.3s ease-out;
}

.float-text {
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.float-text:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.float-text-close {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.float-text-close:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}

.float-text-close.dark-mode {
  background: rgba(255, 255, 255, 0.1);
  color: #ccc;
}

.float-text-close.dark-mode:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .float-text {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
  }
  
  .float-text-close {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
}
</style>