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

const props = defineProps({
  isOpen: Boolean
})

const classes = computed(() => {
  return [
    props.isOpen ? 'xl:block' : 'hidden',
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