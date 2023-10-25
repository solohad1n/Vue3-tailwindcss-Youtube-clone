<template>
  <DropdownSettingsHeader
    title="Restricted Mode"
    @back="$emit('select-menu', 'main')"
  />
  <section class="px-3 py-4 space-y-4 text-black text-sm">
    <p>
      This helps hide potentially mature videos. No filter is 100% accurate.
    </p>
    <p>
      This setting only applies to this browser.
    </p>
    <div class="text-gray-600 font-semibold flex items-center">
      <span class="uppercase mr-2">Activate restricted mode</span>
      <input type="checkbox" :checked="selectedOptions.restrictedMode" @input="selectedOption"/>
    </div>
  </section>
</template>

<script setup>
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'

const props = defineProps(['selectedOptions'])
const emit = defineEmits(['selectOption'])

const selectedOption = ($event) => {
  emit('selectOption', {
    name: 'restrictedMode',
    val: $event.target.checked
  })
}
</script>