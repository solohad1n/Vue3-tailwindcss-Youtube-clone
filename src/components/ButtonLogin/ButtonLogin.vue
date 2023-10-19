<template>
  <button
    :class="classes"
  >
    <BaseIcon name="userCircle" class="mr-2 w-7 h-7"/>
    Sign In
  </button>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed, useAttrs } from 'vue'
const attrs = useAttrs()

const classes = computed(() => {
  return attrs.class || 'focus:outline-none flex items-center whitespace-nowrap px-2 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm'
})

</script>
