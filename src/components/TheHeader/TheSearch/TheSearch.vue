<template>
  <div class="mr-2 flex w-full">
    <div class="relative flex w-full">
      <TheSearchInput />
      <TheSearchResults :results="keywords" />
    </div>
    <TheSearchButton />
  </div>
</template>
<script setup>
import TheSearchInput from './TheSearchInput.vue';
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'

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
</script>
