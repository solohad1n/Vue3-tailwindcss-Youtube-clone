<template>
  <li>
    <a
      href="#"
      :class="classes"
    >
    <BaseIcon :name="icon" :class="iconClasses" />
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  isActive: Boolean,
  icon: String,
  label: String
})

const classes = computed(() => {
  const classes = ['flex', 'items-center', 'px-6', 'py-2', 'text-sm']
  return props.isActive
    ? [...classes, 'font-medium', 'text-gray-800', 'bg-gray-200', 'hover:bg-gray-300']
    : [...classes, 'hover:bg-gray-100']
})

const iconClasses = computed(() => {
  return props.isActive
    ? 'w-6 h-6 mr-6 text-red-500'
    : 'w-6 h-6 mr-6'
})

</script>

<style>

</style>