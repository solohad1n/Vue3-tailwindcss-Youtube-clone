<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :index="index"/>
    <VideoItemInfo :index="index"/>
  </a>
</template>

<script setup>
import VideoItemThumbnail from '@/TheVideos/VideoItemThumbnail/VideoItemThumbnail.vue'
import VideoItemInfo from '@/TheVideos/VideoItemInfo.vue'

import { defineProps } from 'vue';

const props = defineProps(['index'])
</script>

<style>

</style>