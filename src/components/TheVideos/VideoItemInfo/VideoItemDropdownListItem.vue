<template>
  <li>
    <a
      href="#"
      class="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200"
    >
      <BaseIcon :name="icon" class="w-5 h-5 mr-4 text-gray-400"/>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'

const props = defineProps({
  icon: String,
  label: String
})
</script>