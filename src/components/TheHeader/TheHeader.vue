<template>
  <header class="flex justify-between fixed z-30 w-full">
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button @click="$emit('toggleSidebar')" class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <BaseIcon name="menu"/>
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchMobile/>
    <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md"
    >
      <TheSearch />
      <BaseTooltip text="Search with your voice">
        <button class="p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
    <div
      class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <TheDropdownApps/>
      <TheDropdownSettings/>
      <ButtonLogin/>
    </div>
  </header>
</template>

<script setup>
import TheDropdownApps from '@/TheHeader/TheDropdownApps/TheDropdownApps.vue'
import TheDropdownSettings from '@/TheHeader/TheDropdownSettings/TheDropdownSettings.vue'
import LogoMain from '@/TheHeader/LogoMain.vue'
import ButtonLogin from '@/ButtonLogin/ButtonLogin.vue'
import TheSearch from '@/TheHeader/TheSearch/TheSearch.vue'
import BaseIcon from '@/Icon/BaseIcon.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import TheSearchMobile from './TheSearch/TheSearchMobile.vue'
</script>