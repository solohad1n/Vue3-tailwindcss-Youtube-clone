<template>
  <TheHeader @openMobileSidebar="openMobileSidebar"/>
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile :isOpen="isMobileSidebarOpen" @close="closeSidebarMobile"/>
  <TheCategories />
  <TheVideos />
</template>

<script setup>
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheSidebarSmall from './components/TheSidebarSmall.vue'
import TheSidebar from './components/TheSidebar/TheSidebar.vue'
import TheSidebarMobile from './components/TheSidebarMobile/TheSidebarMobile.vue'
import TheCategories from './components/TheCategories/TheCategories.vue'
import TheVideos from './components/TheVideos/TheVideos.vue'
import { ref } from 'vue'

const isMobileSidebarOpen = ref(false)

const openMobileSidebar = () => {
  isMobileSidebarOpen.value = true
}

const closeSidebarMobile = () => {
  isMobileSidebarOpen.value = false
}
</script>