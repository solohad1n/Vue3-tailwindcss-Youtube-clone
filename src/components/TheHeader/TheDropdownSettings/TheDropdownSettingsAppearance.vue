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
        :active="i == selectedOptions.theme.id"
        @click="selectedOption({ id: i, text: theme })"
      />
    </ul>
  </section>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import useDropdownSubmenu from '../../../composables/useDropdownSubmenu.js'

const props = defineProps(['selectedOptions'])
const emit = defineEmits(['selectOption'])

const themes = [ 'Use device theme', 'Dark theme', 'Light theme']
const optionName = 'theme'

const selectedOption = (option) => {
  const { selectedOption } = useDropdownSubmenu()
  selectedOption(option, optionName, emit)
}
</script>