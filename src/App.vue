<template>
  <TheHeader @toggleSidebar="toggleSidebar"/>
  <TheSidebarSmall :isOpen="sidebarState == 'compact'"/>
  <TheSidebar :isOpen="sidebarState == 'normal'"/>
  <TheSidebarMobile :isOpen="isMobileSidebarOpen" @close="closeSidebarMobile"/>
  <TheCategories :isSidebarOpen="sidebarState == 'normal'"/>
  <TheVideos :isSidebarOpen="sidebarState == 'normal'"/>
</template>

<script setup>
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheSidebarSmall from './components/TheSidebarSmall.vue'
import TheSidebar from './components/TheSidebar/TheSidebar.vue'
import TheSidebarMobile from './components/TheSidebarMobile/TheSidebarMobile.vue'
import TheCategories from './components/TheCategories/TheCategories.vue'
import TheVideos from './components/TheVideos/TheVideos.vue'
import { onMounted, ref } from 'vue'

const isMobileSidebarOpen = ref(false)
const sidebarState = ref(null)

onMounted(() => {
  if(window.innerWidth >= 768 && window.innerWidth < 1280) {
    sidebarState.value = 'compact'
  }
  if(window.innerWidth >= 1280) {
    sidebarState.value = 'normal'
  }
})

const toggleSidebar = () => {
  if(window.innerWidth >= 1280) {
    sidebarState.value = sidebarState.value === 'normal' ? 'compact' : 'normal'
  } else {
    openMobileSidebar()
  }
}

const openMobileSidebar = () => {
  isMobileSidebarOpen.value = true
}

const closeSidebarMobile = () => {
  isMobileSidebarOpen.value = false
}

</script>