<template>
  <DropdownSettingsHeader
    title="Choose your language"
    @back="$emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
        v-for="(languageName, languageId) in languages"
        :key="languageId"
        :label="languageName"
        :active="languageId === selectedOptions.language.id"
        @click="selectedOption({ id: languageId, text: languageName})"
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

const languages = ref(['English', 'Russian'])

const selectedOption = (language) => {
  emit('selectOption', {
    name: 'language',
    val: language
  })
}

</script>