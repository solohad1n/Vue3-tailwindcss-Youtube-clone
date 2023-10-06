<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>
<script setup>
  import { computed, defineProps } from 'vue'

  const props = defineProps(['category', 'isActive'])


  const classes = computed(() => {
    const classes = ['px-3', 'py-1', 'transition', 'rounded-full', 'border']

    return props.isActive
    ? [...classes, 'border-gray-700', 'bg-gray-600', 'hover:bg-gray-500', 'text-white']
    : [...classes, 'border-gray-300', 'bg-gray-100', 'hover:bg-gray-200']
  });

</script>