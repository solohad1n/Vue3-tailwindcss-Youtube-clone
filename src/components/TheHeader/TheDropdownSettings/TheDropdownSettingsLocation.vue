<template>
  <DropdownSettingsHeader
    title="Choose your location"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(locationName, locationId) in locations"
        :key="locationId"
        :label="locationName"
        :active="locationId === selectedOptions.location.id"
        @click="selectedOption({ id: locationId, text: locationName})"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import useDropdownSubmenu from '../../../composables/useDropdownSubmenu.js'

const props = defineProps(['selectedOptions'])
const emit = defineEmits(['selectOption'])

const locations = ref(['United States', 'Russia', 'Bora Bora', 'Ukraine', 'Bora Bora', 'Bora Bora', 'Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora',])
const optionName = 'location'

const selectedOption = (option) => {
  const { selectedOption } = useDropdownSubmenu()
  selectedOption(option, optionName, emit)
}
</script>