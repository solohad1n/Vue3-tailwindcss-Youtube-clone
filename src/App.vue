<template>
  <TheHeader />
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile />
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
</script>