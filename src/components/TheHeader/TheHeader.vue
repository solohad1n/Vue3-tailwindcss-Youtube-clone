<template>
  <header :class="classes">
    <div
      :class="[
        'lg:w-1/4',
        'flex',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button
          @click="$emit('toggleSidebar')"
          class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
        >
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
    />
    <div
      :class="[
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        isMobileSearchShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button
          @click.stop="isMobileSearchActive = true"
          class="sm:hidden p-2 focus:outline-none"
        >
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import LogoMain from './LogoMain.vue'
import ButtonLogin from '@/ButtonLogin/ButtonLogin.vue'
import TheSearchWrapper from '@/TheHeader/TheSearch/TheSearchWrapper.vue'
import TheDropdownApps from '@/TheHeader/TheDropdownApps/TheDropdownApps.vue'
import TheDropdownSettings from '@/TheHeader/TheDropdownSettings/TheDropdownSettings.vue'
import { computed, onMounted, provide, ref } from 'vue'

const isSmallScreen = ref(false)
const isMobileSearchActive = ref(false)
const classes = [
  'flex',
  'justify-between',
  'w-full',
  'bg-white',
  'bg-opacity-95'
]
provide('isMobileSearchActive', isMobileSearchActive)

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})


const onResize = () => {
  if (window.innerWidth < 640) {
    isSmallScreen.value = true
    return
  }

  closeMobileSearch()
  isSmallScreen.value = false
}

const closeMobileSearch = () => {
  isMobileSearchActive.value = false
}


const isSearchShown = computed(() => {
  return isMobileSearchShown.value || !isSmallScreen.value
})

const isMobileSearchShown = computed(() => {
  return isSmallScreen.value && isMobileSearchActive.value
})

</script>