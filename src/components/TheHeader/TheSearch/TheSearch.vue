<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        :has-results="results.length"
        @update:query="updateSearchResults"
        @change-state="toggleSearchResults"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @enter="selectSearchResult"
        @keydown.up.prevent
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        :results="results"
        :active-result-id="activeSearchResultId"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <TheSearchButton @click.stop="selectSearchResult" />
  </div>
</template>

<script setup>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'
import { computed, onMounted, ref } from 'vue'

const results = ref([])
const query = ref('')
const activeQuery = ref('')
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

onMounted(()=> {
    window.addEventListener('click', onClickAndResize)
    window.addEventListener('resize', onClickAndResize)
})

const onClickAndResize = () => {
  toggleSearchResults(false)
}

const updateSearchResults = () => {
  activeSearchResultId.value = null
  activeQuery.value = query.value

  if (query.value === '') {
    results.value = []
  } else {
    results.value = keywords.filter(result => {
      return result.includes(trimmedQuery.value)
    })
  }
}

const toggleSearchResults = (isSearchInputActive) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length > 0
}

const handlePreviousSearchResult = () => {
  if (isSearchResultsShown.value) {
    makePreviousSearchResultActive()
    updateQueryWithSearchResult()
  } else {
    toggleSearchResults(true)
  }
}

const handleNextSearchResult = () => {
  if (isSearchResultsShown.value) {
    makeNextSearchResultActive()
    updateQueryWithSearchResult()
  } else {
    toggleSearchResults(true)
  }
}

const makePreviousSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }
}

const makeNextSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }
}

const updateQueryWithSearchResult = () => {
  const hasActiveSearchResult = activeSearchResultId.value !== null

  query.value = hasActiveSearchResult
    ? results.value[activeSearchResultId.value]
    : activeQuery.value
}

const selectSearchResult = () => {
  query.value = activeSearchResultId.value
    ? results.value[activeSearchResultId.value]
    : query.value

  toggleSearchResults(false)

  updateSearchResults()
}

const trimmedQuery = computed(()=> {
  return query.value.replace(/\s+/g, ' ').trim()
})

</script>