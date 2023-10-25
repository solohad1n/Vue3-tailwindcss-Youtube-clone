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
        :active="locationId === selectedLocationId"
        @click="selectedLocationId = locationId"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

const selectedLocationId = ref(0)
const locations = ref(['United States', 'Russia', 'Bora Bora', 'Ukraine', 'Bora Bora', 'Bora Bora', 'Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora', 'Bora Bora',])

</script>