<template>
    <button
        class="fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-md text-white"
        :style="{ backgroundColor: color }"
        @click="emit('openContact')"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
    const props = defineProps<{
    label?: string
    color?: string
    }>()

    const emit = defineEmits(['openContact'])
</script>
