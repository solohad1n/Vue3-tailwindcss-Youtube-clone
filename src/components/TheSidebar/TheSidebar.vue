<template>
  <aside
    :class="classes"
  >
    <SidebarContent/>
  </aside>
</template>

<script setup>
import SidebarContent from '@/TheSidebar/SidebarContent.vue'
import { computed } from 'vue'

const classes = computed(() => {
  return [
      'w-64',
      'max-h-screen',
      'overflow-auto',
      'fixed',
      'top-0',
      'pt-12',
      'bg-white',
      'z-20']
})
</script>