<template>
  <svg
    :class="$attrs.class || 'w-6 h-6'"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  >
  </svg>
</template>

<script setup>
import { ref } from 'vue';
import icons from '../../icons';

const props = defineProps(['name'])

const path = ref(icons[props.name])
</script>

<style>

</style>