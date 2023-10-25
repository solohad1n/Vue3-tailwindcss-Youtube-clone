<template>
  <DropdownSettingsHeader
  @back="$emit('select-menu', 'main')"
  title="Appearance"
  />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">
      Setting applies to this browser only
    </div>
    <ul>
      <DropdownSettingsListItem
        v-for="theme, i in themes"
        :key="theme"
        :label="theme"
        :active="i == selectedOptions.themeId"
        @click="selectedOption(i)"
      />
    </ul>
  </section>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'

const props = defineProps(['selectedOptions'])
const emit = defineEmits(['selectOption'])

const themes = [ 'Use device theme', 'Dark theme', 'Light theme']

const selectedOption = (themeId) => {
  emit('selectOption', {
    name: 'themeId',
    val: themeId
  })
}
</script>