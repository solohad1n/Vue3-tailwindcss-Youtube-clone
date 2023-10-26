<template>
  <div class="mr-2 flex w-full">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        @changeState="toggleSearchResults"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @update:query="updateSearchResults"
        @keydown.up.prevent
        @enter="selectSearchResult"
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        :results="results"
        :activeResultId="activeSearchResultId"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <TheSearchButton 
    @click.stop="selectSearchResult"
    />
  </div>
</template>
<script setup>
import TheSearchInput from './TheSearchInput.vue';
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const query = ref('')
const activeQuery = ref('')
const results = ref([])
const isSearchResultsShown = ref(false)
const activeSearchResultId = ref(null)

const keywords = [
        'new york giants',
        'new york alicia keys',
        'new york giants vs washington football',
        'new york',
        'new york song',
        'new york new york frank sinatra',
        'new york jets',
        'new york city',
        'new york giants live',
        'new york state of mind',
        'new york giants vs washington football live',
        'new york giants injury',
        'new york giants live stream',
        'new york accent'
      ]

const toggleSearchResults = (isSearchInputActive) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length
}

const handlePreviousSearchResult = () => {
  if (!isSearchResultsShown.value) {
    toggleSearchResults(true)
  } else if(activeSearchResultId.value == null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value == 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }
  updateQueryWithSearchResult()
}

const handleNextSearchResult = () => {
  if (!isSearchResultsShown.value) {
    toggleSearchResults(true)
  } else if(activeSearchResultId.value == null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 == results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }
  updateQueryWithSearchResult()
}

const updateQueryWithSearchResult = () => {
  const hasActiveSearchResult = activeSearchResultId.value !== null
  query.value = hasActiveSearchResult
    ? results.value[activeSearchResultId.value]
    : activeQuery.value
}

const updateSearchResults = () => {
  activeSearchResultId.value = null
  activeQuery.value = query.value
  if (query.value == '') {
    results.value = []
  } else {
    results.value = keywords.filter(result => {
      return result.includes(trimmedQuery.value)
    })
  }
}

const selectSearchResult = (id) => {
  query.value = results.value[id]

  toggleSearchResults(false)
  updateSearchResults()
}

const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ').trim()
})

</script>
