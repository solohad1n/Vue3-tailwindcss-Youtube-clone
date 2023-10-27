<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <TheModalSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="searchPredictions"
    />
    <p class="text-xs text-gray-600 mt-5">The selected predictions are:</p>
    <div class="space-y-3 text-black text-sm mt-5">
      <div
        v-for="(label, index) in searchPredictionCategories"
        :key="label"
        class="flex items-center"
      >
        <input
          type="radio"
          class="h-5 w-5 cursor-pointer"
          :id="`search-prediction-category-${index}`"
          :value="label"
          v-model="selectedSearchPredictionCategory"
        />
        <label
          :for="`search-prediction-category-${index}`"
          class="pl-4 cursor-pointer flex-grow"
          >{{ label }}</label
        >
      </div>
    </div>
    <div class="text-black text-sm mt-6">
      <textarea
        v-bind="$attrs"
        v-model="searchPredictionDetails"
        placeholder="Provide additional details (optional)"
        class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none"
      />
    </div>
    <template #footer="slotProps">
      <button
        @click="slotProps.close"
        class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 ml-auto mr-1 focus:outline-none"
      >
        Cancel
      </button>
      <button
        class="uppercase text-sm font-medium tracking-wider py-2.5 px-4 ml-1 mr-1 focus:outline-none text-gray-400 cursor-auto"
        disabled
      >
        Report
      </button>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from '@/BaseModal/BaseModal.vue'
import TheModalSearchPredictionsList from './TheModalSearchPredictionsList.vue'
import { ref } from 'vue'

const props = defineProps({
  searchPredictions: Array
})

const selectedSearchPredictions = ref([])
const selectedSearchPredictionCategory = ref(null)
const searchPredictionDetails = ref('')
const searchPredictionCategories = ref([
    'Hateful',
    'Sexually Explicit',
    'Violent',
    'Dangerous and harmful activity',
    'Other'
])

</script>