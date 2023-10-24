<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title</span>
      <div class="mt-1 flex">
        <BaseTooltip :text="channelName" top>
          <span> {{ channelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Verified" top>
          <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1 mt-0.5"/>
        </BaseTooltip>
      </div>
      <div v-html="summary">
      </div>
    </div>
    <VideoItemDropdown/>
  </div>
</template>

<script setup>
import BaseIcon from '@/Icon/BaseIcon.vue'
import VideoItemDropdown from './VideoItemDropdown.vue'
import BaseTooltip from '@/BaseTooltip/BaseTooltip.vue'
import { computed } from 'vue'

const props = defineProps(['index'])

const summary = computed(() => {
  const day = props.index == 1 ? 'day' : 'days'
  return `${ props.index }K views &middot; ${ props.index } ${day} ago`
})

const channelName = computed(() => {
  return `Channel name ${props.index}`
})

</script>