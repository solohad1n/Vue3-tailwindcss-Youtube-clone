<template>
  <li>
    <a
      href="#"
      class="flex items-center px-3 py-2 text-sm hover:bg-gray-100"
    >
      <BaseIcon name="play" class="w-6 h-6 mr-3 text-red-500"/>
      <span>{{ label }}</span>
    </a>
  </li>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'

const props = defineProps(['label'])

</script>