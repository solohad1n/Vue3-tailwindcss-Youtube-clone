<template>
  <TheHeader @toggleSidebar="toggleSidebar"/>
  <TheSidebarCompact v-if="isCompactSidebarOpen"/>
  <TheSidebar v-if="isSidebarOpen"/>
  <TheSidebarMobile :isOpen="isMobileSidebarOpen" @close="closeSidebarMobile"/>
  <TheCategories :isSidebarOpen="isSidebarOpen"/>
  <TheVideos :isSidebarOpen="isSidebarOpen"/>
</template>

<script setup>
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheSidebarCompact from './components/TheSidebarCompact/TheSidebarCompact.vue'
import TheSidebar from './components/TheSidebar/TheSidebar.vue'
import TheSidebarMobile from './components/TheSidebarMobile/TheSidebarMobile.vue'
import TheCategories from './components/TheCategories/TheCategories.vue'
import TheVideos from './components/TheVideos/TheVideos.vue'
import { onMounted, ref } from 'vue'

const isCompactSidebarActive = ref(false)
const isCompactSidebarOpen = ref(false)
const isMobileSidebarOpen = ref(false)
const isSidebarOpen = ref(false)

onMounted(() => {

  onResize()

  window.addEventListener('resize', onResize)
})

const toggleSidebar = () => {
  if(window.innerWidth >= 1280) {
    isCompactSidebarActive.value = !isCompactSidebarActive.value
    onResize()
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

const onResize = () => {
  if (window.innerWidth < 768) {
    isCompactSidebarOpen.value = false
    isSidebarOpen.value = false
  } else if (window.innerWidth < 1280) {
    isCompactSidebarOpen.value = true
    isSidebarOpen.value = false
  } else {
    isCompactSidebarOpen.value = isCompactSidebarActive.value
    isSidebarOpen.value = !isCompactSidebarActive.value
    isMobileSidebarOpen.value = false
  }
}

</script>