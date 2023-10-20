<template>
	<section :class="classes">
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <CategoryItem
        v-for="category in categories"
        :key="category"
        :category="category"
        :is-active="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
  import { computed } from 'vue'
  import CategoryItem from './CategoryItem.vue'

  const props = defineProps({
    isSidebarOpen: Boolean
  })

  const categories = [
    'All',
    'Trucks',
    'Tools',
    'Machines',
    'Engines',
    'Snow',
    'Ships',
    'Roads',
    'Tanks',
    'Building',
    'Mars',
    'Woodworking',
    'Tractors',
    'Songs',
    'TV Shows',
    'Football',
    'Planes',
    'Live',
    'Streets',
    'Math',
    'Programming',
  ]
  
  const classes = computed(() => {
    return [
      props.isSidebarOpen ? 'xl:pl-64' : 'md:pl-24',
      'pt-14',
      'w-full',
      'fixed',
      'bg-white',
      'bg-opacity-95',
      'z-10']
  })
</script>
