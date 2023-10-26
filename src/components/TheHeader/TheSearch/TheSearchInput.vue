<template>
  <div class="relative w-full">
    <input type="text" placeholder="Search" :class="classes" />
    <button class="absolute top-0 right-0 h-full px-3 focus:outline-none">
      <BaseIcon name="x" class="w-5 w-5" />
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BaseIcon from '@/Icon/BaseIcon.vue'

const inputFocus = ref(null)

const classes = [
  'w-full',
  'h-full',
  'px-3',
  'shadow-inner',
  'rounded-bl-sm',
  'rounded-tl-sm',
  'border',
  'border-gray-300',
  'focus:border-blue-700',
  'focus:outline-none'
]

onMounted(() => {
  if(window.innerWidth < 640) {
    inputFocus.value.focus()
  }
})
</script>