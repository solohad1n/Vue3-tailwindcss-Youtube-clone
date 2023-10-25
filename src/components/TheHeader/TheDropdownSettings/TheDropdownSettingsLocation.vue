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
        :active="locationId === selectedOptions.locationId"
        @click="selectedOption(locationId)"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

const props = defineProps(['selectedOptions'])
const emit = defineEmits(['selectOption'])

const locations = ref(['United States', 'Russia', 'Bora Bora', 'Ukraine', 'Bora Bora', 'Bora Bora', 'Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora',])

const selectedOption = (locationId) => {
  emit('selectOption', {
    name: 'locationId',
    val: locationId
  })
}
</script>