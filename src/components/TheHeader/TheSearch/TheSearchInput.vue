<template>
  <input
    ref="inputFocus"
    type="text"
    placeholder="Search"
    :class="classes"
  />
</template>

<script setup>
import { onMounted, ref } from "vue";

const inputFocus = ref(null)

const classes = [
  'w-full',
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