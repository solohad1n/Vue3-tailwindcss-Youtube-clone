<template>
  <aside
    :class="classes"
  >
    <section>
      <ul>
        <SidebarCompactNavItem
          v-for="navItem in navItems"
          :key="navItem.label"
          :label="navItem.label"
          :icon="navItem.icon"
          :is-active="navItem.isActive"
        />
      </ul>
    </section>
  </aside>
</template>
<script setup>
import SidebarCompactNavItem from './SidebarCompactNavItem.vue'
import { computed } from "vue"

const classes = computed(() => {
  return [
      'min-h-screen',
      'overflow-auto',
      'fixed',
      'top-0',
      'pt-14',
      'bg-white',
      'z-20']
})

const navItems = [
        {
          label: 'Home',
          icon: 'home',
          isActive: true
        },
        {
          label: 'Trending',
          icon: 'fire',
          isActive: false
        },
        {
          label: 'Subscriptions',
          icon: 'collection',
          isActive: false
        },
        {
          label: 'Library',
          icon: 'duplicate',
          isActive: false
        },
        {
          label: 'History',
          icon: 'clock',
          isActive: false
        }
      ]
</script>