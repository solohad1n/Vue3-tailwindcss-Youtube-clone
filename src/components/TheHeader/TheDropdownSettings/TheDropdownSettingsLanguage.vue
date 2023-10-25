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
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'

const selectedLanguageId = ref(0)
const languages = ref(['English', 'Russian'])
</script>