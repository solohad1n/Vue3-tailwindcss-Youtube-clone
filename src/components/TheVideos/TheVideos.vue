<template>
	<main :class="classes">
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto">
      <VideoItem v-for="i in 20" :key="i" :index="i"/>
    </div>
  </main>
</template>
<script setup>
import { computed } from 'vue';
import VideoItem from './VideoItem.vue';

const props = defineProps({
  isSidebarOpen: Boolean
})

const classes = computed(() => {
  return [
        props.isSidebarOpen ? 'xl:ml-64' : 'md:ml-24',
        'pt-32',
        'px-5',
        'pb-5'
      ]
})

</script>
