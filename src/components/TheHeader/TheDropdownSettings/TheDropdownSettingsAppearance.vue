<template>
  <section class="flex border-b border-gray-200 text-black">
    <button class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" />
    </button>
    <span class="py-3">Appearance</span>
  </section>
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="theme, i in themes"
        :key="theme"
        :label="theme"
        :active="i == selectThemeId"
        @click="selectThemeId = i"
      />
    </ul>
  </section>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import BaseIcon from '@/Icon/BaseIcon.vue'
import { ref } from 'vue'

const selectThemeId = ref(0)
const themes = [ 'Use device theme', 'Dark theme', 'Light theme']
</script>